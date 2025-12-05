# Full Stack Application Development Capstone Project
## Part 1: Static Pages
Congratulations on your new role as the Lead Cloud Application Developer at the "Best Cars" dealership. As a warm-up task, you need to run and test its main Django application.

The Django app will be mainly used for user management and authentication, managing car models and makes, and routing other MongoDB services for dealership and customer reviews. You will build this Django app and related services in a phased manner along the capstone course. 

In this module, you are asked to perform the following tasks:
- Fork the GitHub repo containing the project template.
- Clone your forked repository.
- Run the Django app on the development server.
- Add a navigation to the website using Bootstrap.
- Add an "About Us" static page.
- Add a "Contact Us" static page.

## Part 2: User Management
Now, you have the initial Django application built and deployed. In the next step, the admins of the dealership will review the app to identify users and manage their accesses based on roles (such as anonymous users or registered users). 

To accomplish this, you need to add authentication and authorization, that is, user management, to the app. In this lesson, you need to perform the following tasks to add the user management feature: 
- Create a superuser for your app.
- Build the Client side and configure it.
- Check the Client configuration.
- Add a Login view to handle login requests.
- Add a Logout view to handle logout requests.
- Add a Registration view to handle Sign-up requests.

## Part 3: Back End Services
### 3.1: Node.js Mongo DB dockerized server
The Django application you created in the last module needs to communicate with the database. In this module, you will create a containerized Node.js application that uses MongoDB as the backend to serve API endpoints.

You will write these back-end services in an Express app and containerize it with Docker.

You will view and test the following endpoints:
- /fetchReviews/dealer/29
- /fetchDealers 
- /fetchDealer/3
- /fetchDealers/Kansas

### 3.2: Django Models Views
You have created a dealership and reviews related to CRUD APIs. Next, you need to create data models and services for the dealers' inventory. Each dealer manages a car inventory with different car models and makes, which are, in fact, relatively static data, thus suitable to be stored in Django locally.  To integrate external dealers and review data, you will need to call the APIs from the Django app and process the API results in Django views to be later rendered through REACT pages. Such Django views use proxy services to fetch data from external resources as per users' requests and renders it using REACT components. In this lesson, you need to perform the following tasks to add car model and make related models and views, and proxy services:
- Create CarModel and CarMake Django models
- Register CarModel and CarMake models with the admin site
- Create new car models objects with associated car makes and dealerships

## Part 4: Dynamic Pages
## Part 5: CI/CD, Containerize & Deploy to Kubernetes

