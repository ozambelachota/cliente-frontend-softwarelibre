import { ClienteServicioService } from './../../services/cliente-servicio.service';
import { Cliente } from './../../interfaces/cliente';
import { Component, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-create-cliente',
  templateUrl: './forms-create-cliente.component.html',
  styleUrls: ['./forms-create-cliente.component.css'],
})
export class FormsCreateClienteComponent implements OnInit {
  fech = new Date();
  cliente: Cliente = {
    nombreCompleto: '',
    direccion: '',
    fechaNacimiento: this.fech,
    telefono: '',
    correo: '',
  };
  formCliente!: FormGroup;

  constructor(
    private clienteService: ClienteServicioService,
    private ruta: Router,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.formCliente = this.fb.group({
      nombre: new FormControl('',[Validators.required,Validators.minLength(3)]),
      direccion: new FormControl('',[Validators.required,Validators.minLength(5)]),
      fecha: new FormControl('',[Validators.required]),
      telefono: new FormControl('',[Validators.required,Validators.maxLength(9),Validators.minLength(9) ]),
      correo: new FormControl(''),
    });
  }

  crearCliente() {
    const nombre: string = this.formCliente.get('nombre')?.value;
    const direccion: string = this.formCliente.get('direccion')?.value;
    const fecha: Date = this.formCliente.get('fecha')?.value;
    const telefono: string = this.formCliente.get('telefono')?.value;
    const correo: string = this.formCliente.get('correo')?.value;
    this.cliente = {
      nombreCompleto:nombre,
      direccion: direccion,
      fechaNacimiento:fecha,
      telefono:telefono,
      correo:correo,
    }
    
    this.clienteService.createCliente(this.cliente).subscribe((res) => {
      console.log(res);
      this.ruta.navigate(['/']);
    });
  }
}
