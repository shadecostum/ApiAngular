import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent {

  studentData:any
  student:any=[{}]

  updateStudent = new FormGroup({
    id:new FormControl(''),
    name:new FormControl(''),
    email:new FormControl(''),
    age:new FormControl(''),
    isMale:new FormControl(''),
    rollNo:new FormControl(''),
    date:new FormControl('')
  })
  

  constructor(private studentInfo:StudentsService){
    studentInfo.getAllStudent().subscribe((data)=>
    {
    
      console.log("comming",data);
      this.studentData=data
      console.log("studentData values",this.studentData);
    })
  }
 

    getSelectedValue(event: any)
    {
      console.log("target value",event.target.value);
      this.studentInfo.studentById(event.target.value).subscribe((data)=>
      {
        this.student=data;
        console.log("student array",this.student);
        
      })
      
    }


  updateStudentDetails(data:any)
  {
   this.studentInfo.updateStudents(data).subscribe({
    next:(result)=>
    {
      alert("details updated succes")
      console.log("updated",result);
      
    },
    error:(errorresponce:HttpErrorResponse)=>
    {
      console.log(this.student.id);
      
      console.log("update error",errorresponce);
      
    }
   })
  }

}
