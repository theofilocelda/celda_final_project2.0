// ===== GLOBAL.JS - Shared Functionality =====

const Utils = {
    // Format rank with ordinal suffix
    formatRank: (rank) => {
        const j = rank % 10;
        const k = rank % 100;
        if (j === 1 && k !== 11) return rank + "st";
        if (j === 2 && k !== 12) return rank + "nd";
        if (j === 3 && k !== 13) return rank + "rd";
        return rank + "th";
    },

    // Generate placeholder image
    placeholderImage: (text, bgColor = '2a2a4a', textColor = 'ffffff') => {
        return `https://via.placeholder.com/300x300/${bgColor}/${textColor}?text=${encodeURIComponent(text)}`;
    },

    // Handle image load errors
    handleImageError: (img, fallback = '🎾') => {
        img.onerror = () => {
            img.parentElement.innerHTML = `<div class="placeholder-icon">${fallback}</div>`;
        };
    }
};

// ===== Navigation Handling =====
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        });
    }

    // Active Page Highlight
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const page = link.getAttribute('data-page');
        if (
            (page === 'home' && currentPage === 'index.html') ||
            (page && currentPage.includes(page + '.html'))
        ) {
            link.classList.add('active');
        }
    });

    // Smooth scroll for anchor links (within same page)
    document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Initialize page-specific scripts if they exist
    if (typeof initPage === 'function') {
        initPage();
    }
});