import t from"../../utils/isValidDate";export default function s(s){if(!/^\d{12}$/.test(s)){return{meta:{},valid:false}}const e=parseInt(s.substr(0,2),10);const r=parseInt(s.substr(2,2),10);const a=parseInt(s.substr(4,2),10);if(!t(e+1900,r,a)&&!t(e+2e3,r,a)){return{meta:{},valid:false}}const n=s.substr(6,2);const i=["17","18","19","20","69","70","73","80","81","94","95","96","97"];return{meta:{},valid:i.indexOf(n)===-1}}