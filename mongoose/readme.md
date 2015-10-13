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
$ sudo service mongodb stop
mongodb stop/waiting
$ sudo service mongodb start
```
### O módulo adm inicia sem os serviços rest. Para liberá-lo
```sh
$ gedit /etc/mongodb.conf
acrescentei :
rest=true
```

Após aceitar rest, poderemos solicitar:
http://localhost:28017/telemetryDb/telemetryinfos/?limit=10
Obs: há diferenciação entre :
http://localhost:28017/telemetryDb/telemetryinfos
e
http://localhost:28017/telemetryDb/telemetryinfos/


mongo cmd prompt
$ mongo
> help
> help connect
> show dbs
> use telemetryDb
> show collections
system.indexes
telemetryinfos
> db.telemetryinfos.find()
> db.telemetryinfos.find({"sentence_id":"id2"})


Sleepy.Mongoose: A MongoDB HTTP Interface
Install MongoDB.
Install the Python driver:
$ easy_install pymongo
Download Sleepy.Mongoose.
From the mongoose directory, run:
$ python httpd.py


AMID is a REST interface for MongoDB. Written in Node.js

RESTHeart
http://restheart.org/
