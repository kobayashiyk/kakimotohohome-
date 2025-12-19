export const Hero = () => {
  return `
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="hero-overlay"></div>
        <div class="hero-text-wrapper fade-up delay-200">
          <h1 class="hero-title">
            <span>時とともに、</span>
            <span>深まる家</span>
          </h1>
          <p class="hero-subtitle">
            横浜で創業五十年。<br>あなたの人生に寄り添う家づくり。
          </p>
          <!-- CTA Wrapper removed -->
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
            /* Balance letter spacing for true center */
            text-indent: 0.15em;
        }

        /* Make scroll indicator slightly higher on mobile to avoid bottom bar */
        .scroll-down {
            bottom: 50px; 
        }

        /* Soften the CTA button on mobile */
        .btn-hero {
            padding: 0.8rem 2.5rem;
            font-size: 1rem;
            background-color: rgba(0, 0, 0, 0.2); /* More transparent */
            border-color: rgba(255, 255, 255, 0.6);
            width: 80%; /* Limit width */
            max-width: 280px;
        }
      }
    </style>
  `;
}
