if (flow.get("long") === true) {


    if(msg.payload.brightness < 100){
        flow.set("start",false);
    }
    
    if(flow.get("start") === true){
        msg.payload.color.spectrumHsv.hue = msg.payload.color.spectrumHsv.hue - 5;
    }
       
    if(flow.get("start") === false ){
        msg.payload.color.spectrumHsv.hue = msg.payload.color.spectrumHsv.hue + 5;
    }
    
    if(msg.payload.brightness == 270 ){
        flow.set("start",true);
    }
    return msg
    
}
