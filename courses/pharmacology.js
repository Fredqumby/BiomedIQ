const QUESTIONS = [
    {
        "id": 1,
        "question": "What is the primary process by which most drugs are absorbed from the gastrointestinal tract?",
        "options": [
            "Active transport",
            "Passive diffusion",
            "Pinocytosis",
            "Facilitated diffusion"
        ],
        "answer": "Passive diffusion",
        "difficulty": "easy",
        "topic": "Pharmacokinetics",
        "explanation": "Most drugs are lipophilic and cross membranes via passive diffusion, moving from higher to lower concentration without requiring energy."
    },
    {
        "id": 2,
        "question": "Which best describes the mechanism of action of penicillin?",
        "options": [
            "Inhibition of cell wall synthesis",
            "Inhibition of protein synthesis",
            "Disruption of cell membrane",
            "Inhibition of nucleic acid synthesis"
        ],
        "answer": "Inhibition of cell wall synthesis",
        "difficulty": "medium",
        "topic": "Pharmacodynamics",
        "explanation": "Penicillin inhibits bacterial cell wall synthesis by targeting peptidoglycan cross-linking, leading to cell lysis and death."
    },
    {
        "id": 3,
        "question": "Which pharmacokinetic parameter describes the time required for a drug's plasma concentration to decrease by half?",
        "options": [
            "Bioavailability",
            "Half-life",
            "Clearance",
            "Volume of distribution"
        ],
        "answer": "Half-life",
        "difficulty": "easy",
        "topic": "Pharmacokinetics",
        "explanation": "Half-life is the time required for the plasma concentration of a drug to reduce by 50%, indicating how long the drug remains active in the body."
    },
    {
        "id": 4,
        "question": "What does LD50 stand for in toxicology?",
        "options": [
            "Lethal Dose 50%",
            "Lowest Dose 50%",
            "Lethal Dose 50 mg/kg",
            "Lowest Dose 50 mg/kg"
        ],
        "answer": "Lethal Dose 50%",
        "difficulty": "easy",
        "topic": "Toxicology",
        "explanation": "LD50 is the dose of a substance that causes death in 50% of a test population, a standard measure of acute toxicity."
    },
    {
        "id": 5,
        "question": "Which drug is used to treat hypertension by blocking beta-adrenergic receptors?",
        "options": [
            "Aspirin",
            "Propranolol",
            "Furosemide",
            "Atorvastatin"
        ],
        "answer": "Propranolol",
        "difficulty": "medium",
        "topic": "Therapeutics",
        "explanation": "Propranolol, a non-selective beta-blocker, reduces heart rate and blood pressure, making it effective for treating hypertension."
    },
    {
        "id": 6,
        "question": "In which phase of clinical trials are drugs first tested in humans?",
        "options": [
            "Phase I",
            "Phase II",
            "Phase III",
            "Phase IV"
        ],
        "answer": "Phase I",
        "difficulty": "medium",
        "topic": "Clinical Pharmacology",
        "explanation": "Phase I trials involve testing a drug in a small group of healthy volunteers to assess safety, dosage, and side effects."
    },
    {
        "id": 7,
        "question": "Which receptor type is primarily involved in insulin action?",
        "options": [
            "Ion channel receptor",
            "G-protein coupled receptor",
            "Enzyme-linked receptor",
            "Nuclear receptor"
        ],
        "answer": "Enzyme-linked receptor",
        "difficulty": "hard",
        "topic": "Molecular Pharmacology",
        "explanation": "Insulin binds to tyrosine kinase receptors, which are enzyme-linked receptors, triggering intracellular signaling cascades for glucose uptake."
    },
    {
        "id": 8,
        "question": "Which drug class is most associated with the risk of addiction?",
        "options": [
            "Antidepressants",
            "Opioids",
            "Antibiotics",
            "Antihypertensives"
        ],
        "answer": "Opioids",
        "difficulty": "medium",
        "topic": "Behavioral Pharmacology",
        "explanation": "Opioids, such as morphine and oxycodone, are highly addictive due to their action on the brain’s reward system via mu-opioid receptors."
    },
    {
        "id": 9,
        "question": "Which neurotransmitter is primarily targeted by selective serotonin reuptake inhibitors (SSRIs)?",
        "options": [
            "Dopamine",
            "Norepinephrine",
            "Serotonin",
            "Acetylcholine"
        ],
        "answer": "Serotonin",
        "difficulty": "easy",
        "topic": "Neuropharmacology",
        "explanation": "SSRIs block the reuptake of serotonin in the synapse, increasing its availability to treat conditions like depression."
    },
    {
        "id": 10,
        "question": "Which calcium channel blocker is commonly used to treat angina?",
        "options": [
            "Digoxin",
            "Lisinopril",
            "Amlodipine",
            "Warfarin"
        ],
        "answer": "Amlodipine",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Amlodipine, a dihydropyridine calcium channel blocker, reduces vascular smooth muscle contraction, improving blood flow and treating angina."
    },
    {
        "id": 11,
        "question": "Which organ is primarily responsible for the metabolism of most drugs?",
        "options": [
            "Kidneys",
            "Liver",
            "Lungs",
            "Stomach"
        ],
        "answer": "Liver",
        "difficulty": "easy",
        "topic": "Pharmacokinetics",
        "explanation": "The liver is the primary site for drug metabolism, where enzymes, such as cytochrome P450, transform drugs into metabolites for elimination."
    },
    {
        "id": 12,
        "question": "What term describes the fraction of an administered drug that reaches systemic circulation unchanged?",
        "options": [
            "Bioavailability",
            "Half-life",
            "Clearance",
            "Volume of distribution"
        ],
        "answer": "Bioavailability",
        "difficulty": "medium",
        "topic": "Pharmacokinetics",
        "explanation": "Bioavailability measures the proportion of a drug that enters systemic circulation in its active form, influenced by absorption and first-pass metabolism."
    },
    {
        "id": 13,
        "question": "Which process best describes the movement of a drug from the bloodstream into tissues?",
        "options": [
            "Absorption",
            "Distribution",
            "Metabolism",
            "Excretion"
        ],
        "answer": "Distribution",
        "difficulty": "easy",
        "topic": "Pharmacokinetics",
        "explanation": "Distribution is the process by which a drug is transported from the bloodstream to tissues and organs, influenced by factors like protein binding and tissue permeability."
    },
    {
        "id": 14,
        "question": "What is the primary route of excretion for most drugs?",
        "options": [
            "Sweat",
            "Feces",
            "Urine",
            "Breath"
        ],
        "answer": "Urine",
        "difficulty": "easy",
        "topic": "Pharmacokinetics",
        "explanation": "Most drugs and their metabolites are excreted via the kidneys into urine, making it the primary route of drug elimination."
    },
    {
        "id": 15,
        "question": "Which enzyme system is most commonly involved in Phase I drug metabolism?",
        "options": [
            "Glucuronyl transferase",
            "Cytochrome P450",
            "Acetyltransferase",
            "Sulfotransferase"
        ],
        "answer": "Cytochrome P450",
        "difficulty": "medium",
        "topic": "Pharmacokinetics",
        "explanation": "Cytochrome P450 enzymes, located in the liver, catalyze Phase I reactions (e.g., oxidation, reduction) to modify drugs for further metabolism or excretion."
    },
    {
        "id": 16,
        "question": "What does the term 'first-pass metabolism' refer to?",
        "options": [
            "Metabolism of a drug in the kidneys",
            "Metabolism of a drug before it reaches systemic circulation",
            "Metabolism of a drug after it is excreted",
            "Metabolism of a drug in the bloodstream"
        ],
        "answer": "Metabolism of a drug before it reaches systemic circulation",
        "difficulty": "medium",
        "topic": "Pharmacokinetics",
        "explanation": "First-pass metabolism occurs when a drug is metabolized in the liver or gut after oral administration, reducing its bioavailability before reaching systemic circulation."
    },
    {
        "id": 17,
        "question": "Which factor most significantly affects the volume of distribution of a drug?",
        "options": [
            "Drug solubility",
            "Plasma protein binding",
            "Rate of excretion",
            "Enzyme induction"
        ],
        "answer": "Plasma protein binding",
        "difficulty": "hard",
        "topic": "Pharmacokinetics",
        "explanation": "The volume of distribution is influenced by plasma protein binding (e.g., to albumin), which determines how much drug remains in plasma versus distributing to tissues."
    },
    {
        "id": 18,
        "question": "How is the half-life of a drug defined?",
        "options": [
            "Time for a drug to be completely absorbed",
            "Time for a drug’s plasma concentration to decrease by half",
            "Time for a drug to be fully metabolized",
            "Time for a drug to be excreted entirely"
        ],
        "answer": "Time for a drug’s plasma concentration to decrease by half",
        "difficulty": "medium",
        "topic": "Pharmacokinetics",
        "explanation": "Half-life is the time required for the plasma concentration of a drug to reduce by 50%, reflecting its duration of action and elimination rate."
    },
    {
        "id": 19,
        "question": "Which administration route bypasses first-pass metabolism?",
        "options": [
            "Oral",
            "Intravenous",
            "Rectal",
            "Sublingual"
        ],
        "answer": "Intravenous",
        "difficulty": "medium",
        "topic": "Pharmacokinetics",
        "explanation": "Intravenous administration delivers drugs directly into systemic circulation, bypassing the liver and first-pass metabolism."
    },
    {
        "id": 20,
        "question": "What is the primary determinant of a drug’s clearance rate?",
        "options": [
            "Rate of absorption",
            "Efficiency of elimination by organs like the liver and kidneys",
            "Drug’s lipophilicity",
            "Patient’s body weight"
        ],
        "answer": "Efficiency of elimination by organs like the liver and kidneys",
        "difficulty": "hard",
        "topic": "Pharmacokinetics",
        "explanation": "Clearance rate depends on the efficiency of eliminating organs (liver for metabolism, kidneys for excretion), determining how quickly a drug is removed from the body."
    },
    {
        "id": 21,
        "question": "Which phase of drug metabolism involves oxidation, reduction, or hydrolysis reactions?",
        "options": [
            "Phase I",
            "Phase II",
            "Phase III",
            "Phase IV"
        ],
        "answer": "Phase I",
        "difficulty": "easy",
        "topic": "Drug Metabolism",
        "explanation": "Phase I metabolism involves reactions like oxidation, reduction, or hydrolysis, typically catalyzed by cytochrome P450 enzymes, to introduce or expose functional groups on drugs."
    },
    {
        "id": 22,
        "question": "Which enzyme system is most commonly involved in Phase I drug metabolism?",
        "options": [
            "Glucuronyl transferase",
            "Cytochrome P450",
            "Acetyltransferase",
            "Sulfotransferase"
        ],
        "answer": "Cytochrome P450",
        "difficulty": "medium",
        "topic": "Drug Metabolism",
        "explanation": "Cytochrome P450 enzymes, located primarily in the liver, catalyze most Phase I metabolic reactions, such as oxidation, to modify drugs for further processing or excretion."
    },
    {
        "id": 23,
        "question": "What is the primary purpose of Phase II drug metabolism?",
        "options": [
            "To increase drug lipophilicity",
            "To conjugate drugs with endogenous compounds",
            "To activate prodrugs",
            "To reduce drug toxicity"
        ],
        "answer": "To conjugate drugs with endogenous compounds",
        "difficulty": "medium",
        "topic": "Drug Metabolism",
        "explanation": "Phase II metabolism involves conjugation reactions (e.g., glucuronidation, sulfation) that attach endogenous compounds to drugs, increasing water solubility for excretion."
    },
    {
        "id": 24,
        "question": "Which endogenous compound is most commonly conjugated to drugs in Phase II metabolism?",
        "options": [
            "Glucose",
            "Glucuronic acid",
            "Amino acids",
            "Acetyl-CoA"
        ],
        "answer": "Glucuronic acid",
        "difficulty": "medium",
        "topic": "Drug Metabolism",
        "explanation": "Glucuronic acid is frequently conjugated to drugs in Phase II metabolism via glucuronidation, enhancing water solubility and facilitating renal excretion."
    },
    {
        "id": 25,
        "question": "Which factor is most likely to induce cytochrome P450 enzyme activity?",
        "options": [
            "Chronic alcohol consumption",
            "Acute renal failure",
            "Low protein diet",
            "Hypothyroidism"
        ],
        "answer": "Chronic alcohol consumption",
        "difficulty": "hard",
        "topic": "Drug Metabolism",
        "explanation": "Chronic alcohol consumption induces cytochrome P450 enzymes (e.g., CYP2E1), increasing the metabolism of certain drugs and potentially altering their efficacy or toxicity."
    },
    {
        "id": 26,
        "question": "What is the term for a drug that is inactive until metabolized into its active form?",
        "options": [
            "Metabolite",
            "Prodrug",
            "Agonist",
            "Antagonist"
        ],
        "answer": "Prodrug",
        "difficulty": "easy",
        "topic": "Drug Metabolism",
        "explanation": "A prodrug is an inactive compound that requires metabolism (often in the liver) to be converted into its active form to exert a therapeutic effect."
    },
    {
        "id": 27,
        "question": "Which drug is an example of a prodrug that is activated by metabolism?",
        "options": [
            "Aspirin",
            "Codeine",
            "Penicillin",
            "Metformin"
        ],
        "answer": "Codeine",
        "difficulty": "medium",
        "topic": "Drug Metabolism",
        "explanation": "Codeine is a prodrug metabolized by CYP2D6 in the liver to morphine, its active form, which provides analgesic effects."
    },
    {
        "id": 28,
        "question": "How does grapefruit juice affect drug metabolism?",
        "options": [
            "Induces cytochrome P450 enzymes",
            "Inhibits cytochrome P450 enzymes",
            "Increases drug absorption",
            "Enhances renal excretion"
        ],
        "answer": "Inhibits cytochrome P450 enzymes",
        "difficulty": "medium",
        "topic": "Drug Metabolism",
        "explanation": "Grapefruit juice inhibits CYP3A4, a cytochrome P450 enzyme, slowing the metabolism of certain drugs and increasing their plasma concentrations."
    },
    {
        "id": 29,
        "question": "Which genetic polymorphism can significantly affect drug metabolism?",
        "options": [
            "CYP2D6 variation",
            "Hemoglobin mutation",
            "Sodium channel mutation",
            "Insulin receptor mutation"
        ],
        "answer": "CYP2D6 variation",
        "difficulty": "hard",
        "topic": "Drug Metabolism",
        "explanation": "CYP2D6 polymorphisms lead to variations in drug metabolism rates (e.g., poor or ultra-rapid metabolizers), affecting the efficacy and safety of drugs like codeine."
    },
    {
        "id": 30,
        "question": "What is the primary consequence of extensive first-pass metabolism for orally administered drugs?",
        "options": [
            "Increased bioavailability",
            "Reduced bioavailability",
            "Faster absorption",
            "Delayed excretion"
        ],
        "answer": "Reduced bioavailability",
        "difficulty": "medium",
        "topic": "Drug Metabolism",
        "explanation": "Extensive first-pass metabolism in the liver or gut reduces the amount of active drug reaching systemic circulation, lowering bioavailability."
    },
    {
        "id": 31,
        "question": "What is the primary goal of Phase II drug metabolism?",
        "options": [
            "To oxidize drugs",
            "To conjugate drugs with endogenous compounds",
            "To increase drug lipophilicity",
            "To activate prodrugs"
        ],
        "answer": "To conjugate drugs with endogenous compounds",
        "difficulty": "easy",
        "topic": "Phase II Drug Metabolism",
        "explanation": "Phase II metabolism involves conjugation reactions that attach endogenous compounds to drugs, increasing their water solubility to facilitate excretion."
    },
    {
        "id": 32,
        "question": "Which endogenous compound is most commonly used in glucuronidation during Phase II metabolism?",
        "options": [
            "Glucose",
            "Glucuronic acid",
            "Sulfate",
            "Acetyl-CoA"
        ],
        "answer": "Glucuronic acid",
        "difficulty": "medium",
        "topic": "Phase II Drug Metabolism",
        "explanation": "Glucuronidation, a major Phase II reaction, conjugates drugs with glucuronic acid, enhancing their solubility for renal or biliary excretion."
    },
    {
        "id": 33,
        "question": "Which enzyme catalyzes glucuronidation in Phase II metabolism?",
        "options": [
            "Cytochrome P450",
            "UDP-glucuronosyltransferase",
            "Sulfotransferase",
            "N-acetyltransferase"
        ],
        "answer": "UDP-glucuronosyltransferase",
        "difficulty": "medium",
        "topic": "Phase II Drug Metabolism",
        "explanation": "UDP-glucuronosyltransferase (UGT) enzymes catalyze the transfer of glucuronic acid to drugs, forming water-soluble glucuronide conjugates."
    },
    {
        "id": 34,
        "question": "Which drug is primarily metabolized by glucuronidation in Phase II metabolism?",
        "options": [
            "Aspirin",
            "Warfarin",
            "Morphine",
            "Diazepam"
        ],
        "answer": "Morphine",
        "difficulty": "medium",
        "topic": "Phase II Drug Metabolism",
        "explanation": "Morphine undergoes glucuronidation in the liver, forming active (morphine-6-glucuronide) and inactive (morphine-3-glucuronide) metabolites."
    },
    {
        "id": 35,
        "question": "What is the primary role of sulfation in Phase II metabolism?",
        "options": [
            "To oxidize drugs",
            "To conjugate drugs with sulfate groups",
            "To reduce drug toxicity",
            "To hydrolyze drug molecules"
        ],
        "answer": "To conjugate drugs with sulfate groups",
        "difficulty": "easy",
        "topic": "Phase II Drug Metabolism",
        "explanation": "Sulfation, a Phase II reaction, involves the conjugation of drugs with sulfate groups via sulfotransferase enzymes, increasing water solubility for excretion."
    },
    {
        "id": 36,
        "question": "Which condition can impair Phase II metabolism due to reduced glucuronidation capacity?",
        "options": [
            "Neonatal jaundice",
            "Hypertension",
            "Diabetes mellitus",
            "Chronic obstructive pulmonary disease"
        ],
        "answer": "Neonatal jaundice",
        "difficulty": "hard",
        "topic": "Phase II Drug Metabolism",
        "explanation": "Neonates have reduced UDP-glucuronosyltransferase activity, impairing glucuronidation and contributing to jaundice due to unconjugated bilirubin accumulation."
    },
    {
        "id": 37,
        "question": "Which Phase II conjugation reaction involves the addition of an acetyl group to a drug?",
        "options": [
            "Glucuronidation",
            "Sulfation",
            "Acetylation",
            "Methylation"
        ],
        "answer": "Acetylation",
        "difficulty": "medium",
        "topic": "Phase II Drug Metabolism",
        "explanation": "Acetylation, catalyzed by N-acetyltransferase, adds an acetyl group to drugs, enhancing their solubility or altering their activity."
    },
    {
        "id": 38,
        "question": "Which drug is primarily metabolized by acetylation in Phase II metabolism?",
        "options": [
            "Isoniazid",
            "Paracetamol",
            "Ibuprofen",
            "Amoxicillin"
        ],
        "answer": "Isoniazid",
        "difficulty": "medium",
        "topic": "Phase II Drug Metabolism",
        "explanation": "Isoniazid, used for tuberculosis treatment, is primarily metabolized by acetylation via N-acetyltransferase, with genetic variations affecting metabolism rates."
    },
    {
        "id": 39,
        "question": "What is a potential consequence of genetic polymorphisms in N-acetyltransferase activity?",
        "options": [
            "Increased drug absorption",
            "Variable drug metabolism rates",
            "Reduced drug distribution",
            "Enhanced drug potency"
        ],
        "answer": "Variable drug metabolism rates",
        "difficulty": "hard",
        "topic": "Phase II Drug Metabolism",
        "explanation": "Polymorphisms in N-acetyltransferase (NAT2) lead to fast or slow acetylator phenotypes, causing variable metabolism rates for drugs like isoniazid, affecting efficacy and toxicity."
    },
    {
        "id": 40,
        "question": "Which Phase II metabolism pathway is most likely to produce a pharmacologically active metabolite?",
        "options": [
            "Sulfation",
            "Glucuronidation",
            "Acetylation",
            "Methylation"
        ],
        "answer": "Glucuronidation",
        "difficulty": "hard",
        "topic": "Phase II Drug Metabolism",
        "explanation": "Glucuronidation can produce active metabolites, such as morphine-6-glucuronide, which has greater analgesic activity than its parent compound, morphine."
    },
    {
        "id": 41,
        "question": "Which Phase II metabolism reaction involves the addition of a methyl group to a drug?",
        "options": [
            "Glucuronidation",
            "Sulfation",
            "Acetylation",
            "Methylation"
        ],
        "answer": "Methylation",
        "difficulty": "easy",
        "topic": "Phase II Drug Metabolism",
        "explanation": "Methylation is a Phase II metabolism reaction that adds a methyl group to drugs, often catalyzed by methyltransferases, to increase solubility or alter activity."
    },
    {
        "id": 42,
        "question": "Which enzyme is primarily responsible for methylation reactions in Phase II metabolism?",
        "options": [
            "UDP-glucuronosyltransferase",
            "Catechol-O-methyltransferase",
            "N-acetyltransferase",
            "Sulfotransferase"
        ],
        "answer": "Catechol-O-methyltransferase",
        "difficulty": "medium",
        "topic": "Phase II Drug Metabolism",
        "explanation": "Catechol-O-methyltransferase (COMT) catalyzes the transfer of a methyl group to drugs, particularly catecholamines, in Phase II metabolism."
    },
    {
        "id": 43,
        "question": "Which drug is an example of one primarily metabolized by sulfation in Phase II metabolism?",
        "options": [
            "Paracetamol",
            "Morphine",
            "Isoniazid",
            "Diazepam"
        ],
        "answer": "Paracetamol",
        "difficulty": "medium",
        "topic": "Phase II Drug Metabolism",
        "explanation": "Paracetamol (acetaminophen) is primarily metabolized by sulfation and glucuronidation in the liver, forming sulfate and glucuronide conjugates for excretion."
    },
    {
        "id": 44,
        "question": "What is a common clinical consequence of impaired Phase II metabolism in the elderly?",
        "options": [
            "Increased drug absorption",
            "Accumulation of drug metabolites",
            "Reduced drug potency",
            "Enhanced enzyme induction"
        ],
        "answer": "Accumulation of drug metabolites",
        "difficulty": "hard",
        "topic": "Phase II Drug Metabolism",
        "explanation": "Impaired Phase II metabolism in the elderly, due to reduced enzyme activity, can lead to accumulation of drug metabolites, increasing the risk of toxicity."
    },
    {
        "id": 45,
        "question": "Which cofactor is essential for sulfation reactions in Phase II metabolism?",
        "options": [
            "UDP-glucuronic acid",
            "S-adenosylmethionine",
            "3'-Phosphoadenosine-5'-phosphosulfate",
            "Acetyl-CoA"
        ],
        "answer": "3'-Phosphoadenosine-5'-phosphosulfate",
        "difficulty": "hard",
        "topic": "Phase II Drug Metabolism",
        "explanation": "3'-Phosphoadenosine-5'-phosphosulfate (PAPS) is the cofactor required by sulfotransferase enzymes to transfer sulfate groups to drugs during sulfation."
    },
    {
        "id": 46,
        "question": "Which Phase II metabolism pathway is most likely to be affected by liver disease?",
        "options": [
            "Glucuronidation",
            "Oxidation",
            "Hydrolysis",
            "Reduction"
        ],
        "answer": "Glucuronidation",
        "difficulty": "medium",
        "topic": "Phase II Drug Metabolism",
        "explanation": "Glucuronidation, a major Phase II pathway, is often impaired in liver disease due to reduced UDP-glucuronosyltransferase activity, affecting drug clearance."
    },
    {
        "id": 47,
        "question": "What is the primary site of Phase II drug metabolism in the body?",
        "options": [
            "Kidneys",
            "Liver",
            "Lungs",
            "Intestines"
        ],
        "answer": "Liver",
        "difficulty": "easy",
        "topic": "Phase II Drug Metabolism",
        "explanation": "The liver is the primary site for Phase II metabolism, where enzymes like UDP-glucuronosyltransferase and sulfotransferase conjugate drugs for excretion."
    },
    {
        "id": 48,
        "question": "Which drug’s toxicity is increased due to reduced glucuronidation in patients with Gilbert’s syndrome?",
        "options": [
            "Isoniazid",
            "Paracetamol",
            "Warfarin",
            "Aspirin"
        ],
        "answer": "Paracetamol",
        "difficulty": "hard",
        "topic": "Phase II Drug Metabolism",
        "explanation": "Gilbert’s syndrome reduces glucuronidation capacity, leading to accumulation of paracetamol and increased risk of hepatotoxicity."
    },
    {
        "id": 49,
        "question": "Which Phase II conjugation reaction is most likely to be influenced by dietary sulfate availability?",
        "options": [
            "Glucuronidation",
            "Acetylation",
            "Sulfation",
            "Methylation"
        ],
        "answer": "Sulfation",
        "difficulty": "medium",
        "topic": "Phase II Drug Metabolism",
        "explanation": "Sulfation relies on sulfate availability, which can be influenced by dietary intake, affecting the conjugation of drugs like paracetamol."
    },
    {
        "id": 50,
        "question": "Which Phase II metabolism enzyme is genetically polymorphic, leading to variable metabolism of drugs like hydralazine?",
        "options": [
            "UDP-glucuronosyltransferase",
            "Sulfotransferase",
            "N-acetyltransferase",
            "Catechol-O-methyltransferase"
        ],
        "answer": "N-acetyltransferase",
        "difficulty": "hard",
        "topic": "Phase II Drug Metabolism",
        "explanation": "N-acetyltransferase (NAT2) polymorphisms cause fast or slow acetylator phenotypes, affecting the metabolism of drugs like hydralazine and increasing toxicity risk."
    },
    {
        "id": 51,
        "question": "Which Phase II metabolism reaction is most likely to conjugate drugs with glutathione?",
        "options": [
            "Glucuronidation",
            "Sulfation",
            "Glutathione conjugation",
            "Acetylation"
        ],
        "answer": "Glutathione conjugation",
        "difficulty": "medium",
        "topic": "Phase II Drug Metabolism",
        "explanation": "Glutathione conjugation, a Phase II reaction, involves the addition of glutathione to drugs or their metabolites, often catalyzed by glutathione S-transferases, to detoxify reactive compounds."
    },
    {
        "id": 52,
        "question": "Which enzyme family primarily catalyzes glutathione conjugation in Phase II metabolism?",
        "options": [
            "UDP-glucuronosyltransferase",
            "Glutathione S-transferase",
            "N-acetyltransferase",
            "Sulfotransferase"
        ],
        "answer": "Glutathione S-transferase",
        "difficulty": "medium",
        "topic": "Phase II Drug Metabolism",
        "explanation": "Glutathione S-transferase (GST) enzymes facilitate the conjugation of glutathione to electrophilic drugs or metabolites, enhancing their solubility for excretion."
    },
    {
        "id": 53,
        "question": "Which drug’s metabolism relies heavily on glutathione conjugation to prevent toxicity?",
        "options": [
            "Paracetamol",
            "Morphine",
            "Isoniazid",
            "Diazepam"
        ],
        "answer": "Paracetamol",
        "difficulty": "hard",
        "topic": "Phase II Drug Metabolism",
        "explanation": "Paracetamol’s toxic metabolite, NAPQI, is detoxified by glutathione conjugation. Depletion of glutathione in overdose leads to hepatotoxicity."
    },
    {
        "id": 54,
        "question": "What is a potential consequence of reduced glutathione availability during Phase II metabolism?",
        "options": [
            "Increased drug absorption",
            "Enhanced drug efficacy",
            "Accumulation of toxic metabolites",
            "Reduced enzyme activity"
        ],
        "answer": "Accumulation of toxic metabolites",
        "difficulty": "hard",
        "topic": "Phase II Drug Metabolism",
        "explanation": "Reduced glutathione availability impairs conjugation of reactive metabolites, leading to their accumulation and potential toxicity, as seen in paracetamol overdose."
    },
    {
        "id": 55,
        "question": "Which Phase II metabolism pathway is most likely to be saturated at high drug doses?",
        "options": [
            "Glucuronidation",
            "Sulfation",
            "Acetylation",
            "Methylation"
        ],
        "answer": "Sulfation",
        "difficulty": "medium",
        "topic": "Phase II Drug Metabolism",
        "explanation": "Sulfation has a limited capacity due to finite sulfate availability, making it prone to saturation at high drug doses, shifting metabolism to other pathways like glucuronidation."
    },
    {
        "id": 56,
        "question": "Which condition may increase the reliance on glucuronidation due to impaired sulfation?",
        "options": [
            "Renal failure",
            "Sulfate depletion",
            "Hypothyroidism",
            "Diabetes mellitus"
        ],
        "answer": "Sulfate depletion",
        "difficulty": "hard",
        "topic": "Phase II Drug Metabolism",
        "explanation": "Sulfate depletion limits sulfation capacity, increasing reliance on glucuronidation for drugs like paracetamol, potentially altering metabolism profiles."
    },
    {
        "id": 57,
        "question": "Which Phase II metabolism reaction is least likely to produce water-soluble metabolites?",
        "options": [
            "Glucuronidation",
            "Sulfation",
            "Methylation",
            "Glutathione conjugation"
        ],
        "answer": "Methylation",
        "difficulty": "medium",
        "topic": "Phase II Drug Metabolism",
        "explanation": "Methylation often results in less water-soluble metabolites compared to glucuronidation, sulfation, or glutathione conjugation, which prioritize excretion."
    },
    {
        "id": 58,
        "question": "Which drug is metabolized by both glucuronidation and sulfation in Phase II metabolism?",
        "options": [
            "Aspirin",
            "Codeine",
            "Hydralazine",
            "Salbutamol"
        ],
        "answer": "Salbutamol",
        "difficulty": "medium",
        "topic": "Phase II Drug Metabolism",
        "explanation": "Salbutamol, a bronchodilator, is metabolized by both glucuronidation and sulfation in the liver, forming conjugates for excretion."
    },
    {
        "id": 59,
        "question": "What is the primary source of the methyl group in Phase II methylation reactions?",
        "options": [
            "UDP-glucuronic acid",
            "S-adenosylmethionine",
            "3'-Phosphoadenosine-5'-phosphosulfate",
            "Acetyl-CoA"
        ],
        "answer": "S-adenosylmethionine",
        "difficulty": "medium",
        "topic": "Phase II Drug Metabolism",
        "explanation": "S-adenosylmethionine (SAM) serves as the methyl group donor in methylation reactions, catalyzed by enzymes like COMT."
    },
    {
        "id": 60,
        "question": "Which genetic variation can affect glutathione conjugation efficiency in Phase II metabolism?",
        "options": [
            "CYP2D6 polymorphism",
            "GSTT1 deletion",
            "NAT2 polymorphism",
            "UGT1A1 mutation"
        ],
        "answer": "GSTT1 deletion",
        "difficulty": "hard",
        "topic": "Phase II Drug Metabolism",
        "explanation": "GSTT1 gene deletions reduce glutathione S-transferase activity, impairing glutathione conjugation and increasing susceptibility to toxic metabolites."
    },
    {
        "id": 61,
        "question": "What is the primary measure used to assess the acute toxicity of a drug?",
        "options": [
            "Therapeutic index",
            "LD50",
            "ED50",
            "Clearance rate"
        ],
        "answer": "LD50",
        "difficulty": "easy",
        "topic": "Toxicology",
        "explanation": "LD50, or lethal dose 50%, is the dose of a drug that causes death in 50% of a test population, serving as a standard measure of acute toxicity."
    },
    {
        "id": 62,
        "question": "Which organ is most commonly affected by drug-induced toxicity?",
        "options": [
            "Heart",
            "Liver",
            "Lungs",
            "Brain"
        ],
        "answer": "Liver",
        "difficulty": "medium",
        "topic": "Toxicology",
        "explanation": "The liver, as the primary site of drug metabolism, is frequently affected by drug-induced toxicity due to the formation of reactive metabolites."
    },
    {
        "id": 63,
        "question": "Which drug is associated with a high risk of hepatotoxicity due to its metabolite NAPQI?",
        "options": [
            "Ibuprofen",
            "Paracetamol",
            "Aspirin",
            "Amoxicillin"
        ],
        "answer": "Paracetamol",
        "difficulty": "medium",
        "topic": "Toxicology",
        "explanation": "Paracetamol’s metabolite, NAPQI, is highly toxic to the liver when glutathione is depleted, leading to hepatotoxicity in overdose."
    },
    {
        "id": 64,
        "question": "What is the therapeutic index of a drug?",
        "options": [
            "Ratio of effective dose to toxic dose",
            "Time to reach peak plasma concentration",
            "Rate of drug clearance",
            "Percentage of drug absorbed"
        ],
        "answer": "Ratio of effective dose to toxic dose",
        "difficulty": "medium",
        "topic": "Toxicology",
        "explanation": "The therapeutic index is the ratio of the dose causing toxicity (TD50) to the dose producing a therapeutic effect (ED50), indicating a drug’s safety margin."
    },
    {
        "id": 65,
        "question": "Which antidote is used to treat paracetamol overdose?",
        "options": [
            "Naloxone",
            "N-acetylcysteine",
            "Flumazenil",
            "Atropine"
        ],
        "answer": "N-acetylcysteine",
        "difficulty": "medium",
        "topic": "Toxicology",
        "explanation": "N-acetylcysteine replenishes glutathione, neutralizing the toxic paracetamol metabolite NAPQI to prevent liver damage in overdose."
    },
    {
        "id": 66,
        "question": "Which drug class is most likely to cause nephrotoxicity?",
        "options": [
            "Beta-blockers",
            "Aminoglycoside antibiotics",
            "Statins",
            "SSRIs"
        ],
        "answer": "Aminoglycoside antibiotics",
        "difficulty": "hard",
        "topic": "Toxicology",
        "explanation": "Aminoglycosides, such as gentamicin, are known to cause nephrotoxicity by accumulating in renal tubules, leading to acute kidney injury."
    },
    {
        "id": 67,
        "question": "What is a common clinical sign of opioid overdose?",
        "options": [
            "Hypertension",
            "Respiratory depression",
            "Hyperglycemia",
            "Tachycardia"
        ],
        "answer": "Respiratory depression",
        "difficulty": "medium",
        "topic": "Toxicology",
        "explanation": "Opioid overdose commonly causes respiratory depression due to mu-opioid receptor activation, reducing respiratory drive and potentially leading to hypoxia."
    },
    {
        "id": 68,
        "question": "Which genetic polymorphism increases the risk of toxicity from 6-mercaptopurine?",
        "options": [
            "CYP2D6 polymorphism",
            "TPMT deficiency",
            "UGT1A1 mutation",
            "GSTT1 deletion"
        ],
        "answer": "TPMT deficiency",
        "difficulty": "hard",
        "topic": "Toxicology",
        "explanation": "TPMT (thiopurine methyltransferase) deficiency impairs 6-mercaptopurine metabolism, leading to accumulation of toxic metabolites and increased risk of bone marrow suppression."
    },
    {
        "id": 69,
        "question": "Which type of toxicity is associated with long-term use of corticosteroids?",
        "options": [
            "Hepatotoxicity",
            "Nephrotoxicity",
            "Adrenal suppression",
            "Cardiotoxicity"
        ],
        "answer": "Adrenal suppression",
        "difficulty": "medium",
        "topic": "Toxicology",
        "explanation": "Long-term corticosteroid use suppresses the hypothalamic-pituitary-adrenal axis, leading to adrenal suppression and reduced endogenous cortisol production."
    },
    {
        "id": 70,
        "question": "Which term describes the ability of a drug to bind to a receptor and produce a maximal response?",
        "options": [
            "Affinity",
            "Efficacy",
            "Potency",
            "Selectivity"
        ],
        "answer": "Efficacy",
        "difficulty": "medium",
        "topic": "Pharmacodynamics",
        "explanation": "Efficacy refers to a drug’s ability to produce a maximal response upon binding to its receptor, distinguishing it from potency, which relates to the dose required."
    },
    {
        "id": 71,
        "question": "What type of drug interaction occurs when two drugs compete for the same receptor, reducing the effect of one?",
        "options": [
            "Pharmacokinetic interaction",
            "Pharmacodynamic interaction",
            "Metabolic induction",
            "Enzyme inhibition"
        ],
        "answer": "Pharmacodynamic interaction",
        "difficulty": "easy",
        "topic": "Drug Interactions",
        "explanation": "Pharmacodynamic interactions occur when two drugs act on the same receptor or pathway, such as competitive antagonism, altering the therapeutic effect."
    },
    {
        "id": 72,
        "question": "Which drug interaction is caused by grapefruit juice inhibiting CYP3A4?",
        "options": [
            "Increased drug metabolism",
            "Decreased drug bioavailability",
            "Increased drug plasma levels",
            "Decreased drug potency"
        ],
        "answer": "Increased drug plasma levels",
        "difficulty": "medium",
        "topic": "Drug Interactions",
        "explanation": "Grapefruit juice inhibits CYP3A4, a cytochrome P450 enzyme, reducing the metabolism of drugs like statins, leading to increased plasma levels and potential toxicity."
    },
    {
        "id": 73,
        "question": "Which drug combination is most likely to cause a serious pharmacodynamic interaction due to additive CNS depression?",
        "options": [
            "Aspirin and ibuprofen",
            "Diazepam and alcohol",
            "Metformin and insulin",
            "Amoxicillin and tetracycline"
        ],
        "answer": "Diazepam and alcohol",
        "difficulty": "medium",
        "topic": "Drug Interactions",
        "explanation": "Diazepam and alcohol both depress the central nervous system, causing additive effects that increase the risk of sedation and respiratory depression."
    },
    {
        "id": 74,
        "question": "What is the primary mechanism by which rifampin affects the metabolism of oral contraceptives?",
        "options": [
            "Inhibition of CYP3A4",
            "Induction of CYP3A4",
            "Inhibition of glucuronidation",
            "Increased renal excretion"
        ],
        "answer": "Induction of CYP3A4",
        "difficulty": "hard",
        "topic": "Drug Interactions",
        "explanation": "Rifampin induces CYP3A4, increasing the metabolism of oral contraceptives, reducing their plasma levels and potentially leading to contraceptive failure."
    },
    {
        "id": 75,
        "question": "Which drug interaction increases the risk of bleeding when warfarin is combined with another drug?",
        "options": [
            "Warfarin and rifampin",
            "Warfarin and aspirin",
            "Warfarin and metformin",
            "Warfarin and atenolol"
        ],
        "answer": "Warfarin and aspirin",
        "difficulty": "medium",
        "topic": "Drug Interactions",
        "explanation": "Warfarin and aspirin have a pharmacodynamic interaction, as both inhibit clotting (warfarin via anticoagulation, aspirin via antiplatelet effects), increasing bleeding risk."
    },
    {
        "id": 76,
        "question": "Which enzyme inhibition by erythromycin increases the toxicity of statins?",
        "options": [
            "CYP2D6",
            "CYP3A4",
            "UGT1A1",
            "NAT2"
        ],
        "answer": "CYP3A4",
        "difficulty": "medium",
        "topic": "Drug Interactions",
        "explanation": "Erythromycin inhibits CYP3A4, reducing statin metabolism, increasing their plasma levels, and raising the risk of toxicity like rhabdomyolysis."
    },
    {
        "id": 77,
        "question": "What type of interaction occurs when antacids reduce the absorption of tetracycline?",
        "options": [
            "Pharmacodynamic interaction",
            "Pharmacokinetic interaction",
            "Additive interaction",
            "Synergistic interaction"
        ],
        "answer": "Pharmacokinetic interaction",
        "difficulty": "medium",
        "topic": "Drug Interactions",
        "explanation": "Antacids bind to tetracycline in the gut, forming insoluble complexes that reduce its absorption, a classic pharmacokinetic interaction."
    },
    {
        "id": 78,
        "question": "Which drug interaction is most likely to cause serotonin syndrome when combined with an SSRI?",
        "options": [
            "Fluoxetine and metformin",
            "Sertraline and tramadol",
            "Paroxetine and atenolol",
            "Citalopram and amoxicillin"
        ],
        "answer": "Sertraline and tramadol",
        "difficulty": "hard",
        "topic": "Drug Interactions",
        "explanation": "Sertraline (an SSRI) and tramadol both increase serotonin levels, leading to a pharmacodynamic interaction that can cause serotonin syndrome, characterized by agitation and hyperthermia."
    },
    {
        "id": 79,
        "question": "Which drug, when combined with digoxin, increases its plasma levels by inhibiting P-glycoprotein?",
        "options": [
            "Amiodarone",
            "Metformin",
            "Losartan",
            "Levothyroxine"
        ],
        "answer": "Amiodarone",
        "difficulty": "hard",
        "topic": "Drug Interactions",
        "explanation": "Amiodarone inhibits P-glycoprotein, a transporter that pumps digoxin out of cells, increasing digoxin plasma levels and risk of toxicity."
    },
    {
        "id": 80,
        "question": "What is the clinical consequence of combining a beta-blocker with a calcium channel blocker like verapamil?",
        "options": [
            "Increased heart rate",
            "Enhanced antihypertensive effect",
            "Reduced drug absorption",
            "Increased metabolism"
        ],
        "answer": "Enhanced antihypertensive effect",
        "difficulty": "medium",
        "topic": "Drug Interactions",
        "explanation": "Beta-blockers and verapamil both reduce heart rate and blood pressure, causing a pharmacodynamic interaction that enhances antihypertensive effects but may lead to bradycardia."
    },
    {
        "id": 81,
        "question": "Which drug is commonly used to treat type 2 diabetes by increasing insulin sensitivity?",
        "options": [
            "Insulin",
            "Metformin",
            "Glipizide",
            "Pioglitazone"
        ],
        "answer": "Pioglitazone",
        "difficulty": "medium",
        "topic": "Therapeutics",
        "explanation": "Pioglitazone, a thiazolidinedione, increases insulin sensitivity by activating PPAR-gamma receptors, improving glucose uptake in type 2 diabetes."
    },
    {
        "id": 82,
        "question": "Which medication is the first-line treatment for hypertension in most patients?",
        "options": [
            "Propranolol",
            "Furosemide",
            "Lisinopril",
            "Amlodipine"
        ],
        "answer": "Lisinopril",
        "difficulty": "medium",
        "topic": "Therapeutics",
        "explanation": "Lisinopril, an ACE inhibitor, is a first-line treatment for hypertension due to its efficacy in reducing blood pressure and protecting against cardiovascular events."
    },
    {
        "id": 83,
        "question": "What is the primary therapeutic use of albuterol?",
        "options": [
            "Treatment of hypertension",
            "Relief of asthma symptoms",
            "Management of diabetes",
            "Prevention of blood clots"
        ],
        "answer": "Relief of asthma symptoms",
        "difficulty": "easy",
        "topic": "Therapeutics",
        "explanation": "Albuterol, a beta-2 agonist, is used to relieve bronchospasm in asthma by relaxing airway smooth muscles."
    },
    {
        "id": 84,
        "question": "Which anticoagulant is commonly used to prevent stroke in patients with atrial fibrillation?",
        "options": [
            "Warfarin",
            "Aspirin",
            "Clopidogrel",
            "Apixaban"
        ],
        "answer": "Apixaban",
        "difficulty": "medium",
        "topic": "Therapeutics",
        "explanation": "Apixaban, a direct oral anticoagulant (factor Xa inhibitor), is commonly used to prevent stroke in atrial fibrillation due to its efficacy and lower bleeding risk compared to warfarin."
    },
    {
        "id": 85,
        "question": "Which drug is used to treat acute myocardial infarction by dissolving blood clots?",
        "options": [
            "Metoprolol",
            "Alteplase",
            "Nitroglycerin",
            "Atorvastatin"
        ],
        "answer": "Alteplase",
        "difficulty": "medium",
        "topic": "Therapeutics",
        "explanation": "Alteplase, a thrombolytic agent, dissolves blood clots in acute myocardial infarction, restoring blood flow to the heart."
    },
    {
        "id": 86,
        "question": "Which medication is the first-line treatment for generalized anxiety disorder?",
        "options": [
            "Diazepam",
            "Sertraline",
            "Haloperidol",
            "Lithium"
        ],
        "answer": "Sertraline",
        "difficulty": "medium",
        "topic": "Therapeutics",
        "explanation": "Sertraline, an SSRI, is a first-line treatment for generalized anxiety disorder due to its efficacy in increasing serotonin levels and favorable side effect profile."
    },
    {
        "id": 87,
        "question": "What is the primary therapeutic role of levothyroxine?",
        "options": [
            "Treatment of hyperthyroidism",
            "Management of hypothyroidism",
            "Control of blood glucose",
            "Reduction of cholesterol"
        ],
        "answer": "Management of hypothyroidism",
        "difficulty": "easy",
        "topic": "Therapeutics",
        "explanation": "Levothyroxine, a synthetic thyroid hormone, is used to replace or supplement thyroid hormone in hypothyroidism, restoring normal metabolism."
    },
    {
        "id": 88,
        "question": "Which drug combination is most effective for treating Helicobacter pylori infection?",
        "options": [
            "Amoxicillin, clarithromycin, and omeprazole",
            "Metformin and insulin",
            "Aspirin and clopidogrel",
            "Lisinopril and amlodipine"
        ],
        "answer": "Amoxicillin, clarithromycin, and omeprazole",
        "difficulty": "hard",
        "topic": "Therapeutics",
        "explanation": "The triple therapy of amoxicillin, clarithromycin, and omeprazole (a PPI) is a standard regimen for eradicating H. pylori, treating peptic ulcers."
    },
    {
        "id": 89,
        "question": "Which drug is used to manage status epilepticus as a first-line treatment?",
        "options": [
            "Phenytoin",
            "Levetiracetam",
            "Lorazepam",
            "Carbamazepine"
        ],
        "answer": "Lorazepam",
        "difficulty": "hard",
        "topic": "Therapeutics",
        "explanation": "Lorazepam, a benzodiazepine, is the first-line treatment for status epilepticus due to its rapid onset and effectiveness in stopping seizures."
    },
    {
        "id": 90,
        "question": "What pharmacokinetic parameter measures the rate at which a drug is removed from the body?",
        "options": [
            "Bioavailability",
            "Half-life",
            "Clearance",
            "Volume of distribution"
        ],
        "answer": "Clearance",
        "difficulty": "medium",
        "topic": "Pharmacokinetics",
        "explanation": "Clearance measures the rate at which a drug is removed from the body, primarily via hepatic metabolism and renal excretion, influencing dosing regimens."
    },
    {
        "id": 91,
        "question": "Which neurotransmitter is primarily targeted by cholinergic drugs?",
        "options": [
            "Dopamine",
            "Serotonin",
            "Acetylcholine",
            "Norepinephrine"
        ],
        "answer": "Acetylcholine",
        "difficulty": "easy",
        "topic": "Neuropharmacology",
        "explanation": "Cholinergic drugs target acetylcholine, the primary neurotransmitter of the cholinergic system, acting on muscarinic or nicotinic receptors."
    },
    {
        "id": 92,
        "question": "Which drug is a cholinesterase inhibitor used to treat Alzheimer’s disease?",
        "options": [
            "Atropine",
            "Donepezil",
            "Bethanechol",
            "Succinylcholine"
        ],
        "answer": "Donepezil",
        "difficulty": "medium",
        "topic": "Neuropharmacology",
        "explanation": "Donepezil inhibits acetylcholinesterase, increasing acetylcholine levels in the brain, improving cognitive function in Alzheimer’s disease."
    },
    {
        "id": 93,
        "question": "What is the primary therapeutic use of bethanechol?",
        "options": [
            "Treatment of glaucoma",
            "Management of urinary retention",
            "Relief of asthma symptoms",
            "Control of seizures"
        ],
        "answer": "Management of urinary retention",
        "difficulty": "medium",
        "topic": "Neuropharmacology",
        "explanation": "Bethanechol, a muscarinic agonist, stimulates bladder smooth muscle contraction, making it effective for treating non-obstructive urinary retention."
    },
    {
        "id": 94,
        "question": "Which cholinergic receptor type is primarily targeted by atropine?",
        "options": [
            "Nicotinic receptor",
            "Muscarinic receptor",
            "Adrenergic receptor",
            "Dopaminergic receptor"
        ],
        "answer": "Muscarinic receptor",
        "difficulty": "medium",
        "topic": "Neuropharmacology",
        "explanation": "Atropine is a muscarinic receptor antagonist, blocking acetylcholine’s effects at muscarinic receptors, used in conditions like bradycardia or organophosphate poisoning."
    },
    {
        "id": 95,
        "question": "Which drug is a nicotinic receptor agonist used as a smoking cessation aid?",
        "options": [
            "Varenicline",
            "Pilocarpine",
            "Physostigmine",
            "Scopolamine"
        ],
        "answer": "Varenicline",
        "difficulty": "medium",
        "topic": "Neuropharmacology",
        "explanation": "Varenicline, a partial nicotinic receptor agonist, reduces nicotine cravings and withdrawal symptoms, aiding smoking cessation."
    },
    {
        "id": 96,
        "question": "What is a common side effect of cholinesterase inhibitors like neostigmine?",
        "options": [
            "Hypertension",
            "Bradycardia",
            "Hypoglycemia",
            "Tachycardia"
        ],
        "answer": "Bradycardia",
        "difficulty": "medium",
        "topic": "Neuropharmacology",
        "explanation": "Cholinesterase inhibitors like neostigmine increase acetylcholine, stimulating muscarinic receptors in the heart, which can cause bradycardia."
    },
    {
        "id": 97,
        "question": "Which condition is treated with physostigmine by increasing acetylcholine in the central nervous system?",
        "options": [
            "Myasthenia gravis",
            "Anticholinergic toxicity",
            "Parkinson’s disease",
            "Epilepsy"
        ],
        "answer": "Anticholinergic toxicity",
        "difficulty": "hard",
        "topic": "Neuropharmacology",
        "explanation": "Physostigmine, a cholinesterase inhibitor, crosses the blood-brain barrier to increase CNS acetylcholine, reversing anticholinergic toxicity from drugs like atropine."
    },
    {
        "id": 98,
        "question": "Which drug, a muscarinic agonist, is used to reduce intraocular pressure in glaucoma?",
        "options": [
            "Neostigmine",
            "Pilocarpine",
            "Varenicline",
            "Succinylcholine"
        ],
        "answer": "Pilocarpine",
        "difficulty": "medium",
        "topic": "Neuropharmacology",
        "explanation": "Pilocarpine, a muscarinic agonist, contracts the ciliary muscle, increasing aqueous humor outflow and reducing intraocular pressure in glaucoma."
    },
    {
        "id": 99,
        "question": "What is the mechanism of action of succinylcholine in anesthesia?",
        "options": [
            "Muscarinic receptor antagonist",
            "Nicotinic receptor depolarizing blocker",
            "Cholinesterase inhibitor",
            "Non-depolarizing neuromuscular blocker"
        ],
        "answer": "Nicotinic receptor depolarizing blocker",
        "difficulty": "hard",
        "topic": "Neuropharmacology",
        "explanation": "Succinylcholine acts as a depolarizing neuromuscular blocker by binding nicotinic receptors, causing prolonged depolarization and muscle relaxation during anesthesia."
    },
    {
        "id": 100,
        "question": "Which drug interaction increases the risk of cholinergic crisis when combining neostigmine with atropine?",
        "options": [
            "Excessive muscarinic stimulation",
            "Reduced nicotinic receptor activity",
            "Inhibited cholinesterase activity",
            "Enhanced acetylcholine breakdown"
        ],
        "answer": "Excessive muscarinic stimulation",
        "difficulty": "hard",
        "topic": "Neuropharmacology",
        "explanation": "Neostigmine increases acetylcholine by inhibiting cholinesterase, and if atropine’s muscarinic blockade is insufficient, excessive muscarinic stimulation can lead to a cholinergic crisis."
    },
    {
        "id": 101,
        "question": "Which type of receptor are muscarinic receptors classified as?",
        "options": [
            "Ion channel receptors",
            "G-protein-coupled receptors",
            "Enzyme-linked receptors",
            "Nuclear receptors"
        ],
        "answer": "G-protein-coupled receptors",
        "difficulty": "easy",
        "topic": "Molecular Pharmacology",
        "explanation": "Muscarinic receptors are G-protein-coupled receptors that mediate acetylcholine effects in the parasympathetic nervous system via second messenger systems."
    },
    {
        "id": 102,
        "question": "Which muscarinic receptor subtype is primarily found in the heart and regulates heart rate?",
        "options": [
            "M1",
            "M2",
            "M3",
            "M4"
        ],
        "answer": "M2",
        "difficulty": "medium",
        "topic": "Molecular Pharmacology",
        "explanation": "M2 muscarinic receptors, located in the heart, couple to Gi proteins, inhibiting adenylate cyclase and slowing heart rate."
    },
    {
        "id": 103,
        "question": "Which muscarinic agonist is used to treat glaucoma by increasing aqueous humor outflow?",
        "options": [
            "Bethanechol",
            "Pilocarpine",
            "Neostigmine",
            "Atropine"
        ],
        "answer": "Pilocarpine",
        "difficulty": "medium",
        "topic": "Molecular Pharmacology",
        "explanation": "Pilocarpine, a muscarinic agonist, activates M3 receptors in the ciliary muscle, increasing aqueous humor outflow to reduce intraocular pressure in glaucoma."
    },
    {
        "id": 104,
        "question": "What is the primary effect of muscarinic receptor antagonists like atropine on the gastrointestinal tract?",
        "options": [
            "Increased motility",
            "Decreased motility",
            "Enhanced secretion",
            "Increased absorption"
        ],
        "answer": "Decreased motility",
        "difficulty": "medium",
        "topic": "Molecular Pharmacology",
        "explanation": "Atropine, a muscarinic antagonist, blocks M3 receptors in the GI tract, reducing smooth muscle contraction and motility, used in conditions like irritable bowel syndrome."
    },
    {
        "id": 105,
        "question": "Which muscarinic receptor subtype is primarily involved in smooth muscle contraction in the bladder?",
        "options": [
            "M1",
            "M2",
            "M3",
            "M5"
        ],
        "answer": "M3",
        "difficulty": "hard",
        "topic": "Molecular Pharmacology",
        "explanation": "M3 muscarinic receptors, coupled to Gq proteins, activate phospholipase C to promote smooth muscle contraction in the bladder, facilitating urination."
    },
    {
        "id": 106,
        "question": "Which drug, a muscarinic antagonist, is used to treat motion sickness?",
        "options": [
            "Scopolamine",
            "Pilocarpine",
            "Donepezil",
            "Bethanechol"
        ],
        "answer": "Scopolamine",
        "difficulty": "medium",
        "topic": "Molecular Pharmacology",
        "explanation": "Scopolamine blocks muscarinic receptors in the CNS (M1) and vestibular system, reducing nausea and vomiting associated with motion sickness."
    },
    {
        "id": 107,
        "question": "What is a common side effect of muscarinic receptor agonists like bethanechol?",
        "options": [
            "Dry mouth",
            "Increased salivation",
            "Tachycardia",
            "Constipation"
        ],
        "answer": "Increased salivation",
        "difficulty": "medium",
        "topic": "Molecular Pharmacology",
        "explanation": "Muscarinic agonists like bethanechol stimulate M3 receptors in salivary glands, increasing salivation, a common side effect."
    },
    {
        "id": 108,
        "question": "Which condition is treated by muscarinic antagonists like oxybutynin?",
        "options": [
            "Myasthenia gravis",
            "Overactive bladder",
            "Alzheimer’s disease",
            "Asthma"
        ],
        "answer": "Overactive bladder",
        "difficulty": "medium",
        "topic": "Molecular Pharmacology",
        "explanation": "Oxybutynin, a muscarinic antagonist, blocks M3 receptors in the bladder, reducing detrusor muscle contractions to treat overactive bladder."
    },
    {
        "id": 109,
        "question": "Which muscarinic receptor subtype is most abundant in the central nervous system and targeted in Alzheimer’s treatment?",
        "options": [
            "M1",
            "M2",
            "M3",
            "M4"
        ],
        "answer": "M1",
        "difficulty": "hard",
        "topic": "Molecular Pharmacology",
        "explanation": "M1 receptors, prevalent in the CNS, are targeted by cholinesterase inhibitors (e.g., donepezil) to increase acetylcholine, enhancing cognition in Alzheimer’s disease."
    },
    {
        "id": 110,
        "question": "What is a common effect of muscarinic antagonists like atropine on the eyes?",
        "options": [
            "Hypertension",
            "Bradycardia",
            "Bronchodilation",
            "Mydriasis"
        ],
        "answer": "Mydriasis",
        "difficulty": "medium",
        "topic": "Molecular Pharmacology",
        "explanation": "Muscarinic antagonists like atropine block M3 receptors in the iris, causing pupil dilation (mydriasis), used in ophthalmology for eye examinations."
    },
    {
        "id": 111,
        "question": "What is the primary purpose of Phase II clinical trials?",
        "options": [
            "Assess drug safety in healthy volunteers",
            "Evaluate drug efficacy and side effects in patients",
            "Monitor long-term safety post-market",
            "Determine maximum tolerated dose"
        ],
        "answer": "Evaluate drug efficacy and side effects in patients",
        "difficulty": "medium",
        "topic": "Clinical Pharmacology",
        "explanation": "Phase II clinical trials test a drug’s efficacy and side effects in a small group of patients with the target condition, building on Phase I safety data."
    },
    {
        "id": 112,
        "question": "Which term describes the study of how genetic variations affect drug response?",
        "options": [
            "Pharmacodynamics",
            "Pharmacokinetics",
            "Pharmacogenomics",
            "Therapeutics"
        ],
        "answer": "Pharmacogenomics",
        "difficulty": "easy",
        "topic": "Clinical Pharmacology",
        "explanation": "Pharmacogenomics studies how genetic variations influence drug metabolism, efficacy, and toxicity, guiding personalized medicine."
    },
    {
        "id": 113,
        "question": "Which clinical trial phase involves the largest number of participants to confirm efficacy and safety?",
        "options": [
            "Phase I",
            "Phase II",
            "Phase III",
            "Phase IV"
        ],
        "answer": "Phase III",
        "difficulty": "medium",
        "topic": "Clinical Pharmacology",
        "explanation": "Phase III trials involve large patient populations to confirm a drug’s efficacy, safety, and optimal dosing, often leading to regulatory approval."
    },
    {
        "id": 114,
        "question": "What is a common challenge in clinical trials that affects patient adherence?",
        "options": [
            "Lack of placebo control",
            "Complex dosing regimens",
            "Excessive sample size",
            "Short trial duration"
        ],
        "answer": "Complex dosing regimens",
        "difficulty": "medium",
        "topic": "Clinical Pharmacology",
        "explanation": "Complex dosing regimens, such as multiple daily doses or strict timing, can reduce patient adherence, impacting clinical trial outcomes."
    },
    {
        "id": 115,
        "question": "Which biomarker is used to monitor warfarin therapy in clinical practice?",
        "options": [
            "Blood glucose",
            "International Normalized Ratio (INR)",
            "Liver enzyme levels",
            "Serum creatinine"
        ],
        "answer": "International Normalized Ratio (INR)",
        "difficulty": "medium",
        "topic": "Clinical Pharmacology",
        "explanation": "INR is used to monitor warfarin’s anticoagulant effect, ensuring therapeutic levels to prevent thrombosis or bleeding."
    },
    {
        "id": 116,
        "question": "What is the primary goal of therapeutic drug monitoring (TDM)?",
        "options": [
            "To increase drug bioavailability",
            "To optimize drug dosing for efficacy and safety",
            "To reduce drug absorption",
            "To enhance drug metabolism"
        ],
        "answer": "To optimize drug dosing for efficacy and safety",
        "difficulty": "medium",
        "topic": "Clinical Pharmacology",
        "explanation": "Therapeutic drug monitoring measures drug concentrations in blood to adjust dosing, ensuring efficacy while minimizing toxicity."
    },
    {
        "id": 117,
        "question": "Which drug requires therapeutic drug monitoring due to its narrow therapeutic index?",
        "options": [
            "Amoxicillin",
            "Digoxin",
            "Aspirin",
            "Metformin"
        ],
        "answer": "Digoxin",
        "difficulty": "medium",
        "topic": "Clinical Pharmacology",
        "explanation": "Digoxin has a narrow therapeutic index, requiring TDM to maintain therapeutic plasma levels and avoid toxicity like arrhythmias."
    },
    {
        "id": 118,
        "question": "Which factor most significantly complicates the interpretation of clinical trial results in elderly patients?",
        "options": [
            "Increased drug absorption",
            "Polypharmacy",
            "Enhanced drug metabolism",
            "Reduced drug distribution"
        ],
        "answer": "Polypharmacy",
        "difficulty": "hard",
        "topic": "Clinical Pharmacology",
        "explanation": "Polypharmacy, the use of multiple medications, complicates clinical trial results in the elderly due to potential drug interactions and altered pharmacokinetics."
    },
    {
        "id": 119,
        "question": "Which statistical method is commonly used to assess the significance of clinical trial outcomes?",
        "options": [
            "Linear regression",
            "P-value analysis",
            "Cluster analysis",
            "Factor analysis"
        ],
        "answer": "P-value analysis",
        "difficulty": "hard",
        "topic": "Clinical Pharmacology",
        "explanation": "P-value analysis is used to determine the statistical significance of clinical trial outcomes, indicating whether results are due to the drug or chance."
    },
    {
        "id": 120,
        "question": "What is the purpose of a crossover study design in clinical pharmacology?",
        "options": [
            "To compare two drugs in different populations",
            "To test the same subjects with both treatment and placebo",
            "To reduce the number of subjects needed",
            "To monitor long-term drug effects"
        ],
        "answer": "To test the same subjects with both treatment and placebo",
        "difficulty": "medium",
        "topic": "Study Design",
        "explanation": "A crossover study design tests the same subjects with both treatment and placebo in different periods, reducing inter-subject variability and improving comparison."
    },
    {
        "id": 121,
        "question": "Which drug class is commonly used to treat angina by dilating coronary arteries?",
        "options": [
            "Beta-blockers",
            "Nitrates",
            "ACE inhibitors",
            "Diuretics"
        ],
        "answer": "Nitrates",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Nitrates, such as nitroglycerin, dilate coronary arteries, improving blood flow to the heart and relieving angina symptoms."
    },
    {
        "id": 122,
        "question": "Which beta-blocker is cardioselective, primarily targeting beta-1 receptors in the heart?",
        "options": [
            "Propranolol",
            "Atenolol",
            "Carvedilol",
            "Sotalol"
        ],
        "answer": "Atenolol",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Atenolol is a cardioselective beta-1 blocker, reducing heart rate and contractility with less effect on bronchial beta-2 receptors, used in hypertension and angina."
    },
    {
        "id": 123,
        "question": "What is the primary mechanism of action of amlodipine in treating hypertension?",
        "options": [
            "Inhibition of angiotensin-converting enzyme",
            "Blockade of calcium channels",
            "Stimulation of beta receptors",
            "Inhibition of sodium reabsorption"
        ],
        "answer": "Blockade of calcium channels",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Amlodipine, a dihydropyridine calcium channel blocker, inhibits calcium entry into vascular smooth muscle, causing vasodilation and reducing blood pressure."
    },
    {
        "id": 124,
        "question": "Which anticoagulant is a direct thrombin inhibitor used in acute coronary syndrome?",
        "options": [
            "Warfarin",
            "Heparin",
            "Dabigatran",
            "Clopidogrel"
        ],
        "answer": "Dabigatran",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Dabigatran directly inhibits thrombin, preventing clot formation, and is used in conditions like acute coronary syndrome and atrial fibrillation."
    },
    {
        "id": 125,
        "question": "What is a common side effect of ACE inhibitors like lisinopril?",
        "options": [
            "Dry cough",
            "Bradycardia",
            "Hypoglycemia",
            "Constipation"
        ],
        "answer": "Dry cough",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "ACE inhibitors like lisinopril can cause a dry cough due to increased bradykinin levels, a common side effect leading to discontinuation in some patients."
    },
    {
        "id": 126,
        "question": "Which drug is used to manage acute heart failure by reducing preload and afterload?",
        "options": [
            "Furosemide",
            "Metoprolol",
            "Atorvastatin",
            "Enalapril"
        ],
        "answer": "Furosemide",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Furosemide, a loop diuretic, reduces preload by promoting diuresis and afterload by decreasing blood volume, alleviating symptoms of acute heart failure."
    },
    {
        "id": 127,
        "question": "Which statin is most effective at reducing LDL cholesterol levels?",
        "options": [
            "Pravastatin",
            "Simvastatin",
            "Atorvastatin",
            "Lovastatin"
        ],
        "answer": "Atorvastatin",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Atorvastatin is a potent statin that inhibits HMG-CoA reductase, significantly reducing LDL cholesterol levels to prevent cardiovascular events."
    },
    {
        "id": 128,
        "question": "Which cardiovascular drug increases the risk of torsades de pointes due to QT prolongation?",
        "options": [
            "Amiodarone",
            "Lisinopril",
            "Amlodipine",
            "Aspirin"
        ],
        "answer": "Amiodarone",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Amiodarone, an antiarrhythmic, prolongs the QT interval, increasing the risk of torsades de pointes, a potentially fatal ventricular arrhythmia."
    },
    {
        "id": 129,
        "question": "Which drug combination is contraindicated due to the risk of severe hypotension in heart failure treatment?",
        "options": [
            "Lisinopril and furosemide",
            "Sildenafil and nitroglycerin",
            "Atenolol and amlodipine",
            "Digoxin and aspirin"
        ],
        "answer": "Sildenafil and nitroglycerin",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Sildenafil and nitroglycerin both cause vasodilation, and their combination can lead to severe hypotension, particularly dangerous in heart failure patients."
    },
    {
        "id": 130,
        "question": "Which drug is used to treat opioid addiction by acting as a partial opioid receptor agonist?",
        "options": [
            "Naloxone",
            "Buprenorphine",
            "Diazepam",
            "Fluoxetine"
        ],
        "answer": "Buprenorphine",
        "difficulty": "medium",
        "topic": "Behavioral Pharmacology",
        "explanation": "Buprenorphine, a partial mu-opioid receptor agonist, reduces cravings and withdrawal symptoms in opioid addiction, with a ceiling effect to limit abuse potential."
    },
    {
        "id": 131,
        "question": "Which term describes the maximum effect a drug can produce regardless of dose?",
        "options": [
            "Potency",
            "Efficacy",
            "Affinity",
            "Selectivity"
        ],
        "answer": "Efficacy",
        "difficulty": "easy",
        "topic": "Pharmacodynamics",
        "explanation": "Efficacy refers to the maximum effect a drug can produce, determined by its ability to activate receptors, unlike potency, which relates to the dose required."
    },
    {
        "id": 132,
        "question": "What type of drug binds to a receptor but produces no response, blocking agonists?",
        "options": [
            "Full agonist",
            "Partial agonist",
            "Antagonist",
            "Inverse agonist"
        ],
        "answer": "Antagonist",
        "difficulty": "easy",
        "topic": "Pharmacodynamics",
        "explanation": "An antagonist binds to a receptor without activating it, preventing agonists from producing a response, such as naloxone at opioid receptors."
    },
    {
        "id": 133,
        "question": "Which drug is an example of a partial agonist at opioid receptors?",
        "options": [
            "Morphine",
            "Naloxone",
            "Buprenorphine",
            "Fentanyl"
        ],
        "answer": "Buprenorphine",
        "difficulty": "medium",
        "topic": "Pharmacodynamics",
        "explanation": "Buprenorphine is a partial agonist at mu-opioid receptors, producing a submaximal response compared to full agonists like morphine, used in pain management and opioid addiction."
    },
    {
        "id": 134,
        "question": "What is the primary effect of competitive antagonists on the dose-response curve of an agonist?",
        "options": [
            "Shifts the curve upward",
            "Shifts the curve to the right",
            "Reduces the maximum response",
            "Increases the slope of the curve"
        ],
        "answer": "Shifts the curve to the right",
        "difficulty": "medium",
        "topic": "Pharmacodynamics",
        "explanation": "Competitive antagonists bind reversibly to the same receptor site as the agonist, requiring higher agonist doses to achieve the same effect, shifting the dose-response curve to the right."
    },
    {
        "id": 135,
        "question": "Which receptor type is most commonly associated with rapid drug responses due to ion channel opening?",
        "options": [
            "G-protein-coupled receptors",
            "Ionotropic receptors",
            "Kinase-linked receptors",
            "Nuclear receptors"
        ],
        "answer": "Ionotropic receptors",
        "difficulty": "medium",
        "topic": "Pharmacodynamics",
        "explanation": "Ionotropic receptors, such as nicotinic acetylcholine receptors, are ligand-gated ion channels that produce rapid responses by opening ion channels upon drug binding."
    },
    {
        "id": 136,
        "question": "What is the clinical significance of a drug’s therapeutic index?",
        "options": [
            "Determines the drug’s half-life",
            "Indicates the drug’s safety margin",
            "Measures the drug’s bioavailability",
            "Predicts the drug’s metabolism rate"
        ],
        "answer": "Indicates the drug’s safety margin",
        "difficulty": "medium",
        "topic": "Pharmacodynamics",
        "explanation": "The therapeutic index, the ratio of the toxic dose (TD50) to the effective dose (ED50), indicates a drug’s safety margin, with a higher index suggesting safer use."
    },
    {
        "id": 137,
        "question": "Which drug acts as an inverse agonist at benzodiazepine receptors?",
        "options": [
            "Diazepam",
            "Flumazenil",
            "Midazolam",
            "Lorazepam"
        ],
        "answer": "Flumazenil",
        "difficulty": "hard",
        "topic": "Pharmacodynamics",
        "explanation": "Flumazenil is an inverse agonist at benzodiazepine receptors, reducing GABA activity and reversing the sedative effects of benzodiazepines in overdose."
    },
    {
        "id": 138,
        "question": "What effect does a non-competitive antagonist have on an agonist’s maximum response?",
        "options": [
            "Increases the maximum response",
            "Shifts the dose-response curve to the left",
            "Reduces the maximum response",
            "Has no effect on the maximum response"
        ],
        "answer": "Reduces the maximum response",
        "difficulty": "hard",
        "topic": "Pharmacodynamics",
        "explanation": "Non-competitive antagonists bind to a different site than the agonist, reducing the maximum response by limiting receptor activation, even at high agonist doses."
    },
    {
        "id": 139,
        "question": "What is the primary advantage of a randomized controlled trial (RCT) in pharmacology studies?",
        "options": [
            "Reduces the need for ethical approval",
            "Minimizes selection bias",
            "Shortens the study duration",
            "Eliminates the need for statistical analysis"
        ],
        "answer": "Minimizes selection bias",
        "difficulty": "medium",
        "topic": "Study Design",
        "explanation": "Randomized controlled trials minimize selection bias by randomly assigning subjects to treatment or control groups, ensuring comparable baseline characteristics."
    },
    {
        "id": 140,
        "question": "Which study design is best suited to assess rare adverse drug reactions?",
        "options": [
            "Crossover study",
            "Case-control study",
            "Double-blind study",
            "Parallel group study"
        ],
        "answer": "Case-control study",
        "difficulty": "medium",
        "topic": "Study Design",
        "explanation": "Case-control studies are ideal for assessing rare adverse drug reactions by comparing patients with the reaction (cases) to those without (controls), identifying associated risk factors."
    },
    {
        "id": 141,
        "question": "Which drug is a selective serotonin reuptake inhibitor used to treat depression?",
        "options": [
            "Fluoxetine",
            "Diazepam",
            "Buprenorphine",
            "Haloperidol"
        ],
        "answer": "Fluoxetine",
        "difficulty": "easy",
        "topic": "Behavioral Pharmacology",
        "explanation": "Fluoxetine, an SSRI, increases serotonin levels in the brain, alleviating symptoms of depression by enhancing mood regulation."
    },
    {
        "id": 142,
        "question": "What is the primary therapeutic use of methylphenidate?",
        "options": [
            "Treatment of anxiety",
            "Management of attention deficit hyperactivity disorder (ADHD)",
            "Relief of chronic pain",
            "Prevention of seizures"
        ],
        "answer": "Management of attention deficit hyperactivity disorder (ADHD)",
        "difficulty": "easy",
        "topic": "Behavioral Pharmacology",
        "explanation": "Methylphenidate, a stimulant, increases dopamine and norepinephrine levels, improving focus and reducing impulsivity in ADHD."
    },
    {
        "id": 143,
        "question": "Which antipsychotic drug is associated with a lower risk of extrapyramidal side effects?",
        "options": [
            "Haloperidol",
            "Chlorpromazine",
            "Clozapine",
            "Risperidone"
        ],
        "answer": "Clozapine",
        "difficulty": "medium",
        "topic": "Behavioral Pharmacology",
        "explanation": "Clozapine, an atypical antipsychotic, has a lower risk of extrapyramidal side effects due to its weaker dopamine D2 receptor blockade, though it carries a risk of agranulocytosis."
    },
    {
        "id": 144,
        "question": "What is a common side effect of lithium used in bipolar disorder treatment?",
        "options": [
            "Weight loss",
            "Tremor",
            "Hypertension",
            "Rash"
        ],
        "answer": "Tremor",
        "difficulty": "easy",
        "topic": "Behavioral Pharmacology",
        "explanation": "Lithium, used to stabilize mood in bipolar disorder, commonly causes tremor as a side effect, particularly at higher doses."
    },
    {
        "id": 145,
        "question": "Which receptor is primarily targeted by benzodiazepines to produce sedative effects?",
        "options": [
            "Dopamine D2 receptor",
            "GABA-A receptor",
            "Serotonin 5-HT2 receptor",
            "Histamine H1 receptor"
        ],
        "answer": "GABA-A receptor",
        "difficulty": "easy",
        "topic": "Molecular Pharmacology",
        "explanation": "Benzodiazepines enhance GABA-A receptor activity, increasing chloride influx and producing sedative, anxiolytic, and muscle-relaxant effects."
    },
    {
        "id": 146,
        "question": "What is the mechanism of action of ondansetron in preventing chemotherapy-induced nausea?",
        "options": [
            "Dopamine receptor antagonism",
            "Serotonin 5-HT3 receptor antagonism",
            "Muscarinic receptor blockade",
            "Histamine receptor blockade"
        ],
        "answer": "Serotonin 5-HT3 receptor antagonism",
        "difficulty": "medium",
        "topic": "Molecular Pharmacology",
        "explanation": "Ondansetron blocks 5-HT3 receptors in the chemoreceptor trigger zone and gut, preventing nausea and vomiting induced by chemotherapy."
    },
    {
        "id": 147,
        "question": "Which second messenger system is activated by beta-adrenergic receptor stimulation?",
        "options": [
            "Inositol triphosphate (IP3)",
            "Cyclic AMP (cAMP)",
            "Cyclic GMP (cGMP)",
            "Calcium-calmodulin"
        ],
        "answer": "Cyclic AMP (cAMP)",
        "difficulty": "easy",
        "topic": "Molecular Pharmacology",
        "explanation": "Beta-adrenergic receptors, coupled to Gs proteins, activate adenylate cyclase, increasing cAMP levels to mediate effects like increased heart rate."
    },
    {
        "id": 148,
        "question": "What is the molecular target of tamoxifen in breast cancer treatment?",
        "options": [
            "Estrogen receptor",
            "HER2 receptor",
            "VEGF receptor",
            "EGFR receptor"
        ],
        "answer": "Estrogen receptor",
        "difficulty": "easy",
        "topic": "Molecular Pharmacology",
        "explanation": "Tamoxifen is a selective estrogen receptor modulator (SERM) that antagonizes estrogen receptors in breast tissue, inhibiting cancer cell growth."
    },
    {
        "id": 149,
        "question": "Which drug is used to treat hypothyroidism by replacing thyroid hormone?",
        "options": [
            "Propylthiouracil",
            "Levothyroxine",
            "Metformin",
            "Prednisone"
        ],
        "answer": "Levothyroxine",
        "difficulty": "easy",
        "topic": "Endocrine Pharmacology",
        "explanation": "Levothyroxine, a synthetic T4 hormone, is used to replace thyroid hormone in hypothyroidism, restoring normal metabolic function."
    },
    {
        "id": 150,
        "question": "What is the primary mechanism of action of metformin in type 2 diabetes?",
        "options": [
            "Increases insulin secretion",
            "Inhibits hepatic glucose production",
            "Blocks glucose absorption in the gut",
            "Stimulates glucagon release"
        ],
        "answer": "Inhibits hepatic glucose production",
        "difficulty": "hard",
        "topic": "Endocrine Pharmacology",
        "explanation": "Metformin primarily reduces hepatic gluconeogenesis, decreasing glucose production in the liver, improving glycemic control in type 2 diabetes."
    },
    {
        "id": 151,
        "question": "Which neurotransmitter is primarily responsible for parasympathetic nervous system signaling?",
        "options": [
            "Norepinephrine",
            "Dopamine",
            "Acetylcholine",
            "Serotonin"
        ],
        "answer": "Acetylcholine",
        "difficulty": "easy",
        "topic": "Molecular Pharmacology",
        "explanation": "Acetylcholine is the primary neurotransmitter of the parasympathetic nervous system, acting on muscarinic receptors to mediate 'rest and digest' functions."
    },
    {
        "id": 152,
        "question": "Which muscarinic agonist is used to stimulate gastrointestinal motility in postoperative ileus?",
        "options": [
            "Pilocarpine",
            "Bethanechol",
            "Scopolamine",
            "Atropine"
        ],
        "answer": "Bethanechol",
        "difficulty": "medium",
        "topic": "Molecular Pharmacology",
        "explanation": "Bethanechol, a muscarinic agonist, stimulates M3 receptors in the gastrointestinal tract, promoting motility in conditions like postoperative ileus."
    },
    {
        "id": 153,
        "question": "What is the primary effect of parasympathetic stimulation on the heart?",
        "options": [
            "Increased heart rate",
            "Decreased heart rate",
            "Increased contractility",
            "Decreased blood pressure"
        ],
        "answer": "Decreased heart rate",
        "difficulty": "easy",
        "topic": "Molecular Pharmacology",
        "explanation": "Parasympathetic stimulation via M2 muscarinic receptors in the heart activates Gi proteins, reducing heart rate (negative chronotropic effect)."
    },
    {
        "id": 154,
        "question": "Which muscarinic antagonist is used to treat bradycardia in emergency settings?",
        "options": [
            "Oxybutynin",
            "Atropine",
            "Pilocarpine",
            "Physostigmine"
        ],
        "answer": "Atropine",
        "difficulty": "medium",
        "topic": "Molecular Pharmacology",
        "explanation": "Atropine, a muscarinic antagonist, blocks M2 receptors in the heart, increasing heart rate to treat bradycardia in emergencies."
    },
    {
        "id": 155,
        "question": "Which cholinesterase inhibitor is used to reverse non-depolarizing neuromuscular blockers in anesthesia?",
        "options": [
            "Donepezil",
            "Neostigmine",
            "Scopolamine",
            "Bethanechol"
        ],
        "answer": "Neostigmine",
        "difficulty": "medium",
        "topic": "Molecular Pharmacology",
        "explanation": "Neostigmine inhibits acetylcholinesterase, increasing acetylcholine levels at the neuromuscular junction, reversing the effects of non-depolarizing blockers like rocuronium."
    },
    {
        "id": 156,
        "question": "What is a common side effect of muscarinic antagonists like scopolamine?",
        "options": [
            "Increased salivation",
            "Dry mouth",
            "Tachypnea",
            "Diarrhea"
        ],
        "answer": "Dry mouth",
        "difficulty": "easy",
        "topic": "Molecular Pharmacology",
        "explanation": "Muscarinic antagonists like scopolamine block M3 receptors in salivary glands, reducing saliva production and causing dry mouth."
    },
    {
        "id": 157,
        "question": "Which condition is exacerbated by muscarinic agonists due to increased bronchial secretions?",
        "options": [
            "Asthma",
            "Hypertension",
            "Glaucoma",
            "Urinary retention"
        ],
        "answer": "Asthma",
        "difficulty": "hard",
        "topic": "Molecular Pharmacology",
        "explanation": "Muscarinic agonists stimulate M3 receptors in the airways, increasing bronchial secretions and smooth muscle contraction, which can worsen asthma symptoms."
    },
    {
        "id": 158,
        "question": "Which muscarinic receptor subtype mediates pupil constriction in response to parasympathetic stimulation?",
        "options": [
            "M1",
            "M2",
            "M3",
            "M4"
        ],
        "answer": "M3",
        "difficulty": "medium",
        "topic": "Molecular Pharmacology",
        "explanation": "M3 muscarinic receptors in the iris sphincter muscle mediate pupil constriction (miosis) during parasympathetic stimulation, activated by drugs like pilocarpine."
    },
    {
        "id": 159,
        "question": "Which drug is used to treat organophosphate poisoning by increasing acetylcholine levels?",
        "options": [
            "Pralidoxime",
            "Atropine",
            "Physostigmine",
            "Oxybutynin"
        ],
        "answer": "Pralidoxime",
        "difficulty": "hard",
        "topic": "Molecular Pharmacology",
        "explanation": "Pralidoxime regenerates acetylcholinesterase inhibited by organophosphates, increasing acetylcholine hydrolysis, used alongside atropine to counter excessive muscarinic stimulation."
    },
    {
        "id": 160,
        "question": "What is the effect of parasympathetic stimulation on bronchial smooth muscle?",
        "options": [
            "Relaxation",
            "Contraction",
            "No effect",
            "Increased elasticity"
        ],
        "answer": "Contraction",
        "difficulty": "easy",
        "topic": "Molecular Pharmacology",
        "explanation": "Parasympathetic stimulation via M3 muscarinic receptors causes bronchial smooth muscle contraction, leading to bronchoconstriction."
    },
    {
        "id": 161,
        "question": "Which organ system is primarily activated by the parasympathetic nervous system?",
        "options": [
            "Skeletal muscle",
            "Sympathetic nervous system",
            "Digestive system",
            "Immune system"
        ],
        "answer": "Digestive system",
        "difficulty": "easy",
        "topic": "Neuropharmacology",
        "explanation": "The parasympathetic nervous system promotes 'rest and digest' functions, primarily activating the digestive system to enhance motility and secretion."
    },
    {
        "id": 162,
        "question": "Which muscarinic agonist is used to treat dry mouth in Sjögren’s syndrome?",
        "options": [
            "Cevimeline",
            "Atropine",
            "Neostigmine",
            "Scopolamine"
        ],
        "answer": "Cevimeline",
        "difficulty": "medium",
        "topic": "Neuropharmacology",
        "explanation": "Cevimeline, a muscarinic agonist, stimulates M3 receptors in salivary glands, increasing saliva production to treat dry mouth in Sjögren’s syndrome."
    },
    {
        "id": 163,
        "question": "What is the primary effect of parasympathetic stimulation on the pupils?",
        "options": [
            "Dilation",
            "Constriction",
            "No effect",
            "Increased light sensitivity"
        ],
        "answer": "Constriction",
        "difficulty": "easy",
        "topic": "Neuropharmacology",
        "explanation": "Parasympathetic stimulation via M3 muscarinic receptors in the iris sphincter muscle causes pupil constriction (miosis)."
    },
    {
        "id": 164,
        "question": "Which muscarinic antagonist is used to reduce secretions during surgery?",
        "options": [
            "Glycopyrrolate",
            "Pilocarpine",
            "Bethanechol",
            "Physostigmine"
        ],
        "answer": "Glycopyrrolate",
        "difficulty": "medium",
        "topic": "Neuropharmacology",
        "explanation": "Glycopyrrolate, a muscarinic antagonist, reduces salivary and respiratory secretions by blocking M3 receptors, commonly used during surgical procedures."
    },
    {
        "id": 165,
        "question": "Which cholinesterase inhibitor is used to treat myasthenia gravis by enhancing neuromuscular transmission?",
        "options": [
            "Pyridostigmine",
            "Donepezil",
            "Scopolamine",
            "Oxybutynin"
        ],
        "answer": "Pyridostigmine",
        "difficulty": "medium",
        "topic": "Neuropharmacology",
        "explanation": "Pyridostigmine inhibits acetylcholinesterase, increasing acetylcholine at the neuromuscular junction, improving muscle strength in myasthenia gravis."
    },
    {
        "id": 166,
        "question": "What is a common side effect of excessive parasympathetic stimulation by muscarinic agonists?",
        "options": [
            "Dry eyes",
            "Diarrhea",
            "Tachycardia",
            "Constipation"
        ],
        "answer": "Diarrhea",
        "difficulty": "easy",
        "topic": "Neuropharmacology",
        "explanation": "Excessive muscarinic stimulation by agonists increases gastrointestinal motility and secretions via M3 receptors, often causing diarrhea."
    },
    {
        "id": 167,
        "question": "Which condition is treated with muscarinic antagonists to prevent excessive parasympathetic activity?",
        "options": [
            "Chronic obstructive pulmonary disease",
            "Peptic ulcer disease",
            "Hypothyroidism",
            "Type 2 diabetes"
        ],
        "answer": "Peptic ulcer disease",
        "difficulty": "hard",
        "topic": "Neuropharmacology",
        "explanation": "Muscarinic antagonists, like pirenzepine, reduce gastric acid secretion by blocking M1 receptors, aiding in the treatment of peptic ulcer disease."
    },
    {
        "id": 168,
        "question": "Which muscarinic receptor subtype is primarily responsible for increasing gastric acid secretion?",
        "options": [
            "M1",
            "M2",
            "M3",
            "M5"
        ],
        "answer": "M1",
        "difficulty": "hard",
        "topic": "Neuropharmacology",
        "explanation": "M1 muscarinic receptors on parietal cells in the stomach mediate acetylcholine-induced gastric acid secretion, targeted by antagonists in ulcer treatment."
    },
    {
        "id": 169,
        "question": "Which drug is used as an antidote for muscarinic agonist overdose, such as from bethanechol?",
        "options": [
            "Atropine",
            "Pralidoxime",
            "Naloxone",
            "Flumazenil"
        ],
        "answer": "Atropine",
        "difficulty": "medium",
        "topic": "Neuropharmacology",
        "explanation": "Atropine, a muscarinic antagonist, counteracts excessive muscarinic stimulation from agonists like bethanechol, reversing symptoms like bradycardia and diarrhea."
    },
    {
        "id": 170,
        "question": "What is the effect of parasympathetic stimulation on salivary glands?",
        "options": [
            "Decreased secretion",
            "Increased secretion",
            "No effect",
            "Increased viscosity"
        ],
        "answer": "Increased secretion",
        "difficulty": "easy",
        "topic": "Neuropharmacology",
        "explanation": "Parasympathetic stimulation via M3 muscarinic receptors increases salivary gland secretion, promoting digestion."
    },
    {
        "id": 171,
        "question": "Which diuretic is commonly used to treat hypertension in patients with heart failure?",
        "options": [
            "Furosemide",
            "Hydrochlorothiazide",
            "Spironolactone",
            "Mannitol"
        ],
        "answer": "Spironolactone",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Spironolactone, a potassium-sparing diuretic, is used in hypertension with heart failure due to its aldosterone antagonism, reducing fluid overload and improving cardiac outcomes."
    },
    {
        "id": 222,
        "question": "What is the primary mechanism of amlodipine in treating hypertension?",
        "options": [
            "Beta-receptor blockade",
            "Calcium channel blockade",
            "Angiotensin II receptor blockade",
            "Diuresis"
        ],
        "answer": "Calcium channel blockade",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Amlodipine, a dihydropyridine calcium channel blocker, inhibits vascular smooth muscle calcium influx, causing vasodilation and reducing blood pressure."
    },
    {
        "id": 223,
        "question": "Which drug is used to treat acute hypotension in hypovolemic shock?",
        "options": [
            "Phenylephrine",
            "Lisinopril",
            "Normal saline",
            "Clonidine"
        ],
        "answer": "Normal saline",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Normal saline, a crystalloid fluid, is used to restore blood volume in hypovolemic shock, correcting acute hypotension by increasing preload."
    },
    {
        "id": 224,
        "question": "Which beta-blocker is preferred for hypertension in patients with a history of myocardial infarction?",
        "options": [
            "Propranolol",
            "Metoprolol",
            "Sotalol",
            "Labetalol"
        ],
        "answer": "Metoprolol",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Metoprolol, a cardioselective beta-1 blocker, is preferred in hypertensive patients with prior myocardial infarction due to its mortality benefit and reduction in cardiac workload."
    },
    {
        "id": 225,
        "question": "What is a common side effect of enalapril in hypertension treatment?",
        "options": [
            "Dry cough",
            "Tachycardia",
            "Hypokalemia",
            "Constipation"
        ],
        "answer": "Dry cough",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Enalapril, an ACE inhibitor, can cause a dry cough due to increased bradykinin levels, a common side effect in hypertension treatment."
    },
    {
        "id": 226,
        "question": "Which antihypertensive is used in patients with hypertension and chronic kidney disease?",
        "options": [
            "Nifedipine",
            "Losartan",
            "Clonidine",
            "Hydralazine"
        ],
        "answer": "Losartan",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Losartan, an ARB, is used in hypertension with chronic kidney disease to reduce proteinuria and protect renal function by blocking angiotensin II effects."
    },
    {
        "id": 227,
        "question": "Which drug interaction increases the risk of hypotension in patients on nifedipine?",
        "options": [
            "Nifedipine and grapefruit juice",
            "Nifedipine and aspirin",
            "Nifedipine and metoprolol",
            "Nifedipine and spironolactone"
        ],
        "answer": "Nifedipine and grapefruit juice",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Grapefruit juice inhibits CYP3A4, increasing nifedipine levels, a calcium channel blocker, leading to enhanced vasodilation and a higher risk of hypotension."
    },
    {
        "id": 228,
        "question": "Which vasopressor is used to treat hypotension in cardiogenic shock?",
        "options": [
            "Dopamine",
            "Amlodipine",
            "Prazosin",
            "Furosemide"
        ],
        "answer": "Dopamine",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Dopamine, a vasopressor, increases blood pressure in cardiogenic shock by stimulating beta-1 receptors to enhance cardiac output and alpha-1 receptors for vasoconstriction."
    },
    {
        "id": 229,
        "question": "What is the primary mechanism of furosemide in managing hypertension?",
        "options": [
            "Vasodilation",
            "Sodium and water excretion",
            "Angiotensin II inhibition",
            "Beta-receptor blockade"
        ],
        "answer": "Sodium and water excretion",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Furosemide, a loop diuretic, promotes sodium and water excretion in the kidneys, reducing blood volume and blood pressure in hypertension."
    },
    {
        "id": 230,
        "question": "Which antihypertensive is associated with reflex tachycardia as a side effect?",
        "options": [
            "Metoprolol",
            "Hydralazine",
            "Spironolactone",
            "Lisinopril"
        ],
        "answer": "Hydralazine",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Hydralazine, a direct vasodilator, causes reflex tachycardia due to baroreceptor-mediated sympathetic activation, a common side effect in hypertension treatment."
    },
    {
        "id": 231,
        "question": "Which drug is used to treat hypertensive emergency with aortic dissection?",
        "options": [
            "Esmolol",
            "Clonidine",
            "Losartan",
            "Hydrochlorothiazide"
        ],
        "answer": "Esmolol",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Esmolol, a short-acting beta-1 blocker, is used in hypertensive emergency with aortic dissection to rapidly reduce heart rate and shear stress on the aorta."
    },
    {
        "id": 232,
        "question": "Which condition is a common cause of hypotension treated with phenylephrine?",
        "options": [
            "Chronic hypertension",
            "Spinal anesthesia",
            "Heart failure",
            "Pulmonary edema"
        ],
        "answer": "Spinal anesthesia",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Phenylephrine, an alpha-1 agonist, treats hypotension caused by spinal anesthesia by increasing vascular tone to counteract vasodilation."
    },
    {
        "id": 233,
        "question": "Which antihypertensive is preferred in African American patients with hypertension?",
        "options": [
            "Enalapril",
            "Hydrochlorothiazide",
            "Propranolol",
            "Clonidine"
        ],
        "answer": "Hydrochlorothiazide",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Hydrochlorothiazide is preferred in African American patients with hypertension due to their higher sensitivity to salt and volume-dependent blood pressure regulation."
    },
    {
        "id": 234,
        "question": "What is a common side effect of spironolactone in hypertension treatment?",
        "options": [
            "Hypokalemia",
            "Gynecomastia",
            "Tachycardia",
            "Dry cough"
        ],
        "answer": "Gynecomastia",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Spironolactone, an aldosterone antagonist, can cause gynecomastia due to its anti-androgenic effects, a common side effect in hypertension treatment."
    },
    {
        "id": 235,
        "question": "Which drug is used to treat orthostatic hypotension in patients with autonomic dysfunction?",
        "options": [
            "Midodrine",
            "Amlodipine",
            "Lisinopril",
            "Furosemide"
        ],
        "answer": "Midodrine",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Midodrine, an alpha-1 agonist, increases vascular tone to treat orthostatic hypotension in autonomic dysfunction, improving standing blood pressure."
    },
    {
        "id": 236,
        "question": "Which antihypertensive drug class is associated with angioedema as a rare side effect?",
        "options": [
            "Calcium channel blockers",
            "Beta-blockers",
            "ACE inhibitors",
            "Thiazide diuretics"
        ],
        "answer": "ACE inhibitors",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "ACE inhibitors, such as enalapril, can cause angioedema due to increased bradykinin levels, a rare but serious side effect in hypertension treatment."
    },
    {
        "id": 237,
        "question": "Which drug interaction increases the risk of bradycardia in hypertensive patients on metoprolol?",
        "options": [
            "Metoprolol and amlodipine",
            "Metoprolol and verapamil",
            "Metoprolol and losartan",
            "Metoprolol and hydrochlorothiazide"
        ],
        "answer": "Metoprolol and verapamil",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Metoprolol, a beta-blocker, and verapamil, a calcium channel blocker, both slow heart rate, increasing the risk of bradycardia when combined."
    },
    {
        "id": 238,
        "question": "Which antihypertensive is used in patients with hypertension and diabetes mellitus?",
        "options": [
            "Propranolol",
            "Lisinopril",
            "Hydralazine",
            "Clonidine"
        ],
        "answer": "Lisinopril",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Lisinopril, an ACE inhibitor, is preferred in hypertensive patients with diabetes due to its renoprotective effects and reduction in cardiovascular risk."
    },
    {
        "id": 239,
        "question": "What is the primary mechanism of prazosin in treating hypertension?",
        "options": [
            "Alpha-1 receptor blockade",
            "Beta-receptor blockade",
            "Calcium channel blockade",
            "Diuresis"
        ],
        "answer": "Alpha-1 receptor blockade",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Prazosin, an alpha-1 blocker, causes vasodilation by blocking alpha-1 receptors on vascular smooth muscle, reducing blood pressure."
    },
    {
        "id": 240,
        "question": "Which drug is used to treat hypotension in anaphylactic shock?",
        "options": [
            "Epinephrine",
            "Nifedipine",
            "Enalapril",
            "Spironolactone"
        ],
        "answer": "Epinephrine",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Epinephrine, an alpha-1 and beta-agonist, reverses hypotension in anaphylactic shock by causing vasoconstriction and increasing cardiac output."
    },
    {
        "id": 241,
        "question": "Which antihypertensive is contraindicated in patients with bilateral renal artery stenosis?",
        "options": [
            "Amlodipine",
            "Metoprolol",
            "Losartan",
            "Hydrochlorothiazide"
        ],
        "answer": "Losartan",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Losartan, an ARB, is contraindicated in bilateral renal artery stenosis as it reduces glomerular filtration pressure, risking acute renal failure."
    },
    {
        "id": 242,
        "question": "Which condition is treated with fludrocortisone to manage chronic hypotension?",
        "options": [
            "Hypertensive crisis",
            "Orthostatic hypotension",
            "Pulmonary hypertension",
            "Heart failure"
        ],
        "answer": "Orthostatic hypotension",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Fludrocortisone increases blood volume by promoting sodium retention, treating chronic orthostatic hypotension in conditions like autonomic neuropathy."
    },
    {
        "id": 243,
        "question": "Which antihypertensive is associated with a first-dose hypotension effect?",
        "options": [
            "Prazosin",
            "Metoprolol",
            "Amlodipine",
            "Spironolactone"
        ],
        "answer": "Prazosin",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Prazosin, an alpha-1 blocker, can cause first-dose hypotension due to rapid vasodilation, often mitigated by starting with a low dose at bedtime."
    },
    {
        "id": 244,
        "question": "What is a common side effect of clonidine in hypertension treatment?",
        "options": [
            "Dry mouth",
            "Hyperkalemia",
            "Tachycardia",
            "Rash"
        ],
        "answer": "Dry mouth",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Clonidine, a central alpha-2 agonist, reduces sympathetic outflow, commonly causing dry mouth due to decreased salivary secretion."
    },
    {
        "id": 245,
        "question": "Which antihypertensive is used in patients with hypertension and asthma?",
        "options": [
            "Propranolol",
            "Amlodipine",
            "Metoprolol",
            "Hydralazine"
        ],
        "answer": "Amlodipine",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Amlodipine, a calcium channel blocker, is safe in hypertensive patients with asthma as it does not cause bronchoconstriction, unlike non-selective beta-blockers."
    },
    {
        "id": 246,
        "question": "Which drug interaction increases the risk of hypotension in patients on lisinopril?",
        "options": [
            "Lisinopril and potassium supplements",
            "Lisinopril and nitroglycerin",
            "Lisinopril and aspirin",
            "Lisinopril and metformin"
        ],
        "answer": "Lisinopril and nitroglycerin",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Lisinopril, an ACE inhibitor, and nitroglycerin, a vasodilator, both lower blood pressure, increasing the risk of hypotension when combined."
    },
    {
        "id": 247,
        "question": "Which vasopressor is used to treat hypotension in neurogenic shock?",
        "options": [
            "Norepinephrine",
            "Amlodipine",
            "Clonidine",
            "Furosemide"
        ],
        "answer": "Norepinephrine",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Norepinephrine, an alpha-1 and beta-1 agonist, treats hypotension in neurogenic shock by increasing vascular tone and cardiac output."
    },
    {
        "id": 248,
        "question": "Which antihypertensive is preferred in elderly patients with isolated systolic hypertension?",
        "options": [
            "Hydrochlorothiazide",
            "Propranolol",
            "Clonidine",
            "Enalapril"
        ],
        "answer": "Hydrochlorothiazide",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Hydrochlorothiazide is preferred in elderly patients with isolated systolic hypertension due to its efficacy in reducing vascular stiffness and blood pressure."
    },
    {
        "id": 249,
        "question": "What is the primary mechanism of spironolactone in treating hypertension?",
        "options": [
            "Aldosterone antagonism",
            "Beta-blockade",
            "Vasodilation",
            "Calcium channel blockade"
        ],
        "answer": "Aldosterone antagonism",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Spironolactone antagonizes aldosterone receptors, promoting sodium excretion and reducing blood volume to lower blood pressure."
    },
    {
        "id": 250,
        "question": "Which drug is used to treat acute hypotension in patients with adrenal insufficiency?",
        "options": [
            "Hydrocortisone",
            "Nifedipine",
            "Losartan",
            "Clonidine"
        ],
        "answer": "Hydrocortisone",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Hydrocortisone, a corticosteroid, treats hypotension in adrenal insufficiency by replacing deficient cortisol, improving vascular tone and blood pressure."
    },
    {
        "id": 251,
        "question": "Which antihypertensive is contraindicated in patients with gout?",
        "options": [
            "Losartan",
            "Hydrochlorothiazide",
            "Amlodipine",
            "Metoprolol"
        ],
        "answer": "Hydrochlorothiazide",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Hydrochlorothiazide, a thiazide diuretic, increases uric acid levels, exacerbating gout, and is contraindicated in patients with this condition."
    },
    {
        "id": 252,
        "question": "Which condition is treated with dopamine to manage acute hypotension?",
        "options": [
            "Hypertensive crisis",
            "Cardiogenic shock",
            "Pulmonary hypertension",
            "Chronic kidney disease"
        ],
        "answer": "Cardiogenic shock",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Dopamine is used in cardiogenic shock to manage acute hypotension by enhancing cardiac output and vasoconstriction."
    },
    {
        "id": 253,
        "question": "Which antihypertensive is associated with peripheral edema as a side effect?",
        "options": [
            "Amlodipine",
            "Metoprolol",
            "Enalapril",
            "Spironolactone"
        ],
        "answer": "Amlodipine",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Amlodipine, a calcium channel blocker, causes peripheral edema due to vasodilation and fluid redistribution, a common side effect in hypertension treatment."
    },
    {
        "id": 254,
        "question": "Which antihypertensive is used in patients with hypertension and heart failure?",
        "options": [
            "Propranolol",
            "Carvedilol",
            "Hydralazine",
            "Clonidine"
        ],
        "answer": "Carvedilol",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Carvedilol, a non-selective beta-blocker with alpha-1 blockade, is used in hypertension with heart failure due to its vasodilatory and mortality-reducing effects."
    },
    {
        "id": 255,
        "question": "What is a common side effect of losartan in hypertension treatment?",
        "options": [
            "Dry cough",
            "Hyperkalemia",
            "Tachycardia",
            "Constipation"
        ],
        "answer": "Hyperkalemia",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Losartan, an ARB, can cause hyperkalemia by reducing aldosterone secretion, a common side effect in hypertension treatment."
    },
    {
        "id": 256,
        "question": "Which antihypertensive is used in patients with hypertension and migraine prophylaxis?",
        "options": [
            "Propranolol",
            "Amlodipine",
            "Losartan",
            "Furosemide"
        ],
        "answer": "Propranolol",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Propranolol, a non-selective beta-blocker, is used for hypertension and migraine prophylaxis due to its ability to reduce vascular reactivity."
    },
    {
        "id": 257,
        "question": "Which drug interaction increases the risk of renal impairment in hypertensive patients on enalapril?",
        "options": [
            "Enalapril and ibuprofen",
            "Enalapril and metoprolol",
            "Enalapril and amlodipine",
            "Enalapril and spironolactone"
        ],
        "answer": "Enalapril and ibuprofen",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Ibuprofen, an NSAID, reduces renal prostaglandin synthesis, combined with enalapril’s inhibition of angiotensin II, increasing the risk of renal impairment."
    },
    {
        "id": 258,
        "question": "Which vasopressor is used to treat hypotension in distributive shock?",
        "options": [
            "Vasopressin",
            "Nifedipine",
            "Clonidine",
            "Hydrochlorothiazide"
        ],
        "answer": "Vasopressin",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Vasopressin, a V1 receptor agonist, increases vascular tone to treat hypotension in distributive shock, such as in sepsis."
    },
    {
        "id": 259,
        "question": "What is the primary mechanism of metoprolol in treating hypertension?",
        "options": [
            "Beta-1 receptor blockade",
            "Alpha-1 receptor blockade",
            "Calcium channel blockade",
            "Diuresis"
        ],
        "answer": "Beta-1 receptor blockade",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Metoprolol, a beta-1 selective blocker, reduces heart rate and cardiac output, lowering blood pressure in hypertension."
    },
    {
        "id": 260,
        "question": "Which antihypertensive is used in patients with hypertension and pregnancy?",
        "options": [
            "Labetalol",
            "Lisinopril",
            "Losartan",
            "Spironolactone"
        ],
        "answer": "Labetalol",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Labetalol, a combined alpha-1 and beta-blocker, is safe and effective for treating hypertension in pregnancy, avoiding teratogenic risks."
    },
    {
        "id": 261,
        "question": "Which antihypertensive is contraindicated in patients with hyperkalemia?",
        "options": [
            "Amlodipine",
            "Spironolactone",
            "Metoprolol",
            "Hydrochlorothiazide"
        ],
        "answer": "Spironolactone",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Spironolactone, a potassium-sparing diuretic, is contraindicated in hyperkalemia as it further increases potassium levels, risking arrhythmias."
    },
    {
        "id": 262,
        "question": "Which condition is treated with normal saline to manage acute hypotension?",
        "options": [
            "Hypertensive emergency",
            "Hypovolemic shock",
            "Chronic heart failure",
            "Pulmonary hypertension"
        ],
        "answer": "Hypovolemic shock",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Normal saline is used to restore blood volume in hypovolemic shock, correcting acute hypotension due to fluid loss."
    },
    {
        "id": 263,
        "question": "Which antihypertensive is associated with rebound hypertension upon abrupt withdrawal?",
        "options": [
            "Clonidine",
            "Amlodipine",
            "Losartan",
            "Furosemide"
        ],
        "answer": "Clonidine",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Clonidine, a central alpha-2 agonist, can cause rebound hypertension upon abrupt withdrawal due to increased sympathetic outflow."
    },
    {
        "id": 264,
        "question": "What is a common side effect of furosemide in hypertension treatment?",
        "options": [
            "Hypokalemia",
            "Hyperkalemia",
            "Dry cough",
            "Gynecomastia"
        ],
        "answer": "Hypokalemia",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Furosemide, a loop diuretic, increases potassium excretion, causing hypokalemia as a common side effect in hypertension treatment."
    },
    {
        "id": 265,
        "question": "Which antihypertensive is used in patients with hypertension and left ventricular hypertrophy?",
        "options": [
            "Losartan",
            "Propranolol",
            "Clonidine",
            "Hydralazine"
        ],
        "answer": "Losartan",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Losartan, an ARB, reduces left ventricular hypertrophy in hypertensive patients by blocking angiotensin II-mediated cardiac remodeling."
    },
    {
        "id": 266,
        "question": "Which drug interaction increases the risk of hypotension in patients on hydralazine?",
        "options": [
            "Hydralazine and metoprolol",
            "Hydralazine and nitroglycerin",
            "Hydralazine and aspirin",
            "Hydralazine and spironolactone"
        ],
        "answer": "Hydralazine and nitroglycerin",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Hydralazine and nitroglycerin, both vasodilators, increase the risk of hypotension when combined due to additive blood pressure-lowering effects."
    },
    {
        "id": 267,
        "question": "Which vasopressor is used to treat hypotension in patients with spinal cord injury?",
        "options": [
            "Phenylephrine",
            "Amlodipine",
            "Lisinopril",
            "Furosemide"
        ],
        "answer": "Phenylephrine",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Phenylephrine, an alpha-1 agonist, treats hypotension in spinal cord injury by increasing vascular tone to counteract neurogenic vasodilation."
    },
    {
        "id": 268,
        "question": "Which antihypertensive is preferred in patients with hypertension and osteoporosis?",
        "options": [
            "Hydrochlorothiazide",
            "Propranolol",
            "Clonidine",
            "Enalapril"
        ],
        "answer": "Hydrochlorothiazide",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Hydrochlorothiazide reduces urinary calcium excretion, benefiting bone health in hypertensive patients with osteoporosis."
    },
    {
        "id": 269,
        "question": "What is the primary mechanism of labetalol in treating hypertension?",
        "options": [
            "Alpha-1 and beta-receptor blockade",
            "Calcium channel blockade",
            "Angiotensin II receptor blockade",
            "Diuresis"
        ],
        "answer": "Alpha-1 and beta-receptor blockade",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Labetalol, a combined alpha-1 and beta-blocker, reduces blood pressure by causing vasodilation and decreasing cardiac output."
    },
    {
        "id": 270,
        "question": "Which antihypertensive is used in patients with resistant hypertension?",
        "options": [
            "Spironolactone",
            "Amlodipine",
            "Metoprolol",
            "Losartan"
        ],
        "answer": "Spironolactone",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Spironolactone is effective in resistant hypertension by antagonizing aldosterone, reducing fluid retention and vascular resistance."
    },
    {
        "id": 221,
        "question": "Which diuretic is commonly used to treat hypertension in patients with heart failure?",
        "options": [
            "Furosemide",
            "Hydrochlorothiazide",
            "Spironolactone",
            "Mannitol"
        ],
        "answer": "Spironolactone",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Spironolactone, a potassium-sparing diuretic, is used in hypertension with heart failure due to its aldosterone antagonism, reducing fluid overload and improving cardiac outcomes."
    },
    {
        "id": 222,
        "question": "What is the primary mechanism of amlodipine in treating hypertension?",
        "options": [
            "Beta-receptor blockade",
            "Calcium channel blockade",
            "Angiotensin II receptor blockade",
            "Diuresis"
        ],
        "answer": "Calcium channel blockade",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Amlodipine, a dihydropyridine calcium channel blocker, inhibits vascular smooth muscle calcium influx, causing vasodilation and reducing blood pressure."
    },
    {
        "id": 223,
        "question": "Which drug is used to treat acute hypotension in hypovolemic shock?",
        "options": [
            "Phenylephrine",
            "Lisinopril",
            "Normal saline",
            "Clonidine"
        ],
        "answer": "Normal saline",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Normal saline, a crystalloid fluid, is used to restore blood volume in hypovolemic shock, correcting acute hypotension by increasing preload."
    },
    {
        "id": 224,
        "question": "Which beta-blocker is preferred for hypertension in patients with a history of myocardial infarction?",
        "options": [
            "Propranolol",
            "Metoprolol",
            "Sotalol",
            "Labetalol"
        ],
        "answer": "Metoprolol",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Metoprolol, a cardioselective beta-1 blocker, is preferred in hypertensive patients with prior myocardial infarction due to its mortality benefit and reduction in cardiac workload."
    },
    {
        "id": 225,
        "question": "What is a common side effect of enalapril in hypertension treatment?",
        "options": [
            "Dry cough",
            "Tachycardia",
            "Hypokalemia",
            "Constipation"
        ],
        "answer": "Dry cough",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Enalapril, an ACE inhibitor, can cause a dry cough due to increased bradykinin levels, a common side effect in hypertension treatment."
    },
    {
        "id": 226,
        "question": "Which antihypertensive is used in patients with hypertension and chronic kidney disease?",
        "options": [
            "Nifedipine",
            "Losartan",
            "Clonidine",
            "Hydralazine"
        ],
        "answer": "Losartan",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Losartan, an ARB, is used in hypertension with chronic kidney disease to reduce proteinuria and protect renal function by blocking angiotensin II effects."
    },
    {
        "id": 227,
        "question": "Which drug interaction increases the risk of hypotension in patients on nifedipine?",
        "options": [
            "Nifedipine and grapefruit juice",
            "Nifedipine and aspirin",
            "Nifedipine and metoprolol",
            "Nifedipine and spironolactone"
        ],
        "answer": "Nifedipine and grapefruit juice",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Grapefruit juice inhibits CYP3A4, increasing nifedipine levels, a calcium channel blocker, leading to enhanced vasodilation and a higher risk of hypotension."
    },
    {
        "id": 228,
        "question": "Which vasopressor is used to treat hypotension in cardiogenic shock?",
        "options": [
            "Dopamine",
            "Amlodipine",
            "Prazosin",
            "Furosemide"
        ],
        "answer": "Dopamine",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Dopamine, a vasopressor, increases blood pressure in cardiogenic shock by stimulating beta-1 receptors to enhance cardiac output and alpha-1 receptors for vasoconstriction."
    },
    {
        "id": 229,
        "question": "What is the primary mechanism of furosemide in managing hypertension?",
        "options": [
            "Vasodilation",
            "Sodium and water excretion",
            "Angiotensin II inhibition",
            "Beta-receptor blockade"
        ],
        "answer": "Sodium and water excretion",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Furosemide, a loop diuretic, promotes sodium and water excretion in the kidneys, reducing blood volume and blood pressure in hypertension."
    },
    {
        "id": 230,
        "question": "Which antihypertensive is associated with reflex tachycardia as a side effect?",
        "options": [
            "Metoprolol",
            "Hydralazine",
            "Spironolactone",
            "Lisinopril"
        ],
        "answer": "Hydralazine",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Hydralazine, a direct vasodilator, causes reflex tachycardia due to baroreceptor-mediated sympathetic activation, a common side effect in hypertension treatment."
    },
    {
        "id": 231,
        "question": "Which drug is used to treat hypertensive emergency with aortic dissection?",
        "options": [
            "Esmolol",
            "Clonidine",
            "Losartan",
            "Hydrochlorothiazide"
        ],
        "answer": "Esmolol",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Esmolol, a short-acting beta-1 blocker, is used in hypertensive emergency with aortic dissection to rapidly reduce heart rate and shear stress on the aorta."
    },
    {
        "id": 232,
        "question": "Which condition is a common cause of hypotension treated with phenylephrine?",
        "options": [
            "Chronic hypertension",
            "Spinal anesthesia",
            "Heart failure",
            "Pulmonary edema"
        ],
        "answer": "Spinal anesthesia",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Phenylephrine, an alpha-1 agonist, treats hypotension caused by spinal anesthesia by increasing vascular tone to counteract vasodilation."
    },
    {
        "id": 233,
        "question": "Which antihypertensive is preferred in African American patients with hypertension?",
        "options": [
            "Enalapril",
            "Hydrochlorothiazide",
            "Propranolol",
            "Clonidine"
        ],
        "answer": "Hydrochlorothiazide",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Hydrochlorothiazide is preferred in African American patients with hypertension due to their higher sensitivity to salt and volume-dependent blood pressure regulation."
    },
    {
        "id": 234,
        "question": "What is a common side effect of spironolactone in hypertension treatment?",
        "options": [
            "Hypokalemia",
            "Gynecomastia",
            "Tachycardia",
            "Dry cough"
        ],
        "answer": "Gynecomastia",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Spironolactone, an aldosterone antagonist, can cause gynecomastia due to its anti-androgenic effects, a common side effect in hypertension treatment."
    },
    {
        "id": 235,
        "question": "Which drug is used to treat orthostatic hypotension in patients with autonomic dysfunction?",
        "options": [
            "Midodrine",
            "Amlodipine",
            "Lisinopril",
            "Furosemide"
        ],
        "answer": "Midodrine",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Midodrine, an alpha-1 agonist, increases vascular tone to treat orthostatic hypotension in autonomic dysfunction, improving standing blood pressure."
    },
    {
        "id": 236,
        "question": "Which antihypertensive drug class is associated with angioedema as a rare side effect?",
        "options": [
            "Calcium channel blockers",
            "Beta-blockers",
            "ACE inhibitors",
            "Thiazide diuretics"
        ],
        "answer": "ACE inhibitors",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "ACE inhibitors, such as enalapril, can cause angioedema due to increased bradykinin levels, a rare but serious side effect in hypertension treatment."
    },
    {
        "id": 237,
        "question": "Which drug interaction increases the risk of bradycardia in hypertensive patients on metoprolol?",
        "options": [
            "Metoprolol and amlodipine",
            "Metoprolol and verapamil",
            "Metoprolol and losartan",
            "Metoprolol and hydrochlorothiazide"
        ],
        "answer": "Metoprolol and verapamil",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Metoprolol, a beta-blocker, and verapamil, a calcium channel blocker, both slow heart rate, increasing the risk of bradycardia when combined."
    },
    {
        "id": 238,
        "question": "Which antihypertensive is used in patients with hypertension and diabetes mellitus?",
        "options": [
            "Propranolol",
            "Lisinopril",
            "Hydralazine",
            "Clonidine"
        ],
        "answer": "Lisinopril",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Lisinopril, an ACE inhibitor, is preferred in hypertensive patients with diabetes due to its renoprotective effects and reduction in cardiovascular risk."
    },
    {
        "id": 239,
        "question": "What is the primary mechanism of prazosin in treating hypertension?",
        "options": [
            "Alpha-1 receptor blockade",
            "Beta-receptor blockade",
            "Calcium channel blockade",
            "Diuresis"
        ],
        "answer": "Alpha-1 receptor blockade",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Prazosin, an alpha-1 blocker, causes vasodilation by blocking alpha-1 receptors on vascular smooth muscle, reducing blood pressure."
    },
    {
        "id": 240,
        "question": "Which drug is used to treat hypotension in anaphylactic shock?",
        "options": [
            "Epinephrine",
            "Nifedipine",
            "Enalapril",
            "Spironolactone"
        ],
        "answer": "Epinephrine",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Epinephrine, an alpha-1 and beta-agonist, reverses hypotension in anaphylactic shock by causing vasoconstriction and increasing cardiac output."
    },
    {
        "id": 241,
        "question": "Which antihypertensive is contraindicated in patients with bilateral renal artery stenosis?",
        "options": [
            "Amlodipine",
            "Metoprolol",
            "Losartan",
            "Hydrochlorothiazide"
        ],
        "answer": "Losartan",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Losartan, an ARB, is contraindicated in bilateral renal artery stenosis as it reduces glomerular filtration pressure, risking acute renal failure."
    },
    {
        "id": 242,
        "question": "Which condition is treated with fludrocortisone to manage chronic hypotension?",
        "options": [
            "Hypertensive crisis",
            "Orthostatic hypotension",
            "Pulmonary hypertension",
            "Heart failure"
        ],
        "answer": "Orthostatic hypotension",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Fludrocortisone increases blood volume by promoting sodium retention, treating chronic orthostatic hypotension in conditions like autonomic neuropathy."
    },
    {
        "id": 243,
        "question": "Which antihypertensive is associated with a first-dose hypotension effect?",
        "options": [
            "Prazosin",
            "Metoprolol",
            "Amlodipine",
            "Spironolactone"
        ],
        "answer": "Prazosin",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Prazosin, an alpha-1 blocker, can cause first-dose hypotension due to rapid vasodilation, often mitigated by starting with a low dose at bedtime."
    },
    {
        "id": 244,
        "question": "What is a common side effect of clonidine in hypertension treatment?",
        "options": [
            "Dry mouth",
            "Hyperkalemia",
            "Tachycardia",
            "Rash"
        ],
        "answer": "Dry mouth",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Clonidine, a central alpha-2 agonist, reduces sympathetic outflow, commonly causing dry mouth due to decreased salivary secretion."
    },
    {
        "id": 245,
        "question": "Which antihypertensive is used in patients with hypertension and asthma?",
        "options": [
            "Propranolol",
            "Amlodipine",
            "Metoprolol",
            "Hydralazine"
        ],
        "answer": "Amlodipine",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Amlodipine, a calcium channel blocker, is safe in hypertensive patients with asthma as it does not cause bronchoconstriction, unlike non-selective beta-blockers."
    },
    {
        "id": 246,
        "question": "Which drug interaction increases the risk of hypotension in patients on lisinopril?",
        "options": [
            "Lisinopril and potassium supplements",
            "Lisinopril and nitroglycerin",
            "Lisinopril and aspirin",
            "Lisinopril and metformin"
        ],
        "answer": "Lisinopril and nitroglycerin",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Lisinopril, an ACE inhibitor, and nitroglycerin, a vasodilator, both lower blood pressure, increasing the risk of hypotension when combined."
    },
    {
        "id": 247,
        "question": "Which vasopressor is used to treat hypotension in neurogenic shock?",
        "options": [
            "Norepinephrine",
            "Amlodipine",
            "Clonidine",
            "Furosemide"
        ],
        "answer": "Norepinephrine",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Norepinephrine, an alpha-1 and beta-1 agonist, treats hypotension in neurogenic shock by increasing vascular tone and cardiac output."
    },
    {
        "id": 248,
        "question": "Which antihypertensive is preferred in elderly patients with isolated systolic hypertension?",
        "options": [
            "Hydrochlorothiazide",
            "Propranolol",
            "Clonidine",
            "Enalapril"
        ],
        "answer": "Hydrochlorothiazide",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Hydrochlorothiazide is preferred in elderly patients with isolated systolic hypertension due to its efficacy in reducing vascular stiffness and blood pressure."
    },
    {
        "id": 249,
        "question": "What is the primary mechanism of spironolactone in treating hypertension?",
        "options": [
            "Aldosterone antagonism",
            "Beta-blockade",
            "Vasodilation",
            "Calcium channel blockade"
        ],
        "answer": "Aldosterone antagonism",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Spironolactone antagonizes aldosterone receptors, promoting sodium excretion and reducing blood volume to lower blood pressure."
    },
    {
        "id": 250,
        "question": "Which drug is used to treat acute hypotension in patients with adrenal insufficiency?",
        "options": [
            "Hydrocortisone",
            "Nifedipine",
            "Losartan",
            "Clonidine"
        ],
        "answer": "Hydrocortisone",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Hydrocortisone, a corticosteroid, treats hypotension in adrenal insufficiency by replacing deficient cortisol, improving vascular tone and blood pressure."
    },
    {
        "id": 251,
        "question": "Which antihypertensive is contraindicated in patients with gout?",
        "options": [
            "Losartan",
            "Hydrochlorothiazide",
            "Amlodipine",
            "Metoprolol"
        ],
        "answer": "Hydrochlorothiazide",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Hydrochlorothiazide, a thiazide diuretic, increases uric acid levels, exacerbating gout, and is contraindicated in patients with this condition."
    },
    {
        "id": 252,
        "question": "Which condition is treated with dopamine to manage acute hypotension?",
        "options": [
            "Hypertensive crisis",
            "Cardiogenic shock",
            "Pulmonary hypertension",
            "Chronic kidney disease"
        ],
        "answer": "Cardiogenic shock",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Dopamine is used in cardiogenic shock to manage acute hypotension by enhancing cardiac output and vasoconstriction."
    },
    {
        "id": 253,
        "question": "Which antihypertensive is associated with peripheral edema as a side effect?",
        "options": [
            "Amlodipine",
            "Metoprolol",
            "Enalapril",
            "Spironolactone"
        ],
        "answer": "Amlodipine",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Amlodipine, a calcium channel blocker, causes peripheral edema due to vasodilation and fluid redistribution, a common side effect in hypertension treatment."
    },
    {
        "id": 254,
        "question": "Which antihypertensive is used in patients with hypertension and heart failure?",
        "options": [
            "Propranolol",
            "Carvedilol",
            "Hydralazine",
            "Clonidine"
        ],
        "answer": "Carvedilol",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Carvedilol, a non-selective beta-blocker with alpha-1 blockade, is used in hypertension with heart failure due to its vasodilatory and mortality-reducing effects."
    },
    {
        "id": 255,
        "question": "What is a common side effect of losartan in hypertension treatment?",
        "options": [
            "Dry cough",
            "Hyperkalemia",
            "Tachycardia",
            "Constipation"
        ],
        "answer": "Hyperkalemia",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Losartan, an ARB, can cause hyperkalemia by reducing aldosterone secretion, a common side effect in hypertension treatment."
    },
    {
        "id": 256,
        "question": "Which antihypertensive is used in patients with hypertension and migraine prophylaxis?",
        "options": [
            "Propranolol",
            "Amlodipine",
            "Losartan",
            "Furosemide"
        ],
        "answer": "Propranolol",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Propranolol, a non-selective beta-blocker, is used for hypertension and migraine prophylaxis due to its ability to reduce vascular reactivity."
    },
    {
        "id": 257,
        "question": "Which drug interaction increases the risk of renal impairment in hypertensive patients on enalapril?",
        "options": [
            "Enalapril and ibuprofen",
            "Enalapril and metoprolol",
            "Enalapril and amlodipine",
            "Enalapril and spironolactone"
        ],
        "answer": "Enalapril and ibuprofen",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Ibuprofen, an NSAID, reduces renal prostaglandin synthesis, combined with enalapril’s inhibition of angiotensin II, increasing the risk of renal impairment."
    },
    {
        "id": 258,
        "question": "Which vasopressor is used to treat hypotension in distributive shock?",
        "options": [
            "Vasopressin",
            "Nifedipine",
            "Clonidine",
            "Hydrochlorothiazide"
        ],
        "answer": "Vasopressin",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Vasopressin, a V1 receptor agonist, increases vascular tone to treat hypotension in distributive shock, such as in sepsis."
    },
    {
        "id": 259,
        "question": "What is the primary mechanism of metoprolol in treating hypertension?",
        "options": [
            "Beta-1 receptor blockade",
            "Alpha-1 receptor blockade",
            "Calcium channel blockade",
            "Diuresis"
        ],
        "answer": "Beta-1 receptor blockade",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Metoprolol, a beta-1 selective blocker, reduces heart rate and cardiac output, lowering blood pressure in hypertension."
    },
    {
        "id": 260,
        "question": "Which antihypertensive is used in patients with hypertension and pregnancy?",
        "options": [
            "Labetalol",
            "Lisinopril",
            "Losartan",
            "Spironolactone"
        ],
        "answer": "Labetalol",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Labetalol, a combined alpha-1 and beta-blocker, is safe and effective for treating hypertension in pregnancy, avoiding teratogenic risks."
    },
    {
        "id": 261,
        "question": "Which antihypertensive is contraindicated in patients with hyperkalemia?",
        "options": [
            "Amlodipine",
            "Spironolactone",
            "Metoprolol",
            "Hydrochlorothiazide"
        ],
        "answer": "Spironolactone",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Spironolactone, a potassium-sparing diuretic, is contraindicated in hyperkalemia as it further increases potassium levels, risking arrhythmias."
    },
    {
        "id": 262,
        "question": "Which condition is treated with normal saline to manage acute hypotension?",
        "options": [
            "Hypertensive emergency",
            "Hypovolemic shock",
            "Chronic heart failure",
            "Pulmonary hypertension"
        ],
        "answer": "Hypovolemic shock",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Normal saline is used to restore blood volume in hypovolemic shock, correcting acute hypotension due to fluid loss."
    },
    {
        "id": 263,
        "question": "Which antihypertensive is associated with rebound hypertension upon abrupt withdrawal?",
        "options": [
            "Clonidine",
            "Amlodipine",
            "Losartan",
            "Furosemide"
        ],
        "answer": "Clonidine",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Clonidine, a central alpha-2 agonist, can cause rebound hypertension upon abrupt withdrawal due to increased sympathetic outflow."
    },
    {
        "id": 264,
        "question": "What is a common side effect of furosemide in hypertension treatment?",
        "options": [
            "Hypokalemia",
            "Hyperkalemia",
            "Dry cough",
            "Gynecomastia"
        ],
        "answer": "Hypokalemia",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Furosemide, a loop diuretic, increases potassium excretion, causing hypokalemia as a common side effect in hypertension treatment."
    },
    {
        "id": 265,
        "question": "Which antihypertensive is used in patients with hypertension and left ventricular hypertrophy?",
        "options": [
            "Losartan",
            "Propranolol",
            "Clonidine",
            "Hydralazine"
        ],
        "answer": "Losartan",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Losartan, an ARB, reduces left ventricular hypertrophy in hypertensive patients by blocking angiotensin II-mediated cardiac remodeling."
    },
    {
        "id": 266,
        "question": "Which drug interaction increases the risk of hypotension in patients on hydralazine?",
        "options": [
            "Hydralazine and metoprolol",
            "Hydralazine and nitroglycerin",
            "Hydralazine and aspirin",
            "Hydralazine and spironolactone"
        ],
        "answer": "Hydralazine and nitroglycerin",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Hydralazine and nitroglycerin, both vasodilators, increase the risk of hypotension when combined due to additive blood pressure-lowering effects."
    },
    {
        "id": 267,
        "question": "Which vasopressor is used to treat hypotension in patients with spinal cord injury?",
        "options": [
            "Phenylephrine",
            "Amlodipine",
            "Lisinopril",
            "Furosemide"
        ],
        "answer": "Phenylephrine",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Phenylephrine, an alpha-1 agonist, treats hypotension in spinal cord injury by increasing vascular tone to counteract neurogenic vasodilation."
    },
    {
        "id": 268,
        "question": "Which antihypertensive is preferred in patients with hypertension and osteoporosis?",
        "options": [
            "Hydrochlorothiazide",
            "Propranolol",
            "Clonidine",
            "Enalapril"
        ],
        "answer": "Hydrochlorothiazide",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Hydrochlorothiazide reduces urinary calcium excretion, benefiting bone health in hypertensive patients with osteoporosis."
    },
    {
        "id": 269,
        "question": "What is the primary mechanism of labetalol in treating hypertension?",
        "options": [
            "Alpha-1 and beta-receptor blockade",
            "Calcium channel blockade",
            "Angiotensin II receptor blockade",
            "Diuresis"
        ],
        "answer": "Alpha-1 and beta-receptor blockade",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Labetalol, a combined alpha-1 and beta-blocker, reduces blood pressure by causing vasodilation and decreasing cardiac output."
    },
    {
        "id": 270,
        "question": "Which antihypertensive is used in patients with resistant hypertension?",
        "options": [
            "Spironolactone",
            "Amlodipine",
            "Metoprolol",
            "Losartan"
        ],
        "answer": "Spironolactone",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Spironolactone is effective in resistant hypertension by antagonizing aldosterone, reducing fluid retention and vascular resistance."
    },
    {
        "id": 271,
        "question": "Which antihypertensive drug class is recommended for initial therapy in patients with diabetes and hypertension?",
        "options": [
            "Beta-blockers",
            "ACE inhibitors",
            "Alpha-1 blockers",
            "Loop diuretics"
        ],
        "answer": "ACE inhibitors",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "ACE inhibitors, such as ramipril, are recommended for initial therapy in diabetic hypertensive patients due to their renoprotective effects and cardiovascular risk reduction."
    },
    {
        "id": 272,
        "question": "What is the primary mechanism of action of chlorthalidone in treating hypertension?",
        "options": [
            "Vasodilation",
            "Sodium and chloride excretion",
            "Angiotensin II receptor blockade",
            "Beta-1 receptor blockade"
        ],
        "answer": "Sodium and chloride excretion",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Chlorthalidone, a thiazide-like diuretic, promotes sodium and chloride excretion in the distal tubule, reducing blood volume and blood pressure."
    },
    {
        "id": 273,
        "question": "Which vasopressor is preferred for hypotension in patients with bradycardia?",
        "options": [
            "Epinephrine",
            "Phenylephrine",
            "Norepinephrine",
            "Vasopressin"
        ],
        "answer": "Epinephrine",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Epinephrine, with beta-1 agonism, increases heart rate and contractility, making it suitable for hypotension with bradycardia, unlike phenylephrine, which may worsen bradycardia."
    },
    {
        "id": 274,
        "question": "Which antihypertensive is preferred in patients with hypertension and atrial fibrillation?",
        "options": [
            "Nebivolol",
            "Prazosin",
            "Furosemide",
            "Clonidine"
        ],
        "answer": "Nebivolol",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Nebivolol, a beta-1 selective blocker with nitric oxide-mediated vasodilation, controls heart rate and blood pressure in hypertensive patients with atrial fibrillation."
    },
    {
        "id": 275,
        "question": "What is a common side effect of felodipine in hypertension treatment?",
        "options": [
            "Dry cough",
            "Peripheral edema",
            "Hyperkalemia",
            "Bradycardia"
        ],
        "answer": "Peripheral edema",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Felodipine, a dihydropyridine calcium channel blocker, causes peripheral edema due to vasodilation and fluid redistribution, a common side effect."
    },
    {
        "id": 276,
        "question": "Which antihypertensive is used in patients with hypertension and a history of stroke?",
        "options": [
            "Losartan",
            "Hydralazine",
            "Propranolol",
            "Spironolactone"
        ],
        "answer": "Losartan",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Losartan, an ARB, is preferred in hypertensive patients with a history of stroke due to its protective effects against recurrent cerebrovascular events."
    },
    {
        "id": 277,
        "question": "Which drug interaction increases the risk of hypotension in patients on amlodipine?",
        "options": [
            "Amlodipine and simvastatin",
            "Amlodipine and sildenafil",
            "Amlodipine and metformin",
            "Amlodipine and losartan"
        ],
        "answer": "Amlodipine and sildenafil",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Amlodipine and sildenafil, both vasodilators, increase the risk of hypotension when combined due to additive blood pressure-lowering effects."
    },
    {
        "id": 278,
        "question": "Which fluid is used to treat hypotension in hemorrhagic shock?",
        "options": [
            "5% Dextrose",
            "Lactated Ringer’s",
            "3% Saline",
            "Albumin"
        ],
        "answer": "Lactated Ringer’s",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Lactated Ringer’s, a balanced crystalloid, is used to restore blood volume in hemorrhagic shock, correcting hypotension due to blood loss."
    },
    {
        "id": 279,
        "question": "What is the primary mechanism of valsartan in treating hypertension?",
        "options": [
            "ACE inhibition",
            "Angiotensin II receptor blockade",
            "Calcium channel blockade",
            "Diuresis"
        ],
        "answer": "Angiotensin II receptor blockade",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Valsartan, an ARB, blocks AT1 receptors, reducing vasoconstriction and blood pressure in hypertension."
    },
    {
        "id": 280,
        "question": "Which antihypertensive is associated with a risk of hypokalemia?",
        "options": [
            "Spironolactone",
            "Chlorthalidone",
            "Losartan",
            "Amlodipine"
        ],
        "answer": "Chlorthalidone",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Chlorthalidone, a thiazide-like diuretic, increases potassium excretion, leading to hypokalemia as a potential side effect in hypertension treatment."
    },
    {
        "id": 281,
        "question": "Which drug is used to treat hypertensive emergency with pulmonary edema?",
        "options": [
            "Nitroprusside",
            "Metoprolol",
            "Prazosin",
            "Clonidine"
        ],
        "answer": "Nitroprusside",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Nitroprusside, a potent vasodilator, rapidly reduces blood pressure and preload in hypertensive emergency with pulmonary edema, improving cardiac function."
    },
    {
        "id": 282,
        "question": "Which condition is a common cause of hypotension treated with vasopressin?",
        "options": [
            "Chronic hypertension",
            "Septic shock",
            "Heart failure",
            "Pulmonary edema"
        ],
        "answer": "Septic shock",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Vasopressin is used in septic shock to treat hypotension by increasing vascular tone via V1 receptor agonism, supporting blood pressure."
    },
    {
        "id": 283,
        "question": "Which antihypertensive is preferred in patients with hypertension and chronic obstructive pulmonary disease?",
        "options": [
            "Propranolol",
            "Losartan",
            "Metoprolol",
            "Clonidine"
        ],
        "answer": "Losartan",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Losartan, an ARB, is safe in hypertensive patients with COPD as it does not affect bronchial smooth muscle, unlike beta-blockers."
    },
    {
        "id": 284,
        "question": "What is a common side effect of ramipril in hypertension treatment?",
        "options": [
            "Hyperkalemia",
            "Hypokalemia",
            "Tachycardia",
            "Constipation"
        ],
        "answer": "Hyperkalemia",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Ramipril, an ACE inhibitor, reduces aldosterone secretion, leading to hyperkalemia as a common side effect in hypertension treatment."
    },
    {
        "id": 285,
        "question": "Which drug is used to treat orthostatic hypotension in Parkinson’s disease?",
        "options": [
            "Droxidopa",
            "Nifedipine",
            "Enalapril",
            "Furosemide"
        ],
        "answer": "Droxidopa",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Droxidopa, a norepinephrine precursor, increases blood pressure in orthostatic hypotension associated with Parkinson’s disease by enhancing vasoconstriction."
    },
    {
        "id": 286,
        "question": "Which antihypertensive drug class is associated with a risk of hyperuricemia?",
        "options": [
            "ACE inhibitors",
            "Thiazide diuretics",
            "Beta-blockers",
            "ARBs"
        ],
        "answer": "Thiazide diuretics",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Thiazide diuretics, such as hydrochlorothiazide, increase uric acid reabsorption, leading to hyperuricemia, a risk factor for gout."
    },
    {
        "id": 287,
        "question": "Which drug interaction increases the risk of bradycardia in patients on diltiazem?",
        "options": [
            "Diltiazem and losartan",
            "Diltiazem and metoprolol",
            "Diltiazem and amlodipine",
            "Diltiazem and spironolactone"
        ],
        "answer": "Diltiazem and metoprolol",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Diltiazem, a calcium channel blocker, and metoprolol, a beta-blocker, both reduce heart rate, increasing the risk of bradycardia when combined."
    },
    {
        "id": 288,
        "question": "Which antihypertensive is used in patients with hypertension and anxiety?",
        "options": [
            "Propranolol",
            "Amlodipine",
            "Losartan",
            "Furosemide"
        ],
        "answer": "Propranolol",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Propranolol, a non-selective beta-blocker, treats hypertension and reduces physical symptoms of anxiety, such as tachycardia, by blocking beta receptors."
    },
    {
        "id": 289,
        "question": "What is the primary mechanism of methyldopa in treating hypertension?",
        "options": [
            "Central alpha-2 receptor agonism",
            "Alpha-1 receptor blockade",
            "Calcium channel blockade",
            "Diuresis"
        ],
        "answer": "Central alpha-2 receptor agonism",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Methyldopa, a central alpha-2 agonist, reduces sympathetic outflow from the brain, lowering blood pressure in hypertension."
    },
    {
        "id": 290,
        "question": "Which drug is used to treat hypotension in patients with Addison’s disease?",
        "options": [
            "Fludrocortisone",
            "Nifedipine",
            "Clonidine",
            "Spironolactone"
        ],
        "answer": "Fludrocortisone",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Fludrocortisone, a mineralocorticoid, increases blood volume by promoting sodium retention, treating hypotension in Addison’s disease."
    },
    {
        "id": 291,
        "question": "Which antihypertensive is contraindicated in patients with asthma?",
        "options": [
            "Losartan",
            "Propranolol",
            "Amlodipine",
            "Spironolactone"
        ],
        "answer": "Propranolol",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Propranolol, a non-selective beta-blocker, can cause bronchoconstriction by blocking beta-2 receptors, contraindicated in asthmatic patients."
    },
    {
        "id": 292,
        "question": "Which condition is treated with normal saline to manage acute hypotension?",
        "options": [
            "Hypertensive crisis",
            "Dehydration",
            "Chronic heart failure",
            "Pulmonary hypertension"
        ],
        "answer": "Dehydration",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Normal saline restores blood volume in dehydration, correcting acute hypotension due to reduced intravascular volume."
    },
    {
        "id": 293,
        "question": "Which antihypertensive is associated with a risk of photosensitivity?",
        "options": [
            "Hydrochlorothiazide",
            "Metoprolol",
            "Losartan",
            "Amlodipine"
        ],
        "answer": "Hydrochlorothiazide",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Hydrochlorothiazide, a thiazide diuretic, can cause photosensitivity, increasing the risk of skin reactions with sun exposure."
    },
    {
        "id": 294,
        "question": "What is a common side effect of nifedipine in hypertension treatment?",
        "options": [
            "Dry mouth",
            "Headache",
            "Hyperkalemia",
            "Bradycardia"
        ],
        "answer": "Headache",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Nifedipine, a calcium channel blocker, causes vasodilation, leading to headaches as a common side effect due to cerebral vasodilation."
    },
    {
        "id": 295,
        "question": "Which antihypertensive is used in patients with hypertension and coronary artery disease?",
        "options": [
            "Metoprolol",
            "Prazosin",
            "Clonidine",
            "Hydralazine"
        ],
        "answer": "Metoprolol",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Metoprolol, a beta-1 blocker, reduces myocardial oxygen demand, making it suitable for hypertensive patients with coronary artery disease."
    },
    {
        "id": 296,
        "question": "Which drug interaction increases the risk of renal impairment in patients on losartan?",
        "options": [
            "Losartan and ibuprofen",
            "Losartan and amlodipine",
            "Losartan and metoprolol",
            "Losartan and spironolactone"
        ],
        "answer": "Losartan and ibuprofen",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Ibuprofen, an NSAID, reduces renal prostaglandins, and losartan, an ARB, decreases glomerular filtration pressure, increasing the risk of renal impairment."
    },
    {
        "id": 297,
        "question": "Which vasopressor is used to treat hypotension in patients with anaphylaxis?",
        "options": [
            "Epinephrine",
            "Nifedipine",
            "Clonidine",
            "Furosemide"
        ],
        "answer": "Epinephrine",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Epinephrine treats hypotension in anaphylaxis by increasing vascular tone and cardiac output through alpha-1 and beta-1 agonism."
    },
    {
        "id": 298,
        "question": "Which antihypertensive is preferred in patients with hypertension and renal artery stenosis?",
        "options": [
            "Amlodipine",
            "Lisinopril",
            "Losartan",
            "Spironolactone"
        ],
        "answer": "Amlodipine",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Amlodipine, a calcium channel blocker, is safe in hypertensive patients with renal artery stenosis, unlike ACE inhibitors or ARBs, which risk renal failure."
    },
    {
        "id": 299,
        "question": "What is the primary mechanism of spironolactone in treating resistant hypertension?",
        "options": [
            "Aldosterone antagonism",
            "Beta-blockade",
            "Vasodilation",
            "Calcium channel blockade"
        ],
        "answer": "Aldosterone antagonism",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Spironolactone antagonizes aldosterone, reducing sodium retention and vascular resistance in resistant hypertension."
    },
    {
        "id": 300,
        "question": "Which drug is used to treat acute hypotension in patients with hypovolemic shock?",
        "options": [
            "Albumin",
            "Nifedipine",
            "Clonidine",
            "Spironolactone"
        ],
        "answer": "Albumin",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Albumin, a colloid, expands blood volume in hypovolemic shock, correcting acute hypotension when crystalloids are insufficient."
    },
    {
        "id": 301,
        "question": "Which antihypertensive is contraindicated in patients with severe liver disease?",
        "options": [
            "Amlodipine",
            "Methyldopa",
            "Losartan",
            "Metoprolol"
        ],
        "answer": "Methyldopa",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Methyldopa is metabolized by the liver and can cause hepatotoxicity, making it contraindicated in severe liver disease."
    },
    {
        "id": 302,
        "question": "Which condition is treated with phenylephrine to manage acute hypotension?",
        "options": [
            "Hypertensive emergency",
            "Spinal anesthesia",
            "Chronic heart failure",
            "Pulmonary hypertension"
        ],
        "answer": "Spinal anesthesia",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Phenylephrine treats hypotension in spinal anesthesia by increasing vascular tone via alpha-1 agonism."
    },
    {
        "id": 303,
        "question": "Which antihypertensive is associated with a risk of hyponatremia?",
        "options": [
            "Hydrochlorothiazide",
            "Metoprolol",
            "Losartan",
            "Amlodipine"
        ],
        "answer": "Hydrochlorothiazide",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Hydrochlorothiazide, a thiazide diuretic, can cause hyponatremia by increasing sodium excretion and impairing free water clearance."
    },
    {
        "id": 304,
        "question": "What is a common side effect of carvedilol in hypertension treatment?",
        "options": [
            "Dizziness",
            "Hyperkalemia",
            "Dry cough",
            "Rash"
        ],
        "answer": "Dizziness",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Carvedilol, a beta-blocker with alpha-1 blockade, causes vasodilation, leading to dizziness as a common side effect."
    },
    {
        "id": 305,
        "question": "Which antihypertensive is used in patients with hypertension and benign prostatic hyperplasia?",
        "options": [
            "Doxazosin",
            "Metoprolol",
            "Furosemide",
            "Clonidine"
        ],
        "answer": "Doxazosin",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Doxazosin, an alpha-1 blocker, treats hypertension and relieves urinary symptoms in benign prostatic hyperplasia by relaxing prostate smooth muscle."
    },
    {
        "id": 306,
        "question": "Which drug interaction increases the risk of hypotension in patients on valsartan?",
        "options": [
            "Valsartan and nitroglycerin",
            "Valsartan and aspirin",
            "Valsartan and metformin",
            "Valsartan and amlodipine"
        ],
        "answer": "Valsartan and nitroglycerin",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Valsartan, an ARB, and nitroglycerin, a vasodilator, both lower blood pressure, increasing the risk of hypotension when combined."
    },
    {
        "id": 307,
        "question": "Which vasopressor is used to treat hypotension in cardiogenic shock?",
        "options": [
            "Dopamine",
            "Nifedipine",
            "Clonidine",
            "Furosemide"
        ],
        "answer": "Dopamine",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Dopamine increases blood pressure in cardiogenic shock by enhancing cardiac output and vasoconstriction."
    },
    {
        "id": 308,
        "question": "Which antihypertensive is preferred in patients with hypertension and heart failure?",
        "options": [
            "Hydralazine",
            "Ramipril",
            "Prazosin",
            "Clonidine"
        ],
        "answer": "Ramipril",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Ramipril, an ACE inhibitor, reduces preload and afterload, improving outcomes in hypertensive patients with heart failure."
    },
    {
        "id": 309,
        "question": "What is the primary mechanism of furosemide in treating hypertension?",
        "options": [
            "Sodium and water excretion",
            "Vasodilation",
            "Angiotensin II inhibition",
            "Beta-receptor blockade"
        ],
        "answer": "Sodium and water excretion",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Furosemide, a loop diuretic, promotes sodium and water excretion, reducing blood volume and blood pressure."
    },
    {
        "id": 310,
        "question": "Which antihypertensive is used in patients with hypertension and pregnancy?",
        "options": [
            "Methyldopa",
            "Losartan",
            "Spironolactone",
            "Furosemide"
        ],
        "answer": "Methyldopa",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Methyldopa, a central alpha-2 agonist, is safe and effective for treating hypertension in pregnancy, avoiding teratogenic risks."
    },
    {
        "id": 311,
        "question": "Which antihypertensive is contraindicated in patients with gout?",
        "options": [
            "Amlodipine",
            "Chlorthalidone",
            "Losartan",
            "Metoprolol"
        ],
        "answer": "Chlorthalidone",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Chlorthalidone, a thiazide-like diuretic, increases uric acid levels, exacerbating gout, and is contraindicated in these patients."
    },
    {
        "id": 312,
        "question": "Which condition is treated with hydrocortisone to manage acute hypotension?",
        "options": [
            "Hypertensive crisis",
            "Adrenal insufficiency",
            "Pulmonary hypertension",
            "Chronic kidney disease"
        ],
        "answer": "Adrenal insufficiency",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Hydrocortisone treats hypotension in adrenal insufficiency by replacing deficient cortisol, improving vascular tone."
    },
    {
        "id": 313,
        "question": "Which antihypertensive is associated with a risk of hypomagnesemia?",
        "options": [
            "Hydrochlorothiazide",
            "Metoprolol",
            "Losartan",
            "Amlodipine"
        ],
        "answer": "Hydrochlorothiazide",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Hydrochlorothiazide, a thiazide diuretic, increases magnesium excretion, leading to hypomagnesemia as a potential side effect."
    },
    {
        "id": 314,
        "question": "What is a common side effect of nebivolol in hypertension treatment?",
        "options": [
            "Fatigue",
            "Hyperkalemia",
            "Dry cough",
            "Rash"
        ],
        "answer": "Fatigue",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Nebivolol, a beta-1 blocker, can cause fatigue due to reduced cardiac output and central nervous system effects."
    },
    {
        "id": 315,
        "question": "Which antihypertensive is used in patients with hypertension and left ventricular hypertrophy?",
        "options": [
            "Valsartan",
            "Prazosin",
            "Clonidine",
            "Hydralazine"
        ],
        "answer": "Valsartan",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Valsartan, an ARB, reduces left ventricular hypertrophy by blocking angiotensin II-mediated cardiac remodeling."
    },
    {
        "id": 316,
        "question": "Which drug interaction increases the risk of hypotension in patients on ramipril?",
        "options": [
            "Ramipril and nitroglycerin",
            "Ramipril and aspirin",
            "Ramipril and metformin",
            "Ramipril and amlodipine"
        ],
        "answer": "Ramipril and nitroglycerin",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Ramipril, an ACE inhibitor, and nitroglycerin, a vasodilator, both lower blood pressure, increasing the risk of hypotension."
    },
    {
        "id": 317,
        "question": "Which vasopressor is used to treat hypotension in neurogenic shock?",
        "options": [
            "Norepinephrine",
            "Nifedipine",
            "Clonidine",
            "Furosemide"
        ],
        "answer": "Norepinephrine",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Norepinephrine increases vascular tone and cardiac output in neurogenic shock, correcting hypotension."
    },
    {
        "id": 318,
        "question": "Which antihypertensive is preferred in patients with hypertension and osteoporosis?",
        "options": [
            "Chlorthalidone",
            "Propranolol",
            "Clonidine",
            "Enalapril"
        ],
        "answer": "Chlorthalidone",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Chlorthalidone reduces urinary calcium excretion, benefiting bone health in hypertensive patients with osteoporosis."
    },
    {
        "id": 319,
        "question": "What is the primary mechanism of doxazosin in treating hypertension?",
        "options": [
            "Alpha-1 receptor blockade",
            "Beta-receptor blockade",
            "Calcium channel blockade",
            "Diuresis"
        ],
        "answer": "Alpha-1 receptor blockade",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Doxazosin, an alpha-1 blocker, causes vasodilation by blocking alpha-1 receptors, reducing blood pressure."
    },
    {
        "id": 320,
        "question": "Which antihypertensive is used in patients with resistant hypertension?",
        "options": [
            "Spironolactone",
            "Amlodipine",
            "Metoprolol",
            "Losartan"
        ],
        "answer": "Spironolactone",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Spironolactone is effective in resistant hypertension by antagonizing aldosterone, reducing fluid retention and vascular resistance."
    },
    {
        "id": 321,
        "question": "Which antihypertensive drug class is preferred for patients with hypertension and proteinuria?",
        "options": [
            "Beta-blockers",
            "ACE inhibitors",
            "Loop diuretics",
            "Alpha-2 agonists"
        ],
        "answer": "ACE inhibitors",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "ACE inhibitors, such as enalapril, are preferred in hypertensive patients with proteinuria due to their ability to reduce intraglomerular pressure and proteinuria."
    },
    {
        "id": 322,
        "question": "What is the primary mechanism of indapamide in treating hypertension?",
        "options": [
            "Vasodilation",
            "Sodium and chloride excretion",
            "Angiotensin II receptor blockade",
            "Beta-1 receptor blockade"
        ],
        "answer": "Sodium and chloride excretion",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Indapamide, a thiazide-like diuretic, promotes sodium and chloride excretion in the distal tubule, reducing blood volume and blood pressure."
    },
    {
        "id": 323,
        "question": "Which vasopressor is used to treat hypotension in patients with septic shock and low systemic vascular resistance?",
        "options": [
            "Norepinephrine",
            "Amlodipine",
            "Lisinopril",
            "Furosemide"
        ],
        "answer": "Norepinephrine",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Norepinephrine, an alpha-1 and beta-1 agonist, increases vascular tone and cardiac output, making it the preferred vasopressor for hypotension in septic shock."
    },
    {
        "id": 324,
        "question": "Which antihypertensive is preferred in patients with hypertension and a history of angina?",
        "options": [
            "Atenolol",
            "Prazosin",
            "Clonidine",
            "Hydralazine"
        ],
        "answer": "Atenolol",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Atenolol, a beta-1 selective blocker, reduces myocardial oxygen demand, making it suitable for hypertensive patients with angina."
    },
    {
        "id": 325,
        "question": "What is a common side effect of irbesartan in hypertension treatment?",
        "options": [
            "Dry cough",
            "Hyperkalemia",
            "Bradycardia",
            "Constipation"
        ],
        "answer": "Hyperkalemia",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Irbesartan, an ARB, reduces aldosterone secretion, leading to hyperkalemia as a common side effect in hypertension treatment."
    },
    {
        "id": 326,
        "question": "Which antihypertensive is used in patients with hypertension and chronic kidney disease?",
        "options": [
            "Candesartan",
            "Nifedipine",
            "Propranolol",
            "Clonidine"
        ],
        "answer": "Candesartan",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Candesartan, an ARB, reduces proteinuria and protects renal function in hypertensive patients with chronic kidney disease."
    },
    {
        "id": 327,
        "question": "Which drug interaction increases the risk of hypotension in patients on felodipine?",
        "options": [
            "Felodipine and grapefruit juice",
            "Felodipine and aspirin",
            "Felodipine and losartan",
            "Felodipine and metoprolol"
        ],
        "answer": "Felodipine and grapefruit juice",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Grapefruit juice inhibits CYP3A4, increasing felodipine levels, a calcium channel blocker, leading to enhanced vasodilation and a higher risk of hypotension."
    },
    {
        "id": 328,
        "question": "Which fluid is used to treat hypotension in patients with traumatic hypovolemic shock?",
        "options": [
            "5% Dextrose",
            "Normal saline",
            "3% Saline",
            "Albumin"
        ],
        "answer": "Normal saline",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Normal saline, a crystalloid, restores blood volume in traumatic hypovolemic shock, correcting hypotension due to blood loss."
    },
    {
        "id": 329,
        "question": "What is the primary mechanism of benazepril in treating hypertension?",
        "options": [
            "ACE inhibition",
            "Angiotensin II receptor blockade",
            "Calcium channel blockade",
            "Diuresis"
        ],
        "answer": "ACE inhibition",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Benazepril inhibits ACE, reducing angiotensin II production, which leads to vasodilation and lower blood pressure."
    },
    {
        "id": 330,
        "question": "Which antihypertensive is associated with a risk of hypokalemia?",
        "options": [
            "Spironolactone",
            "Indapamide",
            "Losartan",
            "Amlodipine"
        ],
        "answer": "Indapamide",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Indapamide, a thiazide-like diuretic, increases potassium excretion, leading to hypokalemia as a potential side effect."
    },
    {
        "id": 331,
        "question": "Which drug is used to treat hypertensive emergency with acute renal failure?",
        "options": [
            "Labetalol",
            "Nitroprusside",
            "Prazosin",
            "Clonidine"
        ],
        "answer": "Labetalol",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Labetalol, a combined alpha-1 and beta-blocker, effectively reduces blood pressure in hypertensive emergency with acute renal failure without compromising renal perfusion."
    },
    {
        "id": 332,
        "question": "Which condition is a common cause of hypotension treated with dopamine?",
        "options": [
            "Chronic hypertension",
            "Cardiogenic shock",
            "Pulmonary edema",
            "Hypertensive crisis"
        ],
        "answer": "Cardiogenic shock",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Dopamine increases cardiac output and vasoconstriction, making it suitable for hypotension in cardiogenic shock."
    },
    {
        "id": 333,
        "question": "Which antihypertensive is preferred in patients with hypertension and diabetes?",
        "options": [
            "Telmisartan",
            "Hydralazine",
            "Propranolol",
            "Clonidine"
        ],
        "answer": "Telmisartan",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Telmisartan, an ARB, is preferred in hypertensive diabetic patients due to its renoprotective effects and cardiovascular risk reduction."
    },
    {
        "id": 334,
        "question": "What is a common side effect of diltiazem in hypertension treatment?",
        "options": [
            "Bradycardia",
            "Hyperkalemia",
            "Dry cough",
            "Rash"
        ],
        "answer": "Bradycardia",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Diltiazem, a non-dihydropyridine calcium channel blocker, slows atrioventricular conduction, leading to bradycardia as a common side effect."
    },
    {
        "id": 335,
        "question": "Which drug is used to treat orthostatic hypotension in patients with multiple system atrophy?",
        "options": [
            "Midodrine",
            "Nifedipine",
            "Enalapril",
            "Furosemide"
        ],
        "answer": "Midodrine",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Midodrine, an alpha-1 agonist, increases vascular tone to treat orthostatic hypotension in multiple system atrophy."
    },
    {
        "id": 336,
        "question": "Which antihypertensive drug class is associated with a risk of hyperglycemia?",
        "options": [
            "Thiazide diuretics",
            "ACE inhibitors",
            "Beta-blockers",
            "ARBs"
        ],
        "answer": "Thiazide diuretics",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Thiazide diuretics, such as indapamide, can impair glucose tolerance, leading to hyperglycemia, especially in predisposed patients."
    },
    {
        "id": 337,
        "question": "Which drug interaction increases the risk of hyperkalemia in patients on candesartan?",
        "options": [
            "Candesartan and spironolactone",
            "Candesartan and amlodipine",
            "Candesartan and metoprolol",
            "Candesartan and hydrochlorothiazide"
        ],
        "answer": "Candesartan and spironolactone",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Candesartan, an ARB, and spironolactone, a potassium-sparing diuretic, both increase potassium levels, raising the risk of hyperkalemia."
    },
    {
        "id": 338,
        "question": "Which antihypertensive is used in patients with hypertension and migraine prophylaxis?",
        "options": [
            "Metoprolol",
            "Prazosin",
            "Clonidine",
            "Hydralazine"
        ],
        "answer": "Metoprolol",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Metoprolol, a beta-1 blocker, treats hypertension and prevents migraines by reducing vascular reactivity."
    },
    {
        "id": 339,
        "question": "What is the primary mechanism of terazosin in treating hypertension?",
        "options": [
            "Alpha-1 receptor blockade",
            "Beta-receptor blockade",
            "Calcium channel blockade",
            "Diuresis"
        ],
        "answer": "Alpha-1 receptor blockade",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Terazosin, an alpha-1 blocker, causes vasodilation by blocking alpha-1 receptors, reducing blood pressure."
    },
    {
        "id": 340,
        "question": "Which drug is used to treat hypotension in patients with anaphylactic shock?",
        "options": [
            "Epinephrine",
            "Nifedipine",
            "Clonidine",
            "Spironolactone"
        ],
        "answer": "Epinephrine",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Epinephrine reverses hypotension in anaphylactic shock by increasing vascular tone and cardiac output via alpha-1 and beta-1 agonism."
    },
    {
        "id": 341,
        "question": "Which antihypertensive is contraindicated in patients with bilateral renal artery stenosis?",
        "options": [
            "Amlodipine",
            "Benazepril",
            "Metoprolol",
            "Hydrochlorothiazide"
        ],
        "answer": "Benazepril",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Benazepril, an ACE inhibitor, reduces glomerular filtration pressure, risking acute renal failure in bilateral renal artery stenosis."
    },
    {
        "id": 342,
        "question": "Which condition is treated with fludrocortisone to manage chronic hypotension?",
        "options": [
            "Hypertensive crisis",
            "Orthostatic hypotension",
            "Pulmonary hypertension",
            "Heart failure"
        ],
        "answer": "Orthostatic hypotension",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Fludrocortisone increases blood volume by promoting sodium retention, treating chronic orthostatic hypotension."
    },
    {
        "id": 343,
        "question": "Which antihypertensive is associated with a first-dose hypotension effect?",
        "options": [
            "Terazosin",
            "Metoprolol",
            "Amlodipine",
            "Spironolactone"
        ],
        "answer": "Terazosin",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Terazosin, an alpha-1 blocker, can cause first-dose hypotension due to rapid vasodilation, mitigated by starting with a low dose."
    },
    {
        "id": 344,
        "question": "What is a common side effect of methyldopa in hypertension treatment?",
        "options": [
            "Sedation",
            "Hyperkalemia",
            "Tachycardia",
            "Rash"
        ],
        "answer": "Sedation",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Methyldopa, a central alpha-2 agonist, reduces sympathetic outflow, commonly causing sedation due to central nervous system effects."
    },
    {
        "id": 345,
        "question": "Which antihypertensive is used in patients with hypertension and asthma?",
        "options": [
            "Propranolol",
            "Felodipine",
            "Metoprolol",
            "Hydralazine"
        ],
        "answer": "Felodipine",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Felodipine, a calcium channel blocker, is safe in hypertensive patients with asthma as it does not cause bronchoconstriction."
    },
    {
        "id": 346,
        "question": "Which drug interaction increases the risk of hypotension in patients on enalapril?",
        "options": [
            "Enalapril and potassium supplements",
            "Enalapril and sildenafil",
            "Enalapril and aspirin",
            "Enalapril and metformin"
        ],
        "answer": "Enalapril and sildenafil",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Enalapril, an ACE inhibitor, and sildenafil, a vasodilator, both lower blood pressure, increasing the risk of hypotension."
    },
    {
        "id": 347,
        "question": "Which vasopressor is used to treat hypotension in neurogenic shock?",
        "options": [
            "Phenylephrine",
            "Amlodipine",
            "Lisinopril",
            "Furosemide"
        ],
        "answer": "Phenylephrine",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Phenylephrine, an alpha-1 agonist, increases vascular tone to treat hypotension in neurogenic shock."
    },
    {
        "id": 348,
        "question": "Which antihypertensive is preferred in elderly patients with isolated systolic hypertension?",
        "options": [
            "Indapamide",
            "Propranolol",
            "Clonidine",
            "Enalapril"
        ],
        "answer": "Indapamide",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Indapamide, a thiazide-like diuretic, reduces vascular stiffness and blood pressure in elderly patients with isolated systolic hypertension."
    },
    {
        "id": 349,
        "question": "What is the primary mechanism of amiloride in treating hypertension?",
        "options": [
            "Sodium-potassium exchange inhibition",
            "Beta-blockade",
            "Vasodilation",
            "Calcium channel blockade"
        ],
        "answer": "Sodium-potassium exchange inhibition",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Amiloride, a potassium-sparing diuretic, inhibits sodium-potassium exchange in the distal tubule, reducing blood volume and pressure."
    },
    {
        "id": 350,
        "question": "Which drug is used to treat acute hypotension in patients with adrenal insufficiency?",
        "options": [
            "Hydrocortisone",
            "Nifedipine",
            "Clonidine",
            "Spironolactone"
        ],
        "answer": "Hydrocortisone",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Hydrocortisone replaces deficient cortisol in adrenal insufficiency, improving vascular tone and treating hypotension."
    },
    {
        "id": 351,
        "question": "Which antihypertensive is contraindicated in patients with hyperkalemia?",
        "options": [
            "Amlodipine",
            "Amiloride",
            "Metoprolol",
            "Indapamide"
        ],
        "answer": "Amiloride",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Amiloride, a potassium-sparing diuretic, increases potassium levels, making it contraindicated in hyperkalemia."
    },
    {
        "id": 352,
        "question": "Which condition is treated with lactated Ringer’s to manage acute hypotension?",
        "options": [
            "Hypertensive emergency",
            "Hemorrhagic shock",
            "Chronic heart failure",
            "Pulmonary hypertension"
        ],
        "answer": "Hemorrhagic shock",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Lactated Ringer’s restores blood volume in hemorrhagic shock, correcting acute hypotension."
    },
    {
        "id": 353,
        "question": "Which antihypertensive is associated with a risk of hypomagnesemia?",
        "options": [
            "Indapamide",
            "Metoprolol",
            "Telmisartan",
            "Amlodipine"
        ],
        "answer": "Indapamide",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Indapamide, a thiazide-like diuretic, increases magnesium excretion, leading to hypomagnesemia."
    },
    {
        "id": 354,
        "question": "What is a common side effect of bisoprolol in hypertension treatment?",
        "options": [
            "Fatigue",
            "Hyperkalemia",
            "Dry cough",
            "Rash"
        ],
        "answer": "Fatigue",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Bisoprolol, a beta-1 blocker, reduces cardiac output, leading to fatigue as a common side effect."
    },
    {
        "id": 355,
        "question": "Which antihypertensive is used in patients with hypertension and benign prostatic hyperplasia?",
        "options": [
            "Alfuzosin",
            "Metoprolol",
            "Furosemide",
            "Clonidine"
        ],
        "answer": "Alfuzosin",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Alfuzosin, an alpha-1 blocker, treats hypertension and relieves urinary symptoms in benign prostatic hyperplasia."
    },
    {
        "id": 356,
        "question": "Which drug interaction increases the risk of renal impairment in patients on irbesartan?",
        "options": [
            "Irbesartan and ibuprofen",
            "Irbesartan and amlodipine",
            "Irbesartan and metoprolol",
            "Irbesartan and spironolactone"
        ],
        "answer": "Irbesartan and ibuprofen",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Ibuprofen, an NSAID, and irbesartan, an ARB, together reduce renal perfusion, increasing the risk of renal impairment."
    },
    {
        "id": 357,
        "question": "Which vasopressor is used to treat hypotension in distributive shock?",
        "options": [
            "Vasopressin",
            "Nifedipine",
            "Clonidine",
            "Furosemide"
        ],
        "answer": "Vasopressin",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Vasopressin increases vascular tone in distributive shock, such as sepsis, to treat hypotension."
    },
    {
        "id": 358,
        "question": "Which antihypertensive is preferred in patients with hypertension and heart failure?",
        "options": [
            "Candesartan",
            "Hydralazine",
            "Prazosin",
            "Clonidine"
        ],
        "answer": "Candesartan",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Candesartan, an ARB, reduces preload and afterload, improving outcomes in hypertensive patients with heart failure."
    },
    {
        "id": 359,
        "question": "What is the primary mechanism of torsemide in treating hypertension?",
        "options": [
            "Sodium and water excretion",
            "Vasodilation",
            "Angiotensin II inhibition",
            "Beta-receptor blockade"
        ],
        "answer": "Sodium and water excretion",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Torsemide, a loop diuretic, promotes sodium and water excretion, reducing blood volume and blood pressure."
    },
    {
        "id": 360,
        "question": "Which antihypertensive is used in patients with hypertension and pregnancy?",
        "options": [
            "Nifedipine",
            "Losartan",
            "Spironolactone",
            "Furosemide"
        ],
        "answer": "Nifedipine",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Nifedipine, a calcium channel blocker, is safe and effective for treating hypertension in pregnancy."
    },
    {
        "id": 361,
        "question": "Which antihypertensive is contraindicated in patients with gout?",
        "options": [
            "Amlodipine",
            "Indapamide",
            "Telmisartan",
            "Metoprolol"
        ],
        "answer": "Indapamide",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Indapamide, a thiazide-like diuretic, increases uric acid levels, exacerbating gout."
    },
    {
        "id": 362,
        "question": "Which condition is treated with albumin to manage acute hypotension?",
        "options": [
            "Hypertensive crisis",
            "Hypovolemic shock",
            "Chronic kidney disease",
            "Pulmonary hypertension"
        ],
        "answer": "Hypovolemic shock",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Albumin expands blood volume in hypovolemic shock, correcting acute hypotension."
    },
    {
        "id": 363,
        "question": "Which antihypertensive is associated with rebound hypertension upon abrupt withdrawal?",
        "options": [
            "Clonidine",
            "Amlodipine",
            "Telmisartan",
            "Furosemide"
        ],
        "answer": "Clonidine",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Clonidine, a central alpha-2 agonist, can cause rebound hypertension upon abrupt withdrawal due to increased sympathetic outflow."
    },
    {
        "id": 364,
        "question": "What is a common side effect of torsemide in hypertension treatment?",
        "options": [
            "Hypokalemia",
            "Hyperkalemia",
            "Dry cough",
            "Gynecomastia"
        ],
        "answer": "Hypokalemia",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Torsemide, a loop diuretic, increases potassium excretion, causing hypokalemia as a common side effect in hypertension treatment."
    },
    {
        "id": 365,
        "question": "Which antihypertensive is used in patients with patients with hypertension and left ventricular hypertrophy?",
        "options": [
            "Irbesartan",
            "Prazosin",
            "Clonidine",
            "Hydralazine"
        ],
        "answer": "Irbesartan",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Irbesartan, an ARB, reduces left ventricular hypertrophy by blocking angiotensin II-mediated cardiac remodeling."
    },
    {
        "id": 366,
        "question": "Which drug interaction increases the risk of hypotension in patients on benazepril?",
        "options": [
            "Benazepril and nitroglycerin",
            "Benazepril and aspirin",
            "Benazepril and metformin",
            "Benazepril and felodipine"
        ],
        "answer": "Benazepril and nitroglycerin",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Benazepril, an ACE inhibitor, and nitroglycerin, a vasodilator, both lower blood pressure, increasing the risk of hypotension."
    },
    {
        "id": 367,
        "question": "Which vasopressor is used to treat hypotension in patients with spinal cord injury?",
        "options": [
            "Phenylephrine",
            "Nifedipine",
            "Lisinopril",
            "Furosemide"
        ],
        "answer": "Phenylephrine",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Phenylephrine increases vascular tone in spinal cord injury to treat hypotension."
    },
    {
        "id": 368,
        "question": "Which antihypertensive is preferred in patients with hypertension and osteoporosis?",
        "options": [
            "Indapamide",
            "Propranolol",
            "Clonidine",
            "Benazepril"
        ],
        "answer": "Indapamide",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Indapamide reduces urinary calcium excretion, benefiting bone health in hypertensive patients with osteoporosis."
    },
    {
        "id": 369,
        "question": "What is the primary mechanism of labetalol in treating hypertension?",
        "options": [
            "Alpha-1 and beta-receptor blockade",
            "Calcium channel blockade",
            "Angiotensin II receptor blockade",
            "Diuresis"
        ],
        "answer": "Alpha-1 and beta-receptor blockade",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Labetalol, a combined alpha-1 and beta-blocker, reduces blood pressure by causing vasodilation and decreasing cardiac output."
    },
    {
        "id": 370,
        "question": "Which antihypertensive is used in patients with resistant hypertension?",
        "options": [
            "Amiloride",
            "Amlodipine",
            "Metoprolol",
            "Telmisartan"
        ],
        "answer": "Amiloride",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Amiloride, a potassium-sparing diuretic, is effective in resistant hypertension by reducing fluid retention and vascular resistance."
    },
    {
        "id": 371,
        "question": "Which drug is commonly used to relieve acute angina pectoris?",
        "options": [
            "Nitroglycerin",
            "Metoprolol",
            "Furosemide",
            "Warfarin"
        ],
        "answer": "Nitroglycerin",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Nitroglycerin, a nitrate, relieves acute angina by causing vasodilation, reducing preload and myocardial oxygen demand."
    },
    {
        "id": 372,
        "question": "What is the primary mechanism of action of atorvastatin in treating coronary artery disease?",
        "options": [
            "HMG-CoA reductase inhibition",
            "Platelet aggregation inhibition",
            "Beta-receptor blockade",
            "Sodium excretion"
        ],
        "answer": "HMG-CoA reductase inhibition",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Atorvastatin, a statin, inhibits HMG-CoA reductase, reducing cholesterol synthesis and lowering LDL levels in coronary artery disease."
    },
    {
        "id": 373,
        "question": "Which drug is used to manage heart failure by reducing preload and afterload?",
        "options": [
            "Captopril",
            "Digoxin",
            "Amiodarone",
            "Aspirin"
        ],
        "answer": "Captopril",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Captopril, an ACE inhibitor, reduces preload and afterload by inhibiting angiotensin II, improving cardiac function in heart failure."
    },
    {
        "id": 374,
        "question": "Which antiarrhythmic drug is preferred for ventricular tachycardia in patients with ischemic heart disease?",
        "options": [
            "Lidocaine",
            "Sotalol",
            "Quinidine",
            "Flecainide"
        ],
        "answer": "Lidocaine",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Lidocaine, a class Ib antiarrhythmic, is preferred for ventricular tachycardia in ischemic heart disease due to its efficacy and safety profile."
    },
    {
        "id": 375,
        "question": "What is a common side effect of isosorbide mononitrate in angina treatment?",
        "options": [
            "Headache",
            "Bradycardia",
            "Hyperkalemia",
            "Dry cough"
        ],
        "answer": "Headache",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Isosorbide mononitrate, a nitrate, causes vasodilation, leading to headaches as a common side effect due to cerebral vasodilation."
    },
    {
        "id": 376,
        "question": "Which drug is used to prevent thrombus formation in patients with atrial fibrillation and heart disease?",
        "options": [
            "Apixaban",
            "Clonidine",
            "Verapamil",
            "Spironolactone"
        ],
        "answer": "Apixaban",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Apixaban, a direct oral anticoagulant, prevents thrombus formation in atrial fibrillation by inhibiting factor Xa, reducing stroke risk."
    },
    {
        "id": 377,
        "question": "Which drug interaction increases the risk of bleeding in patients on clopidogrel after a myocardial infarction?",
        "options": [
            "Clopidogrel and omeprazole",
            "Clopidogrel and amlodipine",
            "Clopidogrel and metoprolol",
            "Clopidogrel and lisinopril"
        ],
        "answer": "Clopidogrel and omeprazole",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Omeprazole, a proton pump inhibitor, inhibits CYP2C19, reducing clopidogrel activation and increasing bleeding risk post-myocardial infarction."
    },
    {
        "id": 378,
        "question": "Which drug is used to improve survival in patients with heart failure and reduced ejection fraction?",
        "options": [
            "Sacubitril/valsartan",
            "Digoxin",
            "Amiodarone",
            "Warfarin"
        ],
        "answer": "Sacubitril/valsartan",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Sacubitril/valsartan, an ARNI, improves survival in heart failure with reduced ejection fraction by inhibiting neprilysin and blocking angiotensin II."
    },
    {
        "id": 379,
        "question": "What is the primary mechanism of aspirin in preventing myocardial infarction?",
        "options": [
            "Platelet aggregation inhibition",
            "Vasodilation",
            "Cholesterol reduction",
            "Heart rate reduction"
        ],
        "answer": "Platelet aggregation inhibition",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Aspirin inhibits cyclooxygenase, reducing thromboxane A2 and preventing platelet aggregation, lowering myocardial infarction risk."
    },
    {
        "id": 380,
        "question": "Which drug is used to control heart rate in atrial fibrillation associated with heart disease?",
        "options": [
            "Diltiazem",
            "Nitroglycerin",
            "Furosemide",
            "Clopidogrel"
        ],
        "answer": "Diltiazem",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Diltiazem, a calcium channel blocker, slows atrioventricular conduction, controlling heart rate in atrial fibrillation."
    },
    {
        "id": 381,
        "question": "Which drug is contraindicated in heart failure patients with severe bradycardia?",
        "options": [
            "Metoprolol",
            "Enalapril",
            "Spironolactone",
            "Furosemide"
        ],
        "answer": "Metoprolol",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Metoprolol, a beta-blocker, can exacerbate bradycardia, making it contraindicated in heart failure patients with severe bradycardia."
    },
    {
        "id": 382,
        "question": "Which drug is used to manage acute pulmonary edema in heart failure?",
        "options": [
            "Furosemide",
            "Aspirin",
            "Amiodarone",
            "Apixaban"
        ],
        "answer": "Furosemide",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Furosemide, a loop diuretic, reduces fluid overload in acute pulmonary edema by promoting diuresis, relieving heart failure symptoms."
    },
    {
        "id": 383,
        "question": "Which antiplatelet drug is used in combination with aspirin post-percutaneous coronary intervention?",
        "options": [
            "Ticagrelor",
            "Warfarin",
            "Spironolactone",
            "Digoxin"
        ],
        "answer": "Ticagrelor",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Ticagrelor, a P2Y12 inhibitor, is used with aspirin post-PCI to prevent stent thrombosis and recurrent ischemic events."
    },
    {
        "id": 384,
        "question": "What is a common side effect of rosuvastatin in coronary artery disease treatment?",
        "options": [
            "Myalgia",
            "Bradycardia",
            "Dry cough",
            "Hypokalemia"
        ],
        "answer": "Myalgia",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Rosuvastatin, a statin, can cause myalgia due to muscle toxicity, a common side effect in coronary artery disease treatment."
    },
    {
        "id": 385,
        "question": "Which drug is used to treat ventricular arrhythmias in patients with heart failure?",
        "options": [
            "Amiodarone",
            "Nitroglycerin",
            "Enalapril",
            "Clopidogrel"
        ],
        "answer": "Amiodarone",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Amiodarone, a class III antiarrhythmic, is used to treat ventricular arrhythmias in heart failure due to its broad-spectrum efficacy."
    },
    {
        "id": 386,
        "question": "Which drug interaction increases the risk of rhabdomyolysis in patients on simvastatin for coronary artery disease?",
        "options": [
            "Simvastatin and gemfibrozil",
            "Simvastatin and aspirin",
            "Simvastatin and metoprolol",
            "Simvastatin and lisinopril"
        ],
        "answer": "Simvastatin and gemfibrozil",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Gemfibrozil inhibits simvastatin metabolism via CYP3A4, increasing simvastatin levels and the risk of rhabdomyolysis."
    },
    {
        "id": 387,
        "question": "Which drug is used to reduce mortality in patients post-myocardial infarction with left ventricular dysfunction?",
        "options": [
            "Carvedilol",
            "Digoxin",
            "Amlodipine",
            "Warfarin"
        ],
        "answer": "Carvedilol",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Carvedilol, a beta-blocker with alpha-1 blockade, reduces mortality post-myocardial infarction with left ventricular dysfunction by improving cardiac remodeling."
    },
    {
        "id": 388,
        "question": "Which anticoagulant is preferred for patients with heart disease and mechanical heart valves?",
        "options": [
            "Warfarin",
            "Apixaban",
            "Rivaroxaban",
            "Dabigatran"
        ],
        "answer": "Warfarin",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Warfarin, a vitamin K antagonist, is preferred for patients with mechanical heart valves due to its proven efficacy in preventing thromboembolism."
    },
    {
        "id": 389,
        "question": "What is the primary mechanism of digoxin in treating heart failure?",
        "options": [
            "Positive inotropy",
            "Vasodilation",
            "Platelet inhibition",
            "Cholesterol reduction"
        ],
        "answer": "Positive inotropy",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Digoxin increases myocardial contractility by inhibiting Na+/K+-ATPase, enhancing calcium availability in heart failure."
    },
    {
        "id": 390,
        "question": "Which drug is used to prevent recurrent myocardial infarction in patients with coronary artery disease?",
        "options": [
            "Clopidogrel",
            "Furosemide",
            "Amiodarone",
            "Spironolactone"
        ],
        "answer": "Clopidogrel",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Clopidogrel, a P2Y12 inhibitor, prevents recurrent myocardial infarction by inhibiting platelet aggregation in coronary artery disease."
    },
    {
        "id": 391,
        "question": "Which drug is contraindicated in patients with heart failure and hyperkalemia?",
        "options": [
            "Spironolactone",
            "Furosemide",
            "Amlodipine",
            "Aspirin"
        ],
        "answer": "Spironolactone",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Spironolactone, an aldosterone antagonist, increases potassium levels, making it contraindicated in heart failure patients with hyperkalemia."
    },
    {
        "id": 392,
        "question": "Which drug is used to manage angina in patients with coronary artery disease and heart failure?",
        "options": [
            "Ranolazine",
            "Warfarin",
            "Digoxin",
            "Apixaban"
        ],
        "answer": "Ranolazine",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Ranolazine reduces myocardial oxygen demand by inhibiting late sodium current, managing angina in patients with coronary artery disease and heart failure."
    },
    {
        "id": 393,
        "question": "Which antiarrhythmic drug is used to maintain sinus rhythm in atrial fibrillation with heart disease?",
        "options": [
            "Sotalol",
            "Nitroglycerin",
            "Furosemide",
            "Clopidogrel"
        ],
        "answer": "Sotalol",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Sotalol, a class III antiarrhythmic, maintains sinus rhythm in atrial fibrillation by prolonging the action potential duration."
    },
    {
        "id": 394,
        "question": "What is a common side effect of enalapril in heart failure treatment?",
        "options": [
            "Dry cough",
            "Myalgia",
            "Tachycardia",
            "Hypokalemia"
        ],
        "answer": "Dry cough",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Enalapril, an ACE inhibitor, increases bradykinin levels, leading to dry cough as a common side effect in heart failure treatment."
    },
    {
        "id": 395,
        "question": "Which drug is used to manage fluid retention in patients with heart failure?",
        "options": [
            "Torsemide",
            "Aspirin",
            "Amiodarone",
            "Rivaroxaban"
        ],
        "answer": "Torsemide",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Torsemide, a loop diuretic, reduces fluid retention in heart failure by promoting diuresis."
    },
    {
        "id": 396,
        "question": "Which drug interaction increases the risk of bleeding in patients on warfarin for heart disease?",
        "options": [
            "Warfarin and amiodarone",
            "Warfarin and metoprolol",
            "Warfarin and lisinopril",
            "Warfarin and furosemide"
        ],
        "answer": "Warfarin and amiodarone",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Amiodarone inhibits CYP2C9, increasing warfarin levels and bleeding risk in patients with heart disease."
    },
    {
        "id": 397,
        "question": "Which drug is used to treat stable angina in patients with coronary artery disease?",
        "options": [
            "Amlodipine",
            "Warfarin",
            "Digoxin",
            "Apixaban"
        ],
        "answer": "Amlodipine",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Amlodipine, a calcium channel blocker, reduces myocardial oxygen demand by vasodilation, treating stable angina in coronary artery disease."
    },
    {
        "id": 398,
        "question": "Which drug is preferred for rate control in atrial fibrillation with heart failure?",
        "options": [
            "Bisoprolol",
            "Nitroglycerin",
            "Spironolactone",
            "Clopidogrel"
        ],
        "answer": "Bisoprolol",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Bisoprolol, a beta-1 selective blocker, is preferred for rate control in atrial fibrillation with heart failure, improving cardiac efficiency."
    },
    {
        "id": 399,
        "question": "What is the primary mechanism of ezetimibe in treating hyperlipidemia in heart disease?",
        "options": [
            "Cholesterol absorption inhibition",
            "HMG-CoA reductase inhibition",
            "Platelet inhibition",
            "Vasodilation"
        ],
        "answer": "Cholesterol absorption inhibition",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Ezetimibe inhibits intestinal cholesterol absorption, reducing LDL levels in hyperlipidemia treatment for heart disease."
    },
    {
        "id": 400,
        "question": "Which drug is used to prevent stroke in patients with atrial fibrillation and heart disease?",
        "options": [
            "Rivaroxaban",
            "Furosemide",
            "Amiodarone",
            "Clonidine"
        ],
        "answer": "Rivaroxaban",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Rivaroxaban, a factor Xa inhibitor, prevents stroke in atrial fibrillation by reducing thrombus formation in heart disease patients."
    },
    {
        "id": 401,
        "question": "Which drug is contraindicated in patients with heart failure and severe renal impairment?",
        "options": [
            "Sacubitril/valsartan",
            "Furosemide",
            "Aspirin",
            "Clopidogrel"
        ],
        "answer": "Sacubitril/valsartan",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Sacubitril/valsartan is contraindicated in severe renal impairment due to the risk of worsening renal function in heart failure patients."
    },
    {
        "id": 402,
        "question": "Which drug is used to manage angina in patients with coronary artery disease and diabetes?",
        "options": [
            "Metoprolol",
            "Warfarin",
            "Digoxin",
            "Apixaban"
        ],
        "answer": "Metoprolol",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Metoprolol, a beta-1 selective blocker, reduces myocardial oxygen demand, managing angina in patients with coronary artery disease and diabetes."
    },
    {
        "id": 403,
        "question": "Which antiarrhythmic drug is used to treat supraventricular tachycardia in patients with heart disease?",
        "options": [
            "Adenosine",
            "Nitroglycerin",
            "Furosemide",
            "Clopidogrel"
        ],
        "answer": "Adenosine",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Adenosine terminates supraventricular tachycardia by slowing AV nodal conduction in patients with heart disease."
    },
    {
        "id": 404,
        "question": "What is a common side effect of lisinopril in heart failure treatment?",
        "options": [
            "Hyperkalemia",
            "Myalgia",
            "Tachycardia",
            "Hypokalemia"
        ],
        "answer": "Hyperkalemia",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Lisinopril, an ACE inhibitor, reduces aldosterone, leading to hyperkalemia in heart failure treatment."
    },
    {
        "id": 405,
        "question": "Which drug is used to manage hypertension in patients with heart disease and heart failure?",
        "options": [
            "Losartan",
            "Aspirin",
            "Amiodarone",
            "Rivaroxaban"
        ],
        "answer": "Losartan",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Losartan, an ARB, reduces blood pressure and improves outcomes in heart failure patients with hypertension."
    },
    {
        "id": 406,
        "question": "Which drug interaction increases the risk of bleeding in patients on apixaban for heart disease?",
        "options": [
            "Apixaban and ketoconazole",
            "Apixaban and metoprolol",
            "Apixaban and lisinopril",
            "Apixaban and furosemide"
        ],
        "answer": "Apixaban and ketoconazole",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Ketoconazole, a CYP3A4 inhibitor, increases apixaban levels, raising the bleeding risk in heart disease patients."
    },
    {
        "id": 407,
        "question": "Which drug is used to treat chronic stable angina in patients with coronary artery disease?",
        "options": [
            "Isosorbide dinitrate",
            "Warfarin",
            "Digoxin",
            "Apixaban"
        ],
        "answer": "Isosorbide dinitrate",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Isosorbide dinitrate, a nitrate, reduces preload and myocardial oxygen demand, treating chronic stable angina."
    },
    {
        "id": 408,
        "question": "Which drug is used in patients with heart failure and hyperlipidemia?",
        "options": [
            "Rosuvastatin",
            "Nitroglycerin",
            "Spironolactone",
            "Clopidogrel"
        ],
        "answer": "Rosuvastatin",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Rosuvastatin, a statin, lowers LDL cholesterol, reducing cardiovascular risk in heart failure patients with hyperlipidemia."
    },
    {
        "id": 409,
        "question": "What is the primary mechanism of ticagrelor in preventing stent thrombosis?",
        "options": [
            "P2Y12 receptor inhibition",
            "Factor Xa inhibition",
            "Vasodilation",
            "Cholesterol reduction"
        ],
        "answer": "P2Y12 receptor inhibition",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Ticagrelor inhibits P2Y12 receptors, preventing platelet aggregation and reducing stent thrombosis risk."
    },
    {
        "id": 410,
        "question": "Which drug is used to manage heart failure in patients with preserved ejection fraction?",
        "options": [
            "Spironolactone",
            "Aspirin",
            "Amiodarone",
            "Rivaroxaban"
        ],
        "answer": "Spironolactone",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Spironolactone, an aldosterone antagonist, reduces fluid overload and fibrosis in heart failure with preserved ejection fraction."
    },
    {
        "id": 411,
        "question": "Which drug is contraindicated in patients with heart disease and severe liver failure?",
        "options": [
            "Amiodarone",
            "Furosemide",
            "Aspirin",
            "Clopidogrel"
        ],
        "answer": "Amiodarone",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Amiodarone, metabolized by the liver, can cause hepatotoxicity, making it contraindicated in severe liver failure."
    },
    {
        "id": 412,
        "question": "Which drug is used to treat acute myocardial infarction with ST-segment elevation?",
        "options": [
            "Tenecteplase",
            "Warfarin",
            "Digoxin",
            "Apixaban"
        ],
        "answer": "Tenecteplase",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Tenecteplase, a fibrin-specific thrombolytic, restores coronary blood flow in ST-segment elevation myocardial infarction."
    },
    {
        "id": 413,
        "question": "Which antiarrhythmic drug is used to treat atrial flutter in patients with heart disease?",
        "options": [
            "Ibutilide",
            "Nitroglycerin",
            "Furosemide",
            "Clopidogrel"
        ],
        "answer": "Ibutilide",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Ibutilide, a class III antiarrhythmic, converts atrial flutter to sinus rhythm by prolonging the action potential."
    },
    {
        "id": 414,
        "question": "What is a common side effect of carvedilol in heart failure treatment?",
        "options": [
            "Dizziness",
            "Hyperkalemia",
            "Dry cough",
            "Rash"
        ],
        "answer": "Dizziness",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Carvedilol, a beta-blocker with alpha-1 blockade, causes vasodilation, leading to dizziness as a side effect."
    },
    {
        "id": 415,
        "question": "Which drug is used to manage hypertension in patients with ischemic heart disease?",
        "options": [
            "Atenolol",
            "Aspirin",
            "Amiodarone",
            "Rivaroxaban"
        ],
        "answer": "Atenolol",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Atenolol, a beta-1 blocker, reduces blood pressure and myocardial oxygen demand in ischemic heart disease."
    },
    {
        "id": 416,
        "question": "Which drug interaction increases the risk of hypotension in patients on isosorbide mononitrate?",
        "options": [
            "Isosorbide mononitrate and sildenafil",
            "Isosorbide mononitrate and metoprolol",
            "Isosorbide mononitrate and lisinopril",
            "Isosorbide mononitrate and furosemide"
        ],
        "answer": "Isosorbide mononitrate and sildenafil",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Sildenafil and isosorbide mononitrate, both vasodilators, increase the risk of hypotension in heart disease patients."
    },
    {
        "id": 417,
        "question": "Which drug is used to treat heart failure in patients with reduced ejection fraction and diabetes?",
        "options": [
            "Empagliflozin",
            "Warfarin",
            "Digoxin",
            "Apixaban"
        ],
        "answer": "Empagliflozin",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Empagliflozin, an SGLT2 inhibitor, reduces heart failure hospitalization and improves outcomes in patients with reduced ejection fraction and diabetes."
    },
    {
        "id": 418,
        "question": "Which drug is used in patients with heart disease and acute coronary syndrome?",
        "options": [
            "Prasugrel",
            "Furosemide",
            "Spironolactone",
            "Clonidine"
        ],
        "answer": "Prasugrel",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Prasugrel, a P2Y12 inhibitor, prevents platelet aggregation in acute coronary syndrome, reducing ischemic events."
    },
    {
        "id": 419,
        "question": "What is the primary mechanism of amiodarone in treating ventricular arrhythmias?",
        "options": [
            "Potassium channel blockade",
            "Platelet inhibition",
            "Vasodilation",
            "Cholesterol reduction"
        ],
        "answer": "Potassium channel blockade",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Amiodarone, a class III antiarrhythmic, blocks potassium channels, prolonging the action potential to treat ventricular arrhythmias."
    },
    {
        "id": 420,
        "question": "Which drug is used to manage hyperlipidemia in patients with coronary artery disease?",
        "options": [
            "Atorvastatin",
            "Nitroglycerin",
            "Spironolactone",
            "Clonidine"
        ],
        "answer": "Atorvastatin",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Atorvastatin, a statin, reduces LDL cholesterol, lowering the risk of coronary artery disease progression."
    },
    {
        "id": 421,
        "question": "Which drug is used to relieve chest pain in acute coronary syndrome?",
        "options": [
            "Morphine",
            "Bisoprolol",
            "Torsemide",
            "Dabigatran"
        ],
        "answer": "Morphine",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Morphine relieves chest pain in acute coronary syndrome by reducing anxiety and myocardial oxygen demand through vasodilation."
    },
    {
        "id": 422,
        "question": "What is the primary mechanism of pravastatin in managing coronary artery disease?",
        "options": [
            "HMG-CoA reductase inhibition",
            "Platelet aggregation inhibition",
            "Beta-receptor blockade",
            "Sodium excretion"
        ],
        "answer": "HMG-CoA reductase inhibition",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Pravastatin, a statin, inhibits HMG-CoA reductase, reducing cholesterol synthesis and LDL levels in coronary artery disease."
    },
    {
        "id": 423,
        "question": "Which drug is used to reduce fluid retention in patients with congestive heart failure?",
        "options": [
            "Bumetanide",
            "Clopidogrel",
            "Sotalol",
            "Rivaroxaban"
        ],
        "answer": "Bumetanide",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Bumetanide, a loop diuretic, reduces fluid retention in congestive heart failure by promoting diuresis, alleviating edema and dyspnea."
    },
    {
        "id": 424,
        "question": "Which antiarrhythmic drug is used for ventricular fibrillation in patients with ischemic heart disease?",
        "options": [
            "Amiodarone",
            "Verapamil",
            "Atenolol",
            "Aspirin"
        ],
        "answer": "Amiodarone",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Amiodarone, a class III antiarrhythmic, is used for ventricular fibrillation in ischemic heart disease due to its ability to stabilize cardiac rhythm."
    },
    {
        "id": 425,
        "question": "What is a common side effect of nitroglycerin in angina treatment?",
        "options": [
            "Hypotension",
            "Hyperkalemia",
            "Bradycardia",
            "Dry cough"
        ],
        "answer": "Hypotension",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Nitroglycerin, a nitrate, causes vasodilation, leading to hypotension as a common side effect in angina treatment."
    },
    {
        "id": 426,
        "question": "Which anticoagulant is used to prevent thromboembolism in patients with atrial fibrillation and heart failure?",
        "options": [
            "Dabigatran",
            "Furosemide",
            "Metoprolol",
            "Clonidine"
        ],
        "answer": "Dabigatran",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Dabigatran, a direct thrombin inhibitor, prevents thromboembolism in atrial fibrillation with heart failure, reducing stroke risk."
    },
    {
        "id": 427,
        "question": "Which drug interaction increases the risk of myopathy in patients on atorvastatin for heart disease?",
        "options": [
            "Atorvastatin and clarithromycin",
            "Atorvastatin and aspirin",
            "Atorvastatin and lisinopril",
            "Atorvastatin and furosemide"
        ],
        "answer": "Atorvastatin and clarithromycin",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Clarithromycin, a CYP3A4 inhibitor, increases atorvastatin levels, raising the risk of myopathy in heart disease patients."
    },
    {
        "id": 428,
        "question": "Which drug is used to improve outcomes in heart failure with reduced ejection fraction?",
        "options": [
            "Lisinopril",
            "Digoxin",
            "Warfarin",
            "Ticagrelor"
        ],
        "answer": "Lisinopril",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Lisinopril, an ACE inhibitor, reduces preload and afterload, improving outcomes in heart failure with reduced ejection fraction."
    },
    {
        "id": 429,
        "question": "What is the primary mechanism of clopidogrel in preventing stent thrombosis?",
        "options": [
            "P2Y12 receptor inhibition",
            "Factor Xa inhibition",
            "Vasodilation",
            "Cholesterol reduction"
        ],
        "answer": "P2Y12 receptor inhibition",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Clopidogrel inhibits P2Y12 receptors, preventing platelet aggregation and reducing stent thrombosis risk."
    },
    {
        "id": 430,
        "question": "Which drug is used to control heart rate in atrial flutter associated with heart disease?",
        "options": [
            "Esmolol",
            "Nitroglycerin",
            "Spironolactone",
            "Apixaban"
        ],
        "answer": "Esmolol",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Esmolol, a short-acting beta-1 blocker, controls heart rate in atrial flutter by slowing AV nodal conduction."
    },
    {
        "id": 431,
        "question": "Which drug is contraindicated in heart failure patients with severe hypotension?",
        "options": [
            "Sacubitril/valsartan",
            "Furosemide",
            "Aspirin",
            "Clopidogrel"
        ],
        "answer": "Sacubitril/valsartan",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Sacubitril/valsartan, an ARNI, can exacerbate hypotension, making it contraindicated in heart failure patients with severe hypotension."
    },
    {
        "id": 432,
        "question": "Which drug is used to manage acute heart failure with cardiogenic shock?",
        "options": [
            "Dobutamine",
            "Amlodipine",
            "Warfarin",
            "Ticagrelor"
        ],
        "answer": "Dobutamine",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Dobutamine, a beta-1 agonist, increases cardiac contractility and output in acute heart failure with cardiogenic shock."
    },
    {
        "id": 433,
        "question": "Which antiplatelet drug is used post-myocardial infarction to prevent recurrent events?",
        "options": [
            "Prasugrel",
            "Furosemide",
            "Amiodarone",
            "Spironolactone"
        ],
        "answer": "Prasugrel",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Prasugrel, a P2Y12 inhibitor, prevents recurrent ischemic events post-myocardial infarction by inhibiting platelet aggregation."
    },
    {
        "id": 434,
        "question": "What is a common side effect of simvastatin in coronary artery disease treatment?",
        "options": [
            "Elevated liver enzymes",
            "Bradycardia",
            "Dry cough",
            "Hypokalemia"
        ],
        "answer": "Elevated liver enzymes",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Simvastatin, a statin, can cause elevated liver enzymes due to hepatotoxicity, a common side effect in coronary artery disease treatment."
    },
    {
        "id": 435,
        "question": "Which drug is used to treat supraventricular tachycardia in patients with heart disease?",
        "options": [
            "Verapamil",
            "Nitroglycerin",
            "Clopidogrel",
            "Rivaroxaban"
        ],
        "answer": "Verapamil",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Verapamil, a calcium channel blocker, slows AV nodal conduction, treating supraventricular tachycardia in heart disease patients."
    },
    {
        "id": 436,
        "question": "Which drug interaction increases the risk of bleeding in patients on rivaroxaban for heart disease?",
        "options": [
            "Rivaroxaban and rifampin",
            "Rivaroxaban and aspirin",
            "Rivaroxaban and metoprolol",
            "Rivaroxaban and lisinopril"
        ],
        "answer": "Rivaroxaban and aspirin",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Aspirin, an antiplatelet, combined with rivaroxaban, a factor Xa inhibitor, increases bleeding risk in heart disease patients."
    },
    {
        "id": 437,
        "question": "Which drug is used to reduce mortality in patients with heart failure and reduced ejection fraction?",
        "options": [
            "Bisoprolol",
            "Digoxin",
            "Amlodipine",
            "Warfarin"
        ],
        "answer": "Bisoprolol",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Bisoprolol, a beta-1 selective blocker, reduces mortality in heart failure with reduced ejection fraction by decreasing cardiac workload."
    },
    {
        "id": 438,
        "question": "Which anticoagulant is used for patients with heart disease and recent coronary stent placement?",
        "options": [
            "Apixaban",
            "Furosemide",
            "Amiodarone",
            "Spironolactone"
        ],
        "answer": "Apixaban",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Apixaban, a factor Xa inhibitor, is used with antiplatelets post-stent placement to prevent thromboembolism in heart disease patients."
    },
    {
        "id": 439,
        "question": "What is the primary mechanism of milrinone in treating acute heart failure?",
        "options": [
            "Phosphodiesterase inhibition",
            "Platelet inhibition",
            "Vasodilation",
            "Cholesterol reduction"
        ],
        "answer": "Phosphodiesterase inhibition",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Milrinone, a phosphodiesterase inhibitor, increases cAMP, enhancing contractility and vasodilation in acute heart failure."
    },
    {
        "id": 440,
        "question": "Which drug is used to prevent recurrent angina in patients with coronary artery disease?",
        "options": [
            "Isosorbide mononitrate",
            "Warfarin",
            "Digoxin",
            "Clonidine"
        ],
        "answer": "Isosorbide mononitrate",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Isosorbide mononitrate, a nitrate, prevents recurrent angina by reducing preload and myocardial oxygen demand."
    },
    {
        "id": 441,
        "question": "Which drug is contraindicated in patients with heart failure and chronic kidney disease stage 5?",
        "options": [
            "Spironolactone",
            "Furosemide",
            "Aspirin",
            "Clopidogrel"
        ],
        "answer": "Spironolactone",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Spironolactone is contraindicated in stage 5 CKD due to the risk of hyperkalemia in heart failure patients."
    },
    {
        "id": 442,
        "question": "Which drug is used to manage unstable angina in acute coronary syndrome?",
        "options": [
            "Heparin",
            "Amlodipine",
            "Digoxin",
            "Apixaban"
        ],
        "answer": "Heparin",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Heparin, an anticoagulant, prevents thrombus progression in unstable angina, stabilizing acute coronary syndrome."
    },
    {
        "id": 443,
        "question": "Which antiarrhythmic drug is used to convert atrial fibrillation to sinus rhythm in heart disease?",
        "options": [
            "Dofetilide",
            "Nitroglycerin",
            "Furosemide",
            "Clopidogrel"
        ],
        "answer": "Dofetilide",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Dofetilide, a class III antiarrhythmic, converts atrial fibrillation to sinus rhythm by prolonging the action potential."
    },
    {
        "id": 444,
        "question": "What is a common side effect of losartan in heart failure treatment?",
        "options": [
            "Hyperkalemia",
            "Bradycardia",
            "Dry cough",
            "Myalgia"
        ],
        "answer": "Hyperkalemia",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Losartan, an ARB, reduces aldosterone, leading to hyperkalemia as a common side effect in heart failure treatment."
    },
    {
        "id": 445,
        "question": "Which drug is used to manage hypertension in patients with heart failure and coronary artery disease?",
        "options": [
            "Ramipril",
            "Aspirin",
            "Amiodarone",
            "Rivaroxaban"
        ],
        "answer": "Ramipril",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Ramipril, an ACE inhibitor, reduces blood pressure and improves outcomes in heart failure and coronary artery disease."
    },
    {
        "id": 446,
        "question": "Which drug interaction increases the risk of bleeding in patients on dabigatran for heart disease?",
        "options": [
            "Dabigatran and verapamil",
            "Dabigatran and metoprolol",
            "Dabigatran and lisinopril",
            "Dabigatran and furosemide"
        ],
        "answer": "Dabigatran and verapamil",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Verapamil, a P-glycoprotein inhibitor, increases dabigatran levels, raising bleeding risk in heart disease patients."
    },
    {
        "id": 447,
        "question": "Which drug is used to treat chronic angina in patients with coronary artery disease?",
        "options": [
            "Ranolazine",
            "Warfarin",
            "Digoxin",
            "Apixaban"
        ],
        "answer": "Ranolazine",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Ranolazine reduces myocardial oxygen demand by inhibiting late sodium current, treating chronic angina."
    },
    {
        "id": 448,
        "question": "Which drug is used in patients with heart failure and type 2 diabetes?",
        "options": [
            "Dapagliflozin",
            "Nitroglycerin",
            "Spironolactone",
            "Clopidogrel"
        ],
        "answer": "Dapagliflozin",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Dapagliflozin, an SGLT2 inhibitor, reduces heart failure hospitalization in patients with type 2 diabetes."
    },
    {
        "id": 449,
        "question": "What is the primary mechanism of aspirin in preventing myocardial infarction?",
        "options": [
            "Cyclooxygenase inhibition",
            "Factor Xa inhibition",
            "Vasodilation",
            "Cholesterol reduction"
        ],
        "answer": "Cyclooxygenase inhibition",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Aspirin inhibits cyclooxygenase, reducing thromboxane A2 and preventing platelet aggregation, lowering myocardial infarction risk."
    },
    {
        "id": 450,
        "question": "Which drug is used to manage heart failure with preserved ejection fraction?",
        "options": [
            "Empagliflozin",
            "Aspirin",
            "Amiodarone",
            "Rivaroxaban"
        ],
        "answer": "Empagliflozin",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Empagliflozin, an SGLT2 inhibitor, reduces fluid overload and improves outcomes in heart failure with preserved ejection fraction."
    },
    {
        "id": 451,
        "question": "Which drug is contraindicated in patients with heart disease and severe asthma?",
        "options": [
            "Propranolol",
            "Furosemide",
            "Aspirin",
            "Clopidogrel"
        ],
        "answer": "Propranolol",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Propranolol, a non-selective beta-blocker, can cause bronchoconstriction, making it contraindicated in severe asthma."
    },
    {
        "id": 452,
        "question": "Which drug is used to treat non-ST-segment elevation myocardial infarction?",
        "options": [
            "Enoxaparin",
            "Warfarin",
            "Digoxin",
            "Apixaban"
        ],
        "answer": "Enoxaparin",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Enoxaparin, a low-molecular-weight heparin, prevents thrombus progression in non-ST-segment elevation myocardial infarction."
    },
    {
        "id": 453,
        "question": "Which antiarrhythmic drug is used to treat ventricular tachycardia in heart failure?",
        "options": [
            "Mexiletine",
            "Nitroglycerin",
            "Furosemide",
            "Clopidogrel"
        ],
        "answer": "Mexiletine",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Mexiletine, a class Ib antiarrhythmic, treats ventricular tachycardia in heart failure by stabilizing cardiac membranes."
    },
    {
        "id": 454,
        "question": "What is a common side effect of furosemide in heart failure treatment?",
        "options": [
            "Hypokalemia",
            "Hyperkalemia",
            "Dry cough",
            "Rash"
        ],
        "answer": "Hypokalemia",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Furosemide, a loop diuretic, increases potassium excretion, causing hypokalemia in heart failure treatment."
    },
    {
        "id": 455,
        "question": "Which drug is used to manage hypertension in patients with ischemic heart disease?",
        "options": [
            "Nebivolol",
            "Aspirin",
            "Amiodarone",
            "Rivaroxaban"
        ],
        "answer": "Nebivolol",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Nebivolol, a beta-1 selective blocker with vasodilatory properties, manages hypertension and reduces myocardial oxygen demand in ischemic heart disease."
    },
    {
        "id": 456,
        "question": "Which drug interaction increases the risk of hypotension in patients on nitroglycerin?",
        "options": [
            "Nitroglycerin and tadalafil",
            "Nitroglycerin and aspirin",
            "Nitroglycerin and metoprolol",
            "Nitroglycerin and furosemide"
        ],
        "answer": "Nitroglycerin and tadalafil",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Tadalafil, a PDE5 inhibitor, and nitroglycerin, a nitrate, both cause vasodilation, increasing the risk of hypotension."
    },
    {
        "id": 457,
        "question": "Which drug is used to treat acute decompensated heart failure?",
        "options": [
            "Nesiritide",
            "Warfarin",
            "Digoxin",
            "Apixaban"
        ],
        "answer": "Nesiritide",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Nesiritide, a recombinant B-type natriuretic peptide, reduces preload and afterload in acute decompensated heart failure."
    },
    {
        "id": 458,
        "question": "Which drug is used in patients with heart disease and acute coronary syndrome?",
        "options": [
            "Ticagrelor",
            "Furosemide",
            "Spironolactone",
            "Clonidine"
        ],
        "answer": "Ticagrelor",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Ticagrelor, a P2Y12 inhibitor, prevents platelet aggregation in acute coronary syndrome, reducing ischemic events."
    },
    {
        "id": 459,
        "question": "What is the primary mechanism of dofetilide in treating atrial fibrillation?",
        "options": [
            "Potassium channel blockade",
            "Platelet inhibition",
            "Vasodilation",
            "Cholesterol reduction"
        ],
        "answer": "Potassium channel blockade",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Dofetilide, a class III antiarrhythmic, blocks potassium channels, prolonging the action potential to treat atrial fibrillation."
    },
    {
        "id": 460,
        "question": "Which drug is used to manage hyperlipidemia in patients with heart failure?",
        "options": [
            "Ezetimibe",
            "Nitroglycerin",
            "Spironolactone",
            "Clonidine"
        ],
        "answer": "Ezetimibe",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Ezetimibe inhibits cholesterol absorption, reducing LDL levels in heart failure patients with hyperlipidemia."
    },
    {
        "id": 461,
        "question": "Which drug is contraindicated in patients with heart disease and recent gastrointestinal bleeding?",
        "options": [
            "Aspirin",
            "Furosemide",
            "Metoprolol",
            "Spironolactone"
        ],
        "answer": "Aspirin",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Aspirin, an antiplatelet, increases bleeding risk, making it contraindicated in recent gastrointestinal bleeding."
    },
    {
        "id": 462,
        "question": "Which drug is used to treat ST-segment elevation myocardial infarction?",
        "options": [
            "Alteplase",
            "Warfarin",
            "Digoxin",
            "Apixaban"
        ],
        "answer": "Alteplase",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Alteplase, a thrombolytic, restores coronary blood flow in ST-segment elevation myocardial infarction."
    },
    {
        "id": 463,
        "question": "Which antiarrhythmic drug is used to maintain sinus rhythm in atrial fibrillation?",
        "options": [
            "Dronedarone",
            "Nitroglycerin",
            "Furosemide",
            "Clopidogrel"
        ],
        "answer": "Dronedarone",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Dronedarone, a class III antiarrhythmic, maintains sinus rhythm in atrial fibrillation with reduced toxicity compared to amiodarone."
    },
    {
        "id": 464,
        "question": "What is a common side effect of metoprolol in heart failure treatment?",
        "options": [
            "Fatigue",
            "Hyperkalemia",
            "Dry cough",
            "Rash"
        ],
        "answer": "Fatigue",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Metoprolol, a beta-1 blocker, reduces cardiac output, causing fatigue as a common side effect."
    },
    {
        "id": 465,
        "question": "Which drug is used to manage hypertension in patients with heart failure?",
        "options": [
            "Candesartan",
            "Aspirin",
            "Amiodarone",
            "Rivaroxaban"
        ],
        "answer": "Candesartan",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Candesartan, an ARB, reduces blood pressure and improves outcomes in heart failure patients."
    },
    {
        "id": 466,
        "question": "Which drug interaction increases the risk of bleeding in patients on ticagrelor for heart disease?",
        "options": [
            "Ticagrelor and ibuprofen",
            "Ticagrelor and metoprolol",
            "Ticagrelor and lisinopril",
            "Ticagrelor and furosemide"
        ],
        "answer": "Ticagrelor and ibuprofen",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Ibuprofen, an NSAID, combined with ticagrelor, a P2Y12 inhibitor, increases bleeding risk in heart disease patients."
    },
    {
        "id": 467,
        "question": "Which drug is used to treat angina in patients with coronary artery disease and heart failure?",
        "options": [
            "Amlodipine",
            "Warfarin",
            "Digoxin",
            "Apixaban"
        ],
        "answer": "Amlodipine",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Amlodipine, a calcium channel blocker, reduces myocardial oxygen demand, treating angina in coronary artery disease and heart failure."
    },
    {
        "id": 468,
        "question": "Which drug is used in patients with heart failure and atrial fibrillation?",
        "options": [
            "Digoxin",
            "Furosemide",
            "Spironolactone",
            "Clonidine"
        ],
        "answer": "Digoxin",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Digoxin controls heart rate in atrial fibrillation and improves contractility in heart failure patients."
    },
    {
        "id": 469,
        "question": "What is the primary mechanism of ranolazine in treating angina?",
        "options": [
            "Late sodium current inhibition",
            "Platelet inhibition",
            "Vasodilation",
            "Cholesterol reduction"
        ],
        "answer": "Late sodium current inhibition",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Ranolazine inhibits late sodium current, reducing myocardial oxygen demand in angina treatment."
    },
    {
        "id": 470,
        "question": "Which drug is used to manage hyperlipidemia in patients with coronary artery disease?",
        "options": [
            "Rosuvastatin",
            "Nitroglycerin",
            "Spironolactone",
            "Clonidine"
        ],
        "answer": "Rosuvastatin",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Rosuvastatin, a statin, reduces LDL cholesterol, lowering the risk of coronary artery disease progression."
    },
    {
        "id": 471,
        "question": "What is the primary route of elimination for a drug with high hepatic clearance?",
        "options": [
            "Biliary excretion",
            "Renal excretion",
            "Pulmonary excretion",
            "Sweat"
        ],
        "answer": "Biliary excretion",
        "difficulty": "easy",
        "topic": "Pharmacokinetics",
        "explanation": "Drugs with high hepatic clearance are primarily metabolized by the liver and eliminated via biliary excretion into the feces."
    },
    {
        "id": 472,
        "question": "Which parameter best describes the time it takes for a drug's plasma concentration to decrease by half?",
        "options": [
            "Half-life",
            "Clearance",
            "Volume of distribution",
            "Bioavailability"
        ],
        "answer": "Half-life",
        "difficulty": "easy",
        "topic": "Pharmacokinetics",
        "explanation": "Half-life is the time required for a drug's plasma concentration to reduce by half, reflecting its elimination rate."
    },
    {
        "id": 473,
        "question": "Which factor increases the bioavailability of an orally administered drug?",
        "options": [
            "Reduced first-pass metabolism",
            "Increased gastric motility",
            "High protein binding",
            "Renal impairment"
        ],
        "answer": "Reduced first-pass metabolism",
        "difficulty": "medium",
        "topic": "Pharmacokinetics",
        "explanation": "Reduced first-pass metabolism, due to less hepatic extraction, increases the fraction of an oral drug reaching systemic circulation."
    },
    {
        "id": 474,
        "question": "Which receptor type is directly coupled to ion channels?",
        "options": [
            "Ligand-gated ion channels",
            "G-protein-coupled receptors",
            "Nuclear receptors",
            "Tyrosine kinase receptors"
        ],
        "answer": "Ligand-gated ion channels",
        "difficulty": "easy",
        "topic": "Pharmacodynamics",
        "explanation": "Ligand-gated ion channels, such as nicotinic acetylcholine receptors, open or close ion channels upon ligand binding."
    },
    {
        "id": 475,
        "question": "What is the effect of a competitive antagonist on a drug's dose-response curve?",
        "options": [
            "Shifts it to the right",
            "Shifts it to the left",
            "Reduces the maximum response",
            "No change"
        ],
        "answer": "Shifts it to the right",
        "difficulty": "medium",
        "topic": "Pharmacodynamics",
        "explanation": "A competitive antagonist competes for the same receptor, requiring higher agonist doses, shifting the dose-response curve rightward."
    },
    {
        "id": 476,
        "question": "Which drug's toxicity is managed with N-acetylcysteine?",
        "options": [
            "Acetaminophen",
            "Methotrexate",
            "Digoxin",
            "Warfarin"
        ],
        "answer": "Acetaminophen",
        "difficulty": "easy",
        "topic": "Toxicology",
        "explanation": "N-acetylcysteine replenishes glutathione, detoxifying acetaminophen's toxic metabolite in overdose."
    },
    {
        "id": 477,
        "question": "Which symptom is associated with organophosphate poisoning?",
        "options": [
            "Salivation",
            "Tachycardia",
            "Mydriasis",
            "Dry mouth"
        ],
        "answer": "Salivation",
        "difficulty": "medium",
        "topic": "Toxicology",
        "explanation": "Organophosphates inhibit acetylcholinesterase, causing cholinergic excess, leading to salivation and other SLUDGE symptoms."
    },
    {
        "id": 478,
        "question": "Which drug is used to treat rheumatoid arthritis with minimal gastrointestinal side effects?",
        "options": [
            "Celecoxib",
            "Ibuprofen",
            "Methotrexate",
            "Prednisone"
        ],
        "answer": "Celecoxib",
        "difficulty": "medium",
        "topic": "Therapeutics",
        "explanation": "Celecoxib, a COX-2 selective inhibitor, reduces inflammation in rheumatoid arthritis with fewer GI side effects than non-selective NSAIDs."
    },
    {
        "id": 479,
        "question": "Which drug is preferred for type 2 diabetes with cardiovascular benefits?",
        "options": [
            "Empagliflozin",
            "Metformin",
            "Insulin",
            "Sulfonylurea"
        ],
        "answer": "Empagliflozin",
        "difficulty": "medium",
        "topic": "Therapeutics",
        "explanation": "Empagliflozin, an SGLT2 inhibitor, reduces cardiovascular events and heart failure hospitalization in type 2 diabetes."
    },
    {
        "id": 480,
        "question": "Which biomarker is monitored to adjust warfarin dosing?",
        "options": [
            "INR",
            "HbA1c",
            "Creatinine clearance",
            "Liver enzymes"
        ],
        "answer": "INR",
        "difficulty": "easy",
        "topic": "Clinical Pharmacology",
        "explanation": "INR (International Normalized Ratio) monitors warfarin's anticoagulant effect, guiding dose adjustments."
    },
    {
        "id": 481,
        "question": "Which trial design minimizes bias in drug efficacy studies?",
        "options": [
            "Double-blind randomized controlled trial",
            "Open-label trial",
            "Case-control study",
            "Cohort study"
        ],
        "answer": "Double-blind randomized controlled trial",
        "difficulty": "medium",
        "topic": "Clinical Pharmacology",
        "explanation": "Double-blind RCTs reduce bias by blinding participants and researchers, ensuring unbiased efficacy assessment."
    },
    {
        "id": 482,
        "question": "Which second messenger is activated by Gq-coupled receptors?",
        "options": [
            "Inositol trisphosphate (IP3)",
            "cAMP",
            "cGMP",
            "Calcium"
        ],
        "answer": "Inositol trisphosphate (IP3)",
        "difficulty": "medium",
        "topic": "Molecular Pharmacology",
        "explanation": "Gq-coupled receptors activate phospholipase C, producing IP3, which releases calcium from intracellular stores."
    },
    {
        "id": 483,
        "question": "Which enzyme is targeted by sildenafil in erectile dysfunction treatment?",
        "options": [
            "Phosphodiesterase-5",
            "Cyclooxygenase",
            "HMG-CoA reductase",
            "Angiotensin-converting enzyme"
        ],
        "answer": "Phosphodiesterase-5",
        "difficulty": "easy",
        "topic": "Molecular Pharmacology",
        "explanation": "Sildenafil inhibits PDE-5, increasing cGMP levels, promoting smooth muscle relaxation in erectile dysfunction."
    },
    {
        "id": 484,
        "question": "Which drug reduces anxiety by enhancing GABA receptor activity?",
        "options": [
            "Diazepam",
            "Fluoxetine",
            "Haloperidol",
            "Methylphenidate"
        ],
        "answer": "Diazepam",
        "difficulty": "easy",
        "topic": "Behavioral Pharmacology",
        "explanation": "Diazepam, a benzodiazepine, enhances GABA receptor activity, reducing anxiety by increasing inhibitory neurotransmission."
    },
    {
        "id": 485,
        "question": "Which drug is used to treat opioid dependence by acting as a partial opioid agonist?",
        "options": [
            "Buprenorphine",
            "Naloxone",
            "Methadone",
            "Naltrexone"
        ],
        "answer": "Buprenorphine",
        "difficulty": "medium",
        "topic": "Behavioral Pharmacology",
        "explanation": "Buprenorphine, a partial opioid agonist, reduces cravings and withdrawal symptoms in opioid dependence."
    },
    {
        "id": 486,
        "question": "Which drug treats ADHD by increasing dopamine and norepinephrine levels?",
        "options": [
            "Methylphenidate",
            "Lorazepam",
            "Sertraline",
            "Bupropion"
        ],
        "answer": "Methylphenidate",
        "difficulty": "medium",
        "topic": "Behavioral Pharmacology",
        "explanation": "Methylphenidate, a stimulant, increases dopamine and norepinephrine in the prefrontal cortex, improving attention in ADHD."
    },
    {
        "id": 487,
        "question": "Which drug is used for smoking cessation by acting as a nicotinic receptor partial agonist?",
        "options": [
            "Varenicline",
            "Bupropion",
            "Nicotine patch",
            "Clonidine"
        ],
        "answer": "Varenicline",
        "difficulty": "medium",
        "topic": "Behavioral Pharmacology",
        "explanation": "Varenicline, a nicotinic receptor partial agonist, reduces nicotine cravings and withdrawal symptoms, aiding smoking cessation."
    },
    {
        "id": 488,
        "question": "Which drug is used to treat epilepsy by blocking sodium channels?",
        "options": [
            "Phenytoin",
            "Diazepam",
            "Levetiracetam",
            "Gabapentin"
        ],
        "answer": "Phenytoin",
        "difficulty": "easy",
        "topic": "Neuropharmacology",
        "explanation": "Phenytoin blocks voltage-gated sodium channels, stabilizing neuronal membranes to prevent seizures."
    },
    {
        "id": 489,
        "question": "Which drug treats Parkinson's disease by acting as a dopamine agonist?",
        "options": [
            "Pramipexole",
            "Levodopa",
            "Selegiline",
            "Amantadine"
        ],
        "answer": "Pramipexole",
        "difficulty": "medium",
        "topic": "Neuropharmacology",
        "explanation": "Pramipexole, a dopamine agonist, activates dopamine receptors, improving motor symptoms in Parkinson's disease."
    },
    {
        "id": 490,
        "question": "Which drug is used to treat acute ischemic stroke?",
        "options": [
            "Alteplase",
            "Clopidogrel",
            "Warfarin",
            "Nimodipine"
        ],
        "answer": "Alteplase",
        "difficulty": "medium",
        "topic": "Neuropharmacology",
        "explanation": "Alteplase, a thrombolytic, dissolves clots in acute ischemic stroke, restoring cerebral blood flow if given within the time window."
    },
    {
        "id": 491,
        "question": "Which drug prevents migraines by blocking CGRP receptors?",
        "options": [
            "Erenumab",
            "Propranolol",
            "Topiramate",
            "Sumatriptan"
        ],
        "answer": "Erenumab",
        "difficulty": "medium",
        "topic": "Neuropharmacology",
        "explanation": "Erenumab, a monoclonal antibody, blocks CGRP receptors, preventing migraine attacks."
    },
    {
        "id": 492,
        "question": "Which drug is used to treat stable angina in coronary artery disease?",
        "options": [
            "Ivabradine",
            "Furosemide",
            "Apixaban",
            "Digoxin"
        ],
        "answer": "Ivabradine",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Ivabradine reduces heart rate by inhibiting the funny current, relieving angina in coronary artery disease."
    },
    {
        "id": 493,
        "question": "Which drug interaction increases bleeding risk in patients on apixaban for atrial fibrillation?",
        "options": [
            "Apixaban and diltiazem",
            "Apixaban and metoprolol",
            "Apixaban and lisinopril",
            "Apixaban and furosemide"
        ],
        "answer": "Apixaban and diltiazem",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Diltiazem, a CYP3A4 inhibitor, increases apixaban levels, raising bleeding risk in atrial fibrillation patients."
    },
    {
        "id": 494,
        "question": "Which drug reduces preload in acute heart failure?",
        "options": [
            "Nesiritide",
            "Carvedilol",
            "Warfarin",
            "Ticagrelor"
        ],
        "answer": "Nesiritide",
        "difficulty": "medium",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Nesiritide, a recombinant BNP, reduces preload by promoting vasodilation and natriuresis in acute heart failure."
    },
    {
        "id": 495,
        "question": "What is a common side effect of valsartan in heart failure treatment?",
        "options": [
            "Hyperkalemia",
            "Bradycardia",
            "Dry cough",
            "Myalgia"
        ],
        "answer": "Hyperkalemia",
        "difficulty": "easy",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Valsartan, an ARB, reduces aldosterone, leading to hyperkalemia as a side effect in heart failure treatment."
    },
    {
        "id": 496,
        "question": "Which drug interaction increases lithium toxicity?",
        "options": [
            "Lithium and hydrochlorothiazide",
            "Lithium and fluoxetine",
            "Lithium and lorazepam",
            "Lithium and omeprazole"
        ],
        "answer": "Lithium and hydrochlorothiazide",
        "difficulty": "hard",
        "topic": "Drug Interactions",
        "explanation": "Hydrochlorothiazide reduces lithium clearance, increasing serum lithium levels and toxicity risk."
    },
    {
        "id": 497,
        "question": "Which drug interaction enhances the hypotensive effect of losartan?",
        "options": [
            "Losartan and aliskiren",
            "Losartan and aspirin",
            "Losartan and metformin",
            "Losartan and atorvastatin"
        ],
        "answer": "Losartan and aliskiren",
        "difficulty": "hard",
        "topic": "Drug Interactions",
        "explanation": "Aliskiren, a renin inhibitor, enhances losartan's RAAS blockade, increasing the risk of hypotension."
    },
    {
        "id": 498,
        "question": "Which drug treats hypothyroidism by replacing thyroid hormone?",
        "options": [
            "Levothyroxine",
            "Methimazole",
            "Propylthiouracil",
            "Liothyronine"
        ],
        "answer": "Levothyroxine",
        "difficulty": "easy",
        "topic": "Endocrine Pharmacology",
        "explanation": "Levothyroxine, a synthetic T4, replaces thyroid hormone in hypothyroidism, normalizing metabolic function."
    },
    {
        "id": 499,
        "question": "Which drug is used to treat Cushing's syndrome by inhibiting cortisol synthesis?",
        "options": [
            "Ketoconazole",
            "Hydrocortisone",
            "Fludrocortisone",
            "Dexamethasone"
        ],
        "answer": "Ketoconazole",
        "difficulty": "medium",
        "topic": "Endocrine Pharmacology",
        "explanation": "Ketoconazole inhibits adrenal steroidogenesis, reducing cortisol levels in Cushing's syndrome."
    },
    {
        "id": 500,
        "question": "Which drug treats peptic ulcer disease by inhibiting gastric acid secretion?",
        "options": [
            "Omeprazole",
            "Sucralfate",
            "Misoprostol",
            "Bismuth subsalicylate"
        ],
        "answer": "Omeprazole",
        "difficulty": "easy",
        "topic": "Gastrointestinal Pharmacology",
        "explanation": "Omeprazole, a proton pump inhibitor, irreversibly blocks the H+/K+-ATPase, reducing gastric acid secretion."
    },
    {
        "id": 501,
        "question": "Which drug is used to treat inflammatory bowel disease by reducing inflammation?",
        "options": [
            "Mesalamine",
            "Loperamide",
            "Ondansetron",
            "Metoclopramide"
        ],
        "answer": "Mesalamine",
        "difficulty": "medium",
        "topic": "Gastrointestinal Pharmacology",
        "explanation": "Mesalamine, an aminosalicylate, reduces inflammation in inflammatory bowel disease by inhibiting prostaglandin synthesis."
    },
    {
        "id": 502,
        "question": "Which drug treats nausea and vomiting by blocking dopamine receptors?",
        "options": [
            "Metoclopramide",
            "Ranitidine",
            "Lansoprazole",
            "Dicyclomine"
        ],
        "answer": "Metoclopramide",
        "difficulty": "medium",
        "topic": "Gastrointestinal Pharmacology",
        "explanation": "Metoclopramide blocks D2 dopamine receptors, reducing nausea and promoting gastric emptying."
    },
    {
        "id": 503,
        "question": "Which drug is used to treat constipation by acting as an osmotic laxative?",
        "options": [
            "Polyethylene glycol",
            "Bisacodyl",
            "Docusate",
            "Senna"
        ],
        "answer": "Polyethylene glycol",
        "difficulty": "easy",
        "topic": "Gastrointestinal Pharmacology",
        "explanation": "Polyethylene glycol draws water into the colon, softening stools and relieving constipation."
    },
    {
        "id": 504,
        "question": "Which drug treats asthma by acting as a leukotriene receptor antagonist?",
        "options": [
            "Montelukast",
            "Albuterol",
            "Ipratropium",
            "Budesonide"
        ],
        "answer": "Montelukast",
        "difficulty": "easy",
        "topic": "Respiratory Pharmacology",
        "explanation": "Montelukast blocks leukotriene receptors, reducing bronchoconstriction and inflammation in asthma."
    },
    {
        "id": 505,
        "question": "Which drug is used for acute asthma exacerbation?",
        "options": [
            "Salbutamol",
            "Fluticasone",
            "Theophylline",
            "Cromolyn"
        ],
        "answer": "Salbutamol",
        "difficulty": "medium",
        "topic": "Respiratory Pharmacology",
        "explanation": "Salbutamol, a short-acting beta-2 agonist, relieves acute asthma symptoms by causing bronchodilation."
    },
    {
        "id": 506,
        "question": "Which drug treats chronic obstructive pulmonary disease by acting as a long-acting muscarinic antagonist?",
        "options": [
            "Tiotropium",
            "Salmeterol",
            "Beclomethasone",
            "Zafirlukast"
        ],
        "answer": "Tiotropium",
        "difficulty": "medium",
        "topic": "Respiratory Pharmacology",
        "explanation": "Tiotropium, a LAMA, promotes bronchodilation in COPD by blocking muscarinic receptors."
    },
    {
        "id": 507,
        "question": "Which drug is used to treat pulmonary arterial hypertension?",
        "options": [
            "Bosentan",
            "Albuterol",
            "Prednisone",
            "Ipratropium"
        ],
        "answer": "Bosentan",
        "difficulty": "medium",
        "topic": "Respiratory Pharmacology",
        "explanation": "Bosentan, an endothelin receptor antagonist, reduces pulmonary vascular resistance in pulmonary arterial hypertension."
    },
    {
        "id": 508,
        "question": "Which drug promotes diuresis in acute kidney injury?",
        "options": [
            "Mannitol",
            "Spironolactone",
            "Acetazolamide",
            "Amiloride"
        ],
        "answer": "Mannitol",
        "difficulty": "easy",
        "topic": "Renal Pharmacology",
        "explanation": "Mannitol, an osmotic diuretic, promotes diuresis in acute kidney injury by increasing tubular fluid osmolarity."
    },
    {
        "id": 509,
        "question": "Which drug treats hyperkalemia by increasing potassium excretion?",
        "options": [
            "Patiromer",
            "Furosemide",
            "Sodium polystyrene sulfonate",
            "Hydrochlorothiazide"
        ],
        "answer": "Sodium polystyrene sulfonate",
        "difficulty": "medium",
        "topic": "Renal Pharmacology",
        "explanation": "Sodium polystyrene sulfonate binds potassium in the gut, increasing its excretion to treat hyperkalemia."
    },
    {
        "id": 510,
        "question": "Which drug is used to manage nephrogenic diabetes insipidus?",
        "options": [
            "Hydrochlorothiazide",
            "Desmopressin",
            "Tolvaptan",
            "Furosemide"
        ],
        "answer": "Hydrochlorothiazide",
        "difficulty": "medium",
        "topic": "Renal Pharmacology",
        "explanation": "Hydrochlorothiazide paradoxically reduces urine output in nephrogenic diabetes insipidus by increasing sodium reabsorption."
    },
    {
        "id": 511,
        "question": "Which drug treats renal tubular acidosis by generating bicarbonate?",
        "options": [
            "Sodium bicarbonate",
            "Acetazolamide",
            "Spironolactone",
            "Mannitol"
        ],
        "answer": "Sodium bicarbonate",
        "difficulty": "medium",
        "topic": "Renal Pharmacology",
        "explanation": "Sodium bicarbonate corrects acidosis in renal tubular acidosis by providing bicarbonate to buffer excess hydrogen ions."
    },
    {
        "id": 512,
        "question": "Which drug treats rheumatoid arthritis by inhibiting TNF-alpha?",
        "options": [
            "Adalimumab",
            "Methotrexate",
            "Cyclosporine",
            "Azathioprine"
        ],
        "answer": "Adalimumab",
        "difficulty": "easy",
        "topic": "Immunopharmacology",
        "explanation": "Adalimumab, a monoclonal antibody, inhibits TNF-alpha, reducing inflammation in rheumatoid arthritis."
    },
    {
        "id": 513,
        "question": "Which drug is used to prevent organ transplant rejection?",
        "options": [
            "Tacrolimus",
            "Prednisone",
            "Cyclophosphamide",
            "Rituximab"
        ],
        "answer": "Tacrolimus",
        "difficulty": "medium",
        "topic": "Immunopharmacology",
        "explanation": "Tacrolimus, a calcineurin inhibitor, prevents T-cell activation, reducing the risk of organ transplant rejection."
    },
    {
        "id": 514,
        "question": "Which drug treats systemic lupus erythematosus by suppressing the immune response?",
        "options": [
            "Hydroxychloroquine",
            "Infliximab",
            "Etanercept",
            "Abatacept"
        ],
        "answer": "Hydroxychloroquine",
        "difficulty": "medium",
        "topic": "Immunopharmacology",
        "explanation": "Hydroxychloroquine modulates immune responses, reducing inflammation in systemic lupus erythematosus."
    },
    {
        "id": 515,
        "question": "Which drug is used to treat allergic reactions by stabilizing mast cells?",
        "options": [
            "Cromolyn sodium",
            "Diphenhydramine",
            "Epinephrine",
            "Cetirizine"
        ],
        "answer": "Cromolyn sodium",
        "difficulty": "medium",
        "topic": "Immunopharmacology",
        "explanation": "Cromolyn sodium stabilizes mast cells, preventing histamine release in allergic reactions."
    },
    {
        "id": 516,
        "question": "Which drug treats breast cancer by inhibiting estrogen receptors?",
        "options": [
            "Tamoxifen",
            "Trastuzumab",
            "Doxorubicin",
            "Cyclophosphamide"
        ],
        "answer": "Tamoxifen",
        "difficulty": "easy",
        "topic": "Chemotherapy",
        "explanation": "Tamoxifen, a selective estrogen receptor modulator, inhibits estrogen-driven tumor growth in breast cancer."
    },
    {
        "id": 517,
        "question": "Which drug is used to treat chronic myeloid leukemia by inhibiting BCR-ABL kinase?",
        "options": [
            "Imatinib",
            "Rituximab",
            "Vincristine",
            "Methotrexate"
        ],
        "answer": "Imatinib",
        "difficulty": "medium",
        "topic": "Chemotherapy",
        "explanation": "Imatinib inhibits BCR-ABL tyrosine kinase, targeting leukemic cells in chronic myeloid leukemia."
    },
    {
        "id": 518,
        "question": "Which drug treats colorectal cancer by inhibiting DNA synthesis?",
        "options": [
            "Fluorouracil",
            "Bevacizumab",
            "Cetuximab",
            "Oxaliplatin"
        ],
        "answer": "Fluorouracil",
        "difficulty": "medium",
        "topic": "Chemotherapy",
        "explanation": "Fluorouracil, a pyrimidine analog, inhibits thymidylate synthase, blocking DNA synthesis in colorectal cancer."
    },
    {
        "id": 519,
        "question": "Which drug is used to treat non-Hodgkin lymphoma by targeting CD20?",
        "options": [
            "Rituximab",
            "Doxorubicin",
            "Cyclophosphamide",
            "Vincristine"
        ],
        "answer": "Rituximab",
        "difficulty": "medium",
        "topic": "Chemotherapy",
        "explanation": "Rituximab, a monoclonal antibody, targets CD20 on B-cells, inducing apoptosis in non-Hodgkin lymphoma."
    },
    {
        "id": 520,
        "question": "Which drug treats bacterial pneumonia by inhibiting protein synthesis?",
        "options": [
            "Azithromycin",
            "Ceftriaxone",
            "Vancomycin",
            "Metronidazole"
        ],
        "answer": "Azithromycin",
        "difficulty": "easy",
        "topic": "Antimicrobial Pharmacology",
        "explanation": "Azithromycin, a macrolide, binds to the 50S ribosomal subunit, inhibiting bacterial protein synthesis."
    },
    {
        "id": 521,
        "question": "Which drug is used to treat methicillin-resistant *Staphylococcus aureus* infections?",
        "options": [
            "Vancomycin",
            "Amoxicillin",
            "Ciprofloxacin",
            "Doxycycline"
        ],
        "answer": "Vancomycin",
        "difficulty": "medium",
        "topic": "Antimicrobial Pharmacology",
        "explanation": "Vancomycin, a glycopeptide, is effective against MRSA by inhibiting cell wall synthesis."
    },
    {
        "id": 522,
        "question": "Which drug treats uncomplicated urinary tract infections by inhibiting folate synthesis?",
        "options": [
            "Trimethoprim-sulfamethoxazole",
            "Nitrofurantoin",
            "Levofloxacin",
            "Aztreonam"
        ],
        "answer": "Trimethoprim-sulfamethoxazole",
        "difficulty": "medium",
        "topic": "Antimicrobial Pharmacology",
        "explanation": "Trimethoprim-sulfamethoxazole inhibits bacterial folate synthesis, effective against uncomplicated UTIs."
    },
    {
        "id": 523,
        "question": "Which drug is used to treat fungal infections by inhibiting ergosterol synthesis?",
        "options": [
            "Fluconazole",
            "Amphotericin B",
            "Nystatin",
            "Caspofungin"
        ],
        "answer": "Fluconazole",
        "difficulty": "medium",
        "topic": "Antimicrobial Pharmacology",
        "explanation": "Fluconazole inhibits lanosterol 14-alpha-demethylase, disrupting ergosterol synthesis in fungal cell membranes."
    },
    {
        "id": 524,
        "question": "Which drug treats postoperative pain by acting as a COX inhibitor?",
        "options": [
            "Ketorolac",
            "Morphine",
            "Lidocaine",
            "Gabapentin"
        ],
        "answer": "Ketorolac",
        "difficulty": "easy",
        "topic": "Anesthetics and Pain Management",
        "explanation": "Ketorolac, an NSAID, inhibits COX enzymes, reducing prostaglandin-mediated pain and inflammation post-surgery."
    },
    {
        "id": 525,
        "question": "Which drug is used for general anesthesia by enhancing GABA activity?",
        "options": [
            "Propofol",
            "Ketamine",
            "Fentanyl",
            "Midazolam"
        ],
        "answer": "Propofol",
        "difficulty": "medium",
        "topic": "Anesthetics and Pain Management",
        "explanation": "Propofol enhances GABA-A receptor activity, inducing rapid-onset anesthesia for surgical procedures."
    },
    {
        "id": 526,
        "question": "Which drug treats neuropathic pain by modulating calcium channels?",
        "options": [
            "Pregabalin",
            "Tramadol",
            "Ibuprofen",
            "Oxycodone"
        ],
        "answer": "Pregabalin",
        "difficulty": "medium",
        "topic": "Anesthetics and Pain Management",
        "explanation": "Pregabalin binds to voltage-gated calcium channels, reducing neurotransmitter release in neuropathic pain."
    },
    {
        "id": 527,
        "question": "Which drug is used as an opioid antagonist in overdose?",
        "options": [
            "Naloxone",
            "Methadone",
            "Buprenorphine",
            "Fentanyl"
        ],
        "answer": "Naloxone",
        "difficulty": "easy",
        "topic": "Anesthetics and Pain Management",
        "explanation": "Naloxone, an opioid receptor antagonist, rapidly reverses opioid effects in overdose situations."
    },
    {
        "id": 528,
        "question": "Which drug treats depression by inhibiting serotonin and norepinephrine reuptake?",
        "options": [
            "Duloxetine",
            "Fluoxetine",
            "Haloperidol",
            "Lorazepam"
        ],
        "answer": "Duloxetine",
        "difficulty": "easy",
        "topic": "Psychoactive Drugs",
        "explanation": "Duloxetine, an SNRI, increases serotonin and norepinephrine levels, improving mood in depression."
    },
    {
        "id": 529,
        "question": "Which drug is used to treat bipolar disorder by stabilizing mood?",
        "options": [
            "Lithium",
            "Sertraline",
            "Olanzapine",
            "Clonazepam"
        ],
        "answer": "Lithium",
        "difficulty": "medium",
        "topic": "Psychoactive Drugs",
        "explanation": "Lithium stabilizes mood in bipolar disorder by modulating neurotransmitter activity and intracellular signaling."
    },
    {
        "id": 530,
        "question": "Which drug treats schizophrenia by blocking dopamine D2 receptors?",
        "options": [
            "Risperidone",
            "Venlafaxine",
            "Bupropion",
            "Zolpidem"
        ],
        "answer": "Risperidone",
        "difficulty": "medium",
        "topic": "Psychoactive Drugs",
        "explanation": "Risperidone, an atypical antipsychotic, blocks D2 and 5-HT2 receptors, reducing psychotic symptoms in schizophrenia."
    },
    {
        "id": 531,
        "question": "Which drug is used to treat alcohol dependence by inhibiting aldehyde dehydrogenase?",
        "options": [
            "Disulfiram",
            "Naltrexone",
            "Acamprosate",
            "Buprenorphine"
        ],
        "answer": "Disulfiram",
        "difficulty": "medium",
        "topic": "Psychoactive Drugs",
        "explanation": "Disulfiram inhibits aldehyde dehydrogenase, causing acetaldehyde buildup, deterring alcohol consumption."
    },
    {
        "id": 532,
        "question": "Which herbal supplement is used to treat mild depression?",
        "options": [
            "St. John's wort",
            "Ginkgo biloba",
            "Echinacea",
            "Valerian"
        ],
        "answer": "St. John's wort",
        "difficulty": "easy",
        "topic": "Herbal and Alternative Medicine",
        "explanation": "St. John's wort is commonly used for mild depression, likely by inhibiting monoamine reuptake."
    },
    {
        "id": 533,
        "question": "Which herbal supplement improves memory and cognitive function?",
        "options": [
            "Ginkgo biloba",
            "Ginseng",
            "Kava",
            "Saw palmetto"
        ],
        "answer": "Ginkgo biloba",
        "difficulty": "medium",
        "topic": "Herbal and Alternative Medicine",
        "explanation": "Ginkgo biloba enhances cerebral blood flow, potentially improving memory and cognition."
    },
    {
        "id": 534,
        "question": "Which herbal remedy is used for benign prostatic hyperplasia?",
        "options": [
            "Saw palmetto",
            "Echinacea",
            "Valerian",
            "Milk thistle"
        ],
        "answer": "Saw palmetto",
        "difficulty": "medium",
        "topic": "Herbal and Alternative Medicine",
        "explanation": "Saw palmetto reduces urinary symptoms in benign prostatic hyperplasia by inhibiting 5-alpha-reductase."
    },
    {
        "id": 535,
        "question": "Which herbal supplement promotes sleep?",
        "options": [
            "Valerian",
            "St. John's wort",
            "Ginseng",
            "Echinacea"
        ],
        "answer": "Valerian",
        "difficulty": "easy",
        "topic": "Herbal and Alternative Medicine",
        "explanation": "Valerian enhances GABA activity, promoting sedation and improving sleep quality."
    },
    {
        "id": 536,
        "question": "Which genetic polymorphism affects warfarin dosing?",
        "options": [
            "CYP2C9",
            "CYP3A4",
            "CYP2D6",
            "CYP1A2"
        ],
        "answer": "CYP2C9",
        "difficulty": "medium",
        "topic": "Pharmacogenomics",
        "explanation": "CYP2C9 polymorphisms reduce warfarin metabolism, requiring lower doses to avoid bleeding risk."
    },
    {
        "id": 537,
        "question": "Which gene variant increases the risk of abacavir hypersensitivity?",
        "options": [
            "HLA-B*5701",
            "CYP2D6",
            "TPMT",
            "UGT1A1"
        ],
        "answer": "HLA-B*5701",
        "difficulty": "hard",
        "topic": "Pharmacogenomics",
        "explanation": "HLA-B*5701 is associated with abacavir hypersensitivity, necessitating genetic screening before treatment."
    },
    {
        "id": 538,
        "question": "Which genetic polymorphism affects codeine efficacy?",
        "options": [
            "CYP2D6",
            "CYP2C19",
            "CYP3A4",
            "VKORC1"
        ],
        "answer": "CYP2D6",
        "difficulty": "medium",
        "topic": "Pharmacogenomics",
        "explanation": "CYP2D6 metabolizes codeine to morphine; poor metabolizers have reduced efficacy, while ultra-rapid metabolizers risk toxicity."
    },
    {
        "id": 539,
        "question": "Which gene influences clopidogrel response?",
        "options": [
            "CYP2C19",
            "CYP2C9",
            "HLA-B",
            "TPMT"
        ],
        "answer": "CYP2C19",
        "difficulty": "medium",
        "topic": "Pharmacogenomics",
        "explanation": "CYP2C19 activates clopidogrel; poor metabolizers have reduced antiplatelet effects, increasing cardiovascular risk."
    },
    {
        "id": 540,
        "question": "Which study design assesses the relationship between drug exposure and rare adverse events?",
        "options": [
            "Case-control study",
            "Randomized controlled trial",
            "Cohort study",
            "Cross-sectional study"
        ],
        "answer": "Case-control study",
        "difficulty": "easy",
        "topic": "Study Design",
        "explanation": "Case-control studies compare drug exposure in cases with adverse events to controls, ideal for rare outcomes."
    },
    {
        "id": 541,
        "question": "Which statistical measure evaluates the strength of association in drug efficacy studies?",
        "options": [
            "Odds ratio",
            "P-value",
            "Confidence interval",
            "Standard deviation"
        ],
        "answer": "Odds ratio",
        "difficulty": "medium",
        "topic": "Study Design",
        "explanation": "Odds ratio measures the strength of association between drug exposure and outcomes in observational studies."
    },
    {
        "id": 542,
        "question": "Which phase of clinical trials assesses drug safety in healthy volunteers?",
        "options": [
            "Phase I",
            "Phase II",
            "Phase III",
            "Phase IV"
        ],
        "answer": "Phase I",
        "difficulty": "easy",
        "topic": "Study Design",
        "explanation": "Phase I trials evaluate drug safety, tolerability, and pharmacokinetics in a small group of healthy volunteers."
    },
    {
        "id": 543,
        "question": "Which drug interaction increases the risk of rhabdomyolysis with rosuvastatin?",
        "options": [
            "Rosuvastatin and cyclosporine",
            "Rosuvastatin and metoprolol",
            "Rosuvastatin and lisinopril",
            "Rosuvastatin and furosemide"
        ],
        "answer": "Rosuvastatin and cyclosporine",
        "difficulty": "hard",
        "topic": "Drug Interactions",
        "explanation": "Cyclosporine inhibits OATP1B1, increasing rosuvastatin levels and rhabdomyolysis risk."
    },
    {
        "id": 544,
        "question": "Which drug interaction reduces the efficacy of oral contraceptives?",
        "options": [
            "Rifampin and ethinyl estradiol",
            "Ibuprofen and ethinyl estradiol",
            "Metformin and ethinyl estradiol",
            "Aspirin and ethinyl estradiol"
        ],
        "answer": "Rifampin and ethinyl estradiol",
        "difficulty": "hard",
        "topic": "Drug Interactions",
        "explanation": "Rifampin induces CYP3A4, increasing metabolism of ethinyl estradiol, reducing contraceptive efficacy."
    },
    {
        "id": 545,
        "question": "What is a common side effect of prednisone in long-term use?",
        "options": [
            "Osteoporosis",
            "Bradycardia",
            "Hypoglycemia",
            "Hypotension"
        ],
        "answer": "Osteoporosis",
        "difficulty": "easy",
        "topic": "Immunopharmacology",
        "explanation": "Prednisone, a corticosteroid, causes bone loss with long-term use, increasing osteoporosis risk."
    },
    {
        "id": 546,
        "question": "Which drug treats gout by inhibiting xanthine oxidase?",
        "options": [
            "Allopurinol",
            "Colchicine",
            "Probenecid",
            "Indomethacin"
        ],
        "answer": "Allopurinol",
        "difficulty": "easy",
        "topic": "Therapeutics",
        "explanation": "Allopurinol inhibits xanthine oxidase, reducing uric acid production in gout treatment."
    },
    {
        "id": 547,
        "question": "Which drug is used to treat osteoporosis by inhibiting osteoclast activity?",
        "options": [
            "Alendronate",
            "Calcitonin",
            "Teriparatide",
            "Raloxifene"
        ],
        "answer": "Alendronate",
        "difficulty": "medium",
        "topic": "Therapeutics",
        "explanation": "Alendronate, a bisphosphonate, inhibits osteoclast-mediated bone resorption, treating osteoporosis."
    },
    {
        "id": 548,
        "question": "Which drug interaction increases the risk of serotonin syndrome with fluoxetine?",
        "options": [
            "Fluoxetine and linezolid",
            "Fluoxetine and propranolol",
            "Fluoxetine and metformin",
            "Fluoxetine and atorvastatin"
        ],
        "answer": "Fluoxetine and linezolid",
        "difficulty": "hard",
        "topic": "Drug Interactions",
        "explanation": "Linezolid, a MAO inhibitor, combined with fluoxetine, an SSRI, increases serotonin levels, risking serotonin syndrome."
    },
    {
        "id": 549,
        "question": "Which drug treats multiple sclerosis by modulating immune responses?",
        "options": [
            "Fingolimod",
            "Natalizumab",
            "Interferon beta",
            "Glatiramer"
        ],
        "answer": "Fingolimod",
        "difficulty": "medium",
        "topic": "Immunopharmacology",
        "explanation": "Fingolimod sequesters lymphocytes in lymph nodes, reducing autoimmune activity in multiple sclerosis."
    },
    {
        "id": 550,
        "question": "What is the primary mechanism of ondansetron in preventing nausea?",
        "options": [
            "5-HT3 receptor antagonism",
            "Dopamine receptor blockade",
            "Histamine receptor blockade",
            "Muscarinic receptor blockade"
        ],
        "answer": "5-HT3 receptor antagonism",
        "difficulty": "easy",
        "topic": "Gastrointestinal Pharmacology",
        "explanation": "Ondansetron blocks 5-HT3 receptors, reducing chemotherapy-induced nausea and vomiting."
    },
    {
        "id": 551,
        "question": "Which drug treats tuberculosis by inhibiting mycolic acid synthesis?",
        "options": [
            "Isoniazid",
            "Rifampin",
            "Ethambutol",
            "Pyrazinamide"
        ],
        "answer": "Isoniazid",
        "difficulty": "medium",
        "topic": "Antimicrobial Pharmacology",
        "explanation": "Isoniazid inhibits mycolic acid synthesis, disrupting the mycobacterial cell wall in tuberculosis treatment."
    },
    {
        "id": 552,
        "question": "Which drug is used to treat insomnia by acting as a melatonin receptor agonist?",
        "options": [
            "Ramelteon",
            "Zolpidem",
            "Trazodone",
            "Diphenhydramine"
        ],
        "answer": "Ramelteon",
        "difficulty": "medium",
        "topic": "Psychoactive Drugs",
        "explanation": "Ramelteon, a melatonin receptor agonist, promotes sleep onset in insomnia."
    },
    {
        "id": 553,
        "question": "Which drug treats hypertension in pheochromocytoma patients?",
        "options": [
            "Phenoxybenzamine",
            "Atenolol",
            "Lisinopril",
            "Hydrochlorothiazide"
        ],
        "answer": "Phenoxybenzamine",
        "difficulty": "hard",
        "topic": "Cardiovascular Pharmacology",
        "explanation": "Phenoxybenzamine, an alpha-blocker, controls hypertension in pheochromocytoma by blocking catecholamine effects."
    },
    {
        "id": 554,
        "question": "Which drug is used to treat opioid-induced constipation?",
        "options": [
            "Naloxegol",
            "Loperamide",
            "Docusate",
            "Bisacodyl"
        ],
        "answer": "Naloxegol",
        "difficulty": "medium",
        "topic": "Gastrointestinal Pharmacology",
        "explanation": "Naloxegol, a peripheral opioid receptor antagonist, relieves opioid-induced constipation without affecting analgesia."
    },
    {
        "id": 555,
        "question": "Which drug treats HIV by inhibiting viral protease?",
        "options": [
            "Darunavir",
            "Zidovudine",
            "Efavirenz",
            "Tenofovir"
        ],
        "answer": "Darunavir",
        "difficulty": "medium",
        "topic": "Antimicrobial Pharmacology",
        "explanation": "Darunavir, a protease inhibitor, prevents HIV maturation, reducing viral replication."
    },
    {
        "id": 556,
        "question": "Which drug is used to treat anaphylaxis by acting as an alpha-1 and beta-1 agonist?",
        "options": [
            "Epinephrine",
            "Diphenhydramine",
            "Prednisolone",
            "Albuterol"
        ],
        "answer": "Epinephrine",
        "difficulty": "easy",
        "topic": "Immunopharmacology",
        "explanation": "Epinephrine reverses anaphylaxis by causing vasoconstriction and bronchodilation via alpha-1 and beta-2 agonism."
    },
    {
        "id": 557,
        "question": "What is a common side effect of cisplatin in chemotherapy?",
        "options": [
            "Nephrotoxicity",
            "Hepatotoxicity",
            "Cardiotoxicity",
            "Neurotoxicity"
        ],
        "answer": "Nephrotoxicity",
        "difficulty": "medium",
        "topic": "Chemotherapy",
        "explanation": "Cisplatin causes nephrotoxicity, requiring hydration and monitoring renal function during chemotherapy."
    },
    {
        "id": 558,
        "question": "Which drug treats chronic pain by acting as a weak opioid agonist?",
        "options": [
            "Tramadol",
            "Morphine",
            "Fentanyl",
            "Oxycodone"
        ],
        "answer": "Tramadol",
        "difficulty": "easy",
        "topic": "Anesthetics and Pain Management",
        "explanation": "Tramadol, a weak opioid agonist and SNRI, treats chronic pain with lower dependence risk."
    },
    {
        "id": 559,
        "question": "Which drug is used to treat attention-deficit/hyperactivity disorder by acting as a non-stimulant?",
        "options": [
            "Atomoxetine",
            "Methylphenidate",
            "Amphetamine",
            "Modafinil"
        ],
        "answer": "Atomoxetine",
        "difficulty": "medium",
        "topic": "Behavioral Pharmacology",
        "explanation": "Atomoxetine, a norepinephrine reuptake inhibitor, improves attention in ADHD without stimulant effects."
    },
    {
        "id": 560,
        "question": "Which drug treats Alzheimer's disease by inhibiting cholinesterase?",
        "options": [
            "Donepezil",
            "Memantine",
            "Rivastigmine",
            "Galantamine"
        ],
        "answer": "Donepezil",
        "difficulty": "medium",
        "topic": "Neuropharmacology",
        "explanation": "Donepezil inhibits acetylcholinesterase, increasing acetylcholine levels to improve cognition in Alzheimer's."
    },
    {
        "id": 561,
        "question": "Which drug is used to treat hyperprolactinemia?",
        "options": [
            "Cabergoline",
            "Levodopa",
            "Bromocriptine",
            "Selegiline"
        ],
        "answer": "Cabergoline",
        "difficulty": "medium",
        "topic": "Endocrine Pharmacology",
        "explanation": "Cabergoline, a dopamine agonist, reduces prolactin secretion in hyperprolactinemia."
    },
    {
        "id": 562,
        "question": "Which drug interaction increases digoxin toxicity?",
        "options": [
            "Digoxin and quinidine",
            "Digoxin and aspirin",
            "Digoxin and metformin",
            "Digoxin and atorvastatin"
        ],
        "answer": "Digoxin and quinidine",
        "difficulty": "hard",
        "topic": "Drug Interactions",
        "explanation": "Quinidine reduces digoxin clearance, increasing its plasma levels, risking toxicity."
    },
    {
        "id": 563,
        "question": "Which drug treats glaucoma by increasing aqueous humor outflow?",
        "options": [
            "Latanoprost",
            "Timolol",
            "Acetazolamide",
            "Brimonidine"
        ],
        "answer": "Latanoprost",
        "difficulty": "medium",
        "topic": "Therapeutics",
        "explanation": "Latanoprost, a prostaglandin analog, increases uveoscleral outflow, reducing intraocular pressure."
    },
    {
        "id": 564,
        "question": "Which drug is used to treat erectile dysfunction by inhibiting PDE-5?",
        "options": [
            "Tadalafil",
            "Sildenafil",
            "Vardenafil",
            "Avanafil"
        ],
        "answer": "Tadalafil",
        "difficulty": "easy",
        "topic": "Therapeutics",
        "explanation": "Tadalafil inhibits PDE5, increasing cGMP, promoting vasodilation in erectile dysfunction."
    },
    {
        "id": 565,
        "question": "What is a common side effect of methotrexate in cancer treatment?",
        "options": [
            "Mucositis",
            "Cardiotoxicity",
            "Nephrotoxicity",
            "Ototoxicity"
        ],
        "answer": "Mucositis",
        "difficulty": "medium",
        "topic": "Chemotherapy",
        "explanation": "Methotrexate causes mucositis due to its effect on rapidly dividing mucosal cells."
    },
    {
        "id": 566,
        "question": "Which drug is used to treat chronic hepatitis B by inhibiting viral DNA polymerase?",
        "options": [
            "Entecavir",
            "Lamivudine",
            "Adefovir",
            "Tenofovir"
        ],
        "answer": "Entecavir",
        "difficulty": "medium",
        "topic": "Antimicrobial Pharmacology",
        "explanation": "Entecavir inhibits HBV DNA polymerase, reducing viral replication in chronic hepatitis B."
    },
    {
        "id": 567,
        "question": "Which drug treats benign prostatic hyperplasia by inhibiting 5-alpha-reductase?",
        "options": [
            "Finasteride",
            "Tamsulosin",
            "Alfuzosin",
            "Dutasteride"
        ],
        "answer": "Finasteride",
        "difficulty": "easy",
        "topic": "Therapeutics",
        "explanation": "Finasteride inhibits 5-alpha-reductase, reducing dihydrotestosterone levels, shrinking the prostate."
    },
    {
        "id": 568,
        "question": "Which drug is used to treat obesity by inhibiting lipase?",
        "options": [
            "Orlistat",
            "Phentermine",
            "Lorcaserin",
            "Bupropion"
        ],
        "answer": "Orlistat",
        "difficulty": "medium",
        "topic": "Therapeutics",
        "explanation": "Orlistat inhibits pancreatic lipase, reducing fat absorption, aiding weight loss."
    },
    {
        "id": 569,
        "question": "Which drug treats type 2 diabetes by mimicking GLP-1?",
        "options": [
            "Exenatide",
            "Sitaglipt",
            "Canagliflozin",
            "Glimepiride"
        ],
        "answer": "Exenatide",
        "difficulty": "medium",
        "topic": "Endocrine Pharmacology",
        "explanation": "Exenatide, a GLP-1 receptor agonist, enhances glucose-dependent insulin secretion in type 2 diabetes."
    },
    {
        "id": 570,
        "question": "Which drug is used to treat allergic conjunctivitis by acting as an antihistamine?",
        "options": [
            "Olopatadine",
            "Ketotifen",
            "Naphazoline",
            "Tetrizoline"
        ],
        "answer": "Olopatadine",
        "difficulty": "medium",
        "topic": "Immunopharmacology",
        "explanation": "Olopatadine, an antihistamine and mast cell stabilizer, relieves allergic conjunctivitis symptoms."
    }
]
