import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonaService, Rol } from 'src/app/SERVICES/persona.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {

  id=0;

  constructor(private personaService: PersonaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id')); 
  }

  rol: Rol = {
    idpersona: undefined,
    horas_extras: undefined,
    comisiones: undefined,
    anticipos: undefined
  }


  agregarRol() {
    this.rol.idpersona=this.id
    this.personaService.ingresoRol(this.rol).subscribe();

    this.router.navigate(["/"])

  }

}

