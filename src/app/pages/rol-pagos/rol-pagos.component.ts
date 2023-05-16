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
  }


}

interface Nombre {
  nombre?: string,
  apellido?: string
}