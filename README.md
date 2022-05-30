# Picky Nicky's™ Storybook

This project is a shell for projects related to the © Picky Nick's brand.
It was built as a learning opportunity and to be used for prototyping.

## Configured Software

This shell includes a number of open source projects that have been configured in a
specific manner as to support the needs and desires of future projects.

The primary tools configured herein are as follows:

- React v18+
- Storybook v6.5+
- Tailwind CSS v3+
- TypeScript v.4+

### Package Configurations

Some notable configurations for the primary stack are as follows:

#### React

Initialized via Create React App

#### Storybook

Configured to play well React, TypeScript, and Tailwind
Configured with storybook-dark-mode, which is setup to respect dark mode in the main and preview windows

[^1] `// TODO: Fix Type Definition in DocsContainer.tsx`

#### Tailwind

Configured to use dark mode as a class set on the HTML element
Configured with Prettier to use automatic class sorting
Configured to include all color classes to facilitate play in storybook

#### TypeScript

Configured for JSX

[^1]: To override the display of Storybook's Docs Container to obey the current theme (dark mode), I used this [gist](https://gist.github.com/fedek6/2414c46b8a561b7416475bffce750178) from [Konrad Fedorczyk](https://github.com/fedek6). However, I could not for the life of me figure out how to make TypeScript happy, and after a few hours I left it as a TODO. Please feel free to throw up a PR if you can fix it.
