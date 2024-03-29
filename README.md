# "Ed, Edd, n Eddy" API - backend

## Author: [Brady Davenport](http://github.com/bradydavenport)

### About

One of the TV shows of my childhood was Cartoon Network's "Ed, Edd, n Eddy".

Beginning my foray into choosing and building coding projects of my own after graduating from Code Fellows, I wanted to create an API.

During my time in class, we often used lightweight APIs such as the Pokemon API or the Star Wars API in order to get proof of life on projects.

Creating this API accomplishes a few things for me:

- I get to do what developers do: develop
- I get to provide a resource for anybody needing to bring in API information in a project for proof of life or any other purpose it may serve
- I get to add a new flavor of API to the internet (at least I think, I Googled for an Ed, Edd, Eddy API and couldn't find anything)

### Mar 2023 Update

All that handjamming I did in the local was for nothing because the method I tried for importing the local to Heroku didn't work.  I dug into why I couldn't just CRUD directly to the heroku db and got it fixed, so now I can populate the deployed db from ThunderClient in my editor. Phew, got that part fixed.  I spent way too much time today on a very insignificant problem - the sequelize data type for the episode numbers. Also got that figured out, not exactly how I wanted but in a presentable manner.  Now that I have proof of life for populating the deployed db, I'm going to switch gears to the front end to have a UI and instructions page so real people can really use the API, despite it only having a couple of entries for each of the routes so far - I can get the rest of the data in later. Main goal is to have a working product first, then a working product with all data later.

### Feb 2023 Update

Since last update I've still just been populating my local database with the data - handjamming away adding characters and epiodes one-by-one.  I know there's probably a way more efficient way to do it, but hey, I'm on the learning journey, learning things and stuff. Kinda why I'm doing this? Once I get the database populated I well remove the backend code allowing CUD operations (keeping the R, obviously) since the show is discontinued and nothing will change, nor do I want there to be any option to in the app. I did find a method I will try for migrating the database when the time is right.  The eggs are all in that basket at this point.

### Jan 2023 Update

As you can see I made a scant few commits last month, what I've been working on since is non-code stuff.  When I first started this project, Heroku was still free.  When they started charging, I was looking for other free deployment solutions.  Trying to do that while simultaneously figure out how to populate my db with the information (its not as cut and dry as what I learned in coding bootcamp), has taken up a lot of time and thus led to the ugly empty boxes on my github front page.  I have decided to pay for Heroku and am going to move forward trying to populate my local database and then figure out a way to migrate it into my production database when the time is right.

### Dec 2022 Update

Not going to lie, I stepped away from this project for a bit.  Since graduating my coding bootcamp in August I have been on the job hunt, and while I started with vigor, there hasn't been much luck and as the rejection emails rolled in, I let my projects wither along with my hope.  I recently had bit of an uptick which re-invigorated me and I am jumping back into this now.

In trying to get back on the horse (seriously, don't stop coding, you lose it quick), my first goal is just to populate the database and get the entirety of it to show up on a page, then I will work on making it searchable by characters, episodes, etc.
