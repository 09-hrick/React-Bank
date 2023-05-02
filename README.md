# Banking System 

This is a basic banking system API for users to register, login, make transactions, reset their password and retrieve transaction history.

## Getting Started

### Prerequisites
Before getting started, ensure that you have the following installed on your system:
* [Node.js](https://nodejs.org/en/) 
* [MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. Install NPM packages:
```
npm install
```
2. Set up the database:
* Create an account on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
* Create a cluster and database, then replace `<password>` in the `DB` variable in `index.js` with your MongoDB Atlas password.

### Usage
1. Start the server:
```
npm start
```
2. Use [Postman](https://www.postman.com/downloads/) or any other API testing tool to test the endpoints.


## API Reference

### Register a User
```
POST /user/register
```
**Request Body:**
```
{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password"
}
```
**Response:**
```
{
    "user": {
        "_id": "6095dc5d5ff7dd2d3c3d7fa5",
        "name": "John Doe",
        "email": "john@example.com",
        "amount": 1000,
        "transactions": [],
        "createdAt": "2021-05-08T11:42:21.931Z",
        "updatedAt": "2021-05-08T11:42:21.931Z",
        "__v": 0
    }
}
```

### Login
```
POST /user/login
```
**Request Body:**
```
{
    "email": "john@example.com",
    "password": "password"
}
```
**Response:**
```
{
    "message": "login successful"
}
```

### Make a Transaction
```
POST /user/transaction
```
**Request Body:**
```
{
    "email": "jane@example.com",
    "amount": 100
}
```
**Response:**
```
"successful transaction"
```

### Reset Password
```
POST /user/forgot
```
**Request Body:**
```
{
    "oldPassword": "password",
    "newPassword": "newpassword"
}
```
**Response:**
```
{
    "message": "password changed successfully"
}
```

### Get Transaction History
```
GET /user/getTransactions
```
**Response:**
```
[
    {
        "_id": "6096e631bfba8b32c48f7ed0",
        "from": "6095dc5d5ff7dd2d3c3d7fa5",
        "to": "6095dd5d5ff7dd2d3c3d7fa7",
        "amount": 100,
        "createdAt": "2021-05-08T22:07:05.704Z",
        "updatedAt": "2021-05-08T22:07:05.704Z",
        "__v": 0
    }
]
```
