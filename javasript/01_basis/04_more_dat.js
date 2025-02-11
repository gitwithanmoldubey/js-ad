//primitive datatypes--->stack

let str1="anmolDubey"

let str2= str1

console.log(str1);
console.log(str2);


// non primitive-->heap


let student1= {
       name:"Anmol Dubey",
       email:"anmol@gmail.com",
       phone:7398867267,
}

let student2=student1

student2.name="charul dubey"
console.log(student2.name);
console.log(student1);


let myFun=function(){
        console.log("anmol");
        
}
myFun()