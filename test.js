const response = await fetch("https://bhunaksha.cg.nic.in/WMS?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&FORMAT=image%2Fpng&TRANSPARENT=true&LAYERS=VILLAGE_MAP&transparent=true&state=22&gis_code=600501.042&overlay_codes=&CRS=EPSG%3A3857&STYLES=VILLAGE_MAP&FORMAT_OPTIONS=dpi%3A180&WIDTH=2664&HEIGHT=2244&BBOX=-3709.3601848463213%2C-3472.711966645135%2C9017.405024635522%2C7247.581250350835", {
    "headers": {
        "accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
        "accept-language": "en-GB,en;q=0.7",
        "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Brave\";v=\"126\"",
        "sec-ch-ua-mobile": "?1",
        "sec-ch-ua-platform": "\"Android\"",
        "sec-fetch-dest": "image",
        "sec-fetch-mode": "no-cors",
        "sec-fetch-site": "same-origin",
        "sec-gpc": "1",
        "cookie": "JSESSIONID=12669C3A6838F7B9EF1EA0D52410F940",
        "Referer": "https://bhunaksha.cg.nic.in/",
        "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
});

console.log(response.data)