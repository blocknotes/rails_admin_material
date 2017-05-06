# RailsAdminMaterial theme [![Gem Version](https://badge.fury.io/rb/rails_admin_material.svg)](https://badge.fury.io/rb/rails_admin_material)

A Material Design theme for [rails_admin](https://github.com/sferik/rails_admin).

Features:

- nice user interface

- improve nested forms styles

- hide/show sidebar function

Demo: [heroku app](http://rails-admin-material.herokuapp.com/admin/)

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

- Sass errors? Try updating sass-rails (or sassc-rails): `bundle update sass-rails`

## Notes

- Based on [Material Design for Bootstrap](http://fezvrasta.github.io/bootstrap-material-design/)

## Contributors

- [Mattia Roccoberton](http://blocknot.es) - creator, maintainer

## ISC LICENSE

Copyright (c) 2017, Mattia Roccoberton <mat@blocknot.es>

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
