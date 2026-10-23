import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayDatabindings } from './two-way-databindings';

describe('TwoWayDatabindings', () => {
  let component: TwoWayDatabindings;
  let fixture: ComponentFixture<TwoWayDatabindings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoWayDatabindings],
    }).compileComponents();

    fixture = TestBed.createComponent(TwoWayDatabindings);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
