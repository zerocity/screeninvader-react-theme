require.config({
  "baseUrl" : "/theme/js",
  "paths"   : {
    "jquery"     : "lib/jquery-2.0.3/build/jquery",
    "underscore" : "lib/underscore-1.5.2/build/underscore",
    "backbone"   : "lib/backbone-1.1.0/build/backbone",
    "bootstrap"  : "lib/bootstrap",
    "react"      : "lib/react/react",
    "JSXTransformer": "lib/react/JSXTransformer",
    "store": "lib/store/store.min"
  },
  "shim" : {
    "backbone" : {
      "deps" : [
        "jquery",
        "underscore"
      ],
      "exports" : "Backbone"
    },
    "jquery" : {
      "exports" : "$"
    },
    "underscore" : {
      "exports" : "_"
    }
  }
});

require(["backbone",'react',"jsx!app","store"], function(Backbone,React,InterfaceComponent,store) {

});
