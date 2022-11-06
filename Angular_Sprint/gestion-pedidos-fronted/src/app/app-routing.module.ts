import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPedidosComponent } from './lista-pedidos/lista-pedidos.component';

const routes: Routes = [
  {path : 'productos', component:ListaPedidosComponent},
  {path: '',redirectTo:'productos',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
