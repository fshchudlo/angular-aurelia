import {Component} from 'angular2/core';
import {TestChildComponent} from './test-сhild-сomponent';
@Component({
    template: `
    <div class="sample-header">
        <h1>{{message}}</h1>
    </div>
    <test-child-component [inputMessage]="messageForChild"></test-child-component>`,
    directives: [TestChildComponent]
})
export class ComponentSample 
{
    message: string = 'This is a component with child component sample';
    messageForChild: string = 'Hello to child component!';
}