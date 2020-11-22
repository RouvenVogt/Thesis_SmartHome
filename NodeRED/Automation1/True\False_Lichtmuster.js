var def = (typeof flow.get("long"));
flow.set("start", true);


if (def == 'undefined') {
    flow.set("long",true);
    msg.payload ={"online":true,"on":true,"brightness":100,"color":{"spectrumHsv":{"hue":360,"saturation":1,"value":1}}};
    return msg;
}
if (flow.get("long") === true) {
    flow.set("long",false);
    return msg;
}
if (flow.get("long") === false) {
    flow.set("long",true);
    msg.payload ={"online":true,"on":true,"brightness":100,"color":{"spectrumHsv":{"hue":360,"saturation":1,"value":1}}};
    return msg;
}
