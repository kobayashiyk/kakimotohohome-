export const About = () => {
  return `
    <section id="philosophy" class="section philosophy">
      <div class="container">
        <div class="philosophy-layout">
          <div class="philosophy-visual reveal-image">
            <div class="philosophy-image-container">
              <img src="/about-image.png" alt="Philosophy Visual" />
            </div>
          </div>
          <div class="philosophy-content fade-left delay-200">
            <h3>本質を、纏う。</h3>
            <p>
              流行を追うのではなく、<br>
              時を経ても色褪せない美しさを。<br>
              <br>
              私たちは、単なる住まいではなく、<br>
              住まう人の人生そのものを豊かにする<br>
              「空間」を創造します。<br>
              <br>
              素材一つひとつにこだわり、<br>
              光と影が織りなす表情を大切にする。<br>
              それが、カキモトホームの流儀です。
            </p>
            
            <div class="achievements">
              <div class="achievement-item fade-up delay-300">
                <span class="achievement-label">創業50年</span>
                <span class="achievement-text">横浜で50年以上の実績</span>
              </div>
              <div class="achievement-item fade-up delay-400">
                <span class="achievement-label">受賞歴</span>
                <span class="achievement-text">ホームプロ利用者満足度 優良会社表彰</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <style>
      .philosophy {
        padding: var(--spacing-xl) 0;
        background-color: var(--color-bg-white);
      }

      .philosophy-layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--spacing-lg);
        align-items: center;
      }

      .philosophy-visual {
        position: relative;
        height: 600px;
      }

      .philosophy-image-container {
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: 2px;
      }

      .philosophy-visual img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 1s ease;
        display: block;
      }
      
      .philosophy-visual:hover img {
        transform: scale(1.05);
      }

      .philosophy-title-overlay {
        position: absolute;
        bottom: 3rem;
        right: -3rem;
        background-color: var(--color-bg-white);
        padding: 3rem 5rem;
        box-shadow: 
          0 8px 24px rgba(0, 0, 0, 0.06),
          0 16px 48px rgba(0, 0, 0, 0.04);
        border: 1px solid var(--color-border);
        min-width: 450px;
      }

      .philosophy-title-overlay .section-title {
        margin-bottom: 0;
        text-align: right;
        white-space: nowrap;
        overflow: visible;
        font-size: 3rem;
        font-weight: 500;
        letter-spacing: 0.15em;
      }

      .philosophy-content {
        padding-left: var(--spacing-md);
      }

      .philosophy-content h3 {
        font-size: 2rem;
        margin-bottom: var(--spacing-md);
        color: var(--color-text-primary);
        font-weight: 500;
      }

      .philosophy-content p {
        font-size: 1rem;
        color: var(--color-text-secondary);
        line-height: 2.4;
        margin-bottom: 3rem;
      }

      .achievements {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        border-top: 1px solid rgba(0,0,0,0.1);
        padding-top: 2rem;
      }

      .achievement-item {
        display: flex;
        align-items: center;
        gap: 1.5rem;
      }

      .achievement-label {
        font-family: var(--font-serif);
        font-weight: 500;
        font-size: 0.9rem;
        color: var(--color-accent);
        letter-spacing: 0.1em;
        border: 1px solid var(--color-accent);
        padding: 0.6rem 1rem; /* Slightly more padding */
        min-width: 140px; /* Increased min-width to hold text better */
        text-align: center;
        flex-shrink: 0; /* Prevent shrinking */
      }

      @media (max-width: 768px) {
        .philosophy-layout {
          grid-template-columns: 1fr;
          gap: 0;
        }

        .philosophy-visual {
          height: auto;
          display: flex;
          flex-direction: column;
        }
        
        .philosophy-image-container {
            height: 300px;
        }

        .philosophy-title-overlay {
          position: relative; /* layout normally */
          right: auto;
          bottom: auto;
          width: 100%;
          text-align: center;
          background-color: var(--color-bg-white);
          padding: 2rem 1rem;
          box-shadow: none;
          min-width: auto;
          margin-top: -2rem; /* Slight overlap upwards */
          z-index: 2;
        }
        
        .philosophy-title-overlay .section-title {
          text-align: center;
          font-size: 1.8rem;
          margin-bottom: 0;
        }

        .philosophy-content {
          padding-left: 0;
          text-align: center;
          padding-top: 1rem;
          padding: 1rem;
        }
        
        .philosophy-content p {
            text-align: justify;
        }

        .achievements {
          align-items: center;
        }
      }
    </style>
  `;
}
