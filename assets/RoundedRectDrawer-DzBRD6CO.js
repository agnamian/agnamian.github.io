import{H as l}from"./index-jZ4SSCT0.js";function p(i,u,r,a){const R={x:-u,y:-u,height:r,width:r},t={topLeft:a,topRight:a,bottomLeft:a,bottomRight:a},{x:o,y:e,width:s,height:f}=R,d=o+s,n=e+f;i.moveTo(o+t.topLeft,e),i.lineTo(d-t.topRight,e),i.quadraticCurveTo(d,e,d,e+t.topRight),i.lineTo(d,e+f-t.bottomRight),i.quadraticCurveTo(d,n,d-t.bottomRight,n),i.lineTo(o+t.bottomLeft,n),i.quadraticCurveTo(o,n,o,n-t.bottomLeft),i.lineTo(o,e+t.topLeft),i.quadraticCurveTo(o,e,o+t.topLeft,e)}const c=2,g=Math.sqrt(c),m=2,h=5;class b{draw(u){const{context:r,particle:a,radius:R}=u,t=R/g,o=t*m,e=a.borderRadius??h;"roundRect"in r?r.roundRect(-t,-t,o,o,e):p(r,t,o,e)}particleInit(u,r){const a=r.shapeData;r.borderRadius=l((a==null?void 0:a.radius)??h)*u.retina.pixelRatio}}export{b as RoundedRectDrawer};
