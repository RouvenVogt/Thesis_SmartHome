#!/bin/bash 
import sys
import os

PATH=""
GROUP_ID = ""
os.popen('hmip_cli.py --config_file ' + PATH +  '--group' + GROUP_ID + ' --set-point-temperature ' + sys.argv[1] )