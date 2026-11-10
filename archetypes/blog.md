---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"   # short title, shown on the news cards
date: "{{ now.Format "2006-01-02" }}"
kicker: "MAPME Update"          # small label above the headline
headline: ""                    # full headline on the article page (optional, defaults to title)
image: "/images/your-image.jpg" # put the file in static/images/
categories: ["News"]            # "News" or "Case Study"
tags: []
---

{{</* section */>}}

Write the article here in plain Markdown.

{{</* figure src="/images/your-image.jpg" caption="Figure 1: …" */>}}

{{</* /section */>}}
