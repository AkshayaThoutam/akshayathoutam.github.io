---
title: "Evaluating the role of pre-training dataset size and diversity on single-cell foundation model performance"
collection: publications
category: manuscripts
date: 2026-01-09
venue: "Nature Methods"
venue_short: "Nature Methods"
badge2: "Paper"
badge2_style: "outline"
authors: "Alan DenAdel, Madeline Hughes, Akshaya Thoutam, Anay Gupta, Andrew W. Navia, Nicolo Fusi, Srivatsan Raghavan, Peter S. Winter, Ava P. Amini, Lorin Crawford"
paperurl: "https://..."
paper_button_label: "Paper"
biorxiv: "https://www.nature.com/articles/s41592-026-03120-y"
abstract: "Short abstract text..."
selected: true
themes: [representations]
---

The success of transformer-based foundation models on natural language and images has motivated their use in single-cell biology. Single-cell foundation models have been trained on increasingly larger transcriptomic datasets, scaling from initial studies with 1 million cells to newer atlases with over 100 million cells. Here we investigate the role of pretraining dataset size and diversity on the performance of single-cell foundation models on both zero-shot and fine-tuned tasks. Using a large corpus of 22.2 million cells, we pretrain a total of 400 models, which we evaluate by conducting 6,400 experiments. Our results show that current methods tend to plateau in performance with pretraining datasets that are only a fraction of the size of current training corpora. Unlike large language models, single-cell foundation models show no clear data scaling laws, indicating that developers should focus on balancing model capacity, dataset size and computational resources rather than indiscriminately increasing all three.