const __vite__fileDeps=["assets/LifeUpdater-DVO0CRiH.js","assets/ValueWithRandom-a0vaxu0v.js","assets/AnimationOptions-BRpm5LHd.js","assets/index-BK2ernDs.js","assets/index-CDfSTK2Q.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-BK2ernDs.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-DVO0CRiH.js"),__vite__mapDeps([0,1,2,3,4]));return new r(e)},a)}export{d as loadLifeUpdater};
