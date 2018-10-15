# SpaceX Explorer

[![Build Status](https://travis-ci.com/AndreVarandas/space-x-explorer.svg?branch=master)](https://travis-ci.com/AndreVarandas/space-x-explorer)
![logo-2.jpg](/resources/logo-2.jpg?raw=true)

The challenge is to create a simple Ionic application to consume data from the awesome SpaceX api in 7 days.

## Day One

- Created initial project.
- Changed to dark theme.
- Added interfaces to map to http responses.
- Added a simple service that requests capsules, cores, dragons and launch data.
- Added pages for capsule, core, dragon and launch data.
- Added http request cache for launch data.

## Day Two

- Added support for travis CI. Travis CI should be used to build and manage apk's. (Unsigned)
- Did some code cleanup. Removed all component.ts files. But in that way I would be unable to use lazy loading. See [Ionic 3 Lazy-loading](https://wannabeegeek.com/2017/06/01/ionic-3-lazyloading-page-navigation/). Reverted all the changes, and removed imports from app.component.ts that referenced Pages that already had a module.ts. Now, all pages components are lazy loaded.
- I also spent some time on how to manually zipalign and sign an apk. I'm writing the required steps below.

## Day three

- Finally finished automatic builds on travis CI. Travis CI is now able to successfully generate apk's from source.
- Cleaned up `.travis.yml` file.
- Created a new basic page to show upcoming launches, added a new method to `space-x.ts` provider.
- Bumped app version to `v0.0.2`.
- Added Historic events list.
- Created an app and splash icon. This was easily done with `ionic cordova resources`. The cli will look for an icon and splash image in the `assets` folder and automatically generates resources for android and iOS.
- Added caching for `core`, `capsules` and `dragons`.

## Day Four

- Added rocket and rocket detail and launchpad pages.
- Improved styles for the future launches page.
- Added pages deploy support to travis CI. Meaning that travis will now also build for the web and deploy it using the github pages, creating the webapp at [https://andrevarandas.github.io/space-x-explorer/](https://andrevarandas.github.io/space-x-explorer/).
- Did some minor improvements to core, capsules and corresponding details pages.

## Day five

- We got a new logo! Thanks to [Candy Skull](https://github.com/candyskull920) for the awesome work.
- Working on custom cordova plugin to be able to set both the wallpaper and lock screen images, that should work at least for android - struggling with the current outdated docs and tutorials.

## Day six

- Finished the [cordova plugin](https://github.com/AndreVarandas/cordova-plugin-wallpaper) to manage home and lock Screen wallpapers. I am now able to set a home wallpaper/lock screen with a simple image url.
- Reversed order from launches list (now shows the top most recent).
- Minor style tweaks. (Home and launch-detail)

## Current status - Day six

Added rocket details, improved future launches page.

<img src="extra/day-6.gif" width="300" alt="application preview" />

---

## Some Notes

### Building apk

```bash
# apk is generated at platforms/android/app/build/outputs/apk/release

ionic cordova build android --minifyjs --minifycss --optimizejs --prod --release
```

### Zipalign the unsigned apk

```bash
# Input app-relase-unsigned.apk and outputs app-relase-unsigned-aligned.apk

zipalign -f -p 4 app-release-unsigned.apk app-relase-unsigned-aligned.apk
 ```

### Sign the aligned apk

```bash
# Note --ks points to the keystore file. You will be prompted for credentials.

apksigner sign --ks ~/Documents/spacexstore --out app-release.apk app-relase-unsigned-aligned.apk
```

### zipalign and apksigner not found

```bash
# Just replace the 27.0.3 with the desired version

echo "export PATH=\$PATH:~/Library/Android/sdk/build-tools/27.0.3/" >> ~/.zshrc && . ~/.zshrc
```

---

[LICENSE - GPLv3 - André Varandas](LICENSE)
