export const Header = () => {
  return `
    <header class="header">
      <div class="header-container">
        <a href="/" class="logo">
          <img src="/logo.avif" alt="柿本ホーム産業" class="logo-img" />
        </a>
        
        <button class="mobile-menu-toggle" aria-label="メニューを開く">
          <span></span>
          <span></span>
        </button>

        <nav class="nav">
          <ul class="nav-list">
            <li class="nav-item"><a href="/" class="nav-link">ホーム</a></li>
            <li class="nav-item"><a href="/gallery.html" class="nav-link">施工事例</a></li>
            <li class="nav-item"><a href="#philosophy" class="nav-link">私たちについて</a></li>
            <li class="nav-item"><a href="#services" class="nav-link">事業案内</a></li>
            <li class="nav-item"><a href="#company" class="nav-link">会社概要</a></li>
            <li class="header-contact">
                <a href="tel:0120-654-711" class="header-tel">
                    <span class="tel-label">お電話でのお問い合わせ</span>
                    <span class="tel-number">0120-654-711</span>
                </a>
                <a href="/#contact" class="nav-link btn-header">お問い合わせ</a>
            </li>
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
        background-color: rgba(255, 255, 255, 0.95); /* More opaque for readability */
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        padding: 1rem 0;
        transition: all 0.3s ease;
      }

      .header-container {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
      }

      .logo {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      .logo-img {
        height: 65px; /* Slightly larger */
        width: auto;
        display: block;
      }
      
      @media (max-width: 768px) {
        .logo-img {
          height: 50px;
        }
        
        .header-container {
          padding: 0 1.5rem;
        }
      }

      .nav-list {
        display: flex;
        gap: 2rem;
        align-items: center;
      }

      .nav-link {
        font-size: 1rem; /* Larger font size */
        font-weight: 500;
        letter-spacing: 0.05em;
        color: var(--color-text-primary);
        position: relative;
        text-decoration: none;
      }

      .nav-link:hover {
        color: var(--color-accent);
      }

      .header-contact {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        margin-left: 1rem;
        padding-left: 1.5rem;
        border-left: 1px solid rgba(0,0,0,0.1);
      }

      .header-tel {
        display: flex;
        flex-direction: column;
        align-items: flex-end; /* Align right */
        text-decoration: none;
        color: var(--color-text-primary);
        line-height: 1.2;
      }

      .tel-label {
        font-size: 0.7rem;
        color: var(--color-text-secondary);
      }

      .tel-number {
        font-size: 1.4rem;
        font-weight: 700;
        color: var(--color-text-primary);
        font-family: var(--font-primary);
        letter-spacing: 0.05em;
      }
      
      .header-tel:hover .tel-number {
        color: var(--color-accent);
      }

      .btn-header {
        background-color: var(--color-accent); /* Orange for high visibility */
        color: #fff !important;
        padding: 0.8rem 1.8rem;
        border-radius: 5px; /* Rounded rect for button feel */
        transition: all 0.3s ease;
        font-weight: 700;
        font-size: 1rem;
        box-shadow: 0 4px 6px rgba(216, 141, 45, 0.2);
      }
      
      .btn-header:hover {
         background-color: #c27a1f; 
         transform: translateY(-2px);
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

      @media (max-width: 1100px) {
        .nav-list {
            gap: 1.5rem;
        }
        .header-contact {
            gap: 1rem;
            padding-left: 1rem;
            margin-left: 0.5rem;
        }
        .tel-number {
            font-size: 1.2rem;
        }
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
          background-color: white; /* Clean white background */
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
          gap: 2.5rem;
        }
        
        .header-contact {
            flex-direction: column;
            border-left: none;
            padding-left: 0;
            margin-left: 0;
            margin-top: 1rem;
        }
        
        .header-tel {
            align-items: center;
        }

        .nav-link {
          font-size: 1.3rem; /* Large font for mobile */
          font-weight: 600;
        }
        
        .tel-number {
            font-size: 1.8rem;
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
