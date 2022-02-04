import { LightningElement, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import allCarTypes from '@salesforce/apex/carSearchFormController.getCarTypes'; // Refer APEX method


export default class CarSearchForm extends NavigationMixin(LightningElement) {

    /*

    New button - On click , open new page to create car type
        - Solution: Use NavigationMixin option 

    Car Type - Combo Box
        - Solution
            1. Get list of car types from Database using APEX class - DONE
            2. From JS Controller access the APEX class - DONE
                    - Import the auraenabled apex method
                    - Use @wire method to make a call to APEX method
            3. From JS Controller read the data 
            4. From JS controller assign the data to a property
                    - Introduced carTypes array
            5. Use the property to bind in HTML and list car types in front end (HTML)

    */

    carTypes;  // An array for storing all the car types being retrieved from the database

    carTypesForComboBox;
    value = 'inProgress';
    carTypeId; 

    get options() { // ARRAY OF OBJECTS
        return [ 
            { label: 'Sports', value: '0' },
            { label: 'Van', value: '1' },
            { label: 'SUV', value: '2' },
            { label: 'Hatch Back', value: '3'}
        ];
    }

    // Make a call to the database using wire 
    // and process the output. System will automatically store the output in "data"  variable. In case of error. it stoes the same in "error" variable
    @wire(allCarTypes)
    processOutput({data,error})
    {
        if(data)
        {
            this.carTypes = [{value:'', label: 'All Car Types'}];
            
            console.log("Value of data is :: " + JSON.stringify(data));  
            
            data.forEach(element => 
                {
                    // dummy object structure
                    const  carType = {};
                    carType.label = element.Name;
                    carType.value = element.Id;
                    this.carTypes.push(carType);
                    
                });  

                console.log("Value of carTypes is :: " + JSON.stringify(this.carTypes));  
        }    
        

    }


    handleChange(event) {
        this.carTypeId = event.detail.value;
        console.log('ID of selected car type::' + this.carTypeId);

        // Use events to send selected CarType Id to carSearchContainner component
        const carTypeSelectionChangeEvent = new CustomEvent('cartypeselect', {detail: this.carTypeId});
        this.dispatchEvent(carTypeSelectionChangeEvent);

        console.log('Event dispatched !!!!');
    }

    // Define new button click event
    handleNewButtonClick()
    {
        this[NavigationMixin.Navigate]( {
            type: 'standard__objectPage',
            attributes: {
                objectApiName: "Car_Type__c",
                actionName:'new'
            }
        });
    }

    
}