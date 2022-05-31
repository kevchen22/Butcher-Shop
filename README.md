# Butcher-Shop

<!-- DESCRIPTION -->

This project is about creating a shop through back end development. Some of the APIs used were React and Mongoose, as well as some Bootstrap. The shop I have created is a butcher shop where a user would be able to create new produts, edit products, delete products, and view the product through the SHOW page. There are the 7 Restful routes which are the I.N.D.U.C.E.S which stands for Index, New, Delete, Update, Create, Edit, and Show. 

<!-- TECHNOLOGIES USED -->

Some of the technologies that were used were React, Mongoose, dotenv, bootstrap, method-override, Express, Javascript, HTML, and CSS. The engine was created through jsx files using 'express-react-views.' To connect to the database I used mongoose in order to connect with MongoDB Atlas for their database utility. 

<!-- PROCESSES -->

Some of the processes I used were pretty much what we had learned during class. Instead of products we used 'fruits.' We learned how to do the 7 RESTFUL routes from class as well as connecting to a database, so I was able to implement that within my project. I wanted to have a unique way of styling the page, so I tried to tackle Bootstrap, although I believe I could have done a lot more, this is still a project in progress. I will learn more down the road and be able to implement some new material through research. 

<!-- ROUTES -->

The routes are pretty basic and standard, for my Index route, I utilized app.get and within that used a Product.find{} method to be able to get every single product that was added into the database. The new route is pretty basic as it is just linking you to a form to create a new product. The path to this was '/products/new'. The delete route utilized app.delete and a function called findByIdAndDelete() where it located a unique ID and then deleted it from the datbase. Afterwards, it would redirect you to the Index page to view all the remaining products. The update route utilized app.put and is linked to '/products/:id' where id is the unique ID that is assigned to each product. After updating, this will redirect yopu to the Index page. The function findByIdAndUpdate() was utilized for this route. The create route utilized app.post and a function that was 'Product.create' where product links to the schema for our project that is located in the Product.js file. This would then redirect you to the Index page after a new product is created. The edit route was using app.get with the route '/product/:id/edit' where id is again the unique id assigned to it after creating the product. The function used was findById and this would render the 'Edit Page' which shows the product and all of its properties as long as its picture. The show page is an app.get that links to '/product/:id' The function findById is used here again and it just renders the Show page. 

<!-- FUTURE IMPLEMENTATIONS -->

Some things that I want to work on in the future is just being able to understand bootstrap more in order for me to be able to utilize all of its functionalities towards styling more efficiently. I also was thinking about creating a 'Payment Info' page after you click the 'BUY' button found on the Index page, but was not able to get to this. I also wanted to set up a conditional in jsx that said when you click the 'BUY' button the 'stock remaining' would be product.stock - 1. I didn't give this much thought as this was not a requirement for the project, but I think this should be a rather simple thing to implement. 
