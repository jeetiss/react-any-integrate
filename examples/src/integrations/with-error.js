import React from "react"
import {
  Integration,
  Initial,
  Error,
  Loading,
} from "@jeetiss/react-any-integrate"


export const WithError = () => (
  <Integration src="//example.com/nope.js">
    <Loading>Loading...</Loading>

    <Error>File not found</Error>

    <Initial><span /></Initial>
  </Integration>
)
