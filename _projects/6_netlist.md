---
layout: page
title: Netlist from Hand-Drawn Circuits
description: Converting hand-drawn circuits to LTSpice netlists via image processing and ML (AISP 2022)
img: assets/img/netlist.png
importance: 6
category: research
related_publications: true
---

My undergraduate research converted hand-drawn circuit diagrams into simulation-ready netlists. I
built an ML pipeline combining Histogram of Gradients features with an SVM classifier, plus adaptive
binarization and skeletonization for component detection — reaching up to **95%** accuracy across five
component types. An end-point analysis algorithm with OpenCV-based OCR converted 100+ hand-drawn
circuits directly into LTSpice-compatible format.
