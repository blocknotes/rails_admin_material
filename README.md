# RailsAdminMaterial theme [![Gem Version](https://badge.fury.io/rb/rails_admin_material.svg)](https://badge.fury.io/rb/rails_admin_material)

A Material Design theme for [rails_admin](https://github.com/sferik/rails_admin).

Demo: [heroku app](http://rails-admin-material.herokuapp.com/admin/)

Features:

- better UI

- improved nested forms styles

- hide/show sidebar button

## Installation

- Add the gem to Gemfile (and execute *bundle*): `gem 'rails_admin_material'`

- Enable the theme in *config/application.rb* (just after *Bundler.require* line): `ENV['RAILS_ADMIN_THEME'] = 'material'`

- Edit or create *app/assets/javascripts/rails_admin/custom/ui.js* and add: `//= require rails_admin/themes/material/ui.js`

## Customization

To change theme colors add / edit *app/assets/stylesheets/rails_admin/custom/variables.scss*:

```sass
// orange theme sample
$brand-primary: #d51;
$brand-info: #ea2;
$link-color: #800;
$nav-pills-active-link-hover-bg: #d51;
$btn-primary-bg: #d51;
$btn-primary-border: #da0;
$btn-info-bg: #fa4;
$btn-info-border: #da0;
$fg-nav-tabs-active: #fb1;
```

## Preview

![preview](preview.jpg)

![preview2](preview2.jpg)

## Troubleshooting

- If the styles are not applied try to clean the Rails pipeline cache:

```sh
rake assets:clean
rake assets:precompile
```

## Notes

- Based on [Material Design for Bootstrap](http://fezvrasta.github.io/bootstrap-material-design/)

## Contributors

- [Mattia Roccoberton](http://blocknot.es) - creator, maintainer
