import React from "react"
import {
  Integration,
  Initial,
  Loading,
} from "@jeetiss/react-any-integrate"

export const HelloWorld = () => (
  <Integration src="./hello-script.js">
    <Loading>Loading...</Loading>

    <Initial>
      <div id="hello" />
    </Initial>
  </Integration>
)
