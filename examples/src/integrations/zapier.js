import React from "react"
import {
  Integration,
  Initial,
  Loading,
} from "@jeetiss/react-any-integrate"

export const ZapBook = ({ zaps }) => (
  <Integration
    src={`https://zapier.com/zapbook/embed/widget.js?guided_zaps=${zaps.join(
      ","
    )}&html_id=zap`}
  >
    <Loading>Loading...</Loading>

    <Initial>
      <div id="zap" />
    </Initial>
  </Integration>
)
