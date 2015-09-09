Requirements To Run:
1) Web sever setup and running
2) Internet connection

How To Run:
1) Unzip the Evidation.zip folder into webserver directory or create a symbolic link (E.g evidation) inside webserver directory
pointing to location where Evidation.zip is unzipped.

2) In browser open <symlink>/index.html (in case of symbolic link), else Evidation/index.html


Details:
1) The application is developed using angularjs framework and it requires certain libraries which are mentioned in
index.html
    a) boostrap
    b) angularjs
    c) jquery
    d) angular-ui-router

2) The application is designed as single page application (SPA) where different views are loaded into the main
display area depending upon different events/interactions

Directories and files:
1) bower_components: downloaded libraries
    a) angualar-ui-router

2) scripts
    a) controllers
        i) main.js (main controller )
    b) services (to mock data fetch)
        i) data.js

3) app.js : Entry point for the application

4) styles (css styles)
    a) global.css

5) views (different views html for SPA)
    a) searchProvider.html
    b) login.html
    c) main.html

6) index.html : entry point html

P.S.-  I have tried to implement all the scenarios but I missed some because of the time constraints. The application is responsive
