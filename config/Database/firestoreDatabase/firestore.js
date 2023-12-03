var admin = require("firebase-admin");

var serviceAccount = require("../firestoreDatabase/gamefi-bb03c-firebase-adminsdk-xo7ft-a4b2aa981a.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
