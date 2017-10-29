## AndroidUI App using React Native and Flexbox

# This is a demonastration of an Android App using React Native as the framework. 

To run this application on your Android Studio device
Follow the instructions on the official docs, specifically 'Building Projects with Native Code'.

The guide will walk you through installation/configuration and Android Device (emulator) setup as well.

# https://facebook.github.io/react-native/docs/getting-started.html

## Run Locally on Android Emulator in a Windows OS with Command Line Prompt

# Install a few dependencies 
Open an Administrator Command Prompt (right click Command Prompt and select "Run as Administrator"), then run the following command:

```
choco install -y nodejs.install python2 jdk8

npm install -g react-native-cli
```

# Git clone the project repository or unzip the project folder and move into that directory

```
git clone https://github.com/wilsonsk/AndroidUI.git

cd AndroidUI

npm install
```

Or

unzip using an extractor such as 7zip, open Command Line Prompt, then

```
npm install

cd AndroidUI
```

# Create a new AVD in AVD Manager (in Android Studio)
Chose the 'x86 Images' tab, then select the Marshmellow API Level 23, x86_64 ABI image (with Android 6.0 (Google APIs) target)

# Run the app in the Android Emulator

```
react-native run-android
```

# To import the project into Android Studio IDE, 
import the AndroidUI/Android directory into Android Studio
