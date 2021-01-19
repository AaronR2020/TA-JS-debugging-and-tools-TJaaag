//function to compair values
function expect(expected){
    return {
        isEqual:function(result){
            if(expected!==result){
                throw new Error(`invalid code: \nexpected value: ${expected}\nretrieved value: ${result}`);  
            }
        },
        typeEqual:function(result){
            if(typeof expected!==typeof result){
                throw new Error(`invalid code: \nexpected value: ${expected}\nretrieved value: ${result}`);  
            }
        },
        missingVal:function(result){
            if(isNaN(result)==isNaN(expected)){
                throw new Error(` invalid code\n missing value should be taken care of`)
            }
        }
    }
}
//....................................................................................
//function to test values
function test(msg,cb){
    try{
        cb()
        console.log(`${msg} seems to work fine` );
    }
    catch(error){
console.error(error);
console.log(`${msg}`,error)
    }
}
//....................................................................................
//add....................................................................................

//case1
//test case to add values
function testAddCalc(){
let result1=add(2,1);
let expected1=4;
//add test function
expect(expected1).isEqual(result1)
}

//case2
//test case to see if one of the input is missing
function testAddMissign(){
    let result=add(1);
    let Notexpected=NaN
    expect(Notexpected).missingVal(result)
}
//multiply....................................................................................
//case 1
//test case to multiply values
function testMulCalc(){
    let result1=multiply(2,3);
    let expected1=6;
//add test function
expect(expected1).isEqual(result1)
}
//case2
//test case to see if one of the input is missing
function testMulMissign(){
    let result=multiply(1);
    let Notexpected=NaN
    expect(Notexpected).missingVal(result)
}



//function call....................................................................................
//test case add value
test("adding two numbers\n",testAddCalc);
test("adding only one argument to add\n",testAddMissign);
//test case multiply value
test("multiplying two numbers\n",testMulCalc);
test("adding only one argument to multiply\n",testMulMissign)
