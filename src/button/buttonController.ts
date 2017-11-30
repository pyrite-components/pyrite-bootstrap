import { Component, Attributes} from "pyrite";
import * as $ from "jquery";
import { ButtonTemplate } from "./buttonTemplate";

export interface ButtonAttrs {
    class: string;
    title: string;
    link?: string;
    typeInput?: string;
    ariaPressed?: string,
    autoComplete?: string
    dataToggle?: string;
    type?: string;
    id?: string;
    name?: string;
    action?: Function;
    argAction?: any;
    state?: string;
    disabled?: Boolean;
    tabIndex?: string;
    checked?: Boolean;
}

@Component(ButtonTemplate)
export class ButtonController {
    @Attributes attrs: ButtonAttrs;

    onChecked(event: any) {
        this.attrs.checked = event.target.checked;
    }

    onAction(event: any) {
        if(this.attrs.state === 'toogle'){
            $(this.attrs.id).button('toogle')
        } else if(this.attrs.state === 'dispose') {
            $(this.attrs.id).button('dispose')
        }

        if (this.attrs.action)
            this.attrs.action(this.attrs.argAction, event);
    }
}