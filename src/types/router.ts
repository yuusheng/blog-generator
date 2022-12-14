import type Koa from 'koa'
import type Router from 'koa-router'

export type KoaCtx = Koa.ParameterizedContext<
  any,
  Router.IRouterParamContext<any, {}>,
  any
>
