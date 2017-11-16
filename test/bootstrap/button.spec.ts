const jsdom = require('jsdom-global')();

import * as m from 'mithril';
import { expect } from "chai";
import * as sinon from "sinon";

import {ButtonController as Button} from "../../src/button/buttonController";

describe(' Button Bootstrap', () => {
    it('should create a button with class btn btn-primary', (done) => {
        const component:any = m(Button as any, {
            title: "Greet",
            class: "btn btn-primary",
            oncreate: () => {
                const className = component.instance.dom.getAttribute("class");
                expect(className).to.equal("btn btn-primary");
                done();
            }
        });

        m.render(document.body, component);
    });
});