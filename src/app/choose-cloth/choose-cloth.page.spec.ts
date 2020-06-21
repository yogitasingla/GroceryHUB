import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChooseClothPage } from './choose-cloth.page';

describe('ChooseClothPage', () => {
  let component: ChooseClothPage;
  let fixture: ComponentFixture<ChooseClothPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseClothPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChooseClothPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
