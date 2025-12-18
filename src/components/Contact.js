export const Contact = () => {
  return `
    <section id="contact" class="section contact">
      <div class="container">
        <h2 class="section-title fade-up">お問い合わせ</h2>
        
        <div class="contact-layout">
          <div class="contact-form-wrapper fade-up">
            <div class="contact-badge">無料相談・お見積り</div>
            <p class="contact-desc">
              住まいに関するご相談、お見積もりなど、<br>
              お気軽にお問い合わせください。
            </p>
            
            <form class="contact-form" onsubmit="event.preventDefault(); alert('送信機能は現在実装されていません。');">
              <div class="form-group">
                <label for="name">お名前</label>
                <input type="text" id="name" name="name" required placeholder="例：柿本 太郎">
              </div>
              
              <div class="form-group">
                <label for="email">メールアドレス</label>
                <input type="email" id="email" name="email" required placeholder="例：info@kakimoto-home.co.jp">
              </div>
              
              <div class="form-group">
                <label for="phone">電話番号</label>
                <input type="tel" id="phone" name="phone" placeholder="例：045-000-0000">
              </div>
              
              <div class="form-group">
                <label for="message">お問い合わせ内容</label>
                <textarea id="message" name="message" rows="5" required placeholder="ご相談内容をご記入ください"></textarea>
              </div>
              
              <button type="submit" class="submit-btn">送信する</button>
            </form>
          </div>

          <div class="contact-map-wrapper fade-up delay-200">
            <div class="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.687697839634!2d139.5078!3d35.5615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f7f000000001%3A0x0!2z44CSMjI1LTAwMjUg56We5aWI5bed55yM5qiq5rWc5biC6Z2S6JGJ5Yy66YmE55S6MTQ2Mw!5e0!3m2!1sja!2sjp!4v1620000000000!5m2!1sja!2sjp" 
                width="100%" 
                height="100%" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy">
              </iframe>
            </div>
            <div class="map-info">
              <p><strong>柿本ホーム産業株式会社</strong></p>
              <p>〒225-0025 神奈川県横浜市青葉区鉄町1463</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <style>
      .contact {
        padding: var(--spacing-xl) 0;
        background-color: var(--color-bg-secondary);
      }

      .contact-layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
      }

      .contact-form-wrapper {
        background-color: var(--color-bg-white);
        padding: 3rem;
        border: 1px solid var(--color-border);
      }

      .contact-desc {
        margin-bottom: 3rem;
        color: var(--color-text-secondary);
        line-height: 1.8;
        text-align: center;
      }

      .contact-badge {
        background-color: var(--color-accent);
        color: white;
        text-align: center;
        display: inline-block;
        padding: 0.5rem 1.5rem;
        font-size: 0.9rem;
        font-weight: 500;
        margin-bottom: 1.5rem;
        width: 100%;
        letter-spacing: 0.1em;
      }

      .form-group {
        margin-bottom: 2rem;
      }

      .form-group label {
        display: block;
        margin-bottom: 0.5rem;
        font-size: 0.9rem;
        font-weight: 500;
        color: var(--color-text-primary);
      }

      .form-group input,
      .form-group textarea {
        width: 100%;
        padding: 1rem 0;
        background: transparent;
        border: none;
        border-bottom: 1px solid rgba(0,0,0,0.2);
        color: var(--color-text-primary);
        font-family: inherit;
        font-size: 1rem;
        transition: border-color 0.3s;
      }

      .form-group input:focus,
      .form-group textarea:focus {
        outline: none;
        border-bottom-color: var(--color-accent);
      }

      .submit-btn {
        background-color: var(--color-text-primary);
        color: #fff;
        border: none;
        padding: 1rem 3rem;
        font-family: var(--font-sans);
        font-weight: 500;
        letter-spacing: 0.1em;
        cursor: pointer;
        transition: background-color 0.3s;
        margin-top: 1rem;
        width: 100%;
      }

      .submit-btn:hover {
        background-color: var(--color-accent);
      }

      .map-container {
        width: 100%;
        height: 400px;
        background-color: #eee;
        margin-bottom: 1rem;
        border: 1px solid var(--color-border);
      }

      .map-info p {
        margin-bottom: 0.5rem;
        color: var(--color-text-primary);
      }

      @media (max-width: 900px) {
        .contact-layout {
          grid-template-columns: 1fr;
          gap: 3rem;
        }

        .contact-map-wrapper {
          order: 2;
        }
        
        .contact-form-wrapper {
          padding: 2rem;
        }
      }
    </style>
  `;
}
