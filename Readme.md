# SpaceX Explorer

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

## Building apk

```bash
# apk is generated at platforms/android/app/build/outputs/apk/release

ionic cordova build android --minifyjs --minifycss --optimizejs --prod --release
```

## Zipalign the unsigned apk

```bash
# Input app-relase-unsigned.apk and outputs app-relase-unsigned-aligned.apk

zipalign -f -p 4 app-release-unsigned.apk app-relase-unsigned-aligned.apk
 ```

## Sign the aligned apk

```bash
# Note --ks points to the keystore file. You will be prompted for credentials.

apksigner sign --ks ~/Documents/spacexstore --out app-release.apk app-relase-unsigned-aligned.apk
```

## zipalign and apksigner not found

```bash
# Just replace the 27.0.3 with the desired version

echo "export PATH=\$PATH:~/Library/Android/sdk/build-tools/27.0.3/" >> ~/.zshrc && . ~/.zshrc
```

## Current status - Day two

No changes.

<img src="extra/explorer-demo.gif" width="300" alt="application preview" />

---

[LICENSE - GPLv3 - André Varandas](LICENSE)
