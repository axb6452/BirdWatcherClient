Overview

This application provides an interface for users, ranging from the keen enthusiast to scientific professionals, to observe and keep track of bird sightings in various locations. The data logged can be can be used for statistical analysis, including the determination of bird prevalence in a given environment as a correlated variable with time. Such insight can allow conclusions to be drawn on bird conditions, including vulnerability and extinction possibilities.

Application

The front end of the Bird Tracker project which interacts with a back end BirdWatcher API for CRUD actions. API Repo - https://github.com/axb6452/BirdWatcherAPI

Technologies Used:

- HTML
- CSS
- JavaScript Bootstrap
- JavaScript - jQuery

Unsolved Problems:

1) Require pagination on Sightings grid to reflect a neater grid and greater record manageability.
2) Update and delete buttons should be appended to grid as row buttons and should perform CRUD operations for each row's fields.
3) Incorporate side menu bar with links for the one-many relationship grid and many-many relationship grid.
4) Develop export to spreadsheet functionality so that statistical analysis on data can be performed in excel.

Planning:

1) Created Wireframes and Entity Relationship diagrams based on initial bird tracker idea. Discussed ERD with team group and made slight adjustments to MVP and one-many/many-many entity relationships

2) Discussed proposal with consultant Jordan and received feedback on specificities, including crafting development ideas on the  one-many/many-many entity framework relationships. Particular discussion touched on whether "locations" should constitute a field in the sightings table and on the possibility of initially seed of locations data during the one-many relationship establishment.

3) After receiving approval, set up heroku and rails API, followed the suggested schedule under the Full stack project guidelines, beginning with the API and finishing with the client application.

4) MVP version complete. Plan to continue with v2 and v3 of project proposal when time permits.

5) Spent a lot of time in the CSS layout and ran into a few issues during production deployment of the rails API to heroku. Posting issues under issues queue/feedback from colleagues helped me resolve issues.

Server deployed path: https://glacial-woodland-13268.herokuapp.com

Client deployed path:
https://axb6452.github.io/BirdWatcherClient

Wireframes & user stories:

https://drive.google.com/drive/folders/1xRhkojc99AEYSExEwo6gm41M8UNh7viI?usp=sharing
