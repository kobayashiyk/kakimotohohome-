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
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="cta-icon"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              0120-654-711
            </a>
            <a href="/#contact" class="cta-btn cta-btn-mail">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="cta-icon"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              お問い合わせフォーム
            </a>
          </div>
        </div>
      </section>
      <style>
        /* ... existing styles ... */
        .cta-content {
          flex: 1;
        }
  
        .cta-title {
          font-family: var(--font-heading);
          font-size: 2rem;
          color: var(--color-text-primary);
          margin-bottom: 2rem;
          line-height: 1.6;
          font-weight: 700;
        }
  
        .cta-desc {
          color: var(--color-text-secondary);
          line-height: 2.0;
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }
  
        .cta-actions {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          min-width: 300px;
        }
  
        .cta-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem 3rem; /* Larger padding for easier tapping */
          text-decoration: none;
          font-family: var(--font-primary);
          font-weight: 700;
          font-size: 1.3rem; /* Larger font for visibility */
          border-radius: 4px;
          transition: all 0.3s ease;
          gap: 1rem;
          letter-spacing: 0.08em;
        }
  
        .cta-btn-tel {
          background-color: var(--color-text-primary);
          border: 2px solid var(--color-text-primary);
          color: #fff;
          font-size: 1.5rem; /* Extra large for phone number */
          padding: 1.8rem 3.5rem;
        }
  
        .cta-btn-tel:hover {
          background-color: #fff;
          color: var(--color-text-primary);
        }
  
        .cta-btn-mail {
          background-color: var(--color-accent);
          color: #fff;
          border: 2px solid var(--color-accent);
        }
  
        .cta-btn-mail:hover {
          background-color: #fff;
          color: var(--color-accent);
        }
  
        .cta-icon {
          width: 24px;
          height: 24px;
        }
  
        @media (max-width: 768px) {
          .cta-container {
            flex-direction: column;
            text-align: center;
            gap: 3rem; /* Increased from 2rem */
          }
  
          .cta-actions {
            width: 100%;
          }
        }
      </style>
    `;
}
