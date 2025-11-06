---
title: 'Differential Gene Expression Analysis in Viral and Bacterial Infections (RNA-seq)'
description: 'First entry of the portfolio'
pubDate: 'Nov 5 2025'
heroImage: '../../assets/ARN.jpg'
---
### Context
This project addresses the analysis of RNA-seq data from the study by McClain et al. (GEO: GSE161731), which includes peripheral blood samples from individuals with COVID-19, bacterial infections, and healthy controls.

The primary objective was to perform a complete differential expression analysis pipeline to identify the genes and biological processes involved in the specific response to COVID-19.


### Objectives

- Process and explore an RNA-seq dataset corresponding to three cohorts: Healthy, Bacterial, and COVID-19.
- Identify potential confounding variables that could affect gene expression.
- Detect differentially expressed genes (DEGs) in the contrasts Bacterial vs Healthy and COVID-19 vs Healthy.
- Biologically interpret the results through functional enrichment analysis.


### Methodology

The analysis was developed entirely in R using packages from the Bioconductor ecosystem.

#### 1. Data acquisition and preparation

The count matrix and metadata were downloaded from GEO. After reviewing the dataset's integrity, duplicates per individual were removed, and clinical variables (age, race, cohort, and batch) were homogenized.
Subsequently, 75 samples were randomly selected. A SummarizedExperiment object was constructed, integrating:
- The cleaned count matrix.
- The tidy metadata.
- Gene annotations retrieved using EnsDb.Hsapiens.v113.

![SummarizedExperiment](../../assets/SummarizedExperiment.png)
