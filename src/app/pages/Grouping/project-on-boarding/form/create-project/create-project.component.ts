import { Component, OnInit } from '@angular/core';
import { Wizard } from '@eds/vanilla';
@Component({
  selector: 'app-form',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const wizards = document.querySelectorAll('.wizard');

    if (wizards) {
      setTimeout(() => {
        Array.from(wizards).forEach((wizardDOM) => {
          const wizard = new Wizard(<HTMLElement>wizardDOM);
          wizard.init();
        });
      }, 1000);
    }
  }

}
