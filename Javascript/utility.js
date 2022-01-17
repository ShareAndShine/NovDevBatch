
const repeat = (strInput) => `${strInput} ${strInput}`;

const squareroot = (arrayofnumbers) =>
{
    return arrayofnumbers.map(arrayofnumbers => arrayofnumbers**2);
};


export {repeat, squareroot};