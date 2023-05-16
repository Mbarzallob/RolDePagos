import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../SERVICES/persona.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-rol-pagos',
  templateUrl: './rol-pagos.component.html',
  styleUrls: ['./rol-pagos.component.css']
})
export class RolPagosComponent implements OnInit {
  idrol = 0;
  nombre: Nombre = {
    nombre: '',
    apellido: ''
  }
  idRolpagos = 0
  nombreCargo = ''

  sueldoBasico=0
  horasExtras=0
  comisiones=0
  iess=0
  anticipos=0
  ingresos=0
  descuentos=0
  neto=0


  constructor(private personaService: PersonaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idrol = Number(this.route.snapshot.paramMap.get('id'));
    this.rolP();
  }

  rolP() {
    
    this.personaService.rolNombre(this.idrol).subscribe(
      (res: any) => {
        console.log(res);

        this.nombre = res[0];


      },
      error => {
        console.log(error);
      }
    );
    this.personaService.rolId(this.idrol).subscribe(
      (res: any) => {
        console.log(res);

        this.idRolpagos = res[0].id_rol_pago;
        console.log(this.idRolpagos)


      },
      error => {
        console.log(error);
      }
    )
    this.personaService.cargo(this.idrol).subscribe(
      (res: any) => {
        console.log(res);

        this.nombreCargo = res[0].nombre_cargo;
      },
      error => {
        console.log(error);
      }
    )
    this.personaService.sueldo(this.idrol).subscribe(
      (res: any) => {
        console.log(res);

        this.sueldoBasico = res[0].sueldo_basico;
      },
      error => {
        console.log(error);
      }
    )
    this.personaService.horas(this.idrol).subscribe(
      (res: any) => {
        console.log(res);

        this.horasExtras = res[0].horasextras;
      },
      error => {
        console.log(error);
      }
    )
    this.personaService.comision(this.idrol).subscribe(
      (res: any) => {
        console.log(res);

        this.comisiones = res[0].comisiones;
      },
      error => {
        console.log(error);
      }
    )
    this.personaService.iess(this.idrol).subscribe(
      (res: any) => {
        console.log(res);

        this.iess = res[0].iees;
      },
      error => {
        console.log(error);
      }
    )
    this.personaService.anticipos(this.idrol).subscribe(
      (res: any) => {
        console.log(res);

        this.anticipos = res[0].anticipos;
      },
      error => {
        console.log(error);
      }
    )
    this.personaService.ingresos(this.idrol).subscribe(
      (res: any) => {
        console.log(res);

        this.ingresos = res[0].ingresos;
      },
      error => {
        console.log(error);
      }
    )
    this.personaService.descuentos(this.idrol).subscribe(
      (res: any) => {
        console.log(res);

        this.descuentos = res[0].descuentos;
      },
      error => {
        console.log(error);
      }
    )
    this.personaService.salarioNeto(this.idrol).subscribe(
      (res: any) => {
        console.log(res);

        this.neto = res[0].salarion;
      },
      error => {
        console.log(error);
      }
    )
  }


}

interface Nombre {
  nombre?: string,
  apellido?: string
}