const __vite__fileDeps=["assets/LifeUpdater-Bg8NnvLL.js","assets/ValueWithRandom-C8eA4WbF.js","assets/AnimationOptions-Y1cGtYn_.js","assets/index-MVK_Py6g.js","assets/index-CDfSTK2Q.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-MVK_Py6g.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-Bg8NnvLL.js"),__vite__mapDeps([0,1,2,3,4]));return new r(e)},a)}export{d as loadLifeUpdater};
