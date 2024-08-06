import{r as x}from"./index-DJO9vBfz.js";var d={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b=x,v=Symbol.for("react.element"),E=Symbol.for("react.fragment"),O=Object.prototype.hasOwnProperty,j=b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,R={key:!0,ref:!0,__self:!0,__source:!0};function f(o,e,m){var r,n={},p=null,c=null;m!==void 0&&(p=""+m),e.key!==void 0&&(p=""+e.key),e.ref!==void 0&&(c=e.ref);for(r in e)O.call(e,r)&&!R.hasOwnProperty(r)&&(n[r]=e[r]);if(o&&o.defaultProps)for(r in e=o.defaultProps,e)n[r]===void 0&&(n[r]=e[r]);return{$$typeof:v,type:o,key:p,ref:c,props:n,_owner:j.current}}s.Fragment=E;s.jsx=f;s.jsxs=f;d.exports=s;var a=d.exports;const u=({message:o})=>a.jsx("div",{children:a.jsx("h1",{children:o})}),y=u;u.__docgenInfo={description:"",methods:[],displayName:"MyWebComponent"};const C={title:"Example/MyWebComponent",component:y},g=o=>a.jsx(y,{...o}),t=g.bind({});t.args={message:"Hello, Storybook!"};var i,l,_;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:"args => <MyWebComponent {...args} />",...(_=(l=t.parameters)==null?void 0:l.docs)==null?void 0:_.source}}};const S=["Default"];export{t as Default,S as __namedExportsOrder,C as default};
