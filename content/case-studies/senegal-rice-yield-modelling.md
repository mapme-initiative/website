---
title: "Senegal: Rice Yield Modelling"
description: "How satellite Earth observation and in-situ data help to monitor agricultural production in the Senegal Delta."
date: "2023-08-01"
kicker: "Senegal"
headline: "Supporting monitoring of agricultural productivity with satellite Earth Observation (EO) in the Senegal Delta"
lead: "How satellite Earth observation and in-situ data help to monitor agricultural production in the Senegal Delta."
image: "/images/hero-senegal-riceyield.jpg"
thumbnail: "/images/hero-senegal-riceyield-2.jpg"
summary: "How satellite Earth observation and in-situ data help to monitor agricultural production in the Senegal Delta."
categories: ["Case Study"]
tags: ["Agriculture", "Machine learning", "Project monitoring", "Senegal", "Yield Modelling"]
aliases: ["/case-studies/senegal-rice-yield-modelling-1/"]
---

{{< section >}}

Background
{.eyebrow .center}

## Support agricultural production in irrigated rice systems {.center}

The 3PRD project (CSN1250) is a program implemented by the Société Nationale d'Aménagement et d'Exploitation des Terres du Delta du fleuve Sénégal et des vallées du fleuve Sénégal et de la Falémé (SAED), cofinanced by the Agence Française de Développement (AFD) with a contribution from the European Union, West African Development Bank (BOAD) and the Senegalese Government. 3PRD is a public-private investment model (shared between the State and the beneficiaries) to support the development of agricultural entrepreneurship involving family farms and local investors in rice production. Its aims are to increase national rice production and commercialization through (i) the irrigation of a new perimeter, (ii) the promotion of private investors to cultivate the perimeter, (iii) improving agricultural investments and access to credit, and (iv) support the rice value chain actors.

{{< textpic image="/images/senegal-fcc.gif" side="right" caption="Figure 1: Monthly False-Color-Composite of the project area based on a Sentinel-2 timeseries processed with the mapme.vegetation package." >}}

The project area is located in the community of "Diama" in the west of the Senegal River Valley. The irrigated agricultural landscape comprises a total surface of approximately 2,000 ha and is composed of more than 2,000 individual agricultural parcels, which have an average size of circa 1 hectare. For the project monitoring, two outcome indicators were mapped and quantified with satellite images: (i) the land-use specific area and (ii) a proxy for the rice productivity - each according to different land use categories - in four years (2017-2020).

Freely available, multi-temporal "Sentinel" 1/2 (Radar and optical images) satellite images from the Copernicus Earth observation program are used to assess the outcome indicators (Figure 1). First, to quantify the land-use area, machine learning algorithms were calibrated, based on in-situ collected ground observations of SAED, and the Sentinel 1/2 satellite images were classified. This output was multiple maps that show the cultivated area of different land use categories in four different years (2017-2020). Second, to proxy productivity without in-situ data, a so-called vegetation index was calculated, based on the Sentinel-2 satellite images. This vegetation index, called Normalized Difference Vegetation Index (NDVI), shows changes in productivity over the years. And third, in order to harness ground collected yield samples by SAED, a yield estimation model, based on satellite imagery in four years (2017-2020), was calibrated in addition.

{{< /textpic >}}

Results
{.eyebrow .center}

## Using freely available satellite images and in-situ reference data to monitor crop area and productivity {.center}

The indicator maps entail useful spatial information about different land use categories and crop productivity in 4 consecutive years. They allow quantifying the land-use specific area (crop acreage) and its change over the observation period (2017-2020). The maps reveal that the area of more intensively used rice fields, which have two harvests per growing season, increased compared to the level in 2017 (see Figure 2 and 3).

However, some farmers tend to cultivate rice only during the first dry season because of natural hazards during the rainy season making farming unpredictable. Indeed, varying precipitation patterns, as well as pests and diseases more prevalent during the second season, make stable yields harder to achieve. As a result, farmers only partially adopted double cropping as a means of intensification for rice agriculture.

{{< textpic image="/images/senegal-fig2.png" side="left" caption="Figure 2: Maps entailing information about different land use categories in the study area in four years (2017-2020). Source: MapTailor Geospatial Consulting GbR." >}}

Next to proxying crop productivity with NDVI, with is a suitable approach in the absence of any in-situ measurements, a crop yield modelling approach by means of a Random Forest regression was implemented. In contrast to NDVI, this method actually quantifies the amount of rice crop yield, yet, it requires a comprehensive set of in-situ collected reference data about on ground measured crop yield. The multi-year rice yield model, which was calibrated with SAED ground data, enabled mapping the rice yield at the level of single field parcels (see Figure 4 at the example of late rice) allowing fine-scale comparative analysis between single plots or cooperatives. The conducted accuraccy assessment suggests, that we can confidently model unvisitied fields with an error slightly below 1 t/ha when a random sample of about 50 fields was available from the same year. However, applying the crop model for years it was not trained on leads to an unsatisfactory increase in the model error of above 2.5 t/ha.

{{< /textpic >}}

{{< columns count="2" >}}

{{< column >}}

From these insights, there are several ways to improve the great field sampling work of SAED. Firstly, from a remote sensing perspective, if a single location within a randomly selected field is sampled, the analysis would benefit from an exact geoposition of this location to support pixel-based approaches. In case that an object-based approach is favored, it would be advisable to repeat multiple measurements per field to obtain a more reliable estimate of the yield. In either case, the field sampling activities by SAED should be continued to further calibrate the rice yield model so that eventually it can be used in an operational mode potentially reducing the need for manual sampling.

{{< /column >}}

{{< column >}}

The mapping of crop areas and crop productivity (yield) with machine learning is a comprehensive workflow that requires reference data to calibrate the algorithms and to validate the quality of the maps. The assessment of the indicators benefitted substantially from the availability of in-situ collected reference data, provided by SAED. The availability of comprehensive and high-quality in-situ data is actually a precondition for quantifying crop yield, and also to validate the created crop yield maps and to inform the users about potential uncertainties. The [MAPME Open Source Guide](https://github.com/mapme-initiative/mapme.osg) provides hands-on recommendations and workflows for remote sensing-based crop type mapping. Tools to make use of such a workflow are provided on the MAPME GitHub repository. They can become the basis for user-friendly interfaces that allow implementing monitoring, evaluation, and planning tools. For example, you can use the [mapme.vegetation](https://github.com/mapme-initiative/mapme.vegetation) and [mapme.classification](https://github.com/mapme-initiative/mapme.classification) R packages, respectively, already to work on a similar workflow. This opens the floor to monitor project results after the end of the project (viability and sustainability).

{{< /column >}}

{{< /columns >}}

{{< image-row >}}

{{< figure src="/images/senegal-fig3-2.png" link="/images/senegal-fig3.png" >}}
{{< figure src="/images/senegal-fig4-2.png" link="/images/senegal-fig4.png" >}}

{{< /image-row >}}

{{< /section >}}
