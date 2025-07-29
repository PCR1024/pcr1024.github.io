// 主应用入口文件
import { Navigation } from './modules/navigation.js';
import { Animations } from './modules/animations.js';
import { PostEnhancements } from './modules/post-enhancements.js';

// 应用主类
class App {
  constructor() {
    this.modules = {
      navigation: Navigation,
      animations: Animations,
      postEnhancements: PostEnhancements
    };
  }

  // 初始化应用
  init() {
    // 等待DOM加载完成
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.initModules());
    } else {
      this.initModules();
    }
  }

  // 初始化所有模块
  initModules() {
    try {
      Object.values(this.modules).forEach(module => {
        if (module && typeof module.init === 'function') {
          module.init();
        }
      });
      
      console.log('🎉 主题初始化完成');
    } catch (error) {
      console.error('❌ 主题初始化失败:', error);
    }
  }
}

// 创建并启动应用
const app = new App();
app.init();

// 导出供全局使用
window.MyTheme = app;
