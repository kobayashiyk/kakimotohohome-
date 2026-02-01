export const StickyFooter = () => {
  return `
    <div class="sticky-footer">
      <div class="sticky-footer-btns">
        <a href="tel:0120-654-711" class="sticky-btn sticky-btn-tel">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="sticky-icon"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          <span class="sticky-text">電話で相談</span>
        </a>
        <a href="/#contact" class="sticky-btn sticky-btn-mail">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="sticky-icon"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          <span class="sticky-text">メールで相談</span>
        </a>
      </div>
    </div>
    <style>
      .sticky-footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: 999;
        background-color: rgba(255, 255, 255, 0.95); /* Slight transparency */
        backdrop-filter: blur(5px);
        box-shadow: 0 -2px 10px rgba(0,0,0,0.05); /* Softer shadow */
        display: none; /* Hidden by default, shown on mobile */
        padding: 10px 15px;
        box-sizing: border-box;
      }

      .sticky-footer-btns {
        display: flex;
        gap: 12px; /* Slightly wider gap */
        justify-content: space-between;
      }

      .sticky-btn {
        flex: 1;
        display: flex;
        align-items: center; /* Integrate vertically */
        justify-content: center;
        padding: 10px 0;
        border-radius: 2px; /* Sharper corners for premium feel */
        text-decoration: none;
        font-family: var(--font-primary); /* Modern Sans */
        font-weight: 500;
        transition: all 0.3s;
        gap: 8px; /* Gap between icon and text */
        font-size: 0.9rem;
        letter-spacing: 0.05em;
      }

      .sticky-btn:hover {
        opacity: 0.9;
      }

      .sticky-btn-tel {
        background-color: transparent;
        border: 1px solid var(--color-text-primary); /* Thin subtle border */
        color: var(--color-text-primary);
      }

      .sticky-btn-mail {
        background-color: var(--color-accent);
        color: #fff;
        border: 1px solid var(--color-accent); /* Thin border */
      }

      .sticky-icon {
        width: 18px;
        height: 18px;
        margin-bottom: 0; /* Reset margin */
      }

      .sticky-text {
        font-size: 0.85rem;
      }

      /* Adjust main content padding so footer doesn't cover content */
      @media (max-width: 768px) {
        .sticky-footer {
          display: block;
        }
        
        /* Add padding to body or footer component to prevent overlap if necessary */
        body {
          padding-bottom: 70px; 
        }
        
        /* Hide original footer prompt if redundant, or keep it. */
      }
    </style>
  `;
};
