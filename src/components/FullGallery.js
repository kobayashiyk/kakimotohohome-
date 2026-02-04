export const FullGallery = () => {
  return `
    <section id="gallery" class="section gallery">
      <div class="container">
        
        <div class="gallery-header fade-up">
          <div class="gallery-title-wrapper">
             <h2 class="section-title">施工事例一覧</h2>
             <p class="gallery-intro">
               お客様の数だけある、理想の住まいのカタチ。<br>
               これまでの実績の一部をご紹介します。
             </p>
          </div>
          
          <div class="gallery-tabs fade-up delay-100">
            <button class="gallery-tab active" data-target="reform">建て替え・リフォーム</button>
            <button class="gallery-tab" data-target="steel">軽量鉄骨建築</button>
          </div>
        </div>

        <div class="gallery-content fade-up delay-200">
          
          <!-- Reform Panel -->
          <div id="reform" class="gallery-panel active">
            <div class="gallery-grid">
                <div class="gallery-item card-style">
                  <div class="gallery-image">
                    <img src="/gallery_new/kitchen-01.jpg" alt="キッチンリフォーム" loading="lazy" />
                    <div class="category-badge">キッチン</div>
                  </div>
                  <div class="gallery-card-content">
                    <h4>システムキッチン</h4>
                    <p>使い勝手と美しさを両立した最新システムキッチンへの入れ替え工事。</p>
                    <div class="gallery-tags">
                        <span>#キッチン</span>
                        <span>#リノベ</span>
                    </div>
                  </div>
                </div>
                <div class="gallery-item card-style">
                  <div class="gallery-image">
                    <img src="/gallery_new/bath-01.jpg" alt="バスルーム" loading="lazy" />
                    <div class="category-badge">バスルーム</div>
                  </div>
                  <div class="gallery-card-content">
                    <h4>癒しのバスルーム</h4>
                    <p>一日の疲れを癒やす、ゆったりとしたくつろぎの空間へ。</p>
                    <div class="gallery-tags">
                        <span>#浴室</span>
                        <span>#バリアフリー</span>
                    </div>
                  </div>
                </div>
                <div class="gallery-item card-style">
                  <div class="gallery-image">
                    <img src="/gallery_new/exterior-01.jpg" alt="外構工事" loading="lazy" />
                    <div class="category-badge">外構</div>
                  </div>
                  <div class="gallery-card-content">
                    <h4>外構エクステリア</h4>
                    <p>家の顔となるアプローチをモダンで温かみのあるデザインに。</p>
                    <div class="gallery-tags">
                        <span>#外構</span>
                        <span>#エクステリア</span>
                    </div>
                  </div>
                </div>
                <div class="gallery-item card-style">
                  <div class="gallery-image">
                    <img src="/gallery_new/deck-01.jpg" alt="ウッドデッキ" loading="lazy" />
                    <div class="category-badge">エクステリア</div>
                  </div>
                  <div class="gallery-card-content">
                    <h4>ウッドデッキ</h4>
                    <p>リビングと庭をつなぐ、開放的なアウトドアリビング。</p>
                    <div class="gallery-tags">
                        <span>#ウッドデッキ</span>
                        <span>#庭</span>
                    </div>
                  </div>
                </div>
                <div class="gallery-item card-style">
                  <div class="gallery-image">
                    <img src="/gallery_new/reform-living-01.jpg" alt="リビングダイニング" loading="lazy" />
                    <div class="category-badge">リビング</div>
                  </div>
                  <div class="gallery-card-content">
                    <h4>リビングダイニング</h4>
                    <p>家族が自然と集まる、明るく広々としたLDK空間。</p>
                    <div class="gallery-tags">
                        <span>#LDK</span>
                        <span>#内装</span>
                    </div>
                  </div>
                </div>
                <div class="gallery-item card-style">
                  <div class="gallery-image">
                    <img src="/gallery_new/reform-living-02.jpg" alt="リビング・内装" loading="lazy" />
                    <div class="category-badge">内装</div>
                  </div>
                  <div class="gallery-card-content">
                    <h4>内装リフォーム</h4>
                    <p>素材や色使いにこだわった、特別なインテリア空間。</p>
                    <div class="gallery-tags">
                        <span>#クロス張り替え</span>
                        <span>#フローリング</span>
                    </div>
                  </div>
                </div>
            </div>
          </div>

          <!-- Steel Panel -->
          <div id="steel" class="gallery-panel">
            <div class="gallery-grid">
                <div class="gallery-item card-style">
                  <div class="gallery-image">
                    <img src="/gallery_new/steel-01.jpg" alt="軽量鉄骨建築" loading="lazy" />
                    <div class="category-badge">鉄骨建築</div>
                  </div>
                  <div class="gallery-card-content">
                    <h4>軽量鉄骨建築</h4>
                    <p>耐久性と自由度を兼ね備えた、安心の鉄骨構造建築。</p>
                    <div class="gallery-tags">
                        <span>#鉄骨</span>
                        <span>#新築</span>
                    </div>
                  </div>
                </div>
                <!-- More items can be added similarly with card-style -->
                <div class="gallery-item card-style">
                  <div class="gallery-image">
                    <img src="/gallery_new/steel-02.jpg" alt="事務所倉庫" loading="lazy" />
                    <div class="category-badge">事業用</div>
                  </div>
                  <div class="gallery-card-content">
                    <h4>事務所倉庫</h4>
                    <p>業務効率を高める、機能的で広々としたビジネス空間。</p>
                    <div class="gallery-tags">
                        <span>#倉庫</span>
                        <span>#事務所</span>
                    </div>
                  </div>
                </div>
                <div class="gallery-item card-style">
                  <div class="gallery-image">
                    <img src="/gallery_new/steel-03.jpg" alt="ガレージ" loading="lazy" />
                    <div class="category-badge">ガレージ</div>
                  </div>
                  <div class="gallery-card-content">
                    <h4>ガレージ</h4>
                    <p>愛車を大切に保管する、堅牢でスタイリッシュなガレージ。</p>
                    <div class="gallery-tags">
                        <span>#ガレージ</span>
                        <span>#車庫</span>
                    </div>
                  </div>
                </div>
                <div class="gallery-item card-style">
                  <div class="gallery-image">
                    <img src="/gallery_new/steel-04.jpg" alt="工場" loading="lazy" />
                    <div class="category-badge">工場</div>
                  </div>
                  <div class="gallery-card-content">
                    <h4>工場・作業場</h4>
                    <p>大型機械も設置可能な、ゆとりのある大空間設計。</p>
                    <div class="gallery-tags">
                        <span>#工場</span>
                        <span>#作業場</span>
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
        color: #ffffff;
        text-shadow: 0 2px 4px rgba(0,0,0,0.3);
      }

      .lightbox-info p {
        font-size: 1rem;
        color: #ffffff;
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
        background-color: var(--color-bg-secondary);
      }

      .gallery-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: 4rem;
        padding-bottom: 2rem;
        border-bottom: 1px solid rgba(0,0,0,0.05);
      }

      .gallery-title-wrapper {
        flex: 1;
      }

      .gallery-title-wrapper .section-title {
        margin-bottom: 1.5rem;
        text-align: left; /* Ensure left align */
      }
      
      .gallery-intro {
        font-size: 1rem;
        color: var(--color-text-secondary);
        line-height: 1.8;
      }

      .gallery-tabs {
        display: flex;
        gap: 1rem;
        margin-bottom: 0; /* Reset margin as it is handled by header */
        flex-shrink: 0; /* Prevent shrinking */
      }

      .gallery-tab {
        padding: 0.8rem 2rem;
        background: transparent;
        border: 1px solid var(--color-border);
        font-size: 0.95rem;
        cursor: pointer;
        transition: all 0.3s ease;
        letter-spacing: 0.05em;
        color: var(--color-text-secondary);
        background-color: white;
        border-radius: 2px;
      }

      .gallery-tab.active,
      .gallery-tab:hover {
        background-color: var(--color-text-primary);
        color: #fff;
        border-color: var(--color-text-primary);
      }
      
      /* Responsive adjustments for header */
      @media (max-width: 900px) {
        .gallery-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 2rem;
        }
        
        .gallery-tabs {
            width: 100%;
            overflow-x: auto;
            padding-bottom: 0.5rem; /* For scrollbar if needed */
            justify-content: flex-start;
        }
        
        .gallery-tab {
            white-space: nowrap;
            flex: 1;
            text-align: center;
        }
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
        gap: 2.5rem; /* Increased gap */
      }

      /* Card Style Implementation */
      .gallery-item {
        background-color: #fff;
        border-radius: 4px; /* Slightly rounded */
        overflow: hidden;
        cursor: pointer;
        box-shadow: 0 4px 20px rgba(0,0,0,0.03); /* Soft shadow */
        transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      .gallery-item:hover {
        transform: translateY(-8px); /* Lift effect */
        box-shadow: 0 20px 40px rgba(0,0,0,0.08);
      }

      .gallery-image {
        position: relative;
        width: 100%;
        height: 240px; /* Fixed height for consistency */
        overflow: hidden;
      }

      .gallery-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.6s ease;
      }

      .gallery-item:hover .gallery-image img {
        transform: scale(1.05); /* Subtle zoom */
      }

      /* Category Badge on Image */
      .category-badge {
        position: absolute;
        top: 1rem;
        left: 1rem;
        background-color: rgba(255, 255, 255, 0.9);
        color: var(--color-text-primary);
        padding: 0.4rem 1rem;
        font-size: 0.75rem;
        font-weight: 500;
        letter-spacing: 0.05em;
        z-index: 2;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }

      /* Card Content */
      .gallery-card-content {
        padding: 1.8rem;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
      }

      .gallery-card-content h4 {
        font-size: 1.2rem;
        margin-bottom: 0.8rem;
        font-weight: 600;
        color: var(--color-text-primary);
        letter-spacing: 0.05em;
        line-height: 1.4;
      }

      .gallery-card-content p {
        font-size: 0.9rem;
        color: var(--color-text-secondary);
        line-height: 1.7;
        margin-bottom: 1.5rem;
        flex-grow: 1; /* Pushes tags to bottom */
      }

      .gallery-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: auto;
      }

      .gallery-tags span {
        font-size: 0.8rem;
        color: var(--color-accent);
        background-color: var(--color-bg-secondary);
        padding: 0.3rem 0.8rem;
        border-radius: 50px; /* Pill shape */
        transition: all 0.2s ease;
      }
      
      .gallery-item:hover .gallery-tags span {
        background-color: var(--color-accent);
        color: white;
      }

      /* Responsive */
      @media (max-width: 1024px) {
        .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
        }
      }

      @media (max-width: 768px) {
        .gallery-grid {
            grid-template-columns: 1fr;
        }

        .gallery-image {
          height: 220px;
        }
        
        .gallery-tab {
          padding: 0.6rem 1.5rem;
          font-size: 0.9rem;
        }
      }
    </style>
  `;
}
