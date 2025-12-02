# Final Project: Product Price Comparison Application using Python
## Overview
You have been hired by CheckNBuy, a product comparison company, to deploy and provide API endpoints for their application. The application is composed of multiple microservices, each serving a specific purpose. We have two backend microservices named Product Details and Dealer Pricing.

Your task is to deploy these microservices using serverless (Code Engine) and obtain URLs to access their respective API endpoints. You will be provided with two different repositories containing the code for these microservices: one for the Product Details microservice, implemented in Python, and another for the Dealer Pricing microservice, implemented using Node.js.

Additionally, you will clone another repository containing the code for the front-end microservice named Dealer Evaluation microservice, which will utilize the API endpoints provided by the Product Details and Dealer Pricing microservices to allow end users to search for products, view dealer information, and compare prices.

After deploying all microservices, you will access the front-end application through its deployment URL. Your task is to showcase the seamless integration of the microservices by providing screenshots of the final application.

## Project Breakdown
### Part A: Deploy the Backend microservices - Product Details and Dealer Pricing
- Open a Code Engine CLI and deploy the Product Details backend microservice (python) located in the directory “products_list” from the repository https://github.com/ibm-developer-skills-network/dealer_evaluation_backend.git.
- Deploy the Dealer Pricing backend microservice (node.js) located in the directory “dealer_details” from the same repository.

### Part B: Deploy the Dealer Evaluation Frontend Microservice
- Clone the repository https://github.com/ibm-developer-skills-network/dealer_evaluation_frontend.git.
- Modify the index.html file by replacing the placeholder URLs with the deployment URLs obtained in Part A of the project.
- Deploy the Dealer Evaluation frontend microservice and ensure it loads the home page. Users should be able to select a product and dealer to view pricing. Additionally, they should be able to view pricing from all dealers for a selected product.
