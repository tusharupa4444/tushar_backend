
Node.js User Management System
Welcome to the Node.js User Management System! This application provides a secure and efficient way to manage users and administrators. Users can register, verify their email, and log in to access different functionalities based on their role.

- [Features](#features)
- [Setup](#setup)
- [Endpoints](#endpoints)

## Features

### User Registration
User Registration: Individuals can register themselves as users, providing necessary information.

### Admin Registration
Admin Registration: Admins can register and get special privileges.

### Email Verification
Email Verification: Users receive an automatic email with a verification link upon registration.

### JWT Authentication
JWT Authentication: Both users and admins generate their JWT tokens upon login for secure access.

### Role-Based Access Control
Role-Based Access Control: Different tasks and functionalities are available based on the user's role.

### User Deletion Protection
User Deletion Protection: Users attempting to delete other users are redirected to the home page.

### Admin User Deletion
Admin User Deletion: Admins have the privilege to delete users from the database.

### Restricted Admin Page
Restricted Admin Page: Admins trying to access the user's special page are redirected to the home page.

### Logout after Set time 
Custom timing can be set to automatically logout any user or admin from the application. User will be redirected to Login page.





## Setup
Clone the repository:

- bash
- Copy code
- git clone https://github.com/tusharupa4444/tushar_backend.git
- Install dependencies:

- bash
- Copy code
- cd nodejs-user-management
- npm install
- Set up environment variables:

- Create a .env file in the root directory and configure the following variables:

- env
- Copy code
- PORT=3000
- DATABASE_URL=mongodb://localhost:27017/user_management


- Run the application:

- bash
- Copy code
- npm start
- The application will be accessible at http://localhost:3000.


## Endpoints


 ### User Registration
- Endpoint: /api/register
- Method: POST
- Payload:
- json
- {
 - "name":"user",  
 - "email": "user123@example.com",
 - "password": "securepassword"
 - "is_admin": 0 ,
 - "is_verified": 0
- }


 ### Admin Registration
- Endpoint: /api/register
- Method: POST
- Payload:
- json
- {
  - "name": "admin",
  - "email": "admin123@example.com",
  - "password": "adminpassword"
  - "is_admin":1 ,
  - "is_verified": 1
- }


 ### User Login
- Endpoint: /api/login
- Method: POST
- Payload:
- json
- {
-  "email": "user123@example.com",
-  "password": "securepassword"
- }




 ### User Deletion
- Endpoint: /api/delete/:userId
- Method: DELETE
- Authorization:  Token (JWT)
- Note: Users attempting to delete other users are redirected to the home page.

 ### Special User Page
- Endpoint: /api//special-access
- Method: GET
- Authorization:  Token (JWT)
- Note: Admins trying to access the user's special page are redirected to the home page.


 ### User Logout 
- Endpoint: /api/logout
- Method: GET
- Authorization: Bearer Token (JWT) gets deleted from coockies

 ### List of all users
- Endpoint: /api/info
- Method: GET
- Authorization: Token (JWT)
- Note: Users attempting to delete other users are redirected to the home page.