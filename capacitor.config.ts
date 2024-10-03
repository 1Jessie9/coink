import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'com.yesscodes.coink',
    appName: 'Coink',
    webDir: 'www',
    plugins: {
        SplashScreen: {
            launchShowDuration: 3000,
            backgroundColor: "#1eeb00",
            androidScaleType: "CENTER_CROP",
            showSpinner: false,
            androidSpinnerStyle: "small",
            iosSpinnerStyle: "small",
            splashFullScreen: true,
            splashImmersive: true,
        },
    },
};

export default config;
