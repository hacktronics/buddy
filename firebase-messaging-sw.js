importScripts('https://www.gstatic.com/firebasejs/9.8.3/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.8.3/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: 'AIzaSyDyeL3d7xtSgvN6qkmJ5TSdIbzQBge4O6M',
    authDomain: 'codeskool-cc.firebaseapp.com',
    projectId: 'codeskool-cc',
    storageBucket: 'codeskool-cc.appspot.com',
    messagingSenderId: '147568153083',
    appId: '1:147568153083:web:cc5408a7e94a96a8ffbb5e',
    measurementId: 'G-YPDHWE2FPQ'
};

self.firebase.initializeApp(firebaseConfig);

if (self.firebase.messaging.isSupported()) {
    const messaging = self.firebase.messaging();
    messaging.onBackgroundMessage(({notification, data}) => {
        // Customize notification here
        const {title, body, image} = notification ?? {};
        if (!title) {
            return;
        }
        const notificationTitle = title;
        const notificationOptions = {
            body,
            icon: image,
            data
        };
        self.registration.showNotification(notificationTitle, notificationOptions);
    });
}
