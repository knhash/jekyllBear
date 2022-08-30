# jekyllBear

## An easy to use, minimal, text focused Jekyll theme

[Bear Blog](https://bearblog.dev/) is *"a blogging platform where words matter most"*. 

This is a port of it's theme to Jekyll, with some tweaks. So you can use GitHub Pages to host your blog while getting the same awesome Bear Blog feels.

**Stop worrying about the style, focus on your writing.**

- Looks great on *any* device
- Tiny, optimized, and awesome pages, with [a 100 on PageSpeed Insights](https://pagespeed.web.dev/report?url=https%3A%2F%2Fknhash.in%2FjekyllBear%2F)
- No trackers, ads, or scripts, *did I mention minimal already?*
- Auto light and dark themes
- Tag support, to filter blog pages
- Quick, *15 minute* setup
- Gallery view for your images
- Code highlighting

## Screenshots

![Home](https://raw.githubusercontent.com/Knhash/jekyllBear/master/assets/images/JBHome.png?raw=true "Home") 
![Blog](https://raw.githubusercontent.com/Knhash/jekyllBear/master/assets/images/JBBlog.png?raw=true "Blog") 
![LongForm](https://raw.githubusercontent.com/Knhash/jekyllBear/master/assets/images/JBLongForm.png?raw=true "LongForm") 
![Poetry](https://raw.githubusercontent.com/Knhash/jekyllBear/master/assets/images/JBPoetry.png?raw=true "Poetry") 


## Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "jekyll-bear-theme"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: jekyll-bear-theme
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install jekyll-bear-theme

## Usage

Create a new repository for your website (if necessary)
```jekyll
jekyll new my_website
```

Copy over the following content from this repository, to serve as a base setup

```
/posts      -> Where you will write your posts
/_my_tags   -> Where you will define your tags, if you need to add anything new
blog.md     -> Homepage for your blog
index.md    -> Website homepage
404.html    -> When a page is not available
```

You will need to update `_config.yml`. Copy over the lines after

```
#########################
# more settings
```
in the `_config.yml` present in this repository to your website repository `_config.yml`.

Any new links you want to add to the navbar goes here, towards the end.
This also defines the bits about tags and filtering.

There should be 3 kinds of blog posts in the posts folder, an example of each type you can use:

- long-form reading
- poetry
- gallery view

Use them as templates for your front matter.

>To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`.


## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/knhash/jekyllBear. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.
To add a custom directory to your theme-gem, please edit the regexp in `jekyllBear.gemspec` accordingly.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

