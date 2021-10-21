(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[6],{1827:function(t,e,n){"use strict";n.r(e),n.d(e,"amplify_authenticator",(function(){return g}));var a=n(97),r=n(284),i=n(491),o=n(234),s=n(179),u=n(476),c=(n(60),n(150)),l=n(865),h=n(1994),f=function(t,e,n,a){return new(n||(n=Promise))((function(r,i){function o(t){try{u(a.next(t))}catch(e){i(e)}}function s(t){try{u(a.throw(t))}catch(e){i(e)}}function u(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,s)}u((a=a.apply(t,e||[])).next())}))},d=function(t,e){var n,a,r,i,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(r=2&i[0]?a.return:i[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,i[1])).done)return r;switch(a=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,a=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(r=(r=o.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){o=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){o.label=i[1];break}if(6===i[0]&&o.label<r[1]){o.label=r[1],r=i;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(i);break}r[2]&&o.ops.pop(),o.trys.pop();continue}i=e.call(t,o)}catch(s){i=[6,s],a=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},p=new r.a("Authenticator"),g=function(){function t(t){var e=this;Object(a.k)(this,t),this.initialAuthState=o.a.SignIn,this.handleAuthStateChange=function(){},this.authState=o.a.Loading,this.toastMessage="",this.handleExternalAuthEvent=function(t){var n=t.payload;switch(n.event){case"cognitoHostedUI":case"signIn":Object(h.a)(n.data,l.d);break;case"cognitoHostedUI_failure":case"parsingUrl_failure":case"signOut":case"customGreetingSignOut":return Object(l.d)(e.initialAuthState)}},this.handleToastEvent=function(t){var n=t.payload;switch(n.event){case c.h:n.message&&(e.toastMessage=n.message)}}}return t.prototype.componentWillLoad=function(){return f(this,void 0,void 0,(function(){var t,e=this;return d(this,(function(n){switch(n.label){case 0:return Object(l.h)((function(t,n){e.onAuthStateChange(t,n),e.toastMessage=""})),i.a.listen(c.i,this.handleToastEvent),i.a.listen(c.a,this.handleExternalAuthEvent),Object(s.j)("amplify-authenticator"),t=localStorage.getItem(c.f),localStorage.removeItem(c.f),"true"===t?[3,2]:[4,this.checkUser()];case 1:n.sent(),n.label=2;case 2:return[2]}}))}))},t.prototype.checkUser=function(){return f(this,void 0,void 0,(function(){var t=this;return d(this,(function(e){if(!u.a||"function"!==typeof u.a.currentAuthenticatedUser)throw new Error(c.d);return[2,u.a.currentAuthenticatedUser().then((function(t){Object(l.d)(o.a.SignedIn,t)})).catch((function(){return f(t,void 0,void 0,(function(){var t,e;return d(this,(function(n){switch(n.label){case 0:t=null;try{t=localStorage.getItem(c.l)}catch(a){p.debug("Failed to get the auth state from local storage",a)}n.label=1;case 1:return n.trys.push([1,4,,5]),t!==o.a.SignedIn?[3,3]:[4,u.a.signOut()];case 2:n.sent(),n.label=3;case 3:return Object(l.d)(this.initialAuthState),[3,5];case 4:return e=n.sent(),p.debug("Failed to sign out",e),[3,5];case 5:return[2]}}))}))}))]}))}))},t.prototype.onAuthStateChange=function(t,e){return f(this,void 0,void 0,(function(){return d(this,(function(n){return void 0===t?[2,p.error("nextAuthState cannot be undefined")]:(p.info("Inside onAuthStateChange Method current authState:",this.authState),t===o.a.SignedOut?this.authState=this.initialAuthState:this.authState=t,this.authData=e,this.authData&&p.log("Auth Data was set:",this.authData),this.authState===t&&(this.handleAuthStateChange(this.authState,this.authData),p.info("authState has been updated to "+this.authState)),[2])}))}))},t.prototype.renderAuthComponent=function(t){switch(t){case o.a.SignIn:return Object(a.i)("slot",{name:"sign-in"},Object(a.i)("amplify-sign-in",{federated:this.federated,usernameAlias:this.usernameAlias}));case o.a.ConfirmSignIn:return Object(a.i)("slot",{name:"confirm-sign-in"},Object(a.i)("amplify-confirm-sign-in",{user:this.authData}));case o.a.SignUp:return Object(a.i)("slot",{name:"sign-up"},Object(a.i)("amplify-sign-up",{usernameAlias:this.usernameAlias}));case o.a.ConfirmSignUp:return Object(a.i)("slot",{name:"confirm-sign-up"},Object(a.i)("amplify-confirm-sign-up",{user:this.authData,usernameAlias:this.usernameAlias}));case o.a.ForgotPassword:return Object(a.i)("slot",{name:"forgot-password"},Object(a.i)("amplify-forgot-password",{usernameAlias:this.usernameAlias}));case o.a.ResetPassword:return Object(a.i)("slot",{name:"require-new-password"},Object(a.i)("amplify-require-new-password",{user:this.authData}));case o.a.VerifyContact:return Object(a.i)("slot",{name:"verify-contact"},Object(a.i)("amplify-verify-contact",{user:this.authData}));case o.a.TOTPSetup:return Object(a.i)("slot",{name:"totp-setup"},Object(a.i)("amplify-totp-setup",{user:this.authData}));case o.a.Loading:return Object(a.i)("slot",{name:"loading"},Object(a.i)("div",null,"Loading..."));case o.a.SignedIn:return[Object(a.i)("slot",{name:"greetings"}),Object(a.i)("slot",null)];default:throw new Error("Unhandled auth state: "+t)}},t.prototype.componentWillUnload=function(){return i.a.remove(c.a,this.handleExternalAuthEvent),i.a.remove(c.i,this.handleToastEvent),l.h},t.prototype.render=function(){var t=this;return Object(a.i)(a.b,null,this.toastMessage?Object(a.i)("amplify-toast",{message:this.toastMessage,handleClose:function(){t.toastMessage=""},"data-test":"authenticator-error"}):null,this.authState===o.a.SignedIn?this.renderAuthComponent(this.authState):Object(a.i)("div",{class:"auth-container"},this.renderAuthComponent(this.authState)))},t}();g.style=":host{--background-color:var(--amplify-background-color);--width:28.75rem;--min-width:20rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;--box-shadow:1px 1px 4px 0 rgba(0, 0, 0, 0.15);--border-radius:6px;--padding:35px 40px;--margin-bottom:20px;--container-height:100vh;--container-display:flex;--container-justify:center;--container-align:center}.auth-container{display:var(--container-display);-ms-flex-pack:var(--container-justify);justify-content:var(--container-justify);-ms-flex-align:var(--container-align);align-items:var(--container-align);min-height:var(--container-height)}"},1994:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return p}));var a=n(284),r=n(191),i=n(234),o=n(476),s=n(60),u=n(150),c=n(865),l=function(t,e,n,a){return new(n||(n=Promise))((function(r,i){function o(t){try{u(a.next(t))}catch(e){i(e)}}function s(t){try{u(a.throw(t))}catch(e){i(e)}}function u(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,s)}u((a=a.apply(t,e||[])).next())}))},h=function(t,e){var n,a,r,i,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(r=2&i[0]?a.return:i[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,i[1])).done)return r;switch(a=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,a=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(r=(r=o.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){o=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){o.label=i[1];break}if(6===i[0]&&o.label<r[1]){o.label=r[1],r=i;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(i);break}r[2]&&o.ops.pop(),o.trys.pop();continue}i=e.call(t,o)}catch(s){i=[6,s],a=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},f=new a.a("auth-helpers");function d(t,e){return l(this,void 0,void 0,(function(){var n,a,s;return h(this,(function(l){switch(l.label){case 0:if(!o.a||"function"!==typeof o.a.verifiedContact)throw new Error(u.d);l.label=1;case 1:return l.trys.push([1,3,,4]),[4,o.a.verifiedContact(t)];case 2:return n=l.sent(),!Object(r.d)(n.verified)||Object(r.d)(n.unverified)?e(i.a.SignedIn,t):(a=Object.assign(t,n),e(i.a.VerifyContact,a)),[3,4];case 3:return s=l.sent(),Object(c.a)(s),[3,4];case 4:return[2]}}))}))}var p=function(t,e,n){return l(void 0,void 0,void 0,(function(){var a,r;return h(this,(function(l){switch(l.label){case 0:if(!o.a||"function"!==typeof o.a.signIn)throw new Error(u.d);l.label=1;case 1:return l.trys.push([1,9,,10]),[4,o.a.signIn(t,e)];case 2:return a=l.sent(),f.debug(a),a.challengeName!==i.b.SMSMFA&&a.challengeName!==i.b.SoftwareTokenMFA?[3,3]:(f.debug("confirm user with "+a.challengeName),n(i.a.ConfirmSignIn,a),[3,8]);case 3:return a.challengeName!==i.b.NewPasswordRequired?[3,4]:(f.debug("require new password",a.challengeParam),n(i.a.ResetPassword,a),[3,8]);case 4:return a.challengeName!==i.b.MFASetup?[3,5]:(f.debug("TOTP setup",a.challengeParam),n(i.a.TOTPSetup,a),[3,8]);case 5:return a.challengeName===i.b.CustomChallenge&&a.challengeParam&&"true"===a.challengeParam.trigger?(f.debug("custom challenge",a.challengeParam),n(i.a.CustomConfirmSignIn,a),[3,8]):[3,6];case 6:return[4,d(a,n)];case 7:l.sent(),l.label=8;case 8:return[3,10];case 9:return"UserNotConfirmedException"===(r=l.sent()).code?(f.debug("the user is not confirmed"),n(i.a.ConfirmSignUp,{username:t})):"PasswordResetRequiredException"===r.code?(f.debug("the user requires a new password"),n(i.a.ForgotPassword,{username:t})):"InvalidParameterException"===r.code&&""===e&&(f.debug("Password cannot be empty"),r.message=s.a.EMPTY_PASSWORD),Object(c.a)(r),[3,10];case 10:return[2]}}))}))}}}]);
//# sourceMappingURL=6.2bd087ab.chunk.js.map