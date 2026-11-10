---
title: "Flood Risk Mapping with Field Validation"
date: "2025-09-15"
thumbnail: "/images/picture4candace-2.jpg"
categories: ["Case Study"]
---

*Confluence Risk Mitigation*
{.eyebrow}

### Nigeria Case Study: Transferable Open Data Methods for Flood Risk Mapping in Data-Scarce Regions {.center}

**Mark Malgwi, Mirjam Mertin, Candace Chow**
{.right}

Contact Information: [<u>info@confluence.eco</u>](mailto:info@confluence.eco)
{.right}

{{< section >}}

{{< cards layout="horizontal" >}}

{{< card title="Highlights" image="/images/feature.jpg" >}}

1. *Transferrable methods for data-scarce regions, highlighting context-aware insights with the integration of local knowledge and field validation data*
2. *Enhanced flood risk mapping demonstrated with the availability of higher resolution topographic data*
3. *Translation of insights to provide immediate relief and support to flood-affected residents on the ground*

*Flooded streets of Shagari Phase 2 in Yola, Adamawa State, Nigeria (Photo credit: Saduwo Banyawa/HumAngle)*

{{< /card >}}

{{< /cards >}}

### Background

On July 27, 2025, a devastating flood occurred in Yola South Local Government Area (LGA) in Adamawa State in Nigeria. Choci river, a tributary of the Benue river, overflowed its banks, flooding multiple communities. Adamawa State Emergency Management Agency (AdSEMA) reported nine fatalities and dozens of injuries, with more than 550 households affected, resulting in > 3,000 displaced people, primarily across Sabon Pegi, Shagari Phase 2, Lakare, and other settlements ([<u>UN OCHA, 2025</u>](https://www.unocha.org/publications/report/nigeria/nigeria-floods-yola-adamawa-state-flash-update-1-29-july-2025)).

In the days that followed the onset of this event, [<u>Confluence Risk Mitigation</u>](https://www.confluence.eco/) (NGO) performed a rapid risk assessment and led a 2-day field campaign to collect ground truth data and map affected areas. This effort was made possible in coordination with volunteers of Global Shapers Yola, a local affiliation of the World Economic Forum. A parallel 10-day campaign was conducted to translate insights into action on the ground by providing hands-on support to flood-affected residents.

### Rapid risk assessment: Data and methods

In this context, flood risk describes the combined effects of three components: hazard (flood extent and depth, driven by proximity to rivers and topography), exposure (the presence of people, buildings, and infrastructure in affected areas), and vulnerability (the susceptibility of local building types and households to sustain damage).

Relatively cloud-free and open optical satellite data at medium (10 m) spatial resolution was available on July 29, 2025 - two days following the onset of the flood event. [<u>UNOSAT´s satellite-detected water extent</u>](https://unosat.org/products/4161) derived with the Sentinel-2 image was combined with [<u>OpenStreetMap´s water data</u>](https://data.humdata.org/dataset/hotosm_nga_waterways) as an initial reference, while acknowledging that the flood peak had passed and some of the floodwaters had receded (Figure 1).

{{< figure src="/images/figure-1-reference-water-extent-mapping-300dpi-v1.png" >}}

***Figure 1.** Reference water extents are mapped by combining OpenStreetMaps waterbodies and UNOSAT’s preliminary analysis of satellite-detected water extent*
{.center .muted .small}

Contour maps were derived with a commercial NextMap Digital Surface Model (DSM) at 6 m spatial resolution and with open access ALOS DSM at 30 m spatial resolution. The workflow was automated using the QGIS Graphical Modeller tool to ensure reproducibility. The steps carried out involve the following (Figure 2): DSM reprojection, fill sinks, Gaussian filter application, and contour generation. The Gaussian filter is a key step in the analysis given that both inputs are digital surface models.

{{< figure src="/images/figure-2-schematic-model-designer-workflow-300dpi-v0.png" >}}

***Figure 2.** Schematic diagram of automated workflow to generate contour maps using Graphical Modeller in QGIS*
{.center .muted .small}

As a rule of thumb, contour lines should be spaced at least twice as far apart as the vertical accuracy of the topographic model being used. Since the NextMap DSM has a [<u>vertical accuracy of about 3 m</u>](https://docs.up42.com/data/nextmap), we produced 5 m and 15 m contour maps. For the ALOS DSM, which has a lower accuracy of 10–14 m, we generated 20 m and 30 m contour maps. A 15 m contour map from the ALOS DSM was also created for comparison purposes (Figure 3), but this map is less reliable and more likely to contain noise.

The comparison highlights the ability to capture finer-scale terrain features that influence water flow and flood extents derived with the higher resolution model. This supports the identification of more precise floodplain boundaries and localized flood hazards, whereas contours derived with the coarser model (ALOS DSM) are relatively more generalized. Lower spatial resolution, which results in limited ability to capture terrain variability, can result in over- or under-estimation of flood-prone areas. While it remains helpful to generate flood risk maps with open data (e.g., globally available 30 m resolution topographic data), especially in data-scarce areas and to provide a high-level overview, the use of higher resolution topographic models is recommended when possible, as it provides notable improvements to accuracy and reliability.

{{< figure src="/images/figure-3-dsm-comparison-15m-contours-300dpi-v1.png" >}}

***Figure 3**. Comparison of 15 m contours generated with DSMs at different spatial resolutions within the area of interest (AOI): ALOS 30 m (A) and NextMap 6 m (B)*
{.center .muted .small}

### Insights to action - Emergency relief

While Adamawa is among the riverine states identified for anticipatory action in a government and UN OCHA-coordinated framework to mitigate flood risk, this particular event did not meet the triggers set for the release of pre-arranged funds ([<u>UN OCHA, 2025</u>](https://www.unocha.org/publications/report/nigeria/nigeria-floods-yola-adamawa-state-flash-update-1-29-july-2025)).

The final flood risk assessment (Figure 4) opted to use combined water extents with the 5 m contour map derived with the higher resolution NextMap DSM and field validation data. High risk areas mostly correspond to the floodplains of the Benue river, which is situated in low lying areas downstream of the Choci River. This assessment was used to identify communities located in the medium flood risk zone adjacent to the Choci River, with observed flood depths > 1 m. It is often such communities that are located outside of relatively higher risk zones that have also sustained damages but remain underserved.

{{< figure src="/images/figure-4-nextmap-dsm-5m-contours-field-validation-300dpi-v1.png" >}}

***Figure 4**. Flood risk assessment based on 5 m contour map derived from NextMap DSM (6 m), overlaid with locations of field validation data and area of Confluence-led local relief activities*
{.center .muted .small}

To provide immediate relief to flood-affected residents here, 22 volunteers from local communities helped clear debris and mud from 60 residences and access ways to approximately 150 buildings over the course of 10 days (Figure 5). The campaign offered opportunities to speak with residents to gain insights about flood impacts. In particular, multiple residents expressed feeling overwhelmed by the task of clearing debris on their own, to the extent of avoiding or abandoning entire rooms within their residences. Another resident explained that volunteer efforts eliminated the increased presence of dangerous animals such as snakes, which often seek temporary shelter in debris and can pose danger to people. Residents expressed gratitude for the dedicated and unexpected work of the volunteers.

{{< figure src="/images/figure-5-volunteer-campaign-300dpi-v0.png" >}}

***Figure 5**. Impressions from relief efforts in the community to support flood-affected residents*
{.center .muted .small}

### Insights to action - Future flood risk reduction and recommendations

Integration of local knowledge of the area also provided additional insights towards future flood impact reduction and mitigation efforts. In particular, buildings in the affected area are predominantly sandcrete blocks, which are constructed with low conformity to building standards, resulting in moderate to high vulnerability to flooding. Flood depths of about 1 m, which were observed in the aftermath of the event, are likely to have caused significant damage, such as partial or complete collapse of load bearing walls or columns. It is important that local authorities should consider building typology as a risk driver in the context of emergency and disaster risk reduction planning. Residents returning to their homes, especially in areas where high flood depths were observed (e.g., around 1 m) should consult with experts to inspect buildings for structural deformation (e.g., signs of minor or major cracks on load bearing walls). A detailed building vulnerability and damage assessment is also recommended for the area to assess damage potential and mitigation measures over a range of flood depth scenarios.

Furthermore, areas in the vicinity of the Jimeta-Yola Road, particularly locations near the Yola roundabout (Jippu Jam), lie within the floodplains of the Choci and Benue Rivers. Developments in these areas are likely to affect water storage and increase flood risk in adjacent locations, especially Yolde Parte and Shagari Phases 1 & 2. Any planned development in these areas should be assessed within a wider flood risk framework. It will be beneficial to consider options for natural flood management, such as upstream storage on the Choci River, as it will offer flood relief to the communities and attenuate inflows to the Benue river, especially at peak rainfall seasons.

There are still open questions as to whether the flood may have resulted from a breached dam in Bole, a village located several kilometres upstream of the Chochi River. While uncertainties around the cause of the flood persist, it is crucial that local authorities reassess flood risk in communities living downstream from dams or other sizable water retention infrastructures. Regular updates to assessments are instrumental to account for increased risks resulting from climate change (i.e., observed increases in frequency and intensity of rainfall events).

{{< /section >}}
