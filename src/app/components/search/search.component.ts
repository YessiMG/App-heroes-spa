import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  palabra:any[] = [];
  termino:string;

  //heroes: Heroe[]; 

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService:HeroesService,
              private router:Router) { 
               
  }

  ngOnInit(): void {
    //this.heroes = this._heroesService.getHeroes();
    this.activatedRoute.params.subscribe( params =>{
      this.palabra = this._heroesService.buscarHeroes(params['termino']);
      //console.log("aqui", this.palabra);
      this.termino = params['termino'];
      //console.log("search", this.termino);
    })   
  }
  
  /* verHeroe(nombre:Heroe){
    /* console.log('entro', nombre); 
    /* for( let indexHeroe in this.heroes){
      /* console.log(this.heroes[indexHeroe].nombre); 
      /* if (nombre.nombre == this.heroes[indexHeroe].nombre){ 
       /*  console.log('entro2'); 
        
        //this.router.navigate( ['/heroe', indexHeroe] );
      //} 
    }
    
    //console.log(idx, "+ ", this.heroes.findIndex(idx));
  } */

}
