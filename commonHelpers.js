import{i as c,S as d}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const a={searchForm:document.querySelector(".search-form"),input:document.querySelector('[type="text"]')},l=document.querySelector(".gallery"),u=document.querySelector(".loader");a.searchForm.addEventListener("submit",p);function p(i){i.preventDefault();const o=a.input.value.trim();if(!o){c.error({message:"Fill in the input field!",position:"topRight"});return}u.style.display="block",h(o),a.searchForm.reset()}function h(i){const s=`https://pixabay.com/api/?${new URLSearchParams({key:"42191077-576543231991193ea17287b56",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;fetch(s).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{t.hits.length===0?c.error({message:"Sorry, there are no images matching your search query. Please try again!",messageSize:10.5,position:"topRight"}):g(t.hits)}).catch(t=>{console.log(t)}).finally(()=>{u.style.display="none"})}function g(i){l.innerHTML="";const o=i.map(({webformatURL:t,largeImageURL:e,tags:r,likes:n,views:m,comments:f,downloads:y})=>`<li class="gallery-item">
  <a class="gallery-link" href="${e}">
    <img
      class="gallery-image"
      src="${t}"
      alt="${r}"
    />
  </a>
  <div class="image-details">
    <p><b>Likes</b> ${n}</p>
    <p><b>Views</b> ${m}</p>
    <p><b>Comments</b> ${f}</p>
    <p><b>Downloads</b> ${y}</p>
  </div>
</li>`).join("");l.insertAdjacentHTML("beforeend",o),new d(".gallery a",{captionsData:"alt"}).refresh()}
//# sourceMappingURL=commonHelpers.js.map
