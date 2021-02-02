import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Wizard } from '@eds/vanilla';
import { GitGridData } from './create-project-git.grid.data';
import { SonarQubeGridData } from './create-project-sonarqube.grid.data';
import { SapFinancialGridData } from './create-project-sapfinancial.grid.data';
import { NotificationGridData } from './create-project-notification.grid.data';
@Component({
  selector: 'app-form',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
 requiredField: boolean;
  countries: any;
  modules: any;
  marketAreas: any;
  domains: any;
  products: any;
  instanceTypes: any;
  groupIds: any;
  standardJobNames: any;
  dashboards: any;
  dropdownCountrySettings = {};
  dropdownModuleSettings = {};
  dropdownMarketAreaSettings = {};
  dropdownDomainSettings = {};
  dropdownProductSettings = {};
  dropdownInstanceTypeSettings = {};
  dropdownGroupIdSettings = {};
  dropdownStandardJobNameSettings = {};
  dropdownDashboardSettings = {};
  groupIdProjectId = "Group Id";
  dropDownSelection;
  public settingsDashboard = {};
  @ViewChild("ProjectGrid", { static: false }) ProjectGrid: any;
  @ViewChild("NotificationGrid", { static: false }) NotificationGrid: any;
  @ViewChild("SapFinancialGrid", { static: false }) SapFinancialGrid: any;
  @ViewChild("SonarQubeGrid", { static: false }) SonarQubeGrid: any;
  gridDataGit: any;
  gridDataSonarQube: any;
  gridDataSapFinancial: any;
  gridDataNotification: any;
    rowData1: any;
    rowDataSonarQube;
  constructor() { }
  groupIdProjectIdChange(data) {
    this.groupIdProjectId = data[0].groupName;
    debugger;
  }

  ngOnInit(): void {
    this.gridDataGit = GitGridData['PROJECT'][0]['Columns'];
    this.gridDataSonarQube = GitGridData['PROJECT'][0]['Columns'];
    this.gridDataSapFinancial = GitGridData['PROJECT'][0]['Columns'];
    this.gridDataNotification = GitGridData['PROJECT'][0]['Columns'];


    setTimeout(() => {
      debugger;
      var data1 = this.rowData1;
      this.ProjectGrid.refresh(this.rowData1, GitGridData['PROJECT'][0])
      this.NotificationGrid.refresh(this.rowData1, NotificationGridData['PROJECT'][0])
      this.SapFinancialGrid.refresh(this.rowData1, SapFinancialGridData['PROJECT'][0])
      this.SonarQubeGrid.refresh(this.rowDataSonarQube, SonarQubeGridData['PROJECT'][0])
    }, 2000);


    this.rowData1 =
      [
        {
          "projectId": "1",
          "projectJobName": "Michael Phelps1",
          "standardJobName": "Test Standard1"
          

      },
      {
        "projectId": "2",
        "projectJobName": "Michael Phelps2",
        "standardJobName": "Test Standard2"


      },
      {
        "projectId": "3",
        "projectJobName": "Michael Phelps3",
        "standardJobName": "Test Standard3"


      },
      ];
    this.rowDataSonarQube =
      [
        {
          "gitProject": "1",
          "gitBranch": "Michael Phelps1",
          "sonarCompositeKey": "Test Standard1"


      },
      {
        "gitProject": "2",
        "gitBranch": "Michael Phelps2",
        "sonarCompositeKey": "Test Standard2"


      },
      {
        "gitProject": "3",
        "gitBranch": "Michael Phelps3",
        "sonarCompositeKey": "Test Standard3"


      },
      ];

    const wizards = document.querySelectorAll('.wizard');
    this.countries = [{
      "idCountry": 1,
      "countryName": "Cuba",

    },
    {
      "idCountry": 2,
      "countryName": "Argentina",

      }, {
        "idCountry": 3,
        "countryName": "Cuba",

      },
      {
        "idCountry": 4,
        "countryName": "China",

      }, {
        "idCountry": 5,
        "countryName": "Denmark",

      },
      {
        "idCountry": 6,
        "countryName": "Dominican Republic",

      }, {
        "idCountry": 11,
        "countryName": "America Samoa",

      },
      {
        "idCountry": 12,
        "countryName": "Australia",

      }, {
        "idCountry": 13,
        "countryName": "Chile",

      },
      {
        "idCountry": 14,
        "countryName": "Switzerland",

      }, {
        "idCountry": 15,
        "countryName": "Costa Rica",

      },
      {
        "idCountry": 16,
        "countryName": "India",

      }];
    this.modules = [{
      "idModule": 1453,
      "moduleName": "DevOps",

    },
    {
      "idModule": 1454,
      "moduleName": "Notify",

      },
      {
        "idModule": 1455,
        "moduleName": "SAP",

      },
      {
        "idModule": 1456,
        "moduleName": "SonarQube",

      },
      {
        "idModule": 1457,
        "moduleName": "Testing",

      }];
    this.marketAreas = [{
      "idMarketArea": 1453,
      "marketAreaName": "DEMO_KT",

    },
    {
      "idMarketArea": 1454,
      "marketAreaName": "DEMO_KT1",

      }];
    this.domains = [{
      "idDomain": 1453,
      "domainName": "DEMO_KT",

    },
    {
      "idDomain": 1454,
      "domainName": "DEMO_KT1",

      }];
    this.products = [{
      "idProduct": 1453,
      "productName": "DEMO_KT",

    },
    {
      "idProduct": 1454,
      "productName": "DEMO_KT1",

      }];
    this.instanceTypes = [{
      "idInstanceType": 1453,
      "instanceTypeName": "DEMO_KT",

    },
    {
      "idInstanceType": 1454,
      "instanceTypeName": "DEMO_KT1",

      }];
    this.groupIds = [{
      "idGroup": 1,
      "groupName": "Group ID",

    },
    {
      "idGroup": 2,
      "groupName": "Project ID",

      }];
    this.standardJobNames = [{
      "idStandardJobName": 1453,
      "standardJobName": "DEMO_KT",

    },
    {
      "idStandardJobName": 1454,
      "standardJobName": "DEMO_KT1",

      }];
    this.dashboards = [{
      "idDashboard": 1453,
      "dashboardName": "DEMO_KT",

    },
    {
      "idDashboard": 1454,
      "dashboardName": "DEMO_KT1",

    }];
    this.dropdownCountrySettings = {
      singleSelection: true,
      idField: 'idCountry',
      textField: 'countryName',
      closeDropDownOnSelection: true,
      allowSearchFilter: true
    };

    this.dropdownModuleSettings = {
      singleSelection: true,
      idField: 'idModule',
      textField: 'moduleName',
      closeDropDownOnSelection: true,
      allowSearchFilter: true
    };

    this.dropdownMarketAreaSettings = {
      singleSelection: true,
      idField: 'idMarketArea',
      textField: 'marketAreaName',
      closeDropDownOnSelection: true,
      allowSearchFilter: true
    };
    this.dropdownDomainSettings = {
      singleSelection: true,
      idField: 'idDomain',
      textField: 'domain',
      closeDropDownOnSelection: true,
      allowSearchFilter: true
    };

    this.dropdownProductSettings = {
      singleSelection: true,
      idField: 'idProduct',
      textField: 'productName',
      closeDropDownOnSelection: true,
      allowSearchFilter: true
    };

    this.dropdownInstanceTypeSettings = {
      singleSelection: true,
      idField: 'idInstanceType',
      textField: 'instanceTypeName',
      closeDropDownOnSelection: true,
      allowSearchFilter: true
    };

    this.dropdownGroupIdSettings = {
      singleSelection: true,
      idField: 'idGroup',
      textField: 'groupName',
      closeDropDownOnSelection: true,
      allowSearchFilter: true
    };

    this.dropdownStandardJobNameSettings = {
      singleSelection: true,
      idField: 'idStandardJobName',
      textField: 'standardJobName',
      closeDropDownOnSelection: true,
      allowSearchFilter: true
    };

    this.dropdownDashboardSettings = {
      singleSelection: true,
      idField: 'idDashboard',
      textField: 'dashboardName',
      closeDropDownOnSelection: true,
      allowSearchFilter: true
    };
    if (wizards) {
      setTimeout(() => {
        Array.from(wizards).forEach((wizardDOM) => {
          const wizard = new Wizard(<HTMLElement>wizardDOM);
          wizard.init();
        });
      }, 1000);
    }

    this.settingsDashboard = {
      singleSelection: false,
      idField: 'idMarketArea',
      textField: 'marketAreaName',
      enableCheckAll: true,
      selectAllText: 'All',
      unSelectAllText: 'Unselect All',
      allowSearchFilter: true,
      limitSelection: -1,
      clearSearchFilter: true,
      maxHeight: 197,
      itemsShowLimit: 3,
      searchPlaceholderText: 'Select1 Dashboard',
      noDataAvailablePlaceholderText: 'Unselect1 Placeholder',
      closeDropDownOnSelection: false,
      showSelectedItemsAtTop: false,
      defaultOpen: false
    };
  }
  public onItemSelect(item: any) {
    debugger;
    console.log(item);
  }
  public onDeSelect(item: any) {
    debugger;
    console.log(item);
  }

  public onSelectAll(items: any) {
    debugger;
    console.log(items);
  }
  public onDeSelectAll(items: any) {
    debugger;
    console.log(items);
  }
}
