---
title: 'Genetic Variant Analysis in Exome Data (NGS)'
description: 'Second entry of the portfolio'
pubDate: 'Nov 5 2025'
heroImage: '../../assets/NGS_portada.jpg'
---
### Context

Minor allele variant analysis is a fundamental component of genomic studies, especially when working with exome sequencing. This project analyzed reads from sample **HG00128** of the 1000 Genomes Project, a female donor of British ancestry.

The goal was to implement a complete variant analysis pipeline starting from **paired-end FASTQ reads**, following NGS standard analysis best practices.


### Objectives

- Evaluate the quality of initial sequencing reads.
- Align sequences to the reference genome (hg38).
- Identify Single Nucleotide Variant (SNV) and Indels variants using variant calling tools.
- Functionally annotate the detected variants to infer their biological impact.
- Synthetically present the main results and the analysis limitations.


### Methodology

The analysis was performed entirely on the Galaxy Europe platform ($\text{usegalaxy.eu}$), following a standard exome sequencing pipeline:

##### 1. Data loading and preparation

Two paired FASTQ files (read1, read2) were randomly downloaded following the proposed procedure (seed based on the analyst's name). The data was uploaded to an empty Galaxy history to ensure analysis reproducibility.

##### 2. Quality Control

FASTQC was applied to each FASTQ file. The report showed:
- Adequate overall quality.
- Some quality drops in the initial/final bases.
- Slight differences between read1 and read2 (typical in paired-end sequencing). 
Given the goal of a simplified pipeline version, no additional trimming was applied.

<div class="cuadricula-1x2">
  <img src="/assets/FASTQC_1.png" alt="FASTQC_1" />
  <img src="/assets/FASTQC_2.png" alt="FASTQC_2" />
</div>

##### 3. Alignment to reference genome

