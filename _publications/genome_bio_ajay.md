---
title: "Consequences of training data composition for deep learning models in single cell biology"
collection: publications
category: manuscripts
date: 2025-02-24
venue: "Under peer review"
venue_short: "bioRxiv"
badge2: "Paper"
badge2_style: "outline"
authors: "Ajay Nadig†, Akshaya Thoutam†, Madeline Hughes, Anay Gupta, Andrew W. Navia, Nicolo Fusi, Srivatsan Raghavan, Peter S. Winter, Ava P. Amini, Lorin Crawford"
paperurl: "https://..."
paper_button_label: "bioRxiv"
biorxiv: "https://www.biorxiv.org/content/10.1101/2025.02.19.639127v1"
abstract: "Short abstract text..."
selected: true
themes: [representations]
---

Foundation models for single-cell transcriptomics have the potential to augment (or replace) purpose-built tools for a variety of common analyses, especially when data are sparse. Recent work with large language models has shown that training data composition greatly shapes performance; however, to date, single-cell foundation models have ignored this aspect, opting instead to train on the largest possible corpus. We systematically investigate the consequences of training dataset composition on the behavior of deep learning models of single-cell transcriptomics, focusing on human hematopoiesis as a tractable model system and including cells from adult and developing tissues, disease states, and perturbation atlases. We find that (1) these models generalize poorly to unseen cell types, (2) adding malignant cells to a healthy cell training corpus does not necessarily improve modeling of unseen malignant cells, and (3) including an embryonic stem cell differentiation atlas during training improves performance on out-of-distribution tasks. Our results emphasize the importance of diverse training data and suggest strategies to optimize future single-cell foundation models.