import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerService} from './customer-service';
import { PipeCollector } from '@angular/compiler/src/template_parser/binding_parser';
import { CustomerGridData } from './customer.grid.data';
import {DialogComponent} from '../../../../projects/eds/angular/src/lib/components/dialog/dialog.component';
import {CustomerConstantsData} from './customer.grid.data'
import * as $ from 'jquery';
import { MyNotificationService } from '../common/notification/my.notification.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({ 
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  providers:[CustomerService,MyNotificationService]
})

export class CustomerComponent implements OnInit {
  gridTitle = "Customer";
  constantMessages:any={};
  
  gridData: any;

  //activate deactivate fields
  openActivateDialog:boolean=false;
  ActivateDeActivateTitle:string;
  ActivateDeActivateMessage:string;
  
  //customer fields
  customerId:number=0;
  customerName:string='';
  customerActive:boolean;
  CustomerData:any[];
  CustomerModel:any={};

  @ViewChild("CustomerGrid",{static: false}) CustomerGrid: any;

  GridIdentifier:string;

  constructor(private customerService: CustomerService,
    private cookieService: CookieService,
    private router: Router,
    private notificationService: MyNotificationService) {
      this.constantMessages=CustomerConstantsData.CUSTOMER_PAGE;
      this.GridIdentifier = this.constantMessages.GridIdentifier;
  }

  ngOnInit() {
    this.gridData = CustomerGridData['CUSTOMER'][0]['Columns'];
    this.fillCustomerGrid();
    this.setDynamicMenu();
  }

  fillCustomerGrid(){
    //this.customerService.getCustomerList().subscribe(data => {
    //  debugger;
    setTimeout(() => {
      this.CustomerGrid.refresh(this.CustomerData, CustomerGridData['CUSTOMER'][0]);
     },2000);
    this.CustomerData = [{ "active": true, "id": 230, "customerName": "A1" }, { "active": false, "id": 231, "customerName": "ANTEL" }, { "active": true, "id": 232, "customerName": "AT&T" }, { "active": true, "id": 233, "customerName": "Airtel Africa" }, { "active": true, "id": 234, "customerName": "Bharti Airtel" }, { "active": true, "id": 235, "customerName": "Almadar" }, { "active": true, "id": 236, "customerName": "Alcom" }, { "active": true, "id": 237, "customerName": "Alfa" }, { "active": true, "id": 238, "customerName": "Algeria Telecom" }, { "active": true, "id": 239, "customerName": "Algeria Telecom Mobilis" }, { "active": true, "id": 240, "customerName": "Altice" }, { "active": true, "id": 241, "customerName": "America Samoa Telecommunications Authority (ASTCA)" }, { "active": true, "id": 242, "customerName": "AMX" }, { "active": true, "id": 243, "customerName": "Andorra Telecom" }, { "active": true, "id": 244, "customerName": "Asiacell" }, { "active": true, "id": 245, "customerName": "Atlantique Telecom" }, { "active": true, "id": 246, "customerName": "AVEA" }, { "active": true, "id": 247, "customerName": "Azercell Telecom LLC" }, { "active": true, "id": 248, "customerName": "Banglalink" }, { "active": true, "id": 249, "customerName": "Batelco" }, { "active": true, "id": 250, "customerName": "Bluegrass Cellular" }, { "active": true, "id": 251, "customerName": "Bite" }, { "active": true, "id": 252, "customerName": "Bouygues Telecom" }, { "active": true, "id": 253, "customerName": "BT" }, { "active": true, "id": 254, "customerName": "BT (EE)" }, { "active": true, "id": 255, "customerName": "Cable & Wireless" }, { "active": true, "id": 256, "customerName": "Celcom" }, { "active": true, "id": 257, "customerName": "Cellular One" }, { "active": true, "id": 258, "customerName": "Chariton Valley" }, { "active": true, "id": 259, "customerName": "Celtel" }, { "active": true, "id": 260, "customerName": "China Telecom" }, { "active": true, "id": 261, "customerName": "China Mobile" }, { "active": true, "id": 262, "customerName": "China Unicom" }, { "active": true, "id": 263, "customerName": "Claro" }, { "active": true, "id": 264, "customerName": "Comcast" }, { "active": true, "id": 265, "customerName": "Comcel" }, { "active": true, "id": 266, "customerName": "Cosmote" }, { "active": true, "id": 267, "customerName": "Cross Telephone" }, { "active": true, "id": 268, "customerName": "ETECSA" }, { "active": true, "id": 269, "customerName": "Cubacel" }, { "active": true, "id": 270, "customerName": "Cyta" }, { "active": true, "id": 271, "customerName": "Dialog Axiata" }, { "active": true, "id": 272, "customerName": "Digicel" }, { "active": true, "id": 273, "customerName": "DirecTV" }, { "active": true, "id": 274, "customerName": "Djibouti Telecom" }, { "active": true, "id": 275, "customerName": "DNA" }, { "active": true, "id": 276, "customerName": "Deutsche Telekom (DT)" }, { "active": true, "id": 277, "customerName": "Dtac" }, { "active": true, "id": 278, "customerName": "DU (EITC)" }, { "active": true, "id": 279, "customerName": "Eastlink" }, { "active": true, "id": 280, "customerName": "EI Telecom (EIT)" }, { "active": true, "id": 281, "customerName": "Econet" }, { "active": true, "id": 282, "customerName": "Eir" }, { "active": true, "id": 283, "customerName": "EKN (East Kentucky Network)" }, { "active": true, "id": 284, "customerName": "Elisa" }, { "active": true, "id": 285, "customerName": "ENCQOR" }, { "active": true, "id": 286, "customerName": "Ethio telecom" }, { "active": true, "id": 287, "customerName": "ENTEL" }, { "active": true, "id": 288, "customerName": "Etisalat" }, { "active": true, "id": 289, "customerName": "Euskaltel" }, { "active": true, "id": 290, "customerName": "FarEasTone" }, { "active": true, "id": 291, "customerName": "FLOW" }, { "active": true, "id": 292, "customerName": "Free" }, { "active": true, "id": 293, "customerName": "Fujian Telecommunication" }, { "active": true, "id": 294, "customerName": "Fujitsu" }, { "active": true, "id": 295, "customerName": "Gecco" }, { "active": true, "id": 296, "customerName": "GCI" }, { "active": true, "id": 297, "customerName": "Gibtelecom" }, { "active": true, "id": 298, "customerName": "Grameenphone (GP)" }, { "active": true, "id": 299, "customerName": "GTA Teleguam" }, { "active": true, "id": 300, "customerName": "HI3G" }, { "active": true, "id": 301, "customerName": "Hawkeye" }, { "active": true, "id": 302, "customerName": "IDC" }, { "active": true, "id": 303, "customerName": "SmarTone" }, { "active": true, "id": 304, "customerName": "Inmarsat" }, { "active": true, "id": 305, "customerName": "IPKO" }, { "active": true, "id": 306, "customerName": "Inwi" }, { "active": true, "id": 307, "customerName": "ITPC" }, { "active": true, "id": 308, "customerName": "Jawwal" }, { "active": true, "id": 309, "customerName": "Liberty Global (LGI)" }, { "active": true, "id": 310, "customerName": "Jazz" }, { "active": true, "id": 311, "customerName": "Kabul TV" }, { "active": true, "id": 312, "customerName": "KDDI" }, { "active": true, "id": 313, "customerName": "Korek Telecom" }, { "active": true, "id": 314, "customerName": "KKTcell" }, { "active": true, "id": 315, "customerName": "KT (Korea Telecom)" }, { "active": true, "id": 316, "customerName": "KPN" }, { "active": true, "id": 317, "customerName": "Landmark" }, { "active": true, "id": 318, "customerName": "Lonestar Cell" }, { "active": true, "id": 319, "customerName": "Tango" }, { "active": true, "id": 320, "customerName": "Maktel (Makedonski Telekom)" }, { "active": true, "id": 321, "customerName": "Maroc Telecom" }, { "active": true, "id": 322, "customerName": "Go" }, { "active": true, "id": 323, "customerName": "Melita" }, { "active": true, "id": 324, "customerName": "MBNL" }, { "active": true, "id": 325, "customerName": "MasMovil" }, { "active": true, "id": 326, "customerName": "MCCI" }, { "active": true, "id": 327, "customerName": "MIC-1(Alfa)" }, { "active": true, "id": 328, "customerName": "MobiFone" }, { "active": true, "id": 329, "customerName": "Mobily" }, { "active": true, "id": 330, "customerName": "Mobilis" }, { "active": true, "id": 331, "customerName": "Millicom" }, { "active": true, "id": 332, "customerName": "Moov" }, { "active": true, "id": 333, "customerName": "Motorola" }, { "active": true, "id": 334, "customerName": "Movicel" }, { "active": true, "id": 335, "customerName": "MSI" }, { "active": true, "id": 336, "customerName": "MTC" }, { "active": true, "id": 337, "customerName": "Mtel" }, { "active": true, "id": 338, "customerName": "MTN" }, { "active": true, "id": 339, "customerName": "MTS" }, { "active": true, "id": 340, "customerName": "NBN" }, { "active": true, "id": 341, "customerName": "Next-Tech" }, { "active": true, "id": 342, "customerName": "NOS" }, { "active": true, "id": 343, "customerName": "O2" }, { "active": true, "id": 344, "customerName": "Orange" }, { "active": true, "id": 345, "customerName": "Oceus" }, { "active": true, "id": 346, "customerName": "Omantel" }, { "active": true, "id": 347, "customerName": "Ooredoo" }, { "active": true, "id": 348, "customerName": "Optimus" }, { "active": true, "id": 349, "customerName": "OPT" }, { "active": true, "id": 350, "customerName": "Optus" }, { "active": true, "id": 351, "customerName": "Panasonic" }, { "active": true, "id": 352, "customerName": "Pelephone" }, { "active": true, "id": 353, "customerName": "Partner" }, { "active": true, "id": 354, "customerName": "PHI (Israel)" }, { "active": true, "id": 355, "customerName": "PosteMobile" }, { "active": true, "id": 356, "customerName": "PTI" }, { "active": true, "id": 357, "customerName": "PolkomTel" }, { "active": true, "id": 358, "customerName": "Phonero" }, { "active": true, "id": 359, "customerName": "Quartet" }, { "active": true, "id": 360, "customerName": "Robi Axiata Limited" }, { "active": true, "id": 361, "customerName": "Rogers" }, { "active": true, "id": 362, "customerName": "Salt" }, { "active": true, "id": 363, "customerName": "Safaricom" }, { "active": true, "id": 364, "customerName": "Smart Communications" }, { "active": true, "id": 365, "customerName": "STC (Saudi Telecom Company)" }, { "active": true, "id": 366, "customerName": "Siminn" }, { "active": true, "id": 367, "customerName": "Singtel" }, { "active": true, "id": 368, "customerName": "SMC" }, { "active": true, "id": 369, "customerName": "Slovak Telekom" }, { "active": true, "id": 370, "customerName": "Southern Linc" }, { "active": true, "id": 371, "customerName": "Softbank" }, { "active": true, "id": 372, "customerName": "SOMOS" }, { "active": true, "id": 373, "customerName": "Sprint" }, { "active": true, "id": 374, "customerName": "STP" }, { "active": true, "id": 375, "customerName": "Sunab" }, { "active": true, "id": 376, "customerName": "Swisscom" }, { "active": true, "id": 377, "customerName": "TDC" }, { "active": true, "id": 378, "customerName": "TATA" }, { "active": true, "id": 379, "customerName": "TAG" }, { "active": true, "id": 380, "customerName": "Teamnet" }, { "active": true, "id": 381, "customerName": "Tbaytel" }, { "active": true, "id": 382, "customerName": "Telcel" }, { "active": true, "id": 383, "customerName": "Tele2" }, { "active": true, "id": 384, "customerName": "Tele-Post" }, { "active": true, "id": 385, "customerName": "Egypt Telecom" }, { "active": true, "id": 386, "customerName": "BH Telecom" }, { "active": true, "id": 387, "customerName": "Telkom Kenya" }, { "active": true, "id": 388, "customerName": "Telefonica" }, { "active": true, "id": 389, "customerName": "Spark" }, { "active": true, "id": 390, "customerName": "Movistar" }, { "active": true, "id": 391, "customerName": "Telenet" }, { "active": true, "id": 392, "customerName": "TELEKOM SERBIA" }, { "active": true, "id": 393, "customerName": "Telia" }, { "active": true, "id": 394, "customerName": "Telkomsel" }, { "active": true, "id": 395, "customerName": "Telma" }, { "active": true, "id": 396, "customerName": "Telstra" }, { "active": true, "id": 397, "customerName": "Telus" }, { "active": true, "id": 398, "customerName": "TIM" }, { "active": true, "id": 399, "customerName": "Tigo" }, { "active": true, "id": 400, "customerName": "Tesco" }, { "active": true, "id": 401, "customerName": "TMCell" }, { "active": true, "id": 402, "customerName": "Thales" }, { "active": true, "id": 403, "customerName": "TRUE" }, { "active": true, "id": 404, "customerName": "TSTT" }, { "active": true, "id": 405, "customerName": "Turkcell" }, { "active": true, "id": 406, "customerName": "Tunisie Telecom" }, { "active": true, "id": 407, "customerName": "U Mobile" }, { "active": true, "id": 408, "customerName": "Unitel" }, { "active": true, "id": 409, "customerName": "UNN" }, { "active": true, "id": 410, "customerName": "US Cellular" }, { "active": true, "id": 411, "customerName": "UNICA" }, { "active": true, "id": 412, "customerName": "Vodafone Group" }, { "active": true, "id": 413, "customerName": "VEON" }, { "active": true, "id": 414, "customerName": "Verizon" }, { "active": true, "id": 415, "customerName": "Videotron" }, { "active": true, "id": 416, "customerName": "Vietnamobile" }, { "active": true, "id": 417, "customerName": "Vivacom" }, { "active": true, "id": 418, "customerName": "Vini" }, { "active": true, "id": 419, "customerName": "VNPT" }, { "active": true, "id": 420, "customerName": "VIP" }, { "active": true, "id": 421, "customerName": "Vivacell" }, { "active": true, "id": 422, "customerName": "Vtel" }, { "active": true, "id": 423, "customerName": "Yoigo" }, { "active": true, "id": 424, "customerName": "Wind (WindTre)" }, { "active": true, "id": 425, "customerName": "Zain" }, { "active": true, "id": 426, "customerName": "VIVO" }, { "active": true, "id": 427, "customerName": "Ztar Mobile" }, { "active": true, "id": 428, "customerName": "Limitless" }, { "active": true, "id": 429, "customerName": "Shanghai Telecom" }, { "active": true, "id": 430, "customerName": "Telenor" }, { "active": true, "id": 431, "customerName": "CenturyLink" }, { "active": true, "id": 432, "customerName": "Carolina West Wireless" }, { "active": true, "id": 433, "customerName": "ONATi" }, { "active": true, "id": 434, "customerName": "Telmex" }, { "active": true, "id": 435, "customerName": "Watch Communications" }, { "active": true, "id": 436, "customerName": "Coop" }, { "active": true, "id": 437, "customerName": "Motiv" }, { "active": true, "id": 438, "customerName": "TWME" }, { "active": true, "id": 439, "customerName": "XL Axiata" }, { "active": true, "id": 440, "customerName": "Magyar Telekom" }, { "active": true, "id": 441, "customerName": "We4G" }, { "active": true, "id": 442, "customerName": "Silknet" }, { "active": true, "id": 443, "customerName": "Modcell" }, { "active": true, "id": 444, "customerName": "Tampnet" }, { "active": true, "id": 445, "customerName": "Virgin Media" }, { "active": true, "id": 446, "customerName": "Jio" }, { "active": true, "id": 447, "customerName": "Viettel" }, { "active": true, "id": 448, "customerName": "Aircel" }, { "active": true, "id": 449, "customerName": "Chunghwa Telecom" }, { "active": true, "id": 450, "customerName": "DishTV" }, { "active": true, "id": 451, "customerName": "DJEZZY" }, { "active": true, "id": 452, "customerName": "DST" }, { "active": true, "id": 453, "customerName": "DTV" }, { "active": true, "id": 454, "customerName": "ESB Ireland" }, { "active": true, "id": 455, "customerName": "Kcell" }, { "active": true, "id": 456, "customerName": "Lifecell" }, { "active": true, "id": 457, "customerName": "NewCore" }, { "active": true, "id": 458, "customerName": "Smartone" }, { "active": true, "id": 459, "customerName": "Telechoice" }, { "active": true, "id": 460, "customerName": "Telekom Romania" }, { "active": true, "id": 461, "customerName": "Telekom Slovenije" }, { "active": true, "id": 462, "customerName": "TELIN" }, { "active": true, "id": 463, "customerName": "Three Ireland" }, { "active": true, "id": 464, "customerName": "T-Mobile" }, { "active": true, "id": 465, "customerName": "Turk Telekom" }, { "active": true, "id": 466, "customerName": "Vodafone Idea" }, { "active": true, "id": 467, "customerName": "Wind (Hellas)" }, { "active": false, "id": 468, "customerName": "TBD" }, { "active": true, "id": 469, "customerName": "Anhui Unicom" }, { "active": true, "id": 470, "customerName": "Others" }];
    //});
  }

  ActivateDeActivateRecord(model: any) {  
    let classes:string = $(model.target).attr('class');
    if(classes.indexOf('inactive-switch')>-1){
      $(model.target).removeClass('inactive-switch');
    }
    else{
      $(model.target).addClass('inactive-switch');
    }
    if (model.data.active) {
        this.ActivateDeActivateTitle=this.constantMessages.DeActivateCustomerTitle;
        this.ActivateDeActivateMessage=this.constantMessages.DeActivateCustomerMessage;
    } else {
        this.ActivateDeActivateTitle=this.constantMessages.ActivateCustomerTitle;
        this.ActivateDeActivateMessage=this.constantMessages.ActivateCustomerMessage;
    }
    this.customerId = model.data.id
    this.openActivateDialog=true;
    model.data['active'] = !model.data['active'];
    this.customerActive = model.data['active'];
    this.CustomerModel=model.data;
    return;
  }

  CloseActivateDialog(){
  this.openActivateDialog=false;
  this.resetCustomer();
  this.fillCustomerGrid();
}

AcivateDeActivateCustomer(){
  let hasActive:Boolean=this.CustomerModel.active;
  this.customerService.updateStatusCustomer(this.CustomerModel).subscribe(data => {
    this.fillCustomerGrid();
    this.openActivateDialog=false;
    this.resetCustomer();
    if(hasActive){
      this.notificationService.success(this.constantMessages.CustomerActivateMessage);
    }
    else{
      this.notificationService.success(this.constantMessages.CustomerDeActivateMessage);
    }
  },
  error => {
    console.log(error);
    this.notificationService.error("Error while saving customer.");
  });
}

SaveCustomer(){
  let customerModel:any={
    customerName:this.customerName,
    id:this.customerId,
    active: this.customerId>0?this.customerActive:true
 }; 

 this.customerService.saveCustomer(customerModel)
  .subscribe(data => 
    this.customerAddedSucess(data),
    error => {
      console.log(error);
      this.notificationService.error("Error while saving customer.");
    });
}

resetCustomer(){
  this.customerId=0;
  this.customerName='';
  this.customerActive=false;
  this.CustomerModel={};
}

customerAddedSucess(result){
  if(result==-1){
    this.notificationService.error(this.constantMessages.INF_RCD_DUPL);
  }
  else{
    if(this.customerId==0){
      this.notificationService.success(this.constantMessages.SUC_REC_INS);
    }
    else{
      this.notificationService.success(this.constantMessages.SUC_REC_UPD);
    }
    this.resetCustomer();
    this.fillCustomerGrid();
  }
}

onEditCustomer(model: any){
  this.customerName=model.customerName;
  this.customerId=model.id;
  this.customerActive=model.active;
}

getUserRole() {
  return this.cookieService.get('userrole')
}

setDynamicMenu(){
  $('.navigation a').removeClass('active');
  $('eds-sub-tree-title').parent().addClass('opened');
  $('[ng-reflect-router-link="customer"]').addClass('active');
  $('[href="#/customer"]').addClass('active');
}

}

