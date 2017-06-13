# react-native-geolocation
Access Geolocation API to display coordinates, speed and altitude

* This is a simple app that displays Information availble using the Geolocation API: 
* https://developer.mozilla.org/en-US/docs/Web/API/Geolocation
* The API is available through navigator.geolocation and you don't need to import it.
* The Code is based on the example available here: 
* https://facebook.github.io/react-native/releases/0.24/docs/geolocation.html

### Things to verify after cloning the repo
* in the IOS folder, make sure that info.plist contains the key `NSLocationWhenInUseUsageDescription`
* in the Android folder make sure that AndroidManifest.xml contains `<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />`

### Clone the Repo
* run `npm install` to grab the dependencies 
* Make sure to edit the package.json if there is a particular library or version you want to work with
* run `react-native run-ios` or `react-native run-android`

### Fixes to happen and issues
* The Speed and Heading on IOS are not accessible and might need tweaking: https://github.com/facebook/react-native/issues/12967
* The Accuracy on IOS doesn't go below 65
* Battery drain


## Contact

Hit me up here on github

## License
MIT
