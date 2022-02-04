import { LightningElement, api } from 'lwc';

export default class CarDetails extends LightningElement {

    @api carDetail;

    get carName()
    {
        console.log(this.carDetail);
        return "";//this.carDetail.data.fields.Name.value;
    }

    get carRentPerDay()
    {
        console.log(this.carDetail);
        return "";//this.carDetail.data.fields.Per_Day_Rent__c.value;
    }
}