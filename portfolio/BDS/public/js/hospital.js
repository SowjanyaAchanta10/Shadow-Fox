// Hospital Requests Management
function initializeRequests() {
    const requestsList = document.getElementById('requestsList');
    const loadingRow = document.getElementById('loadingRow');

    // Real-time listener for blood requests
    db.collection('bloodRequests')
        .where('hospitalId', '==', auth.currentUser.uid)
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => {
            loadingRow.style.display = 'none';
            requestsList.innerHTML = '';

            snapshot.forEach(doc => {
                const request = doc.data();
                const row = document.createElement('tr');
                
                row.innerHTML = `
                    <td><span class="badge bg-danger">${request.bloodGroup}</span></td>
                    <td>${request.units}</td>
                    <td>
                        <div class="d-flex align-items-center">
                            <i class="fas fa-user-circle me-2"></i>
                            ${request.requesterName}
                        </div>
                    </td>
                    <td>${request.hospitalName}</td>
                    <td>
                        <select class="form-select status-select" data-id="${doc.id}" 
                                style="width: 150px">
                            <option ${request.status === 'pending' ? 'selected' : ''} value="pending">Pending</option>
                            <option ${request.status === 'processing' ? 'selected' : ''} value="processing">Processing</option>
                            <option ${request.status === 'completed' ? 'selected' : ''} value="completed">Completed</option>
                            <option ${request.status === 'cancelled' ? 'selected' : ''} value="cancelled">Cancelled</option>
                        </select>
                    </td>
                    <td>
                        <button class="btn btn-sm btn-outline-danger update-status" 
                                data-id="${doc.id}">
                            <i class="fas fa-save"></i> Update
                        </button>
                    </td>
                `;

                requestsList.appendChild(row);
            });

            // Add event listeners to all update buttons
            document.querySelectorAll('.update-status').forEach(button => {
                button.addEventListener('click', async (e) => {
                    const requestId = e.target.dataset.id;
                    const status = e.target.closest('tr').querySelector('.status-select').value;
                    
                    try {
                        await db.collection('bloodRequests').doc(requestId).update({
                            status: status,
                            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
                        });
                        showAlert('Status updated successfully!', 'success');
                    } catch (error) {
                        showAlert('Error updating status: ' + error.message, 'danger');
                    }
                });
            });
        }, error => {
            loadingRow.style.display = 'none';
            showAlert('Error loading requests: ' + error.message, 'danger');
        });
}

// Show alert message
function showAlert(message, type = 'danger') {
    const alert = document.createElement('div');
    alert.className = alert alert-${type} alert-dismissible fade show;
    alert.role = 'alert';
    alert.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    const container = document.querySelector('.container');
    container.prepend(alert);
}

// Initialize when hospital logs in
auth.onAuthStateChanged(user => {
    if (user) {
        // Verify hospital role
        db.collection('users').doc(user.uid).get()
            .then(doc => {
                if (doc.exists && doc.data().role === 'hospital') {
                    initializeRequests();
                } else {
                    window.location.href = '../../auth/login.html';
                }
            });
    } else {
        window.location.href = '../../auth/login.html';
    }
});