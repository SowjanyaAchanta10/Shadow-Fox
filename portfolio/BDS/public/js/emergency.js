// Trigger emergency notifications
function sendEmergencyAlert(bloodType, location) {
    db.collection('donors')
      .where('bloodGroup', '==', bloodType)
      .where('lastLocation', '>=', getGeoBoundaries(location, 20)) // 20km radius
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          sendPushNotification(doc.data().fcmToken, {
            title: "URGENT: Blood Needed Nearby!",
            body: Patient with ${bloodType} requires immediate donation
          });
        });
      });
  }