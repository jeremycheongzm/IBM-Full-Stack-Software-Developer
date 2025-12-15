# Final Project: CodeCraftHub: Building Personalized Learning Platform for Developers

Welcome to the final project. Your organization is creating CodeCraftHub, a personalized learning platform crafted for developers! You are assigned to design the server-side architecture for this learning platform and develop it using Node.js and MongoDB. You will create the server-side components for CodeCraftHub using Generative AI.
In this project, you'll leverage the power of Generative AI and a diverse array of technologies to transform your vision into a reality.

## Learning objectives
After completing this lab, you will be able to perform the following tasks:
- Design and develop software applications using Generative AI
- Create documentation for the code with Generative AI
- Create test cases with Generative AI
- Deploy the deployable application designed and developed entirely with Generative AI

## MongoDB Server
- Start MongoDB server
- Retrieve MONGO_HOST, and MONGO_PASSWORD
- Insert into `.env` file

## Node.js Server
- Install packages
    - `npm install`
- Run `node src/app.js`

## Testing API Endpoints with Postman
- User Registration: Send a POST request to http://localhost:5000/api/users/register with the following request body:
    - `{"username": "john_smith_1", "email": "johnsmith_1@example.com", "password": "Password1234!"}`
- In the terminal, run this to verify the endpoint:
    - `curl -X POST -H "Content-Type: application/json" -d '{"username": "john_smith_1", "email": "johnsmith_1@example.com", "password": "password1234!"}' http://localhost:5000/api/users/register'`
- User Login: Send a POST request to http://localhost:5000/api/users/login with the following request body:
    - `{"email": "johnsmith_1@example.com", "password": "Password1234!"}`
    - Retrieve the JSON Web Token (JWT)
- In the terminal, run this  to verify the endpoint:
    - `curl -X POST -H "Content-Type: application/json" -d '{"email": "johnsmith_1@example.com", "password": "Password1234!"}' http://localhost:5000/api/users/login`

## Building and Running the Docker Containers
 1.  Replace JWT_SECRET with JWT in `docker-compose.yml`
 2.  Build the Docker Images: `docker-compose build`
 3.  Run the Containers: `docker-compose up`
 4.  Access the Application at `http://localhost:5000`, MongoDB will be running in the background.
 5.  Stop the Containers: `docker-compose down`
