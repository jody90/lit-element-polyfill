import "regenerator-runtime/runtime.js";

import { LitElement, html, css } from 'lit-element';

class AwesomePanel extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 15px;
        background-color: yellow;
        margin: 15px;
        border: 3px solid red;
      }
      h1 {
        margin: 0 0 10px 0;
      }
    `;
  }

  constructor() {
    super()
    console.log("foobar");
  }

  static get properties() {
    return {
      header: { type: String },
    };
  }

  render() {
    return html`
      <h1>${this.header}</h1>
      <slot></slot>
    `;
  }
}

customElements.define('awesome-panel', AwesomePanel);
