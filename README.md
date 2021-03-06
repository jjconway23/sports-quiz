<h1 align="center">Sports Quiz</h1>

This is a sports quiz website that allows the user to play a interesting sports quiz which tests the users sports knowledge in 7 different sports. It has a home page, which was designed to be minimalistic and incudes two buttons; instructions and play game. When clicking instructions it will display the game instructions and when clicking play game it takes you to the game page. On the game page you will have the play button which begins the quiz. It was designed responsively so devices from phones to monitors can view them.

<h2 align="center"><img src="docs/am-i-responsive.PNG"></h2>

## User Experience (UX)

-   ### User stories

    -   #### First Time Visitor Goals

        1. As a First Time Visitor, I want to easily understand the main purpose of the site and learn more about what the site has to offer
        2. As a First Time Visitor, I want to be able to easily navigate throughout the site to find relevant content
        3. As a First Time Visitor, I want to look for quality information and interesting quiz quesions I also want to locate their social media links and ensure they open within a new tab keeping website number one focus.
    
    -   #### Returning Visitor Goals

        1. As a Returning Visitor, I want to see new sports quizes added.
        2. As a Returning Visitor, I want to see if i can beat my old high score.

    -   #### Frequent User Goals
        1. As a Frequent User, I want to check to see if there are any newly added sports quizes added
        2. As a Frequesnt User, I want to challenge myself by taking these quizes and to see if i can get a better score.

-   ### Design
    -   #### Colour Scheme
        -   The three main color schemes are cream, blue and green.
    -   #### Typography
        -   Two google fonts were used in making this website. Big Shoulders Display for the headings and Lexend Deca for the rest of the text across the website. Sans Serif and cursive as the fallback font in case for any reason the font isn't being imported into the site correctly. 
    -   #### Imagery
        -   No images were used when creating this website, a font awesome icon however is used in the main heading.

## Features
### Home Page

#### Navigation
- Positioned at the top of the page. On the left it has the site name Sports Quiz along with the slogan sligtly below it. 
- To the right it has the two main pages of the site. Home Page and High Scores Page. With an underline under the current page the visitor is on.
<img src="docs/home-page.PNG">

#### Instructions Button 
- This button opens a modal to display the quiz game instructions, there is close insructions button that closes modal and displays home page again.
- There is a play game button that directs the user to the game page.
<img src="docs/instructions.PNG">

#### Game Page
### Begin Quiz Section
- You are greeted with a spinning loader which spins for 2 seconds.
- Once loader has spun, it will display the question and at this point the quiz will begin.
<img src="docs/start-game.PNG">

### Game Question Section
- The quiz section displays the timer and the current score in the quiz section nav.
- A question counter and a progress bar to let the user know what question they are on, and how much questions they have left.
- The question displays just below the nav.
- User is then given four answers to choose from. 
<img src="docs/question-one.PNG">

#### Results Section
- The results section shows the a congratulatory message, then how much the user scored on the quiz.
- There is also an input form with a text box and a save button to allow the user to save their high score.
- Lastly a play again button. This then sets everything back to zero and user can try again at the quiz.
<img src="docs/results-page.PNG">

#### High Scores Page
- The high scores page allows the user to see their top 5 scores displaying the username they entered and their score.
- On this page there is also a play again button.
<img src="docs/high-scores-empty.PNG"> <img src="docs/high-scores-1.PNG">

#### Footer
- The footer has links which use font awesome fonts for facebook, youtube, twitter and instagram accounts.
- When links are clicked on they open our social media accounts in a new tab.
<img src="docs/footer.PNG">

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)

### Frameworks, Libraries & Programs Used

1. [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the 'Roboto' and 'Oswald' font into the style.css file which is used on all pages throughout the project.
1. [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.
1. [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
1. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.

## Testing

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

### HTML Validator
-   [W3C HTML Validator](https://validator.w3.org/) - [Results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjjconway23.github.io%2Fportfolio-project-2%2F)

### CSS Validator
-   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fjjconway23.github.io%2Fportfolio-project-2%2F&profile=css3svg&usermedium=all&warning=no&vextwarning=&lang=en)

### Testing User Stories from User Experience (UX) Section

-   #### First Time Visitor

    1. As a First Time Visitor, I want to easily understand the main purpose of the site and have my own attempt at the sports quiz.

        1. Upon entering the site, users are automatically greeted with a clean and easily readable header and navigation bar to go to the page of their choice.
        2. The main points on the homepage are the instructions button, play game button and the high scores button.
        3. The user can click the play now button to attempt the quiz.

    2. As a First Time Visitor, I want to be able to easily be able to navigate throughout the site to find content.

        1. The website is fluid, designed with UX at the top of my priorities. Each page has navigation bar, each link descriptive and is designed so that the user can easily remember the design of my page after a couple clicks.
        2. At the bottom of each page there is links to our social media accounts.
        
    3. As a First Time Visitor, I want to look for a link directing me to what ive come to the site for. Attempting a sports Quiz.
        1. Once the new visitor has arrived on the page they are immediately met with a header that explains what the site is for. 
        2. The user can also scroll to the bottom of any page on the site to locate social media links in the footer.

-   #### Returning Visitor

    1. As a Returning Visitor, I want play quiz again to test my knowledge and see if i can beat my previous score.

        1. The user can easily attempt the quiz again and have their score saved to local storage.
        2. Responsive site can be played again on any device screen size.

-   #### Frequent User

    1. As a Frequent User, I want to check to see if there are new games added.

        1. The user would remember how to navigate through the site.
    
### Further Testing

-   The Website was tested on Google Chrome, Internet Explorer, Microsoft Edge browsers.
-   The website was viewed on a variety of devices such as iMac, Laptop, iPhone XS Max, iPhone 12.
-   A large amount of testing was done to ensure that all pages were linking correctly.
-   Elderly family members were asked to attempt to navigate through site and done so with ease.

### Known Bugs

- After submitting the form, the name shows in the high scores page but the score returns as null. This was fixed by setting the local storage reference, directly on to the score key within the score object/


## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page), locate the ***Settings*** Button on the menu.
3. Scroll down the Settings page until you locate the ***GitHub Pages*** Section.
4. Under ***Source***, click the dropdown called ***None*** and select ***Master Branch***.
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://github.com) in the ***GitHub Pages*** section.

## Credits

### Code

-   The code used to create the timer was taken from [W3C schools](https://www.w3schools.com/howto/howto_js_countdown.asp) and tweaked to allow users 10 minutes.
### Content

-   All content was written by the developer.

### Media

-   
### Acknowledgements
- Kevin Powells Youtube videos
-   Tutor support at Code Institute for their support.
- W3c
- Scrimba
- Codecademy
- James Q Quick Youtube videos