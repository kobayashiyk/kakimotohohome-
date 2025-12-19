export const Hero = () => {
  return `
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="container hero-content">
        <div class="hero-text-wrapper">
          <h1 class="hero-title text-vertical fade-up delay-200" aria-label="時を重ね、想いを紡ぐ。">
            <span class="d-block" aria-hidden="true">時を</span>
            <span class="d-block" aria-hidden="true">重ね、</span>
            <span class="d-block" aria-hidden="true">想いを</span>
            <span class="d-block" aria-hidden="true">紡ぐ。</span>
          </h1>
          <p class="hero-subtitle text-vertical fade-up delay-400">
            創業五十年、<br>地域と共に歩む工務店。
          </p>
        </div>
        
        <div class="hero-cta-wrapper fade-up delay-500">
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

      .hero-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(252, 250, 245, 0.6); /* Warm overlay */
        z-index: 0;
      }

      .hero-content {
        position: relative;
        z-index: 1;
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .hero-text-wrapper {
        display: flex;
        flex-direction: row-reverse; /* Vertical text reads right to left */
        gap: 4rem;
        margin-bottom: 4rem;
      }

      .hero-title {
        font-size: clamp(2rem, 4vw, 3.5rem);
        font-weight: 500;
        color: var(--color-text-primary);
        line-height: 1.6;
        letter-spacing: 0.3em;
        height: auto; /* Allow height to adjust to content */
        min-height: 300px; /* Minimum height for visual balance */
      }

      .hero-subtitle {
        font-size: 1.2rem;
        color: var(--color-text-secondary);
        line-height: 2;
        letter-spacing: 0.2em;
        height: 300px;
        padding-top: 2rem;
      }

      .btn-hero {
        display: inline-block;
        padding: 1rem 3rem;
        background-color: var(--color-accent);
        color: #fff;
        font-size: 1.1rem;
        letter-spacing: 0.2em;
        border-radius: 2px;
        transition: background-color 0.3s ease;
      }

      .btn-hero:hover {
        background-color: var(--color-accent-hover);
      }

      @media (max-width: 768px) {
        .hero-text-wrapper {
          gap: 2rem;
        }
        
        .hero-title {
          font-size: 2.5rem;
          height: 300px;
        }
        
        .hero-subtitle {
          font-size: 1rem;
          height: 200px;
        }
      }
    </style>
  `;
}
