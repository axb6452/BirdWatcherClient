Overview

This application provides an interface for users, ranging from the keen enthusiast to scientific professionals, to observe and keep track of bird sightings in a number of locations. The data logged can be can be used for statistical analysis, which in turn can be used to determine bird prevalence in a environment as a factor of time. Such insight will allow conclusions to be drawn on bird vulnerability and possibility of extinction.

Functionality

The front end for the Bird Tracker project, built using HTML, CSS and JavaScript, interacts with a back end BirdWatcher API for CRUD operations. API Repo - https://github.com/axb6452/BirdWatcherAPI

Technologies Used:

- HTML
- css
- JavaScript Bootstrap
- JavaScript - jQuery

Unsolved Problems:

1) Pagination on Sightings grid to reflect a neater grid.
2) Update and delete buttons should be appended to grid as buttons and should perform CRUD operations for respective row's fields.
3) Incorporate side menu bar with links for the one-many relationship grid and many-many relationship grid.
4) Develop export to spreadsheet functionality so that statistical analysis on data can be performed in excel.

Planning:

1) Created Wireframes and Entity Relationship diagrams based on initial bird tracker idea. Discussed ERD with team group and made slight adjustments to MVP and one-many/many-many entity relationships

2) Discussed wireframes with Jordan and received insight on one-many relationship. We touched on whether "locations" should constitute a field in the sightings table and on the possibility of initially seeding data should be used for the locations table when creating a relationship between locations and sightings.

3) After receiving approval, set up heroku and rails API, followed the suggested schedule under the Full stack project guidelines, beginning with the API and finishing with the client application.

4) MVP version complete. Plan to continue with v2 and v3 of user stories and ERD when time permits.

5) Spent a lot of time in the CSS layout and ran into a few issues during production deployment of the rails API to heroku. Posting issues under issues queue/feedback from colleagues helped me resolve issues.

Link to wireframes & user stories:

https://drive.google.com/drive/folders/1xRhkojc99AEYSExEwo6gm41M8UNh7viI?usp=sharing
