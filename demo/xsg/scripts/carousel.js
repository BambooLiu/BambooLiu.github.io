!function(t,e,n){"use strict";function i(t,e){var n=null;return function(){var i=this,r=arguments;null===n&&(n=setTimeout(function(){t.apply(i,r),n=null},e))}}var r=function(){var t={};return function(e){if(t[e]!==n)return t[e];var i=document.createElement("div"),r=i.style,a=e.charAt(0).toUpperCase()+e.slice(1),o=["webkit","moz","ms","o"],s=(e+" "+o.join(a+" ")+a).split(" ");for(var l in s)if(s[l]in r)return t[e]=s[l];return t[e]=!1}}(),a="http://www.w3.org/2000/svg",o=function(){var t;return function(){if(t!==n)return t;var e=document.createElement("div");return e.innerHTML="<svg/>",t=e.firstChild&&e.firstChild.namespaceURI===a}}(),s=t(e),l=r("transform"),c={itemContainer:"ul",itemSelector:"li",start:"center",fadeIn:400,loop:!1,autoplay:!1,pauseOnHover:!0,style:"coverflow",spacing:-.6,click:!0,keyboard:!0,scrollwheel:!0,touch:!0,nav:!1,buttons:!1,buttonPrev:"Previous",buttonNext:"Next",onItemSwitch:!1},u={main:"flipster",active:"flipster--active",container:"flipster__container",nav:"flipster__nav",navChild:"flipster__nav__child",navItem:"flipster__nav__item",navLink:"flipster__nav__link",navCurrent:"flipster__nav__item--current",navCategory:"flipster__nav__item--category",navCategoryLink:"flipster__nav__link--category",button:"flipster__button",buttonPrev:"flipster__button--prev",buttonNext:"flipster__button--next",item:"flipster__item",itemCurrent:"flipster__item--current",itemPast:"flipster__item--past",itemFuture:"flipster__item--future",itemContent:"flipster__item__content"},f=new RegExp("\\b("+u.itemCurrent+"|"+u.itemPast+"|"+u.itemFuture+")(.*?)(\\s|$)","g"),p=new RegExp("\\s\\s+","g");t.fn.flipster=function(e){if("string"==typeof e){var r=Array.prototype.slice.call(arguments,1);return this.each(function(){var n=t(this).data("methods");return n[e]?n[e].apply(this,r):this})}var v=t.extend({},c,e);return this.each(function(){function e(t){var e="next"===t?v.buttonNext:v.buttonPrev;return"custom"!==v.buttons&&o?'<svg viewBox="0 0 13 20" xmlns="'+a+'" aria-labelledby="title"><title>'+e+'</title><polyline points="10,3 3,10 10,17"'+("next"===t?' transform="rotate(180 6.5,10)"':"")+"/></svg>":e}function r(n){return n=n||"next",t('<button class="'+u.button+" "+("next"===n?u.buttonNext:u.buttonPrev)+'" role="button" />').html(e(n)).on("click",function(t){x(n),t.preventDefault()})}function c(){v.buttons&&N.length>1&&(F.find("."+u.button).remove(),F.append(r("prev"),r("next")))}function h(){var e={};!v.nav||N.length<=1||(Y&&Y.remove(),Y=t('<ul class="'+u.nav+'" role="navigation" />'),A=t(""),N.each(function(n){var i=t(this),r=i.data("flip-category"),a=i.data("flip-title")||i.attr("title")||n,o=t('<a href="#" class="'+u.navLink+'">'+a+"</a>").data("index",n);if(A=A.add(o),r){if(!e[r]){var s=t('<li class="'+u.navItem+" "+u.navCategory+'">'),l=t('<a href="#" class="'+u.navLink+" "+u.navCategoryLink+'" data-flip-category="'+r+'">'+r+"</a>").data("category",r).data("index",n);e[r]=t('<ul class="'+u.navChild+'" />'),A=A.add(l),s.append(l,e[r]).appendTo(Y)}e[r].append(o)}else Y.append(o);o.wrap('<li class="'+u.navItem+'">')}),Y.on("click","a",function(e){var n=t(this).data("index");n>=0&&(x(n),e.preventDefault())}),"after"===v.nav?F.append(Y):F.prepend(Y),z=Y.find("."+u.navItem))}function d(){if(v.nav){var e=S.data("flip-category");z.removeClass(u.navCurrent),A.filter(function(){return t(this).data("index")===R||e&&t(this).data("category")===e}).parent().addClass(u.navCurrent)}}function m(){F.css("transition","none"),T.css("transition","none"),N.css("transition","none")}function g(){F.css("transition",""),T.css("transition",""),N.css("transition","")}function _(){var e,n=0;return N.each(function(){(e=t(this).height())>n&&(n=e)}),n}function y(e){if(e&&m(),X=T.width(),T.height(_()),!X)return void(j=j||setInterval(function(){y(e)},500));j&&(clearInterval(j),j=!1),N.each(function(n){var i,r,a=t(this);a.attr("class",function(t,e){return e&&e.replace(f,"").replace(p," ")}),i=a.outerWidth(),0!==v.spacing&&a.css("margin-right",i*v.spacing+"px"),r=a.position().left,H[n]=-1*(r+i/2-X/2),n===N.length-1&&(b(),e&&setTimeout(g,1))})}function b(){var e,i,r,a=N.length;N.each(function(n){e=t(this),i=" ",n===R?(i+=u.itemCurrent,r=a+1):n<R?(i+=u.itemPast+" "+u.itemPast+"-"+(R-n),r=a-(R-n)):(i+=u.itemFuture+" "+u.itemFuture+"-"+(n-R),r=a-(n-R)),e.css("z-index",r).attr("class",function(t,e){return e&&e.replace(f,"").replace(p," ")+i})}),R>=0&&(X&&H[R]!==n||y(!0),l?T.css("transform","translateX("+H[R]+"px)"):T.css({left:H[R]+"px"})),d()}function x(t){var e=R;if(!(N.length<=1))return"prev"===t?R>0?R--:v.loop&&(R=N.length-1):"next"===t?R<N.length-1?R++:v.loop&&(R=0):"number"==typeof t?R=t:t!==n&&(R=N.index(t),v.loop&&e!=R&&(e==N.length-1&&R!=N.length-2&&(R=0),0==e&&1!=R&&(R=N.length-1))),S=N.eq(R),R!==e&&v.onItemSwitch&&v.onItemSwitch.call(F,N[R],N[e]),b(),F}function w(t){return v.autoplay=t||v.autoplay,clearInterval(O),O=setInterval(function(){var t=R;x("next"),t!==R||v.loop||clearInterval(O)},v.autoplay),F}function C(){return clearInterval(O),O=0,F}function k(t){return C(),v.autoplay&&t&&(O=-1),F}function I(){y(!0),F.hide().css("visibility","").addClass(u.active).fadeIn(v.fadeIn)}function P(){if(T=F.find(v.itemContainer).addClass(u.container),N=T.find(v.itemSelector),!(N.length<=1))return N.addClass(u.item).each(function(){var e=t(this);e.children("."+u.itemContent).length||e.wrapInner('<div class="'+u.itemContent+'" />')}),v.click&&N.on("click.flipster touchend.flipster",function(e){U||(t(this).hasClass(u.itemCurrent)||e.preventDefault(),x(this))}),c(),h(),R>=0&&x(R),F}function L(t){v.keyboard&&(t[0].tabIndex=0,t.on("keydown.flipster",i(function(t){var e=t.which;37!==e&&39!==e||(x(37===e?"prev":"next"),t.preventDefault())},250,!0)))}function D(t){if(v.scrollwheel){var e,n,r=!1,a=0,o=0,l=0,c=/mozilla/.test(navigator.userAgent.toLowerCase())&&!/webkit/.test(navigator.userAgent.toLowerCase());t.on("mousewheel.flipster wheel.flipster",function(){r=!0}).on("mousewheel.flipster wheel.flipster",i(function(t){clearTimeout(o),o=setTimeout(function(){a=0,l=0},300),t=t.originalEvent,l+=t.wheelDelta||-1*(t.deltaY+t.deltaX),Math.abs(l)<25&&!c||(a++,e=l>0?"prev":"next",n!==e&&(a=0),n=e,(a<6||a%3==0)&&x(e),l=0)},50)),s.on("mousewheel.flipster wheel.flipster",function(t){r&&(t.preventDefault(),r=!1)})}}function E(t){if(v.touch){var e,n,i,r,a,o;t.on({"touchstart.flipster":function(t){t=t.originalEvent,e=t.touches?t.touches[0].clientX:t.clientX,n=t.touches?t.touches[0].clientY:t.clientY},"touchmove.flipster":function(t){t=t.originalEvent,i=t.touches?t.touches[0].clientX:t.clientX,r=t.touches?t.touches[0].clientY:t.clientY,o=i-e,a=r-n,Math.abs(o)>30&&Math.abs(a)<100&&t.preventDefault()},"touchend.flipster touchcancel.flipster ":function(){o=i-e,a=r-n,Math.abs(o)>30&&Math.abs(a)<100&&x(o>0?"prev":"next")}})}}var M,T,X,j,N,S,Y,z,A,F=t(this),H=[],R=0,O=!1,U=!1;M={jump:x,next:function(){return x("next")},prev:function(){return x("prev")},play:w,stop:C,pause:k,index:P},F.data("methods",M),F.hasClass(u.active)||function(){var t;if(F.css("visibility","hidden"),P(),N.length<=1)return void F.css("visibility","");t=!!v.style&&"flipster--"+v.style.split(" ").join(" flipster--"),F.addClass([u.main,l?"flipster--transform":" flipster--no-transform",t,v.click?"flipster--click":""].join(" ")),v.start&&(R="center"===v.start?Math.floor(N.length/2):v.start),x(R);var e=F.find("img");if(e.length){var n=0;e.on("load",function(){++n>=e.length&&I()}),setTimeout(I,750)}else I();s.on("resize.flipster",i(y,400)),v.autoplay&&w(),v.pauseOnHover&&T.on("mouseenter.flipster",function(){O?k(!0):C()}).on("mouseleave.flipster",function(){-1===O&&w()}),L(F),D(T),E(T)}()})}}(jQuery,window);