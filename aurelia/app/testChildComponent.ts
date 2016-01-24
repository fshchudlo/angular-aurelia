import {inlineView} from 'aurelia-templating';

@inlineView('<template><h3>${inputMessage}</h3><template>')
export class TestChildComponent {
    inputMessage: string;
    activate(inputMessage: string)
    {
        this.inputMessage = inputMessage;
    }
}