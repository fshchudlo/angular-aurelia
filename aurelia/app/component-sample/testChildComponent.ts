import {inlineView} from 'aurelia-templating';

@inlineView(`<template><div class="panel panel-default">
                <div class="panel-heading">Child component title</div>
                <div class="panel-body">
                    Message from parent component is: \${inputMessage}
                </div>
               </div><template>`)
export class TestChildComponent {
    inputMessage: string;
    activate(inputMessage: string)
    {
        this.inputMessage = inputMessage;
    }
}