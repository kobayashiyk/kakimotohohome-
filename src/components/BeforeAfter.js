export const BeforeAfter = () => {
  return `
    <section id="before-after" class="section before-after-section">
      <div class="container">
        <div class="intro-block fade-up">
          <h3 class="intro-title">信頼と実績の半世紀</h3>
          <p class="intro-text">
            当社は、昭和40年6月の創業以来、一般木造建築や鉄骨・鉄筋構造建築からプレハブ住宅の製造・建築まで、幅広い分野で事業を展開し、皆様のご要望に応えられるよう日々努力してまいりました。
          </p>
        </div>
        <div class="ba-section-header fade-up">
          <span class="ba-section-label">WORKS</span>
          <h2 class="ba-section-title">施工事例</h2>
          <div class="ba-section-line"></div>
          <p class="ba-section-desc">スライダーを動かして、施工前後の変化をお確かめください</p>
        </div>
        
        <div class="ba-cards-wrapper fade-up delay-200">
          <!-- Case 1: N様邸 エクステリア - 複数画像対応 -->
          <div class="ba-card ba-card-featured">
            <div class="ba-card-header">
              <div>
                <h3 class="ba-card-title">N様邸 エクステリア</h3>
                <p class="ba-card-desc">LIXIL暖蘭物語</p>
              </div>
              <div class="ba-gallery-nav" data-gallery-nav="n-exterior">
                <button class="ba-nav-btn ba-nav-prev" data-nav="prev">‹</button>
                <span class="ba-nav-counter"><span data-current>1</span> / <span data-total>3</span></span>
                <button class="ba-nav-btn ba-nav-next" data-nav="next">›</button>
              </div>
            </div>
            <div class="ba-slider-container" data-ba-slider data-gallery="n-exterior" data-auto-animate>
              <div class="ba-image-wrapper" data-gallery-images>
                <!-- Image Set 1 -->
                <div class="ba-image-set active" data-set="0">
                  <img src="/★丸野/N様邸エクステリア_LIXIL暖蘭物語/ビフォー/IMG_1887.JPG" alt="Before" class="ba-image ba-before" />
                  <img src="/★丸野/N様邸エクステリア_LIXIL暖蘭物語/アフター/_DSC1862.JPG" alt="After" class="ba-image ba-after" />
                </div>
                <!-- Image Set 2 -->
                <div class="ba-image-set" data-set="1">
                  <img src="/★丸野/N様邸エクステリア_LIXIL暖蘭物語/ビフォー/IMG_1888.JPG" alt="Before" class="ba-image ba-before" />
                  <img src="/★丸野/N様邸エクステリア_LIXIL暖蘭物語/アフター/_DSC1865.JPG" alt="After" class="ba-image ba-after" />
                </div>
                <!-- Image Set 3 -->
                <div class="ba-image-set" data-set="2">
                  <img src="/★丸野/N様邸エクステリア_LIXIL暖蘭物語/ビフォー/IMG_1890.JPG" alt="Before" class="ba-image ba-before" />
                  <img src="/★丸野/N様邸エクステリア_LIXIL暖蘭物語/アフター/_DSC1870.JPG" alt="After" class="ba-image ba-after" />
                </div>
              </div>
              <div class="ba-slider-line"></div>
              <input type="range" min="0" max="100" value="50" class="ba-slider-input" />
              <div class="ba-labels">
                <span class="ba-label ba-label-before">Before</span>
                <span class="ba-label ba-label-after">After</span>
              </div>
              <div class="ba-auto-indicator">
                <span class="ba-auto-dot"></span>
                自動プレビュー中
              </div>
            </div>
          </div>

          <!-- Case 2: H様邸 屋根カバー工法 -->
          <div class="ba-card">
            <div class="ba-card-header">
              <div>
                <h3 class="ba-card-title">H様邸 屋根</h3>
                <p class="ba-card-desc">カバー工法</p>
              </div>
            </div>
            <div class="ba-slider-container" data-ba-slider data-auto-animate>
              <div class="ba-image-wrapper">
                <img src="/★丸野/H様邸屋根_カバー工法/600099505697718292.jpg" alt="Before" class="ba-image ba-before" />
                <img src="/★丸野/H様邸屋根_カバー工法/600099522172944526.jpg" alt="After" class="ba-image ba-after" />
              </div>
              <div class="ba-slider-line"></div>
              <input type="range" min="0" max="100" value="50" class="ba-slider-input" />
              <div class="ba-labels">
                <span class="ba-label ba-label-before">Before</span>
                <span class="ba-label ba-label-after">After</span>
              </div>
              <div class="ba-auto-indicator">
                <span class="ba-auto-dot"></span>
                自動プレビュー中
              </div>
            </div>
          </div>

          <!-- Case 3: B様邸 和室 -->
          <div class="ba-card">
            <div class="ba-card-header">
              <div>
                <h3 class="ba-card-title">B様邸 和室</h3>
                <p class="ba-card-desc">和室リフォーム</p>
              </div>
            </div>
            <div class="ba-slider-container" data-ba-slider data-auto-animate>
              <div class="ba-image-wrapper">
                <img src="/ribinngu/B様邸　和室　前.jpg" alt="Before" class="ba-image ba-before" />
                <img src="/ribinngu/B様邸　和室　後.jpg" alt="After" class="ba-image ba-after" />
              </div>
              <div class="ba-slider-line"></div>
              <input type="range" min="0" max="100" value="50" class="ba-slider-input" />
              <div class="ba-labels">
                <span class="ba-label ba-label-before">Before</span>
                <span class="ba-label ba-label-after">After</span>
              </div>
              <div class="ba-auto-indicator">
                <span class="ba-auto-dot"></span>
                自動プレビュー中
              </div>
            </div>
          </div>
        </div>

        <div class="ba-more-wrapper fade-up delay-300">
          <a href="/gallery.html" class="ba-more-btn">
            施工事例をもっと見る →
          </a>
        </div>
      </div>
    </section>
    <style>
      .before-after-section {
        padding: var(--spacing-xl) 0;
        background: linear-gradient(180deg, var(--color-bg-secondary) 0%, #f8f6f3 100%);
      }

      /* Intro Text Block */
      .intro-block {
        text-align: center;
        max-width: 800px;
        margin: 0 auto 4rem;
        padding-bottom: 2rem;
        border-bottom: 1px solid var(--color-border);
      }

      .intro-title {
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
        font-weight: 500;
        letter-spacing: 0.1em;
        color: var(--color-text-primary);
      }

      .intro-text {
        line-height: 2.2;
        color: var(--color-text-secondary);
        text-align: justify;
      }
      
      @media (max-width: 768px) {
        .intro-title {
            font-size: 1.3rem;
        }
        
        .intro-text {
            text-align: left;
        }
      }

      .ba-section-header {
        text-align: center;
        margin-bottom: 4rem;
      }

      .ba-section-label {
        display: inline-block;
        font-size: 0.85rem;
        font-weight: 600;
        letter-spacing: 0.3em;
        color: var(--color-primary);
        margin-bottom: 1rem;
      }

      .ba-section-title {
        font-family: var(--font-serif);
        font-size: clamp(2rem, 5vw, 2.8rem);
        font-weight: 600;
        letter-spacing: 0.15em;
        color: var(--color-text-primary);
        margin: 0 0 1.5rem 0;
      }

      .ba-section-line {
        width: 80px;
        height: 2px;
        background: linear-gradient(90deg, transparent, var(--color-primary), transparent);
        margin: 0 auto 1.5rem;
      }

      .ba-section-desc {
        font-size: 1rem;
        color: var(--color-text-secondary);
        line-height: 1.8;
        margin: 0;
      }

      .ba-cards-wrapper {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2.5rem;
      }

      .ba-card {
        background: var(--color-bg-white);
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 24px rgba(0,0,0,0.08);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .ba-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 40px rgba(0,0,0,0.12);
      }

      .ba-card-featured {
        grid-column: span 2;
      }

      .ba-card-featured .ba-slider-container {
        aspect-ratio: 16 / 9;
      }

      .ba-card-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding: 1.5rem 1.5rem 1rem;
      }

      .ba-card-title {
        font-size: 1.2rem;
        font-weight: 600;
        margin: 0 0 0.25rem 0;
      }

      .ba-card-desc {
        font-size: 0.9rem;
        color: var(--color-text-secondary);
        margin: 0;
      }

      /* Gallery Navigation */
      .ba-gallery-nav {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .ba-nav-btn {
        width: 32px;
        height: 32px;
        border: 1px solid #ddd;
        background: white;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.2rem;
        line-height: 1;
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .ba-nav-btn:hover {
        background: var(--color-primary);
        color: white;
        border-color: var(--color-primary);
      }

      .ba-nav-counter {
        font-size: 0.85rem;
        color: var(--color-text-secondary);
        min-width: 40px;
        text-align: center;
      }

      .ba-slider-container {
        position: relative;
        width: 100%;
        aspect-ratio: 4 / 3;
        overflow: hidden;
        cursor: ew-resize;
      }

      .ba-image-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      /* Gallery Image Sets */
      .ba-image-set {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: opacity 0.5s ease;
        pointer-events: none;
      }

      .ba-image-set.active {
        opacity: 1;
        pointer-events: auto;
      }

      .ba-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .ba-before {
        z-index: 1;
        clip-path: inset(0 50% 0 0);
        transition: clip-path 0.05s ease-out;
      }

      .ba-after {
        z-index: 0;
      }

      .ba-slider-line {
        position: absolute;
        top: 0;
        left: 50%;
        width: 4px;
        height: 100%;
        background: linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.9) 100%);
        transform: translateX(-50%);
        z-index: 2;
        pointer-events: none;
        box-shadow: 0 0 15px rgba(0,0,0,0.3);
        transition: left 0.05s ease-out;
      }

      .ba-slider-line::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 48px;
        height: 48px;
        background: white;
        border-radius: 50%;
        box-shadow: 0 4px 16px rgba(0,0,0,0.25);
      }

      .ba-slider-line::after {
        content: '◄ ►';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 14px;
        color: var(--color-primary);
        white-space: nowrap;
        z-index: 3;
        font-weight: bold;
        letter-spacing: 2px;
      }

      .ba-slider-input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: ew-resize;
        z-index: 3;
      }

      .ba-labels {
        position: absolute;
        bottom: 1rem;
        left: 0;
        right: 0;
        display: flex;
        justify-content: space-between;
        padding: 0 1rem;
        pointer-events: none;
        z-index: 2;
      }

      .ba-label {
        padding: 0.4rem 1rem;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      .ba-label-before {
        background: linear-gradient(135deg, #666 0%, #444 100%);
        color: white;
      }

      .ba-label-after {
        background: linear-gradient(135deg, var(--color-primary) 0%, #c4956a 100%);
        color: white;
      }

      /* Auto-animation indicator */
      .ba-auto-indicator {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: rgba(0,0,0,0.7);
        color: white;
        padding: 0.4rem 0.8rem;
        border-radius: 20px;
        font-size: 0.75rem;
        display: flex;
        align-items: center;
        gap: 0.4rem;
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 4;
      }

      .ba-slider-container.animating .ba-auto-indicator {
        opacity: 1;
      }

      .ba-auto-dot {
        width: 8px;
        height: 8px;
        background: #4ade80;
        border-radius: 50%;
        animation: ba-pulse 1s ease-in-out infinite;
      }

      @keyframes ba-pulse {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.5; transform: scale(0.8); }
      }

      /* Hover effect - pause auto animation */
      .ba-slider-container:hover .ba-auto-indicator {
        opacity: 0;
      }

      /* More Button Styles */
      .ba-more-wrapper {
        text-align: center;
        margin-top: 3rem;
      }

      .ba-more-btn {
        display: inline-block;
        padding: 1.2rem 3rem;
        border: 2px solid #e67e22;
        color: #e67e22;
        text-decoration: none;
        font-size: 1.1rem;
        font-weight: 600;
        letter-spacing: 0.08em;
        transition: all 0.3s ease;
      }

      .ba-more-btn:hover {
        background: #e67e22;
        color: white;
      }

      @media (max-width: 900px) {
        .ba-cards-wrapper {
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        .ba-card-featured {
          grid-column: span 1;
        }

        .ba-card-featured .ba-slider-container {
          aspect-ratio: 4 / 3;
        }

        .ba-card-header {
          flex-direction: column;
          gap: 0.75rem;
        }

        .ba-gallery-nav {
          width: 100%;
          justify-content: flex-start;
        }

        .ba-more-btn {
          padding: 0.875rem 2rem;
          font-size: 0.95rem;
        }
      }
    </style>
  `;
};

export const initBeforeAfterSliders = () => {
  const sliders = document.querySelectorAll('[data-ba-slider]');

  sliders.forEach(container => {
    const input = container.querySelector('.ba-slider-input');
    const sliderLine = container.querySelector('.ba-slider-line');
    const hasAutoAnimate = container.hasAttribute('data-auto-animate');
    const galleryId = container.getAttribute('data-gallery');

    // Get active before image (for galleries or single images)
    const getActiveBeforeImg = () => {
      const activeSet = container.querySelector('.ba-image-set.active');
      if (activeSet) {
        return activeSet.querySelector('.ba-before');
      }
      return container.querySelector('.ba-before');
    };

    // Update slider position
    const updateSlider = (value) => {
      const beforeImg = getActiveBeforeImg();
      if (beforeImg && sliderLine) {
        beforeImg.style.clipPath = 'inset(0 ' + (100 - value) + '% 0 0)';
        sliderLine.style.left = value + '%';
        if (input) input.value = value;
      }
    };

    // Manual slider control
    if (input) {
      input.addEventListener('input', (e) => {
        stopAutoAnimation();
        updateSlider(e.target.value);
      });
    }

    // Auto-animation logic
    let autoAnimationId = null;
    let isAnimating = false;

    const startAutoAnimation = () => {
      if (isAnimating || !hasAutoAnimate) return;
      isAnimating = true;
      container.classList.add('animating');

      let value = 20;
      let direction = 1;
      const speed = 0.5;

      const animate = () => {
        value += speed * direction;

        if (value >= 80) {
          direction = -1;
        } else if (value <= 20) {
          direction = 1;
        }

        updateSlider(value);
        autoAnimationId = requestAnimationFrame(animate);
      };

      autoAnimationId = requestAnimationFrame(animate);
    };

    const stopAutoAnimation = () => {
      if (autoAnimationId) {
        cancelAnimationFrame(autoAnimationId);
        autoAnimationId = null;
      }
      isAnimating = false;
      container.classList.remove('animating');
    };

    // Intersection Observer for auto-animation
    if (hasAutoAnimate) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            startAutoAnimation();
          } else {
            stopAutoAnimation();
          }
        });
      }, { threshold: [0.5] });

      observer.observe(container);

      // Pause on hover/interaction
      container.addEventListener('mouseenter', stopAutoAnimation);
      container.addEventListener('touchstart', stopAutoAnimation);
      container.addEventListener('mouseleave', () => {
        // Resume after a delay
        setTimeout(() => {
          const rect = container.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
          if (isVisible) {
            startAutoAnimation();
          }
        }, 2000);
      });
    }

    // Gallery navigation
    if (galleryId) {
      const navContainer = document.querySelector(`[data-gallery-nav="${galleryId}"]`);
      if (navContainer) {
        const prevBtn = navContainer.querySelector('[data-nav="prev"]');
        const nextBtn = navContainer.querySelector('[data-nav="next"]');
        const currentSpan = navContainer.querySelector('[data-current]');
        const totalSpan = navContainer.querySelector('[data-total]');
        const imageSets = container.querySelectorAll('.ba-image-set');
        const total = imageSets.length;
        let currentIndex = 0;

        if (totalSpan) totalSpan.textContent = total;

        const showSet = (index) => {
          imageSets.forEach((set, i) => {
            set.classList.toggle('active', i === index);
          });
          currentIndex = index;
          if (currentSpan) currentSpan.textContent = index + 1;

          // Reset slider position for new set
          updateSlider(50);
        };

        if (prevBtn) {
          prevBtn.addEventListener('click', () => {
            const newIndex = (currentIndex - 1 + total) % total;
            showSet(newIndex);
          });
        }

        if (nextBtn) {
          nextBtn.addEventListener('click', () => {
            const newIndex = (currentIndex + 1) % total;
            showSet(newIndex);
          });
        }
      }
    }
  });
};
