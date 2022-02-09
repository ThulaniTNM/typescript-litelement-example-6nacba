import { LitElement, html, customElement, property } from 'lit-element';
import { IPerson } from '../people';

@customElement('person-card')
export class PersonCardElement extends LitElement {
  person: IPerson;

  render() {
    return html`
     <div id = 'img'></div>
     <h5></h5>
    `;
  }
}
