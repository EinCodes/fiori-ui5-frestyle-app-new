sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/f/library",
    "sap/ui/core/Fragment",
  ],
  function (Controller, JSONModel, library, Fragment) {
    "use strict";

    return Controller.extend("einCodes.freestyleApp.controller.NameView", {
      onInit: function () {
        var oModel = new JSONModel(
          sap.ui.require.toUrl(
            "einCodes/freestyleApp/localService/data.json"
          )
        );
        this.getView().setModel(oModel);
      },
    });
  }
);