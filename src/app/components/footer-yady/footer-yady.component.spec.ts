import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterYadyComponent } from './footer-yady.component';

describe('FooterYadyComponent', () => {
  let component: FooterYadyComponent;
  let fixture: ComponentFixture<FooterYadyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterYadyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterYadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
