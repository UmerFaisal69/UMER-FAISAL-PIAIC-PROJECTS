var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var School = /** @class */ (function () {
    function School(name) {
        this.students = [];
        this.teacher = [];
        this.name = name;
    }
    School.prototype.addStudent = function (stdObj) {
        this.students.push(stdObj);
    };
    School.prototype.addTeacher = function (teachobj) {
        this.teacher.push(teachobj);
    };
    return School;
}());
var Student = /** @class */ (function () {
    function Student(name, age, schoolName) {
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }
    return Student;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Teacher;
}(Student));
var school1 = new School("ASPS");
var school2 = new School("Educators");
var std1 = new Student(" Hamza", 10, school1.name);
var std2 = new Student(" Ali", 12, school2.name);
var t1 = new Teacher(" Umer", 40, school1.name);
var t2 = new Teacher(" Waqas", 45, school2.name);
school1.addStudent(std1);
school2.addStudent(std2);
//add teacher
school1.addTeacher(t1);
school2.addTeacher(t2);
// console.log(t1)
// console.log(t2)
console.log(school1);
console.log(school2);
