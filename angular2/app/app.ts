import {Component} from 'angular2/core';
import {View} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {BindingSample} from './binding-sample/binding-sample';
import {ComponentSample} from './component-sample/component-sample';

@Component({
    selector: 'angular-app', templateUrl: 'app/app.html', directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/component-sample', name: 'ComponentSample', component: ComponentSample, useAsDefault: true },
    { path: '/binding-sample', name: 'BindingSample', component: BindingSample }
])
export class App {
    message: string = "Welcome to Angular2!";
}