# Software Component Catalog - ReactJS & Firebase

A web-based software component cataloging application built with ReactJS and Firebase. This application allows users to manage and search for reusable software components.

## Technologies Used

- ReactJS
- Firebase (Authentication, Realtime Database, Storage)

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

- Node.js and npm (Node Package Manager) must be installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/soukarja/software-component-cataloguing-software.git
   ```

2. Change into the project directory:
   ```bash
   cd software-component-cataloguing-software
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Configure Firebase:

- Create a Firebase project on the Firebase Console.
- Add your Firebase configuration in ```src/firebase.js```.
  
   ```bash
   const firebaseConfig = {
     apiKey: 'YOUR_API_KEY',
     authDomain: 'your-project-id.firebaseapp.com',
     databaseURL: 'https://your-project-id.firebaseio.com',
     projectId: 'your-project-id',
     storageBucket: 'your-project-id.appspot.com',
     messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
     appId: 'YOUR_APP_ID',
   };
   
   ```
5. Start the development server:
   
   ```bash
   npm start
   ```
7. Open your web browser and navigate to ```http://localhost:3000``` to view the application.







## Project Structure
The project is organized as follows:
   ```bash
   software-component-cataloguing-software/
     ├── public/
     ├── src/
     │    ├── components/
     │             ├──────── addcomponent/
     │             ├──────── allcomponents/
     │             ├──────── dashboard/
     │             ├──────── header/
     │             ├──────── home/
     │             ├──────── login/
     │             ├──────── searchbar/
     │    ├── firebase.js
     │    ├── index.js
     │    ├── ...

```

## Features
- User authentication with Firebase
- Component management (Add, Edit, Delete)
- Component search and filtering
- Realtime updates using Firebase Realtime Database
- Storage of component assets in Firebase Storage

## Usage
- Register or log in to the application.
- Add software components, providing details and assets (if applicable).
- Search for components using keywords or descriptions.
- Edit or delete components as needed.


## Deployment
This project can be deployed to a hosting service such as Firebase Hosting or Netlify. Configure your hosting service and deploy the application using the provided deployment scripts.
