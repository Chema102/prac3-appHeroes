import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = "Pipo es un perro";
  nombre2:string= "JoSE MaRIa QuinONAz GUevArA";
  arreglo: number[]= [1,2,3,4,5,6,7,8,9];
  PI: number = Math.PI;
  porsentaje:number = 0.20;
  salario : number = 2650.5;
  fecha : Date = new Date();
  idioma: string ="es";
  videoUrl: string ="https://www.youtube.com/embed/kw8q2MdTFag";
  activar: boolean = true;

  perro = {
    name: "pipo",
    raza: "pipopri",
    edad: "12",
    dueno:{
      name2: "chema"

    }
  }

}
