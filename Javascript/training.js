function showMessage()
{
    // Reading data from screen and assigning the same to local variable
    let moduleName = document.querySelector('#txtName').value;
    let moduleInstructor = document.getElementById('txtInstructor').value;

    // back tick format to concat multiple strings 
    console.log(`For module - ${moduleName} , the instructor is ${moduleInstructor}`);
}

function getNews()
{
    //console.log('Make a call to News API and get latest news....')
}

// Method 1 - Function type 1
function addModuleV1(moduleName, moduleInstructor)
{
    
    console.log(`Version 1 : Module - ${moduleName} with Instructor - ${moduleInstructor}
                         has been added !!`);
}

// Method 2 - Function type 2 (nameless)

const addModuleV2 = function(moduleName, moduleInstructor)
{
    console.log(`Version 2: Module - ${moduleName} with Instructor - ${moduleInstructor}
                         has been added !!`);
}

// Method 2 - Function type 3 (arrow)

const addModuleV3 = (moduleName, moduleInstructor) =>
{
    console.log(`Version 3: Module - ${moduleName} with Instructor - ${moduleInstructor}
                         has been added !!`);
}


addModuleV1('JS fucntions', 'Kavitha'); // make a functioncall - v1
addModuleV2('JS fucntions', 'Kavitha'); // make a functioncall - v2
addModuleV3('JS fucntions', 'Kavitha'); // make a functioncall - v3

// Object
const SFModules = {
    moduleName: "APEX Basics", // object property
    moduleInstructor : "Chaitanya"
}

console.log('Type of SFModules is ' + typeof SFModules);
console.log('Value of SFModules is ' + SFModules); 
console.log('Value of SFModules is ' + JSON.stringify(SFModules)); // Deseralize  
console.log(`Module Name is ${SFModules.moduleName} && module instructor is
                    ${SFModules.moduleInstructor}`)


// More about arrays
const numbers = [1,5,6,2,3,10,33,11];
numbers.sort();
console.log(`Sorted array ${numbers} `);

// Option 1- write a lengthy code
numbers.sort((a,b) => 
{
    if(a > b) return 1;
    if(a < b) return -1;
}
);

console.log(`Sorted array ${numbers} `);

// Option 2 - concise code
numbers.sort((a,b) => a - b);
console.log(`Sorted array ${numbers} `);


// Finding square root - Option 1
let number = [1,2,3,4,5];
for(i=0 ; i < number.length; i++)
{
    console.log('Square root of ' + number[i] + ' is ' + number[i] **2);
}


// Finding square root - Option 2
number.map(z => console.log(z**2));
