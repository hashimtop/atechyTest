# atechyTest
Backend Team Assignment

# Framework.  nodejs. express.js 
 
# tools mongo db .

# steps
 
 first make the app folder and run 
 
 Express application generator
 
 conect to mongo db
 
 create database schemas
 
 define jwt inside user schema 
 
 and store the token to user when user creation 
 
 create controllers 
 
 define the routes
 
 
 
 
 # Users Sign Up with (First Name, Last Name, Email Address,Password, Role[‘admin’,‘user’])
 
    http://localhost:3000/createuser
    
    method post
   
    require firstName, lastName ,email, password , role 
    you have to pass them in body .
  
# User sign in with JWT tokens 
 
     http://localhost:3000/login
     
     method post

     require email, password 
    you have to pass them in body .
    
    res : auth token
    
    
# Request to change user first or last name with authenticationand verification

       http://localhost:3000/userUpdate
       
       method post
       
       require firstName or lastName or both 
    you have to pass them in body .
    
    and you have to pass token in header for authentication
    
 # Store authenticated user customer support ticket bystoring (User ID, Message)
 
      http://localhost:3000/addTicket
      
      method post
      
     body  require message
     
     header  token
     
 # Admin user request to list customer support tickets
 
     http://localhost:3000/getTickets
     
     method get
     
     header token 
     
     the api will check if role = admin then res
     
# You are also required to implement a testing method depending on your framework, or using asimple HTTP request automation tool

    nodemon automatically restarting the node application when file changes in the directory are detected.
    
     use postman to test apis
     
     all apis are tested and all working perfect.
 
      
 
