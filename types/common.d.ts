/**
 * 联合 → 交叉
 * 主要是利用分发特性
 *
 * 直接写是不会分发的
 * ```ts
 * //string
 * type T = string|1 extends string?string:number
 * ```
 * 只有计算才会
 * ```
 * type Func<T> = T extends string?string:number
 * //string|number
 * type T = Func<string|1>
 * ```
 *
 * 交叉会融和在一起，暂时没有办法直接将联合类型变成交叉类型
 */
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never
