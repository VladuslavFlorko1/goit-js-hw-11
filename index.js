import{a as f,S as m,i as l}from"./assets/vendor-BSTwZ_tR.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const g="52837655-6c21f27bf556d895abe6a0fd0",h=f.create({baseURL:"https://pixabay.com/api/",timeout:15e3});async function y(n){const{data:r}=await h.get("",{params:{key:g,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40}});return r}const c=document.getElementById("gallery"),s=document.getElementById("loader"),L=new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:200});function b(n){const r=n.map(({webformatURL:a,largeImageURL:i,tags:e,likes:t,views:o,comments:d,downloads:p})=>`
      <li class="gallery-item">
        <a href="${i}">
          <img src="${a}" alt="${$(e)}" loading="lazy" />
        </a>
        <div class="meta">
          <span>❤ ${t}</span>
          <span>👁 ${o}</span>
          <span>💬 ${d}</span>
          <span>⬇ ${p}</span>
        </div>
      </li>`).join("");c.insertAdjacentHTML("beforeend",r),L.refresh()}function A(){c.innerHTML=""}function v(){s.classList.remove("is-hidden"),s.setAttribute("aria-hidden","false")}function E(){s.classList.add("is-hidden"),s.setAttribute("aria-hidden","true")}function $(n=""){return String(n).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}const u=document.getElementById("search-form");u.addEventListener("submit",I);async function I(n){n.preventDefault();const r=u.elements["search-text"].value.trim();if(!r){l.error({message:"Введи пошуковий запит",position:"topRight"});return}v(),A();try{const a=await y(r);if(!a.hits||a.hits.length===0){l.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(a.hits)}catch(a){console.error(a),l.error({message:"Сталася помилка при завантаженні. Спробуй ще раз.",position:"topRight"})}finally{E()}}
//# sourceMappingURL=index.js.map
