const e={logo:document.querySelector(".navigation__logo"),searchBox:document.querySelector(".search__box"),homeButton:document.querySelector(".navigation__home"),libraryButton:document.querySelector(".navigation__library"),watchedButton:document.querySelector(".button__watched"),queueButton:document.querySelector(".button__queue"),gallery:document.querySelector(".gallery"),galleryCards:document.querySelectorAll(".gallery__card"),carousel:document.querySelector(".carousel__container"),modalBackground:document.querySelector(".overlay"),modalClose:document.querySelector(".modal__close"),modalWatch:document.querySelector(".modal__watch"),modalQueue:document.querySelector(".modal__queue"),pageCurrent:15,pageMax:20};function t(e,t){if(e<=t&&e>=1){const n=document.querySelector(".carousel__content"),c=[],l=[e-2,e-1,e,e+1,e+2];var r=null,a=null,o=n.getBoundingClientRect().width;const s=t=>{let r=document.createElement("div");r.textContent=t,r.classList.add("carousel__number"),t==e&&r.classList.add("selected"),n.appendChild(r)};n.innerHTML="";for(let e=1;e<=t;e+=1)c.push(e);if(o>=290)switch(!0){case t<=10:c.forEach(s);break;case e<7:a=c.indexOf(9),c.splice(a,c.length-1),c.forEach(s),c.length=t-3,n.insertAdjacentHTML("beforeend",`<div class="carousel__number more__right">...</div>\n      <div class="carousel__number corner">${t}</div>`);break;case t-e<5:r=c.indexOf(e-2),c.splice(0,r),n.insertAdjacentHTML("beforeend",'<div class="carousel__number corner">1</div>\n        <div class="carousel__number more__left">...</div>'),c.forEach(s);break;default:r=c.indexOf(e-2),c.splice(0,r),a=c.indexOf(e+3),c.splice(a,c.length-1),n.insertAdjacentHTML("beforeend",'<div class="carousel__number corner">1</div>\n        <div class="carousel__number more__left">...</div>'),c.forEach(s),n.insertAdjacentHTML("beforeend",`<div class="carousel__number more__right">...</div>\n      <div class="carousel__number corner">${t}</div>`)}else switch(!0){case t<6:c.forEach(s);break;case e<3:r=3-e,l.splice(0,r);for(let e=1;e<=r;e+=1)l.push(l[l.length-1]+1);l.forEach(s);break;case t-e<2:a=2-1*(t-e);for(let t=1;t<=a;t+=1)l.unshift(e-2-t);l.length=l.length-a,l.forEach(s);break;default:l.forEach(s)}}else console.error(`Requested page (${e}) is out of range (total pages: ${t})`)}!function(){const t=t=>{console.dir(t.currentTarget),console.dir(t.currentTarget.querySelector("img")),document.body.classList.toggle("modal-on"),function(){const t=o=>{o.target==o.currentTarget&&(document.body.classList.toggle("modal-on"),e.modalClose.removeEventListener("click",r),window.removeEventListener("keydown",a),e.modalBackground.removeEventListener("click",t))},r=o=>{document.body.classList.toggle("modal-on"),e.modalBackground.removeEventListener("click",t),window.removeEventListener("keydown",a),e.modalClose.removeEventListener("click",r)},a=o=>{"Escape"===o.key&&document.body.classList.contains("modal-on")&&(document.body.classList.toggle("modal-on"),e.modalBackground.removeEventListener("click",t),e.modalClose.removeEventListener("click",r),window.removeEventListener("keydown",a))};e.modalBackground.addEventListener("click",t),e.modalClose.addEventListener("click",r),window.addEventListener("keydown",a)}()};(e.galleryCards=document.querySelectorAll(".gallery__card")).forEach((e=>{e.addEventListener("click",t)}))}(),e.logo.addEventListener("click",(e=>{e.preventDefault(),document.body.className="home watched",console.log("Populating Home page")})),e.homeButton.addEventListener("click",(e=>{e.preventDefault(),document.body.classList.replace("library","home"),console.log("Populating Home page")})),e.libraryButton.addEventListener("click",(e=>{e.preventDefault(),document.body.classList.replace("home","library"),console.log("Populating Library Watched page")})),e.watchedButton.addEventListener("click",(()=>{document.body.classList.replace("queue","watched"),console.log("Populating Library Watched page")})),e.queueButton.addEventListener("click",(()=>{document.body.classList.replace("watched","queue"),console.log("Populating Library Queue page")})),e.modalWatch.addEventListener("click",(()=>{console.log("Adding to watch list")})),e.modalQueue.addEventListener("click",(()=>{console.log("Adding to queue")})),function(){e.galleryCards=document.querySelectorAll(".gallery__card");var t=document.querySelector(".gallery__card"),r=[...document.defaultView.getComputedStyle(t.parentElement).gap];r=parseInt(`${r[0]}${r[1]}`);var a=`${Math.ceil(t.getBoundingClientRect().height)+r}px`;const o=new IntersectionObserver((e=>{e.forEach((({target:e,isIntersecting:t})=>{}))}),{root:null,rootMargin:a});e.galleryCards.forEach((e=>{o.unobserve(e),o.observe(e)}))}(),e.carousel.addEventListener("click",(r=>{switch(!0){case r.target.classList.contains("carousel__left")||r.target.classList.contains("arrow__left"):e.pageCurrent>1&&t(e.pageCurrent-=1,e.pageMax);break;case r.target.classList.contains("carousel__right")||r.target.classList.contains("arrow__right"):e.pageCurrent<e.pageMax&&t(e.pageCurrent+=1,e.pageMax);break;case r.target.classList.contains("more__right"):t(e.pageCurrent<=e.pageMax-5?e.pageCurrent+=5:e.pageCurrent=e.pageMax,e.pageMax);break;case r.target.classList.contains("more__left"):t(e.pageCurrent>5?e.pageCurrent-=5:e.pageCurrent=1,e.pageMax);break;case r.target.classList.contains("carousel__number"):let a=parseInt(r.target.textContent);t(e.pageCurrent=a,e.pageMax)}})),new ResizeObserver((r=>{r.forEach((({target:r})=>{t(e.pageCurrent,e.pageMax)}))})).observe(e.carousel),t(e.pageCurrent,e.pageMax);
//# sourceMappingURL=index.7b94b387.js.map
