//*variable 

// var name="Rajesh";
// console.log(name);
// var age=22;
// console.log(age);
// let place="ChandraTal";
// console.log(place);

// // Use var for function-scoped variables (though it's generally better to avoid it in modern code).
// // Use let for variables that need to be reassigned within a specific block.
// // Use const for variables that should not be reassigned.


//*function

// function display(uname,uage){
//   return `My name is ${uname} and age is ${uage}`;
// }
// console.log(display("raj",12));
// console.log(display("arsu")); //age undefined



// const hii=()=>{
//   return `good morning ${name}`;
// }
// console.log(hii());


// function cse(course,scode){
//   return `i am studing ${course} and its course code ${scode}`;
// }
// console.log(cse("react","int252"));


// var num= 49; //globalscope
// const multiply=()=>{
//   var prod=49*2; //localscope
//   console.log(prod);
//   num=num*10;
//   console.log(num);
// }
// multiply();
// // console.log(prod); ///local scope  error
// console.log(num); //global scope


// var gscope=35;
// const add=()=>{
//   let sum=gscope+47;
//   console.log(sum);
//   console.log(gscope);

// }

// add();




//*block scope --- let and const are block scope

// function varscope(){
//   var c=1;
//   if(true){
//     var c=2;
// console.log(c);
//   }
//   console.log(c);
// }
// function letscope(){
//   let c=1;
//   if(true){
//     let c=2;
// console.log(c);
//   }
//   console.log(c);
// }
// function constscope(){
//   const c=1;
//   if(true){
//     const c=2;
// console.log(c);
//   }
//   console.log(c);
// }


// varscope();
// letscope();
// constscope();


//////////////////object///////////////////////////

// const human = {
//   Name:'Raj',
//   Age:22,
// }
// // console.log(human);
// // console.log(human.Name);

// const AnotherHuman = {
//   Name:'John',
//   Age:35,
  

//   //*function declare in object
//   sayHello:()=>{
//         console.log(`hello good morning ${AnotherHuman.Name}, How are you ?`);
//   },
//   addition:(a,b)=>{
//     console.log(a+b);
//   },
//   multiplication:(a,b)=>{
//     return (a*b);
//   },
// }
// AnotherHuman.sayHello();
// AnotherHuman.addition(89,34);
// console.log(AnotherHuman.multiplication(10,30));



// class University{
//   constructor(name,location){
//     this.name=name;
//     this.location=location;
// }
// details(){
//   console.log(`your ${this.name} situated in ${this.location}`);
// }
// }

// let Uni1=new University("iit phagwara","Jalandhar");
// Uni1.details();
// let Uni2=new University("iim Phagwara","Chandigarh");
// Uni2.details();



//another way to write the class with out this keyword
// class University{
//   constructor(name,location){
//     const uName=name;
//     const uLocation=location;

// this.details=function() {
//   console.log(`your ${uName} situated in ${uLocation}`);
// }
// }
// }

// let Uni1=new University("iit phagwara","Jalandhar");
// Uni1.details();
// let Uni2=new University("iim Phagwara","Chandigarh");
// Uni2.details();



////////////  type 1

//     function details(name,hero){
//       return{
//         movieName:name,
//       movieHero:hero,
    
//       details:function(){console.log(`Movie name is ${this.movieName} and hero is ${this.movieHero}`);}
//   }
// }

// let zz=details("R","X");
// zz.details();


///////   type 2
//     function details(name,hero,release){
//       return{
//         movieName:name,
//       movieHero:hero,
//       movieRealease:release,
    
//       details:function(){console.log(`Movie name is ${this.movieName} and hero is ${this.movieHero} and released on ${this.movieRealease}`);}
//   }
// }

// let zz=details("R","X","09-04-2003");
// zz.details();
// let zz2=details("A","yyy","06-08-2029");
// zz2.details();



//* Array

// const ar=[];
// const obj={};
// class cls{};


const name=['raj','ram','john','peter'];
// console.log(name);
// console.log(name[2]); //john

// console.log(name.length);

for(var i=0;i<name.length;i++){
  // console.log(name[i]);
}
/////////////////////////////////////for of
// for(const n of name){
//   console.log(n);
// }

///////////foreach
// name.forEach(element => {
//   console.log(element);
// });


//* map method

// console.log(name.map(n=>'game:'+ n)); //here n is an variable to iterate in array


// const number=[10,20,30];
// console.log(number.map(num=>num*2));



//*push
// const even=[2,4,6];
// const odd=[1,3,5,7];
// console.log(even);
// even.push(10);
// console.log(even);

// even.push(odd);
// console.log(even);


//* = asssignment operator in array
// const even1=[20,30];
// const even2=even1;
// even1.push(40);
// console.log(even1);
// console.log(even2);


//*slice method in array a
// const even1=[20,30];
// const even2=even1.slice();//after use it it break the access on even2;
// even1.push(40);
// console.log(even1);
// console.log(even2);


//*spread operator inside [...] = spread operator ,(...) =rest operator 

// spread operator use to copy for content of array in react //slice was old one just go for spread operator
// const even1=[20,30];
// const even2=[...even1];
// even1.push(40);
// console.log(even1);
// console.log(even2);


// const obj1={
//   'name':'raj',
//   'roll':'9',
// }
// console.log(obj1);
// const obj2={...obj1};
// obj1.roll='10';
// // console.log(obj1);
// // console.log(obj2);

// const obj3 ={...obj1,'age':'21',};
// console.log(obj3);



//*rest operator

// const veg=(v1,v2,v3)=>{
//   return [v1,v2,v3];
// }
// console.log(veg('aloo','tomato','beigan'));

// const veg=(...v)=>{
//   return v;
// }
// console.log(veg('aloo','tamatar','beans','bhindi'));


//////*type 1 */
// const sum=(...num)=>{
// var sum=0;
// for(let i=0;i<num.length;i++){
//   sum+=num[i];
// }
// return sum;
// }


///*type 2*//
// const sum=(...num)=>{
//   return num.reduce((sum,current)=>sum+current,0);
// }

// console.log(sum(1,8,2,0));

//***** destructor*//

// const car={brand:'BMW'};
// const mine=car.brand;
// console.log(mine);

// const {brand}=car;
// console.log(brand);


//*arrow function*//
// function sum(a,b){
//   return a+b;
// }

// console.log(sum(2,3));


// const add=function sum1(a,b){
//   return a+b;
// }
// console.log(add(3,4)); // it also works
// // console.log(sum1(3,5)); //it show error

// const add=(a,b)=>{
//   return a+b;
// }

// class A{
//   constructor() {
//            this.value = 1;
//   }
//   static method() {
//          return this.value;
//   }
// }

// console.log(A.method());


let namess = Array.of("a","b","c","d")  
console.log(namess)  
console.log(namess.length) 



