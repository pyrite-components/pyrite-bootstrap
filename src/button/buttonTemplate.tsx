import { Component, Attributes, Children, Render } from "pyrite";
import {ButtonController} from "./buttonController";

export function ButtonTemplate(this: ButtonController) {
    let button;
    switch(this.attrs.type) {
        case 'link':
            button = <a
                    href={this.attrs.link || '#'}
                    class={this.attrs.class}
                    data-toggle={this.attrs.dataToggle}
                    role='button'
                    tabindex={this.attrs.tabIndex || "-1"}
                    aria-pressed={this.attrs.ariaPressed}
                    autocomplete={this.attrs.autoComplete}
                    id={this.attrs.id}
                    onclick={this.onAction.bind(this)}> {this.attrs.title}
                </a>;
            break;
        case 'checkbox':
            button = <label class={`${this.attrs.class}${this.attrs.checked ? ' active': ''}`}>
                <input
                    type='checkbox'
                    checked={this.attrs.checked}
                    id={this.attrs.id}
                    name={this.attrs.name}
                    autocomplete={this.attrs.autoComplete}
                    onchange={(event: any) => this.onChecked(event)}/> {this.attrs.title}
            </label>;
            break;
        case 'radio':
            button = <label class={this.attrs.class}>
                <input 
                    type='radio'
                    checked={this.attrs.checked}
                    id={this.attrs.id}
                    name={this.attrs.name}
                    autocomplete={this.attrs.autoComplete}
                    onclick={this.onAction.bind(this)}/> {this.attrs.title}
            </label>;
            break;
        case 'input':
            button= <input
                class={this.attrs.class}
                type={this.attrs.typeInput || 'submit'}
                value={this.attrs.title}
                id={this.attrs.id}
                name={this.attrs.name}
                autocomplete={this.attrs.autoComplete}
                onclick={this.onAction.bind(this)}>
            </input>
            break;
        default:
            button = 
                <button 
                    class={this.attrs.class}
                    type='button'
                    data-toggle={this.attrs.dataToggle}
                    aria-pressed={this.attrs.ariaPressed}
                    autocomplete={this.attrs.autoComplete}
                    id={this.attrs.id}
                    disabled={this.attrs.disabled}
                    onclick={this.onAction.bind(this)}> {this.attrs.title}
                </button>;
    }
    return button;
}
