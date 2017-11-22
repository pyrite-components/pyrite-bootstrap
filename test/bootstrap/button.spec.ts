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
    it('have to create a button with class btn btn-primary', (done) => {
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

    it('have to show "hello wold" when click in button', (done) => {
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

    it('Have to be a link button', (done) => {
        const component:any = m(Button as any, {
            title: 'Greet',
            type: 'link',
            link: 'http://www.pyritejs.org',
            key: 3,
            class: 'btn btn-primary',
            oncreate: () => {
                const element = component.instance.dom.tagName;
                const hrefAttr = component.instance.dom.getAttribute('href');
                expect(element).to.equal('A');
                expect(hrefAttr).to.equal('http://www.pyritejs.org');
                done();
            }
        });

        m.render(document.body, component);
    });

    it('Have to be a input button', (done) => {
        const component:any = m(Button as any, {
            type: 'input',
            title: 'Greet',
            id: 'greet',
            key: 4,
            class: 'btn btn-primary',
            oncreate: () => {
                const element = component.instance.dom.tagName;
                const valueAttr = component.instance.attrs.value;
                const idAttrs = component.instance.dom.getAttribute("id");
                expect(element).to.equal('INPUT');
                expect(valueAttr).to.equal('Greet');
                done();
            }
        });

        m.render(document.body, component);
    });

    it('Have to be a checkbox button', (done) => {
        let checked;
        const component:any = m(Button as any, {
            type: 'checkbox',
            title: 'Greet',
            checked: checked,
            key: 5,
            class: 'btn btn-primary',
            oncreate: () => {
                console.log(component.instance.children[0].attrs);
                const comp = component.instance.children[0].attrs;
                expect(comp.checked).to.be.undefined;
                const checkedClick = chai.spy.on(comp, "onclick");
                comp.onclick();
                expect(checkedClick).to.have.been.called();
                expect(comp.checked).to.be.true;

                done();
            }
        });

        m.render(document.body, component);
    });



});