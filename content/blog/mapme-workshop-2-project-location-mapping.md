---
title: "MAPME Workshop II: Project Location Mapping"
date: "2026-02-05"
kicker: "MAPME initiative"
headline: "MAPME Workshop: towards a Common IATI Standard on Project Location Data Models?"
image: "/images/workshop5.png"
thumbnail: "/images/capture-d-ecran-2026-02-12-200919.png"
---

#### Background {.center}

Following the first MAPME workshop on [*Advancing Project Location Mapping in Development Cooperation*](/blog/mapme-workshop-advancing-project-location-mapping-in-development-cooperation/) held in December, the MAPME Community convened a second, more technical follow-up workshop on 15 January. This session marked a deliberate shift from shared problem framing toward hands-on technical discussions, focusing on project location data models and their alignment with the International Aid Transparency Initiative (IATI).

The workshop was explicitly designed for geodata specialists working on project location information within development institutions and built directly on the challenges and priorities identified during the first workshop.

In total, 27 participants from KfW, GIZ, the International Fund for Agricultural Development (IFAD), the World Bank’s Geo-Enabling initiative for Monitoring and Supervision (GEMS), the Inter-American Development Bank (IDB), the Asian Development Bank (ADB), the Global Environment Facility Independent Evaluation Office (GEF IEO), the World Food Program (WFP), the World Bank Group’s Independent Evaluation Group (IEG), the Development Gateway, and OCHA attended this high-level workshop.

The workshop was structured around two main parts, combining plenary technical inputs with focused group discussions.
{.center}

##### Part 1: Shared Foundations and Model Comparison {.center}

The workshop opened with a technical overview of the IATI Standard, ensuring a common baseline understanding among participants. Particular attention was given to IATI’s geographic and location-related elements, how they are currently used, and where they fall short for operational geospatial workflows. This overview was especially important given the workshop’s objective of aligning project location data models with IATI in a way that supports both transparency and geospatial analysis, in line with the IATI 2026–2030 Strategic Framework.

This was followed by an in-depth discussion on the institutional challenges of standardization, notably the need to secure high-level management buy-in. Participants emphasized that technical convergence alone is insufficient without clear incentives, governance arrangements, and leadership support within organizations.

To ground the discussions in operational reality, IFAD, World Bank GEMS, GEF IEO, KfW, WFP (AIMS), and ADB had been asked to extract and list all attributes (types of data) from their project location data models ahead of the workshop. These schemas were compared with each other and served as concrete reference points for getting an overview how institutions currently represent project locations, managing their attributes and metadata — particularly in relation to IATI. During the session, these attributes were reviewed to identify commonalities across institutions. Despite differences in structure, terminology, and implementation, this exercise revealed a strong convergence around a core set of attributes, providing a concrete basis for discussing a minimum viable project location data standard aligned with IATI.

{{< image-row >}}

{{< figure src="/images/test-01.jpg" >}}
{{< figure src="/images/capture-d-ecran-2026-02-05-150301.png" >}}

{{< /image-row >}}

##### Part 2: Technical Group Discussions {.center}

The second part of the workshop consisted of parallel technical group discussions. One group focused on the use of administrative boundary data, examining which global repositories are currently used across institutions, for what purposes, and proposing recommendations. The second group focused on activity-related location attributes, discussing which attributes are most critical for meaningful geospatial analysis and reporting, and whether greater alignment is possible across the different data models being compared.

{{< textpic image="/images/capture-d-ecran-2026-02-05-150453.png" side="right" caption="Comparative Analysis of Global Administrative Boundary Data Sources" >}}

### Group 1: Administrative Boundaries

One group focused on the use of administrative boundary data, examining which global repositories are currently used across institutions and for which purposes. Participants compared commonly used datasets—including GADM, World Bank boundaries, FAO GAUL, FieldMaps.io, Natural Earth, OSM, Geoboundaries, Mapbox, Overture, and HDX – OCHA Global Subnational Administrative Boundaries—assessing their features, governance models, and operational suitability.

Several key observations emerged from this discussion. Some institutions are required to follow internal administrative boundary standards, limiting flexibility in source selection. National-level (administrative level 0) boundaries were identified as particularly sensitive, largely for geopolitical reasons. At subnational levels, however, many global datasets rely on similar underlying sources, meaning that practical differences are often smaller than expected. There was broad agreement that official government-provided administrative boundary data should always be the preferred source when available and up to date.

When authoritative national data is unavailable or outdated and clear internal guidance is lacking, HDX (OCHA Global Subnational Administrative Boundaries) and FieldMaps.io were identified as the most promising sources for institutions beginning to collect project location data. HDX was highlighted for its aggregated global coverage, availability of multiple boundary variants and data formats, consistent long-term maintenance, and subscription-based update notifications. FieldMaps.io was recognized as meeting many operational needs, though its large Admin 0 file size and reliance on a single maintainer were noted as potential limitations. Overall, the group emphasized that data source selection remains use-case dependent. The current assessment will be reviewed by the wider community, which will develop and issue recommendations on preferred data sources going forward.

{{< /textpic >}}

{{< textpic image="/images/workshop6.png" side="left" caption="Participating Institutions’ Approach to Defining a Project Location" >}}

### Group 2: Activity-related Location Attributes

A second group focused on activity-related location attributes, discussing which attributes are most critical for meaningful geospatial analysis and reporting, and whether greater alignment is possible between the attributes used in the different data model being compared. A first milestone in the discussion was the agreement about the definition of a “location”. According to IATI[\[1\]](#_ftn1) , a location is the sub-national geographical identification of the target locations of an activity. These can be described by coordinates, gazeteer reference or administrative areas. In addition, descriptions can be added, such as the name and any features of the location e.g. health post, village name, administrative area, budget share. For WFP, for example, project locations or sites can represent natural features, human-made structures, or functional locations such as businesses, landmarks, infrastructure, services or transactions.

The participants agreed that a location is always the combination of a specific project activity with its respective geographic coordinates and additional site-specific and activity-related attributes. This means that if there are two main activities at the same coordinates, this creates two project locations. Similarly, if one project activity is taking place in two different districts, this also creates two project locations.

{{< /textpic >}}

{{< textpic image="/images/workshop4.jpg" side="left" caption="Comparison of Location Types Across Four Participating Institutions for Creating a Joint Repository" >}}

The group also discussed the distribution of a project’s budget among its locations and agreed that this can be quite challenging as this requires rules for assigning or distributing overhead costs among activities and sites, which can disincentivize institutions to collect project location data if required from the start. The critical attributes of a project location lie with its **name or ID, type and coordinates**.

Participants also mentioned the benefits of collecting project location data for:

- Project planning, as well as ESG and climate risk analysis and impact assessment, by comparing locations with satellite imagery, crowdsourced data, and other baseline datasets
- Coordinating activities and sharing consistent location information, including for reporting and donor coordination
- Managing and mitigating local risks
- Measuring indicators and impacts
- Audit, evaluation and safeguards

It was emphasized that already the mere mapping exercise has important benefits of providing orientation and transparency among its participants.

Another important finding was that most data models contain a repository of location attributes which allows for easy aggregation and analysis of similar types of locations or investments. In the IATI standard, these are called location types and use the military US NGA Feature Designation Code as their source. Because this Code is not adequate for international development and humanitarian contexts, the institutions participating in this exercise presented their own modified codes (KfW), respectively how they modified and renamed them: IFAD calls them investment types, WFP calls them site categories/ asset types, GEMS calls them main sectors/themes and the ADB calls them subsectors. It was recommended to harmonize these lists as well as other commonly used attributes to facilitate basic cross-institutional location data analysis and improved coordination of activities.

{{< /textpic >}}

##### And then what? {.center}

The key outcome of the workshop was the collective decision to establish a dedicated MAPME working group on project location data standardization. This group will build on the technical foundations laid during the workshop and explore the development of a joint proposal for a data standard aligned with the IATI standard-setting process.

This marks an important step for the MAPME Community—from exploratory technical dialogue toward sustained, coordinated action—and lays the groundwork for improving the interoperability, transparency, and usability of project location data across development institutions.

{{< button href="/news/" style="secondary" >}}← All news{{< /button >}}
{.center}
