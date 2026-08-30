# 🌊 Future of Paradise

### Five islands. One changing climate.

An interactive data-driven scrollytelling experience exploring how climate change is reshaping five Pacific island nations — **Fiji, Kiribati, Samoa, Tuvalu and Vanuatu**.

**🌐 [Explore the interactive dataviz →] https://mschethana.github.io/future-of-paradise/**

---

## About the project

What does climate change look like for an island nation?

It is more than a rising sea.

**Future of Paradise** brings together environmental, demographic and economic indicators to explore how climate pressures are unfolding across five Pacific island nations — and why the resulting vulnerability is not the same everywhere.

The story moves from physical changes in the environment to the people and economies exposed to them:

**Sea level → Climate variability → Coastline erosion → Population → Tourism → Climate risk**

The project concludes with a custom composite **Climate Risk Index** designed to compare the relative vulnerability of the five islands and an explainability view showing the contribution of three dimensions:

* **Physical exposure**
* **Population exposure**
* **Economic exposure**

Rather than asking only *which island is most at risk?*, the project asks:

> **What makes an island vulnerable — and what might the future of paradise look like?**

---

## The story

### 01 — Five islands . Five starting points

The project begins by introducing Fiji, Kiribati, Samoa, Tuvalu and Vanuatu — five Pacific island nations with different geographic, demographic and economic characteristics.

### 02 — The ocean is changing

Sea-level anomaly data provides the first signal of physical climate change, showing how sea levels have varied across the five island nations over time.

### 03 — The climate is becoming less predictable

Temperature and rainfall anomalies provide a broader view of changing climate conditions.

Temperature reveals the longer-term warming signal, while rainfall highlights variability in a climate system on which communities, ecosystems and economies depend.

### 04 — The coastline is already responding

Coastline movement and erosion indicators bring the consequences of environmental change closer to the physical edge of each island.

The visualisation separates **shoreline movement rate** from the **share of coastline experiencing erosion**, showing that these are related but distinct dimensions of coastal pressure.

### 05 — People are part of the equation

Population growth adds another dimension to vulnerability.

Climate exposure matters differently depending on how many people live in exposed areas and how demographic pressures may change that exposure over time.

### 06 — Paradise is part of the economy

Tourism dependence illustrates the economic dimension of climate vulnerability.

For island economies where tourism plays an important role, environmental change can have implications that extend beyond ecosystems and coastlines.

### 07 — Not every island faces the same risk

The custom Climate Risk Index brings the different dimensions together into a comparative view of relative vulnerability across the five island nations.

### 08 — What drives the risk?

The final analytical view breaks the composite risk score into three dimensions:

**Physical + Population + Economic**

This explainability layer is designed to move beyond ranking and answer the more useful question:

> **Why does each island receive its risk score?**

---

## Key analytical idea

A single climate indicator cannot fully describe island vulnerability.

Two islands may experience similar environmental pressures but face very different consequences because of differences in:

* physical exposure
* population dynamics
* economic dependence

The Climate Risk Index therefore provides a **comparative analytical framework**, rather than presenting climate risk as a single universal measure.

---

## Data

The project combines official and supporting datasets covering:

| Dimension               | What it measures                             | Role in the story         |
| ----------------------- | -------------------------------------------- | ------------------------- |
| Sea-level anomalies     | Changes in sea level over time               | Physical climate pressure |
| Temperature anomalies   | Surface temperature departures               | Warming signal            |
| Rainfall anomalies      | Changes in precipitation patterns            | Climate variability       |
| Coastline erosion       | Shoreline movement and erosion               | Coastal exposure          |
| Population              | Population change                            | Human exposure            |
| Tourism                 | Tourist arrivals / tourism intensity         | Economic dependence       |
| Climate risk components | Physical, population and economic dimensions | Composite risk analysis   |

Six official dataset provided by the **Pacific Dataviz Challenge** is incorporated into the project along with the population dataset from World Bank Data.

---

## Climate Risk Index

The Climate Risk Index is the project's main analytical component.

Rather than treating the five islands as equally exposed, the index combines three dimensions of vulnerability:

### Physical exposure

How strongly the island is affected by environmental and coastal pressures.

### Population exposure

How demographic conditions influence the number of people potentially exposed to climate-related pressures.

### Economic exposure

How economic dependence — including tourism — can amplify the consequences of environmental change.

The resulting score is scaled to **0–100** to make relative comparisons easier to interpret.

The index is intended as an **exploratory comparative framework**, not as an official climate-risk rating.

---

## Visualisation approach

The project uses **scrollytelling** rather than a conventional dashboard.

Each section introduces one question and one layer of evidence before moving to the next:

```text
PHYSICAL CHANGE
      ↓
CLIMATE VARIABILITY
      ↓
COASTAL PRESSURE
      ↓
HUMAN EXPOSURE
      ↓
ECONOMIC DEPENDENCE
      ↓
COMPOSITE RISK
      ↓
WHY THE RISK DIFFERS
```

This structure is designed to allow the viewer to build an understanding of vulnerability progressively rather than presenting all indicators simultaneously.

---

## Tools

### Data & analysis

* **Python**
* **Pandas**
* **NumPy**
* **Scikit-learn**
* **Plotly**

### Web visualisation

* **HTML**
* **CSS**
* **JavaScript**
* **Plotly.js**

### Visual design

* **Canva**

### Deployment

* **GitHub Pages**

---

## Repository structure

```text
future-of-paradise/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
├── assets/
│   ├── images/
│   │   ├── fiji.jpg
│   │   ├── kiribati.jpg
│   │   ├── samoa.jpg
│   │   ├── tuvalu.jpg
│   │   └── vanuatu.jpg
│   │
│   └── charts/
│       ├── chart1_sea_level.html
│       ├── chart2_temperature.html
│       ├── chart3_population.html
│       ├── chart4_tourism.html
│       ├── chart5_risk_index.html
│       ├── chart6_breakdown.html
│       ├── chart7_rainfall   
│       ├── chart8_coastline_erosion_rate
│       ├── chart9_pct_coastline_eroding
│       └── erosion_rank_cards
│       
│
└── notebooks/
    ├── 01_clean_merge
    ├── 02_coastlines_explore_clean
    ├── 03_risk index calculation
    └── 04_build_charts
```

---

## Running the project locally

This is a static-hosted interactive web visualisation.

Clone the repository:

```bash
git clone https://github.com/mschethana/future-of-paradise
```

Navigate to the project:

```bash
cd future-of-paradise
```

The interactive experience can then be opened through a local web server or deployed using GitHub Pages.

---

## Deployment

The project is hosted using **GitHub Pages**, allowing the static HTML, CSS, JavaScript and visualisation assets to be served directly from the repository.

GitHub Pages supports publishing websites from a repository without requiring separate hosting.

**Live project:**
**[Future of Paradise →] https://mschethana.github.io/future-of-paradise/**

---

## Accessibility & design

The visualisation was designed with:

* high-contrast text
* restrained colour use
* descriptive section headings
* readable typography
* progressive storytelling
* responsive layouts for smaller screens
* visual cues that complement rather than replace explanatory text

---

## Limitations

Climate risk is complex and cannot be completely represented by a single index.

The Climate Risk Index in this project is a **constructed analytical measure for comparative visualisation**. It should not be interpreted as an official assessment of the climate risk of any country.

Other limitations include:

* differences in data availability between countries
* differences in observation periods
* incomplete tourism data for some islands
* differences in geographic and methodological coverage across datasets
* the inability of aggregate national indicators to capture local-level vulnerability

These limitations are important when interpreting comparisons between islands.

---

## Competition

**Pacific Dataviz Challenge 2026**

**Submission:** Future of Paradise

**Theme:** Climate change and the Pacific

The project was submitted as an interactive dataviz entry for the 2026 Pacific Dataviz Challenge.

---

## Why this project matters

Pacific island nations are often discussed through a single narrative: *rising seas threaten paradise.*

The reality is more complex.

Climate pressure interacts with **where people live, how populations change, how coastlines respond, and how economies depend on vulnerable environments**.

Future of Paradise uses data visualisation to make those connections visible — and to shift the question from:

> **Which island is most at risk?**

to:

> **What makes an island vulnerable, and what can we learn from the differences between them?**

---

## Author

**Chethana M S**

Data Science | Statistics | Data Visualisation

[Portfolio] https://mschethana.github.io/ · [LinkedIn] https://www.linkedin.com/in/mschethana/ · [GitHub] https://github.com/mschethana

---
