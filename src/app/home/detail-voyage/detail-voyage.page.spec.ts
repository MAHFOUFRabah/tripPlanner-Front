import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailVoyagePage } from './detail-voyage.page';

describe('DetailVoyagePage', () => {
  let component: DetailVoyagePage;
  let fixture: ComponentFixture<DetailVoyagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailVoyagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailVoyagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
