export const StickyFooter = () => {
  return `
    <!-- Desktop Floating Phone Button -->
    <a href="tel:0120-654-711" class="floating-phone-btn" aria-label="電話で問い合わせ">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
      <span class="floating-phone-text">お電話</span>
    </a>

    <!-- Mobile Sticky Footer -->
    <div class="sticky-footer">
      <div class="sticky-footer-btns">
        <a href="tel:0120-654-711" class="sticky-btn sticky-btn-tel">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sticky-icon"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          <span class="sticky-text">電話で相談</span>
        </a>
        <a href="/#contact" class="sticky-btn sticky-btn-mail">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sticky-icon"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          <span class="sticky-text">メールで相談</span>
        </a>
      </div>
    </div>
    <style>
      /* Floating Phone Button - Desktop */
      .floating-phone-btn {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        z-index: 998;
        display: flex;
        align-items: center;
        gap: 0.8rem;
        padding: 1rem 1.5rem;
        background-color: var(--color-accent);
        color: white;
        text-decoration: none;
        border-radius: 50px;
        box-shadow: 0 6px 20px rgba(216, 141, 45, 0.4);
        transition: all 0.3s ease;
        font-weight: 700;
        font-size: 1.1rem;
      }
      
      .floating-phone-btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 30px rgba(216, 141, 45, 0.5);
      }
      
      .floating-phone-text {
        display: inline;
      }

      /* Mobile Sticky Footer */
      .sticky-footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: 999;
        background-color: rgba(255, 255, 255, 0.98);
        box-shadow: 0 -4px 15px rgba(0,0,0,0.08);
        display: none;
        padding: 12px 15px;
        box-sizing: border-box;
      }

      .sticky-footer-btns {
        display: flex;
        gap: 12px;
        justify-content: space-between;
      }

      .sticky-btn {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 14px 0; /* Larger tap area */
        border-radius: 4px;
        text-decoration: none;
        font-family: var(--font-primary);
        font-weight: 700;
        transition: all 0.3s;
        gap: 10px;
        font-size: 1rem; /* Larger font for seniors */
        letter-spacing: 0.05em;
      }

      .sticky-btn:hover {
        opacity: 0.9;
      }

      .sticky-btn-tel {
        background-color: var(--color-text-primary);
        color: #fff;
      }

      .sticky-btn-mail {
        background-color: var(--color-accent);
        color: #fff;
      }

      .sticky-icon {
        width: 22px;
        height: 22px;
      }

      .sticky-text {
        font-size: 1rem;
      }

      /* Hide floating button on mobile, show sticky footer */
      @media (max-width: 768px) {
        .floating-phone-btn {
          display: none;
        }
        
        .sticky-footer {
          display: block;
        }
        
        body {
          padding-bottom: 80px; 
        }
      }
    </style>
  `;
};
