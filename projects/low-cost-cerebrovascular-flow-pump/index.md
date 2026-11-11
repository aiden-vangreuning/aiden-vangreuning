---
layout: single
title: Low-Cost Cerebrovascular Flow Pump
no_lightbox: true
permalink: /projects/low-cost-cerebrovascular-flow-pump/
classes: project-page
---

## Overview
This project involved the independent design and development of a steady-flow pump system for interventional neuroradiology training, cerebrovascular simulation and experimental research applications. The original scope was pulsatile flow with pressure sensing; pulsatile flow proved unachievable with the low-cost pump, and the scope was narrowed to normal flow. Typically assigned to a four-person team, the project was executed independently and used accessible components.

{: .notice--info}
**Project Type:** Independent Capstone Design and Prototype  
**Duration:** 8 months (2 academic semesters)  
**Focus Areas:** Pulsatile Flow Modeling · Embedded Control · Experimental Validation  
**Role:** Sole designer, developer and analyst

---

## Motivation
Commercial cerebrovascular flow simulators are often prohibitively expensive and inaccessible for many academic and training environments. The objective of this project was to design a cost-effective alternative (approximately **\$600 total system cost**, ~75% lower than comparable professional systems) capable of replicating key hemodynamic characteristics of cerebral arteries while supporting future experimental expansion.

---

## System Architecture & Design
The system integrates mechanical, electrical and computational components to achieve controlled pulsatile flow:

- Peristaltic stepper motor pump driven by an Arduino-based control architecture  
- Flow sensing and logging via Arduino  
- Integration with a 3D-printed Circle of Willis vascular model  
- Glycerol–water blood analog to approximate physiological viscosity  

Arduino code set pump speed from a calibration curve and logged flow, with pressure estimated from flow using Poiseuille’s law.

## Flow Modeling & Data Analysis
Physiological flow and pressure dynamics were modeled and evaluated using fundamental fluid mechanics principles, including **Poiseuille’s Law**. Flow sensor data was collected and analyzed under controlled experimental conditions to check against collected volume. Results showed inconsistent pump output, analyzed in the report. 

{: .notice--primary}
**Key Outcomes & Contributions**
- A working steady-flow system at ~$600 in components  
- A documented analysis of why pulsatile flow and pressure sensing failed  
- Literature-based flow targets for the MCA and ICA  
- A cost table and mass-production considerations
---

## System Visualization

### Complete Pump System
<figure>
  <img src="{{ site.baseurl }}/assets/images/capstone/full-pump-system-with-circle-of-willis-model.jpg"
       alt="Complete cerebrovascular flow pump system">
  <figcaption>
    Final assembled low-cost cerebrovascular flow pump integrated with a 3D-printed Circle of Willis model for experimental validation.
  </figcaption>
</figure>

---

### Presentation Board
{: .notice--secondary}

📌 <a href="{{ site.baseurl }}/assets/images/capstone/vy09-presentation-board.png"
      target="_blank"
      rel="noopener noreferrer">
      <strong>Capstone Presentation Board (PNG)</strong>
    </a><br>
<em>Click to view full resolution of the presentation board.</em>

---

## Technical Documentation
{: .notice--secondary}
📄 <a href="{{ site.baseurl }}/assets/pdf/BME_FINAL_EDP_REPORT_VY09_2025.pdf"
     target="_blank"
     rel="noopener">
     <strong>Final Capstone Report (PDF)</strong>
   </a><br>
<em>40+ page technical report detailing system design, modeling, validation and results</em>

## Tools & Technologies
**Arduino IDE · Embedded Control Systems · Peristaltic Pumps**  
**Flow Sensors · Fluid Mechanics · Experimental Prototyping**  
**Biomedical System Design**

---

## Reflection
This project strengthened my ability to translate theoretical concepts into working biomedical prototypes through iterative prototyping, embedded control development and experimental validation. Completing the project independently reinforced system-level thinking, cost-aware engineering and technical communication—skills directly applicable to biomedical research, device development and experimental engineering roles.

---

← [Back to Portfolio]({{ site.baseurl }}/#projects)

