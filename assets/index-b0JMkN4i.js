const __vite__fileDeps=["assets/Attractor-8EFkzml_.js","assets/ParticlesInteractorBase-vfDeBun3.js","assets/index-BK2ernDs.js","assets/index-CDfSTK2Q.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as c}from"./index-BK2ernDs.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor-8EFkzml_.js"),__vite__mapDeps([0,1,2,3]));return new o(a)},r)}export{i as loadParticlesAttractInteraction};
