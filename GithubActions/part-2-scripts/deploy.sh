#!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v20.5.0/bin
# THe above line lets us use node pm2 and stuff

cd Week-9
 git pull origin master
 cd server
 pm2 kill
 pm2 start index.js
