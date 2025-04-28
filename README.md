# Personal Portfolio Website

Welcome to my personal portfolio project! This is a modern, open-source portfolio website built with **Vue 3**, **Vite**, and **TypeScript** and more stuff I can't remember.

## Features

- **Modern Design**: idk this to be honest but it looks decent
- **Responsive Design**: Mobile-friendly and adaptive to all screen sizes.
- **Smooth Animations**: Transitions between pages and sections for an engaging user experience.
- **Easily Customizeable**: It's nearly just a plug and play sort of website, you can directly upload this on a site like vercel and it'll work without any issues by updating the config.
- **Open Source**: Fully customizable for anyone interested in using or contributing to the project.

## TODO

- add widget for discord status and spotify song that's currently playing

## Getting Started

To get started with the development environment, follow the steps below:

### Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js** (>= 18.3)
- **pnpm** (recommended package manager)

If you don’t have **pnpm**, you can install it globally using npm:

```sh
npm install -g pnpm
```

### Project Setup

To clone and set up the project locally, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/chixirra/personal-website.git
   cd personal-websit
   ```

2. Install dependencies:

   ```sh
   pnpm install
   ```

### Development

To start the development server and see changes in real-time:

```sh
pnpm dev
```

This will launch the site on `http://localhost:5173` by default, and it will automatically reload any changes you make to the project.

### Build for Production

To compile and build the project for production, run:

```sh
pnpm build
```

This command optimizes and minifies the code for deployment.

### Linting

This project uses **ESLint** to enforce code quality. To run the linter:

```sh
pnpm lint
```

## Project Structure

- **`src/`**: All source files for components, assets, and views.
- **`dist/`**: The production build of the website will be located here.
- **`public/`**: Static assets like images and icons.
- **`vite.config.ts`**: Configuration file for Vite.
- **`tsconfig.json`**: TypeScript configuration for the project.

## Contributing

I welcome contributions, if you want to improve my poorly written code or add stuff, feel free to fork the repository and submit a pull request. Do make sure it is responsive and somewhat fits the website design :)

## License

This project is licensed under the MIT License.

im not gonna lie i generated this readme with ai
