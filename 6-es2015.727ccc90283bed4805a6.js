(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{cyGc:function(e,t,i){"use strict";i.r(t);var s=i("ofXK"),c=i("kt0X");const n={selectedItem:null,list:[],recentlyViewedItems:[],recentmostItem:null};var l=i("j9Al");const o={SetSelectedItem:Object(l.a)("[SetSelectedItem]"),SetPurpose:Object(l.a)("[SetPurpose]"),UpdateOrganizationPurpose:Object(l.a)("[UpdateOrganizationPurpose]"),SetRecentlyViewed:Object(l.a)("[SetRecentlyViewed]")};class r{constructor(e){this.payload=e,this.type=o.SetSelectedItem}}class a{constructor(e){this.payload=e,this.type=o.SetPurpose}}class b{constructor(e){this.payload=e,this.type=o.UpdateOrganizationPurpose}}var d=i("krUz");function p(e,t){switch(t.type){case o.SetSelectedItem:return Object.assign(Object.assign({},e),{selectedItem:t.payload});case o.SetPurpose:return Object.assign(Object.assign({},e),{list:t.payload});case o.UpdateOrganizationPurpose:{const i=t.payload||{};return Object.assign(Object.assign({},e),{list:e.list.map(e=>e.issueType===d.a.Organization?Object.assign(Object.assign({},e),{key:i.name,title:i.name,purpose:i.purpose}):e)})}case o.SetRecentlyViewed:return Object.assign(Object.assign({},e),{recentmostItem:t.payload});default:return e}}var u=i("fXoL"),h=i("pLZG"),f=i("yVuU"),g=i("6NWb"),m=i("tyNb"),I=i("l2bN");function k(e,t){if(1&e&&(u.Wb(0,"div",18),u.Wb(1,"h5",19),u.Kc(2),u.Vb(),u.Wb(3,"ngx-md"),u.Kc(4),u.Vb(),u.Vb()),2&e){const e=u.kc().$implicit;u.Cb(2),u.Mc(" ",e.title," "),u.Cb(2),u.Mc(" ",e.purpose," ")}}const C=function(e){return{"float-left":e}};function y(e,t){if(1&e&&(u.Wb(0,"div",7),u.Rb(1,"div",12),u.Wb(2,"div",15),u.Wb(3,"a",9),u.ic("click",(function(){const e=t.$implicit;return e.show=!e.show})),u.Rb(4,"fa-icon",10),u.Wb(5,"span",16),u.Kc(6),u.Vb(),u.Vb(),u.Vb(),u.Ic(7,k,5,2,"div",17),u.Vb()),2&e){const e=t.$implicit;u.pc("ngClass",u.tc(4,C,!e.show)),u.Cb(4),u.pc("icon",e.show?"chevron-down":"chevron-right"),u.Cb(2),u.Mc("",e.issueType," purpose"),u.Cb(1),u.pc("ngIf",e.show)}}const v=function(e){return{small:e}};function V(e,t){if(1&e){const e=u.Xb();u.Wb(0,"div",7),u.Wb(1,"div",8),u.Wb(2,"a",9),u.ic("click",(function(){u.Bc(e);const t=u.kc();return t.showHideAllPurposes(!t.showAll)})),u.Rb(3,"fa-icon",10),u.Vb(),u.Vb(),u.Ic(4,y,8,6,"div",11),u.Wb(5,"div",12),u.Kc(6,"\xa0"),u.Vb(),u.Wb(7,"a",13),u.Kc(8," Proceed to workbench "),u.Rb(9,"fa-icon",14),u.Vb(),u.Vb()}if(2&e){const e=u.kc();u.pc("ngClass",u.tc(3,v,e.fontSizeSmall)),u.Cb(3),u.pc("icon",e.showAll?"angle-double-down":"angle-double-right"),u.Cb(1),u.pc("ngForOf",e.purpose)}}let W=(()=>{class e{constructor(e,t){this.cachingService=e,this.store$=t,this.edit=new u.n,this.showAll=!1,this.hideExtendedFields=!1,this.fontSizeSmall=!1}ngOnInit(){this.selectedItem$=this.store$.select(e=>e.purpose.selectedItem).pipe(Object(h.a)(e=>e)).subscribe(e=>this.selectedItem=e),this.purpose$=this.store$.select(e=>e.purpose.list).pipe(Object(h.a)(e=>e)).subscribe(e=>{this.purpose=e})}ngOnDestroy(){this.purpose$&&this.purpose$.unsubscribe(),this.hierarchySetupVisibility$&&this.hierarchySetupVisibility$.unsubscribe(),this.selectedItem$&&this.selectedItem$.unsubscribe()}showHideAllPurposes(e){this.showAll=e,this.purpose&&(this.purpose.forEach(e=>e.show=this.showAll),!this.showAll&&this.purpose.length>0&&(this.purpose[this.purpose.length-1].show=!0))}}return e.\u0275fac=function(t){return new(t||e)(u.Qb(f.a),u.Qb(c.h))},e.\u0275cmp=u.Kb({type:e,selectors:[["app-purpose"]],outputs:{edit:"edit"},decls:9,vars:3,consts:[[1,"row"],[1,"col-md-10"],[3,"ngClass",4,"ngIf"],[1,"col-md-2"],[1,"sticky-title","text-right"],[1,"btn","btn-light","btn-sm","mr-2",3,"disabled","click"],[1,"btn","btn-light",3,"disabled","click"],[3,"ngClass"],[1,"border-0","pb-0","mb-2","float-left"],["title","Show/hide details",1,"btn","btn-light","btn-sm","text-muted","mr-2",3,"click"],["size","fw",3,"icon"],[3,"ngClass",4,"ngFor","ngForOf"],[1,"clearfix"],["routerLink","../workbench",1,"btn","btn-light","btn-sm","text-primary"],["icon","chevron-right","size","sm"],[1,"text-uppercase","text-muted"],[1,"small"],["class","ml-3 pl-3 pr-3 border-left","style","overflow:auto",4,"ngIf"],[1,"ml-3","pl-3","pr-3","border-left",2,"overflow","auto"],[1,"text-dark","font-weight-normal","mt-1"]],template:function(e,t){1&e&&(u.Wb(0,"div",0),u.Wb(1,"div",1),u.Ic(2,V,10,5,"div",2),u.Vb(),u.Wb(3,"div",3),u.Wb(4,"div",4),u.Wb(5,"button",5),u.ic("click",(function(){return t.fontSizeSmall=!0})),u.Kc(6,"A"),u.Vb(),u.Wb(7,"button",6),u.ic("click",(function(){return t.fontSizeSmall=!1})),u.Kc(8,"A"),u.Vb(),u.Vb(),u.Vb(),u.Vb()),2&e&&(u.Cb(2),u.pc("ngIf",t.purpose&&t.purpose.length>0),u.Cb(3),u.pc("disabled",t.fontSizeSmall),u.Cb(2),u.pc("disabled",!t.fontSizeSmall))},directives:[s.l,s.j,g.a,s.k,m.f,I.a],encapsulation:2}),e})();var w=i("sITn"),x=i("3Pt+"),j=i("jLSX"),S=i("LvDl"),O=i("itXk"),F=i("lJxs"),$=i("LvOF"),E=i("F2Ol");function T(e,t){if(1&e&&(u.Wb(0,"span",18),u.Kc(1),u.Vb()),2&e){const e=t.$implicit;u.Cb(1),u.Lc(e)}}function K(e,t){if(1&e&&(u.Wb(0,"div",15),u.Wb(1,"span",16),u.Kc(2,"FIX VERSION: "),u.Vb(),u.Ic(3,T,2,1,"span",17),u.Vb()),2&e){const e=u.kc(2);u.Cb(3),u.pc("ngForOf",e.selectedItem.fixVersions)}}function L(e,t){1&e&&(u.Wb(0,"a",19),u.Rb(1,"fa-icon",20),u.Kc(2," Storyboard "),u.Vb()),2&e&&u.pc("routerLinkActive","active")}const R=function(){return["fab","jira"]},z=function(){return["details"]},M=function(){return["far","lightbulb"]},P=function(){return["far","window-restore"]};function B(e,t){if(1&e&&(u.Wb(0,"div",2),u.Wb(1,"div",3),u.Wb(2,"div"),u.Ic(3,K,4,1,"div",4),u.Wb(4,"sub",5),u.Kc(5),u.Wb(6,"a",6),u.Rb(7,"fa-icon",7),u.Vb(),u.Vb(),u.Vb(),u.Wb(8,"h2",8),u.Kc(9),u.Wb(10,"sup",9),u.Kc(11),u.Vb(),u.Vb(),u.Wb(12,"div",10),u.Wb(13,"a",11),u.Rb(14,"fa-icon",12),u.Kc(15," Purpose "),u.Vb(),u.Wb(16,"a",13),u.Rb(17,"fa-icon",12),u.Kc(18," Workbench "),u.Vb(),u.Ic(19,L,3,1,"a",14),u.Vb(),u.Vb(),u.Vb()),2&e){const e=u.kc();u.Cb(3),u.pc("ngIf",e.selectedItem.fixVersions&&e.selectedItem.fixVersions.length>0),u.Cb(2),u.Nc(" ",e.selectedItem.issueType,": ",e.selectedItem.key," "),u.Cb(1),u.qc("href",e.prepareExternalUrl(e.selectedItem.key),u.Dc),u.Cb(1),u.pc("icon",u.sc(13,R)),u.Cb(2),u.Mc(" ",e.selectedItem.title," "),u.Cb(2),u.Mc(" ",e.selectedItem.status," "),u.Cb(2),u.pc("routerLink",u.sc(14,z))("routerLinkActive","active"),u.Cb(1),u.pc("icon",u.sc(15,M)),u.Cb(2),u.pc("routerLinkActive","active"),u.Cb(1),u.pc("icon",u.sc(16,P)),u.Cb(2),u.pc("ngIf",e.canNavigateToStoryboard())}}let N=(()=>{class e{constructor(e,t,i,s){this.activatedRoute=e,this.cachingService=t,this.jiraService=i,this.store$=s,this.currentIssueKey=""}ngOnInit(){this.localNodeType=d.a,this.organization$=this.store$.select(e=>e.app.organization).pipe(Object(h.a)(e=>e)).subscribe(e=>this.store$.dispatch(new b(e))),this.currentIssueKey$=this.store$.select(e=>e.app.currentIssueKey).pipe(Object(h.a)(e=>e&&e.length>0)).subscribe(e=>this.currentIssueKey=e),this.selectedItem$=this.store$.select(e=>e.purpose.selectedItem).pipe(Object(h.a)(e=>e)).subscribe(e=>this.selectedItem=e),this.epicChildrenLoadedQuery$=this.store$.select(e=>e.app.epicChildrenLoaded).pipe(Object(h.a)(e=>!0===e)),this.hierarchicalIssueQuery$=this.store$.select(e=>e.app.hierarchicalIssue).pipe(Object(h.a)(e=>e)),this.paramsQuery$=this.activatedRoute.params.pipe(Object(h.a)(e=>e&&e.selected&&e.selected.length>0),Object(F.a)(e=>e.selected)),this.projectsQuery$=this.store$.select(e=>e.app.projects).pipe(Object(h.a)(e=>e)),this.combined$=Object(O.a)(this.hierarchicalIssueQuery$,this.paramsQuery$,this.projectsQuery$,this.epicChildrenLoadedQuery$).subscribe(([e,t,i,s])=>{this.selectItem(i,e,t,s)})}selectItem(e,t,i,s){this.projects=e;const c=Object(d.p)(t,d.a.Project),n=Object(d.q)(t,i);if(c&&n){n.extendedFields=Object($.a)(this.projects,c.key,n.issueType);const t=S.map(n.extendedFields,"id");this.jiraService.getIssueDetails(i,t).pipe(Object(h.a)(e=>null!=e&&e.fields)).subscribe(t=>{Object(d.e)(Object(d.m)(t),n),n.extendedFields=S.map(n.extendedFields,e=>(e.value=t.fields[e.id],e));const i=S.concat(d.o,["extendedFields","children"]),s=S.pick(n,i);s.project=S.find(e,{key:s.project.key}),this.store$.dispatch(new r(s))})}setTimeout(()=>this.markIssueSelected(n),500)}ngOnDestroy(){this.epicChildrenLoaded$&&this.epicChildrenLoaded$.unsubscribe(),this.organization$&&this.organization$.unsubscribe(),this.combined$&&this.combined$.unsubscribe(),this.selectedItem$&&this.selectedItem$.unsubscribe(),this.currentIssueKey$&&this.currentIssueKey$.unsubscribe()}markIssueSelected(e){if(e)if(this.projects&&e.project&&(e.extendedFields=Object($.a)(this.projects,e.project.key,e.issueType)),!e.parent||e.parent.issueType!==d.a.RelatedLink||e.description&&0!==e.description.length)this.expandPurpose(e);else{const t=S.map(e.extendedFields,"id");this.jiraService.getIssueDetails(e.key,t).pipe(Object(h.a)(e=>null!=e)).subscribe(t=>{const i=Object(d.m)(t);i&&Object(d.e)(i,e),e.extendedFields=S.map(e.extendedFields,e=>(e.value=t.fields[e.id],e)),this.expandPurpose(e)})}}expandPurpose(e){this.purpose=[],this.populatePurpose(e),S.reverse(this.purpose),this.purpose.length>0&&(this.purpose[this.purpose.length-1].show=!0),this.store$.dispatch(new a(this.purpose))}populatePurpose(e){e&&(e.issueType!==d.a.EpicChildren&&e.issueType!==d.a.RelatedLink&&this.purpose.push({key:e.key,issueType:e.issueType,title:e.title,purpose:e.description,editable:e.editable,hfKey:e.hfKey,show:!1}),e.parent&&this.populatePurpose(e.parent))}canNavigateToStoryboard(){return this.selectedItem&&("Epic"===this.selectedItem.issueType||this.currentIssueKey.toLowerCase()===this.selectedItem.key.toLowerCase())}prepareExternalUrl(e){const t=this.cachingService.getConnectionDetails();return t&&t.serverUrl&&t.serverUrl.length>0?`${t.serverUrl}/browse/${e}`:""}}return e.\u0275fac=function(t){return new(t||e)(u.Qb(m.a),u.Qb(f.a),u.Qb(E.b),u.Qb(c.h))},e.\u0275cmp=u.Kb({type:e,selectors:[["app-container"]],decls:4,vars:1,consts:[[1,"pt-0","pr-3","pb-2","pl-3"],["class","pb-3",4,"ngIf"],[1,"pb-3"],[1,"border-bottom"],["class","float-right small mt-1",4,"ngIf"],[1,"text-uppercase","mr-2"],["target","_blank","title","View in jira",1,"ml-1",3,"href"],[1,"text-primary",3,"icon"],[1,"font-weight-light","mb-0"],[1,"badge","badge-light","text-uppercase","text-muted",2,"font-size","small"],[1,"pb-0"],["title","View purpose",1,"btn","btn-link","mr-1","pl-0",3,"routerLink","routerLinkActive"],["size","sm",3,"icon"],["routerLink","workbench",1,"btn","btn-link","mr-1",3,"routerLinkActive"],["class","btn btn-link mr-1","routerLink","storyboard",3,"routerLinkActive",4,"ngIf"],[1,"float-right","small","mt-1"],[1,"small","text-muted"],["class","badge badge-light ml-1",4,"ngFor","ngForOf"],[1,"badge","badge-light","ml-1"],["routerLink","storyboard",1,"btn","btn-link","mr-1",3,"routerLinkActive"],["icon","map","size","sm"]],template:function(e,t){1&e&&(u.Wb(0,"div",0),u.Ic(1,B,20,17,"div",1),u.Wb(2,"div"),u.Rb(3,"router-outlet"),u.Vb(),u.Vb()),2&e&&(u.Cb(1),u.pc("ngIf",t.selectedItem))},directives:[s.l,m.h,g.a,m.f,m.e,s.k],encapsulation:2}),e})();var A=i("1kSV"),Q=i("cdP3");function X(e,t){1&e&&(u.Wb(0,"div"),u.Rb(1,"fa-icon",3),u.Kc(2," There are no extended fields/attributes for this record. "),u.Vb())}const D=function(e){return{small:e}};function U(e,t){if(1&e&&(u.Wb(0,"div",6),u.Wb(1,"div",7),u.Kc(2),u.Vb(),u.Wb(3,"div",8),u.Wb(4,"ngx-md"),u.Kc(5),u.Vb(),u.Vb(),u.Vb()),2&e){const e=t.$implicit,i=u.kc(3);u.Cb(2),u.Lc(e.name),u.Cb(1),u.pc("ngClass",u.tc(3,D,i.fontSizeSmall)),u.Cb(2),u.Mc(" ",e.value," ")}}function H(e,t){if(1&e&&(u.Wb(0,"div",4),u.Ic(1,U,6,5,"div",5),u.Vb()),2&e){const e=u.kc(2);u.Cb(1),u.pc("ngForOf",e.issue.extendedFields)}}function q(e,t){if(1&e&&(u.Wb(0,"div"),u.Wb(1,"ngx-md"),u.Kc(2),u.Vb(),u.Ic(3,X,3,0,"div",0),u.Wb(4,"div",1),u.Ic(5,H,2,1,"div",2),u.Vb(),u.Vb()),2&e){const e=u.kc();u.Cb(2),u.Mc(" ",e.issue.description," "),u.Cb(1),u.pc("ngIf",!e.issue.extendedFields||0===e.issue.extendedFields.length),u.Cb(2),u.pc("ngIf",e.issue.extendedFields&&e.issue.extendedFields.length>0)}}let J=(()=>{class e{constructor(){this.fontSizeSmall=!1}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u.Kb({type:e,selectors:[["app-extended-fields"]],inputs:{issue:"issue"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"alert","bg-light","small"],["class","list-group list-group-flush list-group-flush-compact bg-light",4,"ngIf"],["icon","exclamation-triangle",1,"text-info"],[1,"list-group","list-group-flush","list-group-flush-compact","bg-light"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"],[1,"small","text-uppercase","mb-2"],[1,"ml-4",3,"ngClass"]],template:function(e,t){1&e&&u.Ic(0,q,6,3,"div",0),2&e&&u.pc("ngIf",t.issue)},directives:[s.l,I.a,g.a,s.k,s.j],encapsulation:2}),e})();function G(e,t){if(1&e){const e=u.Xb();u.Wb(0,"div",3),u.Wb(1,"button",4),u.ic("click",(function(){return u.Bc(e),u.kc(2).onClose()})),u.Rb(2,"fa-icon",5),u.Vb(),u.Wb(3,"span",6),u.Wb(4,"span",7),u.Kc(5),u.Vb(),u.Kc(6),u.Vb(),u.Vb()}if(2&e){const e=u.kc(2);u.Cb(5),u.Mc("",e.issue.key,":"),u.Cb(1),u.Mc(" ",e.issue.title,"")}}function _(e,t){if(1&e){const e=u.Xb();u.Wb(0,"button",18),u.ic("click",(function(){return u.Bc(e),u.kc(3).showHideExtendedFields()})),u.Rb(1,"fa-icon",19),u.Vb()}if(2&e){const e=u.kc(3);u.Cb(1),u.pc("fixedWidth",!0)("icon",e.hideExtendedFields?"angle-double-right":"angle-double-down")}}function Y(e,t){if(1&e&&(u.Wb(0,"span",7),u.Kc(1),u.Vb()),2&e){const e=u.kc(3);u.Cb(1),u.Mc(" ",e.filteredItems.length," ")}}function Z(e,t){if(1&e){const e=u.Xb();u.Wb(0,"button",20),u.ic("click",(function(){u.Bc(e);const t=u.kc(3);return t.tasklistFilterVisible=!t.tasklistFilterVisible})),u.Rb(1,"fa-icon",21),u.Vb()}if(2&e){const e=u.kc(3);u.Cb(1),u.pc("icon",e.tasklistFilterVisible?"chevron-up":"filter")}}function ee(e,t){if(1&e&&(u.Wb(0,"option",26),u.Kc(1),u.Vb()),2&e){const e=t.$implicit;u.pc("value",e.key),u.Cb(1),u.Mc(" ",e.key+" ("+e.count+")","")}}function te(e,t){if(1&e){const e=u.Xb();u.Wb(0,"div",22),u.Wb(1,"select",23),u.ic("ngModelChange",(function(t){return u.Bc(e),u.kc(3).issueTypeFilter=t}))("change",(function(){return u.Bc(e),u.kc(3).onFilterChanged()})),u.Wb(2,"option",24),u.Kc(3,"ISSUE TYPE: All"),u.Vb(),u.Ic(4,ee,2,2,"option",25),u.Vb(),u.Vb()}if(2&e){const e=u.kc(3);u.Cb(1),u.pc("ngModel",e.issueTypeFilter),u.Cb(3),u.pc("ngForOf",e.issueTypeStats)}}function ie(e,t){if(1&e&&(u.Wb(0,"option",26),u.Kc(1),u.Vb()),2&e){const e=t.$implicit;u.pc("value",e.key),u.Cb(1),u.Mc(" ",e.key+" ("+e.count+")","")}}function se(e,t){if(1&e){const e=u.Xb();u.Wb(0,"div",22),u.Wb(1,"select",23),u.ic("ngModelChange",(function(t){return u.Bc(e),u.kc(3).statusFilter=t}))("change",(function(){return u.Bc(e),u.kc(3).onFilterChanged()})),u.Wb(2,"option",24),u.Kc(3,"STATUS: All"),u.Vb(),u.Ic(4,ie,2,2,"option",25),u.Vb(),u.Vb()}if(2&e){const e=u.kc(3);u.Cb(1),u.pc("ngModel",e.statusFilter),u.Cb(3),u.pc("ngForOf",e.statusStats)}}function ce(e,t){if(1&e){const e=u.Xb();u.Wb(0,"button",34),u.ic("click",(function(){u.Bc(e);const t=u.kc().$implicit;return t.hideExtendedFields=!t.hideExtendedFields})),u.Rb(1,"fa-icon",19),u.Vb()}if(2&e){const e=u.kc().$implicit;u.Cb(1),u.pc("fixedWidth",!0)("icon",e.hideExtendedFields?"angle-right":"angle-down")}}function ne(e,t){if(1&e&&(u.Wb(0,"tr"),u.Wb(1,"td",38),u.Kc(2),u.Vb(),u.Wb(3,"td",39),u.Kc(4),u.Vb(),u.Vb()),2&e){const e=t.$implicit;u.Cb(2),u.Mc("",e.name,":"),u.Cb(2),u.Mc(" ",e.value," ")}}function le(e,t){if(1&e&&(u.Wb(0,"div",35),u.Wb(1,"table",36),u.Ic(2,ne,5,2,"tr",37),u.Vb(),u.Vb()),2&e){const e=u.kc().$implicit;u.Cb(2),u.pc("ngForOf",e.extendedFields)}}function oe(e,t){if(1&e&&(u.Wb(0,"div",27),u.Ic(1,ce,2,2,"button",28),u.Wb(2,"small",29),u.Kc(3),u.Vb(),u.Wb(4,"small",30),u.Wb(5,"span",31),u.Kc(6),u.Vb(),u.Kc(7),u.Vb(),u.Wb(8,"div",32),u.Wb(9,"div"),u.Kc(10),u.Vb(),u.Ic(11,le,3,1,"div",33),u.Vb(),u.Vb()),2&e){const e=t.$implicit,i=u.kc(3);u.Cb(1),u.pc("ngIf",i.hasExtendedFields),u.Cb(2),u.Lc(e.status),u.Cb(3),u.Lc(e.issueType),u.Cb(1),u.Mc(" :",e.key," "),u.Cb(3),u.Lc(e.title),u.Cb(1),u.pc("ngIf",!e.hideExtendedFields&&e.extendedFields&&e.extendedFields.length>0)}}function re(e,t){if(1&e&&(u.Wb(0,"div"),u.Wb(1,"div",8),u.Wb(2,"div",9),u.Wb(3,"div",10),u.Ic(4,_,2,2,"button",11),u.Wb(5,"b",12),u.Ic(6,Y,2,1,"span",13),u.Kc(7),u.Vb(),u.Ic(8,Z,2,1,"button",14),u.Vb(),u.Wb(9,"div",15),u.Ic(10,te,5,2,"div",16),u.Ic(11,se,5,2,"div",16),u.Vb(),u.Vb(),u.Ic(12,oe,12,6,"div",17),u.Vb(),u.Vb()),2&e){const e=u.kc(2);u.Cb(4),u.pc("ngIf",e.hasExtendedFields),u.Cb(2),u.pc("ngIf",e.filteredItems.length>0),u.Cb(1),u.Mc(" record",e.filteredItems.length>1?"s":"",""),u.Cb(1),u.pc("ngIf",e.issueTypeStats&&e.issueTypeStats.length>1||e.statusStats&&e.statusStats.length>1),u.Cb(1),u.pc("ngbCollapse",!e.tasklistFilterVisible),u.Cb(1),u.pc("ngIf",e.issueTypeStats&&e.issueTypeStats.length>1),u.Cb(1),u.pc("ngIf",e.statusStats&&e.statusStats.length>1),u.Cb(1),u.pc("ngForOf",e.filteredItems)}}function ae(e,t){1&e&&(u.Wb(0,"div",40),u.Kc(1," No detail records found. "),u.Vb())}function be(e,t){if(1&e&&(u.Wb(0,"div"),u.Ic(1,G,7,2,"div",1),u.Ic(2,re,13,8,"div",0),u.Ic(3,ae,2,0,"div",2),u.Vb()),2&e){const e=u.kc();u.Cb(1),u.pc("ngIf",e.showIssue),u.Cb(1),u.pc("ngIf",e.filteredItems&&e.filteredItems.length>0),u.Cb(1),u.pc("ngIf",e.filteredItems&&0===e.filteredItems.length)}}let de=(()=>{class e{constructor(e,t,i){this.jiraService=e,this.cachingService=t,this.store$=i,this.close=new u.n,this.tasklistFilterVisible=!1,this.childIssueType="",this.hasExtendedFields=!1,this.showDetails=!1,this.hideExtendedFields=!0,this.statusFilter="all",this.issueTypeFilter="all"}set issue(e){this._issue=e,this.loadDetails()}get issue(){return this._issue}ngOnInit(){this.currentProject$=this.store$.select(e=>e.app.currentProjectUpdated).subscribe(e=>this.loadDetails())}ngOnDestroy(){this.currentProject$&&this.currentProject$.unsubscribe()}loadDetails(){if(this.issue&&this.issue.project&&this.issue.project.subTaskIssueTypes&&this.issue.project.subTaskIssueTypes.length>0){const e=S.join(S.map(this.issue.project.subTaskIssueTypes,e=>`'${e.name}'`),","),t=S.spread(S.union)(S.map(this.issue.project.subTaskIssueTypes,"list"));this.hasExtendedFields=t&&t.length>0;const i=S.map(t,"id");this.jiraService.executeJql(`issuetype in (${e}) AND parent=${this.issue.key}`,0,100,i,"test-cases.json").pipe(Object(h.a)(e=>e&&e.issues)).subscribe(e=>{this.childItems=Object(d.h)(e.issues),this.childItems.forEach(e=>e.hideExtendedFields=this.hideExtendedFields),Object(d.c)(this.childItems,t),this.onFilterChanged(),this.populateStatistics()})}}populateStatistics(){const e=S.mapValues(S.groupBy(S.map(this.childItems,"status")),e=>e.length);this.statusStats=Object.keys(e).map(t=>({key:t,count:e[t]}));const t=S.mapValues(S.groupBy(S.map(this.childItems,"issueType")),e=>e.length);this.issueTypeStats=Object.keys(t).map(e=>({key:e,count:t[e]}))}onFilterChanged(){this.filteredItems=S.filter(this.childItems,e=>!(this.statusFilter&&"all"!==this.statusFilter&&e.status!==this.statusFilter||this.issueTypeFilter&&"all"!==this.issueTypeFilter&&e.issueType!==this.issueTypeFilter)),this.filteredItems=S.orderBy(this.filteredItems,["issueType","status"])}showHideExtendedFields(){this.hideExtendedFields=!this.hideExtendedFields,this.childItems&&this.childItems.forEach(e=>e.hideExtendedFields=this.hideExtendedFields)}onClose(){this.close.emit(!0)}}return e.\u0275fac=function(t){return new(t||e)(u.Qb(E.b),u.Qb(f.a),u.Qb(c.h))},e.\u0275cmp=u.Kb({type:e,selectors:[["app-task-list"]],inputs:{issue:"issue",showIssue:"showIssue"},outputs:{close:"close"},decls:1,vars:1,consts:[[4,"ngIf"],["class","alert bg-light pl-0 mb-0","style","font-size:medium;",4,"ngIf"],["class","alert alert-warning",4,"ngIf"],[1,"alert","bg-light","pl-0","mb-0",2,"font-size","medium"],[1,"btn","btn-sm","btn-link","mr-2",3,"click"],["icon","chevron-left","size","lg"],[1,"pt-2"],[1,"mr-1"],[1,"list-group","list-group-flush","list-group-flush-compact"],[1,"list-group-item","list-group-item-light"],[1,"clearfix"],["class","btn btn-sm btn-link text-muted pl-0","title","Show/hide details",3,"click",4,"ngIf"],[1,"mt-1"],["class","mr-1",4,"ngIf"],["class","btn btn-link btn-sm float-right","title","Filters",3,"click",4,"ngIf"],[1,"row","ml-3",3,"ngbCollapse"],["class","col-md-6",4,"ngIf"],["class","list-group-item",4,"ngFor","ngForOf"],["title","Show/hide details",1,"btn","btn-sm","btn-link","text-muted","pl-0",3,"click"],["size","sm",3,"fixedWidth","icon"],["title","Filters",1,"btn","btn-link","btn-sm","float-right",3,"click"],["size","sm",3,"icon"],[1,"col-md-6"],[1,"form-control","form-control-sm",3,"ngModel","ngModelChange","change"],["value","all"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"list-group-item"],["class","btn btn-link btn-sm text-muted pl-0 pt-0","title","Show/hide details",3,"click",4,"ngIf"],[1,"float-right","badge","badge-light","font-weight-light","text-uppercase"],[1,"text-muted"],[1,"text-uppercase"],[1,"ml-4",2,"margin-top","-4pt"],["style","overflow: auto;","class","alert mt-2 p-0 rounded-0 border-0",4,"ngIf"],["title","Show/hide details",1,"btn","btn-link","btn-sm","text-muted","pl-0","pt-0",3,"click"],[1,"alert","mt-2","p-0","rounded-0","border-0",2,"overflow","auto"],[1,"table","table-small","m-0","border-0","bg-light","extended-fields"],[4,"ngFor","ngForOf"],["width","10%",1,"p-1","text-nowrap","text-muted"],["Markdown","",1,"p-1","text-dark"],[1,"alert","alert-warning"]],template:function(e,t){1&e&&u.Ic(0,be,4,3,"div",0),2&e&&u.pc("ngIf",t.issue)},directives:[s.l,g.a,A.b,s.k,x.k,x.f,x.i,x.j,x.l,I.a],encapsulation:2}),e})();const pe=["content"];function ue(e,t){if(1&e&&u.Rb(0,"app-extended-fields",15),2&e){const e=u.kc(2);u.pc("issue",e.issue)}}function he(e,t){1&e&&(u.Wb(0,"div",21),u.Kc(1," There are no issues in this epic "),u.Vb())}function fe(e,t){if(1&e){const e=u.Xb();u.Wb(0,"div",29),u.Wb(1,"div",30),u.Kc(2),u.Vb(),u.Rb(3,"i",31),u.Wb(4,"a",32),u.ic("click",(function(){u.Bc(e);const i=t.$implicit;return u.kc(8).selectEpicIssue(i)})),u.Kc(5),u.Vb(),u.Kc(6),u.Vb()}if(2&e){const e=t.$implicit;u.Cb(2),u.Mc(" ",e.duedate," "),u.Cb(1),u.Eb(e.icon),u.Cb(2),u.Lc(e.key),u.Cb(1),u.Mc(" ",e.title," ")}}function ge(e,t){if(1&e&&(u.Wb(0,"div",27),u.Ic(1,fe,7,5,"div",28),u.Vb()),2&e){const e=u.kc().$implicit;u.Cb(1),u.pc("ngForOf",e.children)}}const me=function(e){return{"w-100 btn-light ":e}};function Ie(e,t){if(1&e&&(u.Wb(0,"div"),u.Wb(1,"div",23),u.Wb(2,"button",24),u.ic("click",(function(){const e=t.$implicit;return e.visible=!e.visible})),u.Rb(3,"fa-icon",17),u.Wb(4,"span",25),u.Kc(5),u.Vb(),u.Vb(),u.Vb(),u.Ic(6,ge,2,1,"div",26),u.Vb()),2&e){const e=t.$implicit;u.Cb(2),u.pc("ngClass",u.tc(6,me,e.visible)),u.Cb(1),u.pc("icon",e.visible?"angle-down":"angle-right")("fixedWidth",!0),u.Cb(2),u.Nc("",e.label," / ",e.total,""),u.Cb(1),u.pc("ngIf",e.visible)}}function ke(e,t){if(1&e&&(u.Wb(0,"div"),u.Ic(1,Ie,7,8,"div",22),u.Vb()),2&e){const e=u.kc(5);u.Cb(1),u.pc("ngForOf",e.groupedEpicChildren)}}function Ce(e,t){if(1&e){const e=u.Xb();u.Wb(0,"div"),u.Wb(1,"app-task-list",33),u.ic("close",(function(){return u.Bc(e),u.kc(5).resetSelectedEpicIssue()})),u.Vb(),u.Vb()}if(2&e){const e=u.kc(5);u.Cb(1),u.pc("issue",e.selectedEpicIssue)("showIssue",!0)}}function ye(e,t){if(1&e&&(u.Wb(0,"div"),u.Ic(1,ke,2,1,"div",20),u.Ic(2,Ce,2,2,"div",20),u.Vb()),2&e){const e=u.kc(4);u.Cb(1),u.pc("ngIf",!e.selectedEpicIssue),u.Cb(1),u.pc("ngIf",e.selectedEpicIssue)}}function ve(e,t){if(1&e&&(u.Wb(0,"div",18),u.Ic(1,he,2,0,"div",19),u.Ic(2,ye,3,2,"div",20),u.Vb()),2&e){const e=u.kc(3);u.Cb(1),u.pc("ngIf",e.groupedEpicChildren&&0===e.groupedEpicChildren.length),u.Cb(1),u.pc("ngIf",e.groupedEpicChildren&&e.groupedEpicChildren.length>0)}}function Ve(e,t){if(1&e){const e=u.Xb();u.Wb(0,"li",11),u.Wb(1,"a",16),u.ic("click",(function(){return u.Bc(e),u.kc(2).toggleAllEpicChildren()})),u.Rb(2,"fa-icon",17),u.Kc(3," Issues in this epic "),u.Vb(),u.Ic(4,ve,3,2,"ng-template",13),u.Vb()}if(2&e){const e=u.kc(2);u.pc("ngbNavItem",1),u.Cb(2),u.pc("icon",e.allEpicChildrenVisible?"angle-double-down":"angle-double-right")("fixedWidth",!0)}}function We(e,t){if(1&e&&(u.Wb(0,"span"),u.Kc(1),u.Vb()),2&e){const e=u.kc(2).$implicit;u.Cb(1),u.Mc(" / ",e.children.length,"")}}function we(e,t){if(1&e){const e=u.Xb();u.Wb(0,"div",35),u.Wb(1,"div",30),u.Kc(2),u.Vb(),u.Rb(3,"i",31),u.Wb(4,"a",32),u.ic("click",(function(){u.Bc(e);const i=t.$implicit;return u.kc(8).selectRelatedIssue(i)})),u.Kc(5),u.Vb(),u.Kc(6),u.Vb()}if(2&e){const e=t.$implicit;u.pc("title",e.issueType),u.Cb(2),u.Mc(" ",e.status," "),u.Cb(1),u.Eb(e.icon),u.Cb(2),u.Lc(e.key),u.Cb(1),u.Mc(" ",e.title," ")}}function xe(e,t){if(1&e&&(u.Wb(0,"div",27),u.Ic(1,we,7,6,"div",34),u.Vb()),2&e){const e=u.kc(2).$implicit;u.Cb(1),u.pc("ngForOf",e.children)}}function je(e,t){if(1&e){const e=u.Xb();u.Ub(0),u.Wb(1,"div",23),u.Wb(2,"button",24),u.ic("click",(function(){u.Bc(e);const t=u.kc().$implicit;return t.visible=!t.visible})),u.Rb(3,"fa-icon",17),u.Wb(4,"span",25),u.Kc(5),u.Ic(6,We,2,1,"span",20),u.Vb(),u.Vb(),u.Vb(),u.Ic(7,xe,2,1,"div",26),u.Tb()}if(2&e){const e=u.kc().$implicit;u.Cb(2),u.pc("ngClass",u.tc(6,me,e.visible)),u.Cb(1),u.pc("icon",e.visible?"angle-down":"angle-right")("fixedWidth",!0),u.Cb(2),u.Mc("",e.label," "),u.Cb(1),u.pc("ngIf",e.children),u.Cb(1),u.pc("ngIf",e.visible)}}function Se(e,t){if(1&e&&(u.Wb(0,"div"),u.Ic(1,je,8,8,"ng-container",20),u.Vb()),2&e){const e=t.$implicit,i=u.kc(5);u.Cb(1),u.pc("ngIf",e.issueType!==i.localNodeType.EpicChildren)}}function Oe(e,t){if(1&e&&(u.Wb(0,"div"),u.Ic(1,Se,2,1,"div",22),u.Vb()),2&e){const e=u.kc(4);u.Cb(1),u.pc("ngForOf",e.issue.children)}}function Fe(e,t){if(1&e){const e=u.Xb();u.Wb(0,"div"),u.Wb(1,"app-task-list",33),u.ic("close",(function(){return u.Bc(e),u.kc(4).resetSelectedRelatedIssue()})),u.Vb(),u.Vb()}if(2&e){const e=u.kc(4);u.Cb(1),u.pc("issue",e.selectedRelatedIssue)("showIssue",!0)}}function $e(e,t){if(1&e&&(u.Wb(0,"div",18),u.Ic(1,Oe,2,1,"div",20),u.Ic(2,Fe,2,2,"div",20),u.Vb()),2&e){const e=u.kc(3);u.Cb(1),u.pc("ngIf",!e.selectedRelatedIssue),u.Cb(1),u.pc("ngIf",e.selectedRelatedIssue)}}function Ee(e,t){if(1&e){const e=u.Xb();u.Wb(0,"li",11),u.Wb(1,"a",16),u.ic("click",(function(){return u.Bc(e),u.kc(2).toggleAllRelatedIssues()})),u.Rb(2,"fa-icon",17),u.Kc(3," Related "),u.Vb(),u.Ic(4,$e,3,2,"ng-template",13),u.Vb()}if(2&e){const e=u.kc(2);u.pc("ngbNavItem",2),u.Cb(2),u.pc("icon",e.allRelatedIssuesVisible?"angle-double-down":"angle-double-right")("fixedWidth",!0)}}function Te(e,t){if(1&e&&(u.Wb(0,"div",18),u.Rb(1,"app-task-list",36),u.Vb()),2&e){const e=u.kc(2);u.Cb(1),u.pc("issue",e.issue)("showIssue",!1)}}const Ke=function(e){return{"mr-3":e}};function Le(e,t){if(1&e){const e=u.Xb();u.Wb(0,"as-split",2),u.ic("gutterDblClick",(function(){return u.Bc(e),u.kc().toggleFullscreen()}))("dragEnd",(function(t){return u.Bc(e),u.kc().dragEnd(t)})),u.Wb(1,"as-split-area",3),u.Ic(2,ue,1,1,"app-extended-fields",4),u.Vb(),u.Wb(3,"as-split-area",5),u.Wb(4,"button",6),u.ic("click",(function(){return u.Bc(e),u.kc().toggleFullscreen()})),u.Rb(5,"fa-icon",7),u.Vb(),u.Wb(6,"ul",8,9),u.ic("activeIdChange",(function(t){return u.Bc(e),u.kc().selectedTab=t})),u.Ic(8,Ve,5,3,"li",10),u.Ic(9,Ee,5,3,"li",10),u.Wb(10,"li",11),u.Wb(11,"a",12),u.Kc(12,"Task breakup"),u.Vb(),u.Ic(13,Te,2,2,"ng-template",13),u.Vb(),u.Vb(),u.Rb(14,"div",14),u.Vb(),u.Vb()}if(2&e){const e=u.Ac(7),t=u.kc();u.Cb(1),u.pc("size",t.columns[0].size),u.Cb(1),u.pc("ngIf",t.leftPaneSize>0),u.Cb(1),u.pc("size",t.columns[1].size),u.Cb(1),u.pc("ngClass",u.tc(12,Ke,0===t.columns[0].size)),u.Cb(1),u.pc("icon",0===t.columns[0].size?"compress-arrows-alt":"expand-arrows-alt")("fixedWidth",!0),u.Cb(1),u.pc("activeId",t.selectedTab)("destroyOnHide",!1),u.Cb(2),u.pc("ngIf",t.issue.issueType===t.localNodeType.Epic),u.Cb(1),u.pc("ngIf",t.issue.hasRelatedLinks),u.Cb(1),u.pc("ngbNavItem",3),u.Cb(4),u.pc("ngbNavOutlet",e)}}let Re=(()=>{class e{constructor(e,t){this.cdRef=e,this.store$=t,this.allRelatedIssuesVisible=!1,this.allEpicChildrenVisible=!1,this.contentHeight=0,this.selectedTab=1,this.leftPaneSize=60,this.columns=[{visible:!0,size:60},{visible:!0,size:40}],this.resetSelectedRelatedIssue=()=>this.selectedRelatedIssue=null,this.resetSelectedEpicIssue=()=>this.selectedEpicIssue=null,this.localNodeType=d.a}ngOnInit(){const e=this.store$.select(e=>e.purpose.selectedItem).pipe(Object(h.a)(e=>e)),t=this.store$.select(e=>e.app.epicChildrenLoaded).pipe(Object(h.a)(e=>!0===e));this.combined$=Object(O.a)(e,t).subscribe(([e,t])=>{this.issue=e;const i=S.filter(this.issue.children,{issueType:d.a.RelatedLink});this.issue.hasRelatedLinks=i&&i.length>0,this.selectedTab=this.issue.hasRelatedLinks?2:3,this.issue.issueType===d.a.Epic&&this.groupEpicChildren("status")})}toggleAllRelatedIssues(){this.allRelatedIssuesVisible=!this.allRelatedIssuesVisible,this.issue&&this.issue.hasRelatedLinks&&S.filter(this.issue.children,{issueType:d.a.RelatedLink}).forEach(e=>e.visible=this.allRelatedIssuesVisible)}ngOnDestroy(){this.epicChildrenLoadedQuery$&&this.epicChildrenLoadedQuery$.unsubscribe(),this.combined$&&this.combined$.unsubscribe()}ngAfterViewInit(){this.contentHeight=this.elementView.nativeElement.offsetParent.clientHeight-134,this.cdRef.detectChanges()}dragEnd(e){this.adjustPaneSize(e.sizes[0])}adjustPaneSize(e){this.leftPaneSize=e,this.columns[0].size=e,this.columns[1].size=100-e}toggleFullscreen(){this.adjustPaneSize(0===this.leftPaneSize?60:0)}selectRelatedIssue(e){this.selectedRelatedIssue=e,this.selectedRelatedIssue.project=this.issue.project}selectEpicIssue(e){this.selectedEpicIssue=e,this.selectedEpicIssue.project=this.issue.project}groupEpicChildren(e){if(this.selectedTab=1,this.issue&&!this.groupedEpicChildren){const t=S.find(this.issue.children,{issueType:d.a.EpicChildren});t&&t.children&&t.children.length>0&&(this.groupedEpicChildren=this.groupChildren(t.children,e))}}groupChildren(e,t){const i=S.groupBy(e,t);return Object.keys(i).map(e=>({label:e,total:i[e].length,children:i[e]}))}toggleAllEpicChildren(){this.allEpicChildrenVisible=!this.allEpicChildrenVisible,this.groupedEpicChildren&&this.groupedEpicChildren.forEach(e=>e.visible=this.allEpicChildrenVisible)}}return e.\u0275fac=function(t){return new(t||e)(u.Qb(u.h),u.Qb(c.h))},e.\u0275cmp=u.Kb({type:e,selectors:[["app-workbench"]],viewQuery:function(e,t){var i;1&e&&u.Oc(pe,!0),2&e&&u.zc(i=u.jc())&&(t.elementView=i.first)},decls:3,vars:3,consts:[["content",""],["direction","horizontal",3,"gutterDblClick","dragEnd",4,"ngIf"],["direction","horizontal",3,"gutterDblClick","dragEnd"],[1,"pr-3",3,"size"],[3,"issue",4,"ngIf"],[1,"small",3,"size"],["title","expand/collapse pane",1,"btn","btn-sm","btn-link","text-muted","float-right",3,"ngClass","click"],[3,"icon","fixedWidth"],["ngbNav","",1,"nav-tabs",3,"activeId","destroyOnHide","activeIdChange"],["nav","ngbNav"],[3,"ngbNavItem",4,"ngIf"],[3,"ngbNavItem"],["ngbNavLink",""],["ngbNavContent",""],[1,"mt-2",3,"ngbNavOutlet"],[3,"issue"],["ngbNavLink","",3,"click"],["size","sm",3,"icon","fixedWidth"],[1,"pl-2","pr-2","pb-2"],["class","alert alert-warning",4,"ngIf"],[4,"ngIf"],[1,"alert","alert-warning"],[4,"ngFor","ngForOf"],[1,"text-muted","text-uppercase","mt-1","mb-1"],[1,"btn","btn-sm","btn-link","text-left","text-dark",3,"ngClass","click"],[1,"ml-2"],["class","mb-4",4,"ngIf"],[1,"mb-4"],["class","ml-3 p-1 border-bottom",4,"ngFor","ngForOf"],[1,"ml-3","p-1","border-bottom"],[1,"badge","badge-light","font-weight-normal","text-uppercase","float-right","mt-1"],[1,"mr-1"],[1,"text-primary","mr-2",3,"click"],[3,"issue","showIssue","close"],["class","ml-3 p-1 border-bottom",3,"title",4,"ngFor","ngForOf"],[1,"ml-3","p-1","border-bottom",3,"title"],[3,"issue","showIssue"]],template:function(e,t){1&e&&(u.Wb(0,"div",null,0),u.Ic(2,Le,15,14,"as-split",1),u.Vb()),2&e&&(u.Hc("height",t.contentHeight,"px"),u.Cb(2),u.pc("ngIf",t.issue))},directives:[s.l,Q.c,Q.b,s.j,g.a,A.j,A.l,A.m,A.k,A.o,J,s.k,de],encapsulation:2}),e})();var ze=i("vkgz"),Me=i("iLqC"),Pe=i("Ewkv"),Be=i("/RsI"),Ne=i("NGyg");function Ae(e,t){if(1&e){const e=u.Xb();u.Wb(0,"div"),u.Wb(1,"input",9),u.ic("ngModelChange",(function(t){return u.Bc(e),u.kc(3).includeEpicChildren=t}))("change",(function(){return u.Bc(e),u.kc(3).plotIssuesOnStoryboard()})),u.Vb(),u.Wb(2,"b",10),u.Kc(3),u.Vb(),u.Kc(4," issues in this epic "),u.Vb()}if(2&e){const e=u.kc(3);u.Cb(1),u.pc("ngModel",e.includeEpicChildren),u.Cb(2),u.Lc(e.storyboardItem.epicChildren.length)}}function Qe(e,t){if(1&e){const e=u.Xb();u.Wb(0,"div"),u.Wb(1,"input",9),u.ic("ngModelChange",(function(t){return u.Bc(e),u.kc(3).includeRelatedIssues=t}))("change",(function(){return u.Bc(e),u.kc(3).plotIssuesOnStoryboard()})),u.Vb(),u.Wb(2,"b",10),u.Kc(3),u.Vb(),u.Kc(4," related issues "),u.Vb()}if(2&e){const e=u.kc(3);u.Cb(1),u.pc("ngModel",e.includeRelatedIssues),u.Cb(2),u.Lc(e.storyboardItem.relatedLinks.length)}}function Xe(e,t){if(1&e&&(u.Wb(0,"div",7),u.Ic(1,Ae,5,2,"div",8),u.Ic(2,Qe,5,2,"div",8),u.Vb()),2&e){const e=u.kc(2);u.Cb(1),u.pc("ngIf",e.storyboardItem.epicChildren&&e.storyboardItem.epicChildren.length>0),u.Cb(1),u.pc("ngIf",e.storyboardItem.relatedLinks&&e.storyboardItem.relatedLinks.length>0)}}function De(e,t){if(1&e&&(u.Wb(0,"div",13),u.Wb(1,"span",14),u.Kc(2),u.Vb(),u.Kc(3," unplanned issues. "),u.Vb()),2&e){const e=u.kc(3);u.Cb(2),u.Lc(e.storyboardItem.metadata.backlogCount)}}function Ue(e,t){if(1&e&&(u.Wb(0,"div"),u.Wb(1,"span",14),u.Kc(2),u.Vb(),u.Kc(3," issues in unknown functional areas. "),u.Vb()),2&e){const e=u.kc(3);u.Cb(2),u.Lc(e.storyboardItem.metadata.noComponentCount)}}function He(e,t){if(1&e&&(u.Wb(0,"div",11),u.Ic(1,De,4,1,"div",12),u.Ic(2,Ue,4,1,"div",8),u.Vb()),2&e){const e=u.kc(2);u.Cb(1),u.pc("ngIf",e.storyboardItem.metadata.backlogCount>0),u.Cb(1),u.pc("ngIf",e.storyboardItem.metadata.noComponentCount>0)}}function qe(e,t){if(1&e){const e=u.Xb();u.Wb(0,"p-dialog",15),u.ic("visibleChange",(function(t){return u.Bc(e),u.kc(2).showStatistics=t})),u.Rb(1,"app-epic-statistics",16),u.Vb()}if(2&e){const e=u.kc(2);u.pc("visible",e.showStatistics),u.Cb(1),u.pc("statusStats",e.storyboardItem.statistics.status)("issueTypeStats",e.storyboardItem.statistics.issueTypes)("componentStats",e.storyboardItem.statistics.components)}}function Je(e,t){if(1&e&&(u.Wb(0,"div",1),u.Wb(1,"div",2),u.Ic(2,Xe,3,2,"div",3),u.Ic(3,He,3,2,"div",4),u.Vb(),u.Rb(4,"app-storyboard-renderer",5),u.Ic(5,qe,2,4,"p-dialog",6),u.Vb()),2&e){const e=u.kc();u.Cb(2),u.pc("ngIf",e.storyboardItem.epicChildren&&e.storyboardItem.epicChildren.length>0||e.storyboardItem.relatedLinks&&e.storyboardItem.relatedLinks.length>0),u.Cb(1),u.pc("ngIf",e.storyboardItem.metadata&&(e.storyboardItem.metadata.backlogCount>0||e.storyboardItem.metadata.noComponentCount>0)),u.Cb(1),u.pc("storyboardItem",e.storyboardItem),u.Cb(1),u.pc("ngIf",e.storyboardItem&&e.storyboardItem.statistics)}}let Ge=(()=>{class e{constructor(e,t,i,s){this.activatedRoute=e,this.cachingService=t,this.jiraService=i,this.store$=s,this.includeRelatedIssues=!1,this.includeEpicChildren=!1,this.relatedIssuesIncluded=!1,this.epicChildrenIncluded=!1,this.showStatistics=!1,this.fieldlist=["key","project","title","status","components","fixVersions","labels","issueType","linkType"]}ngOnInit(){this.localNodeType=d.a,this.selectedItem$=this.store$.select(e=>e.purpose.selectedItem).pipe(Object(ze.a)(e=>console.log(e)),Object(h.a)(e=>e)).subscribe(e=>{const t=e;if(t){this.storyboardItem=S.pick(t,this.fieldlist),this.storyboardItem.children=[],this.storyboardItem.metadata=Object(Me.b)();const e=S.filter(t.children,{issueType:d.a.RelatedLink});if(e&&e.length>0&&e.forEach(e=>{e.children&&e.children.length>0&&(this.storyboardItem.relatedLinks=S.union(this.storyboardItem.relatedLinks,S.map(e.children,e=>S.pick(e,this.fieldlist))))}),t.issueType===d.a.Epic){const e=S.find(t.children,{issueType:d.a.EpicChildren});e&&e.children&&e.children.length>0&&(this.storyboardItem.epicChildren=S.map(S.clone(e.children),e=>S.pick(e,this.fieldlist)),this.includeEpicChildren=!0)}else this.includeRelatedIssues=!0;this.plotIssuesOnStoryboard()}})}ngOnDestroy(){this.selectedItem$&&this.selectedItem$.unsubscribe()}plotIssuesOnStoryboard(){this.storyboardItem.children=[],this.storyboardItem.metadata=Object(Me.b)(),this.includeEpicChildren&&this.storyboardItem.epicChildren&&this.storyboardItem.epicChildren.length>0&&(this.epicChildrenIncluded=!0,this.storyboardItem.children=S.union(this.storyboardItem.children,this.storyboardItem.epicChildren),Object(Me.c)(this.storyboardItem.metadata,Object(Me.a)(this.storyboardItem.epicChildren))),this.includeRelatedIssues&&this.storyboardItem.relatedLinks&&this.storyboardItem.relatedLinks.length>0&&(this.storyboardItem.relatedLinksLoaded?(this.relatedIssuesIncluded=!0,this.storyboardItem.children=S.union(this.storyboardItem.children,this.storyboardItem.relatedLinks),Object(Me.c)(this.storyboardItem.metadata,Object(Me.a)(this.storyboardItem.relatedLinks))):this.populateRelatedLinks()),this.storyboardItem.statistics=Object(Me.d)(this.storyboardItem)}populateRelatedLinks(){const e=S.map(this.storyboardItem.relatedLinks,"key");e&&e.length>0&&this.jiraService.executeJql(`key in (${S.join(e,",")})`,0,100,["components","labels","fixVersions"],"epic-children.json").subscribe(e=>{if(e&&e.issues){this.storyboardItem.relatedLinksLoaded=!0;const t=S.map(e.issues,e=>S.pick(Object(d.m)(e),this.fieldlist));this.storyboardItem.relatedLinks.forEach(e=>{const i=S.find(t,{key:e.key});i&&(e.labels=i.labels,e.fixVersions=i.fixVersions,e.component=i.component)}),this.plotIssuesOnStoryboard()}})}}return e.\u0275fac=function(t){return new(t||e)(u.Qb(m.a),u.Qb(f.a),u.Qb(E.b),u.Qb(c.h))},e.\u0275cmp=u.Kb({type:e,selectors:[["app-storyboard"]],decls:1,vars:1,consts:[["class","pl-3 pr-3",4,"ngIf"],[1,"pl-3","pr-3"],[1,"row","small"],["class","col-md-3 mb-3",4,"ngIf"],["class","col-md-4 mb-3",4,"ngIf"],[3,"storyboardItem"],["header","Statistics","position","topright","class","bg-light",3,"visible","visibleChange",4,"ngIf"],[1,"col-md-3","mb-3"],[4,"ngIf"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"badge","badge-success","ml-1"],[1,"col-md-4","mb-3"],["class","mr-4",4,"ngIf"],[1,"mr-4"],[1,"badge","badge-warning"],["header","Statistics","position","topright",1,"bg-light",3,"visible","visibleChange"],[3,"statusStats","issueTypeStats","componentStats"]],template:function(e,t){1&e&&u.Ic(0,Je,6,4,"div",0),2&e&&u.pc("ngIf",t.storyboardItem)},directives:[s.l,Pe.a,x.a,x.f,x.i,Be.a,Ne.a],encapsulation:2}),e})();i.d(t,"PurposeModule",(function(){return Ye}));const _e=[{path:":selected",component:N,children:[{path:"details",component:W},{path:"workbench",component:Re},{path:"storyboard",component:Ge},{path:"",redirectTo:"details",pathMatch:"full"}]}];let Ye=(()=>{class e{}return e.\u0275mod=u.Ob({type:e}),e.\u0275inj=u.Nb({factory:function(t){return new(t||e)},imports:[[s.c,m.g,x.c,I.b,g.c,Be.b,j.b,A.g,A.c,A.n,Q.a,w.a,c.i.forFeature("purpose",p,{initialState:n}),m.g.forChild(_e)]]}),e})()}}]);