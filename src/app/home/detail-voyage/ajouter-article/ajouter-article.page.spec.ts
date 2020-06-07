import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AjouterArticlePage } from './ajouter-article.page';

describe('AjouterArticlePage', () => {
  let component: AjouterArticlePage;
  let fixture: ComponentFixture<AjouterArticlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterArticlePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AjouterArticlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
