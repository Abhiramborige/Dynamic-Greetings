var queryDict1=[];
var queryDict2=[];
/* Decode the default encodings */
var url=decodeURIComponent(window.location.search);
var d1,d2;
url.substr(1).split("&").forEach(function(item) {
    d1=item.split("=")[0];
    d2=item.split("=")[1];
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

// check if the rendered page is shared by others or created to share
if(!(d1=="shared" && d2=="True")){
    let button_div=document.querySelector(".bclass");
    /* 
    <button onclick="get_short_url()" class="share_btn">Share with friends ! 
        <span class="popuptext">Sharable URL Copied !</span>
    </button>
    */
    var button=document.createElement("button")
    button.setAttribute("onclick","get_short_url()");
    button.setAttribute("class","share_btn");
    button.appendChild(document.createTextNode("Share with Friends !"));
    var span_popup=document.createElement("span");
    span_popup.setAttribute("class","popuptext");
    span_popup.appendChild(document.createTextNode("Shareble URL Copied !"));
    button.appendChild(span_popup);
    button_div.appendChild(button);
}

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


const chakra_blast=
`<div class="master_chakra">
    <div class="wheel_base">
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <img id="logo" src="../others/chakra.png" alt="Design">
    </div>
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
const message=document.getElementsByClassName('sub_div_msg')[0];
const greet=document.getElementsByTagName('p')[0];
/*  Regular expression to match emoji
Referred to 
1. https://thekevinscott.com/emojis-in-javascript
2. https://stackoverflow.com/questions/18862256/how-to-detect-emoji-using-javascript
3. https://www.codegrepper.com/code-examples/javascript/detect+emoji+in+string+javascript
4. https://melvingeorge.me/blog/check-if-string-contain-emojis-javascript */
const regexExp = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c\ude32-\ude3a]|[\ud83c\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
var i;
for(i=0; i<queryDict1.length; i++){
    if(queryDict1[i]=="article"){
        break;
    }
}
var replaced=queryDict2[i][0].split('+').join(' ');
var replaced="<h1>"+replaced+"</h1>";
// code for not to apply styling to the emojis to maintain the original color
if(replaced.search(regexExp)!=-1){
    const found=replaced.match(regexExp); // returns array of all matches of emoji
    console.log(found);
    for(var j=0; j<found.length; j++){
        // styling for h1 to remove the color (reverting back all applied css).
        var newRegex="</h1><h1 style='all: revert'>"+found[j]+"</h1><h1>";
        // if not found of this kind, then add to replaced string
        if(replaced.search(newRegex)==-1){
            replaced=replaced.replaceAll(found[j],"</h1><h1 style='all: revert'>"+found[j]+"</h1><h1>");
        }
    }
}
message.innerHTML=replaced
greet.innerHTML=queryDict2[i-1][0].split('+').join(' ');
// "<br>To: "+queryDict2[i-1][0];

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
    if(k3.length<=2){
        if(i%2!=0){
            k3[i].style.marginLeft=(2)*30+"vw";
        }
        if(i%2==0){
            k3[i].style.marginRight=(2)*30+"vw";
        }
    }
    else{
        if(i%2!=0){
            k3[i].style.marginLeft=(i+1)*14+"vw";
        }
        if(i%2==0){
            k3[i].style.marginRight=(i+1)*14+"vw";
        }
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




var chakra_div=document.querySelector(".chakra_div");
for(var i=0;i<Number(queryDict2[queryDict1.indexOf("chakracount")]);i++){
    chakra_div.innerHTML=chakra_div.innerHTML+chakra_blast;
}

/* Position chakra and sparkle according to User */
var k4=document.getElementsByClassName("master_chakra");

/* making t2 same as t1 to make sure that the gap produced when
making the rocket blasts to be at top of page is covered in the similar way.*/
var t3=t2;

for(var i=0;i<k4.length;i++){
    
    var g=queryDict2[queryDict1.indexOf("chakraposition")][i];
    /* Purpose of beautification */
    /* First added rocket will come towards left as 
    margin was mentioned to the right of the div. */
    if(k4.length<=2){
        if(i%2!=0){
            k4[i].style.marginLeft=(2)*20+"vw";
        }
        if(i%2==0){
            k4[i].style.marginRight=(2)*20+"vw";
        }
    }
    else{
        if(i%2!=0){
            k4[i].style.marginLeft=(i+1)*18+"vw";
        }
        if(i%2==0){
            k4[i].style.marginRight=(i+1)*18+"vw";
        }
    }
    
    if(g=="Bottom"){
        /* Adjusting the height of the div containing the cone and sparkle */
        k4[i].style.height="90vh";
        /* And then again aliging the div with the mentioned "top"
        style and get that div back to the top of the page, with the help of "t" */
        k4[i].style.top=(-1*t3)+"vh";
        t3=t3+90;
    }
    else if(g=="Center"){
        k4[i].style.height="40vh";
        k4[i].style.top=(-1*t3)+"vh";
        t3=t3+40;
    }
    else{
        k4[i].style.height="20vh";
        k4[i].style.top=(-1*t3)+"vh";
        t3=t3+20;
    }
}


var audio1 = document.getElementById("sound_play1");
audio1.volume=0.09;

// rotation animation keyframe template
// https://stackoverflow.com/questions/4974238/javascript-equivalent-of-pythons-format-function
rot_keyframe=(deg_int)=>
`0% { 
    transform: rotate(0deg);
}
10%{
    border: 2px solid orangered;
    box-shadow: 0px 0px 60px 10px yellow;
}
90%{
    border: 2px solid gray;
    box-shadow: 0px 0px 60px 10px sandybrown;
}
100% { 
    transform: rotate(${deg_int}deg);
}`

function child_modifier(parent_ele, straigh_transform, diag_transform){
    var index=0
    for(j in parent_ele.children){
        ele = parent_ele.children[j]
        if(index==0)
            ele.style.transform=`translate(0px, ${straigh_transform}px)`;
        else if(index==1)
            ele.style.transform=`translate(${diag_transform}px, ${diag_transform}px)`;
        else if(index==2)
            ele.style.transform=`translate(${straigh_transform}px, 0px)`;
        else if(index==3)
            ele.style.transform=`translate(-${diag_transform}px, -${diag_transform}px)`;
        else if(index==4)
            ele.style.transform=`translate(0px, -${straigh_transform}px)`;
        else if(index==5)
            ele.style.transform=`translate(-${straigh_transform}px, 0px)`;
        else if(index==6)
            ele.style.transform=`translate(${diag_transform}px, -${diag_transform}px)`;
        else if(index==7)
            ele.style.transform=`translate(-${diag_transform}px, ${diag_transform}px)`;
        index=index+1;
    }
}


/* Animation control */
var e=document.querySelector(".shoot");
var s1=document.querySelectorAll(".rocket");
var s3=document.querySelectorAll(".wheel_base");
var d1=document.querySelectorAll(".circle");
var d2=document.querySelectorAll(".fire");
var d3=document.querySelectorAll(".particle")
var h=document.getElementsByClassName("sub_div_msg");
// var audio2=document.getElementById("sound_play2");

// for chakra (size of chakra)
for(var i=0;i<s3.length;i++){
    var g=queryDict2[queryDict1.indexOf("circleradius")][i];
    if(g=="Small"){
        s3[i].style.height="30px";
        s3[i].style.width="30px";
        child_modifier(s3[i], 30, 22);
    }
    else if(g=="Medium"){
        s3[i].style.height="40px";
        s3[i].style.width="40px";
        child_modifier(s3[i], 40, 30);
    }
    else{
        s3[i].style.height="50px";
        s3[i].style.width="50px";
        child_modifier(s3[i], 50, 35);
    }
}



// audio2.volume=0.1;
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
            // for chakra animation (duration of rotation)
            for(var j=0;j<s3.length;j++){
                var text="";
                var g=queryDict2[queryDict1.indexOf("rotateduration")][j];
                if(g=="Short"){
                    text=rot_keyframe(360);
                    s3[j].style.animationDuration="1s";
                }
                else if(g=="Medium"){
                    text=rot_keyframe(432);
                    s3[j].style.animationDuration="2s";
                }
                else{
                    text=rot_keyframe(540);
                    s3[j].style.animationDuration="3s";
                }
                dynamicAnimation("move"+j, text); 
                s3[j].style.animationName="move"+j;
            }
            for(var i=0;i<d1.length;i++) {
                d1[i].style.animationName="super_burst";
            }
            for(var i=0;i<d2.length;i++) {
                d2[i].style.animationName="burst";
            }
            for(var i=0;i<d3.length;i++) {
                d3[i].style.animationName="particle";
            }
            h[0].style.animationName="transition";
            /* Audio */
            // audio2.currentTime = 0;
            // audio2.play();
            audio1.play();
            // getSoundAndFadeAudio(audio1)

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
            for(var i=0;i<d3.length;i++) {
                d3[i].style.animationName="none";
            }
            h[0].style.animationName="none";
            e.value="start";
            /* Audio */
            // audio2.pause();
            audio1.pause();

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