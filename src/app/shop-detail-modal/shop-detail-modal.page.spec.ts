import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopDetailModalPage } from './shop-detail-modal.page';

describe('ShopDetailModalPage', () => {
  let component: ShopDetailModalPage;
  let fixture: ComponentFixture<ShopDetailModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopDetailModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopDetailModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
