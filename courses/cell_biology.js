const QUESTIONS = [
    {
        "id": 1,
        "question": "What is the primary function of the nucleus in a eukaryotic cell?",
        "options": [
            "Protein synthesis",
            "Energy production",
            "Storage of genetic information",
            "Lipid synthesis"
        ],
        "answer": "Storage of genetic information",
        "difficulty": "easy",
        "topic": "Cell Structure",
        "explanation": "The nucleus houses DNA, which contains the genetic information necessary for cell function and heredity."
    },
    {
        "id": 2,
        "question": "Which organelle is responsible for ATP production in eukaryotic cells?",
        "options": [
            "Golgi apparatus",
            "Mitochondrion",
            "Lysosome",
            "Endoplasmic reticulum"
        ],
        "answer": "Mitochondrion",
        "difficulty": "easy",
        "topic": "Organelles",
        "explanation": "Mitochondria are the sites of cellular respiration, producing ATP through oxidative phosphorylation."
    },
    {
        "id": 3,
        "question": "What is the main component of the cell membrane?",
        "options": [
            "Phospholipids",
            "Carbohydrates",
            "Nucleic acids",
            "Amino acids"
        ],
        "answer": "Phospholipids",
        "difficulty": "easy",
        "topic": "Cell Membrane",
        "explanation": "The cell membrane is primarily composed of a phospholipid bilayer, which provides structure and regulates transport."
    },
    {
        "id": 4,
        "question": "Which process involves the division of a cell's nucleus?",
        "options": [
            "Cytokinesis",
            "Mitosis",
            "Meiosis",
            "Both Mitosis and Meiosis"
        ],
        "answer": "Both Mitosis and Meiosis",
        "difficulty": "medium",
        "topic": "Cell Division",
        "explanation": "Mitosis and meiosis both involve nuclear division, with mitosis producing two identical nuclei and meiosis producing four haploid nuclei."
    },
    {
        "id": 5,
        "question": "What is the role of ribosomes in a cell?",
        "options": [
            "DNA replication",
            "Protein synthesis",
            "Lipid metabolism",
            "Carbohydrate storage"
        ],
        "answer": "Protein synthesis",
        "difficulty": "easy",
        "topic": "Organelles",
        "explanation": "Ribosomes translate mRNA into polypeptide chains, synthesizing proteins."
    },
    {
        "id": 6,
        "question": "Which structure in plant cells is responsible for photosynthesis?",
        "options": [
            "Chloroplast",
            "Vacuole",
            "Cell wall",
            "Nucleus"
        ],
        "answer": "Chloroplast",
        "difficulty": "easy",
        "topic": "Plant Cells",
        "explanation": "Chloroplasts contain chlorophyll and are the sites of photosynthesis, converting light energy into chemical energy."
    },
    {
        "id": 7,
        "question": "What is the function of the Golgi apparatus?",
        "options": [
            "Energy production",
            "Protein modification and packaging",
            "DNA storage",
            "Waste degradation"
        ],
        "answer": "Protein modification and packaging",
        "difficulty": "medium",
        "topic": "Organelles",
        "explanation": "The Golgi apparatus modifies, sorts, and packages proteins and lipids for secretion or use within the cell."
    },
    {
        "id": 8,
        "question": "Which type of transport requires energy to move substances across the cell membrane?",
        "options": [
            "Diffusion",
            "Facilitated diffusion",
            "Active transport",
            "Osmosis"
        ],
        "answer": "Active transport",
        "difficulty": "medium",
        "topic": "Cell Membrane",
        "explanation": "Active transport uses energy, typically ATP, to move substances against their concentration gradient."
    },
    {
        "id": 9,
        "question": "What is the primary role of lysosomes in a cell?",
        "options": [
            "Protein synthesis",
            "Waste degradation",
            "Energy storage",
            "Cell division"
        ],
        "answer": "Waste degradation",
        "difficulty": "easy",
        "topic": "Organelles",
        "explanation": "Lysosomes contain hydrolytic enzymes that break down waste materials and cellular debris."
    },
    {
        "id": 10,
        "question": "Which phase of the cell cycle involves DNA replication?",
        "options": [
            "G1 phase",
            "S phase",
            "G2 phase",
            "M phase"
        ],
        "answer": "S phase",
        "difficulty": "medium",
        "topic": "Cell Cycle",
        "explanation": "During the S phase, the cell replicates its DNA to prepare for cell division."
    },
    {
        "id": 11,
        "question": "What is the main structural component of the cell wall in plant cells?",
        "options": [
            "Chitin",
            "Cellulose",
            "Peptidoglycan",
            "Glycogen"
        ],
        "answer": "Cellulose",
        "difficulty": "easy",
        "topic": "Plant Cells",
        "explanation": "Cellulose is a polysaccharide that provides rigidity and strength to plant cell walls."
    },
    {
        "id": 12,
        "question": "Which organelle is involved in detoxifying harmful substances in the cell?",
        "options": [
            "Peroxisome",
            "Mitochondrion",
            "Ribosome",
            "Golgi apparatus"
        ],
        "answer": "Peroxisome",
        "difficulty": "medium",
        "topic": "Organelles",
        "explanation": "Peroxisomes contain enzymes that detoxify harmful substances, such as hydrogen peroxide."
    },
    {
        "id": 13,
        "question": "What is the term for programmed cell death?",
        "options": [
            "Necrosis",
            "Apoptosis",
            "Mitosis",
            "Autophagy"
        ],
        "answer": "Apoptosis",
        "difficulty": "medium",
        "topic": "Cell Processes",
        "explanation": "Apoptosis is a controlled process of cell death that eliminates damaged or unnecessary cells."
    },
    {
        "id": 14,
        "question": "Which molecule serves as the primary energy currency in cells?",
        "options": [
            "ADP",
            "ATP",
            "NADH",
            "FADH2"
        ],
        "answer": "ATP",
        "difficulty": "easy",
        "topic": "Cellular Metabolism",
        "explanation": "ATP provides energy for cellular processes by releasing energy when hydrolyzed to ADP."
    },
    {
        "id": 15,
        "question": "What is the function of the endoplasmic reticulum?",
        "options": [
            "DNA storage",
            "Protein and lipid synthesis",
            "Energy production",
            "Cell movement"
        ],
        "answer": "Protein and lipid synthesis",
        "difficulty": "medium",
        "topic": "Organelles",
        "explanation": "The rough ER synthesizes proteins, while the smooth ER synthesizes lipids and detoxifies substances."
    },
    {
        "id": 16,
        "question": "Which process allows cells to engulf large particles?",
        "options": [
            "Pinocytosis",
            "Phagocytosis",
            "Exocytosis",
            "Diffusion"
        ],
        "answer": "Phagocytosis",
        "difficulty": "medium",
        "topic": "Cell Membrane",
        "explanation": "Phagocytosis is the process by which cells engulf large particles, such as bacteria, using their membrane."
    },
    {
        "id": 17,
        "question": "What is the role of centrioles in animal cells?",
        "options": [
            "Protein synthesis",
            "Cell division",
            "Energy production",
            "Waste storage"
        ],
        "answer": "Cell division",
        "difficulty": "medium",
        "topic": "Cell Structure",
        "explanation": "Centrioles organize microtubules during cell division, forming the spindle apparatus."
    },
    {
        "id": 18,
        "question": "Which type of cell lacks a nucleus?",
        "options": [
            "Eukaryotic cell",
            "Prokaryotic cell",
            "Plant cell",
            "Animal cell"
        ],
        "answer": "Prokaryotic cell",
        "difficulty": "easy",
        "topic": "Cell Types",
        "explanation": "Prokaryotic cells, such as bacteria, lack a membrane-bound nucleus, unlike eukaryotic cells."
    },
    {
        "id": 19,
        "question": "What is the primary function of the nucleolus?",
        "options": [
            "DNA replication",
            "Ribosome assembly",
            "Protein degradation",
            "Lipid synthesis"
        ],
        "answer": "Ribosome assembly",
        "difficulty": "medium",
        "topic": "Nucleus",
        "explanation": "The nucleolus is the site where ribosomal RNA is produced and ribosome subunits are assembled."
    },
    {
        "id": 20,
        "question": "Which phase of mitosis involves the separation of sister chromatids?",
        "options": [
            "Prophase",
            "Metaphase",
            "Anaphase",
            "Telophase"
        ],
        "answer": "Anaphase",
        "difficulty": "medium",
        "topic": "Cell Division",
        "explanation": "During anaphase, sister chromatids are pulled apart to opposite poles of the cell."
    },
    {
        "id": 21,
        "question": "What is the primary source of energy for Earth's climate system?",
        "options": [
            "Geothermal energy",
            "Solar energy",
            "Nuclear energy",
            "Wind energy"
        ],
        "answer": "Solar energy",
        "difficulty": "easy",
        "topic": "Cellular Metabolism",
        "explanation": "Solar energy drives photosynthesis, which provides energy for Earth's ecosystems and climate."
    },
    {
        "id": 22,
        "question": "Which molecule is the final electron acceptor in the electron transport chain?",
        "options": [
            "Oxygen",
            "Glucose",
            "Carbon dioxide",
            "NADH"
        ],
        "answer": "Oxygen",
        "difficulty": "hard",
        "topic": "Cellular Respiration",
        "explanation": "Oxygen accepts electrons at the end of the electron transport chain, forming water."
    },
    {
        "id": 23,
        "question": "What is the role of the cytoskeleton in a cell?",
        "options": [
            "Energy production",
            "Structural support and movement",
            "DNA storage",
            "Protein synthesis"
        ],
        "answer": "Structural support and movement",
        "difficulty": "medium",
        "topic": "Cell Structure",
        "explanation": "The cytoskeleton provides structural support, maintains cell shape, and facilitates movement."
    },
    {
        "id": 24,
        "question": "Which process converts glucose into pyruvate?",
        "options": [
            "Glycolysis",
            "Krebs cycle",
            "Electron transport chain",
            "Fermentation"
        ],
        "answer": "Glycolysis",
        "difficulty": "medium",
        "topic": "Cellular Respiration",
        "explanation": "Glycolysis is the metabolic pathway that breaks down glucose into two pyruvate molecules."
    },
    {
        "id": 25,
        "question": "What is the function of tight junctions in epithelial cells?",
        "options": [
            "Allow communication between cells",
            "Prevent leakage between cells",
            "Anchor cells to the extracellular matrix",
            "Facilitate cell movement"
        ],
        "answer": "Prevent leakage between cells",
        "difficulty": "hard",
        "topic": "Cell Junctions",
        "explanation": "Tight junctions seal adjacent epithelial cells to prevent substances from leaking between them."
    },
    {
        "id": 26,
        "question": "Which organelle is most abundant in secretory cells?",
        "options": [
            "Mitochondrion",
            "Golgi apparatus",
            "Lysosome",
            "Peroxisome"
        ],
        "answer": "Golgi apparatus",
        "difficulty": "hard",
        "topic": "Organelles",
        "explanation": "Secretory cells rely on the Golgi apparatus for processing and packaging proteins for secretion."
    },
    {
        "id": 27,
        "question": "What is the primary function of gap junctions?",
        "options": [
            "Prevent leakage between cells",
            "Allow communication between cells",
            "Anchor cells to the extracellular matrix",
            "Facilitate cell division"
        ],
        "answer": "Allow communication between cells",
        "difficulty": "medium",
        "topic": "Cell Junctions",
        "explanation": "Gap junctions allow small molecules and ions to pass between adjacent cells, facilitating communication."
    },
    {
        "id": 28,
        "question": "Which process produces the most ATP in cellular respiration?",
        "options": [
            "Glycolysis",
            "Krebs cycle",
            "Electron transport chain",
            "Fermentation"
        ],
        "answer": "Electron transport chain",
        "difficulty": "medium",
        "topic": "Cellular Respiration",
        "explanation": "The electron transport chain generates the majority of ATP through oxidative phosphorylation."
    },
    {
        "id": 29,
        "question": "What is the role of the central vacuole in plant cells?",
        "options": [
            "Protein synthesis",
            "Storage and turgor pressure",
            "Energy production",
            "DNA replication"
        ],
        "answer": "Storage and turgor pressure",
        "difficulty": "medium",
        "topic": "Plant Cells",
        "explanation": "The central vacuole stores nutrients, waste, and maintains turgor pressure for structural support."
    },
    {
        "id": 30,
        "question": "Which molecule is primarily responsible for cell signaling?",
        "options": [
            "Lipids",
            "Carbohydrates",
            "Proteins",
            "Nucleic acids"
        ],
        "answer": "Proteins",
        "difficulty": "medium",
        "topic": "Cell Signaling",
        "explanation": "Proteins, such as receptors and signaling molecules, mediate most cell signaling pathways."
    },
    {
        "id": 31,
        "question": "What is the primary function of chloroplasts?",
        "options": [
            "Protein synthesis",
            "Photosynthesis",
            "Lipid metabolism",
            "Waste degradation"
        ],
        "answer": "Photosynthesis",
        "difficulty": "easy",
        "topic": "Plant Cells",
        "explanation": "Chloroplasts capture light energy to produce glucose through photosynthesis."
    },
    {
        "id": 32,
        "question": "Which type of RNA carries amino acids to the ribosome?",
        "options": [
            "mRNA",
            "tRNA",
            "rRNA",
            "snRNA"
        ],
        "answer": "tRNA",
        "difficulty": "medium",
        "topic": "Protein Synthesis",
        "explanation": "tRNA (transfer RNA) transports specific amino acids to the ribosome during protein synthesis."
    },
    {
        "id": 33,
        "question": "What is the primary role of desmosomes in animal cells?",
        "options": [
            "Allow communication between cells",
            "Anchor cells together",
            "Prevent leakage between cells",
            "Facilitate cell movement"
        ],
        "answer": "Anchor cells together",
        "difficulty": "hard",
        "topic": "Cell Junctions",
        "explanation": "Desmosomes provide strong mechanical attachments between adjacent cells."
    },
    {
        "id": 34,
        "question": "Which phase of the cell cycle is the longest in most cells?",
        "options": [
            "G1 phase",
            "S phase",
            "G2 phase",
            "M phase"
        ],
        "answer": "G1 phase",
        "difficulty": "medium",
        "topic": "Cell Cycle",
        "explanation": "The G1 phase, part of interphase, is typically the longest as cells grow and perform normal functions."
    },
    {
        "id": 35,
        "question": "What is the primary function of the sodium-potassium pump?",
        "options": [
            "Passive diffusion",
            "Active transport",
            "Facilitated diffusion",
            "Osmosis"
        ],
        "answer": "Active transport",
        "difficulty": "medium",
        "topic": "Cell Membrane",
        "explanation": "The sodium-potassium pump uses ATP to maintain ion gradients across the cell membrane."
    },
    {
        "id": 36,
        "question": "Which organelle contains its own DNA?",
        "options": [
            "Golgi apparatus",
            "Mitochondrion",
            "Lysosome",
            "Peroxisome"
        ],
        "answer": "Mitochondrion",
        "difficulty": "medium",
        "topic": "Organelles",
        "explanation": "Mitochondria contain their own circular DNA, inherited maternally, encoding some of their proteins."
    },
    {
        "id": 37,
        "question": "What is the primary product of the light-dependent reactions of photosynthesis?",
        "options": [
            "Glucose",
            "ATP and NADPH",
            "Carbon dioxide",
            "Water"
        ],
        "answer": "ATP and NADPH",
        "difficulty": "hard",
        "topic": "Photosynthesis",
        "explanation": "The light-dependent reactions produce ATP and NADPH, which are used in the Calvin cycle."
    },
    {
        "id": 38,
        "question": "Which process involves the breakdown of large molecules into smaller ones?",
        "options": [
            "Anabolism",
            "Catabolism",
            "Metabolism",
            "Synthesis"
        ],
        "answer": "Catabolism",
        "difficulty": "medium",
        "topic": "Cellular Metabolism",
        "explanation": "Catabolism breaks down complex molecules to release energy, while anabolism builds molecules."
    },
    {
        "id": 39,
        "question": "What is the role of the spindle fibers during mitosis?",
        "options": [
            "DNA replication",
            "Chromosome movement",
            "Cytokinesis",
            "Cell growth"
        ],
        "answer": "Chromosome movement",
        "difficulty": "medium",
        "topic": "Cell Division",
        "explanation": "Spindle fibers attach to chromosomes and pull them apart during mitosis."
    },
    {
        "id": 40,
        "question": "Which molecule is the primary component of microfilaments?",
        "options": [
            "Tubulin",
            "Actin",
            "Keratin",
            "Collagen"
        ],
        "answer": "Actin",
        "difficulty": "hard",
        "topic": "Cytoskeleton",
        "explanation": "Microfilaments are composed of actin and are involved in cell movement and shape maintenance."
    },
    {
        "id": 41,
        "question": "What is the primary function of the Krebs cycle?",
        "options": [
            "ATP production",
            "Electron carrier production",
            "Glucose synthesis",
            "Oxygen production"
        ],
        "answer": "Electron carrier production",
        "difficulty": "hard",
        "topic": "Cellular Respiration",
        "explanation": "The Krebs cycle produces NADH and FADH2, which carry electrons to the electron transport chain."
    },
    {
        "id": 42,
        "question": "Which process allows cells to take in fluids?",
        "options": [
            "Phagocytosis",
            "Pinocytosis",
            "Exocytosis",
            "Diffusion"
        ],
        "answer": "Pinocytosis",
        "difficulty": "medium",
        "topic": "Cell Membrane",
        "explanation": "Pinocytosis is the process by which cells engulf extracellular fluid and its contents."
    },
    {
        "id": 43,
        "question": "What is the primary function of the Calvin cycle?",
        "options": [
            "ATP production",
            "Glucose synthesis",
            "Oxygen production",
            "Electron transport"
        ],
        "answer": "Glucose synthesis",
        "difficulty": "hard",
        "topic": "Photosynthesis",
        "explanation": "The Calvin cycle uses ATP and NADPH to fix carbon dioxide into glucose."
    },
    {
        "id": 44,
        "question": "Which structure is unique to bacterial cells?",
        "options": [
            "Nucleus",
            "Cell wall",
            "Mitochondrion",
            "Ribosome"
        ],
        "answer": "Cell wall",
        "difficulty": "medium",
        "topic": "Cell Types",
        "explanation": "Bacterial cells have a peptidoglycan cell wall, which is not found in eukaryotic cells."
    },
    {
        "id": 45,
        "question": "What is the role of histones in eukaryotic cells?",
        "options": [
            "DNA packaging",
            "Protein synthesis",
            "Energy production",
            "Cell movement"
        ],
        "answer": "DNA packaging",
        "difficulty": "medium",
        "topic": "Nucleus",
        "explanation": "Histones are proteins that help package DNA into chromatin, condensing it for storage."
    },
    {
        "id": 46,
        "question": "Which process is responsible for the production of gametes?",
        "options": [
            "Mitosis",
            "Meiosis",
            "Cytokinesis",
            "Apoptosis"
        ],
        "answer": "Meiosis",
        "difficulty": "medium",
        "topic": "Cell Division",
        "explanation": "Meiosis produces haploid gametes with half the chromosome number of the parent cell."
    },
    {
        "id": 47,
        "question": "What is the primary function of the extracellular matrix?",
        "options": [
            "Energy storage",
            "Structural support",
            "Protein synthesis",
            "DNA replication"
        ],
        "answer": "Structural support",
        "difficulty": "medium",
        "topic": "Cell Structure",
        "explanation": "The extracellular matrix provides structural support and facilitates cell communication."
    },
    {
        "id": 48,
        "question": "Which molecule is the primary component of microtubules?",
        "options": [
            "Actin",
            "Tubulin",
            "Keratin",
            "Collagen"
        ],
        "answer": "Tubulin",
        "difficulty": "hard",
        "topic": "Cytoskeleton",
        "explanation": "Microtubules are composed of tubulin and are involved in cell division and intracellular transport."
    },
    {
        "id": 49,
        "question": "What is the primary function of the rough endoplasmic reticulum?",
        "options": [
            "Lipid synthesis",
            "Protein synthesis",
            "Detoxification",
            "Energy production"
        ],
        "answer": "Protein synthesis",
        "difficulty": "medium",
        "topic": "Organelles",
        "explanation": "The rough ER, studded with ribosomes, synthesizes proteins destined for secretion or membranes."
    },
    {
        "id": 50,
        "question": "Which process involves the movement of water across a semipermeable membrane?",
        "options": [
            "Diffusion",
            "Osmosis",
            "Active transport",
            "Facilitated diffusion"
        ],
        "answer": "Osmosis",
        "difficulty": "easy",
        "topic": "Cell Membrane",
        "explanation": "Osmosis is the passive movement of water across a semipermeable membrane from high to low water concentration."
    },
    {
        "id": 51,
        "question": "What is the primary function of the smooth endoplasmic reticulum?",
        "options": [
            "Protein synthesis",
            "Lipid synthesis",
            "DNA replication",
            "Energy production"
        ],
        "answer": "Lipid synthesis",
        "difficulty": "medium",
        "topic": "Organelles",
        "explanation": "The smooth ER synthesizes lipids and detoxifies certain chemicals."
    },
    {
        "id": 52,
        "question": "Which phase of meiosis results in the separation of homologous chromosomes?",
        "options": [
            "Prophase I",
            "Metaphase I",
            "Anaphase I",
            "Telophase I"
        ],
        "answer": "Anaphase I",
        "difficulty": "hard",
        "topic": "Cell Division",
        "explanation": "During anaphase I, homologous chromosomes are pulled to opposite poles of the cell."
    },
    {
        "id": 53,
        "question": "What is the primary role of the peroxisome in lipid metabolism?",
        "options": [
            "Lipid synthesis",
            "Beta-oxidation",
            "Protein degradation",
            "Carbohydrate storage"
        ],
        "answer": "Beta-oxidation",
        "difficulty": "hard",
        "topic": "Organelles",
        "explanation": "Peroxisomes perform beta-oxidation, breaking down fatty acids to produce energy."
    },
    {
        "id": 54,
        "question": "Which molecule is the primary pigment in photosynthesis?",
        "options": [
            "Hemoglobin",
            "Chlorophyll",
            "Carotene",
            "Melanin"
        ],
        "answer": "Chlorophyll",
        "difficulty": "easy",
        "topic": "Photosynthesis",
        "explanation": "Chlorophyll absorbs light energy, driving the photosynthetic process."
    },
    {
        "id": 55,
        "question": "What is the primary function of the nuclear envelope?",
        "options": [
            "Protein synthesis",
            "DNA protection",
            "Energy production",
            "Cell movement"
        ],
        "answer": "DNA protection",
        "difficulty": "medium",
        "topic": "Nucleus",
        "explanation": "The nuclear envelope surrounds the nucleus, protecting DNA and regulating molecular transport."
    },
    {
        "id": 56,
        "question": "Which process involves the fusion of vesicles with the cell membrane to release contents?",
        "options": [
            "Endocytosis",
            "Exocytosis",
            "Phagocytosis",
            "Pinocytosis"
        ],
        "answer": "Exocytosis",
        "difficulty": "medium",
        "topic": "Cell Membrane",
        "explanation": "Exocytosis releases substances from the cell by fusing vesicles with the plasma membrane."
    },
    {
        "id": 57,
        "question": "What is the primary function of the thylakoid membrane in chloroplasts?",
        "options": [
            "Glucose synthesis",
            "Light-dependent reactions",
            "Carbon fixation",
            "Protein synthesis"
        ],
        "answer": "Light-dependent reactions",
        "difficulty": "hard",
        "topic": "Photosynthesis",
        "explanation": "The thylakoid membrane houses the machinery for the light-dependent reactions of photosynthesis."
    },
    {
        "id": 58,
        "question": "Which type of cell division produces genetically identical cells?",
        "options": [
            "Meiosis",
            "Mitosis",
            "Binary fission",
            "Both Mitosis and Binary fission"
        ],
        "answer": "Both Mitosis and Binary fission",
        "difficulty": "medium",
        "topic": "Cell Division",
        "explanation": "Mitosis in eukaryotes and binary fission in prokaryotes produce genetically identical daughter cells."
    },
    {
        "id": 59,
        "question": "What is the primary role of the mitochondrial matrix?",
        "options": [
            "Protein synthesis",
            "Krebs cycle",
            "Electron transport",
            "Lipid synthesis"
        ],
        "answer": "Krebs cycle",
        "difficulty": "hard",
        "topic": "Cellular Respiration",
        "explanation": "The mitochondrial matrix is the site of the Krebs cycle, where pyruvate is oxidized."
    },
    {
        "id": 60,
        "question": "Which molecule is the primary component of intermediate filaments?",
        "options": [
            "Actin",
            "Tubulin",
            "Keratin",
            "Collagen"
        ],
        "answer": "Keratin",
        "difficulty": "hard",
        "topic": "Cytoskeleton",
        "explanation": "Intermediate filaments, such as those made of keratin, provide mechanical strength to cells."
    },
    {
        "id": 61,
        "question": "What is the primary function of the nucleoplasm?",
        "options": [
            "Protein synthesis",
            "DNA replication",
            "Energy production",
            "Cell movement"
        ],
        "answer": "DNA replication",
        "difficulty": "medium",
        "topic": "Nucleus",
        "explanation": "The nucleoplasm is the fluid within the nucleus where DNA replication and transcription occur."
    },
    {
        "id": 62,
        "question": "Which process is responsible for the production of lactic acid in muscle cells?",
        "options": [
            "Glycolysis",
            "Fermentation",
            "Krebs cycle",
            "Electron transport chain"
        ],
        "answer": "Fermentation",
        "difficulty": "medium",
        "topic": "Cellular Respiration",
        "explanation": "Lactic acid fermentation occurs in muscle cells under anaerobic conditions to regenerate NAD+."
    },
    {
        "id": 63,
        "question": "What is the primary function of the plasmodesmata in plant cells?",
        "options": [
            "Prevent leakage",
            "Allow communication",
            "Anchor cells",
            "Facilitate division"
        ],
        "answer": "Allow communication",
        "difficulty": "hard",
        "topic": "Cell Junctions",
        "explanation": "Plasmodesmata are channels that allow the exchange of substances between adjacent plant cells."
    },
    {
        "id": 64,
        "question": "Which molecule is the primary energy source for glycolysis?",
        "options": [
            "Glucose",
            "Pyruvate",
            "ATP",
            "NADH"
        ],
        "answer": "Glucose",
        "difficulty": "medium",
        "topic": "Cellular Respiration",
        "explanation": "Glycolysis begins with glucose, which is broken down to produce pyruvate and ATP."
    },
    {
        "id": 65,
        "question": "What is the primary function of the cristae in mitochondria?",
        "options": [
            "Protein synthesis",
            "Electron transport",
            "Krebs cycle",
            "Lipid synthesis"
        ],
        "answer": "Electron transport",
        "difficulty": "hard",
        "topic": "Cellular Respiration",
        "explanation": "The cristae increase the surface area for the electron transport chain in mitochondria."
    },
    {
        "id": 66,
        "question": "Which process involves the synthesis of RNA from a DNA template?",
        "options": [
            "Translation",
            "Transcription",
            "Replication",
            "Splicing"
        ],
        "answer": "Transcription",
        "difficulty": "medium",
        "topic": "Protein Synthesis",
        "explanation": "Transcription is the process of synthesizing RNA using a DNA template."
    },
    {
        "id": 67,
        "question": "What is the primary function of the stroma in chloroplasts?",
        "options": [
            "Light-dependent reactions",
            "Calvin cycle",
            "Electron transport",
            "Protein synthesis"
        ],
        "answer": "Calvin cycle",
        "difficulty": "hard",
        "topic": "Photosynthesis",
        "explanation": "The stroma is the site of the Calvin cycle, where carbon fixation occurs."
    },
    {
        "id": 68,
        "question": "Which type of transport does not require a protein carrier?",
        "options": [
            "Facilitated diffusion",
            "Active transport",
            "Simple diffusion",
            "Ion transport"
        ],
        "answer": "Simple diffusion",
        "difficulty": "medium",
        "topic": "Cell Membrane",
        "explanation": "Simple diffusion allows small, nonpolar molecules to pass through the membrane without a carrier."
    },
    {
        "id": 69,
        "question": "What is the primary function of the kinetochore during mitosis?",
        "options": [
            "DNA replication",
            "Chromosome attachment",
            "Cytokinesis",
            "Cell growth"
        ],
        "answer": "Chromosome attachment",
        "difficulty": "hard",
        "topic": "Cell Division",
        "explanation": "The kinetochore is a protein structure on chromosomes where spindle fibers attach during mitosis."
    },
    {
        "id": 70,
        "question": "Which molecule is the primary component of the cell membrane's hydrophobic region?",
        "options": [
            "Phosphate heads",
            "Fatty acid tails",
            "Cholesterol",
            "Proteins"
        ],
        "answer": "Fatty acid tails",
        "difficulty": "medium",
        "topic": "Cell Membrane",
        "explanation": "The fatty acid tails of phospholipids form the hydrophobic core of the cell membrane."
    },
    {
        "id": 71,
        "question": "What is the primary function of the centromere?",
        "options": [
            "DNA replication",
            "Chromosome attachment",
            "Protein synthesis",
            "Energy production"
        ],
        "answer": "Chromosome attachment",
        "difficulty": "medium",
        "topic": "Cell Division",
        "explanation": "The centromere is the region of a chromosome where sister chromatids are held together and spindle fibers attach."
    },
    {
        "id": 72,
        "question": "Which process involves the breakdown of glucose in the absence of oxygen?",
        "options": [
            "Glycolysis",
            "Krebs cycle",
            "Electron transport chain",
            "Oxidative phosphorylation"
        ],
        "answer": "Glycolysis",
        "difficulty": "medium",
        "topic": "Cellular Respiration",
        "explanation": "Glycolysis occurs in the cytoplasm and does not require oxygen, producing pyruvate and ATP."
    },
    {
        "id": 73,
        "question": "What is the primary function of the nuclear pore complex?",
        "options": [
            "Protein synthesis",
            "Molecular transport",
            "DNA replication",
            "Energy production"
        ],
        "answer": "Molecular transport",
        "difficulty": "medium",
        "topic": "Nucleus",
        "explanation": "The nuclear pore complex regulates the transport of molecules between the nucleus and cytoplasm."
    },
    {
        "id": 74,
        "question": "Which molecule is the primary product of the Krebs cycle?",
        "options": [
            "ATP",
            "NADH",
            "Glucose",
            "Oxygen"
        ],
        "answer": "NADH",
        "difficulty": "hard",
        "topic": "Cellular Respiration",
        "explanation": "The Krebs cycle primarily produces NADH and FADH2, which carry electrons to the electron transport chain."
    },
    {
        "id": 75,
        "question": "What is the primary function of the lysosome in phagocytosis?",
        "options": [
            "Energy production",
            "Degradation of engulfed material",
            "Protein synthesis",
            "Lipid synthesis"
        ],
        "answer": "Degradation of engulfed material",
        "difficulty": "medium",
        "topic": "Organelles",
        "explanation": "Lysosomes fuse with phagosomes to degrade engulfed particles, such as bacteria."
    },
    {
        "id": 76,
        "question": "Which process involves the synthesis of proteins from mRNA?",
        "options": [
            "Transcription",
            "Translation",
            "Replication",
            "Splicing"
        ],
        "answer": "Translation",
        "difficulty": "medium",
        "topic": "Protein Synthesis",
        "explanation": "Translation occurs at the ribosome, where mRNA is decoded to produce proteins."
    },
    {
        "id": 77,
        "question": "What is the primary function of the cell plate during plant cell division?",
        "options": [
            "Chromosome separation",
            "Cell wall formation",
            "Spindle formation",
            "DNA replication"
        ],
        "answer": "Cell wall formation",
        "difficulty": "hard",
        "topic": "Cell Division",
        "explanation": "The cell plate forms during cytokinesis in plant cells, leading to the formation of a new cell wall."
    },
    {
        "id": 78,
        "question": "Which molecule is the primary electron donor in photosynthesis?",
        "options": [
            "Water",
            "Glucose",
            "Carbon dioxide",
            "NADPH"
        ],
        "answer": "Water",
        "difficulty": "hard",
        "topic": "Photosynthesis",
        "explanation": "Water is split during the light-dependent reactions, donating electrons to photosystem II."
    },
    {
        "id": 79,
        "question": "What is the primary function of the cilium in eukaryotic cells?",
        "options": [
            "Protein synthesis",
            "Cell movement",
            "DNA replication",
            "Energy production"
        ],
        "answer": "Cell movement",
        "difficulty": "medium",
        "topic": "Cell Structure",
        "explanation": "Cilia are hair-like structures that facilitate cell movement or move substances across cell surfaces."
    },
    {
        "id": 80,
        "question": "Which process involves the formation of a cleavage furrow?",
        "options": [
            "Mitosis",
            "Meiosis",
            "Cytokinesis",
            "Apoptosis"
        ],
        "answer": "Cytokinesis",
        "difficulty": "medium",
        "topic": "Cell Division",
        "explanation": "Cytokinesis in animal cells involves the formation of a cleavage furrow to divide the cytoplasm."
    },
    {
        "id": 81,
        "question": "What is the primary function of the glyoxysome in plant cells?",
        "options": [
            "Protein synthesis",
            "Lipid metabolism",
            "DNA replication",
            "Energy production"
        ],
        "answer": "Lipid metabolism",
        "difficulty": "hard",
        "topic": "Organelles",
        "explanation": "Glyoxysomes are specialized peroxisomes in plant cells that convert stored lipids into carbohydrates."
    },
    {
        "id": 82,
        "question": "Which molecule is the primary component of the cell wall in fungi?",
        "options": [
            "Cellulose",
            "Chitin",
            "Peptidoglycan",
            "Glycogen"
        ],
        "answer": "Chitin",
        "difficulty": "medium",
        "topic": "Cell Types",
        "explanation": "Fungal cell walls are primarily composed of chitin, a polysaccharide."
    },
    {
        "id": 83,
        "question": "What is the primary function of the centrosome?",
        "options": [
            "Protein synthesis",
            "Microtubule organization",
            "DNA replication",
            "Lipid synthesis"
        ],
        "answer": "Microtubule organization",
        "difficulty": "medium",
        "topic": "Cell Structure",
        "explanation": "The centrosome organizes microtubules, playing a key role in cell division and cell structure."
    },
    {
        "id": 84,
        "question": "Which process involves the crossing over of genetic material?",
        "options": [
            "Mitosis",
            "Meiosis I",
            "Meiosis II",
            "Cytokinesis"
        ],
        "answer": "Meiosis I",
        "difficulty": "hard",
        "topic": "Cell Division",
        "explanation": "Crossing over occurs during prophase I of meiosis, increasing genetic diversity."
    },
    {
        "id": 85,
        "question": "What is the primary function of the proton gradient in mitochondria?",
        "options": [
            "Protein synthesis",
            "ATP production",
            "DNA replication",
            "Lipid synthesis"
        ],
        "answer": "ATP production",
        "difficulty": "hard",
        "topic": "Cellular Respiration",
        "explanation": "The proton gradient drives ATP synthesis via ATP synthase during oxidative phosphorylation."
    },
    {
        "id": 86,
        "question": "Which molecule is the primary component of ribosomes?",
        "options": [
            "DNA",
            "RNA",
            "Lipids",
            "Carbohydrates"
        ],
        "answer": "RNA",
        "difficulty": "medium",
        "topic": "Organelles",
        "explanation": "Ribosomes are composed of ribosomal RNA (rRNA) and proteins."
    },
    {
        "id": 87,
        "question": "What is the primary function of the flagellum in eukaryotic cells?",
        "options": [
            "Protein synthesis",
            "Cell movement",
            "DNA replication",
            "Energy production"
        ],
        "answer": "Cell movement",
        "difficulty": "medium",
        "topic": "Cell Structure",
        "explanation": "Flagella are whip-like structures that propel cells, such as sperm cells."
    },
    {
        "id": 88,
        "question": "Which process involves the removal of introns from mRNA?",
        "options": [
            "Transcription",
            "Translation",
            "Splicing",
            "Replication"
        ],
        "answer": "Splicing",
        "difficulty": "hard",
        "topic": "Protein Synthesis",
        "explanation": "Splicing removes introns and joins exons to produce mature mRNA."
    },
    {
        "id": 89,
        "question": "What is the primary role of aquaporins in the cell membrane?",
        "options": [
            "Transport of glucose",
            "Transport of water",
            "Transport of ions",
            "Transport of proteins"
        ],
        "answer": "Transport of water",
        "difficulty": "medium",
        "topic": "Cell Membrane",
        "explanation": "Aquaporins are channel proteins that facilitate the passive transport of water across the cell membrane."
    },
    {
        "id": 90,
        "question": "Which organelle is primarily responsible for calcium ion storage in muscle cells?",
        "options": [
            "Mitochondrion",
            "Sarcoplasmic reticulum",
            "Golgi apparatus",
            "Lysosome"
        ],
        "answer": "Sarcoplasmic reticulum",
        "difficulty": "hard",
        "topic": "Organelles",
        "explanation": "The sarcoplasmic reticulum stores and releases calcium ions to regulate muscle contraction."
    },
    {
        "id": 91,
        "question": "What is the primary function of the chromatin in the nucleus?",
        "options": [
            "Protein synthesis",
            "DNA packaging",
            "Energy production",
            "Cell movement"
        ],
        "answer": "DNA packaging",
        "difficulty": "medium",
        "topic": "Nucleus",
        "explanation": "Chromatin organizes and compacts DNA, allowing efficient storage and gene regulation."
    },
    {
        "id": 92,
        "question": "Which process involves the conversion of light energy into chemical energy?",
        "options": [
            "Cellular respiration",
            "Photosynthesis",
            "Fermentation",
            "Glycolysis"
        ],
        "answer": "Photosynthesis",
        "difficulty": "easy",
        "topic": "Photosynthesis",
        "explanation": "Photosynthesis converts light energy into chemical energy stored in glucose."
    },
    {
        "id": 93,
        "question": "What is the primary function of the mitochondrial intermembrane space?",
        "options": [
            "Krebs cycle",
            "Proton gradient accumulation",
            "Protein synthesis",
            "Lipid synthesis"
        ],
        "answer": "Proton gradient accumulation",
        "difficulty": "hard",
        "topic": "Cellular Respiration",
        "explanation": "Protons are pumped into the intermembrane space, creating a gradient for ATP synthesis."
    },

    {
        "id": 94,
        "question": "What is the primary function of the nuclear lamina?",
        "options": [
            "Protein synthesis",
            "Structural support",
            "DNA replication",
            "Energy production"
        ],
        "answer": "Structural support",
        "difficulty": "hard",
        "topic": "Nucleus",
        "explanation": "The nuclear lamina provides structural support to the nuclear envelope and organizes chromatin."
    },
    {
        "id": 95,
        "question": "Which process involves the synthesis of lipids in the smooth ER?",
        "options": [
            "Glycolysis",
            "Lipogenesis",
            "Beta-oxidation",
            "Protein synthesis"
        ],
        "answer": "Lipogenesis",
        "difficulty": "hard",
        "topic": "Organelles",
        "explanation": "Lipogenesis is the synthesis of lipids, primarily occurring in the smooth endoplasmic reticulum."
    },
    {
        "id": 96,
        "question": "What is the primary function of the contractile vacuole in protists?",
        "options": [
            "Protein synthesis",
            "Osmoregulation",
            "Energy production",
            "Cell movement"
        ],
        "answer": "Osmoregulation",
        "difficulty": "hard",
        "topic": "Cell Structure",
        "explanation": "The contractile vacuole expels excess water to maintain osmotic balance in freshwater protists."
    },
    {
        "id": 97,
        "question": "Which molecule is the primary regulator of the cell cycle?",
        "options": [
            "Cyclins",
            "Histones",
            "Actins",
            "Tubulins"
        ],
        "answer": "Cyclins",
        "difficulty": "hard",
        "topic": "Cell Cycle",
        "explanation": "Cyclins regulate the cell cycle by activating cyclin-dependent kinases."
    },
    {
        "id": 98,
        "question": "What is the primary function of the endomembrane system?",
        "options": [
            "Energy production",
            "Protein and lipid processing",
            "DNA replication",
            "Cell movement"
        ],
        "answer": "Protein and lipid processing",
        "difficulty": "medium",
        "topic": "Organelles",
        "explanation": "The endomembrane system, including the ER, Golgi, and vesicles, processes and transports proteins and lipids."
    },
    {
        "id": 99,
        "question": "Which process involves the reduction of chromosome number by half?",
        "options": [
            "Mitosis",
            "Meiosis",
            "Cytokinesis",
            "Binary fission"
        ],
        "answer": "Meiosis",
        "difficulty": "medium",
        "topic": "Cell Division",
        "explanation": "Meiosis reduces the chromosome number by half, producing haploid cells from diploid cells."
    },
    {
        "id": 100,
        "question": "What is the primary function of the peroxisome in hydrogen peroxide metabolism?",
        "options": [
            "Production",
            "Degradation",
            "Storage",
            "Transport"
        ],
        "answer": "Degradation",
        "difficulty": "hard",
        "topic": "Organelles",
        "explanation": "Peroxisomes contain catalase, which degrades hydrogen peroxide into water and oxygen."
    }
,
    {
        "id": 101,
        "question": "What is the primary tenet of cell theory?",
        "options": [
            "All cells have a nucleus",
            "All living organisms are composed of cells",
            "Cells can arise spontaneously",
            "Cells only exist in multicellular organisms"
        ],
        "answer": "All living organisms are composed of cells",
        "difficulty": "easy",
        "topic": "Introduction to Cell Biology",
        "explanation": "Cell theory states that all living organisms are composed of cells, cells are the basic unit of life, and cells arise from pre-existing cells."
    },
    {
        "id": 102,
        "question": "Which microscopy technique provides the highest resolution for studying cell organelles?",
        "options": [
            "Light microscopy",
            "Fluorescence microscopy",
            "Transmission electron microscopy",
            "Confocal microscopy"
        ],
        "answer": "Transmission electron microscopy",
        "difficulty": "medium",
        "topic": "Introduction to Cell Biology",
        "explanation": "Transmission electron microscopy (TEM) offers high resolution, allowing detailed visualization of organelles due to its use of electron beams."
    },
    {
        "id": 103,
        "question": "What is the primary component of the fluid mosaic model of the plasma membrane?",
        "options": [
            "Carbohydrates",
            "Phospholipid bilayer",
            "Nucleic acids",
            "Chitin"
        ],
        "answer": "Phospholipid bilayer",
        "difficulty": "easy",
        "topic": "Plasma Membrane",
        "explanation": "The fluid mosaic model describes the plasma membrane as a phospholipid bilayer with embedded proteins, giving it a fluid-like structure."
    },
    {
        "id": 104,
        "question": "Which type of membrane transport requires no energy and moves substances along their concentration gradient?",
        "options": [
            "Active transport",
            "Facilitated diffusion",
            "Endocytosis",
            "Exocytosis"
        ],
        "answer": "Facilitated diffusion",
        "difficulty": "medium",
        "topic": "Plasma Membrane",
        "explanation": "Facilitated diffusion uses transport proteins to move substances down their concentration gradient without energy input."
    },
    {
        "id": 105,
        "question": "What is the primary function of the cytoplasm in a eukaryotic cell?",
        "options": [
            "DNA storage",
            "Site of metabolic reactions",
            "Protein degradation",
            "Cell division"
        ],
        "answer": "Site of metabolic reactions",
        "difficulty": "easy",
        "topic": "Cytoplasm and Cytosol",
        "explanation": "The cytoplasm, including the cytosol, is the site of many metabolic processes, such as glycolysis."
    },
    {
        "id": 106,
        "question": "Which structure in the nucleus regulates molecular transport between the nucleus and cytoplasm?",
        "options": [
            "Nuclear envelope",
            "Nuclear pore complex",
            "Nucleolus",
            "Chromatin"
        ],
        "answer": "Nuclear pore complex",
        "difficulty": "medium",
        "topic": "Nucleus",
        "explanation": "The nuclear pore complex facilitates the selective transport of molecules, such as RNA and proteins, between the nucleus and cytoplasm."
    },
    {
        "id": 107,
        "question": "What is the primary role of the nucleolus in eukaryotic cells?",
        "options": [
            "DNA replication",
            "Ribosome assembly",
            "Protein degradation",
            "Lipid synthesis"
        ],
        "answer": "Ribosome assembly",
        "difficulty": "easy",
        "topic": "Nucleus",
        "explanation": "The nucleolus is the site where ribosomal RNA is synthesized and ribosome subunits are assembled."
    },
    {
        "id": 108,
        "question": "Which organelle is primarily responsible for detoxifying drugs in liver cells?",
        "options": [
            "Rough ER",
            "Smooth ER",
            "Golgi apparatus",
            "Lysosome"
        ],
        "answer": "Smooth ER",
        "difficulty": "medium",
        "topic": "Endoplasmic Reticulum",
        "explanation": "The smooth endoplasmic reticulum detoxifies drugs and synthesizes lipids in liver cells."
    },
    {
        "id": 109,
        "question": "What is the primary function of the Golgi apparatus in a cell?",
        "options": [
            "Energy production",
            "Protein modification and packaging",
            "DNA storage",
            "Waste degradation"
        ],
        "answer": "Protein modification and packaging",
        "difficulty": "easy",
        "topic": "Golgi Apparatus",
        "explanation": "The Golgi apparatus modifies, sorts, and packages proteins and lipids for secretion or intracellular use."
    },
    {
        "id": 110,
        "question": "Which lysosomal enzyme deficiency is associated with Tay-Sachs disease?",
        "options": [
            "Hexosaminidase A",
            "Glucocerebrosidase",
            "Alpha-galactosidase",
            "Sphingomyelinase"
        ],
        "answer": "Hexosaminidase A",
        "difficulty": "hard",
        "topic": "Lysosomes and Peroxisomes",
        "explanation": "Tay-Sachs disease results from a deficiency in hexosaminidase A, leading to the accumulation of GM2 ganglioside in lysosomes."
    },
    {
        "id": 111,
        "question": "What is the primary source of energy in mitochondria?",
        "options": [
            "Glucose",
            "ATP",
            "NADH",
            "Pyruvate"
        ],
        "answer": "ATP",
        "difficulty": "easy",
        "topic": "Mitochondria",
        "explanation": "Mitochondria produce ATP through oxidative phosphorylation, serving as the cell's primary energy source."
    },
    {
        "id": 112,
        "question": "Which molecule in chloroplasts absorbs light during photosynthesis?",
        "options": [
            "Hemoglobin",
            "Chlorophyll",
            "Carotene",
            "Melanin"
        ],
        "answer": "Chlorophyll",
        "difficulty": "easy",
        "topic": "Chloroplasts",
        "explanation": "Chlorophyll absorbs light energy, primarily in the blue and red wavelengths, to drive photosynthesis."
    },
    {
        "id": 113,
        "question": "Where are ribosomes primarily located in a eukaryotic cell?",
        "options": [
            "Nucleus and mitochondria",
            "Cytoplasm and rough ER",
            "Golgi apparatus and lysosomes",
            "Peroxisomes and chloroplasts"
        ],
        "answer": "Cytoplasm and rough ER",
        "difficulty": "medium",
        "topic": "Ribosomes",
        "explanation": "Ribosomes are found free in the cytoplasm or bound to the rough endoplasmic reticulum, synthesizing proteins."
    },
    {
        "id": 114,
        "question": "Which cytoskeletal component is primarily responsible for cell motility?",
        "options": [
            "Microtubules",
            "Intermediate filaments",
            "Microfilaments",
            "Centrioles"
        ],
        "answer": "Microfilaments",
        "difficulty": "medium",
        "topic": "Cytoskeleton and Cell Movement",
        "explanation": "Microfilaments, made of actin, are key in cell motility, such as in amoeboid movement."
    },
    {
        "id": 115,
        "question": "What is the role of kinesin in cells?",
        "options": [
            "DNA replication",
            "Intracellular transport",
            "Protein synthesis",
            "Cell adhesion"
        ],
        "answer": "Intracellular transport",
        "difficulty": "hard",
        "topic": "Cytoskeleton and Cell Movement",
        "explanation": "Kinesin is a motor protein that transports vesicles and organelles along microtubules."
    },
    {
        "id": 116,
        "question": "Which cell junction prevents the passage of substances between epithelial cells?",
        "options": [
            "Gap junction",
            "Tight junction",
            "Desmosome",
            "Hemidesmosome"
        ],
        "answer": "Tight junction",
        "difficulty": "medium",
        "topic": "Cell Junctions and Adhesion",
        "explanation": "Tight junctions form a seal between adjacent cells, preventing leakage of substances."
    },
    {
        "id": 117,
        "question": "What is the primary role of integrins in the extracellular matrix?",
        "options": [
            "Energy production",
            "Cell adhesion",
            "Protein synthesis",
            "DNA replication"
        ],
        "answer": "Cell adhesion",
        "difficulty": "medium",
        "topic": "Cell Junctions and Adhesion",
        "explanation": "Integrins are transmembrane proteins that anchor cells to the extracellular matrix."
    },
    {
        "id": 118,
        "question": "Which phase of the cell cycle is responsible for DNA replication?",
        "options": [
            "G1 phase",
            "S phase",
            "G2 phase",
            "M phase"
        ],
        "answer": "S phase",
        "difficulty": "easy",
        "topic": "Cell Cycle and Cell Division",
        "explanation": "The S phase is when DNA replication occurs, duplicating the cell's genetic material."
    },
    {
        "id": 119,
        "question": "During which stage of mitosis do chromosomes align at the cell's equatorial plane?",
        "options": [
            "Prophase",
            "Metaphase",
            "Anaphase",
            "Telophase"
        ],
        "answer": "Metaphase",
        "difficulty": "medium",
        "topic": "Cell Cycle and Cell Division",
        "explanation": "In metaphase, chromosomes align at the metaphase plate, preparing for separation."
    },
    {
        "id": 120,
        "question": "What is the primary source of genetic variation in meiosis?",
        "options": [
            "Cytokinesis",
            "Crossing over",
            "Spindle formation",
            "DNA replication"
        ],
        "answer": "Crossing over",
        "difficulty": "medium",
        "topic": "Cell Cycle and Cell Division",
        "explanation": "Crossing over during prophase I of meiosis exchanges genetic material between homologous chromosomes."
    },
    {
        "id": 121,
        "question": "Which protein complex regulates the transition from G1 to S phase in the cell cycle?",
        "options": [
            "Cyclin-CDK",
            "Histone complex",
            "Actin-myosin",
            "Tubulin-dynein"
        ],
        "answer": "Cyclin-CDK",
        "difficulty": "hard",
        "topic": "Cell Cycle and Cell Division",
        "explanation": "Cyclin-CDK complexes, particularly cyclin D-CDK4/6, regulate the G1/S transition."
    },
    {
        "id": 122,
        "question": "What is the primary role of apoptosis in multicellular organisms?",
        "options": [
            "Energy production",
            "Programmed cell death",
            "Cell division",
            "Protein synthesis"
        ],
        "answer": "Programmed cell death",
        "difficulty": "easy",
        "topic": "Cell Death",
        "explanation": "Apoptosis is a controlled process that eliminates damaged or unnecessary cells."
    },
    {
        "id": 123,
        "question": "Which molecule serves as the template for RNA synthesis during transcription?",
        "options": [
            "DNA",
            "mRNA",
            "tRNA",
            "rRNA"
        ],
        "answer": "DNA",
        "difficulty": "easy",
        "topic": "DNA, RNA, and Protein Synthesis",
        "explanation": "Transcription uses a DNA template to synthesize RNA in the nucleus."
    },
    {
        "id": 124,
        "question": "What is the role of tRNA in protein synthesis?",
        "options": [
            "Carries genetic code",
            "Transports amino acids",
            "Forms ribosomes",
            "Synthesizes DNA"
        ],
        "answer": "Transports amino acids",
        "difficulty": "medium",
        "topic": "DNA, RNA, and Protein Synthesis",
        "explanation": "tRNA carries specific amino acids to the ribosome, matching codons during translation."
    },
    {
        "id": 125,
        "question": "Which process removes introns from pre-mRNA?",
        "options": [
            "Transcription",
            "Translation",
            "Splicing",
            "Replication"
        ],
        "answer": "Splicing",
        "difficulty": "medium",
        "topic": "Gene Expression and Regulation",
        "explanation": "Splicing removes introns and joins exons to produce mature mRNA."
    },
    {
        "id": 126,
        "question": "What is the role of DNA methylation in gene expression?",
        "options": [
            "Activates transcription",
            "Silences gene expression",
            "Synthesizes proteins",
            "Replicates DNA"
        ],
        "answer": "Silences gene expression",
        "difficulty": "hard",
        "topic": "Gene Expression and Regulation",
        "explanation": "DNA methylation typically inhibits transcription by preventing transcription factor binding."
    },
    {
        "id": 127,
        "question": "Which signaling pathway involves G-protein-coupled receptors?",
        "options": [
            "cAMP pathway",
            "MAPK/ERK pathway",
            "Notch pathway",
            "Wnt pathway"
        ],
        "answer": "cAMP pathway",
        "difficulty": "hard",
        "topic": "Cell Signaling and Communication",
        "explanation": "The cAMP pathway is activated by G-protein-coupled receptors, which trigger adenylate cyclase."
    },
    {
        "id": 128,
        "question": "What is the primary role of second messengers in cell signaling?",
        "options": [
            "DNA replication",
            "Signal amplification",
            "Protein synthesis",
            "Cell division"
        ],
        "answer": "Signal amplification",
        "difficulty": "medium",
        "topic": "Cell Signaling and Communication",
        "explanation": "Second messengers, like cAMP or calcium ions, amplify signals within the cell."
    },
    {
        "id": 129,
        "question": "Which process is characterized by uncontrolled cell division?",
        "options": [
            "Apoptosis",
            "Necrosis",
            "Cancer",
            "Autophagy"
        ],
        "answer": "Cancer",
        "difficulty": "easy",
        "topic": "Cancer Cell Biology",
        "explanation": "Cancer involves uncontrolled cell division due to mutations in oncogenes or tumor suppressor genes."
    },
    {
        "id": 130,
        "question": "Which gene is commonly mutated in breast cancer?",
        "options": [
            "BRCA1",
            "p53",
            "Rb",
            "Ras"
        ],
        "answer": "BRCA1",
        "difficulty": "hard",
        "topic": "Cancer Cell Biology",
        "explanation": "BRCA1 mutations are associated with an increased risk of breast and ovarian cancer."
    },
    {
        "id": 131,
        "question": "Which technique is used to separate cells based on surface markers?",
        "options": [
            "PCR",
            "Flow cytometry",
            "Western blotting",
            "CRISPR/Cas9"
        ],
        "answer": "Flow cytometry",
        "difficulty": "medium",
        "topic": "Techniques in Cell Biology",
        "explanation": "Flow cytometry, particularly FACS, separates cells based on fluorescently labeled surface markers."
    },
    {
        "id": 132,
        "question": "What is the primary function of CRISPR/Cas9 in cell biology?",
        "options": [
            "Protein detection",
            "Gene editing",
            "Cell imaging",
            "DNA amplification"
        ],
        "answer": "Gene editing",
        "difficulty": "medium",
        "topic": "Techniques in Cell Biology",
        "explanation": "CRISPR/Cas9 is a precise tool for editing specific genes by targeting DNA sequences."
    },
    {
        "id": 133,
        "question": "What is the primary advantage of single-cell transcriptomics?",
        "options": [
            "High-throughput protein analysis",
            "Analysis of gene expression in individual cells",
            "Cell structure visualization",
            "DNA replication monitoring"
        ],
        "answer": "Analysis of gene expression in individual cells",
        "difficulty": "hard",
        "topic": "Special Topics",
        "explanation": "Single-cell transcriptomics allows researchers to study gene expression at the single-cell level, revealing cellular heterogeneity."
    },
    {
        "id": 134,
        "question": "Which type of cell is capable of differentiating into any cell type in the body?",
        "options": [
            "Multipotent",
            "Pluripotent",
            "Totipotent",
            "Unipotent"
        ],
        "answer": "Totipotent",
        "difficulty": "medium",
        "topic": "Stem Cells and Cell Differentiation",
        "explanation": "Totipotent cells, such as early embryonic cells, can differentiate into any cell type, including extra-embryonic tissues."
    },
    {
        "id": 135,
        "question": "What is the primary role of the thylakoid membrane in chloroplasts?",
        "options": [
            "Calvin cycle",
            "Light-dependent reactions",
            "Protein synthesis",
            "Lipid metabolism"
        ],
        "answer": "Light-dependent reactions",
        "difficulty": "medium",
        "topic": "Chloroplasts",
        "explanation": "The thylakoid membrane contains photosystems that drive the light-dependent reactions of photosynthesis."
    },
    {
        "id": 136,
        "question": "Which motor protein is responsible for vesicle transport toward the minus end of microtubules?",
        "options": [
            "Kinesin",
            "Dynein",
            "Myosin",
            "Actin"
        ],
        "answer": "Dynein",
        "difficulty": "hard",
        "topic": "Cytoskeleton and Cell Movement",
        "explanation": "Dynein moves vesicles and organelles toward the minus end of microtubules, typically toward the cell center."
    },
    {
        "id": 137,
        "question": "What is the primary function of gap junctions in animal cells?",
        "options": [
            "Prevent leakage",
            "Allow communication",
            "Anchor cells",
            "Facilitate division"
        ],
        "answer": "Allow communication",
        "difficulty": "medium",
        "topic": "Cell Junctions and Adhesion",
        "explanation": "Gap junctions allow small molecules and ions to pass between adjacent cells, facilitating communication."
    },
    {
        "id": 138,
        "question": "Which checkpoint ensures proper chromosome attachment during mitosis?",
        "options": [
            "G1 checkpoint",
            "G2 checkpoint",
            "Spindle assembly checkpoint",
            "DNA damage checkpoint"
        ],
        "answer": "Spindle assembly checkpoint",
        "difficulty": "hard",
        "topic": "Cell Cycle and Cell Division",
        "explanation": "The spindle assembly checkpoint ensures that chromosomes are properly attached to the spindle before anaphase."
    },
    {
        "id": 139,
        "question": "What is the primary role of the lac operon in prokaryotes?",
        "options": [
            "DNA replication",
            "Gene regulation",
            "Protein synthesis",
            "Cell division"
        ],
        "answer": "Gene regulation",
        "difficulty": "medium",
        "topic": "Gene Expression and Regulation",
        "explanation": "The lac operon regulates the expression of genes involved in lactose metabolism in bacteria."
    },
    {
        "id": 140,
        "question": "Which molecule acts as a second messenger in the IP3/DAG pathway?",
        "options": [
            "cAMP",
            "Calcium ions",
            "ATP",
            "NADH"
        ],
        "answer": "Calcium ions",
        "difficulty": "hard",
        "topic": "Cell Signaling and Communication",
        "explanation": "In the IP3/DAG pathway, IP3 releases calcium ions, which act as second messengers to amplify the signal."
    },
    {
        "id": 141,
        "question": "Which hallmark of cancer involves the ability to invade other tissues?",
        "options": [
            "Sustained angiogenesis",
            "Tissue invasion and metastasis",
            "Evading apoptosis",
            "Self-sufficiency in growth signals"
        ],
        "answer": "Tissue invasion and metastasis",
        "difficulty": "medium",
        "topic": "Cancer Cell Biology",
        "explanation": "Tissue invasion and metastasis allow cancer cells to spread to other parts of the body."
    },
    {
        "id": 142,
        "question": "What is the primary function of organoids in cell biology research?",
        "options": [
            "DNA sequencing",
            "3D cell culture modeling",
            "Protein purification",
            "Cell division analysis"
        ],
        "answer": "3D cell culture modeling",
        "difficulty": "hard",
        "topic": "Special Topics",
        "explanation": "Organoids are 3D cell cultures that mimic organ structure and function, used for studying development and disease."
    },
    {
        "id": 143,
        "question": "Which type of RNA forms the core structure of ribosomes?",
        "options": [
            "mRNA",
            "tRNA",
            "rRNA",
            "miRNA"
        ],
        "answer": "rRNA",
        "difficulty": "medium",
        "topic": "DNA, RNA, and Protein Synthesis",
        "explanation": "Ribosomal RNA (rRNA) is a key component of ribosomes, facilitating protein synthesis."
    },
    {
        "id": 144,
        "question": "What is the primary role of peroxisomes in cells?",
        "options": [
            "Protein synthesis",
            "Beta-oxidation of fatty acids",
            "DNA replication",
            "Cell division"
        ],
        "answer": "Beta-oxidation of fatty acids",
        "difficulty": "medium",
        "topic": "Lysosomes and Peroxisomes",
        "explanation": "Peroxisomes break down fatty acids via beta-oxidation and detoxify reactive oxygen species."
    },
    {
        "id": 145,
        "question": "Which process is responsible for the formation of gametes in animals?",
        "options": [
            "Mitosis",
            "Meiosis",
            "Binary fission",
            "Cytokinesis"
        ],
        "answer": "Meiosis",
        "difficulty": "easy",
        "topic": "Cell Cycle and Cell Division",
        "explanation": "Meiosis produces haploid gametes, such as sperm and eggs, for sexual reproduction."
    },
    {
        "id": 146,
        "question": "What is the primary function of the mitochondrial matrix?",
        "options": [
            "Electron transport",
            "Krebs cycle",
            "Protein synthesis",
            "Lipid metabolism"
        ],
        "answer": "Krebs cycle",
        "difficulty": "medium",
        "topic": "Mitochondria",
        "explanation": "The mitochondrial matrix is the site of the Krebs cycle, where pyruvate is oxidized to produce electron carriers."
    },
    {
        "id": 147,
        "question": "Which technique is used to detect specific proteins in cell extracts?",
        "options": [
            "PCR",
            "Western blotting",
            "Flow cytometry",
            "CRISPR/Cas9"
        ],
        "answer": "Western blotting",
        "difficulty": "medium",
        "topic": "Techniques in Cell Biology",
        "explanation": "Western blotting uses antibodies to detect specific proteins separated by gel electrophoresis."
    },
    {
        "id": 148,
        "question": "What is the primary role of microRNAs (miRNAs) in gene regulation?",
        "options": [
            "Promote transcription",
            "Inhibit translation",
            "Synthesize DNA",
            "Degrade proteins"
        ],
        "answer": "Inhibit translation",
        "difficulty": "hard",
        "topic": "Gene Expression and Regulation",
        "explanation": "miRNAs bind to mRNA, inhibiting translation or promoting mRNA degradation."
    },
    {
        "id": 149,
        "question": "Which type of cell signaling involves direct cell-to-cell contact?",
        "options": [
            "Endocrine",
            "Paracrine",
            "Juxtacrine",
            "Autocrine"
        ],
        "answer": "Juxtacrine",
        "difficulty": "medium",
        "topic": "Cell Signaling and Communication",
        "explanation": "Juxtacrine signaling occurs when adjacent cells interact directly via membrane-bound molecules."
    },
    {
        "id": 150,
        "question": "What is the primary role of the tumor suppressor gene p53?",
        "options": [
            "Promote cell division",
            "Induce apoptosis",
            "Enhance angiogenesis",
            "Increase metastasis"
        ],
        "answer": "Induce apoptosis",
        "difficulty": "hard",
        "topic": "Cancer Cell Biology",
        "explanation": "p53 triggers apoptosis in response to DNA damage, preventing the proliferation of damaged cells."
    },
    {
        "id": 151,
        "question": "Which organelle is involved in the synthesis of steroid hormones?",
        "options": [
            "Rough ER",
            "Smooth ER",
            "Golgi apparatus",
            "Mitochondrion"
        ],
        "answer": "Smooth ER",
        "difficulty": "medium",
        "topic": "Endoplasmic Reticulum",
        "explanation": "The smooth ER synthesizes lipids, including steroid hormones, in specialized cells."
    },
    {
        "id": 152,
        "question": "What is the primary function of the centrosome in animal cells?",
        "options": [
            "Protein synthesis",
            "Microtubule organization",
            "DNA replication",
            "Lipid metabolism"
        ],
        "answer": "Microtubule organization",
        "difficulty": "medium",
        "topic": "Cytoskeleton and Cell Movement",
        "explanation": "The centrosome organizes microtubules, forming the spindle apparatus during cell division."
    },
    {
        "id": 153,
        "question": "Which phase of meiosis involves the separation of sister chromatids?",
        "options": [
            "Anaphase I",
            "Anaphase II",
            "Metaphase I",
            "Telophase II"
        ],
        "answer": "Anaphase II",
        "difficulty": "hard",
        "topic": "Cell Cycle and Cell Division",
        "explanation": "In anaphase II, sister chromatids are pulled apart, similar to anaphase in mitosis."
    },
    {
        "id": 154,
        "question": "What is the primary product of the light-dependent reactions of photosynthesis?",
        "options": [
            "Glucose",
            "ATP and NADPH",
            "Carbon dioxide",
            "Oxygen"
        ],
        "answer": "ATP and NADPH",
        "difficulty": "medium",
        "topic": "Chloroplasts",
        "explanation": "The light-dependent reactions produce ATP and NADPH, which are used in the Calvin cycle."
    },
    {
        "id": 155,
        "question": "Which molecule is the primary component of intermediate filaments?",
        "options": [
            "Actin",
            "Tubulin",
            "Keratin",
            "Myosin"
        ],
        "answer": "Keratin",
        "difficulty": "medium",
        "topic": "Cytoskeleton and Cell Movement",
        "explanation": "Intermediate filaments, often made of keratin, provide mechanical strength to cells."
    },
    {
        "id": 156,
        "question": "What is the primary function of desmosomes in tissues?",
        "options": [
            "Allow communication",
            "Anchor cells",
            "Prevent leakage",
            "Facilitate transport"
        ],
        "answer": "Anchor cells",
        "difficulty": "medium",
        "topic": "Cell Junctions and Adhesion",
        "explanation": "Desmosomes provide strong mechanical connections between adjacent cells."
    },
    {
        "id": 157,
        "question": "Which process is responsible for the amplification of signals in a cell?",
        "options": [
            "DNA replication",
            "Signal transduction",
            "Protein synthesis",
            "Cell division"
        ],
        "answer": "Signal transduction",
        "difficulty": "medium",
        "topic": "Cell Signaling and Communication",
        "explanation": "Signal transduction pathways amplify extracellular signals to elicit cellular responses."
    },
    {
        "id": 158,
        "question": "What is the primary role of autophagy in cells?",
        "options": [
            "Cell division",
            "Recycling cellular components",
            "DNA replication",
            "Energy production"
        ],
        "answer": "Recycling cellular components",
        "difficulty": "medium",
        "topic": "Cell Death",
        "explanation": "Autophagy degrades and recycles damaged organelles and proteins to maintain cellular homeostasis."
    },
    {
        "id": 159,
        "question": "Which type of stem cell is found in bone marrow?",
        "options": [
            "Embryonic",
            "Adult",
            "Induced pluripotent",
            "Totipotent"
        ],
        "answer": "Adult",
        "difficulty": "easy",
        "topic": "Stem Cells and Cell Differentiation",
        "explanation": "Adult stem cells, such as hematopoietic stem cells, are found in bone marrow and regenerate specific cell types."
    },
    {
        "id": 160,
        "question": "What is the primary role of oncogenes in cancer?",
        "options": [
            "Inhibit cell division",
            "Promote uncontrolled cell growth",
            "Repair DNA damage",
            "Induce apoptosis"
        ],
        "answer": "Promote uncontrolled cell growth",
        "difficulty": "medium",
        "topic": "Cancer Cell Biology",
        "explanation": "Oncogenes are mutated genes that promote uncontrolled cell proliferation."
    },
    {
        "id": 161,
        "question": "Which technique is used to visualize protein localization in cells?",
        "options": [
            "PCR",
            "Immunofluorescence",
            "Flow cytometry",
            "Western blotting"
        ],
        "answer": "Immunofluorescence",
        "difficulty": "medium",
        "topic": "Techniques in Cell Biology",
        "explanation": "Immunofluorescence uses fluorescent antibodies to visualize protein localization within cells."
    },
    {
        "id": 162,
        "question": "What is the primary function of the stroma in chloroplasts?",
        "options": [
            "Light-dependent reactions",
            "Calvin cycle",
            "Protein synthesis",
            "Lipid metabolism"
        ],
        "answer": "Calvin cycle",
        "difficulty": "medium",
        "topic": "Chloroplasts",
        "explanation": "The stroma is the site of the Calvin cycle, where carbon dioxide is fixed into glucose."
    },
    {
        "id": 163,
        "question": "Which molecule is the primary component of microtubules?",
        "options": [
            "Actin",
            "Tubulin",
            "Keratin",
            "Myosin"
        ],
        "answer": "Tubulin",
        "difficulty": "medium",
        "topic": "Cytoskeleton and Cell Movement",
        "explanation": "Microtubules are composed of tubulin dimers and are involved in cell division and transport."
    },
    {
        "id": 164,
        "question": "What is the primary function of the nuclear lamina?",
        "options": [
            "Protein synthesis",
            "Structural support",
            "DNA replication",
            "Cell movement"
        ],
        "answer": "Structural support",
        "difficulty": "hard",
        "topic": "Nucleus",
        "explanation": "The nuclear lamina provides structural support to the nuclear envelope and organizes chromatin."
    },
    {
        "id": 165,
        "question": "Which process is responsible for the production of ATP in mitochondria?",
        "options": [
            "Glycolysis",
            "Krebs cycle",
            "Oxidative phosphorylation",
            "Fermentation"
        ],
        "answer": "Oxidative phosphorylation",
        "difficulty": "medium",
        "topic": "Mitochondria",
        "explanation": "Oxidative phosphorylation in the mitochondrial inner membrane produces the majority of ATP via the electron transport chain."
    },
    {
        "id": 166,
        "question": "What is the primary role of the extracellular matrix in tissues?",
        "options": [
            "Energy production",
            "Structural support",
            "Protein synthesis",
            "DNA replication"
        ],
        "answer": "Structural support",
        "difficulty": "easy",
        "topic": "Cell Junctions and Adhesion",
        "explanation": "The extracellular matrix provides structural support and facilitates cell signaling."
    },
    {
        "id": 167,
        "question": "Which molecule is the primary electron donor in photosynthesis?",
        "options": [
            "Glucose",
            "Water",
            "Carbon dioxide",
            "NADPH"
        ],
        "answer": "Water",
        "difficulty": "medium",
        "topic": "Chloroplasts",
        "explanation": "Water is split in the light-dependent reactions, donating electrons to photosystem II."
    },
    {
        "id": 168,
        "question": "What is the primary function of cilia in eukaryotic cells?",
        "options": [
            "Protein synthesis",
            "Cell movement",
            "DNA replication",
            "Energy production"
        ],
        "answer": "Cell movement",
        "difficulty": "easy",
        "topic": "Cytoskeleton and Cell Movement",
        "explanation": "Cilia facilitate cell movement or move substances across cell surfaces."
    },
    {
        "id": 169,
        "question": "Which process involves the degradation of cellular components in lysosomes?",
        "options": [
            "Apoptosis",
            "Autophagy",
            "Necrosis",
            "Mitosis"
        ],
        "answer": "Autophagy",
        "difficulty": "medium",
        "topic": "Cell Death",
        "explanation": "Autophagy involves the lysosomal degradation of damaged organelles and proteins."
    },
    {
        "id": 170,
        "question": "What is the primary role of induced pluripotent stem cells (iPSCs)?",
        "options": [
            "Energy production",
            "Regenerative medicine",
            "DNA replication",
            "Protein synthesis"
        ],
        "answer": "Regenerative medicine",
        "difficulty": "medium",
        "topic": "Stem Cells and Cell Differentiation",
        "explanation": "iPSCs are reprogrammed adult cells used in regenerative medicine and disease modeling."
    },
    {
        "id": 171,
        "question": "Which molecule is the primary component of chromatin?",
        "options": [
            "DNA and histones",
            "RNA and ribosomes",
            "Lipids and proteins",
            "Carbohydrates and enzymes"
        ],
        "answer": "DNA and histones",
        "difficulty": "medium",
        "topic": "Nucleus",
        "explanation": "Chromatin is composed of DNA wrapped around histone proteins, organizing genetic material."
    },
    {
        "id": 172,
        "question": "What BOOSTS the signal in the MAPK/ERK pathway?",
        "options": [
            "Kinase cascade",
            "cAMP production",
            "Calcium release",
            "DNA methylation"
        ],
        "answer": "Kinase cascade",
        "difficulty": "hard",
        "topic": "Cell Signaling and Communication",
        "explanation": "The MAPK/ERK pathway uses a kinase cascade to amplify and transmit signals."
    },
    {
        "id": 173,
        "question": "Which process involves the formation of a new cell wall in plant cells?",
        "options": [
            "Mitosis",
            "Cytokinesis",
            "Meiosis",
            "Apoptosis"
        ],
        "answer": "Cytokinesis",
        "difficulty": "medium",
        "topic": "Cell Cycle and Cell Division",
        "explanation": "Cytokinesis in plant cells involves the formation of a cell plate, leading to a new cell wall."
    },
    {
        "id": 174,
        "question": "What is the primary function of the sodium-potassium pump?",
        "options": [
            "Passive diffusion",
            "Active transport",
            "Facilitated diffusion",
            "Osmosis"
        ],
        "answer": "Active transport",
        "difficulty": "medium",
        "topic": "Plasma Membrane",
        "explanation": "The sodium-potassium pump uses ATP to maintain ion gradients across the cell membrane."
    },
    {
        "id": 175,
        "question": "Which molecule is the primary component of the cell wall in bacteria?",
        "options": [
            "Cellulose",
            "Chitin",
            "Peptidoglycan",
            "Glycogen"
        ],
        "answer": "Peptidoglycan",
        "difficulty": "medium",
        "topic": "Introduction to Cell Biology",
        "explanation": "Bacterial cell walls are primarily composed of peptidoglycan, providing structural support."
    },
    {
        "id": 176,
        "question": "What is the primary function of the proton gradient in mitochondria?",
        "options": [
            "Protein synthesis",
            "ATP production",
            "DNA replication",
            "Lipid synthesis"
        ],
        "answer": "ATP production",
        "difficulty": "hard",
        "topic": "Mitochondria",
        "explanation": "The proton gradient drives ATP synthesis via ATP synthase during oxidative phosphorylation."
    },
    {
        "id": 177,
        "question": "Which technique is used to amplify DNA in the laboratory?",
        "options": [
            "Western blotting",
            "PCR",
            "Immunofluorescence",
            "Flow cytometry"
        ],
        "answer": "PCR",
        "difficulty": "easy",
        "topic": "Techniques in Cell Biology",
        "explanation": "Polymerase chain reaction (PCR) amplifies specific DNA sequences for analysis."
    },
    {
        "id": 178,
        "question": "What is the primary role of the tumor microenvironment in cancer?",
        "options": [
            "Inhibit cell growth",
            "Support tumor growth",
            "Prevent metastasis",
            "Induce apoptosis"
        ],
        "answer": "Support tumor growth",
        "difficulty": "hard",
        "topic": "Cancer Cell Biology",
        "explanation": "The tumor microenvironment provides signals and resources that promote tumor growth and survival."
    },
    {
        "id": 179,
        "question": "Which molecule is the primary energy source for glycolysis?",
        "options": [
            "Glucose",
            "Pyruvate",
            "ATP",
            "NADH"
        ],
        "answer": "Glucose",
        "difficulty": "easy",
        "topic": "Mitochondria",
        "explanation": "Glycolysis begins with glucose, which is broken down to produce pyruvate and ATP."
    },
    {
        "id": 180,
        "question": "What is the primary function of the kinetochore during mitosis?",
        "options": [
            "DNA replication",
            "Chromosome attachment",
            "Protein synthesis",
            "Cell movement"
        ],
        "answer": "Chromosome attachment",
        "difficulty": "hard",
        "topic": "Cell Cycle and Cell Division",
        "explanation": "The kinetochore attaches chromosomes to spindle fibers during mitosis."
    },
    {
        "id": 181,
        "question": "Which process involves the synthesis of proteins from mRNA?",
        "options": [
            "Transcription",
            "Translation",
            "Replication",
            "Splicing"
        ],
        "answer": "Translation",
        "difficulty": "easy",
        "topic": "DNA, RNA, and Protein Synthesis",
        "explanation": "Translation occurs at the ribosome, where mRNA is decoded to produce proteins."
    },
    {
        "id": 182,
        "question": "What is the primary function of the nuclear envelope?",
        "options": [
            "Protein synthesis",
            "DNA protection",
            "Energy production",
            "Cell movement"
        ],
        "answer": "DNA protection",
        "difficulty": "medium",
        "topic": "Nucleus",
        "explanation": "The nuclear envelope protects DNA and regulates molecular transport into and out of the nucleus."
    },
    {
        "id": 183,
        "question": "Which molecule is the primary component of the cell membrane's hydrophilic region?",
        "options": [
            "Fatty acid tails",
            "Phosphate heads",
            "Cholesterol",
            "Proteins"
        ],
        "answer": "Phosphate heads",
        "difficulty": "medium",
        "topic": "Plasma Membrane",
        "explanation": "The phosphate heads of phospholipids form the hydrophilic outer layers of the cell membrane."
    },
    {
        "id": 184,
        "question": "What is the primary role of the centriole in animal cells?",
        "options": [
            "Protein synthesis",
            "Spindle formation",
            "DNA replication",
            "Lipid metabolism"
        ],
        "answer": "Spindle formation",
        "difficulty": "medium",
        "topic": "Cytoskeleton and Cell Movement",
        "explanation": "Centrioles organize microtubules to form the spindle apparatus during cell division."
    },
    {
        "id": 185,
        "question": "Which process involves the engulfment of large particles by cells?",
        "options": [
            "Pinocytosis",
            "Phagocytosis",
            "Exocytosis",
            "Diffusion"
        ],
        "answer": "Phagocytosis",
        "difficulty": "medium",
        "topic": "Plasma Membrane",
        "explanation": "Phagocytosis allows cells to engulf large particles, such as bacteria, using the cell membrane."
    },
    {
        "id": 186,
        "question": "What is the primary function of histone proteins?",
        "options": [
            "DNA packaging",
            "Protein synthesis",
            "Energy production",
            "Cell movement"
        ],
        "answer": "DNA packaging",
        "difficulty": "medium",
        "topic": "Nucleus",
        "explanation": "Histones package DNA into chromatin, condensing it for storage and gene regulation."
    },
    {
        "id": 187,
        "question": "Which molecule is the primary product of the Krebs cycle?",
        "options": [
            "ATP",
            "NADH",
            "Glucose",
            "Oxygen"
        ],
        "answer": "NADH",
        "difficulty": "hard",
        "topic": "Mitochondria",
        "explanation": "The Krebs cycle primarily produces NADH and FADH2, which carry electrons to the electron transport chain."
    },
    {
        "id": 188,
        "question": "What is the primary function of the cell plate in plant cells?",
        "options": [
            "Chromosome separation",
            "Cell wall formation",
            "Spindle formation",
            "DNA replication"
        ],
        "answer": "Cell wall formation",
        "difficulty": "medium",
        "topic": "Cell Cycle and Cell Division",
        "explanation": "The cell plate forms during cytokinesis in plant cells, leading to a new cell wall."
    },
    {
        "id": 189,
        "question": "Which molecule is the final electron acceptor in the electron transport chain?",
        "options": [
            "Oxygen",
            "Glucose",
            "Carbon dioxide",
            "NADH"
        ],
        "answer": "Oxygen",
        "difficulty": "medium",
        "topic": "Mitochondria",
        "explanation": "Oxygen accepts electrons at the end of the electron transport chain, forming water."
    },
    {
        "id": 190,
        "question": "What is the primary function of synthetic biology in cell biology?",
        "options": [
            "DNA sequencing",
            "Engineering artificial cells",
            "Protein purification",
            "Cell imaging"
        ],
        "answer": "Engineering artificial cells",
        "difficulty": "hard",
        "topic": "Special Topics",
        "explanation": "Synthetic biology aims to design and construct artificial cells or systems with novel functions."
    },
    {
        "id": 191,
        "question": "Which process involves the conversion of pyruvate into acetyl-CoA?",
        "options": [
            "Glycolysis",
            "Pyruvate oxidation",
            "Krebs cycle",
            "Electron transport chain"
        ],
        "answer": "Pyruvate oxidation",
        "difficulty": "medium",
        "topic": "Mitochondria",
        "explanation": "Pyruvate oxidation converts pyruvate into acetyl-CoA in the mitochondrial matrix, linking glycolysis to the Krebs cycle."
    },
    {
        "id": 192,
        "question": "What is the primary function of the plasmodesmata in plant cells?",
        "options": [
            "Prevent leakage",
            "Allow communication",
            "Anchor cells",
            "Facilitate division"
        ],
        "answer": "Allow communication",
        "difficulty": "medium",
        "topic": "Cell Junctions and Adhesion",
        "explanation": "Plasmodesmata are channels that allow the exchange of molecules between adjacent plant cells."
    },
    {
        "id": 193,
        "question": "Which molecule is the primary component of the cell wall in plants?",
        "options": [
            "Chitin",
            "Cellulose",
            "Peptidoglycan",
            "Glycogen"
        ],
        "answer": "Cellulose",
        "difficulty": "easy",
        "topic": "Introduction to Cell Biology",
        "explanation": "Cellulose is a polysaccharide that provides structural support in plant cell walls."
    },
    {
        "id": 194,
        "question": "What is the primary function of the spindle fibers during mitosis?",
        "options": [
            "DNA replication",
            "Chromosome movement",
            "Protein synthesis",
            "Cell growth"
        ],
        "answer": "Chromosome movement",
        "difficulty": "medium",
        "topic": "Cell Cycle and Cell Division",
        "explanation": "Spindle fibers attach to chromosomes and pull them apart during mitosis."
    },
    {
        "id": 195,
        "question": "Which process involves the uptake of fluids by cells?",
        "options": [
            "Phagocytosis",
            "Pinocytosis",
            "Exocytosis",
            "Diffusion"
        ],
        "answer": "Pinocytosis",
        "difficulty": "medium",
        "topic": "Plasma Membrane",
        "explanation": "Pinocytosis is the process by which cells engulf extracellular fluid and its contents."
    },
    {
        "id": 196,
        "question": "What is the primary role of the Rb gene in the cell cycle?",
        "options": [
            "Promote cell division",
            "Inhibit cell division",
            "Induce apoptosis",
            "Enhance metastasis"
        ],
        "answer": "Inhibit cell division",
        "difficulty": "hard",
        "topic": "Cancer Cell Biology",
        "explanation": "The Rb gene is a tumor suppressor that inhibits the G1/S transition in the cell cycle."
    },
    {
        "id": 197,
        "question": "Which technique is used to study gene expression in real time?",
        "options": [
            "Western blotting",
            "RT-PCR",
            "Flow cytometry",
            "Immunofluorescence"
        ],
        "answer": "RT-PCR",
        "difficulty": "medium",
        "topic": "Techniques in Cell Biology",
        "explanation": "Real-time PCR (RT-PCR) quantifies mRNA levels to study gene expression in real time."
    },
    {
        "id": 198,
        "question": "What is the primary function of the cristae in mitochondria?",
        "options": [
            "Protein synthesis",
            "Electron transport",
            "Krebs cycle",
            "Lipid synthesis"
        ],
        "answer": "Electron transport",
        "difficulty": "medium",
        "topic": "Mitochondria",
        "explanation": "The cristae increase the surface area for the electron transport chain in mitochondria."
    },
    {
        "id": 199,
        "question": "Which type of cell signaling involves hormones traveling through the bloodstream?",
        "options": [
            "Autocrine",
            "Paracrine",
            "Endocrine",
            "Juxtacrine"
        ],
        "answer": "Endocrine",
        "difficulty": "easy",
        "topic": "Cell Signaling and Communication",
        "explanation": "Endocrine signaling involves hormones traveling through the bloodstream to distant target cells."
    },
    {
        "id": 200,
        "question": "What is the primary role of bioinformatics in cell biology?",
        "options": [
            "Cell imaging",
            "Data analysis and modeling",
            "Protein purification",
            "DNA amplification"
        ],
        "answer": "Data analysis and modeling",
        "difficulty": "hard",
        "topic": "Special Topics",
        "explanation": "Bioinformatics analyzes large datasets, such as genomic or proteomic data, to model cellular processes."
    }
,
    {
        "id": 201,
        "question": "Which historical figure is credited with first observing cells under a microscope?",
        "options": [
            "Robert Hooke",
            "Antonie van Leeuwenhoek",
            "Theodor Schwann",
            "Matthias Schleiden"
        ],
        "answer": "Robert Hooke",
        "difficulty": "easy",
        "topic": "Introduction to Cell Biology",
        "explanation": "Robert Hooke first described cells in 1665 while observing cork under a microscope, coining the term 'cell'."
    },
    {
        "id": 202,
        "question": "Which microscopy technique uses fluorescent dyes to visualize specific cellular components?",
        "options": [
            "Transmission electron microscopy",
            "Scanning electron microscopy",
            "Fluorescence microscopy",
            "Phase-contrast microscopy"
        ],
        "answer": "Fluorescence microscopy",
        "difficulty": "medium",
        "topic": "Introduction to Cell Biology",
        "explanation": "Fluorescence microscopy uses fluorescent dyes to label specific molecules, enabling visualization of cellular structures."
    },
    {
        "id": 203,
        "question": "What is the primary role of cholesterol in the plasma membrane?",
        "options": [
            "Facilitate ion transport",
            "Increase membrane fluidity",
            "Stabilize membrane structure",
            "Synthesize proteins"
        ],
        "answer": "Stabilize membrane structure",
        "difficulty": "medium",
        "topic": "Plasma Membrane",
        "explanation": "Cholesterol stabilizes the plasma membrane by modulating fluidity and maintaining structural integrity."
    },
    {
        "id": 204,
        "question": "Which type of endocytosis is specific to the uptake of signaling molecules?",
        "options": [
            "Phagocytosis",
            "Pinocytosis",
            "Receptor-mediated endocytosis",
            "Exocytosis"
        ],
        "answer": "Receptor-mediated endocytosis",
        "difficulty": "medium",
        "topic": "Plasma Membrane",
        "explanation": "Receptor-mediated endocytosis uses specific receptors to internalize signaling molecules or ligands."
    },
    {
        "id": 205,
        "question": "What is the primary function of inclusion bodies in the cytoplasm?",
        "options": [
            "Protein synthesis",
            "Storage of materials",
            "Energy production",
            "DNA replication"
        ],
        "answer": "Storage of materials",
        "difficulty": "easy",
        "topic": "Cytoplasm and Cytosol",
        "explanation": "Inclusion bodies store nutrients, pigments, or other materials in the cytoplasm."
    },
    {
        "id": 206,
        "question": "Which component of the nuclear envelope is composed of intermediate filaments?",
        "options": [
            "Nuclear pore complex",
            "Nuclear lamina",
            "Chromatin",
            "Nucleolus"
        ],
        "answer": "Nuclear lamina",
        "difficulty": "hard",
        "topic": "Nucleus",
        "explanation": "The nuclear lamina, made of intermediate filaments, provides structural support to the nuclear envelope."
    },
    {
        "id": 207,
        "question": "What is the primary difference between euchromatin and heterochromatin?",
        "options": [
            "Euchromatin is tightly packed; heterochromatin is loosely packed",
            "Euchromatin is transcriptionally active; heterochromatin is inactive",
            "Euchromatin is found in prokaryotes; heterochromatin in eukaryotes",
            "Euchromatin contains RNA; heterochromatin contains DNA"
        ],
        "answer": "Euchromatin is transcriptionally active; heterochromatin is inactive",
        "difficulty": "medium",
        "topic": "Nucleus",
        "explanation": "Euchromatin is loosely packed and transcriptionally active, while heterochromatin is tightly packed and generally inactive."
    },
    {
        "id": 208,
        "question": "Which organelle is most abundant in cells synthesizing large amounts of protein for secretion?",
        "options": [
            "Mitochondrion",
            "Rough ER",
            "Smooth ER",
            "Peroxisome"
        ],
        "answer": "Rough ER",
        "difficulty": "medium",
        "topic": "Endoplasmic Reticulum",
        "explanation": "The rough ER, studded with ribosomes, is abundant in secretory cells for protein synthesis."
    },
    {
        "id": 209,
        "question": "Which post-translational modification occurs in the Golgi apparatus?",
        "options": [
            "Phosphorylation",
            "Glycosylation",
            "Ubiquitination",
            "Acetylation"
        ],
        "answer": "Glycosylation",
        "difficulty": "hard",
        "topic": "Golgi Apparatus",
        "explanation": "The Golgi apparatus adds sugar molecules to proteins during glycosylation, aiding in protein function and targeting."
    },
    {
        "id": 210,
        "question": "Which enzyme in peroxisomes degrades hydrogen peroxide?",
        "options": [
            "Catalase",
            "Lysozyme",
            "Amylase",
            "Lipase"
        ],
        "answer": "Catalase",
        "difficulty": "medium",
        "topic": "Lysosomes and Peroxisomes",
        "explanation": "Catalase in peroxisomes breaks down hydrogen peroxide into water and oxygen, preventing oxidative damage."
    },
    {
        "id": 211,
        "question": "What is the primary role of mitochondrial DNA in cells?",
        "options": [
            "Encodes all cellular proteins",
            "Encodes mitochondrial proteins",
            "Regulates nuclear gene expression",
            "Synthesizes ATP"
        ],
        "answer": "Encodes mitochondrial proteins",
        "difficulty": "medium",
        "topic": "Mitochondria",
        "explanation": "Mitochondrial DNA encodes some proteins essential for mitochondrial function, such as respiratory chain components."
    },
    {
        "id": 212,
        "question": "Which structure in chloroplasts contains the photosystems?",
        "options": [
            "Stroma",
            "Thylakoid membrane",
            "Outer membrane",
            "Inner membrane"
        ],
        "answer": "Thylakoid membrane",
        "difficulty": "medium",
        "topic": "Chloroplasts",
        "explanation": "The thylakoid membrane houses photosystems I and II, critical for the light-dependent reactions."
    },
    {
        "id": 213,
        "question": "What is the primary role of free ribosomes in the cytoplasm?",
        "options": [
            "Synthesize membrane proteins",
            "Synthesize cytosolic proteins",
            "Synthesize nuclear proteins",
            "Synthesize mitochondrial proteins"
        ],
        "answer": "Synthesize cytosolic proteins",
        "difficulty": "medium",
        "topic": "Ribosomes",
        "explanation": "Free ribosomes synthesize proteins that function in the cytosol, unlike bound ribosomes, which produce membrane or secreted proteins."
    },
    {
        "id": 214,
        "question": "Which motor protein is associated with microfilaments?",
        "options": [
            "Kinesin",
            "Dynein",
            "Myosin",
            "Tubulin"
        ],
        "answer": "Myosin",
        "difficulty": "hard",
        "topic": "Cytoskeleton and Cell Movement",
        "explanation": "Myosin interacts with actin microfilaments to facilitate cell motility and intracellular transport."
    },
    {
        "id": 215,
        "question": "What is the primary function of hemidesmosomes in epithelial cells?",
        "options": [
            "Allow communication",
            "Anchor cells to the extracellular matrix",
            "Prevent leakage",
            "Facilitate cell division"
        ],
        "answer": "Anchor cells to the extracellular matrix",
        "difficulty": "hard",
        "topic": "Cell Junctions and Adhesion",
        "explanation": "Hemidesmosomes anchor epithelial cells to the underlying extracellular matrix via integrins."
    },
    {
        "id": 216,
        "question": "Which phase of the cell cycle is responsible for cell growth and preparation for DNA replication?",
        "options": [
            "G1 phase",
            "S phase",
            "G2 phase",
            "M phase"
        ],
        "answer": "G1 phase",
        "difficulty": "easy",
        "topic": "Cell Cycle and Cell Division",
        "explanation": "The G1 phase involves cell growth and preparation for DNA replication in the S phase."
    },
    {
        "id": 217,
        "question": "What is the consequence of non-disjunction during meiosis?",
        "options": [
            "Increased genetic variation",
            "Aneuploidy",
            "Normal gamete formation",
            "Cell cycle arrest"
        ],
        "answer": "Aneuploidy",
        "difficulty": "hard",
        "topic": "Cell Cycle and Cell Division",
        "explanation": "Non-disjunction leads to gametes with an abnormal number of chromosomes, causing aneuploidy."
    },
    {
        "id": 218,
        "question": "Which enzyme is responsible for unwinding DNA during replication?",
        "options": [
            "DNA polymerase",
            "Helicase",
            "Ligase",
            "Topoisomerase"
        ],
        "answer": "Helicase",
        "difficulty": "medium",
        "topic": "DNA, RNA, and Protein Synthesis",
        "explanation": "Helicase unwinds the DNA double helix, creating replication forks for DNA synthesis."
    },
    {
        "id": 219,
        "question": "What is the role of the signal recognition particle (SRP) in protein synthesis?",
        "options": [
            "Initiates transcription",
            "Targets proteins to the ER",
            "Degrades mRNA",
            "Synthesizes tRNA"
        ],
        "answer": "Targets proteins to the ER",
        "difficulty": "hard",
        "topic": "DNA, RNA, and Protein Synthesis",
        "explanation": "The SRP binds to signal peptides on nascent proteins, directing them to the rough ER for processing."
    },
    {
        "id": 220,
        "question": "Which epigenetic modification is associated with active gene expression?",
        "options": [
            "DNA methylation",
            "Histone acetylation",
            "Histone methylation",
            "Chromatin condensation"
        ],
        "answer": "Histone acetylation",
        "difficulty": "hard",
        "topic": "Gene Expression and Regulation",
        "explanation": "Histone acetylation loosens chromatin structure, promoting gene expression by allowing transcription factor access."
    },
    {
        "id": 221,
        "question": "Which type of signaling involves a cell responding to its own secreted signals?",
        "options": [
            "Autocrine",
            "Paracrine",
            "Endocrine",
            "Juxtacrine"
        ],
        "answer": "Autocrine",
        "difficulty": "easy",
        "topic": "Cell Signaling and Communication",
        "explanation": "Autocrine signaling occurs when a cell secretes and responds to its own signaling molecules."
    },
    {
        "id": 222,
        "question": "Which component of the cAMP pathway activates protein kinase A?",
        "options": [
            "Adenylate cyclase",
            "Cyclic AMP",
            "G-protein",
            "Phosphodiesterase"
        ],
        "answer": "Cyclic AMP",
        "difficulty": "hard",
        "topic": "Cell Signaling and Communication",
        "explanation": "Cyclic AMP binds to protein kinase A, activating it to phosphorylate target proteins."
    },
    {
        "id": 223,
        "question": "What is the primary morphological feature of apoptosis?",
        "options": [
            "Cell swelling",
            "Chromatin condensation",
            "Membrane rupture",
            "Cytoplasmic leakage"
        ],
        "answer": "Chromatin condensation",
        "difficulty": "medium",
        "topic": "Cell Death",
        "explanation": "Apoptosis is characterized by chromatin condensation, cell shrinkage, and formation of apoptotic bodies."
    },
    {
        "id": 224,
        "question": "Which type of stem cell is used to generate induced pluripotent stem cells (iPSCs)?",
        "options": [
            "Embryonic stem cells",
            "Adult somatic cells",
            "Hematopoietic stem cells",
            "Totipotent stem cells"
        ],
        "answer": "Adult somatic cells",
        "difficulty": "medium",
        "topic": "Stem Cells and Cell Differentiation",
        "explanation": "iPSCs are generated by reprogramming adult somatic cells to a pluripotent state using specific transcription factors."
    },
    {
        "id": 225,
        "question": "Which hallmark of cancer involves the formation of new blood vessels?",
        "options": [
            "Evading apoptosis",
            "Sustained angiogenesis",
            "Tissue invasion",
            "Genomic instability"
        ],
        "answer": "Sustained angiogenesis",
        "difficulty": "medium",
        "topic": "Cancer Cell Biology",
        "explanation": "Sustained angiogenesis allows tumors to form new blood vessels to support growth and nutrient supply."
    },
    {
        "id": 226,
        "question": "Which technique is used to quantify mRNA levels in cells?",
        "options": [
            "Western blotting",
            "RT-PCR",
            "Immunofluorescence",
            "Flow cytometry"
        ],
        "answer": "RT-PCR",
        "difficulty": "medium",
        "topic": "Techniques in Cell Biology",
        "explanation": "RT-PCR quantifies mRNA levels by amplifying cDNA synthesized from RNA."
    },
    {
        "id": 227,
        "question": "What is the primary advantage of 3D cell culture over 2D culture?",
        "options": [
            "Lower cost",
            "Mimics tissue architecture",
            "Faster cell growth",
            "Simpler imaging"
        ],
        "answer": "Mimics tissue architecture",
        "difficulty": "hard",
        "topic": "Special Topics",
        "explanation": "3D cell cultures, such as organoids, better mimic the architecture and microenvironment of tissues."
    },
    {
        "id": 228,
        "question": "Which organelle contact site facilitates calcium signaling between the ER and mitochondria?",
        "options": [
            "Mitochondria-associated membranes (MAMs)",
            "Nuclear pore complex",
            "Golgi-ER contact sites",
            "Lysosome-peroxisome contacts"
        ],
        "answer": "Mitochondria-associated membranes (MAMs)",
        "difficulty": "hard",
        "topic": "Special Topics",
        "explanation": "MAMs are contact sites between the ER and mitochondria that facilitate calcium signaling and lipid transfer."
    },
    {
        "id": 229,
        "question": "What is the primary function of the central vacuole in plant cells?",
        "options": [
            "Protein synthesis",
            "Storage and turgor pressure",
            "Energy production",
            "DNA replication"
        ],
        "answer": "Storage and turgor pressure",
        "difficulty": "easy",
        "topic": "Chloroplasts",
        "explanation": "The central vacuole stores nutrients, waste, and maintains turgor pressure for structural support."
    },
    {
        "id": 230,
        "question": "Which enzyme is responsible for sealing DNA strands during replication?",
        "options": [
            "Helicase",
            "DNA polymerase",
            "Ligase",
            "Topoisomerase"
        ],
        "answer": "Ligase",
        "difficulty": "medium",
        "topic": "DNA, RNA, and Protein Synthesis",
        "explanation": "DNA ligase seals nicks in the DNA backbone, joining Okazaki fragments during replication."
    },
    {
        "id": 231,
        "question": "What is the primary role of siRNA in gene regulation?",
        "options": [
            "Promote transcription",
            "Degrade mRNA",
            "Synthesize proteins",
            "Replicate DNA"
        ],
        "answer": "Degrade mRNA",
        "difficulty": "hard",
        "topic": "Gene Expression and Regulation",
        "explanation": "Small interfering RNA (siRNA) triggers RNA interference, leading to the degradation of target mRNA."
    },
    {
        "id": 232,
        "question": "Which pathway is activated by growth factors in cell signaling?",
        "options": [
            "cAMP pathway",
            "IP3/DAG pathway",
            "MAPK/ERK pathway",
            "Notch pathway"
        ],
        "answer": "MAPK/ERK pathway",
        "difficulty": "hard",
        "topic": "Cell Signaling and Communication",
        "explanation": "The MAPK/ERK pathway is activated by growth factors, promoting cell proliferation and differentiation."
    },
    {
        "id": 233,
        "question": "What is the primary role of necrosis in cell death?",
        "options": [
            "Programmed cell death",
            "Uncontrolled cell death",
            "Recycling cellular components",
            "Cell division"
        ],
        "answer": "Uncontrolled cell death",
        "difficulty": "medium",
        "topic": "Cell Death",
        "explanation": "Necrosis is an uncontrolled form of cell death caused by injury, leading to inflammation."
    },
    {
        "id": 234,
        "question": "Which type of stem cell is pluripotent but not totipotent?",
        "options": [
            "Embryonic stem cells",
            "Adult stem cells",
            "Hematopoietic stem cells",
            "Neural stem cells"
        ],
        "answer": "Embryonic stem cells",
        "difficulty": "medium",
        "topic": "Stem Cells and Cell Differentiation",
        "explanation": "Embryonic stem cells are pluripotent, capable of differentiating into most cell types, but not totipotent."
    },
    {
        "id": 235,
        "question": "Which oncogene is commonly associated with lung cancer?",
        "options": [
            "BRCA1",
            "Ras",
            "p53",
            "Rb"
        ],
        "answer": "Ras",
        "difficulty": "hard",
        "topic": "Cancer Cell Biology",
        "explanation": "Ras mutations are frequently found in lung cancer, promoting uncontrolled cell growth."
    },
    {
        "id": 236,
        "question": "Which technique is used to study protein-protein interactions in cells?",
        "options": [
            "Co-immunoprecipitation",
            "PCR",
            "Flow cytometry",
            "CRISPR/Cas9"
        ],
        "answer": "Co-immunoprecipitation",
        "difficulty": "hard",
        "topic": "Techniques in Cell Biology",
        "explanation": "Co-immunoprecipitation isolates protein complexes to study protein-protein interactions."
    },
    {
        "id": 237,
        "question": "What is the primary role of synthetic cells in cell biology research?",
        "options": [
            "DNA sequencing",
            "Modeling cellular processes",
            "Protein purification",
            "Cell imaging"
        ],
        "answer": "Modeling cellular processes",
        "difficulty": "hard",
        "topic": "Special Topics",
        "explanation": "Synthetic cells are designed to model cellular processes, aiding in the study of minimal life requirements."
    },
    {
        "id": 238,
        "question": "Which molecule is the primary component of the cell wall in fungi?",
        "options": [
            "Cellulose",
            "Chitin",
            "Peptidoglycan",
            "Glycogen"
        ],
        "answer": "Chitin",
        "difficulty": "medium",
        "topic": "Introduction to Cell Biology",
        "explanation": "Fungal cell walls are primarily composed of chitin, a polysaccharide providing structural support."
    },
    {
        "id": 239,
        "question": "What is the primary function of the contractile vacuole in protists?",
        "options": [
            "Protein synthesis",
            "Osmoregulation",
            "Energy production",
            "Cell movement"
        ],
        "answer": "Osmoregulation",
        "difficulty": "medium",
        "topic": "Cytoplasm and Cytosol",
        "explanation": "The contractile vacuole expels excess water to maintain osmotic balance in freshwater protists."
    },
    {
        "id": 240,
        "question": "Which phase of mitosis involves the condensation of chromosomes?",
        "options": [
            "Prophase",
            "Metaphase",
            "Anaphase",
            "Telophase"
        ],
        "answer": "Prophase",
        "difficulty": "medium",
        "topic": "Cell Cycle and Cell Division",
        "explanation": "During prophase, chromosomes condense, and the mitotic spindle begins to form."
    },
    {
        "id": 241,
        "question": "What is the primary role of the centromere during cell division?",
        "options": [
            "DNA replication",
            "Chromosome attachment",
            "Protein synthesis",
            "Energy production"
        ],
        "answer": "Chromosome attachment",
        "difficulty": "medium",
        "topic": "Cell Cycle and Cell Division",
        "explanation": "The centromere is the region where spindle fibers attach to chromosomes during mitosis."
    },
    {
        "id": 242,
        "question": "Which enzyme is responsible for synthesizing RNA during transcription?",
        "options": [
            "DNA polymerase",
            "RNA polymerase",
            "Helicase",
            "Ligase"
        ],
        "answer": "RNA polymerase",
        "difficulty": "medium",
        "topic": "DNA, RNA, and Protein Synthesis",
        "explanation": "RNA polymerase synthesizes RNA from a DNA template during transcription."
    },
    {
        "id": 243,
        "question": "What is the primary function of the Notch signaling pathway?",
        "options": [
            "Promote cell proliferation",
            "Regulate cell fate",
            "Induce apoptosis",
            "Enhance angiogenesis"
        ],
        "answer": "Regulate cell fate",
        "difficulty": "hard",
        "topic": "Cell Signaling and Communication",
        "explanation": "The Notch pathway regulates cell fate decisions during development and differentiation."
    },
    {
        "id": 244,
        "question": "Which process is responsible for the breakdown of glucose in the absence of oxygen?",
        "options": [
            "Glycolysis",
            "Krebs cycle",
            "Electron transport chain",
            "Oxidative phosphorylation"
        ],
        "answer": "Glycolysis",
        "difficulty": "medium",
        "topic": "Mitochondria",
        "explanation": "Glycolysis occurs in the cytoplasm and breaks down glucose into pyruvate without requiring oxygen."
    },
    {
        "id": 245,
        "question": "What is the primary role of the Wnt signaling pathway?",
        "options": [
            "DNA replication",
            "Cell fate determination",
            "Protein synthesis",
            "Cell division"
        ],
        "answer": "Cell fate determination",
        "difficulty": "hard",
        "topic": "Cell Signaling and Communication",
        "explanation": "The Wnt pathway regulates cell fate, proliferation, and migration during development."
    },
    {
        "id": 246,
        "question": "Which type of cell death is associated with inflammation?",
        "options": [
            "Apoptosis",
            "Necrosis",
            "Autophagy",
            "Mitosis"
        ],
        "answer": "Necrosis",
        "difficulty": "medium",
        "topic": "Cell Death",
        "explanation": "Necrosis causes cell membrane rupture, leading to inflammation, unlike apoptosis."
    },
    {
        "id": 247,
        "question": "Which type of stem cell is multipotent?",
        "options": [
            "Embryonic stem cells",
            "Hematopoietic stem cells",
            "Induced pluripotent stem cells",
            "Totipotent stem cells"
        ],
        "answer": "Hematopoietic stem cells",
        "difficulty": "medium",
        "topic": "Stem Cells and Cell Differentiation",
        "explanation": "Hematopoietic stem cells are multipotent, differentiating into various blood cell types."
    },
    {
        "id": 248,
        "question": "Which molecule is commonly mutated in colorectal cancer?",
        "options": [
            "APC",
            "BRCA1",
            "p53",
            "Ras"
        ],
        "answer": "APC",
        "difficulty": "hard",
        "topic": "Cancer Cell Biology",
        "explanation": "APC mutations are frequently associated with colorectal cancer, disrupting Wnt signaling."
    },
    {
        "id": 249,
        "question": "Which technique is used to edit genes with high precision in cell biology?",
        "options": [
            "Western blotting",
            "CRISPR/Cas9",
            "Flow cytometry",
            "RT-PCR"
        ],
        "answer": "CRISPR/Cas9",
        "difficulty": "easy",
        "topic": "Techniques in Cell Biology",
        "explanation": "CRISPR/Cas9 is a precise gene-editing tool that targets specific DNA sequences."
    },
    {
        "id": 250,
        "question": "What is the primary role of single-cell transcriptomics in cell biology?",
        "options": [
            "Protein purification",
            "Analyze gene expression heterogeneity",
            "DNA amplification",
            "Cell imaging"
        ],
        "answer": "Analyze gene expression heterogeneity",
        "difficulty": "hard",
        "topic": "Special Topics",
        "explanation": "Single-cell transcriptomics reveals gene expression differences among individual cells, highlighting cellular diversity."
    }
,
    {
        "id": 251,
        "question": "Who proposed the cell theory alongside Theodor Schwann?",
        "options": [
            "Robert Hooke",
            "Antonie van Leeuwenhoek",
            "Matthias Schleiden",
            "Rudolf Virchow"
        ],
        "answer": "Matthias Schleiden",
        "difficulty": "easy",
        "topic": "Introduction to Cell Biology",
        "explanation": "Matthias Schleiden and Theodor Schwann proposed the cell theory in 1838-1839, stating that all living organisms are composed of cells."
    },
    {
        "id": 252,
        "question": "Which microscopy technique is best for studying the surface topology of cells?",
        "options": [
            "Transmission electron microscopy",
            "Scanning electron microscopy",
            "Fluorescence microscopy",
            "Confocal microscopy"
        ],
        "answer": "Scanning electron microscopy",
        "difficulty": "medium",
        "topic": "Introduction to Cell Biology",
        "explanation": "Scanning electron microscopy (SEM) provides detailed 3D images of cell surfaces."
    },
    {
        "id": 253,
        "question": "What is the primary role of integral membrane proteins in the plasma membrane?",
        "options": [
            "Provide structural support",
            "Facilitate transport and signaling",
            "Store energy",
            "Synthesize lipids"
        ],
        "answer": "Facilitate transport and signaling",
        "difficulty": "easy",
        "topic": "Plasma Membrane",
        "explanation": "Integral membrane proteins function as channels, carriers, or receptors for transport and signaling."
    },
    {
        "id": 254,
        "question": "Which process moves substances against their concentration gradient using ATP?",
        "options": [
            "Diffusion",
            "Facilitated diffusion",
            "Active transport",
            "Osmosis"
        ],
        "answer": "Active transport",
        "difficulty": "medium",
        "topic": "Plasma Membrane",
        "explanation": "Active transport uses ATP to move substances against their concentration gradient, such as in the sodium-potassium pump."
    },
    {
        "id": 255,
        "question": "What is the primary function of cytosolic enzymes?",
        "options": [
            "DNA replication",
            "Metabolic reactions",
            "Protein degradation",
            "Cell adhesion"
        ],
        "answer": "Metabolic reactions",
        "difficulty": "easy",
        "topic": "Cytoplasm and Cytosol",
        "explanation": "Cytosolic enzymes catalyze metabolic reactions, such as glycolysis, in the cytoplasm."
    },
    {
        "id": 256,
        "question": "What is the primary function of nuclear pores?",
        "options": [
            "Synthesize DNA",
            "Transport molecules",
            "Store chromatin",
            "Produce ribosomes"
        ],
        "answer": "Transport molecules",
        "difficulty": "medium",
        "topic": "Nucleus",
        "explanation": "Nuclear pores regulate the transport of molecules, such as RNA and proteins, between the nucleus and cytoplasm."
    },
    {
        "id": 257,
        "question": "Which structure in the nucleus is responsible for rRNA synthesis?",
        "options": [
            "Nuclear envelope",
            "Nucleolus",
            "Chromatin",
            "Nuclear lamina"
        ],
        "answer": "Nucleolus",
        "difficulty": "easy",
        "topic": "Nucleus",
        "explanation": "The nucleolus synthesizes ribosomal RNA and assembles ribosome subunits."
    },
    {
        "id": 258,
        "question": "Which organelle is primarily responsible for lipid synthesis in eukaryotic cells?",
        "options": [
            "Rough ER",
            "Smooth ER",
            "Golgi apparatus",
            "Mitochondrion"
        ],
        "answer": "Smooth ER",
        "difficulty": "medium",
        "topic": "Endoplasmic Reticulum",
        "explanation": "The smooth ER synthesizes lipids, including phospholipids and steroids."
    },
    {
        "id": 259,
        "question": "What is the primary role of the cis face of the Golgi apparatus?",
        "options": [
            "Package proteins for secretion",
            "Receive vesicles from the ER",
            "Modify lipids",
            "Degrade proteins"
        ],
        "answer": "Receive vesicles from the ER",
        "difficulty": "hard",
        "topic": "Golgi Apparatus",
        "explanation": "The cis face of the Golgi apparatus receives vesicles containing proteins and lipids from the ER for processing."
    },
    {
        "id": 260,
        "question": "Which lysosomal storage disease is caused by a deficiency in glucocerebrosidase?",
        "options": [
            "Tay-Sachs disease",
            "Gaucher’s disease",
            "Fabry disease",
            "Niemann-Pick disease"
        ],
        "answer": "Gaucher’s disease",
        "difficulty": "hard",
        "topic": "Lysosomes and Peroxisomes",
        "explanation": "Gaucher’s disease results from a deficiency in glucocerebrosidase, leading to glucocerebroside accumulation."
    },
    {
        "id": 261,
        "question": "Which process in mitochondria generates the majority of ATP?",
        "options": [
            "Glycolysis",
            "Krebs cycle",
            "Oxidative phosphorylation",
            "Fermentation"
        ],
        "answer": "Oxidative phosphorylation",
        "difficulty": "medium",
        "topic": "Mitochondria",
        "explanation": "Oxidative phosphorylation in the electron transport chain produces most of the cell’s ATP."
    },
    {
        "id": 262,
        "question": "Which molecule in chloroplasts is responsible for carbon fixation?",
        "options": [
            "Chlorophyll",
            "RuBisCO",
            "ATP synthase",
            "Cytochrome"
        ],
        "answer": "RuBisCO",
        "difficulty": "hard",
        "topic": "Chloroplasts",
        "explanation": "RuBisCO catalyzes carbon fixation in the Calvin cycle, incorporating CO2 into organic molecules."
    },
    {
        "id": 263,
        "question": "Which type of ribosome synthesizes proteins destined for secretion?",
        "options": [
            "Free ribosomes",
            "Membrane-bound ribosomes",
            "Mitochondrial ribosomes",
            "Chloroplast ribosomes"
        ],
        "answer": "Membrane-bound ribosomes",
        "difficulty": "medium",
        "topic": "Ribosomes",
        "explanation": "Membrane-bound ribosomes on the rough ER synthesize proteins for secretion or membrane integration."
    },
    {
        "id": 264,
        "question": "Which cytoskeletal component provides mechanical strength to cells?",
        "options": [
            "Microfilaments",
            "Intermediate filaments",
            "Microtubules",
            "Centrioles"
        ],
        "answer": "Intermediate filaments",
        "difficulty": "medium",
        "topic": "Cytoskeleton and Cell Movement",
        "explanation": "Intermediate filaments, such as keratin, provide mechanical strength and resist stress."
    },
    {
        "id": 265,
        "question": "Which motor protein moves vesicles toward the plus end of microtubules?",
        "options": [
            "Dynein",
            "Kinesin",
            "Myosin",
            "Actin"
        ],
        "answer": "Kinesin",
        "difficulty": "hard",
        "topic": "Cytoskeleton and Cell Movement",
        "explanation": "Kinesin transports vesicles toward the plus end of microtubules, typically toward the cell periphery."
    },
    {
        "id": 266,
        "question": "Which cell junction allows the passage of small molecules between adjacent cells?",
        "options": [
            "Tight junction",
            "Gap junction",
            "Desmosome",
            "Hemidesmosome"
        ],
        "answer": "Gap junction",
        "difficulty": "medium",
        "topic": "Cell Junctions and Adhesion",
        "explanation": "Gap junctions allow small molecules and ions to pass between cells, facilitating communication."
    },
    {
        "id": 267,
        "question": "What is the primary role of the extracellular matrix in cell adhesion?",
        "options": [
            "Energy storage",
            "Structural support",
            "Protein synthesis",
            "DNA replication"
        ],
        "answer": "Structural support",
        "difficulty": "easy",
        "topic": "Cell Junctions and Adhesion",
        "explanation": "The extracellular matrix provides structural support and mediates cell adhesion via integrins."
    },
    {
        "id": 268,
        "question": "Which phase of the cell cycle checks for DNA damage before mitosis?",
        "options": [
            "G1 phase",
            "S phase",
            "G2 phase",
            "M phase"
        ],
        "answer": "G2 phase",
        "difficulty": "medium",
        "topic": "Cell Cycle and Cell Division",
        "explanation": "The G2 checkpoint ensures DNA is undamaged and fully replicated before entering mitosis."
    },
    {
        "id": 269,
        "question": "During which stage of mitosis do sister chromatids separate?",
        "options": [
            "Prophase",
            "Metaphase",
            "Anaphase",
            "Telophase"
        ],
        "answer": "Anaphase",
        "difficulty": "medium",
        "topic": "Cell Cycle and Cell Division",
        "explanation": "In anaphase, sister chromatids are pulled to opposite poles of the cell."
    },
    {
        "id": 270,
        "question": "What is the primary source of genetic diversity during meiosis I?",
        "options": [
            "Cytokinesis",
            "Crossing over",
            "Spindle formation",
            "DNA replication"
        ],
        "answer": "Crossing over",
        "difficulty": "medium",
        "topic": "Cell Cycle and Cell Division",
        "explanation": "Crossing over during prophase I exchanges genetic material between homologous chromosomes."
    },
    {
        "id": 271,
        "question": "Which protein regulates the G2/M transition in the cell cycle?",
        "options": [
            "Cyclin A",
            "Cyclin B",
            "Cyclin D",
            "Cyclin E"
        ],
        "answer": "Cyclin B",
        "difficulty": "hard",
        "topic": "Cell Cycle and Cell Division",
        "explanation": "Cyclin B, with CDK1, regulates the transition from G2 to M phase, initiating mitosis."
    },
    {
        "id": 272,
        "question": "What is the primary trigger for apoptosis in damaged cells?",
        "options": [
            "DNA damage",
            "Energy surplus",
            "Cell growth",
            "Protein synthesis"
        ],
        "answer": "DNA damage",
        "difficulty": "medium",
        "topic": "Cell Death",
        "explanation": "DNA damage activates pathways, such as p53, that trigger apoptosis to eliminate damaged cells."
    },
    {
        "id": 273,
        "question": "Which molecule carries the genetic code from the nucleus to the cytoplasm?",
        "options": [
            "tRNA",
            "mRNA",
            "rRNA",
            "snRNA"
        ],
        "answer": "mRNA",
        "difficulty": "easy",
        "topic": "DNA, RNA, and Protein Synthesis",
        "explanation": "mRNA carries the genetic code from DNA in the nucleus to ribosomes in the cytoplasm for translation."
    },
    {
        "id": 274,
        "question": "What is the role of the anticodon on tRNA?",
        "options": [
            "Binds to amino acids",
            "Matches mRNA codons",
            "Forms ribosomes",
            "Synthesizes RNA"
        ],
        "answer": "Matches mRNA codons",
        "difficulty": "medium",
        "topic": "DNA, RNA, and Protein Synthesis",
        "explanation": "The anticodon on tRNA pairs with the codon on mRNA to ensure accurate translation."
    },
    {
        "id": 275,
        "question": "Which process joins exons to produce mature mRNA?",
        "options": [
            "Transcription",
            "Translation",
            "Splicing",
            "Replication"
        ],
        "answer": "Splicing",
        "difficulty": "medium",
        "topic": "Gene Expression and Regulation",
        "explanation": "Splicing removes introns and joins exons to produce mature mRNA for translation."
    },
    {
        "id": 276,
        "question": "Which epigenetic modification typically activates gene expression?",
        "options": [
            "DNA methylation",
            "Histone deacetylation",
            "Histone acetylation",
            "Chromatin condensation"
        ],
        "answer": "Histone acetylation",
        "difficulty": "hard",
        "topic": "Gene Expression and Regulation",
        "explanation": "Histone acetylation loosens chromatin, allowing transcription factors to access DNA."
    },
    {
        "id": 277,
        "question": "Which signaling pathway is activated by epinephrine in muscle cells?",
        "options": [
            "MAPK/ERK pathway",
            "cAMP pathway",
            "IP3/DAG pathway",
            "Wnt pathway"
        ],
        "answer": "cAMP pathway",
        "difficulty": "hard",
        "topic": "Cell Signaling and Communication",
        "explanation": "Epinephrine activates G-protein-coupled receptors, triggering the cAMP pathway in muscle cells."
    },
    {
        "id": 278,
        "question": "What is the primary function of calcium ions in cell signaling?",
        "options": [
            "DNA replication",
            "Signal amplification",
            "Protein synthesis",
            "Cell division"
        ],
        "answer": "Signal amplification",
        "difficulty": "medium",
        "topic": "Cell Signaling and Communication",
        "explanation": "Calcium ions act as second messengers, amplifying signals in pathways like IP3/DAG."
    },
    {
        "id": 279,
        "question": "Which characteristic distinguishes cancer cells from normal cells?",
        "options": [
            "Controlled growth",
            "Uncontrolled division",
            "High apoptosis rates",
            "Stable genome"
        ],
        "answer": "Uncontrolled division",
        "difficulty": "easy",
        "topic": "Cancer Cell Biology",
        "explanation": "Cancer cells exhibit uncontrolled division due to mutations in growth-regulating genes."
    },
    {
        "id": 280,
        "question": "Which tumor suppressor gene is known as the 'guardian of the genome'?",
        "options": [
            "BRCA1",
            "p53",
            "Rb",
            "APC"
        ],
        "answer": "p53",
        "difficulty": "medium",
        "topic": "Cancer Cell Biology",
        "explanation": "p53 monitors DNA damage and triggers repair or apoptosis, earning it the title 'guardian of the genome'."
    },
    {
        "id": 281,
        "question": "Which technique separates cells based on size and fluorescence?",
        "options": [
            "Western blotting",
            "Flow cytometry",
            "PCR",
            "CRISPR/Cas9"
        ],
        "answer": "Flow cytometry",
        "difficulty": "medium",
        "topic": "Techniques in Cell Biology",
        "explanation": "Flow cytometry analyzes and sorts cells based on size, granularity, and fluorescence markers."
    },
    {
        "id": 282,
        "question": "What is the primary application of CRISPR/Cas9 in cell biology?",
        "options": [
            "Protein detection",
            "Gene editing",
            "Cell imaging",
            "RNA amplification"
        ],
        "answer": "Gene editing",
        "difficulty": "easy",
        "topic": "Techniques in Cell Biology",
        "explanation": "CRISPR/Cas9 targets specific DNA sequences for precise gene editing."
    },
    {
        "id": 283,
        "question": "What is the primary advantage of organoids in cell biology research?",
        "options": [
            "Low cost",
            "Mimic organ function",
            "Rapid cell division",
            "Simple maintenance"
        ],
        "answer": "Mimic organ function",
        "difficulty": "hard",
        "topic": "Special Topics",
        "explanation": "Organoids replicate organ structure and function, making them valuable for studying development and disease."
    },
    {
        "id": 284,
        "question": "Which type of stem cell can differentiate into all cell types, including extra-embryonic tissues?",
        "options": [
            "Pluripotent",
            "Multipotent",
            "Totipotent",
            "Unipotent"
        ],
        "answer": "Totipotent",
        "difficulty": "medium",
        "topic": "Stem Cells and Cell Differentiation",
        "explanation": "Totipotent stem cells, like zygotes, can differentiate into all cell types, including placental tissues."
    },
    {
        "id": 285,
        "question": "Which molecule is the primary product of the Calvin cycle?",
        "options": [
            "ATP",
            "NADPH",
            "Glucose",
            "Oxygen"
        ],
        "answer": "Glucose",
        "difficulty": "medium",
        "topic": "Chloroplasts",
        "explanation": "The Calvin cycle uses ATP and NADPH to fix carbon dioxide into glucose."
    },
    {
        "id": 286,
        "question": "Which motor protein is involved in muscle contraction?",
        "options": [
            "Kinesin",
            "Dynein",
            "Myosin",
            "Tubulin"
        ],
        "answer": "Myosin",
        "difficulty": "medium",
        "topic": "Cytoskeleton and Cell Movement",
        "explanation": "Myosin interacts with actin microfilaments to drive muscle contraction."
    },
    {
        "id": 287,
        "question": "Which cell junction anchors epithelial cells to each other?",
        "options": [
            "Tight junction",
            "Gap junction",
            "Desmosome",
            "Plasmodesmata"
        ],
        "answer": "Desmosome",
        "difficulty": "medium",
        "topic": "Cell Junctions and Adhesion",
        "explanation": "Desmosomes provide strong mechanical attachments between epithelial cells."
    },
    {
        "id": 288,
        "question": "Which checkpoint halts the cell cycle if DNA is damaged in G1?",
        "options": [
            "G1 checkpoint",
            "G2 checkpoint",
            "Spindle assembly checkpoint",
            "Metaphase checkpoint"
        ],
        "answer": "G1 checkpoint",
        "difficulty": "hard",
        "topic": "Cell Cycle and Cell Division",
        "explanation": "The G1 checkpoint assesses DNA damage and cell size before allowing progression to S phase."
    },
    {
        "id": 289,
        "question": "What is the primary function of the trp operon in bacteria?",
        "options": [
            "Regulate lactose metabolism",
            "Regulate tryptophan synthesis",
            "Promote cell division",
            "Synthesize DNA"
        ],
        "answer": "Regulate tryptophan synthesis",
        "difficulty": "hard",
        "topic": "Gene Expression and Regulation",
        "explanation": "The trp operon regulates genes involved in tryptophan synthesis in bacteria."
    },
    {
        "id": 290,
        "question": "Which molecule is released from the ER in the IP3/DAG pathway?",
        "options": [
            "cAMP",
            "Calcium ions",
            "ATP",
            "NADPH"
        ],
        "answer": "Calcium ions",
        "difficulty": "hard",
        "topic": "Cell Signaling and Communication",
        "explanation": "IP3 triggers the release of calcium ions from the ER, amplifying the signal."
    },
    {
        "id": 291,
        "question": "Which hallmark of cancer enables tumors to evade immune detection?",
        "options": [
            "Sustained angiogenesis",
            "Evading immune destruction",
            "Tissue invasion",
            "Genomic instability"
        ],
        "answer": "Evading immune destruction",
        "difficulty": "medium",
        "topic": "Cancer Cell Biology",
        "explanation": "Cancer cells evade immune detection by altering surface antigens or secreting immunosuppressive factors."
    },
    {
        "id": 292,
        "question": "What is the primary role of single-cell transcriptomics in studying tumors?",
        "options": [
            "Protein purification",
            "Analyze cellular heterogeneity",
            "DNA amplification",
            "Cell imaging"
        ],
        "answer": "Analyze cellular heterogeneity",
        "difficulty": "hard",
        "topic": "Special Topics",
        "explanation": "Single-cell transcriptomics reveals gene expression differences within tumor cells, aiding in understanding heterogeneity."
    },
    {
        "id": 293,
        "question": "Which type of RNA catalyzes peptide bond formation in translation?",
        "options": [
            "mRNA",
            "tRNA",
            "rRNA",
            "miRNA"
        ],
        "answer": "rRNA",
        "difficulty": "hard",
        "topic": "DNA, RNA, and Protein Synthesis",
        "explanation": "Ribosomal RNA in the ribosome’s peptidyl transferase center catalyzes peptide bond formation."
    },
    {
        "id": 294,
        "question": "What is the primary function of peroxisomes in lipid metabolism?",
        "options": [
            "Lipid synthesis",
            "Beta-oxidation",
            "Protein degradation",
            "Carbohydrate storage"
        ],
        "answer": "Beta-oxidation",
        "difficulty": "medium",
        "topic": "Lysosomes and Peroxisomes",
        "explanation": "Peroxisomes perform beta-oxidation to break down fatty acids, producing energy."
    },
    {
        "id": 295,
        "question": "Which process reduces the chromosome number by half?",
        "options": [
            "Mitosis",
            "Meiosis",
            "Cytokinesis",
            "Binary fission"
        ],
        "answer": "Meiosis",
        "difficulty": "easy",
        "topic": "Cell Cycle and Cell Division",
        "explanation": "Meiosis produces haploid gametes by halving the chromosome number."
    },
    {
        "id": 296,
        "question": "Which structure in mitochondria increases the surface area for ATP production?",
        "options": [
            "Matrix",
            "Cristae",
            "Outer membrane",
            "Intermembrane space"
        ],
        "answer": "Cristae",
        "difficulty": "medium",
        "topic": "Mitochondria",
        "explanation": "Cristae are inner membrane folds that house the electron transport chain, increasing ATP production efficiency."
    },
    {
        "id": 297,
        "question": "Which technique detects specific DNA sequences in cells?",
        "options": [
            "Western blotting",
            "PCR",
            "Immunofluorescence",
            "Flow cytometry"
        ],
        "answer": "PCR",
        "difficulty": "medium",
        "topic": "Techniques in Cell Biology",
        "explanation": "Polymerase chain reaction (PCR) amplifies and detects specific DNA sequences."
    },
    {
        "id": 298,
        "question": "What is the primary role of long non-coding RNAs (lncRNAs) in gene regulation?",
        "options": [
            "Encode proteins",
            "Regulate chromatin structure",
            "Synthesize tRNA",
            "Degrade proteins"
        ],
        "answer": "Regulate chromatin structure",
        "difficulty": "hard",
        "topic": "Gene Expression and Regulation",
        "explanation": "lncRNAs regulate gene expression by modulating chromatin structure and transcription."
    },
    {
        "id": 299,
        "question": "Which type of signaling involves local diffusion of signals to nearby cells?",
        "options": [
            "Endocrine",
            "Paracrine",
            "Autocrine",
            "Juxtacrine"
        ],
        "answer": "Paracrine",
        "difficulty": "medium",
        "topic": "Cell Signaling and Communication",
        "explanation": "Paracrine signaling involves signals diffusing to nearby cells to elicit a response."
    },
    {
        "id": 300,
        "question": "Which gene is commonly mutated in pancreatic cancer?",
        "options": [
            "BRCA1",
            "Ras",
            "p53",
            "APC"
        ],
        "answer": "Ras",
        "difficulty": "hard",
        "topic": "Cancer Cell Biology",
        "explanation": "K-Ras mutations are prevalent in pancreatic cancer, driving uncontrolled cell growth."
    },
    {
        "id": 301,
        "question": "Which organelle is responsible for synthesizing proteins for the plasma membrane?",
        "options": [
            "Smooth ER",
            "Rough ER",
            "Golgi apparatus",
            "Mitochondrion"
        ],
        "answer": "Rough ER",
        "difficulty": "medium",
        "topic": "Endoplasmic Reticulum",
        "explanation": "The rough ER synthesizes proteins destined for the plasma membrane or secretion."
    },
    {
        "id": 302,
        "question": "What is the primary function of the centrosome during mitosis?",
        "options": [
            "Protein synthesis",
            "Spindle organization",
            "DNA replication",
            "Lipid synthesis"
        ],
        "answer": "Spindle organization",
        "difficulty": "medium",
        "topic": "Cytoskeleton and Cell Movement",
        "explanation": "The centrosome organizes microtubules to form the mitotic spindle for chromosome segregation."
    },
    {
        "id": 303,
        "question": "Which phase of meiosis separates homologous chromosomes?",
        "options": [
            "Anaphase I",
            "Anaphase II",
            "Metaphase I",
            "Telophase II"
        ],
        "answer": "Anaphase I",
        "difficulty": "hard",
        "topic": "Cell Cycle and Cell Division",
        "explanation": "In anaphase I, homologous chromosomes are pulled to opposite poles, reducing the chromosome number."
    },
    {
        "id": 304,
        "question": "Which molecule is the primary electron acceptor in photosystem II?",
        "options": [
            "NADPH",
            "Plastoquinone",
            "ATP",
            "Chlorophyll"
        ],
        "answer": "Plastoquinone",
        "difficulty": "hard",
        "topic": "Chloroplasts",
        "explanation": "Plastoquinone accepts electrons from photosystem II during the light-dependent reactions."
    },
    {
        "id": 305,
        "question": "Which molecule is the primary component of microfilaments?",
        "options": [
            "Tubulin",
            "Actin",
            "Keratin",
            "Myosin"
        ],
        "answer": "Actin",
        "difficulty": "medium",
        "topic": "Cytoskeleton and Cell Movement",
        "explanation": "Microfilaments are composed of actin, supporting cell motility and shape."
    },
    {
        "id": 306,
        "question": "What is the primary function of hemidesmosomes?",
        "options": [
            "Allow communication",
            "Anchor cells to the matrix",
            "Prevent leakage",
            "Facilitate transport"
        ],
        "answer": "Anchor cells to the matrix",
        "difficulty": "medium",
        "topic": "Cell Junctions and Adhesion",
        "explanation": "Hemidesmosomes anchor cells to the extracellular matrix via integrins."
    },
    {
        "id": 307,
        "question": "Which receptor type is directly linked to ion channels?",
        "options": [
            "G-protein-coupled receptor",
            "Enzyme-linked receptor",
            "Ion channel-linked receptor",
            "Nuclear receptor"
        ],
        "answer": "Ion channel-linked receptor",
        "difficulty": "medium",
        "topic": "Cell Signaling and Communication",
        "explanation": "Ion channel-linked receptors open or close ion channels in response to ligand binding."
    },
    {
        "id": 308,
        "question": "What is the primary function of autophagy in cellular homeostasis?",
        "options": [
            "Cell division",
            "Recycling organelles",
            "DNA replication",
            "Energy production"
        ],
        "answer": "Recycling organelles",
        "difficulty": "medium",
        "topic": "Cell Death",
        "explanation": "Autophagy degrades damaged organelles and proteins, recycling their components."
    },
    {
        "id": 309,
        "question": "Which type of stem cell is found in the neural crest?",
        "options": [
            "Embryonic",
            "Multipotent",
            "Induced pluripotent",
            "Totipotent"
        ],
        "answer": "Multipotent",
        "difficulty": "hard",
        "topic": "Stem Cells and Cell Differentiation",
        "explanation": "Neural crest stem cells are multipotent, differentiating into various cell types like neurons and glia."
    },
    {
        "id": 310,
        "question": "Which process enables cancer cells to spread to distant tissues?",
        "options": [
            "Angiogenesis",
            "Metastasis",
            "Apoptosis",
            "Genomic instability"
        ],
        "answer": "Metastasis",
        "difficulty": "medium",
        "topic": "Cancer Cell Biology",
        "explanation": "Metastasis is the spread of cancer cells from the primary tumor to distant sites."
    },
    {
        "id": 311,
        "question": "Which technique visualizes specific proteins in fixed cells?",
        "options": [
            "PCR",
            "Immunocytochemistry",
            "Flow cytometry",
            "Western blotting"
        ],
        "answer": "Immunocytochemistry",
        "difficulty": "medium",
        "topic": "Techniques in Cell Biology",
        "explanation": "Immunocytochemistry uses antibodies to visualize protein localization in fixed cells."
    },
    {
        "id": 312,
        "question": "Which structure in chloroplasts is the site of ATP synthesis?",
        "options": [
            "Stroma",
            "Thylakoid membrane",
            "Outer membrane",
            "Granum"
        ],
        "answer": "Thylakoid membrane",
        "difficulty": "medium",
        "topic": "Chloroplasts",
        "explanation": "ATP synthase on the thylakoid membrane synthesizes ATP during photosynthesis."
    },
    {
        "id": 313,
        "question": "Which molecule is the primary component of microtubules?",
        "options": [
            "Actin",
            "Tubulin",
            "Keratin",
            "Myosin"
        ],
        "answer": "Tubulin",
        "difficulty": "medium",
        "topic": "Cytoskeleton and Cell Movement",
        "explanation": "Microtubules are composed of tubulin dimers, supporting cell structure and division."
    },
    {
        "id": 314,
        "question": "What is the primary function of the nucleoplasm?",
        "options": [
            "Protein synthesis",
            "DNA replication",
            "Energy production",
            "Cell movement"
        ],
        "answer": "DNA replication",
        "difficulty": "medium",
        "topic": "Nucleus",
        "explanation": "The nucleoplasm is the site of DNA replication and transcription within the nucleus."
    },
    {
        "id": 315,
        "question": "Which process converts pyruvate into acetyl-CoA in mitochondria?",
        "options": [
            "Glycolysis",
            "Pyruvate oxidation",
            "Krebs cycle",
            "Electron transport chain"
        ],
        "answer": "Pyruvate oxidation",
        "difficulty": "medium",
        "topic": "Mitochondria",
        "explanation": "Pyruvate oxidation in the mitochondrial matrix produces acetyl-CoA for the Krebs cycle."
    },
    {
        "id": 316,
        "question": "What is the primary role of integrins in cell signaling?",
        "options": [
            "Energy production",
            "Cell-matrix adhesion",
            "Protein synthesis",
            "DNA replication"
        ],
        "answer": "Cell-matrix adhesion",
        "difficulty": "medium",
        "topic": "Cell Junctions and Adhesion",
        "explanation": "Integrins mediate adhesion between cells and the extracellular matrix, triggering signaling pathways."
    },
    {
        "id": 317,
        "question": "Which molecule donates electrons to photosystem I during photosynthesis?",
        "options": [
            "Water",
            "Plastocyanin",
            "NADPH",
            "ATP"
        ],
        "answer": "Plastocyanin",
        "difficulty": "hard",
        "topic": "Chloroplasts",
        "explanation": "Plastocyanin transfers electrons from photosystem II to photosystem I."
    },
    {
        "id": 318,
        "question": "What is the primary function of flagella in eukaryotic cells?",
        "options": [
            "Protein synthesis",
            "Cell propulsion",
            "DNA replication",
            "Energy production"
        ],
        "answer": "Cell propulsion",
        "difficulty": "easy",
        "topic": "Cytoskeleton and Cell Movement",
        "explanation": "Flagella propel cells, such as sperm, through whip-like motion."
    },
    {
        "id": 319,
        "question": "Which process delivers damaged organelles to lysosomes for degradation?",
        "options": [
            "Apoptosis",
            "Autophagy",
            "Necrosis",
            "Mitosis"
        ],
        "answer": "Autophagy",
        "difficulty": "medium",
        "topic": "Cell Death",
        "explanation": "Autophagy targets damaged organelles to lysosomes for degradation and recycling."
    },
    {
        "id": 320,
        "question": "What is the primary application of induced pluripotent stem cells?",
        "options": [
            "Energy production",
            "Disease modeling",
            "DNA replication",
            "Protein synthesis"
        ],
        "answer": "Disease modeling",
        "difficulty": "medium",
        "topic": "Stem Cells and Cell Differentiation",
        "explanation": "iPSCs are used to model diseases and test therapies by differentiating into specific cell types."
    },
    {
        "id": 321,
        "question": "Which molecule organizes DNA into nucleosomes?",
        "options": [
            "Histones",
            "Ribosomes",
            "Lipids",
            "Enzymes"
        ],
        "answer": "Histones",
        "difficulty": "medium",
        "topic": "Nucleus",
        "explanation": "Histones form nucleosomes, wrapping DNA to compact it into chromatin."
    },
    {
        "id": 322,
        "question": "Which molecule activates the JAK-STAT signaling pathway?",
        "options": [
            "Cytokines",
            "cAMP",
            "Calcium ions",
            "Histones"
        ],
        "answer": "Cytokines",
        "difficulty": "hard",
        "topic": "Cell Signaling and Communication",
        "explanation": "Cytokines bind to receptors, activating the JAK-STAT pathway for immune responses."
    },
    {
        "id": 323,
        "question": "Which process divides the cytoplasm in animal cells?",
        "options": [
            "Mitosis",
            "Cytokinesis",
            "Meiosis",
            "Apoptosis"
        ],
        "answer": "Cytokinesis",
        "difficulty": "easy",
        "topic": "Cell Cycle and Cell Division",
        "explanation": "Cytokinesis divides the cytoplasm, forming two daughter cells after mitosis."
    },
    {
        "id": 324,
        "question": "Which molecule is the primary component of the cell membrane’s hydrophobic core?",
        "options": [
            "Phosphate heads",
            "Fatty acid tails",
            "Cholesterol",
            "Proteins"
        ],
        "answer": "Fatty acid tails",
        "difficulty": "medium",
        "topic": "Plasma Membrane",
        "explanation": "Fatty acid tails of phospholipids form the hydrophobic core of the cell membrane."
    },
    {
        "id": 325,
        "question": "Which molecule is the primary component of bacterial cell walls?",
        "options": [
            "Cellulose",
            "Chitin",
            "Peptidoglycan",
            "Glycogen"
        ],
        "answer": "Peptidoglycan",
        "difficulty": "medium",
        "topic": "Introduction to Cell Biology",
        "explanation": "Peptidoglycan provides structural support in bacterial cell walls."
    },
    {
        "id": 326,
        "question": "What is the primary function of the proton gradient in chloroplasts?",
        "options": [
            "Protein synthesis",
            "ATP production",
            "DNA replication",
            "Lipid synthesis"
        ],
        "answer": "ATP production",
        "difficulty": "hard",
        "topic": "Chloroplasts",
        "explanation": "The proton gradient across the thylakoid membrane drives ATP synthesis via ATP synthase."
    },
    {
        "id": 327,
        "question": "Which technique amplifies RNA for gene expression studies?",
        "options": [
            "Western blotting",
            "RT-PCR",
            "Immunofluorescence",
            "Flow cytometry"
        ],
        "answer": "RT-PCR",
        "difficulty": "medium",
        "topic": "Techniques in Cell Biology",
        "explanation": "RT-PCR amplifies cDNA from RNA to study gene expression levels."
    },
    {
        "id": 328,
        "question": "What is the primary role of the tumor microenvironment in metastasis?",
        "options": [
            "Inhibit cell migration",
            "Facilitate invasion",
            "Induce apoptosis",
            "Prevent angiogenesis"
        ],
        "answer": "Facilitate invasion",
        "difficulty": "hard",
        "topic": "Cancer Cell Biology",
        "explanation": "The tumor microenvironment supports cancer cell invasion and metastasis."
    },
    {
        "id": 329,
        "question": "Which molecule is the primary substrate for the Krebs cycle?",
        "options": [
            "Glucose",
            "Acetyl-CoA",
            "Pyruvate",
            "NADH"
        ],
        "answer": "Acetyl-CoA",
        "difficulty": "medium",
        "topic": "Mitochondria",
        "explanation": "Acetyl-CoA enters the Krebs cycle to produce electron carriers and ATP."
    },
    {
        "id": 330,
        "question": "What is the primary function of the kinetochore during mitosis?",
        "options": [
            "DNA replication",
            "Chromosome attachment",
            "Protein synthesis",
            "Cell movement"
        ],
        "answer": "Chromosome attachment",
        "difficulty": "medium",
        "topic": "Cell Cycle and Cell Division",
        "explanation": "The kinetochore attaches chromosomes to spindle fibers for proper segregation."
    },
    {
        "id": 331,
        "question": "Which process synthesizes proteins from mRNA at the ribosome?",
        "options": [
            "Transcription",
            "Translation",
            "Replication",
            "Splicing"
        ],
        "answer": "Translation",
        "difficulty": "easy",
        "topic": "DNA, RNA, and Protein Synthesis",
        "explanation": "Translation decodes mRNA into proteins at the ribosome."
    },
    {
        "id": 332,
        "question": "What is the primary function of the nuclear envelope’s double membrane?",
        "options": [
            "Protein synthesis",
            "DNA protection",
            "Energy production",
            "Cell movement"
        ],
        "answer": "DNA protection",
        "difficulty": "medium",
        "topic": "Nucleus",
        "explanation": "The double membrane of the nuclear envelope protects DNA and regulates nuclear transport."
    },
    {
        "id": 333,
        "question": "Which process moves water across the cell membrane?",
        "options": [
            "Diffusion",
            "Osmosis",
            "Active transport",
            "Facilitated diffusion"
        ],
        "answer": "Osmosis",
        "difficulty": "easy",
        "topic": "Plasma Membrane",
        "explanation": "Osmosis is the passive movement of water across a semipermeable membrane."
    },
    {
        "id": 334,
        "question": "What is the primary role of centrioles in animal cells?",
        "options": [
            "Protein synthesis",
            "Spindle formation",
            "DNA replication",
            "Lipid synthesis"
        ],
        "answer": "Spindle formation",
        "difficulty": "medium",
        "topic": "Cytoskeleton and Cell Movement",
        "explanation": "Centrioles organize microtubules to form the spindle during cell division."
    },
    {
        "id": 335,
        "question": "Which process internalizes large particles like bacteria?",
        "options": [
            "Pinocytosis",
            "Phagocytosis",
            "Exocytosis",
            "Diffusion"
        ],
        "answer": "Phagocytosis",
        "difficulty": "medium",
        "topic": "Plasma Membrane",
        "explanation": "Phagocytosis engulfs large particles, such as bacteria, into phagosomes."
    },
    {
        "id": 336,
        "question": "Which molecule compacts DNA in eukaryotic cells?",
        "options": [
            "Histones",
            "Ribosomes",
            "Lipids",
            "Enzymes"
        ],
        "answer": "Histones",
        "difficulty": "medium",
        "topic": "Nucleus",
        "explanation": "Histones compact DNA into chromatin, facilitating storage and gene regulation."
    },
    {
        "id": 337,
        "question": "Which molecule is the primary electron carrier in the Krebs cycle?",
        "options": [
            "ATP",
            "NADH",
            "Glucose",
            "Oxygen"
        ],
        "answer": "NADH",
        "difficulty": "medium",
        "topic": "Mitochondria",
        "explanation": "NADH carries electrons from the Krebs cycle to the electron transport chain."
    },
    {
        "id": 338,
        "question": "What is the primary function of the cell plate in plant cell division?",
        "options": [
            "Chromosome separation",
            "Cell wall formation",
            "Spindle formation",
            "DNA replication"
        ],
        "answer": "Cell wall formation",
        "difficulty": "medium",
        "topic": "Cell Cycle and Cell Division",
        "explanation": "The cell plate forms a new cell wall during cytokinesis in plant cells."
    },
    {
        "id": 339,
        "question": "Which molecule accepts electrons at the end of the electron transport chain in mitochondria?",
        "options": [
            "Oxygen",
            "Glucose",
            "Carbon dioxide",
            "NADH"
        ],
        "answer": "Oxygen",
        "difficulty": "medium",
        "topic": "Mitochondria",
        "explanation": "Oxygen is the final electron acceptor, forming water in the electron transport chain."
    },
    {
        "id": 340,
        "question": "What is the primary goal of synthetic biology in cell biology?",
        "options": [
            "DNA sequencing",
            "Create artificial systems",
            "Protein purification",
            "Cell imaging"
        ],
        "answer": "Create artificial systems",
        "difficulty": "hard",
        "topic": "Special Topics",
        "explanation": "Synthetic biology aims to engineer artificial cells or systems with novel functions."
    },
    {
        "id": 341,
        "question": "Which molecule is produced during glycolysis?",
        "options": [
            "Acetyl-CoA",
            "Pyruvate",
            "NADH",
            "FADH2"
        ],
        "answer": "Pyruvate",
        "difficulty": "medium",
        "topic": "Mitochondria",
        "explanation": "Glycolysis converts glucose into two pyruvate molecules in the cytoplasm."
    },
    {
        "id": 342,
        "question": "What is the primary function of plasmodesmata in plant cells?",
        "options": [
            "Prevent leakage",
            "Allow communication",
            "Anchor cells",
            "Facilitate division"
        ],
        "answer": "Allow communication",
        "difficulty": "medium",
        "topic": "Cell Junctions and Adhesion",
        "explanation": "Plasmodesmata enable the exchange of molecules between adjacent plant cells."
    },
    {
        "id": 343,
        "question": "Which molecule is the primary component of plant cell walls?",
        "options": [
            "Chitin",
            "Cellulose",
            "Peptidoglycan",
            "Glycogen"
        ],
        "answer": "Cellulose",
        "difficulty": "easy",
        "topic": "Introduction to Cell Biology",
        "explanation": "Cellulose provides structural support in plant cell walls."
    },
    {
        "id": 344,
        "question": "What is the primary role of spindle fibers during mitosis?",
        "options": [
            "DNA replication",
            "Chromosome movement",
            "Protein synthesis",
            "Cell growth"
        ],
        "answer": "Chromosome movement",
        "difficulty": "medium",
        "topic": "Cell Cycle and Cell Division",
        "explanation": "Spindle fibers move chromosomes during mitosis to ensure proper segregation."
    },
    {
        "id": 345,
        "question": "Which process internalizes extracellular fluid?",
        "options": [
            "Phagocytosis",
            "Pinocytosis",
            "Exocytosis",
            "Diffusion"
        ],
        "answer": "Pinocytosis",
        "difficulty": "medium",
        "topic": "Plasma Membrane",
        "explanation": "Pinocytosis engulfs extracellular fluid and its contents into vesicles."
    },
    {
        "id": 346,
        "question": "Which tumor suppressor gene regulates the G1/S transition?",
        "options": [
            "p53",
            "Rb",
            "APC",
            "BRCA1"
        ],
        "answer": "Rb",
        "difficulty": "hard",
        "topic": "Cancer Cell Biology",
        "explanation": "The Rb gene inhibits the G1/S transition, preventing uncontrolled cell division."
    },
    {
        "id": 347,
        "question": "Which technique studies protein expression in tissue sections?",
        "options": [
            "Western blotting",
            "Immunohistochemistry",
            "Flow cytometry",
            "RT-PCR"
        ],
        "answer": "Immunohistochemistry",
        "difficulty": "medium",
        "topic": "Techniques in Cell Biology",
        "explanation": "Immunohistochemistry uses antibodies to detect proteins in tissue sections."
    },
    {
        "id": 348,
        "question": "What is the primary function of the mitochondrial intermembrane space?",
        "options": [
            "Krebs cycle",
            "Proton gradient formation",
            "Protein synthesis",
            "Lipid synthesis"
        ],
        "answer": "Proton gradient formation",
        "difficulty": "hard",
        "topic": "Mitochondria",
        "explanation": "Protons accumulate in the intermembrane space, driving ATP synthesis."
    },
    {
        "id": 349,
        "question": "Which signaling pathway regulates embryonic development?",
        "options": [
            "cAMP pathway",
            "Wnt pathway",
            "MAPK/ERK pathway",
            "IP3/DAG pathway"
        ],
        "answer": "Wnt pathway",
        "difficulty": "hard",
        "topic": "Cell Signaling and Communication",
        "explanation": "The Wnt pathway regulates cell fate and proliferation during embryonic development."
    },
    {
        "id": 350,
        "question": "What is the primary role of bioinformatics in studying cellular processes?",
        "options": [
            "Cell imaging",
            "Data analysis",
            "Protein purification",
            "DNA amplification"
        ],
        "answer": "Data analysis",
        "difficulty": "medium",
        "topic": "Special Topics",
        "explanation": "Bioinformatics analyzes large datasets to model and understand cellular processes."
    }
,
    {
        "id": 351,
        "question": "What is the core principle of cell theory regarding cell origin?",
        "options": [
            "Cells arise spontaneously",
            "Cells come from pre-existing cells",
            "Cells are formed from non-living matter",
            "Cells only exist in multicellular organisms"
        ],
        "answer": "Cells come from pre-existing cells",
        "difficulty": "easy",
        "topic": "Introduction to Cell Biology",
        "explanation": "Cell theory, proposed by Schleiden, Schwann, and Virchow, states that all cells arise from pre-existing cells, refuting spontaneous generation."
    },
    {
        "id": 352,
        "question": "Which microscopy technique uses laser scanning to produce 3D images of cells?",
        "options": [
            "Transmission electron microscopy",
            "Scanning electron microscopy",
            "Confocal microscopy",
            "Phase-contrast microscopy"
        ],
        "answer": "Confocal microscopy",
        "difficulty": "medium",
        "topic": "Introduction to Cell Biology",
        "explanation": "Confocal microscopy uses laser scanning and pinhole optics to create high-resolution 3D images of cells."
    },
    {
        "id": 353,
        "question": "What is the primary function of peripheral membrane proteins?",
        "options": [
            "Transport substances",
            "Provide structural support",
            "Act as enzymes or receptors",
            "Synthesize lipids"
        ],
        "answer": "Provide structural support",
        "difficulty": "medium",
        "topic": "Plasma Membrane",
        "explanation": "Peripheral membrane proteins are loosely attached to the membrane and provide structural support or facilitate signaling."
    },
    {
        "id": 354,
        "question": "Which type of transport involves the movement of two substances in opposite directions?",
        "options": [
            "Uniport",
            "Symport",
            "Antiport",
            "Diffusion"
        ],
        "answer": "Antiport",
        "difficulty": "hard",
        "topic": "Plasma Membrane",
        "explanation": "Antiport involves the coupled transport of two substances in opposite directions across the membrane, often using a gradient."
    },
    {
        "id": 355,
        "question": "What is the primary role of cytoplasmic streaming in plant cells?",
        "options": [
            "DNA replication",
            "Nutrient distribution",
            "Protein degradation",
            "Cell adhesion"
        ],
        "answer": "Nutrient distribution",
        "difficulty": "medium",
        "topic": "Cytoplasm and Cytosol",
        "explanation": "Cytoplasmic streaming, driven by actin, distributes nutrients and organelles within large plant cells."
    },
    {
        "id": 356,
        "question": "Which nuclear structure anchors chromatin to the nuclear envelope?",
        "options": [
            "Nuclear pore",
            "Nuclear lamina",
            "Nucleolus",
            "Chromatin"
        ],
        "answer": "Nuclear lamina",
        "difficulty": "hard",
        "topic": "Nucleus",
        "explanation": "The nuclear lamina, composed of intermediate filaments, anchors chromatin and supports the nuclear envelope."
    },
    {
        "id": 357,
        "question": "What is the primary role of heterochromatin in the nucleus?",
        "options": [
            "Active transcription",
            "Gene silencing",
            "Ribosome assembly",
            "DNA replication"
        ],
        "answer": "Gene silencing",
        "difficulty": "medium",
        "topic": "Nucleus",
        "explanation": "Heterochromatin is tightly packed and typically associated with gene silencing due to limited transcription factor access."
    },
    {
        "id": 358,
        "question": "Which organelle is critical for protein folding in eukaryotic cells?",
        "options": [
            "Smooth ER",
            "Rough ER",
            "Golgi apparatus",
            "Lysosome"
        ],
        "answer": "Rough ER",
        "difficulty": "medium",
        "topic": "Endoplasmic Reticulum",
        "explanation": "The rough ER facilitates protein folding and modification for proteins synthesized by its ribosomes."
    },
    {
        "id": 359,
        "question": "Which region of the Golgi apparatus packages proteins into vesicles for secretion?",
        "options": [
            "Cis face",
            "Medial region",
            "Trans face",
            "Endosomal compartment"
        ],
        "answer": "Trans face",
        "difficulty": "hard",
        "topic": "Golgi Apparatus",
        "explanation": "The trans face of the Golgi apparatus packages modified proteins into vesicles for secretion or delivery."
    },
    {
        "id": 360,
        "question": "Which peroxisomal enzyme detoxifies reactive oxygen species?",
        "options": [
            "Lysozyme",
            "Catalase",
            "Amylase",
            "Protease"
        ],
        "answer": "Catalase",
        "difficulty": "medium",
        "topic": "Lysosomes and Peroxisomes",
        "explanation": "Catalase in peroxisomes converts hydrogen peroxide into water and oxygen, preventing oxidative damage."
    },
    {
        "id": 361,
        "question": "What is the primary role of the mitochondrial outer membrane?",
        "options": [
            "ATP synthesis",
            "Protein import",
            "Krebs cycle",
            "DNA replication"
        ],
        "answer": "Protein import",
        "difficulty": "hard",
        "topic": "Mitochondria",
        "explanation": "The mitochondrial outer membrane contains porins and receptors for importing proteins into the organelle."
    },
    {
        "id": 362,
        "question": "Which molecule in chloroplasts captures light energy?",
        "options": [
            "RuBisCO",
            "Chlorophyll",
            "Plastoquinone",
            "ATP synthase"
        ],
        "answer": "Chlorophyll",
        "difficulty": "easy",
        "topic": "Chloroplasts",
        "explanation": "Chlorophyll absorbs light energy to initiate the light-dependent reactions of photosynthesis."
    },
    {
        "id": 363,
        "question": "Which ribosomal subunit binds mRNA during translation initiation?",
        "options": [
            "Large subunit",
            "Small subunit",
            "Both subunits",
            "Neither subunit"
        ],
        "answer": "Small subunit",
        "difficulty": "hard",
        "topic": "Ribosomes",
        "explanation": "The small ribosomal subunit binds mRNA and the initiator tRNA during translation initiation."
    },
    {
        "id": 364,
        "question": "Which cytoskeletal component forms the mitotic spindle?",
        "options": [
            "Microfilaments",
            "Intermediate filaments",
            "Microtubules",
            "Actin fibers"
        ],
        "answer": "Microtubules",
        "difficulty": "medium",
        "topic": "Cytoskeleton and Cell Movement",
        "explanation": "Microtubules form the mitotic spindle, which segregates chromosomes during cell division."
    },
    {
        "id": 365,
        "question": "Which motor protein moves along microtubules toward the cell center?",
        "options": [
            "Kinesin",
            "Dynein",
            "Myosin",
            "Actin"
        ],
        "answer": "Dynein",
        "difficulty": "hard",
        "topic": "Cytoskeleton and Cell Movement",
        "explanation": "Dynein moves vesicles and organelles toward the minus end of microtubules, near the cell center."
    },
    {
        "id": 366,
        "question": "Which cell junction forms a barrier to prevent leakage in epithelial tissues?",
        "options": [
            "Gap junction",
            "Tight junction",
            "Desmosome",
            "Hemidesmosome"
        ],
        "answer": "Tight junction",
        "difficulty": "medium",
        "topic": "Cell Junctions and Adhesion",
        "explanation": "Tight junctions seal adjacent epithelial cells, preventing leakage of substances between them."
    },
    {
        "id": 367,
        "question": "What is the primary role of cadherins in cell adhesion?",
        "options": [
            "Transport ions",
            "Anchor cells to each other",
            "Synthesize proteins",
            "Store energy"
        ],
        "answer": "Anchor cells to each other",
        "difficulty": "medium",
        "topic": "Cell Junctions and Adhesion",
        "explanation": "Cadherins are calcium-dependent proteins that mediate cell-cell adhesion in desmosomes."
    },
    {
        "id": 368,
        "question": "Which phase of the cell cycle prepares the cell for division?",
        "options": [
            "G1 phase",
            "S phase",
            "G2 phase",
            "M phase"
        ],
        "answer": "G2 phase",
        "difficulty": "medium",
        "topic": "Cell Cycle and Cell Division",
        "explanation": "The G2 phase involves cell growth and preparation for mitosis, including organelle duplication."
    },
    {
        "id": 369,
        "question": "During which stage of mitosis does the nuclear envelope reform?",
        "options": [
            "Prophase",
            "Metaphase",
            "Anaphase",
            "Telophase"
        ],
        "answer": "Telophase",
        "difficulty": "medium",
        "topic": "Cell Cycle and Cell Division",
        "explanation": "In telophase, the nuclear envelope reforms around the separated chromosomes."
    },
    {
        "id": 370,
        "question": "What is the consequence of non-disjunction during meiosis II?",
        "options": [
            "Normal gametes",
            "Aneuploid gametes",
            "Increased crossing over",
            "Cell cycle arrest"
        ],
        "answer": "Aneuploid gametes",
        "difficulty": "hard",
        "topic": "Cell Cycle and Cell Division",
        "explanation": "Non-disjunction in meiosis II results in gametes with abnormal chromosome numbers (aneuploidy)."
    },
    {
        "id": 371,
        "question": "Which protein complex triggers the metaphase-to-anaphase transition?",
        "options": [
            "Cyclin-CDK",
            "Anaphase-promoting complex",
            "Histone complex",
            "Tubulin-dynein"
        ],
        "answer": "Anaphase-promoting complex",
        "difficulty": "hard",
        "topic": "Cell Cycle and Cell Division",
        "explanation": "The anaphase-promoting complex (APC) degrades securin, allowing sister chromatids to separate."
    },
    {
        "id": 372,
        "question": "Which pathway is activated during intrinsic apoptosis?",
        "options": [
            "MAPK pathway",
            "Mitochondrial pathway",
            "cAMP pathway",
            "Wnt pathway"
        ],
        "answer": "Mitochondrial pathway",
        "difficulty": "hard",
        "topic": "Cell Death",
        "explanation": "The intrinsic apoptosis pathway involves mitochondrial release of cytochrome c, triggering caspase activation."
    },
    {
        "id": 373,
        "question": "Which enzyme synthesizes DNA during replication?",
        "options": [
            "RNA polymerase",
            "DNA polymerase",
            "Helicase",
            "Ligase"
        ],
        "answer": "DNA polymerase",
        "difficulty": "medium",
        "topic": "DNA, RNA, and Protein Synthesis",
        "explanation": "DNA polymerase synthesizes new DNA strands by adding nucleotides to the template strand."
    },
    {
        "id": 374,
        "question": "What is the role of the ribosome’s A site during translation?",
        "options": [
            "Binds incoming tRNA",
            "Holds the growing polypeptide",
            "Releases tRNA",
            "Binds mRNA"
        ],
        "answer": "Binds incoming tRNA",
        "difficulty": "hard",
        "topic": "DNA, RNA, and Protein Synthesis",
        "explanation": "The A site of the ribosome binds the incoming aminoacyl-tRNA during translation."
    },
    {
        "id": 375,
        "question": "Which molecule regulates alternative splicing in eukaryotes?",
        "options": [
            "snRNA",
            "tRNA",
            "rRNA",
            "mRNA"
        ],
        "answer": "snRNA",
        "difficulty": "hard",
        "topic": "Gene Expression and Regulation",
        "explanation": "Small nuclear RNA (snRNA) forms part of the spliceosome, regulating alternative splicing."
    },
    {
        "id": 376,
        "question": "Which modification inhibits transcription factor binding to DNA?",
        "options": [
            "Histone acetylation",
            "DNA methylation",
            "Histone phosphorylation",
            "Chromatin decondensation"
        ],
        "answer": "DNA methylation",
        "difficulty": "hard",
        "topic": "Gene Expression and Regulation",
        "explanation": "DNA methylation at promoter regions inhibits transcription factor binding, silencing genes."
    },
    {
        "id": 377,
        "question": "Which receptor type is associated with the MAPK/ERK pathway?",
        "options": [
            "Ion channel-linked",
            "G-protein-coupled",
            "Enzyme-linked",
            "Nuclear receptor"
        ],
        "answer": "Enzyme-linked",
        "difficulty": "hard",
        "topic": "Cell Signaling and Communication",
        "explanation": "Enzyme-linked receptors, such as receptor tyrosine kinases, activate the MAPK/ERK pathway."
    },
    {
        "id": 378,
        "question": "Which molecule acts as a second messenger in the cAMP pathway?",
        "options": [
            "Calcium ions",
            "Cyclic AMP",
            "DAG",
            "IP3"
        ],
        "answer": "Cyclic AMP",
        "difficulty": "medium",
        "topic": "Cell Signaling and Communication",
        "explanation": "Cyclic AMP is the second messenger in the cAMP pathway, activating protein kinase A."
    },
    {
        "id": 379,
        "question": "Which feature allows cancer cells to sustain chronic proliferation?",
        "options": [
            "High apoptosis rates",
            "Self-sufficiency in growth signals",
            "Stable genome",
            "Limited division"
        ],
        "answer": "Self-sufficiency in growth signals",
        "difficulty": "medium",
        "topic": "Cancer Cell Biology",
        "explanation": "Cancer cells produce their own growth signals, enabling sustained proliferation."
    },
    {
        "id": 380,
        "question": "Which oncogene is frequently mutated in melanoma?",
        "options": [
            "BRAF",
            "p53",
            "Rb",
            "APC"
        ],
        "answer": "BRAF",
        "difficulty": "hard",
        "topic": "Cancer Cell Biology",
        "explanation": "BRAF mutations, particularly V600E, are common in melanoma, driving uncontrolled cell growth."
    },
    {
        "id": 381,
        "question": "Which technique measures cell cycle phases based on DNA content?",
        "options": [
            "Western blotting",
            "Flow cytometry",
            "PCR",
            "Immunofluorescence"
        ],
        "answer": "Flow cytometry",
        "difficulty": "medium",
        "topic": "Techniques in Cell Biology",
        "explanation": "Flow cytometry uses DNA-binding dyes to measure DNA content, identifying cell cycle phases."
    },
    {
        "id": 382,
        "question": "What is the primary role of CRISPR/Cas9 in genetic research?",
        "options": [
            "Protein detection",
            "Targeted gene modification",
            "Cell imaging",
            "RNA amplification"
        ],
        "answer": "Targeted gene modification",
        "difficulty": "medium",
        "topic": "Techniques in Cell Biology",
        "explanation": "CRISPR/Cas9 enables precise gene editing by targeting specific DNA sequences."
    },
    {
        "id": 383,
        "question": "What is the primary benefit of 3D cell culture systems?",
        "options": [
            "Lower cost",
            "Recapitulate tissue complexity",
            "Faster growth",
            "Simpler analysis"
        ],
        "answer": "Recapitulate tissue complexity",
        "difficulty": "hard",
        "topic": "Special Topics",
        "explanation": "3D cell cultures, like organoids, mimic tissue architecture and function for better physiological relevance."
    },
    {
        "id": 384,
        "question": "Which stem cell type is restricted to differentiating into a single cell type?",
        "options": [
            "Totipotent",
            "Pluripotent",
            "Multipotent",
            "Unipotent"
        ],
        "answer": "Unipotent",
        "difficulty": "medium",
        "topic": "Stem Cells and Cell Differentiation",
        "explanation": "Unipotent stem cells, like skin basal cells, can only differentiate into one cell type."
    },
    {
        "id": 385,
        "question": "Which molecule powers the light-independent reactions of photosynthesis?",
        "options": [
            "Chlorophyll",
            "ATP",
            "Oxygen",
            "RuBisCO"
        ],
        "answer": "ATP",
        "difficulty": "medium",
        "topic": "Chloroplasts",
        "explanation": "ATP, produced in the light-dependent reactions, powers the Calvin cycle in the stroma."
    },
    {
        "id": 386,
        "question": "Which structure in cilia and flagella provides motility?",
        "options": [
            "Basal body",
            "Axoneme",
            "Centriole",
            "Microfilament"
        ],
        "answer": "Axoneme",
        "difficulty": "hard",
        "topic": "Cytoskeleton and Cell Movement",
        "explanation": "The axoneme, with its 9+2 microtubule arrangement, drives ciliary and flagellar movement."
    },
    {
        "id": 387,
        "question": "Which protein forms the core of gap junctions?",
        "options": [
            "Cadherin",
            "Connexin",
            "Integrin",
            "Claudin"
        ],
        "answer": "Connexin",
        "difficulty": "hard",
        "topic": "Cell Junctions and Adhesion",
        "explanation": "Connexins form connexons, which create gap junctions for intercellular communication."
    },
    {
        "id": 388,
        "question": "Which checkpoint ensures DNA replication is complete before mitosis?",
        "options": [
            "G1 checkpoint",
            "G2 checkpoint",
            "Spindle assembly checkpoint",
            "S checkpoint"
        ],
        "answer": "G2 checkpoint",
        "difficulty": "medium",
        "topic": "Cell Cycle and Cell Division",
        "explanation": "The G2 checkpoint verifies complete DNA replication and repairs damage before mitosis."
    },
    {
        "id": 389,
        "question": "Which operon regulates lactose metabolism in E. coli?",
        "options": [
            "trp operon",
            "lac operon",
            "ara operon",
            "his operon"
        ],
        "answer": "lac operon",
        "difficulty": "medium",
        "topic": "Gene Expression and Regulation",
        "explanation": "The lac operon controls the expression of genes for lactose metabolism in bacteria."
    },
    {
        "id": 390,
        "question": "Which molecule activates protein kinase C in the IP3/DAG pathway?",
        "options": [
            "IP3",
            "DAG",
            "cAMP",
            "Calcium ions"
        ],
        "answer": "DAG",
        "difficulty": "hard",
        "topic": "Cell Signaling and Communication",
        "explanation": "DAG, along with calcium ions, activates protein kinase C in the IP3/DAG pathway."
    },
    {
        "id": 391,
        "question": "Which hallmark of cancer involves resistance to cell death?",
        "options": [
            "Evading apoptosis",
            "Sustained angiogenesis",
            "Tissue invasion",
            "Genomic instability"
        ],
        "answer": "Evading apoptosis",
        "difficulty": "medium",
        "topic": "Cancer Cell Biology",
        "explanation": "Cancer cells evade apoptosis, allowing survival despite genetic damage."
    },
    {
        "id": 392,
        "question": "What is the primary role of organelle contact sites in cells?",
        "options": [
            "Protein synthesis",
            "Facilitate inter-organelle communication",
            "DNA replication",
            "Cell division"
        ],
        "answer": "Facilitate inter-organelle communication",
        "difficulty": "hard",
        "topic": "Special Topics",
        "explanation": "Organelle contact sites, like ER-mitochondria junctions, enable communication and molecule exchange."
    },
    {
        "id": 393,
        "question": "Which type of RNA delivers amino acids to the ribosome?",
        "options": [
            "mRNA",
            "tRNA",
            "rRNA",
            "snRNA"
        ],
        "answer": "tRNA",
        "difficulty": "easy",
        "topic": "DNA, RNA, and Protein Synthesis",
        "explanation": "Transfer RNA (tRNA) delivers amino acids to the ribosome during translation."
    },
    {
        "id": 394,
        "question": "Which lysosomal enzyme deficiency causes Fabry disease?",
        "options": [
            "Hexosaminidase A",
            "Alpha-galactosidase",
            "Glucocerebrosidase",
            "Sphingomyelinase"
        ],
        "answer": "Alpha-galactosidase",
        "difficulty": "hard",
        "topic": "Lysosomes and Peroxisomes",
        "explanation": "Fabry disease results from alpha-galactosidase deficiency, leading to globotriaosylceramide accumulation."
    },
    {
        "id": 395,
        "question": "Which process produces four haploid cells?",
        "options": [
            "Mitosis",
            "Meiosis",
            "Cytokinesis",
            "Binary fission"
        ],
        "answer": "Meiosis",
        "difficulty": "easy",
        "topic": "Cell Cycle and Cell Division",
        "explanation": "Meiosis produces four haploid cells from a diploid parent cell for sexual reproduction."
    },
    {
        "id": 396,
        "question": "Which molecule is the primary electron donor in the mitochondrial electron transport chain?",
        "options": [
            "NADH",
            "ATP",
            "Glucose",
            "Oxygen"
        ],
        "answer": "NADH",
        "difficulty": "medium",
        "topic": "Mitochondria",
        "explanation": "NADH donates electrons to the electron transport chain, driving ATP production."
    },
    {
        "id": 397,
        "question": "Which technique separates proteins by size?",
        "options": [
            "PCR",
            "SDS-PAGE",
            "Flow cytometry",
            "CRISPR/Cas9"
        ],
        "answer": "SDS-PAGE",
        "difficulty": "medium",
        "topic": "Techniques in Cell Biology",
        "explanation": "SDS-PAGE separates proteins by size using gel electrophoresis, often used with Western blotting."
    },
    {
        "id": 398,
        "question": "Which molecule inhibits translation by targeting mRNA?",
        "options": [
            "miRNA",
            "tRNA",
            "rRNA",
            "snRNA"
        ],
        "answer": "miRNA",
        "difficulty": "hard",
        "topic": "Gene Expression and Regulation",
        "explanation": "MicroRNA (miRNA) binds to mRNA, inhibiting translation or promoting degradation."
    },
    {
        "id": 399,
        "question": "Which signaling mechanism involves direct contact between cells?",
        "options": [
            "Endocrine",
            "Paracrine",
            "Juxtacrine",
            "Autocrine"
        ],
        "answer": "Juxtacrine",
        "difficulty": "medium",
        "topic": "Cell Signaling and Communication",
        "explanation": "Juxtacrine signaling involves direct cell-cell contact via membrane-bound molecules."
    },
    {
        "id": 400,
        "question": "Which tumor suppressor gene is mutated in retinoblastoma?",
        "options": [
            "p53",
            "Rb",
            "APC",
            "BRCA1"
        ],
        "answer": "Rb",
        "difficulty": "hard",
        "topic": "Cancer Cell Biology",
        "explanation": "Rb mutations are associated with retinoblastoma, leading to uncontrolled cell division."
    },
    {
        "id": 401,
        "question": "Which organelle detoxifies alcohol in liver cells?",
        "options": [
            "Rough ER",
            "Smooth ER",
            "Golgi apparatus",
            "Lysosome"
        ],
        "answer": "Smooth ER",
        "difficulty": "medium",
        "topic": "Endoplasmic Reticulum",
        "explanation": "The smooth ER in liver cells contains enzymes that detoxify alcohol and drugs."
    },
    {
        "id": 402,
        "question": "Which cytoskeletal component supports nuclear positioning?",
        "options": [
            "Microfilaments",
            "Intermediate filaments",
            "Microtubules",
            "Actin fibers"
        ],
        "answer": "Microtubules",
        "difficulty": "hard",
        "topic": "Cytoskeleton and Cell Movement",
        "explanation": "Microtubules anchor and position the nucleus within the cell."
    },
    {
        "id": 403,
        "question": "Which phase of meiosis involves synapsis of homologous chromosomes?",
        "options": [
            "Prophase I",
            "Prophase II",
            "Metaphase I",
            "Metaphase II"
        ],
        "answer": "Prophase I",
        "difficulty": "hard",
        "topic": "Cell Cycle and Cell Division",
        "explanation": "Synapsis occurs during prophase I, allowing crossing over between homologous chromosomes."
    },
    {
        "id": 404,
        "question": "Which molecule is the primary product of photosystem I?",
        "options": [
            "ATP",
            "NADPH",
            "Oxygen",
            "Glucose"
        ],
        "answer": "NADPH",
        "difficulty": "hard",
        "topic": "Chloroplasts",
        "explanation": "Photosystem I reduces NADP+ to NADPH, used in the Calvin cycle."
    },
    {
        "id": 405,
        "question": "Which protein anchors intermediate filaments in desmosomes?",
        "options": [
            "Connexin",
            "Cadherin",
            "Integrin",
            "Claudin"
        ],
        "answer": "Cadherin",
        "difficulty": "hard",
        "topic": "Cell Junctions and Adhesion",
        "explanation": "Cadherins anchor intermediate filaments in desmosomes, linking adjacent cells."
    },
    {
        "id": 406,
        "question": "Which molecule is the primary component of tight junctions?",
        "options": [
            "Connexin",
            "Claudin",
            "Cadherin",
            "Integrin"
        ],
        "answer": "Claudin",
        "difficulty": "hard",
        "topic": "Cell Junctions and Adhesion",
        "explanation": "Claudins form the core of tight junctions, creating a seal between cells."
    },
    {
        "id": 407,
        "question": "Which pathway is activated by insulin signaling?",
        "options": [
            "cAMP pathway",
            "PI3K/AKT pathway",
            "MAPK/ERK pathway",
            "IP3/DAG pathway"
        ],
        "answer": "PI3K/AKT pathway",
        "difficulty": "hard",
        "topic": "Cell Signaling and Communication",
        "explanation": "Insulin activates the PI3K/AKT pathway, regulating glucose uptake and metabolism."
    },
    {
        "id": 408,
        "question": "Which process recycles cytoplasmic components during stress?",
        "options": [
            "Apoptosis",
            "Autophagy",
            "Necrosis",
            "Mitosis"
        ],
        "answer": "Autophagy",
        "difficulty": "medium",
        "topic": "Cell Death",
        "explanation": "Autophagy recycles cytoplasmic components, providing nutrients during stress."
    },
    {
        "id": 409,
        "question": "Which stem cell type is used in bone marrow transplants?",
        "options": [
            "Embryonic",
            "Hematopoietic",
            "Induced pluripotent",
            "Totipotent"
        ],
        "answer": "Hematopoietic",
        "difficulty": "medium",
        "topic": "Stem Cells and Cell Differentiation",
        "explanation": "Hematopoietic stem cells regenerate blood cells and are used in bone marrow transplants."
    },
    {
        "id": 410,
        "question": "Which process enables cancer cells to form new blood vessels?",
        "options": [
            "Apoptosis",
            "Angiogenesis",
            "Metastasis",
            "Autophagy"
        ],
        "answer": "Angiogenesis",
        "difficulty": "medium",
        "topic": "Cancer Cell Biology",
        "explanation": "Angiogenesis allows tumors to form new blood vessels for nutrient supply."
    },
    {
        "id": 411,
        "question": "Which technique detects protein localization in live cells?",
        "options": [
            "Western blotting",
            "Fluorescence microscopy",
            "PCR",
            "Flow cytometry"
        ],
        "answer": "Fluorescence microscopy",
        "difficulty": "medium",
        "topic": "Techniques in Cell Biology",
        "explanation": "Fluorescence microscopy uses fluorescent tags to track protein localization in live cells."
    },
    {
        "id": 412,
        "question": "Which structure in chloroplasts stacks thylakoids?",
        "options": [
            "Stroma",
            "Granum",
            "Outer membrane",
            "Inner membrane"
        ],
        "answer": "Granum",
        "difficulty": "medium",
        "topic": "Chloroplasts",
        "explanation": "Grana are stacks of thylakoids, increasing the surface area for photosynthesis."
    },
    {
        "id": 413,
        "question": "Which molecule stabilizes microtubules during mitosis?",
        "options": [
            "Actin",
            "Tubulin",
            "Tau protein",
            "Myosin"
        ],
        "answer": "Tau protein",
        "difficulty": "hard",
        "topic": "Cytoskeleton and Cell Movement",
        "explanation": "Tau protein stabilizes microtubules, ensuring proper spindle formation during mitosis."
    },
    {
        "id": 414,
        "question": "Which nuclear component organizes DNA during cell division?",
        "options": [
            "Nucleolus",
            "Nuclear lamina",
            "Chromatin",
            "Nuclear pore"
        ],
        "answer": "Chromatin",
        "difficulty": "medium",
        "topic": "Nucleus",
        "explanation": "Chromatin condenses into chromosomes during cell division, organizing DNA."
    },
    {
        "id": 415,
        "question": "Which molecule is the primary product of pyruvate oxidation?",
        "options": [
            "Glucose",
            "Acetyl-CoA",
            "NADH",
            "ATP"
        ],
        "answer": "Acetyl-CoA",
        "difficulty": "medium",
        "topic": "Mitochondria",
        "explanation": "Pyruvate oxidation converts pyruvate into acetyl-CoA, entering the Krebs cycle."
    },
    {
        "id": 416,
        "question": "Which molecule in the extracellular matrix provides tensile strength?",
        "options": [
            "Collagen",
            "Elastin",
            "Fibronectin",
            "Laminin"
        ],
        "answer": "Collagen",
        "difficulty": "medium",
        "topic": "Cell Junctions and Adhesion",
        "explanation": "Collagen provides tensile strength to the extracellular matrix, supporting tissue structure."
    },
    {
        "id": 417,
        "question": "Which molecule splits water during photosynthesis?",
        "options": [
            "Photosystem II",
            "Photosystem I",
            "RuBisCO",
            "ATP synthase"
        ],
        "answer": "Photosystem II",
        "difficulty": "hard",
        "topic": "Chloroplasts",
        "explanation": "Photosystem II splits water, releasing electrons and oxygen during the light-dependent reactions."
    },
    {
        "id": 418,
        "question": "Which structure anchors cilia to the cell body?",
        "options": [
            "Axoneme",
            "Basal body",
            "Centriole",
            "Microfilament"
        ],
        "answer": "Basal body",
        "difficulty": "hard",
        "topic": "Cytoskeleton and Cell Movement",
        "explanation": "The basal body anchors cilia and flagella to the cell, organizing their microtubules."
    },
    {
        "id": 419,
        "question": "Which process is disrupted in lysosomal storage diseases?",
        "options": [
            "Protein synthesis",
            "Macromolecule degradation",
            "DNA replication",
            "Cell division"
        ],
        "answer": "Macromolecule degradation",
        "difficulty": "medium",
        "topic": "Lysosomes and Peroxisomes",
        "explanation": "Lysosomal storage diseases result from defective macromolecule degradation due to enzyme deficiencies."
    },
    {
        "id": 420,
        "question": "Which transcription factor reprograms somatic cells into iPSCs?",
        "options": [
            "Oct4",
            "p53",
            "Rb",
            "APC"
        ],
        "answer": "Oct4",
        "difficulty": "hard",
        "topic": "Stem Cells and Cell Differentiation",
        "explanation": "Oct4, along with Sox2, Klf4, and c-Myc, reprograms somatic cells into induced pluripotent stem cells."
    },
    {
        "id": 421,
        "question": "Which nuclear structure disassembles during mitosis?",
        "options": [
            "Nuclear envelope",
            "Chromatin",
            "Nuclear lamina",
            "Nucleolus"
        ],
        "answer": "Nuclear envelope",
        "difficulty": "medium",
        "topic": "Nucleus",
        "explanation": "The nuclear envelope disassembles during prophase to allow chromosome segregation."
    },
    {
        "id": 422,
        "question": "Which pathway regulates cell polarity during development?",
        "options": [
            "Wnt pathway",
            "cAMP pathway",
            "MAPK/ERK pathway",
            "IP3/DAG pathway"
        ],
        "answer": "Wnt pathway",
        "difficulty": "hard",
        "topic": "Cell Signaling and Communication",
        "explanation": "The Wnt pathway regulates cell polarity and fate during embryonic development."
    },
    {
        "id": 423,
        "question": "Which process forms the cleavage furrow in animal cells?",
        "options": [
            "Mitosis",
            "Cytokinesis",
            "Meiosis",
            "Apoptosis"
        ],
        "answer": "Cytokinesis",
        "difficulty": "medium",
        "topic": "Cell Cycle and Cell Division",
        "explanation": "Cytokinesis forms the cleavage furrow, dividing the cytoplasm in animal cells."
    },
    {
        "id": 424,
        "question": "Which molecule facilitates osmosis across the plasma membrane?",
        "options": [
            "Aquaporin",
            "Ion channel",
            "Glucose transporter",
            "Sodium-potassium pump"
        ],
        "answer": "Aquaporin",
        "difficulty": "medium",
        "topic": "Plasma Membrane",
        "explanation": "Aquaporins are channel proteins that facilitate water movement during osmosis."
    },
    {
        "id": 425,
        "question": "Which feature distinguishes prokaryotic cells from eukaryotic cells?",
        "options": [
            "Presence of a nucleus",
            "Presence of ribosomes",
            "Presence of a cell membrane",
            "Presence of DNA"
        ],
        "answer": "Presence of a nucleus",
        "difficulty": "easy",
        "topic": "Introduction to Cell Biology",
        "explanation": "Prokaryotic cells lack a nucleus, unlike eukaryotic cells, which have a membrane-bound nucleus."
    },
    {
        "id": 426,
        "question": "Which molecule drives ATP synthesis in mitochondria?",
        "options": [
            "Proton gradient",
            "Glucose",
            "NADH",
            "Oxygen"
        ],
        "answer": "Proton gradient",
        "difficulty": "medium",
        "topic": "Mitochondria",
        "explanation": "The proton gradient across the inner mitochondrial membrane drives ATP synthesis via ATP synthase."
    },
    {
        "id": 427,
        "question": "Which technique analyzes RNA expression in single cells?",
        "options": [
            "Western blotting",
            "Single-cell RNA sequencing",
            "Flow cytometry",
            "Immunofluorescence"
        ],
        "answer": "Single-cell RNA sequencing",
        "difficulty": "hard",
        "topic": "Special Topics",
        "explanation": "Single-cell RNA sequencing analyzes transcriptomes of individual cells, revealing gene expression heterogeneity."
    },
    {
        "id": 428,
        "question": "Which molecule promotes cancer cell migration?",
        "options": [
            "VEGF",
            "MMPs",
            "p53",
            "Rb"
        ],
        "answer": "MMPs",
        "difficulty": "hard",
        "topic": "Cancer Cell Biology",
        "explanation": "Matrix metalloproteinases (MMPs) degrade the extracellular matrix, facilitating cancer cell migration."
    },
    {
        "id": 429,
        "question": "Which molecule is the substrate for glycolysis?",
        "options": [
            "Pyruvate",
            "Glucose",
            "Acetyl-CoA",
            "NADH"
        ],
        "answer": "Glucose",
        "difficulty": "easy",
        "topic": "Mitochondria",
        "explanation": "Glycolysis breaks down glucose into pyruvate, producing ATP and NADH."
    },
    {
        "id": 430,
        "question": "Which structure attaches chromosomes to spindle fibers?",
        "options": [
            "Centromere",
            "Kinetochore",
            "Centriole",
            "Telomere"
        ],
        "answer": "Kinetochore",
        "difficulty": "medium",
        "topic": "Cell Cycle and Cell Division",
        "explanation": "The kinetochore, located at the centromere, attaches chromosomes to spindle fibers."
    },
    {
        "id": 431,
        "question": "Which enzyme initiates transcription in eukaryotes?",
        "options": [
            "DNA polymerase",
            "RNA polymerase II",
            "Helicase",
            "Ligase"
        ],
        "answer": "RNA polymerase II",
        "difficulty": "hard",
        "topic": "DNA, RNA, and Protein Synthesis",
        "explanation": "RNA polymerase II transcribes mRNA in eukaryotes, initiating at promoter regions."
    },
    {
        "id": 432,
        "question": "Which nuclear structure synthesizes tRNA?",
        "options": [
            "Nucleolus",
            "Nuclear lamina",
            "Chromatin",
            "Nucleoplasm"
        ],
        "answer": "Nucleoplasm",
        "difficulty": "hard",
        "topic": "Nucleus",
        "explanation": "tRNA is transcribed by RNA polymerase III in the nucleoplasm, not the nucleolus."
    },
    {
        "id": 433,
        "question": "Which molecule stabilizes the plasma membrane’s fluidity?",
        "options": [
            "Cholesterol",
            "Phospholipids",
            "Proteins",
            "Carbohydrates"
        ],
        "answer": "Cholesterol",
        "difficulty": "medium",
        "topic": "Plasma Membrane",
        "explanation": "Cholesterol modulates membrane fluidity, maintaining stability across temperature changes."
    },
    {
        "id": 434,
        "question": "Which structure organizes microtubules in non-dividing cells?",
        "options": [
            "Centrosome",
            "Centriole",
            "Basal body",
            "Kinetochore"
        ],
        "answer": "Centrosome",
        "difficulty": "hard",
        "topic": "Cytoskeleton and Cell Movement",
        "explanation": "The centrosome acts as a microtubule-organizing center in non-dividing cells."
    },
    {
        "id": 435,
        "question": "Which process exports proteins from the cell?",
        "options": [
            "Phagocytosis",
            "Pinocytosis",
            "Exocytosis",
            "Endocytosis"
        ],
        "answer": "Exocytosis",
        "difficulty": "medium",
        "topic": "Plasma Membrane",
        "explanation": "Exocytosis releases proteins and other molecules from the cell via vesicle fusion with the plasma membrane."
    },
    {
        "id": 436,
        "question": "Which molecule protects chromosome ends during replication?",
        "options": [
            "Telomere",
            "Centromere",
            "Histone",
            "Kinetochore"
        ],
        "answer": "Telomere",
        "difficulty": "medium",
        "topic": "Nucleus",
        "explanation": "Telomeres protect chromosome ends from degradation and fusion during replication."
    },
    {
        "id": 437,
        "question": "Which molecule is the primary product of the Krebs cycle?",
        "options": [
            "ATP",
            "NADH",
            "Acetyl-CoA",
            "Glucose"
        ],
        "answer": "NADH",
        "difficulty": "medium",
        "topic": "Mitochondria",
        "explanation": "The Krebs cycle primarily produces NADH and FADH2, which fuel the electron transport chain."
    },
    {
        "id": 438,
        "question": "Which structure forms during plant cell cytokinesis?",
        "options": [
            "Cleavage furrow",
            "Cell plate",
            "Spindle fibers",
            "Kinetochore"
        ],
        "answer": "Cell plate",
        "difficulty": "medium",
        "topic": "Cell Cycle and Cell Division",
        "explanation": "The cell plate forms during plant cell cytokinesis, leading to a new cell wall."
    },
    {
        "id": 439,
        "question": "Which molecule drives the proton gradient in chloroplasts?",
        "options": [
            "NADPH",
            "ATP synthase",
            "Photosystem II",
            "Plastoquinone"
        ],
        "answer": "Photosystem II",
        "difficulty": "hard",
        "topic": "Chloroplasts",
        "explanation": "Photosystem II generates protons, contributing to the proton gradient for ATP synthesis."
    },
    {
        "id": 440,
        "question": "Which field designs minimal genomes for artificial cells?",
        "options": [
            "Bioinformatics",
            "Synthetic biology",
            "Proteomics",
            "Genomics"
        ],
        "answer": "Synthetic biology",
        "difficulty": "hard",
        "topic": "Special Topics",
        "explanation": "Synthetic biology designs minimal genomes to create artificial cells with specific functions."
    },
    {
        "id": 441,
        "question": "Which molecule is oxidized in the Krebs cycle?",
        "options": [
            "Glucose",
            "Acetyl-CoA",
            "Pyruvate",
            "NADH"
        ],
        "answer": "Acetyl-CoA",
        "difficulty": "medium",
        "topic": "Mitochondria",
        "explanation": "Acetyl-CoA is oxidized in the Krebs cycle, producing CO2 and electron carriers."
    },
    {
        "id": 442,
        "question": "Which molecule links the extracellular matrix to the cytoskeleton?",
        "options": [
            "Connexin",
            "Integrin",
            "Cadherin",
            "Claudin"
        ],
        "answer": "Integrin",
        "difficulty": "hard",
        "topic": "Cell Junctions and Adhesion",
        "explanation": "Integrins link the extracellular matrix to the cytoskeleton, mediating adhesion and signaling."
    },
    {
        "id": 443,
        "question": "Which molecule provides rigidity to fungal cell walls?",
        "options": [
            "Cellulose",
            "Chitin",
            "Peptidoglycan",
            "Glycogen"
        ],
        "answer": "Chitin",
        "difficulty": "medium",
        "topic": "Introduction to Cell Biology",
        "explanation": "Chitin forms a rigid structure in fungal cell walls, providing support."
    },
    {
        "id": 444,
        "question": "Which protein degrades cyclin to exit mitosis?",
        "options": [
            "Cyclin-CDK",
            "Anaphase-promoting complex",
            "p53",
            "Rb"
        ],
        "answer": "Anaphase-promoting complex",
        "difficulty": "hard",
        "topic": "Cell Cycle and Cell Division",
        "explanation": "The anaphase-promoting complex degrades cyclin, allowing cells to exit mitosis."
    },
    {
        "id": 445,
        "question": "Which process internalizes specific ligands into cells?",
        "options": [
            "Phagocytosis",
            "Pinocytosis",
            "Receptor-mediated endocytosis",
            "Exocytosis"
        ],
        "answer": "Receptor-mediated endocytosis",
        "difficulty": "medium",
        "topic": "Plasma Membrane",
        "explanation": "Receptor-mediated endocytosis internalizes specific ligands via receptor-coated vesicles."
    },
    {
        "id": 446,
        "question": "Which gene is mutated in Lynch syndrome?",
        "options": [
            "p53",
            "MLH1",
            "Rb",
            "BRCA1"
        ],
        "answer": "MLH1",
        "difficulty": "hard",
        "topic": "Cancer Cell Biology",
        "explanation": "MLH1 mutations in Lynch syndrome impair DNA mismatch repair, increasing cancer risk."
    },
    {
        "id": 447,
        "question": "Which technique profiles protein expression in cells?",
        "options": [
            "PCR",
            "Mass spectrometry",
            "Flow cytometry",
            "CRISPR/Cas9"
        ],
        "answer": "Mass spectrometry",
        "difficulty": "hard",
        "topic": "Techniques in Cell Biology",
        "explanation": "Mass spectrometry identifies and quantifies proteins in cell extracts for proteomic studies."
    },
    {
        "id": 448,
        "question": "Which mitochondrial structure houses the Krebs cycle?",
        "options": [
            "Cristae",
            "Matrix",
            "Outer membrane",
            "Intermembrane space"
        ],
        "answer": "Matrix",
        "difficulty": "medium",
        "topic": "Mitochondria",
        "explanation": "The mitochondrial matrix contains enzymes for the Krebs cycle."
    },
    {
        "id": 449,
        "question": "Which signaling pathway regulates immune responses?",
        "options": [
            "JAK-STAT pathway",
            "cAMP pathway",
            "MAPK/ERK pathway",
            "IP3/DAG pathway"
        ],
        "answer": "JAK-STAT pathway",
        "difficulty": "hard",
        "topic": "Cell Signaling and Communication",
        "explanation": "The JAK-STAT pathway, activated by cytokines, regulates immune responses."
    },
    {
        "id": 450,
        "question": "Which tool predicts protein interactions in cell biology?",
        "options": [
            "CRISPR/Cas9",
            "Bioinformatics",
            "Flow cytometry",
            "PCR"
        ],
        "answer": "Bioinformatics",
        "difficulty": "medium",
        "topic": "Special Topics",
        "explanation": "Bioinformatics uses computational tools to predict protein interactions and analyze cellular networks."
    },
    {
        "id": 451,
        "question": "What is the primary contribution of Rudolf Virchow to cell theory?",
        "options": [
            "Discovered cells",
            "Proposed cells arise from pre-existing cells",
            "Identified cell organelles",
            "Described cell division"
        ],
        "answer": "Proposed cells arise from pre-existing cells",
        "difficulty": "easy",
        "topic": "Introduction to Cell Biology",
        "explanation": "Rudolf Virchow, in 1855, proposed that cells arise from pre-existing cells, completing the cell theory."
    },
    {
        "id": 452,
        "question": "Which microscopy technique achieves nanometer-scale resolution?",
        "options": [
            "Light microscopy",
            "Scanning electron microscopy",
            "Super-resolution microscopy",
            "Phase-contrast microscopy"
        ],
        "answer": "Super-resolution microscopy",
        "difficulty": "hard",
        "topic": "Introduction to Cell Biology",
        "explanation": "Super-resolution microscopy, such as STED or PALM, breaks the diffraction limit, achieving nanometer-scale resolution."
    },
    {
        "id": 453,
        "question": "Which component of the plasma membrane regulates ion flow?",
        "options": [
            "Phospholipids",
            "Ion channels",
            "Cholesterol",
            "Glycoproteins"
        ],
        "answer": "Ion channels",
        "difficulty": "medium",
        "topic": "Plasma Membrane",
        "explanation": "Ion channels are integral proteins that selectively regulate the flow of ions across the plasma membrane."
    },
    {
        "id": 454,
        "question": "Which transport mechanism uses vesicle formation to uptake large molecules?",
        "options": [
            "Active transport",
            "Facilitated diffusion",
            "Endocytosis",
            "Osmosis"
        ],
        "answer": "Endocytosis",
        "difficulty": "medium",
        "topic": "Plasma Membrane",
        "explanation": "Endocytosis forms vesicles to internalize large molecules, such as proteins or particles."
    },
    {
        "id": 455,
        "question": "What is the primary function of the cytosol in cellular metabolism?",
        "options": [
            "DNA storage",
            "Metabolic reaction site",
            "Protein degradation",
            "Cell adhesion"
        ],
        "answer": "Metabolic reaction site",
        "difficulty": "easy",
        "topic": "Cytoplasm and Cytosol",
        "explanation": "The cytosol is the site of many metabolic reactions, including glycolysis and signal transduction."
    },
    {
        "id": 456,
        "question": "Which nuclear structure regulates mRNA export?",
        "options": [
            "Nuclear lamina",
            "Nuclear pore complex",
            "Nucleolus",
            "Chromatin"
        ],
        "answer": "Nuclear pore complex",
        "difficulty": "hard",
        "topic": "Nucleus",
        "explanation": "The nuclear pore complex controls the selective export of mRNA from the nucleus to the cytoplasm."
    },
    {
        "id": 457,
        "question": "What is the primary role of the nucleolus in eukaryotic cells?",
        "options": [
            "DNA replication",
            "Ribosome biogenesis",
            "mRNA processing",
            "Chromatin organization"
        ],
        "answer": "Ribosome biogenesis",
        "difficulty": "medium",
        "topic": "Nucleus",
        "explanation": "The nucleolus synthesizes rRNA and assembles ribosomal subunits for protein synthesis."
    },
    {
        "id": 458,
        "question": "Which organelle sequesters calcium ions in muscle cells?",
        "options": [
            "Rough ER",
            "Smooth ER",
            "Golgi apparatus",
            "Mitochondrion"
        ],
        "answer": "Smooth ER",
        "difficulty": "hard",
        "topic": "Endoplasmic Reticulum",
        "explanation": "The smooth ER, known as the sarcoplasmic reticulum in muscle cells, stores and releases calcium ions for contraction."
    },
    {
        "id": 459,
        "question": "Which modification in the Golgi apparatus targets proteins to lysosomes?",
        "options": [
            "Phosphorylation",
            "Mannose-6-phosphate addition",
            "Glycosylation",
            "Ubiquitination"
        ],
        "answer": "Mannose-6-phosphate addition",
        "difficulty": "hard",
        "topic": "Golgi Apparatus",
        "explanation": "Mannose-6-phosphate tags proteins in the Golgi for delivery to lysosomes."
    },
    {
        "id": 460,
        "question": "Which peroxisomal process breaks down very long-chain fatty acids?",
        "options": [
            "Glycolysis",
            "Beta-oxidation",
            "Protein synthesis",
            "DNA replication"
        ],
        "answer": "Beta-oxidation",
        "difficulty": "medium",
        "topic": "Lysosomes and Peroxisomes",
        "explanation": "Peroxisomes perform beta-oxidation to degrade very long-chain fatty acids, producing energy."
    },
    {
        "id": 461,
        "question": "Which mitochondrial structure contains DNA?",
        "options": [
            "Cristae",
            "Matrix",
            "Outer membrane",
            "Intermembrane space"
        ],
        "answer": "Matrix",
        "difficulty": "medium",
        "topic": "Mitochondria",
        "explanation": "The mitochondrial matrix houses mitochondrial DNA, which encodes some organelle proteins."
    },
    {
        "id": 462,
        "question": "Which chloroplast structure is the site of the Calvin cycle?",
        "options": [
            "Thylakoid membrane",
            "Stroma",
            "Granum",
            "Outer membrane"
        ],
        "answer": "Stroma",
        "difficulty": "medium",
        "topic": "Chloroplasts",
        "explanation": "The stroma contains enzymes, including RuBisCO, for the Calvin cycle, which fixes carbon dioxide."
    },
    {
        "id": 463,
        "question": "Which ribosomal component catalyzes peptide bond formation?",
        "options": [
            "mRNA",
            "tRNA",
            "rRNA",
            "Protein"
        ],
        "answer": "rRNA",
        "difficulty": "hard",
        "topic": "Ribosomes",
        "explanation": "The peptidyl transferase center, composed of rRNA, catalyzes peptide bond formation during translation."
    },
    {
        "id": 464,
        "question": "Which cytoskeletal component forms lamellipodia in migrating cells?",
        "options": [
            "Microtubules",
            "Intermediate filaments",
            "Microfilaments",
            "Centrioles"
        ],
        "answer": "Microfilaments",
        "difficulty": "hard",
        "topic": "Cytoskeleton and Cell Movement",
        "explanation": "Microfilaments, made of actin, form lamellipodia, driving cell migration."
    },
    {
        "id": 465,
        "question": "Which motor protein is responsible for vesicle transport along actin filaments?",
        "options": [
            "Kinesin",
            "Dynein",
            "Myosin",
            "Tubulin"
        ],
        "answer": "Myosin",
        "difficulty": "hard",
        "topic": "Cytoskeleton and Cell Movement",
        "explanation": "Myosin transports vesicles along actin filaments, facilitating intracellular movement."
    },
    {
        "id": 466,
        "question": "Which cell junction is unique to plant cells?",
        "options": [
            "Tight junction",
            "Gap junction",
            "Plasmodesmata",
            "Desmosome"
        ],
        "answer": "Plasmodesmata",
        "difficulty": "medium",
        "topic": "Cell Junctions and Adhesion",
        "explanation": "Plasmodesmata are channels in plant cell walls that allow communication and transport between cells."
    },
    {
        "id": 467,
        "question": "Which protein mediates adhesion in hemidesmosomes?",
        "options": [
            "Connexin",
            "Cadherin",
            "Integrin",
            "Claudin"
        ],
        "answer": "Integrin",
        "difficulty": "hard",
        "topic": "Cell Junctions and Adhesion",
        "explanation": "Integrins in hemidesmosomes anchor cells to the extracellular matrix, such as the basal lamina."
    },
    {
        "id": 468,
        "question": "Which cell cycle phase duplicates centrosomes?",
        "options": [
            "G1 phase",
            "S phase",
            "G2 phase",
            "M phase"
        ],
        "answer": "S phase",
        "difficulty": "hard",
        "topic": "Cell Cycle and Cell Division",
        "explanation": "Centrosomes duplicate during S phase, ensuring each daughter cell receives one during mitosis."
    },
    {
        "id": 469,
        "question": "Which mitotic stage aligns chromosomes at the metaphase plate?",
        "options": [
            "Prophase",
            "Metaphase",
            "Anaphase",
            "Telophase"
        ],
        "answer": "Metaphase",
        "difficulty": "medium",
        "topic": "Cell Cycle and Cell Division",
        "explanation": "During metaphase, chromosomes align at the metaphase plate via spindle fiber attachment."
    },
    {
        "id": 470,
        "question": "Which process in meiosis I increases genetic diversity?",
        "options": [
            "Cytokinesis",
            "Independent assortment",
            "Spindle formation",
            "DNA replication"
        ],
        "answer": "Independent assortment",
        "difficulty": "medium",
        "topic": "Cell Cycle and Cell Division",
        "explanation": "Independent assortment of homologous chromosomes during meiosis I shuffles genetic material."
    },
    {
        "id": 471,
        "question": "Which protein phosphorylates Rb to promote the G1/S transition?",
        "options": [
            "Cyclin D-CDK4/6",
            "Cyclin B-CDK1",
            "p53",
            "APC"
        ],
        "answer": "Cyclin D-CDK4/6",
        "difficulty": "hard",
        "topic": "Cell Cycle and Cell Division",
        "explanation": "Cyclin D-CDK4/6 phosphorylates Rb, releasing E2F to drive the G1/S transition."
    },
    {
        "id": 472,
        "question": "Which molecule activates caspases in extrinsic apoptosis?",
        "options": [
            "Cytochrome c",
            "Death ligand",
            "Bcl-2",
            "p53"
        ],
        "answer": "Death ligand",
        "difficulty": "hard",
        "topic": "Cell Death",
        "explanation": "Death ligands, like FasL, bind receptors to activate caspases in the extrinsic apoptosis pathway."
    },
    {
        "id": 473,
        "question": "Which enzyme unwinds DNA during transcription?",
        "options": [
            "Helicase",
            "RNA polymerase",
            "Topoisomerase",
            "Ligase"
        ],
        "answer": "Helicase",
        "difficulty": "hard",
        "topic": "DNA, RNA, and Protein Synthesis",
        "explanation": "Helicase unwinds the DNA double helix, allowing RNA polymerase to access the template strand."
    },
    {
        "id": 474,
        "question": "Which molecule targets nascent proteins to the rough ER?",
        "options": [
            "Signal recognition particle",
            "tRNA",
            "rRNA",
            "miRNA"
        ],
        "answer": "Signal recognition particle",
        "difficulty": "hard",
        "topic": "DNA, RNA, and Protein Synthesis",
        "explanation": "The signal recognition particle (SRP) binds signal peptides, directing proteins to the rough ER."
    },
    {
        "id": 475,
        "question": "Which process removes introns from pre-mRNA?",
        "options": [
            "Translation",
            "Splicing",
            "Replication",
            "Transcription"
        ],
        "answer": "Splicing",
        "difficulty": "medium",
        "topic": "Gene Expression and Regulation",
        "explanation": "Splicing removes introns and joins exons to produce mature mRNA."
    },
    {
        "id": 476,
        "question": "Which non-coding RNA scaffolds chromatin-modifying complexes?",
        "options": [
            "miRNA",
            "siRNA",
            "lncRNA",
            "tRNA"
        ],
        "answer": "lncRNA",
        "difficulty": "hard",
        "topic": "Gene Expression and Regulation",
        "explanation": "Long non-coding RNAs (lncRNAs) scaffold chromatin-modifying complexes to regulate gene expression."
    },
    {
        "id": 477,
        "question": "Which pathway is activated by TGF-beta signaling?",
        "options": [
            "Smad pathway",
            "cAMP pathway",
            "MAPK/ERK pathway",
            "IP3/DAG pathway"
        ],
        "answer": "Smad pathway",
        "difficulty": "hard",
        "topic": "Cell Signaling and Communication",
        "explanation": "TGF-beta activates the Smad pathway, regulating cell growth and differentiation."
    },
    {
        "id": 478,
        "question": "Which molecule triggers the release of calcium from the ER?",
        "options": [
            "cAMP",
            "IP3",
            "DAG",
            "ATP"
        ],
        "answer": "IP3",
        "difficulty": "hard",
        "topic": "Cell Signaling and Communication",
        "explanation": "Inositol trisphosphate (IP3) binds ER receptors, releasing calcium into the cytosol."
    },
    {
        "id": 479,
        "question": "Which hallmark of cancer involves altered cellular metabolism?",
        "options": [
            "Reprogramming energy metabolism",
            "Evading apoptosis",
            "Sustained angiogenesis",
            "Tissue invasion"
        ],
        "answer": "Reprogramming energy metabolism",
        "difficulty": "medium",
        "topic": "Cancer Cell Biology",
        "explanation": "Cancer cells reprogram metabolism, favoring glycolysis (Warburg effect) for rapid energy production."
    },
    {
        "id": 480,
        "question": "Which tumor suppressor gene repairs DNA damage?",
        "options": [
            "p53",
            "Rb",
            "APC",
            "BRCA1"
        ],
        "answer": "BRCA1",
        "difficulty": "hard",
        "topic": "Cancer Cell Biology",
        "explanation": "BRCA1 is involved in DNA double-strand break repair, preventing cancer development."
    },
    {
        "id": 481,
        "question": "Which technique visualizes protein dynamics in real-time?",
        "options": [
            "Western blotting",
            "Live-cell imaging",
            "PCR",
            "Mass spectrometry"
        ],
        "answer": "Live-cell imaging",
        "difficulty": "medium",
        "topic": "Techniques in Cell Biology",
        "explanation": "Live-cell imaging uses fluorescent tags to track protein dynamics in real-time."
    },
    {
        "id": 482,
        "question": "Which technique knocks out genes to study their function?",
        "options": [
            "RNAi",
            "PCR",
            "Flow cytometry",
            "Western blotting"
        ],
        "answer": "RNAi",
        "difficulty": "medium",
        "topic": "Techniques in Cell Biology",
        "explanation": "RNA interference (RNAi) silences genes using siRNA to study their function."
    },
    {
        "id": 483,
        "question": "What is the primary role of synthetic cells in research?",
        "options": [
            "DNA sequencing",
            "Modeling minimal life",
            "Protein purification",
            "Cell imaging"
        ],
        "answer": "Modeling minimal life",
        "difficulty": "hard",
        "topic": "Special Topics",
        "explanation": "Synthetic cells are engineered to model minimal life processes, aiding in understanding cellular function."
    },
    {
        "id": 484,
        "question": "Which stem cell type differentiates into multiple but related cell types?",
        "options": [
            "Totipotent",
            "Pluripotent",
            "Multipotent",
            "Unipotent"
        ],
        "answer": "Multipotent",
        "difficulty": "medium",
        "topic": "Stem Cells and Cell Differentiation",
        "explanation": "Multipotent stem cells, like hematopoietic stem cells, differentiate into related cell types."
    },
    {
        "id": 485,
        "question": "Which molecule is the primary electron acceptor in photosystem I?",
        "options": [
            "Plastoquinone",
            "NADP+",
            "ATP",
            "Water"
        ],
        "answer": "NADP+",
        "difficulty": "hard",
        "topic": "Chloroplasts",
        "explanation": "NADP+ accepts electrons from photosystem I, forming NADPH for the Calvin cycle."
    },
    {
        "id": 486,
        "question": "Which cytoskeletal component forms the core of microvilli?",
        "options": [
            "Microtubules",
            "Intermediate filaments",
            "Microfilaments",
            "Centrioles"
        ],
        "answer": "Microfilaments",
        "difficulty": "hard",
        "topic": "Cytoskeleton and Cell Movement",
        "explanation": "Actin microfilaments form the structural core of microvilli, increasing surface area."
    },
    {
        "id": 487,
        "question": "Which protein links desmosomes to intermediate filaments?",
        "options": [
            "Plakoglobin",
            "Connexin",
            "Integrin",
            "Claudin"
        ],
        "answer": "Plakoglobin",
        "difficulty": "hard",
        "topic": "Cell Junctions and Adhesion",
        "explanation": "Plakoglobin links cadherins in desmosomes to intermediate filaments, ensuring strong adhesion."
    },
    {
        "id": 488,
        "question": "Which checkpoint monitors spindle attachment to kinetochores?",
        "options": [
            "G1 checkpoint",
            "G2 checkpoint",
            "Spindle assembly checkpoint",
            "S checkpoint"
        ],
        "answer": "Spindle assembly checkpoint",
        "difficulty": "hard",
        "topic": "Cell Cycle and Cell Division",
        "explanation": "The spindle assembly checkpoint ensures proper kinetochore attachment before anaphase."
    },
    {
        "id": 489,
        "question": "Which regulatory mechanism controls the ara operon in bacteria?",
        "options": [
            "Repression",
            "Activation by arabinose",
            "Splicing",
            "Methylation"
        ],
        "answer": "Activation by arabinose",
        "difficulty": "hard",
        "topic": "Gene Expression and Regulation",
        "explanation": "The ara operon is activated by arabinose, which binds AraC to promote transcription."
    },
    {
        "id": 490,
        "question": "Which molecule amplifies signals in the JAK-STAT pathway?",
        "options": [
            "STAT",
            "JAK",
            "Cytokine",
            "cAMP"
        ],
        "answer": "JAK",
        "difficulty": "hard",
        "topic": "Cell Signaling and Communication",
        "explanation": "Janus kinases (JAKs) phosphorylate STATs, amplifying cytokine signals."
    },
    {
        "id": 491,
        "question": "Which hallmark of cancer enables tumor cells to invade tissues?",
        "options": [
            "Genomic instability",
            "Tissue invasion and metastasis",
            "Evading apoptosis",
            "Sustained angiogenesis"
        ],
        "answer": "Tissue invasion and metastasis",
        "difficulty": "medium",
        "topic": "Cancer Cell Biology",
        "explanation": "Tissue invasion and metastasis allow cancer cells to spread to other tissues."
    },
    {
        "id": 492,
        "question": "Which organelle contact site regulates lipid transfer?",
        "options": [
            "Nuclear pore complex",
            "ER-mitochondria contact sites",
            "Golgi-lysosome contacts",
            "Peroxisome-ER contacts"
        ],
        "answer": "ER-mitochondria contact sites",
        "difficulty": "hard",
        "topic": "Special Topics",
        "explanation": "ER-mitochondria contact sites facilitate lipid transfer and calcium signaling."
    },
    {
        "id": 493,
        "question": "Which molecule guides mRNA to ribosomes?",
        "options": [
            "tRNA",
            "rRNA",
            "mRNA",
            "snRNA"
        ],
        "answer": "mRNA",
        "difficulty": "easy",
        "topic": "DNA, RNA, and Protein Synthesis",
        "explanation": "mRNA carries the genetic code from the nucleus to ribosomes for translation."
    },
    {
        "id": 494,
        "question": "Which lysosomal disorder is caused by hexosaminidase A deficiency?",
        "options": [
            "Gaucher’s disease",
            "Tay-Sachs disease",
            "Fabry disease",
            "Niemann-Pick disease"
        ],
        "answer": "Tay-Sachs disease",
        "difficulty": "hard",
        "topic": "Lysosomes and Peroxisomes",
        "explanation": "Tay-Sachs disease results from hexosaminidase A deficiency, causing ganglioside accumulation."
    },
    {
        "id": 495,
        "question": "Which process separates sister chromatids during meiosis II?",
        "options": [
            "Prophase II",
            "Metaphase II",
            "Anaphase II",
            "Telophase II"
        ],
        "answer": "Anaphase II",
        "difficulty": "medium",
        "topic": "Cell Cycle and Cell Division",
        "explanation": "Anaphase II separates sister chromatids, producing haploid cells."
    },
    {
        "id": 496,
        "question": "Which molecule generates the proton gradient in mitochondria?",
        "options": [
            "ATP synthase",
            "Cytochrome c",
            "NADH",
            "Complexes I-IV"
        ],
        "answer": "Complexes I-IV",
        "difficulty": "hard",
        "topic": "Mitochondria",
        "explanation": "Complexes I-IV of the electron transport chain pump protons, creating a gradient."
    },
    {
        "id": 497,
        "question": "Which technique detects protein interactions in vivo?",
        "options": [
            "Yeast two-hybrid screening",
            "PCR",
            "Flow cytometry",
            "Western blotting"
        ],
        "answer": "Yeast two-hybrid screening",
        "difficulty": "hard",
        "topic": "Techniques in Cell Biology",
        "explanation": "Yeast two-hybrid screening detects protein-protein interactions by reconstituting transcription factors."
    },
    {
        "id": 498,
        "question": "Which RNA type regulates translation via RNA interference?",
        "options": [
            "siRNA",
            "tRNA",
            "rRNA",
            "mRNA"
        ],
        "answer": "siRNA",
        "difficulty": "hard",
        "topic": "Gene Expression and Regulation",
        "explanation": "Small interfering RNA (siRNA) triggers RNA interference, degrading target mRNA."
    },
    {
        "id": 499,
        "question": "Which signaling type involves hormones traveling through the bloodstream?",
        "options": [
            "Autocrine",
            "Paracrine",
            "Endocrine",
            "Juxtacrine"
        ],
        "answer": "Endocrine",
        "difficulty": "medium",
        "topic": "Cell Signaling and Communication",
        "explanation": "Endocrine signaling involves hormones traveling via the bloodstream to distant target cells."
    },
    {
        "id": 500,
        "question": "Which oncogene is associated with chronic myelogenous leukemia?",
        "options": [
            "BCR-ABL",
            "Ras",
            "p53",
            "Rb"
        ],
        "answer": "BCR-ABL",
        "difficulty": "hard",
        "topic": "Cancer Cell Biology",
        "explanation": "The BCR-ABL fusion gene, from a chromosomal translocation, drives chronic myelogenous leukemia."
    },
    {
        "id": 501,
        "question": "Which organelle modifies proteins for secretion?",
        "options": [
            "Smooth ER",
            "Rough ER",
            "Mitochondrion",
            "Peroxisome"
        ],
        "answer": "Rough ER",
        "difficulty": "medium",
        "topic": "Endoplasmic Reticulum",
        "explanation": "The rough ER synthesizes and modifies proteins destined for secretion."
    },
    {
        "id": 502,
        "question": "Which cytoskeletal component resists tensile forces in epithelial cells?",
        "options": [
            "Microfilaments",
            "Intermediate filaments",
            "Microtubules",
            "Centrioles"
        ],
        "answer": "Intermediate filaments",
        "difficulty": "hard",
        "topic": "Cytoskeleton and Cell Movement",
        "explanation": "Intermediate filaments, like keratin, resist tensile forces in epithelial cells."
    },
    {
        "id": 503,
        "question": "Which meiotic stage pairs homologous chromosomes?",
        "options": [
            "Prophase I",
            "Metaphase I",
            "Anaphase I",
            "Telophase I"
        ],
        "answer": "Prophase I",
        "difficulty": "medium",
        "topic": "Cell Cycle and Cell Division",
        "explanation": "During prophase I, homologous chromosomes pair via synapsis, enabling crossing over."
    },
    {
        "id": 504,
        "question": "Which molecule transfers electrons between photosystems I and II?",
        "options": [
            "Plastocyanin",
            "NADPH",
            "ATP",
            "RuBisCO"
        ],
        "answer": "Plastocyanin",
        "difficulty": "hard",
        "topic": "Chloroplasts",
        "explanation": "Plastocyanin shuttles electrons from photosystem II to photosystem I."
    },
    {
        "id": 505,
        "question": "Which protein regulates actin polymerization in cells?",
        "options": [
            "Profilin",
            "Tubulin",
            "Kinesin",
            "Dynein"
        ],
        "answer": "Profilin",
        "difficulty": "hard",
        "topic": "Cytoskeleton and Cell Movement",
        "explanation": "Profilin promotes actin polymerization, regulating cytoskeletal dynamics."
    },
    {
        "id": 506,
        "question": "Which molecule provides elasticity to the extracellular matrix?",
        "options": [
            "Collagen",
            "Elastin",
            "Fibronectin",
            "Laminin"
        ],
        "answer": "Elastin",
        "difficulty": "medium",
        "topic": "Cell Junctions and Adhesion",
        "explanation": "Elastin provides elasticity, allowing tissues to stretch and recoil."
    },
    {
        "id": 507,
        "question": "Which receptor type translocates to the nucleus upon ligand binding?",
        "options": [
            "G-protein-coupled",
            "Ion channel-linked",
            "Nuclear receptor",
            "Enzyme-linked"
        ],
        "answer": "Nuclear receptor",
        "difficulty": "hard",
        "topic": "Cell Signaling and Communication",
        "explanation": "Nuclear receptors, like steroid hormone receptors, translocate to the nucleus to regulate transcription."
    },
    {
        "id": 508,
        "question": "Which process causes inflammation due to cell rupture?",
        "options": [
            "Apoptosis",
            "Necrosis",
            "Autophagy",
            "Mitosis"
        ],
        "answer": "Necrosis",
        "difficulty": "medium",
        "topic": "Cell Death",
        "explanation": "Necrosis involves cell rupture, releasing contents that trigger inflammation."
    },
    {
        "id": 509,
        "question": "Which stem cell type is found in adult tissues?",
        "options": [
            "Embryonic",
            "Induced pluripotent",
            "Adult stem cells",
            "Totipotent"
        ],
        "answer": "Adult stem cells",
        "difficulty": "medium",
        "topic": "Stem Cells and Cell Differentiation",
        "explanation": "Adult stem cells, like mesenchymal stem cells, maintain tissue homeostasis in adults."
    },
    {
        "id": 510,
        "question": "Which molecule promotes angiogenesis in tumors?",
        "options": [
            "VEGF",
            "p53",
            "Rb",
            "APC"
        ],
        "answer": "VEGF",
        "difficulty": "hard",
        "topic": "Cancer Cell Biology",
        "explanation": "Vascular endothelial growth factor (VEGF) promotes blood vessel formation in tumors."
    },
    {
        "id": 511,
        "question": "Which technique quantifies protein levels in cell lysates?",
        "options": [
            "PCR",
            "Western blotting",
            "Flow cytometry",
            "CRISPR/Cas9"
        ],
        "answer": "Western blotting",
        "difficulty": "medium",
        "topic": "Techniques in Cell Biology",
        "explanation": "Western blotting detects and quantifies specific proteins using antibodies."
    },
    {
        "id": 512,
        "question": "Which chloroplast structure contains chlorophyll?",
        "options": [
            "Stroma",
            "Thylakoid membrane",
            "Outer membrane",
            "Inner membrane"
        ],
        "answer": "Thylakoid membrane",
        "difficulty": "medium",
        "topic": "Chloroplasts",
        "explanation": "The thylakoid membrane contains chlorophyll, which captures light for photosynthesis."
    },
    {
        "id": 513,
        "question": "Which protein depolymerizes microtubules during mitosis?",
        "options": [
            "Kinesin-13",
            "Myosin",
            "Actin",
            "Profilin"
        ],
        "answer": "Kinesin-13",
        "difficulty": "hard",
        "topic": "Cytoskeleton and Cell Movement",
        "explanation": "Kinesin-13 depolymerizes microtubules, regulating spindle dynamics during mitosis."
    },
    {
        "id": 514,
        "question": "Which nuclear structure supports the nuclear envelope?",
        "options": [
            "Nucleolus",
            "Nuclear lamina",
            "Chromatin",
            "Nuclear pore"
        ],
        "answer": "Nuclear lamina",
        "difficulty": "medium",
        "topic": "Nucleus",
        "explanation": "The nuclear lamina provides structural support to the nuclear envelope."
    },
    {
        "id": 515,
        "question": "Which molecule is reduced in the electron transport chain?",
        "options": [
            "NADH",
            "Oxygen",
            "Glucose",
            "ATP"
        ],
        "answer": "Oxygen",
        "difficulty": "medium",
        "topic": "Mitochondria",
        "explanation": "Oxygen is reduced to water, accepting electrons at the end of the electron transport chain."
    },
    {
        "id": 516,
        "question": "Which molecule organizes the extracellular matrix in basement membranes?",
        "options": [
            "Collagen",
            "Elastin",
            "Laminin",
            "Fibronectin"
        ],
        "answer": "Laminin",
        "difficulty": "hard",
        "topic": "Cell Junctions and Adhesion",
        "explanation": "Laminin forms a network in basement membranes, supporting cell adhesion."
    },
    {
        "id": 517,
        "question": "Which molecule produces oxygen during photosynthesis?",
        "options": [
            "Photosystem I",
            "Photosystem II",
            "RuBisCO",
            "ATP synthase"
        ],
        "answer": "Photosystem II",
        "difficulty": "medium",
        "topic": "Chloroplasts",
        "explanation": "Photosystem II splits water, releasing oxygen as a byproduct."
    },
    {
        "id": 518,
        "question": "Which structure nucleates microtubules in cells?",
        "options": [
            "Centrosome",
            "Kinetochore",
            "Basal body",
            "Cleavage furrow"
        ],
        "answer": "Centrosome",
        "difficulty": "medium",
        "topic": "Cytoskeleton and Cell Movement",
        "explanation": "The centrosome nucleates microtubules, serving as a microtubule-organizing center."
    },
    {
        "id": 519,
        "question": "Which process degrades damaged mitochondria?",
        "options": [
            "Mitophagy",
            "Apoptosis",
            "Necrosis",
            "Cytokinesis"
        ],
        "answer": "Mitophagy",
        "difficulty": "hard",
        "topic": "Cell Death",
        "explanation": "Mitophagy is a form of autophagy that selectively degrades damaged mitochondria."
    },
    {
        "id": 520,
        "question": "Which molecule maintains pluripotency in embryonic stem cells?",
        "options": [
            "Sox2",
            "p53",
            "Rb",
            "APC"
        ],
        "answer": "Sox2",
        "difficulty": "hard",
        "topic": "Stem Cells and Cell Differentiation",
        "explanation": "Sox2, along with Oct4 and Nanog, maintains pluripotency in embryonic stem cells."
    },
    {
        "id": 521,
        "question": "Which nuclear component transcribes miRNA?",
        "options": [
            "Nucleolus",
            "Nucleoplasm",
            "Nuclear lamina",
            "Nuclear pore"
        ],
        "answer": "Nucleoplasm",
        "difficulty": "hard",
        "topic": "Nucleus",
        "explanation": "miRNA is transcribed by RNA polymerase II in the nucleoplasm."
    },
    {
        "id": 522,
        "question": "Which pathway regulates cell migration during development?",
        "options": [
            "Notch pathway",
            "cAMP pathway",
            "MAPK/ERK pathway",
            "IP3/DAG pathway"
        ],
        "answer": "Notch pathway",
        "difficulty": "hard",
        "topic": "Cell Signaling and Communication",
        "explanation": "The Notch pathway regulates cell migration and fate during development."
    },
    {
        "id": 523,
        "question": "Which process divides the cytoplasm in plant cells?",
        "options": [
            "Cleavage furrow",
            "Cell plate formation",
            "Spindle formation",
            "Chromosome segregation"
        ],
        "answer": "Cell plate formation",
        "difficulty": "medium",
        "topic": "Cell Cycle and Cell Division",
        "explanation": "Plant cells form a cell plate during cytokinesis, leading to a new cell wall."
    },
    {
        "id": 524,
        "question": "Which molecule forms the hydrophilic head of phospholipids?",
        "options": [
            "Fatty acids",
            "Glycerol",
            "Phosphate group",
            "Cholesterol"
        ],
        "answer": "Phosphate group",
        "difficulty": "medium",
        "topic": "Plasma Membrane",
        "explanation": "The phosphate group forms the hydrophilic head of phospholipids in the plasma membrane."
    },
    {
        "id": 525,
        "question": "Which feature is absent in prokaryotic cells?",
        "options": [
            "Cell membrane",
            "Ribosomes",
            "Nucleus",
            "DNA"
        ],
        "answer": "Nucleus",
        "difficulty": "easy",
        "topic": "Introduction to Cell Biology",
        "explanation": "Prokaryotic cells lack a membrane-bound nucleus, unlike eukaryotic cells."
    },
    {
        "id": 526,
        "question": "Which molecule powers the Calvin cycle in chloroplasts?",
        "options": [
            "NADPH",
            "Oxygen",
            "Glucose",
            "Chlorophyll"
        ],
        "answer": "NADPH",
        "difficulty": "medium",
        "topic": "Chloroplasts",
        "explanation": "NADPH provides electrons for the Calvin cycle to reduce carbon dioxide."
    },
    {
        "id": 527,
        "question": "Which technique maps protein localization in tissues?",
        "options": [
            "PCR",
            "Immunohistochemistry",
            "Flow cytometry",
            "Mass spectrometry"
        ],
        "answer": "Immunohistochemistry",
        "difficulty": "medium",
        "topic": "Techniques in Cell Biology",
        "explanation": "Immunohistochemistry uses antibodies to map protein localization in tissue sections."
    },
    {
        "id": 528,
        "question": "Which molecule degrades the extracellular matrix in metastasis?",
        "options": [
            "MMPs",
            "VEGF",
            "p53",
            "Rb"
        ],
        "answer": "MMPs",
        "difficulty": "hard",
        "topic": "Cancer Cell Biology",
        "explanation": "Matrix metalloproteinases (MMPs) degrade the extracellular matrix, enabling metastasis."
    },
    {
        "id": 529,
        "question": "Which molecule is the product of glycolysis?",
        "options": [
            "Acetyl-CoA",
            "Pyruvate",
            "NADH",
            "FADH2"
        ],
        "answer": "Pyruvate",
        "difficulty": "medium",
        "topic": "Mitochondria",
        "explanation": "Glycolysis converts glucose into two pyruvate molecules, producing ATP and NADH."
    },
    {
        "id": 530,
        "question": "Which structure organizes chromosomes during mitosis?",
        "options": [
            "Centromere",
            "Kinetochore",
            "Spindle fibers",
            "Cleavage furrow"
        ],
        "answer": "Spindle fibers",
        "difficulty": "medium",
        "topic": "Cell Cycle and Cell Division",
        "explanation": "Spindle fibers, made of microtubules, organize and move chromosomes during mitosis."
    },
    {
        "id": 531,
        "question": "Which enzyme adds nucleotides to the RNA strand during transcription?",
        "options": [
            "DNA polymerase",
            "RNA polymerase",
            "Helicase",
            "Ligase"
        ],
        "answer": "RNA polymerase",
        "difficulty": "medium",
        "topic": "DNA, RNA, and Protein Synthesis",
        "explanation": "RNA polymerase adds nucleotides to the growing RNA strand during transcription."
    },
    {
        "id": 532,
        "question": "Which nuclear structure protects DNA during interphase?",
        "options": [
            "Nuclear envelope",
            "Nucleolus",
            "Chromatin",
            "Nuclear pore"
        ],
        "answer": "Nuclear envelope",
        "difficulty": "medium",
        "topic": "Nucleus",
        "explanation": "The nuclear envelope protects DNA by separating it from the cytoplasm during interphase."
    },
    {
        "id": 533,
        "question": "Which molecule facilitates ion transport across the plasma membrane?",
        "options": [
            "Aquaporin",
            "Ion channel",
            "Phospholipid",
            "Cholesterol"
        ],
        "answer": "Ion channel",
        "difficulty": "medium",
        "topic": "Plasma Membrane",
        "explanation": "Ion channels facilitate the selective transport of ions across the plasma membrane."
    },
    {
        "id": 534,
        "question": "Which structure duplicates to form spindle poles?",
        "options": [
            "Centriole",
            "Kinetochore",
            "Basal body",
            "Cleavage furrow"
        ],
        "answer": "Centriole",
        "difficulty": "hard",
        "topic": "Cytoskeleton and Cell Movement",
        "explanation": "Centrioles duplicate to form spindle poles, organizing the mitotic spindle."
    },
    {
        "id": 535,
        "question": "Which process internalizes bacteria into immune cells?",
        "options": [
            "Pinocytosis",
            "Phagocytosis",
            "Exocytosis",
            "Diffusion"
        ],
        "answer": "Phagocytosis",
        "difficulty": "medium",
        "topic": "Plasma Membrane",
        "explanation": "Phagocytosis engulfs bacteria into phagosomes, primarily in immune cells like macrophages."
    },
    {
        "id": 536,
        "question": "Which molecule shortens during DNA replication?",
        "options": [
            "Telomere",
            "Centromere",
            "Histone",
            "Kinetochore"
        ],
        "answer": "Telomere",
        "difficulty": "hard",
        "topic": "Nucleus",
        "explanation": "Telomeres shorten during DNA replication due to the end-replication problem."
    },
    {
        "id": 537,
        "question": "Which molecule is the substrate for the electron transport chain?",
        "options": [
            "NADH",
            "Glucose",
            "ATP",
            "Pyruvate"
        ],
        "answer": "NADH",
        "difficulty": "medium",
        "topic": "Mitochondria",
        "explanation": "NADH donates electrons to the electron transport chain, driving ATP production."
    },
    {
        "id": 538,
        "question": "Which structure separates daughter cells in animal cells?",
        "options": [
            "Cell plate",
            "Cleavage furrow",
            "Spindle fibers",
            "Kinetochore"
        ],
        "answer": "Cleavage furrow",
        "difficulty": "medium",
        "topic": "Cell Cycle and Cell Division",
        "explanation": "The cleavage furrow, formed by actin, separates daughter cells during cytokinesis."
    },
    {
        "id": 539,
        "question": "Which molecule generates ATP in chloroplasts?",
        "options": [
            "Photosystem I",
            "ATP synthase",
            "RuBisCO",
            "NADPH"
        ],
        "answer": "ATP synthase",
        "difficulty": "medium",
        "topic": "Chloroplasts",
        "explanation": "ATP synthase uses the proton gradient to generate ATP in chloroplasts."
    },
    {
        "id": 540,
        "question": "Which field integrates computational models in cell biology?",
        "options": [
            "Synthetic biology",
            "Bioinformatics",
            "Proteomics",
            "Genomics"
        ],
        "answer": "Bioinformatics",
        "difficulty": "medium",
        "topic": "Special Topics",
        "explanation": "Bioinformatics integrates computational models to analyze cellular processes."
    },
    {
        "id": 541,
        "question": "Which molecule is oxidized during glycolysis?",
        "options": [
            "Pyruvate",
            "Glucose",
            "NADH",
            "ATP"
        ],
        "answer": "Glucose",
        "difficulty": "medium",
        "topic": "Mitochondria",
        "explanation": "Glucose is oxidized to pyruvate during glycolysis, producing NADH."
    },
    {
        "id": 542,
        "question": "Which molecule promotes cell adhesion to the extracellular matrix?",
        "options": [
            "Fibronectin",
            "Connexin",
            "Claudin",
            "Cadherin"
        ],
        "answer": "Fibronectin",
        "difficulty": "hard",
        "topic": "Cell Junctions and Adhesion",
        "explanation": "Fibronectin binds integrins, promoting cell adhesion to the extracellular matrix."
    },
    {
        "id": 543,
        "question": "Which molecule supports plant cell structure?",
        "options": [
            "Chitin",
            "Peptidoglycan",
            "Cellulose",
            "Glycogen"
        ],
        "answer": "Cellulose",
        "difficulty": "easy",
        "topic": "Introduction to Cell Biology",
        "explanation": "Cellulose forms the rigid cell wall in plant cells, providing structural support."
    },
    {
        "id": 544,
        "question": "Which protein ensures chromosome segregation during anaphase?",
        "options": [
            "Cohesin",
            "Separase",
            "Cyclin",
            "CDK"
        ],
        "answer": "Separase",
        "difficulty": "hard",
        "topic": "Cell Cycle and Cell Division",
        "explanation": "Separase cleaves cohesin, allowing chromosome segregation during anaphase."
    },
    {
        "id": 545,
        "question": "Which process uptakes extracellular fluid into cells?",
        "options": [
            "Phagocytosis",
            "Pinocytosis",
            "Receptor-mediated endocytosis",
            "Exocytosis"
        ],
        "answer": "Pinocytosis",
        "difficulty": "medium",
        "topic": "Plasma Membrane",
        "explanation": "Pinocytosis non-specifically uptakes extracellular fluid into vesicles."
    },
    {
        "id": 546,
        "question": "Which gene is mutated in hereditary breast cancer?",
        "options": [
            "p53",
            "Rb",
            "BRCA1",
            "APC"
        ],
        "answer": "BRCA1",
        "difficulty": "hard",
        "topic": "Cancer Cell Biology",
        "explanation": "BRCA1 mutations increase the risk of hereditary breast and ovarian cancer."
    },
    {
        "id": 547,
    "question": "Which technique amplifies DNA for genetic analysis?",
    "options": [
        "Western blotting",
        "PCR",
        "Flow cytometry",
        "Mass spectrometry"
    ],
    "answer": "PCR",
    "difficulty": "medium",
    "topic": "Techniques in Cell Biology",
    "explanation": "Polymerase chain reaction (PCR) amplifies specific DNA sequences for analysis."
},
{
    "id": 548,
    "question": "Which mitochondrial structure increases surface area for ATP production?",
    "options": [
        "Matrix",
        "Cristae",
        "Outer membrane",
        "Intermembrane space"
    ],
    "answer": "Cristae",
    "difficulty": "medium",
    "topic": "Mitochondria",
    "explanation": "Cristae are inner membrane folds that increase surface area for the electron transport chain."
},
{
    "id": 549,
    "question": "Which pathway regulates cell fate during development?",
    "options": [
        "Hedgehog pathway",
        "cAMP pathway",
        "MAPK/ERK pathway",
        "IP3/DAG pathway"
    ],
    "answer": "Hedgehog pathway",
    "difficulty": "hard",
    "topic": "Cell Signaling and Communication",
    "explanation": "The Hedgehog pathway regulates cell fate and patterning during embryonic development."
},
{
    "id": 550,
    "question": "Which tool analyzes cellular networks in systems biology?",
    "options": [
        "CRISPR/Cas9",
        "Bioinformatics",
        "Flow cytometry",
        "PCR"
    ],
    "answer": "Bioinformatics",
    "difficulty": "medium",
    "topic": "Special Topics",
    "explanation": "Bioinformatics analyzes complex cellular networks in systems biology."
}
]
