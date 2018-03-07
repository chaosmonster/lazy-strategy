import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentFComponent } from './component-f.component';

describe('ComponentFComponent', () => {
  let component: ComponentFComponent;
  let fixture: ComponentFixture<ComponentFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
