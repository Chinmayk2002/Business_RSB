exports.id=918,exports.ids=[918],exports.modules={3038:(e,t,n)=>{"use strict";var o=n(8545);t.__esModule=!0,t.default=function(e,t){e.classList?e.classList.add(t):(0,i.default)(e,t)||("string"==typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))};var i=o(n(927));e.exports=t.default},927:(e,t)=>{"use strict";t.__esModule=!0,t.default=function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")},e.exports=t.default},2850:(e,t)=>{"use strict";function replaceClassName(e,t){return e.replace(RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}t.__esModule=!0,t.default=function(e,t){e.classList?e.classList.remove(t):"string"==typeof e.className?e.className=replaceClassName(e.className,t):e.setAttribute("class",replaceClassName(e.className&&e.className.baseVal||"",t))},e.exports=t.default},6648:(e,t,n)=>{"use strict";let{createProxy:o}=n(7104);e.exports=o("D:\\MyWorkSpaces\\RSBI\\startup-nextjs-main\\node_modules\\.pnpm\\next@13.5.6_@babel+core@7.21.4_react-dom@18.2.0_react@18.2.0\\node_modules\\next\\dist\\client\\link.js")},3600:(e,t,n)=>{"use strict";e.exports=n(6648)},6629:(e,t,n)=>{"use strict";var o=n(6135);function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,e.exports=function(){function shim(e,t,n,i,s,a){if(a!==o){var r=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw r.name="Invariant Violation",r}}function getShim(){return shim}shim.isRequired=shim;var e={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return e.PropTypes=e,e}},2498:(e,t,n)=>{e.exports=n(6629)()},6135:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},7034:(e,t,n)=>{"use strict";var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),i=_interopRequireDefault(n(9046)),s=_interopRequireDefault(n(3146));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var a=function(e){function ModalVideo(e){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,ModalVideo);var t=function(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}(this,(ModalVideo.__proto__||Object.getPrototypeOf(ModalVideo)).call(this,e));return t.state={isOpen:!1,modalVideoWidth:"100%"},t.closeModal=t.closeModal.bind(t),t.updateFocus=t.updateFocus.bind(t),t.timeout,t}return function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ModalVideo,e),o(ModalVideo,[{key:"openModal",value:function(){this.setState({isOpen:!0})}},{key:"closeModal",value:function(){this.setState({isOpen:!1}),"function"==typeof this.props.onClose&&this.props.onClose()}},{key:"keydownHandler",value:function(e){27===e.keyCode&&this.closeModal()}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.keydownHandler.bind(this)),window.addEventListener("resize",this.resizeModalVideoWhenHeightGreaterThanWindowHeight.bind(this)),this.setState({modalVideoWidth:this.getWidthFulfillAspectRatio(this.props.ratio,window.innerHeight,window.innerWidth)})}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keydownHandler.bind(this)),window.removeEventListener("resize",this.resizeModalVideoWhenHeightGreaterThanWindowHeight.bind(this))}},{key:"componentDidUpdate",value:function(){this.state.isOpen&&this.modal&&this.modal.focus()}},{key:"updateFocus",value:function(e){9===e.keyCode&&(e.preventDefault(),e.stopPropagation(),this.modal===document.activeElement?this.modalbtn.focus():this.modal.focus())}},{key:"resizeModalVideoWhenHeightGreaterThanWindowHeight",value:function(){var e=this;clearTimeout(this.timeout),this.timeout=setTimeout(function(){var t=e.getWidthFulfillAspectRatio(e.props.ratio,window.innerHeight,window.innerWidth);e.state.modalVideoWidth!=t&&e.setState({modalVideoWidth:t})},10)}},{key:"getQueryString",value:function(e){var t="";for(var n in e)e.hasOwnProperty(n)&&null!==e[n]&&(t+=n+"="+e[n]+"&");return t.substr(0,t.length-1)}},{key:"getYoutubeUrl",value:function(e,t){return"//www.youtube.com/embed/"+t+"?"+this.getQueryString(e)}},{key:"getVimeoUrl",value:function(e,t){return"//player.vimeo.com/video/"+t+"?"+this.getQueryString(e)}},{key:"getYoukuUrl",value:function(e,t){return"//player.youku.com/embed/"+t+"?"+this.getQueryString(e)}},{key:"getVideoUrl",value:function(e,t){return"youtube"===e.channel?this.getYoutubeUrl(e.youtube,t):"vimeo"===e.channel?this.getVimeoUrl(e.vimeo,t):"youku"===e.channel?this.getYoukuUrl(e.youku,t):"custom"===e.channel?e.url:void 0}},{key:"getPadding",value:function(e){var t=e.split(":"),n=Number(t[0]);return 100*Number(t[1])/n+"%"}},{key:"getWidthFulfillAspectRatio",value:function(e,t,n){var o=e.split(":"),i=Number(o[0]),s=Number(o[1]);return t<n*(s/i)?Math.floor(i/s*t):"100%"}},{key:"render",value:function(){var e=this,t={width:this.state.modalVideoWidth},n={paddingBottom:this.getPadding(this.props.ratio)};return i.default.createElement(s.default,{classNames:this.props.classNames.modalVideoEffect,timeout:this.props.animationSpeed},function(){return e.state.isOpen?i.default.createElement("div",{className:e.props.classNames.modalVideo,tabIndex:"-1",role:"dialog","aria-label":e.props.aria.openMessage,onClick:e.closeModal,ref:function(t){e.modal=t},onKeyDown:e.updateFocus},i.default.createElement("div",{className:e.props.classNames.modalVideoBody},i.default.createElement("div",{className:e.props.classNames.modalVideoInner,style:t},i.default.createElement("div",{className:e.props.classNames.modalVideoIframeWrap,style:n},i.default.createElement("button",{className:e.props.classNames.modalVideoCloseBtn,"aria-label":e.props.aria.dismissBtnMessage,ref:function(t){e.modalbtn=t},onKeyDown:e.updateFocus}),e.props.children||i.default.createElement("iframe",{width:"460",height:"230",src:e.getVideoUrl(e.props,e.props.videoId),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:e.props.allowFullScreen,tabIndex:"-1"}))))):null})}}],[{key:"getDerivedStateFromProps",value:function(e){return{isOpen:e.isOpen}}}]),ModalVideo}(i.default.Component);t.Z=a,a.defaultProps={channel:"youtube",isOpen:!1,youtube:{autoplay:1,cc_load_policy:1,color:null,controls:1,disablekb:0,enablejsapi:0,end:null,fs:1,h1:null,iv_load_policy:1,list:null,listType:null,loop:0,modestbranding:null,origin:null,playlist:null,playsinline:null,rel:0,showinfo:1,start:0,wmode:"transparent",theme:"dark",mute:0},ratio:"16:9",vimeo:{api:!1,autopause:!0,autoplay:!0,byline:!0,callback:null,color:null,height:null,loop:!1,maxheight:null,maxwidth:null,player_id:null,portrait:!0,title:!0,width:null,xhtml:!1},youku:{autoplay:1,show_related:0},allowFullScreen:!0,animationSpeed:300,classNames:{modalVideoEffect:"modal-video-effect",modalVideo:"modal-video",modalVideoClose:"modal-video-close",modalVideoBody:"modal-video-body",modalVideoInner:"modal-video-inner",modalVideoIframeWrap:"modal-video-movie-wrap",modalVideoCloseBtn:"modal-video-close-btn"},aria:{openMessage:"You just opened the modal video",dismissBtnMessage:"Close the modal by clicking here"}}},3146:(e,t,n)=>{"use strict";t.__esModule=!0,t.default=void 0,_interopRequireDefault(n(2498));var o=_interopRequireDefault(n(3038)),i=_interopRequireDefault(n(2850)),s=_interopRequireDefault(n(9046)),a=_interopRequireDefault(n(2988));n(1429);var r=n(4555);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var removeClass=function(e,t){return e&&t&&t.split(" ").forEach(function(t){return(0,i.default)(e,t)})},l=function(e){function CSSTransition(){for(var t,n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){var o=t.resolveArguments(e,n),i=o[0],s=o[1];t.removeClasses(i,"exit"),t.addClass(i,s?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var o=t.resolveArguments(e,n),i=o[0],s=o[1];t.addClass(i,s?"appear":"enter","active"),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var o=t.resolveArguments(e,n),i=o[0],s=o[1]?"appear":"enter";t.removeClasses(i,s),t.addClass(i,s,"done"),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"appear"),t.removeClasses(n,"enter"),t.addClass(n,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.resolveArguments(e)[0];t.addClass(n,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"exit"),t.addClass(n,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,n){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,n]},t.getClassNames=function(e){var n=t.props.classNames,o="string"==typeof n,i=o?(o&&n?n+"-":"")+e:n[e],s=o?i+"-active":n[e+"Active"],a=o?i+"-done":n[e+"Done"];return{baseClassName:i,activeClassName:s,doneClassName:a}},t}CSSTransition.prototype=Object.create(e.prototype),CSSTransition.prototype.constructor=CSSTransition,CSSTransition.__proto__=e;var t=CSSTransition.prototype;return t.addClass=function(e,t,n){var i,s=this.getClassNames(t)[n+"ClassName"],a=this.getClassNames("enter").doneClassName;"appear"===t&&"done"===n&&a&&(s+=" "+a),"active"===n&&e&&(0,r.forceReflow)(e),s&&(this.appliedClasses[t][n]=s,i=s,e&&i&&i.split(" ").forEach(function(t){return(0,o.default)(e,t)}))},t.removeClasses=function(e,t){var n=this.appliedClasses[t],o=n.base,i=n.active,s=n.done;this.appliedClasses[t]={},o&&removeClass(e,o),i&&removeClass(e,i),s&&removeClass(e,s)},t.render=function(){var e=this.props,t=(e.classNames,function(e,t){if(null==e)return{};var n,o,i={},s=Object.keys(e);for(o=0;o<s.length;o++)t.indexOf(n=s[o])>=0||(i[n]=e[n]);return i}(e,["classNames"]));return s.default.createElement(a.default,_extends({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},CSSTransition}(s.default.Component);l.defaultProps={classNames:""},l.propTypes={},t.default=l,e.exports=t.default},2988:(e,t,n)=>{"use strict";t.__esModule=!0,t.default=t.EXITING=t.ENTERED=t.ENTERING=t.EXITED=t.UNMOUNTED=void 0,_interopRequireDefault(n(2498));var o=_interopRequireDefault(n(9046)),i=_interopRequireDefault(n(4891)),s=_interopRequireDefault(n(8028));n(1429);var a=_interopRequireDefault(n(1770)),r=n(4555);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var l="unmounted";t.UNMOUNTED=l;var u="exited";t.EXITED=u;var d="entering";t.ENTERING=d;var p="entered";t.ENTERED=p;var c="exiting";t.EXITING=c;var f=function(e){function Transition(t,n){o=e.call(this,t,n)||this;var o,i,s=n&&!n.isMounting?t.enter:t.appear;return o.appearStatus=null,t.in?s?(i=u,o.appearStatus=d):i=p:i=t.unmountOnExit||t.mountOnEnter?l:u,o.state={status:i},o.nextCallback=null,o}Transition.prototype=Object.create(e.prototype),Transition.prototype.constructor=Transition,Transition.__proto__=e,Transition.getDerivedStateFromProps=function(e,t){return e.in&&t.status===l?{status:u}:null};var t=Transition.prototype;return t.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},t.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==d&&n!==p&&(t=d):(n===d||n===p)&&(t=c)}this.updateStatus(!1,t)},t.componentWillUnmount=function(){this.cancelNextCallback()},t.getTimeouts=function(){var e,t,n,o=this.props.timeout;return e=t=n=o,null!=o&&"number"!=typeof o&&(e=o.exit,t=o.enter,n=void 0!==o.appear?o.appear:t),{exit:e,enter:t,appear:n}},t.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){if(this.cancelNextCallback(),t===d){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:i.default.findDOMNode(this);n&&(0,r.forceReflow)(n)}this.performEnter(e)}else this.performExit()}else this.props.unmountOnExit&&this.state.status===u&&this.setState({status:l})},t.performEnter=function(e){var t=this,n=this.props.enter,o=this.context?this.context.isMounting:e,a=this.props.nodeRef?[o]:[i.default.findDOMNode(this),o],r=a[0],l=a[1],u=this.getTimeouts(),c=o?u.appear:u.enter;if(!e&&!n||s.default.disabled){this.safeSetState({status:p},function(){t.props.onEntered(r)});return}this.props.onEnter(r,l),this.safeSetState({status:d},function(){t.props.onEntering(r,l),t.onTransitionEnd(c,function(){t.safeSetState({status:p},function(){t.props.onEntered(r,l)})})})},t.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),o=this.props.nodeRef?void 0:i.default.findDOMNode(this);if(!t||s.default.disabled){this.safeSetState({status:u},function(){e.props.onExited(o)});return}this.props.onExit(o),this.safeSetState({status:c},function(){e.props.onExiting(o),e.onTransitionEnd(n.exit,function(){e.safeSetState({status:u},function(){e.props.onExited(o)})})})},t.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},t.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},t.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(o){n&&(n=!1,t.nextCallback=null,e(o))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},t.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:i.default.findDOMNode(this),o=null==e&&!this.props.addEndListener;if(!n||o){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var s=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],a=s[0],r=s[1];this.props.addEndListener(a,r)}null!=e&&setTimeout(this.nextCallback,e)},t.render=function(){var e=this.state.status;if(e===l)return null;var t=this.props,n=t.children,i=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,function(e,t){if(null==e)return{};var n,o,i={},s=Object.keys(e);for(o=0;o<s.length;o++)t.indexOf(n=s[o])>=0||(i[n]=e[n]);return i}(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return o.default.createElement(a.default.Provider,{value:null},"function"==typeof n?n(e,i):o.default.cloneElement(o.default.Children.only(n),i))},Transition}(o.default.Component);function noop(){}f.contextType=a.default,f.propTypes={},f.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:noop,onEntering:noop,onEntered:noop,onExit:noop,onExiting:noop,onExited:noop},f.UNMOUNTED=l,f.EXITED=u,f.ENTERING=d,f.ENTERED=p,f.EXITING=c,t.default=f},1770:(e,t,n)=>{"use strict";t.__esModule=!0,t.default=void 0;var o=(function(e){return e&&e.__esModule?e:{default:e}})(n(9046)).default.createContext(null);t.default=o,e.exports=t.default},8028:(e,t)=>{"use strict";t.__esModule=!0,t.default=void 0,t.default={disabled:!1},e.exports=t.default},1429:(e,t,n)=>{"use strict";t.__esModule=!0,t.classNamesShape=t.timeoutsShape=void 0,function(e){e&&e.__esModule}(n(2498)),t.timeoutsShape=null,t.classNamesShape=null},4555:(e,t)=>{"use strict";t.__esModule=!0,t.forceReflow=void 0,t.forceReflow=function(e){return e.scrollTop}},8545:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}};