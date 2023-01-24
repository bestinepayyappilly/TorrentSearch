<h1>Torrent Search Engine App</h1>
  
<h3>A beautiful and simple search engine that supports both iOS and android</h3>
<h3>I was supposed to add this to the android and apple app store and then i found out that apple forbids you to add torrent related apps on the app store </h3>
    
<h1>What a sham, nothing I can do about that</h1>

<img src="https://github.com/bestinepayyappilly/TorrentSearch/blob/main/TorrentSearchFrontend/giphy%20(1).gif" width="400" height="350" />
<h3>And then I decided why waste my time on these people and just make it a simple project and that's what I did. I no longer needed to switch on my VPN and search torrent websites for the perfect torrent. It was all there in my app and i can create a ipa file whenever i needed for an iPhone. Not like I have an iPhone but, in the untimely desicion that i may take to switch to an iPhone, that case was also done.</h3> 

So What have I done so far,
- [x] Used a premade scrapper from github for the backend access to all available torrents.
- [x] customized it for my needs.
- [x] first tested it with localhost if at all works and yes it does
- [x] hosting (first I used heroku but they banned me within two days and i am yet to know what i have done wrong. Not gonna sit around waiting for a reply so bye-bye heroku, hello GCloud.)
- [x] Creating the app.(I used a premade template as it was more easier and faster to complete the project and didnt have to mess with the non logical stuff like libraries installation and so on.)
- [x] created custom animated bottom sheet thinking why not compete with react-native Bottom Sheets v4 but thats for another post. Moving on.
- [x] and that was it. I sat to add sorting and filtering but when i heard no one was gonna use the app besides me. I was a bit demotivated.Not gonna lie.
- [ ] adding an inbuilt VPN for ease of use.

<h1>Instructions</h1>
Everything's pretty straight forward.

<h2>Common things to do first:</h2>
1.Clone this repo.

2.open terminal and cd TorrentSearchBackend

3.run yarn or npm install

4.according to the package.json while im writing this the command is node start.

5.cd .. && cd TorrentSearchFrontend && yarn

6.This is device specific:

I'll first do iOS:

1.cd ios && pod install && cd ..

2.to build in a simulator you just have to do yarn ios or npx react-native run-ios

3. its possible xcode will come with an error but ill leave tha for you to handle

Android:

1. yarn android or npx react-native run-android

And that was it, its done.


Star the repo if you find it helpful. will be adding a VPN in built on the app soon.


