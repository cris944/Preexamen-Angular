import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { ProductoComponent } from './producto/producto.component';
import { ClienteComponent } from './cliente/cliente.component';
export const routes: Routes = [
{
    path: '',
    component: HomeComponent,
    title: 'Home'
},
{
    path: 'producto',
    component: ProductoComponent,
    title: 'Product'

},
{
    path: 'cliente',
    component: ClienteComponent,
    title: 'client'

},
{
path:'**',
redirectTo:'',
pathMatch: 'full'
}

];
