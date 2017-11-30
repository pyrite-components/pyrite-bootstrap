import { Render, core } from "pyrite";
import {ExampleController} from "./ExampleController";
import {Button} from "../../src";
import {Prism} from "pyrite-prism";

export function ExampleTemplate(this: ExampleController) {

    const simpleButtonExample = `
        <div class='col-sm-2'>
            <Button 
                title='Greet'
                class='btn btn-primary'
                argAction='0'
                action={this.onAction.bind(this)}>
            </Button>
        </div>
        <div class='col-sm-2'>{this.greet[0] ? 'Hello world' : null}</div>`;
    
    const inputButtonExample = `
        <div class='col-sm-2'>
            <Button 
                title='Greet'
                type='input'
                argAction='1'
                class='btn btn-secondary'
                value='tilte'
                name='greet'
                id='id'
                action={this.onAction.bind(this)}>
            </Button>
        </div>
        <div class='col-sm-2'>{this.greet[1] ? 'Hello world' : null}</div>
        <div>
    `;

    const checkboxButtonExample = `
        <div class='col-sm-2'>
            <div class='btn-group' data-toggle='buttons'>
                <Button 
                    title='HTML'
                    type='checkbox'
                    checked={this.form['html']}
                    class='btn btn-primary'>
                </Button>
                <Button 
                    title='CSS'
                    type='checkbox'
                    checked={this.form['css']}
                    class='btn btn-primary'>
                </Button>
                <Button 
                    title='JS'
                    type='checkbox'
                    checked={this.form['js']}
                    class='btn btn-primary'>
                </Button>
            </div>
        </div>
    `;

    return (
        <div class='container'>
            <h1>Pyrite Bootstrap</h1>

            <h2>Button</h2>

            <div class='row'>
                <div class='col-sm-12'>
                    1. Simple Button:    
                </div> 
                <div class='col-sm-2'>
                    <Button 
                        title='Greet'
                        class='btn btn-primary'
                        argAction='0'
                        action={this.onAction.bind(this)}>
                    </Button>
                </div>
                <div class='col-sm-2'>{this.greet[0] ? 'Hello world' : null}</div>
                <div class='col-sm-12'>
                    <Prism language='html' code={simpleButtonExample}></Prism>
                </div>
            </div>
            <div class='row'>
                <div class='col-sm-12'>
                    1. Input Button:    
                </div> 
                <div class='col-sm-2'>
                    <Button 
                        title='Greet'
                        type='input'
                        argAction='1'
                        class='btn btn-secondary'
                        value='tilte'
                        name='greet'
                        id='id'
                        action={this.onAction.bind(this)}>
                    </Button>
                </div>
                <div class='col-sm-2'>{this.greet[1] ? 'Hello world' : null}</div>
                <div class='col-sm-12'>
                    <Prism language='html' code={inputButtonExample}></Prism>
                </div>
            </div>
            <div class='row'>
                <div class='col-sm-12'>
                    1. Input Checkbox Button:    
                </div> 
                <div class='col-sm-2'>
                    <div class="btn-group" data-toggle="buttons">
                        <Button 
                            title='HTML'
                            type='checkbox'
                            checked={this.form['html']}
                            class='btn btn-primary'>
                        </Button>
                        <Button 
                            title='CSS'
                            type='checkbox'
                            checked={this.form['css']}
                            class='btn btn-primary'>
                        </Button>
                        <Button 
                            title='JS'
                            type='checkbox'
                            checked={this.form['js']}
                            class='btn btn-primary'>
                        </Button>
                    </div>
                </div>
                <div class='col-sm-12'>
                    <Prism language='html' code={checkboxButtonExample}></Prism>
                </div>
            </div>
        </div>
    );
}