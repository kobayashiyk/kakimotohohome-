export const StickyFooter = () => {
  return `
    <div class="sticky-footer">
      <div class="sticky-footer-btns">
        <a href="tel:0120-654-711" class="sticky-btn sticky-btn-tel">
          <span class="sticky-icon">📞</span>
          <span class="sticky-text">電話で相談</span>
        </a>
        <a href="/#contact" class="sticky-btn sticky-btn-mail">
          <span class="sticky-icon">✉️</span>
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
        background-color: #fff;
        box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
        display: none; /* Hidden by default, shown on mobile */
        padding: 10px 15px;
        box-sizing: border-box;
      }

      .sticky-footer-btns {
        display: flex;
        gap: 10px;
        justify-content: space-between;
      }

      .sticky-btn {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 10px 0;
        border-radius: 4px;
        text-decoration: none;
        font-weight: bold;
        transition: opacity 0.3s;
        line-height: 1.2;
      }

      .sticky-btn:hover {
        opacity: 0.9;
      }

      .sticky-btn-tel {
        background-color: #fff;
        border: 2px solid var(--color-accent);
        color: var(--color-accent);
      }

      .sticky-btn-mail {
        background-color: var(--color-accent);
        color: #fff;
        border: 2px solid var(--color-accent);
      }

      .sticky-icon {
        font-size: 1.2rem;
        margin-bottom: 2px;
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
