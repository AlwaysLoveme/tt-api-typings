import { console, setInterval, setTimeout } from "./env"
import { BehaviorConstructor } from "./behavior"
import { ComponentConstructor } from "./component"
import { PageConstructor, GetCurrentPages } from "./page"
import { AppConstructor, GetApp } from "./app"
import * as API from "./api"

declare global {
  const App: AppConstructor
  const getApp: GetApp
  const Page: PageConstructor
  const getCurrentPages: GetCurrentPages
  const Component: ComponentConstructor
  const Behavior: BehaviorConstructor
  const tt: typeof API
  const console: console
  const setInterval: setInterval
  const setTimeout: setTimeout
}
