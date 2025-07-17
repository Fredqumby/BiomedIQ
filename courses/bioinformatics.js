const QUESTIONS = [
    {
        "id": 1,
        "question": "What is the primary function of BLAST in bioinformatics?",
        "options": [
            "To align protein structures",
            "To compare biological sequences",
            "To predict gene expression levels",
            "To simulate protein folding"
        ],
        "answer": "To compare biological sequences",
        "difficulty": "easy",
        "topic": "Sequence Analysis",
        "explanation": "BLAST (Basic Local Alignment Search Tool) is used to compare biological sequences, such as DNA, RNA, or proteins, against a database to find regions of similarity, aiding in functional annotation and evolutionary studies."
    },
    {
        "id": 2,
        "question": "Which file format is commonly used to store DNA sequence data?",
        "options": [
            "FASTA",
            "PDB",
            "VCF",
            "BAM"
        ],
        "answer": "FASTA",
        "difficulty": "easy",
        "topic": "Data Formats",
        "explanation": "FASTA is a text-based format widely used to represent DNA, RNA, or protein sequences, consisting of a header line starting with '>' followed by the sequence data."
    },
    {
        "id": 3,
        "question": "What does the term 'homology' refer to in bioinformatics?",
        "options": [
            "Similarity due to common ancestry",
            "Similarity due to convergent evolution",
            "Identical sequences in different species",
            "Random sequence alignment"
        ],
        "answer": "Similarity due to common ancestry",
        "difficulty": "medium",
        "topic": "Sequence Analysis",
        "explanation": "Homology refers to similarity between sequences due to shared evolutionary ancestry, often inferred from significant sequence similarity in alignments."
    },
    {
        "id": 4,
        "question": "Which algorithm is commonly used for global sequence alignment?",
        "options": [
            "Smith-Waterman",
            "Needleman-Wunsch",
            "BLAST",
            "ClustalW"
        ],
        "answer": "Needleman-Wunsch",
        "difficulty": "medium",
        "topic": "Sequence Alignment",
        "explanation": "The Needleman-Wunsch algorithm is a dynamic programming method used for global sequence alignment, optimizing the alignment of entire sequences."
    },
    {
        "id": 5,
        "question": "What is the purpose of a phylogenetic tree in bioinformatics?",
        "options": [
            "To predict protein structure",
            "To visualize evolutionary relationships",
            "To identify gene mutations",
            "To calculate sequence coverage"
        ],
        "answer": "To visualize evolutionary relationships",
        "difficulty": "easy",
        "topic": "Phylogenetics",
        "explanation": "A phylogenetic tree represents evolutionary relationships among organisms or sequences, showing how they diverged from a common ancestor."
    },
    {
        "id": 6,
        "question": "Which of the following is a key application of Hidden Markov Models (HMMs) in bioinformatics?",
        "options": [
            "Protein structure prediction",
            "Gene finding",
            "Sequence alignment scoring",
            "Metagenomic classification"
        ],
        "answer": "Gene finding",
        "difficulty": "medium",
        "topic": "Computational Biology",
        "explanation": "HMMs are widely used in bioinformatics for gene finding, as they model sequential data to predict gene structures in DNA sequences."
    },
    {
        "id": 7,
        "question": "What does the term 'orthologs' refer to in comparative genomics?",
        "options": [
            "Genes duplicated within a species",
            "Genes in different species derived from a common ancestor",
            "Genes with identical functions",
            "Genes with no sequence similarity"
        ],
        "answer": "Genes in different species derived from a common ancestor",
        "difficulty": "medium",
        "topic": "Genomics",
        "explanation": "Orthologs are genes in different species that evolved from a common ancestral gene through speciation, often retaining similar functions."
    },
    {
        "id": 8,
        "question": "Which database is primarily used for storing protein sequence information?",
        "options": [
            "GenBank",
            "UniProt",
            "Ensembl",
            "KEGG"
        ],
        "answer": "UniProt",
        "difficulty": "easy",
        "topic": "Databases",
        "explanation": "UniProt is a comprehensive database for protein sequence and functional information, widely used in bioinformatics research."
    },
    {
        "id": 9,
        "question": "What is the main purpose of the Smith-Waterman algorithm?",
        "options": [
            "Global sequence alignment",
            "Local sequence alignment",
            "Phylogenetic tree construction",
            "Gene expression analysis"
        ],
        "answer": "Local sequence alignment",
        "difficulty": "medium",
        "topic": "Sequence Alignment",
        "explanation": "The Smith-Waterman algorithm is a dynamic programming method designed for local sequence alignment, identifying the most similar regions between two sequences."
    },
    {
        "id": 10,
        "question": "Which of the following is a common tool for multiple sequence alignment?",
        "options": [
            "BLAST",
            "ClustalW",
            "Bowtie",
            "SAMtools"
        ],
        "answer": "ClustalW",
        "difficulty": "easy",
        "topic": "Sequence Alignment",
        "explanation": "ClustalW is a widely used tool for performing multiple sequence alignments, useful for phylogenetic and functional studies."
    },
    {
        "id": 11,
        "question": "What is the primary goal of functional genomics?",
        "options": [
            "To sequence entire genomes",
            "To understand gene functions and interactions",
            "To predict protein structures",
            "To analyze metagenomic data"
        ],
        "answer": "To understand gene functions and interactions",
        "difficulty": "medium",
        "topic": "Genomics",
        "explanation": "Functional genomics aims to understand the roles and interactions of genes and their products within a biological system."
    },
    {
        "id": 12,
        "question": "Which type of RNA is typically analyzed in transcriptomics studies?",
        "options": [
            "mRNA",
            "tRNA",
            "rRNA",
            "miRNA"
        ],
        "answer": "mRNA",
        "difficulty": "easy",
        "topic": "Transcriptomics",
        "explanation": "Transcriptomics primarily focuses on mRNA to study gene expression levels and patterns across different conditions or tissues."
    },
    {
        "id": 13,
        "question": "What is the significance of an E-value in BLAST searches?",
        "options": [
            "It indicates the alignment score",
            "It measures the expected number of chance hits",
            "It represents sequence length",
            "It calculates mutation rates"
        ],
        "answer": "It measures the expected number of chance hits",
        "difficulty": "medium",
        "topic": "Sequence Analysis",
        "explanation": "The E-value in BLAST represents the expected number of alignments with a given score that would occur by chance in a database search, indicating statistical significance."
    },
    {
        "id": 14,
        "question": "Which tool is commonly used for short-read sequence alignment in next-generation sequencing?",
        "options": [
            "ClustalW",
            "Bowtie",
            "MAFFT",
            "MUSCLE"
        ],
        "answer": "Bowtie",
        "difficulty": "medium",
        "topic": "Next-Generation Sequencing",
        "explanation": "Bowtie is a fast and memory-efficient tool for aligning short sequencing reads to reference genomes, widely used in NGS pipelines."
    },
    {
        "id": 15,
        "question": "What is the primary purpose of the Gene Ontology (GO) database?",
        "options": [
            "To store genome sequences",
            "To provide standardized gene and protein function annotations",
            "To predict protein structures",
            "To map metabolic pathways"
        ],
        "answer": "To provide standardized gene and protein function annotations",
        "difficulty": "medium",
        "topic": "Databases",
        "explanation": "The Gene Ontology database provides structured, controlled vocabularies to describe gene and protein functions, enabling consistent annotations across species."
    },
    {
        "id": 16,
        "question": "Which of the following is a common application of metagenomics?",
        "options": [
            "Studying protein interactions",
            "Analyzing microbial communities",
            "Predicting gene expression",
            "Aligning protein sequences"
        ],
        "answer": "Analyzing microbial communities",
        "difficulty": "medium",
        "topic": "Metagenomics",
        "explanation": "Metagenomics involves sequencing and analyzing DNA from environmental samples to study microbial communities without culturing."
    },
    {
        "id": 17,
        "question": "What is the primary advantage of using a reference genome in sequence alignment?",
        "options": [
            "It reduces sequencing errors",
            "It provides a standard for mapping reads",
            "It eliminates the need for alignment",
            "It predicts protein structures"
        ],
        "answer": "It provides a standard for mapping reads",
        "difficulty": "easy",
        "topic": "Genomics",
        "explanation": "A reference genome serves as a standard template for mapping sequencing reads, facilitating the identification of variations and gene locations."
    },
    {
        "id": 18,
        "question": "Which programming language is most commonly used in bioinformatics for scripting and data analysis?",
        "options": [
            "Java",
            "Python",
            "C++",
            "Ruby"
        ],
        "answer": "Python",
        "difficulty": "easy",
        "topic": "Computational Biology",
        "explanation": "Python is widely used in bioinformatics due to its simplicity, extensive libraries (e.g., Biopython), and versatility for data analysis and scripting."
    },
    {
        "id": 19,
        "question": "What does VCF stand for in the context of genomics?",
        "options": [
            "Variant Call Format",
            "Variable Coding Framework",
            "Vectorized Compression File",
            "Virtual Chromosome Format"
        ],
        "answer": "Variant Call Format",
        "difficulty": "easy",
        "topic": "Data Formats",
        "explanation": "VCF (Variant Call Format) is a standardized text file format used to store genetic variation data, such as SNPs and indels, from sequencing studies."
    },
    {
        "id": 20,
        "question": "Which of the following is a key challenge in de novo genome assembly?",
        "options": [
            "High sequence similarity",
            "Short read lengths and repeats",
            "Low mutation rates",
            "Excessive reference genomes"
        ],
        "answer": "Short read lengths and repeats",
        "difficulty": "medium",
        "topic": "Genomics",
        "explanation": "De novo genome assembly is challenging due to short read lengths from NGS and repetitive regions in genomes, which complicate accurate assembly."
    },
    {
        "id": 21,
        "question": "What is the primary purpose of the KEGG database?",
        "options": [
            "To store protein sequences",
            "To map metabolic pathways",
            "To predict gene expression",
            "To align DNA sequences"
        ],
        "answer": "To map metabolic pathways",
        "difficulty": "medium",
        "topic": "Databases",
        "explanation": "The KEGG (Kyoto Encyclopedia of Genes and Genomes) database provides information on metabolic pathways, gene functions, and biological systems."
    },
    {
        "id": 22,
        "question": "Which method is commonly used to normalize gene expression data in RNA-Seq studies?",
        "options": [
            "Z-score normalization",
            "TPM (Transcripts Per Million)",
            "Log transformation",
            "Min-max scaling"
        ],
        "answer": "TPM (Transcripts Per Million)",
        "difficulty": "medium",
        "topic": "Transcriptomics",
        "explanation": "TPM normalizes RNA-Seq data by accounting for gene length and sequencing depth, providing a measure of relative gene expression."
    },
    {
        "id": 23,
        "question": "What is the role of a sequence motif in bioinformatics?",
        "options": [
            "To predict protein folding",
            "To identify conserved functional regions",
            "To calculate sequence coverage",
            "To align entire genomes"
        ],
        "answer": "To identify conserved functional regions",
        "difficulty": "medium",
        "topic": "Sequence Analysis",
        "explanation": "Sequence motifs are short, conserved patterns in DNA, RNA, or proteins that often indicate functional regions, such as binding sites or domains."
    },
    {
        "id": 24,
        "question": "Which tool is used for variant calling in next-generation sequencing data?",
        "options": [
            "GATK",
            "ClustalW",
            "BLAST",
            "Bowtie"
        ],
        "answer": "GATK",
        "difficulty": "medium",
        "topic": "Next-Generation Sequencing",
        "explanation": "GATK (Genome Analysis Toolkit) is a widely used tool for identifying genetic variants, such as SNPs and indels, in NGS data."
    },
    {
        "id": 25,
        "question": "What is the primary advantage of using long-read sequencing technologies like PacBio?",
        "options": [
            "Higher throughput",
            "Lower cost per base",
            "Improved resolution of repetitive regions",
            "Faster data processing"
        ],
        "answer": "Improved resolution of repetitive regions",
        "difficulty": "medium",
        "topic": "Next-Generation Sequencing",
        "explanation": "Long-read sequencing, such as PacBio, produces longer reads that help resolve repetitive regions and complex genomic structures."
    },
    {
        "id": 26,
        "question": "Which of the following is a common application of machine learning in bioinformatics?",
        "options": [
            "Sequence alignment",
            "Protein structure prediction",
            "Phylogenetic tree construction",
            "Manual annotation of genomes"
        ],
        "answer": "Protein structure prediction",
        "difficulty": "medium",
        "topic": "Computational Biology",
        "explanation": "Machine learning is widely used in bioinformatics for tasks like protein structure prediction (e.g., AlphaFold), leveraging patterns in sequence and structural data."
    },
    {
        "id": 27,
        "question": "What is the purpose of a quality score in next-generation sequencing?",
        "options": [
            "To measure sequence length",
            "To assess base-calling accuracy",
            "To predict gene function",
            "To align sequences"
        ],
        "answer": "To assess base-calling accuracy",
        "difficulty": "easy",
        "topic": "Next-Generation Sequencing",
        "explanation": "Quality scores (e.g., Phred scores) indicate the confidence in base-calling accuracy for each nucleotide in a sequencing read."
    },
    {
        "id": 28,
        "question": "Which of the following is a key feature of the FASTQ file format?",
        "options": [
            "Stores only sequence data",
            "Includes quality scores for each base",
            "Represents protein structures",
            "Stores variant calls"
        ],
        "answer": "Includes quality scores for each base",
        "difficulty": "easy",
        "topic": "Data Formats",
        "explanation": "FASTQ files store both nucleotide sequences and their corresponding quality scores, commonly used in NGS data analysis."
    },
    {
        "id": 29,
        "question": "What is the primary purpose of ChIP-Seq in bioinformatics?",
        "options": [
            "To sequence entire genomes",
            "To identify protein-DNA interactions",
            "To predict protein structures",
            "To analyze gene expression"
        ],
        "answer": "To identify protein-DNA interactions",
        "difficulty": "medium",
        "topic": "Epigenomics",
        "explanation": "ChIP-Seq (Chromatin Immunoprecipitation Sequencing) is used to identify protein-DNA interactions, such as transcription factor binding sites."
    },
    {
        "id": 30,
        "question": "Which statistical method is commonly used to identify differentially expressed genes in RNA-Seq data?",
        "options": [
            "T-test",
            "DESeq2",
            "ANOVA",
            "Chi-square test"
        ],
        "answer": "DESeq2",
        "difficulty": "medium",
        "topic": "Transcriptomics",
        "explanation": "DESeq2 is a popular tool for differential gene expression analysis in RNA-Seq data, using negative binomial distribution to model read counts."
    },
    {
        "id": 31,
        "question": "What does the term 'paralogs' refer to in genomics?",
        "options": [
            "Genes in different species with shared ancestry",
            "Genes duplicated within a species",
            "Identical genes across species",
            "Non-functional pseudogenes"
        ],
        "answer": "Genes duplicated within a species",
        "difficulty": "medium",
        "topic": "Genomics",
        "explanation": "Paralogs are genes within the same species that arose from gene duplication events, often diverging in function."
    },
    {
        "id": 32,
        "question": "Which of the following is a common tool for genome assembly?",
        "options": [
            "SPAdes",
            "BLAST",
            "ClustalW",
            "Bowtie"
        ],
        "answer": "SPAdes",
        "difficulty": "medium",
        "topic": "Genomics",
        "explanation": "SPAdes is a popular tool for de novo genome assembly, particularly optimized for short-read sequencing data."
    },
    {
        "id": 33,
        "question": "What is the primary goal of structural bioinformatics?",
        "options": [
            "To sequence genomes",
            "To predict and analyze protein structures",
            "To identify gene mutations",
            "To map metabolic pathways"
        ],
        "answer": "To predict and analyze protein structures",
        "difficulty": "easy",
        "topic": "Structural Bioinformatics",
        "explanation": "Structural bioinformatics focuses on predicting and analyzing the 3D structures of proteins and other biomolecules to understand their functions."
    },
    {
        "id": 34,
        "question": "Which database provides information on protein domains and families?",
        "options": [
            "GenBank",
            "Pfam",
            "Ensembl",
            "KEGG"
        ],
        "answer": "Pfam",
        "difficulty": "medium",
        "topic": "Databases",
        "explanation": "Pfam is a database of protein families and domains, providing information on conserved regions and their functional roles."
    },
    {
        "id": 35,
        "question": "What is the purpose of a BAM file in next-generation sequencing?",
        "options": [
            "To store raw sequence reads",
            "To store aligned sequence reads",
            "To store variant calls",
            "To store gene annotations"
        ],
        "answer": "To store aligned sequence reads",
        "difficulty": "medium",
        "topic": "Data Formats",
        "explanation": "BAM (Binary Alignment Map) files store sequence reads aligned to a reference genome, used in NGS data analysis."
    },
    {
        "id": 36,
        "question": "Which of the following is a common method for clustering genes based on expression data?",
        "options": [
            "K-means clustering",
            "Smith-Waterman algorithm",
            "BLAST",
            "Needleman-Wunsch"
        ],
        "answer": "K-means clustering",
        "difficulty": "medium",
        "topic": "Transcriptomics",
        "explanation": "K-means clustering is a machine learning method used to group genes with similar expression patterns in transcriptomics studies."
    },
    {
        "id": 37,
        "question": "What is the primary advantage of single-cell RNA sequencing over bulk RNA sequencing?",
        "options": [
            "Lower cost",
            "Higher throughput",
            "Ability to analyze individual cell transcriptomes",
            "Faster data processing"
        ],
        "answer": "Ability to analyze individual cell transcriptomes",
        "difficulty": "medium",
        "topic": "Transcriptomics",
        "explanation": "Single-cell RNA sequencing allows the analysis of gene expression at the individual cell level, revealing cellular heterogeneity."
    },
    {
        "id": 38,
        "question": "Which tool is commonly used for phylogenetic tree construction?",
        "options": [
            "MEGA",
            "BLAST",
            "Bowtie",
            "SAMtools"
        ],
        "answer": "MEGA",
        "difficulty": "medium",
        "topic": "Phylogenetics",
        "explanation": "MEGA (Molecular Evolutionary Genetics Analysis) is a widely used tool for constructing phylogenetic trees and analyzing evolutionary relationships."
    },
    {
        "id": 39,
        "question": "What is the primary purpose of the PDB database?",
        "options": [
            "To store DNA sequences",
            "To store protein 3D structures",
            "To store gene expression data",
            "To store variant calls"
        ],
        "answer": "To store protein 3D structures",
        "difficulty": "easy",
        "topic": "Databases",
        "explanation": "The PDB (Protein Data Bank) is a repository for the 3D structural data of proteins and other macromolecules."
    },
    {
        "id": 40,
        "question": "Which of the following is a key application of proteomics in bioinformatics?",
        "options": [
            "Sequencing genomes",
            "Identifying protein interactions",
            "Predicting gene expression",
            "Aligning DNA sequences"
        ],
        "answer": "Identifying protein interactions",
        "difficulty": "medium",
        "topic": "Proteomics",
        "explanation": "Proteomics studies the structure, function, and interactions of proteins, often using bioinformatics tools to analyze mass spectrometry data."
    },
    {
        "id": 41,
        "question": "What is the primary function of the Ensembl database?",
        "options": [
            "To store protein structures",
            "To provide genome annotations",
            "To map metabolic pathways",
            "To store sequence reads"
        ],
        "answer": "To provide genome annotations",
        "difficulty": "medium",
        "topic": "Databases",
        "explanation": "Ensembl provides comprehensive genome annotations, including gene locations, functions, and comparative genomics data."
    },
    {
        "id": 42,
        "question": "Which method is used to predict secondary structure of proteins?",
        "options": [
            "BLAST",
            "PSSM",
            "HMMER",
            "PSIPRED"
        ],
        "answer": "PSIPRED",
        "difficulty": "medium",
        "topic": "Structural Bioinformatics",
        "explanation": "PSIPRED is a tool that uses neural networks and position-specific scoring matrices to predict the secondary structure of proteins."
    },
    {
        "id": 43,
        "question": "What is the primary challenge in metagenomic analysis?",
        "options": [
            "Low sequence similarity",
            "Complex microbial diversity",
            "Short sequence lengths",
            "Lack of reference genomes"
        ],
        "answer": "Complex microbial diversity",
        "difficulty": "medium",
        "topic": "Metagenomics",
        "explanation": "Metagenomic analysis is challenging due to the complex diversity of microbial communities, which often include many uncultured species."
    },
    {
        "id": 44,
        "question": "Which of the following is a common tool for RNA-Seq data analysis?",
        "options": [
            "Tophat",
            "ClustalW",
            "BLAST",
            "MAFFT"
        ],
        "answer": "Tophat",
        "difficulty": "medium",
        "topic": "Transcriptomics",
        "explanation": "Tophat is a tool used for aligning RNA-Seq reads to a reference genome, particularly for detecting splice junctions."
    },
    {
        "id": 45,
        "question": "What does the term 'SNP' stand for in genomics?",
        "options": [
            "Single Nucleotide Polymorphism",
            "Short Nucleotide Pair",
            "Synthetic Nucleic Polymer",
            "Sequential Nucleotide Pattern"
        ],
        "answer": "Single Nucleotide Polymorphism",
        "difficulty": "easy",
        "topic": "Genomics",
        "explanation": "A SNP (Single Nucleotide Polymorphism) is a variation at a single nucleotide position in the genome, commonly used in genetic studies."
    },
    {
        "id": 46,
        "question": "Which of the following is a common application of systems biology?",
        "options": [
            "Sequence alignment",
            "Modeling biological networks",
            "Predicting protein structures",
            "Assembling genomes"
        ],
        "answer": "Modeling biological networks",
        "difficulty": "medium",
        "topic": "Systems Biology",
        "explanation": "Systems biology focuses on modeling and analyzing complex biological networks, such as metabolic or regulatory pathways."
    },
    {
        "id": 47,
        "question": "What is the primary purpose of the SAM file format?",
        "options": [
            "To store sequence alignments",
            "To store protein structures",
            "To store gene expression data",
            "To store variant calls"
        ],
        "answer": "To store sequence alignments",
        "difficulty": "medium",
        "topic": "Data Formats",
        "explanation": "SAM (Sequence Alignment/Map) files store sequence alignments, including read mappings and associated metadata."
    },
    {
        "id": 48,
        "question": "Which tool is used for protein domain identification?",
        "options": [
            "HMMER",
            "BLAST",
            "Bowtie",
            "SAMtools"
        ],
        "answer": "HMMER",
        "difficulty": "medium",
        "topic": "Proteomics",
        "explanation": "HMMER uses Hidden Markov Models to identify protein domains and families, often in conjunction with databases like Pfam."
    },
    {
        "id": 49,
        "question": "What is the primary advantage of using a de Bruijn graph in genome assembly?",
        "options": [
            "It reduces sequencing errors",
            "It handles repetitive regions efficiently",
            "It increases sequence coverage",
            "It predicts gene functions"
        ],
        "answer": "It handles repetitive regions efficiently",
        "difficulty": "hard",
        "topic": "Genomics",
        "explanation": "De Bruijn graphs are used in genome assembly to efficiently represent overlapping sequence reads, particularly useful for handling repetitive regions."
    },
    {
        "id": 50,
        "question": "Which of the following is a key limitation of short-read sequencing?",
        "options": [
            "High cost",
            "Low accuracy",
            "Difficulty resolving repetitive regions",
            "Slow data processing"
        ],
        "answer": "Difficulty resolving repetitive regions",
        "difficulty": "medium",
        "topic": "Next-Generation Sequencing",
        "explanation": "Short-read sequencing struggles to resolve repetitive regions due to the short length of reads, which can lead to ambiguous assemblies."
    },
    {
        "id": 51,
        "question": "What is the primary purpose of the BLASTP algorithm?",
        "options": [
            "To align DNA sequences",
            "To align protein sequences",
            "To predict gene expression",
            "To construct phylogenetic trees"
        ],
        "answer": "To align protein sequences",
        "difficulty": "easy",
        "topic": "Sequence Analysis",
        "explanation": "BLASTP is a variant of BLAST designed specifically for comparing protein sequences to identify similarities."
    },
    {
        "id": 52,
        "question": "Which of the following is a common application of molecular dynamics simulations in bioinformatics?",
        "options": [
            "Sequence alignment",
            "Protein structure refinement",
            "Gene expression analysis",
            "Variant calling"
        ],
        "answer": "Protein structure refinement",
        "difficulty": "medium",
        "topic": "Structural Bioinformatics",
        "explanation": "Molecular dynamics simulations are used to study protein dynamics and refine predicted protein structures."
    },
    {
        "id": 53,
        "question": "What does the term 'contig' refer to in genome assembly?",
        "options": [
            "A complete chromosome",
            "A continuous sequence from overlapping reads",
            "A single sequencing read",
            "A protein domain"
        ],
        "answer": "A continuous sequence from overlapping reads",
        "difficulty": "medium",
        "topic": "Genomics",
        "explanation": "A contig is a continuous sequence generated by assembling overlapping sequencing reads in genome assembly."
    },
    {
        "id": 54,
        "question": "Which database is used for storing gene expression data?",
        "options": [
            "GEO",
            "Pfam",
            "UniProt",
            "PDB"
        ],
        "answer": "GEO",
        "difficulty": "medium",
        "topic": "Databases",
        "explanation": "GEO (Gene Expression Omnibus) is a database that stores high-throughput gene expression and functional genomics data."
    },
    {
        "id": 55,
        "question": "What is the primary purpose of the Clustal Omega tool?",
        "options": [
            "To align multiple sequences",
            "To predict protein structures",
            "To identify genetic variants",
            "To map metabolic pathways"
        ],
        "answer": "To align multiple sequences",
        "difficulty": "easy",
        "topic": "Sequence Alignment",
        "explanation": "Clustal Omega is a tool for performing fast and accurate multiple sequence alignments, suitable for large datasets."
    },
    {
        "id": 56,
        "question": "Which of the following is a common method for detecting gene fusions in RNA-Seq data?",
        "options": [
            "STAR-Fusion",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "STAR-Fusion",
        "difficulty": "hard",
        "topic": "Transcriptomics",
        "explanation": "STAR-Fusion is a tool designed to detect gene fusions in RNA-Seq data by analyzing chimeric alignments."
    },
    {
        "id": 57,
        "question": "What is the primary advantage of using a position-specific scoring matrix (PSSM)?",
        "options": [
            "It reduces sequencing errors",
            "It captures sequence conservation patterns",
            "It predicts gene expression",
            "It aligns entire genomes"
        ],
        "answer": "It captures sequence conservation patterns",
        "difficulty": "medium",
        "topic": "Sequence Analysis",
        "explanation": "PSSMs capture the conservation of residues at each position in a sequence alignment, used in tools like HMMER and PSIPRED."
    },
    {
        "id": 58,
        "question": "Which of the following is a common challenge in proteomics data analysis?",
        "options": [
            "Low sequence coverage",
            "High peptide complexity",
            "Short read lengths",
            "Lack of reference genomes"
        ],
        "answer": "High peptide complexity",
        "difficulty": "medium",
        "topic": "Proteomics",
        "explanation": "Proteomics data analysis is challenging due to the high complexity of peptide mixtures, requiring advanced mass spectrometry and computational tools."
    },
    {
        "id": 59,
        "question": "What is the primary purpose of the UCSC Genome Browser?",
        "options": [
            "To align protein sequences",
            "To visualize genomic data",
            "To predict protein structures",
            "To store sequence reads"
        ],
        "answer": "To visualize genomic data",
        "difficulty": "easy",
        "topic": "Genomics",
        "explanation": "The UCSC Genome Browser is a tool for visualizing genomic data, including gene annotations, tracks, and variations."
    },
    {
        "id": 60,
        "question": "Which of the following is a key application of comparative genomics?",
        "options": [
            "Predicting protein structures",
            "Identifying conserved genes across species",
            "Analyzing gene expression",
            "Assembling metagenomes"
        ],
        "answer": "Identifying conserved genes across species",
        "difficulty": "medium",
        "topic": "Genomics",
        "explanation": "Comparative genomics compares genomes across species to identify conserved genes, orthologs, and evolutionary relationships."
    },
    {
        "id": 61,
        "question": "What is the primary purpose of the InterPro database?",
        "options": [
            "To store genome sequences",
            "To integrate protein domain and function data",
            "To map metabolic pathways",
            "To store gene expression data"
        ],
        "answer": "To integrate protein domain and function data",
        "difficulty": "medium",
        "topic": "Databases",
        "explanation": "InterPro integrates data on protein domains, families, and functional sites from multiple databases, aiding in protein annotation."
    },
    {
        "id": 62,
        "question": "Which tool is commonly used for de novo transcript assembly in RNA-Seq?",
        "options": [
            "Trinity",
            "Bowtie",
            "BLAST",
            "ClustalW"
        ],
        "answer": "Trinity",
        "difficulty": "medium",
        "topic": "Transcriptomics",
        "explanation": "Trinity is a tool for de novo assembly of transcriptomes from RNA-Seq data, particularly useful in the absence of a reference genome."
    },
    {
        "id": 63,
        "question": "What is the primary advantage of using a Burrows-Wheeler transform in sequence alignment?",
        "options": [
            "It reduces memory usage",
            "It predicts gene functions",
            "It increases sequence coverage",
            "It eliminates sequencing errors"
        ],
        "answer": "It reduces memory usage",
        "difficulty": "hard",
        "topic": "Sequence Alignment",
        "explanation": "The Burrows-Wheeler transform is used in tools like Bowtie to compress sequence data, reducing memory usage during alignment."
    },
    {
        "id": 64,
        "question": "Which of the following is a common application of epigenomics?",
        "options": [
            "Sequence alignment",
            "Studying DNA methylation patterns",
            "Predicting protein structures",
            "Assembling genomes"
        ],
        "answer": "Studying DNA methylation patterns",
        "difficulty": "medium",
        "topic": "Epigenomics",
        "explanation": "Epigenomics studies modifications like DNA methylation that regulate gene expression without altering the DNA sequence."
    },
    {
        "id": 65,
        "question": "What is the primary purpose of the SAMtools software?",
        "options": [
            "To align sequences",
            "To manipulate sequence alignment files",
            "To predict protein structures",
            "To analyze gene expression"
        ],
        "answer": "To manipulate sequence alignment files",
        "difficulty": "medium",
        "topic": "Next-Generation Sequencing",
        "explanation": "SAMtools is used to manipulate and analyze SAM/BAM files, including sorting, indexing, and variant calling."
    },
    {
        "id": 66,
        "question": "Which of the following is a common method for protein-protein interaction prediction?",
        "options": [
            "BLAST",
            "STRING",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "STRING",
        "difficulty": "medium",
        "topic": "Proteomics",
        "explanation": "STRING is a database and tool for predicting and analyzing protein-protein interactions based on experimental and computational data."
    },
    {
        "id": 67,
        "question": "What is the primary challenge in single-cell RNA sequencing?",
        "options": [
            "Low sequence coverage",
            "High technical noise",
            "Short read lengths",
            "Lack of reference genomes"
        ],
        "answer": "High technical noise",
        "difficulty": "medium",
        "topic": "Transcriptomics",
        "explanation": "Single-cell RNA sequencing is challenging due to high technical noise from low input material and amplification biases."
    },
    {
        "id": 68,
        "question": "Which tool is used for predicting gene functions based on sequence similarity?",
        "options": [
            "BLAST",
            "Bowtie",
            "SPAdes",
            "Tophat"
        ],
        "answer": "BLAST",
        "difficulty": "easy",
        "topic": "Sequence Analysis",
        "explanation": "BLAST identifies sequence similarities, allowing researchers to infer gene functions based on homology to annotated sequences."
    },
    {
        "id": 69,
        "question": "What is the primary purpose of the BED file format?",
        "options": [
            "To store sequence alignments",
            "To store genomic intervals",
            "To store protein structures",
            "To store gene expression data"
        ],
        "answer": "To store genomic intervals",
        "difficulty": "medium",
        "topic": "Data Formats",
        "explanation": "BED files store genomic intervals, such as gene or feature locations, in a simple text-based format."
    },
    {
        "id": 70,
        "question": "Which of the following is a key application of cheminformatics in bioinformatics?",
        "options": [
            "Sequence alignment",
            "Drug-target interaction prediction",
            "Gene expression analysis",
            "Phylogenetic tree construction"
        ],
        "answer": "Drug-target interaction prediction",
        "difficulty": "medium",
        "topic": "Cheminformatics",
        "explanation": "Cheminformatics applies computational methods to predict drug-target interactions, aiding in drug discovery and bioinformatics."
    },
    {
        "id": 71,
        "question": "What is the primary advantage of using PacBio sequencing over Illumina sequencing?",
        "options": [
            "Lower cost",
            "Higher throughput",
            "Longer read lengths",
            "Faster data processing"
        ],
        "answer": "Longer read lengths",
        "difficulty": "medium",
        "topic": "Next-Generation Sequencing",
        "explanation": "PacBio sequencing produces longer reads, which improve the resolution of complex genomic regions compared to Illumina’s shorter reads."
    },
    {
        "id": 72,
        "question": "Which tool is used for metagenomic sequence classification?",
        "options": [
            "Kraken",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Kraken",
        "difficulty": "medium",
        "topic": "Metagenomics",
        "explanation": "Kraken is a tool for taxonomic classification of metagenomic sequences, assigning reads to taxonomic groups based on k-mer matches."
    },
    {
        "id": 73,
        "question": "What is the primary purpose of the GFF file format?",
        "options": [
            "To store sequence alignments",
            "To store gene annotations",
            "To store protein structures",
            "To store variant calls"
        ],
        "answer": "To store gene annotations",
        "difficulty": "medium",
        "topic": "Data Formats",
        "explanation": "GFF (General Feature Format) files store gene and feature annotations, including coordinates and attributes, for genomic data."
    },
    {
        "id": 74,
        "question": "Which of the following is a common method for dimensionality reduction in transcriptomics data?",
        "options": [
            "PCA",
            "BLAST",
            "Smith-Waterman",
            "Needleman-Wunsch"
        ],
        "answer": "PCA",
        "difficulty": "medium",
        "topic": "Transcriptomics",
        "explanation": "Principal Component Analysis (PCA) is used to reduce the dimensionality of transcriptomics data, aiding in visualization and analysis."
    },
    {
        "id": 75,
        "question": "What is the primary purpose of the DAVID tool in bioinformatics?",
        "options": [
            "To align sequences",
            "To perform functional annotation clustering",
            "To predict protein structures",
            "To assemble genomes"
        ],
        "answer": "To perform functional annotation clustering",
        "difficulty": "medium",
        "topic": "Functional Analysis",
        "explanation": "DAVID (Database for Annotation, Visualization, and Integrated Discovery) is used to cluster and analyze functional annotations of genes."
    },
    {
        "id": 76,
        "question": "Which of the following is a key limitation of de novo genome assembly?",
        "options": [
            "High sequence similarity",
            "Presence of repetitive regions",
            "Low mutation rates",
            "Excessive reference genomes"
        ],
        "answer": "Presence of repetitive regions",
        "difficulty": "medium",
        "topic": "Genomics",
        "explanation": "Repetitive regions in genomes complicate de novo assembly, as they can lead to ambiguous or fragmented assemblies."
    },
    {
        "id": 77,
        "question": "What is the primary purpose of the Bioconductor project?",
        "options": [
            "To provide tools for sequence alignment",
            "To provide R packages for bioinformatics analysis",
            "To store protein structures",
            "To map metabolic pathways"
        ],
        "answer": "To provide R packages for bioinformatics analysis",
        "difficulty": "medium",
        "topic": "Computational Biology",
        "explanation": "Bioconductor provides R packages for analyzing and visualizing high-throughput genomic data, widely used in bioinformatics."
    },
    {
        "id": 78,
        "question": "Which tool is used for predicting transcription factor binding sites?",
        "options": [
            "MEME",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "MEME",
        "difficulty": "medium",
        "topic": "Sequence Analysis",
        "explanation": "MEME (Multiple Em for Motif Elicitation) is a tool for discovering motifs in DNA or protein sequences, often used for transcription factor binding sites."
    },
    {
        "id": 79,
        "question": "What is the primary purpose of the GOseq tool?",
        "options": [
            "To align sequences",
            "To perform gene ontology enrichment analysis",
            "To predict protein structures",
            "To assemble genomes"
        ],
        "answer": "To perform gene ontology enrichment analysis",
        "difficulty": "medium",
        "topic": "Functional Analysis",
        "explanation": "GOseq is used to perform gene ontology enrichment analysis, particularly for RNA-Seq data, to identify overrepresented functional categories."
    },
    {
        "id": 80,
        "question": "Which of the following is a common application of network analysis in bioinformatics?",
        "options": [
            "Sequence alignment",
            "Studying protein-protein interactions",
            "Predicting gene expression",
            "Assembling genomes"
        ],
        "answer": "Studying protein-protein interactions",
        "difficulty": "medium",
        "topic": "Systems Biology",
        "explanation": "Network analysis is used to study protein-protein interactions, modeling complex biological systems as networks."
    },
    {
        "id": 81,
        "question": "What is the primary advantage of using Oxford Nanopore sequencing?",
        "options": [
            "High throughput",
            "Low cost",
            "Real-time sequencing",
            "Short read lengths"
        ],
        "answer": "Real-time sequencing",
        "difficulty": "medium",
        "topic": "Next-Generation Sequencing",
        "explanation": "Oxford Nanopore sequencing allows real-time sequencing, enabling rapid data generation and analysis."
    },
    {
        "id": 82,
        "question": "Which tool is used for functional annotation of metagenomic data?",
        "options": [
            "MG-RAST",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "MG-RAST",
        "difficulty": "medium",
        "topic": "Metagenomics",
        "explanation": "MG-RAST (Metagenomics Rapid Annotation using Subsystem Technology) is a platform for annotating and analyzing metagenomic data."
    },
    {
        "id": 83,
        "question": "What is the primary role of disulfide bonds in protein structure?",
        "options": [
            "To increase protein flexibility",
            "To stabilize protein structure",
            "To facilitate protein degradation",
            "To enhance protein solubility"
        ],
        "answer": "To stabilize protein structure",
        "difficulty": "medium",
        "topic": "Structural Bioinformatics",
        "explanation": "Disulfide bonds are covalent bonds between cysteine residues that stabilize protein structures, often analyzed in structural bioinformatics."
    },
    {
        "id": 84,
        "question": "Which of the following is a common method for detecting copy number variations (CNVs)?",
        "options": [
            "BLAST",
            "CNVkit",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "CNVkit",
        "difficulty": "medium",
        "topic": "Genomics",
        "explanation": "CNVkit is a tool used to detect copy number variations from high-throughput sequencing data."
    },
    {
        "id": 85,
        "question": "What is the primary purpose of the BEDTools software?",
        "options": [
            "To align sequences",
            "To manipulate genomic intervals",
            "To predict protein structures",
            "To analyze gene expression"
        ],
        "answer": "To manipulate genomic intervals",
        "difficulty": "medium",
        "topic": "Genomics",
        "explanation": "BEDTools is a suite of tools for manipulating and analyzing genomic intervals, such as those stored in BED or GFF files."
    },
    {
        "id": 86,
        "question": "Which of the following is a key application of transcriptomics?",
        "options": [
            "Sequence alignment",
            "Studying gene expression profiles",
            "Predicting protein structures",
            "Assembling genomes"
        ],
        "answer": "Studying gene expression profiles",
        "difficulty": "easy",
        "topic": "Transcriptomics",
        "explanation": "Transcriptomics studies gene expression profiles, typically using RNA-Seq to quantify mRNA levels across conditions."
    },
    {
        "id": 87,
        "question": "What is the primary purpose of the Ensembl VEP tool?",
        "options": [
            "To align sequences",
            "To predict the functional impact of variants",
            "To assemble genomes",
            "To predict protein structures"
        ],
        "answer": "To predict the functional impact of variants",
        "difficulty": "medium",
        "topic": "Genomics",
        "explanation": "Ensembl VEP (Variant Effect Predictor) predicts the functional consequences of genetic variants, such as SNPs and indels."
    },
    {
        "id": 88,
        "question": "Which of the following is a common method for protein structure prediction?",
        "options": [
            "AlphaFold",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "AlphaFold",
        "difficulty": "medium",
        "topic": "Structural Bioinformatics",
        "explanation": "AlphaFold, developed by DeepMind, uses deep learning to predict protein 3D structures with high accuracy."
    },
    {
        "id": 89,
        "question": "What is the primary purpose of the MAFFT tool?",
        "options": [
            "To predict gene expression",
            "To perform multiple sequence alignment",
            "To analyze metagenomic data",
            "To predict protein structures"
        ],
        "answer": "To perform multiple sequence alignment",
        "difficulty": "medium",
        "topic": "Sequence Alignment",
        "explanation": "MAFFT is a tool for fast and accurate multiple sequence alignment, used in phylogenetic and functional studies."
    },
    {
        "id": 90,
        "question": "Which of the following is a common application of bioinformatics in personalized medicine?",
        "options": [
            "Sequence alignment",
            "Identifying disease-associated variants",
            "Predicting protein structures",
            "Assembling genomes"
        ],
        "answer": "Identifying disease-associated variants",
        "difficulty": "medium",
        "topic": "Genomics",
        "explanation": "Bioinformatics is used in personalized medicine to identify genetic variants associated with diseases, guiding targeted therapies."
    },
    {
        "id": 91,
        "question": "What is the primary purpose of the Biopython library?",
        "options": [
            "To perform sequence analysis and bioinformatics tasks",
            "To predict protein structures",
            "To assemble genomes",
            "To map metabolic pathways"
        ],
        "answer": "To perform sequence analysis and bioinformatics tasks",
        "difficulty": "medium",
        "topic": "Computational Biology",
        "explanation": "Biopython is a Python library for bioinformatics tasks, including sequence analysis, file parsing, and database access."
    },
    {
        "id": 92,
        "question": "Which of the following is a key challenge in protein structure prediction?",
        "options": [
            "Low sequence similarity",
            "High computational complexity",
            "Short read lengths",
            "Lack of reference genomes"
        ],
        "answer": "High computational complexity",
        "difficulty": "medium",
        "topic": "Structural Bioinformatics",
        "explanation": "Protein structure prediction is computationally intensive due to the complexity of modeling 3D conformations."
    },
    {
        "id": 93,
        "question": "What is the primary purpose of the STRING database?",
        "options": [
            "To store genome sequences",
            "To predict protein-protein interactions",
            "To map metabolic pathways",
            "To store gene expression data"
        ],
        "answer": "To predict protein-protein interactions",
        "difficulty": "medium",
        "topic": "Proteomics",
        "explanation": "STRING is a database for predicting and analyzing protein-protein interactions based on experimental and computational evidence."
    },
    {
        "id": 94,
        "question": "Which tool is used for analyzing differential methylation in epigenomics?",
        "options": [
            "methylKit",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "methylKit",
        "difficulty": "medium",
        "topic": "Epigenomics",
        "explanation": "methylKit is an R package for analyzing differential DNA methylation from high-throughput sequencing data."
    },
    {
        "id": 95,
        "question": "What is the primary purpose of the FASTQC tool?",
        "options": [
            "To align sequences",
            "To assess the quality of sequencing data",
            "To predict protein structures",
            "To assemble genomes"
        ],
        "answer": "To assess the quality of sequencing data",
        "difficulty": "medium",
        "topic": "Next-Generation Sequencing",
        "explanation": "FASTQC is a tool for quality control of sequencing data, providing metrics like base quality and sequence content."
    },
    {
        "id": 96,
        "question": "Which of the following is a common method for phylogenetic distance calculation?",
        "options": [
            "Kimura 2-parameter model",
            "Smith-Waterman algorithm",
            "BLAST",
            "Bowtie"
        ],
        "answer": "Kimura 2-parameter model",
        "difficulty": "medium",
        "topic": "Phylogenetics",
        "explanation": "The Kimura 2-parameter model is used to estimate evolutionary distances between sequences for phylogenetic analysis."
    },
    {
        "id": 97,
        "question": "What is the primary purpose of the GSEA tool?",
        "options": [
            "To align sequences",
            "To perform gene set enrichment analysis",
            "To predict protein structures",
            "To assemble genomes"
        ],
        "answer": "To perform gene set enrichment analysis",
        "difficulty": "medium",
        "topic": "Functional Analysis",
        "explanation": "GSEA (Gene Set Enrichment Analysis) identifies enriched biological pathways or gene sets in expression data."
    },
    {
        "id": 98,
        "question": "Which of the following is a key application of single-molecule sequencing?",
        "options": [
            "Sequence alignment",
            "Resolving complex genomic regions",
            "Predicting gene expression",
            "Analyzing protein interactions"
        ],
        "answer": "Resolving complex genomic regions",
        "difficulty": "medium",
        "topic": "Next-Generation Sequencing",
        "explanation": "Single-molecule sequencing, like PacBio or Nanopore, is used to resolve complex genomic regions due to its long read lengths."
    },
    {
        "id": 99,
        "question": "What is the primary purpose of the IGV tool?",
        "options": [
            "To align sequences",
            "To visualize genomic data",
            "To predict protein structures",
            "To assemble genomes"
        ],
        "answer": "To visualize genomic data",
        "difficulty": "medium",
        "topic": "Genomics",
        "explanation": "IGV (Integrative Genomics Viewer) is a tool for visualizing genomic data, including alignments, variants, and annotations."
    },
    {
        "id": 100,
        "question": "Which of the following is a common challenge in bioinformatics data analysis?",
        "options": [
            "Low sequence similarity",
            "High data volume and complexity",
            "Short read lengths",
            "Lack of reference genomes"
        ],
        "answer": "High data volume and complexity",
        "difficulty": "medium",
        "topic": "Computational Biology",
        "explanation": "Bioinformatics deals with large, complex datasets, requiring advanced computational tools and methods for analysis."
    },
    {
        "id": 101,
        "question": "What is the primary purpose of the FASTA format in bioinformatics?",
        "options": [
            "To store protein structures",
            "To represent nucleotide or protein sequences",
            "To store gene expression data",
            "To store variant calls"
        ],
        "answer": "To represent nucleotide or protein sequences",
        "difficulty": "easy",
        "topic": "Data Formats",
        "explanation": "The FASTA format is a text-based format used to represent nucleotide or protein sequences, with a header line starting with '>' followed by the sequence."
    },
    {
        "id": 102,
        "question": "Which algorithm is used for local sequence alignment in BLAST?",
        "options": [
            "Needleman-Wunsch",
            "Smith-Waterman",
            "Burrows-Wheeler",
            "K-mer matching"
        ],
        "answer": "Smith-Waterman",
        "difficulty": "medium",
        "topic": "Sequence Alignment",
        "explanation": "BLAST uses a heuristic version of the Smith-Waterman algorithm for local sequence alignment to identify regions of high similarity."
    },
    {
        "id": 103,
        "question": "What does the term 'transcriptome' refer to in bioinformatics?",
        "options": [
            "All proteins in a cell",
            "All RNA molecules in a cell",
            "All DNA sequences in a genome",
            "All metabolic pathways"
        ],
        "answer": "All RNA molecules in a cell",
        "difficulty": "easy",
        "topic": "Transcriptomics",
        "explanation": "The transcriptome is the complete set of RNA molecules, including mRNA, tRNA, and others, expressed in a cell or tissue."
    },
    {
        "id": 104,
        "question": "Which tool is commonly used for quality control of RNA-Seq data?",
        "options": [
            "FastQC",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "FastQC",
        "difficulty": "easy",
        "topic": "Next-Generation Sequencing",
        "explanation": "FastQC is a widely used tool to assess the quality of RNA-Seq and other sequencing data, providing metrics like per-base quality scores."
    },
    {
        "id": 105,
        "question": "What is the primary goal of comparative transcriptomics?",
        "options": [
            "To predict protein structures",
            "To compare gene expression across species",
            "To assemble genomes",
            "To identify protein domains"
        ],
        "answer": "To compare gene expression across species",
        "difficulty": "medium",
        "topic": "Transcriptomics",
        "explanation": "Comparative transcriptomics analyzes gene expression differences across species to understand evolutionary and functional changes."
    },
    {
        "id": 106,
        "question": "Which database is used for storing and analyzing metabolic pathways?",
        "options": [
            "UniProt",
            "KEGG",
            "PDB",
            "Ensembl"
        ],
        "answer": "KEGG",
        "difficulty": "easy",
        "topic": "Databases",
        "explanation": "KEGG (Kyoto Encyclopedia of Genes and Genomes) is a database for storing and analyzing metabolic and signaling pathways."
    },
    {
        "id": 107,
        "question": "What is the primary advantage of using a suffix tree in sequence analysis?",
        "options": [
            "It reduces alignment errors",
            "It enables fast string matching",
            "It predicts gene functions",
            "It increases sequence coverage"
        ],
        "answer": "It enables fast string matching",
        "difficulty": "hard",
        "topic": "Sequence Analysis",
        "explanation": "Suffix trees are data structures that allow efficient string matching and searching in sequence analysis tasks."
    },
    {
        "id": 108,
        "question": "Which of the following is a common method for normalizing RNA-Seq data?",
        "options": [
            "Z-score normalization",
            "RPKM",
            "PCA",
            "K-means clustering"
        ],
        "answer": "RPKM",
        "difficulty": "medium",
        "topic": "Transcriptomics",
        "explanation": "RPKM (Reads Per Kilobase of transcript per Million mapped reads) normalizes RNA-Seq data for gene length and sequencing depth."
    },
    {
        "id": 109,
        "question": "What is the primary purpose of the Pfam database?",
        "options": [
            "To store genome sequences",
            "To identify protein families and domains",
            "To map metabolic pathways",
            "To store gene expression data"
        ],
        "answer": "To identify protein families and domains",
        "difficulty": "medium",
        "topic": "Databases",
        "explanation": "Pfam is a database of protein families and domains, using Hidden Markov Models to classify and annotate protein sequences."
    },
    {
        "id": 110,
        "question": "Which tool is used for detecting structural variants in genomic data?",
        "options": [
            "BreakDancer",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "BreakDancer",
        "difficulty": "medium",
        "topic": "Genomics",
        "explanation": "BreakDancer is a tool for detecting structural variants, such as deletions and inversions, from next-generation sequencing data."
    },
    {
        "id": 111,
        "question": "What does the term 'k-mer' refer to in bioinformatics?",
        "options": [
            "A protein domain",
            "A short subsequence of length k",
            "A type of genetic variant",
            "A gene expression metric"
        ],
        "answer": "A short subsequence of length k",
        "difficulty": "medium",
        "topic": "Sequence Analysis",
        "explanation": "A k-mer is a subsequence of length k used in sequence analysis for tasks like genome assembly and metagenomic classification."
    },
    {
        "id": 112,
        "question": "Which of the following is a common application of ATAC-Seq?",
        "options": [
            "Sequence alignment",
            "Identifying open chromatin regions",
            "Predicting protein structures",
            "Assembling genomes"
        ],
        "answer": "Identifying open chromatin regions",
        "difficulty": "medium",
        "topic": "Epigenomics",
        "explanation": "ATAC-Seq (Assay for Transposase-Accessible Chromatin using sequencing) identifies regions of open chromatin, indicating regulatory elements."
    },
    {
        "id": 113,
        "question": "What is the primary purpose of the HMMER tool?",
        "options": [
            "To align DNA sequences",
            "To identify protein domains",
            "To predict gene expression",
            "To assemble genomes"
        ],
        "answer": "To identify protein domains",
        "difficulty": "medium",
        "topic": "Proteomics",
        "explanation": "HMMER uses Hidden Markov Models to identify protein domains and families, often used with databases like Pfam."
    },
    {
        "id": 114,
        "question": "Which of the following is a key challenge in long-read sequencing?",
        "options": [
            "High error rates",
            "Short read lengths",
            "Low throughput",
            "Lack of reference genomes"
        ],
        "answer": "High error rates",
        "difficulty": "medium",
        "topic": "Next-Generation Sequencing",
        "explanation": "Long-read sequencing technologies, like PacBio and Nanopore, often have higher error rates compared to short-read sequencing."
    },
    {
        "id": 115,
        "question": "What is the primary purpose of the Gencode database?",
        "options": [
            "To store protein structures",
            "To provide comprehensive gene annotations",
            "To map metabolic pathways",
            "To store sequence reads"
        ],
        "answer": "To provide comprehensive gene annotations",
        "difficulty": "medium",
        "topic": "Databases",
        "explanation": "Gencode provides detailed gene annotations, including coding and non-coding genes, for human and mouse genomes."
    },
    {
        "id": 116,
        "question": "Which tool is used for metagenomic functional annotation?",
        "options": [
            "MG-RAST",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "MG-RAST",
        "difficulty": "medium",
        "topic": "Metagenomics",
        "explanation": "MG-RAST (Metagenomics Rapid Annotation using Subsystem Technology) annotates metagenomic sequences with functional information."
    },
    {
        "id": 117,
        "question": "What is the primary advantage of using a hash table in sequence alignment?",
        "options": [
            "It reduces memory usage",
            "It enables fast sequence lookup",
            "It predicts gene functions",
            "It increases sequence coverage"
        ],
        "answer": "It enables fast sequence lookup",
        "difficulty": "hard",
        "topic": "Sequence Alignment",
        "explanation": "Hash tables are used in sequence alignment tools like BLAST to enable fast lookup of sequence matches."
    },
    {
        "id": 118,
        "question": "Which of the following is a common method for phylogenetic tree reconstruction?",
        "options": [
            "Neighbor-joining",
            "Smith-Waterman",
            "BLAST",
            "Bowtie"
        ],
        "answer": "Neighbor-joining",
        "difficulty": "medium",
        "topic": "Phylogenetics",
        "explanation": "Neighbor-joining is a distance-based method for constructing phylogenetic trees, widely used in evolutionary studies."
    },
    {
        "id": 119,
        "question": "What is the primary purpose of the RefSeq database?",
        "options": [
            "To store protein structures",
            "To provide curated reference sequences",
            "To map metabolic pathways",
            "To store gene expression data"
        ],
        "answer": "To provide curated reference sequences",
        "difficulty": "medium",
        "topic": "Databases",
        "explanation": "RefSeq (Reference Sequence) provides curated, non-redundant reference sequences for genes, transcripts, and proteins."
    },
    {
        "id": 120,
        "question": "Which of the following is a common application of proteomics?",
        "options": [
            "Sequence alignment",
            "Identifying post-translational modifications",
            "Predicting gene expression",
            "Assembling genomes"
        ],
        "answer": "Identifying post-translational modifications",
        "difficulty": "medium",
        "topic": "Proteomics",
        "explanation": "Proteomics is used to identify post-translational modifications, such as phosphorylation, using mass spectrometry data."
    },
    {
        "id": 121,
        "question": "What is the primary purpose of the edgeR tool in bioinformatics?",
        "options": [
            "To align sequences",
            "To perform differential gene expression analysis",
            "To predict protein structures",
            "To assemble genomes"
        ],
        "answer": "To perform differential gene expression analysis",
        "difficulty": "medium",
        "topic": "Transcriptomics",
        "explanation": "edgeR is an R package for differential gene expression analysis, particularly suited for RNA-Seq count data."
    },
    {
        "id": 122,
        "question": "Which of the following is a key challenge in de novo transcript assembly?",
        "options": [
            "Low sequence similarity",
            "High isoform complexity",
            "Short read lengths",
            "Lack of reference genomes"
        ],
        "answer": "High isoform complexity",
        "difficulty": "medium",
        "topic": "Transcriptomics",
        "explanation": "De novo transcript assembly is challenging due to the complexity of alternative splicing and isoforms in RNA-Seq data."
    },
    {
        "id": 123,
        "question": "What is the primary purpose of the I-TASSER tool?",
        "options": [
            "To align sequences",
            "To predict protein structures",
            "To analyze gene expression",
            "To assemble genomes"
        ],
        "answer": "To predict protein structures",
        "difficulty": "medium",
        "topic": "Structural Bioinformatics",
        "explanation": "I-TASSER is a tool for protein structure and function prediction, using threading and ab initio modeling."
    },
    {
        "id": 124,
        "question": "Which database is used for storing microRNA data?",
        "options": [
            "miRBase",
            "UniProt",
            "KEGG",
            "PDB"
        ],
        "answer": "miRBase",
        "difficulty": "medium",
        "topic": "Databases",
        "explanation": "miRBase is a database for microRNA sequences and annotations, widely used in transcriptomics studies."
    },
    {
        "id": 125,
        "question": "What is the primary advantage of using a dynamic programming algorithm in sequence alignment?",
        "options": [
            "It reduces computational time",
            "It guarantees optimal alignment",
            "It predicts gene functions",
            "It increases sequence coverage"
        ],
        "answer": "It guarantees optimal alignment",
        "difficulty": "medium",
        "topic": "Sequence Alignment",
        "explanation": "Dynamic programming algorithms, like Needleman-Wunsch and Smith-Waterman, guarantee optimal sequence alignments."
    },
    {
        "id": 126,
        "question": "Which of the following is a common application of bisulfite sequencing?",
        "options": [
            "Sequence alignment",
            "Analyzing DNA methylation",
            "Predicting protein structures",
            "Assembling genomes"
        ],
        "answer": "Analyzing DNA methylation",
        "difficulty": "medium",
        "topic": "Epigenomics",
        "explanation": "Bisulfite sequencing is used to analyze DNA methylation patterns by converting unmethylated cytosines to uracil."
    },
    {
        "id": 127,
        "question": "What is the primary purpose of the Bowtie2 tool?",
        "options": [
            "To predict protein structures",
            "To align short sequencing reads",
            "To analyze gene expression",
            "To assemble genomes"
        ],
        "answer": "To align short sequencing reads",
        "difficulty": "medium",
        "topic": "Next-Generation Sequencing",
        "explanation": "Bowtie2 is a fast and memory-efficient tool for aligning short sequencing reads to a reference genome."
    },
    {
        "id": 128,
        "question": "Which of the following is a common method for gene set enrichment analysis?",
        "options": [
            "GSEA",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "GSEA",
        "difficulty": "medium",
        "topic": "Functional Analysis",
        "explanation": "GSEA (Gene Set Enrichment Analysis) identifies enriched biological pathways or gene sets in expression data."
    },
    {
        "id": 129,
        "question": "What is the primary purpose of the InterProScan tool?",
        "options": [
            "To align sequences",
            "To annotate protein domains and functions",
            "To predict gene expression",
            "To assemble genomes"
        ],
        "answer": "To annotate protein domains and functions",
        "difficulty": "medium",
        "topic": "Proteomics",
        "explanation": "InterProScan annotates protein sequences with domain and functional information using multiple databases."
    },
    {
        "id": 130,
        "question": "Which of the following is a key challenge in single-molecule sequencing?",
        "options": [
            "Low sequence coverage",
            "High error rates",
            "Short read lengths",
            "Lack of reference genomes"
        ],
        "answer": "High error rates",
        "difficulty": "medium",
        "topic": "Next-Generation Sequencing",
        "explanation": "Single-molecule sequencing, like Oxford Nanopore, often has higher error rates compared to short-read sequencing."
    },
    {
        "id": 131,
        "question": "What is the primary purpose of the STRING database?",
        "options": [
            "To store genome sequences",
            "To predict protein-protein interactions",
            "To map metabolic pathways",
            "To store gene expression data"
        ],
        "answer": "To predict protein-protein interactions",
        "difficulty": "medium",
        "topic": "Proteomics",
        "explanation": "STRING predicts protein-protein interactions based on experimental and computational evidence."
    },
    {
        "id": 132,
        "question": "Which tool is used for analyzing differential methylation in epigenomics?",
        "options": [
            "methylKit",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "methylKit",
        "difficulty": "medium",
        "topic": "Epigenomics",
        "explanation": "methylKit is an R package for analyzing differential DNA methylation from high-throughput sequencing data."
    },
    {
        "id": 133,
        "question": "What is the primary purpose of the BEDTools software?",
        "options": [
            "To align sequences",
            "To manipulate genomic intervals",
            "To predict protein structures",
            "To analyze gene expression"
        ],
        "answer": "To manipulate genomic intervals",
        "difficulty": "medium",
        "topic": "Genomics",
        "explanation": "BEDTools is a suite of tools for manipulating and analyzing genomic intervals, such as those stored in BED or GFF files."
    },
    {
        "id": 134,
        "question": "Which of the following is a common application of network analysis in bioinformatics?",
        "options": [
            "Sequence alignment",
            "Studying gene regulatory networks",
            "Predicting protein structures",
            "Assembling genomes"
        ],
        "answer": "Studying gene regulatory networks",
        "difficulty": "medium",
        "topic": "Systems Biology",
        "explanation": "Network analysis is used to study gene regulatory networks, modeling interactions between genes and transcription factors."
    },
    {
        "id": 135,
        "question": "What is the primary purpose of the Ensembl VEP tool?",
        "options": [
            "To align sequences",
            "To predict the functional impact of variants",
            "To assemble genomes",
            "To predict protein structures"
        ],
        "answer": "To predict the functional impact of variants",
        "difficulty": "medium",
        "topic": "Genomics",
        "explanation": "Ensembl VEP (Variant Effect Predictor) predicts the functional consequences of genetic variants, such as SNPs and indels."
    },
    {
        "id": 136,
        "question": "Which tool is used for predicting transcription factor binding sites?",
        "options": [
            "MEME",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "MEME",
        "difficulty": "medium",
        "topic": "Sequence Analysis",
        "explanation": "MEME (Multiple Em for Motif Elicitation) discovers motifs in DNA or protein sequences, often used for transcription factor binding sites."
    },
    {
        "id": 137,
        "question": "What is the primary purpose of the GOseq tool?",
        "options": [
            "To align sequences",
            "To perform gene ontology enrichment analysis",
            "To predict protein structures",
            "To assemble genomes"
        ],
        "answer": "To perform gene ontology enrichment analysis",
        "difficulty": "medium",
        "topic": "Functional Analysis",
        "explanation": "GOseq performs gene ontology enrichment analysis, particularly for RNA-Seq data, to identify overrepresented functional categories."
    },
    {
        "id": 138,
        "question": "Which of the following is a common method for detecting copy number variations (CNVs)?",
        "options": [
            "CNVkit",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "CNVkit",
        "difficulty": "medium",
        "topic": "Genomics",
        "explanation": "CNVkit is a tool used to detect copy number variations from high-throughput sequencing data."
    },
    {
        "id": 139,
        "question": "What is the primary purpose of the IGV tool?",
        "options": [
            "To align sequences",
            "To visualize genomic data",
            "To predict protein structures",
            "To assemble genomes"
        ],
        "answer": "To visualize genomic data",
        "difficulty": "medium",
        "topic": "Genomics",
        "explanation": "IGV (Integrative Genomics Viewer) is a tool for visualizing genomic data, including alignments, variants, and annotations."
    },
    {
        "id": 140,
        "question": "Which of the following is a common application of single-cell RNA sequencing?",
        "options": [
            "Sequence alignment",
            "Identifying cell-type-specific expression",
            "Predicting protein structures",
            "Assembling genomes"
        ],
        "answer": "Identifying cell-type-specific expression",
        "difficulty": "medium",
        "topic": "Transcriptomics",
        "explanation": "Single-cell RNA sequencing identifies gene expression profiles at the single-cell level, revealing cell-type-specific patterns."
    },
    {
        "id": 141,
        "question": "What is the primary purpose of the Biopython library?",
        "options": [
            "To perform sequence analysis and bioinformatics tasks",
            "To predict protein structures",
            "To assemble genomes",
            "To map metabolic pathways"
        ],
        "answer": "To perform sequence analysis and bioinformatics tasks",
        "difficulty": "medium",
        "topic": "Computational Biology",
        "explanation": "Biopython is a Python library for bioinformatics tasks, including sequence analysis, file parsing, and database access."
    },
    {
        "id": 142,
        "question": "Which tool is used for metagenomic sequence classification?",
        "options": [
            "Kraken",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Kraken",
        "difficulty": "medium",
        "topic": "Metagenomics",
        "explanation": "Kraken is a tool for taxonomic classification of metagenomic sequences, assigning reads to taxonomic groups based on k-mer matches."
    },
    {
        "id": 143,
        "question": "What is the primary purpose of the GFF file format?",
        "options": [
            "To store sequence alignments",
            "To store gene annotations",
            "To store protein structures",
            "To store variant calls"
        ],
        "answer": "To store gene annotations",
        "difficulty": "medium",
        "topic": "Data Formats",
        "explanation": "GFF (General Feature Format) files store gene and feature annotations, including coordinates and attributes, for genomic data."
    },
    {
        "id": 144,
        "question": "Which of the following is a common method for dimensionality reduction in transcriptomics data?",
        "options": [
            "t-SNE",
            "BLAST",
            "Smith-Waterman",
            "Needleman-Wunsch"
        ],
        "answer": "t-SNE",
        "difficulty": "medium",
        "topic": "Transcriptomics",
        "explanation": "t-SNE (t-distributed Stochastic Neighbor Embedding) is used for dimensionality reduction in transcriptomics to visualize high-dimensional data."
    },
    {
        "id": 145,
        "question": "What is the primary purpose of the DAVID tool in bioinformatics?",
        "options": [
            "To align sequences",
            "To perform functional annotation clustering",
            "To predict protein structures",
            "To assemble genomes"
        ],
        "answer": "To perform functional annotation clustering",
        "difficulty": "medium",
        "topic": "Functional Analysis",
        "explanation": "DAVID (Database for Annotation, Visualization, and Integrated Discovery) clusters and analyzes functional annotations of genes."
    },
    {
        "id": 146,
        "question": "Which of the following is a key limitation of de novo genome assembly?",
        "options": [
            "High sequence similarity",
            "Presence of repetitive regions",
            "Low mutation rates",
            "Excessive reference genomes"
        ],
        "answer": "Presence of repetitive regions",
        "difficulty": "medium",
        "topic": "Genomics",
        "explanation": "Repetitive regions in genomes complicate de novo assembly, as they can lead to ambiguous or fragmented assemblies."
    },
    {
        "id": 147,
        "question": "What is the primary purpose of the Bioconductor project?",
        "options": [
            "To provide tools for sequence alignment",
            "To provide R packages for bioinformatics analysis",
            "To store protein structures",
            "To map metabolic pathways"
        ],
        "answer": "To provide R packages for bioinformatics analysis",
        "difficulty": "medium",
        "topic": "Computational Biology",
        "explanation": "Bioconductor provides R packages for analyzing and visualizing high-throughput genomic data, widely used in bioinformatics."
    },
    {
        "id": 148,
        "question": "Which tool is used for predicting microRNA targets?",
        "options": [
            "TargetScan",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "TargetScan",
        "difficulty": "medium",
        "topic": "Transcriptomics",
        "explanation": "TargetScan predicts microRNA target sites in mRNA sequences based on sequence complementarity and conservation."
    },
    {
        "id": 149,
        "question": "What is the primary purpose of the Prokka tool?",
        "options": [
            "To align sequences",
            "To annotate bacterial genomes",
            "To predict protein structures",
            "To analyze gene expression"
        ],
        "answer": "To annotate bacterial genomes",
        "difficulty": "medium",
        "topic": "Genomics",
        "explanation": "Prokka is a tool for rapid annotation of bacterial and archaeal genomes, identifying genes and functional elements."
    },
    {
        "id": 150,
        "question": "Which of the following is a common application of cheminformatics in bioinformatics?",
        "options": [
            "Sequence alignment",
            "Molecular docking simulations",
            "Gene expression analysis",
            "Phylogenetic tree construction"
        ],
        "answer": "Molecular docking simulations",
        "difficulty": "medium",
        "topic": "Cheminformatics",
        "explanation": "Cheminformatics uses molecular docking simulations to predict how small molecules bind to proteins, aiding drug discovery."
    },
    {
        "id": 151,
        "question": "What is the primary purpose of the STAR aligner?",
        "options": [
            "To predict protein structures",
            "To align RNA-Seq reads",
            "To assemble genomes",
            "To analyze gene expression"
        ],
        "answer": "To align RNA-Seq reads",
        "difficulty": "medium",
        "topic": "Transcriptomics",
        "explanation": "STAR (Spliced Transcripts Alignment to a Reference) is a fast aligner for RNA-Seq reads, particularly for detecting splice junctions."
    },
    {
        "id": 152,
        "question": "Which of the following is a common method for protein function prediction?",
        "options": [
            "BLAST",
            "InterProScan",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "InterProScan",
        "difficulty": "medium",
        "topic": "Proteomics",
        "explanation": "InterProScan predicts protein functions by annotating sequences with domain and functional information from multiple databases."
    },
    {
        "id": 153,
        "question": "What is the primary purpose of the VCFtools software?",
        "options": [
            "To align sequences",
            "To manipulate variant call format files",
            "To predict protein structures",
            "To analyze gene expression"
        ],
        "answer": "To manipulate variant call format files",
        "difficulty": "medium",
        "topic": "Genomics",
        "explanation": "VCFtools is used to manipulate and analyze VCF files containing genetic variant data."
    },
    {
        "id": 154,
        "question": "Which of the following is a key challenge in metagenomic analysis?",
        "options": [
            "Low sequence similarity",
            "Incomplete reference databases",
            "Short read lengths",
            "Lack of sequencing depth"
        ],
        "answer": "Incomplete reference databases",
        "difficulty": "medium",
        "topic": "Metagenomics",
        "explanation": "Metagenomic analysis is challenging due to incomplete reference databases, as many environmental microbes are uncharacterized."
    },
    {
        "id": 155,
        "question": "What is the primary purpose of the Augustus tool?",
        "options": [
            "To align sequences",
            "To predict gene structures",
            "To predict protein structures",
            "To analyze gene expression"
        ],
        "answer": "To predict gene structures",
        "difficulty": "medium",
        "topic": "Genomics",
        "explanation": "Augustus is a tool for predicting gene structures in eukaryotic genomes, using Hidden Markov Models."
    },
    {
        "id": 156,
        "question": "Which of the following is a common application of ChIP-Seq?",
        "options": [
            "Sequence alignment",
            "Mapping histone modifications",
            "Predicting protein structures",
            "Assembling genomes"
        ],
        "answer": "Mapping histone modifications",
        "difficulty": "medium",
        "topic": "Epigenomics",
        "explanation": "ChIP-Seq maps histone modifications and transcription factor binding sites to study epigenetic regulation."
    },
    {
        "id": 157,
        "question": "What is the primary purpose of the Trimmomatic tool?",
        "options": [
            "To align sequences",
            "To trim and filter sequencing reads",
            "To predict protein structures",
            "To analyze gene expression"
        ],
        "answer": "To trim and filter sequencing reads",
        "difficulty": "medium",
        "topic": "Next-Generation Sequencing",
        "explanation": "Trimmomatic trims and filters low-quality reads and adapters from sequencing data to improve downstream analysis."
    },
    {
        "id": 158,
        "question": "Which of the following is a common method for phylogenetic distance calculation?",
        "options": [
            "Jukes-Cantor model",
            "Smith-Waterman algorithm",
            "BLAST",
            "Bowtie"
        ],
        "answer": "Jukes-Cantor model",
        "difficulty": "medium",
        "topic": "Phylogenetics",
        "explanation": "The Jukes-Cantor model is used to estimate evolutionary distances between sequences for phylogenetic analysis."
    },
    {
        "id": 159,
        "question": "What is the primary purpose of the Panther database?",
        "options": [
            "To store genome sequences",
            "To classify proteins by function and family",
            "To map metabolic pathways",
            "To store gene expression data"
        ],
        "answer": "To classify proteins by function and family",
        "difficulty": "medium",
        "topic": "Databases",
        "explanation": "Panther classifies proteins by function, family, and pathway, aiding in functional annotation."
    },
    {
        "id": 160,
        "question": "Which tool is used for de novo genome assembly?",
        "options": [
            "Velvet",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Velvet",
        "difficulty": "medium",
        "topic": "Genomics",
        "explanation": "Velvet is a tool for de novo genome assembly, using de Bruijn graphs to assemble short sequencing reads."
    },
    {
        "id": 161,
        "question": "What is the primary purpose of the SAM format?",
        "options": [
            "To store sequence alignments",
            "To store protein structures",
            "To store gene expression data",
            "To store variant calls"
        ],
        "answer": "To store sequence alignments",
        "difficulty": "medium",
        "topic": "Data Formats",
        "explanation": "SAM (Sequence Alignment/Map) format stores sequence alignments, including read mappings and associated metadata."
    },
    {
        "id": 162,
        "question": "Which of the following is a common application of systems biology?",
        "options": [
            "Sequence alignment",
            "Modeling metabolic networks",
            "Predicting protein structures",
            "Assembling genomes"
        ],
        "answer": "Modeling metabolic networks",
        "difficulty": "medium",
        "topic": "Systems Biology",
        "explanation": "Systems biology models metabolic and regulatory networks to understand complex biological systems."
    },
    {
        "id": 163,
        "question": "What is the primary purpose of the FastTree tool?",
        "options": [
            "To align sequences",
            "To construct phylogenetic trees",
            "To predict protein structures",
            "To analyze gene expression"
        ],
        "answer": "To construct phylogenetic trees",
        "difficulty": "medium",
        "topic": "Phylogenetics",
        "explanation": "FastTree is a tool for constructing phylogenetic trees from large sequence datasets, using approximate maximum likelihood methods."
    },
    {
        "id": 164,
        "question": "Which of the following is a key challenge in proteomics data analysis?",
        "options": [
            "Low sequence coverage",
            "High peptide complexity",
            "Short read lengths",
            "Lack of reference genomes"
        ],
        "answer": "High peptide complexity",
        "difficulty": "medium",
        "topic": "Proteomics",
        "explanation": "Proteomics data analysis is challenging due to the high complexity of peptide mixtures, requiring advanced mass spectrometry and computational tools."
    },
    {
        "id": 165,
        "question": "What is the primary purpose of the UCSC Genome Browser?",
        "options": [
            "To align protein sequences",
            "To visualize genomic data",
            "To predict protein structures",
            "To store sequence reads"
        ],
        "answer": "To visualize genomic data",
        "difficulty": "easy",
        "topic": "Genomics",
        "explanation": "The UCSC Genome Browser visualizes genomic data, including gene annotations, tracks, and variations."
    },
    {
        "id": 166,
        "question": "Which tool is used for analyzing RNA-Seq data for differential expression?",
        "options": [
            "DESeq2",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "DESeq2",
        "difficulty": "medium",
        "topic": "Transcriptomics",
        "explanation": "DESeq2 is a tool for differential gene expression analysis in RNA-Seq data, using negative binomial distribution."
    },
    {
        "id": 167,
        "question": "What is the primary purpose of the eggNOG database?",
        "options": [
            "To store genome sequences",
            "To provide orthologous gene annotations",
            "To map metabolic pathways",
            "To store gene expression data"
        ],
        "answer": "To provide orthologous gene annotations",
        "difficulty": "medium",
        "topic": "Databases",
        "explanation": "eggNOG provides annotations of orthologous genes and functional categories across species."
    },
    {
        "id": 168,
        "question": "Which of the following is a common method for protein structure validation?",
        "options": [
            "Ramachandran plot",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Ramachandran plot",
        "difficulty": "medium",
        "topic": "Structural Bioinformatics",
        "explanation": "Ramachandran plots validate protein structures by analyzing the dihedral angles of amino acid residues."
    },
    {
        "id": 169,
        "question": "What is the primary purpose of the BWA tool?",
        "options": [
            "To predict protein structures",
            "To align short sequencing reads",
            "To analyze gene expression",
            "To assemble genomes"
        ],
        "answer": "To align short sequencing reads",
        "difficulty": "medium",
        "topic": "Next-Generation Sequencing",
        "explanation": "BWA (Burrows-Wheeler Aligner) is a tool for aligning short sequencing reads to a reference genome."
    },
    {
        "id": 170,
        "question": "Which of the following is a common application of bioinformatics in drug discovery?",
        "options": [
            "Sequence alignment",
            "Identifying drug targets",
            "Predicting gene expression",
            "Assembling genomes"
        ],
        "answer": "Identifying drug targets",
        "difficulty": "medium",
        "topic": "Cheminformatics",
        "explanation": "Bioinformatics identifies drug targets by analyzing genomic and proteomic data to find disease-related molecules."
    },
    {
        "id": 171,
        "question": "What is the primary purpose of the OrthoDB database?",
        "options": [
            "To store genome sequences",
            "To provide orthologous gene annotations",
            "To map metabolic pathways",
            "To store gene expression data"
        ],
        "answer": "To provide orthologous gene annotations",
        "difficulty": "medium",
        "topic": "Databases",
        "explanation": "OrthoDB provides annotations of orthologous genes across a wide range of species."
    },
    {
        "id": 172,
        "question": "Which tool is used for predicting protein secondary structure?",
        "options": [
            "PSIPRED",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "PSIPRED",
        "difficulty": "medium",
        "topic": "Structural Bioinformatics",
        "explanation": "PSIPRED uses neural networks and position-specific scoring matrices to predict protein secondary structures."
    },
    {
        "id": 173,
        "question": "What is the primary purpose of the BED format?",
        "options": [
            "To store sequence alignments",
            "To store genomic intervals",
            "To store protein structures",
            "To store gene expression data"
        ],
        "answer": "To store genomic intervals",
        "difficulty": "medium",
        "topic": "Data Formats",
        "explanation": "BED (Browser Extensible Data) format stores genomic intervals, such as gene or feature locations."
    },
    {
        "id": 174,
        "question": "Which of the following is a common method for clustering transcriptomics data?",
        "options": [
            "Hierarchical clustering",
            "Smith-Waterman algorithm",
            "BLAST",
            "Bowtie"
        ],
        "answer": "Hierarchical clustering",
        "difficulty": "medium",
        "topic": "Transcriptomics",
        "explanation": "Hierarchical clustering groups genes or samples with similar expression patterns in transcriptomics data."
    },
    {
        "id": 175,
        "question": "What is the primary purpose of the RAST tool?",
        "options": [
            "To align sequences",
            "To annotate microbial genomes",
            "To predict protein structures",
            "To analyze gene expression"
        ],
        "answer": "To annotate microbial genomes",
        "difficulty": "medium",
        "topic": "Genomics",
        "explanation": "RAST (Rapid Annotation using Subsystem Technology) annotates microbial genomes with functional information."
    },
    {
        "id": 176,
        "question": "Which of the following is a common application of Hi-C sequencing?",
        "options": [
            "Sequence alignment",
            "Studying 3D genome organization",
            "Predicting protein structures",
            "Assembling genomes"
        ],
        "answer": "Studying 3D genome organization",
        "difficulty": "medium",
        "topic": "Genomics",
        "explanation": "Hi-C sequencing maps chromatin interactions to study the 3D organization of the genome."
    },
    {
        "id": 177,
        "question": "What is the primary purpose of the Canu assembler?",
        "options": [
            "To align sequences",
            "To assemble long-read sequencing data",
            "To predict protein structures",
            "To analyze gene expression"
        ],
        "answer": "To assemble long-read sequencing data",
        "difficulty": "medium",
        "topic": "Genomics",
        "explanation": "Canu is a tool for assembling long-read sequencing data, such as from PacBio or Nanopore."
    },
    {
        "id": 178,
        "question": "Which of the following is a common method for protein-protein docking?",
        "options": [
            "HADDOCK",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "HADDOCK",
        "difficulty": "medium",
        "topic": "Structural Bioinformatics",
        "explanation": "HADDOCK is a tool for predicting protein-protein docking, modeling the interactions between protein complexes."
    },
    {
        "id": 179,
        "question": "What is the primary purpose of the GEO database?",
        "options": [
            "To store genome sequences",
            "To store gene expression data",
            "To map metabolic pathways",
            "To store protein structures"
        ],
        "answer": "To store gene expression data",
        "difficulty": "medium",
        "topic": "Databases",
        "explanation": "GEO (Gene Expression Omnibus) stores high-throughput gene expression and functional genomics data."
    },
    {
        "id": 180,
        "question": "Which tool is used for predicting gene fusions in RNA-Seq data?",
        "options": [
            "STAR-Fusion",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "STAR-Fusion",
        "difficulty": "medium",
        "topic": "Transcriptomics",
        "explanation": "STAR-Fusion detects gene fusions in RNA-Seq data by analyzing chimeric alignments."
    },
    {
        "id": 181,
        "question": "What is the primary purpose of the BUSCO tool?",
        "options": [
            "To align sequences",
            "To assess genome assembly completeness",
            "To predict protein structures",
            "To analyze gene expression"
        ],
        "answer": "To assess genome assembly completeness",
        "difficulty": "medium",
        "topic": "Genomics",
        "explanation": "BUSCO (Benchmarking Universal Single-Copy Orthologs) assesses the completeness of genome assemblies by checking for conserved genes."
    },
    {
        "id": 182,
        "question": "Which of the following is a common application of metagenomics?",
        "options": [
            "Sequence alignment",
            "Studying microbial diversity",
            "Predicting protein structures",
            "Assembling genomes"
        ],
        "answer": "Studying microbial diversity",
        "difficulty": "medium",
        "topic": "Metagenomics",
        "explanation": "Metagenomics studies microbial diversity in environmental samples by sequencing DNA from uncultured microbes."
    },
    {
        "id": 183,
        "question": "What is the primary purpose of the AlphaFold tool?",
        "options": [
            "To align sequences",
            "To predict protein structures",
            "To analyze gene expression",
            "To assemble genomes"
        ],
        "answer": "To predict protein structures",
        "difficulty": "medium",
        "topic": "Structural Bioinformatics",
        "explanation": "AlphaFold, developed by DeepMind, uses deep learning to predict protein 3D structures with high accuracy."
    },
    {
        "id": 184,
        "question": "Which of the following is a common method for detecting differential splicing in RNA-Seq?",
        "options": [
            "rMATS",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "rMATS",
        "difficulty": "medium",
        "topic": "Transcriptomics",
        "explanation": "rMATS (replicate Multivariate Analysis of Transcript Splicing) detects differential splicing events in RNA-Seq data."
    },
    {
        "id": 185,
        "question": "What is the primary purpose of the SRA database?",
        "options": [
            "To store genome sequences",
            "To store raw sequencing data",
            "To map metabolic pathways",
            "To store protein structures"
        ],
        "answer": "To store raw sequencing data",
        "difficulty": "medium",
        "topic": "Databases",
        "explanation": "SRA (Sequence Read Archive) stores raw sequencing data from high-throughput sequencing experiments."
    },
    {
        "id": 186,
        "question": "Which tool is used for predicting protein-ligand interactions?",
        "options": [
            "AutoDock",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "AutoDock",
        "difficulty": "medium",
        "topic": "Cheminformatics",
        "explanation": "AutoDock predicts protein-ligand interactions through molecular docking simulations."
    },
    {
        "id": 187,
        "question": "What is the primary purpose of the Cufflinks tool?",
        "options": [
            "To align sequences",
            "To assemble and quantify transcripts",
            "To predict protein structures",
            "To analyze gene expression"
        ],
        "answer": "To assemble and quantify transcripts",
        "difficulty": "medium",
        "topic": "Transcriptomics",
        "explanation": "Cufflinks assembles transcripts and quantifies gene expression from RNA-Seq data."
    },
    {
        "id": 188,
        "question": "Which of the following is a common method for phylogenetic tree visualization?",
        "options": [
            "FigTree",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "FigTree",
        "difficulty": "medium",
        "topic": "Phylogenetics",
        "explanation": "FigTree is a tool for visualizing and annotating phylogenetic trees."
    },
    {
        "id": 189,
        "question": "What is the primary purpose of the Ensembl database?",
        "options": [
            "To store protein structures",
            "To provide genome annotations",
            "To map metabolic pathways",
            "To store sequence reads"
        ],
        "answer": "To provide genome annotations",
        "difficulty": "medium",
        "topic": "Databases",
        "explanation": "Ensembl provides comprehensive genome annotations, including gene locations and comparative genomics data."
    },
    {
        "id": 190,
        "question": "Which of the following is a common application of bioinformatics in agriculture?",
        "options": [
            "Sequence alignment",
            "Identifying genes for crop improvement",
            "Predicting protein structures",
            "Assembling genomes"
        ],
        "answer": "Identifying genes for crop improvement",
        "difficulty": "medium",
        "topic": "Genomics",
        "explanation": "Bioinformatics identifies genes associated with desirable traits in crops, aiding in genetic engineering and breeding."
    },
    {
        "id": 191,
        "question": "What is the primary purpose of the MAKER tool?",
        "options": [
            "To align sequences",
            "To annotate eukaryotic genomes",
            "To predict protein structures",
            "To analyze gene expression"
        ],
        "answer": "To annotate eukaryotic genomes",
        "difficulty": "medium",
        "topic": "Genomics",
        "explanation": "MAKER is a tool for annotating eukaryotic genomes, integrating evidence from multiple sources."
    },
    {
        "id": 192,
        "question": "Which tool is used for analyzing protein-protein interaction networks?",
        "options": [
            "Cytoscape",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Cytoscape",
        "difficulty": "medium",
        "topic": "Proteomics",
        "explanation": "Cytoscape is a tool for visualizing and analyzing protein-protein interaction networks and other biological networks."
    },
    {
        "id": 193,
        "question": "What is the primary purpose of the BAM format?",
        "options": [
            "To store sequence alignments",
            "To store protein structures",
            "To store gene expression data",
            "To store variant calls"
        ],
        "answer": "To store sequence alignments",
        "difficulty": "medium",
        "topic": "Data Formats",
        "explanation": "BAM (Binary Alignment Map) is a binary format for storing sequence alignments, used in NGS data analysis."
    },
    {
        "id": 194,
        "question": "Which of the following is a common method for detecting gene duplications?",
        "options": [
            "OrthoFinder",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "OrthoFinder",
        "difficulty": "medium",
        "topic": "Genomics",
        "explanation": "OrthoFinder identifies orthologous and paralogous genes, useful for detecting gene duplications across species."
    },
    {
        "id": 195,
        "question": "What is the primary purpose of the FastQC tool?",
        "options": [
            "To align sequences",
            "To assess the quality of sequencing data",
            "To predict protein structures",
            "To assemble genomes"
        ],
        "answer": "To assess the quality of sequencing data",
        "difficulty": "medium",
        "topic": "Next-Generation Sequencing",
        "explanation": "FastQC assesses the quality of sequencing data, providing metrics like base quality and sequence content."
    },
    {
        "id": 196,
        "question": "Which of the following is a common application of single-molecule real-time (SMRT) sequencing?",
        "options": [
            "Sequence alignment",
            "Resolving complex genomic regions",
            "Predicting gene expression",
            "Analyzing protein interactions"
        ],
        "answer": "Resolving complex genomic regions",
        "difficulty": "medium",
        "topic": "Next-Generation Sequencing",
        "explanation": "SMRT sequencing, used by PacBio, resolves complex genomic regions due to its long read lengths."
    },
    {
        "id": 197,
        "question": "What is the primary purpose of the InterPro database?",
        "options": [
            "To store genome sequences",
            "To integrate protein domain and function data",
            "To map metabolic pathways",
            "To store gene expression data"
        ],
        "answer": "To integrate protein domain and function data",
        "difficulty": "medium",
        "topic": "Databases",
        "explanation": "InterPro integrates data on protein domains, families, and functional sites from multiple databases."
    },
    {
        "id": 198,
        "question": "Which tool is used for de novo transcript assembly in RNA-Seq?",
        "options": [
            "Trinity",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Trinity",
        "difficulty": "medium",
        "topic": "Transcriptomics",
        "explanation": "Trinity is a tool for de novo assembly of transcriptomes from RNA-Seq data, particularly without a reference genome."
    },
    {
        "id": 199,
        "question": "What is the primary purpose of the Ensembl BioMart tool?",
        "options": [
            "To align sequences",
            "To query and retrieve genomic data",
            "To predict protein structures",
            "To assemble genomes"
        ],
        "answer": "To query and retrieve genomic data",
        "difficulty": "medium",
        "topic": "Databases",
        "explanation": "Ensembl BioMart is a tool for querying and retrieving genomic data, such as gene annotations and sequences."
    },
    {
        "id": 200,
        "question": "Which of the following is a common challenge in bioinformatics data analysis?",
        "options": [
            "Low sequence similarity",
            "Integration of heterogeneous data",
            "Short read lengths",
            "Lack of reference genomes"
        ],
        "answer": "Integration of heterogeneous data",
        "difficulty": "medium",
        "topic": "Computational Biology",
        "explanation": "Bioinformatics faces challenges in integrating heterogeneous data types, such as genomic, transcriptomic, and proteomic data."
    },
    {
        "id": 201,
        "question": "What is the primary goal of bioinformatics as an interdisciplinary field?",
        "options": [
            "To develop new sequencing technologies",
            "To integrate biology, computer science, and statistics for biological data analysis",
            "To synthesize new proteins",
            "To design new laboratory equipment"
        ],
        "answer": "To integrate biology, computer science, and statistics for biological data analysis",
        "difficulty": "easy",
        "topic": "Introduction to Bioinformatics",
        "explanation": "Bioinformatics combines biology, computer science, and statistics to analyze and interpret large-scale biological data, such as genomic sequences."
    },
    {
        "id": 202,
        "question": "Which of the following is a key historical milestone in bioinformatics?",
        "options": [
            "Development of the first microscope",
            "Publication of the human genome sequence in 2001",
            "Invention of PCR in 1983",
            "Discovery of DNA structure in 1953"
        ],
        "answer": "Publication of the human genome sequence in 2001",
        "difficulty": "medium",
        "topic": "Introduction to Bioinformatics",
        "explanation": "The publication of the human genome sequence in 2001 marked a significant milestone, driving the development of bioinformatics tools for large-scale genomic analysis."
    },
    {
        "id": 203,
        "question": "Which database is considered a primary nucleotide database?",
        "options": [
            "UniProt",
            "GenBank",
            "Pfam",
            "KEGG"
        ],
        "answer": "GenBank",
        "difficulty": "easy",
        "topic": "Biological Databases",
        "explanation": "GenBank is a primary nucleotide database, storing raw DNA and RNA sequence data submitted by researchers."
    },
    {
        "id": 204,
        "question": "What distinguishes a secondary database from a primary database?",
        "options": [
            "Secondary databases store raw sequence data",
            "Secondary databases contain curated or derived data",
            "Secondary databases are only for protein data",
            "Secondary databases are smaller in size"
        ],
        "answer": "Secondary databases contain curated or derived data",
        "difficulty": "medium",
        "topic": "Biological Databases",
        "explanation": "Secondary databases, like Pfam or Swiss-Prot, contain curated or derived data, such as annotations or alignments, unlike primary databases with raw sequences."
    },
    {
        "id": 205,
        "question": "What is the primary difference between global and local sequence alignment?",
        "options": [
            "Global alignment aligns only conserved regions",
            "Local alignment aligns the entire sequence",
            "Global alignment aligns the entire sequence, while local alignment focuses on regions of high similarity",
            "Local alignment uses dynamic programming"
        ],
        "answer": "Global alignment aligns the entire sequence, while local alignment focuses on regions of high similarity",
        "difficulty": "medium",
        "topic": "Sequence Analysis",
        "explanation": "Global alignment (e.g., Needleman-Wunsch) aligns entire sequences, while local alignment (e.g., Smith-Waterman) identifies the most similar subsequences."
    },
    {
        "id": 206,
        "question": "Which scoring matrix is commonly used for protein sequence alignment?",
        "options": [
            "PAM",
            "FASTA",
            "GFF",
            "VCF"
        ],
        "answer": "PAM",
        "difficulty": "medium",
        "topic": "Sequence Analysis",
        "explanation": "PAM (Point Accepted Mutation) matrices are used to score protein sequence alignments based on evolutionary divergence."
    },
    {
        "id": 207,
        "question": "Which tool is designed for fast multiple sequence alignment of large datasets?",
        "options": [
            "ClustalW",
            "MUSCLE",
            "MAFFT",
            "BLAST"
        ],
        "answer": "MAFFT",
        "difficulty": "medium",
        "topic": "Sequence Analysis",
        "explanation": "MAFFT is a fast and accurate tool for multiple sequence alignment, particularly suited for large datasets."
    },
    {
        "id": 208,
        "question": "What is the main advantage of whole-genome sequencing (WGS) over whole-exome sequencing (WES)?",
        "options": [
            "WGS is less expensive",
            "WGS captures both coding and non-coding regions",
            "WES provides higher sequencing depth",
            "WES includes RNA data"
        ],
        "answer": "WGS captures both coding and non-coding regions",
        "difficulty": "medium",
        "topic": "Genomics and Transcriptomics",
        "explanation": "WGS sequences the entire genome, including non-coding regions, while WES focuses only on coding regions (exons)."
    },
    {
        "id": 209,
        "question": "Which method is used for ab initio gene prediction?",
        "options": [
            "BLAST",
            "Augustus",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Augustus",
        "difficulty": "medium",
        "topic": "Genomics and Transcriptomics",
        "explanation": "Augustus uses ab initio methods, relying on statistical models to predict gene structures without requiring homology data."
    },
    {
        "id": 210,
        "question": "What is the primary purpose of RNA-Seq in transcriptomics?",
        "options": [
            "To sequence protein structures",
            "To quantify gene expression levels",
            "To assemble genomes",
            "To identify protein interactions"
        ],
        "answer": "To quantify gene expression levels",
        "difficulty": "easy",
        "topic": "Genomics and Transcriptomics",
        "explanation": "RNA-Seq quantifies gene expression by sequencing RNA transcripts, providing insights into gene activity."
    },
    {
        "id": 211,
        "question": "Which technique is commonly used in proteomics to identify proteins?",
        "options": [
            "Mass spectrometry",
            "RNA-Seq",
            "ChIP-Seq",
            "Bisulfite sequencing"
        ],
        "answer": "Mass spectrometry",
        "difficulty": "easy",
        "topic": "Proteomics",
        "explanation": "Mass spectrometry is widely used in proteomics to identify and quantify proteins based on their mass-to-charge ratios."
    },
    {
        "id": 212,
        "question": "What is the primary purpose of protein-protein interaction networks in proteomics?",
        "options": [
            "To predict protein structures",
            "To map functional relationships between proteins",
            "To sequence genomes",
            "To quantify gene expression"
        ],
        "answer": "To map functional relationships between proteins",
        "difficulty": "medium",
        "topic": "Proteomics",
        "explanation": "Protein-protein interaction networks map functional relationships, revealing how proteins interact in biological processes."
    },
    {
        "id": 213,
        "question": "Which method is used for protein structure prediction based on known structures?",
        "options": [
            "Homology modeling",
            "Ab initio modeling",
            "Dynamic programming",
            "K-mer analysis"
        ],
        "answer": "Homology modeling",
        "difficulty": "medium",
        "topic": "Structural Bioinformatics",
        "explanation": "Homology modeling predicts protein structures by using known structures of related proteins as templates."
    },
    {
        "id": 214,
        "question": "What does a Ramachandran plot evaluate in structural bioinformatics?",
        "options": [
            "Sequence similarity",
            "Protein backbone dihedral angles",
            "Gene expression levels",
            "DNA methylation patterns"
        ],
        "answer": "Protein backbone dihedral angles",
        "difficulty": "medium",
        "topic": "Structural Bioinformatics",
        "explanation": "Ramachandran plots evaluate the phi and psi dihedral angles of protein backbones to assess structural validity."
    },
    {
        "id": 215,
        "question": "Which tool is commonly used for molecular visualization in structural bioinformatics?",
        "options": [
            "PyMOL",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "PyMOL",
        "difficulty": "easy",
        "topic": "Structural Bioinformatics",
        "explanation": "PyMOL is a widely used tool for visualizing and analyzing molecular structures, particularly proteins."
    },
    {
        "id": 216,
        "question": "What is the difference between orthologs and paralogs in phylogenetics?",
        "options": [
            "Orthologs are duplicated genes; paralogs are from speciation",
            "Orthologs are from speciation; paralogs are duplicated genes",
            "Orthologs are identical genes; paralogs are unrelated",
            "Orthologs are protein domains; paralogs are gene families"
        ],
        "answer": "Orthologs are from speciation; paralogs are duplicated genes",
        "difficulty": "medium",
        "topic": "Phylogenetics",
        "explanation": "Orthologs arise from speciation events, while paralogs result from gene duplication within a species."
    },
    {
        "id": 217,
        "question": "Which method is used for constructing phylogenetic trees based on distance matrices?",
        "options": [
            "Maximum Likelihood",
            "Neighbor-Joining",
            "Bayesian Inference",
            "Dynamic Programming"
        ],
        "answer": "Neighbor-Joining",
        "difficulty": "medium",
        "topic": "Phylogenetics",
        "explanation": "Neighbor-Joining is a distance-based method that constructs phylogenetic trees from a distance matrix."
    },
    {
        "id": 218,
        "question": "What is the molecular clock hypothesis in molecular evolution?",
        "options": [
            "Mutations occur at a constant rate over time",
            "Genes evolve at random intervals",
            "Proteins fold at a fixed rate",
            "Genomes double in size periodically"
        ],
        "answer": "Mutations occur at a constant rate over time",
        "difficulty": "medium",
        "topic": "Molecular Evolution",
        "explanation": "The molecular clock hypothesis posits that mutations accumulate at a relatively constant rate, useful for estimating evolutionary divergence."
    },
    {
        "id": 219,
        "question": "Which substitution model accounts for different rates of transitions and transversions?",
        "options": [
            "Jukes-Cantor",
            "Kimura 2-parameter",
            "PAM",
            "BLOSUM"
        ],
        "answer": "Kimura 2-parameter",
        "difficulty": "medium",
        "topic": "Molecular Evolution",
        "explanation": "The Kimura 2-parameter model accounts for different rates of transitions and transversions in sequence evolution."
    },
    {
        "id": 220,
        "question": "What is the primary purpose of Gene Ontology (GO) annotations in functional genomics?",
        "options": [
            "To sequence genomes",
            "To provide standardized gene function descriptions",
            "To predict protein structures",
            "To align sequences"
        ],
        "answer": "To provide standardized gene function descriptions",
        "difficulty": "easy",
        "topic": "Functional Genomics",
        "explanation": "GO annotations provide standardized vocabularies to describe gene functions, aiding in functional genomics analysis."
    },
    {
        "id": 221,
        "question": "Which database is used for pathway analysis in functional genomics?",
        "options": [
            "Reactome",
            "UniProt",
            "PDB",
            "GenBank"
        ],
        "answer": "Reactome",
        "difficulty": "medium",
        "topic": "Functional Genomics",
        "explanation": "Reactome is a database for pathway analysis, providing detailed information on biological pathways and processes."
    },
    {
        "id": 222,
        "question": "What is a key advantage of RNA-Seq over microarray for gene expression analysis?",
        "options": [
            "RNA-Seq is less sensitive",
            "RNA-Seq detects novel transcripts",
            "Microarray has higher throughput",
            "Microarray requires less data processing"
        ],
        "answer": "RNA-Seq detects novel transcripts",
        "difficulty": "medium",
        "topic": "Microarray and NGS Data Analysis",
        "explanation": "RNA-Seq can detect novel transcripts and provides higher resolution compared to microarrays, which rely on predefined probes."
    },
    {
        "id": 223,
        "question": "Which tool is commonly used for differential expression analysis in RNA-Seq?",
        "options": [
            "limma",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "limma",
        "difficulty": "medium",
        "topic": "Microarray and NGS Data Analysis",
        "explanation": "limma is an R package used for differential expression analysis in RNA-Seq and microarray data."
    },
    {
        "id": 224,
        "question": "What is the primary purpose of network biology in systems biology?",
        "options": [
            "To align sequences",
            "To model interactions in biological systems",
            "To predict protein structures",
            "To assemble genomes"
        ],
        "answer": "To model interactions in biological systems",
        "difficulty": "medium",
        "topic": "Systems Biology",
        "explanation": "Network biology models interactions, such as gene or protein networks, to understand complex biological systems."
    },
    {
        "id": 225,
        "question": "Which concept from graph theory is commonly used in biological network analysis?",
        "options": [
            "Dynamic programming",
            "Node degree",
            "K-mer analysis",
            "Scoring matrices"
        ],
        "answer": "Node degree",
        "difficulty": "medium",
        "topic": "Systems Biology",
        "explanation": "Node degree, the number of connections a node has, is a key metric in analyzing biological networks like protein interaction networks."
    },
    {
        "id": 226,
        "question": "What is the primary goal of metagenomics in environmental sequencing?",
        "options": [
            "To sequence individual genomes",
            "To study microbial communities without culturing",
            "To predict protein structures",
            "To quantify gene expression"
        ],
        "answer": "To study microbial communities without culturing",
        "difficulty": "easy",
        "topic": "Metagenomics",
        "explanation": "Metagenomics sequences DNA from environmental samples to study microbial communities without the need for culturing."
    },
    {
        "id": 227,
        "question": "Which marker is commonly used for 16S rRNA profiling in metagenomics?",
        "options": [
            "ITS region",
            "16S rRNA gene",
            "COI gene",
            "18S rRNA gene"
        ],
        "answer": "16S rRNA gene",
        "difficulty": "medium",
        "topic": "Metagenomics",
        "explanation": "The 16S rRNA gene is widely used for profiling bacterial and archaeal communities in metagenomics due to its conserved and variable regions."
    },
    {
        "id": 228,
        "question": "What is the primary purpose of bisulfite sequencing in epigenomics?",
        "options": [
            "To sequence proteins",
            "To detect DNA methylation",
            "To align sequences",
            "To predict gene expression"
        ],
        "answer": "To detect DNA methylation",
        "difficulty": "medium",
        "topic": "Epigenomics",
        "explanation": "Bisulfite sequencing detects DNA methylation by converting unmethylated cytosines to uracil, allowing methylation pattern analysis."
    },
    {
        "id": 229,
        "question": "Which technique is used to study histone modifications in epigenomics?",
        "options": [
            "ChIP-Seq",
            "RNA-Seq",
            "WGS",
            "Mass spectrometry"
        ],
        "answer": "ChIP-Seq",
        "difficulty": "medium",
        "topic": "Epigenomics",
        "explanation": "ChIP-Seq (Chromatin Immunoprecipitation Sequencing) maps histone modifications and transcription factor binding sites."
    },
    {
        "id": 230,
        "question": "Which machine learning algorithm is commonly used for classifying gene expression data?",
        "options": [
            "K-means clustering",
            "Support Vector Machine (SVM)",
            "Needleman-Wunsch",
            "Smith-Waterman"
        ],
        "answer": "Support Vector Machine (SVM)",
        "difficulty": "medium",
        "topic": "Machine Learning in Bioinformatics",
        "explanation": "SVMs are used for classifying gene expression data, such as distinguishing disease states, due to their ability to handle high-dimensional data."
    },
    {
        "id": 231,
        "question": "What is the primary purpose of feature selection in machine learning for bioinformatics?",
        "options": [
            "To increase data size",
            "To reduce dimensionality and improve model performance",
            "To align sequences",
            "To predict protein structures"
        ],
        "answer": "To reduce dimensionality and improve model performance",
        "difficulty": "medium",
        "topic": "Machine Learning in Bioinformatics",
        "explanation": "Feature selection reduces the number of variables in high-dimensional bioinformatics data, improving model accuracy and efficiency."
    },
    {
        "id": 232,
        "question": "What is the primary goal of pharmacogenomics in drug design?",
        "options": [
            "To sequence genomes",
            "To link genetic variants to drug response",
            "To predict protein structures",
            "To align sequences"
        ],
        "answer": "To link genetic variants to drug response",
        "difficulty": "medium",
        "topic": "Pharmacogenomics and Drug Design",
        "explanation": "Pharmacogenomics studies how genetic variants, such as SNPs, influence individual responses to drugs."
    },
    {
        "id": 233,
        "question": "Which method is used for virtual screening in drug design?",
        "options": [
            "Molecular docking",
            "Sequence alignment",
            "K-mer analysis",
            "Phylogenetic tree construction"
        ],
        "answer": "Molecular docking",
        "difficulty": "medium",
        "topic": "Pharmacogenomics and Drug Design",
        "explanation": "Molecular docking predicts how small molecules bind to target proteins, aiding in virtual screening for drug discovery."
    },
    {
        "id": 234,
        "question": "What is the primary purpose of genome-wide association studies (GWAS) in clinical bioinformatics?",
        "options": [
            "To sequence genomes",
            "To identify genetic variants associated with diseases",
            "To predict protein structures",
            "To quantify gene expression"
        ],
        "answer": "To identify genetic variants associated with diseases",
        "difficulty": "medium",
        "topic": "Clinical and Personalized Bioinformatics",
        "explanation": "GWAS identifies genetic variants, such as SNPs, associated with diseases or traits to inform personalized medicine."
    },
    {
        "id": 235,
        "question": "What is a key ethical concern in clinical bioinformatics?",
        "options": [
            "Data storage limitations",
            "Privacy of genetic data",
            "Sequence alignment accuracy",
            "Protein structure prediction"
        ],
        "answer": "Privacy of genetic data",
        "difficulty": "medium",
        "topic": "Clinical and Personalized Bioinformatics",
        "explanation": "Privacy of genetic data is a major ethical concern in clinical bioinformatics, addressed under ELSI (Ethical, Legal, and Social Implications)."
    },
    {
        "id": 236,
        "question": "What is the purpose of the False Discovery Rate (FDR) in biostatistics?",
        "options": [
            "To align sequences",
            "To control for false positives in multiple testing",
            "To predict protein structures",
            "To assemble genomes"
        ],
        "answer": "To control for false positives in multiple testing",
        "difficulty": "medium",
        "topic": "Biostatistics and Bioinformatics Algorithms",
        "explanation": "FDR controls the expected proportion of false positives in multiple hypothesis testing, common in bioinformatics analyses."
    },
    {
        "id": 237,
        "question": "Which algorithm is central to the Expectation-Maximization (EM) method in bioinformatics?",
        "options": [
            "Dynamic programming",
            "Iterative optimization",
            "K-mer matching",
            "Scoring matrices"
        ],
        "answer": "Iterative optimization",
        "difficulty": "hard",
        "topic": "Biostatistics and Bioinformatics Algorithms",
        "explanation": "The EM algorithm uses iterative optimization to estimate parameters in statistical models, such as in gene prediction."
    },
    {
        "id": 238,
        "question": "Which programming language is most commonly used for scripting in bioinformatics?",
        "options": [
            "Java",
            "Python",
            "C++",
            "Ruby"
        ],
        "answer": "Python",
        "difficulty": "easy",
        "topic": "Programming and Tools in Bioinformatics",
        "explanation": "Python is widely used in bioinformatics for scripting due to its simplicity and libraries like Biopython."
    },
    {
        "id": 239,
        "question": "What is the primary purpose of the Bioconductor project?",
        "options": [
            "To align sequences",
            "To provide R packages for bioinformatics analysis",
            "To predict protein structures",
            "To assemble genomes"
        ],
        "answer": "To provide R packages for bioinformatics analysis",
        "difficulty": "medium",
        "topic": "Programming and Tools in Bioinformatics",
        "explanation": "Bioconductor provides R packages for analyzing and visualizing high-throughput genomic data."
    },
    {
        "id": 240,
        "question": "Which workflow manager is commonly used in bioinformatics pipelines?",
        "options": [
            "Snakemake",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Snakemake",
        "difficulty": "medium",
        "topic": "Programming and Tools in Bioinformatics",
        "explanation": "Snakemake is a workflow manager for creating reproducible and scalable bioinformatics pipelines."
    },
    {
        "id": 241,
        "question": "What is the primary application of the SCOP database in structural bioinformatics?",
        "options": [
            "To store nucleotide sequences",
            "To classify protein structures",
            "To map metabolic pathways",
            "To quantify gene expression"
        ],
        "answer": "To classify protein structures",
        "difficulty": "medium",
        "topic": "Biological Databases",
        "explanation": "SCOP (Structural Classification of Proteins) classifies protein structures based on their evolutionary and structural relationships."
    },
    {
        "id": 242,
        "question": "Which file format is used to store genomic feature annotations?",
        "options": [
            "FASTA",
            "GFF",
            "VCF",
            "BAM"
        ],
        "answer": "GFF",
        "difficulty": "medium",
        "topic": "Biological Databases",
        "explanation": "GFF (General Feature Format) stores genomic feature annotations, such as gene and exon coordinates."
    },
    {
        "id": 243,
        "question": "What is the purpose of gap penalties in sequence alignment?",
        "options": [
            "To increase alignment speed",
            "To penalize insertions or deletions",
            "To predict protein structures",
            "To quantify gene expression"
        ],
        "answer": "To penalize insertions or deletions",
        "difficulty": "medium",
        "topic": "Sequence Analysis",
        "explanation": "Gap penalties are used in sequence alignment to penalize insertions or deletions, balancing alignment accuracy."
    },
    {
        "id": 244,
        "question": "Which tool is used for motif detection in multiple sequence alignments?",
        "options": [
            "MEME",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "MEME",
        "difficulty": "medium",
        "topic": "Sequence Analysis",
        "explanation": "MEME (Multiple Em for Motif Elicitation) detects conserved motifs in multiple sequence alignments."
    },
    {
        "id": 245,
        "question": "What is the primary advantage of Sanger sequencing over NGS?",
        "options": [
            "Higher throughput",
            "Longer read lengths and higher accuracy",
            "Lower cost",
            "Faster processing"
        ],
        "answer": "Longer read lengths and higher accuracy",
        "difficulty": "medium",
        "topic": "Genomics and Transcriptomics",
        "explanation": "Sanger sequencing provides longer read lengths and higher accuracy but is less suitable for high-throughput applications compared to NGS."
    },
    {
        "id": 246,
        "question": "Which tool is used for homology-based gene prediction?",
        "options": [
            "BLAST",
            "Augustus",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "BLAST",
        "difficulty": "medium",
        "topic": "Genomics and Transcriptomics",
        "explanation": "BLAST is used for homology-based gene prediction by identifying similar sequences in annotated databases."
    },
    {
        "id": 247,
        "question": "What is the primary purpose of protein quantification in proteomics?",
        "options": [
            "To sequence proteins",
            "To measure protein abundance",
            "To align sequences",
            "To predict gene expression"
        ],
        "answer": "To measure protein abundance",
        "difficulty": "easy",
        "topic": "Proteomics",
        "explanation": "Protein quantification in proteomics measures protein abundance, often using mass spectrometry data."
    },
    {
        "id": 248,
        "question": "Which tool is used for molecular docking in structural bioinformatics?",
        "options": [
            "AutoDock",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "AutoDock",
        "difficulty": "medium",
        "topic": "Structural Bioinformatics",
        "explanation": "AutoDock is a tool for molecular docking, predicting how small molecules bind to protein targets."
    },
    {
        "id": 249,
        "question": "What is the purpose of bootstrapping in phylogenetic tree evaluation?",
        "options": [
            "To align sequences",
            "To assess the reliability of tree branches",
            "To predict protein structures",
            "To quantify gene expression"
        ],
        "answer": "To assess the reliability of tree branches",
        "difficulty": "medium",
        "topic": "Phylogenetics",
        "explanation": "Bootstrapping assesses the reliability of phylogenetic tree branches by resampling the data multiple times."
    },
    {
        "id": 250,
        "question": "Which evolutionary concept describes constraints on sequence changes due to functional importance?",
        "options": [
            "Molecular clock",
            "Purifying selection",
            "Neutral drift",
            "Positive selection"
        ],
        "answer": "Purifying selection",
        "difficulty": "medium",
        "topic": "Molecular Evolution",
        "explanation": "Purifying selection constrains sequence changes to maintain the function of critical genes or proteins."
    },
    {
        "id": 251,
        "question": "Which tool is used for regulatory network analysis in functional genomics?",
        "options": [
            "Cytoscape",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Cytoscape",
        "difficulty": "medium",
        "topic": "Functional Genomics",
        "explanation": "Cytoscape visualizes and analyzes regulatory networks, such as gene or protein interaction networks."
    },
    {
        "id": 252,
        "question": "What is the primary purpose of normalization in microarray data analysis?",
        "options": [
            "To align sequences",
            "To remove technical biases",
            "To predict protein structures",
            "To assemble genomes"
        ],
        "answer": "To remove technical biases",
        "difficulty": "medium",
        "topic": "Microarray and NGS Data Analysis",
        "explanation": "Normalization removes technical biases in microarray data, ensuring accurate comparison of gene expression."
    },
    {
        "id": 253,
        "question": "Which mathematical model is used in systems biology to simulate biological processes?",
        "options": [
            "Differential equations",
            "Scoring matrices",
            "K-mer analysis",
            "Dynamic programming"
        ],
        "answer": "Differential equations",
        "difficulty": "hard",
        "topic": "Systems Biology",
        "explanation": "Differential equations model dynamic biological processes, such as metabolic or signaling pathways, in systems biology."
    },
    {
        "id": 254,
        "question": "Which tool is used for taxonomic profiling in metagenomics?",
        "options": [
            "QIIME",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "QIIME",
        "difficulty": "medium",
        "topic": "Metagenomics",
        "explanation": "QIIME (Quantitative Insights Into Microbial Ecology) is used for taxonomic profiling and analysis of metagenomic data."
    },
    {
        "id": 255,
        "question": "Which machine learning package is commonly used in bioinformatics?",
        "options": [
            "scikit-learn",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "scikit-learn",
        "difficulty": "medium",
        "topic": "Machine Learning in Bioinformatics",
        "explanation": "scikit-learn is a Python library for machine learning, widely used in bioinformatics for tasks like classification and clustering."
    },
    {
        "id": 256,
        "question": "What is the primary purpose of QSAR in pharmacogenomics?",
        "options": [
            "To align sequences",
            "To predict drug activity from molecular structure",
            "To predict protein structures",
            "To quantify gene expression"
        ],
        "answer": "To predict drug activity from molecular structure",
        "difficulty": "medium",
        "topic": "Pharmacogenomics and Drug Design",
        "explanation": "QSAR (Quantitative Structure-Activity Relationship) predicts drug activity based on molecular structure properties."
    },
    {
        "id": 257,
        "question": "Which tool is used for cancer genomics analysis?",
        "options": [
            "MutSigCV",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "MutSigCV",
        "difficulty": "medium",
        "topic": "Clinical and Personalized Bioinformatics",
        "explanation": "MutSigCV identifies significantly mutated genes in cancer genomics by analyzing mutation frequencies."
    },
    {
        "id": 258,
        "question": "What is the purpose of the p-value in biostatistics?",
        "options": [
            "To align sequences",
            "To assess statistical significance",
            "To predict protein structures",
            "To assemble genomes"
        ],
        "answer": "To assess statistical significance",
        "difficulty": "easy",
        "topic": "Biostatistics and Bioinformatics Algorithms",
        "explanation": "The p-value assesses the statistical significance of results, indicating the probability of observing data by chance."
    },
    {
        "id": 259,
        "question": "Which library is used for sequence analysis in Python?",
        "options": [
            "Biopython",
            "TensorFlow",
            "scikit-learn",
            "Pandas"
        ],
        "answer": "Biopython",
        "difficulty": "easy",
        "topic": "Programming and Tools in Bioinformatics",
        "explanation": "Biopython is a Python library for bioinformatics tasks, including sequence analysis and file parsing."
    },
    {
        "id": 260,
        "question": "What is the primary purpose of the CATH database?",
        "options": [
            "To store nucleotide sequences",
            "To classify protein structures",
            "To map metabolic pathways",
            "To quantify gene expression"
        ],
        "answer": "To classify protein structures",
        "difficulty": "medium",
        "topic": "Biological Databases",
        "explanation": "CATH classifies protein structures into hierarchical levels based on their architecture and topology."
    },
    {
        "id": 261,
        "question": "Which tool is used for pairwise sequence alignment?",
        "options": [
            "Needleman-Wunsch",
            "QIIME",
            "MetaPhlAn",
            "DESeq2"
        ],
        "answer": "Needleman-Wunsch",
        "difficulty": "medium",
        "topic": "Sequence Analysis",
        "explanation": "Needleman-Wunsch is a dynamic programming algorithm for global pairwise sequence alignment."
    },
    {
        "id": 262,
        "question": "What is the primary purpose of genome annotation?",
        "options": [
            "To sequence genomes",
            "To identify and label genomic features",
            "To predict protein structures",
            "To align sequences"
        ],
        "answer": "To identify and label genomic features",
        "difficulty": "easy",
        "topic": "Genomics and Transcriptomics",
        "explanation": "Genome annotation identifies and labels features like genes and regulatory elements in a genome sequence."
    },
    {
        "id": 263,
        "question": "Which tool is used for protein identification in proteomics?",
        "options": [
            "Mascot",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Mascot",
        "difficulty": "medium",
        "topic": "Proteomics",
        "explanation": "Mascot is a tool for identifying proteins from mass spectrometry data by matching peptide spectra to databases."
    },
    {
        "id": 264,
        "question": "Which tool is used for molecular dynamics simulations in structural bioinformatics?",
        "options": [
            "GROMACS",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "GROMACS",
        "difficulty": "medium",
        "topic": "Structural Bioinformatics",
        "explanation": "GROMACS is a tool for molecular dynamics simulations, used to study protein dynamics and interactions."
    },
    {
        "id": 265,
        "question": "What is the primary purpose of the UPGMA method in phylogenetics?",
        "options": [
            "To align sequences",
            "To construct phylogenetic trees",
            "To predict protein structures",
            "To quantify gene expression"
        ],
        "answer": "To construct phylogenetic trees",
        "difficulty": "medium",
        "topic": "Phylogenetics",
        "explanation": "UPGMA (Unweighted Pair Group Method with Arithmetic Mean) is a hierarchical clustering method for constructing phylogenetic trees."
    },
    {
        "id": 266,
        "question": "Which evolutionary concept explains rapid sequence changes due to adaptive advantage?",
        "options": [
            "Neutral drift",
            "Purifying selection",
            "Positive selection",
            "Molecular clock"
        ],
        "answer": "Positive selection",
        "difficulty": "medium",
        "topic": "Molecular Evolution",
        "explanation": "Positive selection drives rapid sequence changes that confer adaptive advantages to organisms."
    },
    {
        "id": 267,
        "question": "Which tool is used for pathway enrichment analysis in functional genomics?",
        "options": [
            "DAVID",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "DAVID",
        "difficulty": "medium",
        "topic": "Functional Genomics",
        "explanation": "DAVID (Database for Annotation, Visualization, and Integrated Discovery) performs pathway enrichment analysis for functional genomics."
    },
    {
        "id": 268,
        "question": "Which normalization technique is commonly used in RNA-Seq data analysis?",
        "options": [
            "TPM",
            "PAM",
            "BLOSUM",
            "GFF"
        ],
        "answer": "TPM",
        "difficulty": "medium",
        "topic": "Microarray and NGS Data Analysis",
        "explanation": "TPM (Transcripts Per Million) normalizes RNA-Seq data for gene length and sequencing depth."
    },
    {
        "id": 269,
        "question": "Which tool is used for modeling metabolic networks in systems biology?",
        "options": [
            "COBRA",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "COBRA",
        "difficulty": "medium",
        "topic": "Systems Biology",
        "explanation": "COBRA (Constraint-Based Reconstruction and Analysis) is used for modeling and analyzing metabolic networks."
    },
    {
        "id": 270,
        "question": "Which tool is used for functional annotation in metagenomics?",
        "options": [
            "MetaPhlAn",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "MetaPhlAn",
        "difficulty": "medium",
        "topic": "Metagenomics",
        "explanation": "MetaPhlAn performs taxonomic and functional annotation of metagenomic data."
    },
    {
        "id": 271,
        "question": "Which machine learning algorithm is used for unsupervised clustering in bioinformatics?",
        "options": [
            "Random Forest",
            "K-means clustering",
            "Support Vector Machine",
            "Neural Networks"
        ],
        "answer": "K-means clustering",
        "difficulty": "medium",
        "topic": "Machine Learning in Bioinformatics",
        "explanation": "K-means clustering is an unsupervised algorithm used for grouping similar data points, such as gene expression profiles."
    },
    {
        "id": 272,
        "question": "What is the primary purpose of SNP analysis in pharmacogenomics?",
        "options": [
            "To align sequences",
            "To link genetic variants to drug response",
            "To predict protein structures",
            "To quantify gene expression"
        ],
        "answer": "To link genetic variants to drug response",
        "difficulty": "medium",
        "topic": "Pharmacogenomics and Drug Design",
        "explanation": "SNP analysis identifies genetic variants that influence individual drug responses in pharmacogenomics."
    },
    {
        "id": 273,
        "question": "Which tool is used for precision medicine analysis in clinical bioinformatics?",
        "options": [
            "GATK",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "GATK",
        "difficulty": "medium",
        "topic": "Clinical and Personalized Bioinformatics",
        "explanation": "GATK (Genome Analysis Toolkit) is used for variant calling in clinical bioinformatics, supporting precision medicine."
    },
    {
        "id": 274,
        "question": "What is the purpose of Hidden Markov Models (HMMs) in bioinformatics?",
        "options": [
            "To align sequences",
            "To model sequential data for gene prediction",
            "To predict protein structures",
            "To quantify gene expression"
        ],
        "answer": "To model sequential data for gene prediction",
        "difficulty": "medium",
        "topic": "Biostatistics and Bioinformatics Algorithms",
        "explanation": "HMMs model sequential data, commonly used for gene prediction and sequence annotation in bioinformatics."
    },
    {
        "id": 275,
        "question": "Which tool is used for cloud-based bioinformatics analysis?",
        "options": [
            "Galaxy",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Galaxy",
        "difficulty": "medium",
        "topic": "Programming and Tools in Bioinformatics",
        "explanation": "Galaxy is a web-based platform for cloud-based bioinformatics analysis, supporting reproducible workflows."
    },
    {
        "id": 276,
        "question": "Which database integrates multiple protein domain annotations?",
        "options": [
            "InterPro",
            "GenBank",
            "KEGG",
            "PDB"
        ],
        "answer": "InterPro",
        "difficulty": "medium",
        "topic": "Biological Databases",
        "explanation": "InterPro integrates protein domain and functional annotations from multiple databases."
    },
    {
        "id": 277,
        "question": "Which tool is used for local sequence alignment?",
        "options": [
            "Smith-Waterman",
            "UPGMA",
            "QIIME",
            "DESeq2"
        ],
        "answer": "Smith-Waterman",
        "difficulty": "medium",
        "topic": "Sequence Analysis",
        "explanation": "Smith-Waterman is a dynamic programming algorithm for local sequence alignment, identifying regions of high similarity."
    },
    {
        "id": 278,
        "question": "What is the primary purpose of de novo genome assembly?",
        "options": [
            "To align sequences",
            "To reconstruct genomes without a reference",
            "To predict protein structures",
            "To quantify gene expression"
        ],
        "answer": "To reconstruct genomes without a reference",
        "difficulty": "medium",
        "topic": "Genomics and Transcriptomics",
        "explanation": "De novo genome assembly reconstructs genomes from sequencing reads without using a reference genome."
    },
    {
        "id": 279,
        "question": "Which tool is used for protein quantification in proteomics?",
        "options": [
            "MaxQuant",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "MaxQuant",
        "difficulty": "medium",
        "topic": "Proteomics",
        "explanation": "MaxQuant is a tool for protein quantification and identification from mass spectrometry data."
    },
    {
        "id": 280,
        "question": "Which tool is used for protein structure visualization?",
        "options": [
            "Chimera",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Chimera",
        "difficulty": "medium",
        "topic": "Structural Bioinformatics",
        "explanation": "Chimera is a tool for visualizing and analyzing protein structures and molecular interactions."
    },
    {
        "id": 281,
        "question": "Which method is used for maximum likelihood phylogenetic tree construction?",
        "options": [
            "RAxML",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "RAxML",
        "difficulty": "medium",
        "topic": "Phylogenetics",
        "explanation": "RAxML is a tool for constructing phylogenetic trees using maximum likelihood methods."
    },
    {
        "id": 282,
        "question": "Which tool is used for pathway visualization in functional genomics?",
        "options": [
            "PathVisio",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "PathVisio",
        "difficulty": "medium",
        "topic": "Functional Genomics",
        "explanation": "PathVisio visualizes and analyzes biological pathways in functional genomics studies."
    },
    {
        "id": 283,
        "question": "Which clustering method is used for gene expression data analysis?",
        "options": [
            "Hierarchical clustering",
            "Needleman-Wunsch",
            "Smith-Waterman",
            "K-mer analysis"
        ],
        "answer": "Hierarchical clustering",
        "difficulty": "medium",
        "topic": "Microarray and NGS Data Analysis",
        "explanation": "Hierarchical clustering groups genes or samples with similar expression patterns in gene expression data."
    },
    {
        "id": 284,
        "question": "Which tool is used for metagenomic taxonomic profiling?",
        "options": [
            "Kraken",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Kraken",
        "difficulty": "medium",
        "topic": "Metagenomics",
        "explanation": "Kraken performs taxonomic profiling of metagenomic sequences using k-mer matching."
    },
    {
        "id": 285,
        "question": "Which machine learning algorithm is used for protein function prediction?",
        "options": [
            "Random Forest",
            "K-mer analysis",
            "Scoring matrices",
            "Dynamic programming"
        ],
        "answer": "Random Forest",
        "difficulty": "medium",
        "topic": "Machine Learning in Bioinformatics",
        "explanation": "Random Forest is used for protein function prediction due to its ability to handle complex, high-dimensional data."
    },
    {
        "id": 286,
        "question": "Which tool is used for lead optimization in drug design?",
        "options": [
            "Schrödinger",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Schrödinger",
        "difficulty": "medium",
        "topic": "Pharmacogenomics and Drug Design",
        "explanation": "Schrödinger is a software suite for molecular modeling and lead optimization in drug design."
    },
    {
        "id": 287,
        "question": "Which tool is used for variant calling in cancer genomics?",
        "options": [
            "VarScan",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "VarScan",
        "difficulty": "medium",
        "topic": "Clinical and Personalized Bioinformatics",
        "explanation": "VarScan is a tool for detecting somatic mutations and copy number variations in cancer genomics."
    },
    {
        "id": 288,
        "question": "Which algorithm is used in BLAST for sequence alignment?",
        "options": [
            "Heuristic search",
            "Dynamic programming",
            "K-mer analysis",
            "Scoring matrices"
        ],
        "answer": "Heuristic search",
        "difficulty": "medium",
        "topic": "Biostatistics and Bioinformatics Algorithms",
        "explanation": "BLAST uses a heuristic search algorithm to quickly identify similar sequences, balancing speed and accuracy."
    },
    {
        "id": 289,
        "question": "Which tool is used for high-performance computing in bioinformatics?",
        "options": [
            "SLURM",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "SLURM",
        "difficulty": "medium",
        "topic": "Programming and Tools in Bioinformatics",
        "explanation": "SLURM is a workload manager for high-performance computing clusters, used in bioinformatics for large-scale data analysis."
    },
    {
        "id": 290,
        "question": "Which database stores microRNA sequences?",
        "options": [
            "miRBase",
            "GenBank",
            "KEGG",
            "PDB"
        ],
        "answer": "miRBase",
        "difficulty": "medium",
        "topic": "Biological Databases",
        "explanation": "miRBase stores microRNA sequences and annotations, used in transcriptomics research."
    },
    {
        "id": 291,
        "question": "Which scoring matrix is used for closely related protein sequences?",
        "options": [
            "BLOSUM62",
            "PAM250",
            "Jukes-Cantor",
            "Kimura"
        ],
        "answer": "BLOSUM62",
        "difficulty": "medium",
        "topic": "Sequence Analysis",
        "explanation": "BLOSUM62 is a scoring matrix optimized for aligning closely related protein sequences."
    },
    {
        "id": 292,
        "question": "Which tool is used for de novo transcript assembly?",
        "options": [
            "Trinity",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Trinity",
        "difficulty": "medium",
        "topic": "Genomics and Transcriptomics",
        "explanation": "Trinity is a tool for de novo transcript assembly from RNA-Seq data without a reference genome."
    },
    {
        "id": 293,
        "question": "Which tool is used for protein-protein interaction prediction?",
        "options": [
            "STRING",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "STRING",
        "difficulty": "medium",
        "topic": "Proteomics",
        "explanation": "STRING predicts protein-protein interactions based on experimental and computational evidence."
    },
    {
        "id": 294,
        "question": "Which tool is used for ab initio protein structure prediction?",
        "options": [
            "Rosetta",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Rosetta",
        "difficulty": "medium",
        "topic": "Structural Bioinformatics",
        "explanation": "Rosetta is a tool for ab initio protein structure prediction, modeling structures without templates."
    },
    {
        "id": 295,
        "question": "Which tool is used for Bayesian phylogenetic tree construction?",
        "options": [
            "MrBayes",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "MrBayes",
        "difficulty": "medium",
        "topic": "Phylogenetics",
        "explanation": "MrBayes constructs phylogenetic trees using Bayesian inference methods."
    },
    {
        "id": 296,
        "question": "Which tool is used for differential splicing analysis in RNA-Seq?",
        "options": [
            "rMATS",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "rMATS",
        "difficulty": "medium",
        "topic": "Microarray and NGS Data Analysis",
        "explanation": "rMATS (replicate Multivariate Analysis of Transcript Splicing) detects differential splicing events in RNA-Seq data."
    },
    {
        "id": 297,
        "question": "Which tool is used for metagenomic functional annotation?",
        "options": [
            "MG-RAST",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "MG-RAST",
        "difficulty": "medium",
        "topic": "Metagenomics",
        "explanation": "MG-RAST (Metagenomics Rapid Annotation using Subsystem Technology) annotates metagenomic sequences with functional information."
    },
    {
        "id": 298,
        "question": "Which tool is used for analyzing DNA methylation data?",
        "options": [
            "methylKit",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "methylKit",
        "difficulty": "medium",
        "topic": "Epigenomics",
        "explanation": "methylKit is an R package for analyzing differential DNA methylation from high-throughput sequencing data."
    },
    {
        "id": 299,
        "question": "Which machine learning technique is used for dimensionality reduction in bioinformatics?",
        "options": [
            "Principal Component Analysis (PCA)",
            "K-mer analysis",
            "Scoring matrices",
            "Dynamic programming"
        ],
        "answer": "Principal Component Analysis (PCA)",
        "difficulty": "medium",
        "topic": "Machine Learning in Bioinformatics",
        "explanation": "PCA reduces the dimensionality of high-dimensional bioinformatics data, aiding in visualization and analysis."
    },
    {
        "id": 300,
        "question": "Which tool is used for GWAS analysis in clinical bioinformatics?",
        "options": [
            "PLINK",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "PLINK",
        "difficulty": "medium",
        "topic": "Clinical and Personalized Bioinformatics",
        "explanation": "PLINK is a tool for genome-wide association studies (GWAS), analyzing genetic variants associated with traits."
    },
    {
        "id": 301,
        "question": "Which field is NOT typically integrated into bioinformatics?",
        "options": [
            "Biology",
            "Computer Science",
            "Mechanical Engineering",
            "Statistics"
        ],
        "answer": "Mechanical Engineering",
        "difficulty": "easy",
        "topic": "Introduction to Bioinformatics",
        "explanation": "Bioinformatics integrates biology, computer science, and statistics to analyze biological data, but mechanical engineering is not typically involved."
    },
    {
        "id": 302,
        "question": "What was a significant contribution of the Human Genome Project to bioinformatics?",
        "options": [
            "Development of PCR",
            "Creation of large-scale genomic databases",
            "Invention of mass spectrometry",
            "Discovery of RNA interference"
        ],
        "answer": "Creation of large-scale genomic databases",
        "difficulty": "medium",
        "topic": "Introduction to Bioinformatics",
        "explanation": "The Human Genome Project led to the creation of large-scale genomic databases, advancing bioinformatics tools and analyses."
    },
    {
        "id": 303,
        "question": "Which database is a primary source for protein sequence data?",
        "options": [
            "Swiss-Prot",
            "Pfam",
            "KEGG",
            "InterPro"
        ],
        "answer": "Swiss-Prot",
        "difficulty": "easy",
        "topic": "Biological Databases",
        "explanation": "Swiss-Prot is a primary protein sequence database, providing high-quality, manually curated annotations."
    },
    {
        "id": 304,
        "question": "What is the primary function of the EMBL database?",
        "options": [
            "To store protein structures",
            "To store nucleotide sequences",
            "To map metabolic pathways",
            "To annotate protein domains"
        ],
        "answer": "To store nucleotide sequences",
        "difficulty": "easy",
        "topic": "Biological Databases",
        "explanation": "EMBL is a primary nucleotide database, storing DNA and RNA sequences submitted by researchers."
    },
    {
        "id": 305,
        "question": "Which algorithm is used for global sequence alignment?",
        "options": [
            "Smith-Waterman",
            "Needleman-Wunsch",
            "Burrows-Wheeler",
            "K-mer matching"
        ],
        "answer": "Needleman-Wunsch",
        "difficulty": "medium",
        "topic": "Sequence Analysis",
        "explanation": "Needleman-Wunsch is a dynamic programming algorithm used for global sequence alignment, aligning entire sequences."
    },
    {
        "id": 306,
        "question": "What is the purpose of the BLOSUM matrix in sequence alignment?",
        "options": [
            "To penalize gaps",
            "To score amino acid substitutions",
            "To predict gene expression",
            "To assemble genomes"
        ],
        "answer": "To score amino acid substitutions",
        "difficulty": "medium",
        "topic": "Sequence Analysis",
        "explanation": "BLOSUM matrices score amino acid substitutions based on observed frequencies in aligned protein sequences."
    },
    {
        "id": 307,
        "question": "Which tool is optimized for multiple sequence alignment of divergent sequences?",
        "options": [
            "ClustalW",
            "MUSCLE",
            "MAFFT",
            "T-Coffee"
        ],
        "answer": "T-Coffee",
        "difficulty": "medium",
        "topic": "Sequence Analysis",
        "explanation": "T-Coffee is designed for accurate multiple sequence alignment, particularly for divergent sequences, by combining multiple alignment methods."
    },
    {
        "id": 308,
        "question": "What is the primary advantage of next-generation sequencing (NGS) over Sanger sequencing?",
        "options": [
            "Higher accuracy",
            "Lower cost per base",
            "Longer read lengths",
            "Simpler data analysis"
        ],
        "answer": "Lower cost per base",
        "difficulty": "medium",
        "topic": "Genomics and Transcriptomics",
        "explanation": "NGS offers a lower cost per base compared to Sanger sequencing, enabling high-throughput genomic analysis."
    },
    {
        "id": 309,
        "question": "Which tool is used for genome assembly from short reads?",
        "options": [
            "SPAdes",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "SPAdes",
        "difficulty": "medium",
        "topic": "Genomics and Transcriptomics",
        "explanation": "SPAdes is a tool for de novo genome assembly, optimized for short reads from NGS platforms."
    },
    {
        "id": 310,
        "question": "What is the primary goal of differential expression analysis in transcriptomics?",
        "options": [
            "To predict protein structures",
            "To identify genes with different expression levels",
            "To assemble genomes",
            "To map protein interactions"
        ],
        "answer": "To identify genes with different expression levels",
        "difficulty": "easy",
        "topic": "Genomics and Transcriptomics",
        "explanation": "Differential expression analysis identifies genes with significantly different expression levels across conditions in RNA-Seq data."
    },
    {
        "id": 311,
        "question": "Which data type is primarily analyzed in proteomics studies?",
        "options": [
            "DNA sequences",
            "RNA transcripts",
            "Protein spectra",
            "Metabolic pathways"
        ],
        "answer": "Protein spectra",
        "difficulty": "easy",
        "topic": "Proteomics",
        "explanation": "Proteomics primarily analyzes protein spectra from mass spectrometry to identify and quantify proteins."
    },
    {
        "id": 312,
        "question": "What is the primary purpose of the MaxQuant tool in proteomics?",
        "options": [
            "To align sequences",
            "To quantify proteins from mass spectrometry data",
            "To predict gene expression",
            "To assemble genomes"
        ],
        "answer": "To quantify proteins from mass spectrometry data",
        "difficulty": "medium",
        "topic": "Proteomics",
        "explanation": "MaxQuant is used to quantify and identify proteins from mass spectrometry data in proteomics studies."
    },
    {
        "id": 313,
        "question": "Which method is used for protein structure prediction without templates?",
        "options": [
            "Homology modeling",
            "Threading",
            "Ab initio modeling",
            "Dynamic programming"
        ],
        "answer": "Ab initio modeling",
        "difficulty": "medium",
        "topic": "Structural Bioinformatics",
        "explanation": "Ab initio modeling predicts protein structures without templates, relying on physical principles and computational algorithms."
    },
    {
        "id": 314,
        "question": "Which tool is used for visualizing molecular docking results?",
        "options": [
            "VMD",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "VMD",
        "difficulty": "medium",
        "topic": "Structural Bioinformatics",
        "explanation": "VMD (Visual Molecular Dynamics) is used to visualize molecular structures and docking results in structural bioinformatics."
    },
    {
        "id": 315,
        "question": "What is the primary purpose of cladistics in phylogenetics?",
        "options": [
            "To align sequences",
            "To classify organisms based on shared derived traits",
            "To predict protein structures",
            "To quantify gene expression"
        ],
        "answer": "To classify organisms based on shared derived traits",
        "difficulty": "medium",
        "topic": "Phylogenetics",
        "explanation": "Cladistics classifies organisms based on shared derived traits, forming the basis for phylogenetic tree construction."
    },
    {
        "id": 316,
        "question": "Which tool is used for Bayesian phylogenetic inference?",
        "options": [
            "MrBayes",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "MrBayes",
        "difficulty": "medium",
        "topic": "Phylogenetics",
        "explanation": "MrBayes constructs phylogenetic trees using Bayesian inference, incorporating probabilistic models of evolution."
    },
    {
        "id": 317,
        "question": "Which model assumes equal substitution rates for all nucleotides in molecular evolution?",
        "options": [
            "Jukes-Cantor",
            "Kimura 2-parameter",
            "HKY",
            "GTR"
        ],
        "answer": "Jukes-Cantor",
        "difficulty": "medium",
        "topic": "Molecular Evolution",
        "explanation": "The Jukes-Cantor model assumes equal substitution rates for all nucleotides, simplifying evolutionary distance calculations."
    },
    {
        "id": 318,
        "question": "What is the primary evidence for purifying selection in molecular evolution?",
        "options": [
            "High mutation rates",
            "Conservation of functional sequences",
            "Rapid sequence divergence",
            "Random genetic drift"
        ],
        "answer": "Conservation of functional sequences",
        "difficulty": "medium",
        "topic": "Molecular Evolution",
        "explanation": "Purifying selection is evidenced by the conservation of functional sequences, as deleterious mutations are removed."
    },
    {
        "id": 319,
        "question": "Which tool is used for gene ontology enrichment analysis in functional genomics?",
        "options": [
            "GOseq",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "GOseq",
        "difficulty": "medium",
        "topic": "Functional Genomics",
        "explanation": "GOseq performs gene ontology enrichment analysis, identifying overrepresented functional categories in genomic data."
    },
    {
        "id": 320,
        "question": "What is the primary purpose of the KEGG database in functional genomics?",
        "options": [
            "To store protein structures",
            "To map metabolic and signaling pathways",
            "To align sequences",
            "To quantify gene expression"
        ],
        "answer": "To map metabolic and signaling pathways",
        "difficulty": "easy",
        "topic": "Functional Genomics",
        "explanation": "KEGG maps metabolic and signaling pathways, aiding in functional genomics and systems biology studies."
    },
    {
        "id": 321,
        "question": "Which normalization method is used to account for sequencing depth in RNA-Seq?",
        "options": [
            "RPKM",
            "Z-score",
            "Log transformation",
            "Median normalization"
        ],
        "answer": "RPKM",
        "difficulty": "medium",
        "topic": "Microarray and NGS Data Analysis",
        "explanation": "RPKM (Reads Per Kilobase of transcript per Million mapped reads) normalizes RNA-Seq data for sequencing depth and gene length."
    },
    {
        "id": 322,
        "question": "Which tool is used for clustering gene expression data in microarray analysis?",
        "options": [
            "Cluster 3.0",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Cluster 3.0",
        "difficulty": "medium",
        "topic": "Microarray and NGS Data Analysis",
        "explanation": "Cluster 3.0 is a tool for clustering gene expression data, often used in microarray and RNA-Seq analyses."
    },
    {
        "id": 323,
        "question": "What is the primary goal of metabolic network modeling in systems biology?",
        "options": [
            "To align sequences",
            "To predict metabolic flux distributions",
            "To predict protein structures",
            "To assemble genomes"
        ],
        "answer": "To predict metabolic flux distributions",
        "difficulty": "medium",
        "topic": "Systems Biology",
        "explanation": "Metabolic network modeling predicts how metabolites flow through biochemical pathways in systems biology."
    },
    {
        "id": 324,
        "question": "Which graph theory metric is used to identify hub genes in biological networks?",
        "options": [
            "Edge weight",
            "Node degree",
            "Path length",
            "Clustering coefficient"
        ],
        "answer": "Node degree",
        "difficulty": "medium",
        "topic": "Systems Biology",
        "explanation": "Node degree identifies hub genes with many connections in biological networks, indicating their functional importance."
    },
    {
        "id": 325,
        "question": "What is the primary challenge in metagenomic analysis of environmental samples?",
        "options": [
            "High sequence similarity",
            "Incomplete reference databases",
            "Excessive sequencing depth",
            "Low mutation rates"
        ],
        "answer": "Incomplete reference databases",
        "difficulty": "medium",
        "topic": "Metagenomics",
        "explanation": "Incomplete reference databases challenge metagenomic analysis, as many environmental microbes are uncharacterized."
    },
    {
        "id": 326,
        "question": "Which tool is used for 16S rRNA analysis in metagenomics?",
        "options": [
            "Mothur",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Mothur",
        "difficulty": "medium",
        "topic": "Metagenomics",
        "explanation": "Mothur is a tool for analyzing 16S rRNA sequences to profile microbial communities in metagenomics."
    },
    {
        "id": 327,
        "question": "What is the primary purpose of ChIP-Seq in epigenomics?",
        "options": [
            "To sequence RNA",
            "To map protein-DNA interactions",
            "To predict protein structures",
            "To assemble genomes"
        ],
        "answer": "To map protein-DNA interactions",
        "difficulty": "medium",
        "topic": "Epigenomics",
        "explanation": "ChIP-Seq maps protein-DNA interactions, such as transcription factor binding or histone modifications."
    },
    {
        "id": 328,
        "question": "Which tool is used for differential methylation analysis in epigenomics?",
        "options": [
            "Bsmooth",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Bsmooth",
        "difficulty": "medium",
        "topic": "Epigenomics",
        "explanation": "Bsmooth is a tool for analyzing differential DNA methylation from bisulfite sequencing data."
    },
    {
        "id": 329,
        "question": "Which machine learning algorithm is used for predicting protein-protein interactions?",
        "options": [
            "Random Forest",
            "K-means clustering",
            "Needleman-Wunsch",
            "Smith-Waterman"
        ],
        "answer": "Random Forest",
        "difficulty": "medium",
        "topic": "Machine Learning in Bioinformatics",
        "explanation": "Random Forest is used for predicting protein-protein interactions due to its robustness with high-dimensional data."
    },
    {
        "id": 330,
        "question": "What is the primary purpose of dimensionality reduction in machine learning for bioinformatics?",
        "options": [
            "To increase data complexity",
            "To simplify data for visualization and analysis",
            "To align sequences",
            "To predict gene expression"
        ],
        "answer": "To simplify data for visualization and analysis",
        "difficulty": "medium",
        "topic": "Machine Learning in Bioinformatics",
        "explanation": "Dimensionality reduction simplifies high-dimensional bioinformatics data, aiding visualization and improving computational efficiency."
    },
    {
        "id": 331,
        "question": "What is the primary goal of SNP analysis in pharmacogenomics?",
        "options": [
            "To sequence genomes",
            "To identify variants affecting drug response",
            "To predict protein structures",
            "To align sequences"
        ],
        "answer": "To identify variants affecting drug response",
        "difficulty": "medium",
        "topic": "Pharmacogenomics and Drug Design",
        "explanation": "SNP analysis in pharmacogenomics identifies genetic variants that influence individual drug responses."
    },
    {
        "id": 332,
        "question": "Which tool is used for quantitative structure-activity relationship (QSAR) modeling in drug design?",
        "options": [
            "OpenBabel",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "OpenBabel",
        "difficulty": "medium",
        "topic": "Pharmacogenomics and Drug Design",
        "explanation": "OpenBabel is used for QSAR modeling, converting and analyzing molecular structures for drug design."
    },
    {
        "id": 333,
        "question": "What is the primary purpose of cancer genomics in clinical bioinformatics?",
        "options": [
            "To align sequences",
            "To identify driver mutations",
            "To predict protein structures",
            "To quantify gene expression"
        ],
        "answer": "To identify driver mutations",
        "difficulty": "medium",
        "topic": "Clinical and Personalized Bioinformatics",
        "explanation": "Cancer genomics identifies driver mutations that contribute to tumor development, informing targeted therapies."
    },
    {
        "id": 334,
        "question": "What is a key legal implication of personalized bioinformatics?",
        "options": [
            "Data storage costs",
            "Intellectual property of genetic data",
            "Sequence alignment accuracy",
            "Protein structure prediction"
        ],
        "answer": "Intellectual property of genetic data",
        "difficulty": "medium",
        "topic": "Clinical and Personalized Bioinformatics",
        "explanation": "Intellectual property issues, such as ownership of genetic data, are a key legal implication in personalized bioinformatics."
    },
    {
        "id": 335,
        "question": "What is the purpose of hypothesis testing in biostatistics?",
        "options": [
            "To align sequences",
            "To evaluate the significance of results",
            "To predict protein structures",
            "To assemble genomes"
        ],
        "answer": "To evaluate the significance of results",
        "difficulty": "easy",
        "topic": "Biostatistics and Bioinformatics Algorithms",
        "explanation": "Hypothesis testing evaluates the statistical significance of results, determining whether observed effects are due to chance."
    },
    {
        "id": 336,
        "question": "Which algorithm is used in Hidden Markov Models for sequence annotation?",
        "options": [
            "Viterbi algorithm",
            "Dynamic programming",
            "K-mer matching",
            "Scoring matrices"
        ],
        "answer": "Viterbi algorithm",
        "difficulty": "hard",
        "topic": "Biostatistics and Bioinformatics Algorithms",
        "explanation": "The Viterbi algorithm is used in HMMs to find the most likely sequence of hidden states, such as in gene annotation."
    },
    {
        "id": 337,
        "question": "Which programming language is commonly used for statistical analysis in bioinformatics?",
        "options": [
            "R",
            "Java",
            "C++",
            "Ruby"
        ],
        "answer": "R",
        "difficulty": "easy",
        "topic": "Programming and Tools in Bioinformatics",
        "explanation": "R is widely used for statistical analysis in bioinformatics, supported by packages like Bioconductor."
    },
    {
        "id": 338,
        "question": "What is the primary purpose of the BioPerl library?",
        "options": [
            "To predict protein structures",
            "To perform sequence analysis tasks",
            "To assemble genomes",
            "To map metabolic pathways"
        ],
        "answer": "To perform sequence analysis tasks",
        "difficulty": "medium",
        "topic": "Programming and Tools in Bioinformatics",
        "explanation": "BioPerl is a Perl library for sequence analysis, file parsing, and database access in bioinformatics."
    },
    {
        "id": 339,
        "question": "Which tool is used for workflow automation in bioinformatics?",
        "options": [
            "Nextflow",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Nextflow",
        "difficulty": "medium",
        "topic": "Programming and Tools in Bioinformatics",
        "explanation": "Nextflow is a workflow manager for automating and scaling bioinformatics pipelines."
    },
    {
        "id": 340,
        "question": "What is the primary purpose of the PDB database?",
        "options": [
            "To store nucleotide sequences",
            "To store protein structures",
            "To map metabolic pathways",
            "To quantify gene expression"
        ],
        "answer": "To store protein structures",
        "difficulty": "easy",
        "topic": "Biological Databases",
        "explanation": "PDB (Protein Data Bank) stores 3D structural data of proteins and other macromolecules."
    },
    {
        "id": 341,
        "question": "Which file format is used to store sequence alignments?",
        "options": [
            "SAM",
            "FASTA",
            "GFF",
            "VCF"
        ],
        "answer": "SAM",
        "difficulty": "medium",
        "topic": "Biological Databases",
        "explanation": "SAM (Sequence Alignment/Map) format stores sequence alignments, including read mappings and metadata."
    },
    {
        "id": 342,
        "question": "What is the primary purpose of the PAM matrix in sequence alignment?",
        "options": [
            "To penalize gaps",
            "To score amino acid substitutions",
            "To predict gene expression",
            "To assemble genomes"
        ],
        "answer": "To score amino acid substitutions",
        "difficulty": "medium",
        "topic": "Sequence Analysis",
        "explanation": "PAM matrices score amino acid substitutions based on evolutionary divergence, used in protein sequence alignment."
    },
    {
        "id": 343,
        "question": "Which tool is used for detecting conserved motifs in DNA sequences?",
        "options": [
            "Weeder",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Weeder",
        "difficulty": "medium",
        "topic": "Sequence Analysis",
        "explanation": "Weeder is a tool for detecting conserved motifs in DNA sequences, often used for regulatory element identification."
    },
    {
        "id": 344,
        "question": "What is the primary purpose of gene prediction in genomics?",
        "options": [
            "To sequence genomes",
            "To identify gene locations and structures",
            "To predict protein structures",
            "To align sequences"
        ],
        "answer": "To identify gene locations and structures",
        "difficulty": "easy",
        "topic": "Genomics and Transcriptomics",
        "explanation": "Gene prediction identifies the locations and structures of genes within a genome sequence."
    },
    {
        "id": 345,
        "question": "Which tool is used for RNA-Seq read alignment?",
        "options": [
            "STAR",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "STAR",
        "difficulty": "medium",
        "topic": "Genomics and Transcriptomics",
        "explanation": "STAR is a fast and accurate tool for aligning RNA-Seq reads, particularly for detecting splice junctions."
    },
    {
        "id": 346,
        "question": "What is the primary purpose of protein identification in proteomics?",
        "options": [
            "To sequence proteins",
            "To determine protein identity from spectra",
            "To align sequences",
            "To predict gene expression"
        ],
        "answer": "To determine protein identity from spectra",
        "difficulty": "easy",
        "topic": "Proteomics",
        "explanation": "Protein identification determines protein identity by matching mass spectrometry spectra to database sequences."
    },
    {
        "id": 347,
        "question": "Which tool is used for protein-protein docking in structural bioinformatics?",
        "options": [
            "HADDOCK",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "HADDOCK",
        "difficulty": "medium",
        "topic": "Structural Bioinformatics",
        "explanation": "HADDOCK is a tool for predicting protein-protein docking, modeling interactions between protein complexes."
    },
    {
        "id": 348,
        "question": "What is the primary purpose of the RAxML tool in phylogenetics?",
        "options": [
            "To align sequences",
            "To construct maximum likelihood trees",
            "To predict protein structures",
            "To quantify gene expression"
        ],
        "answer": "To construct maximum likelihood trees",
        "difficulty": "medium",
        "topic": "Phylogenetics",
        "explanation": "RAxML constructs phylogenetic trees using maximum likelihood methods, optimizing tree topology and branch lengths."
    },
    {
        "id": 349,
        "question": "Which evolutionary concept explains sequence changes without functional impact?",
        "options": [
            "Neutral drift",
            "Positive selection",
            "Purifying selection",
            "Molecular clock"
        ],
        "answer": "Neutral drift",
        "difficulty": "medium",
        "topic": "Molecular Evolution",
        "explanation": "Neutral drift describes sequence changes that occur randomly without affecting function, as per the neutral theory of evolution."
    },
    {
        "id": 350,
        "question": "Which tool is used for pathway visualization in functional genomics?",
        "options": [
            "PathVisio",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "PathVisio",
        "difficulty": "medium",
        "topic": "Functional Genomics",
        "explanation": "PathVisio is a tool for visualizing and analyzing biological pathways in functional genomics."
    },
    {
        "id": 351,
        "question": "Which tool is used for differential expression analysis in RNA-Seq?",
        "options": [
            "DESeq2",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "DESeq2",
        "difficulty": "medium",
        "topic": "Microarray and NGS Data Analysis",
        "explanation": "DESeq2 is an R package for differential expression analysis in RNA-Seq data, using negative binomial models."
    },
    {
        "id": 352,
        "question": "Which tool is used for modeling gene regulatory networks in systems biology?",
        "options": [
            "BoolNet",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "BoolNet",
        "difficulty": "medium",
        "topic": "Systems Biology",
        "explanation": "BoolNet is a tool for modeling and analyzing gene regulatory networks using Boolean logic."
    },
    {
        "id": 353,
        "question": "Which tool is used for metagenomic sequence classification?",
        "options": [
            "Kraken2",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Kraken2",
        "difficulty": "medium",
        "topic": "Metagenomics",
        "explanation": "Kraken2 classifies metagenomic sequences by assigning reads to taxonomic groups based on k-mer matches."
    },
    {
        "id": 354,
        "question": "Which tool is used for analyzing ATAC-Seq data in epigenomics?",
        "options": [
            "MACS2",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "MACS2",
        "difficulty": "medium",
        "topic": "Epigenomics",
        "explanation": "MACS2 is a tool for peak calling in ATAC-Seq data, identifying open chromatin regions."
    },
    {
        "id": 355,
        "question": "Which machine learning algorithm is used for gene function prediction?",
        "options": [
            "Neural Networks",
            "K-mer analysis",
            "Scoring matrices",
            "Dynamic programming"
        ],
        "answer": "Neural Networks",
        "difficulty": "medium",
        "topic": "Machine Learning in Bioinformatics",
        "explanation": "Neural Networks are used for gene function prediction, leveraging complex patterns in sequence and expression data."
    },
    {
        "id": 356,
        "question": "Which tool is used for virtual screening in drug design?",
        "options": [
            "Schrödinger",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Schrödinger",
        "difficulty": "medium",
        "topic": "Pharmacogenomics and Drug Design",
        "explanation": "Schrödinger is a software suite for virtual screening and molecular modeling in drug design."
    },
    {
        "id": 357,
        "question": "Which tool is used for variant calling in clinical bioinformatics?",
        "options": [
            "GATK",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "GATK",
        "difficulty": "medium",
        "topic": "Clinical and Personalized Bioinformatics",
        "explanation": "GATK (Genome Analysis Toolkit) is used for variant calling in clinical bioinformatics, identifying SNPs and indels."
    },
    {
        "id": 358,
        "question": "What is the primary purpose of the BLAST algorithm in bioinformatics?",
        "options": [
            "To assemble genomes",
            "To find similar sequences in databases",
            "To predict protein structures",
            "To quantify gene expression"
        ],
        "answer": "To find similar sequences in databases",
        "difficulty": "easy",
        "topic": "Biostatistics and Bioinformatics Algorithms",
        "explanation": "BLAST (Basic Local Alignment Search Tool) finds similar sequences in databases using a heuristic search algorithm."
    },
    {
        "id": 359,
        "question": "Which tool is used for cloud-based bioinformatics workflows?",
        "options": [
            "Galaxy",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Galaxy",
        "difficulty": "medium",
        "topic": "Programming and Tools in Bioinformatics",
        "explanation": "Galaxy is a web-based platform for creating and running cloud-based bioinformatics workflows."
    },
    {
        "id": 360,
        "question": "Which database stores orthologous gene annotations?",
        "options": [
            "OrthoDB",
            "GenBank",
            "KEGG",
            "PDB"
        ],
        "answer": "OrthoDB",
        "difficulty": "medium",
        "topic": "Biological Databases",
        "explanation": "OrthoDB stores annotations of orthologous genes across a wide range of species."
    },
    {
        "id": 361,
        "question": "Which tool is used for pairwise local sequence alignment?",
        "options": [
            "Smith-Waterman",
            "UPGMA",
            "QIIME",
            "DESeq2"
        ],
        "answer": "Smith-Waterman",
        "difficulty": "medium",
        "topic": "Sequence Analysis",
        "explanation": "Smith-Waterman is a dynamic programming algorithm for local pairwise sequence alignment, identifying regions of high similarity."
    },
    {
        "id": 362,
        "question": "What is the primary purpose of genome assembly in genomics?",
        "options": [
            "To align sequences",
            "To reconstruct a complete genome sequence",
            "To predict protein structures",
            "To quantify gene expression"
        ],
        "answer": "To reconstruct a complete genome sequence",
        "difficulty": "easy",
        "topic": "Genomics and Transcriptomics",
        "explanation": "Genome assembly reconstructs a complete genome sequence from fragmented sequencing reads."
    },
    {
        "id": 363,
        "question": "Which tool is used for protein domain annotation in proteomics?",
        "options": [
            "InterProScan",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "InterProScan",
        "difficulty": "medium",
        "topic": "Proteomics",
        "explanation": "InterProScan annotates protein sequences with domain and functional information from multiple databases."
    },
    {
        "id": 364,
        "question": "Which tool is used for protein secondary structure prediction?",
        "options": [
            "PSIPRED",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "PSIPRED",
        "difficulty": "medium",
        "topic": "Structural Bioinformatics",
        "explanation": "PSIPRED predicts protein secondary structures using neural networks and position-specific scoring matrices."
    },
    {
        "id": 365,
        "question": "Which tool is used for phylogenetic tree visualization?",
        "options": [
            "FigTree",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "FigTree",
        "difficulty": "medium",
        "topic": "Phylogenetics",
        "explanation": "FigTree is a tool for visualizing and annotating phylogenetic trees."
    },
    {
        "id": 366,
        "question": "Which tool is used for differential splicing analysis in RNA-Seq?",
        "options": [
            "rMATS",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "rMATS",
        "difficulty": "medium",
        "topic": "Microarray and NGS Data Analysis",
        "explanation": "rMATS detects differential splicing events in RNA-Seq data, analyzing alternative splicing patterns."
    },
    {
        "id": 367,
        "question": "Which tool is used for metagenomic functional annotation?",
        "options": [
            "HUMAnN",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "HUMAnN",
        "difficulty": "medium",
        "topic": "Metagenomics",
        "explanation": "HUMAnN (HMP Unified Metabolic Analysis Network) annotates metagenomic sequences with functional information."
    },
    {
        "id": 368,
        "question": "Which tool is used for analyzing DNA methylation data?",
        "options": [
            "methylKit",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "methylKit",
        "difficulty": "medium",
        "topic": "Epigenomics",
        "explanation": "methylKit is an R package for analyzing differential DNA methylation from bisulfite sequencing data."
    },
    {
        "id": 369,
        "question": "Which machine learning technique is used for clustering gene expression data?",
        "options": [
            "Hierarchical clustering",
            "K-mer analysis",
            "Scoring matrices",
            "Dynamic programming"
        ],
        "answer": "Hierarchical clustering",
        "difficulty": "medium",
        "topic": "Machine Learning in Bioinformatics",
        "explanation": "Hierarchical clustering groups genes or samples with similar expression patterns in transcriptomics data."
    },
    {
        "id": 370,
        "question": "Which tool is used for GWAS analysis in clinical bioinformatics?",
        "options": [
            "PLINK",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "PLINK",
        "difficulty": "medium",
        "topic": "Clinical and Personalized Bioinformatics",
        "explanation": "PLINK is a tool for genome-wide association studies (GWAS), analyzing genetic variants associated with traits."
    },
    {
        "id": 371,
        "question": "Which database stores gene expression data?",
        "options": [
            "GEO",
            "GenBank",
            "KEGG",
            "PDB"
        ],
        "answer": "GEO",
        "difficulty": "medium",
        "topic": "Biological Databases",
        "explanation": "GEO (Gene Expression Omnibus) stores high-throughput gene expression and functional genomics data."
    },
    {
        "id": 372,
        "question": "Which tool is used for multiple sequence alignment of protein sequences?",
        "options": [
            "MUSCLE",
            "QIIME",
            "DESeq2",
            "SPAdes"
        ],
        "answer": "MUSCLE",
        "difficulty": "medium",
        "topic": "Sequence Analysis",
        "explanation": "MUSCLE is a fast and accurate tool for multiple sequence alignment of protein sequences."
    },
    {
        "id": 373,
        "question": "Which tool is used for de novo genome assembly from long reads?",
        "options": [
            "Canu",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Canu",
        "difficulty": "medium",
        "topic": "Genomics and Transcriptomics",
        "explanation": "Canu is a tool for de novo genome assembly, optimized for long reads from PacBio or Nanopore sequencing."
    },
    {
        "id": 374,
        "question": "Which tool is used for protein function prediction?",
        "options": [
            "Blast2GO",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Blast2GO",
        "difficulty": "medium",
        "topic": "Proteomics",
        "explanation": "Blast2GO predicts protein functions by combining BLAST searches with gene ontology annotations."
    },
    {
        "id": 375,
        "question": "Which tool is used for protein structure prediction?",
        "options": [
            "AlphaFold",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "AlphaFold",
        "difficulty": "medium",
        "topic": "Structural Bioinformatics",
        "explanation": "AlphaFold uses deep learning to predict protein 3D structures with high accuracy."
    },
    {
        "id": 376,
        "question": "Which tool is used for phylogenetic distance calculation?",
        "options": [
            "MEGA",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "MEGA",
        "difficulty": "medium",
        "topic": "Phylogenetics",
        "explanation": "MEGA calculates phylogenetic distances and constructs trees using various evolutionary models."
    },
    {
        "id": 377,
        "question": "Which tool is used for gene set enrichment analysis in functional genomics?",
        "options": [
            "GSEA",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "GSEA",
        "difficulty": "medium",
        "topic": "Functional Genomics",
        "explanation": "GSEA (Gene Set Enrichment Analysis) identifies enriched biological pathways or gene sets in expression data."
    },
    {
        "id": 378,
        "question": "Which tool is used for quality control of NGS data?",
        "options": [
            "FastQC",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "FastQC",
        "difficulty": "medium",
        "topic": "Microarray and NGS Data Analysis",
        "explanation": "FastQC assesses the quality of NGS data, providing metrics like per-base quality scores."
    },
    {
        "id": 379,
        "question": "Which tool is used for metabolic network reconstruction in systems biology?",
        "options": [
            "COBRApy",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "COBRApy",
        "difficulty": "medium",
        "topic": "Systems Biology",
        "explanation": "COBRApy is a Python package for reconstructing and analyzing metabolic networks in systems biology."
    },
    {
        "id": 380,
        "question": "Which tool is used for taxonomic profiling in metagenomics?",
        "options": [
            "MetaPhlAn",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "MetaPhlAn",
        "difficulty": "medium",
        "topic": "Metagenomics",
        "explanation": "MetaPhlAn performs taxonomic profiling of metagenomic data, identifying microbial species."
    },
    {
        "id": 381,
        "question": "Which tool is used for analyzing Hi-C data in epigenomics?",
        "options": [
            "HiC-Pro",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "HiC-Pro",
        "difficulty": "medium",
        "topic": "Epigenomics",
        "explanation": "HiC-Pro processes Hi-C data to study 3D genome organization and chromatin interactions."
    },
    {
        "id": 382,
        "question": "Which machine learning algorithm is used for variant prioritization in bioinformatics?",
        "options": [
            "Gradient Boosting",
            "K-mer analysis",
            "Scoring matrices",
            "Dynamic programming"
        ],
        "answer": "Gradient Boosting",
        "difficulty": "medium",
        "topic": "Machine Learning in Bioinformatics",
        "explanation": "Gradient Boosting is used for variant prioritization, ranking genetic variants by their potential impact."
    },
    {
        "id": 383,
        "question": "Which tool is used for molecular dynamics simulations in drug design?",
        "options": [
            "GROMACS",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "GROMACS",
        "difficulty": "medium",
        "topic": "Pharmacogenomics and Drug Design",
        "explanation": "GROMACS performs molecular dynamics simulations for drug design, studying protein-ligand interactions."
    },
    {
        "id": 384,
        "question": "Which tool is used for somatic mutation detection in cancer genomics?",
        "options": [
            "MuTect2",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "MuTect2",
        "difficulty": "medium",
        "topic": "Clinical and Personalized Bioinformatics",
        "explanation": "MuTect2 detects somatic mutations in cancer genomics by comparing tumor and normal samples."
    },
    {
        "id": 385,
        "question": "Which algorithm is used for k-means clustering in bioinformatics?",
        "options": [
            "Iterative partitioning",
            "Dynamic programming",
            "K-mer matching",
            "Scoring matrices"
        ],
        "answer": "Iterative partitioning",
        "difficulty": "medium",
        "topic": "Biostatistics and Bioinformatics Algorithms",
        "explanation": "K-means clustering uses iterative partitioning to group data points into clusters based on similarity."
    },
    {
        "id": 386,
        "question": "Which tool is used for high-performance computing in bioinformatics?",
        "options": [
            "SLURM",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "SLURM",
        "difficulty": "medium",
        "topic": "Programming and Tools in Bioinformatics",
        "explanation": "SLURM is a workload manager for high-performance computing clusters, used in large-scale bioinformatics analyses."
    },
    {
        "id": 387,
        "question": "Which database stores microRNA target predictions?",
        "options": [
            "TargetScan",
            "GenBank",
            "KEGG",
            "PDB"
        ],
        "answer": "TargetScan",
        "difficulty": "medium",
        "topic": "Biological Databases",
        "explanation": "TargetScan stores predictions of microRNA target sites in mRNA sequences."
    },
    {
        "id": 388,
        "question": "Which tool is used for detecting structural variants in genomics?",
        "options": [
            "Lumpy",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Lumpy",
        "difficulty": "medium",
        "topic": "Genomics and Transcriptomics",
        "explanation": "Lumpy detects structural variants, such as deletions and inversions, from NGS data."
    },
    {
        "id": 389,
        "question": "Which tool is used for protein interaction network analysis?",
        "options": [
            "Cytoscape",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Cytoscape",
        "difficulty": "medium",
        "topic": "Proteomics",
        "explanation": "Cytoscape visualizes and analyzes protein interaction networks and other biological networks."
    },
    {
        "id": 390,
        "question": "Which tool is used for threading-based protein structure prediction?",
        "options": [
            "RaptorX",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "RaptorX",
        "difficulty": "medium",
        "topic": "Structural Bioinformatics",
        "explanation": "RaptorX uses threading to predict protein structures by aligning sequences to known structural templates."
    },
    {
        "id": 391,
        "question": "Which tool is used for assessing genome assembly completeness?",
        "options": [
            "BUSCO",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "BUSCO",
        "difficulty": "medium",
        "topic": "Genomics and Transcriptomics",
        "explanation": "BUSCO assesses genome assembly completeness by checking for conserved single-copy orthologs."
    },
    {
        "id": 392,
        "question": "Which tool is used for gene fusion detection in RNA-Seq?",
        "options": [
            "STAR-Fusion",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "STAR-Fusion",
        "difficulty": "medium",
        "topic": "Microarray and NGS Data Analysis",
        "explanation": "STAR-Fusion detects gene fusions in RNA-Seq data by analyzing chimeric alignments."
    },
    {
        "id": 393,
        "question": "Which tool is used for analyzing single-cell RNA-Seq data?",
        "options": [
            "Seurat",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Seurat",
        "difficulty": "medium",
        "topic": "Microarray and NGS Data Analysis",
        "explanation": "Seurat is an R package for analyzing single-cell RNA-Seq data, identifying cell types and expression patterns."
    },
    {
        "id": 394,
        "question": "Which tool is used for microbial genome annotation?",
        "options": [
            "Prokka",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Prokka",
        "difficulty": "medium",
        "topic": "Genomics and Transcriptomics",
        "explanation": "Prokka annotates microbial genomes, identifying genes and functional elements."
    },
    {
        "id": 395,
        "question": "Which tool is used for phylogenetic tree construction using distance methods?",
        "options": [
            "PHYLIP",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "PHYLIP",
        "difficulty": "medium",
        "topic": "Phylogenetics",
        "explanation": "PHYLIP constructs phylogenetic trees using distance-based methods like Neighbor-Joining."
    },
    {
        "id": 396,
        "question": "Which tool is used for regulatory network inference in systems biology?",
        "options": [
            "ARACNE",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "ARACNE",
        "difficulty": "medium",
        "topic": "Systems Biology",
        "explanation": "ARACNE infers regulatory networks from gene expression data, identifying transcription factor targets."
    },
    {
        "id": 397,
        "question": "Which tool is used for analyzing bisulfite sequencing data?",
        "options": [
            "Bismark",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Bismark",
        "difficulty": "medium",
        "topic": "Epigenomics",
        "explanation": "Bismark aligns and analyzes bisulfite sequencing data to study DNA methylation patterns."
    },
    {
        "id": 398,
        "question": "Which machine learning algorithm is used for survival analysis in bioinformatics?",
        "options": [
            "Cox Regression",
            "K-mer analysis",
            "Scoring matrices",
            "Dynamic programming"
        ],
        "answer": "Cox Regression",
        "difficulty": "medium",
        "topic": "Machine Learning in Bioinformatics",
        "explanation": "Cox Regression is used for survival analysis in bioinformatics, modeling time-to-event data."
    },
    {
        "id": 399,
        "question": "Which tool is used for cheminformatics in drug design?",
        "options": [
            "RDKit",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "RDKit",
        "difficulty": "medium",
        "topic": "Pharmacogenomics and Drug Design",
        "explanation": "RDKit is a Python library for cheminformatics, used for molecular analysis and drug design."
    },
    {
        "id": 400,
        "question": "Which tool is used for copy number variation detection in clinical bioinformatics?",
        "options": [
            "CNVkit",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "CNVkit",
        "difficulty": "medium",
        "topic": "Clinical and Personalized Bioinformatics",
        "explanation": "CNVkit detects copy number variations from high-throughput sequencing data in clinical bioinformatics."
    },
    {
        "id": 401,
        "question": "Which of the following best describes the scope of bioinformatics?",
        "options": [
            "Developing new laboratory instruments",
            "Analyzing and interpreting biological data using computational tools",
            "Synthesizing new biological molecules",
            "Performing clinical trials"
        ],
        "answer": "Analyzing and interpreting biological data using computational tools",
        "difficulty": "easy",
        "topic": "Introduction to Bioinformatics",
        "explanation": "Bioinformatics focuses on using computational tools to analyze and interpret biological data, such as sequences and structures."
    },
    {
        "id": 402,
        "question": "Which technological advancement significantly accelerated bioinformatics development in the 1990s?",
        "options": [
            "Invention of the internet",
            "Development of high-throughput sequencing",
            "Discovery of CRISPR",
            "Introduction of PCR"
        ],
        "answer": "Development of high-throughput sequencing",
        "difficulty": "medium",
        "topic": "Introduction to Bioinformatics",
        "explanation": "High-throughput sequencing in the 1990s generated massive datasets, necessitating advanced bioinformatics tools for analysis."
    },
    {
        "id": 403,
        "question": "Which database is a primary source for raw DNA sequence data?",
        "options": [
            "DDBJ",
            "UniProt",
            "Pfam",
            "SCOP"
        ],
        "answer": "DDBJ",
        "difficulty": "easy",
        "topic": "Biological Databases",
        "explanation": "DDBJ (DNA Data Bank of Japan) is a primary database for raw DNA sequence data, collaborating with GenBank and EMBL."
    },
    {
        "id": 404,
        "question": "What is the main purpose of the TrEMBL database?",
        "options": [
            "To store manually curated protein sequences",
            "To store automatically annotated protein sequences",
            "To store nucleotide sequences",
            "To store metabolic pathways"
        ],
        "answer": "To store automatically annotated protein sequences",
        "difficulty": "medium",
        "topic": "Biological Databases",
        "explanation": "TrEMBL contains automatically annotated protein sequences, complementing the manually curated Swiss-Prot database."
    },
    {
        "id": 405,
        "question": "What is the key difference between Needleman-Wunsch and Smith-Waterman algorithms?",
        "options": [
            "Needleman-Wunsch is for local alignment, Smith-Waterman is for global alignment",
            "Needleman-Wunsch is for global alignment, Smith-Waterman is for local alignment",
            "Both are for local alignment",
            "Both are for global alignment"
        ],
        "answer": "Needleman-Wunsch is for global alignment, Smith-Waterman is for local alignment",
        "difficulty": "medium",
        "topic": "Sequence Analysis",
        "explanation": "Needleman-Wunsch aligns entire sequences (global), while Smith-Waterman focuses on regions of high similarity (local)."
    },
    {
        "id": 406,
        "question": "Which factor is NOT considered in scoring matrices like PAM or BLOSUM?",
        "options": [
            "Amino acid substitution frequencies",
            "Evolutionary divergence",
            "Sequence length",
            "Conservation of residues"
        ],
        "answer": "Sequence length",
        "difficulty": "medium",
        "topic": "Sequence Analysis",
        "explanation": "PAM and BLOSUM matrices score substitutions based on frequency, divergence, and conservation, but not sequence length."
    },
    {
        "id": 407,
        "question": "Which tool is designed for multiple sequence alignment with high accuracy for small datasets?",
        "options": [
            "MAFFT",
            "Clustal Omega",
            "T-Coffee",
            "MUSCLE"
        ],
        "answer": "T-Coffee",
        "difficulty": "medium",
        "topic": "Sequence Analysis",
        "explanation": "T-Coffee provides high accuracy for small datasets by integrating multiple alignment methods, though it is computationally intensive."
    },
    {
        "id": 408,
        "question": "What is a key limitation of whole-exome sequencing (WES) compared to whole-genome sequencing (WGS)?",
        "options": [
            "WES is more expensive",
            "WES only sequences coding regions",
            "WES has lower sequencing depth",
            "WES requires more computational power"
        ],
        "answer": "WES only sequences coding regions",
        "difficulty": "medium",
        "topic": "Genomics and Transcriptomics",
        "explanation": "WES targets coding regions (exons), missing non-coding regions, unlike WGS which sequences the entire genome."
    },
    {
        "id": 409,
        "question": "Which tool is used for gene prediction in eukaryotic genomes?",
        "options": [
            "Glimmer",
            "GeneMark",
            "Prodigal",
            "Augustus"
        ],
        "answer": "Augustus",
        "difficulty": "medium",
        "topic": "Genomics and Transcriptomics",
        "explanation": "Augustus is a tool for gene prediction in eukaryotic genomes, using ab initio and evidence-based methods."
    },
    {
        "id": 410,
        "question": "What is the primary advantage of RNA-Seq over microarrays for transcriptomics?",
        "options": [
            "Lower cost",
            "Higher dynamic range",
            "Simpler data analysis",
            "Faster processing time"
        ],
        "answer": "Higher dynamic range",
        "difficulty": "medium",
        "topic": "Genomics and Transcriptomics",
        "explanation": "RNA-Seq has a higher dynamic range, detecting a wider range of expression levels compared to microarrays."
    },
    {
        "id": 411,
        "question": "Which instrument is critical for generating proteomics data?",
        "options": [
            "DNA sequencer",
            "Mass spectrometer",
            "Microarray scanner",
            "PCR machine"
        ],
        "answer": "Mass spectrometer",
        "difficulty": "easy",
        "topic": "Proteomics",
        "explanation": "Mass spectrometers generate proteomics data by analyzing the mass-to-charge ratios of peptides."
    },
    {
        "id": 412,
        "question": "What is the primary goal of protein quantification in proteomics?",
        "options": [
            "To determine protein structure",
            "To measure protein abundance",
            "To sequence protein genes",
            "To map protein interactions"
        ],
        "answer": "To measure protein abundance",
        "difficulty": "easy",
        "topic": "Proteomics",
        "explanation": "Protein quantification measures the abundance of proteins in a sample, often using mass spectrometry."
    },
    {
        "id": 413,
        "question": "Which method uses sequence similarity to predict protein structures?",
        "options": [
            "Ab initio modeling",
            "Threading",
            "Homology modeling",
            "Molecular dynamics"
        ],
        "answer": "Homology modeling",
        "difficulty": "medium",
        "topic": "Structural Bioinformatics",
        "explanation": "Homology modeling predicts protein structures based on similarity to known structures of related proteins."
    },
    {
        "id": 414,
        "question": "What is the primary use of PyMOL in structural bioinformatics?",
        "options": [
            "Sequence alignment",
            "Molecular visualization",
            "Gene prediction",
            "Phylogenetic analysis"
        ],
        "answer": "Molecular visualization",
        "difficulty": "easy",
        "topic": "Structural Bioinformatics",
        "explanation": "PyMOL is used for visualizing and analyzing molecular structures, such as proteins and ligands."
    },
    {
        "id": 415,
        "question": "What is the primary purpose of ortholog identification in phylogenetics?",
        "options": [
            "To map protein interactions",
            "To infer evolutionary relationships",
            "To predict gene expression",
            "To align sequences"
        ],
        "answer": "To infer evolutionary relationships",
        "difficulty": "medium",
        "topic": "Phylogenetics",
        "explanation": "Orthologs, genes related by speciation, help infer evolutionary relationships across species."
    },
    {
        "id": 416,
        "question": "Which method is used to assess the confidence of phylogenetic tree branches?",
        "options": [
            "K-mer analysis",
            "Bootstrapping",
            "Dynamic programming",
            "Scoring matrices"
        ],
        "answer": "Bootstrapping",
        "difficulty": "medium",
        "topic": "Phylogenetics",
        "explanation": "Bootstrapping resamples data to assess the confidence of phylogenetic tree branches."
    },
    {
        "id": 417,
        "question": "Which hypothesis suggests that molecular changes occur at a constant rate?",
        "options": [
            "Neutral theory",
            "Molecular clock",
            "Positive selection",
            "Purifying selection"
        ],
        "answer": "Molecular clock",
        "difficulty": "medium",
        "topic": "Molecular Evolution",
        "explanation": "The molecular clock hypothesis posits that molecular changes accumulate at a relatively constant rate over time."
    },
    {
        "id": 418,
        "question": "Which substitution model accounts for base frequency differences?",
        "options": [
            "Jukes-Cantor",
            "Kimura 2-parameter",
            "HKY",
            "F81"
        ],
        "answer": "HKY",
        "difficulty": "hard",
        "topic": "Molecular Evolution",
        "explanation": "The HKY model accounts for base frequency differences and transition/transversion rate disparities."
    },
    {
        "id": 419,
        "question": "What is the primary purpose of pathway analysis in functional genomics?",
        "options": [
            "To sequence genomes",
            "To identify enriched biological processes",
            "To predict protein structures",
            "To align sequences"
        ],
        "answer": "To identify enriched biological processes",
        "difficulty": "medium",
        "topic": "Functional Genomics",
        "explanation": "Pathway analysis identifies enriched biological processes or pathways in genomic datasets."
    },
    {
        "id": 420,
        "question": "Which tool is used for visualizing gene regulatory networks?",
        "options": [
            "Cytoscape",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Cytoscape",
        "difficulty": "medium",
        "topic": "Functional Genomics",
        "explanation": "Cytoscape visualizes and analyzes gene regulatory and other biological networks."
    },
    {
        "id": 421,
        "question": "What is the primary purpose of normalization in RNA-Seq data analysis?",
        "options": [
            "To increase sequencing depth",
            "To remove technical biases",
            "To predict protein structures",
            "To align sequences"
        ],
        "answer": "To remove technical biases",
        "difficulty": "medium",
        "topic": "Microarray and NGS Data Analysis",
        "explanation": "Normalization removes technical biases, such as sequencing depth, to ensure accurate gene expression comparisons."
    },
    {
        "id": 422,
        "question": "Which tool is used for differential expression analysis in microarrays?",
        "options": [
            "edgeR",
            "limma",
            "DESeq2",
            "STAR"
        ],
        "answer": "limma",
        "difficulty": "medium",
        "topic": "Microarray and NGS Data Analysis",
        "explanation": "limma is an R package for differential expression analysis in microarray and RNA-Seq data."
    },
    {
        "id": 423,
        "question": "What is the primary goal of network biology in systems biology?",
        "options": [
            "To sequence genomes",
            "To model biological interactions",
            "To predict protein structures",
            "To align sequences"
        ],
        "answer": "To model biological interactions",
        "difficulty": "medium",
        "topic": "Systems Biology",
        "explanation": "Network biology models interactions, such as gene or protein networks, to understand complex biological systems."
    },
    {
        "id": 424,
        "question": "Which graph theory concept is used to measure network connectivity in systems biology?",
        "options": [
            "Clustering coefficient",
            "K-mer analysis",
            "Scoring matrices",
            "Dynamic programming"
        ],
        "answer": "Clustering coefficient",
        "difficulty": "medium",
        "topic": "Systems Biology",
        "explanation": "The clustering coefficient measures the degree of connectivity between nodes in biological networks."
    },
    {
        "id": 425,
        "question": "What is the primary advantage of 16S rRNA sequencing in metagenomics?",
        "options": [
            "High sequencing depth",
            "Identification of microbial diversity",
            "Low computational cost",
            "Complete genome assembly"
        ],
        "answer": "Identification of microbial diversity",
        "difficulty": "medium",
        "topic": "Metagenomics",
        "explanation": "16S rRNA sequencing identifies microbial diversity by targeting conserved and variable regions of the 16S rRNA gene."
    },
    {
        "id": 426,
        "question": "Which tool is used for metagenomic assembly?",
        "options": [
            "MEGAHIT",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "MEGAHIT",
        "difficulty": "medium",
        "topic": "Metagenomics",
        "explanation": "MEGAHIT is a tool for de novo metagenomic assembly, optimized for complex microbial communities."
    },
    {
        "id": 427,
        "question": "What is the primary purpose of DNA methylation analysis in epigenomics?",
        "options": [
            "To sequence genomes",
            "To study gene regulation",
            "To predict protein structures",
            "To align sequences"
        ],
        "answer": "To study gene regulation",
        "difficulty": "medium",
        "topic": "Epigenomics",
        "explanation": "DNA methylation analysis studies gene regulation by identifying methylation patterns that affect gene expression."
    },
    {
        "id": 428,
        "question": "Which tool is used for peak calling in ChIP-Seq data?",
        "options": [
            "MACS2",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "MACS2",
        "difficulty": "medium",
        "topic": "Epigenomics",
        "explanation": "MACS2 identifies enriched regions (peaks) in ChIP-Seq data, mapping protein-DNA interactions."
    },
    {
        "id": 429,
        "question": "Which machine learning algorithm is suitable for high-dimensional bioinformatics data?",
        "options": [
            "K-means clustering",
            "Random Forest",
            "Needleman-Wunsch",
            "Smith-Waterman"
        ],
        "answer": "Random Forest",
        "difficulty": "medium",
        "topic": "Machine Learning in Bioinformatics",
        "explanation": "Random Forest handles high-dimensional bioinformatics data effectively, used for tasks like classification."
    },
    {
        "id": 430,
        "question": "What is the primary purpose of cross-validation in machine learning for bioinformatics?",
        "options": [
            "To align sequences",
            "To assess model performance",
            "To predict protein structures",
            "To quantify gene expression"
        ],
        "answer": "To assess model performance",
        "difficulty": "medium",
        "topic": "Machine Learning in Bioinformatics",
        "explanation": "Cross-validation assesses model performance by partitioning data into training and testing sets."
    },
    {
        "id": 431,
        "question": "What is the primary purpose of molecular docking in pharmacogenomics?",
        "options": [
            "To sequence genomes",
            "To predict drug-target interactions",
            "To predict protein structures",
            "To align sequences"
        ],
        "answer": "To predict drug-target interactions",
        "difficulty": "medium",
        "topic": "Pharmacogenomics and Drug Design",
        "explanation": "Molecular docking predicts how drugs bind to target proteins, aiding drug design."
    },
    {
        "id": 432,
        "question": "Which tool is used for cheminformatics analysis in drug design?",
        "options": [
            "RDKit",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "RDKit",
        "difficulty": "medium",
        "topic": "Pharmacogenomics and Drug Design",
        "explanation": "RDKit is a Python library for cheminformatics, used for molecular analysis in drug design."
    },
    {
        "id": 433,
        "question": "What is the primary goal of precision medicine in clinical bioinformatics?",
        "options": [
            "To align sequences",
            "To tailor treatments to individual genetic profiles",
            "To predict protein structures",
            "To quantify gene expression"
        ],
        "answer": "To tailor treatments to individual genetic profiles",
        "difficulty": "medium",
        "topic": "Clinical and Personalized Bioinformatics",
        "explanation": "Precision medicine uses genetic profiles to tailor treatments to individual patients."
    },
    {
        "id": 434,
        "question": "Which ethical issue is associated with genome-wide association studies (GWAS)?",
        "options": [
            "Data storage costs",
            "Informed consent",
            "Sequence alignment accuracy",
            "Protein structure prediction"
        ],
        "answer": "Informed consent",
        "difficulty": "medium",
        "topic": "Clinical and Personalized Bioinformatics",
        "explanation": "Informed consent is a key ethical issue in GWAS, ensuring participants understand the use of their genetic data."
    },
    {
        "id": 435,
        "question": "What is the purpose of the False Discovery Rate (FDR) in biostatistics?",
        "options": [
            "To align sequences",
            "To control false positives in multiple testing",
            "To predict protein structures",
            "To quantify gene expression"
        ],
        "answer": "To control false positives in multiple testing",
        "difficulty": "medium",
        "topic": "Biostatistics and Bioinformatics Algorithms",
        "explanation": "FDR controls the proportion of false positives in multiple hypothesis testing, common in bioinformatics."
    },
    {
        "id": 436,
        "question": "Which algorithm is used in the Expectation-Maximization method for parameter estimation?",
        "options": [
            "Dynamic programming",
            "Iterative optimization",
            "K-mer matching",
            "Scoring matrices"
        ],
        "answer": "Iterative optimization",
        "difficulty": "hard",
        "topic": "Biostatistics and Bioinformatics Algorithms",
        "explanation": "The EM algorithm uses iterative optimization to estimate parameters in probabilistic models."
    },
    {
        "id": 437,
        "question": "Which scripting language is commonly used for pipeline automation in bioinformatics?",
        "options": [
            "Bash",
            "Java",
            "C++",
            "Ruby"
        ],
        "answer": "Bash",
        "difficulty": "medium",
        "topic": "Programming and Tools in Bioinformatics",
        "explanation": "Bash is commonly used for pipeline automation in bioinformatics, scripting workflows on Unix systems."
    },
    {
        "id": 438,
        "question": "What is the primary purpose of the Biopython library?",
        "options": [
            "To predict protein structures",
            "To perform sequence analysis tasks",
            "To assemble genomes",
            "To map metabolic pathways"
        ],
        "answer": "To perform sequence analysis tasks",
        "difficulty": "medium",
        "topic": "Programming and Tools in Bioinformatics",
        "explanation": "Biopython provides tools for sequence analysis, file parsing, and bioinformatics computations."
    },
    {
        "id": 439,
        "question": "Which tool is used for reproducible bioinformatics workflows?",
        "options": [
            "Snakemake",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Snakemake",
        "difficulty": "medium",
        "topic": "Programming and Tools in Bioinformatics",
        "explanation": "Snakemake is a workflow manager for creating reproducible and scalable bioinformatics pipelines."
    },
    {
        "id": 440,
        "question": "Which database is used for protein domain annotations?",
        "options": [
            "Pfam",
            "GenBank",
            "KEGG",
            "PDB"
        ],
        "answer": "Pfam",
        "difficulty": "medium",
        "topic": "Biological Databases",
        "explanation": "Pfam stores protein domain families and their alignments, aiding in functional annotation."
    },
    {
        "id": 441,
        "question": "Which file format is used to store variant call data?",
        "options": [
            "VCF",
            "FASTA",
            "GFF",
            "BAM"
        ],
        "answer": "VCF",
        "difficulty": "medium",
        "topic": "Biological Databases",
        "explanation": "VCF (Variant Call Format) stores genetic variant data, such as SNPs and indels."
    },
    {
        "id": 442,
        "question": "What is the purpose of gap penalties in sequence alignment algorithms?",
        "options": [
            "To increase alignment speed",
            "To penalize insertions or deletions",
            "To predict protein structures",
            "To quantify gene expression"
        ],
        "answer": "To penalize insertions or deletions",
        "difficulty": "medium",
        "topic": "Sequence Analysis",
        "explanation": "Gap penalties penalize insertions or deletions to balance alignment accuracy and biological relevance."
    },
    {
        "id": 443,
        "question": "Which tool is used for motif discovery in protein sequences?",
        "options": [
            "MEME",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "MEME",
        "difficulty": "medium",
        "topic": "Sequence Analysis",
        "explanation": "MEME discovers conserved motifs in protein or DNA sequences, useful for functional analysis."
    },
    {
        "id": 444,
        "question": "What is the primary purpose of de novo genome assembly?",
        "options": [
            "To align sequences",
            "To reconstruct genomes without a reference",
            "To predict protein structures",
            "To quantify gene expression"
        ],
        "answer": "To reconstruct genomes without a reference",
        "difficulty": "medium",
        "topic": "Genomics and Transcriptomics",
        "explanation": "De novo genome assembly reconstructs genomes from sequencing reads without a reference genome."
    },
    {
        "id": 445,
        "question": "Which tool is used for transcript quantification in RNA-Seq?",
        "options": [
            "Salmon",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Salmon",
        "difficulty": "medium",
        "topic": "Genomics and Transcriptomics",
        "explanation": "Salmon quantifies transcript expression levels from RNA-Seq data, using lightweight alignment."
    },
    {
        "id": 446,
        "question": "Which tool is used for peptide identification in proteomics?",
        "options": [
            "Mascot",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Mascot",
        "difficulty": "medium",
        "topic": "Proteomics",
        "explanation": "Mascot identifies peptides from mass spectrometry data by matching spectra to database sequences."
    },
    {
        "id": 447,
        "question": "Which tool is used for protein-ligand docking in structural bioinformatics?",
        "options": [
            "AutoDock",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "AutoDock",
        "difficulty": "medium",
        "topic": "Structural Bioinformatics",
        "explanation": "AutoDock predicts protein-ligand interactions, aiding in drug design and structural studies."
    },
    {
        "id": 448,
        "question": "Which tool is used for constructing phylogenetic trees using distance-based methods?",
        "options": [
            "PHYLIP",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "PHYLIP",
        "difficulty": "medium",
        "topic": "Phylogenetics",
        "explanation": "PHYLIP constructs phylogenetic trees using distance-based methods like Neighbor-Joining."
    },
    {
        "id": 449,
        "question": "Which evolutionary concept describes the fixation of beneficial mutations?",
        "options": [
            "Neutral drift",
            "Positive selection",
            "Purifying selection",
            "Molecular clock"
        ],
        "answer": "Positive selection",
        "difficulty": "medium",
        "topic": "Molecular Evolution",
        "explanation": "Positive selection drives the fixation of beneficial mutations that confer adaptive advantages."
    },
    {
        "id": 450,
        "question": "Which tool is used for gene set enrichment analysis in functional genomics?",
        "options": [
            "GSEA",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "GSEA",
        "difficulty": "medium",
        "topic": "Functional Genomics",
        "explanation": "GSEA identifies enriched gene sets or pathways in expression data, aiding functional interpretation."
    },
    {
        "id": 451,
        "question": "Which tool is used for quality control of NGS data?",
        "options": [
            "FastQC",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "FastQC",
        "difficulty": "medium",
        "topic": "Microarray and NGS Data Analysis",
        "explanation": "FastQC evaluates the quality of NGS data, providing metrics like base quality and sequence content."
    },
    {
        "id": 452,
        "question": "Which tool is used for metabolic network analysis in systems biology?",
        "options": [
            "COBRApy",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "COBRApy",
        "difficulty": "medium",
        "topic": "Systems Biology",
        "explanation": "COBRApy analyzes metabolic networks, predicting flux distributions and metabolic capabilities."
    },
    {
        "id": 453,
        "question": "Which tool is used for taxonomic classification in metagenomics?",
        "options": [
            "Kraken2",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Kraken2",
        "difficulty": "medium",
        "topic": "Metagenomics",
        "explanation": "Kraken2 classifies metagenomic sequences into taxonomic groups using k-mer-based matching."
    },
    {
        "id": 454,
        "question": "Which tool is used for analyzing ATAC-Seq data in epigenomics?",
        "options": [
            "Homer",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Homer",
        "difficulty": "medium",
        "topic": "Epigenomics",
        "explanation": "Homer analyzes ATAC-Seq data to identify open chromatin regions and transcription factor binding sites."
    },
    {
        "id": 455,
        "question": "Which machine learning algorithm is used for clustering in bioinformatics?",
        "options": [
            "K-means clustering",
            "Needleman-Wunsch",
            "Smith-Waterman",
            "Dynamic programming"
        ],
        "answer": "K-means clustering",
        "difficulty": "medium",
        "topic": "Machine Learning in Bioinformatics",
        "explanation": "K-means clustering groups similar data points, such as gene expression profiles, in bioinformatics."
    },
    {
        "id": 456,
        "question": "Which tool is used for molecular dynamics simulations in drug design?",
        "options": [
            "GROMACS",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "GROMACS",
        "difficulty": "medium",
        "topic": "Pharmacogenomics and Drug Design",
        "explanation": "GROMACS simulates molecular dynamics, studying protein-ligand interactions in drug design."
    },
    {
        "id": 457,
        "question": "Which tool is used for somatic mutation detection in cancer genomics?",
        "options": [
            "VarScan",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "VarScan",
        "difficulty": "medium",
        "topic": "Clinical and Personalized Bioinformatics",
        "explanation": "VarScan detects somatic mutations by comparing tumor and normal samples in cancer genomics."
    },
    {
        "id": 458,
        "question": "Which algorithm is central to the BLAST tool for sequence similarity search?",
        "options": [
            "Heuristic search",
            "Dynamic programming",
            "K-mer matching",
            "Scoring matrices"
        ],
        "answer": "Heuristic search",
        "difficulty": "medium",
        "topic": "Biostatistics and Bioinformatics Algorithms",
        "explanation": "BLAST uses a heuristic search to quickly identify similar sequences in large databases."
    },
    {
        "id": 459,
        "question": "Which tool is used for cloud-based bioinformatics analysis?",
        "options": [
            "Galaxy",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Galaxy",
        "difficulty": "medium",
        "topic": "Programming and Tools in Bioinformatics",
        "explanation": "Galaxy provides a cloud-based platform for bioinformatics analysis and workflow management."
    },
    {
        "id": 460,
        "question": "Which database stores functional annotations for protein families?",
        "options": [
            "InterPro",
            "GenBank",
            "KEGG",
            "PDB"
        ],
        "answer": "InterPro",
        "difficulty": "medium",
        "topic": "Biological Databases",
        "explanation": "InterPro integrates functional annotations for protein families, domains, and sites."
    },
    {
        "id": 461,
        "question": "Which tool is used for aligning short reads to a reference genome?",
        "options": [
            "Bowtie2",
            "UPGMA",
            "QIIME",
            "DESeq2"
        ],
        "answer": "Bowtie2",
        "difficulty": "medium",
        "topic": "Sequence Analysis",
        "explanation": "Bowtie2 aligns short sequencing reads to a reference genome, used in NGS data analysis."
    },
    {
        "id": 462,
        "question": "Which tool is used for detecting structural variants in genomics?",
        "options": [
            "Lumpy",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Lumpy",
        "difficulty": "medium",
        "topic": "Genomics and Transcriptomics",
        "explanation": "Lumpy detects structural variants, such as deletions and translocations, from NGS data."
    },
    {
        "id": 463,
        "question": "Which tool is used for protein function prediction in proteomics?",
        "options": [
            "Blast2GO",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Blast2GO",
        "difficulty": "medium",
        "topic": "Proteomics",
        "explanation": "Blast2GO predicts protein functions using BLAST searches and gene ontology annotations."
    },
    {
        "id": 464,
        "question": "Which tool is used for protein secondary structure prediction?",
        "options": [
            "PSIPRED",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "PSIPRED",
        "difficulty": "medium",
        "topic": "Structural Bioinformatics",
        "explanation": "PSIPRED predicts protein secondary structures using neural networks and sequence profiles."
    },
    {
        "id": 465,
        "question": "Which tool is used for phylogenetic tree visualization?",
        "options": [
            "FigTree",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "FigTree",
        "difficulty": "medium",
        "topic": "Phylogenetics",
        "explanation": "FigTree visualizes and annotates phylogenetic trees, aiding in evolutionary analysis."
    },
    {
        "id": 466,
        "question": "Which tool is used for gene fusion detection in RNA-Seq?",
        "options": [
            "STAR-Fusion",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "STAR-Fusion",
        "difficulty": "medium",
        "topic": "Microarray and NGS Data Analysis",
        "explanation": "STAR-Fusion detects gene fusions in RNA-Seq data, identifying chimeric transcripts."
    },
    {
        "id": 467,
        "question": "Which tool is used for functional profiling in metagenomics?",
        "options": [
            "HUMAnN",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "HUMAnN",
        "difficulty": "medium",
        "topic": "Metagenomics",
        "explanation": "HUMAnN profiles functional pathways in metagenomic data, annotating microbial functions."
    },
    {
        "id": 468,
        "question": "Which tool is used for bisulfite sequencing analysis in epigenomics?",
        "options": [
            "Bismark",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Bismark",
        "difficulty": "medium",
        "topic": "Epigenomics",
        "explanation": "Bismark aligns and analyzes bisulfite sequencing data to study DNA methylation."
    },
    {
        "id": 469,
        "question": "Which machine learning technique is used for dimensionality reduction in bioinformatics?",
        "options": [
            "Principal Component Analysis",
            "K-mer analysis",
            "Scoring matrices",
            "Dynamic programming"
        ],
        "answer": "Principal Component Analysis",
        "difficulty": "medium",
        "topic": "Machine Learning in Bioinformatics",
        "explanation": "PCA reduces the dimensionality of bioinformatics data, aiding visualization and analysis."
    },
    {
        "id": 470,
        "question": "Which tool is used for GWAS analysis in clinical bioinformatics?",
        "options": [
            "PLINK",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "PLINK",
        "difficulty": "medium",
        "topic": "Clinical and Personalized Bioinformatics",
        "explanation": "PLINK analyzes genetic variants in genome-wide association studies (GWAS)."
    },
    {
        "id": 471,
        "question": "Which database stores gene expression datasets?",
        "options": [
            "GEO",
            "GenBank",
            "KEGG",
            "PDB"
        ],
        "answer": "GEO",
        "difficulty": "medium",
        "topic": "Biological Databases",
        "explanation": "GEO (Gene Expression Omnibus) stores high-throughput gene expression datasets."
    },
    {
        "id": 472,
        "question": "Which tool is used for multiple sequence alignment of DNA sequences?",
        "options": [
            "Clustal Omega",
            "QIIME",
            "DESeq2",
            "SPAdes"
        ],
        "answer": "Clustal Omega",
        "difficulty": "medium",
        "topic": "Sequence Analysis",
        "explanation": "Clustal Omega is a fast and scalable tool for multiple sequence alignment of DNA or protein sequences."
    },
    {
        "id": 473,
        "question": "Which tool is used for genome annotation in prokaryotes?",
        "options": [
            "Prokka",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Prokka",
        "difficulty": "medium",
        "topic": "Genomics and Transcriptomics",
        "explanation": "Prokka annotates prokaryotic genomes, identifying genes and functional elements."
    },
    {
        "id": 474,
        "question": "Which tool is used for protein interaction network analysis?",
        "options": [
            "STRING",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "STRING",
        "difficulty": "medium",
        "topic": "Proteomics",
        "explanation": "STRING predicts and visualizes protein-protein interactions based on experimental and computational data."
    },
    {
        "id": 475,
        "question": "Which tool is used for ab initio protein structure prediction?",
        "options": [
            "Rosetta",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Rosetta",
        "difficulty": "medium",
        "topic": "Structural Bioinformatics",
        "explanation": "Rosetta predicts protein structures ab initio, using computational modeling without templates."
    },
    {
        "id": 476,
        "question": "Which tool is used for phylogenetic analysis of large datasets?",
        "options": [
            "FastTree",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "FastTree",
        "difficulty": "medium",
        "topic": "Phylogenetics",
        "explanation": "FastTree constructs phylogenetic trees efficiently for large datasets using approximate maximum likelihood."
    },
    {
        "id": 477,
        "question": "Which tool is used for pathway enrichment analysis in functional genomics?",
        "options": [
            "DAVID",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "DAVID",
        "difficulty": "medium",
        "topic": "Functional Genomics",
        "explanation": "DAVID performs pathway enrichment analysis, identifying overrepresented biological processes."
    },
    {
        "id": 478,
        "question": "Which tool is used for single-cell RNA-Seq analysis?",
        "options": [
            "Seurat",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Seurat",
        "difficulty": "medium",
        "topic": "Microarray and NGS Data Analysis",
        "explanation": "Seurat analyzes single-cell RNA-Seq data, identifying cell types and expression patterns."
    },
    {
        "id": 479,
        "question": "Which tool is used for regulatory network inference in systems biology?",
        "options": [
            "ARACNE",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "ARACNE",
        "difficulty": "medium",
        "topic": "Systems Biology",
        "explanation": "ARACNE infers regulatory networks from gene expression data, identifying transcription factor interactions."
    },
    {
        "id": 480,
        "question": "Which tool is used for metagenomic functional annotation?",
        "options": [
            "MG-RAST",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "MG-RAST",
        "difficulty": "medium",
        "topic": "Metagenomics",
        "explanation": "MG-RAST annotates metagenomic sequences with functional information, analyzing microbial communities."
    },
    {
        "id": 481,
        "question": "Which tool is used for analyzing Hi-C data in epigenomics?",
        "options": [
            "HiC-Pro",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "HiC-Pro",
        "difficulty": "medium",
        "topic": "Epigenomics",
        "explanation": "HiC-Pro processes Hi-C data to study 3D genome organization and chromatin interactions."
    },
    {
        "id": 482,
        "question": "Which machine learning algorithm is used for variant prioritization in genomics?",
        "options": [
            "Gradient Boosting",
            "K-mer analysis",
            "Scoring matrices",
            "Dynamic programming"
        ],
        "answer": "Gradient Boosting",
        "difficulty": "medium",
        "topic": "Machine Learning in Bioinformatics",
        "explanation": "Gradient Boosting prioritizes genetic variants by their potential impact, used in genomic studies."
    },
    {
        "id": 483,
        "question": "Which tool is used for virtual screening in drug design?",
        "options": [
            "Schrödinger",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Schrödinger",
        "difficulty": "medium",
        "topic": "Pharmacogenomics and Drug Design",
        "explanation": "Schrödinger performs virtual screening, predicting drug-target interactions for drug design."
    },
    {
        "id": 484,
        "question": "Which tool is used for copy number variation detection in clinical bioinformatics?",
        "options": [
            "CNVkit",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "CNVkit",
        "difficulty": "medium",
        "topic": "Clinical and Personalized Bioinformatics",
        "explanation": "CNVkit detects copy number variations from NGS data in clinical bioinformatics."
    },
    {
        "id": 485,
        "question": "Which algorithm is used for hierarchical clustering in bioinformatics?",
        "options": [
            "Agglomerative clustering",
            "Dynamic programming",
            "K-mer matching",
            "Scoring matrices"
        ],
        "answer": "Agglomerative clustering",
        "difficulty": "medium",
        "topic": "Biostatistics and Bioinformatics Algorithms",
        "explanation": "Agglomerative clustering builds hierarchical clusters by iteratively merging similar data points."
    },
    {
        "id": 486,
        "question": "Which tool is used for high-performance computing in bioinformatics?",
        "options": [
            "SLURM",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "SLURM",
        "difficulty": "medium",
        "topic": "Programming and Tools in Bioinformatics",
        "explanation": "SLURM manages workloads on high-performance computing clusters for bioinformatics analyses."
    },
    {
        "id": 487,
        "question": "Which database stores transcription factor binding site annotations?",
        "options": [
            "JASPAR",
            "GenBank",
            "KEGG",
            "PDB"
        ],
        "answer": "JASPAR",
        "difficulty": "medium",
        "topic": "Biological Databases",
        "explanation": "JASPAR stores profiles of transcription factor binding sites, used in regulatory genomics."
    },
    {
        "id": 488,
        "question": "Which tool is used for de novo transcript assembly in RNA-Seq?",
        "options": [
            "Trinity",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Trinity",
        "difficulty": "medium",
        "topic": "Genomics and Transcriptomics",
        "explanation": "Trinity assembles transcripts de novo from RNA-Seq data without a reference genome."
    },
    {
        "id": 489,
        "question": "Which tool is used for protein quantification in proteomics?",
        "options": [
            "MaxQuant",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "MaxQuant",
        "difficulty": "medium",
        "topic": "Proteomics",
        "explanation": "MaxQuant quantifies proteins from mass spectrometry data in proteomics studies."
    },
    {
        "id": 490,
        "question": "Which tool is used for protein structure visualization?",
        "options": [
            "Chimera",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Chimera",
        "difficulty": "medium",
        "topic": "Structural Bioinformatics",
        "explanation": "Chimera visualizes protein structures and molecular interactions in structural bioinformatics."
    },
    {
        "id": 491,
        "question": "Which tool is used for phylogenetic analysis of molecular data?",
        "options": [
            "MEGA",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "MEGA",
        "difficulty": "medium",
        "topic": "Phylogenetics",
        "explanation": "MEGA performs phylogenetic analysis, constructing trees using various methods."
    },
    {
        "id": 492,
        "question": "Which tool is used for differential splicing analysis in RNA-Seq?",
        "options": [
            "SUPPA2",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "SUPPA2",
        "difficulty": "medium",
        "topic": "Microarray and NGS Data Analysis",
        "explanation": "SUPPA2 analyzes differential splicing events in RNA-Seq data, studying alternative splicing."
    },
    {
        "id": 493,
        "question": "Which tool is used for metagenomic binning?",
        "options": [
            "MetaBAT",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "MetaBAT",
        "difficulty": "medium",
        "topic": "Metagenomics",
        "explanation": "MetaBAT bins metagenomic sequences into draft genomes, reconstructing microbial genomes."
    },
    {
        "id": 494,
        "question": "Which tool is used for differential methylation analysis in epigenomics?",
        "options": [
            "methylKit",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "methylKit",
        "difficulty": "medium",
        "topic": "Epigenomics",
        "explanation": "methylKit analyzes differential DNA methylation from bisulfite sequencing data."
    },
    {
        "id": 495,
        "question": "Which machine learning algorithm is used for survival analysis in bioinformatics?",
        "options": [
            "Cox Regression",
            "K-mer analysis",
            "Scoring matrices",
            "Dynamic programming"
        ],
        "answer": "Cox Regression",
        "difficulty": "medium",
        "topic": "Machine Learning in Bioinformatics",
        "explanation": "Cox Regression models time-to-event data in survival analysis for bioinformatics."
    },
    {
        "id": 496,
        "question": "Which tool is used for QSAR modeling in drug design?",
        "options": [
            "OpenBabel",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "OpenBabel",
        "difficulty": "medium",
        "topic": "Pharmacogenomics and Drug Design",
        "explanation": "OpenBabel supports QSAR modeling by analyzing molecular structures in drug design."
    },
    {
        "id": 497,
        "question": "Which tool is used for variant annotation in clinical bioinformatics?",
        "options": [
            "ANNOVAR",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "ANNOVAR",
        "difficulty": "medium",
        "topic": "Clinical and Personalized Bioinformatics",
        "explanation": "ANNOVAR annotates genetic variants with functional and clinical information."
    },
    {
        "id": 498,
        "question": "Which algorithm is used in Hidden Markov Models for gene prediction?",
        "options": [
            "Viterbi algorithm",
            "Dynamic programming",
            "K-mer matching",
            "Scoring matrices"
        ],
        "answer": "Viterbi algorithm",
        "difficulty": "hard",
        "topic": "Biostatistics and Bioinformatics Algorithms",
        "explanation": "The Viterbi algorithm finds the most likely sequence of hidden states in HMMs for gene prediction."
    },
    {
        "id": 499,
        "question": "Which tool is used for workflow automation in bioinformatics?",
        "options": [
            "Nextflow",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Nextflow",
        "difficulty": "medium",
        "topic": "Programming and Tools in Bioinformatics",
        "explanation": "Nextflow automates and scales bioinformatics workflows, supporting complex pipelines."
    },
    {
        "id": 500,
        "question": "Which database stores RNA secondary structure predictions?",
        "options": [
            "RNAcentral",
            "GenBank",
            "KEGG",
            "PDB"
        ],
        "answer": "RNAcentral",
        "difficulty": "medium",
        "topic": "Biological Databases",
        "explanation": "RNAcentral stores non-coding RNA sequences and secondary structure predictions."
    },
    {
        "id": 501,
        "question": "What is a primary goal of bioinformatics in modern biology?",
        "options": [
            "Developing new surgical techniques",
            "Integrating computational tools with biological data",
            "Synthesizing artificial cells",
            "Designing laboratory equipment"
        ],
        "answer": "Integrating computational tools with biological data",
        "difficulty": "easy",
        "topic": "Introduction to Bioinformatics",
        "explanation": "Bioinformatics aims to integrate computational tools with biological data to analyze and interpret complex datasets."
    },
    {
        "id": 502,
        "question": "Which milestone in bioinformatics was achieved by the completion of the Human Genome Project?",
        "options": [
            "Development of CRISPR-Cas9",
            "Sequencing of the entire human genome",
            "Discovery of microRNAs",
            "Invention of DNA microarrays"
        ],
        "answer": "Sequencing of the entire human genome",
        "difficulty": "medium",
        "topic": "Introduction to Bioinformatics",
        "explanation": "The Human Genome Project sequenced the entire human genome, a landmark achievement that advanced bioinformatics."
    },
    {
        "id": 503,
        "question": "Which database serves as a primary repository for RNA sequence data?",
        "options": [
            "GenBank",
            "UniProt",
            "RNAcentral",
            "SCOP"
        ],
        "answer": "RNAcentral",
        "difficulty": "medium",
        "topic": "Biological Databases",
        "explanation": "RNAcentral is a primary repository for non-coding RNA sequences and annotations."
    },
    {
        "id": 504,
        "question": "What is the primary function of the Ensembl database?",
        "options": [
            "To store protein structures",
            "To provide genome annotations",
            "To map metabolic pathways",
            "To store microRNA targets"
        ],
        "answer": "To provide genome annotations",
        "difficulty": "medium",
        "topic": "Biological Databases",
        "explanation": "Ensembl provides genome annotations, including gene structures and functional information, for multiple species."
    },
    {
        "id": 505,
        "question": "Which parameter is critical for optimizing sequence alignment accuracy?",
        "options": [
            "Sequence length",
            "Gap penalty",
            "K-mer size",
            "Read depth"
        ],
        "answer": "Gap penalty",
        "difficulty": "medium",
        "topic": "Sequence Analysis",
        "explanation": "Gap penalties balance insertions and deletions in sequence alignments, optimizing accuracy."
    },
    {
        "id": 506,
        "question": "Which tool is optimized for aligning large genomic sequences?",
        "options": [
            "BLAST",
            "MUMmer",
            "ClustalW",
            "MAFFT"
        ],
        "answer": "MUMmer",
        "difficulty": "medium",
        "topic": "Sequence Analysis",
        "explanation": "MUMmer is designed for aligning large genomic sequences efficiently, using suffix trees."
    },
    {
        "id": 507,
        "question": "What is the primary advantage of progressive alignment in multiple sequence alignment?",
        "options": [
            "High computational speed",
            "Guaranteed optimal alignment",
            "Minimal memory usage",
            "Ease of parallelization"
        ],
        "answer": "High computational speed",
        "difficulty": "medium",
        "topic": "Sequence Analysis",
        "explanation": "Progressive alignment, used in tools like ClustalW, is computationally fast but may not always yield optimal results."
    },
    {
        "id": 508,
        "question": "Which sequencing platform is known for producing long reads?",
        "options": [
            "Illumina",
            "PacBio",
            "Ion Torrent",
            "454 Pyrosequencing"
        ],
        "answer": "PacBio",
        "difficulty": "medium",
        "topic": "Genomics and Transcriptomics",
        "explanation": "PacBio sequencing produces long reads, useful for resolving complex genomic regions."
    },
    {
        "id": 509,
        "question": "Which tool is used for variant calling in high-throughput sequencing data?",
        "options": [
            "FreeBayes",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "FreeBayes",
        "difficulty": "medium",
        "topic": "Genomics and Transcriptomics",
        "explanation": "FreeBayes identifies genetic variants, such as SNPs and indels, from high-throughput sequencing data."
    },
    {
        "id": 510,
        "question": "What is the primary purpose of alternative splicing analysis in transcriptomics?",
        "options": [
            "To sequence genomes",
            "To identify different mRNA isoforms",
            "To predict protein structures",
            "To align sequences"
        ],
        "answer": "To identify different mRNA isoforms",
        "difficulty": "medium",
        "topic": "Genomics and Transcriptomics",
        "explanation": "Alternative splicing analysis identifies different mRNA isoforms produced from a single gene."
    },
    {
        "id": 511,
        "question": "Which technique is used to separate proteins before mass spectrometry in proteomics?",
        "options": [
            "PCR",
            "Gel electrophoresis",
            "DNA sequencing",
            "Microarray hybridization"
        ],
        "answer": "Gel electrophoresis",
        "difficulty": "easy",
        "topic": "Proteomics",
        "explanation": "Gel electrophoresis separates proteins by size or charge before mass spectrometry analysis."
    },
    {
        "id": 512,
        "question": "Which tool is used for analyzing post-translational modifications in proteomics?",
        "options": [
            "X!Tandem",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "X!Tandem",
        "difficulty": "medium",
        "topic": "Proteomics",
        "explanation": "X!Tandem identifies peptides and post-translational modifications from mass spectrometry data."
    },
    {
        "id": 513,
        "question": "Which tool is used for homology modeling in structural bioinformatics?",
        "options": [
            "MODELLER",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "MODELLER",
        "difficulty": "medium",
        "topic": "Structural Bioinformatics",
        "explanation": "MODELLER predicts protein 3D structures using homology modeling based on template structures."
    },
    {
        "id": 514,
        "question": "What is the primary purpose of Ramachandran plots in structural bioinformatics?",
        "options": [
            "To align sequences",
            "To evaluate protein structure quality",
            "To predict gene expression",
            "To map protein interactions"
        ],
        "answer": "To evaluate protein structure quality",
        "difficulty": "medium",
        "topic": "Structural Bioinformatics",
        "explanation": "Ramachandran plots assess protein structure quality by analyzing backbone dihedral angles."
    },
    {
        "id": 515,
        "question": "Which phylogenetic method relies on minimizing evolutionary changes?",
        "options": [
            "Maximum likelihood",
            "Neighbor-joining",
            "Maximum parsimony",
            "Bayesian inference"
        ],
        "answer": "Maximum parsimony",
        "difficulty": "medium",
        "topic": "Phylogenetics",
        "explanation": "Maximum parsimony constructs phylogenetic trees by minimizing the number of evolutionary changes."
    },
    {
        "id": 516,
        "question": "Which tool is used for phylogenetic analysis with large datasets?",
        "options": [
            "FastTree",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "FastTree",
        "difficulty": "medium",
        "topic": "Phylogenetics",
        "explanation": "FastTree efficiently constructs phylogenetic trees for large datasets using approximate maximum likelihood."
    },
    {
        "id": 517,
        "question": "Which metric is used to estimate evolutionary distances in molecular evolution?",
        "options": [
            "P-distance",
            "K-mer frequency",
            "Gap penalty",
            "Read depth"
        ],
        "answer": "P-distance",
        "difficulty": "medium",
        "topic": "Molecular Evolution",
        "explanation": "P-distance estimates evolutionary distances by calculating the proportion of differing sites between sequences."
    },
    {
        "id": 518,
        "question": "What is the primary evidence for positive selection in molecular evolution?",
        "options": [
            "High sequence conservation",
            "Rapid sequence divergence",
            "Random genetic drift",
            "Low mutation rates"
        ],
        "answer": "Rapid sequence divergence",
        "difficulty": "medium",
        "topic": "Molecular Evolution",
        "explanation": "Positive selection is evidenced by rapid sequence divergence in regions under adaptive pressure."
    },
    {
        "id": 519,
        "question": "Which tool is used for functional annotation of genomic data?",
        "options": [
            "eggNOG",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "eggNOG",
        "difficulty": "medium",
        "topic": "Functional Genomics",
        "explanation": "eggNOG provides functional annotations for orthologous groups in genomic data."
    },
    {
        "id": 520,
        "question": "What is the primary purpose of the Reactome database in functional genomics?",
        "options": [
            "To store protein structures",
            "To map biological pathways",
            "To align sequences",
            "To quantify gene expression"
        ],
        "answer": "To map biological pathways",
        "difficulty": "medium",
        "topic": "Functional Genomics",
        "explanation": "Reactome maps biological pathways, aiding in the functional analysis of genomic data."
    },
    {
        "id": 521,
        "question": "Which method is used to normalize RNA-Seq data for gene length and sequencing depth?",
        "options": [
            "TPM",
            "Z-score",
            "Log transformation",
            "Median normalization"
        ],
        "answer": "TPM",
        "difficulty": "medium",
        "topic": "Microarray and NGS Data Analysis",
        "explanation": "TPM (Transcripts Per Million) normalizes RNA-Seq data for gene length and sequencing depth."
    },
    {
        "id": 522,
        "question": "Which tool is used for principal component analysis in gene expression data?",
        "options": [
            "R",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "R",
        "difficulty": "medium",
        "topic": "Microarray and NGS Data Analysis",
        "explanation": "R is commonly used for principal component analysis to visualize gene expression data."
    },
    {
        "id": 523,
        "question": "Which tool is used for flux balance analysis in systems biology?",
        "options": [
            "COBRApy",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "COBRApy",
        "difficulty": "medium",
        "topic": "Systems Biology",
        "explanation": "COBRApy performs flux balance analysis to predict metabolic fluxes in systems biology."
    },
    {
        "id": 524,
        "question": "What is the primary purpose of modularity analysis in biological networks?",
        "options": [
            "To align sequences",
            "To identify functional clusters",
            "To predict protein structures",
            "To quantify gene expression"
        ],
        "answer": "To identify functional clusters",
        "difficulty": "medium",
        "topic": "Systems Biology",
        "explanation": "Modularity analysis identifies functional clusters or modules in biological networks, revealing organizational patterns."
    },
    {
        "id": 525,
        "question": "What is the primary challenge in shotgun metagenomics?",
        "options": [
            "Low sequencing depth",
            "High computational complexity",
            "Excessive reference databases",
            "Simple data interpretation"
        ],
        "answer": "High computational complexity",
        "difficulty": "medium",
        "topic": "Metagenomics",
        "explanation": "Shotgun metagenomics involves high computational complexity due to the large volume and diversity of sequencing data."
    },
    {
        "id": 526,
        "question": "Which tool is used for metagenomic binning?",
        "options": [
            "MetaBAT",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "MetaBAT",
        "difficulty": "medium",
        "topic": "Metagenomics",
        "explanation": "MetaBAT bins metagenomic sequences into draft genomes, aiding microbial genome reconstruction."
    },
    {
        "id": 527,
        "question": "Which epigenetic modification is commonly studied using bisulfite sequencing?",
        "options": [
            "Histone acetylation",
            "DNA methylation",
            "Chromatin remodeling",
            "RNA editing"
        ],
        "answer": "DNA methylation",
        "difficulty": "medium",
        "topic": "Epigenomics",
        "explanation": "Bisulfite sequencing is used to study DNA methylation, a key epigenetic modification."
    },
    {
        "id": 528,
        "question": "Which tool is used for analyzing histone modification ChIP-Seq data?",
        "options": [
            "SICER",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "SICER",
        "difficulty": "medium",
        "topic": "Epigenomics",
        "explanation": "SICER identifies broad enrichment regions in histone modification ChIP-Seq data."
    },
    {
        "id": 529,
        "question": "Which machine learning algorithm is used for predicting gene regulatory interactions?",
        "options": [
            "Support Vector Machines",
            "K-mer analysis",
            "Scoring matrices",
            "Dynamic programming"
        ],
        "answer": "Support Vector Machines",
        "difficulty": "medium",
        "topic": "Machine Learning in Bioinformatics",
        "explanation": "Support Vector Machines predict gene regulatory interactions by classifying complex genomic features."
    },
    {
        "id": 530,
        "question": "What is the primary purpose of feature selection in machine learning for bioinformatics?",
        "options": [
            "To increase data complexity",
            "To reduce irrelevant variables",
            "To align sequences",
            "To predict protein structures"
        ],
        "answer": "To reduce irrelevant variables",
        "difficulty": "medium",
        "topic": "Machine Learning in Bioinformatics",
        "explanation": "Feature selection reduces irrelevant variables, improving model performance in bioinformatics."
    },
    {
        "id": 531,
        "question": "Which genetic variant is most relevant to pharmacogenomics studies?",
        "options": [
            "Copy number variations",
            "Single nucleotide polymorphisms",
            "Structural variants",
            "Microsatellite repeats"
        ],
        "answer": "Single nucleotide polymorphisms",
        "difficulty": "medium",
        "topic": "Pharmacogenomics and Drug Design",
        "explanation": "SNPs are most relevant to pharmacogenomics, influencing drug metabolism and response."
    },
    {
        "id": 532,
        "question": "Which tool is used for molecular docking in drug design?",
        "options": [
            "Vina",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Vina",
        "difficulty": "medium",
        "topic": "Pharmacogenomics and Drug Design",
        "explanation": "AutoDock Vina predicts protein-ligand binding poses, aiding drug design."
    },
    {
        "id": 533,
        "question": "What is the primary purpose of tumor mutation burden analysis in clinical bioinformatics?",
        "options": [
            "To align sequences",
            "To predict immunotherapy response",
            "To predict protein structures",
            "To quantify gene expression"
        ],
        "answer": "To predict immunotherapy response",
        "difficulty": "medium",
        "topic": "Clinical and Personalized Bioinformatics",
        "explanation": "Tumor mutation burden analysis predicts immunotherapy response by quantifying mutation load."
    },
    {
        "id": 534,
        "question": "Which regulatory framework governs the use of genetic data in clinical bioinformatics?",
        "options": [
            "GDPR",
            "TCP/IP",
            "ISO 9001",
            "HTTP"
        ],
        "answer": "GDPR",
        "difficulty": "medium",
        "topic": "Clinical and Personalized Bioinformatics",
        "explanation": "GDPR governs the use of genetic data, ensuring privacy and consent in clinical bioinformatics."
    },
    {
        "id": 535,
        "question": "Which statistical test is used to compare gene expression between two groups?",
        "options": [
            "T-test",
            "K-mer analysis",
            "Scoring matrices",
            "Dynamic programming"
        ],
        "answer": "T-test",
        "difficulty": "medium",
        "topic": "Biostatistics and Bioinformatics Algorithms",
        "explanation": "The T-test compares gene expression means between two groups, assessing statistical significance."
    },
    {
        "id": 536,
        "question": "Which algorithm is used for sequence annotation in Hidden Markov Models?",
        "options": [
            "Baum-Welch algorithm",
            "Dynamic programming",
            "K-mer matching",
            "Scoring matrices"
        ],
        "answer": "Baum-Welch algorithm",
        "difficulty": "hard",
        "topic": "Biostatistics and Bioinformatics Algorithms",
        "explanation": "The Baum-Welch algorithm trains HMMs for sequence annotation by optimizing model parameters."
    },
    {
        "id": 537,
        "question": "Which programming language is widely used for machine learning in bioinformatics?",
        "options": [
            "Python",
            "Java",
            "C++",
            "Perl"
        ],
        "answer": "Python",
        "difficulty": "easy",
        "topic": "Programming and Tools in Bioinformatics",
        "explanation": "Python is widely used for machine learning in bioinformatics due to its extensive libraries."
    },
    {
        "id": 538,
        "question": "What is the primary purpose of the BioJava library?",
        "options": [
            "To predict protein structures",
            "To perform sequence analysis tasks",
            "To assemble genomes",
            "To map metabolic pathways"
        ],
        "answer": "To perform sequence analysis tasks",
        "difficulty": "medium",
        "topic": "Programming and Tools in Bioinformatics",
        "explanation": "BioJava provides tools for sequence analysis, structure manipulation, and bioinformatics computations."
    },
    {
        "id": 539,
        "question": "Which tool is used for containerized bioinformatics workflows?",
        "options": [
            "Docker",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Docker",
        "difficulty": "medium",
        "topic": "Programming and Tools in Bioinformatics",
        "explanation": "Docker containerizes bioinformatics workflows, ensuring reproducibility and portability."
    },
    {
        "id": 540,
        "question": "Which database stores phylogenetic tree annotations?",
        "options": [
            "TreeBASE",
            "GenBank",
            "KEGG",
            "PDB"
        ],
        "answer": "TreeBASE",
        "difficulty": "medium",
        "topic": "Biological Databases",
        "explanation": "TreeBASE stores phylogenetic trees and their associated data for evolutionary studies."
    },
    {
        "id": 541,
        "question": "Which file format is used to store genome annotations?",
        "options": [
            "GFF",
            "FASTA",
            "SAM",
            "VCF"
        ],
        "answer": "GFF",
        "difficulty": "medium",
        "topic": "Biological Databases",
        "explanation": "GFF (General Feature Format) stores genome annotations, such as gene locations and functions."
    },
    {
        "id": 542,
        "question": "Which tool is used for detecting conserved regions in multiple sequence alignments?",
        "options": [
            "Gblocks",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Gblocks",
        "difficulty": "medium",
        "topic": "Sequence Analysis",
        "explanation": "Gblocks identifies conserved regions in multiple sequence alignments, removing poorly aligned areas."
    },
    {
        "id": 543,
        "question": "What is the primary purpose of sequence profile analysis?",
        "options": [
            "To sequence genomes",
            "To detect distant sequence similarities",
            "To predict protein structures",
            "To quantify gene expression"
        ],
        "answer": "To detect distant sequence similarities",
        "difficulty": "medium",
        "topic": "Sequence Analysis",
        "explanation": "Sequence profile analysis, used in tools like PSI-BLAST, detects distant similarities by building position-specific profiles."
    },
    {
        "id": 544,
        "question": "Which tool is used for de novo transcript assembly in RNA-Seq?",
        "options": [
            "Trinity",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Trinity",
        "difficulty": "medium",
        "topic": "Genomics and Transcriptomics",
        "explanation": "Trinity assembles transcripts de novo from RNA-Seq data without a reference genome."
    },
    {
        "id": 545,
        "question": "Which tool is used for genome annotation in eukaryotes?",
        "options": [
            "MAKER",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "MAKER",
        "difficulty": "medium",
        "topic": "Genomics and Transcriptomics",
        "explanation": "MAKER annotates eukaryotic genomes by integrating evidence-based and ab initio gene predictions."
    },
    {
        "id": 546,
        "question": "Which tool is used for protein quantification in proteomics?",
        "options": [
            "Proteome Discoverer",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Proteome Discoverer",
        "difficulty": "medium",
        "topic": "Proteomics",
        "explanation": "Proteome Discoverer quantifies proteins from mass spectrometry data, integrating multiple search engines."
    },
    {
        "id": 547,
        "question": "Which tool is used for protein structure validation?",
        "options": [
            "WHAT_CHECK",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "WHAT_CHECK",
        "difficulty": "medium",
        "topic": "Structural Bioinformatics",
        "explanation": "WHAT_CHECK validates protein structures, assessing stereochemistry and packing quality."
    },
    {
        "id": 548,
        "question": "Which tool is used for Bayesian phylogenetic inference?",
        "options": [
            "BEAST",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "BEAST",
        "difficulty": "medium",
        "topic": "Phylogenetics",
        "explanation": "BEAST performs Bayesian phylogenetic inference, estimating trees and divergence times."
    },
    {
        "id": 549,
        "question": "Which evolutionary model accounts for different substitution rates across sites?",
        "options": [
            "Gamma model",
            "Jukes-Cantor",
            "Kimura 2-parameter",
            "F81"
        ],
        "answer": "Gamma model",
        "difficulty": "hard",
        "topic": "Molecular Evolution",
        "explanation": "The Gamma model accounts for rate variation across sites, improving evolutionary distance estimates."
    },
    {
        "id": 550,
        "question": "Which tool is used for pathway visualization in functional genomics?",
        "options": [
            "PathVisio",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "PathVisio",
        "difficulty": "medium",
        "topic": "Functional Genomics",
        "explanation": "PathVisio visualizes and analyzes biological pathways, integrating genomic data."
    },
    {
        "id": 551,
        "question": "Which tool is used for differential expression analysis in RNA-Seq?",
        "options": [
            "edgeR",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "edgeR",
        "difficulty": "medium",
        "topic": "Microarray and NGS Data Analysis",
        "explanation": "edgeR performs differential expression analysis in RNA-Seq data using negative binomial models."
    },
    {
        "id": 552,
        "question": "Which tool is used for gene regulatory network inference in systems biology?",
        "options": [
            "GENIE3",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "GENIE3",
        "difficulty": "medium",
        "topic": "Systems Biology",
        "explanation": "GENIE3 infers gene regulatory networks from expression data using random forest methods."
    },
    {
        "id": 553,
        "question": "Which tool is used for taxonomic profiling in metagenomics?",
        "options": [
            "MetaPhlAn",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "MetaPhlAn",
        "difficulty": "medium",
        "topic": "Metagenomics",
        "explanation": "MetaPhlAn profiles microbial taxa in metagenomic data, identifying species abundance."
    },
    {
        "id": 554,
        "question": "Which tool is used for analyzing DNase-Seq data in epigenomics?",
        "options": [
            "F-Seq",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "F-Seq",
        "difficulty": "medium",
        "topic": "Epigenomics",
        "explanation": "F-Seq identifies accessible chromatin regions in DNase-Seq data, indicating regulatory elements."
    },
    {
        "id": 555,
        "question": "Which machine learning algorithm is used for protein function prediction?",
        "options": [
            "Neural Networks",
            "K-mer analysis",
            "Scoring matrices",
            "Dynamic programming"
        ],
        "answer": "Neural Networks",
        "difficulty": "medium",
        "topic": "Machine Learning in Bioinformatics",
        "explanation": "Neural Networks predict protein functions by learning complex patterns in sequence data."
    },
    {
        "id": 556,
        "question": "Which tool is used for quantitative structure-activity relationship (QSAR) modeling?",
        "options": [
            "ChemPy",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "ChemPy",
        "difficulty": "medium",
        "topic": "Pharmacogenomics and Drug Design",
        "explanation": "ChemPy supports QSAR modeling by analyzing molecular properties in drug design."
    },
    {
        "id": 557,
        "question": "Which tool is used for variant annotation in clinical bioinformatics?",
        "options": [
            "SnpEff",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "SnpEff",
        "difficulty": "medium",
        "topic": "Clinical and Personalized Bioinformatics",
        "explanation": "SnpEff annotates genetic variants with functional and clinical impacts."
    },
    {
        "id": 558,
        "question": "Which algorithm is used for fast sequence similarity searches in large databases?",
        "options": [
            "FASTA",
            "Dynamic programming",
            "K-mer matching",
            "Scoring matrices"
        ],
        "answer": "FASTA",
        "difficulty": "medium",
        "topic": "Biostatistics and Bioinformatics Algorithms",
        "explanation": "FASTA uses a heuristic algorithm for fast sequence similarity searches in large databases."
    },
    {
        "id": 559,
        "question": "Which tool is used for managing bioinformatics software dependencies?",
        "options": [
            "Conda",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Conda",
        "difficulty": "medium",
        "topic": "Programming and Tools in Bioinformatics",
        "explanation": "Conda manages software dependencies and environments for bioinformatics tools."
    },
    {
        "id": 560,
        "question": "Which database stores annotations for non-coding RNAs?",
        "options": [
            "miRBase",
            "GenBank",
            "KEGG",
            "PDB"
        ],
        "answer": "miRBase",
        "difficulty": "medium",
        "topic": "Biological Databases",
        "explanation": "miRBase stores annotations for microRNAs and other non-coding RNAs."
    },
    {
        "id": 561,
        "question": "Which tool is used for local sequence alignment of protein sequences?",
        "options": [
            "Water",
            "UPGMA",
            "QIIME",
            "DESeq2"
        ],
        "answer": "Water",
        "difficulty": "medium",
        "topic": "Sequence Analysis",
        "explanation": "Water, part of the EMBOSS suite, performs local sequence alignment of protein or DNA sequences."
    },
    {
        "id": 562,
        "question": "Which tool is used for detecting copy number variations in genomics?",
        "options": [
            "CNVkit",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "CNVkit",
        "difficulty": "medium",
        "topic": "Genomics and Transcriptomics",
        "explanation": "CNVkit detects copy number variations from high-throughput sequencing data."
    },
    {
        "id": 563,
        "question": "Which tool is used for protein domain prediction in proteomics?",
        "options": [
            "SMART",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "SMART",
        "difficulty": "medium",
        "topic": "Proteomics",
        "explanation": "SMART predicts protein domains and architectures, aiding functional annotation."
    },
    {
        "id": 564,
        "question": "Which tool is used for protein structure alignment?",
        "options": [
            "TM-align",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "TM-align",
        "difficulty": "medium",
        "topic": "Structural Bioinformatics",
        "explanation": "TM-align aligns protein 3D structures, assessing structural similarity."
    },
    {
        "id": 565,
        "question": "Which tool is used for phylogenetic tree construction using maximum likelihood?",
        "options": [
            "IQ-TREE",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "IQ-TREE",
        "difficulty": "medium",
        "topic": "Phylogenetics",
        "explanation": "IQ-TREE constructs phylogenetic trees using maximum likelihood with model selection."
    },
    {
        "id": 566,
        "question": "Which tool is used for gene fusion detection in RNA-Seq?",
        "options": [
            "FusionCatcher",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "FusionCatcher",
        "difficulty": "medium",
        "topic": "Microarray and NGS Data Analysis",
        "explanation": "FusionCatcher detects gene fusions in RNA-Seq data, identifying chimeric transcripts."
    },
    {
        "id": 567,
        "question": "Which tool is used for functional annotation in metagenomics?",
        "options": [
            "Prokka",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Prokka",
        "difficulty": "medium",
        "topic": "Metagenomics",
        "explanation": "Prokka annotates metagenomic sequences with functional information, focusing on microbial genomes."
    },
    {
        "id": 568,
        "question": "Which tool is used for analyzing methylation patterns in epigenomics?",
        "options": [
            "methPipe",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "methPipe",
        "difficulty": "medium",
        "topic": "Epigenomics",
        "explanation": "methPipe analyzes DNA methylation patterns from bisulfite sequencing data."
    },
    {
        "id": 569,
        "question": "Which machine learning technique is used for gene expression clustering?",
        "options": [
            "Self-Organizing Maps",
            "K-mer analysis",
            "Scoring matrices",
            "Dynamic programming"
        ],
        "answer": "Self-Organizing Maps",
        "difficulty": "medium",
        "topic": "Machine Learning in Bioinformatics",
        "explanation": "Self-Organizing Maps cluster gene expression data, revealing patterns in high-dimensional datasets."
    },
    {
        "id": 570,
        "question": "Which tool is used for genome-wide association studies in clinical bioinformatics?",
        "options": [
            "SAIGE",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "SAIGE",
        "difficulty": "medium",
        "topic": "Clinical and Personalized Bioinformatics",
        "explanation": "SAIGE performs genome-wide association studies, analyzing genetic variants in large cohorts."
    },
    {
        "id": 571,
        "question": "Which database stores protein interaction data?",
        "options": [
            "BioGRID",
            "GenBank",
            "KEGG",
            "PDB"
        ],
        "answer": "BioGRID",
        "difficulty": "medium",
        "topic": "Biological Databases",
        "explanation": "BioGRID stores experimentally validated protein and genetic interactions."
    },
    {
        "id": 572,
        "question": "Which tool is used for pairwise global sequence alignment?",
        "options": [
            "Needle",
            "QIIME",
            "DESeq2",
            "SPAdes"
        ],
        "answer": "Needle",
        "difficulty": "medium",
        "topic": "Sequence Analysis",
        "explanation": "Needle, part of the EMBOSS suite, performs global sequence alignment using the Needleman-Wunsch algorithm."
    },
    {
        "id": 573,
        "question": "Which tool is used for long-read genome assembly?",
        "options": [
            "Flye",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Flye",
        "difficulty": "medium",
        "topic": "Genomics and Transcriptomics",
        "explanation": "Flye assembles genomes from long reads, such as those from PacBio or Nanopore."
    },
    {
        "id": 574,
        "question": "Which tool is used for protein network analysis in proteomics?",
        "options": [
            "IntAct",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "IntAct",
        "difficulty": "medium",
        "topic": "Proteomics",
        "explanation": "IntAct provides protein interaction data and tools for network analysis."
    },
    {
        "id": 575,
        "question": "Which tool is used for protein structure prediction using deep learning?",
        "options": [
            "AlphaFold",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "AlphaFold",
        "difficulty": "medium",
        "topic": "Structural Bioinformatics",
        "explanation": "AlphaFold predicts protein structures with high accuracy using deep learning."
    },
    {
        "id": 576,
        "question": "Which tool is used for phylogenetic distance matrix calculation?",
        "options": [
            "DNADIST",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "DNADIST",
        "difficulty": "medium",
        "topic": "Phylogenetics",
        "explanation": "DNADIST, part of PHYLIP, calculates phylogenetic distance matrices for tree construction."
    },
    {
        "id": 577,
        "question": "Which tool is used for gene ontology enrichment analysis?",
        "options": [
            "PANTHER",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "PANTHER",
        "difficulty": "medium",
        "topic": "Functional Genomics",
        "explanation": "PANTHER performs gene ontology enrichment analysis, identifying overrepresented functions."
    },
    {
        "id": 578,
        "question": "Which tool is used for quality trimming of NGS reads?",
        "options": [
            "Trimmomatic",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Trimmomatic",
        "difficulty": "medium",
        "topic": "Microarray and NGS Data Analysis",
        "explanation": "Trimmomatic trims low-quality bases and adapters from NGS reads, improving data quality."
    },
    {
        "id": 579,
        "question": "Which tool is used for dynamic modeling of biological systems?",
        "options": [
            "CellNet",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "CellNet",
        "difficulty": "medium",
        "topic": "Systems Biology",
        "explanation": "CellNet models dynamic biological systems, simulating cellular processes."
    },
    {
        "id": 580,
        "question": "Which tool is used for metagenomic sequence annotation?",
        "options": [
            "MG-RAST",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "MG-RAST",
        "difficulty": "medium",
        "topic": "Metagenomics",
        "explanation": "MG-RAST annotates metagenomic sequences, providing functional and taxonomic insights."
    },
    {
        "id": 581,
        "question": "Which tool is used for analyzing 3D chromatin structure in epigenomics?",
        "options": [
            "Fit-Hi-C",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Fit-Hi-C",
        "difficulty": "medium",
        "topic": "Epigenomics",
        "explanation": "Fit-Hi-C analyzes Hi-C data to identify significant chromatin interactions."
    },
    {
        "id": 582,
        "question": "Which machine learning algorithm is used for pathway activity prediction?",
        "options": [
            "Random Forest",
            "K-mer analysis",
            "Scoring matrices",
            "Dynamic programming"
        ],
        "answer": "Random Forest",
        "difficulty": "medium",
        "topic": "Machine Learning in Bioinformatics",
        "explanation": "Random Forest predicts pathway activity from genomic data, leveraging ensemble learning."
    },
    {
        "id": 583,
        "question": "Which tool is used for ligand-based virtual screening in drug design?",
        "options": [
            "PyRx",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "PyRx",
        "difficulty": "medium",
        "topic": "Pharmacogenomics and Drug Design",
        "explanation": "PyRx performs ligand-based virtual screening, identifying potential drug candidates."
    },
    {
        "id": 584,
        "question": "Which tool is used for somatic variant calling in cancer genomics?",
        "options": [
            "Strelka",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Strelka",
        "difficulty": "medium",
        "topic": "Clinical and Personalized Bioinformatics",
        "explanation": "Strelka calls somatic variants in cancer genomics by comparing tumor and normal samples."
    },
    {
        "id": 585,
        "question": "Which algorithm is used for sequence motif discovery?",
        "options": [
            "Gibbs sampling",
            "Dynamic programming",
            "K-mer matching",
            "Scoring matrices"
        ],
        "answer": "Gibbs sampling",
        "difficulty": "hard",
        "topic": "Biostatistics and Bioinformatics Algorithms",
        "explanation": "Gibbs sampling is used for motif discovery, identifying conserved patterns in sequences."
    },
    {
        "id": 586,
        "question": "Which tool is used for version control in bioinformatics projects?",
        "options": [
            "Git",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Git",
        "difficulty": "medium",
        "topic": "Programming and Tools in Bioinformatics",
        "explanation": "Git provides version control for bioinformatics projects, tracking code and data changes."
    },
    {
        "id": 587,
        "question": "Which database stores disease-associated genetic variants?",
        "options": [
            "ClinVar",
            "GenBank",
            "KEGG",
            "PDB"
        ],
        "answer": "ClinVar",
        "difficulty": "medium",
        "topic": "Biological Databases",
        "explanation": "ClinVar stores genetic variants associated with diseases and their clinical significance."
    },
    {
        "id": 588,
        "question": "Which tool is used for read mapping in RNA-Seq analysis?",
        "options": [
            "HISAT2",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "HISAT2",
        "difficulty": "medium",
        "topic": "Genomics and Transcriptomics",
        "explanation": "HISAT2 maps RNA-Seq reads to a reference genome, handling splice junctions efficiently."
    },
    {
        "id": 589,
        "question": "Which tool is used for protein interaction prediction in proteomics?",
        "options": [
            "STRING",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "STRING",
        "difficulty": "medium",
        "topic": "Proteomics",
        "explanation": "STRING predicts protein interactions based on experimental and computational evidence."
    },
    {
        "id": 590,
        "question": "Which tool is used for protein structure refinement?",
        "options": [
            "REFMAC",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "REFMAC",
        "difficulty": "medium",
        "topic": "Structural Bioinformatics",
        "explanation": "REFMAC refines protein structures, improving model accuracy in crystallography."
    },
    {
        "id": 591,
        "question": "Which tool is used for assessing genome assembly quality?",
        "options": [
            "QUAST",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "QUAST",
        "difficulty": "medium",
        "topic": "Genomics and Transcriptomics",
        "explanation": "QUAST evaluates genome assembly quality, providing metrics like contiguity and completeness."
    },
    {
        "id": 592,
        "question": "Which tool is used for alternative splicing analysis in RNA-Seq?",
        "options": [
            "rMATS",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "rMATS",
        "difficulty": "medium",
        "topic": "Microarray and NGS Data Analysis",
        "explanation": "rMATS detects differential alternative splicing events in RNA-Seq data."
    },
    {
        "id": 593,
        "question": "Which tool is used for metagenomic community profiling?",
        "options": [
            "QIIME2",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "QIIME2",
        "difficulty": "medium",
        "topic": "Metagenomics",
        "explanation": "QIIME2 profiles microbial communities in metagenomic data, analyzing diversity and composition."
    },
    {
        "id": 594,
        "question": "Which tool is used for chromatin interaction analysis in epigenomics?",
        "options": [
            "Juicer",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Juicer",
        "difficulty": "medium",
        "topic": "Epigenomics",
        "explanation": "Juicer analyzes chromatin interactions from Hi-C data, mapping 3D genome structure."
    },
    {
        "id": 595,
        "question": "Which machine learning algorithm is used for protein structure prediction?",
        "options": [
            "Deep Learning",
            "K-mer analysis",
            "Scoring matrices",
            "Dynamic programming"
        ],
        "answer": "Deep Learning",
        "difficulty": "medium",
        "topic": "Machine Learning in Bioinformatics",
        "explanation": "Deep Learning, used in tools like AlphaFold, predicts protein structures with high accuracy."
    },
    {
        "id": 596,
        "question": "Which tool is used for pharmacophore modeling in drug design?",
        "options": [
            "LigandScout",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "LigandScout",
        "difficulty": "medium",
        "topic": "Pharmacogenomics and Drug Design",
        "explanation": "LigandScout performs pharmacophore modeling, identifying key molecular features for drug design."
    },
    {
        "id": 597,
        "question": "Which tool is used for structural variant calling in clinical bioinformatics?",
        "options": [
            "Manta",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Manta",
        "difficulty": "medium",
        "topic": "Clinical and Personalized Bioinformatics",
        "explanation": "Manta calls structural variants, such as deletions and inversions, in clinical sequencing data."
    },
    {
        "id": 598,
        "question": "Which algorithm is used for phylogenetic tree reconstruction?",
        "options": [
            "Neighbor-Joining",
            "K-mer analysis",
            "Scoring matrices",
            "Gibbs sampling"
        ],
        "answer": "Neighbor-Joining",
        "difficulty": "medium",
        "topic": "Biostatistics and Bioinformatics Algorithms",
        "explanation": "Neighbor-Joining reconstructs phylogenetic trees based on distance matrices."
    },
    {
        "id": 599,
        "question": "Which tool is used for interactive data visualization in bioinformatics?",
        "options": [
            "Jupyter Notebook",
            "BLAST",
            "Bowtie",
            "ClustalW"
        ],
        "answer": "Jupyter Notebook",
        "difficulty": "medium",
        "topic": "Programming and Tools in Bioinformatics",
        "explanation": "Jupyter Notebook enables interactive data visualization and analysis in bioinformatics."
    },
    {
        "id": 600,
        "question": "Which database stores epigenetic modification data?",
        "options": [
            "ENCODE",
            "GenBank",
            "KEGG",
            "PDB"
        ],
        "answer": "ENCODE",
        "difficulty": "medium",
        "topic": "Biological Databases",
        "explanation": "ENCODE stores epigenetic modification data, such as histone marks and DNA accessibility."
    }
]
