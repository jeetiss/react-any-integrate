import React, { useEffect } from "react"
import {
  Integration,
  Initial,
  Loading,
} from "@jeetiss/react-any-integrate"

export const Widget = () => {
  useEffect(() => {
    window.UPLOADCARE_PUBLIC_KEY = "demopublickey"
  })

  return (
    <Integration src="https://ucarecdn.com/libs/widget/3.7.4/uploadcare.full.min.js">
      <Loading>Loading...</Loading>

      <Initial>
        <input type="hidden" role="uploadcare-uploader" data-clearable />
      </Initial>
    </Integration>
  )
}
