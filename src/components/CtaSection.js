export const CtaSection = () => {
  return `
      <section class="cta-section fade-up">
        <div class="container cta-container">
          <div class="cta-content">
            <h2 class="cta-title">理想の住まいづくり、<br>まずはご相談ください。</h2>
            <p class="cta-desc">
              新築・リフォーム・外構工事など、<br>
              お住まいに関することなら何でもお気軽にお問い合わせください。
            </p>
          </div>
          <div class="cta-actions">
            <a href="tel:0120-654-711" class="cta-btn cta-btn-tel">
              <span class="cta-icon">📞</span>
              0120-654-711
            </a>
            <a href="/#contact" class="cta-btn cta-btn-mail">
              <span class="cta-icon">✉️</span>
              お問い合わせフォーム
            </a>
          </div>
        </div>
      </section>
      <style>
        .cta-section {
          background-color: var(--color-bg-secondary);
          padding: 5rem 0;
          margin: 4rem 0;
        }
  
        .cta-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 3rem;
        }
  
        .cta-content {
          flex: 1;
        }
  
        .cta-title {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          color: var(--color-text-primary);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
  
        .cta-desc {
          color: var(--color-text-secondary);
          line-height: 1.8;
          font-size: 1rem;
        }
  
        .cta-actions {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          min-width: 300px;
        }
  
        .cta-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.2rem 2rem;
          text-decoration: none;
          font-weight: 500;
          font-size: 1.1rem;
          border-radius: 4px;
          transition: all 0.3s ease;
          gap: 0.8rem;
        }
  
        .cta-btn-tel {
          background-color: #fff;
          border: 2px solid var(--color-text-primary);
          color: var(--color-text-primary);
        }
  
        .cta-btn-tel:hover {
          background-color: var(--color-text-primary);
          color: #fff;
        }
  
        .cta-btn-mail {
          background-color: var(--color-accent);
          color: #fff;
          border: 2px solid var(--color-accent);
        }
  
        .cta-btn-mail:hover {
          background-color: var(--color-accent-hover);
          border-color: var(--color-accent-hover);
        }
  
        .cta-icon {
          font-size: 1.3rem;
        }
  
        @media (max-width: 768px) {
          .cta-container {
            flex-direction: column;
            text-align: center;
            gap: 2rem;
          }
  
          .cta-actions {
            width: 100%;
          }
        }
      </style>
    `;
}
