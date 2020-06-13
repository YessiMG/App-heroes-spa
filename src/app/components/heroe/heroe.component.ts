import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent implements OnInit {

  heroe:any = {};
  /* casaH:string; */

  constructor( private activatedRoute: ActivatedRoute,
                private _heroesService: HeroesService ) { 
    this.activatedRoute.params.subscribe( params =>{
      this.heroe = this._heroesService.getHeroe(params['id']);
      //console.log(this.heroe);
    } );
    /* this.casaH = this.casaHeroe() */
  }

  ngOnInit(): void {
  }

  /* casaHeroe():string{
    if(this.heroe.casa === "DC"){
      return "../../../assets/img/DC_logo.png";
    }
    else
    if(this.heroe.casa === "Marvel"){
      return "../../../assets/img/MarvelLogo.png";
    }
  } */

}
