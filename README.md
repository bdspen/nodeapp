# _User app with Stormpath_

##### _Description_

#### By _**Ben Spenard**_

## Description

_Detailed Desc._
###### Explanation of files used in this project and what they are for
* _profile.js_ is a router file: A router is an isolated instance of middleware and routes.
Routers can be thought of as "mini" applications, capable only
of performing middleware and routing functions. Every express
application has a built-in app router. _basically a mini app which handles JUST the details associated with the profile page_
* files in the _views_ folder are the pages the user sees
* _app.js_ is the entry point for your server application.
* _package.json_ This file is used by Node.js to keep track of what libraries (aka modules) your project depends on.

###### Other notes
* I added (lines 6 and 7 of app.js) an option to change the port that your node server is working on just change the value in "YOUR CUSTOM PORT VALUE" to whatever port you want your local node js server to be and match that value in the app.listen(); at the end of the app.js file.

## Setup
###### This is the setup to view the project as a whole

* _setup_
* _to list setup instructions_
* _in a simple_
* _if you want to walk through the tutorial to build this site go to https://stormpath.com/blog/build-nodejs-express-stormpath-app/_


## Technologies Used

_node.js, Express, Bootstrap, Stormpath_

_**Stormpath** is an API service that allows developers to create, edit, and securely store user accounts and user account data, and connect them with one or multiple applications. Their API enables you to:_

* Authenticate and authorize your users
* Store data about your users
* Perform password and social based login
* Send password reset messages
* Issue API keys for API-based web apps

_**tech tip!:**_ use the Nodemon tool (file watcher) This will start your server and watch for any file changes. Nodemon will automatically restart your server if you change any files!
install globally
* npm install -g nodemon
* _then run_ nodemon app.js _where app.js is your application entry file_


### Legal

Copyright (c) 2015 **_Ben Spenard_**

This software is licensed under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
