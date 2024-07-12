# Defect Detection (Simulation) Task

This application allows users to upload image files to a backend API built with FastAPI, which then performs simulated defect detection and returns a classification result ("OK" or "NOK"). The frontend is built with React and uses Material-UI components for the user interface.

## Features

- Upload image files (JPEG, PNG, JPG) from the frontend.
- Display uploaded image preview.
- Simulate defect detection on the backend.
- Display classification result ("OK" or "NOK") with color-coded indicators in the UI ("OK" highlighted in green and "NOK" highlighted in red).

## Technologies Used

- React.js
- Material-UI
- FastAPI (Python)
- Axios (HTTP client)

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js (https://nodejs.org/) for running the frontend React application.
- Python (https://www.python.org/) for running the FastAPI backend.
- npm (comes with Node.js) for package management.

Install fastAPI and required dependencies for the backend:
```
pip install fastapi uvicorn python-multipart fastapi-cors
```

## Folder Structure

- `react-frontend/`: Contains the React frontend application.
- `fastAPI-backend/`: Contains the FastAPI backend application.

## Setup Instructions

### Frontend (React)

1. Navigate to the `react-frontend` directory:

```
cd react-frontend
```

2. Install dependencies:
```
npm install
```
3. Start the development server:

```
npm run start
```

This will run the React application on `http://localhost:3000`.

### Backend (FastAPI)

1. Open another terminal and Navigate to the `fastAPI-backend` directory:

```
cd fastAPI-backend
```
2. Start the FastAPI server:
```
uvicorn main:app --reload
```
This will run the FastAPI server on "http://127.0.0.1:8000/"

You can easily test if the API is working as expected using `curl`

```
curl -X POST "http://127.0.0.1:8000/upload-image/" -F "file=@\"IMAGE-PATH-HERE""
```
Sample usage:
![2024-07-12 00_58_47-Editing defect-detection-task_README md at main · abdulhanan1000_defect-detectio](https://github.com/user-attachments/assets/049170d0-cfea-475c-9527-9586e39a7fa3)


### Application Sample Usage
![gif simulation task](https://github.com/user-attachments/assets/91ba00c6-e38d-41e6-8870-d1c99b613500)


## Additional Notes

- Ensure that both frontend and backend servers are running simultaneously for the application to work correctly.


