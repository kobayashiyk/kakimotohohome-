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
                <input type="email" id="email" name="email" required placeholder="例：info@kakimotohome.com">
              </div>
              
              <div class="form-group">
                <label for="phone">電話番号</label>
                <input type="tel" id="phone" name="phone" placeholder="例：0120-654-711">
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
        position: relative;
        overflow: hidden;
      }

      /* Decorative background element */
      .contact::before {
        content: '';
        position: absolute;
        top: -10%;
        right: -5%;
        width: 600px;
        height: 600px;
        background: radial-gradient(circle, rgba(142, 53, 74, 0.03) 0%, transparent 70%);
        z-index: 0;
        pointer-events: none;
      }

      .contact-layout {
        display: flex;
        flex-direction: column;
        gap: 5rem;
      }

      .contact-form-wrapper {
        background-color: var(--color-bg-white);
        padding: 4rem;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        border: none;
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        max-width: 800px;
        width: 100%;
        margin: 0 auto;
      }

      .contact-desc {
        margin-bottom: 2.5rem;
        color: var(--color-text-secondary);
        line-height: 2;
        text-align: center;
        font-size: 0.95rem;
      }

      .contact-badge {
        background-color: transparent;
        color: var(--color-accent);
        text-align: center;
        display: inline-block;
        padding: 0.5rem 0;
        font-size: 1rem;
        font-weight: 500;
        margin-bottom: 1rem;
        width: 100%;
        letter-spacing: 0.15em;
        border-bottom: 1px solid var(--color-accent);
        width: fit-content;
        margin-left: auto;
        margin-right: auto;
      }

      .form-group {
        margin-bottom: 2.5rem;
      }

      .form-group label {
        display: block;
        margin-bottom: 0.8rem;
        font-size: 0.9rem;
        font-weight: 500;
        color: var(--color-text-primary);
        letter-spacing: 0.05em;
      }

      .form-group input,
      .form-group textarea {
        width: 100%;
        padding: 0.8rem 0;
        background: transparent;
        border: none;
        border-bottom: 1px solid rgba(0,0,0,0.1);
        color: var(--color-text-primary);
        font-family: inherit;
        font-size: 1rem;
        transition: all 0.3s ease;
        border-radius: 0;
      }

      .form-group input:focus,
      .form-group textarea:focus {
        outline: none;
        border-bottom-color: var(--color-accent);
        background-color: rgba(142, 53, 74, 0.01);
      }

      .form-group input::placeholder,
      .form-group textarea::placeholder {
        color: rgba(0,0,0,0.3);
      }

      .submit-btn {
        background-color: var(--color-text-primary);
        color: #fff;
        border: none;
        padding: 1.2rem 3rem;
        font-family: var(--font-sans);
        font-weight: 500;
        letter-spacing: 0.2em;
        cursor: pointer;
        transition: all 0.4s ease;
        margin-top: 2rem;
        width: 100%;
        position: relative;
        overflow: hidden;
      }

      .submit-btn:hover {
        background-color: var(--color-accent);
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(142, 53, 74, 0.2);
      }

      .contact-map-wrapper {
         display: flex;
         flex-direction: column;
         width: 100%;
         max-width: 1000px;
         margin: 0 auto;
      }

      .map-container {
        width: 100%;
        height: 450px; /* Fixed height for landscape map */
        background-color: #eee;
        margin-bottom: 0;
        border: none;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
      }
      
      .map-container iframe {
         filter: grayscale(1);
         transition: filter 0.5s ease;
      }
      
      .map-container iframe:hover {
          filter: grayscale(0);
      }

      .map-info {
        background-color: var(--color-bg-white);
        padding: 2rem;
        margin-top: -3rem; /* Overlap upwards */
        margin-left: auto;
        margin-right: 2rem; /* Align right side */
        width: fit-content;
        min-width: 300px;
        position: relative;
        z-index: 2;
        box-shadow: 0 5px 20px rgba(0,0,0,0.05);
      }

      .map-info p {
        margin-bottom: 0.5rem;
        color: var(--color-text-secondary);
        font-size: 0.95rem;
        line-height: 1.8;
      }
      
      .map-info strong {
          color: var(--color-text-primary);
          font-weight: 500;
          font-size: 1.1rem;
          display: block;
          margin-bottom: 0.5rem;
      }

      @media (max-width: 900px) {
        .contact-form-wrapper {
          padding: 2rem;
        }
        
        .map-info {
            margin: 1rem 0 0 0;
            width: 100%;
            margin-right: 0;
        }
      }
    </style>
  `;
}
