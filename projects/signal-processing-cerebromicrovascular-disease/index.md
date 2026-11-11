---
layout: single
title: ECG Signal Processing in Elderly Diabetes and Cerebromicrovascular Disease
permalink: /projects/signal-processing-cerebromicrovascular-disease/
classes: project-page
---

## Overview
This project focused on the processing and analysis of electrocardiogram (ECG) signals acquired from elderly control and diabetic subjects in the CVES cerebromicrovascular disease database. Diabetes-related cardiovascular and cerebrovascular pathology introduces characteristic abnormalities in ECG signals, motivating the development of automated methods for robust heartbeat detection, waveform feature extraction and quantitative classification.

Over the final quarter of the semester, a complete ECG signal processing pipeline was implemented to detect QRS events, identify PQRST features and classify diabetic versus control subjects with machine learning; I handled the feature analysis stage. Results were compared with published literature.

{: .notice--info}
**Project Type:** Academic Signal Processing Project  
**Duration:** 1 month  
**Focus Areas:** Biomedical Signal Processing · Feature Extraction · Machine Learning  
**Role:** Feature analysis (PQRST interval statistics), Technical Writing, Literature Review

---

## Motivation
ECG analysis plays a critical role in assessing cardiovascular and cerebrovascular health, particularly in aging populations with metabolic disease. Automated detection of cardiac events and waveform features enables scalable analysis but remains sensitive to noise, signal variability and pathological conditions.

The objective of this project was to design and evaluate a robust ECG processing pipeline capable of reliable heartbeat detection, waveform feature extraction and quantitative classification in noisy clinical data.

---

## Design Rationale
ECG signals are highly susceptible to noise from power-line interference, baseline wander and muscle activity; requiring careful preprocessing prior to analysis. The Pan–Tompkins algorithm was selected for heartbeat detection as a widely used QRS detection method. 

Time-domain features derived from PQRST waveforms—particularly RR, ST and QT intervals—were targeted due to their established relevance in assessing cardiac function and autonomic regulation. These features formed the basis for downstream machine learning classification between control and diabetic patient groups.

## Signal Processing & Analysis Pipeline
ECG signals were obtained from the CVES database, consisting of recordings from elderly control and diabetic subjects. 28 of 120 recordings (13 randomly selected control, 15 diabetic), were sampled at 1000 Hz over 24 hours and analyzed.

The processing pipeline consisted of:
- Removal of power-line interference using a notch filter
- Bandpass filtering and QRS detection using the **Pan–Tompkins algorithm**
- Identification of PQRST waveform components
- Extraction of clinically relevant time-domain features
- Machine learning–based classification and performance evaluation

Signal processing and feature extraction were implemented in **MATLAB**.

## Feature Extraction & Machine Learning
Extracted features were heart rate, the mean and SD of ST and QT intervals, and the SD of RR intervals, selected from published findings on diabetic ECG changes. Feature selection prioritized parameters known to exhibit sensitivity to diabetic cardiovascular pathology.

Multiple machine learning models were evaluated, including **Logistic Regression**, **Decision Tree** and **Linear Discriminant** classifiers. Logistic regression gave the highest accuracy of the three models and was selected for final evaluation.

{: .notice--primary}
**Key Results**
- **66.7% sensitivity and 53.9% specificity** (diabetic vs control, 28 recordings)  
- **62.3% validation accuracy (5-fold cross-validation), 54% testing accuracy, AUC 0.60**  
- Compared with a published machine learning model for diabetes detection on non-ECG data (over 138,000 participants; 46.3% sensitivity, 80.9% test accuracy, AUC 0.79), our sensitivity was about **20 percentage points higher**, but accuracy, specificity and AUC were lower  

Model evaluation was performed using **5-fold cross-validation** due to the limited dataset size, with approximately **23% of the data held out for testing**. Feature trends matched published findings (higher ST and QT in diabetic subjects); classification performance was modest, limited by the small dataset.

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

<div class="pdf-links">

📄 <a href="{{ site.baseurl }}/assets/pdf/ecg-signal-processing-summary-and-report.pdf"
     target="_blank"
     rel="noopener">
     <strong>Final Technical Report (PDF)</strong>
   </a>
<em>Comprehensive report covering ECG signal acquisition, filtering, and analysis.</em>

📄 <a href="{{ site.baseurl }}/assets/pdf/ecg-signal-processing-presentation.pdf"
     target="_blank"
     rel="noopener">
     <strong>Project Presentation (PDF)</strong>
   </a>
<em>Presentation summarizing methodology, results, and key signal processing insights.</em>

</div>

## Tools & Technologies
**MATLAB · Pan–Tompkins Algorithm**  
**Signal Processing · Feature Extraction · Machine Learning**  
**Biomedical Data Analysis**

---

## Limitations & Future Work
This study was conducted on a limited subset of ECG recordings, which constrained model generalizability and increased sensitivity to inter-subject variability. The relatively small dataset size necessitated the use of 5-fold cross-validation and likely contributed to modest classification performance and increased susceptibility to overfitting.

Future work would benefit from larger, more diverse ECG datasets to improve statistical power and model robustness. Incorporating additional features, alternative classifiers and temporal modeling approaches may further enhance performance. Extending the pipeline to multi-lead ECG data and longer-term rhythm analysis could also provide more comprehensive clinical insight.

## Reflection
This project strengthened my ability to translate theoretical signal processing concepts into functional analytical pipelines for real biomedical data. It reinforced careful algorithm implementation and clear technical communication; skills directly applicable to biomedical research, medical signal analysis and data-driven healthcare applications.

---

← [Back to Portfolio]({{ site.baseurl }}/#projects)


