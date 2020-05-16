(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{104:function(e,t,a){},217:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(7),o=a.n(l),c=(a(104),a(37)),i=a(23),u=a(256),d=a(248),m=a(252),s=a(253),v=a(254);var b=function(){return n.a.createElement(d.a,{position:"static"},n.a.createElement(m.a,null,n.a.createElement(s.a,{className:"title",variant:"h6"},"Covid19"),n.a.createElement(v.a,{color:"inherit",component:c.b,to:"/"},"Summary"),n.a.createElement(v.a,{color:"inherit",component:c.b,to:"/detailed"},"Detailed")))},E=a(30),h=a(91),p=a.n(h).a.create({baseURL:"https://api.covid19api.com/"}),f=a(255),g=a(218);var C=function(e){var t=e.data,a=t.TotalConfirmed,r=t.TotalDeaths,l=t.TotalRecovered;return n.a.createElement(g.a,{style:y},n.a.createElement(f.a,{container:!0},n.a.createElement(f.a,{item:!0,xs:3},n.a.createElement(s.a,{variant:"h4"},"Global")),n.a.createElement(f.a,{item:!0,xs:3},n.a.createElement(s.a,{variant:"h6"},"Confirmed: ",a," ")),n.a.createElement(f.a,{item:!0,xs:3},n.a.createElement(s.a,{variant:"h6"},"Deaths: ",r," ")),n.a.createElement(f.a,{item:!0,xs:3},n.a.createElement(s.a,{variant:"h6"},"Recovered: ",l," "))))},y={padding:"10px"};var x=function(e){var t=e.data,a=t.Country,r=t.TotalConfirmed,l=t.TotalDeaths,o=t.TotalRecovered;return n.a.createElement(g.a,{style:j},n.a.createElement(s.a,{variant:"h6"},a),n.a.createElement(s.a,{variant:"subtitle1"},"Confirmed: ",r," "),n.a.createElement(s.a,{variant:"subtitle1"},"Deaths: ",l," "),n.a.createElement(s.a,{variant:"subtitle1"},"Recovered: ",o," "))},j={padding:"10px",height:"150px"};var k=function(){return n.a.createElement("div",{style:O},n.a.createElement("div",{className:"lds-dual-ring"}))},O={display:"flex",justifyContent:"center",marginTop:"70px"};var S=function(){var e=Object(r.useState)(null),t=Object(E.a)(e,2),a=t[0],l=t[1];return Object(r.useEffect)((function(){p.get("/summary").then((function(e){return l(e.data)}))}),[]),a?n.a.createElement(f.a,{container:!0,spacing:3},n.a.createElement(f.a,{item:!0,xs:12},n.a.createElement(C,{data:a.Global})),a.Countries.map((function(e){return n.a.createElement(f.a,{item:!0,xs:3,key:e.CountryCode},n.a.createElement(x,{data:e}))}))):n.a.createElement(k,null)},D=a(257),T=a(258),B=a(92);var R=function(e){var t=e.data,a=t.country,r={labels:t.labels,datasets:[{label:"Active",backgroundColor:"rgba(0,0,255,0.2)",borderColor:"rgba(0,0,255,1)",borderWidth:1,hoverBackgroundColor:"rgba(0,0,255,0.4)",hoverBorderColor:"rgba(0,0,255,1)",data:t.active},{label:"Deaths",backgroundColor:"rgba(255,0,0,0.2)",borderColor:"rgba(255,0,0,1)",borderWidth:1,hoverBackgroundColor:"rgba(255,0,0,0.4)",hoverBorderColor:"rgba(255,0,0,1)",data:t.deaths},{label:"Recovered",backgroundColor:"rgba(0,255,0,0.2)",borderColor:"rgba(0,255,0,1)",borderWidth:1,hoverBackgroundColor:"rgba(0,255,0,0.4)",hoverBorderColor:"rgba(0,255,0,1)",data:t.recovered}]};return n.a.createElement("div",null,n.a.createElement("h2",null,"Detailed Statistic: ",a),n.a.createElement(B.a,{data:r}))};var W=function(){var e=Object(r.useState)([]),t=Object(E.a)(e,2),a=t[0],l=t[1],o=Object(r.useState)("ukraine"),c=Object(E.a)(o,2),i=c[0],u=c[1],d=Object(r.useState)(null),m=Object(E.a)(d,2),v=m[0],b=m[1];return Object(r.useEffect)((function(){p.get("/countries").then((function(e){return l(((t=e.data).sort((function(e,t){return e.Country<t.Country?-1:e.Country>t.Country?1:0})),t));var t}))}),[]),Object(r.useEffect)((function(){p.get("/total/country/"+i).then((function(e){return b(function(e){var t={country:"",labels:[],active:[],deaths:[],recovered:[]};return e.forEach((function(e){t.country=e.Country,t.labels.push(e.Date.replace(/T.*$/,"")),t.active.push(e.Active),t.deaths.push(e.Deaths),t.recovered.push(e.Recovered)})),t}(e.data))}))}),[i]),n.a.createElement("div",null,n.a.createElement(s.a,{style:w,variant:"h6"},"Select the country:",n.a.createElement(D.a,{style:A,labelId:"demo-simple-select-label",id:"demo-simple-select",value:i,onChange:function(e){u(e.target.value)}},a.map((function(e){return n.a.createElement(T.a,{value:e.Slug,key:e.Slug},e.Country)})))),v?n.a.createElement(R,{data:v}):null)};var w={marginTop:"20px"},A={marginLeft:"20px",padding:"0px 10px"};var G=function(){return n.a.createElement(u.a,{maxWidth:"md"},n.a.createElement(c.a,null,n.a.createElement(b,null),n.a.createElement(i.d,null,n.a.createElement(i.b,{exact:!0,path:"/"},n.a.createElement(S,null)),n.a.createElement(i.b,{path:"/detailed"},n.a.createElement(W,null)),n.a.createElement(i.b,{path:"*"},n.a.createElement(i.a,{to:"/"})))))};a(216);o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(G,null)),document.getElementById("root"))},99:function(e,t,a){e.exports=a(217)}},[[99,1,2]]]);
//# sourceMappingURL=main.2f915e9c.chunk.js.map