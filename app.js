

const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;


let photoArray = [];


// unsplash API
//https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY

const count = 30;
const apiKey = 'i-7N8rjUkB5GGJCsUzyjct_gfPyKk7ICLrJR3kePjlc';


const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

// Check if all images were loaded
function imageLoaded(){
    //console.log('image loaded');
    imagesLoaded++
    //console.log(imagesLoaded);
    
    if(imagesLoaded === totalImages){
        ready = true;
        loader.hidden = true;
        //console.log('ready =', ready);
    }
    
}

// helper Function to set Attributes on DOM Elements

function setAttribute(element, attribute){
    for(const key in attribute){
        element.setAttribute(key,attribute[key]);
    }
}

//Create Elements For Links & Photos and Add to DOM

function displayPhotos(){
    imagesLoaded = 0;
    totalImages = photoArray.length;
    //console.log('total images', totalImages);
    //Run function for each object in photoArray

    photoArray.forEach((photo) => {
        //create <a> to link to Unsplash

        const item = document.createElement('a');
        //item.setAttribute('href', photo.links.html);
        //item.setAttribute('target', '_blank');
        setAttribute(item, {
            href: photo.links.html,
            target: '_blank',
        });

        //create <img> for photo

        const img = document.createElement('img');
        //img.setAttribute('src', photo.urls.regular);
        //img.setAttribute('alt', photo.alt_description);
        //img.setAttribute('title', photo.alt_description);
        setAttribute(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        })

        // Event Listener, check when each is finished loading
        img.addEventListener('load', imageLoaded);

        //put <img> inside  <a> and then both inside imageContainer

        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}


//Get photos from Unsplash API

async function getPhotos(){

    try {

        const response = await fetch(apiUrl);
        //const data = await response.json();
        //console.log(data);

        photoArray = await response.json();
        //console.log(photoArray);

        displayPhotos();
        
    } catch (error) {

        console.error('Error!!!');
        
    }

}

// check to see if scrolling near bottom of page , load more pics
/*window.addEventListener('scroll', () =>{
    //console.log('scrolled');
    
    //window.innerHeight -> total height of browser window
    // window.scrollY -> distance from top of page user has scrolled
    //document.body.offsetHeight -> height of everything in the body, including what is not within view
    // 1000px  less (can be any value)-> we need to subtract from offsetHeight to trigger event before bottom is reached
    if(window.innerHeight + window.screenY >= document.body.offsetHeight - 1000 && ready){
        
        //console.log('load more');
        ready = false;
        getPhotos();

    }
})*/
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
      ready = false;
      getPhotos();
    }
  });


// On Load

getPhotos();

/*   -------------------Cleaning Up The Code------------------
// Unsplash API
let count = 5;
const apiKey = 'jFgS8tteGD425f4oZfygQVaVnD6gt6GucN2yyz3xFek';
let apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;
 
// Check if all images were loaded
function imageLoaded() {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
    count = 30
    apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;
  }
}


*/ 

//------------------------------------------------------------------------------------------------------------------------------------------------------//


/*const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

// Unsplash API
const count = 30;
// Normally, don't store API Keys like this, but an exception made here because it is free, and the data is publicly available!
const apiKey = 'jFgS8tteGD425f4oZfygQVaVnD6gt6GucN2yyz3xFek';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

// Check if all images were loaded
function imageLoaded() {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
  }
}

// Helper Function to Set Attributes on DOM Elements
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// Create Elements For Links & Photos, Add to DOM
function displayPhotos() {
  imagesLoaded = 0;
  totalImages = photosArray.length;
  // Run function for each object in photosArray
  photosArray.forEach((photo) => {
    // Create <a> to link to full photo
    const item = document.createElement('a');
    setAttributes(item, {
      href: photo.links.html,
      target: '_blank',
    });
    // Create <img> for photo
    const img = document.createElement('img');
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    // Event Listener, check when each is finished loading
    img.addEventListener('load', imageLoaded);
    // Put <img> inside <a>, then put both inside imageContainer Element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// Get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    // Catch Error Here
  }
}

// Check to see if scrolling near bottom of page, Load More Photos
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
    ready = false;
    getPhotos();
  }
});

// On Load
getPhotos();*/