class School {

    name : string;

    students : Student[] = [];
    teachers : Teacher[] = [];

    addStudent(stdObj:Student){
        this.students.push(stdObj)

    }
    addTeacher(teachObj:Teacher){
        this.teachers.push(teachObj)

    }

    constructor (name:string){
        this.name = name;  
    }
}

class Student {
    name : string;
    age : number;
    schoolName : string;

    constructor(name:string,age:number,schoolName:string) {
        this.name = name ;
        this.age = age ;
        this.schoolName = schoolName ;
    }

}

class Teacher extends Student {}


let school1 = new School("PIAIC")
let school2 = new School("FAST")

let s1 = new Student ("Bilal",20,school1.name)
let s2 = new Student ("Shahmeer",17,school1.name)
let s3 = new Student ("Ali",18,school2.name)
let s4 = new Student ("Abdullah",20,school2.name)
let t1 = new Teacher ("Sir Zia",50,school1.name)
let t2 = new Teacher ("Sir Inam",30,school2.name)
let t3 = new Teacher ("Sir Qasim",40,school2.name)


//add students


school1.addStudent(s1)
school1.addStudent(s2)
school2.addStudent(s3)
school2.addStudent(s4)


//add teachers

school1.addTeacher(t1)
school2.addTeacher(t2)
school2.addTeacher(t3)




console.log(school1);
console.log(school2)

// console.log(t1)
// console.log(t2)
// console.log(t3)
