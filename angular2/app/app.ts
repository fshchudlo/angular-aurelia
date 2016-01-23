import {Component} from 'angular2/core';

@Component({selector: 'angular-app', template: '<h1>{{message}}</h1>' })
export class AppComponent {
    message: string = 'Welcome to Angular2!';
 }
