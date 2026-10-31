// Freshora Firebase configuration
var UPI_ID = "yourname@upi"; // you can also set your UPI ID later in Admin > Settings
var FIREBASE_CONFIG = {
  apiKey: "AIzaSyCTKrIrhRBO0XeVQX8c9AlMkiOhZP_DrSo",
  authDomain: "freshora-home-delivery.firebaseapp.com",
  projectId: "freshora-home-delivery",
  storageBucket: "freshora-home-delivery.firebasestorage.app",
  messagingSenderId: "301256419124",
  appId: "1:301256419124:web:0efa16538fd73e01826761"
};
firebase.initializeApp(FIREBASE_CONFIG);
var db = firebase.firestore();
function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
var DEFAULTS = {freeAbove:200, nearFee:20, farFee:40};
