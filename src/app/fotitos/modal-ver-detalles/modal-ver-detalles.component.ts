import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-ver-detalles',
  standalone: true,
  imports: [],
  templateUrl: './modal-ver-detalles.component.html',
  styleUrl: './modal-ver-detalles.component.scss'
})
export class ModalVerDetallesComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalVerDetallesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
