"use strict";function closeNavBar(){$(".btn-hamburger").hasClass("active")&&($(".btn-hamburger").removeClass("active"),$(".pantalla-mobile").css("opacity","0"),$(".pantalla-mobile").css("height","0"),$(".pantalla-mobile").css("visibility","hidden"),$(".bar").css("display","inline-block"))}function mobileVsDesk(){var a=$(".img-slider"),e=parseInt($(window).width());if(e>=752)for(var s=0;s<a.length;s++){var t=$(a[s]).attr("src"),i=t.split("/");t=i[0]+"/desktop/"+i[2]+"/"+i[3],$(a[s]).attr("src",t)}}function navs(a){var e="",s=parseInt($(window).width());e=s>=752?$(".botonera-desktop"):$(".cabecera"),void 0===a&&(a="home"),"home"!==a?(e.addClass("sticky"),$(e).hasClass("cabecera")?$(".fondo-header img").css("margin-top","70px"):$(".fondo-header img").css("margin-top","0"),$(".botonera-home-btn").css("display","inline-block"),$(".botonera-home-btn + li").css("padding-left","30px")):(e.removeClass("sticky"),$(".botonera-home-btn").css("display","none"),$(".botonera-home-btn + li").css("padding-left","0px")),$(window).scroll(function(){$(this).scrollTop()<1&&"home"===a?e.removeClass("sticky"):e.addClass("sticky")})}function links(){var a=$("a");a.each(function(a,e){switch($(e).click(function(a){$(e).hasClass("red")||a.preventDefault()}),$(e).html()){case"Monte":$(e).click(function(){sectionClick("home"),setAbout("home"),setHeader("Monte-home_intro.jpg"),navs("home"),translate(),$("body,html").animate({scrollTop:0},500),closeNavBar()});break;case"home":$(e).click(function(){sectionClick("home"),setAbout("home"),setHeader("Monte-home_intro.jpg"),navs("home"),translate(),$("body,html").animate({scrollTop:0},500),closeNavBar()});break;case"acciones":$(e).click(function(){sectionClick("acciones"),setAbout("acciones"),setHeader("acciones-header.jpg"),navs("acciones"),translate(),$("body,html").animate({scrollTop:0},500),closeNavBar()});break;case"residencia":$(e).click(function(){sectionClick("residencia"),setAbout("residencia"),setHeader("residencia-header.jpg"),navs("residencia"),translate(),$("body,html").animate({scrollTop:0},500),closeNavBar()});break;case"talleres":$(e).click(function(){sectionClick("talleres"),setAbout("talleres"),setHeader("talleres-header.jpg"),navs("talleres"),translate(),$("body,html").animate({scrollTop:0},500),closeNavBar()})}})}function setHeader(a){var e=$(".fondo-header source"),s=$(".fondo-header img");switch(a){case"Monte-home_intro.jpg":$(e).attr("srcset","images/desktop/"+a),$(s).attr("srcset","images/mobile/"+a);break;case"acciones-header.jpg":$(e).attr("srcset","images/desktop/acciones/"+a),$(s).attr("srcset","images/mobile/acciones/"+a);break;case"residencia-header.jpg":$(e).attr("srcset","images/desktop/residencia/"+a),$(s).attr("srcset","images/mobile/residencia/"+a);break;case"talleres-header.jpg":$(e).attr("srcset","images/desktop/talleres/"+a),$(s).attr("srcset","images/mobile/talleres/"+a)}}function setAbout(a){var e=$(".about-title"),s=$(".about-content"),t=$("#consulta_section span");if("home"===a)$(".home-structure").css("display","block"),$(".other-structure").css("display","none");else switch($(".home-structure").css("display","none"),$(".other-structure").css("display","block"),a){case"acciones":$(e).html(a).addClass("translate-js").attr("data-string","HOME_ACTIONS_TITLE"),$(s).empty()&&$(s).append($("<p></p>").html("encuentros de talleres, exposiciones y presentaciones vinculadas al arte.").addClass("translate-js").attr("data-string","HOME_ACTIONS_P")).append($("<p></p>").html("las acciones a lo largo del año se organizan en relación con las artes visuales: la pintura, la escultura y la imagen fija. también se reciben propuestas teniendo a disposición una sala equipada con: sillas, wi-fi, proyector, mesas. ").addClass("translate-js").attr("data-string","HOME_ACTIONS_OVER")),$(t).html(a+": ");break;case"residencia":$(e).html(a).addClass("translate-js").attr("data-string","HOME_RESIDENCE_TITLE"),$(s).empty()&&$(s).append($("<p></p>").html("estimular el dialogo creativo mediante el intercambio y la hospitalidad cultural, por periodos de uno a tres meses.").addClass("translate-js").attr("data-string","HOME_RESIDENCE_P")).append($("<p></p>").html("la residencia es la posibilidad para artistas y demás creativos profesionales para residir y trabajar temporalmente fuera de su locación habitual. Esta oportunidad ofrece condiciones que conducen a la creatividad y provee de un contexto inspirador como también de facilidades prácticas, conexiones y la alternativa de exposición frente a una audiencia determinada. ").addClass("translate-js").attr("data-string","HOME_RESIDENCE_OVER")),$(t).html(a+": ");break;case"talleres":$(e).html(a).addClass("translate-js").attr("data-string","HOME_WORKSHOPS_TITLE"),$(s).empty()&&$(s).append($("<p></p>").html("espacios personales de trabajo destinado para artistas visuales, escritores, productores, investigadores, editores, o personas a fin con las artes y el trabajo de oficio: pintura, escultura, imagen fija y en movimiento. ").addClass("translate-js").attr("data-string","HOME_WORKSHOPS_P")).append($("<p></p>").html("los talleres son 10 salas que varían en sus dimensiones y luminosidad. los alquileres son por un periodo mínimo de un año.").addClass("translate-js").attr("data-string","HOME_WORKSHOPS_OVER")),$(t).html(a+": ")}}function sectionClick(a){var e=$(".visibility");e.each(function(e,s){"about"!==$(s).attr("id")&&$(s).css("display","none"),$(s).attr("id")===a&&$(s).css("display","block")})}function translate(){var a=$("#html").attr("lang");"es"===a?esp():eng()}function eng(){$(".eng-btn").css("color","white"),$(".esp-btn").css("color","#929292"),$.getJSON("./lang/lang_EN.json").done(function(a){$(".translate-js").each(function(){var e=$(this).attr("data-string");$(this).text(a[e])})}),$("#html").attr("lang","en")}function esp(){$(".esp-btn").css("color","white"),$(".eng-btn").css("color","#929292"),$.getJSON("./lang/lang_ES.json").done(function(a){$(".translate-js").each(function(){var e=$(this).attr("data-string");$(this).text(a[e])})}),$("#html").attr("lang","es")}$(document).ready(function(){$(".slider").slick({arrows:!1,mobileFirst:!0,adaptiveHeight:!0,respondTo:"min"}),$(".left-btn").click(function(){var a=$(this).parent(),e=a.children(".slider");e.slick("slickPrev")}),$(".right-btn").click(function(){var a=$(this).parent(),e=a.children(".slider");e.slick("slickNext")}),$(".overlay-btn").click(function(a){a.preventDefault();var e=$(this).parent().parent().prev().children(".slider-content"),s=$(e).children(".overlay-pantalla");"0"===s.css("opacity")?(s.css("opacity","0.7"),s.css("z-index","2"),$(this).addClass("gira")):($(s).css("opacity","0"),s.css("z-index","0"),$(this).removeClass("gira"))}),$(".btn-hamburger").click(function(){$(this).hasClass("active")?($(this).removeClass("active"),$(".pantalla-mobile").css("opacity","0"),$(".pantalla-mobile").css("height","0"),$(".pantalla-mobile").css("visibility","hidden"),$(".bar").css("display","inline-block")):($(this).addClass("active"),$(".pantalla-mobile").css("opacity","1"),$(".pantalla-mobile").css("height","auto"),$(".pantalla-mobile").css("visibility","visible"),$(".bar").css("display","none"))});new Waypoint({element:document.getElementById("footer"),handler:function(a){"down"===a&&($(".logo h1").addClass("bounce"),$(".logo h1+div").addClass("bounce"),console.log("animated"))},offset:"80%"});mobileVsDesk(),navs(),links(),translate(),$(".eng-btn").click(function(){eng()}),$(".esp-btn").click(function(){esp()})});