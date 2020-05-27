(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{iLqC:function(e,t,i){"use strict";i.d(t,"b",(function(){return l})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return o})),i.d(t,"d",(function(){return a}));var n=i("LvDl");function l(){return{count:0,noComponentCount:0,backlogCount:0,labels:[],components:[],fixVersions:[]}}function s(e,t){e.count+=t.count,e.noComponentCount+=t.noComponentCount,e.backlogCount+=t.backlogCount,e.labels=n.union(e.labels,t.labels),e.components=n.union(e.components,t.components),e.fixVersions=n.union(e.fixVersions,t.fixVersions)}function o(e){const t={count:0,noComponentCount:0,backlogCount:0,labels:[],components:[],fixVersions:[]};if(e){t.count=e?e.length:0,t.labels=n.union(n.flatten(n.map(e,e=>e.labels))),t.components=n.orderBy(n.map(n.union(n.flatten(n.map(e,e=>e.components))),e=>({title:e,count:0})),"title"),t.components.unshift({title:"No component",count:0}),t.fixVersions=n.map(n.union(n.flatten(n.map(e,e=>e.fixVersions))),i=>{const l=n.filter(e,e=>n.includes(e.fixVersions,i));return{title:i,expanded:!0,count:l?l.length:0,componentWise:n.map(t.components,e=>{const t=n.filter(l,t=>"No component"===e.title?0===t.components.length:n.includes(t.components,e.title));return e.count+=t.length,{component:e.title,values:t}})}}),t.fixVersions=n.orderBy(t.fixVersions,["title"]);const i=n.find(t.components,{title:"No component"});i&&0!==i.count?t.noComponentCount=i.count:n.remove(t.components,{title:"No component"});const l=n.find(t.fixVersions,{title:"Backlog"});l&&(t.backlogCount=l.count)}return t}function a(e){const t=n.mapValues(n.groupBy(n.map(e.children,"status")),e=>e.length),i=n.mapValues(n.groupBy(n.map(e.children,"issueType")),e=>e.length);return{components:n.map(e.metadata.components,e=>({key:e.title,count:e.count})),status:Object.keys(t).map(e=>({key:e,count:t[e]})),issueTypes:Object.keys(i).map(e=>({key:e,count:i[e]}))}}},krUz:function(e,t,i){"use strict";i.d(t,"b",(function(){return l})),i.d(t,"r",(function(){return s})),i.d(t,"l",(function(){return o})),i.d(t,"a",(function(){return a})),i.d(t,"p",(function(){return r})),i.d(t,"q",(function(){return u})),i.d(t,"g",(function(){return d})),i.d(t,"d",(function(){return h})),i.d(t,"n",(function(){return p})),i.d(t,"m",(function(){return f})),i.d(t,"j",(function(){return b})),i.d(t,"k",(function(){return m})),i.d(t,"h",(function(){return g})),i.d(t,"i",(function(){return y})),i.d(t,"f",(function(){return v})),i.d(t,"c",(function(){return k})),i.d(t,"e",(function(){return C})),i.d(t,"o",(function(){return w})),i.d(t,"s",(function(){return S}));var n=i("LvDl");const l={Heading:"Heading",Editable:"Editable",Editing:"Editing"},s=["project","issueParent","issueType","assignee","status","summary","label","title","key","icon","duedate","created","updated","resolution","description","components","labels","fixVersions","linkType"],o=["description","components","labels","fixVersions"],a={Organization:"Organization",Hierarchy:"Hierarchy",Project:"Project",EpicChildren:"EpicChildren",RelatedLink:"RelatedLink",Issue:"Issue",TestSuite:"Test Suite",Epic:"Epic",Story:"Story",TestCase:"ST-Test Case",SubTask:"ST-Technical task",Task:"Task"};function c(e){switch(e){case a.Organization:case a.Hierarchy:return"";case a.Project:return"fa fa-bookmark fa-sm fa-fw text-info";case a.Epic:return"fa fa-copy fa-sm fa-fw ";case a.Story:return"far fa-file-alt fa-sm fa-fw ";case a.Task:return"fa fa-check fa-sm fa-fw";case a.TestSuite:return"fa fa-flask fa-sm fa-fw text-muted";default:return"far fa-file fa-sm fa-fw"}return""}function r(e){return e.issueType===a.EpicChildren||e.issueType===a.RelatedLink}function u(e){if(e&&e.fields){const t=e.fields.issuetype?e.fields.issuetype.name:"unknown";return{key:e.key,project:n.pick(e.fields.project,["id","key","name"]),issueType:t,status:e.fields.status?e.fields.status.name:"unknown",label:n.truncate(e.fields.summary,{length:100}),title:e.fields.summary,icon:c(t),duedate:e.fields.duedate,created:e.fields.created,updated:e.fields.updated,resolution:e.fields.resolution?e.fields.resolution.name:null,assignee:n.pick(e.fields.assignee,["key","name","displayName"]),priority:e.fields.priority?e.fields.priority.name:null,description:e.fields.description,labels:e.fields.labels,components:n.map(e.fields.components,"name"),fixVersions:n.map(e.fields.fixVersions,"name")}}return null}function d(e,t){return e?!t&&e?t=n.clone(e):(t.project=e.project,t.issueParent=e.issueParent,t.issueType=e.issueType,t.status=e.status,t.label=e.label,t.title=e.title,t.description=e.description,t.icon=e.icon,t.duedate=e.duedate,t.created=e.created,t.updated=e.updated,t.resolution=e.resolution,t.assignee=e.assignee,t.description=e.description,t.components=e.components,t.labels=e.labels,void(t.fixVersions=e.fixVersions)):t}function h(e,t){e&&n.forEach(e,e=>{e.extendedFields=n.filter(n.map(t,t=>({name:t.name,value:p(e.issue,t.id)})),e=>e&&""!==e.value)})}function p(e,t){if(!e||!e.fields)return"";const i=e.fields[t];return i?"object"==typeof i?i.value:i:""}function f(e){return n.map(e,e=>(function e(t){return t&&t.fields&&(t.project=n.pick(t.fields.project,["id","key","name"]),t.issueParent=e(t.fields.parent),t.issueType=t.fields.issuetype?t.fields.issuetype.name:"unknown",t.status=t.fields.status?t.fields.status.name:"unknown",t.label=n.truncate(t.fields.summary,{length:100}),t.title=t.fields.summary,t.icon=c(t.issueType),t.duedate=t.fields.duedate,t.created=t.fields.created,t.updated=t.fields.updated,t.resolution=t.fields.resolution?t.fields.resolution.name:null,t.assignee=n.pick(t.fields.assignee,["key","name","displayName"]),t.priority=t.fields.priority?t.fields.priority.name:null,t.description=t.fields.description,t.labels=t.fields.labels,t.components=n.map(t.fields.components,"name"),t.fixVersions=n.map(t.fields.fixVersions,"name")),t}(e),{key:e.key,title:e.fields.summary,label:n.truncate(e.fields.summary,{length:100}),issueType:e.issueType,status:e.status,project:e.project,issueParent:e.issueParent,issue:e}))}function b(e){return e?{key:e.name,title:e.name,label:e.name,description:e.purpose,type:l.Heading,menuType:a.Organization,issueType:a.Organization,icon:c(a.Organization),expanded:!0,editable:!1,selectable:!1}:{key:"my_org",title:"",label:"Organization",description:"",type:l.Editable,menuType:a.Organization,issueType:a.Organization,expanded:!0,editable:!0,selectable:!0}}function m(e){return{key:e.key,title:e.name,label:e.name,type:l.Heading,description:e.description,issueType:a.Project,menuType:a.Project,icon:c(a.Project),expanded:!0,selectable:!1}}function g(e){const t=e.epicChildren&&e.epicChildren.length>0?[]:null;e.epicChildren.forEach(e=>t.push(e));const i="Epic Children"+(t?` (${t.length})`:"");return{label:i,title:i,key:"E_"+e.key,parentId:e.key,selectable:!1,issueType:a.EpicChildren,leaf:!1,children:t}}function y(e){return{key:e.name,title:e.extendedValue,label:e.extendedValue,description:e.description,icon:c(a.Hierarchy),issueType:e.name,hfKey:e.id,children:[],expanded:!0,editable:!1,isHierarchyField:!0,selectable:!1,type:l.Heading,menuType:a.Hierarchy}}function v(e,t){const i=e.splice(1,e.length-1);t.children=i,i&&i.length>0&&v(i,i[0])}function k(e,t){return e&&t&&(e.children&&1===e.children.length?k(e.children[0],t):(e.children=e.children||[],e.children.push(t))),e||t}function C(e,t){const i=n.groupBy(e,"linkType");return Object.keys(i).map(e=>({label:e,title:`${e} ${i[e].length} issues`,key:`RL_${t}`,parentId:t,selectable:!1,issueType:a.RelatedLink,children:i[e],expanded:!0}))}function w(e){if(e&&e.fields&&e.fields.issuelinks&&e.fields.issuelinks.length>0){const t=n.filter(e.fields.issuelinks,e=>e.inwardIssue);let i=[];t&&t.length>0&&(i=n.union(i,n.map(t,e=>{const t=u(e.inwardIssue);return t.linkType=e.type?e.type.inward:"link",t})));const l=n.filter(e.fields.issuelinks,e=>e.outwardIssue);return l&&l.length>0&&(i=n.union(i,n.map(l,e=>{const t=u(e.outwardIssue);return t.linkType=e.type?e.type.outward:"link",t}))),e.project&&e.project.key&&i.forEach(t=>t.project=e.project),i}return null}function S(e,t){return e&&t?function e(t,i,n){if(n(t,i))return t;if(t.children){let l=null;for(let s=0;null==l&&s<t.children.length;s++)l=e(t.children[s],i,n);return l}return null}(e,t,(e,t)=>e.key.toLowerCase()===t.toLowerCase()):null}},lVkt:function(e,t,i){"use strict";i.d(t,"a",(function(){return X})),i.d(t,"b",(function(){return Z}));var n=i("fXoL"),l=i("R0Ic"),s=i("ofXK"),o=i("YyRF"),a=i("t2ka"),c=i("7zfz"),r=i("3Pt+"),u=i("vxfF"),d=i("xlun");function h(e,t){if(1&e&&(n.Wb(0,"span"),n.Mc(1),n.Vb()),2&e){const e=n.kc();n.Cb(1),n.Nc(e.option.label)}}function p(e,t){1&e&&n.Sb(0)}const f=function(e){return{height:e}},b=function(e,t){return{"ui-state-highlight":e,"ui-state-disabled":t}},m=function(e){return{"ui-state-active":e}},g=function(e){return{"pi pi-check":e}},y=function(e){return{$implicit:e}},v=["container"],k=["filterInput"];function C(e,t){if(1&e&&(n.Ub(0),n.Mc(1),n.Tb()),2&e){const e=n.kc();n.Cb(1),n.Nc(e.valuesAsString)}}function w(e,t){1&e&&n.Sb(0)}const S=function(e,t){return{"ui-state-active":e,"ui-state-focus":t}};function O(e,t){if(1&e){const e=n.Xb();n.Wb(0,"div",25),n.Wb(1,"div",2),n.Wb(2,"input",26),n.ic("focus",(function(){return n.Dc(e),n.kc(3).onHeaderCheckboxFocus()}))("blur",(function(){return n.Dc(e),n.kc(3).onHeaderCheckboxBlur()}))("keydown.space",(function(t){return n.Dc(e),n.kc(3).toggleAll(t)})),n.Vb(),n.Vb(),n.Wb(3,"div",27),n.ic("click",(function(t){return n.Dc(e),n.kc(3).toggleAll(t)})),n.Rb(4,"span",28),n.Vb(),n.Vb()}if(2&e){const e=n.kc(3);n.Cb(2),n.qc("checked",e.isAllChecked()),n.Cb(1),n.qc("ngClass",n.vc(4,S,e.isAllChecked(),e.headerCheckboxFocus)),n.Db("aria-checked",e.isAllChecked()),n.Cb(1),n.qc("ngClass",n.uc(7,g,e.isAllChecked()))}}function x(e,t){if(1&e){const e=n.Xb();n.Wb(0,"div",29),n.Wb(1,"input",30,31),n.ic("input",(function(){return n.Dc(e),n.kc(3).onFilter()})),n.Vb(),n.Rb(3,"span",32),n.Vb()}if(2&e){const e=n.kc(3);n.Cb(1),n.qc("value",e.filterValue||""),n.Db("placeholder",e.filterPlaceHolder)("aria-label",e.ariaFilterLabel)}}const L=function(e){return{"ui-multiselect-header-no-toggleall":e}};function V(e,t){if(1&e){const e=n.Xb();n.Wb(0,"div",20),n.oc(1),n.Kc(2,O,5,9,"div",21),n.Kc(3,x,4,3,"div",22),n.Wb(4,"a",23),n.ic("click",(function(t){return n.Dc(e),n.kc(2).close(t)}))("keydown.enter",(function(t){return n.Dc(e),n.kc(2).close(t)})),n.Rb(5,"span",24),n.Vb(),n.Vb()}if(2&e){const e=n.kc(2);n.qc("ngClass",n.uc(3,L,!e.showToggleAll)),n.Cb(2),n.qc("ngIf",e.showToggleAll&&!e.selectionLimit),n.Cb(1),n.qc("ngIf",e.filter)}}function I(e,t){if(1&e){const e=n.Xb();n.Wb(0,"p-multiSelectItem",34),n.ic("onClick",(function(t){return n.Dc(e),n.kc(3).onOptionClick(t)}))("onKeydown",(function(t){return n.Dc(e),n.kc(3).onOptionKeydown(t)})),n.Vb()}if(2&e){const e=t.$implicit,i=n.kc(3);n.qc("option",e)("selected",i.isSelected(e.value))("maxSelectionLimitReached",i.maxSelectionLimitReached)("visible",i.isItemVisible(e))("template",i.itemTemplate)}}function T(e,t){if(1&e&&(n.Ub(0),n.Kc(1,I,1,5,"ng-template",33),n.Tb()),2&e){const e=n.kc(2);n.Cb(1),n.qc("ngForOf",e.options)}}function E(e,t){if(1&e){const e=n.Xb();n.Ub(0),n.Wb(1,"p-multiSelectItem",39),n.ic("onClick",(function(t){return n.Dc(e),n.kc(4).onOptionClick(t)}))("onKeydown",(function(t){return n.Dc(e),n.kc(4).onOptionKeydown(t)})),n.Vb(),n.Tb()}if(2&e){const e=t.$implicit,i=n.kc(4);n.Cb(1),n.qc("option",e)("selected",i.isSelected(e.value))("maxSelectionLimitReached",i.maxSelectionLimitReached)("visible",i.isItemVisible(e))("template",i.itemTemplate)("itemSize",i.itemSize)}}function F(e,t){if(1&e&&(n.Wb(0,"cdk-virtual-scroll-viewport",36,37),n.Kc(2,E,2,6,"ng-container",38),n.Vb()),2&e){const e=n.kc(3);n.qc("ngStyle",n.uc(3,f,e.scrollHeight))("itemSize",e.itemSize),n.Cb(2),n.qc("cdkVirtualForOf",e.visibleOptions)}}function P(e,t){if(1&e&&n.Kc(0,F,3,5,"cdk-virtual-scroll-viewport",35),2&e){const e=n.kc(2);n.qc("ngIf",e.virtualScroll&&e.visibleOptions&&e.visibleOptions.length)}}function H(e,t){if(1&e&&(n.Wb(0,"li",40),n.Mc(1),n.Vb()),2&e){const e=n.kc(2);n.Cb(1),n.Nc(e.emptyFilterMessage)}}function j(e,t){1&e&&(n.Wb(0,"div",41),n.oc(1,1),n.Vb())}const D=function(){return["ui-multiselect-panel ui-widget ui-widget-content ui-corner-all ui-shadow"]},K=function(e,t){return{showTransitionParams:e,hideTransitionParams:t}},z=function(e){return{value:"visible",params:e}};function A(e,t){if(1&e){const e=n.Xb();n.Wb(0,"div",12),n.ic("@overlayAnimation.start",(function(t){return n.Dc(e),n.kc().onOverlayAnimationStart(t)}))("click",(function(){return n.Dc(e),n.kc().panelClick=!0}))("keydown",(function(t){return n.Dc(e),n.kc().onKeydown(t)})),n.Kc(1,V,6,5,"div",13),n.Wb(2,"div",14),n.Wb(3,"ul",15),n.Kc(4,T,2,1,"ng-container",16),n.Kc(5,P,1,1,"ng-template",null,17,n.Lc),n.Kc(7,H,2,1,"li",18),n.Vb(),n.Vb(),n.Kc(8,j,2,0,"div",19),n.Vb()}if(2&e){const e=n.Bc(6),t=n.kc();n.Eb(t.panelStyleClass),n.qc("ngClass",n.tc(12,D))("@overlayAnimation",n.uc(16,z,n.vc(13,K,t.showTransitionOptions,t.hideTransitionOptions)))("ngStyle",t.panelStyle),n.Cb(1),n.qc("ngIf",t.showHeader),n.Cb(1),n.Jc("max-height",t.virtualScroll?"auto":t.scrollHeight||"auto"),n.Cb(2),n.qc("ngIf",!t.virtualScroll)("ngIfElse",e),n.Cb(3),n.qc("ngIf",t.filter&&t.visibleOptions&&0===t.visibleOptions.length),n.Cb(1),n.qc("ngIf",t.footerFacet)}}const q=[[["p-header"]],[["p-footer"]]],R=function(e,t,i){return{"ui-multiselect ui-widget ui-state-default ui-corner-all":!0,"ui-multiselect-open":e,"ui-state-focus":t,"ui-state-disabled":i}},W=function(){return{"ui-multiselect-trigger ui-state-default ui-corner-right":!0}},B=["p-header","p-footer"],M={provide:r.e,useExisting:Object(n.U)(()=>X),multi:!0};let N=(()=>{let e=class{constructor(){this.onClick=new n.n,this.onKeydown=new n.n}onOptionClick(e){this.onClick.emit({originalEvent:e,option:this.option})}onOptionKeydown(e){this.onKeydown.emit({originalEvent:e,option:this.option})}};return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Kb({type:e,selectors:[["p-multiSelectItem"]],inputs:{option:"option",selected:"selected",disabled:"disabled",visible:"visible",itemSize:"itemSize",template:"template",maxSelectionLimitReached:"maxSelectionLimitReached"},outputs:{onClick:"onClick",onKeydown:"onKeydown"},decls:6,vars:22,consts:[[1,"ui-multiselect-item","ui-corner-all",3,"ngStyle","ngClass","click","keydown"],[1,"ui-chkbox","ui-widget"],[1,"ui-chkbox-box","ui-widget","ui-corner-all","ui-state-default",3,"ngClass"],[1,"ui-chkbox-icon","ui-clickable",3,"ngClass"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(e,t){1&e&&(n.Wb(0,"li",0),n.ic("click",(function(e){return t.onOptionClick(e)}))("keydown",(function(e){return t.onOptionKeydown(e)})),n.Wb(1,"div",1),n.Wb(2,"div",2),n.Rb(3,"span",3),n.Vb(),n.Vb(),n.Kc(4,h,2,1,"span",4),n.Kc(5,p,1,0,"ng-container",5),n.Vb()),2&e&&(n.Jc("display",t.visible?"block":"none"),n.qc("ngStyle",n.uc(11,f,t.itemSize+"px"))("ngClass",n.vc(13,b,t.selected,t.option.disabled||t.maxSelectionLimitReached&&!t.selected)),n.Db("aria-label",t.option.label)("tabindex",t.option.disabled?null:"0"),n.Cb(2),n.qc("ngClass",n.uc(16,m,t.selected)),n.Cb(1),n.qc("ngClass",n.uc(18,g,t.selected)),n.Cb(1),n.qc("ngIf",!t.template),n.Cb(1),n.qc("ngTemplateOutlet",t.template)("ngTemplateOutletContext",n.uc(20,y,t.option)))},directives:[s.n,s.k,s.m,s.o],encapsulation:2}),e})(),X=(()=>{let e=class{constructor(e,t,i){this.el=e,this.renderer=t,this.cd=i,this.scrollHeight="200px",this._defaultLabel="Choose",this.filter=!0,this.displaySelectedLabel=!0,this.maxSelectedLabels=3,this.selectedItemsLabel="{0} items selected",this.showToggleAll=!0,this.emptyFilterMessage="No results found",this.resetFilterOnHide=!1,this.dropdownIcon="pi pi-chevron-down",this.showHeader=!0,this.autoZIndex=!0,this.baseZIndex=0,this.filterBy="label",this.showTransitionOptions="225ms ease-out",this.hideTransitionOptions="195ms ease-in",this.filterMatchMode="contains",this.tooltip="",this.tooltipPosition="right",this.tooltipPositionStyle="absolute",this.onChange=new n.n,this.onFocus=new n.n,this.onBlur=new n.n,this.onClick=new n.n,this.onPanelShow=new n.n,this.onPanelHide=new n.n,this.onModelChange=()=>{},this.onModelTouched=()=>{},this.disabledSelectedOptions=[]}set defaultLabel(e){this._defaultLabel=e,this.updateLabel()}get defaultLabel(){return this._defaultLabel}get options(){return this._options}set options(e){let t=this.optionLabel?a.b.generateSelectItems(e,this.optionLabel):e;this.visibleOptions=t,this._options=t,this.updateLabel(),this.filterValue&&this.filterValue.length&&this.activateFilter()}ngOnInit(){this.updateLabel()}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this.itemTemplate=e.template;break;case"selectedItems":this.selectedItemsTemplate=e.template;break;default:this.itemTemplate=e.template}})}ngAfterViewInit(){this.overlayVisible&&this.show()}ngAfterViewChecked(){this.filtered&&(this.alignOverlay(),this.filtered=!1)}writeValue(e){this.value=e,this.updateLabel(),this.updateFilledState(),this.setDisabledSelectedOptions(),this.checkSelectionLimit(),this.cd.markForCheck()}checkSelectionLimit(){this.selectionLimit&&this.value&&this.value.length===this.selectionLimit&&(this.maxSelectionLimitReached=!0)}updateFilledState(){this.filled=this.value&&this.value.length>0}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e}onOptionClick(e){let t=e.option;if(t.disabled)return;const i=t.value;let n=this.findSelectionIndex(i);-1!=n?(this.value=this.value.filter((e,t)=>t!=n),this.selectionLimit&&(this.maxSelectionLimitReached=!1)):((!this.selectionLimit||!this.value||this.value.length<this.selectionLimit)&&(this.value=[...this.value||[],i]),this.checkSelectionLimit()),this.onModelChange(this.value),this.onChange.emit({originalEvent:e.originalEvent,value:this.value,itemValue:i}),this.updateLabel(),this.updateFilledState()}isSelected(e){return-1!=this.findSelectionIndex(e)}findSelectionIndex(e){let t=-1;if(this.value)for(let i=0;i<this.value.length;i++)if(a.b.equals(this.value[i],e,this.dataKey)){t=i;break}return t}toggleAll(e){if(this.isAllChecked())if(this.disabledSelectedOptions&&this.disabledSelectedOptions.length>0){let e=[];e=[...this.disabledSelectedOptions],this.value=e}else this.value=[];else{let e=this.getVisibleOptions();if(e){let t=[];this.disabledSelectedOptions&&this.disabledSelectedOptions.length>0&&(t=[...this.disabledSelectedOptions]);for(let i=0;i<e.length;i++)e[i].disabled||t.push(e[i].value);this.value=t}}this.onModelChange(this.value),this.onChange.emit({originalEvent:e,value:this.value}),this.updateFilledState(),this.updateLabel()}isAllChecked(){if(this.filterValue&&this.filterValue.trim().length)return this.value&&this.visibleOptions&&this.visibleOptions.length&&this.isAllVisibleOptionsChecked();{let e=this.getEnabledOptionCount(),t=this.disabledSelectedOptions.length;return this.value&&this.options&&this.value.length>0&&this.value.length==e+t}}isAllVisibleOptionsChecked(){if(this.visibleOptions&&0!==this.visibleOptions.length){for(let e of this.visibleOptions)if(!this.isSelected(e.value))return!1;return!0}return!1}getEnabledOptionCount(){if(this.options){let e=0;for(let t of this.options)t.disabled||e++;return e}return 0}setDisabledSelectedOptions(){if(this.options&&(this.disabledSelectedOptions=[],this.value))for(let e of this.options)e.disabled&&this.isSelected(e.value)&&this.disabledSelectedOptions.push(e.value)}show(){this.overlayVisible||(this.overlayVisible=!0),this.filter&&setTimeout(()=>{null!=this.filterInputChild&&this.filterInputChild.nativeElement.focus()},200),this.bindDocumentClickListener()}onOverlayAnimationStart(e){switch(e.toState){case"visible":this.overlay=e.element,this.appendOverlay(),this.autoZIndex&&(this.overlay.style.zIndex=String(this.baseZIndex+ ++o.a.zindex)),this.alignOverlay(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.onPanelShow.emit();break;case"void":this.onOverlayHide()}}appendOverlay(){this.appendTo&&("body"===this.appendTo?document.body.appendChild(this.overlay):o.a.appendChild(this.overlay,this.appendTo),this.overlay.style.minWidth=o.a.getWidth(this.containerViewChild.nativeElement)+"px")}restoreOverlayAppend(){this.overlay&&this.appendTo&&this.el.nativeElement.appendChild(this.overlay)}alignOverlay(){this.overlay&&(this.appendTo?o.a.absolutePosition(this.overlay,this.containerViewChild.nativeElement):o.a.relativePosition(this.overlay,this.containerViewChild.nativeElement))}hide(){this.overlayVisible=!1,this.unbindDocumentClickListener(),this.resetFilterOnHide&&(this.filterInputChild.nativeElement.value="",this.onFilter()),this.onPanelHide.emit()}close(e){this.hide(),e.preventDefault(),e.stopPropagation()}onMouseclick(e,t){this.disabled||this.readonly||(this.onClick.emit(e),this.panelClick||(this.overlayVisible?this.hide():(t.focus(),this.show())),this.selfClick=!0)}onInputFocus(e){this.focus=!0,this.onFocus.emit({originalEvent:e})}onInputBlur(e){this.focus=!1,this.onBlur.emit({originalEvent:e}),this.onModelTouched()}onOptionKeydown(e){if(!this.readonly)switch(e.originalEvent.which){case 40:var t=this.findNextItem(e.originalEvent.target.parentElement);t&&t.focus(),e.originalEvent.preventDefault();break;case 38:var i=this.findPrevItem(e.originalEvent.target.parentElement);i&&i.focus(),e.originalEvent.preventDefault();break;case 13:this.onOptionClick(e),e.originalEvent.preventDefault()}}findNextItem(e){let t=e.nextElementSibling;return t?o.a.hasClass(t.children[0],"ui-state-disabled")||o.a.isHidden(t.children[0])?this.findNextItem(t):t.children[0]:null}findPrevItem(e){let t=e.previousElementSibling;return t?o.a.hasClass(t.children[0],"ui-state-disabled")||o.a.isHidden(t.children[0])?this.findPrevItem(t):t.children[0]:null}onKeydown(e){switch(e.which){case 40:!this.overlayVisible&&e.altKey&&this.show();break;case 32:this.overlayVisible||(this.show(),e.preventDefault());break;case 27:this.hide()}}updateLabel(){if(this.value&&this.options&&this.value.length&&this.displaySelectedLabel){let e="";for(let t=0;t<this.value.length;t++){let i=this.findLabelByValue(this.value[t]);i&&(e.length>0&&(e+=", "),e+=i)}if(this.value.length<=this.maxSelectedLabels)this.valuesAsString=e;else{let e=/{(.*?)}/;this.valuesAsString=e.test(this.selectedItemsLabel)?this.selectedItemsLabel.replace(this.selectedItemsLabel.match(e)[0],this.value.length+""):this.selectedItemsLabel}}else this.valuesAsString=this.defaultLabel}findLabelByValue(e){let t=null;for(let i=0;i<this.options.length;i++){let n=this.options[i];if(null==e&&null==n.value||a.b.equals(e,n.value,this.dataKey)){t=n.label;break}}return t}onFilter(){let e=this.filterInputChild.nativeElement.value;e&&e.length?(this.filterValue=e,this.activateFilter()):(this.filterValue=null,this.visibleOptions=this.options,this.filtered=!1)}activateFilter(){if(this.options&&this.options.length){let e=this.filterBy.split(",");this.visibleOptions=a.a.filter(this.options,e,this.filterValue,this.filterMatchMode),this.filtered=!0}}isItemVisible(e){if(!this.filterValue||!this.filterValue.trim().length)return!0;for(let t=0;t<this.visibleOptions.length;t++)if(this.visibleOptions[t].value==e.value)return!0}getVisibleOptions(){return this.visibleOptions||this.options}onHeaderCheckboxFocus(){this.headerCheckboxFocus=!0}onHeaderCheckboxBlur(){this.headerCheckboxFocus=!1}bindDocumentClickListener(){this.documentClickListener||(this.documentClickListener=this.renderer.listen("document","click",()=>{this.selfClick||this.panelClick||!this.overlayVisible||this.hide(),this.selfClick=!1,this.panelClick=!1,this.cd.markForCheck()}))}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){this.documentResizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.documentResizeListener)}unbindDocumentResizeListener(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)}onWindowResize(){o.a.isAndroid()||this.hide()}onOverlayHide(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.overlay=null}ngOnDestroy(){this.restoreOverlayAppend(),this.onOverlayHide()}};return e.\u0275fac=function(t){return new(t||e)(n.Qb(n.l),n.Qb(n.E),n.Qb(n.h))},e.\u0275cmp=n.Kb({type:e,selectors:[["p-multiSelect"]],contentQueries:function(e,t,i){var l;1&e&&(n.Hc(i,c.a,!0),n.Hc(i,c.b,!0),n.Ib(i,c.d,!1)),2&e&&(n.Ac(l=n.jc())&&(t.footerFacet=l.first),n.Ac(l=n.jc())&&(t.headerFacet=l.first),n.Ac(l=n.jc())&&(t.templates=l))},viewQuery:function(e,t){var i;1&e&&(n.Ic(v,!0),n.Qc(k,!0)),2&e&&(n.Ac(i=n.jc())&&(t.containerViewChild=i.first),n.Ac(i=n.jc())&&(t.filterInputChild=i.first))},hostVars:4,hostBindings:function(e,t){2&e&&n.Hb("ui-inputwrapper-filled",t.filled)("ui-inputwrapper-focus",t.focus)},inputs:{scrollHeight:"scrollHeight",filter:"filter",displaySelectedLabel:"displaySelectedLabel",maxSelectedLabels:"maxSelectedLabels",selectedItemsLabel:"selectedItemsLabel",showToggleAll:"showToggleAll",emptyFilterMessage:"emptyFilterMessage",resetFilterOnHide:"resetFilterOnHide",dropdownIcon:"dropdownIcon",showHeader:"showHeader",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",filterBy:"filterBy",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",filterMatchMode:"filterMatchMode",tooltip:"tooltip",tooltipPosition:"tooltipPosition",tooltipPositionStyle:"tooltipPositionStyle",defaultLabel:"defaultLabel",options:"options",disabled:"disabled",overlayVisible:"overlayVisible",style:"style",styleClass:"styleClass",panelStyle:"panelStyle",panelStyleClass:"panelStyleClass",inputId:"inputId",readonly:"readonly",filterPlaceHolder:"filterPlaceHolder",tabindex:"tabindex",appendTo:"appendTo",dataKey:"dataKey",name:"name",ariaLabelledBy:"ariaLabelledBy",selectionLimit:"selectionLimit",optionLabel:"optionLabel",virtualScroll:"virtualScroll",itemSize:"itemSize",ariaFilterLabel:"ariaFilterLabel",tooltipStyleClass:"tooltipStyleClass"},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur",onClick:"onClick",onPanelShow:"onPanelShow",onPanelHide:"onPanelHide"},features:[n.Bb([M])],ngContentSelectors:B,decls:12,vars:27,consts:[[3,"ngClass","ngStyle","click"],["container",""],[1,"ui-helper-hidden-accessible"],["type","text","readonly","readonly","aria-haspopup","listbox",3,"disabled","focus","blur","keydown"],["in",""],[1,"ui-multiselect-label-container",3,"pTooltip","tooltipPosition","positionStyle","tooltipStyleClass"],[1,"ui-multiselect-label","ui-corner-all"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass"],[1,"ui-multiselect-trigger-icon","ui-clickable",3,"ngClass"],[3,"ngClass","ngStyle","class","click","keydown",4,"ngIf"],[3,"ngClass","ngStyle","click","keydown"],["class","ui-widget-header ui-corner-all ui-multiselect-header ui-helper-clearfix",3,"ngClass",4,"ngIf"],[1,"ui-multiselect-items-wrapper"],["role","listbox","aria-multiselectable","true",1,"ui-multiselect-items","ui-multiselect-list","ui-widget-content","ui-widget","ui-corner-all","ui-helper-reset"],[4,"ngIf","ngIfElse"],["virtualScrollList",""],["class","ui-multiselect-empty-message",4,"ngIf"],["class","ui-multiselect-footer ui-widget-content",4,"ngIf"],[1,"ui-widget-header","ui-corner-all","ui-multiselect-header","ui-helper-clearfix",3,"ngClass"],["class","ui-chkbox ui-widget",4,"ngIf"],["class","ui-multiselect-filter-container",4,"ngIf"],["tabindex","0",1,"ui-multiselect-close","ui-corner-all",3,"click","keydown.enter"],[1,"pi","pi-times"],[1,"ui-chkbox","ui-widget"],["type","checkbox","readonly","readonly",3,"checked","focus","blur","keydown.space"],["role","checkbox",1,"ui-chkbox-box","ui-widget","ui-corner-all","ui-state-default",3,"ngClass","click"],[1,"ui-chkbox-icon","ui-clickable",3,"ngClass"],[1,"ui-multiselect-filter-container"],["type","text","role","textbox",1,"ui-inputtext","ui-widget","ui-state-default","ui-corner-all",3,"value","input"],["filterInput",""],[1,"ui-multiselect-filter-icon","pi","pi-search"],["ngFor","",3,"ngForOf"],[3,"option","selected","maxSelectionLimitReached","visible","template","onClick","onKeydown"],[3,"ngStyle","itemSize",4,"ngIf"],[3,"ngStyle","itemSize"],["viewport",""],[4,"cdkVirtualFor","cdkVirtualForOf"],[3,"option","selected","maxSelectionLimitReached","visible","template","itemSize","onClick","onKeydown"],[1,"ui-multiselect-empty-message"],[1,"ui-multiselect-footer","ui-widget-content"]],template:function(e,t){if(1&e){const e=n.Xb();n.pc(q),n.Wb(0,"div",0,1),n.ic("click",(function(i){n.Dc(e);const l=n.Bc(4);return t.onMouseclick(i,l)})),n.Wb(2,"div",2),n.Wb(3,"input",3,4),n.ic("focus",(function(e){return t.onInputFocus(e)}))("blur",(function(e){return t.onInputBlur(e)}))("keydown",(function(e){return t.onKeydown(e)})),n.Vb(),n.Vb(),n.Wb(5,"div",5),n.Wb(6,"span",6),n.Kc(7,C,2,1,"ng-container",7),n.Kc(8,w,1,0,"ng-container",8),n.Vb(),n.Vb(),n.Wb(9,"div",9),n.Rb(10,"span",10),n.Vb(),n.Kc(11,A,9,18,"div",11),n.Vb()}2&e&&(n.Eb(t.styleClass),n.qc("ngClass",n.wc(20,R,t.overlayVisible,t.focus,t.disabled))("ngStyle",t.style),n.Cb(3),n.qc("disabled",t.disabled),n.Db("id",t.inputId)("name",t.name)("tabindex",t.tabindex)("aria-expanded",t.overlayVisible)("aria-labelledby",t.ariaLabelledBy),n.Cb(2),n.qc("pTooltip",t.tooltip)("tooltipPosition",t.tooltipPosition)("positionStyle",t.tooltipPositionStyle)("tooltipStyleClass",t.tooltipStyleClass),n.Cb(2),n.qc("ngIf",!t.selectedItemsTemplate),n.Cb(1),n.qc("ngTemplateOutlet",t.selectedItemsTemplate)("ngTemplateOutletContext",n.uc(24,y,t.value)),n.Cb(1),n.qc("ngClass",n.tc(26,W)),n.Cb(1),n.qc("ngClass",t.dropdownIcon),n.Cb(1),n.qc("ngIf",t.overlayVisible))},directives:[s.k,s.n,d.a,s.m,s.o,s.l,N,u.c,u.a,u.b],encapsulation:2,data:{animation:[Object(l.m)("overlayAnimation",[Object(l.j)("void",Object(l.k)({transform:"translateY(5%)",opacity:0})),Object(l.j)("visible",Object(l.k)({transform:"translateY(0)",opacity:1})),Object(l.l)("void => visible",Object(l.e)("{{showTransitionParams}}")),Object(l.l)("visible => void",Object(l.e)("{{hideTransitionParams}}"))])]}}),e})(),Z=(()=>{let e=class{};return e.\u0275mod=n.Ob({type:e}),e.\u0275inj=n.Nb({factory:function(t){return new(t||e)},imports:[[s.c,c.e,u.d,d.b],c.e,u.d]}),e})()}}]);