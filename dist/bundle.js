(()=>{"use strict";var e,t,n,o,a,c,r,l,u,i,s,m,d,v,f,h,p,y,E,g,q,S,b,L;document.querySelectorAll(".command__photo"),setInterval((function(e){var t,n,o,a,c=document.querySelector("#timer-hours"),r=document.querySelector("#timer-minutes"),l=document.querySelector("#timer-seconds");t=(new Date(e).getTime()-(new Date).getTime())/1e3,n=Math.floor(t%60),o=Math.floor(t/60%60),a={hours:Math.floor(t/60/60),minutes:o,seconds:n,timeRemaining:t},c.textContent=String(a.hours).padStart(2,"0"),r.textContent=String(a.minutes).padStart(2,"0"),l.textContent=String(a.seconds).padStart(2,"0"),a.timeRemaining<0&&(c.textContent="00",r.textContent="00",l.textContent="00",clearInterval(interval))}),1e3,"31 december 2020"),q=document.querySelector(".menu"),S=document.querySelector("menu"),b=0,L=function(){var e;S.style.transform&&"translate(-100%)"!==S.style.transform?(b=0,S.style.transform="translate(-100%)",S.style.left=""):(S.style.transform="translate(0)",e=requestAnimationFrame((function t(){e=requestAnimationFrame(t),(b+=20)<1e3&&document.documentElement.clientWidth>1900||b<700&&document.documentElement.clientWidth<1900&&document.documentElement.clientWidth>1200||b<550&&document.documentElement.clientWidth<1920&&document.documentElement.clientWidth>1e3||b<850&&document.documentElement.clientWidth<1920&&document.documentElement.clientWidth>=1600?S.style.left=b+"px":document.documentElement.clientWidth>768&&cancelAnimationFrame(e)})))},q.addEventListener("click",L),S.addEventListener("click",(function(e){var t=e.target;(t.classList.contains("close-btn")||t.closest("ul"))&&L()})),d=0,v=1,f=document.querySelector(".popup"),h=document.querySelectorAll(".popup-btn"),p=document.getElementById("form3-name"),y=document.getElementById("form3-phone"),E=document.getElementById("form3-email"),g=document.querySelectorAll(".form-btn"),h.forEach((function(e){e.addEventListener("click",(function(){var e;document.documentElement.clientWidth>=768?(d=0,f.style.display="block",e=requestAnimationFrame((function t(){e=requestAnimationFrame(t),(d+=.01)<1.01?f.style.opacity=d:d>=1&&cancelAnimationFrame(e)}))):(f.style.display="block",f.style.opacity=1)})),f.addEventListener("click",(function(e){var t=e.target;if(g.forEach((function(e){e.removeAttribute("disabled",!0),e.textContent="Оставить заявку!"})),t.classList.contains("popup-close"))if(document.documentElement.clientWidth>=768){var n;v=1,n=requestAnimationFrame((function e(){n=requestAnimationFrame(e),(v-=.01)>.01?f.style.opacity=v:(f.style.display="none",p.value="",y.value="",E.value="",cancelAnimationFrame(n))}))}else p.value="",y.value="",E.value="",f.style.display="none";else if(g.forEach((function(e){e.removeAttribute("disabled",!0),e.textContent="Оставить заявку!"})),!(t=t.closest(".popup-content")))if(document.documentElement.clientWidth>=768){var o;v=1,o=requestAnimationFrame((function e(){o=requestAnimationFrame(e),(v-=.01)>.01?f.style.opacity=v:(f.style.display="none",p.value="",y.value="",E.value="",cancelAnimationFrame(o))}))}else p.value="",y.value="",E.value="",f.style.display="none"}))})),i=document.querySelector(".service-header"),s=i.querySelectorAll(".service-header-tab"),(m=document.querySelectorAll(".service-tab")).forEach((function(e,t){0!==t&&e.classList.add("d-none")})),i.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".service-header-tab"))&&s.forEach((function(e,n){e===t&&function(e){for(var t=0;t<m.length;t++)e===t?(s[t].classList.add("active"),m[t].classList.remove("d-none")):(s[t].classList.remove("active"),m[t].classList.add("d-none"))}(n)}))})),function(){var e,t=document.querySelectorAll(".portfolio-item"),n=document.querySelector(".portfolio-content"),o=document.querySelector(".portfolio-dots"),a=0;!function(){for(var e=0;e<t.length;e++)if(0===e){var n=document.createElement("li");n.classList.add("dot"),n.classList.add("dot-active"),o.append(n)}else{var a=document.createElement("li");a.classList.add("dot"),o.append(a)}}();var c=document.querySelectorAll(".dot"),r=function(e,t,n){e[t].classList.remove(n)},l=function(e,t,n){e[t].classList.add(n)},u=function(){r(t,a,"portfolio-item-active"),r(c,a,"dot-active"),++a>=t.length&&(a=0),l(t,a,"portfolio-item-active"),l(c,a,"dot-active")},i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;e=setInterval(u,t)};n.addEventListener("click",(function(e){e.preventDefault();var n=e.target;n.matches(".portfolio-btn, .dot")&&(r(t,a,"portfolio-item-active"),r(c,a,"dot-active"),n.matches("#arrow-right")?a++:n.matches("#arrow-left")?a--:n.matches(".dot")&&c.forEach((function(e,t){e===n&&(a=t)})),a>=t.length?a=0:a<0&&(a=t.length-1),l(t,a,"portfolio-item-active"),l(c,a,"dot-active"))})),n.addEventListener("mouseover",(function(t){(t.target.matches(".portfolio-btn")||t.target.matches(".dot"))&&clearInterval(e)})),n.addEventListener("mouseout",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&i()})),i(1500)}(),(u=document.querySelectorAll(".command__photo")).forEach((function(e){e.addEventListener("mouseover",(function(){e.src=e.dataset.img}))})),u.forEach((function(e,t){e.addEventListener("mouseout",(function(){e.src="images/command/command-".concat(t+1,".jpg")}))})),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=document.querySelector(".calc-square"),n=document.querySelector(".calc-count"),o=document.querySelector(".calc-day"),a=document.querySelector(".calc-block"),c=document.querySelector(".calc-type"),r=document.getElementById("total");t.addEventListener("input",(function(e){var n=e.target;""!==t.value&&(n.matches(".calc-square")&&t.value[t.value.length-1].match(/^[0-9]/)?t.value=n.value:t.value=t.value.substr(0,t.value.length-1))})),n.addEventListener("input",(function(e){var t=e.target;""!==n.value&&(t.matches(".calc-count")&&n.value[n.value.length-1].match(/^[0-9]/)?n.value=t.value:n.value=n.value.substr(0,n.value.length-1))})),o.addEventListener("input",(function(e){var t=e.target;""!==o.value&&(t.matches(".calc-day")&&o.value[o.value.length-1].match(/^[0-9]/)?o.value=t.value:o.value=o.value.substr(0,o.value.length-1))}));var l=function(){var a=0,l=1,u=1,i=+c.options[c.selectedIndex].value,s=+t.value;n.value>1&&(l+=(n.value-1)/10),o.value&&o.value<5?u*=2:o.value&&o.value<10&&(u*=1.5),i&&s&&(a=e*i*s*l*u),r.textContent=a};a.addEventListener("change",(function(t){var n=t.target;(n.matches(".calc-type")||n.matches(".calc-square")||n.matches(".calc-day")||n.matches(".calc-count"))&&l(e)}))}(100),e="Что-то пошло не так...",t="Загрузка...",n="Спасибо! Мы скоро с вами свяжемся!",o=function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})},a=document.getElementById("form1"),c=document.getElementById("form3"),r=document.getElementById("form2"),(l=document.createElement("div")).style.cssText="font-size: 2rem;",a.addEventListener("submit",(function(c){c.preventDefault(),a.append(l),l.textContent=t;var r=new FormData(a),u={};r.forEach((function(e,t){u[t]=e})),o(u).then((function(e){if(200!==e.status)throw new Error("Status error, something went wrong.");l.textContent=n})).catch((function(t){l.textContent=e,console.log(t)}))})),c.addEventListener("submit",(function(a){a.preventDefault(),l.textContent=t;var r=new FormData(c),u={};r.forEach((function(e,t){u[t]=e})),o(u).then((function(e){if(200!==e.status)throw new Error("Status error, something went wrong.");l.textContent=n,a.target.lastElementChild.textContent=n,a.target.lastElementChild.setAttribute("disabled",!0)})).catch((function(t){l.textContent=e,a.target.lastElementChild.textContent=e,console.error(t)}))})),r.addEventListener("submit",(function(a){var c=document.querySelectorAll("input");a.preventDefault(),l.textContent=t;var u=new FormData(r),i={};u.forEach((function(e,t){i[t]=e})),o(i).then((function(e){if(200!==e.status)throw new Error("Status error, something went wrong.");l.textContent=n,c.forEach((function(e){e.value=""})),alert(n)})).catch((function(t){l.textContent=e,a.target.lastElementChild.textContent=e,console.error(t)}))})),function(){var e,t=document.querySelectorAll(".form-phone"),n=document.querySelectorAll(".form-name"),o=document.querySelector(".top-form"),a=document.querySelector(".mess"),c=document.querySelectorAll(".form-btn");t.forEach((function(e){e.setAttribute("autocomplete","off")})),n.forEach((function(e){e.setAttribute("autocomplete","off")})),o.setAttribute("autocomplete","off"),a.setAttribute("autocomplete","off"),(e=t).forEach((function(e){e.addEventListener("input",(function(){""!==e.value&&(e.value.match(/^(\+?[0-9]*)$/g)?c.forEach((function(e){e.removeAttribute("disabled",!0)})):c.forEach((function(e){e.setAttribute("disabled",!0)})))}))})),e.forEach((function(e){e.addEventListener("change",(function(){""!==e.value&&(e.value.match(/^(\+?[0-9]*)$/g)||(e.value=""))}))})),function(e){e.forEach((function(e){e.addEventListener("input",(function(){e.value=e.value.replace(/[^А-Яа-яЁё]/g,"")}))}))}(n),o.addEventListener("input",(function(){o.value=o.value.replace(/[^А-Яа-яЁё]/g,"")})),a.addEventListener("input",(function(){a.value=a.value.replace(/[^А-Яа-яЁё]/g,"")}))}()})();