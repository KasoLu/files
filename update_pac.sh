#! /bin/bash

newip=$(ifconfig en0 | sed -En 's/127.0.0.1//;s/.*inet (addr:)?(([0-9]*\.){3}[0-9]*).*/\2/p')
echo "new ip is $newip"
sed -i '' -r '1s/([0-9]{1,3}\.){3}[0-9]{1,3}'/$newip/ auto_proxy.pac
echo "proxy host changed to $newip"
git add .
git commit -m "commit ip change to $newip"
git push
echo "finished"
