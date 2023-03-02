# React Native Redux E2E
An example [React Native](https://reactnative.dev/) project for [Redux Toolkit](https://github.com/reduxjs/redux-toolkit) CI that runs [Detox](https://wix.github.io/Detox/) end-to-end tests against a [Metro bundler](https://facebook.github.io/metro/) build.

## Notes

### Jest Tests

The tests run with `jest` since Detox supplies _setup_ and _takedown_ scripts compatible with that tool. It might be possible to run with `vitest` with more experimentation and custom configurations/scripts.

### Android Device

The project uses Android emulation to run the Metro bundle. It is the most widely compatible for local development.

### GitHub MacOS Runner

Android Debug Bridge (ADB) service for emulation does _not_ reliably run on Ubuntu Linux (from experience); therefore, **MacOS** is the preferred runner. Not sure if it's due to how `reactivecircus/android-emulator-runner@v2` is setup or something else. 

### ADB Process Errors

In the GitHub Action workflow, there'll be a repeating output of...

```sh
/Users/runner/Library/Android/sdk/platform-tools/adb shell getprop sys.boot_completed
The process '/Users/runner/Library/Android/sdk/platform-tools/adb' failed with exit code 1
adb: device offline
```

This is normal. The action is waiting on the emulator to boot.

### Average Run Time

Without cache on the first run, the workflow takes about 32 minutes to complete. With cache, the workflow takes about 6 minutes.