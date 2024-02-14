interface Person{
    id:number;
    name:string;
    }
    class Student implements Person{
        id: number;
name:string;
enrollmentDate:string;
enrolledCourses:string;
constructor(id:number,name:string,enrollmentDate:string,enrolledCourses:string){
this.id=id;
this.name=name;
this.enrollmentDate=enrollmentDate;
this.enrolledCourses=enrolledCourses;
}
public showDetails():void{
console.log("Student Details:");
console.log("Id: "+this.id);
console.log("Student Name: "+this.name);
console.log("Student Enrollment date: "+this.enrollmentDate);
console.log("Student Enrolled courses: "+this.enrolledCourses);
}
}
class Instructor implements Person{
id: number;
name:string;
hireDate:string;
coursesTaught:string;
constructor(id:number,name:string,hireDate:string,coursesTaught:string){
this.id=id;
this.name=name;
this.hireDate = hireDate;
this.coursesTaught=coursesTaught;
}
public showDetails():void{
console.log("Instructor Details:")
console.log("Instructor Id: "+this.id);
console.log("Instructor Name: "+this.name);
console.log("Hire Date: "+this.hireDate);
console.log("Courses Taught: "+this.coursesTaught);
}
}
const std = new Student(101,"Mani","19-06-2020","Physics");
std.showDetails();
const instr = new Instructor(102,"Sai","25-09-2019","Chemistry");
instr.showDetails();