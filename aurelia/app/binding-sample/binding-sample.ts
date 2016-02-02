export class BindingSample {
    interpolationString: string = 'Interpolation';
    oneTimeBindedProperty: string = 'http://aurelia.io/images/main-logo.svg';
    oneWayBindedProperty: string = '';


    isSuccess: boolean = true;
    isButtonClicked: boolean = false;
    alertClasses: string[] = ['', 'success', 'info', 'warning', 'danger'];
    selectedClass: string = '';
    onClicked($event) {
        this.isButtonClicked = !this.isButtonClicked;
    }
}