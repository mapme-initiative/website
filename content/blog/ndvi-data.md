---
title: "Analyzing NDVI Data to Monitor Vegetation Growth Patterns"
date: "2023-10-27"
kicker: "KfW Update"
headline: "Analyzing NDVI Data to Monitor Vegetation Growth Patterns"
image: "/images/1.png"
thumbnail: "/images/1-3.png"
categories: ["Case Study"]
---

{{< textpic image="/images/1-2.png" side="left" caption="Figure 1 - The raw NDVI data shows the strong seasonal patterns of the signal." layout="wrap" >}}

For this project, KfW used the [<u>Microsoft Planetary Computer</u>](https://planetarycomputer.microsoft.com/) data repository to collect and analyze Normalized Difference Vegetation Index (NDVI) data, gaining insights into vegetation health and trends over time for project sites in Ghana.

KfW used the Moderate Resolution Imaging Spectroradiometer (MODIS), spanning from 2000 to 2024 in 16-day intervals, to assess vegetation health. MODIS, aboard NASA's Terra and Aqua satellites, provides high-quality NDVI data suitable for this purpose. NDVI measures the difference between near-infrared and red light, providing an indicator of plant health.

{{< /textpic >}}

{{< textpic image="/images/2.png" side="right" caption="Figure 2 - By decomposing the NDVI data, we want to separate seasonal effects at different intervals and non-seasonal effects." >}}

KfW calculated the mean NDVI value for all project sites for each available date, creating a comprehensive time series that captures dynamic changes in vegetation health. This data was then analyzed using Seasonal-Trend decomposition using Loess (STL), a statistical method that isolates long-term trends from seasonal variations and random noise. By applying STL decomposition, KfW was able to identify significant patterns and trends in vegetation health.

To understand the factors driving these changes, KfW compared the NDVI trends to temperature and precipitation data. These climatic variables are critical for vegetation growth and health. Correlating NDVI trends with climate data helps identify causal relationships and understand the impact of climate variability on vegetation.

{{< /textpic >}}

{{< button href="/news/" style="secondary" >}}← All news{{< /button >}}
{.center}
