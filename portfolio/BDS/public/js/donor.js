// Check donor eligibility
function checkEligibility(donorData) {
    // Calculate age from DOB
    const dob = new Date(donorData.dob);
    const ageDiff = Date.now() - dob.getTime();
    const ageDate = new Date(ageDiff);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);
    
    // Basic eligibility criteria
    const isEligible = 
      age >= 18 && 
      age <= 65 && 
      donorData.weight >= 50 && 
      !donorData.healthConditions.includes('HIV') &&
      !donorData.healthConditions.includes('Hepatitis');
    
    return isEligible;
  }
  
  // Save donor profile
  document.getElementById('donorProfileForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const donorData = {
      bloodGroup: document.getElementById('bloodGroup').value,
      dob: document.getElementById('dob').value,
      weight: parseInt(document.getElementById('weight').value),
      phone: document.getElementById('phone').value,
      address: document.getElementById('address').value,
      healthConditions: document.getElementById('healthConditions').value,
      lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
    };
    
    // Check eligibility
    donorData.isEligible = checkEligibility(donorData);
    
    try {
      const user = auth.currentUser;
      if (!user) throw new Error('Not authenticated');
      
      await db.collection('donors').doc(user.uid).update(donorData);
      alert('Profile updated successfully!');
      
      if (donorData.isEligible) {
        // Schedule next donation reminder if eligible
        scheduleDonationReminder(user.uid);
      }
    } catch (error) {
      console.error('Error updating donor profile:', error);
      alert(error.message);
    }
  });
  
  // Schedule donation reminder
  async function scheduleDonationReminder(donorId) {
    const donorDoc = await db.collection('donors').doc(donorId).get();
    const donorData = donorDoc.data();
    
    if (donorData.lastDonationDate) {
      const lastDonation = donorData.lastDonationDate.toDate();
      const nextDonationDate = new Date(lastDonation);
      nextDonationDate.setMonth(nextDonationDate.getMonth() + 3); // 3 months later
      
      // Save next donation date
      await db.collection('donors').doc(donorId).update({
        nextDonationDate: nextDonationDate
      });
      
      // Schedule notification
      scheduleNotification(donorId, nextDonationDate);
    }
  }
  
  // Schedule notification (simplified)
  function scheduleNotification(donorId, date) {
    // In a real app, you would use Firebase Cloud Messaging and Cloud Functions
    console.log(Notification scheduled for donor ${donorId} on ${date});
  }