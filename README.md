# ModernMD Jekyll 主题

一个现代化的 Jekyll 主题，专为中文博客设计，支持 Markdown 和搜索功能。

## ✨ 特性

- 🎨 现代简约的设计风格
- 🌓 自动跟随系统的暗色模式
- 🔍 实时文章搜索功能
- 📱 完全响应式设计
- 📖 自动生成文章目录
- 🏷️ 支持文章分类和标签
- 📊 文章归档时间线
- ⚡️ 代码高亮和一键复制
- 📐 支持 LaTeX 数学公式
- 🚀 GitHub Actions 自动部署

## 🚀 快速开始

### 基础安装

1. 添加这一行到你的 Jekyll 网站的 `Gemfile` 中：

```ruby
gem "modernmd-theme"
```

2. 在你的网站配置文件 `_config.yml` 中添加：

```yaml
theme: modernmd-theme
```

3. 安装依赖：

```bash
bundle install
```

### 使用主题仓库

1. Fork 这个仓库
2. 修改 `_config.yml` 中的配置
3. 在 `_posts` 目录下撰写文章

## 📝 创建文章

在 `_posts` 目录下创建新的 `.md` 文件，文件名格式为 `YYYY-MM-DD-title.md`。每篇文章需要包含以下前置信息：

```yaml
---
layout: post
title: 文章标题
date: YYYY-MM-DD HH:MM:SS +/-TTTT
category: 分类名称
tags: [标签1, 标签2]
---
```

## 🔧 配置

在 `_config.yml` 中可以配置以下选项：

```yaml
# 站点设置
title: 你的网站标题
description: 网站描述
baseurl: ""
url: "https://example.com"

# 主题设置
author: 你的名字
email: your-email@example.com

# 社交链接
github_username: username
twitter_username: username

# 构建设置
markdown: kramdown
permalink: /:year/:month/:day/:title/
paginate: 10
```

## 🎨 自定义主题

### 修改颜色

编辑 `_sass/_base.scss` 文件中的 CSS 变量来修改主题颜色：

```scss
:root {
  --color-primary: #2563eb;
  --color-primary-light: #60a5fa;
  --color-primary-dark: #1e40af;
  // ...
}
```

### 自定义样式

创建 `assets/css/custom.scss` 文件添加你的自定义样式：

```scss
---
---

@import "main";

// 你的自定义样式
```

## 📱 响应式设计

主题针对不同设备进行了优化：

- 桌面端（>1024px）：完整功能
- 平板端（768px-1024px）：适应布局
- 移动端（<768px）：简化导航，优化阅读

## 🔍 搜索功能

主题内置了文章搜索功能：

- 支持标题和内容搜索
- 实时搜索结果
- 快捷键支持（Ctrl/Cmd + K）

## 🤝 贡献

欢迎贡献代码和提出建议！请：

1. Fork 本仓库
2. 创建你的特性分支
3. 提交你的修改
4. 提交 Pull Request

## 📄 许可证

本项目基于 MIT 许可证开源 - 查看 [LICENSE](LICENSE) 了解详情
