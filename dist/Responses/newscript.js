require("dotenv").config();
const ShortenerURL = process.env.HOME_URL;

// https://stackoverflow.com/questions/6396101/pure-javascript-send-post-data-without-a-form
// Backend code was taken from "WebDevSimplified" !
function get_short_url() {
    let data = { "fullUrl":`${window.location.href}&shared=True` };

    fetch(`${ShortenerURL}shortUrls`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    }).then(res=>{
        return res.json();
    }).then(response=>{
        console.log(ShortenerURL+response.url)
        return ShortenerURL+response.url
    })
    .catch(err=>{
        return err;
    })
}

