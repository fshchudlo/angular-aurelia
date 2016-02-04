export class BindingSample {
    interpolationString: string = 'Interpolation';
    iconUrl: string = 'http://aurelia.io/images/main-logo.svg';
    iconWidth: string = '145';
    iconHeight: string = '42';
    oneWaySampleProperty: string = '';

    isSuccess: boolean = true;
    isButtonClicked: boolean = false;
    alertClasses: string[] = ['', 'success', 'info', 'warning', 'danger'];
    selectedClass: string = '';
    onClicked($event) {
        this.isButtonClicked = !this.isButtonClicked;
    }
    displayTextboxValue(value) {
        alert(value);
    }
}