var queryDict1=[];
var queryDict2=[];
location.search.substr(1).split("&").forEach(function(item) {
    var d1=item.split("=")[0];
    var d2=item.split("=")[1];
    var flag=false;
    var i;
    for(i=0;i<queryDict1.length;i++){
        if(d1==queryDict1[i]){
            flag=true;
            break;
        }
    }
    if(flag==false){
        queryDict1.push(d1);
        queryDict2.push([]);
    }
    queryDict2[i].push(d2);
});
console.log(queryDict1); 
console.log(queryDict2);

const rocket_blast=
`<div class="master_rocket">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
</div>`;

const rocket=
`<div class="rocket">
</div>`;

const flower_pot_blast=
`<div class="master_flower">
    <div class="fire"></div>
    <div class="fire"></div>
    <div class="fire"></div>
    <div class="fire"></div>
    <div class="fire"></div>
    <div class="fire"></div>
    <div class="fire"></div>
    <div class="fire"></div>
    <div class="cone"></div>
</div>`

/* Center of screen variable*/
var rocket_pos=48;
var rocket_div=document.querySelector(".rocket_div");
var sub_master=document.querySelector(".sub_master");
for(var i=0;i<Number(queryDict2[queryDict1.indexOf("rocketcount")]);i++){
    rocket_div.innerHTML=rocket_div.innerHTML+rocket_blast;
    sub_master.innerHTML=sub_master.innerHTML+rocket;
}

var x = window.matchMedia("(max-width: 600px)");
/* Rocket selector */
var k1=document.getElementsByClassName("rocket");
/* Rocket sparkle selector */
var k2=document.getElementsByClassName("master_rocket");

/* Positioning of rockets.
Notice "(i+1)*10". This is base for placing the rockets with respect to blast position beautification */

for(var i=0;i<k1.length;i++){
    if(i%2==0){
        /* Rocket will be left of button */ 
        k1[i].style.transform="rotate(-90deg)";
        /* trabslate transform is same as below */
        k1[i].style.left=(rocket_pos-((i+1)*10)/2)+"vw";
    }
    else{
        /* Rocket will be right of button */ 
        k1[i].style.transform="rotate(-90deg)";
        k1[i].style.left=(rocket_pos+((i+1)*10)/2)+"vw";
    }
    k1[i].style.top="90vh";
}



/* Make sure no scrolling is provided to the user */
var s=window.innerHeight;
document.body.style.height=s;
document.body.style.overflow="hidden";

var t=0;
for(var i=0;i<k2.length;i++){
    var g=queryDict2[queryDict1.indexOf("rocketheight")][i];
    /* Purpose of beautification */
    /* First added rocket will come towards left as 
    margin was mentioned to the right of the div. */
    if(i%2!=0){
        k2[i].style.marginLeft=(i+1)*10+"vw";
    }
    if(i%2==0){
        k2[i].style.marginRight=(i+1)*10+"vw";
    }
    /* Below is done to make sure that all divs containing
    the blast are at the top of the page. 50 is the height of each div */
    
    if(g=="Low"){
        /* Adjusting the height of the div containing 
        the blast particles of rocket */
        k2[i].style.height="60vh";
        /* And then again aliging the div with the mentioned "top"
        style and get that div back to the top of the page, with the help of "t" */
        k2[i].style.top=(-1*t)+"vh";
        t=t+60;
    }
    else if(g=="Medium"){
        k2[i].style.height="40vh";
        k2[i].style.top=(-1*t)+"vh";
        t=t+40;
    }
    else{
        k2[i].style.height="20vh";
        k2[i].style.top=(-1*t)+"vh";
        t=t+20
    }
}

/* Access the message */
const message=document.getElementsByTagName('h1')[0];
for(var i=0;i<queryDict1.length;i++){
    if(queryDict1[i]=="article"){
        var replaced=queryDict2[i][0].split('+').join(' ');
        message.innerHTML=replaced+"<br><br><p>From: "+queryDict2[i-2][0]+"</p><p>To: "+queryDict2[i-1][0]+"</p";
    }
}
var t=document.getElementsByTagName("p");
for(var i=0;i<t.length;i++){
    t[i].style.fontSize="20px";
    t[i].style.textAlign="left";

}

/* Dynamic creation of keyframes to the rockets */
let styleSheet=null; 
dynamicAnimation=(name,styles)=>{ 
    if(!styleSheet){ 
        styleSheet=document.createElement('style'); 
        styleSheet.type='text/css'; 
        document.head.appendChild(styleSheet); 
    }
    styleSheet.sheet.insertRule(`@keyframes ${name} {${styles}}`, styleSheet.length ); 
}


/* Animation control */
var e=document.querySelector(".shoot");
var s=document.querySelectorAll(".rocket");
var d=document.querySelectorAll(".circle");
var h=document.getElementsByTagName("h1");
e.addEventListener("click",function(){
    while(true){
        if(e.value=="start"){
            for (var i=0;i<s.length;i++){
                var text="";
                var g=queryDict2[queryDict1.indexOf("rocketheight")][i];
                if(g=="Low"){
                    text=
                    "0%{opacity:1;}60%{opacity:0;}80%{top:60vh;}100%{opacity:0;}";
                }
                else if(g=="Medium"){
                    text=
                    "0%{opacity:1;}60%{opacity:0;}80%{top:40vh;}100%{opacity:0;}";
                }
                else{
                    text=
                    "0%{opacity:1;}60%{opacity:0;}80%{top:20vh;}100%{opacity:0;}";
                }
                dynamicAnimation("newAnimation"+i, text); 
                s[i].style.animationName="newAnimation"+i;
                s[i].style.boxShadow="-30px 0px 10px orange";
            }
            for (var i=0;i<d.length;i++) {
                d[i].style.animationName="super_burst";
            }
            h[0].style.animationName="transition";
            e.value="stop";
            console.log("started");
            break;
        }
        if(e.value=="stop"){
            for (var i=0;i<s.length;i++) {
                s[i].style.animationName="none";
                s[i].style.boxShadow="none";
            }
            for (var i=0;i<d.length;i++) {
                d[i].style.animationName="none";
            }
            h[0].style.animationName="none";
            e.value="start";
            console.log("stopped");
            break;
        }
    }
});



