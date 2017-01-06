((window) => {windowsXP = window || window; windowsXP.sumMaxSteel = function(){return(()=>Array.prototype.slice.call(arguments, 0).reduce((a, p)=>a+(parseInt(p)?p:0),0))()}})(window)
if (typeof window.sumMaxSteel=='function'){if(window.sumMaxSteel(1,2, 3,4) == 10){console.log('Works fine')} else {console.log('Have some shit')}}else{console.log('Have some shit')}
