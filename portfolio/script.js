/* Main interactions:
 - mobile nav toggle
 - smooth scroll
 - animate skill bars
 - project quick view modal
 - contact form demo toast (no backend)
*/

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const navToggle = document.querySelector('.nav-toggle');
  const navlinks = document.querySelector('.navlinks');

  // Mobile nav toggle
  navToggle && navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    header.classList.toggle('open');
    navlinks.style.display = header.classList.contains('open') ? 'flex' : 'none';
  });

  // Smooth scroll for anchors
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // close mobile nav
          if (header.classList.contains('open')) {
            header.classList.remove('open');
            navlinks.style.display = 'none';
            navToggle.setAttribute('aria-expanded', 'false');
          }
        }
      }
    });
  });

  // Animate progress bars when in view
  const progressFills = document.querySelectorAll('.progress-fill');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const pct = el.dataset.fill || 0;
          el.style.width = pct + '%';
          io.unobserve(el);
        }
      });
    }, { threshold: 0.25 });
    progressFills.forEach(el => io.observe(el));
  } else {
    // fallback
    progressFills.forEach(el => el.style.width = el.dataset.fill + '%');
  }

  // Project quick view modal
  const modal = document.getElementById('project-modal');
  modal.style.cssText = 'position:fixed;inset:0;display:none;align-items:center;justify-content:center;background:rgba(2,6,23,0.7);z-index:200';
  document.querySelectorAll('.project-view').forEach(btn => {
    btn.addEventListener('click', () => {
      const title = btn.dataset.title || 'Project';
      const desc = btn.dataset.desc || '';
      modal.innerHTML = `
        <div role="dialog" aria-modal="true" style="max-width:820px;width:94%;background:linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01));padding:18px;border-radius:12px;border:1px solid rgba(255,255,255,0.03);">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
            <h3 style="margin:0">${escapeHtml(title)}</h3>
            <button id="closeModal" style="background:transparent;border:0;color:var(--muted);font-size:18px;cursor:pointer" aria-label="Close">✕</button>
          </div>
          <div style="color:var(--muted);line-height:1.6">${escapeHtml(desc)}</div>
        </div>`;
      modal.style.display = 'flex';
      document.getElementById('closeModal').addEventListener('click', () => modal.style.display = 'none');
      modal.addEventListener('click', (ev) => { if (ev.target === modal) modal.style.display = 'none'; });
    });
  });

  // Contact form demo: show toast and reset (if you use Formspree, remove preventDefault to allow normal submit)
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      // If you want Formspree to actually send the email, remove the next two lines
      e.preventDefault();
      const btn = form.querySelector('button');
      btn.disabled = true;
      btn.textContent = 'Sending...';
      setTimeout(() => {
        btn.disabled = false;
        btn.textContent = 'Send Message';
        form.reset();
        toast('Message sent! I will contact you soon.');
      }, 900);
    });
  }

  // Toast helper
  function toast(msg) {
    const t = document.createElement('div');
    t.textContent = msg;
    t.style.cssText = 'position:fixed;right:18px;bottom:18px;background:#0b1220;padding:12px 16px;border-radius:10px;border:1px solid rgba(255,255,255,0.03);z-index:400;color:var(--accent-2)';
    document.body.appendChild(t);
    setTimeout(() => t.style.opacity = '0', 2500);
    setTimeout(() => t.remove(), 3200);
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"'`=\/]/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;','/':'&#x2F;','`':'&#x60;','=':'&#x3D;'})[s]);
  }
});
