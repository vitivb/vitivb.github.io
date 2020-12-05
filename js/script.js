'use strict';const rootColors={darkTheme:{fstMain:'#002137',sndMain:'#18171c',txt:'#fff',border:'#fff',btn:'#fff',btnText:'#000',btnHoverBackground:'#c7d0cc',linkNonVisited:'#c3e4e8',linkHover:'#c7d0cc',},lightTheme:{fstMain:'#a3a3a4',sndMain:'#d3d3d4',txt:'#000',border:'#000',btn:'#000',btnText:'#fff',btnHoverBackground:'#5f6162',linkNonVisited:'#310062',linkHover:'#f5f5f5',},};function showMenu(){const hamburger=document.querySelector('.hamburger'),menu=document.querySelector('.menu__block'),overlay=document.querySelector('.menu__overlay'),close=document.querySelector('.menu__close'),socialAside=document.querySelector('aside');hamburger.addEventListener('click',()=>{menu.classList.add('active');overlay.classList.add('active');});close.addEventListener('click',()=>{menu.classList.remove('active');overlay.classList.remove('active');});}
function changeColor(element,property,value){document.querySelector(element).style.setProperty(property,value);}
function changeToLightTheme(){document.querySelector('.changeToLightTheme').addEventListener('click',()=>{changeColor(':root','--fst_main',rootColors.lightTheme.fstMain);changeColor(':root','--snd_main',rootColors.lightTheme.sndMain);changeColor(':root','--text',rootColors.lightTheme.txt);changeColor(':root','--border',rootColors.lightTheme.border);changeColor(':root','--btn',rootColors.lightTheme.btn);changeColor(':root','--btn-text',rootColors.lightTheme.btnText);changeColor(':root','--btn-hover-background',rootColors.lightTheme.btnHoverBackground);changeColor(':root','--link-non-visited',rootColors.lightTheme.linkNonVisited);changeColor(':root','--link-hover',rootColors.lightTheme.linkHover);document.querySelector('.changeToLightTheme').style.display='none';document.querySelector('.changeToDarkTheme').style.display='inline-block';});}
function changeToDarkTheme(){document.querySelector('.changeToDarkTheme').addEventListener('click',()=>{changeColor(':root','--fst_main',rootColors.darkTheme.fstMain);changeColor(':root','--snd_main',rootColors.darkTheme.sndMain);changeColor(':root','--text',rootColors.darkTheme.txt);changeColor(':root','--border',rootColors.darkTheme.border);changeColor(':root','--btn',rootColors.darkTheme.btn);changeColor(':root','--btn-text',rootColors.darkTheme.btnText);changeColor(':root','--btn-hover-background',rootColors.darkTheme.btnHoverBackground);changeColor(':root','--link-non-visited',rootColors.darkTheme.linkNonVisited);changeColor(':root','--link-hover',rootColors.darkTheme.linkHover);document.querySelector('.changeToDarkTheme').style.display='none';document.querySelector('.changeToLightTheme').style.display='inline-block';});}
const titles={titleCapital:document.querySelectorAll('h1'),titlesSecond:document.querySelectorAll('h2'),titlesThird:document.querySelectorAll('h3'),colors:['#f00'],colorTitles:(title,color)=>{title.forEach((item)=>{let a=item.innerText,b=a.slice(0,a.length-3),specialChar=a.charAt(a.length-3),colorElem=`<font color="${color}">${specialChar}</font>`,c=a.slice(a.length-2,a.length+1);item.innerHTML='';item.innerHTML=`${b}${colorElem}${c}`;});},};const feedbackForm={name:document.querySelector('#name'),email:document.querySelector('#email'),helptext:document.querySelector('p.helptext'),message:document.querySelector('#message'),button:document.querySelector('.modal-thanks button'),domains:['gmail','yandex','yahoo','outlook','hotmail','rambler','lenta','autorambler','myrambler','ro','mail','inbox','list','bk'],watchName:()=>{if(feedbackForm.name.value!=''&&feedbackForm.name.value.length<2||feedbackForm.name.value.length>30)
{feedbackForm.name.style.border='solid 2px red';feedbackForm.name.setAttribute('data-error','');}else{feedbackForm.name.style.border='solid 1px var(--border)';feedbackForm.name.removeAttribute('data-error');}},checkName:()=>{feedbackForm.name.addEventListener('blur',()=>{feedbackForm.watchName();});},watchEmail:()=>{let arr=[];feedbackForm.domains.forEach((item)=>{arr.push(feedbackForm.email.value.includes(item));});if(arr.includes(true)){feedbackForm.email.style.border='solid 1px var(--border)';feedbackForm.email.removeAttribute('data-error');}else{feedbackForm.email.style.border='solid 2px red';feedbackForm.email.setAttribute('data-error','');}
if(feedbackForm.email.hasAttribute('data-error')&&feedbackForm.email.value!=''){feedbackForm.helptext.classList.add('active');}else{feedbackForm.helptext.classList.remove('active');}},checkEmail:()=>{feedbackForm.email.addEventListener('blur',()=>{feedbackForm.watchEmail();});},sendForm:()=>{document.querySelector('form').addEventListener('submit',(e)=>{if(feedbackForm.name.hasAttribute('data-error')||feedbackForm.email.hasAttribute('data-error')){e.preventDefault();return false;}else{e.preventDefault();let form=new FormData(document.forms.feedback);let xhr=new XMLHttpRequest();xhr.open('POST','mailer/smart.php');xhr.send(form);setTimeout(()=>{document.querySelector('.modal-thanks').classList.add('active');},700);feedbackForm.name.value='';feedbackForm.email.value='';feedbackForm.message.value='';document.querySelector('#privacy-policy').checked=false;feedbackForm.button.addEventListener('click',()=>{document.querySelector('.modal-thanks').classList.remove('active');});}});},};titles.colorTitles((titles.titleCapital),(titles.colors[0]));titles.colorTitles((titles.titlesSecond),(titles.colors[0]));titles.colorTitles((titles.titlesThird),(titles.colors[0]));changeToLightTheme();changeToDarkTheme();showMenu();feedbackForm.checkName();feedbackForm.checkEmail();feedbackForm.sendForm();
