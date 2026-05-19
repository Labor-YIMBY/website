---
title: Articles
layout: page
permalink: /articles/
---

<ul class="post-list">
  {% for post in site.posts %}
    <li class="post-list-item">
      <a href="{{ post.url | relative_url }}">
        <h2 class="post-list-title">{{ post.title }}</h2>
        <p class="post-list-date">{{ post.date | date: "%d %B %Y" }}</p>
        {% if post.excerpt %}
          <p class="post-list-excerpt">{{ post.excerpt | strip_html | truncatewords: 40 }}</p>
        {% endif %}
      </a>
    </li>
  {% endfor %}
</ul>
