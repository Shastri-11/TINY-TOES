document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Greeting Button Logic
    const greetBtn = document.getElementById('greetBtn');
    if (greetBtn) {
        greetBtn.addEventListener('click', () => {
            showCuteAlert('♥ Hello! Have a magical day! ♥');
        });
    }

    const learnMoreBtn = document.getElementById('learnMoreBtn');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', () => {
            showCuteAlert('More magic is coming soon!');
        });
    }

    function showCuteAlert(message) {
        // Create a custom cute alert
        const alertBox = document.createElement('div');
        alertBox.style.position = 'fixed';
        alertBox.style.top = '80px';
        alertBox.style.right = '20px';
        alertBox.style.background = 'rgba(255, 255, 255, 0.9)';
        alertBox.style.backdropFilter = 'blur(10px)';
        alertBox.style.border = '1px solid rgba(255, 154, 158, 0.5)';
        alertBox.style.padding = '15px 25px';
        alertBox.style.borderRadius = '15px';
        alertBox.style.boxShadow = '0 8px 32px rgba(255, 154, 158, 0.2)';
        alertBox.style.zIndex = '1000';
        alertBox.style.transform = 'translateX(150%)';
        alertBox.style.transition = 'transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        alertBox.style.fontFamily = "'Outfit', sans-serif";
        alertBox.style.fontWeight = '600';
        alertBox.style.color = '#ff9a9e';
        
        alertBox.innerHTML = message;
        
        document.body.appendChild(alertBox);
        
        // Trigger animation
        setTimeout(() => {
            alertBox.style.transform = 'translateX(0)';
        }, 10);
        
        // Remove after 3 seconds
        setTimeout(() => {
            alertBox.style.transform = 'translateX(150%)';
            setTimeout(() => {
                alertBox.remove();
            }, 500);
        }, 3000);
    }
});
