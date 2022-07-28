var url_string = “https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&u
tm_medium=webplugin&utm_campaign=poweredby”; //window.location.href
var url = new URL(url_string);
var c = url.searchParams.get("c");
console.log(c);