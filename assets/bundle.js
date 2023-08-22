/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var e={283:e=>{var t={handleClick:function(){$(".js-open-accordion").click((function(e){$(e.currentTarget).hasClass("js-active")?$(e.currentTarget).removeClass("js-active"):$(e.currentTarget).addClass("js-active")}))},init:function(){this.handleClick()}};e.exports=t},384:e=>{var t={citationContainer:$(".citations").find("a"),addIcon:function(){t.citationContainer.append('<i class="material-icons launch">launch</i>')},init:function(){this.addIcon()}};e.exports=t},686:e=>{var t={slideTarget:void 0,slideContainer:void 0,setupSlideAnimation:function(){t.slideTarget=$(".slide-panel__container"),t.slideContainer=$(".slide-panel"),t.slideTarget.animate({right:"-100%"},"slow").fadeOut(5),t.slideContainer.removeClass("is-visible")},handleSlideDisplay:function(){$("body").on("click",".slide-panel__open-trigger",(function(e){var r=e.currentTarget.getAttribute("data-term"),n=$('[data-value="'.concat(r,'"]'));n.hasClass("is-visible")?(t.slideTarget.animate({right:"-100%"},400).fadeOut(5),n.removeClass("is-visible")):(t.slideTarget.animate({right:"0%"},400).css("display","block"),n.addClass("is-visible"),$("#overlay").addClass("js-active"))}))},handleSlideCloseButton:function(){$("body").on("click",".slide-panel__close-trigger",(function(e){e.preventDefault(),t.slideTarget.animate({right:"-100%"},"slow").fadeOut(5),t.slideContainer.removeClass("is-visible"),$("#overlay").removeClass("js-active")}))},handleOverlayClose:function(){$("body").on("click","#overlay",(function(e){e.preventDefault(),t.slideTarget.animate({right:"-100%"},"slow").fadeOut(5),t.slideContainer.removeClass("is-visible")}))},init:function(){this.setupSlideAnimation(),this.handleSlideDisplay(),this.handleSlideCloseButton(),this.handleOverlayClose()}};e.exports=t},827:(e,t,r)=>{var n={cookies:r(282),slideUp:function(){setTimeout((function(){$(".cookies-popup").animate({bottom:"0"},400).css("display","block")}),800)},slideDown:function(){$(".popup-button").on("click",(function(e){var t=e.currentTarget.getAttribute("cookie-value");"agree"===t?n.cookies.set("user_cookie_agreement","agree",{expires:365}):"disagree"===t&&n.cookies.set("user_cookie_agreement","disagree",{expires:365}),$(".cookies-popup").animate({bottom:"-220px"},"slow")}))},hidePopupBasedOnCookie:function(){n.cookies.get("user_cookie_agreement")&&$(".cookies-popup").addClass("hidden")},init:function(){this.slideUp(),this.slideDown(),this.hidePopupBasedOnCookie()}};e.exports=n},389:e=>{var t={handleInternalMenu:function(){$(".internal-menu__item").on("click",(function(e){e.preventDefault();var r=$(e.currentTarget);$(".internal-menu__item").removeClass("js-active-item"),r.addClass("js-active-item");var n=r.attr("data-order");t.handleNavClick(n)}))},getView:function(e){var t=$("[data-nav-order='".concat(e||"1","']"));if(t.addClass("js-active-section"),$(".page-section--nav.fixed").length){var r=t.offset().top;$(window).scrollTop(Math.floor(r))}},handleNavClick:function(e){$(".js-active-section").removeClass("js-active-section"),t.getView(e)},fixedInternalNav:function(){var e=$(window);if($(".page-section__process-nav").length>0){var t=$(".page-section__process-nav"),r=t.offset().top;e.scroll((function(){t.toggleClass("fixed",e.scrollTop()>r)}))}},redirectLearningModules:function(e){switch(e){case"software-process":window.location.pathname="process/software.html";break;case"hardware-process":window.location.pathname="process/hardware.html";break;case"documentation-process":window.location.pathname="process/documentation.html";break;case"branding-process":window.location.pathname="process/branding.html";break;case"certified-projects":window.location.pathname="list.html";break;case"certify-a-project":window.location.href="https://application.oshwa.org/apply"}},resetDropdownsOnBack:function(){$(".learning-module__dropdown")&&$(".learning-module__dropdown").prop("selectedIndex",0)},handleLearningModuleSelect:function(){$(".learning-module__dropdown").on("change",(function(){var e=$(".learning-module__dropdown").children(":selected").attr("value");t.redirectLearningModules(e)}))},init:function(){this.handleInternalMenu(),this.getView(),this.fixedInternalNav(),this.handleLearningModuleSelect(),this.resetDropdownsOnBack()}};e.exports=t},76:e=>{var t={options:{valueNames:["name","uid","version","keywords","responsible-party",{name:"date",attr:"date"},{name:"type",attr:"type"},{name:"hardware",attr:"hardware"},{name:"documentation",attr:"documentation"},{name:"software",attr:"software"},{name:"location",attr:"location"}],fuzzySearch:{searchClass:"fuzzy-search",location:0,distance:100,threshold:.2,multiSearch:!0}},projectList:void 0,allFilters:void 0,searchQueries:void 0,typeCheckedValues:[],location:"all",activeTag:void 0,createList:function(){t.projectList=new List("project_data",t.options),document.location.href.indexOf("list")>-1&&t.projectList.sort("name",{order:"asc"}),t.setSearchQueryDefaults()},filterList:function(e){var r=e.hardware,n=e.software,a=e.location,o=e.searchParams,i=e.projectTypes;"string"==typeof i&&(i=i.split(",")),t.projectList.search(o),t.projectList.filter((function(e){if(null!==e.values().hardware&&null!==e.values().software&&null!==e.values().type&&null!==e.values().location&&-1!==e.values().hardware.indexOf(r)&&-1!==e.values().software.indexOf(n)&&-1!==e.values().location.indexOf(a)&&t.matchesAllItems(e.values().type,i))return!0})),t.displayResults(),t.displayResultQueries()},filterBySearch:function(){$("#searchfield").on("keyup",(function(e){t.searchQueries.searchParams=$(e.currentTarget).val(),t.filterList(t.searchQueries),t.setSessionStorage()}))},filterByDropdowns:function(){t.allFilters=$(".dropdown"),t.allFilters.on("change",(function(e){t.allFilters.each((function(r){$(r).each((function(){var r=e.currentTarget.id,n=$(e.currentTarget).children(":selected").attr("id");t.searchQueries[r]=n}))})),t.filterList(t.searchQueries),t.setSessionStorage()}))},mapCheckBoxes:function(){t.typeCheckedValues=$('input[type="checkbox"]:checked').map((function(){return this.value})).get(),0===t.typeCheckedValues.length&&(t.typeCheckedValues=["all"]),t.searchQueries.projectTypes=t.typeCheckedValues,t.filterList(t.searchQueries),t.setSessionStorage()},filterByCheckboxes:function(){$(".filter-container").on("change",(function(){t.mapCheckBoxes()}))},matchesAllItems:function(e,t){var r,n;return e.length>t.length?(r=e,n=t):(r=t,n=e),n.every((function(e){return-1!==r.indexOf(e)}))},filterByUrlParams:function(){var e=window.location.search.split("=")[0],r=window.location.search.split("=")[1];switch(e){case"?q":t.addQueryToSearch(decodeURI(r)),t.matchSearchQueriesToUI(),t.filterList(t.searchQueries);break;case"?type":$("input[type=checkbox][value=".concat(r,"]")).prop("checked",!0),t.activeTag=r,t.matchSearchQueriesToUI(),t.mapCheckBoxes()}},clearAllFilters:function(){$(".clear_filters").on("click",(function(e){e.preventDefault(),t.location="",t.setSearchQueryDefaults(),t.projectList.search(),t.projectList.filter(),t.projectList.sort("name",{order:"asc"}),""!==window.location.search&&(window.location.href=window.location.origin+"/list.html"),t.clearFormInputs(),t.displayResults(),t.displayResultQueries(),t.setSessionStorage()}))},clearFormInputs:function(){$(".search__input").val(""),$(".dropdown").prop("selectedIndex",0),$(".country-dropdown").prop("selectedIndex",0),$('input[type="checkbox"]:checked').prop("checked",!1)},displayResults:function(){var e=$(".project").length,t=1===e?"Project":"Projects";$(".results-count").html("<p>Displaying ".concat(e," ").concat(t,"</p>")),$(".mobile-results-message").html("<p>See ".concat(e," ").concat(t,"</p>"))},displayResultQueries:function(){var e=[],r=t.searchQueries.searchParams;""!==r&&e.push(r),$('input[type="checkbox"]:checked').each((function(t,r){return e.push(r.id)})),$(".dropdown").map((function(t,r){return"Select one"!==r.value&&"Country"!==r.value&&e.push(r.value),e})),e.length>0?($(".results-message").show(),0===$(".project").length?$(".results-message").html("<p>No results for: ".concat(e.join("; "),"</p>")):$(".results-message").html("<p>Results: ".concat(e.join("; "),"</p>"))):$(".results-message").hide()},matchSearchQueriesToUI:function(){t.searchQueries.searchParams=$("#searchfield").val()||t.searchQueries.searchParams,t.searchQueries.location=$(".country-dropdown").children(":selected").attr("id");var e=["all"];t.typeCheckedValues=$('input[type="checkbox"]:checked').each((function(t,r){e.push(r.value)})),t.searchQueries.projectTypes=e,t.searchQueries.hardware=$("#hardware").children(":selected").attr("id"),t.searchQueries.software=$("#software").children(":selected").attr("id")},handleSearchBehavior:function(){window.location.search?t.filterByUrlParams():(t.matchSearchQueriesToUI(),t.filterList(t.searchQueries))},addQueryToSearch:function(e){$("#searchfield").val(e)},setSearchQueryDefaults:function(){t.searchQueries={software:"all",hardware:"all",projectTypes:["all"],location:"all",searchParams:""}},blurInputOnHover:function(){$(".projects").on("mouseenter",(function(){$("#searchfield").blur()}))},setSessionStorage:function(){""===window.location.search?sessionStorage.setItem("searchQueries",JSON.stringify(t.searchQueries)):sessionStorage.clear()},filterByLocalStorage:function(){var e=window.location.search.split("=")[0];if(sessionStorage.searchQueries&&!e||"?search"===e){var r=JSON.parse(sessionStorage.searchQueries);t.searchQueries=r;var n=function(e){var r=t.searchQueries[e];"all"!==r&&document.querySelectorAll(".dropdown").forEach((function(t){t.id===e&&t.childNodes.forEach((function(e){e.id===r&&(e.selected=!0)}))})),"projectTypes"===e&&r.forEach((function(e){document.querySelectorAll(".form-type").forEach((function(t){t.getAttribute("data-value")===e&&(t.checked=!0)}))})),"searchParams"===e&&(document.querySelector("#searchfield").value=r)};for(var a in t.searchQueries)n(a);t.displayResultQueries()}},init:function(){this.createList(),this.filterByLocalStorage(),this.filterBySearch(),this.filterByDropdowns(),this.filterByCheckboxes(),this.clearAllFilters(),this.displayResults(),this.handleSearchBehavior(),this.blurInputOnHover()}};e.exports=t},426:e=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function r(){"use strict";r=function(){return e};var e={},n=Object.prototype,a=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var a=t&&t.prototype instanceof p?t:p,o=Object.create(a.prototype),i=new S(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return L()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=d(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(e,r,i),o}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var h={};function p(){}function f(){}function v(){}var m={};l(m,i,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(j([])));y&&y!==n&&a.call(y,i)&&(m=y);var w=v.prototype=p.prototype=Object.create(m);function k(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function $(e,r){function n(o,i,c,s){var l=d(e[o],e,i);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==t(h)&&a.call(h,"__await")?r.resolve(h.__await).then((function(e){n("next",e,c,s)}),(function(e){n("throw",e,c,s)})):r.resolve(h).then((function(e){u.value=e,c(u)}),(function(e){return n("throw",e,c,s)}))}s(l.arg)}var o;this._invoke=function(e,t){function a(){return new r((function(r,a){n(e,t,r,a)}))}return o=o?o.then(a,a):a()}}function b(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=d(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,h;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function j(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=v,l(w,"constructor",v),l(v,"constructor",f),f.displayName=l(v,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,l(e,s,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},k($.prototype),l($.prototype,c,(function(){return this})),e.AsyncIterator=$,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new $(u(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},k(w),l(w,s,"Generator"),l(w,i,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=j,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=a.call(o,"catchLoc"),s=a.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),C(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;C(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:j(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}function n(e,t,r,n,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,o){var i=e.apply(t,r);function c(e){n(i,a,o,c,s,"next",e)}function s(e){n(i,a,o,c,s,"throw",e)}c(void 0)}))}}var o={stackedTemplateURL:"/images/mark-stack-template.svg",wideTemplateURL:"/images/mark-wide-template.svg",init:function(){var e=this;return a(r().mark((function t(){var n,a,o,i;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=document.getElementById("certification-mark-generator")){t.next=3;break}return t.abrupt("return");case 3:return a=n.dataset.projectId,o=n.querySelector("[data-variant='stacked']"),i=n.querySelector("[data-variant='wide']"),t.next=8,Promise.all([e.generateAndDisplay(e.stackedTemplateURL,o,a),e.generateAndDisplay(e.wideTemplateURL,i,a)]);case 8:return t.abrupt("return",t.sent);case 9:case"end":return t.stop()}}),t)})))()},generateAndDisplay:function(e,t,n){var o=this;return a(r().mark((function a(){var i,c,s,l;return r().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i=t.dataset.variant,r.next=3,o.loadTemplateSVG(e);case 3:return c=r.sent,c.querySelector("text").textContent=n,r.next=8,o.SVGXMLDocumentToImageElement(c);case 8:s=r.sent,t.prepend(s),(l=t.querySelector("a[data-format='svg']")).href=s.src,l.download="certification-mark-".concat(n,"-").concat(i,".svg"),t.querySelector("a[data-format='png']").addEventListener("click",(function(e){e.preventDefault();var t=o.ImageElementToPNG(s,4e3);o.downloadDataURLAsFile(t,"certification-mark-".concat(n,"-").concat(i,".png"))}));case 15:case"end":return r.stop()}}),a)})))()},loadTemplateSVG:function(e){return a(r().mark((function t(){var n,a;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return t.next=4,t.sent.text();case 4:return n=t.sent,a=new DOMParser,t.abrupt("return",a.parseFromString(n,"image/svg+xml"));case 7:case"end":return t.stop()}}),t)})))()},SVGXMLDocumentToImageElement:function(e){var t=this;return a(r().mark((function n(){var a,o,i;return r().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=t.SVGXMLDocumentToBlob(e),o=URL.createObjectURL(a),r.next=4,t.createImageElement(o);case 4:return i=r.sent,r.abrupt("return",i);case 6:case"end":return r.stop()}}),n)})))()},SVGXMLDocumentToBlob:function(e){var t=(new XMLSerializer).serializeToString(e);return new Blob([t],{type:"image/svg+xml"})},createImageElement:function(e){return a(r().mark((function t(){var n,a;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=document.createElement("img"),a=new Promise((function(e){n.addEventListener("load",(function(){e(n)}))})),n.src=e,t.next=5,a;case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))()},ImageElementToPNG:function(e,t){var r=document.createElement("canvas"),n=e.height/e.width;return r.width=t,r.height=Math.round(t*n),r.getContext("2d").drawImage(e,0,0,r.width,r.height),r.toDataURL("image/png")},downloadDataURLAsFile:function(e,t){var r=document.createElement("a");r.href=e,r.download=t,r.target="_blank",r.click()}};e.exports=o},891:e=>{var t={openFilters:function(){$(".toggle-filters").click((function(){$(".filter-container").toggleClass("active"),$(".toggle-filters").toggleClass("expanded"),$(".filters").toggleClass("activated"),$(".toggle-filters").hasClass("expanded")?($(".mobile-results-message").addClass("expanded"),$(".js-trigger-menu").html("close")):($(".mobile-results-message").removeClass("expanded"),$(".js-trigger-menu").html("tune"))}))},init:function(){this.openFilters()}};e.exports=t},953:e=>{var t={openModal:function(){$(".js-open-modal").click((function(e){$(e.currentTarget).find(".js-target-modal").addClass("js-active"),$("#overlay").addClass("js-active"),$("body").addClass("js-body-modal-active")}))},closeModal:function(){$("body").on("click",".js-close-modal",(function(){$(".js-target-modal").removeClass("js-active"),$("#overlay").removeClass("js-active"),$("body").removeClass("js-body-modal-active")}))},clickOverlayCloseModal:function(){$("#overlay").click((function(){$("body").removeClass("js-body-modal-active")}))},init:function(){this.openModal(),this.closeModal(),this.clickOverlayCloseModal()}};e.exports=t},257:e=>{var t={openMenu:function(){$(".menu-button").on("click",(function(){$(".js-target-menu").toggleClass("active-menu"),$(".menu-button").toggleClass("active-menu-button"),$("#overlay").toggleClass("js-active")}))},closeMenu:function(){$(".close-menu").on("click",(function(){$(".js-target-menu").removeClass("active-menu"),$(".menu-button").removeClass("active-menu-button"),$("#overlay").removeClass("js-active")})),$("#overlay").on("click",(function(){$(".js-target-menu").removeClass("active-menu"),$(".top-bar__button").removeClass("active-menu-button")}))},init:function(){this.openMenu(),this.closeMenu()}};e.exports=t},34:e=>{var t={onClickOverlay:function(){$("#overlay").click((function(){$(".js-active").removeClass("js-active"),$(".js-active-menu").removeClass("js-active-menu")}))},init:function(){this.onClickOverlay()}};e.exports=t},596:e=>{var t={smoothScrolling:function(){$("a[href*=\\#]:not([href=\\#])").on("click",(function(e){var t=$(e.currentTarget.hash),r=e.currentTarget.hostname,n=window.location.hostname,a=e.currentTarget.pathname.replace(/^\//,""),o=window.location.pathname.replace(/^\//,"");return t.length||(t=$("[name=".concat(e.currentTarget.hash.slice(1),"]"))),!t.length||r!==n&&a!==o||($("html, body").animate({scrollTop:t.offset().top},1e3),!1)}))},hideScrollonPath:function(e){window.location.pathname===e&&$("body").css("overflow","hidden")},init:function(){this.smoothScrolling(),this.hideScrollonPath("/list.html")}};e.exports=t},954:e=>{var t={fixedSearchTrigger:function(){$(".js-trigger-search").on("click",(function(e){e.preventDefault(),$(e.currentTarget).parent().addClass("js-active"),$("#overlay").addClass("js-active")}))},init:function(){this.fixedSearchTrigger()}};e.exports=t},46:e=>{var t={listUrl:"/list.html",searchString:void 0,searchListUrl:void 0,submitSearch:function(){t.searchString=$("#searchfield"),$(".js-search-submit").on("click",(function(){var e=t.searchString.val(),r=document.location.origin;t.searchListUrl="".concat(r).concat(t.listUrl,"?q=").concat(e),"about:blank"!==window.location.href&&(window.location.href=t.searchListUrl)}))},init:function(){this.submitSearch()}};e.exports=t},264:e=>{var t={generalSlider:function(){$(".slider").slick({arrows:!0,draggable:!1,swipeToSlide:!0,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:800,settings:{draggable:!0}}]})},init:function(){this.generalSlider()}};e.exports=t},82:e=>{var t={schematicDescription:void 0,targetCircles:function(){t.schematicDescription=$(".schematic-description"),$(".circle").on("click",(function(e){var r=$(e.currentTarget).attr("circle-attr");$(e.currentTarget).hasClass("active")?$(e.currentTarget).removeClass("active"):($(e.currentTarget).addClass("active"),$(e.currentTarget).siblings().removeClass("active")),t.showData(r)}))},showData:function(e){t.schematicDescription=[].slice.call(t.schematicDescription),t.schematicDescription.forEach((function(t){t.getAttribute("position-attr")===e?t.classList.toggle("display"):t.classList.remove("display")}))},activateFirstCircle:function(){var e=$(".circle").first();e.first().addClass("active"),t.showData(e.attr("circle-attr"))},init:function(){this.targetCircles(),this.activateFirstCircle()}};e.exports=t},774:e=>{var t={closeSticky:function(){$(".js-close-sticky").click((function(){$(".js-target-sticky").removeClass("js-active")}))},init:function(){this.closeSticky()}};e.exports=t},517:e=>{var t={listUrl:"/list.html",searchListUrl:void 0,filterByTag:function(){$(".project__type").on("click",(function(e){var r=e.target.getAttribute("type-tag"),n=document.location.origin;t.searchListUrl="".concat(n).concat(t.listUrl,"?type=").concat(r),"about:blank"!==window.location.href&&(window.location.href=t.searchListUrl)}))},filterByCategory:function(){$(".container-overlay").on("click",(function(e){var r=e.target.parentElement.getAttribute("type"),n=document.location.origin;t.searchListUrl="".concat(n).concat(t.listUrl,"?type=").concat(r),"about:blank"!==window.location.href&&(window.location.href=t.searchListUrl)}))},init:function(){this.filterByTag(),this.filterByCategory()}};e.exports=t},232:e=>{var t={markdownLinksNewPage:function(){$(".markdown a").map((function(e,t){return t.setAttribute("target","_blank")}))}};e.exports=t},282:(e,t)=>{t.defaults={},t.set=function(e,r,n){var a=n||{},o=t.defaults,i=a.expires||o.expires,c=a.domain||o.domain,s=void 0!==a.path?a.path:void 0!==o.path?o.path:"/",l=void 0!==a.secure?a.secure:o.secure,u=void 0!==a.httponly?a.httponly:o.httponly,d=void 0!==a.samesite?a.samesite:o.samesite,h=i?new Date("number"==typeof i?(new Date).getTime()+864e5*i:i):0;document.cookie=e.replace(/[^+#$&^`|]/g,encodeURIComponent).replace("(","%28").replace(")","%29")+"="+r.replace(/[^+#$&/:<-\[\]-}]/g,encodeURIComponent)+(h&&h.getTime()>=0?";expires="+h.toUTCString():"")+(c?";domain="+c:"")+(s?";path="+s:"")+(l?";secure":"")+(u?";httponly":"")+(d?";samesite="+d:"")},t.get=function(e){for(var t=document.cookie.split(";");t.length;){var r=t.pop(),n=r.indexOf("=");if(n=n<0?r.length:n,decodeURIComponent(r.slice(0,n).replace(/^\s+/,""))===e)return decodeURIComponent(r.slice(n+1))}return null},t.erase=function(e,r){t.set(e,"",{expires:-1,domain:r&&r.domain,path:r&&r.path,secure:0,httponly:0})},t.all=function(){for(var e={},t=document.cookie.split(";");t.length;){var r=t.pop(),n=r.indexOf("=");n=n<0?r.length:n,e[decodeURIComponent(r.slice(0,n).replace(/^\s+/,""))]=decodeURIComponent(r.slice(n+1))}return e}}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=r(283),t=r.n(e),n=r(34),a=r.n(n),o=r(953),i=r.n(o),c=r(257),s=r.n(c),l=r(596),u=r.n(l),d=r(954),h=r.n(d),p=r(264),f=r.n(p),v=r(774),m=r.n(v),g=r(232),y=r.n(g),w=r(389),k=r.n(w),$=r(686),b=r.n($),x=r(891),C=r.n(x),S=r(76),j=r.n(S),L=r(384),T=r.n(L),_=r(46),O=r.n(_),E=r(517),D=r.n(E),I=r(82),U=r.n(I),Q=r(827),P=r.n(Q),B=r(426),M=r.n(B);t().init(),i().init(),s().init(),a().init(),u().init(),h().init(),f().init(),m().init(),y().markdownLinksNewPage(),k().init(),b().init(),C().init(),T().init(),"/list.html"===window.location.pathname&&j().init(),O().init(),D().init(),U().init(),P().init(),M().init()})()})();