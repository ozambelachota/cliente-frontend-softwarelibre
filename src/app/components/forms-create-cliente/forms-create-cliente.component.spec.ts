import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsCreateClienteComponent } from './forms-create-cliente.component';

describe('FormsCreateClienteComponent', () => {
  let component: FormsCreateClienteComponent;
  let fixture: ComponentFixture<FormsCreateClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsCreateClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsCreateClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
