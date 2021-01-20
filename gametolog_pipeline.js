graph TD
  A[RNA seq data: 3 male + 3 female] --> B{{Trimmomatic: MAXINFO}} 
  B --> |strictness = 0.1| C(Processed data: Set A)
  B --> |strictness = 0.5| D(Processed data: Set B)
  B --> |strictness = 0.9| E(Processed data: Set C)
  C --> F{{Quantifiction}}
  D --> F{{Quantifiction}}
  E --> F{{Quantifiction}}
  F --> G{{Differential Expression}}
  G --> |Set A| I[(X-linked gametolog results)]
  G --> |Set B| I[(X-linked gametolog results)]
  G --> |Set C| I[(X-linked gametolog results)]
  G --> |Set A| J[(X + Y-linked gametolog results)]
  G --> |Set B| J[(X + Y-linked gametolog results)]
  G --> |Set C| J[(X + Y-linked gametolog results)]
