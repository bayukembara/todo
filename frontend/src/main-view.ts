import {html, LitElement} from 'lit-element';


class MainView extends LitElement {
    render() {
        return html`
            <vaadin-vertical-layout style="margin:auto;width: 50%;padding:5%">
                <h1 class="font-size-l" id="heading">Hello World</h1>
            </vaadin-vertical-layout>
        `
    }
}


customElements.define('main-view', MainView);