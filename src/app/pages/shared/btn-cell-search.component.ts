import { Component, OnDestroy } from "@angular/core";
import { ICellRendererAngularComp } from 'ag-grid-angular/public-api';
import { Router } from "@angular/router";



@Component({
  selector: "btn-cell-search",
  template: `
<div>
 
 <div class="example">
         <button (click)="btnEditHandler($event)"><i  class="icon icon-search"></i></button>
 </div>
</div>
  `
})
export class BtnCellSearch implements ICellRendererAngularComp, OnDestroy {
    refresh(params: any): boolean {
        throw new Error("Method not implemented.");
    }
    afterGuiAttached?(params?: import("ag-grid-community").IAfterGuiAttachedParams): void {
        throw new Error("Method not implemented.");
    }
  private params: any;
  constructor(private router: Router) {}
  agInit(params: any): void {
    this.params = params;
  }

  btnEditHandler(data) {
    debugger;
    this.params.clicked(this.params.data.userSignum);
    this.router.navigate(['/dashboard/editGroup', this.params.data.userSignum]);
  }
  btnDeleteHandler(data) {
    debugger;
    this.params.clicked(this.params.data.userSignum);
    this.router.navigate(['/dashboard/deleteGroup', this.params.data.userSignum]);
  }
  btnSettingsHandler(data) {
    debugger;
    this.params.clicked(this.params.data.userSignum);
    this.router.navigate(['/dashboard/settingProject', this.params.data.userSignum]);
  }
  ngOnDestroy() {
    // no need to remove the button click handler
    // https://stackoverflow.com/questions/49083993/does-angular-automatically-remove-template-event-listeners
  }
}
