const ShortenerURL = "https://creative-greets.netlify.app/.netlify/functions/server/";

// https://stackoverflow.com/questions/6396101/pure-javascript-send-post-data-without-a-form
// Backend code was taken from "WebDevSimplified" !
function get_short_url() {
    let data = { "fullUrl":`${window.location.href}&shared=True` };
    var span_popup=document.querySelector(".popuptext");
    span_popup.classList.remove("show");
    fetch(`${ShortenerURL}shortUrls`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    }).then(res=>{
        return res.json();
    }).then(response=>{
        console.log(ShortenerURL+response.url)
        let shortURL=ShortenerURL+response.url;
        span_popup.classList.add("show");
        navigator.clipboard.writeText(shortURL);
    })
    .catch(err=>{
        return err;
    })
}

