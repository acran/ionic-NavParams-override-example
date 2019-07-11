import { Component, ViewChild, OnInit } from '@angular/core';

import { IonNav } from '@ionic/angular';

@Component({
  selector: 'app-root',
  template: '<ion-app><ion-nav></ion-nav></ion-app>'
})
export class AppComponent implements OnInit {
  @ViewChild(IonNav) nav: IonNav;

  ngOnInit() {
    this.nav.push(NavComponent, {privateParam: 'overriden value from NavParams'});
  }
}

@Component({
  template: 'Value of privateParam is {{ privateParam | json }}'
})
export class NavComponent implements OnInit {
  private privateParam = 'initial value from class';

  constructor() {
    console.log(this.privateParam); // "initial value from class"
  }

  ngOnInit() {
    console.log(this.privateParam); // "overriden value from NavParams"
  }
}
