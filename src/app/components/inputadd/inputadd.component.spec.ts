import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputaddComponent } from './inputadd.component';

describe('InputaddComponent', () => {
  let component: InputaddComponent;
  let fixture: ComponentFixture<InputaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
