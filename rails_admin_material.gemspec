$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "rails_admin_material/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "rails_admin_material"
  s.version     = RailsAdminMaterial::VERSION
  s.authors     = ["Mattia Roccoberton"]
  s.email       = ["mat@blocknot.es"]
  s.homepage    = "https://github.com/blocknotes/rails_admin_material"
  s.summary     = "RailsAdminMaterial theme"
  s.description = "A Material Design theme for rails_admin"
  s.files = Dir["{lib,vendor}/**/*"] + ["LICENSE", "Rakefile", "README.md"]
  s.license     = 'ISC'
  s.add_dependency "rails_admin", ">= 0.8.1"
end
