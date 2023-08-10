import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Peca3DComponent } from './peca3-d.component';

describe('Peca3DComponent', () => {
  let component: Peca3DComponent;
  let fixture: ComponentFixture<Peca3DComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Peca3DComponent]
    });
    fixture = TestBed.createComponent(Peca3DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
