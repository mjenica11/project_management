graph TD
  A[Raw RNA seq data] --> B{{Trimmomatic: SLIDINGWINDOW}} 
  B --> |windowSize = 4| C(Quantification)
  B --> |windowSize = 8| D(Quantification)
  B --> |windowSize = 12| E(Quantification)
  C --> F(Differential Expression)
  D --> G(Differential Expression)
  E --> H(Differential Expression)
  F --> I[(Intersection of sex-differential expression results)]
  G --> I[(Intersection of sex-differential expression results)]
  H --> I[(Intersection of sex-differential expression results)]
  
