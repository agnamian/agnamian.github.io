const __vite__fileDeps=["assets/PolygonDrawer-C5bM90f_.js","assets/PolygonDrawerBase-BvT_uvet.js","assets/index-jZ4SSCT0.js","assets/index-CMi-rCOV.css","assets/TriangleDrawer--Phj1gHF.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as n}from"./index-jZ4SSCT0.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-C5bM90f_.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer--Phj1gHF.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
