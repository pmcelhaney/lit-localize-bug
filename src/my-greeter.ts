import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {msg} from '@lit/localize';

@customElement('my-greeter');
class MyGreeter extends LitElement {
  @property()
  who = 'World';

  render() {
    return msg(html`Hello <b>${this.who}</b>`);
  }
}