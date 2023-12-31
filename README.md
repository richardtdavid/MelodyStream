# Melody Stream

![Simulator Screen Recording - iPhone 12 mini - 2022-07-13 at 12 26 41](https://user-images.githubusercontent.com/467258/178773122-c9144e3a-03fc-40db-b74f-e0307d4f1808.gif)

An extraordinary application that seamlessly merges the world of melodious tunes with the power of YouTube. MelodyStream empowers you to immerse yourself in an unparalleled music streaming experience, all through the magic of YouTube URLs. Explore a symphony of genres and rhythms as you effortlessly tune in to your favorite tracks, curated playlists, and captivating live performances. With MelodyStream, every musical desire is at your fingertips, allowing you to harmonize with the endless melodies that YouTube has to offer. Unleash the true potential of your musical journey with MelodyStream, where tuning in to the perfect rhythm has never been easier

## Usage

This project is a standard Next.js app, so the typical Next.js development process applies (`npm run dev` for browser-based development). However, there is one caveat: the app must be exported to deploy to iOS and Android, since it must run purely client-side. ([more on Next.js export](https://nextjs.org/docs/advanced-features/static-html-export))

To build the app, run:

```bash
npm run build
npm run export
```

All the client side files will be sent to the `./out/` directory. These files need to be copied to the native iOS and Android projects, and this is where Capacitor comes in:

```bash
npx cap sync
```

Finally, to run the app, use Capacitor 3 new awesome run command:

```
npx cap run ios
npx cap run android
```

## Livereload/Instant Refresh

To enable Livereload and Instant Refresh during development (when running `npm run dev`), find the IP address of your local interface (ex: `192.168.1.2`) and port your Next.js server is running on, and then set the server url config value to point to it in `capacitor.config.json`:

```json
{
  "server": {
    "url": "http://192.168.1.2:3000"
  }
}
```

Note: this configuration wil be easier in Capacitor 3 which [recently went into beta](https://capacitorjs.com/blog/announcing-capacitor-3-0-beta).

## Caveats

One caveat with this project: Because the app must be able to run purely client-side and use [Next.js's Export command](https://nextjs.org/docs/advanced-features/static-html-export), that means no Server Side Rendering in this code base. There is likely a way to SSR and a fully static Next.js app in tandem but it requires [a Babel plugin](https://github.com/erzr/next-babel-conditional-ssg-ssr) or would involve a more elaborate monorepo setup with code sharing that is out of scope for this project.

Additionally, Next.js routing is not really used much in this app beyond a catch-all route to render the native app shell and engage the Ionic React Router. This is primarily because Next.js routing is not set up to enable native-style transitions and history state management like the kind Ionic uses.

## What is Capacitor?

You can think of [Capacitor](https://capacitorjs.com/) as a sort of "electron for mobile" that runs standard web apps on iOS, Android, Desktop, and Web.

Capacitor provides access to Native APIs and a plugin system for building any native functionality your app needs.

Capacitor apps can also run in the browser as a Progressive Web App with the same code.
