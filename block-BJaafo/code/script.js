let firstName=prompt(`enter first name`);
let lastName=prompt(`enter second name`);
function fullname(firstName=" ",lastName=" "){
    return firstName+" "+lastName
}
let fname=fullname()
console.info(fname)
if(firstName.length==0){
    
 throw new Error(`the first name is not supposed to be blank`)

}
if(lastName.length==0){
    
 throw new Error(`the last name is not supposed to be blank`)

}


let amount=prompt(`enter Amount`);
let taxRate=prompt(`enter TaxRate`);

function calculate(amount,taxRate){
return amount+(amount*taxRate)
}
calculate(amount,taxRate);
if(amount==0){
{
 throw new Error(`amount should not be 0`)
}
}
if(taxRate==0){
 throw new Error(`taxRate should not be 0`)
}