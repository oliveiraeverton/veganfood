import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroShopComponent } from './cadastro-shop.component';

describe('CadastroShopComponent', () => {
  let component: CadastroShopComponent;
  let fixture: ComponentFixture<CadastroShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroShopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
