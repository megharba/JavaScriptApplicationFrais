(this.webpackJsonpppereact=this.webpackJsonpppereact||[]).push([[0],{145:function(t,e,n){},146:function(t,e,n){},148:function(t,e,n){},150:function(t,e,n){},154:function(t,e){},156:function(t,e){},170:function(t,e){},172:function(t,e){},200:function(t,e){},202:function(t,e){},203:function(t,e){},208:function(t,e){},210:function(t,e){},229:function(t,e){},241:function(t,e){},244:function(t,e){},261:function(t,e,n){},266:function(t,e,n){},267:function(t,e,n){"use strict";n.r(e);var a=n(1),s=n.n(a),r=n(137),c=n.n(r),i=(n(145),n(10)),o=n(11),l=n(13),h=n(12),u=(n(53),n(146),n(0)),j=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){return Object(i.a)(this,n),e.call(this,t)}return Object(o.a)(n,[{key:"signOut",value:function(t){localStorage.clear(),this.props.history.push("/")}},{key:"render",value:function(){var t=this;return Object(u.jsx)("header",{children:Object(u.jsx)("nav",{class:"navbar navbar-expand-md navbar-dark fixed-top bg-dark",children:Object(u.jsxs)("div",{class:"container-fluid",children:[Object(u.jsx)("a",{class:"navbar-brand",href:"/accueil",children:"GSB"}),Object(u.jsx)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(u.jsx)("span",{class:"navbar-toggler-icon"})}),Object(u.jsx)("div",{class:"collapse navbar-collapse",id:"navbarCollapse",children:Object(u.jsxs)("ul",{class:"navbar-nav me-auto mb-2 mb-md-0",children:[Object(u.jsx)("li",{class:"nav-item",children:Object(u.jsx)("a",{class:"nav-link active","aria-current":"page",href:"/accueil",children:"Mes fiches de frais"})}),Object(u.jsx)("li",{class:"nav-item",children:Object(u.jsx)("a",{class:"nav-link",href:"CreateBill",children:"Saisir ma fiche de frais"})}),Object(u.jsx)("li",{class:"nav-item",children:Object(u.jsx)("a",{class:"nav-link",href:"/",onClick:function(){return t.signOut()},children:"D\xe9connexion"})})]})})]})})})}}]),n}(s.a.Component),d=(n(148),function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){return Object(i.a)(this,n),e.call(this,t)}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsx)("footer",{})}}]),n}(s.a.Component)),b=n(4),f=n.n(b),p=n(5),x=n(22),O=n(32),m=n(20),v=(n(150),function(){var t=Object(p.a)(f.a.mark((function t(e){var n,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:3001/fiches/"+e,{method:"GET",headers:{Accept:"application / json","Content-Type":"application/json"}});case 2:return n=t.sent,t.next=5,n.json();case 5:return a=t.sent,t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),y=function(){var t=Object(p.a)(f.a.mark((function t(e,n){var a,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:3001/fiches/lignefraisforfait/"+e+"/"+n,{method:"GET",headers:{Accept:"application / json","Content-Type":"application/json"}});case 2:return a=t.sent,t.next=5,a.json();case 5:return s=t.sent,t.abrupt("return",s);case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),g=function(){var t=Object(p.a)(f.a.mark((function t(e,n){var a,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:3001/fiches/lignefraishorsforfait/"+e+"/"+n,{method:"GET",headers:{Accept:"application / json","Content-Type":"application/json"}});case 2:return a=t.sent,t.next=5,a.json();case 5:return s=t.sent,t.abrupt("return",s);case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),k=function(){var t=Object(p.a)(f.a.mark((function t(e){var n,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:3001/fiches/new",{method:"POST",headers:{Accept:"application / json","Content-Type":"application/json"},body:JSON.stringify(e)});case 2:return n=t.sent,t.next=5,n.json();case 5:return a=t.sent,t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),w=function(){var t=Object(p.a)(f.a.mark((function t(e){var n,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:3001/fraisforfait/lignefraisforfait/new",{method:"POST",headers:{Accept:"application / json","Content-Type":"application/json"},body:JSON.stringify(e)});case 2:return n=t.sent,t.next=5,n.json();case 5:return a=t.sent,t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),C=function(){var t=Object(p.a)(f.a.mark((function t(e){var n,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:3001/fraisforfait/lignefraishorsforfait/new",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)});case 2:return n=t.sent,t.next=5,n.json();case 5:return a=t.sent,t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),N=function(){var t=Object(p.a)(f.a.mark((function t(e,n,a,s){var r,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:3001/fiches/lignefraisforfait/"+e+"/"+n+"/"+a,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({quantite:s})});case 2:return r=t.sent,t.next=5,r.json();case 5:return c=t.sent,t.abrupt("return",c);case 7:case"end":return t.stop()}}),t)})));return function(e,n,a,s){return t.apply(this,arguments)}}(),S=function(){var t=Object(p.a)(f.a.mark((function t(e,n){var a,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:3001/fiches/lignefraishorsforfait/"+e,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)});case 2:return a=t.sent,t.next=5,a.json();case 5:return s=t.sent,t.abrupt("return",s);case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),Q=n(50),M=n.n(Q),F=n(76),T=n.n(F),R=n(138),D=n.n(R),A=function(){var t=Object(p.a)(f.a.mark((function t(e){var n,a,s,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:3001/users/auth",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)});case 2:return n=t.sent,t.next=5,n.json();case 5:return a=t.sent,s=a.token,console.log(s),r=D.a.verify(s,"ppe"),t.abrupt("return",{decoded:r,token:s});case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),J=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).state={idFraisForfait:["KM","NUI","REP"],visible:!1,quantite:"",mois:"",bills:[],users:[],fraishorsforfait:[],kmQty:0,nightsQty:0,repasQty:0,profileImg:""},a}return Object(o.a)(n,[{key:"handleChange",value:function(t){t.preventDefault();var e=t.target.name;this.setState(Object(m.a)({},e,t.target.value))}},{key:"handleRowsChange",value:function(t,e){t.preventDefault();var n=t.target,a=n.name,s=n.value,r=Object(O.a)(this.state.fraishorsforfait);r[e]=Object(x.a)(Object(x.a)({},r[e]),{},Object(m.a)({},a,s)),this.setState({fraishorsforfait:r})}},{key:"ShowModal",value:function(){this.setState({visible:!this.state.visible})}},{key:"getLignes",value:function(){var t=Object(p.a)(f.a.mark((function t(e){var n,a,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=localStorage.getItem("id"),t.next=3,y(n,e);case 3:return a=t.sent,t.next=6,g(n,e);case 6:(s=t.sent).result.map((function(t,e){t.date=T()(t.date).format("YYYY-MM-DD")})),this.setState({kmQty:a.result[0].quantite,nightsQty:a.result[1].quantite,repasQty:a.result[2].quantite,fraishorsforfait:s.result,mois:e});case 9:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"update",value:function(){var t=Object(p.a)(f.a.mark((function t(){var e,n=this;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=localStorage.getItem("id"),t.next=3,N(e,this.state.mois,this.state.idFraisForfait[0],this.state.kmQty);case 3:return t.next=5,N(e,this.state.mois,this.state.idFraisForfait[1],this.state.nightsQty);case 5:return t.next=7,N(e,this.state.mois,this.state.idFraisForfait[2],this.state.repasQty);case 7:this.state.fraishorsforfait.map(function(){var t=Object(p.a)(f.a.mark((function t(a,s){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(a.id,Object(m.a)({idutilisateur:e,mois:n.state.mois,libelle:a.libelle,date:a.date,montant:a.montant},"libelle",a.libelle));case 2:t.sent;case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),this.setState({visible:!this.state.visible});case 9:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"addRows",value:function(){this.setState({fraishorsforfait:[].concat(Object(O.a)(this.state.fraishorsforfait),[{date:"",libelle:"",montant:"",justificatif:""}])})}},{key:"removeRows",value:function(t){var e=this.state.fraishorsforfait;e.splice(t,1),this.setState({fraishorsforfait:e})}},{key:"componentDidMount",value:function(){var t=Object(p.a)(f.a.mark((function t(){var e,n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=localStorage.getItem("id"),t.next=3,v(e);case 3:n=t.sent,this.setState({bills:n.result});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return Object(u.jsx)("main",{className:"flex-shrink-0",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("br",{})," ",Object(u.jsx)("h3",{className:"mt-5",children:"Bonjour, voici vos fiches de frais : "})," ",Object(u.jsx)("br",{}),Object(u.jsxs)("table",{className:"table table-hover",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"col",children:"Mois"}),Object(u.jsx)("th",{scope:"col",children:"Justificatifs"}),Object(u.jsx)("th",{scope:"col",children:"Montant"}),Object(u.jsx)("th",{scope:"col",children:"Date de modification"}),Object(u.jsx)("th",{scope:"col",children:"Etat"}),Object(u.jsx)("th",{scope:"col",children:"Action"})]})}),Object(u.jsx)("tbody",{children:this.state.bills.map((function(e,n){return e.dateModif=T()(e.dateModif,"YYYY-MM-DD[T]HH:mm:ss").format("DD-MM-YYYY"),Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"row",children:e.mois}),Object(u.jsx)("td",{children:e.nbJustificatifs}),Object(u.jsx)("td",{children:e.montantValide}),Object(u.jsx)("td",{children:e.dateModif}),Object(u.jsx)("td",{children:e.idEtat}),Object(u.jsx)("td",{children:Object(u.jsx)("button",{type:"button",class:"btn btn-info btn-sm","data-action":"update",onClick:function(){t.ShowModal(),t.getLignes(e.mois)},children:Object(u.jsx)("i",{class:"fas fa-edit"})})})]})}))})]}),Object(u.jsxs)(M.a,{visible:this.state.visible,dialogClassName:"modal-80w font-size center modal-fond modal-dialog-scrollable",children:[Object(u.jsxs)("div",{className:"modal-header",children:[Object(u.jsxs)("h4",{className:"modal-title",children:["Modification Fiche Frais de ",this.state.mois," "]}),Object(u.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){return t.ShowModal()},children:Object(u.jsx)("i",{class:"fas fa-times"})})]}),Object(u.jsxs)("div",{className:"modal-body",children:[Object(u.jsx)("h5",{className:"centrer",children:"Frais Forfait "}),Object(u.jsx)("div",{className:"card border-primary",children:Object(u.jsx)("div",{className:"card-body",children:Object(u.jsxs)("table",{className:"table text-center",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"col",children:"Frais "}),Object(u.jsx)("th",{scope:"col",children:"Quantit\xe9"}),Object(u.jsx)("th",{scope:"col",children:"Montant unitaire"}),Object(u.jsx)("th",{scope:"col",children:"Total"})]})}),Object(u.jsxs)("tbody",{children:[Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)("label",{className:"form-control-label",children:Object(u.jsx)("strong",{children:"Nuit\xe9es"})})}),Object(u.jsx)("td",{children:Object(u.jsx)("input",{type:"text",name:"nightsQty",placeholder:"Qt\xe9",value:this.state.nightsQty,onChange:function(e){return t.handleChange(e)}})}),Object(u.jsx)("td",{children:"80\u20ac"}),Object(u.jsxs)("td",{children:[80*this.state.nightsQty,"\u20ac"]})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)("label",{for:"",className:"form-control-label",children:Object(u.jsx)("strong",{children:"Repas"})})}),Object(u.jsx)("td",{children:Object(u.jsx)("input",{type:"text",name:"repasQty",placeholder:"Qt\xe9",value:this.state.repasQty,onChange:function(e){return t.handleChange(e)}})}),Object(u.jsx)("td",{children:"29\u20ac"}),Object(u.jsx)("td",{children:29*this.state.repasQty})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)("label",{for:"",className:"form-control-label",children:Object(u.jsx)("strong",{children:"Kilom\xe9trage"})})}),Object(u.jsx)("td",{children:Object(u.jsx)("input",{type:"text",name:"kmQty",placeholder:"Qt\xe9",value:this.state.kmQty,onChange:function(e){return t.handleChange(e)}})}),Object(u.jsx)("td",{children:"0.6\u20ac"}),Object(u.jsx)("td",{children:.6*this.state.kmQty})]})]})]})})}),Object(u.jsx)("br",{}),Object(u.jsx)("h5",{className:"centrer",children:"Frais Hors Forfait "}),Object(u.jsx)("div",{className:"card border-primary",children:Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("button",{type:"button",className:"btn btn-success btn-sm",onClick:function(){return t.addRows()},children:"Ajoutez un frais hors forfait"}),Object(u.jsxs)("table",{className:"table text-center",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"col",children:"Dates"}),Object(u.jsx)("th",{scope:"col",children:"Libell\xe9"}),Object(u.jsx)("th",{scope:"col",children:"Montant"}),Object(u.jsx)("th",{scope:"col",children:" Justificatifs"}),Object(u.jsx)("th",{scope:"col",children:" Actions"})]})}),Object(u.jsx)("tbody",{children:this.state.fraishorsforfait.map((function(e,n){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)("input",{type:"date",name:"date",value:t.state.fraishorsforfait[n].date,onChange:function(e){return t.handleRowsChange(e,n)}})}),Object(u.jsx)("td",{children:Object(u.jsx)("input",{type:"text",placeholder:"Libell\xe9",name:"libelle",value:t.state.fraishorsforfait[n].libelle,onChange:function(e){return t.handleRowsChange(e,n)}})}),Object(u.jsx)("td",{children:Object(u.jsx)("input",{type:"text   ",placeholder:"Montant",name:"montant",value:t.state.fraishorsforfait[n].montant,onChange:function(e){return t.handleRowsChange(e,n)}})}),Object(u.jsx)("td",{children:Object(u.jsx)("input",{type:"file",name:"justificatif",value:t.state.fraishorsforfait[n].justificatif,onChange:function(e){return t.handleRowsChange(e,n)}})}),Object(u.jsx)("td",{children:Object(u.jsx)("button",{type:"button",className:"btn btn-danger btn-sm mr-2","data-action":"delete",onClick:function(){return t.removeRows(n)},children:Object(u.jsx)("i",{className:"fas fa-trash"})})})]},n)}))})]})]})})]}),Object(u.jsxs)("div",{className:"modal-footer",children:[Object(u.jsx)("button",{type:"button",className:"btn btn-success",onClick:function(){return t.update()},children:"Enregistrer"}),Object(u.jsx)("button",{type:"button",className:"btn btn-light",onClick:function(){return t.ShowModal()},children:"Annuler"})]})]})]})})}}]),n}(s.a.Component),I=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){return Object(i.a)(this,n),e.call(this,t)}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("body",{class:"d-flex flex-column h-100",children:[Object(u.jsx)(j,{}),Object(u.jsx)(J,{}),Object(u.jsx)(d,{})]})}}]),n}(s.a.Component),Y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,268)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,r=e.getLCP,c=e.getTTFB;n(t),a(t),s(t),r(t),c(t)}))},q=(n(261),n(6)),E=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).state={fraisforfait:[],fraishorsforfait:[],nightsQty:0,repasQty:0,kmQty:0,date:"",anneeMois:""},a}return Object(o.a)(n,[{key:"handleChange",value:function(t){t.preventDefault();var e=t.target.name;this.setState(Object(m.a)({},e,t.target.value))}},{key:"handleRowsChange",value:function(t,e){var n=this;t.preventDefault();var a=t.target,s=a.name,r=a.value,c=Object(O.a)(this.state.fraishorsforfait);c[e]=Object(x.a)(Object(x.a)({},c[e]),{},Object(m.a)({},s,r)),this.setState({fraishorsforfait:c},(function(){return console.log(n.state.fraishorsforfait)}))}},{key:"addRows",value:function(){this.setState({fraishorsforfait:[].concat(Object(O.a)(this.state.fraishorsforfait),[{date:"",libelle:"",montant:"",justificatif:""}])})}},{key:"removeRows",value:function(t){var e=this.state.fraishorsforfait;e.splice(t,1),this.setState({fraishorsforfait:e})}},{key:"postFiche",value:function(){var t=Object(p.a)(f.a.mark((function t(){var e,n=this;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=localStorage.getItem("id"),t.next=3,k({idutilisateur:e,mois:this.state.anneeMois,nbJustificatifs:"1",montantValide:80*this.state.nightsQty+29*this.state.repasQty+.6*this.state.kmQty,dateModif:this.state.date,idEtat:"CR"});case 3:return t.sent,t.next=6,w({idutilisateur:e,mois:this.state.anneeMois,idFraisForfait:"KM",quantite:this.state.kmQty});case 6:return t.sent,t.next=9,w({idutilisateur:e,mois:this.state.anneeMois,idFraisForfait:"NUI",quantite:this.state.nightsQty});case 9:return t.sent,t.next=12,w({idutilisateur:e,mois:this.state.anneeMois,idFraisForfait:"REP",quantite:this.state.repasQty});case 12:t.sent,this.state.fraishorsforfait.map(function(){var t=Object(p.a)(f.a.mark((function t(a,s){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C({idutilisateur:e,mois:n.state.anneeMois,libelle:a.libelle,date:a.date,montant:a.montant,justificatif:a.libelle});case 2:t.sent;case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),this.props.history.push("/accueil");case 15:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var t=Object(p.a)(f.a.mark((function t(){var e,n,a,s,r,c,i;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=["Janvier","F\xe9vrier","Mars","Avril","Mai","Juin","Juillet","Ao\xfbt","Septembre","Octobre","Novembre","D\xe9cembre"],n=(new Date).getMonth(),a=(new Date).getFullYear(),e.map((function(t,e){e==n&&(s=t)})),r=["01","02","03","04","05","06","07","08","09","10","11","12"],c=(new Date).getMonth(),r.map((function(t,e){e==c&&(i=t)})),this.setState({date:" de ".concat(s," ").concat(a),anneeMois:a+i});case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return Object(u.jsx)("main",{className:"flex-shrink-0",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("h1",{class:"text-center pt100",children:["Fiche de remboursement du mois ",this.state.date]}),Object(u.jsx)("hr",{className:"ligne"}),Object(u.jsx)("h5",{className:"centrer",children:"Frais Forfait "}),Object(u.jsx)("div",{className:"card border-primary",children:Object(u.jsx)("div",{className:"card-body",children:Object(u.jsxs)("table",{className:"table text-center",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"col",children:"Frais "}),Object(u.jsx)("th",{scope:"col",children:"Quantit\xe9"}),Object(u.jsx)("th",{scope:"col",children:"Montant unitaire"}),Object(u.jsx)("th",{scope:"col",children:"Total"})]})}),Object(u.jsxs)("tbody",{children:[Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)("label",{className:"form-control-label",children:Object(u.jsx)("strong",{children:"Nuit\xe9es"})})}),Object(u.jsx)("td",{children:Object(u.jsx)("input",{type:"text",name:"nightsQty",placeholder:"Qt\xe9",value:this.state.nightsQty,onChange:function(e){return t.handleChange(e)}})}),Object(u.jsx)("td",{children:"80\u20ac"}),Object(u.jsxs)("td",{children:[80*this.state.nightsQty,"\u20ac"]})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)("label",{for:"",className:"form-control-label",children:Object(u.jsx)("strong",{children:"Repas"})})}),Object(u.jsx)("td",{children:Object(u.jsx)("input",{type:"text",name:"repasQty",placeholder:"Qt\xe9",value:this.state.repasQty,onChange:function(e){return t.handleChange(e)}})}),Object(u.jsx)("td",{children:"29\u20ac"}),Object(u.jsx)("td",{children:29*this.state.repasQty})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)("label",{for:"",className:"form-control-label",children:Object(u.jsx)("strong",{children:"Kilom\xe9trage"})})}),Object(u.jsx)("td",{children:Object(u.jsx)("input",{type:"text",name:"kmQty",placeholder:"Qt\xe9",value:this.state.kmQty,onChange:function(e){return t.handleChange(e)}})}),Object(u.jsx)("td",{children:"0.6\u20ac"}),Object(u.jsx)("td",{children:.6*this.state.kmQty})]})]})]})})}),Object(u.jsx)("br",{}),Object(u.jsx)("h5",{className:"centrer",children:"Frais Hors Forfait "}),Object(u.jsx)("div",{className:"card border-primary",children:Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("button",{type:"button",className:"btn btn-success btn-sm",onClick:function(){return t.addRows()},children:"Ajoutez un frais hors forfait"}),Object(u.jsxs)("table",{className:"table text-center",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"col",children:"Dates"}),Object(u.jsx)("th",{scope:"col",children:"Libell\xe9"}),Object(u.jsx)("th",{scope:"col",children:"Montant"}),Object(u.jsx)("th",{scope:"col",children:" Justificatifs"}),Object(u.jsx)("th",{scope:"col",children:" Actions"})]})}),Object(u.jsx)("tbody",{children:this.state.fraishorsforfait.map((function(e,n){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)("input",{type:"date",name:"date",value:t.state.fraishorsforfait[n].date,onChange:function(e){return t.handleRowsChange(e,n)}})}),Object(u.jsx)("td",{children:Object(u.jsx)("input",{type:"text",placeholder:"Libell\xe9",name:"libelle",value:t.state.fraishorsforfait[n].libelle,onChange:function(e){return t.handleRowsChange(e,n)}})}),Object(u.jsx)("td",{children:Object(u.jsx)("input",{type:"text   ",placeholder:"Montant",name:"montant",value:t.state.fraishorsforfait[n].montant,onChange:function(e){return t.handleRowsChange(e,n)}})}),Object(u.jsx)("td",{children:Object(u.jsx)("input",{type:"file",name:"justificatif",value:t.state.fraishorsforfait[n].justificatif,onChange:function(e){return t.handleRowsChange(e,n)}})}),Object(u.jsx)("td",{children:Object(u.jsx)("button",{type:"button",className:"btn btn-danger btn-sm mr-2","data-action":"delete",onClick:function(){return t.removeRows(n)},children:Object(u.jsx)("i",{className:"fas fa-trash"})})})]},n)}))})]})]})}),Object(u.jsx)("div",{class:"col text-center",children:Object(u.jsx)("button",{type:"submit",class:"btn btn-primary mt-3 mb-3",onClick:function(){return t.postFiche()},children:"Cr\xe9er la fiche "})})]})})}}]),n}(s.a.Component),P=Object(q.g)(E),L=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){return Object(i.a)(this,n),e.call(this,t)}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("body",{class:"d-flex flex-column h-100",children:[Object(u.jsx)(j,{}),Object(u.jsx)(P,{}),Object(u.jsx)(d,{})]})}}]),n}(s.a.Component),B=(n(266),n.p+"static/media/logo.08e6a6d8.png"),z=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).state={login:"",password:"",visible:!1},a}return Object(o.a)(n,[{key:"handleChange",value:function(t){t.preventDefault();var e=t.target.name;this.setState(Object(m.a)({},e,t.target.value))}},{key:"ShowModal",value:function(){this.setState({visible:!this.state.visible})}},{key:"login",value:function(){var t=Object(p.a)(f.a.mark((function t(){var e,n,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,A({login:this.state.login,password:this.state.password});case 3:e=t.sent,n=e.decoded,a=e.token,n&&(localStorage.setItem("token",a),localStorage.setItem("id",n.id),localStorage.setItem("nom",n.nom),localStorage.setItem("prenom",n.prenom),this.props.history.push("/accueil")),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),this.setState({visible:!this.state.visible});case 12:case"end":return t.stop()}}),t,this,[[0,9]])})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return Object(u.jsxs)("div",{className:"maincontainer",children:[Object(u.jsx)("div",{className:"container-fluid",children:Object(u.jsxs)("div",{className:"row no-gutter",children:[Object(u.jsx)("div",{className:"col-md-6 d-none d-md-flex bg-image",children:Object(u.jsx)("img",{src:B,alt:""})}),Object(u.jsx)("div",{className:"col-md-6 bg-light",children:Object(u.jsx)("div",{className:"login d-flex align-items-center py-5",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)("div",{className:"col-lg-10 col-xl-7 mx-auto",children:[Object(u.jsx)("h3",{className:"display-4 fontsize",children:"Connexion Acc\xe8s Visiteur"}),Object(u.jsx)("div",{className:"form-group mb-3",children:Object(u.jsx)("input",{name:"login",type:"email",placeholder:"Adresse mail",required:"",autofocus:"",class:"form-control rounded-pill border-0 shadow-sm px-4",value:this.state.login,onChange:function(e){return t.handleChange(e)}})}),Object(u.jsx)("div",{className:"form-group mb-3",children:Object(u.jsx)("input",{name:"password",type:"password",placeholder:"Mot de passe",required:"",class:"form-control rounded-pill border-0 shadow-sm px-4 text-primary",value:this.state.password,onChange:function(e){return t.handleChange(e)}})}),Object(u.jsx)("div",{className:"text-center",children:Object(u.jsx)("button",{type:"submit",className:"btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm centrer",onClick:function(){return t.login()},children:"Se connecter"})})]})})})})})]})}),Object(u.jsx)(M.a,{visible:this.state.visible,dialogClassName:"",role:"alert",onClickBackdrop:function(){return t.ShowModal()},children:Object(u.jsx)("div",{className:"modal-body alert alert-danger",children:Object(u.jsx)("h6",{className:"centrer",children:"Votre mot de passe ou votre identifiant est incorrect."})})})]})}}]),n}(s.a.Component),G=Object(q.g)(z),H=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){return Object(i.a)(this,n),e.call(this,t)}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("body",{class:"d-flex flex-column h-100",children:[Object(u.jsx)(G,{}),Object(u.jsx)(d,{})]})}}]),n}(s.a.Component),K=n(40),U=n(140),V=function(t){var e=t.component,n=Object(U.a)(t,["component"]);return Object(u.jsx)(q.b,Object(x.a)(Object(x.a)({},n),{},{render:function(t){return localStorage.getItem("token")?Object(u.jsx)(e,Object(x.a)({},t)):Object(u.jsx)(q.a,{to:"/"})}}))},W=function(){return Object(u.jsx)(K.a,{children:Object(u.jsxs)(q.d,{children:[Object(u.jsx)(q.b,{exact:!0,path:"/",component:H}),Object(u.jsx)(V,{exact:!0,path:"/accueil",component:I}),Object(u.jsx)(V,{exact:!0,path:"/createbill",component:L})]})})};c.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(W,{})}),document.getElementById("root")),Y()},53:function(t,e,n){}},[[267,1,2]]]);
//# sourceMappingURL=main.ff260d9f.chunk.js.map