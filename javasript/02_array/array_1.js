//array  

const myarray=[2,3,4,5,6,"anmol",false]

// console.log(myarray);

const myArray2 =new Array(2,3,4,5,6,7,8)

// console.log(myArray2);

// console.log(myArray2[2]);

//methods



myArray2.push(9,10,11)
// console.log(myArray2);



myArray2.pop()
// console.log(myArray2);
// console.log("r",myArray2);


// console.log("before shift",myArray2);

myArray2.unshift(1)
console.log(myArray2);

myArray2.shift()
console.log(myArray2);


// console.log("after shift",myArray2);


// console.log(myArray2.includes(69));
// console.log(myArray2.indexOf(7))


let my_arr=myArray2.join()
// console.log(my_arr);

// console.log(typeof my_arr);


//slice,splice

const a_arr=new Array(1,2,3,4,5,6,7,8)

let  ar=a_arr.slice(1,3)
// console.log(ar);
// console.log("r",a_arr);


a_arr.splice(1,4)

// console.log("rr",a_arr);




