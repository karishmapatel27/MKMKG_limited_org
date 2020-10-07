
# MKMKG Ltd Org 

### MVP User request

* As a user I want to be able to make fresh memes with a collection of images alrady stored on a file. I want to make these memes on a website that I could show to anyone anywhere so my friends could see these amazing works of art. These memes will need to have text dislayed clearly over the image, along the bottom portion. 
* I need to have a landing page with a title and a button that invites me to start making my meme dreams come true. This page will offer a link to the list/selection of images that will be the backdrop for the meme.
* When an image is clicked on it will become a large image taking up the majority of the screen. Above the image will be a text box(form) that I will type my funny text in, when I have finished typing I will click submit.
* The submit button on the text box(form) will send the text to the pre decided position on the image (bottom)
* I now have a extremely spicy fresh meme that is funny yet kind and I can save it as a pdf.

*example of a meme*
https://am22.akamaized.net/tms/cnt/uploads/2016/03/ancient-aliens-guy-1170x1024.jpg

### STRETCH User request

* I want to be able to share my new meme with friends, it is currently lockdown so I cannot go to their house and make it in front of them. Can I please have a way of sharing the url so that when my friend opens it on discord it produces the same meme.
* I would love to move the text from the bottom to another position say the top or middle, I would love a drop down selector to give me a choice. 
* I want to change the colour of the text on the meme I make, I love the colour bisque!

## 1: Create repo with a React App inside.

- [x] Repo created MKMKG LIMITED ORG
- [x] Working empty React App

## 2: Launch the basic app on Heroku

- [x] Start up the rocket boosters its launching

 ## 3: Create the Required Routes and Components.
 We will be creating seperate Git branches and creating the components as an individual task, we can definitely work together although this way we all take responsibility for the creation of a component.

**Required Routes:**

- [ ] Home/welcoming route/path - '/'.
- [ ] List of images route/path - '/imageSelection'.
- [ ] Meme image and text box route/path - '/makeYourMeme/:Image'

    *optional as this could be the image and text with no text box displayed*
- [ ] Final meme displayed route/path - '/yourMeme'

**Required components**

- [ ] Initial start meme button/ link on the home path -'/'

- [ ] Image list/ grouping to select the backdrop of the meme on the - '/imageSelection' path

- [ ] Home button/ a back button to return to the Image list. this will be on the - '/makeYourMeme' path
- [ ] Text box which is a form with a submit button on the - '/makeYourMeme' path
- [ ] Image that was selected from the images list. Displayed on the - '/makeYourMeme' path
- [ ] Text inserted from the form that will be overlayed on the image. will be on the - '/makeYourMeme' path
- [ ] screen shot the page as pdf button on the - '/makeYourMeme' path

    *If we decide to make a '/yourMeme' path this will display components image and text and back button as well as the save button.*

### *Stretch Components & Routes*

- [ ] Options for a top and middle text placement with associated drop down selector button. This will be on the '/makeYourMeme' path
- [ ] Ability to share the text that is entered in the form with the url and have that also share with the text in the image. allowing a dynamic route that you could paste and would generate the final meme.
- [ ] Text colour selector button next to the location selection. On the - '/makeYourMeme' path

## 4: Create Image JSON file with a selection of meme worthy material.
Create the JSON file as an array of objects each with an ID Name and File source. Alt text also to describe the image.

## 5: First Major Merge.
Get all the Components talking and exporting so that they show up where we want them.

## 6: Add a CSS file and create Styling.
We need to have the styling link up so the positions of the required components are in the correct locations.

## 7: Relaunch upgraded App
Liftoff!!!

# MVP Complete!
We made it team!

## 8: Attempt stretch goals.
 *Look at step 3 Stretch components and routes*
Attempt stretch goals based on the Product owners recommendation, If we have time lets push hard. Recommend now the MVP stay on master branch and we work on Dev so there is no final pressure to make sure app still works.


## 9: Present and get our amazing bootcamp friends to join in!!
Lets present this amazing work and have friends try and make spicy memes together.