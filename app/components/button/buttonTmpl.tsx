import { Component, Attributes, Children, Render } from "pyrite";
import {Button} from "./buttonCtrl";

export function ButtonTmpl(this: Button) {
    let button;
    switch(this.attrs.pyType) {
        case 'link':
            button = <a
                    href={this.attrs.pyLink || '#'}
                    class={this.attrs.pyClass}
                    data-toggle={this.attrs.pyDataToggle}
                    role='button'
                    tabindex={this.attrs.pyTabIndex || "-1"}
                    aria-pressed={this.attrs.pyAriaPressed}
                    autocomplete={this.attrs.pyAutoComplete}
                    id={this.attrs.pyId}
                    onclick={this.onAction.bind(this)}> {this.attrs.pyTitle}
                </a>;
            break;
        case 'checkbox':
            button = <label class={this.attrs.pyClass}>
                <input 
                    type='checkbox'
                    checked={this.attrs.pyChecked}
                    id={this.attrs.pyId}
                    name={this.attrs.pyName}
                    autocomplete={this.attrs.pyAutoComplete}
                    onclick={this.onAction.bind(this)}> {this.attrs.pyTitle}
                </input>
            </label>;
            break;
        case 'radio':
            button = <label class={this.attrs.pyClass}>
                <input 
                    type='radio'
                    checked={this.attrs.pyChecked}
                    id={this.attrs.pyId}
                    name={this.attrs.pyName}
                    autocomplete={this.attrs.pyAutoComplete}
                    onclick={this.onAction.bind(this)}> {this.attrs.pyTitle}
                </input>
            </label>;
            break;
        case 'input':
            button= <input 
                type={this.attrs.pyTypeInput || 'submit'}
                value={this.attrs.pyTitle}
                id={this.attrs.pyId}
                name={this.attrs.pyName}
                autocomplete={this.attrs.pyAutoComplete}
                onclick={this.onAction.bind(this)}>
            </input>
        default:
            button = 
                <button 
                    class={this.attrs.pyClass}
                    type='button'
                    data-toggle={this.attrs.pyDataToggle}
                    aria-pressed={this.attrs.pyAriaPressed}
                    autocomplete={this.attrs.pyAutoComplete}
                    id={this.attrs.pyId}
                    disabled={this.attrs.pyDisabled}
                    onclick={this.onAction.bind(this)}> {this.attrs.pyTitle}
                </button>;
    }
    return button;
}
