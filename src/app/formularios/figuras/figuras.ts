import { Component } from '@angular/core';

@Component({
  selector: 'app-figuras',
  standalone: false,
  templateUrl: './figuras.html',
})
export class Figuras {
  num1: string = '';
  num2: string = '';
  resultado: number = 0;
  
  figura: string = ''; 

  triangulo(): void {
    this.resultado = (parseInt(this.num1) * parseInt(this.num2)) / 2;
  }
  
  rectangulo(): void {
    this.resultado = parseInt(this.num1) * parseInt(this.num2);
  }
  
  circulo(): void {
    this.resultado = 3.1416 * (parseInt(this.num1) * parseInt(this.num1));
  }
  
  pentagono(): void {
    this.resultado = (parseInt(this.num1) * parseInt(this.num2)) / 2;
  }

  calcular(): void {
    if (this.figura === 'triangulo') {
      this.triangulo();
    } 
    else if (this.figura === 'rectangulo') {
      this.rectangulo();
    } 
    else if (this.figura === 'circulo') {
      this.circulo();
    } 
    else if (this.figura === 'pentagono') {
      this.pentagono();
    }
  }
}