# -*- coding: utf-8 -*-

import homematicip
from homematicip.base.enums import *
from homematicip.home import Home
from homematicip.device import ShutterContact,HeatingThermostat,PlugableSwitchMeasuring,WallMountedThermostatPro



def main():
    home = Home()
    home.set_auth_token("Input AuthToken")
    home.init("Input AP SGTIN")






    home.get_current_state()
    for g in home.groups:
        if g.groupType=="META":
            for device in g.devices:
                if isinstance(device,HeatingThermostat):
                    return(str(device.valveActualTemperature) + " °C")
                    #return [device.valveActualTemperature,
                    #        device.automaticValveAdaptionNeeded,
                    #        device.setPointTemperature,
                    #        g.label, device.label, device.lastStatusUpdate]
                        
         

                 
            
print(main())
