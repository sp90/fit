## Frontend Angular Boilerplate

A boilerplate for angular applications - see the summary for basic description of content or the list for a detailed view. 

#### Table of contents

* <a href="#summary">Summary</a>
* <a href="#getting-started">Getting started</a>
* <a href="#extended-features">Extended Features</a>
	* <a href="#newstate">Newstate</a>
	* <a href="#page-class">Page Class</a>
	* <a href="#modular-sass">Modular Sass</a>
* <a href="#content-list">Content list</a>
	* <a href="#package-scripts">Package scripts</a>
	* <a href="#dependencies--versions">Dependencies & Versions</a>
	* <a href="#javascript-libaries">Javascript libaries</a>

### Summary

This basicly runs node.js server that return index.js on all url's. 

Then it uses Angular with ng-animate applied and the  "ui-router" and then i attached the full jquery(1.11.1) libary so it has IE8 support.

It has browserify for js dependencies management & sourcemaps for scss development. It has dev & prod build setups.

There is also a sublime-project file for those of you that use sublime - if you dont use it you can delete the file.

### Getting started

Start download the project as a zip or clone it and remove the .git folder

`npm install`'s both bower components and node dependencies

`grunt` just builds the project with development settings such as sourcemaps for sass and dont minify ether js or css.

`grunt dev` does the grunt command first then it adds a concurrent build so file changes proc's a build on the type of files.

`grunt build` does a minifyed version of css and javsacript for a production enviroment.

`npm start` starts the node server on port 3000 or the pref enviroment port by this `process.env.PORT || 3000` port setup.

### Extended Features

#### Newstate

Angular states for the ui-router this is the way you add new pages iv'd build a function that adds a state, ctrl & template when you run it with the right names inside the files you only need to require it inside index.js.

`node newstate.js STATENAME` This command adds a new state or a new template it generates a copy of the files in newstate folder with your STATENAME - remember to require it in the index.js.

If your in doubt how these states work you can always go to src/index.js there is a the index page required.

#### Page Class

It has a class that is set on each state so you can set a rootclass on each different state for better css control over the content. 

#### Modular Sass

I use a sass structure that i made - from my knowlegde of using both <a href="http://patternlab.io/">atomic sass</a> by Brad Frost & <a href="https://github.com/csswizardry/inuit.css/">Inuit css</a> by Harry Roberts. 

You find it <a href="https://github.com/sp90/modularSass">here</a> on github - with a description and list of the contents. 

It basicly contains:

* Bourbon
* Animate.css (modified for sass support)
* Inuit grid
* New naming structure
	 * Core
	 * Modules
	 * Pages
	 * Settings
	 * Vendor
* A subset of breakpoint
* <a href="https://github.com/sp90/modularSass">And more..</a>

### Content list

####Package scripts:

* preinstall: bower install
* postinstall: grunt build
* start: node index.js

####Dependencies & Versions:

* bower: 1.3.10
* browserify: 5.9.3
* browserify-shim: 3.7.0
* chalk: 0.5.1
* concat-stream: 1.4.6
* express: 4.9.1
* grunt: 0.4.5
* grunt-browserify: 3.0.1
* grunt-cli: 0.1.13
* grunt-concurrent: 1.0.0
* grunt-contrib-clean: 0.6.0
* grunt-contrib-copy: 0.5.0
* grunt-contrib-watch: 0.6.1
* grunt-sass: 0.16.1
* load-grunt-tasks: 0.6.0
* lodash: 2.4.1
* mold-source-map: 0.3.0
* morgan: 1.3.1
* should: 4.0.4
* streamifier: 0.1.0


####Javascript libaries:

* angular: ~1.3.2
* angular-resource: ~1.3.2
* angular-animate: ~1.3.2
* jquery: ~1.11.1
* ui-router: ~0.2.11



<br />

<i>Made by nomis</i>

Github: <a href="https://github.com/sp90">sp90</a><br />
Twitter: <a href="https://twitter.com/nomisweb">@nomisweb</a><br />
Linkedin: <a href="dk.linkedin.com/pub/simon-petersen/71/b30/112/">Simon Dragsbæk Petersen</a><br />
Blog: <a href="http://www.nomis.dk">nomis.dk</a>
