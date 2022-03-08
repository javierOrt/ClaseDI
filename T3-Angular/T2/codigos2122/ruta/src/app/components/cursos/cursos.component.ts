import { partitionArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'rutas-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  curso: String = '';

  constructor(private rutaActiva: ActivatedRoute) {}

  ngOnInit(): void {
    //this.curso = this.rutaActiva.snapshot.params['cursos'];
    //this.rutaActiva.snapshot.params['cursos'];
    this.rutaActiva.params.subscribe((params: Params) => {
      this.curso = console.log(params['curso']);
    })
  }

}
