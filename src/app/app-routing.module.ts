import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { ListarTarefasComponent } from './componentes/listar-tarefas/listar-tarefas.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "listarTarefas",
    pathMatch: "full"
  },
  {
    path: "criarTarefa",
    component: FormularioComponent
  },
  {
    path: "listarTarefas",
    component: ListarTarefasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
