// 文章增强功能模块
export const PostEnhancements = {
  init() {
    this.initTableOfContents();
    this.initCodeBlocks();
  },

  // 自动生成目录
  initTableOfContents() {
    const article = document.querySelector('.post-content');
    const tocContainer = document.querySelector('.toc');
    
    if (article && tocContainer) {
      const headings = article.querySelectorAll('h2, h3, h4, h5, h6');
      if (headings.length > 0) {
        const toc = this.generateTableOfContents(headings);
        tocContainer.innerHTML = `
          <div class="toc-title">目录</div>
          ${toc}
        `;
        
        this.initTocInteractions(tocContainer);
        this.initTocScrollSpy(tocContainer, headings);
      }
    }
  },

  // 目录交互
  initTocInteractions(tocContainer) {
    tocContainer.querySelectorAll('a').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  },

  // 目录滚动监听
  initTocScrollSpy(tocContainer, headings) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const id = entry.target.getAttribute('id');
          const tocItem = tocContainer.querySelector(`a[href="#${id}"]`);
          if (tocItem) {
            if (entry.isIntersecting) {
              tocContainer.querySelectorAll('a').forEach(a => a.classList.remove('active'));
              tocItem.classList.add('active');
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    headings.forEach(heading => {
      if (heading.id) {
        observer.observe(heading);
      }
    });
  },

  // 代码块复制功能
  initCodeBlocks() {
    document.querySelectorAll('pre code').forEach(block => {
      const button = document.createElement('button');
      button.className = 'copy-button';
      button.textContent = '复制';
      
      const pre = block.parentNode;
      pre.style.position = 'relative';
      pre.appendChild(button);

      button.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(block.textContent);
          this.showCopyFeedback(button, '已复制', 'copied');
        } catch (err) {
          console.error('复制失败:', err);
          this.showCopyFeedback(button, '复制失败', 'error');
        }
      });
    });
  },

  // 显示复制反馈
  showCopyFeedback(button, text, className) {
    const originalText = button.textContent;
    button.textContent = text;
    button.classList.add(className);
    
    setTimeout(() => {
      button.textContent = originalText;
      button.classList.remove(className);
    }, 2000);
  },

  // 生成目录HTML
  generateTableOfContents(headings) {
    const toc = [];
    const stack = [{ level: 1, items: toc }];
    
    headings.forEach(heading => {
      const level = parseInt(heading.tagName.charAt(1));
      const title = heading.textContent;
      
      // 为标题添加ID（如果没有）
      if (!heading.id) {
        heading.id = title.toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^\w-]/g, '');
      }
      
      // 添加锚点链接
      if (!heading.querySelector('.header-anchor')) {
        const anchor = document.createElement('a');
        anchor.className = 'header-anchor';
        anchor.href = `#${heading.id}`;
        anchor.setAttribute('aria-label', '链接到此标题');
        heading.appendChild(anchor);
      }

      const item = {
        title,
        id: heading.id,
        items: []
      };

      while (level <= stack[stack.length - 1].level) {
        stack.pop();
      }

      stack[stack.length - 1].items.push(item);
      stack.push({ level, items: item.items });
    });

    return this.renderToc(toc);
  },

  // 渲染目录HTML
  renderToc(items) {
    if (items.length === 0) return '';
    
    return `
      <ul>
        ${items.map(item => `
          <li>
            <a href="#${item.id}">${item.title}</a>
            ${this.renderToc(item.items)}
          </li>
        `).join('')}
      </ul>
    `;
  }
};
