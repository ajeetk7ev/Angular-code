import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularConditionals } from './angular-conditionals';

describe('AngularConditionals', () => {
  let component: AngularConditionals;
  let fixture: ComponentFixture<AngularConditionals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularConditionals],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularConditionals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
