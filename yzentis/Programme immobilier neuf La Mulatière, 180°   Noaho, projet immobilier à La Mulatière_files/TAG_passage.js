(function() {
var veillereferencement__path_tracking='http://tracking.veille-referencement.com/';var veillereferencement__path_tracking_secure='https://tracking.veille-referencement.com/';var veillereferencement__URL=unescape(window.document.URL);if(veillereferencement__URL.indexOf('http://127.0.0.1',0)==-1&&veillereferencement__URL.indexOf('file://',0)==-1&&veillereferencement__URL.indexOf('http://localhost',0)==-1)
{var veillereferencement__id='';var veillereferencement__redirect='';var veillereferencement__idregie='';var veillereferencement__testframe='';var veillereferencement__type_page='';var veillereferencement__curseur=-1;var veillereferencement__curseur2=-1;if(document.getElementById)
{if(document.getElementById("tg_passage_cybercite"))
{var veillereferencement__path=document.getElementById("tg_passage_cybercite").src;}}
else if(document.all)
{if(document.all["tg_passage_cybercite"])
{var veillereferencement__path=document.all["tg_passage_cybercite"].src;}}
if(veillereferencement__path!='')
{veillereferencement__curseur=veillereferencement__path.lastIndexOf("url=");if(veillereferencement__curseur!=-1)
{veillereferencement__curseur2=veillereferencement__path.indexOf('&',veillereferencement__curseur);if(veillereferencement__curseur2!=-1)
{veillereferencement__redirect=veillereferencement__path.substring(veillereferencement__curseur+4,veillereferencement__curseur2);}
else
{veillereferencement__redirect=veillereferencement__path.substring(veillereferencement__curseur+4);}}
veillereferencement__curseur=veillereferencement__path.lastIndexOf("idsite");if(veillereferencement__curseur!=-1)
{veillereferencement__curseur2=veillereferencement__path.indexOf('&',veillereferencement__curseur);if(veillereferencement__curseur2!=-1)
{veillereferencement__id=veillereferencement__path.substring(veillereferencement__curseur+7,veillereferencement__curseur2);}
else
{veillereferencement__id=veillereferencement__path.substring(veillereferencement__curseur+7);}}
veillereferencement__curseur=veillereferencement__path.lastIndexOf("idregie=");if(veillereferencement__curseur!=-1)
{veillereferencement__curseur2=veillereferencement__path.indexOf('&',veillereferencement__curseur);if(veillereferencement__curseur2!=-1)
{veillereferencement__idregie=veillereferencement__path.substring(veillereferencement__curseur+8,veillereferencement__curseur2);}
else
{veillereferencement__idregie=veillereferencement__path.substring(veillereferencement__curseur+8);}}
veillereferencement__curseur=veillereferencement__path.lastIndexOf("frame=");if(veillereferencement__curseur!=-1)
{veillereferencement__curseur2=veillereferencement__path.indexOf('&',veillereferencement__curseur);if(veillereferencement__curseur2!=-1)
{veillereferencement__testframe=veillereferencement__path.substring(veillereferencement__curseur+6,veillereferencement__curseur2);}
else
{veillereferencement__testframe=veillereferencement__path.substring(veillereferencement__curseur+6);}}
veillereferencement__curseur=veillereferencement__path.lastIndexOf("type_page=");if(veillereferencement__curseur!=-1)
{veillereferencement__curseur2=veillereferencement__path.indexOf('&',veillereferencement__curseur);if(veillereferencement__curseur2!=-1)
{veillereferencement__type_page=veillereferencement__path.substring(veillereferencement__curseur+10,veillereferencement__curseur2);}
else
{veillereferencement__type_page=veillereferencement__path.substring(veillereferencement__curseur+10);}}
veillereferencement__curseur=veillereferencement__path.lastIndexOf("https://");if(veillereferencement__curseur!=-1)
{veillereferencement__path_tracking=veillereferencement__path_tracking_secure;}}
var veillereferencement__now=new Date();var veillereferencement__ts=Math.round(veillereferencement__now.getTime());veillereferencement__stats="id_regie="+veillereferencement__idregie+"&id_site="+veillereferencement__id+"&web_url="+escape(window.document.URL);if(veillereferencement__testframe=='yes')
{veillereferencement__stats+="&web_ref="+escape(window.top.document.referrer);}
else
{veillereferencement__stats+="&web_ref="+escape(window.document.referrer);}
if(veillereferencement__redirect!='')
{veillereferencement__stats+="&web_redirect="+escape(veillereferencement__redirect);}
if(veillereferencement__type_page!='')
{veillereferencement__stats+="&type_page="+escape(veillereferencement__type_page);}
veillereferencement__stats+="&ts="+veillereferencement__ts;if(veillereferencement__redirect!='')
{document.write("<SCRIPT LANGUAGE='javascript'>document.location.href='"+veillereferencement__path_tracking+"statflow_v2.php?"+veillereferencement__stats+"';</SCRIPT>");}
else
{document.write('<div style="position: absolute; top:0px; left:0px; z-index: 2; display:none"><img border="0" height="0" width="0" src="'+veillereferencement__path_tracking+'statflow_v2.php?'+veillereferencement__stats+'"></div>');}}
})();