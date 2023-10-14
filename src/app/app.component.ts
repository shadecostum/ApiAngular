import { Component } from '@angular/core';
import { StudentsService } from './services/students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service-demp';

  studentdata:any

  
  constructor(recivedData:StudentsService,private router:Router){
    recivedData.getAllStudent().subscribe((data)=>
    {
      this.studentdata=data;
      console.log(this.studentdata);
      
    })
  }
 
  //update
  updateStudentDetails()
  {
    this.router.navigateByUrl('/update')
  }
  
  //add student
  addStudentDetails()
  {
    this.router.navigateByUrl('/add')
  }

  //delete student
  deleteStudentDetails()
  {
    this.router.navigateByUrl('/remove')
  }




}
