const __vite__fileDeps=["assets/LifeUpdater-DtAsFUSg.js","assets/ValueWithRandom-1MZ8ZePP.js","assets/AnimationOptions-CXW1s9Ee.js","assets/index-BhDIQDls.js","assets/index-DIrhqTWM.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-BhDIQDls.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-DtAsFUSg.js"),__vite__mapDeps([0,1,2,3,4]));return new r(e)},a)}export{d as loadLifeUpdater};
