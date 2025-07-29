// 动画模块
export const Animations = {
  init() {
    this.initScrollAnimations();
  },

  // 滚动显示动画
  initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // 观察文章卡片
    document.querySelectorAll('.post-item').forEach(card => {
      this.prepareElementForAnimation(card);
      observer.observe(card);
    });

    // 观察分类卡片
    document.querySelectorAll('.category-section').forEach(card => {
      this.prepareElementForAnimation(card);
      observer.observe(card);
    });
  },

  // 为元素准备动画状态
  prepareElementForAnimation(element) {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  }
};
