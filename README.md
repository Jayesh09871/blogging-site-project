Initial Setup & CRUD Operations

Objective:

Get the students started with project setup, creating models, and implementing basic CRUD operations.


Tasks:

1. Project Initialization:

- Create the project folder structure.

- Maintain a detailed `README.md` file explaining the purpose of the project, its setup process, and an overview of the modules.


2. Create Models:

- Implement two schemas:

- Author Schema with required fields (fname, lname, title, email, password).

- Blog Schema with fields like title, body, authorId, tags, category, subcategory, etc.


3. Setup Server:

- Create the `index.js` file, which will serve as the entry point for the project.

- Set up Express.js for handling API requests.

- Connect to MongoDB.


4. CRUD Operations:

- Implement the Create and Read operations for both the Author and Blog models.

- Implement POST `/authors` to create authors and POST `/blogs` to create blogs.

- Implement GET `/blogs` to retrieve all published blogs that aren?t deleted.


5. Testing:

- Use Postman to test the created APIs.

- Include the test results in the video update.