# Get2It
[![Maintainability](https://api.codeclimate.com/v1/badges/2bfe9545132cb9bd13f4/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/get2it-fe/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/2bfe9545132cb9bd13f4/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/get2it-fe/test_coverage)

You can find the deployed project at [Get2It](https://master.d2aj6lilolim7e.amplifyapp.com/).

## Contributors


| [Daniel Ajadi](https://github.com/theolamide) | [Christine Carpenter](https://github.com/CodingCCarpenter) | [John Kouris](https://github.com/jdkouris) | [Jay Leach](https://github.com/leachcoding) | [Vici Shaweddy](https://github.com/vshaweddy) | [Aaron Williams](https://github.com/aaronw4) |
| :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: |
| [<img src="./images/Daniel.jpg" width = "200" />](https://github.com/theolamide) | [<img src="./images/Christine.jpg" width = "200" />](https://github.com/CodingCCarpenter) | [<img src="./images/John.png" width = "200" />](https://github.com/jdkouris) | [<img src="./images/Jay.jpg" width = "200" />](https://github.com/leachcoding) | [<img src="./images/Vici.jpg" width = "200" />](https://github.com/vshaweddy) | [<img src="./images/Aaron.jpg" width = "200" />](https://github.com/aaronw4) | 
| Project Manager | Web Developer | IOS Developer | Web Developer | IOS Developer | Web Developer |
| [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/theolamide) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/CodingCCarpenter) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/jdkouris) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/leachcoding) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/vshaweddy) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/aaronw4) |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/aaron-williams-b921073a/) |

<br>
<br>


![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-v16.7.0--alpha.2-blue.svg)
![Redux](https://img.shields.io/badge/Redux-v4.0.4-blueviolet)
![Typescript](https://img.shields.io/npm/types/typescript.svg?style=flat)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)


## Project Overview

[Trello Board](https://trello.com/b/op90zWa0/labspt9-get2it)

[Product Canvas](https://www.notion.so/Get2It-f99d691af6ce4731b39adc459f35eba9)


Get2It is an app that helps people stay organized, focused, and motivated while performing daily tasks.
This is accomplished through the use of timers, calendars, and reminders.


### Key Features

-    Create, edit, remove tasks
-    See lists for current, incomplete, and completed tasks
-    Re-use completed tasks
-    Toggle in-app notifications for each task
-    Add a task to your google calendar

## Tech Stack

### Front end built using:

#### React

-    React's virtual DOM allows us to provide an extremely fast and easy UI.
-    The ability to create and reuse Components keeps our code DRY and saves time in the overall development of the app.
-    React is an open-source library. Because of this, it has a lot of useful applications and tools that make development easier.

#### React-Redux

-    Redux allows us to centralize our application's state, and persist it.
-    Actions and reducers can be used to perform axios requests and to update the apps central state with the returned data.
-    Through Redux, the apps components only re-render when the data they are actually using changes.

#### Reactstrap

-    Reactstrap has the capabilities of Bootstrap, but is more React friendly because of it's pre-made component library.
-    It is a huge time saver when it comes to creating forms, animations, tables, and more.


#### Front end deployed to `AWS Amplify`

### [Back end](https://github.com/Lambda-School-Labs/get2it-be) built using:

#### PostgresSQL

-    This object-relational database system will safely store and scale our data workload.
-    It gives us the ability to define our own data types
-    We can write the code using Node.js

#### Node.js

-   We are using this platform because it allows us to us JavaScript
-   Node.js allows us to add, delete, modify data in our database

#### Express

-   This Node framework will allow us to quickly build a RESTful API
-   Provides route support for responding to requests

#### Knex

-   We are using this tool to help us write SQL queries

# APIs

## Authentication API here

https://get2itpt9.herokuapp.com/api/auth/login

When an email and password is posted to this API, the API will verify these credentials. Once the user has been authenticated, they will receive an token for authorization which is then used throughout the App.  This token will expire in 1 day. The token is cleared when the user logs out.

## Payment API here

The is no API for payment at this time.

## Calendar API

In future release canvases we are planning on using calendars from google and other sites.

# Environment Variables

There are not any environment variables at this point.

# Content Licenses

| Image Filename | Source / Creator | License                                                                      |
| -------------- | ---------------- | ---------------------------------------------------------------------------- |
| doodles.png    | Nicole Bennett   | [Creative Commons](https://www.toptal.com/designers/subtlepatterns/doodles/) |
| rings.svg      | Sam Herbert      | [MIT](https://github.com/SamHerbert/SVG-Loaders)                             |

# Testing

Our test use **react-testing-library** because it allows us to render and test different react components with the use of Jest. It will test what is being rendered to the DOM. The advantage is that the test rendering will happen the same way as it would in actual use. To help us write test we will alse be using **testing-library/jest-dom** which is a library within react-testing-library.  This makes writing test smoother by allowing us to use custom Jest matchers. This will make the tests easier to read and therefore more maintainable. 

# Installation Instructions

- *npm install* will install node_modules with all dependencies.
- *npm start* will run the app on your local device.

## Other Scripts

    * build - creates a build of the application
    * start - starts the production server after a build is created
    * test - runs tests in **tests** directory 
    * eject - copy the configuration files and dependencies into the project so you have full control over them
    * coverageIOS - runs test coverage for IOS devices
    * coverage - runs test coverage for Windows devices

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request
   
 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Backend Documentation](https://github.com/Lambda-School-Labs/get2it-be) for details on the backend of our project.
