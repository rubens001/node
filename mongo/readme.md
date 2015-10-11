# MongoDB Project

instalacao do driver mongo havia problema e sol:
```sh
$ sudo apt-get install libkrb5-dev
```
porta nativa :

http://localhost:27017/

ADM :

http://localhost:28017/

```sh
$ find . -name mongodb.conf
./etc/mongodb.conf
./etc/init/mongodb.conf
```
```sh
$ service mongodb stop
mongodb stop/waiting
$ service mongodb start
```
### O módulo adm inicia sem os serviços rest. Para liberá-lo
```sh
$ gedit /etc/mongodb.conf
acrescentei :
rest=true
```

