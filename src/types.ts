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

/** 讲义版式：只保存"引用 + 选择"，不缓存任何坐标/图层快照；
 *  生成讲义时一律按当前可重算视图实时计算。 */
export interface HandoutLayout {
  uuid: string;
  name: string;
  createdAt: number;
  /** 引用的已保存视场 uuid；null = 不引用（直接用当前视场） */
  fovUuid: string | null;
  /** 讲义主目标 id（星表 id 或 body-xxx）；null = 不指定 */
  targetId: string | null;
  /** 引用的现有批注 uuid 列表 */
  annotationUuids: string[];
  /** 讲义星图投影 */
  projection: 'stereographic' | 'equidistant';
}
