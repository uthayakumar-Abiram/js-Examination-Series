//q1
var a={};
//q2
var person ={
    name:"abi",
    age:21 ,
    introduceYou:function  () {
        return 'hello'+person.name+ 'welcome to the coding school';
}
}




//q3
function greetStudent() {
    return'hello' +person.name+ 'welcome to the coding school';
    
}
//q4
/*
person.name('abi');
*/
// q5
person.email ="jhon@example.com";
//q6
delete person.age;
console.log(person)
//q7
console.log(person.hasOwnProperty('name')); 

// q5
person.email ="jhon@example.com";
//q6
delete person.age;
//q7
console.log(person.hasOwnProperty('abi')); 
//q8
var Student={

};
var course={

}
let uki = Object.assign(Student,course);
//q9
//q10
let book ={
    title:'webki',
    author:'vith',
    year:2021,
}
function btn() {
    var a=15;
    console.log(a)
}
//q11
var Student =['abi',21,'uki stu 21'];

