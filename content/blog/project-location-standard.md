---
title: "Project Location Standard"
date: "2026-06-16"
kicker: "MAPME Update"
headline: "Towards a Common Project Location Standard"
byline: "June 18, 2026 · MAPME Initiative"
image: "/images/project-location-standard-df875590.jpg"
thumbnail: "/images/img-20260603-wa0034.jpg"
---

{{< section >}}

Over the past six months, the MAPME community has undertaken a structured, multi-institutional effort to address a long-standing gap in international development cooperation: the absence of a shared standard for project location data. What began as an exploratory workshop in December 2025 has evolved into a dedicated Working Group — and a concrete, IATI-aligned proposal ready for community feedback and implementation.

## From Workshops to a Working Group

The initiative was launched in December 2025 with the first **MAPME Workshop on Advancing Project Location Mapping in Development Cooperation**, bringing together development banks, technical cooperation agencies, and NGOs — including IFAD, the World Bank (GEMS), the World Bank IEG, KfW, WFP AIMS, ADB, IDB, AFD, GIZ, GEF IEO, and Development Gateway. The workshop confirmed a shared diagnosis: organizations were collecting location data in incompatible formats, with no binding standards, limited GIS capacity, and very little publicly available information — making cross-institutional analysis and coordination extremely difficult.

{{< figure src="/images/project-location-standard-a7504dc0.jpg" alt="The challenge: fragmented location data across institutions" caption="The core challenge: fragmented location data prevents effective coordination, transparency and impact analysis" >}}

A second, more technical workshop followed on 15 January 2026, gathering 27 geodata specialists, with experts from IFAD, World Bank GEMS, GEF IEO, KfW, WFP, and ADB to compare institutional location data schemas and explore alignment with the IATI Standard. Despite differences in terminology and structure, the comparison revealed a strong convergence around a core set of attributes. The key outcome was the collective decision to establish a dedicated **MAPME Working Group on project location data standardization**.

{{< callout title="Working Group Definition of \"Location\"" >}}

"A location is a set of geographical features **and additional attributes** that are part of a financially supported activity, where it is not feasible to make any further geographical distinctions with regards to funding."

{{< /callout >}}

{{< figure src="/images/project-location-standard-a6ad0f9b.jpg" alt="Why standardized location data matters" caption="Standardized location data benefits populations, partner governments, implementing agencies, donors and financing institutions alike" >}}

## The Proposed IATI-Based Location Standard

From January to June 2026, the Working Group — with experts from KfW, World Bank (GEMS), GEF IEO, IFAD, ADB, AfDB, IDB, OCHA and the IATI Secretariat — developed a comprehensive proposal for a standardized, IATI-based project location data model.

The **IATI Standard** (International Aid Transparency Initiative), a global framework with over 1,846 signatories covering more than 1,038,000 activities worldwide, already includes a location element for sub-national georeferencing — making it the natural foundation for harmonization.

{{< stats >}}

{{< stat value="1,846+" label="IATI Signatories" >}}
{{< stat value="1M+" label="Activities Covered" >}}
{{< stat value="110+" label="Countries with OCHA HDX Boundaries" >}}

{{< /stats >}}

The proposal extends the IATI standard in two key areas:

### Activity Level

Building on existing IATI requirements, the proposal adds a small set of required fields: a project acronym for map visualization, the type of financing instrument, implementing agency names, and an updated country/region list with M49 codes and groupings.

### Location Level

At the location level, the standard introduces a Field ID linking all attributes of an activity at a specific location, a Location ID from a recognized gazetteer or administrative boundary repository, a location name and activity description, and a four-tier **geographic exactness code**:

{{< steps >}}

{{< step num="1" title="Exact location" >}}

The precise geographic location of the activity site is known and reported.

{{< /step >}}

{{< step num="2" title="Approximate — location yet unknown" >}}

The exact location is not yet determined at the time of reporting.

{{< /step >}}

{{< step num="3" title="Approximate — administrative unit" >}}

The location is reported at the level of an administrative unit (polygon).

{{< /step >}}

{{< step num="4" title="Approximate — undisclosed for security reasons" >}}

Exact location withheld, particularly relevant in fragile and conflict-affected settings.

{{< /step >}}

{{< /steps >}}

One of the most substantive changes is the rationalization of the IATI location types list, reduced from over 600 entries to approximately 220. The current list suffers from overlapping definitions, entries that are too vague or too granular, and a lack of structured attributes. In the new list, each type carries two additional fixed attributes: Reach — whether the type represents the site of an activity (reach 1) or its target area (reach 2), Geodata Type (point, line, or polygon) in addition to the existing attributes location type code, description and category. Target areas (reach 2) are always mapped to an administrative unit polygon. Thematic groupings are available for pre-selection but carry no mandatory sectoral attribution, preserving flexibility across development contexts.

The proposal also addresses the question of which administrative boundary repositories to use. After reviewing the main global options — including OCHA HDX COD AB, World Bank Official Boundaries, FAO GAUL, FieldMaps.io, and GADM — the Working Group recommends **OCHA HDX COD AB** as the primary reference where available (currently covering 110+ countries), with clearly specified fallback options for other contexts. Official government-provided boundaries remain the preferred source whenever they are available and up to date.

The proposed standard aims to ensure that project location data is collected in a consistent, structured, and analysis-ready format. By harmonizing location attributes and fully aligning them with the IATI standard, the approach has the potential to improve operational monitoring, auditing, and impact evaluation while strengthening donor coordination and transparency. Ultimately, it can help governments, funders, implementers, and local stakeholders better understand where investments are taking place, identify underserved areas, and avoid the duplication of efforts.

## Presenting the Results: GeoField 2026 and the Community Restitution Session

{{< image-row >}}

{{< figure src="/images/project-location-standard-22fda585.jpg" alt="GeoField 2026 community session in Rome" >}}
{{< figure src="/images/project-location-standard-c35b6a1a.jpg" alt="Maja Bott presenting the IATI location standard proposal" >}}

{{< /image-row >}}

The MAPME community session at GeoField 2026 in Rome (June 1–3, 2026), where the Working Group's outputs were presented and discussed
{.caption}

From 1–3 June 2026, members of the MAPME community gathered in Rome for **GeoField 2026**. MAPME contributed a dedicated session — *A New IATI-Based Location Standard for Better Data and Impact* — presenting the Working Group's results to an international audience of geodata specialists and development cooperation practitioners.

The session opened with insights from the forthcoming *Geospatial Impact Evaluation in Practice* textbook, followed by the Working Group's outputs and a rich discussion around the future of project location data and the importance of shared standards for more effective, evidence-based development cooperation.

Following GeoField, the MAPME community organized a restitution event in hybrid format — presenting the Working Group's outputs to the broader network, including members who could not attend in person.

{{< figure src="/images/project-location-standard-e9698f71.jpg" alt="Example: how location data looks in practice using the proposed standard" caption="Example: filtering EAC project locations by IATI identifier, location name, activity status and location type using the proposed standard (KfW Open Data Platform)" >}}

## What Comes Next: Operationalizing the Standard

The objective now is to move the proposal from design to implementation. Three workstreams will drive this forward:

{{< steps >}}

{{< step num="1" title="Member Testing — Now Onwards" >}}

MAPME member organizations are invited to test the proposed data types against their own data pipelines and reporting workflows, flagging any friction points or missing elements.

{{< /step >}}

{{< step num="2" title="IATI Dialogue — Now to December 2026" >}}

A structured dialogue with the IATI Secretariat will explore how the proposed changes can be formally integrated into the IATI Standard — ensuring long-term sustainability and broad adoption.

{{< /step >}}

{{< step num="3" title="Partner Country Pilots — 2027 Onwards" >}}

We intend to pilot the application of the proposed standard by engaging partner governments and ideally national offices that rely heavily on development financing, to map the standard's data model against existing national frameworks, push for its adoption, and enhance international interoperability and collaboration.

{{< /step >}}

{{< /steps >}}

{{< callout style="cta" >}}

### Read the Full Proposal & Share Your Feedback

The complete proposal is publicly available on GitHub. Community feedback is welcome and will directly inform the next iteration of the standard.

{{< button href="https://mapme-initiative.github.io/IATI-Project-Location-Standard/" style="primary" >}}Explore the Standard →{{< /button >}}{{< button href="/files/mapme-iati-location-standard-2606.pdf" style="outline" >}}View the Presentation{{< /button >}}

{{< /callout >}}

{{< /section >}}

{{< button href="/news/" style="secondary" >}}← All news{{< /button >}}
{.center}
