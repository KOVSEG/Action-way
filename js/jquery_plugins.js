/*---------------------------------------------------------------------------------
	jQuery CountTo
	Version: 1.2
---------------------------------------------------------------------------------*/
(function($){$.fn.countTo=function(options){var settings=$.extend({'from':0,'speed':1000,'refreshInterval':25},options);return this.each(function(){var _this=$(this);var trigger=_this.offset().top-$(window).height()+_this.outerHeight();_this.data('countToAnimation','on');$(window).on('load scroll',function(){if($(document).scrollTop()>=trigger&&_this.data('countToAnimation')=='on'){var loopCount=0;var value=settings.from;var to=parseInt(_this.text());var interval=setInterval(updateTimer,settings.refreshInterval);var loops=Math.ceil(settings.speed/settings.refreshInterval);var increment=(to-settings.from)/loops;function updateTimer(){value+=increment;loopCount++;si_value=value.toFixed(0);_this.html(si_value);if(loopCount>=loops){clearInterval(interval);value=to;}}
_this.data('countToAnimation','off');}});});};})(jQuery);

/*---------------------------------------------------------------------------------
	jquery.event.move
	Author: Stephen Band
	Version: 1.3.6
---------------------------------------------------------------------------------*/
(function(module){if(typeof define==='function'&&define.amd){define(['jquery'],module);}else{module(jQuery);}})(function(jQuery,undefined){var
threshold=6,add=jQuery.event.add,remove=jQuery.event.remove,trigger=function(node,type,data){jQuery.event.trigger(type,data,node);},requestFrame=(function(){return(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(fn,element){return window.setTimeout(function(){fn();},25);});})(),ignoreTags={textarea:true,input:true,select:true,button:true},mouseevents={move:'mousemove',cancel:'mouseup dragstart',end:'mouseup'},touchevents={move:'touchmove',cancel:'touchend',end:'touchend'};function Timer(fn){var callback=fn,active=false,running=false;function trigger(time){if(active){callback();requestFrame(trigger);running=true;active=false;}
else{running=false;}}
this.kick=function(fn){active=true;if(!running){trigger();}};this.end=function(fn){var cb=callback;if(!fn){return;}
if(!running){fn();}
else{callback=active?function(){cb();fn();}:fn;active=true;}};}
function returnTrue(){return true;}
function returnFalse(){return false;}
function preventDefault(e){e.preventDefault();}
function preventIgnoreTags(e){if(ignoreTags[e.target.tagName.toLowerCase()]){return;}
e.preventDefault();}
function isLeftButton(e){return(e.which===1&&!e.ctrlKey&&!e.altKey);}
function identifiedTouch(touchList,id){var i,l;if(touchList.identifiedTouch){return touchList.identifiedTouch(id);}
i=-1;l=touchList.length;while(++i<l){if(touchList[i].identifier===id){return touchList[i];}}}
function changedTouch(e,event){var touch=identifiedTouch(e.changedTouches,event.identifier);if(!touch){return;}
if(touch.pageX===event.pageX&&touch.pageY===event.pageY){return;}
return touch;}
function mousedown(e){var data;if(!isLeftButton(e)){return;}
data={target:e.target,startX:e.pageX,startY:e.pageY,timeStamp:e.timeStamp};add(document,mouseevents.move,mousemove,data);add(document,mouseevents.cancel,mouseend,data);}
function mousemove(e){var data=e.data;checkThreshold(e,data,e,removeMouse);}
function mouseend(e){removeMouse();}
function removeMouse(){remove(document,mouseevents.move,mousemove);remove(document,mouseevents.cancel,mouseend);}
function touchstart(e){var touch,template;if(ignoreTags[e.target.tagName.toLowerCase()]){return;}
touch=e.changedTouches[0];template={target:touch.target,startX:touch.pageX,startY:touch.pageY,timeStamp:e.timeStamp,identifier:touch.identifier};add(document,touchevents.move+'.'+touch.identifier,touchmove,template);add(document,touchevents.cancel+'.'+touch.identifier,touchend,template);}
function touchmove(e){var data=e.data,touch=changedTouch(e,data);if(!touch){return;}
checkThreshold(e,data,touch,removeTouch);}
function touchend(e){var template=e.data,touch=identifiedTouch(e.changedTouches,template.identifier);if(!touch){return;}
removeTouch(template.identifier);}
function removeTouch(identifier){remove(document,'.'+identifier,touchmove);remove(document,'.'+identifier,touchend);}
function checkThreshold(e,template,touch,fn){var distX=touch.pageX-template.startX,distY=touch.pageY-template.startY;if((distX*distX)+(distY*distY)<(threshold*threshold)){return;}
triggerStart(e,template,touch,distX,distY,fn);}
function handled(){this._handled=returnTrue;return false;}
function flagAsHandled(e){e._handled();}
function triggerStart(e,template,touch,distX,distY,fn){var node=template.target,touches,time;touches=e.targetTouches;time=e.timeStamp-template.timeStamp;template.type='movestart';template.distX=distX;template.distY=distY;template.deltaX=distX;template.deltaY=distY;template.pageX=touch.pageX;template.pageY=touch.pageY;template.velocityX=distX/time;template.velocityY=distY/time;template.targetTouches=touches;template.finger=touches?touches.length:1;template._handled=handled;template._preventTouchmoveDefault=function(){e.preventDefault();};trigger(template.target,template);fn(template.identifier);}
function activeMousemove(e){var timer=e.data.timer;e.data.touch=e;e.data.timeStamp=e.timeStamp;timer.kick();}
function activeMouseend(e){var event=e.data.event,timer=e.data.timer;removeActiveMouse();endEvent(event,timer,function(){setTimeout(function(){remove(event.target,'click',returnFalse);},0);});}
function removeActiveMouse(event){remove(document,mouseevents.move,activeMousemove);remove(document,mouseevents.end,activeMouseend);}
function activeTouchmove(e){var event=e.data.event,timer=e.data.timer,touch=changedTouch(e,event);if(!touch){return;}
e.preventDefault();event.targetTouches=e.targetTouches;e.data.touch=touch;e.data.timeStamp=e.timeStamp;timer.kick();}
function activeTouchend(e){var event=e.data.event,timer=e.data.timer,touch=identifiedTouch(e.changedTouches,event.identifier);if(!touch){return;}
removeActiveTouch(event);endEvent(event,timer);}
function removeActiveTouch(event){remove(document,'.'+event.identifier,activeTouchmove);remove(document,'.'+event.identifier,activeTouchend);}
function updateEvent(event,touch,timeStamp,timer){var time=timeStamp-event.timeStamp;event.type='move';event.distX=touch.pageX-event.startX;event.distY=touch.pageY-event.startY;event.deltaX=touch.pageX-event.pageX;event.deltaY=touch.pageY-event.pageY;event.velocityX=0.3*event.velocityX+0.7*event.deltaX/time;event.velocityY=0.3*event.velocityY+0.7*event.deltaY/time;event.pageX=touch.pageX;event.pageY=touch.pageY;}
function endEvent(event,timer,fn){timer.end(function(){event.type='moveend';trigger(event.target,event);return fn&&fn();});}
function setup(data,namespaces,eventHandle){add(this,'movestart.move',flagAsHandled);return true;}
function teardown(namespaces){remove(this,'dragstart drag',preventDefault);remove(this,'mousedown touchstart',preventIgnoreTags);remove(this,'movestart',flagAsHandled);return true;}
function addMethod(handleObj){if(handleObj.namespace==="move"||handleObj.namespace==="moveend"){return;}
add(this,'dragstart.'+handleObj.guid+' drag.'+handleObj.guid,preventDefault,undefined,handleObj.selector);add(this,'mousedown.'+handleObj.guid,preventIgnoreTags,undefined,handleObj.selector);}
function removeMethod(handleObj){if(handleObj.namespace==="move"||handleObj.namespace==="moveend"){return;}
remove(this,'dragstart.'+handleObj.guid+' drag.'+handleObj.guid);remove(this,'mousedown.'+handleObj.guid);}
jQuery.event.special.movestart={setup:setup,teardown:teardown,add:addMethod,remove:removeMethod,_default:function(e){var event,data;if(!e._handled()){return;}
function update(time){updateEvent(event,data.touch,data.timeStamp);trigger(e.target,event);}
event={target:e.target,startX:e.startX,startY:e.startY,pageX:e.pageX,pageY:e.pageY,distX:e.distX,distY:e.distY,deltaX:e.deltaX,deltaY:e.deltaY,velocityX:e.velocityX,velocityY:e.velocityY,timeStamp:e.timeStamp,identifier:e.identifier,targetTouches:e.targetTouches,finger:e.finger};data={event:event,timer:new Timer(update),touch:undefined,timeStamp:undefined};if(e.identifier===undefined){add(e.target,'click',returnFalse);add(document,mouseevents.move,activeMousemove,data);add(document,mouseevents.end,activeMouseend,data);}
else{e._preventTouchmoveDefault();add(document,touchevents.move+'.'+e.identifier,activeTouchmove,data);add(document,touchevents.end+'.'+e.identifier,activeTouchend,data);}}};jQuery.event.special.move={setup:function(){add(this,'movestart.move',jQuery.noop);},teardown:function(){remove(this,'movestart.move',jQuery.noop);}};jQuery.event.special.moveend={setup:function(){add(this,'movestart.moveend',jQuery.noop);},teardown:function(){remove(this,'movestart.moveend',jQuery.noop);}};add(document,'mousedown.move',mousedown);add(document,'touchstart.move',touchstart);if(typeof Array.prototype.indexOf==='function'){(function(jQuery,undefined){var props=["changedTouches","targetTouches"],l=props.length;while(l--){if(jQuery.event.props.indexOf(props[l])===-1){jQuery.event.props.push(props[l]);}}})(jQuery);};});

/*---------------------------------------------------------------------------------
	fSlider by FRO1D
	Author: Andrey Litvinov (FRO1D)
	Version: 2.2
---------------------------------------------------------------------------------*/
(function($){$.fn.fslider=function(options){var settings=$.extend({'together_slides':1,'moving_slides':1,'time':400,'bullets':true,'to_begin':false,'autoplay':false,'autoplay_delay':5000},options);return this.each(function(){var slider=$(this);slider.wrap('<div class="fslider_big_wrapper"></div>').wrap('<div class="fslider_wrapper"></div>').parent().before('<a class="fslider_arrow left"></a>').before('<a class="fslider_arrow right"></a>');var slider_big_wrapper=slider.parent().parent();var slider_wrapper=slider.parent();var slide=slider.children('li');var number_of_slides=slide.size();var slide_width=slide.outerWidth(true);var arrow=slider_big_wrapper.children('a');var controls=new Array();number_of_bullets=Math.ceil(number_of_slides/settings.together_slides);for(i=1;i<=number_of_bullets;i++)controls[i]='<a href="'+i+'" class="bullet">'+i+'</a>\n'
slider_big_wrapper.append(controls);slider_big_wrapper.children('.bullet:first').addClass('active');slider_big_wrapper.children('.bullet').wrapAll('<div class="fslider_controls"></div>');var bullets=slider_big_wrapper.children('.fslider_controls');var bullet=bullets.children('.bullet');slider_big_wrapper.css({'position':'relative','width':slide_width*settings.together_slides-parseInt(slide.css('margin-right'))});slider_wrapper.css({'overflow':'hidden','width':slider_big_wrapper.width()});slider.css({'width':slide.outerWidth(true)*number_of_slides,'height':slide.outerHeight(true)});slide.css({'listStyle':'none','float':'left'});slider.children('li:last').css({'clear':'right'});arrow.css({'display':'block','margin':'auto','position':'absolute'});bullets.css({'width':bullet.outerWidth(true)*bullet.size()+50,'margin':'auto','position':'absolute'});bullet.css({'display':'block','float':'left'});bullets.children('.bullet:last').css({'clear':'right'});if(settings.bullets==false)bullets.css('display','none');function recalculate(){step=slide_width*settings.moving_slides;current_margin=parseInt(slider.css('margin-left'));last_margin=-((number_of_slides-1)*slide_width-(slide_width*(settings.together_slides-1)));diff=number_of_slides%settings.moving_slides;};function bullets_to_left(){if(bullets.children('.bullet:first').hasClass('active')){bullets.children('.bullet:first').removeClass('active');bullets.children('.bullet:last').addClass('active');}
else{bullets.children('.bullet.active').removeClass('active').prev().addClass('active');}}
function bullets_to_right(){if(bullets.children('.bullet:last').hasClass('active')){bullets.children('.bullet:last').removeClass('active');bullets.children('.bullet:first').addClass('active');}
else{bullets.children('.bullet.active').removeClass('active').next().addClass('active');}}
function slide_to_left(){if(current_margin==last_margin){if(settings.to_begin)slider.animate({'margin-left':0},settings.time)
else slider.animate({'margin-left':last_margin-(step/4)},settings.time).animate({'margin-left':last_margin},settings.time)}
else if(current_margin==last_margin+diff*slide_width)slider.animate({'margin-left':current_margin-slide_width*(settings.together_slides-(settings.together_slides-diff))},settings.time)
else slider.animate({'margin-left':current_margin-step},settings.time)
bullets_to_right();};function slide_to_right(){if(current_margin==0){if(settings.to_begin)slider.animate({'margin-left':last_margin},settings.time)
else slider.animate({'margin-left':(step/4)},settings.time).animate({'margin-left':0},settings.time)}
else if(current_margin==-(step-slide_width*(settings.together_slides-diff)))slider.animate({'margin-left':0},settings.time)
else slider.animate({'margin-left':current_margin+step},settings.time)
bullets_to_left();};arrow.click(function(){if(slider.is(':animated'))return false;recalculate();if($(this).hasClass('left')){slide_to_right();}
if($(this).hasClass('right')){slide_to_left();}
return false;});bullet.click(function(){if(slider.is(':animated'))return false;recalculate();var slide_to=-(step*($(this).attr('href')-1));$(this).addClass('active');$(this).siblings().removeClass('active');slider.animate({'margin-left':slide_to},settings.time);return false});if(settings.autoplay){var a_play=setInterval(function(){recalculate();if(current_margin==last_margin)slider.animate({'margin-left':0},settings.time)
else if(current_margin==last_margin+diff*slide_width)slider.animate({'margin-left':current_margin-slide_width*(settings.together_slides-(settings.together_slides-diff))},settings.time)
else slider.animate({'margin-left':current_margin-step},settings.time);bullets_to_right();},settings.autoplay_delay);}
slider.on('movestart',function(e){if(slider.is(':animated'))return false;recalculate();$(this).data('before',current_margin);}).on('move',function(e){current_margin+=e.deltaX;$(this).css('marginLeft',current_margin).data('after',current_margin);}).on('moveend',function(e){var before=$(this).data('before');var after=$(this).data('after');var change=after-before;if(Math.abs(change)<=step/4)slider.animate({'marginLeft':before});else{if(change<0&&before==last_margin+diff*slide_width){if(settings.to_begin){slider.animate({'marginLeft':0});bullets_to_right();}
else slider.animate({'margin-left':last_margin})}
else if(change<0&&before!=last_margin){slider.animate({'marginLeft':before-step});bullets_to_right();}
else if(change<0&&before==last_margin){if(settings.to_begin){slider.animate({'marginLeft':0});bullets_to_left();}
else slider.animate({'margin-left':last_margin})}
if(change>0&&before==-(step-slide_width*(settings.together_slides-diff))){if(settings.to_begin){slider.animate({'marginLeft':last_margin});bullets_to_left();}
else slider.animate({'marginLeft':0});}
else if(change>0&&before!=0){slider.animate({'marginLeft':before+step});bullets_to_left();}
else if(change>0&&before==0){if(settings.to_begin){slider.animate({'marginLeft':last_margin});bullets_to_left();}
else slider.animate({'marginLeft':0});}}});});};})(jQuery);

/*---------------------------------------------------------------------------------
	jQuery Placeholder 
	Copyright 2013 Mato Ilic <info@matoilic.ch>
	Version: 0.2.4
---------------------------------------------------------------------------------*/
(function(b,f,i){function l(){b(this).find(c).each(j)}function m(a){for(var a=a.attributes,b={},c=/^jQuery\d+/,e=0;e<a.length;e++)if(a[e].specified&&!c.test(a[e].name))b[a[e].name]=a[e].value;return b}function j(){var a=b(this),d;a.is(":password")||(a.data("password")?(d=a.next().show().focus(),b("label[for="+a.attr("id")+"]").attr("for",d.attr("id")),a.remove()):a.realVal()==a.attr("placeholder")&&(a.val(""),a.removeClass("placeholder")))}function k(){var a=b(this),d,c;placeholder=a.attr("placeholder");
b.trim(a.val()).length>0||(a.is(":password")?(c=a.attr("id")+"-clone",d=b("<input/>").attr(b.extend(m(this),{type:"text",value:placeholder,"data-password":1,id:c})).addClass("placeholder"),a.before(d).hide(),b("label[for="+a.attr("id")+"]").attr("for",c)):(a.val(placeholder),a.addClass("placeholder")))}var g="placeholder"in f.createElement("input"),h="placeholder"in f.createElement("textarea"),c=":input[placeholder]";b.placeholder={input:g,textarea:h};!i&&g&&h?b.fn.placeholder=function(){}:(!i&&g&&
!h&&(c="textarea[placeholder]"),b.fn.realVal=b.fn.val,b.fn.val=function(){var a=b(this),d;if(arguments.length>0)return a.realVal.apply(this,arguments);d=a.realVal();a=a.attr("placeholder");return d==a?"":d},b.fn.placeholder=function(){this.filter(c).each(k);return this},b(function(a){var b=a(f);b.on("submit","form",l);b.on("focus",c,j);b.on("blur",c,k);a(c).placeholder()}))})(jQuery,document,window.debug);

/*---------------------------------------------------------------------------------
	Masked Input plugin for jQuery
	Copyright (c) 2007-2013 Josh Bush (digitalbush.com)
	Version: 1.3.1
---------------------------------------------------------------------------------*/
(function(e){function t(){var e=document.createElement("input"),t="onpaste";return e.setAttribute(t,""),"function"==typeof e[t]?"paste":"input"}var n,a=t()+".mask",r=navigator.userAgent,i=/iphone/i.test(r),o=/android/i.test(r);e.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},dataName:"rawMaskFn",placeholder:"_"},e.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&(n=this.createTextRange(),n.collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(t,r){var c,l,s,u,f,h;return!t&&this.length>0?(c=e(this[0]),c.data(e.mask.dataName)()):(r=e.extend({placeholder:e.mask.placeholder,completed:null},r),l=e.mask.definitions,s=[],u=h=t.length,f=null,e.each(t.split(""),function(e,t){"?"==t?(h--,u=e):l[t]?(s.push(RegExp(l[t])),null===f&&(f=s.length-1)):s.push(null)}),this.trigger("unmask").each(function(){function c(e){for(;h>++e&&!s[e];);return e}function d(e){for(;--e>=0&&!s[e];);return e}function m(e,t){var n,a;if(!(0>e)){for(n=e,a=c(t);h>n;n++)if(s[n]){if(!(h>a&&s[n].test(R[a])))break;R[n]=R[a],R[a]=r.placeholder,a=c(a)}b(),x.caret(Math.max(f,e))}}function p(e){var t,n,a,i;for(t=e,n=r.placeholder;h>t;t++)if(s[t]){if(a=c(t),i=R[t],R[t]=n,!(h>a&&s[a].test(i)))break;n=i}}function g(e){var t,n,a,r=e.which;8===r||46===r||i&&127===r?(t=x.caret(),n=t.begin,a=t.end,0===a-n&&(n=46!==r?d(n):a=c(n-1),a=46===r?c(a):a),k(n,a),m(n,a-1),e.preventDefault()):27==r&&(x.val(S),x.caret(0,y()),e.preventDefault())}function v(t){var n,a,i,l=t.which,u=x.caret();t.ctrlKey||t.altKey||t.metaKey||32>l||l&&(0!==u.end-u.begin&&(k(u.begin,u.end),m(u.begin,u.end-1)),n=c(u.begin-1),h>n&&(a=String.fromCharCode(l),s[n].test(a)&&(p(n),R[n]=a,b(),i=c(n),o?setTimeout(e.proxy(e.fn.caret,x,i),0):x.caret(i),r.completed&&i>=h&&r.completed.call(x))),t.preventDefault())}function k(e,t){var n;for(n=e;t>n&&h>n;n++)s[n]&&(R[n]=r.placeholder)}function b(){x.val(R.join(""))}function y(e){var t,n,a=x.val(),i=-1;for(t=0,pos=0;h>t;t++)if(s[t]){for(R[t]=r.placeholder;pos++<a.length;)if(n=a.charAt(pos-1),s[t].test(n)){R[t]=n,i=t;break}if(pos>a.length)break}else R[t]===a.charAt(pos)&&t!==u&&(pos++,i=t);return e?b():u>i+1?(x.val(""),k(0,h)):(b(),x.val(x.val().substring(0,i+1))),u?t:f}var x=e(this),R=e.map(t.split(""),function(e){return"?"!=e?l[e]?r.placeholder:e:void 0}),S=x.val();x.data(e.mask.dataName,function(){return e.map(R,function(e,t){return s[t]&&e!=r.placeholder?e:null}).join("")}),x.attr("readonly")||x.one("unmask",function(){x.unbind(".mask").removeData(e.mask.dataName)}).bind("focus.mask",function(){clearTimeout(n);var e;S=x.val(),e=y(),n=setTimeout(function(){b(),e==t.length?x.caret(0,e):x.caret(e)},10)}).bind("blur.mask",function(){y(),x.val()!=S&&x.change()}).bind("keydown.mask",g).bind("keypress.mask",v).bind(a,function(){setTimeout(function(){var e=y(!0);x.caret(e),r.completed&&e==x.val().length&&r.completed.call(x)},0)}),y()}))}})})(jQuery);

/*-------------------------------------------------------------------------
	SeaInside Input Messages
	Author: SeaInside (Mopuc) (https://fl.ru/users/MopuC/)
	Version: 1.1
------------------------------------------------------------------------- */
$(document).on('click focus','.error',function(){$(this).removeClass('error');$(this).prop('placeholder',$(this).data('old-placeholder'));$(this).css('borderColor',$(this).data('old-border'));});$.fn.si_show_message=function(text){return this.each(function(){var old_placeholder=$(this).prop('placeholder');var old_border=$(this).css('borderColor');$(this).addClass('error');$(this).data('old-placeholder',old_placeholder);$(this).data('old-border',old_border);$(this).prop('placeholder',text);$(this).css('borderColor','red');})};

/*---------------------------------------------------------------------------------
	fStepwiseAppearance by FRO1D
	Author: Andrey Litvinov (FRO1D)
	Version: 2.0
---------------------------------------------------------------------------------*/
(function($){$.fn.fStepwise=function(options){var settings=$.extend({'app_delay':0,'el_delay':200,'animation_speed':400,'all_after_first':true,'offset':100},options);if(settings.all_after_first){  var trigger=$(this).offset().top-$(window).height()+$(this).outerHeight()*settings.offset/100;$(this).data('trigger',trigger)}
return this.delay(settings.app_delay).each(function(i){var _this=$(this);if(settings.all_after_first==false){var trigger=_this.offset().top-$(window).height()+_this.outerHeight()*settings.offset/100;_this.data('trigger',trigger)}
_this.css('opacity',0).data('fStepwiseAnimation','on');$(window).on('load scroll',function(){if($(document).scrollTop()>=_this.data('trigger')&&_this.data('fStepwiseAnimation')=='on'){_this.delay(settings.el_delay*i).animate({'opacity':1},settings.animation_speed).data('fStepwiseAnimation','off');};});});};})(jQuery);

/* ------------------------------------------------------------------------
	jQuery Cre-animate - Scrolling Animations
	http://codecanyon.net/item/creanimate-onscroll-jquery-animations/6696530
	Version: 1.1
------------------------------------------------------------------------- */
(function(e){var t={fadein:"fade-in",fadeout:"fade-out",slidedownfromtop:"slide-down-from-top",slideinfromright:"slide-in-from-right",slideupfrombottom:"slide-up-from-bottom",slideinfromleft:"slide-in-from-left",scaleup:"scale-up",scaledown:"scale-down",rotate:"rotate",flipyaxis:"flip-y-axis",flipxaxis:"flip-x-axis"};var n={ease:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};var r={opacity:"0","-ms-opacity":"0","-webkit-opacity":"0","-moz-opacity":"0","-o-opacity":"0"};var i={opacity:"1","-ms-opacity":"1","-webkit-opacity":"1","-moz-opacity":"1","-o-opacity":"1"};e(document).ready(function(){e("html, body").css("overflow-x","hidden");e(".cre-animate").css({position:"relative"});e(".cre-animate").each(function(n,s){var o=e(this).data("animation");if(o==t.fadein){e(this).css(r)}if(o==t.fadeout){e(this).css(i)}if(o==t.slideinfromright){e(this).css({right:"-400px"}).css(r)}if(o==t.slideinfromleft){e(this).css({left:"-400px"}).css(r)}if(o==t.slideupfrombottom){e(this).css({bottom:"-200px"}).css(r)}if(o==t.slidedownfromtop){e(this).css({top:"-200px"}).css(r)}if(o==t.rotate){e(this).css(r)}if(o==t.scaleup){var u=0;var a={transform:"scale("+u+")","-ms-transform":"scale("+u+")","-webkit-transform":"scale("+u+")","-moz-transform":"scale("+u+")","-o-transform":"scale("+u+")"};e(this).css(a).css(r)}if(o==t.scaledown){var u=2;var a={transform:"scale("+u+")","-ms-transform":"scale("+u+")","-webkit-transform":"scale("+u+")","-moz-transform":"scale("+u+")","-o-transform":"scale("+u+")"};e(this).css(a).css(r)}if(o==t.flipyaxis){var f={transform:"rotateY(180deg)","-ms-transform":"rotateY(180deg)","-webkit-transform":"rotateY(180deg)","-moz-transform":"rotateY(180deg)","-o-transform":"rotateY(180deg)"};e(this).css(f).css(r)}if(o==t.flipxaxis){var l={transform:"rotateX(180deg)","-ms-transform":"rotateX(180deg)","-webkit-transform":"rotateX(180deg)","-moz-transform":"rotateX(180deg)","-o-transform":"rotateX(180deg)"};e(this).css(l).css(r)}})});e(window).on("scroll load",function(){e(".cre-animate").each(function(s,o){var u=e(this).data("animation");var a=e(this).data("offset");var f=parseFloat(a);var l=f/100;triggerpoint=e(window).height()*l+e(window).scrollTop();element=e(this).offset().top;if(u==t.slidedownfromtop){element=element+200}if(u==t.slideupfrombottom){element=element-200}if(u==t.scaleup){element=element-e(this).height()/2}if(u==t.scaledown){element=element+e(this).height()/2}var c=e(this).data("easing");if(n[c]){c=n[c]}var h=e(this).data("delay");var p=e(this).data("speed");var d={"transition-duration":p+"ms","-ms-transition-duration":p+"ms","-webkit-transition-duration":p+"ms","-moz-transition-duration":p+"ms","-o-transition-duration":p+"ms","transition-timing-function":c,"-ms-transition-timing-function":c,"-webkit-transition-timing-function":c,"-moz-transition-timing-function":c,"-o-transition-timing-function":c,"transition-delay":h+"ms","-ms-transition-delay":h+"ms","-webkit-transition-delay":h+"ms","-moz-transition-delay":h+"ms","-o-transition-delay":h+"ms"};if(element<triggerpoint){if(u==t.fadein){e(this).css(i).css(d)}if(u==t.fadeout){e(this).css(r).css(d)}if(u==t.slidedownfromtop){e(this).css({top:"0"}).css(i).css(d)}if(u==t.slideupfrombottom){e(this).css({bottom:"0"}).css(i).css(d)}if(u==t.slideinfromright){e(this).css({right:"0"}).css(i).css(d)}if(u==t.slideinfromleft){e(this).css({left:"0"}).css(i).css(d)}if(u==t.scaleup){var v=1;var m={transform:"scale("+v+")","-ms-transform":"scale("+v+")","-webkit-transform":"scale("+v+")","-moz-transform":"scale("+v+")","-o-transform":"scale("+v+")"};e(this).css(m).css(i).css(d)}if(u==t.scaledown){var v=1;var m={transform:"scale("+v+")","-ms-transform":"scale("+v+")","-webkit-transform":"scale("+v+")","-moz-transform":"scale("+v+")","-o-transform":"scale("+v+")"};e(this).css(m).css(i).css(d)}if(u==t.rotate){var g=360;var y={transform:"rotate("+g+"deg)","-ms-transform":"rotate("+g+"deg)","-webkit-transform":"rotate("+g+"deg)","-moz-transform":"rotate("+g+"deg)","-o-transform":"rotate("+g+"deg)"};e(this).css(y).css(i).css(d)}if(u==t.flipyaxis){var b={transform:"rotateY(360deg)","-ms-transform":"rotateY(360deg)","-webkit-transform":"rotateY(360deg)","-moz-transform":"rotateY(360deg)","-o-transform":"rotateY(360deg)"};e(this).css(b).css(i).css(d)}if(u==t.flipxaxis){var w={transform:"rotateX(360deg)","-ms-transform":"rotateX(360deg)","-webkit-transform":"rotateX(360deg)","-moz-transform":"rotateX(360deg)","-o-transform":"rotateX(360deg)"};e(this).css(w).css(i).css(d)}}})})})(jQuery);

/*
	FILE ARCHIVED ON 08:10:08 Oct 18, 2016 AND RETRIEVED FROM THE
	INTERNET ARCHIVE ON 20:20:50 Apr 30, 2023.
	JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

	ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
	SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 129.662
  exclusion.robots: 0.073
  exclusion.robots.policy: 0.063
  RedisCDXSource: 12.736
  esindex: 0.01
  LoadShardBlock: 100.361 (3)
  PetaboxLoader3.datanode: 132.959 (5)
  load_resource: 157.207 (2)
  PetaboxLoader3.resolve: 108.77 (2)
*/