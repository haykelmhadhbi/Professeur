import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';
import { Professeur } from './modele/professeur';

@Component({
  selector: 'app-prof',
  templateUrl: './prof.component.html',
  styleUrls: ['./prof.component.css']
})
export class ProfComponent implements OnInit {
Prof:Professeur=new Professeur(); 
  constructor(private service:CrudService,private router:Router) { }

  ngOnInit(): void {
 
  }


onSubmit(){
  console.log(this.Prof);
  this.SaveProfesseur()
}
SaveProfesseur(){
this.service.saveProf(this.Prof).subscribe(data => {
this.goToProfList()
})

}
goToProfList(){
  this.router.navigate(['/listprof']);
}
}