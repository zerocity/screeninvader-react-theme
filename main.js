require.config({
  "baseUrl" : "/theme/js",
  "paths"   : {
    "jquery"     : "lib/jquery-2.0.3/build/jquery",
    "underscore" : "lib/underscore-1.5.2/build/underscore",
    "backbone"   : "lib/backbone-1.1.0/build/backbone",
    "react"      : "lib/react/react",
    "JSXTransformer": "lib/react/JSXTransformer"
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

require(["backbone", "router",'react',"jsx!app"], function(Backbone,Router,React,InterfaceComponent) {
	/** @jsx React.DOM */
	//app.run();

/*  new Router();
  Backbone.history.start();*/
});
