(function(e){function t(t){for(var n,o,l=t[0],s=t[1],u=t[2],b=0,d=[];b<l.length;b++)o=l[b],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);i&&i(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,l=1;l<r.length;l++){var s=r[l];0!==a[s]&&(n=!1)}n&&(c.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},c=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var i=s;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"38e9":function(e,t,r){e.exports=r.p+"img/dumbbell-light.ef471ab1.png"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),a={key:0,class:"min-h-full font-Poppins box-border"};function c(e,t,r,c,o,l){var s=Object(n["w"])("Navigation"),u=Object(n["w"])("router-view");return c.appReady?(Object(n["r"])(),Object(n["f"])("div",a,[Object(n["i"])(s),Object(n["i"])(u)])):Object(n["e"])("",!0)}var o=r("38e9"),l=r.n(o),s={class:"bg-at-light-green text-white"},u={class:"container py-5 px-4 flex flex-col gap-4 items-center sm:flex-row"},i=Object(n["g"])("div",{class:"flex items-center gap-x-4"},[Object(n["g"])("img",{class:"w-14",src:l.a,alt:"main-logo"}),Object(n["g"])("h1",{class:"text-lg"},"Active Tracker")],-1),b={class:"flex flex-1 justify-end gap-x-10"},d=Object(n["h"])("Home"),g=Object(n["h"])("Create"),p=Object(n["h"])("Login");function f(e,t,r,a,c,o){var l=Object(n["w"])("router-link");return Object(n["r"])(),Object(n["f"])("header",s,[Object(n["g"])("nav",u,[i,Object(n["g"])("ul",b,[Object(n["i"])(l,{class:"cursor-pointer",to:{name:"Home"}},{default:Object(n["D"])((function(){return[d]})),_:1}),a.user?(Object(n["r"])(),Object(n["d"])(l,{key:0,class:"cursor-pointer",to:{name:"Create"}},{default:Object(n["D"])((function(){return[g]})),_:1})):Object(n["e"])("",!0),a.user?Object(n["e"])("",!0):(Object(n["r"])(),Object(n["d"])(l,{key:1,class:"cursor-pointer",to:{name:"Login"}},{default:Object(n["D"])((function(){return[p]})),_:1})),a.user?(Object(n["r"])(),Object(n["f"])("li",{key:2,onClick:t[0]||(t[0]=function(){return a.logout&&a.logout.apply(a,arguments)}),class:"cursor-pointer"},"Logout")):Object(n["e"])("",!0)])])])}var x=r("1da1"),O=(r("96cf"),Object(n["t"])({user:null})),j={setUser:function(e){O.user=e?e.user:null}},m={state:O,methods:j},h=r("940b"),v="https://bhwblgeblcxtjavetmit.supabase.co",y="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDU3MDE2OSwiZXhwIjoxOTU2MTQ2MTY5fQ.6FsTJfde9d_EkPOEJz5G8eZ5V5o_mBBcQJlzeLIr_vo",w=Object(h["a"])(v,y),k=r("6c02"),E={setup:function(){var e=Object(n["b"])((function(){return m.state.user})),t=Object(k["d"])();console.log(e);var r=function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,w.auth.signOut();case 2:t.push({name:"Home"});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{logout:r,user:e}}},U=r("d959"),T=r.n(U);const V=T()(E,[["render",f]]);var C=V,R={components:{Navigation:C},setup:function(){var e=Object(n["u"])(null),t=w.auth.user();return t||(e.value=!0),w.auth.onAuthStateChange((function(t,r){console.log("Hellooo"),m.methods.setUser(r),e.value=!0})),{appReady:e}}};r("b76a");const M=T()(R,[["render",c]]);var B=M,W=(r("45fc"),r("f7da")),P=r.n(W),L=r("a25c"),S=r.n(L),q={key:0,class:"container mt-10 px-4"},I={key:0,class:"w-full flex flex-col items-center"},_=Object(n["g"])("h1",null,"Looks empty here...",-1),D=Object(n["h"])("Create Workout"),N={key:1,class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"},A={key:0,src:P.a,class:"h-24 w-auto",alt:""},J={key:1,src:S.a,class:"h-24 w-auto",alt:""},H={class:"mt-6 py-1 px-3 text-xs text-white bg-at-light-green shadow-md rounded-lg"},F={class:"mt-8 mb-2 text-center text-xl text-at-light-green"};function z(e,t,r,a,c,o){var l=Object(n["w"])("router-link");return a.dataLoaded?(Object(n["r"])(),Object(n["f"])("div",q,[0===a.data.length?(Object(n["r"])(),Object(n["f"])("div",I,[_,Object(n["i"])(l,{class:"mt-6 py-2 px-6 rounded-sm text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green",to:{name:"Create"}},{default:Object(n["D"])((function(){return[D]})),_:1})])):(Object(n["r"])(),Object(n["f"])("div",N,[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["v"])(a.data,(function(e,t){return Object(n["r"])(),Object(n["d"])(l,{class:"flex flex-col items-center bg-light-grey p-8 shadow-md cursor-pointer",to:{name:"View-Workout",params:{workoutId:e.id}},key:t},{default:Object(n["D"])((function(){return["cardio"===e.workoutType?(Object(n["r"])(),Object(n["f"])("img",A)):(Object(n["r"])(),Object(n["f"])("img",J)),Object(n["g"])("p",H,Object(n["y"])(e.workoutType),1),Object(n["g"])("h1",F,Object(n["y"])(e.workoutName),1)]})),_:2},1032,["to"])})),128))]))])):Object(n["e"])("",!0)}var G={name:"home",components:{},setup:function(){var e=Object(n["u"])([]),t=Object(n["u"])(null),r=function(){var r=Object(x["a"])(regeneratorRuntime.mark((function r(){var n,a,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,w.from("workouts").select("*");case 3:if(n=r.sent,a=n.data,c=n.error,!c){r.next=8;break}throw c;case 8:e.value=a,t.value=!0,r.next=15;break;case 12:r.prev=12,r.t0=r["catch"](0),console.warn(r.t0.message);case 15:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(){return r.apply(this,arguments)}}();return r(),{data:e,dataLoaded:t}}};const Q=T()(G,[["render",z]]);var Y=Q,X={class:"max-w-screen-sm mx-auto px-4 py-10"},Z={key:0,class:"mb-10 p-4 rounded-md bg-light-grey shadow-lg"},K={class:"text-red-500"},$=Object(n["g"])("h1",{class:"text-3xl text-at-light-green mb-4"},"Login",-1),ee={class:"flex flex-col mb-2"},te=Object(n["g"])("label",{for:"email",class:"mb-1 text-sm text-at-light-green"},"Email",-1),re={class:"flex flex-col mb-2"},ne=Object(n["g"])("label",{for:"password",class:"mb-1 text-sm text-at-light-green"},"Password",-1),ae=Object(n["g"])("button",{type:"submit",class:"mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green"}," Login ",-1),ce=Object(n["h"])(" Don't have an account? "),oe=Object(n["g"])("span",{class:"text-at-light-green"},"Register",-1);function le(e,t,r,a,c,o){var l=Object(n["w"])("router-link");return Object(n["r"])(),Object(n["f"])("div",X,[a.errorMsg?(Object(n["r"])(),Object(n["f"])("div",Z,[Object(n["g"])("p",K,Object(n["y"])(a.errorMsg),1)])):Object(n["e"])("",!0),Object(n["g"])("form",{onSubmit:t[2]||(t[2]=Object(n["F"])((function(){return a.login&&a.login.apply(a,arguments)}),["prevent"])),class:"p-8 flex flex-col bg-light-grey rounded-md shadow-lg"},[$,Object(n["g"])("div",ee,[te,Object(n["E"])(Object(n["g"])("input",{type:"text",required:"",class:"p-2 text-gray-500 focus:outline-none",id:"email","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.email=e})},null,512),[[n["B"],a.email]])]),Object(n["g"])("div",re,[ne,Object(n["E"])(Object(n["g"])("input",{type:"password",required:"",class:"p-2 text-gray-500 focus:outline-none",id:"password","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.password=e})},null,512),[[n["B"],a.password]])]),ae,Object(n["i"])(l,{class:"text-sm mt-6 text-center",to:{name:"Register"}},{default:Object(n["D"])((function(){return[ce,oe]})),_:1})],32)])}r("4795");var se={name:"login",setup:function(){var e=Object(k["d"])(),t=Object(n["u"])(null),r=Object(n["u"])(null),a=Object(n["u"])(null),c=function(){var n=Object(x["a"])(regeneratorRuntime.mark((function n(){var c,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,w.auth.signIn({email:t.value,password:r.value});case 3:if(c=n.sent,o=c.error,!o){n.next=7;break}throw o;case 7:e.push({name:"Home"}),n.next=14;break;case 10:n.prev=10,n.t0=n["catch"](0),a.value=n.t0.message,setTimeout((function(){a.value=null}),5e3);case 14:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}();return{email:t,password:r,errorMsg:a,login:c}}};const ue=T()(se,[["render",le]]);var ie=ue,be={class:"max-w-screen-sm mx-auto px-4 py-10"},de={key:0,class:"mb-10 p-4 rounded-md bg-light-grey shadow-lg"},ge={class:"text-red-500"},pe=Object(n["g"])("h1",{class:"text-3xl text-at-light-green mb-4"},"Register",-1),fe={class:"flex flex-col mb-2"},xe=Object(n["g"])("label",{for:"email",class:"mb-1 text-sm text-at-light-green"},"Email",-1),Oe={class:"flex flex-col mb-2"},je=Object(n["g"])("label",{for:"password",class:"mb-1 text-sm text-at-light-green"},"Password",-1),me={class:"flex flex-col mb-2"},he=Object(n["g"])("label",{for:"confirmPassword",class:"mb-1 text-sm text-at-light-green"},"Confirm Password",-1),ve=Object(n["g"])("button",{type:"submit",class:"mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green"}," Register ",-1),ye=Object(n["h"])(" Already have an account? "),we=Object(n["g"])("span",{class:"text-at-light-green"},"Login",-1);function ke(e,t,r,a,c,o){var l=Object(n["w"])("router-link");return Object(n["r"])(),Object(n["f"])("div",be,[a.errorMsg?(Object(n["r"])(),Object(n["f"])("div",de,[Object(n["g"])("p",ge,Object(n["y"])(a.errorMsg),1)])):Object(n["e"])("",!0),Object(n["g"])("form",{onSubmit:t[3]||(t[3]=Object(n["F"])((function(){return a.register&&a.register.apply(a,arguments)}),["prevent"])),class:"p-8 flex flex-col bg-light-grey rounded-md shadow-lg"},[pe,Object(n["g"])("div",fe,[xe,Object(n["E"])(Object(n["g"])("input",{type:"text",required:"",class:"p-2 text-gray-500 focus:outline-none",id:"email","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.email=e})},null,512),[[n["B"],a.email]])]),Object(n["g"])("div",Oe,[je,Object(n["E"])(Object(n["g"])("input",{type:"password",required:"",class:"p-2 text-gray-500 focus:outline-none",id:"password","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.password=e})},null,512),[[n["B"],a.password]])]),Object(n["g"])("div",me,[he,Object(n["E"])(Object(n["g"])("input",{type:"password",required:"",class:"p-2 text-gray-500 focus:outline-none",id:"confirmPassword","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.confirmPassword=e})},null,512),[[n["B"],a.confirmPassword]])]),ve,Object(n["i"])(l,{class:"text-sm mt-6 text-center",to:{name:"Login"}},{default:Object(n["D"])((function(){return[ye,we]})),_:1})],32)])}var Ee={name:"register",setup:function(){var e=Object(k["d"])(),t=Object(n["u"])(null),r=Object(n["u"])(null),a=Object(n["u"])(null),c=Object(n["u"])(null),o=function(){var n=Object(x["a"])(regeneratorRuntime.mark((function n(){var o,l,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r.value!==a.value){n.next=18;break}return n.prev=1,n.next=4,w.auth.signUp({email:t.value,password:r.value});case 4:if(o=n.sent,l=o.user,s=o.error,!s){n.next=9;break}throw s;case 9:console.log(l),e.push({name:"Login"}),n.next=17;break;case 13:n.prev=13,n.t0=n["catch"](1),c.value=n.t0.message,setTimeout((function(){c.value=null}),5e3);case 17:return n.abrupt("return");case 18:c.value="Error: Password do not match",setTimeout((function(){c.value=null}),5e3);case 20:case"end":return n.stop()}}),n,null,[[1,13]])})));return function(){return n.apply(this,arguments)}}();return{email:t,password:r,confirmPassword:a,errorMsg:c,register:o}}};const Ue=T()(Ee,[["render",ke]]);var Te=Ue,Ve=r("9b82"),Ce=r.n(Ve),Re={class:"max-w-screen-md mx-auto px-4 py-10"},Me={key:0,class:"mb-10 p-4 bg-light-grey rounded-md shadow-lg"},Be={class:"text-at-light-green"},We={class:"text-red-500"},Pe={class:"p-8 flex items-start bg-light-grey rounded-md shadow-lg"},Le=Object(n["g"])("h1",{class:"text-2xl text-at-light-green"}," Record Workout ",-1),Se={class:"flex flex-col"},qe=Object(n["g"])("label",{for:"workout-name",class:"mb-1 text-sm text-at-light-green"}," Workout Name ",-1),Ie={class:"flex flex-col"},_e=Object(n["g"])("label",{for:"workout-type",class:"mb-1 text-sm text-at-light-green"}," Workout Type ",-1),De=Object(n["g"])("option",{value:"select-workout"},"Select Workout",-1),Ne=Object(n["g"])("option",{value:"strength"},"Strength Training",-1),Ae=Object(n["g"])("option",{value:"cardio"},"Cardio",-1),Je=[De,Ne,Ae],He={key:0,class:"flex flex-col gap-y-4"},Fe={class:"flex flex-col md:w-1/3"},ze=Object(n["g"])("label",{for:"exercise-name",class:"mb-1 text-sm text-at-light-green"}," Exercise ",-1),Ge=["onUpdate:modelValue"],Qe={class:"flex flex-col flex-1"},Ye=Object(n["g"])("label",{for:"sets",class:"mb-1 text-sm text-at-light-green"}," Sets ",-1),Xe=["onUpdate:modelValue"],Ze={class:"flex flex-col flex-1"},Ke=Object(n["g"])("label",{for:"reps",class:"mb-1 text-sm text-at-light-green"}," Reps ",-1),$e=["onUpdate:modelValue"],et={class:"flex flex-col flex-1"},tt=Object(n["g"])("label",{for:"weight",class:"mb-1 text-sm text-at-light-green"}," Weight (KGs) ",-1),rt=["onUpdate:modelValue"],nt=["onClick"],at={key:1,class:"flex flex-col gap-y-4"},ct={class:"flex flex-col md:w-1/3"},ot=Object(n["g"])("label",{for:"cardio-type",class:"mb-1 text-sm text-at-light-green"}," Type ",-1),lt=["onUpdate:modelValue"],st=Object(n["g"])("option",{value:"#"},"Select Type",-1),ut=Object(n["g"])("option",{value:"run"},"Runs",-1),it=Object(n["g"])("option",{value:"walk"},"Walk",-1),bt=[st,ut,it],dt={class:"flex flex-col flex-1"},gt=Object(n["g"])("label",{for:"distance",class:"mb-1 text-sm text-at-light-green"},"Distance ",-1),pt=["onUpdate:modelValue"],ft={class:"flex flex-col flex-1"},xt=Object(n["g"])("label",{for:"duration",class:"mb-1 text-sm text-at-light-green"},"Duration ",-1),Ot=["onUpdate:modelValue"],jt={class:"flex flex-col flex-1"},mt=Object(n["g"])("label",{for:"pace",class:"mb-1 text-sm text-at-light-green"},"Pace ",-1),ht=["onUpdate:modelValue"],vt=["onClick"],yt=Object(n["g"])("button",{type:"submit",class:"mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green"}," Record Workout ",-1);function wt(e,t,r,a,c,o){return Object(n["r"])(),Object(n["f"])("div",Re,[a.statusMsg||a.errorMsg?(Object(n["r"])(),Object(n["f"])("div",Me,[Object(n["g"])("p",Be,Object(n["y"])(a.statusMsg),1),Object(n["g"])("p",We,Object(n["y"])(a.errorMsg),1)])):Object(n["e"])("",!0),Object(n["g"])("div",Pe,[Object(n["g"])("form",{onSubmit:t[5]||(t[5]=Object(n["F"])((function(){return a.createWorkout&&a.createWorkout.apply(a,arguments)}),["prevent"])),class:"flex flex-col gap-y-5 w-full"},[Le,Object(n["g"])("div",Se,[qe,Object(n["E"])(Object(n["g"])("input",{type:"text",required:"",class:"p-2 text-gray-500 focus:outline-none",id:"workout-name","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.workoutName=e})},null,512),[[n["B"],a.workoutName]])]),Object(n["g"])("div",Ie,[_e,Object(n["E"])(Object(n["g"])("select",{required:"",class:"p-2 text-gray-500 focus:outline-none",id:"workout-type",onChange:t[1]||(t[1]=function(){return a.workoutChange&&a.workoutChange.apply(a,arguments)}),"onUpdate:modelValue":t[2]||(t[2]=function(e){return a.workoutType=e})},Je,544),[[n["A"],a.workoutType]])]),"strength"===a.workoutType?(Object(n["r"])(),Object(n["f"])("div",He,[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["v"])(a.exercises,(function(e,t){return Object(n["r"])(),Object(n["f"])("div",{class:"flex flex-col gap-x-6 gap-y-2 relative md:flex-row",key:t},[Object(n["g"])("div",Fe,[ze,Object(n["E"])(Object(n["g"])("input",{required:"",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.exercise=t}},null,8,Ge),[[n["B"],e.exercise]])]),Object(n["g"])("div",Qe,[Ye,Object(n["E"])(Object(n["g"])("input",{required:"",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.sets=t}},null,8,Xe),[[n["B"],e.sets]])]),Object(n["g"])("div",Ze,[Ke,Object(n["E"])(Object(n["g"])("input",{required:"",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.reps=t}},null,8,$e),[[n["B"],e.reps]])]),Object(n["g"])("div",et,[tt,Object(n["E"])(Object(n["g"])("input",{required:"",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.weight=t}},null,8,rt),[[n["B"],e.weight]])]),Object(n["g"])("img",{onClick:function(t){return a.deleteExercise(e.id)},src:Ce.a,class:"h-4 w-auto absolute -left-5 cursor-pointer",alt:""},null,8,nt)])})),128)),Object(n["g"])("button",{type:"button",onClick:t[3]||(t[3]=function(){return a.addExercise&&a.addExercise.apply(a,arguments)}),class:"mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green"}," Add Exercise ")])):Object(n["e"])("",!0),"cardio"===a.workoutType?(Object(n["r"])(),Object(n["f"])("div",at,[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["v"])(a.exercises,(function(e,t){return Object(n["r"])(),Object(n["f"])("div",{class:"flex flex-col gap-x-6 gap-y-2 relative md:flex-row",key:t},[Object(n["g"])("div",ct,[ot,Object(n["E"])(Object(n["g"])("select",{id:"cardio-type",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.cardioType=t}},bt,8,lt),[[n["A"],e.cardioType]])]),Object(n["g"])("div",dt,[gt,Object(n["E"])(Object(n["g"])("input",{required:"",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.distance=t}},null,8,pt),[[n["B"],e.distance]])]),Object(n["g"])("div",ft,[xt,Object(n["E"])(Object(n["g"])("input",{required:"",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.duration=t}},null,8,Ot),[[n["B"],e.duration]])]),Object(n["g"])("div",jt,[mt,Object(n["E"])(Object(n["g"])("input",{required:"",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.pace=t}},null,8,ht),[[n["B"],e.pace]])]),Object(n["g"])("img",{onClick:function(t){return a.deleteExercise(e.id)},src:Ce.a,class:"h-4 w-auto absolute -left-5 cursor-pointer",alt:""},null,8,vt)])})),128)),Object(n["g"])("button",{type:"button",onClick:t[4]||(t[4]=function(){return a.addExercise&&a.addExercise.apply(a,arguments)}),class:"mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green"}," Add Exercise ")])):Object(n["e"])("",!0),yt],32)])])}r("4de4");var kt=r("8a77"),Et={name:"create",setup:function(){var e=Object(n["u"])(""),t=Object(n["u"])("select-workout"),r=Object(n["u"])([]),a=Object(n["u"])(null),c=Object(n["u"])(null),o=function(){"strength"!==t.value?r.value.push({id:Object(kt["a"])(),cardioType:"",distance:"",duration:"",pace:""}):r.value.push({id:Object(kt["a"])(),exercise:"",sets:"",reps:"",weight:""})},l=function(e){r.value.length>1?r.value=r.value.filter((function(t){return t.id!==e})):(c.value="Error: Cannot remove, need to at least have one exercise",setTimeout((function(){c.value=!1}),5e3))},s=function(){r.value=[],o()},u=function(){var n=Object(x["a"])(regeneratorRuntime.mark((function n(){var o,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,w.from("workouts").insert([{workoutName:e.value,workoutType:t.value,exercises:r.value}]);case 3:if(o=n.sent,l=o.error,!l){n.next=7;break}throw l;case 7:a.value="Success: Workout Created!",e.value=null,t.value="select-workout",r.value=[],setTimeout((function(){c.value=!1}),5e3),n.next=18;break;case 14:n.prev=14,n.t0=n["catch"](0),c.value="Error: ".concat(n.t0.message),setTimeout((function(){c.value=!1}),5e3);case 18:case"end":return n.stop()}}),n,null,[[0,14]])})));return function(){return n.apply(this,arguments)}}();return{workoutName:e,workoutType:t,exercises:r,statusMsg:a,errorMsg:c,addExercise:o,deleteExercise:l,workoutChange:s,createWorkout:u}}};const Ut=T()(Et,[["render",wt]]);var Tt=Ut,Vt=r("6122"),Ct=r.n(Vt),Rt=r("a407"),Mt=r.n(Rt),Bt={class:"max-w-screen-sm mx-auto px-4 py-10"},Wt={key:0,class:"mb-10 p-4 rounded-md shadow-md bg-light-grey"},Pt={class:"text-at-light-green"},Lt={class:"text-red-500"},St={key:1},qt={class:"flex flex-col items-center p-8 rounded-md shadow-md bg-light-grey relative"},It={key:0,class:"flex absolute left-2 top-2 gap-x-2"},_t=Object(n["g"])("img",{class:"h-3.5 w-auto",src:Ct.a,alt:""},null,-1),Dt=[_t],Nt=Object(n["g"])("img",{class:"h-3.5 w-auto",src:Mt.a,alt:""},null,-1),At=[Nt],Jt={key:1,class:"h-24 w-auto",src:P.a,alt:""},Ht={key:2,class:"h-24 w-auto",src:S.a,alt:""},Ft={class:"mt-6 py-1.5 px-5 text-xs text-white bg-at-light-green rounded-lg shadow-md"},zt={class:"w-full mt-6"},Gt={key:1,class:"text-at-light-green text-2xl text-center"},Qt={class:"mt-10 p-8 rounded-md flex flex-col item-center bg-light-grey shadow-md"},Yt={key:0,class:"flex flex-col gap-y-4 w-full"},Xt={class:"flex flex-2 flex-col md:w-1/3"},Zt=Object(n["g"])("label",{for:"exercise-name",class:"mb-1 text-sm text-at-light-green"}," Exercise ",-1),Kt=["onUpdate:modelValue"],$t={key:1},er={class:"flex flex-1 flex-col"},tr=Object(n["g"])("label",{for:"sets",class:"mb-1 text-sm text-at-light-green"}," Sets ",-1),rr=["onUpdate:modelValue"],nr={key:1},ar={class:"flex flex-1 flex-col"},cr=Object(n["g"])("label",{for:"reps",class:"mb-1 text-sm text-at-light-green"}," Reps ",-1),or=["onUpdate:modelValue"],lr={key:1},sr={class:"flex flex-1 flex-col"},ur=Object(n["g"])("label",{for:"weight",class:"mb-1 text-sm text-at-light-green"}," Weight (LB's) ",-1),ir=["onUpdate:modelValue"],br={key:1},dr=["onClick"],gr={key:1,class:"flex flex-col gap-y-4 w-full"},pr={class:"flex flex-2 flex-col md:w-1/3"},fr=Object(n["g"])("label",{for:"cardioType",class:"mb-1 text-sm text-at-light-green"}," Type ",-1),xr=["onUpdate:modelValue"],Or=Object(n["g"])("option",{value:"#"},"Select Type",-1),jr=Object(n["g"])("option",{value:"run"},"Runs",-1),mr=Object(n["g"])("option",{value:"walk"},"Walk",-1),hr=[Or,jr,mr],vr={key:1},yr={class:"flex flex-1 flex-col"},wr=Object(n["g"])("label",{for:"distance",class:"mb-1 text-sm text-at-light-green"}," Distance ",-1),kr=["onUpdate:modelValue"],Er={key:1},Ur={class:"flex flex-1 flex-col"},Tr=Object(n["g"])("label",{for:"duration",class:"mb-1 text-sm text-at-light-green"}," Duration ",-1),Vr=["onUpdate:modelValue"],Cr={key:1},Rr={class:"flex flex-1 flex-col"},Mr=Object(n["g"])("label",{for:"pace",class:"mb-1 text-sm text-at-light-green"}," Pace ",-1),Br=["onUpdate:modelValue"],Wr={key:1},Pr=["onClick"];function Lr(e,t,r,a,c,o){return Object(n["r"])(),Object(n["f"])("div",Bt,[a.statusMsg||a.errorMsg?(Object(n["r"])(),Object(n["f"])("div",Wt,[Object(n["g"])("p",Pt,Object(n["y"])(a.statusMsg),1),Object(n["g"])("p",Lt,Object(n["y"])(a.errorMsg),1)])):Object(n["e"])("",!0),a.dataLoaded?(Object(n["r"])(),Object(n["f"])("div",St,[Object(n["g"])("div",qt,[a.user?(Object(n["r"])(),Object(n["f"])("div",It,[Object(n["g"])("div",{class:"h-7 w-7 rounded-full flex justify-center items-center cursor-pointer bg-at-light-green shadow-lg",onClick:t[0]||(t[0]=function(){return a.editMode&&a.editMode.apply(a,arguments)})},Dt),Object(n["g"])("div",{onClick:t[1]||(t[1]=function(){return a.deleteWorkout&&a.deleteWorkout.apply(a,arguments)}),class:"h-7 w-7 rounded-full flex justify-center items-center cursor-pointer bg-at-light-green shadow-lg"},At)])):Object(n["e"])("",!0),"cardio"===a.data.workoutType?(Object(n["r"])(),Object(n["f"])("img",Jt)):(Object(n["r"])(),Object(n["f"])("img",Ht)),Object(n["g"])("span",Ft,Object(n["y"])(a.data.workoutType),1),Object(n["g"])("div",zt,[a.edit?Object(n["E"])((Object(n["r"])(),Object(n["f"])("input",{key:0,type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.data.workoutName=e})},null,512)),[[n["B"],a.data.workoutName]]):(Object(n["r"])(),Object(n["f"])("h1",Gt,Object(n["y"])(a.data.workoutName),1))])]),Object(n["g"])("div",Qt,["strength"===a.data.workoutType?(Object(n["r"])(),Object(n["f"])("div",Yt,[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["v"])(a.data.exercises,(function(e,t){return Object(n["r"])(),Object(n["f"])("div",{class:"flex flex-col gap-x-6 gap-y-2 relative sm:flex-row",key:t},[Object(n["g"])("div",Xt,[Zt,a.edit?Object(n["E"])((Object(n["r"])(),Object(n["f"])("input",{key:0,id:"exercise-name",class:"p-2 w-full text-gray-500 focus:outline-none",type:"text","onUpdate:modelValue":function(t){return e.exercise=t}},null,8,Kt)),[[n["B"],e.exercise]]):(Object(n["r"])(),Object(n["f"])("p",$t,Object(n["y"])(e.exercise),1))]),Object(n["g"])("div",er,[tr,a.edit?Object(n["E"])((Object(n["r"])(),Object(n["f"])("input",{key:0,id:"sets",class:"p-2 w-full text-gray-500 focus:outline-none",type:"text","onUpdate:modelValue":function(t){return e.sets=t}},null,8,rr)),[[n["B"],e.sets]]):(Object(n["r"])(),Object(n["f"])("p",nr,Object(n["y"])(e.sets),1))]),Object(n["g"])("div",ar,[cr,a.edit?Object(n["E"])((Object(n["r"])(),Object(n["f"])("input",{key:0,id:"reps",class:"p-2 w-full text-gray-500 focus:outline-none",type:"text","onUpdate:modelValue":function(t){return e.reps=t}},null,8,or)),[[n["B"],e.reps]]):(Object(n["r"])(),Object(n["f"])("p",lr,Object(n["y"])(e.reps),1))]),Object(n["g"])("div",sr,[ur,a.edit?Object(n["E"])((Object(n["r"])(),Object(n["f"])("input",{key:0,id:"weight",class:"p-2 w-full text-gray-500 focus:outline-none",type:"text","onUpdate:modelValue":function(t){return e.weight=t}},null,8,ir)),[[n["B"],e.weight]]):(Object(n["r"])(),Object(n["f"])("p",br,Object(n["y"])(e.weight),1))]),a.edit?(Object(n["r"])(),Object(n["f"])("img",{key:0,onClick:function(t){return a.deleteExercise(e.id)},class:"absolute h-4 w-auto -left-5 cursor-pointer",src:Ce.a,alt:""},null,8,dr)):Object(n["e"])("",!0)])})),128)),a.edit?(Object(n["r"])(),Object(n["f"])("button",{key:0,onClick:t[3]||(t[3]=function(){return a.addExercise&&a.addExercise.apply(a,arguments)}),type:"button",class:"py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green"}," Add Exercise ")):Object(n["e"])("",!0)])):(Object(n["r"])(),Object(n["f"])("div",gr,[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["v"])(a.data.exercises,(function(e,t){return Object(n["r"])(),Object(n["f"])("div",{class:"flex flex-col gap-x-6 gap-y-2 relative sm:flex-row",key:t},[Object(n["g"])("div",pr,[fr,a.edit?Object(n["E"])((Object(n["r"])(),Object(n["f"])("select",{key:0,id:"cardioType",class:"p-2 w-full text-gray-500 focus:outline-none",type:"text","onUpdate:modelValue":function(t){return e.cardioType=t}},hr,8,xr)),[[n["A"],e.cardioType]]):(Object(n["r"])(),Object(n["f"])("p",vr,Object(n["y"])(e.cardioType),1))]),Object(n["g"])("div",yr,[wr,a.edit?Object(n["E"])((Object(n["r"])(),Object(n["f"])("input",{key:0,id:"distance",class:"p-2 w-full text-gray-500 focus:outline-none",type:"text","onUpdate:modelValue":function(t){return e.distance=t}},null,8,kr)),[[n["B"],e.distance]]):(Object(n["r"])(),Object(n["f"])("p",Er,Object(n["y"])(e.distance),1))]),Object(n["g"])("div",Ur,[Tr,a.edit?Object(n["E"])((Object(n["r"])(),Object(n["f"])("input",{key:0,id:"duration",class:"p-2 w-full text-gray-500 focus:outline-none",type:"text","onUpdate:modelValue":function(t){return e.duration=t}},null,8,Vr)),[[n["B"],e.duration]]):(Object(n["r"])(),Object(n["f"])("p",Cr,Object(n["y"])(e.duration),1))]),Object(n["g"])("div",Rr,[Mr,a.edit?Object(n["E"])((Object(n["r"])(),Object(n["f"])("input",{key:0,id:"pace",class:"p-2 w-full text-gray-500 focus:outline-none",type:"text","onUpdate:modelValue":function(t){return e.pace=t}},null,8,Br)),[[n["B"],e.pace]]):(Object(n["r"])(),Object(n["f"])("p",Wr,Object(n["y"])(e.pace),1))]),a.edit?(Object(n["r"])(),Object(n["f"])("img",{key:0,onClick:function(t){return a.deleteExercise(e.id)},class:"absolute h-4 w-auto -left-5 cursor-pointer",src:Ce.a,alt:""},null,8,Pr)):Object(n["e"])("",!0)])})),128)),a.edit?(Object(n["r"])(),Object(n["f"])("button",{key:0,onClick:t[4]||(t[4]=function(){return a.addExercise&&a.addExercise.apply(a,arguments)}),type:"button",class:"py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green"}," Add Exercise ")):Object(n["e"])("",!0)]))]),a.edit?(Object(n["r"])(),Object(n["f"])("button",{key:0,onClick:t[5]||(t[5]=function(){return a.update&&a.update.apply(a,arguments)}),type:"button",class:"mt-10 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green"}," Update Workout ")):Object(n["e"])("",!0)])):Object(n["e"])("",!0)])}var Sr,qr=r("8785"),Ir={name:"view-workout",setup:function(){var e=Object(n["u"])(null),t=Object(n["u"])(null),r=Object(n["u"])(null),a=Object(n["u"])(null),c=Object(k["c"])(),o=Object(k["d"])(),l=Object(n["b"])((function(){return m.state.user})),s=c.params.workoutId,u=function(){var n=Object(x["a"])(regeneratorRuntime.mark((function n(){var a,c,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,w.from("workouts").select("*").eq("id",s);case 3:if(a=n.sent,c=a.data,o=a.error,!o){n.next=8;break}throw o;case 8:e.value=c[0],t.value=!0,n.next=16;break;case 12:n.prev=12,n.t0=n["catch"](0),r.value=n.t0.message,setTimeout((function(){r.value=!1}),5e3);case 16:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(){return n.apply(this,arguments)}}();u();var i=function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.from("workouts")["delete"]().eq("id",s);case 3:if(t=e.sent,n=t.error,!n){e.next=7;break}throw n;case 7:o.push({name:"Home"}),e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](0),r.value="Error: ".concat(e.t0.message),setTimeout((function(){r.value=!1}),5e3);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),b=Object(n["u"])(null),d=function(){b.value=!b.value},g=function(){"strength"!==e.value.workoutType?e.value.exercises.push({id:Object(kt["a"])(),cardioType:"",distance:"",duration:"",pace:""}):e.value.exercises.push({id:Object(kt["a"])(),exercise:"",sets:"",reps:"",weight:""})},p=function(t){e.value.exercises.length>1?e.value.exercises=e.value.exercises((function(e){return e.id!==t})):(r.value="Error: Cannot remove, need to at least have one exercise",setTimeout((function(){r.value=!1}),5e3))},f=function(){var t=Object(x["a"])(regeneratorRuntime.mark((function t(){var n,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w.from("workouts").update({workoutName:e.value.workoutName,exercises:e.value.exercises}).eq("id",s);case 3:if(n=t.sent,c=n.error,!c){t.next=7;break}throw c;case 7:b.value=!1,a.value="Sucess: Workout Updated!",setTimeout((function(){a.value=!1}),5e3),t.next=16;break;case 12:t.prev=12,t.t0=t["catch"](0),r.value(Sr||(Sr=Object(qr["a"])(["Error: ",""])),t.t0.message),setTimeout((function(){r.value=!1}),5e3);case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}();return{statusMsg:a,data:e,dataLoaded:t,errorMsg:r,user:l,deleteWorkout:i,edit:b,editMode:d,addExercise:g,deleteExercise:p,update:f}}};const _r=T()(Ir,[["render",Lr]]);var Dr=_r,Nr=[{path:"/",name:"Home",component:Y,meta:{title:"Home",auth:!1}},{path:"/login",name:"Login",component:ie,meta:{title:"Login",auth:!1}},{path:"/register",name:"Register",component:Te,meta:{title:"Register",auth:!1}},{path:"/create",name:"Create",component:Tt,meta:{title:"Create",auth:!0}},{path:"/view-workout/:workoutId",name:"View-Workout",component:Dr,meta:{title:"View Workout",auth:!1}}],Ar=Object(k["a"])({history:Object(k["b"])("/"),routes:Nr});Ar.beforeEach((function(e,t,r){document.title="".concat(e.meta.title," | Active Tracker"),r()})),Ar.beforeEach((function(e,t,r){var n=w.auth.user();if(e.matched.some((function(e){return e.meta.auth})))return n?void r():void r({name:"Login"});r()}));var Jr=Ar;r("ba8c");Object(n["c"])(B).use(Jr).mount("#app")},6122:function(e,t,r){e.exports=r.p+"img/pencil-light.67a7865c.png"},"9b82":function(e,t,r){e.exports=r.p+"img/trash-light-green.f27ed677.png"},a25c:function(e,t,r){e.exports=r.p+"img/dumbbell-light-green.e9869f64.png"},a407:function(e,t,r){e.exports=r.p+"img/trash-light.f5a99b6a.png"},b76a:function(e,t,r){"use strict";r("fdf5")},ba8c:function(e,t,r){},f7da:function(e,t,r){e.exports=r.p+"img/running-light-green.599f4302.png"},fdf5:function(e,t,r){}});
//# sourceMappingURL=app.af5eba2f.js.map