import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAlimentosComponent } from './cadastro-alimentos.component';

describe('CadastroAlimentosComponent', () => {
  let component: CadastroAlimentosComponent;
  let fixture: ComponentFixture<CadastroAlimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroAlimentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroAlimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
