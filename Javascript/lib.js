// Print a message
console.log('Learning JS!!!!');


for(var j=0 ; j<10 ; j++)
{
    console.log('Value of j is ' + j);
}

//Variables & Data type

// Variables - Const / let / var

const topic = 'Javascript - Coding';
console.log('Value of topic is ' + topic);
console.log('HEre is the data type of topic variable ::' + typeof topic);

const pi = 3.14;
console.log('Value of pi is ' + pi);
console.log('HEre is the data type of pi variable ::' + typeof pi);

/*
pi = 3.45 // Change pi value and print 
console.log('Value of pi is ' + pi); // Errors out as varable is declared as const
*/

var evennumber = 2;
console.log('Value of evennumber is ' + evennumber);
console.log('HEre is the data type of evennumber variable ::' + typeof evennumber);

evennumber = 4; // Change evennumber value and print 
console.log('Value of evennumber is ' + evennumber);

evennumber = 6; // Change evennumber value and print 
console.log('Value of evennumber is ' + evennumber);


for(let i=0 ; i<10 ; i++)
{
    console.log('Value of i is ' + i);
}
//console.log('Value of i is ' + i);

console.log('Value of j is ' + j);

// undefined
let topic1 = undefined;
console.log(typeof topic1);

// for loop 
for(let z=0 ; z<5 ; z++)
{
    console.log('Value of z is ' + z);
}


// ARRAY
let weekdays = [];
weekdays.push('Monday');
weekdays.push('Tuesday');
weekdays.push('Wed');
weekdays.push('Thrusday');
weekdays.push('Friday');
console.log('Value of weekdays is ' + weekdays); // Print all values or items
console.log('Total weekdays:: ' + weekdays.length); // total # of items
console.log('Print 2nd day of week:: ' + weekdays[1]); // access items by index
console.log('Print 5nd day of week:: ' + weekdays[4]); // access items by index
console.log('Print 10th day of week:: ' + weekdays[10]); // access items by index

// Set
let evennumbers = new Set();
evennumbers.add(2);
evennumbers.add(4);
evennumbers.add(6);
evennumbers.add(8);
evennumbers.add(8);
evennumbers.add(8);
evennumbers.add(8);
evennumbers.add(8);
console.log('Value of evennumbers is ' + evennumbers); // Print all values or items
console.log('Value of evennumbers is ' + JSON.stringify(evennumbers)); // Print all values or items
console.log('Value of evennumbers is ' + evennumbers.keys());

//Map
let instrutor = new Map();
instrutor.set('APEX', 'Rupesh');
instrutor.set('LWC', 'Rahul');
instrutor.set('JS', 'Mageshwari');
console.log('Instructor for JS topic is  ' + instrutor.get('JS'));
console.log('Instructor for LWC topic is  ' + instrutor.get('LWC'));

// CLASSES

class TrainingModules
{
     // Variables
     _moduleName;
     _moduleCategory;

     // Constructor method
     constructor(ModuleName, ModuleCategory)
     {
        this._moduleName = ModuleName;
        this._moduleCategory = ModuleCategory;
     }

     showModuleAndCategory()
     {
         //console.log('Module Name is ' + this._moduleName + 
         //' and Module Category is ' + this._moduleCategory);

         console.log(`Module Name is ${this._moduleName} and  module category is ${this._moduleCategory}`);
     }
} 

let module1 = new TrainingModules('APEX', 'APEX Development'); // Create a new module from blueprint
module1.showModuleAndCategory(); // Make a call to the method defined inside the class

let module2 = new TrainingModules('LWC', 'LWC Development'); // Create a new module from blueprint
module2.showModuleAndCategory(); // Make a call to the method defined inside the class



let module3 = new TrainingModules('JS', 'LWC Development'); // Create a new module from blueprint
module3.showModuleAndCategory(); // Make a call to the method defined inside the class

