if (msg.payload.on === false){
    msg.payload = 0; }
else{
    msg.payload = 1;}
return msg;
