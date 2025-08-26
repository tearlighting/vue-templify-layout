import "vue-router"
import { EPemission } from "@/store/pemission"
import { TIcon } from "@/components/icon"

type BaseMeta = {
  keepAlive?: boolean
  roles?: EPemission[]
  hidden?: boolean
  icon?: TIcon
  exact?: boolean
  externalLink?: string
}
type RequireTitleIfHidden<T extends boolean> = T extends true ? { hidden: true; title: string } : { hidden?: false; title?: string }

type TTemplifyRouteMeta = BaseMeta & (RequireTitleIfHidden<true> | RequireTitleIfHidden<false>)

interface ITemplifyRouteMeta extends TTemplifyRouteMeta {}
declare module "vue-router" {
  interface RouteMeta extends BaseMeta {}
  const r: RouteMeta = {}
}
