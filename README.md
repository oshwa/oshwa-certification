# Open Source Hardware Association Certification

### Prerequisites
- [jekyll](https://jekyllrb.com/)

#### Development
- Add your development url and baseurl in `_config.yml`.
- Fetch and update bundled gems by running `bundle install`
- Fetch and update npm packages by running `npm install`
- Run the server with `bundle exec jekyll serve`. Your server will run at [http://localhost:4000/DEV-BASEURL/](http://localhost:4000/DEV-BASEURL/)
- You can also use gulp for live reloading via browsersync. `gulp` will run at [http://localhost:3000](http://localhost:3000). The gulp build task will use  the blank url and baseurl in `_config_dev.yml`.
