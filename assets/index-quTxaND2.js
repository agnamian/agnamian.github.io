import{b as e}from"./index-jZ4SSCT0.js";async function n(){e("ease-in-expo",o=>o?2**(10*o-10):0),e("ease-out-expo",o=>o===1?1:1-Math.pow(2,-10*o)),e("ease-in-out-expo",o=>o===1?o?1:0:o?o<.5?2**(20*o-10)/2:(2-2**(-20*o+10))/2:0),await Promise.resolve()}export{n as loadEasingExpoPlugin};
