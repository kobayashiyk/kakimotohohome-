export const Gallery = () => {
  return `
    <section id="gallery" class="section gallery">
      <div class="container">
        <h2 class="section-title fade-up">施工事例</h2>
        
        <div class="gallery-tabs fade-up delay-100">
          <button class="gallery-tab active" data-target="reform">建て替え・リフォーム</button>
          <button class="gallery-tab" data-target="steel">軽量鉄骨建築</button>
        </div>

        <div class="gallery-content fade-up delay-200">
          
          <!-- Reform Panel -->
          <div id="reform" class="gallery-panel active">
            <div class="gallery-scroll-container">
              <div class="gallery-track">
                <!-- Original Items -->
                <div class="gallery-item">
                  <div class="gallery-image">
                    <img src="/gallery-reform-living.jpg" alt="リビングリフォーム" loading="lazy" />
                    <div class="gallery-overlay">
                      <h4>リビング</h4>
                      <p>広々としたくつろぎの空間</p>
                    </div>
                  </div>
                </div>
                <div class="gallery-item">
                  <div class="gallery-image">
                    <img src="/gallery-reform-kitchen.jpg" alt="キッチンリフォーム" loading="lazy" />
                    <div class="gallery-overlay">
                      <h4>キッチン</h4>
                      <p>機能的で美しいシステムキッチン</p>
                    </div>
                  </div>
                </div>
                <div class="gallery-item">
                  <div class="gallery-image">
                    <img src="/gallery-reform-exterior.jpg" alt="外観・外構" loading="lazy" />
                    <div class="gallery-overlay">
                      <h4>外観・外構</h4>
                      <p>和モダンな佇まい</p>
                    </div>
                  </div>
                </div>
                <div class="gallery-item">
                  <div class="gallery-image">
                    <img src="/gallery-reform-bath.jpg" alt="バスルーム" loading="lazy" />
                    <div class="gallery-overlay">
                      <h4>バスルーム</h4>
                      <p>癒しのバスタイムを演出</p>
                    </div>
                  </div>
                </div>
                <!-- Duplicate Items for Loop -->
                <div class="gallery-item">
                  <div class="gallery-image">
                    <img src="/gallery-reform-living.jpg" alt="リビングリフォーム" loading="lazy" />
                    <div class="gallery-overlay">
                      <h4>リビング</h4>
                      <p>広々としたくつろぎの空間</p>
                    </div>
                  </div>
                </div>
                <div class="gallery-item">
                  <div class="gallery-image">
                    <img src="/gallery-reform-kitchen.jpg" alt="キッチンリフォーム" loading="lazy" />
                    <div class="gallery-overlay">
                      <h4>キッチン</h4>
                      <p>機能的で美しいシステムキッチン</p>
                    </div>
                  </div>
                </div>
                <div class="gallery-item">
                  <div class="gallery-image">
                    <img src="/gallery-reform-exterior.jpg" alt="外観・外構" loading="lazy" />
                    <div class="gallery-overlay">
                      <h4>外観・外構</h4>
                      <p>和モダンな佇まい</p>
                    </div>
                  </div>
                </div>
                <div class="gallery-item">
                  <div class="gallery-image">
                    <img src="/gallery-reform-bath.jpg" alt="バスルーム" loading="lazy" />
                    <div class="gallery-overlay">
                      <h4>バスルーム</h4>
                      <p>癒しのバスタイムを演出</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Steel Panel -->
          <div id="steel" class="gallery-panel">
            <div class="gallery-scroll-container">
              <div class="gallery-track">
                <!-- Original Items -->
                <div class="gallery-item">
                  <div class="gallery-image">
                    <img src="/gallery-steel-garage.jpg" alt="趣味のガレージ" loading="lazy" />
                    <div class="gallery-overlay">
                      <h4>趣味のガレージ</h4>
                      <p>愛車を眺める極上の空間</p>
                    </div>
                  </div>
                </div>
                <div class="gallery-item">
                  <div class="gallery-image">
                    <img src="/gallery-steel-warehouse.jpg" alt="法人倉庫" loading="lazy" />
                    <div class="gallery-overlay">
                      <h4>法人倉庫</h4>
                      <p>大空間を実現する鉄骨構造</p>
                    </div>
                  </div>
                </div>
                <div class="gallery-item">
                  <div class="gallery-image">
                    <img src="/gallery-steel-factory.jpg" alt="工場・作業場" loading="lazy" />
                    <div class="gallery-overlay">
                      <h4>工場・作業場</h4>
                      <p>機能性と清潔感を両立</p>
                    </div>
                  </div>
                </div>
                <div class="gallery-item">
                  <div class="gallery-image">
                    <img src="/gallery-steel-office.jpg" alt="事務所・店舗" loading="lazy" />
                    <div class="gallery-overlay">
                      <h4>事務所・店舗</h4>
                      <p>ビジネスの顔となるデザイン</p>
                    </div>
                  </div>
                </div>
                <!-- Duplicate Items for Loop -->
                <div class="gallery-item">
                  <div class="gallery-image">
                    <img src="/gallery-steel-garage.jpg" alt="趣味のガレージ" loading="lazy" />
                    <div class="gallery-overlay">
                      <h4>趣味のガレージ</h4>
                      <p>愛車を眺める極上の空間</p>
                    </div>
                  </div>
                </div>
                <div class="gallery-item">
                  <div class="gallery-image">
                    <img src="/gallery-steel-warehouse.jpg" alt="法人倉庫" loading="lazy" />
                    <div class="gallery-overlay">
                      <h4>法人倉庫</h4>
                      <p>大空間を実現する鉄骨構造</p>
                    </div>
                  </div>
                </div>
                <div class="gallery-item">
                  <div class="gallery-image">
                    <img src="/gallery-steel-factory.jpg" alt="工場・作業場" loading="lazy" />
                    <div class="gallery-overlay">
                      <h4>工場・作業場</h4>
                      <p>機能性と清潔感を両立</p>
                    </div>
                  </div>
                </div>
                <div class="gallery-item">
                  <div class="gallery-image">
                    <img src="/gallery-steel-office.jpg" alt="事務所・店舗" loading="lazy" />
                    <div class="gallery-overlay">
                      <h4>事務所・店舗</h4>
                      <p>ビジネスの顔となるデザイン</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    <style>
      .gallery {
        padding: var(--spacing-xl) 0;
        background-color: var(--color-bg-white);
        overflow: hidden; /* Prevent horizontal scrollbar on body */
      }

      .gallery-tabs {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-bottom: 3rem;
      }

      .gallery-tab {
        padding: 0.8rem 2.5rem;
        background: transparent;
        border: 1px solid var(--color-border);
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.3s ease;
        letter-spacing: 0.1em;
        color: var(--color-text-secondary);
      }

      .gallery-tab.active,
      .gallery-tab:hover {
        background-color: var(--color-text-primary);
        color: #fff;
        border-color: var(--color-text-primary);
      }

      .gallery-panel {
        display: none;
        animation: fadeIn 0.5s ease;
      }

      .gallery-panel.active {
        display: block;
      }

      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }

      /* Infinite Scroll Styles */
      .gallery-scroll-container {
        width: 100%;
        overflow: hidden;
      }

      .gallery-track {
        display: flex;
        width: max-content;
        animation: scroll-left 40s linear infinite;
      }

      .gallery-track:hover {
        animation-play-state: paused;
      }

      @keyframes scroll-left {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }

      .gallery-item {
        position: relative;
        overflow: hidden;
        cursor: pointer;
        height: 350px;
        width: 450px; /* Fixed width */
        margin-right: 2rem;
        flex-shrink: 0;
      }

      .gallery-image {
        width: 100%;
        height: 100%;
      }

      .gallery-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.6s ease;
      }

      .gallery-item:hover .gallery-image img {
        transform: scale(1.1);
      }

      .gallery-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.7) 50%, transparent);
        padding: 2rem 1.5rem;
        color: #ffffff;
        transform: translateY(100%);
        transition: transform 0.4s ease;
      }

      .gallery-item:hover .gallery-overlay {
        transform: translateY(0);
      }

      .gallery-overlay h4 {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
        font-weight: 600;
        letter-spacing: 0.05em;
        text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        color: #fff;
      }

      .gallery-overlay p {
        font-size: 0.9rem;
        opacity: 1;
        font-weight: 400;
        text-shadow: 0 1px 2px rgba(0,0,0,0.5);
        color: #fff;
      }

      @media (max-width: 768px) {
        .gallery-item {
          width: 300px;
          height: 250px;
          margin-right: 1rem;
        }
        
        .gallery-tab {
          padding: 0.6rem 1.5rem;
          font-size: 0.9rem;
        }
      }
    </style>
  `;
}
