export const Services = () => {
  return `
    <section id="services" class="section services">
      <div class="container">
        <h2 class="section-title">事業案内</h2>
        
        <div class="services-grid">
          
          <!-- Reform & Rebuilding -->
          <div class="service-card fade-up">
            <div class="service-image-wrapper">
              <img src="/service-reform.jpg" alt="建て替え・リフォーム" />
            </div>
            <div class="service-content">
              <h3 class="service-title">建て替え・リフォーム</h3>
              <ul class="service-items">
                <li>住宅建て替え</li>
                <li>フルリノベーション</li>
                <li>水回りリフォーム</li>
                <li>外装・外構リフォーム</li>
              </ul>
              <p class="service-desc">
                長年住み慣れた愛着のある住まいを、ライフスタイルの変化に合わせて快適な空間へ。<br>
                一級建築施工管理技士の確かな目利きと、熟練職人の技術で、新築同様の美しさと機能性を取り戻します。<br>
                部分的なリフォームから、骨組みだけを残して作り変える大規模なリノベーションまで、お客様のご要望に幅広くお応えします。
              </p>
            </div>
          </div>

          <!-- Light Gauge Steel -->
          <div class="service-card fade-up delay-200">
            <div class="service-image-wrapper">
              <img src="/service-steel.jpg" alt="軽量鉄骨建築" />
            </div>
            <div class="service-content">
              <h3 class="service-title">軽量鉄骨建築</h3>
              <ul class="service-items">
                <li>倉庫</li>
                <li>工場</li>
                <li>ガレージ</li>
                <li>事務所・店舗</li>
              </ul>
              <p class="service-desc">
                短工期・低コスト・高耐久を実現する軽量鉄骨建築は、ビジネスの拠点づくりや趣味の空間に最適です。<br>
                倉庫、工場、ガレージ、店舗併用住宅など、多種多様なニーズに対応。<br>
                自社一貫体制による柔軟な設計と施工管理で、土地の形状や用途に合わせた無駄のない最適なプランをご提案いたします。
              </p>
            </div>
          </div>

        </div>
        
        <div class="services-cta fade-in" style="text-align: center; margin-top: 5rem;">
          <a href="/#contact" class="btn-primary">無料相談を申し込む</a>
        </div>
      </div>
    </section>
    <style>
      .services {
        padding: var(--spacing-xl) 0;
        background-color: var(--color-bg-secondary);
      }

      .services-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 3rem;
      }

      .service-card {
        background-color: var(--color-bg-white);
        display: flex;
        flex-direction: column;
        height: 100%;
        border: 1px solid var(--color-border);
        transition: transform 0.4s ease;
      }

      .service-image-wrapper {
        width: 100%;
        height: 250px;
        overflow: hidden;
      }

      .service-image-wrapper img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.6s ease;
      }

      .service-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
      }

      .service-card:hover .service-image-wrapper img {
        transform: scale(1.05);
      }

      .service-content {
        padding: 2.5rem;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
      }

      .service-title {
        font-size: 1.4rem;
        margin-bottom: 1.5rem;
        font-weight: 500;
        letter-spacing: 0.1em;
        text-align: center;
        border-bottom: 1px solid var(--color-border);
        padding-bottom: 1rem;
      }

      .service-items {
        padding: 0;
        margin-bottom: 2rem;
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        justify-content: center;
      }

      .service-items li {
        font-size: 0.9rem;
        color: var(--color-text-secondary);
        background-color: var(--color-bg-secondary);
        padding: 0.2rem 0.8rem;
        border-radius: 2px;
      }

      .service-desc {
        font-size: 0.95rem;
        color: var(--color-text-secondary);
        line-height: 1.8;
        text-align: justify;
        margin-top: auto;
      }
      
      .btn-primary {
        display: inline-block;
        padding: 1rem 4rem;
        background-color: var(--color-text-primary);
        color: #fff;
        font-size: 1rem;
        letter-spacing: 0.1em;
        transition: all 0.3s ease;
      }
      
      .btn-primary:hover {
        background-color: var(--color-accent);
      }

      @media (max-width: 900px) {
        .services-grid {
          grid-template-columns: 1fr;
          gap: 4rem;
        }
      }
    </style>
  `;
}
