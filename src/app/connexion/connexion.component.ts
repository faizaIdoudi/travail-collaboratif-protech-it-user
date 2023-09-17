import { Component,OnInit  } from '@angular/core';
import {FormBuilder , FormGroup} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  public loginForm !: FormGroup;
  isSignUp = false;
  nom: any;
  prenom: any;
  adresse: any;
  tel: any;
  email: any;
  password: any;

constructor(private formBuilder : FormBuilder,
  private http: HttpClient,
  private router: Router,){}


 ngOnInit(): void {
  this.loginForm = this.formBuilder.group({
    email: [''],
    password: ['']
  })

  }
  login(){
    this.http.get<any>('http://localhost:3000/users')
    .subscribe(res =>{
      const user = res.find((a:any)=> {
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password;
      });
      if(user){
        this.loginForm.reset();
        this.router.navigate(['/accueil']);
      }else{
        alert("Utilisateur non trouvé!");
      }
    }, err =>{
      alert("Erreur de connexion")
    })

  }


}
