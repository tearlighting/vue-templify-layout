import "vue-router"
import { EPemission } from "@/store/pemission"
import type { EIcons } from "@/constants/icons"

type BaseMeta = {
  keepAlive?: boolean
  roles: EPemission[]
  /**
   * 自控制自己的显示，children 不会受影响,会继续递归
   */
  hidden?: boolean
  icon?: EIcons
  exact?: boolean
  externalLink?: string
}
type RequireTitleIfHidden<T extends boolean> = T extends true ? { hidden: true } : { hidden: false; title: string }

type TTemplifyRouteMeta = BaseMeta & (RequireTitleIfHidden<true> | RequireTitleIfHidden<false>)

interface ITemplifyRouteMeta extends TTemplifyRouteMeta {}
declare module "vue-router" {
  interface RouteMeta extends BaseMeta {}
  const r: RouteMeta = {}
}
