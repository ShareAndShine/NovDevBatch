import { LightningElement } from 'lwc';

export default class PrintSomething extends LightningElement {


    // Property or Data property

    headerMsg;
    bodyMsg;
    _footerMsg;

    // Assign some value to the property
    headerMsg = 'Rent a Car';
    bodyMsg = 'Building a new project in LWC to use for car rental !! ';
    //_footerMsg_1 = '@2021 copyrights reserved '; // Option 1 - Define property
    
    
    get footerMsg() { // Option 2 - Define property

        this._footerMsg_1 = '@2021 copyrights reserved ';
        return this._footerMsg_1;
    }
    

   
    value = 'inProgress';

    get options() { // ARRAY OF OBJECTS
        return [ 
            { label: 'Sports', value: '0' },
            { label: 'Van', value: '1' },
            { label: 'SUV', value: '2' },
            { label: 'Hatch Back', value: '3'}
        ];
    }

  

    handleChange(event) {
        this.value = event.detail.value;
    }

}