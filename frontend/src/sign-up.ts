import {html,LitElement} from "lit-element";


class SignUp extends LitElement{
    render() {
        return html`
            <vaadin-vertical-layout style="margin:auto;width: 50%;padding:5%">
                <h1 class="font-size-l">User Form</h1>
                <vaadin-text-field id="firstInput" label="Full Name"></vaadin-text-field>
                <vaadin-text-field id="secondInput" label="Address"></vaadin-text-field>
                <vaadin-text-field id="thirdInput" label="Email"></vaadin-text-field>
                <vaadin-horizontal-layout style="display:flex; width: 50%;">
                    <vaadin-button style="">Cancel</vaadin-button>
                    <vaadin-button theme="primary" style="margin-left: 30px">Submit</vaadin-button>
                </vaadin-horizontal-layout>
            </vaadin-vertical-layout>
        `
    }

}

customElements.define("sign-up",SignUp)