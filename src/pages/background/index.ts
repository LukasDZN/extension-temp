import reloadOnUpdate from "virtual:reload-on-update-in-background-script";

reloadOnUpdate("pages/background");

/**
 * Extension reloading is necessary because the browser automatically caches the css.
 * If you do not use the css of the content script, please delete it.
 */
reloadOnUpdate("pages/content/style.scss");

console.log("background loaded");

const url = "https://www.google.com/travel/search?q=miru+gion&qs=a";
const headers = {
  Cookie: "CONSENT=YES+997;",
  "Accept-Encoding": "gzip,deflate,compress",
  Accept: "*/*",
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  "cache-control": "no-cache",
  Connection: "keep-alive",
};

const sendRequest = async () => {
  try {
    console.log(url);
    const response = await fetch(url, {
      method: "GET",
      headers: headers,
    });

    console.log(`HTTP status: ${response.status}`);

    const data = await response.text();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

sendRequest();
