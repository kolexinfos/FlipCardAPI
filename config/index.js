/**
 * Created by tthlex on 04/02/16.
 */

var yamljs = require('yamljs');
var glob = require('glob');
var deasync = require('deasync');

module.exports = function () {
  var currentEnv = process.env.NODE_ENV;
  var globSync = deasync(glob);

  //prime namespace
  global.FLIPCARD = global.FLIPCARD || {};
  global.FLIPCARD.config = {};

  //env template compiler
  var compileENVTemplate = function(data){
    for(var prop in data){
      var value = data[prop];
      if(typeof value === 'object'){
        compileENVTemplate(value)
      } else if(typeof value === 'string'){
        var patternMatch = value.match(/\@ENV\{(\w+)\}/);
        if(patternMatch)
          data[prop] = process.env[value.match(/\@ENV\{(\w+)\}/)[1]]
      }
    }
    return data;
  };

  //return API
  return {
    loadConfig: function () {
      try{
        globSync(__dirname + "/*.*.yaml")
            .filter(function(filePath){
              return filePath.indexOf(currentEnv) !== -1
            })
            .forEach(function(filePath){
              global.FLIPCARD.config = compileENVTemplate(yamljs.load(filePath))
            })
      } catch(e){
        console.log(e);
      }

    }
  }
};