const e={logo:document.querySelector(".navigation__logo"),searchBox:document.querySelector(".search__box"),homeButton:document.querySelector(".navigation__home"),libraryButton:document.querySelector(".navigation__library"),watchedButton:document.querySelector(".button__watched"),queueButton:document.querySelector(".button__queue"),gallery:document.querySelector(".gallery"),galleryCards:document.querySelectorAll(".gallery__card"),carousel:document.querySelector(".carousel__container"),modalBackground:document.querySelector(".overlay"),modalClose:document.querySelector(".modal__close"),modalWatch:document.querySelector(".modal__watch"),modalQueue:document.querySelector(".modal__queue"),pageCurrent:15,pageMax:20};function t(e,t){if(e<=t&&e>=1){const n=document.querySelector(".carousel__content"),c=[],l=[e-2,e-1,e,e+1,e+2];var a=null,o=null,r=n.getBoundingClientRect().width;const s=t=>{let a=document.createElement("div");a.textContent=t,a.classList.add("carousel__number"),t==e&&a.classList.add("selected"),n.appendChild(a)};n.innerHTML="";for(let e=1;e<=t;e+=1)c.push(e);if(r>=290)switch(!0){case t<=10:c.forEach(s);break;case e<7:o=c.indexOf(9),c.splice(o,c.length-1),c.forEach(s),c.length=t-3,n.insertAdjacentHTML("beforeend",`<div class="carousel__number more__right">...</div>\n      <div class="carousel__number corner">${t}</div>`);break;case t-e<5:let r=4-(t-e);console.log(r),a=c.indexOf(e-(2+r)),c.splice(0,a),n.insertAdjacentHTML("beforeend",'<div class="carousel__number corner">1</div>\n        <div class="carousel__number more__left">...</div>'),c.forEach(s);break;default:a=c.indexOf(e-2),c.splice(0,a),o=c.indexOf(e+3),c.splice(o,c.length-1),n.insertAdjacentHTML("beforeend",'<div class="carousel__number corner">1</div>\n        <div class="carousel__number more__left">...</div>'),c.forEach(s),n.insertAdjacentHTML("beforeend",`<div class="carousel__number more__right">...</div>\n      <div class="carousel__number corner">${t}</div>`)}else switch(!0){case t<6:c.forEach(s);break;case e<3:a=3-e,l.splice(0,a);for(let e=1;e<=a;e+=1)l.push(l[l.length-1]+1);l.forEach(s);break;case t-e<2:o=2-1*(t-e);for(let t=1;t<=o;t+=1)l.unshift(e-2-t);l.length=l.length-o,l.forEach(s);break;default:l.forEach(s)}}else console.error(`Requested page (${e}) is out of range (total pages: ${t})`)}!function(){const t=t=>{let a=t.currentTarget.querySelector("img").dataset.page;document.body.classList.toggle("modal-on"),console.log("Get your link to data for modal here: "+a),function(){const t=r=>{r.target==r.currentTarget&&(document.body.classList.toggle("modal-on"),e.modalClose.removeEventListener("click",a),window.removeEventListener("keydown",o),e.modalBackground.removeEventListener("click",t))},a=r=>{document.body.classList.toggle("modal-on"),e.modalBackground.removeEventListener("click",t),window.removeEventListener("keydown",o),e.modalClose.removeEventListener("click",a)},o=r=>{"Escape"===r.key&&document.body.classList.contains("modal-on")&&(document.body.classList.toggle("modal-on"),e.modalBackground.removeEventListener("click",t),e.modalClose.removeEventListener("click",a),window.removeEventListener("keydown",o))};e.modalBackground.addEventListener("click",t),e.modalClose.addEventListener("click",a),window.addEventListener("keydown",o)}()};(e.galleryCards=document.querySelectorAll(".gallery__card")).forEach((e=>{e.addEventListener("click",t)}))}(),e.logo.addEventListener("click",(e=>{e.preventDefault(),document.body.className="home watched",console.log("Populating Home page")})),e.homeButton.addEventListener("click",(e=>{e.preventDefault(),document.body.classList.replace("library","home"),console.log("Populating Home page")})),e.libraryButton.addEventListener("click",(e=>{e.preventDefault(),document.body.classList.replace("home","library"),console.log("Populating Library Watched page")})),e.watchedButton.addEventListener("click",(()=>{document.body.classList.replace("queue","watched"),console.log("Populating Library Watched page")})),e.queueButton.addEventListener("click",(()=>{document.body.classList.replace("watched","queue"),console.log("Populating Library Queue page")})),e.modalWatch.addEventListener("click",(()=>{console.log("Adding to watch list")})),e.modalQueue.addEventListener("click",(()=>{console.log("Adding to queue")})),function(){e.galleryCards=document.querySelectorAll(".gallery__card");var t=document.querySelector(".gallery__card"),a=[...document.defaultView.getComputedStyle(t.parentElement).gap];a=parseInt(`${a[0]}${a[1]}`);var o=`${Math.ceil(t.getBoundingClientRect().height)+a}px`;const r=new IntersectionObserver((e=>{e.forEach((({target:e,isIntersecting:t})=>{}))}),{root:null,rootMargin:o});e.galleryCards.forEach((e=>{r.unobserve(e),r.observe(e)}))}(),e.carousel.addEventListener("click",(a=>{switch(!0){case a.target.classList.contains("carousel__left")||a.target.classList.contains("arrow__left"):e.pageCurrent>1&&t(e.pageCurrent-=1,e.pageMax);break;case a.target.classList.contains("carousel__right")||a.target.classList.contains("arrow__right"):e.pageCurrent<e.pageMax&&t(e.pageCurrent+=1,e.pageMax);break;case a.target.classList.contains("more__right"):t(e.pageCurrent<=e.pageMax-5?e.pageCurrent+=5:e.pageCurrent=e.pageMax,e.pageMax);break;case a.target.classList.contains("more__left"):t(e.pageCurrent>5?e.pageCurrent-=5:e.pageCurrent=1,e.pageMax);break;case a.target.classList.contains("carousel__number"):let o=parseInt(a.target.textContent);t(e.pageCurrent=o,e.pageMax)}})),new ResizeObserver((a=>{a.forEach((({target:a})=>{t(e.pageCurrent,e.pageMax)}))})).observe(e.carousel),t(e.pageCurrent,e.pageMax);
//# sourceMappingURL=index.eb9b1514.js.map