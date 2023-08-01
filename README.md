# Project Overview

This project consists of a frontend and a backend:

## Frontend

- Created using `npx create-react-app` to generate the `client` folder.
- A `jsconfig.json` file is used to make the `src` folder the base folder.
- Additional dependencies used: `react-bootstrap`, `react-icons`, `react-star-ratings`.

### Features

- Add to cart
- Product filters based on:
  - Min - Max price
  - Categories

### netlify URL:
`https://master--rainbow-platypus-163e25.netlify.app/`
## Backend

- Created using `express-generator` at the backend.
- Development dependency: `concurrently` - to run both client and backend server concurrently.
- Development dependency: `mongoose` - to restart the Node.js server when crashed.
- Backend API deployed on AWS Lambda using Serverless.

### Backend API Endpoint

The backend API is deployed on AWS Lambda and can be accessed using the following endpoint:

`https://zmzopptwrd.execute-api.ap-south-1.amazonaws.com/prod/manipulateLR/?number=37`

## Test Case

**Input:**  
`number = 35` - in query params

**Output:**
```json
{
  "result": "LR",
  "message": "Result fetched"
}
