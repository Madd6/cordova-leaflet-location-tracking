<h1>Cordova-Leaflet-Location-Tracking</h1></hr>
A mobile app built with Cordova, Leaflet, and Leaflet Routing Machine for real-time user location tracking. The app shares the user's live position on a map with other users when a route is started.
<br>
<h3>Preparation</h3>
<br>
Plugins used:

cordova-plugin-android-permissions@1.1.5 (Handles Android permissions)

cordova-plugin-enable-cleartext-traffic@2.1.0 (Enables HTTP traffic)

cordova-plugin-geolocation@5.0.0 (Access device geolocation)

cordova-plugin-splashscreen@6.0.1 (Disables splashscreen)

cordova.plugins.diagnostic@7.2.3 (Diagnostics for permissions/location)

To install plugins:

bash
Copy
cordova plugin add <plugin-name>
Platforms supported:

Android

Browser

To add platforms:

bash
Copy
cordova platform add android
Server:
A Socket.IO server is required for real-time sharing. Use this repository:
https://github.com/Madd6/socket-io-location-tracker

About This Project
I created this app for my college assignment. Through this project, I learned:

How to build a Cordova webview app.

How to implement maps using Leaflet and Leaflet Routing Machine.

How to track and share a user’s live location in real-time.

Using ES6 JavaScript features.

Integrating Socket.IO for real-time communication.

Challenges and Lessons Learned
Cordova Configuration:

Initially, I forgot to configure config.xml properly. To ensure the app behaves the same as in a browser, add these preferences:

xml
Copy
<preference name="scheme" value="https" />
<preference name="hostname" value="localhost" />
Run HTML
Permissions:

Location permissions must be explicitly requested in Cordova apps. Use cordova-plugin-android-permissions to handle this.

Leaflet Behavior:

By default, Leaflet Routing Machine auto-fits the map to the route. Disable this with fitSelectedRoutes: false in the routing options.

Popups can cause unwanted map panning. Add { autoPan: false } to popup options to prevent this.

Real-Time Sharing:

Socket.IO is essential for broadcasting location updates between users. Ensure the server is properly set up and connected.

Note: This project helped me understand common pitfalls in hybrid app development, especially regarding permissions, configuration, and real-time communication.


<h2>this readme translated from deepseek ai hehe</h2>
