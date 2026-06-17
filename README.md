# Web Development Project 2 - *Knowledge Flashcards*

Submitted by: **Iman Zahid**

This web app: **A flashcard study app with 12 cards across four subjects: Geography, Food, Space, and Science. Each card has an image and flips with a 3D animation to reveal the answer. Cards are shown in random order and each subject has its own color theme.**

Time spent: **3** hours spent in total

## Required Features

The following **required** functionality is completed:


- [ x ] **The app displays the title of the card set, a short description, and the total number of cards**
  - [ x ] Title of card set is displayed 
  - [ x ] A short description of the card set is displayed 
  - [ x ] A list of card pairs is created
  - [ x ] The total number of cards in the set is displayed 
  - [ x ] Card set is represented as a list of card pairs (an array of dictionaries where each dictionary contains the question and answer is perfectly fine)
- [ x ] **A single card at a time is displayed**
  - [ x ] Only one half of the information pair is displayed at a time
- [ x ] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [ x ] Clicking on a card flips it over, showing the back with corresponding information 
  - [ x ] Clicking on a flipped card again flips it back, showing the front
- [ x ] **Clicking on the next button displays a random new card**

The following **optional** features are implemented:

- [ x ] Cards contain images in addition to or in place of text
  - [ x ] Some or all cards have images in place of or in addition to text
- [ x ] Cards have different visual styles such as color based on their category
  - Example categories you can use:
    - Difficulty: Easy/medium/hard
    - Subject: Biology/Chemistry/Physics/Earth science

The following **additional** features are implemented:

- [ x ] 3D flip animation using CSS `transform: rotateY()` and `perspective`
- [ x ] Each subject deck has its own color palette and gradient background
- [ x ] Three font families used for visual hierarchy: Playfair Display, Inter, and Space Mono
- [ x ] Custom photo background image with full cover sizing
- [ x ] Card flip state resets automatically when moving to a new card using the `key` prop
- [ x ] Gradient text effect on the app title using `background-clip: text`
- [ x ] Responsive layout for mobile screens under 550px

## Video Walkthrough



<video controls src="src/assets/WEB102_Project2_Walkthrough.mp4" title="Title"></video>