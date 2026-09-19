import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  styleUrl: './heroes-list.css',
  templateUrl: './heroes-list.html',
})
export class HeroesList {

  imageWidth:number=40;
  imageMargin:number=2;
  muestraImagen:boolean=true;
  listFilter:string='';

  showImage():void{
    this.muestraImagen=!this.muestraImagen
  }

  heroes:any[]=[
    {

    imagen:'https://dragonball-api.com/characters/goku_normal.webp',
    nombre:"Goku",
    descripcion:"Saiyan - Male ",
    race:"Saiyan - Male",
    ki:60000000
    },{
      imagen:'https://dragonball-api.com/characters/Freezer.webp',
    nombre:"Freezer",
    descripcion:"Army of Frieza ",
    race:"Frieza Race - Male",
    ki:530000
    },{
      imagen:'https://dragonball-api.com/transformaciones/Broly_DBS_Base.webp',
    nombre:"Broly",
    descripcion:"Saiyan - Male  ",
    race:"Saiyan - Male",
    ki:7000000000000000
    },{
      imagen:'https://dragonball-api.com/transformaciones/gogeta.webp',
    nombre:"Gogeta",
    descripcion:"Z Fighter",
    race:"Saiyan - Male",
    ki:280000000000000
    }
    
    
  ]
}
