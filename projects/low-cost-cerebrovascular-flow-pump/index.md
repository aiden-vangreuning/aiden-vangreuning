---
layout: page
title: Low-Cost Cerebrovascular Flow Pump
---

## Overview
This project involved the independent design and development of a low-cost pulsatile flow pump system to simulate physiologically realistic cerebrovascular blood flow for interventional neuroradiology training and experimental research applications.

Typically assigned to a four-person team, the project was executed independently and focused on achieving accurate flow and pressure dynamics using accessible components and a modular, research-oriented system architecture.

---

## Motivation
Commercial cerebrovascular flow simulators are often prohibitively expensive and inaccessible for many academic and training environments. The objective of this project was to design a cost-effective alternative (approximately **\$600 total system cost**, ~75% lower than comparable professional systems) capable of replicating key hemodynamic characteristics of cerebral arteries while supporting future experimental expansion.

---

## System Architecture & Design
The system integrates mechanical, electrical, and computational components to achieve controlled pulsatile flow:

- Peristaltic stepper motor pump driven by an Arduino-based control architecture  
- Real-time flow sensing and signal processing for monitoring system behaviour  
- Integration with a 3D-printed Circle of Willis vascular model  
- Glycerol–water blood analog to approximate physiological viscosity  

Custom control logic was implemented to regulate flow rate and pressure behaviour, enabling the simulation of physiologically relevant cerebrovascular conditions.

---

## Flow Modeling & Data Analysis
Physiological flow and pressure dynamics were modeled and evaluated using fundamental fluid mechanics principles, including **Poiseuille’s Law**. Flow sensor data were collected and analyzed to validate system performance, repeatability, and stability under controlled experimental conditions.

---

{: .notice--primary}
**Key Outcomes & Contributions**
- Fully functional cerebrovascular flow simulation system at significantly reduced cost  
- Physiologically realistic flow and pressure dynamics using a blood analog fluid  
- Repeatable and stable performance suitable for experimental training applications  
- Modular platform supporting future catheter-based and sensing extensions  

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

### Presentation Board
![Capstone Presentation Board]({{ site.baseurl }}/assets/images/capstone/vy09-presentation-board.png)

---

## Technical Documentation
- 📄 **[Final Capstone Report (PDF)]({{ site.baseurl }}/assets/pdf/BME_FINAL_EDP_REPORT_VY09_2025.pdf)**  
  *(40+ page technical report detailing system design, modeling, validation, and results)*

---

## Tools & Technologies
**Arduino IDE · Embedded Control Systems · Peristaltic Pumps**  
**Flow Sensors · Fluid Mechanics · Experimental Prototyping**  
**Biomedical System Design**

---

## Reflection
This project strengthened my ability to translate theoretical concepts into validated biomedical systems, integrating hardware, software and experimental analysis. Completing the project independently reinforced system-level thinking, iterative prototyping and cost-aware engineering—skills directly applicable to biomedical research and development roles.
