---
title: "Open-Source Geoportal in the cloud enables the Ministry in Peru with the implementation of a SDI Node"
date: "2023-10-27"
kicker: "GIZ Update"
headline: "Open-Source Geoportal in the cloud enables the Ministry in Peru with the implementation of a SDI Node"
image: "/images/picture12-2.png"
thumbnail: "/images/picture12.png"
categories: ["Case Study"]
---

{{< section >}}

### Background

The Ministry of Development and Social Inclusion (MIDIS) has proposed the need to implement its Spatial Data Infrastructure (SDI), which allow them to access standardized and updated geographic information produced by affiliated national programs through internet-based interoperability protocols. This would help to improve the management of social interventions with territorial approach.

The SDI aims at facilitating access to standardized geospatial data promoting interoperability following Open Geospatial Consortium and ISO standards. The key platform to access, visualize and sharing georeferenced data the ministry and its national programs produce, is a Geoportal.

{{< textpic image="/images/picture9.png" side="right" caption="Diagram of MIDIS Geoportal" layout="wrap" >}}

**The Geoportal Project India-Peru-Germany has been implemented since 2022 with the support of the GIZ and the expertise of the Ministry of Rural Development from India. T**he objectives of this project are: 1) Provide a geographic data management tool to ensure proper allocation of resources for social interventions under the National Policy for Social Development and Inclusion, 2) Optimize the planning, monitoring and evaluation of social protection interventions nationwide, based on evidence identifying the neediest areas and closing gaps in access to social services, and 3) Identify the most vulnerable population in need of assistance, even in the face of natural disasters, the project helps to reduce social vulnerability.

Two target groups were identified: a) MIDIS officials who will be able to integrate geospatial data for analysis and decision-making, and b) vulnerable population, who benefit from improved opportunity and quality of services.

The project´s impact lies in aiding the implementation of the ministry´s spatial data infrastructure, providing management tools to ministry decision-makers, and ultimately enhancing the quality of life for the country´s poorest and most vulnerable populations.

### Roadmap for implementing the MIDIS SDI

{{< /textpic >}}

{{< figure src="/images/sans-titre.jpg" caption="There are activities in the roadmap labeled as “In House” that MIDIS must carry out since ministerial approval documentation is required." >}}

### Diagnosis of geospatial information

Several work meetings (32) have been held with the participation of the workgroup members to identify: a) the geospatial data they produce, b) the current process of managing geospatial data from gathering to distribution, c) the TI infrastructure, d) the resources each national program has.

### Feature catalogue

This technical document contains definitions and descriptions of the feature types, feature attributes, and feature relationships occurring in one or more sets of geographic data. A standard feature catalogue will reduce costs of data acquisition and provides the structure of the objects to be stored in a geospatial database. 41 geographic objects have been identified, organized into 1 theme and 9 groups.

### Processes to improve the management of geospatial data

After understanding the current geospatial data management processes within the ministry and its national program, it is necessary to develop the improvement processes for managing them in the frame of the SDI. Along several weeks 22 work meetings have been conducted to elaborate on theses improvement processes.

{{< textpic image="/images/picture11.png" side="right" caption="Geoportal architecture" >}}

### Architecture design

This is the first time a ministry decides to implement a SDI using 100% open-source software, ensuring the sustainability of the Geoportal by not requiring payment for commercial licenses.

The National Digital Government Platform of the Presidency of the Council of Ministers has provided the Cloud infrastructure to host the MIDIS Geoportal, ensuring the scalability of resources when needed. The table below describes the minimum requirements for the Geoportal system.

### Database implementation

Based on the feature catalogue the spatial database is implemented using open source PostresSQL/PostGIS.

{{< /textpic >}}

{{< textpic images="/images/picture13.png,/images/picture14.png" side="left" >}}

### Design and implementation of the Geoportal and the geographical viewers

In the design of the geoportal, the content, icons, colors, and sections are established.

The MIDIS Geoportal is a web platform that contains all components of the SDI, such as the feature catalogue, standards, metadata catalogue, geographic viewer, OGC interoperable services, and specialized geo-viewers.

The ministry not only implements one geographic viewer but also requires two additional thematic applications based on the identification of two use cases. The viewers are: a) Geographic access to services, which shows on maps the distance expressed in times from a social infrastructure such as schools, health infrastructure, bank agencies, child care center services, Action Platforms for Social Inclusion-TAMBOS among others to towns, and b) Territorial Presence and Social Programs Coverage, which displays through heat maps the territorial coverage of MIDIS interventions. This is very useful for identifying gaps in access to social services.

{{< /textpic >}}

### OGC interoperable services

It has been considered to use Geoserver which display spatial information and promotes interoperability by implementing standards of the Open Geospatial Consortium like the Web Map Service (WMS) and the Web Feature Service (WFS).

### Metadata catalogue

For metadata generation, Geonetwork has been used, which is a catalogue application for managing georeferenced data. It is a powerful open-source tool that provides powerful functionalities for searching and editing metadata. It is based on OGC and ISO standards like the ISO 19115 for metadata and the ISO 19135 for item registration.

### Deploy and testing

Currently the Geoportal is in the testing phase, thus the URL cannot be shared yet for the thematic viewer nor the metadata catalogue. After the testing phase is successfully completed, the geoportal will be publicly accessible, and we can share the web address.

{{< /section >}}
