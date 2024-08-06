import React from "react";
import ReactDOM from "react-dom";
import MyWebComponent from "./Mycomponent";

class MyWebComponentWrapper extends HTMLElement {
  connectedCallback() {
    const message = this.getAttribute("message") || "Hello, World!";
    ReactDOM.render(<MyWebComponent message={message} />, this);
  }
}

customElements.define("my-web-component", MyWebComponentWrapper);
