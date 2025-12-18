export const Footer = () => {
  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-main fade-in">
          <div class="footer-brand">
            <img src="/rogo/kakimotorogo-new.png" alt="柿本ホーム" class="footer-logo" />
            <p class="footer-tagline">住まいと快適のプロフェッショナル</p>
            <p class="footer-description">
              1965年の創業以来、横浜を中心に<br>
              お客様の理想の住まいづくりを<br>
              サポートしてまいりました。
            </p>
          </div>

          <div class="footer-nav">
            <div class="footer-col">
              <h4>事業内容</h4>
              <ul>
                <li><a href="#services">リフォーム</a></li>
                <li><a href="#services">外構エクステリア</a></li>
                <li><a href="#services">新築・建替え</a></li>
              </ul>
            </div>

            <div class="footer-col">
              <h4>会社案内</h4>
              <ul>
                <li><a href="#philosophy">企業理念</a></li>
                <li><a href="#company">会社概要</a></li>
                <li><a href="#gallery">施工事例</a></li>
              </ul>
            </div>

            <div class="footer-col">
              <h4>お問い合わせ</h4>
              <ul>
                <li>〒225-0025</li>
                <li>神奈川県横浜市青葉区鉄町1463</li>
                <li><a href="tel:045-000-0000">TEL: 045-000-0000</a></li>
                <li><a href="mailto:info@kakimoto-home.co.jp">info@kakimoto-home.co.jp</a></li>
              </ul>
            </div>

            <div class="footer-col">
              <h4>営業時間</h4>
              <ul>
                <li>平日: 9:00 - 18:00</li>
                <li>土曜: 9:00 - 17:00</li>
                <li>定休日: 日曜・祝日</li>
              </ul>
              <div class="social-links">
                <a href="#" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="footer-bottom-content">
            <p>&copy; 2025 KAKIMOTO HOME CO., LTD. All Rights Reserved.</p>
            <div class="footer-legal">
              <a href="#">プライバシーポリシー</a>
              <span class="divider">|</span>
              <a href="#">サイトマップ</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <style>
      .footer {
        background-color: var(--color-bg-secondary);
        padding: var(--spacing-xl) 0 0;
        border-top: 1px solid var(--color-border);
      }

      .footer-main {
        display: grid;
        grid-template-columns: 1.2fr 2fr;
        gap: var(--spacing-lg);
        padding-bottom: var(--spacing-lg);
        border-bottom: 1px solid rgba(0, 0, 0, 0.06);
      }

      .footer-brand {
        max-width: 320px;
      }

      .footer-logo {
        height: 60px;
        width: auto;
        margin-bottom: 1.5rem;
        display: block;
      }

      .footer-tagline {
        font-size: 0.95rem;
        color: var(--color-text-primary);
        margin-bottom: 1rem;
        font-weight: 500;
        letter-spacing: 0.1em;
      }

      .footer-description {
        font-size: 0.85rem;
        line-height: 1.9;
        color: var(--color-text-secondary);
      }

      .footer-nav {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 3rem;
      }

      .footer-col h4 {
        font-size: 1rem;
        letter-spacing: 0.1em;
        margin-bottom: 1.5rem;
        color: var(--color-text-primary);
        font-weight: 500;
      }

      .footer-col ul {
        list-style: none;
      }

      .footer-col ul li {
        margin-bottom: 0.9rem;
      }

      .footer-col a,
      .footer-col ul li {
        color: var(--color-text-secondary);
        font-size: 0.9rem;
        transition: color 0.3s ease;
        line-height: 1.6;
      }

      .footer-col a:hover {
        color: var(--color-accent);
      }

      .social-links {
        display: flex;
        gap: 1rem;
        margin-top: 1.5rem;
      }

      .social-links a {
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--color-border);
        border-radius: 50%;
        color: var(--color-text-secondary);
        transition: all 0.3s ease;
      }

      .social-links a:hover {
        background-color: var(--color-accent);
        border-color: var(--color-accent);
        color: white;
        transform: translateY(-2px);
      }

      .footer-bottom {
        padding: var(--spacing-md) 0;
      }

      .footer-bottom-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
      }

      .footer-bottom p {
        color: var(--color-text-secondary);
        font-size: 0.75rem;
        letter-spacing: 0.05em;
      }

      .footer-legal {
        display: flex;
        gap: 1rem;
        align-items: center;
      }

      .footer-legal a {
        color: var(--color-text-secondary);
        font-size: 0.8rem;
        transition: color 0.3s ease;
      }

      .footer-legal a:hover {
        color: var(--color-text-primary);
      }

      .footer-legal .divider {
        color: rgba(0, 0, 0, 0.2);
      }

      @media (max-width: 1024px) {
        .footer-nav {
          grid-template-columns: repeat(2, 1fr);
          gap: 2.5rem;
        }
      }

      @media (max-width: 768px) {
        .footer-main {
          grid-template-columns: 1fr;
          gap: 3rem;
        }

        .footer-brand {
          max-width: 100%;
          text-align: center;
        }

        .footer-logo {
          margin-left: auto;
          margin-right: auto;
        }

        .footer-nav {
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }

        .footer-col {
          text-align: center;
        }

        .social-links {
          justify-content: center;
        }

        .footer-bottom-content {
          flex-direction: column;
          text-align: center;
        }
      }
    </style>
  `;
}
