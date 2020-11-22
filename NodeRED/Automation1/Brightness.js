var payload = msg.payload.payload
if (payload == "1"){
    msg.payload = 50;
    }
if (payload == "2"){
    msg.payload = 60;
    }
if (payload == "3"){
    msg.payload = 90;
    }

return msg;
