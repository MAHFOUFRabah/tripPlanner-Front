import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RejoindreVoyagePage } from './rejoindre-voyage.page';

describe('RejoindreVoyagePage', () => {
  let component: RejoindreVoyagePage;
  let fixture: ComponentFixture<RejoindreVoyagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejoindreVoyagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RejoindreVoyagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
