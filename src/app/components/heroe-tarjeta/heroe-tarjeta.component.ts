import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe : any = {};
  @Input() index: number;
  //Linea comentada por el OUTPUT:
  //heroes: Heroe[]; 
  @Output() heroeSeleccionado: EventEmitter<number>; 

  constructor(private _heroesService:HeroesService, private router:Router) {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
    //Linea comentada por el OUTPUT:
    //this.heroes = this._heroesService.getHeroes();
  }
  //Las siguientes lineas comentadas funcionan con el INPUT pero se comentan para probar el output
  /* verHeroe(){
    //console.log(this.heroe);
    //console.log(this.index);
    if(this.index != null){
      
    this.router.navigate( ['/heroe', this.index] );
    }
    else{
      for( let indexHeroe in this.heroes){
        if (this.heroe.nombre == this.heroes[indexHeroe].nombre){ 
          this.router.navigate( ['/heroe', indexHeroe] );
        }
      }
    }
  } */
  //OUTPUT
  /* verHeroe(){
    //console.log(this.heroe);
    //console.log(this.index);
    this.heroeSeleccionado.emit(this.index);
  } */
  //INPUT y solucion de la busqueda del profe
  verHeroe(){
    //console.log(this.heroe);
    //console.log(this.index);
    this.router.navigate( ['/heroe', this.index] );
  }
}
