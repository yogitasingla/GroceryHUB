import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowShopDPage } from './show-shop-d.page';

describe('ShowShopDPage', () => {
  let component: ShowShopDPage;
  let fixture: ComponentFixture<ShowShopDPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowShopDPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowShopDPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
