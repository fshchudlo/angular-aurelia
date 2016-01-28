import {Component} from 'angular2/core';
import {View} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'angular-app', templateUrl: 'app/app.html', directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/component-sample', name: 'ComponentSample', loader : () => System.import('app/component-sample/component-sample').then(m => m.ComponentSample), useAsDefault: true },
    { path: '/binding-sample', name: 'BindingSample', loader : () => System.import('app/binding-sample/binding-sample').then(m => m.BindingSample) }
])
export class App {
    message: string = "Welcome to Angular2!";
}