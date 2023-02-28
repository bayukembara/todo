package org.vaadin.example;

import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.littemplate.LitTemplate;
import com.vaadin.flow.component.polymertemplate.Id;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.Route;

@Route("signup")
@Tag("sign-up")
@JsModule("./src/sign-up.ts")
public class SignUp extends LitTemplate {

    /**
     * Creates a new MainView.
     */

    @Id("firstInput")
    private TextField textField;

    @Id("secondInput")
    private TextField address;

    @Id("thirdInput")
    private TextField email;

    public SignUp(){

    }

}
