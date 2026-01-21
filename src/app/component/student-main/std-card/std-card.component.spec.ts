import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdCardComponent } from './std-card.component';

describe('StdCardComponent', () => {
  let component: StdCardComponent;
  let fixture: ComponentFixture<StdCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
