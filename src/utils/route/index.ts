import { bfs } from "../tree"

interface INamedRoute {
  name: string
  children?: INamedRoute[]
}

export function findRoute<T extends INamedRoute>(routes: T[] | T, name: string) {
  let result: T | null = null
  bfs(routes, (item) => {
    if (item.name === name) {
      result = item
      return {
        needBreak: true,
      }
    }
  })
  return result
}
