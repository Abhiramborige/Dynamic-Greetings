var e1=document.querySelector(".option_rocket");
var e2=document.querySelector(".option_flower");
var e3=document.querySelector(".option_chakra");

var g=document.getElementsByClassName("message");
var opt1=document.querySelector("#rocketchoice");
var opt2=document.querySelector('#flowerchoice');
var opt3=document.querySelector('#chakrachoice');

/* Content to be added dynamically*/
const rocket=
`<select name="rocketcount" id="number_rocket">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
</select>`;

const flower=
`<select name="flowercount" id="number_flower">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
</select>`;

const chakra=
`<select name="chakracount" id="number_chakra">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
</select>`;

const content_rocket=
`<div class="sub_options_rocket">
    <fieldset>
        <label for="number">Height of blast:</label><br>
        <select name="rocketheight" id="number">
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
        </select><br>
    </fieldset>
</div> `;

const content_flower=
`<div class="sub_options_flower">
    <fieldset>
        <label for="number">Height of sparkle:</label><br>
        <select name="sparkleheight" id="number">
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
        </select><br>
        <label for="number">Position of Pot:</label><br>
        <select name="flowerposition" id="number">
            <option value="Top">Top</option>
            <option value="Center">Center</option>
            <option value="Bottom">Bottom</option>
        </select>
    </fieldset>
</div> `;

const content_chakra=
`<div class="sub_options_chakra">
    <fieldset>
        <label for="number">Duration of rotation:</label><br>
        <select name="rotateduration" id="number">
            <option value="Long">Long</option>
            <option value="Medium">Medium</option>
            <option value="Short">Short</option>
        </select><br>
        <label for="number">Radius of chakra:</label><br>
        <select name="circleradius" id="number">
            <option value="Big">Big</option>
            <option value="Medium">Medium</option>
            <option value="Small">Small</option>
        </select><br>   
        <label for="number">Position of chakra:</label><br>
        <select name="chakraposition" id="number">
            <option value="Top">Top</option>
            <option value="Center">Center</option>
            <option value="Bottom">Bottom</option>
        </select>
    </fieldset>
</div>`


/* Styles of all elements here */
e1.style.justifyContent="space-around";
e2.style.justifyContent="space-around";
e3.style.justifyContent="space-around";
for(var i=0;i<g.length;i++){
    g[i].style.textAlign="center";
    g[i].style.width="100%";
}

opt1.addEventListener("click",function(){
    if(opt1.checked==true){
        var l1=document.querySelector(".label");
        var l2=document.querySelector(".input");
        var temp1=document.createElement('label');
        temp1.setAttribute('for','number_rocket');
        temp1.textContent="Count:";
        l1.insertBefore(temp1,l1.querySelector('label[for=flowerchoice]'));
        var br=document.createElement('br');
        l1.insertBefore(br,l1.querySelector('label[for=flowerchoice]'));

        opt1.insertAdjacentHTML("afterend",rocket);
        var f1=document.querySelector("#number_rocket");
        f1.insertAdjacentHTML("beforebegin","<br>");

        e1.innerHTML=content_rocket;
        g[0].innerHTML="Whole Screen is divided into 1 sections.";
        f1.addEventListener("click",function(){
            var v=f1.options[f1.selectedIndex].value;
            g[0].innerHTML="Whole Screen is divided into "+v+" sections.";
            e1.innerHTML="";

            for(var i=0;i<v;i++){
                e1.innerHTML=e1.innerHTML+content_rocket;
            }
        });
        console.log("Ticked");
    }
    else{
        var l1=document.querySelector(".label");
        var l2=document.querySelector(".input");
        var temp1=l1.children;
        var temp2=l2.children;
        for(var i=0;i<temp1.length-1;i++){
            if(temp1[i].getAttribute("for")=="number_rocket"){
                l1.removeChild(temp1[i]);
                l1.removeChild(temp1[i-1])
                break;
            }
        }
        for(var j=0;j<temp2.length-1;j++){
            if(temp2[j].getAttribute("id")=="number_rocket"){
                l2.removeChild(temp2[j]);
                l2.removeChild(temp2[j-1]);
                break;
            }
        }
        e1.innerHTML="";
        g[0].innerHTML="";
        console.log("Not ticked");
    }
});

opt2.addEventListener("click",function(){
    if(opt2.checked==true){
        var l1=document.querySelector(".label");
        var l2=document.querySelector(".input");
        var temp1=document.createElement('label');
        temp1.setAttribute('for','number_flower')
        temp1.textContent="Count:";
        l1.insertBefore(temp1,l1.querySelector('label[for=chakrachoice]'));
        var br=document.createElement('br');
        l1.insertBefore(br,l1.querySelector('label[for=chakrachoice]'));

        opt2.insertAdjacentHTML("afterend",flower);
        var f2=document.querySelector("#number_flower");
        f2.insertAdjacentHTML("beforebegin","<br>");

        e2.innerHTML=content_flower;
        g[1].innerHTML="Whole Screen is divided into 1 sections.";
        f2.addEventListener("click",function(){
            var v=f2.options[f2.selectedIndex].value;
            g[1].innerHTML="Whole Screen is divided into "+v+" sections.";
            e2.innerHTML="";
            for(var i=0;i<v;i++){
                e2.innerHTML=e2.innerHTML+content_flower;
            }
        });
        console.log("Ticked");
    }
    else{
        var l1=document.querySelector(".label");
        var l2=document.querySelector(".input");
        var temp1=l1.children;
        var temp2=l2.children;
        for(var i=0;i<temp1.length-1;i++){
            if(temp1[i].getAttribute("for")=="number_flower"){
                l1.removeChild(temp1[i]);
                l1.removeChild(temp1[i-1])
                break;
            }
        }
        for(var j=0;j<temp2.length-1;j++){
            if(temp2[j].getAttribute("id")=="number_flower"){
                l2.removeChild(temp2[j]);
                l2.removeChild(temp2[j-1]);
                break;
            }
        }
        e2.innerHTML="";
        g[1].innerHTML="";
        console.log("Not ticked");
    }
});

opt3.addEventListener('click', function(){
    if(opt3.checked==true){
        var l1=document.querySelector(".label");
        var l2=document.querySelector(".input");
        var temp1=document.createElement('label');
        temp1.setAttribute('for','number_chakra');
        temp1.textContent="Count:";
        l1.appendChild(temp1);
        var br=document.createElement('br');
        l1.appendChild(br);

        opt3.insertAdjacentHTML("afterend",chakra);
        var f3=document.querySelector("#number_chakra");
        f3.insertAdjacentHTML("beforebegin","<br>");

        e3.innerHTML=content_chakra;
        g[2].innerHTML="Whole Screen is divided into 1 sections.";
        f3.addEventListener("click",function(){
            var v=f3.options[f3.selectedIndex].value;
            g[2].innerHTML="Whole Screen is divided into "+v+" sections.";
            e3.innerHTML="";
            for(var i=0;i<v;i++){
                e3.innerHTML=e3.innerHTML+content_chakra;
            }
        });
        console.log("Ticked");
    }
    else{
        var l1=document.querySelector(".label");
        var l2=document.querySelector(".input");
        var temp1=l1.children;
        var temp2=l2.children;
        for(var i=0;i<temp1.length-1;i++){
            if(temp1[i].getAttribute("for")=="number_chakra"){
                l1.removeChild(temp1[i]);
                l1.removeChild(temp1[i-1])
                break;
            }
        }
        for(var j=0;j<temp2.length-1;j++){
            if(temp2[j].getAttribute("id")=="number_chakra"){
                l2.removeChild(temp2[j]);
                l2.removeChild(temp2[j-1]);
                break;
            }
        }
        e3.innerHTML="";
        g[2].innerHTML="";
        console.log("Not ticked");
    }
})





var z1=document.querySelector("label[for=name1]");
//var z2=document.querySelector("label[for=name2]");
var z3=document.querySelector("label[for=rocketchoice]");
var z4=document.querySelector("label[for=flowerchoice]");
var z5=document.querySelector("label[for=chakrachoice]");

var x = window.matchMedia("(max-width: 600px)");
/* When you register an event listener with addListener() 
it won’t fire initially. We need to call the
event handler function manually and 
pass the media query as the argument. */

var k1=z1.textContent;
//var k2=z2.textContent;
var k3=z3.textContent;
var k4=z4.textContent;
var k5=z5.textContent;
function myFunction(x){
    // If media query matches
    if (x.matches){ 
        z1.innerHTML="📝 Note";
        //z2.innerHTML="Receiver:";
        z3.innerHTML="🚀 Rockets:";
        z4.innerHTML="🔥 Pots:";
        z5.innerHTML="💣 Chakras:";
    }
    else{
        z1.innerHTML=k1;
        //z2.innerHTML=k2;
        z3.innerHTML=k3;
        z4.innerHTML=k4;
        z5.innerHTML=k5;
    }
}
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes