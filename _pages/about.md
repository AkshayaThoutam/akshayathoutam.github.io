---
permalink: /
title: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

Hello! I am Akshaya Thoutam, a computational associate II with the  
  <a href="https://exvivo.broadinstitute.org/" target="_blank" class="teal-name">
    Project Ex Vivo
  </a>
group at Microsoft Research (co-advised by <a href="https://www.lorincrawford.com/" target="_blank"> Lorin Crawford</a> and <a href="https://avaamini.com/" target="_blank">Ava Amini</a>) and the
Broad Institute (advised by <a href="https://scholar.google.com/citations?user=WmBw-kkAAAAJ&hl=en&oi=ao" target="_blank">Peter Winter</a>). My research focuses on developing and using machine learning methods to define and engineer transcriptomic cell states. I am also a Master’s student in the Clinical Research Program at <a href="https://hms.harvard.edu/education-admissions/masters-degree-programs/master-science-clinical-research" target="_blank" class="teal-name">Harvard Medical School</a>.



<p>
Previously, I graduated from the
<a href="https://www.gatech.edu/" target="_blank">Georgia Institute of Technology</a>
as a College of Sciences Dean’s Scholar and Early Research Award recipient with a
B.S. in Neuroscience and a minor in Health and Medical Sciences.  
My advisors have included <a href="https://ggibsongt.wixsite.com/gibsongatech/people" target="_blank">Greg Gibson</a>, <a href="https://hooshmandlab.dreamhosters.com/?page_id=507" target="_blank">Nasrin Hooshmand</a>,
<a href="https://www.cedars-sinai.edu/health-sciences-university/research/labs/knott.html
" target="_blank">Simon Knott</a>, and <a href="https://www.broadinstitute.org/bios/joshua-levin" target="_blank"> Joshua Levin</a>.
</p>

<h2 class="selected-publications-title">Selected Publications († = equal contribution)</h2>

{% assign selected_pubs = site.publications | where: "selected", true | sort: "date" | reverse %}

<div class="selected-publications">
  {% for pub in selected_pubs limit:10 %}
    {% include publication-item.html p=pub %}
  {% endfor %}
</div>



