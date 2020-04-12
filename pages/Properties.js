import { Property } from "../components"
import React from "react"
import { RouteWithSubRoutes } from "../utilities"
import { Switch } from "react-router-dom"

export function Properties({ routes }) {
  return (
    <div className="antialiased text-gray-900">
      <div className="flex items-center justify-center min-h-screen p-8 bg-gray-200">
        <Property />
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>
    </div>
  )
}
