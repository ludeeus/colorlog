import { html, css, LitElement } from "lit-element";

class ColorLog extends LitElement {
  static get properties() {
    return {
      log: { type: String }
    };
  }

  render() {
    if (!this.log) return html``;
    return html`
      <div class="container">
        ${this.log.split("\n").map(logline => {
          if (logline.length === 0) {
            return;
          }
          let classnames = /( ERROR | INFO | WARNING | DEBUG | CRITICAL )/g.test(
            logline
          )
            ? "logline "
            : "";
          classnames += logline.includes("ERROR" || "[error]")
            ? "error"
            : logline.includes(" INFO " || "[info]")
            ? "info"
            : logline.includes(" WARNING " || " [warning] ")
            ? "warning"
            : logline.includes(" DEBUG " || " [debug] ")
            ? "debug"
            : logline.includes(" CRITICAL " || " [critical] ")
            ? "critical"
            : "";

          return html`
            <span class="${classnames}">${logline}</span>
          `;
        })}
      </div>
    `;
  }

  static get styles() {
    return css`
      span {
        color: var(--colorlog-text, #000000);
        white-space: pre-wrap;
        display: block;
        font-family: var(--colorlog-font-family, monospace);
      }

      .container {
        display: block;
      }

      .error {
        color: var(--colorlog-error, #f00000);
      }

      .info {
        color: var(--colorlog-info, #00ab00);
      }

      .warning {
        color: var(--colorlog-warning, #ffc303);
      }

      .debug {
        color: var(--colorlog-debug, #00b2fd);
      }

      .critical {
        color: var(--colorlog-critical, #d00000);
      }

      .logline {
        margin: 2px 0;
      }
    `;
  }
}
customElements.define("color-log", ColorLog);
