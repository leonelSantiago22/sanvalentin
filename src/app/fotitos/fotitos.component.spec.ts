import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotitosComponent } from './fotitos.component';

describe('FotitosComponent', () => {
  let component: FotitosComponent;
  let fixture: ComponentFixture<FotitosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FotitosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FotitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
