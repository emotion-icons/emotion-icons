import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./styles.css"
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
serviceWorker.register();
