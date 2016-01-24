import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {TestChildComponent} from './testChildComponent';
import {BindingSamples} from './binding-samples/binding-samples';

@Component({
    selector: 'angular-app',
    template: `<h1>{{message}}</h1>
                <test-child-component [inputMessage]="messageForChild"></test-child-component>
                <router-outlet></router-outlet>`,
    directives: [TestChildComponent, ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/binding-samples', name: 'BindingSamples', component: BindingSamples, useAsDefault: true }
])
export class App 
{
    message: string = 'Welcome to Angular2!';
    messageForChild: string = 'Hello from child component!';
}