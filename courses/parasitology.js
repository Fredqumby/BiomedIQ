const QUESTIONS = [
    {
        "id": 1,
        "question": "What is the primary focus of parasitology?",
        "options": [
            "Study of viruses and their hosts",
            "Study of parasites and their interactions with hosts",
            "Study of bacterial infections",
            "Study of fungal diseases"
        ],
        "answer": "Study of parasites and their interactions with hosts",
        "difficulty": "medium",
        "topic": "Introduction to Parasitology",
        "explanation": "Parasitology is the scientific study of parasites, their hosts, and the relationships between them, encompassing protozoa, helminths, and arthropods."
    },
    {
        "id": 2,
        "question": "Why is parasitology significant in public health?",
        "options": [
            "It focuses on non-communicable diseases",
            "It addresses diseases caused by parasites that impact global health",
            "It studies only plant-based pathogens",
            "It is unrelated to human health"
        ],
        "answer": "It addresses diseases caused by parasites that impact global health",
        "difficulty": "medium",
        "topic": "Introduction to Parasitology",
        "explanation": "Parasitology is critical in public health due to the global burden of parasitic diseases like malaria, schistosomiasis, and filariasis, which affect millions."
    },
    {
        "id": 3,
        "question": "Which of the following is a type of parasite?",
        "options": [
            "Bacteria",
            "Protozoa",
            "Viruses",
            "Prions"
        ],
        "answer": "Protozoa",
        "difficulty": "medium",
        "topic": "Classification of Parasites",
        "explanation": "Protozoa are single-celled eukaryotic parasites, classified alongside helminths and arthropods in parasitology, unlike bacteria, viruses, or prions."
    },
    {
        "id": 4,
        "question": "What is a definitive host in a parasite's life cycle?",
        "options": [
            "A host where the parasite undergoes larval development",
            "A host where the parasite reaches sexual maturity",
            "A host that temporarily harbors the parasite",
            "A host that does not support parasite development"
        ],
        "answer": "A host where the parasite reaches sexual maturity",
        "difficulty": "medium",
        "topic": "Types of Hosts",
        "explanation": "The definitive host is where the parasite reaches sexual maturity and reproduces, such as humans for Schistosoma species."
    },
    {
        "id": 5,
        "question": "Which type of parasitism involves parasites living inside the host's body?",
        "options": [
            "Ectoparasitism",
            "Endoparasitism",
            "Facultative parasitism",
            "Obligate parasitism"
        ],
        "answer": "Endoparasitism",
        "difficulty": "medium",
        "topic": "Types of Parasitism",
        "explanation": "Endoparasites, like Entamoeba histolytica, live inside the host's body, while ectoparasites live on the surface."
    },
    {
        "id": 6,
        "question": "What distinguishes an obligate parasite from a facultative parasite?",
        "options": [
            "Obligate parasites can live independently of a host",
            "Facultative parasites require multiple hosts",
            "Obligate parasites depend entirely on a host for survival",
            "Facultative parasites are always ectoparasites"
        ],
        "answer": "Obligate parasites depend entirely on a host for survival",
        "difficulty": "medium",
        "topic": "Types of Parasitism",
        "explanation": "Obligate parasites, like Plasmodium, cannot survive without a host, whereas facultative parasites can live independently."
    },
    {
        "id": 7,
        "question": "What is a reservoir host?",
        "options": [
            "A host that supports larval stages only",
            "A host that maintains the parasite in nature and serves as a source of infection",
            "A host where the parasite dies",
            "A host that is immune to the parasite"
        ],
        "answer": "A host that maintains the parasite in nature and serves as a source of infection",
        "difficulty": "medium",
        "topic": "Types of Hosts",
        "explanation": "Reservoir hosts, such as animals for Toxoplasma gondii, maintain the parasite and act as a source of infection for other hosts."
    },
    {
        "id": 8,
        "question": "Which type of life cycle involves only one host?",
        "options": [
            "Indirect life cycle",
            "Direct life cycle",
            "Complex life cycle",
            "Zoonotic life cycle"
        ],
        "answer": "Direct life cycle",
        "difficulty": "medium",
        "topic": "Life Cycle Patterns",
        "explanation": "A direct life cycle involves one host, as seen in Enterobius vermicularis, while indirect cycles require multiple hosts."
    },
    {
        "id": 9,
        "question": "What is a paratenic host?",
        "options": [
            "A host where the parasite reproduces sexually",
            "A host that harbors the parasite without further development",
            "A host that is essential for parasite survival",
            "A host that eliminates the parasite"
        ],
        "answer": "A host that harbors the parasite without further development",
        "difficulty": "medium",
        "topic": "Types of Hosts",
        "explanation": "Paratenic hosts harbor parasites without development, acting as transport hosts, such as fish for Diphyllobothrium latum."
    },
    {
        "id": 10,
        "question": "How do host–parasite relationships primarily affect the host?",
        "options": [
            "They always benefit the host",
            "They cause harm or disease to the host",
            "They have no impact on the host",
            "They only affect the parasite"
        ],
        "answer": "They cause harm or disease to the host",
        "difficulty": "medium",
        "topic": "Host–Parasite Relationships",
        "explanation": "Host–parasite relationships typically harm the host through disease, nutrient depletion, or tissue damage."
    },

    // II. Protozoan Parasites (Questions 11–30)
    // A. Amoebae
    {
        "id": 11,
        "question": "What is the causative agent of amoebic dysentery?",
        "options": [
            "Entamoeba coli",
            "Entamoeba histolytica",
            "Endolimax nana",
            "Iodamoeba bütschlii"
        ],
        "answer": "Entamoeba histolytica",
        "difficulty": "medium",
        "topic": "Amoebae",
        "explanation": "Entamoeba histolytica causes amoebic dysentery, characterized by bloody diarrhea, unlike non-pathogenic amoebae like Entamoeba coli."
    },
    {
        "id": 12,
        "question": "How is Entamoeba histolytica primarily diagnosed?",
        "options": [
            "Blood culture",
            "Stool microscopy for cysts or trophozoites",
            "X-ray imaging",
            "Skin biopsy"
        ],
        "answer": "Stool microscopy for cysts or trophozoites",
        "difficulty": "medium",
        "topic": "Amoebae",
        "explanation": "Stool microscopy identifies Entamoeba histolytica cysts or trophozoites, often with serology or PCR for confirmation."
    },
    {
        "id": 13,
        "question": "Which of the following is a non-pathogenic amoeba?",
        "options": [
            "Entamoeba histolytica",
            "Entamoeba coli",
            "Plasmodium falciparum",
            "Trypanosoma cruzi"
        ],
        "answer": "Entamoeba coli",
        "difficulty": "medium",
        "topic": "Amoebae",
        "explanation": "Entamoeba coli is a non-pathogenic amoeba commonly found in the human gut, unlike the pathogenic Entamoeba histolytica."
    },

    // B. Flagellates
    {
        "id": 14,
        "question": "What is the primary mode of transmission for Giardia lamblia?",
        "options": [
            "Mosquito bite",
            "Fecal-oral route",
            "Direct skin contact",
            "Airborne droplets"
        ],
        "answer": "Fecal-oral route",
        "difficulty": "medium",
        "topic": "Flagellates",
        "explanation": "Giardia lamblia is transmitted via the fecal-oral route, often through contaminated water or food, causing giardiasis."
    },
    {
        "id": 15,
        "question": "Which parasite causes trichomoniasis, a sexually transmitted infection?",
        "options": [
            "Giardia lamblia",
            "Trichomonas vaginalis",
            "Leishmania donovani",
            "Trypanosoma brucei"
        ],
        "answer": "Trichomonas vaginalis",
        "difficulty": "medium",
        "topic": "Flagellates",
        "explanation": "Trichomonas vaginalis is a flagellate protozoan that causes trichomoniasis, primarily transmitted through sexual contact."
    },
    {
        "id": 16,
        "question": "Which form of leishmaniasis affects internal organs?",
        "options": [
            "Cutaneous leishmaniasis",
            "Mucocutaneous leishmaniasis",
            "Visceral leishmaniasis",
            "Localized leishmaniasis"
        ],
        "answer": "Visceral leishmaniasis",
        "difficulty": "medium",
        "topic": "Flagellates",
        "explanation": "Visceral leishmaniasis, caused by Leishmania donovani, affects internal organs like the spleen and liver."
    },
    {
        "id": 17,
        "question": "What is the vector for Trypanosoma brucei?",
        "options": [
            "Anopheles mosquito",
            "Tsetse fly",
            "Sandfly",
            "Reduviid bug"
        ],
        "answer": "Tsetse fly",
        "difficulty": "medium",
        "topic": "Flagellates",
        "explanation": "Trypanosoma brucei, causing African sleeping sickness, is transmitted by the tsetse fly (Glossina species)."
    },
    {
        "id": 18,
        "question": "Which parasite causes Chagas disease?",
        "options": [
            "Trypanosoma brucei",
            "Trypanosoma cruzi",
            "Leishmania major",
            "Plasmodium vivax"
        ],
        "answer": "Trypanosoma cruzi",
        "difficulty": "medium",
        "topic": "Flagellates",
        "explanation": "Trypanosoma cruzi, transmitted by reduviid bugs, causes Chagas disease, affecting the heart and digestive system."
    },

    // C. Ciliates
    {
        "id": 19,
        "question": "Which ciliate protozoan is known to cause intestinal infections in humans?",
        "options": [
            "Balantidium coli",
            "Paramecium caudatum",
            "Vorticella species",
            "Stentor coeruleus"
        ],
        "answer": "Balantidium coli",
        "difficulty": "medium",
        "topic": "Ciliates",
        "explanation": "Balantidium coli is the only ciliate known to cause balantidiasis, a rare intestinal infection in humans."
    },

    // D. Sporozoans (Apicomplexa)
    {
        "id": 20,
        "question": "Which Plasmodium species is most associated with severe malaria?",
        "options": [
            "Plasmodium vivax",
            "Plasmodium falciparum",
            "Plasmodium ovale",
            "Plasmodium malariae"
        ],
        "answer": "Plasmodium falciparum",
        "difficulty": "medium",
        "topic": "Sporozoans",
        "explanation": "Plasmodium falciparum is the most virulent malaria parasite, causing severe complications like cerebral malaria."
    },
    {
        "id": 21,
        "question": "What is the primary vector for Plasmodium species?",
        "options": [
            "Tsetse fly",
            "Anopheles mosquito",
            "Reduviid bug",
            "Sandfly"
        ],
        "answer": "Anopheles mosquito",
        "difficulty": "medium",
        "topic": "Sporozoans",
        "explanation": "Plasmodium species, responsible for malaria, are transmitted by female Anopheles mosquitoes."
    },
    {
        "id": 22,
        "question": "Which diagnostic method is commonly used for malaria?",
        "options": [
            "Stool culture",
            "Giemsa-stained blood smear",
            "Skin swab",
            "Urine analysis"
        ],
        "answer": "Giemsa-stained blood smear",
        "difficulty": "medium",
        "topic": "Sporozoans",
        "explanation": "Giemsa-stained blood smears are used to visualize Plasmodium parasites in red blood cells under a microscope."
    },
    {
        "id": 23,
        "question": "What is the primary source of Toxoplasma gondii infection in humans?",
        "options": [
            "Mosquito bites",
            "Contaminated food or water",
            "Direct skin contact",
            "Airborne transmission"
        ],
        "answer": "Contaminated food or water",
        "difficulty": "medium",
        "topic": "Sporozoans",
        "explanation": "Toxoplasma gondii is commonly transmitted through contaminated food, water, or contact with infected cat feces."
    },
    {
        "id": 24,
        "question": "Which parasite causes cryptosporidiosis, a diarrheal disease?",
        "options": [
            "Cryptosporidium parvum",
            "Toxoplasma gondii",
            "Isospora belli",
            "Cyclospora cayetanensis"
        ],
        "answer": "Cryptosporidium parvum",
        "difficulty": "medium",
        "topic": "Sporozoans",
        "explanation": "Cryptosporidium parvum causes cryptosporidiosis, often through contaminated water, leading to severe diarrhea."
    },

    // III. Helminthic Parasites (Questions 25–60)
    // A. Nematodes (Roundworms)
    {
        "id": 25,
        "question": "Which nematode is the most common cause of intestinal obstruction?",
        "options": [
            "Ascaris lumbricoides",
            "Enterobius vermicularis",
            "Trichuris trichiura",
            "Strongyloides stercoralis"
        ],
        "answer": "Ascaris lumbricoides",
        "difficulty": "medium",
        "topic": "Nematodes",
        "explanation": "Ascaris lumbricoides, a large intestinal roundworm, can cause intestinal obstruction due to heavy worm burden."
    },
    {
        "id": 26,
        "question": "What is the primary symptom of Enterobius vermicularis infection?",
        "options": [
            "Abdominal pain",
            "Anal itching",
            "Fever",
            "Weight loss"
        ],
        "answer": "Anal itching",
        "difficulty": "medium",
        "topic": "Nematodes",
        "explanation": "Enterobius vermicularis, the pinworm, causes anal itching, especially at night, due to egg-laying by female worms."
    },
    {
        "id": 27,
        "question": "Which diagnostic method is used for Trichuris trichiura?",
        "options": [
            "Blood smear",
            "Stool microscopy for eggs",
            "Skin biopsy",
            "Serology"
        ],
        "answer": "Stool microscopy for eggs",
        "difficulty": "medium",
        "topic": "Nematodes",
        "explanation": "Trichuris trichiura, the whipworm, is diagnosed by identifying characteristic barrel-shaped eggs in stool samples."
    },
    {
        "id": 28,
        "question": "Which hookworm species is most prevalent in the Americas?",
        "options": [
            "Ancylostoma duodenale",
            "Necator americanus",
            "Strongyloides stercoralis",
            "Trichinella spiralis"
        ],
        "answer": "Necator americanus",
        "difficulty": "medium",
        "topic": "Nematodes",
        "explanation": "Necator americanus is the predominant hookworm in the Americas, causing anemia through blood loss."
    },
    {
        "id": 29,
        "question": "What is a key feature of Strongyloides stercoralis infection?",
        "options": [
            "Auto-infection",
            "Sexual transmission",
            "Airborne spread",
            "Chronic fever"
        ],
        "answer": "Auto-infection",
        "difficulty": "medium",
        "topic": "Nematodes",
        "explanation": "Strongyloides stercoralis can cause auto-infection, where larvae reinfect the host, leading to chronic infections."
    },
    {
        "id": 30,
        "question": "Which nematode causes trichinosis?",
        "options": [
            "Trichinella spiralis",
            "Wuchereria bancrofti",
            "Onchocerca volvulus",
            "Dracunculus medinensis"
        ],
        "answer": "Trichinella spiralis",
        "difficulty": "medium",
        "topic": "Nematodes",
        "explanation": "Trichinella spiralis causes trichinosis, contracted by consuming undercooked pork containing encysted larvae."
    },
    {
        "id": 31,
        "question": "What is the primary vector for Wuchereria bancrofti?",
        "options": [
            "Anopheles mosquito",
            "Culex mosquito",
            "Tsetse fly",
            "Sandfly"
        ],
        "answer": "Culex mosquito",
        "difficulty": "medium",
        "topic": "Nematodes",
        "explanation": "Wuchereria bancrofti, causing lymphatic filariasis, is transmitted by Culex mosquitoes."
    },
    {
        "id": 32,
        "question": "Which parasite causes river blindness?",
        "options": [
            "Loa loa",
            "Onchocerca volvulus",
            "Wuchereria bancrofti",
            "Dracunculus medinensis"
        ],
        "answer": "Onchocerca volvulus",
        "difficulty": "medium",
        "topic": "Nematodes",
        "explanation": "Onchocerca volvulus, transmitted by blackflies, causes river blindness (onchocerciasis)."
    },
    {
        "id": 33,
        "question": "How is Dracunculus medinensis primarily transmitted?",
        "options": [
            "Mosquito bite",
            "Ingestion of contaminated water",
            "Skin penetration",
            "Inhalation"
        ],
        "answer": "Ingestion of contaminated water",
        "difficulty": "medium",
        "topic": "Nematodes",
        "explanation": "Dracunculus medinensis, the Guinea worm, is transmitted through drinking water contaminated with infected copepods."
    },

    // B. Cestodes (Tapeworms)
    {
        "id": 34,
        "question": "Which cestode is associated with beef consumption?",
        "options": [
            "Taenia solium",
            "Taenia saginata",
            "Diphyllobothrium latum",
            "Echinococcus granulosus"
        ],
        "answer": "Taenia saginata",
        "difficulty": "medium",
        "topic": "Cestodes",
        "explanation": "Taenia saginata, the beef tapeworm, is contracted by consuming undercooked beef containing cysticerci."
    },
    {
        "id": 35,
        "question": "What is a major complication of Taenia solium infection?",
        "options": [
            "Cysticercosis",
            "Hydatid disease",
            "Lymphatic filariasis",
            "River blindness"
        ],
        "answer": "Cysticercosis",
        "difficulty": "medium",
        "topic": "Cestodes",
        "explanation": "Taenia solium can cause cysticercosis when larvae form cysts in tissues, particularly the brain, leading to neurocysticercosis."
    },
    {
        "id": 36,
        "question": "Which cestode is associated with fish consumption?",
        "options": [
            "Taenia saginata",
            "Diphyllobothrium latum",
            "Echinococcus granulosus",
            "Hymenolepis nana"
        ],
        "answer": "Diphyllobothrium latum",
        "difficulty": "medium",
        "topic": "Cestodes",
        "explanation": "Diphyllobothrium latum, the fish tapeworm, is contracted by eating undercooked freshwater fish."
    },
    {
        "id": 37,
        "question": "What is the causative agent of hydatid disease?",
        "options": [
            "Echinococcus granulosus",
            "Taenia solium",
            "Hymenolepis nana",
            "Diphyllobothrium latum"
        ],
        "answer": "Echinococcus granulosus",
        "difficulty": "medium",
        "topic": "Cestodes",
        "explanation": "Echinococcus granulosus causes hydatid disease, forming cysts in organs like the liver and lungs."
    },
    {
        "id": 38,
        "question": "Which cestode has a direct life cycle not requiring an intermediate host?",
        "options": [
            "Taenia saginata",
            "Hymenolepis nana",
            "Echinococcus granulosus",
            "Diphyllobothrium latum"
        ],
        "answer": "Hymenolepis nana",
        "difficulty": "medium",
        "topic": "Cestodes",
        "explanation": "Hymenolepis nana, the dwarf tapeworm, has a direct life cycle, with humans serving as both definitive and intermediate hosts."
    },

    // C. Trematodes (Flukes)
    {
        "id": 39,
        "question": "Which trematode causes schistosomiasis?",
        "options": [
            "Fasciola hepatica",
            "Schistosoma mansoni",
            "Clonorchis sinensis",
            "Paragonimus westermani"
        ],
        "answer": "Schistosoma mansoni",
        "difficulty": "medium",
        "topic": "Trematodes",
        "explanation": "Schistosoma mansoni, a blood fluke, causes intestinal schistosomiasis, transmitted through contact with contaminated water."
    },
    {
        "id": 40,
        "question": "Which fluke is associated with liver infections?",
        "options": [
            "Schistosoma haematobium",
            "Fasciola hepatica",
            "Fasciolopsis buski",
            "Paragonimus westermani"
        ],
        "answer": "Fasciola hepatica",
        "difficulty": "medium",
        "topic": "Trematodes",
        "explanation": "Fasciola hepatica, a liver fluke, infects the liver, often contracted by consuming contaminated watercress."
    },
    {
        "id": 41,
        "question": "Which trematode is primarily associated with lung infections?",
        "options": [
            "Schistosoma japonicum",
            "Clonorchis sinensis",
            "Paragonimus westermani",
            "Fasciolopsis buski"
        ],
        "answer": "Paragonimus westermani",
        "difficulty": "medium",
        "topic": "Trematodes",
        "explanation": "Paragonimus westermani, the lung fluke, causes paragonimiasis, often contracted by eating undercooked crabs or crayfish."
    },

    // IV. Arthropod Vectors and Ectoparasites (Questions 42–50)
    {
        "id": 42,
        "question": "Which arthropod is the primary vector for Leishmania species?",
        "options": [
            "Anopheles mosquito",
            "Sandfly",
            "Tsetse fly",
            "Reduviid bug"
        ],
        "answer": "Sandfly",
        "difficulty": "medium",
        "topic": "Arthropod Vectors",
        "explanation": "Sandflies, particularly Phlebotomus species, are the primary vectors for Leishmania, transmitting leishmaniasis."
    },
    {
        "id": 43,
        "question": "Which mosquito genus transmits dengue and Zika viruses?",
        "options": [
            "Anopheles",
            "Aedes",
            "Culex",
            "Glossina"
        ],
        "answer": "Aedes",
        "difficulty": "medium",
        "topic": "Arthropod Vectors",
        "explanation": "Aedes mosquitoes, particularly Aedes aegypti, transmit dengue, Zika, and chikungunya viruses."
    },
    {
        "id": 44,
        "question": "What is the vector for Trypanosoma cruzi?",
        "options": [
            "Tsetse fly",
            "Reduviid bug",
            "Sandfly",
            "Anopheles mosquito"
        ],
        "answer": "Reduviid bug",
        "difficulty": "medium",
        "topic": "Arthropod Vectors",
        "explanation": "Reduviid bugs, also known as kissing bugs, transmit Trypanosoma cruzi, causing Chagas disease."
    },
    {
        "id": 45,
        "question": "Which ectoparasite causes scabies?",
        "options": [
            "Fleas",
            "Lice",
            "Mites",
            "Ticks"
        ],
        "answer": "Mites",
        "difficulty": "medium",
        "topic": "Ectoparasites",
        "explanation": "Scabies is caused by the mite Sarcoptes scabiei, which burrows into the skin, causing intense itching."
    },

    // V. Pathogenesis and Host Responses (Questions 46–55)
    {
        "id": 46,
        "question": "How do some parasites evade the host immune system?",
        "options": [
            "By increasing host inflammation",
            "By antigenic variation",
            "By causing immediate host death",
            "By producing antibiotics"
        ],
        "answer": "By antigenic variation",
        "difficulty": "medium",
        "topic": "Pathogenesis",
        "explanation": "Parasites like Trypanosoma brucei use antigenic variation to change surface proteins, evading the host immune response."
    },
    {
        "id": 47,
        "question": "What is a common consequence of chronic parasitic infections?",
        "options": [
            "Acute respiratory failure",
            "Nutritional deficiencies",
            "Immediate recovery",
            "Enhanced immunity"
        ],
        "answer": "Nutritional deficiencies",
        "difficulty": "medium",
        "topic": "Pathogenesis",
        "explanation": "Chronic parasitic infections, like those caused by hookworms, often lead to nutritional deficiencies due to nutrient competition."
    },
    {
        "id": 48,
        "question": "Which complication is associated with neurocysticercosis?",
        "options": [
            "Liver failure",
            "Seizures",
            "Heart block",
            "Kidney damage"
        ],
        "answer": "Seizures",
        "difficulty": "medium",
        "topic": "Pathogenesis",
        "explanation": "Neurocysticercosis, caused by Taenia solium larvae in the brain, commonly leads to seizures."
    },

    // VI. Diagnostic Parasitology (Questions 49–60)
    {
        "id": 49,
        "question": "Which sample is most commonly used to diagnose intestinal parasites?",
        "options": [
            "Blood",
            "Stool",
            "Urine",
            "Sputum"
        ],
        "answer": "Stool",
        "difficulty": "medium",
        "topic": "Diagnostic Parasitology",
        "explanation": "Stool samples are used to detect intestinal parasites like Ascaris lumbricoides and Giardia lamblia via microscopy."
    },
    {
        "id": 50,
        "question": "Which staining technique is used for malaria diagnosis?",
        "options": [
            "Trichrome",
            "Giemsa",
            "Gram stain",
            "Ziehl-Neelsen"
        ],
        "answer": "Giemsa",
        "difficulty": "medium",
        "topic": "Diagnostic Parasitology",
        "explanation": "Giemsa staining is used to visualize Plasmodium parasites in blood smears for malaria diagnosis."
    },
    {
        "id": 51,
        "question": "What is a common molecular method for parasite detection?",
        "options": [
            "ELISA",
            "PCR",
            "Western blot",
            "Flow cytometry"
        ],
        "answer": "PCR",
        "difficulty": "medium",
        "topic": "Diagnostic Parasitology",
        "explanation": "Polymerase chain reaction (PCR) is used for sensitive and specific detection of parasite DNA, such as in toxoplasmosis."
    },
    {
        "id": 52,
        "question": "What does an RDT detect in parasitic infections?",
        "options": [
            "Parasite antigens",
            "Host antibodies",
            "Parasite eggs",
            "Host DNA"
        ],
        "answer": "Parasite antigens",
        "difficulty": "medium",
        "topic": "Diagnostic Parasitology",
        "explanation": "Rapid diagnostic tests (RDTs) detect parasite antigens, such as in malaria, for quick diagnosis."
    },

    // VII. Treatment and Control (Questions 53–65)
    {
        "id": 53,
        "question": "Which drug is commonly used to treat Entamoeba histolytica infections?",
        "options": [
            "Metronidazole",
            "Chloroquine",
            "Ivermectin",
            "Praziquantel"
        ],
        "answer": "Metronidazole",
        "difficulty": "medium",
        "topic": "Treatment",
        "explanation": "Metronidazole is the primary drug for treating amoebic dysentery caused by Entamoeba histolytica."
    },
    {
        "id": 54,
        "question": "Which drug is used to treat schistosomiasis?",
        "options": [
            "Albendazole",
            "Praziquantel",
            "Chloroquine",
            "Metronidazole"
        ],
        "answer": "Praziquantel",
        "difficulty": "medium",
        "topic": "Treatment",
        "explanation": "Praziquantel is the drug of choice for schistosomiasis, effective against all Schistosoma species."
    },
    {
        "id": 55,
        "question": "What is a key strategy for controlling mosquito-borne parasites?",
        "options": [
            "Antibiotic distribution",
            "Insecticide-treated bed nets",
            "Water chlorination",
            "Surgical intervention"
        ],
        "answer": "Insecticide-treated bed nets",
        "difficulty": "medium",
        "topic": "Control",
        "explanation": "Insecticide-treated bed nets are a key strategy for controlling mosquito-borne diseases like malaria."
    },
    {
        "id": 56,
        "question": "Which drug is used to treat lymphatic filariasis?",
        "options": [
            "Ivermectin",
            "Chloroquine",
            "Metronidazole",
            "Praziquantel"
        ],
        "answer": "Ivermectin",
        "difficulty": "medium",
        "topic": "Treatment",
        "explanation": "Ivermectin, often combined with albendazole, is used to treat lymphatic filariasis caused by Wuchereria bancrofti."
    },

    // VIII. Epidemiology and Public Health Aspects (Questions 57–70)
    {
        "id": 57,
        "question": "Which parasitic disease is classified as a neglected tropical disease (NTD)?",
        "options": [
            "Influenza",
            "Schistosomiasis",
            "Tuberculosis",
            "HIV/AIDS"
        ],
        "answer": "Schistosomiasis",
        "difficulty": "medium",
        "topic": "Epidemiology",
        "explanation": "Schistosomiasis is classified as a neglected tropical disease due to its high burden in low-resource settings."
    },
    {
        "id": 58,
        "question": "Which parasite is associated with zoonotic transmission?",
        "options": [
            "Toxoplasma gondii",
            "Enterobius vermicularis",
            "Trichomonas vaginalis",
            "Plasmodium vivax"
        ],
        "answer": "Toxoplasma gondii",
        "difficulty": "medium",
        "topic": "Epidemiology",
        "explanation": "Toxoplasma gondii is zoonotic, transmitted from animals (e.g., cats) to humans via contaminated food or water."
    },
    {
        "id": 59,
        "question": "Which parasite is primarily soil-transmitted?",
        "options": [
            "Ascaris lumbricoides",
            "Plasmodium falciparum",
            "Trypanosoma cruzi",
            "Leishmania donovani"
        ],
        "answer": "Ascaris lumbricoides",
        "difficulty": "medium",
        "topic": "Epidemiology",
        "explanation": "Ascaris lumbricoides is a soil-transmitted helminth, with eggs contaminating soil and infecting humans via ingestion."
    },
    {
        "id": 60,
        "question": "Which parasitic disease has a successful eradication program?",
        "options": [
            "Malaria",
            "Guinea worm disease",
            "Chagas disease",
            "Leishmaniasis"
        ],
        "answer": "Guinea worm disease",
        "difficulty": "medium",
        "topic": "Epidemiology",
        "explanation": "Guinea worm disease (dracunculiasis) has a successful eradication program due to improved water safety and case management."
    },

    // IX. Practical Parasitology (Questions 61–80)
    {
        "id": 61,
        "question": "What is a characteristic feature of Ascaris lumbricoides eggs under the microscope?",
        "options": [
            "Smooth, thin shell",
            "Thick, mammillated shell",
            "Barrel-shaped with polar plugs",
            "Oval with a single polar cap"
        ],
        "answer": "Thick, mammillated shell",
        "difficulty": "medium",
        "topic": "Practical Parasitology",
        "explanation": "Ascaris lumbricoides eggs have a thick, mammillated (bumpy) shell, visible under microscopy."
    },
    {
        "id": 62,
        "question": "Which staining technique is used for Entamoeba histolytica cysts?",
        "options": [
            "Giemsa",
            "Trichrome",
            "Ziehl-Neelsen",
            "Gram stain"
        ],
        "answer": "Trichrome",
        "difficulty": "medium",
        "topic": "Practical Parasitology",
        "explanation": "Trichrome staining is used to visualize Entamoeba histolytica cysts in stool samples."
    },
    {
        "id": 63,
        "question": "What is a key morphological feature of Schistosoma mansoni eggs?",
        "options": [
            "Lateral spine",
            "Terminal spine",
            "Mammillated shell",
            "No spine"
        ],
        "answer": "Lateral spine",
        "difficulty": "medium",
        "topic": "Practical Parasitology",
        "explanation": "Schistosoma mansoni eggs have a characteristic lateral spine, aiding identification in stool or urine samples."
    },
    {
        "id": 64,
        "question": "Which diagnostic algorithm is used for suspected malaria?",
        "options": [
            "Stool microscopy followed by PCR",
            "Blood smear followed by RDT",
            "Urine analysis followed by ELISA",
            "Sputum culture followed by serology"
        ],
        "answer": "Blood smear followed by RDT",
        "difficulty": "medium",
        "topic": "Practical Parasitology",
        "explanation": "Malaria diagnosis typically involves a Giemsa-stained blood smear, supplemented by rapid diagnostic tests (RDTs)."
    },

    // X. Case Studies and Research (Questions 65–100)
    {
        "id": 65,
        "question": "Which emerging parasite is associated with waterborne outbreaks?",
        "options": [
            "Cyclospora cayetanensis",
            "Trypanosoma cruzi",
            "Wuchereria bancrofti",
            "Onchocerca volvulus"
        ],
        "answer": "Cyclospora cayetanensis",
        "difficulty": "medium",
        "topic": "Case Studies",
        "explanation": "Cyclospora cayetanensis is an emerging parasite causing waterborne diarrheal outbreaks, often linked to contaminated produce."
    },
    {
        "id": 66,
        "question": "How does climate change impact parasite transmission?",
        "options": [
            "It eliminates all parasitic diseases",
            "It expands the range of vectors like mosquitoes",
            "It reduces vector populations",
            "It has no effect on parasites"
        ],
        "answer": "It expands the range of vectors like mosquitoes",
        "difficulty": "medium",
        "topic": "Research",
        "explanation": "Climate change increases temperatures and rainfall, expanding the range of vectors like mosquitoes, enhancing parasite transmission."
    },
    {
        "id": 67,
        "question": "Which drug is under investigation for resistant malaria strains?",
        "options": [
            "Artemisinin",
            "Metronidazole",
            "Praziquantel",
            "Albendazole"
        ],
        "answer": "Artemisinin",
        "difficulty": "medium",
        "topic": "Research",
        "explanation": "Artemisinin-based combination therapies are under investigation to combat resistant strains of Plasmodium falciparum."
    },
    {
        "id": 68,
        "question": "Which parasite is a focus of neglected tropical disease research?",
        "options": [
            "Influenza virus",
            "Leishmania donovani",
            "Escherichia coli",
            "Staphylococcus aureus"
        ],
        "answer": "Leishmania donovani",
        "difficulty": "medium",
        "topic": "Research",
        "explanation": "Leishmania donovani, causing visceral leishmaniasis, is a neglected tropical disease targeted for research and control."
    },
    // I. Introduction to Parasitology (Questions 69–73)
    {
        "id": 69,
        "question": "What is a key characteristic of facultative parasites?",
        "options": [
            "They require multiple hosts to complete their life cycle",
            "They can live either as parasites or free-living organisms",
            "They are always ectoparasites",
            "They cannot survive outside a host"
        ],
        "answer": "They can live either as parasites or free-living organisms",
        "difficulty": "medium",
        "topic": "Types of Parasitism",
        "explanation": "Facultative parasites, unlike obligate parasites, can survive as free-living organisms or as parasites, depending on conditions."
    },
    {
        "id": 70,
        "question": "Which type of host serves as a temporary carrier for a parasite?",
        "options": [
            "Definitive host",
            "Intermediate host",
            "Paratenic host",
            "Reservoir host"
        ],
        "answer": "Paratenic host",
        "difficulty": "medium",
        "topic": "Types of Hosts",
        "explanation": "Paratenic hosts act as temporary carriers for parasites without further development, facilitating transmission to the definitive host."
    },
    {
        "id": 71,
        "question": "What is a hallmark of an indirect life cycle in parasites?",
        "options": [
            "Involves a single host",
            "Requires multiple hosts",
            "Occurs only in ectoparasites",
            "Does not involve reproduction"
        ],
        "answer": "Requires multiple hosts",
        "difficulty": "medium",
        "topic": "Life Cycle Patterns",
        "explanation": "An indirect life cycle requires multiple hosts, such as an intermediate and definitive host, as seen in Schistosoma species."
    },
    {
        "id": 72,
        "question": "How do ectoparasites primarily affect their hosts?",
        "options": [
            "By living inside the host’s organs",
            "By causing internal bleeding",
            "By residing on the host’s surface",
            "By altering the host’s DNA"
        ],
        "answer": "By residing on the host’s surface",
        "difficulty": "medium",
        "topic": "Types of Parasitism",
        "explanation": "Ectoparasites, such as lice and ticks, live on the host’s surface, often causing irritation or transmitting diseases."
    },
    {
        "id": 73,
        "question": "What role do reservoir hosts play in parasitic diseases?",
        "options": [
            "They eliminate the parasite",
            "They serve as a source of infection for other hosts",
            "They prevent parasite transmission",
            "They only support larval stages"
        ],
        "answer": "They serve as a source of infection for other hosts",
        "difficulty": "medium",
        "topic": "Types of Hosts",
        "explanation": "Reservoir hosts maintain parasites in nature, acting as a source of infection, as seen with animals in zoonotic diseases."
    },

    // II. Protozoan Parasites (Questions 74–93)
    // A. Amoebae
    {
        "id": 74,
        "question": "What is a common clinical symptom of Entamoeba histolytica infection?",
        "options": [
            "Skin rash",
            "Bloody diarrhea",
            "Joint pain",
            "Chronic cough"
        ],
        "answer": "Bloody diarrhea",
        "difficulty": "medium",
        "topic": "Amoebae",
        "explanation": "Entamoeba histolytica causes amoebic dysentery, characterized by bloody diarrhea due to invasion of the intestinal mucosa."
    },
    {
        "id": 75,
        "question": "Which non-pathogenic amoeba can be mistaken for Entamoeba histolytica in stool samples?",
        "options": [
            "Endolimax nana",
            "Plasmodium falciparum",
            "Trypanosoma cruzi",
            "Leishmania donovani"
        ],
        "answer": "Endolimax nana",
        "difficulty": "medium",
        "topic": "Amoebae",
        "explanation": "Endolimax nana, a non-pathogenic amoeba, can resemble Entamoeba histolytica in stool microscopy, requiring careful differentiation."
    },
    {
        "id": 76,
        "question": "What is a key preventive measure for Entamoeba histolytica infection?",
        "options": [
            "Mosquito nets",
            "Boiling drinking water",
            "Antibiotic prophylaxis",
            "Skin protection"
        ],
        "answer": "Boiling drinking water",
        "difficulty": "medium",
        "topic": "Amoebae",
        "explanation": "Boiling drinking water prevents transmission of Entamoeba histolytica, which spreads via contaminated water or food."
    },

    // B. Flagellates
    {
        "id": 77,
        "question": "What is a hallmark symptom of Giardia lamblia infection?",
        "options": [
            "Fever",
            "Foul-smelling diarrhea",
            "Skin lesions",
            "Neurological deficits"
        ],
        "answer": "Foul-smelling diarrhea",
        "difficulty": "medium",
        "topic": "Flagellates",
        "explanation": "Giardia lamblia causes giardiasis, leading to foul-smelling, greasy diarrhea due to malabsorption in the small intestine."
    },
    {
        "id": 78,
        "question": "How is Trichomonas vaginalis primarily transmitted?",
        "options": [
            "Fecal-oral route",
            "Sexual contact",
            "Mosquito bite",
            "Contaminated food"
        ],
        "answer": "Sexual contact",
        "difficulty": "medium",
        "topic": "Flagellates",
        "explanation": "Trichomonas vaginalis is a sexually transmitted parasite causing trichomoniasis, primarily affecting the urogenital tract."
    },
    {
        "id": 79,
        "question": "Which Leishmania species causes cutaneous leishmaniasis?",
        "options": [
            "Leishmania donovani",
            "Leishmania major",
            "Leishmania braziliensis",
            "Leishmania infantum"
        ],
        "answer": "Leishmania major",
        "difficulty": "medium",
        "topic": "Flagellates",
        "explanation": "Leishmania major is a primary cause of cutaneous leishmaniasis, resulting in skin ulcers."
    },
    {
        "id": 80,
        "question": "What is a neurological symptom of African sleeping sickness caused by Trypanosoma brucei?",
        "options": [
            "Seizures",
            "Sleep disturbances",
            "Vision loss",
            "Hearing loss"
        ],
        "answer": "Sleep disturbances",
        "difficulty": "medium",
        "topic": "Flagellates",
        "explanation": "Trypanosoma brucei causes African sleeping sickness, characterized by sleep disturbances due to central nervous system involvement."
    },
    {
        "id": 81,
        "question": "Which organ is primarily affected in chronic Chagas disease?",
        "options": [
            "Liver",
            "Heart",
            "Lungs",
            "Kidneys"
        ],
        "answer": "Heart",
        "difficulty": "medium",
        "topic": "Flagellates",
        "explanation": "Chronic Chagas disease, caused by Trypanosoma cruzi, primarily affects the heart, leading to cardiomyopathy."
    },

    // C. Ciliates
    {
        "id": 82,
        "question": "What is the primary mode of transmission for Balantidium coli?",
        "options": [
            "Mosquito bite",
            "Fecal-oral route",
            "Sexual contact",
            "Airborne transmission"
        ],
        "answer": "Fecal-oral route",
        "difficulty": "medium",
        "topic": "Ciliates",
        "explanation": "Balantidium coli is transmitted via the fecal-oral route, often through contaminated water or food, causing balantidiasis."
    },

    // D. Sporozoans (Apicomplexa)
    {
        "id": 83,
        "question": "Which Plasmodium species causes relapsing malaria?",
        "options": [
            "Plasmodium falciparum",
            "Plasmodium vivax",
            "Plasmodium malariae",
            "Plasmodium knowlesi"
        ],
        "answer": "Plasmodium vivax",
        "difficulty": "medium",
        "topic": "Sporozoans",
        "explanation": "Plasmodium vivax causes relapsing malaria due to dormant hypnozoites in the liver, which can reactivate."
    },
    {
        "id": 84,
        "question": "What is a key risk factor for severe toxoplasmosis?",
        "options": [
            "Immunocompetence",
            "Immunosuppression",
            "High altitude",
            "Cold climate"
        ],
        "answer": "Immunosuppression",
        "difficulty": "medium",
        "topic": "Sporozoans",
        "explanation": "Immunosuppression, such as in HIV/AIDS, increases the risk of severe toxoplasmosis from Toxoplasma gondii."
    },
    {
        "id": 85,
        "question": "Which population is most at risk for severe Cryptosporidium parvum infections?",
        "options": [
            "Healthy adults",
            "Immunocompromised individuals",
            "Athletes",
            "Elderly without comorbidities"
        ],
        "answer": "Immunocompromised individuals",
        "difficulty": "medium",
        "topic": "Sporozoans",
        "explanation": "Immunocompromised individuals, such as those with AIDS, are at higher risk for severe cryptosporidiosis."
    },
    {
        "id": 86,
        "question": "What is a common symptom of Cyclospora cayetanensis infection?",
        "options": [
            "Skin rash",
            "Watery diarrhea",
            "Joint pain",
            "Fever only"
        ],
        "answer": "Watery diarrhea",
        "difficulty": "medium",
        "topic": "Sporozoans",
        "explanation": "Cyclospora cayetanensis causes watery diarrhea, often associated with contaminated food or water."
    },

    // III. Helminthic Parasites (Questions 87–115)
    // A. Nematodes (Roundworms)
    {
        "id": 87,
        "question": "Which nematode is known as the whipworm?",
        "options": [
            "Ascaris lumbricoides",
            "Trichuris trichiura",
            "Enterobius vermicularis",
            "Strongyloides stercoralis"
        ],
        "answer": "Trichuris trichiura",
        "difficulty": "medium",
        "topic": "Nematodes",
        "explanation": "Trichuris trichiura, known as the whipworm, is named for its whip-like shape and causes trichuriasis."
    },
    {
        "id": 88,
        "question": "How do hookworms primarily enter the human body?",
        "options": [
            "Ingestion of eggs",
            "Skin penetration by larvae",
            "Mosquito bite",
            "Inhalation of spores"
        ],
        "answer": "Skin penetration by larvae",
        "difficulty": "medium",
        "topic": "Nematodes",
        "explanation": "Hookworms like Ancylostoma duodenale and Necator americanus penetrate the skin, often through bare feet."
    },
    {
        "id": 89,
        "question": "What is a major complication of Wuchereria bancrofti infection?",
        "options": [
            "Blindness",
            "Elephantiasis",
            "Seizures",
            "Liver failure"
        ],
        "answer": "Elephantiasis",
        "difficulty": "medium",
        "topic": "Nematodes",
        "explanation": "Wuchereria bancrofti causes lymphatic filariasis, which can lead to elephantiasis, characterized by severe swelling."
    },
    {
        "id": 90,
        "question": "Which nematode is transmitted by blackflies?",
        "options": [
            "Loa loa",
            "Onchocerca volvulus",
            "Wuchereria bancrofti",
            "Trichinella spiralis"
        ],
        "answer": "Onchocerca volvulus",
        "difficulty": "medium",
        "topic": "Nematodes",
        "explanation": "Onchocerca volvulus, causing river blindness, is transmitted by blackflies (Simulium species)."
    },
    {
        "id": 91,
        "question": "What is a key preventive measure for Dracunculus medinensis?",
        "options": [
            "Mosquito nets",
            "Filtering drinking water",
            "Antibiotic prophylaxis",
            "Vaccination"
        ],
        "answer": "Filtering drinking water",
        "difficulty": "medium",
        "topic": "Nematodes",
        "explanation": "Filtering drinking water removes copepods infected with Dracunculus medinensis larvae, preventing Guinea worm disease."
    },

    // B. Cestodes (Tapeworms)
    {
        "id": 92,
        "question": "Which tapeworm is associated with pork consumption?",
        "options": [
            "Taenia saginata",
            "Taenia solium",
            "Diphyllobothrium latum",
            "Echinococcus multilocularis"
        ],
        "answer": "Taenia solium",
        "difficulty": "medium",
        "topic": "Cestodes",
        "explanation": "Taenia solium, the pork tapeworm, is contracted by consuming undercooked pork containing cysticerci."
    },
    {
        "id": 93,
        "question": "What is a diagnostic feature of Diphyllobothrium latum infection?",
        "options": [
            "Vitamin B12 deficiency",
            "Cerebral cysts",
            "Lymphatic swelling",
            "Skin nodules"
        ],
        "answer": "Vitamin B12 deficiency",
        "difficulty": "medium",
        "topic": "Cestodes",
        "explanation": "Diphyllobothrium latum competes for vitamin B12, leading to deficiency and potential megaloblastic anemia."
    },
    {
        "id": 94,
        "question": "Which cestode causes alveolar echinococcosis?",
        "options": [
            "Echinococcus granulosus",
            "Echinococcus multilocularis",
            "Hymenolepis nana",
            "Taenia saginata"
        ],
        "answer": "Echinococcus multilocularis",
        "difficulty": "medium",
        "topic": "Cestodes",
        "explanation": "Echinococcus multilocularis causes alveolar echinococcosis, a severe condition with invasive liver cysts."
    },
    {
        "id": 95,
        "question": "How is Hymenolepis nana primarily diagnosed?",
        "options": [
            "Blood smear",
            "Stool microscopy for eggs",
            "Serological testing",
            "Skin biopsy"
        ],
        "answer": "Stool microscopy for eggs",
        "difficulty": "medium",
        "topic": "Cestodes",
        "explanation": "Hymenolepis nana is diagnosed by identifying characteristic eggs in stool samples via microscopy."
    },

    // C. Trematodes (Flukes)
    {
        "id": 96,
        "question": "Which Schistosoma species primarily affects the urinary tract?",
        "options": [
            "Schistosoma mansoni",
            "Schistosoma japonicum",
            "Schistosoma haematobium",
            "Schistosoma intercalatum"
        ],
        "answer": "Schistosoma haematobium",
        "difficulty": "medium",
        "topic": "Trematodes",
        "explanation": "Schistosoma haematobium causes urinary schistosomiasis, leading to hematuria and bladder damage."
    },
    {
        "id": 97,
        "question": "What is the intermediate host for Fasciola hepatica?",
        "options": [
            "Mosquito",
            "Snail",
            "Fish",
            "Crab"
        ],
        "answer": "Snail",
        "difficulty": "medium",
        "topic": "Trematodes",
        "explanation": "Fasciola hepatica uses snails as intermediate hosts, where cercariae develop before encysting on vegetation."
    },
    {
        "id": 98,
        "question": "Which fluke is associated with intestinal infections?",
        "options": [
            "Fasciolopsis buski",
            "Clonorchis sinensis",
            "Paragonimus westermani",
            "Schistosoma japonicum"
        ],
        "answer": "Fasciolopsis buski",
        "difficulty": "medium",
        "topic": "Trematodes",
        "explanation": "Fasciolopsis buski, an intestinal fluke, causes fasciolopsiasis, often linked to eating contaminated aquatic plants."
    },

    // IV. Arthropod Vectors and Ectoparasites (Questions 99–107)
    {
        "id": 99,
        "question": "Which arthropod transmits Babesia species?",
        "options": [
            "Mosquito",
            "Tick",
            "Sandfly",
            "Flea"
        ],
        "answer": "Tick",
        "difficulty": "medium",
        "topic": "Arthropod Vectors",
        "explanation": "Ticks, particularly Ixodes species, transmit Babesia, causing babesiosis, a malaria-like illness."
    },
    {
        "id": 100,
        "question": "What disease is associated with lice transmission?",
        "options": [
            "Malaria",
            "Typhus",
            "Chagas disease",
            "Leishmaniasis"
        ],
        "answer": "Typhus",
        "difficulty": "medium",
        "topic": "Ectoparasites",
        "explanation": "Lice, particularly body lice, transmit typhus, caused by Rickettsia prowazekii."
    },
    {
        "id": 101,
        "question": "Which mosquito genus is a vector for Wuchereria bancrofti?",
        "options": [
            "Anopheles",
            "Aedes",
            "Culex",
            "Glossina"
        ],
        "answer": "Culex",
        "difficulty": "medium",
        "topic": "Arthropod Vectors",
        "explanation": "Culex mosquitoes are the primary vectors for Wuchereria bancrofti, causing lymphatic filariasis."
    },
    {
        "id": 102,
        "question": "What is a common symptom of scabies caused by mites?",
        "options": [
            "Fever",
            "Intense itching",
            "Joint pain",
            "Diarrhea"
        ],
        "answer": "Intense itching",
        "difficulty": "medium",
        "topic": "Ectoparasites",
        "explanation": "Scabies, caused by Sarcoptes scabiei, leads to intense itching, especially at night, due to mite burrowing."
    },

    // V. Pathogenesis and Host Responses (Questions 103–112)
    {
        "id": 103,
        "question": "What is a common immune response to parasitic infections?",
        "options": [
            "Eosinophilia",
            "Neutropenia",
            "Thrombocytopenia",
            "Lymphopenia"
        ],
        "answer": "Eosinophilia",
        "difficulty": "medium",
        "topic": "Host Responses",
        "explanation": "Eosinophilia is a common immune response to parasitic infections, particularly helminths, due to their tissue invasion."
    },
    {
        "id": 104,
        "question": "Which parasite is known for causing anemia due to blood loss?",
        "options": [
            "Giardia lamblia",
            "Necator americanus",
            "Trypanosoma cruzi",
            "Toxoplasma gondii"
        ],
        "answer": "Necator americanus",
        "difficulty": "medium",
        "topic": "Pathogenesis",
        "explanation": "Necator americanus, a hookworm, causes anemia by feeding on blood in the intestines."
    },
    {
        "id": 105,
        "question": "What is a neurological complication of Trypanosoma brucei infection?",
        "options": [
            "Liver cirrhosis",
            "Encephalitis",
            "Kidney failure",
            "Pneumonia"
        ],
        "answer": "Encephalitis",
        "difficulty": "medium",
        "topic": "Pathogenesis",
        "explanation": "Trypanosoma brucei causes encephalitis in the late stages of African sleeping sickness, leading to neurological symptoms."
    },

    // VI. Diagnostic Parasitology (Questions 106–118)
    {
        "id": 106,
        "question": "Which sample is used to diagnose Schistosoma haematobium?",
        "options": [
            "Stool",
            "Urine",
            "Blood",
            "Sputum"
        ],
        "answer": "Urine",
        "difficulty": "medium",
        "topic": "Diagnostic Parasitology",
        "explanation": "Schistosoma haematobium eggs are primarily detected in urine samples via microscopy."
    },
    {
        "id": 107,
        "question": "What is a key feature of Trichinella spiralis diagnosis?",
        "options": [
            "Stool microscopy",
            "Muscle biopsy",
            "Blood smear",
            "Urine analysis"
        ],
        "answer": "Muscle biopsy",
        "difficulty": "medium",
        "topic": "Diagnostic Parasitology",
        "explanation": "Trichinella spiralis is diagnosed by identifying larvae in muscle biopsies, often confirmed by serology."
    },
    {
        "id": 108,
        "question": "Which serological test is used for Toxoplasma gondii?",
        "options": [
            "ELISA",
            "Gram stain",
            "Giemsa stain",
            "Ziehl-Neelsen"
        ],
        "answer": "ELISA",
        "difficulty": "medium",
        "topic": "Diagnostic Parasitology",
        "explanation": "ELISA is used to detect antibodies against Toxoplasma gondii, aiding in toxoplasmosis diagnosis."
    },
    {
        "id": 109,
        "question": "What is a limitation of rapid diagnostic tests (RDTs) for malaria?",
        "options": [
            "High sensitivity",
            "Inability to detect low parasitemia",
            "High cost",
            "Long processing time"
        ],
        "answer": "Inability to detect low parasitemia",
        "difficulty": "medium",
        "topic": "Diagnostic Parasitology",
        "explanation": "RDTs for malaria may miss low parasitemia cases, requiring microscopy for confirmation."
    },

    // VII. Treatment and Control (Questions 110–122)
    {
        "id": 110,
        "question": "Which drug is used to treat Giardia lamblia infections?",
        "options": [
            "Metronidazole",
            "Praziquantel",
            "Ivermectin",
            "Chloroquine"
        ],
        "answer": "Metronidazole",
        "difficulty": "medium",
        "topic": "Treatment",
        "explanation": "Metronidazole is the drug of choice for treating giardiasis caused by Giardia lamblia."
    },
    {
        "id": 111,
        "question": "What is a challenge in treating malaria caused by Plasmodium falciparum?",
        "options": [
            "Lack of vaccines",
            "Drug resistance",
            "No available drugs",
            "Short treatment duration"
        ],
        "answer": "Drug resistance",
        "difficulty": "medium",
        "topic": "Treatment",
        "explanation": "Drug resistance, particularly to chloroquine and artemisinin, is a major challenge in treating Plasmodium falciparum malaria."
    },
    {
        "id": 112,
        "question": "Which control measure is effective against schistosomiasis?",
        "options": [
            "Mass drug administration",
            "Antibiotic prophylaxis",
            "Mosquito control",
            "Surgical removal"
        ],
        "answer": "Mass drug administration",
        "difficulty": "medium",
        "topic": "Control",
        "explanation": "Mass drug administration with praziquantel is a key strategy for controlling schistosomiasis in endemic areas."
    },

    // VIII. Epidemiology and Public Health Aspects (Questions 113–125)
    {
        "id": 113,
        "question": "Which parasitic disease is primarily waterborne?",
        "options": [
            "Chagas disease",
            "Cryptosporidiosis",
            "River blindness",
            "Lymphatic filariasis"
        ],
        "answer": "Cryptosporidiosis",
        "difficulty": "medium",
        "topic": "Epidemiology",
        "explanation": "Cryptosporidiosis, caused by Cryptosporidium parvum, is primarily waterborne, often linked to contaminated water sources."
    },
    {
        "id": 114,
        "question": "Which parasite is a focus of global eradication efforts?",
        "options": [
            "Plasmodium falciparum",
            "Dracunculus medinensis",
            "Trypanosoma cruzi",
            "Leishmania major"
        ],
        "answer": "Dracunculus medinensis",
        "difficulty": "medium",
        "topic": "Epidemiology",
        "explanation": "Dracunculus medinensis (Guinea worm) is targeted for global eradication through water filtration and case containment."
    },
    {
        "id": 115,
        "question": "What is a common feature of neglected tropical diseases (NTDs)?",
        "options": [
            "High mortality in developed countries",
            "Limited research and funding",
            "Exclusive airborne transmission",
            "No effective treatments"
        ],
        "answer": "Limited research and funding",
        "difficulty": "medium",
        "topic": "Epidemiology",
        "explanation": "NTDs, like schistosomiasis and leishmaniasis, suffer from limited research and funding despite their global impact."
    },

    // IX. Practical Parasitology (Questions 116–135)
    {
        "id": 116,
        "question": "What is a characteristic feature of Trichinella spiralis larvae in muscle tissue?",
        "options": [
            "Encysted in muscle fibers",
            "Free-moving in blood",
            "Attached to skin",
            "Found in stool"
        ],
        "answer": "Encysted in muscle fibers",
        "difficulty": "medium",
        "topic": "Practical Parasitology",
        "explanation": "Trichinella spiralis larvae encyst in muscle fibers, visible in muscle biopsies, causing trichinosis."
    },
    {
        "id": 117,
        "question": "Which parasite’s eggs have a terminal spine?",
        "options": [
            "Schistosoma mansoni",
            "Schistosoma haematobium",
            "Schistosoma japonicum",
            "Fasciola hepatica"
        ],
        "answer": "Schistosoma haematobium",
        "difficulty": "medium",
        "topic": "Practical Parasitology",
        "explanation": "Schistosoma haematobium eggs have a terminal spine, aiding identification in urine microscopy."
    },
    {
        "id": 118,
        "question": "What is a key step in preparing a wet mount for parasite detection?",
        "options": [
            "Heating the sample",
            "Adding saline to the sample",
            "Freezing the sample",
            "Staining with Giemsa"
        ],
        "answer": "Adding saline to the sample",
        "difficulty": "medium",
        "topic": "Practical Parasitology",
        "explanation": "A wet mount is prepared by adding saline to a sample, allowing visualization of live parasites like Giardia."
    },

    // X. Case Studies and Research (Questions 119–168)
    {
        "id": 119,
        "question": "Which parasite is linked to foodborne outbreaks from contaminated produce?",
        "options": [
            "Cyclospora cayetanensis",
            "Trypanosoma brucei",
            "Wuchereria bancrofti",
            "Onchocerca volvulus"
        ],
        "answer": "Cyclospora cayetanensis",
        "difficulty": "medium",
        "topic": "Case Studies",
        "explanation": "Cyclospora cayetanensis is associated with foodborne outbreaks, often from contaminated produce like raspberries."
    },
    {
        "id": 120,
        "question": "What is a research focus for combating drug-resistant Leishmania?",
        "options": [
            "New antibiotic development",
            "Novel antiparasitic drugs",
            "Viral therapies",
            "Surgical interventions"
        ],
        "answer": "Novel antiparasitic drugs",
        "difficulty": "medium",
        "topic": "Research",
        "explanation": "Research on drug-resistant Leishmania focuses on developing novel antiparasitic drugs to overcome resistance."
    },
    {
        "id": 121,
        "question": "How does climate change affect the distribution of lymphatic filariasis?",
        "options": [
            "Reduces mosquito habitats",
            "Expands mosquito breeding sites",
            "Eliminates the parasite",
            "Has no impact"
        ],
        "answer": "Expands mosquito breeding sites",
        "difficulty": "medium",
        "topic": "Research",
        "explanation": "Climate change increases mosquito breeding sites, enhancing the transmission of lymphatic filariasis."
    },
    {
        "id": 122,
        "question": "Which parasite is studied for its impact on congenital infections?",
        "options": [
            "Toxoplasma gondii",
            "Enterobius vermicularis",
            "Trichomonas vaginalis",
            "Ascaris lumbricoides"
        ],
        "answer": "Toxoplasma gondii",
        "difficulty": "medium",
        "topic": "Case Studies",
        "explanation": "Toxoplasma gondii is studied for congenital infections, as it can cause severe fetal abnormalities if contracted during pregnancy."
    },
    {
        "id": 123,
        "question": "What is the primary source of infection for Entamoeba histolytica?",
        "options": [
            "Contaminated water or food",
            "Mosquito bites",
            "Direct skin contact",
            "Airborne droplets"
        ],
        "answer": "Contaminated water or food",
        "difficulty": "medium",
        "topic": "Amoebae",
        "explanation": "Entamoeba histolytica is primarily transmitted through ingestion of contaminated water or food containing cysts."
    },
    {
        "id": 124,
        "question": "Which parasite is known for causing amoebic liver abscess?",
        "options": [
            "Entamoeba coli",
            "Entamoeba histolytica",
            "Iodamoeba bütschlii",
            "Endolimax nana"
        ],
        "answer": "Entamoeba histolytica",
        "difficulty": "medium",
        "topic": "Amoebae",
        "explanation": "Entamoeba histolytica can invade the liver, forming amoebic liver abscesses, a severe complication of amoebiasis."
    },
    {
        "id": 125,
        "question": "What is a distinguishing feature of Giardia lamblia cysts?",
        "options": [
            "Single nucleus",
            "Four nuclei",
            "No nuclei",
            "Eight nuclei"
        ],
        "answer": "Four nuclei",
        "difficulty": "medium",
        "topic": "Flagellates",
        "explanation": "Giardia lamblia cysts have four nuclei, a key feature for identification in stool microscopy."
    },
    {
        "id": 126,
        "question": "Which drug is used to treat Trichomonas vaginalis infections?",
        "options": [
            "Praziquantel",
            "Metronidazole",
            "Ivermectin",
            "Chloroquine"
        ],
        "answer": "Metronidazole",
        "difficulty": "medium",
        "topic": "Flagellates",
        "explanation": "Metronidazole is the standard treatment for trichomoniasis caused by Trichomonas vaginalis."
    },
    {
        "id": 127,
        "question": "Which Leishmania species is associated with mucocutaneous leishmaniasis?",
        "options": [
            "Leishmania major",
            "Leishmania donovani",
            "Leishmania braziliensis",
            "Leishmania infantum"
        ],
        "answer": "Leishmania braziliensis",
        "difficulty": "medium",
        "topic": "Flagellates",
        "explanation": "Leishmania braziliensis causes mucocutaneous leishmaniasis, affecting the mucous membranes of the nose and mouth."
    },
    {
        "id": 128,
        "question": "What is the primary treatment for Trypanosoma brucei infection in the early stage?",
        "options": [
            "Suramin",
            "Metronidazole",
            "Praziquantel",
            "Albendazole"
        ],
        "answer": "Suramin",
        "difficulty": "medium",
        "topic": "Flagellates",
        "explanation": "Suramin is used to treat early-stage African sleeping sickness caused by Trypanosoma brucei."
    },
    {
        "id": 129,
        "question": "Which diagnostic method is used for Trypanosoma cruzi?",
        "options": [
            "Stool microscopy",
            "Blood smear with Giemsa stain",
            "Urine analysis",
            "Skin biopsy"
        ],
        "answer": "Blood smear with Giemsa stain",
        "difficulty": "medium",
        "topic": "Flagellates",
        "explanation": "Blood smears stained with Giemsa are used to detect Trypanosoma cruzi trypomastigotes in acute Chagas disease."
    },
    {
        "id": 130,
        "question": "What is a common symptom of Balantidium coli infection?",
        "options": [
            "Skin lesions",
            "Diarrhea",
            "Fever only",
            "Joint pain"
        ],
        "answer": "Diarrhea",
        "difficulty": "medium",
        "topic": "Ciliates",
        "explanation": "Balantidium coli causes balantidiasis, leading to diarrhea, sometimes bloody, due to intestinal invasion."
    },
    {
        "id": 131,
        "question": "Which Plasmodium species is associated with quartan fever?",
        "options": [
            "Plasmodium vivax",
            "Plasmodium falciparum",
            "Plasmodium malariae",
            "Plasmodium ovale"
        ],
        "answer": "Plasmodium malariae",
        "difficulty": "medium",
        "topic": "Sporozoans",
        "explanation": "Plasmodium malariae causes quartan fever, with fever spikes every 72 hours due to its erythrocytic cycle."
    },
    {
        "id": 132,
        "question": "What is a preventive measure for Toxoplasma gondii infection in pregnant women?",
        "options": [
            "Avoiding raw meat",
            "Using mosquito nets",
            "Drinking untreated water",
            "Avoiding vaccinations"
        ],
        "answer": "Avoiding raw meat",
        "difficulty": "medium",
        "topic": "Sporozoans",
        "explanation": "Avoiding raw or undercooked meat reduces the risk of Toxoplasma gondii infection, which can harm the fetus."
    },
    {
        "id": 133,
        "question": "Which diagnostic method is used for Cryptosporidium parvum?",
        "options": [
            "Blood culture",
            "Acid-fast staining of stool",
            "Skin swab",
            "X-ray imaging"
        ],
        "answer": "Acid-fast staining of stool",
        "difficulty": "medium",
        "topic": "Sporozoans",
        "explanation": "Acid-fast staining of stool samples detects Cryptosporidium parvum oocysts, confirming cryptosporidiosis."
    },
    {
        "id": 134,
        "question": "What is the primary mode of transmission for Cyclospora cayetanensis?",
        "options": [
            "Mosquito bite",
            "Contaminated food or water",
            "Direct skin contact",
            "Airborne transmission"
        ],
        "answer": "Contaminated food or water",
        "difficulty": "medium",
        "topic": "Sporozoans",
        "explanation": "Cyclospora cayetanensis is transmitted through contaminated food or water, often linked to fresh produce."
    },
    {
        "id": 135,
        "question": "Which nematode is associated with perianal itching in children?",
        "options": [
            "Ascaris lumbricoides",
            "Enterobius vermicularis",
            "Trichuris trichiura",
            "Strongyloides stercoralis"
        ],
        "answer": "Enterobius vermicularis",
        "difficulty": "medium",
        "topic": "Nematodes",
        "explanation": "Enterobius vermicularis, the pinworm, causes perianal itching in children due to egg-laying by female worms."
    },
    {
        "id": 136,
        "question": "What is a common complication of Ascaris lumbricoides infection?",
        "options": [
            "Blindness",
            "Intestinal obstruction",
            "Heart failure",
            "Skin ulcers"
        ],
        "answer": "Intestinal obstruction",
        "difficulty": "medium",
        "topic": "Nematodes",
        "explanation": "Ascaris lumbricoides can cause intestinal obstruction in heavy infections, particularly in children."
    },
    {
        "id": 137,
        "question": "Which drug is used to treat Trichuris trichiura infections?",
        "options": [
            "Metronidazole",
            "Albendazole",
            "Chloroquine",
            "Suramin"
        ],
        "answer": "Albendazole",
        "difficulty": "medium",
        "topic": "Nematodes",
        "explanation": "Albendazole is effective against Trichuris trichiura, the whipworm, reducing worm burden."
    },
    {
        "id": 138,
        "question": "What is a characteristic feature of Strongyloides stercoralis larvae?",
        "options": [
            "Encysted in muscles",
            "Filariform larvae in soil",
            "Cysts in stool",
            "Eggs in blood"
        ],
        "answer": "Filariform larvae in soil",
        "difficulty": "medium",
        "topic": "Nematodes",
        "explanation": "Strongyloides stercoralis filariform larvae in soil penetrate the skin, initiating infection."
    },
    {
        "id": 139,
        "question": "Which nematode is transmitted through undercooked pork?",
        "options": [
            "Trichinella spiralis",
            "Wuchereria bancrofti",
            "Onchocerca volvulus",
            "Loa loa"
        ],
        "answer": "Trichinella spiralis",
        "difficulty": "medium",
        "topic": "Nematodes",
        "explanation": "Trichinella spiralis is transmitted via undercooked pork containing encysted larvae, causing trichinosis."
    },
    {
        "id": 140,
        "question": "What is a diagnostic feature of Wuchereria bancrofti infection?",
        "options": [
            "Microfilariae in blood",
            "Eggs in stool",
            "Cysts in muscles",
            "Larvae in urine"
        ],
        "answer": "Microfilariae in blood",
        "difficulty": "medium",
        "topic": "Nematodes",
        "explanation": "Microfilariae of Wuchereria bancrofti are detected in blood samples, often collected at night due to periodicity."
    },
    {
        "id": 141,
        "question": "Which parasite causes loiasis?",
        "options": [
            "Loa loa",
            "Onchocerca volvulus",
            "Dracunculus medinensis",
            "Brugia malayi"
        ],
        "answer": "Loa loa",
        "difficulty": "medium",
        "topic": "Nematodes",
        "explanation": "Loa loa, transmitted by deer flies, causes loiasis, characterized by subcutaneous migration of worms."
    },
    {
        "id": 142,
        "question": "What is a preventive measure for Dracunculus medinensis infection?",
        "options": [
            "Mosquito control",
            "Water filtration",
            "Antibiotic use",
            "Vaccination"
        ],
        "answer": "Water filtration",
        "difficulty": "medium",
        "topic": "Nematodes",
        "explanation": "Filtering drinking water removes copepods infected with Dracunculus medinensis larvae, preventing infection."
    },
    {
        "id": 143,
        "question": "Which cestode is diagnosed by proglottids in stool?",
        "options": [
            "Taenia saginata",
            "Echinococcus granulosus",
            "Hymenolepis nana",
            "Diphyllobothrium latum"
        ],
        "answer": "Taenia saginata",
        "difficulty": "medium",
        "topic": "Cestodes",
        "explanation": "Taenia saginata infections are diagnosed by identifying proglottids or eggs in stool samples."
    },
    {
        "id": 144,
        "question": "What is a neurological complication of Taenia solium infection?",
        "options": [
            "Neurocysticercosis",
            "Liver abscess",
            "Lymphatic obstruction",
            "Pulmonary edema"
        ],
        "answer": "Neurocysticercosis",
        "difficulty": "medium",
        "topic": "Cestodes",
        "explanation": "Taenia solium larvae can form cysts in the brain, causing neurocysticercosis, leading to seizures."
    },
    {
        "id": 145,
        "question": "Which cestode is associated with megaloblastic anemia?",
        "options": [
            "Taenia solium",
            "Diphyllobothrium latum",
            "Echinococcus granulosus",
            "Hymenolepis nana"
        ],
        "answer": "Diphyllobothrium latum",
        "difficulty": "medium",
        "topic": "Cestodes",
        "explanation": "Diphyllobothrium latum competes for vitamin B12, potentially causing megaloblastic anemia."
    },
    {
        "id": 146,
        "question": "What is a key diagnostic method for Echinococcus granulosus?",
        "options": [
            "Stool microscopy",
            "Imaging for hydatid cysts",
            "Blood smear",
            "Urine analysis"
        ],
        "answer": "Imaging for hydatid cysts",
        "difficulty": "medium",
        "topic": "Cestodes",
        "explanation": "Imaging, such as ultrasound or CT, detects hydatid cysts in organs, confirming Echinococcus granulosus infection."
    },
    {
        "id": 147,
        "question": "Which cestode has a direct life cycle involving autoinfection?",
        "options": [
            "Taenia saginata",
            "Hymenolepis nana",
            "Echinococcus multilocularis",
            "Diphyllobothrium latum"
        ],
        "answer": "Hymenolepis nana",
        "difficulty": "medium",
        "topic": "Cestodes",
        "explanation": "Hymenolepis nana has a direct life cycle, with autoinfection possible when eggs hatch in the intestine."
    },
    {
        "id": 148,
        "question": "Which Schistosoma species is associated with intestinal symptoms?",
        "options": [
            "Schistosoma haematobium",
            "Schistosoma mansoni",
            "Schistosoma japonicum",
            "Schistosoma mekongi"
        ],
        "answer": "Schistosoma mansoni",
        "difficulty": "medium",
        "topic": "Trematodes",
        "explanation": "Schistosoma mansoni causes intestinal schistosomiasis, leading to diarrhea and abdominal pain."
    },
    {
        "id": 149,
        "question": "What is the primary treatment for Fasciola hepatica infection?",
        "options": [
            "Triclabendazole",
            "Metronidazole",
            "Ivermectin",
            "Chloroquine"
        ],
        "answer": "Triclabendazole",
        "difficulty": "medium",
        "topic": "Trematodes",
        "explanation": "Triclabendazole is the drug of choice for treating Fasciola hepatica, a liver fluke."
    },
    {
        "id": 150,
        "question": "Which trematode is transmitted through undercooked fish?",
        "options": [
            "Clonorchis sinensis",
            "Fasciolopsis buski",
            "Paragonimus westermani",
            "Schistosoma japonicum"
        ],
        "answer": "Clonorchis sinensis",
        "difficulty": "medium",
        "topic": "Trematodes",
        "explanation": "Clonorchis sinensis, a liver fluke, is transmitted via undercooked freshwater fish."
    },
    {
        "id": 151,
        "question": "What is a diagnostic feature of Paragonimus westermani infection?",
        "options": [
            "Eggs in sputum",
            "Cysts in stool",
            "Larvae in blood",
            "Microfilariae in urine"
        ],
        "answer": "Eggs in sputum",
        "difficulty": "medium",
        "topic": "Trematodes",
        "explanation": "Paragonimus westermani eggs are detected in sputum or stool, confirming lung fluke infection."
    },
    {
        "id": 152,
        "question": "Which arthropod is a vector for Onchocerca volvulus?",
        "options": [
            "Blackfly",
            "Mosquito",
            "Sandfly",
            "Tick"
        ],
        "answer": "Blackfly",
        "difficulty": "medium",
        "topic": "Arthropod Vectors",
        "explanation": "Blackflies (Simulium species) transmit Onchocerca volvulus, causing river blindness."
    },
    {
        "id": 153,
        "question": "What is a disease transmitted by fleas?",
        "options": [
            "Plague",
            "Malaria",
            "Chagas disease",
            "Leishmaniasis"
        ],
        "answer": "Plague",
        "difficulty": "medium",
        "topic": "Ectoparasites",
        "explanation": "Fleas, particularly Xenopsylla cheopis, transmit Yersinia pestis, the causative agent of plague."
    },
    {
        "id": 154,
        "question": "Which mosquito genus transmits Plasmodium species?",
        "options": [
            "Aedes",
            "Anopheles",
            "Culex",
            "Glossina"
        ],
        "answer": "Anopheles",
        "difficulty": "medium",
        "topic": "Arthropod Vectors",
        "explanation": "Anopheles mosquitoes are the primary vectors for Plasmodium species, causing malaria."
    },
    {
        "id": 155,
        "question": "What is a common complication of chronic schistosomiasis?",
        "options": [
            "Portal hypertension",
            "Heart failure",
            "Blindness",
            "Bone fractures"
        ],
        "answer": "Portal hypertension",
        "difficulty": "medium",
        "topic": "Pathogenesis",
        "explanation": "Chronic schistosomiasis, particularly from Schistosoma mansoni, can cause portal hypertension due to liver fibrosis."
    },
    {
        "id": 156,
        "question": "Which parasite is associated with eosinophilia in tissue infections?",
        "options": [
            "Trichomonas vaginalis",
            "Trichinella spiralis",
            "Giardia lamblia",
            "Plasmodium falciparum"
        ],
        "answer": "Trichinella spiralis",
        "difficulty": "medium",
        "topic": "Host Responses",
        "explanation": "Trichinella spiralis causes eosinophilia due to its larval invasion of muscle tissue."
    },
    {
        "id": 157,
        "question": "What is a cardiac complication of Trypanosoma cruzi infection?",
        "options": [
            "Cardiomyopathy",
            "Pneumonia",
            "Renal failure",
            "Cirrhosis"
        ],
        "answer": "Cardiomyopathy",
        "difficulty": "medium",
        "topic": "Pathogenesis",
        "explanation": "Chronic Trypanosoma cruzi infection can lead to cardiomyopathy, a major cause of morbidity in Chagas disease."
    },
    {
        "id": 158,
        "question": "Which sample is used to diagnose Paragonimus westermani?",
        "options": [
            "Sputum",
            "Urine",
            "Blood",
            "Stool"
        ],
        "answer": "Sputum",
        "difficulty": "medium",
        "topic": "Diagnostic Parasitology",
        "explanation": "Sputum samples are examined for Paragonimus westermani eggs to diagnose lung fluke infection."
    },
    {
        "id": 159,
        "question": "What is a key feature of Leishmania diagnosis?",
        "options": [
            "Skin lesion biopsy",
            "Stool microscopy",
            "Urine culture",
            "Blood smear"
        ],
        "answer": "Skin lesion biopsy",
        "difficulty": "medium",
        "topic": "Diagnostic Parasitology",
        "explanation": "Skin lesion biopsies are used to detect Leishmania amastigotes in cutaneous leishmaniasis."
    },
    {
        "id": 160,
        "question": "Which molecular method is used for detecting Trypanosoma cruzi?",
        "options": [
            "ELISA",
            "PCR",
            "Western blot",
            "Flow cytometry"
        ],
        "answer": "PCR",
        "difficulty": "medium",
        "topic": "Diagnostic Parasitology",
        "explanation": "PCR is used to detect Trypanosoma cruzi DNA, particularly in chronic Chagas disease."
    },
    {
        "id": 161,
        "question": "What is a common treatment for Ascaris lumbricoides infection?",
        "options": [
            "Metronidazole",
            "Albendazole",
            "Chloroquine",
            "Suramin"
        ],
        "answer": "Albendazole",
        "difficulty": "medium",
        "topic": "Treatment",
        "explanation": "Albendazole is the drug of choice for treating Ascaris lumbricoides infections."
    },
    {
        "id": 162,
        "question": "Which control measure is effective for lymphatic filariasis?",
        "options": [
            "Mass drug administration",
            "Water chlorination",
            "Surgical removal",
            "Antibiotic prophylaxis"
        ],
        "answer": "Mass drug administration",
        "difficulty": "medium",
        "topic": "Control",
        "explanation": "Mass drug administration with ivermectin and albendazole is used to control lymphatic filariasis."
    },
    {
        "id": 163,
        "question": "What is a key strategy for preventing malaria?",
        "options": [
            "Insecticide-treated bed nets",
            "Water filtration",
            "Antibiotic distribution",
            "Surgical intervention"
        ],
        "answer": "Insecticide-treated bed nets",
        "difficulty": "medium",
        "topic": "Control",
        "explanation": "Insecticide-treated bed nets reduce mosquito bites, preventing malaria transmission."
    },
    {
        "id": 164,
        "question": "Which parasitic disease is associated with foodborne transmission?",
        "options": [
            "Taeniasis",
            "River blindness",
            "Lymphatic filariasis",
            "African sleeping sickness"
        ],
        "answer": "Taeniasis",
        "difficulty": "medium",
        "topic": "Epidemiology",
        "explanation": "Taeniasis, caused by Taenia species, is transmitted through consumption of undercooked beef or pork."
    },
    {
        "id": 165,
        "question": "Which parasite is a zoonotic infection from dogs?",
        "options": [
            "Echinococcus granulosus",
            "Enterobius vermicularis",
            "Trichomonas vaginalis",
            "Plasmodium vivax"
        ],
        "answer": "Echinococcus granulosus",
        "difficulty": "medium",
        "topic": "Epidemiology",
        "explanation": "Echinococcus granulosus is a zoonotic parasite transmitted from dogs to humans, causing hydatid disease."
    },
    {
        "id": 166,
        "question": "What is a characteristic egg feature of Enterobius vermicularis?",
        "options": [
            "Asymmetrical, flattened on one side",
            "Thick, mammillated shell",
            "Barrel-shaped with polar plugs",
            "Round with a lateral spine"
        ],
        "answer": "Asymmetrical, flattened on one side",
        "difficulty": "medium",
        "topic": "Practical Parasitology",
        "explanation": "Enterobius vermicularis eggs are asymmetrical and flattened on one side, visible in perianal tape tests."
    },
    {
        "id": 167,
        "question": "Which staining technique is used for Cyclospora cayetanensis?",
        "options": [
            "Giemsa",
            "Acid-fast",
            "Trichrome",
            "Gram stain"
        ],
        "answer": "Acid-fast",
        "difficulty": "medium",
        "topic": "Practical Parasitology",
        "explanation": "Acid-fast staining is used to detect Cyclospora cayetanensis oocysts in stool samples."
    },
    {
        "id": 168,
        "question": "What is a diagnostic algorithm for hookworm infection?",
        "options": [
            "Stool microscopy followed by serology",
            "Blood smear followed by RDT",
            "Urine analysis followed by PCR",
            "Sputum culture followed by imaging"
        ],
        "answer": "Stool microscopy followed by serology",
        "difficulty": "medium",
        "topic": "Practical Parasitology",
        "explanation": "Stool microscopy detects hookworm eggs, with serology used for confirmation in ambiguous cases."
    },
    {
        "id": 169,
        "question": "Which parasite is linked to outbreaks in immunocompromised patients?",
        "options": [
            "Cryptosporidium parvum",
            "Trypanosoma brucei",
            "Wuchereria bancrofti",
            "Onchocerca volvulus"
        ],
        "answer": "Cryptosporidium parvum",
        "difficulty": "medium",
        "topic": "Case Studies",
        "explanation": "Cryptosporidium parvum causes severe diarrheal outbreaks in immunocompromised patients, such as those with HIV/AIDS."
    },
    {
        "id": 170,
        "question": "What is a research focus for schistosomiasis control?",
        "options": [
            "Vaccine development",
            "Antibiotic resistance",
            "Viral therapies",
            "Surgical techniques"
        ],
        "answer": "Vaccine development",
        "difficulty": "medium",
        "topic": "Research",
        "explanation": "Vaccine development is a key research focus for long-term control of schistosomiasis."
    },
    {
        "id": 171,
        "question": "How does climate change impact Trypanosoma brucei transmission?",
        "options": [
            "Reduces tsetse fly habitats",
            "Expands tsetse fly range",
            "Eliminates the parasite",
            "No impact"
        ],
        "answer": "Expands tsetse fly range",
        "difficulty": "medium",
        "topic": "Research",
        "explanation": "Climate change expands the range of tsetse flies, increasing Trypanosoma brucei transmission."
    },
    {
        "id": 172,
        "question": "Which parasite is studied for its impact on malnutrition in children?",
        "options": [
            "Ascaris lumbricoides",
            "Trichomonas vaginalis",
            "Leishmania donovani",
            "Plasmodium falciparum"
        ],
        "answer": "Ascaris lumbricoides",
        "difficulty": "medium",
        "topic": "Case Studies",
        "explanation": "Ascaris lumbricoides is studied for its role in causing malnutrition in children due to nutrient competition."
    },
    {
        "id": 173,
        "question": "What is a common feature of Giardia lamblia trophozoites under microscopy?",
        "options": [
            "Pear-shaped with two nuclei",
            "Round with a single nucleus",
            "Spindle-shaped with no nuclei",
            "Oval with eight nuclei"
        ],
        "answer": "Pear-shaped with two nuclei",
        "difficulty": "medium",
        "topic": "Practical Parasitology",
        "explanation": "Giardia lamblia trophozoites are pear-shaped with two nuclei, resembling a face, visible in stool microscopy."
    },
    {
        "id": 174,
        "question": "Which drug is used for treating onchocerciasis?",
        "options": [
            "Ivermectin",
            "Metronidazole",
            "Praziquantel",
            "Chloroquine"
        ],
        "answer": "Ivermectin",
        "difficulty": "medium",
        "topic": "Treatment",
        "explanation": "Ivermectin is the primary drug for treating onchocerciasis, caused by Onchocerca volvulus."
    },
    {
        "id": 175,
        "question": "What is a preventive measure for Taenia solium infection?",
        "options": [
            "Cooking pork thoroughly",
            "Using mosquito nets",
            "Drinking untreated water",
            "Avoiding vaccinations"
        ],
        "answer": "Cooking pork thoroughly",
        "difficulty": "medium",
        "topic": "Control",
        "explanation": "Cooking pork thoroughly kills Taenia solium cysticerci, preventing taeniasis and cysticercosis."
    },
    {
        "id": 176,
        "question": "Which parasite is associated with chronic liver disease?",
        "options": [
            "Clonorchis sinensis",
            "Enterobius vermicularis",
            "Trichomonas vaginalis",
            "Plasmodium vivax"
        ],
        "answer": "Clonorchis sinensis",
        "difficulty": "medium",
        "topic": "Pathogenesis",
        "explanation": "Clonorchis sinensis, a liver fluke, can cause chronic liver disease, including cholangiocarcinoma."
    },
    {
        "id": 177,
        "question": "What is a diagnostic method for Onchocerca volvulus?",
        "options": [
            "Skin snip biopsy",
            "Stool microscopy",
            "Urine analysis",
            "Blood culture"
        ],
        "answer": "Skin snip biopsy",
        "difficulty": "medium",
        "topic": "Diagnostic Parasitology",
        "explanation": "Skin snip biopsies are used to detect Onchocerca volvulus microfilariae in onchocerciasis."
    },
    {
        "id": 178,
        "question": "Which arthropod transmits Loa loa?",
        "options": [
            "Deer fly",
            "Mosquito",
            "Sandfly",
            "Tick"
        ],
        "answer": "Deer fly",
        "difficulty": "medium",
        "topic": "Arthropod Vectors",
        "explanation": "Deer flies (Chrysops species) transmit Loa loa, causing loiasis."
    },
    {
        "id": 179,
        "question": "What is a common symptom of hookworm infection?",
        "options": [
            "Anemia",
            "Seizures",
            "Fever only",
            "Skin rash"
        ],
        "answer": "Anemia",
        "difficulty": "medium",
        "topic": "Pathogenesis",
        "explanation": "Hookworms, such as Necator americanus, cause anemia due to blood loss in the intestines."
    },
    {
        "id": 180,
        "question": "Which parasite is a focus of mass drug administration programs?",
        "options": [
            "Schistosoma mansoni",
            "Trypanosoma cruzi",
            "Leishmania major",
            "Plasmodium falciparum"
        ],
        "answer": "Schistosoma mansoni",
        "difficulty": "medium",
        "topic": "Epidemiology",
        "explanation": "Schistosoma mansoni is targeted in mass drug administration programs with praziquantel to reduce schistosomiasis burden."
    },
    {
        "id": 181,
        "question": "What is a research challenge for malaria control?",
        "options": [
            "Antibiotic resistance",
            "Insecticide resistance",
            "Viral mutations",
            "Surgical complications"
        ],
        "answer": "Insecticide resistance",
        "difficulty": "medium",
        "topic": "Research",
        "explanation": "Insecticide resistance in Anopheles mosquitoes is a major challenge for malaria control."
    },
    {
        "id": 182,
        "question": "Which parasite is linked to biliary obstruction?",
        "options": [
            "Fasciola hepatica",
            "Enterobius vermicularis",
            "Trichomonas vaginalis",
            "Toxoplasma gondii"
        ],
        "answer": "Fasciola hepatica",
        "difficulty": "medium",
        "topic": "Pathogenesis",
        "explanation": "Fasciola hepatica, a liver fluke, can cause biliary obstruction due to its migration in the bile ducts."
    },
    {
        "id": 183,
        "question": "What is a characteristic feature of Taenia solium eggs under microscopy?",
        "options": [
            "Radial striations",
            "Mammillated shell",
            "Lateral spine",
            "Polar plugs"
        ],
        "answer": "Radial striations",
        "difficulty": "medium",
        "topic": "Practical Parasitology",
        "explanation": "Taenia solium eggs have radial striations, indistinguishable from Taenia saginata eggs under microscopy."
    },
    {
        "id": 184,
        "question": "Which drug is used to treat Echinococcus granulosus infection?",
        "options": [
            "Albendazole",
            "Metronidazole",
            "Chloroquine",
            "Suramin"
        ],
        "answer": "Albendazole",
        "difficulty": "medium",
        "topic": "Treatment",
        "explanation": "Albendazole is used to treat hydatid disease caused by Echinococcus granulosus, often combined with surgery."
    },
    {
        "id": 185,
        "question": "What is a preventive measure for Giardia lamblia infection?",
        "options": [
            "Boiling drinking water",
            "Using mosquito nets",
            "Avoiding vaccinations",
            "Eating raw meat"
        ],
        "answer": "Boiling drinking water",
        "difficulty": "medium",
        "topic": "Control",
        "explanation": "Boiling drinking water kills Giardia lamblia cysts, preventing giardiasis."
    },
    {
        "id": 186,
        "question": "Which parasite is associated with chronic diarrhea in AIDS patients?",
        "options": [
            "Cryptosporidium parvum",
            "Trypanosoma brucei",
            "Wuchereria bancrofti",
            "Onchocerca volvulus"
        ],
        "answer": "Cryptosporidium parvum",
        "difficulty": "medium",
        "topic": "Case Studies",
        "explanation": "Cryptosporidium parvum causes chronic diarrhea in AIDS patients due to their immunocompromised state."
    },
    {
        "id": 187,
        "question": "What is a diagnostic feature of Balantidium coli under microscopy?",
        "options": [
            "Large ciliated trophozoites",
            "Small encysted larvae",
            "Barrel-shaped eggs",
            "Microfilariae"
        ],
        "answer": "Large ciliated trophozoites",
        "difficulty": "medium",
        "topic": "Practical Parasitology",
        "explanation": "Balantidium coli trophozoites are large and ciliated, easily identified in stool microscopy."
    },
    {
        "id": 188,
        "question": "Which arthropod is a vector for Trypanosoma brucei?",
        "options": [
            "Tsetse fly",
            "Mosquito",
            "Sandfly",
            "Tick"
        ],
        "answer": "Tsetse fly",
        "difficulty": "medium",
        "topic": "Arthropod Vectors",
        "explanation": "Tsetse flies (Glossina species) transmit Trypanosoma brucei, causing African sleeping sickness."
    },
    {
        "id": 189,
        "question": "What is a common complication of Plasmodium falciparum malaria?",
        "options": [
            "Cerebral malaria",
            "Lymphatic obstruction",
            "Skin ulcers",
            "Bone fractures"
        ],
        "answer": "Cerebral malaria",
        "difficulty": "medium",
        "topic": "Pathogenesis",
        "explanation": "Plasmodium falciparum can cause cerebral malaria, a life-threatening complication involving brain dysfunction."
    },
    {
        "id": 190,
        "question": "Which parasite is a focus of zoonotic disease research?",
        "options": [
            "Toxoplasma gondii",
            "Enterobius vermicularis",
            "Trichomonas vaginalis",
            "Ascaris lumbricoides"
        ],
        "answer": "Toxoplasma gondii",
        "difficulty": "medium",
        "topic": "Research",
        "explanation": "Toxoplasma gondii is a focus of zoonotic disease research due to its transmission from animals to humans."
    },
    {
        "id": 191,
        "question": "What is a diagnostic method for Fasciolopsis buski?",
        "options": [
            "Stool microscopy for eggs",
            "Blood smear",
            "Urine analysis",
            "Skin biopsy"
        ],
        "answer": "Stool microscopy for eggs",
        "difficulty": "medium",
        "topic": "Diagnostic Parasitology",
        "explanation": "Fasciolopsis buski is diagnosed by detecting large, operculated eggs in stool samples."
    },
    {
        "id": 192,
        "question": "Which drug is used to treat Diphyllobothrium latum infection?",
        "options": [
            "Praziquantel",
            "Metronidazole",
            "Ivermectin",
            "Chloroquine"
        ],
        "answer": "Praziquantel",
        "difficulty": "medium",
        "topic": "Treatment",
        "explanation": "Praziquantel is effective against Diphyllobothrium latum, the fish tapeworm."
    },
    {
        "id": 193,
        "question": "What is a preventive measure for Schistosoma infection?",
        "options": [
            "Avoiding contact with contaminated water",
            "Using mosquito nets",
            "Eating raw fish",
            "Avoiding vaccinations"
        ],
        "answer": "Avoiding contact with contaminated water",
        "difficulty": "medium",
        "topic": "Control",
        "explanation": "Avoiding contact with freshwater containing Schistosoma cercariae prevents schistosomiasis."
    },
    {
        "id": 194,
        "question": "Which parasite is linked to neurological symptoms in immunocompromised patients?",
        "options": [
            "Toxoplasma gondii",
            "Enterobius vermicularis",
            "Trichomonas vaginalis",
            "Ascaris lumbricoides"
        ],
        "answer": "Toxoplasma gondii",
        "difficulty": "medium",
        "topic": "Case Studies",
        "explanation": "Toxoplasma gondii can cause neurological symptoms like encephalitis in immunocompromised patients."
    },
    {
        "id": 195,
        "question": "What is a characteristic feature of Strongyloides stercoralis under microscopy?",
        "options": [
            "Rhabditiform larvae in stool",
            "Cysts with four nuclei",
            "Eggs with lateral spines",
            "Microfilariae in blood"
        ],
        "answer": "Rhabditiform larvae in stool",
        "difficulty": "medium",
        "topic": "Practical Parasitology",
        "explanation": "Strongyloides stercoralis rhabditiform larvae are detected in stool, aiding diagnosis."
    },
    {
        "id": 196,
        "question": "Which arthropod is a vector for Leishmania species?",
        "options": [
            "Sandfly",
            "Mosquito",
            "Tsetse fly",
            "Tick"
        ],
        "answer": "Sandfly",
        "difficulty": "medium",
        "topic": "Arthropod Vectors",
        "explanation": "Sandflies (Phlebotomus species) transmit Leishmania, causing leishmaniasis."
    },
    {
        "id": 197,
        "question": "What is a common symptom of Trichinella spiralis infection?",
        "options": [
            "Muscle pain",
            "Diarrhea only",
            "Fever only",
            "Skin rash"
        ],
        "answer": "Muscle pain",
        "difficulty": "medium",
        "topic": "Pathogenesis",
        "explanation": "Trichinella spiralis causes muscle pain due to larval encystment in muscle tissue."
    },
    {
        "id": 198,
        "question": "Which parasite is a focus of eradication programs?",
        "options": [
            "Dracunculus medinensis",
            "Trypanosoma cruzi",
            "Leishmania major",
            "Plasmodium falciparum"
        ],
        "answer": "Dracunculus medinensis",
        "difficulty": "medium",
        "topic": "Epidemiology",
        "explanation": "Dracunculus medinensis is targeted for eradication through water safety and case management programs."
    },
    {
        "id": 199,
        "question": "What is a research focus for Chagas disease control?",
        "options": [
            "Vector control",
            "Antibiotic development",
            "Viral therapies",
            "Surgical techniques"
        ],
        "answer": "Vector control",
        "difficulty": "medium",
        "topic": "Research",
        "explanation": "Vector control, targeting reduviid bugs, is a key research focus for Chagas disease prevention."
    },
    {
        "id": 200,
        "question": "Which parasite is associated with anemia in children?",
        "options": [
            "Necator americanus",
            "Trichomonas vaginalis",
            "Leishmania donovani",
            "Toxoplasma gondii"
        ],
        "answer": "Necator americanus",
        "difficulty": "medium",
        "topic": "Case Studies",
        "explanation": "Necator americanus, a hookworm, causes anemia in children due to intestinal blood loss."
    },
    {
        "id": 201,
        "question": "What is a diagnostic feature of Wuchereria bancrofti under microscopy?",
        "options": [
            "Microfilariae with a sheath",
            "Cysts with four nuclei",
            "Eggs with lateral spines",
            "Rhabditiform larvae"
        ],
        "answer": "Microfilariae with a sheath",
        "difficulty": "medium",
        "topic": "Practical Parasitology",
        "explanation": "Wuchereria bancrofti microfilariae have a sheath, visible in blood smears, aiding diagnosis."
    },
    {
        "id": 202,
        "question": "Which drug is used to treat Leishmania infections?",
        "options": [
            "Amphotericin B",
            "Metronidazole",
            "Ivermectin",
            "Chloroquine"
        ],
        "answer": "Amphotericin B",
        "difficulty": "medium",
        "topic": "Treatment",
        "explanation": "Amphotericin B is used to treat severe forms of leishmaniasis, particularly visceral leishmaniasis."
    },
    {
        "id": 203,
        "question": "What is a preventive measure for Trypanosoma cruzi infection?",
        "options": [
            "Insecticide spraying",
            "Water filtration",
            "Antibiotic prophylaxis",
            "Vaccination"
        ],
        "answer": "Insecticide spraying",
        "difficulty": "medium",
        "topic": "Control",
        "explanation": "Insecticide spraying reduces reduviid bug populations, preventing Trypanosoma cruzi transmission."
    },
    {
        "id": 204,
        "question": "Which parasite is linked to congenital blindness?",
        "options": [
            "Toxoplasma gondii",
            "Enterobius vermicularis",
            "Trichomonas vaginalis",
            "Ascaris lumbricoides"
        ],
        "answer": "Toxoplasma gondii",
        "difficulty": "medium",
        "topic": "Case Studies",
        "explanation": "Toxoplasma gondii can cause congenital blindness due to chorioretinitis in infected fetuses."
    },
    {
        "id": 205,
        "question": "What is a characteristic feature of Schistosoma japonicum eggs?",
        "options": [
            "Small lateral knob",
            "Terminal spine",
            "Mammillated shell",
            "Radial striations"
        ],
        "answer": "Small lateral knob",
        "difficulty": "medium",
        "topic": "Practical Parasitology",
        "explanation": "Schistosoma japonicum eggs have a small lateral knob, distinguishing them in stool microscopy."
    },
    {
        "id": 206,
        "question": "Which arthropod is a vector for Trypanosoma cruzi?",
        "options": [
            "Reduviid bug",
            "Mosquito",
            "Tsetse fly",
            "Sandfly"
        ],
        "answer": "Reduviid bug",
        "difficulty": "medium",
        "topic": "Arthropod Vectors",
        "explanation": "Reduviid bugs, or kissing bugs, transmit Trypanosoma cruzi, causing Chagas disease."
    },
    {
        "id": 207,
        "question": "What is a common symptom of Fasciolopsis buski infection?",
        "options": [
            "Abdominal pain",
            "Seizures",
            "Fever only",
            "Skin rash"
        ],
        "answer": "Abdominal pain",
        "difficulty": "medium",
        "topic": "Pathogenesis",
        "explanation": "Fasciolopsis buski, an intestinal fluke, causes abdominal pain due to its attachment to the intestinal wall."
    },
    {
        "id": 208,
        "question": "Which parasite is a focus of waterborne disease control?",
        "options": [
            "Giardia lamblia",
            "Trypanosoma cruzi",
            "Leishmania major",
            "Plasmodium falciparum"
        ],
        "answer": "Giardia lamblia",
        "difficulty": "medium",
        "topic": "Epidemiology",
        "explanation": "Giardia lamblia is a focus of waterborne disease control due to its transmission via contaminated water."
    },
    {
        "id": 209,
        "question": "What is a research focus for hookworm control?",
        "options": [
            "Vaccine development",
            "Antibiotic resistance",
            "Viral therapies",
            "Surgical techniques"
        ],
        "answer": "Vaccine development",
        "difficulty": "medium",
        "topic": "Research",
        "explanation": "Vaccine development is a research focus for controlling hookworm infections like Necator americanus."
    },
    {
        "id": 210,
        "question": "Which parasite is linked to growth stunting in children?",
        "options": [
            "Trichuris trichiura",
            "Trichomonas vaginalis",
            "Leishmania donovani",
            "Toxoplasma gondii"
        ],
        "answer": "Trichuris trichiura",
        "difficulty": "medium",
        "topic": "Case Studies",
        "explanation": "Trichuris trichiura, the whipworm, is linked to growth stunting in children due to chronic infection."
    },
    {
        "id": 211,
        "question": "What is a diagnostic feature of Diphyllobothrium latum under microscopy?",
        "options": [
            "Operculated eggs",
            "Cysts with four nuclei",
            "Eggs with lateral spines",
            "Rhabditiform larvae"
        ],
        "answer": "Operculated eggs",
        "difficulty": "medium",
        "topic": "Practical Parasitology",
        "explanation": "Diphyllobothrium latum eggs are operculated, visible in stool microscopy."
    },
    {
        "id": 212,
        "question": "Which drug is used to treat Hymenolepis nana infection?",
        "options": [
            "Praziquantel",
            "Metronidazole",
            "Ivermectin",
            "Chloroquine"
        ],
        "answer": "Praziquantel",
        "difficulty": "medium",
        "topic": "Treatment",
        "explanation": "Praziquantel is effective against Hymenolepis nana, the dwarf tapeworm."
    },
    {
        "id": 213,
        "question": "What is a preventive measure for Echinococcus granulosus infection?",
        "options": [
            "Deworming dogs",
            "Using mosquito nets",
            "Drinking untreated water",
            "Eating raw meat"
        ],
        "answer": "Deworming dogs",
        "difficulty": "medium",
        "topic": "Control",
        "explanation": "Deworming dogs reduces the transmission of Echinococcus granulosus eggs to humans."
    },
    {
        "id": 214,
        "question": "Which parasite is linked to severe anemia in pregnant women?",
        "options": [
            "Ancylostoma duodenale",
            "Enterobius vermicularis",
            "Trichomonas vaginalis",
            "Toxoplasma gondii"
        ],
        "answer": "Ancylostoma duodenale",
        "difficulty": "medium",
        "topic": "Case Studies",
        "explanation": "Ancylostoma duodenale, a hookworm, causes severe anemia in pregnant women due to blood loss."
    },
    {
        "id": 215,
        "question": "What is a characteristic feature of Trichomonas vaginalis under microscopy?",
        "options": [
            "Jerky motility",
            "Encysted forms",
            "Eggs with spines",
            "Microfilariae"
        ],
        "answer": "Jerky motility",
        "difficulty": "medium",
        "topic": "Practical Parasitology",
        "explanation": "Trichomonas vaginalis trophozoites exhibit jerky motility in wet mounts, aiding diagnosis."
    },
    {
        "id": 216,
        "question": "Which arthropod is a vector for Plasmodium falciparum?",
        "options": [
            "Anopheles mosquito",
            "Tsetse fly",
            "Sandfly",
            "Reduviid bug"
        ],
        "answer": "Anopheles mosquito",
        "difficulty": "medium",
        "topic": "Arthropod Vectors",
        "explanation": "Anopheles mosquitoes transmit Plasmodium falciparum, causing severe malaria."
    },
    {
        "id": 217,
        "question": "What is a common symptom of Clonorchis sinensis infection?",
        "options": [
            "Jaundice",
            "Seizures",
            "Fever only",
            "Skin rash"
        ],
        "answer": "Jaundice",
        "difficulty": "medium",
        "topic": "Pathogenesis",
        "explanation": "Clonorchis sinensis, a liver fluke, can cause jaundice due to bile duct obstruction."
    },
    {
        "id": 218,
        "question": "Which parasite is a focus of soil-transmitted helminth control?",
        "options": [
            "Ascaris lumbricoides",
            "Trypanosoma cruzi",
            "Leishmania major",
            "Plasmodium falciparum"
        ],
        "answer": "Ascaris lumbricoides",
        "difficulty": "medium",
        "topic": "Epidemiology",
        "explanation": "Ascaris lumbricoides is a soil-transmitted helminth targeted in control programs with deworming."
    },
    {
        "id": 219,
        "question": "What is a research focus for onchocerciasis control?",
        "options": [
            "Vector control",
            "Antibiotic development",
            "Viral therapies",
            "Surgical techniques"
        ],
        "answer": "Vector control",
        "difficulty": "medium",
        "topic": "Research",
        "explanation": "Vector control, targeting blackflies, is a research focus for onchocerciasis prevention."
    },
    {
        "id": 220,
        "question": "Which parasite is linked to cognitive impairment in children?",
        "options": [
            "Trichuris trichiura",
            "Trichomonas vaginalis",
            "Leishmania donovani",
            "Toxoplasma gondii"
        ],
        "answer": "Trichuris trichiura",
        "difficulty": "medium",
        "topic": "Case Studies",
        "explanation": "Trichuris trichiura infections are linked to cognitive impairment in children due to chronic malnutrition."
    },
    {
        "id": 221,
        "question": "What is a diagnostic feature of Fasciola hepatica under microscopy?",
        "options": [
            "Operculated eggs",
            "Cysts with four nuclei",
            "Eggs with lateral spines",
            "Rhabditiform larvae"
        ],
        "answer": "Operculated eggs",
        "difficulty": "medium",
        "topic": "Practical Parasitology",
        "explanation": "Fasciola hepatica eggs are operculated, visible in stool microscopy."
    },
    {
        "id": 222,
        "question": "Which drug is used to treat Paragonimus westermani infection?",
        "options": [
            "Praziquantel",
            "Metronidazole",
            "Ivermectin",
            "Chloroquine"
        ],
        "answer": "Praziquantel",
        "difficulty": "medium",
        "topic": "Treatment",
        "explanation": "Praziquantel is effective against Paragonimus westermani, the lung fluke."
    },
    {
        "id": 223,
        "question": "What is the primary mode of transmission for Fasciolopsis buski?",
        "options": [
            "Consumption of contaminated aquatic plants",
            "Mosquito bite",
            "Direct skin contact",
            "Inhalation of spores"
        ],
        "answer": "Consumption of contaminated aquatic plants",
        "difficulty": "medium",
        "topic": "Trematodes",
        "explanation": "Fasciolopsis buski is transmitted through consumption of aquatic plants contaminated with metacercariae."
    },
    {
        "id": 224,
        "question": "Which parasite causes swimmer’s itch?",
        "options": [
            "Schistosoma cercariae",
            "Plasmodium falciparum",
            "Trypanosoma cruzi",
            "Giardia lamblia"
        ],
        "answer": "Schistosoma cercariae",
        "difficulty": "medium",
        "topic": "Trematodes",
        "explanation": "Swimmer’s itch is caused by Schistosoma cercariae penetrating the skin during contact with contaminated water."
    },
    {
        "id": 225,
        "question": "What is a common diagnostic method for Taenia saginata?",
        "options": [
            "Stool microscopy for proglottids",
            "Blood smear",
            "Urine analysis",
            "Skin biopsy"
        ],
        "answer": "Stool microscopy for proglottids",
        "difficulty": "medium",
        "topic": "Cestodes",
        "explanation": "Taenia saginata is diagnosed by identifying proglottids or eggs in stool samples via microscopy."
    },
    {
        "id": 226,
        "question": "Which drug is used to treat Trypanosoma cruzi infection?",
        "options": [
            "Benznidazole",
            "Praziquantel",
            "Ivermectin",
            "Metronidazole"
        ],
        "answer": "Benznidazole",
        "difficulty": "medium",
        "topic": "Flagellates",
        "explanation": "Benznidazole is a primary treatment for Trypanosoma cruzi infection, particularly in acute Chagas disease."
    },
    {
        "id": 227,
        "question": "What is a key feature of Balantidium coli cysts?",
        "options": [
            "Large, ciliated, with a thick wall",
            "Small, with four nuclei",
            "Oval, with a lateral spine",
            "Round, with radial striations"
        ],
        "answer": "Large, ciliated, with a thick wall",
        "difficulty": "medium",
        "topic": "Ciliates",
        "explanation": "Balantidium coli cysts are large, with a thick wall, and may retain cilia, visible in stool microscopy."
    },
    {
        "id": 228,
        "question": "Which parasite is associated with ocular toxoplasmosis?",
        "options": [
            "Toxoplasma gondii",
            "Plasmodium vivax",
            "Leishmania donovani",
            "Trichomonas vaginalis"
        ],
        "answer": "Toxoplasma gondii",
        "difficulty": "medium",
        "topic": "Sporozoans",
        "explanation": "Toxoplasma gondii can cause ocular toxoplasmosis, leading to vision impairment due to retinal lesions."
    },
    {
        "id": 229,
        "question": "What is a preventive measure for hookworm infection?",
        "options": [
            "Wearing shoes in endemic areas",
            "Using mosquito nets",
            "Eating raw meat",
            "Drinking untreated water"
        ],
        "answer": "Wearing shoes in endemic areas",
        "difficulty": "medium",
        "topic": "Control",
        "explanation": "Wearing shoes prevents hookworm larvae, such as Necator americanus, from penetrating the skin."
    },
    {
        "id": 230,
        "question": "Which nematode is diagnosed using the Scotch tape test?",
        "options": [
            "Enterobius vermicularis",
            "Ascaris lumbricoides",
            "Trichuris trichiura",
            "Strongyloides stercoralis"
        ],
        "answer": "Enterobius vermicularis",
        "difficulty": "medium",
        "topic": "Nematodes",
        "explanation": "The Scotch tape test collects Enterobius vermicularis eggs from the perianal area for diagnosis."
    },
    {
        "id": 231,
        "question": "What is a common symptom of visceral leishmaniasis?",
        "options": [
            "Splenomegaly",
            "Skin rash",
            "Diarrhea only",
            "Joint pain"
        ],
        "answer": "Splenomegaly",
        "difficulty": "medium",
        "topic": "Flagellates",
        "explanation": "Visceral leishmaniasis, caused by Leishmania donovani, commonly causes splenomegaly due to parasite accumulation."
    },
    {
        "id": 232,
        "question": "Which parasite is transmitted by ingesting undercooked fish?",
        "options": [
            "Diphyllobothrium latum",
            "Taenia solium",
            "Echinococcus granulosus",
            "Hymenolepis nana"
        ],
        "answer": "Diphyllobothrium latum",
        "difficulty": "medium",
        "topic": "Cestodes",
        "explanation": "Diphyllobothrium latum is transmitted through undercooked freshwater fish, causing tapeworm infection."
    },
    {
        "id": 233,
        "question": "What is a diagnostic method for Wuchereria bancrofti?",
        "options": [
            "Nighttime blood smear",
            "Stool microscopy",
            "Urine analysis",
            "Skin biopsy"
        ],
        "answer": "Nighttime blood smear",
        "difficulty": "medium",
        "topic": "Nematodes",
        "explanation": "Nighttime blood smears detect Wuchereria bancrofti microfilariae due to their nocturnal periodicity."
    },
    {
        "id": 234,
        "question": "Which drug is used to treat Cyclospora cayetanensis infection?",
        "options": [
            "Trimethoprim-sulfamethoxazole",
            "Metronidazole",
            "Ivermectin",
            "Praziquantel"
        ],
        "answer": "Trimethoprim-sulfamethoxazole",
        "difficulty": "medium",
        "topic": "Sporozoans",
        "explanation": "Trimethoprim-sulfamethoxazole is the primary treatment for Cyclospora cayetanensis infection."
    },
    {
        "id": 235,
        "question": "What is a common symptom of Paragonimus westermani infection?",
        "options": [
            "Hemoptysis",
            "Diarrhea only",
            "Fever only",
            "Skin rash"
        ],
        "answer": "Hemoptysis",
        "difficulty": "medium",
        "topic": "Trematodes",
        "explanation": "Paragonimus westermani, a lung fluke, causes hemoptysis due to lung tissue damage."
    },
    {
        "id": 236,
        "question": "Which arthropod is associated with typhus transmission?",
        "options": [
            "Lice",
            "Mosquitoes",
            "Sandflies",
            "Ticks"
        ],
        "answer": "Lice",
        "difficulty": "medium",
        "topic": "Ectoparasites",
        "explanation": "Body lice transmit Rickettsia prowazekii, causing epidemic typhus."
    },
    {
        "id": 237,
        "question": "What is a preventive measure for Trichinella spiralis infection?",
        "options": [
            "Cooking pork thoroughly",
            "Using mosquito nets",
            "Drinking untreated water",
            "Avoiding vaccinations"
        ],
        "answer": "Cooking pork thoroughly",
        "difficulty": "medium",
        "topic": "Control",
        "explanation": "Cooking pork thoroughly kills Trichinella spiralis larvae, preventing trichinosis."
    },
    {
        "id": 238,
        "question": "Which parasite causes Katayama fever in acute schistosomiasis?",
        "options": [
            "Schistosoma japonicum",
            "Plasmodium falciparum",
            "Trypanosoma cruzi",
            "Giardia lamblia"
        ],
        "answer": "Schistosoma japonicum",
        "difficulty": "medium",
        "topic": "Trematodes",
        "explanation": "Schistosoma japonicum can cause Katayama fever, an acute immune response during early infection."
    },
    {
        "id": 239,
        "question": "What is a diagnostic feature of Hymenolepis nana eggs?",
        "options": [
            "Polar filaments",
            "Mammillated shell",
            "Lateral spine",
            "Operculated lid"
        ],
        "answer": "Polar filaments",
        "difficulty": "medium",
        "topic": "Cestodes",
        "explanation": "Hymenolepis nana eggs have polar filaments, visible in stool microscopy."
    },
    {
        "id": 240,
        "question": "Which drug is used to treat Strongyloides stercoralis infection?",
        "options": [
            "Ivermectin",
            "Metronidazole",
            "Praziquantel",
            "Chloroquine"
        ],
        "answer": "Ivermectin",
        "difficulty": "medium",
        "topic": "Nematodes",
        "explanation": "Ivermectin is the primary treatment for Strongyloides stercoralis infections."
    },
    {
        "id": 241,
        "question": "What is a common symptom of Loa loa infection?",
        "options": [
            "Calabar swellings",
            "Diarrhea only",
            "Fever only",
            "Skin ulcers"
        ],
        "answer": "Calabar swellings",
        "difficulty": "medium",
        "topic": "Nematodes",
        "explanation": "Loa loa causes Calabar swellings, transient subcutaneous edema due to worm migration."
    },
    {
        "id": 242,
        "question": "Which parasite is transmitted by sandflies?",
        "options": [
            "Leishmania donovani",
            "Plasmodium falciparum",
            "Trypanosoma brucei",
            "Wuchereria bancrofti"
        ],
        "answer": "Leishmania donovani",
        "difficulty": "medium",
        "topic": "Flagellates",
        "explanation": "Leishmania donovani, causing visceral leishmaniasis, is transmitted by sandflies."
    },
    {
        "id": 243,
        "question": "What is a diagnostic method for Echinococcus multilocularis?",
        "options": [
            "Imaging for alveolar cysts",
            "Stool microscopy",
            "Blood smear",
            "Urine analysis"
        ],
        "answer": "Imaging for alveolar cysts",
        "difficulty": "medium",
        "topic": "Cestodes",
        "explanation": "Imaging, such as CT or MRI, detects alveolar cysts caused by Echinococcus multilocularis."
    },
    {
        "id": 244,
        "question": "Which drug is used to treat Balantidium coli infection?",
        "options": [
            "Tetracycline",
            "Praziquantel",
            "Ivermectin",
            "Chloroquine"
        ],
        "answer": "Tetracycline",
        "difficulty": "medium",
        "topic": "Ciliates",
        "explanation": "Tetracycline is effective against Balantidium coli, treating balantidiasis."
    },
    {
        "id": 245,
        "question": "What is a preventive measure for Plasmodium falciparum infection?",
        "options": [
            "Chemoprophylaxis",
            "Water filtration",
            "Antibiotic prophylaxis",
            "Eating raw fish"
        ],
        "answer": "Chemoprophylaxis",
        "difficulty": "medium",
        "topic": "Control",
        "explanation": "Chemoprophylaxis with drugs like atovaquone-proguanil prevents Plasmodium falciparum malaria in travelers."
    },
    {
        "id": 246,
        "question": "Which parasite is associated with megaloblastic anemia?",
        "options": [
            "Diphyllobothrium latum",
            "Schistosoma mansoni",
            "Trypanosoma cruzi",
            "Giardia lamblia"
        ],
        "answer": "Diphyllobothrium latum",
        "difficulty": "medium",
        "topic": "Cestodes",
        "explanation": "Diphyllobothrium latum causes megaloblastic anemia by competing for vitamin B12."
    },
    {
        "id": 247,
        "question": "What is a diagnostic feature of Trichuris trichiura eggs?",
        "options": [
            "Barrel-shaped with polar plugs",
            "Mammillated shell",
            "Polar filaments",
            "Lateral spine"
        ],
        "answer": "Barrel-shaped with polar plugs",
        "difficulty": "medium",
        "topic": "Nematodes",
        "explanation": "Trichuris trichiura eggs are barrel-shaped with polar plugs, visible in stool microscopy."
    },
    {
        "id": 248,
        "question": "Which arthropod is a vector for Babesia species?",
        "options": [
            "Ticks",
            "Mosquitoes",
            "Sandflies",
            "Fleas"
        ],
        "answer": "Ticks",
        "difficulty": "medium",
        "topic": "Arthropod Vectors",
        "explanation": "Ticks, particularly Ixodes species, transmit Babesia, causing babesiosis."
    },
    {
        "id": 249,
        "question": "What is a common symptom of Ascaris lumbricoides infection?",
        "options": [
            "Abdominal pain",
            "Skin rash only",
            "Fever only",
            "Joint pain"
        ],
        "answer": "Abdominal pain",
        "difficulty": "medium",
        "topic": "Nematodes",
        "explanation": "Ascaris lumbricoides causes abdominal pain due to intestinal obstruction or migration."
    },
    {
        "id": 250,
        "question": "Which parasite is a focus of neglected tropical disease programs?",
        "options": [
            "Onchocerca volvulus",
            "Plasmodium falciparum",
            "Trypanosoma cruzi",
            "Giardia lamblia"
        ],
        "answer": "Onchocerca volvulus",
        "difficulty": "medium",
        "topic": "Epidemiology",
        "explanation": "Onchocerca volvulus, causing river blindness, is a neglected tropical disease targeted for control."
    },
    {
        "id": 251,
        "question": "What is a research focus for Toxoplasma gondii?",
        "options": [
            "Congenital transmission",
            "Antibiotic resistance",
            "Viral therapies",
            "Surgical interventions"
        ],
        "answer": "Congenital transmission",
        "difficulty": "medium",
        "topic": "Research",
        "explanation": "Research on Toxoplasma gondii focuses on preventing congenital transmission to reduce fetal harm."
    },
    {
        "id": 252,
        "question": "Which parasite is linked to urinary tract infections?",
        "options": [
            "Schistosoma haematobium",
            "Enterobius vermicularis",
            "Trichomonas vaginalis",
            "Ascaris lumbricoides"
        ],
        "answer": "Schistosoma haematobium",
        "difficulty": "medium",
        "topic": "Trematodes",
        "explanation": "Schistosoma haematobium causes urinary schistosomiasis, leading to hematuria and urinary tract infections."
    },
    {
        "id": 253,
        "question": "What is a diagnostic feature of Giardia lamblia under microscopy?",
        "options": [
            "Cysts with four nuclei",
            "Eggs with polar plugs",
            "Microfilariae with a sheath",
            "Operculated eggs"
        ],
        "answer": "Cysts with four nuclei",
        "difficulty": "medium",
        "topic": "Practical Parasitology",
        "explanation": "Giardia lamblia cysts have four nuclei, aiding identification in stool samples."
    },
    {
        "id": 254,
        "question": "Which drug is used to treat Clonorchis sinensis infection?",
        "options": [
            "Praziquantel",
            "Metronidazole",
            "Ivermectin",
            "Chloroquine"
        ],
        "answer": "Praziquantel",
        "difficulty": "medium",
        "topic": "Trematodes",
        "explanation": "Praziquantel is the primary treatment for Clonorchis sinensis, a liver fluke."
    },
    {
        "id": 255,
        "question": "What is a preventive measure for Leishmania infection?",
        "options": [
            "Insecticide-treated nets",
            "Water filtration",
            "Antibiotic prophylaxis",
            "Eating raw fish"
        ],
        "answer": "Insecticide-treated nets",
        "difficulty": "medium",
        "topic": "Control",
        "explanation": "Insecticide-treated nets reduce sandfly bites, preventing Leishmania transmission."
    },
    {
        "id": 256,
        "question": "Which parasite is linked to chronic fatigue in children?",
        "options": [
            "Ascaris lumbricoides",
            "Trichomonas vaginalis",
            "Leishmania donovani",
            "Toxoplasma gondii"
        ],
        "answer": "Ascaris lumbricoides",
        "difficulty": "medium",
        "topic": "Case Studies",
        "explanation": "Ascaris lumbricoides can cause chronic fatigue in children due to malnutrition and heavy worm burden."
    },
    {
        "id": 257,
        "question": "What is a diagnostic feature of Necator americanus eggs?",
        "options": [
            "Thin-shelled, oval eggs",
            "Mammillated shell",
            "Polar filaments",
            "Lateral spine"
        ],
        "answer": "Thin-shelled, oval eggs",
        "difficulty": "medium",
        "topic": "Practical Parasitology",
        "explanation": "Necator americanus eggs are thin-shelled and oval, visible in stool microscopy."
    },
    {
        "id": 258,
        "question": "Which arthropod is a vector for Wuchereria bancrofti?",
        "options": [
            "Culex mosquito",
            "Tsetse fly",
            "Sandfly",
            "Reduviid bug"
        ],
        "answer": "Culex mosquito",
        "difficulty": "medium",
        "topic": "Arthropod Vectors",
        "explanation": "Culex mosquitoes transmit Wuchereria bancrofti, causing lymphatic filariasis."
    },
    {
        "id": 259,
        "question": "What is a common symptom of Trypanosoma brucei infection?",
        "options": [
            "Sleep disturbances",
            "Diarrhea only",
            "Skin rash only",
            "Joint pain"
        ],
        "answer": "Sleep disturbances",
        "difficulty": "medium",
        "topic": "Flagellates",
        "explanation": "Trypanosoma brucei causes sleep disturbances in African sleeping sickness due to CNS involvement."
    },
    {
        "id": 260,
        "question": "Which parasite is a focus of foodborne disease control?",
        "options": [
            "Taenia solium",
            "Plasmodium falciparum",
            "Trypanosoma cruzi",
            "Onchocerca volvulus"
        ],
        "answer": "Taenia solium",
        "difficulty": "medium",
        "topic": "Epidemiology",
        "explanation": "Taenia solium is targeted in foodborne disease control due to its transmission via undercooked pork."
    },
    {
        "id": 261,
        "question": "What is a research focus for Trypanosoma cruzi?",
        "options": [
            "Vaccine development",
            "Antibiotic resistance",
            "Viral therapies",
            "Surgical interventions"
        ],
        "answer": "Vaccine development",
        "difficulty": "medium",
        "topic": "Research",
        "explanation": "Vaccine development is a research focus for preventing Trypanosoma cruzi infection and Chagas disease."
    },
    {
        "id": 262,
        "question": "Which parasite is linked to liver damage in chronic infections?",
        "options": [
            "Fasciola hepatica",
            "Enterobius vermicularis",
            "Trichomonas vaginalis",
            "Ascaris lumbricoides"
        ],
        "answer": "Fasciola hepatica",
        "difficulty": "medium",
        "topic": "Trematodes",
        "explanation": "Fasciola hepatica causes liver damage in chronic infections due to bile duct invasion."
    },
    {
        "id": 263,
        "question": "What is a diagnostic feature of Onchocerca volvulus under microscopy?",
        "options": [
            "Microfilariae in skin snips",
            "Cysts with four nuclei",
            "Eggs with polar plugs",
            "Operculated eggs"
        ],
        "answer": "Microfilariae in skin snips",
        "difficulty": "medium",
        "topic": "Practical Parasitology",
        "explanation": "Onchocerca volvulus microfilariae are detected in skin snips, confirming onchocerciasis."
    },
    {
        "id": 264,
        "question": "Which drug is used to treat Toxoplasma gondii infection?",
        "options": [
            "Pyrimethamine-sulfadiazine",
            "Praziquantel",
            "Ivermectin",
            "Chloroquine"
        ],
        "answer": "Pyrimethamine-sulfadiazine",
        "difficulty": "medium",
        "topic": "Sporozoans",
        "explanation": "Pyrimethamine-sulfadiazine is the standard treatment for toxoplasmosis caused by Toxoplasma gondii."
    },
    {
        "id": 265,
        "question": "What is a preventive measure for Dracunculus medinensis infection?",
        "options": [
            "Safe drinking water",
            "Using mosquito nets",
            "Antibiotic prophylaxis",
            "Eating raw fish"
        ],
        "answer": "Safe drinking water",
        "difficulty": "medium",
        "topic": "Control",
        "explanation": "Safe drinking water prevents Dracunculus medinensis infection by eliminating contaminated copepods."
    },
    {
        "id": 266,
        "question": "Which parasite is linked to pulmonary symptoms in chronic infections?",
        "options": [
            "Paragonimus westermani",
            "Enterobius vermicularis",
            "Trichomonas vaginalis",
            "Ascaris lumbricoides"
        ],
        "answer": "Paragonimus westermani",
        "difficulty": "medium",
        "topic": "Trematodes",
        "explanation": "Paragonimus westermani causes pulmonary symptoms like hemoptysis in chronic lung fluke infections."
    },
    {
        "id": 267,
        "question": "What is a diagnostic feature of Entamoeba histolytica cysts?",
        "options": [
            "Four nuclei with central karyosomes",
            "Mammillated shell",
            "Polar filaments",
            "Lateral spine"
        ],
        "answer": "Four nuclei with central karyosomes",
        "difficulty": "medium",
        "topic": "Practical Parasitology",
        "explanation": "Entamoeba histolytica cysts have four nuclei with central karyosomes, visible in stool microscopy."
    },
    {
        "id": 268,
        "question": "Which arthropod is a vector for Trypanosoma brucei?",
        "options": [
            "Tsetse fly",
            "Mosquito",
            "Sandfly",
            "Tick"
        ],
        "answer": "Tsetse fly",
        "difficulty": "medium",
        "topic": "Arthropod Vectors",
        "explanation": "Tsetse flies transmit Trypanosoma brucei, causing African sleeping sickness."
    },
    {
        "id": 269,
        "question": "What is a common symptom of Echinococcus granulosus infection?",
        "options": [
            "Liver cysts",
            "Diarrhea only",
            "Fever only",
            "Skin rash"
        ],
        "answer": "Liver cysts",
        "difficulty": "medium",
        "topic": "Cestodes",
        "explanation": "Echinococcus granulosus causes hydatid disease, with liver cysts being a common manifestation."
    },
    {
        "id": 270,
        "question": "Which parasite is a focus of zoonotic disease control?",
        "options": [
            "Echinococcus granulosus",
            "Plasmodium falciparum",
            "Trypanosoma cruzi",
            "Giardia lamblia"
        ],
        "answer": "Echinococcus granulosus",
        "difficulty": "medium",
        "topic": "Epidemiology",
        "explanation": "Echinococcus granulosus is targeted in zoonotic disease control due to its transmission from dogs to humans."
    },
    {
        "id": 271,
        "question": "What is a research focus for lymphatic filariasis?",
        "options": [
            "Mass drug administration",
            "Antibiotic resistance",
            "Viral therapies",
            "Surgical interventions"
        ],
        "answer": "Mass drug administration",
        "difficulty": "medium",
        "topic": "Research",
        "explanation": "Mass drug administration with ivermectin and albendazole is a research focus for lymphatic filariasis control."
    },
    {
        "id": 272,
        "question": "Which parasite is linked to intestinal obstruction in heavy infections?",
        "options": [
            "Ascaris lumbricoides",
            "Trichomonas vaginalis",
            "Leishmania donovani",
            "Toxoplasma gondii"
        ],
        "answer": "Ascaris lumbricoides",
        "difficulty": "medium",
        "topic": "Nematodes",
        "explanation": "Ascaris lumbricoides can cause intestinal obstruction in heavy infections, particularly in children."
    },
    {
        "id": 273,
        "question": "What is a diagnostic feature of Strongyloides stercoralis larvae?",
        "options": [
            "Rhabditiform larvae in stool",
            "Cysts with four nuclei",
            "Eggs with polar plugs",
            "Microfilariae in skin"
        ],
        "answer": "Rhabditiform larvae in stool",
        "difficulty": "medium",
        "topic": "Practical Parasitology",
        "explanation": "Strongyloides stercoralis rhabditiform larvae are detected in stool, confirming infection."
    },
    {
        "id": 274,
        "question": "Which drug is used to treat Schistosoma japonicum infection?",
        "options": [
            "Praziquantel",
            "Metronidazole",
            "Ivermectin",
            "Chloroquine"
        ],
        "answer": "Praziquantel",
        "difficulty": "medium",
        "topic": "Trematodes",
        "explanation": "Praziquantel is the drug of choice for treating Schistosoma japonicum infections."
    },
    {
        "id": 275,
        "question": "What is a preventive measure for Trypanosoma brucei infection?",
        "options": [
            "Tsetse fly control",
            "Water filtration",
            "Antibiotic prophylaxis",
            "Eating raw fish"
        ],
        "answer": "Tsetse fly control",
        "difficulty": "medium",
        "topic": "Control",
        "explanation": "Tsetse fly control, such as insecticide use, prevents Trypanosoma brucei transmission."
    },
    {
        "id": 276,
        "question": "Which parasite is linked to malnutrition in endemic areas?",
        "options": [
            "Trichuris trichiura",
            "Plasmodium falciparum",
            "Trypanosoma cruzi",
            "Giardia lamblia"
        ],
        "answer": "Trichuris trichiura",
        "difficulty": "medium",
        "topic": "Case Studies",
        "explanation": "Trichuris trichiura causes malnutrition in endemic areas due to chronic intestinal infection."
    },
    {
        "id": 277,
        "question": "What is a diagnostic feature of Taenia saginata under microscopy?",
        "options": [
            "Proglottids with many uterine branches",
            "Cysts with four nuclei",
            "Eggs with polar plugs",
            "Microfilariae in skin"
        ],
        "answer": "Proglottids with many uterine branches",
        "difficulty": "medium",
        "topic": "Practical Parasitology",
        "explanation": "Taenia saginata proglottids have numerous uterine branches, distinguishing them from Taenia solium."
    },
    {
        "id": 278,
        "question": "Which arthropod is a vector for Leishmania major?",
        "options": [
            "Sandfly",
            "Mosquito",
            "Tsetse fly",
            "Tick"
        ],
        "answer": "Sandfly",
        "difficulty": "medium",
        "topic": "Arthropod Vectors",
        "explanation": "Sandflies (Phlebotomus species) transmit Leishmania major, causing cutaneous leishmaniasis."
    },
    {
        "id": 279,
        "question": "What is a common symptom of Clonorchis sinensis infection?",
        "options": [
            "Hepatomegaly",
            "Diarrhea only",
            "Fever only",
            "Skin rash"
        ],
        "answer": "Hepatomegaly",
        "difficulty": "medium",
        "topic": "Trematodes",
        "explanation": "Clonorchis sinensis causes hepatomegaly due to liver fluke infection in the bile ducts."
    },
    {
        "id": 280,
        "question": "Which parasite is a focus of waterborne disease control?",
        "options": [
            "Cryptosporidium parvum",
            "Plasmodium falciparum",
            "Trypanosoma cruzi",
            "Onchocerca volvulus"
        ],
        "answer": "Cryptosporidium parvum",
        "difficulty": "medium",
        "topic": "Epidemiology",
        "explanation": "Cryptosporidium parvum is targeted in waterborne disease control due to its transmission via contaminated water."
    },
    {
        "id": 281,
        "question": "What is a research focus for schistosomiasis?",
        "options": [
            "Snail control",
            "Antibiotic resistance",
            "Viral therapies",
            "Surgical interventions"
        ],
        "answer": "Snail control",
        "difficulty": "medium",
        "topic": "Research",
        "explanation": "Snail control is a research focus for preventing schistosomiasis by targeting the intermediate host."
    },
    {
        "id": 282,
        "question": "Which parasite is linked to anemia in endemic areas?",
        "options": [
            "Ancylostoma duodenale",
            "Trichomonas vaginalis",
            "Leishmania donovani",
            "Toxoplasma gondii"
        ],
        "answer": "Ancylostoma duodenale",
        "difficulty": "medium",
        "topic": "Case Studies",
        "explanation": "Ancylostoma duodenale causes anemia in endemic areas due to intestinal blood loss."
    },
    {
        "id": 283,
        "question": "What is a diagnostic feature of Fasciolopsis buski eggs?",
        "options": [
            "Large, operculated eggs",
            "Cysts with four nuclei",
            "Eggs with polar plugs",
            "Microfilariae in skin"
        ],
        "answer": "Large, operculated eggs",
        "difficulty": "medium",
        "topic": "Practical Parasitology",
        "explanation": "Fasciolopsis buski eggs are large and operculated, visible in stool microscopy."
    },
    {
        "id": 284,
        "question": "Which drug is used to treat Enterobius vermicularis infection?",
        "options": [
            "Albendazole",
            "Metronidazole",
            "Praziquantel",
            "Chloroquine"
        ],
        "answer": "Albendazole",
        "difficulty": "medium",
        "topic": "Nematodes",
        "explanation": "Albendazole is the primary treatment for Enterobius vermicularis, the pinworm."
    },
    {
        "id": 285,
        "question": "What is a preventive measure for Taenia saginata infection?",
        "options": [
            "Cooking beef thoroughly",
            "Using mosquito nets",
            "Drinking untreated water",
            "Antibiotic prophylaxis"
        ],
        "answer": "Cooking beef thoroughly",
        "difficulty": "medium",
        "topic": "Control",
        "explanation": "Cooking beef thoroughly kills Taenia saginata cysticerci, preventing taeniasis."
    },
    {
        "id": 286,
        "question": "Which parasite is linked to neurological symptoms in cysticercosis?",
        "options": [
            "Taenia solium",
            "Plasmodium falciparum",
            "Trypanosoma cruzi",
            "Giardia lamblia"
        ],
        "answer": "Taenia solium",
        "difficulty": "medium",
        "topic": "Cestodes",
        "explanation": "Taenia solium causes cysticercosis, with neurological symptoms like seizures due to brain cysts."
    },
    {
        "id": 287,
        "question": "What is a diagnostic feature of Leishmania donovani under microscopy?",
        "options": [
            "Amastigotes in macrophages",
            "Cysts with four nuclei",
            "Eggs with polar plugs",
            "Microfilariae in skin"
        ],
        "answer": "Amastigotes in macrophages",
        "difficulty": "medium",
        "topic": "Practical Parasitology",
        "explanation": "Leishmania donovani amastigotes are found in macrophages in tissue biopsies or bone marrow."
    },
    {
        "id": 288,
        "question": "Which arthropod is a vector for Plasmodium vivax?",
        "options": [
            "Anopheles mosquito",
            "Tsetse fly",
            "Sandfly",
            "Reduviid bug"
        ],
        "answer": "Anopheles mosquito",
        "difficulty": "medium",
        "topic": "Arthropod Vectors",
        "explanation": "Anopheles mosquitoes transmit Plasmodium vivax, causing relapsing malaria."
    },
    {
        "id": 289,
        "question": "What is a common symptom of Cryptosporidium parvum infection?",
        "options": [
            "Watery diarrhea",
            "Skin rash only",
            "Fever only",
            "Joint pain"
        ],
        "answer": "Watery diarrhea",
        "difficulty": "medium",
        "topic": "Sporozoans",
        "explanation": "Cryptosporidium parvum causes watery diarrhea, especially in immunocompromised individuals."
    },
    {
        "id": 290,
        "question": "Which parasite is a focus of vector control programs?",
        "options": [
            "Wuchereria bancrofti",
            "Enterobius vermicularis",
            "Trichomonas vaginalis",
            "Ascaris lumbricoides"
        ],
        "answer": "Wuchereria bancrofti",
        "difficulty": "medium",
        "topic": "Epidemiology",
        "explanation": "Wuchereria bancrofti is targeted in vector control programs to reduce lymphatic filariasis transmission."
    },
    {
        "id": 291,
        "question": "What is a research focus for Giardia lamblia?",
        "options": [
            "Water treatment strategies",
            "Antibiotic resistance",
            "Viral therapies",
            "Surgical interventions"
        ],
        "answer": "Water treatment strategies",
        "difficulty": "medium",
        "topic": "Research",
        "explanation": "Water treatment strategies are a research focus for preventing Giardia lamblia transmission."
    },
    {
        "id": 292,
        "question": "Which parasite is linked to growth retardation in children?",
        "options": [
            "Trichuris trichiura",
            "Plasmodium falciparum",
            "Trypanosoma cruzi",
            "Giardia lamblia"
        ],
        "answer": "Trichuris trichiura",
        "difficulty": "medium",
        "topic": "Case Studies",
        "explanation": "Trichuris trichiura causes growth retardation in children due to chronic intestinal infection."
    },
    {
        "id": 293,
        "question": "What is a diagnostic feature of Paragonimus westermani eggs?",
        "options": [
            "Operculated, yellow-brown eggs",
            "Cysts with four nuclei",
            "Eggs with polar plugs",
            "Microfilariae in skin"
        ],
        "answer": "Operculated, yellow-brown eggs",
        "difficulty": "medium",
        "topic": "Practical Parasitology",
        "explanation": "Paragonimus westermani eggs are operculated and yellow-brown, found in sputum or stool."
    },
    {
        "id": 294,
        "question": "Which drug is used to treat Trichomonas vaginalis infection?",
        "options": [
            "Metronidazole",
            "Praziquantel",
            "Ivermectin",
            "Chloroquine"
        ],
        "answer": "Metronidazole",
        "difficulty": "medium",
        "topic": "Flagellates",
        "explanation": "Metronidazole is the standard treatment for Trichomonas vaginalis infections."
    },
    {
        "id": 295,
        "question": "What is a preventive measure for Onchocerca volvulus infection?",
        "options": [
            "Blackfly control",
            "Water filtration",
            "Antibiotic prophylaxis",
            "Eating raw fish"
        ],
        "answer": "Blackfly control",
        "difficulty": "medium",
        "topic": "Control",
        "explanation": "Blackfly control, such as insecticide use, prevents Onchocerca volvulus transmission."
    },
    {
        "id": 296,
        "question": "Which parasite is linked to cardiac complications in chronic infections?",
        "options": [
            "Trypanosoma cruzi",
            "Enterobius vermicularis",
            "Trichomonas vaginalis",
            "Ascaris lumbricoides"
        ],
        "answer": "Trypanosoma cruzi",
        "difficulty": "medium",
        "topic": "Flagellates",
        "explanation": "Trypanosoma cruzi causes cardiac complications like cardiomyopathy in chronic Chagas disease."
    },
    {
        "id": 297,
        "question": "What is a diagnostic feature of Schistosoma mansoni eggs?",
        "options": [
            "Lateral spine",
            "Cysts with four nuclei",
            "Eggs with polar plugs",
            "Microfilariae in skin"
        ],
        "answer": "Lateral spine",
        "difficulty": "medium",
        "topic": "Practical Parasitology",
        "explanation": "Schistosoma mansoni eggs have a lateral spine, visible in stool microscopy."
    },
    {
        "id": 298,
        "question": "Which arthropod is a vector for Loa loa?",
        "options": [
            "Deer fly",
            "Mosquito",
            "Sandfly",
            "Tick"
        ],
        "answer": "Deer fly",
        "difficulty": "medium",
        "topic": "Arthropod Vectors",
        "explanation": "Deer flies (Chrysops species) transmit Loa loa, causing loiasis."
    },
    {
        "id": 299,
        "question": "What is a common symptom of Toxoplasma gondii infection in immunocompromised patients?",
        "options": [
            "Encephalitis",
            "Diarrhea only",
            "Fever only",
            "Skin rash"
        ],
        "answer": "Encephalitis",
        "difficulty": "medium",
        "topic": "Sporozoans",
        "explanation": "Toxoplasma gondii can cause encephalitis in immunocompromised patients due to brain involvement."
    },
    {
        "id": 300,
        "question": "Which parasite is a focus of mass drug administration programs?",
        "options": [
            "Schistosoma haematobium",
            "Plasmodium falciparum",
            "Trypanosoma cruzi",
            "Giardia lamblia"
        ],
        "answer": "Schistosoma haematobium",
        "difficulty": "medium",
        "topic": "Epidemiology",
        "explanation": "Schistosoma haematobium is targeted in mass drug administration programs to control urinary schistosomiasis."
    },
    {
        "id": 301,
        "question": "What is a research focus for Plasmodium falciparum?",
        "options": [
            "Drug resistance",
            "Antibiotic resistance",
            "Viral therapies",
            "Surgical interventions"
        ],
        "answer": "Drug resistance",
        "difficulty": "medium",
        "topic": "Research",
        "explanation": "Drug resistance, particularly to artemisinin, is a major research focus for Plasmodium falciparum."
    },
    {
        "id": 302,
        "question": "Which parasite is linked to biliary complications in chronic infections?",
        "options": [
            "Clonorchis sinensis",
            "Enterobius vermicularis",
            "Trichomonas vaginalis",
            "Ascaris lumbricoides"
        ],
        "answer": "Clonorchis sinensis",
        "difficulty": "medium",
        "topic": "Trematodes",
        "explanation": "Clonorchis sinensis causes biliary complications like cholangiocarcinoma in chronic infections."
    },
    {
        "id": 303,
        "question": "What is a diagnostic feature of Diphyllobothrium latum eggs?",
        "options": [
            "Operculated eggs",
            "Cysts with four nuclei",
            "Eggs with polar plugs",
            "Microfilariae in skin"
        ],
        "answer": "Operculated eggs",
        "difficulty": "medium",
        "topic": "Practical Parasitology",
        "explanation": "Diphyllobothrium latum eggs are operculated, visible in stool microscopy."
    },
    {
        "id": 304,
        "question": "Which drug is used to treat Fasciola hepatica infection?",
        "options": [
            "Triclabendazole",
            "Metronidazole",
            "Ivermectin",
            "Chloroquine"
        ],
        "answer": "Triclabendazole",
        "difficulty": "medium",
        "topic": "Trematodes",
        "explanation": "Triclabendazole is the primary treatment for Fasciola hepatica infections."
    },
    {
        "id": 305,
        "question": "What is a preventive measure for Wuchereria bancrofti infection?",
        "options": [
            "Mosquito control",
            "Water filtration",
            "Antibiotic prophylaxis",
            "Eating raw fish"
        ],
        "answer": "Mosquito control",
        "difficulty": "medium",
        "topic": "Control",
        "explanation": "Mosquito control, such as insecticide use, prevents Wuchereria bancrofti transmission."
    },
    {
        "id": 306,
        "question": "Which parasite is linked to neurological complications in immunocompromised patients?",
        "options": [
            "Toxoplasma gondii",
            "Plasmodium falciparum",
            "Trypanosoma cruzi",
            "Giardia lamblia"
        ],
        "answer": "Toxoplasma gondii",
        "difficulty": "medium",
        "topic": "Case Studies",
        "explanation": "Toxoplasma gondii causes neurological complications like encephalitis in immunocompromised patients."
    },
    {
        "id": 307,
        "question": "What is a diagnostic feature of Trichinella spiralis under microscopy?",
        "options": [
            "Encysted larvae in muscle",
            "Cysts with four nuclei",
            "Eggs with polar plugs",
            "Microfilariae in skin"
        ],
        "answer": "Encysted larvae in muscle",
        "difficulty": "medium",
        "topic": "Practical Parasitology",
        "explanation": "Trichinella spiralis encysted larvae are detected in muscle biopsies, confirming trichinosis."
    },
    {
        "id": 308,
        "question": "Which arthropod is a vector for Trypanosoma cruzi?",
        "options": [
            "Reduviid bug",
            "Mosquito",
            "Tsetse fly",
            "Sandfly"
        ],
        "answer": "Reduviid bug",
        "difficulty": "medium",
        "topic": "Arthropod Vectors",
        "explanation": "Reduviid bugs transmit Trypanosoma cruzi, causing Chagas disease."
    },
    {
        "id": 309,
        "question": "What is a common symptom of Schistosoma japonicum infection?",
        "options": [
            "Hepatosplenomegaly",
            "Diarrhea only",
            "Fever only",
            "Skin rash"
        ],
        "answer": "Hepatosplenomegaly",
        "difficulty": "medium",
        "topic": "Trematodes",
        "explanation": "Schistosoma japonicum causes hepatosplenomegaly due to liver and spleen involvement in chronic infections."
    },
    {
        "id": 310,
        "question": "Which parasite is a focus of soil-transmitted helminth programs?",
        "options": [
            "Ascaris lumbricoides",
            "Plasmodium falciparum",
            "Trypanosoma cruzi",
            "Giardia lamblia"
        ],
        "answer": "Ascaris lumbricoides",
        "difficulty": "medium",
        "topic": "Epidemiology",
        "explanation": "Ascaris lumbricoides is targeted in soil-transmitted helminth programs with deworming interventions."
    },
    {
        "id": 311,
        "question": "What is a research focus for leishmaniasis?",
        "options": [
            "Drug development",
            "Antibiotic resistance",
            "Viral therapies",
            "Surgical interventions"
        ],
        "answer": "Drug development",
        "difficulty": "medium",
        "topic": "Research",
        "explanation": "Drug development is a research focus for treating resistant strains of Leishmania."
    },
    {
        "id": 312,
        "question": "Which parasite is linked to chronic diarrhea in children?",
        "options": [
            "Giardia lamblia",
            "Enterobius vermicularis",
            "Trichomonas vaginalis",
            "Ascaris lumbricoides"
        ],
        "answer": "Giardia lamblia",
        "difficulty": "medium",
        "topic": "Case Studies",
        "explanation": "Giardia lamblia causes chronic diarrhea in children, leading to malabsorption."
    },
    {
        "id": 313,
        "question": "What is a diagnostic feature of Hymenolepis nana under microscopy?",
        "options": [
            "Eggs with polar filaments",
            "Cysts with four nuclei",
            "Eggs with polar plugs",
            "Microfilariae in skin"
        ],
        "answer": "Eggs with polar filaments",
        "difficulty": "medium",
        "topic": "Practical Parasitology",
        "explanation": "Hymenolepis nana eggs have polar filaments, visible in stool microscopy."
    },
    {
        "id": 314,
        "question": "Which drug is used to treat Leishmania donovani infection?",
        "options": [
            "Amphotericin B",
            "Metronidazole",
            "Ivermectin",
            "Chloroquine"
        ],
        "answer": "Amphotericin B",
        "difficulty": "medium",
        "topic": "Flagellates",
        "explanation": "Amphotericin B is used to treat visceral leishmaniasis caused by Leishmania donovani."
    },
    {
        "id": 315,
        "question": "What is a preventive measure for Cryptosporidium parvum infection?",
        "options": [
            "Water treatment",
            "Using mosquito nets",
            "Antibiotic prophylaxis",
            "Eating raw fish"
        ],
        "answer": "Water treatment",
        "difficulty": "medium",
        "topic": "Control",
        "explanation": "Water treatment, such as filtration or boiling, prevents Cryptosporidium parvum transmission."
    },
    {
        "id": 316,
        "question": "Which parasite is linked to seizures in neurocysticercosis?",
        "options": [
            "Taenia solium",
            "Plasmodium falciparum",
            "Trypanosoma cruzi",
            "Giardia lamblia"
        ],
        "answer": "Taenia solium",
        "difficulty": "medium",
        "topic": "Cestodes",
        "explanation": "Taenia solium causes neurocysticercosis, leading to seizures due to brain cysts."
    },
    {
        "id": 317,
        "question": "What is a diagnostic feature of Balantidium coli under microscopy?",
        "options": [
            "Large ciliated trophozoites",
            "Cysts with four nuclei",
            "Eggs with polar plugs",
            "Microfilariae in skin"
        ],
        "answer": "Large ciliated trophozoites",
        "difficulty": "medium",
        "topic": "Practical Parasitology",
        "explanation": "Balantidium coli trophozoites are large and ciliated, visible in stool microscopy."
    },
    {
        "id": 318,
        "question": "Which arthropod is a vector for Onchocerca volvulus?",
        "options": [
            "Blackfly",
            "Mosquito",
            "Sandfly",
            "Tick"
        ],
        "answer": "Blackfly",
        "difficulty": "medium",
        "topic": "Arthropod Vectors",
        "explanation": "Blackflies (Simulium species) transmit Onchocerca volvulus, causing river blindness."
    },
    {
        "id": 319,
        "question": "What is a common symptom of Trichinella spiralis infection?",
        "options": [
            "Muscle pain",
            "Diarrhea only",
            "Fever only",
            "Skin rash"
        ],
        "answer": "Muscle pain",
        "difficulty": "medium",
        "topic": "Nematodes",
        "explanation": "Trichinella spiralis causes muscle pain due to larval encystment in muscle tissue."
    },
    {
        "id": 320,
        "question": "Which parasite is a focus of eradication programs?",
        "options": [
            "Dracunculus medinensis",
            "Plasmodium falciparum",
            "Trypanosoma cruzi",
            "Giardia lamblia"
        ],
        "answer": "Dracunculus medinensis",
        "difficulty": "medium",
        "topic": "Epidemiology",
        "explanation": "Dracunculus medinensis is targeted for eradication through water safety and case management."
    },
    {
        "id": 321,
        "question": "What is a research focus for Chagas disease?",
        "options": [
            "Vector control",
            "Antibiotic resistance",
            "Viral therapies",
            "Surgical interventions"
        ],
        "answer": "Vector control",
        "difficulty": "medium",
        "topic": "Research",
        "explanation": "Vector control, targeting reduviid bugs, is a research focus for Chagas disease prevention."
    },
    {
        "id": 322,
        "question": "Which parasite is linked to anemia in children?",
        "options": [
            "Necator americanus",
            "Trichomonas vaginalis",
            "Leishmania donovani",
            "Toxoplasma gondii"
        ],
        "answer": "Necator americanus",
        "difficulty": "medium",
        "topic": "Case Studies",
        "explanation": "Necator americanus causes anemia in children due to intestinal blood loss."
    },
    {
        "id": 323,
        "question": "What is the primary mode of transmission for Trypanosoma cruzi?",
        "options": [
            "Reduviid bug bite",
            "Mosquito bite",
            "Fecal-oral route",
            "Direct skin contact"
        ],
        "answer": "Reduviid bug bite",
        "difficulty": "medium",
        "topic": "Flagellates",
        "explanation": "Trypanosoma cruzi, causing Chagas disease, is primarily transmitted through the bite or feces of reduviid bugs."
    },
    {
        "id": 324,
        "question": "Which parasite is associated with chronic biliary obstruction?",
        "options": [
            "Clonorchis sinensis",
            "Giardia lamblia",
            "Trichomonas vaginalis",
            "Plasmodium vivax"
        ],
        "answer": "Clonorchis sinensis",
        "difficulty": "medium",
        "topic": "Trematodes",
        "explanation": "Clonorchis sinensis, a liver fluke, causes chronic biliary obstruction due to its residence in bile ducts."
    },
    {
        "id": 325,
        "question": "What is a diagnostic method for Giardia lamblia?",
        "options": [
            "Stool antigen test",
            "Blood smear",
            "Urine analysis",
            "Skin biopsy"
        ],
        "answer": "Stool antigen test",
        "difficulty": "medium",
        "topic": "Flagellates",
        "explanation": "Stool antigen tests detect Giardia lamblia proteins, providing a sensitive diagnostic method."
    },
    {
        "id": 326,
        "question": "Which drug is used to treat Plasmodium falciparum malaria?",
        "options": [
            "Artemisinin-based combination therapy",
            "Metronidazole",
            "Ivermectin",
            "Praziquantel"
        ],
        "answer": "Artemisinin-based combination therapy",
        "difficulty": "medium",
        "topic": "Sporozoans",
        "explanation": "Artemisinin-based combination therapy is the standard treatment for uncomplicated Plasmodium falciparum malaria."
    },
    {
        "id": 327,
        "question": "What is a common symptom of Fasciola hepatica infection?",
        "options": [
            "Right upper quadrant pain",
            "Skin rash only",
            "Fever only",
            "Joint pain"
        ],
        "answer": "Right upper quadrant pain",
        "difficulty": "medium",
        "topic": "Trematodes",
        "explanation": "Fasciola hepatica causes right upper quadrant pain due to liver and bile duct involvement."
    },
    {
        "id": 328,
        "question": "Which parasite is transmitted by ingestion of contaminated soil?",
        "options": [
            "Ascaris lumbricoides",
            "Plasmodium falciparum",
            "Trypanosoma brucei",
            "Leishmania major"
        ],
        "answer": "Ascaris lumbricoides",
        "difficulty": "medium",
        "topic": "Nematodes",
        "explanation": "Ascaris lumbricoides is transmitted through ingestion of eggs in contaminated soil or food."
    },
    {
        "id": 329,
        "question": "What is a preventive measure for Schistosoma mansoni infection?",
        "options": [
            "Avoiding freshwater contact",
            "Using mosquito nets",
            "Eating raw meat",
            "Antibiotic prophylaxis"
        ],
        "answer": "Avoiding freshwater contact",
        "difficulty": "medium",
        "topic": "Control",
        "explanation": "Avoiding contact with freshwater containing Schistosoma mansoni cercariae prevents infection."
    },
    {
        "id": 330,
        "question": "Which diagnostic method is used for Trichinella spiralis?",
        "options": [
            "Muscle biopsy",
            "Stool microscopy",
            "Blood smear",
            "Urine analysis"
        ],
        "answer": "Muscle biopsy",
        "difficulty": "medium",
        "topic": "Nematodes",
        "explanation": "Muscle biopsy reveals encysted Trichinella spiralis larvae, confirming trichinosis."
    },
    {
        "id": 331,
        "question": "What is a common symptom of cutaneous leishmaniasis?",
        "options": [
            "Skin ulcers",
            "Diarrhea only",
            "Fever only",
            "Joint pain"
        ],
        "answer": "Skin ulcers",
        "difficulty": "medium",
        "topic": "Flagellates",
        "explanation": "Cutaneous leishmaniasis, caused by Leishmania major, results in chronic skin ulcers."
    },
    {
        "id": 332,
        "question": "Which parasite is associated with vitamin B12 deficiency?",
        "options": [
            "Diphyllobothrium latum",
            "Taenia solium",
            "Echinococcus granulosus",
            "Hymenolepis nana"
        ],
        "answer": "Diphyllobothrium latum",
        "difficulty": "medium",
        "topic": "Cestodes",
        "explanation": "Diphyllobothrium latum competes for vitamin B12, leading to deficiency and megaloblastic anemia."
    },
    {
        "id": 333,
        "question": "What is a diagnostic method for Onchocerca volvulus?",
        "options": [
            "Skin snip biopsy",
            "Stool microscopy",
            "Blood smear",
            "Urine analysis"
        ],
        "answer": "Skin snip biopsy",
        "difficulty": "medium",
        "topic": "Nematodes",
        "explanation": "Skin snip biopsy detects Onchocerca volvulus microfilariae, confirming river blindness."
    },
    {
        "id": 334,
        "question": "Which drug is used to treat Cryptosporidium parvum infection?",
        "options": [
            "Nitazoxanide",
            "Metronidazole",
            "Ivermectin",
            "Praziquantel"
        ],
        "answer": "Nitazoxanide",
        "difficulty": "medium",
        "topic": "Sporozoans",
        "explanation": "Nitazoxanide is the primary treatment for Cryptosporidium parvum infections, especially in immunocompetent individuals."
    },
    {
        "id": 335,
        "question": "What is a common symptom of Taenia solium cysticercosis?",
        "options": [
            "Seizures",
            "Diarrhea only",
            "Fever only",
            "Skin rash"
        ],
        "answer": "Seizures",
        "difficulty": "medium",
        "topic": "Cestodes",
        "explanation": "Taenia solium cysticercosis can cause seizures due to cysts in the brain."
    },
    {
        "id": 336,
        "question": "Which arthropod transmits Rickettsia prowazekii?",
        "options": [
            "Body lice",
            "Mosquitoes",
            "Sandflies",
            "Ticks"
        ],
        "answer": "Body lice",
        "difficulty": "medium",
        "topic": "Ectoparasites",
        "explanation": "Body lice transmit Rickettsia prowazekii, causing epidemic typhus."
    },
    {
        "id": 337,
        "question": "What is a preventive measure for Enterobius vermicularis infection?",
        "options": [
            "Good personal hygiene",
            "Using mosquito nets",
            "Drinking untreated water",
            "Eating raw meat"
        ],
        "answer": "Good personal hygiene",
        "difficulty": "medium",
        "topic": "Control",
        "explanation": "Good personal hygiene, such as handwashing, prevents Enterobius vermicularis egg transmission."
    },
    {
        "id": 338,
        "question": "Which parasite causes acute Katayama syndrome?",
        "options": [
            "Schistosoma haematobium",
            "Plasmodium falciparum",
            "Trypanosoma cruzi",
            "Giardia lamblia"
        ],
        "answer": "Schistosoma haematobium",
        "difficulty": "medium",
        "topic": "Trematodes",
        "explanation": "Schistosoma haematobium can cause Katayama syndrome, an acute immune response during early infection."
    },
    {
        "id": 339,
        "question": "What is a diagnostic feature of Echinococcus granulosus?",
        "options": [
            "Hydatid cysts on imaging",
            "Mammillated shell",
            "Polar filaments",
            "Lateral spine"
        ],
        "answer": "Hydatid cysts on imaging",
        "difficulty": "medium",
        "topic": "Cestodes",
        "explanation": "Hydatid cysts detected by imaging, such as ultrasound, confirm Echinococcus granulosus infection."
    },
    {
        "id": 340,
        "question": "Which drug is used to treat Necator americanus infection?",
        "options": [
            "Albendazole",
            "Metronidazole",
            "Praziquantel",
            "Chloroquine"
        ],
        "answer": "Albendazole",
        "difficulty": "medium",
        "topic": "Nematodes",
        "explanation": "Albendazole is effective against Necator americanus, treating hookworm infections."
    },
    {
        "id": 341,
        "question": "What is a common symptom of Wuchereria bancrofti infection?",
        "options": [
            "Lymphatic swelling",
            "Diarrhea only",
            "Fever only",
            "Skin ulcers"
        ],
        "answer": "Lymphatic swelling",
        "difficulty": "medium",
        "topic": "Nematodes",
        "explanation": "Wuchereria bancrofti causes lymphatic swelling, leading to elephantiasis in chronic infections."
    },
    {
        "id": 342,
        "question": "Which parasite is transmitted by tsetse flies?",
        "options": [
            "Trypanosoma brucei",
            "Plasmodium falciparum",
            "Leishmania donovani",
            "Wuchereria bancrofti"
        ],
        "answer": "Trypanosoma brucei",
        "difficulty": "medium",
        "topic": "Flagellates",
        "explanation": "Trypanosoma brucei, causing African sleeping sickness, is transmitted by tsetse flies."
    },
    {
        "id": 343,
        "question": "What is a diagnostic method for Hymenolepis nana?",
        "options": [
            "Stool microscopy for eggs",
            "Blood smear",
            "Urine analysis",
            "Skin biopsy"
        ],
        "answer": "Stool microscopy for eggs",
        "difficulty": "medium",
        "topic": "Cestodes",
        "explanation": "Stool microscopy detects Hymenolepis nana eggs with polar filaments, confirming infection."
    },
    {
        "id": 344,
        "question": "Which drug is used to treat Paragonimus westermani infection?",
        "options": [
            "Praziquantel",
            "Metronidazole",
            "Ivermectin",
            "Chloroquine"
        ],
        "answer": "Praziquantel",
        "difficulty": "medium",
        "topic": "Trematodes",
        "explanation": "Praziquantel is the primary treatment for Paragonimus westermani, a lung fluke."
    },
    {
        "id": 345,
        "question": "What is a preventive measure for Toxoplasma gondii infection?",
        "options": [
            "Avoiding cat feces",
            "Using mosquito nets",
            "Drinking untreated water",
            "Eating raw fish"
        ],
        "answer": "Avoiding cat feces",
        "difficulty": "medium",
        "topic": "Control",
        "explanation": "Avoiding cat feces reduces the risk of Toxoplasma gondii infection, as cats shed oocysts."
    },
    {
        "id": 346,
        "question": "Which parasite is associated with chronic diarrhea in immunocompromised patients?",
        "options": [
            "Cryptosporidium parvum",
            "Schistosoma mansoni",
            "Trypanosoma cruzi",
            "Giardia lamblia"
        ],
        "answer": "Cryptosporidium parvum",
        "difficulty": "medium",
        "topic": "Sporozoans",
        "explanation": "Cryptosporidium parvum causes chronic diarrhea in immunocompromised patients, such as those with HIV/AIDS."
    },
    {
        "id": 347,
        "question": "What is a diagnostic feature of Trichuris trichiura eggs?",
        "options": [
            "Barrel-shaped with polar plugs",
            "Four nuclei",
            "Polar filaments",
            "Lateral spine"
        ],
        "answer": "Barrel-shaped with polar plugs",
        "difficulty": "medium",
        "topic": "Nematodes",
        "explanation": "Trichuris trichiura eggs are barrel-shaped with polar plugs, visible in stool microscopy."
    },
    {
        "id": 348,
        "question": "Which arthropod transmits Yersinia pestis?",
        "options": [
            "Fleas",
            "Mosquitoes",
            "Sandflies",
            "Ticks"
        ],
        "answer": "Fleas",
        "difficulty": "medium",
        "topic": "Ectoparasites",
        "explanation": "Fleas, particularly Xenopsylla cheopis, transmit Yersinia pestis, causing plague."
    },
    {
        "id": 349,
        "question": "What is a common symptom of Strongyloides stercoralis infection?",
        "options": [
            "Abdominal pain",
            "Skin rash only",
            "Fever only",
            "Joint pain"
        ],
        "answer": "Abdominal pain",
        "difficulty": "medium",
        "topic": "Nematodes",
        "explanation": "Strongyloides stercoralis causes abdominal pain due to intestinal invasion by larvae."
    },
    {
        "id": 350,
        "question": "Which parasite is a focus of neglected tropical disease control?",
        "options": [
            "Leishmania donovani",
            "Plasmodium falciparum",
            "Trypanosoma cruzi",
            "Giardia lamblia"
        ],
        "answer": "Leishmania donovani",
        "difficulty": "medium",
        "topic": "Epidemiology",
        "explanation": "Leishmania donovani, causing visceral leishmaniasis, is a neglected tropical disease targeted for control."
    },
    {
        "id": 351,
        "question": "What is a research focus for Echinococcus granulosus?",
        "options": [
            "Zoonotic transmission",
            "Antibiotic resistance",
            "Viral therapies",
            "Surgical interventions"
        ],
        "answer": "Zoonotic transmission",
        "difficulty": "medium",
        "topic": "Research",
        "explanation": "Research on Echinococcus granulosus focuses on preventing zoonotic transmission from dogs to humans."
    },
    {
        "id": 352,
        "question": "Which parasite is linked to hematuria?",
        "options": [
            "Schistosoma haematobium",
            "Enterobius vermicularis",
            "Trichomonas vaginalis",
            "Ascaris lumbricoides"
        ],
        "answer": "Schistosoma haematobium",
        "difficulty": "medium",
        "topic": "Trematodes",
        "explanation": "Schistosoma haematobium causes hematuria due to urinary tract damage in schistosomiasis."
    },
    {
        "id": 353,
        "question": "What is a diagnostic feature of Entamoeba histolytica trophozoites?",
        "options": [
            "Ingested red blood cells",
            "Mammillated shell",
            "Polar filaments",
            "Lateral spine"
        ],
        "answer": "Ingested red blood cells",
        "difficulty": "medium",
        "topic": "Practical Parasitology",
        "explanation": "Entamoeba histolytica trophozoites often contain ingested red blood cells, visible in stool microscopy."
    },
    {
        "id": 354,
        "question": "Which drug is used to treat Trypanosoma brucei infection in late stages?",
        "options": [
            "Melarsoprol",
            "Metronidazole",
            "Ivermectin",
            "Praziquantel"
        ],
        "answer": "Melarsoprol",
        "difficulty": "medium",
        "topic": "Flagellates",
        "explanation": "Melarsoprol is used to treat late-stage Trypanosoma brucei infection with central nervous system involvement."
    },
    {
        "id": 355,
        "question": "What is a preventive measure for Taenia solium infection?",
        "options": [
            "Cooking pork thoroughly",
            "Using mosquito nets",
            "Drinking untreated water",
            "Antibiotic prophylaxis"
        ],
        "answer": "Cooking pork thoroughly",
        "difficulty": "medium",
        "topic": "Control",
        "explanation": "Cooking pork thoroughly kills Taenia solium cysticerci, preventing cysticercosis and taeniasis."
    },
    {
        "id": 356,
        "question": "Which parasite is linked to eosinophilia in blood tests?",
        "options": [
            "Trichinella spiralis",
            "Plasmodium falciparum",
            "Trypanosoma cruzi",
            "Giardia lamblia"
        ],
        "answer": "Trichinella spiralis",
        "difficulty": "medium",
        "topic": "Nematodes",
        "explanation": "Trichinella spiralis causes eosinophilia due to larval migration and muscle encystment."
    },
    {
        "id": 357,
        "question": "What is a diagnostic feature of Schistosoma japonicum eggs?",
        "options": [
            "Small lateral knob",
            "Four nuclei",
            "Polar filaments",
            "Barrel-shaped"
        ],
        "answer": "Small lateral knob",
        "difficulty": "medium",
        "topic": "Practical Parasitology",
        "explanation": "Schistosoma japonicum eggs have a small lateral knob, visible in stool microscopy."
    },
    {
        "id": 358,
        "question": "Which arthropod transmits Borrelia burgdorferi?",
        "options": [
            "Ticks",
            "Mosquitoes",
            "Sandflies",
            "Fleas"
        ],
        "answer": "Ticks",
        "difficulty": "medium",
        "topic": "Ectoparasites",
        "explanation": "Ticks, particularly Ixodes species, transmit Borrelia burgdorferi, causing Lyme disease."
    },
    {
        "id": 359,
        "question": "What is a common symptom of Balantidium coli infection?",
        "options": [
            "Bloody diarrhea",
            "Skin rash only",
            "Fever only",
            "Joint pain"
        ],
        "answer": "Bloody diarrhea",
        "difficulty": "medium",
        "topic": "Ciliates",
        "explanation": "Balantidium coli causes bloody diarrhea due to intestinal ulceration in balantidiasis."
    },
    {
        "id": 360,
        "question": "Which parasite is a focus of waterborne disease control?",
        "options": [
            "Giardia lamblia",
            "Plasmodium falciparum",
            "Trypanosoma cruzi",
            "Onchocerca volvulus"
        ],
        "answer": "Giardia lamblia",
        "difficulty": "medium",
        "topic": "Epidemiology",
        "explanation": "Giardia lamblia is targeted in waterborne disease control due to transmission via contaminated water."
    },
    {
        "id": 361,
        "question": "What is a research focus for Ascaris lumbricoides?",
        "options": [
            "Deworming programs",
            "Antibiotic resistance",
            "Viral therapies",
            "Surgical interventions"
        ],
        "answer": "Deworming programs",
        "difficulty": "medium",
        "topic": "Research",
        "explanation": "Deworming programs are a research focus for controlling Ascaris lumbricoides infections."
    },
    {
        "id": 362,
        "question": "Which parasite is linked to chronic fatigue in children?",
        "options": [
            "Trichuris trichiura",
            "Enterobius vermicularis",
            "Trichomonas vaginalis",
            "Plasmodium vivax"
        ],
        "answer": "Trichuris trichiura",
        "difficulty": "medium",
        "topic": "Case Studies",
        "explanation": "Trichuris trichiura causes chronic fatigue in children due to malnutrition from heavy infections."
    },
    {
        "id": 363,
        "question": "What is a diagnostic feature of Taenia saginata eggs?",
        "options": [
            "Radial striations",
            "Four nuclei",
            "Polar filaments",
            "Barrel-shaped"
        ],
        "answer": "Radial striations",
        "difficulty": "medium",
        "topic": "Practical Parasitology",
        "explanation": "Taenia saginata eggs have radial striations, indistinguishable from Taenia solium eggs in stool microscopy."
    },
    {
        "id": 364,
        "question": "Which drug is used to treat Diphyllobothrium latum infection?",
        "options": [
            "Praziquantel",
            "Metronidazole",
            "Ivermectin",
            "Chloroquine"
        ],
        "answer": "Praziquantel",
        "difficulty": "medium",
        "topic": "Cestodes",
        "explanation": "Praziquantel is effective against Diphyllobothrium latum, treating fish tapeworm infections."
    },
    {
        "id": 365,
        "question": "What is a preventive measure for Leishmania major infection?",
        "options": [
            "Sandfly control",
            "Water filtration",
            "Antibiotic prophylaxis",
            "Eating raw meat"
        ],
        "answer": "Sandfly control",
        "difficulty": "medium",
        "topic": "Control",
        "explanation": "Sandfly control, such as insecticide use, prevents Leishmania major transmission."
    },
    {
        "id": 366,
        "question": "Which parasite is linked to neurological complications in AIDS patients?",
        "options": [
            "Toxoplasma gondii",
            "Schistosoma mansoni",
            "Trypanosoma cruzi",
            "Giardia lamblia"
        ],
        "answer": "Toxoplasma gondii",
        "difficulty": "medium",
        "topic": "Case Studies",
        "explanation": "Toxoplasma gondii causes neurological complications like encephalitis in AIDS patients."
    },
    {
        "id": 367,
        "question": "What is a diagnostic feature of Strongyloides stercoralis under microscopy?",
        "options": [
            "Filariform larvae",
            "Four nuclei",
            "Polar filaments",
            "Lateral spine"
        ],
        "answer": "Filariform larvae",
        "difficulty": "medium",
        "topic": "Practical Parasitology",
        "explanation": "Filariform larvae of Strongyloides stercoralis are detected in stool or tissue samples."
    },
    {
        "id": 368,
        "question": "Which arthropod transmits Dracunculus medinensis?",
        "options": [
            "Copepods",
            "Mosquitoes",
            "Sandflies",
            "Ticks"
        ],
        "answer": "Copepods",
        "difficulty": "medium",
        "topic": "Nematodes",
        "explanation": "Copepods, ingested in contaminated water, transmit Dracunculus medinensis larvae."
    },
    {
        "id": 369,
        "question": "What is a common symptom of Paragonimus westermani infection?",
        "options": [
            "Chronic cough",
            "Diarrhea only",
            "Fever only",
            "Skin rash"
        ],
        "answer": "Chronic cough",
        "difficulty": "medium",
        "topic": "Trematodes",
        "explanation": "Paragonimus westermani causes chronic cough due to lung tissue damage in lung fluke infections."
    },
    {
        "id": 370,
        "question": "Which parasite is a focus of lymphatic filariasis control?",
        "options": [
            "Wuchereria bancrofti",
            "Plasmodium falciparum",
            "Trypanosoma cruzi",
            "Giardia lamblia"
        ],
        "answer": "Wuchereria bancrofti",
        "difficulty": "medium",
        "topic": "Epidemiology",
        "explanation": "Wuchereria bancrofti is targeted in lymphatic filariasis control through mass drug administration."
    },
    {
        "id": 371,
        "question": "What is a research focus for Trypanosoma brucei?",
        "options": [
            "Drug development",
            "Antibiotic resistance",
            "Viral therapies",
            "Surgical interventions"
        ],
        "answer": "Drug development",
        "difficulty": "medium",
        "topic": "Research",
        "explanation": "Drug development is a research focus for treating Trypanosoma brucei infections."
    },
    {
        "id": 372,
        "question": "Which parasite is linked to growth stunting in children?",
        "options": [
            "Ascaris lumbricoides",
            "Enterobius vermicularis",
            "Trichomonas vaginalis",
            "Plasmodium vivax"
        ],
        "answer": "Ascaris lumbricoides",
        "difficulty": "medium",
        "topic": "Case Studies",
        "explanation": "Ascaris lumbricoides causes growth stunting in children due to nutrient competition."
    },
    {
        "id": 373,
        "question": "What is a diagnostic feature of Fasciolopsis buski eggs?",
        "options": [
            "Large operculated eggs",
            "Four nuclei",
            "Polar filaments",
            "Barrel-shaped"
        ],
        "answer": "Large operculated eggs",
        "difficulty": "medium",
        "topic": "Practical Parasitology",
        "explanation": "Fasciolopsis buski eggs are large and operculated, visible in stool microscopy."
    },
    {
        "id": 374,
        "question": "Which drug is used to treat Hymenolepis nana infection?",
        "options": [
            "Praziquantel",
            "Metronidazole",
            "Ivermectin",
            "Chloroquine"
        ],
        "answer": "Praziquantel",
        "difficulty": "medium",
        "topic": "Cestodes",
        "explanation": "Praziquantel is effective against Hymenolepis nana, treating dwarf tapeworm infections."
    },
    {
        "id": 375,
        "question": "What is a preventive measure for Plasmodium vivax infection?",
        "options": [
            "Insecticide-treated nets",
            "Water filtration",
            "Antibiotic prophylaxis",
            "Eating raw meat"
        ],
        "answer": "Insecticide-treated nets",
        "difficulty": "medium",
        "topic": "Control",
        "explanation": "Insecticide-treated nets prevent Anopheles mosquito bites, reducing Plasmodium vivax transmission."
    },
    {
        "id": 376,
        "question": "Which parasite is linked to hepatosplenomegaly in chronic infections?",
        "options": [
            "Schistosoma mansoni",
            "Schistosoma mansoni",
            "Trypanosoma cruzi",
            "Giardia lamblia"
        ],
        "answer": "Schistosoma mansoni",
        "difficulty": "medium",
        "topic": "Trematodes",
        "explanation": "Schistosoma mansoni causes hepatosplenomegaly due to liver and spleen fibrosis in chronic infections."
    },
    {
        "id": 377,
        "question": "What is a diagnostic feature of Leishmania major under microscopy?",
        "options": [
            "Amastigotes in skin lesions",
            "Four nuclei",
            "Polar filaments",
            "Barrel-shaped"
        ],
        "answer": "Amastigotes in skin lesions",
        "difficulty": "medium",
        "topic": "Practical Parasitology",
        "explanation": "Leishmania major amastigotes are found in skin lesion biopsies, confirming cutaneous leishmaniasis."
    },
    {
        "id": 378,
        "question": "Which arthropod transmits Loa loa?",
        "options": [
            "Deer flies",
            "Mosquitoes",
            "Sandflies",
            "Ticks"
        ],
        "answer": "Deer flies",
        "difficulty": "medium",
        "topic": "Nematodes",
        "explanation": "Deer flies (Chrysops species) transmit Loa loa, causing loiasis."
    },
    {
        "id": 379,
        "question": "What is a common symptom of Necator americanus infection?",
        "options": [
            "Iron-deficiency anemia",
            "Diarrhea only",
            "Fever only",
            "Skin rash"
        ],
        "answer": "Iron-deficiency anemia",
        "difficulty": "medium",
        "topic": "Nematodes",
        "explanation": "Necator americanus causes iron-deficiency anemia due to chronic blood loss in the intestines."
    },
    {
        "id": 380,
        "question": "Which parasite is a focus of zoonotic disease control?",
        "options": [
            "Toxoplasma gondii",
            "Plasmodium falciparum",
            "Trypanosoma cruzi",
            "Giardia lamblia"
        ],
        "answer": "Toxoplasma gondii",
        "difficulty": "medium",
        "topic": "Epidemiology",
        "explanation": "Toxoplasma gondii is targeted in zoonotic disease control due to transmission from animals to humans."
    },
    {
        "id": 381,
        "question": "What is a research focus for Schistosoma haematobium?",
        "options": [
            "Vaccine development",
            "Antibiotic resistance",
            "Viral therapies",
            "Surgical interventions"
        ],
        "answer": "Vaccine development",
        "difficulty": "medium",
        "topic": "Research",
        "explanation": "Vaccine development is a research focus for preventing Schistosoma haematobium infections."
    },
    {
        "id": 382,
        "question": "Which parasite is linked to malabsorption in children?",
        "options": [
            "Giardia lamblia",
            "Enterobius vermicularis",
            "Trichomonas vaginalis",
            "Plasmodium vivax"
        ],
        "answer": "Giardia lamblia",
        "difficulty": "medium",
        "topic": "Case Studies",
        "explanation": "Giardia lamblia causes malabsorption in children, leading to diarrhea and nutrient deficiencies."
    },
    {
        "id": 383,
        "question": "What is a diagnostic feature of Wuchereria bancrofti under microscopy?",
        "options": [
            "Sheathed microfilariae",
            "Four nuclei",
            "Polar filaments",
            "Barrel-shaped"
        ],
        "answer": "Sheathed microfilariae",
        "difficulty": "medium",
        "topic": "Practical Parasitology",
        "explanation": "Wuchereria bancrofti microfilariae have a sheath, visible in nighttime blood smears."
    },
    {
        "id": 384,
        "question": "Which drug is used to treat Echinococcus multilocularis infection?",
        "options": [
            "Albendazole",
            "Metronidazole",
            "Ivermectin",
            "Chloroquine"
        ],
        "answer": "Albendazole",
        "difficulty": "medium",
        "topic": "Cestodes",
        "explanation": "Albendazole is used to treat Echinococcus multilocularis, often combined with surgical intervention."
    },
    {
        "id": 385,
        "question": "What is a preventive measure for Trichomonas vaginalis infection?",
        "options": [
            "Safe sexual practices",
            "Water filtration",
            "Antibiotic prophylaxis",
            "Eating raw meat"
        ],
        "answer": "Safe sexual practices",
        "difficulty": "medium",
        "topic": "Control",
        "explanation": "Safe sexual practices, such as condom use, prevent Trichomonas vaginalis transmission."
    },
    {
        "id": 386,
        "question": "Which parasite is linked to ocular complications in chronic infections?",
        "options": [
            "Onchocerca volvulus",
            "Schistosoma mansoni",
            "Trypanosoma cruzi",
            "Giardia lamblia"
        ],
        "answer": "Onchocerca volvulus",
        "difficulty": "medium",
        "topic": "Nematodes",
        "explanation": "Onchocerca volvulus causes ocular complications, including blindness, in chronic infections."
    },
    {
        "id": 387,
        "question": "What is a diagnostic feature of Cyclospora cayetanensis under microscopy?",
        "options": [
            "Acid-fast oocysts",
            "Four nuclei",
            "Polar filaments",
            "Barrel-shaped"
        ],
        "answer": "Acid-fast oocysts",
        "difficulty": "medium",
        "topic": "Practical Parasitology",
        "explanation": "Cyclospora cayetanensis oocysts are acid-fast, visible in stool microscopy."
    },
    {
        "id": 388,
        "question": "Which arthropod transmits Babesia microti?",
        "options": [
            "Ticks",
            "Mosquitoes",
            "Sandflies",
            "Fleas"
        ],
        "answer": "Ticks",
        "difficulty": "medium",
        "topic": "Sporozoans",
        "explanation": "Ticks, particularly Ixodes scapularis, transmit Babesia microti, causing babesiosis."
    },
    {
        "id": 389,
        "question": "What is a common symptom of Taenia saginata infection?",
        "options": [
            "Abdominal discomfort",
            "Diarrhea only",
            "Fever only",
            "Skin rash"
        ],
        "answer": "Abdominal discomfort",
        "difficulty": "medium",
        "topic": "Cestodes",
        "explanation": "Taenia saginata causes abdominal discomfort due to the presence of tapeworms in the intestines."
    },
    {
        "id": 390,
        "question": "Which parasite is a focus of soil-transmitted helminth control?",
        "options": [
            "Necator americanus",
            "Plasmodium falciparum",
            "Trypanosoma cruzi",
            "Giardia lamblia"
        ],
        "answer": "Necator americanus",
        "difficulty": "medium",
        "topic": "Epidemiology",
        "explanation": "Necator americanus is targeted in soil-transmitted helminth control through deworming programs."
    },
    {
        "id": 391,
        "question": "What is a research focus for Cryptosporidium parvum?",
        "options": [
            "Water treatment",
            "Antibiotic resistance",
            "Viral therapies",
            "Surgical interventions"
        ],
        "answer": "Water treatment",
        "difficulty": "medium",
        "topic": "Research",
        "explanation": "Water treatment is a research focus for preventing Cryptosporidium parvum transmission."
    },
    {
        "id": 392,
        "question": "Which parasite is linked to cognitive impairment in children?",
        "options": [
            "Trichuris trichiura",
            "Schistosoma mansoni",
            "Trypanosoma cruzi",
            "Giardia lamblia"
        ],
        "answer": "Trichuris trichiura",
        "difficulty": "medium",
        "topic": "Case Studies",
        "explanation": "Trichuris trichiura causes cognitive impairment in children due to chronic malnutrition."
    },
    {
        "id": 393,
        "question": "What is a diagnostic feature of Balantidium coli cysts?",
        "options": [
            "Thick-walled, ciliated",
            "Four nuclei",
            "Polar filaments",
            "Barrel-shaped"
        ],
        "answer": "Thick-walled, ciliated",
        "difficulty": "medium",
        "topic": "Practical Parasitology",
        "explanation": "Balantidium coli cysts are thick-walled and may retain cilia, visible in stool microscopy."
    },
    {
        "id": 394,
        "question": "Which drug is used to treat Schistosoma mansoni infection?",
        "options": [
            "Praziquantel",
            "Metronidazole",
            "Ivermectin",
            "Chloroquine"
        ],
        "answer": "Praziquantel",
        "difficulty": "medium",
        "topic": "Trematodes",
        "explanation": "Praziquantel is the primary treatment for Schistosoma mansoni infections."
    },
    {
        "id": 395,
        "question": "What is a preventive measure for Trypanosoma cruzi infection?",
        "options": [
            "Insecticide spraying",
            "Water filtration",
            "Antibiotic prophylaxis",
            "Eating raw meat"
        ],
        "answer": "Insecticide spraying",
        "difficulty": "medium",
        "topic": "Control",
        "explanation": "Insecticide spraying reduces reduviid bug populations, preventing Trypanosoma cruzi transmission."
    },
    {
        "id": 396,
        "question": "Which parasite is linked to muscle pain in acute infections?",
        "options": [
            "Trichinella spiralis",
            "Plasmodium falciparum",
            "Trypanosoma cruzi",
            "Giardia lamblia"
        ],
        "answer": "Trichinella spiralis",
        "difficulty": "medium",
        "topic": "Nematodes",
        "explanation": "Trichinella spiralis causes muscle pain in acute infections due to larval encystment."
    },
    {
        "id": 397,
        "question": "What is a diagnostic feature of Giardia lamblia trophozoites?",
        "options": [
            "Pear-shaped with two nuclei",
            "Four nuclei",
            "Polar filaments",
            "Barrel-shaped"
        ],
        "answer": "Pear-shaped with two nuclei",
        "difficulty": "medium",
        "topic": "Practical Parasitology",
        "explanation": "Giardia lamblia trophozoites are pear-shaped with two nuclei, visible in stool microscopy."
    },
    {
        "id": 398,
        "question": "Which arthropod transmits Leishmania donovani?",
        "options": [
            "Sandflies",
            "Mosquitoes",
            "Tsetse flies",
            "Ticks"
        ],
        "answer": "Sandflies",
        "difficulty": "medium",
        "topic": "Flagellates",
        "explanation": "Sandflies (Phlebotomus species) transmit Leishmania donovani, causing visceral leishmaniasis."
    },
    {
        "id": 399,
        "question": "What is a common symptom of Fasciolopsis buski infection?",
        "options": [
            "Diarrhea",
            "Skin rash only",
            "Fever only",
            "Joint pain"
        ],
        "answer": "Diarrhea",
        "difficulty": "medium",
        "topic": "Trematodes",
        "explanation": "Fasciolopsis buski causes diarrhea due to intestinal irritation and damage."
    },
    {
        "id": 400,
        "question": "Which parasite is a focus of foodborne disease control?",
        "options": [
            "Taenia saginata",
            "Plasmodium falciparum",
            "Trypanosoma cruzi",
            "Onchocerca volvulus"
        ],
        "answer": "Taenia saginata",
        "difficulty": "medium",
        "topic": "Epidemiology",
        "explanation": "Taenia saginata is targeted in foodborne disease control due to transmission via undercooked beef."
    },
    {
        "id": 401,
        "question": "What is a research focus for Onchocerca volvulus?",
        "options": [
            "Vector control",
            "Antibiotic resistance",
            "Viral therapies",
            "Surgical interventions"
        ],
        "answer": "Vector control",
        "difficulty": "medium",
        "topic": "Research",
        "explanation": "Vector control, targeting blackflies, is a research focus for Onchocerca volvulus prevention."
    },
    {
        "id": 402,
        "question": "Which parasite is linked to anemia in pregnant women?",
        "options": [
            "Ancylostoma duodenale",
            "Enterobius vermicularis",
            "Trichomonas vaginalis",
            "Plasmodium vivax"
        ],
        "answer": "Ancylostoma duodenale",
        "difficulty": "medium",
        "topic": "Case Studies",
        "explanation": "Ancylostoma duodenale causes anemia in pregnant women due to chronic blood loss."
    },
    {
        "id": 403,
        "question": "What is a diagnostic feature of Entamoeba histolytica cysts?",
        "options": [
            "Four nuclei with central karyosomes",
            "Polar filaments",
            "Barrel-shaped",
            "Sheathed microfilariae"
        ],
        "answer": "Four nuclei with central karyosomes",
        "difficulty": "medium",
        "topic": "Practical Parasitology",
        "explanation": "Entamoeba histolytica cysts have four nuclei with central karyosomes, aiding diagnosis in stool microscopy."
    },
    {
        "id": 404,
        "question": "Which drug is used to treat Cyclospora cayetanensis infection?",
        "options": [
            "Trimethoprim-sulfamethoxazole",
            "Metronidazole",
            "Ivermectin",
            "Chloroquine"
        ],
        "answer": "Trimethoprim-sulfamethoxazole",
        "difficulty": "medium",
        "topic": "Sporozoans",
        "explanation": "Trimethoprim-sulfamethoxazole is the primary treatment for Cyclospora cayetanensis infections."
    },
    {
        "id": 405,
        "question": "What is a preventive measure for Echinococcus granulosus infection?",
        "options": [
            "Deworming dogs",
            "Using mosquito nets",
            "Antibiotic prophylaxis",
            "Eating raw meat"
        ],
        "answer": "Deworming dogs",
        "difficulty": "medium",
        "topic": "Control",
        "explanation": "Deworming dogs reduces the transmission of Echinococcus granulosus eggs to humans."
    },
    {
        "id": 406,
        "question": "Which parasite is linked to pulmonary complications in chronic infections?",
        "options": [
            "Paragonimus westermani",
            "Plasmodium falciparum",
            "Trypanosoma cruzi",
            "Giardia lamblia"
        ],
        "answer": "Paragonimus westermani",
        "difficulty": "medium",
        "topic": "Trematodes",
        "explanation": "Paragonimus westermani causes pulmonary complications, including hemoptysis, in chronic infections."
    },
    {
        "id": 407,
        "question": "What is a diagnostic feature of Trypanosoma brucei under microscopy?",
        "options": [
            "Trypomastigotes in blood",
            "Four nuclei",
            "Polar filaments",
            "Barrel-shaped"
        ],
        "answer": "Trypomastigotes in blood",
        "difficulty": "medium",
        "topic": "Practical Parasitology",
        "explanation": "Trypanosoma brucei trypomastigotes are detected in blood smears, confirming African sleeping sickness."
    },
    {
        "id": 408,
        "question": "Which arthropod transmits Wuchereria bancrofti?",
        "options": [
            "Culex mosquitoes",
            "Tsetse flies",
            "Sandflies",
            "Ticks"
        ],
        "answer": "Culex mosquitoes",
        "difficulty": "medium",
        "topic": "Nematodes",
        "explanation": "Culex mosquitoes transmit Wuchereria bancrofti, causing lymphatic filariasis."
    },
    {
        "id": 409,
        "question": "What is a common symptom of Schistosoma haematobium infection?",
        "options": [
            "Hematuria",
            "Diarrhea only",
            "Fever only",
            "Skin rash"
        ],
        "answer": "Hematuria",
        "difficulty": "medium",
        "topic": "Trematodes",
        "explanation": "Schistosoma haematobium causes hematuria due to urinary tract damage."
    },
    {
        "id": 410,
        "question": "Which parasite is a focus of neglected tropical disease programs?",
        "options": [
            "Trypanosoma cruzi",
            "Plasmodium falciparum",
            "Schistosoma japonicum",
            "Giardia lamblia"
        ],
        "answer": "Schistosoma japonicum",
        "difficulty": "medium",
        "topic": "Epidemiology",
        "explanation": "Schistosoma japonicum is a neglected tropical disease targeted for control through mass drug administration."
    },
    {
        "id": 411,
        "question": "What is a research focus for Taenia solium?",
        "options": [
            "Vaccine development",
            "Antibiotic resistance",
            "Viral therapies",
            "Surgical interventions"
        ],
        "answer": "Vaccine development",
        "difficulty": "medium",
        "topic": "Research",
        "explanation": "Vaccine development is a research focus for preventing Taenia solium infections and cysticercosis."
    },
    {
        "id": 412,
        "question": "Which parasite is linked to intestinal obstruction in children?",
        "options": [
            "Ascaris lumbricoides",
            "Enterobius vermicularis",
            "Trichomonas vaginalis",
            "Plasmodium vivax"
        ],
        "answer": "Ascaris lumbricoides",
        "difficulty": "medium",
        "topic": "Case Studies",
        "explanation": "Ascaris lumbricoides causes intestinal obstruction in children with heavy infections."
    },
    {
        "id": 413,
        "question": "What is a diagnostic feature of Necator americanus eggs?",
        "options": [
            "Thin-shelled, oval",
            "Four nuclei",
            "Polar filaments",
            "Barrel-shaped"
        ],
        "answer": "Thin-shelled, oval",
        "difficulty": "medium",
        "topic": "Practical Parasitology",
        "explanation": "Necator americanus eggs are thin-shelled and oval, visible in stool microscopy."
    },
    {
        "id": 414,
        "question": "Which drug is used to treat Enterobius vermicularis infection?",
        "options": [
            "Albendazole",
            "Metronidazole",
            "Ivermectin",
            "Chloroquine"
        ],
        "answer": "Albendazole",
        "difficulty": "medium",
        "topic": "Nematodes",
        "explanation": "Albendazole is the primary treatment for Enterobius vermicularis infections."
    },
    {
        "id": 415,
        "question": "What is a preventive measure for Diphyllobothrium latum infection?",
        "options": [
            "Cooking fish thoroughly",
            "Using mosquito nets",
            "Antibiotic prophylaxis",
            "Eating raw meat"
        ],
        "answer": "Cooking fish thoroughly",
        "difficulty": "medium",
        "topic": "Control",
        "explanation": "Cooking fish thoroughly kills Diphyllobothrium latum larvae, preventing infection."
    },
    {
        "id": 416,
        "question": "Which parasite is linked to skin lesions in chronic infections?",
        "options": [
            "Leishmania major",
            "Plasmodium falciparum",
            "Trypanosoma cruzi",
            "Giardia lamblia"
        ],
        "answer": "Leishmania major",
        "difficulty": "medium",
        "topic": "Case Studies",
        "explanation": "Leishmania major causes chronic skin lesions in cutaneous leishmaniasis."
    },
    {
        "id": 417,
        "question": "What is a diagnostic feature of Trypanosoma cruzi under microscopy?",
        "options": [
            "Trypomastigotes in blood",
            "Four nuclei",
            "Polar filaments",
            "Barrel-shaped"
        ],
        "answer": "Trypomastigotes in blood",
        "difficulty": "medium",
        "topic": "Practical Parasitology",
        "explanation": "Trypanosoma cruzi trypomastigotes are detected in blood smears during acute Chagas disease."
    },
    {
        "id": 418,
        "question": "Which arthropod transmits Onchocerca volvulus?",
        "options": [
            "Blackflies",
            "Mosquitoes",
            "Sandflies",
            "Ticks"
        ],
        "answer": "Blackflies",
        "difficulty": "medium",
        "topic": "Nematodes",
        "explanation": "Blackflies (Simulium species) transmit Onchocerca volvulus, causing river blindness."
    },
    {
        "id": 419,
        "question": "What is a common symptom of Clonorchis sinensis infection?",
        "options": [
            "Jaundice",
            "Diarrhea only",
            "Fever only",
            "Skin rash"
        ],
        "answer": "Jaundice",
        "difficulty": "medium",
        "topic": "Trematodes",
        "explanation": "Clonorchis sinensis causes jaundice due to bile duct obstruction in chronic infections."
    },
    {
        "id": 420,
        "question": "Which parasite is a focus of eradication programs?",
        "options": [
            "Dracunculus medinensis",
            "Plasmodium falciparum",
            "Trypanosoma cruzi",
            "Giardia lamblia"
        ],
        "answer": "Dracunculus medinensis",
        "difficulty": "medium",
        "topic": "Epidemiology",
        "explanation": "Dracunculus medinensis is targeted for eradication through water safety and case management."
    },
    {
        "id": 421,
        "question": "What is a research focus for Toxoplasma gondii?",
        "options": [
            "Congenital transmission prevention",
                "Antibiotic resistance",
                "Viral therapies",
                "Surgical interventions"
            ],
        "answer": "Congenital transmission prevention",
        "difficulty": "medium",
        "topic": "Research",
        "explanation": "Congenital transmission prevention is a research focus for reducing Toxoplasma gondii-related fetal harm."
    },
    {
        "id": 422,
        "question": "Which parasite is linked to perianal itching in children?",
        "options": [
            "Enterobius vermicularis",
            "Schistosoma mansoni",
            "Plasmodium falciparum",
            "Trypanosoma cruzi"
        ],
        "answer": "Enterobius vermicularis",
        "difficulty": "medium",
        "topic": "Nematodes",
        "explanation": "Enterobius vermicularis causes perianal itching in children due to egg-laying by female worms."
    },
    {
        "id": 423,
        "question": "What is the primary vector for Plasmodium falciparum?",
        "options": [
            "Anopheles mosquito",
            "Culex mosquito",
            "Sandfly",
            "Tsetse fly"
        ],
        "answer": "Anopheles mosquito",
        "difficulty": "medium",
        "topic": "Malaria",
        "explanation": "Plasmodium falciparum, causing severe malaria, is transmitted by female Anopheles mosquitoes."
    },
    {
        "id": 424,
        "question": "Which drug is used to treat uncomplicated Plasmodium vivax malaria?",
        "options": [
            "Chloroquine",
            "Ivermectin",
            "Praziquantel",
            "Metronidazole"
        ],
        "answer": "Chloroquine",
        "difficulty": "medium",
        "topic": "Malaria",
        "explanation": "Chloroquine, followed by primaquine for liver stages, treats uncomplicated Plasmodium vivax malaria."
    },
    {
        "id": 425,
        "question": "What is a common symptom of Cryptosporidium parvum infection?",
        "options": [
            "Watery diarrhea",
            "Skin rash",
            "Fever only",
            "Joint pain"
        ],
        "answer": "Watery diarrhea",
        "difficulty": "medium",
        "topic": "Cryptosporidiosis",
        "explanation": "Cryptosporidium parvum causes watery diarrhea, especially in immunocompromised individuals."
    },
    {
        "id": 426,
        "question": "Which diagnostic method is used for Giardia lamblia?",
        "options": [
            "Stool antigen test",
            "Blood smear",
            "Urine analysis",
            "Skin biopsy"
        ],
        "answer": "Stool antigen test",
        "difficulty": "medium",
        "topic": "Giardiasis",
        "explanation": "Stool antigen tests detect Giardia lamblia proteins for accurate diagnosis."
    },
    {
        "id": 427,
        "question": "What is the primary mode of transmission for Trichomonas vaginalis?",
        "options": [
            "Sexual contact",
            "Contaminated water",
            "Mosquito bite",
            "Fecal-oral route"
        ],
        "answer": "Sexual contact",
        "difficulty": "medium",
        "topic": "Trichomoniasis",
        "explanation": "Trichomonas vaginalis is primarily transmitted through sexual contact."
    },
    {
        "id": 428,
        "question": "Which preventive measure reduces Plasmodium falciparum transmission?",
        "options": [
            "Insecticide-treated nets",
            "Water filtration",
            "Antibiotic prophylaxis",
            "Raw meat consumption"
        ],
        "answer": "Insecticide-treated nets",
        "difficulty": "medium",
        "topic": "Malaria",
        "explanation": "Insecticide-treated nets prevent Anopheles mosquito bites, reducing malaria transmission."
    },
    {
        "id": 429,
        "question": "What is a diagnostic feature of Cryptosporidium parvum oocysts?",
        "options": [
            "Acid-fast staining",
            "Polar filaments",
            "Four nuclei",
            "Lateral spine"
        ],
        "answer": "Acid-fast staining",
        "difficulty": "medium",
        "topic": "Cryptosporidiosis",
        "explanation": "Cryptosporidium parvum oocysts are acid-fast, visible in stool microscopy."
    },
    {
        "id": 430,
        "question": "Which drug is used to treat Giardia lamblia infection?",
        "options": [
            "Metronidazole",
            "Praziquantel",
            "Ivermectin",
            "Chloroquine"
        ],
        "answer": "Metronidazole",
        "difficulty": "medium",
        "topic": "Giardiasis",
        "explanation": "Metronidazole is the primary treatment for Giardia lamblia infections."
    },
    {
        "id": 431,
        "question": "What is a common symptom of Trichomonas vaginalis in women?",
        "options": [
            "Vaginal discharge",
            "Skin rash",
            "Fever only",
            "Joint pain"
        ],
        "answer": "Vaginal discharge",
        "difficulty": "medium",
        "topic": "Trichomoniasis",
        "explanation": "Trichomonas vaginalis causes frothy vaginal discharge in women."
    },
    {
        "id": 432,
        "question": "Which parasite causes cerebral malaria?",
        "options": [
            "Plasmodium falciparum",
            "Plasmodium vivax",
            "Cryptosporidium parvum",
            "Giardia lamblia"
        ],
        "answer": "Plasmodium falciparum",
        "difficulty": "medium",
        "topic": "Malaria",
        "explanation": "Plasmodium falciparum can cause cerebral malaria, leading to neurological complications."
    },
    {
        "id": 433,
        "question": "What is a preventive measure for Cryptosporidium parvum infection?",
        "options": [
            "Water treatment",
            "Mosquito nets",
            "Antibiotic prophylaxis",
            "Raw fish consumption"
        ],
        "answer": "Water treatment",
        "difficulty": "medium",
        "topic": "Cryptosporidiosis",
        "explanation": "Water treatment, like boiling or filtration, prevents Cryptosporidium parvum transmission."
    },
    {
        "id": 434,
        "question": "What is a diagnostic feature of Giardia lamblia cysts?",
        "options": [
            "Four nuclei",
            "Acid-fast oocysts",
            "Polar filaments",
            "Lateral spine"
        ],
        "answer": "Four nuclei",
        "difficulty": "medium",
        "topic": "Giardiasis",
        "explanation": "Giardia lamblia cysts have four nuclei, visible in stool microscopy."
    },
    {
        "id": 435,
        "question": "Which drug is used to treat Trichomonas vaginalis infection?",
        "options": [
            "Metronidazole",
            "Praziquantel",
            "Ivermectin",
            "Chloroquine"
        ],
        "answer": "Metronidazole",
        "difficulty": "medium",
        "topic": "Trichomoniasis",
        "explanation": "Metronidazole is the standard treatment for Trichomonas vaginalis infections."
    },
    {
        "id": 436,
        "question": "What is a research focus for Plasmodium falciparum?",
        "options": [
            "Drug resistance",
            "Water treatment",
            "Surgical interventions",
            "Antibiotic development"
        ],
        "answer": "Drug resistance",
        "difficulty": "medium",
        "topic": "Malaria",
        "explanation": "Drug resistance, especially to artemisinin, is a major research focus for Plasmodium falciparum."
    },
    {
        "id": 437,
        "question": "Which population is most at risk for severe cryptosporidiosis?",
        "options": [
            "Immunocompromised patients",
            "Healthy adults",
            "Elderly only",
            "Infants only"
        ],
        "answer": "Immunocompromised patients",
        "difficulty": "medium",
        "topic": "Cryptosporidiosis",
        "explanation": "Immunocompromised patients, such as those with HIV/AIDS, are at higher risk for severe cryptosporidiosis."
    },
    {
        "id": 438,
        "question": "What is a common symptom of Giardia lamblia infection?",
        "options": [
            "Chronic diarrhea",
            "Skin rash",
            "Fever only",
            "Joint pain"
        ],
        "answer": "Chronic diarrhea",
        "difficulty": "medium",
        "topic": "Giardiasis",
        "explanation": "Giardia lamblia causes chronic diarrhea due to malabsorption in the intestines."
    },
    {
        "id": 439,
        "question": "What is a preventive measure for Trichomonas vaginalis infection?",
        "options": [
            "Safe sexual practices",
            "Water filtration",
            "Mosquito nets",
            "Raw meat consumption"
        ],
        "answer": "Safe sexual practices",
        "difficulty": "medium",
        "topic": "Trichomoniasis",
        "explanation": "Safe sexual practices, like condom use, prevent Trichomonas vaginalis transmission."
    },
    {
        "id": 440,
        "question": "Which diagnostic method confirms Plasmodium vivax infection?",
        "options": [
            "Blood smear",
            "Stool microscopy",
            "Urine analysis",
            "Skin biopsy"
        ],
        "answer": "Blood smear",
        "difficulty": "medium",
        "topic": "Malaria",
        "explanation": "Blood smears detect Plasmodium vivax parasites in red blood cells."
    },
    {
        "id": 441,
        "question": "Which drug is used to treat Cryptosporidium parvum infection?",
        "options": [
            "Nitazoxanide",
            "Metronidazole",
            "Ivermectin",
            "Praziquantel"
        ],
        "answer": "Nitazoxanide",
        "difficulty": "medium",
        "topic": "Cryptosporidiosis",
        "explanation": "Nitazoxanide is the primary treatment for Cryptosporidium parvum infections."
    },
    {
        "id": 442,
        "question": "What is a preventive measure for Giardia lamblia infection?",
        "options": [
            "Safe drinking water",
            "Mosquito nets",
            "Antibiotic prophylaxis",
            "Raw fish consumption"
        ],
        "answer": "Safe drinking water",
        "difficulty": "medium",
        "topic": "Giardiasis",
        "explanation": "Safe drinking water prevents Giardia lamblia transmission via contaminated water."
    },
    {
        "id": 443,
        "question": "Which parasite is associated with relapsing malaria?",
        "options": [
            "Plasmodium vivax",
            "Plasmodium falciparum",
            "Cryptosporidium parvum",
            "Trichomonas vaginalis"
        ],
        "answer": "Plasmodium vivax",
        "difficulty": "medium",
        "topic": "Malaria",
        "explanation": "Plasmodium vivax causes relapsing malaria due to dormant liver hypnozoites."
    },
    {
        "id": 444,
        "question": "What is a common transmission route for Cryptosporidium parvum?",
        "options": [
            "Contaminated water",
            "Mosquito bite",
            "Sexual contact",
            "Airborne droplets"
        ],
        "answer": "Contaminated water",
        "difficulty": "medium",
        "topic": "Cryptosporidiosis",
        "explanation": "Cryptosporidium parvum is commonly transmitted through contaminated water or food."
    },
    {
        "id": 445,
        "question": "What is a diagnostic feature of Trichomonas vaginalis under microscopy?",
        "options": [
            "Motile trophozoites",
            "Acid-fast oocysts",
            "Four nuclei",
            "Polar filaments"
        ],
        "answer": "Motile trophozoites",
        "difficulty": "medium",
        "topic": "Trichomoniasis",
        "explanation": "Trichomonas vaginalis motile trophozoites are visible in wet mount microscopy."
    },
    {
        "id": 446,
        "question": "Which drug is used to prevent Plasmodium falciparum malaria in travelers?",
        "options": [
            "Atovaquone-proguanil",
            "Metronidazole",
            "Ivermectin",
            "Praziquantel"
        ],
        "answer": "Atovaquone-proguanil",
        "difficulty": "medium",
        "topic": "Malaria",
        "explanation": "Atovaquone-proguanil is used for chemoprophylaxis against Plasmodium falciparum in travelers."
    },
    {
        "id": 447,
        "question": "What is a research focus for Cryptosporidium parvum?",
        "options": [
            "Water treatment strategies",
            "Vaccine development",
            "Antibiotic resistance",
            "Surgical interventions"
        ],
        "answer": "Water treatment strategies",
        "difficulty": "medium",
        "topic": "Cryptosporidiosis",
        "explanation": "Water treatment strategies are a key research focus for Cryptosporidium parvum prevention."
    },
    {
        "id": 448,
        "question": "Which population is most affected by Giardia lamblia infections?",
        "options": [
            "Children",
            "Elderly only",
            "Healthy adults",
            "Pregnant women only"
        ],
        "answer": "Children",
        "difficulty": "medium",
        "topic": "Giardiasis",
        "explanation": "Children are most affected by Giardia lamblia due to poor hygiene and daycare exposure."
    },
    {
        "id": 449,
        "question": "What is a common complication of Trichomonas vaginalis in pregnancy?",
        "options": [
            "Preterm delivery",
            "Skin lesions",
            "Anemia",
            "Joint pain"
        ],
        "answer": "Preterm delivery",
        "difficulty": "medium",
        "topic": "Trichomoniasis",
        "explanation": "Trichomonas vaginalis infection in pregnancy is associated with preterm delivery."
    },
    {
        "id": 450,
        "question": "What is a common symptom of Plasmodium falciparum malaria?",
        "options": [
            "High fever",
            "Diarrhea only",
            "Skin rash",
            "Joint pain only"
        ],
        "answer": "High fever",
        "difficulty": "medium",
        "topic": "Malaria",
        "explanation": "High fever is a hallmark symptom of Plasmodium falciparum malaria."
    },
    {
        "id": 451,
        "question": "Which diagnostic method is used for Cryptosporidium parvum?",
        "options": [
            "Stool microscopy",
            "Blood smear",
            "Urine analysis",
            "Skin biopsy"
        ],
        "answer": "Stool microscopy",
        "difficulty": "medium",
        "topic": "Cryptosporidiosis",
        "explanation": "Stool microscopy with acid-fast staining detects Cryptosporidium parvum oocysts."
    },
    {
        "id": 452,
        "question": "What is a research focus for Giardia lamblia?",
        "options": [
            "Waterborne transmission",
            "Drug resistance",
            "Surgical interventions",
            "Viral therapies"
        ],
        "answer": "Waterborne transmission",
        "difficulty": "medium",
        "topic": "Giardiasis",
        "explanation": "Waterborne transmission is a research focus for preventing Giardia lamblia infections."
    },
    {
        "id": 453,
        "question": "Which parasite is transmitted by Trypanosoma cruzi?",
        "options": [
            "Reduviid bug",
            "Anopheles mosquito",
            "Culex mosquito",
            "Sandfly"
        ],
        "answer": "Reduviid bug",
        "difficulty": "medium",
        "topic": "Chagas Disease",
        "explanation": "Trypanosoma cruzi, causing Chagas disease, is transmitted by reduviid bugs."
    },
    {
        "id": 454,
        "question": "What is a common symptom of Entamoeba histolytica infection?",
        "options": [
            "Bloody diarrhea",
            "Skin rash",
            "Fever only",
            "Joint pain"
        ],
        "answer": "Bloody diarrhea",
        "difficulty": "medium",
        "topic": "Amoebiasis",
        "explanation": "Entamoeba histolytica causes bloody diarrhea due to intestinal ulceration."
    },
    {
        "id": 455,
        "question": "Which drug is used to treat Trypanosoma cruzi infection?",
        "options": [
            "Benznidazole",
            "Metronidazole",
            "Ivermectin",
            "Praziquantel"
        ],
        "answer": "Benznidazole",
        "difficulty": "medium",
        "topic": "Chagas Disease",
        "explanation": "Benznidazole is the primary treatment for Trypanosoma cruzi in acute Chagas disease."
    },
    {
        "id": 456,
        "question": "What is a diagnostic feature of Entamoeba histolytica cysts?",
        "options": [
            "Four nuclei",
            "Acid-fast oocysts",
            "Polar filaments",
            "Lateral spine"
        ],
        "answer": "Four nuclei",
        "difficulty": "medium",
        "topic": "Amoebiasis",
        "explanation": "Entamoeba histolytica cysts have four nuclei with central karyosomes."
    },
    {
        "id": 457,
        "question": "Which preventive measure reduces Trypanosoma cruzi transmission?",
        "options": [
            "Insecticide spraying",
            "Water filtration",
            "Antibiotic prophylaxis",
            "Raw fish consumption"
        ],
        "answer": "Insecticide spraying",
        "difficulty": "medium",
        "topic": "Chagas Disease",
        "explanation": "Insecticide spraying reduces reduviid bug populations, preventing Trypanosoma cruzi transmission."
    },
    {
        "id": 458,
        "question": "What is a common symptom of Leishmania donovani infection?",
        "options": [
            "Splenomegaly",
            "Skin rash",
            "Diarrhea only",
            "Joint pain"
        ],
        "answer": "Splenomegaly",
        "difficulty": "medium",
        "topic": "Leishmaniasis",
        "explanation": "Leishmania donovani causes splenomegaly in visceral leishmaniasis."
    },
    {
        "id": 459,
        "question": "Which drug is used to treat Leishmania donovani infection?",
        "options": [
            "Amphotericin B",
            "Metronidazole",
            "Ivermectin",
            "Chloroquine"
        ],
        "answer": "Amphotericin B",
        "difficulty": "medium",
        "topic": "Leishmaniasis",
        "explanation": "Amphotericin B is used to treat visceral leishmaniasis caused by Leishmania donovani."
    },
    {
        "id": 460,
        "question": "What is a diagnostic feature of Leishmania major under microscopy?",
        "options": [
            "Amastigotes in skin lesions",
            "Four nuclei",
            "Acid-fast oocysts",
            "Polar filaments"
        ],
        "answer": "Amastigotes in skin lesions",
        "difficulty": "medium",
        "topic": "Leishmaniasis",
        "explanation": "Leishmania major amastigotes are found in skin lesion biopsies."
    },
    {
        "id": 461,
        "question": "Which preventive measure reduces Leishmania major transmission?",
        "options": [
            "Sandfly control",
            "Water filtration",
            "Antibiotic prophylaxis",
            "Raw meat consumption"
        ],
        "answer": "Sandfly control",
        "difficulty": "medium",
        "topic": "Leishmaniasis",
        "explanation": "Sandfly control, like insecticide use, prevents Leishmania major transmission."
    },
    {
        "id": 462,
        "question": "What is a common symptom of Trypanosoma brucei infection?",
        "options": [
            "Sleep disturbances",
            "Diarrhea only",
            "Skin rash",
            "Joint pain"
        ],
        "answer": "Sleep disturbances",
        "difficulty": "medium",
        "topic": "African Sleeping Sickness",
        "explanation": "Trypanosoma brucei causes sleep disturbances in African sleeping sickness."
    },
    {
        "id": 463,
        "question": "Which drug is used to treat Trypanosoma brucei late-stage infection?",
        "options": [
            "Melarsoprol",
            "Metronidazole",
            "Ivermectin",
            "Praziquantel"
        ],
        "answer": "Melarsoprol",
        "difficulty": "medium",
        "topic": "African Sleeping Sickness",
        "explanation": "Melarsoprol treats late-stage Trypanosoma brucei with CNS involvement."
    },
    {
        "id": 464,
        "question": "What is a diagnostic feature of Trypanosoma brucei under microscopy?",
        "options": [
            "Trypomastigotes in blood",
            "Four nuclei",
            "Acid-fast oocysts",
            "Polar filaments"
        ],
        "answer": "Trypomastigotes in blood",
        "difficulty": "medium",
        "topic": "African Sleeping Sickness",
        "explanation": "Trypanosoma brucei trypomastigotes are detected in blood smears."
    },
    {
        "id": 465,
        "question": "Which vector transmits Trypanosoma brucei?",
        "options": [
            "Tsetse fly",
            "Anopheles mosquito",
            "Sandfly",
            "Reduviid bug"
        ],
        "answer": "Tsetse fly",
        "difficulty": "medium",
        "topic": "African Sleeping Sickness",
        "explanation": "Tsetse flies transmit Trypanosoma brucei, causing African sleeping sickness."
    },
    {
        "id": 466,
        "question": "What is a common symptom of Toxoplasma gondii in immunocompromised patients?",
        "options": [
            "Encephalitis",
            "Diarrhea only",
            "Fever only",
            "Skin rash"
        ],
        "answer": "Encephalitis",
        "difficulty": "medium",
        "topic": "Toxoplasmosis",
        "explanation": "Toxoplasma gondii causes encephalitis in immunocompromised patients."
    },
    {
        "id": 467,
        "question": "Which drug is used to treat Toxoplasma gondii infection?",
        "options": [
            "Pyrimethamine-sulfadiazine",
            "Metronidazole",
            "Ivermectin",
            "Chloroquine"
        ],
        "answer": "Pyrimethamine-sulfadiazine",
        "difficulty": "medium",
        "topic": "Toxoplasmosis",
        "explanation": "Pyrimethamine-sulfadiazine is the standard treatment for Toxoplasma gondii infections."
    },
    {
        "id": 468,
        "question": "What is a preventive measure for Toxoplasma gondii infection?",
        "options": [
            "Avoiding cat feces",
            "Mosquito nets",
            "Antibiotic prophylaxis",
            "Raw fish consumption"
        ],
        "answer": "Avoiding cat feces",
        "difficulty": "medium",
        "topic": "Toxoplasmosis",
        "explanation": "Avoiding cat feces prevents Toxoplasma gondii oocyst transmission."
    },
    {
        "id": 469,
        "question": "What is a diagnostic feature of Toxoplasma gondii under microscopy?",
        "options": [
            "Tachyzoites in tissue",
            "Four nuclei",
            "Acid-fast oocysts",
            "Polar filaments"
        ],
        "answer": "Tachyzoites in tissue",
        "difficulty": "medium",
        "topic": "Toxoplasmosis",
        "explanation": "Tachyzoites of Toxoplasma gondii are detected in tissue biopsies."
    },
    {
        "id": 470,
        "question": "Which parasite causes cutaneous leishmaniasis?",
        "options": [
            "Leishmania major",
            "Trypanosoma cruzi",
            "Plasmodium falciparum",
            "Giardia lamblia"
        ],
        "answer": "Leishmania major",
        "difficulty": "medium",
        "topic": "Leishmaniasis",
        "explanation": "Leishmania major causes cutaneous leishmaniasis with skin ulcers."
    },
    {
        "id": 471,
        "question": "What is a common symptom of Balantidium coli infection?",
        "options": [
            "Bloody diarrhea",
            "Skin rash",
            "Fever only",
            "Joint pain"
        ],
        "answer": "Bloody diarrhea",
        "difficulty": "medium",
        "topic": "Balantidiasis",
        "explanation": "Balantidium coli causes bloody diarrhea due to intestinal ulceration."
    },
    {
        "id": 472,
        "question": "Which drug is used to treat Balantidium coli infection?",
        "options": [
            "Tetracycline",
            "Metronidazole",
            "Ivermectin",
            "Chloroquine"
        ],
        "answer": "Tetracycline",
        "difficulty": "medium",
        "topic": "Balantidiasis",
        "explanation": "Tetracycline is effective against Balantidium coli infections."
    },
    {
        "id": 473,
        "question": "What is a diagnostic feature of Balantidium coli under microscopy?",
        "options": [
            "Large ciliated trophozoites",
            "Acid-fast oocysts",
            "Four nuclei",
            "Polar filaments"
        ],
        "answer": "Large ciliated trophozoites",
        "difficulty": "medium",
        "topic": "Balantidiasis",
        "explanation": "Balantidium coli trophozoites are large and ciliated, visible in stool microscopy."
    },
    {
        "id": 474,
        "question": "Which preventive measure reduces Balantidium coli transmission?",
        "options": [
            "Improved sanitation",
            "Mosquito nets",
            "Antibiotic prophylaxis",
            "Raw fish consumption"
        ],
        "answer": "Improved sanitation",
        "difficulty": "medium",
        "topic": "Balantidiasis",
        "explanation": "Improved sanitation prevents fecal-oral transmission of Balantidium coli."
    },
    {
        "id": 475,
        "question": "What is a common symptom of Cyclospora cayetanensis infection?",
        "options": [
            "Watery diarrhea",
            "Skin rash",
            "Fever only",
            "Joint pain"
        ],
        "answer": "Watery diarrhea",
        "difficulty": "medium",
        "topic": "Cyclosporiasis",
        "explanation": "Cyclospora cayetanensis causes watery diarrhea, often in outbreaks."
    },
    {
        "id": 476,
        "question": "Which drug is used to treat Cyclospora cayetanensis infection?",
        "options": [
            "Trimethoprim-sulfamethoxazole",
            "Metronidazole",
            "Ivermectin",
            "Chloroquine"
        ],
        "answer": "Trimethoprim-sulfamethoxazole",
        "difficulty": "medium",
        "topic": "Cyclosporiasis",
        "explanation": "Trimethoprim-sulfamethoxazole is the primary treatment for Cyclospora cayetanensis."
    },
    {
        "id": 477,
        "question": "What is a diagnostic feature of Cyclospora cayetanensis under microscopy?",
        "options": [
            "Acid-fast oocysts",
            "Four nuclei",
            "Polar filaments",
            "Lateral spine"
        ],
        "answer": "Acid-fast oocysts",
        "difficulty": "medium",
        "topic": "Cyclosporiasis",
        "explanation": "Cyclospora cayetanensis oocysts are acid-fast, visible in stool microscopy."
    },
    {
        "id": 478,
        "question": "Which preventive measure reduces Cyclospora cayetanensis transmission?",
        "options": [
            "Food hygiene",
            "Mosquito nets",
            "Antibiotic prophylaxis",
            "Raw fish consumption"
        ],
        "answer": "Food hygiene",
        "difficulty": "medium",
        "topic": "Cyclosporiasis",
        "explanation": "Proper food hygiene prevents Cyclospora cayetanensis transmission via contaminated produce."
    },
    {
        "id": 479,
        "question": "What is a common symptom of Babesia microti infection?",
        "options": [
            "Hemolytic anemia",
            "Diarrhea only",
            "Fever only",
            "Skin rash"
        ],
        "answer": "Hemolytic anemia",
        "difficulty": "medium",
        "topic": "Babesiosis",
        "explanation": "Babesia microti causes hemolytic anemia due to red blood cell destruction."
    },
    {
        "id": 480,
        "question": "Which drug is used to treat Babesia microti infection?",
        "options": [
            "Atovaquone-azithromycin",
            "Metronidazole",
            "Ivermectin",
            "Praziquantel"
        ],
        "answer": "Atovaquone-azithromycin",
        "difficulty": "medium",
        "topic": "Babesiosis",
        "explanation": "Atovaquone-azithromycin is used to treat Babesia microti infections."
    },
    {
        "id": 481,
        "question": "What is a diagnostic feature of Babesia microti under microscopy?",
        "options": [
            "Ring forms in RBCs",
            "Four nuclei",
            "Acid-fast oocysts",
            "Polar filaments"
        ],
        "answer": "Ring forms in RBCs",
        "difficulty": "medium",
        "topic": "Babesiosis",
        "explanation": "Babesia microti ring forms are visible in red blood cells on blood smears."
    },
    {
        "id": 482,
        "question": "Which vector transmits Babesia microti?",
        "options": [
            "Ixodes ticks",
            "Anopheles mosquito",
            "Sandfly",
            "Tsetse fly"
        ],
        "answer": "Ixodes ticks",
        "difficulty": "medium",
        "topic": "Babesiosis",
        "explanation": "Ixodes ticks transmit Babesia microti, causing babesiosis."
    },
    {
        "id": 483,
        "question": "What is a common symptom of Isospora belli infection?",
        "options": [
            "Watery diarrhea",
            "Skin rash",
            "Fever only",
            "Joint pain"
        ],
        "answer": "Watery diarrhea",
        "difficulty": "medium",
        "topic": "Isosporiasis",
        "explanation": "Isospora belli causes watery diarrhea, especially in immunocompromised patients."
    },
    {
        "id": 484,
        "question": "Which drug is used to treat Isospora belli infection?",
        "options": [
            "Trimethoprim-sulfamethoxazole",
            "Metronidazole",
            "Ivermectin",
            "Chloroquine"
        ],
        "answer": "Trimethoprim-sulfamethoxazole",
        "difficulty": "medium",
        "topic": "Isosporiasis",
        "explanation": "Trimethoprim-sulfamethoxazole is the primary treatment for Isospora belli infections."
    },
    {
        "id": 485,
        "question": "What is a diagnostic feature of Isospora belli under microscopy?",
        "options": [
            "Oocysts in stool",
            "Four nuclei",
            "Polar filaments",
            "Lateral spine"
        ],
        "answer": "Oocysts in stool",
        "difficulty": "medium",
        "topic": "Isosporiasis",
        "explanation": "Isospora belli oocysts are detected in stool microscopy."
    },
    {
        "id": 486,
        "question": "Which preventive measure reduces Isospora belli transmission?",
        "options": [
            "Improved sanitation",
            "Mosquito nets",
            "Antibiotic prophylaxis",
            "Raw fish consumption"
        ],
        "answer": "Improved sanitation",
        "difficulty": "medium",
        "topic": "Isosporiasis",
        "explanation": "Improved sanitation prevents fecal-oral transmission of Isospora belli."
    },
    {
        "id": 487,
        "question": "What is a common symptom of Plasmodium malariae infection?",
        "options": [
            "Recurrent fever",
            "Diarrhea only",
            "Skin rash",
            "Joint pain only"
        ],
        "answer": "Recurrent fever",
        "difficulty": "medium",
        "topic": "Malaria",
        "explanation": "Plasmodium malariae causes recurrent fever with a 72-hour cycle."
    },
    {
        "id": 488,
        "question": "Which drug is used to treat Plasmodium malariae infection?",
        "options": [
            "Chloroquine",
            "Metronidazole",
            "Ivermectin",
            "Praziquantel"
        ],
        "answer": "Chloroquine",
        "difficulty": "medium",
        "topic": "Malaria",
        "explanation": "Chloroquine is effective against Plasmodium malariae infections."
    },
    {
        "id": 489,
        "question": "What is a diagnostic feature of Plasmodium malariae under microscopy?",
        "options": [
            "Band forms in RBCs",
            "Four nuclei",
            "Acid-fast oocysts",
            "Polar filaments"
        ],
        "answer": "Band forms in RBCs",
        "difficulty": "medium",
        "topic": "Malaria",
        "explanation": "Plasmodium malariae band forms are visible in red blood cells on blood smears."
    },
    {
        "id": 490,
        "question": "Which preventive measure reduces Plasmodium malariae transmission?",
        "options": [
            "Insecticide-treated nets",
            "Water filtration",
            "Antibiotic prophylaxis",
            "Raw fish consumption"
        ],
        "answer": "Insecticide-treated nets",
        "difficulty": "medium",
        "topic": "Malaria",
        "explanation": "Insecticide-treated nets prevent Anopheles mosquito bites, reducing Plasmodium malariae transmission."
    },
    {
        "id": 491,
        "question": "What is a common symptom of Leishmania braziliensis infection?",
        "options": [
            "Mucocutaneous lesions",
            "Diarrhea only",
            "Fever only",
            "Joint pain"
        ],
        "answer": "Mucocutaneous lesions",
        "difficulty": "medium",
        "topic": "Leishmaniasis",
        "explanation": "Leishmania braziliensis causes mucocutaneous lesions in leishmaniasis."
    },
    {
        "id": 492,
        "question": "Which drug is used to treat Leishmania braziliensis infection?",
        "options": [
            "Sodium stibogluconate",
            "Metronidazole",
            "Ivermectin",
            "Chloroquine"
        ],
        "answer": "Sodium stibogluconate",
        "difficulty": "medium",
        "topic": "Leishmaniasis",
        "explanation": "Sodium stibogluconate is used to treat Leishmania braziliensis infections."
    },
    {
        "id": 493,
        "question": "What is a diagnostic feature of Leishmania braziliensis under microscopy?",
        "options": [
            "Amastigotes in tissue",
            "Four nuclei",
            "Acid-fast oocysts",
            "Polar filaments"
        ],
        "answer": "Amastigotes in tissue",
        "difficulty": "medium",
        "topic": "Leishmaniasis",
        "explanation": "Leishmania braziliensis amastigotes are detected in tissue biopsies."
    },
    {
        "id": 494,
        "question": "Which vector transmits Leishmania braziliensis?",
        "options": [
            "Sandfly",
            "Anopheles mosquito",
            "Tsetse fly",
            "Reduviid bug"
        ],
        "answer": "Sandfly",
        "difficulty": "medium",
        "topic": "Leishmaniasis",
        "explanation": "Sandflies transmit Leishmania braziliensis, causing mucocutaneous leishmaniasis."
    },
    {
        "id": 495,
        "question": "What is a common symptom of Plasmodium ovale infection?",
        "options": [
            "Relapsing fever",
            "Diarrhea only",
            "Skin rash",
            "Joint pain only"
        ],
        "answer": "Relapsing fever",
        "difficulty": "medium",
        "topic": "Malaria",
        "explanation": "Plasmodium ovale causes relapsing fever due to liver hypnozoites."
    },
    {
        "id": 496,
        "question": "Which drug is used to treat Plasmodium ovale infection?",
        "options": [
            "Chloroquine",
            "Metronidazole",
            "Ivermectin",
            "Praziquantel"
        ],
        "answer": "Chloroquine",
        "difficulty": "medium",
        "topic": "Malaria",
        "explanation": "Chloroquine, followed by primaquine, treats Plasmodium ovale infections."
    },
    {
        "id": 497,
        "question": "What is a diagnostic feature of Plasmodium ovale under microscopy?",
        "options": [
            "Schüffner’s dots in RBCs",
            "Four nuclei",
            "Acid-fast oocysts",
            "Polar filaments"
        ],
        "answer": "Schüffner’s dots in RBCs",
        "difficulty": "medium",
        "topic": "Malaria",
        "explanation": "Plasmodium ovale shows Schüffner’s dots in infected red blood cells."
    },
    {
        "id": 498,
        "question": "Which preventive measure reduces Plasmodium ovale transmission?",
        "options": [
            "Insecticide-treated nets",
            "Water filtration",
            "Antibiotic prophylaxis",
            "Raw fish consumption"
        ],
        "answer": "Insecticide-treated nets",
        "difficulty": "medium",
        "topic": "Malaria",
        "explanation": "Insecticide-treated nets prevent Anopheles mosquito bites, reducing Plasmodium ovale transmission."
    },
    {
        "id": 499,
        "question": "What is a common symptom of Trypanosoma cruzi chronic infection?",
        "options": [
            "Cardiomyopathy",
            "Diarrhea only",
            "Fever only",
            "Skin rash"
        ],
        "answer": "Cardiomyopathy",
        "difficulty": "medium",
        "topic": "Chagas Disease",
        "explanation": "Trypanosoma cruzi causes cardiomyopathy in chronic Chagas disease."
    },
    {
        "id": 500,
        "question": "What is a diagnostic feature of Trypanosoma cruzi under microscopy?",
        "options": [
            "Trypomastigotes in blood",
            "Four nuclei",
            "Acid-fast oocysts",
            "Polar filaments"
        ],
        "answer": "Trypomastigotes in blood",
        "difficulty": "medium",
        "topic": "Chagas Disease",
        "explanation": "Trypanosoma cruzi trypomastigotes are detected in blood smears during acute infection."
    },
    {
        "id": 501,
        "question": "What is a research focus for Trypanosoma cruzi?",
        "options": [
            "Vaccine development",
            "Water treatment",
            "Surgical interventions",
            "Antibiotic resistance"
        ],
        "answer": "Vaccine development",
        "difficulty": "medium",
        "topic": "Chagas Disease",
        "explanation": "Vaccine development is a research focus for preventing Trypanosoma cruzi infections."
    },
    {
        "id": 502,
        "question": "Which preventive measure reduces Entamoeba histolytica transmission?",
        "options": [
            "Improved sanitation",
            "Mosquito nets",
            "Antibiotic prophylaxis",
            "Raw fish consumption"
        ],
        "answer": "Improved sanitation",
        "difficulty": "medium",
        "topic": "Amoebiasis",
        "explanation": "Improved sanitation prevents fecal-oral transmission of Entamoeba histolytica."
    },
    {
        "id": 503,
        "question": "What is a common symptom of Leishmania infantum infection?",
        "options": [
            "Hepatosplenomegaly",
            "Diarrhea only",
            "Fever only",
            "Skin rash"
        ],
        "answer": "Hepatosplenomegaly",
        "difficulty": "medium",
        "topic": "Leishmaniasis",
        "explanation": "Leishmania infantum causes hepatosplenomegaly in visceral leishmaniasis."
    },
    {
        "id": 504,
        "question": "Which drug is used to treat Leishmania infantum infection?",
        "options": [
            "Amphotericin B",
            "Metronidazole",
            "Ivermectin",
            "Chloroquine"
        ],
        "answer": "Amphotericin B",
        "difficulty": "medium",
        "topic": "Leishmaniasis",
        "explanation": "Amphotericin B is used to treat visceral leishmaniasis caused by Leishmania infantum."
    },
    {
        "id": 505,
        "question": "What is a diagnostic feature of Leishmania infantum under microscopy?",
        "options": [
            "Amastigotes in bone marrow",
            "Four nuclei",
            "Acid-fast oocysts",
            "Polar filaments"
        ],
        "answer": "Amastigotes in bone marrow",
        "difficulty": "medium",
        "topic": "Leishmaniasis",
        "explanation": "Leishmania infantum amastigotes are detected in bone marrow aspirates."
    },
    {
        "id": 506,
        "question": "Which vector transmits Leishmania infantum?",
        "options": [
            "Sandfly",
            "Anopheles mosquito",
            "Tsetse fly",
            "Reduviid bug"
        ],
        "answer": "Sandfly",
        "difficulty": "medium",
        "topic": "Leishmaniasis",
        "explanation": "Sandflies transmit Leishmania infantum, causing visceral leishmaniasis."
    },
    {
        "id": 507,
        "question": "What is a common symptom of Plasmodium knowlesi infection?",
        "options": [
            "Severe fever",
            "Diarrhea only",
            "Skin rash",
            "Joint pain only"
        ],
        "answer": "Severe fever",
        "difficulty": "medium",
        "topic": "Malaria",
        "explanation": "Plasmodium knowlesi causes severe fever and can mimic Plasmodium falciparum malaria."
    },
    {
        "id": 508,
        "question": "Which drug is used to treat Plasmodium knowlesi infection?",
        "options": [
            "Artemisinin-based therapy",
            "Metronidazole",
            "Ivermectin",
            "Praziquantel"
        ],
        "answer": "Artemisinin-based therapy",
        "difficulty": "medium",
        "topic": "Malaria",
        "explanation": "Artemisinin-based combination therapy treats Plasmodium knowlesi infections."
    },
    {
        "id": 509,
        "question": "What is a diagnostic feature of Plasmodium knowlesi under microscopy?",
        "options": [
            "Ring forms resembling P. falciparum",
            "Four nuclei",
            "Acid-fast oocysts",
            "Polar filaments"
        ],
        "answer": "Ring forms resembling P. falciparum",
        "difficulty": "medium",
        "topic": "Malaria",
        "explanation": "Plasmodium knowlesi ring forms resemble those of Plasmodium falciparum in blood smears."
    },
    {
        "id": 510,
        "question": "Which vector transmits Plasmodium knowlesi?",
        "options": [
            "Anopheles mosquito",
            "Tsetse fly",
            "Sandfly",
            "Reduviid bug"
        ],
        "answer": "Anopheles mosquito",
        "difficulty": "medium",
        "topic": "Malaria",
        "explanation": "Anopheles mosquitoes transmit Plasmodium knowlesi, a zoonotic malaria parasite."
    },
    {
        "id": 511,
        "question": "What is a common symptom of Entamoeba histolytica liver abscess?",
        "options": [
            "Right upper quadrant pain",
            "Diarrhea only",
            "Fever only",
            "Skin rash"
        ],
        "answer": "Right upper quadrant pain",
        "difficulty": "medium",
        "topic": "Amoebiasis",
        "explanation": "Entamoeba histolytica liver abscess causes right upper quadrant pain."
    },
    {
        "id": 512,
        "question": "Which drug is used to treat Entamoeba histolytica infection?",
        "options": [
            "Metronidazole",
            "Ivermectin",
            "Praziquantel",
            "Chloroquine"
        ],
        "answer": "Metronidazole",
        "difficulty": "medium",
        "topic": "Amoebiasis",
        "explanation": "Metronidazole is used to treat invasive Entamoeba histolytica infections."
    },
    {
        "id": 513,
        "question": "What is a research focus for Entamoeba histolytica?",
        "options": [
            "Vaccine development",
            "Water treatment",
            "Surgical interventions",
            "Antibiotic resistance"
        ],
        "answer": "Vaccine development",
        "difficulty": "medium",
        "topic": "Amoebiasis",
        "explanation": "Vaccine development is a research focus for preventing Entamoeba histolytica infections."
    },
    {
        "id": 514,
        "question": "Which preventive measure reduces Toxoplasma gondii congenital transmission?",
        "options": [
            "Cooking meat thoroughly",
            "Mosquito nets",
            "Antibiotic prophylaxis",
            "Raw fish consumption"
        ],
        "answer": "Cooking meat thoroughly",
        "difficulty": "medium",
        "topic": "Toxoplasmosis",
        "explanation": "Cooking meat thoroughly prevents Toxoplasma gondii transmission to pregnant women."
    },
    {
        "id": 515,
        "question": "What is a common symptom of Trypanosoma brucei early-stage infection?",
        "options": [
            "Chancre at bite site",
            "Diarrhea only",
            "Skin rash only",
            "Joint pain"
        ],
        "answer": "Chancre at bite site",
        "difficulty": "medium",
        "topic": "African Sleeping Sickness",
        "explanation": "Trypanosoma brucei causes a chancre at the tsetse fly bite site in early infection."
    },
    {
        "id": 516,
        "question": "Which drug is used to treat Trypanosoma brucei early-stage infection?",
        "options": [
            "Pentamidine",
            "Metronidazole",
            "Ivermectin",
            "Praziquantel"
        ],
        "answer": "Pentamidine",
        "difficulty": "medium",
        "topic": "African Sleeping Sickness",
        "explanation": "Pentamidine is used to treat early-stage Trypanosoma brucei infections."
    },
    {
        "id": 517,
        "question": "What is a research focus for Leishmania donovani?",
        "options": [
            "Drug development",
            "Water treatment",
            "Surgical interventions",
            "Antibiotic resistance"
        ],
        "answer": "Drug development",
        "difficulty": "medium",
        "topic": "Leishmaniasis",
        "explanation": "Drug development is a research focus for treating resistant Leishmania donovani strains."
    },
    {
        "id": 518,
        "question": "Which preventive measure reduces Trypanosoma brucei transmission?",
        "options": [
            "Tsetse fly control",
            "Water filtration",
            "Antibiotic prophylaxis",
            "Raw fish consumption"
        ],
        "answer": "Tsetse fly control",
        "difficulty": "medium",
        "topic": "African Sleeping Sickness",
        "explanation": "Tsetse fly control prevents Trypanosoma brucei transmission."
    },
    {
        "id": 519,
        "question": "What is a common symptom of Cryptosporidium hominis infection?",
        "options": [
            "Watery diarrhea",
            "Skin rash",
            "Fever only",
            "Joint pain"
        ],
        "answer": "Watery diarrhea",
        "difficulty": "medium",
        "topic": "Cryptosporidiosis",
        "explanation": "Cryptosporidium hominis causes watery diarrhea, similar to Cryptosporidium parvum."
    },
    {
        "id": 520,
        "question": "Which drug is used to treat Cryptosporidium hominis infection?",
        "options": [
            "Nitazoxanide",
            "Metronidazole",
            "Ivermectin",
            "Chloroquine"
        ],
        "answer": "Nitazoxanide",
        "difficulty": "medium",
        "topic": "Cryptosporidiosis",
        "explanation": "Nitazoxanide is used to treat Cryptosporidium hominis infections."
    },
    {
        "id": 521,
        "question": "What is a diagnostic feature of Cryptosporidium hominis under microscopy?",
        "options": [
            "Acid-fast oocysts",
            "Four nuclei",
            "Polar filaments",
            "Lateral spine"
        ],
        "answer": "Acid-fast oocysts",
        "difficulty": "medium",
        "topic": "Cryptosporidiosis",
        "explanation": "Cryptosporidium hominis oocysts are acid-fast, visible in stool microscopy."
    },
    {
        "id": 522,
        "question": "Which preventive measure reduces Cryptosporidium hominis transmission?",
        "options": [
            "Water treatment",
            "Mosquito nets",
            "Antibiotic prophylaxis",
            "Raw fish consumption"
        ],
        "answer": "Water treatment",
        "difficulty": "medium",
        "topic": "Cryptosporidiosis",
        "explanation": "Water treatment prevents Cryptosporidium hominis transmission via contaminated water."
    }
]
