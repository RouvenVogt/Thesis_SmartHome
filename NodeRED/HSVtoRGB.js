var h = msg.payload.color.spectrumHsv.hue
var s = msg.payload.color.spectrumHsv.saturation *100
var v = msg.payload.color.spectrumHsv.value *100

if (h === 0 || s === 0){
    return null;
}


function hsvToRgb(h, s, v) {
    var r, g, b;
    var i;
    var f, p, q, t;
     
    // Make sure our arguments stay in-range
    h = Math.max(0, Math.min(360, h));
    s = Math.max(0, Math.min(100, s));
    v = Math.max(0, Math.min(100, v));
     

    s /= 100;
    v /= 100;
     
    if(s === 0) {
        // Achromatic (grey)
        r = g = b = v;
        return [
            Math.round(r * 255), 
            Math.round(g * 255), 
            Math.round(b * 255)
        ];
    }
     
    h /= 60; // sector 0 to 5
    i = Math.floor(h);
    f = h - i; // factorial part of h
    p = v * (1 - s);
    q = v * (1 - s * f);
    t = v * (1 - s * (1 - f));
     
    switch(i) {
        case 0:
            r = v;
            g = t;
            b = p;
            break;
     
        case 1:
            r = q;
            g = v;
            b = p;
            break;
     
        case 2:
            r = p;
            g = v;
            b = t;
            break;
     
        case 3:
            r = p;
            g = q;
            b = v;
            break;
     
        case 4:
            r = t;
            g = p;
            b = v;
            break;
     
        default: // case 5:
            r = v;
            g = p;
            b = q;
    }
    return { r: Math.round(r * 255), 
             g: Math.round(g * 255),
             b: Math.round(b * 255) } ;
}
var rgb = hsvToRgb(h,s,v);

rh = rgb.r.toString(16);
if (rh.length < 2){
    rh = "0"+rh;
}
gh = rgb.g.toString(16);
if (gh.length < 2){
    gh = "0"+gh;
}
bh = rgb.b.toString(16);
if (bh.length < 2){
    bh = "0"+bh;
}


var rgbh = "0x" + rh + gh + bh;

msg.payload = rgbh;


return msg;
