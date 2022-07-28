# maofElevetors
This project is about building an image website for 'Maof Elevators', 
which includes a system for monitoring the process of installing the elevator. (From signing the contract until receiving the elevator)<br />
Existing documents:<br />
[Vision Statement document](https://github.com/hadar22/maofElevators/blob/master/Vision%20Statement.docx)<br />
[Requirements Document](https://github.com/hadar22/maofElevators/blob/master/Requirements%20Document.docx)<br />
[diagram of screens](https://github.com/hadar22/maofElevators/blob/master/%D7%AA%D7%A8%D7%A9%D7%99%D7%9D%20%D7%9E%D7%A1%D7%9B%D7%99%D7%9D.pdf)<br />
[SDD](https://github.com/hadar22/maofElevators/blob/master/SDD.pdf)<br />
[Poster](https://github.com/hadar22/maofElevators/blob/master/poster.pdf)<br />

The system is a 3-tier web application (browser,application server, data server)<br />
Server-side: NodeJs, express (The only one that communicates directly with the MySQL database. <br />
Client-side: React <br /> 
Database: MySQL, Firebase <br />

(I used the axios library which allows making HTTP requests in an easy and pleasant way.) <br />
# Diagrams
![alt text](https://github.com/hadar22/maofElevators/blob/master/images/uml1.PNG)
![alt text](https://github.com/hadar22/maofElevators/blob/master/images/uml2.PNG)


## What's in the project?
Navbar and footer that appear on all pages.<br/>
![alt text](https://github.com/hadar22/maofElevators/blob/master/images/nav%26Footer.PNG)

Projects page - where there are pictures from existing projects and an explanation of each project.



https://user-images.githubusercontent.com/57917375/181063944-83c55b78-a1ff-466d-8090-fcab8f7e6ed7.mp4



Contact page - I used `emailjs-com` <br/>
A customer enters his details and clicks send, the details are sent directly to the company's email in an orderly manner.<br/>
That way the company secretary will be able to get back to all interested parties.<br/>


https://user-images.githubusercontent.com/57917375/181064467-c9a21f9d-1c76-40f4-b8ce-a10f18e2bfc5.mp4

###### Now we'll get to the really interesting stuff
After signing a contract, the company secretary adds a new project.<br/>
Customer login (administrator username and password) -> Adding a project.
![alt text](https://github.com/hadar22/maofElevators/blob/master/images/new_project.PNG)
When adding a new project, update 2 tables in MySQL:
1. users - table of all projects
![alt text](https://github.com/hadar22/maofElevators/blob/master/images/users.PNG)
2. project_info - table that follows the entire elevator installation process <br/>
![alt text](https://github.com/hadar22/maofElevators/blob/master/images/project_info.PNG)

According to the table of 'users', they are the customers who can enter to see where the project stands.
![alt text](https://github.com/hadar22/maofElevators/blob/master/images/login.PNG)
![alt text](https://github.com/hadar22/maofElevators/blob/master/images/user.PNG)

On the manager's page there is also an option to update the project details and this is how the table is updated and on the client's page the things are displayed according to the table.
![alt text](https://github.com/hadar22/maofElevators/blob/master/images/process.PNG)

Another option on the manager page is service tracking. <br/>
On the service tracking page:<br/>
1. The database is Firebase
![alt text](https://github.com/hadar22/maofElevators/blob/master/images/firebase.PNG)
2. You can add a visit to a specific project
3. See the last date a worker was on the same project
4. See the amount of visits in the current year
![alt text](https://github.com/hadar22/maofElevators/blob/master/images/service.PNG)
5. A graph showing the number of visits of all projects
![alt text](https://github.com/hadar22/maofElevators/blob/master/images/graph.PNG)

## run
In the client's folder `npm start` <br/>
and in the server's folder `npm run devStart`



