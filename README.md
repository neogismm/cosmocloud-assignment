# Cosmocloud Assignment
Cosmocloud's frotend intern hiring assignment.

## Getting Started

1. Install the dependencies in the root directory:

    ```js
    npm install
    ```

2. Start the development server:

    ```js
    npm run dev
    ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Used APIs

- GET all employees
- GET by ID
- DELETE employee

## Tech Stack

- Next.js
- Tailwind CSS
- Cosmocloud backend


I have my credentials in `env.local`. 
If you want your own credentials in the app, set up `.env.local` like this:

```shell
NEXT_PUBLIC_COSMOCLOUD_PROJECT_ID=
NEXT_PUBLIC_COSMOCLOUD_ENVIRONMENT_ID=
NEXT_PUBLIC_API_URL=
```

Note: I have only set up Cosmocloud's CRUD template. The GET all API limit header is set to 100000.
