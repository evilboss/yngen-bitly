# REST API to URL Shortener Development Task for node.js
  
Description
------------
```
Bitly is a simple service for shortening URLs. It accepts long URLs and converts them into short URLs of the form https://bit.ly/2FpwtdM.  
The scope of this task is to implement a simple REST API in node.js containing one endpoint that will receive a long URL and utilize the bitly API to return a short URL. Maintain a file on the server in /tmp directory where you will log every request:
<timestamp> - <longURL> <shortURL>
```
   


Prerequisites
--------------

Have the following pre-installed:
* Yarn — Package manager
* Node- Runtime environment for running the javascript applications outside the browser.

Installation
------------
```
#install packages
yarn

#start application
yarn start
#test application
yarn start

#open browser and navigate to localhost:3000
```


Considerations
--------------

* [x] Provide a project that can easily be built and tested.
* [x] Include at least a simple web page to allow testing the API.
Use ES6.
* [x] Make sure to wrap the functionality of communicating with bitly, in a class.
* [x] When using packages focus on promise-based packages and not callback-based packages.
* [x] Feel free to use npm packages for whatever you need and prefer.
* [x] Readability of the code and commenting will be taken into account.

Folder Structure
-----------------

```
app
├── client - Client folder
│   ├── components - Components folder
│   │   ├── App.js
│   │   ├── Header.js
│   │   └── UrlForm.js
│   └── index.js
├── package.json
├── README.md
├── server
│   ├── bitly.js
│   ├── config
│   │   └── config.json
│   ├── index.html
│   ├── index.js
│   ├── logWriter.js
│   └── tmp
│       └── log.txt
├── test  - Test Folder
│   └── test.js
├── webpack.config.dev.js
└── yarn.lock

```
