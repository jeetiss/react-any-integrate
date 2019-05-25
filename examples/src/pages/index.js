import React from "react"
import {
  HelloWorld,
  CodePen,
  ZapBook,
  Widget,
  WithError,
} from "../integrations"

const IndexPage = () => (
  <main style={{ maxWidth: "700px", margin: "0 auto 300px auto" }}>
    <h1>React-any-integrate examples</h1>

    <h2>Hello world</h2>

    <HelloWorld />

    <h2>Code Pen</h2>

    <CodePen slug="EzEjvZ" user="dsenneff" />

    <h2>Zapier</h2>

    <ZapBook zaps={[12, 600, 322]} />

    <h2>Uploadcare Widget</h2>

    <Widget />

    <h2>Handle Errors</h2>

    <WithError />
  </main>
)

export default IndexPage
