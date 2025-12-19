export const Hero = () => {
  return `
    <section class="hero">
      <div class="hero-bg">
        <video autoplay muted loop playsinline poster="/hero-bg-stylish.png">
          <source src="/hero-movie.mp4" type="video/mp4">
          <!-- Fallback for browsers that don't support video -->
          <img src="/hero-bg-stylish.png" alt="Hero Background">
        </video>
      </div>
      <div class="hero-overlay"></div>
        <div class="hero-text-wrapper fade-up delay-200">
          <h1 class="hero-title">
            <span>時とともに、</span>
            <span>深まる家。</span>
          </h1>
          <p class="hero-subtitle">
            横浜で創業五十年。<br>あなたの人生に寄り添う家づくり。
          </p>
          <div class="hero-cta-wrapper">
             <div class="cta-actions">
                <a href="tel:0120-654-711" class="btn-hero btn-hero-tel">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="hero-icon"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  0120-654-711
                </a>
                <a href="#contact" class="btn-hero btn-hero-mail">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="hero-icon"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  お問い合わせ
                </a>
             </div>
          </div>
        </div>
        
        <div class="scroll-down">
          <span>Scroll</span>
          <div class="arrow"></div>
        </div>
    </section>
    <style>
      .hero {
        position: relative;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        /* Background moved to .hero-bg */
      }
      
      .hero-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        /* Animation removed as video provides movement, but we can keep subtle zoom if desire */
      }
      
      .hero-bg video {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .hero-bg img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      
      /* @keyframes kenBurns removed */

      /* Scroll Indicator */
      .scroll-down {
        position: absolute;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 2;
        color: rgba(255, 255, 255, 0.8);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        font-family: var(--font-serif);
        font-size: 0.9rem;
        letter-spacing: 0.1em;
        animation: fadeUp 1s ease 1s backwards;
      }
      
      .scroll-down .arrow {
        width: 1px;
        height: 60px;
        background-color: rgba(255, 255, 255, 0.5);
        position: relative;
        overflow: hidden;
      }
      
      .scroll-down .arrow::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 50%;
        background-color: #fff;
        animation: scrollLine 2s ease-in-out infinite;
      }
      
      @keyframes scrollLine {
        0% { transform: translateY(-100%); }
        100% { transform: translateY(200%); }
      }

      .hero-text-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 2.5rem;
        width: 100%;
        max-width: 1000px;
        z-index: 2;
        /* Removed glass card for a more open, premium feel */
      }

      .hero-title {
        font-family: var(--font-serif);
        font-size: clamp(2.5rem, 6vw, 4.5rem); /* Larger, more impactful */
        font-weight: 500;
        color: #ffffff; /* Pure white */
        line-height: 1.3;
        letter-spacing: 0.15em;
        text-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); /* Soft shadow for readability */
      }
      
      .hero-title span {
        display: inline-block;
      }

      .hero-subtitle {
        font-family: var(--font-serif);
        font-size: clamp(1rem, 2vw, 1.3rem);
        color: rgba(255, 255, 255, 0.95);
        line-height: 2.2;
        letter-spacing: 0.1em;
        text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
      }

      .hero-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          to bottom, 
          rgba(0, 0, 0, 0.2), 
          rgba(0, 0, 0, 0.4)
        ); /* Darker, gradient overlay for contrast */
        z-index: 0;
      }

      .btn-hero {
        display: inline-block;
        padding: 1.2rem 4rem;
        background-color: transparent;
        color: #fff;
        font-family: var(--font-serif);
        font-size: 1.1rem;
        letter-spacing: 0.2em;
        border: 1px solid rgba(255, 255, 255, 0.8);
        border-radius: 2px;
        transition: all 0.4s ease;
        margin-top: 1rem;
        backdrop-filter: blur(4px);
      }

      .btn-hero:hover {
        background-color: #fff;
        color: var(--color-text-primary);
        border-color: #fff;
        box-shadow: 0 0 20px rgba(255,255,255,0.3);
      }

      /* Optimized Ken Burns for Mobile */
      .hero-bg {
        /* ... existing props ... */
        will-change: transform; /* Hint for smoother mobile animation */
      }

      @media (max-width: 768px) {
        /* Add floating animation to text wrapper on mobile - REMOVED */
        
        /* Make scroll indicator slightly higher on mobile to avoid bottom bar */
        .scroll-down {
            bottom: 50px; 
        }
      }
    </style>
  `;
}
