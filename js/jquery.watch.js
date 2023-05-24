

(function(b){b.extend(b.fn,{watch:function(c,a,d){var f=document.createElement("div"),h=function(a,d){var a="on"+a,b=a in d;b||(d.setAttribute(a,"return;"),b=typeof d[a]=="function");"onpropertychange"==a&&jQuery.browser.msie&&jQuery.browser.version>=9&&(b=!1);return b};typeof a=="function"&&(d=a,a={});typeof d!="function"&&(d=function(){});a=b.extend({},{throttle:10},a);return this.each(function(){var i=b(this),g=function(){for(var a=i.data(),d=!1,b,f=0;f<a.props.length;f++)if(b=i.css(a.props[f]),
a.vals[f]!=b){a.vals[f]=b;d=!0;break}d&&a.cb&&a.cb.call(i,a)},j={props:c.split(","),cb:d,vals:[]};b.each(j.props,function(a){j.vals[a]=i.css(j.props[a])});i.data(j);if(h("DOMAttrModified",f))i.on("DOMAttrModified",d);else if(h("propertychange",f))i.on("propertychange",d);else setInterval(g,a.throttle)})}})})(jQuery);
;(function(){if(!("undefined"==typeof Muse||"undefined"==typeof Muse.assets)){var a=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]==b)return c;return-1}(Muse.assets.required,"jquery.watch.js");if(-1!=a){Muse.assets.required.splice(a,1);for(var a=document.getElementsByTagName("meta"),b=0,c=a.length;b<c;b++){var d=a[b];if("generator"==d.getAttribute("name")){"2014.2.0.284"!=d.getAttribute("content")&&Muse.assets.outOfDate.push("jquery.watch.js");break}}}}})();



/*
      FILE ARCHIVED ON 03:58:21 Mar 28, 2016 AND RETRIEVED FROM THE
      INTERNET ARCHIVE ON 22:03:51 Apr 30, 2023.
      JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

      ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
      SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 243.409
  exclusion.robots: 0.074
  exclusion.robots.policy: 0.065
  cdx.remote: 0.068
  esindex: 0.012
  LoadShardBlock: 216.577 (3)
  PetaboxLoader3.datanode: 107.862 (5)
  PetaboxLoader3.resolve: 128.5 (3)
  load_resource: 143.254 (2)
*/