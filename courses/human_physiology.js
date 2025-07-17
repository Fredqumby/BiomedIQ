const QUESTIONS = [
    {
        "id": 1,
        "question": "What is the primary source of energy for muscle contraction?",
        "options": [
            "Glucose",
            "ATP",
            "Glycogen",
            "Fatty acids"
        ],
        "answer": "ATP",
        "difficulty": "easy",
        "topic": "Muscle Physiology",
        "explanation": "ATP provides the immediate energy required for muscle contraction by powering the myosin-actin interaction."
    },
    {
        "id": 2,
        "question": "Which ion triggers the release of neurotransmitters at the synaptic cleft?",
        "options": [
            "Sodium",
            "Potassium",
            "Calcium",
            "Chloride"
        ],
        "answer": "Calcium",
        "difficulty": "medium",
        "topic": "Nervous System Physiology",
        "explanation": "Calcium ions enter the presynaptic terminal, triggering vesicle fusion and neurotransmitter release."
    },
    {
        "id": 3,
        "question": "Which hormone increases blood glucose levels by promoting glycogenolysis?",
        "options": [
            "Insulin",
            "Glucagon",
            "Cortisol",
            "Thyroxine"
        ],
        "answer": "Glucagon",
        "difficulty": "medium",
        "topic": "Endocrine Physiology",
        "explanation": "Glucagon stimulates glycogenolysis in the liver, converting glycogen to glucose to raise blood sugar."
    },
    {
        "id": 4,
        "question": "What is the primary function of hemoglobin in red blood cells?",
        "options": [
            "Clot formation",
            "Oxygen transport",
            "Immune defense",
            "Nutrient delivery"
        ],
        "answer": "Oxygen transport",
        "difficulty": "easy",
        "topic": "Cardiovascular Physiology",
        "explanation": "Hemoglobin binds oxygen in the lungs and releases it to tissues, facilitating gas exchange."
    },
    {
        "id": 5,
        "question": "Which process describes the movement of air into and out of the lungs?",
        "options": [
            "Diffusion",
            "Ventilation",
            "Perfusion",
            "Respiration"
        ],
        "answer": "Ventilation",
        "difficulty": "easy",
        "topic": "Respiratory Physiology",
        "explanation": "Ventilation is the mechanical process of moving air into and out of the lungs during breathing."
    },
    {
        "id": 6,
        "question": "Which enzyme in the stomach begins protein digestion?",
        "options": [
            "Amylase",
            "Lipase",
            "Pepsin",
            "Trypsin"
        ],
        "answer": "Pepsin",
        "difficulty": "medium",
        "topic": "Digestive Physiology",
        "explanation": "Pepsin, activated by stomach acid, breaks down proteins into smaller peptides."
    },
    {
        "id": 7,
        "question": "Which part of the nephron is primarily responsible for water reabsorption?",
        "options": [
            "Glomerulus",
            "Proximal tubule",
            "Loop of Henle",
            "Distal tubule"
        ],
        "answer": "Proximal tubule",
        "difficulty": "medium",
        "topic": "Renal Physiology",
        "explanation": "The proximal tubule reabsorbs about 65% of filtered water, along with solutes like sodium."
    },
    {
        "id": 8,
        "question": "Which hormone stimulates the release of testosterone in males?",
        "options": [
            "FSH",
            "LH",
            "Prolactin",
            "Oxytocin"
        ],
        "answer": "LH",
        "difficulty": "medium",
        "topic": "Reproductive Physiology",
        "explanation": "Luteinizing hormone (LH) stimulates Leydig cells in the testes to produce testosterone."
    },
    {
        "id": 9,
        "question": "Which type of immunity is acquired through vaccination?",
        "options": [
            "Innate immunity",
            "Passive immunity",
            "Active immunity",
            "Natural immunity"
        ],
        "answer": "Active immunity",
        "difficulty": "easy",
        "topic": "Immune System Physiology",
        "explanation": "Vaccination induces active immunity by stimulating the body to produce its own antibodies."
    },
    {
        "id": 10,
        "question": "Which structure in the skin detects light touch?",
        "options": [
            "Pacinian corpuscle",
            "Meissner’s corpuscle",
            "Free nerve ending",
            "Ruffini ending"
        ],
        "answer": "Meissner’s corpuscle",
        "difficulty": "hard",
        "topic": "Sensory Physiology",
        "explanation": "Meissner’s corpuscles, located in the dermis, are sensitive to light touch and vibration."
    },
    {
        "id": 11,
        "question": "What is the resting membrane potential of a typical neuron?",
        "options": [
            "-70 mV",
            "+30 mV",
            "0 mV",
            "-90 mV"
        ],
        "answer": "-70 mV",
        "difficulty": "medium",
        "topic": "Nervous System Physiology",
        "explanation": "The resting membrane potential of a neuron is approximately -70 mV due to ion gradients."
    },
    {
        "id": 12,
        "question": "Which hormone promotes sodium reabsorption in the kidneys?",
        "options": [
            "Aldosterone",
            "ADH",
            "ANP",
            "Cortisol"
        ],
        "answer": "Aldosterone",
        "difficulty": "medium",
        "topic": "Endocrine Physiology",
        "explanation": "Aldosterone increases sodium reabsorption in the distal tubule, regulating blood pressure."
    },
    {
        "id": 13,
        "question": "Which phase of the cardiac cycle involves ventricular contraction?",
        "options": [
            "Diastole",
            "Systole",
            "Atrial filling",
            "Isovolumetric relaxation"
        ],
        "answer": "Systole",
        "difficulty": "easy",
        "topic": "Cardiovascular Physiology",
        "explanation": "Systole is the phase when ventricles contract, pumping blood into the arteries."
    },
    {
        "id": 14,
        "question": "Which gas is the primary regulator of respiratory rate?",
        "options": [
            "Oxygen",
            "Carbon dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "answer": "Carbon dioxide",
        "difficulty": "medium",
        "topic": "Respiratory Physiology",
        "explanation": "Carbon dioxide levels in the blood are monitored by chemoreceptors to regulate breathing rate."
    },
    {
        "id": 15,
        "question": "Which nutrient is primarily absorbed in the small intestine?",
        "options": [
            "Water",
            "Carbohydrates",
            "Fiber",
            "Bile"
        ],
        "answer": "Carbohydrates",
        "difficulty": "easy",
        "topic": "Digestive Physiology",
        "explanation": "The small intestine absorbs most nutrients, including carbohydrates, via its large surface area."
    },
    {
        "id": 16,
        "question": "Which hormone regulates water reabsorption in the collecting duct?",
        "options": [
            "Aldosterone",
            "Antidiuretic hormone",
            "Renin",
            "Erythropoietin"
        ],
        "answer": "Antidiuretic hormone",
        "difficulty": "medium",
        "topic": "Renal Physiology",
        "explanation": "Antidiuretic hormone (ADH) increases water permeability in the collecting duct."
    },
    {
        "id": 17,
        "question": "Which hormone prepares the uterus for pregnancy?",
        "options": [
            "Estrogen",
            "Progesterone",
            "FSH",
            "LH"
        ],
        "answer": "Progesterone",
        "difficulty": "medium",
        "topic": "Reproductive Physiology",
        "explanation": "Progesterone maintains the uterine lining to support early pregnancy."
    },
    {
        "id": 18,
        "question": "Which cells produce antibodies in response to antigens?",
        "options": [
            "T cells",
            "B cells",
            "Macrophages",
            "Neutrophils"
        ],
        "answer": "B cells",
        "difficulty": "medium",
        "topic": "Immune System Physiology",
        "explanation": "B cells differentiate into plasma cells that secrete antibodies to neutralize antigens."
    },
    {
        "id": 19,
        "question": "Which part of the eye contains photoreceptors for vision?",
        "options": [
            "Cornea",
            "Iris",
            "Retina",
            "Lens"
        ],
        "answer": "Retina",
        "difficulty": "easy",
        "topic": "Sensory Physiology",
        "explanation": "The retina contains rods and cones, which detect light and initiate visual signals."
    },
    {
        "id": 20,
        "question": "Which neurotransmitter is primarily involved in excitatory synaptic transmission?",
        "options": [
            "GABA",
            "Glutamate",
            "Dopamine",
            "Serotonin"
        ],
        "answer": "Glutamate",
        "difficulty": "hard",
        "topic": "Nervous System Physiology",
        "explanation": "Glutamate is the main excitatory neurotransmitter in the central nervous system."
    },
    {
        "id": 21,
        "question": "Which hormone is secreted by the pineal gland to regulate sleep?",
        "options": [
            "Melatonin",
            "Thyroxine",
            "Cortisol",
            "Insulin"
        ],
        "answer": "Melatonin",
        "difficulty": "easy",
        "topic": "Endocrine Physiology",
        "explanation": "Melatonin regulates circadian rhythms, promoting sleep in response to darkness."
    },
    {
        "id": 22,
        "question": "Which factor increases heart rate during exercise?",
        "options": [
            "Parasympathetic stimulation",
            "Sympathetic stimulation",
            "Decreased venous return",
            "Increased vagal tone"
        ],
        "answer": "Sympathetic stimulation",
        "difficulty": "medium",
        "topic": "Cardiovascular Physiology",
        "explanation": "Sympathetic stimulation releases norepinephrine, increasing heart rate during exercise."
    },
    {
        "id": 23,
        "question": "What is the primary site of gas exchange in the lungs?",
        "options": [
            "Bronchi",
            "Trachea",
            "Alveoli",
            "Bronchioles"
        ],
        "answer": "Alveoli",
        "difficulty": "easy",
        "topic": "Respiratory Physiology",
        "explanation": "Alveoli are thin-walled sacs where oxygen and carbon dioxide diffuse between air and blood."
    },
    {
        "id": 24,
        "question": "Which enzyme breaks down fats in the small intestine?",
        "options": [
            "Amylase",
            "Lipase",
            "Pepsin",
            "Maltase"
        ],
        "answer": "Lipase",
        "difficulty": "medium",
        "topic": "Digestive Physiology",
        "explanation": "Pancreatic lipase emulsifies and breaks down fats into fatty acids and glycerol."
    },
    {
        "id": 25,
        "question": "Which process removes waste products from the blood in the kidneys?",
        "options": [
            "Filtration",
            "Reabsorption",
            "Secretion",
            "Excretion"
        ],
        "answer": "Filtration",
        "difficulty": "easy",
        "topic": "Renal Physiology",
        "explanation": "Filtration in the glomerulus removes waste products from blood to form filtrate."
    },
    {
        "id": 26,
        "question": "Which hormone triggers ovulation in females?",
        "options": [
            "Estrogen",
            "Progesterone",
            "FSH",
            "LH"
        ],
        "answer": "LH",
        "difficulty": "medium",
        "topic": "Reproductive Physiology",
        "explanation": "A surge in luteinizing hormone (LH) triggers the release of an egg from the ovary."
    },
    {
        "id": 27,
        "question": "Which cells engulf and destroy pathogens in the immune system?",
        "options": [
            "Lymphocytes",
            "Phagocytes",
            "Erythrocytes",
            "Platelets"
        ],
        "answer": "Phagocytes",
        "difficulty": "easy",
        "topic": "Immune System Physiology",
        "explanation": "Phagocytes, such as macrophages and neutrophils, engulf and digest pathogens."
    },
    {
        "id": 28,
        "question": "Which structure in the ear detects head movement for balance?",
        "options": [
            "Cochlea",
            "Semicircular canals",
            "Tympanic membrane",
            "Ossicles"
        ],
        "answer": "Semicircular canals",
        "difficulty": "medium",
        "topic": "Sensory Physiology",
        "explanation": "Semicircular canals detect rotational movements, contributing to balance."
    },
    {
        "id": 29,
        "question": "Which ion is primarily responsible for depolarization in an action potential?",
        "options": [
            "Potassium",
            "Sodium",
            "Calcium",
            "Chloride"
        ],
        "answer": "Sodium",
        "difficulty": "medium",
        "topic": "Nervous System Physiology",
        "explanation": "Sodium influx through voltage-gated channels causes depolarization during an action potential."
    },
    {
        "id": 30,
        "question": "Which hormone decreases blood calcium levels?",
        "options": [
            "Parathyroid hormone",
            "Calcitonin",
            "Vitamin D",
            "Cortisol"
        ],
        "answer": "Calcitonin",
        "difficulty": "medium",
        "topic": "Endocrine Physiology",
        "explanation": "Calcitonin, secreted by the thyroid, inhibits bone resorption to lower blood calcium."
    },
    {
        "id": 31,
        "question": "Which blood vessel carries deoxygenated blood to the lungs?",
        "options": [
            "Aorta",
            "Pulmonary artery",
            "Pulmonary vein",
            "Coronary artery"
        ],
        "answer": "Pulmonary artery",
        "difficulty": "easy",
        "topic": "Cardiovascular Physiology",
        "explanation": "The pulmonary artery carries deoxygenated blood from the heart to the lungs for oxygenation."
    },
    {
        "id": 32,
        "question": "Which muscle contracts to increase thoracic volume during inhalation?",
        "options": [
            "Diaphragm",
            "Internal intercostals",
            "Abdominal muscles",
            "Pectoralis major"
        ],
        "answer": "Diaphragm",
        "difficulty": "easy",
        "topic": "Respiratory Physiology",
        "explanation": "The diaphragm contracts and flattens, increasing thoracic volume for inhalation."
    },
    {
        "id": 33,
        "question": "Which substance emulsifies fats in the small intestine?",
        "options": [
            "Bile",
            "Hydrochloric acid",
            "Mucus",
            "Saliva"
        ],
        "answer": "Bile",
        "difficulty": "medium",
        "topic": "Digestive Physiology",
        "explanation": "Bile, produced by the liver, emulsifies fats to facilitate digestion by lipase."
    },
    {
        "id": 34,
        "question": "Which hormone stimulates red blood cell production?",
        "options": [
            "Erythropoietin",
            "Aldosterone",
            "ADH",
            "ANP"
        ],
        "answer": "Erythropoietin",
        "difficulty": "medium",
        "topic": "Renal Physiology",
        "explanation": "Erythropoietin, produced by the kidneys, stimulates bone marrow to produce red blood cells."
    },
    {
        "id": 35,
        "question": "Which hormone stimulates milk ejection during breastfeeding?",
        "options": [
            "Prolactin",
            "Oxytocin",
            "Estrogen",
            "Progesterone"
        ],
        "answer": "Oxytocin",
        "difficulty": "medium",
        "topic": "Reproductive Physiology",
        "explanation": "Oxytocin triggers the contraction of myoepithelial cells to eject milk from the mammary glands."
    },
    {
        "id": 36,
        "question": "Which type of T cell directly attacks infected cells?",
        "options": [
            "Helper T cells",
            "Cytotoxic T cells",
            "Regulatory T cells",
            "Memory T cells"
        ],
        "answer": "Cytotoxic T cells",
        "difficulty": "hard",
        "topic": "Immune System Physiology",
        "explanation": "Cytotoxic T cells destroy virus-infected or cancerous cells by inducing apoptosis."
    },
    {
        "id": 37,
        "question": "Which structure in the eye adjusts focus for near vision?",
        "options": [
            "Cornea",
            "Lens",
            "Iris",
            "Retina"
        ],
        "answer": "Lens",
        "difficulty": "medium",
        "topic": "Sensory Physiology",
        "explanation": "The lens changes shape via ciliary muscle contraction to focus light for near vision."
    },
    {
        "id": 38,
        "question": "Which part of the brain regulates autonomic functions like heart rate?",
        "options": [
            "Cerebellum",
            "Medulla oblongata",
            "Thalamus",
            "Hypothalamus"
        ],
        "answer": "Medulla oblongata",
        "difficulty": "medium",
        "topic": "Nervous System Physiology",
        "explanation": "The medulla oblongata controls involuntary functions like heart rate and breathing."
    },
    {
        "id": 39,
        "question": "Which hormone is secreted by the adrenal medulla during stress?",
        "options": [
            "Cortisol",
            "Aldosterone",
            "Epinephrine",
            "Testosterone"
        ],
        "answer": "Epinephrine",
        "difficulty": "medium",
        "topic": "Endocrine Physiology",
        "explanation": "Epinephrine is released by the adrenal medulla to prepare the body for 'fight or flight'."
    },
    {
        "id": 40,
        "question": "Which mechanism regulates blood pressure by altering vessel diameter?",
        "options": [
            "Baroreflex",
            "Vasoconstriction",
            "Venous return",
            "Cardiac output"
        ],
        "answer": "Vasoconstriction",
        "difficulty": "medium",
        "topic": "Cardiovascular Physiology",
        "explanation": "Vasoconstriction narrows blood vessels, increasing blood pressure."
    },
    {
        "id": 41,
        "question": "Which substance reduces surface tension in the alveoli?",
        "options": [
            "Mucus",
            "Surfactant",
            "Bile",
            "Saliva"
        ],
        "answer": "Surfactant",
        "difficulty": "medium",
        "topic": "Respiratory Physiology",
        "explanation": "Surfactant, produced by alveolar cells, prevents alveolar collapse by reducing surface tension."
    },
    {
        "id": 42,
        "question": "Which hormone is secreted by the pancreas to raise blood glucose?",
        "options": [
            "Insulin",
            "Glucagon",
            "Somatostatin",
            "Amylin"
        ],
        "answer": "Glucagon",
        "difficulty": "medium",
        "topic": "Digestive Physiology",
        "explanation": "Glucagon stimulates glycogen breakdown in the liver to increase blood glucose levels."
    },
    {
        "id": 43,
        "question": "Which process in the nephron adds substances to the filtrate?",
        "options": [
            "Filtration",
            "Reabsorption",
            "Secretion",
            "Excretion"
        ],
        "answer": "Secretion",
        "difficulty": "medium",
        "topic": "Renal Physiology",
        "explanation": "Secretion actively transports substances like drugs and toxins into the nephron filtrate."
    },
    {
        "id": 44,
        "question": "Which hormone regulates the menstrual cycle by promoting follicle growth?",
        "options": [
            "Progesterone",
            "Estrogen",
            "FSH",
            "LH"
        ],
        "answer": "FSH",
        "difficulty": "medium",
        "topic": "Reproductive Physiology",
        "explanation": "Follicle-stimulating hormone (FSH) stimulates ovarian follicle development."
    },
    {
        "id": 45,
        "question": "Which cells present antigens to activate T cells?",
        "options": [
            "B cells",
            "Dendritic cells",
            "Neutrophils",
            "Erythrocytes"
        ],
        "answer": "Dendritic cells",
        "difficulty": "hard",
        "topic": "Immune System Physiology",
        "explanation": "Dendritic cells are antigen-presenting cells that activate T cells in the immune response."
    },
    {
        "id": 46,
        "question": "Which part of the ear converts sound waves into neural signals?",
        "options": [
            "Tympanic membrane",
            "Ossicles",
            "Cochlea",
            "Semicircular canals"
        ],
        "answer": "Cochlea",
        "difficulty": "medium",
        "topic": "Sensory Physiology",
        "explanation": "The cochlea contains hair cells that convert sound vibrations into neural signals."
    },
    {
        "id": 47,
        "question": "Which ion is primarily responsible for repolarization in an action potential?",
        "options": [
            "Sodium",
            "Potassium",
            "Calcium",
            "Chloride"
        ],
        "answer": "Potassium",
        "difficulty": "medium",
        "topic": "Nervous System Physiology",
        "explanation": "Potassium efflux through voltage-gated channels restores the negative membrane potential."
    },
    {
        "id": 48,
        "question": "Which hormone regulates metabolism and growth?",
        "options": [
            "Thyroxine",
            "Insulin",
            "Cortisol",
            "Melatonin"
        ],
        "answer": "Thyroxine",
        "difficulty": "medium",
        "topic": "Endocrine Physiology",
        "explanation": "Thyroxine (T4), produced by the thyroid, regulates metabolic rate and growth."
    },
    {
        "id": 49,
        "question": "Which blood component is essential for clotting?",
        "options": [
            "Plasma",
            "Platelets",
            "Red blood cells",
            "White blood cells"
        ],
        "answer": "Platelets",
        "difficulty": "easy",
        "topic": "Cardiovascular Physiology",
        "explanation": "Platelets form clots to stop bleeding by aggregating at injury sites."
    },
    {
        "id": 50,
        "question": "Which factor decreases respiratory rate?",
        "options": [
            "High CO2 levels",
            "Low O2 levels",
            "Low CO2 levels",
            "High pH"
        ],
        "answer": "Low CO2 levels",
        "difficulty": "hard",
        "topic": "Respiratory Physiology",
        "explanation": "Low carbon dioxide levels reduce stimulation of chemoreceptors, slowing respiration."
    },
    {
        "id": 51,
        "question": "Which organ produces intrinsic factor for vitamin B12 absorption?",
        "options": [
            "Liver",
            "Stomach",
            "Pancreas",
            "Small intestine"
        ],
        "answer": "Stomach",
        "difficulty": "hard",
        "topic": "Digestive Physiology",
        "explanation": "Intrinsic factor, secreted by parietal cells in the stomach, is necessary for B12 absorption."
    },
    {
        "id": 52,
        "question": "Which hormone is released in response to low blood pressure?",
        "options": [
            "ANP",
            "ADH",
            "Aldosterone",
            "Insulin"
        ],
        "answer": "Aldosterone",
        "difficulty": "medium",
        "topic": "Renal Physiology",
        "explanation": "Aldosterone is released via the renin-angiotensin system to raise blood pressure."
    },
    {
        "id": 53,
        "question": "Which hormone inhibits ovulation during pregnancy?",
        "options": [
            "Estrogen",
            "Progesterone",
            "FSH",
            "LH"
        ],
        "answer": "Progesterone",
        "difficulty": "medium",
        "topic": "Reproductive Physiology",
        "explanation": "Progesterone prevents ovulation by inhibiting FSH and LH release during pregnancy."
    },
    {
        "id": 54,
        "question": "Which cells are the first responders to bacterial infections?",
        "options": [
            "Lymphocytes",
            "Neutrophils",
            "Macrophages",
            "Eosinophils"
        ],
        "answer": "Neutrophils",
        "difficulty": "medium",
        "topic": "Immune System Physiology",
        "explanation": "Neutrophils are the most abundant white blood cells and rapidly respond to bacterial infections."
    },
    {
        "id": 55,
        "question": "Which structure in the eye is responsible for color vision?",
        "options": [
            "Rods",
            "Cones",
            "Ganglion cells",
            "Bipolar cells"
        ],
        "answer": "Cones",
        "difficulty": "medium",
        "topic": "Sensory Physiology",
        "explanation": "Cones in the retina detect different wavelengths of light, enabling color vision."
    },
    {
        "id": 56,
        "question": "Which part of the brain coordinates voluntary movements?",
        "options": [
            "Cerebellum",
            "Hypothalamus",
            "Thalamus",
            "Medulla oblongata"
        ],
        "answer": "Cerebellum",
        "difficulty": "medium",
        "topic": "Nervous System Physiology",
        "explanation": "The cerebellum fine-tunes motor movements for coordination and balance."
    },
    {
        "id": 57,
        "question": "Which hormone is secreted by the adrenal cortex to manage stress?",
        "options": [
            "Epinephrine",
            "Cortisol",
            "Aldosterone",
            "Norepinephrine"
        ],
        "answer": "Cortisol",
        "difficulty": "medium",
        "topic": "Endocrine Physiology",
        "explanation": "Cortisol helps the body respond to stress by regulating metabolism and immune responses."
    },
    {
        "id": 58,
        "question": "Which factor increases cardiac output?",
        "options": [
            "Decreased heart rate",
            "Increased stroke volume",
            "Increased vagal tone",
            "Decreased venous return"
        ],
        "answer": "Increased stroke volume",
        "difficulty": "medium",
        "topic": "Cardiovascular Physiology",
        "explanation": "Cardiac output is the product of heart rate and stroke volume; increasing stroke volume raises it."
    },
    {
        "id": 59,
        "question": "Which process drives oxygen diffusion from alveoli to blood?",
        "options": [
            "Active transport",
            "Facilitated diffusion",
            "Simple diffusion",
            "Osmosis"
        ],
        "answer": "Simple diffusion",
        "difficulty": "medium",
        "topic": "Respiratory Physiology",
        "explanation": "Oxygen moves from high to low concentration across alveolar membranes by simple diffusion."
    },
    {
        "id": 60,
        "question": "Which hormone stimulates gastric acid secretion in the stomach?",
        "options": [
            "Gastrin",
            "Secretin",
            "Cholecystokinin",
            "Somatostatin"
        ],
        "answer": "Gastrin",
        "difficulty": "hard",
        "topic": "Digestive Physiology",
        "explanation": "Gastrin, released by G cells, stimulates parietal cells to secrete hydrochloric acid."
    },
    {
        "id": 61,
        "question": "Which structure regulates urine concentration in the nephron?",
        "options": [
            "Glomerulus",
            "Loop of Henle",
            "Proximal tubule",
            "Distal tubule"
        ],
        "answer": "Loop of Henle",
        "difficulty": "hard",
        "topic": "Renal Physiology",
        "explanation": "The loop of Henle creates a concentration gradient for urine concentration."
    },
    {
        "id": 62,
        "question": "Which hormone supports sperm production in males?",
        "options": [
            "FSH",
            "LH",
            "Prolactin",
            "Oxytocin"
        ],
        "answer": "FSH",
        "difficulty": "medium",
        "topic": "Reproductive Physiology",
        "explanation": "Follicle-stimulating hormone (FSH) stimulates Sertoli cells to support spermatogenesis."
    },
    {
        "id": 63,
        "question": "Which molecule activates the complement system in immunity?",
        "options": [
            "Histamine",
            "Cytokines",
            "Antibodies",
            "Interferons"
        ],
        "answer": "Antibodies",
        "difficulty": "hard",
        "topic": "Immune System Physiology",
        "explanation": "Antibodies bind to pathogens, activating the complement system to enhance immune responses."
    },
    {
        "id": 64,
        "question": "Which cells in the retina transmit visual signals to the brain?",
        "options": [
            "Rods",
            "Cones",
            "Ganglion cells",
            "Bipolar cells"
        ],
        "answer": "Ganglion cells",
        "difficulty": "hard",
        "topic": "Sensory Physiology",
        "explanation": "Ganglion cells form the optic nerve, transmitting visual signals to the brain."
    },
    {
        "id": 65,
        "question": "Which neurotransmitter inhibits synaptic transmission in the CNS?",
        "options": [
            "Glutamate",
            "GABA",
            "Acetylcholine",
            "Dopamine"
        ],
        "answer": "GABA",
        "difficulty": "medium",
        "topic": "Nervous System Physiology",
        "explanation": "GABA is the primary inhibitory neurotransmitter, reducing neuronal excitability."
    },
    {
        "id": 66,
        "question": "Which hormone regulates blood calcium by promoting bone resorption?",
        "options": [
            "Calcitonin",
            "Parathyroid hormone",
            "Thyroxine",
            "Vitamin D"
        ],
        "answer": "Parathyroid hormone",
        "difficulty": "medium",
        "topic": "Endocrine Physiology",
        "explanation": "Parathyroid hormone increases blood calcium by stimulating osteoclast activity."
    },
    {
        "id": 67,
        "question": "Which blood vessel has the lowest blood pressure?",
        "options": [
            "Artery",
            "Arteriole",
            "Capillary",
            "Vein"
        ],
        "answer": "Vein",
        "difficulty": "medium",
        "topic": "Cardiovascular Physiology",
        "explanation": "Veins have the lowest blood pressure due to their distance from the heart’s pumping action."
    },
    {
        "id": 68,
        "question": "Which muscle relaxes during exhalation?",
        "options": [
            "Diaphragm",
            "External intercostals",
            "Internal intercostals",
            "Abdominal muscles"
        ],
        "answer": "Diaphragm",
        "difficulty": "medium",
        "topic": "Respiratory Physiology",
        "explanation": "The diaphragm relaxes during exhalation, allowing the thoracic cavity to decrease in volume."
    },
    {
        "id": 69,
        "question": "Which hormone inhibits gastric emptying to regulate digestion?",
        "options": [
            "Gastrin",
            "Secretin",
            "Cholecystokinin",
            "Somatostatin"
        ],
        "answer": "Cholecystokinin",
        "difficulty": "hard",
        "topic": "Digestive Physiology",
        "explanation": "Cholecystokinin slows gastric emptying to allow proper digestion in the small intestine."
    },
    {
        "id": 70,
        "question": "Which substance is secreted by the kidneys to regulate blood pressure?",
        "options": [
            "Renin",
            "Erythropoietin",
            "ADH",
            "ANP"
        ],
        "answer": "Renin",
        "difficulty": "medium",
        "topic": "Renal Physiology",
        "explanation": "Renin activates the renin-angiotensin system to increase blood pressure."
    },
    {
        "id": 71,
        "question": "Which hormone is secreted by the corpus luteum after ovulation?",
        "options": [
            "Estrogen",
            "Progesterone",
            "FSH",
            "LH"
        ],
        "answer": "Progesterone",
        "difficulty": "medium",
        "topic": "Reproductive Physiology",
        "explanation": "The corpus luteum secretes progesterone to maintain the uterine lining post-ovulation."
    },
    {
        "id": 72,
        "question": "Which cells release histamine during allergic reactions?",
        "options": [
            "Mast cells",
            "B cells",
            "T cells",
            "Neutrophils"
        ],
        "answer": "Mast cells",
        "difficulty": "hard",
        "topic": "Immune System Physiology",
        "explanation": "Mast cells release histamine, causing inflammation during allergic responses."
    },
    {
        "id": 73,
        "question": "Which part of the eye controls pupil size?",
        "options": [
            "Cornea",
            "Iris",
            "Lens",
            "Retina"
        ],
        "answer": "Iris",
        "difficulty": "easy",
        "topic": "Sensory Physiology",
        "explanation": "The iris adjusts pupil size to regulate the amount of light entering the eye."
    },
    {
        "id": 74,
        "question": "Which part of the brain processes emotions and memory?",
        "options": [
            "Cerebellum",
            "Limbic system",
            "Thalamus",
            "Medulla oblongata"
        ],
        "answer": "Limbic system",
        "difficulty": "medium",
        "topic": "Nervous System Physiology",
        "explanation": "The limbic system, including the amygdala and hippocampus, regulates emotions and memory."
    },
    {
        "id": 75,
        "question": "Which hormone is secreted by the posterior pituitary to regulate water balance?",
        "options": [
            "Oxytocin",
            "ADH",
            "Prolactin",
            "Growth hormone"
        ],
        "answer": "ADH",
        "difficulty": "medium",
        "topic": "Endocrine Physiology",
        "explanation": "Antidiuretic hormone (ADH) promotes water reabsorption in the kidneys."
    },
    {
        "id": 76,
        "question": "Which factor decreases blood pressure?",
        "options": [
            "Increased cardiac output",
            "Vasoconstriction",
            "Increased venous return",
            "Vasodilation"
        ],
        "answer": "Vasodilation",
        "difficulty": "medium",
        "topic": "Cardiovascular Physiology",
        "explanation": "Vasodilation widens blood vessels, reducing resistance and lowering blood pressure."
    },
    {
        "id": 77,
        "question": "Which gas is transported in blood primarily as bicarbonate ions?",
        "options": [
            "Oxygen",
            "Carbon dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "answer": "Carbon dioxide",
        "difficulty": "medium",
        "topic": "Respiratory Physiology",
        "explanation": "Most carbon dioxide is converted to bicarbonate ions in red blood cells for transport."
    },
    {
        "id": 78,
        "question": "Which hormone stimulates bile release from the gallbladder?",
        "options": [
            "Gastrin",
            "Secretin",
            "Cholecystokinin",
            "Somatostatin"
        ],
        "answer": "Cholecystokinin",
        "difficulty": "hard",
        "topic": "Digestive Physiology",
        "explanation": "Cholecystokinin stimulates gallbladder contraction to release bile for fat digestion."
    },
    {
        "id": 79,
        "question": "Which part of the nephron is impermeable to water without ADH?",
        "options": [
            "Proximal tubule",
            "Loop of Henle",
            "Distal tubule",
            "Collecting duct"
        ],
        "answer": "Distal tubule",
        "difficulty": "hard",
        "topic": "Renal Physiology",
        "explanation": "The distal tubule is relatively impermeable to water, unlike the collecting duct with ADH."
    },
    {
        "id": 80,
        "question": "Which hormone stimulates uterine contractions during childbirth?",
        "options": [
            "Prolactin",
            "Oxytocin",
            "Estrogen",
            "Progesterone"
        ],
        "answer": "Oxytocin",
        "difficulty": "medium",
        "topic": "Reproductive Physiology",
        "explanation": "Oxytocin stimulates uterine smooth muscle contractions during labor."
    },
    {
        "id": 81,
        "question": "Which cells produce interferon to combat viral infections?",
        "options": [
            "B cells",
            "T cells",
            "Infected cells",
            "Macrophages"
        ],
        "answer": "Infected cells",
        "difficulty": "hard",
        "topic": "Immune System Physiology",
        "explanation": "Virus-infected cells produce interferons to signal nearby cells to resist viral replication."
    },
    {
        "id": 82,
        "question": "Which structure in the ear detects sound frequency?",
        "options": [
            "Tympanic membrane",
            "Ossicles",
            "Cochlea",
            "Semicircular canals"
        ],
        "answer": "Cochlea",
        "difficulty": "medium",
        "topic": "Sensory Physiology",
        "explanation": "The cochlea’s basilar membrane vibrates at different frequencies to detect pitch."
    },
    {
        "id": 83,
        "question": "Which part of the brain initiates voluntary muscle movements?",
        "options": [
            "Cerebellum",
            "Frontal lobe",
            "Parietal lobe",
            "Occipital lobe"
        ],
        "answer": "Frontal lobe",
        "difficulty": "medium",
        "topic": "Nervous System Physiology",
        "explanation": "The frontal lobe’s motor cortex initiates voluntary skeletal muscle movements."
    },
    {
        "id": 84,
        "question": "Which hormone is secreted by the thyroid to regulate metabolism?",
        "options": [
            "Calcitonin",
            "Thyroxine",
            "Parathyroid hormone",
            "Cortisol"
        ],
        "answer": "Thyroxine",
        "difficulty": "easy",
        "topic": "Endocrine Physiology",
        "explanation": "Thyroxine (T4) increases metabolic rate in most body tissues."
    },
    {
        "id": 85,
        "question": "Which blood vessel delivers oxygenated blood to the heart muscle?",
        "options": [
            "Pulmonary artery",
            "Coronary artery",
            "Aorta",
            "Pulmonary vein"
        ],
        "answer": "Coronary artery",
        "difficulty": "medium",
        "topic": "Cardiovascular Physiology",
        "explanation": "Coronary arteries supply oxygenated blood to the myocardium."
    },
    {
        "id": 86,
        "question": "Which factor increases alveolar ventilation during exercise?",
        "options": [
            "Decreased CO2 levels",
            "Increased O2 levels",
            "Increased CO2 levels",
            "Decreased pH"
        ],
        "answer": "Increased CO2 levels",
        "difficulty": "hard",
        "topic": "Respiratory Physiology",
        "explanation": "Increased CO2 during exercise stimulates chemoreceptors to increase ventilation."
    },
    {
        "id": 87,
        "question": "Which organ absorbs the majority of water from digested food?",
        "options": [
            "Stomach",
            "Small intestine",
            "Large intestine",
            "Esophagus"
        ],
        "answer": "Large intestine",
        "difficulty": "medium",
        "topic": "Digestive Physiology",
        "explanation": "The large intestine absorbs water, forming feces from undigested material."
    },
    {
        "id": 88,
        "question": "Which hormone is released in response to high blood volume?",
        "options": [
            "ADH",
            "Aldosterone",
            "ANP",
            "Renin"
        ],
        "answer": "ANP",
        "difficulty": "hard",
        "topic": "Renal Physiology",
        "explanation": "Atrial natriuretic peptide (ANP) promotes sodium and water excretion to reduce blood volume."
    },
    {
        "id": 89,
        "question": "Which hormone is secreted by the placenta during pregnancy?",
        "options": [
            "FSH",
            "LH",
            "Progesterone",
            "Oxytocin"
        ],
        "answer": "Progesterone",
        "difficulty": "medium",
        "topic": "Reproductive Physiology",
        "explanation": "The placenta secretes progesterone to maintain pregnancy and prevent uterine contractions."
    },
    {
        "id": 90,
        "question": "Which cells are involved in long-term immunity?",
        "options": [
            "Neutrophils",
            "Memory cells",
            "Macrophages",
            "Eosinophils"
        ],
        "answer": "Memory cells",
        "difficulty": "medium",
        "topic": "Immune System Physiology",
        "explanation": "Memory B and T cells provide long-term immunity by responding rapidly to reinfections."
    },
    {
        "id": 91,
        "question": "Which structure in the eye bends light to focus it on the retina?",
        "options": [
            "Cornea",
            "Iris",
            "Sclera",
            "Choroid"
        ],
        "answer": "Cornea",
        "difficulty": "medium",
        "topic": "Sensory Physiology",
        "explanation": "The cornea is the primary refractive surface, bending light to focus it on the retina."
    },
    {
        "id": 92,
        "question": "Which neurotransmitter is released at the neuromuscular junction?",
        "options": [
            "GABA",
            "Glutamate",
            "Acetylcholine",
            "Dopamine"
        ],
        "answer": "Acetylcholine",
        "difficulty": "medium",
        "topic": "Nervous System Physiology",
        "explanation": "Acetylcholine is released at the neuromuscular junction to stimulate muscle contraction."
    },
    {
        "id": 93,
        "question": "Which hormone is secreted by the anterior pituitary to stimulate the adrenal cortex?",
        "options": [
            "TSH",
            "ACTH",
            "FSH",
            "LH"
        ],
        "answer": "ACTH",
        "difficulty": "medium",
        "topic": "Endocrine Physiology",
        "explanation": "Adrenocorticotropic hormone (ACTH) stimulates cortisol and aldosterone production."
    },
    {
        "id": 94,
        "question": "Which factor regulates blood flow to tissues?",
        "options": [
            "Heart rate",
            "Stroke volume",
            "Vascular resistance",
            "Blood viscosity"
        ],
        "answer": "Vascular resistance",
        "difficulty": "hard",
        "topic": "Cardiovascular Physiology",
        "explanation": "Vascular resistance, modulated by vessel diameter, controls blood flow to tissues."
    },
    {
        "id": 95,
        "question": "Which protein transports oxygen in muscle cells?",
        "options": [
            "Hemoglobin",
            "Myoglobin",
            "Albumin",
            "Fibrinogen"
        ],
        "answer": "Myoglobin",
        "difficulty": "medium",
        "topic": "Muscle Physiology",
        "explanation": "Myoglobin stores and transports oxygen within muscle cells for aerobic respiration."
    },
    {
        "id": 96,
        "question": "Which hormone inhibits acid secretion in the stomach?",
        "options": [
            "Gastrin",
            "Secretin",
            "Cholecystokinin",
            "Somatostatin"
        ],
        "answer": "Somatostatin",
        "difficulty": "hard",
        "topic": "Digestive Physiology",
        "explanation": "Somatostatin inhibits gastric acid secretion to regulate digestion."
    },
    {
        "id": 97,
        "question": "Which part of the nephron adjusts pH by secreting hydrogen ions?",
        "options": [
            "Proximal tubule",
            "Loop of Henle",
            "Distal tubule",
            "Collecting duct"
        ],
        "answer": "Distal tubule",
        "difficulty": "hard",
        "topic": "Renal Physiology",
        "explanation": "The distal tubule and collecting duct secrete hydrogen ions to regulate blood pH."
    },
    {
        "id": 98,
        "question": "Which hormone is secreted by Sertoli cells to regulate spermatogenesis?",
        "options": [
            "Testosterone",
            "Inhibin",
            "FSH",
            "LH"
        ],
        "answer": "Inhibin",
        "difficulty": "hard",
        "topic": "Reproductive Physiology",
        "explanation": "Inhibin, produced by Sertoli cells, inhibits FSH secretion to regulate sperm production."
    },
    {
        "id": 99,
        "question": "Which cells mediate allergic responses by releasing histamine?",
        "options": [
            "B cells",
            "T cells",
            "Mast cells",
            "Neutrophils"
        ],
        "answer": "Mast cells",
        "difficulty": "medium",
        "topic": "Immune System Physiology",
        "explanation": "Mast cells release histamine, triggering inflammation in allergic reactions."
    },
    {
        "id": 100,
        "question": "Which part of the brain processes auditory information?",
        "options": [
            "Frontal lobe",
            "Parietal lobe",
            "Temporal lobe",
            "Occipital lobe"
        ],
        "answer": "Temporal lobe",
        "difficulty": "medium",
        "topic": "Sensory Physiology",
        "explanation": "The temporal lobe’s auditory cortex processes sound information."
    },
    {
        "id": 101,
        "question": "Which process maintains stable internal conditions in the body?",
        "options": [
            "Metabolism",
            "Homeostasis",
            "Osmosis",
            "Apoptosis"
        ],
        "answer": "Homeostasis",
        "difficulty": "easy",
        "topic": "Introduction to Human Physiology",
        "explanation": "Homeostasis is the process of maintaining a stable internal environment despite external changes."
    },
    {
        "id": 102,
        "question": "Which type of feedback mechanism amplifies a response, such as during childbirth?",
        "options": [
            "Negative feedback",
            "Positive feedback",
            "Neutral feedback",
            "Static feedback"
        ],
        "answer": "Positive feedback",
        "difficulty": "medium",
        "topic": "Introduction to Human Physiology",
        "explanation": "Positive feedback amplifies a response, as seen in oxytocin release during labor."
    },
    {
        "id": 103,
        "question": "Which body fluid compartment contains the majority of total body water?",
        "options": [
            "Extracellular fluid",
            "Intracellular fluid",
            "Plasma",
            "Interstitial fluid"
        ],
        "answer": "Intracellular fluid",
        "difficulty": "medium",
        "topic": "Introduction to Human Physiology",
        "explanation": "Intracellular fluid (ICF) accounts for about two-thirds of total body water."
    },
    {
        "id": 104,
        "question": "Which transport mechanism requires energy to move substances against a concentration gradient?",
        "options": [
            "Diffusion",
            "Osmosis",
            "Active transport",
            "Facilitated diffusion"
        ],
        "answer": "Active transport",
        "difficulty": "easy",
        "topic": "Introduction to Human Physiology",
        "explanation": "Active transport uses ATP to move substances against their concentration gradient."
    },
    {
        "id": 105,
        "question": "Which organelle is responsible for protein synthesis in cells?",
        "options": [
            "Mitochondrion",
            "Ribosome",
            "Golgi apparatus",
            "Lysosome"
        ],
        "answer": "Ribosome",
        "difficulty": "easy",
        "topic": "Cell Physiology",
        "explanation": "Ribosomes synthesize proteins by translating mRNA into polypeptide chains."
    },
    {
        "id": 106,
        "question": "Which ion maintains the negative charge inside a cell at rest?",
        "options": [
            "Sodium",
            "Potassium",
            "Chloride",
            "Calcium"
        ],
        "answer": "Potassium",
        "difficulty": "medium",
        "topic": "Cell Physiology",
        "explanation": "Potassium ions, concentrated inside the cell, contribute to the negative resting membrane potential."
    },
    {
        "id": 107,
        "question": "Which process terminates a cell’s life in a controlled manner?",
        "options": [
            "Necrosis",
            "Apoptosis",
            "Mitosis",
            "Meiosis"
        ],
        "answer": "Apoptosis",
        "difficulty": "medium",
        "topic": "Cell Physiology",
        "explanation": "Apoptosis is programmed cell death, eliminating damaged or unnecessary cells."
    },
    {
        "id": 108,
        "question": "Which blood component transports oxygen to tissues?",
        "options": [
            "Platelets",
            "White blood cells",
            "Red blood cells",
            "Plasma"
        ],
        "answer": "Red blood cells",
        "difficulty": "easy",
        "topic": "Blood and Hematology",
        "explanation": "Red blood cells contain hemoglobin, which binds and transports oxygen."
    },
    {
        "id": 109,
        "question": "Where does hematopoiesis primarily occur in adults?",
        "options": [
            "Liver",
            "Spleen",
            "Bone marrow",
            "Lymph nodes"
        ],
        "answer": "Bone marrow",
        "difficulty": "medium",
        "topic": "Blood and Hematology",
        "explanation": "Hematopoiesis, the formation of blood cells, occurs in the bone marrow in adults."
    },
    {
        "id": 110,
        "question": "Which blood group can donate to all other blood groups?",
        "options": [
            "A",
            "B",
            "AB",
            "O"
        ],
        "answer": "O",
        "difficulty": "easy",
        "topic": "Blood and Hematology",
        "explanation": "Type O blood lacks antigens, making it a universal donor for transfusions."
    },
    {
        "id": 111,
        "question": "Which protein in red blood cells binds carbon dioxide for transport?",
        "options": [
            "Myoglobin",
            "Hemoglobin",
            "Albumin",
            "Fibrinogen"
        ],
        "answer": "Hemoglobin",
        "difficulty": "medium",
        "topic": "Blood and Hematology",
        "explanation": "Hemoglobin binds carbon dioxide, forming carbaminohemoglobin, for transport in blood."
    },
    {
        "id": 112,
        "question": "Which heart structure generates the initial electrical impulse for contraction?",
        "options": [
            "Atrioventricular node",
            "Sinoatrial node",
            "Bundle of His",
            "Purkinje fibers"
        ],
        "answer": "Sinoatrial node",
        "difficulty": "medium",
        "topic": "Cardiovascular Physiology",
        "explanation": "The sinoatrial node acts as the heart’s pacemaker, initiating each heartbeat."
    },
    {
        "id": 113,
        "question": "Which phase of the cardiac cycle is associated with the first heart sound?",
        "options": [
            "Atrial systole",
            "Ventricular systole",
            "Ventricular diastole",
            "Isovolumetric relaxation"
        ],
        "answer": "Ventricular systole",
        "difficulty": "medium",
        "topic": "Cardiovascular Physiology",
        "explanation": "The first heart sound (S1) occurs when the AV valves close at the start of ventricular systole."
    },
    {
        "id": 114,
        "question": "Which factor increases cardiac output during exercise?",
        "options": [
            "Decreased heart rate",
            "Increased venous return",
            "Increased vagal tone",
            "Decreased stroke volume"
        ],
        "answer": "Increased venous return",
        "difficulty": "hard",
        "topic": "Cardiovascular Physiology",
        "explanation": "Increased venous return enhances preload, boosting stroke volume and cardiac output."
    },
    {
        "id": 115,
        "question": "Which baroreceptors detect changes in blood pressure?",
        "options": [
            "Chemoreceptors",
            "Photoreceptors",
            "Baroreceptors",
            "Thermoreceptors"
        ],
        "answer": "Baroreceptors",
        "difficulty": "medium",
        "topic": "Cardiovascular Physiology",
        "explanation": "Baroreceptors in the carotid sinus and aortic arch monitor blood pressure changes."
    },
    {
        "id": 116,
        "question": "Which muscle contracts to reduce thoracic volume during forced exhalation?",
        "options": [
            "External intercostals",
            "Diaphragm",
            "Internal intercostals",
            "Sternocleidomastoid"
        ],
        "answer": "Internal intercostals",
        "difficulty": "medium",
        "topic": "Respiratory Physiology",
        "explanation": "Internal intercostals depress the ribs, reducing thoracic volume during forced exhalation."
    },
    {
        "id": 117,
        "question": "Which lung volume cannot be measured by spirometry?",
        "options": [
            "Tidal volume",
            "Residual volume",
            "Inspiratory reserve volume",
            "Expiratory reserve volume"
        ],
        "answer": "Residual volume",
        "difficulty": "medium",
        "topic": "Respiratory Physiology",
        "explanation": "Residual volume, the air remaining after maximal exhalation, cannot be measured directly."
    },
    {
        "id": 118,
        "question": "Which factor shifts the oxygen-hemoglobin dissociation curve to the right?",
        "options": [
            "Decreased CO2 levels",
            "Increased pH",
            "Increased temperature",
            "Decreased temperature"
        ],
        "answer": "Increased temperature",
        "difficulty": "hard",
        "topic": "Respiratory Physiology",
        "explanation": "Increased temperature reduces hemoglobin’s affinity for oxygen, shifting the curve right."
    },
    {
        "id": 119,
        "question": "Which brain region primarily controls the respiratory rhythm?",
        "options": [
            "Cerebellum",
            "Medulla oblongata",
            "Hypothalamus",
            "Thalamus"
        ],
        "answer": "Medulla oblongata",
        "difficulty": "medium",
        "topic": "Respiratory Physiology",
        "explanation": "The medulla oblongata contains respiratory centers that set the breathing rhythm."
    },
    {
        "id": 120,
        "question": "Which structure in the nephron filters blood to form filtrate?",
        "options": [
            "Proximal tubule",
            "Glomerulus",
            "Loop of Henle",
            "Collecting duct"
        ],
        "answer": "Glomerulus",
        "difficulty": "easy",
        "topic": "Renal Physiology",
        "explanation": "The glomerulus filters blood plasma into Bowman’s capsule to form filtrate."
    },
    {
        "id": 121,
        "question": "Which hormone increases water permeability in the collecting duct?",
        "options": [
            "Aldosterone",
            "Antidiuretic hormone",
            "Atrial natriuretic peptide",
            "Renin"
        ],
        "answer": "Antidiuretic hormone",
        "difficulty": "medium",
        "topic": "Renal Physiology",
        "explanation": "ADH increases aquaporin channels in the collecting duct, enhancing water reabsorption."
    },
    {
        "id": 122,
        "question": "Which ion is primarily reabsorbed in the proximal tubule?",
        "options": [
            "Potassium",
            "Sodium",
            "Calcium",
            "Chloride"
        ],
        "answer": "Sodium",
        "difficulty": "medium",
        "topic": "Renal Physiology",
        "explanation": "Sodium is actively reabsorbed in the proximal tubule, driving water and solute reabsorption."
    },
    {
        "id": 123,
        "question": "Which hormone regulates acid-base balance by promoting bicarbonate reabsorption?",
        "options": [
            "Aldosterone",
            "Angiotensin II",
            "Carbonic anhydrase",
            "Antidiuretic hormone"
        ],
        "answer": "Carbonic anhydrase",
        "difficulty": "hard",
        "topic": "Renal Physiology",
        "explanation": "Carbonic anhydrase in the proximal tubule facilitates bicarbonate reabsorption to buffer blood pH."
    },
    {
        "id": 124,
        "question": "Which process moves food through the esophagus?",
        "options": [
            "Segmentation",
            "Peristalsis",
            "Churning",
            "Mastication"
        ],
        "answer": "Peristalsis",
        "difficulty": "easy",
        "topic": "Gastrointestinal Physiology",
        "explanation": "Peristalsis is the wave-like muscle contraction that propels food through the digestive tract."
    },
    {
        "id": 125,
        "question": "Which hormone stimulates pancreatic enzyme secretion?",
        "options": [
            "Gastrin",
            "Secretin",
            "Cholecystokinin",
            "Somatostatin"
        ],
        "answer": "Cholecystokinin",
        "difficulty": "medium",
        "topic": "Gastrointestinal Physiology",
        "explanation": "Cholecystokinin stimulates the pancreas to release digestive enzymes into the duodenum."
    },
    {
        "id": 126,
        "question": "Which nutrient is primarily absorbed in the ileum?",
        "options": [
            "Fat-soluble vitamins",
            "Carbohydrates",
            "Proteins",
            "Vitamin B12"
        ],
        "answer": "Vitamin B12",
        "difficulty": "hard",
        "topic": "Gastrointestinal Physiology",
        "explanation": "The ileum absorbs vitamin B12, requiring intrinsic factor for uptake."
    },
    {
        "id": 127,
        "question": "Which organ detoxifies drugs and produces bile?",
        "options": [
            "Pancreas",
            "Liver",
            "Gallbladder",
            "Spleen"
        ],
        "answer": "Liver",
        "difficulty": "easy",
        "topic": "Gastrointestinal Physiology",
        "explanation": "The liver detoxifies substances and produces bile for fat digestion."
    },
    {
        "id": 128,
        "question": "Which part of a neuron receives incoming signals?",
        "options": [
            "Axon",
            "Dendrite",
            "Soma",
            "Synapse"
        ],
        "answer": "Dendrite",
        "difficulty": "easy",
        "topic": "Nervous System Physiology",
        "explanation": "Dendrites receive synaptic inputs from other neurons."
    },
    {
        "id": 129,
        "question": "Which neurotransmitter is primarily released at inhibitory synapses?",
        "options": [
            "Acetylcholine",
            "Dopamine",
            "GABA",
            "Norepinephrine"
        ],
        "answer": "GABA",
        "difficulty": "medium",
        "topic": "Nervous System Physiology",
        "explanation": "GABA is the primary inhibitory neurotransmitter in the central nervous system."
    },
    {
        "id": 130,
        "question": "Which reflex arc component carries the signal to the effector?",
        "options": [
            "Sensory neuron",
            "Interneuron",
            "Motor neuron",
            "Receptor"
        ],
        "answer": "Motor neuron",
        "difficulty": "medium",
        "topic": "Nervous System Physiology",
        "explanation": "The motor neuron transmits the signal from the spinal cord to the effector muscle or gland."
    },
    {
        "id": 131,
        "question": "Which division of the autonomic nervous system promotes digestion?",
        "options": [
            "Sympathetic",
            "Parasympathetic",
            "Somatic",
            "Enteric"
        ],
        "answer": "Parasympathetic",
        "difficulty": "medium",
        "topic": "Nervous System Physiology",
        "explanation": "The parasympathetic system stimulates digestion via the 'rest and digest' response."
    },
    {
        "id": 132,
        "question": "Which structure in the eye contains the optic disc?",
        "options": [
            "Cornea",
            "Retina",
            "Iris",
            "Lens"
        ],
        "answer": "Retina",
        "difficulty": "medium",
        "topic": "Special Senses",
        "explanation": "The optic disc, where the optic nerve exits, is located in the retina."
    },
    {
        "id": 133,
        "question": "Which part of the ear amplifies sound vibrations?",
        "options": [
            "Tympanic membrane",
            "Cochlea",
            "Ossicles",
            "Semicircular canals"
        ],
        "answer": "Ossicles",
        "difficulty": "medium",
        "topic": "Special Senses",
        "explanation": "The ossicles (malleus, incus, stapes) amplify sound vibrations from the tympanic membrane."
    },
    {
        "id": 134,
        "question": "Which structure in the inner ear detects linear acceleration?",
        "options": [
            "Cochlea",
            "Semicircular canals",
            "Utricle",
            "Organ of Corti"
        ],
        "answer": "Utricle",
        "difficulty": "hard",
        "topic": "Special Senses",
        "explanation": "The utricle, part of the vestibular system, detects linear acceleration and head tilt."
    },
    {
        "id": 135,
        "question": "Which chemical stimulates taste buds for sweet flavors?",
        "options": [
            "Sodium ions",
            "Glucose",
            "Hydrogen ions",
            "Capsaicin"
        ],
        "answer": "Glucose",
        "difficulty": "medium",
        "topic": "Special Senses",
        "explanation": "Glucose and other sugars bind to receptors on taste buds, signaling sweetness."
    },
    {
        "id": 136,
        "question": "Which protein is critical for muscle contraction in skeletal muscle?",
        "options": [
            "Collagen",
            "Actin",
            "Elastin",
            "Keratin"
        ],
        "answer": "Actin",
        "difficulty": "medium",
        "topic": "Muscular Physiology",
        "explanation": "Actin interacts with myosin in the sliding filament theory to cause muscle contraction."
    },
    {
        "id": 137,
        "question": "Which ion binds to troponin to initiate muscle contraction?",
        "options": [
            "Sodium",
            "Potassium",
            "Calcium",
            "Magnesium"
        ],
        "answer": "Calcium",
        "difficulty": "medium",
        "topic": "Muscular Physiology",
        "explanation": "Calcium binds to troponin, exposing myosin-binding sites on actin for contraction."
    },
    {
        "id": 138,
        "question": "Which structure transmits signals from motor neurons to skeletal muscle?",
        "options": [
            "Synapse",
            "Neuromuscular junction",
            "Gap junction",
            "Desmosome"
        ],
        "answer": "Neuromuscular junction",
        "difficulty": "medium",
        "topic": "Muscular Physiology",
        "explanation": "The neuromuscular junction is where motor neurons release acetylcholine to stimulate muscle."
    },
    {
        "id": 139,
        "question": "Which factor contributes to muscle fatigue during intense exercise?",
        "options": [
            "Increased ATP levels",
            "Lactic acid accumulation",
            "Increased oxygen supply",
            "Decreased CO2 levels"
        ],
        "answer": "Lactic acid accumulation",
        "difficulty": "medium",
        "topic": "Muscular Physiology",
        "explanation": "Lactic acid buildup lowers pH, impairing muscle contraction and causing fatigue."
    },
    {
        "id": 140,
        "question": "Which gland serves as the master regulator of the endocrine system?",
        "options": [
            "Thyroid",
            "Adrenal",
            "Pituitary",
            "Pancreas"
        ],
        "answer": "Pituitary",
        "difficulty": "easy",
        "topic": "Endocrine Physiology",
        "explanation": "The pituitary gland regulates other endocrine glands via hormone secretion."
    },
    {
        "id": 141,
        "question": "Which hormone stimulates cortisol release from the adrenal cortex?",
        "options": [
            "TSH",
            "ACTH",
            "FSH",
            "GH"
        ],
        "answer": "ACTH",
        "difficulty": "medium",
        "topic": "Endocrine Physiology",
        "explanation": "Adrenocorticotropic hormone (ACTH) stimulates cortisol production in the adrenal cortex."
    },
    {
        "id": 142,
        "question": "Which hormone promotes growth of long bones during childhood?",
        "options": [
            "Thyroxine",
            "Growth hormone",
            "Insulin",
            "Calcitonin"
        ],
        "answer": "Growth hormone",
        "difficulty": "medium",
        "topic": "Endocrine Physiology",
        "explanation": "Growth hormone stimulates bone growth via insulin-like growth factors."
    },
    {
        "id": 143,
        "question": "Which hormone regulates blood glucose by promoting glycogenolysis?",
        "options": [
            "Insulin",
            "Glucagon",
            "Somatostatin",
            "Amylin"
        ],
        "answer": "Glucagon",
        "difficulty": "medium",
        "topic": "Endocrine Physiology",
        "explanation": "Glucagon promotes glycogenolysis in the liver to raise blood glucose levels."
    },
    {
        "id": 144,
        "question": "Which process produces sperm in the testes?",
        "options": [
            "Oogenesis",
            "Spermatogenesis",
            "Folliculogenesis",
            "Gametogenesis"
        ],
        "answer": "Spermatogenesis",
        "difficulty": "easy",
        "topic": "Reproductive Physiology",
        "explanation": "Spermatogenesis is the production of sperm in the seminiferous tubules."
    },
    {
        "id": 145,
        "question": "Which hormone inhibits FSH secretion in males?",
        "options": [
            "Testosterone",
            "Inhibin",
            "LH",
            "Progesterone"
        ],
        "answer": "Inhibin",
        "difficulty": "hard",
        "topic": "Reproductive Physiology",
        "explanation": "Inhibin, produced by Sertoli cells, inhibits FSH to regulate spermatogenesis."
    },
    {
        "id": 146,
        "question": "Which phase of the menstrual cycle prepares the uterus for implantation?",
        "options": [
            "Follicular phase",
            "Ovulatory phase",
            "Luteal phase",
            "Menstrual phase"
        ],
        "answer": "Luteal phase",
        "difficulty": "medium",
        "topic": "Reproductive Physiology",
        "explanation": "The luteal phase involves progesterone secretion to thicken the uterine lining."
    },
    {
        "id": 147,
        "question": "Which hormone maintains pregnancy by preventing uterine contractions?",
        "options": [
            "Estrogen",
            "Progesterone",
            "Oxytocin",
            "FSH"
        ],
        "answer": "Progesterone",
        "difficulty": "medium",
        "topic": "Reproductive Physiology",
        "explanation": "Progesterone inhibits uterine contractions to maintain pregnancy."
    },
    {
        "id": 148,
        "question": "Which immune response is rapid and nonspecific?",
        "options": [
            "Adaptive immunity",
            "Innate immunity",
            "Active immunity",
            "Passive immunity"
        ],
        "answer": "Innate immunity",
        "difficulty": "easy",
        "topic": "Immune Physiology",
        "explanation": "Innate immunity provides immediate, nonspecific defense against pathogens."
    },
    {
        "id": 149,
        "question": "Which molecules signal immune cells to coordinate responses?",
        "options": [
            "Antibodies",
            "Cytokines",
            "Antigens",
            "Histamines"
        ],
        "answer": "Cytokines",
        "difficulty": "medium",
        "topic": "Immune Physiology",
        "explanation": "Cytokines are signaling molecules that regulate immune cell activity."
    },
    {
        "id": 150,
        "question": "Which cells retain information about past infections for faster responses?",
        "options": [
            "Neutrophils",
            "Macrophages",
            "Memory cells",
            "Plasma cells"
        ],
        "answer": "Memory cells",
        "difficulty": "medium",
        "topic": "Immune Physiology",
        "explanation": "Memory B and T cells enable rapid responses to previously encountered pathogens."
    },
    {
        "id": 151,
        "question": "Which process increases body temperature to combat infection?",
        "options": [
            "Shivering",
            "Sweating",
            "Fever",
            "Vasodilation"
        ],
        "answer": "Fever",
        "difficulty": "easy",
        "topic": "Temperature Regulation and Metabolism",
        "explanation": "Fever raises body temperature to enhance immune function against pathogens."
    },
    {
        "id": 152,
        "question": "Which mechanism dissipates heat through evaporation?",
        "options": [
            "Shivering",
            "Sweating",
            "Vasoconstriction",
            "Non-shivering thermogenesis"
        ],
        "answer": "Sweating",
        "difficulty": "easy",
        "topic": "Temperature Regulation and Metabolism",
        "explanation": "Sweating cools the body as sweat evaporates from the skin surface."
    },
    {
        "id": 153,
        "question": "Which factor increases basal metabolic rate?",
        "options": [
            "Hypothyroidism",
            "Starvation",
            "Increased muscle mass",
            "Aging"
        ],
        "answer": "Increased muscle mass",
        "difficulty": "medium",
        "topic": "Temperature Regulation and Metabolism",
        "explanation": "Muscle tissue is metabolically active, increasing BMR with greater muscle mass."
    },
    {
        "id": 154,
        "question": "Which hormone regulates circadian rhythms?",
        "options": [
            "Cortisol",
            "Melatonin",
            "Insulin",
            "Thyroxine"
        ],
        "answer": "Melatonin",
        "difficulty": "medium",
        "topic": "Integrative Physiology",
        "explanation": "Melatonin, secreted by the pineal gland, regulates sleep-wake cycles."
    },
    {
        "id": 155,
        "question": "Which physiological change occurs in muscles during exercise?",
        "options": [
            "Decreased blood flow",
            "Increased ATP production",
            "Decreased oxygen demand",
            "Increased glycogen storage"
        ],
        "answer": "Increased ATP production",
        "difficulty": "medium",
        "topic": "Integrative Physiology",
        "explanation": "Muscles increase ATP production via aerobic and anaerobic pathways during exercise."
    },
    {
        "id": 156,
        "question": "Which hormone is elevated during the stress response?",
        "options": [
            "Insulin",
            "Cortisol",
            "Oxytocin",
            "Prolactin"
        ],
        "answer": "Cortisol",
        "difficulty": "medium",
        "topic": "Integrative Physiology",
        "explanation": "Cortisol is released during stress to mobilize energy and suppress non-essential functions."
    },
    {
        "id": 157,
        "question": "Which physiological change is associated with aging?",
        "options": [
            "Increased muscle mass",
            "Decreased bone density",
            "Increased cardiac output",
            "Enhanced immune response"
        ],
        "answer": "Decreased bone density",
        "difficulty": "medium",
        "topic": "Integrative Physiology",
        "explanation": "Aging reduces bone density due to decreased osteoblast activity and hormonal changes."
    },
    {
        "id": 158,
        "question": "Which blood vessel facilitates nutrient exchange with tissues?",
        "options": [
            "Artery",
            "Vein",
            "Capillary",
            "Arteriole"
        ],
        "answer": "Capillary",
        "difficulty": "easy",
        "topic": "Cardiovascular Physiology",
        "explanation": "Capillaries have thin walls that allow nutrient and gas exchange with tissues."
    },
    {
        "id": 159,
        "question": "Which ECG wave represents ventricular depolarization?",
        "options": [
            "P wave",
            "QRS complex",
            "T wave",
            "U wave"
        ],
        "answer": "QRS complex",
        "difficulty": "medium",
        "topic": "Cardiovascular Physiology",
        "explanation": "The QRS complex reflects the rapid depolarization of the ventricles."
    },
    {
        "id": 160,
        "question": "Which factor enhances oxygen unloading in active tissues?",
        "options": [
            "High pH",
            "Low CO2 levels",
            "High temperature",
            "Low temperature"
        ],
        "answer": "High temperature",
        "difficulty": "hard",
        "topic": "Respiratory Physiology",
        "explanation": "High temperature in active tissues reduces hemoglobin’s oxygen affinity, aiding unloading."
    },
    {
        "id": 161,
        "question": "Which structure secretes renin to regulate blood pressure?",
        "options": [
            "Glomerulus",
            "Juxtaglomerular cells",
            "Podocytes",
            "Collecting duct"
        ],
        "answer": "Juxtaglomerular cells",
        "difficulty": "hard",
        "topic": "Renal Physiology",
        "explanation": "Juxtaglomerular cells secrete renin to activate the renin-angiotensin system."
    },
    {
        "id": 162,
        "question": "Which hormone inhibits sodium excretion in the kidneys?",
        "options": [
            "ANP",
            "ADH",
            "Aldosterone",
            "Erythropoietin"
        ],
        "answer": "Aldosterone",
        "difficulty": "medium",
        "topic": "Renal Physiology",
        "explanation": "Aldosterone promotes sodium reabsorption, increasing blood volume and pressure."
    },
    {
        "id": 163,
        "question": "Which part of the digestive system absorbs most water?",
        "options": [
            "Stomach",
            "Small intestine",
            "Large intestine",
            "Esophagus"
        ],
        "answer": "Large intestine",
        "difficulty": "easy",
        "topic": "Gastrointestinal Physiology",
        "explanation": "The large intestine absorbs water, forming feces from digestive waste."
    },
    {
        "id": 164,
        "question": "Which nervous system controls involuntary GI motility?",
        "options": [
            "Somatic",
            "Sympathetic",
            "Parasympathetic",
            "Enteric"
        ],
        "answer": "Enteric",
        "difficulty": "hard",
        "topic": "Gastrointestinal Physiology",
        "explanation": "The enteric nervous system regulates GI motility and secretion independently."
    },
    {
        "id": 165,
        "question": "Which sensory receptor detects pain?",
        "options": [
            "Mechanoreceptor",
            "Nociceptor",
            "Photoreceptor",
            "Chemoreceptor"
        ],
        "answer": "Nociceptor",
        "difficulty": "medium",
        "topic": "Nervous System Physiology",
        "explanation": "Nociceptors detect painful stimuli, such as heat or tissue damage."
    },
    {
        "id": 166,
        "question": "Which brain structure relays sensory information to the cortex?",
        "options": [
            "Hypothalamus",
            "Thalamus",
            "Cerebellum",
            "Medulla oblongata"
        ],
        "answer": "Thalamus",
        "difficulty": "medium",
        "topic": "Nervous System Physiology",
        "explanation": "The thalamus acts as a relay station for sensory signals to the cerebral cortex."
    },
    {
        "id": 167,
        "question": "Which cells in the retina detect low light levels?",
        "options": [
            "Cones",
            "Rods",
            "Ganglion cells",
            "Bipolar cells"
        ],
        "answer": "Rods",
        "difficulty": "medium",
        "topic": "Special Senses",
        "explanation": "Rods are highly sensitive to low light, enabling night vision."
    },
    {
        "id": 168,
        "question": "Which muscle type is involuntary and striated?",
        "options": [
            "Skeletal muscle",
            "Cardiac muscle",
            "Smooth muscle",
            "Visceral muscle"
        ],
        "answer": "Cardiac muscle",
        "difficulty": "medium",
        "topic": "Muscular Physiology",
        "explanation": "Cardiac muscle is striated but contracts involuntarily in the heart."
    },
    {
        "id": 169,
        "question": "Which hormone stimulates milk production in the mammary glands?",
        "options": [
            "Oxytocin",
            "Prolactin",
            "Estrogen",
            "Progesterone"
        ],
        "answer": "Prolactin",
        "difficulty": "medium",
        "topic": "Endocrine Physiology",
        "explanation": "Prolactin, secreted by the anterior pituitary, promotes milk synthesis."
    },
    {
        "id": 170,
        "question": "Which hormone triggers ejaculation in males?",
        "options": [
            "Testosterone",
            "Oxytocin",
            "FSH",
            "LH"
        ],
        "answer": "Oxytocin",
        "difficulty": "hard",
        "topic": "Reproductive Physiology",
        "explanation": "Oxytocin stimulates smooth muscle contractions during ejaculation."
    },
    {
        "id": 171,
        "question": "Which hormone surges to induce ovulation?",
        "options": [
            "Estrogen",
            "Progesterone",
            "FSH",
            "LH"
        ],
        "answer": "LH",
        "difficulty": "medium",
        "topic": "Reproductive Physiology",
        "explanation": "A luteinizing hormone (LH) surge triggers ovulation in the ovarian cycle."
    },
    {
        "id": 172,
        "question": "Which immune cells destroy virus-infected cells?",
        "options": [
            "B cells",
            "Helper T cells",
            "Cytotoxic T cells",
            "Macrophages"
        ],
        "answer": "Cytotoxic T cells",
        "difficulty": "medium",
        "topic": "Immune Physiology",
        "explanation": "Cytotoxic T cells target and destroy virus-infected or cancerous cells."
    },
    {
        "id": 173,
        "question": "Which substance induces fever by acting on the hypothalamus?",
        "options": [
            "Histamine",
            "Cytokine",
            "Pyrogen",
            "Antigen"
        ],
        "answer": "Pyrogen",
        "difficulty": "hard",
        "topic": "Temperature Regulation and Metabolism",
        "explanation": "Pyrogens, such as IL-1, act on the hypothalamus to raise the body’s temperature set point."
    },
    {
        "id": 174,
        "question": "Which process increases heat production in skeletal muscles?",
        "options": [
            "Sweating",
            "Shivering",
            "Vasodilation",
            "Evaporation"
        ],
        "answer": "Shivering",
        "difficulty": "easy",
        "topic": "Temperature Regulation and Metabolism",
        "explanation": "Shivering generates heat through rapid muscle contractions."
    },
    {
        "id": 175,
        "question": "Which physiological adaptation occurs during prolonged exercise?",
        "options": [
            "Decreased heart rate",
            "Increased muscle glycogen",
            "Improved aerobic capacity",
            "Reduced blood flow"
        ],
        "answer": "Improved aerobic capacity",
        "difficulty": "medium",
        "topic": "Integrative Physiology",
        "explanation": "Prolonged exercise enhances mitochondrial function and aerobic capacity."
    },
    {
        "id": 176,
        "question": "Which ion channel opens during the depolarization phase of a cardiac action potential?",
        "options": [
            "Potassium channel",
            "Sodium channel",
            "Calcium channel",
            "Chloride channel"
        ],
        "answer": "Sodium channel",
        "difficulty": "hard",
        "topic": "Cardiovascular Physiology",
        "explanation": "Fast sodium channels open, causing rapid depolarization in cardiac cells."
    },
    {
        "id": 177,
        "question": "Which respiratory condition results from mismatched ventilation and perfusion?",
        "options": [
            "Hypoxia",
            "Hypercapnia",
            "V/Q mismatch",
            "Apnea"
        ],
        "answer": "V/Q mismatch",
        "difficulty": "hard",
        "topic": "Respiratory Physiology",
        "explanation": "Ventilation-perfusion (V/Q) mismatch impairs efficient gas exchange in the lungs."
    },
    {
        "id": 178,
        "question": "Which substance is secreted by the pancreas to neutralize stomach acid?",
        "options": [
            "Bile",
            "Bicarbonate",
            "Amylase",
            "Lipase"
        ],
        "answer": "Bicarbonate",
        "difficulty": "medium",
        "topic": "Gastrointestinal Physiology",
        "explanation": "Pancreatic bicarbonate neutralizes acidic chyme in the duodenum."
    },
    {
        "id": 179,
        "question": "Which brain region regulates hunger and thirst?",
        "options": [
            "Cerebellum",
            "Hypothalamus",
            "Thalamus",
            "Pons"
        ],
        "answer": "Hypothalamus",
        "difficulty": "medium",
        "topic": "Nervous System Physiology",
        "explanation": "The hypothalamus monitors blood composition to regulate hunger and thirst."
    },
    {
        "id": 180,
        "question": "Which hormone increases heart rate during the fight-or-flight response?",
        "options": [
            "Epinephrine",
            "Cortisol",
            "Insulin",
            "Thyroxine"
        ],
        "answer": "Epinephrine",
        "difficulty": "medium",
        "topic": "Endocrine Physiology",
        "explanation": "Epinephrine, released by the adrenal medulla, increases heart rate during stress."
    },
    {
        "id": 181,
        "question": "Which process in the kidneys concentrates urine?",
        "options": [
            "Glomerular filtration",
            "Countercurrent multiplication",
            "Tubular secretion",
            "Active reabsorption"
        ],
        "answer": "Countercurrent multiplication",
        "difficulty": "hard",
        "topic": "Renal Physiology",
        "explanation": "Countercurrent multiplication in the loop of Henle creates a gradient for urine concentration."
    },
    {
        "id": 182,
        "question": "Which hormone stimulates the release of thyroid hormones?",
        "options": [
            "TSH",
            "ACTH",
            "FSH",
            "GH"
        ],
        "answer": "TSH",
        "difficulty": "medium",
        "topic": "Endocrine Physiology",
        "explanation": "Thyroid-stimulating hormone (TSH) prompts the thyroid to release T3 and T4."
    },
    {
        "id": 183,
        "question": "Which immune cell differentiates into plasma cells to produce antibodies?",
        "options": [
            "T cell",
            "B cell",
            "Macrophage",
            "Neutrophil"
        ],
        "answer": "B cell",
        "difficulty": "medium",
        "topic": "Immune Physiology",
        "explanation": "B cells differentiate into plasma cells that secrete antibodies."
    },
    {
        "id": 184,
        "question": "Which structure in the cochlea contains sensory hair cells?",
        "options": [
            "Basilar membrane",
            "Tectorial membrane",
            "Organ of Corti",
            "Scala vestibuli"
        ],
        "answer": "Organ of Corti",
        "difficulty": "hard",
        "topic": "Special Senses",
        "explanation": "The organ of Corti contains hair cells that detect sound vibrations."
    },
    {
        "id": 185,
        "question": "Which hormone is secreted by the adrenal medulla during exercise?",
        "options": [
            "Cortisol",
            "Aldosterone",
            "Norepinephrine",
            "Insulin"
        ],
        "answer": "Norepinephrine",
        "difficulty": "medium",
        "topic": "Endocrine Physiology",
        "explanation": "Norepinephrine enhances blood flow and energy mobilization during exercise."
    },
    {
        "id": 186,
        "question": "Which blood component initiates the clotting cascade?",
        "options": [
            "Fibrinogen",
            "Platelets",
            "Red blood cells",
            "White blood cells"
        ],
        "answer": "Platelets",
        "difficulty": "medium",
        "topic": "Blood and Hematology",
        "explanation": "Platelets release factors that initiate the clotting cascade at injury sites."
    },
    {
        "id": 187,
        "question": "Which circulatory pathway supplies blood to the heart muscle?",
        "options": [
            "Pulmonary circulation",
            "Systemic circulation",
            "Coronary circulation",
            "Portal circulation"
        ],
        "answer": "Coronary circulation",
        "difficulty": "medium",
        "topic": "Cardiovascular Physiology",
        "explanation": "Coronary circulation delivers oxygenated blood to the myocardium."
    },
    {
        "id": 188,
        "question": "Which process in the alveoli facilitates CO2 removal?",
        "options": [
            "Active transport",
            "Simple diffusion",
            "Facilitated diffusion",
            "Osmosis"
        ],
        "answer": "Simple diffusion",
        "difficulty": "medium",
        "topic": "Respiratory Physiology",
        "explanation": "CO2 diffuses from blood to alveoli due to a concentration gradient."
    },
    {
        "id": 189,
        "question": "Which hormone inhibits gastric acid secretion?",
        "options": [
            "Gastrin",
            "Secretin",
            "Cholecystokinin",
            "Somatostatin"
        ],
        "answer": "Somatostatin",
        "difficulty": "hard",
        "topic": "Gastrointestinal Physiology",
        "explanation": "Somatostatin inhibits gastrin release, reducing gastric acid secretion."
    },
    {
        "id": 190,
        "question": "Which sensory receptor detects joint position?",
        "options": [
            "Nociceptor",
            "Proprioceptor",
            "Thermoreceptor",
            "Chemoreceptor"
        ],
        "answer": "Proprioceptor",
        "difficulty": "medium",
        "topic": "Nervous System Physiology",
        "explanation": "Proprioceptors in muscles and joints detect body position and movement."
    },
    {
        "id": 191,
        "question": "Which hormone is secreted during menopause due to low estrogen levels?",
        "options": [
            "FSH",
            "Progesterone",
            "Oxytocin",
            "Prolactin"
        ],
        "answer": "FSH",
        "difficulty": "hard",
        "topic": "Reproductive Physiology",
        "explanation": "FSH levels rise during menopause due to decreased ovarian estrogen feedback."
    },
    {
        "id": 192,
        "question": "Which immune response targets intracellular pathogens?",
        "options": [
            "Humoral immunity",
            "Cellular immunity",
            "Innate immunity",
            "Passive immunity"
        ],
        "answer": "Cellular immunity",
        "difficulty": "medium",
        "topic": "Immune Physiology",
        "explanation": "Cellular immunity, mediated by T cells, targets intracellular pathogens like viruses."
    },
    {
        "id": 193,
        "question": "Which process generates ATP during low oxygen conditions?",
        "options": [
            "Oxidative phosphorylation",
            "Glycolysis",
            "Krebs cycle",
            "Electron transport chain"
        ],
        "answer": "Glycolysis",
        "difficulty": "medium",
        "topic": "Temperature Regulation and Metabolism",
        "explanation": "Glycolysis produces ATP anaerobically in the cytoplasm."
    },
    {
        "id": 194,
        "question": "Which brain wave is associated with deep sleep?",
        "options": [
            "Alpha waves",
            "Beta waves",
            "Theta waves",
            "Delta waves"
        ],
        "answer": "Delta waves",
        "difficulty": "hard",
        "topic": "Integrative Physiology",
        "explanation": "Delta waves predominate during deep, restorative sleep (stage 3-4)."
    },
    {
        "id": 195,
        "question": "Which hormone stimulates red blood cell production in bone marrow?",
        "options": [
            "Renin",
            "Erythropoietin",
            "Aldosterone",
            "ANP"
        ],
        "answer": "Erythropoietin",
        "difficulty": "medium",
        "topic": "Blood and Hematology",
        "explanation": "Erythropoietin, secreted by the kidneys, stimulates erythropoiesis."
    },
    {
        "id": 196,
        "question": "Which structure in the heart delays the impulse between atria and ventricles?",
        "options": [
            "Sinoatrial node",
            "Atrioventricular node",
            "Bundle of His",
            "Purkinje fibers"
        ],
        "answer": "Atrioventricular node",
        "difficulty": "medium",
        "topic": "Cardiovascular Physiology",
        "explanation": "The AV node delays the impulse, ensuring coordinated atrial and ventricular contraction."
    },
    {
        "id": 197,
        "question": "Which respiratory muscle elevates the ribs during inspiration?",
        "options": [
            "Internal intercostals",
            "External intercostals",
            "Diaphragm",
            "Abdominal muscles"
        ],
        "answer": "External intercostals",
        "difficulty": "medium",
        "topic": "Respiratory Physiology",
        "explanation": "External intercostals lift the ribs, expanding the thoracic cavity during inspiration."
    },
    {
        "id": 198,
        "question": "Which enzyme in the small intestine digests disaccharides?",
        "options": [
            "Lipase",
            "Maltase",
            "Pepsin",
            "Trypsin"
        ],
        "answer": "Maltase",
        "difficulty": "medium",
        "topic": "Gastrointestinal Physiology",
        "explanation": "Maltase breaks down disaccharides like maltose into monosaccharides."
    },
    {
        "id": 199,
        "question": "Which neurotransmitter is released by sympathetic neurons?",
        "options": [
            "Acetylcholine",
            "Norepinephrine",
            "GABA",
            "Glutamate"
        ],
        "answer": "Norepinephrine",
        "difficulty": "medium",
        "topic": "Nervous System Physiology",
        "explanation": "Norepinephrine is the primary neurotransmitter of postganglionic sympathetic neurons."
    },
    {
        "id": 200,
        "question": "Which hormone is secreted by the placenta to support pregnancy?",
        "options": [
            "FSH",
            "LH",
            "Human chorionic gonadotropin",
            "Oxytocin"
        ],
        "answer": "Human chorionic gonadotropin",
        "difficulty": "hard",
        "topic": "Reproductive Physiology",
        "explanation": "hCG maintains the corpus luteum, ensuring progesterone production early in pregnancy."
    },
    {
        "id": 201,
        "question": "Which level of organization is directly above tissues in the human body?",
        "options": [
            "Cells",
            "Organs",
            "Systems",
            "Organelles"
        ],
        "answer": "Organs",
        "difficulty": "easy",
        "topic": "Introduction to Human Physiology",
        "explanation": "Organs are composed of multiple tissue types working together, forming the next level above tissues."
    },
    {
        "id": 202,
        "question": "Which type of membrane transport moves water across a semipermeable membrane?",
        "options": [
            "Diffusion",
            "Osmosis",
            "Active transport",
            "Facilitated diffusion"
        ],
        "answer": "Osmosis",
        "difficulty": "easy",
        "topic": "Introduction to Human Physiology",
        "explanation": "Osmosis is the passive movement of water across a semipermeable membrane from low to high solute concentration."
    },
    {
        "id": 203,
        "question": "Which feedback mechanism reduces the effect of a stimulus, such as blood glucose regulation?",
        "options": [
            "Positive feedback",
            "Negative feedback",
            "Neutral feedback",
            "Dynamic feedback"
        ],
        "answer": "Negative feedback",
        "difficulty": "medium",
        "topic": "Introduction to Human Physiology",
        "explanation": "Negative feedback counteracts a stimulus to maintain homeostasis, as seen in insulin regulating blood glucose."
    },
    {
        "id": 204,
        "question": "Which fluid compartment includes blood plasma and interstitial fluid?",
        "options": [
            "Intracellular fluid",
            "Extracellular fluid",
            "Cytoplasmic fluid",
            "Lymphatic fluid"
        ],
        "answer": "Extracellular fluid",
        "difficulty": "medium",
        "topic": "Introduction to Human Physiology",
        "explanation": "Extracellular fluid (ECF) includes all body fluids outside cells, such as plasma and interstitial fluid."
    },
    {
        "id": 205,
        "question": "Which organelle generates ATP through cellular respiration?",
        "options": [
            "Nucleus",
            "Endoplasmic reticulum",
            "Mitochondrion",
            "Golgi apparatus"
        ],
        "answer": "Mitochondrion",
        "difficulty": "easy",
        "topic": "Cell Physiology",
        "explanation": "Mitochondria produce ATP via oxidative phosphorylation in the electron transport chain."
    },
    {
        "id": 206,
        "question": "Which process involves the conversion of extracellular signals into intracellular responses?",
        "options": [
            "Apoptosis",
            "Signal transduction",
            "Mitosis",
            "Phagocytosis"
        ],
        "answer": "Signal transduction",
        "difficulty": "medium",
        "topic": "Cell Physiology",
        "explanation": "Signal transduction pathways relay external signals to trigger cellular responses."
    },
    {
        "id": 207,
        "question": "Which phase of the cell cycle involves DNA replication?",
        "options": [
            "G1 phase",
            "S phase",
            "G2 phase",
            "M phase"
        ],
        "answer": "S phase",
        "difficulty": "medium",
        "topic": "Cell Physiology",
        "explanation": "The S phase of the cell cycle is when DNA is replicated to prepare for cell division."
    },
    {
        "id": 208,
        "question": "Which blood component is primarily involved in immune defense?",
        "options": [
            "Red blood cells",
            "Platelets",
            "White blood cells",
            "Plasma"
        ],
        "answer": "White blood cells",
        "difficulty": "easy",
        "topic": "Blood and Hematology",
        "explanation": "White blood cells, or leukocytes, protect the body against pathogens and foreign substances."
    },
    {
        "id": 209,
        "question": "Which protein is converted to fibrin during blood clotting?",
        "options": [
            "Hemoglobin",
            "Fibrinogen",
            "Albumin",
            "Globulin"
        ],
        "answer": "Fibrinogen",
        "difficulty": "medium",
        "topic": "Blood and Hematology",
        "explanation": "Fibrinogen is cleaved by thrombin to form fibrin, which creates a clot mesh."
    },
    {
        "id": 210,
        "question": "Which blood type is considered the universal recipient?",
        "options": [
            "A",
            "B",
            "AB",
            "O"
        ],
        "answer": "AB",
        "difficulty": "easy",
        "topic": "Blood and Hematology",
        "explanation": "Type AB blood can receive all blood types due to the absence of antibodies against A, B, or O antigens."
    },
    {
        "id": 211,
        "question": "Which process forms new red blood cells in the bone marrow?",
        "options": [
            "Hematopoiesis",
            "Hemolysis",
            "Coagulation",
            "Phagocytosis"
        ],
        "answer": "Hematopoiesis",
        "difficulty": "medium",
        "topic": "Blood and Hematology",
        "explanation": "Hematopoiesis is the production of blood cells, including erythrocytes, in the bone marrow."
    },
    {
        "id": 212,
        "question": "Which heart valve prevents backflow from the aorta to the left ventricle?",
        "options": [
            "Mitral valve",
            "Tricuspid valve",
            "Aortic valve",
            "Pulmonary valve"
        ],
        "answer": "Aortic valve",
        "difficulty": "medium",
        "topic": "Cardiovascular Physiology",
        "explanation": "The aortic valve closes during diastole to prevent blood from flowing back into the left ventricle."
    },
    {
        "id": 213,
        "question": "Which factor decreases blood pressure by reducing peripheral resistance?",
        "options": [
            "Vasoconstriction",
            "Increased cardiac output",
            "Vasodilation",
            "Increased blood viscosity"
        ],
        "answer": "Vasodilation",
        "difficulty": "medium",
        "topic": "Cardiovascular Physiology",
        "explanation": "Vasodilation widens blood vessels, reducing resistance and lowering blood pressure."
    },
    {
        "id": 214,
        "question": "Which ECG wave represents atrial depolarization?",
        "options": [
            "P wave",
            "QRS complex",
            "T wave",
            "U wave"
        ],
        "answer": "P wave",
        "difficulty": "medium",
        "topic": "Cardiovascular Physiology",
        "explanation": "The P wave on an ECG corresponds to the depolarization of the atria before contraction."
    },
    {
        "id": 215,
        "question": "Which circulatory pathway carries blood to the lungs for oxygenation?",
        "options": [
            "Systemic circulation",
            "Pulmonary circulation",
            "Coronary circulation",
            "Portal circulation"
        ],
        "answer": "Pulmonary circulation",
        "difficulty": "easy",
        "topic": "Cardiovascular Physiology",
        "explanation": "Pulmonary circulation transports deoxygenated blood to the lungs and returns oxygenated blood to the heart."
    },
    {
        "id": 216,
        "question": "Which lung capacity includes all air that can be exhaled after a maximal inhalation?",
        "options": [
            "Tidal volume",
            "Vital capacity",
            "Residual volume",
            "Total lung capacity"
        ],
        "answer": "Vital capacity",
        "difficulty": "medium",
        "topic": "Respiratory Physiology",
        "explanation": "Vital capacity is the maximum volume of air that can be exhaled after a maximal inhalation."
    },
    {
        "id": 217,
        "question": "Which factor increases respiratory rate during exercise?",
        "options": [
            "Decreased CO2 levels",
            "Increased O2 levels",
            "Increased H+ concentration",
            "Decreased temperature"
        ],
        "answer": "Increased H+ concentration",
        "difficulty": "hard",
        "topic": "Respiratory Physiology",
        "explanation": "Increased H+ (low pH) from CO2 production stimulates chemoreceptors to increase breathing rate."
    },
    {
        "id": 218,
        "question": "Which protein reduces surface tension in the alveoli?",
        "options": [
            "Hemoglobin",
            "Surfactant",
            "Mucin",
            "Collagen"
        ],
        "answer": "Surfactant",
        "difficulty": "medium",
        "topic": "Respiratory Physiology",
        "explanation": "Surfactant lowers alveolar surface tension, preventing collapse during exhalation."
    },
    {
        "id": 219,
        "question": "Which blood vessel type has the thinnest walls for gas exchange?",
        "options": [
            "Artery",
            "Vein",
            "Capillary",
            "Arteriole"
        ],
        "answer": "Capillary",
        "difficulty": "easy",
        "topic": "Respiratory Physiology",
        "explanation": "Capillaries have thin walls, allowing efficient gas exchange between blood and alveoli."
    },
    {
        "id": 220,
        "question": "Which part of the nephron reabsorbs glucose and amino acids?",
        "options": [
            "Glomerulus",
            "Proximal tubule",
            "Distal tubule",
            "Collecting duct"
        ],
        "answer": "Proximal tubule",
        "difficulty": "medium",
        "topic": "Renal Physiology",
        "explanation": "The proximal tubule reabsorbs nearly all filtered glucose and amino acids via active transport."
    },
    {
        "id": 221,
        "question": "Which hormone reduces blood volume by promoting sodium excretion?",
        "options": [
            "Aldosterone",
            "Antidiuretic hormone",
            "Atrial natriuretic peptide",
            "Renin"
        ],
        "answer": "Atrial natriuretic peptide",
        "difficulty": "medium",
        "topic": "Renal Physiology",
        "explanation": "ANP promotes sodium and water excretion to decrease blood volume and pressure."
    },
    {
        "id": 222,
        "question": "Which process in the kidneys maintains blood pH by excreting H+ ions?",
        "options": [
            "Filtration",
            "Reabsorption",
            "Secretion",
            "Excretion"
        ],
        "answer": "Secretion",
        "difficulty": "medium",
        "topic": "Renal Physiology",
        "explanation": "The kidneys secrete H+ ions into the filtrate to regulate blood pH."
    },
    {
        "id": 223,
        "question": "Which structure in the kidney monitors blood flow and sodium levels?",
        "options": [
            "Glomerulus",
            "Macula densa",
            "Bowman’s capsule",
            "Vasa recta"
        ],
        "answer": "Macula densa",
        "difficulty": "hard",
        "topic": "Renal Physiology",
        "explanation": "The macula densa senses sodium levels and regulates renin release to control blood flow."
    },
    {
        "id": 224,
        "question": "Which enzyme in saliva begins carbohydrate digestion?",
        "options": [
            "Pepsin",
            "Amylase",
            "Lipase",
            "Trypsin"
        ],
        "answer": "Amylase",
        "difficulty": "easy",
        "topic": "Gastrointestinal Physiology",
        "explanation": "Salivary amylase (ptyalin) initiates starch digestion in the mouth."
    },
    {
        "id": 225,
        "question": "Which hormone inhibits pancreatic enzyme secretion?",
        "options": [
            "Gastrin",
            "Secretin",
            "Somatostatin",
            "Cholecystokinin"
        ],
        "answer": "Somatostatin",
        "difficulty": "hard",
        "topic": "Gastrointestinal Physiology",
        "explanation": "Somatostatin inhibits the release of pancreatic enzymes and other GI hormones."
    },
    {
        "id": 226,
        "question": "Which part of the digestive system stores bile?",
        "options": [
            "Liver",
            "Pancreas",
            "Gallbladder",
            "Duodenum"
        ],
        "answer": "Gallbladder",
        "difficulty": "easy",
        "topic": "Gastrointestinal Physiology",
        "explanation": "The gallbladder stores and concentrates bile produced by the liver."
    },
    {
        "id": 227,
        "question": "Which process mixes chyme with digestive enzymes in the small intestine?",
        "options": [
            "Peristalsis",
            "Segmentation",
            "Swallowing",
            "Defecation"
        ],
        "answer": "Segmentation",
        "difficulty": "medium",
        "topic": "Gastrointestinal Physiology",
        "explanation": "Segmentation mixes chyme with enzymes, enhancing digestion and absorption."
    },
    {
        "id": 228,
        "question": "Which part of a neuron conducts action potentials away from the cell body?",
        "options": [
            "Dendrite",
            "Soma",
            "Axon",
            "Synapse"
        ],
        "answer": "Axon",
        "difficulty": "easy",
        "topic": "Nervous System Physiology",
        "explanation": "The axon transmits action potentials from the cell body to synapses."
    },
    {
        "id": 229,
        "question": "Which ion is primarily responsible for hyperpolarization after an action potential?",
        "options": [
            "Sodium",
            "Potassium",
            "Calcium",
            "Chloride"
        ],
        "answer": "Potassium",
        "difficulty": "medium",
        "topic": "Nervous System Physiology",
        "explanation": "Potassium efflux during repolarization can overshoot, causing hyperpolarization."
    },
    {
        "id": 230,
        "question": "Which neurotransmitter is released at parasympathetic postganglionic synapses?",
        "options": [
            "Norepinephrine",
            "Acetylcholine",
            "Dopamine",
            "Serotonin"
        ],
        "answer": "Acetylcholine",
        "difficulty": "medium",
        "topic": "Nervous System Physiology",
        "explanation": "Parasympathetic postganglionic neurons release acetylcholine to stimulate target organs."
    },
    {
        "id": 231,
        "question": "Which brain structure integrates sensory and motor signals for balance?",
        "options": [
            "Thalamus",
            "Cerebellum",
            "Hypothalamus",
            "Pons"
        ],
        "answer": "Cerebellum",
        "difficulty": "medium",
        "topic": "Nervous System Physiology",
        "explanation": "The cerebellum coordinates movement and balance by integrating sensory and motor inputs."
    },
    {
        "id": 232,
        "question": "Which structure in the eye refracts light to focus it on the retina?",
        "options": [
            "Iris",
            "Cornea",
            "Sclera",
            "Choroid"
        ],
        "answer": "Cornea",
        "difficulty": "medium",
        "topic": "Special Senses",
        "explanation": "The cornea provides most of the eye’s refractive power, bending light toward the retina."
    },
    {
        "id": 233,
        "question": "Which part of the ear contains fluid that moves to detect sound?",
        "options": [
            "Tympanic membrane",
            "Ossicles",
            "Cochlea",
            "Eustachian tube"
        ],
        "answer": "Cochlea",
        "difficulty": "medium",
        "topic": "Special Senses",
        "explanation": "The cochlea’s fluid vibrates in response to sound, stimulating hair cells."
    },
    {
        "id": 234,
        "question": "Which sensory cells detect odors in the nasal cavity?",
        "options": [
            "Photoreceptors",
            "Olfactory receptors",
            "Gustatory receptors",
            "Mechanoreceptors"
        ],
        "answer": "Olfactory receptors",
        "difficulty": "easy",
        "topic": "Special Senses",
        "explanation": "Olfactory receptors in the nasal epithelium detect airborne chemical odors."
    },
    {
        "id": 235,
        "question": "Which structure in the vestibular system detects rotational movement?",
        "options": [
            "Utricle",
            "Saccule",
            "Semicircular canals",
            "Cochlea"
        ],
        "answer": "Semicircular canals",
        "difficulty": "medium",
        "topic": "Special Senses",
        "explanation": "Semicircular canals detect angular acceleration during head rotation."
    },
    {
        "id": 236,
        "question": "Which protein stores calcium in skeletal muscle cells?",
        "options": [
            "Troponin",
            "Tropomyosin",
            "Calsequestrin",
            "Actin"
        ],
        "answer": "Calsequestrin",
        "difficulty": "hard",
        "topic": "Muscular Physiology",
        "explanation": "Calsequestrin binds calcium in the sarcoplasmic reticulum, releasing it for contraction."
    },
    {
        "id": 237,
        "question": "Which type of muscle lacks striations and is found in blood vessels?",
        "options": [
            "Skeletal muscle",
            "Cardiac muscle",
            "Smooth muscle",
            "Striated muscle"
        ],
        "answer": "Smooth muscle",
        "difficulty": "easy",
        "topic": "Muscular Physiology",
        "explanation": "Smooth muscle is non-striated and controls involuntary movements in blood vessels."
    },
    {
        "id": 238,
        "question": "Which energy source is used first during muscle contraction?",
        "options": [
            "Glucose",
            "Creatine phosphate",
            "Fatty acids",
            "Glycogen"
        ],
        "answer": "Creatine phosphate",
        "difficulty": "medium",
        "topic": "Muscular Physiology",
        "explanation": "Creatine phosphate rapidly regenerates ATP for immediate muscle contraction."
    },
    {
        "id": 239,
        "question": "Which condition results from sustained muscle contraction without relaxation?",
        "options": [
            "Muscle fatigue",
            "Tetanus",
            "Cramp",
            "Atrophy"
        ],
        "answer": "Tetanus",
        "difficulty": "medium",
        "topic": "Muscular Physiology",
        "explanation": "Tetanus is a sustained muscle contraction due to rapid, repeated stimulation."
    },
    {
        "id": 240,
        "question": "Which hormone is released by the hypothalamus to control the anterior pituitary?",
        "options": [
            "Thyroxine",
            "Corticotropin-releasing hormone",
            "Insulin",
            "Melatonin"
        ],
        "answer": "Corticotropin-releasing hormone",
        "difficulty": "medium",
        "topic": "Endocrine Physiology",
        "explanation": "CRH stimulates the anterior pituitary to release ACTH, regulating the adrenal cortex."
    },
    {
        "id": 241,
        "question": "Which hormone increases blood calcium by enhancing intestinal absorption?",
        "options": [
            "Calcitonin",
            "Parathyroid hormone",
            "Vitamin D",
            "Thyroxine"
        ],
        "answer": "Vitamin D",
        "difficulty": "medium",
        "topic": "Endocrine Physiology",
        "explanation": "Vitamin D promotes calcium absorption in the intestines to raise blood calcium levels."
    },
    {
        "id": 242,
        "question": "Which gland secretes insulin and glucagon?",
        "options": [
            "Thyroid",
            "Adrenal",
            "Pancreas",
            "Pituitary"
        ],
        "answer": "Pancreas",
        "difficulty": "easy",
        "topic": "Endocrine Physiology",
        "explanation": "The pancreas releases insulin to lower blood glucose and glucagon to raise it."
    },
    {
        "id": 243,
        "question": "Which hormone increases metabolic rate during cold exposure?",
        "options": [
            "Insulin",
            "Thyroxine",
            "Cortisol",
            "Epinephrine"
        ],
        "answer": "Thyroxine",
        "difficulty": "medium",
        "topic": "Endocrine Physiology",
        "explanation": "Thyroxine (T4) increases metabolism to generate heat in response to cold."
    },
    {
        "id": 244,
        "question": "Which cells in the testes produce testosterone?",
        "options": [
            "Sertoli cells",
            "Leydig cells",
            "Spermatogonia",
            "Epididymal cells"
        ],
        "answer": "Leydig cells",
        "difficulty": "medium",
        "topic": "Reproductive Physiology",
        "explanation": "Leydig cells in the testes secrete testosterone in response to LH stimulation."
    },
    {
        "id": 245,
        "question": "Which structure stores sperm before ejaculation?",
        "options": [
            "Vas deferens",
            "Epididymis",
            "Seminal vesicles",
            "Prostate gland"
        ],
        "answer": "Epididymis",
        "difficulty": "medium",
        "topic": "Reproductive Physiology",
        "explanation": "The epididymis stores and matures sperm until ejaculation."
    },
    {
        "id": 246,
        "question": "Which hormone peaks during the ovulatory phase of the menstrual cycle?",
        "options": [
            "Progesterone",
            "Estrogen",
            "FSH",
            "LH"
        ],
        "answer": "LH",
        "difficulty": "medium",
        "topic": "Reproductive Physiology",
        "explanation": "The LH surge triggers ovulation by causing the follicle to rupture."
    },
    {
        "id": 247,
        "question": "Which process implants the blastocyst in the uterine wall?",
        "options": [
            "Fertilization",
            "Implantation",
            "Cleavage",
            "Gastrulation"
        ],
        "answer": "Implantation",
        "difficulty": "easy",
        "topic": "Reproductive Physiology",
        "explanation": "Implantation is the process where the blastocyst embeds in the uterine endometrium."
    },
    {
        "id": 248,
        "question": "Which immune cells engulf and digest pathogens in innate immunity?",
        "options": [
            "B cells",
            "T cells",
            "Macrophages",
            "Plasma cells"
        ],
        "answer": "Macrophages",
        "difficulty": "easy",
        "topic": "Immune Physiology",
        "explanation": "Macrophages phagocytose pathogens as part of the innate immune response."
    },
    {
        "id": 249,
        "question": "Which immune protein enhances phagocytosis by coating pathogens?",
        "options": [
            "Cytokine",
            "Opsonin",
            "Interferon",
            "Histamine"
        ],
        "answer": "Opsonin",
        "difficulty": "hard",
        "topic": "Immune Physiology",
        "explanation": "Opsonins, such as complement proteins, mark pathogens for phagocytosis."
    },
    {
        "id": 250,
        "question": "Which cells activate B cells by presenting antigens?",
        "options": [
            "Neutrophils",
            "Helper T cells",
            "Cytotoxic T cells",
            "Memory cells"
        ],
        "answer": "Helper T cells",
        "difficulty": "medium",
        "topic": "Immune Physiology",
        "explanation": "Helper T cells present antigens to B cells, triggering antibody production."
    },
    {
        "id": 251,
        "question": "Which substance causes vasodilation during inflammation?",
        "options": [
            "Histamine",
            "Cytokine",
            "Antibody",
            "Complement"
        ],
        "answer": "Histamine",
        "difficulty": "medium",
        "topic": "Immune Physiology",
        "explanation": "Histamine, released by mast cells, causes vasodilation and increased permeability in inflammation."
    },
    {
        "id": 252,
        "question": "Which process generates heat in brown adipose tissue?",
        "options": [
            "Shivering",
            "Non-shivering thermogenesis",
            "Sweating",
            "Vasodilation"
        ],
        "answer": "Non-shivering thermogenesis",
        "difficulty": "medium",
        "topic": "Temperature Regulation and Metabolism",
        "explanation": "Non-shivering thermogenesis in brown fat produces heat via uncoupled mitochondrial respiration."
    },
    {
        "id": 253,
        "question": "Which nutrient is the primary energy source for brain metabolism?",
        "options": [
            "Fatty acids",
            "Glucose",
            "Proteins",
            "Ketones"
        ],
        "answer": "Glucose",
        "difficulty": "easy",
        "topic": "Temperature Regulation and Metabolism",
        "explanation": "Glucose is the brain’s primary energy source under normal conditions."
    },
    {
        "id": 254,
        "question": "Which factor decreases metabolic rate during starvation?",
        "options": [
            "Increased thyroid hormone",
            "Decreased insulin",
            "Increased muscle activity",
            "Decreased thyroid hormone"
        ],
        "answer": "Decreased thyroid hormone",
        "difficulty": "hard",
        "topic": "Temperature Regulation and Metabolism",
        "explanation": "Reduced thyroid hormone levels lower metabolic rate to conserve energy during starvation."
    },
    {
        "id": 255,
        "question": "Which physiological change improves oxygen delivery during exercise?",
        "options": [
            "Decreased cardiac output",
            "Increased vasodilation",
            "Decreased hematocrit",
            "Increased vagal tone"
        ],
        "answer": "Increased vasodilation",
        "difficulty": "medium",
        "topic": "Integrative Physiology",
        "explanation": "Vasodilation increases blood flow to muscles, enhancing oxygen delivery during exercise."
    },
    {
        "id": 256,
        "question": "Which hormone regulates sleep-wake cycles by increasing at night?",
        "options": [
            "Cortisol",
            "Melatonin",
            "Insulin",
            "Adrenaline"
        ],
        "answer": "Melatonin",
        "difficulty": "easy",
        "topic": "Integrative Physiology",
        "explanation": "Melatonin, secreted by the pineal gland, promotes sleep by increasing at night."
    },
    {
        "id": 257,
        "question": "Which physiological change occurs in the cardiovascular system with aging?",
        "options": [
            "Increased arterial elasticity",
            "Decreased blood pressure",
            "Increased arterial stiffness",
            "Decreased heart rate"
        ],
        "answer": "Increased arterial stiffness",
        "difficulty": "medium",
        "topic": "Integrative Physiology",
        "explanation": "Aging causes arterial stiffening, increasing blood pressure and cardiovascular strain."
    },
    {
        "id": 258,
        "question": "Which blood vessel regulates blood flow into capillary beds?",
        "options": [
            "Artery",
            "Arteriole",
            "Vein",
            "Capillary"
        ],
        "answer": "Arteriole",
        "difficulty": "medium",
        "topic": "Cardiovascular Physiology",
        "explanation": "Arterioles control blood flow into capillaries via smooth muscle contraction."
    },
    {
        "id": 259,
        "question": "Which heart sound is caused by the closure of semilunar valves?",
        "options": [
            "S1",
            "S2",
            "S3",
            "S4"
        ],
        "answer": "S2",
        "difficulty": "medium",
        "topic": "Cardiovascular Physiology",
        "explanation": "The second heart sound (S2) occurs when the aortic and pulmonary valves close during diastole."
    },
    {
        "id": 260,
        "question": "Which factor promotes oxygen binding to hemoglobin in the lungs?",
        "options": [
            "High CO2 levels",
            "Low pH",
            "High O2 partial pressure",
            "High temperature"
        ],
        "answer": "High O2 partial pressure",
        "difficulty": "medium",
        "topic": "Respiratory Physiology",
        "explanation": "High oxygen partial pressure in the lungs favors oxygen binding to hemoglobin."
    },
    {
        "id": 261,
        "question": "Which part of the digestive system produces hydrochloric acid?",
        "options": [
            "Stomach",
            "Duodenum",
            "Pancreas",
            "Liver"
        ],
        "answer": "Stomach",
        "difficulty": "easy",
        "topic": "Gastrointestinal Physiology",
        "explanation": "Parietal cells in the stomach secrete hydrochloric acid to aid digestion."
    },
    {
        "id": 262,
        "question": "Which hormone stimulates the release of bicarbonate from the pancreas?",
        "options": [
            "Gastrin",
            "Secretin",
            "Cholecystokinin",
            "Somatostatin"
        ],
        "answer": "Secretin",
        "difficulty": "medium",
        "topic": "Gastrointestinal Physiology",
        "explanation": "Secretin triggers pancreatic bicarbonate release to neutralize stomach acid."
    },
    {
        "id": 263,
        "question": "Which sensory receptor detects changes in temperature?",
        "options": [
            "Nociceptor",
            "Thermoreceptor",
            "Mechanoreceptor",
            "Photoreceptor"
        ],
        "answer": "Thermoreceptor",
        "difficulty": "easy",
        "topic": "Nervous System Physiology",
        "explanation": "Thermoreceptors in the skin detect changes in environmental temperature."
    },
    {
        "id": 264,
        "question": "Which part of the brain processes visual information?",
        "options": [
            "Frontal lobe",
            "Parietal lobe",
            "Occipital lobe",
            "Temporal lobe"
        ],
        "answer": "Occipital lobe",
        "difficulty": "medium",
        "topic": "Nervous System Physiology",
        "explanation": "The occipital lobe’s visual cortex processes visual signals from the retina."
    },
    {
        "id": 265,
        "question": "Which cells in the retina are responsible for color vision?",
        "options": [
            "Rods",
            "Cones",
            "Ganglion cells",
            "Bipolar cells"
        ],
        "answer": "Cones",
        "difficulty": "medium",
        "topic": "Special Senses",
        "explanation": "Cones detect different wavelengths of light, enabling color vision."
    },
    {
        "id": 266,
        "question": "Which hormone stimulates the adrenal medulla during stress?",
        "options": [
            "ACTH",
            "CRH",
            "Acetylcholine",
            "TSH"
        ],
        "answer": "Acetylcholine",
        "difficulty": "hard",
        "topic": "Endocrine Physiology",
        "explanation": "Acetylcholine from sympathetic neurons stimulates epinephrine release in the adrenal medulla."
    },
    {
        "id": 267,
        "question": "Which substance in red blood cells binds carbon monoxide preferentially?",
        "options": [
            "Myoglobin",
            "Hemoglobin",
            "Fibrinogen",
            "Albumin"
        ],
        "answer": "Hemoglobin",
        "difficulty": "medium",
        "topic": "Blood and Hematology",
        "explanation": "Hemoglobin binds carbon monoxide with higher affinity than oxygen, causing toxicity."
    },
    {
        "id": 268,
        "question": "Which ion maintains blood pressure by regulating vascular tone?",
        "options": [
            "Sodium",
            "Potassium",
            "Calcium",
            "Chloride"
        ],
        "answer": "Calcium",
        "difficulty": "hard",
        "topic": "Cardiovascular Physiology",
        "explanation": "Calcium regulates smooth muscle contraction in blood vessels, affecting vascular tone."
    },
    {
        "id": 269,
        "question": "Which respiratory condition results from low oxygen levels in the blood?",
        "options": [
            "Hypercapnia",
            "Hypoxia",
            "Apnea",
            "Dyspnea"
        ],
        "answer": "Hypoxia",
        "difficulty": "medium",
        "topic": "Respiratory Physiology",
        "explanation": "Hypoxia is a deficiency of oxygen in the blood or tissues."
    },
    {
        "id": 270,
        "question": "Which part of the nephron is responsible for concentrating urine?",
        "options": [
            "Proximal tubule",
            "Loop of Henle",
            "Distal tubule",
            "Glomerulus"
        ],
        "answer": "Loop of Henle",
        "difficulty": "medium",
        "topic": "Renal Physiology",
        "explanation": "The loop of Henle creates a medullary concentration gradient for urine concentration."
    },
    {
        "id": 271,
        "question": "Which hormone promotes milk ejection during breastfeeding?",
        "options": [
            "Prolactin",
            "Oxytocin",
            "Estrogen",
            "Progesterone"
        ],
        "answer": "Oxytocin",
        "difficulty": "medium",
        "topic": "Reproductive Physiology",
        "explanation": "Oxytocin stimulates myoepithelial cells to eject milk from mammary glands."
    },
    {
        "id": 272,
        "question": "Which immune cells produce antibodies during an adaptive response?",
        "options": [
            "T cells",
            "Plasma cells",
            "Macrophages",
            "Neutrophils"
        ],
        "answer": "Plasma cells",
        "difficulty": "medium",
        "topic": "Immune Physiology",
        "explanation": "Plasma cells, derived from B cells, secrete antibodies to target antigens."
    },
    {
        "id": 273,
        "question": "Which process in muscles generates ATP during prolonged exercise?",
        "options": [
            "Glycolysis",
            "Creatine phosphate",
            "Oxidative phosphorylation",
            "Lactic acid fermentation"
        ],
        "answer": "Oxidative phosphorylation",
        "difficulty": "medium",
        "topic": "Muscular Physiology",
        "explanation": "Oxidative phosphorylation in mitochondria produces ATP for sustained muscle activity."
    },
    {
        "id": 274,
        "question": "Which brain wave is associated with alertness and concentration?",
        "options": [
            "Alpha waves",
            "Beta waves",
            "Theta waves",
            "Delta waves"
        ],
        "answer": "Beta waves",
        "difficulty": "medium",
        "topic": "Integrative Physiology",
        "explanation": "Beta waves are present during active mental states like alertness and problem-solving."
    },
    {
        "id": 275,
        "question": "Which hormone is secreted by the anterior pituitary to stimulate growth?",
        "options": [
            "TSH",
            "ACTH",
            "GH",
            "FSH"
        ],
        "answer": "GH",
        "difficulty": "medium",
        "topic": "Endocrine Physiology",
        "explanation": "Growth hormone (GH) promotes tissue growth and metabolism."
    },
    {
        "id": 276,
        "question": "Which blood vessel returns oxygenated blood from the lungs to the heart?",
        "options": [
            "Pulmonary artery",
            "Pulmonary vein",
            "Aorta",
            "Vena cava"
        ],
        "answer": "Pulmonary vein",
        "difficulty": "easy",
        "topic": "Cardiovascular Physiology",
        "explanation": "Pulmonary veins carry oxygenated blood from the lungs to the left atrium."
    },
    {
        "id": 277,
        "question": "Which enzyme digests proteins in the small intestine?",
        "options": [
            "Amylase",
            "Lipase",
            "Trypsin",
            "Maltase"
        ],
        "answer": "Trypsin",
        "difficulty": "medium",
        "topic": "Gastrointestinal Physiology",
        "explanation": "Trypsin, secreted by the pancreas, breaks down proteins into peptides in the small intestine."
    },
    {
        "id": 278,
        "question": "Which part of the brain controls involuntary functions like swallowing?",
        "options": [
            "Cerebellum",
            "Medulla oblongata",
            "Thalamus",
            "Hypothalamus"
        ],
        "answer": "Medulla oblongata",
        "difficulty": "medium",
        "topic": "Nervous System Physiology",
        "explanation": "The medulla oblongata regulates involuntary functions like swallowing and heart rate."
    },
    {
        "id": 279,
        "question": "Which hormone supports follicle development in the ovaries?",
        "options": [
            "Progesterone",
            "Estrogen",
            "FSH",
            "LH"
        ],
        "answer": "FSH",
        "difficulty": "medium",
        "topic": "Reproductive Physiology",
        "explanation": "Follicle-stimulating hormone (FSH) promotes ovarian follicle growth."
    },
    {
        "id": 280,
        "question": "Which immune cells release perforins to destroy infected cells?",
        "options": [
            "B cells",
            "Helper T cells",
            "Cytotoxic T cells",
            "Natural killer cells"
        ],
        "answer": "Cytotoxic T cells",
        "difficulty": "hard",
        "topic": "Immune Physiology",
        "explanation": "Cytotoxic T cells release perforins and granzymes to induce apoptosis in infected cells."
    },
    {
        "id": 281,
        "question": "Which structure in the eye adjusts the amount of light entering?",
        "options": [
            "Cornea",
            "Lens",
            "Iris",
            "Retina"
        ],
        "answer": "Iris",
        "difficulty": "easy",
        "topic": "Special Senses",
        "explanation": "The iris controls pupil size to regulate light entry into the eye."
    },
    {
        "id": 282,
        "question": "Which hormone increases blood pressure during hemorrhage?",
        "options": [
            "ANP",
            "ADH",
            "Insulin",
            "Calcitonin"
        ],
        "answer": "ADH",
        "difficulty": "medium",
        "topic": "Endocrine Physiology",
        "explanation": "Antidiuretic hormone (ADH) promotes water retention to maintain blood pressure."
    },
    {
        "id": 283,
        "question": "Which blood component carries most carbon dioxide in the blood?",
        "options": [
            "Hemoglobin",
            "Bicarbonate ions",
            "Plasma",
            "Platelets"
        ],
        "answer": "Bicarbonate ions",
        "difficulty": "medium",
        "topic": "Blood and Hematology",
        "explanation": "Most CO2 is transported as bicarbonate ions formed in red blood cells."
    },
    {
        "id": 284,
        "question": "Which factor increases stroke volume in the heart?",
        "options": [
            "Decreased preload",
            "Increased afterload",
            "Increased contractility",
            "Decreased venous return"
        ],
        "answer": "Increased contractility",
        "difficulty": "hard",
        "topic": "Cardiovascular Physiology",
        "explanation": "Increased contractility enhances the force of ventricular contraction, increasing stroke volume."
    },
    {
        "id": 285,
        "question": "Which respiratory muscle is active during quiet breathing?",
        "options": [
            "Internal intercostals",
            "External intercostals",
            "Diaphragm",
            "Abdominal muscles"
        ],
        "answer": "Diaphragm",
        "difficulty": "easy",
        "topic": "Respiratory Physiology",
        "explanation": "The diaphragm is the primary muscle for quiet inspiration, increasing thoracic volume."
    },
    {
        "id": 286,
        "question": "Which part of the small intestine absorbs iron?",
        "options": [
            "Duodenum",
            "Jejunum",
            "Ileum",
            "Cecum"
        ],
        "answer": "Duodenum",
        "difficulty": "hard",
        "topic": "Gastrointestinal Physiology",
        "explanation": "The duodenum is the primary site for iron absorption in the small intestine."
    },
    {
        "id": 287,
        "question": "Which reflex arc bypasses the brain for rapid response?",
        "options": [
            "Cranial reflex",
            "Spinal reflex",
            "Somatic reflex",
            "Autonomic reflex"
        ],
        "answer": "Spinal reflex",
        "difficulty": "medium",
        "topic": "Nervous System Physiology",
        "explanation": "Spinal reflexes, like the knee-jerk reflex, involve only the spinal cord for quick responses."
    },
    {
        "id": 288,
        "question": "Which hormone is secreted by the corpus luteum to support early pregnancy?",
        "options": [
            "Estrogen",
            "Progesterone",
            "FSH",
            "LH"
        ],
        "answer": "Progesterone",
        "difficulty": "medium",
        "topic": "Reproductive Physiology",
        "explanation": "Progesterone maintains the uterine lining for early pregnancy."
    },
    {
        "id": 289,
        "question": "Which immune cells are elevated during parasitic infections?",
        "options": [
            "Neutrophils",
            "Eosinophils",
            "Basophils",
            "Lymphocytes"
        ],
        "answer": "Eosinophils",
        "difficulty": "hard",
        "topic": "Immune Physiology",
        "explanation": "Eosinophils are specialized for combating parasitic infections and allergies."
    },
    {
        "id": 290,
        "question": "Which structure in the ear equalizes pressure between the middle ear and atmosphere?",
        "options": [
            "Cochlea",
            "Eustachian tube",
            "Semicircular canals",
            "Tympanic membrane"
        ],
        "answer": "Eustachian tube",
        "difficulty": "medium",
        "topic": "Special Senses",
        "explanation": "The Eustachian tube connects the middle ear to the pharynx, equalizing pressure."
    },
    {
        "id": 291,
        "question": "Which hormone lowers blood glucose by promoting cellular uptake?",
        "options": [
            "Glucagon",
            "Insulin",
            "Cortisol",
            "Epinephrine"
        ],
        "answer": "Insulin",
        "difficulty": "easy",
        "topic": "Endocrine Physiology",
        "explanation": "Insulin facilitates glucose uptake by cells, lowering blood glucose levels."
    },
    {
        "id": 292,
        "question": "Which blood vessel has the highest cross-sectional area in the body?",
        "options": [
            "Aorta",
            "Arterioles",
            "Capillaries",
            "Veins"
        ],
        "answer": "Capillaries",
        "difficulty": "hard",
        "topic": "Cardiovascular Physiology",
        "explanation": "Capillaries have the largest total cross-sectional area, slowing blood flow for exchange."
    },
    {
        "id": 293,
        "question": "Which gas is the primary driver of ventilation in healthy individuals?",
        "options": [
            "Oxygen",
            "Carbon dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "answer": "Carbon dioxide",
        "difficulty": "medium",
        "topic": "Respiratory Physiology",
        "explanation": "CO2 levels primarily regulate ventilation via central and peripheral chemoreceptors."
    },
    {
        "id": 294,
        "question": "Which organ produces erythropoietin to stimulate red blood cell production?",
        "options": [
            "Liver",
            "Spleen",
            "Kidney",
            "Bone marrow"
        ],
        "answer": "Kidney",
        "difficulty": "medium",
        "topic": "Blood and Hematology",
        "explanation": "The kidneys secrete erythropoietin in response to low oxygen levels."
    },
    {
        "id": 295,
        "question": "Which part of the digestive system absorbs fat-soluble vitamins?",
        "options": [
            "Stomach",
            "Duodenum",
            "Colon",
            "Esophagus"
        ],
        "answer": "Duodenum",
        "difficulty": "medium",
        "topic": "Gastrointestinal Physiology",
        "explanation": "Fat-soluble vitamins (A, D, E, K) are absorbed in the duodenum with dietary fats."
    },
    {
        "id": 296,
        "question": "Which neurotransmitter is involved in reward and motivation pathways?",
        "options": [
            "GABA",
            "Glutamate",
            "Dopamine",
            "Acetylcholine"
        ],
        "answer": "Dopamine",
        "difficulty": "medium",
        "topic": "Nervous System Physiology",
        "explanation": "Dopamine plays a key role in the brain’s reward and motivation circuits."
    },
    {
        "id": 297,
        "question": "Which hormone is secreted by the ovaries to regulate the menstrual cycle?",
        "options": [
            "Prolactin",
            "Estrogen",
            "Oxytocin",
            "ADH"
        ],
        "answer": "Estrogen",
        "difficulty": "easy",
        "topic": "Reproductive Physiology",
        "explanation": "Estrogen regulates the menstrual cycle and supports reproductive tissue development."
    },
    {
        "id": 298,
        "question": "Which immune cells are the first to arrive at an infection site?",
        "options": [
            "Lymphocytes",
            "Neutrophils",
            "Macrophages",
            "Dendritic cells"
        ],
        "answer": "Neutrophils",
        "difficulty": "medium",
        "topic": "Immune Physiology",
        "explanation": "Neutrophils are the first responders to bacterial infections, phagocytosing pathogens."
    },
    {
        "id": 299,
        "question": "Which muscle protein covers actin’s myosin-binding sites at rest?",
        "options": [
            "Troponin",
            "Tropomyosin",
            "Myoglobin",
            "Calsequestrin"
        ],
        "answer": "Tropomyosin",
        "difficulty": "hard",
        "topic": "Muscular Physiology",
        "explanation": "Tropomyosin blocks myosin-binding sites on actin until calcium binds to troponin."
    },
    {
        "id": 300,
        "question": "Which physiological process is disrupted in jet lag?",
        "options": [
            "Thermoregulation",
            "Circadian rhythm",
            "Metabolism",
            "Immune response"
        ],
        "answer": "Circadian rhythm",
        "difficulty": "easy",
        "topic": "Integrative Physiology",
        "explanation": "Jet lag disrupts the body’s circadian rhythm due to rapid time zone changes."
    },
    {
        "id": 301,
        "question": "Which term describes the ability of the body to maintain a stable internal environment?",
        "options": [
            "Metabolism",
            "Homeostasis",
            "Adaptation",
            "Regulation"
        ],
        "answer": "Homeostasis",
        "difficulty": "easy",
        "topic": "Introduction to Human Physiology",
        "explanation": "Homeostasis refers to the body's ability to maintain stable internal conditions despite external changes."
    },
    {
        "id": 302,
        "question": "Which type of transport moves substances along their concentration gradient without energy?",
        "options": [
            "Active transport",
            "Facilitated diffusion",
            "Endocytosis",
            "Exocytosis"
        ],
        "answer": "Facilitated diffusion",
        "difficulty": "medium",
        "topic": "Introduction to Human Physiology",
        "explanation": "Facilitated diffusion uses carrier proteins to move substances down their concentration gradient without ATP."
    },
    {
        "id": 303,
        "question": "Which body fluid compartment is located within cells?",
        "options": [
            "Interstitial fluid",
            "Plasma",
            "Intracellular fluid",
            "Extracellular fluid"
        ],
        "answer": "Intracellular fluid",
        "difficulty": "easy",
        "topic": "Introduction to Human Physiology",
        "explanation": "Intracellular fluid (ICF) is the fluid within cells, comprising about two-thirds of body water."
    },
    {
        "id": 304,
        "question": "Which mechanism amplifies a response, such as in blood clotting?",
        "options": [
            "Negative feedback",
            "Positive feedback",
            "Static feedback",
            "Inhibitory feedback"
        ],
        "answer": "Positive feedback",
        "difficulty": "medium",
        "topic": "Introduction to Human Physiology",
        "explanation": "Positive feedback enhances a process, as seen in the clotting cascade where thrombin promotes more clotting."
    },
    {
        "id": 305,
        "question": "Which organelle modifies and packages proteins for secretion?",
        "options": [
            "Lysosome",
            "Mitochondrion",
            "Golgi apparatus",
            "Nucleus"
        ],
        "answer": "Golgi apparatus",
        "difficulty": "easy",
        "topic": "Cell Physiology",
        "explanation": "The Golgi apparatus modifies, sorts, and packages proteins for secretion or use within the cell."
    },
    {
        "id": 306,
        "question": "Which ion channel allows rapid sodium influx during an action potential?",
        "options": [
            "Voltage-gated sodium channel",
            "Ligand-gated potassium channel",
            "Mechanically-gated calcium channel",
            "Leak sodium channel"
        ],
        "answer": "Voltage-gated sodium channel",
        "difficulty": "medium",
        "topic": "Cell Physiology",
        "explanation": "Voltage-gated sodium channels open during an action potential, causing depolarization."
    },
    {
        "id": 307,
        "question": "Which cellular process is triggered by DNA damage to prevent cancer?",
        "options": [
            "Mitosis",
            "Apoptosis",
            "Meiosis",
            "Cytokinesis"
        ],
        "answer": "Apoptosis",
        "difficulty": "medium",
        "topic": "Cell Physiology",
        "explanation": "Apoptosis eliminates damaged cells to prevent uncontrolled growth, such as in cancer."
    },
    {
        "id": 308,
        "question": "Which blood component is primarily responsible for clotting?",
        "options": [
            "Red blood cells",
            "White blood cells",
            "Platelets",
            "Plasma"
        ],
        "answer": "Platelets",
        "difficulty": "easy",
        "topic": "Blood and Hematology",
        "explanation": "Platelets initiate clotting by forming a plug and releasing clotting factors at injury sites."
    },
    {
        "id": 309,
        "question": "Which process breaks down old red blood cells in the spleen?",
        "options": [
            "Hematopoiesis",
            "Hemolysis",
            "Hemostasis",
            "Erythropoiesis"
        ],
        "answer": "Hemolysis",
        "difficulty": "medium",
        "topic": "Blood and Hematology",
        "explanation": "Hemolysis is the destruction of red blood cells, primarily in the spleen, to recycle their components."
    },
    {
        "id": 310,
        "question": "Which antigen determines the Rh factor in blood typing?",
        "options": [
            "A antigen",
            "B antigen",
            "D antigen",
            "O antigen"
        ],
        "answer": "D antigen",
        "difficulty": "medium",
        "topic": "Blood and Hematology",
        "explanation": "The presence or absence of the D antigen determines Rh-positive or Rh-negative blood types."
    },
    {
        "id": 311,
        "question": "Which white blood cell type is most abundant in healthy blood?",
        "options": [
            "Lymphocytes",
            "Neutrophils",
            "Monocytes",
            "Basophils"
        ],
        "answer": "Neutrophils",
        "difficulty": "medium",
        "topic": "Blood and Hematology",
        "explanation": "Neutrophils are the most common white blood cells, making up 50-70% of leukocytes."
    },
    {
        "id": 312,
        "question": "Which heart chamber pumps blood into the aorta?",
        "options": [
            "Right atrium",
            "Right ventricle",
            "Left atrium",
            "Left ventricle"
        ],
        "answer": "Left ventricle",
        "difficulty": "easy",
        "topic": "Cardiovascular Physiology",
        "explanation": "The left ventricle pumps oxygenated blood into the aorta for systemic circulation."
    },
    {
        "id": 313,
        "question": "Which factor increases heart rate during sympathetic stimulation?",
        "options": [
            "Acetylcholine",
            "Norepinephrine",
            "Dopamine",
            "Serotonin"
        ],
        "answer": "Norepinephrine",
        "difficulty": "medium",
        "topic": "Cardiovascular Physiology",
        "explanation": "Norepinephrine, released by sympathetic neurons, increases heart rate by stimulating beta receptors."
    },
    {
        "id": 314,
        "question": "Which condition results from inadequate cardiac output to meet body demands?",
        "options": [
            "Hypertension",
            "Heart failure",
            "Arrhythmia",
            "Atherosclerosis"
        ],
        "answer": "Heart failure",
        "difficulty": "medium",
        "topic": "Cardiovascular Physiology",
        "explanation": "Heart failure occurs when the heart cannot pump enough blood to meet metabolic needs."
    },
    {
        "id": 315,
        "question": "Which process allows fluid exchange between capillaries and tissues?",
        "options": [
            "Filtration",
            "Diffusion",
            "Osmosis",
            "Active transport"
        ],
        "answer": "Filtration",
        "difficulty": "medium",
        "topic": "Cardiovascular Physiology",
        "explanation": "Filtration, driven by hydrostatic pressure, moves fluid from capillaries into interstitial spaces."
    },
    {
        "id": 316,
        "question": "Which muscle is primarily responsible for forced inspiration?",
        "options": [
            "Diaphragm",
            "Internal intercostals",
            "Sternocleidomastoid",
            "Abdominal muscles"
        ],
        "answer": "Sternocleidomastoid",
        "difficulty": "medium",
        "topic": "Respiratory Physiology",
        "explanation": "The sternocleidomastoid elevates the sternum during forced inspiration, aiding lung expansion."
    },
    {
        "id": 317,
        "question": "Which gas is transported in blood primarily as bicarbonate ions?",
        "options": [
            "Oxygen",
            "Carbon dioxide",
            "Nitrogen",
            "Helium"
        ],
        "answer": "Carbon dioxide",
        "difficulty": "medium",
        "topic": "Respiratory Physiology",
        "explanation": "About 70% of CO2 is converted to bicarbonate ions in red blood cells for transport."
    },
    {
        "id": 318,
        "question": "Which condition shifts the oxygen-hemoglobin dissociation curve to the left?",
        "options": [
            "Increased temperature",
            "Decreased pH",
            "Increased CO2 levels",
            "Increased pH"
        ],
        "answer": "Increased pH",
        "difficulty": "hard",
        "topic": "Respiratory Physiology",
        "explanation": "Increased pH (alkalosis) increases hemoglobin’s affinity for oxygen, shifting the curve left."
    },
    {
        "id": 319,
        "question": "Which receptor detects changes in blood oxygen levels?",
        "options": [
            "Baroreceptor",
            "Chemoreceptor",
            "Photoreceptor",
            "Mechanoreceptor"
        ],
        "answer": "Chemoreceptor",
        "difficulty": "medium",
        "topic": "Respiratory Physiology",
        "explanation": "Peripheral chemoreceptors monitor blood O2, CO2, and pH to regulate breathing."
    },
    {
        "id": 320,
        "question": "Which structure surrounds the glomerulus to collect filtrate?",
        "options": [
            "Bowman’s capsule",
            "Loop of Henle",
            "Proximal tubule",
            "Collecting duct"
        ],
        "answer": "Bowman’s capsule",
        "difficulty": "easy",
        "topic": "Renal Physiology",
        "explanation": "Bowman’s capsule collects plasma filtrate from the glomerulus in the nephron."
    },
    {
        "id": 321,
        "question": "Which substance is secreted into the filtrate to eliminate drugs?",
        "options": [
            "Glucose",
            "Urea",
            "Creatinine",
            "Organic acids"
        ],
        "answer": "Organic acids",
        "difficulty": "hard",
        "topic": "Renal Physiology",
        "explanation": "Organic acids, including drug metabolites, are secreted into the filtrate for excretion."
    },
    {
        "id": 322,
        "question": "Which hormone regulates potassium excretion in the kidneys?",
        "options": [
            "Antidiuretic hormone",
            "Aldosterone",
            "Atrial natriuretic peptide",
            "Erythropoietin"
        ],
        "answer": "Aldosterone",
        "difficulty": "medium",
        "topic": "Renal Physiology",
        "explanation": "Aldosterone promotes potassium secretion in the distal tubule while reabsorbing sodium."
    },
    {
        "id": 323,
        "question": "Which blood vessel supplies the nephron with blood?",
        "options": [
            "Renal vein",
            "Afferent arteriole",
            "Efferent arteriole",
            "Vasa recta"
        ],
        "answer": "Afferent arteriole",
        "difficulty": "medium",
        "topic": "Renal Physiology",
        "explanation": "The afferent arteriole delivers blood to the glomerulus for filtration."
    },
    {
        "id": 324,
        "question": "Which part of the digestive system initiates protein digestion?",
        "options": [
            "Mouth",
            "Stomach",
            "Small intestine",
            "Large intestine"
        ],
        "answer": "Stomach",
        "difficulty": "easy",
        "topic": "Gastrointestinal Physiology",
        "explanation": "Pepsin in the stomach begins protein digestion by breaking peptide bonds."
    },
    {
        "id": 325,
        "question": "Which hormone stimulates gallbladder contraction to release bile?",
        "options": [
            "Secretin",
            "Cholecystokinin",
            "Gastrin",
            "Somatostatin"
        ],
        "answer": "Cholecystokinin",
        "difficulty": "medium",
        "topic": "Gastrointestinal Physiology",
        "explanation": "Cholecystokinin (CCK) triggers gallbladder contraction to release bile into the duodenum."
    },
    {
        "id": 326,
        "question": "Which vitamin is synthesized by gut bacteria in the large intestine?",
        "options": [
            "Vitamin A",
            "Vitamin C",
            "Vitamin K",
            "Vitamin D"
        ],
        "answer": "Vitamin K",
        "difficulty": "medium",
        "topic": "Gastrointestinal Physiology",
        "explanation": "Gut bacteria produce vitamin K, which is absorbed in the large intestine for clotting."
    },
    {
        "id": 327,
        "question": "Which organ produces intrinsic factor for vitamin B12 absorption?",
        "options": [
            "Pancreas",
            "Liver",
            "Stomach",
            "Duodenum"
        ],
        "answer": "Stomach",
        "difficulty": "medium",
        "topic": "Gastrointestinal Physiology",
        "explanation": "Parietal cells in the stomach secrete intrinsic factor, necessary for vitamin B12 absorption."
    },
    {
        "id": 328,
        "question": "Which type of neuron carries signals from the CNS to muscles?",
        "options": [
            "Sensory neuron",
            "Interneuron",
            "Motor neuron",
            "Association neuron"
        ],
        "answer": "Motor neuron",
        "difficulty": "easy",
        "topic": "Nervous System Physiology",
        "explanation": "Motor neurons transmit signals from the central nervous system to muscles or glands."
    },
    {
        "id": 329,
        "question": "Which ion triggers neurotransmitter release at the synapse?",
        "options": [
            "Sodium",
            "Potassium",
            "Calcium",
            "Chloride"
        ],
        "answer": "Calcium",
        "difficulty": "medium",
        "topic": "Nervous System Physiology",
        "explanation": "Calcium influx into the presynaptic terminal triggers vesicle release of neurotransmitters."
    },
    {
        "id": 330,
        "question": "Which part of the brain regulates body temperature?",
        "options": [
            "Cerebellum",
            "Hypothalamus",
            "Thalamus",
            "Pons"
        ],
        "answer": "Hypothalamus",
        "difficulty": "medium",
        "topic": "Nervous System Physiology",
        "explanation": "The hypothalamus monitors and adjusts body temperature to maintain homeostasis."
    },
    {
        "id": 331,
        "question": "Which division of the nervous system controls heart rate?",
        "options": [
            "Somatic nervous system",
            "Autonomic nervous system",
            "Central nervous system",
            "Enteric nervous system"
        ],
        "answer": "Autonomic nervous system",
        "difficulty": "easy",
        "topic": "Nervous System Physiology",
        "explanation": "The autonomic nervous system regulates involuntary functions like heart rate."
    },
    {
        "id": 332,
        "question": "Which structure in the eye changes shape to focus light?",
        "options": [
            "Cornea",
            "Lens",
            "Retina",
            "Iris"
        ],
        "answer": "Lens",
        "difficulty": "easy",
        "topic": "Special Senses",
        "explanation": "The lens adjusts its shape via ciliary muscles to focus light on the retina."
    },
    {
        "id": 333,
        "question": "Which part of the cochlea responds to high-frequency sounds?",
        "options": [
            "Apex",
            "Base",
            "Scala vestibuli",
            "Scala tympani"
        ],
        "answer": "Base",
        "difficulty": "hard",
        "topic": "Special Senses",
        "explanation": "The base of the cochlea is stiffer and responds to high-frequency sound vibrations."
    },
    {
        "id": 334,
        "question": "Which taste sensation is detected by sodium ions?",
        "options": [
            "Sweet",
            "Sour",
            "Salty",
            "Bitter"
        ],
        "answer": "Salty",
        "difficulty": "medium",
        "topic": "Special Senses",
        "explanation": "Sodium ions directly activate taste receptors to produce the salty taste sensation."
    },
    {
        "id": 335,
        "question": "Which structure detects head tilt in the vestibular system?",
        "options": [
            "Semicircular canals",
            "Utricle",
            "Cochlea",
            "Organ of Corti"
        ],
        "answer": "Utricle",
        "difficulty": "medium",
        "topic": "Special Senses",
        "explanation": "The utricle contains otoliths that detect linear acceleration and head tilt."
    },
    {
        "id": 336,
        "question": "Which molecule provides energy for muscle contraction?",
        "options": [
            "ADP",
            "ATP",
            "NADH",
            "FADH2"
        ],
        "answer": "ATP",
        "difficulty": "easy",
        "topic": "Muscular Physiology",
        "explanation": "ATP hydrolysis powers the cross-bridge cycle in muscle contraction."
    },
    {
        "id": 337,
        "question": "Which neurotransmitter is released at the neuromuscular junction?",
        "options": [
            "Dopamine",
            "Acetylcholine",
            "GABA",
            "Glutamate"
        ],
        "answer": "Acetylcholine",
        "difficulty": "medium",
        "topic": "Muscular Physiology",
        "explanation": "Acetylcholine is released at the neuromuscular junction to stimulate muscle contraction."
    },
    {
        "id": 338,
        "question": "Which type of muscle is found in the walls of internal organs?",
        "options": [
            "Skeletal muscle",
            "Cardiac muscle",
            "Smooth muscle",
            "Striated muscle"
        ],
        "answer": "Smooth muscle",
        "difficulty": "easy",
        "topic": "Muscular Physiology",
        "explanation": "Smooth muscle is involuntary and lines the walls of organs like the intestines."
    },
    {
        "id": 339,
        "question": "Which condition results from low oxygen delivery to muscles during exercise?",
        "options": [
            "Tetanus",
            "Cramp",
            "Fatigue",
            "Hypertrophy"
        ],
        "answer": "Fatigue",
        "difficulty": "medium",
        "topic": "Muscular Physiology",
        "explanation": "Muscle fatigue occurs when oxygen delivery is insufficient, leading to reduced ATP production."
    },
    {
        "id": 340,
        "question": "Which hormone regulates blood calcium by inhibiting bone resorption?",
        "options": [
            "Parathyroid hormone",
            "Calcitonin",
            "Vitamin D",
            "Thyroxine"
        ],
        "answer": "Calcitonin",
        "difficulty": "medium",
        "topic": "Endocrine Physiology",
        "explanation": "Calcitonin, secreted by the thyroid, lowers blood calcium by inhibiting osteoclast activity."
    },
    {
        "id": 341,
        "question": "Which gland releases hormones that control metabolism?",
        "options": [
            "Pituitary",
            "Thyroid",
            "Adrenal",
            "Pancreas"
        ],
        "answer": "Thyroid",
        "difficulty": "easy",
        "topic": "Endocrine Physiology",
        "explanation": "The thyroid gland secretes T3 and T4, which regulate metabolic rate."
    },
    {
        "id": 342,
        "question": "Which hormone is secreted by the adrenal cortex to regulate sodium balance?",
        "options": [
            "Cortisol",
            "Aldosterone",
            "Epinephrine",
            "DHEA"
        ],
        "answer": "Aldosterone",
        "difficulty": "medium",
        "topic": "Endocrine Physiology",
        "explanation": "Aldosterone promotes sodium reabsorption in the kidneys to maintain blood pressure."
    },
    {
        "id": 343,
        "question": "Which hormone inhibits growth hormone release from the pituitary?",
        "options": [
            "Somatostatin",
            "GHRH",
            "Insulin",
            "Cortisol"
        ],
        "answer": "Somatostatin",
        "difficulty": "hard",
        "topic": "Endocrine Physiology",
        "explanation": "Somatostatin inhibits the release of growth hormone and other pituitary hormones."
    },
    {
        "id": 344,
        "question": "Which structure in the male reproductive system secretes seminal fluid?",
        "options": [
            "Testes",
            "Epididymis",
            "Seminal vesicles",
            "Vas deferens"
        ],
        "answer": "Seminal vesicles",
        "difficulty": "medium",
        "topic": "Reproductive Physiology",
        "explanation": "Seminal vesicles produce a nutrient-rich fluid that forms part of semen."
    },
    {
        "id": 345,
        "question": "Which hormone stimulates sperm production in males?",
        "options": [
            "Testosterone",
            "FSH",
            "LH",
            "Progesterone"
        ],
        "answer": "FSH",
        "difficulty": "medium",
        "topic": "Reproductive Physiology",
        "explanation": "Follicle-stimulating hormone (FSH) supports spermatogenesis in the testes."
    },
    {
        "id": 346,
        "question": "Which phase of the ovarian cycle involves follicle development?",
        "options": [
            "Luteal phase",
            "Menstrual phase",
            "Follicular phase",
            "Ovulatory phase"
        ],
        "answer": "Follicular phase",
        "difficulty": "medium",
        "topic": "Reproductive Physiology",
        "explanation": "The follicular phase involves follicle growth and estrogen production."
    },
    {
        "id": 347,
        "question": "Which hormone is secreted by the placenta to maintain pregnancy?",
        "options": [
            "FSH",
            "LH",
            "Progesterone",
            "Oxytocin"
        ],
        "answer": "Progesterone",
        "difficulty": "medium",
        "topic": "Reproductive Physiology",
        "explanation": "Progesterone prevents uterine contractions and supports pregnancy development."
    },
    {
        "id": 348,
        "question": "Which immune cells present antigens to activate T cells?",
        "options": [
            "B cells",
            "Dendritic cells",
            "Neutrophils",
            "Basophils"
        ],
        "answer": "Dendritic cells",
        "difficulty": "medium",
        "topic": "Immune Physiology",
        "explanation": "Dendritic cells are professional antigen-presenting cells that activate T cells."
    },
    {
        "id": 349,
        "question": "Which protein binds pathogens to neutralize them in adaptive immunity?",
        "options": [
            "Cytokine",
            "Antibody",
            "Complement",
            "Interferon"
        ],
        "answer": "Antibody",
        "difficulty": "easy",
        "topic": "Immune Physiology",
        "explanation": "Antibodies, produced by plasma cells, bind antigens to neutralize or mark them for destruction."
    },
    {
        "id": 350,
        "question": "Which immune response is enhanced by vaccination?",
        "options": [
            "Innate immunity",
            "Passive immunity",
            "Active immunity",
            "Nonspecific immunity"
        ],
        "answer": "Active immunity",
        "difficulty": "medium",
        "topic": "Immune Physiology",
        "explanation": "Vaccination stimulates active immunity by inducing memory cell formation."
    },
    {
        "id": 351,
        "question": "Which mechanism increases body temperature during cold exposure?",
        "options": [
            "Vasodilation",
            "Sweating",
            "Shivering",
            "Evaporation"
        ],
        "answer": "Shivering",
        "difficulty": "easy",
        "topic": "Temperature Regulation and Metabolism",
        "explanation": "Shivering generates heat through rapid muscle contractions to raise body temperature."
    },
    {
        "id": 352,
        "question": "Which substance triggers fever by altering the hypothalamic set point?",
        "options": [
            "Histamine",
            "Pyrogen",
            "Antigen",
            "Cytokine"
        ],
        "answer": "Pyrogen",
        "difficulty": "medium",
        "topic": "Temperature Regulation and Metabolism",
        "explanation": "Pyrogens, such as interleukins, raise the hypothalamic temperature set point, causing fever."
    },
    {
        "id": 353,
        "question": "Which factor increases basal metabolic rate in adults?",
        "options": [
            "Hypothyroidism",
            "Aging",
            "Increased thyroid hormone",
            "Starvation"
        ],
        "answer": "Increased thyroid hormone",
        "difficulty": "medium",
        "topic": "Temperature Regulation and Metabolism",
        "explanation": "Thyroid hormones (T3, T4) increase metabolic rate by enhancing cellular energy use."
    },
    {
        "id": 354,
        "question": "Which physiological adaptation occurs during high-altitude acclimatization?",
        "options": [
            "Decreased red blood cell count",
            "Increased respiratory rate",
            "Decreased cardiac output",
            "Increased blood pressure"
        ],
        "answer": "Increased respiratory rate",
        "difficulty": "medium",
        "topic": "Integrative Physiology",
        "explanation": "Increased respiratory rate compensates for lower oxygen levels at high altitudes."
    },
    {
        "id": 355,
        "question": "Which hormone is elevated during the fight-or-flight response?",
        "options": [
            "Insulin",
            "Epinephrine",
            "Melatonin",
            "Prolactin"
        ],
        "answer": "Epinephrine",
        "difficulty": "easy",
        "topic": "Integrative Physiology",
        "explanation": "Epinephrine prepares the body for rapid action by increasing heart rate and energy mobilization."
    },
    {
        "id": 356,
        "question": "Which physiological change is associated with prolonged stress?",
        "options": [
            "Decreased cortisol levels",
            "Increased immune function",
            "Elevated blood glucose",
            "Reduced heart rate"
        ],
        "answer": "Elevated blood glucose",
        "difficulty": "medium",
        "topic": "Integrative Physiology",
        "explanation": "Chronic stress raises cortisol, which increases blood glucose via gluconeogenesis."
    },
    {
        "id": 357,
        "question": "Which blood vessel carries deoxygenated blood to the lungs?",
        "options": [
            "Aorta",
            "Pulmonary artery",
            "Pulmonary vein",
            "Coronary artery"
        ],
        "answer": "Pulmonary artery",
        "difficulty": "easy",
        "topic": "Cardiovascular Physiology",
        "explanation": "The pulmonary artery carries deoxygenated blood from the right ventricle to the lungs."
    },
    {
        "id": 358,
        "question": "Which ECG wave represents ventricular repolarization?",
        "options": [
            "P wave",
            "QRS complex",
            "T wave",
            "U wave"
        ],
        "answer": "T wave",
        "difficulty": "medium",
        "topic": "Cardiovascular Physiology",
        "explanation": "The T wave on an ECG reflects ventricular repolarization after contraction."
    },
    {
        "id": 359,
        "question": "Which factor reduces oxygen delivery to tissues during carbon monoxide poisoning?",
        "options": [
            "Increased hemoglobin affinity",
            "Decreased CO2 levels",
            "Increased pH",
            "Decreased temperature"
        ],
        "answer": "Increased hemoglobin affinity",
        "difficulty": "hard",
        "topic": "Respiratory Physiology",
        "explanation": "Carbon monoxide binds hemoglobin with high affinity, reducing oxygen transport."
    },
    {
        "id": 360,
        "question": "Which enzyme in red blood cells converts CO2 to bicarbonate?",
        "options": [
            "Carbonic anhydrase",
            "Amylase",
            "Lipase",
            "Pepsin"
        ],
        "answer": "Carbonic anhydrase",
        "difficulty": "medium",
        "topic": "Respiratory Physiology",
        "explanation": "Carbonic anhydrase catalyzes the conversion of CO2 and water to bicarbonate for transport."
    },
    {
        "id": 361,
        "question": "Which part of the nephron adjusts urine pH by secreting bicarbonate?",
        "options": [
            "Proximal tubule",
            "Distal tubule",
            "Loop of Henle",
            "Glomerulus"
        ],
        "answer": "Distal tubule",
        "difficulty": "hard",
        "topic": "Renal Physiology",
        "explanation": "The distal tubule fine-tunes urine pH by secreting or reabsorbing bicarbonate."
    },
    {
        "id": 362,
        "question": "Which hormone stimulates gastric acid secretion in the stomach?",
        "options": [
            "Secretin",
            "Gastrin",
            "Cholecystokinin",
            "Somatostatin"
        ],
        "answer": "Gastrin",
        "difficulty": "medium",
        "topic": "Gastrointestinal Physiology",
        "explanation": "Gastrin, released by G cells, stimulates parietal cells to secrete hydrochloric acid."
    },
    {
        "id": 363,
        "question": "Which part of the brain relays sensory information to the cortex?",
        "options": [
            "Cerebellum",
            "Thalamus",
            "Medulla oblongata",
            "Hypothalamus"
        ],
        "answer": "Thalamus",
        "difficulty": "medium",
        "topic": "Nervous System Physiology",
        "explanation": "The thalamus acts as a relay station for sensory signals to the cerebral cortex."
    },
    {
        "id": 364,
        "question": "Which sensory receptor detects pressure and vibration?",
        "options": [
            "Nociceptor",
            "Thermoreceptor",
            "Mechanoreceptor",
            "Chemoreceptor"
        ],
        "answer": "Mechanoreceptor",
        "difficulty": "easy",
        "topic": "Nervous System Physiology",
        "explanation": "Mechanoreceptors in the skin detect mechanical stimuli like pressure and vibration."
    },
    {
        "id": 365,
        "question": "Which cells in the retina transmit signals to the optic nerve?",
        "options": [
            "Rods",
            "Cones",
            "Bipolar cells",
            "Ganglion cells"
        ],
        "answer": "Ganglion cells",
        "difficulty": "medium",
        "topic": "Special Senses",
        "explanation": "Ganglion cells form the optic nerve, transmitting visual signals to the brain."
    },
    {
        "id": 366,
        "question": "Which hormone stimulates testosterone production in males?",
        "options": [
            "FSH",
            "LH",
            "Prolactin",
            "Oxytocin"
        ],
        "answer": "LH",
        "difficulty": "medium",
        "topic": "Reproductive Physiology",
        "explanation": "Luteinizing hormone (LH) stimulates Leydig cells to produce testosterone."
    },
    {
        "id": 367,
        "question": "Which immune cells release histamine during allergic reactions?",
        "options": [
            "Neutrophils",
            "Basophils",
            "Lymphocytes",
            "Macrophages"
        ],
        "answer": "Basophils",
        "difficulty": "medium",
        "topic": "Immune Physiology",
        "explanation": "Basophils and mast cells release histamine, triggering allergic responses."
    },
    {
        "id": 368,
        "question": "Which process in the kidneys filters blood to remove waste?",
        "options": [
            "Reabsorption",
            "Secretion",
            "Filtration",
            "Excretion"
        ],
        "answer": "Filtration",
        "difficulty": "easy",
        "topic": "Renal Physiology",
        "explanation": "Filtration in the glomerulus removes waste and water from blood to form filtrate."
    },
    {
        "id": 369,
        "question": "Which neurotransmitter is excitatory in the central nervous system?",
        "options": [
            "GABA",
            "Glutamate",
            "Glycine",
            "Serotonin"
        ],
        "answer": "Glutamate",
        "difficulty": "medium",
        "topic": "Nervous System Physiology",
        "explanation": "Glutamate is the primary excitatory neurotransmitter in the CNS."
    },
    {
        "id": 370,
        "question": "Which hormone promotes bone growth by stimulating osteoblasts?",
        "options": [
            "Calcitonin",
            "Parathyroid hormone",
            "Growth hormone",
            "Cortisol"
        ],
        "answer": "Growth hormone",
        "difficulty": "medium",
        "topic": "Endocrine Physiology",
        "explanation": "Growth hormone stimulates osteoblast activity via IGF-1 to promote bone growth."
    },
    {
        "id": 371,
        "question": "Which blood component prevents excessive bleeding at injury sites?",
        "options": [
            "Red blood cells",
            "White blood cells",
            "Platelets",
            "Plasma proteins"
        ],
        "answer": "Platelets",
        "difficulty": "easy",
        "topic": "Blood and Hematology",
        "explanation": "Platelets form a plug and release factors to initiate clotting at injury sites."
    },
    {
        "id": 372,
        "question": "Which heart valve separates the left atrium and left ventricle?",
        "options": [
            "Tricuspid valve",
            "Mitral valve",
            "Aortic valve",
            "Pulmonary valve"
        ],
        "answer": "Mitral valve",
        "difficulty": "medium",
        "topic": "Cardiovascular Physiology",
        "explanation": "The mitral valve prevents backflow from the left ventricle to the left atrium."
    },
    {
        "id": 373,
        "question": "Which lung volume remains in the lungs after maximal exhalation?",
        "options": [
            "Tidal volume",
            "Inspiratory reserve volume",
            "Residual volume",
            "Expiratory reserve volume"
        ],
        "answer": "Residual volume",
        "difficulty": "medium",
        "topic": "Respiratory Physiology",
        "explanation": "Residual volume is the air left in the lungs after forced exhalation, preventing collapse."
    },
    {
        "id": 374,
        "question": "Which part of the digestive system emulsifies fats for digestion?",
        "options": [
            "Stomach",
            "Liver",
            "Pancreas",
            "Small intestine"
        ],
        "answer": "Liver",
        "difficulty": "medium",
        "topic": "Gastrointestinal Physiology",
        "explanation": "The liver produces bile, which emulsifies fats to aid digestion in the small intestine."
    },
    {
        "id": 375,
        "question": "Which part of the brain controls voluntary movement?",
        "options": [
            "Cerebellum",
            "Frontal lobe",
            "Occipital lobe",
            "Temporal lobe"
        ],
        "answer": "Frontal lobe",
        "difficulty": "medium",
        "topic": "Nervous System Physiology",
        "explanation": "The motor cortex in the frontal lobe initiates voluntary muscle movements."
    },
    {
        "id": 376,
        "question": "Which hormone triggers uterine contractions during childbirth?",
        "options": [
            "Progesterone",
            "Estrogen",
            "Oxytocin",
            "Prolactin"
        ],
        "answer": "Oxytocin",
        "difficulty": "easy",
        "topic": "Reproductive Physiology",
        "explanation": "Oxytocin stimulates uterine contractions during labor and delivery."
    },
    {
        "id": 377,
        "question": "Which immune cells are responsible for long-term immunity?",
        "options": [
            "Neutrophils",
            "Macrophages",
            "Memory cells",
            "Basophils"
        ],
        "answer": "Memory cells",
        "difficulty": "medium",
        "topic": "Immune Physiology",
        "explanation": "Memory B and T cells provide rapid responses to previously encountered antigens."
    },
    {
        "id": 378,
        "question": "Which muscle protein binds calcium to initiate contraction?",
        "options": [
            "Actin",
            "Myosin",
            "Troponin",
            "Tropomyosin"
        ],
        "answer": "Troponin",
        "difficulty": "medium",
        "topic": "Muscular Physiology",
        "explanation": "Troponin binds calcium, causing tropomyosin to shift and expose myosin-binding sites."
    },
    {
        "id": 379,
        "question": "Which hormone is secreted by the pineal gland to regulate sleep?",
        "options": [
            "Melatonin",
            "Cortisol",
            "Thyroxine",
            "Insulin"
        ],
        "answer": "Melatonin",
        "difficulty": "easy",
        "topic": "Endocrine Physiology",
        "explanation": "Melatonin regulates circadian rhythms, promoting sleep at night."
    },
    {
        "id": 380,
        "question": "Which blood vessel drains blood from the kidneys?",
        "options": [
            "Renal artery",
            "Renal vein",
            "Afferent arteriole",
            "Efferent arteriole"
        ],
        "answer": "Renal vein",
        "difficulty": "easy",
        "topic": "Renal Physiology",
        "explanation": "The renal vein carries filtered blood away from the kidneys to the inferior vena cava."
    },
    {
        "id": 381,
        "question": "Which part of the ear converts sound waves into mechanical vibrations?",
        "options": [
            "Cochlea",
            "Tympanic membrane",
            "Semicircular canals",
            "Eustachian tube"
        ],
        "answer": "Tympanic membrane",
        "difficulty": "easy",
        "topic": "Special Senses",
        "explanation": "The tympanic membrane vibrates in response to sound waves, transmitting them to the ossicles."
    },
    {
        "id": 382,
        "question": "Which hormone increases blood glucose during fasting?",
        "options": [
            "Insulin",
            "Glucagon",
            "Thyroxine",
            "Parathyroid hormone"
        ],
        "answer": "Glucagon",
        "difficulty": "medium",
        "topic": "Endocrine Physiology",
        "explanation": "Glucagon stimulates glycogenolysis and gluconeogenesis to raise blood glucose."
    },
    {
        "id": 383,
        "question": "Which blood type lacks A, B, and Rh antigens on red blood cells?",
        "options": [
            "A-negative",
            "B-negative",
            "AB-negative",
            "O-negative"
        ],
        "answer": "O-negative",
        "difficulty": "medium",
        "topic": "Blood and Hematology",
        "explanation": "O-negative blood lacks A, B, and Rh antigens, making it the universal donor."
    },
    {
        "id": 384,
        "question": "Which factor increases cardiac output during exercise?",
        "options": [
            "Decreased stroke volume",
            "Increased heart rate",
            "Decreased preload",
            "Increased afterload"
        ],
        "answer": "Increased heart rate",
        "difficulty": "medium",
        "topic": "Cardiovascular Physiology",
        "explanation": "Increased heart rate, driven by sympathetic stimulation, boosts cardiac output during exercise."
    },
    {
        "id": 385,
        "question": "Which condition results from high CO2 levels in the blood?",
        "options": [
            "Hypoxia",
            "Hypercapnia",
            "Hypocapnia",
            "Acidosis"
        ],
        "answer": "Hypercapnia",
        "difficulty": "medium",
        "topic": "Respiratory Physiology",
        "explanation": "Hypercapnia is elevated CO2 in the blood, often due to inadequate ventilation."
    },
    {
        "id": 386,
        "question": "Which part of the small intestine absorbs most nutrients?",
        "options": [
            "Duodenum",
            "Jejunum",
            "Ileum",
            "Colon"
        ],
        "answer": "Jejunum",
        "difficulty": "medium",
        "topic": "Gastrointestinal Physiology",
        "explanation": "The jejunum has a large surface area for absorbing most digested nutrients."
    },
    {
        "id": 387,
        "question": "Which reflex arc component detects the stimulus?",
        "options": [
            "Motor neuron",
            "Sensory neuron",
            "Interneuron",
            "Effector"
        ],
        "answer": "Sensory neuron",
        "difficulty": "easy",
        "topic": "Nervous System Physiology",
        "explanation": "Sensory neurons detect stimuli and transmit signals to the central nervous system."
    },
    {
        "id": 388,
        "question": "Which hormone is elevated during menopause due to ovarian decline?",
        "options": [
            "Estrogen",
            "Progesterone",
            "FSH",
            "Prolactin"
        ],
        "answer": "FSH",
        "difficulty": "medium",
        "topic": "Reproductive Physiology",
        "explanation": "FSH rises during menopause due to reduced estrogen feedback from the ovaries."
    },
    {
        "id": 389,
        "question": "Which immune cells phagocytose bacteria during acute infections?",
        "options": [
            "Lymphocytes",
            "Neutrophils",
            "Dendritic cells",
            "Plasma cells"
        ],
        "answer": "Neutrophils",
        "difficulty": "medium",
        "topic": "Immune Physiology",
        "explanation": "Neutrophils are primary phagocytes in acute bacterial infections."
    },
    {
        "id": 390,
        "question": "Which process in muscles increases strength through exercise?",
        "options": [
            "Atrophy",
            "Hypertrophy",
            "Fatigue",
            "Tetanus"
        ],
        "answer": "Hypertrophy",
        "difficulty": "easy",
        "topic": "Muscular Physiology",
        "explanation": "Hypertrophy is the increase in muscle size and strength due to exercise."
    },
    {
        "id": 391,
        "question": "Which hormone regulates blood pressure by constricting blood vessels?",
        "options": [
            "Atrial natriuretic peptide",
            "Angiotensin II",
            "Antidiuretic hormone",
            "Erythropoietin"
        ],
        "answer": "Angiotensin II",
        "difficulty": "medium",
        "topic": "Endocrine Physiology",
        "explanation": "Angiotensin II is a potent vasoconstrictor that raises blood pressure."
    },
    {
        "id": 392,
        "question": "Which blood vessel supplies oxygen to the heart muscle?",
        "options": [
            "Pulmonary artery",
            "Coronary artery",
            "Aorta",
            "Vena cava"
        ],
        "answer": "Coronary artery",
        "difficulty": "easy",
        "topic": "Cardiovascular Physiology",
        "explanation": "Coronary arteries deliver oxygenated blood to the myocardium."
    },
    {
        "id": 393,
        "question": "Which respiratory structure contains cilia to trap particles?",
        "options": [
            "Alveoli",
            "Bronchioles",
            "Trachea",
            "Pharynx"
        ],
        "answer": "Trachea",
        "difficulty": "medium",
        "topic": "Respiratory Physiology",
        "explanation": "The trachea’s ciliated epithelium traps and moves particles out of the airway."
    },
    {
        "id": 394,
        "question": "Which enzyme digests fats in the small intestine?",
        "options": [
            "Amylase",
            "Lipase",
            "Pepsin",
            "Trypsin"
        ],
        "answer": "Lipase",
        "difficulty": "easy",
        "topic": "Gastrointestinal Physiology",
        "explanation": "Pancreatic lipase breaks down triglycerides into fatty acids and glycerol."
    },
    {
        "id": 395,
        "question": "Which part of the brain processes auditory information?",
        "options": [
            "Frontal lobe",
            "Parietal lobe",
            "Occipital lobe",
            "Temporal lobe"
        ],
        "answer": "Temporal lobe",
        "difficulty": "medium",
        "topic": "Nervous System Physiology",
        "explanation": "The auditory cortex in the temporal lobe processes sound information."
    },
    {
        "id": 396,
        "question": "Which hormone supports sperm maturation in the testes?",
        "options": [
            "Testosterone",
            "Inhibin",
            "FSH",
            "LH"
        ],
        "answer": "FSH",
        "difficulty": "medium",
        "topic": "Reproductive Physiology",
        "explanation": "FSH supports Sertoli cells, which nurture developing sperm."
    },
    {
        "id": 397,
        "question": "Which immune cells secrete interferons to combat viral infections?",
        "options": [
            "B cells",
            "T cells",
            "Natural killer cells",
            "Macrophages"
        ],
        "answer": "Natural killer cells",
        "difficulty": "hard",
        "topic": "Immune Physiology",
        "explanation": "Natural killer cells and infected cells secrete interferons to inhibit viral replication."
    },
    {
        "id": 398,
        "question": "Which process in the kidneys reabsorbs water to concentrate urine?",
        "options": [
            "Filtration",
            "Secretion",
            "Reabsorption",
            "Excretion"
        ],
        "answer": "Reabsorption",
        "difficulty": "easy",
        "topic": "Renal Physiology",
        "explanation": "Reabsorption of water in the nephron concentrates urine and conserves body fluids."
    },
    {
        "id": 399,
        "question": "Which neurotransmitter is deficient in Parkinson’s disease?",
        "options": [
            "Acetylcholine",
            "Dopamine",
            "GABA",
            "Serotonin"
        ],
        "answer": "Dopamine",
        "difficulty": "medium",
        "topic": "Nervous System Physiology",
        "explanation": "Parkinson’s disease involves the loss of dopamine-producing neurons in the substantia nigra."
    },
    {
        "id": 400,
        "question": "Which physiological change improves endurance during regular exercise?",
        "options": [
            "Decreased mitochondrial density",
            "Increased muscle glycogen stores",
            "Decreased cardiac output",
            "Increased lactic acid production"
        ],
        "answer": "Increased muscle glycogen stores",
        "difficulty": "medium",
        "topic": "Integrative Physiology",
        "explanation": "Regular exercise increases glycogen stores, enhancing endurance by providing energy."
    },
    {
        "id": 401,
        "question": "Which term describes the directional movement of ions across a cell membrane?",
        "options": [
            "Diffusion",
            "Electrochemical gradient",
            "Osmosis",
            "Active transport"
        ],
        "answer": "Electrochemical gradient",
        "difficulty": "medium",
        "topic": "Introduction to Human Physiology",
        "explanation": "The electrochemical gradient drives ion movement based on charge and concentration differences across a membrane."
    },
    {
        "id": 402,
        "question": "Which type of tissue lines body cavities and covers surfaces?",
        "options": [
            "Connective tissue",
            "Epithelial tissue",
            "Muscle tissue",
            "Nervous tissue"
        ],
        "answer": "Epithelial tissue",
        "difficulty": "easy",
        "topic": "Introduction to Human Physiology",
        "explanation": "Epithelial tissue forms protective layers on surfaces and lines internal cavities."
    },
    {
        "id": 403,
        "question": "Which process maintains a constant body temperature in humans?",
        "options": [
            "Metabolism",
            "Thermoregulation",
            "Osmoregulation",
            "Excretion"
        ],
        "answer": "Thermoregulation",
        "difficulty": "easy",
        "topic": "Introduction to Human Physiology",
        "explanation": "Thermoregulation balances heat production and loss to maintain body temperature."
    },
    {
        "id": 404,
        "question": "Which type of feedback loop is involved in childbirth contractions?",
        "options": [
            "Negative feedback",
            "Positive feedback",
            "Neutral feedback",
            "Static feedback"
        ],
        "answer": "Positive feedback",
        "difficulty": "medium",
        "topic": "Introduction to Human Physiology",
        "explanation": "Positive feedback intensifies uterine contractions during childbirth until delivery."
    },
    {
        "id": 405,
        "question": "Which organelle contains enzymes for digesting cellular waste?",
        "options": [
            "Mitochondrion",
            "Lysosome",
            "Ribosome",
            "Endoplasmic reticulum"
        ],
        "answer": "Lysosome",
        "difficulty": "easy",
        "topic": "Cell Physiology",
        "explanation": "Lysosomes contain hydrolytic enzymes that break down waste materials in the cell."
    },
    {
        "id": 406,
        "question": "Which molecule acts as a second messenger in signal transduction?",
        "options": [
            "ATP",
            "cAMP",
            "DNA",
            "RNA"
        ],
        "answer": "cAMP",
        "difficulty": "medium",
        "topic": "Cell Physiology",
        "explanation": "Cyclic AMP (cAMP) relays signals from receptors to intracellular targets."
    },
    {
        "id": 407,
        "question": "Which phase of the cell cycle checks for DNA damage before mitosis?",
        "options": [
            "G1 phase",
            "S phase",
            "G2 phase",
            "M phase"
        ],
        "answer": "G2 phase",
        "difficulty": "medium",
        "topic": "Cell Physiology",
        "explanation": "The G2 checkpoint ensures DNA is intact and replicated before mitosis begins."
    },
    {
        "id": 408,
        "question": "Which plasma protein maintains osmotic pressure in blood?",
        "options": [
            "Fibrinogen",
            "Albumin",
            "Globulin",
            "Hemoglobin"
        ],
        "answer": "Albumin",
        "difficulty": "medium",
        "topic": "Blood and Hematology",
        "explanation": "Albumin regulates osmotic pressure, preventing fluid leakage from blood vessels."
    },
    {
        "id": 409,
        "question": "Which vitamin is essential for blood clotting?",
        "options": [
            "Vitamin A",
            "Vitamin C",
            "Vitamin K",
            "Vitamin D"
        ],
        "answer": "Vitamin K",
        "difficulty": "easy",
        "topic": "Blood and Hematology",
        "explanation": "Vitamin K is required for synthesizing clotting factors like prothrombin."
    },
    {
        "id": 410,
        "question": "Which condition results from a deficiency of red blood cells?",
        "options": [
            "Leukemia",
            "Anemia",
            "Thrombocytopenia",
            "Hemophilia"
        ],
        "answer": "Anemia",
        "difficulty": "easy",
        "topic": "Blood and Hematology",
        "explanation": "Anemia is characterized by low red blood cell count or hemoglobin, reducing oxygen delivery."
    },
    {
        "id": 411,
        "question": "Which enzyme initiates the clotting cascade by activating factor X?",
        "options": [
            "Thrombin",
            "Thromboplastin",
            "Fibrinase",
            "Plasmin"
        ],
        "answer": "Thromboplastin",
        "difficulty": "hard",
        "topic": "Blood and Hematology",
        "explanation": "Thromboplastin, released from damaged tissues, activates factor X in the clotting cascade."
    },
    {
        "id": 412,
        "question": "Which heart chamber receives deoxygenated blood from the body?",
        "options": [
            "Left atrium",
            "Left ventricle",
            "Right atrium",
            "Right ventricle"
        ],
        "answer": "Right atrium",
        "difficulty": "easy",
        "topic": "Cardiovascular Physiology",
        "explanation": "The right atrium receives deoxygenated blood from the venae cavae."
    },
    {
        "id": 413,
        "question": "Which hormone increases heart rate during stress?",
        "options": [
            "Insulin",
            "Epinephrine",
            "Calcitonin",
            "Melatonin"
        ],
        "answer": "Epinephrine",
        "difficulty": "medium",
        "topic": "Cardiovascular Physiology",
        "explanation": "Epinephrine, released by the adrenal medulla, increases heart rate via beta receptors."
    },
    {
        "id": 414,
        "question": "Which blood vessel has the lowest blood pressure?",
        "options": [
            "Artery",
            "Arteriole",
            "Capillary",
            "Vein"
        ],
        "answer": "Vein",
        "difficulty": "medium",
        "topic": "Cardiovascular Physiology",
        "explanation": "Veins have the lowest pressure due to their large diameter and distance from the heart."
    },
    {
        "id": 415,
        "question": "Which condition is characterized by irregular heart rhythms?",
        "options": [
            "Hypertension",
            "Arrhythmia",
            "Aneurysm",
            "Angina"
        ],
        "answer": "Arrhythmia",
        "difficulty": "easy",
        "topic": "Cardiovascular Physiology",
        "explanation": "Arrhythmias are abnormal heart rhythms caused by disrupted electrical activity."
    },
    {
        "id": 416,
        "question": "Which part of the respiratory system warms and humidifies air?",
        "options": [
            "Alveoli",
            "Bronchioles",
            "Nasal cavity",
            "Pharynx"
        ],
        "answer": "Nasal cavity",
        "difficulty": "easy",
        "topic": "Respiratory Physiology",
        "explanation": "The nasal cavity’s mucous membranes warm and moisten inhaled air."
    },
    {
        "id": 417,
        "question": "Which condition increases airway resistance in the lungs?",
        "options": [
            "Pneumonia",
            "Asthma",
            "Emphysema",
            "Pulmonary edema"
        ],
        "answer": "Asthma",
        "difficulty": "medium",
        "topic": "Respiratory Physiology",
        "explanation": "Asthma causes bronchoconstriction, increasing resistance to airflow."
    },
    {
        "id": 418,
        "question": "Which factor promotes oxygen release from hemoglobin in tissues?",
        "options": [
            "High pH",
            "Low CO2 levels",
            "High temperature",
            "High O2 partial pressure"
        ],
        "answer": "High temperature",
        "difficulty": "medium",
        "topic": "Respiratory Physiology",
        "explanation": "High temperature shifts the oxygen-hemoglobin dissociation curve right, favoring oxygen release."
    },
    {
        "id": 419,
        "question": "Which structure prevents food from entering the trachea?",
        "options": [
            "Epiglottis",
            "Larynx",
            "Pharynx",
            "Glottis"
        ],
        "answer": "Epiglottis",
        "difficulty": "easy",
        "topic": "Respiratory Physiology",
        "explanation": "The epiglottis closes over the trachea during swallowing to prevent aspiration."
    },
    {
        "id": 420,
        "question": "Which substance is the primary nitrogenous waste in urine?",
        "options": [
            "Uric acid",
            "Creatinine",
            "Urea",
            "Ammonia"
        ],
        "answer": "Urea",
        "difficulty": "easy",
        "topic": "Renal Physiology",
        "explanation": "Urea, produced from protein metabolism, is the main nitrogenous waste excreted in urine."
    },
    {
        "id": 421,
        "question": "Which hormone reduces urine output by increasing water reabsorption?",
        "options": [
            "Aldosterone",
            "Antidiuretic hormone",
            "Atrial natriuretic peptide",
            "Renin"
        ],
        "answer": "Antidiuretic hormone",
        "difficulty": "medium",
        "topic": "Renal Physiology",
        "explanation": "ADH increases water permeability in the collecting duct, reducing urine volume."
    },
    {
        "id": 422,
        "question": "Which process in the kidneys removes large molecules from blood?",
        "options": [
            "Filtration",
            "Reabsorption",
            "Secretion",
            "Diffusion"
        ],
        "answer": "Filtration",
        "difficulty": "easy",
        "topic": "Renal Physiology",
        "explanation": "Filtration in the glomerulus removes water and small solutes, excluding large molecules."
    },
    {
        "id": 423,
        "question": "Which blood vessel maintains the medullary osmotic gradient?",
        "options": [
            "Afferent arteriole",
            "Efferent arteriole",
            "Vasa recta",
            "Renal artery"
        ],
        "answer": "Vasa recta",
        "difficulty": "hard",
        "topic": "Renal Physiology",
        "explanation": "The vasa recta preserves the medullary gradient by countercurrent exchange."
    },
    {
        "id": 424,
        "question": "Which part of the digestive system absorbs water from undigested food?",
        "options": [
            "Stomach",
            "Small intestine",
            "Large intestine",
            "Esophagus"
        ],
        "answer": "Large intestine",
        "difficulty": "easy",
        "topic": "Gastrointestinal Physiology",
        "explanation": "The large intestine absorbs water, forming solid feces."
    },
    {
        "id": 425,
        "question": "Which enzyme in the stomach activates pepsinogen?",
        "options": [
            "Trypsin",
            "Hydrochloric acid",
            "Lipase",
            "Amylase"
        ],
        "answer": "Hydrochloric acid",
        "difficulty": "medium",
        "topic": "Gastrointestinal Physiology",
        "explanation": "HCl converts pepsinogen to active pepsin for protein digestion."
    },
    {
        "id": 426,
        "question": "Which hormone stimulates appetite in the gastrointestinal tract?",
        "options": [
            "Leptin",
            "Ghrelin",
            "Cholecystokinin",
            "Insulin"
        ],
        "answer": "Ghrelin",
        "difficulty": "medium",
        "topic": "Gastrointestinal Physiology",
        "explanation": "Ghrelin, secreted by the stomach, stimulates hunger before meals."
    },
    {
        "id": 427,
        "question": "Which part of the small intestine receives pancreatic enzymes?",
        "options": [
            "Jejunum",
            "Ileum",
            "Duodenum",
            "Cecum"
        ],
        "answer": "Duodenum",
        "difficulty": "medium",
        "topic": "Gastrointestinal Physiology",
        "explanation": "The duodenum receives pancreatic enzymes via the pancreatic duct for digestion."
    },
    {
        "id": 428,
        "question": "Which type of neuron integrates signals in the central nervous system?",
        "options": [
            "Sensory neuron",
            "Motor neuron",
            "Interneuron",
            "Efferent neuron"
        ],
        "answer": "Interneuron",
        "difficulty": "easy",
        "topic": "Nervous System Physiology",
        "explanation": "Interneurons connect sensory and motor neurons, processing signals in the CNS."
    },
    {
        "id": 429,
        "question": "Which part of a neuron receives incoming signals?",
        "options": [
            "Axon",
            "Dendrite",
            "Soma",
            "Synapse"
        ],
        "answer": "Dendrite",
        "difficulty": "easy",
        "topic": "Nervous System Physiology",
        "explanation": "Dendrites receive neurotransmitters from other neurons at synapses."
    },
    {
        "id": 430,
        "question": "Which neurotransmitter inhibits pain signals in the spinal cord?",
        "options": [
            "Glutamate",
            "Endorphin",
            "Dopamine",
            "Acetylcholine"
        ],
        "answer": "Endorphin",
        "difficulty": "medium",
        "topic": "Nervous System Physiology",
        "explanation": "Endorphins block pain transmission by inhibiting neurotransmitter release."
    },
    {
        "id": 431,
        "question": "Which brain structure regulates breathing and heart rate?",
        "options": [
            "Cerebellum",
            "Hypothalamus",
            "Medulla oblongata",
            "Thalamus"
        ],
        "answer": "Medulla oblongata",
        "difficulty": "medium",
        "topic": "Nervous System Physiology",
        "explanation": "The medulla oblongata controls vital functions like breathing and heart rate."
    },
    {
        "id": 432,
        "question": "Which cells in the retina detect dim light for night vision?",
        "options": [
            "Cones",
            "Rods",
            "Ganglion cells",
            "Bipolar cells"
        ],
        "answer": "Rods",
        "difficulty": "easy",
        "topic": "Special Senses",
        "explanation": "Rods are highly sensitive to low light, enabling vision in dim conditions."
    },
    {
        "id": 433,
        "question": "Which structure in the ear amplifies sound vibrations?",
        "options": [
            "Tympanic membrane",
            "Ossicles",
            "Cochlea",
            "Semicircular canals"
        ],
        "answer": "Ossicles",
        "difficulty": "medium",
        "topic": "Special Senses",
        "explanation": "The ossicles (malleus, incus, stapes) amplify and transmit sound to the cochlea."
    },
    {
        "id": 434,
        "question": "Which taste sensation is triggered by hydrogen ions?",
        "options": [
            "Sweet",
            "Sour",
            "Salty",
            "Umami"
        ],
        "answer": "Sour",
        "difficulty": "medium",
        "topic": "Special Senses",
        "explanation": "Sour taste is caused by hydrogen ions from acidic substances."
    },
    {
        "id": 435,
        "question": "Which part of the eye contains blood vessels to nourish the retina?",
        "options": [
            "Sclera",
            "Choroid",
            "Cornea",
            "Iris"
        ],
        "answer": "Choroid",
        "difficulty": "medium",
        "topic": "Special Senses",
        "explanation": "The choroid supplies blood to the retina and other eye structures."
    },
    {
        "id": 436,
        "question": "Which structure anchors muscle fibers to bones?",
        "options": [
            "Ligament",
            "Tendon",
            "Cartilage",
            "Fascia"
        ],
        "answer": "Tendon",
        "difficulty": "easy",
        "topic": "Muscular Physiology",
        "explanation": "Tendons connect muscles to bones, transmitting force for movement."
    },
    {
        "id": 437,
        "question": "Which ion triggers muscle contraction by binding to troponin?",
        "options": [
            "Sodium",
            "Potassium",
            "Calcium",
            "Magnesium"
        ],
        "answer": "Calcium",
        "difficulty": "medium",
        "topic": "Muscular Physiology",
        "explanation": "Calcium binds to troponin, exposing myosin-binding sites for contraction."
    },
    {
        "id": 438,
        "question": "Which type of muscle contraction produces movement?",
        "options": [
            "Isometric",
            "Isotonic",
            "Eccentric",
            "Static"
        ],
        "answer": "Isotonic",
        "difficulty": "medium",
        "topic": "Muscular Physiology",
        "explanation": "Isotonic contractions shorten muscles to produce movement, like lifting a weight."
    },
    {
        "id": 439,
        "question": "Which condition results from prolonged muscle disuse?",
        "options": [
            "Hypertrophy",
            "Atrophy",
            "Tetanus",
            "Cramp"
        ],
        "answer": "Atrophy",
        "difficulty": "easy",
        "topic": "Muscular Physiology",
        "explanation": "Atrophy is the reduction in muscle size due to lack of use."
    },
    {
        "id": 440,
        "question": "Which hormone stimulates milk production in mammary glands?",
        "options": [
            "Oxytocin",
            "Prolactin",
            "Estrogen",
            "Progesterone"
        ],
        "answer": "Prolactin",
        "difficulty": "medium",
        "topic": "Endocrine Physiology",
        "explanation": "Prolactin, secreted by the anterior pituitary, promotes milk synthesis."
    },
    {
        "id": 441,
        "question": "Which hormone is secreted by the adrenal medulla during stress?",
        "options": [
            "Cortisol",
            "Aldosterone",
            "Epinephrine",
            "Testosterone"
        ],
        "answer": "Epinephrine",
        "difficulty": "easy",
        "topic": "Endocrine Physiology",
        "explanation": "Epinephrine prepares the body for stress responses like fight-or-flight."
    },
    {
        "id": 442,
        "question": "Which hormone regulates circadian rhythms by signaling darkness?",
        "options": [
            "Melatonin",
            "Insulin",
            "Thyroxine",
            "Cortisol"
        ],
        "answer": "Melatonin",
        "difficulty": "easy",
        "topic": "Endocrine Physiology",
        "explanation": "Melatonin, secreted by the pineal gland, signals nighttime to regulate sleep."
    },
    {
        "id": 443,
        "question": "Which hormone increases blood glucose by promoting glycogenolysis?",
        "options": [
            "Insulin",
            "Glucagon",
            "Thyroxine",
            "Parathyroid hormone"
        ],
        "answer": "Glucagon",
        "difficulty": "medium",
        "topic": "Endocrine Physiology",
        "explanation": "Glucagon stimulates glycogen breakdown in the liver to raise blood glucose."
    },
    {
        "id": 444,
        "question": "Which structure in the female reproductive system releases mature eggs?",
        "options": [
            "Uterus",
            "Fallopian tube",
            "Ovary",
            "Cervix"
        ],
        "answer": "Ovary",
        "difficulty": "easy",
        "topic": "Reproductive Physiology",
        "explanation": "The ovaries release mature eggs during ovulation."
    },
    {
        "id": 445,
        "question": "Which hormone inhibits testosterone production in males?",
        "options": [
            "Inhibin",
            "FSH",
            "LH",
            "Testosterone"
        ],
        "answer": "Inhibin",
        "difficulty": "medium",
        "topic": "Reproductive Physiology",
        "explanation": "Inhibin, secreted by Sertoli cells, inhibits FSH to regulate testosterone levels."
    },
    {
        "id": 446,
        "question": "Which phase of the menstrual cycle prepares the uterus for implantation?",
        "options": [
            "Follicular phase",
            "Ovulatory phase",
            "Luteal phase",
            "Menstrual phase"
        ],
        "answer": "Luteal phase",
        "difficulty": "medium",
        "topic": "Reproductive Physiology",
        "explanation": "The luteal phase involves progesterone secretion to thicken the endometrium."
    },
    {
        "id": 447,
        "question": "Which structure in males transports sperm to the urethra?",
        "options": [
            "Epididymis",
            "Vas deferens",
            "Seminal vesicles",
            "Prostate gland"
        ],
        "answer": "Vas deferens",
        "difficulty": "easy",
        "topic": "Reproductive Physiology",
        "explanation": "The vas deferens transports mature sperm from the epididymis to the urethra."
    },
    {
        "id": 448,
        "question": "Which immune cells produce cytokines to coordinate immune responses?",
        "options": [
            "Neutrophils",
            "T cells",
            "Platelets",
            "Erythrocytes"
        ],
        "answer": "T cells",
        "difficulty": "medium",
        "topic": "Immune Physiology",
        "explanation": "T cells secrete cytokines to regulate and amplify immune responses."
    },
    {
        "id": 449,
        "question": "Which protein enhances viral resistance in uninfected cells?",
        "options": [
            "Antibody",
            "Interferon",
            "Complement",
            "Histamine"
        ],
        "answer": "Interferon",
        "difficulty": "medium",
        "topic": "Immune Physiology",
        "explanation": "Interferons signal nearby cells to produce antiviral proteins."
    },
    {
        "id": 450,
        "question": "Which immune cell type is elevated during allergic reactions?",
        "options": [
            "Neutrophils",
            "Eosinophils",
            "Lymphocytes",
            "Monocytes"
        ],
        "answer": "Eosinophils",
        "difficulty": "medium",
        "topic": "Immune Physiology",
        "explanation": "Eosinophils increase during allergic reactions and parasitic infections."
    },
    {
        "id": 451,
        "question": "Which substance causes swelling during inflammation?",
        "options": [
            "Histamine",
            "Cytokine",
            "Antigen",
            "Interferon"
        ],
        "answer": "Histamine",
        "difficulty": "easy",
        "topic": "Immune Physiology",
        "explanation": "Histamine increases vascular permeability, causing swelling in inflammation."
    },
    {
        "id": 452,
        "question": "Which process cools the body by evaporating sweat?",
        "options": [
            "Conduction",
            "Radiation",
            "Evaporation",
            "Convection"
        ],
        "answer": "Evaporation",
        "difficulty": "easy",
        "topic": "Temperature Regulation and Metabolism",
        "explanation": "Evaporation of sweat removes heat from the skin, cooling the body."
    },
    {
        "id": 453,
        "question": "Which nutrient is stored in the liver for energy reserve?",
        "options": [
            "Glycogen",
            "Fatty acids",
            "Amino acids",
            "Cholesterol"
        ],
        "answer": "Glycogen",
        "difficulty": "easy",
        "topic": "Temperature Regulation and Metabolism",
        "explanation": "Glycogen is stored in the liver and muscles as a quick energy source."
    },
    {
        "id": 454,
        "question": "Which hormone reduces metabolic rate in hypothyroidism?",
        "options": [
            "Thyroxine",
            "Insulin",
            "Cortisol",
            "Glucagon"
        ],
        "answer": "Thyroxine",
        "difficulty": "medium",
        "topic": "Temperature Regulation and Metabolism",
        "explanation": "Low thyroxine levels in hypothyroidism decrease metabolic rate."
    },
    {
        "id": 455,
        "question": "Which physiological change enhances oxygen delivery at high altitudes?",
        "options": [
            "Decreased hematocrit",
            "Increased red blood cell production",
            "Decreased respiratory rate",
            "Increased blood pressure"
        ],
        "answer": "Increased red blood cell production",
        "difficulty": "medium",
        "topic": "Integrative Physiology",
        "explanation": "Erythropoietin stimulates red blood cell production to improve oxygen transport."
    },
    {
        "id": 456,
        "question": "Which hormone is elevated during chronic stress?",
        "options": [
            "Insulin",
            "Cortisol",
            "Melatonin",
            "Oxytocin"
        ],
        "answer": "Cortisol",
        "difficulty": "easy",
        "topic": "Integrative Physiology",
        "explanation": "Cortisol, released by the adrenal cortex, increases during prolonged stress."
    },
    {
        "id": 457,
        "question": "Which physiological adaptation occurs during regular aerobic exercise?",
        "options": [
            "Decreased lung capacity",
            "Increased stroke volume",
            "Decreased muscle mass",
            "Increased resting heart rate"
        ],
        "answer": "Increased stroke volume",
        "difficulty": "medium",
        "topic": "Integrative Physiology",
        "explanation": "Aerobic exercise strengthens the heart, increasing stroke volume."
    },
    {
        "id": 458,
        "question": "Which blood vessel carries oxygenated blood to the body?",
        "options": [
            "Pulmonary artery",
            "Pulmonary vein",
            "Aorta",
            "Vena cava"
        ],
        "answer": "Aorta",
        "difficulty": "easy",
        "topic": "Cardiovascular Physiology",
        "explanation": "The aorta distributes oxygenated blood from the left ventricle to the body."
    },
    {
        "id": 459,
        "question": "Which factor decreases blood pressure by increasing vessel diameter?",
        "options": [
            "Vasoconstriction",
            "Increased viscosity",
            "Vasodilation",
            "Increased cardiac output"
        ],
        "answer": "Vasodilation",
        "difficulty": "medium",
        "topic": "Cardiovascular Physiology",
        "explanation": "Vasodilation reduces resistance by widening blood vessels, lowering pressure."
    },
    {
        "id": 460,
        "question": "Which respiratory muscle contracts to increase thoracic volume?",
        "options": [
            "Internal intercostals",
            "External intercostals",
            "Abdominal muscles",
            "Sternocleidomastoid"
        ],
        "answer": "External intercostals",
        "difficulty": "medium",
        "topic": "Respiratory Physiology",
        "explanation": "External intercostals lift the ribs, increasing thoracic volume during inspiration."
    },
    {
        "id": 461,
        "question": "Which part of the digestive system stores undigested food?",
        "options": [
            "Stomach",
            "Small intestine",
            "Large intestine",
            "Rectum"
        ],
        "answer": "Rectum",
        "difficulty": "easy",
        "topic": "Gastrointestinal Physiology",
        "explanation": "The rectum stores feces before defecation."
    },
    {
        "id": 462,
        "question": "Which hormone inhibits gastric motility after a meal?",
        "options": [
            "Gastrin",
            "Secretin",
            "Cholecystokinin",
            "Ghrelin"
        ],
        "answer": "Cholecystokinin",
        "difficulty": "medium",
        "topic": "Gastrointestinal Physiology",
        "explanation": "CCK slows gastric emptying to allow digestion in the small intestine."
    },
    {
        "id": 463,
        "question": "Which part of the brain coordinates emotional responses?",
        "options": [
            "Cerebellum",
            "Limbic system",
            "Thalamus",
            "Pons"
        ],
        "answer": "Limbic system",
        "difficulty": "medium",
        "topic": "Nervous System Physiology",
        "explanation": "The limbic system, including the amygdala, regulates emotions and memory."
    },
    {
        "id": 464,
        "question": "Which sensory receptor detects pain stimuli?",
        "options": [
            "Photoreceptor",
            "Nociceptor",
            "Mechanoreceptor",
            "Thermoreceptor"
        ],
        "answer": "Nociceptor",
        "difficulty": "easy",
        "topic": "Nervous System Physiology",
        "explanation": "Nociceptors detect painful stimuli like tissue damage or extreme temperatures."
    },
    {
        "id": 465,
        "question": "Which part of the eye controls pupil size?",
        "options": [
            "Cornea",
            "Lens",
            "Iris",
            "Retina"
        ],
        "answer": "Iris",
        "difficulty": "easy",
        "topic": "Special Senses",
        "explanation": "The iris adjusts pupil size to regulate light entering the eye."
    },
    {
        "id": 466,
        "question": "Which hormone stimulates ovarian estrogen production?",
        "options": [
            "FSH",
            "LH",
            "Progesterone",
            "Prolactin"
        ],
        "answer": "FSH",
        "difficulty": "medium",
        "topic": "Reproductive Physiology",
        "explanation": "FSH stimulates follicle development and estrogen secretion in the ovaries."
    },
    {
        "id": 467,
        "question": "Which immune cells destroy virus-infected cells directly?",
        "options": [
            "B cells",
            "Helper T cells",
            "Cytotoxic T cells",
            "Macrophages"
        ],
        "answer": "Cytotoxic T cells",
        "difficulty": "medium",
        "topic": "Immune Physiology",
        "explanation": "Cytotoxic T cells target and destroy virus-infected cells via perforins."
    },
    {
        "id": 468,
        "question": "Which structure in the kidney regulates blood pressure via renin?",
        "options": [
            "Glomerulus",
            "Juxtaglomerular apparatus",
            "Bowman’s capsule",
            "Proximal tubule"
        ],
        "answer": "Juxtaglomerular apparatus",
        "difficulty": "hard",
        "topic": "Renal Physiology",
        "explanation": "The juxtaglomerular apparatus secretes renin to regulate blood pressure."
    },
    {
        "id": 469,
        "question": "Which neurotransmitter is inhibitory in the central nervous system?",
        "options": [
            "Glutamate",
            "GABA",
            "Dopamine",
            "Acetylcholine"
        ],
        "answer": "GABA",
        "difficulty": "medium",
        "topic": "Nervous System Physiology",
        "explanation": "GABA hyperpolarizes neurons, reducing their activity in the CNS."
    },
    {
        "id": 470,
        "question": "Which hormone promotes sodium excretion in the kidneys?",
        "options": [
            "Aldosterone",
            "Antidiuretic hormone",
            "Atrial natriuretic peptide",
            "Renin"
        ],
        "answer": "Atrial natriuretic peptide",
        "difficulty": "medium",
        "topic": "Endocrine Physiology",
        "explanation": "ANP promotes sodium and water excretion to lower blood pressure."
    },
    {
        "id": 471,
        "question": "Which blood component transports oxygen in red blood cells?",
        "options": [
            "Fibrinogen",
            "Albumin",
            "Hemoglobin",
            "Globulin"
        ],
        "answer": "Hemoglobin",
        "difficulty": "easy",
        "topic": "Blood and Hematology",
        "explanation": "Hemoglobin binds oxygen in red blood cells for transport to tissues."
    },
    {
        "id": 472,
        "question": "Which heart sound is caused by the closure of atrioventricular valves?",
        "options": [
            "S1",
            "S2",
            "S3",
            "S4"
        ],
        "answer": "S1",
        "difficulty": "medium",
        "topic": "Cardiovascular Physiology",
        "explanation": "The first heart sound (S1) occurs when the mitral and tricuspid valves close."
    },
    {
        "id": 473,
        "question": "Which lung volume is exchanged during normal breathing?",
        "options": [
            "Residual volume",
            "Tidal volume",
            "Vital capacity",
            "Total lung capacity"
        ],
        "answer": "Tidal volume",
        "difficulty": "easy",
        "topic": "Respiratory Physiology",
        "explanation": "Tidal volume is the air moved in and out during normal breathing."
    },
    {
        "id": 474,
        "question": "Which enzyme in the pancreas digests fats?",
        "options": [
            "Amylase",
            "Trypsin",
            "Lipase",
            "Pepsin"
        ],
        "answer": "Lipase",
        "difficulty": "easy",
        "topic": "Gastrointestinal Physiology",
        "explanation": "Pancreatic lipase digests triglycerides into fatty acids and glycerol."
    },
    {
        "id": 475,
        "question": "Which part of the brain processes memory consolidation?",
        "options": [
            "Hippocampus",
            "Cerebellum",
            "Thalamus",
            "Pons"
        ],
        "answer": "Hippocampus",
        "difficulty": "medium",
        "topic": "Nervous System Physiology",
        "explanation": "The hippocampus is critical for forming and consolidating memories."
    },
    {
        "id": 476,
        "question": "Which hormone prepares the uterus for pregnancy?",
        "options": [
            "Estrogen",
            "Progesterone",
            "FSH",
            "LH"
        ],
        "answer": "Progesterone",
        "difficulty": "easy",
        "topic": "Reproductive Physiology",
        "explanation": "Progesterone thickens the endometrium to support pregnancy."
    },
    {
        "id": 477,
        "question": "Which immune cells are activated by antigen-presenting cells?",
        "options": [
            "Neutrophils",
            "Macrophages",
            "T cells",
            "Eosinophils"
        ],
        "answer": "T cells",
        "difficulty": "medium",
        "topic": "Immune Physiology",
        "explanation": "T cells are activated by antigen-presenting cells like dendritic cells."
    },
    {
        "id": 478,
        "question": "Which muscle type is under involuntary control in the heart?",
        "options": [
            "Skeletal muscle",
            "Smooth muscle",
            "Cardiac muscle",
            "Striated muscle"
        ],
        "answer": "Cardiac muscle",
        "difficulty": "easy",
        "topic": "Muscular Physiology",
        "explanation": "Cardiac muscle contracts involuntarily to pump blood in the heart."
    },
    {
        "id": 479,
        "question": "Which hormone regulates blood calcium by stimulating osteoclasts?",
        "options": [
            "Calcitonin",
            "Parathyroid hormone",
            "Vitamin D",
            "Thyroxine"
        ],
        "answer": "Parathyroid hormone",
        "difficulty": "medium",
        "topic": "Endocrine Physiology",
        "explanation": "PTH increases blood calcium by activating osteoclasts to resorb bone."
    },
    {
        "id": 480,
        "question": "Which structure in the kidney filters blood plasma?",
        "options": [
            "Glomerulus",
            "Loop of Henle",
            "Distal tubule",
            "Collecting duct"
        ],
        "answer": "Glomerulus",
        "difficulty": "easy",
        "topic": "Renal Physiology",
        "explanation": "The glomerulus filters blood plasma to form filtrate in the nephron."
    },
    {
        "id": 481,
        "question": "Which part of the ear converts sound into neural signals?",
        "options": [
            "Tympanic membrane",
            "Ossicles",
            "Cochlea",
            "Eustachian tube"
        ],
        "answer": "Cochlea",
        "difficulty": "medium",
        "topic": "Special Senses",
        "explanation": "The cochlea’s hair cells convert sound vibrations into neural signals."
    },
    {
        "id": 482,
        "question": "Which hormone lowers blood glucose by inhibiting glucagon release?",
        "options": [
            "Insulin",
            "Glucagon",
            "Cortisol",
            "Epinephrine"
        ],
        "answer": "Insulin",
        "difficulty": "medium",
        "topic": "Endocrine Physiology",
        "explanation": "Insulin inhibits glucagon secretion to reduce blood glucose levels."
    },
    {
        "id": 483,
        "question": "Which blood type is the universal donor?",
        "options": [
            "A-positive",
            "B-negative",
            "AB-positive",
            "O-negative"
        ],
        "answer": "O-negative",
        "difficulty": "easy",
        "topic": "Blood and Hematology",
        "explanation": "O-negative blood lacks antigens, making it safe for all recipients."
    },
    {
        "id": 484,
        "question": "Which factor maintains blood flow during ventricular relaxation?",
        "options": [
            "Preload",
            "Afterload",
            "Elastic recoil",
            "Contractility"
        ],
        "answer": "Elastic recoil",
        "difficulty": "hard",
        "topic": "Cardiovascular Physiology",
        "explanation": "Elastic recoil of arteries maintains blood flow during diastole."
    },
    {
        "id": 485,
        "question": "Which respiratory condition is caused by alveolar destruction?",
        "options": [
            "Asthma",
            "Emphysema",
            "Bronchitis",
            "Pneumonia"
        ],
        "answer": "Emphysema",
        "difficulty": "medium",
        "topic": "Respiratory Physiology",
        "explanation": "Emphysema involves the destruction of alveoli, reducing gas exchange."
    },
    {
        "id": 486,
        "question": "Which part of the digestive system produces bile salts?",
        "options": [
            "Pancreas",
            "Liver",
            "Gallbladder",
            "Duodenum"
        ],
        "answer": "Liver",
        "difficulty": "easy",
        "topic": "Gastrointestinal Physiology",
        "explanation": "The liver produces bile salts to emulsify fats for digestion."
    },
    {
        "id": 487,
        "question": "Which reflex arc component carries signals to muscles?",
        "options": [
            "Sensory neuron",
            "Interneuron",
            "Motor neuron",
            "Receptor"
        ],
        "answer": "Motor neuron",
        "difficulty": "easy",
        "topic": "Nervous System Physiology",
        "explanation": "Motor neurons transmit signals from the CNS to muscles or glands."
    },
    {
        "id": 488,
        "question": "Which hormone is secreted by the corpus luteum after ovulation?",
        "options": [
            "Estrogen",
            "Progesterone",
            "FSH",
            "LH"
        ],
        "answer": "Progesterone",
        "difficulty": "medium",
        "topic": "Reproductive Physiology",
        "explanation": "The corpus luteum secretes progesterone to maintain the endometrium."
    },
    {
        "id": 489,
        "question": "Which immune cells engulf dead cells during tissue repair?",
        "options": [
            "Neutrophils",
            "Macrophages",
            "Lymphocytes",
            "Basophils"
        ],
        "answer": "Macrophages",
        "difficulty": "medium",
        "topic": "Immune Physiology",
        "explanation": "Macrophages phagocytose dead cells and debris to aid tissue repair."
    },
    {
        "id": 490,
        "question": "Which muscle fiber type is most resistant to fatigue?",
        "options": [
            "Type I",
            "Type IIa",
            "Type IIx",
            "Type III"
        ],
        "answer": "Type I",
        "difficulty": "medium",
        "topic": "Muscular Physiology",
        "explanation": "Type I (slow-twitch) fibers rely on aerobic metabolism, resisting fatigue."
    },
    {
        "id": 491,
        "question": "Which hormone regulates blood pressure via the renin-angiotensin system?",
        "options": [
            "Aldosterone",
            "Antidiuretic hormone",
            "Atrial natriuretic peptide",
            "Angiotensin II"
        ],
        "answer": "Angiotensin II",
        "difficulty": "medium",
        "topic": "Endocrine Physiology",
        "explanation": "Angiotensin II raises blood pressure by vasoconstriction and aldosterone release."
    },
    {
        "id": 492,
        "question": "Which blood vessel supplies blood to the liver from the intestines?",
        "options": [
            "Hepatic artery",
            "Hepatic vein",
            "Portal vein",
            "Renal vein"
        ],
        "answer": "Portal vein",
        "difficulty": "medium",
        "topic": "Cardiovascular Physiology",
        "explanation": "The hepatic portal vein carries nutrient-rich blood from the intestines to the liver."
    },
    {
        "id": 493,
        "question": "Which respiratory structure contains smooth muscle for bronchoconstriction?",
        "options": [
            "Alveoli",
            "Bronchioles",
            "Trachea",
            "Pharynx"
        ],
        "answer": "Bronchioles",
        "difficulty": "medium",
        "topic": "Respiratory Physiology",
        "explanation": "Bronchioles have smooth muscle that regulates airflow via constriction or dilation."
    },
    {
        "id": 494,
        "question": "Which part of the digestive system absorbs vitamin B12?",
        "options": [
            "Stomach",
            "Duodenum",
            "Ileum",
            "Colon"
        ],
        "answer": "Ileum",
        "difficulty": "medium",
        "topic": "Gastrointestinal Physiology",
        "explanation": "The ileum absorbs vitamin B12 bound to intrinsic factor."
    },
    {
        "id": 495,
        "question": "Which brain wave is associated with deep sleep?",
        "options": [
            "Alpha waves",
            "Beta waves",
            "Theta waves",
            "Delta waves"
        ],
        "answer": "Delta waves",
        "difficulty": "medium",
        "topic": "Nervous System Physiology",
        "explanation": "Delta waves are prominent during deep, restorative sleep stages."
    },
    {
        "id": 496,
        "question": "Which hormone supports secondary sexual characteristics in females?",
        "options": [
            "Progesterone",
            "Estrogen",
            "FSH",
            "LH"
        ],
        "answer": "Estrogen",
        "difficulty": "easy",
        "topic": "Reproductive Physiology",
        "explanation": "Estrogen promotes female secondary sexual characteristics like breast development."
    },
    {
        "id": 497,
        "question": "Which immune cells are elevated during chronic inflammation?",
        "options": [
            "Neutrophils",
            "Monocytes",
            "Eosinophils",
            "Basophils"
        ],
        "answer": "Monocytes",
        "difficulty": "hard",
        "topic": "Immune Physiology",
        "explanation": "Monocytes differentiate into macrophages during chronic inflammation."
    },
    {
        "id": 498,
        "question": "Which structure in the nephron reabsorbs sodium actively?",
        "options": [
            "Glomerulus",
            "Proximal tubule",
            "Loop of Henle",
            "Collecting duct"
        ],
        "answer": "Proximal tubule",
        "difficulty": "medium",
        "topic": "Renal Physiology",
        "explanation": "The proximal tubule actively reabsorbs sodium, driving water reabsorption."
    },
    {
        "id": 499,
        "question": "Which neurotransmitter regulates mood and sleep?",
        "options": [
            "Dopamine",
            "Serotonin",
            "GABA",
            "Glutamate"
        ],
        "answer": "Serotonin",
        "difficulty": "medium",
        "topic": "Nervous System Physiology",
        "explanation": "Serotonin influences mood, sleep, and appetite in the brain."
    },
    {
        "id": 500,
        "question": "Which physiological process is disrupted in diabetes mellitus?",
        "options": [
            "Blood clotting",
            "Glucose regulation",
            "Temperature regulation",
            "Immune response"
        ],
        "answer": "Glucose regulation",
        "difficulty": "easy",
        "topic": "Integrative Physiology",
        "explanation": "Diabetes mellitus involves impaired insulin function, disrupting glucose regulation."
    }
]
