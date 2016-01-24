import {Component} from 'angular2/core';
import {TestChildComponent} from './testChildComponent';
@Component({
    selector: 'angular-app',
    template: '<h1>{{message}}</h1><test-child-component [inputMessage]="messageForChild"></test-child-component>',
    directives: [TestChildComponent]
})
export class App {
    message: string = 'Welcome to Angular2!';
    messageForChild: string = 'Hello from child component!';
}