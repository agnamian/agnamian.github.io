const __vite__fileDeps=["assets/ColorUpdater-CFE-mu9X.js","assets/index-BK2ernDs.js","assets/index-CDfSTK2Q.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as e}from"./index-BK2ernDs.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-CFE-mu9X.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};
