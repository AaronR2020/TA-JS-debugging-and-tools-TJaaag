//testing framework and assertion

//function to compair values
function expect(expected){
    return {
        isEqual:function(result){
            if(expected!==result){
                throw new Error(`invalid code: \nexpected value: ${expected}\nretrieved value: ${result}`);  
            }
        },
        typeEqual:function(result){
            if(typeof result==undefined){
                throw new Error(`invalid code: \nexpected value: ${expected}\nretrieved value: ${result}`);  
            }
        },
        missingVal:function(result){
            if(isNaN(result)==isNaN(expected)){
                throw new Error(` invalid code\n missing value should be taken care of`)
            }
        },
     
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
//console.error(error);
console.log(`${msg}`,error)
    }
}
//....................................................................................
//add....................................................................................

//case1
//test case to add values
function testAddCalc(){
    let result1=add(2,1);
    let expected1=3;

    let result=add(2,2);
    let expected=4;
//add test function
expect(expected1).isEqual(result1)
expect(expected).isEqual(result)
}

//case2
//test case to see if one of the input is missing
function testAddMissign(){
    let result=add(1);
    let Notexpected=NaN
    expect(Notexpected).missingVal(result)
}
//case3
//test case to see if one of the input is a string
function testAddType(){
    let result=add(2,2);
    let expected=4
    expect(expected).typeEqual(result)
}
//case3.1
//test case to see if one of the input is a string

//multiply....................................................................................
//case 1
//test case to multiply values
function testMulCalc(){
    let result1=multiply(2,3);
    let expected1=3;
//add test function
expect(expected1).isEqual(result1)
}
//case2
//test case to see if one of the input is missing
function testMulMissign(){
    let result=multiply(1);
    let Notexpected=NaN
    expect(isNan(Notexpected)).missingVal(result)
}
//case 3
//input type should be number
function testMulType(){
    let result=multiply(1,"hello");
    let expected=3
    expect(expected).typeEqual(result)
}



//function call....................................................................................
//test case add value
console.group("ADD");
test("\n\nadding two numbers\n",testAddCalc);
test("\n\nadding only one argument to add\n",testAddMissign);
test("\n\nCheck if values inputed are numbers or not \n",testAddType)

console.group("MULTIPLY");
//test case multiply value
test("\n\nMUL: multiplying two numbers\n",testMulCalc);
test("\n\nMUL: adding only one argument to multiply\n",testMulMissign)
test("\n\nMUL: Check if values inputed are numbers or not \n",testMulType)


