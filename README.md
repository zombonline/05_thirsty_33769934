# Dynamic Web Applications: EJS Project

This project demonstrates the use of EJS (Embedded Javascript) to build dynamic web applications.

## Features

- **EJS Layouts & Partials** for reusable components (navbar, layout)
- **Custom Validation Middleware** (`middleware/validateEmail.js`)
- **Form handling & POST requests**
- **Survey submission & results view**
- **Search page to filter stored entries**

## Getting Started

1. Clone the repository.
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the server:
    ```bash
    node index.js
    ```
4. Visit `http://localhost:8000` in your browser.

## Routes

- `/` - Home page (Displaying an example of using EJS to dynamically populate the page with drink categories)
- `/about` - About page (Futher demonstration of dynamically populating page using EJS with displaying location images and information)
- `/search` - Search page (Demonstrates using GET with parameters sent in the URL for a simple search function)
- `/survey` - Register page (Demonstrates using POST with parameters sent in the body)
- `/register` - Survey page (Further demonstration of using POST but this time with middleware included to run further validation on the user email address see 'middleware/validateEmail.js')

## Requirements

- Node.js (v14+)
- npm

## License

MIT