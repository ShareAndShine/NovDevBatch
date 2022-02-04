import { LightningElement, wire, api } from 'lwc';
import  fetchCars from '@salesforce/apex/carSearchResultController.getCars';

export default class CarSearchResult extends LightningElement {

   @api carTypeId;

    cars; // Array to hold cars from database
    
    // Make a call to APEX method using wire function
    @wire(fetchCars, {carTypeID: '$carTypeId'})
    processOutput({data,error})
    {
        if(data)
        {
            this.cars = data; // Assign the data to cars property 
            console.log('Value of data is ' + JSON.stringify(data));
        }
        else if(error)
        {
            console.log('error !!!')
        }
    }
    
    
    
    
    
    // Array of objects
    /*cars = [

        { Id:"1", Picture: '/resource/cars/van/maruti_suzuki_eeco.jpg', CarOwner: 'Ashish'},
        { Id:"2", Picture: '/resource/cars/luxury/ford_mustang.jpeg', CarOwner: 'Mamatha'},
        { Id:"3", Picture: '/resource/cars/luxury/mercedes_benz_gls.jpg', CarOwner: 'Ramani'},
        { Id:"4", Picture: '/resource/cars/sports/Jaguar_F_type_Coupe.jpg', CarOwner: 'Vamsi'},

        { Id:"5", Picture: '/resource/cars/van/maruti_suzuki_eeco.jpg', CarOwner: 'Ashish'},
        { Id:"6", Picture: '/resource/cars/luxury/ford_mustang.jpeg', CarOwner: 'Mamatha'},
        { Id:"7", Picture: '/resource/cars/luxury/mercedes_benz_gls.jpg', CarOwner: 'Ramani'},
        { Id:"8", Picture: '/resource/cars/sports/Jaguar_F_type_Coupe.jpg', CarOwner: 'Vamsi'}                

    ];*/


}