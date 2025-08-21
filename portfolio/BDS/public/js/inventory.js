<!-- JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
<script>
// Mask all phone numbers on page load
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.donor-phone').forEach(el => {
    const phone = el.closest('tr').dataset.phone;
    el.textContent = phone.slice(0, 3) + '' + phone.slice(-4);
  });
});

// Reveal button logic
document.querySelectorAll('.reveal-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const row = btn.closest('tr');
    const donorName = row.cells[0].textContent;
    
    // Show authorization modal
    const modal = new bootstrap.Modal(document.getElementById('consentModal'));
    modal.show();
    
    // On confirmation
    document.getElementById('confirmAccess').onclick = () => {
      const staffId = document.getElementById('staffId').value;
      if (staffId.length > 3) { // Simple validation
        row.querySelector('.donor-phone').textContent = row.dataset.phone;
        btn.disabled = true;
        btn.innerHTML = '<i class="fas fa-check"></i> Accessed';
        modal.hide();
        
        // In real app: Log this access to Firebase
        console.log(Staff ${staffId} accessed ${donorName}'s number);
      } else {
        alert('Please enter a valid Staff ID');
      }
    };
  });
});
