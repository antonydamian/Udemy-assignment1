import { element, by } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { getParentRenderElement } from '@angular/core/src/view/util';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { getHostElement } from '@angular/core/src/render3';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  public changeIcon($event){
    const starElement = event.target;
    (starElement as Element).className = "pi pi-star";
  }

  constructor() { }

  ngOnInit() {
  }

}
