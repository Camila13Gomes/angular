import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecaPrioritaryComponent } from './peca-prioritary.component';

describe('PecaPrioritaryComponent', () => {
  let component: PecaPrioritaryComponent;
  let fixture: ComponentFixture<PecaPrioritaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PecaPrioritaryComponent]
    });
    fixture = TestBed.createComponent(PecaPrioritaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
