const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./hud-Z71gKAN4.js","./lens-0p88eEZ7.js","./slabs-CobLFfgA.js","./silicon-D4o1AtQQ.js","./intro-D08R5iGq.js","./human-Dq5f2qax.js","./sound-BmwcmsiQ.js","./layers-ui--S6QxDzW.js","./perf-Dm7ymf-R.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=a(n);fetch(n.href,o)}})();const L="modulepreload",S=function(e,t){return new URL(e,t).href},w={},u=function(t,a,i){let n=Promise.resolve();if(a&&a.length>0){let y=function(d){return Promise.all(d.map(h=>Promise.resolve(h).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};const s=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),p=l?.nonce||l?.getAttribute("nonce");n=y(a.map(d=>{if(d=S(d,i),d in w)return;w[d]=!0;const h=d.endsWith(".css"),m=h?'[rel="stylesheet"]':"";if(i)for(let _=s.length-1;_>=0;_--){const g=s[_];if(g.href===d&&(!h||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${m}`))return;const c=document.createElement("link");if(c.rel=h?"stylesheet":L,h||(c.as="script"),c.crossOrigin="",c.href=d,p&&c.setAttribute("nonce",p),document.head.appendChild(c),h)return new Promise((_,g)=>{c.addEventListener("load",_),c.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(s){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s}return n.then(s=>{for(const l of s||[])l.status==="rejected"&&o(l.reason);return t().catch(o)})},f={site:{lang:"en",title:"Nizampuram Srivardhan (srix) · UNDERNEATH",description:"Portfolio of Nizampuram Srivardhan, a first-year B.Tech CSE student who builds apps and tools."},person:{name:"Nizampuram Srivardhan",handle:"srix",school:"Anurag University",classOf:2030,location:"YOUR_CITY_HERE"},nav:[{label:"Work",href:"#work"},{label:"About",href:"#about"},{label:"Contact",href:"#contact"}],hero:{eyebrow:"Portfolio · Class of 2030",headline:"I build apps and tools.",lead:"I'm Srivardhan (srix), a first-year B.Tech CSE student at Anurag University. I am learning C and cybersecurity, and I like to see how things work underneath.",actions:[{label:"See my work",href:"#work"},{label:"GitHub",href:"https://github.com/nizampuram-srix"}],hint:"Hold anywhere to look deeper"},about:{heading:"About",paragraphs:["I'm Nizampuram Srivardhan, a first-year B.Tech CSE student at Anurag University, class of 2030. Online I go by srix.","I build apps and tools, and I learn by making things that work.","Right now I am learning C and cybersecurity. I want to understand what a computer really does under the page. That is also why this site is built the way it is."]},work:{heading:"Work",intro:"Things I have built, and one space for the next one.",projects:[{id:"work-anchor",title:"Anchor",kind:"Mobile app",year:"YOUR_YEAR_HERE",tagline:"An app with two roles: Circle and Patient.",description:"Anchor has games, a Today timeline and a Family tab.",study:["The app is built with Flutter, and Firebase is the backend."],tags:["Flutter","Firebase"],links:[{label:"Code",href:"YOUR_ANCHOR_REPO_URL_HERE"}],placeholder:!1},{id:"work-usbcam",title:"USBCam Clone",kind:"Android app + Windows client",year:"YOUR_YEAR_HERE",tagline:"Turns an Android phone into a USB webcam for Windows.",description:"A Kotlin app runs on the phone. A Python client runs on the Windows PC.",study:["The phone and the PC each run their own piece. Together they let Windows use the phone as a USB webcam."],tags:["Kotlin","Python","Android","Windows"],links:[{label:"Code",href:"YOUR_USBCAM_REPO_URL_HERE"}],placeholder:!1},{id:"work-underneath",title:"UNDERNEATH",kind:"Website · this one",year:"2026",tagline:"This portfolio.",description:"The page is the top layer. The idea is to show what is underneath it: the HTML, the code, the bytes and the bits.",study:["It is built with plain JavaScript and Vite. No frameworks and no paid services.","The Surface comes first. The glass lens and the deeper layers are added step by step."],tags:["JavaScript","Vite","CSS"],links:[{label:"Code",href:"YOUR_UNDERNEATH_REPO_URL_HERE"}],placeholder:!1},{id:"work-placeholder",title:"PROJECT_NAME_HERE",kind:"Coming soon",year:"YOUR_YEAR_HERE",tagline:"YOUR_ONE_LINE_HERE",description:"A new project will go here.",study:[],tags:[],links:[],placeholder:!0}]},stack:{heading:"Stack",groups:[{name:"Building with",items:["Flutter","Firebase","Kotlin","Python","JavaScript","HTML + CSS"]},{name:"Learning",items:["C","Cybersecurity"]},{name:"Tools",items:["Git","GitHub","Vite","PowerShell"]}]},now:{heading:"Now",items:["Learning C.","Learning cybersecurity.","Building this portfolio, UNDERNEATH, one step at a time.","Working on Anchor."]},contact:{heading:"Contact",text:"Email is the best place to start. I am based in YOUR_CITY_HERE.",links:[{label:"Email",href:"mailto:YOUR_EMAIL_HERE",text:"YOUR_EMAIL_HERE"},{label:"GitHub",href:"https://github.com/nizampuram-srix",text:"github.com/nizampuram-srix"},{label:"LinkedIn",href:"YOUR_LINKEDIN_URL_HERE",text:"YOUR_LINKEDIN_URL_HERE"}]},human:{label:"LAYER 5 · HUMAN",lines:["Underneath all of it, there is a person.","That is me. Srivardhan.","And on the other side of the screen, there is you."],panelTitle:"What this page can already see about you",privacy:"Read on your device. Sent nowhere.",showCode:"Show the code",hideCode:"Hide the code",back:"Back to the surface"},sound:{label:"Depth hum",on:"Sound is on. Press to turn it off.",off:"Sound is off. Press to turn it on."}},r=(e="")=>String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;"),v=(e="")=>String(e).includes("YOUR_"),R=e=>String(e).padStart(2,"0"),b=(e,t)=>`<p class="label" aria-hidden="true">§ ${R(e)} — ${r(t)}</p>`;function k(e,t=""){const a=t?` class="${t}"`:"";return v(e.href)?`<span class="link-todo">${r(e.label)} (coming soon)</span>`:`<a${a} href="${r(e.href)}">${r(e.label)}</a>`}function A(e,t){return`<ul class="${t}">${e.map(a=>`<li>${r(a)}</li>`).join("")}</ul>`}function I(e){const t=e.nav.map(a=>`<li><a href="${r(a.href)}">${r(a.label)}</a></li>`).join("");return`
    <header class="site-header block" data-block="header">
      <a class="brand" href="#hero">${r(e.person.name)}</a>
      <nav aria-label="Main">
        <ul class="nav">${t}</ul>
      </nav>
    </header>`}function T(e){const t=e.hero.actions.map(o=>`<li>${k(o,"button")}</li>`).join(""),a=e.person.name.split(" "),i=a.pop(),n=a.join(" ");return`
    <section id="hero" class="block hero" data-block="hero" aria-labelledby="hero-title">
      <p class="eyebrow">${r(e.hero.eyebrow)}</p>
      <h1 id="hero-title">${r(n)} <span class="nobreak">${r(i)}<span class="dot" aria-hidden="true"></span></span></h1>
      <div class="hero__bottom">
        <div class="hero__body">
          <p class="hero__headline">${r(e.hero.headline)}</p>
          <p class="lead">${r(e.hero.lead)}</p>
          <ul class="actions">${t}</ul>
        </div>
        <div class="hero__hint" data-hint="${r(e.hero.hint)}" aria-hidden="true"></div>
      </div>
    </section>`}function P(e){const t=e.about.paragraphs.map((a,i)=>`<p${i===0?' class="about__lead"':""}>${r(a)}</p>`).join("");return`
    <section id="about" class="block about" data-block="about" aria-labelledby="about-title">
      ${b(1,e.about.heading)}
      <h2 id="about-title">${r(e.about.heading)}</h2>
      ${t}
    </section>`}function O(e,t){const a=v(e.year),i=a?"—":e.year,n=e.placeholder?" project--empty":"",o=e.tags.length?`<p class="project__stack">${r(e.tags.join(" · "))}</p>`:"",s=e.links.length?`<ul class="links">${e.links.map(p=>`<li>${k(p)}</li>`).join("")}</ul>`:"",l=e.study.length?`
        <details class="project__study">
          <summary>Read the short case study</summary>
          <div class="project__body">
            <p class="project__kind">${r(e.kind)}</p>
            <p>${r(e.description)}</p>
            ${e.study.map(p=>`<p>${r(p)}</p>`).join("")}
            ${s}
          </div>
        </details>`:"";return`
      <article class="block project${n}" data-block="${r(e.id)}" aria-labelledby="${r(e.id)}-title">
        <div class="project__row">
          <span class="project__num" aria-hidden="true">${R(t+1)}</span>
          <div class="project__main">
            <h3 id="${r(e.id)}-title" class="project__title"><span class="project__title-text">${r(e.title)}</span></h3>
            <p class="project__tagline">${r(e.tagline)}</p>
          </div>
          <div class="project__meta">
            <p class="project__year"${a?' aria-hidden="true"':""}>${r(i)}</p>
            ${o}
          </div>${l}
        </div>
      </article>`}function C(e){return`
    <section id="work" class="work" aria-labelledby="work-title">
      <div class="block work__head" data-block="work-head">
        ${b(2,e.work.heading)}
        <h2 id="work-title">${r(e.work.heading)}</h2>
        <p>${r(e.work.intro)}</p>
      </div>
      ${e.work.projects.map(O).join("")}
    </section>`}function U(e){const t=e.stack.groups.map(a=>`
        <div class="stack-group">
          <h3>${r(a.name)}</h3>
          ${A(a.items,"tags")}
        </div>`).join("");return`
    <section id="stack" class="block stack" data-block="stack" aria-labelledby="stack-title">
      ${b(3,e.stack.heading)}
      <h2 id="stack-title">${r(e.stack.heading)}</h2>
      <div class="stack__groups">${t}</div>
    </section>`}function H(e){return`
    <section id="now" class="block now" data-block="now" aria-labelledby="now-title">
      ${b(4,e.now.heading)}
      <h2 id="now-title">${r(e.now.heading)}</h2>
      ${A(e.now.items,"now-list")}
    </section>`}function j(e){const t=e.contact.links.map(a=>`<li>${k(a)}</li>`).join("");return`
    <section id="contact" class="block contact" data-block="contact" aria-labelledby="contact-title">
      ${b(5,e.contact.heading)}
      <h2 id="contact-title">${r(e.contact.heading)}</h2>
      <p>${r(e.contact.text)}</p>
      <ul class="links">${t}</ul>
    </section>`}function N(e){return`
    <footer class="site-footer block" data-block="footer">
      <p>© ${new Date().getFullYear()} ${r(e.person.name)} (${r(e.person.handle)}). Built with plain JavaScript and Vite.</p>
    </footer>`}function D(e,t){return e.innerHTML=`
    <a class="skip-link" href="#surface">Skip to content</a>
    ${I(t)}
    <main id="surface" tabindex="-1">
      ${T(t)}
      ${P(t)}
      ${C(t)}
      ${U(t)}
      ${H(t)}
      ${j(t)}
    </main>
    ${N(t)}`,e.querySelector("#surface")}document.documentElement.lang=f.site.lang;D(document.getElementById("app"),f);const E=document.getElementById("deep");E&&(E.setAttribute("aria-hidden","true"),E.inert=!0);function Y(e){const t=document.querySelector('#surface [data-block="contact"]'),a=e.contact&&e.contact.links;if(!t||!a||!a.length||t.querySelector(".contact__plain"))return;const i=document.createElement("ul");i.className="contact__plain";for(const n of a){const o=document.createElement("li"),s=document.createElement("span");s.className="contact__plain-label",s.textContent=n.label;const l=document.createElement("a");l.href=n.href,l.textContent=n.text||n.href,o.append(s,l),i.append(o)}t.append(i)}Y(f);function x(){if(window.matchMedia?.("(prefers-reduced-motion: reduce)").matches||!("IntersectionObserver"in window))return;const t=document.querySelectorAll("#surface .block");if(!t.length)return;const a=new IntersectionObserver((i,n)=>{for(const o of i)o.isIntersecting&&(o.target.classList.add("is-in"),n.unobserve(o.target))},{rootMargin:"0px 0px -8% 0px",threshold:0});document.documentElement.classList.add("reveal-on"),t.forEach(i=>a.observe(i))}x();async function V(){const[e,t,a,i,n,o,s,l,p,y,d,h]=await Promise.all([u(()=>import("./lens-0p88eEZ7.js"),[],import.meta.url),u(()=>import("./hud-Z71gKAN4.js"),__vite__mapDeps([0,1]),import.meta.url),u(()=>import("./slabs-CobLFfgA.js"),__vite__mapDeps([2,1]),import.meta.url),u(()=>import("./blueprint-ud2nQVZM.js"),[],import.meta.url),u(()=>import("./source-Bo-psNLT.js"),[],import.meta.url),u(()=>import("./memory-kvxAj3c-.js"),[],import.meta.url),u(()=>import("./silicon-D4o1AtQQ.js"),__vite__mapDeps([3,1]),import.meta.url),u(()=>import("./intro-D08R5iGq.js"),__vite__mapDeps([4,1]),import.meta.url),u(()=>import("./human-Dq5f2qax.js"),__vite__mapDeps([5,1]),import.meta.url),u(()=>import("./sound-BmwcmsiQ.js"),__vite__mapDeps([6,1]),import.meta.url),u(()=>import("./layers-ui--S6QxDzW.js"),__vite__mapDeps([7,1,5]),import.meta.url),u(()=>import("./perf-Dm7ymf-R.js"),__vite__mapDeps([8,1]),import.meta.url)]);if(e.startLens(),t.startHud(),a.registerLayer(1,i.default),a.registerLayer(2,n.default),a.registerLayer(3,o.default),a.registerLayer(4,s.default),a.startSlabs(),p.startHuman(f),y.startSound(f.sound),d.startLayersUi(),h.startPerf(),new URLSearchParams(location.search).has("og")){document.documentElement.classList.add("og-shot"),await document.fonts.ready,window.scrollTo(0,0);const m=document.querySelector('#surface [data-block="hero"] h1'),c=m?m.getBoundingClientRect():null;e.setAuto(!0),e.moveTo(c?c.left+c.width*.35:innerWidth/2,c?c.top+c.height/2:innerHeight/2),e.setDepthTarget(3.4);return}l.startIntro({hint:f.hero.hint})}function B(e){"requestIdleCallback"in window?requestIdleCallback(e,{timeout:1500}):setTimeout(e,200)}function $(){B(()=>{V().catch(e=>console.warn("Deep layers did not load:",e))})}document.readyState==="complete"?$():window.addEventListener("load",$,{once:!0});
