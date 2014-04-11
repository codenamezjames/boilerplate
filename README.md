# Boiler plate

powered by

* NPM
* Bower
* Grunt
* Angular
* Bootstrap

#### To install clone the repo, open comand line, "cd" in to the html directory within this app, run "npm install",run "bower install", run "grunt watch"

Please Note you must have a nginx server running this app with ssi and cross site enabled

and you must add the server to your hosts file

    server {
        ssi on; #Allow the use of includes in html
        add_header Access-Control-Allow-Origin *; #CORS for ajax calls
        server_name bp.localhost;
        root /path/to/html;
            index index.html index.htm;
            location / {
                    try_files $uri $uri/ /index.html;
            }
    }