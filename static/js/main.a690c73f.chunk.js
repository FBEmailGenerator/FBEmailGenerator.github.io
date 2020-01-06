(this["webpackJsonpemail-generator"]=this["webpackJsonpemail-generator"]||[]).push([[0],{17:function(e,t,n){e.exports=n.p+"static/media/flag-inverse-en-logo.c365e475.svg"},21:function(e,t,n){e.exports=n(34)},26:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),i=n(12),r=n.n(i),o=(n(26),n(13)),c=n(5),s=n(14),m=n(15),d=n(19),u=n(16),p=n(20),h=n(1),g=n(3),f=n(4),b=n(17),E=n.n(b);var v=function(e){return l.a.createElement(h.Navbar,null,l.a.createElement(h.NavbarBrand,null,l.a.createElement(h.NavbarItem,null,l.a.createElement("img",{src:E.a,alt:"Fightback Logo"}))),l.a.createElement(h.NavbarMenu,null,l.a.createElement(h.NavbarStart,null,l.a.createElement(h.NavbarItem,null,l.a.createElement(h.Title,{isSize:1,hasTextColor:"white",isMarginless:!0},"Email Generator"))),l.a.createElement(h.NavbarEnd,null,l.a.createElement(h.NavbarItem,null,l.a.createElement(h.Button,{id:"help-button",isColor:"danger",isInverted:!0,onClick:e.openHelpModal},l.a.createElement("span",null,"Help"),l.a.createElement("span",{className:"icon"},l.a.createElement(g.a,{icon:f.c})))),l.a.createElement(h.NavbarItem,null,l.a.createElement(h.Button,{id:"debug-button",isColor:"danger",isInverted:!0,onClick:e.debug},l.a.createElement("span",null,"Debug"),l.a.createElement("span",{className:"icon"},l.a.createElement(g.a,{icon:f.a})))),l.a.createElement(h.NavbarItem,null,l.a.createElement(h.Button,{id:"copy-button",isColor:"danger",isInverted:!0,onClick:e.copyToClipboard},l.a.createElement("span",null,"Copy"),l.a.createElement("span",{className:"icon"},l.a.createElement(g.a,{icon:f.b})))))))};var w=function(e){return l.a.createElement(h.Box,{className:"EventCard"},l.a.createElement("header",null,l.a.createElement(h.Title,{isSize:4},e.title?e.title:"Title"),l.a.createElement(h.Delete,{onClick:function(){return e.deleteMe(e.index)},isSize:"large"})),l.a.createElement(h.Field,null,l.a.createElement(h.Label,null,"Title"),l.a.createElement(h.Control,null,l.a.createElement(h.Input,{type:"text",value:e.title,onChange:function(t){return e.updateValue(e.index,"title",t.target.value)}}))),l.a.createElement(h.Field,null,l.a.createElement(h.Label,null,"Date"),l.a.createElement(h.Control,null,l.a.createElement(h.Input,{type:"date",value:e.date.valueAsDate,onChange:function(t){return e.updateValue(e.index,"date",t.target.value)}}))),l.a.createElement(h.Field,null,l.a.createElement(h.Label,null,"Start Time"),l.a.createElement(h.Control,null,l.a.createElement(h.Input,{type:"time",title:"Type a to selct AM or p to select PM",value:e.startTime,onChange:function(t){return e.updateValue(e.index,"startTime",t.target.value)}}))),l.a.createElement(h.Field,null,l.a.createElement(h.Label,null,"End Time"),l.a.createElement(h.Control,null,l.a.createElement(h.Input,{type:"time",title:"Type a to selct AM or p to select PM",value:e.endTime,onChange:function(t){return e.updateValue(e.index,"endTime",t.target.value)}}))),l.a.createElement(h.Field,null,l.a.createElement(h.Label,null,"Location"),l.a.createElement(h.Control,null,l.a.createElement(h.Input,{type:"text",value:e.location,onChange:function(t){return e.updateValue(e.index,"location",t.target.value)}}))),l.a.createElement(h.Field,null,l.a.createElement(h.Label,null,"Description"),l.a.createElement(h.Control,null,l.a.createElement(h.TextArea,{value:e.description,onChange:function(t){return e.updateValue(e.index,"description",t.target.value)}}))),l.a.createElement(h.Field,null,l.a.createElement(h.Label,null,"Image Link"),l.a.createElement(h.Control,null,l.a.createElement(h.Input,{type:"url",value:e.imageURL,onChange:function(t){return e.updateValue(e.index,"imageURL",t.target.value)},placeholder:"https://i.imgur.com/PH6Yj0F.png"}))),l.a.createElement(h.Field,null,l.a.createElement(h.Label,null,"Facebook Link"),l.a.createElement(h.Control,null,l.a.createElement(h.Input,{type:"url",value:e.facebookURL,onChange:function(t){return e.updateValue(e.index,"facebookURL",t.target.value)},placeholder:"www.facebook.com/events/574206449784456"}))))};var y=function(e){return l.a.createElement(h.Box,{className:"EventCard TitleEditorCard",style:{width:"25vw",padding:"0.75rem 0.5rem",border:"1px solid #d22820"}},l.a.createElement("div",{class:"field is-horizontal"},l.a.createElement("div",{class:"field-label is-normal"},l.a.createElement("label",{class:"label"},"Title")),l.a.createElement("div",{class:"field-body"},l.a.createElement("div",{class:"field"},l.a.createElement("p",{class:"control"},l.a.createElement(h.Input,{type:"text",value:e.emailTitle,onChange:function(t){return e.updateTitleValue("emailTitle",t.target.value)}}))))),l.a.createElement("div",{class:"field is-horizontal"},l.a.createElement("div",{class:"field-label is-normal"},l.a.createElement("label",{class:"label"},"Subtitle")),l.a.createElement("div",{class:"field-body"},l.a.createElement("div",{class:"field"},l.a.createElement("p",{class:"control"},l.a.createElement(h.Input,{type:"text",value:e.emailSubtitle,onChange:function(t){return e.updateTitleValue("emailSubtitle",t.target.value)}}))))))};var x=function(e){return l.a.createElement("section",{id:"Generator"},l.a.createElement("nav",{className:"sectionNav"},l.a.createElement(h.Title,{isSize:2},"Events"),l.a.createElement("div",null,l.a.createElement(y,{emailTitle:e.emailTitle,emailSubtitle:e.emailSubtitle,updateTitleValue:e.updateTitleValue})),l.a.createElement("div",null,l.a.createElement(h.Button,{id:"add-button",isColor:"danger",isOutlined:!0,onClick:e.incrementEventCards},"Add Event"))),l.a.createElement("div",{id:"event-container"},e.eventCards.map((function(t,n){return l.a.createElement(w,{title:t.title,description:t.description,date:t.date,imageURL:t.imageURL,facebookURL:t.facebookURL,updateValue:e.updateEventCardValue,deleteMe:e.decrementEventCards,index:n,key:n})}))))},k=n(18);var C=function(e){function t(e){return(e=e.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/)||[e]).length>1&&((e=e.slice(1))[5]=+e[0]<12?"AM":"PM",e[0]=+e[0]%12||12),e.join("")}return l.a.createElement("div",{style:{maxWidth:"600px",margin:"0 auto"},className:"email-container"},l.a.createElement("table",{align:"center",role:"presentation",cellSpacing:"0",cellPadding:"0",border:"0",width:"100%",style:{margin:"auto"}},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{valign:"top",className:"bg_white"},l.a.createElement("table",{role:"presentation",border:"0",cellPadding:"0",cellSpacing:"0",width:"100%"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("div",{style:{padding:"5px",backgroundColor:"#d22820"}},l.a.createElement("img",{src:" https://marxist.ca/img/flag-inverse-en-logo.svg",alt:"Fightback",style:{width:"100%",height:"auto",margin:"auto",display:"block"}})))))))),e.thisWeek?l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("div",{className:"text",style:{textAlign:"center"}},l.a.createElement(h.Title,{isSize:1},e.emailTitle)))):l.a.createElement("tr",null),e.thisWeek?l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("div",{className:"text",style:{textAlign:"center"}},l.a.createElement(k.Subtitle,{isSize:3},e.emailSubtitle)))):l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("br",null))),e.eventCards.map((function(e,n){return l.a.createElement("tr",{key:n},l.a.createElement("td",null,l.a.createElement("img",{src:e.imageURL?e.imageURL:"https://via.placeholder.com/480x240",alt:e.title,style:{width:"100%",maxWidth:"600px",height:"auto",margin:"auto",display:"block"}}),l.a.createElement("div",null,l.a.createElement("h3",{style:{textAlign:"center"}},e.facebookURL?l.a.createElement("a",{href:e.facebookURL},e.title?e.title:"Title"):l.a.createElement("div",null,e.title?e.title:"Title"))),l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("b",null,"WHEN:"),"\xa0",function(e){var n=e.date?e.date:"yyyy-mm-dd";return n+=", ",n+=""!==e.startTime?t(e.startTime):"start",n+=" - ",n+=""!==e.endTime?t(e.endTime):"end"}(e)),l.a.createElement("p",null,l.a.createElement("b",null,"WHERE:"),"\xa0",e.location?e.location:"TBD"),l.a.createElement("p",null,e.description?e.description:""))))})))),l.a.createElement("br",null),l.a.createElement("div",{style:{height:"70px",backgroundColor:"#d22820",padding:"20px",color:"white"}},l.a.createElement("table",{role:"presentation",border:"0",cellPadding:"0",cellSpacing:"0",width:"100%",height:"100%"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{style:{verticalAlign:"middle"}},l.a.createElement("a",{href:"https://www.marxist.ca",style:{color:"black",textAlign:"center"}},"www.marxist.ca")),l.a.createElement("td",{style:{verticalAlign:"middle"},align:"right",width:"15%"},l.a.createElement("a",{href:"https://www.instagram.com/socialistfightback/"},l.a.createElement("img",{src:"https://i.imgur.com/sIoeTpM.png",alt:"Instagram",width:"38",height:"38",style:{display:"block"},border:"0"}))),l.a.createElement("td",{style:{verticalAlign:"middle"},align:"right",width:"15%"},l.a.createElement("a",{href:"https://www.facebook.com/CanadaMarxists/"},l.a.createElement("img",{src:"https://i.imgur.com/H5Svz3B.png",alt:"Facebook",width:"38",height:"38",style:{display:"block"},border:"0"}))),l.a.createElement("td",{style:{verticalAlign:"middle"},align:"right",width:"15%"},l.a.createElement("a",{href:"https://twitter.com/CanadaMarxists"},l.a.createElement("img",{src:"https://i.imgur.com/4h4WEng.png",alt:"Twitter",width:"38",height:"38",style:{display:"block"},border:"0"}))))))))};var T=function(e){return l.a.createElement("section",{id:"Preview"},l.a.createElement("nav",{className:"sectionNav"},l.a.createElement(h.Title,{isSize:2},"Phone Preview")),l.a.createElement("div",{id:"template-container"},l.a.createElement(C,{eventCards:e.eventCards,thisWeek:e.thisWeek,emailTitle:e.emailTitle,emailSubtitle:e.emailSubtitle})))};var S=function(e){return l.a.createElement(h.Modal,{isActive:e.showHelpModal},l.a.createElement(h.ModalBackground,null),l.a.createElement(h.ModalCard,null,l.a.createElement(h.ModalCardHeader,null,l.a.createElement(h.ModalCardTitle,null,"How To Use This Website"),l.a.createElement(h.Delete,{onClick:e.hideHelpModal})),l.a.createElement(h.ModalCardBody,null,l.a.createElement("ol",null,l.a.createElement("li",null,"Add all the event details"),l.a.createElement("li",null,"Make sure everything is correct"),l.a.createElement("li",null,"Click Copy in the top right corner of the site"),l.a.createElement("li",null,"Paste into any text editor like notepad or word"),l.a.createElement("li",null,"Save as anyname.html"),l.a.createElement("li",null,"Open anyname.html in any browser by right clicking the file and selecting Open With, or by opening the browser and pressing ctrl + o, then navigating to anyname.html"),l.a.createElement("li",null,"Press ctrl + a to select the whole page, then ctrl + c to copy it, then paste it into the compose window of any email site"),l.a.createElement("li",null,"Send the email!")),l.a.createElement("hr",null),l.a.createElement("b",null,"Weird Quirks"),l.a.createElement("p",null,"The email will look better once you've sent it than it will in the preview."),l.a.createElement("p",null,"The time input has three fields: hour, minute, and AM/PM. To select AM or PM, type AM or PM in that field."),l.a.createElement("p",null,"It's a work in progress. Cut a comrade some slack."))))},N='\n    <!DOCTYPE html>\n    <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"\n        xmlns:o="urn:schemas-microsoft-com:office:office">\n    \n    <head>\n        <meta charset="utf-8"> \x3c!-- utf-8 works for most cases --\x3e\n        <meta name="viewport" content="width=device-width"> \x3c!-- Forcing initial-scale shouldn\'t be necessary --\x3e\n        <meta http-equiv="X-UA-Compatible" content="IE=edge"> \x3c!-- Use the latest (edge) version of IE rendering engine --\x3e\n        <meta name="x-apple-disable-message-reformatting"> \x3c!-- Disable auto-scale in iOS 10 Mail entirely --\x3e\n        <title></title> \x3c!-- The title tag shows in email notifications, like Android 4.4. --\x3e\n    \n        <link href="https://fonts.googleapis.com/css?family=Work+Sans:200,300,400,500,600,700" rel="stylesheet">\n    \n        \x3c!-- CSS Reset : BEGIN --\x3e\n        <style>\n            body,\n            html {\n                margin: 0 auto !important;\n                padding: 0 !important;\n                height: 100% !important;\n                width: 100% !important\n            }\n    \n            * {\n                -ms-text-size-adjust: 100%;\n                -webkit-text-size-adjust: 100%\n            }\n    \n            div[style*="margin: 16px 0"] {\n                margin: 0 !important\n            }\n    \n            table,\n            td {\n                mso-table-lspace: 0 !important;\n                mso-table-rspace: 0 !important\n            }\n    \n            table {\n                border-spacing: 0 !important;\n                border-collapse: collapse !important;\n                table-layout: fixed !important;\n                margin: 0 auto !important\n            }\n    \n            img {\n                -ms-interpolation-mode: bicubic\n            }\n    \n            a {\n                text-decoration: none\n            }\n    \n            .aBn,\n            .unstyle-auto-detected-links *,\n            [x-apple-data-detectors] {\n                border-bottom: 0 !important;\n                cursor: default !important;\n                color: inherit !important;\n                text-decoration: none !important;\n                font-size: inherit !important;\n                font-family: inherit !important;\n                font-weight: inherit !important;\n                line-height: inherit !important\n            }\n    \n            .a6S {\n                display: none !important;\n                opacity: .01 !important\n            }\n    \n            .im {\n                color: inherit !important\n            }\n    \n            img.g-img+div {\n                display: none !important\n            }\n    \n            @media only screen and (min-device-width:320px) and (max-device-width:374px) {\n                u~div .email-container {\n                    min-width: 320px !important\n                }\n            }\n    \n            @media only screen and (min-device-width:375px) and (max-device-width:413px) {\n                u~div .email-container {\n                    min-width: 375px !important\n                }\n            }\n    \n            @media only screen and (min-device-width:414px) {\n                u~div .email-container {\n                    min-width: 414px !important\n                }\n            }\n    \n            .bg_white {\n                background: #fff\n            }\n    \n            .bg_light {\n                background: #fff\n            }\n    \n            .bg_black {\n                background: #000\n            }\n    \n            .bg_dark {\n                background: rgba(0, 0, 0, .8)\n            }\n    \n            .email-section {\n                padding: 2.5em\n            }\n    \n            .btn {\n                padding: 5px 15px;\n                display: inline-block\n            }\n    \n            .btn.btn-primary {\n                border-radius: 5px;\n                background: #2f89fc;\n                color: #fff\n            }\n    \n            .btn.btn-white {\n                border-radius: 5px;\n                background: #fff;\n                color: #000\n            }\n    \n            .btn.btn-white-outline {\n                border-radius: 5px;\n                background: 0 0;\n                border: 1px solid #fff;\n                color: #fff\n            }\n    \n            h1,\n            h2,\n            h3,\n            h4,\n            h5,\n            h6 {\n                font-family: \'Work Sans\', sans-serif;\n                color: #000;\n                margin-top: 0;\n                font-weight: 400\n            }\n    \n            body {\n                font-family: \'Work Sans\', sans-serif;\n                font-weight: 400;\n                font-size: 15px;\n                line-height: 1.8;\n                color: rgba(0, 0, 0, .4)\n            }\n    \n            a {\n                color: #2f89fc\n            }\n    \n            .logo h1 {\n                margin: 0\n            }\n    \n            .logo h1 a {\n                color: #000;\n                font-size: 20px;\n                font-weight: 700;\n                text-transform: uppercase;\n                font-family: Poppins, sans-serif\n            }\n    \n            .navigation {\n                padding: 0\n            }\n    \n            .navigation li {\n                list-style: none;\n                display: inline-block;\n                margin-left: 5px;\n                font-size: 13px;\n                font-weight: 500\n            }\n    \n            .navigation li a {\n                color: rgba(0, 0, 0, .4)\n            }\n    \n            .hero {\n                position: relative;\n                z-index: 0\n            }\n    \n            .hero .text {\n                color: rgba(0, 0, 0, .3)\n            }\n    \n            .hero .text h2 {\n                color: #000;\n                font-size: 30px;\n                margin-bottom: 0;\n                font-weight: 300\n            }\n    \n            .hero .text h2 span {\n                font-weight: 600;\n                color: #2f89fc\n            }\n    \n            .heading-section h2 {\n                color: #000;\n                font-size: 28px;\n                margin-top: 0;\n                line-height: 1.4;\n                font-weight: 400\n            }\n    \n            .heading-section .subheading {\n                margin-bottom: 20px !important;\n                display: inline-block;\n                font-size: 13px;\n                text-transform: uppercase;\n                letter-spacing: 2px;\n                color: rgba(0, 0, 0, .4);\n                position: relative\n            }\n    \n            .heading-section .subheading::after {\n                position: absolute;\n                left: 0;\n                right: 0;\n                bottom: -10px;\n                content: \'\';\n                width: 100%;\n                height: 2px;\n                background: #2f89fc;\n                margin: 0 auto\n            }\n    \n            .heading-section-white {\n                color: rgba(255, 255, 255, .8)\n            }\n    \n            .heading-section-white h2 {\n                line-height: 1;\n                padding-bottom: 0\n            }\n    \n            .heading-section-white h2 {\n                color: #fff\n            }\n    \n            .heading-section-white .subheading {\n                margin-bottom: 0;\n                display: inline-block;\n                font-size: 13px;\n                text-transform: uppercase;\n                letter-spacing: 2px;\n                color: rgba(255, 255, 255, .4)\n            }\n    \n            .text-project {\n                padding-top: 10px\n            }\n    \n            .text-project h3 {\n                margin-bottom: 0\n            }\n    \n            .text-project h3 a {\n                color: #000\n            }\n    \n            .footer {\n                color: rgba(255, 255, 255, .5)\n            }\n    \n            .footer .heading {\n                color: #fff;\n                font-size: 20px\n            }\n    \n            .footer ul {\n                margin: 0;\n                padding: 0\n            }\n    \n            .footer ul li {\n                list-style: none;\n                margin-bottom: 10px\n            }\n    \n            .footer ul li a {\n                color: rgba(255, 255, 255, 1)\n            }\n        </style>\n    \n    \n    </head>\n    \n    <body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #222222;">\n        <center style="width: 100%; background-color: #f1f1f1;">\n',M="\n    </center>\n</body>\n\n</html>\n";n(33);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var O=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(d.a)(this,Object(u.a)(t).call(this,e))).incrementEventCards=function(){var e=Object(c.a)(n.state.eventCards);e.push({title:"",location:"",description:"",date:"",startTime:"",endTime:"",imageURL:"",facebookURL:""}),n.setState({eventCards:e})},n.decrementEventCards=function(e){if(window.confirm("Are you sure you want to delete this event?")){var t=Object(c.a)(n.state.eventCards);t.splice(e,1),setTimeout(n.removeDeleteNotification,3e3),n.setState({eventCards:t,showDeleteNotification:!0})}},n.removeDeleteNotification=function(){n.setState({showDeleteNotification:!1})},n.showSuccessNotification=function(){setTimeout(n.removeSuccessNotification,3e3),n.setState({showSuccessNotification:!0})},n.removeSuccessNotification=function(){n.setState({showSuccessNotification:!1})},n.showDebugNotification=function(){setTimeout(n.removeDebugNotification,6e3),n.setState({showDebugNotification:!0})},n.removeDebugNotification=function(){n.setState({showDebugNotification:!1})},n.openHelpModal=function(){n.setState({showHelpModal:!0})},n.hideHelpModal=function(){n.setState({showHelpModal:!1})},n.copyToClipboard=function(){var e=document.getElementById("template-container").innerHTML;navigator.clipboard.writeText(String(N+e+M)),n.showSuccessNotification()},n.debug=function(){navigator.clipboard.writeText(JSON.stringify(n.state)),n.showDebugNotification()},n.toggleThisWeek=function(){n.setState({thisWeek:!n.state.thisWeek})},n.updateEventCardValue=function(e,t,a){console.log("index: ",e,"field: ",t,"value: ",a);var l=Object(c.a)(n.state.eventCards);l[e][t]=a,n.setState({eventCards:l})},n.updateTitleValue=function(e,t){console.log("field: ",e,"value: ",t);var a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n.state);a[e]=t,n.setState(a)},n.state={showDeleteNotification:!1,showSuccessNotification:!1,showDebugNotification:!1,showHelpModal:!1,thisWeek:!0,emailTitle:"Events This Week",emailSubtitle:"Come out this week to get involved!",eventCards:[{title:"",location:"",description:"",date:"",startTime:"",endTime:"",imageURL:"",facebookURL:""}]},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css"}),l.a.createElement("script",{src:"https://unpkg.com/computed-style-to-inline-style"}),l.a.createElement(v,{copyToClipboard:this.copyToClipboard,debug:this.debug,openHelpModal:this.openHelpModal}),l.a.createElement("div",{id:"content"},l.a.createElement(x,{eventCards:this.state.eventCards,incrementEventCards:this.incrementEventCards,decrementEventCards:this.decrementEventCards,updateEventCardValue:this.updateEventCardValue,thisWeek:this.state.thisWeek,toggleThisWeek:this.toggleThisWeek,emailTitle:this.state.emailTitle,emailSubtitle:this.state.emailSubtitle,updateTitleValue:this.updateTitleValue}),l.a.createElement(T,{eventCards:this.state.eventCards,thisWeek:this.state.thisWeek,emailTitle:this.state.emailTitle,emailSubtitle:this.state.emailSubtitle}),this.state.showDeleteNotification?l.a.createElement(h.Notification,{isColor:"danger",id:"delete-notification"},l.a.createElement(h.Delete,{onClick:this.removeDeleteNotification}),"Event Deleted"):"",this.state.showSuccessNotification?l.a.createElement(h.Notification,{isColor:"success",id:"success-notification"},l.a.createElement(h.Delete,{onClick:this.removeSuccessNotification}),"Copied to Clipboard"):"",this.state.showDebugNotification?l.a.createElement(h.Notification,{isColor:"success",id:"success-notification"},l.a.createElement(h.Delete,{onClick:this.removeDebugNotification}),"Debug info copied to clipboard",l.a.createElement("br",null),"Take a screenshot and send both to the person responsible for the site!"):"",l.a.createElement(S,{showHelpModal:this.state.showHelpModal,hideHelpModal:this.hideHelpModal})))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.a690c73f.chunk.js.map