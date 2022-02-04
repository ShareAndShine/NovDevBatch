import { LightningElement, api, wire } from 'lwc';
import { fireEvent } from 'c/pubsub';
import { CurrentPageReference} from 'lightning/navigation';

export default class CarTile extends LightningElement {


    //car = { Id:"1", Picture: '/resource/cars/van/maruti_suzuki_eeco.jpg', CarOwner: 'Ashish'};
    @api car; // I m waiting for values to be pushed from parent component. In this case, carSearchResult

    // get the current Page reference
    @wire(CurrentPageReference) pageRef;

    carSelectHandler(event)
    {

        const carId = this.car.Id;

        // Publish the event so subscribers can receive selected carID
        fireEvent(this.pageRef, 'carselect', this.car);
        console.log('Event published  with payload- this.car: ' + this.car);
    }

}