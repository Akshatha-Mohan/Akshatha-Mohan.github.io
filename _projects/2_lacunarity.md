---
layout: page
title: Lacunarity Pooling Layers
description: Texture-aware pooling for image classification (CVPRW 2024 · M.S. thesis)
img: assets/img/lacunarity.png
importance: 2
category: research
related_publications: true
---

My M.S. thesis introduced **lacunarity pooling**, a pooling technique that leverages texture
information to improve image classification. I implemented three approaches to lacunarity
computation (base, differential box counting, and multi-scale), each integrable with CNN backbones
such as ConvNeXt, ResNet18, and DenseNet161. The method reached up to **98.07%** accuracy on
PlantVillage and **95.00%** on LeavesTex1200 with minimal additional parameters.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/lacunarity_concept.gif" title="Lacunarity concept" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
