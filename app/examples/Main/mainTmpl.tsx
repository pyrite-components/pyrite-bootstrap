import { Component, Attributes, Children, Render } from "pyrite";
import {Main} from "./mainCtrl";
import {Button} from "../../components";

export function MainTmpl(this: Main) {
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
                        pyTitle='Greet'
                        pyClass='btn btn-primary'
                        pyAction={this.onAction.bind(this)}>
                    </Button>
                </div>
                <div class='col-sm-2'>{this.greet ? 'Hello world' : null}</div>
            </div>
        </div>
    );
}