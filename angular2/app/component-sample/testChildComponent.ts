import {Component} from 'angular2/core';

@Component({
    selector: 'test-child-component',
    inputs: ['inputMessage'],
    template: `<div class="panel panel-default">
                <div class="panel-heading">Child component title</div>
                <div class="panel-body">
                    Message from parent component is: {{inputMessage}}
                </div>
               </div>`
})
export class TestChildComponent {
    inputMessage: string
}