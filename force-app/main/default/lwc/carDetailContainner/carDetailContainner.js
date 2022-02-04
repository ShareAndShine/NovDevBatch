import { LightningElement, wire } from 'lwc';
import { fireEvent } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';
import { registerListener, unregisterAllListeners} from 'c/pubsub';
import { getRecord } from 'lightning/uiRecordApi'; 

//Fields to be retrieved
import CAR_ID from '@salesforce/schema/Car__c.Id';
import CAR_NAME from '@salesforce/schema/Car__c.Name';
import CAR_BUILDYEAR from '@salesforce/schema/Car__c.Build_Year__c';
import CAR_RENT from '@salesforce/schema/Car__c.Per_Day_Rent__c';

const fields = [CAR_ID,CAR_NAME, CAR_BUILDYEAR, CAR_RENT];

export default class CarDetailContainner extends LightningElement {

    selectedTabValue;
    carId;
    
    tabChangeHandler(event)
    {
        this.selectedTabValue = event.target.value;
    }

     // get the current Page reference
     @wire(CurrentPageReference) pageRef;


     // create an array to hold all the fields


     //fetch details about the selected car from the database
    @wire(getRecord, { recordId: '$carId', fields})
    car;

    connectedCallback()
    {
        registerListener('carselect', this.callBackMethod, this);
    }

    callBackMethod(payload)
    {
        //console.log('Payload as receivd from publisher::' + payload);
        this.carId = payload.Id;
        console.log('Payload received on subscriber end - carId is ::' + this.carId);
    }
   
}