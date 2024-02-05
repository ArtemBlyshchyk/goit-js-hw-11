import{i as c,S as d}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const a={searchForm:document.querySelector(".search-form"),input:document.querySelector('[type="text"]')},l=document.querySelector(".gallery"),u=document.querySelector(".loader");a.searchForm.addEventListener("submit",p);function p(i){i.preventDefault();const o=a.input.value.trim();if(!o){c.error({message:"Fill in the input field!",position:"topRight"});return}u.style.display="block",h(o),a.searchForm.reset()}function h(i){const s=`https://pixabay.com/api/?${new URLSearchParams({key:"42191077-576543231991193ea17287b56",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;fetch(s).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{r.hits.length===0?(c.error({message:"Sorry, there are no images matching your search query. Please try again!",messageSize:10.5,position:"topRight"}),l.innerHTML=""):g(r.hits)}).catch(r=>{console.log(r)}).finally(()=>{u.style.display="none"})}function g(i){l.innerHTML="";const o=i.map(({webformatURL:r,largeImageURL:e,tags:t,likes:n,views:m,comments:f,downloads:y})=>`<li class="gallery-item">
  <a class="gallery-link" href="${e}">
    <img
      class="gallery-image"
      src="${r}"
      alt="${t}"
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
