import{p as f,al as l}from"./index-jZ4SSCT0.js";const a=0,d=0;class u{constructor(i){this._nextInfectionStage=t=>{const n=this._container.actualOptions.infection,{infection:e}=t;if(!n||!e)return;const o=n.stages.length;o<=a||e.stage===void 0||(e.time=0,o<=++e.stage&&(n.cure?(delete e.stage,delete e.time):(e.stage=0,e.time=0)))},this._container=i}startInfection(i,t){const n=this._container.actualOptions.infection,{infection:e}=i;if(!n||!e)return;const o=n.stages,c=o.length;t>c||t<a||(e.delay=0,e.delayStage=t)}updateInfection(i,t){const n=this._container.actualOptions.infection,{infection:e}=i;if(!n||!e)return;const o=n.stages,c=o.length;if(e.delay!==void 0&&e.delayStage!==void 0){const s=e.delayStage;if(s>c||s<a)return;e.delay>=n.delay*f?(e.stage=s,e.time=0,delete e.delay,delete e.delayStage):e.delay+=t}else delete e.delay,delete e.delayStage;if(e.stage!==void 0&&e.time!==void 0){const s=o[e.stage];s.duration!==void 0&&s.duration>=d&&e.time>s.duration*f?this._nextInfectionStage(i):e.time+=t}else delete e.stage,delete e.time}updateInfectionStage(i,t){const n=this._container.actualOptions,{infection:e}=i;if(!n.infection||!e)return;const o=n.infection.stages.length;t>o||t<a||e.stage!==void 0&&e.stage>t||(e.stage=t,e.time=0)}}const g=0;class h{constructor(i){this._container=i,this._container.infecter=new u(this._container)}particleFillColor(i){const t=this._container.actualOptions;if(!i.infection||!t.infection)return;const n=i.infection.stage,e=t.infection,o=e.stages;return n!==void 0?o[n].color:void 0}particleStrokeColor(i){return this.particleFillColor(i)}particlesSetup(){var t;const i=this._container.actualOptions;if(i.infection)for(let n=0;n<i.infection.infections;n++){const e=this._container.particles.filter(c=>{const s=c;return s.infection||(s.infection={}),s.infection.stage===void 0}),o=l(e);(t=this._container.infecter)==null||t.startInfection(o,g)}}}export{h as InfectionInstance};
