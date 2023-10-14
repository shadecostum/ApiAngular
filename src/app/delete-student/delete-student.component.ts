import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentsService } from '../services/students.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent {
  
  deleteStudent = new FormGroup({
    id:new FormControl(''),
    name:new FormControl(''),
    email:new FormControl(''),
    age:new FormControl(''),
   
    rollNo:new FormControl(''),
 
  })

  studentData:any
  student:any=[{}]


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

  deleteStudentDetails(data:any)
  {
    this.studentInfo.deleteStudent(data.id).subscribe({
      next :(res)=>
      {
        alert("deleted succefully")
        console.log(res);
        location.reload();
        
      },
      error :(errorData:HttpErrorResponse)=>
      {
        console.log(errorData);
        
      }

    })
    console.log(data);
    
  }




}
