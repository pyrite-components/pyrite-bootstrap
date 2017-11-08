import { Component, Attributes} from "pyrite";
import {MainTmpl} from './mainTmpl';

@Component(MainTmpl)
export class Main {
    greet: boolean = false;

    onAction() {
        this.greet =! this.greet;
    }
}