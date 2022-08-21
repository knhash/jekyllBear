# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyllBear"
  spec.version       = "0.1.0"
  spec.authors       = [""]
  spec.email         = [""]

  spec.summary       = "A minimal, text focused blog theme inspired by Bear Blog"
  spec.homepage      = "https://knhash.in/jekyllBear"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.2"
  spec.add_runtime_dependency "webrick"
  spec.add_runtime_dependency "jekyll-redirect-from"
end
