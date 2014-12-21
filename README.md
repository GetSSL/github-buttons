# GitHub Buttons

Showcase star count of any repo with an easy to generate image. No JS/iframes needed.   

## Usage

To generate an image just request the following URL: **``http://github.h-s.io/stars/:username/:repo``** where ``:username`` is the owner of your desired repo and ``:repo`` is the name of repository. Basically the URL follows the same naming scheme as GitHub. The image is cached but will represent recent star count of the chosen repo. It updates every few hours (this may change later to more frequent time interval).

## Installation

If you want to host this service yourself, it can be easily done. 

* Just clone the repo or obtain a zip version of it
* Assure you have node.js and npm installed
* Execute ``npm install`` from command line to install all dependecies
* Run the server with ``nodejs main.js`` (by default it opens up port 3000)
* Profit?!

## Inspiration
 
There are already several services that provide rich GitHub buttons, but all of them require either iframe or javascript which is limiting for some use cases, e.g., for use in GitHub markdown documents. Some of the services that provide js/iframe buttons are: [GitHub Buttons](http://ghbtns.com/) by mdo and [github-buttons](https://github.com/ntkme/github-buttons) by ntkme.  

As you may notice the buttons generated by this service look very similar to GitHub Buttons by mdo. To save time and avoid reinventing the wheel this service only takes a screenshot of the requested button found at [ghbtns.com](http://ghbtns.com/). In the future I will probably create the HTML version of buttons locally to avoid external request and dependency to ghbtns.com.

## Contributions

The source code is available at Github – [lauris/github-buttons](https://github.com/lauris/github-buttons). Your feedback and contributions are always welcome. 
