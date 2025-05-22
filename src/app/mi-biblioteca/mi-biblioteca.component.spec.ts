import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiBibliotecaComponent } from './mi-biblioteca.component';

describe('MiBibliotecaComponent', () => {
  let component: MiBibliotecaComponent;
  let fixture: ComponentFixture<MiBibliotecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiBibliotecaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiBibliotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
