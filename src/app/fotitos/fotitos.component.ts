import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { ModalVerDetallesComponent } from './modal-ver-detalles/modal-ver-detalles.component';
@Component({
  selector: 'app-fotitos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fotitos.component.html',
  styleUrl: './fotitos.component.scss'
})
export class FotitosComponent {

  colores = []

  public fotitos: any[] = [
    {
      id: 1,
      url: 'https://raw.githubusercontent.com/leonelSantiago22/imagenes/master/image.webp', // Enlace RAW
      descripcion: 'Puede que no se te haga conocida, es la fachada del primer restaurante en donde tuvimos nuestra primera cita',
      fecha: new Date('2024-08-10'),
      bgColor: '#c39bd3'
    },
    {
      id: 2,
      url: 'https://raw.githubusercontent.com/leonelSantiago22/imagenes/master/chambeadora.webp', // Enlace RAW
      descripcion: 'Parece acoso pero me gusta ver como trabajas, para mi eres lo mejor de este mundo <3',
      fecha: new Date('2025-02-2'),
      bgColor: '#f2d7d5'
    },
    {
      id: 3,
      url: 'https://raw.githubusercontent.com/leonelSantiago22/imagenes/master/piñata.webp', // Enlace RAW
      descripcion: 'Recuerdo que para mi fue nuestra primera vez en publico que me demostrabas carinio, me encanto poder compartir este momento contigo ',
      fecha: new Date('2024-12-14'),
      bgColor: '#d6eaf8'
    },
    {
      id: 4,
      url: 'https://raw.githubusercontent.com/leonelSantiago22/imagenes/master/primer_mes.webp', // Enlace RAW
      descripcion: 'Tu regalo de nuestro primer mes, casi lloro por que lo hiciste de corazon <3',
      fecha: new Date('2025-02-05'),
      bgColor: '#2980b9'
    },
    {
      id: 4,
      url: 'https://raw.githubusercontent.com/leonelSantiago22/imagenes/master/visita.webp', // Enlace RAW
      descripcion: 'Nuestro primer viaje a Tlaxiaco fue una aventura inolvidable. Tenía tantos nervios al principio, pero todo cambió cuando te vi disfrutar cada momento. Ese viaje nos unió más de lo que imaginaba, y confirmó que contigo todo es mejor. ¡Fue el inicio de muchas más aventuras juntos!',
      fecha: new Date('2024-12-q'),
      bgColor: '#d7bde2'
    }
  ];

  constructor(
    public dialog: MatDialog,
  ) {
  }
  openDialogDetalles(data: any): void {
    const dialogRef = this.dialog.open(ModalVerDetallesComponent, {
      width: '600px', // Ajusta el ancho del modal
      height: 'auto', // O puedes especificar una altura fija si lo prefieres 
      data: { data: data },
    });
  }

}
