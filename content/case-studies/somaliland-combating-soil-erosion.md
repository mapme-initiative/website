---
title: "Somaliland: Combating Soil Erosion"
description: "How Earth observation data helps to measure project outcome and how combining it with precipitation data is key to a more comprehensive vegetation monitoring in arid areas."
date: "2023-08-01"
kicker: "Somaliland"
headline: "Combating soil erosion and measure success with Remote Sensing"
lead: "How Earth observation data helps to measure project outcome and how combining it with precipitation data is key to a more comprehensive vegetation monitoring in arid areas."
image: "/images/hero-somaliland-soil-erosion.jpg"
thumbnail: "/images/hero-somaliland-soil-erosion-2.jpg"
summary: "Going beyond deforestation statistics in conservation evaluation: How landscape metrics can help us to understand the effects of infrastructure development on habitat integrity."
categories: ["Case Study"]
tags: ["Precipitation", "Soil Bunds", "Soil Erosion", "Somaliland", "Vegetation", "Vegetation Index"]
aliases: ["/case-studies/somaliland-combating-soil-erosion-1/"]
---

{{< section >}}

**Background**
{.eyebrow .center}

## The impact of soil bunds on vegetation recovery {.center}

{{< textpic image="/images/somaliland-overview-2.jpg" side="right" caption="Figure 1: Seasonal changes of maximum NDVI for the soil bunds in the village of Geed Abeera. Source: MapTailor 2021." >}}

Soil erosion poses threats to biodiversity and agricultural productivity. Overgrazing but also changing patterns of precipitation towards less frequent but more intense rainfalls intensifies the pressure on the landscape and poses a serious threat to the income of the local community.

The KfW funded project *Water Supply / Basic Sanitation and Sustainable Land Management in Somaliland* based in the semi-arid Biji catchment in Somalia implemented more than 1,000 km of soil bunds in the years 2018-2020 to prevent further erosion of the soils, which often result in extensive gully erosion, and to extend the time when freshwater is available in the landscape to support vegetation growth and agriculture production (Figure 1).

One of the intended outcomes of the project was reducing soil erosion as a result of the soil bund construction. A proxy for this is vegetation growth. However, because of the size of the study area, comprehensive on-ground checks of each of the constructed soil bunds was not possible. Yet, with images taken from satellites in space we were able to *go back in time* to the year 2017 and understand how vegetation cover has changed until today.

{{< /textpic >}}

{{< textpic image="/images/somaliland-precipitation-2.jpg" side="left" caption="Figure 2: Monthly absolute rainfall rates (top) and rainfall anomalies from the reference period 1981 - 2010 (bottom) in the Biji catchment based on the CHIRPS dataset. Source: MapTailor 2021." >}}

To this end, we used freely available satellite images from the European Copernicus Sentinel-2 mission and analyzed these via the [mapme.vegetation](https://mapme-initiative.github.io/mapme.vegetation/) tool. So-called vegetation indices such as the Normalized-Difference Vegetation Index (NDVI), can be calculated from the Sentinel-2 images and help to understand changes in vegetation cover better. Based on NDVI, we created maps that show the spatial and temporal dynamics of vegetation growth as a proxy for reduced soil erosion in an area encompassing about 100,000 hectares.

The Biji catchment is placed in a semi-arid region with about 450 mm of annual rainfall. Next to the satellite observation, we looked at digital precipitation data from the project *Rainfall Estimates from Rain Gauge and Satellite Observations* ([CHIRPS](https://www.chc.ucsb.edu/data/chirps)). Based on this, we observed substantial precipitation anomalies for the years we were analyzing, with reduced rainfall at the beginning towards higher rainfall rates in later years (Figure 2). It is very likely that the growth of vegetation that we measured with the Sentinel-2 satellite observations depends on the amount of rainfall we observe in a given vegetation period, thus it is important to consider rainfall patterns.

{{< /textpic >}}

Results
{.eyebrow .center}

## Combining multi-temporal satellite Earth observation with precipitation data is key to a comprehensive vegetation monitoring {.center}

{{< columns count="2" >}}

{{< column >}}

Based on the available Sentinel-2 images and CHIRPS data, we observed different patterns of vegetation cover changes and fluctuations over the period under investigation from one village to another. These patterns show a dependency on the observed rainfall anomaly so that considering precipitation in our analysis allowed us to robustly identify areas where the soil bund construction positively impacted vegetation cover (Figure 3).

{{< /column >}}

{{< column >}}

More importantly, we could also identify areas where the desired outcome of increased vegetation cover has not yet materialized. There are many possible reasons as to why these areas were characterized with decreasing vegetation cover that cannot solely be investigated by the use of geodata. But delivering the knowledge where the biggest potential to increase the impact lies is valuable information for the current monitoring efforts and the future planning of follow-up projects.

{{< /column >}}

{{< /columns >}}

{{< figure src="/images/somaliland-randomeff-2.jpg" caption="Figure 3: Change of vegetation cover [%] over time for different villages in the Biji catchment. Source: MapTailor 2021." link="/images/somaliland-randomeff.jpg" >}}

{{< /section >}}
