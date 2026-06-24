---
layout: page
title: Explainable AI for Remote Sensing
description: Quantitative evaluation of attribution methods on multispectral and SAR imagery (IGARSS 2023)
img: assets/img/xai.png
importance: 3
category: research
related_publications: true
---

I built a PyTorch + Captum evaluation framework to compare five primary-attribution XAI methods
(LIME, HiResCAM, GradSHAP, Saliency, Occlusion) across six metric categories including faithfulness,
robustness, and localization. State-of-the-art backbones (ConvNeXt, Vision Transformers, Focal
Networks) were fine-tuned for remote sensing, reaching **82%** accuracy on SAR and **97%** on RGB.
A pipeline combining Otsu thresholding and superpixel segmentation enabled automated region-of-interest
detection for systematic comparison of explainability across imaging modalities.
