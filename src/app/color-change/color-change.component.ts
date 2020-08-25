import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-color-change',
  templateUrl: './color-change.component.html',
  styleUrls: ['./color-change.component.css']
})
export class ColorChangeComponent implements OnInit {
  colorSelected = "yellow"
  constructor(
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.colorSelected = params.color
      }
    )
  }

}
