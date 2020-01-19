import { html, TemplateResult, LitElement } from "lit-element";
import "@ludeeus/colorlog";

class MyCustomComponent extends LitElement {
  protected render(): TemplateResult | void {
    const logs = `
2020-01-18 20:54:23 DEBUG (MainThread) [app] Initializing
2020-01-18 20:54:23 INFO (MainThread) [app] Setting app
AttributeError: 'NoneType' object has no attribute 'get'
2020-01-18 20:54:23 WARNING (MainThread) [app] Something looks off
2020-01-18 20:54:23 ERROR (MainThread) [app] Got into trouble
2020-01-18 20:54:23 CRITICAL (MainThread) [app] Application terminated
    `;
    return html`
      <color-log .log=${logs}></color-log>
    `;
  }
}
