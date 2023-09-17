import { Component, OnInit } from '@angular/core';
import {FormBuilder , FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  public signupForm !: FormGroup;

  constructor(private formBuilder: FormBuilder ,
    private http: HttpClient,
    private router: Router,){}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      nom: '',
      prenom: '',
      adresse: '',
      tel: '',
      email: '',
      password: ''
    })
  }

  signUp(){
    this.http.post<any>('http://localhost:3000/users',this.signupForm.value)
    .subscribe(res => {
      alert("Inscription réussie!");
      this.signupForm.reset();
      this.router.navigate(['/connexion']);
    }, err =>{
      alert("Erreur d'inscription");
    })
  }

}
