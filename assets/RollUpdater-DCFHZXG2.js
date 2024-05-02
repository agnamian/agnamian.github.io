import{H as i,F as r,r as h,W as u,s as d}from"./index-MVK_Py6g.js";import{O as b}from"./OptionsColor-snZwegfR.js";const g=2,f=Math.PI*g,c=360;function k(n){const e=n.options.roll;if(!(e!=null&&e.enable)){n.roll={enable:!1,horizontal:!1,vertical:!1,angle:0,speed:0};return}if(n.roll={enable:e.enable,horizontal:e.mode==="horizontal"||e.mode==="both",vertical:e.mode==="vertical"||e.mode==="both",angle:i()*f,speed:r(e.speed)/c},e.backColor)n.backColor=h(e.backColor);else if(e.darken.enable&&e.enlighten.enable){const l=i()>=u?"darken":"enlighten";n.roll.alter={type:l,value:r(l==="darken"?e.darken.value:e.enlighten.value)}}else e.darken.enable?n.roll.alter={type:"darken",value:r(e.darken.value)}:e.enlighten.enable&&(n.roll.alter={type:"enlighten",value:r(e.enlighten.value)})}function m(n,e){const l=n.options.roll,o=n.roll;if(!o||!(l!=null&&l.enable))return;const s=o.speed*e.factor,a=f;o.angle+=s,o.angle>a&&(o.angle-=a)}class t{constructor(){this.enable=!1,this.value=0}load(e){e&&(e.enable!==void 0&&(this.enable=e.enable),e.value!==void 0&&(this.value=d(e.value)))}}class v{constructor(){this.darken=new t,this.enable=!1,this.enlighten=new t,this.mode="vertical",this.speed=25}load(e){e&&(e.backColor!==void 0&&(this.backColor=b.create(this.backColor,e.backColor)),this.darken.load(e.darken),e.enable!==void 0&&(this.enable=e.enable),this.enlighten.load(e.enlighten),e.mode!==void 0&&(this.mode=e.mode),e.speed!==void 0&&(this.speed=d(e.speed)))}}class R{getTransformValues(e){var a;const l=((a=e.roll)==null?void 0:a.enable)&&e.roll,o=l&&l.horizontal,s=l&&l.vertical;return{a:o?Math.cos(l.angle):void 0,d:s?Math.sin(l.angle):void 0}}init(e){k(e)}isEnabled(e){const l=e.options.roll;return!e.destroyed&&!e.spawning&&!!(l!=null&&l.enable)}loadOptions(e,...l){e.roll||(e.roll=new v);for(const o of l)e.roll.load(o==null?void 0:o.roll)}update(e,l){this.isEnabled(e)&&m(e,l)}}export{R as RollUpdater};
