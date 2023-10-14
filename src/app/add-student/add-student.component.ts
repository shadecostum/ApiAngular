import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentsService } from '../services/students.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {


  studentData:any;

  addStudent=new FormGroup({
    
    name:new FormControl(''),
    email:new FormControl(''),
    age:new FormControl(''),
    isMale:new FormControl(''),
    rollNo:new FormControl(''),
    date:new FormControl('')
  })
 
constructor(private studentInfo:StudentsService){}

addNewStudent(data:any)
{
this.studentInfo.saveStudent(data).subscribe(
  {
    next:(result)=>
    {
      alert("student added succcesfully")
    },
    error:(errorfeedback:HttpErrorResponse)=>
    {
      console.log(errorfeedback);
      
    }
  }
)
}




}
