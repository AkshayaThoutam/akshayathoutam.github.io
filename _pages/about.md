---
permalink: /
title: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

Hello! I am Akshaya Thoutam, a computational associate II with the  
<strong>
  <a href="https://exvivo.broadinstitute.org/" target="_blank" class="teal-name">
    Project Ex Vivo
  </a>
</strong>
group at <strong><span class="teal-name">Microsoft Research</span></strong>
(co-advised by Lorin Crawford and Ava Amini) and the
<strong><span class="teal-name">Broad Institute</span></strong>
(advised by Peter Winter). My research focuses on developing and using machine learning methods to define and engineer transcriptomic cell states. I am also a Master’s student in the Clinical Research Program at <strong><a href="https://hms.harvard.edu/education-admissions/masters-degree-programs/master-science-clinical-research" target="_blank" class="teal-name">Harvard Medical School</a></strong>.



<p>
Previously, I graduated from the
<strong><span class="teal-name">Georgia Institute of Technology</span></strong>
as a College of Sciences Dean’s Scholar and Early Research Award recipient with a
B.S. in Neuroscience and a minor in Health and Medical Sciences.  
My advisors have included Greg Gibson (GT), Nasrin Hooshmand (GT),
Simon Knott (Cedars-Sinai), and Joshua Levin (Broad).
</p>

Selected Publications
======

{% assign selected_pubs = site.publications | where: "selected", true | sort: "date" | reverse %}

{% for pub in selected_pubs %}
  {% include publication-item.html p=pub %}
{% endfor %}

