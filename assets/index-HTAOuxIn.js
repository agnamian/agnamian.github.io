const __vite__fileDeps=["assets/CurlNoiseGenerator--3YAtoPd.js","assets/SimplexNoise-BslOa3yb.js","assets/index-jZ4SSCT0.js","assets/index-CMi-rCOV.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as e}from"./index-jZ4SSCT0.js";const r="curlNoise";async function n(o,t=!0){const{CurlNoiseGenerator:a}=await e(()=>import("./CurlNoiseGenerator--3YAtoPd.js"),__vite__mapDeps([0,1,2,3]));await o.addPathGenerator(r,new a,t)}export{r as curlNoisePathName,n as loadCurlNoisePath};
