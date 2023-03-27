# Devlore Cafe

![MIT License](https://img.shields.io/badge/License-MIT-blue)

## Description

This project was built with the intention of creating a full-stack web application. The funcitonallity of this site is to allow a resturuant to build and post a menu and allow users to come and review a given menu! This way resturants can have their first step into "Beta-tasting" their menu before open!

### Table of Contents

[Challenge](https://github.com/hollyhleal/beta-tasters#challenge)<br>
[Development](https://github.com/hollyhleal/beta-tasters#development) <br>
[Installation](https://github.com/hollyhleal/beta-tasters#installation)<br>
[Links](https://github.com/hollyhleal/beta-tasters#links)<br>
[Credits](https://github.com/hollyhleal/beta-tasters#credits)<br>
[License](https://github.com/hollyhleal/beta-tasters#license)<br>

### Challenge

A huge challenge for us as a team was linking the routes for the front-end and back-end. We ran into many walls as a team with attemping to connect the dynamic aspects of the application. Such as: displaying newly posted menu Items / Reviews to the desired location.

Another Challenge was incoprating the index template engine, HandleBars. When displying content stored in a SQL database, we had issues with the content be accessed using sequlize and properly displying on the handlebars page

### Development

    Why did we use the technologies we did
        - Using express,sequelize, mysql2, and handlebars felt mandatory to use for this build as they all join together to create a smooth path way from front end to back end. Express was use to handle the actaully hosting of the server when working in the devlopment phase of the application. Sequelize and Mysql2 works wonderfully hand in had to allow us to seed and store data. The sequlize pacakage is what allowed us and the user to acticvely query into the SQL database and return a usable object to display with in the handlebars index templating engine. Lastly, Handlebars is still a strong tool to be used today as it allows us, as devs, to not repeat oursevles with code and instead pass html code to a main handlebars file. This stopped us from having to copy over the same nav bar for each file or to avoid having to require in scripts to boostrap and index.js files.


    Icebox/Future Functions:
        -Want to add the functionality for user to delete specified comments
        -Allow Users to pick a specfic menu item to leave a review on
        -Live feed to show which Managers added which Menu Item
        -A specfic link to allow the management team to allow only teammebers to create accounts

### Installation

- bcrypt
- sequelize
- dotenv
- express
- handlebars
- mysql2
- nodemailer

### Links

[Front End Wireframe](https://drive.google.com/drive/folders/1JFznXxQksoPznwrlrvxQUpyQNjq2blIJ?usp=sharing)<br>
[Back End Wireframe](https://drawsql.app/teams/devlore/diagrams/devlore)<br>
[Heroku](https://secure-mesa-62807.herokuapp.com/)

### Credits

[Keith Gibson](https://github.com/Keithgibson123)<br>
[Holly Leal](https://github.com/hollyhleal)<br>
[Michael Mount](https://github.com/MMount98)<br>
[Joshua Nelson](https://github.com/joshua-wade7)<br>
[Jacob](https://github.com/JThorneX) [Thorne](https://github.com/ShiningStars73)

### License
