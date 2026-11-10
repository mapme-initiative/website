---
title: "Resources"
---

{{< hero image="/images/mapme-header.png" >}}

# MAPME Resources

MAPME Resources provide a curated set of open-source tools, tutorials, and reference materials to support the use of geospatial data in development planning, monitoring, and evaluation. Developed under the MAPME Initiative, these resources help practitioners and researchers apply GIS and Earth observation through reproducible workflows, technical guidance, and shared standards across a wide range of development sectors.
{.lead}

{{< button href="#discover-our-trainings" style="primary" >}}Trainings{{< /button >}} {{< button href="#discover-our-code-repositories" style="primary" >}}Code repositories{{< /button >}}
{.center .lead}

{{< button href="#discover-other-resources" style="primary" >}}Other resources{{< /button >}} {{< button href="#discover-mapme-communication-materials" style="primary" >}}Communication Materials{{< /button >}}
{.center .lead}

{{< /hero >}}

{{< section bg="cards" >}}

{{< anchor "discover-our-trainings" >}}

## Discover our trainings

MAPME tutorials can help you learn, step by step, how to use GIS in the context of development cooperation.
{.lead}

{{< columns count="4" >}}

{{< column image="/images/mapme-icon-tutorials.png" >}}

### QGIS trainings in KfW

Our tutorials can help you learn, step by step, how to use GIS in the context of development cooperation.

***In German only***

{{< button href="https://www.youtube.com/playlist?list=PL3sPSf8g-LzwoL2atCdrwQnhtfvq0Sisx" style="outline" wide="true" >}}Explore it on Youtube{{< /button >}}

{{< /column >}}

{{< column image="/images/mapme-icon-tutorials-402x.png" >}}

### QGIS trainings on Youtube

A short YouTube training series introducing QGIS, covering the basics, map styling and symbology, and the use of open data sources.

**Training 1**: Introduction to QGIS

**Training 2**: Semilogy and Symbology

**Training 3**: Open Data Sources

{{< button href="https://www.youtube.com/@MAPME_initiative" style="outline" wide="true" >}}Explore it on Youtube{{< /button >}}

{{< /column >}}

{{< column image="/images/mapme-icon-tutorials-402x.png" >}}

### In-depth training on using Mapme.biodiversity for impact evaluation

This training material introduces researchers and doctoral students to spatial econometrics, using the impact of protected areas on deforestation as a guiding case study, while equipping them with the theoretical, methodological, and practical tools needed to evaluate a wide range of spatially explicit intervention.

***In French only***

{{< button href="https://betsaka.github.io/statcap_impact_training/" style="outline" wide="true" >}}Explore it on GitHub{{< /button >}}

{{< /column >}}

{{< column image="/images/mapme-icon-tutorials.png" >}}

[Using mapme.biodiversity for conflict analysis](https://mapme-initiative.github.io/conflict-analysis/)<br>This tutorial introduces how to integrate conflict data into geospatial project analysis using the *mapme.biodiversity* package, enabling users to assess conflict exposure and incorporate security considerations into project planning, monitoring, and impact evaluation.

{{< button href="https://mapme-initiative.github.io/conflict-analysis/" style="outline" wide="true" >}}Explore it on GitHub{{< /button >}}

{{< /column >}}

{{< /columns >}}

{{< /section >}}

{{< section bg="cards" >}}

{{< anchor "discover-our-code-repositories" >}}

## Discover our code repositories

MAPME repositories contain R codes that will allow you to generate interactive statistics and insights on different impact indicators separated by sectors.
{.lead}

{{< columns count="4" >}}

{{< column image="/images/mapme-icon-repositories.png" >}}

### mapme.biodiversity

The mapme.biodiversity package helps to analyse a number of biodiversity related indicators and biodiversity threats based on freely available geodata-sources such as the Global Forest Watch.

The package allows for the analysis of global biodiversity portfolios with a thousand or millions of AOIs which is normally only possible on dedicated platforms such as the Google Earth Engine.

{{< button href="https://mapme-initiative.github.io/mapme.biodiversity/index.html" style="outline" wide="true" >}}mapme.biodiversity - R package{{< /button >}}

{{< button href="https://mapme-initiative.github.io/demo-madeira/" style="outline" wide="true" >}}mapme.biodiversity - Practical tutorial{{< /button >}}

{{< /column >}}

{{< column image="/images/mapme-icon-repositories.png" >}}

### mapme.pipelines

mapme.pipelines is an R package that enables large-scale, reproducible portfolio analyses by running configurable workflows built on mapme.biodiversity. Instead of writing extensive boilerplate code, users define inputs, outputs, data resources, and indicators in a simple YAML file and execute the entire pipeline with a single `run_config()` function call.

{{< button href="https://github.com/mapme-initiative/mapme.pipelines" style="outline" wide="true" >}}Explore it on GitHub{{< /button >}}

{{< /column >}}

{{< column image="/images/mapme-icon-repositories.png" >}}

### oda-portfolio

oda-portfolio is an R-based workflow that uses the targets pipeline framework to compute biodiversity indicators for protected areas in countries receiving official development assistance from OECD member states. It uses spatial data from the World Database on Protected Areas and references OECD data to identify eligible countries, then processes the analysis via mapme.pipelines, providing a reproducible, configurable workflow for large-scale biodiversity portfolio analysis. Additional countries can be included by manually adding their ISO3 codes.

{{< button href="https://github.com/mapme-initiative/oda-portfolio" style="outline" wide="true" >}}Explore it on GitHub{{< /button >}}

{{< /column >}}

{{< column image="/images/mapme-icon-repositories.png" >}}

### mapme-docker

mapme-docker provides Docker images preconfigured with the latest releases of GDAL, PROJ, GEOS, and a curated set of recent R spatial packages. The images, based on rocker, are published on GitHub and can be run locally or built from source, providing a ready-to-use environment for spatial analysis.

{{< button href="https://github.com/mapme-initiative/mapme-docker" style="outline" wide="true" >}}Explore it on GitHub{{< /button >}}

{{< /column >}}

{{< /columns >}}

{{< /section >}}

{{< section bg="cards" >}}

{{< anchor "discover-other-resources" >}}

## Discover other resources

MAPME tools are designed for an easy start. We host different types of resources that can help you get in touch with the topic and deliver better results.
{.lead}

{{< columns count="4" >}}

{{< column image="/images/mapme-icon-open-data.png" >}}

### Project Location Standard

The open Project Location Model is an open standard for collecting location information in development cooperation. It is based and extends the IATI reporting standards to be geo-compatible.

{{< button href="https://mapme-initiative.github.io/IATI-Project-Location-Standard/introduction/" style="outline" wide="true" >}}Explore it on GitHub{{< /button >}}

{{< /column >}}

{{< column image="/images/mapme-icon-open-data.png" >}}

### Guide to Earth Observation in Development Cooperation

A technical guide on using earth observation to measure different monitoring indicators in development cooperation.

{{< button href="https://github.com/mapme-initiative/mapme.osg" style="outline" wide="true" >}}Explore it on GitHub{{< /button >}}

{{< /column >}}

{{< column image="/images/mapme-icon-open-data.png" >}}

### MAPME Biodiversity Reports

LLM-supported coding workflows to generate reproducible reports assessing conservation threats and outcomes in protected areas. Built with R, Quarto, and mapme.biodiversity, these interactive reports support investment prioritization and impact evaluation.

{{< button href="https://mapme-initiative.github.io/mapme.biodiversity.reports/" style="outline" wide="true" >}}Explore it on GitHub{{< /button >}}

{{< /column >}}

{{< /columns >}}

{{< /section >}}

{{< section bg="cards" >}}

{{< anchor "discover-mapme-communication-materials" >}}

## Discover MAPME communication materials

Our communication materials are designed for anyone who wants to present MAPME within their network, organization, or at events. Find ready-to-use resources to introduce MAPME and share its key messages.
{.lead}

{{< columns count="4" >}}

{{< column image="/images/mapme-icon-open-data.png" >}}

### MAPME generic presentation

A detailed presentation introducing MAPME, its objectives, resources, community, projects and events. Designed to help you present MAPME to your network, organization, or at events.

{{< button href="/files/mapme-presentation-generic-en.pdf" style="outline" wide="true" >}}Download in English{{< /button >}}

{{< button href="/files/mapme-presentation-generic-fr.pdf" style="outline" wide="true" >}}Download in French{{< /button >}}

{{< /column >}}

{{< column image="/images/mapme-icon-open-data.png" >}}

### MAPME one-pager

A quick introduction to MAPME and its ecosystem, including the project, resources, community, events, and activities. Use it to discover MAPME and introduce it to your network or organization.

{{< button href="/files/mapme-one-pager-a2-1.pdf" style="outline" wide="true" >}}Download in A2{{< /button >}}

{{< button href="/files/mapme-one-pager-a4-2.pdf" style="outline" wide="true" >}}Download in A4{{< /button >}}

{{< button href="/files/mapme-one-page-a5.pdf" style="outline" wide="true" >}}Download in A5{{< /button >}}

{{< /column >}}

{{< /columns >}}

{{< /section >}}
