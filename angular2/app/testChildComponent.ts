import {Component} from 'angular2/core';

@Component({ 
    selector: 'test-child-component', 
    inputs: ['inputMessage'],
    template: '<h3>{{inputMessage}}</h3>' })
export class TestChildComponent {
    inputMessage: string
}