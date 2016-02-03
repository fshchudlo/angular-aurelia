import {Component} from 'angular2/core';

@Component({templateUrl: 'app/binding-sample/binding-sample.html'})
export class BindingSample 
{
    interpolationString: string = 'Interpolation';
    iconUrl: string = 'https://angular.io/resources/images/logos/angular2/shield-with-beta.png';
    iconWidth: string = '167px';
    iconHeight: string = '100px';
    isSuccess: boolean = true;
    isButtonClicked: boolean = false;
    twoWayBindedProperty: string = '';
    alertClasses: string[] = ['', 'success', 'info', 'warning', 'danger'];
    selectedClass: string = '';
    
    onClicked()
    {
        this.isButtonClicked = !this.isButtonClicked;
    }
}