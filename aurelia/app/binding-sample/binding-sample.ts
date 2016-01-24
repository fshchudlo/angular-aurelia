import {inlineView} from 'aurelia-templating';
@inlineView(`<template>
                <div class="sample-header">
                    <h1>\${message}</h1>
                </div>
            </template>`)
export class BindingSample {
    message: string = 'This is a binding sample';
}