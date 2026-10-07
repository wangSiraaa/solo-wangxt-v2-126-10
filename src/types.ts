// 共享数据类型

export interface FovConfig {
  /** 中心 J2000 赤经（度） */
  centerRa: number;
  /** 中心 J2000 赤纬（度） */
  centerDec: number;
  /** 视场角半径（度），按球面角距定义 */
  radiusDeg: number;
}

export interface SiteState {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  height: number;
}

export interface SavedFov {
  uuid: string;
  name: string;
  createdAt: number;
  fov: FovConfig;
  siteId: string;
  /** 观测时间 UTC ISO 字符串 */
  timeUtcIso: string;
  note?: string;
}

export interface Annotation {
  uuid: string;
  createdAt: number;
  /** 批注锚点 J2000 赤经赤纬（度），坐标绑定，不绑像素 */
  ra: number;
  dec: number;
  text: string;
  color: string;
}

/**
 * 讲义版式：只保存"选择"（引用），不复制任何内容。
 * 视场/批注被删除后，版式中对应引用即失效，界面如实提示缺失，
 * 由用户决定是否移除失效引用——不会从版式里"复原"内容。
 * 生成讲义时所有坐标均按当前台站/UTC 现场重算。
 */
export interface HandoutLayout {
  uuid: string;
  name: string;
  createdAt: number;
  updatedAt: number;
  /** 引用的已保存视场 uuid */
  fovUuid: string;
  /** 目标 id（星表恒星或太阳系天体，如 'arcturus' / 'body-Mars'） */
  targetId: string;
  /** 引用的批注 uuid 列表（仅存引用，不存文字副本） */
  annotationUuids: string[];
  /** 讲义星图使用的投影 */
  projection: 'stereographic' | 'equidistant';
}
