import React from "react"
import {
  Integration,
  Initial,
  Error,
  Loading,
} from "@jeetiss/react-any-integrate"

export const CodePen = ({
  slug,
  title,
  user,
  height = 400,
  preview = false,
  defaultTab = "",
  version = 2,
  themeId = "dark",
}) => (
  <Integration src="https://production-assets.codepen.io/assets/embed/ei.js">
    <Loading>Loading...</Loading>

    <Error>Something went wrong</Error>

    <Initial>
      <p
        data-height={height}
        data-theme-id={themeId}
        data-slug-hash={slug}
        data-default-tab={defaultTab}
        data-user={user}
        data-embed-version={version}
        data-pen-title={title}
        data-preview={preview}
        className="codepen"
      >
        See the Pen{" "}
        <a href={`https://codepen.io/${user}/pen/${slug}/`}>{title}</a>
        by {user} (<a href={`https://codepen.io/${user}`}>@{user}</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </p>
    </Initial>
  </Integration>
)
