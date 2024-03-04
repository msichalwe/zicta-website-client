## Introduction

We are thrilled to unveil the next generation of the Zambia Information and Communications Technology Authority (ZICTA) website, powered by Next.js 13. As we take this significant step forward in enhancing our online presence.

## Installation

Using the command **`npm install`** to install the packages locally and run it using the **`npm run dev`** for local development.

To **\*\***Run the website locally**\*\*** ensure the admin folder is setup first and running before the client, because the client depends on the admin server to pull data from.

Issue the **.env** file is added to the root of the each project, and the API URL is set to your local project URL, e.g `NEXT_PUBLIC_API_URL = ‘http://localhost:3000/api’`

## Directory Structure

The website is split into two separate project, the Client that will be public facing, and the Admin which is a in-built CMS system the is also built with Next.js 13

### [Next.js 13 Project Structure](https://nextjs.org/docs/getting-started/project-structure#top-level-folders)

### **Top-level folders**

|            |                                                                               |
| ---------- | ----------------------------------------------------------------------------- |
| app        | App Router                                                                    |
| public     | Static assets to be served                                                    |
| components | prebuilt reusable components                                                  |
| hooks      | functional components to manage state, side effects, and other React features |
| state      | all Redux toolkit files that handle global state of the project               |

### **Top-level files**

|                    |                                         |
| ------------------ | --------------------------------------- |
| Next.js            |                                         |
| next.config.js     | Configuration file for Next.js          |
| package.json       | Project dependencies and scripts        |
| middleware.ts      | Next.js request middleware              |
| .env               | Environment variables                   |
| .env.local         | Local environment variables             |
| .gitignore         | Git files and folders to ignore         |
| next-env.d.ts      | TypeScript declaration file for Next.js |
| tsconfig.json      | Configuration file for TypeScript       |
| postcss.config.js  | Configuration file for Tailwind CSS     |
| tailwind.config.js | Configuration file for Tailwind CSS     |
| components.json    | Shadcn UI components.json file          |
| navbar.json        | Shadcn UI navbar.json file              |
|                    |                                         |

### **Routing Conventions**

### **[Routing Files](https://nextjs.org/docs/getting-started/project-structure#routing-files)**

|              |               |                              |
| ------------ | ------------- | ---------------------------- |
| layout       | .js .jsx .tsx | Layout                       |
| page         | .js .jsx .tsx | Page                         |
| loading      | .js .jsx .tsx | Loading UI                   |
| not-found    | .js .jsx .tsx | Not found UI                 |
| error        | .js .jsx .tsx | Error UI                     |
| global-error | .js .jsx .tsx | Global error UI              |
| route        | .js .ts       | API endpoint                 |
| template     | .js .jsx .tsx | Re-rendered layout           |
| default      | .js .jsx .tsx | Parallel route fallback page |

### **[Nested Routes](https://nextjs.org/docs/getting-started/project-structure#nested-routes)**

|               |                      |
| ------------- | -------------------- |
| folder        | Route segment        |
| folder/folder | Nested route segment |

### **[Dynamic Routes](https://nextjs.org/docs/getting-started/project-structure#dynamic-routes)**

|               |                                 |
| ------------- | ------------------------------- |
| [folder]      | Dynamic route segment           |
| [...folder]   | Catch-all route segment         |
| [[...folder]] | Optional catch-all route segmen |

**Simple Explanation**

This is an overview of how the NextJs file structure looks like and what the files might represent, but if it still seems confusing, hopefully this helps.

The main application runs in the app folder that is a top-level folder or in the root, and every folder in the app folder is a route to a new page as long as the folder has a route.ts file in it, for example the about page, this would look like app/about/route.ts that is how the http://localhost:3000/about route would look, and the same for endpoints, but the only difference is that in the api folder we have a folder with route.ts file in it, so an API route would look like http://localhost:3000/api/about and the file structure would look like app/api/about/route.ts
