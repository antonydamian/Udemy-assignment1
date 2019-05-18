import { element, by } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { getParentRenderElement } from '@angular/core/src/view/util';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { getHostElement } from '@angular/core/src/render3';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  starstate1: boolean = true;
  starstate2: boolean = true;
  starstate3: boolean = true;
  starstate4: boolean = true;
  starstate5: boolean = true;
  value = 2.5; //addition of .5
  starList: number[] = [1, 2, 3, 4, 5];
  public stars: any[] = new Array(5);

  // public changeIcon($event){
  //   const starElement = event.target;
  //   (starElement as Element).className = "pi pi-star";
  // }

  public toggleClass(event) {
    var star_id = event.srcElement.id;
    console.log(star_id);

    if (star_id === 'star5') {
      this.starstate5 = !this.starstate5;
      this.starstate4 = !this.starstate4;
      this.starstate3 = !this.starstate3;
      this.starstate2 = !this.starstate2;
      this.starstate1 = !this.starstate1;
    } else if (star_id === 'star4') {
      this.starstate4 = !this.starstate4;
      this.starstate3 = !this.starstate3;
      this.starstate2 = !this.starstate2;
      this.starstate1 = !this.starstate1;
    } else if (star_id === 'star3') {
      this.starstate3 = !this.starstate3;
      this.starstate2 = !this.starstate2;
      this.starstate1 = !this.starstate1;
    } else if (star_id === 'star2') {
      this.starstate2 = !this.starstate2;
      this.starstate1 = !this.starstate1;
    } else if (star_id === 'star1') {
      this.starstate1 = !this.starstate1;
    }
  }

  toggleClass2(element) {
    for (let i = 1; i <= 5; i++) {
      if (i <= element.id) {
        document.getElementById(i.toString()).className = 'pi pi-star';
      } else {
        document.getElementById(i.toString()).className = 'pi pi-star-o';
      }
    }
  }

  constructor() {}

  ngOnInit() {}
}
