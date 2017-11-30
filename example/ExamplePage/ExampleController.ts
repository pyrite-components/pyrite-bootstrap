import { Component, Attributes} from "pyrite";
import {ExampleTemplate} from './ExampleTemplate';

@Component(ExampleTemplate)
export class ExampleController {
    greet: Array<Boolean> = [];
    form: any = {};
    checkedCss: any;

    $onInit() {
        this.greet.fill(false, 0, 10);
    }

    onAction(element: number, event?: any) {
        event.preventDefault();
        event.stopPropagation();
        this.greet[element] =! this.greet[element];
    }
}