/* //Infer types
let username = "Nafih";
let regNo = 8921232409;

//Defining types (Explicit Types)
let userName: string = "Shafi";
let Phone: number = 8921232409;
let Married: boolean = false;
let avaraadham: string[] = ["Valli pidikkal","Bottu ne kollal", "purakil ninnu adikkal"];
let valli: number[] = [1,3,5];
let skill: [] = [];
let userDetails: {name: string; age: number; salary: number; expence: number}  = {
    name: "Shafi",
    age:22,
    salary:0,
    expence:100000
};      

//interface

interface Details  {
    name: string,
    age: number,
    salary: number,
    expence: number,
    getName: () =>  void;
}
let adminDetails: Details  = {
    name: "Shafi",
    age:22,
    salary:0,
    expence:100000,
    getName() {
        console.log(this.name);
    },
};       
let memberDeatails: Details = {
    name: "Savadh",
    age:22,
    salary:0,
    expence:100000,
    getName() {
        console.log(this.name)
    },

}


//Type 

type Students = {
    regNo: number,
    name: string,
    rollNo: number,
    class: number,
    division: string,
    grade: string,
    pass: boolean,
    subjects: {
        maths: number,
        english: number    
    }
} 

let studentOne: Students = {
    regNo: 220104710679,
    name: "Abhinav nair",
    rollNo: 1,
    class: 12,
    division: "A",
    grade: "E-",
    pass: false,
    subjects: {
        maths: 23+1,
        english: 100
    }
}
console.log(studentOne.subjects);

//union type optional type

type Student = {
    regNo?: number,
    name: string,
    rollNo?: number,
    class?: number|string,
    division?: string,
    grade?: string,
    pass?: boolean,
    subjects?: {
        maths: number,
        english: number    
    }
} 

let studentTwo: Student = {
    regNo: 220104710679,
    name: "Abhinav nair",
    rollNo: 1,
    class: 12,
    grade: "E-",
    pass: false,
    subjects: {
        maths: 23+1,
        english: 100
    }
}

//functions 
function getStudents(student:Student): Student {
    return {name:"Sinan"};
}

getStudents(studentTwo)


//Named Types OR Custom types

// type Status  = "pending" | "completed"| "faild" | "";
// type ToggleSwitch = "on"| "off"
// let currentStatus:Status = "pending";
// let toggleswitch:ToggleSwitch = "off"

// if(currentStatus === "completed") {
//     toggleswitch = "on" 
// }

type Status  = "pending" | "completed" | "failed" | "";
type ToggleSwitch = "on" | "off";

let currentStatus = "pending" as Status;   // important!
let toggleSwitch: ToggleSwitch = "off";

if (currentStatus === "completed") {
    toggleSwitch = "on";
}


//fuctuion overloading
function add(num1:sting,num2:string):string
function add(num1:any,num2:any):any {
    return num1 + num2;
}
add("2","2");*/


//=====Generics======\\

/*function getAge<T>(age:T):T {
    return age;
}
getAge(22)
getAge("22")*/

type userDetail = {
    name:string,
    age:number
}

type AdminDetail = userDetail & {
    role:string,
}
const user:userDetail = {
    name:"Abinav",
    age:22
}
const admin:AdminDetail = {
    name:"Shafi",
    age:22,
    role:"ndan",
}
function getDeatails<T>(details:T):T{
    return details;
}

getDeatails<userDetail>(user);
getDeatails<AdminDetail>(admin);

//enum

//as const (Type Casting)

let currentSeat:SeatType = "pending" as SeatType;


//keyof typeOf

enum  SeatType {
    PENDING = "pending",
    COMPLETED = "compleated",
    FAILED = "field"
}

function getStatus(orderID: string, status: keyof typeof SeatType){
    console.log(orderID, "==", status)
}
getStatus("12345", "FAILED")