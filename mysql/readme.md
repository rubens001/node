MySQL to Rest Project

exite um aparentemente bug na montagem da query para select

                var whereArr = [];

                for (var q in req.query) {
                    if (req.query.hasOwnProperty(q)) {
                        if (q.substr(0, 1) !== settings.paramPrefix) {
                            if (checkIfFieldsExist(q, rows)) {

                                if (typeof req.query[q] === "string") {
                                    //If it is a simple string, the api assumes = as the operator
                                    whereArr.push(q + ' = ' + req.query[q]); // rbz: retirado escape
                                    // whereArr.push(q + ' = ' + escape(req.query[q]));

                                }


consultas possiveis
http://localhost:8000/api/user_portal
http://localhost:8000/api/user_portal/2
http://localhost:8000/api/user_portal?_limit=0,10&username="admin"
http://localhost:8000/api/user_portal?_limit=0,10&_order[id]=DESC&id[GREAT]=1

