import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVerDetallesComponent } from './modal-ver-detalles.component';

describe('ModalVerDetallesComponent', () => {
  let component: ModalVerDetallesComponent;
  let fixture: ComponentFixture<ModalVerDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalVerDetallesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalVerDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
