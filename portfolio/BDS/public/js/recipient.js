// Search for blood
document.getElementById('bloodSearchForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const bloodGroup = document.getElementById('searchBloodGroup').value;
    const location = document.getElementById('location').value;
    const radius = parseInt(document.getElementById('radius').value);
    
    try {
      // Show loading state
      const resultsDiv = document.getElementById('searchResults');
      resultsDiv.innerHTML = '<div class="text-center"><div class="spinner-border text-danger"></div></div>';
      
      // Search donors
      let donorsQuery = db.collection('donors')
        .where('bloodGroup', '==', bloodGroup)
        .where('isEligible', '==', true)
        .limit(50);
      
      // If location is provided, add geo-query (simplified)
      if (location) {
        // In a real app, you would use GeoFirestore for location queries
        // This is a simplified version
        donorsQuery = donorsQuery.where('address', '>=', location)
                               .where('address', '<=', location + '\uf8ff');
      }
      
      const snapshot = await donorsQuery.get();
      
      if (snapshot.empty) {
        resultsDiv.innerHTML = '<div class="alert alert-info">No donors found matching your criteria.</div>';
        return;
      }
      
      // Display results
      let html = '<div class="list-group">';
      snapshot.forEach(doc => {
        const donor = doc.data();
        html += `
          <div class="list-group-item">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">${donor.bloodGroup} Donor</h5>
              <small>${donor.address || 'Location not specified'}</small>
            </div>
            <p class="mb-1">Last donation: ${donor.lastDonationDate ? donor.lastDonationDate.toDate().toLocaleDateString() : 'Never'}</p>
            <button class="btn btn-sm btn-outline-danger request-btn" data-id="${doc.id}">Request Blood</button>
          </div>
        `;
      });
      html += '</div>';
      
      resultsDiv.innerHTML = html;
      
      // Add event listeners to request buttons
      document.querySelectorAll('.request-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const donorId = btn.getAttribute('data-id');
          openRequestModal(donorId);
        });
      });
    } catch (error) {
      console.error('Search error:', error);
      document.getElementById('searchResults').innerHTML = `
        <div class="alert alert-danger">Error: ${error.message}</div>
      `;
    }
  });
  
  // Open request modal
  function openRequestModal(donorId) {
    // In a real app, you would show a modal with request details
    window.location.href = request.html?donorId=${donorId};
  }