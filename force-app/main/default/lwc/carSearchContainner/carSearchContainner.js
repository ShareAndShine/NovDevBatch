import { LightningElement } from 'lwc';

export default class CarSearchContainner extends LightningElement {

    
    carTypeId ='';
    carTypeSelecthandler(event)
    {
    
        this.carTypeId = event.detail;
        console.log('Value as received from child component - carTypeId is::' + this.carTypeId);

    }
}