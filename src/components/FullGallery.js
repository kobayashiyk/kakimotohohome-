export const FullGallery = () => {
  return `
    <section id="gallery" class="section gallery">
      <div class="container">
        <h2 class="section-title fade-up">施工事例一覧</h2>
        
        <div class="gallery-tabs fade-up delay-100">
          <button class="gallery-tab active" data-target="reform">建て替え・リフォーム</button>
          <button class="gallery-tab" data-target="steel">軽量鉄骨建築</button>
        </div>

        <div class="gallery-content fade-up delay-200">
          
          <!-- Reform Panel -->
          <div id="reform" class="gallery-panel active">
            <div class="gallery-grid">
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
                <!-- Duplicates 1 -->
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
                <!-- Duplicates 2 -->
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

          <!-- Steel Panel -->
          <div id="steel" class="gallery-panel">
            <div class="gallery-grid">
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
                <!-- Duplicates 1 -->
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
                 <!-- Duplicates 2 -->
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
    </section>

    <!-- Lightbox Modal -->
    <div id="lightbox" class="lightbox">
      <div class="lightbox-close">&times;</div>
      <div class="lightbox-content">
        <img id="lightbox-img" src="" alt="">
        <div class="lightbox-info">
          <h3 id="lightbox-title"></h3>
          <p id="lightbox-desc"></p>
        </div>
      </div>
    </div>
    
    <style>
      /* Lightbox Styles */
      .lightbox {
        position: fixed;
        z-index: 1000;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(30, 30, 35, 0.95); /* Deep charcoal instead of black */
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        visibility: hidden;
        opacity: 0;
        transition: opacity 0.4s ease, visibility 0.4s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        box-sizing: border-box;
      }

      .lightbox.active {
        visibility: visible;
        opacity: 1;
      }

      .lightbox-content {
        position: relative;
        max-width: 1000px;
        width: 100%;
        max-height: 90vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        transform: scale(0.95) translateY(10px);
        opacity: 0;
        transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.5s ease;
      }

      .lightbox.active .lightbox-content {
        transform: scale(1) translateY(0);
        opacity: 1;
      }

      .lightbox-content img {
        max-width: 100%;
        max-height: 70vh;
        object-fit: contain;
        border-radius: 2px;
        box-shadow: 0 20px 50px rgba(0,0,0,0.5);
      }

      .lightbox-info {
        margin-top: 2rem;
        text-align: center;
        color: #fff;
        max-width: 700px;
      }

      .lightbox-info h3 {
        font-family: var(--font-serif);
        font-size: 1.8rem;
        margin-bottom: 1rem;
        letter-spacing: 0.1em;
        font-weight: 500;
        color: #ffffff; /* Explicitly white */
        text-shadow: 0 2px 4px rgba(0,0,0,0.3);
      }

      .lightbox-info p {
        font-size: 1rem;
        color: #ffffff; /* Explicitly white as requested */
        line-height: 1.8;
        opacity: 0.9;
      }

      .lightbox-close {
        position: absolute;
        top: 30px;
        right: 40px;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        color: rgba(255,255,255,0.8);
        cursor: pointer;
        z-index: 1001;
        transition: all 0.3s ease;
        border: 1px solid rgba(255,255,255,0.2);
        border-radius: 50%;
        background-color: rgba(255,255,255,0.1);
      }

      .lightbox-close:hover {
        background-color: #fff;
        color: var(--color-text-primary);
        border-color: #fff;
        transform: rotate(90deg);
      }

      @media (max-width: 768px) {
        .lightbox-close {
          top: 20px;
          right: 20px;
          width: 40px;
          height: 40px;
          font-size: 1.5rem;
        }
        
        .lightbox-info h3 {
            font-size: 1.4rem;
        }

        .lightbox-info p {
            font-size: 0.9rem;
        }
      }

      .gallery {
        padding: var(--spacing-xl) 0;
        background-color: var(--color-bg-white);
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

      .gallery-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
      }

      .gallery-item {
        position: relative;
        overflow: hidden;
        cursor: pointer;
        height: 350px;
        width: 100%;
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

      @media (max-width: 1024px) {
        .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
        }
      }

      @media (max-width: 768px) {
        .gallery-grid {
            grid-template-columns: 1fr;
        }

        .gallery-item {
          height: 250px;
        }
        
        .gallery-tab {
          padding: 0.6rem 1.5rem;
          font-size: 0.9rem;
        }
      }
    </style>
  `;
}
