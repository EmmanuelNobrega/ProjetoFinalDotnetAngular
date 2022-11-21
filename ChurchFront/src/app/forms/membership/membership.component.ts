import { Component, NgModule } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Membro } from '../../membro';
import { HttpClient } from '@angular/common/http';
import { RouteConfigLoadEnd, Router, RouterModule, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'membership-form',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
  
})
export class MembershipComponent {
  constructor(private http: HttpClient) {}
  memberForm = new FormGroup({
       id: new FormControl(Math.floor(Math.random()*100000)),
       nome: new FormControl(''), 
       cpf: new FormControl(''),
       endereco: new FormControl(''), 
       telefone: new FormControl(''), 
       dataNascimento: new FormControl(''), 
       senha: new FormControl(''), 
       email: new FormControl(''),
       numeroCasa: new FormControl(''), 
       cidade: new FormControl(''), 
       estado: new FormControl('')
 
      });


  model = new Membro("Emmanuel", "70730238482", "30/11/1999", 'emmanuelsmaia@gmail.com',"");

  submitted = false;

  onSubmit() { this.submitted = true;
  var member = this.memberForm.value;
  console.log(this.memberForm.value);
  this.http.post<Membro>("https://localhost:7011/api/Members", member).subscribe(result => {

    //add rota
    console.log("vamo dormir familia");
    RouterModule.forRoot;

  }, error => {

    console.error(error);

  });;
  
 }

}