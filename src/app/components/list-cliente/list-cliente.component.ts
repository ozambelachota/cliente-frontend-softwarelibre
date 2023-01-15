import { Cliente } from './../../interfaces/cliente';
import { Component, OnInit } from '@angular/core';
import { ClienteServicioService } from '../../services/cliente-servicio.service';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.css'],
})
export class ListClienteComponent implements OnInit {
  clientes: Cliente[] = [];
  constructor(private clienteService: ClienteServicioService) {}
  ngOnInit(): void {
    this.listarCliente();
  }
  listarCliente() {
    this.clienteService.getClientes().subscribe((res) => {
      this.clientes = res;
      console.log(res);
    });
  }
  
  eliminarCliente(id:any){
      
    this.clienteService.deleteCliente(id).subscribe(res =>{ console.log(res)
      this.listarCliente();
    })
  }
}
