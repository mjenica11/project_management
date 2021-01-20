graph TD
  A[Raw RNA seq data] --> B{{Trimmomatic: MAXIMUMINFORMATION}} 
  B --> |Strictness = 0.1| C(Quantification)
  B --> |Strictness = 0.5| D(Quantification)
  B --> |Strictness = 0.9| E(Quantification)
  C --> F(Differential Expression)
  D --> G(Differential Expression)
  E --> H(Differential Expression)
  F --> I[(Intersection of sex-differential expression results)]
  G --> I[(Intersection of sex-differential expression results)]
  H --> I[(Intersection of sex-differential expression results)]
  
