import{d as c,l}from"./Utils-Cb4N9P8A.js";import{Light as m}from"./index-6i7gg5w4.js";import{S as v,l as a}from"./index-jZ4SSCT0.js";import{E as g}from"./ExternalInteractorBase-CIi3zRdK.js";import"./OptionsColor-BOq8M585.js";class b extends g{constructor(t){super(t)}clear(){}init(){}interact(){const t=this.container,e=t.actualOptions,i=t.interactivity;if(!e.interactivity.events.onHover.enable||i.status!=="pointermove")return;const o=i.mouse.position;o&&t.canvas.draw(n=>{c(t,n,o)})}isEnabled(t){const e=this.container,i=e.interactivity.mouse,o=(t==null?void 0:t.interactivity)??e.actualOptions.interactivity,n=o.events;if(!(n.onHover.enable&&i.position))return!1;const r=v(l,n.onHover.mode);if(r&&o.modes.light){const s=o.modes.light.area.gradient;e.canvas.mouseLight={start:a(s.start),stop:a(s.stop)}}return r}loadModeOptions(t,...e){t.light||(t.light=new m);for(const i of e)t.light.load(i==null?void 0:i.light)}reset(){}}export{b as ExternalLighter};
