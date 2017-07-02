# iword_wxapp
The app is an wechat mini program bu using javascript, json, wxss(similar to css) and also wxml(similar to html))

This app is designed to help students to remember new words. In the meantime, they can try to test themselves on this app.

In all of the documents, ../pages/index/index.wxml is the index page. 

Few tips:
1.In ../app.js, wholeword is the place to store different words including their phonogram and Chinese meaning. The format of whole word is like {"list1" : {["word":"(english)", "symbol": "(phonogram)", "meaning": "(chinese meaning)"],[..]}}

2.in ../selection/selection.js, encode function is used to create a serial number for every user. The serial number will judge whether the user has the access to the full version of this app.
