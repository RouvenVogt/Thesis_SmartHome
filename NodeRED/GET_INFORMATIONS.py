# -*- coding: utf-8 -*-

import requests
import homematicip
from homematicip.base.enums import *
from homematicip.home import Home
from homematicip.device import ShutterContact,HeatingThermostat,PlugableSwitchMeasuring,WallMountedThermostatPro



def main():
    home = Home()
    home.set_auth_token("INPUT AUTH TOKEN")
    home.init("INPUT ACCES POINT SGTIN")






    home.get_current_state()
    for g in home.groups:
        if g.groupType=="META":
            for device in g.devices:
                if isinstance(device,HeatingThermostat):
                    return [device.valveActualTemperature,
                            device.automaticValveAdaptionNeeded,
                            device.setPointTemperature,
                            g.label, device.label, device.lastStatusUpdate]
                        
         

                 
            
print(main())
