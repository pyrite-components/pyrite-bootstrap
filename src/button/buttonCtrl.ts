import { Component, Attributes} from "pyrite";
import * as $ from "jquery";
import { ButtonTmpl} from "./buttonTmpl";

export interface ButtonAttrs {
    pyClass: string;
    pyTitle: string;
    pyLink?: string;
    pyTypeInput?: string;
    pyAriaPressed?: string,
    pyAutoComplete?: string
    pyDataToggle?: string;
    pyType?: string;
    pyId?: string;
    pyName?: string;
    pyAction?: Function;
    pyArgAction?: any;
    pyState?: string;
    pyDisabled?: Boolean;
    pyTabIndex?: string;
    pyChecked?: Boolean;
}

@Component(ButtonTmpl)
export class Button {
    @Attributes attrs: ButtonAttrs;

    onAction(event: any) {
        if(this.attrs.pyState === 'toogle'){
            $(this.attrs.pyId).button('toogle')
        } else if(this.attrs.pyState === 'dispose') {
            $(this.attrs.pyId).button('dispose')
        }

        if (this.attrs.pyAction)
            this.attrs.pyAction(this.attrs.pyArgAction, event);
    }
}