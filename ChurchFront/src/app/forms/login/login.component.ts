import { Component, NgModule, OnInit } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';
import { Membro } from '../../membro';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})

/*
@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormGroup,
    FormControl
  ],
  
})
*/
export class LoginComponent implements OnInit{
  constructor(private http: HttpClient) {}
  

      loginForm = new FormGroup({
      email: new FormControl(''),
      senha: new FormControl('')
      });



  submitted = false;

  onSubmit() { this.submitted = true;
  var member = this.loginForm.value;
  console.log(this.loginForm.value);
  this.http.post<Membro>("https://localhost:7011/api/Members", member).subscribe(result => {

    //add rota
    console.log("vamo dormir familia");


  }, error => {

    console.error(error);

  });;
  
 }
 
 ngOnInit(): void {
   
 }
}
