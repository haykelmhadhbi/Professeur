import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProfComponent } from '../list-prof/list-prof.component';
import { ListeEtudiantComponent } from '../liste-etudiant/liste-etudiant.component';
import { ModifProfComponent } from '../modif-prof/modif-prof.component';
import { ProfDepartComponent } from '../prof-depart/prof-depart.component';
import { ProfDetailComponent } from '../prof-detail/prof-detail.component';
import { ProfComponent } from '../prof/prof.component';
import { AuthGuard } from '../guard/auth.guard';


const routes: Routes = [
  {path:"prof", component:ProfComponent, canActivate: [AuthGuard]},
  {path:"listprof", component:ListProfComponent, canActivate: [AuthGuard]},
  {path:"prof/:idProf",component:ModifProfComponent, canActivate: [AuthGuard]},
  {path:"detailsprof/:idProf",component:ProfDetailComponent, canActivate: [AuthGuard]},
  {path:"listEtudiant/:nomP",component:ListeEtudiantComponent, canActivate: [AuthGuard]},
  {path:"ProfDepart/:nomDepart",component:ProfDepartComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
