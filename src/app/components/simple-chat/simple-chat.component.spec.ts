import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleChatComponent } from './simple-chat.component';

describe('SimpleChatComponent', () => {
  let component: SimpleChatComponent;
  let fixture: ComponentFixture<SimpleChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
