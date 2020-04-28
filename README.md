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
### STEP3. Installing MMM MK2 Version 3.1.0-2
```
cd ~/MagicMirror/modules/
cd modules
git clone https://github.com/bugsounet/MMM-AssistantMk2
cd MMM-AssistantMk2
npm install
```
After that, using automatic installation method

### STEP4. Configure MMM MK2 Module
1. Go to Google Action Console and create a new project
```
https://console.actions.google.com
```
2. Open the Google Cloud Platform Console and select the generated project
```
https://console.cloud.google.com
```
3. Search for the Google Assistant API and click Enable.
4. Click CONFIGURE ... of Credentials and put the name and e-mail.
5. Generate Other credentials with the OAuth Client ID in Create Credentials
6. Download generated OAuth client ID in json format
7. Move the downloaded OAuth client ID to MagicMirror and rename it to credentials.json /module/MMM-AssistantMk2/
```sh
mv ~/Download/cre.... credentials.json
```
8. From the local command line in Hardware, run auth_and_test.js to verify the generated client ID
```sh
cd /MagicMirror/modules/MMM-AssistantMk2
node auth_and_test.js
```
9. The local browser will display follow it to accept the client verification process to generate the key
10. Copy the key and paste to the local command line
11. Move the generated token.json
```sh
mv token.json ./profiles/default.json
```
