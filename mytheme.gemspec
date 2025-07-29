# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "mytheme"
  spec.version       = "1.0.0"
  spec.authors       = ["Your Name"]
  spec.email         = ["your-email@example.com"]

  spec.summary       = "一个现代化的 Jekyll 主题，支持 Markdown 和搜索功能"
  spec.homepage      = "https://github.com/username/mytheme"
  spec.license       = "MIT"

  spec.metadata["plugin_type"] = "theme"

  spec.files = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r!^(assets|_data|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i)
  end

  spec.required_ruby_version = ">= 2.7.0"

  spec.add_runtime_dependency "jekyll", "~> 4.3"
  spec.add_runtime_dependency "jekyll-paginate", "~> 1.1"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.17"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.8"
  spec.add_runtime_dependency "jekyll-sitemap", "~> 1.4"

  spec.add_development_dependency "bundler", "~> 2.0"
  spec.add_development_dependency "rake", "~> 13.0"
end
