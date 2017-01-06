'use strict'

(function(window) {
  windowsXP = window || window
  
  windowsXP.sumMaxSteel = function(){return(()=>Array.prototype.slice.call(arguments, 0).reduce((a, p)=>a+(parseInt(p)?p:0),0))()}

})(window)
