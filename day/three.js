var Student = /** @class */ (function () {
    function Student(id, name, enrollmentDate, enrolledCourses) {
        this.id = id;
        this.name = name;
        this.enrollmentDate = enrollmentDate;
        this.enrolledCourses = enrolledCourses;
    }
    Student.prototype.showDetails = function () {
        console.log("Student Details:");
        console.log("Id: " + this.id);
        console.log("Student Name: " + this.name);
        console.log("Student Enrollment date: " + this.enrollmentDate);
        console.log("Student Enrolled courses: " + this.enrolledCourses);
    };
    return Student;
}());
var Instructor = /** @class */ (function () {
    function Instructor(id, name, hireDate, coursesTaught) {
        this.id = id;
        this.name = name;
        this.hireDate = hireDate;
        this.coursesTaught = coursesTaught;
    }
    Instructor.prototype.showDetails = function () {
        console.log("Instructor Details:");
        console.log("Instructor Id: " + this.id);
        console.log("Instructor Name: " + this.name);
        console.log("Hire Date: " + this.hireDate);
        console.log("Courses Taught: " + this.coursesTaught);
    };
    return Instructor;
}());
var std = new Student(101,"Mani","19-06-2020","Physics");
std.showDetails();
var instr = new Instructor(102,"Sai","25-09-2019","Chemistry");
instr.showDetails();
