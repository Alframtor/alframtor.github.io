---
title: 'Prediction of Protein Secondary Structure using k-NN (Machine Learning)'
description: 'Third entry of the portfolio'
pubDate: 'Nov 5 2025'
heroImage: '../../assets/ML_portada.jpg'
---
### Context

Protein secondary structure ($alpha;-helix, $beta;-sheet, or coil) contains essential information about a protein's stability, function, and folding. When homologous proteins with known structure are unavailable, machine learning methods can be used to predict the secondary structure from the primary sequence.

This project focuses on predicting the secondary structure of the central amino acid within 17-residue windows, using data from proteins with known structures and applying a **k-Nearest Neighbors (k-NN) classifier**.

### Objective
- Prepare a dataset of protein sequences encoded using one-hot encoding.
- Develop a k-NN classifier to predict the structural classes: $\alpha$-helix (*h*), $\beta$-sheet (*e*), and coil (_).
- Evaluate the model's performance for different *k* values.
- Build a second binary classifier (coil vs non-coil) and analyze its performance using ROC curves and AUC.
- Compare results, identify patterns, and discuss which *k* values provide the best predictions.


### Methodology

The analysis was performed entirely in R.

##### 1. Data preparation and encoding

The data4.csv dataset was loaded, consisting of 10,000 17-amino acid windows and the central structural class.

The classes appeared unbalanced, with a clear predominance of the coil category. To apply the algorithm, all sequences were transformed using one-hot encoding.

A custom function was implemented that:
- Defines a dictionary of 20 amino acids.
- Generates a binary matrix of 340 columns per window (17 positions x 20 amino acids).
- Correctly assigns 1/0 values according to each residue.
- The function was validated against the output of oh_enc.csv, confirming its accuracy.

##### 2. Training-test split

The data was split into:
- 67% for training.
- 33% for testing. 

This was achieved using *createDataPartition()* to preserve the original class proportions.

##### 3. Multiclass classification (*h*, *e*, _)

A k-NN model was trained with *k* values: 1, 3, 5, 7, 11. The following metrics were evaluated:
- **Accuracy** (percentage of correct predictions).
