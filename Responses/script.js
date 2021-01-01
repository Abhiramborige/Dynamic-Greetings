var queryDict1=[];
var queryDict2=[];
/* Decode the default encodings */
var url=decodeURIComponent(location.search);
url.substr(1).split("&").forEach(function(item) {
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


/* Make sure no scrolling(horizontal) is provided to the user. */
var s1=window.innerHeight;
document.body.style.height=s1;
document.body.style.overflow="hidden";

/* Position rocket blast according to User */
var t1=0;
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
        k2[i].style.top=(-1*t1)+"vh";
        t1=t1+60;
    }
    else if(g=="Medium"){
        k2[i].style.height="40vh";
        k2[i].style.top=(-1*t1)+"vh";
        t1=t1+40;
    }
    else{
        k2[i].style.height="20vh";
        k2[i].style.top=(-1*t1)+"vh";
        t1=t1+20
    }
}

/* Access the message */
const message=document.getElementsByTagName('h1')[0];
const greet=document.getElementsByTagName('p')[0];
for(var i=0;i<queryDict1.length;i++){
    if(queryDict1[i]=="article"){
        var replaced=queryDict2[i][0].split('+').join(' ');
        message.innerHTML=replaced
        greet.innerHTML="From: "+queryDict2[i-1][0].split('+').join(' ');
        // "<br>To: "+queryDict2[i-1][0];
    }
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


var flower_div=document.querySelector(".flower_div");
for(var i=0;i<Number(queryDict2[queryDict1.indexOf("flowercount")]);i++){
    flower_div.innerHTML=flower_div.innerHTML+flower_pot_blast;
}

/* Position flowerpot and sparkle according to User */
var k3=document.getElementsByClassName("master_flower");

/* making t2 same as t1 to make sure that the gap produced when
making the rocket blasts to be at top of page is covered in the similar way.*/
var t2=t1;

for(var i=0;i<k3.length;i++){
    
    var g=queryDict2[queryDict1.indexOf("flowerposition")][i];
    /* Purpose of beautification */
    /* First added rocket will come towards left as 
    margin was mentioned to the right of the div. */
    if(i%2!=0){
        k3[i].style.marginLeft=(i+1)*14+"vw";
    }
    if(i%2==0){
        k3[i].style.marginRight=(i+1)*14+"vw";
    }
    
    if(g=="Bottom"){
        /* Adjusting the height of the div containing the cone and sparkle */
        k3[i].style.height="90vh";
        /* And then again aliging the div with the mentioned "top"
        style and get that div back to the top of the page, with the help of "t" */
        k3[i].style.top=(-1*t2)+"vh";
        t2=t2+90;
    }
    else if(g=="Center"){
        k3[i].style.height="60vh";
        k3[i].style.top=(-1*t2)+"vh";
        t2=t2+60;
    }
    else{
        k3[i].style.height="40vh";
        k3[i].style.top=(-1*t2)+"vh";
        t2=t2+40;
    }
}

var audio1 = document.getElementById("sound_play1");
audio1.volume=0.1;

/* Animation control */
var e=document.querySelector(".shoot");
var s1=document.querySelectorAll(".rocket");
var d1=document.querySelectorAll(".circle");
var d2=document.querySelectorAll(".fire");
var h=document.getElementsByTagName("h1");
var audio2=document.getElementById("sound_play2");
audio2.volume=0.1;
e.addEventListener("click",function(){
    while(true){
        if(e.value=="start"){
            for(var i=0;i<s1.length;i++){
                var text="";
                var g=queryDict2[queryDict1.indexOf("rocketheight")][i];
                if(g=="Low"){
                    text=
                    "0%{opacity:1;}60%{top:60vh;opacity:0;}100%{opacity:0;}";
                }
                else if(g=="Medium"){
                    text=
                    "0%{opacity:1;}60%{top:40vh;opacity:0;}100%{opacity:0;}";
                }
                else{
                    text=
                    "0%{opacity:1;}60%{top:20vh;opacity:0;}100%{opacity:0;}";
                }
                dynamicAnimation("newAnimation"+i, text); 
                s1[i].style.animationName="newAnimation"+i;
                s1[i].style.boxShadow="-30px 0px 10px orange";
            }
            for(var i=0;i<d1.length;i++) {
                d1[i].style.animationName="super_burst";
            }
            for(var i=0;i<d2.length;i++) {
                d2[i].style.animationName="burst";
            }
            h[0].style.animationName="transition";
            /* Audio */
            audio2.currentTime = 0;
            audio2.play();
            audio1.play();

            e.value="stop";
            console.log("started");
            break;
        }
        if(e.value=="stop"){
            for(var i=0;i<s1.length;i++) {
                s1[i].style.animationName="none";
                s1[i].style.boxShadow="none";
            }
            for(var i=0;i<d1.length;i++) {
                d1[i].style.animationName="none";
            }
            for(var i=0;i<d2.length;i++) {
                d2[i].style.animationName="none";
            }
            h[0].style.animationName="none";
            e.value="start";
            /* Audio */
            audio2.pause();

            console.log("stopped");
            break;
        }
    }
});

/* Each set of 8 fire elements make up a single sparkle. */
var s2=document.querySelectorAll(".fire");
/* Controlling the height of sparkle according to user */
var k=8;
var g=queryDict2[queryDict1.indexOf("sparkleheight")];
for(var i=0;i<g.length;i++){
    if(g[i]=="High"){
        var q=0;
        var he=35;
        var wi=15;
        for(var j=0;j<k;j++){
            s2[(i*8)+j].style.height=he+"vh";
            s2[(i*8)+j].style.width=wi+"vh";
            q++;
            /* Because for every 2 elements of fire, the height and width changes */
            if(q%2==0){
                he=he-10;
                wi=wi-4;
            }
        }
    }
    else if(g[i]=="Medium"){
        var q=0;
        var he=25;
        var wi=10;
        for(var j=0;j<k;j++){
            s2[(i*8)+j].style.height=he+"vh";
            s2[(i*8)+j].style.width=wi+"vh";
            q++;
            if(q%2==0){
                he=he-6;
                wi=wi-2;
            }
        }
    }
    else{
        var q=0;
        var he=15;
        var wi=5;
        for(var j=0;j<k;j++){
            s2[(i*8)+j].style.height=he+"vh";
            s2[(i*8)+j].style.width=wi+"vh";
            q++;
            if(q%2==0 && q!=0){
                he=he-4;
                wi=wi-1;
            }
        }
    }
}