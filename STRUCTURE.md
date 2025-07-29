# MyTheme 项目结构说明

## 文件结构概览

```
mytheme/
├── _config.yml              # Jekyll 配置文件
├── _data/                   # 数据文件目录
├── _includes/               # 可重用的模板片段
│   ├── head.html
│   ├── header.html
│   ├── footer.html
│   └── search-widget.html
├── _layouts/                # 页面布局模板
│   ├── default.html
│   ├── page.html
│   └── post.html
├── _posts/                  # 博客文章
├── _sass/                   # SCSS 样式文件
│   ├── _variables.scss      # 设计系统变量
│   ├── _base.scss          # 基础样式
│   ├── _layout.scss        # 布局样式
│   ├── _components.scss    # 组件样式
│   └── _animations.scss    # 动画样式
├── assets/                  # 静态资源
│   ├── css/
│   │   └── main.scss       # 主样式文件
│   └── js/                 # JavaScript 文件
│       ├── main.js         # 主入口文件
│       └── modules/        # 模块化JS
│           ├── navigation.js
│           ├── animations.js
│           └── post-enhancements.js
├── pages/                  # 静态页面
└── search.json            # 搜索数据 (动态生成)
```

## 主要优化内容

### 1. JavaScript 模块化
- **原始状态**: 所有功能都在一个 `main.js` 文件中 (200+ 行)
- **优化后**: 分离为多个功能模块
  - `navigation.js`: 导航相关功能
  - `animations.js`: 动画效果
  - `post-enhancements.js`: 文章增强功能
  - `main.js`: 主入口和模块协调

### 2. CSS 设计系统
- **新增 `_variables.scss`**: 统一的设计系统变量
  - 颜色变量 (支持暗色主题)
  - 字体变量
  - 间距变量
  - 阴影变量
  - 断点定义
  - 实用混合器

### 3. 搜索功能优化
- **移除冗余**: 删除静态 `search-data.js` 文件
- **统一数据源**: 使用 Jekyll 动态生成的 `search.json`

### 4. 配置文件统一
- **修复不一致**: 统一 gemspec 和配置文件中的主题名称

## 设计系统变量

### 颜色系统
```scss
// 主色调
--color-primary: #667eea;
--color-primary-light: #764ba2;
--color-primary-dark: #5a67d8;

// 文字颜色
--color-text: #2d3748;
--color-text-light: #718096;
--color-text-muted: #a0aec0;
```

### 字体系统
```scss
--font-family-base: 'Noto Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
--font-family-mono: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace;
```

### 间距和尺寸
```scss
--spacing-xs: 0.25rem;   // 4px
--spacing-sm: 0.5rem;    // 8px
--spacing-md: 1rem;      // 16px
--spacing-lg: 1.5rem;    // 24px
```

## 模块化 JavaScript

### 导航模块 (Navigation)
- 移动端菜单切换
- 平滑滚动
- 导航栏滚动效果

### 动画模块 (Animations)
- 滚动显示动画
- 元素出现效果

### 文章增强模块 (PostEnhancements)
- 自动生成目录
- 代码块复制功能
- 锚点链接生成

## 响应式设计

使用标准化的断点系统:
```scss
$breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
);
```

## 主题切换支持

自动检测系统主题偏好:
```scss
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: #0f172a;
    --color-text: #e2e8f0;
    // ... 其他暗色主题变量
  }
}
```

## 开发和维护建议

1. **新增组件**: 在 `_sass/_components.scss` 中添加样式
2. **新增功能**: 在 `assets/js/modules/` 中创建新模块
3. **修改变量**: 在 `_sass/_variables.scss` 中统一管理
4. **测试**: 确保在不同屏幕尺寸和主题下正常工作

## 性能优化

1. **模块化加载**: JavaScript 按需加载
2. **CSS 优化**: 使用变量减少重复代码
3. **图片优化**: 响应式图片处理
4. **缓存友好**: 合理的文件组织结构
