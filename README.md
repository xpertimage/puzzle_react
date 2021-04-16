# Puzzle Maker
Description:
Puzzle Maker is a simple application designed for elementary school math teachers to help teach students basic integer arithmetic consisting of addition, subtraction, multiplication and division. PuzzleMaker allows an authenticated user to create a "puzzle" that consists of 3 single digit integers from 1-9 then supply a "Target" number. For example the puzzle could be 3,7,9 and the target could be 1. The challenge is for the student to create math equation using the 3 numbers provided that will equal the target number. In our example the soultion would be 3+7-9=1. The solution could also include parentheses to indicate that the math operation inside of the parentheses should be completed first.
(https://github.com/xpertimage/puzzle_react/blob/main/public/PuzzleMaker.png)


Puzzles can be given a name and stored in a database. All of the puzzles can be shown to the user and each puzzle can be updated or deleted.

### Client:
Puzzle Maker is a client-server web application with the client hosted on GitHub.com. The client app is located here and the client repo is here https://github.com/xpertimage/puzzle_react . There is also a MongoDB server where user information and puzzles can be stored. The Puzzle Maker client was created using:
Reactjs
BootStrap
Axios
Javascript

### Server:
The Puzzle Maker server is a NodeJS Express server. The Puzzle Maker server / API repo is located here https://github.com/xpertimage/puzzle_api and the server / API is hosted on Heroku.com at this link.
Server Technologies include:
nodejs
Express
Mongose
MongoDB
Javascript


> ## Catalogue of Routes
>> ### Auth Routes
>>> | HTTP Method | URL Path | Action | CRUD |
>>> |--|--|--|--|
>>> | POST | /sign-up | create | (C)reate |
>>> | POST | /sign-in | create | (C)reate |
>>> | DELETE | /sign-out | destroy | (D)elete |
>>> | PATCH | /change-password | update | (U)pdate |
>>>
>>
>> ### Puzzle Routes
>>> | HTTP Method | URL Path | Action | CRUD |
>>> |--|--|--|--|
>>> | POST | /puzzles | create puzzle | (C)reate |
>>> | GET | /puzzles | index or list | (R)ead |
>>> | GET | /puzzles/:id | show or retrieve | (R)ead |
>>> | PATCH | /puzzles/:id | update | (U)pdate |
>>> | DELETE | /puzzles/:id | destroy | (D)elete |
>>>

### Planning:
I started with creating user stories for both authentication and puzzles. Next I created wireframes and the Entity Relationship Diagrem for the database. I then started development of the server / API. I would test each route created by executing curl scripts until I was confident that each route was solid.

I then moved to the client side and took each step as follows: 1. Create the authentication interface and verify each feature. 2. I started with the puzzle User interface and tested each user story until I felt confident that each was solid.

### User Stories:
As a user I would like to be able to sign up to use the app.
As a user I would like to be able to sign in to use the app.
As a user I would like to be able to sign out of the app.
As a user I would like to be able to change my password.
As a user I would like to be able to create a new puzzle.
As a user I would like to see all of the puzzles I created.
As a user I would like to be able to delete one of my puzzles.
As a user I would like to be able to edit one of my puzzles.

### Wireframes:
![Wireframes](https://github.com/xpertimage/puzzle_react/tree/main/public/Home.png)
![Wireframes](https://github.com/xpertimage/puzzle_react/tree/main/public/Signed-in.png)
![Wireframes](https://github.com/xpertimage/puzzle_react/tree/main/public/Show-Puzzles.png)
