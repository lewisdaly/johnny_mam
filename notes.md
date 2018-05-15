https://github.com/rwaldron/johnny-five/wiki/Getting-Started#trouble-shooting

Firmware

The StandardFirmataPlus firmware is the one that is used for Johnny-Five to communicate with the board. That means you have to install it first, then you can execute the nodejs programs.

    Install arduino package on your operating system (otherwise Arduino IDE).
    Make a firmware folder and save this firmware.ino into it. if the link is dead again and not appearing in the Arduino IDE, use this gist backup.
    Install arduino libraries via arduino --install-library "Firmata,Servo" in the Terminal.
    Flash the arduino board via arduino --board "arduino:avr:uno" --upload ./path/to/firmware/firmware.ino. Remember to change your board according to what you use. See below on how to figure out that identifier.
    If the upload was successful, the board is now prepared for johnny-five usage.


"arduino:avr:uno" for Arduino/Genuino Uno