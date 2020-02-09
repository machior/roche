import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBoxComponent } from './button-box.component';
import { By } from '@angular/platform-browser';

describe('ButtonBoxComponent', () => {
  let component: ButtonBoxComponent;
  let fixture: ComponentFixture<ButtonBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onButtonClick', () => {
    it('should be called on button click', () => {
      // arrange
      const button = fixture.debugElement.query(By.css('.button-box__button')).nativeElement;
      const onButtonClick = spyOn(component, 'onButtonClick');
      fixture.detectChanges();
      // act
      button.click();
      // assert
      expect(onButtonClick).toHaveBeenCalled();
    });
    it('should call deleteItem.emit', () => {
      // arrange
      const emit = spyOn(component.deleteItem, 'emit');
      fixture.detectChanges();
      // act
      component.onButtonClick();
      // assert
      expect(emit).toHaveBeenCalled();
    });
  });
});
