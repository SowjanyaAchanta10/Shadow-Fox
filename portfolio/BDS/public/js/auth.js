// Login Function
document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
  
    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password);
      
      if (!user.emailVerified) {
        await auth.signOut();
        throw new Error('Please verify your email before logging in.');
      }
  
      const userDoc = await db.collection('users').doc(user.uid).get();
      const userData = userDoc.data();
      
      window.location.href = ../${userData.role}/dashboard.html;
    } catch (error) {
      alert(error.message);
      console.error("Login error:", error);
    }
  });
  
  // Registration Function
  document.getElementById('registerForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const name = document.getElementById('name').value;
    const role = document.getElementById('role').value;
  
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await user.sendEmailVerification();
      
      await db.collection('users').doc(user.uid).set({
        uid: user.uid,
        name,
        email,
        role,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
  
      // Role-specific initialization
      if (role === 'donor') {
        await db.collection('donors').doc(user.uid).set({
          bloodGroup: '',
          lastDonation: null,
          status: 'pending'
        });
      } 
      else if (role === 'hospital') {
        await db.collection('hospitals').doc(user.uid).set({
          inventory: {}
        });
      }
  
      alert(Registration successful! Please verify your email.);
      window.location.href = ../${role}/dashboard.html;
    } catch (error) {
      alert(error.message);
      console.error("Registration error:", error);
    }
  });