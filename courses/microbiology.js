const QUESTIONS = [
    {
        "id": 1,
        "question": "Which scientist is known as the father of microbiology for his work with microorganisms?",
        "options": [
            "Louis Pasteur",
            "Robert Koch",
            "Antonie van Leeuwenhoek",
            "Alexander Fleming"
        ],
        "answer": "Antonie van Leeuwenhoek",
        "difficulty": "easy",
        "topic": "Introduction to Microbiology",
        "explanation": "Antonie van Leeuwenhoek was the first to observe microorganisms using microscopes he designed."
    },
    {
        "id": 2,
        "question": "Which type of microorganism lacks a defined nucleus?",
        "options": [
            "Fungi",
            "Bacteria",
            "Protozoa",
            "Algae"
        ],
        "answer": "Bacteria",
        "difficulty": "easy",
        "topic": "Introduction to Microbiology",
        "explanation": "Bacteria are prokaryotes, lacking a defined nucleus, unlike eukaryotic fungi, protozoa, and algae."
    },
    {
        "id": 3,
        "question": "Which microscopy technique uses electrons to achieve high resolution of microbial structures?",
        "options": [
            "Light microscopy",
            "Phase-contrast microscopy",
            "Electron microscopy",
            "Fluorescence microscopy"
        ],
        "answer": "Electron microscopy",
        "difficulty": "medium",
        "topic": "Introduction to Microbiology",
        "explanation": "Electron microscopy uses electron beams for higher resolution, ideal for detailed microbial imaging."
    },
    {
        "id": 4,
        "question": "Which bacterial cell wall component is targeted by penicillin?",
        "options": [
            "Lipopolysaccharide",
            "Peptidoglycan",
            "Teichoic acid",
            "Flagellin"
        ],
        "answer": "Peptidoglycan",
        "difficulty": "medium",
        "topic": "Microbial Structure and Function",
        "explanation": "Penicillin inhibits peptidoglycan synthesis, weakening bacterial cell walls."
    },
    {
        "id": 5,
        "question": "Which structure allows bacteria to move toward or away from stimuli?",
        "options": [
            "Pili",
            "Capsule",
            "Flagella",
            "Endospore"
        ],
        "answer": "Flagella",
        "difficulty": "easy",
        "topic": "Microbial Structure and Function",
        "explanation": "Flagella are whip-like structures that enable bacterial motility."
    },
    {
        "id": 6,
        "question": "Which organelle in eukaryotic microbes contains digestive enzymes?",
        "options": [
            "Mitochondria",
            "Lysosome",
            "Golgi apparatus",
            "Endoplasmic reticulum"
        ],
        "answer": "Lysosome",
        "difficulty": "medium",
        "topic": "Microbial Structure and Function",
        "explanation": "Lysosomes contain enzymes that break down waste materials in eukaryotic cells."
    },
    {
        "id": 7,
        "question": "Which phase of bacterial growth involves rapid cell division?",
        "options": [
            "Lag phase",
            "Log phase",
            "Stationary phase",
            "Death phase"
        ],
        "answer": "Log phase",
        "difficulty": "easy",
        "topic": "Microbial Growth and Control",
        "explanation": "The log phase is characterized by exponential bacterial growth."
    },
    {
        "id": 8,
        "question": "Which method uses moist heat to sterilize equipment?",
        "options": [
            "Autoclaving",
            "Dry heat sterilization",
            "Filtration",
            "UV radiation"
        ],
        "answer": "Autoclaving",
        "difficulty": "easy",
        "topic": "Microbial Growth and Control",
        "explanation": "Autoclaving uses steam under pressure to kill all microorganisms."
    },
    {
        "id": 9,
        "question": "Which chemical agent disrupts microbial cell membranes?",
        "options": [
            "Alcohol",
            "Chlorine",
            "Hydrogen peroxide",
            "Iodine"
        ],
        "answer": "Alcohol",
        "difficulty": "medium",
        "topic": "Microbial Growth and Control",
        "explanation": "Alcohols, like ethanol, denature proteins and disrupt cell membranes."
    },
    {
        "id": 10,
        "question": "Which metabolic pathway generates ATP via substrate-level phosphorylation in bacteria?",
        "options": [
            "Glycolysis",
            "Krebs cycle",
            "Electron transport chain",
            "Photophosphorylation"
        ],
        "answer": "Glycolysis",
        "difficulty": "medium",
        "topic": "Microbial Metabolism",
        "explanation": "Glycolysis produces ATP directly via substrate-level phosphorylation."
    },
    {
        "id": 11,
        "question": "Which type of microbe uses light as an energy source and CO2 as a carbon source?",
        "options": [
            "Chemoheterotroph",
            "Photoautotroph",
            "Chemoautotroph",
            "Photoheterotroph"
        ],
        "answer": "Photoautotroph",
        "difficulty": "medium",
        "topic": "Microbial Metabolism",
        "explanation": "Photoautotrophs, like cyanobacteria, use light energy and CO2 for growth."
    },
    {
        "id": 12,
        "question": "Which enzyme breaks down starch in microbial metabolism?",
        "options": [
            "Amylase",
            "Lipase",
            "Protease",
            "Cellulase"
        ],
        "answer": "Amylase",
        "difficulty": "easy",
        "topic": "Microbial Metabolism",
        "explanation": "Amylase hydrolyzes starch into simpler sugars for microbial use."
    },
    {
        "id": 13,
        "question": "Which mechanism transfers DNA between bacteria via direct cell contact?",
        "options": [
            "Transformation",
            "Transduction",
            "Conjugation",
            "Mutation"
        ],
        "answer": "Conjugation",
        "difficulty": "medium",
        "topic": "Microbial Genetics",
        "explanation": "Conjugation involves DNA transfer through a pilus between bacterial cells."
    },
    {
        "id": 14,
        "question": "Which bacterial structure carries genes for antibiotic resistance?",
        "options": [
            "Chromosome",
            "Plasmid",
            "Ribosome",
            "Nucleoid"
        ],
        "answer": "Plasmid",
        "difficulty": "easy",
        "topic": "Microbial Genetics",
        "explanation": "Plasmids are extrachromosomal DNA that often carry resistance genes."
    },
    {
        "id": 15,
        "question": "Which mutation type changes a single nucleotide base in bacterial DNA?",
        "options": [
            "Frameshift",
            "Point mutation",
            "Deletion",
            "Insertion"
        ],
        "answer": "Point mutation",
        "difficulty": "medium",
        "topic": "Microbial Genetics",
        "explanation": "Point mutations involve the substitution of one nucleotide for another."
    },
    {
        "id": 16,
        "question": "Which domain includes extremophilic microbes like thermophiles?",
        "options": [
            "Bacteria",
            "Archaea",
            "Eukarya",
            "Viruses"
        ],
        "answer": "Archaea",
        "difficulty": "medium",
        "topic": "Microbial Diversity",
        "explanation": "Archaea include extremophiles adapted to extreme environments."
    },
    {
        "id": 17,
        "question": "Which fungal structure produces spores for reproduction?",
        "options": [
            "Hyphae",
            "Mycelium",
            "Sporangium",
            "Conidia"
        ],
        "answer": "Sporangium",
        "difficulty": "medium",
        "topic": "Microbial Diversity",
        "explanation": "Sporangia are structures in fungi that produce and release spores."
    },
    {
        "id": 18,
        "question": "Which protozoan causes malaria in humans?",
        "options": [
            "Trypanosoma",
            "Plasmodium",
            "Entamoeba",
            "Giardia"
        ],
        "answer": "Plasmodium",
        "difficulty": "easy",
        "topic": "Microbial Diversity",
        "explanation": "Plasmodium, transmitted by mosquitoes, causes malaria."
    },
    {
        "id": 19,
        "question": "Which term describes microbes living on the human skin without causing harm?",
        "options": [
            "Pathogens",
            "Commensals",
            "Parasites",
            "Mutualists"
        ],
        "answer": "Commensals",
        "difficulty": "easy",
        "topic": "Host-Microbe Interactions",
        "explanation": "Commensals benefit from the host without causing harm."
    },
    {
        "id": 20,
        "question": "Which microbial component triggers fever in the human body?",
        "options": [
            "Endotoxin",
            "Exotoxin",
            "Capsule",
            "Flagella"
        ],
        "answer": "Endotoxin",
        "difficulty": "medium",
        "topic": "Host-Microbe Interactions",
        "explanation": "Endotoxins, like LPS in Gram-negative bacteria, induce fever."
    },
    {
        "id": 21,
        "question": "Which microbe colonizes the human gut to aid digestion?",
        "options": [
            "Escherichia coli",
            "Staphylococcus aureus",
            "Clostridium botulinum",
            "Helicobacter pylori"
        ],
        "answer": "Escherichia coli",
        "difficulty": "medium",
        "topic": "Host-Microbe Interactions",
        "explanation": "Certain E. coli strains in the gut assist in digestion and vitamin production."
    },
    {
        "id": 22,
        "question": "Which immune cell engulfs and destroys microbes?",
        "options": [
            "B cell",
            "T cell",
            "Phagocyte",
            "Plasma cell"
        ],
        "answer": "Phagocyte",
        "difficulty": "easy",
        "topic": "Immunology",
        "explanation": "Phagocytes, like macrophages, engulf and digest microbes."
    },
    {
        "id": 23,
        "question": "Which molecule tags microbes for destruction by immune cells?",
        "options": [
            "Antigen",
            "Antibody",
            "Cytokine",
            "Complement"
        ],
        "answer": "Antibody",
        "difficulty": "medium",
        "topic": "Immunology",
        "explanation": "Antibodies bind to microbes, marking them for immune destruction."
    },
    {
        "id": 24,
        "question": "Which type of immunity develops after exposure to a vaccine?",
        "options": [
            "Innate immunity",
            "Adaptive immunity",
            "Passive immunity",
            "Natural immunity"
        ],
        "answer": "Adaptive immunity",
        "difficulty": "medium",
        "topic": "Immunology",
        "explanation": "Adaptive immunity develops after vaccination, providing specific protection."
    },
    {
        "id": 25,
        "question": "Which bacterium causes tuberculosis?",
        "options": [
            "Mycobacterium tuberculosis",
            "Streptococcus pneumoniae",
            "Pseudomonas aeruginosa",
            "Listeria monocytogenes"
        ],
        "answer": "Mycobacterium tuberculosis",
        "difficulty": "easy",
        "topic": "Microbial Pathogenesis",
        "explanation": "Mycobacterium tuberculosis is the causative agent of tuberculosis."
    },
    {
        "id": 26,
        "question": "Which toxin is produced by Clostridium tetani?",
        "options": [
            "Botulinum toxin",
            "Tetanospasmin",
            "Cholera toxin",
            "Diphtheria toxin"
        ],
        "answer": "Tetanospasmin",
        "difficulty": "medium",
        "topic": "Microbial Pathogenesis",
        "explanation": "Tetanospasmin causes muscle spasms in tetanus infections."
    },
    {
        "id": 27,
        "question": "Which viral structure enables attachment to host cells?",
        "options": [
            "Capsid",
            "Envelope",
            "Spike protein",
            "Nucleic acid"
        ],
        "answer": "Spike protein",
        "difficulty": "medium",
        "topic": "Microbial Pathogenesis",
        "explanation": "Spike proteins on viral surfaces bind to host cell receptors."
    },
    {
        "id": 28,
        "question": "Which term describes the spread of disease through contaminated water?",
        "options": [
            "Airborne transmission",
            "Vector-borne transmission",
            "Waterborne transmission",
            "Contact transmission"
        ],
        "answer": "Waterborne transmission",
        "difficulty": "easy",
        "topic": "Epidemiology",
        "explanation": "Waterborne transmission occurs via contaminated water sources."
    },
    {
        "id": 29,
        "question": "Which measure quantifies the number of new disease cases in a population?",
        "options": [
            "Prevalence",
            "Incidence",
            "Mortality",
            "Morbidity"
        ],
        "answer": "Incidence",
        "difficulty": "medium",
        "topic": "Epidemiology",
        "explanation": "Incidence measures new cases of a disease over a specific period."
    },
    {
        "id": 30,
        "question": "Which bacterium is a common cause of hospital-acquired infections?",
        "options": [
            "Salmonella typhi",
            "Methicillin-resistant Staphylococcus aureus",
            "Bacillus subtilis",
            "Lactobacillus acidophilus"
        ],
        "answer": "Methicillin-resistant Staphylococcus aureus",
        "difficulty": "medium",
        "topic": "Epidemiology",
        "explanation": "MRSA is a frequent cause of nosocomial infections."
    },
    {
        "id": 31,
        "question": "Which microbe is critical for nitrogen fixation in soil?",
        "options": [
            "Rhizobium",
            "Escherichia coli",
            "Streptomyces",
            "Pseudomonas"
        ],
        "answer": "Rhizobium",
        "difficulty": "medium",
        "topic": "Environmental Microbiology",
        "explanation": "Rhizobium fixes nitrogen in symbiosis with leguminous plants."
    },
    {
        "id": 32,
        "question": "Which process removes pollutants using microbes?",
        "options": [
            "Bioremediation",
            "Fermentation",
            "Nitrification",
            "Denitrification"
        ],
        "answer": "Bioremediation",
        "difficulty": "easy",
        "topic": "Environmental Microbiology",
        "explanation": "Bioremediation uses microbes to degrade environmental pollutants."
    },
    {
        "id": 33,
        "question": "Which microbe dominates in acidic hot springs?",
        "options": [
            "Cyanobacteria",
            "Thermophilic archaea",
            "Bacillus",
            "Clostridium"
        ],
        "answer": "Thermophilic archaea",
        "difficulty": "medium",
        "topic": "Environmental Microbiology",
        "explanation": "Thermophilic archaea thrive in extreme acidic and hot environments."
    },
    {
        "id": 34,
        "question": "Which microbe is used to produce penicillin?",
        "options": [
            "Penicillium chrysogenum",
            "Aspergillus niger",
            "Saccharomyces cerevisiae",
            "Lactobacillus bulgaricus"
        ],
        "answer": "Penicillium chrysogenum",
        "difficulty": "easy",
        "topic": "Industrial Microbiology",
        "explanation": "Penicillium chrysogenum is the primary source of penicillin production."
    },
    {
        "id": 35,
        "question": "Which bacterium is used in yogurt production?",
        "options": [
            "Lactobacillus bulgaricus",
            "Escherichia coli",
            "Clostridium perfringens",
            "Staphylococcus epidermidis"
        ],
        "answer": "Lactobacillus bulgaricus",
        "difficulty": "easy",
        "topic": "Industrial Microbiology",
        "explanation": "Lactobacillus bulgaricus ferments milk to produce yogurt."
    },
    {
        "id": 36,
        "question": "Which process produces ethanol using yeast?",
        "options": [
            "Aerobic respiration",
            "Fermentation",
            "Nitrification",
            "Denitrification"
        ],
        "answer": "Fermentation",
        "difficulty": "medium",
        "topic": "Industrial Microbiology",
        "explanation": "Yeast ferments sugars to produce ethanol in anaerobic conditions."
    },
    {
        "id": 37,
        "question": "Which antibiotic targets bacterial protein synthesis?",
        "options": [
            "Penicillin",
            "Tetracycline",
            "Vancomycin",
            "Ciprofloxacin"
        ],
        "answer": "Tetracycline",
        "difficulty": "medium",
        "topic": "Antimicrobial Agents and Resistance",
        "explanation": "Tetracycline inhibits protein synthesis by binding to bacterial ribosomes."
    },
    {
        "id": 38,
        "question": "Which mechanism pumps antibiotics out of bacterial cells?",
        "options": [
            "Efflux pump",
            "Beta-lactamase",
            "Mutation",
            "Conjugation"
        ],
        "answer": "Efflux pump",
        "difficulty": "medium",
        "topic": "Antimicrobial Agents and Resistance",
        "explanation": "Efflux pumps actively expel antibiotics, conferring resistance."
    },
    {
        "id": 39,
        "question": "Which enzyme inactivates penicillin in resistant bacteria?",
        "options": [
            "Beta-lactamase",
            "DNA gyrase",
            "Polymerase",
            "Ligase"
        ],
        "answer": "Beta-lactamase",
        "difficulty": "medium",
        "topic": "Antimicrobial Agents and Resistance",
        "explanation": "Beta-lactamase hydrolyzes the beta-lactam ring of penicillin."
    },
    {
        "id": 40,
        "question": "Which staining technique differentiates bacteria based on cell wall properties?",
        "options": [
            "Acid-fast stain",
            "Gram stain",
            "Endospore stain",
            "Capsule stain"
        ],
        "answer": "Gram stain",
        "difficulty": "easy",
        "topic": "Diagnostic Microbiology",
        "explanation": "Gram stain classifies bacteria as Gram-positive or Gram-negative."
    },
    {
        "id": 41,
        "question": "Which test identifies catalase production in bacteria?",
        "options": [
            "Coagulase test",
            "Oxidase test",
            "Catalase test",
            "Urease test"
        ],
        "answer": "Catalase test",
        "difficulty": "medium",
        "topic": "Diagnostic Microbiology",
        "explanation": "The catalase test detects the enzyme that breaks down hydrogen peroxide."
    },
    {
        "id": 42,
        "question": "Which technique amplifies microbial DNA for identification?",
        "options": [
            "ELISA",
            "PCR",
            "Western blot",
            "Gram staining"
        ],
        "answer": "PCR",
        "difficulty": "medium",
        "topic": "Diagnostic Microbiology",
        "explanation": "PCR amplifies DNA for microbial detection and identification."
    },
    {
        "id": 43,
        "question": "Which virus emerged as a global pandemic in 2020?",
        "options": [
            "Influenza virus",
            "SARS-CoV-2",
            "Ebola virus",
            "Zika virus"
        ],
        "answer": "SARS-CoV-2",
        "difficulty": "easy",
        "topic": "Emerging Issues in Microbiology",
        "explanation": "SARS-CoV-2 caused the COVID-19 pandemic starting in 2020."
    },
    {
        "id": 44,
        "question": "Which bacterium is associated with bioterrorism due to its spore-forming ability?",
        "options": [
            "Bacillus anthracis",
            "Escherichia coli",
            "Salmonella enterica",
            "Streptococcus pyogenes"
        ],
        "answer": "Bacillus anthracis",
        "difficulty": "medium",
        "topic": "Emerging Issues in Microbiology",
        "explanation": "Bacillus anthracis causes anthrax and is a bioterrorism concern."
    },
    {
        "id": 45,
        "question": "Which factor contributes to the rise of antimicrobial resistance?",
        "options": [
            "Vaccine development",
            "Antibiotic overuse",
            "Improved sanitation",
            "Genetic engineering"
        ],
        "answer": "Antibiotic overuse",
        "difficulty": "easy",
        "topic": "Emerging Issues in Microbiology",
        "explanation": "Overuse of antibiotics selects for resistant microbial strains."
    },
    {
        "id": 46,
        "question": "Which bacterial shape is rod-like?",
        "options": [
            "Coccus",
            "Bacillus",
            "Spirillum",
            "Vibrio"
        ],
        "answer": "Bacillus",
        "difficulty": "easy",
        "topic": "Microbial Structure and Function",
        "explanation": "Bacillus refers to rod-shaped bacteria."
    },
    {
        "id": 47,
        "question": "Which structure protects bacteria from phagocytosis?",
        "options": [
            "Capsule",
            "Flagella",
            "Pili",
            "Cell wall"
        ],
        "answer": "Capsule",
        "difficulty": "medium",
        "topic": "Microbial Structure and Function",
        "explanation": "Capsules shield bacteria from immune cell engulfment."
    },
    {
        "id": 48,
        "question": "Which bacterial component anchors the cell wall to the membrane in Gram-positive bacteria?",
        "options": [
            "Lipopolysaccharide",
            "Teichoic acid",
            "Porin",
            "Peptidoglycan"
        ],
        "answer": "Teichoic acid",
        "difficulty": "hard",
        "topic": "Microbial Structure and Function",
        "explanation": "Teichoic acids link the peptidoglycan layer to the membrane."
    },
    {
        "id": 49,
        "question": "Which growth phase sees equal rates of cell division and death?",
        "options": [
            "Lag phase",
            "Log phase",
            "Stationary phase",
            "Death phase"
        ],
        "answer": "Stationary phase",
        "difficulty": "medium",
        "topic": "Microbial Growth and Control",
        "explanation": "In the stationary phase, cell division balances cell death."
    },
    {
        "id": 50,
        "question": "Which method sterilizes heat-sensitive materials?",
        "options": [
            "Autoclaving",
            "Filtration",
            "Dry heat",
            "Pasteurization"
        ],
        "answer": "Filtration",
        "difficulty": "medium",
        "topic": "Microbial Growth and Control",
        "explanation": "Filtration removes microbes from heat-sensitive liquids."
    },
    {
        "id": 51,
        "question": "Which agent kills bacteria but not necessarily spores?",
        "options": [
            "Sterilant",
            "Disinfectant",
            "Antiseptic",
            "Bactericide"
        ],
        "answer": "Disinfectant",
        "difficulty": "medium",
        "topic": "Microbial Growth and Control",
        "explanation": "Disinfectants kill vegetative bacteria but not always spores."
    },
    {
        "id": 52,
        "question": "Which pathway oxidizes glucose completely to CO2 and water?",
        "options": [
            "Glycolysis",
            "Krebs cycle",
            "Aerobic respiration",
            "Fermentation"
        ],
        "answer": "Aerobic respiration",
        "difficulty": "medium",
        "topic": "Microbial Metabolism",
        "explanation": "Aerobic respiration fully oxidizes glucose, producing maximum ATP."
    },
    {
        "id": 53,
        "question": "Which microbe uses sulfur as an electron acceptor?",
        "options": [
            "Sulfate-reducing bacteria",
            "Nitrifying bacteria",
            "Methanogens",
            "Cyanobacteria"
        ],
        "answer": "Sulfate-reducing bacteria",
        "difficulty": "hard",
        "topic": "Microbial Metabolism",
        "explanation": "Sulfate-reducing bacteria use sulfate as a terminal electron acceptor."
    },
    {
        "id": 54,
        "question": "Which molecule is the final electron acceptor in anaerobic respiration?",
        "options": [
            "Oxygen",
            "Nitrate",
            "Carbon dioxide",
            "Water"
        ],
        "answer": "Nitrate",
        "difficulty": "medium",
        "topic": "Microbial Metabolism",
        "explanation": "Nitrate often serves as the electron acceptor in anaerobic respiration."
    },
    {
        "id": 55,
        "question": "Which process introduces foreign DNA into bacterial cells via uptake from the environment?",
        "options": [
            "Conjugation",
            "Transformation",
            "Transduction",
            "Recombination"
        ],
        "answer": "Transformation",
        "difficulty": "medium",
        "topic": "Microbial Genetics",
        "explanation": "Transformation involves bacteria taking up naked DNA from their surroundings."
    },
    {
        "id": 56,
        "question": "Which viral mechanism transfers bacterial DNA between cells?",
        "options": [
            "Transformation",
            "Transduction",
            "Conjugation",
            "Mutation"
        ],
        "answer": "Transduction",
        "difficulty": "medium",
        "topic": "Microbial Genetics",
        "explanation": "Transduction occurs when bacteriophages transfer bacterial DNA."
    },
    {
        "id": 57,
        "question": "Which regulatory mechanism represses gene expression in bacteria?",
        "options": [
            "Operon induction",
            "Operon repression",
            "Attenuation",
            "Catabolite activation"
        ],
        "answer": "Operon repression",
        "difficulty": "hard",
        "topic": "Microbial Genetics",
        "explanation": "Operon repression inhibits gene expression when a repressor binds."
    },
    {
        "id": 58,
        "question": "Which bacterial group includes photosynthetic microbes?",
        "options": [
            "Proteobacteria",
            "Cyanobacteria",
            "Actinobacteria",
            "Firmicutes"
        ],
        "answer": "Cyanobacteria",
        "difficulty": "medium",
        "topic": "Microbial Diversity",
        "explanation": "Cyanobacteria perform oxygenic photosynthesis."
    },
    {
        "id": 59,
        "question": "Which fungus causes athlete’s foot?",
        "options": [
            "Candida albicans",
            "Trichophyton rubrum",
            "Aspergillus fumigatus",
            "Cryptococcus neoformans"
        ],
        "answer": "Trichophyton rubrum",
        "difficulty": "medium",
        "topic": "Microbial Diversity",
        "explanation": "Trichophyton rubrum is a dermatophyte causing athlete’s foot."
    },
    {
        "id": 60,
        "question": "Which alga is used as a food supplement due to its high protein content?",
        "options": [
            "Chlorella",
            "Ulva",
            "Porphyra",
            "Sargassum"
        ],
        "answer": "Chlorella",
        "difficulty": "medium",
        "topic": "Microbial Diversity",
        "explanation": "Chlorella is rich in protein and used as a dietary supplement."
    },
    {
        "id": 61,
        "question": "Which microbe forms symbiotic relationships with corals?",
        "options": [
            "Zooxanthellae",
            "Vibrio cholerae",
            "Rhizobium",
            "Clostridium"
        ],
        "answer": "Zooxanthellae",
        "difficulty": "medium",
        "topic": "Host-Microbe Interactions",
        "explanation": "Zooxanthellae are dinoflagellates that provide nutrients to corals."
    },
    {
        "id": 62,
        "question": "Which bacterial structure promotes adhesion to host tissues?",
        "options": [
            "Pili",
            "Flagella",
            "Capsule",
            "Endospore"
        ],
        "answer": "Pili",
        "difficulty": "medium",
        "topic": "Host-Microbe Interactions",
        "explanation": "Pili enable bacteria to adhere to host surfaces."
    },
    {
        "id": 63,
        "question": "Which microbe disrupts gut microbiota balance, causing diarrhea?",
        "options": [
            "Clostridium difficile",
            "Lactobacillus acidophilus",
            "Bifidobacterium bifidum",
            "Escherichia coli"
        ],
        "answer": "Clostridium difficile",
        "difficulty": "medium",
        "topic": "Host-Microbe Interactions",
        "explanation": "Clostridium difficile overgrowth leads to antibiotic-associated diarrhea."
    },
    {
        "id": 64,
        "question": "Which immune response targets intracellular pathogens?",
        "options": [
            "Humoral immunity",
            "Cellular immunity",
            "Innate immunity",
            "Passive immunity"
        ],
        "answer": "Cellular immunity",
        "difficulty": "medium",
        "topic": "Immunology",
        "explanation": "Cellular immunity, mediated by T cells, targets intracellular microbes."
    },
    {
        "id": 65,
        "question": "Which molecule stimulates immune cell communication?",
        "options": [
            "Antigen",
            "Antibody",
            "Cytokine",
            "Complement"
        ],
        "answer": "Cytokine",
        "difficulty": "medium",
        "topic": "Immunology",
        "explanation": "Cytokines are signaling molecules that regulate immune responses."
    },
    {
        "id": 66,
        "question": "Which vaccine type uses inactivated pathogens?",
        "options": [
            "Live attenuated",
            "Inactivated",
            "Subunit",
            "mRNA"
        ],
        "answer": "Inactivated",
        "difficulty": "medium",
        "topic": "Immunology",
        "explanation": "Inactivated vaccines use killed pathogens to stimulate immunity."
    },
    {
        "id": 67,
        "question": "Which bacterium causes peptic ulcers?",
        "options": [
            "Helicobacter pylori",
            "Salmonella typhi",
            "Shigella dysenteriae",
            "Vibrio cholerae"
        ],
        "answer": "Helicobacter pylori",
        "difficulty": "medium",
        "topic": "Microbial Pathogenesis",
        "explanation": "Helicobacter pylori infects the stomach lining, causing ulcers."
    },
    {
        "id": 68,
        "question": "Which virus causes hepatitis C?",
        "options": [
            "Hepatitis A virus",
            "Hepatitis B virus",
            "Hepatitis C virus",
            "Epstein-Barr virus"
        ],
        "answer": "Hepatitis C virus",
        "difficulty": "easy",
        "topic": "Microbial Pathogenesis",
        "explanation": "Hepatitis C virus is an RNA virus causing chronic liver disease."
    },
    {
        "id": 69,
        "question": "Which fungal infection affects the lungs in immunocompromised patients?",
        "options": [
            "Candidiasis",
            "Aspergillosis",
            "Ringworm",
            "Histoplasmosis"
        ],
        "answer": "Aspergillosis",
        "difficulty": "hard",
        "topic": "Microbial Pathogenesis",
        "explanation": "Aspergillosis, caused by Aspergillus, affects immunocompromised lungs."
    },
    {
        "id": 70,
        "question": "Which term describes a disease that spreads globally?",
        "options": [
            "Epidemic",
            "Pandemic",
            "Endemic",
            "Outbreak"
        ],
        "answer": "Pandemic",
        "difficulty": "easy",
        "topic": "Epidemiology",
        "explanation": "A pandemic is a global spread of a disease."
    },
    {
        "id": 71,
        "question": "Which vector transmits the dengue virus?",
        "options": [
            "Anopheles mosquito",
            "Aedes mosquito",
            "Tick",
            "Flea"
        ],
        "answer": "Aedes mosquito",
        "difficulty": "medium",
        "topic": "Epidemiology",
        "explanation": "Aedes mosquitoes transmit the dengue virus to humans."
    },
    {
        "id": 72,
        "question": "Which surveillance method tracks disease patterns in populations?",
        "options": [
            "Case reporting",
            "Laboratory testing",
            "Vaccination",
            "Quarantine"
        ],
        "answer": "Case reporting",
        "difficulty": "medium",
        "topic": "Epidemiology",
        "explanation": "Case reporting monitors disease trends in populations."
    },
    {
        "id": 73,
        "question": "Which microbe degrades hydrocarbons in oil spills?",
        "options": [
            "Pseudomonas",
            "Rhizobium",
            "Lactobacillus",
            "Clostridium"
        ],
        "answer": "Pseudomonas",
        "difficulty": "medium",
        "topic": "Environmental Microbiology",
        "explanation": "Pseudomonas species degrade hydrocarbons during bioremediation."
    },
    {
        "id": 74,
        "question": "Which process converts ammonia to nitrite in the nitrogen cycle?",
        "options": [
            "Nitrification",
            "Denitrification",
            "Nitrogen fixation",
            "Assimilation"
        ],
        "answer": "Nitrification",
        "difficulty": "medium",
        "topic": "Environmental Microbiology",
        "explanation": "Nitrification oxidizes ammonia to nitrite by nitrifying bacteria."
    },
    {
        "id": 75,
        "question": "Which microbe produces methane in anaerobic environments?",
        "options": [
            "Methanogens",
            "Cyanobacteria",
            "Sulfate-reducing bacteria",
            "Nitrifying bacteria"
        ],
        "answer": "Methanogens",
        "difficulty": "medium",
        "topic": "Environmental Microbiology",
        "explanation": "Methanogens, archaea, produce methane in anaerobic conditions."
    },
    {
        "id": 76,
        "question": "Which microbe is used to produce citric acid industrially?",
        "options": [
            "Aspergillus niger",
            "Penicillium chrysogenum",
            "Saccharomyces cerevisiae",
            "Lactobacillus bulgaricus"
        ],
        "answer": "Aspergillus niger",
        "difficulty": "medium",
        "topic": "Industrial Microbiology",
        "explanation": "Aspergillus niger ferments sugars to produce citric acid."
    },
    {
        "id": 77,
        "question": "Which bacterium is used in bioremediation of heavy metals?",
        "options": [
            "Geobacter",
            "Lactobacillus",
            "Streptomyces",
            "Bacillus"
        ],
        "answer": "Geobacter",
        "difficulty": "hard",
        "topic": "Industrial Microbiology",
        "explanation": "Geobacter reduces heavy metals, aiding in bioremediation."
    },
    {
        "id": 78,
        "question": "Which product is made by Saccharomyces cerevisiae in brewing?",
        "options": [
            "Cheese",
            "Beer",
            "Yogurt",
            "Vinegar"
        ],
        "answer": "Beer",
        "difficulty": "easy",
        "topic": "Industrial Microbiology",
        "explanation": "Saccharomyces cerevisiae ferments sugars to produce beer."
    },
    {
        "id": 79,
        "question": "Which antibiotic inhibits bacterial cell wall synthesis?",
        "options": [
            "Erythromycin",
            "Vancomycin",
            "Streptomycin",
            "Chloramphenicol"
        ],
        "answer": "Vancomycin",
        "difficulty": "medium",
        "topic": "Antimicrobial Agents and Resistance",
        "explanation": "Vancomycin targets peptidoglycan assembly in cell walls."
    },
    {
        "id": 80,
        "question": "Which resistance mechanism alters antibiotic target sites?",
        "options": [
            "Efflux pump",
            "Enzyme inactivation",
            "Target modification",
            "Reduced permeability"
        ],
        "answer": "Target modification",
        "difficulty": "medium",
        "topic": "Antimicrobial Agents and Resistance",
        "explanation": "Target modification changes antibiotic binding sites."
    },
    {
        "id": 81,
        "question": "Which antifungal drug targets ergosterol in fungal membranes?",
        "options": [
            "Amphotericin B",
            "Penicillin",
            "Tetracycline",
            "Ciprofloxacin"
        ],
        "answer": "Amphotericin B",
        "difficulty": "hard",
        "topic": "Antimicrobial Agents and Resistance",
        "explanation": "Amphotericin B binds ergosterol, disrupting fungal membranes."
    },
    {
        "id": 82,
        "question": "Which test detects acid-fast bacteria like Mycobacterium?",
        "options": [
            "Gram stain",
            "Acid-fast stain",
            "Endospore stain",
            "Capsule stain"
        ],
        "answer": "Acid-fast stain",
        "difficulty": "medium",
        "topic": "Diagnostic Microbiology",
        "explanation": "Acid-fast stain identifies bacteria with waxy cell walls."
    },
    {
        "id": 83,
        "question": "Which method uses antibodies to detect microbial antigens?",
        "options": [
            "PCR",
            "ELISA",
            "Gram staining",
            "Culture"
        ],
        "answer": "ELISA",
        "difficulty": "medium",
        "topic": "Diagnostic Microbiology",
        "explanation": "ELISA uses antibodies to detect specific microbial antigens."
    },
    {
        "id": 84,
        "question": "Which technique sequences microbial rRNA for identification?",
        "options": [
            "16S rRNA sequencing",
            "Sanger sequencing",
            "qPCR",
            "FISH"
        ],
        "answer": "16S rRNA sequencing",
        "difficulty": "hard",
        "topic": "Diagnostic Microbiology",
        "explanation": "16S rRNA sequencing identifies bacteria based on conserved gene sequences."
    },
    {
        "id": 85,
        "question": "Which emerging pathogen causes severe diarrhea in developing countries?",
        "options": [
            "Vibrio cholerae",
            "Campylobacter jejuni",
            "Escherichia coli O157:H7",
            "Listeria monocytogenes"
        ],
        "answer": "Campylobacter jejuni",
        "difficulty": "medium",
        "topic": "Emerging Issues in Microbiology",
        "explanation": "Campylobacter jejuni is a leading cause of bacterial diarrhea globally."
    },
    {
        "id": 86,
        "question": "Which virus is associated with hemorrhagic fever outbreaks?",
        "options": [
            "Ebola virus",
            "Influenza virus",
            "HIV",
            "Norovirus"
        ],
        "answer": "Ebola virus",
        "difficulty": "medium",
        "topic": "Emerging Issues in Microbiology",
        "explanation": "Ebola virus causes severe hemorrhagic fever with high mortality."
    },
    {
        "id": 87,
        "question": "Which factor promotes the spread of multidrug-resistant bacteria?",
        "options": [
            "Improved hygiene",
            "Hospital settings",
            "Vaccination programs",
            "Water purification"
        ],
        "answer": "Hospital settings",
        "difficulty": "medium",
        "topic": "Emerging Issues in Microbiology",
        "explanation": "Hospitals facilitate the spread of resistant bacteria due to antibiotic use."
    },
    {
        "id": 88,
        "question": "Which bacterial structure resists desiccation and heat?",
        "options": [
            "Endospore",
            "Capsule",
            "Pili",
            "Flagella"
        ],
        "answer": "Endospore",
        "difficulty": "easy",
        "topic": "Microbial Structure and Function",
        "explanation": "Endospores protect bacteria from harsh environmental conditions."
    },
    {
        "id": 89,
        "question": "Which component is found in Gram-negative bacterial outer membranes?",
        "options": [
            "Teichoic acid",
            "Lipopolysaccharide",
            "Peptidoglycan",
            "Mycolic acid"
        ],
        "answer": "Lipopolysaccharide",
        "difficulty": "medium",
        "topic": "Microbial Structure and Function",
        "explanation": "Lipopolysaccharide is a key component of Gram-negative outer membranes."
    },
    {
        "id": 90,
        "question": "Which fungal structure forms a network of filaments?",
        "options": [
            "Hyphae",
            "Sporangium",
            "Conidia",
            "Mycelium"
        ],
        "answer": "Mycelium",
        "difficulty": "medium",
        "topic": "Microbial Structure and Function",
        "explanation": "Mycelium is a mass of hyphae forming the fungal body."
    },
    {
        "id": 91,
        "question": "Which factor limits microbial growth in high-salt environments?",
        "options": [
            "Temperature",
            "Osmotic pressure",
            "pH",
            "Oxygen"
        ],
        "answer": "Osmotic pressure",
        "difficulty": "medium",
        "topic": "Microbial Growth and Control",
        "explanation": "High salt causes osmotic stress, limiting microbial growth."
    },
    {
        "id": 92,
        "question": "Which method reduces microbial load in milk without sterilization?",
        "options": [
            "Autoclaving",
            "Pasteurization",
            "Filtration",
            "UV radiation"
        ],
        "answer": "Pasteurization",
        "difficulty": "easy",
        "topic": "Microbial Growth and Control",
        "explanation": "Pasteurization heats milk to kill pathogens without sterilizing it."
    },
    {
        "id": 93,
        "question": "Which agent denatures microbial proteins by oxidation?",
        "options": [
            "Alcohol",
            "Hydrogen peroxide",
            "Chlorine",
            "Iodine"
        ],
        "answer": "Hydrogen peroxide",
        "difficulty": "medium",
        "topic": "Microbial Growth and Control",
        "explanation": "Hydrogen peroxide oxidizes and denatures microbial proteins."
    },
    {
        "id": 94,
        "question": "Which process generates ATP using a proton gradient?",
        "options": [
            "Glycolysis",
            "Krebs cycle",
            "Oxidative phosphorylation",
            "Fermentation"
        ],
        "answer": "Oxidative phosphorylation",
        "difficulty": "medium",
        "topic": "Microbial Metabolism",
        "explanation": "Oxidative phosphorylation uses a proton gradient to produce ATP."
    },
    {
        "id": 95,
        "question": "Which microbe uses organic compounds as both energy and carbon sources?",
        "options": [
            "Chemoheterotroph",
            "Photoautotroph",
            "Chemoautotroph",
            "Photoheterotroph"
        ],
        "answer": "Chemoheterotroph",
        "difficulty": "medium",
        "topic": "Microbial Metabolism",
        "explanation": "Chemoheterotrophs rely on organic compounds for energy and carbon."
    },
    {
        "id": 96,
        "question": "Which enzyme degrades cellulose in microbial metabolism?",
        "options": [
            "Amylase",
            "Cellulase",
            "Lipase",
            "Protease"
        ],
        "answer": "Cellulase",
        "difficulty": "medium",
        "topic": "Microbial Metabolism",
        "explanation": "Cellulase breaks down cellulose into glucose units."
    },
    {
        "id": 97,
        "question": "Which operon regulates lactose metabolism in bacteria?",
        "options": [
            "Trp operon",
            "Lac operon",
            "Ara operon",
            "Gal operon"
        ],
        "answer": "Lac operon",
        "difficulty": "medium",
        "topic": "Microbial Genetics",
        "explanation": "The lac operon controls genes for lactose metabolism."
    },
    {
        "id": 98,
        "question": "Which mutation causes a premature stop codon in bacterial genes?",
        "options": [
            "Missense",
            "Nonsense",
            "Silent",
            "Frameshift"
        ],
        "answer": "Nonsense",
        "difficulty": "medium",
        "topic": "Microbial Genetics",
        "explanation": "Nonsense mutations introduce premature stop codons."
    },
    {
        "id": 99,
        "question": "Which repair mechanism corrects thymine dimers in bacterial DNA?",
        "options": [
            "Mismatch repair",
            "Photoreactivation",
            "Base excision repair",
            "SOS repair"
        ],
        "answer": "Photoreactivation",
        "difficulty": "hard",
        "topic": "Microbial Genetics",
        "explanation": "Photoreactivation uses light to repair UV-induced thymine dimers."
    },
    {
        "id": 100,
        "question": "Which bacterial group includes spore-forming pathogens?",
        "options": [
            "Firmicutes",
            "Proteobacteria",
            "Actinobacteria",
            "Cyanobacteria"
        ],
        "answer": "Firmicutes",
        "difficulty": "medium",
        "topic": "Microbial Diversity",
        "explanation": "Firmicutes include spore-forming bacteria like Clostridium and Bacillus."
    },
    {
        "id": 101,
        "question": "Which protozoan causes sleeping sickness?",
        "options": [
            "Plasmodium",
            "Trypanosoma",
            "Entamoeba",
            "Giardia"
        ],
        "answer": "Trypanosoma",
        "difficulty": "medium",
        "topic": "Microbial Diversity",
        "explanation": "Trypanosoma, transmitted by tsetse flies, causes sleeping sickness."
    },
    {
        "id": 102,
        "question": "Which virus infects bacteria?",
        "options": [
            "Bacteriophage",
            "Influenza virus",
            "HIV",
            "Herpesvirus"
        ],
        "answer": "Bacteriophage",
        "difficulty": "easy",
        "topic": "Microbial Diversity",
        "explanation": "Bacteriophages are viruses that infect bacterial cells."
    },
    {
        "id": 103,
        "question": "Which microbe benefits both itself and the host in a symbiotic relationship?",
        "options": [
            "Pathogen",
            "Commensal",
            "Mutualist",
            "Parasite"
        ],
        "answer": "Mutualist",
        "difficulty": "easy",
        "topic": "Host-Microbe Interactions",
        "explanation": "Mutualists benefit both the microbe and the host."
    },
    {
        "id": 104,
        "question": "Which bacterial toxin causes severe diarrhea in cholera?",
        "options": [
            "Cholera toxin",
            "Botulinum toxin",
            "Tetanospasmin",
            "Diphtheria toxin"
        ],
        "answer": "Cholera toxin",
        "difficulty": "medium",
        "topic": "Host-Microbe Interactions",
        "explanation": "Cholera toxin disrupts ion balance, causing watery diarrhea."
    },
    {
        "id": 105,
        "question": "Which microbe is part of the normal vaginal microbiota?",
        "options": [
            "Lactobacillus",
            "Candida albicans",
            "Staphylococcus aureus",
            "Clostridium perfringens"
        ],
        "answer": "Lactobacillus",
        "difficulty": "medium",
        "topic": "Host-Microbe Interactions",
        "explanation": "Lactobacillus maintains vaginal pH to prevent infections."
    },
    {
        "id": 106,
        "question": "Which immune cell produces antibodies?",
        "options": [
            "T cell",
            "B cell",
            "Macrophage",
            "Neutrophil"
        ],
        "answer": "B cell",
        "difficulty": "easy",
        "topic": "Immunology",
        "explanation": "B cells differentiate into plasma cells that secrete antibodies."
    },
    {
        "id": 107,
        "question": "Which protein complex presents antigens to T cells?",
        "options": [
            "MHC",
            "Antibody",
            "Cytokine",
            "Complement"
        ],
        "answer": "MHC",
        "difficulty": "medium",
        "topic": "Immunology",
        "explanation": "Major histocompatibility complex (MHC) molecules present antigens to T cells."
    },
    {
        "id": 108,
        "question": "Which type of hypersensitivity involves IgE-mediated allergies?",
        "options": [
            "Type I",
            "Type II",
            "Type III",
            "Type IV"
        ],
        "answer": "Type I",
        "difficulty": "hard",
        "topic": "Immunology",
        "explanation": "Type I hypersensitivity is IgE-mediated, causing allergic reactions."
    },
    {
        "id": 109,
        "question": "Which bacterium causes whooping cough?",
        "options": [
            "Bordetella pertussis",
            "Streptococcus pneumoniae",
            "Haemophilus influenzae",
            "Corynebacterium diphtheriae"
        ],
        "answer": "Bordetella pertussis",
        "difficulty": "medium",
        "topic": "Microbial Pathogenesis",
        "explanation": "Bordetella pertussis causes pertussis, or whooping cough."
    },
    {
        "id": 110,
        "question": "Which viral infection causes cold sores?",
        "options": [
            "Herpes simplex virus",
            "Influenza virus",
            "HIV",
            "Hepatitis B virus"
        ],
        "answer": "Herpes simplex virus",
        "difficulty": "easy",
        "topic": "Microbial Pathogenesis",
        "explanation": "Herpes simplex virus causes recurrent cold sores."
    },
    {
        "id": 111,
        "question": "Which fungal pathogen causes valley fever?",
        "options": [
            "Coccidioides immitis",
            "Candida albicans",
            "Aspergillus fumigatus",
            "Trichophyton rubrum"
        ],
        "answer": "Coccidioides immitis",
        "difficulty": "hard",
        "topic": "Microbial Pathogenesis",
        "explanation": "Coccidioides immitis causes coccidioidomycosis, or valley fever."
    },
    {
        "id": 112,
        "question": "Which term describes a disease constantly present in a population?",
        "options": [
            "Epidemic",
            "Pandemic",
            "Endemic",
            "Outbreak"
        ],
        "answer": "Endemic",
        "difficulty": "easy",
        "topic": "Epidemiology",
        "explanation": "Endemic diseases are consistently present at low levels."
    },
    {
        "id": 113,
        "question": "Which pathogen is transmitted by ticks causing Lyme disease?",
        "options": [
            "Borrelia burgdorferi",
            "Vibrio cholerae",
            "Yersinia pestis",
            "Shigella dysenteriae"
        ],
        "answer": "Borrelia burgdorferi",
        "difficulty": "medium",
        "topic": "Epidemiology",
        "explanation": "Borrelia burgdorferi is transmitted by ticks, causing Lyme disease."
    },
    {
        "id": 114,
        "question": "Which factor increases the risk of foodborne illness outbreaks?",
        "options": [
            "Proper refrigeration",
            "Cross-contamination",
            "Hand washing",
            "Cooking at high temperatures"
        ],
        "answer": "Cross-contamination",
        "difficulty": "medium",
        "topic": "Epidemiology",
        "explanation": "Cross-contamination spreads pathogens in food preparation."
    },
    {
        "id": 115,
        "question": "Which microbe oxidizes nitrite to nitrate in soil?",
        "options": [
            "Nitrosomonas",
            "Nitrobacter",
            "Rhizobium",
            "Azotobacter"
        ],
        "answer": "Nitrobacter",
        "difficulty": "hard",
        "topic": "Environmental Microbiology",
        "explanation": "Nitrobacter converts nitrite to nitrate in nitrification."
    },
    {
        "id": 116,
        "question": "Which microbial process reduces nitrate to nitrogen gas?",
        "options": [
            "Nitrification",
            "Denitrification",
            "Nitrogen fixation",
            "Ammonification"
        ],
        "answer": "Denitrification",
        "difficulty": "medium",
        "topic": "Environmental Microbiology",
        "explanation": "Denitrification converts nitrate to nitrogen gas in anaerobic conditions."
    },
    {
        "id": 117,
        "question": "Which microbe forms blooms in nutrient-rich water bodies?",
        "options": [
            "Cyanobacteria",
            "Methanogens",
            "Sulfate-reducing bacteria",
            "Halophiles"
        ],
        "answer": "Cyanobacteria",
        "difficulty": "medium",
        "topic": "Environmental Microbiology",
        "explanation": "Cyanobacteria cause harmful algal blooms in eutrophic waters."
    },
    {
        "id": 118,
        "question": "Which microbe produces recombinant insulin industrially?",
        "options": [
            "Escherichia coli",
            "Saccharomyces cerevisiae",
            "Penicillium chrysogenum",
            "Aspergillus niger"
        ],
        "answer": "Escherichia coli",
        "difficulty": "medium",
        "topic": "Industrial Microbiology",
        "explanation": "Genetically modified E. coli produces human insulin."
    },
    {
        "id": 119,
        "question": "Which bacterium is used to produce vitamin B12?",
        "options": [
            "Propionibacterium freudenreichii",
            "Lactobacillus bulgaricus",
            "Bacillus subtilis",
            "Streptomyces griseus"
        ],
        "answer": "Propionibacterium freudenreichii",
        "difficulty": "hard",
        "topic": "Industrial Microbiology",
        "explanation": "Propionibacterium freudenreichii ferments to produce vitamin B12."
    },
    {
        "id": 120,
        "question": "Which process uses microbes to produce biofuels?",
        "options": [
            "Fermentation",
            "Nitrification",
            "Denitrification",
            "Bioremediation"
        ],
        "answer": "Fermentation",
        "difficulty": "medium",
        "topic": "Industrial Microbiology",
        "explanation": "Fermentation by microbes produces biofuels like ethanol."
    },
    {
        "id": 121,
        "question": "Which antibiotic inhibits bacterial DNA replication?",
        "options": [
            "Penicillin",
            "Ciprofloxacin",
            "Tetracycline",
            "Erythromycin"
        ],
        "answer": "Ciprofloxacin",
        "difficulty": "medium",
        "topic": "Antimicrobial Agents and Resistance",
        "explanation": "Ciprofloxacin targets DNA gyrase, inhibiting replication."
    },
    {
        "id": 122,
        "question": "Which resistance gene encodes beta-lactamase?",
        "options": [
            "bla",
            "tet",
            "erm",
            "van"
        ],
        "answer": "bla",
        "difficulty": "hard",
        "topic": "Antimicrobial Agents and Resistance",
        "explanation": "The bla gene encodes beta-lactamase, conferring penicillin resistance."
    },
    {
        "id": 123,
        "question": "Which antiviral drug inhibits HIV reverse transcriptase?",
        "options": [
            "Acyclovir",
            "Zidovudine",
            "Oseltamivir",
            "Ribavirin"
        ],
        "answer": "Zidovudine",
        "difficulty": "hard",
        "topic": "Antimicrobial Agents and Resistance",
        "explanation": "Zidovudine inhibits HIV reverse transcriptase, blocking replication."
    },
    {
        "id": 124,
        "question": "Which test identifies coagulase production in Staphylococcus?",
        "options": [
            "Catalase test",
            "Coagulase test",
            "Oxidase test",
            "Urease test"
        ],
        "answer": "Coagulase test",
        "difficulty": "medium",
        "topic": "Diagnostic Microbiology",
        "explanation": "The coagulase test distinguishes pathogenic Staphylococcus aureus."
    },
    {
        "id": 125,
        "question": "Which method cultures microbes in low-oxygen conditions?",
        "options": [
            "Aerobic culture",
            "Anaerobic culture",
            "Microaerophilic culture",
            "Capnophilic culture"
        ],
        "answer": "Microaerophilic culture",
        "difficulty": "medium",
        "topic": "Diagnostic Microbiology",
        "explanation": "Microaerophilic culture supports microbes requiring low oxygen."
    },
    {
        "id": 126,
        "question": "Which technique visualizes microbes using fluorescent probes?",
        "options": [
            "Gram staining",
            "FISH",
            "Acid-fast staining",
            "Endospore staining"
        ],
        "answer": "FISH",
        "difficulty": "hard",
        "topic": "Diagnostic Microbiology",
        "explanation": "Fluorescence in situ hybridization (FISH) uses probes to detect microbes."
    },
    {
        "id": 127,
        "question": "Which bacterium is an emerging multidrug-resistant pathogen in hospitals?",
        "options": [
            "Acinetobacter baumannii",
            "Lactobacillus acidophilus",
            "Bacillus subtilis",
            "Streptomyces coelicolor"
        ],
        "answer": "Acinetobacter baumannii",
        "difficulty": "hard",
        "topic": "Emerging Issues in Microbiology",
        "explanation": "Acinetobacter baumannii is a multidrug-resistant nosocomial pathogen."
    },
    {
        "id": 128,
        "question": "Which virus caused a major outbreak in West Africa in 2014?",
        "options": [
            "Zika virus",
            "Ebola virus",
            "SARS-CoV",
            "MERS-CoV"
        ],
        "answer": "Ebola virus",
        "difficulty": "medium",
        "topic": "Emerging Issues in Microbiology",
        "explanation": "The 2014 Ebola outbreak was a significant public health crisis."
    },
    {
        "id": 129,
        "question": "Which practice reduces the spread of antimicrobial resistance?",
        "options": [
            "Antibiotic stewardship",
            "Overprescribing antibiotics",
            "Skipping vaccine doses",
            "Poor hygiene"
        ],
        "answer": "Antibiotic stewardship",
        "difficulty": "medium",
        "topic": "Emerging Issues in Microbiology",
        "explanation": "Antibiotic stewardship promotes judicious antibiotic use."
    },
    {
        "id": 130,
        "question": "Which bacterial shape is spiral or helical?",
        "options": [
            "Coccus",
            "Bacillus",
            "Spirillum",
            "Vibrio"
        ],
        "answer": "Spirillum",
        "difficulty": "easy",
        "topic": "Microbial Structure and Function",
        "explanation": "Spirillum refers to spiral-shaped bacteria."
    },
    {
        "id": 131,
        "question": "Which structure enables bacteria to resist antibiotics?",
        "options": [
            "Biofilm",
            "Flagella",
            "Pili",
            "Ribosome"
        ],
        "answer": "Biofilm",
        "difficulty": "medium",
        "topic": "Microbial Structure and Function",
        "explanation": "Biofilms protect bacteria from antibiotics and immune responses."
    },
    {
        "id": 132,
        "question": "Which growth condition favors obligate anaerobes?",
        "options": [
            "High oxygen",
            "Low oxygen",
            "No oxygen",
            "Variable oxygen"
        ],
        "answer": "No oxygen",
        "difficulty": "medium",
        "topic": "Microbial Growth and Control",
        "explanation": "Obligate anaerobes thrive in oxygen-free environments."
    },
    {
        "id": 133,
        "question": "Which metabolic process produces lactic acid in bacteria?",
        "options": [
            "Aerobic respiration",
            "Lactic acid fermentation",
            "Alcohol fermentation",
            "Krebs cycle"
        ],
        "answer": "Lactic acid fermentation",
        "difficulty": "medium",
        "topic": "Microbial Metabolism",
        "explanation": "Lactic acid fermentation produces lactic acid under anaerobic conditions."
    },
    {
        "id": 134,
        "question": "Which microbe uses hydrogen as an energy source?",
        "options": [
            "Methanogens",
            "Cyanobacteria",
            "Sulfate-reducing bacteria",
            "Nitrifying bacteria"
        ],
        "answer": "Methanogens",
        "difficulty": "hard",
        "topic": "Microbial Metabolism",
        "explanation": "Methanogens oxidize hydrogen to produce methane."
    },
    {
        "id": 135,
        "question": "Which genetic element regulates antibiotic resistance in bacteria?",
        "options": [
            "Operon",
            "Plasmid",
            "Promoter",
            "Ribosome"
        ],
        "answer": "Plasmid",
        "difficulty": "medium",
        "topic": "Microbial Genetics",
        "explanation": "Plasmids often carry antibiotic resistance genes."
    },
    {
        "id": 136,
        "question": "Which bacterial group includes pathogens like E. coli?",
        "options": [
            "Proteobacteria",
            "Firmicutes",
            "Actinobacteria",
            "Bacteroidetes"
        ],
        "answer": "Proteobacteria",
        "difficulty": "medium",
        "topic": "Microbial Diversity",
        "explanation": "Proteobacteria include many pathogenic species like E. coli."
    },
    {
        "id": 137,
        "question": "Which protozoan causes amoebic dysentery?",
        "options": [
            "Entamoeba histolytica",
            "Plasmodium falciparum",
            "Trypanosoma cruzi",
            "Giardia lamblia"
        ],
        "answer": "Entamoeba histolytica",
        "difficulty": "medium",
        "topic": "Microbial Diversity",
        "explanation": "Entamoeba histolytica causes amoebic dysentery via contaminated water."
    },
    {
        "id": 138,
        "question": "Which immune cell is the first responder to microbial invasion?",
        "options": [
            "Neutrophil",
            "B cell",
            "T cell",
            "Plasma cell"
        ],
        "answer": "Neutrophil",
        "difficulty": "medium",
        "topic": "Immunology",
        "explanation": "Neutrophils are key innate immune cells that respond first to infections."
    },
    {
        "id": 139,
        "question": "Which bacterium causes diphtheria?",
        "options": [
            "Corynebacterium diphtheriae",
            "Bordetella pertussis",
            "Streptococcus pyogenes",
            "Haemophilus influenzae"
        ],
        "answer": "Corynebacterium diphtheriae",
        "difficulty": "medium",
        "topic": "Microbial Pathogenesis",
        "explanation": "Corynebacterium diphtheriae produces a toxin causing diphtheria."
    },
    {
        "id": 140,
        "question": "Which virus causes chickenpox and shingles?",
        "options": [
            "Varicella-zoster virus",
            "Herpes simplex virus",
            "Epstein-Barr virus",
            "Cytomegalovirus"
        ],
        "answer": "Varicella-zoster virus",
        "difficulty": "medium",
        "topic": "Microbial Pathogenesis",
        "explanation": "Varicella-zoster virus causes chickenpox and reactivates as shingles."
    },
    {
        "id": 141,
        "question": "Which fungal infection is common in the oral cavity?",
        "options": [
            "Candidiasis",
            "Aspergillosis",
            "Histoplasmosis",
            "Coccidioidomycosis"
        ],
        "answer": "Candidiasis",
        "difficulty": "medium",
        "topic": "Microbial Pathogenesis",
        "explanation": "Candidiasis, caused by Candida albicans, affects the oral mucosa."
    },
    {
        "id": 142,
        "question": "Which pathogen is transmitted by fleas causing plague?",
        "options": [
            "Yersinia pestis",
            "Borrelia burgdorferi",
            "Vibrio cholerae",
            "Shigella dysenteriae"
        ],
        "answer": "Yersinia pestis",
        "difficulty": "medium",
        "topic": "Epidemiology",
        "explanation": "Yersinia pestis is transmitted by fleas, causing bubonic plague."
    },
    {
        "id": 143,
        "question": "Which microbe is used in wastewater treatment to degrade organic matter?",
        "options": [
            "Pseudomonas",
            "Lactobacillus",
            "Streptomyces",
            "Clostridium"
        ],
        "answer": "Pseudomonas",
        "difficulty": "medium",
        "topic": "Environmental Microbiology",
        "explanation": "Pseudomonas degrades organic pollutants in wastewater treatment."
    },
    {
        "id": 144,
        "question": "Which microbe produces antibiotics like streptomycin?",
        "options": [
            "Streptomyces",
            "Penicillium",
            "Aspergillus",
            "Saccharomyces"
        ],
        "answer": "Streptomyces",
        "difficulty": "medium",
        "topic": "Industrial Microbiology",
        "explanation": "Streptomyces species produce antibiotics like streptomycin."
    },
    {
        "id": 145,
        "question": "Which antibiotic targets fungal cell membranes?",
        "options": [
            "Penicillin",
            "Amphotericin B",
            "Tetracycline",
            "Ciprofloxacin"
        ],
        "answer": "Amphotericin B",
        "difficulty": "medium",
        "topic": "Antimicrobial Agents and Resistance",
        "explanation": "Amphotericin B disrupts fungal membranes by binding ergosterol."
    },
    {
        "id": 146,
        "question": "Which test differentiates Enterobacteriaceae from other Gram-negative bacteria?",
        "options": [
            "Oxidase test",
            "Catalase test",
            "Coagulase test",
            "Urease test"
        ],
        "answer": "Oxidase test",
        "difficulty": "hard",
        "topic": "Diagnostic Microbiology",
        "explanation": "The oxidase test identifies Enterobacteriaceae, which are typically oxidase-negative."
    },
    {
        "id": 147,
        "question": "Which emerging pathogen causes severe respiratory illness in the Middle East?",
        "options": [
            "MERS-CoV",
            "SARS-CoV",
            "Zika virus",
            "Ebola virus"
        ],
        "answer": "MERS-CoV",
        "difficulty": "medium",
        "topic": "Emerging Issues in Microbiology",
        "explanation": "MERS-CoV causes Middle East Respiratory Syndrome."
    },
    {
        "id": 148,
        "question": "Which bacterial structure facilitates genetic exchange during conjugation?",
        "options": [
            "Pili",
            "Flagella",
            "Capsule",
            "Endospore"
        ],
        "answer": "Pili",
        "difficulty": "medium",
        "topic": "Microbial Genetics",
        "explanation": "Conjugation pili form a bridge for DNA transfer between bacteria."
    },
    {
        "id": 149,
        "question": "Which immune response is non-specific and immediate?",
        "options": [
            "Adaptive immunity",
            "Innate immunity",
            "Humoral immunity",
            "Cellular immunity"
        ],
        "answer": "Innate immunity",
        "difficulty": "easy",
        "topic": "Immunology",
        "explanation": "Innate immunity provides immediate, non-specific defense against microbes."
    },
    {
        "id": 150,
        "question": "Which bacterium causes food poisoning from undercooked poultry?",
        "options": [
            "Salmonella enterica",
            "Clostridium botulinum",
            "Staphylococcus aureus",
            "Vibrio parahaemolyticus"
        ],
        "answer": "Salmonella enterica",
        "difficulty": "medium",
        "topic": "Microbial Pathogenesis",
        "explanation": "Salmonella enterica is a common cause of foodborne illness from poultry."
    },
    {
        "id": 151,
        "question": "Which branch of microbiology studies fungi?",
        "options": [
            "Bacteriology",
            "Virology",
            "Mycology",
            "Parasitology"
        ],
        "answer": "Mycology",
        "difficulty": "easy",
        "topic": "Introduction to Microbiology",
        "explanation": "Mycology is the study of fungi, including yeasts and molds."
    },
    {
        "id": 152,
        "question": "Which scientist developed postulates to identify disease-causing microbes?",
        "options": [
            "Louis Pasteur",
            "Robert Koch",
            "Joseph Lister",
            "Ignaz Semmelweis"
        ],
        "answer": "Robert Koch",
        "difficulty": "easy",
        "topic": "Introduction to Microbiology",
        "explanation": "Robert Koch developed Koch's postulates to link specific microbes to diseases."
    },
    {
        "id": 153,
        "question": "Which microbial classification system uses rRNA gene sequencing?",
        "options": [
            "Linnaean taxonomy",
            "Phenetic classification",
            "Phylogenetic classification",
            "Morphological classification"
        ],
        "answer": "Phylogenetic classification",
        "difficulty": "medium",
        "topic": "Introduction to Microbiology",
        "explanation": "Phylogenetic classification uses 16S rRNA sequences to determine evolutionary relationships."
    },
    {
        "id": 154,
        "question": "Which microscopy technique enhances contrast without staining?",
        "options": [
            "Bright-field microscopy",
            "Phase-contrast microscopy",
            "Electron microscopy",
            "Dark-field microscopy"
        ],
        "answer": "Phase-contrast microscopy",
        "difficulty": "medium",
        "topic": "Microscopy and Staining",
        "explanation": "Phase-contrast microscopy uses light phase shifts to enhance contrast in live cells."
    },
    {
        "id": 155,
        "question": "Which stain is used to detect Mycobacterium tuberculosis?",
        "options": [
            "Gram stain",
            "Acid-fast stain",
            "Capsule stain",
            "Endospore stain"
        ],
        "answer": "Acid-fast stain",
        "difficulty": "easy",
        "topic": "Microscopy and Staining",
        "explanation": "Acid-fast stain detects Mycobacterium due to its waxy cell wall."
    },
    {
        "id": 156,
        "question": "Which factor limits resolution in light microscopy?",
        "options": [
            "Wavelength of light",
            "Magnification power",
            "Lens diameter",
            "Sample thickness"
        ],
        "answer": "Wavelength of light",
        "difficulty": "hard",
        "topic": "Microscopy and Staining",
        "explanation": "Resolution in light microscopy is limited by the wavelength of visible light."
    },
    {
        "id": 157,
        "question": "Which component is absent in Gram-negative bacterial cell walls?",
        "options": [
            "Peptidoglycan",
            "Lipopolysaccharide",
            "Teichoic acid",
            "Outer membrane"
        ],
        "answer": "Teichoic acid",
        "difficulty": "medium",
        "topic": "Microbial Cell Biology",
        "explanation": "Teichoic acid is found in Gram-positive cell walls, not Gram-negative."
    },
    {
        "id": 158,
        "question": "Which eukaryotic microbe lacks a cell wall?",
        "options": [
            "Fungi",
            "Algae",
            "Protozoa",
            "Helminths"
        ],
        "answer": "Protozoa",
        "difficulty": "easy",
        "topic": "Microbial Cell Biology",
        "explanation": "Protozoa typically lack a cell wall, unlike fungi and algae."
    },
    {
        "id": 159,
        "question": "Which bacterial structure forms a protective layer against antibiotics?",
        "options": [
            "Capsule",
            "Flagella",
            "Pili",
            "Nucleoid"
        ],
        "answer": "Capsule",
        "difficulty": "medium",
        "topic": "Microbial Cell Biology",
        "explanation": "Capsules protect bacteria from antibiotics and phagocytosis."
    },
    {
        "id": 160,
        "question": "Which medium selects for Gram-negative bacteria?",
        "options": [
            "Blood agar",
            "MacConkey agar",
            "Mannitol salt agar",
            "Sabouraud agar"
        ],
        "answer": "MacConkey agar",
        "difficulty": "medium",
        "topic": "Microbial Growth and Nutrition",
        "explanation": "MacConkey agar inhibits Gram-positive bacteria, selecting for Gram-negative."
    },
    {
        "id": 161,
        "question": "Which temperature range supports mesophilic bacteria?",
        "options": [
            "0-20°C",
            "20-45°C",
            "45-80°C",
            "Above 80°C"
        ],
        "answer": "20-45°C",
        "difficulty": "easy",
        "topic": "Microbial Growth and Nutrition",
        "explanation": "Mesophiles grow optimally at moderate temperatures (20-45°C)."
    },
    {
        "id": 162,
        "question": "Which method quantifies viable bacteria in a sample?",
        "options": [
            "Turbidity measurement",
            "Direct microscopic count",
            "Colony-forming unit (CFU) count",
            "Dry weight measurement"
        ],
        "answer": "Colony-forming unit (CFU) count",
        "difficulty": "medium",
        "topic": "Microbial Growth and Nutrition",
        "explanation": "CFU counts measure viable bacteria by colony growth on agar."
    },
    {
        "id": 163,
        "question": "Which enzyme initiates bacterial DNA replication?",
        "options": [
            "DNA polymerase",
            "Helicase",
            "Primase",
            "Ligase"
        ],
        "answer": "Helicase",
        "difficulty": "medium",
        "topic": "Microbial Genetics",
        "explanation": "Helicase unwinds DNA at the replication fork to initiate replication."
    },
    {
        "id": 164,
        "question": "Which bacterial gene transfer involves bacteriophage mediation?",
        "options": [
            "Transformation",
            "Conjugation",
            "Transduction",
            "Recombination"
        ],
        "answer": "Transduction",
        "difficulty": "medium",
        "topic": "Microbial Genetics",
        "explanation": "Transduction transfers DNA between bacteria via bacteriophages."
    },
    {
        "id": 165,
        "question": "Which genetic element is a mobile segment of DNA that can 'jump' within a genome?",
        "options": [
            "Plasmid",
            "Transposon",
            "Operon",
            "Promoter"
        ],
        "answer": "Transposon",
        "difficulty": "hard",
        "topic": "Microbial Genetics",
        "explanation": "Transposons are mobile DNA segments that can relocate within a genome."
    },
    {
        "id": 166,
        "question": "Which viral component determines host cell specificity?",
        "options": [
            "Capsid",
            "Envelope",
            "Surface protein",
            "Nucleic acid"
        ],
        "answer": "Surface protein",
        "difficulty": "medium",
        "topic": "Virology",
        "explanation": "Surface proteins, like spikes, bind to host cell receptors."
    },
    {
        "id": 167,
        "question": "Which viral cycle integrates DNA into the host genome?",
        "options": [
            "Lytic cycle",
            "Lysogenic cycle",
            "Latent cycle",
            "Chronic cycle"
        ],
        "answer": "Lysogenic cycle",
        "difficulty": "medium",
        "topic": "Virology",
        "explanation": "The lysogenic cycle integrates viral DNA into the host genome."
    },
    {
        "id": 168,
        "question": "Which virus is associated with cervical cancer?",
        "options": [
            "Hepatitis B virus",
            "Human papillomavirus",
            "Epstein-Barr virus",
            "HIV"
        ],
        "answer": "Human papillomavirus",
        "difficulty": "medium",
        "topic": "Virology",
        "explanation": "HPV, particularly types 16 and 18, is linked to cervical cancer."
    },
    {
        "id": 169,
        "question": "Which fungus exhibits both yeast and mold forms?",
        "options": [
            "Aspergillus niger",
            "Candida albicans",
            "Penicillium chrysogenum",
            "Rhizopus stolonifer"
        ],
        "answer": "Candida albicans",
        "difficulty": "medium",
        "topic": "Mycology",
        "explanation": "Candida albicans is a dimorphic fungus, switching between yeast and mold."
    },
    {
        "id": 170,
        "question": "Which fungal structure produces asexual spores externally?",
        "options": [
            "Sporangium",
            "Conidia",
            "Ascus",
            "Basidium"
        ],
        "answer": "Conidia",
        "difficulty": "medium",
        "topic": "Mycology",
        "explanation": "Conidia are asexual spores produced externally on fungal hyphae."
    },
    {
        "id": 171,
        "question": "Which fungal pathogen causes histoplasmosis?",
        "options": [
            "Histoplasma capsulatum",
            "Cryptococcus neoformans",
            "Aspergillus fumigatus",
            "Trichophyton rubrum"
        ],
        "answer": "Histoplasma capsulatum",
        "difficulty": "hard",
        "topic": "Mycology",
        "explanation": "Histoplasma capsulatum causes histoplasmosis, often from bat guano."
    },
    {
        "id": 172,
        "question": "Which protozoan is transmitted by the Anopheles mosquito?",
        "options": [
            "Plasmodium falciparum",
            "Entamoeba histolytica",
            "Giardia lamblia",
            "Trypanosoma cruzi"
        ],
        "answer": "Plasmodium falciparum",
        "difficulty": "easy",
        "topic": "Parasitology",
        "explanation": "Plasmodium falciparum causes malaria and is mosquito-transmitted."
    },
    {
        "id": 173,
        "question": "Which helminth causes schistosomiasis?",
        "options": [
            "Schistosoma mansoni",
            "Ascaris lumbricoides",
            "Taenia solium",
            "Trichinella spiralis"
        ],
        "answer": "Schistosoma mansoni",
        "difficulty": "medium",
        "topic": "Parasitology",
        "explanation": "Schistosoma mansoni is a trematode causing schistosomiasis."
    },
    {
        "id": 174,
        "question": "Which ectoparasite transmits Lyme disease?",
        "options": [
            "Lice",
            "Fleas",
            "Ticks",
            "Mites"
        ],
        "answer": "Ticks",
        "difficulty": "medium",
        "topic": "Parasitology",
        "explanation": "Ticks, particularly Ixodes, transmit Borrelia burgdorferi, causing Lyme disease."
    },
    {
        "id": 175,
        "question": "Which sterilization method uses high-pressure steam?",
        "options": [
            "Dry heat",
            "Autoclaving",
            "Filtration",
            "UV radiation"
        ],
        "answer": "Autoclaving",
        "difficulty": "easy",
        "topic": "Control of Microorganisms",
        "explanation": "Autoclaving uses steam at 121°C to sterilize equipment."
    },
    {
        "id": 176,
        "question": "Which chemical agent is used as a surface disinfectant?",
        "options": [
            "Ethanol",
            "Formaldehyde",
            "Glutaraldehyde",
            "Hydrogen peroxide"
        ],
        "answer": "Ethanol",
        "difficulty": "medium",
        "topic": "Control of Microorganisms",
        "explanation": "Ethanol (70%) is commonly used as a surface disinfectant."
    },
    {
        "id": 177,
        "question": "Which physical method removes microbes from liquids?",
        "options": [
            "Boiling",
            "Filtration",
            "Incineration",
            "Pasteurization"
        ],
        "answer": "Filtration",
        "difficulty": "medium",
        "topic": "Control of Microorganisms",
        "explanation": "Filtration removes microbes from liquids using membrane filters."
    },
    {
        "id": 178,
        "question": "Which antibiotic inhibits bacterial cell wall synthesis?",
        "options": [
            "Erythromycin",
            "Penicillin",
            "Tetracycline",
            "Streptomycin"
        ],
        "answer": "Penicillin",
        "difficulty": "easy",
        "topic": "Antimicrobial Agents",
        "explanation": "Penicillin targets peptidoglycan synthesis in bacterial cell walls."
    },
    {
        "id": 179,
        "question": "Which test measures antibiotic susceptibility using paper disks?",
        "options": [
            "E-test",
            "Kirby-Bauer test",
            "Broth dilution test",
            "Agar well diffusion test"
        ],
        "answer": "Kirby-Bauer test",
        "difficulty": "medium",
        "topic": "Antimicrobial Agents",
        "explanation": "The Kirby-Bauer test uses disks to measure zones of inhibition."
    },
    {
        "id": 180,
        "question": "Which antifungal drug inhibits ergosterol synthesis?",
        "options": [
            "Amphotericin B",
            "Fluconazole",
            "Nystatin",
            "Griseofulvin"
        ],
        "answer": "Fluconazole",
        "difficulty": "hard",
        "topic": "Antimicrobial Agents",
        "explanation": "Fluconazole inhibits lanosterol demethylase, blocking ergosterol synthesis."
    },
    {
        "id": 181,
        "question": "Which microbe is part of the normal skin microbiota?",
        "options": [
            "Staphylococcus epidermidis",
            "Clostridium tetani",
            "Vibrio cholerae",
            "Mycobacterium leprae"
        ],
        "answer": "Staphylococcus epidermidis",
        "difficulty": "easy",
        "topic": "Host-Microbe Interactions",
        "explanation": "Staphylococcus epidermidis is a common skin commensal."
    },
    {
        "id": 182,
        "question": "Which bacterial toxin causes paralysis by inhibiting neurotransmitter release?",
        "options": [
            "Botulinum toxin",
            "Cholera toxin",
            "Diphtheria toxin",
            "Shiga toxin"
        ],
        "answer": "Botulinum toxin",
        "difficulty": "medium",
        "topic": "Host-Microbe Interactions",
        "explanation": "Botulinum toxin, produced by Clostridium botulinum, causes paralysis."
    },
    {
        "id": 183,
        "question": "Which virulence factor enhances bacterial invasion of host tissues?",
        "options": [
            "Hyaluronidase",
            "Endotoxin",
            "Capsule",
            "Flagella"
        ],
        "answer": "Hyaluronidase",
        "difficulty": "hard",
        "topic": "Host-Microbe Interactions",
        "explanation": "Hyaluronidase degrades host connective tissue, aiding bacterial spread."
    },
    {
        "id": 184,
        "question": "Which immune cell is critical for antigen presentation?",
        "options": [
            "Dendritic cell",
            "B cell",
            "T cell",
            "Neutrophil"
        ],
        "answer": "Dendritic cell",
        "difficulty": "medium",
        "topic": "Immunology",
        "explanation": "Dendritic cells present antigens to activate T cells."
    },
    {
        "id": 185,
        "question": "Which vaccine type uses weakened live pathogens?",
        "options": [
            "Inactivated vaccine",
            "Subunit vaccine",
            "Live attenuated vaccine",
            "Toxoid vaccine"
        ],
        "answer": "Live attenuated vaccine",
        "difficulty": "easy",
        "topic": "Immunology",
        "explanation": "Live attenuated vaccines use weakened pathogens to stimulate immunity."
    },
    {
        "id": 186,
        "question": "Which immunological concept explains protection from reinfection?",
        "options": [
            "Herd immunity",
            "Immunological memory",
            "Innate immunity",
            "Passive immunity"
        ],
        "answer": "Immunological memory",
        "difficulty": "medium",
        "topic": "Immunology",
        "explanation": "Immunological memory allows rapid response to previously encountered pathogens."
    },
    {
        "id": 187,
        "question": "Which diagnostic technique detects microbial DNA in clinical samples?",
        "options": [
            "ELISA",
            "PCR",
            "Agglutination test",
            "Western blot"
        ],
        "answer": "PCR",
        "difficulty": "easy",
        "topic": "Diagnostic Microbiology",
        "explanation": "PCR amplifies microbial DNA for rapid identification."
    },
    {
        "id": 188,
        "question": "Which serological test detects antibodies using enzyme-linked substrates?",
        "options": [
            "Complement fixation",
            "ELISA",
            "Hemagglutination",
            "Precipitation test"
        ],
        "answer": "ELISA",
        "difficulty": "medium",
        "topic": "Diagnostic Microbiology",
        "explanation": "ELISA uses enzyme-linked antibodies to detect antigens or antibodies."
    },
    {
        "id": 189,
        "question": "Which sample is used to diagnose urinary tract infections?",
        "options": [
            "Blood",
            "Sputum",
            "Urine",
            "Cerebrospinal fluid"
        ],
        "answer": "Urine",
        "difficulty": "easy",
        "topic": "Diagnostic Microbiology",
        "explanation": "Urine samples are cultured to diagnose UTIs."
    },
    {
        "id": 190,
        "question": "Which bacterium causes Legionnaires' disease?",
        "options": [
            "Legionella pneumophila",
            "Streptococcus pneumoniae",
            "Mycoplasma pneumoniae",
            "Haemophilus influenzae"
        ],
        "answer": "Legionella pneumophila",
        "difficulty": "medium",
        "topic": "Infectious Diseases by System",
        "explanation": "Legionella pneumophila causes severe pneumonia, often from water sources."
    },
    {
        "id": 191,
        "question": "Which virus causes hepatitis A?",
        "options": [
            "Hepatitis A virus",
            "Hepatitis B virus",
            "Hepatitis C virus",
            "Hepatitis D virus"
        ],
        "answer": "Hepatitis A virus",
        "difficulty": "easy",
        "topic": "Infectious Diseases by System",
        "explanation": "Hepatitis A virus is transmitted via the fecal-oral route, causing acute hepatitis."
    },
    {
        "id": 192,
        "question": "Which bacterium is a common cause of urinary tract infections?",
        "options": [
            "Escherichia coli",
            "Staphylococcus aureus",
            "Clostridium difficile",
            "Pseudomonas aeruginosa"
        ],
        "answer": "Escherichia coli",
        "difficulty": "medium",
        "topic": "Infectious Diseases by System",
        "explanation": "E. coli is the most common cause of UTIs, originating from the gut."
    },
    {
        "id": 193,
        "question": "Which microbe is used in sewage treatment to degrade organic matter?",
        "options": [
            "Bacillus subtilis",
            "Pseudomonas putida",
            "Lactobacillus casei",
            "Streptomyces griseus"
        ],
        "answer": "Pseudomonas putida",
        "difficulty": "medium",
        "topic": "Environmental and Applied Microbiology",
        "explanation": "Pseudomonas putida degrades organic pollutants in sewage treatment."
    },
    {
        "id": 194,
        "question": "Which bacterium is used to produce streptomycin?",
        "options": [
            "Streptomyces griseus",
            "Bacillus subtilis",
            "Escherichia coli",
            "Lactobacillus bulgaricus"
        ],
        "answer": "Streptomyces griseus",
        "difficulty": "medium",
        "topic": "Environmental and Applied Microbiology",
        "explanation": "Streptomyces griseus produces the antibiotic streptomycin."
    },
    {
        "id": 195,
        "question": "Which microbe causes spoilage in canned foods?",
        "options": [
            "Clostridium botulinum",
            "Salmonella enterica",
            "Listeria monocytogenes",
            "Escherichia coli"
        ],
        "answer": "Clostridium botulinum",
        "difficulty": "medium",
        "topic": "Environmental and Applied Microbiology",
        "explanation": "Clostridium botulinum produces toxins in improperly canned foods."
    },
    {
        "id": 196,
        "question": "Which microbe is studied in the field of virology?",
        "options": [
            "Bacteria",
            "Viruses",
            "Fungi",
            "Protozoa"
        ],
        "answer": "Viruses",
        "difficulty": "easy",
        "topic": "Introduction to Microbiology",
        "explanation": "Virology is the study of viruses and their interactions with hosts."
    },
    {
        "id": 197,
        "question": "Which staining technique visualizes bacterial capsules?",
        "options": [
            "Gram stain",
            "Acid-fast stain",
            "Capsule stain",
            "Endospore stain"
        ],
        "answer": "Capsule stain",
        "difficulty": "easy",
        "topic": "Microscopy and Staining",
        "explanation": "Capsule stains use negative staining to visualize bacterial capsules."
    },
    {
        "id": 198,
        "question": "Which microscope uses fluorescent dyes to label microbes?",
        "options": [
            "Bright-field microscope",
            "Electron microscope",
            "Fluorescence microscope",
            "Dark-field microscope"
        ],
        "answer": "Fluorescence microscope",
        "difficulty": "medium",
        "topic": "Microscopy and Staining",
        "explanation": "Fluorescence microscopes use fluorescent dyes for specific microbial labeling."
    },
    {
        "id": 199,
        "question": "Which bacterial structure facilitates attachment to surfaces?",
        "options": [
            "Pili",
            "Flagella",
            "Endospore",
            "Nucleoid"
        ],
        "answer": "Pili",
        "difficulty": "medium",
        "topic": "Microbial Cell Biology",
        "explanation": "Pili enable bacteria to adhere to surfaces and host tissues."
    },
    {
        "id": 200,
        "question": "Which eukaryotic microbe performs photosynthesis?",
        "options": [
            "Fungi",
            "Protozoa",
            "Algae",
            "Helminths"
        ],
        "answer": "Algae",
        "difficulty": "easy",
        "topic": "Microbial Cell Biology",
        "explanation": "Algae contain chloroplasts and perform photosynthesis."
    },
    {
        "id": 201,
        "question": "Which bacterial structure stores nutrients like polyphosphate?",
        "options": [
            "Inclusion bodies",
            "Ribosomes",
            "Nucleoid",
            "Cell membrane"
        ],
        "answer": "Inclusion bodies",
        "difficulty": "hard",
        "topic": "Microbial Cell Biology",
        "explanation": "Inclusion bodies store nutrients such as polyphosphate in bacteria."
    },
    {
        "id": 202,
        "question": "Which medium differentiates bacteria based on lactose fermentation?",
        "options": [
            "Blood agar",
            "MacConkey agar",
            "Mannitol salt agar",
            "Nutrient agar"
        ],
        "answer": "MacConkey agar",
        "difficulty": "medium",
        "topic": "Microbial Growth and Nutrition",
        "explanation": "MacConkey agar differentiates lactose fermenters by color change."
    },
    {
        "id": 203,
        "question": "Which oxygen level is optimal for microaerophilic bacteria?",
        "options": [
            "High oxygen",
            "No oxygen",
            "Low oxygen",
            "Variable oxygen"
        ],
        "answer": "Low oxygen",
        "difficulty": "medium",
        "topic": "Microbial Growth and Nutrition",
        "explanation": "Microaerophiles require low oxygen levels for growth."
    },
    {
        "id": 204,
        "question": "Which method isolates pure bacterial cultures?",
        "options": [
            "Streak plate method",
            "Turbidity measurement",
            "Direct count",
            "Dry weight measurement"
        ],
        "answer": "Streak plate method",
        "difficulty": "easy",
        "topic": "Microbial Growth and Nutrition",
        "explanation": "The streak plate method isolates single bacterial colonies."
    },
    {
        "id": 205,
        "question": "Which bacterial protein binds to the operator in gene regulation?",
        "options": [
            "Repressor",
            "Activator",
            "Polymerase",
            "Ribosome"
        ],
        "answer": "Repressor",
        "difficulty": "medium",
        "topic": "Microbial Genetics",
        "explanation": "Repressors bind to operators to inhibit gene transcription."
    },
    {
        "id": 206,
        "question": "Which mutation type shifts the reading frame in bacterial DNA?",
        "options": [
            "Silent mutation",
            "Missense mutation",
            "Frameshift mutation",
            "Nonsense mutation"
        ],
        "answer": "Frameshift mutation",
        "difficulty": "medium",
        "topic": "Microbial Genetics",
        "explanation": "Frameshift mutations disrupt the codon reading frame."
    },
    {
        "id": 207,
        "question": "Which resistance mechanism reduces antibiotic uptake in bacteria?",
        "options": [
            "Efflux pump",
            "Target modification",
            "Enzyme inactivation",
            "Reduced permeability"
        ],
        "answer": "Reduced permeability",
        "difficulty": "hard",
        "topic": "Microbial Genetics",
        "explanation": "Reduced permeability limits antibiotic entry into bacterial cells."
    },
    {
        "id": 208,
        "question": "Which viral structure protects the genetic material?",
        "options": [
            "Capsid",
            "Envelope",
            "Spike protein",
            "Matrix protein"
        ],
        "answer": "Capsid",
        "difficulty": "easy",
        "topic": "Virology",
        "explanation": "The capsid encases and protects viral nucleic acid."
    },
    {
        "id": 209,
        "question": "Which virus causes infectious mononucleosis?",
        "options": [
            "Epstein-Barr virus",
            "Cytomegalovirus",
            "Hepatitis C virus",
            "Influenza virus"
        ],
        "answer": "Epstein-Barr virus",
        "difficulty": "medium",
        "topic": "Virology",
        "explanation": "Epstein-Barr virus is associated with infectious mononucleosis."
    },
    {
        "id": 210,
        "question": "Which infectious agent consists only of protein?",
        "options": [
            "Virus",
            "Viroid",
            "Prion",
            "Bacteriophage"
        ],
        "answer": "Prion",
        "difficulty": "medium",
        "topic": "Virology",
        "explanation": "Prions are infectious proteins causing diseases like CJD."
    },
    {
        "id": 211,
        "question": "Which fungal structure is a mass of hyphae?",
        "options": [
            "Mycelium",
            "Sporangium",
            "Conidia",
            "Ascus"
        ],
        "answer": "Mycelium",
        "difficulty": "easy",
        "topic": "Mycology",
        "explanation": "Mycelium is the network of hyphae forming the fungal body."
    },
    {
        "id": 212,
        "question": "Which fungus causes ringworm?",
        "options": [
            "Trichophyton rubrum",
            "Candida albicans",
            "Cryptococcus neoformans",
            "Aspergillus niger"
        ],
        "answer": "Trichophyton rubrum",
        "difficulty": "medium",
        "topic": "Mycology",
        "explanation": "Trichophyton rubrum is a dermatophyte causing ringworm."
    },
    {
        "id": 213,
        "question": "Which fungal reproductive structure produces sexual spores in Ascomycetes?",
        "options": [
            "Basidium",
            "Ascus",
            "Sporangium",
            "Conidia"
        ],
        "answer": "Ascus",
        "difficulty": "hard",
        "topic": "Mycology",
        "explanation": "The ascus produces sexual spores in Ascomycete fungi."
    },
    {
        "id": 214,
        "question": "Which protozoan causes giardiasis?",
        "options": [
            "Giardia lamblia",
            "Plasmodium vivax",
            "Trypanosoma brucei",
            "Entamoeba histolytica"
        ],
        "answer": "Giardia lamblia",
        "difficulty": "easy",
        "topic": "Parasitology",
        "explanation": "Giardia lamblia causes giardiasis, a diarrheal illness."
    },
    {
        "id": 215,
        "question": "Which helminth is transmitted through undercooked pork?",
        "options": [
            "Taenia solium",
            "Schistosoma japonicum",
            "Ascaris lumbricoides",
            "Enterobius vermicularis"
        ],
        "answer": "Taenia solium",
        "difficulty": "medium",
        "topic": "Parasitology",
        "explanation": "Taenia solium, a tapeworm, is transmitted via undercooked pork."
    },
    {
        "id": 216,
        "question": "Which parasite’s life cycle involves a snail intermediate host?",
        "options": [
            "Schistosoma haematobium",
            "Trypanosoma cruzi",
            "Leishmania donovani",
            "Toxoplasma gondii"
        ],
        "answer": "Schistosoma haematobium",
        "difficulty": "hard",
        "topic": "Parasitology",
        "explanation": "Schistosoma uses snails as intermediate hosts in its life cycle."
    },
    {
        "id": 217,
        "question": "Which method uses UV light to control microbial growth?",
        "options": [
            "Ionizing radiation",
            "Non-ionizing radiation",
            "Filtration",
            "Boiling"
        ],
        "answer": "Non-ionizing radiation",
        "difficulty": "medium",
        "topic": "Control of Microorganisms",
        "explanation": "UV light, a non-ionizing radiation, damages microbial DNA."
    },
    {
        "id": 218,
        "question": "Which chemical agent cross-links microbial proteins?",
        "options": [
            "Chlorine",
            "Glutaraldehyde",
            "Iodine",
            "Alcohol"
        ],
        "answer": "Glutaraldehyde",
        "difficulty": "medium",
        "topic": "Control of Microorganisms",
        "explanation": "Glutaraldehyde cross-links proteins, used for high-level disinfection."
    },
    {
        "id": 219,
        "question": "Which biosafety level is required for handling Ebola virus?",
        "options": [
            "BSL-1",
            "BSL-2",
            "BSL-3",
            "BSL-4"
        ],
        "answer": "BSL-4",
        "difficulty": "medium",
        "topic": "Control of Microorganisms",
        "explanation": "BSL-4 is required for highly dangerous pathogens like Ebola."
    },
    {
        "id": 220,
        "question": "Which antibiotic targets bacterial RNA polymerase?",
        "options": [
            "Rifampin",
            "Penicillin",
            "Tetracycline",
            "Vancomycin"
        ],
        "answer": "Rifampin",
        "difficulty": "medium",
        "topic": "Antimicrobial Agents",
        "explanation": "Rifampin inhibits bacterial RNA polymerase, blocking transcription."
    },
    {
        "id": 221,
        "question": "Which antiviral drug targets influenza neuraminidase?",
        "options": [
            "Oseltamivir",
            "Acyclovir",
            "Zidovudine",
            "Ribavirin"
        ],
        "answer": "Oseltamivir",
        "difficulty": "hard",
        "topic": "Antimicrobial Agents",
        "explanation": "Oseltamivir inhibits neuraminidase, preventing influenza virus release."
    },
    {
        "id": 222,
        "question": "Which practice reduces inappropriate antibiotic use?",
        "options": [
            "Antibiotic stewardship",
            "Overprescribing",
            "Self-medication",
            "Broad-spectrum therapy"
        ],
        "answer": "Antibiotic stewardship",
        "difficulty": "medium",
        "topic": "Antimicrobial Agents",
        "explanation": "Antibiotic stewardship promotes rational antibiotic use."
    },
    {
        "id": 223,
        "question": "Which bacterium is an opportunistic pathogen in burn wounds?",
        "options": [
            "Pseudomonas aeruginosa",
            "Streptococcus pyogenes",
            "Clostridium perfringens",
            "Bacillus cereus"
        ],
        "answer": "Pseudomonas aeruginosa",
        "difficulty": "medium",
        "topic": "Host-Microbe Interactions",
        "explanation": "Pseudomonas aeruginosa commonly infects burn wounds."
    },
    {
        "id": 224,
        "question": "Which route of infection involves inhalation of microbial aerosols?",
        "options": [
            "Ingestion",
            "Inhalation",
            "Direct contact",
            "Parenteral"
        ],
        "answer": "Inhalation",
        "difficulty": "easy",
        "topic": "Host-Microbe Interactions",
        "explanation": "Inhalation of aerosols is a common route for respiratory pathogens."
    },
    {
        "id": 225,
        "question": "Which bacterial toxin inhibits protein synthesis in host cells?",
        "options": [
            "Diphtheria toxin",
            "Botulinum toxin",
            "Cholera toxin",
            "Tetanospasmin"
        ],
        "answer": "Diphtheria toxin",
        "difficulty": "medium",
        "topic": "Host-Microbe Interactions",
        "explanation": "Diphtheria toxin inhibits host cell protein synthesis."
    },
    {
        "id": 226,
        "question": "Which immune response involves antibody production?",
        "options": [
            "Cellular immunity",
            "Humoral immunity",
            "Innate immunity",
            "Passive immunity"
        ],
        "answer": "Humoral immunity",
        "difficulty": "easy",
        "topic": "Immunology",
        "explanation": "Humoral immunity involves B cells producing antibodies."
    },
    {
        "id": 227,
        "question": "Which molecule opsonizes microbes for phagocytosis?",
        "options": [
            "Cytokine",
            "Complement",
            "Antigen",
            "Interferon"
        ],
        "answer": "Complement",
        "difficulty": "medium",
        "topic": "Immunology",
        "explanation": "Complement proteins coat microbes, enhancing phagocytosis."
    },
    {
        "id": 228,
        "question": "Which vaccine provides herd immunity when widely administered?",
        "options": [
            "Tetanus vaccine",
            "Measles vaccine",
            "Hepatitis B vaccine",
            "Rabies vaccine"
        ],
        "answer": "Measles vaccine",
        "difficulty": "medium",
        "topic": "Immunology",
        "explanation": "The measles vaccine, when widely used, confers herd immunity."
    },
    {
        "id": 229,
        "question": "Which test identifies urease-producing bacteria?",
        "options": [
            "Urease test",
            "Catalase test",
            "Oxidase test",
            "Coagulase test"
        ],
        "answer": "Urease test",
        "difficulty": "easy",
        "topic": "Diagnostic Microbiology",
        "explanation": "The urease test detects bacteria that hydrolyze urea, like Helicobacter pylori."
    },
    {
        "id": 230,
        "question": "Which molecular technique detects viral RNA in real-time?",
        "options": [
            "PCR",
            "RT-PCR",
            "ELISA",
            "FISH"
        ],
        "answer": "RT-PCR",
        "difficulty": "medium",
        "topic": "Diagnostic Microbiology",
        "explanation": "RT-PCR amplifies and detects viral RNA in real-time."
    },
    {
        "id": 231,
        "question": "Which sample is used to diagnose meningitis?",
        "options": [
            "Blood",
            "Urine",
            "Cerebrospinal fluid",
            "Sputum"
        ],
        "answer": "Cerebrospinal fluid",
        "difficulty": "medium",
        "topic": "Diagnostic Microbiology",
        "explanation": "Cerebrospinal fluid is sampled to diagnose meningitis."
    },
    {
        "id": 232,
        "question": "Which bacterium causes streptococcal pharyngitis?",
        "options": [
            "Streptococcus pyogenes",
            "Streptococcus pneumoniae",
            "Staphylococcus aureus",
            "Corynebacterium diphtheriae"
        ],
        "answer": "Streptococcus pyogenes",
        "difficulty": "easy",
        "topic": "Infectious Diseases by System",
        "explanation": "Streptococcus pyogenes causes strep throat, a common pharyngitis."
    },
    {
        "id": 233,
        "question": "Which virus causes rabies?",
        "options": [
            "Rabies virus",
            "Influenza virus",
            "HIV",
            "Herpes simplex virus"
        ],
        "answer": "Rabies virus",
        "difficulty": "easy",
        "topic": "Infectious Diseases by System",
        "explanation": "Rabies virus, transmitted via animal bites, causes fatal encephalitis."
    },
    {
        "id": 234,
        "question": "Which bacterium causes syphilis?",
        "options": [
            "Treponema pallidum",
            "Neisseria gonorrhoeae",
            "Chlamydia trachomatis",
            "Mycoplasma genitalium"
        ],
        "answer": "Treponema pallidum",
        "difficulty": "medium",
        "topic": "Infectious Diseases by System",
        "explanation": "Treponema pallidum is the spirochete causing syphilis."
    },
    {
        "id": 235,
        "question": "Which microbe is used in bioremediation of oil spills?",
        "options": [
            "Alcanivorax borkumensis",
            "Lactobacillus acidophilus",
            "Bacillus subtilis",
            "Saccharomyces cerevisiae"
        ],
        "answer": "Alcanivorax borkumensis",
        "difficulty": "hard",
        "topic": "Environmental and Applied Microbiology",
        "explanation": "Alcanivorax borkumensis degrades hydrocarbons in oil spills."
    },
    {
        "id": 236,
        "question": "Which bacterium produces enzymes for industrial detergent use?",
        "options": [
            "Bacillus licheniformis",
            "Escherichia coli",
            "Streptomyces coelicolor",
            "Lactobacillus casei"
        ],
        "answer": "Bacillus licheniformis",
        "difficulty": "medium",
        "topic": "Environmental and Applied Microbiology",
        "explanation": "Bacillus licheniformis produces proteases for detergents."
    },
    {
        "id": 237,
        "question": "Which microbe is used in cheese production?",
        "options": [
            "Lactococcus lactis",
            "Clostridium botulinum",
            "Pseudomonas fluorescens",
            "Vibrio parahaemolyticus"
        ],
        "answer": "Lactococcus lactis",
        "difficulty": "medium",
        "topic": "Environmental and Applied Microbiology",
        "explanation": "Lactococcus lactis ferments milk to produce cheese."
    },
    {
        "id": 238,
        "question": "Which scientist disproved spontaneous generation?",
        "options": [
            "Louis Pasteur",
            "Robert Koch",
            "Antonie van Leeuwenhoek",
            "Alexander Fleming"
        ],
        "answer": "Louis Pasteur",
        "difficulty": "easy",
        "topic": "Introduction to Microbiology",
        "explanation": "Pasteur's swan-neck flask experiments disproved spontaneous generation."
    },
    {
        "id": 239,
        "question": "Which staining technique visualizes bacterial endospores?",
        "options": [
            "Gram stain",
            "Acid-fast stain",
            "Endospore stain",
            "Capsule stain"
        ],
        "answer": "Endospore stain",
        "difficulty": "easy",
        "topic": "Microscopy and Staining",
        "explanation": "Endospore stains highlight resistant bacterial spores."
    },
    {
        "id": 240,
        "question": "Which bacterial structure is composed of flagellin?",
        "options": [
            "Pili",
            "Flagella",
            "Capsule",
            "Cell wall"
        ],
        "answer": "Flagella",
        "difficulty": "medium",
        "topic": "Microbial Cell Biology",
        "explanation": "Flagella are made of flagellin and enable bacterial motility."
    },
    {
        "id": 241,
        "question": "Which pH range supports most bacterial growth?",
        "options": [
            "1-3",
            "4-6",
            "6-8",
            "9-11"
        ],
        "answer": "6-8",
        "difficulty": "easy",
        "topic": "Microbial Growth and Nutrition",
        "explanation": "Most bacteria grow optimally at neutral to slightly alkaline pH (6-8)."
    },
    {
        "id": 242,
        "question": "Which genetic process repairs UV-damaged bacterial DNA?",
        "options": [
            "Mismatch repair",
            "Nucleotide excision repair",
            "Base excision repair",
            "SOS repair"
        ],
        "answer": "Nucleotide excision repair",
        "difficulty": "hard",
        "topic": "Microbial Genetics",
        "explanation": "Nucleotide excision repair removes UV-induced DNA lesions."
    },
    {
        "id": 243,
        "question": "Which virus causes smallpox?",
        "options": [
            "Variola virus",
            "Vaccinia virus",
            "Varicella-zoster virus",
            "Poliovirus"
        ],
        "answer": "Variola virus",
        "difficulty": "medium",
        "topic": "Virology",
        "explanation": "Variola virus caused smallpox, eradicated in 1980."
    },
    {
        "id": 244,
        "question": "Which fungus causes cryptococcal meningitis?",
        "options": [
            "Cryptococcus neoformans",
            "Aspergillus fumigatus",
            "Histoplasma capsulatum",
            "Candida albicans"
        ],
        "answer": "Cryptococcus neoformans",
        "difficulty": "medium",
        "topic": "Mycology",
        "explanation": "Cryptococcus neoformans causes meningitis in immunocompromised patients."
    },
    {
        "id": 245,
        "question": "Which protozoan is transmitted by sandflies?",
        "options": [
            "Leishmania donovani",
            "Plasmodium malariae",
            "Giardia lamblia",
            "Entamoeba histolytica"
        ],
        "answer": "Leishmania donovani",
        "difficulty": "medium",
        "topic": "Parasitology",
        "explanation": "Leishmania donovani, causing leishmaniasis, is sandfly-transmitted."
    },
    {
        "id": 246,
        "question": "Which chemical agent disrupts microbial cell membranes?",
        "options": [
            "Phenol",
            "Quaternary ammonium compounds",
            "Chlorine",
            "Formaldehyde"
        ],
        "answer": "Quaternary ammonium compounds",
        "difficulty": "medium",
        "topic": "Control of Microorganisms",
        "explanation": "Quaternary ammonium compounds disrupt microbial membranes."
    },
    {
        "id": 247,
        "question": "Which antibiotic is a last-resort treatment for MRSA?",
        "options": [
            "Vancomycin",
            "Penicillin",
            "Tetracycline",
            "Erythromycin"
        ],
        "answer": "Vancomycin",
        "difficulty": "medium",
        "topic": "Antimicrobial Agents",
        "explanation": "Vancomycin is used for methicillin-resistant Staphylococcus aureus infections."
    },
    {
        "id": 248,
        "question": "Which bacterial structure forms biofilms on medical devices?",
        "options": [
            "Capsule",
            "Biofilm matrix",
            "Flagella",
            "Pili"
        ],
        "answer": "Biofilm matrix",
        "difficulty": "medium",
        "topic": "Host-Microbe Interactions",
        "explanation": "Biofilm matrices, composed of polysaccharides, form on surfaces."
    },
    {
        "id": 249,
        "question": "Which immune cell kills virus-infected cells?",
        "options": [
            "Cytotoxic T cell",
            "B cell",
            "Macrophage",
            "Neutrophil"
        ],
        "answer": "Cytotoxic T cell",
        "difficulty": "medium",
        "topic": "Immunology",
        "explanation": "Cytotoxic T cells destroy virus-infected host cells."
    },
    {
        "id": 250,
        "question": "Which bacterium causes anthrax?",
        "options": [
            "Bacillus anthracis",
            "Clostridium perfringens",
            "Streptococcus pneumoniae",
            "Yersinia pestis"
        ],
        "answer": "Bacillus anthracis",
        "difficulty": "easy",
        "topic": "Infectious Diseases by System",
        "explanation": "Bacillus anthracis causes anthrax, a zoonotic disease."
    },
    {
        "id": 251,
        "question": "Which virus causes genital warts?",
        "options": [
            "Human papillomavirus",
            "Herpes simplex virus",
            "HIV",
            "Hepatitis B virus"
        ],
        "answer": "Human papillomavirus",
        "difficulty": "medium",
        "topic": "Infectious Diseases by System",
        "explanation": "Certain HPV types cause genital warts, a common STI."
    },
    {
        "id": 252,
        "question": "Which microbe is used to produce recombinant vaccines?",
        "options": [
            "Escherichia coli",
            "Clostridium tetani",
            "Pseudomonas aeruginosa",
            "Vibrio cholerae"
        ],
        "answer": "Escherichia coli",
        "difficulty": "medium",
        "topic": "Environmental and Applied Microbiology",
        "explanation": "E. coli is used to produce recombinant proteins for vaccines."
    },
    {
        "id": 253,
        "question": "Which microbe is studied in parasitology?",
        "options": [
            "Bacteria",
            "Viruses",
            "Protozoa",
            "Fungi"
        ],
        "answer": "Protozoa",
        "difficulty": "easy",
        "topic": "Introduction to Microbiology",
        "explanation": "Parasitology studies protozoa, helminths, and ectoparasites."
    },
    {
        "id": 254,
        "question": "Which bacterial component is stained purple in Gram staining?",
        "options": [
            "Lipopolysaccharide",
            "Peptidoglycan",
            "Teichoic acid",
            "Outer membrane"
        ],
        "answer": "Peptidoglycan",
        "difficulty": "medium",
        "topic": "Microscopy and Staining",
        "explanation": "Peptidoglycan in Gram-positive cell walls retains the purple stain."
    },
    {
        "id": 255,
        "question": "Which bacterial structure regulates nutrient uptake?",
        "options": [
            "Cell membrane",
            "Cell wall",
            "Capsule",
            "Nucleoid"
        ],
        "answer": "Cell membrane",
        "difficulty": "medium",
        "topic": "Microbial Cell Biology",
        "explanation": "The cell membrane controls nutrient transport into the cell."
    },
    {
        "id": 256,
        "question": "Which medium supports fastidious bacteria like Neisseria?",
        "options": [
            "Nutrient agar",
            "Chocolate agar",
            "Mannitol salt agar",
            "MacConkey agar"
        ],
        "answer": "Chocolate agar",
        "difficulty": "medium",
        "topic": "Microbial Growth and Nutrition",
        "explanation": "Chocolate agar provides nutrients for fastidious bacteria like Neisseria."
    },
    {
        "id": 257,
        "question": "Which viral enzyme reverse-transcribes RNA to DNA?",
        "options": [
            "Reverse transcriptase",
            "DNA polymerase",
            "RNA polymerase",
            "Helicase"
        ],
        "answer": "Reverse transcriptase",
        "difficulty": "medium",
        "topic": "Virology",
        "explanation": "Reverse transcriptase is used by retroviruses like HIV."
    },
    {
        "id": 258,
        "question": "Which fungus causes pneumocystis pneumonia?",
        "options": [
            "Pneumocystis jirovecii",
            "Aspergillus fumigatus",
            "Cryptococcus neoformans",
            "Histoplasma capsulatum"
        ],
        "answer": "Pneumocystis jirovecii",
        "difficulty": "hard",
        "topic": "Mycology",
        "explanation": "Pneumocystis jirovecii causes pneumonia in immunocompromised patients."
    },
    {
        "id": 259,
        "question": "Which helminth causes trichinosis from undercooked meat?",
        "options": [
            "Trichinella spiralis",
            "Taenia saginata",
            "Schistosoma mansoni",
            "Ascaris lumbricoides"
        ],
        "answer": "Trichinella spiralis",
        "difficulty": "medium",
        "topic": "Parasitology",
        "explanation": "Trichinella spiralis causes trichinosis via undercooked pork."
    },
    {
        "id": 260,
        "question": "Which antibiotic targets bacterial ribosomes?",
        "options": [
            "Streptomycin",
            "Penicillin",
            "Ciprofloxacin",
            "Vancomycin"
        ],
        "answer": "Streptomycin",
        "difficulty": "medium",
        "topic": "Antimicrobial Agents",
        "explanation": "Streptomycin binds to bacterial ribosomes, inhibiting protein synthesis."
    },
    {
        "id": 261,
        "question": "Which bacterium causes gas gangrene?",
        "options": [
            "Clostridium perfringens",
            "Streptococcus pyogenes",
            "Bacillus anthracis",
            "Pseudomonas aeruginosa"
        ],
        "answer": "Clostridium perfringens",
        "difficulty": "medium",
        "topic": "Infectious Diseases by System",
        "explanation": "Clostridium perfringens causes gas gangrene in deep wounds."
    },
    {
        "id": 262,
        "question": "Which microbe is used to produce biofuels like butanol?",
        "options": [
            "Clostridium acetobutylicum",
            "Escherichia coli",
            "Lactobacillus casei",
            "Saccharomyces cerevisiae"
        ],
        "answer": "Clostridium acetobutylicum",
        "difficulty": "hard",
        "topic": "Environmental and Applied Microbiology",
        "explanation": "Clostridium acetobutylicum ferments sugars to produce butanol."
    },
    {
        "id": 263,
        "question": "Which bacterium causes listeriosis from contaminated food?",
        "options": [
            "Listeria monocytogenes",
            "Salmonella typhi",
            "Shigella sonnei",
            "Vibrio parahaemolyticus"
        ],
        "answer": "Listeria monocytogenes",
        "difficulty": "medium",
        "topic": "Infectious Diseases by System",
        "explanation": "Listeria monocytogenes causes listeriosis, often from deli meats."
    },
    {
        "id": 264,
        "question": "Which diagnostic test uses fluorescent antibodies to detect microbes?",
        "options": [
            "Direct fluorescent antibody test",
            "ELISA",
            "PCR",
            "Agglutination test"
        ],
        "answer": "Direct fluorescent antibody test",
        "difficulty": "medium",
        "topic": "Diagnostic Microbiology",
        "explanation": "The DFA test uses fluorescent antibodies for microbial detection."
    },
    {
        "id": 265,
        "question": "Which immune cell releases histamine during allergic reactions?",
        "options": [
            "Mast cell",
            "T cell",
            "B cell",
            "Macrophage"
        ],
        "answer": "Mast cell",
        "difficulty": "medium",
        "topic": "Immunology",
        "explanation": "Mast cells release histamine, triggering allergic responses."
    },
    {
        "id": 266,
        "question": "Which bacterium causes typhoid fever?",
        "options": [
            "Salmonella typhi",
            "Shigella dysenteriae",
            "Vibrio cholerae",
            "Escherichia coli"
        ],
        "answer": "Salmonella typhi",
        "difficulty": "easy",
        "topic": "Infectious Diseases by System",
        "explanation": "Salmonella typhi causes typhoid fever, a systemic infection."
    },
    {
        "id": 267,
        "question": "Which microbe is used in water quality testing for fecal contamination?",
        "options": [
            "Escherichia coli",
            "Pseudomonas aeruginosa",
            "Clostridium perfringens",
            "Bacillus subtilis"
        ],
        "answer": "Escherichia coli",
        "difficulty": "medium",
        "topic": "Environmental and Applied Microbiology",
        "explanation": "E. coli is an indicator of fecal contamination in water."
    },
    {
        "id": 268,
        "question": "Which staining technique differentiates Gram-positive and Gram-negative bacteria?",
        "options": [
            "Gram stain",
            "Acid-fast stain",
            "Capsule stain",
            "Endospore stain"
        ],
        "answer": "Gram stain",
        "difficulty": "easy",
        "topic": "Microscopy and Staining",
        "explanation": "Gram stain classifies bacteria based on cell wall properties."
    },
    {
        "id": 269,
        "question": "Which bacterial structure synthesizes proteins?",
        "options": [
            "Ribosome",
            "Nucleoid",
            "Cell membrane",
            "Capsule"
        ],
        "answer": "Ribosome",
        "difficulty": "easy",
        "topic": "Microbial Cell Biology",
        "explanation": "Ribosomes are the site of protein synthesis in bacteria."
    },
    {
        "id": 270,
        "question": "Which growth phase prepares bacteria for division?",
        "options": [
            "Lag phase",
            "Log phase",
            "Stationary phase",
            "Death phase"
        ],
        "answer": "Lag phase",
        "difficulty": "easy",
        "topic": "Microbial Growth and Nutrition",
        "explanation": "The lag phase involves metabolic preparation for cell division."
    },
    {
        "id": 271,
        "question": "Which viral structure is derived from the host cell membrane?",
        "options": [
            "Capsid",
            "Envelope",
            "Spike protein",
            "Nucleic acid"
        ],
        "answer": "Envelope",
        "difficulty": "medium",
        "topic": "Virology",
        "explanation": "Viral envelopes are formed from host cell membranes."
    },
    {
        "id": 272,
        "question": "Which fungus is used in bread production?",
        "options": [
            "Saccharomyces cerevisiae",
            "Aspergillus niger",
            "Penicillium roqueforti",
            "Rhizopus stolonifer"
        ],
        "answer": "Saccharomyces cerevisiae",
        "difficulty": "easy",
        "topic": "Mycology",
        "explanation": "Saccharomyces cerevisiae ferments dough to produce bread."
    },
    {
        "id": 273,
        "question": "Which protozoan causes toxoplasmosis?",
        "options": [
            "Toxoplasma gondii",
            "Plasmodium falciparum",
            "Trypanosoma cruzi",
            "Leishmania donovani"
        ],
        "answer": "Toxoplasma gondii",
        "difficulty": "medium",
        "topic": "Parasitology",
        "explanation": "Toxoplasma gondii, often from cats, causes toxoplasmosis."
    },
    {
        "id": 274,
        "question": "Which sterilization method uses ethylene oxide gas?",
        "options": [
            "Autoclaving",
            "Dry heat",
            "Gas sterilization",
            "Filtration"
        ],
        "answer": "Gas sterilization",
        "difficulty": "medium",
        "topic": "Control of Microorganisms",
        "explanation": "Ethylene oxide gas sterilizes heat-sensitive medical equipment."
    },
    {
        "id": 275,
        "question": "Which antibiotic is used to treat tuberculosis?",
        "options": [
            "Isoniazid",
            "Penicillin",
            "Tetracycline",
            "Ciprofloxacin"
        ],
        "answer": "Isoniazid",
        "difficulty": "medium",
        "topic": "Antimicrobial Agents",
        "explanation": "Isoniazid is a first-line drug for tuberculosis treatment."
    },
    {
        "id": 276,
        "question": "Which bacterium causes rheumatic fever as a complication?",
        "options": [
            "Streptococcus pyogenes",
            "Staphylococcus aureus",
            "Streptococcus pneumoniae",
            "Haemophilus influenzae"
        ],
        "answer": "Streptococcus pyogenes",
        "difficulty": "medium",
        "topic": "Infectious Diseases by System",
        "explanation": "Streptococcus pyogenes can lead to rheumatic fever post-infection."
    },
    {
        "id": 277,
        "question": "Which microbe produces ethanol in alcoholic beverages?",
        "options": [
            "Saccharomyces cerevisiae",
            "Lactobacillus bulgaricus",
            "Escherichia coli",
            "Clostridium acetobutylicum"
        ],
        "answer": "Saccharomyces cerevisiae",
        "difficulty": "easy",
        "topic": "Environmental and Applied Microbiology",
        "explanation": "Saccharomyces cerevisiae ferments sugars to produce ethanol."
    },
    {
        "id": 278,
        "question": "Which immune molecule neutralizes bacterial toxins?",
        "options": [
            "Antibody",
            "Cytokine",
            "Complement",
            "Interferon"
        ],
        "answer": "Antibody",
        "difficulty": "easy",
        "topic": "Immunology",
        "explanation": "Antibodies bind and neutralize bacterial toxins."
    },
    {
        "id": 279,
        "question": "Which diagnostic test detects microbial antigens in blood?",
        "options": [
            "Blood culture",
            "ELISA",
            "PCR",
            "Gram stain"
        ],
        "answer": "ELISA",
        "difficulty": "medium",
        "topic": "Diagnostic Microbiology",
        "explanation": "ELISA detects microbial antigens in blood samples."
    },
    {
        "id": 280,
        "question": "Which bacterium causes bacterial meningitis in neonates?",
        "options": [
            "Streptococcus agalactiae",
            "Neisseria meningitidis",
            "Haemophilus influenzae",
            "Streptococcus pneumoniae"
        ],
        "answer": "Streptococcus agalactiae",
        "difficulty": "hard",
        "topic": "Infectious Diseases by System",
        "explanation": "Streptococcus agalactiae (Group B Streptococcus) is a common cause of neonatal meningitis."
    },
    {
        "id": 281,
        "question": "Which microbe is used to produce citric acid industrially?",
        "options": [
            "Aspergillus niger",
            "Saccharomyces cerevisiae",
            "Lactobacillus bulgaricus",
            "Escherichia coli"
        ],
        "answer": "Aspergillus niger",
        "difficulty": "medium",
        "topic": "Environmental and Applied Microbiology",
        "explanation": "Aspergillus niger ferments sugars to produce citric acid."
    },
    {
        "id": 282,
        "question": "Which bacterium causes gonorrhea?",
        "options": [
            "Neisseria gonorrhoeae",
            "Treponema pallidum",
            "Chlamydia trachomatis",
            "Mycoplasma genitalium"
        ],
        "answer": "Neisseria gonorrhoeae",
        "difficulty": "easy",
        "topic": "Infectious Diseases by System",
        "explanation": "Neisseria gonorrhoeae causes the STI gonorrhea."
    },
    {
        "id": 283,
        "question": "Which viral disease is prevented by the MMR vaccine?",
        "options": [
            "Measles",
            "Hepatitis B",
            "Influenza",
            "Rabies"
        ],
        "answer": "Measles",
        "difficulty": "easy",
        "topic": "Infectious Diseases by System",
        "explanation": "The MMR vaccine protects against measles, mumps, and rubella."
    },
    {
        "id": 284,
        "question": "Which bacterial structure protects against desiccation?",
        "options": [
            "Endospore",
            "Pili",
            "Flagella",
            "Cell membrane"
        ],
        "answer": "Endospore",
        "difficulty": "easy",
        "topic": "Microbial Cell Biology",
        "explanation": "Endospores protect bacteria from desiccation and harsh conditions."
    },
    {
        "id": 285,
        "question": "Which method controls microbial growth in food using low temperatures?",
        "options": [
            "Refrigeration",
            "Boiling",
            "Filtration",
            "Irradiation"
        ],
        "answer": "Refrigeration",
        "difficulty": "easy",
        "topic": "Control of Microorganisms",
        "explanation": "Refrigeration slows microbial growth in food."
    },
    {
        "id": 286,
        "question": "Which antibiotic resistance mechanism hydrolyzes beta-lactam antibiotics?",
        "options": [
            "Beta-lactamase",
            "Efflux pump",
            "Target modification",
            "Reduced permeability"
        ],
        "answer": "Beta-lactamase",
        "difficulty": "medium",
        "topic": "Antimicrobial Agents",
        "explanation": "Beta-lactamase enzymes inactivate beta-lactam antibiotics like penicillin."
    },
    {
        "id": 287,
        "question": "Which immune cell is activated by MHC class I molecules?",
        "options": [
            "Cytotoxic T cell",
            "Helper T cell",
            "B cell",
            "Macrophage"
        ],
        "answer": "Cytotoxic T cell",
        "difficulty": "medium",
        "topic": "Immunology",
        "explanation": "Cytotoxic T cells recognize antigens on MHC class I molecules."
    },
    {
        "id": 288,
        "question": "Which bacterium causes shigellosis?",
        "options": [
            "Shigella dysenteriae",
            "Salmonella typhi",
            "Vibrio cholerae",
            "Escherichia coli"
        ],
        "answer": "Shigella dysenteriae",
        "difficulty": "medium",
        "topic": "Infectious Diseases by System",
        "explanation": "Shigella dysenteriae causes shigellosis, a severe diarrheal disease."
    },
    {
        "id": 289,
        "question": "Which microbe is used to produce penicillin?",
        "options": [
            "Penicillium chrysogenum",
            "Aspergillus niger",
            "Saccharomyces cerevisiae",
            "Streptomyces griseus"
        ],
        "answer": "Penicillium chrysogenum",
        "difficulty": "easy",
        "topic": "Environmental and Applied Microbiology",
        "explanation": "Penicillium chrysogenum produces the antibiotic penicillin."
    },
    {
        "id": 290,
        "question": "Which diagnostic test detects gas production in bacterial cultures?",
        "options": [
            "Triple sugar iron test",
            "Catalase test",
            "Oxidase test",
            "Coagulase test"
        ],
        "answer": "Triple sugar iron test",
        "difficulty": "medium",
        "topic": "Diagnostic Microbiology",
        "explanation": "The TSI test detects gas production and sugar fermentation."
    },
    {
        "id": 291,
        "question": "Which virus causes influenza?",
        "options": [
            "Influenza virus",
            "Rabies virus",
            "HIV",
            "Hepatitis C virus"
        ],
        "answer": "Influenza virus",
        "difficulty": "easy",
        "topic": "Infectious Diseases by System",
        "explanation": "Influenza virus causes seasonal flu infections."
    },
    {
        "id": 292,
        "question": "Which bacterium causes cholera?",
        "options": [
            "Vibrio cholerae",
            "Shigella dysenteriae",
            "Salmonella typhi",
            "Escherichia coli"
        ],
        "answer": "Vibrio cholerae",
        "difficulty": "easy",
        "topic": "Infectious Diseases by System",
        "explanation": "Vibrio cholerae causes cholera, a severe diarrheal disease."
    },
    {
        "id": 293,
        "question": "Which microbe is used to produce yogurt?",
        "options": [
            "Lactobacillus bulgaricus",
            "Escherichia coli",
            "Clostridium botulinum",
            "Pseudomonas aeruginosa"
        ],
        "answer": "Lactobacillus bulgaricus",
        "difficulty": "easy",
        "topic": "Environmental and Applied Microbiology",
        "explanation": "Lactobacillus bulgaricus ferments milk to produce yogurt."
    },
    {
        "id": 294,
        "question": "Which immune cell produces cytokines to coordinate immune responses?",
        "options": [
            "Helper T cell",
            "Cytotoxic T cell",
            "B cell",
            "Neutrophil"
        ],
        "answer": "Helper T cell",
        "difficulty": "medium",
        "topic": "Immunology",
        "explanation": "Helper T cells secrete cytokines to regulate immune responses."
    },
    {
        "id": 295,
        "question": "Which bacterium causes leprosy?",
        "options": [
            "Mycobacterium leprae",
            "Mycobacterium tuberculosis",
            "Corynebacterium diphtheriae",
            "Bacillus anthracis"
        ],
        "answer": "Mycobacterium leprae",
        "difficulty": "medium",
        "topic": "Infectious Diseases by System",
        "explanation": "Mycobacterium leprae causes leprosy, a chronic skin and nerve infection."
    },
    {
        "id": 296,
        "question": "Which diagnostic test differentiates Staphylococcus aureus from other staphylococci?",
        "options": [
            "Coagulase test",
            "Catalase test",
            "Oxidase test",
            "Urease test"
        ],
        "answer": "Coagulase test",
        "difficulty": "medium",
        "topic": "Diagnostic Microbiology",
        "explanation": "The coagulase test identifies Staphylococcus aureus by clot formation."
    },
    {
        "id": 297,
        "question": "Which virus causes AIDS?",
        "options": [
            "HIV",
            "Influenza virus",
            "Hepatitis B virus",
            "Rabies virus"
        ],
        "answer": "HIV",
        "difficulty": "easy",
        "topic": "Infectious Diseases by System",
        "explanation": "HIV causes AIDS by targeting the immune system."
    },
    {
        "id": 298,
        "question": "Which microbe is used in bioremediation of heavy metals?",
        "options": [
            "Geobacter sulfurreducens",
            "Lactobacillus casei",
            "Saccharomyces cerevisiae",
            "Clostridium botulinum"
        ],
        "answer": "Geobacter sulfurreducens",
        "difficulty": "hard",
        "topic": "Environmental and Applied Microbiology",
        "explanation": "Geobacter sulfurreducens reduces heavy metals in bioremediation."
    },
    {
        "id": 299,
        "question": "Which bacterium causes pertussis?",
        "options": [
            "Bordetella pertussis",
            "Streptococcus pneumoniae",
            "Haemophilus influenzae",
            "Corynebacterium diphtheriae"
        ],
        "answer": "Bordetella pertussis",
        "difficulty": "easy",
        "topic": "Infectious Diseases by System",
        "explanation": "Bordetella pertussis causes pertussis, or whooping cough."
    },
    {
        "id": 300,
        "question": "Which immune molecule inhibits viral replication in infected cells?",
        "options": [
            "Interferon",
            "Antibody",
            "Complement",
            "Cytokine"
        ],
        "answer": "Interferon",
        "difficulty": "medium",
        "topic": "Immunology",
        "explanation": "Interferons inhibit viral replication in infected cells."
    },
    {
        "id": 301,
        "question": "Which microbe is classified as an archaeon?",
        "options": [
            "Escherichia coli",
            "Methanococcus jannaschii",
            "Saccharomyces cerevisiae",
            "Plasmodium falciparum"
        ],
        "answer": "Methanococcus jannaschii",
        "difficulty": "medium",
        "topic": "Introduction to Microbiology",
        "explanation": "Methanococcus jannaschii is an archaeon, distinct from bacteria and eukaryotes."
    },
    {
        "id": 302,
        "question": "Who discovered penicillin?",
        "options": [
            "Alexander Fleming",
            "Robert Koch",
            "Louis Pasteur",
            "Antonie van Leeuwenhoek"
        ],
        "answer": "Alexander Fleming",
        "difficulty": "easy",
        "topic": "Introduction to Microbiology",
        "explanation": "Alexander Fleming discovered penicillin in 1928."
    },
    {
        "id": 303,
        "question": "Which taxonomic rank is immediately below kingdom?",
        "options": [
            "Phylum",
            "Class",
            "Order",
            "Family"
        ],
        "answer": "Phylum",
        "difficulty": "easy",
        "topic": "Introduction to Microbiology",
        "explanation": "Phylum is the taxonomic rank directly below kingdom in classification."
    },
    {
        "id": 304,
        "question": "Which microscope provides three-dimensional surface imaging?",
        "options": [
            "Transmission electron microscope",
            "Scanning electron microscope",
            "Light microscope",
            "Fluorescence microscope"
        ],
        "answer": "Scanning electron microscope",
        "difficulty": "medium",
        "topic": "Microscopy and Staining",
        "explanation": "Scanning electron microscopes produce 3D surface images of specimens."
    },
    {
        "id": 305,
        "question": "Which dye is used as a counterstain in Gram staining?",
        "options": [
            "Crystal violet",
            "Safranin",
            "Methylene blue",
            "Malachite green"
        ],
        "answer": "Safranin",
        "difficulty": "easy",
        "topic": "Microscopy and Staining",
        "explanation": "Safranin stains Gram-negative bacteria red in Gram staining."
    },
    {
        "id": 306,
        "question": "Which staining method uses carbol fuchsin to detect acid-fast bacteria?",
        "options": [
            "Ziehl-Neelsen stain",
            "Gram stain",
            "Endospore stain",
            "Flagella stain"
        ],
        "answer": "Ziehl-Neelsen stain",
        "difficulty": "medium",
        "topic": "Microscopy and Staining",
        "explanation": "Ziehl-Neelsen stain uses carbol fuchsin for acid-fast bacteria like Mycobacterium."
    },
    {
        "id": 307,
        "question": "Which bacterial structure contains lipopolysaccharides?",
        "options": [
            "Gram-positive cell wall",
            "Gram-negative outer membrane",
            "Capsule",
            "Cytoplasmic membrane"
        ],
        "answer": "Gram-negative outer membrane",
        "difficulty": "medium",
        "topic": "Microbial Cell Biology",
        "explanation": "Lipopolysaccharides are found in the outer membrane of Gram-negative bacteria."
    },
    {
        "id": 308,
        "question": "Which eukaryotic microbe has a pseudopod for movement?",
        "options": [
            "Amoeba",
            "Paramecium",
            "Euglena",
            "Yeast"
        ],
        "answer": "Amoeba",
        "difficulty": "easy",
        "topic": "Microbial Cell Biology",
        "explanation": "Amoeba uses pseudopods for locomotion and feeding."
    },
    {
        "id": 309,
        "question": "Which bacterial structure is involved in conjugation?",
        "options": [
            "Sex pilus",
            "Flagellum",
            "Capsule",
            "Endospore"
        ],
        "answer": "Sex pilus",
        "difficulty": "medium",
        "topic": "Microbial Cell Biology",
        "explanation": "Sex pili facilitate DNA transfer during bacterial conjugation."
    },
    {
        "id": 310,
        "question": "Which medium selects for fungi over bacteria?",
        "options": [
            "Sabouraud dextrose agar",
            "MacConkey agar",
            "Blood agar",
            "Mannitol salt agar"
        ],
        "answer": "Sabouraud dextrose agar",
        "difficulty": "medium",
        "topic": "Microbial Growth and Nutrition",
        "explanation": "Sabouraud dextrose agar has a low pH, favoring fungal growth."
    },
    {
        "id": 311,
        "question": "Which bacteria are obligate anaerobes?",
        "options": [
            "Clostridium tetani",
            "Escherichia coli",
            "Staphylococcus aureus",
            "Pseudomonas aeruginosa"
        ],
        "answer": "Clostridium tetani",
        "difficulty": "medium",
        "topic": "Microbial Growth and Nutrition",
        "explanation": "Clostridium tetani grows only in the absence of oxygen."
    },
    {
        "id": 312,
        "question": "Which growth phase shows exponential bacterial division?",
        "options": [
            "Lag phase",
            "Log phase",
            "Stationary phase",
            "Death phase"
        ],
        "answer": "Log phase",
        "difficulty": "easy",
        "topic": "Microbial Growth and Nutrition",
        "explanation": "The log phase is characterized by rapid, exponential bacterial growth."
    },
    {
        "id": 313,
        "question": "Which bacterial enzyme seals DNA strands during replication?",
        "options": [
            "DNA ligase",
            "Helicase",
            "Primase",
            "Topoisomerase"
        ],
        "answer": "DNA ligase",
        "difficulty": "medium",
        "topic": "Microbial Genetics",
        "explanation": "DNA ligase joins Okazaki fragments during DNA replication."
    },
    {
        "id": 314,
        "question": "Which plasmid carries antibiotic resistance genes?",
        "options": [
            "F plasmid",
            "R plasmid",
            "Col plasmid",
            "Ti plasmid"
        ],
        "answer": "R plasmid",
        "difficulty": "medium",
        "topic": "Microbial Genetics",
        "explanation": "R plasmids confer antibiotic resistance to bacteria."
    },
    {
        "id": 315,
        "question": "Which bacterial recombination process involves homologous DNA exchange?",
        "options": [
            "Transformation",
            "Transduction",
            "Conjugation",
            "Homologous recombination"
        ],
        "answer": "Homologous recombination",
        "difficulty": "hard",
        "topic": "Microbial Genetics",
        "explanation": "Homologous recombination exchanges similar DNA segments between molecules."
    },
    {
        "id": 316,
        "question": "Which viral genome requires a DNA-dependent RNA polymerase?",
        "options": [
            "dsDNA virus",
            "ssRNA virus",
            "dsRNA virus",
            "Retrovirus"
        ],
        "answer": "dsDNA virus",
        "difficulty": "medium",
        "topic": "Virology",
        "explanation": "dsDNA viruses use host DNA-dependent RNA polymerase for transcription."
    },
    {
        "id": 317,
        "question": "Which bacteriophage has a contractile tail for DNA injection?",
        "options": [
            "T4 phage",
            "Lambda phage",
            "Phi X174 phage",
            "M13 phage"
        ],
        "answer": "T4 phage",
        "difficulty": "medium",
        "topic": "Virology",
        "explanation": "T4 phage uses a contractile tail to inject DNA into host cells."
    },
    {
        "id": 318,
        "question": "Which virus is associated with nasopharyngeal carcinoma?",
        "options": [
            "Epstein-Barr virus",
            "Human papillomavirus",
            "Hepatitis C virus",
            "HIV"
        ],
        "answer": "Epstein-Barr virus",
        "difficulty": "hard",
        "topic": "Virology",
        "explanation": "Epstein-Barr virus is linked to nasopharyngeal carcinoma."
    },
    {
        "id": 319,
        "question": "Which fungal structure anchors hyphae to substrates?",
        "options": [
            "Rhizoid",
            "Sporangium",
            "Conidiophore",
            "Septum"
        ],
        "answer": "Rhizoid",
        "difficulty": "medium",
        "topic": "Mycology",
        "explanation": "Rhizoids anchor fungal hyphae to surfaces."
    },
    {
        "id": 320,
        "question": "Which fungus causes athlete’s foot?",
        "options": [
            "Trichophyton mentagrophytes",
            "Candida albicans",
            "Aspergillus flavus",
            "Mucor circinelloides"
        ],
        "answer": "Trichophyton mentagrophytes",
        "difficulty": "medium",
        "topic": "Mycology",
        "explanation": "Trichophyton mentagrophytes is a dermatophyte causing athlete’s foot."
    },
    {
        "id": 321,
        "question": "Which fungal class includes mushrooms?",
        "options": [
            "Ascomycota",
            "Basidiomycota",
            "Zygomycota",
            "Deuteromycota"
        ],
        "answer": "Basidiomycota",
        "difficulty": "medium",
        "topic": "Mycology",
        "explanation": "Basidiomycota includes fungi that produce mushrooms."
    },
    {
        "id": 322,
        "question": "Which protozoan causes African sleeping sickness?",
        "options": [
            "Trypanosoma brucei",
            "Plasmodium vivax",
            "Entamoeba histolytica",
            "Giardia lamblia"
        ],
        "answer": "Trypanosoma brucei",
        "difficulty": "medium",
        "topic": "Parasitology",
        "explanation": "Trypanosoma brucei, transmitted by tsetse flies, causes African sleeping sickness."
    },
    {
        "id": 323,
        "question": "Which helminth is known as the pinworm?",
        "options": [
            "Enterobius vermicularis",
            "Taenia saginata",
            "Schistosoma japonicum",
            "Trichinella spiralis"
        ],
        "answer": "Enterobius vermicularis",
        "difficulty": "easy",
        "topic": "Parasitology",
        "explanation": "Enterobius vermicularis is the pinworm, causing anal itching."
    },
    {
        "id": 324,
        "question": "Which ectoparasite causes scabies?",
        "options": [
            "Sarcoptes scabiei",
            "Pediculus humanus",
            "Ixodes scapularis",
            "Ctenocephalides felis"
        ],
        "answer": "Sarcoptes scabiei",
        "difficulty": "medium",
        "topic": "Parasitology",
        "explanation": "Sarcoptes scabiei is a mite that causes scabies."
    },
    {
        "id": 325,
        "question": "Which method pasteurizes milk to control microbial growth?",
        "options": [
            "Autoclaving",
            "Filtration",
            "High-temperature short-time (HTST) pasteurization",
            "Dry heat sterilization"
        ],
        "answer": "High-temperature short-time (HTST) pasteurization",
        "difficulty": "medium",
        "topic": "Control of Microorganisms",
        "explanation": "HTST pasteurization heats milk to kill pathogens without altering taste."
    },
    {
        "id": 326,
        "question": "Which chemical agent oxidizes microbial proteins?",
        "options": [
            "Hydrogen peroxide",
            "Ethanol",
            "Formaldehyde",
            "Quaternary ammonium compounds"
        ],
        "answer": "Hydrogen peroxide",
        "difficulty": "medium",
        "topic": "Control of Microorganisms",
        "explanation": "Hydrogen peroxide oxidizes microbial proteins, acting as a disinfectant."
    },
    {
        "id": 327,
        "question": "Which sterilization method is used for heat-sensitive plastics?",
        "options": [
            "Incineration",
            "Autoclaving",
            "Gamma radiation",
            "Boiling"
        ],
        "answer": "Gamma radiation",
        "difficulty": "medium",
        "topic": "Control of Microorganisms",
        "explanation": "Gamma radiation sterilizes heat-sensitive materials like plastics."
    },
    {
        "id": 328,
        "question": "Which antibiotic inhibits bacterial DNA gyrase?",
        "options": [
            "Ciprofloxacin",
            "Penicillin",
            "Tetracycline",
            "Erythromycin"
        ],
        "answer": "Ciprofloxacin",
        "difficulty": "medium",
        "topic": "Antimicrobial Agents",
        "explanation": "Ciprofloxacin, a fluoroquinolone, inhibits bacterial DNA gyrase."
    },
    {
        "id": 329,
        "question": "Which antifungal drug binds to fungal cell membranes?",
        "options": [
            "Amphotericin B",
            "Fluconazole",
            "Griseofulvin",
            "Terbinafine"
        ],
        "answer": "Amphotericin B",
        "difficulty": "medium",
        "topic": "Antimicrobial Agents",
        "explanation": "Amphotericin B binds to ergosterol in fungal membranes, causing leakage."
    },
    {
        "id": 330,
        "question": "Which resistance mechanism alters antibiotic binding sites?",
        "options": [
            "Efflux pump",
            "Target modification",
            "Enzyme inactivation",
            "Reduced permeability"
        ],
        "answer": "Target modification",
        "difficulty": "hard",
        "topic": "Antimicrobial Agents",
        "explanation": "Target modification alters antibiotic binding sites, reducing efficacy."
    },
    {
        "id": 331,
        "question": "Which microbe colonizes the human gut as normal microbiota?",
        "options": [
            "Bacteroides fragilis",
            "Clostridium botulinum",
            "Vibrio cholerae",
            "Mycobacterium tuberculosis"
        ],
        "answer": "Bacteroides fragilis",
        "difficulty": "medium",
        "topic": "Host-Microbe Interactions",
        "explanation": "Bacteroides fragilis is a common gut commensal."
    },
    {
        "id": 332,
        "question": "Which bacterial toxin increases cyclic AMP in host cells?",
        "options": [
            "Cholera toxin",
            "Diphtheria toxin",
            "Botulinum toxin",
            "Shiga toxin"
        ],
        "answer": "Cholera toxin",
        "difficulty": "medium",
        "topic": "Host-Microbe Interactions",
        "explanation": "Cholera toxin increases cAMP, causing severe diarrhea."
    },
    {
        "id": 333,
        "question": "Which virulence factor forms pores in host cell membranes?",
        "options": [
            "Hemolysin",
            "Hyaluronidase",
            "Coagulase",
            "Siderophore"
        ],
        "answer": "Hemolysin",
        "difficulty": "hard",
        "topic": "Host-Microbe Interactions",
        "explanation": "Hemolysins create pores in host cell membranes, causing lysis."
    },
    {
        "id": 334,
        "question": "Which immune cell engulfs pathogens during phagocytosis?",
        "options": [
            "Macrophage",
            "B cell",
            "T cell",
            "Natural killer cell"
        ],
        "answer": "Macrophage",
        "difficulty": "easy",
        "topic": "Immunology",
        "explanation": "Macrophages engulf and digest pathogens during phagocytosis."
    },
    {
        "id": 335,
        "question": "Which vaccine type uses purified pathogen components?",
        "options": [
            "Live attenuated vaccine",
            "Inactivated vaccine",
            "Subunit vaccine",
            "Toxoid vaccine"
        ],
        "answer": "Subunit vaccine",
        "difficulty": "medium",
        "topic": "Immunology",
        "explanation": "Subunit vaccines use purified antigens, like proteins, to stimulate immunity."
    },
    {
        "id": 336,
        "question": "Which immune response is rapid and non-specific?",
        "options": [
            "Innate immunity",
            "Adaptive immunity",
            "Humoral immunity",
            "Cellular immunity"
        ],
        "answer": "Innate immunity",
        "difficulty": "easy",
        "topic": "Immunology",
        "explanation": "Innate immunity provides immediate, non-specific defense against pathogens."
    },
    {
        "id": 337,
        "question": "Which diagnostic test detects bacterial catalase activity?",
        "options": [
            "Catalase test",
            "Oxidase test",
            "Urease test",
            "Coagulase test"
        ],
        "answer": "Catalase test",
        "difficulty": "easy",
        "topic": "Diagnostic Microbiology",
        "explanation": "The catalase test identifies bacteria that produce catalase, like Staphylococcus."
    },
    {
        "id": 338,
        "question": "Which molecular technique uses probes to visualize microbial DNA?",
        "options": [
            "Fluorescence in situ hybridization (FISH)",
            "PCR",
            "ELISA",
            "Western blot"
        ],
        "answer": "Fluorescence in situ hybridization (FISH)",
        "difficulty": "medium",
        "topic": "Diagnostic Microbiology",
        "explanation": "FISH uses fluorescent probes to detect specific microbial DNA."
    },
    {
        "id": 339,
        "question": "Which sample is used to diagnose respiratory infections like TB?",
        "options": [
            "Sputum",
            "Urine",
            "Blood",
            "Cerebrospinal fluid"
        ],
        "answer": "Sputum",
        "difficulty": "easy",
        "topic": "Diagnostic Microbiology",
        "explanation": "Sputum samples are used to diagnose respiratory infections like tuberculosis."
    },
    {
        "id": 340,
        "question": "Which bacterium causes diphtheria?",
        "options": [
            "Corynebacterium diphtheriae",
            "Streptococcus pyogenes",
            "Staphylococcus aureus",
            "Bordetella pertussis"
        ],
        "answer": "Corynebacterium diphtheriae",
        "difficulty": "medium",
        "topic": "Infectious Diseases by System",
        "explanation": "Corynebacterium diphtheriae causes diphtheria, producing a potent toxin."
    },
    {
        "id": 341,
        "question": "Which virus causes chickenpox?",
        "options": [
            "Varicella-zoster virus",
            "Herpes simplex virus",
            "Measles virus",
            "Rubella virus"
        ],
        "answer": "Varicella-zoster virus",
        "difficulty": "easy",
        "topic": "Infectious Diseases by System",
        "explanation": "Varicella-zoster virus causes chickenpox and shingles."
    },
    {
        "id": 342,
        "question": "Which bacterium causes bacterial endocarditis?",
        "options": [
            "Streptococcus viridans",
            "Escherichia coli",
            "Pseudomonas aeruginosa",
            "Clostridium difficile"
        ],
        "answer": "Streptococcus viridans",
        "difficulty": "medium",
        "topic": "Infectious Diseases by System",
        "explanation": "Streptococcus viridans is a common cause of bacterial endocarditis."
    },
    {
        "id": 343,
        "question": "Which microbe degrades pesticides in soil bioremediation?",
        "options": [
            "Pseudomonas putida",
            "Bacillus subtilis",
            "Lactobacillus casei",
            "Saccharomyces cerevisiae"
        ],
        "answer": "Pseudomonas putida",
        "difficulty": "medium",
        "topic": "Environmental and Applied Microbiology",
        "explanation": "Pseudomonas putida degrades pesticides in bioremediation processes."
    },
    {
        "id": 344,
        "question": "Which bacterium produces vitamin K in the gut?",
        "options": [
            "Escherichia coli",
            "Clostridium difficile",
            "Staphylococcus epidermidis",
            "Vibrio cholerae"
        ],
        "answer": "Escherichia coli",
        "difficulty": "medium",
        "topic": "Environmental and Applied Microbiology",
        "explanation": "E. coli in the gut synthesizes vitamin K."
    },
    {
        "id": 345,
        "question": "Which microbe is used to produce recombinant hepatitis B vaccine?",
        "options": [
            "Saccharomyces cerevisiae",
            "Escherichia coli",
            "Bacillus subtilis",
            "Clostridium tetani"
        ],
        "answer": "Saccharomyces cerevisiae",
        "difficulty": "medium",
        "topic": "Environmental and Applied Microbiology",
        "explanation": "Saccharomyces cerevisiae produces recombinant hepatitis B surface antigen."
    },
    {
        "id": 346,
        "question": "Which microbial group is studied in bacteriology?",
        "options": [
            "Viruses",
            "Bacteria",
            "Fungi",
            "Protozoa"
        ],
        "answer": "Bacteria",
        "difficulty": "easy",
        "topic": "Introduction to Microbiology",
        "explanation": "Bacteriology focuses on the study of bacteria."
    },
    {
        "id": 347,
        "question": "Which staining method uses India ink to visualize capsules?",
        "options": [
            "Negative staining",
            "Gram staining",
            "Acid-fast staining",
            "Endospore staining"
        ],
        "answer": "Negative staining",
        "difficulty": "medium",
        "topic": "Microscopy and Staining",
        "explanation": "Negative staining with India ink highlights bacterial capsules."
    },
    {
        "id": 348,
        "question": "Which microscope uses electron beams for high magnification?",
        "options": [
            "Light microscope",
            "Electron microscope",
            "Phase-contrast microscope",
            "Fluorescence microscope"
        ],
        "answer": "Electron microscope",
        "difficulty": "easy",
        "topic": "Microscopy and Staining",
        "explanation": "Electron microscopes use electron beams for high-resolution imaging."
    },
    {
        "id": 349,
        "question": "Which bacterial structure contains genetic material?",
        "options": [
            "Nucleoid",
            "Ribosome",
            "Cell wall",
            "Capsule"
        ],
        "answer": "Nucleoid",
        "difficulty": "easy",
        "topic": "Microbial Cell Biology",
        "explanation": "The nucleoid contains the bacterial chromosome."
    },
    {
        "id": 350,
        "question": "Which eukaryotic microbe causes red tides?",
        "options": [
            "Dinoflagellates",
            "Yeasts",
            "Molds",
            "Helminths"
        ],
        "answer": "Dinoflagellates",
        "difficulty": "medium",
        "topic": "Microbial Cell Biology",
        "explanation": "Dinoflagellates, a type of algae, cause red tides due to toxin production."
    },
    {
        "id": 351,
        "question": "Which bacterial structure resists phagocytosis?",
        "options": [
            "Capsule",
            "Flagellum",
            "Pilus",
            "Cell membrane"
        ],
        "answer": "Capsule",
        "difficulty": "medium",
        "topic": "Microbial Cell Biology",
        "explanation": "Capsules prevent phagocytosis by immune cells."
    },
    {
        "id": 352,
        "question": "Which medium supports the growth of Mycobacterium tuberculosis?",
        "options": [
            "Lowenstein-Jensen agar",
            "MacConkey agar",
            "Blood agar",
            "Sabouraud agar"
        ],
        "answer": "Lowenstein-Jensen agar",
        "difficulty": "medium",
        "topic": "Microbial Growth and Nutrition",
        "explanation": "Lowenstein-Jensen agar is used to culture Mycobacterium tuberculosis."
    },
    {
        "id": 353,
        "question": "Which nutrient source is essential for bacterial growth?",
        "options": [
            "Carbon",
            "Oxygen",
            "Light",
            "Heat"
        ],
        "answer": "Carbon",
        "difficulty": "easy",
        "topic": "Microbial Growth and Nutrition",
        "explanation": "Carbon is a fundamental nutrient for bacterial metabolism."
    },
    {
        "id": 354,
        "question": "Which bacterial growth phase balances cell division and death?",
        "options": [
            "Lag phase",
            "Log phase",
            "Stationary phase",
            "Death phase"
        ],
        "answer": "Stationary phase",
        "difficulty": "medium",
        "topic": "Microbial Growth and Nutrition",
        "explanation": "In the stationary phase, cell division equals cell death."
    },
    {
        "id": 355,
        "question": "Which bacterial enzyme unwinds DNA during transcription?",
        "options": [
            "RNA polymerase",
            "Helicase",
            "Topoisomerase",
            "Ligase"
        ],
        "answer": "Topoisomerase",
        "difficulty": "hard",
        "topic": "Microbial Genetics",
        "explanation": "Topoisomerase relieves DNA supercoiling during transcription."
    },
    {
        "id": 356,
        "question": "Which mutation type results in a premature stop codon?",
        "options": [
            "Silent mutation",
            "Missense mutation",
            "Nonsense mutation",
            "Frameshift mutation"
        ],
        "answer": "Nonsense mutation",
        "difficulty": "medium",
        "topic": "Microbial Genetics",
        "explanation": "Nonsense mutations create premature stop codons, truncating proteins."
    },
    {
        "id": 357,
        "question": "Which bacterial gene transfer involves naked DNA uptake?",
        "options": [
            "Transformation",
            "Conjugation",
            "Transduction",
            "Recombination"
        ],
        "answer": "Transformation",
        "difficulty": "medium",
        "topic": "Microbial Genetics",
        "explanation": "Transformation involves the uptake of free DNA from the environment."
    },
    {
        "id": 358,
        "question": "Which viral enzyme is targeted by HIV protease inhibitors?",
        "options": [
            "Protease",
            "Reverse transcriptase",
            "Integrase",
            "Neuraminidase"
        ],
        "answer": "Protease",
        "difficulty": "medium",
        "topic": "Virology",
        "explanation": "HIV protease inhibitors target the viral protease enzyme."
    },
    {
        "id": 359,
        "question": "Which virus causes mumps?",
        "options": [
            "Mumps virus",
            "Measles virus",
            "Rubella virus",
            "Varicella-zoster virus"
        ],
        "answer": "Mumps virus",
        "difficulty": "easy",
        "topic": "Virology",
        "explanation": "Mumps virus causes mumps, characterized by salivary gland swelling."
    },
    {
        "id": 360,
        "question": "Which viral agent consists of circular RNA without a protein coat?",
        "options": [
            "Prion",
            "Viroid",
            "Virus",
            "Bacteriophage"
        ],
        "answer": "Viroid",
        "difficulty": "medium",
        "topic": "Virology",
        "explanation": "Viroids are small, circular RNAs that infect plants."
    },
    {
        "id": 361,
        "question": "Which fungal structure produces sexual spores in Basidiomycetes?",
        "options": [
            "Basidium",
            "Ascus",
            "Sporangium",
            "Conidia"
        ],
        "answer": "Basidium",
        "difficulty": "medium",
        "topic": "Mycology",
        "explanation": "Basidia produce sexual spores in Basidiomycete fungi."
    },
    {
        "id": 362,
        "question": "Which fungus produces penicillin?",
        "options": [
            "Penicillium chrysogenum",
            "Aspergillus fumigatus",
            "Candida albicans",
            "Cryptococcus neoformans"
        ],
        "answer": "Penicillium chrysogenum",
        "difficulty": "medium",
        "topic": "Mycology",
        "explanation": "Penicillium chrysogenum is used to produce penicillin antibiotics."
    },
    {
        "id": 363,
        "question": "Which fungal pathogen causes valley fever?",
        "options": [
            "Coccidioides immitis",
            "Histoplasma capsulatum",
            "Blastomyces dermatitidis",
            "Trichophyton rubrum"
        ],
        "answer": "Coccidioides immitis",
        "difficulty": "hard",
        "topic": "Mycology",
        "explanation": "Coccidioides immitis causes valley fever in arid regions."
    },
    {
        "id": 364,
        "question": "Which protozoan causes dysentery?",
        "options": [
            "Entamoeba histolytica",
            "Giardia lamblia",
            "Trypanosoma cruzi",
            "Plasmodium malariae"
        ],
        "answer": "Entamoeba histolytica",
        "difficulty": "medium",
        "topic": "Parasitology",
        "explanation": "Entamoeba histolytica causes amoebic dysentery."
    },
    {
        "id": 365,
        "question": "Which helminth causes river blindness?",
        "options": [
            "Onchocerca volvulus",
            "Taenia solium",
            "Schistosoma mansoni",
            "Ascaris lumbricoides"
        ],
        "answer": "Onchocerca volvulus",
        "difficulty": "medium",
        "topic": "Parasitology",
        "explanation": "Onchocerca volvulus, transmitted by blackflies, causes river blindness."
    },
    {
        "id": 366,
        "question": "Which parasite is transmitted by kissing bugs?",
        "options": [
            "Trypanosoma cruzi",
            "Leishmania donovani",
            "Plasmodium falciparum",
            "Toxoplasma gondii"
        ],
        "answer": "Trypanosoma cruzi",
        "difficulty": "medium",
        "topic": "Parasitology",
        "explanation": "Trypanosoma cruzi, causing Chagas disease, is transmitted by kissing bugs."
    },
    {
        "id": 367,
        "question": "Which method uses moist heat for sterilization?",
        "options": [
            "Boiling",
            "Dry heat",
            "Filtration",
            "UV radiation"
        ],
        "answer": "Boiling",
        "difficulty": "easy",
        "topic": "Control of Microorganisms",
        "explanation": "Boiling uses moist heat to kill most microbes."
    },
    {
        "id": 368,
        "question": "Which chemical agent denatures microbial enzymes?",
        "options": [
            "Phenol",
            "Chlorine",
            "Iodine",
            "Alcohol"
        ],
        "answer": "Phenol",
        "difficulty": "medium",
        "topic": "Control of Microorganisms",
        "explanation": "Phenol denatures microbial enzymes, acting as a disinfectant."
    },
    {
        "id": 369,
        "question": "Which biosafety level is used for routine clinical labs?",
        "options": [
            "BSL-1",
            "BSL-2",
            "BSL-3",
            "BSL-4"
        ],
        "answer": "BSL-2",
        "difficulty": "medium",
        "topic": "Control of Microorganisms",
        "explanation": "BSL-2 is appropriate for handling moderate-risk pathogens in clinical labs."
    },
    {
        "id": 370,
        "question": "Which antibiotic inhibits folate synthesis in bacteria?",
        "options": [
            "Sulfonamide",
            "Penicillin",
            "Tetracycline",
            "Streptomycin"
        ],
        "answer": "Sulfonamide",
        "difficulty": "medium",
        "topic": "Antimicrobial Agents",
        "explanation": "Sulfonamides inhibit bacterial folate synthesis, disrupting DNA production."
    },
    {
        "id": 371,
        "question": "Which antiviral drug inhibits herpesvirus DNA polymerase?",
        "options": [
            "Acyclovir",
            "Oseltamivir",
            "Zidovudine",
            "Ribavirin"
        ],
        "answer": "Acyclovir",
        "difficulty": "medium",
        "topic": "Antimicrobial Agents",
        "explanation": "Acyclovir inhibits DNA polymerase in herpesviruses."
    },
    {
        "id": 372,
        "question": "Which test determines minimum inhibitory concentration (MIC)?",
        "options": [
            "Broth dilution test",
            "Kirby-Bauer test",
            "E-test",
            "Agar well diffusion test"
        ],
        "answer": "Broth dilution test",
        "difficulty": "hard",
        "topic": "Antimicrobial Agents",
        "explanation": "Broth dilution tests determine the MIC of antibiotics."
    },
    {
        "id": 373,
        "question": "Which microbe causes dental caries?",
        "options": [
            "Streptococcus mutans",
            "Staphylococcus epidermidis",
            "Clostridium difficile",
            "Escherichia coli"
        ],
        "answer": "Streptococcus mutans",
        "difficulty": "medium",
        "topic": "Host-Microbe Interactions",
        "explanation": "Streptococcus mutans produces acid that causes dental caries."
    },
    {
        "id": 374,
        "question": "Which bacterial toxin causes tetanus?",
        "options": [
            "Tetanospasmin",
            "Cholera toxin",
            "Diphtheria toxin",
            "Shiga toxin"
        ],
        "answer": "Tetanospasmin",
        "difficulty": "medium",
        "topic": "Host-Microbe Interactions",
        "explanation": "Tetanospasmin, produced by Clostridium tetani, causes tetanus."
    },
    {
        "id": 375,
        "question": "Which virulence factor chelates iron from the host?",
        "options": [
            "Siderophore",
            "Hemolysin",
            "Coagulase",
            "Hyaluronidase"
        ],
        "answer": "Siderophore",
        "difficulty": "hard",
        "topic": "Host-Microbe Interactions",
        "explanation": "Siderophores bind iron, aiding bacterial survival in the host."
    },
    {
        "id": 376,
        "question": "Which immune cell secretes perforins to lyse infected cells?",
        "options": [
            "Natural killer cell",
            "B cell",
            "Macrophage",
            "Helper T cell"
        ],
        "answer": "Natural killer cell",
        "difficulty": "medium",
        "topic": "Immunology",
        "explanation": "Natural killer cells use perforins to lyse infected or cancerous cells."
    },
    {
        "id": 377,
        "question": "Which vaccine type uses inactivated bacterial toxins?",
        "options": [
            "Toxoid vaccine",
            "Subunit vaccine",
            "Live attenuated vaccine",
            "Inactivated vaccine"
        ],
        "answer": "Toxoid vaccine",
        "difficulty": "easy",
        "topic": "Immunology",
        "explanation": "Toxoid vaccines use inactivated toxins to induce immunity."
    },
    {
        "id": 378,
        "question": "Which immune molecule triggers inflammation?",
        "options": [
            "Cytokine",
            "Antibody",
            "Complement",
            "Interferon"
        ],
        "answer": "Cytokine",
        "difficulty": "medium",
        "topic": "Immunology",
        "explanation": "Cytokines, like IL-1, trigger inflammatory responses."
    },
    {
        "id": 379,
        "question": "Which test identifies oxidase-positive bacteria?",
        "options": [
            "Oxidase test",
            "Catalase test",
            "Urease test",
            "Coagulase test"
        ],
        "answer": "Oxidase test",
        "difficulty": "easy",
        "topic": "Diagnostic Microbiology",
        "explanation": "The oxidase test detects cytochrome c oxidase in bacteria like Pseudomonas."
    },
    {
        "id": 380,
        "question": "Which technique amplifies DNA for pathogen identification?",
        "options": [
            "PCR",
            "ELISA",
            "Western blot",
            "Agglutination test"
        ],
        "answer": "PCR",
        "difficulty": "easy",
        "topic": "Diagnostic Microbiology",
        "explanation": "PCR amplifies DNA for rapid pathogen detection."
    },
    {
        "id": 381,
        "question": "Which sample is used to diagnose gastrointestinal infections?",
        "options": [
            "Stool",
            "Blood",
            "Urine",
            "Sputum"
        ],
        "answer": "Stool",
        "difficulty": "easy",
        "topic": "Diagnostic Microbiology",
        "explanation": "Stool samples are used to diagnose gastrointestinal infections."
    },
    {
        "id": 382,
        "question": "Which bacterium causes plague?",
        "options": [
            "Yersinia pestis",
            "Bacillus anthracis",
            "Clostridium perfringens",
            "Streptococcus pyogenes"
        ],
        "answer": "Yersinia pestis",
        "difficulty": "medium",
        "topic": "Infectious Diseases by System",
        "explanation": "Yersinia pestis, transmitted by fleas, causes plague."
    },
    {
        "id": 383,
        "question": "Which virus causes hepatitis C?",
        "options": [
            "Hepatitis C virus",
            "Hepatitis A virus",
            "Hepatitis B virus",
            "Hepatitis D virus"
        ],
        "answer": "Hepatitis C virus",
        "difficulty": "easy",
        "topic": "Infectious Diseases by System",
        "explanation": "Hepatitis C virus causes chronic liver disease."
    },
    {
        "id": 384,
        "question": "Which bacterium causes chlamydia?",
        "options": [
            "Chlamydia trachomatis",
            "Neisseria gonorrhoeae",
            "Treponema pallidum",
            "Mycoplasma genitalium"
        ],
        "answer": "Chlamydia trachomatis",
        "difficulty": "medium",
        "topic": "Infectious Diseases by System",
        "explanation": "Chlamydia trachomatis is a common cause of STIs."
    },
    {
        "id": 385,
        "question": "Which microbe produces lactic acid in yogurt fermentation?",
        "options": [
            "Streptococcus thermophilus",
            "Escherichia coli",
            "Clostridium botulinum",
            "Pseudomonas aeruginosa"
        ],
        "answer": "Streptococcus thermophilus",
        "difficulty": "medium",
        "topic": "Environmental and Applied Microbiology",
        "explanation": "Streptococcus thermophilus ferments milk to produce lactic acid in yogurt."
    },
    {
        "id": 386,
        "question": "Which microbe is used in bioremediation of uranium?",
        "options": [
            "Shewanella oneidensis",
            "Lactobacillus casei",
            "Saccharomyces cerevisiae",
            "Clostridium acetobutylicum"
        ],
        "answer": "Shewanella oneidensis",
        "difficulty": "hard",
        "topic": "Environmental and Applied Microbiology",
        "explanation": "Shewanella oneidensis reduces uranium, aiding bioremediation."
    },
    {
        "id": 387,
        "question": "Which microbe causes food poisoning from rice dishes?",
        "options": [
            "Bacillus cereus",
            "Salmonella enterica",
            "Listeria monocytogenes",
            "Vibrio parahaemolyticus"
        ],
        "answer": "Bacillus cereus",
        "difficulty": "medium",
        "topic": "Environmental and Applied Microbiology",
        "explanation": "Bacillus cereus produces toxins in improperly stored rice."
    },
    {
        "id": 388,
        "question": "Which scientist developed the rabies vaccine?",
        "options": [
            "Louis Pasteur",
            "Robert Koch",
            "Alexander Fleming",
            "Joseph Lister"
        ],
        "answer": "Louis Pasteur",
        "difficulty": "easy",
        "topic": "Introduction to Microbiology",
        "explanation": "Louis Pasteur developed the rabies vaccine in 1885."
    },
    {
        "id": 389,
        "question": "Which staining technique uses malachite green for endospores?",
        "options": [
            "Schaeffer-Fulton stain",
            "Gram stain",
            "Acid-fast stain",
            "Capsule stain"
        ],
        "answer": "Schaeffer-Fulton stain",
        "difficulty": "medium",
        "topic": "Microscopy and Staining",
        "explanation": "Schaeffer-Fulton stain uses malachite green to visualize endospores."
    },
    {
        "id": 390,
        "question": "Which bacterial structure aids in chemotaxis?",
        "options": [
            "Flagellum",
            "Pilus",
            "Capsule",
            "Cell wall"
        ],
        "answer": "Flagellum",
        "difficulty": "medium",
        "topic": "Microbial Cell Biology",
        "explanation": "Flagella enable chemotaxis by directing bacterial movement."
    },
    {
        "id": 391,
        "question": "Which pH supports acidophilic bacteria?",
        "options": [
            "pH 1-5",
            "pH 6-8",
            "pH 9-11",
            "pH 12-14"
        ],
        "answer": "pH 1-5",
        "difficulty": "medium",
        "topic": "Microbial Growth and Nutrition",
        "explanation": "Acidophilic bacteria thrive in acidic environments (pH 1-5)."
    },
    {
        "id": 392,
        "question": "Which genetic repair system responds to severe DNA damage?",
        "options": [
            "SOS repair",
            "Mismatch repair",
            "Base excision repair",
            "Nucleotide excision repair"
        ],
        "answer": "SOS repair",
        "difficulty": "hard",
        "topic": "Microbial Genetics",
        "explanation": "SOS repair is an error-prone response to severe DNA damage."
    },
    {
        "id": 393,
        "question": "Which virus causes polio?",
        "options": [
            "Poliovirus",
            "Rabies virus",
            "Influenza virus",
            "HIV"
        ],
        "answer": "Poliovirus",
        "difficulty": "easy",
        "topic": "Virology",
        "explanation": "Poliovirus causes poliomyelitis, a paralytic disease."
    },
    {
        "id": 394,
        "question": "Which fungus causes thrush?",
        "options": [
            "Candida albicans",
            "Aspergillus fumigatus",
            "Cryptococcus neoformans",
            "Trichophyton rubrum"
        ],
        "answer": "Candida albicans",
        "difficulty": "medium",
        "topic": "Mycology",
        "explanation": "Candida albicans causes thrush, an oral fungal infection."
    },
    {
        "id": 395,
        "question": "Which protozoan is transmitted by contaminated water?",
        "options": [
            "Cryptosporidium parvum",
            "Trypanosoma brucei",
            "Leishmania donovani",
            "Plasmodium vivax"
        ],
        "answer": "Cryptosporidium parvum",
        "difficulty": "medium",
        "topic": "Parasitology",
        "explanation": "Cryptosporidium parvum causes cryptosporidiosis via contaminated water."
    },
    {
        "id": 396,
        "question": "Which chemical agent is used in water purification?",
        "options": [
            "Chlorine",
            "Ethanol",
            "Formaldehyde",
            "Glutaraldehyde"
        ],
        "answer": "Chlorine",
        "difficulty": "easy",
        "topic": "Control of Microorganisms",
        "explanation": "Chlorine is widely used to disinfect water."
    },
    {
        "id": 397,
        "question": "Which antibiotic is used to treat MRSA infections?",
        "options": [
            "Linezolid",
            "Penicillin",
            "Tetracycline",
            "Erythromycin"
        ],
        "answer": "Linezolid",
        "difficulty": "medium",
        "topic": "Antimicrobial Agents",
        "explanation": "Linezolid is effective against methicillin-resistant Staphylococcus aureus."
    },
    {
        "id": 398,
        "question": "Which bacterial structure enhances adherence to mucosal surfaces?",
        "options": [
            "Fimbriae",
            "Endospore",
            "Cell wall",
            "Nucleoid"
        ],
        "answer": "Fimbriae",
        "difficulty": "medium",
        "topic": "Host-Microbe Interactions",
        "explanation": "Fimbriae aid bacterial adherence to mucosal surfaces."
    },
    {
        "id": 399,
        "question": "Which immune cell is involved in allergic responses?",
        "options": [
            "Basophil",
            "T cell",
            "B cell",
            "Macrophage"
        ],
        "answer": "Basophil",
        "difficulty": "medium",
        "topic": "Immunology",
        "explanation": "Basophils release histamine during allergic reactions."
    },
    {
        "id": 400,
        "question": "Which bacterium causes tularemia?",
        "options": [
            "Francisella tularensis",
            "Yersinia pestis",
            "Bacillus anthracis",
            "Clostridium botulinum"
        ],
        "answer": "Francisella tularensis",
        "difficulty": "medium",
        "topic": "Infectious Diseases by System",
        "explanation": "Francisella tularensis causes tularemia, a zoonotic disease."
    },
    {
        "id": 401,
        "question": "Which virus causes genital herpes?",
        "options": [
            "Herpes simplex virus",
            "Human papillomavirus",
            "HIV",
            "Hepatitis B virus"
        ],
        "answer": "Herpes simplex virus",
        "difficulty": "easy",
        "topic": "Infectious Diseases by System",
        "explanation": "Herpes simplex virus (HSV-2) causes genital herpes."
    },
    {
        "id": 402,
        "question": "Which microbe produces insulin via recombinant DNA technology?",
        "options": [
            "Escherichia coli",
            "Saccharomyces cerevisiae",
            "Clostridium botulinum",
            "Pseudomonas putida"
        ],
        "answer": "Escherichia coli",
        "difficulty": "medium",
        "topic": "Environmental and Applied Microbiology",
        "explanation": "E. coli is genetically engineered to produce human insulin."
    },
    {
        "id": 403,
        "question": "Which microbial group includes extremophiles?",
        "options": [
            "Archaea",
            "Bacteria",
            "Fungi",
            "Viruses"
        ],
        "answer": "Archaea",
        "difficulty": "medium",
        "topic": "Introduction to Microbiology",
        "explanation": "Archaea include extremophiles thriving in harsh environments."
    },
    {
        "id": 404,
        "question": "Which dye is the primary stain in Gram staining?",
        "options": [
            "Crystal violet",
            "Safranin",
            "Methylene blue",
            "Carbol fuchsin"
        ],
        "answer": "Crystal violet",
        "difficulty": "easy",
        "topic": "Microscopy and Staining",
        "explanation": "Crystal violet is the primary stain in Gram staining."
    },
    {
        "id": 405,
        "question": "Which bacterial structure stores sulfur granules?",
        "options": [
            "Inclusion bodies",
            "Ribosomes",
            "Nucleoid",
            "Cell membrane"
        ],
        "answer": "Inclusion bodies",
        "difficulty": "hard",
        "topic": "Microbial Cell Biology",
        "explanation": "Inclusion bodies store sulfur in certain bacteria like Thiobacillus."
    },
    {
        "id": 406,
        "question": "Which medium differentiates hemolytic bacteria?",
        "options": [
            "Blood agar",
            "MacConkey agar",
            "Mannitol salt agar",
            "Sabouraud agar"
        ],
        "answer": "Blood agar",
        "difficulty": "medium",
        "topic": "Microbial Growth and Nutrition",
        "explanation": "Blood agar differentiates bacteria based on hemolysis patterns."
    },
    {
        "id": 407,
        "question": "Which viral enzyme is essential for retrovirus integration?",
        "options": [
            "Integrase",
            "Reverse transcriptase",
            "Protease",
            "Neuraminidase"
        ],
        "answer": "Integrase",
        "difficulty": "medium",
        "topic": "Virology",
        "explanation": "Integrase inserts retroviral DNA into the host genome."
    },
    {
        "id": 408,
        "question": "Which fungus causes aspergillosis?",
        "options": [
            "Aspergillus fumigatus",
            "Candida albicans",
            "Cryptococcus neoformans",
            "Trichophyton rubrum"
        ],
        "answer": "Aspergillus fumigatus",
        "difficulty": "medium",
        "topic": "Mycology",
        "explanation": "Aspergillus fumigatus causes aspergillosis, a lung infection."
    },
    {
        "id": 409,
        "question": "Which helminth causes ascariasis?",
        "options": [
            "Ascaris lumbricoides",
            "Taenia saginata",
            "Schistosoma japonicum",
            "Trichinella spiralis"
        ],
        "answer": "Ascaris lumbricoides",
        "difficulty": "medium",
        "topic": "Parasitology",
        "explanation": "Ascaris lumbricoides, a roundworm, causes ascariasis."
    },
    {
        "id": 410,
        "question": "Which antibiotic inhibits bacterial protein synthesis?",
        "options": [
            "Tetracycline",
            "Penicillin",
            "Ciprofloxacin",
            "Vancomycin"
        ],
        "answer": "Tetracycline",
        "difficulty": "medium",
        "topic": "Antimicrobial Agents",
        "explanation": "Tetracycline binds to the 30S ribosomal subunit, inhibiting protein synthesis."
    },
    {
        "id": 411,
        "question": "Which bacterium causes necrotizing fasciitis?",
        "options": [
            "Streptococcus pyogenes",
            "Clostridium perfringens",
            "Bacillus anthracis",
            "Pseudomonas aeruginosa"
        ],
        "answer": "Streptococcus pyogenes",
        "difficulty": "medium",
        "topic": "Infectious Diseases by System",
        "explanation": "Streptococcus pyogenes can cause necrotizing fasciitis, a flesh-eating disease."
    },
    {
        "id": 412,
        "question": "Which microbe produces acetone in industrial fermentation?",
        "options": [
            "Clostridium acetobutylicum",
            "Escherichia coli",
            "Saccharomyces cerevisiae",
            "Lactobacillus casei"
        ],
        "answer": "Clostridium acetobutylicum",
        "difficulty": "hard",
        "topic": "Environmental and Applied Microbiology",
        "explanation": "Clostridium acetobutylicum produces acetone via fermentation."
    },
    {
        "id": 413,
        "question": "Which bacterium causes brucellosis?",
        "options": [
            "Brucella melitensis",
            "Yersinia pestis",
            "Francisella tularensis",
            "Bacillus anthracis"
        ],
        "answer": "Brucella melitensis",
        "difficulty": "medium",
        "topic": "Infectious Diseases by System",
        "explanation": "Brucella melitensis causes brucellosis, a zoonotic fever."
    },
    {
        "id": 414,
        "question": "Which diagnostic test detects acid-fast bacteria in sputum?",
        "options": [
            "Ziehl-Neelsen stain",
            "Gram stain",
            "Catalase test",
            "Oxidase test"
        ],
        "answer": "Ziehl-Neelsen stain",
        "difficulty": "medium",
        "topic": "Diagnostic Microbiology",
        "explanation": "Ziehl-Neelsen stain detects acid-fast bacteria like Mycobacterium tuberculosis."
    },
    {
        "id": 415,
        "question": "Which immune cell differentiates into plasma cells?",
        "options": [
            "B cell",
            "T cell",
            "Macrophage",
            "Neutrophil"
        ],
        "answer": "B cell", "difficulty": "easy",
        "topic": "Immunology",
        "explanation": "B cells differentiate into plasma cells to produce antibodies."
    },
    {
        "id": 416,
        "question": "Which bacterium causes salmonellosis?",
        "options": [
            "Salmonella enterica",
            "Shigella dysenteriae",
            "Vibrio cholerae",
            "Escherichia coli"
        ],
        "answer": "Salmonella enterica",
        "difficulty": "medium",
        "topic": "Infectious Diseases by System",
        "explanation": "Salmonella enterica causes salmonellosis, a foodborne illness."
    },
    {
        "id": 417,
        "question": "Which microbe is used in nitrogen fixation in soil?",
        "options": [
            "Rhizobium leguminosarum",
            "Escherichia coli",
            "Bacillus subtilis",
            "Clostridium botulinum"
        ],
        "answer": "Rhizobium leguminosarum",
        "difficulty": "medium",
        "topic": "Environmental and Applied Microbiology",
        "explanation": "Rhizobium legumin fixes nitrogen in legume root nodules."
    },
    {
        "id": 418,
        "question": "Which staining technique uses iodine as a mordant?",
        "options": [
            "Gram stain",
            "Acid-fast stain",
            "Capsule stain",
            "Endospore stain"
        ],
        "answer": "Gram stain",
        "difficulty": "easy",
        "topic": "Microscopy and Staining",
        "explanation": "Iodine acts as a mordant in Gram staining to fix crystal violet."
    },
    {
        "id": 419,
        "question": "Which bacterial structure is composed of lipoteichoic acid?",
        "options": [
            "Gram-positive cell wall",
            "Gram-negative outer membrane",
            "Capsule",
            "Cell membrane"
        ],
        "answer": "Gram-positive cell wall",
        "difficulty": "medium",
        "topic": "Microbial Cell Biology",
        "explanation": "Lipoteichoic acid is found in Gram-positive cell walls."
    },
    {
        "id": 420,
        "question": "Which growth phase shows declining bacterial viability?",
        "options": [
            "Lag phase",
            "Log phase",
            "Stationary phase",
            "Death phase"
        ],
        "answer": "Death phase",
        "difficulty": "easy",
        "topic": "Microbial Growth and Nutrition",
        "explanation": "The death phase is marked by a decline in viable bacterial cells."
    },
    {
        "id": 421,
        "question": "Which viral structure facilitates entry into host cells?",
        "options": [
            "Spike protein",
            "Capsid",
            "Nucleic acid",
            "Matrix protein"
        ],
        "answer": "Spike protein",
        "difficulty": "medium",
        "topic": "Virology",
        "explanation": "Spike proteins bind to host receptors to initiate viral entry."
    },
    {
        "id": 422,
        "question": "Which fungus is used in soy sauce fermentation?",
        "options": [
            "Aspergillus oryza",
            "Saccharomyces cerevisiae",
            "Penicillium roqueforti",
            "Rhizopus stolon"
        ],
        "answer": "Aspergillus oryza",
        "difficulty": "medium",
        "topic": "Mycology",
        "explanation": "Aspergillus oryza ferments soybeans in soy sauce production."
    },
    {
        "id": 423,
        "question": "Which protozoan causes malaria?",
        "options": [
            "Plasmodium vivax",
            "Entamoeba histolytica",
            "Giardia lamblia",
            "Trypanosoma cruzi"
        ],
        "answer": "Plasmodium vivax",
        "difficulty": "easy",
        "topic": "Parasitology",
        "explanation": "Plasmodium vivax is one of the species causing malaria."
    },
    {
        "id": 424,
        "question": "Which sterilization method uses plasma gas?",
        "options": [
            "Hydrogen peroxide plasma sterilization",
            "Autoclaving",
            "Dry heat",
            "Filtration"
        ],
        "answer": "Hydrogen peroxide plasma sterilization",
        "difficulty": "medium",
        "topic": "Control of Microorganisms",
        "explanation": "Hydrogen peroxide plasma sterilizes delicate instruments."
    },
    {
        "id": 425,
        "question": "Which antibiotic is used to treat leprosy?",
        "options": [
            "Dapsone",
            "Penicillin",
            "Tetracycline",
            "Ciprofloxacin"
        ],
        "answer": "Dapsone",
        "difficulty": "medium",
        "topic": "Antimicrobial Agents",
        "explanation": "Dapsone is a key drug in leprosy treatment."
    },
    {
        "id": 426,
        "question": "Which bacterium causes scarlet fever?",
        "options": [
            "Streptococcus pyogenes",
            "Staphylococcus aureus",
            "Streptococcus pneumoniae",
            "Corynebacterium diphtheriae"
        ],
        "answer": "Streptococcus pyogenes",
        "difficulty": "medium",
        "topic": "Infectious Diseases by System",
        "explanation": "Streptococcus pyogenes produces toxins causing scarlet fever."
    },
    {
        "id": 427,
        "question": "Which microbe produces vinegar in fermentation?",
        "options": [
            "Acetobacter aceti",
            "Saccharomyces cerevisiae",
            "Lactobacillus bulgaricus",
            "Clostridium botulinum"
        ],
        "answer": "Acetobacter aceti",
        "difficulty": "medium",
        "topic": "Environmental and Applied Microbiology",
        "explanation": "Acetobacter aceti oxidizes ethanol to acetic acid in vinegar."
    },
    {
        "id": 428,
        "question": "Which immune molecule enhances macrophage activity?",
        "options": [
            "Interferon-gamma",
            "Antibody",
            "Complement",
            "Cytotoxin"
        ],
        "answer": "Interferon-gamma",
        "difficulty": "medium",
        "topic": "Immunology",
        "explanation": "Interferon-gamma activates macrophages to enhance phagocytosis."
    },
    {
        "id": 429,
        "question": "Which diagnostic test detects hemolysis on blood agar?",
        "options": [
            "Hemolysis test",
            "Catalase test",
            "Oxidase test",
            "Urease test"
        ],
        "answer": "Hemolysis test",
        "difficulty": "medium",
        "topic": "Diagnostic Microbiology",
        "explanation": "The hemolysis test identifies bacteria based on blood agar lysis patterns."
    },
    {
        "id": 430,
        "question": "Which bacterium causes Lyme disease?",
        "options": [
            "Borrelia burgdorferi",
            "Yersinia pestis",
            "Francisella tularensis",
            "Brucella melitensis"
        ],
        "answer": "Borrelia burgdorferi",
        "difficulty": "easy",
        "topic": "Infectious Diseases by System",
        "explanation": "Borrelia burgdorferi, transmitted by ticks, causes Lyme disease."
    },
    {
        "id": 431,
        "question": "Which virus causes rubella?",
        "options": [
            "Rubella virus",
            "Measles virus",
            "Mumps virus",
            "Varicella-zoster virus"
        ],
        "answer": "Rubella virus",
        "difficulty": "easy",
        "topic": "Infectious Diseases by System",
        "explanation": "Rubella virus causes rubella, a mild rash illness."
    },
    {
        "id": 432,
        "question": "Which microbe is used to produce amylase for industrial use?",
        "options": [
            "Bacillus amyloliquefaciens",
            "Escherichia coli",
            "Saccharomyces cerevisiae",
            "Clostridium botulinum"
        ],
        "answer": "Bacillus amyloliquefaciens",
        "difficulty": "hard",
        "topic": "Environmental and Applied Microbiology",
        "explanation": "Bacillus amyloliquefaciens produces amylase for industrial applications."
    },
    {
        "id": 433,
        "question": "Which bacterial structure protects against osmotic stress?",
        "options": [
            "Cell wall",
            "Capsule",
            "Flagellum",
            "Pilus"
        ],
        "answer": "Cell wall",
        "difficulty": "easy",
        "topic": "Microbial Cell Biology",
        "explanation": "The cell wall provides structural support against osmotic stress."
    },
    {
        "id": 434,
        "question": "Which method controls microbial growth in liquids using membranes?",
        "options": [
            "Filtration",
            "Boiling",
            "Autoclaving",
            "Irradiation"
        ],
        "answer": "Filtration",
        "difficulty": "easy",
        "topic": "Control of Microorganisms",
        "explanation": "Filtration removes microbes from liquids using porous membranes."
    },
    {
        "id": 435,
        "question": "Which antibiotic resistance mechanism pumps drugs out of cells?",
        "options": [
            "Efflux pump",
            "Target modification",
            "Enzyme inactivation",
            "Reduced permeability"
        ],
        "answer": "Efflux pump",
        "difficulty": "medium",
        "topic": "Antimicrobial Agents",
        "explanation": "Efflux pumps actively expel antibiotics from bacterial cells."
    },
    {
        "id": 436,
        "question": "Which immune cell recognizes MHC class II molecules?",
        "options": [
            "Helper T cell",
            "Cytotoxic T cell",
            "B cell",
            "Natural killer cell"
        ],
        "answer": "Helper T cell",
        "difficulty": "medium",
        "topic": "Immunology",
        "explanation": "Helper T cells interact with antigens on MHC class II molecules."
    },
    {
        "id": 437,
        "question": "Which bacterium causes campylobacteriosis?",
        "options": [
            "Campylobacter jejuni",
            "Salmonella enterica",
            "Shigella dysenteriae",
            "Vibrio cholerae"
        ],
        "answer": "Campylobacter jejuni",
        "difficulty": "medium",
        "topic": "Infectious Diseases by System",
        "explanation": "Campylobacter jejuni causes campylobacteriosis, a diarrheal illness."
    },
    {
        "id": 438,
        "question": "Which microbe produces lipase for industrial use?",
        "options": [
            "Candida rugosa",
            "Escherichia coli",
            "Saccharomyces cerevisiae",
            "Clostridium botulinum"
        ],
        "answer": "Candida rugosa",
        "difficulty": "hard",
        "topic": "Environmental and Applied Microbiology",
        "explanation": "Candida rugosa produces lipase used in industrial processes."
    },
    {
        "id": 439,
        "question": "Which virus causes dengue fever?",
        "options": [
            "Dengue virus",
            "Zika virus",
            "Yellow fever virus",
            "West Nile virus"
        ],
        "answer": "Dengue virus",
        "difficulty": "easy",
        "topic": "Infectious Diseases by System",
        "explanation": "Dengue virus, transmitted by mosquitoes, causes dengue fever."
    },
    {
        "id": 440,
        "question": "Which diagnostic test detects lactose fermentation in bacteria?",
        "options": [
            "MacConkey agar test",
            "Catalase test",
            "Oxidase test",
            "Coagulase test"
        ],
        "answer": "MacConkey agar test",
        "difficulty": "medium",
        "topic": "Diagnostic Microbiology",
        "explanation": "MacConkey agar detects lactose fermentation by color change."
    },
    {
        "id": 441,
        "question": "Which bacterium causes tuberculosis?",
        "options": [
            "Mycobacterium tuberculosis",
            "Mycobacterium leprae",
            "Corynebacterium diphtheriae",
            "Streptococcus pneumoniae"
        ],
        "answer": "Mycobacterium tuberculosis",
        "difficulty": "easy",
        "topic": "Infectious Diseases by System",
        "explanation": "Mycobacterium tuberculosis causes tuberculosis, a respiratory infection."
    },
    {
        "id": 442,
        "question": "Which microbe is used to produce tetracycline?",
        "options": [
            "Streptomyces aureofaciens",
            "Escherichia coli",
            "Saccharomyces cerevisiae",
            "Clostridium botulinum"
        ],
        "answer": "Streptomyces aureofaciens",
        "difficulty": "medium",
        "topic": "Environmental and Applied Microbiology",
        "explanation": "Streptomyces aureofaciens produces the antibiotic tetracycline."
    },
    {
        "id": 443,
        "question": "Which immune molecule binds antigens with high specificity?",
        "options": [
            "Antibody",
            "Cytokine",
            "Complement",
            "Interferon"
        ],
        "answer": "Antibody",
        "difficulty": "easy",
        "topic": "Immunology",
        "explanation": "Antibodies bind antigens with high specificity."
    },
    {
        "id": 444,
        "question": "Which bacterium causes botulism?",
        "options": [
            "Clostridium botulinum",
            "Clostridium perfringens",
            "Bacillus cereus",
            "Streptococcus pyogenes"
        ],
        "answer": "Clostridium botulinum",
        "difficulty": "easy",
        "topic": "Infectious Diseases by System",
        "explanation": "Clostridium botulinum produces toxins causing botulism."
    },
    {
        "id": 445,
        "question": "Which virus causes West Nile fever?",
        "options": [
            "West Nile virus",
            "Dengue virus",
            "Zika virus",
            "Yellow fever virus"
        ],
        "answer": "West Nile virus",
        "difficulty": "medium",
        "topic": "Infectious Diseases by System",
        "explanation": "West Nile virus, transmitted by mosquitoes, causes West Nile fever."
    },
    {
        "id": 446,
        "question": "Which microbe is used to produce monoclonal antibodies?",
        "options": [
            "Hybridoma cells",
            "Escherichia coli",
            "Saccharomyces cerevisiae",
            "Clostridium botulinum"
        ],
        "answer": "Hybridoma cells",
        "difficulty": "hard",
        "topic": "Environmental and Applied Microbiology",
        "explanation": "Hybridoma cells produce monoclonal antibodies for research and therapy."
    },
    {
        "id": 447,
        "question": "Which bacterial structure is targeted by lysozyme?",
        "options": [
            "Peptidoglycan",
            "Lipopolysaccharide",
            "Teichoic acid",
            "Cell membrane"
        ],
        "answer": "Peptidoglycan",
        "difficulty": "medium",
        "topic": "Microbial Cell Biology",
        "explanation": "Lysozyme degrades peptidoglycan in bacterial cell walls."
    },
    {
        "id": 448,
        "question": "Which method controls microbial growth using high pressure?",
        "options": [
            "High-pressure processing",
            "Boiling",
            "Filtration",
            "Autoclaving"
        ],
        "answer": "High-pressure processing",
        "difficulty": "medium",
        "topic": "Control of Microorganisms",
        "explanation": "High-pressure processing inactivates microbes in food."
    },
    {
        "id": 449,
        "question": "Which antibiotic inhibits bacterial cell membrane synthesis?",
        "options": [
            "Polymyxin B",
            "Penicillin",
            "Tetracycline",
            "Ciprofloxacin"
        ],
        "answer": "Polymyxin B",
        "difficulty": "hard",
        "topic": "Antimicrobial Agents",
        "explanation": "Polymyxin B disrupts bacterial cell membranes."
    },
    {
        "id": 450,
        "question": "Which immune cell is the primary target of HIV?",
        "options": [
            "CD4+ T cell",
            "B cell",
            "Macrophage",
            "Neutrophil"
        ],
        "answer": "CD4+ T cell",
        "difficulty": "easy",
        "topic": "Immunology",
        "explanation": "HIV primarily infects CD4+ T cells, weakening immunity."
    },
    {
        "id": 451,
        "question": "Which scientist proposed the germ theory of disease?",
        "options": [
            "Louis Pasteur",
            "Antonie van Leeuwenhoek",
            "Alexander Fleming",
            "Paul Ehrlich"
        ],
        "answer": "Louis Pasteur",
        "difficulty": "easy",
        "topic": "Introduction to Microbiology",
        "explanation": "Louis Pasteur's experiments supported the germ theory, linking microbes to disease."
    },
    {
        "id": 452,
        "question": "Which microbial group lacks a cell wall?",
        "options": [
            "Mycoplasma",
            "Archaea",
            "Fungi",
            "Algae"
        ],
        "answer": "Mycoplasma",
        "difficulty": "medium",
        "topic": "Introduction to Microbiology",
        "explanation": "Mycoplasma bacteria lack a cell wall, making them pleomorphic."
    },
    {
        "id": 453,
        "question": "What is the primary source of energy for Earth's microbes?",
        "options": [
            "Sunlight",
            "Organic compounds",
            "Inorganic compounds",
            "Heat"
        ],
        "answer": "Sunlight",
        "difficulty": "easy",
        "topic": "Introduction to Microbiology",
        "explanation": "Sunlight drives photosynthesis, a key energy source for many microbes."
    },
    {
        "id": 454,
        "question": "Which microscope enhances contrast without staining?",
        "options": [
            "Phase-contrast microscope",
            "Bright-field microscope",
            "Electron microscope",
            "Dark-field microscope"
        ],
        "answer": "Phase-contrast microscope",
        "difficulty": "medium",
        "topic": "Microscopy and Staining",
        "explanation": "Phase-contrast microscopes enhance contrast for live, unstained specimens."
    },
    {
        "id": 455,
        "question": "Which stain is used to visualize fungal cell walls?",
        "options": [
            "Calcofluor white",
            "Crystal violet",
            "Safranin",
            "Malachite green"
        ],
        "answer": "Calcofluor white",
        "difficulty": "hard",
        "topic": "Microscopy and Staining",
        "explanation": "Calcofluor white binds to chitin in fungal cell walls, fluorescing under UV light."
    },
    {
        "id": 456,
        "question": "What is the purpose of decolorization in Gram staining?",
        "options": [
            "Remove excess stain",
            "Differentiate Gram-positive and Gram-negative bacteria",
            "Fix the stain to cells",
            "Enhance cell visibility"
        ],
        "answer": "Differentiate Gram-positive and Gram-negative bacteria",
        "difficulty": "medium",
        "topic": "Microscopy and Staining",
        "explanation": "Decolorization removes crystal violet from Gram-negative cells."
    },
    {
        "id": 457,
        "question": "Which bacterial structure regulates nutrient uptake?",
        "options": [
            "Cell membrane",
            "Cell wall",
            "Capsule",
            "Flagellum"
        ],
        "answer": "Cell membrane",
        "difficulty": "easy",
        "topic": "Microbial Cell Biology",
        "explanation": "The cell membrane controls nutrient transport into the cell."
    },
    {
        "id": 458,
        "question": "Which organelle is absent in prokaryotic cells?",
        "options": [
            "Nucleus",
            "Ribosome",
            "Cell membrane",
            "Cytoplasm"
        ],
        "answer": "Nucleus",
        "difficulty": "easy",
        "topic": "Microbial Cell Biology",
        "explanation": "Prokaryotes lack a membrane-bound nucleus, unlike eukaryotes."
    },
    {
        "id": 459,
        "question": "Which bacterial structure is composed of actin-like proteins?",
        "options": [
            "Cytoskeleton",
            "Cell wall",
            "Flagellum",
            "Pilus"
        ],
        "answer": "Cytoskeleton",
        "difficulty": "hard",
        "topic": "Microbial Cell Biology",
        "explanation": "Bacterial cytoskeletons contain actin-like proteins for shape and division."
    },
    {
        "id": 460,
        "question": "Which bacteria grow at temperatures above 80°C?",
        "options": [
            "Hyperthermophiles",
            "Mesophiles",
            "Psychrophiles",
            "Thermophiles"
        ],
        "answer": "Hyperthermophiles",
        "difficulty": "medium",
        "topic": "Microbial Growth and Nutrition",
        "explanation": "Hyperthermophiles thrive at temperatures above 80°C."
    },
    {
        "id": 461,
        "question": "Which medium is used to isolate Vibrio cholerae?",
        "options": [
            "Thiosulfate-citrate-bile salts-sucrose (TCBS) agar",
            "Blood agar",
            "Sabouraud agar",
            "Mannitol salt agar"
        ],
        "answer": "Thiosulfate-citrate-bile salts-sucrose (TCBS) agar",
        "difficulty": "medium",
        "topic": "Microbial Growth and Nutrition",
        "explanation": "TCBS agar selectively isolates Vibrio cholerae."
    },
    {
        "id": 462,
        "question": "Which factor limits microbial growth in high-salt environments?",
        "options": [
            "Osmotic pressure",
            "Temperature",
            "pH",
            "Oxygen availability"
        ],
        "answer": "Osmotic pressure",
        "difficulty": "medium",
        "topic": "Microbial Growth and Nutrition",
        "explanation": "High salt increases osmotic pressure, limiting microbial growth."
    },
    {
        "id": 463,
        "question": "Which bacterial enzyme initiates DNA replication?",
        "options": [
            "DNA polymerase",
            "Helicase",
            "Primase",
            "Ligase"
        ],
        "answer": "Helicase",
        "difficulty": "medium",
        "topic": "Microbial Genetics",
        "explanation": "Helicase unwinds DNA at the replication fork to start replication."
    },
    {
        "id": 464,
        "question": "Which genetic element regulates lactose metabolism in E. coli?",
        "options": [
            "Lac operon",
            "Trp operon",
            "Ara operon",
            "His operon"
        ],
        "answer": "Lac operon",
        "difficulty": "medium",
        "topic": "Microbial Genetics",
        "explanation": "The lac operon controls lactose metabolism in E. coli."
    },
    {
        "id": 465,
        "question": "Which mutation type causes a shift in the reading frame?",
        "options": [
            "Frameshift mutation",
            "Silent mutation",
            "Missense mutation",
            "Nonsense mutation"
        ],
        "answer": "Frameshift mutation",
        "difficulty": "medium",
        "topic": "Microbial Genetics",
        "explanation": "Frameshift mutations insert or delete nucleotides, altering the reading frame."
    },
    {
        "id": 466,
        "question": "Which viral family includes measles virus?",
        "options": [
            "Paramyxoviridae",
            "Orthomyxoviridae",
            "Picornaviridae",
            "Herpesviridae"
        ],
        "answer": "Paramyxoviridae",
        "difficulty": "medium",
        "topic": "Virology",
        "explanation": "Measles virus belongs to the Paramyxoviridae family."
    },
    {
        "id": 467,
        "question": "Which viral structure protects the genome?",
        "options": [
            "Capsid",
            "Envelope",
            "Spike protein",
            "Matrix protein"
        ],
        "answer": "Capsid",
        "difficulty": "easy",
        "topic": "Virology",
        "explanation": "The capsid encases and protects the viral genome."
    },
    {
        "id": 468,
        "question": "Which virus requires a helper virus to replicate?",
        "options": [
            "Hepatitis D virus",
            "Hepatitis B virus",
            "Influenza virus",
            "HIV"
        ],
        "answer": "Hepatitis D virus",
        "difficulty": "hard",
        "topic": "Virology",
        "explanation": "Hepatitis D virus depends on Hepatitis B virus for replication."
    },
    {
        "id": 469,
        "question": "Which fungal structure produces asexual spores externally?",
        "options": [
            "Conidiophore",
            "Sporangium",
            "Basidium",
            "Ascus"
        ],
        "answer": "Conidiophore",
        "difficulty": "medium",
        "topic": "Mycology",
        "explanation": "Conidiophores produce asexual conidia on their surface."
    },
    {
        "id": 470,
        "question": "Which fungus causes histoplasmosis?",
        "options": [
            "Histoplasma capsulatum",
            "Coccidioides immitis",
            "Aspergillus fumigatus",
            "Candida albicans"
        ],
        "answer": "Histoplasma capsulatum",
        "difficulty": "medium",
        "topic": "Mycology",
        "explanation": "Histoplasma capsulatum causes histoplasmosis, often in the lungs."
    },
    {
        "id": 471,
        "question": "Which fungal toxin contaminates peanuts?",
        "options": [
            "Aflatoxin",
            "Ergotamine",
            "Patulin",
            "Ochratoxin"
        ],
        "answer": "Aflatoxin",
        "difficulty": "medium",
        "topic": "Mycology",
        "explanation": "Aflatoxin, produced by Aspergillus flavus, contaminates peanuts."
    },
    {
        "id": 472,
        "question": "Which protozoan causes toxoplasmosis?",
        "options": [
            "Toxoplasma gondii",
            "Plasmodium falciparum",
            "Trypanosoma cruzi",
            "Leishmania donovani"
        ],
        "answer": "Toxoplasma gondii",
        "difficulty": "medium",
        "topic": "Parasitology",
        "explanation": "Toxoplasma gondii causes toxoplasmosis, often transmitted via cats."
    },
    {
        "id": 473,
        "question": "Which helminth causes trichinosis?",
        "options": [
            "Trichinella spiralis",
            "Ascaris lumbricoides",
            "Taenia solium",
            "Schistosoma mansoni"
        ],
        "answer": "Trichinella spiralis",
        "difficulty": "medium",
        "topic": "Parasitology",
        "explanation": "Trichinella spiralis causes trichinosis from undercooked pork."
    },
    {
        "id": 474,
        "question": "Which arthropod transmits Lyme disease?",
        "options": [
            "Ixodes scapularis",
            "Anopheles mosquito",
            "Aedes aegypti",
            "Culex pipiens"
        ],
        "answer": "Ixodes scapularis",
        "difficulty": "medium",
        "topic": "Parasitology",
        "explanation": "Ixodes scapularis, a tick, transmits Borrelia burgdorferi causing Lyme disease."
    },
    {
        "id": 475,
        "question": "Which method uses UV light to control microbial growth?",
        "options": [
            "UV irradiation",
            "Autoclaving",
            "Filtration",
            "Pasteurization"
        ],
        "answer": "UV irradiation",
        "difficulty": "easy",
        "topic": "Control of Microorganisms",
        "explanation": "UV light damages microbial DNA, reducing growth."
    },
    {
        "id": 476,
        "question": "Which chemical agent is used as a surgical scrub?",
        "options": [
            "Chlorhexidine",
            "Ethanol",
            "Hydrogen peroxide",
            "Formaldehyde"
        ],
        "answer": "Chlorhexidine",
        "difficulty": "medium",
        "topic": "Control of Microorganisms",
        "explanation": "Chlorhexidine is a common antiseptic for surgical scrubs."
    },
    {
        "id": 477,
        "question": "Which sterilization method is used for surgical instruments?",
        "options": [
            "Steam autoclaving",
            "Dry heat",
            "Filtration",
            "UV radiation"
        ],
        "answer": "Steam autoclaving",
        "difficulty": "easy",
        "topic": "Control of Microorganisms",
        "explanation": "Steam autoclaving sterilizes surgical instruments with high-pressure steam."
    },
    {
        "id": 478,
        "question": "Which antibiotic targets bacterial cell wall synthesis?",
        "options": [
            "Vancomycin",
            "Tetracycline",
            "Erythromycin",
            "Ciprofloxacin"
        ],
        "answer": "Vancomycin",
        "difficulty": "medium",
        "topic": "Antimicrobial Agents",
        "explanation": "Vancomycin inhibits peptidoglycan synthesis in bacterial cell walls."
    },
    {
        "id": 479,
        "question": "Which antifungal drug inhibits ergosterol synthesis?",
        "options": [
            "Fluconazole",
            "Amphotericin B",
            "Griseofulvin",
            "Nystatin"
        ],
        "answer": "Fluconazole",
        "difficulty": "medium",
        "topic": "Antimicrobial Agents",
        "explanation": "Fluconazole inhibits lanosterol demethylase, disrupting ergosterol synthesis."
    },
    {
        "id": 480,
        "question": "Which resistance mechanism inactivates beta-lactam antibiotics?",
        "options": [
            "Beta-lactamase production",
            "Efflux pump",
            "Target modification",
            "Reduced permeability"
        ],
        "answer": "Beta-lactamase production",
        "difficulty": "medium",
        "topic": "Antimicrobial Agents",
        "explanation": "Beta-lactamases hydrolyze beta-lactam antibiotics, rendering them ineffective."
    },
    {
        "id": 481,
        "question": "Which microbe causes skin infections in burns?",
        "options": [
            "Pseudomonas aeruginosa",
            "Streptococcus pyogenes",
            "Clostridium difficile",
            "Escherichia coli"
        ],
        "answer": "Pseudomonas aeruginosa",
        "difficulty": "medium",
        "topic": "Host-Microbe Interactions",
        "explanation": "Pseudomonas aeruginosa commonly infects burn wounds."
    },
    {
        "id": 482,
        "question": "Which bacterial toxin inhibits protein synthesis in host cells?",
        "options": [
            "Diphtheria toxin",
            "Cholera toxin",
            "Botulinum toxin",
            "Tetanospasmin"
        ],
        "answer": "Diphtheria toxin",
        "difficulty": "medium",
        "topic": "Host-Microbe Interactions",
        "explanation": "Diphtheria toxin ADP-ribosylates EF-2, halting protein synthesis."
    },
    {
        "id": 483,
        "question": "Which virulence factor degrades extracellular matrix?",
        "options": [
            "Hyaluronidase",
            "Hemolysin",
            "Siderophore",
            "Coagulase"
        ],
        "answer": "Hyaluronidase",
        "difficulty": "hard",
        "topic": "Host-Microbe Interactions",
        "explanation": "Hyaluronidase breaks down hyaluronic acid, aiding tissue invasion."
    },
    {
        "id": 484,
        "question": "Which immune cell produces antibodies?",
        "options": [
            "Plasma cell",
            "Macrophage",
            "T cell",
            "Neutrophil"
        ],
        "answer": "Plasma cell",
        "difficulty": "easy",
        "topic": "Immunology",
        "explanation": "Plasma cells, derived from B cells, secrete antibodies."
    },
    {
        "id": 485,
        "question": "Which vaccine type uses weakened pathogens?",
        "options": [
            "Live attenuated vaccine",
            "Inactivated vaccine",
            "Subunit vaccine",
            "Toxoid vaccine"
        ],
        "answer": "Live attenuated vaccine",
        "difficulty": "easy",
        "topic": "Immunology",
        "explanation": "Live attenuated vaccines use weakened pathogens to stimulate immunity."
    },
    {
        "id": 486,
        "question": "Which immune molecule opsonizes pathogens?",
        "options": [
            "Antibody",
            "Cytokine",
            "Interferon",
            "Histamine"
        ],
        "answer": "Antibody",
        "difficulty": "medium",
        "topic": "Immunology",
        "explanation": "Antibodies coat pathogens, enhancing phagocytosis via opsonization."
    },
    {
        "id": 487,
        "question": "Which test differentiates Staphylococcus aureus from other staphylococci?",
        "options": [
            "Coagulase test",
            "Catalase test",
            "Oxidase test",
            "Urease test"
        ],
        "answer": "Coagulase test",
        "difficulty": "medium",
        "topic": "Diagnostic Microbiology",
        "explanation": "The coagulase test identifies Staphylococcus aureus by its ability to clot plasma."
    },
    {
        "id": 488,
        "question": "Which technique detects viral antigens in clinical samples?",
        "options": [
            "ELISA",
            "PCR",
            "FISH",
            "Western blot"
        ],
        "answer": "ELISA",
        "difficulty": "medium",
        "topic": "Diagnostic Microbiology",
        "explanation": "ELISA detects viral antigens using enzyme-linked antibodies."
    },
    {
        "id": 489,
        "question": "Which sample is used to diagnose meningitis?",
        "options": [
            "Cerebrospinal fluid",
            "Sputum",
            "Urine",
            "Stool"
        ],
        "answer": "Cerebrospinal fluid",
        "difficulty": "easy",
        "topic": "Diagnostic Microbiology",
        "explanation": "Cerebrospinal fluid is sampled to diagnose meningitis."
    },
    {
        "id": 490,
        "question": "Which bacterium causes whooping cough?",
        "options": [
            "Bordetella pertussis",
            "Streptococcus pneumoniae",
            "Haemophilus influenzae",
            "Corynebacterium diphtheriae"
        ],
        "answer": "Bordetella pertussis",
        "difficulty": "medium",
        "topic": "Infectious Diseases by System",
        "explanation": "Bordetella pertussis causes pertussis, or whooping cough."
    },
    {
        "id": 491,
        "question": "Which virus causes influenza?",
        "options": [
            "Influenza virus",
            "Rhinovirus",
            "Coronavirus",
            "Respiratory syncytial virus"
        ],
        "answer": "Influenza virus",
        "difficulty": "easy",
        "topic": "Infectious Diseases by System",
        "explanation": "Influenza virus causes seasonal flu."
    },
    {
        "id": 492,
        "question": "Which bacterium causes gonorrhea?",
        "options": [
            "Neisseria gonorrhoeae",
            "Chlamydia trachomatis",
            "Treponema pallidum",
            "Mycoplasma genitalium"
        ],
        "answer": "Neisseria gonorrhoeae",
        "difficulty": "medium",
        "topic": "Infectious Diseases by System",
        "explanation": "Neisseria gonorrhoeae causes the STI gonorrhea."
    },
    {
        "id": 493,
        "question": "Which microbe produces ethanol in beer fermentation?",
        "options": [
            "Saccharomyces cerevisiae",
            "Lactobacillus brevis",
            "Acetobacter aceti",
            "Clostridium acetobutylicum"
        ],
        "answer": "Saccharomyces cerevisiae",
        "difficulty": "medium",
        "topic": "Environmental and Applied Microbiology",
        "explanation": "Saccharomyces cerevisiae ferments sugars to ethanol in beer production."
    },
    {
        "id": 494,
        "question": "Which bacterium degrades oil spills in bioremediation?",
        "options": [
            "Alcanivorax borkumensis",
            "Bacillus subtilis",
            "Escherichia coli",
            "Lactobacillus casei"
        ],
        "answer": "Alcanivorax borkumensis",
        "difficulty": "hard",
        "topic": "Environmental and Applied Microbiology",
        "explanation": "Alcanivorax borkumensis degrades hydrocarbons in oil spills."
    },
    {
        "id": 495,
        "question": "Which microbe is used in cheese ripening?",
        "options": [
            "Penicillium roqueforti",
            "Saccharomyces cerevisiae",
            "Clostridium botulinum",
            "Escherichia coli"
        ],
        "answer": "Penicillium roqueforti",
        "difficulty": "medium",
        "topic": "Environmental and Applied Microbiology",
        "explanation": "Penicillium roqueforti contributes to blue cheese ripening."
    },
    {
        "id": 496,
        "question": "Which microbial structure is visualized by dark-field microscopy?",
        "options": [
            "Spirochetes",
            "Endospores",
            "Capsules",
            "Ribosomes"
        ],
        "answer": "Spirochetes",
        "difficulty": "medium",
        "topic": "Microscopy and Staining",
        "explanation": "Dark-field microscopy highlights spirochetes like Treponema pallidum."
    },
    {
        "id": 497,
        "question": "Which bacterial structure stores polyhydroxybutyrate?",
        "options": [
            "Inclusion bodies",
            "Nucleoid",
            "Ribosomes",
            "Cell wall"
        ],
        "answer": "Inclusion bodies",
        "difficulty": "hard",
        "topic": "Microbial Cell Biology",
        "explanation": "Inclusion bodies store polyhydroxybutyrate as energy reserves."
    },
    {
        "id": 498,
        "question": "Which bacteria lack flagella and move by gliding?",
        "options": [
            "Myxococcus xanthus",
            "Escherichia coli",
            "Bacillus subtilis",
            "Streptococcus pneumoniae"
        ],
        "answer": "Myxococcus xanthus",
        "difficulty": "hard",
        "topic": "Microbial Cell Biology",
        "explanation": "Myxococcus xanthus moves by gliding, not flagella."
    },
    {
        "id": 499,
        "question": "Which nutrient is required for nitrogen-fixing bacteria?",
        "options": [
            "Molybdenum",
            "Calcium",
            "Phosphorus",
            "Potassium"
        ],
        "answer": "Molybdenum",
        "difficulty": "hard",
        "topic": "Microbial Growth and Nutrition",
        "explanation": "Molybdenum is a cofactor for nitrogenase in nitrogen fixation."
    },
    {
        "id": 500,
        "question": "Which medium isolates Neisseria species?",
        "options": [
            "Chocolate agar",
            "MacConkey agar",
            "Blood agar",
            "Sabouraud agar"
        ],
        "answer": "Chocolate agar",
        "difficulty": "medium",
        "topic": "Microbial Growth and Nutrition",
        "explanation": "Chocolate agar supports the growth of fastidious Neisseria species."
    },
    {
        "id": 501,
        "question": "Which bacteria grow in high CO2 conditions?",
        "options": [
            "Capnophiles",
            "Aerobes",
            "Anaerobes",
            "Microaerophiles"
        ],
        "answer": "Capnophiles",
        "difficulty": "medium",
        "topic": "Microbial Growth and Nutrition",
        "explanation": "Capnophiles, like Haemophilus influenzae, require elevated CO2."
    },
    {
        "id": 502,
        "question": "Which bacterial enzyme adds RNA primers during replication?",
        "options": [
            "Primase",
            "Helicase",
            "DNA polymerase",
            "Ligase"
        ],
        "answer": "Primase",
        "difficulty": "medium",
        "topic": "Microbial Genetics",
        "explanation": "Primase synthesizes RNA primers for DNA replication."
    },
    {
        "id": 503,
        "question": "Which genetic transfer involves bacteriophage-mediated DNA exchange?",
        "options": [
            "Transduction",
            "Transformation",
            "Conjugation",
            "Recombination"
        ],
        "answer": "Transduction",
        "difficulty": "medium",
        "topic": "Microbial Genetics",
        "explanation": "Transduction transfers DNA between bacteria via bacteriophages."
    },
    {
        "id": 504,
        "question": "Which plasmid enables tumor formation in plants?",
        "options": [
            "Ti plasmid",
            "R plasmid",
            "F plasmid",
            "Col plasmid"
        ],
        "answer": "Ti plasmid",
        "difficulty": "hard",
        "topic": "Microbial Genetics",
        "explanation": "Ti plasmids in Agrobacterium tumefaciens cause plant tumors."
    },
    {
        "id": 505,
        "question": "Which viral family includes rabies virus?",
        "options": [
            "Rhabdoviridae",
            "Paramyxoviridae",
            "Orthomyxoviridae",
            "Picornaviridae"
        ],
        "answer": "Rhabdoviridae",
        "difficulty": "medium",
        "topic": "Virology",
        "explanation": "Rabies virus belongs to the Rhabdoviridae family."
    },
    {
        "id": 506,
        "question": "Which viral enzyme cleaves sialic acid for release?",
        "options": [
            "Neuraminidase",
            "Reverse transcriptase",
            "Protease",
            "Integrase"
        ],
        "answer": "Neuraminidase",
        "difficulty": "medium",
        "topic": "Virology",
        "explanation": "Neuraminidase enables influenza virus release by cleaving sialic acid."
    },
    {
        "id": 507,
        "question": "Which virus is linked to cervical cancer?",
        "options": [
            "Human papillomavirus",
            "Epstein-Barr virus",
            "Hepatitis B virus",
            "HIV"
        ],
        "answer": "Human papillomavirus",
        "difficulty": "medium",
        "topic": "Virology",
        "explanation": "Human papillomavirus (HPV) is a major cause of cervical cancer."
    },
    {
        "id": 508,
        "question": "Which fungal class includes bread molds?",
        "options": [
            "Zygomycota",
            "Ascomycota",
            "Basidiomycota",
            "Deuteromycota"
        ],
        "answer": "Zygomycota",
        "difficulty": "medium",
        "topic": "Mycology",
        "explanation": "Zygomycota includes bread molds like Rhizopus."
    },
    {
        "id": 509,
        "question": "Which fungus causes pneumocystis pneumonia?",
        "options": [
            "Pneumocystis jirovecii",
            "Histoplasma capsulatum",
            "Coccidioides immitis",
            "Aspergillus fumigatus"
        ],
        "answer": "Pneumocystis jirovecii",
        "difficulty": "medium",
        "topic": "Mycology",
        "explanation": "Pneumocystis jirovecii causes pneumonia in immunocompromised patients."
    },
    {
        "id": 510,
        "question": "Which fungal structure forms during sexual reproduction in Ascomycetes?",
        "options": [
            "Ascus",
            "Basidium",
            "Sporangium",
            "Conidiophore"
        ],
        "answer": "Ascus",
        "difficulty": "medium",
        "topic": "Mycology",
        "explanation": "The ascus produces sexual spores in Ascomycete fungi."
    },
    {
        "id": 511,
        "question": "Which protozoan causes leishmaniasis?",
        "options": [
            "Leishmania donovani",
            "Plasmodium vivax",
            "Trypanosoma brucei",
            "Toxoplasma gondii"
        ],
        "answer": "Leishmania donovani",
        "difficulty": "medium",
        "topic": "Parasitology",
        "explanation": "Leishmania donovani causes leishmaniasis, transmitted by sandflies."
    },
    {
        "id": 512,
        "question": "Which helminth causes cysticercosis?",
        "options": [
            "Taenia solium",
            "Ascaris lumbricoides",
            "Schistosoma haematobium",
            "Trichinella spiralis"
        ],
        "answer": "Taenia solium",
        "difficulty": "medium",
        "topic": "Parasitology",
        "explanation": "Taenia solium larvae cause cysticercosis in human tissues."
    },
    {
        "id": 513,
        "question": "Which ectoparasite transmits relapsing fever?",
        "options": [
            "Ornithodoros tick",
            "Ixodes scapularis",
            "Pediculus humanus",
            "Sarcoptes scabiei"
        ],
        "answer": "Ornithodoros tick",
        "difficulty": "hard",
        "topic": "Parasitology",
        "explanation": "Ornithodoros ticks transmit Borrelia species causing relapsing fever."
    },
    {
        "id": 514,
        "question": "Which method preserves food by removing water?",
        "options": [
            "Dehydration",
            "Pasteurization",
            "Sterilization",
            "Irradiation"
        ],
        "answer": "Dehydration",
        "difficulty": "easy",
        "topic": "Control of Microorganisms",
        "explanation": "Dehydration inhibits microbial growth by removing water."
    },
    {
        "id": 515,
        "question": "Which chemical agent disrupts microbial cell membranes?",
        "options": [
            "Quaternary ammonium compounds",
            "Chlorine",
            "Hydrogen peroxide",
            "Phenol"
        ],
        "answer": "Quaternary ammonium compounds",
        "difficulty": "medium",
        "topic": "Control of Microorganisms",
        "explanation": "Quaternary ammonium compounds disrupt microbial membranes."
    },
    {
        "id": 516,
        "question": "Which biosafety level is required for Ebola virus research?",
        "options": [
            "BSL-4",
            "BSL-1",
            "BSL-2",
            "BSL-3"
        ],
        "answer": "BSL-4",
        "difficulty": "medium",
        "topic": "Control of Microorganisms",
        "explanation": "BSL-4 is required for highly dangerous pathogens like Ebola virus."
    },
    {
        "id": 517,
        "question": "Which antibiotic inhibits bacterial RNA polymerase?",
        "options": [
            "Rifampin",
            "Penicillin",
            "Tetracycline",
            "Vancomycin"
        ],
        "answer": "Rifampin",
        "difficulty": "medium",
        "topic": "Antimicrobial Agents",
        "explanation": "Rifampin binds to RNA polymerase, inhibiting transcription."
    },
    {
        "id": 518,
        "question": "Which antiviral drug inhibits influenza neuraminidase?",
        "options": [
            "Oseltamivir",
            "Acyclovir",
            "Zidovudine",
            "Ribavirin"
        ],
        "answer": "Oseltamivir",
        "difficulty": "medium",
        "topic": "Antimicrobial Agents",
        "explanation": "Oseltamivir inhibits neuraminidase, preventing influenza virus release."
    },
    {
        "id": 519,
        "question": "Which test assesses antibiotic susceptibility using disks?",
        "options": [
            "Kirby-Bauer test",
            "Broth dilution test",
            "E-test",
            "Agar well diffusion test"
        ],
        "answer": "Kirby-Bauer test",
        "difficulty": "medium",
        "topic": "Antimicrobial Agents",
        "explanation": "The Kirby-Bauer test uses antibiotic disks to measure zones of inhibition."
    },
    {
        "id": 520,
        "question": "Which microbe colonizes the skin as normal microbiota?",
        "options": [
            "Staphylococcus epidermidis",
            "Clostridium difficile",
            "Vibrio cholerae",
            "Mycobacterium tuberculosis"
        ],
        "answer": "Staphylococcus epidermidis",
        "difficulty": "medium",
        "topic": "Host-Microbe Interactions",
        "explanation": "Staphylococcus epidermidis is a common skin commensal."
    },
    {
        "id": 521,
        "question": "Which bacterial toxin causes botulism?",
        "options": [
            "Botulinum toxin",
            "Cholera toxin",
            "Diphtheria toxin",
            "Shiga toxin"
        ],
        "answer": "Botulinum toxin",
        "difficulty": "medium",
        "topic": "Host-Microbe Interactions",
        "explanation": "Botulinum toxin, produced by Clostridium botulinum, causes flaccid paralysis."
    },
    {
        "id": 522,
        "question": "Which virulence factor promotes blood clotting?",
        "options": [
            "Coagulase",
            "Hyaluronidase",
            "Siderophore",
            "Hemolysin"
        ],
        "answer": "Coagulase",
        "difficulty": "medium",
        "topic": "Host-Microbe Interactions",
        "explanation": "Coagulase promotes clotting, protecting bacteria from immune responses."
    },
    {
        "id": 523,
        "question": "Which immune cell coordinates adaptive immunity?",
        "options": [
            "Helper T cell",
            "B cell",
            "Macrophage",
            "Neutrophil"
        ],
        "answer": "Helper T cell",
        "difficulty": "medium",
        "topic": "Immunology",
        "explanation": "Helper T cells activate B cells and cytotoxic T cells in adaptive immunity."
    },
    {
        "id": 524,
        "question": "Which immune molecule activates the complement system?",
        "options": [
            "Antibody",
            "Cytokine",
            "Interferon",
            "Histamine"
        ],
        "answer": "Antibody",
        "difficulty": "medium",
        "topic": "Immunology",
        "explanation": "Antibodies, particularly IgM and IgG, activate the classical complement pathway."
    },
    {
        "id": 525,
        "question": "Which vaccine protects against diphtheria, tetanus, and pertussis?",
        "options": [
            "DTaP vaccine",
            "MMR vaccine",
            "HPV vaccine",
            "Hepatitis B vaccine"
        ],
        "answer": "DTaP vaccine",
        "difficulty": "easy",
        "topic": "Immunology",
        "explanation": "The DTaP vaccine immunizes against diphtheria, tetanus, and pertussis."
    },
    {
        "id": 526,
        "question": "Which test detects urease-producing bacteria?",
        "options": [
            "Urease test",
            "Catalase test",
            "Oxidase test",
            "Coagulase test"
        ],
        "answer": "Urease test",
        "difficulty": "easy",
        "topic": "Diagnostic Microbiology",
        "explanation": "The urease test identifies bacteria like Proteus that produce urease."
    },
    {
        "id": 527,
        "question": "Which technique sequences microbial DNA for identification?",
        "options": [
            "16S rRNA sequencing",
            "ELISA",
            "Western blot",
            "Agglutination test"
        ],
        "answer": "16S rRNA sequencing",
        "difficulty": "medium",
        "topic": "Diagnostic Microbiology",
        "explanation": "16S rRNA sequencing identifies bacteria by their ribosomal RNA genes."
    },
    {
        "id": 528,
        "question": "Which sample is used to diagnose bloodstream infections?",
        "options": [
            "Blood",
            "Sputum",
            "Urine",
            "Stool"
        ],
        "answer": "Blood",
        "difficulty": "easy",
        "topic": "Diagnostic Microbiology",
        "explanation": "Blood cultures diagnose bacteremia and sepsis."
    },
    {
        "id": 529,
        "question": "Which bacterium causes syphilis?",
        "options": [
            "Treponema pallidum",
            "Neisseria gonorrhoeae",
            "Chlamydia trachomatis",
            "Mycoplasma genitalium"
        ],
        "answer": "Treponema pallidum",
        "difficulty": "medium",
        "topic": "Infectious Diseases by System",
        "explanation": "Treponema pallidum causes syphilis, a sexually transmitted infection."
    },
    {
        "id": 530,
        "question": "Which virus causes smallpox?",
        "options": [
            "Variola virus",
            "Vaccinia virus",
            "Influenza virus",
            "Herpes simplex virus"
        ],
        "answer": "Variola virus",
        "difficulty": "medium",
        "topic": "Infectious Diseases by System",
        "explanation": "Variola virus caused smallpox, now eradicated."
    },
    {
        "id": 531,
        "question": "Which bacterium causes bacterial vaginosis?",
        "options": [
            "Gardnerella vaginalis",
            "Neisseria gonorrhoeae",
            "Chlamydia trachomatis",
            "Treponema pallidum"
        ],
        "answer": "Gardnerella vaginalis",
        "difficulty": "medium",
        "topic": "Infectious Diseases by System",
        "explanation": "Gardnerella vaginalis is a common cause of bacterial vaginosis."
    },
    {
        "id": 532,
        "question": "Which microbe produces citric acid industrially?",
        "options": [
            "Aspergillus niger",
            "Saccharomyces cerevisiae",
            "Escherichia coli",
            "Lactobacillus casei"
        ],
        "answer": "Aspergillus niger",
        "difficulty": "medium",
        "topic": "Environmental and Applied Microbiology",
        "explanation": "Aspergillus niger ferments sugars to produce citric acid."
    },
    {
        "id": 533,
        "question": "Which bacterium causes anthrax?",
        "options": [
            "Bacillus anthracis",
            "Yersinia pestis",
            "Francisella tularensis",
            "Brucella melitensis"
        ],
        "answer": "Bacillus anthracis",
        "difficulty": "easy",
        "topic": "Infectious Diseases by System",
        "explanation": "Bacillus anthracis causes anthrax, a zoonotic disease."
    },
    {
        "id": 601,
        "question": "Which microbe is used to produce recombinant erythropoietin?",
        "options": [
            "Chinese hamster ovary cells",
            "Escherichia coli",
            "Saccharomyces cerevisiae",
            "Clostridium botulinum"
        ],
        "answer": "Chinese hamster ovary cells",
        "difficulty": "hard",
        "topic": "Environmental and Applied Microbiology",
        "explanation": "Chinese hamster ovary cells are used to produce recombinant erythropoietin."
    },
    {
        "id": 602,
        "question": "Which bacterial structure is responsible for spore formation in harsh conditions?",
        "options": [
            "Endospore",
            "Capsule",
            "Flagellum",
            "Pilus"
        ],
        "answer": "Endospore",
        "difficulty": "medium",
        "topic": "Microbial Cell Biology",
        "explanation": "Endospores allow bacteria like Bacillus to survive extreme conditions."
    },
    {
        "id": 534,
        "question": "Which microscope uses fluorescent dyes to tag specific molecules?",
        "options": [
            "Fluorescence microscope",
            "Phase-contrast microscope",
            "Electron microscope",
            "Bright-field microscope"
        ],
        "answer": "Fluorescence microscope",
        "difficulty": "medium",
        "topic": "Microscopy and Staining",
        "explanation": "Fluorescence microscopes use dyes to visualize tagged molecules."
    },
    {
        "id": 535,
        "question": "Which bacterial structure is targeted by penicillin?",
        "options": [
            "Peptidoglycan",
            "Lipopolysaccharide",
            "Cell membrane",
            "Nucleoid"
        ],
        "answer": "Peptidoglycan",
        "difficulty": "medium",
        "topic": "Microbial Cell Biology",
        "explanation": "Penicillin inhibits peptidoglycan synthesis in bacterial cell walls."
    },
    {
        "id": 536,
        "question": "Which bacteria require low oxygen levels for growth?",
        "options": [
            "Microaerophiles",
            "Aerobes",
            "Anaerobes",
            "Capnophiles"
        ],
        "answer": "Microaerophiles",
        "difficulty": "medium",
        "topic": "Microbial Growth and Nutrition",
        "explanation": "Microaerophiles, like Campylobacter, need low oxygen levels."
    },
    {
        "id": 537,
        "question": "Which genetic repair system corrects mismatched bases?",
        "options": [
            "Mismatch repair",
            "SOS repair",
            "Base excision repair",
            "Nucleotide excision repair"
        ],
        "answer": "Mismatch repair",
        "difficulty": "hard",
        "topic": "Microbial Genetics",
        "explanation": "Mismatch repair corrects errors during DNA replication."
    },
    {
        "id": 538,
        "question": "Which viral family includes Ebola virus?",
        "options": [
            "Filoviridae",
            "Rhabdoviridae",
            "Paramyxoviridae",
            "Orthomyxoviridae"
        ],
        "answer": "Filoviridae",
        "difficulty": "medium",
        "topic": "Virology",
        "explanation": "Ebola virus belongs to the Filoviridae family."
    },
    {
        "id": 539,
        "question": "Which fungus causes ringworm?",
        "options": [
            "Trichophyton rubrum",
            "Candida albicans",
            "Aspergillus fumigatus",
            "Pneumocystis jirovecii"
        ],
        "answer": "Trichophyton rubrum",
        "difficulty": "medium",
        "topic": "Mycology",
        "explanation": "Trichophyton rubrum is a dermatophyte causing ringworm."
    },
    {
        "id": 540,
        "question": "Which protozoan causes giardiasis?",
        "options": [
            "Giardia lamblia",
            "Toxoplasma gondii",
            "Leishmania donovani",
            "Trypanosoma cruzi"
        ],
        "answer": "Giardia lamblia",
        "difficulty": "medium",
        "topic": "Parasitology",
        "explanation": "Giardia lamblia causes giardiasis, a diarrheal illness."
    },
    {
        "id": 541,
        "question": "Which chemical agent is used as a gas sterilant?",
        "options": [
            "Ethylene oxide",
            "Chlorine",
            "Hydrogen peroxide",
            "Phenol"
        ],
        "answer": "Ethylene oxide",
        "difficulty": "medium",
        "topic": "Control of Microorganisms",
        "explanation": "Ethylene oxide sterilizes heat-sensitive equipment."
    },
    {
        "id": 542,
        "question": "Which antibiotic is used to treat tuberculosis?",
        "options": [
            "Isoniazid",
            "Penicillin",
            "Tetracycline",
            "Erythromycin"
        ],
        "answer": "Isoniazid",
        "difficulty": "medium",
        "topic": "Antimicrobial Agents",
        "explanation": "Isoniazid is a first-line drug for tuberculosis treatment."
    },
    {
        "id": 543,
        "question": "Which bacterium causes gas gangrene?",
        "options": [
            "Clostridium perfringens",
            "Streptococcus pyogenes",
            "Bacillus anthracis",
            "Pseudomonas aeruginosa"
        ],
        "answer": "Clostridium perfringens",
        "difficulty": "medium",
        "topic": "Infectious Diseases by System",
        "explanation": "Clostridium perfringens causes gas gangrene in deep wounds."
    },
    {
        "id": 544,
        "question": "Which microbe produces protease for industrial use?",
        "options": [
            "Bacillus licheniformis",
            "Escherichia coli",
            "Saccharomyces cerevisiae",
            "Clostridium botulinum"
        ],
        "answer": "Bacillus licheniformis",
        "difficulty": "hard",
        "topic": "Environmental and Applied Microbiology",
        "explanation": "Bacillus licheniformis produces proteases for detergents."
    },
    {
        "id": 545,
        "question": "Which immune molecule inhibits viral replication?",
        "options": [
            "Interferon",
            "Antibody",
            "Complement",
            "Cytokine"
        ],
        "answer": "Interferon",
        "difficulty": "medium",
        "topic": "Immunology",
        "explanation": "Interferons inhibit viral replication in infected cells."
    },
    {
        "id": 546,
        "question": "Which diagnostic test detects mannitol fermentation?",
        "options": [
            "Mannitol salt agar test",
            "Catalase test",
            "Oxidase test",
            "Urease test"
        ],
        "answer": "Mannitol salt agar test",
        "difficulty": "medium",
        "topic": "Diagnostic Microbiology",
        "explanation": "Mannitol salt agar detects mannitol fermentation by Staphylococcus aureus."
    },
    {
        "id": 547,
        "question": "Which bacterium causes leptospirosis?",
        "options": [
            "Leptospira interrogans",
            "Borrelia burgdorferi",
            "Treponema pallidum",
            "Yersinia pestis"
        ],
        "answer": "Leptospira interrogans",
        "difficulty": "medium",
        "topic": "Infectious Diseases by System",
        "explanation": "Leptospira interrogans causes leptospirosis, a zoonotic disease."
    },
    {
        "id": 548,
        "question": "Which virus causes Zika fever?",
        "options": [
            "Zika virus",
            "Dengue virus",
            "West Nile virus",
            "Yellow fever virus"
        ],
        "answer": "Zika virus",
        "difficulty": "easy",
        "topic": "Infectious Diseases by System",
        "explanation": "Zika virus, transmitted by mosquitoes, causes Zika fever."
    },
    {
        "id": 549,
        "question": "Which microbe produces glutamic acid for food industry?",
        "options": [
            "Corynebacterium glutamicum",
            "Escherichia coli",
            "Saccharomyces cerevisiae",
            "Clostridium botulinum"
        ],
        "answer": "Corynebacterium glutamicum",
        "difficulty": "hard",
        "topic": "Environmental and Applied Microbiology",
        "explanation": "Corynebacterium glutamicum produces glutamic acid for MSG."
    },
    {
        "id": 550,
        "question": "Which bacterial structure is visualized by flagella staining?",
        "options": [
            "Flagella",
            "Capsule",
            "Endospore",
            "Nucleoid"
        ],
        "answer": "Flagella",
        "difficulty": "easy",
        "topic": "Microscopy and Staining",
        "explanation": "Flagella staining enhances visibility of bacterial flagella."
    },
    {
        "id": 551,
        "question": "Which bacterial structure is involved in twitching motility?",
        "options": [
            "Type IV pili",
            "Flagella",
            "Capsule",
            "Cell wall"
        ],
        "answer": "Type IV pili",
        "difficulty": "hard",
        "topic": "Microbial Cell Biology",
        "explanation": "Type IV pili enable twitching motility in bacteria like Pseudomonas."
    },
    {
        "id": 552,
        "question": "Which bacteria grow at refrigerator temperatures?",
        "options": [
            "Psychrophiles",
            "Mesophiles",
            "Thermophiles",
            "Hyperthermophiles"
        ],
        "answer": "Psychrophiles",
        "difficulty": "medium",
        "topic": "Microbial Growth and Nutrition",
        "explanation": "Psychrophiles thrive at low temperatures, like in refrigerators."
    },
    {
        "id": 553,
        "question": "Which genetic repair system removes damaged DNA bases?",
        "options": [
            "Base excision repair",
            "Mismatch repair",
            "SOS repair",
            "Homologous recombination"
        ],
        "answer": "Base excision repair",
        "difficulty": "hard",
        "topic": "Microbial Genetics",
        "explanation": "Base excision repair removes damaged or modified DNA bases."
    },
    {
        "id": 554,
        "question": "Which viral family includes HIV?",
        "options": [
            "Retroviridae",
            "Filoviridae",
            "Rhabdoviridae",
            "Paramyxoviridae"
        ],
        "answer": "Retroviridae",
        "difficulty": "medium",
        "topic": "Virology",
        "explanation": "HIV belongs to the Retroviridae family, known for reverse transcription."
    },
    {
        "id": 555,
        "question": "Which fungus causes blastomycosis?",
        "options": [
            "Blastomyces dermatitidis",
            "Histoplasma capsulatum",
            "Coccidioides immitis",
            "Pneumocystis jirovecii"
        ],
        "answer": "Blastomyces dermatitidis",
        "difficulty": "medium",
        "topic": "Mycology",
        "explanation": "Blastomyces dermatitidis causes blastomycosis, a lung infection."
    },
    {
        "id": 556,
        "question": "Which protozoan causes Chagas disease?",
        "options": [
            "Trypanosoma cruzi",
            "Leishmania donovani",
            "Plasmodium falciparum",
            "Giardia lamblia"
        ],
        "answer": "Trypanosoma cruzi",
        "difficulty": "medium",
        "topic": "Parasitology",
        "explanation": "Trypanosoma cruzi causes Chagas disease, transmitted by kissing bugs."
    },
    {
        "id": 557,
        "question": "Which chemical agent is used in endoscope disinfection?",
        "options": [
            "Glutaraldehyde",
            "Chlorine",
            "Ethanol",
            "Phenol"
        ],
        "answer": "Glutaraldehyde",
        "difficulty": "medium",
        "topic": "Control of Microorganisms",
        "explanation": "Glutaraldehyde is used for high-level disinfection of endoscopes."
    },
    {
        "id": 558,
        "question": "Which antibiotic is used to treat fungal infections?",
        "options": [
            "Ketoconazole",
            "Penicillin",
            "Tetracycline",
            "Ciprofloxacin"
        ],
        "answer": "Ketoconazole",
        "difficulty": "medium",
        "topic": "Antimicrobial Agents",
        "explanation": "Ketoconazole is an antifungal drug targeting fungal cell membranes."
    },
    {
        "id": 559,
        "question": "Which bacterium causes rheumatic fever?",
        "options": [
            "Streptococcus pyogenes",
            "Staphylococcus aureus",
            "Streptococcus pneumoniae",
            "Corynebacterium diphtheriae"
        ],
        "answer": "Streptococcus pyogenes",
        "difficulty": "medium",
        "topic": "Infectious Diseases by System",
        "explanation": "Streptococcus pyogenes can trigger rheumatic fever post-infection."
    },
    {
        "id": 560,
        "question": "Which microbe produces xanthan gum for food industry?",
        "options": [
            "Xanthomonas campestris",
            "Escherichia coli",
            "Saccharomyces cerevisiae",
            "Clostridium botulinum"
        ],
        "answer": "Xanthomonas campestris",
        "difficulty": "hard",
        "topic": "Environmental and Applied Microbiology",
        "explanation": "Xanthomonas campestris produces xanthan gum as a food thickener."
    },
    {
        "id": 561,
        "question": "Which immune cell is involved in antigen processing?",
        "options": [
            "Dendritic cell",
            "B cell",
            "T cell",
            "Neutrophil"
        ],
        "answer": "Dendritic cell",
        "difficulty": "medium",
        "topic": "Immunology",
        "explanation": "Dendritic cells process and present antigens to T cells."
    },
    {
        "id": 562,
        "question": "Which diagnostic test detects citrate utilization?",
        "options": [
            "Simmons citrate test",
            "Catalase test",
            "Oxidase test",
            "Urease test"
        ],
        "answer": "Simmons citrate test",
        "difficulty": "medium",
        "topic": "Diagnostic Microbiology",
        "explanation": "Simmons citrate test identifies bacteria that utilize citrate as a carbon source."
    },
    {
        "id": 563,
        "question": "Which bacterium causes Q fever?",
        "options": [
            "Coxiella burnetii",
            "Borrelia burgdorferi",
            "Leptospira interrogans",
            "Yersinia pestis"
        ],
        "answer": "Coxiella burnetii",
        "difficulty": "medium",
        "topic": "Infectious Diseases by System",
        "explanation": "Coxiella burnetii causes Q fever, a zoonotic disease."
    },
    {
        "id": 564,
        "question": "Which virus causes yellow fever?",
        "options": [
            "Yellow fever virus",
            "Zika virus",
            "Dengue virus",
            "West Nile virus"
        ],
        "answer": "Yellow fever virus",
        "difficulty": "easy",
        "topic": "Infectious Diseases by System",
        "explanation": "Yellow fever virus, transmitted by mosquitoes, causes yellow fever."
    },
    {
        "id": 565,
        "question": "Which microbe produces cellulase for biofuel production?",
        "options": [
            "Trichoderma reesei",
            "Escherichia coli",
            "Saccharomyces cerevisiae",
            "Clostridium botulinum"
        ],
        "answer": "Trichoderma reesei",
        "difficulty": "hard",
        "topic": "Environmental and Applied Microbiology",
        "explanation": "Trichoderma reesei produces cellulase for biomass degradation."
    },
    {
        "id": 566,
        "question": "Which stain differentiates Mycobacterium leprae?",
        "options": [
            "Fite-Faraco stain",
            "Gram stain",
            "Schaeffer-Fulton stain",
            "Capsule stain"
        ],
        "answer": "Fite-Faraco stain",
        "difficulty": "hard",
        "topic": "Microscopy and Staining",
        "explanation": "Fite-Faraco stain is used to detect acid-fast Mycobacterium leprae."
    },
    {
        "id": 567,
        "question": "Which bacterial structure contains magnetosomes?",
        "options": [
            "Inclusion bodies",
            "Nucleoid",
            "Ribosomes",
            "Cell membrane"
        ],
        "answer": "Inclusion bodies",
        "difficulty": "hard",
        "topic": "Microbial Cell Biology",
        "explanation": "Magnetosomes in inclusion bodies aid magnetotactic bacteria navigation."
    },
    {
        "id": 568,
        "question": "Which bacteria form biofilms in medical devices?",
        "options": [
            "Staphylococcus epidermidis",
            "Escherichia coli",
            "Clostridium difficile",
            "Vibrio cholerae"
        ],
        "answer": "Staphylococcus epidermidis",
        "difficulty": "medium",
        "topic": "Microbial Cell Biology",
        "explanation": "Staphylococcus epidermidis forms biofilms on catheters and implants."
    },
    {
        "id": 569,
        "question": "Which medium isolates Salmonella species?",
        "options": [
            "Hektoen enteric agar",
            "Chocolate agar",
            "Blood agar",
            "Sabouraud agar"
        ],
        "answer": "Hektoen enteric agar",
        "difficulty": "medium",
        "topic": "Microbial Growth and Nutrition",
        "explanation": "Hektoen enteric agar selectively isolates Salmonella and Shigella."
    },
    {
        "id": 570,
        "question": "Which viral enzyme synthesizes DNA from RNA?",
        "options": [
            "Reverse transcriptase",
            "Neuraminidase",
            "Protease",
            "Integrase"
        ],
        "answer": "Reverse transcriptase",
        "difficulty": "medium",
        "topic": "Virology",
        "explanation": "Reverse transcriptase is used by retroviruses like HIV."
    },
    {
        "id": 571,
        "question": "Which fungus is used in tempeh production?",
        "options": [
            "Rhizopus oligosporus",
            "Aspergillus oryzae",
            "Penicillium roqueforti",
            "Saccharomyces cerevisiae"
        ],
        "answer": "Rhizopus oligosporus",
        "difficulty": "medium",
        "topic": "Mycology",
        "explanation": "Rhizopus oligosporus ferments soybeans in tempeh production."
    },
    {
        "id": 572,
        "question": "Which helminth causes schistosomiasis?",
        "options": [
            "Schistosoma mansoni",
            "Taenia solium",
            "Ascaris lumbricoides",
            "Trichinella spiralis"
        ],
        "answer": "Schistosoma mansoni",
        "difficulty": "medium",
        "topic": "Parasitology",
        "explanation": "Schistosoma mansoni causes schistosomiasis, a parasitic disease."
    },
    {
        "id": 573,
        "question": "Which method uses cold temperatures to control microbial growth?",
        "options": [
            "Refrigeration",
            "Boiling",
            "Autoclaving",
            "Irradiation"
        ],
        "answer": "Refrigeration",
        "difficulty": "easy",
        "topic": "Control of Microorganisms",
        "explanation": "Refrigeration slows microbial growth by lowering temperatures."
    },
    {
        "id": 574,
        "question": "Which antibiotic is used to treat chlamydia infections?",
        "options": [
            "Azithromycin",
            "Penicillin",
            "Tetracycline",
            "Ciprofloxacin"
        ],
        "answer": "Azithromycin",
        "difficulty": "medium",
        "topic": "Antimicrobial Agents",
        "explanation": "Azithromycin is effective against Chlamydia trachomatis."
    },
    {
        "id": 575,
        "question": "Which bacterium causes shigellosis?",
        "options": [
            "Shigella dysenteriae",
            "Salmonella enterica",
            "Vibrio cholerae",
            "Escherichia coli"
        ],
        "answer": "Shigella dysenteriae",
        "difficulty": "medium",
        "topic": "Infectious Diseases by System",
        "explanation": "Shigella dysenteriae causes shigellosis, a severe diarrheal disease."
    },
    {
        "id": 576,
        "question": "Which microbe produces pectinase for juice clarification?",
        "options": [
            "Aspergillus niger",
            "Escherichia coli",
            "Saccharomyces cerevisiae",
            "Clostridium botulinum"
        ],
        "answer": "Aspergillus niger",
        "difficulty": "hard",
        "topic": "Environmental and Applied Microbiology",
        "explanation": "Aspergillus niger produces pectinase for fruit juice clarification."
    },
    {
        "id": 577,
        "question": "Which immune cell releases histamine during inflammation?",
        "options": [
            "Mast cell",
            "B cell",
            "T cell",
            "Macrophage"
        ],
        "answer": "Mast cell",
        "difficulty": "medium",
        "topic": "Immunology",
        "explanation": "Mast cells release histamine to promote inflammation."
    },
    {
        "id": 578,
        "question": "Which diagnostic test detects indole production?",
        "options": [
            "Indole test",
            "Catalase test",
            "Oxidase test",
            "Urease test"
        ],
        "answer": "Indole test",
        "difficulty": "medium",
        "topic": "Diagnostic Microbiology",
        "explanation": "The indole test identifies bacteria like E. coli that produce indole."
    },
    {
        "id": 579,
        "question": "Which bacterium causes melioidosis?",
        "options": [
            "Burkholderia pseudomallei",
            "Yersinia pestis",
            "Francisella tularensis",
            "Coxiella burnetii"
        ],
        "answer": "Burkholderia pseudomallei",
        "difficulty": "hard",
        "topic": "Infectious Diseases by System",
        "explanation": "Burkholderia pseudomallei causes melioidosis."
    },
    {
        "id": 580,
        "question": "Which virus causes hand, foot, and mouth disease?",
        "options": [
            "Coxsackievirus",
            "Zika virus",
            "Yellow fever virus",
            "West Nile virus"
        ],
        "answer": "Coxsackievirus",
        "difficulty": "medium",
        "topic": "Infectious Diseases by System",
        "explanation": "Coxsackievirus causes hand, foot, and mouth disease."
    },
    {
        "id": 581,
        "question": "Which microbe produces erythritol as a sweetener?",
        "options": [
            "Moniliella pollinis",
            "Escherichia coli",
            "Saccharomyces cerevisiae",
            "Clostridium botulinum"
        ],
        "answer": "Moniliella pollinis",
        "difficulty": "hard",
        "topic": "Environmental and Applied Microbiology",
        "explanation": "Moniliella pollinis ferments glucose to produce erythritol."
    },
    {
        "id": 582,
        "question": "Which bacterial structure is used for attachment to surfaces?",
        "options": [
            "Fimbriae",
            "Flagellum",
            "Endospore",
            "Nucleoid"
        ],
        "answer": "Fimbriae",
        "difficulty": "easy",
        "topic": "Microbial Cell Biology",
        "explanation": "Fimbriae help bacteria adhere to surfaces."
    },
    {
        "id": 583,
        "question": "Which method controls microbial growth in air?",
        "options": [
            "HEPA filtration",
            "Boiling",
            "Autoclaving",
            "Pasteurization"
        ],
        "answer": "HEPA filtration",
        "difficulty": "medium",
        "topic": "Control of Microorganisms",
        "explanation": "HEPA filters remove microbes from air in cleanrooms."
    },
    {
        "id": 584,
        "question": "Which antibiotic resistance mechanism reduces drug uptake?",
        "options": [
            "Reduced permeability",
            "Efflux pump",
            "Target modification",
            "Enzyme inactivation"
        ],
        "answer": "Reduced permeability",
        "difficulty": "medium",
        "topic": "Antimicrobial Agents",
        "explanation": "Reduced permeability limits antibiotic entry by altering cell wall or membrane."
    },
    {
        "id": 585,
        "question": "Which immune cell recognizes MHC class I molecules?",
        "options": [
            "Cytotoxic T cell",
            "Helper T cell",
            "B cell",
            "Macrophage"
        ],
        "answer": "Cytotoxic T cell",
        "difficulty": "medium",
        "topic": "Immunology",
        "explanation": "Cytotoxic T cells recognize antigens on MHC class I molecules."
    },
    {
        "id": 586,
        "question": "Which bacterium causes cholera?",
        "options": [
            "Vibrio cholerae",
            "Salmonella enterica",
            "Shigella dysenteriae",
            "Campylobacter jejuni"
        ],
        "answer": "Vibrio cholerae",
        "difficulty": "easy",
        "topic": "Infectious Diseases by System",
        "explanation": "Vibrio cholerae causes cholera, a severe diarrheal disease."
    },
    {
        "id": 587,
        "question": "Which microbe produces lovastatin for cholesterol reduction?",
        "options": [
            "Aspergillus terreus",
            "Escherichia coli",
            "Saccharomyces cerevisiae",
            "Clostridium botulinum"
        ],
        "answer": "Aspergillus terreus",
        "difficulty": "hard",
        "topic": "Environmental and Applied Microbiology",
        "explanation": "Aspergillus terreus produces lovastatin, a cholesterol-lowering drug."
    },
    {
        "id": 588,
        "question": "Which virus causes mononucleosis?",
        "options": [
            "Epstein-Barr virus",
            "Cytomegalovirus",
            "Herpes simplex virus",
            "Varicella-zoster virus"
        ],
        "answer": "Epstein-Barr virus",
        "difficulty": "medium",
        "topic": "Infectious Diseases by System",
        "explanation": "Epstein-Barr virus causes infectious mononucleosis."
    },
    {
        "id": 589,
        "question": "Which diagnostic test detects hydrogen sulfide production?",
        "options": [
            "Triple sugar iron test",
            "Catalase test",
            "Oxidase test",
            "Urease test"
        ],
        "answer": "Triple sugar iron test",
        "difficulty": "medium",
        "topic": "Diagnostic Microbiology",
        "explanation": "The triple sugar iron test detects H₂S production by bacteria like Salmonella."
    },
    {
        "id": 590,
        "question": "Which bacterium causes meningitis in neonates?",
        "options": [
            "Streptococcus agalactiae",
            "Streptococcus pneumoniae",
            "Neisseria meningitidis",
            "Haemophilus influenzae"
        ],
        "answer": "Streptococcus agalactiae",
        "difficulty": "medium",
        "topic": "Infectious Diseases by System",
        "explanation": "Streptococcus agalactiae (Group B Streptococcus) causes neonatal meningitis."
    },
    {
        "id": 591,
        "question": "Which microbe produces nisin as a food preservative?",
        "options": [
            "Lactococcus lactis",
            "Escherichia coli",
            "Saccharomyces cerevisiae",
            "Clostridium botulinum"
        ],
        "answer": "Lactococcus lactis",
        "difficulty": "hard",
        "topic": "Environmental and Applied Microbiology",
        "explanation": "Lactococcus lactis produces nisin, a natural antimicrobial preservative."
    },
    {
        "id": 592,
        "question": "Which bacterial structure is involved in phototaxis?",
        "options": [
            "Photoreceptor",
            "Flagellum",
            "Capsule",
            "Pilus"
        ],
        "answer": "Photoreceptor",
        "difficulty": "hard",
        "topic": "Microbial Cell Biology",
        "explanation": "Photoreceptors in bacteria like cyanobacteria detect light for phototaxis."
    },
    {
        "id": 593,
        "question": "Which method uses ionizing radiation for sterilization?",
        "options": [
            "Gamma irradiation",
            "Boiling",
            "Filtration",
            "Pasteurization"
        ],
        "answer": "Gamma irradiation",
        "difficulty": "medium",
        "topic": "Control of Microorganisms",
        "explanation": "Gamma irradiation sterilizes by damaging microbial DNA."
    },
    {
        "id": 594,
        "question": "Which antibiotic inhibits bacterial 50S ribosomal subunit?",
        "options": [
            "Erythromycin",
            "Penicillin",
            "Ciprofloxacin",
            "Vancomycin"
        ],
        "answer": "Erythromycin",
        "difficulty": "medium",
        "topic": "Antimicrobial Agents",
        "explanation": "Erythromycin binds to the 50S ribosomal subunit, inhibiting protein synthesis."
    },
    {
        "id": 595,
        "question": "Which immune cell is critical for innate immunity?",
        "options": [
            "Neutrophil",
            "B cell",
            "T cell",
            "Plasma cell"
        ],
        "answer": "Neutrophil",
        "difficulty": "medium",
        "topic": "Immunology",
        "explanation": "Neutrophils are key phagocytes in innate immune responses."
    },
    {
        "id": 596,
        "question": "Which bacterium causes brucellosis?",
        "options": [
            "Brucella abortus",
            "Yersinia pestis",
            "Francisella tularensis",
            "Coxiella burnetii"
        ],
        "answer": "Brucella abortus",
        "difficulty": "medium",
        "topic": "Infectious Diseases by System",
        "explanation": "Brucella abortus causes brucellosis, a zoonotic fever."
    },
    {
        "id": 597,
        "question": "Which microbe produces pullulan for food packaging?",
        "options": [
            "Aureobasidium pullulans",
            "Escherichia coli",
            "Saccharomyces cerevisiae",
            "Clostridium botulinum"
        ],
        "answer": "Aureobasidium pullulans",
        "difficulty": "hard",
        "topic": "Environmental and Applied Microbiology",
        "explanation": "Aureobasidium pullulans produces pullulan, a biodegradable polysaccharide."
    },
    {
        "id": 598,
        "question": "Which virus causes severe acute respiratory syndrome (SARS)?",
        "options": [
            "SARS-CoV",
            "Influenza virus",
            "Rhinovirus",
            "Respiratory syncytial virus"
        ],
        "answer": "SARS-CoV",
        "difficulty": "medium",
        "topic": "Infectious Diseases by System",
        "explanation": "SARS-CoV causes severe acute respiratory syndrome."
    },
    {
        "id": 599,
        "question": "Which diagnostic test detects coagulase-negative staphylococci?",
        "options": [
            "Novobiocin sensitivity test",
            "Catalase test",
            "Oxidase test",
            "Urease test"
        ],
        "answer": "Novobiocin sensitivity test",
        "difficulty": "hard",
        "topic": "Diagnostic Microbiology",
        "explanation": "Novobiocin sensitivity differentiates coagulase-negative staphylococci."
    },
    {
        "id": 600,
        "question": "Which bacterium causes cat-scratch disease?",
        "options": [
            "Bartonella henselae",
            "Borrelia burgdorferi",
            "Leptospira interrogans",
            "Yersinia pestis"
        ],
        "answer": "Bartonella henselae",
        "difficulty": "medium",
        "topic": "Infectious Diseases by System",
        "explanation": "Bartonella henselae causes cat-scratch disease via cat scratches."
    }
]
