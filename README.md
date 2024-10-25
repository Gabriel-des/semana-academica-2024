# ProjetoUniplac

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Backend with json-server

The backend of this project is simulated using **json-server** version 0.17.4. The **json-server** allows you to create a complete REST API using a JSON file as a database. This simplifies development, especially to simulate the behavior of a real backend.

### How to set up json-server:

Install **json-server** version 0.17.4 globally (if you haven't done so yet):

```bash
npm install -g json-server@0.17.4
```

Create a db.json file at the root of the project that will serve as your database. Basic example:
```bash
{
  "memories": [
    { "id": 1, "title": "First Memory", "content": "Content of the first memory." },
    { "id": 2, "title": "Second Memory", "content": "Content of the second memory." }
  ]
}
```

To start the backend server with json-server, run:
```bash
cd backend && json-server --watch db.json --port 3000
```

The API will be available at http://localhost:3000/ and you can access the data, such as http://localhost:3000/memories.