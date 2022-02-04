import { LightningElement, api } from 'lwc';

export default class CarTile extends LightningElement {


    //car = { Id:"1", Picture: '/resource/cars/van/maruti_suzuki_eeco.jpg', CarOwner: 'Ashish'};
    @api car; // I m waiting for values to be pushed from parent component. In this case, carSearchResult
}