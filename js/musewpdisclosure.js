/*
  ADOBE CONFIDENTIAL
  ___________________

  Copyright 2012 Adobe Systems Incorporated
  All Rights Reserved.

  NOTICE:  All information contained herein is, and remains
  the property of Adobe Systems Incorporated and its suppliers,
  if any.  The intellectual and technical concepts contained
  herein are proprietary to Adobe Systems Incorporated and its
  suppliers and may be covered by U.S. and Foreign Patents,
  patents in process, and are protected by trade secret or copyright law.
  Dissemination of this information or reproduction of this material
  is strictly forbidden unless prior written permission is obtained
  from Adobe Systems Incorporated.
*/

(function(a,b,c){c.Plugins.TabbedPanelsPlugin={defaultOptions:{widgetClassName:"TabbedPanelsWidget",tabClassName:"TabbedPanelsTab",tabHoverClassName:"TabbedPanelsTabHover",tabDownClassName:"TabbedPanelsTabDown",tabActiveClassName:"TabbedPanelsTabSelected",panelClassName:"TabbedPanelsContent",panelActiveClassName:"TabbedPanelsContentVisible",defaultIndex:0,canCloseAll:!1},initialize:function(c,f){var g=this;a.extend(f,a.extend({},g.defaultOptions,f));b.Widget.Disclosure.DisplayPropertyTransitionPlugin.initialize(c,
f);c.bind("attach-behavior",function(){g._attachBehavior(c)})},_attachBehavior:function(a){var b=a.tabs?a.tabs.$element:null;if(b&&(b.first().addClass("TabbedPanelsTabFirst"),b.last().addClass("TabbedPanelsTabLast"),a.options.event!=="click"))b.on(a.options.event,function(){a.tabs.selectTab(this)})}};c.Plugins.AccordionPlugin={defaultOptions:{widgetClassName:"accordion__widget",tabClassName:"accordion__paneltab",tabHoverClassName:"accordion__paneltabHover",tabDownClassName:"accordion__paneltabDown",tabActiveClassName:"accordion__paneltabOpen",
panelClassName:"accordion__panelcontent",panelActiveClassName:"accordion__panelcontentActive",defaultIndex:0,canCloseAll:!1,transitionDirection:"vertical"},initialize:function(c,f){var g=this;a.extend(f,a.extend({},g.defaultOptions,f));f.toggleStateEnabled=f.canCloseAll;b.Widget.Disclosure.AccordionTransitionPlugin.initialize(c,f);c.bind("transform-markup",function(){g._transformMarkup(c)});c.bind("attach-behavior",function(){g._attachBehavior(c)})},_transformMarkup:function(c){var f=c.$element[0],c=
c.options,g=c.transitionDirection==="vertical";b.scopedFind(f,".accordion__panelcontent",c.widgetClassName,f).each(function(){var b=a(this),c=!g?parseInt(b.css("left")):0;b.removeClass(g?"accordion__panelcontent colelem":"accordion__panelcontent grpelem").wrap(g?'<div class="accordion__panelcontent colelem"><div class="accordion__panelcontentClip"></div></div>':'<div class="accordion__panelcontent grpelem"><div class="accordion__panelcontentClip"></div></div>').closest(".accordion__panelcontent").css({width:"100%",
height:"100%",position:"relative",left:c+"px"});g||b.css({left:"0px",marginRight:"0px"})})},_attachBehavior:function(c){var f=c.$element[0],g=c.options,k=0,h=g.transitionDirection==="vertical",j=h?"offsetWidth":"offsetHeight",i=h?"width":"height",l=0;b.scopedFind(f,".accordion__panel",g.widgetClassName,f).each(function(){k=k<this[j]?this[j]:k}).each(function(){k>this[j]&&(this.style[i]=k+"px");if(!h){var b=a(this);b.css({width:"auto",marginRight:"0px",left:l+"px"});l+=b.children("."+g.tabClassName).outerWidth()}})}};
b.Widget.TabbedPanels.prototype.defaultPlugins=[c.Plugins.TabbedPanelsPlugin];b.Widget.Accordion.prototype.defaultPlugins=[c.Plugins.AccordionPlugin]})(jQuery,WebPro,Muse,window);
;(function(){if(!("undefined"==typeof Muse||"undefined"==typeof Muse.assets)){var a=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]==b)return c;return-1}(Muse.assets.required,"musewpdisclosure.js");if(-1!=a){Muse.assets.required.splice(a,1);for(var a=document.getElementsByTagName("meta"),b=0,c=a.length;b<c;b++){var d=a[b];if("generator"==d.getAttribute("name")){"2014.2.0.284"!=d.getAttribute("content")&&Muse.assets.outOfDate.push("musewpdisclosure.js");break}}}}})();


/*
      FILE ARCHIVED ON 03:49:58 Mar 28, 2016 AND RETRIEVED FROM THE
      INTERNET ARCHIVE ON 22:03:51 Apr 30, 2023.
      JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

      ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
      SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 92.774
  exclusion.robots: 0.084
  exclusion.robots.policy: 0.074
  RedisCDXSource: 6.002
  esindex: 0.007
  LoadShardBlock: 69.984 (3)
  PetaboxLoader3.datanode: 108.882 (5)
  load_resource: 137.581 (2)
  PetaboxLoader3.resolve: 95.096 (2)
*/