import * as console from 'console';
const jsdom = require('jsdom-global')();

import * as m from 'mithril';
import * as chai from 'chai';
import * as spy from 'chai-spies';
import { greeting } from "./sources";
import {ButtonController as Button} from "../../src/button/buttonController";

chai.use(spy);
const expect = chai.expect;

describe(' Button Bootstrap', () => {
    it('should create a button with class btn btn-primary', (done) => {
        const component:any = m(Button as any, {
            title: "Greet",
            key: 1,
            class: "btn btn-primary",
            oncreate: () => {
                const className = component.instance.dom.getAttribute("class");
                expect(className).to.equal("btn btn-primary");
                done();
            }
        });

        m.render(document.body, component);
    });

    it('should show "hello wold" when click in button', (done) => {
        const component:any = m(Button as any, {
            title: "Greet",
            key: 2,
            action: greeting,
            class: "btn btn-primary",
            oncreate: () => {
                let text;
                const comp = component.instance.attrs;

                const greetingFunction = chai.spy.on(comp, "onclick");
                comp.onclick();
                expect(greetingFunction).to.have.been.called();

                const element = document.body.querySelector("p");
                if(element) text = element.innerText;
                expect(text).to.equal('Hello world');
                done();
            }
        });

        m.render(document.body, component);
    });
});