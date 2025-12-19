export const Hero = () => {
  return `
    <section class="hero">
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
             <a href="#contact" class="btn-hero">お問い合わせ</a>
          </div>
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
        background-image: url('/hero-bg-stylish.png'); /* Keep existing image for now, but style changes */
        background-size: cover;
        background-position: center;
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

      @media (max-width: 768px) {
        .hero-title {
          font-size: 2.2rem;
          margin-bottom: 0.5rem;
        }
        
        .hero-subtitle {
          font-size: 0.95rem;
          padding: 0 1rem;
        }
        
        .btn-hero {
            padding: 1rem 3rem;
            width: auto;
            min-width: 200px;
        }
      }
    </style>
  `;
}
