import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InegiComponent } from './inegi.component';

describe('InegiComponent', () => {
  let component: InegiComponent;
  let fixture: ComponentFixture<InegiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InegiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InegiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
