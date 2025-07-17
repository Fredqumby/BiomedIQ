const QUESTIONS = [
    {
        "id": 1,
        "question": "Which field of genetics studies the inheritance patterns in populations?",
        "options": [
            "Molecular genetics",
            "Population genetics",
            "Classical genetics",
            "Epigenetics"
        ],
        "answer": "Population genetics",
        "difficulty": "easy",
        "topic": "Introduction to Genetics",
        "explanation": "Population genetics examines allele frequencies and genetic variation within populations."
    },
    {
        "id": 2,
        "question": "Who is considered the father of modern genetics due to his work with pea plants?",
        "options": [
            "Charles Darwin",
            "Gregor Mendel",
            "James Watson",
            "Francis Crick"
        ],
        "answer": "Gregor Mendel",
        "difficulty": "easy",
        "topic": "Introduction to Genetics",
        "explanation": "Gregor Mendel established the principles of inheritance through experiments with pea plants."
    },
    {
        "id": 3,
        "question": "Which application of genetics improves crop resistance to pests?",
        "options": [
            "Gene therapy",
            "Genetic counseling",
            "Genetically modified organisms",
            "Karyotyping"
        ],
        "answer": "Genetically modified organisms",
        "difficulty": "easy",
        "topic": "Introduction to Genetics",
        "explanation": "GMOs are engineered to express traits like pest resistance, enhancing agricultural yields."
    },
    {
        "id": 4,
        "question": "Which law states that alleles segregate independently during gamete formation?",
        "options": [
            "Law of Dominance",
            "Law of Segregation",
            "Law of Independent Assortment",
            "Law of Probability"
        ],
        "answer": "Law of Independent Assortment",
        "difficulty": "medium",
        "topic": "Mendelian Genetics",
        "explanation": "Mendel’s Law of Independent Assortment applies to genes on different chromosomes."
    },
    {
        "id": 5,
        "question": "What is the phenotypic ratio of a monohybrid cross between two heterozygous parents?",
        "options": [
            "1:1",
            "3:1",
            "1:2:1",
            "9:3:3:1"
        ],
        "answer": "3:1",
        "difficulty": "medium",
        "topic": "Mendelian Genetics",
        "explanation": "A monohybrid cross (Aa x Aa) yields a 3:1 phenotypic ratio (dominant:recessive)."
    },
    {
        "id": 6,
        "question": "Which tool is used to predict the outcomes of genetic crosses?",
        "options": [
            "Karyotype",
            "Punnett square",
            "Pedigree chart",
            "Gel electrophoresis"
        ],
        "answer": "Punnett square",
        "difficulty": "easy",
        "topic": "Mendelian Genetics",
        "explanation": "Punnett squares visualize allele combinations and predict offspring genotypes."
    },
    {
        "id": 7,
        "question": "What is a test cross used to determine?",
        "options": [
            "Phenotype",
            "Genotype",
            "Allele frequency",
            "Mutation rate"
        ],
        "answer": "Genotype",
        "difficulty": "medium",
        "topic": "Mendelian Genetics",
        "explanation": "A test cross with a homozygous recessive individual reveals an unknown genotype."
    },
    {
        "id": 8,
        "question": "Which inheritance pattern results in a blended phenotype in heterozygotes?",
        "options": [
            "Codominance",
            "Incomplete dominance",
            "Polygenic inheritance",
            "Epistasis"
        ],
        "answer": "Incomplete dominance",
        "difficulty": "medium",
        "topic": "Extensions of Mendelian Genetics",
        "explanation": "Incomplete dominance produces an intermediate phenotype, like pink flowers in snapdragons."
    },
    {
        "id": 9,
        "question": "Which blood type exhibits codominance in the ABO blood group system?",
        "options": [
            "Type A",
            "Type B",
            "Type AB",
            "Type O"
        ],
        "answer": "Type AB",
        "difficulty": "medium",
        "topic": "Extensions of Mendelian Genetics",
        "explanation": "Type AB expresses both A and B antigens, demonstrating codominance."
    },
    {
        "id": 10,
        "question": "Which term describes a single gene affecting multiple traits?",
        "options": [
            "Epistasis",
            "Pleiotropy",
            "Polygenic inheritance",
            "Lethal allele"
        ],
        "answer": "Pleiotropy",
        "difficulty": "medium",
        "topic": "Extensions of Mendelian Genetics",
        "explanation": "Pleiotropy occurs when one gene influences multiple phenotypic traits."
    },
    {
        "id": 11,
        "question": "Which inheritance pattern involves one gene masking the expression of another?",
        "options": [
            "Codominance",
            "Epistasis",
            "Incomplete dominance",
            "Polygenic inheritance"
        ],
        "answer": "Epistasis",
        "difficulty": "hard",
        "topic": "Extensions of Mendelian Genetics",
        "explanation": "Epistasis occurs when one gene’s product affects the expression of another gene."
    },
    {
        "id": 12,
        "question": "Which type of chromosome determines an individual’s sex in humans?",
        "options": [
            "Autosome",
            "Sex chromosome",
            "Mitochondrial chromosome",
            "Plasmid"
        ],
        "answer": "Sex chromosome",
        "difficulty": "easy",
        "topic": "Chromosomal Basis of Inheritance",
        "explanation": "Sex chromosomes (X and Y in humans) determine biological sex."
    },
    {
        "id": 13,
        "question": "Which technique visualizes an individual’s chromosome set?",
        "options": [
            "PCR",
            "Karyotyping",
            "Gel electrophoresis",
            "FISH"
        ],
        "answer": "Karyotyping",
        "difficulty": "easy",
        "topic": "Chromosomal Basis of Inheritance",
        "explanation": "Karyotyping arranges chromosomes to identify abnormalities in number or structure."
    },
    {
        "id": 14,
        "question": "Which inheritance pattern is associated with hemophilia A?",
        "options": [
            "Autosomal dominant",
            "Autosomal recessive",
            "X-linked recessive",
            "Y-linked"
        ],
        "answer": "X-linked recessive",
        "difficulty": "medium",
        "topic": "Chromosomal Basis of Inheritance",
        "explanation": "Hemophilia A is caused by a recessive mutation on the X chromosome."
    },
    {
        "id": 15,
        "question": "What process during meiosis creates new allele combinations on chromosomes?",
        "options": [
            "Independent assortment",
            "Crossing over",
            "Segregation",
            "Mutation"
        ],
        "answer": "Crossing over",
        "difficulty": "medium",
        "topic": "Chromosomal Basis of Inheritance",
        "explanation": "Crossing over exchanges genetic material between homologous chromosomes."
    },
    {
        "id": 16,
        "question": "Which molecule serves as the template for protein synthesis?",
        "options": [
            "DNA",
            "mRNA",
            "tRNA",
            "rRNA"
        ],
        "answer": "mRNA",
        "difficulty": "easy",
        "topic": "Molecular Genetics",
        "explanation": "mRNA carries the genetic code from DNA to ribosomes for translation."
    },
    {
        "id": 17,
        "question": "Which enzyme unwinds the DNA double helix during replication?",
        "options": [
            "DNA polymerase",
            "Helicase",
            "Ligase",
            "Primase"
        ],
        "answer": "Helicase",
        "difficulty": "medium",
        "topic": "Molecular Genetics",
        "explanation": "Helicase separates DNA strands to allow replication."
    },
    {
        "id": 18,
        "question": "Which process removes introns from pre-mRNA?",
        "options": [
            "Transcription",
            "Translation",
            "Splicing",
            "Replication"
        ],
        "answer": "Splicing",
        "difficulty": "medium",
        "topic": "Molecular Genetics",
        "explanation": "Splicing removes non-coding introns, joining exons to form mature mRNA."
    },
    {
        "id": 19,
        "question": "Which molecule delivers amino acids to the ribosome during translation?",
        "options": [
            "mRNA",
            "tRNA",
            "rRNA",
            "DNA"
        ],
        "answer": "tRNA",
        "difficulty": "easy",
        "topic": "Molecular Genetics",
        "explanation": "tRNA matches codons to amino acids during protein synthesis."
    },
    {
        "id": 20,
        "question": "Which model describes inducible gene regulation in bacteria?",
        "options": [
            "Lac operon",
            "Trp operon",
            "Hox gene regulation",
            "Histone modification"
        ],
        "answer": "Lac operon",
        "difficulty": "medium",
        "topic": "Gene Regulation and Expression",
        "explanation": "The lac operon is induced by lactose to regulate lactose metabolism in bacteria."
    },
    {
        "id": 21,
        "question": "Which epigenetic modification silences gene expression?",
        "options": [
            "DNA methylation",
            "Histone acetylation",
            "RNA interference",
            "Chromatin remodeling"
        ],
        "answer": "DNA methylation",
        "difficulty": "medium",
        "topic": "Gene Regulation and Expression",
        "explanation": "DNA methylation adds methyl groups to DNA, typically repressing gene expression."
    },
    {
        "id": 22,
        "question": "Which small RNA molecule inhibits gene expression post-transcriptionally?",
        "options": [
            "mRNA",
            "tRNA",
            "miRNA",
            "rRNA"
        ],
        "answer": "miRNA",
        "difficulty": "medium",
        "topic": "Gene Regulation and Expression",
        "explanation": "MicroRNAs (miRNAs) bind to mRNA, preventing translation or promoting degradation."
    },
    {
        "id": 23,
        "question": "Which transcription factor binds to promoter regions in eukaryotes?",
        "options": [
            "RNA polymerase",
            "TATA-binding protein",
            "Ribosome",
            "DNA ligase"
        ],
        "answer": "TATA-binding protein",
        "difficulty": "hard",
        "topic": "Gene Regulation and Expression",
        "explanation": "TATA-binding protein initiates transcription by binding to the TATA box in promoters."
    },
    {
        "id": 24,
        "question": "Which type of mutation changes a single nucleotide base?",
        "options": [
            "Frameshift",
            "Point",
            "Deletion",
            "Insertion"
        ],
        "answer": "Point",
        "difficulty": "easy",
        "topic": "Mutation and DNA Repair",
        "explanation": "Point mutations involve the substitution of one nucleotide for another."
    },
    {
        "id": 25,
        "question": "Which mutagen causes DNA damage through UV radiation?",
        "options": [
            "Chemical agent",
            "Physical agent",
            "Biological agent",
            "Spontaneous error"
        ],
        "answer": "Physical agent",
        "difficulty": "medium",
        "topic": "Mutation and DNA Repair",
        "explanation": "UV radiation, a physical mutagen, causes DNA damage like thymine dimers."
    },
    {
        "id": 26,
        "question": "Which DNA repair mechanism corrects thymine dimers?",
        "options": [
            "Base excision repair",
            "Nucleotide excision repair",
            "Mismatch repair",
            "Homologous recombination"
        ],
        "answer": "Nucleotide excision repair",
        "difficulty": "medium",
        "topic": "Mutation and DNA Repair",
        "explanation": "Nucleotide excision repair removes bulky lesions like thymine dimers."
    },
    {
        "id": 27,
        "question": "Which mutation has no effect on protein function?",
        "options": [
            "Missense",
            "Nonsense",
            "Silent",
            "Frameshift"
        ],
        "answer": "Silent",
        "difficulty": "easy",
        "topic": "Mutation and DNA Repair",
        "explanation": "Silent mutations do not alter the amino acid sequence due to codon redundancy."
    },
    {
        "id": 28,
        "question": "Which disorder is caused by a mutation in the CFTR gene?",
        "options": [
            "Sickle cell anemia",
            "Cystic fibrosis",
            "Down syndrome",
            "Turner syndrome"
        ],
        "answer": "Cystic fibrosis",
        "difficulty": "easy",
        "topic": "Genetic Disorders",
        "explanation": "Cystic fibrosis results from a recessive mutation in the CFTR gene."
    },
    {
        "id": 29,
        "question": "Which chromosomal disorder is caused by trisomy 21?",
        "options": [
            "Klinefelter syndrome",
            "Turner syndrome",
            "Down syndrome",
            "Fragile X syndrome"
        ],
        "answer": "Down syndrome",
        "difficulty": "easy",
        "topic": "Genetic Disorders",
        "explanation": "Down syndrome is caused by an extra copy of chromosome 21."
    },
    {
        "id": 30,
        "question": "Which disorder results from a defect in hemoglobin production?",
        "options": [
            "Phenylketonuria",
            "Sickle cell anemia",
            "Cystic fibrosis",
            "Tay-Sachs disease"
        ],
        "answer": "Sickle cell anemia",
        "difficulty": "medium",
        "topic": "Genetic Disorders",
        "explanation": "Sickle cell anemia is caused by a mutation in the hemoglobin-beta gene."
    },
    {
        "id": 31,
        "question": "Which condition is an example of an inborn error of metabolism?",
        "options": [
            "Phenylketonuria",
            "Hemophilia",
            "Down syndrome",
            "Klinefelter syndrome"
        ],
        "answer": "Phenylketonuria",
        "difficulty": "medium",
        "topic": "Genetic Disorders",
        "explanation": "Phenylketonuria is caused by a deficiency in phenylalanine hydroxylase."
    },
    {
        "id": 32,
        "question": "Which term describes the collection of alleles in a population?",
        "options": [
            "Genotype",
            "Phenotype",
            "Gene pool",
            "Allele frequency"
        ],
        "answer": "Gene pool",
        "difficulty": "easy",
        "topic": "Population Genetics",
        "explanation": "The gene pool includes all alleles present in a population."
    },
    {
        "id": 33,
        "question": "Which condition must be met for Hardy-Weinberg equilibrium?",
        "options": [
            "High mutation rate",
            "Random mating",
            "Small population size",
            "Strong selection"
        ],
        "answer": "Random mating",
        "difficulty": "medium",
        "topic": "Population Genetics",
        "explanation": "Random mating ensures allele frequencies remain stable in Hardy-Weinberg equilibrium."
    },
    {
        "id": 34,
        "question": "Which factor disrupts Hardy-Weinberg equilibrium by chance in small populations?",
        "options": [
            "Mutation",
            "Genetic drift",
            "Natural selection",
            "Gene flow"
        ],
        "answer": "Genetic drift",
        "difficulty": "medium",
        "topic": "Population Genetics",
        "explanation": "Genetic drift causes random changes in allele frequencies in small populations."
    },
    {
        "id": 35,
        "question": "Which measure quantifies genetic variation in a population?",
        "options": [
            "Heritability",
            "Allele frequency",
            "Polymorphism",
            "Genotype ratio"
        ],
        "answer": "Polymorphism",
        "difficulty": "medium",
        "topic": "Population Genetics",
        "explanation": "Polymorphisms are variations in DNA sequences among individuals."
    },
    {
        "id": 36,
        "question": "Which type of trait is controlled by multiple genes?",
        "options": [
            "Monogenic trait",
            "Quantitative trait",
            "Dominant trait",
            "Recessive trait"
        ],
        "answer": "Quantitative trait",
        "difficulty": "easy",
        "topic": "Quantitative Genetics",
        "explanation": "Quantitative traits, like height, are influenced by multiple genes."
    },
    {
        "id": 37,
        "question": "Which term describes the proportion of phenotypic variation due to genetics?",
        "options": [
            "Polymorphism",
            "Heritability",
            "Recombination",
            "Epistasis"
        ],
        "answer": "Heritability",
        "difficulty": "medium",
        "topic": "Quantitative Genetics",
        "explanation": "Heritability measures the genetic contribution to phenotypic variation."
    },
    {
        "id": 38,
        "question": "Which study compares identical and fraternal twins to assess heritability?",
        "options": [
            "Pedigree analysis",
            "Twin study",
            "Linkage mapping",
            "Genome-wide association study"
        ],
        "answer": "Twin study",
        "difficulty": "medium",
        "topic": "Quantitative Genetics",
        "explanation": "Twin studies compare concordance rates to estimate genetic influences."
    },
    {
        "id": 39,
        "question": "Which factor influences quantitative traits alongside genetics?",
        "options": [
            "Environment",
            "Mutation",
            "Recombination",
            "Selection"
        ],
        "answer": "Environment",
        "difficulty": "easy",
        "topic": "Quantitative Genetics",
        "explanation": "Genotype-environment interactions shape quantitative traits."
    },
    {
        "id": 40,
        "question": "Which technique amplifies specific DNA sequences?",
        "options": [
            "Gel electrophoresis",
            "PCR",
            "Cloning",
            "CRISPR"
        ],
        "answer": "PCR",
        "difficulty": "easy",
        "topic": "Genetic Engineering and Biotechnology",
        "explanation": "Polymerase Chain Reaction (PCR) amplifies DNA for analysis or cloning."
    },
    {
        "id": 41,
        "question": "Which tool is used for precise gene editing in organisms?",
        "options": [
            "PCR",
            "Gel electrophoresis",
            "CRISPR-Cas9",
            "Cloning vector"
        ],
        "answer": "CRISPR-Cas9",
        "difficulty": "medium",
        "topic": "Genetic Engineering and Biotechnology",
        "explanation": "CRISPR-Cas9 targets specific DNA sequences for editing."
    },
    {
        "id": 42,
        "question": "Which technique separates DNA fragments by size?",
        "options": [
            "PCR",
            "Gel electrophoresis",
            "FISH",
            "Cloning"
        ],
        "answer": "Gel electrophoresis",
        "difficulty": "easy",
        "topic": "Genetic Engineering and Biotechnology",
        "explanation": "Gel electrophoresis uses an electric field to separate DNA by size."
    },
    {
        "id": 43,
        "question": "Which organism is an example of a genetically modified crop?",
        "options": [
            "Bt corn",
            "Wild rice",
            "Organic wheat",
            "Heirloom tomatoes"
        ],
        "answer": "Bt corn",
        "difficulty": "medium",
        "topic": "Genetic Engineering and Biotechnology",
        "explanation": "Bt corn is engineered to produce a bacterial toxin for pest resistance."
    },
    {
        "id": 44,
        "question": "Which project mapped the entire human DNA sequence?",
        "options": [
            "CRISPR Project",
            "Human Genome Project",
            "Proteomics Initiative",
            "Encode Project"
        ],
        "answer": "Human Genome Project",
        "difficulty": "easy",
        "topic": "Genomics and Proteomics",
        "explanation": "The Human Genome Project sequenced the human genome, completed in 2003."
    },
    {
        "id": 45,
        "question": "Which field analyzes protein expression in cells?",
        "options": [
            "Genomics",
            "Transcriptomics",
            "Proteomics",
            "Bioinformatics"
        ],
        "answer": "Proteomics",
        "difficulty": "medium",
        "topic": "Genomics and Proteomics",
        "explanation": "Proteomics studies the structure and function of proteins in cells."
    },
    {
        "id": 46,
        "question": "Which tool integrates genetic data for analysis?",
        "options": [
            "Bioinformatics",
            "Karyotyping",
            "FISH",
            "PCR"
        ],
        "answer": "Bioinformatics",
        "difficulty": "medium",
        "topic": "Genomics and Proteomics",
        "explanation": "Bioinformatics uses computational tools to analyze genetic and genomic data."
    },
    {
        "id": 47,
        "question": "Which technique compares genomes across species?",
        "options": [
            "Functional genomics",
            "Comparative genomics",
            "Transcriptomics",
            "Proteomics"
        ],
        "answer": "Comparative genomics",
        "difficulty": "medium",
        "topic": "Genomics and Proteomics",
        "explanation": "Comparative genomics identifies similarities and differences in genomes."
    },
    {
        "id": 48,
        "question": "Which technique visualizes chromosomes using specific DNA probes?",
        "options": [
            "Karyotyping",
            "FISH",
            "PCR",
            "Gel electrophoresis"
        ],
        "answer": "FISH",
        "difficulty": "medium",
        "topic": "Cytogenetics",
        "explanation": "Fluorescent in situ hybridization (FISH) uses probes to detect chromosomal regions."
    },
    {
        "id": 49,
        "question": "Which chromosomal aberration involves the loss of a chromosome segment?",
        "options": [
            "Translocation",
            "Inversion",
            "Deletion",
            "Duplication"
        ],
        "answer": "Deletion",
        "difficulty": "easy",
        "topic": "Cytogenetics",
        "explanation": "Deletion is the loss of a chromosome segment, potentially causing disorders."
    },
    {
        "id": 50,
        "question": "Which banding technique stains chromosomes for identification?",
        "options": [
            "G-banding",
            "FISH",
            "PCR",
            "Spectral karyotyping"
        ],
        "answer": "G-banding",
        "difficulty": "medium",
        "topic": "Cytogenetics",
        "explanation": "G-banding uses Giemsa stain to create unique chromosome patterns."
    },
    {
        "id": 51,
        "question": "Which genes regulate body segmentation in animals?",
        "options": [
            "Hox genes",
            "Lac operon",
            "Trp operon",
            "Tumor suppressor genes"
        ],
        "answer": "Hox genes",
        "difficulty": "medium",
        "topic": "Developmental Genetics",
        "explanation": "Hox genes control the body plan and segmentation during development."
    },
    {
        "id": 52,
        "question": "Which process is regulated by genes during embryonic development?",
        "options": [
            "Replication",
            "Differentiation",
            "Mutation",
            "Recombination"
        ],
        "answer": "Differentiation",
        "difficulty": "easy",
        "topic": "Developmental Genetics",
        "explanation": "Differentiation allows cells to specialize into specific types during development."
    },
    {
        "id": 53,
        "question": "Which cells have the potential to differentiate into any cell type?",
        "options": [
            "Somatic cells",
            "Stem cells",
            "Gametes",
            "Neurons"
        ],
        "answer": "Stem cells",
        "difficulty": "easy",
        "topic": "Developmental Genetics",
        "explanation": "Stem cells are pluripotent, capable of differentiating into various cell types."
    },
    {
        "id": 54,
        "question": "Which genetic process controls morphogenesis in embryos?",
        "options": [
            "Gene regulation",
            "DNA replication",
            "Protein synthesis",
            "Chromosomal crossing over"
        ],
        "answer": "Gene regulation",
        "difficulty": "medium",
        "topic": "Developmental Genetics",
        "explanation": "Gene regulation orchestrates cell shape and tissue formation in morphogenesis."
    },
    {
        "id": 55,
        "question": "Which process provides advice on genetic risks to families?",
        "options": [
            "Gene therapy",
            "Genetic counseling",
            "Prenatal screening",
            "CRISPR editing"
        ],
        "answer": "Genetic counseling",
        "difficulty": "easy",
        "topic": "Ethical, Legal, and Social Issues in Genetics",
        "explanation": "Genetic counseling informs families about inherited conditions and risks."
    },
    {
        "id": 56,
        "question": "Which technique detects genetic disorders in a fetus?",
        "options": [
            "PCR",
            "Prenatal screening",
            "Gel electrophoresis",
            "Cloning"
        ],
        "answer": "Prenatal screening",
        "difficulty": "easy",
        "topic": "Ethical, Legal, and Social Issues in Genetics",
        "explanation": "Prenatal screening tests for genetic abnormalities during pregnancy."
    },
    {
        "id": 57,
        "question": "Which ethical concern involves modifying embryos for non-medical traits?",
        "options": [
            "Eugenics",
            "Gene therapy",
            "Genetic privacy",
            "Informed consent"
        ],
        "answer": "Eugenics",
        "difficulty": "medium",
        "topic": "Ethical, Legal, and Social Issues in Genetics",
        "explanation": "Eugenics raises concerns about selecting traits like intelligence or appearance."
    },
    {
        "id": 58,
        "question": "Which therapy aims to correct defective genes in patients?",
        "options": [
            "Genetic counseling",
            "Gene therapy",
            "Prenatal screening",
            "CRISPR screening"
        ],
        "answer": "Gene therapy",
        "difficulty": "easy",
        "topic": "Ethical, Legal, and Social Issues in Genetics",
        "explanation": "Gene therapy introduces functional genes to treat genetic disorders."
    },
    {
        "id": 59,
        "question": "Which ratio is expected in a dihybrid cross of heterozygous parents?",
        "options": [
            "3:1",
            "1:2:1",
            "9:3:3:1",
            "1:1:1:1"
        ],
        "answer": "9:3:3:1",
        "difficulty": "medium",
        "topic": "Mendelian Genetics",
        "explanation": "A dihybrid cross (AaBb x AaBb) yields a 9:3:3:1 phenotypic ratio."
    },
    {
        "id": 60,
        "question": "Which term describes the physical appearance of an organism?",
        "options": [
            "Genotype",
            "Phenotype",
            "Allele",
            "Homozygote"
        ],
        "answer": "Phenotype",
        "difficulty": "easy",
        "topic": "Mendelian Genetics",
        "explanation": "Phenotype is the observable expression of an organism’s genes."
    },
    {
        "id": 61,
        "question": "Which inheritance pattern produces a 1:2:1 phenotypic ratio in a monohybrid cross?",
        "options": [
            "Complete dominance",
            "Incomplete dominance",
            "Codominance",
            "Epistasis"
        ],
        "answer": "Incomplete dominance",
        "difficulty": "medium",
        "topic": "Extensions of Mendelian Genetics",
        "explanation": "Incomplete dominance results in a 1:2:1 ratio due to a blended heterozygote phenotype."
    },
    {
        "id": 62,
        "question": "Which allele causes death when homozygous?",
        "options": [
            "Dominant allele",
            "Recessive allele",
            "Lethal allele",
            "Codominant allele"
        ],
        "answer": "Lethal allele",
        "difficulty": "medium",
        "topic": "Extensions of Mendelian Genetics",
        "explanation": "Lethal alleles cause death in homozygous individuals, like in some mouse coat colors."
    },
    {
        "id": 63,
        "question": "Which system determines sex in birds?",
        "options": [
            "XX/XY",
            "ZZ/ZW",
            "XO",
            "Haplodiploidy"
        ],
        "answer": "ZZ/ZW",
        "difficulty": "medium",
        "topic": "Chromosomal Basis of Inheritance",
        "explanation": "In birds, males are ZZ and females are ZW, unlike the XX/XY system in mammals."
    },
    {
        "id": 64,
        "question": "Which process increases genetic diversity by exchanging chromosomal segments?",
        "options": [
            "Mutation",
            "Recombination",
            "Segregation",
            "Transcription"
        ],
        "answer": "Recombination",
        "difficulty": "medium",
        "topic": "Chromosomal Basis of Inheritance",
        "explanation": "Recombination during crossing over shuffles alleles between chromosomes."
    },
    {
        "id": 65,
        "question": "Which DNA strand serves as the template during transcription?",
        "options": [
            "Coding strand",
            "Template strand",
            "Leading strand",
            "Lagging strand"
        ],
        "answer": "Template strand",
        "difficulty": "medium",
        "topic": "Molecular Genetics",
        "explanation": "The template strand is transcribed by RNA polymerase to produce mRNA."
    },
    {
        "id": 66,
        "question": "Which genetic code feature allows multiple codons to specify the same amino acid?",
        "options": [
            "Universality",
            "Degeneracy",
            "Specificity",
            "Continuity"
        ],
        "answer": "Degeneracy",
        "difficulty": "hard",
        "topic": "Molecular Genetics",
        "explanation": "Degeneracy reduces the impact of mutations by allowing codon redundancy."
    },
    {
        "id": 67,
        "question": "Which operon is repressed in the presence of tryptophan?",
        "options": [
            "Lac operon",
            "Trp operon",
            "Ara operon",
            "Gal operon"
        ],
        "answer": "Trp operon",
        "difficulty": "medium",
        "topic": "Gene Regulation and Expression",
        "explanation": "The trp operon is repressed when tryptophan binds to the repressor protein."
    },
    {
        "id": 68,
        "question": "Which histone modification promotes gene expression?",
        "options": [
            "Methylation",
            "Acetylation",
            "Phosphorylation",
            "Ubiquitination"
        ],
        "answer": "Acetylation",
        "difficulty": "medium",
        "topic": "Gene Regulation and Expression",
        "explanation": "Histone acetylation loosens chromatin, enhancing gene transcription."
    },
    {
        "id": 69,
        "question": "Which mutation shifts the reading frame of a gene?",
        "options": [
            "Point mutation",
            "Silent mutation",
            "Frameshift mutation",
            "Missense mutation"
        ],
        "answer": "Frameshift mutation",
        "difficulty": "easy",
        "topic": "Mutation and DNA Repair",
        "explanation": "Frameshift mutations insert or delete nucleotides, altering the codon sequence."
    },
    {
        "id": 70,
        "question": "Which repair mechanism corrects errors during DNA replication?",
        "options": [
            "Nucleotide excision repair",
            "Mismatch repair",
            "Base excision repair",
            "Double-strand break repair"
        ],
        "answer": "Mismatch repair",
        "difficulty": "medium",
        "topic": "Mutation and DNA Repair",
        "explanation": "Mismatch repair fixes base-pairing errors made during replication."
    },
    {
        "id": 71,
        "question": "Which disorder is caused by a single-gene recessive mutation on chromosome 7?",
        "options": [
            "Huntington’s disease",
            "Cystic fibrosis",
            "Down syndrome",
            "Klinefelter syndrome"
        ],
        "answer": "Cystic fibrosis",
        "difficulty": "medium",
        "topic": "Genetic Disorders",
        "explanation": "Cystic fibrosis is due to a recessive mutation in the CFTR gene on chromosome 7."
    },
    {
        "id": 72,
        "question": "Which disorder results from a missing X chromosome in females?",
        "options": [
            "Turner syndrome",
            "Klinefelter syndrome",
            "Down syndrome",
            "Fragile X syndrome"
        ],
        "answer": "Turner syndrome",
        "difficulty": "easy",
        "topic": "Genetic Disorders",
        "explanation": "Turner syndrome (XO) is caused by the absence of one X chromosome."
    },
    {
        "id": 73,
        "question": "Which equation represents Hardy-Weinberg equilibrium for two alleles?",
        "options": [
            "p + q = 1",
            "p^2 + q^2 = 1",
            "p^2 + 2pq + q^2 = 1",
            "pq = 1"
        ],
        "answer": "p^2 + 2pq + q^2 = 1",
        "difficulty": "medium",
        "topic": "Population Genetics",
        "explanation": "The equation describes genotype frequencies in a population at equilibrium."
    },
    {
        "id": 74,
        "question": "Which process introduces new alleles into a population?",
        "options": [
            "Genetic drift",
            "Mutation",
            "Natural selection",
            "Gene flow"
        ],
        "answer": "Mutation",
        "difficulty": "easy",
        "topic": "Population Genetics",
        "explanation": "Mutation creates new alleles, increasing genetic variation."
    },
    {
        "id": 75,
        "question": "Which factor affects quantitative traits like skin color?",
        "options": [
            "Single-gene inheritance",
            "Polygenic inheritance",
            "Codominance",
            "Lethal alleles"
        ],
        "answer": "Polygenic inheritance",
        "difficulty": "medium",
        "topic": "Quantitative Genetics",
        "explanation": "Polygenic inheritance involves multiple genes contributing to a trait."
    },
    {
        "id": 76,
        "question": "Which vector is used to introduce foreign DNA into cells?",
        "options": [
            "Plasmid",
            "PCR primer",
            "Probe",
            "Enzyme"
        ],
        "answer": "Plasmid",
        "difficulty": "easy",
        "topic": "Genetic Engineering and Biotechnology",
        "explanation": "Plasmids are circular DNA molecules used as cloning vectors."
    },
    {
        "id": 77,
        "question": "Which enzyme cuts DNA at specific recognition sites?",
        "options": [
            "DNA polymerase",
            "Restriction enzyme",
            "Ligase",
            "Helicase"
        ],
        "answer": "Restriction enzyme",
        "difficulty": "medium",
        "topic": "Genetic Engineering and Biotechnology",
        "explanation": "Restriction enzymes cleave DNA at palindromic sequences for cloning."
    },
    {
        "id": 78,
        "question": "Which technique sequences an entire organism’s DNA?",
        "options": [
            "Whole genome sequencing",
            "PCR",
            "Gel electrophoresis",
            "FISH"
        ],
        "answer": "Whole genome sequencing",
        "difficulty": "easy",
        "topic": "Genomics and Proteomics",
        "explanation": "Whole genome sequencing determines the complete DNA sequence of an organism."
    },
    {
        "id": 79,
        "question": "Which chromosomal aberration exchanges segments between non-homologous chromosomes?",
        "options": [
            "Deletion",
            "Inversion",
            "Translocation",
            "Duplication"
        ],
        "answer": "Translocation",
        "difficulty": "medium",
        "topic": "Cytogenetics",
        "explanation": "Translocation swaps segments between non-homologous chromosomes."
    },
    {
        "id": 80,
        "question": "Which genes control anterior-posterior axis formation in embryos?",
        "options": [
            "Tumor suppressor genes",
            "Hox genes",
            "Oncogenes",
            "Lac operon"
        ],
        "answer": "Hox genes",
        "difficulty": "medium",
        "topic": "Developmental Genetics",
        "explanation": "Hox genes specify segment identity along the body axis."
    },
    {
        "id": 81,
        "question": "Which ethical issue involves the use of genetic data without consent?",
        "options": [
            "Genetic privacy",
            "Eugenics",
            "Designer babies",
            "Gene patenting"
        ],
        "answer": "Genetic privacy",
        "difficulty": "medium",
        "topic": "Ethical, Legal, and Social Issues in Genetics",
        "explanation": "Genetic privacy concerns unauthorized access to an individual’s genetic information."
    },
    {
        "id": 82,
        "question": "Which inheritance pattern results in both alleles being expressed in heterozygotes?",
        "options": [
            "Incomplete dominance",
            "Codominance",
            "Epistasis",
            "Pleiotropy"
        ],
        "answer": "Codominance",
        "difficulty": "medium",
        "topic": "Extensions of Mendelian Genetics",
        "explanation": "Codominance allows both alleles to be fully expressed, like in AB blood type."
    },
    {
        "id": 83,
        "question": "Which structure packages DNA into chromosomes?",
        "options": [
            "Nucleosome",
            "Centromere",
            "Telomere",
            "Plasmid"
        ],
        "answer": "Nucleosome",
        "difficulty": "medium",
        "topic": "Chromosomal Basis of Inheritance",
        "explanation": "Nucleosomes, formed by histones and DNA, compact DNA into chromosomes."
    },
    {
        "id": 84,
        "question": "Which enzyme synthesizes RNA primers during DNA replication?",
        "options": [
            "DNA polymerase",
            "Primase",
            "Helicase",
            "Ligase"
        ],
        "answer": "Primase",
        "difficulty": "medium",
        "topic": "Molecular Genetics",
        "explanation": "Primase creates RNA primers for DNA polymerase to extend."
    },
    {
        "id": 85,
        "question": "Which RNA molecule forms part of the ribosome’s structure?",
        "options": [
            "mRNA",
            "tRNA",
            "rRNA",
            "miRNA"
        ],
        "answer": "rRNA",
        "difficulty": "easy",
        "topic": "Molecular Genetics",
        "explanation": "Ribosomal RNA (rRNA) is a structural component of ribosomes."
    },
    {
        "id": 86,
        "question": "Which protein complex regulates transcription in eukaryotes?",
        "options": [
            "Spliceosome",
            "Transcription factor",
            "Ribosome",
            "DNA polymerase"
        ],
        "answer": "Transcription factor",
        "difficulty": "medium",
        "topic": "Gene Regulation and Expression",
        "explanation": "Transcription factors bind DNA to control gene expression."
    },
    {
        "id": 87,
        "question": "Which mutation introduces a premature stop codon?",
        "options": [
            "Missense",
            "Nonsense",
            "Silent",
            "Frameshift"
        ],
        "answer": "Nonsense",
        "difficulty": "medium",
        "topic": "Mutation and DNA Repair",
        "explanation": "Nonsense mutations create stop codons, truncating protein synthesis."
    },
    {
        "id": 88,
        "question": "Which disorder is a multifactorial condition influenced by genetics and environment?",
        "options": [
            "Cystic fibrosis",
            "Diabetes type 2",
            "Hemophilia",
            "Tay-Sachs disease"
        ],
        "answer": "Diabetes type 2",
        "difficulty": "medium",
        "topic": "Genetic Disorders",
        "explanation": "Type 2 diabetes involves genetic predisposition and environmental factors."
    },
    {
        "id": 89,
        "question": "Which process transfers alleles between populations?",
        "options": [
            "Mutation",
            "Genetic drift",
            "Gene flow",
            "Natural selection"
        ],
        "answer": "Gene flow",
        "difficulty": "medium",
        "topic": "Population Genetics",
        "explanation": "Gene flow occurs when individuals migrate, mixing alleles between populations."
    },
    {
        "id": 90,
        "question": "Which study identifies genetic variants associated with diseases?",
        "options": [
            "Twin study",
            "Genome-wide association study",
            "Pedigree analysis",
            "Linkage mapping"
        ],
        "answer": "Genome-wide association study",
        "difficulty": "medium",
        "topic": "Quantitative Genetics",
        "explanation": "GWAS links genetic variants to disease risk across populations."
    },
    {
        "id": 91,
        "question": "Which enzyme joins DNA fragments in recombinant DNA technology?",
        "options": [
            "Restriction enzyme",
            "DNA ligase",
            "Polymerase",
            "Helicase"
        ],
        "answer": "DNA ligase",
        "difficulty": "medium",
        "topic": "Genetic Engineering and Biotechnology",
        "explanation": "DNA ligase seals nicks in the DNA backbone during cloning."
    },
    {
        "id": 92,
        "question": "Which field studies gene function across an organism’s genome?",
        "options": [
            "Proteomics",
            "Functional genomics",
            "Cytogenetics",
            "Transcriptomics"
        ],
        "answer": "Functional genomics",
        "difficulty": "medium",
        "topic": "Genomics and Proteomics",
        "explanation": "Functional genomics explores the roles of genes in biological processes."
    },
    {
        "id": 93,
        "question": "Which chromosomal aberration reverses a chromosome segment?",
        "options": [
            "Deletion",
            "Inversion",
            "Translocation",
            "Duplication"
        ],
        "answer": "Inversion",
        "difficulty": "medium",
        "topic": "Cytogenetics",
        "explanation": "Inversion flips a chromosome segment, potentially disrupting gene function."
    },
    {
        "id": 94,
        "question": "Which genes regulate cell fate during early development?",
        "options": [
            "Homeotic genes",
            "Oncogenes",
            "Tumor suppressor genes",
            "Operon genes"
        ],
        "answer": "Homeotic genes",
        "difficulty": "medium",
        "topic": "Developmental Genetics",
        "explanation": "Homeotic genes, like Hox genes, determine cell fate and body structure."
    },
    {
        "id": 95,
        "question": "Which issue concerns the patenting of human genes?",
        "options": [
            "Genetic privacy",
            "Gene patenting",
            "Eugenics",
            "Informed consent"
        ],
        "answer": "Gene patenting",
        "difficulty": "medium",
        "topic": "Ethical, Legal, and Social Issues in Genetics",
        "explanation": "Gene patenting raises questions about ownership of genetic information."
    },
    {
        "id": 96,
        "question": "Which cross determines if an organism is homozygous or heterozygous?",
        "options": [
            "Monohybrid cross",
            "Dihybrid cross",
            "Test cross",
            "Back cross"
        ],
        "answer": "Test cross",
        "difficulty": "medium",
        "topic": "Mendelian Genetics",
        "explanation": "A test cross with a recessive homozygote reveals the unknown genotype."
    },
    {
        "id": 97,
        "question": "Which trait is controlled by multiple alleles in humans?",
        "options": [
            "Eye color",
            "ABO blood group",
            "Height",
            "Skin color"
        ],
        "answer": "ABO blood group",
        "difficulty": "medium",
        "topic": "Extensions of Mendelian Genetics",
        "explanation": "The ABO blood group is controlled by three alleles: A, B, and O."
    },
    {
        "id": 98,
        "question": "Which process measures the distance between genes on a chromosome?",
        "options": [
            "Karyotyping",
            "Genetic mapping",
            "FISH",
            "PCR"
        ],
        "answer": "Genetic mapping",
        "difficulty": "medium",
        "topic": "Chromosomal Basis of Inheritance",
        "explanation": "Genetic mapping uses recombination frequencies to locate genes."
    },
    {
        "id": 99,
        "question": "Which DNA region regulates the start of transcription?",
        "options": [
            "Exon",
            "Intron",
            "Promoter",
            "Terminator"
        ],
        "answer": "Promoter",
        "difficulty": "medium",
        "topic": "Molecular Genetics",
        "explanation": "Promoters are DNA sequences where RNA polymerase binds to initiate transcription."
    },
    {
        "id": 100,
        "question": "Which mutation is beneficial in certain environments?",
        "options": [
            "Harmful mutation",
            "Silent mutation",
            "Beneficial mutation",
            "Nonsense mutation"
        ],
        "answer": "Beneficial mutation",
        "difficulty": "easy",
        "topic": "Mutation and DNA Repair",
        "explanation": "Beneficial mutations confer an advantage, like sickle cell trait in malaria-endemic areas."
    },
    {
        "id": 101,
        "question": "Which branch of genetics focuses on changes in gene expression without altering DNA sequence?",
        "options": [
            "Classical genetics",
            "Molecular genetics",
            "Epigenetics",
            "Population genetics"
        ],
        "answer": "Epigenetics",
        "difficulty": "easy",
        "topic": "Introduction to Genetics",
        "explanation": "Epigenetics studies heritable changes in gene expression caused by mechanisms like DNA methylation."
    },
    {
        "id": 102,
        "question": "Which scientist co-discovered the double helix structure of DNA?",
        "options": [
            "Gregor Mendel",
            "Rosalind Franklin",
            "Thomas Morgan",
            "Barbara McClintock"
        ],
        "answer": "Rosalind Franklin",
        "difficulty": "medium",
        "topic": "Introduction to Genetics",
        "explanation": "Rosalind Franklin’s X-ray diffraction images were critical to Watson and Crick’s DNA model."
    },
    {
        "id": 103,
        "question": "Which genetic application is used to identify individuals in forensic science?",
        "options": [
            "Gene therapy",
            "DNA fingerprinting",
            "Genetic engineering",
            "Karyotyping"
        ],
        "answer": "DNA fingerprinting",
        "difficulty": "easy",
        "topic": "Introduction to Genetics",
        "explanation": "DNA fingerprinting analyzes unique genetic markers for identification."
    },
    {
        "id": 104,
        "question": "Which law states that each gamete receives only one allele of a gene pair?",
        "options": [
            "Law of Segregation",
            "Law of Independent Assortment",
            "Law of Dominance",
            "Law of Recessiveness"
        ],
        "answer": "Law of Segregation",
        "difficulty": "medium",
        "topic": "Mendelian Genetics",
        "explanation": "Mendel’s Law of Segregation states that alleles segregate during gamete formation."
    },
    {
        "id": 105,
        "question": "What is the genotypic ratio of a monohybrid cross between two heterozygous parents?",
        "options": [
            "1:1",
            "1:2:1",
            "3:1",
            "9:3:3:1"
        ],
        "answer": "1:2:1",
        "difficulty": "medium",
        "topic": "Mendelian Genetics",
        "explanation": "A cross (Aa x Aa) produces a 1:2:1 genotypic ratio (AA:Aa:aa)."
    },
    {
        "id": 106,
        "question": "Which cross involves mating an organism with its parent or sibling?",
        "options": [
            "Test cross",
            "Back cross",
            "Dihybrid cross",
            "Monohybrid cross"
        ],
        "answer": "Back cross",
        "difficulty": "medium",
        "topic": "Mendelian Genetics",
        "explanation": "A back cross involves mating with a parent or genetically similar individual."
    },
    {
        "id": 107,
        "question": "Which term describes an organism with two identical alleles for a gene?",
        "options": [
            "Heterozygous",
            "Homozygous",
            "Dominant",
            "Recessive"
        ],
        "answer": "Homozygous",
        "difficulty": "easy",
        "topic": "Mendelian Genetics",
        "explanation": "Homozygous organisms have two identical alleles (e.g., AA or aa)."
    },
    {
        "id": 108,
        "question": "Which inheritance pattern results in both alleles being expressed distinctly?",
        "options": [
            "Incomplete dominance",
            "Codominance",
            "Polygenic inheritance",
            "Pleiotropy"
        ],
        "answer": "Codominance",
        "difficulty": "medium",
        "topic": "Extensions of Mendelian Genetics",
        "explanation": "Codominance results in both alleles being fully expressed, like in roan cattle."
    },
    {
        "id": 109,
        "question": "Which gene interaction alters the phenotypic ratio of a dihybrid cross?",
        "options": [
            "Epistasis",
            "Codominance",
            "Incomplete dominance",
            "Multiple alleles"
        ],
        "answer": "Epistasis",
        "difficulty": "hard",
        "topic": "Extensions of Mendelian Genetics",
        "explanation": "Epistasis modifies dihybrid ratios by one gene masking another’s expression."
    },
    {
        "id": 110,
        "question": "Which trait is influenced by multiple genes, like human height?",
        "options": [
            "Monogenic trait",
            "Polygenic trait",
            "Codominant trait",
            "Lethal trait"
        ],
        "answer": "Polygenic trait",
        "difficulty": "easy",
        "topic": "Extensions of Mendelian Genetics",
        "explanation": "Polygenic traits are controlled by multiple genes, resulting in continuous variation."
    },
    {
        "id": 111,
        "question": "Which allele type causes death in the homozygous state, like in Manx cats?",
        "options": [
            "Dominant allele",
            "Recessive allele",
            "Lethal allele",
            "Codominant allele"
        ],
        "answer": "Lethal allele",
        "difficulty": "medium",
        "topic": "Extensions of Mendelian Genetics",
        "explanation": "Lethal alleles cause death when homozygous, often affecting development."
    },
    {
        "id": 112,
        "question": "Which chromosomes are not involved in sex determination in humans?",
        "options": [
            "Sex chromosomes",
            "Autosomes",
            "Mitochondrial chromosomes",
            "Y chromosomes"
        ],
        "answer": "Autosomes",
        "difficulty": "easy",
        "topic": "Chromosomal Basis of Inheritance",
        "explanation": "Autosomes (chromosomes 1–22) carry non-sex-related genes."
    },
    {
        "id": 113,
        "question": "Which condition results from an extra X chromosome in males?",
        "options": [
            "Turner syndrome",
            "Klinefelter syndrome",
            "Down syndrome",
            "Fragile X syndrome"
        ],
        "answer": "Klinefelter syndrome",
        "difficulty": "medium",
        "topic": "Chromosomal Basis of Inheritance",
        "explanation": "Klinefelter syndrome (XXY) causes male infertility and other traits."
    },
    {
        "id": 114,
        "question": "Which inheritance pattern is seen in color blindness?",
        "options": [
            "Autosomal dominant",
            "Autosomal recessive",
            "X-linked recessive",
            "Y-linked"
        ],
        "answer": "X-linked recessive",
        "difficulty": "medium",
        "topic": "Chromosomal Basis of Inheritance",
        "explanation": "Color blindness is caused by a recessive mutation on the X chromosome."
    },
    {
        "id": 115,
        "question": "Which unit measures the distance between genes based on recombination frequency?",
        "options": [
            "Centimorgan",
            "Base pair",
            "Kilobase",
            "Nucleotide"
        ],
        "answer": "Centimorgan",
        "difficulty": "hard",
        "topic": "Chromosomal Basis of Inheritance",
        "explanation": "One centimorgan equals a 1% chance of recombination between genes."
    },
    {
        "id": 116,
        "question": "Which nitrogenous base pairs with adenine in DNA?",
        "options": [
            "Cytosine",
            "Guanine",
            "Thymine",
            "Uracil"
        ],
        "answer": "Thymine",
        "difficulty": "easy",
        "topic": "Molecular Genetics",
        "explanation": "In DNA, adenine pairs with thymine via two hydrogen bonds."
    },
    {
        "id": 117,
        "question": "Which enzyme seals nicks in the DNA backbone during replication?",
        "options": [
            "Helicase",
            "Primase",
            "DNA ligase",
            "DNA polymerase"
        ],
        "answer": "DNA ligase",
        "difficulty": "medium",
        "topic": "Molecular Genetics",
        "explanation": "DNA ligase joins Okazaki fragments and seals DNA breaks."
    },
    {
        "id": 118,
        "question": "Which RNA modification adds a poly-A tail to mRNA?",
        "options": [
            "Splicing",
            "Capping",
            "Tailing",
            "Editing"
        ],
        "answer": "Tailing",
        "difficulty": "medium",
        "topic": "Molecular Genetics",
        "explanation": "Poly-A tailing stabilizes mRNA and aids in its export from the nucleus."
    },
    {
        "id": 119,
        "question": "Which organelle is the site of translation in eukaryotic cells?",
        "options": [
            "Nucleus",
            "Mitochondrion",
            "Ribosome",
            "Golgi apparatus"
        ],
        "answer": "Ribosome",
        "difficulty": "easy",
        "topic": "Molecular Genetics",
        "explanation": "Ribosomes synthesize proteins by translating mRNA into amino acid sequences."
    },
    {
        "id": 120,
        "question": "Which prokaryotic operon is activated in the absence of glucose?",
        "options": [
            "Trp operon",
            "Lac operon",
            "Ara operon",
            "Gal operon"
        ],
        "answer": "Lac operon",
        "difficulty": "medium",
        "topic": "Gene Regulation and Expression",
        "explanation": "The lac operon is induced by lactose and activated when glucose is scarce."
    },
    {
        "id": 121,
        "question": "Which epigenetic mechanism compacts chromatin to silence genes?",
        "options": [
            "Histone acetylation",
            "DNA methylation",
            "RNA interference",
            "Chromatin remodeling"
        ],
        "answer": "DNA methylation",
        "difficulty": "medium",
        "topic": "Gene Regulation and Expression",
        "explanation": "DNA methylation silences genes by compacting chromatin structure."
    },
    {
        "id": 122,
        "question": "Which RNA molecule degrades target mRNA to regulate gene expression?",
        "options": [
            "siRNA",
            "tRNA",
            "rRNA",
            "mRNA"
        ],
        "answer": "siRNA",
        "difficulty": "medium",
        "topic": "Gene Regulation and Expression",
        "explanation": "Small interfering RNA (siRNA) triggers mRNA degradation via RNA interference."
    },
    {
        "id": 123,
        "question": "Which protein enhances transcription by binding to enhancer regions?",
        "options": [
            "Repressor",
            "Activator",
            "RNA polymerase",
            "Spliceosome"
        ],
        "answer": "Activator",
        "difficulty": "hard",
        "topic": "Gene Regulation and Expression",
        "explanation": "Activators bind enhancers to promote transcription in eukaryotes."
    },
    {
        "id": 124,
        "question": "Which mutation replaces one amino acid with another in a protein?",
        "options": [
            "Silent mutation",
            "Missense mutation",
            "Nonsense mutation",
            "Frameshift mutation"
        ],
        "answer": "Missense mutation",
        "difficulty": "medium",
        "topic": "Mutation and DNA Repair",
        "explanation": "Missense mutations change a codon, altering one amino acid."
    },
    {
        "id": 125,
        "question": "Which chemical mutagen intercalates between DNA bases, causing frameshifts?",
        "options": [
            "Ethidium bromide",
            "UV light",
            "X-rays",
            "Base analogs"
        ],
        "answer": "Ethidium bromide",
        "difficulty": "hard",
        "topic": "Mutation and DNA Repair",
        "explanation": "Ethidium bromide inserts between bases, disrupting DNA replication."
    },
    {
        "id": 126,
        "question": "Which repair mechanism removes damaged DNA bases?",
        "options": [
            "Base excision repair",
            "Mismatch repair",
            "Nucleotide excision repair",
            "Homologous recombination"
        ],
        "answer": "Base excision repair",
        "difficulty": "medium",
        "topic": "Mutation and DNA Repair",
        "explanation": "Base excision repair removes and replaces damaged or incorrect bases."
    },
    {
        "id": 127,
        "question": "Which mutation type is most likely to disrupt protein function?",
        "options": [
            "Silent",
            "Missense",
            "Nonsense",
            "Conservative"
        ],
        "answer": "Nonsense",
        "difficulty": "medium",
        "topic": "Mutation and DNA Repair",
        "explanation": "Nonsense mutations create premature stop codons, truncating proteins."
    },
    {
        "id": 128,
        "question": "Which disorder is caused by a mutation in the HBB gene?",
        "options": [
            "Cystic fibrosis",
            "Sickle cell anemia",
            "Huntington’s disease",
            "Phenylketonuria"
        ],
        "answer": "Sickle cell anemia",
        "difficulty": "medium",
        "topic": "Genetic Disorders",
        "explanation": "Sickle cell anemia results from a mutation in the hemoglobin-beta (HBB) gene."
    },
    {
        "id": 129,
        "question": "Which chromosomal disorder is caused by trisomy 18?",
        "options": [
            "Down syndrome",
            "Edwards syndrome",
            "Patau syndrome",
            "Turner syndrome"
        ],
        "answer": "Edwards syndrome",
        "difficulty": "medium",
        "topic": "Genetic Disorders",
        "explanation": "Edwards syndrome is caused by an extra copy of chromosome 18."
    },
    {
        "id": 130,
        "question": "Which disorder is caused by a triplet repeat expansion in the FMR1 gene?",
        "options": [
            "Huntington’s disease",
            "Fragile X syndrome",
            "Cystic fibrosis",
            "Sickle cell anemia"
        ],
        "answer": "Fragile X syndrome",
        "difficulty": "medium",
        "topic": "Genetic Disorders",
        "explanation": "Fragile X syndrome results from CGG repeat expansion in the FMR1 gene."
    },
    {
        "id": 131,
        "question": "Which metabolic disorder is caused by a deficiency in hexosaminidase A?",
        "options": [
            "Phenylketonuria",
            "Tay-Sachs disease",
            "Galactosemia",
            "Alkaptonuria"
        ],
        "answer": "Tay-Sachs disease",
        "difficulty": "medium",
        "topic": "Genetic Disorders",
        "explanation": "Tay-Sachs disease is due to a mutation affecting hexosaminidase A enzyme."
    },
    {
        "id": 132,
        "question": "Which term describes the proportion of a specific allele in a population?",
        "options": [
            "Gene pool",
            "Allele frequency",
            "Genotype frequency",
            "Polymorphism"
        ],
        "answer": "Allele frequency",
        "difficulty": "easy",
        "topic": "Population Genetics",
        "explanation": "Allele frequency measures how common an allele is in a population."
    },
    {
        "id": 133,
        "question": "Which assumption of Hardy-Weinberg equilibrium excludes natural selection?",
        "options": [
            "Small population",
            "No selection",
            "High mutation rate",
            "Non-random mating"
        ],
        "answer": "No selection",
        "difficulty": "medium",
        "topic": "Population Genetics",
        "explanation": "Hardy-Weinberg assumes no selection to maintain allele frequencies."
    },
    {
        "id": 134,
        "question": "Which process reduces genetic diversity in isolated populations?",
        "options": [
            "Gene flow",
            "Genetic drift",
            "Mutation",
            "Natural selection"
        ],
        "answer": "Genetic drift",
        "difficulty": "medium",
        "topic": "Population Genetics",
        "explanation": "Genetic drift causes random loss of alleles in small populations."
    },
    {
        "id": 135,
        "question": "Which term describes a single nucleotide variation in a population?",
        "options": [
            "Mutation",
            "Polymorphism",
            "Allele",
            "Haplotype"
        ],
        "answer": "Polymorphism",
        "difficulty": "medium",
        "topic": "Population Genetics",
        "explanation": "Polymorphisms, like SNPs, are common DNA variations among individuals."
    },
    {
        "id": 136,
        "question": "Which statistical measure estimates the genetic contribution to a trait?",
        "options": [
            "Allele frequency",
            "Heritability",
            "Recombination rate",
            "Mutation rate"
        ],
        "answer": "Heritability",
        "difficulty": "medium",
        "topic": "Quantitative Genetics",
        "explanation": "Heritability quantifies the proportion of trait variation due to genetics."
    },
    {
        "id": 137,
        "question": "Which study design compares monozygotic and dizygotic twins?",
        "options": [
            "Linkage analysis",
            "Twin study",
            "GWAS",
            "Pedigree analysis"
        ],
        "answer": "Twin study",
        "difficulty": "easy",
        "topic": "Quantitative Genetics",
        "explanation": "Twin studies assess heritability by comparing identical and fraternal twins."
    },
    {
        "id": 138,
        "question": "Which interaction shapes quantitative traits like crop yield?",
        "options": [
            "Genotype-environment",
            "Gene-gene",
            "Dominance-recessive",
            "Epistasis-mutation"
        ],
        "answer": "Genotype-environment",
        "difficulty": "medium",
        "topic": "Quantitative Genetics",
        "explanation": "Genotype-environment interactions influence quantitative trait expression."
    },
    {
        "id": 139,
        "question": "Which trait shows continuous variation due to multiple gene effects?",
        "options": [
            "Blood type",
            "Eye color",
            "Height",
            "Cystic fibrosis"
        ],
        "answer": "Height",
        "difficulty": "easy",
        "topic": "Quantitative Genetics",
        "explanation": "Height is a quantitative trait influenced by multiple genes and environment."
    },
    {
        "id": 140,
        "question": "Which technique creates multiple copies of a DNA segment?",
        "options": [
            "CRISPR",
            "PCR",
            "FISH",
            "Gel electrophoresis"
        ],
        "answer": "PCR",
        "difficulty": "easy",
        "topic": "Genetic Engineering and Biotechnology",
        "explanation": "PCR amplifies DNA for applications like sequencing or cloning."
    },
    {
        "id": 141,
        "question": "Which bacterial protein is used in CRISPR-Cas9 gene editing?",
        "options": [
            "DNA polymerase",
            "Cas9",
            "Ligase",
            "Helicase"
        ],
        "answer": "Cas9",
        "difficulty": "medium",
        "topic": "Genetic Engineering and Biotechnology",
        "explanation": "Cas9 is a nuclease that cuts DNA at targeted sites in CRISPR editing."
    },
    {
        "id": 142,
        "question": "Which vector carries foreign DNA into host cells?",
        "options": [
            "Plasmid",
            "Probe",
            "Primer",
            "Enzyme"
        ],
        "answer": "Plasmid",
        "difficulty": "easy",
        "topic": "Genetic Engineering and Biotechnology",
        "explanation": "Plasmids are used as vectors to introduce DNA into cells."
    },
    {
        "id": 143,
        "question": "Which GMO crop is engineered for herbicide resistance?",
        "options": [
            "Bt corn",
            "Roundup Ready soybeans",
            "Golden rice",
            "Wild wheat"
        ],
        "answer": "Roundup Ready soybeans",
        "difficulty": "medium",
        "topic": "Genetic Engineering and Biotechnology",
        "explanation": "Roundup Ready soybeans resist glyphosate, allowing weed control."
    },
    {
        "id": 144,
        "question": "Which field studies the complete set of RNA transcripts in a cell?",
        "options": [
            "Genomics",
            "Proteomics",
            "Transcriptomics",
            "Cytogenetics"
        ],
        "answer": "Transcriptomics",
        "difficulty": "medium",
        "topic": "Genomics and Proteomics",
        "explanation": "Transcriptomics analyzes all RNA molecules to understand gene expression."
    },
    {
        "id": 145,
        "question": "Which database stores genetic sequence information?",
        "options": [
            "GenBank",
            "UniProt",
            "PDB",
            "Ensembl"
        ],
        "answer": "GenBank",
        "difficulty": "medium",
        "topic": "Genomics and Proteomics",
        "explanation": "GenBank is a public database for DNA and RNA sequences."
    },
    {
        "id": 146,
        "question": "Which technique maps gene functions across a genome?",
        "options": [
            "Functional genomics",
            "Comparative genomics",
            "Proteomics",
            "Cytogenetics"
        ],
        "answer": "Functional genomics",
        "difficulty": "medium",
        "topic": "Genomics and Proteomics",
        "explanation": "Functional genomics investigates gene roles in biological processes."
    },
    {
        "id": 147,
        "question": "Which chromosomal technique uses fluorescent probes to detect specific sequences?",
        "options": [
            "G-banding",
            "FISH",
            "Karyotyping",
            "Spectral karyotyping"
        ],
        "answer": "FISH",
        "difficulty": "medium",
        "topic": "Cytogenetics",
        "explanation": "FISH uses fluorescent probes to visualize specific DNA sequences."
    },
    {
        "id": 148,
        "question": "Which chromosomal aberration duplicates a chromosome segment?",
        "options": [
            "Deletion",
            "Inversion",
            "Duplication",
            "Translocation"
        ],
        "answer": "Duplication",
        "difficulty": "easy",
        "topic": "Cytogenetics",
        "explanation": "Duplication results in extra copies of a chromosome segment."
    },
    {
        "id": 149,
        "question": "Which staining method identifies chromosomes by band patterns?",
        "options": [
            "FISH",
            "G-banding",
            "Spectral karyotyping",
            "C-banding"
        ],
        "answer": "G-banding",
        "difficulty": "medium",
        "topic": "Cytogenetics",
        "explanation": "G-banding stains chromosomes to reveal unique banding patterns."
    },
    {
        "id": 150,
        "question": "Which genes control segment identity in developing embryos?",
        "options": [
            "Oncogenes",
            "Hox genes",
            "Tumor suppressor genes",
            "Operon genes"
        ],
        "answer": "Hox genes",
        "difficulty": "medium",
        "topic": "Developmental Genetics",
        "explanation": "Hox genes regulate segment formation in embryonic development."
    },
    {
        "id": 151,
        "question": "Which process forms specialized cells during development?",
        "options": [
            "Replication",
            "Differentiation",
            "Mutation",
            "Recombination"
        ],
        "answer": "Differentiation",
        "difficulty": "easy",
        "topic": "Developmental Genetics",
        "explanation": "Differentiation produces specialized cell types from stem cells."
    },
    {
        "id": 152,
        "question": "Which cells are genetically regulated to remain undifferentiated?",
        "options": [
            "Somatic cells",
            "Stem cells",
            "Gametes",
            "Neurons"
        ],
        "answer": "Stem cells",
        "difficulty": "easy",
        "topic": "Developmental Genetics",
        "explanation": "Stem cells maintain pluripotency under genetic regulation."
    },
    {
        "id": 153,
        "question": "Which genetic mechanism shapes tissue formation in embryos?",
        "options": [
            "Morphogenesis",
            "Replication",
            "Transcription",
            "Crossing over"
        ],
        "answer": "Morphogenesis",
        "difficulty": "medium",
        "topic": "Developmental Genetics",
        "explanation": "Morphogenesis involves gene-regulated cell movements and tissue formation."
    },
    {
        "id": 154,
        "question": "Which process assesses genetic risks before conception?",
        "options": [
            "Gene therapy",
            "Genetic counseling",
            "Prenatal diagnosis",
            "CRISPR editing"
        ],
        "answer": "Genetic counseling",
        "difficulty": "easy",
        "topic": "Ethical, Legal, and Social Issues in Genetics",
        "explanation": "Genetic counseling provides risk assessments for inherited disorders."
    },
    {
        "id": 155,
        "question": "Which technique screens for chromosomal abnormalities in fetuses?",
        "options": [
            "PCR",
            "Amniocentesis",
            "Gel electrophoresis",
            "Cloning"
        ],
        "answer": "Amniocentesis",
        "difficulty": "medium",
        "topic": "Ethical, Legal, and Social Issues in Genetics",
        "explanation": "Amniocentesis samples amniotic fluid to test for genetic conditions."
    },
    {
        "id": 156,
        "question": "Which ethical concern involves selecting embryos for desired traits?",
        "options": [
            "Genetic privacy",
            "Designer babies",
            "Gene patenting",
            "Informed consent"
        ],
        "answer": "Designer babies",
        "difficulty": "medium",
        "topic": "Ethical, Legal, and Social Issues in Genetics",
        "explanation": "Designer babies raise ethical issues about non-medical trait selection."
    },
    {
        "id": 157,
        "question": "Which therapy corrects genetic defects by introducing functional genes?",
        "options": [
            "Genetic counseling",
            "Prenatal screening",
            "Gene therapy",
            "CRISPR screening"
        ],
        "answer": "Gene therapy",
        "difficulty": "easy",
        "topic": "Ethical, Legal, and Social Issues in Genetics",
        "explanation": "Gene therapy aims to treat disorders by replacing defective genes."
    },
    {
        "id": 158,
        "question": "Which phenotypic ratio results from a dihybrid cross with epistasis?",
        "options": [
            "9:3:3:1",
            "9:7",
            "1:2:1",
            "3:1"
        ],
        "answer": "9:7",
        "difficulty": "hard",
        "topic": "Extensions of Mendelian Genetics",
        "explanation": "Epistasis can modify a dihybrid cross to a 9:7 ratio by gene interaction."
    },
    {
        "id": 159,
        "question": "Which term describes an organism with two different alleles for a gene?",
        "options": [
            "Homozygous",
            "Heterozygous",
            "Dominant",
            "Recessive"
        ],
        "answer": "Heterozygous",
        "difficulty": "easy",
        "topic": "Mendelian Genetics",
        "explanation": "Heterozygous organisms have two different alleles (e.g., Aa)."
    },
    {
        "id": 160,
        "question": "Which cross tests for linkage between two genes?",
        "options": [
            "Monohybrid cross",
            "Dihybrid cross",
            "Test cross",
            "Back cross"
        ],
        "answer": "Test cross",
        "difficulty": "medium",
        "topic": "Chromosomal Basis of Inheritance",
        "explanation": "A test cross reveals linkage by analyzing recombination frequencies."
    },
    {
        "id": 161,
        "question": "Which molecule is replaced by uracil in RNA?",
        "options": [
            "Adenine",
            "Thymine",
            "Guanine",
            "Cytosine"
        ],
        "answer": "Thymine",
        "difficulty": "easy",
        "topic": "Molecular Genetics",
        "explanation": "RNA contains uracil instead of thymine, pairing with adenine."
    },
    {
        "id": 162,
        "question": "Which enzyme synthesizes DNA during replication?",
        "options": [
            "RNA polymerase",
            "DNA polymerase",
            "Helicase",
            "Ligase"
        ],
        "answer": "DNA polymerase",
        "difficulty": "easy",
        "topic": "Molecular Genetics",
        "explanation": "DNA polymerase adds nucleotides to the growing DNA strand."
    },
    {
        "id": 163,
        "question": "Which RNA processing step adds a 5’ cap to mRNA?",
        "options": [
            "Splicing",
            "Capping",
            "Tailing",
            "Editing"
        ],
        "answer": "Capping",
        "difficulty": "medium",
        "topic": "Molecular Genetics",
        "explanation": "Capping adds a modified guanine to the 5’ end of mRNA for stability."
    },
    {
        "id": 164,
        "question": "Which codon signals the start of translation?",
        "options": [
            "UAA",
            "AUG",
            "UAG",
            "UGA"
        ],
        "answer": "AUG",
        "difficulty": "medium",
        "topic": "Molecular Genetics",
        "explanation": "The AUG codon initiates translation by coding for methionine."
    },
    {
        "id": 165,
        "question": "Which operon is repressed by its end product, tryptophan?",
        "options": [
            "Lac operon",
            "Trp operon",
            "Ara operon",
            "Gal operon"
        ],
        "answer": "Trp operon",
        "difficulty": "medium",
        "topic": "Gene Regulation and Expression",
        "explanation": "The trp operon is repressed when tryptophan is abundant."
    },
    {
        "id": 166,
        "question": "Which modification opens chromatin to promote transcription?",
        "options": [
            "Histone methylation",
            "Histone acetylation",
            "DNA methylation",
            "Chromatin condensation"
        ],
        "answer": "Histone acetylation",
        "difficulty": "medium",
        "topic": "Gene Regulation and Expression",
        "explanation": "Histone acetylation reduces chromatin compaction, enhancing transcription."
    },
    {
        "id": 167,
        "question": "Which mutation inserts or deletes a non-multiple of three nucleotides?",
        "options": [
            "Silent mutation",
            "Missense mutation",
            "Frameshift mutation",
            "Nonsense mutation"
        ],
        "answer": "Frameshift mutation",
        "difficulty": "medium",
        "topic": "Mutation and DNA Repair",
        "explanation": "Frameshift mutations disrupt the reading frame, altering downstream codons."
    },
    {
        "id": 168,
        "question": "Which repair mechanism uses a homologous chromosome as a template?",
        "options": [
            "Nucleotide excision repair",
            "Base excision repair",
            "Homologous recombination",
            "Mismatch repair"
        ],
        "answer": "Homologous recombination",
        "difficulty": "hard",
        "topic": "Mutation and DNA Repair",
        "explanation": "Homologous recombination repairs double-strand breaks using a sister chromatid."
    },
    {
        "id": 169,
        "question": "Which disorder is caused by a dominant mutation in the HTT gene?",
        "options": [
            "Cystic fibrosis",
            "Sickle cell anemia",
            "Huntington’s disease",
            "Tay-Sachs disease"
        ],
        "answer": "Huntington’s disease",
        "difficulty": "medium",
        "topic": "Genetic Disorders",
        "explanation": "Huntington’s disease is caused by a CAG repeat expansion in the HTT gene."
    },
    {
        "id": 170,
        "question": "Which disorder is characterized by a single X chromosome in females?",
        "options": [
            "Klinefelter syndrome",
            "Turner syndrome",
            "Down syndrome",
            "Fragile X syndrome"
        ],
        "answer": "Turner syndrome",
        "difficulty": "easy",
        "topic": "Genetic Disorders",
        "explanation": "Turner syndrome (XO) results from a missing X chromosome."
    },
    {
        "id": 171,
        "question": "Which equation calculates allele frequencies in Hardy-Weinberg equilibrium?",
        "options": [
            "p + q = 1",
            "p^2 + q^2 = 1",
            "p^2 + 2pq = 1",
            "pq = 1"
        ],
        "answer": "p + q = 1",
        "difficulty": "medium",
        "topic": "Population Genetics",
        "explanation": "The equation p + q = 1 sums allele frequencies for two alleles."
    },
    {
        "id": 172,
        "question": "Which process introduces alleles through immigration?",
        "options": [
            "Mutation",
            "Genetic drift",
            "Gene flow",
            "Selection"
        ],
        "answer": "Gene flow",
        "difficulty": "medium",
        "topic": "Population Genetics",
        "explanation": "Gene flow transfers alleles between populations via migration."
    },
    {
        "id": 173,
        "question": "Which factor selects for advantageous alleles in a population?",
        "options": [
            "Genetic drift",
            "Mutation",
            "Natural selection",
            "Gene flow"
        ],
        "answer": "Natural selection",
        "difficulty": "easy",
        "topic": "Population Genetics",
        "explanation": "Natural selection favors alleles that enhance survival and reproduction."
    },
    {
        "id": 174,
        "question": "Which trait is influenced by both genetics and lifestyle factors?",
        "options": [
            "Cystic fibrosis",
            "Blood type",
            "Hypertension",
            "Hemophilia"
        ],
        "answer": "Hypertension",
        "difficulty": "medium",
        "topic": "Quantitative Genetics",
        "explanation": "Hypertension is a multifactorial trait affected by genes and environment."
    },
    {
        "id": 175,
        "question": "Which enzyme cuts DNA at palindromic sequences?",
        "options": [
            "DNA polymerase",
            "Restriction enzyme",
            "Ligase",
            "Helicase"
        ],
        "answer": "Restriction enzyme",
        "difficulty": "medium",
        "topic": "Genetic Engineering and Biotechnology",
        "explanation": "Restriction enzymes cleave DNA at specific recognition sites."
    },
    {
        "id": 176,
        "question": "Which technique sequences DNA by synthesizing new strands?",
        "options": [
            "Sanger sequencing",
            "PCR",
            "FISH",
            "Gel electrophoresis"
        ],
        "answer": "Sanger sequencing",
        "difficulty": "medium",
        "topic": "Genomics and Proteomics",
        "explanation": "Sanger sequencing uses chain-terminating nucleotides to sequence DNA."
    },
    {
        "id": 177,
        "question": "Which chromosomal aberration reverses a segment’s orientation?",
        "options": [
            "Deletion",
            "Inversion",
            "Translocation",
            "Duplication"
        ],
        "answer": "Inversion",
        "difficulty": "medium",
        "topic": "Cytogenetics",
        "explanation": "Inversion reverses a chromosome segment, potentially disrupting genes."
    },
    {
        "id": 178,
        "question": "Which genes regulate cell fate in early embryos?",
        "options": [
            "Homeotic genes",
            "Oncogenes",
            "Tumor suppressor genes",
            "Operon genes"
        ],
        "answer": "Homeotic genes",
        "difficulty": "medium",
        "topic": "Developmental Genetics",
        "explanation": "Homeotic genes determine cell identity during development."
    },
    {
        "id": 179,
        "question": "Which ethical issue concerns access to genetic testing results?",
        "options": [
            "Genetic privacy",
            "Eugenics",
            "Designer babies",
            "Gene patenting"
        ],
        "answer": "Genetic privacy",
        "difficulty": "medium",
        "topic": "Ethical, Legal, and Social Issues in Genetics",
        "explanation": "Genetic privacy protects individuals’ genetic information from misuse."
    },
    {
        "id": 180,
        "question": "Which inheritance pattern shows a 1:1 phenotypic ratio in a test cross?",
        "options": [
            "Incomplete dominance",
            "Codominance",
            "Complete dominance",
            "Epistasis"
        ],
        "answer": "Complete dominance",
        "difficulty": "medium",
        "topic": "Mendelian Genetics",
        "explanation": "A test cross (Aa x aa) yields a 1:1 ratio under complete dominance."
    },
    {
        "id": 181,
        "question": "Which system determines sex in grasshoppers?",
        "options": [
            "XX/XY",
            "ZZ/ZW",
            "XO",
            "Haplodiploidy"
        ],
        "answer": "XO",
        "difficulty": "medium",
        "topic": "Chromosomal Basis of Inheritance",
        "explanation": "In grasshoppers, males are XO and females are XX."
    },
    {
        "id": 182,
        "question": "Which DNA region is non-coding but transcribed?",
        "options": [
            "Exon",
            "Intron",
            "Promoter",
            "Enhancer"
        ],
        "answer": "Intron",
        "difficulty": "medium",
        "topic": "Molecular Genetics",
        "explanation": "Introns are transcribed but removed during RNA splicing."
    },
    {
        "id": 183,
        "question": "Which molecule binds to the ribosome’s small subunit during translation?",
        "options": [
            "mRNA",
            "tRNA",
            "rRNA",
            "DNA"
        ],
        "answer": "mRNA",
        "difficulty": "medium",
        "topic": "Molecular Genetics",
        "explanation": "mRNA binds to the ribosome to provide the genetic code for translation."
    },
    {
        "id": 184,
        "question": "Which protein inhibits transcription by binding to DNA?",
        "options": [
            "Activator",
            "Repressor",
            "RNA polymerase",
            "Transcription factor"
        ],
        "answer": "Repressor",
        "difficulty": "medium",
        "topic": "Gene Regulation and Expression",
        "explanation": "Repressors block transcription by binding to operator regions."
    },
    {
        "id": 185,
        "question": "Which mutagen causes DNA strand breaks?",
        "options": [
            "UV light",
            "X-rays",
            "Base analogs",
            "Intercalating agents"
        ],
        "answer": "X-rays",
        "difficulty": "medium",
        "topic": "Mutation and DNA Repair",
        "explanation": "X-rays cause double-strand breaks, requiring complex repair mechanisms."
    },
    {
        "id": 186,
        "question": "Which disorder is caused by a recessive mutation in the PAH gene?",
        "options": [
            "Phenylketonuria",
            "Huntington’s disease",
            "Sickle cell anemia",
            "Cystic fibrosis"
        ],
        "answer": "Phenylketonuria",
        "difficulty": "medium",
        "topic": "Genetic Disorders",
        "explanation": "Phenylketonuria results from a mutation in the PAH gene, affecting phenylalanine metabolism."
    },
    {
        "id": 187,
        "question": "Which population size is most susceptible to genetic drift?",
        "options": [
            "Large population",
            "Small population",
            "Stable population",
            "Migrating population"
        ],
        "answer": "Small population",
        "difficulty": "medium",
        "topic": "Population Genetics",
        "explanation": "Small populations are prone to genetic drift due to random allele loss."
    },
    {
        "id": 188,
        "question": "Which technique identifies disease-associated genetic variants?",
        "options": [
            "PCR",
            "GWAS",
            "FISH",
            "Karyotyping"
        ],
        "answer": "GWAS",
        "difficulty": "medium",
        "topic": "Quantitative Genetics",
        "explanation": "Genome-wide association studies link genetic variants to diseases."
    },
    {
        "id": 189,
        "question": "Which GMO is engineered to produce vitamin A?",
        "options": [
            "Bt corn",
            "Golden rice",
            "Roundup Ready soybeans",
            "Flavr Savr tomato"
        ],
        "answer": "Golden rice",
        "difficulty": "medium",
        "topic": "Genetic Engineering and Biotechnology",
        "explanation": "Golden rice is modified to produce beta-carotene, a vitamin A precursor."
    },
    {
        "id": 190,
        "question": "Which field compares protein structures across species?",
        "options": [
            "Genomics",
            "Proteomics",
            "Transcriptomics",
            "Cytogenetics"
        ],
        "answer": "Proteomics",
        "difficulty": "medium",
        "topic": "Genomics and Proteomics",
        "explanation": "Proteomics studies protein structure and function across organisms."
    },
    {
        "id": 191,
        "question": "Which technique visualizes entire chromosome sets with unique colors?",
        "options": [
            "G-banding",
            "FISH",
            "Spectral karyotyping",
            "Karyotyping"
        ],
        "answer": "Spectral karyotyping",
        "difficulty": "hard",
        "topic": "Cytogenetics",
        "explanation": "Spectral karyotyping assigns distinct colors to each chromosome."
    },
    {
        "id": 192,
        "question": "Which genes regulate anterior-posterior patterning in vertebrates?",
        "options": [
            "Hox genes",
            "Oncogenes",
            "Tumor suppressor genes",
            "Lac operon"
        ],
        "answer": "Hox genes",
        "difficulty": "medium",
        "topic": "Developmental Genetics",
        "explanation": "Hox genes control body axis patterning in vertebrate embryos."
    },
    {
        "id": 193,
        "question": "Which ethical issue involves modifying genes for disease prevention?",
        "options": [
            "Eugenics",
            "Gene therapy",
            "Genetic privacy",
            "Designer babies"
        ],
        "answer": "Gene therapy",
        "difficulty": "medium",
        "topic": "Ethical, Legal, and Social Issues in Genetics",
        "explanation": "Gene therapy corrects genetic defects to prevent or treat diseases."
    },
    {
        "id": 194,
        "question": "Which phenotypic ratio results from codominance in a monohybrid cross?",
        "options": [
            "3:1",
            "1:2:1",
            "1:1",
            "9:3"
        ],
        "answer": "1:2:1",
        "difficulty": "medium",
        "topic": "Extensions of Mendelian Genetics",
        "explanation": "Codominance produces a 1:2:1 phenotypic ratio in a heterozygous cross."
    },
    {
        "id": 195,
        "question": "Which chromosome region ensures proper segregation during cell division?",
        "options": [
            "Telomere",
            "Centromere",
            "Nucleosome",
            "Promoter"
        ],
        "answer": "Centromere",
        "difficulty": "medium",
        "topic": "Chromosomal Basis of Inheritance",
        "explanation": "Centromeres attach chromosomes to spindle fibers during division."
},
    {
        "id": 196,
        "question": "Which enzyme unwinds DNA during transcription?",
        "options": [
            "DNA polymerase",
            "Helicase",
            "RNA polymerase",
            "Ligase"
        ],
        "answer": "Helicase",
        "difficulty": "medium",
        "topic": "Molecular Genetics",
        "explanation": "Helicase unwinds DNA to allow RNA polymerase access during transcription."
    },
    {
        "id": 197,
        "question": "Which RNA molecule catalyzes peptide bond formation?",
        "options": [
            "mRNA",
            "tRNA",
            "rRNA",
            "miRNA"
        ],
        "answer": "rRNA",
        "difficulty": "medium",
        "topic": "Molecular Genetics",
        "explanation": "Ribosomal RNA in the ribosome catalyzes peptide bonds during translation."
    },
    {
        "id": 198,
        "question": "Which protein binds to silencers to reduce gene expression?",
        "options": [
            "Activator",
            "Repressor",
            "Transcription factor",
            "RNA polymerase"
        ],
        "answer": "Repressor",
        "difficulty": "medium",
        "topic": "Gene Regulation and Expression",
        "explanation": "Repressors bind to silencers to inhibit transcription."
    },
    {
        "id": 199,
        "question": "Which mutagen mimics a nucleotide base during replication?",
        "options": [
            "Base analogs",
            "Intercalating agents",
            "UV light",
            "X-rays"
        ],
        "answer": "Base analogs",
        "difficulty": "hard",
        "topic": "Mutation and DNA Repair",
        "explanation": "Base analogs, like 5-bromouracil, cause mispairing during DNA replication."
    },
    {
        "id": 200,
        "question": "Which disorder is caused by a deficiency in galactosidase activity?",
        "options": [
            "Phenylketonuria",
            "Galactosemia",
            "Tay-Sachs disease",
            "Alkaptonuria"
        ],
        "answer": "Galactosemia",
        "difficulty": "medium",
        "topic": "Genetic Disorders",
        "explanation": "Galactosemia results from a mutation affecting galactose metabolism."
    },
    {
        "id": 201,
        "question": "Which population genetic process favors alleles in specific environments?",
        "options": [
            "Genetic drift",
            "Mutation",
            "Natural selection",
            "Gene flow"
        ],
        "answer": "Natural selection",
        "difficulty": "medium",
        "topic": "Population Genetics",
        "explanation": "Natural selection increases the frequency of advantageous alleles."
    },
    {
        "id": 203,
        "question": "Which technique amplifies DNA in real-time for quantification?",
        "options": [
            "PCR",
            "qPCR",
            "FISH",
            "Sanger sequencing"
        ],
        "answer": "qPCR",
        "difficulty": "medium",
        "topic": "Genetic Engineering and Biotechnology",
        "explanation": "Quantitative PCR measures DNA amplification in real time."
    },
    {
        "id": 205,
        "question": "Which chromosomal technique stains centromeres specifically?",
        "options": [
            "G-banding",
            "C-banding",
            "FISH",
            "Spectral karyotyping"
        ],
        "answer": "C-banding",
        "difficulty": "medium",
        "topic": "Cytogenetics",
        "explanation": "C-banding stains heterochromatin-rich centromeres."
    },
    {
        "id": 206,
        "question": "Which genes regulate cell differentiation in plants?",
        "options": [
            "Hox genes",
            "Floral identity genes",
            "Oncogenes",
            "Tumor suppressor genes"
        ],
        "answer": "Floral identity genes",
        "difficulty": "hard",
        "topic": "Developmental Genetics",
        "explanation": "Floral identity genes control flower development and differentiation in plants."
    },
    {
        "id": 207,
        "question": "Which ethical issue concerns the commercialization of genetic tests?",
        "options": [
            "Genetic privacy",
            "Direct-to-consumer testing",
            "Eugenics",
            "Gene therapy"
        ],
        "answer": "Direct-to-consumer testing",
        "difficulty": "medium",
        "topic": "Ethical, Legal, and Social Issues in Genetics",
        "explanation": "Direct-to-consumer testing raises issues about regulation and accuracy."
    },
    {
        "id": 208,
        "question": "Which inheritance pattern produces a blended phenotype in heterozygotes?",
        "options": [
            "Codominance",
            "Incomplete dominance",
            "Epistasis",
            "Pleiotropy"
        ],
        "answer": "Incomplete dominance",
        "difficulty": "medium",
        "topic": "Extensions of Mendelian Genetics",
        "explanation": "Incomplete dominance results in an intermediate phenotype in heterozygotes."
    },
    {
        "id": 209,
        "question": "Which structure protects chromosome ends from degradation?",
        "options": [
            "Centromere",
            "Telomere",
            "Nucleosome",
            "Promoter"
        ],
        "answer": "Telomere",
        "difficulty": "medium",
        "topic": "Chromosomal Basis of Inheritance",
        "explanation": "Telomeres prevent chromosome shortening and fusion."
    },
    {
        "id": 210,
        "question": "Which enzyme removes RNA primers during DNA replication?",
        "options": [
            "DNA polymerase",
            "Nuclease",
            "Ligase",
            "Helicase"
        ],
        "answer": "Nuclease",
        "difficulty": "hard",
        "topic": "Molecular Genetics",
        "explanation": "Nuclease removes RNA primers, allowing DNA polymerase to fill the gaps."
    },
    {
        "id": "211",
        "question": "Which RNA type regulates translation by binding to mRNA?",
        "options": [
            "mRNA",
            "tRNA",
            "miRNA",
            "rRNA"
        ],
        "answer": "miRNA",
        "difficulty": "medium",
        "topic": "Gene Regulation and expression",
        "explanation": "MicroRNA (miRNA) regulates gene expression by binding to mRNA, inhibiting translation."
    },
    {
        "id": "212",
        "question": "Which mutation causes a protein truncation?",
        "options": [
            "Missense",
            "Nonsense",
            "Silent",
            "Frameshift"
        ],
        "answer": "Nonsense",
        "difficulty": "medium",
        "topic": "Mutation and DNA Repair",
        "explanation": "Nonsense mutations introduce a stop codon, leading to truncated proteins."
    },
    {
        "id": "213",
        "question": "Which disorder is caused by a mutation in the HEXA gene?",
        "options": [
            "Tay-Sachs disease",
            "Cystic fibrosis",
            "Sickle cell anemia",
            "Phenylketonuria"
        ],
        "answer": "Tay-Sachs disease",
        "difficulty": "medium",
        "topic": "Genetic Disorders",
        "explanation": "Tay-Sachs disease results from a mutation in the HEXA gene, affecting lipid metabolism."
    },
    {
        "id": "214",
        "question": "Which population size is most likely to experience a founder effect?",
        "options": [
            "Large population",
            "Small population",
            "Stable population",
            "Migrating population"
        ],
        "answer": "Small population",
        "difficulty": "medium",
        "topic": "Population Genetics",
        "explanation": "The founder effect occurs when a small group establishes a new population with reduced genetic diversity."
    },
    {
        "id": "215",
        "question": "Which technique modifies genes in living organisms?",
        "options": [
            "PCR",
            "CRISPR-Cas9",
            "FISH",
            "Gel electrophoresis"
        ],
        "answer": "CRISPR-Cas9",
        "difficulty": "easy",
        "topic": "Genetic Engineering and Biotechnology",
        "explanation": "CRISPR-Cas9 enables precise gene editing in living organisms."
    },
    {
        "id": "216",
        "question": "Which field uses computational tools to analyze protein interactions?",
        "options": [
            "Genomics",
            "Proteomics",
            "Transcriptomics",
            "Bioinformatics"
        ],
        "answer": "Proteomics",
        "difficulty": "medium",
        "topic": "Genomics and Proteomics",
        "explanation": "Proteomics studies protein interactions and functions, often using bioinformatics tools."
    },
    {
        "id": "217",
        "question": "Which chromosomal aberration swaps segments between chromosomes?",
        "options": [
            "Deletion",
            "Inversion",
            "Translocation",
            "Duplication"
        ],
        "answer": "Translocation",
        "difficulty": "medium",
        "topic": "Cytogenetics",
        "explanation": "Translocation exchanges segments between non-homologous chromosomes."
    },
    {
        "id": "218",
        "question": "Which genes control embryonic segmentation in insects?",
        "options": [
            "Hox genes",
            "Oncogenes",
            "Tumor suppressor genes",
            "Lac operon"
        ],
        "answer": "Hox genes",
        "difficulty": "medium",
        "topic": "Developmental Genetics",
        "explanation": "Hox genes regulate segment formation in insect embryos."
    },
    {
        "id": "219",
        "question": "Which ethical issue involves informed consent for genetic research?",
        "options": [
            "Genetic privacy",
            "Eugenics",
            "Informed consent",
            "Designer babies"
        ],
        "answer": "Informed consent",
        "difficulty": "medium",
        "topic": "Ethical, Legal, and Social Issues in Genetics",
        "explanation": "Informed consent ensures participants understand genetic research risks."
    },
    {
        "id": "220",
        "question": "Which inheritance pattern results in a single gene affecting multiple traits?",
        "options": [
            "Codominance",
            "Incomplete dominance",
            "Pleiotropy",
            "Epistasis"
        ],
        "answer": "Pleiotropy",
        "difficulty": "medium",
        "topic": "Extensions of Mendelian Genetics",
        "explanation": "Pleiotropy occurs when one gene influences multiple phenotypic traits."
    },
    {
        "id": "221",
        "question": "Which chromosome region protects against DNA loss during replication?",
        "options": [
            "Centromere",
            "Telomere",
            "Nucleosome",
            "Promoter"
        ],
        "answer": "Telomere",
        "difficulty": "medium",
        "topic": "Chromosomal Basis of Inheritance",
        "explanation": "Telomeres cap chromosome ends to prevent DNA degradation."
    },
    {
        "id": "222",
        "question": "Which enzyme proofreads DNA during replication?",
        "options": [
            "DNA polymerase",
            "Helicase",
            "Ligase",
            "Primase"
        ],
        "answer": "DNA polymerase",
        "difficulty": "medium",
        "topic": "Molecular Genetics",
        "explanation": "DNA polymerase has a proofreading function to correct replication errors."
    },
    {
        "id": "223",
        "question": "Which RNA modification protects mRNA from degradation?",
        "options": [
            "Splicing",
            "Capping",
            "Tailing",
            "Editing"
        ],
        "answer": "Capping",
        "difficulty": "medium",
        "topic": "Molecular Genetics",
        "explanation": "Capping adds a 5’ cap to mRNA, enhancing its stability."
    },
    {
        "id": "224",
        "question": "Which protein complex removes introns from pre-mRNA?",
        "options": [
            "Ribosome",
            "Spliceosome",
            "Transcription factor",
            "RNA polymerase"
        ],
        "answer": "Spliceosome",
        "difficulty": "medium",
        "topic": "Molecular Genetics",
        "explanation": "The spliceosome excises introns and joins exons in mRNA."
    },
    {
        "id": "225",
        "question": "Which operon is induced by arabinose in bacteria?",
        "options": [
            "Lac operon",
            "Trp operon",
            "Ara operon",
            "Gal operon"
        ],
        "answer": "Ara operon",
        "difficulty": "hard",
        "topic": "Gene Regulation and Expression",
        "explanation": "The ara operon is induced by arabinose to metabolize this sugar."
    },
    {
        "id": "226",
        "question": "Which epigenetic mark promotes chromatin relaxation?",
        "options": [
            "DNA methylation",
            "Histone acetylation",
            "Histone methylation",
            "Chromatin condensation"
        ],
        "answer": "Histone acetylation",
        "difficulty": "medium",
        "topic": "Gene Regulation and Expression",
        "explanation": "Histone acetylation loosens chromatin, promoting gene expression."
    },
    {
        "id": "227",
        "question": "Which mutation type alters a single amino acid in a protein?",
        "options": [
            "Silent",
            "Nonsense",
            "Missense",
            "Frameshift"
        ],
        "answer": "Missense",
        "difficulty": "medium",
        "topic": "Mutation and DNA Repair",
        "explanation": "Missense mutations change one amino acid, potentially affecting protein activity."
    },
    {
        "id": "228",
        "question": "Which repair mechanism corrects UV-induced pyrimidine dimers?",
        "options": [
            "Base excision repair",
            "Nucleotide excision repair",
            "Mismatch repair",
            "Homologous recombination"
        ],
        "answer": "Nucleotide excision repair",
        "difficulty": "medium",
        "topic": "Mutation and DNA Repair",
        "explanation": "Nucleotide excision repair removes bulky lesions like pyrimidine dimers."
    },
    {
        "id": "229",
        "question": "Which disorder is caused by a mutation in the GBA gene?",
        "options": [
            "Gaucher disease",
            "Cystic fibrosis",
            "Sickle cell anemia",
            "Huntington’s disease"
        ],
        "answer": "Gaucher disease",
        "difficulty": "hard",
        "topic": "Genetic Disorders",
        "explanation": "Gaucher disease results from a mutation in the GBA gene, affecting glucocerebrosidase."
    },
    {
        "id": "230",
        "question": "Which chromosomal disorder is caused by trisomy 13?",
        "options": [
            "Down syndrome",
            "Edwards syndrome",
            "Patau syndrome",
            "Turner syndrome"
        ],
        "answer": "Patau syndrome",
        "difficulty": "medium",
        "topic": "Genetic Disorders",
        "explanation": "Patau syndrome is caused by an extra copy of chromosome 13."
    },
    {
        "id": "231",
        "question": "Which population genetic process reduces diversity by chance?",
        "options": [
            "Natural selection",
            "Mutation",
            "Genetic drift",
            "Gene flow"
        ],
        "answer": "Genetic drift",
        "difficulty": "medium",
        "topic": "Population Genetics",
        "explanation": "Genetic drift randomly alters allele frequencies, reducing diversity."
    },
    {
        "id": "232",
        "question": "Which trait is studied using variance analysis?",
        "options": [
            "Blood type",
            "Height",
            "Cystic fibrosis",
            "Eye color"
        ],
        "answer": "Height",
        "difficulty": "medium",
        "topic": "Quantitative Genetics",
        "explanation": "Height is a quantitative trait analyzed using variance to estimate heritability."
    },
    {
        "id": "233",
        "question": "Which technique separates DNA by size in a gel matrix?",
        "options": [
            "PCR",
            "Gel electrophoresis",
            "FISH",
            "CRISPR-Cas9"
        ],
        "answer": "Gel electrophoresis",
        "difficulty": "easy",
        "topic": "Genetic Engineering and Biotechnology",
        "explanation": "Gel electrophoresis separates DNA fragments based on size."
    },
    {
        "id": "234",
        "question": "Which GMO crop resists viral infections?",
        "options": [
            "Bt corn",
            "Golden rice",
            "Papaya ringspot virus-resistant papaya",
            "Roundup Ready soybeans"
        ],
        "answer": "Papaya ringspot virus-resistant papaya",
        "difficulty": "medium",
        "topic": "Genetic Engineering and Biotechnology",
        "explanation": "This papaya is engineered to resist the ringspot virus."
    },
    {
        "id": "235",
        "question": "Which field integrates genomic data with phenotypic data?",
        "options": [
            "Bioinformatics",
            "Proteomics",
            "Transcriptomics",
            "Cytogenetics"
        ],
        "answer": "Bioinformatics",
        "difficulty": "medium",
        "topic": "Genomics and Proteomics",
        "explanation": "Bioinformatics combines genomic and phenotypic data for analysis."
    },
    {
        "id": "236",
        "question": "Which chromosomal technique stains heterochromatin regions?",
        "options": [
            "G-banding",
            "C-banding",
            "FISH",
            "Spectral karyotyping"
        ],
        "answer": "C-banding",
        "difficulty": "medium",
        "topic": "Cytogenetics",
        "explanation": "C-banding stains heterochromatin, especially at centromeres."
    },
    {
        "id": "237",
        "question": "Which genes regulate floral organ identity?",
        "options": [
            "Hox genes",
            "ABC model genes",
            "Oncogenes",
            "Tumor suppressor genes"
        ],
        "answer": "ABC model genes",
        "difficulty": "hard",
        "topic": "Developmental Genetics",
        "explanation": "ABC model genes control floral organ development in plants."
    },
    {
        "id": "238",
        "question": "Which ethical issue concerns the use of genetic data in employment?",
        "options": [
            "Genetic discrimination",
            "Eugenics",
            "Designer babies",
            "Gene patenting"
        ],
        "answer": "Genetic discrimination",
        "difficulty": "medium",
        "topic": "Ethical, Legal, and Social Issues in Genetics",
        "explanation": "Genetic discrimination involves misuse of genetic information in employment."
    },
    {
        "id": "239",
        "question": "Which phenotypic ratio is seen in a monohybrid test cross?",
        "options": [
            "3:1",
            "1:2:1",
            "1:1",
            "9:3:3:1"
        ],
        "answer": "1:1",
        "difficulty": "medium",
        "topic": "Mendelian Genetics",
        "explanation": "A test cross (Aa x aa) produces a 1:1 phenotypic ratio."
    },
    {
        "id": "240",
        "question": "Which inheritance involves multiple alleles, like rabbit coat color?",
        "options": [
            "Incomplete dominance",
            "Codominance",
            "Multiple alleles",
            "Epistasis"
        ],
        "answer": "Multiple alleles",
        "difficulty": "medium",
        "topic": "Extensions of Mendelian Genetics",
        "explanation": "Multiple alleles, like the C locus in rabbits, produce multiple phenotypes."
    },
    {
        "id": "241",
        "question": "Which process shuffles alleles between homologous chromosomes?",
        "options": [
            "Mutation",
            "Recombination",
            "Segregation",
            "Transcription"
        ],
        "answer": "Recombination",
        "difficulty": "medium",
        "topic": "Chromosomal Basis of Inheritance",
        "explanation": "Recombination during meiosis creates new allele combinations."
    },
    {
        "id": "242",
        "question": "Which DNA region enhances transcription from a distance?",
        "options": [
            "Promoter",
            "Enhancer",
            "Intron",
            "Exon"
        ],
        "answer": "Enhancer",
        "difficulty": "medium",
        "topic": "Molecular Genetics",
        "explanation": "Enhancers increase transcription by binding transcription factors."
    },
    {
        "id": "243",
        "question": "Which mutation is neutral in its effect on fitness?",
        "options": [
            "Harmful",
            "Beneficial",
            "Silent",
            "Nonsense"
        ],
        "answer": "Silent",
        "difficulty": "medium",
        "topic": "Mutation and DNA Repair",
        "explanation": "Silent mutations do not affect protein function or organism fitness."
    },
    {
        "id": "244",
        "question": "Which disorder is caused by a recessive mutation in the SMN1 gene?",
        "options": [
            "Spinal muscular atrophy",
            "Cystic fibrosis",
            "Huntington’s disease",
            "Phenylketonuria"
        ],
        "answer": "Spinal muscular atrophy",
        "difficulty": "hard",
        "topic": "Genetic Disorders",
        "explanation": "Spinal muscular atrophy results from mutations in the SMN1 gene."
    },
    {
        "id": "246",
        "question": "Which population genetic process creates new genetic variation?",
        "options": [
            "Genetic drift",
            "Mutation",
            "Natural selection",
            "Gene flow"
        ],
        "answer": "Mutation",
        "difficulty": "easy",
        "topic": "Population Genetics",
        "explanation": "Mutations introduce new alleles, increasing genetic variation."
    },
    {
        "id": "247",
        "question": "Which technique maps quantitative trait loci?",
        "options": [
            "PCR",
            "GWAS",
            "FISH",
            "Karyotyping"
        ],
        "answer": "GWAS",
        "difficulty": "medium",
        "topic": "Quantitative Genetics",
        "explanation": "GWAS identifies loci associated with quantitative traits."
    },
    {
        "id": "248",
        "question": "Which GMO crop is engineered to resist pests?",
        "options": [
            "Golden rice",
            "Bt corn",
            "Roundup Ready soybeans",
            "Flavr Savr tomato"
        ],
        "answer": "Bt corn",
        "difficulty": "medium",
        "topic": "Genetic Engineering and Biotechnology",
        "explanation": "Bt corn produces a toxin to resist insect damage."
    },
    {
        "id": "249",
        "question": "Which field studies gene expression across a genome?",
        "options": [
            "Proteomics",
            "Transcriptomics",
            "Cytogenetics",
            "Genomics"
        ],
        "answer": "Transcriptomics",
        "difficulty": "medium",
        "topic": "Genomics and Proteomics",
        "explanation": "Transcriptomics analyzes RNA to study gene expression patterns."
    },
    {
        "id": "250",
        "question": "Which technique stains chromosomes for heterochromatin analysis?",
        "options": [
            "G-banding",
            "C-banding",
            "FISH",
            "Spectral karyotyping"
        ],
        "answer": "C-banding",
        "difficulty": "medium",
        "topic": "Cytogenetics",
        "explanation": "C-banding highlights heterochromatin regions."
    },
    {
        "id": 251,
        "question": "Which field of genetics studies the structure and function of genes at the molecular level?",
        "options": [
            "Classical genetics",
            "Molecular genetics",
            "Population genetics",
            "Cytogenetics"
        ],
        "answer": "Molecular genetics",
        "difficulty": "easy",
        "topic": "Introduction to Genetics",
        "explanation": "Molecular genetics focuses on gene structure, function, and regulation at the DNA and RNA level."
    },
    {
        "id": 252,
        "question": "Which scientist discovered transposable elements in maize?",
        "options": [
            "Gregor Mendel",
            "Barbara McClintock",
            "Thomas Morgan",
            "James Watson"
        ],
        "answer": "Barbara McClintock",
        "difficulty": "medium",
        "topic": "Introduction to Genetics",
        "explanation": "Barbara McClintock’s work on maize led to the discovery of transposable elements, or 'jumping genes.'"
    },
    {
        "id": 253,
        "question": "Which genetic application helps trace ancestry using DNA markers?",
        "options": [
            "Gene therapy",
            "Genetic genealogy",
            "Karyotyping",
            "CRISPR editing"
        ],
        "answer": "Genetic genealogy",
        "difficulty": "easy",
        "topic": "Introduction to Genetics",
        "explanation": "Genetic genealogy uses DNA markers to trace familial and ancestral relationships."
    },
    {
        "id": 254,
        "question": "Which Mendelian law explains why traits like seed color and shape assort independently?",
        "options": [
            "Law of Segregation",
            "Law of Dominance",
            "Law of Independent Assortment",
            "Law of Recessiveness"
        ],
        "answer": "Law of Independent Assortment",
        "difficulty": "medium",
        "topic": "Mendelian Genetics",
        "explanation": "The Law of Independent Assortment states that genes for different traits assort independently during gamete formation."
    },
    {
        "id": 255,
        "question": "What is the probability of an offspring being homozygous recessive in a cross between two heterozygous parents (Aa x Aa)?",
        "options": [
            "25%",
            "50%",
            "75%",
            "100%"
        ],
        "answer": "25%",
        "difficulty": "medium",
        "topic": "Mendelian Genetics",
        "explanation": "In a monohybrid cross (Aa x Aa), the probability of an aa offspring is 1/4 or 25%."
    },
    {
        "id": 256,
        "question": "Which type of cross involves two traits, such as seed color and shape?",
        "options": [
            "Monohybrid cross",
            "Dihybrid cross",
            "Test cross",
            "Back cross"
        ],
        "answer": "Dihybrid cross",
        "difficulty": "easy",
        "topic": "Mendelian Genetics",
        "explanation": "A dihybrid cross examines the inheritance of two different traits simultaneously."
    },
    {
        "id": 257,
        "question": "Which term refers to the genetic makeup of an organism?",
        "options": [
            "Phenotype",
            "Genotype",
            "Allele",
            "Trait"
        ],
        "answer": "Genotype",
        "difficulty": "easy",
        "topic": "Mendelian Genetics",
        "explanation": "Genotype describes an organism’s genetic composition, such as AA or Aa."
    },
    {
        "id": 258,
        "question": "Which inheritance pattern results in a phenotype intermediate between two homozygotes?",
        "options": [
            "Codominance",
            "Incomplete dominance",
            "Epistasis",
            "Polygenic inheritance"
        ],
        "answer": "Incomplete dominance",
        "difficulty": "medium",
        "topic": "Extensions of Mendelian Genetics",
        "explanation": "Incomplete dominance produces a blended phenotype in heterozygotes, like red and white flowers yielding pink."
    },
    {
        "id": 259,
        "question": "Which blood group allele is recessive in the ABO system?",
        "options": [
            "A",
            "B",
            "AB",
            "O"
        ],
        "answer": "O",
        "difficulty": "medium",
        "topic": "Extensions of Mendelian Genetics",
        "explanation": "The O allele is recessive, expressed only when homozygous (OO)."
    },
    {
        "id": 260,
        "question": "Which genetic interaction results in a 9:3:4 phenotypic ratio in a dihybrid cross?",
        "options": [
            "Codominance",
            "Epistasis",
            "Incomplete dominance",
            "Pleiotropy"
        ],
        "answer": "Epistasis",
        "difficulty": "hard",
        "topic": "Extensions of Mendelian Genetics",
        "explanation": "Epistasis can produce a 9:3:4 ratio when one gene masks the expression of another."
    },
    {
        "id": 261,
        "question": "Which term describes traits controlled by more than one gene, such as skin color?",
        "options": [
            "Monogenic",
            "Polygenic",
            "Codominant",
            "Lethal"
        ],
        "answer": "Polygenic",
        "difficulty": "easy",
        "topic": "Extensions of Mendelian Genetics",
        "explanation": "Polygenic traits are influenced by multiple genes, leading to continuous variation."
    },
    {
        "id": 262,
        "question": "Which chromosome type carries sex-linked traits in humans?",
        "options": [
            "Autosomes",
            "Sex chromosomes",
            "Mitochondrial chromosomes",
            "Plasmids"
        ],
        "answer": "Sex chromosomes",
        "difficulty": "easy",
        "topic": "Chromosomal Basis of Inheritance",
        "explanation": "Sex chromosomes (X and Y) carry genes for sex-linked traits."
    },
    {
        "id": 263,
        "question": "Which technique identifies numerical or structural chromosome abnormalities?",
        "options": [
            "PCR",
            "Karyotyping",
            "Gel electrophoresis",
            "CRISPR"
        ],
        "answer": "Karyotyping",
        "difficulty": "easy",
        "topic": "Chromosomal Basis of Inheritance",
        "explanation": "Karyotyping visualizes chromosomes to detect abnormalities like trisomy."
    },
    {
        "id": 264,
        "question": "Which inheritance pattern is associated with Duchenne muscular dystrophy?",
        "options": [
            "Autosomal dominant",
            "Autosomal recessive",
            "X-linked recessive",
            "Y-linked"
        ],
        "answer": "X-linked recessive",
        "difficulty": "medium",
        "topic": "Chromosomal Basis of Inheritance",
        "explanation": "Duchenne muscular dystrophy is caused by a recessive mutation on the X chromosome."
    },
    {
        "id": 265,
        "question": "Which process during meiosis increases genetic diversity by exchanging genetic material?",
        "options": [
            "Segregation",
            "Crossing over",
            "Independent assortment",
            "Mutation"
        ],
        "answer": "Crossing over",
        "difficulty": "medium",
        "topic": "Chromosomal Basis of Inheritance",
        "explanation": "Crossing over exchanges segments between homologous chromosomes, creating new allele combinations."
    },
    {
        "id": 266,
        "question": "Which base pairs with guanine in DNA?",
        "options": [
            "Adenine",
            "Thymine",
            "Cytosine",
            "Uracil"
        ],
        "answer": "Cytosine",
        "difficulty": "easy",
        "topic": "Molecular Genetics",
        "explanation": "Guanine pairs with cytosine via three hydrogen bonds in DNA."
    },
    {
        "id": 267,
        "question": "Which enzyme adds nucleotides to the growing DNA strand during replication?",
        "options": [
            "Helicase",
            "Primase",
            "DNA polymerase",
            "Ligase"
        ],
        "answer": "DNA polymerase",
        "difficulty": "medium",
        "topic": "Molecular Genetics",
        "explanation": "DNA polymerase synthesizes new DNA strands by adding nucleotides."
    },
    {
        "id": 268,
        "question": "Which RNA modification adds a protective 3’ tail?",
        "options": [
            "Capping",
            "Splicing",
            "Polyadenylation",
            "Editing"
        ],
        "answer": "Polyadenylation",
        "difficulty": "medium",
        "topic": "Molecular Genetics",
        "explanation": "Polyadenylation adds a poly-A tail to mRNA, enhancing stability and export."
    },
    {
        "id": 269,
        "question": "Which molecule carries the anticodon during protein synthesis?",
        "options": [
            "mRNA",
            "tRNA",
            "rRNA",
            "miRNA"
        ],
        "answer": "tRNA",
        "difficulty": "easy",
        "topic": "Molecular Genetics",
        "explanation": "tRNA carries the anticodon that pairs with mRNA codons during translation."
    },
    {
        "id": 270,
        "question": "Which prokaryotic operon regulates galactose metabolism?",
        "options": [
            "Lac operon",
            "Trp operon",
            "Gal operon",
            "Ara operon"
        ],
        "answer": "Gal operon",
        "difficulty": "medium",
        "topic": "Gene Regulation and Expression",
        "explanation": "The gal operon controls genes for galactose metabolism in bacteria."
    },
    {
        "id": 271,
        "question": "Which epigenetic modification typically represses gene expression?",
        "options": [
            "Histone acetylation",
            "DNA methylation",
            "Chromatin remodeling",
            "Histone phosphorylation"
        ],
        "answer": "DNA methylation",
        "difficulty": "medium",
        "topic": "Gene Regulation and Expression",
        "explanation": "DNA methylation adds methyl groups to DNA, often silencing genes."
    },
    {
        "id": 272,
        "question": "Which RNA molecule inhibits translation by binding to mRNA?",
        "options": [
            "tRNA",
            "rRNA",
            "miRNA",
            "mRNA"
        ],
        "answer": "miRNA",
        "difficulty": "medium",
        "topic": "Gene Regulation and Expression",
        "explanation": "MicroRNAs (miRNAs) bind to mRNA, blocking translation or promoting degradation."
    },
    {
        "id": 273,
        "question": "Which protein recruits RNA polymerase to the promoter in eukaryotes?",
        "options": [
            "Repressor",
            "Transcription factor",
            "Spliceosome",
            "Ribosome"
        ],
        "answer": "Transcription factor",
        "difficulty": "hard",
        "topic": "Gene Regulation and Expression",
        "explanation": "Transcription factors bind promoters to initiate transcription by RNA polymerase."
    },
    {
        "id": 274,
        "question": "Which mutation type involves the addition of nucleotides?",
        "options": [
            "Deletion",
            "Insertion",
            "Substitution",
            "Inversion"
        ],
        "answer": "Insertion",
        "difficulty": "easy",
        "topic": "Mutation and DNA Repair",
        "explanation": "Insertions add nucleotides to the DNA sequence, potentially disrupting genes."
    },
    {
        "id": 275,
        "question": "Which mutagen causes DNA damage through ionizing radiation?",
        "options": [
            "UV light",
            "X-rays",
            "Base analogs",
            "Intercalating agents"
        ],
        "answer": "X-rays",
        "difficulty": "medium",
        "topic": "Mutation and DNA Repair",
        "explanation": "X-rays cause double-strand breaks and other DNA damage."
    },
    {
        "id": 276,
        "question": "Which DNA repair mechanism corrects errors during replication?",
        "options": [
            "Nucleotide excision repair",
            "Mismatch repair",
            "Base excision repair",
            "Double-strand break repair"
        ],
        "answer": "Mismatch repair",
        "difficulty": "medium",
        "topic": "Mutation and DNA Repair",
        "explanation": "Mismatch repair fixes base-pairing errors made during DNA replication."
    },
    {
        "id": 277,
        "question": "Which mutation results in a protein with altered function?",
        "options": [
            "Silent",
            "Missense",
            "Nonsense",
            "Frameshift"
        ],
        "answer": "Missense",
        "difficulty": "medium",
        "topic": "Mutation and DNA Repair",
        "explanation": "Missense mutations change one amino acid, potentially altering protein function."
    },
    {
        "id": 278,
        "question": "Which disorder is caused by a mutation in the F8 gene?",
        "options": [
            "Hemophilia A",
            "Cystic fibrosis",
            "Sickle cell anemia",
            "Huntington’s disease"
        ],
        "answer": "Hemophilia A",
        "difficulty": "medium",
        "topic": "Genetic Disorders",
        "explanation": "Hemophilia A is caused by mutations in the F8 gene, affecting blood clotting."
    },
    {
        "id": 279,
        "question": "Which chromosomal disorder results from an extra Y chromosome in males?",
        "options": [
            "Klinefelter syndrome",
            "XYY syndrome",
            "Turner syndrome",
            "Down syndrome"
        ],
        "answer": "XYY syndrome",
        "difficulty": "medium",
        "topic": "Genetic Disorders",
        "explanation": "XYY syndrome occurs when males have an extra Y chromosome."
    },
    {
        "id": 280,
        "question": "Which disorder is caused by a mutation in the LDLR gene?",
        "options": [
            "Familial hypercholesterolemia",
            "Cystic fibrosis",
            "Sickle cell anemia",
            "Tay-Sachs disease"
        ],
        "answer": "Familial hypercholesterolemia",
        "difficulty": "hard",
        "topic": "Genetic Disorders",
        "explanation": "Familial hypercholesterolemia is due to mutations in the LDLR gene, causing high cholesterol."
    },
    {
        "id": 281,
        "question": "Which metabolic disorder results from a deficiency in homogentisate oxidase?",
        "options": [
            "Phenylketonuria",
            "Alkaptonuria",
            "Galactosemia",
            "Tay-Sachs disease"
        ],
        "answer": "Alkaptonuria",
        "difficulty": "hard",
        "topic": "Genetic Disorders",
        "explanation": "Alkaptonuria is caused by a mutation affecting homogentisate oxidase."
    },
    {
        "id": 282,
        "question": "Which term describes the total genetic variation in a population?",
        "options": [
            "Allele frequency",
            "Gene pool",
            "Genotype frequency",
            "Polymorphism"
        ],
        "answer": "Gene pool",
        "difficulty": "easy",
        "topic": "Population Genetics",
        "explanation": "The gene pool encompasses all alleles in a population."
    },
    {
        "id": 283,
        "question": "Which Hardy-Weinberg assumption requires no gene flow?",
        "options": [
            "Random mating",
            "No migration",
            "Small population",
            "High mutation rate"
        ],
        "answer": "No migration",
        "difficulty": "medium",
        "topic": "Population Genetics",
        "explanation": "No migration ensures allele frequencies remain stable in Hardy-Weinberg equilibrium."
    },
    {
        "id": 284,
        "question": "Which process causes allele frequency changes due to random sampling?",
        "options": [
            "Natural selection",
            "Genetic drift",
            "Mutation",
            "Gene flow"
        ],
        "answer": "Genetic drift",
        "difficulty": "medium",
        "topic": "Population Genetics",
        "explanation": "Genetic drift causes random allele frequency changes, especially in small populations."
    },
    {
        "id": 285,
        "question": "Which term describes multiple forms of a gene in a population?",
        "options": [
            "Mutation",
            "Allele",
            "Polymorphism",
            "Haplotype"
        ],
        "answer": "Allele",
        "difficulty": "easy",
        "topic": "Population Genetics",
        "explanation": "Alleles are different versions of a gene present in a population."
    },
    {
        "id": 286,
        "question": "Which measure estimates the genetic basis of phenotypic variation?",
        "options": [
            "Allele frequency",
            "Heritability",
            "Recombination rate",
            "Polymorphism"
        ],
        "answer": "Heritability",
        "difficulty": "medium",
        "topic": "Quantitative Genetics",
        "explanation": "Heritability quantifies the proportion of trait variation due to genetic factors."
    },
    {
        "id": 287,
        "question": "Which study compares genetic and environmental influences on traits?",
        "options": [
            "Pedigree analysis",
            "Twin study",
            "Linkage mapping",
            "GWAS"
        ],
        "answer": "Twin study",
        "difficulty": "medium",
        "topic": "Quantitative Genetics",
        "explanation": "Twin studies compare identical and fraternal twins to assess genetic contributions."
    },
    {
        "id": 288,
        "question": "Which factor interacts with genotype to influence quantitative traits?",
        "options": [
            "Mutation",
            "Environment",
            "Recombination",
            "Selection"
        ],
        "answer": "Environment",
        "difficulty": "easy",
        "topic": "Quantitative Genetics",
        "explanation": "Environmental factors interact with genotypes to shape quantitative traits."
    },
    {
        "id": 289,
        "question": "Which trait exhibits a bell-shaped distribution due to multiple gene effects?",
        "options": [
            "Blood type",
            "Weight",
            "Cystic fibrosis",
            "Eye color"
        ],
        "answer": "Weight",
        "difficulty": "medium",
        "topic": "Quantitative Genetics",
        "explanation": "Weight is a quantitative trait with a continuous distribution influenced by multiple genes."
    },
    {
        "id": 290,
        "question": "Which technique uses thermal cycling to amplify DNA?",
        "options": [
            "Gel electrophoresis",
            "PCR",
            "FISH",
            "CRISPR"
        ],
        "answer": "PCR",
        "difficulty": "easy",
        "topic": "Genetic Engineering and Biotechnology",
        "explanation": "Polymerase Chain Reaction (PCR) amplifies DNA using thermal cycling."
    },
    {
        "id": 291,
        "question": "Which system guides Cas9 to specific DNA sequences in gene editing?",
        "options": [
            "Guide RNA",
            "Primer",
            "Probe",
            "Vector"
        ],
        "answer": "Guide RNA",
        "difficulty": "medium",
        "topic": "Genetic Engineering and Biotechnology",
        "explanation": "Guide RNA directs Cas9 to target DNA sequences in CRISPR-Cas9."
    },
    {
        "id": 292,
        "question": "Which molecule is used as a cloning vector in bacteria?",
        "options": [
            "Plasmid",
            "Primer",
            "Probe",
            "Enzyme"
        ],
        "answer": "Plasmid",
        "difficulty": "easy",
        "topic": "Genetic Engineering and Biotechnology",
        "explanation": "Plasmids are circular DNA molecules used to carry foreign DNA into bacteria."
    },
    {
        "id": 293,
        "question": "Which GMO crop is modified to enhance nutritional content?",
        "options": [
            "Bt corn",
            "Golden rice",
            "Roundup Ready soybeans",
            "Flavr Savr tomato"
        ],
        "answer": "Golden rice",
        "difficulty": "medium",
        "topic": "Genetic Engineering and Biotechnology",
        "explanation": "Golden rice is engineered to produce vitamin A precursors."
    },
    {
        "id": 294,
        "question": "Which field studies the entire set of proteins in an organism?",
        "options": [
            "Genomics",
            "Proteomics",
            "Transcriptomics",
            "Cytogenetics"
        ],
        "answer": "Proteomics",
        "difficulty": "medium",
        "topic": "Genomics and Proteomics",
        "explanation": "Proteomics analyzes the structure, function, and interactions of all proteins."
    },
    {
        "id": 295,
        "question": "Which database stores protein sequence and structure data?",
        "options": [
            "GenBank",
            "UniProt",
            "Ensembl",
            "PDB"
        ],
        "answer": "UniProt",
        "difficulty": "medium",
        "topic": "Genomics and Proteomics",
        "explanation": "UniProt provides comprehensive protein sequence and function data."
    },
    {
        "id": 296,
        "question": "Which technique compares gene functions across species?",
        "options": [
            "Functional genomics",
            "Comparative genomics",
            "Transcriptomics",
            "Proteomics"
        ],
        "answer": "Comparative genomics",
        "difficulty": "medium",
        "topic": "Genomics and Proteomics",
        "explanation": "Comparative genomics analyzes similarities and differences in genomes across species."
    },
    {
        "id": 297,
        "question": "Which cytogenetic technique uses fluorescent probes to detect gene locations?",
        "options": [
            "G-banding",
            "FISH",
            "Karyotyping",
            "C-banding"
        ],
        "answer": "FISH",
        "difficulty": "medium",
        "topic": "Cytogenetics",
        "explanation": "Fluorescent in situ hybridization (FISH) maps genes using fluorescent DNA probes."
    },
    {
        "id": 298,
        "question": "Which chromosomal aberration removes a segment of DNA?",
        "options": [
            "Duplication",
            "Inversion",
            "Deletion",
            "Translocation"
        ],
        "answer": "Deletion",
        "difficulty": "easy",
        "topic": "Cytogenetics",
        "explanation": "Deletion results in the loss of a chromosome segment, potentially causing disorders."
    },
    {
        "id": 299,
        "question": "Which staining technique highlights telomeres on chromosomes?",
        "options": [
            "G-banding",
            "C-banding",
            "Q-banding",
            "T-banding"
        ],
        "answer": "T-banding",
        "difficulty": "hard",
        "topic": "Cytogenetics",
        "explanation": "T-banding specifically stains telomere regions of chromosomes."
    },
    {
        "id": 300,
        "question": "Which genes control body axis formation in Drosophila?",
        "options": [
            "Hox genes",
            "Oncogenes",
            "Tumor suppressor genes",
            "Lac operon"
        ],
        "answer": "Hox genes",
        "difficulty": "medium",
        "topic": "Developmental Genetics",
        "explanation": "Hox genes regulate body axis and segment identity in Drosophila embryos."
    },
    {
        "id": 301,
        "question": "Which process allows stem cells to become specialized cell types?",
        "options": [
            "Replication",
            "Differentiation",
            "Mutation",
            "Recombination"
        ],
        "answer": "Differentiation",
        "difficulty": "easy",
        "topic": "Developmental Genetics",
        "explanation": "Differentiation enables stem cells to develop into specialized cell types."
    },
    {
        "id": 302,
        "question": "Which cells have the potential to regenerate tissues due to genetic regulation?",
        "options": [
            "Somatic cells",
            "Stem cells",
            "Gametes",
            "Red blood cells"
        ],
        "answer": "Stem cells",
        "difficulty": "easy",
        "topic": "Developmental Genetics",
        "explanation": "Stem cells can regenerate tissues due to their pluripotent genetic regulation."
    },
    {
        "id": 303,
        "question": "Which genetic process shapes organ development in embryos?",
        "options": [
            "Transcription",
            "Morphogenesis",
            "Replication",
            "Crossing over"
        ],
        "answer": "Morphogenesis",
        "difficulty": "medium",
        "topic": "Developmental Genetics",
        "explanation": "Morphogenesis involves gene-regulated processes that shape organs and tissues."
    },
    {
        "id": 304,
        "question": "Which process informs couples about inherited disease risks?",
        "options": [
            "Gene therapy",
            "Genetic counseling",
            "Prenatal screening",
            "CRISPR editing"
        ],
        "answer": "Genetic counseling",
        "difficulty": "easy",
        "topic": "Ethical, Legal, and Social Issues in Genetics",
        "explanation": "Genetic counseling provides information on genetic risks and inheritance."
    },
    {
        "id": 305,
        "question": "Which technique samples fetal cells for genetic testing?",
        "options": [
            "Chorionic villus sampling",
            "PCR",
            "Gel electrophoresis",
            "FISH"
        ],
        "answer": "Chorionic villus sampling",
        "difficulty": "medium",
        "topic": "Ethical, Legal, and Social Issues in Genetics",
        "explanation": "Chorionic villus sampling collects fetal cells to test for genetic disorders."
    },
    {
        "id": 306,
        "question": "Which ethical concern involves modifying embryos for enhanced intelligence?",
        "options": [
            "Genetic privacy",
            "Designer babies",
            "Gene therapy",
            "Informed consent"
        ],
        "answer": "Designer babies",
        "difficulty": "medium",
        "topic": "Ethical, Legal, and Social Issues in Genetics",
        "explanation": "Designer babies raise ethical issues about selecting non-medical traits like intelligence."
    },
    {
        "id": 307,
        "question": "Which approach treats genetic disorders by altering defective genes?",
        "options": [
            "Genetic counseling",
            "Prenatal screening",
            "Gene therapy",
            "Karyotyping"
        ],
        "answer": "Gene therapy",
        "difficulty": "easy",
        "topic": "Ethical, Legal, and Social Issues in Genetics",
        "explanation": "Gene therapy corrects genetic defects by introducing functional genes."
    },
    {
        "id": 308,
        "question": "Which phenotypic ratio results from a dihybrid cross with recessive epistasis?",
        "options": [
            "9:3:3:1",
            "9:3:4",
            "12:3:1",
            "1:2:1"
        ],
        "answer": "9:3:4",
        "difficulty": "hard",
        "topic": "Extensions of Mendelian Genetics",
        "explanation": "Recessive epistasis modifies the dihybrid ratio to 9:3:4 by masking one gene’s effect."
    },
    {
        "id": 309,
        "question": "Which term describes an allele that masks the effect of another?",
        "options": [
            "Recessive",
            "Dominant",
            "Codominant",
            "Lethal"
        ],
        "answer": "Dominant",
        "difficulty": "easy",
        "topic": "Mendelian Genetics",
        "explanation": "A dominant allele masks the expression of a recessive allele in heterozygotes."
    },
    {
        "id": 310,
        "question": "Which cross determines whether two genes are linked on the same chromosome?",
        "options": [
            "Monohybrid cross",
            "Dihybrid cross",
            "Test cross",
            "Back cross"
        ],
        "answer": "Test cross",
        "difficulty": "medium",
        "topic": "Chromosomal Basis of Inheritance",
        "explanation": "A test cross reveals gene linkage by analyzing recombination frequencies."
    },
    {
        "id": 311,
        "question": "Which nitrogenous base is unique to RNA?",
        "options": [
            "Thymine",
            "Uracil",
            "Guanine",
            "Cytosine"
        ],
        "answer": "Uracil",
        "difficulty": "easy",
        "topic": "Molecular Genetics",
        "explanation": "Uracil replaces thymine in RNA, pairing with adenine."
    },
    {
        "id": 312,
        "question": "Which enzyme initiates DNA replication by synthesizing RNA primers?",
        "options": [
            "DNA polymerase",
            "Primase",
            "Helicase",
            "Ligase"
        ],
        "answer": "Primase",
        "difficulty": "medium",
        "topic": "Molecular Genetics",
        "explanation": "Primase synthesizes RNA primers to initiate DNA replication."
    },
    {
        "id": 313,
        "question": "Which RNA processing step removes non-coding regions?",
        "options": [
            "Capping",
            "Splicing",
            "Tailing",
            "Editing"
        ],
        "answer": "Splicing",
        "difficulty": "medium",
        "topic": "Molecular Genetics",
        "explanation": "Splicing removes introns and joins exons in pre-mRNA."
    },
    {
        "id": 314,
        "question": "Which codon signals the end of translation?",
        "options": [
            "AUG",
            "UAA",
            "GCA",
            "CCC"
        ],
        "answer": "UAA",
        "difficulty": "medium",
        "topic": "Molecular Genetics",
        "explanation": "UAA is a stop codon that terminates translation."
    },
    {
        "id": 315,
        "question": "Which operon is repressed by high levels of arabinose in bacteria?",
        "options": [
            "Lac operon",
            "Trp operon",
            "Ara operon",
            "Gal operon"
        ],
        "answer": "Ara operon",
        "difficulty": "hard",
        "topic": "Gene Regulation and Expression",
        "explanation": "The ara operon is regulated by arabinose levels in bacteria."
    },
    {
        "id": 316,
        "question": "Which histone modification is associated with gene silencing?",
        "options": [
            "Acetylation",
            "Methylation",
            "Phosphorylation",
            "Ubiquitination"
        ],
        "answer": "Methylation",
        "difficulty": "medium",
        "topic": "Gene Regulation and Expression",
        "explanation": "Histone methylation can compact chromatin, silencing gene expression."
    },
    {
        "id": 317,
        "question": "Which mutation shifts the reading frame by adding a single nucleotide?",
        "options": [
            "Silent mutation",
            "Missense mutation",
            "Frameshift mutation",
            "Nonsense mutation"
        ],
        "answer": "Frameshift mutation",
        "difficulty": "medium",
        "topic": "Mutation and DNA Repair",
        "explanation": "Frameshift mutations disrupt the codon reading frame by non-triplet insertions."
    },
    {
        "id": 318,
        "question": "Which repair mechanism fixes double-strand DNA breaks?",
        "options": [
            "Base excision repair",
            "Nucleotide excision repair",
            "Homologous recombination",
            "Mismatch repair"
        ],
        "answer": "Homologous recombination",
        "difficulty": "hard",
        "topic": "Mutation and DNA Repair",
        "explanation": "Homologous recombination repairs double-strand breaks using a homologous template."
    },
    {
        "id": 319,
        "question": "Which disorder is caused by a dominant mutation in the FGFR3 gene?",
        "options": [
            "Achondroplasia",
            "Cystic fibrosis",
            "Sickle cell anemia",
            "Tay-Sachs disease"
        ],
        "answer": "Achondroplasia",
        "difficulty": "medium",
        "topic": "Genetic Disorders",
        "explanation": "Achondroplasia, a form of dwarfism, is caused by a mutation in the FGFR3 gene."
    },
    {
        "id": 320,
        "question": "Which disorder results from a missing chromosome 5 segment?",
        "options": [
            "Cri-du-chat syndrome",
            "Down syndrome",
            "Turner syndrome",
            "Klinefelter syndrome"
        ],
        "answer": "Cri-du-chat syndrome",
        "difficulty": "medium",
        "topic": "Genetic Disorders",
        "explanation": "Cri-du-chat syndrome is caused by a deletion on chromosome 5."
    },
    {
        "id": 321,
        "question": "Which equation represents genotype frequencies in Hardy-Weinberg equilibrium?",
        "options": [
            "p + q = 1",
            "p^2 + q^2 = 1",
            "p^2 + 2pq + q^2 = 1",
            "pq = 1"
        ],
        "answer": "p^2 + 2pq + q^2 = 1",
        "difficulty": "medium",
        "topic": "Population Genetics",
        "explanation": "This equation describes genotype frequencies (homozygous dominant, heterozygous, homozygous recessive)."
    },
    {
        "id": 322,
        "question": "Which process alters allele frequencies through emigration?",
        "options": [
            "Mutation",
            "Genetic drift",
            "Gene flow",
            "Natural selection"
        ],
        "answer": "Gene flow",
        "difficulty": "medium",
        "topic": "Population Genetics",
        "explanation": "Gene flow transfers alleles between populations via migration."
    },
    {
        "id": 323,
        "question": "Which factor promotes allele fixation in small populations?",
        "options": [
            "Natural selection",
            "Genetic drift",
            "Mutation",
            "Gene flow"
        ],
        "answer": "Genetic drift",
        "difficulty": "medium",
        "topic": "Population Genetics",
        "explanation": "Genetic drift can lead to allele fixation or loss in small populations."
    },
    {
        "id": 324,
        "question": "Which trait is influenced by both genetics and diet?",
        "options": [
            "Blood type",
            "Obesity",
            "Hemophilia",
            "Cystic fibrosis"
        ],
        "answer": "Obesity",
        "difficulty": "medium",
        "topic": "Quantitative Genetics",
        "explanation": "Obesity is a multifactorial trait affected by genetic and environmental factors like diet."
    },
    {
        "id": 325,
        "question": "Which enzyme creates sticky ends in DNA for cloning?",
        "options": [
            "DNA polymerase",
            "Restriction enzyme",
            "Ligase",
            "Helicase"
        ],
        "answer": "Restriction enzyme",
        "difficulty": "medium",
        "topic": "Genetic Engineering and Biotechnology",
        "explanation": "Restriction enzymes cut DNA at specific sites, creating sticky ends for cloning."
    },
    {
        "id": 326,
        "question": "Which technique uses fluorescent dyes to sequence DNA?",
        "options": [
            "Sanger sequencing",
            "PCR",
            "FISH",
            "Gel electrophoresis"
        ],
        "answer": "Sanger sequencing",
        "difficulty": "medium",
        "topic": "Genomics and Proteomics",
        "explanation": "Sanger sequencing uses fluorescent dideoxynucleotides to determine DNA sequences."
    },
    {
        "id": 327,
        "question": "Which chromosomal aberration reverses a DNA segment’s orientation?",
        "options": [
            "Deletion",
            "Inversion",
            "Translocation",
            "Duplication"
        ],
        "answer": "Inversion",
        "difficulty": "medium",
        "topic": "Cytogenetics",
        "explanation": "Inversion reverses a chromosome segment, potentially disrupting gene function."
    },
    {
        "id": 328,
        "question": "Which genes regulate cell fate in early vertebrate embryos?",
        "options": [
            "Homeotic genes",
            "Oncogenes",
            "Tumor suppressor genes",
            "Operon genes"
        ],
        "answer": "Homeotic genes",
        "difficulty": "medium",
        "topic": "Developmental Genetics",
        "explanation": "Homeotic genes, like Hox genes, determine cell fate in vertebrate embryos."
    },
    {
        "id": 329,
        "question": "Which ethical issue involves the use of genetic data in insurance decisions?",
        "options": [
            "Genetic discrimination",
            "Eugenics",
            "Designer babies",
            "Gene patenting"
        ],
        "answer": "Genetic discrimination",
        "difficulty": "medium",
        "topic": "Ethical, Legal, and Social Issues in Genetics",
        "explanation": "Genetic discrimination concerns the misuse of genetic data in insurance or employment."
    },
    {
        "id": 330,
        "question": "Which phenotypic ratio results from a monohybrid cross with codominance?",
        "options": [
            "3:1",
            "1:2:1",
            "1:1",
            "9:3:3:1"
        ],
        "answer": "1:2:1",
        "difficulty": "medium",
        "topic": "Extensions of Mendelian Genetics",
        "explanation": "Codominance in a monohybrid cross (e.g., IAIB x IAIB) yields a 1:2:1 phenotypic ratio."
    },
    {
        "id": 331,
        "question": "Which chromosome region facilitates microtubule attachment during cell division?",
        "options": [
            "Telomere",
            "Centromere",
            "Nucleosome",
            "Promoter"
        ],
        "answer": "Centromere",
        "difficulty": "medium",
        "topic": "Chromosomal Basis of Inheritance",
        "explanation": "Centromeres allow spindle fibers to attach for chromosome segregation."
    },
    {
        "id": 332,
        "question": "Which enzyme unwinds the DNA double helix during transcription?",
        "options": [
            "DNA polymerase",
            "Helicase",
            "RNA polymerase",
            "Ligase"
        ],
        "answer": "Helicase",
        "difficulty": "medium",
        "topic": "Molecular Genetics",
        "explanation": "Helicase unwinds DNA to allow RNA polymerase to transcribe the template strand."
    },
    {
        "id": 333,
        "question": "Which RNA molecule forms the catalytic core of the ribosome?",
        "options": [
            "mRNA",
            "tRNA",
            "rRNA",
            "miRNA"
        ],
        "answer": "rRNA",
        "difficulty": "medium",
        "topic": "Molecular Genetics",
        "explanation": "Ribosomal RNA (rRNA) catalyzes peptide bond formation in the ribosome."
    },
    {
        "id": 334,
        "question": "Which protein inhibits gene expression by binding to operator regions?",
        "options": [
            "Activator",
            "Repressor",
            "Transcription factor",
            "RNA polymerase"
        ],
        "answer": "Repressor",
        "difficulty": "medium",
        "topic": "Gene Regulation and Expression",
        "explanation": "Repressors bind to operators, blocking transcription in prokaryotes."
    },
    {
        "id": 335,
        "question": "Which mutagen incorporates into DNA, causing mispairing?",
        "options": [
            "Base analogs",
            "UV light",
            "X-rays",
            "Intercalating agents"
        ],
        "answer": "Base analogs",
        "difficulty": "hard",
        "topic": "Mutation and DNA Repair",
        "explanation": "Base analogs, like 5-bromouracil, mimic nucleotides and cause replication errors."
    },
    {
        "id": 336,
        "question": "Which disorder is caused by a mutation in the ALDOB gene?",
        "options": [
            "Hereditary fructose intolerance",
            "Cystic fibrosis",
            "Sickle cell anemia",
            "Phenylketonuria"
        ],
        "answer": "Hereditary fructose intolerance",
        "difficulty": "hard",
        "topic": "Genetic Disorders",
        "explanation": "Hereditary fructose intolerance is due to a mutation in the ALDOB gene."
    },
    {
        "id": 337,
        "question": "Which population size is least affected by genetic drift?",
        "options": [
            "Small population",
            "Large population",
            "Isolated population",
            "Migrating population"
        ],
        "answer": "Large population",
        "difficulty": "medium",
        "topic": "Population Genetics",
        "explanation": "Large populations are less susceptible to random allele frequency changes."
    },
    {
        "id": 338,
        "question": "Which technique identifies genetic markers associated with traits?",
        "options": [
            "PCR",
            "GWAS",
            "FISH",
            "Karyotyping"
        ],
        "answer": "GWAS",
        "difficulty": "medium",
        "topic": "Quantitative Genetics",
        "explanation": "Genome-wide association studies (GWAS) link genetic markers to traits."
    },
    {
        "id": 339,
        "question": "Which GMO crop is designed to resist drought?",
        "options": [
            "Bt corn",
            "Drought-tolerant maize",
            "Golden rice",
            "Roundup Ready soybeans"
        ],
        "answer": "Drought-tolerant maize",
        "difficulty": "medium",
        "topic": "Genetic Engineering and Biotechnology",
        "explanation": "Drought-tolerant maize is engineered to withstand water scarcity."
    },
    {
        "id": 340,
        "question": "Which field analyzes RNA expression patterns?",
        "options": [
            "Genomics",
            "Proteomics",
            "Transcriptomics",
            "Cytogenetics"
        ],
        "answer": "Transcriptomics",
        "difficulty": "medium",
        "topic": "Genomics and Proteomics",
        "explanation": "Transcriptomics studies RNA transcripts to understand gene expression."
    },
    {
        "id": 341,
        "question": "Which technique visualizes chromosomes with distinct colors?",
        "options": [
            "G-banding",
            "FISH",
            "Spectral karyotyping",
            "C-banding"
        ],
        "answer": "Spectral karyotyping",
        "difficulty": "hard",
        "topic": "Cytogenetics",
        "explanation": "Spectral karyotyping assigns unique colors to each chromosome for analysis."
    },
    {
        "id": 342,
        "question": "Which genes control limb development in vertebrates?",
        "options": [
            "Hox genes",
            "Pax genes",
            "Oncogenes",
            "Tumor suppressor genes"
        ],
        "answer": "Hox genes",
        "difficulty": "medium",
        "topic": "Developmental Genetics",
        "explanation": "Hox genes regulate limb and body segment development in vertebrates."
    },
    {
        "id": 343,
        "question": "Which ethical issue concerns ownership of genetic sequences?",
        "options": [
            "Genetic privacy",
            "Gene patenting",
            "Eugenics",
            "Informed consent"
        ],
        "answer": "Gene patenting",
        "difficulty": "medium",
        "topic": "Ethical, Legal, and Social Issues in Genetics",
        "explanation": "Gene patenting raises concerns about commercializing genetic information."
    },
    {
        "id": 344,
        "question": "Which inheritance pattern results in both alleles being fully expressed?",
        "options": [
            "Incomplete dominance",
            "Codominance",
            "Epistasis",
            "Pleiotropy"
        ],
        "answer": "Codominance",
        "difficulty": "medium",
        "topic": "Extensions of Mendelian Genetics",
        "explanation": "Codominance allows both alleles to be expressed, like in AB blood type."
    },
    {
        "id": 345,
        "question": "Which chromosome structure compacts DNA with histones?",
        "options": [
            "Nucleosome",
            "Centromere",
            "Telomere",
            "Plasmid"
        ],
        "answer": "Nucleosome",
        "difficulty": "medium",
        "topic": "Chromosomal Basis of Inheritance",
        "explanation": "Nucleosomes package DNA with histones to form chromatin."
    },
    {
        "id": 346,
        "question": "Which enzyme transcribes DNA into RNA?",
        "options": [
            "DNA polymerase",
            "RNA polymerase",
            "Helicase",
            "Ligase"
        ],
        "answer": "RNA polymerase",
        "difficulty": "easy",
        "topic": "Molecular Genetics",
        "explanation": "RNA polymerase synthesizes RNA from a DNA template during transcription."
    },
    {
        "id": 347,
        "question": "Which RNA molecule transfers amino acids to the ribosome?",
        "options": [
            "mRNA",
            "tRNA",
            "rRNA",
            "miRNA"
        ],
        "answer": "tRNA",
        "difficulty": "easy",
        "topic": "Molecular Genetics",
        "explanation": "Transfer RNA (tRNA) delivers amino acids to the ribosome during translation."
    },
    {
        "id": 348,
        "question": "Which protein enhances transcription by binding to DNA?",
        "options": [
            "Repressor",
            "Activator",
            "RNA polymerase",
            "Spliceosome"
        ],
        "answer": "Activator",
        "difficulty": "medium",
        "topic": "Gene Regulation and Expression",
        "explanation": "Activators bind to enhancer regions to promote transcription."
    },
    {
        "id": 349,
        "question": "Which mutagen causes thymine dimers in DNA?",
        "options": [
            "X-rays",
            "UV light",
            "Base analogs",
            "Intercalating agents"
        ],
        "answer": "UV light",
        "difficulty": "medium",
        "topic": "Mutation and DNA Repair",
        "explanation": "UV light induces thymine dimers, causing DNA damage."
    },
    {
        "id": 350,
        "question": "Which disorder is caused by a mutation in the GAA gene?",
        "options": [
            "Pompe disease",
            "Cystic fibrosis",
            "Sickle cell anemia",
            "Huntington’s disease"
        ],
        "answer": "Pompe disease",
        "difficulty": "hard",
        "topic": "Genetic Disorders",
        "explanation": "Pompe disease is caused by mutations in the GAA gene, affecting glycogen metabolism."
    },
    {
        "id": 351,
        "question": "Which population genetic process selects against deleterious alleles?",
        "options": [
            "Genetic drift",
            "Mutation",
            "Natural selection",
            "Gene flow"
        ],
        "answer": "Natural selection",
        "difficulty": "medium",
        "topic": "Population Genetics",
        "explanation": "Natural selection reduces the frequency of harmful alleles."
    },
    {
        "id": 352,
        "question": "Which technique quantifies gene expression in real time?",
        "options": [
            "PCR",
            "qPCR",
            "FISH",
            "Sanger sequencing"
        ],
        "answer": "qPCR",
        "difficulty": "medium",
        "topic": "Genetic Engineering and Biotechnology",
        "explanation": "Quantitative PCR (qPCR) measures gene expression in real time."
    },
    {
        "id": 353,
        "question": "Which chromosomal technique stains AT-rich regions?",
        "options": [
            "G-banding",
            "Q-banding",
            "C-banding",
            "FISH"
        ],
        "answer": "Q-banding",
        "difficulty": "hard",
        "topic": "Cytogenetics",
        "explanation": "Q-banding uses quinacrine to stain AT-rich regions of chromosomes."
    },
    {
        "id": 354,
        "question": "Which genes regulate eye development in animals?",
        "options": [
            "Hox genes",
            "Pax genes",
            "Oncogenes",
            "Tumor suppressor genes"
        ],
        "answer": "Pax genes",
        "difficulty": "medium",
        "topic": "Developmental Genetics",
        "explanation": "Pax genes, like Pax6, control eye development across species."
    },
    {
        "id": 355,
        "question": "Which ethical issue involves genetic testing without patient understanding?",
        "options": [
            "Genetic privacy",
            "Informed consent",
            "Eugenics",
            "Gene patenting"
        ],
        "answer": "Informed consent",
        "difficulty": "medium",
        "topic": "Ethical, Legal, and Social Issues in Genetics",
        "explanation": "Informed consent ensures patients understand genetic testing implications."
    },
    {
        "id": 356,
        "question": "Which inheritance pattern affects multiple traits with one gene?",
        "options": [
            "Codominance",
            "Incomplete dominance",
            "Pleiotropy",
            "Epistasis"
        ],
        "answer": "Pleiotropy",
        "difficulty": "medium",
        "topic": "Extensions of Mendelian Genetics",
        "explanation": "Pleiotropy occurs when one gene influences multiple traits."
    },
    {
        "id": 357,
        "question": "Which chromosome region ensures DNA replication to the end?",
        "options": [
            "Centromere",
            "Telomere",
            "Nucleosome",
            "Promoter"
        ],
        "answer": "Telomere",
        "difficulty": "medium",
        "topic": "Chromosomal Basis of Inheritance",
        "explanation": "Telomeres allow complete DNA replication by preventing shortening."
    },
    {
        "id": 358,
        "question": "Which enzyme corrects replication errors during DNA synthesis?",
        "options": [
            "DNA polymerase",
            "Helicase",
            "Ligase",
            "Primase"
        ],
        "answer": "DNA polymerase",
        "difficulty": "medium",
        "topic": "Molecular Genetics",
        "explanation": "DNA polymerase has a proofreading function to correct replication errors."
    },
    {
        "id": 359,
        "question": "Which RNA modification adds a protective 5’ cap?",
        "options": [
            "Splicing",
            "Capping",
            "Tailing",
            "Editing"
        ],
        "answer": "Capping",
        "difficulty": "medium",
        "topic": "Molecular Genetics",
        "explanation": "Capping adds a 5’ guanine cap to mRNA, protecting it from degradation."
    },
    {
        "id": 360,
        "question": "Which protein complex splices introns from pre-mRNA?",
        "options": [
            "Ribosome",
            "Spliceosome",
            "Transcription factor",
            "RNA polymerase"
        ],
        "answer": "Spliceosome",
        "difficulty": "medium",
        "topic": "Molecular Genetics",
        "explanation": "The spliceosome removes introns and joins exons in pre-mRNA."
    },
    {
        "id": 361,
        "question": "Which operon is induced by low tryptophan levels in bacteria?",
        "options": [
            "Lac operon",
            "Trp operon",
            "Ara operon",
            "Gal operon"
        ],
        "answer": "Trp operon",
        "difficulty": "medium",
        "topic": "Gene Regulation and Expression",
        "explanation": "The trp operon is activated when tryptophan levels are low to synthesize it."
    },
    {
        "id": 362,
        "question": "Which epigenetic mechanism promotes chromatin relaxation?",
        "options": [
            "DNA methylation",
            "Histone acetylation",
            "Histone methylation",
            "Chromatin condensation"
        ],
        "answer": "Histone acetylation",
        "difficulty": "medium",
        "topic": "Gene Regulation and Expression",
        "explanation": "Histone acetylation loosens chromatin, promoting gene expression."
    },
    {
        "id": 363,
        "question": "Which mutation type produces a truncated protein?",
        "options": [
            "Silent",
            "Missense",
            "Nonsense",
            "Frameshift"
        ],
        "answer": "Nonsense",
        "difficulty": "medium",
        "topic": "Mutation and DNA Repair",
        "explanation": "Nonsense mutations introduce premature stop codons, truncating proteins."
    },
    {
        "id": 364,
        "question": "Which repair mechanism removes damaged nucleotides?",
        "options": [
            "Base excision repair",
            "Nucleotide excision repair",
            "Mismatch repair",
            "Homologous recombination"
        ],
        "answer": "Nucleotide excision repair",
        "difficulty": "medium",
        "topic": "Mutation and DNA Repair",
        "explanation": "Nucleotide excision repair removes bulky DNA lesions, such as UV-induced dimers."
    },
        {
            "id": 365,
            "question": "Which disorder is caused by a mutation in the PKD1 gene?",
            "options": [
                "Polycystic kidney disease",
                "Cystic fibrosis",
                "Sickle cell anemia",
                "Huntington’s disease"
            ],
            "answer": "Polycystic kidney disease",
            "difficulty": "hard",
            "topic": "Genetic Disorders",
            "explanation": "Polycystic kidney disease is caused by mutations in the PKD1 gene, leading to kidney cysts."
        },
        {
            "id": 366,
            "question": "Which chromosomal disorder results from a balanced translocation?",
            "options": [
                "Down syndrome",
                "Chronic myelogenous leukemia",
                "Turner syndrome",
                "Klinefelter syndrome"
            ],
            "answer": "Chronic myelogenous leukemia",
            "difficulty": "hard",
            "topic": "Genetic Disorders",
            "explanation": "Chronic myelogenous leukemia is associated with a balanced translocation (Philadelphia chromosome)."
        },
        {
            "id": 367,
            "question": "Which population genetic process introduces new genetic variation?",
            "options": [
                "Genetic drift",
                "Mutation",
                "Natural selection",
                "Gene flow"
            ],
            "answer": "Mutation",
            "difficulty": "easy",
            "topic": "Population Genetics",
            "explanation": "Mutations create new alleles, increasing genetic variation in a population."
        },
        {
            "id": 367,
            "question": "Which trait is analyzed using variance components in genetics?",
            "options": [
                "Blood type",
                "Intelligence",
                "Hemophilia",
                "Cystic fibrosis"
            ],
            "answer": "Intelligence",
            "difficulty": "medium",
            "topic": "Quantitative Genetics",
            "explanation": "Intelligence is a quantitative trait studied using variance to estimate genetic and environmental contributions."
        },
        {
            "id": 368,
            "question": "Which technique separates proteins by charge and size?",
            "options": [
                "PCR",
                "Gel electrophoresis",
                "FISH",
                "CRISPR-Cas9"
            ],
            "answer": "Gel electrophoresis",
            "difficulty": "easy",
            "topic": "Genetic Engineering and Biotechnology",
            "explanation": "Gel electrophoresis separates proteins or DNA based on charge and size."
        },
        {
            "id": 369,
            "question": "Which GMO crop is engineered for longer shelf life?",
            "options": [
                "Bt corn",
                "Golden rice",
                "Flavr Savr tomato",
                "Roundup Ready soybeans"
            ],
            "answer": "Flavr Savr tomato",
            "difficulty": "medium",
            "topic": "Genetic Engineering and Biotechnology",
            "explanation": "Flavr Savr tomato is modified to delay ripening, extending shelf life."
        },
        {
            "id": 370,
            "question": "Which field uses algorithms to analyze genetic sequences?",
            "options": [
                "Bioinformatics",
                "Proteomics",
                "Transcriptomics",
                "Cytogenetics"
            ],
            "answer": "Bioinformatics",
            "difficulty": "medium",
            "topic": "Genomics and Proteomics",
            "explanation": "Bioinformatics applies computational tools to analyze genetic and genomic data."
        },
        {
            "id": 371,
            "question": "Which chromosomal technique stains GC-rich regions?",
            "options": [
                "G-banding",
                "R-banding",
                "C-banding",
                "FISH"
            ],
            "answer": "R-banding",
            "difficulty": "hard",
            "topic": "Cytogenetics",
            "explanation": "R-banding stains GC-rich regions, complementing G-banding patterns."
        },
        {
            "id": 372,
            "question": "Which genes regulate neural development in embryos?",
            "options": [
                "Hox genes",
                "Pax genes",
                "Oncogenes",
                "Tumor suppressor genes"
            ],
            "answer": "Pax genes",
            "difficulty": "medium",
            "topic": "Developmental Genetics",
            "explanation": "Pax genes, like Pax6, regulate neural and eye development."
        },
        {
            "id": 373,
            "question": "Which ethical issue concerns the use of genetic data in criminal investigations?",
            "options": [
                "Genetic privacy",
                "Eugenics",
                "Designer babies",
                "Gene patenting"
            ],
            "answer": "Genetic privacy",
            "difficulty": "medium",
            "topic": "Ethical, Legal, and Social Issues in Genetics",
            "explanation": "Genetic privacy protects individuals’ DNA data from unauthorized use in investigations."
        },
        {
            "id": 374,
            "question": "Which phenotypic ratio is expected in a monohybrid cross with incomplete dominance?",
            "options": [
                "3:1",
                "1:2:1",
                "1:1",
                "9:3:3:1"
            ],
            "answer": "1:2:1",
            "difficulty": "medium",
            "topic": "Extensions of Mendelian Genetics",
            "explanation": "Incomplete dominance produces a 1:2:1 phenotypic ratio in a monohybrid cross."
        },
        {
            "id": 375,
            "question": "Which chromosome structure organizes DNA into chromatin?",
            "options": [
                "Nucleosome",
                "Centromere",
                "Telomere",
                "Plasmid"
            ],
            "answer": "Nucleosome",
            "difficulty": "medium",
            "topic": "Chromosomal Basis of Inheritance",
            "explanation": "Nucleosomes, composed of histones and DNA, compact DNA into chromatin."
        },
        {
            "id": 376,
            "question": "Which enzyme joins DNA fragments during cloning?",
            "options": [
                "DNA polymerase",
                "Restriction enzyme",
                "DNA ligase",
                "Helicase"
            ],
            "answer": "DNA ligase",
            "difficulty": "medium",
            "topic": "Genetic Engineering and Biotechnology",
            "explanation": "DNA ligase seals nicks in the DNA backbone during cloning."
        },
        {
            "id": 377,
            "question": "Which RNA molecule is translated into a protein?",
            "options": [
                "mRNA",
                "tRNA",
                "rRNA",
                "miRNA"
            ],
            "answer": "mRNA",
            "difficulty": "easy",
            "topic": "Molecular Genetics",
            "explanation": "Messenger RNA (mRNA) carries the genetic code for protein synthesis."
        },
        {
            "id": 378,
            "question": "Which protein binds to silencers to inhibit transcription?",
            "options": [
                "Activator",
                "Repressor",
                "Transcription factor",
                "RNA polymerase"
            ],
            "answer": "Repressor",
            "difficulty": "medium",
            "topic": "Gene Regulation and Expression",
            "explanation": "Repressors bind to silencers to reduce gene expression in eukaryotes."
        },
        {
            "id": 379,
            "question": "Which mutagen inserts between DNA bases, causing frameshifts?",
            "options": [
                "Base analogs",
                "Intercalating agents",
                "UV light",
                "X-rays"
            ],
            "answer": "Intercalating agents",
            "difficulty": "hard",
            "topic": "Mutation and DNA Repair",
            "explanation": "Intercalating agents, like ethidium bromide, insert between bases, causing frameshift mutations."
        },
        {
            "id": 380,
            "question": "Which disorder is caused by a mutation in the UGT1A1 gene?",
            "options": [
                "Gilbert syndrome",
                "Cystic fibrosis",
                "Sickle cell anemia",
                "Phenylketonuria"
            ],
            "answer": "Gilbert syndrome",
            "difficulty": "hard",
            "topic": "Genetic Disorders",
            "explanation": "Gilbert syndrome is caused by mutations in the UGT1A1 gene, affecting bilirubin metabolism."
        },
        {
            "id": 381,
            "question": "Which population genetic process favors heterozygotes?",
            "options": [
                "Genetic drift",
                "Heterozygote advantage",
                "Mutation",
                "Gene flow"
            ],
            "answer": "Heterozygote advantage",
            "difficulty": "medium",
            "topic": "Population Genetics",
            "explanation": "Heterozygote advantage, like in sickle cell trait, maintains allele diversity."
        },
        {
            "id": 382,
            "question": "Which technique maps genes using recombination frequencies?",
            "options": [
                "PCR",
                "Linkage mapping",
                "FISH",
                "Karyotyping"
            ],
            "answer": "Linkage mapping",
            "difficulty": "medium",
            "topic": "Chromosomal Basis of Inheritance",
            "explanation": "Linkage mapping uses recombination rates to determine gene positions."
        },
        {
            "id": 383,
            "question": "Which GMO is engineered to resist fungal infections?",
            "options": [
                "Bt corn",
                "Fungal-resistant wheat",
                "Golden rice",
                "Roundup Ready soybeans"
            ],
            "answer": "Fungal-resistant wheat",
            "difficulty": "medium",
            "topic": "Genetic Engineering and Biotechnology",
            "explanation": "Fungal-resistant wheat is modified to combat fungal pathogens."
        },
        {
            "id": 384,
            "question": "Which field studies protein modifications in cells?",
            "options": [
                "Genomics",
                "Proteomics",
                "Transcriptomics",
                "Cytogenetics"
            ],
            "answer": "Proteomics",
            "difficulty": "medium",
            "topic": "Genomics and Proteomics",
            "explanation": "Proteomics analyzes post-translational modifications of proteins."
        },
        {
            "id": 385,
            "question": "Which chromosomal technique stains centromeres and heterochromatin?",
            "options": [
                "G-banding",
                "C-banding",
                "FISH",
                "Q-banding"
            ],
            "answer": "C-banding",
            "difficulty": "medium",
            "topic": "Cytogenetics",
            "explanation": "C-banding stains heterochromatin-rich regions, like centromeres."
        },
        {
            "id": 386,
            "question": "Which genes regulate heart development in vertebrates?",
            "options": [
                "Hox genes",
                "Nkx genes",
                "Oncogenes",
                "Tumor suppressor genes"
            ],
            "answer": "Nkx genes",
            "difficulty": "hard",
            "topic": "Developmental Genetics",
            "explanation": "Nkx genes, like Nkx2-5, regulate heart development in vertebrates."
        },
        {
            "id": 387,
            "question": "Which ethical issue concerns the accuracy of direct-to-consumer genetic tests?",
            "options": [
                "Genetic privacy",
                "Direct-to-consumer testing",
                "Eugenics",
                "Gene therapy"
            ],
            "answer": "Direct-to-consumer testing",
            "difficulty": "medium",
            "topic": "Ethical, Legal, and Social Issues in Genetics",
            "explanation": "Direct-to-consumer testing raises concerns about test accuracy and interpretation."
        },
        {
            "id": 388,
            "question": "Which phenotypic ratio is seen in a dihybrid test cross with unlinked genes?",
            "options": [
                "9:3:3:1",
                "1:1:1:1",
                "3:1",
                "1:2:1"
            ],
            "answer": "1:1:1:1",
            "difficulty": "medium",
            "topic": "Mendelian Genetics",
            "explanation": "A dihybrid test cross with unlinked genes yields a 1:1:1:1 phenotypic ratio."
        },
        {
            "id": 389,
            "question": "Which inheritance pattern involves three or more alleles for a single gene?",
            "options": [
                "Incomplete dominance",
                "Codominance",
                "Multiple alleles",
                "Epistasis"
            ],
            "answer": "Multiple alleles",
            "difficulty": "medium",
            "topic": "Extensions of Mendelian Genetics",
            "explanation": "Multiple alleles, like in the ABO blood group, involve more than two alleles."
        },
        {
            "id": 390,
            "question": "Which process measures gene distances on chromosomes?",
            "options": [
                "Karyotyping",
                "Genetic mapping",
                "FISH",
                "PCR"
            ],
            "answer": "Genetic mapping",
            "difficulty": "medium",
            "topic": "Chromosomal Basis of Inheritance",
            "explanation": "Genetic mapping uses recombination frequencies to determine gene distances."
        },
        {
            "id": 391,
            "question": "Which DNA region signals the end of transcription?",
            "options": [
                "Promoter",
                "Enhancer",
                "Terminator",
                "Intron"
            ],
            "answer": "Terminator",
            "difficulty": "medium",
            "topic": "Molecular Genetics",
            "explanation": "Terminators signal RNA polymerase to stop transcription."
        },
        {
            "id": 392,
            "question": "Which mutation enhances an organism’s fitness in specific environments?",
            "options": [
                "Harmful mutation",
                "Silent mutation",
                "Beneficial mutation",
                "Nonsense mutation"
            ],
            "answer": "Beneficial mutation",
            "difficulty": "easy",
            "topic": "Mutation and DNA Repair",
            "explanation": "Beneficial mutations improve fitness, like antibiotic resistance in bacteria."
        },
        {
            "id": 393,
            "question": "Which disorder is caused by a mutation in the BRCA1 gene?",
            "options": [
                "Breast cancer susceptibility",
                "Cystic fibrosis",
                "Sickle cell anemia",
                "Huntington’s disease"
            ],
            "answer": "Breast cancer susceptibility",
            "difficulty": "medium",
            "topic": "Genetic Disorders",
            "explanation": "BRCA1 mutations increase the risk of breast and ovarian cancer."
        },
        {
            "id": 394,
            "question": "Which population genetic process reduces diversity in bottlenecked populations?",
            "options": [
                "Natural selection",
                "Genetic drift",
                "Mutation",
                "Gene flow"
            ],
            "answer": "Genetic drift",
            "difficulty": "medium",
            "topic": "Population Genetics",
            "explanation": "Genetic drift reduces diversity in populations experiencing bottlenecks."
        },
        {
            "id": 395,
            "question": "Which trait is studied using quantitative trait loci (QTL) mapping?",
            "options": [
                "Blood type",
                "Crop yield",
                "Cystic fibrosis",
                "Eye color"
            ],
            "answer": "Crop yield",
            "difficulty": "medium",
            "topic": "Quantitative Genetics",
            "explanation": "Crop yield is a quantitative trait mapped using QTL analysis."
        },
        {
            "id": 396,
            "question": "Which technique amplifies specific DNA regions for analysis?",
            "options": [
                "Gel electrophoresis",
                "PCR",
                "FISH",
                "CRISPR"
            ],
            "answer": "PCR",
            "difficulty": "easy",
            "topic": "Genetic Engineering and Biotechnology",
            "explanation": "PCR amplifies DNA regions for sequencing or cloning."
        },
        {
            "id": 397,
            "question": "Which GMO is engineered to produce pharmaceuticals?",
            "options": [
                "Bt corn",
                "Golden rice",
                "Pharma rice",
                "Roundup Ready soybeans"
            ],
            "answer": "Pharma rice",
            "difficulty": "medium",
            "topic": "Genetic Engineering and Biotechnology",
            "explanation": "Pharma rice is modified to produce therapeutic proteins."
        },
        {
            "id": 398,
            "question": "Which field studies gene interactions across a genome?",
            "options": [
                "Proteomics",
                "Functional genomics",
                "Cytogenetics",
                "Transcriptomics"
            ],
            "answer": "Functional genomics",
            "difficulty": "medium",
            "topic": "Genomics and Proteomics",
            "explanation": "Functional genomics explores gene interactions and functions."
        },
        {
            "id": 399,
            "question": "Which chromosomal technique stains chromosomes with Giemsa?",
            "options": [
                "G-banding",
                "C-banding",
                "FISH",
                "Q-banding"
            ],
            "answer": "G-banding",
            "difficulty": "medium",
            "topic": "Cytogenetics",
            "explanation": "G-banding uses Giemsa to create unique chromosome banding patterns."
        },
        {
            "id": 400,
            "question": "Which genes regulate segmentation in vertebrate embryos?",
            "options": [
                "Hox genes",
                "Oncogenes",
                "Tumor suppressor genes",
                "Lac operon"
            ],
            "answer": "Hox genes",
            "difficulty": "medium",
            "topic": "Developmental Genetics",
            "explanation": "Hox genes control segmentation and body plan in vertebrate embryos."
        },
    {
        "id": 401,
        "question": "Which term describes the study of heredity and variation in organisms?",
        "options": [
            "Cytology",
            "Genetics",
            "Embryology",
            "Biochemistry"
        ],
        "answer": "Genetics",
        "difficulty": "easy",
        "topic": "Introduction to Genetics",
        "explanation": "Genetics is the scientific study of heredity and variation in living organisms."
    },
    {
        "id": 402,
        "question": "Who is credited with formulating the laws of inheritance based on pea plant experiments?",
        "options": [
            "Charles Darwin",
            "Gregor Mendel",
            "Francis Crick",
            "Rosalind Franklin"
        ],
        "answer": "Gregor Mendel",
        "difficulty": "easy",
        "topic": "Introduction to Genetics",
        "explanation": "Gregor Mendel established the foundational laws of inheritance through his pea plant studies."
    },
    {
        "id": 403,
        "question": "Which genetic principle explains the separation of alleles during gamete formation?",
        "options": [
            "Law of Dominance",
            "Law of Segregation",
            "Law of Independent Assortment",
            "Law of Recessiveness"
        ],
        "answer": "Law of Segregation",
        "difficulty": "medium",
        "topic": "Mendelian Genetics",
        "explanation": "The Law of Segregation states that alleles separate during gamete formation."
    },
    {
        "id": 404,
        "question": "What is the phenotypic ratio of a monohybrid cross between two heterozygous individuals?",
        "options": [
            "1:2:1",
            "3:1",
            "1:1",
            "9:3:3:1"
        ],
        "answer": "3:1",
        "difficulty": "medium",
        "topic": "Mendelian Genetics",
        "explanation": "A monohybrid cross (Aa x Aa) yields a 3:1 phenotypic ratio for dominant to recessive traits."
    },
    {
        "id": 405,
        "question": "Which term describes an individual with two different alleles for a gene?",
        "options": [
            "Homozygous",
            "Heterozygous",
            "Dominant",
            "Recessive"
        ],
        "answer": "Heterozygous",
        "difficulty": "easy",
        "topic": "Mendelian Genetics",
        "explanation": "Heterozygous individuals have two different alleles for a given gene."
    },
    {
        "id": 406,
        "question": "Which inheritance pattern produces a 1:1 phenotypic ratio in a test cross?",
        "options": [
            "Incomplete dominance",
            "Codominance",
            "Simple dominance",
            "Epistasis"
        ],
        "answer": "Simple dominance",
        "difficulty": "medium",
        "topic": "Mendelian Genetics",
        "explanation": "A test cross with a heterozygous individual yields a 1:1 ratio for simple dominant traits."
    },
    {
        "id": 407,
        "question": "Which inheritance pattern results in both alleles being expressed equally in the phenotype?",
        "options": [
            "Incomplete dominance",
            "Codominance",
            "Epistasis",
            "Pleiotropy"
        ],
        "answer": "Codominance",
        "difficulty": "medium",
        "topic": "Extensions of Mendelian Genetics",
        "explanation": "Codominance occurs when both alleles are fully expressed, as in AB blood type."
    },
    {
        "id": 408,
        "question": "Which genetic phenomenon involves one gene influencing multiple traits?",
        "options": [
            "Polygenic inheritance",
            "Epistasis",
            "Pleiotropy",
            "Codominance"
        ],
        "answer": "Pleiotropy",
        "difficulty": "medium",
        "topic": "Extensions of Mendelian Genetics",
        "explanation": "Pleiotropy occurs when a single gene affects multiple phenotypic traits."
    },
    {
        "id": 409,
        "question": "Which phenotypic ratio is typical of a dihybrid cross with dominant epistasis?",
        "options": [
            "9:3:3:1",
            "12:3:1",
            "9:3:4",
            "1:2:1"
        ],
        "answer": "12:3:1",
        "difficulty": "hard",
        "topic": "Extensions of Mendelian Genetics",
        "explanation": "Dominant epistasis alters the dihybrid ratio to 12:3:1 by masking one gene’s effect."
    },
    {
        "id": 410,
        "question": "Which type of inheritance involves traits like height influenced by multiple genes?",
        "options": [
            "Monogenic",
            "Polygenic",
            "Codominant",
            "Lethal"
        ],
        "answer": "Polygenic",
        "difficulty": "easy",
        "topic": "Extensions of Mendelian Genetics",
        "explanation": "Polygenic inheritance involves multiple genes contributing to a single trait."
    },
    {
        "id": 411,
        "question": "Which chromosomes determine sex in mammals?",
        "options": [
            "Autosomes",
            "Mitochondrial chromosomes",
            "Sex chromosomes",
            "Plasmids"
        ],
        "answer": "Sex chromosomes",
        "difficulty": "easy",
        "topic": "Chromosomal Basis of Inheritance",
        "explanation": "Sex chromosomes (X and Y) determine biological sex in mammals."
    },
    {
        "id": 412,
        "question": "Which genetic condition results from an extra chromosome 21?",
        "options": [
            "Klinefelter syndrome",
            "Turner syndrome",
            "Down syndrome",
            "XYY syndrome"
        ],
        "answer": "Down syndrome",
        "difficulty": "medium",
        "topic": "Chromosomal Basis of Inheritance",
        "explanation": "Down syndrome is caused by trisomy 21, an extra chromosome 21."
    },
    {
        "id": 413,
        "question": "Which process during meiosis shuffles alleles between homologous chromosomes?",
        "options": [
            "Independent assortment",
            "Crossing over",
            "Segregation",
            "Mutation"
        ],
        "answer": "Crossing over",
        "difficulty": "medium",
        "topic": "Chromosomal Basis of Inheritance",
        "explanation": "Crossing over exchanges genetic material between homologous chromosomes."
    },
    {
        "id": 414,
        "question": "Which inheritance pattern is typical of color blindness in humans?",
        "options": [
            "Autosomal dominant",
            "Autosomal recessive",
            "X-linked recessive",
            "Y-linked"
        ],
        "answer": "X-linked recessive",
        "difficulty": "medium",
        "topic": "Chromosomal Basis of Inheritance",
        "explanation": "Color blindness is caused by recessive mutations on the X chromosome."
    },
    {
        "id": 415,
        "question": "Which molecule serves as the template for protein synthesis?",
        "options": [
            "DNA",
            "mRNA",
            "tRNA",
            "rRNA"
        ],
        "answer": "mRNA",
        "difficulty": "easy",
        "topic": "Molecular Genetics",
        "explanation": "Messenger RNA (mRNA) carries the genetic code from DNA to the ribosome."
    },
    {
        "id": 416,
        "question": "Which enzyme seals nicks in the DNA backbone during replication?",
        "options": [
            "Helicase",
            "Primase",
            "DNA ligase",
            "DNA polymerase"
        ],
        "answer": "DNA ligase",
        "difficulty": "medium",
        "topic": "Molecular Genetics",
        "explanation": "DNA ligase joins Okazaki fragments and seals DNA nicks."
    },
    {
        "id": 417,
        "question": "Which DNA region initiates transcription in eukaryotes?",
        "options": [
            "Terminator",
            "Promoter",
            "Intron",
            "Exon"
        ],
        "answer": "Promoter",
        "difficulty": "medium",
        "topic": "Molecular Genetics",
        "explanation": "Promoters are DNA sequences where transcription begins."
    },
    {
        "id": 418,
        "question": "Which codon initiates protein synthesis?",
        "options": [
            "UAA",
            "AUG",
            "UAG",
            "UGA"
        ],
        "answer": "AUG",
        "difficulty": "medium",
        "topic": "Molecular Genetics",
        "explanation": "The AUG codon signals the start of translation and codes for methionine."
    },
    {
        "id": 419,
        "question": "Which regulatory protein binds to enhancers to increase gene expression?",
        "options": [
            "Repressor",
            "Activator",
            "Silencer",
            "Spliceosome"
        ],
        "answer": "Activator",
        "difficulty": "medium",
        "topic": "Gene Regulation and Expression",
        "explanation": "Activators bind to enhancer regions to promote transcription."
    },
    {
        "id": 420,
        "question": "Which operon is induced by lactose in bacteria?",
        "options": [
            "Trp operon",
            "Ara operon",
            "Lac operon",
            "Gal operon"
        ],
        "answer": "Lac operon",
        "difficulty": "medium",
        "topic": "Gene Regulation and Expression",
        "explanation": "The lac operon is activated by lactose to metabolize it."
    },
    {
        "id": 421,
        "question": "Which epigenetic modification adds methyl groups to histones?",
        "options": [
            "Acetylation",
            "Phosphorylation",
            "Histone methylation",
            "Ubiquitination"
        ],
        "answer": "Histone methylation",
        "difficulty": "medium",
        "topic": "Gene Regulation and Expression",
        "explanation": "Histone methylation modifies chromatin structure, affecting gene expression."
    },
    {
        "id": 422,
        "question": "Which RNA regulates gene expression by targeting mRNA for cleavage?",
        "options": [
            "siRNA",
            "tRNA",
            "rRNA",
            "mRNA"
        ],
        "answer": "siRNA",
        "difficulty": "hard",
        "topic": "Gene Regulation and Expression",
        "explanation": "Small interfering RNA (siRNA) triggers RNA interference to degrade mRNA."
    },
    {
        "id": 423,
        "question": "Which mutation type substitutes one nucleotide for another?",
        "options": [
            "Insertion",
            "Deletion",
            "Substitution",
            "Inversion"
        ],
        "answer": "Substitution",
        "difficulty": "easy",
        "topic": "Mutation and DNA Repair",
        "explanation": "Substitutions replace one nucleotide with another in the DNA sequence."
    },
    {
        "id": 424,
        "question": "Which repair mechanism corrects UV-induced thymine dimers?",
        "options": [
            "Mismatch repair",
            "Base excision repair",
            "Nucleotide excision repair",
            "Double-strand break repair"
        ],
        "answer": "Nucleotide excision repair",
        "difficulty": "medium",
        "topic": "Mutation and DNA Repair",
        "explanation": "Nucleotide excision repair removes thymine dimers caused by UV light."
    },
    {
        "id": 425,
        "question": "Which mutation is neutral and does not alter the protein?",
        "options": [
            "Missense",
            "Nonsense",
            "Silent",
            "Frameshift"
        ],
        "answer": "Silent",
        "difficulty": "medium",
        "topic": "Mutation and DNA Repair",
        "explanation": "Silent mutations change a codon but not the amino acid due to codon degeneracy."
    },
    {
        "id": 426,
        "question": "Which mutagen induces frameshift mutations by inserting between DNA bases?",
        "options": [
            "Base analogs",
            "Intercalating agents",
            "UV light",
            "X-rays"
        ],
        "answer": "Intercalating agents",
        "difficulty": "hard",
        "topic": "Mutation and DNA Repair",
        "explanation": "Intercalating agents insert between bases, causing frameshift mutations."
    },
    {
        "id": 427,
        "question": "Which disorder is caused by a mutation in the CFTR gene?",
        "options": [
            "Cystic fibrosis",
            "Sickle-cell anemia",
            "Huntington’s disease",
            "Hemophilia A"
        ],
        "answer": "Cystic fibrosis",
        "difficulty": "medium",
        "topic": "Genetic Disorders",
        "explanation": "Cystic fibrosis results from mutations in the CFTR gene."
    },
    {
        "id": 428,
        "question": "Which disorder is characterized by a mutation in the HBB gene?",
        "options": [
            "Sickle-cell anemia",
            "Cystic fibrosis",
            "Tay-Sachs disease",
            "Phenylketonuria"
        ],
        "answer": "Sickle-cell anemia",
        "difficulty": "medium",
        "topic": "Genetic Disorders",
        "explanation": "Sickle-cell anemia is caused by a mutation in the HBB gene, affecting hemoglobin."
    },
    {
        "id": 429,
        "question": "Which disorder is caused by a triplet repeat expansion in the FMR1 gene?",
        "options": [
            "Fragile X syndrome",
            "Huntington’s disease",
            "Down syndrome",
            "Klinefelter syndrome"
        ],
        "answer": "Fragile X syndrome",
        "difficulty": "hard",
        "topic": "Genetic Disorders",
        "explanation": "Fragile X syndrome results from CGG repeat expansion in the FMR1 gene."
    },
    {
        "id": 430,
        "question": "Which chromosomal disorder results from a single X chromosome in females?",
        "options": [
            "Turner syndrome",
            "Klinefelter syndrome",
            "Down syndrome",
            "XYY syndrome"
        ],
        "answer": "Turner syndrome",
        "difficulty": "medium",
        "topic": "Genetic Disorders",
        "explanation": "Turner syndrome occurs in females with a single X chromosome (XO)."
    },
    {
        "id": 431,
        "question": "Which equation represents allele frequencies in Hardy-Weinberg equilibrium?",
        "options": [
            "p + q = 1",
            "p^2 + q^2 = 1",
            "p^2 + 2pq + q^2 = 1",
            "pq = 1"
        ],
        "answer": "p + q = 1",
        "difficulty": "medium",
        "topic": "Population Genetics",
        "explanation": "In Hardy-Weinberg equilibrium, p + q = 1 represents the sum of allele frequencies."
    },
    {
        "id": 432,
        "question": "Which process introduces alleles from one population to another?",
        "options": [
            "Mutation",
            "Genetic drift",
            "Gene flow",
            "Natural selection"
        ],
        "answer": "Gene flow",
        "difficulty": "medium",
        "topic": "Population Genetics",
        "explanation": "Gene flow transfers alleles between populations through migration."
    },
    {
        "id": 433,
        "question": "Which phenomenon reduces genetic variation in bottlenecked populations?",
        "options": [
            "Natural selection",
            "Genetic drift",
            "Mutation",
            "Gene flow"
        ],
        "answer": "Genetic drift",
        "difficulty": "medium",
        "topic": "Population Genetics",
        "explanation": "Genetic drift causes random loss of alleles in bottlenecked populations."
    },
    {
        "id": 434,
        "question": "Which term describes a population’s allele frequency stability over generations?",
        "options": [
            "Genetic drift",
            "Hardy-Weinberg equilibrium",
            "Natural selection",
            "Polymorphism"
        ],
        "answer": "Hardy-Weinberg equilibrium",
        "difficulty": "medium",
        "topic": "Population Genetics",
        "explanation": "Hardy-Weinberg equilibrium describes stable allele frequencies under ideal conditions."
    },
    {
        "id": 435,
        "question": "Which measure quantifies the genetic contribution to trait variation?",
        "options": [
            "Recombination rate",
            "Heritability",
            "Allele frequency",
            "Polymorphism"
        ],
        "answer": "Heritability",
        "difficulty": "medium",
        "topic": "Quantitative Genetics",
        "explanation": "Heritability estimates the genetic basis of phenotypic variation."
    },
    {
        "id": 436,
        "question": "Which trait shows continuous variation due to multiple gene effects?",
        "options": [
            "Blood type",
            "Height",
            "Cystic fibrosis",
            "Eye color"
        ],
        "answer": "Height",
        "difficulty": "medium",
        "topic": "Quantitative Genetics",
        "explanation": "Height is a polygenic trait with continuous variation."
    },
    {
        "id": 437,
        "question": "Which study design uses monozygotic twins to assess genetic influence?",
        "options": [
            "Pedigree analysis",
            "Twin study",
            "Linkage mapping",
            "GWAS"
        ],
        "answer": "Twin study",
        "difficulty": "medium",
        "topic": "Quantitative Genetics",
        "explanation": "Twin studies compare identical twins to evaluate genetic versus environmental effects."
    },
    {
        "id": 438,
        "question": "Which method identifies quantitative trait loci associated with traits?",
        "options": [
            "PCR",
            "QTL mapping",
            "FISH",
            "Karyotyping"
        ],
        "answer": "QTL mapping",
        "difficulty": "hard",
        "topic": "Quantitative Genetics",
        "explanation": "QTL mapping identifies genomic regions influencing quantitative traits."
    },
    {
        "id": 439,
        "question": "Which enzyme cuts DNA at specific recognition sites for cloning?",
        "options": [
            "DNA polymerase",
            "Restriction enzyme",
            "Ligase",
            "Helicase"
        ],
        "answer": "Restriction enzyme",
        "difficulty": "medium",
        "topic": "Genetic Engineering and Biotechnology",
        "explanation": "Restriction enzymes cut DNA at specific sequences for cloning purposes."
    },
    {
        "id": 440,
        "question": "Which biotechnology product is used to treat hemophilia?",
        "options": [
            "Recombinant insulin",
            "Recombinant factor VIII",
            "Golden rice",
            "Bt corn"
        ],
        "answer": "Recombinant factor VIII",
        "difficulty": "medium",
        "topic": "Genetic Engineering and Biotechnology",
        "explanation": "Recombinant factor VIII is used to treat hemophilia A."
    },
    {
        "id": 441,
        "question": "Which technique delivers foreign DNA into plant cells using a bacterium?",
        "options": [
            "Electroporation",
            "Agrobacterium-mediated transformation",
            "Biolistic transformation",
            "CRISPR-Cas9"
        ],
        "answer": "Agrobacterium-mediated transformation",
        "difficulty": "hard",
        "topic": "Genetic Engineering and Biotechnology",
        "explanation": "Agrobacterium transfers DNA into plant cells for genetic modification."
    },
    {
        "id": 442,
        "question": "Which GMO crop is engineered to resist herbicides?",
        "options": [
            "Bt corn",
            "Golden rice",
            "Roundup Ready soybeans",
            "Flavr Savr tomato"
        ],
        "answer": "Roundup Ready soybeans",
        "difficulty": "medium",
        "topic": "Genetic Engineering and Biotechnology",
        "explanation": "Roundup Ready soybeans are modified to tolerate glyphosate herbicides."
    },
    {
        "id": 443,
        "question": "Which field studies the complete set of RNA transcripts in a cell?",
        "options": [
            "Genomics",
            "Proteomics",
            "Transcriptomics",
            "Cytogenetics"
        ],
        "answer": "Transcriptomics",
        "difficulty": "medium",
        "topic": "Genomics and Proteomics",
        "explanation": "Transcriptomics analyzes all RNA transcripts to study gene expression."
    },
    {
        "id": 444,
        "question": "Which database stores genomic sequence data?",
        "options": [
            "UniProt",
            "GenBank",
            "PDB",
            "Ensembl"
        ],
        "answer": "GenBank",
        "difficulty": "medium",
        "topic": "Genomics and Proteomics",
        "explanation": "GenBank is a public database for DNA sequences."
    },
    {
        "id": 445,
        "question": "Which technique sequences entire genomes rapidly?",
        "options": [
            "Sanger sequencing",
            "Next-generation sequencing",
            "PCR",
            "FISH"
        ],
        "answer": "Next-generation sequencing",
        "difficulty": "medium",
        "topic": "Genomics and Proteomics",
        "explanation": "Next-generation sequencing enables high-throughput genome sequencing."
    },
    {
        "id": "446",
        "question": "Which cytogenetic technique stains heterochromatin regions darkly?",
        "options": [
            "G-banding",
            "C-banding",
            "FISH",
            "Q-banding"
        ],
        "answer": "C-banding",
        "difficulty": "hard",
        "topic": "Cytogenetics",
        "explanation": "C-banding stains heterochromatin, such as centromeres, darkly."
    },
    {
        "id": 447,
        "question": "Which chromosomal abnormality duplicates a segment of DNA?",
        "options": [
            "Deletion",
            "Inversion",
            "Duplication",
            "Translocation"
        ],
        "answer": "Duplication",
        "difficulty": "medium",
        "topic": "Cytogenetics",
        "explanation": "Duplication results in an extra copy of a chromosome segment."
    },
    {
        "id": 448,
        "question": "Which technique uses probes to detect chromosomal rearrangements?",
        "options": [
            "PCR",
            "FISH",
            "Gel electrophoresis",
            "Sanger sequencing"
        ],
        "answer": "FISH",
        "difficulty": "medium",
        "topic": "Cytogenetics",
        "explanation": "FISH uses fluorescent probes to detect chromosomal abnormalities."
    },
    {
        "id": 449,
        "question": "Which genes control anterior-posterior axis in vertebrates?",
        "options": [
            "Pax genes",
            "Hox genes",
            "Oncogenes",
            "Tumor suppressor genes"
        ],
        "answer": "Hox genes",
        "difficulty": "medium",
        "topic": "Developmental Genetics",
        "explanation": "Hox genes regulate the anterior-posterior axis during development."
    },
    {
        "id": 450,
        "question": "Which process determines cell identity in developing embryos?",
        "options": [
            "Replication",
            "Cell determination",
            "Mutation",
            "Recombination"
        ],
        "answer": "Cell determination",
        "difficulty": "medium",
        "topic": "Developmental Genetics",
        "explanation": "Cell determination commits cells to specific fates during development."
    },
    {
        "id": 451,
        "question": "Which cells have the ability to differentiate into multiple cell types?",
        "options": [
            "Somatic cells",
            "Gametes",
            "Stem cells",
            "Red blood cells"
        ],
        "answer": "Stem cells",
        "difficulty": "easy",
        "topic": "Developmental Genetics",
        "explanation": "Stem cells can differentiate into various cell types due to pluripotency."
    },
    {
        "id": 452,
        "question": "Which gene family regulates organ formation in plants?",
        "options": [
            "Hox genes",
            "MADS-box genes",
            "Pax genes",
            "Oncogenes"
        ],
        "answer": "MADS-box genes",
        "difficulty": "hard",
        "topic": "Developmental Genetics",
        "explanation": "MADS-box genes control floral organ identity in plants."
    },
    {
        "id": 453,
        "question": "Which ethical issue involves the use of genetic data without permission?",
        "options": [
            "Informed consent",
            "Genetic privacy",
            "Eugenics",
            "Gene patenting"
        ],
        "answer": "Genetic privacy",
        "difficulty": "medium",
        "topic": "Ethical, Legal, and Social Issues in Genetics",
        "explanation": "Genetic privacy protects unauthorized access to genetic information."
    },
    {
        "id": 454,
        "question": "Which technique is used to detect genetic disorders in fetuses?",
        "options": [
            "Amniocentesis",
            "PCR",
            "Gel electrophoresis",
            "CRISPR-Cas9"
        ],
        "answer": "Amniocentesis",
        "difficulty": "medium",
        "topic": "Ethical, Legal, and Social Issues in Genetics",
        "explanation": "Amniocentesis samples amniotic fluid to test for fetal genetic disorders."
    },
    {
        "id": 455,
        "question": "Which ethical concern involves modifying genes for athletic performance?",
        "options": [
            "Designer babies",
            "Genetic privacy",
            "Eugenics",
            "Informed consent"
        ],
        "answer": "Designer babies",
        "difficulty": "medium",
        "topic": "Ethical, Legal, and Social Issues in Genetics",
        "explanation": "Designer babies raise ethical concerns about non-medical genetic enhancements."
    },
    {
        "id": 456,
        "question": "Which genetic counseling helps assess inherited disease risks?",
        "options": [
            "Prenatal screening",
            "Gene therapy",
            "Genetic counseling",
            "Karyotyping"
        ],
        "answer": "Genetic counseling",
        "difficulty": "easy",
        "topic": "Ethical, Legal, and Social Issues in Genetics",
        "explanation": "Genetic counseling provides risk assessment for inherited disorders."
    },
    {
        "id": 457,
        "question": "Which phenotypic ratio results from a dihybrid cross with no epistasis?",
        "options": [
            "9:3:3:1",
            "12:3:1",
            "9:3:4",
            "1:1:1:1"
        ],
        "answer": "9:3:3:1",
        "difficulty": "medium",
        "topic": "Mendelian Genetics",
        "explanation": "A dihybrid cross without epistasis yields a 9:3:3:3:1 phenotypic ratio."
    },
    {
        "id": 458,
        "question": "Which term describes an allele that is expressed only when homozygous?",
        "options": [
            "Dominant",
            "Recessive",
            "Codominant",
            "Lethal"
        ],
        "answer": "Recessive",
        "difficulty": "easy",
        "topic": "Mendelian Genetics",
        "explanation": "Recessive alleles are expressed only in the homozygous state."
    },
    {
        "id": 459,
        "question": "Which cross determines the genotype of an individual with a dominant phenotype?",
        "options": [
            "Monohybrid cross",
            "Dihybrid cross",
            "Test cross",
            "Back cross"
        ],
        "answer": "Test cross",
        "difficulty": "medium",
        "topic": "Mendelian Genetics",
        "explanation": "A test cross with a homozygous recessive individual reveals the unknown genotype."
    },
    {
        "id": 460,
        "question": "Which inheritance pattern results in a blended phenotype in heterozygotes?",
        "options": [
            "Codominance",
            "Incomplete dominance",
            "Epistasis",
            "Pleiotropy"
        ],
        "answer": "Incomplete dominance",
        "difficulty": "medium",
        "topic": "Extensions of Mendelian Genetics",
        "explanation": "Incomplete dominance produces an intermediate phenotype in heterozygotes."
    },
    {
        "id": 461,
        "question": "Which chromosome region protects DNA ends from degradation?",
        "options": [
            "Centromere",
            "Telomere",
            "Nucleosome",
            "Promoter"
        ],
        "answer": "Telomere",
        "difficulty": "medium",
        "topic": "Chromosomal Basis of Inheritance",
        "explanation": "Telomeres cap chromosome ends to prevent degradation and fusion."
    },
    {
        "id": 462,
        "question": "Which enzyme synthesizes RNA primers during DNA replication?",
        "options": [
            "DNA polymerase",
            "Primase",
            "Helicase",
            "Ligase"
        ],
        "answer": "Primase",
        "difficulty": "medium",
        "topic": "Molecular Genetics",
        "explanation": "Primase synthesizes RNA primers to initiate DNA replication."
    },
    {
        "id": "Which 463",
        "question": "Which DNA region enhances transcription from a distance?",
        "options": [
            "Promoter",
            "Enhancer",
            "Terminator",
            "Intron"
        ],
        "answer": "Enhancer",
        "difficulty": "medium",
        "topic": "Molecular Genetics",
        "explanation": "Enhancers are DNA sequences that increase transcription rates."
    },
    {
        "id": "Which 464",
        "question": "Which RNA molecule forms the structural component of ribosomes?",
        "options": [
            "mRNA",
            "tRNA",
            "rRNA",
            "miRNA"
        ],
        "answer": "rRNA",
        "difficulty": "easy",
        "topic": "Molecular Genetics",
        "explanation": "Ribosomal RNA (rRNA) is a key component of ribosomes."
    },
    {
        "id": 465,
        "question": "Which protein blocks transcription by binding to operators?",
        "options": [
            "Activator",
            "Repressor",
            "Transcription factor",
            "RNA polymerase"
        ],
        "answer": "Repressor",
        "difficulty": "medium",
        "topic": "Gene Regulation and Expression",
        "explanation": "Repressors bind to operators to inhibit transcription in prokaryotes."
    },
    {
        "id": 466,
        "question": "Which mutation changes the amino acid sequence without truncation?",
        "options": [
            "Silent",
            "Missense",
            "Nonsense",
            "Frameshift"
        ],
        "answer": "Missense",
        "difficulty": "medium",
        "topic": "Mutation and DNA Repair",
        "explanation": "Missense mutations alter one amino acid in the protein sequence."
    },
    {
        "id": 467,
        "question": "Which repair mechanism fixes single-base damage?",
        "options": [
            "Base excision repair",
            "Nucleotide excision repair",
            "Mismatch repair",
            "Homologous recombination"
        ],
        "answer": "Base excision repair",
        "difficulty": "medium",
        "topic": "Mutation and DNA Repair",
        "explanation": "Base excision repair corrects small, non-bulky DNA lesions."
    },
    {
        "id": 468,
        "question": "Which disorder is caused by a mutation in the HTT gene?",
        "options": [
            "Huntington’s disease",
            "Cystic fibrosis",
            "Sickle-cell anemia",
            "Hemophilia A"
        ],
        "answer": "Huntington’s disease",
        "difficulty": "medium",
        "topic": "Genetic Disorders",
        "explanation": "Huntington’s disease is caused by a CAG repeat expansion in the HTT gene."
    },
    {
        "id": 469,
        "question": "Which disorder results from an extra X chromosome in males?",
        "options": [
            "Klinefelter syndrome",
            "Turner syndrome",
            "Down syndrome",
            "XYY syndrome"
        ],
        "answer": "Klinefelter syndrome",
        "difficulty": "medium",
        "topic": "Genetic Disorders",
        "explanation": "Klinefelter syndrome occurs in males with an XXY karyotype."
    },
    {
        "id": 470,
        "question": "Which process favors alleles that enhance survival and reproduction?",
        "options": [
            "Genetic drift",
            "Mutation",
            "Natural selection",
            "Gene flow"
        ],
        "answer": "Natural selection",
        "difficulty": "medium",
        "topic": "Population Genetics",
        "explanation": "Natural selection increases the frequency of advantageous alleles."
    },
    {
        "id": 471,
        "question": "Which technique amplifies DNA for forensic analysis?",
        "options": [
            "PCR",
            "FISH",
            "Karyotyping",
            "Sanger sequencing"
        ],
        "answer": "PCR",
        "difficulty": "medium",
        "topic": "Genetic Engineering and Biotechnology",
        "explanation": "PCR amplifies DNA for applications like forensic analysis."
    },
    {
        "id": 472,
        "question": "Which GMO crop produces its own insecticide?",
        "options": [
            "Bt corn",
            "Golden rice",
            "Roundup Ready soybeans",
            "Flavr Savr tomato"
        ],
        "answer": "Bt corn",
        "difficulty": "medium",
        "topic": "Genetic Engineering and Biotechnology",
        "explanation": "Bt corn is engineered to produce Bacillus thuringiensis toxin."
    },
    {
        "id": 473,
        "question": "Which field integrates computational tools for genetic analysis?",
        "options": [
            "Bioinformatics",
            "Proteomics",
            "Transcriptomics",
            "Cytogenetics"
        ],
        "answer": "Bioinformatics",
        "difficulty": "medium",
        "topic": "Genomics and Proteomics",
        "explanation": "Bioinformatics uses computational methods to analyze genetic data."
    },
    {
        "id": 474,
        "question": "Which chromosomal technique identifies translocations with color-coded probes?",
        "options": [
            "G-banding",
            "FISH",
            "Spectral karyotyping",
            "C-banding"
        ],
        "answer": "Spectral karyotyping",
        "difficulty": "hard",
        "topic": "Cytogenetics",
        "explanation": "Spectral karyotyping uses multicolored probes to detect translocations."
    },
    {
        "id": 475,
        "question": "Which genes regulate floral organ identity in Arabidopsis?",
        "options": [
            "Hox genes",
            "MADS-box genes",
            "Pax genes",
            "Oncogenes"
        ],
        "answer": "MADS-box genes",
        "difficulty": "hard",
        "topic": "Developmental Genetics",
        "explanation": "MADS-box genes control floral organ development in Arabidopsis."
    },
    {
        "id": 476,
        "question": "Which ethical issue involves the commercialization of genetic sequences?",
        "options": [
            "Genetic privacy",
            "Gene patenting",
            "Eugenics",
            "Informed consent"
        ],
        "answer": "Gene patenting",
        "difficulty": "medium",
        "topic": "Ethical, Legal, and Social Issues in Genetics",
        "explanation": "Gene patenting raises concerns about ownership of genetic information."
    },
    {
        "id": 477,
        "question": "Which phenotypic ratio is seen in a monohybrid cross with incomplete dominance?",
        "options": [
            "3:1",
            "1:2:1",
            "1:1",
            "9:3:3:1"
        ],
        "answer": "1:2:1",
        "difficulty": "medium",
        "topic": "Extensions of Mendelian Genetics",
        "explanation": "Incomplete dominance in a monohybrid cross yields a 1:2:1 phenotypic ratio."
    },
    {
        "id": 478,
        "question": "Which chromosome structure facilitates chromosome segregation?",
        "options": [
            "Telomere",
            "Centromere",
            "Nucleosome",
            "Promoter"
        ],
        "answer": "Centromere",
        "difficulty": "medium",
        "topic": "Chromosomal Basis of Inheritance",
        "explanation": "Centromeres allow spindle fibers to attach for chromosome segregation."
    },
    {
        "id": 479,
        "question": "Which enzyme unwinds DNA during replication?",
        "options": [
            "DNA polymerase",
            "Helicase",
            "Ligase",
            "Primase"
        ],
        "answer": "Helicase",
        "difficulty": "medium",
        "topic": "Molecular Genetics",
        "explanation": "Helicase unwinds the DNA double helix for replication."
    },
    {
        "id": 480,
        "question": "Which RNA molecule delivers amino acids to the ribosome?",
        "options": [
            "mRNA",
            "tRNA",
            "rRNA",
            "miRNA"
        ],
        "answer": "tRNA",
        "difficulty": "easy",
        "topic": "Molecular Genetics",
        "explanation": "Transfer RNA (tRNA) transports amino acids during translation."
    },
    {
        "id": 481,
        "question": "Which epigenetic modification relaxes chromatin structure?",
        "options": [
            "DNA methylation",
            "Histone acetylation",
            "Histone methylation",
            "Chromatin condensation"
        ],
        "answer": "Histone acetylation",
        "difficulty": "medium",
        "topic": "Gene Regulation and Expression",
        "explanation": "Histone acetylation loosens chromatin, enhancing gene expression."
    },
    {
        "id": "482",
        "question": "Which mutation shifts the reading frame of a gene?",
        "options": [
            "Silent mutation",
            "Missense mutation",
            "Frameshift mutation",
            "Nonsense mutation"
        ],
        "answer": "Frameshift mutation",
        "difficulty": "medium",
        "topic": "Mutation and DNA Repair",
        "explanation": "Frameshift mutations disrupt the codon reading frame."
    },
    {
        "id": "483",
        "question": "Which disorder is caused by a mutation in the PAH gene?",
        "options": [
            "Phenylketonuria",
            "Cystic fibrosis",
            "Sickle-cell anemia",
            "Huntington’s disease"
        ],
        "answer": "Phenylketonuria",
        "difficulty": "medium",
        "topic": "Phenylketonuria is caused by mutations in the PAH gene, affecting phenylalanine metabolism."
    },
    {
        "id": "484",
        "question": "Which population genetic process randomly alters allele frequencies?",
        "options": [
            "Natural selection",
            "Genetic drift",
            "Mutation",
            "Gene flow"
        ],
        "answer": "Genetic drift",
        "difficulty": "medium",
        "topic": "Population Genetics",
        "explanation": "Genetic drift causes random allele frequency changes in small populations."
    },
    {
        "id": "485",
        "question": "Which technique sequences DNA using chain-terminating nucleotides?",
        "options": [
            "Sanger sequencing",
            "PCR",
            "FISH",
            "qPCR"
        ],
        "answer": "Sanger sequencing",
        "difficulty": "medium",
        "topic": "Genetic Engineering and Biotechnology",
        "explanation": "Sanger sequencing uses dideoxynucleotides to terminate DNA synthesis."
    },
    {
        "id": "486",
        "question": "Which field studies protein structure and interactions?",
        "options": [
            "Genomics",
            "Proteomics",
            "Transcriptomics",
            "Cytogenetics"
        ],
        "answer": "Proteomics",
        "difficulty": "medium",
        "topic": "Genomics and Proteomics",
        "explanation": "Proteomics studies the structure, function of proteins in cells."
    },
    {
        "id": "487",
        "question": "Which chromosomal technique stains GC-rich regions?",
        "options": [
            "G-banding",
            "R-banding",
            "C-banding",
            "FISH"
        ],
        "answer": "R-banding",
        "difficulty": "hard",
        "topic": "Cytogenetics",
        "explanation": "R-banding stains GC-rich regions of chromosomes."
    },
    {
        "id": "488",
        "question": "Which genes control heart development in vertebrates?",
        "options": [
            "Hox genes",
            "Nkx genes",
            "Pax genes",
            "Oncogenes"
        ],
        "answer": "Nkx genes",
        "difficulty": "hard",
        "topic": "Developmental Genetics",
        "explanation": "Nkx genes, such as Nkx2-2, regulate heart development."
    },
    {
        "id": "Which 489",
        "question": "Which ethical issue concerns genetic data in direct-to-consumer tests?",
        "options": [
            "Genetic privacy",
            "Direct-to-consumer testing",
            "Eugenics",
            "Gene patenting"
        ],
        "answer": "Direct-to-consumer testing",
        "difficulty": "medium",
        "topic": "Ethical, Legal, and Social Issues in Genetics",
        "explanation": "Direct-to-consumer testing raises concerns about data accuracy and misuse."
    },
    {
        "id": "Which 490",
        "question": "Which inheritance pattern involves more than two alleles for a gene?",
        "options": [
            "Incomplete dominance",
            "Codominance",
            "Multiple alleles",
            "Epistasis"
        ],
        "answer": "Multiple alleles",
        "difficulty": "medium",
        "topic": "Extensions of Mendelian Genetics",
        "explanation": "Multiple alleles exist for some genes, like the ABO blood group."
    },
    {
        "id": "491",
        "question": "Which process maps genes based on recombination frequency?",
        "options": [
            "Karyotyping",
            "Genetic mapping",
            "FISH",
            "PCR"
        ],
        "answer": "Genetic mapping",
        "difficulty": "medium",
        "topic": "Chromosomal Basis of Inheritance",
        "explanation": "Exchanges genetic mapping determines gene positions using recombination rates."
    },
    {
        "id": "Which 492",
        "question": "Which DNA region signals the start of transcription?",
        "options": [
            "Terminator",
            "Promoter",
            "Enhancer",
            "Intron"
        ],
        "answer": "Promoter",
        "difficulty": "medium",
        "topic": "Molecular Genetics",
        "explanation": "Exchanges promoters initiate transcription by RNA polymerase binding."
    },
    {
        "id": "Which 493",
        "question": "Which mutation improves an organism’s survival in its environment?",
        "options": [
            "Harmful mutation",
            "Silent mutation",
            "Beneficial mutation",
            "Nonsense mutation"
        ],
        "answer": "Beneficial mutation",
        "difficulty": "easy",
        "topic": "Mutation and DNA Repair",
        "explanation": "Beneficial mutations enhance an organism’s fitness."
    },
    {
        "id": "Which 494",
        "question": "Which disorder is linked to mutations in the BRCA2 gene?",
        "options": [
            "Breast cancer susceptibility",
            "Cystic fibrosis",
            "Sickle cell anemia",
            "Huntington’s disease"
        ],
        "answer": "Breast cancer susceptibility",
        "difficulty": "medium",
        "topic": "Genetic Disorders",
        "explanation": "BRCA2 mutations increase the risk of breast and ovarian cancer."
    },
    {
        "id": "Which 495",
        "question": "Which population genetic process reduces diversity in small populations?",
        "options": [
            "Natural selection",
            "Genetic drift",
            "Mutation",
            "Gene flow"
        ],
        "answer": "Genetic drift",
        "difficulty": "medium",
        "topic": "Population Genetics",
        "explanation": "Genetic drift reduces allele diversity in small populations."
    },
    {
        "id": "Which 496",
        "question": "Which trait is analyzed using genome-wide association studies?",
        "options": [
            "Blood type",
            "Disease susceptibility",
            "Cystic fibrosis",
            "Eye color"
        ],
        "answer": "Disease susceptibility",
        "difficulty": "medium",
        "topic": "Quantitative Genetics",
        "explanation": "GWAS identifies genetic variants linked to disease susceptibility."
    },
    {
        "id": "Which 497",
        "question": "Which technique delivers DNA into cells using a gene gun?",
        "options": [
            "Electroporation",
            "Biolistic transformation",
            "Agrobacterium-mediated transformation",
            "CRISPR-Cas9"
        ],
        "answer": "Biolistic transformation",
        "difficulty": "hard",
        "topic": "Genetic Engineering and Biotechnology",
        "explanation": "Biolistic transformation uses a gene gun to deliver DNA."
    },
    {
        "id": "Which 498",
        "question": "Which GMO crop is modified to resist viral infections?",
        "options": [
            "Bt corn",
            "Virus-resistant papaya",
            "Golden rice",
            "Roundup Ready soybeans"
        ],
        "answer": "Virus-resistant papaya",
        "difficulty": "medium",
        "topic": "Genetic Engineering and Biotechnology",
        "explanation": "Virus-resistant papaya is engineered to resist papaya ringspot virus."
    },
    {
        "id": "Which 499",
        "question": "Which field studies gene function using knockout models?",
        "options": [
            "Functional genomics",
            "Proteomics",
            "Transcriptomics",
            "Cytogenetics"
        ],
        "answer": "Functional genomics",
        "difficulty": "medium",
        "topic": "Genomics and Proteomics",
        "explanation": "Functional genomics uses knockouts to study gene roles."
    },
    {
        "id": 500,
        "question": "Which genes regulate cell fate in C. elegans development?",
        "options": [
            "Hox genes",
            "Heterochronic genes",
            "Pax genes",
            "Oncogenes"
        ],
        "answer": "Heterochronic genes",
        "difficulty": "hard",
        "topic": "Developmental Genetics",
        "explanation": "Heterochronic genes control developmental timing in C. elegans."
    }
]
