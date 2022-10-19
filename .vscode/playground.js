


// If product name is even, multiply the price, if its odd divide the price

let productName=['xiaomi', 'canns', 'minute', 'dddd' , 'wertf']

let productPrice = [500, 250, 400, 340, 900]

let product = productName.length

for(i=0; i<product; i++){
  let productList = productName[i];
    productPrices = productPrice[i];
  if(productList.length %2 == 0){
    productPrices = productPrice[i]*2
  } else{
    productPrices = productPrice[i]/2
  }
  console.log(`The price of ${[productList]} is ${[productPrices]}`) 
}








function positiveInteger(arr){
  
}


// Write a function that takes in a nigerian phone number as an argument and checks if it has all 11 digits only and if it is an mtn number. 
// Assume mtn numbers start with 0706, 0803, 0810, and 0906. Your function should return a valid mtn phone number or 'Invalid mtn phone number'
function checkNum(num){
  const flag = /^(0706|0803|0810|0906)\d{7}/
  if(flag.test(num)){
    return 'It is an mtn number'
  }

  return 'It is an invalid mtn number'
}

console.log(checkNum("09068562817"))

// 2. Google meet meeting ids usually have 3 random letters, then 4 random letters, then 3 random letter, seperated by dashes, eg abc-defg-hij. Write a function that checks if a meeting id is a valid google meet id. Your function should return 'Valid meet ID' OR 'Invalid meet ID'

function meetId(){

  const flag = /[a-z]{3}-[a-z]{4}-[a-z]{3}/g
  if(flag.test(num)){
    return 'Valid meet Id'
  }
  return 'Invalid id'
}

 console.log(meetId('acd-fhrr-drf'))


 
 function maskify(cc) {
  // if(cc.length>4){
  //   cc.slice(1, cc.length-4)
  // }
    return cc
  }
  
  console.log(maskify('36757858'))