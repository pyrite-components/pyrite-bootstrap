import { Render, core } from "pyrite";
import {ExampleController} from "./ExampleController";
import {Button} from "../../src";
import {Prism} from "pyrite-prism";

export function ExampleTemplate(this: ExampleController) {

    const buttonExampl = `
        <div class='col-sm-2'>
            <Button 
                title='Greet'
                class='btn btn-primary'
                action={this.onAction.bind(this)}>
            </Button>
        </div>
        <div class='col-sm-2'>{this.greet ? 'Hello world' : null}</div>`;

    return (
        <div class='container'>
            <h1>Pyrite Bootstrap</h1>

            <h2>Button</h2>

            <div class='row'>
                <div class='col-sm-2'>
                    1. Simple Button:    
                </div> 
                <div class='col-sm-2'>
                    <Button 
                        title='Greet'
                        class='btn btn-primary'
                        action={this.onAction.bind(this)}>
                    </Button>
                </div>
                <div class='col-sm-2'>{this.greet ? 'Hello world' : null}</div>
                <div>
                    <Prism language='html' code={buttonExampl}></Prism>
                </div>
            </div>
        </div>
    );
}