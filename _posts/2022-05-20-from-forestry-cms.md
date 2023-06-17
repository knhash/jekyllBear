---
layout: post
title: From Forestry CMS
subtitle: A key word that I was missing all along
date: 2022-05-20 18:30:00 +0000
tags:
- general
- fiction

---
So turns out that there _is_ a way to write via the web!

All along I thought the _one pain point_ of having a `GitHub + Jekyll + GitHub Pages` blog was the creation of new content had to happen through a desktop, with access to terminal. We have to copy the frontmatter, write the post, and commit the post to git. Not _very_ painful, but a little inconvenient.

So much so that I went looking for other blog systems that had a webeditor in place. Better than not having any editor right? Ideally I would have a mobile app to do this (a man can wish).

The key word I was missing all along was CMS. Content Management System.

Because absolutely none of the places that teach you to set up a static website/blog hosted on GitHub and talk about the ongoing content generation effort! They seem to stop at the one time creation of blog for all they care. Or is it that the expectation of most of the target audience being developers blinds them to some of the papercuts of writing via a text editor (and formatting, and live previewing to see if it looks good.... are they paper cuts still?) because hey, you are already familiar with git, this works.

> [to be clear, you don't _need_ to do anything locally. \[...\]](https://news.ycombinator.com/item?id=23312339&p=2#23316450 "It's possible to use static blogs without touching your site")

Thanks to `masukomi` from Hacker News I am now made aware of [Forestry](https://forestry.io/ "It is a CMS"). It is called a CMS guys. And adding that keyword threw up a bunch of other options as well. But Forestry is a beauty, took me just minutes to setup it up. I am ignoring a couple hours spent debugging an issue with my Jekyll setup that prevented the Forestry systems from building my site for Auto Preview.

Actually better make note of that.

***

If your build (or instant preview server) is failing due to the folowing error:

    ERROR: YOUR SITE COULD NOT BE BUILT:
    ------------------------------------
    Invalid date '<%= Time.now.strftime('%Y-%m-%d %H:%M:%S %z') %>': Document 'vendor/bundle/ruby/2.7.0/gems/jekyll-3.9.2/lib/site_template/_posts/0000-00-00-welcome-to-jekyll.markdown.erb' does not have a valid date in the YAML front matter.

Then you probably have not excluded the vendor directory from building. Because it is recommended to have all your gem installs in your local directory (which I wasn't doing until Forestry) but [Jekyll is going to try, and fail, to run negative test cases](https://github.com/jekyll/jekyll/issues/2938#issuecomment-131456094) within itself.

So the solution is to [exclude the vendor directory in your config file](https://github.com/jekyll/jekyll/issues/2938#issuecomment-56237068).

***

Where were we?

Yes, I now have a pretty neat CMS that I can access via web to make blog posts. I used said CMS for writing this blog post and can confirm it is pretty neat.