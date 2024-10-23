import { Component } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductoService } from '../services/producto.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CardModule } from 'primeng/card';
import { Table, TableModule } from 'primeng/table';



@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [SidebarComponent,CardModule,TableModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {
products! :Producto[];
constructor (private productoService: ProductoService){}

ngOnInit(){

}
}
