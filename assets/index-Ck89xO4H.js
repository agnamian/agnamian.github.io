const __vite__fileDeps=["assets/LifeUpdater-eZhupd2J.js","assets/ValueWithRandom-qDp8yU34.js","assets/AnimationOptions-D5sCQoph.js","assets/index-DM3d4TTC.js","assets/index-DIrhqTWM.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-DM3d4TTC.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-eZhupd2J.js"),__vite__mapDeps([0,1,2,3,4]));return new r(e)},a)}export{d as loadLifeUpdater};
