### &nbsp;		                                   **Task Manager Web Application**



This is a full-stack web application built using Ruby on Rails in API-only mode for the backend and Vanilla JavaScript with HTML and CSS for the frontend. The project follows a client–server architecture and implements RESTful design principles.

The application allows users to create accounts and manage multiple tasks, providing complete control over task creation, updates, completion status, and deletion.



#####                     **Backend Architecture (Rails API)**



**The backend is developed using Ruby on Rails in API-only mode, following RESTful design principles.**



**Key backend features include:**



* **CRUD operations for users and tasks**
* **Nested routes to manage tasks under specific users**
* **Modular and clean controller structure**
* **CORS configuration to enable frontend communication**
* **Structured JSON responses for frontend consumption.**



##### 	               **Frontend Development**

**The frontend is developed with HTML, CSS, and Vanilla JavaScript to provide a clean, user-friendly interface.**



**Frontend features include:**



* **Responsive and modern UI design**
* **Forms for creating and updating users**
* **Ability to add, update, and delete tasks**
* **Option to mark tasks as completed or pending**
* **Dynamic UI updates using Fetch API without page reloads**



1. Data Handling \& Storage



The application does not use a predefined dataset. Instead, it uses a relational database to dynamically store and manage user and task data.

* User and task information is stored in a PostgreSQL database
* Each user can have multiple associated tasks (one-to-many relationship)
* Database integrity is maintained using validations and constraints

Duplicate and invalid entries are prevented at the database and application levels



**2.  Application Workflow**



* **Users create an account through the frontend interface**
* **The frontend communicates with the Rails API using HTTP requests**
* **Users can add and manage multiple tasks**
* **Tasks can be updated, marked as completed, or removed**
* **All changes are reflected in real time on the user interface**



3\.  Tools \& Technologies Used



* Ruby
* Ruby on Rails (API-only)
* PostgreSQL
* HTML
* CSS
* JavaScript (ES6)
* Fetch API
* Git \& GitHub



4\.  Start the Rails server using: bundle exec rails s



5\.  The API runs on: http://localhost:3000





