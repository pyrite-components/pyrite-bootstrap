import { Component, Attributes} from "pyrite";
import {ExampleTemplate} from './ExampleTemplate';

@Component(ExampleTemplate)
export class ExampleController {
    greet: Array<Boolean> = [];
    checkedJs: boolean;
    checkedHtml: boolean;
    checkedCss: boolean,

    $onInit() {
        this.greet.fill(false, 0, 10);
    }

    onAction(element: number, event?: any) {
        event.preventDefault();
        event.stopPropagation();
        this.greet[element] =! this.greet[element];
    }
}