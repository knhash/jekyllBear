# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-bear-theme"
  spec.version       = "0.3.1"
  spec.authors       = ["knhash"]
  spec.email         = ["mail@knhash.in"]

  spec.summary       = "A minimal, text focused blog theme with Pine Forest aesthetics"
  spec.description   = "jekyllBear is a clean, minimal Jekyll theme focused on readability and simplicity. Features a Pine Forest color palette with cool, nature-inspired greens, IBM Plex Mono typography, responsive design, tag system, life tracking visualization, and a distraction-free reading experience inspired by Bear Blog."
  spec.homepage      = "https://knhash.in/jekyllBear"
  spec.license       = "MIT"

  spec.metadata["homepage_uri"] = spec.homepage
  spec.metadata["source_code_uri"] = "https://github.com/knhash/jekyllBear"
  spec.metadata["changelog_uri"] = "https://github.com/knhash/jekyllBear/blob/master/README.md"
  spec.metadata["bug_tracker_uri"] = "https://github.com/knhash/jekyllBear/issues"

  spec.required_ruby_version = ">= 2.7.0"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|_data|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.4"
  spec.add_runtime_dependency "webrick", "~> 1.9"
  spec.add_runtime_dependency "jekyll-redirect-from", "~> 0.16"
  spec.add_runtime_dependency "logger", "~> 1.7"
end
