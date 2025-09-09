  var carousel = new bootstrap.Carousel(document.querySelector('#projectCarousel'), {
            interval: 5000,
            wrap: true
        });

        // Mouse drag functionality
        let isDragging = false;
        let startPos = 0;
        let currentTranslate = 0;
        let prevTranslate = 0;
        let animationID = 0;
        
        const carouselElement = document.querySelector('#projectCarousel');
        const carouselInner = document.querySelector('.carousel-inner');
        
        // Mouse events
        carouselElement.addEventListener('mousedown', dragStart);
        carouselElement.addEventListener('mouseup', dragEnd);
        carouselElement.addEventListener('mousemove', dragMove);
        carouselElement.addEventListener('mouseleave', dragEnd);
        
        // Touch events
        carouselElement.addEventListener('touchstart', dragStart);
        carouselElement.addEventListener('touchend', dragEnd);
        carouselElement.addEventListener('touchmove', dragMove);
        
        function dragStart(e) {
            isDragging = true;
            startPos = getPositionX(e);
            carouselElement.style.cursor = 'grabbing';
        }
        
        function dragMove(e) {
            if (!isDragging) return;
            e.preventDefault();
            const currentPosition = getPositionX(e);
            const diff = currentPosition - startPos;
            
            // Minimum drag distance to trigger slide change
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    // Drag right - previous slide
                    carousel.prev();
                } else {
                    // Drag left - next slide  
                    carousel.next();
                }
                dragEnd();
            }
        }
        
        function dragEnd() {
            isDragging = false;
            carouselElement.style.cursor = 'grab';
        }
        
        function getPositionX(e) {
            return e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
        }
        
        // Prevent text selection during drag
        carouselElement.addEventListener('selectstart', (e) => {
            if (isDragging) e.preventDefault();
        });
         function handleGetStarted() {
            // Button click animation
            const button = document.querySelector('.cta-button');
            button.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                button.style.transform = '';
            }, 150);

            // Add your navigation logic here
            console.log('Get Started clicked!');
            // Example: window.location.href = '/signup';
        }

        // Add subtle animation on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.style.opacity = '1';
                }
            });
        });

        document.addEventListener('DOMContentLoaded', () => {
            const ctaSection = document.querySelector('.cta-section');
            ctaSection.style.transform = 'translateY(30px)';
            ctaSection.style.opacity = '0';
            ctaSection.style.transition = 'all 0.8s ease-out';
            
            observer.observe(ctaSection);
        });

        const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));



 const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
        const mobileCloseBtn = document.getElementById('mobileCloseBtn');
        const backdrop = document.getElementById('backdrop');

        // User dropdown functionality
        const userBtn = document.getElementById('userBtn');
        const dropdownMenu = document.getElementById('dropdownMenu');

        // Open mobile menu
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuOverlay.classList.add('active');
            backdrop.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        // Close mobile menu
        function closeMobileMenu() {
            mobileMenuOverlay.classList.remove('active');
            backdrop.classList.remove('active');
            document.body.style.overflow = '';
        }

        mobileCloseBtn.addEventListener('click', closeMobileMenu);
        backdrop.addEventListener('click', closeMobileMenu);

        // Close mobile menu when clicking on a link
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-menu a');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });

        // User dropdown toggle
        userBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdownMenu.classList.toggle('active');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!userBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
                dropdownMenu.classList.remove('active');
            }
        });

        // Close dropdown when clicking on dropdown items
        const dropdownItems = document.querySelectorAll('.dropdown-item');
        dropdownItems.forEach(item => {
            item.addEventListener('click', () => {
                dropdownMenu.classList.remove('active');
            });
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                closeMobileMenu();
            }
        });

        // Prevent scroll when mobile menu is open
        mobileMenuOverlay.addEventListener('touchmove', (e) => {
            e.stopPropagation();
        });

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

        document.addEventListener('DOMContentLoaded', function() {
            const userBtn = document.getElementById('userBtn');
            const mobileDropdown = document.getElementById('mobileDropdown');
            
            // User button click eventi
            userBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                
                // Toggle dropdown
                if (mobileDropdown.classList.contains('show')) {
                    mobileDropdown.classList.remove('show');
                    userBtn.classList.remove('active');
                } else {
                    mobileDropdown.classList.add('show');
                    userBtn.classList.add('active');
                }
            });
            
            // Kənarda click etdikdə dropdown-u bağla
            document.addEventListener('click', function(e) {
                if (!userBtn.contains(e.target) && !mobileDropdown.contains(e.target)) {
                    mobileDropdown.classList.remove('show');
                    userBtn.classList.remove('active');
                }
            });
            
            // ESC düyməsi ilə bağlama
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    mobileDropdown.classList.remove('show');
                    userBtn.classList.remove('active');
                }
            });
            
            // Resize zamanı dropdown-u bağla
            window.addEventListener('resize', function() {
                if (window.innerWidth > 768) {
                    mobileDropdown.classList.remove('show');
                    userBtn.classList.remove('active');
                }
            });
        });


        