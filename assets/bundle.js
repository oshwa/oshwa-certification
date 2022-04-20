!function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=18)}([function(e,t){var n={handleClick:function(){$(".js-open-accordion").click((function(e){$(e.currentTarget).hasClass("js-active")?$(e.currentTarget).removeClass("js-active"):$(e.currentTarget).addClass("js-active")}))},init:function(){this.handleClick()}};e.exports=n},function(e,t){var n={onClickOverlay:function(){$("#overlay").click((function(){$(".js-active").removeClass("js-active"),$(".js-active-menu").removeClass("js-active-menu")}))},init:function(){this.onClickOverlay()}};e.exports=n},function(e,t){var n={openModal:function(){$(".js-open-modal").click((function(e){$(e.currentTarget).find(".js-target-modal").addClass("js-active"),$("#overlay").addClass("js-active"),$("body").addClass("js-body-modal-active")}))},closeModal:function(){$("body").on("click",".js-close-modal",(function(){$(".js-target-modal").removeClass("js-active"),$("#overlay").removeClass("js-active"),$("body").removeClass("js-body-modal-active")}))},clickOverlayCloseModal:function(){$("#overlay").click((function(){$("body").removeClass("js-body-modal-active")}))},init:function(){this.openModal(),this.closeModal(),this.clickOverlayCloseModal()}};e.exports=n},function(e,t){var n={openMenu:function(){$(".menu-button").on("click",(function(){$(".js-target-menu").toggleClass("active-menu"),$(".menu-button").toggleClass("active-menu-button"),$("#overlay").toggleClass("js-active")}))},closeMenu:function(){$(".close-menu").on("click",(function(){$(".js-target-menu").removeClass("active-menu"),$(".menu-button").removeClass("active-menu-button"),$("#overlay").removeClass("js-active")})),$("#overlay").on("click",(function(){$(".js-target-menu").removeClass("active-menu"),$(".top-bar__button").removeClass("active-menu-button")}))},init:function(){this.openMenu(),this.closeMenu()}};e.exports=n},function(e,t){var n={smoothScrolling:function(){$("a[href*=\\#]:not([href=\\#])").on("click",(function(e){var t=$(e.currentTarget.hash),n=e.currentTarget.hostname,i=window.location.hostname,a=e.currentTarget.pathname.replace(/^\//,""),o=window.location.pathname.replace(/^\//,"");return t.length||(t=$("[name=".concat(e.currentTarget.hash.slice(1),"]"))),!t.length||n!==i&&a!==o||($("html, body").animate({scrollTop:t.offset().top},1e3),!1)}))},hideScrollonPath:function(e){window.location.pathname===e&&$("body").css("overflow","hidden")},init:function(){this.smoothScrolling(),this.hideScrollonPath("/list.html")}};e.exports=n},function(e,t){var n={fixedSearchTrigger:function(){$(".js-trigger-search").on("click",(function(e){e.preventDefault(),$(e.currentTarget).parent().addClass("js-active"),$("#overlay").addClass("js-active")}))},init:function(){this.fixedSearchTrigger()}};e.exports=n},function(e,t){var n={generalSlider:function(){$(".slider").slick({arrows:!0,draggable:!1,swipeToSlide:!0,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:800,settings:{draggable:!0}}]})},init:function(){this.generalSlider()}};e.exports=n},function(e,t){var n={closeSticky:function(){$(".js-close-sticky").click((function(){$(".js-target-sticky").removeClass("js-active")}))},init:function(){this.closeSticky()}};e.exports=n},function(e,t){var n={markdownLinksNewPage:function(){$(".markdown a").map((function(e,t){return t.setAttribute("target","_blank")}))}};e.exports=n},function(e,t){var n={handleInternalMenu:function(){$(".internal-menu__item").on("click",(function(e){e.preventDefault();var t=$(e.currentTarget);$(".internal-menu__item").removeClass("js-active-item"),t.addClass("js-active-item");var i=t.attr("data-order");n.handleNavClick(i)}))},getView:function(e){var t=$("[data-nav-order='".concat(e||"1","']"));if(t.addClass("js-active-section"),$(".page-section--nav.fixed").length){var n=t.offset().top;$(window).scrollTop(Math.floor(n))}},handleNavClick:function(e){$(".js-active-section").removeClass("js-active-section"),n.getView(e)},fixedInternalNav:function(){var e=$(window);if($(".page-section__process-nav").length>0){var t=$(".page-section__process-nav"),n=t.offset().top;e.scroll((function(){t.toggleClass("fixed",e.scrollTop()>n)}))}},redirectLearningModules:function(e){switch(e){case"software-process":window.location.pathname="process/software.html";break;case"hardware-process":window.location.pathname="process/hardware.html";break;case"documentation-process":window.location.pathname="process/documentation.html";break;case"branding-process":window.location.pathname="process/branding.html";break;case"certified-projects":window.location.pathname="list.html";break;case"certify-a-project":window.location.href="https://application.oshwa.org/apply"}},resetDropdownsOnBack:function(){$(".learning-module__dropdown")&&$(".learning-module__dropdown").prop("selectedIndex",0)},handleLearningModuleSelect:function(){$(".learning-module__dropdown").on("change",(function(e){var t=$(".learning-module__dropdown").children(":selected").attr("value");n.redirectLearningModules(t)}))},init:function(){this.handleInternalMenu(),this.getView(),this.fixedInternalNav(),this.handleLearningModuleSelect(),this.resetDropdownsOnBack()}};e.exports=n},function(e,t){var n={slideTarget:void 0,slideContainer:void 0,setupSlideAnimation:function(){n.slideTarget=$(".slide-panel__container"),n.slideContainer=$(".slide-panel"),n.slideTarget.animate({right:"-100%"},"slow").fadeOut(5),n.slideContainer.removeClass("is-visible")},handleSlideDisplay:function(){$("body").on("click",".slide-panel__open-trigger",(function(e){var t=e.currentTarget.getAttribute("data-term"),i=$('[data-value="'.concat(t,'"]'));i.hasClass("is-visible")?(n.slideTarget.animate({right:"-100%"},400).fadeOut(5),i.removeClass("is-visible")):(n.slideTarget.animate({right:"0%"},400).css("display","block"),i.addClass("is-visible"),$("#overlay").addClass("js-active"))}))},handleSlideCloseButton:function(){$("body").on("click",".slide-panel__close-trigger",(function(e){e.preventDefault(),n.slideTarget.animate({right:"-100%"},"slow").fadeOut(5),n.slideContainer.removeClass("is-visible"),$("#overlay").removeClass("js-active")}))},handleOverlayClose:function(){$("body").on("click","#overlay",(function(e){e.preventDefault(),n.slideTarget.animate({right:"-100%"},"slow").fadeOut(5),n.slideContainer.removeClass("is-visible")}))},init:function(){this.setupSlideAnimation(),this.handleSlideDisplay(),this.handleSlideCloseButton(),this.handleOverlayClose()}};e.exports=n},function(e,t){var n={openFilters:function(){$(".toggle-filters").click((function(){$(".filter-container").toggleClass("active"),$(".toggle-filters").toggleClass("expanded"),$(".filters").toggleClass("activated"),$(".toggle-filters").hasClass("expanded")?($(".mobile-results-message").addClass("expanded"),$(".js-trigger-menu").html("close")):($(".mobile-results-message").removeClass("expanded"),$(".js-trigger-menu").html("tune"))}))},init:function(){this.openFilters()}};e.exports=n},function(e,t){var n={options:{valueNames:["name","uid","version","keywords","responsible-party",{name:"date",attr:"date"},{name:"type",attr:"type"},{name:"hardware",attr:"hardware"},{name:"documentation",attr:"documentation"},{name:"software",attr:"software"},{name:"location",attr:"location"}],fuzzySearch:{searchClass:"fuzzy-search",location:0,distance:100,threshold:.2,multiSearch:!0}},projectList:void 0,allFilters:void 0,searchQueries:void 0,typeCheckedValues:[],location:"all",activeTag:void 0,createList:function(){n.projectList=new List("project_data",n.options),document.location.href.indexOf("list")>-1&&n.projectList.sort("name",{order:"asc"}),n.setSearchQueryDefaults()},filterList:function(e){var t=e.hardware,i=e.software,a=e.location,o=e.searchParams,r=e.projectTypes;"string"==typeof r&&(r=r.split(",")),n.projectList.search(o),n.projectList.filter((function(e){if(null!==e.values().hardware&&null!==e.values().software&&null!==e.values().type&&null!==e.values().location&&-1!==e.values().hardware.indexOf(t)&&-1!==e.values().software.indexOf(i)&&-1!==e.values().location.indexOf(a)&&n.matchesAllItems(e.values().type,r))return!0})),n.displayResults(),n.displayResultQueries()},filterBySearch:function(){$("#searchfield").on("keyup",(function(e){n.searchQueries.searchParams=$(e.currentTarget).val(),n.filterList(n.searchQueries),n.setSessionStorage()}))},filterByDropdowns:function(){n.allFilters=$(".dropdown"),n.allFilters.on("change",(function(e){n.allFilters.each((function(t){$(t).each((function(){var t=e.currentTarget.id,i=$(e.currentTarget).children(":selected").attr("id");n.searchQueries[t]=i}))})),n.filterList(n.searchQueries),n.setSessionStorage()}))},mapCheckBoxes:function(){n.typeCheckedValues=$('input[type="checkbox"]:checked').map((function(){return this.value})).get(),0===n.typeCheckedValues.length&&(n.typeCheckedValues=["all"]),n.searchQueries.projectTypes=n.typeCheckedValues,n.filterList(n.searchQueries),n.setSessionStorage()},filterByCheckboxes:function(){$(".filter-container").on("change",(function(){n.mapCheckBoxes()}))},matchesAllItems:function(e,t){var n,i;return e.length>t.length?(n=e,i=t):(n=t,i=e),i.every((function(e){return-1!==n.indexOf(e)}))},filterByUrlParams:function(){var e=window.location.search.split("=")[0],t=window.location.search.split("=")[1];switch(e){case"?q":n.addQueryToSearch(decodeURI(t)),n.matchSearchQueriesToUI(),n.filterList(n.searchQueries);break;case"?type":$("input[type=checkbox][value=".concat(t,"]")).prop("checked",!0),n.activeTag=t,n.matchSearchQueriesToUI(),n.mapCheckBoxes()}},clearAllFilters:function(){$(".clear_filters").on("click",(function(e){e.preventDefault(),n.location="",n.setSearchQueryDefaults(),n.projectList.search(),n.projectList.filter(),n.projectList.sort("name",{order:"asc"}),""!==window.location.search&&(window.location.href=window.location.origin+"/list.html"),n.clearFormInputs(),n.displayResults(),n.displayResultQueries(),n.setSessionStorage()}))},clearFormInputs:function(){$(".search__input").val(""),$(".dropdown").prop("selectedIndex",0),$(".country-dropdown").prop("selectedIndex",0),$('input[type="checkbox"]:checked').prop("checked",!1)},displayResults:function(){var e=$(".project").length,t=1===e?"Project":"Projects";$(".results-count").html("<p>Displaying ".concat(e," ").concat(t,"</p>")),$(".mobile-results-message").html("<p>See ".concat(e," ").concat(t,"</p>"))},displayResultQueries:function(){var e=[],t=n.searchQueries.searchParams;""!==t&&e.push(t),$('input[type="checkbox"]:checked').each((function(t,n){return e.push(n.id)})),$(".dropdown").map((function(t,n){return"Select one"!==n.value&&"Country"!==n.value&&e.push(n.value),e})),e.length>0?($(".results-message").show(),0===$(".project").length?$(".results-message").html("<p>No results for: ".concat(e.join("; "),"</p>")):$(".results-message").html("<p>Results: ".concat(e.join("; "),"</p>"))):$(".results-message").hide()},matchSearchQueriesToUI:function(){n.searchQueries.searchParams=$("#searchfield").val()||n.searchQueries.searchParams,n.searchQueries.location=$(".country-dropdown").children(":selected").attr("id");var e=["all"];n.typeCheckedValues=$('input[type="checkbox"]:checked').each((function(t,n){e.push(n.value)})),n.searchQueries.projectTypes=e,n.searchQueries.hardware=$("#hardware").children(":selected").attr("id"),n.searchQueries.software=$("#software").children(":selected").attr("id")},handleSearchBehavior:function(){window.location.search?n.filterByUrlParams():(n.matchSearchQueriesToUI(),n.filterList(n.searchQueries))},addQueryToSearch:function(e){$("#searchfield").val(e)},setSearchQueryDefaults:function(){n.searchQueries={software:"all",hardware:"all",projectTypes:["all"],location:"all",searchParams:""}},blurInputOnHover:function(){$(".projects").on("mouseenter",(function(){$("#searchfield").blur()}))},setSessionStorage:function(){""===window.location.search?sessionStorage.setItem("searchQueries",JSON.stringify(n.searchQueries)):sessionStorage.clear()},filterByLocalStorage:function(){var e=window.location.search.split("=")[0];if(sessionStorage.searchQueries&&!e||"?search"===e){var t=JSON.parse(sessionStorage.searchQueries);n.searchQueries=t;var i=function(e){var t=n.searchQueries[e];"all"!==t&&document.querySelectorAll(".dropdown").forEach((function(n){n.id===e&&n.childNodes.forEach((function(e){e.id===t&&(e.selected=!0)}))})),"projectTypes"===e&&t.forEach((function(e){document.querySelectorAll(".form-type").forEach((function(t){t.getAttribute("data-value")===e&&(t.checked=!0)}))})),"searchParams"===e&&(document.querySelector("#searchfield").value=t)};for(var a in n.searchQueries)i(a);n.displayResultQueries()}},init:function(){this.createList(),this.filterByLocalStorage(),this.filterBySearch(),this.filterByDropdowns(),this.filterByCheckboxes(),this.clearAllFilters(),this.displayResults(),this.handleSearchBehavior(),this.blurInputOnHover()}};e.exports=n},function(e,t){var n={citationContainer:$(".citations").find("a"),addIcon:function(){n.citationContainer.append('<i class="material-icons launch">launch</i>')},init:function(){this.addIcon()}};e.exports=n},function(e,t){var n={listUrl:"/list.html",searchString:void 0,searchListUrl:void 0,submitSearch:function(){n.searchString=$("#searchfield"),$(".js-search-submit").on("click",(function(){var e=n.searchString.val(),t=document.location.origin;n.searchListUrl="".concat(t).concat(n.listUrl,"?q=").concat(e),"about:blank"!==window.location.href&&(window.location.href=n.searchListUrl)}))},init:function(){this.submitSearch()}};e.exports=n},function(e,t){var n={listUrl:"/list.html",searchListUrl:void 0,filterByTag:function(){$(".project__type").on("click",(function(e){var t=e.target.getAttribute("type-tag"),i=document.location.origin;n.searchListUrl="".concat(i).concat(n.listUrl,"?type=").concat(t),"about:blank"!==window.location.href&&(window.location.href=n.searchListUrl)}))},filterByCategory:function(){$(".container-overlay").on("click",(function(e){var t=e.target.parentElement.getAttribute("type"),i=document.location.origin;n.searchListUrl="".concat(i).concat(n.listUrl,"?type=").concat(t),"about:blank"!==window.location.href&&(window.location.href=n.searchListUrl)}))},init:function(){this.filterByTag(),this.filterByCategory()}};e.exports=n},function(e,t){var n={schematicDescription:void 0,targetCircles:function(){n.schematicDescription=$(".schematic-description"),$(".circle").on("click",(function(e){var t=$(e.currentTarget).attr("circle-attr");$(e.currentTarget).hasClass("active")?$(e.currentTarget).removeClass("active"):($(e.currentTarget).addClass("active"),$(e.currentTarget).siblings().removeClass("active")),n.showData(t)}))},showData:function(e){n.schematicDescription=[].slice.call(n.schematicDescription),n.schematicDescription.forEach((function(t){t.getAttribute("position-attr")===e?t.classList.toggle("display"):t.classList.remove("display")}))},activateFirstCircle:function(){var e=$(".circle").first();e.first().addClass("active"),n.showData(e.attr("circle-attr"))},init:function(){this.targetCircles(),this.activateFirstCircle()}};e.exports=n},function(e,t,n){var i={cookies:n(19),slideUp:function(){setTimeout((function(){$(".cookies-popup").animate({bottom:"0"},400).css("display","block")}),800)},slideDown:function(){$(".popup-button").on("click",(function(e){var t=e.currentTarget.getAttribute("cookie-value");"agree"===t?i.cookies.set("user_cookie_agreement","agree",{expires:365}):"disagree"===t&&i.cookies.set("user_cookie_agreement","disagree",{expires:365}),$(".cookies-popup").animate({bottom:"-220px"},"slow")}))},hidePopupBasedOnCookie:function(){i.cookies.get("user_cookie_agreement")&&$(".cookies-popup").addClass("hidden")},init:function(){this.slideUp(),this.slideDown(),this.hidePopupBasedOnCookie()}};e.exports=i},function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(1),r=n.n(o),s=n(2),c=n.n(s),l=n(3),u=n.n(l),d=n(4),h=n.n(d),p=n(5),f=n.n(p),v=n(6),m=n.n(v),g=n(7),y=n.n(g),$=n(8),w=n.n($),k=n(9),C=n.n(k),b=n(10),j=n.n(b),S=n(11),x=n.n(S),T=n(12),_=n.n(T),Q=n(13),L=n.n(Q),O=n(14),U=n.n(O),D=n(15),I=n.n(D),B=n(16),P=n.n(B),M=n(17),R=n.n(M);a.a.init(),c.a.init(),u.a.init(),r.a.init(),h.a.init(),f.a.init(),m.a.init(),y.a.init(),w.a.markdownLinksNewPage(),C.a.init(),j.a.init(),x.a.init(),L.a.init(),"/list.html"===window.location.pathname&&_.a.init(),U.a.init(),I.a.init(),P.a.init(),R.a.init()},function(e,t){t.defaults={},t.set=function(e,n,i){var a=i||{},o=t.defaults,r=a.expires||o.expires,s=a.domain||o.domain,c=void 0!==a.path?a.path:void 0!==o.path?o.path:"/",l=void 0!==a.secure?a.secure:o.secure,u=void 0!==a.httponly?a.httponly:o.httponly,d=void 0!==a.samesite?a.samesite:o.samesite,h=r?new Date("number"==typeof r?(new Date).getTime()+864e5*r:r):0;document.cookie=e.replace(/[^+#$&^`|]/g,encodeURIComponent).replace("(","%28").replace(")","%29")+"="+n.replace(/[^+#$&/:<-\[\]-}]/g,encodeURIComponent)+(h&&h.getTime()>=0?";expires="+h.toUTCString():"")+(s?";domain="+s:"")+(c?";path="+c:"")+(l?";secure":"")+(u?";httponly":"")+(d?";samesite="+d:"")},t.get=function(e){for(var t=document.cookie.split(";");t.length;){var n=t.pop(),i=n.indexOf("=");if(i=i<0?n.length:i,decodeURIComponent(n.slice(0,i).replace(/^\s+/,""))===e)return decodeURIComponent(n.slice(i+1))}return null},t.erase=function(e,n){t.set(e,"",{expires:-1,domain:n&&n.domain,path:n&&n.path,secure:0,httponly:0})},t.all=function(){for(var e={},t=document.cookie.split(";");t.length;){var n=t.pop(),i=n.indexOf("=");i=i<0?n.length:i,e[decodeURIComponent(n.slice(0,i).replace(/^\s+/,""))]=decodeURIComponent(n.slice(i+1))}return e}}]);
//# sourceMappingURL=bundle.js.map