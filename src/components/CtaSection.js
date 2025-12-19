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
        /* ... existing styles ... */
        
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
