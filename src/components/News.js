export const News = () => {
  return `
    <section id="news" class="section news">
      <div class="container">
        <h2 class="section-title fade-up">新着施工例</h2>
        
        <div class="news-container fade-up delay-100">
          <div class="news-list">
            
            <a href="/gallery.html" class="news-item">
              <div class="news-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div class="news-date">2025/--/--</div>
              <div class="news-title">新着施工事例のタイトルが入ります</div>
            </a>

            <a href="/gallery.html" class="news-item">
              <div class="news-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div class="news-date">2025/--/--</div>
              <div class="news-title">新着施工事例のタイトルが入ります</div>
            </a>

            <a href="/gallery.html" class="news-item">
              <div class="news-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div class="news-date">2025/--/--</div>
              <div class="news-title">新着施工事例のタイトルが入ります</div>
            </a>

            <a href="/gallery.html" class="news-item">
              <div class="news-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div class="news-date">2025/--/--</div>
              <div class="news-title">新着施工事例のタイトルが入ります</div>
            </a>

            <a href="/gallery.html" class="news-item">
              <div class="news-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div class="news-date">2025/--/--</div>
              <div class="news-title">新着施工事例のタイトルが入ります</div>
            </a>

          </div>
        </div>
      </div>
    </section>
    <style>
      .news {
        padding: var(--spacing-lg) 0;
        background-color: var(--color-bg-dark);
      }

      .news-container {
        max-width: 900px;
        margin: 0 auto;
        background: var(--color-bg-white);
        border: 1px solid var(--color-border);
        border-radius: 4px;
        padding: 2rem;
        box-shadow: 0 4px 20px rgba(0,0,0,0.03);
      }

      .news-item {
        display: flex;
        align-items: center;
        padding: 1.2rem 0;
        border-bottom: 1px dotted var(--color-border);
        transition: all 0.3s ease;
        text-decoration: none;
        color: var(--color-text-primary);
      }

      .news-item:last-child {
        border-bottom: none;
      }

      .news-item:hover {
        background-color: var(--color-bg-secondary);
        padding-left: 1rem;
        transform: translateX(5px);
      }

      .news-icon {
        color: #f5a623; /* Orange check color */
        margin-right: 1.5rem;
        display: flex;
        align-items: center;
      }

      .news-date {
        font-family: var(--font-sans);
        color: var(--color-text-primary);
        margin-right: 2rem;
        font-weight: 500;
        min-width: 100px;
      }

      .news-title {
        color: #4a90e2; /* Similar blue to reference */
        font-weight: 500;
        flex-grow: 1;
      }

      .news-item:hover .news-title {
        text-decoration: underline;
      }

      @media (max-width: 768px) {
        .news-item {
          flex-wrap: wrap;
        }
        
        .news-title {
          width: 100%;
          margin-top: 0.5rem;
          padding-left: 2rem; /* Indent to align with text */
        }
      }
    </style>
  `;
}
