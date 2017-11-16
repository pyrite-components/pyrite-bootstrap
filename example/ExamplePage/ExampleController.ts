import { Component, Attributes} from "pyrite";
import {ExampleTemplate} from './ExampleTemplate';

@Component(ExampleTemplate)
export class ExampleController {
    greet: boolean = false;

    onAction() {
        this.greet =! this.greet;
    }
}