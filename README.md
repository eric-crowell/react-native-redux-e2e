# react-native-redux-e2e
An example project for React Native &amp; Redux tested with e2e tool Detox

## Notes

### Jest Test Runner

The tests run with `jest` since Detox supplies _setup_ and _takedown_ scripts compatible with that tool. It might be possible to run with `vitest` with more experimentation and custom configurations/scripts.

### ADB Process Errors

In the GitHub Action workflow, there'll be a repeating output of...

```sh
/Users/runner/Library/Android/sdk/platform-tools/adb shell getprop sys.boot_completed
The process '/Users/runner/Library/Android/sdk/platform-tools/adb' failed with exit code 1
adb: device offline
```

This is normal. The action is waiting on the emulator to boot.