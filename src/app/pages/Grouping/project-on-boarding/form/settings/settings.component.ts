import { Component, OnInit } from '@angular/core';
import { Accordion } from '@eds/vanilla';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const accordions = document.querySelectorAll('.accordion');

    if (accordions) {
      Array.from(accordions).forEach((accordionDOM) => {
        const accordion = new Accordion(<HTMLElement>accordionDOM);
        accordion.init();
      });
    }
  }

}
