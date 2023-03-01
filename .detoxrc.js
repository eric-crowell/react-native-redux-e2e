/** @type {Detox.DetoxConfig} */
module.exports = {
  testRunner: {
    args: {
      '$0': 'jest',
      config: 'tests/jest.config.js'
    },
    jest: {
      setupTimeout: 120000
    }
  },
  apps: {
    'android.release': {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/release/app-release.apk',
      build: 'cd android ; ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release ; cd -'
    }
  },
  devices: {
    emulator: {
      type: 'android.emulator',
      device: {
        avdName: 'Pixel_3a_API_30'
      }
    }
  },
  configurations: {
    'android.emu.release': {
      device: 'emulator',
      app: 'android.release'
    }
  }
};
