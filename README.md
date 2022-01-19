# Spacestagram

Explore space using the Spacetagram app: an app that uses NASA's Astronomy Picture od the Day API to provide images that are actually out of this world!

## Getting Started

To launch and test out this earth shattering app, follow this link to the hosted code on Netlify: **https://tender-poitras-c90c13.netlify.app/**

## Description

Spacestagram was created using JavaScript's React Front-End library, NASA's Astronomy Picture of the Day (APOD) API, some custom graphics, and a lot of unholy screeching (when certain elements finally started working). 

Images and data are pulled from the NASA APOD API and displayed in the front-end of the app. Each image is displayed in a container along with the title of the image, the date it was uploaded, a description of the image, and a custom drawn meteor-shaped like button that toggles between "liked" and "unliked". The image containers are spread across the app in a masonry pattern that is flexible and responsive to the width of the app window. 

Some of the interesting features of the Spacestagram app include the loading gif that runs when the images are being fetched, the animated meteor-shaped like button (that I keep mentioning), the Search Bar at the top of the page where users can filter images based on title or date, and the two buttons hovering near the bottom of the page ("Refresh" and "Top"), the uses of which will be explained next.

In order to not overwhelm the app, only 100 images from the NASA APOD API are displayed at a time. However, using the refresh button near the bottom of the page, you can load 100 new ones to explore! Since 100 is a big number and it takes a while to scroll through the images, the "Top" button was created to smoothly scroll back to the top of the window where the search bar is. 

The graphics seen throughout the app can be found in the "src/img" folder. All of the graphics (excluding the spinner gif) were custom made for this project and were drawn using an iPad, Apple pencil, and the Procreate drawing app!

## Future Improvemnets

Due to limited time, I could not take Spacestagram as far as I wanted to. My main passion and skills were spent on the visual aesthetics and features of the app which I am quite satisfied with. Some improvemnets that could be made to the app are as follows:

1. A feature that enables liked images to remain liked and be stored so that users can acces them after leaving the page or hitting the refresh button. 
2. A sharable link feature next to the like button (I was thinking of using a rocket in the shape of the classic airoplane send symbol).
3. A "Load More" button (to replace the "Refresh" button) that would simply add 10 images to the images already displayed. I attempted to make this feature, but NASA APOD API is structured in a way that would make it hard to load more while retaining the past images (there's no "page" URL query). If there were a "Load More" button, I would reduce the images to only 10, and add another 10 each time it is pressed. This would reduce loading state time and look a lot less overwhelming. In addition, the user's likes woul still be visible for all teh previously loaded images instead of dissapearing entirely. 

## Author

* Nourjehan Faris
* nourjehan.faris@outlook.com

## Version History

* 0.1
    * Initial Release

## Acknowledgments

* [awesome-readme](https://github.com/matiassingers/awesome-readme)
* [NASA APOD APIs](https://api.nasa.gov/#apod)
* [React Masonry CSS Component](https://www.npmjs.com/package/react-masonry-css/v/1.0.14)
