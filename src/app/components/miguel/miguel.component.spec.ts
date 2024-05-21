import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiguelComponent } from './miguel.component';

describe('MiguelComponent', () => {
  let component: MiguelComponent;
  let fixture: ComponentFixture<MiguelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiguelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiguelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
