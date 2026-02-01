export const Hero = () => {
  return `
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="hero-overlay"></div>
        <div class="hero-text-wrapper fade-up delay-200">
          <h1 class="hero-title">
            理想の暮らしを、<br>カタチに。
          </h1>
          <p class="hero-subtitle">
            横浜で創業50年。地域密着のリフォーム・注文住宅。<br class="mobile-only">
            お客様一人ひとりのご要望に<br class="mobile-only">誠心誠意お応えします。
          </p>
          <div class="hero-cta-wrapper">
             <div class="cta-actions">
                <a href="#contact" class="btn-hero btn-hero-mail">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="hero-icon"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  お問い合わせ
                </a>
             </div>
          </div>
        </div>
        
        <div class="scroll-down">
          <!-- Text removed as per user request to avoid Katakana/English -->
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
        background-image: url('/hero-bg-stylish.png');
        background-size: cover;
        background-position: center;
        z-index: 0;
        animation: kenBurns 20s ease-in-out infinite alternate;
        will-change: transform;
      }
      
      @keyframes kenBurns {
        0% { transform: scale(1); }
        100% { transform: scale(1.1); }
      }

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
        font-family: var(--font-primary);
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
        font-family: var(--font-heading);
        font-size: clamp(2.8rem, 7vw, 5rem); /* Slightly larger scaling */
        font-weight: 700;
        color: #ffffff;
        line-height: 1.25;
        letter-spacing: 0.1em;
        text-shadow: 0 10px 30px rgba(0, 0, 0, 0.2); /* Softer, deeper shadow */
      }

      .hero-subtitle {
        font-family: var(--font-primary);
        font-size: clamp(1rem, 2vw, 1.3rem);
        color: rgba(255, 255, 255, 0.95);
        line-height: 2.2;
        letter-spacing: 0.1em;
        text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
      }
      
      /* ... (lines 137-178 unchanged) ... */

      @media (max-width: 768px) {
        .hero-cta-wrapper {
            display: block; /* Restored CTA on mobile */
            margin-top: 1.5rem;
        }

        .hero-text-wrapper {
          width: 100%;
          padding: 0 1.5rem;
          margin: 0 auto;
          align-items: center;
          justify-content: center;
        }

        .hero-title {
            text-align: center;
            width: 100%;
            font-size: 2rem; /* Smaller font size for mobile to prevent awkward wrap */
            text-indent: 0;
            letter-spacing: 0.05em; /* Reduced spacing */
        }
        
        .hero-subtitle {
           font-size: 0.9rem;
           line-height: 1.8;
           width: 90%;
           margin: 0 auto;
           word-break: auto-phrase; /* Try to break naturally */
           display: inline-block;
        }

        /* Make scroll indicator slightly higher on mobile to avoid bottom bar */
        .scroll-down {
            bottom: 50px; 
        }

        /* Fix Button alignment and contrast */
        .btn-hero {
            display: inline-flex !important; /* Force flex */
            align-items: center;
            justify-content: center;
            padding: 1rem 2rem;
            font-size: 1rem;
            background-color: rgba(0, 0, 0, 0.6); /* Darker for better contrast */
            border: 1px solid rgba(255, 255, 255, 0.8);
            color: #ffffff !important; /* Force white text */
            width: auto; 
            min-width: 200px;
            border-radius: 50px; /* Rounded pill shape */
            text-indent: 0;
            gap: 0.5rem;
        }
      }
    </style>
  `;
}
