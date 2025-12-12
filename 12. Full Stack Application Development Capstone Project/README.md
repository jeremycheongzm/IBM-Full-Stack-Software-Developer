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

To accomplish this, you need to add authentication and authorization, that is, user management, to the app. 

In this lesson, you need to perform the following tasks to add the user management feature: 
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
You have created a dealership and reviews related to CRUD APIs. Next, you need to create data models and services for the dealers' inventory. Each dealer manages a car inventory with different car models and makes, which are, in fact, relatively static data, thus suitable to be stored in Django locally.  To integrate external dealers and review data, you will need to call the APIs from the Django app and process the API results in Django views to be later rendered through REACT pages. Such Django views use proxy services to fetch data from external resources as per users' requests and renders it using REACT components. 

In this lesson, you need to perform the following tasks to add car model and make related models and views, and proxy services:
- Create CarModel and CarMake Django models
- Register CarModel and CarMake models with the admin site
- Create new car models objects with associated car makes and dealerships

## Part 4: Dynamic Pages
You created all necessary backend services (Django views and API endpoints) for managing dealerships, reviews, and cars in the last module. Next, it is time to create some stylized front-end REACT pages to present those service results to the end users. 

In this learning module, you need to perform the following tasks to add the front-end to the app:
- Create a Dealers component to list all the dealers
- Create a dealer details component that will show the reviews for that particular dealer
- Create a review submission page

## Part 5: CI/CD, Containerize & Deploy to Kubernetes
### 5.1: CI/CD Overview
Congratulations on testing your app after adding static pages and user management. The next step is setting up Continuous Integration and Continuous Delivery for your source code. This is particularly important if you have multiple people working on the project. Continuous Integration provides a way for developers to collaborate, and Continuous Delivery provides a way to deliver your changes to the clients without interruptions.  

In this module, you will:
- Understand the workflow present in the provided GitHub workflow template
- Understand the Linting jobs present in the provided GitHub workflow template
- Enable GitHub Actions and run the Linting workflow

### 5.2: Containerize & Deploy to Kubernetes
In line with the latest trends in technology and to avoid vendor lock-in, your management team is looking to deploy the dealership application to multiple clouds. The application is currently running on Code Engine, but you have been told not all cloud providers have a hosted Code Engine service. You are put in charge to look at containers as a possible way to mitigate this problem as all the big cloud providers have a way to host and manage containers. When containerizing an application, the process includes packaging an application with its relevant environment variables, configuration files, libraries, and software dependencies. The result is a container image that can then be run on a container platform.  You are also asked to use Kubernetes to manage the containerized deployment. Kubernetes is an open-source container orchestration platform that automates the deployment, management, and scaling of applications.

In this module you will:
- Add the ability to your application to run in a container
- Add deployment artifacts for your application so it can be managed by Kubernetes

## Optional
### Enhance "Car Dealerships" Website
#### Scenario
As part of your capstone project, you would have successfully created and tested the Car Dealerships website, ensuring it meets the expected functionality. This includes allowing users to view details of all dealerships, view existing reviews for specific dealers, and post new reviews for particular dealers after logging in as a registered user.

Having completed this, your next step is to enhance your application. This involves working on the front-end and back-end aspects of the application. You will implement these enhancements in three parts, as outlined below:

#### Part 1: Front-end enhancement
In this lab, you will:
- Transform the "States" dropdown on the "Dealerships" page into a searchable textbox, providing users the capability to filter dealerships by entering search strings.
- Enhance the color scheme of the Navbar and Dealerships button on the app's home page, along with the colors of the Review panel and review icons on the "Dealerships Review" page.
- Fine-tune the visual elements of the Dealer Review panel, making adjustments to aspects like font size and font alignment.

#### Part 2: Car inventory back-end service
In this lab, you will:
- Establish a new back-end microservice dedicated to acquiring various details related to car inventory, employing MongoDB and Node.js servers.
- Integrate this newly created microservice with the Django app's back end and verify the successful startup of the back-end server.

#### Part 3: Front-end development for car inventory service
In this lab, you will:
- Develop and integrate the front-end component with the back-end cars inventory microservice developed in Part 2: Car inventory back-end service.
- Create an option to select cars by Make, Model, Year, Mileage, and Price.
- Conduct thorough testing of the output generated by your Django application with the incorporated cars inventory service.