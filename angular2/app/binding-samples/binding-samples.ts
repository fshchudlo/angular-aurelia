import {Component} from 'angular2/core';

@Component({ 
    selector: 'test-child-component', 
    inputs: ['inputMessage'],
    template: '<h3>Hello from binding samples!</h3>' })
export class BindingSamples {
}