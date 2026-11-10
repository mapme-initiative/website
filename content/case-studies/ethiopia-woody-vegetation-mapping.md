---
title: "Ethiopia: Woody Vegetation Mapping"
description: "How Earth observation data helps to support combating invasive species Prosopis juliflora in the Afar Region, Ethiopia."
date: "2023-08-01"
kicker: "Ethiopia"
headline: "Mapping woody vegetation cover as a proxy for Prosopis juliflora distribution in the Afar Region"
lead: "How Earth observation data helps to support combating invasive species Prosopis juliflora in the Afar Region, Ethiopia."
image: "/images/hero-ethiopia-vegetation.jpg"
thumbnail: "/images/hero-ethiopia-vegetation-2.jpg"
summary: "How Earth observation data helps to support combating invasive species Prosopis juliflora in the Afar Region, Ethiopia."
categories: ["Case Study"]
tags: ["Ethiopia", "Invasive species", "Land cover classification", "Machine learning", "Project planning"]
aliases: ["/case-studies/ethiopia-woody-vegetation-mapping-1/"]
---

{{< section >}}

Background
{.eyebrow .center}

## Support spatial targeting and containment strategies against the invasive species Prosopis juliflora with satellite images in Ethiopia {.center}

Invasive plants such as Prosopis juliflora are plants that produce a large number of offspring. They can disperse over long distances, and thus have the potential to spread over a considerable area. Prosopis species were partly introduced in the past to different regions of the world to gain several benefits, such as the production of fuelwood or construction material. Yet, it also became increasingly known for its negative ecological and socio-economic impacts, because Prosopis species are rapidly spreading into natural ecosystems, for example in Ethiopia. It could lead to increasing the mortality of native species by depleting water resources.

Early detection and mapping of invasive species are essential to planning effective containment strategies, such as cutting. Yet, conventional ground surveys and mapping activities are time-consuming, and costly, especially over large areas. As an alternative, satellite remote sensing can be used for quantitative assessments of the area invaded by Prosopis juliflora and to create digital maps of its spatial and temporal spread. Such maps might be used to support the spatial targeting of containment efforts, such as high priority areas for mechanical cuts.

{{< figure src="/images/prosopis2-ethiopia-vegetation-2.png" caption="Figure 1: Prosopis juliflora in Ethiopia." link="/images/prosopis2-ethiopia-vegetation.png" >}}

Creating such maps of Prosopis juliflora usually requires calibrating machine learning algorithms, which classify satellite images into different thematic categories such as Prosopis juliflora and other, non-invasive vegetation species. The calibration data should be collected on the ground, e.g. with GPS devices and photo cameras. This in turn requires some essential planning steps to prepare the field campaigns for reference data collection, and the provision of financial and personnel resources. The [MAPME Open Source Guide](https://github.com/mapme-initiative/mapme.osg) provides more information about this topic.

The classification of satellite images can be done with the [mapme.vegetation](https://github.com/mapme-initiative/mapme.vegetation) and the [mapme.classification](https://github.com/mapme-initiative/mapme.classification) software packages. These are based on the R-programming language and offer a wide variety of tools to download and pre-process satellite images and to calibrate machine learning algorithms for creating maps of land use / land cover.

Without in-situ calibration data, proxies for changes in woody vegetation could be assessed instead. By using high-resolution satellite data freely available through the NICFI program and an unsupervised classification procedure proposed by Ludwig et al (2019) the extent of woody vegetation was mapped in five distinct study areas in Ethiopia and to identify areas with strong Prosopis Juliflora encroachment. This method utilizes the contrast between green woody vegetation against the non-vegetated soil background during the dry season and thanks to the NIFCI program can be applied to images from 2016 and onward until 2021.

Results
{.eyebrow .center}

## Relevant insights for spatially targeting of containment measures, thanks to satellite data. {.center}

While the method cannot distinguish between different species, it gives a clear indication of the locations where increases in woody vegetation were observed. Figure 2 visually indicates a substantial increase in woody vegetation cover between the years 2016 (left) and 2021 (right), especially in the North, while the central location of interest shows a substantial decrease in woody vegetation cover.

{{< figure src="/images/content1-ethiopia-vegetation.png" caption="Figure 2: False-color composite (NIR in red channel) of the 2016 (left) and 2021 (right) composites for a potential Prosopis juliflora clearing site in Afar, Ethiopia." >}}

{{< textpic image="/images/content2-ethiopia-vegetation.png" side="left" caption="Figure 3: The map shows different categories of above ground biomass (AGB) within woody vegetation land cover in 2021." >}}

Comparing maps from two different years (2016 and 2021) with the two aforementioned MAPME R packages enables quantifying the dynamic woody vegetation cover. This is already an interesting proxy for the spread of Prosopis juliflora and a suitable map product, in case in-situ collected reference data is not available. Next to this, within land classified as woody vegetation-cover and based on in-situ collected reference data, the above-ground biomass (AGB) of woody vegetation could be estimated (see Figure 3). This map allows distinguishing different AGB categories. These insights are an important means to direct clearing operations to locations where they are most needed. The estimation of the amount of available biomass in a given clearing site will be used to calculate the surplus of the local population´s fuel wood demand. That surplus then needs to be distributed within the wider Afar region to communities and companies that show a fuel wood deficit. The presented data effectively lowers the burden of these calculations, so that the expected amount of biomass due to the clearing activity can be communicated on an objective basis with the local communities and other stakeholders.

{{< /textpic >}}

{{< /section >}}
