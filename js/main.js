var _____WB$wombat$assign$function_____=function(a){return self._wb_wombat&&self._wb_wombat.local_init&&self._wb_wombat.local_init(a)||self[a]};self.__WB_pmw||(self.__WB_pmw=function(a){return this.__WB_source=a,this});{let a=_____WB$wombat$assign$function_____("window"),t=(_____WB$wombat$assign$function_____("self"),_____WB$wombat$assign$function_____("document"));_____WB$wombat$assign$function_____("location"),_____WB$wombat$assign$function_____("top"),_____WB$wombat$assign$function_____("parent"),_____WB$wombat$assign$function_____("frames"),_____WB$wombat$assign$function_____("opener");jQuery((function(e){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(e("html").css("width",a.innerWidth+"px"),e(".cre-animate").css({visibility:"visible",top:0,left:0,transform:"none","-webkit-transform":"none","-moz-transform":"none","-ms-transform":"none","-o-transform":"none",scale:1,opacity:1}).removeClass(".cre-animate"),e("*").css("backgroundAttachment","scroll")),e("nav .select").click((function(){return"none"==e("nav .navigation").css("display")?e("nav .navigation").slideDown():e("nav .navigation").slideUp(),!1})),e(".select-tour .select-link").click((function(a){return a.preventDefault(),"none"==e(".select-tour .navigation").css("display")?e(".select-tour .navigation").slideDown():e(".select-tour .navigation").slideUp(),!1})),e(t).mouseup((function(a){0===e(".menu-drop").has(a.target).length&&e(".select-tour .navigation").slideUp()})),e(a).scroll((function(a){e(".select-tour .navigation").slideUp()})),e("#reviews .fslider").fslider(),e('input[name="client_phone"]').mask("+9 (999) 999-99-99",{placeholder:"_"}),e("input[placeholder], textarea[placeholder]").placeholder(),e("input, textarea").focus((function(){var a=e(this).attr("placeholder");e(this).attr("placeholder",""),e(this).blur((function(){e(this).attr("placeholder",a)}))})),e("form .submit").click((function(){return e(this).siblings('input[type="submit"]').click(),!1})),e("#order").submit((function(){var a=e(this).find("input[name=client_name]"),t=e(this).find('input[name="client_phone"]'),i=e(this).find('input[name="client_mail"]'),n=e(this).find('textarea[name="client_message"]'),s=!0;return""==a.val()&&(a.si_show_message("Укажите ваше имя"),s=!1),t.size()>0&&""==t.val()&&(t.si_show_message("Укажите ваш телефон"),s=!1),i.size()>0&&""==i.val()&&(i.si_show_message("Укажите ваш e-mail"),s=!1),n.size()>0&&""==n.val()&&(n.si_show_message("Укажите ваше сообщение"),s=!1),0==s||e(this).find('input[type="submit"]').hasClass("non-click")||e(this).find('input[type="submit"]').hasClass("non-click")||(e(this).find('input[type="submit"]').addClass("non-click"),e(this).find(".submit").addClass("non-click"),e.post(e(this).prop("action"),e(this).serialize(),(function(s){1==s.success?(e("#overlay_modal, #modals").fadeIn(600),e('[id^="modal_"], [id^="modal-"]').fadeOut(600),e("#modal_success").fadeIn(600).css("display","table"),a.val(""),t.val(""),i.val(""),n.val(""),yaCounter27559008.reachGoal("order")):alert(s.text)}),"json")),!1})),e("#zvonok").submit((function(){var a=e(this).find("input[name=client_name]"),t=e(this).find('input[name="client_phone"]'),i=e(this).find('input[name="client_mail"]'),n=e(this).find('textarea[name="client_message"]'),s=!0;return""==a.val()&&(a.si_show_message("Укажите ваше имя"),s=!1),t.size()>0&&""==t.val()&&(t.si_show_message("Укажите ваш телефон"),s=!1),i.size()>0&&""==i.val()&&(i.si_show_message("Укажите ваш e-mail"),s=!1),n.size()>0&&""==n.val()&&(n.si_show_message("Укажите ваше сообщение"),s=!1),0==s||e(this).find('input[type="submit"]').hasClass("non-click")||e(this).find('input[type="submit"]').hasClass("non-click")||(e(this).find('input[type="submit"]').addClass("non-click"),e(this).find(".submit").addClass("non-click"),e.post(e(this).prop("action"),e(this).serialize(),(function(s){1==s.success?(e("#overlay_modal, #modals").fadeIn(600),e('[id^="modal_"], [id^="modal-"]').fadeOut(600),e("#modal_success").fadeIn(600).css("display","table"),a.val(""),t.val(""),i.val(""),n.val(""),yaCounter27559008.reachGoal("zvonok")):alert(s.text)}),"json")),!1})),e(a).on("load resize",(function(){e("#overlay_modal").css({height:e(t).height(),width:e(t).width()+17})})),e(".modal__close").click((function(a){return e('[id*="modal"]').fadeOut(600),e("form").find(".non-click").removeClass("non-click"),e("html").removeClass("non-scroll"),!1})),e("#modals").click((function(a){if(a.target==this)return e('[id*="modal"]').fadeOut(600),e("form").find(".non-click").removeClass("non-click"),e("html").removeClass("non-scroll"),!1})),e(".modal__request").click((function(){var a=e(this).data("extra"),i=e(this).data("page");return e('#modal__request_form input[name="send_extra"]').val(a),e('#modal__request_form input[name="send_page"]').val(i),e("#overlay_modal").css({height:e(t).height(),width:e(t).width()+17}),e("#overlay_modal, #modals, #modal__request_form").fadeIn(600),!1})),e(".modal__callback").click((function(){var a=e(this).data("extra"),i=e(this).data("page");return e('#modal__callback_form input[name="send_extra"]').val(a),e('#modal__callback_form input[name="send_page"]').val(i),e("#overlay_modal").css({height:e(t).height(),width:e(t).width()+17}),e("#overlay_modal, #modals, #modal__callback_form").fadeIn(600),!1})),e(".modal__callback2").click((function(){var a=e(this).data("extra"),i=e(this).data("page");return e('#modal__callback_form2 input[name="send_extra"]').val(a),e('#modal__callback_form2 input[name="send_page"]').val(i),e("#overlay_modal").css({height:e(t).height(),width:e(t).width()+17}),e("#overlay_modal, #modals, #modal__callback_form2").fadeIn(600),!1})),e(".otherdate").click((function(){var a=e(this).data("extra"),i=e(this).data("page");return e('#modal__callback_form2 input[name="send_extra"]').val(a),e('#modal__callback_form2 input[name="send_page"]').val(i),e("#overlay_modal").css({height:e(t).height(),width:e(t).width()+17}),e("#overlay_modal, #modals, #modal__callback_form3").fadeIn(600),!1}))}))}