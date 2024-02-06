# Application info

## Running the application

Navigate to the root directory and install the dependencies: `npm install`.

Then run the application: `npm run dev`.

## Deploying the application

Note that a secure connection is required to run the application. In development, it works because `localhost` is considered a secure connection, but when deployed an SSL certificate is required for the application to access the camera.

Do a production build of the application: `npm run build`.

Preview the production build locally: `npm run preview`.

Copy the `dist` folder to the server and ensure a valid SSL certificate is in place.

## Change the content

### Change the target image

The [Image Targets Compiler tool](https://hiukim.github.io/mind-ar-js-doc/tools/compile) can be used to allow one or more images be detected by the camera.

The resultant `targets.mind` file can then be placed into the `public` directory.

This file is referenced within the `<a-scene>` HTML tag as the `imageTargetSrc`.

### Change the 3D model

A new GLTF model can also be added to the `public` directory, in the `.glb` format. Files can be obtained (for example) from the [Khronos Model set](https://github.com/KhronosGroup/glTF-Sample-Assets/blob/main/Models/Models.md).

The model is referenced within the `<a-asset-item>` HTML tag as the `src`, and the `id` of that tag is then referenced within the `<a-gltf-model>` also as the `src`.

# Initial Vite Setup - React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
