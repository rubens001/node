MongoDB Project

instalacao do driver mongo havia problema e sol:
sudo apt-get install libkrb5-dev

porta nativa :
http://localhost:27017/
ADM :
http://localhost:28017/

$ find . -name mongodb.conf
./etc/mongodb.conf
./etc/init/mongodb.conf

$ service mongodb stop
mongodb stop/waiting
$ service mongodb start

Para liberar REST:
gedit /etc/mongodb.conf

acrescentei :
rest=true

