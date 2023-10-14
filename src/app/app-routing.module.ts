import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { AddStudentComponent } from './add-student/add-student.component';

const routes: Routes = [
  {path:"update",component:UpdateStudentComponent},
  {path:"remove",component:DeleteStudentComponent},
  {path:"add",component:AddStudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
