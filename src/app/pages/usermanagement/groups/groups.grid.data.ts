export const GroupGridData = {

  GROUP: [{
    Options: [{
      EditAction: true,
          GridHeight: "430",
      DeleteAction: true,
          Activate: false,
          SortOrder: "true"
    
        }],
        Columns: [
          { 'Group,group,,': '' },
          { 'Region,region,,': '' },
          { 'Associated Roles,associatedRoles,': '' }
        ]

    }],
}

export const GroupConstantsData = {
    GROUP_PAGE: {
        GridIdentifier:"groupGrid",
        DeActivateCustomerTitle:"De-Activate Customer",
        DeActivateCustomerMessage:"Are you sure want to de-activate this Customer?",
        ActivateCustomerTitle:"Activate Customer",
        ActivateCustomerMessage:"Are you sure want to activate this Customer?",
        INF_RCD_DUPL: "Record with same name already exist",
        SUC_REC_INS: "Record inserted successfully!",
        SUC_REC_UPD: "Record updated successfully!",
        TooltipCustomerName : "User can add new customer here. Maximum 500 characters are allowed.",
        TooltipAdd : "Click here to add",
        TooltipSave : "Click here to save",
        TooltipClose : "Click here to cancel",
        TooltipAcdea : "Click here to Activate/Deactivate",
        CustomerActivateMessage:"Customer activated successfully",
        CustomerDeActivateMessage:"Customer de-activated successfully",
    },
}