export const Header = () => {
  return `
    <header class="header">
      <div class="header-container">
        <a href="#" class="logo">
          <span class="logo-text">柿本ホーム株式会社</span>
        </a>
        
        <button class="mobile-menu-toggle" aria-label="メニューを開く">
          <span></span>
          <span></span>
        </button>

        <nav class="nav">
          <ul class="nav-list">
            <li class="nav-item"><a href="#" class="nav-link">ホーム</a></li>
            <li class="nav-item"><a href="#about" class="nav-link">私たちについて</a></li>
            <li class="nav-item"><a href="#services" class="nav-link">事業案内</a></li>
            <li class="nav-item"><a href="#gallery" class="nav-link">施工事例</a></li>
            <li class="nav-item"><a href="#reviews" class="nav-link">お客様の声</a></li>
            <li class="nav-item"><a href="#company" class="nav-link">会社概要</a></li>
            <li class="nav-item"><a href="#contact" class="nav-link btn-header">お問い合わせ</a></li>
          </ul>
        </nav>
      </div>
    </header>
    <style>
      .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 100;
        background-color: rgba(252, 250, 245, 0.95); /* Match bg-dark with opacity */
        border-bottom: 1px solid var(--color-border);
        padding: 1.5rem 0;
        transition: all 0.3s ease;
      }

      .header-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .logo {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      .logo-text {
        font-size: 1.4rem;
        font-weight: 500;
        letter-spacing: 0.1em;
        color: var(--color-text-primary);
      }

      .nav-list {
        display: flex;
        gap: 2.5rem;
        align-items: center;
      }

      .nav-link {
        font-size: 0.95rem;
        letter-spacing: 0.1em;
        color: var(--color-text-primary);
        position: relative;
        padding-bottom: 0.5rem;
      }

      .nav-link::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 1px;
        background-color: var(--color-accent);
        transition: width 0.3s ease;
      }

      .nav-link:hover::after {
        width: 100%;
      }

      .btn-header {
        background-color: var(--color-text-primary);
        color: #fff;
        padding: 0.8rem 1.5rem;
        border-radius: 2px;
        transition: background-color 0.3s ease;
      }
      
      .btn-header:hover {
        background-color: var(--color-accent);
        color: #fff;
      }
      
      .btn-header::after {
        display: none;
      }

      .mobile-menu-toggle {
        display: none;
        flex-direction: column;
        gap: 6px;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem;
      }

      .mobile-menu-toggle span {
        display: block;
        width: 24px;
        height: 2px;
        background-color: var(--color-text-primary);
        transition: all 0.3s ease;
      }

      @media (max-width: 900px) {
        .mobile-menu-toggle {
          display: flex;
          z-index: 101;
        }

        .nav {
          position: fixed;
          top: 0;
          right: -100%;
          width: 100%;
          height: 100vh;
          background-color: var(--color-bg-dark);
          display: flex;
          justify-content: center;
          align-items: center;
          transition: right 0.4s ease;
        }

        .nav.active {
          right: 0;
        }

        .nav-list {
          flex-direction: column;
          text-align: center;
          gap: 2rem;
        }

        .nav-link {
          font-size: 1.2rem;
        }
        
        /* Hamburger Animation */
        .mobile-menu-toggle.active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        
        .mobile-menu-toggle.active span:nth-child(2) {
          opacity: 0;
        }
        
        .mobile-menu-toggle.active span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }
      }
    </style>
  `;
};
