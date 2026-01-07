---
layout: page
title: ECG Signal Processing & Analysis
permalink: /projects/signal-processing-cerebromicrovascular-disease/
---

## Overview
This project involved the processing and analysis of electrocardiogram (ECG) signals acquired from elderly diabetic patients with cerebromicrovascular disease. Over the final quarter of the semester, a complete ECG analysis pipeline was developed to detect cardiac events, extract clinically relevant features and evaluate classification performance using machine learning techniques.

The work emphasized signal conditioning, algorithmic heartbeat detection and quantitative performance evaluation relative to published benchmarks.

{: .notice--info}
**Project Type:** Academic Signal Processing Project  
**Duration:** 1 month  
**Focus Areas:** Biomedical Signal Processing · Feature Extraction · Machine Learning  
**Role:** Signal processing, algorithm implementation, data analysis

---

## Motivation
ECG analysis plays a critical role in assessing cardiovascular and cerebrovascular health, particularly in aging populations with metabolic disease. Automated detection of cardiac events and waveform features enables scalable analysis but remains sensitive to noise, signal variability and pathological conditions.

The objective of this project was to design and evaluate a robust ECG processing pipeline capable of reliably identifying heartbeat events and PQRST waveform features in noisy clinical data.

---

## Signal Processing Pipeline
The ECG analysis workflow consisted of the following stages:

- Preprocessing and noise reduction of raw ECG signals  
- Heartbeat detection using the **Pan–Tompkins Algorithm**  
- Identification of **PQRST waveform components**  
- Feature extraction for downstream classification tasks  
- Performance evaluation against reference annotations and literature benchmarks  

Signal processing and analysis were implemented in **MATLAB**, with emphasis on algorithm transparency and reproducibility.

---

## Feature Extraction & Classification
Extracted ECG features were used as inputs to a machine learning classifier to distinguish cardiac patterns within the dataset. Model performance was evaluated using sensitivity and validation accuracy metrics.

{: .notice--primary}
**Key Results**
- **66.7% sensitivity** in heartbeat event detection  
- **62.3% validation accuracy** in ECG classification  
- Performance approximately **20% above reported literature benchmarks** for comparable datasets  

These results demonstrated effective feature extraction and competitive classification performance despite signal variability and patient-specific differences.

---

## ECG Visualization

<figure>
  <img src="{{ site.baseurl }}/assets/images/signal-processing/ecg-pqrst-annotated.jpg"
       alt="Annotated ECG signal with identified PQRST features">
  <figcaption>
    Representative ECG signal with detected PQRST waveform features following Pan–Tompkins-based heartbeat detection.
  </figcaption>
</figure>

---

## Technical Documentation
{: .notice--secondary}
📄 **[Final Technical Report (PDF)]({{ site.baseurl }}/assets/pdf/ecg-signal-processing-report.pdf)**  
📄 **[Project Presentation (PDF)]({{ site.baseurl }}/assets/pdf/ecg-signal-processing-presentation.pdf)**  

---

## Tools & Technologies
**MATLAB · Pan–Tompkins Algorithm · ECG Interpretation**  
**Signal Processing · Feature Extraction · Machine Learning**  
**Biomedical Data Analysis**

---

## Reflection
This project strengthened my ability to translate theoretical signal processing concepts into functional analytical pipelines for real biomedical data. It reinforced careful algorithm implementation, quantitative validation, and clear technical communication—skills directly applicable to biomedical research, medical signal analysis, and data-driven healthcare applications.


