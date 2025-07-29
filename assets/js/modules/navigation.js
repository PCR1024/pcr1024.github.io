// 导航模块
export const Navigation = {
  init() {
    this.initMobileMenu();
    this.initSmoothScroll();
    this.initScrollEffects();
  },

  // 移动端导航菜单切换
  initMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // 汉堡菜单动画
        const hamburger = navToggle.querySelector('.hamburger');
        if (hamburger) {
          hamburger.style.transform = navMenu.classList.contains('active') 
            ? 'rotate(45deg)' 
            : 'rotate(0deg)';
        }
      });

      // 点击导航链接后关闭菜单
      navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('active');
          const hamburger = navToggle.querySelector('.hamburger');
          if (hamburger) {
            hamburger.style.transform = 'rotate(0deg)';
          }
        });
      });
    }
  },

  // 平滑滚动
  initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  },

  // 导航栏滚动效果
  initScrollEffects() {
    const siteNav = document.querySelector('.site-nav');
    if (!siteNav) return;

    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      const opacity = Math.min(currentScrollY / 100, 0.95);
      
      siteNav.style.background = `rgba(255, 255, 255, ${opacity})`;
      
      // 向下滚动时隐藏导航栏，向上滚动时显示
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        siteNav.style.transform = 'translateY(-100%)';
      } else {
        siteNav.style.transform = 'translateY(0)';
      }
      
      lastScrollY = currentScrollY;
    });
  }
};
