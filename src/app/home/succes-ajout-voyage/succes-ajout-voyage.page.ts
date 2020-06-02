import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-succes-ajout-voyage',
  templateUrl: './succes-ajout-voyage.page.html',
  styleUrls: ['./succes-ajout-voyage.page.scss'],
})
export class SuccesAjoutVoyagePage implements OnInit {
  codeVoyage : string;
  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      
      this.codeVoyage = paramMap.get("codeVoyage");
    })
  }

}
