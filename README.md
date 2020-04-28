# MagicMirror
This is my config for MagicMirror
(Original source from Magic Miror Offcial Website: https://magicmirror.builders/)
### STEP1. Installing a Magic Mirror
Install the Magic Mirror using a script on the Internet
```
sudo apt-get install npm
sudo npm install -g npm@latest
bash -c "$(curl -sL https://raw.githubusercontent.com/sdetweil/MagicMirror_scripts/master/raspberry.sh)"
```
After that, using automatic installation method
### STEP2. Installing WWW Hotword
```
cd ~/MagicMirror/modules
git clone https://github.com/bugsounet/MMM-Hotword.git
cd MMM-Hotword
npm install
```
After that, using automatic installation method
### STEP3. Installing MMM MK2 Version 3.1.0-2 by Command line
```
cd ~/MagicMirror/modules/
cd modules
git clone https://github.com/bugsounet/MMM-AssistantMk2
cd MMM-AssistantMk2
npm install
```
After that, using automatic installation method
