const QUESTIONS = [
    {
        "id": 1,
        "question": "What is the primary function of red blood cells in the human body?",
        "options": [
            "Transport oxygen",
            "Fight infections",
            "Clot blood",
            "Produce antibodies"
        ],
        "answer": "Transport oxygen",
        "difficulty": "easy",
        "topic": "Red Blood Cells",
        "explanation": "Red blood cells contain hemoglobin, which binds oxygen in the lungs and transports it to tissues throughout the body."
    },
    {
        "id": 2,
        "question": "Which component of blood is primarily responsible for clotting?",
        "options": [
            "Red blood cells",
            "White blood cells",
            "Platelets",
            "Plasma"
        ],
        "answer": "Platelets",
        "difficulty": "easy",
        "topic": "Blood Clotting",
        "explanation": "Platelets are small cell fragments that play a key role in hemostasis by forming clots to stop bleeding."
    },
    {
        "id": 3,
        "question": "What is the most common type of anemia?",
        "options": [
            "Sickle cell anemia",
            "Iron deficiency anemia",
            "Aplastic anemia",
            "Megaloblastic anemia"
        ],
        "answer": "Iron deficiency anemia",
        "difficulty": "medium",
        "topic": "Anemia",
        "explanation": "Iron deficiency anemia is the most common type, caused by insufficient iron for hemoglobin production, leading to reduced oxygen-carrying capacity."
    },
    {
        "id": 4,
        "question": "Which vitamin is essential for the synthesis of clotting factors in the liver?",
        "options": [
            "Vitamin A",
            "Vitamin B12",
            "Vitamin K",
            "Vitamin D"
        ],
        "answer": "Vitamin K",
        "difficulty": "medium",
        "topic": "Blood Clotting",
        "explanation": "Vitamin K is necessary for the production of clotting factors II, VII, IX, and X in the liver, which are critical for blood coagulation."
    },
    {
        "id": 5,
        "question": "What is the normal range for hemoglobin levels in adult males?",
        "options": [
            "10-12 g/dL",
            "12-16 g/dL",
            "13-17 g/dL",
            "18-22 g/dL"
        ],
        "answer": "13-17 g/dL",
        "difficulty": "medium",
        "topic": "Hematologic Parameters",
        "explanation": "Normal hemoglobin levels in adult males typically range from 13 to 17 grams per deciliter, varying slightly by laboratory standards."
    },
    {
        "id": 6,
        "question": "Which blood cell type is primarily involved in immune responses?",
        "options": [
            "Erythrocytes",
            "Leukocytes",
            "Thrombocytes",
            "Megakaryocytes"
        ],
        "answer": "Leukocytes",
        "difficulty": "easy",
        "topic": "White Blood Cells",
        "explanation": "Leukocytes, or white blood cells, are key components of the immune system, defending the body against infections and foreign invaders."
    },
    {
        "id": 7,
        "question": "What is the primary cause of sickle cell anemia?",
        "options": [
            "Vitamin B12 deficiency",
            "Genetic mutation in hemoglobin",
            "Iron overload",
            "Bone marrow failure"
        ],
        "answer": "Genetic mutation in hemoglobin",
        "difficulty": "medium",
        "topic": "Sickle Cell Anemia",
        "explanation": "Sickle cell anemia is caused by a mutation in the HBB gene, leading to abnormal hemoglobin (HbS) that causes red blood cells to sickle."
    },
    {
        "id": 8,
        "question": "Which type of leukemia is most common in children?",
        "options": [
            "Acute lymphoblastic leukemia (ALL)",
            "Chronic lymphocytic leukemia (CLL)",
            "Acute myeloid leukemia (AML)",
            "Chronic myeloid leukemia (CML)"
        ],
        "answer": "Acute lymphoblastic leukemia (ALL)",
        "difficulty": "medium",
        "topic": "Leukemia",
        "explanation": "ALL is the most common leukemia in children, characterized by the rapid proliferation of immature lymphoid cells."
    },
    {
        "id": 9,
        "question": "What is the primary source of erythropoietin in the body?",
        "options": [
            "Liver",
            "Kidneys",
            "Bone marrow",
            "Spleen"
        ],
        "answer": "Kidneys",
        "difficulty": "medium",
        "topic": "Erythropoiesis",
        "explanation": "Erythropoietin, a hormone that stimulates red blood cell production, is primarily produced by the kidneys in response to low oxygen levels."
    },
    {
        "id": 10,
        "question": "Which anticoagulant is commonly used in blood collection tubes for hematology tests?",
        "options": [
            "Heparin",
            "Warfarin",
            "Aspirin",
            "Clopidogrel"
        ],
        "answer": "Heparin",
        "difficulty": "medium",
        "topic": "Laboratory Hematology",
        "explanation": "Heparin is commonly used in blood collection tubes to prevent clotting, allowing accurate hematologic analysis."
    },
    {
        "id": 11,
        "question": "What is the hallmark feature of thalassemia?",
        "options": [
            "Abnormal hemoglobin structure",
            "Reduced hemoglobin synthesis",
            "Increased red blood cell production",
            "Bone marrow suppression"
        ],
        "answer": "Reduced hemoglobin synthesis",
        "difficulty": "medium",
        "topic": "Thalassemia",
        "explanation": "Thalassemia is characterized by reduced or absent synthesis of one or more globin chains, leading to imbalanced hemoglobin production."
    },
    {
        "id": 12,
        "question": "Which white blood cell type is most abundant in a healthy individual?",
        "options": [
            "Lymphocytes",
            "Neutrophils",
            "Eosinophils",
            "Basophils"
        ],
        "answer": "Neutrophils",
        "difficulty": "easy",
        "topic": "White Blood Cells",
        "explanation": "Neutrophils are the most abundant white blood cells, making up 50-70% of the total white blood cell count in healthy individuals."
    },
    {
        "id": 13,
        "question": "What is the primary role of plasma in blood?",
        "options": [
            "Oxygen transport",
            "Immune defense",
            "Nutrient and waste transport",
            "Blood clotting"
        ],
        "answer": "Nutrient and waste transport",
        "difficulty": "easy",
        "topic": "Plasma",
        "explanation": "Plasma, the liquid component of blood, transports nutrients, hormones, and waste products, while also aiding in temperature regulation."
    },
    {
        "id": 14,
        "question": "Which condition is characterized by an abnormally high red blood cell count?",
        "options": [
            "Anemia",
            "Polycythemia",
            "Leukopenia",
            "Thrombocytopenia"
        ],
        "answer": "Polycythemia",
        "difficulty": "medium",
        "topic": "Polycythemia",
        "explanation": "Polycythemia is a condition where there is an increased number of red blood cells, often leading to increased blood viscosity."
    },
    {
        "id": 15,
        "question": "What is the primary site of hematopoiesis in adults?",
        "options": [
            "Liver",
            "Spleen",
            "Bone marrow",
            "Lymph nodes"
        ],
        "answer": "Bone marrow",
        "difficulty": "easy",
        "topic": "Hematopoiesis",
        "explanation": "In adults, hematopoiesis primarily occurs in the bone marrow, where all blood cells are produced from hematopoietic stem cells."
    },
    {
        "id": 16,
        "question": "Which test is used to measure the time it takes for blood to clot?",
        "options": [
            "Complete blood count (CBC)",
            "Prothrombin time (PT)",
            "Erythrocyte sedimentation rate (ESR)",
            "Reticulocyte count"
        ],
        "answer": "Prothrombin time (PT)",
        "difficulty": "medium",
        "topic": "Coagulation Tests",
        "explanation": "Prothrombin time (PT) measures the time it takes for blood to clot, assessing the extrinsic and common coagulation pathways."
    },
    {
        "id": 17,
        "question": "What is the primary cause of hemophilia?",
        "options": [
            "Vitamin K deficiency",
            "Genetic mutation affecting clotting factors",
            "Bone marrow dysfunction",
            "Iron deficiency"
        ],
        "answer": "Genetic mutation affecting clotting factors",
        "difficulty": "medium",
        "topic": "Hemophilia",
        "explanation": "Hemophilia is caused by mutations in genes encoding clotting factors, typically factor VIII (hemophilia A) or factor IX (hemophilia B)."
    },
    {
        "id": 18,
        "question": "Which type of white blood cell is primarily involved in allergic reactions?",
        "options": [
            "Neutrophils",
            "Lymphocytes",
            "Eosinophils",
            "Monocytes"
        ],
        "answer": "Eosinophils",
        "difficulty": "medium",
        "topic": "White Blood Cells",
        "explanation": "Eosinophils are primarily involved in allergic reactions and parasitic infections, releasing mediators like histamine."
    },
    {
        "id": 19,
        "question": "What is the normal range for platelet count in a healthy adult?",
        "options": [
            "50,000-100,000 per microliter",
            "150,000-450,000 per microliter",
            "500,000-800,000 per microliter",
            "1,000,000-1,500,000 per microliter"
        ],
        "answer": "150,000-450,000 per microliter",
        "difficulty": "medium",
        "topic": "Hematologic Parameters",
        "explanation": "A normal platelet count in healthy adults ranges from 150,000 to 450,000 per microliter, essential for proper clotting."
    },
    {
        "id": 20,
        "question": "Which condition is associated with an increased risk of thrombosis?",
        "options": [
            "Hemophilia",
            "Thrombophilia",
            "Anemia",
            "Leukopenia"
        ],
        "answer": "Thrombophilia",
        "difficulty": "medium",
        "topic": "Thrombophilia",
        "explanation": "Thrombophilia is a condition that increases the tendency to form blood clots, leading to a higher risk of thrombosis."
    },
    {
        "id": 21,
        "question": "Which protein is the primary oxygen-carrying molecule in red blood cells?",
        "options": [
            "Myoglobin",
            "Hemoglobin",
            "Albumin",
            "Ferritin"
        ],
        "answer": "Hemoglobin",
        "difficulty": "easy",
        "topic": "Red Blood Cells",
        "explanation": "Hemoglobin is the iron-containing protein in red blood cells that binds and transports oxygen from the lungs to tissues."
    },
    {
        "id": 22,
        "question": "What is the primary treatment for severe hemophilia?",
        "options": [
            "Iron supplementation",
            "Blood transfusion",
            "Clotting factor replacement",
            "Antibiotic therapy"
        ],
        "answer": "Clotting factor replacement",
        "difficulty": "medium",
        "topic": "Hemophilia",
        "explanation": "Clotting factor replacement therapy is the primary treatment for severe hemophilia, providing the missing clotting factors."
    },
    {
        "id": 23,
        "question": "Which type of anemia is caused by vitamin B12 deficiency?",
        "options": [
            "Sickle cell anemia",
            "Iron deficiency anemia",
            "Megaloblastic anemia",
            "Aplastic anemia"
        ],
        "answer": "Megaloblastic anemia",
        "difficulty": "medium",
        "topic": "Anemia",
        "explanation": "Megaloblastic anemia is caused by deficiencies in vitamin B12 or folate, leading to impaired DNA synthesis and large, immature red blood cells."
    },
    {
        "id": 24,
        "question": "What is the role of the spleen in hematology?",
        "options": [
            "Produces red blood cells",
            "Filters and removes old blood cells",
            "Synthesizes hemoglobin",
            "Stores clotting factors"
        ],
        "answer": "Filters and removes old blood cells",
        "difficulty": "medium",
        "topic": "Spleen Function",
        "explanation": "The spleen filters blood, removing old or damaged red blood cells and platelets, and also plays a role in immune function."
    },
    {
        "id": 25,
        "question": "Which marker is used to diagnose acute myeloid leukemia (AML)?",
        "options": [
            "BCR-ABL fusion gene",
            "CD19 expression",
            "Myeloperoxidase positivity",
            "JAK2 mutation"
        ],
        "answer": "Myeloperoxidase positivity",
        "difficulty": "hard",
        "topic": "Leukemia",
        "explanation": "Myeloperoxidase positivity in blast cells is a hallmark of AML, distinguishing it from other leukemias like ALL."
    },
    {
        "id": 26,
        "question": "What is the primary cause of aplastic anemia?",
        "options": [
            "Iron deficiency",
            "Bone marrow failure",
            "Hemoglobin mutation",
            "Vitamin K deficiency"
        ],
        "answer": "Bone marrow failure",
        "difficulty": "medium",
        "topic": "Aplastic Anemia",
        "explanation": "Aplastic anemia results from bone marrow failure, leading to reduced production of all blood cell types."
    },
    {
        "id": 27,
        "question": "Which coagulation factor is deficient in hemophilia A?",
        "options": [
            "Factor VII",
            "Factor VIII",
            "Factor IX",
            "Factor X"
        ],
        "answer": "Factor VIII",
        "difficulty": "medium",
        "topic": "Hemophilia",
        "explanation": "Hemophilia A is caused by a deficiency in factor VIII, a critical component of the intrinsic coagulation pathway."
    },
    {
        "id": 28,
        "question": "What is the primary function of basophils in the immune system?",
        "options": [
            "Phagocytosis",
            "Antibody production",
            "Histamine release",
            "Oxygen transport"
        ],
        "answer": "Histamine release",
        "difficulty": "medium",
        "topic": "White Blood Cells",
        "explanation": "Basophils release histamine and other mediators, contributing to allergic responses and inflammation."
    },
    {
        "id": 29,
        "question": "Which condition is characterized by a low white blood cell count?",
        "options": [
            "Leukocytosis",
            "Leukopenia",
            "Polycythemia",
            "Thrombocytosis"
        ],
        "answer": "Leukopenia",
        "difficulty": "medium",
        "topic": "White Blood Cells",
        "explanation": "Leukopenia is a condition characterized by a reduced white blood cell count, increasing infection risk."
    },
    {
        "id": 30,
        "question": "What is the primary storage site for iron in the body?",
        "options": [
            "Liver",
            "Spleen",
            "Bone marrow",
            "Ferritin"
        ],
        "answer": "Ferritin",
        "difficulty": "medium",
        "topic": "Iron Metabolism",
        "explanation": "Ferritin is a protein that stores iron in cells, particularly in the liver, spleen, and bone marrow, releasing it as needed."
    },
    {
        "id": 31,
        "question": "Which test measures the oxygen-carrying capacity of blood?",
        "options": [
            "Hematocrit",
            "Reticulocyte count",
            "Platelet count",
            "ESR"
        ],
        "answer": "Hematocrit",
        "difficulty": "medium",
        "topic": "Hematologic Parameters",
        "explanation": "Hematocrit measures the proportion of red blood cells in blood, reflecting its oxygen-carrying capacity."
    },
    {
        "id": 32,
        "question": "What is the genetic basis of chronic myeloid leukemia (CML)?",
        "options": [
            "JAK2 mutation",
            "BCR-ABL fusion gene",
            "TP53 mutation",
            "BRCA1 mutation"
        ],
        "answer": "BCR-ABL fusion gene",
        "difficulty": "hard",
        "topic": "Leukemia",
        "explanation": "CML is characterized by the BCR-ABL fusion gene, resulting from the Philadelphia chromosome translocation t(9;22)."
    },
    {
        "id": 33,
        "question": "Which type of anemia is associated with chronic kidney disease?",
        "options": [
            "Iron deficiency anemia",
            "Megaloblastic anemia",
            "Normocytic anemia",
            "Sickle cell anemia"
        ],
        "answer": "Normocytic anemia",
        "difficulty": "hard",
        "topic": "Anemia",
        "explanation": "Chronic kidney disease often causes normocytic anemia due to reduced erythropoietin production, leading to decreased red blood cell synthesis."
    },
    {
        "id": 34,
        "question": "What is the primary function of monocytes in the immune system?",
        "options": [
            "Phagocytosis and antigen presentation",
            "Antibody production",
            "Histamine release",
            "Oxygen transport"
        ],
        "answer": "Phagocytosis and antigen presentation",
        "difficulty": "medium",
        "topic": "White Blood Cells",
        "explanation": "Monocytes differentiate into macrophages and dendritic cells, which phagocytose pathogens and present antigens to T-cells."
    },
    {
        "id": 35,
        "question": "Which condition results from excessive destruction of red blood cells?",
        "options": [
            "Polycythemia",
            "Hemolytic anemia",
            "Aplastic anemia",
            "Thalassemia"
        ],
        "answer": "Hemolytic anemia",
        "difficulty": "medium",
        "topic": "Anemia",
        "explanation": "Hemolytic anemia is caused by excessive destruction of red blood cells, leading to reduced red blood cell lifespan."
    },
    {
        "id": 36,
        "question": "Which laboratory test is used to monitor warfarin therapy?",
        "options": [
            "Activated partial thromboplastin time (aPTT)",
            "Prothrombin time (PT)/INR",
            "Bleeding time",
            "D-dimer"
        ],
        "answer": "Prothrombin time (PT)/INR",
        "difficulty": "medium",
        "topic": "Coagulation Tests",
        "explanation": "PT/INR is used to monitor warfarin therapy, as warfarin inhibits vitamin K-dependent clotting factors, affecting the extrinsic pathway."
    },
    {
        "id": 37,
        "question": "What is the primary cause of von Willebrand disease?",
        "options": [
            "Deficiency of factor VIII",
            "Deficiency of von Willebrand factor",
            "Deficiency of factor IX",
            "Excessive platelet production"
        ],
        "answer": "Deficiency of von Willebrand factor",
        "difficulty": "medium",
        "topic": "Von Willebrand Disease",
        "explanation": "Von Willebrand disease is caused by a deficiency or dysfunction of von Willebrand factor, which is essential for platelet adhesion and factor VIII stabilization."
    },
    {
        "id": 38,
        "question": "Which type of white blood cell is elevated in parasitic infections?",
        "options": [
            "Neutrophils",
            "Lymphocytes",
            "Eosinophils",
            "Basophils"
        ],
        "answer": "Eosinophils",
        "difficulty": "medium",
        "topic": "White Blood Cells",
        "explanation": "Eosinophils are typically elevated in parasitic infections and allergic conditions due to their role in combating parasites."
    },
    {
        "id": 39,
        "question": "What is the primary component of hemoglobin?",
        "options": [
            "Iron",
            "Calcium",
            "Magnesium",
            "Zinc"
        ],
        "answer": "Iron",
        "difficulty": "easy",
        "topic": "Hemoglobin",
        "explanation": "Hemoglobin contains iron, which binds oxygen in the heme group, enabling oxygen transport in the blood."
    },
    {
        "id": 40,
        "question": "Which condition is associated with an elevated reticulocyte count?",
        "options": [
            "Aplastic anemia",
            "Hemolytic anemia",
            "Iron deficiency anemia",
            "Megaloblastic anemia"
        ],
        "answer": "Hemolytic anemia",
        "difficulty": "hard",
        "topic": "Anemia",
        "explanation": "Hemolytic anemia leads to an elevated reticulocyte count as the bone marrow compensates for increased red blood cell destruction."
    },
    {
        "id": 41,
        "question": "What is the primary role of transferrin in iron metabolism?",
        "options": [
            "Stores iron",
            "Transports iron",
            "Synthesizes hemoglobin",
            "Regulates erythropoiesis"
        ],
        "answer": "Transports iron",
        "difficulty": "medium",
        "topic": "Iron Metabolism",
        "explanation": "Transferrin is a plasma protein that binds and transports iron in the blood to sites of storage or utilization."
    },
    {
        "id": 42,
        "question": "Which type of leukemia is associated with the Philadelphia chromosome?",
        "options": [
            "Acute lymphoblastic leukemia (ALL)",
            "Chronic myeloid leukemia (CML)",
            "Acute myeloid leukemia (AML)",
            "Chronic lymphocytic leukemia (CLL)"
        ],
        "answer": "Chronic myeloid leukemia (CML)",
        "difficulty": "hard",
        "topic": "Leukemia",
        "explanation": "The Philadelphia chromosome, a translocation between chromosomes 9 and 22, is characteristic of CML, producing the BCR-ABL fusion gene."
    },
    {
        "id": 43,
        "question": "What is the primary cause of disseminated intravascular coagulation (DIC)?",
        "options": [
            "Vitamin K deficiency",
            "Widespread activation of clotting",
            "Iron deficiency",
            "Bone marrow suppression"
        ],
        "answer": "Widespread activation of clotting",
        "difficulty": "hard",
        "topic": "Coagulation Disorders",
        "explanation": "DIC is caused by widespread activation of the clotting cascade, leading to consumption of clotting factors and platelets, and subsequent bleeding."
    },
    {
        "id": 44,
        "question": "Which blood group is considered the universal donor?",
        "options": [
            "A negative",
            "B negative",
            "AB positive",
            "O negative"
        ],
        "answer": "O negative",
        "difficulty": "easy",
        "topic": "Blood Groups",
        "explanation": "O negative blood lacks A, B, and Rh antigens, making it compatible with all blood types, hence the universal donor."
    },
    {
        "id": 45,
        "question": "What is the primary function of the fibrinolytic system?",
        "options": [
            "Promote clot formation",
            "Dissolve blood clots",
            "Produce red blood cells",
            "Regulate immune responses"
        ],
        "answer": "Dissolve blood clots",
        "difficulty": "medium",
        "topic": "Fibrinolysis",
        "explanation": "The fibrinolytic system, primarily through plasmin, breaks down fibrin clots to prevent excessive clotting and maintain vascular patency."
    },
    {
        "id": 46,
        "question": "Which condition is characterized by large, immature red blood cells?",
        "options": [
            "Sickle cell anemia",
            "Megaloblastic anemia",
            "Iron deficiency anemia",
            "Hemolytic anemia"
        ],
        "answer": "Megaloblastic anemia",
        "difficulty": "medium",
        "topic": "Anemia",
        "explanation": "Megaloblastic anemia is characterized by large, immature red blood cells due to impaired DNA synthesis from vitamin B12 or folate deficiency."
    },
    {
        "id": 47,
        "question": "What is the primary source of vitamin B12 in the diet?",
        "options": [
            "Fruits",
            "Vegetables",
            "Animal products",
            "Grains"
        ],
        "answer": "Animal products",
        "difficulty": "easy",
        "topic": "Vitamin B12",
        "explanation": "Vitamin B12 is primarily found in animal products such as meat, dairy, and eggs, and is essential for red blood cell production."
    },
    {
        "id": 48,
        "question": "Which condition is associated with a prolonged activated partial thromboplastin time (aPTT)?",
        "options": [
            "Hemophilia",
            "Thrombophilia",
            "Polycythemia",
            "Iron deficiency anemia"
        ],
        "answer": "Hemophilia",
        "difficulty": "hard",
        "topic": "Coagulation Disorders",
        "explanation": "Hemophilia, particularly A and B, prolongs aPTT due to deficiencies in factors VIII or IX in the intrinsic coagulation pathway."
    },
    {
        "id": 49,
        "question": "What is the primary role of lymphocytes in the immune system?",
        "options": [
            "Phagocytosis",
            "Antibody production and adaptive immunity",
            "Histamine release",
            "Oxygen transport"
        ],
        "answer": "Antibody production and adaptive immunity",
        "difficulty": "medium",
        "topic": "White Blood Cells",
        "explanation": "Lymphocytes, including B and T cells, are critical for adaptive immunity, with B cells producing antibodies and T cells mediating cellular immunity."
    },
    {
        "id": 50,
        "question": "Which condition is characterized by bone marrow replacement with fibrous tissue?",
        "options": [
            "Myelofibrosis",
            "Aplastic anemia",
            "Thalassemia",
            "Sickle cell anemia"
        ],
        "answer": "Myelofibrosis",
        "difficulty": "hard",
        "topic": "Myeloproliferative Disorders",
        "explanation": "Myelofibrosis is characterized by the replacement of bone marrow with fibrous tissue, leading to impaired hematopoiesis."
    },
    {
        "id": 51,
        "question": "What is the primary anticoagulant produced by the body?",
        "options": [
            "Heparin",
            "Warfarin",
            "Aspirin",
            "Tissue factor"
        ],
        "answer": "Heparin",
        "difficulty": "medium",
        "topic": "Anticoagulation",
        "explanation": "Heparin is a naturally occurring anticoagulant produced by mast cells and basophils, inhibiting thrombin and factor Xa."
    },
    {
        "id": 52,
        "question": "Which type of anemia is associated with chronic inflammation?",
        "options": [
            "Iron deficiency anemia",
            "Anemia of chronic disease",
            "Sickle cell anemia",
            "Megaloblastic anemia"
        ],
        "answer": "Anemia of chronic disease",
        "difficulty": "hard",
        "topic": "Anemia",
        "explanation": "Anemia of chronic disease results from chronic inflammation, which disrupts iron metabolism and red blood cell production."
    },
    {
        "id": 53,
        "question": "What is the primary site of platelet production?",
        "options": [
            "Liver",
            "Spleen",
            "Bone marrow",
            "Lymph nodes"
        ],
        "answer": "Bone marrow",
        "difficulty": "easy",
        "topic": "Platelets",
        "explanation": "Platelets are produced in the bone marrow by megakaryocytes, which release platelets into the bloodstream."
    },
    {
        "id": 54,
        "question": "Which condition is associated with a deficiency in glucose-6-phosphate dehydrogenase (G6PD)?",
        "options": [
            "Hemolytic anemia",
            "Thalassemia",
            "Aplastic anemia",
            "Polycythemia"
        ],
        "answer": "Hemolytic anemia",
        "difficulty": "hard",
        "topic": "Anemia",
        "explanation": "G6PD deficiency leads to hemolytic anemia by impairing red blood cell protection against oxidative stress."
    },
    {
        "id": 55,
        "question": "What is the primary role of the D-dimer test in hematology?",
        "options": [
            "Measure platelet count",
            "Detect fibrin degradation products",
            "Assess red blood cell production",
            "Monitor hemoglobin levels"
        ],
        "answer": "Detect fibrin degradation products",
        "difficulty": "medium",
        "topic": "Coagulation Tests",
        "explanation": "The D-dimer test detects fibrin degradation products, indicating recent or ongoing clot breakdown, useful in diagnosing conditions like DIC or DVT."
    },
    {
        "id": 56,
        "question": "Which blood group is considered the universal recipient?",
        "options": [
            "A positive",
            "B positive",
            "AB positive",
            "O positive"
        ],
        "answer": "AB positive",
        "difficulty": "easy",
        "topic": "Blood Groups",
        "explanation": "AB positive blood can receive any blood type due to the presence of A, B, and Rh antigens, making it the universal recipient."
    },
    {
        "id": 57,
        "question": "What is the primary cause of beta-thalassemia major?",
        "options": [
            "Mutation in alpha-globin genes",
            "Mutation in beta-globin genes",
            "Vitamin B12 deficiency",
            "Iron overload"
        ],
        "answer": "Mutation in beta-globin genes",
        "difficulty": "hard",
        "topic": "Thalassemia",
        "explanation": "Beta-thalassemia major is caused by mutations in the HBB gene, leading to reduced or absent beta-globin chain production."
    },
    {
        "id": 58,
        "question": "Which type of white blood cell is primarily involved in phagocytosis of bacteria?",
        "options": [
            "Lymphocytes",
            "Neutrophils",
            "Eosinophils",
            "Basophils"
        ],
        "answer": "Neutrophils",
        "difficulty": "medium",
        "topic": "White Blood Cells",
        "explanation": "Neutrophils are the primary phagocytic cells in the immune system, rapidly responding to bacterial infections."
    },
    {
        "id": 59,
        "question": "What is the primary treatment for iron deficiency anemia?",
        "options": [
            "Vitamin B12 supplementation",
            "Iron supplementation",
            "Blood transfusion",
            "Bone marrow transplant"
        ],
        "answer": "Iron supplementation",
        "difficulty": "medium",
        "topic": "Anemia",
        "explanation": "Iron supplementation is the primary treatment for iron deficiency anemia, addressing the underlying cause of reduced hemoglobin synthesis."
    },
    {
        "id": 60,
        "question": "Which condition is characterized by an increased number of platelets?",
        "options": [
            "Thrombocytopenia",
            "Thrombocytosis",
            "Leukopenia",
            "Polycythemia"
        ],
        "answer": "Thrombocytosis",
        "difficulty": "medium",
        "topic": "Platelets",
        "explanation": "Thrombocytosis is a condition characterized by an elevated platelet count, which can increase the risk of thrombosis."
    },
    {
        "id": 61,
        "question": "What is the primary role of the reticulocyte count in hematology?",
        "options": [
            "Assess bone marrow function",
            "Measure clotting time",
            "Detect fibrin degradation",
            "Monitor white blood cell count"
        ],
        "answer": "Assess bone marrow function",
        "difficulty": "medium",
        "topic": "Hematologic Parameters",
        "explanation": "Reticulocyte count measures the number of immature red blood cells, indicating bone marrow response to anemia or blood loss."
    },
    {
        "id": 62,
        "question": "Which condition is associated with a prolonged bleeding time?",
        "options": [
            "Hemophilia",
            "Von Willebrand disease",
            "Iron deficiency anemia",
            "Leukemia"
        ],
        "answer": "Von Willebrand disease",
        "difficulty": "hard",
        "topic": "Coagulation Disorders",
        "explanation": "Von Willebrand disease prolongs bleeding time due to impaired platelet adhesion caused by deficient or dysfunctional von Willebrand factor."
    },
    {
        "id": 63,
        "question": "What is the primary function of the bone marrow in hematopoiesis?",
        "options": [
            "Store iron",
            "Produce blood cells",
            "Filter blood",
            "Synthesize antibodies"
        ],
        "answer": "Produce blood cells",
        "difficulty": "easy",
        "topic": "Hematopoiesis",
        "explanation": "The bone marrow is the primary site of hematopoiesis, producing red blood cells, white blood cells, and platelets."
    },
    {
        "id": 64,
        "question": "Which type of anemia is caused by a lack of intrinsic factor?",
        "options": [
            "Iron deficiency anemia",
            "Pernicious anemia",
            "Sickle cell anemia",
            "Thalassemia"
        ],
        "answer": "Pernicious anemia",
        "difficulty": "medium",
        "topic": "Anemia",
        "explanation": "Pernicious anemia is caused by a lack of intrinsic factor, which is necessary for vitamin B12 absorption, leading to megaloblastic anemia."
    },
    {
        "id": 65,
        "question": "What is the primary cause of polycythemia vera?",
        "options": [
            "Iron deficiency",
            "JAK2 mutation",
            "Vitamin B12 deficiency",
            "Bone marrow failure"
        ],
        "answer": "JAK2 mutation",
        "difficulty": "hard",
        "topic": "Polycythemia",
        "explanation": "Polycythemia vera is primarily caused by a JAK2 gene mutation, leading to excessive production of red blood cells."
    },
    {
        "id": 66,
        "question": "Which anticoagulant is used to monitor heparin therapy?",
        "options": [
            "Prothrombin time (PT)",
            "Activated partial thromboplastin time (aPTT)",
            "D-dimer",
            "Bleeding time"
        ],
        "answer": "Activated partial thromboplastin time (aPTT)",
        "difficulty": "medium",
        "topic": "Coagulation Tests",
        "explanation": "aPTT is used to monitor heparin therapy, as heparin affects the intrinsic and common coagulation pathways."
    },
    {
        "id": 67,
        "question": "What is the primary role of the Rh factor in blood typing?",
        "options": [
            "Determine blood viscosity",
            "Affect oxygen transport",
            "Influence transfusion compatibility",
            "Regulate clotting"
        ],
        "answer": "Influence transfusion compatibility",
        "difficulty": "medium",
        "topic": "Blood Groups",
        "explanation": "The Rh factor determines whether blood is positive or negative, affecting compatibility during blood transfusions."
    },
    {
        "id": 68,
        "question": "Which condition is characterized by a low platelet count?",
        "options": [
            "Thrombocytosis",
            "Thrombocytopenia",
            "Polycythemia",
            "Leukocytosis"
        ],
        "answer": "Thrombocytopenia",
        "difficulty": "medium",
        "topic": "Platelets",
        "explanation": "Thrombocytopenia is characterized by a low platelet count, increasing the risk of bleeding."
    },
    {
        "id": 69,
        "question": "What is the primary source of folate in the diet?",
        "options": [
            "Leafy green vegetables",
            "Red meat",
            "Dairy products",
            "Grains"
        ],
        "answer": "Leafy green vegetables",
        "difficulty": "easy",
        "topic": "Folate",
        "explanation": "Folate, essential for DNA synthesis and red blood cell production, is primarily found in leafy green vegetables, fruits, and fortified grains."
    },
    {
        "id": 70,
        "question": "Which type of leukemia is most common in older adults?",
        "options": [
            "Acute lymphoblastic leukemia (ALL)",
            "Chronic lymphocytic leukemia (CLL)",
            "Acute myeloid leukemia (AML)",
            "Chronic myeloid leukemia (CML)"
        ],
        "answer": "Chronic lymphocytic leukemia (CLL)",
        "difficulty": "hard",
        "topic": "Leukemia",
        "explanation": "CLL is the most common leukemia in older adults, characterized by the accumulation of mature but abnormal lymphocytes."
    },
    {
        "id": 71,
        "question": "What is the primary function of erythropoietin in hematopoiesis?",
        "options": [
            "Stimulate platelet production",
            "Stimulate red blood cell production",
            "Stimulate white blood cell production",
            "Regulate clotting"
        ],
        "answer": "Stimulate red blood cell production",
        "difficulty": "medium",
        "topic": "Erythropoiesis",
        "explanation": "Erythropoietin, produced by the kidneys, stimulates the production of red blood cells in the bone marrow."
    },
    {
        "id": 72,
        "question": "Which condition is associated with excessive bleeding due to platelet dysfunction?",
        "options": [
            "Hemophilia",
            "Von Willebrand disease",
            "Thrombocytopenia",
            "Glanzmann thrombasthenia"
        ],
        "answer": "Glanzmann thrombasthenia",
        "difficulty": "hard",
        "topic": "Platelet Disorders",
        "explanation": "Glanzmann thrombasthenia is a rare disorder caused by defective platelet glycoproteins, leading to impaired platelet aggregation and bleeding."
    },
    {
        "id": 73,
        "question": "What is the primary role of the Coombs test in hematology?",
        "options": [
            "Measure clotting time",
            "Detect autoantibodies on red blood cells",
            "Assess platelet function",
            "Monitor white blood cell count"
        ],
        "answer": "Detect autoantibodies on red blood cells",
        "difficulty": "hard",
        "topic": "Laboratory Hematology",
        "explanation": "The Coombs test detects autoantibodies or complement proteins on red blood cells, used to diagnose autoimmune hemolytic anemia."
    },
    {
        "id": 74,
        "question": "Which condition is characterized by the presence of Howell-Jolly bodies in red blood cells?",
        "options": [
            "Sickle cell anemia",
            "Asplenia",
            "Iron deficiency anemia",
            "Thalassemia"
        ],
        "answer": "Asplenia",
        "difficulty": "hard",
        "topic": "Red Blood Cells",
        "explanation": "Howell-Jolly bodies, remnants of nuclear material in red blood cells, are seen in asplenia due to the spleen's role in removing them."
    },
    {
        "id": 75,
        "question": "What is the primary cause of hemochromatosis?",
        "options": [
            "Iron deficiency",
            "Excessive iron absorption",
            "Vitamin B12 deficiency",
            "Bone marrow failure"
        ],
        "answer": "Excessive iron absorption",
        "difficulty": "medium",
        "topic": "Iron Metabolism",
        "explanation": "Hemochromatosis is caused by excessive iron absorption, often due to genetic mutations, leading to iron overload in tissues."
    },
    {
        "id": 76,
        "question": "Which type of white blood cell is primarily involved in antibody-mediated immunity?",
        "options": [
            "Neutrophils",
            "B lymphocytes",
            "T lymphocytes",
            "Monocytes"
        ],
        "answer": "B lymphocytes",
        "difficulty": "medium",
        "topic": "White Blood Cells",
        "explanation": "B lymphocytes produce antibodies, playing a key role in humoral (antibody-mediated) immunity."
    },
    {
        "id": 77,
        "question": "What is the primary treatment for chronic myeloid leukemia (CML)?",
        "options": [
            "Iron supplementation",
            "Tyrosine kinase inhibitors",
            "Vitamin B12 supplementation",
            "Blood transfusion"
        ],
        "answer": "Tyrosine kinase inhibitors",
        "difficulty": "hard",
        "topic": "Leukemia",
        "explanation": "Tyrosine kinase inhibitors, such as imatinib, target the BCR-ABL fusion protein in CML, effectively controlling the disease."
    },
    {
        "id": 78,
        "question": "Which condition is associated with a prolonged prothrombin time (PT)?",
        "options": [
            "Hemophilia",
            "Vitamin K deficiency",
            "Thrombophilia",
            "Leukopenia"
        ],
        "answer": "Vitamin K deficiency",
        "difficulty": "medium",
        "topic": "Coagulation Disorders",
        "explanation": "Vitamin K deficiency prolongs PT by impairing the synthesis of vitamin K-dependent clotting factors (II, VII, IX, X)."
    },
    {
        "id": 79,
        "question": "What is the primary function of the spleen in immune surveillance?",
        "options": [
            "Produce antibodies",
            "Filter pathogens and abnormal cells",
            "Store iron",
            "Synthesize clotting factors"
        ],
        "answer": "Filter pathogens and abnormal cells",
        "difficulty": "medium",
        "topic": "Spleen Function",
        "explanation": "The spleen filters blood, removing pathogens, abnormal cells, and old red blood cells, contributing to immune surveillance."
    },
    {
        "id": 80,
        "question": "Which condition is characterized by crescent-shaped red blood cells?",
        "options": [
            "Thalassemia",
            "Sickle cell anemia",
            "Iron deficiency anemia",
            "Megaloblastic anemia"
        ],
        "answer": "Sickle cell anemia",
        "difficulty": "medium",
        "topic": "Sickle Cell Anemia",
        "explanation": "Sickle cell anemia is characterized by crescent-shaped red blood cells due to abnormal hemoglobin (HbS), leading to vaso-occlusion."
    },
    {
        "id": 81,
        "question": "What is the primary role of thrombopoietin in hematopoiesis?",
        "options": [
            "Stimulate red blood cell production",
            "Stimulate platelet production",
            "Stimulate white blood cell production",
            "Regulate iron metabolism"
        ],
        "answer": "Stimulate platelet production",
        "difficulty": "hard",
        "topic": "Platelets",
        "explanation": "Thrombopoietin, produced primarily in the liver, stimulates megakaryocyte maturation and platelet production in the bone marrow."
    },
    {
        "id": 82,
        "question": "Which condition is associated with an increased risk of bleeding due to low fibrinogen levels?",
        "options": [
            "Hemophilia",
            "Disseminated intravascular coagulation (DIC)",
            "Thrombophilia",
            "Polycythemia"
        ],
        "answer": "Disseminated intravascular coagulation (DIC)",
        "difficulty": "hard",
        "topic": "Coagulation Disorders",
        "explanation": "DIC leads to consumption of fibrinogen and other clotting factors, increasing the risk of bleeding."
    },
    {
        "id": 83,
        "question": "What is the primary source of iron in the diet?",
        "options": [
            "Leafy green vegetables",
            "Red meat",
            "Grains",
            "Fruits"
        ],
        "answer": "Red meat",
        "difficulty": "easy",
        "topic": "Iron Metabolism",
        "explanation": "Red meat is a primary source of heme iron, which is more bioavailable than non-heme iron found in plant-based foods."
    },
    {
        "id": 84,
        "question": "Which type of anemia is associated with lead poisoning?",
        "options": [
            "Megaloblastic anemia",
            "Microcytic anemia",
            "Normocytic anemia",
            "Hemolytic anemia"
        ],
        "answer": "Microcytic anemia",
        "difficulty": "hard",
        "topic": "Anemia",
        "explanation": "Lead poisoning inhibits heme synthesis, leading to microcytic anemia with small, pale red blood cells."
    },
    {
        "id": 85,
        "question": "What is the primary role of the activated partial thromboplastin time (aPTT) test?",
        "options": [
            "Monitor warfarin therapy",
            "Assess intrinsic and common coagulation pathways",
            "Measure platelet count",
            "Detect fibrin degradation"
        ],
        "answer": "Assess intrinsic and common coagulation pathways",
        "difficulty": "medium",
        "topic": "Coagulation Tests",
        "explanation": "aPTT assesses the intrinsic and common coagulation pathways, used to monitor heparin therapy and diagnose clotting disorders."
    },
    {
        "id": 86,
        "question": "Which condition is characterized by the presence of schistocytes on a blood smear?",
        "options": [
            "Sickle cell anemia",
            "Microangiopathic hemolytic anemia",
            "Iron deficiency anemia",
            "Megaloblastic anemia"
        ],
        "answer": "Microangiopathic hemolytic anemia",
        "difficulty": "hard",
        "topic": "Anemia",
        "explanation": "Schistocytes, fragmented red blood cells, are characteristic of microangiopathic hemolytic anemia, caused by mechanical damage in small vessels."
    },
    {
        "id": 87,
        "question": "What is the primary function of the prothrombin complex in coagulation?",
        "options": [
            "Inhibit clot formation",
            "Promote fibrin formation",
            "Stimulate platelet production",
            "Regulate iron metabolism"
        ],
        "answer": "Promote fibrin formation",
        "difficulty": "medium",
        "topic": "Coagulation",
        "explanation": "The prothrombin complex, including factors II, V, VII, and X, promotes fibrin formation, essential for stable clot formation."
    },
    {
        "id": 88,
        "question": "Which condition is associated with an increased risk of infection due to low neutrophil count?",
        "options": [
            "Neutropenia",
            "Lymphocytosis",
            "Thrombocytopenia",
            "Polycythemia"
        ],
        "answer": "Neutropenia",
        "difficulty": "medium",
        "topic": "White Blood Cells",
        "explanation": "Neutropenia, a low neutrophil count, increases infection risk due to impaired bacterial phagocytosis."
    },
    {
        "id": 89,
        "question": "What is the primary role of the mean corpuscular volume (MCV) in hematology?",
        "options": [
            "Measure platelet size",
            "Measure red blood cell size",
            "Assess clotting time",
            "Monitor white blood cell count"
        ],
        "answer": "Measure red blood cell size",
        "difficulty": "medium",
        "topic": "Hematologic Parameters",
        "explanation": "MCV measures the average size of red blood cells, helping classify anemias as microcytic, normocytic, or macrocytic."
    },
    {
        "id": 90,
        "question": "Which condition is associated with an increased risk of thrombosis due to factor V Leiden mutation?",
        "options": [
            "Hemophilia",
            "Thrombophilia",
            "Aplastic anemia",
            "Sickle cell anemia"
        ],
        "answer": "Thrombophilia",
        "difficulty": "hard",
        "topic": "Thrombophilia",
        "explanation": "Factor V Leiden mutation causes resistance to activated protein C, increasing the risk of thrombosis in thrombophilia."
    },
    {
        "id": 91,
        "question": "What is the primary role of the bone marrow biopsy in hematology?",
        "options": [
            "Measure hemoglobin levels",
            "Assess bone marrow cellularity and pathology",
            "Monitor clotting time",
            "Detect fibrin degradation"
        ],
        "answer": "Assess bone marrow cellularity and pathology",
        "difficulty": "medium",
        "topic": "Laboratory Hematology",
        "explanation": "A bone marrow biopsy assesses cellularity, structure, and pathology, aiding in the diagnosis of leukemias, anemias, and other disorders."
    },
    {
        "id": 92,
        "question": "Which type of anemia is associated with spherocytes on a blood smear?",
        "options": [
            "Iron deficiency anemia",
            "Hereditary spherocytosis",
            "Megaloblastic anemia",
            "Sickle cell anemia"
        ],
        "answer": "Hereditary spherocytosis",
        "difficulty": "hard",
        "topic": "Anemia",
        "explanation": "Hereditary spherocytosis is characterized by spherocytes, round red blood cells with reduced membrane flexibility, leading to hemolytic anemia."
    },
    {
        "id": 93,
        "question": "What is the primary role of the fibrin clot in hemostasis?",
        "options": [
            "Transport oxygen",
            "Stabilize the platelet plug",
            "Produce antibodies",
            "Filter pathogens"
        ],
        "answer": "Stabilize the platelet plug",
        "difficulty": "medium",
        "topic": "Coagulation",
        "explanation": "The fibrin clot reinforces the platelet plug, forming a stable hemostatic plug to stop bleeding."
    },
    {
        "id": 94,
        "question": "Which condition is associated with an elevated erythrocyte sedimentation rate (ESR)?",
        "options": [
            "Iron deficiency anemia",
            "Chronic inflammation",
            "Sickle cell anemia",
            "Thalassemia"
        ],
        "answer": "Chronic inflammation",
        "difficulty": "medium",
        "topic": "Laboratory Hematology",
        "explanation": "ESR is elevated in chronic inflammation due to increased plasma proteins, such as fibrinogen, that cause red blood cells to clump."
    },
    {
        "id": 95,
        "question": "What is the primary role of the intrinsic factor in vitamin B12 absorption?",
        "options": [
            "Bind iron in the gut",
            "Bind vitamin B12 in the stomach",
            "Stimulate red blood cell production",
            "Regulate clotting"
        ],
        "answer": "Bind vitamin B12 in the stomach",
        "difficulty": "medium",
        "topic": "Vitamin B12",
        "explanation": "Intrinsic factor, produced by parietal cells in the stomach, binds vitamin B12, facilitating its absorption in the ileum."
    },
    {
        "id": 96,
        "question": "Which condition is characterized by the presence of Auer rods in blast cells?",
        "options": [
            "Acute lymphoblastic leukemia (ALL)",
            "Chronic lymphocytic leukemia (CLL)",
            "Acute myeloid leukemia (AML)",
            "Chronic myeloid leukemia (CML)"
        ],
        "answer": "Acute myeloid leukemia (AML)",
        "difficulty": "hard",
        "topic": "Leukemia",
        "explanation": "Auer rods, rod-like structures in the cytoplasm of blast cells, are characteristic of AML, particularly in certain subtypes."
    },
    {
        "id": 97,
        "question": "What is the primary cause of secondary polycythemia?",
        "options": [
            "JAK2 mutation",
            "Chronic hypoxia",
            "Vitamin B12 deficiency",
            "Iron overload"
        ],
        "answer": "Chronic hypoxia",
        "difficulty": "hard",
        "topic": "Polycythemia",
        "explanation": "Secondary polycythemia is caused by chronic hypoxia, which stimulates erythropoietin production, increasing red blood cell mass."
    },
    {
        "id": 98,
        "question": "Which type of white blood cell is primarily involved in cell-mediated immunity?",
        "options": [
            "B lymphocytes",
            "T lymphocytes",
            "Neutrophils",
            "Monocytes"
        ],
        "answer": "T lymphocytes",
        "difficulty": "medium",
        "topic": "White Blood Cells",
        "explanation": "T lymphocytes are critical for cell-mediated immunity, including cytotoxic and helper T-cell functions."
    },
    {
        "id": 99,
        "question": "What is the primary role of the bleeding time test in hematology?",
        "options": [
            "Assess intrinsic coagulation pathway",
            "Evaluate platelet function",
            "Measure red blood cell count",
            "Detect fibrin degradation"
        ],
        "answer": "Evaluate platelet function",
        "difficulty": "medium",
        "topic": "Coagulation Tests",
        "explanation": "The bleeding time test assesses platelet function and vascular integrity, prolonged in conditions like von Willebrand disease."
    },
    {
        "id": 100,
        "question": "Which condition is associated with the presence of target cells on a blood smear?",
        "options": [
            "Sickle cell anemia",
            "Thalassemia",
            "Iron deficiency anemia",
            "Megaloblastic anemia"
        ],
        "answer": "Thalassemia",
        "difficulty": "hard",
        "topic": "Red Blood Cells",
        "explanation": "Target cells, red blood cells with a bullseye appearance, are commonly seen in thalassemia due to abnormal hemoglobin production."
    },
    {
        "id": 101,
        "question": "What is the primary site of hematopoiesis during fetal development?",
        "options": [
            "Bone marrow",
            "Spleen",
            "Yolk sac and liver",
            "Lymph nodes"
        ],
        "answer": "Yolk sac and liver",
        "difficulty": "medium",
        "topic": "Haemopoiesis",
        "explanation": "During fetal development, hematopoiesis begins in the yolk sac, transitions to the liver, and later shifts to the bone marrow before birth."
    },
    {
        "id": 102,
        "question": "Which cytokine is primarily responsible for regulating erythropoiesis?",
        "options": [
            "Thrombopoietin",
            "Interleukin-6",
            "Erythropoietin",
            "Granulocyte colony-stimulating factor"
        ],
        "answer": "Erythropoietin",
        "difficulty": "medium",
        "topic": "Haemopoiesis",
        "explanation": "Erythropoietin, produced by the kidneys, stimulates red blood cell production in the bone marrow in response to hypoxia."
    },
    {
        "id": 103,
        "question": "What is the primary cause of hemolytic disease of the newborn?",
        "options": [
            "ABO incompatibility",
            "Rh incompatibility",
            "Iron deficiency",
            "Vitamin K deficiency"
        ],
        "answer": "Rh incompatibility",
        "difficulty": "medium",
        "topic": "Blood Groups and Transfusion Medicine",
        "explanation": "Hemolytic disease of the newborn is primarily caused by Rh incompatibility, where an Rh-negative mother produces antibodies against an Rh-positive fetus, leading to hemolysis."
    },
    {
        "id": 104,
        "question": "Which laboratory test is used to assess overall blood composition?",
        "options": [
            "Prothrombin time (PT)",
            "Complete blood count (CBC)",
            "D-dimer",
            "Bone marrow biopsy"
        ],
        "answer": "Complete blood count (CBC)",
        "difficulty": "easy",
        "topic": "Laboratory Techniques",
        "explanation": "The CBC measures red blood cells, white blood cells, platelets, hemoglobin, and hematocrit, providing an overview of blood composition."
    },
    {
        "id": 105,
        "question": "What is the hallmark laboratory finding in multiple myeloma?",
        "options": [
            "Philadelphia chromosome",
            "Monoclonal protein spike",
            "Auer rods",
            "Howell-Jolly bodies"
        ],
        "answer": "Monoclonal protein spike",
        "difficulty": "hard",
        "topic": "Hematologic Malignancies",
        "explanation": "Multiple myeloma is characterized by a monoclonal protein spike on serum protein electrophoresis due to excessive production of immunoglobulins by plasma cells."
    },
    {
        "id": 106,
        "question": "Which parasite is responsible for causing malaria?",
        "options": [
            "Trypanosoma",
            "Leishmania",
            "Plasmodium",
            "Schistosoma"
        ],
        "answer": "Plasmodium",
        "difficulty": "easy",
        "topic": "Infections Affecting Blood",
        "explanation": "Malaria is caused by Plasmodium species, transmitted by Anopheles mosquitoes, leading to red blood cell destruction and anemia."
    },
    {
        "id": 107,
        "question": "What is the primary clinical feature of Hodgkin lymphoma?",
        "options": [
            "Presence of Reed-Sternberg cells",
            "Monoclonal protein spike",
            "Philadelphia chromosome",
            "Schistocytes on blood smear"
        ],
        "answer": "Presence of Reed-Sternberg cells",
        "difficulty": "hard",
        "topic": "Leukaemias and Lymphomas",
        "explanation": "Hodgkin lymphoma is characterized by the presence of Reed-Sternberg cells, large multinucleated cells seen on lymph node biopsy."
    },
    {
        "id": 108,
        "question": "Which blood group system is most commonly associated with transfusion reactions?",
        "options": [
            "ABO",
            "Rh",
            "Kell",
            "Duffy"
        ],
        "answer": "ABO",
        "difficulty": "medium",
        "topic": "Blood Groups and Transfusion Medicine",
        "explanation": "ABO incompatibility is the most common cause of severe transfusion reactions due to naturally occurring anti-A or anti-B antibodies."
    },
    {
        "id": 109,
        "question": "What is the primary purpose of crossmatching in transfusion medicine?",
        "options": [
            "Determine blood group",
            "Ensure compatibility between donor and recipient",
            "Measure hemoglobin levels",
            "Detect clotting disorders"
        ],
        "answer": "Ensure compatibility between donor and recipient",
        "difficulty": "medium",
        "topic": "Blood Groups and Transfusion Medicine",
        "explanation": "Crossmatching tests donor red blood cells against recipient serum to ensure compatibility and prevent transfusion reactions."
    },
    {
        "id": 110,
        "question": "Which laboratory technique is used to identify specific cell surface markers in leukemia diagnosis?",
        "options": [
            "Peripheral blood smear",
            "Flow cytometry",
            "ESR",
            "Cytochemistry"
        ],
        "answer": "Flow cytometry",
        "difficulty": "hard",
        "topic": "Laboratory Techniques",
        "explanation": "Flow cytometry identifies cell surface markers, aiding in the classification of leukemias and lymphomas based on immunophenotyping."
    },
    {
        "id": 111,
        "question": "What is the primary cause of infectious mononucleosis?",
        "options": [
            "Cytomegalovirus (CMV)",
            "Epstein-Barr virus (EBV)",
            "Human immunodeficiency virus (HIV)",
            "Hepatitis B virus"
        ],
        "answer": "Epstein-Barr virus (EBV)",
        "difficulty": "medium",
        "topic": "Infections Affecting Blood",
        "explanation": "Infectious mononucleosis is primarily caused by EBV, leading to atypical lymphocytes and symptoms like fever and lymphadenopathy."
    },
    {
        "id": 112,
        "question": "Which condition is characterized by bone pain and hypercalcemia in hematologic malignancies?",
        "options": [
            "Chronic myeloid leukemia",
            "Multiple myeloma",
            "Hodgkin lymphoma",
            "Acute lymphoblastic leukemia"
        ],
        "answer": "Multiple myeloma",
        "difficulty": "hard",
        "topic": "Hematologic Malignancies",
        "explanation": "Multiple myeloma often presents with bone pain due to lytic lesions and hypercalcemia from bone destruction."
    },
    {
        "id": 113,
        "question": "What is the primary feature of myelodysplastic syndromes (MDS)?",
        "options": [
            "Excessive red blood cell production",
            "Ineffective hematopoiesis",
            "Monoclonal antibody production",
            "Presence of Reed-Sternberg cells"
        ],
        "answer": "Ineffective hematopoiesis",
        "difficulty": "hard",
        "topic": "Hematologic Malignancies",
        "explanation": "MDS is characterized by ineffective hematopoiesis, leading to cytopenias despite a hypercellular bone marrow."
    },
    {
        "id": 114,
        "question": "Which hematologic condition is most common in pediatric populations?",
        "options": [
            "Chronic lymphocytic leukemia",
            "Acute lymphoblastic leukemia",
            "Myelofibrosis",
            "Polycythemia vera"
        ],
        "answer": "Acute lymphoblastic leukemia",
        "difficulty": "medium",
        "topic": "Pediatric Haematology",
        "explanation": "ALL is the most common malignancy in children, typically presenting with symptoms of bone marrow failure like anemia and infections."
    },
    {
        "id": 115,
        "question": "What is the primary purpose of the erythrocyte sedimentation rate (ESR) test?",
        "options": [
            "Measure red blood cell size",
            "Assess inflammation",
            "Monitor clotting time",
            "Detect hemoglobin levels"
        ],
        "answer": "Assess inflammation",
        "difficulty": "medium",
        "topic": "Laboratory Techniques",
        "explanation": "ESR measures the rate at which red blood cells settle in a tube, indicating inflammation, infection, or malignancy when elevated."
    },
    {
        "id": 117,
        "question": "Which therapy has shown promise in treating hemoglobinopathies like sickle cell disease?",
        "options": [
            "CAR-T cell therapy",
            "Gene therapy",
            "Tyrosine kinase inhibitors",
            "Monoclonal antibodies"
        ],
        "answer": "Gene therapy",
        "difficulty": "hard",
        "topic": "Recent Advances",
        "explanation": "Gene therapy aims to correct genetic defects in hemoglobinopathies like sickle cell disease by introducing functional genes."
    },
    {
        "id": 118,
        "question": "What is the primary mode of transmission for trypanosomiasis?",
        "options": [
            "Mosquito bite",
            "Tsetse fly bite",
            "Tick bite",
            "Contaminated water"
        ],
        "answer": "Tsetse fly bite",
        "difficulty": "medium",
        "topic": "Infections Affecting Blood",
        "explanation": "Trypanosomiasis, or African sleeping sickness, is transmitted by the tsetse fly, affecting blood and causing systemic symptoms."
    },
    {
        "id": 116,
        "question": "Which clotting factor deficiency is associated with hemophilia B?",
        "options": [
            "Factor VII",
            "Factor VIII",
            "Factor IX",
            "Factor XI"
        ],
        "answer": "Factor IX",
        "difficulty": "medium",
        "topic": "Coagulation Disorders",
        "explanation": "Hemophilia B is caused by a deficiency in factor IX, impairing the intrinsic coagulation pathway and leading to bleeding tendencies."
    },
    {
        "id": 119,
        "question": "What is the primary diagnostic feature of chronic lymphocytic leukemia (CLL)?",
        "options": [
            "Presence of Auer rods",
            "Lymphocytosis with smudge cells",
            "Monoclonal protein spike",
            "Philadelphia chromosome"
        ],
        "answer": "Lymphocytosis with smudge cells",
        "difficulty": "hard",
        "topic": "Leukaemias and Lymphomas",
        "explanation": "CLL is characterized by lymphocytosis with fragile lymphocytes that appear as smudge cells on peripheral blood smear."
    },
    {
        "id": 120,
        "question": "Which condition is associated with an increased risk of transfusion-transmitted infections?",
        "options": [
            "Iron deficiency anemia",
            "Hemolytic transfusion reaction",
            "Blood transfusion without screening",
            "Von Willebrand disease"
        ],
        "answer": "Blood transfusion without screening",
        "difficulty": "medium",
        "topic": "Blood Groups and Transfusion Medicine",
        "explanation": "Unscreened blood transfusions carry a risk of transmitting infections like HIV, hepatitis, or malaria."
    },
    {
        "id": 121,
        "question": "What is the primary function of the peripheral blood smear examination?",
        "options": [
            "Measure clotting time",
            "Assess cell morphology",
            "Monitor hemoglobin levels",
            "Detect fibrin degradation"
        ],
        "answer": "Assess cell morphology",
        "difficulty": "medium",
        "topic": "Laboratory Techniques",
        "explanation": "Peripheral blood smear examination allows visualization of blood cell morphology, aiding in the diagnosis of anemias, leukemias, and infections."
    },
    {
        "id": 122,
        "question": "Which hematologic condition is associated with JAK2 mutation?",
        "options": [
            "Sickle cell disease",
            "Polycythemia vera",
            "Hemophilia A",
            "Thalassemia"
        ],
        "answer": "Polycythemia vera",
        "difficulty": "hard",
        "topic": "Myeloproliferative Disorders",
        "explanation": "Polycythemia vera is commonly associated with a JAK2 mutation, leading to excessive red blood cell production."
    },
    {
        "id": 123,
        "question": "What is the primary role of bone marrow aspiration in hematology?",
        "options": [
            "Measure platelet count",
            "Evaluate bone marrow cellularity",
            "Assess clotting factors",
            "Detect transfusion reactions"
        ],
        "answer": "Evaluate bone marrow cellularity",
        "difficulty": "medium",
        "topic": "Laboratory Techniques",
        "explanation": "Bone marrow aspiration evaluates cellularity, morphology, and pathology, aiding in diagnosing leukemias, anemias, and marrow disorders."
    },
    {
        "id": 124,
        "question": "Which infection is associated with atypical lymphocytes on blood smear?",
        "options": [
            "Malaria",
            "Infectious mononucleosis",
            "Leishmaniasis",
            "Sepsis"
        ],
        "answer": "Infectious mononucleosis",
        "difficulty": "medium",
        "topic": "Infections Affecting Blood",
        "explanation": "Infectious mononucleosis, caused by EBV, is associated with atypical lymphocytes (reactive T-cells) on peripheral blood smear."
    },
    {
        "id": 125,
        "question": "What is the primary treatment for acute lymphoblastic leukemia (ALL) in children?",
        "options": [
            "Tyrosine kinase inhibitors",
            "Chemotherapy",
            "Gene therapy",
            "Iron supplementation"
        ],
        "answer": "Chemotherapy",
        "difficulty": "medium",
        "topic": "Pediatric Haematology",
        "explanation": "Chemotherapy is the primary treatment for ALL in children, often combined with other modalities like radiation or stem cell transplant."
    },
    {
        "id": 126,
        "question": "Which hematologic parameter tends to decrease in geriatric populations?",
        "options": [
            "Hemoglobin",
            "Platelet count",
            "White blood cell count",
            "Reticulocyte count"
        ],
        "answer": "Hemoglobin",
        "difficulty": "medium",
        "topic": "Geriatric Haematology",
        "explanation": "Hemoglobin levels tend to decrease slightly in geriatric populations due to reduced bone marrow reserve and chronic conditions."
    },
    {
        "id": 127,
        "question": "What is the primary advantage of CAR-T cell therapy in hematologic malignancies?",
        "options": [
            "Corrects genetic mutations",
            "Targets specific cancer cells",
            "Increases red blood cell production",
            "Regulates clotting factors"
        ],
        "answer": "Targets specific cancer cells",
        "difficulty": "hard",
        "topic": "Recent Advances",
        "explanation": "CAR-T cell therapy modifies T-cells to target specific cancer cell antigens, effective in treating leukemias and lymphomas."
    },
    {
        "id": 128,
        "question": "Which condition is characterized by pancytopenia and fatty bone marrow?",
        "options": [
            "Polycythemia vera",
            "Aplastic anemia",
            "Sickle cell disease",
            "Thalassemia"
        ],
        "answer": "Aplastic anemia",
        "difficulty": "hard",
        "topic": "Bone Marrow Disorders",
        "explanation": "Aplastic anemia is characterized by pancytopenia and hypocellular, fatty bone marrow due to stem cell failure."
    },
    {
        "id": 129,
        "question": "What is the primary cause of leukemoid reaction?",
        "options": [
            "Viral infection",
            "Severe bacterial infection",
            "Iron deficiency",
            "Vitamin B12 deficiency"
        ],
        "answer": "Severe bacterial infection",
        "difficulty": "hard",
        "topic": "WBC Disorders",
        "explanation": "Leukemoid reaction is a marked leukocytosis, often due to severe bacterial infections, mimicking leukemia but without malignant cells."
    },
    {
        "id": 130,
        "question": "Which test is used to assess the intrinsic coagulation pathway?",
        "options": [
            "Prothrombin time (PT)",
            "Activated partial thromboplastin time (aPTT)",
            "D-dimer",
            "Bleeding time"
        ],
        "answer": "Activated partial thromboplastin time (aPTT)",
        "difficulty": "medium",
        "topic": "Coagulation Disorders",
        "explanation": "aPTT assesses the intrinsic and common coagulation pathways, prolonged in conditions like hemophilia."
    },
    {
        "id": 131,
        "question": "What is the primary role of cytochemistry in leukemia diagnosis?",
        "options": [
            "Measure hemoglobin levels",
            "Identify specific cell enzymes",
            "Assess platelet function",
            "Detect transfusion reactions"
        ],
        "answer": "Identify specific cell enzymes",
        "difficulty": "hard",
        "topic": "Laboratory Techniques",
        "explanation": "Cytochemistry identifies enzymes like myeloperoxidase in blast cells, aiding in distinguishing AML from ALL."
    },
    {
        "id": 132,
        "question": "Which condition is associated with splenomegaly in hematologic disorders?",
        "options": [
            "Iron deficiency anemia",
            "Myelofibrosis",
            "Hemophilia",
            "Von Willebrand disease"
        ],
        "answer": "Myelofibrosis",
        "difficulty": "hard",
        "topic": "Myeloproliferative Disorders",
        "explanation": "Myelofibrosis often causes splenomegaly due to extramedullary hematopoiesis compensating for bone marrow fibrosis."
    },
    {
        "id": 133,
        "question": "What is the primary cause of non-Hodgkin lymphoma?",
        "options": [
            "Philadelphia chromosome",
            "EBV infection",
            "JAK2 mutation",
            "Unknown multifactorial causes"
        ],
        "answer": "Unknown multifactorial causes",
        "difficulty": "hard",
        "topic": "Leukaemias and Lymphomas",
        "explanation": "Non-Hodgkin lymphoma arises from multifactorial causes, including genetic, environmental, and infectious factors like EBV in some cases."
    },
    {
        "id": 134,
        "question": "Which infection is associated with pancytopenia in severe cases?",
        "options": [
            "Malaria",
            "Sepsis",
            "Infectious mononucleosis",
            "Trypanosomiasis"
        ],
        "answer": "Sepsis",
        "difficulty": "hard",
        "topic": "Infections Affecting Blood",
        "explanation": "Severe sepsis can cause pancytopenia due to bone marrow suppression and consumption of blood cells."
    },
    {
        "id": 135,
        "question": "What is the primary role of packed cell volume (PCV) in hematology?",
        "options": [
            "Measure clotting time",
            "Assess red blood cell volume",
            "Detect fibrin degradation",
            "Monitor white blood cell count"
        ],
        "answer": "Assess red blood cell volume",
        "difficulty": "medium",
        "topic": "Laboratory Techniques",
        "explanation": "PCV, or hematocrit, measures the proportion of red blood cells in total blood volume, reflecting oxygen-carrying capacity."
    },
    {
        "id": 136,
        "question": "Which condition is treated with hydroxyurea in hematology?",
        "options": [
            "Iron deficiency anemia",
            "Sickle cell disease",
            "Hemophilia",
            "Von Willebrand disease"
        ],
        "answer": "Sickle cell disease",
        "difficulty": "hard",
        "topic": "Pediatric Haematology",
        "explanation": "Hydroxyurea increases fetal hemoglobin production in sickle cell disease, reducing vaso-occlusive crises."
    },
    {
        "id": 137,
        "question": "What is the primary advantage of CRISPR in hematology research?",
        "options": [
            "Increase platelet production",
            "Correct genetic mutations",
            "Enhance transfusion compatibility",
            "Monitor clotting factors"
        ],
        "answer": "Correct genetic mutations",
        "difficulty": "hard",
        "topic": "Recent Advances",
        "explanation": "CRISPR allows precise editing of genetic mutations, showing promise in treating hemoglobinopathies like sickle cell disease and thalassemia."
    },
    {
        "id": 138,
        "question": "Which hematologic condition is associated with Bence Jones proteins in urine?",
        "options": [
            "Hodgkin lymphoma",
            "Multiple myeloma",
            "Chronic myeloid leukemia",
            "Aplastic anemia"
        ],
        "answer": "Multiple myeloma",
        "difficulty": "hard",
        "topic": "Hematologic Malignancies",
        "explanation": "Bence Jones proteins, light chains of immunoglobulins, are found in the urine of multiple myeloma patients due to plasma cell overproduction."
    },
    {
        "id": 139,
        "question": "What is the primary cause of eosinophilia in hematologic disorders?",
        "options": [
            "Bacterial infections",
            "Parasitic infections",
            "Iron deficiency",
            "Vitamin B12 deficiency"
        ],
        "answer": "Parasitic infections",
        "difficulty": "medium",
        "topic": "WBC Disorders",
        "explanation": "Eosinophilia is commonly caused by parasitic infections, as eosinophils play a key role in combating parasites."
    },
    {
        "id": 140,
        "question": "Which test is used to monitor disseminated intravascular coagulation (DIC)?",
        "options": [
            "Prothrombin time (PT)",
            "D-dimer",
            "Bleeding time",
            "Reticulocyte count"
        ],
        "answer": "D-dimer",
        "difficulty": "medium",
        "topic": "Coagulation Disorders",
        "explanation": "D-dimer levels are elevated in DIC, indicating fibrin degradation due to widespread clotting and fibrinolysis."
    },
    {
        "id": 141,
        "question": "What is the primary role of hemoglobin estimation in hematology?",
        "options": [
            "Assess oxygen-carrying capacity",
            "Measure platelet function",
            "Detect fibrin degradation",
            "Monitor white blood cell count"
        ],
        "answer": "Assess oxygen-carrying capacity",
        "difficulty": "easy",
        "topic": "Laboratory Techniques",
        "explanation": "Hemoglobin estimation measures the oxygen-carrying capacity of blood, critical for diagnosing anemias."
    },
    {
        "id": 142,
        "question": "Which condition is associated with extramedullary hematopoiesis?",
        "options": [
            "Iron deficiency anemia",
            "Myelofibrosis",
            "Hemophilia",
            "Sickle cell disease"
        ],
        "answer": "Myelofibrosis",
        "difficulty": "hard",
        "topic": "Myeloproliferative Disorders",
        "explanation": "Myelofibrosis leads to extramedullary hematopoiesis in the spleen and liver due to bone marrow fibrosis."
    },
    {
        "id": 143,
        "question": "What is the primary cause of neutropenia in hematologic disorders?",
        "options": [
            "Viral infections",
            "Bacterial infections",
            "Iron deficiency",
            "Parasitic infections"
        ],
        "answer": "Viral infections",
        "difficulty": "medium",
        "topic": "WBC Disorders",
        "explanation": "Viral infections often cause neutropenia by suppressing bone marrow production or increasing neutrophil destruction."
    },
    {
        "id": 144,
        "question": "Which therapy is used to treat chronic myeloid leukemia (CML)?",
        "options": [
            "Chemotherapy",
            "Tyrosine kinase inhibitors",
            "Gene therapy",
            "Blood transfusion"
        ],
        "answer": "Tyrosine kinase inhibitors",
        "difficulty": "medium",
        "topic": "Leukaemias and Lymphomas",
        "explanation": "Tyrosine kinase inhibitors, like imatinib, target the BCR-ABL fusion protein in CML, controlling disease progression."
    },
    {
        "id": 145,
        "question": "What is the primary role of the vascular spasm in hemostasis?",
        "options": [
            "Promote fibrin formation",
            "Reduce blood flow to the injury site",
            "Stimulate platelet production",
            "Dissolve blood clots"
        ],
        "answer": "Reduce blood flow to the injury site",
        "difficulty": "medium",
        "topic": "Hemostasis",
        "explanation": "Vascular spasm constricts blood vessels at the injury site, reducing blood flow and aiding in hemostasis."
    },
    {
        "id": 146,
        "question": "Which condition is associated with microcytic anemia in pediatric populations?",
        "options": [
            "Sickle cell disease",
            "Thalassemia",
            "Aplastic anemia",
            "Megaloblastic anemia"
        ],
        "answer": "Thalassemia",
        "difficulty": "medium",
        "topic": "Pediatric Haematology",
        "explanation": "Thalassemia, particularly beta-thalassemia, is a common cause of microcytic anemia in children due to reduced hemoglobin synthesis."
    },
    {
        "id": 147,
        "question": "What is the primary advantage of targeted therapies in hematologic malignancies?",
        "options": [
            "Increase red blood cell production",
            "Reduce side effects compared to chemotherapy",
            "Correct clotting factor deficiencies",
            "Enhance transfusion compatibility"
        ],
        "answer": "Reduce side effects compared to chemotherapy",
        "difficulty": "hard",
        "topic": "Recent Advances",
        "explanation": "Targeted therapies, like monoclonal antibodies, specifically attack cancer cells, reducing damage to healthy cells and side effects."
    },
    {
        "id": 148,
        "question": "Which infection is associated with intracellular parasites in macrophages?",
        "options": [
            "Malaria",
            "Leishmaniasis",
            "Trypanosomiasis",
            "Infectious mononucleosis"
        ],
        "answer": "Leishmaniasis",
        "difficulty": "hard",
        "topic": "Infections Affecting Blood",
        "explanation": "Leishmaniasis, caused by Leishmania parasites, infects macrophages, leading to systemic symptoms and hematologic abnormalities."
    },
    {
        "id": 149,
        "question": "What is the primary role of the coagulation cascade in hemostasis?",
        "options": [
            "Stimulate red blood cell production",
            "Form a stable fibrin clot",
            "Enhance immune defense",
            "Transport oxygen"
        ],
        "answer": "Form a stable fibrin clot",
        "difficulty": "medium",
        "topic": "Hemostasis",
        "explanation": "The coagulation cascade activates clotting factors to form a stable fibrin clot, reinforcing the platelet plug in hemostasis."
    },
    {
        "id": 150,
        "question": "Which condition is associated with normocytic anemia in geriatric populations?",
        "options": [
            "Iron deficiency anemia",
            "Anemia of chronic disease",
            "Megaloblastic anemia",
            "Sickle cell anemia"
        ],
        "answer": "Anemia of chronic disease",
        "difficulty": "medium",
        "topic": "Geriatric Haematology",
        "explanation": "Anemia of chronic disease, common in geriatric populations, is normocytic due to impaired iron utilization and reduced erythropoiesis."
    },
    {
        "id": 151,
        "question": "What is the primary diagnostic feature of acute myeloid leukemia (AML)?",
        "options": [
            "Presence of smudge cells",
            "Auer rods in blast cells",
            "Monoclonal protein spike",
            "Philadelphia chromosome"
        ],
        "answer": "Auer rods in blast cells",
        "difficulty": "hard",
        "topic": "Leukaemias and Lymphomas",
        "explanation": "Auer rods, cytoplasmic inclusions in myeloblasts, are a diagnostic hallmark of AML, distinguishing it from other leukemias."
    },
    {
        "id": 152,
        "question": "Which laboratory finding is associated with hemolytic transfusion reactions?",
        "options": [
            "Elevated D-dimer",
            "Hemoglobinuria",
            "Monoclonal protein spike",
            "Howell-Jolly bodies"
        ],
        "answer": "Hemoglobinuria",
        "difficulty": "hard",
        "topic": "Blood Groups and Transfusion Medicine",
        "explanation": "Hemoglobinuria, the presence of hemoglobin in urine, occurs in hemolytic transfusion reactions due to red blood cell destruction."
    },
    {
        "id": 153,
        "question": "What is the primary role of clot retraction in hemostasis?",
        "options": [
            "Dissolve blood clots",
            "Stabilize the fibrin clot",
            "Reduce clot size",
            "Stimulate platelet production"
        ],
        "answer": "Reduce clot size",
        "difficulty": "medium",
        "topic": "Hemostasis",
        "explanation": "Clot retraction, mediated by platelets, compacts the fibrin clot, reducing its size and aiding wound closure."
    },
    {
        "id": 154,
        "question": "Which condition is associated with a high risk of thromboembolism in myeloproliferative disorders?",
        "options": [
            "Aplastic anemia",
            "Polycythemia vera",
            "Thalassemia",
            "Sickle cell disease"
        ],
        "answer": "Polycythemia vera",
        "difficulty": "hard",
        "topic": "Myeloproliferative Disorders",
        "explanation": "Polycythemia vera increases blood viscosity and platelet abnormalities, raising the risk of thromboembolism."
    },
    {
        "id": 155,
        "question": "What is the primary cause of macrocytic anemia in pediatric populations?",
        "options": [
            "Iron deficiency",
            "Vitamin B12 deficiency",
            "Sickle cell disease",
            "Thalassemia"
        ],
        "answer": "Vitamin B12 deficiency",
        "difficulty": "medium",
        "topic": "Pediatric Haematology",
        "explanation": "Vitamin B12 deficiency, though rare in children, can cause macrocytic anemia due to impaired DNA synthesis in red blood cell precursors."
    },
    {
        "id": 156,
        "question": "Which recent advance has improved outcomes in relapsed B-cell lymphomas?",
        "options": [
            "Gene therapy",
            "CAR-T cell therapy",
            "Tyrosine kinase inhibitors",
            "Iron chelation therapy"
        ],
        "answer": "CAR-T cell therapy",
        "difficulty": "hard",
        "topic": "Recent Advances",
        "explanation": "CAR-T cell therapy has shown significant success in treating relapsed B-cell lymphomas by targeting CD19 on malignant cells."
    },
    {
        "id": 157,
        "question": "What is the primary role of the mean corpuscular hemoglobin (MCH) in hematology?",
        "options": [
            "Measure red blood cell size",
            "Measure hemoglobin content per red blood cell",
            "Assess platelet function",
            "Detect fibrin degradation"
        ],
        "answer": "Measure hemoglobin content per red blood cell",
        "difficulty": "medium",
        "topic": "Erythrocytes",
        "explanation": "MCH measures the average hemoglobin content per red blood cell, aiding in classifying anemias."
    },
    {
        "id": 158,
        "question": "Which infection is associated with ring forms in red blood cells on blood smear?",
        "options": [
            "Leishmaniasis",
            "Malaria",
            "Trypanosomiasis",
            "Sepsis"
        ],
        "answer": "Malaria",
        "difficulty": "medium",
        "topic": "Infections Affecting Blood",
        "explanation": "Malaria, caused by Plasmodium, is characterized by ring forms (trophozoites) in red blood cells on blood smear."
    },
    {
        "id": 159,
        "question": "What is the primary role of fibrinolysis in hemostasis?",
        "options": [
            "Form a fibrin clot",
            "Dissolve blood clots",
            "Stimulate platelet production",
            "Reduce blood flow"
        ],
        "answer": "Dissolve blood clots",
        "difficulty": "medium",
        "topic": "Hemostasis",
        "explanation": "Fibrinolysis, mediated by plasmin, dissolves fibrin clots to restore vessel patency after hemostasis."
    },
    {
        "id": 160,
        "question": "Which condition is associated with a low mean corpuscular volume (MCV)?",
        "options": [
            "Megaloblastic anemia",
            "Iron deficiency anemia",
            "Aplastic anemia",
            "Hemolytic anemia"
        ],
        "answer": "Iron deficiency anemia",
        "difficulty": "medium",
        "topic": "Anaemias",
        "explanation": "Iron deficiency anemia is characterized by a low MCV, indicating microcytic red blood cells due to reduced hemoglobin synthesis."
    },
    {
        "id": 161,
        "question": "What is the primary diagnostic tool for staging Hodgkin lymphoma?",
        "options": [
            "Peripheral blood smear",
            "Lymph node biopsy",
            "Complete blood count",
            "D-dimer test"
        ],
        "answer": "Lymph node biopsy",
        "difficulty": "hard",
        "topic": "Leukaemias and Lymphomas",
        "explanation": "Lymph node biopsy is essential for diagnosing and staging Hodgkin lymphoma, identifying Reed-Sternberg cells and disease extent."
    },
    {
        "id": 162,
        "question": "Which hematologic parameter is elevated in sepsis?",
        "options": [
            "Hemoglobin",
            "White blood cell count",
            "Platelet count",
            "Reticulocyte count"
        ],
        "answer": "White blood cell count",
        "difficulty": "medium",
        "topic": "Infections Affecting Blood",
        "explanation": "Sepsis often causes leukocytosis due to an immune response to infection, though leukopenia can occur in severe cases."
    },
    {
        "id": 163,
        "question": "What is the primary role of the mean corpuscular hemoglobin concentration (MCHC)?",
        "options": [
            "Measure red blood cell size",
            "Measure hemoglobin concentration per red blood cell",
            "Assess platelet function",
            "Detect fibrin degradation"
        ],
        "answer": "Measure hemoglobin concentration per red blood cell",
        "difficulty": "medium",
        "topic": "Erythrocytes",
        "explanation": "MCHC measures the concentration of hemoglobin in red blood cells, helping identify conditions like spherocytosis."
    },
    {
        "id": 164,
        "question": "Which condition is associated with a high risk of bleeding in pediatric populations?",
        "options": [
            "Polycythemia vera",
            "Hemophilia",
            "Sickle cell disease",
            "Thalassemia"
        ],
        "answer": "Hemophilia",
        "difficulty": "medium",
        "topic": "Pediatric Haematology",
        "explanation": "Hemophilia, particularly A and B, is a common cause of bleeding in children due to clotting factor deficiencies."
    },
    {
        "id": 165,
        "question": "What is the primary advantage of biologics in treating hematologic disorders?",
        "options": [
            "Increase red blood cell production",
            "Target specific molecular pathways",
            "Correct clotting factor deficiencies",
            "Enhance transfusion compatibility"
        ],
        "answer": "Target specific molecular pathways",
        "difficulty": "hard",
        "topic": "Recent Advances",
        "explanation": "Biologics, like monoclonal antibodies, target specific molecular pathways, improving precision in treating leukemias and lymphomas."
    },
    {
        "id": 166,
        "question": "Which condition is associated with a high reticulocyte count in hemolytic anemias?",
        "options": [
            "Iron deficiency anemia",
            "Aplastic anemia",
            "Sickle cell disease",
            "Megaloblastic anemia"
        ],
        "answer": "Sickle cell disease",
        "difficulty": "medium",
        "topic": "Anaemias",
        "explanation": "Sickle cell disease, a hemolytic anemia, causes a high reticulocyte count as the bone marrow compensates for red blood cell destruction."
    },
    {
        "id": 167,
        "question": "What is the primary role of the International Normalized Ratio (INR)?",
        "options": [
            "Monitor heparin therapy",
            "Standardize prothrombin time results",
            "Measure platelet function",
            "Detect fibrin degradation"
        ],
        "answer": "Standardize prothrombin time results",
        "difficulty": "medium",
        "topic": "Coagulation Disorders",
        "explanation": "INR standardizes prothrombin time results for monitoring warfarin therapy and assessing coagulation status."
    },
    {
        "id": 168,
        "question": "Which infection is associated with amastigotes in macrophages?",
        "options": [
            "Malaria",
            "Leishmaniasis",
            "Trypanosomiasis",
            "Infectious mononucleosis"
        ],
        "answer": "Leishmaniasis",
        "difficulty": "hard",
        "topic": "Infections Affecting Blood",
        "explanation": "Leishmaniasis is characterized by amastigotes, the intracellular form of Leishmania parasites, in macrophages."
    },
    {
        "id": 169,
        "question": "What is the primary role of the spleen in hematopoiesis during fetal development?",
        "options": [
            "Produce clotting factors",
            "Filter pathogens",
            "Produce blood cells",
            "Store iron"
        ],
        "answer": "Produce blood cells",
        "difficulty": "medium",
        "topic": "Haemopoiesis",
        "explanation": "The spleen is a site of hematopoiesis during fetal development, producing blood cells before the bone marrow takes over."
    },
    {
        "id": 170,
        "question": "Which condition is associated with a low hemoglobin level in geriatric populations?",
        "options": [
            "Polycythemia vera",
            "Anemia of chronic disease",
            "Sickle cell disease",
            "Thalassemia"
        ],
        "answer": "Anemia of chronic disease",
        "difficulty": "medium",
        "topic": "Geriatric Haematology",
        "explanation": "Anemia of chronic disease is a common cause of low hemoglobin in geriatric populations due to chronic inflammation."
    },
    {
        "id": 171,
        "question": "What is the primary diagnostic feature of myelofibrosis?",
        "options": [
            "Presence of Auer rods",
            "Bone marrow fibrosis",
            "Monoclonal protein spike",
            "Smudge cells"
        ],
        "answer": "Bone marrow fibrosis",
        "difficulty": "hard",
        "topic": "Myeloproliferative Disorders",
        "explanation": "Myelofibrosis is diagnosed by bone marrow fibrosis, leading to ineffective hematopoiesis and extramedullary hematopoiesis."
    },
    {
        "id": 172,
        "question": "Which laboratory finding is associated with acute hemolytic transfusion reactions?",
        "options": [
            "Elevated INR",
            "Decreased haptoglobin",
            "Increased reticulocyte count",
            "Normal D-dimer"
        ],
        "answer": "Decreased haptoglobin",
        "difficulty": "hard",
        "topic": "Blood Groups and Transfusion Medicine",
        "explanation": "Decreased haptoglobin occurs in acute hemolytic transfusion reactions due to hemolysis, as haptoglobin binds free hemoglobin."
    },
    {
        "id": 173,
        "question": "What is the primary role of granulocyte colony-stimulating factor (G-CSF)?",
        "options": [
            "Stimulate red blood cell production",
            "Stimulate neutrophil production",
            "Enhance platelet function",
            "Regulate clotting factors"
        ],
        "answer": "Stimulate neutrophil production",
        "difficulty": "medium",
        "topic": "Haemopoiesis",
        "explanation": "G-CSF stimulates the production and maturation of neutrophils, used in treating neutropenia."
    },
    {
        "id": 174,
        "question": "Which condition is associated with a high risk of infection in pediatric populations?",
        "options": [
            "Polycythemia vera",
            "Sickle cell disease",
            "Thalassemia",
            "Hemophilia"
        ],
        "answer": "Sickle cell disease",
        "difficulty": "medium",
        "topic": "Pediatric Haematology",
        "explanation": "Sickle cell disease increases infection risk in children due to functional asplenia and impaired immune responses."
    },
    {
        "id": 175,
        "question": "What is the primary advantage of monoclonal antibodies in hematologic malignancies?",
        "options": [
            "Increase red blood cell production",
            "Target specific cancer cell antigens",
            "Correct clotting factor deficiencies",
            "Enhance transfusion compatibility"
        ],
        "answer": "Target specific cancer cell antigens",
        "difficulty": "hard",
        "topic": "Recent Advances",
        "explanation": "Monoclonal antibodies, like rituximab, target specific antigens on cancer cells, improving treatment specificity."
    },
    {
        "id": 176,
        "question": "Which condition is associated with a high mean corpuscular volume (MCV)?",
        "options": [
            "Iron deficiency anemia",
            "Megaloblastic anemia",
            "Aplastic anemia",
            "Sickle cell disease"
        ],
        "answer": "Megaloblastic anemia",
        "difficulty": "medium",
        "topic": "Anaemias",
        "explanation": "Megaloblastic anemia is characterized by a high MCV due to large, immature red blood cells from impaired DNA synthesis."
    },
    {
        "id": 177,
        "question": "What is the primary role of the prothrombin time (PT) test?",
        "options": [
            "Assess intrinsic coagulation pathway",
            "Assess extrinsic and common coagulation pathways",
            "Measure platelet function",
            "Detect fibrin degradation"
        ],
        "answer": "Assess extrinsic and common coagulation pathways",
        "difficulty": "medium",
        "topic": "Coagulation Disorders",
        "explanation": "PT assesses the extrinsic and common coagulation pathways, prolonged in conditions like vitamin K deficiency."
    },
    {
        "id": 178,
        "question": "Which infection is associated with trypomastigotes in blood smears?",
        "options": [
            "Malaria",
            "Leishmaniasis",
            "Trypanosomiasis",
            "Sepsis"
        ],
        "answer": "Trypanosomiasis",
        "difficulty": "hard",
        "topic": "Infections Affecting Blood",
        "explanation": "Trypanosomiasis is characterized by trypomastigotes, the flagellated form of Trypanosoma, in blood smears."
    },
    {
        "id": 179,
        "question": "What is the primary site of red blood cell destruction in the body?",
        "options": [
            "Liver",
            "Spleen",
            "Bone marrow",
            "Kidneys"
        ],
        "answer": "Spleen",
        "difficulty": "medium",
        "topic": "Erythrocytes",
        "explanation": "The spleen is the primary site of red blood cell destruction, removing old or damaged cells from circulation."
    },
    {
        "id": 180,
        "question": "Which condition is associated with a low platelet count in geriatric populations?",
        "options": [
            "Polycythemia vera",
            "Thrombocytopenia",
            "Sickle cell disease",
            "Thalassemia"
        ],
        "answer": "Thrombocytopenia",
        "difficulty": "medium",
        "topic": "Geriatric Haematology",
        "explanation": "Thrombocytopenia, often due to medications or marrow suppression, is a common cause of low platelet counts in geriatric populations."
    },
    {
        "id": 181,
        "question": "What is the primary diagnostic feature of chronic myeloid leukemia (CML)?",
        "options": [
            "Presence of Auer rods",
            "Philadelphia chromosome",
            "Monoclonal protein spike",
            "Smudge cells"
        ],
        "answer": "Philadelphia chromosome",
        "difficulty": "hard",
        "topic": "Leukaemias and Lymphomas",
        "explanation": "The Philadelphia chromosome, a t(9;22) translocation, is the diagnostic hallmark of CML, producing the BCR-ABL fusion gene."
    },
    {
        "id": 182,
        "question": "Which laboratory finding is associated with delayed hemolytic transfusion reactions?",
        "options": [
            "Elevated D-dimer",
            "Positive Coombs test",
            "Increased INR",
            "Normal haptoglobin"
        ],
        "answer": "Positive Coombs test",
        "difficulty": "hard",
        "topic": "Blood Groups and Transfusion Medicine",
        "explanation": "A positive Coombs test indicates antibody-mediated hemolysis in delayed hemolytic transfusion reactions."
    },
    {
        "id": 183,
        "question": "What is the primary role of interleukin-6 in hematopoiesis?",
        "options": [
            "Stimulate red blood cell production",
            "Stimulate inflammatory responses",
            "Enhance platelet function",
            "Regulate clotting factors"
        ],
        "answer": "Stimulate inflammatory responses",
        "difficulty": "hard",
        "topic": "Haemopoiesis",
        "explanation": "Interleukin-6 promotes inflammatory responses and supports hematopoiesis by stimulating progenitor cell differentiation."
    },
    {
        "id": 184,
        "question": "Which condition is associated with a high risk of vaso-occlusive crises in pediatric populations?",
        "options": [
            "Hemophilia",
            "Sickle cell disease",
            "Thalassemia",
            "Aplastic anemia"
        ],
        "answer": "Sickle cell disease",
        "difficulty": "medium",
        "topic": "Pediatric Haematology",
        "explanation": "Sickle cell disease causes vaso-occlusive crises in children due to sickled red blood cells obstructing blood vessels."
    },
    {
        "id": 185,
        "question": "What is the primary advantage of gene therapy in thalassemia?",
        "options": [
            "Increase platelet production",
            "Correct globin chain defects",
            "Enhance transfusion compatibility",
            "Monitor clotting factors"
        ],
        "answer": "Correct globin chain defects",
        "difficulty": "hard",
        "topic": "Recent Advances",
        "explanation": "Gene therapy in thalassemia corrects defects in globin chain production, reducing reliance on transfusions."
    },
    {
        "id": 186,
        "question": "Which condition is associated with a low reticulocyte count in anemias?",
        "options": [
            "Hemolytic anemia",
            "Aplastic anemia",
            "Sickle cell disease",
            "Thalassemia"
        ],
        "answer": "Aplastic anemia",
        "difficulty": "medium",
        "topic": "Anaemias",
        "explanation": "Aplastic anemia is characterized by a low reticulocyte count due to bone marrow failure and reduced red blood cell production."
    },
    {
        "id": 187,
        "question": "What is the primary role of the bleeding time test in hemostasis?",
        "options": [
            "Assess intrinsic coagulation pathway",
            "Evaluate platelet and vascular function",
            "Measure red blood cell production",
            "Detect fibrin degradation"
        ],
        "answer": "Evaluate platelet and vascular function",
        "difficulty": "medium",
        "topic": "Hemostasis",
        "explanation": "Bleeding time assesses platelet function and vascular integrity, prolonged in conditions like thrombocytopenia."
    },
    {
        "id": 188,
        "question": "Which infection is associated with schizonts in red blood cells?",
        "options": [
            "Leishmaniasis",
            "Malaria",
            "Trypanosomiasis",
            "Sepsis"
        ],
        "answer": "Malaria",
        "difficulty": "hard",
        "topic": "Infections Affecting Blood",
        "explanation": "Malaria is characterized by schizonts, a stage of Plasmodium in red blood cells, seen on blood smears."
    },
    {
        "id": 189,
        "question": "What is the primary site of cytokine production in hematopoiesis?",
        "options": [
            "Bone marrow",
            "Spleen",
            "Liver",
            "Kidneys"
        ],
        "answer": "Bone marrow",
        "difficulty": "hard",
        "topic": "Haemopoiesis",
        "explanation": "The bone marrow is a primary site of cytokine production, regulating hematopoiesis through growth factors and cytokines."
    },
    {
        "id": 190,
        "question": "Which condition is associated with a high white blood cell count in geriatric populations?",
        "options": [
            "Iron deficiency anemia",
            "Chronic lymphocytic leukemia",
            "Sickle cell disease",
            "Thalassemia"
        ],
        "answer": "Chronic lymphocytic leukemia",
        "difficulty": "medium",
        "topic": "Geriatric Haematology",
        "explanation": "CLL, common in geriatric populations, causes a high white blood cell count due to lymphocytosis."
    },
    {
        "id": 191,
        "question": "What is the primary diagnostic feature of acute lymphoblastic leukemia (ALL)?",
        "options": [
            "Presence of Auer rods",
            "Lymphoblasts in bone marrow",
            "Monoclonal protein spike",
            "Philadelphia chromosome"
        ],
        "answer": "Lymphoblasts in bone marrow",
        "difficulty": "hard",
        "topic": "Leukaemias and Lymphomas",
        "explanation": "ALL is diagnosed by the presence of lymphoblasts (>20%) in bone marrow or peripheral blood, confirmed by immunophenotyping."
    },
    {
        "id": 192,
        "question": "Which laboratory finding is associated with febrile non-hemolytic transfusion reactions?",
        "options": [
            "Hemoglobinuria",
            "Elevated D-dimer",
            "Fever and chills",
            "Positive Coombs test"
        ],
        "answer": "Fever and chills",
        "difficulty": "hard",
        "topic": "Blood Groups and Transfusion Medicine",
        "explanation": "Febrile non-hemolytic transfusion reactions present with fever and chills due to recipient antibodies against donor leukocytes."
    },
    {
        "id": 193,
        "question": "What is the primary role of thrombopoietin in hematopoiesis?",
        "options": [
            "Stimulate red blood cell production",
            "Stimulate platelet production",
            "Enhance immune responses",
            "Regulate clotting factors"
        ],
        "answer": "Stimulate platelet production",
        "difficulty": "medium",
        "topic": "Haemopoiesis",
        "explanation": "Thrombopoietin stimulates megakaryocyte maturation and platelet production in the bone marrow."
    },
    {
        "id": 194,
        "question": "Which condition is associated with a high risk of stroke in pediatric populations?",
        "options": [
            "Hemophilia",
            "Sickle cell disease",
            "Thalassemia",
            "Aplastic anemia"
        ],
        "answer": "Sickle cell disease",
        "difficulty": "medium",
        "topic": "Pediatric Haematology",
        "explanation": "Sickle cell disease increases stroke risk in children due to vaso-occlusion in cerebral blood vessels."
    },
    {
        "id": 195,
        "question": "What is the primary advantage of CRISPR in sickle cell disease treatment?",
        "options": [
            "Increase platelet production",
            "Correct hemoglobin gene mutations",
            "Enhance transfusion compatibility",
            "Monitor clotting factors"
        ],
        "answer": "Correct hemoglobin gene mutations",
        "difficulty": "hard",
        "topic": "Recent Advances",
        "explanation": "CRISPR can correct the HBB gene mutation in sickle cell disease, restoring normal hemoglobin production."
    },
    {
        "id": 196,
        "question": "Which condition is associated with a high lactate dehydrogenase (LDH) in hemolytic anemias?",
        "options": [
            "Iron deficiency anemia",
            "Sickle cell disease",
            "Aplastic anemia",
            "Megaloblastic anemia"
        ],
        "answer": "Sickle cell disease",
        "difficulty": "hard",
        "topic": "Anaemias",
        "explanation": "Sickle cell disease, a hemolytic anemia, causes elevated LDH due to red blood cell destruction."
    },
    {
        "id": 197,
        "question": "What is the primary role of the common coagulation pathway?",
        "options": [
            "Activate factor VIII",
            "Form thrombin and fibrin",
            "Stimulate platelet production",
            "Dissolve blood clots"
        ],
        "answer": "Form thrombin and fibrin",
        "difficulty": "medium",
        "topic": "Coagulation Disorders",
        "explanation": "The common coagulation pathway, involving factors X, V, and II, leads to thrombin activation and fibrin clot formation."
    },
    {
        "id": 198,
        "question": "Which infection is associated with gametocytes in blood smears?",
        "options": [
            "Leishmaniasis",
            "Malaria",
            "Trypanosomiasis",
            "Sepsis"
        ],
        "answer": "Malaria",
        "difficulty": "hard",
        "topic": "Infections Affecting Blood",
        "explanation": "Malaria is characterized by gametocytes, the sexual stage of Plasmodium, in blood smears, enabling mosquito transmission."
    },
    {
        "id": 199,
        "question": "What is the primary site of erythropoietin production in adults?",
        "options": [
            "Bone marrow",
            "Spleen",
            "Kidneys",
            "Liver"
        ],
        "answer": "Kidneys",
        "difficulty": "medium",
        "topic": "Haemopoiesis",
        "explanation": "The kidneys produce erythropoietin in adults, stimulating red blood cell production in response to hypoxia."
    },
    {
        "id": 200,
        "question": "Which condition is associated with a high risk of bleeding in geriatric populations?",
        "options": [
            "Polycythemia vera",
            "Thrombocytopenia",
            "Sickle cell disease",
            "Thalassemia"
        ],
        "answer": "Thrombocytopenia",
        "difficulty": "medium",
        "topic": "Geriatric Haematology",
        "explanation": "Thrombocytopenia increases bleeding risk in geriatric populations, often due to medications or bone marrow suppression."
    },
    {
        "id": 201,
        "question": "What is the primary scope of haematology as a medical discipline?",
        "options": [
            "Study of cardiovascular diseases",
            "Study of blood and its disorders",
            "Study of endocrine disorders",
            "Study of neurological conditions"
        ],
        "answer": "Study of blood and its disorders",
        "difficulty": "easy",
        "topic": "Introduction to Haematology",
        "explanation": "Haematology is the branch of medicine focused on the study, diagnosis, and treatment of blood and its disorders, including blood cells and coagulation."
    },
    {
        "id": 202,
        "question": "Which historical figure is credited with early discoveries in haematology through the use of microscopy?",
        "options": [
            "William Harvey",
            "Antonie van Leeuwenhoek",
            "Robert Koch",
            "Louis Pasteur"
        ],
        "answer": "Antonie van Leeuwenhoek",
        "difficulty": "medium",
        "topic": "Introduction to Haematology",
        "explanation": "Antonie van Leeuwenhoek, a pioneer of microscopy, made early observations of blood cells in the 17th century, contributing to the foundation of haematology."
    },
    {
        "id": 203,
        "question": "What is the primary role of plasma proteins in blood?",
        "options": [
            "Transport oxygen",
            "Maintain osmotic pressure and transport molecules",
            "Fight infections",
            "Form blood clots"
        ],
        "answer": "Maintain osmotic pressure and transport molecules",
        "difficulty": "medium",
        "topic": "Composition and Functions of Blood",
        "explanation": "Plasma proteins, such as albumin and globulins, maintain osmotic pressure, transport nutrients and hormones, and contribute to immune and clotting functions."
    },
    {
        "id": 204,
        "question": "Which blood component is primarily responsible for immune defense?",
        "options": [
            "Red blood cells",
            "Platelets",
            "White blood cells",
            "Plasma"
        ],
        "answer": "White blood cells",
        "difficulty": "easy",
        "topic": "Composition and Functions of Blood",
        "explanation": "White blood cells (leukocytes) are the primary mediators of immune defense, protecting the body against infections and foreign invaders."
    },
    {
        "id": 205,
        "question": "Which growth factor regulates thrombopoiesis?",
        "options": [
            "Erythropoietin",
            "Thrombopoietin",
            "Interleukin-3",
            "Granulocyte-macrophage colony-stimulating factor"
        ],
        "answer": "Thrombopoietin",
        "difficulty": "medium",
        "topic": "Haemopoiesis",
        "explanation": "Thrombopoietin, produced mainly in the liver, regulates thrombopoiesis by stimulating megakaryocyte maturation and platelet production."
    },
    {
        "id": 206,
        "question": "What is the primary site of hematopoiesis in the embryo during the first trimester?",
        "options": [
            "Bone marrow",
            "Yolk sac",
            "Spleen",
            "Liver"
        ],
        "answer": "Yolk sac",
        "difficulty": "medium",
        "topic": "Haemopoiesis",
        "explanation": "In the embryo, hematopoiesis begins in the yolk sac during the first trimester, later transitioning to the liver and spleen."
    },
    {
        "id": 207,
        "question": "Which component of hemoglobin binds oxygen?",
        "options": [
            "Globin chains",
            "Heme group",
            "Ferritin",
            "Transferrin"
        ],
        "answer": "Heme group",
        "difficulty": "medium",
        "topic": "Erythrocytes",
        "explanation": "The heme group in hemoglobin contains iron, which binds oxygen for transport from the lungs to tissues."
    },
    {
        "id": 208,
        "question": "What is the average lifespan of a red blood cell in circulation?",
        "options": [
            "30 days",
            "60 days",
            "120 days",
            "180 days"
        ],
        "answer": "120 days",
        "difficulty": "easy",
        "topic": "Erythrocytes",
        "explanation": "Red blood cells have an average lifespan of approximately 120 days before being removed by the spleen and liver."
    },
    {
        "id": 209,
        "question": "Which type of anemia is caused by acute blood loss?",
        "options": [
            "Microcytic anemia",
            "Normocytic anemia",
            "Macrocytic anemia",
            "Megaloblastic anemia"
        ],
        "answer": "Normocytic anemia",
        "difficulty": "medium",
        "topic": "Anaemias",
        "explanation": "Acute blood loss causes normocytic anemia, as the red blood cells are normal in size but reduced in number."
    },
    {
        "id": 210,
        "question": "What is the primary cause of intrinsic hemolytic anemia?",
        "options": [
            "Autoimmune destruction",
            "Red blood cell membrane defects",
            "Infections",
            "Drug-induced hemolysis"
        ],
        "answer": "Red blood cell membrane defects",
        "difficulty": "hard",
        "topic": "Anaemias",
        "explanation": "Intrinsic hemolytic anemias are caused by defects within the red blood cell, such as membrane disorders (e.g., hereditary spherocytosis) or hemoglobinopathies."
    },
    {
        "id": 211,
        "question": "Which white blood cell type is primarily involved in phagocytosis of bacteria?",
        "options": [
            "Lymphocytes",
            "Neutrophils",
            "Eosinophils",
            "Basophils"
        ],
        "answer": "Neutrophils",
        "difficulty": "medium",
        "topic": "White Blood Cells",
        "explanation": "Neutrophils are the primary phagocytic cells in the immune system, rapidly responding to bacterial infections."
    },
    {
        "id": 212,
        "question": "What is the primary cause of leukocytosis?",
        "options": [
            "Viral infections",
            "Bacterial infections",
            "Iron deficiency",
            "Vitamin B12 deficiency"
        ],
        "answer": "Bacterial infections",
        "difficulty": "medium",
        "topic": "WBC Disorders",
        "explanation": "Leukocytosis, an elevated white blood cell count, is commonly caused by bacterial infections, which stimulate neutrophil production."
    },
    {
        "id": 213,
        "question": "Which type of leukemia is characterized by rapid progression and immature blasts?",
        "options": [
            "Chronic lymphocytic leukemia",
            "Acute lymphoblastic leukemia",
            "Chronic myeloid leukemia",
            "Hodgkin lymphoma"
        ],
        "answer": "Acute lymphoblastic leukemia",
        "difficulty": "medium",
        "topic": "Leukaemias and Lymphomas",
        "explanation": "Acute lymphoblastic leukemia (ALL) is characterized by rapid progression and accumulation of immature lymphoblasts in bone marrow and blood."
    },
    {
        "id": 214,
        "question": "What is the primary role of platelets in hemostasis?",
        "options": [
            "Transport oxygen",
            "Form a platelet plug",
            "Produce antibodies",
            "Filter pathogens"
        ],
        "answer": "Form a platelet plug",
        "difficulty": "easy",
        "topic": "Platelets and Hemostasis",
        "explanation": "Platelets adhere to damaged vessel walls to form a platelet plug, initiating hemostasis to stop bleeding."
    },
    {
        "id": 215,
        "question": "Which clotting factor is activated first in the extrinsic coagulation pathway?",
        "options": [
            "Factor II",
            "Factor VII",
            "Factor IX",
            "Factor X"
        ],
        "answer": "Factor VII",
        "difficulty": "hard",
        "topic": "Coagulation and Bleeding Disorders",
        "explanation": "The extrinsic pathway is initiated by tissue factor activating factor VII, which then triggers the coagulation cascade."
    },
    {
        "id": 216,
        "question": "Which blood group antigen is associated with the Rh system?",
        "options": [
            "A antigen",
            "B antigen",
            "D antigen",
            "O antigen"
        ],
        "answer": "D antigen",
        "difficulty": "medium",
        "topic": "Blood Groups and Transfusion Medicine",
        "explanation": "The Rh system is defined by the presence or absence of the D antigen, determining Rh-positive or Rh-negative status."
    },
    {
        "id": 217,
        "question": "What is the primary purpose of the peripheral blood smear in hematology?",
        "options": [
            "Measure clotting time",
            "Assess cell morphology",
            "Monitor hemoglobin levels",
            "Detect fibrin degradation"
        ],
        "answer": "Assess cell morphology",
        "difficulty": "medium",
        "topic": "Laboratory Techniques",
        "explanation": "Peripheral blood smear examination allows visualization of blood cell morphology, aiding in diagnosing anemias, leukemias, and infections."
    },
    {
        "id": 218,
        "question": "Which infection is associated with pancytopenia and bone marrow suppression?",
        "options": [
            "Malaria",
            "HIV",
            "Trypanosomiasis",
            "Infectious mononucleosis"
        ],
        "answer": "HIV",
        "difficulty": "hard",
        "topic": "Infections Affecting Blood",
        "explanation": "HIV can cause pancytopenia by suppressing bone marrow function, leading to reduced production of all blood cell types."
    },
    {
        "id": 219,
        "question": "Which condition is characterized by teardrop-shaped red blood cells?",
        "options": [
            "Sickle cell disease",
            "Myelofibrosis",
            "Iron deficiency anemia",
            "Megaloblastic anemia"
        ],
        "answer": "Myelofibrosis",
        "difficulty": "hard",
        "topic": "Myeloproliferative Disorders",
        "explanation": "Myelofibrosis is associated with teardrop-shaped red blood cells (dacrocytes) due to bone marrow fibrosis and extramedullary hematopoiesis."
    },
    {
        "id": 220,
        "question": "Which hematologic condition is most prevalent in pediatric populations with Mediterranean ancestry?",
        "options": [
            "Hemophilia",
            "Thalassemia",
            "Sickle cell disease",
            "Aplastic anemia"
        ],
        "answer": "Thalassemia",
        "difficulty": "medium",
        "topic": "Pediatric Haematology",
        "explanation": "Thalassemia, particularly beta-thalassemia, is prevalent in children of Mediterranean ancestry due to genetic mutations in globin genes."
    },
    {
        "id": 221,
        "question": "What is the primary goal of gene therapy in hemoglobinopathies?",
        "options": [
            "Increase platelet production",
            "Correct defective globin genes",
            "Enhance immune responses",
            "Monitor clotting factors"
        ],
        "answer": "Correct defective globin genes",
        "difficulty": "hard",
        "topic": "Recent Advances",
        "explanation": "Gene therapy in hemoglobinopathies like sickle cell disease and thalassemia aims to correct defective globin genes to restore normal hemoglobin production."
    },
    {
        "id": 222,
        "question": "Which component of blood regulates body temperature?",
        "options": [
            "Red blood cells",
            "White blood cells",
            "Plasma",
            "Platelets"
        ],
        "answer": "Plasma",
        "difficulty": "easy",
        "topic": "Composition and Functions of Blood",
        "explanation": "Plasma, primarily water, helps regulate body temperature by distributing heat throughout the body."
    },
    {
        "id": 223,
        "question": "Which progenitor cell gives rise to both erythrocytes and megakaryocytes?",
        "options": [
            "Myeloid stem cell",
            "Lymphoid stem cell",
            "Hematopoietic stem cell",
            "Monocyte progenitor"
        ],
        "answer": "Myeloid stem cell",
        "difficulty": "hard",
        "topic": "Haemopoiesis",
        "explanation": "Myeloid stem cells differentiate into erythrocytes, megakaryocytes, and other myeloid lineage cells in the bone marrow."
    },
    {
        "id": 224,
        "question": "What is the primary role of the mean corpuscular hemoglobin concentration (MCHC)?",
        "options": [
            "Measure red blood cell size",
            "Measure hemoglobin concentration in red blood cells",
            "Assess platelet function",
            "Detect fibrin degradation"
        ],
        "answer": "Measure hemoglobin concentration in red blood cells",
        "difficulty": "medium",
        "topic": "Erythrocytes",
        "explanation": "MCHC measures the concentration of hemoglobin in red blood cells, aiding in the diagnosis of conditions like spherocytosis."
    },
    {
        "id": 225,
        "question": "Which type of anemia is associated with folate deficiency?",
        "options": [
            "Microcytic anemia",
            "Normocytic anemia",
            "Megaloblastic anemia",
            "Hemolytic anemia"
        ],
        "answer": "Megaloblastic anemia",
        "difficulty": "medium",
        "topic": "Anaemias",
        "explanation": "Folate deficiency impairs DNA synthesis, leading to megaloblastic anemia characterized by large, immature red blood cells."
    },
    {
        "id": 226,
        "question": "Which white blood cell type is elevated in allergic reactions?",
        "options": [
            "Neutrophils",
            "Lymphocytes",
            "Eosinophils",
            "Monocytes"
        ],
        "answer": "Eosinophils",
        "difficulty": "medium",
        "topic": "White Blood Cells",
        "explanation": "Eosinophils are elevated in allergic reactions due to their role in releasing mediators like histamine."
    },
    {
        "id": 227,
        "question": "What is the primary diagnostic feature of non-Hodgkin lymphoma?",
        "options": [
            "Presence of Reed-Sternberg cells",
            "Lymph node enlargement with clonal lymphocytes",
            "Philadelphia chromosome",
            "Auer rods"
        ],
        "answer": "Lymph node enlargement with clonal lymphocytes",
        "difficulty": "hard",
        "topic": "Leukaemias and Lymphomas",
        "explanation": "Non-Hodgkin lymphoma is diagnosed by lymph node enlargement with clonal lymphocyte proliferation, confirmed by biopsy and immunophenotyping."
    },
    {
        "id": 228,
        "question": "Which process initiates the coagulation cascade in the intrinsic pathway?",
        "options": [
            "Tissue factor exposure",
            "Contact activation",
            "Platelet aggregation",
            "Fibrin dissolution"
        ],
        "answer": "Contact activation",
        "difficulty": "hard",
        "topic": "Coagulation and Bleeding Disorders",
        "explanation": "The intrinsic pathway is initiated by contact activation, involving factor XII activation upon contact with negatively charged surfaces."
    },
    {
        "id": 229,
        "question": "Which test is used to detect hemolytic disease of the newborn?",
        "options": [
            "Coombs test",
            "D-dimer",
            "Prothrombin time",
            "Reticulocyte count"
        ],
        "answer": "Coombs test",
        "difficulty": "medium",
        "topic": "Blood Groups and Transfusion Medicine",
        "explanation": "The Coombs test detects antibodies or complement on red blood cells, used to diagnose hemolytic disease of the newborn."
    },
    {
        "id": 230,
        "question": "What is the primary purpose of bone marrow biopsy in hematologic malignancies?",
        "options": [
            "Measure hemoglobin levels",
            "Assess bone marrow cellularity and pathology",
            "Monitor clotting factors",
            "Detect transfusion reactions"
        ],
        "answer": "Assess bone marrow cellularity and pathology",
        "difficulty": "medium",
        "topic": "Laboratory Techniques",
        "explanation": "Bone marrow biopsy evaluates cellularity, structure, and pathology, critical for diagnosing leukemias and lymphomas."
    },
    {
        "id": 231,
        "question": "Which infection is associated with crescent-shaped gametocytes in blood smears?",
        "options": [
            "Plasmodium falciparum",
            "Trypanosoma cruzi",
            "Leishmania donovani",
            "Epstein-Barr virus"
        ],
        "answer": "Plasmodium falciparum",
        "difficulty": "hard",
        "topic": "Infections Affecting Blood",
        "explanation": "Plasmodium falciparum malaria is characterized by crescent-shaped gametocytes in blood smears, aiding diagnosis."
    },
    {
        "id": 232,
        "question": "Which condition is characterized by lytic bone lesions and renal impairment?",
        "options": [
            "Chronic myeloid leukemia",
            "Multiple myeloma",
            "Hodgkin lymphoma",
            "Aplastic anemia"
        ],
        "answer": "Multiple myeloma",
        "difficulty": "hard",
        "topic": "Hematologic Malignancies",
        "explanation": "Multiple myeloma presents with lytic bone lesions, hypercalcemia, renal impairment, and anemia due to plasma cell proliferation."
    },
    {
        "id": 233,
        "question": "Which hematologic condition is common in geriatric populations and associated with lymphocytosis?",
        "options": [
            "Sickle cell disease",
            "Chronic lymphocytic leukemia",
            "Thalassemia",
            "Hemophilia"
        ],
        "answer": "Chronic lymphocytic leukemia",
        "difficulty": "medium",
        "topic": "Geriatric Haematology",
        "explanation": "Chronic lymphocytic leukemia is common in older adults, characterized by lymphocytosis and often asymptomatic at diagnosis."
    },
    {
        "id": 234,
        "question": "What is the primary role of CAR-T cell therapy in hematologic malignancies?",
        "options": [
            "Correct genetic mutations",
            "Target specific cancer cell antigens",
            "Increase red blood cell production",
            "Regulate clotting factors"
        ],
        "answer": "Target specific cancer cell antigens",
        "difficulty": "hard",
        "topic": "Recent Advances",
        "explanation": "CAR-T cell therapy modifies T-cells to target specific cancer cell antigens, effective in treating leukemias and lymphomas."
    },
    {
        "id": 235,
        "question": "Which type of anemia is associated with chronic renal failure?",
        "options": [
            "Microcytic anemia",
            "Normocytic anemia",
            "Macrocytic anemia",
            "Hemolytic anemia"
        ],
        "answer": "Normocytic anemia",
        "difficulty": "medium",
        "topic": "Anaemias",
        "explanation": "Chronic renal failure causes normocytic anemia due to reduced erythropoietin production, impairing red blood cell synthesis."
    },
    {
        "id": 236,
        "question": "Which white blood cell type is primarily involved in antibody production?",
        "options": [
            "Neutrophils",
            "B lymphocytes",
            "T lymphocytes",
            "Monocytes"
        ],
        "answer": "B lymphocytes",
        "difficulty": "medium",
        "topic": "White Blood Cells",
        "explanation": "B lymphocytes produce antibodies, playing a key role in humoral immunity."
    },
    {
        "id": 237,
        "question": "What is the primary diagnostic feature of acute myeloid leukemia (AML)?",
        "options": [
            "Presence of smudge cells",
            "Auer rods in myeloblasts",
            "Monoclonal protein spike",
            "Reed-Sternberg cells"
        ],
        "answer": "Auer rods in myeloblasts",
        "difficulty": "hard",
        "topic": "Leukaemias and Lymphomas",
        "explanation": "Auer rods, rod-like inclusions in myeloblasts, are a hallmark of AML, aiding in its diagnosis."
    },
    {
        "id": 238,
        "question": "Which factor is critical for platelet adhesion in hemostasis?",
        "options": [
            "Factor VIII",
            "Von Willebrand factor",
            "Factor IX",
            "Fibrinogen"
        ],
        "answer": "Von Willebrand factor",
        "difficulty": "medium",
        "topic": "Platelets and Hemostasis",
        "explanation": "Von Willebrand factor mediates platelet adhesion to damaged vessel walls, initiating platelet plug formation."
    },
    {
        "id": 239,
        "question": "Which test is used to monitor vitamin K-dependent clotting factors?",
        "options": [
            "Activated partial thromboplastin time (aPTT)",
            "Prothrombin time (PT)",
            "Bleeding time",
            "D-dimer"
        ],
        "answer": "Prothrombin time (PT)",
        "difficulty": "medium",
        "topic": "Coagulation and Bleeding Disorders",
        "explanation": "PT monitors vitamin K-dependent clotting factors (II, VII, IX, X), prolonged in deficiencies or warfarin therapy."
    },
    {
        "id": 240,
        "question": "What is the primary cause of transfusion-related acute lung injury (TRALI)?",
        "options": [
            "ABO incompatibility",
            "Donor leukocyte antibodies",
            "Iron overload",
            "Vitamin B12 deficiency"
        ],
        "answer": "Donor leukocyte antibodies",
        "difficulty": "hard",
        "topic": "Blood Groups and Transfusion Medicine",
        "explanation": "TRALI is caused by donor leukocyte antibodies reacting with recipient leukocytes, leading to pulmonary edema and respiratory distress."
    },
    {
        "id": 241,
        "question": "Which laboratory technique is used to quantify specific blood cell populations?",
        "options": [
            "Flow cytometry",
            "Peripheral blood smear",
            "ESR",
            "D-dimer"
        ],
        "answer": "Flow cytometry",
        "difficulty": "hard",
        "topic": "Laboratory Techniques",
        "explanation": "Flow cytometry quantifies and characterizes blood cell populations by detecting cell surface markers, used in leukemia and lymphoma diagnosis."
    },
    {
        "id": 242,
        "question": "Which infection is associated with hemophagocytic syndrome in severe cases?",
        "options": [
            "Malaria",
            "Epstein-Barr virus",
            "Trypanosomiasis",
            "Leishmaniasis"
        ],
        "answer": "Epstein-Barr virus",
        "difficulty": "hard",
        "topic": "Infections Affecting Blood",
        "explanation": "EBV can trigger hemophagocytic lymphohistiocytosis, a severe syndrome involving excessive macrophage activation and blood cell destruction."
    },
    {
        "id": 243,
        "question": "Which condition is associated with a JAK2 mutation and thrombocytosis?",
        "options": [
            "Aplastic anemia",
            "Essential thrombocythemia",
            "Sickle cell disease",
            "Thalassemia"
        ],
        "answer": "Essential thrombocythemia",
        "difficulty": "hard",
        "topic": "Myeloproliferative Disorders",
        "explanation": "Essential thrombocythemia, a myeloproliferative disorder, is associated with JAK2 mutations and elevated platelet counts."
    },
    {
        "id": 244,
        "question": "Which hematologic condition is associated with recurrent infections in children?",
        "options": [
            "Sickle cell disease",
            "Hemophilia",
            "Thalassemia",
            "Polycythemia vera"
        ],
        "answer": "Sickle cell disease",
        "difficulty": "medium",
        "topic": "Pediatric Haematology",
        "explanation": "Sickle cell disease causes functional asplenia, increasing susceptibility to infections, particularly in children."
    },
    {
        "id": 245,
        "question": "What is the primary role of CRISPR in hematologic research?",
        "options": [
            "Increase red blood cell production",
            "Edit defective genes",
            "Enhance transfusion compatibility",
            "Monitor clotting factors"
        ],
        "answer": "Edit defective genes",
        "difficulty": "hard",
        "topic": "Recent Advances",
        "explanation": "CRISPR allows precise editing of defective genes, offering potential cures for hemoglobinopathies like sickle cell disease."
    },
    {
        "id": 246,
        "question": "Which type of anemia is associated with glucose-6-phosphate dehydrogenase (G6PD) deficiency?",
        "options": [
            "Microcytic anemia",
            "Normocytic anemia",
            "Hemolytic anemia",
            "Megaloblastic anemia"
        ],
        "answer": "Hemolytic anemia",
        "difficulty": "medium",
        "topic": "Anaemias",
        "explanation": "G6PD deficiency causes hemolytic anemia by impairing red blood cell protection against oxidative stress."
    },
    {
        "id": 247,
        "question": "Which white blood cell type is primarily involved in cell-mediated immunity?",
        "options": [
            "B lymphocytes",
            "T lymphocytes",
            "Neutrophils",
            "Monocytes"
        ],
        "answer": "T lymphocytes",
        "difficulty": "medium",
        "topic": "White Blood Cells",
        "explanation": "T lymphocytes mediate cell-mediated immunity, including cytotoxic and helper T-cell functions."
    },
    {
        "id": 248,
        "question": "What is the primary diagnostic feature of Hodgkin lymphoma?",
        "options": [
            "Presence of Auer rods",
            "Reed-Sternberg cells",
            "Monoclonal protein spike",
            "Smudge cells"
        ],
        "answer": "Reed-Sternberg cells",
        "difficulty": "hard",
        "topic": "Leukaemias and Lymphomas",
        "explanation": "Hodgkin lymphoma is diagnosed by the presence of Reed-Sternberg cells in lymph node biopsies."
    },
    {
        "id": 249,
        "question": "Which factor is essential for fibrin clot stabilization?",
        "options": [
            "Factor VII",
            "Factor VIII",
            "Factor XIII",
            "Von Willebrand factor"
        ],
        "answer": "Factor XIII",
        "difficulty": "hard",
        "topic": "Coagulation and Bleeding Disorders",
        "explanation": "Factor XIII cross-links fibrin, stabilizing the clot to prevent premature dissolution."
    },
    {
        "id": 250,
        "question": "What is the primary cause of febrile non-hemolytic transfusion reactions?",
        "options": [
            "ABO incompatibility",
            "Cytokines in stored blood",
            "Iron overload",
            "Vitamin K deficiency"
        ],
        "answer": "Cytokines in stored blood",
        "difficulty": "hard",
        "topic": "Blood Groups and Transfusion Medicine",
        "explanation": "Febrile non-hemolytic transfusion reactions are caused by cytokines accumulated in stored blood, triggering fever and chills."
    },
    {
        "id": 251,
        "question": "Which laboratory technique is used to detect malaria parasites in blood?",
        "options": [
            "Flow cytometry",
            "Peripheral blood smear",
            "ESR",
            "D-dimer"
        ],
        "answer": "Peripheral blood smear",
        "difficulty": "medium",
        "topic": "Laboratory Techniques",
        "explanation": "Peripheral blood smear is used to visualize malaria parasites, such as Plasmodium ring forms, in red blood cells."
    },
    {
        "id": 252,
        "question": "Which infection is associated with bone marrow granulomas?",
        "options": [
            "Malaria",
            "Leishmaniasis",
            "Trypanosomiasis",
            "Infectious mononucleosis"
        ],
        "answer": "Leishmaniasis",
        "difficulty": "hard",
        "topic": "Infections Affecting Blood",
        "explanation": "Leishmaniasis can cause bone marrow granulomas due to macrophage infection by Leishmania parasites."
    },
    {
        "id": 253,
        "question": "Which condition is characterized by splenomegaly and pancytopenia?",
        "options": [
            "Polycythemia vera",
            "Myelofibrosis",
            "Iron deficiency anemia",
            "Sickle cell disease"
        ],
        "answer": "Myelofibrosis",
        "difficulty": "hard",
        "topic": "Myeloproliferative Disorders",
        "explanation": "Myelofibrosis causes splenomegaly due to extramedullary hematopoiesis and pancytopenia from bone marrow failure."
    },
    {
        "id": 254,
        "question": "Which hematologic condition is associated with painful crises in children?",
        "options": [
            "Hemophilia",
            "Sickle cell disease",
            "Thalassemia",
            "Aplastic anemia"
        ],
        "answer": "Sickle cell disease",
        "difficulty": "medium",
        "topic": "Pediatric Haematology",
        "explanation": "Sickle cell disease causes painful vaso-occlusive crises in children due to sickled red blood cells obstructing blood vessels."
    },
    {
        "id": 255,
        "question": "What is the primary advantage of targeted therapies in leukemia treatment?",
        "options": [
            "Increase red blood cell production",
            "Reduce side effects compared to chemotherapy",
            "Correct clotting factor deficiencies",
            "Enhance transfusion compatibility"
        ],
        "answer": "Reduce side effects compared to chemotherapy",
        "difficulty": "hard",
        "topic": "Recent Advances",
        "explanation": "Targeted therapies, like tyrosine kinase inhibitors, reduce side effects by specifically targeting cancer cells."
    },
    {
        "id": 256,
        "question": "Which type of anemia is associated with lead poisoning?",
        "options": [
            "Microcytic anemia",
            "Normocytic anemia",
            "Macrocytic anemia",
            "Hemolytic anemia"
        ],
        "answer": "Microcytic anemia",
        "difficulty": "hard",
        "topic": "Anaemias",
        "explanation": "Lead poisoning inhibits heme synthesis, leading to microcytic anemia with small, pale red blood cells."
    },
    {
        "id": 257,
        "question": "Which white blood cell type is primarily involved in parasitic infections?",
        "options": [
            "Neutrophils",
            "Lymphocytes",
            "Eosinophils",
            "Monocytes"
        ],
        "answer": "Eosinophils",
        "difficulty": "medium",
        "topic": "White Blood Cells",
        "explanation": "Eosinophils are primarily involved in combating parasitic infections, releasing toxic proteins to kill parasites."
    },
    {
        "id": 258,
        "question": "What is the primary diagnostic feature of chronic lymphocytic leukemia (CLL)?",
        "options": [
            "Presence of Auer rods",
            "Lymphocytosis with smudge cells",
            "Monoclonal protein spike",
            "Reed-Sternberg cells"
        ],
        "answer": "Lymphocytosis with smudge cells",
        "difficulty": "hard",
        "topic": "Leukaemias and Lymphomas",
        "explanation": "CLL is characterized by lymphocytosis with fragile lymphocytes appearing as smudge cells on peripheral blood smear."
    },
    {
        "id": 259,
        "question": "Which factor is deficient in hemophilia A?",
        "options": [
            "Factor VII",
            "Factor VIII",
            "Factor IX",
            "Factor X"
        ],
        "answer": "Factor VIII",
        "difficulty": "medium",
        "topic": "Coagulation and Bleeding Disorders",
        "explanation": "Hemophilia A is caused by a deficiency in factor VIII, impairing the intrinsic coagulation pathway."
    },
    {
        "id": 260,
        "question": "What is the primary cause of hemolytic transfusion reactions?",
        "options": [
            "ABO incompatibility",
            "Iron overload",
            "Vitamin K deficiency",
            "Cytokine release"
        ],
        "answer": "ABO incompatibility",
        "difficulty": "medium",
        "topic": "Blood Groups and Transfusion Medicine",
        "explanation": "ABO incompatibility causes hemolytic transfusion reactions due to recipient antibodies attacking donor red blood cells."
    },
    {
        "id": 261,
        "question": "Which laboratory technique is used to assess bone marrow pathology?",
        "options": [
            "Complete blood count",
            "Peripheral blood smear",
            "Bone marrow aspiration",
            "ESR"
        ],
        "answer": "Bone marrow aspiration",
        "difficulty": "medium",
        "topic": "Laboratory Techniques",
        "explanation": "Bone marrow aspiration allows direct examination of bone marrow cells, aiding in diagnosing leukemias and marrow disorders."
    },
    {
        "id": 262,
        "question": "Which infection is associated with trypomastigotes in blood?",
        "options": [
            "Malaria",
            "Leishmaniasis",
            "Trypanosomiasis",
            "Sepsis"
        ],
        "answer": "Trypanosomiasis",
        "difficulty": "hard",
        "topic": "Infections Affecting Blood",
        "explanation": "Trypanosomiasis is characterized by trypomastigotes, the flagellated form of Trypanosoma, in blood smears."
    },
    {
        "id": 263,
        "question": "Which condition is associated with a high erythrocyte sedimentation rate (ESR)?",
        "options": [
            "Iron deficiency anemia",
            "Chronic inflammation",
            "Sickle cell disease",
            "Thalassemia"
        ],
        "answer": "Chronic inflammation",
        "difficulty": "medium",
        "topic": "Laboratory Techniques",
        "explanation": "Chronic inflammation increases ESR due to elevated plasma proteins, causing red blood cells to clump and settle faster."
    },
    {
        "id": 264,
        "question": "Which hematologic condition is associated with joint bleeding in children?",
        "options": [
            "Sickle cell disease",
            "Hemophilia",
            "Thalassemia",
            "Aplastic anemia"
        ],
        "answer": "Hemophilia",
        "difficulty": "medium",
        "topic": "Pediatric Haematology",
        "explanation": "Hemophilia causes joint bleeding (hemarthrosis) in children due to clotting factor deficiencies."
    },
    {
        "id": 265,
        "question": "What is the primary advantage of monoclonal antibodies in lymphoma treatment?",
        "options": [
            "Increase red blood cell production",
            "Target specific cancer cell antigens",
            "Correct clotting factor deficiencies",
            "Enhance transfusion compatibility"
        ],
        "answer": "Target specific cancer cell antigens",
        "difficulty": "hard",
        "topic": "Recent Advances",
        "explanation": "Monoclonal antibodies, like rituximab, target specific antigens (e.g., CD20) on lymphoma cells, improving treatment specificity."
    },
    {
        "id": 266,
        "question": "Which type of anemia is associated with spherocytes on blood smear?",
        "options": [
            "Iron deficiency anemia",
            "Hereditary spherocytosis",
            "Megaloblastic anemia",
            "Sickle cell disease"
        ],
        "answer": "Hereditary spherocytosis",
        "difficulty": "hard",
        "topic": "Anaemias",
        "explanation": "Hereditary spherocytosis is characterized by spherocytes, round red blood cells with reduced membrane flexibility, leading to hemolytic anemia."
    },
    {
        "id": 267,
        "question": "Which white blood cell type is primarily involved in antigen presentation?",
        "options": [
            "Neutrophils",
            "Lymphocytes",
            "Monocytes",
            "Basophils"
        ],
        "answer": "Monocytes",
        "difficulty": "medium",
        "topic": "White Blood Cells",
        "explanation": "Monocytes differentiate into macrophages and dendritic cells, which present antigens to T-cells to initiate immune responses."
    },
    {
        "id": 268,
        "question": "What is the primary diagnostic feature of myelodysplastic syndromes?",
        "options": [
            "Presence of Auer rods",
            "Ineffective hematopoiesis",
            "Monoclonal protein spike",
            "Reed-Sternberg cells"
        ],
        "answer": "Ineffective hematopoiesis",
        "difficulty": "hard",
        "topic": "Hematologic Malignancies",
        "explanation": "Myelodysplastic syndromes are characterized by ineffective hematopoiesis, leading to cytopenias despite a hypercellular bone marrow."
    },
    {
        "id": 269,
        "question": "Which factor is deficient in hemophilia B?",
        "options": [
            "Factor VII",
            "Factor VIII",
            "Factor IX",
            "Factor X"
        ],
        "answer": "Factor IX",
        "difficulty": "medium",
        "topic": "Coagulation and Bleeding Disorders",
        "explanation": "Hemophilia B is caused by a deficiency in factor IX, impairing the intrinsic coagulation pathway."
    },
    {
        "id": 270,
        "question": "What is the primary cause of delayed hemolytic transfusion reactions?",
        "options": [
            "ABO incompatibility",
            "Minor antigen incompatibility",
            "Iron overload",
            "Cytokine release"
        ],
        "answer": "Minor antigen incompatibility",
        "difficulty": "hard",
        "topic": "Blood Groups and Transfusion Medicine",
        "explanation": "Delayed hemolytic transfusion reactions are caused by minor antigen incompatibilities, leading to gradual hemolysis days after transfusion."
    },
    {
        "id": 271,
        "question": "Which laboratory technique is used to detect specific enzymes in leukemia cells?",
        "options": [
            "Flow cytometry",
            "Cytochemistry",
            "Peripheral blood smear",
            "ESR"
        ],
        "answer": "Cytochemistry",
        "difficulty": "hard",
        "topic": "Laboratory Techniques",
        "explanation": "Cytochemistry detects specific enzymes, like myeloperoxidase, in leukemia cells, aiding in distinguishing AML from ALL."
    },
    {
        "id": 272,
        "question": "Which infection is associated with amastigotes in macrophages?",
        "options": [
            "Malaria",
            "Leishmaniasis",
            "Trypanosomiasis",
            "Infectious mononucleosis"
        ],
        "answer": "Leishmaniasis",
        "difficulty": "hard",
        "topic": "Infections Affecting Blood",
        "explanation": "Leishmaniasis is characterized by amastigotes, the intracellular form of Leishmania, in macrophages."
    },
    {
        "id": 273,
        "question": "Which condition is associated with a high lactate dehydrogenase (LDH) in hematologic malignancies?",
        "options": [
            "Aplastic anemia",
            "Multiple myeloma",
            "Iron deficiency anemia",
            "Thalassemia"
        ],
        "answer": "Multiple myeloma",
        "difficulty": "hard",
        "topic": "Hematologic Malignancies",
        "explanation": "Multiple myeloma causes elevated LDH due to increased cell turnover and hemolysis."
    },
    {
        "id": 274,
        "question": "Which hematologic condition is associated with stroke risk in children?",
        "options": [
            "Hemophilia",
            "Sickle cell disease",
            "Thalassemia",
            "Aplastic anemia"
        ],
        "answer": "Sickle cell disease",
        "difficulty": "medium",
        "topic": "Pediatric Haematology",
        "explanation": "Sickle cell disease increases stroke risk in children due to vaso-occlusion in cerebral blood vessels."
    },
    {
        "id": 275,
        "question": "What is the primary role of gene therapy in thalassemia treatment?",
        "options": [
            "Increase platelet production",
            "Correct globin chain defects",
            "Enhance immune responses",
            "Monitor clotting factors"
        ],
        "answer": "Correct globin chain defects",
        "difficulty": "hard",
        "topic": "Recent Advances",
        "explanation": "Gene therapy corrects globin chain defects in thalassemia, reducing transfusion dependence."
    },
    {
        "id": 276,
        "question": "Which type of anemia is associated with a low reticulocyte count?",
        "options": [
            "Hemolytic anemia",
            "Iron deficiency anemia",
            "Sickle cell disease",
            "Thalassemia"
        ],
        "answer": "Iron deficiency anemia",
        "difficulty": "medium",
        "topic": "Anaemias",
        "explanation": "Iron deficiency anemia causes a low reticulocyte count due to impaired hemoglobin synthesis and reduced red blood cell production."
    },
    {
        "id": 277,
        "question": "Which white blood cell type is primarily involved in allergic responses?",
        "options": [
            "Neutrophils",
            "Lymphocytes",
            "Basophils",
            "Monocytes"
        ],
        "answer": "Basophils",
        "difficulty": "medium",
        "topic": "White Blood Cells",
        "explanation": "Basophils release histamine and other mediators, playing a key role in allergic responses."
    },
    {
        "id": 278,
        "question": "What is the primary diagnostic feature of essential thrombocythemia?",
        "options": [
            "Presence of Auer rods",
            "Elevated platelet count",
            "Monoclonal protein spike",
            "Smudge cells"
        ],
        "answer": "Elevated platelet count",
        "difficulty": "hard",
        "topic": "Myeloproliferative Disorders",
        "explanation": "Essential thrombocythemia is characterized by an elevated platelet count due to clonal megakaryocyte proliferation."
    },
    {
        "id": 279,
        "question": "Which factor is critical for the common coagulation pathway?",
        "options": [
            "Factor VII",
            "Factor VIII",
            "Factor X",
            "Von Willebrand factor"
        ],
        "answer": "Factor X",
        "difficulty": "hard",
        "topic": "Coagulation and Bleeding Disorders",
        "explanation": "Factor X is activated in both intrinsic and extrinsic pathways, converging in the common pathway to produce thrombin."
    },
    {
        "id": 280,
        "question": "What is the primary cause of transfusion-associated circulatory overload (TACO)?",
        "options": [
            "ABO incompatibility",
            "Rapid transfusion volume",
            "Iron overload",
            "Cytokine release"
        ],
        "answer": "Rapid transfusion volume",
        "difficulty": "hard",
        "topic": "Blood Groups and Transfusion Medicine",
        "explanation": "TACO is caused by rapid transfusion overwhelming the cardiovascular system, leading to pulmonary edema."
    },
    {
        "id": 281,
        "question": "Which laboratory technique is used to measure red blood cell volume?",
        "options": [
            "Flow cytometry",
            "Peripheral blood smear",
            "Packed cell volume (PCV)",
            "D-dimer"
        ],
        "answer": "Packed cell volume (PCV)",
        "difficulty": "medium",
        "topic": "Laboratory Techniques",
        "explanation": "PCV, or hematocrit, measures the proportion of red blood cells in total blood volume."
    },
    {
        "id": 282,
        "question": "Which infection is associated with ring forms in red blood cells?",
        "options": [
            "Malaria",
            "Leishmaniasis",
            "Trypanosomiasis",
            "Sepsis"
        ],
        "answer": "Malaria",
        "difficulty": "medium",
        "topic": "Infections Affecting Blood",
        "explanation": "Malaria is characterized by ring forms (trophozoites) of Plasmodium in red blood cells on blood smear."
    },
    {
        "id": 283,
        "question": "Which condition is associated with a high reticulocyte count in myeloproliferative disorders?",
        "options": [
            "Aplastic anemia",
            "Polycythemia vera",
            "Iron deficiency anemia",
            "Thalassemia"
        ],
        "answer": "Polycythemia vera",
        "difficulty": "hard",
        "topic": "Myeloproliferative Disorders",
        "explanation": "Polycythemia vera causes a high reticulocyte count due to increased red blood cell production driven by JAK2 mutations."
    },
    {
        "id": 284,
        "question": "Which hematologic condition is associated with gallstones in children?",
        "options": [
            "Hemophilia",
            "Sickle cell disease",
            "Thalassemia",
            "Aplastic anemia"
        ],
        "answer": "Sickle cell disease",
        "difficulty": "medium",
        "topic": "Pediatric Haematology",
        "explanation": "Sickle cell disease causes gallstones due to chronic hemolysis and increased bilirubin production."
    },
    {
        "id": 285,
        "question": "What is the primary role of biologics in hematologic malignancy treatment?",
        "options": [
            "Increase red blood cell production",
            "Target specific molecular pathways",
            "Correct clotting factor deficiencies",
            "Enhance transfusion compatibility"
        ],
        "answer": "Target specific molecular pathways",
        "difficulty": "hard",
        "topic": "Recent Advances",
        "explanation": "Biologics, like monoclonal antibodies, target specific molecular pathways in cancer cells, improving treatment efficacy."
    },
    {
        "id": 286,
        "question": "Which type of anemia is associated with chronic inflammation?",
        "options": [
            "Microcytic anemia",
            "Normocytic anemia",
            "Macrocytic anemia",
            "Hemolytic anemia"
        ],
        "answer": "Normocytic anemia",
        "difficulty": "medium",
        "topic": "Anaemias",
        "explanation": "Chronic inflammation causes normocytic anemia due to impaired iron utilization and reduced erythropoiesis."
    },
    {
        "id": 287,
        "question": "Which white blood cell type is primarily involved in phagocytosis of fungi?",
        "options": [
            "Neutrophils",
            "Lymphocytes",
            "Eosinophils",
            "Monocytes"
        ],
        "answer": "Neutrophils",
        "difficulty": "medium",
        "topic": "White Blood Cells",
        "explanation": "Neutrophils are the primary phagocytic cells for fungi, particularly in invasive fungal infections."
    },
    {
        "id": 288,
        "question": "What is the primary diagnostic feature of polycythemia vera?",
        "options": [
            "Presence of Auer rods",
            "Elevated red blood cell mass",
            "Monoclonal protein spike",
            "Smudge cells"
        ],
        "answer": "Elevated red blood cell mass",
        "difficulty": "hard",
        "topic": "Myeloproliferative Disorders",
        "explanation": "Polycythemia vera is characterized by elevated red blood cell mass due to JAK2-driven overproduction."
    },
    {
        "id": 289,
        "question": "Which factor is activated by tissue factor in the coagulation cascade?",
        "options": [
            "Factor VII",
            "Factor VIII",
            "Factor IX",
            "Factor X"
        ],
        "answer": "Factor VII",
        "difficulty": "hard",
        "topic": "Coagulation and Bleeding Disorders",
        "explanation": "Tissue factor activates factor VII in the extrinsic pathway, initiating the coagulation cascade."
    },
    {
        "id": 290,
        "question": "What is the primary cause of iron overload in transfusion-dependent patients?",
        "options": [
            "ABO incompatibility",
            "Repeated blood transfusions",
            "Vitamin K deficiency",
            "Cytokine release"
        ],
        "answer": "Repeated blood transfusions",
        "difficulty": "medium",
        "topic": "Blood Groups and Transfusion Medicine",
        "explanation": "Repeated blood transfusions in conditions like thalassemia cause iron overload due to excessive iron accumulation."
    },
    {
        "id": 291,
        "question": "Which laboratory technique is used to assess red blood cell size?",
        "options": [
            "Flow cytometry",
            "Mean corpuscular volume (MCV)",
            "Peripheral blood smear",
            "D-dimer"
        ],
        "answer": "Mean corpuscular volume (MCV)",
        "difficulty": "medium",
        "topic": "Laboratory Techniques",
        "explanation": "MCV measures the average size of red blood cells, aiding in classifying anemias as microcytic, normocytic, or macrocytic."
    },
    {
        "id": 292,
        "question": "Which infection is associated with schizonts in red blood cells?",
        "options": [
            "Malaria",
            "Leishmaniasis",
            "Trypanosomiasis",
            "Sepsis"
        ],
        "answer": "Malaria",
        "difficulty": "hard",
        "topic": "Infections Affecting Blood",
        "explanation": "Malaria is characterized by schizonts, a stage of Plasmodium, in red blood cells on blood smear."
    },
    {
        "id": 293,
        "question": "Which condition is associated with a high D-dimer level?",
        "options": [
            "Iron deficiency anemia",
            "Disseminated intravascular coagulation",
            "Sickle cell disease",
            "Thalassemia"
        ],
        "answer": "Disseminated intravascular coagulation",
        "difficulty": "medium",
        "topic": "Coagulation and Bleeding Disorders",
        "explanation": "DIC causes elevated D-dimer levels due to fibrin degradation from widespread clotting and fibrinolysis."
    },
    {
        "id": 294,
        "question": "Which hematologic condition is associated with renal failure in adults?",
        "options": [
            "Sickle cell disease",
            "Multiple myeloma",
            "Thalassemia",
            "Aplastic anemia"
        ],
        "answer": "Multiple myeloma",
        "difficulty": "hard",
        "topic": "Hematologic Malignancies",
        "explanation": "Multiple myeloma causes renal failure due to light chain deposition and hypercalcemia."
    },
    {
        "id": 295,
        "question": "What is the primary role of tyrosine kinase inhibitors in leukemia treatment?",
        "options": [
            "Increase red blood cell production",
            "Inhibit BCR-ABL fusion protein",
            "Correct clotting factor deficiencies",
            "Enhance transfusion compatibility"
        ],
        "answer": "Inhibit BCR-ABL fusion protein",
        "difficulty": "hard",
        "topic": "Recent Advances",
        "explanation": "Tyrosine kinase inhibitors, like imatinib, inhibit the BCR-ABL fusion protein in CML, controlling disease progression."
    },
    {
        "id": 296,
        "question": "Which type of anemia is associated with a high mean corpuscular volume (MCV)?",
        "options": [
            "Iron deficiency anemia",
            "Megaloblastic anemia",
            "Sickle cell disease",
            "Thalassemia"
        ],
        "answer": "Megaloblastic anemia",
        "difficulty": "medium",
        "topic": "Anaemias",
        "explanation": "Megaloblastic anemia causes a high MCV due to large, immature red blood cells from impaired DNA synthesis."
    },
    {
        "id": 297,
        "question": "Which white blood cell type is primarily involved in viral infections?",
        "options": [
            "Neutrophils",
            "Lymphocytes",
            "Eosinophils",
            "Basophils"
        ],
        "answer": "Lymphocytes",
        "difficulty": "medium",
        "topic": "White Blood Cells",
        "explanation": "Lymphocytes, particularly T-cells, are primarily involved in combating viral infections through cell-mediated immunity."
    },
    {
        "id": 298,
        "question": "What is the primary diagnostic feature of aplastic anemia?",
        "options": [
            "Presence of Auer rods",
            "Pancytopenia with hypocellular marrow",
            "Monoclonal protein spike",
            "Elevated red blood cell mass"
        ],
        "answer": "Pancytopenia with hypocellular marrow",
        "difficulty": "hard",
        "topic": "Anaemias",
        "explanation": "Aplastic anemia is diagnosed by pancytopenia and a hypocellular bone marrow due to stem cell failure."
    },
    {
        "id": 299,
        "question": "Which factor is critical for platelet aggregation?",
        "options": [
            "Factor VII",
            "Factor VIII",
            "Fibrinogen",
            "Von Willebrand factor"
        ],
        "answer": "Fibrinogen",
        "difficulty": "hard",
        "topic": "Platelets and Hemostasis",
        "explanation": "Fibrinogen bridges platelets via GPIIb/IIIa receptors, facilitating platelet aggregation in hemostasis."
    },
    {
        "id": 300,
        "question": "What is the primary cause of graft-versus-host disease in transfusion?",
        "options": [
            "ABO incompatibility",
            "Donor lymphocyte activity",
            "Iron overload",
            "Cytokine release"
        ],
        "answer": "Donor lymphocyte activity",
        "difficulty": "hard",
        "topic": "Blood Groups and Transfusion Medicine",
        "explanation": "Graft-versus-host disease occurs when donor lymphocytes in transfused blood attack recipient tissues, particularly in immunocompromised patients."
    },
    {
        "id": 301,
        "question": "What is the primary clinical importance of haematology?",
        "options": [
            "Diagnosis of neurological disorders",
            "Management of blood-related diseases",
            "Treatment of musculoskeletal conditions",
            "Monitoring of endocrine function"
        ],
        "answer": "Management of blood-related diseases",
        "difficulty": "easy",
        "topic": "Introduction to Haematology",
        "explanation": "Haematology is critical for diagnosing and managing blood-related diseases, such as anemias, leukemias, and clotting disorders, impacting clinical diagnostics."
    },
    {
        "id": 302,
        "question": "Which scientist discovered the ABO blood group system?",
        "options": [
            "Karl Landsteiner",
            "Gregor Mendel",
            "Thomas Hunt Morgan",
            "Rosalind Franklin"
        ],
        "answer": "Karl Landsteiner",
        "difficulty": "medium",
        "topic": "Introduction to Haematology",
        "explanation": "Karl Landsteiner discovered the ABO blood group system in 1901, a foundational contribution to transfusion medicine and haematology."
    },
    {
        "id": 303,
        "question": "Which plasma component is primarily responsible for blood clotting?",
        "options": [
            "Albumin",
            "Fibrinogen",
            "Globulins",
            "Electrolytes"
        ],
        "answer": "Fibrinogen",
        "difficulty": "medium",
        "topic": "Composition and Functions of Blood",
        "explanation": "Fibrinogen is a plasma protein that converts to fibrin during the clotting process, essential for blood clot formation."
    },
    {
        "id": 304,
        "question": "What is the primary function of red blood cells in blood?",
        "options": [
            "Immune defense",
            "Oxygen transport",
            "Clot formation",
            "Nutrient storage"
        ],
        "answer": "Oxygen transport",
        "difficulty": "easy",
        "topic": "Composition and Functions of Blood",
        "explanation": "Red blood cells, via hemoglobin, transport oxygen from the lungs to tissues and return carbon dioxide to the lungs."
    },
    {
        "id": 305,
        "question": "Which cell type is the precursor to all blood cells in haemopoiesis?",
        "options": [
            "Progenitor cell",
            "Hematopoietic stem cell",
            "Myeloid cell",
            "Lymphoid cell"
        ],
        "answer": "Hematopoietic stem cell",
        "difficulty": "medium",
        "topic": "Haemopoiesis",
        "explanation": "Hematopoietic stem cells in the bone marrow differentiate into all blood cell types, including erythrocytes, leukocytes, and platelets."
    },
    {
        "id": 306,
        "question": "Which organ becomes the primary site of hematopoiesis in adults?",
        "options": [
            "Liver",
            "Spleen",
            "Bone marrow",
            "Yolk sac"
        ],
        "answer": "Bone marrow",
        "difficulty": "easy",
        "topic": "Haemopoiesis",
        "explanation": "In adults, hematopoiesis primarily occurs in the bone marrow, particularly in flat bones like the pelvis and sternum."
    },
    {
        "id": 307,
        "question": "Which molecule in hemoglobin is responsible for its oxygen-binding capacity?",
        "options": [
            "Globin chain",
            "Iron atom",
            "Porphyrin ring",
            "Carbon monoxide"
        ],
        "answer": "Iron atom",
        "difficulty": "medium",
        "topic": "Erythrocytes",
        "explanation": "The iron atom in the heme group of hemoglobin binds oxygen, enabling its transport in the bloodstream."
    },
    {
        "id": 308,
        "question": "What is the primary site of red blood cell destruction in the body?",
        "options": [
            "Kidneys",
            "Liver",
            "Spleen",
            "Bone marrow"
        ],
        "answer": "Spleen",
        "difficulty": "medium",
        "topic": "Erythrocytes",
        "explanation": "The spleen removes old or damaged red blood cells from circulation, breaking down hemoglobin into its components."
    },
    {
        "id": 309,
        "question": "Which anemia is characterized by small, pale red blood cells?",
        "options": [
            "Megaloblastic anemia",
            "Iron deficiency anemia",
            "Sickle cell anemia",
            "Aplastic anemia"
        ],
        "answer": "Iron deficiency anemia",
        "difficulty": "medium",
        "topic": "Anaemias",
        "explanation": "Iron deficiency anemia results in microcytic, hypochromic red blood cells due to insufficient hemoglobin synthesis."
    },
    {
        "id": 310,
        "question": "What is the primary cause of extrinsic hemolytic anemia?",
        "options": [
            "Enzyme deficiencies",
            "Autoimmune destruction",
            "Hemoglobinopathies",
            "Membrane defects"
        ],
        "answer": "Autoimmune destruction",
        "difficulty": "hard",
        "topic": "Anaemias",
        "explanation": "Extrinsic hemolytic anemia is caused by external factors, such as autoimmune destruction, where antibodies attack red blood cells."
    },
    {
        "id": 311,
        "question": "Which white blood cell type is most abundant in healthy adults?",
        "options": [
            "Lymphocytes",
            "Neutrophils",
            "Monocytes",
            "Eosinophils"
        ],
        "answer": "Neutrophils",
        "difficulty": "easy",
        "topic": "White Blood Cells",
        "explanation": "Neutrophils are the most abundant white blood cells in healthy adults, comprising 50–70% of total leukocytes."
    },
    {
        "id": 312,
        "question": "What is the primary cause of neutropenia?",
        "options": [
            "Bacterial infections",
            "Viral infections",
            "Allergic reactions",
            "Chronic inflammation"
        ],
        "answer": "Viral infections",
        "difficulty": "medium",
        "topic": "WBC Disorders",
        "explanation": "Viral infections often cause neutropenia by suppressing bone marrow production or increasing neutrophil destruction."
    },
    {
        "id": 313,
        "question": "Which leukemia is most common in children?",
        "options": [
            "Chronic myeloid leukemia",
            "Acute lymphoblastic leukemia",
            "Chronic lymphocytic leukemia",
            "Acute myeloid leukemia"
        ],
        "answer": "Acute lymphoblastic leukemia",
        "difficulty": "medium",
        "topic": "Leukaemias and Lymphomas",
        "explanation": "Acute lymphoblastic leukemia is the most common malignancy in children, characterized by lymphoblast proliferation."
    },
    {
        "id": 314,
        "question": "What is the primary role of megakaryocytes in hemostasis?",
        "options": [
            "Produce red blood cells",
            "Produce platelets",
            "Synthesize hemoglobin",
            "Activate clotting factors"
        ],
        "answer": "Produce platelets",
        "difficulty": "easy",
        "topic": "Platelets and Hemostasis",
        "explanation": "Megakaryocytes in the bone marrow produce platelets, which are essential for platelet plug formation in hemostasis."
    },
    {
        "id": 315,
        "question": "Which clotting factor is deficient in von Willebrand disease?",
        "options": [
            "Factor VIII",
            "Factor IX",
            "Von Willebrand factor",
            "Factor X"
        ],
        "answer": "Von Willebrand factor",
        "difficulty": "medium",
        "topic": "Coagulation and Bleeding Disorders",
        "explanation": "Von Willebrand disease is caused by a deficiency or dysfunction of von Willebrand factor, impairing platelet adhesion and factor VIII stability."
    },
    {
        "id": 316,
        "question": "Which blood group is considered the universal donor?",
        "options": [
            "A positive",
            "B negative",
            "AB positive",
            "O negative"
        ],
        "answer": "O negative",
        "difficulty": "easy",
        "topic": "Blood Groups and Transfusion Medicine",
        "explanation": "O negative blood lacks A, B, and Rh antigens, making it safe for transfusion to any recipient, hence the universal donor."
    },
    {
        "id": 317,
        "question": "What is the primary purpose of the complete blood count (CBC)?",
        "options": [
            "Assess clotting factors",
            "Measure blood cell counts and parameters",
            "Detect fibrin degradation",
            "Monitor immune responses"
        ],
        "answer": "Measure blood cell counts and parameters",
        "difficulty": "easy",
        "topic": "Laboratory Techniques",
        "explanation": "The CBC measures red blood cells, white blood cells, platelets, hemoglobin, and hematocrit, providing a broad assessment of blood health."
    },
    {
        "id": 318,
        "question": "Which infection is associated with atypical lymphocytes in blood smears?",
        "options": [
            "Malaria",
            "Infectious mononucleosis",
            "Leishmaniasis",
            "Trypanosomiasis"
        ],
        "answer": "Infectious mononucleosis",
        "difficulty": "medium",
        "topic": "Infections Affecting Blood",
        "explanation": "Infectious mononucleosis, caused by Epstein-Barr virus, is characterized by atypical lymphocytes (reactive T-cells) on blood smear."
    },
    {
        "id": 319,
        "question": "Which condition is characterized by bone marrow replacement with fibrous tissue?",
        "options": [
            "Polycythemia vera",
            "Myelofibrosis",
            "Aplastic anemia",
            "Sickle cell disease"
        ],
        "answer": "Myelofibrosis",
        "difficulty": "hard",
        "topic": "Myeloproliferative Disorders",
        "explanation": "Myelofibrosis involves bone marrow replacement with fibrous tissue, leading to ineffective hematopoiesis and splenomegaly."
    },
    {
        "id": 320,
        "question": "Which hematologic condition is associated with frequent transfusions in children?",
        "options": [
            "Hemophilia",
            "Thalassemia major",
            "Sickle cell disease",
            "Aplastic anemia"
        ],
        "answer": "Thalassemia major",
        "difficulty": "medium",
        "topic": "Pediatric Haematology",
        "explanation": "Thalassemia major requires frequent transfusions due to severe anemia from defective hemoglobin synthesis."
    },
    {
        "id": 321,
        "question": "What is the primary application of CRISPR in sickle cell disease treatment?",
        "options": [
            "Increase platelet production",
            "Correct HBB gene mutations",
            "Enhance immune responses",
            "Monitor clotting factors"
        ],
        "answer": "Correct HBB gene mutations",
        "difficulty": "hard",
        "topic": "Recent Advances",
        "explanation": "CRISPR corrects mutations in the HBB gene, enabling normal hemoglobin production in sickle cell disease."
    },
    {
        "id": 322,
        "question": "Which electrolyte in plasma is critical for nerve and muscle function?",
        "options": [
            "Sodium",
            "Potassium",
            "Calcium",
            "Magnesium"
        ],
        "answer": "Potassium",
        "difficulty": "medium",
        "topic": "Composition and Functions of Blood",
        "explanation": "Potassium in plasma is essential for maintaining membrane potentials in nerve and muscle cells, supporting their function."
    },
    {
        "id": 323,
        "question": "Which cytokine stimulates leukopoiesis in the bone marrow?",
        "options": [
            "Erythropoietin",
            "Thrombopoietin",
            "Granulocyte colony-stimulating factor",
            "Interleukin-6"
        ],
        "answer": "Granulocyte colony-stimulating factor",
        "difficulty": "hard",
        "topic": "Haemopoiesis",
        "explanation": "Granulocyte colony-stimulating factor (G-CSF) stimulates the production and maturation of leukocytes, particularly neutrophils."
    },
    {
        "id": 324,
        "question": "What is the primary role of reticulocytes in hematology?",
        "options": [
            "Transport oxygen",
            "Indicate bone marrow activity",
            "Form blood clots",
            "Fight infections"
        ],
        "answer": "Indicate bone marrow activity",
        "difficulty": "medium",
        "topic": "Erythrocytes",
        "explanation": "Reticulocytes, immature red blood cells, reflect bone marrow erythropoietic activity, elevated in response to anemia."
    },
    {
        "id": 325,
        "question": "Which anemia is caused by a deficiency in intrinsic factor?",
        "options": [
            "Iron deficiency anemia",
            "Megaloblastic anemia",
            "Sickle cell anemia",
            "Aplastic anemia"
        ],
        "answer": "Megaloblastic anemia",
        "difficulty": "medium",
        "topic": "Anaemias",
        "explanation": "Megaloblastic anemia due to vitamin B12 deficiency can result from a lack of intrinsic factor, impairing B12 absorption."
    },
    {
        "id": 326,
        "question": "Which white blood cell type releases histamine during allergic reactions?",
        "options": [
            "Neutrophils",
            "Lymphocytes",
            "Basophils",
            "Monocytes"
        ],
        "answer": "Basophils",
        "difficulty": "medium",
        "topic": "White Blood Cells",
        "explanation": "Basophils release histamine and other mediators, contributing to allergic reactions and inflammation."
    },
    {
        "id": 327,
        "question": "Which lymphoma is associated with Epstein-Barr virus infection?",
        "options": [
            "Chronic lymphocytic leukemia",
            "Hodgkin lymphoma",
            "Acute myeloid leukemia",
            "Myelodysplastic syndrome"
        ],
        "answer": "Hodgkin lymphoma",
        "difficulty": "hard",
        "topic": "Leukaemias and Lymphomas",
        "explanation": "Hodgkin lymphoma is associated with Epstein-Barr virus in many cases, particularly in Reed-Sternberg cell development."
    },
    {
        "id": 328,
        "question": "What is the primary function of the platelet plug in hemostasis?",
        "options": [
            "Dissolve clots",
            "Stabilize fibrin",
            "Seal vascular injuries",
            "Transport oxygen"
        ],
        "answer": "Seal vascular injuries",
        "difficulty": "easy",
        "topic": "Platelets and Hemostasis",
        "explanation": "The platelet plug forms at the site of vascular injury, sealing the breach to prevent blood loss."
    },
    {
        "id": 329,
        "question": "Which test is prolonged in hemophilia A?",
        "options": [
            "Prothrombin time (PT)",
            "Activated partial thromboplastin time (aPTT)",
            "Bleeding time",
            "D-dimer"
        ],
        "answer": "Activated partial thromboplastin time (aPTT)",
        "difficulty": "medium",
        "topic": "Coagulation and Bleeding Disorders",
        "explanation": "aPTT is prolonged in hemophilia A due to factor VIII deficiency, affecting the intrinsic coagulation pathway."
    },
    {
        "id": 330,
        "question": "Which blood group is considered the universal recipient?",
        "options": [
            "A positive",
            "B negative",
            "AB positive",
            "O negative"
        ],
        "answer": "AB positive",
        "difficulty": "easy",
        "topic": "Blood Groups and Transfusion Medicine",
        "explanation": "AB positive blood can receive any blood type because it has A, B, and Rh antigens, avoiding immune reactions."
    },
    {
        "id": 331,
        "question": "Which laboratory technique is used to assess hemoglobin levels?",
        "options": [
            "Flow cytometry",
            "Hemoglobin estimation",
            "Peripheral blood smear",
            "ESR"
        ],
        "answer": "Hemoglobin estimation",
        "difficulty": "easy",
        "topic": "Laboratory Techniques",
        "explanation": "Hemoglobin estimation measures hemoglobin concentration in blood, critical for diagnosing anemias."
    },
    {
        "id": 332,
        "question": "Which infection is associated with pancytopenia in severe cases?",
        "options": [
            "Malaria",
            "Sepsis",
            "Trypanosomiasis",
            "Infectious mononucleosis"
        ],
        "answer": "Sepsis",
        "difficulty": "hard",
        "topic": "Infections Affecting Blood",
        "explanation": "Severe sepsis can cause pancytopenia due to bone marrow suppression and increased cell consumption."
    },
    {
        "id": 333,
        "question": "Which condition is associated with a high platelet count in myeloproliferative disorders?",
        "options": [
            "Aplastic anemia",
            "Essential thrombocythemia",
            "Sickle cell disease",
            "Thalassemia"
        ],
        "answer": "Essential thrombocythemia",
        "difficulty": "hard",
        "topic": "Myeloproliferative Disorders",
        "explanation": "Essential thrombocythemia is characterized by a high platelet count due to clonal megakaryocyte proliferation."
    },
    {
        "id": 334,
        "question": "Which hematologic condition is associated with skeletal deformities in children?",
        "options": [
            "Hemophilia",
            "Thalassemia",
            "Sickle cell disease",
            "Aplastic anemia"
        ],
        "answer": "Thalassemia",
        "difficulty": "medium",
        "topic": "Pediatric Haematology",
        "explanation": "Thalassemia major can cause skeletal deformities in children due to bone marrow expansion from chronic anemia."
    },
    {
        "id": 335,
        "question": "What is the primary role of CAR-T cell therapy in lymphoma treatment?",
        "options": [
            "Correct genetic mutations",
            "Target CD19 on B-cells",
            "Increase red blood cell production",
            "Regulate clotting factors"
        ],
        "answer": "Target CD19 on B-cells",
        "difficulty": "hard",
        "topic": "Recent Advances",
        "explanation": "CAR-T cell therapy targets CD19 on malignant B-cells, effective in treating B-cell lymphomas and leukemias."
    },
    {
        "id": 336,
        "question": "Which type of anemia is associated with Howell-Jolly bodies on blood smear?",
        "options": [
            "Iron deficiency anemia",
            "Sickle cell anemia",
            "Megaloblastic anemia",
            "Aplastic anemia"
        ],
        "answer": "Sickle cell anemia",
        "difficulty": "hard",
        "topic": "Anaemias",
        "explanation": "Howell-Jolly bodies, nuclear remnants in red blood cells, are seen in sickle cell anemia due to functional asplenia."
    },
    {
        "id": 337,
        "question": "Which white blood cell type differentiates into macrophages in tissues?",
        "options": [
            "Neutrophils",
            "Lymphocytes",
            "Monocytes",
            "Eosinophils"
        ],
        "answer": "Monocytes",
        "difficulty": "medium",
        "topic": "White Blood Cells",
        "explanation": "Monocytes circulate in blood and differentiate into macrophages in tissues, performing phagocytosis and antigen presentation."
    },
    {
        "id": 338,
        "question": "Which leukemia is associated with the Philadelphia chromosome?",
        "options": [
            "Acute lymphoblastic leukemia",
            "Chronic myeloid leukemia",
            "Acute myeloid leukemia",
            "Chronic lymphocytic leukemia"
        ],
        "answer": "Chronic myeloid leukemia",
        "difficulty": "hard",
        "topic": "Leukaemias and Lymphomas",
        "explanation": "Chronic myeloid leukemia is characterized by the Philadelphia chromosome, a t(9;22) translocation producing the BCR-ABL fusion gene."
    },
    {
        "id": 339,
        "question": "What is the primary role of vascular spasm in hemostasis?",
        "options": [
            "Form a fibrin clot",
            "Reduce blood flow to the injury",
            "Stimulate platelet production",
            "Dissolve blood clots"
        ],
        "answer": "Reduce blood flow to the injury",
        "difficulty": "medium",
        "topic": "Platelets and Hemostasis",
        "explanation": "Vascular spasm constricts blood vessels at the injury site, reducing blood flow to minimize bleeding."
    },
    {
        "id": 340,
        "question": "Which condition is associated with a prolonged bleeding time?",
        "options": [
            "Hemophilia A",
            "Von Willebrand disease",
            "Factor IX deficiency",
            "Disseminated intravascular coagulation"
        ],
        "answer": "Von Willebrand disease",
        "difficulty": "hard",
        "topic": "Coagulation and Bleeding Disorders",
        "explanation": "Von Willebrand disease prolongs bleeding time due to impaired platelet adhesion from deficient or defective von Willebrand factor."
    },
    {
        "id": 341,
        "question": "What is the primary purpose of compatibility testing in transfusion medicine?",
        "options": [
            "Measure hemoglobin levels",
            "Prevent transfusion reactions",
            "Assess clotting factors",
            "Detect infections"
        ],
        "answer": "Prevent transfusion reactions",
        "difficulty": "medium",
        "topic": "Blood Groups and Transfusion Medicine",
        "explanation": "Compatibility testing, including crossmatching, ensures donor and recipient blood are compatible to prevent transfusion reactions."
    },
    {
        "id": 342,
        "question": "Which laboratory technique is used to detect cell surface markers in leukemia?",
        "options": [
            "Peripheral blood smear",
            "Flow cytometry",
            "ESR",
            "Cytochemistry"
        ],
        "answer": "Flow cytometry",
        "difficulty": "hard",
        "topic": "Laboratory Techniques",
        "explanation": "Flow cytometry detects cell surface markers, aiding in the immunophenotyping of leukemias and lymphomas."
    },
    {
        "id": 343,
        "question": "Which infection is associated with gametocytes in red blood cells?",
        "options": [
            "Leishmaniasis",
            "Malaria",
            "Trypanosomiasis",
            "Sepsis"
        ],
        "answer": "Malaria",
        "difficulty": "medium",
        "topic": "Infections Affecting Blood",
        "explanation": "Malaria, caused by Plasmodium, is characterized by gametocytes in red blood cells, enabling mosquito transmission."
    },
    {
        "id": 344,
        "question": "Which condition is associated with Bence Jones proteins in urine?",
        "options": [
            "Chronic myeloid leukemia",
            "Multiple myeloma",
            "Hodgkin lymphoma",
            "Aplastic anemia"
        ],
        "answer": "Multiple myeloma",
        "difficulty": "hard",
        "topic": "Hematologic Malignancies",
        "explanation": "Bence Jones proteins, light chains of immunoglobulins, are found in the urine of multiple myeloma patients due to plasma cell overproduction."
    },
    {
        "id": 345,
        "question": "Which hematologic condition is associated with anemia in older adults?",
        "options": [
            "Sickle cell disease",
            "Anemia of chronic disease",
            "Thalassemia",
            "Hemophilia"
        ],
        "answer": "Anemia of chronic disease",
        "difficulty": "medium",
        "topic": "Geriatric Haematology",
        "explanation": "Anemia of chronic disease is common in older adults, caused by chronic inflammation impairing iron utilization."
    },
    {
        "id": 346,
        "question": "What is the primary advantage of tyrosine kinase inhibitors in CML treatment?",
        "options": [
            "Increase red blood cell production",
            "Target BCR-ABL fusion protein",
            "Correct clotting factor deficiencies",
            "Enhance immune responses"
        ],
        "answer": "Target BCR-ABL fusion protein",
        "difficulty": "hard",
        "topic": "Recent Advances",
        "explanation": "Tyrosine kinase inhibitors, like imatinib, target the BCR-ABL fusion protein in CML, inhibiting leukemic cell proliferation."
    },
    {
        "id": 347,
        "question": "Which type of anemia is associated with schistocytes on blood smear?",
        "options": [
            "Iron deficiency anemia",
            "Megaloblastic anemia",
            "Hemolytic anemia",
            "Aplastic anemia"
        ],
        "answer": "Hemolytic anemia",
        "difficulty": "hard",
        "topic": "Anaemias",
        "explanation": "Schistocytes, fragmented red blood cells, are seen in hemolytic anemias, such as microangiopathic hemolytic anemia."
    },
    {
        "id": 348,
        "question": "Which white blood cell type is primarily involved in chronic infections?",
        "options": [
            "Neutrophils",
            "Lymphocytes",
            "Monocytes",
            "Eosinophils"
        ],
        "answer": "Monocytes",
        "difficulty": "medium",
        "topic": "White Blood Cells",
        "explanation": "Monocytes differentiate into macrophages, which are critical for combating chronic infections like tuberculosis."
    },
    {
        "id": 349,
        "question": "Which leukemia is treated with all-trans retinoic acid (ATRA)?",
        "options": [
            "Chronic lymphocytic leukemia",
            "Acute promyelocytic leukemia",
            "Chronic myeloid leukemia",
            "Acute lymphoblastic leukemia"
        ],
        "answer": "Acute promyelocytic leukemia",
        "difficulty": "hard",
        "topic": "Leukaemias and Lymphomas",
        "explanation": "Acute promyelocytic leukemia, a subtype of AML, is treated with ATRA, which induces differentiation of promyelocytes."
    },
    {
        "id": 350,
        "question": "What is the primary role of fibrinogen in hemostasis?",
        "options": [
            "Stimulate platelet production",
            "Form a fibrin clot",
            "Reduce blood flow",
            "Dissolve clots"
        ],
        "answer": "Form a fibrin clot",
        "difficulty": "medium",
        "topic": "Platelets and Hemostasis",
        "explanation": "Fibrinogen is converted to fibrin by thrombin, forming a clot to stabilize the platelet plug in hemostasis."
    },
    {
        "id": 351,
        "question": "Which condition is associated with a low D-dimer level in bleeding disorders?",
        "options": [
            "Disseminated intravascular coagulation",
            "Hemophilia A",
            "Von Willebrand disease",
            "Thrombocytopenia"
        ],
        "answer": "Hemophilia A",
        "difficulty": "hard",
        "topic": "Coagulation and Bleeding Disorders",
        "explanation": "Hemophilia A, a bleeding disorder, typically has normal or low D-dimer levels, as it does not involve excessive fibrin degradation."
    },
    {
        "id": 352,
        "question": "What is the primary cause of transfusion-associated graft-versus-host disease?",
        "options": [
            "ABO incompatibility",
            "Donor lymphocyte attack",
            "Iron overload",
            "Cytokine release"
        ],
        "answer": "Donor lymphocyte attack",
        "difficulty": "hard",
        "topic": "Blood Groups and Transfusion Medicine",
        "explanation": "Transfusion-associated graft-versus-host disease occurs when donor lymphocytes attack recipient tissues in immunocompromised patients."
    },
    {
        "id": 353,
        "question": "Which laboratory technique is used to assess red blood cell production?",
        "options": [
            "Reticulocyte count",
            "Flow cytometry",
            "ESR",
            "D-dimer"
        ],
        "answer": "Reticulocyte count",
        "difficulty": "medium",
        "topic": "Laboratory Techniques",
        "explanation": "Reticulocyte count measures immature red blood cells, indicating bone marrow erythropoietic activity."
    },
    {
        "id": 354,
        "question": "Which infection is associated with bone marrow suppression in HIV patients?",
        "options": [
            "Malaria",
            "Cytomegalovirus",
            "Trypanosomiasis",
            "Leishmaniasis"
        ],
        "answer": "Cytomegalovirus",
        "difficulty": "hard",
        "topic": "Infections Affecting Blood",
        "explanation": "Cytomegalovirus can cause bone marrow suppression in HIV patients, leading to cytopenias, particularly anemia."
    },
    {
        "id": 355,
        "question": "Which condition is associated with a high red blood cell count in myeloproliferative disorders?",
        "options": [
            "Aplastic anemia",
            "Polycythemia vera",
            "Sickle cell disease",
            "Thalassemia"
        ],
        "answer": "Polycythemia vera",
        "difficulty": "medium",
        "topic": "Myeloproliferative Disorders",
        "explanation": "Polycythemia vera is characterized by a high red blood cell count due to JAK2-driven overproduction."
    },
    {
        "id": 356,
        "question": "Which hematologic condition is associated with iron overload in children?",
        "options": [
            "Hemophilia",
            "Thalassemia major",
            "Sickle cell disease",
            "Aplastic anemia"
        ],
        "answer": "Thalassemia major",
        "difficulty": "medium",
        "topic": "Pediatric Haematology",
        "explanation": "Thalassemia major causes iron overload in children due to frequent blood transfusions."
    },
    {
        "id": 357,
        "question": "What is the primary role of gene therapy in beta-thalassemia treatment?",
        "options": [
            "Increase platelet production",
            "Correct beta-globin gene defects",
            "Enhance immune responses",
            "Monitor clotting factors"
        ],
        "answer": "Correct beta-globin gene defects",
        "difficulty": "hard",
        "topic": "Recent Advances",
        "explanation": "Gene therapy corrects beta-globin gene defects in beta-thalassemia, reducing transfusion dependence."
    },
    {
        "id": 358,
        "question": "Which type of anemia is associated with a low mean corpuscular hemoglobin (MCH)?",
        "options": [
            "Megaloblastic anemia",
            "Iron deficiency anemia",
            "Sickle cell anemia",
            "Aplastic anemia"
        ],
        "answer": "Iron deficiency anemia",
        "difficulty": "medium",
        "topic": "Anaemias",
        "explanation": "Iron deficiency anemia causes a low MCH due to reduced hemoglobin content in red blood cells."
    },
    {
        "id": 359,
        "question": "Which white blood cell type is elevated in parasitic infections?",
        "options": [
            "Neutrophils",
            "Lymphocytes",
            "Eosinophils",
            "Monocytes"
        ],
        "answer": "Eosinophils",
        "difficulty": "medium",
        "topic": "White Blood Cells",
        "explanation": "Eosinophils are elevated in parasitic infections, releasing toxic proteins to combat parasites."
    },
    {
        "id": 360,
        "question": "Which lymphoma is characterized by painless lymphadenopathy?",
        "options": [
            "Chronic lymphocytic leukemia",
            "Hodgkin lymphoma",
            "Acute myeloid leukemia",
            "Myelodysplastic syndrome"
        ],
        "answer": "Hodgkin lymphoma",
        "difficulty": "medium",
        "topic": "Leukaemias and Lymphomas",
        "explanation": "Hodgkin lymphoma often presents with painless lymphadenopathy, particularly in cervical or supraclavicular nodes."
    },
    {
        "id": 361,
        "question": "What is the primary role of thrombin in hemostasis?",
        "options": [
            "Stimulate platelet production",
            "Convert fibrinogen to fibrin",
            "Reduce blood flow",
            "Dissolve clots"
        ],
        "answer": "Convert fibrinogen to fibrin",
        "difficulty": "medium",
        "topic": "Platelets and Hemostasis",
        "explanation": "Thrombin converts fibrinogen to fibrin, forming a stable clot in the coagulation cascade."
    },
    {
        "id": 362,
        "question": "Which condition is associated with a high INR in bleeding disorders?",
        "options": [
            "Hemophilia A",
            "Warfarin therapy",
            "Von Willebrand disease",
            "Thrombocytopenia"
        ],
        "answer": "Warfarin therapy",
        "difficulty": "medium",
        "topic": "Coagulation and Bleeding Disorders",
        "explanation": "Warfarin therapy increases INR by inhibiting vitamin K-dependent clotting factors, prolonging prothrombin time."
    },
    {
        "id": 363,
        "question": "What is the primary cause of febrile transfusion reactions?",
        "options": [
            "ABO incompatibility",
            "Cytokines in stored blood",
            "Iron overload",
            "Donor lymphocyte attack"
        ],
        "answer": "Cytokines in stored blood",
        "difficulty": "hard",
        "topic": "Blood Groups and Transfusion Medicine",
        "explanation": "Febrile transfusion reactions are caused by cytokines accumulated in stored blood, triggering fever and chills."
    },
    {
        "id": 364,
        "question": "Which laboratory technique is used to assess inflammation?",
        "options": [
            "Reticulocyte count",
            "Erythrocyte sedimentation rate (ESR)",
            "Flow cytometry",
            "D-dimer"
        ],
        "answer": "Erythrocyte sedimentation rate (ESR)",
        "difficulty": "medium",
        "topic": "Laboratory Techniques",
        "explanation": "ESR measures the rate at which red blood cells settle, elevated in inflammatory conditions."
    },
    {
        "id": 365,
        "question": "Which infection is associated with hemophagocytic lymphohistiocytosis?",
        "options": [
            "Malaria",
            "Epstein-Barr virus",
            "Trypanosomiasis",
            "Leishmaniasis"
        ],
        "answer": "Epstein-Barr virus",
        "difficulty": "hard",
        "topic": "Infections Affecting Blood",
        "explanation": "Epstein-Barr virus can trigger hemophagocytic lymphohistiocytosis, characterized by excessive macrophage activation."
    },
    {
        "id": 366,
        "question": "Which condition is associated with a low platelet count in myeloproliferative disorders?",
        "options": [
            "Polycythemia vera",
            "Myelofibrosis",
            "Essential thrombocythemia",
            "Chronic myeloid leukemia"
        ],
        "answer": "Myelofibrosis",
        "difficulty": "hard",
        "topic": "Myeloproliferative Disorders",
        "explanation": "Myelofibrosis can cause thrombocytopenia due to bone marrow fibrosis and ineffective hematopoiesis."
    },
    {
        "id": 367,
        "question": "Which hematologic condition is associated with leg ulcers in adults?",
        "options": [
            "Hemophilia",
            "Sickle cell disease",
            "Thalassemia",
            "Aplastic anemia"
        ],
        "answer": "Sickle cell disease",
        "difficulty": "medium",
        "topic": "Pediatric Haematology",
        "explanation": "Sickle cell disease causes leg ulcers due to chronic vaso-occlusion and tissue ischemia."
    },
    {
        "id": 368,
        "question": "What is the primary advantage of biologics in leukemia treatment?",
        "options": [
            "Increase red blood cell production",
            "Target specific molecular pathways",
            "Correct clotting factor deficiencies",
            "Enhance immune responses"
        ],
        "answer": "Target specific molecular pathways",
        "difficulty": "hard",
        "topic": "Recent Advances",
        "explanation": "Biologics, like monoclonal antibodies, target specific molecular pathways in leukemia cells, improving treatment precision."
    },
    {
        "id": 369,
        "question": "Which type of anemia is associated with target cells on blood smear?",
        "options": [
            "Iron deficiency anemia",
            "Thalassemia",
            "Megaloblastic anemia",
            "Aplastic anemia"
        ],
        "answer": "Thalassemia",
        "difficulty": "hard",
        "topic": "Anaemias",
        "explanation": "Target cells, with a bullseye appearance, are seen in thalassemia due to excess membrane relative to hemoglobin content."
    },
    {
        "id": 370,
        "question": "Which white blood cell type is primarily involved in acute bacterial infections?",
        "options": [
            "Lymphocytes",
            "Neutrophils",
            "Eosinophils",
            "Basophils"
        ],
        "answer": "Neutrophils",
        "difficulty": "easy",
        "topic": "White Blood Cells",
        "explanation": "Neutrophils are the primary responders to acute bacterial infections, performing phagocytosis."
    },
    {
        "id": 371,
        "question": "Which leukemia is associated with a high white blood cell count at diagnosis?",
        "options": [
            "Chronic lymphocytic leukemia",
            "Acute lymphoblastic leukemia",
            "Chronic myeloid leukemia",
            "Myelodysplastic syndrome"
        ],
        "answer": "Chronic myeloid leukemia",
        "difficulty": "medium",
        "topic": "Leukaemias and Lymphomas",
        "explanation": "Chronic myeloid leukemia often presents with a high white blood cell count due to uncontrolled myeloid cell proliferation."
    },
    {
        "id": 372,
        "question": "What is the primary role of factor XIII in hemostasis?",
        "options": [
            "Activate thrombin",
            "Stabilize fibrin clot",
            "Stimulate platelet production",
            "Dissolve clots"
        ],
        "answer": "Stabilize fibrin clot",
        "difficulty": "hard",
        "topic": "Platelets and Hemostasis",
        "explanation": "Factor XIII cross-links fibrin, stabilizing the clot to prevent premature dissolution."
    },
    {
        "id": 373,
        "question": "Which condition is associated with a low prothrombin time (PT)?",
        "options": [
            "Vitamin K deficiency",
            "Warfarin therapy",
            "Normal coagulation",
            "Disseminated intravascular coagulation"
        ],
        "answer": "Normal coagulation",
        "difficulty": "medium",
        "topic": "Coagulation and Bleeding Disorders",
        "explanation": "A low or normal PT indicates intact extrinsic and common coagulation pathways, seen in normal coagulation."
    },
    {
        "id": 374,
        "question": "What is the primary cause of transfusion-related acute lung injury (TRALI)?",
        "options": [
            "ABO incompatibility",
            "Donor leukocyte antibodies",
            "Iron overload",
            "Cytokine release"
        ],
        "answer": "Donor leukocyte antibodies",
        "difficulty": "hard",
        "topic": "Blood Groups and Transfusion Medicine",
        "explanation": "TRALI is caused by donor leukocyte antibodies reacting with recipient leukocytes, leading to pulmonary edema."
    },
    {
        "id": 375,
        "question": "Which laboratory technique is used to assess clotting factor deficiencies?",
        "options": [
            "Reticulocyte count",
            "Prothrombin time (PT)",
            "Flow cytometry",
            "ESR"
        ],
        "answer": "Prothrombin time (PT)",
        "difficulty": "medium",
        "topic": "Laboratory Techniques",
        "explanation": "PT assesses the extrinsic and common coagulation pathways, detecting deficiencies in factors II, V, VII, and X."
    },
    {
        "id": 376,
        "question": "Which infection is associated with ring forms in red blood cells?",
        "options": [
            "Leishmaniasis",
            "Malaria",
            "Trypanosomiasis",
            "Sepsis"
        ],
        "answer": "Malaria",
        "difficulty": "medium",
        "topic": "Infections Affecting Blood",
        "explanation": "Malaria is characterized by ring forms (trophozoites) of Plasmodium in red blood cells on blood smear."
    },
    {
        "id": 377,
        "question": "Which condition is associated with hypercalcemia in hematologic malignancies?",
        "options": [
            "Chronic myeloid leukemia",
            "Multiple myeloma",
            "Aplastic anemia",
            "Sickle cell disease"
        ],
        "answer": "Multiple myeloma",
        "difficulty": "hard",
        "topic": "Hematologic Malignancies",
        "explanation": "Multiple myeloma causes hypercalcemia due to bone destruction from lytic lesions."
    },
    {
        "id": 378,
        "question": "Which hematologic condition is associated with thrombocytopenia in older adults?",
        "options": [
            "Sickle cell disease",
            "Chronic lymphocytic leukemia",
            "Immune thrombocytopenia",
            "Thalassemia"
        ],
        "answer": "Immune thrombocytopenia",
        "difficulty": "medium",
        "topic": "Geriatric Haematology",
        "explanation": "Immune thrombocytopenia is common in older adults, causing low platelet counts due to autoimmune destruction."
    },
    {
        "id": 379,
        "question": "What is the primary advantage of monoclonal antibodies in leukemia treatment?",
        "options": [
            "Increase red blood cell production",
            "Target specific antigens",
            "Correct clotting factor deficiencies",
            "Enhance immune responses"
        ],
        "answer": "Target specific antigens",
        "difficulty": "hard",
        "topic": "Recent Advances",
        "explanation": "Monoclonal antibodies target specific antigens on leukemia cells, improving treatment specificity and efficacy."
    },
    {
        "id": 380,
        "question": "Which type of anemia is associated with a high lactate dehydrogenase (LDH)?",
        "options": [
            "Iron deficiency anemia",
            "Hemolytic anemia",
            "Megaloblastic anemia",
            "Aplastic anemia"
        ],
        "answer": "Hemolytic anemia",
        "difficulty": "medium",
        "topic": "Anaemias",
        "explanation": "Hemolytic anemia causes elevated LDH due to red blood cell destruction and release of intracellular enzymes."
    },
    {
        "id": 381,
        "question": "Which white blood cell type is primarily involved in humoral immunity?",
        "options": [
            "Neutrophils",
            "B lymphocytes",
            "T lymphocytes",
            "Monocytes"
        ],
        "answer": "B lymphocytes",
        "difficulty": "medium",
        "topic": "White Blood Cells",
        "explanation": "B lymphocytes produce antibodies, mediating humoral immunity against extracellular pathogens."
    },
    {
        "id": 382,
        "question": "Which leukemia is associated with a high risk of disseminated intravascular coagulation (DIC)?",
        "options": [
            "Chronic lymphocytic leukemia",
            "Acute promyelocytic leukemia",
            "Chronic myeloid leukemia",
            "Acute lymphoblastic leukemia"
        ],
        "answer": "Acute promyelocytic leukemia",
        "difficulty": "hard",
        "topic": "Leukaemias and Lymphomas",
        "explanation": "Acute promyelocytic leukemia has a high risk of DIC due to the release of procoagulant substances from promyelocytes."
    },
    {
        "id": 383,
        "question": "What is the primary role of tissue factor in hemostasis?",
        "options": [
            "Stimulate platelet production",
            "Initiate extrinsic coagulation pathway",
            "Dissolve clots",
            "Stabilize fibrin"
        ],
        "answer": "Initiate extrinsic coagulation pathway",
        "difficulty": "hard",
        "topic": "Platelets and Hemostasis",
        "explanation": "Tissue factor, exposed at injury sites, initiates the extrinsic coagulation pathway by activating factor VII."
    },
    {
        "id": 384,
        "question": "Which condition is associated with a low hemoglobin in bleeding disorders?",
        "options": [
            "Polycythemia vera",
            "Chronic blood loss",
            "Sickle cell disease",
            "Thalassemia"
        ],
        "answer": "Chronic blood loss",
        "difficulty": "medium",
        "topic": "Coagulation and Bleeding Disorders",
        "explanation": "Chronic blood loss, such as from gastrointestinal bleeding, causes low hemoglobin due to ongoing red blood cell loss."
    },
    {
        "id": 385,
        "question": "What is the primary cause of delayed hemolytic transfusion reactions?",
        "options": [
            "ABO incompatibility",
            "Minor antigen incompatibility",
            "Iron overload",
            "Cytokine release"
        ],
        "answer": "Minor antigen incompatibility",
        "difficulty": "hard",
        "topic": "Blood Groups and Transfusion Medicine",
        "explanation": "Delayed hemolytic transfusion reactions occur due to minor antigen incompatibilities, causing gradual hemolysis."
    },
    {
        "id": 386,
        "question": "Which laboratory technique is used to detect malaria parasites?",
        "options": [
            "Flow cytometry",
            "Peripheral blood smear",
            "Reticulocyte count",
            "D-dimer"
        ],
        "answer": "Peripheral blood smear",
        "difficulty": "medium",
        "topic": "Laboratory Techniques",
        "explanation": "Peripheral blood smear is used to visualize malaria parasites, such as Plasmodium ring forms, in red blood cells."
    },
    {
        "id": 387,
        "question": "Which infection is associated with bone marrow granulomas?",
        "options": [
            "Malaria",
            "Leishmaniasis",
            "Trypanosomiasis",
            "Sepsis"
        ],
        "answer": "Leishmaniasis",
        "difficulty": "hard",
        "topic": "Infections Affecting Blood",
        "explanation": "Leishmaniasis causes bone marrow granulomas due to macrophage infection by Leishmania parasites."
    },
    {
        "id": 388,
        "question": "Which condition is associated with a high white blood cell count in myeloproliferative disorders?",
        "options": [
            "Aplastic anemia",
            "Chronic myeloid leukemia",
            "Sickle cell disease",
            "Thalassemia"
        ],
        "answer": "Chronic myeloid leukemia",
        "difficulty": "medium",
        "topic": "Myeloproliferative Disorders",
        "explanation": "Chronic myeloid leukemia causes a high white blood cell count due to uncontrolled myeloid cell proliferation."
    },
    {
        "id": 389,
        "question": "Which hematologic condition is associated with painful crises in children?",
        "options": [
            "Hemophilia",
            "Sickle cell disease",
            "Thalassemia",
            "Aplastic anemia"
        ],
        "answer": "Sickle cell disease",
        "difficulty": "medium",
        "topic": "Pediatric Haematology",
        "explanation": "Sickle cell disease causes painful vaso-occlusive crises in children due to sickled red blood cells obstructing vessels."
    },
    {
        "id": 390,
        "question": "What is the primary role of targeted therapies in lymphoma treatment?",
        "options": [
            "Increase red blood cell production",
            "Inhibit specific cancer pathways",
            "Correct clotting factor deficiencies",
            "Enhance immune responses"
        ],
        "answer": "Inhibit specific cancer pathways",
        "difficulty": "hard",
        "topic": "Recent Advances",
        "explanation": "Targeted therapies inhibit specific cancer pathways, improving outcomes in lymphomas with fewer side effects."
    },
    {
        "id": 391,
        "question": "Which type of anemia is associated with a low mean corpuscular volume (MCV)?",
        "options": [
            "Megaloblastic anemia",
            "Iron deficiency anemia",
            "Sickle cell anemia",
            "Aplastic anemia"
        ],
        "answer": "Iron deficiency anemia",
        "difficulty": "medium",
        "topic": "Anaemias",
        "explanation": "Iron deficiency anemia causes a low MCV, indicating microcytic red blood cells due to reduced hemoglobin synthesis."
    },
    {
        "id": 392,
        "question": "Which white blood cell type is primarily involved in allergic reactions?",
        "options": [
            "Neutrophils",
            "Lymphocytes",
            "Eosinophils",
            "Monocytes"
        ],
        "answer": "Eosinophils",
        "difficulty": "medium",
        "topic": "White Blood Cells",
        "explanation": "Eosinophils are involved in allergic reactions, releasing mediators like histamine to combat allergens."
    },
    {
        "id": 393,
        "question": "Which leukemia is associated with a high risk of infection?",
        "options": [
            "Chronic lymphocytic leukemia",
            "Acute myeloid leukemia",
            "Chronic myeloid leukemia",
            "Myelodysplastic syndrome"
        ],
        "answer": "Acute myeloid leukemia",
        "difficulty": "hard",
        "topic": "Leukaemias and Lymphomas",
        "explanation": "Acute myeloid leukemia increases infection risk due to severe neutropenia from blast proliferation."
    },
    {
        "id": 394,
        "question": "What is the primary role of platelets in clot retraction?",
        "options": [
            "Dissolve clots",
            "Compact the fibrin clot",
            "Stimulate thrombin",
            "Initiate coagulation"
        ],
        "answer": "Compact the fibrin clot",
        "difficulty": "hard",
        "topic": "Platelets and Hemostasis",
        "explanation": "Platelets mediate clot retraction by contracting, compacting the fibrin clot to aid wound closure."
    },
    {
        "id": 395,
        "question": "Which condition is associated with a high bleeding time in bleeding disorders?",
        "options": [
            "Hemophilia A",
            "Thrombocytopenia",
            "Factor IX deficiency",
            "Disseminated intravascular coagulation"
        ],
        "answer": "Thrombocytopenia",
        "difficulty": "medium",
        "topic": "Coagulation and Bleeding Disorders",
        "explanation": "Thrombocytopenia prolongs bleeding time due to insufficient platelets for plug formation."
    },
    {
        "id": 396,
        "question": "What is the primary cause of iron overload in transfusion-dependent patients?",
        "options": [
            "ABO incompatibility",
            "Repeated blood transfusions",
            "Cytokine release",
            "Donor lymphocyte attack"
        ],
        "answer": "Repeated blood transfusions",
        "difficulty": "medium",
        "topic": "Blood Groups and Transfusion Medicine",
        "explanation": "Repeated blood transfusions, as in thalassemia, cause iron overload due to excessive iron accumulation."
    },
    {
        "id": 397,
        "question": "Which laboratory technique is used to assess bone marrow cellularity?",
        "options": [
            "Reticulocyte count",
            "Bone marrow biopsy",
            "Flow cytometry",
            "ESR"
        ],
        "answer": "Bone marrow biopsy",
        "difficulty": "medium",
        "topic": "Laboratory Techniques",
        "explanation": "Bone marrow biopsy assesses cellularity and pathology, critical for diagnosing leukemias and marrow disorders."
    },
    {
        "id": 398,
        "question": "Which infection is associated with trypomastigotes in blood smears?",
        "options": [
            "Malaria",
            "Leishmaniasis",
            "Trypanosomiasis",
            "Sepsis"
        ],
        "answer": "Trypanosomiasis",
        "difficulty": "hard",
        "topic": "Infections Affecting Blood",
        "explanation": "Trypanosomiasis is characterized by trypomastigotes, the flagellated form of Trypanosoma, in blood smears."
    },
    {
        "id": 399,
        "question": "Which condition is associated with a high erythrocyte sedimentation rate (ESR)?",
        "options": [
            "Iron deficiency anemia",
            "Multiple myeloma",
            "Sickle cell disease",
            "Thalassemia"
        ],
        "answer": "Multiple myeloma",
        "difficulty": "medium",
        "topic": "Hematologic Malignancies",
        "explanation": "Multiple myeloma increases ESR due to elevated plasma proteins, causing red blood cells to settle faster."
    },
    {
        "id": 400,
        "question": "Which hematologic condition is associated with stroke risk in children?",
        "options": [
            "Hemophilia",
            "Sickle cell disease",
            "Thalassemia",
            "Aplastic anemia"
        ],
        "answer": "Sickle cell disease",
        "difficulty": "medium",
        "topic": "Pediatric Haematology",
        "explanation": "Sickle cell disease increases stroke risk in children due to vaso-occlusion in cerebral blood vessels."
    },
    {
        "id": 401,
        "question": "What is the primary focus of clinical haematology?",
        "options": [
            "Study of musculoskeletal disorders",
            "Diagnosis and treatment of blood disorders",
            "Management of respiratory conditions",
            "Analysis of endocrine imbalances"
        ],
        "answer": "Diagnosis and treatment of blood disorders",
        "difficulty": "easy",
        "topic": "Introduction to Haematology",
        "explanation": "Clinical haematology focuses on diagnosing and treating disorders of blood and blood-forming organs, such as anemia and leukemia."
    },
    {
        "id": 402,
        "question": "Which historical advancement improved blood transfusion safety in the 20th century?",
        "options": [
            "Discovery of antibiotics",
            "Identification of Rh factor",
            "Development of X-rays",
            "Invention of PCR"
        ],
        "answer": "Identification of Rh factor",
        "difficulty": "medium",
        "topic": "Introduction to Haematology",
        "explanation": "The discovery of the Rh factor in 1940 by Landsteiner and Wiener improved transfusion safety by preventing Rh incompatibility reactions."
    },
    {
        "id": 403,
        "question": "Which plasma protein is critical for immune function?",
        "options": [
            "Albumin",
            "Fibrinogen",
            "Immunoglobulins",
            "Transferrin"
        ],
        "answer": "Immunoglobulins",
        "difficulty": "medium",
        "topic": "Composition and Functions of Blood",
        "explanation": "Immunoglobulins, or antibodies, are plasma proteins produced by B-cells, essential for immune defense against pathogens."
    },
    {
        "id": 404,
        "question": "What is the primary role of hemoglobin in red blood cells?",
        "options": [
            "Clot formation",
            "Immune defense",
            "Oxygen transport",
            "Nutrient storage"
        ],
        "answer": "Oxygen transport",
        "difficulty": "easy",
        "topic": "Composition and Functions of Blood",
        "explanation": "Hemoglobin in red blood cells binds oxygen in the lungs and transports it to tissues, releasing carbon dioxide back to the lungs."
    },
    {
        "id": 405,
        "question": "Which hormone primarily regulates erythropoiesis?",
        "options": [
            "Thrombopoietin",
            "Erythropoietin",
            "Interleukin-3",
            "Granulocyte colony-stimulating factor"
        ],
        "answer": "Erythropoietin",
        "difficulty": "medium",
        "topic": "Haemopoiesis",
        "explanation": "Erythropoietin, produced by the kidneys, stimulates red blood cell production in the bone marrow in response to low oxygen levels."
    },
    {
        "id": 406,
        "question": "Where does hematopoiesis primarily occur during fetal development after the yolk sac phase?",
        "options": [
            "Bone marrow",
            "Spleen",
            "Liver",
            "Lymph nodes"
        ],
        "answer": "Liver",
        "difficulty": "medium",
        "topic": "Haemopoiesis",
        "explanation": "During fetal development, the liver becomes the primary site of hematopoiesis after the yolk sac phase, before transitioning to bone marrow."
    },
    {
        "id": 407,
        "question": "Which component of hemoglobin contains the iron atom?",
        "options": [
            "Globin chain",
            "Heme group",
            "Porphyrin ring",
            "Ferritin"
        ],
        "answer": "Heme group",
        "difficulty": "medium",
        "topic": "Erythrocytes",
        "explanation": "The heme group in hemoglobin contains an iron atom that binds oxygen, enabling its transport in the bloodstream."
    },
    {
        "id": 408,
        "question": "What is the primary function of the red blood cell membrane?",
        "options": [
            "Produce hemoglobin",
            "Maintain cell shape and flexibility",
            "Store oxygen",
            "Synthesize clotting factors"
        ],
        "answer": "Maintain cell shape and flexibility",
        "difficulty": "medium",
        "topic": "Erythrocytes",
        "explanation": "The red blood cell membrane provides structural integrity and flexibility, allowing cells to deform while passing through capillaries."
    },
    {
        "id": 409,
        "question": "Which anemia is caused by chronic inflammation?",
        "options": [
            "Iron deficiency anemia",
            "Anemia of chronic disease",
            "Sickle cell anemia",
            "Megaloblastic anemia"
        ],
        "answer": "Anemia of chronic disease",
        "difficulty": "medium",
        "topic": "Anaemias",
        "explanation": "Anemia of chronic disease results from chronic inflammation, which impairs iron utilization and erythropoiesis."
    },
    {
        "id": 410,
        "question": "What is the primary cause of autoimmune hemolytic anemia?",
        "options": [
            "Red blood cell membrane defects",
            "Antibody-mediated destruction",
            "Enzyme deficiencies",
            "Hemoglobinopathies"
        ],
        "answer": "Antibody-mediated destruction",
        "difficulty": "hard",
        "topic": "Anaemias",
        "explanation": "Autoimmune hemolytic anemia occurs when antibodies attack red blood cells, leading to their premature destruction."
    },
    {
        "id": 411,
        "question": "Which white blood cell type is primarily involved in viral infections?",
        "options": [
            "Neutrophils",
            "Lymphocytes",
            "Eosinophils",
            "Basophils"
        ],
        "answer": "Lymphocytes",
        "difficulty": "medium",
        "topic": "White Blood Cells",
        "explanation": "Lymphocytes, particularly T-cells, are key in combating viral infections through cell-mediated immunity."
    },
    {
        "id": 412,
        "question": "What is the primary cause of eosinophilia?",
        "options": [
            "Bacterial infections",
            "Allergic reactions",
            "Viral infections",
            "Iron deficiency"
        ],
        "answer": "Allergic reactions",
        "difficulty": "medium",
        "topic": "WBC Disorders",
        "explanation": "Eosinophilia is commonly caused by allergic reactions, which stimulate eosinophil production to combat allergens."
    },
    {
        "id": 413,
        "question": "Which leukemia is characterized by smudge cells on blood smear?",
        "options": [
            "Acute myeloid leukemia",
            "Chronic lymphocytic leukemia",
            "Acute lymphoblastic leukemia",
            "Chronic myeloid leukemia"
        ],
        "answer": "Chronic lymphocytic leukemia",
        "difficulty": "hard",
        "topic": "Leukaemias and Lymphomas",
        "explanation": "Chronic lymphocytic leukemia is characterized by smudge cells, fragile lymphocytes that rupture during smear preparation."
    },
    {
        "id": 414,
        "question": "What is the primary source of platelets in the blood?",
        "options": [
            "Red blood cells",
            "Megakaryocytes",
            "White blood cells",
            "Plasma proteins"
        ],
        "answer": "Megakaryocytes",
        "difficulty": "easy",
        "topic": "Platelets and Hemostasis",
        "explanation": "Platelets are produced by megakaryocytes in the bone marrow, which fragment into platelets for circulation."
    },
    {
        "id": 415,
        "question": "Which clotting factor is activated by thrombin in the coagulation cascade?",
        "options": [
            "Factor VII",
            "Factor VIII",
            "Factor XI",
            "Factor V"
        ],
        "answer": "Factor V",
        "difficulty": "hard",
        "topic": "Coagulation and Bleeding Disorders",
        "explanation": "Thrombin activates factor V, which accelerates the coagulation cascade by enhancing thrombin generation."
    },
    {
        "id": 416,
        "question": "Which blood group system is critical for preventing hemolytic disease of the newborn?",
        "options": [
            "ABO system",
            "Rh system",
            "Kell system",
            "Duffy system"
        ],
        "answer": "Rh system",
        "difficulty": "medium",
        "topic": "Blood Groups and Transfusion Medicine",
        "explanation": "The Rh system, particularly the D antigen, is critical for preventing hemolytic disease of the newborn due to Rh incompatibility."
    },
    {
        "id": 417,
        "question": "What is the primary purpose of the reticulocyte count in hematology?",
        "options": [
            "Assess platelet function",
            "Measure red blood cell production",
            "Detect clotting disorders",
            "Monitor white blood cell counts"
        ],
        "answer": "Measure red blood cell production",
        "difficulty": "medium",
        "topic": "Laboratory Techniques",
        "explanation": "The reticulocyte count measures immature red blood cells, indicating bone marrow erythropoietic activity."
    },
    {
        "id": 418,
        "question": "Which infection is associated with intraerythrocytic inclusions called ring forms?",
        "options": [
            "Trypanosomiasis",
            "Leishmaniasis",
            "Malaria",
            "Epstein-Barr virus"
        ],
        "answer": "Malaria",
        "difficulty": "medium",
        "topic": "Infections Affecting Blood",
        "explanation": "Malaria, caused by Plasmodium, is characterized by ring forms (trophozoites) within red blood cells on blood smear."
    },
    {
        "id": 419,
        "question": "Which condition is associated with a high white blood cell count in myeloproliferative disorders?",
        "options": [
            "Aplastic anemia",
            "Chronic myeloid leukemia",
            "Thalassemia",
            "Iron deficiency anemia"
        ],
        "answer": "Chronic myeloid leukemia",
        "difficulty": "medium",
        "topic": "Myeloproliferative Disorders",
        "explanation": "Chronic myeloid leukemia causes a high white blood cell count due to uncontrolled myeloid cell proliferation."
    },
    {
        "id": 420,
        "question": "Which hematologic condition is associated with growth retardation in children?",
        "options": [
            "Hemophilia",
            "Thalassemia major",
            "Sickle cell disease",
            "Aplastic anemia"
        ],
        "answer": "Thalassemia major",
        "difficulty": "medium",
        "topic": "Pediatric Haematology",
        "explanation": "Thalassemia major can cause growth retardation in children due to chronic anemia and iron overload."
    },
    {
        "id": 421,
        "question": "What is the primary goal of monoclonal antibody therapy in leukemia?",
        "options": [
            "Increase red blood cell production",
            "Target specific leukemic cell antigens",
            "Correct clotting factor deficiencies",
            "Enhance platelet function"
        ],
        "answer": "Target specific leukemic cell antigens",
        "difficulty": "hard",
        "topic": "Recent Advances",
        "explanation": "Monoclonal antibodies target specific antigens on leukemic cells, such as CD20, to enhance treatment specificity."
    },
    {
        "id": 422,
        "question": "Which plasma component is primarily responsible for maintaining blood volume?",
        "options": [
            "Fibrinogen",
            "Albumin",
            "Immunoglobulins",
            "Platelets"
        ],
        "answer": "Albumin",
        "difficulty": "medium",
        "topic": "Composition and Functions of Blood",
        "explanation": "Albumin maintains oncotic pressure in plasma, preventing fluid leakage and sustaining blood volume."
    },
    {
        "id": 423,
        "question": "Which cell type differentiates into granulocytes and monocytes?",
        "options": [
            "Lymphoid stem cell",
            "Hematopoietic stem cell",
            "Myeloid stem cell",
            "Erythroid progenitor"
        ],
        "answer": "Myeloid stem cell",
        "difficulty": "hard",
        "topic": "Haemopoiesis",
        "explanation": "Myeloid stem cells differentiate into granulocytes (neutrophils, eosinophils, basophils) and monocytes in the bone marrow."
    },
    {
        "id": 424,
        "question": "What is the primary role of mean corpuscular volume (MCV) in hematology?",
        "options": [
            "Measure hemoglobin concentration",
            "Assess red blood cell size",
            "Detect platelet function",
            "Monitor clotting factors"
        ],
        "answer": "Assess red blood cell size",
        "difficulty": "medium",
        "topic": "Erythrocytes",
        "explanation": "MCV measures the average size of red blood cells, aiding in classifying anemias as microcytic, normocytic, or macrocytic."
    },
    {
        "id": 425,
        "question": "Which anemia is associated with a high mean corpuscular volume (MCV)?",
        "options": [
            "Iron deficiency anemia",
            "Sickle cell anemia",
            "Megaloblastic anemia",
            "Anemia of chronic disease"
        ],
        "answer": "Megaloblastic anemia",
        "difficulty": "medium",
        "topic": "Anaemias",
        "explanation": "Megaloblastic anemia causes a high MCV due to large, immature red blood cells from impaired DNA synthesis."
    },
    {
        "id": 426,
        "question": "Which white blood cell type is primarily involved in phagocytosis of fungi?",
        "options": [
            "Lymphocytes",
            "Neutrophils",
            "Eosinophils",
            "Basophils"
        ],
        "answer": "Neutrophils",
        "difficulty": "medium",
        "topic": "White Blood Cells",
        "explanation": "Neutrophils are the primary phagocytic cells for fungi, particularly in invasive fungal infections."
    },
    {
        "id": 427,
        "question": "Which lymphoma is associated with Reed-Sternberg cells?",
        "options": [
            "Non-Hodgkin lymphoma",
            "Hodgkin lymphoma",
            "Chronic lymphocytic leukemia",
            "Multiple myeloma"
        ],
        "answer": "Hodgkin lymphoma",
        "difficulty": "medium",
        "topic": "Leukaemias and Lymphomas",
        "explanation": "Hodgkin lymphoma is characterized by Reed-Sternberg cells, large multinucleated cells seen in lymph node biopsies."
    },
    {
        "id": 428,
        "question": "What is the primary role of von Willebrand factor in hemostasis?",
        "options": [
            "Convert fibrinogen to fibrin",
            "Mediate platelet adhesion",
            "Activate thrombin",
            "Dissolve clots"
        ],
        "answer": "Mediate platelet adhesion",
        "difficulty": "medium",
        "topic": "Platelets and Hemostasis",
        "explanation": "Von Willebrand factor mediates platelet adhesion to damaged vessel walls, initiating the platelet plug."
    },
    {
        "id": 429,
        "question": "Which test is used to monitor heparin therapy?",
        "options": [
            "Prothrombin time (PT)",
            "Activated partial thromboplastin time (aPTT)",
            "Bleeding time",
            "D-dimer"
        ],
        "answer": "Activated partial thromboplastin time (aPTT)",
        "difficulty": "medium",
        "topic": "Coagulation and Bleeding Disorders",
        "explanation": "aPTT monitors heparin therapy, which prolongs the intrinsic coagulation pathway by inhibiting thrombin and factor Xa."
    },
    {
        "id": 430,
        "question": "What is the primary cause of hemolytic transfusion reactions?",
        "options": [
            "Minor antigen incompatibility",
            "ABO incompatibility",
            "Cytokine release",
            "Iron overload"
        ],
        "answer": "ABO incompatibility",
        "difficulty": "medium",
        "topic": "Blood Groups and Transfusion Medicine",
        "explanation": "ABO incompatibility causes hemolytic transfusion reactions due to recipient antibodies attacking donor red blood cells."
    },
    {
        "id": 431,
        "question": "Which laboratory technique is used to identify leukemia subtypes?",
        "options": [
            "Peripheral blood smear",
            "Flow cytometry",
            "ESR",
            "Reticulocyte count"
        ],
        "answer": "Flow cytometry",
        "difficulty": "hard",
        "topic": "Laboratory Techniques",
        "explanation": "Flow cytometry identifies leukemia subtypes by detecting cell surface markers, aiding in immunophenotyping."
    },
    {
        "id": 432,
        "question": "Which infection is associated with amastigotes in macrophages?",
        "options": [
            "Malaria",
            "Trypanosomiasis",
            "Leishmaniasis",
            "Sepsis"
        ],
        "answer": "Leishmaniasis",
        "difficulty": "hard",
        "topic": "Infections Affecting Blood",
        "explanation": "Leishmaniasis is characterized by amastigotes, the intracellular form of Leishmania, within macrophages."
    },
    {
        "id": 433,
        "question": "Which condition is associated with a high platelet count in myeloproliferative disorders?",
        "options": [
            "Aplastic anemia",
            "Essential thrombocythemia",
            "Sickle cell disease",
            "Thalassemia"
        ],
        "answer": "Essential thrombocythemia",
        "difficulty": "medium",
        "topic": "Myeloproliferative Disorders",
        "explanation": "Essential thrombocythemia causes a high platelet count due to clonal megakaryocyte proliferation."
    },
    {
        "id": 434,
        "question": "Which hematologic condition is associated with recurrent infections in children?",
        "options": [
            "Hemophilia",
            "Sickle cell disease",
            "Thalassemia",
            "Aplastic anemia"
        ],
        "answer": "Sickle cell disease",
        "difficulty": "medium",
        "topic": "Pediatric Haematology",
        "explanation": "Sickle cell disease causes recurrent infections due to functional asplenia, impairing immune defense."
    },
    {
        "id": 435,
        "question": "What is the primary advantage of targeted therapies in lymphoma treatment?",
        "options": [
            "Increase red blood cell production",
            "Inhibit specific cancer pathways",
            "Correct clotting factor deficiencies",
            "Enhance platelet function"
        ],
        "answer": "Inhibit specific cancer pathways",
        "difficulty": "hard",
        "topic": "Recent Advances",
        "explanation": "Targeted therapies inhibit specific cancer pathways, improving outcomes in lymphomas with reduced side effects."
    },
    {
        "id": 436,
        "question": "Which type of anemia is associated with target cells on blood smear?",
        "options": [
            "Iron deficiency anemia",
            "Thalassemia",
            "Megaloblastic anemia",
            "Aplastic anemia"
        ],
        "answer": "Thalassemia",
        "difficulty": "hard",
        "topic": "Anaemias",
        "explanation": "Target cells, with a bullseye appearance, are seen in thalassemia due to excess membrane relative to hemoglobin."
    },
    {
        "id": 437,
        "question": "Which white blood cell type is primarily involved in antigen presentation?",
        "options": [
            "Neutrophils",
            "Lymphocytes",
            "Monocytes",
            "Basophils"
        ],
        "answer": "Monocytes",
        "difficulty": "medium",
        "topic": "White Blood Cells",
        "explanation": "Monocytes differentiate into macrophages and dendritic cells, which present antigens to T-cells to initiate immune responses."
    },
    {
        "id": 438,
        "question": "Which leukemia is associated with a high risk of disseminated intravascular coagulation (DIC)?",
        "options": [
            "Chronic lymphocytic leukemia",
            "Acute promyelocytic leukemia",
            "Chronic myeloid leukemia",
            "Acute lymphoblastic leukemia"
        ],
        "answer": "Acute promyelocytic leukemia",
        "difficulty": "hard",
        "topic": "Leukaemias and Lymphomas",
        "explanation": "Acute promyelocytic leukemia has a high risk of DIC due to procoagulant substances released by promyelocytes."
    },
    {
        "id": 439,
        "question": "What is the primary role of tissue factor in hemostasis?",
        "options": [
            "Stimulate platelet production",
            "Initiate extrinsic coagulation pathway",
            "Dissolve clots",
            "Stabilize fibrin"
        ],
        "answer": "Initiate extrinsic coagulation pathway",
        "difficulty": "hard",
        "topic": "Platelets and Hemostasis",
        "explanation": "Tissue factor, exposed at injury sites, initiates the extrinsic coagulation pathway by activating factor VII."
    },
    {
        "id": 440,
        "question": "Which condition is associated with a prolonged prothrombin time (PT)?",
        "options": [
            "Hemophilia A",
            "Vitamin K deficiency",
            "Von Willebrand disease",
            "Thrombocytopenia"
        ],
        "answer": "Vitamin K deficiency",
        "difficulty": "medium",
        "topic": "Coagulation and Bleeding Disorders",
        "explanation": "Vitamin K deficiency prolongs PT by impairing synthesis of factors II, VII, IX, and X in the extrinsic and common pathways."
    },
    {
        "id": 441,
        "question": "What is the primary purpose of crossmatching in transfusion medicine?",
        "options": [
            "Measure hemoglobin levels",
            "Ensure donor-recipient compatibility",
            "Assess clotting factors",
            "Detect infections"
        ],
        "answer": "Ensure donor-recipient compatibility",
        "difficulty": "medium",
        "topic": "Blood Groups and Transfusion Medicine",
        "explanation": "Crossmatching tests donor red blood cells with recipient serum to ensure compatibility and prevent transfusion reactions."
    },
    {
        "id": 442,
        "question": "Which laboratory technique is used to detect chromosomal abnormalities in leukemia?",
        "options": [
            "Peripheral blood smear",
            "Karyotyping",
            "ESR",
            "Reticulocyte count"
        ],
        "answer": "Karyotyping",
        "difficulty": "hard",
        "topic": "Laboratory Techniques",
        "explanation": "Karyotyping detects chromosomal abnormalities, such as translocations, in leukemia cells, aiding in diagnosis and prognosis."
    },
    {
        "id": 443,
        "question": "Which infection is associated with schizonts in red blood cells?",
        "options": [
            "Trypanosomiasis",
            "Leishmaniasis",
            "Malaria",
            "Sepsis"
        ],
        "answer": "Malaria",
        "difficulty": "hard",
        "topic": "Infections Affecting Blood",
        "explanation": "Malaria is characterized by schizonts, a stage of Plasmodium, within red blood cells on blood smear."
    },
    {
        "id": 444,
        "question": "Which condition is associated with monoclonal protein in serum?",
        "options": [
            "Chronic myeloid leukemia",
            "Multiple myeloma",
            "Hodgkin lymphoma",
            "Aplastic anemia"
        ],
        "answer": "Multiple myeloma",
        "difficulty": "hard",
        "topic": "Hematologic Malignancies",
        "explanation": "Multiple myeloma is characterized by a monoclonal protein spike in serum due to excessive plasma cell production of immunoglobulins."
    },
    {
        "id": 445,
        "question": "Which hematologic condition is common in older adults and associated with fatigue?",
        "options": [
            "Sickle cell disease",
            "Myelodysplastic syndrome",
            "Thalassemia",
            "Hemophilia"
        ],
        "answer": "Myelodysplastic syndrome",
        "difficulty": "medium",
        "topic": "Geriatric Haematology",
        "explanation": "Myelodysplastic syndrome is common in older adults, causing fatigue due to ineffective hematopoiesis and anemia."
    },
    {
        "id": 446,
        "question": "What is the primary role of tyrosine kinase inhibitors in leukemia treatment?",
        "options": [
            "Increase red blood cell production",
            "Inhibit BCR-ABL fusion protein",
            "Correct clotting factor deficiencies",
            "Enhance platelet function"
        ],
        "answer": "Inhibit BCR-ABL fusion protein",
        "difficulty": "hard",
        "topic": "Recent Advances",
        "explanation": "Tyrosine kinase inhibitors, like imatinib, inhibit the BCR-ABL fusion protein in chronic myeloid leukemia, controlling disease progression."
    },
    {
        "id": 447,
        "question": "Which type of anemia is associated with schistocytes on blood smear?",
        "options": [
            "Iron deficiency anemia",
            "Megaloblastic anemia",
            "Microangiopathic hemolytic anemia",
            "Aplastic anemia"
        ],
        "answer": "Microangiopathic hemolytic anemia",
        "difficulty": "hard",
        "topic": "Anaemias",
        "explanation": "Schistocytes, fragmented red blood cells, are seen in microangiopathic hemolytic anemia due to mechanical damage in small vessels."
    },
    {
        "id": 448,
        "question": "Which white blood cell type is primarily involved in chronic inflammation?",
        "options": [
            "Neutrophils",
            "Lymphocytes",
            "Monocytes",
            "Eosinophils"
        ],
        "answer": "Monocytes",
        "difficulty": "medium",
        "topic": "White Blood Cells",
        "explanation": "Monocytes differentiate into macrophages, which are critical in chronic inflammation, such as in tuberculosis."
    },
    {
        "id": 449,
        "question": "Which leukemia is treated with all-trans retinoic acid (ATRA)?",
        "options": [
            "Chronic lymphocytic leukemia",
            "Acute promyelocytic leukemia",
            "Chronic myeloid leukemia",
            "Acute lymphoblastic leukemia"
        ],
        "answer": "Acute promyelocytic leukemia",
        "difficulty": "hard",
        "topic": "Leukaemias and Lymphomas",
        "explanation": "Acute promyelocytic leukemia is treated with ATRA, which induces differentiation of promyelocytes, improving outcomes."
    },
    {
        "id": 450,
        "question": "What is the primary role of fibrinogen in hemostasis?",
        "options": [
            "Stimulate platelet production",
            "Form a fibrin clot",
            "Reduce blood flow",
            "Dissolve clots"
        ],
        "answer": "Form a fibrin clot",
        "difficulty": "medium",
        "topic": "Platelets and Hemostasis",
        "explanation": "Fibrinogen is converted to fibrin by thrombin, forming a clot to stabilize the platelet plug in hemostasis."
    },
    {
        "id": 451,
        "question": "Which condition is associated with a low platelet count in bleeding disorders?",
        "options": [
            "Polycythemia vera",
            "Immune thrombocytopenia",
            "Sickle cell disease",
            "Thalassemia"
        ],
        "answer": "Immune thrombocytopenia",
        "difficulty": "medium",
        "topic": "Coagulation and Bleeding Disorders",
        "explanation": "Immune thrombocytopenia causes a low platelet count due to autoimmune destruction of platelets."
    },
    {
        "id": 452,
        "question": "What is the primary cause of febrile non-hemolytic transfusion reactions?",
        "options": [
            "ABO incompatibility",
            "Cytokines in stored blood",
            "Iron overload",
            "Donor lymphocyte attack"
        ],
        "answer": "Cytokines in stored blood",
        "difficulty": "hard",
        "topic": "Blood Groups and Transfusion Medicine",
        "explanation": "Febrile non-hemolytic transfusion reactions are caused by cytokines accumulated in stored blood, triggering fever and chills."
    },
    {
        "id": 453,
        "question": "Which laboratory technique is used to measure red blood cell volume?",
        "options": [
            "Flow cytometry",
            "Hematocrit",
            "Peripheral blood smear",
            "D-dimer"
        ],
        "answer": "Hematocrit",
        "difficulty": "medium",
        "topic": "Laboratory Techniques",
        "explanation": "Hematocrit measures the proportion of red blood cells in total blood volume, indicating red cell mass."
    },
    {
        "id": 454,
        "question": "Which infection is associated with hemophagocytic syndrome in severe cases?",
        "options": [
            "Malaria",
            "Epstein-Barr virus",
            "Trypanosomiasis",
            "Leishmaniasis"
        ],
        "answer": "Epstein-Barr virus",
        "difficulty": "hard",
        "topic": "Infections Affecting Blood",
        "explanation": "Epstein-Barr virus can trigger hemophagocytic lymphohistiocytosis, a severe syndrome involving excessive macrophage activation."
    },
    {
        "id": 455,
        "question": "Which condition is associated with a low red blood cell count in myeloproliferative disorders?",
        "options": [
            "Polycythemia vera",
            "Myelofibrosis",
            "Essential thrombocythemia",
            "Chronic myeloid leukemia"
        ],
        "answer": "Myelofibrosis",
        "difficulty": "hard",
        "topic": "Myeloproliferative Disorders",
        "explanation": "Myelofibrosis causes anemia due to bone marrow fibrosis and ineffective erythropoiesis."
    },
    {
        "id": 456,
        "question": "Which hematologic condition is associated with gallstones in children?",
        "options": [
            "Hemophilia",
            "Sickle cell disease",
            "Thalassemia",
            "Aplastic anemia"
        ],
        "answer": "Sickle cell disease",
        "difficulty": "medium",
        "topic": "Pediatric Haematology",
        "explanation": "Sickle cell disease causes gallstones due to chronic hemolysis and increased bilirubin production."
    },
    {
        "id": 457,
        "question": "What is the primary role of CRISPR in hematologic research?",
        "options": [
            "Increase red blood cell production",
            "Edit defective genes",
            "Enhance platelet function",
            "Monitor clotting factors"
        ],
        "answer": "Edit defective genes",
        "difficulty": "hard",
        "topic": "Recent Advances",
        "explanation": "CRISPR enables precise editing of defective genes, offering potential cures for hemoglobinopathies like sickle cell disease."
    },
    {
        "id": 458,
        "question": "Which type of anemia is associated with a low reticulocyte count?",
        "options": [
            "Hemolytic anemia",
            "Iron deficiency anemia",
            "Sickle cell anemia",
            "Thalassemia"
        ],
        "answer": "Iron deficiency anemia",
        "difficulty": "medium",
        "topic": "Anaemias",
        "explanation": "Iron deficiency anemia causes a low reticulocyte count due to impaired hemoglobin synthesis and reduced red cell production."
    },
    {
        "id": 459,
        "question": "Which white blood cell type is primarily involved in allergic responses?",
        "options": [
            "Neutrophils",
            "Lymphocytes",
            "Basophils",
            "Monocytes"
        ],
        "answer": "Basophils",
        "difficulty": "medium",
        "topic": "White Blood Cells",
        "explanation": "Basophils release histamine and other mediators, playing a key role in allergic responses."
    },
    {
        "id": 460,
        "question": "Which leukemia is associated with Auer rods in myeloblasts?",
        "options": [
            "Chronic lymphocytic leukemia",
            "Acute myeloid leukemia",
            "Chronic myeloid leukemia",
            "Acute lymphoblastic leukemia"
        ],
        "answer": "Acute myeloid leukemia",
        "difficulty": "hard",
        "topic": "Leukaemias and Lymphomas",
        "explanation": "Auer rods, rod-like inclusions in myeloblasts, are a hallmark of acute myeloid leukemia, aiding in its diagnosis."
    },
    {
        "id": 461,
        "question": "What is the primary role of platelets in clot retraction?",
        "options": [
            "Dissolve clots",
            "Compact the fibrin clot",
            "Stimulate thrombin",
            "Initiate coagulation"
        ],
        "answer": "Compact the fibrin clot",
        "difficulty": "hard",
        "topic": "Platelets and Hemostasis",
        "explanation": "Platelets mediate clot retraction by contracting, compacting the fibrin clot to aid wound closure."
    },
    {
        "id": 462,
        "question": "Which condition is associated with a high D-dimer level in bleeding disorders?",
        "options": [
            "Hemophilia A",
            "Disseminated intravascular coagulation",
            "Von Willebrand disease",
            "Thrombocytopenia"
        ],
        "answer": "Disseminated intravascular coagulation",
        "difficulty": "medium",
        "topic": "Coagulation and Bleeding Disorders",
        "explanation": "DIC causes elevated D-dimer levels due to fibrin degradation from widespread clotting and fibrinolysis."
    },
    {
        "id": 463,
        "question": "What is the primary cause of transfusion-associated circulatory overload (TACO)?",
        "options": [
            "ABO incompatibility",
            "Rapid transfusion volume",
            "Cytokine release",
            "Donor lymphocyte attack"
        ],
        "answer": "Rapid transfusion volume",
        "difficulty": "hard",
        "topic": "Blood Groups and Transfusion Medicine",
        "explanation": "TACO occurs when rapid transfusion overwhelms the cardiovascular system, leading to pulmonary edema."
    },
    {
        "id": 464,
        "question": "Which laboratory technique is used to assess red blood cell morphology?",
        "options": [
            "Flow cytometry",
            "Peripheral blood smear",
            "Hematocrit",
            "D-dimer"
        ],
        "answer": "Peripheral blood smear",
        "difficulty": "medium",
        "topic": "Laboratory Techniques",
        "explanation": "Peripheral blood smear allows visualization of red blood cell morphology, aiding in diagnosing anemias and other disorders."
    },
    {
        "id": 465,
        "question": "Which infection is associated with bone marrow suppression in severe cases?",
        "options": [
            "Malaria",
            "Cytomegalovirus",
            "Trypanosomiasis",
            "Leishmaniasis"
        ],
        "answer": "Cytomegalovirus",
        "difficulty": "hard",
        "topic": "Infections Affecting Blood",
        "explanation": "Cytomegalovirus can cause bone marrow suppression, particularly in immunocompromised patients, leading to cytopenias."
    },
    {
        "id": 466,
        "question": "Which condition is associated with a high reticulocyte count in myeloproliferative disorders?",
        "options": [
            "Aplastic anemia",
            "Polycythemia vera",
            "Iron deficiency anemia",
            "Thalassemia"
        ],
        "answer": "Polycythemia vera",
        "difficulty": "hard",
        "topic": "Myeloproliferative Disorders",
        "explanation": "Polycythemia vera causes a high reticulocyte count due to increased red blood cell production driven by JAK2 mutations."
    },
    {
        "id": 467,
        "question": "Which hematologic condition is associated with joint bleeding in children?",
        "options": [
            "Sickle cell disease",
            "Hemophilia",
            "Thalassemia",
            "Aplastic anemia"
        ],
        "answer": "Hemophilia",
        "difficulty": "medium",
        "topic": "Pediatric Haematology",
        "explanation": "Hemophilia causes joint bleeding (hemarthrosis) in children due to clotting factor deficiencies."
    },
    {
        "id": 468,
        "question": "What is the primary advantage of biologics in lymphoma treatment?",
        "options": [
            "Increase red blood cell production",
            "Target specific molecular pathways",
            "Correct clotting factor deficiencies",
            "Enhance platelet function"
        ],
        "answer": "Target specific molecular pathways",
        "difficulty": "hard",
        "topic": "Recent Advances",
        "explanation": "Biologics, like monoclonal antibodies, target specific molecular pathways in lymphoma cells, improving treatment efficacy."
    },
    {
        "id": 469,
        "question": "Which type of anemia is associated with spherocytes on blood smear?",
        "options": [
            "Iron deficiency anemia",
            "Hereditary spherocytosis",
            "Megaloblastic anemia",
            "Sickle cell anemia"
        ],
        "answer": "Hereditary spherocytosis",
        "difficulty": "hard",
        "topic": "Anaemias",
        "explanation": "Hereditary spherocytosis is characterized by spherocytes, round red blood cells with reduced membrane flexibility, leading to hemolysis."
    },
    {
        "id": 470,
        "question": "Which white blood cell type is primarily involved in humoral immunity?",
        "options": [
            "Neutrophils",
            "B lymphocytes",
            "T lymphocytes",
            "Monocytes"
        ],
        "answer": "B lymphocytes",
        "difficulty": "medium",
        "topic": "White Blood Cells",
        "explanation": "B lymphocytes produce antibodies, mediating humoral immunity against extracellular pathogens."
    },
    {
        "id": 471,
        "question": "Which leukemia is associated with a high risk of infection?",
        "options": [
            "Chronic lymphocytic leukemia",
            "Acute myeloid leukemia",
            "Chronic myeloid leukemia",
            "Myelodysplastic syndrome"
        ],
        "answer": "Acute myeloid leukemia",
        "difficulty": "hard",
        "topic": "Leukaemias and Lymphomas",
        "explanation": "Acute myeloid leukemia increases infection risk due to severe neutropenia from blast proliferation."
    },
    {
        "id": 472,
        "question": "What is the primary role of factor X in hemostasis?",
        "options": [
            "Stimulate platelet production",
            "Activate prothrombin",
            "Dissolve clots",
            "Stabilize fibrin"
        ],
        "answer": "Activate prothrombin",
        "difficulty": "hard",
        "topic": "Platelets and Hemostasis",
        "explanation": "Factor X, activated in both intrinsic and extrinsic pathways, converts prothrombin to thrombin in the common pathway."
    },
    {
        "id": 473,
        "question": "Which condition is associated with a low hemoglobin in bleeding disorders?",
        "options": [
            "Polycythemia vera",
            "Chronic blood loss",
            "Sickle cell disease",
            "Thalassemia"
        ],
        "answer": "Chronic blood loss",
        "difficulty": "medium",
        "topic": "Coagulation and Bleeding Disorders",
        "explanation": "Chronic blood loss, such as from gastrointestinal bleeding, causes low hemoglobin due to ongoing red blood cell loss."
    },
    {
        "id": 474,
        "question": "What is the primary cause of delayed hemolytic transfusion reactions?",
        "options": [
            "ABO incompatibility",
            "Minor antigen incompatibility",
            "Cytokine release",
            "Iron overload"
        ],
        "answer": "Minor antigen incompatibility",
        "difficulty": "hard",
        "topic": "Blood Groups and Transfusion Medicine",
        "explanation": "Delayed hemolytic transfusion reactions occur due to minor antigen incompatibilities, causing gradual hemolysis days after transfusion."
    },
    {
        "id": 475,
        "question": "Which laboratory technique is used to detect specific enzymes in leukemia cells?",
        "options": [
            "Flow cytometry",
            "Cytochemistry",
            "Peripheral blood smear",
            "Hematocrit"
        ],
        "answer": "Cytochemistry",
        "difficulty": "hard",
        "topic": "Laboratory Techniques",
        "explanation": "Cytochemistry detects specific enzymes, like myeloperoxidase, in leukemia cells, aiding in distinguishing AML from ALL."
    },
    {
        "id": 476,
        "question": "Which infection is associated with trypomastigotes in blood?",
        "options": [
            "Malaria",
            "Leishmaniasis",
            "Trypanosomiasis",
            "Sepsis"
        ],
        "answer": "Trypanosomiasis",
        "difficulty": "hard",
        "topic": "Infections Affecting Blood",
        "explanation": "Trypanosomiasis is characterized by trypomastigotes, the flagellated form of Trypanosoma, in blood smears."
    },
    {
        "id": 477,
        "question": "Which condition is associated with a high lactate dehydrogenase (LDH) in hematologic malignancies?",
        "options": [
            "Aplastic anemia",
            "Multiple myeloma",
            "Iron deficiency anemia",
            "Thalassemia"
        ],
        "answer": "Multiple myeloma",
        "difficulty": "hard",
        "topic": "Hematologic Malignancies",
        "explanation": "Multiple myeloma causes elevated LDH due to increased cell turnover and hemolysis."
    },
    {
        "id": 478,
        "question": "Which hematologic condition is associated with renal failure in adults?",
        "options": [
            "Sickle cell disease",
            "Multiple myeloma",
            "Thalassemia",
            "Aplastic anemia"
        ],
        "answer": "Multiple myeloma",
        "difficulty": "hard",
        "topic": "Hematologic Malignancies",
        "explanation": "Multiple myeloma causes renal failure due to light chain deposition and hypercalcemia."
    },
    {
        "id": 479,
        "question": "What is the primary role of CAR-T cell therapy in leukemia treatment?",
        "options": [
            "Increase red blood cell production",
            "Target CD19 on B-cells",
            "Correct clotting factor deficiencies",
            "Enhance platelet function"
        ],
        "answer": "Target CD19 on B-cells",
        "difficulty": "hard",
        "topic": "Recent Advances",
        "explanation": "CAR-T cell therapy targets CD19 on malignant B-cells, effective in treating B-cell leukemias and lymphomas."
    },
    {
        "id": 480,
        "question": "Which type of anemia is associated with Howell-Jolly bodies on blood smear?",
        "options": [
            "Iron deficiency anemia",
            "Sickle cell anemia",
            "Megaloblastic anemia",
            "Aplastic anemia"
        ],
        "answer": "Sickle cell anemia",
        "difficulty": "hard",
        "topic": "Anaemias",
        "explanation": "Howell-Jolly bodies, nuclear remnants in red blood cells, are seen in sickle cell anemia due to functional asplenia."
    },
    {
        "id": 481,
        "question": "Which white blood cell type is primarily involved in acute bacterial infections?",
        "options": [
            "Lymphocytes",
            "Neutrophils",
            "Eosinophils",
            "Basophils"
        ],
        "answer": "Neutrophils",
        "difficulty": "easy",
        "topic": "White Blood Cells",
        "explanation": "Neutrophils are the primary responders to acute bacterial infections, performing phagocytosis."
    },
    {
        "id": 482,
        "question": "Which leukemia is associated with the Philadelphia chromosome?",
        "options": [
            "Acute lymphoblastic leukemia",
            "Chronic myeloid leukemia",
            "Acute myeloid leukemia",
            "Chronic lymphocytic leukemia"
        ],
        "answer": "Chronic myeloid leukemia",
        "difficulty": "hard",
        "topic": "Leukaemias and Lymphomas",
        "explanation": "Chronic myeloid leukemia is characterized by the Philadelphia chromosome, a t(9;22) translocation producing the BCR-ABL fusion gene."
    },
    {
        "id": 483,
        "question": "What is the primary role of vascular spasm in hemostasis?",
        "options": [
            "Form a fibrin clot",
            "Reduce blood flow to the injury",
            "Stimulate platelet production",
            "Dissolve clots"
        ],
        "answer": "Reduce blood flow to the injury",
        "difficulty": "medium",
        "topic": "Platelets and Hemostasis",
        "explanation": "Vascular spasm constricts blood vessels at the injury site, reducing blood flow to minimize bleeding."
    },
    {
        "id": 484,
        "question": "Which condition is associated with a prolonged bleeding time?",
        "options": [
            "Hemophilia A",
            "Von Willebrand disease",
            "Factor IX deficiency",
            "Disseminated intravascular coagulation"
        ],
        "answer": "Von Willebrand disease",
        "difficulty": "hard",
        "topic": "Coagulation and Bleeding Disorders",
        "explanation": "Von Willebrand disease prolongs bleeding time due to impaired platelet adhesion from deficient von Willebrand factor."
    },
    {
        "id": 485,
        "question": "What is the primary cause of transfusion-associated graft-versus-host disease?",
        "options": [
            "ABO incompatibility",
            "Donor lymphocyte attack",
            "Iron overload",
            "Cytokine release"
        ],
        "answer": "Donor lymphocyte attack",
        "difficulty": "hard",
        "topic": "Blood Groups and Transfusion Medicine",
        "explanation": "Transfusion-associated graft-versus-host disease occurs when donor lymphocytes attack recipient tissues in immunocompromised patients."
    },
    {
        "id": 486,
        "question": "Which laboratory technique is used to assess hemoglobin levels?",
        "options": [
            "Flow cytometry",
            "Hemoglobin estimation",
            "Peripheral blood smear",
            "ESR"
        ],
        "answer": "Hemoglobin estimation",
        "difficulty": "easy",
        "topic": "Laboratory Techniques",
        "explanation": "Hemoglobin estimation measures hemoglobin concentration in blood, critical for diagnosing anemias."
    },
    {
        "id": 487,
        "question": "Which infection is associated with atypical lymphocytes in blood smears?",
        "options": [
            "Malaria",
            "Infectious mononucleosis",
            "Leishmaniasis",
            "Trypanosomiasis"
        ],
        "answer": "Infectious mononucleosis",
        "difficulty": "medium",
        "topic": "Infections Affecting Blood",
        "explanation": "Infectious mononucleosis, caused by Epstein-Barr virus, is characterized by atypical lymphocytes (reactive T-cells) on blood smear."
    },
    {
        "id": 488,
        "question": "Which condition is associated with bone marrow replacement with fibrous tissue?",
        "options": [
            "Polycythemia vera",
            "Myelofibrosis",
            "Aplastic anemia",
            "Sickle cell disease"
        ],
        "answer": "Myelofibrosis",
        "difficulty": "hard",
        "topic": "Myeloproliferative Disorders",
        "explanation": "Myelofibrosis involves bone marrow replacement with fibrous tissue, leading to ineffective hematopoiesis and splenomegaly."
    },
    {
        "id": 489,
        "question": "Which hematologic condition is associated with iron overload in children?",
        "options": [
            "Hemophilia",
            "Thalassemia major",
            "Sickle cell disease",
            "Aplastic anemia"
        ],
        "answer": "Thalassemia major",
        "difficulty": "medium",
        "topic": "Pediatric Haematology",
        "explanation": "Thalassemia major causes iron overload in children due to frequent blood transfusions."
    },
    {
        "id": 490,
        "question": "What is the primary role of gene therapy in sickle cell disease treatment?",
        "options": [
            "Increase platelet production",
            "Correct HBB gene mutations",
            "Enhance immune responses",
            "Monitor clotting factors"
        ],
        "answer": "Correct HBB gene mutations",
        "difficulty": "hard",
        "topic": "Recent Advances",
        "explanation": "Gene therapy corrects mutations in the HBB gene, enabling normal hemoglobin production in sickle cell disease."
    },
    {
        "id": 491,
        "question": "Which type of anemia is associated with a low mean corpuscular hemoglobin (MCH)?",
        "options": [
            "Megaloblastic anemia",
            "Iron deficiency anemia",
            "Sickle cell anemia",
            "Aplastic anemia"
        ],
        "answer": "Iron deficiency anemia",
        "difficulty": "medium",
        "topic": "Anaemias",
        "explanation": "Iron deficiency anemia causes a low MCH due to reduced hemoglobin content in red blood cells."
    },
    {
        "id": 492,
        "question": "Which white blood cell type is elevated in parasitic infections?",
        "options": [
            "Neutrophils",
            "Lymphocytes",
            "Eosinophils",
            "Monocytes"
        ],
        "answer": "Eosinophils",
        "difficulty": "medium",
        "topic": "White Blood Cells",
        "explanation": "Eosinophils are elevated in parasitic infections, releasing toxic proteins to combat parasites."
    },
    {
        "id": 493,
        "question": "Which lymphoma is associated with painless lymphadenopathy?",
        "options": [
            "Chronic lymphocytic leukemia",
            "Hodgkin lymphoma",
            "Acute myeloid leukemia",
            "Myelodysplastic syndrome"
        ],
        "answer": "Hodgkin lymphoma",
        "difficulty": "medium",
        "topic": "Leukaemias and Lymphomas",
        "explanation": "Hodgkin lymphoma often presents with painless lymphadenopathy, particularly in cervical or supraclavicular nodes."
    },
    {
        "id": 494,
        "question": "What is the primary role of thrombin in hemostasis?",
        "options": [
            "Stimulate platelet production",
            "Convert fibrinogen to fibrin",
            "Reduce blood flow",
            "Dissolve clots"
        ],
        "answer": "Convert fibrinogen to fibrin",
        "difficulty": "medium",
        "topic": "Platelets and Hemostasis",
        "explanation": "Thrombin converts fibrinogen to fibrin, forming a stable clot in the coagulation cascade."
    },
    {
        "id": 495,
        "question": "Which condition is associated with a high INR in bleeding disorders?",
        "options": [
            "Hemophilia A",
            "Warfarin therapy",
            "Von Willebrand disease",
            "Thrombocytopenia"
        ],
        "answer": "Warfarin therapy",
        "difficulty": "medium",
        "topic": "Coagulation and Bleeding Disorders",
        "explanation": "Warfarin therapy increases INR by inhibiting vitamin K-dependent clotting factors, prolonging prothrombin time."
    },
    {
        "id": 496,
        "question": "What is the primary cause of iron overload in transfusion-dependent patients?",
        "options": [
            "ABO incompatibility",
            "Repeated blood transfusions",
            "Cytokine release",
            "Donor lymphocyte attack"
        ],
        "answer": "Repeated blood transfusions",
        "difficulty": "medium",
        "topic": "Blood Groups and Transfusion Medicine",
        "explanation": "Repeated blood transfusions, as in thalassemia, cause iron overload due to excessive iron accumulation."
    },
    {
        "id": 497,
        "question": "Which laboratory technique is used to assess inflammation?",
        "options": [
            "Reticulocyte count",
            "Erythrocyte sedimentation rate (ESR)",
            "Flow cytometry",
            "D-dimer"
        ],
        "answer": "Erythrocyte sedimentation rate (ESR)",
        "difficulty": "medium",
        "topic": "Laboratory Techniques",
        "explanation": "ESR measures the rate at which red blood cells settle, elevated in inflammatory conditions."
    },
    {
        "id": 498,
        "question": "Which infection is associated with pancytopenia in severe cases?",
        "options": [
            "Malaria",
            "Sepsis",
            "Trypanosomiasis",
            "Infectious mononucleosis"
        ],
        "answer": "Sepsis",
        "difficulty": "hard",
        "topic": "Infections Affecting Blood",
        "explanation": "Severe sepsis can cause pancytopenia due to bone marrow suppression and increased cell consumption."
    },
    {
        "id": 499,
        "question": "Which condition is associated with a high erythrocyte sedimentation rate (ESR)?",
        "options": [
            "Iron deficiency anemia",
            "Multiple myeloma",
            "Sickle cell disease",
            "Thalassemia"
        ],
        "answer": "Multiple myeloma",
        "difficulty": "medium",
        "topic": "Hematologic Malignancies",
        "explanation": "Multiple myeloma increases ESR due to elevated plasma proteins, causing red blood cells to settle faster."
    },
    {
        "id": 500,
        "question": "Which hematologic condition is associated with stroke risk in children?",
        "options": [
            "Hemophilia",
            "Sickle cell disease",
            "Thalassemia",
            "Aplastic anemia"
        ],
        "answer": "Sickle cell disease",
        "difficulty": "medium",
        "topic": "Pediatric Haematology",
        "explanation": "Sickle cell disease increases stroke risk in children due to vaso-occlusion in cerebral blood vessels."
    },
    {
        "id": 501,
        "question": "What is the primary role of a hematologist in patient care?",
        "options": [
            "Diagnosing skin disorders",
            "Managing blood and bone marrow diseases",
            "Treating neurological conditions",
            "Performing cardiac surgeries"
        ],
        "answer": "Managing blood and bone marrow diseases",
        "difficulty": "easy",
        "topic": "Introduction to Haematology",
        "explanation": "Hematologists specialize in diagnosing and treating diseases of the blood and bone marrow, such as leukemias and anemias."
    },
    {
        "id": 502,
        "question": "Which milestone in haematology enabled safe blood transfusions?",
        "options": [
            "Discovery of penicillin",
            "Identification of blood groups",
            "Invention of MRI",
            "Development of chemotherapy"
        ],
        "answer": "Identification of blood groups",
        "difficulty": "medium",
        "topic": "Introduction to Haematology",
        "explanation": "The identification of the ABO blood group system by Karl Landsteiner in 1901 enabled safe blood transfusions by matching donor and recipient types."
    },
    {
        "id": 503,
        "question": "Which plasma protein transports iron in the blood?",
        "options": [
            "Albumin",
            "Fibrinogen",
            "Transferrin",
            "Immunoglobulins"
        ],
        "answer": "Transferrin",
        "difficulty": "medium",
        "topic": "Composition and Functions of Blood",
        "explanation": "Transferrin is a plasma protein that binds and transports iron in the bloodstream, delivering it to tissues for hemoglobin synthesis."
    },
    {
        "id": 504,
        "question": "What is the primary function of white blood cells in blood?",
        "options": [
            "Oxygen transport",
            "Immune defense",
            "Clot formation",
            "Nutrient delivery"
        ],
        "answer": "Immune defense",
        "difficulty": "easy",
        "topic": "Composition and Functions of Blood",
        "explanation": "White blood cells protect the body against infections and foreign invaders through phagocytosis, antibody production, and other immune functions."
    },
    {
        "id": 505,
        "question": "Which transcription factor is critical for hematopoietic stem cell maintenance?",
        "options": [
            "GATA-1",
            "RUNX1",
            "SCL/TAL1",
            "PU.1"
        ],
        "answer": "RUNX1",
        "difficulty": "hard",
        "topic": "Haemopoiesis",
        "explanation": "RUNX1 is a key transcription factor required for the maintenance and differentiation of hematopoietic stem cells in the bone marrow."
    },
    {
        "id": 506,
        "question": "Which organ supports hematopoiesis in the fetus during the second trimester?",
        "options": [
            "Yolk sac",
            "Bone marrow",
            "Spleen",
            "Liver"
        ],
        "answer": "Liver",
        "difficulty": "medium",
        "topic": "Haemopoiesis",
        "explanation": "The liver is the primary site of hematopoiesis in the fetus during the second trimester, before bone marrow takes over."
    },
    {
        "id": 507,
        "question": "Which enzyme in red blood cells protects against oxidative stress?",
        "options": [
            "Glucose-6-phosphate dehydrogenase",
            "Pyruvate kinase",
            "Hexokinase",
            "Lactate dehydrogenase"
        ],
        "answer": "Glucose-6-phosphate dehydrogenase",
        "difficulty": "hard",
        "topic": "Erythrocytes",
        "explanation": "Glucose-6-phosphate dehydrogenase produces NADPH, which protects red blood cells from oxidative damage by maintaining glutathione levels."
    },
    {
        "id": 508,
        "question": "What is the average lifespan of a red blood cell in circulation?",
        "options": [
            "30 days",
            "60 days",
            "90 days",
            "120 days"
        ],
        "answer": "120 days",
        "difficulty": "easy",
        "topic": "Erythrocytes",
        "explanation": "Red blood cells have an average lifespan of 120 days, after which they are removed by the spleen and liver."
    },
    {
        "id": 509,
        "question": "Which anemia is associated with folate deficiency?",
        "options": [
            "Iron deficiency anemia",
            "Sickle cell anemia",
            "Megaloblastic anemia",
            "Aplastic anemia"
        ],
        "answer": "Megaloblastic anemia",
        "difficulty": "medium",
        "topic": "Anaemias",
        "explanation": "Megaloblastic anemia is caused by folate or vitamin B12 deficiency, leading to impaired DNA synthesis and large red blood cells."
    },
    {
        "id": 510,
        "question": "What is the primary cause of hereditary elliptocytosis?",
        "options": [
            "Hemoglobin mutations",
            "Red cell membrane protein defects",
            "Enzyme deficiencies",
            "Autoimmune destruction"
        ],
        "answer": "Red cell membrane protein defects",
        "difficulty": "hard",
        "topic": "Anaemias",
        "explanation": "Hereditary elliptocytosis is caused by defects in red cell membrane proteins, such as spectrin, leading to elliptical red blood cells."
    },
    {
        "id": 511,
        "question": "Which white blood cell type is most effective against parasitic infections?",
        "options": [
            "Neutrophils",
            "Lymphocytes",
            "Eosinophils",
            "Monocytes"
        ],
        "answer": "Eosinophils",
        "difficulty": "medium",
        "topic": "White Blood Cells",
        "explanation": "Eosinophils release toxic proteins to combat parasitic infections, such as those caused by helminths."
    },
    {
        "id": 512,
        "question": "What is the primary cause of lymphocytosis in adults?",
        "options": [
            "Bacterial infections",
            "Viral infections",
            "Allergic reactions",
            "Iron deficiency"
        ],
        "answer": "Viral infections",
        "difficulty": "medium",
        "topic": "WBC Disorders",
        "explanation": "Viral infections, such as infectious mononucleosis, commonly cause lymphocytosis due to increased lymphocyte production."
    },
    {
        "id": 513,
        "question": "Which leukemia is most common in older adults?",
        "options": [
            "Acute lymphoblastic leukemia",
            "Chronic lymphocytic leukemia",
            "Acute myeloid leukemia",
            "Chronic myeloid leukemia"
        ],
        "answer": "Chronic lymphocytic leukemia",
        "difficulty": "medium",
        "topic": "Leukaemias and Lymphomas",
        "explanation": "Chronic lymphocytic leukemia is the most common leukemia in older adults, characterized by clonal B-cell proliferation."
    },
    {
        "id": 514,
        "question": "What is the primary function of thromboxane A2 in hemostasis?",
        "options": [
            "Inhibit platelet aggregation",
            "Promote platelet aggregation",
            "Dissolve fibrin clots",
            "Stabilize fibrin"
        ],
        "answer": "Promote platelet aggregation",
        "difficulty": "hard",
        "topic": "Platelets and Hemostasis",
        "explanation": "Thromboxane A2, released by activated platelets, promotes platelet aggregation and vasoconstriction to enhance hemostasis."
    },
    {
        "id": 515,
        "question": "Which clotting factor is deficient in hemophilia B?",
        "options": [
            "Factor VII",
            "Factor VIII",
            "Factor IX",
            "Factor X"
        ],
        "answer": "Factor IX",
        "difficulty": "medium",
        "topic": "Coagulation and Bleeding Disorders",
        "explanation": "Hemophilia B is caused by a deficiency in factor IX, impairing the intrinsic coagulation pathway and causing bleeding tendencies."
    },
    {
        "id": 516,
        "question": "Which blood group antigen is most commonly implicated in transfusion reactions?",
        "options": [
            "Kell antigen",
            "Duffy antigen",
            "RhD antigen",
            "MNS antigen"
        ],
        "answer": "RhD antigen",
        "difficulty": "medium",
        "topic": "Blood Groups and Transfusion Medicine",
        "explanation": "The RhD antigen is frequently implicated in transfusion reactions, particularly in Rh-negative recipients receiving Rh-positive blood."
    },
    {
        "id": 517,
        "question": "Which laboratory test assesses the intrinsic coagulation pathway?",
        "options": [
            "Prothrombin time (PT)",
            "Activated partial thromboplastin time (aPTT)",
            "Bleeding time",
            "D-dimer"
        ],
        "answer": "Activated partial thromboplastin time (aPTT)",
        "difficulty": "medium",
        "topic": "Laboratory Techniques",
        "explanation": "aPTT assesses the intrinsic coagulation pathway, evaluating factors VIII, IX, XI, and XII."
    },
    {
        "id": 518,
        "question": "Which infection is associated with Heinz bodies in red blood cells?",
        "options": [
            "Malaria",
            "Infectious mononucleosis",
            "G6PD deficiency",
            "Sepsis"
        ],
        "answer": "G6PD deficiency",
        "difficulty": "hard",
        "topic": "Infections Affecting Blood",
        "explanation": "Heinz bodies, denatured hemoglobin precipitates, are seen in G6PD deficiency, often triggered by infections or oxidative stress."
    },
    {
        "id": 519,
        "question": "Which condition is associated with extramedullary hematopoiesis in myeloproliferative disorders?",
        "options": [
            "Aplastic anemia",
            "Myelofibrosis",
            "Iron deficiency anemia",
            "Thalassemia"
        ],
        "answer": "Myelofibrosis",
        "difficulty": "hard",
        "topic": "Myeloproliferative Disorders",
        "explanation": "Myelofibrosis causes extramedullary hematopoiesis in organs like the spleen due to bone marrow fibrosis."
    },
    {
        "id": 520,
        "question": "Which hematologic condition is associated with bone deformities in children?",
        "options": [
            "Hemophilia",
            "Thalassemia major",
            "Sickle cell disease",
            "Aplastic anemia"
        ],
        "answer": "Thalassemia major",
        "difficulty": "medium",
        "topic": "Pediatric Haematology",
        "explanation": "Thalassemia major causes bone deformities due to bone marrow expansion from chronic anemia."
    },
    {
        "id": 521,
        "question": "What is the primary advantage of checkpoint inhibitors in lymphoma treatment?",
        "options": [
            "Increase red blood cell production",
            "Enhance immune response against cancer",
            "Correct clotting factor deficiencies",
            "Promote platelet aggregation"
        ],
        "answer": "Enhance immune response against cancer",
        "difficulty": "hard",
        "topic": "Recent Advances",
        "explanation": "Checkpoint inhibitors, like PD-1 inhibitors, enhance T-cell responses against lymphoma cells, improving treatment outcomes."
    },
    {
        "id": 522,
        "question": "Which plasma electrolyte is critical for blood clotting?",
        "options": [
            "Sodium",
            "Potassium",
            "Calcium",
            "Magnesium"
        ],
        "answer": "Calcium",
        "difficulty": "medium",
        "topic": "Composition and Functions of Blood",
        "explanation": "Calcium is essential for blood clotting, acting as a cofactor in the activation of several clotting factors."
    },
    {
        "id": 523,
        "question": "Which cytokine promotes megakaryocyte maturation?",
        "options": [
            "Erythropoietin",
            "Thrombopoietin",
            "Interleukin-6",
            "G-CSF"
        ],
        "answer": "Thrombopoietin",
        "difficulty": "hard",
        "topic": "Haemopoiesis",
        "explanation": "Thrombopoietin, produced by the liver and kidneys, promotes megakaryocyte maturation and platelet production."
    },
    {
        "id": 524,
        "question": "What is the primary role of mean corpuscular hemoglobin concentration (MCHC)?",
        "options": [
            "Measure red blood cell size",
            "Assess hemoglobin concentration in red cells",
            "Detect platelet function",
            "Monitor white blood cell counts"
        ],
        "answer": "Assess hemoglobin concentration in red cells",
        "difficulty": "medium",
        "topic": "Erythrocytes",
        "explanation": "MCHC measures the concentration of hemoglobin in red blood cells, aiding in diagnosing hypochromic or normochromic anemias."
    },
    {
        "id": 525,
        "question": "Which anemia is associated with a high reticulocyte count?",
        "options": [
            "Aplastic anemia",
            "Hemolytic anemia",
            "Iron deficiency anemia",
            "Megaloblastic anemia"
        ],
        "answer": "Hemolytic anemia",
        "difficulty": "medium",
        "topic": "Anaemias",
        "explanation": "Hemolytic anemia causes a high reticulocyte count as the bone marrow compensates for increased red blood cell destruction."
    },
    {
        "id": 526,
        "question": "Which white blood cell type is primarily involved in allergic reactions?",
        "options": [
            "Neutrophils",
            "Lymphocytes",
            "Basophils",
            "Monocytes"
        ],
        "answer": "Basophils",
        "difficulty": "medium",
        "topic": "White Blood Cells",
        "explanation": "Basophils release histamine and other mediators, contributing to allergic reactions and inflammation."
    },
    {
        "id": 527,
        "question": "Which lymphoma is associated with a high risk of central nervous system involvement?",
        "options": [
            "Hodgkin lymphoma",
            "Diffuse large B-cell lymphoma",
            "Chronic lymphocytic leukemia",
            "Multiple myeloma"
        ],
        "answer": "Diffuse large B-cell lymphoma",
        "difficulty": "hard",
        "topic": "Leukaemias and Lymphomas",
        "explanation": "Diffuse large B-cell lymphoma has a high risk of central nervous system involvement, requiring prophylactic treatment in some cases."
    },
    {
        "id": 528,
        "question": "What is the primary role of glycoprotein IIb/IIIa in hemostasis?",
        "options": [
            "Convert fibrinogen to fibrin",
            "Facilitate platelet aggregation",
            "Activate thrombin",
            "Dissolve clots"
        ],
        "answer": "Facilitate platelet aggregation",
        "difficulty": "hard",
        "topic": "Platelets and Hemostasis",
        "explanation": "Glycoprotein IIb/IIIa on platelet surfaces binds fibrinogen, facilitating platelet aggregation to form the platelet plug."
    },
    {
        "id": 529,
        "question": "Which test is prolonged in vitamin K deficiency?",
        "options": [
            "Activated partial thromboplastin time (aPTT)",
            "Prothrombin time (PT)",
            "Bleeding time",
            "D-dimer"
        ],
        "answer": "Prothrombin time (PT)",
        "difficulty": "medium",
        "topic": "Coagulation and Bleeding Disorders",
        "explanation": "PT is prolonged in vitamin K deficiency due to impaired synthesis of factors II, VII, IX, and X."
    },
    {
        "id": 530,
        "question": "Which blood group is considered the universal recipient?",
        "options": [
            "A positive",
            "B negative",
            "AB positive",
            "O negative"
        ],
        "answer": "AB positive",
        "difficulty": "easy",
        "topic": "Blood Groups and Transfusion Medicine",
        "explanation": "AB positive blood can receive any blood type because it has A, B, and Rh antigens, avoiding immune reactions."
    },
    {
        "id": 531,
        "question": "Which laboratory technique is used to assess bone marrow cellularity?",
        "options": [
            "Reticulocyte count",
            "Bone marrow biopsy",
            "Flow cytometry",
            "ESR"
        ],
        "answer": "Bone marrow biopsy",
        "difficulty": "medium",
        "topic": "Laboratory Techniques",
        "explanation": "Bone marrow biopsy assesses cellularity and pathology, critical for diagnosing leukemias and marrow disorders."
    },
    {
        "id": 532,
        "question": "Which infection is associated with bone marrow granulomas?",
        "options": [
            "Malaria",
            "Leishmaniasis",
            "Trypanosomiasis",
            "Sepsis"
        ],
        "answer": "Leishmaniasis",
        "difficulty": "hard",
        "topic": "Infections Affecting Blood",
        "explanation": "Leishmaniasis causes bone marrow granulomas due to macrophage infection by Leishmania parasites."
    },
    {
        "id": 533,
        "question": "Which condition is associated with a high red blood cell count in myeloproliferative disorders?",
        "options": [
            "Aplastic anemia",
            "Polycythemia vera",
            "Sickle cell disease",
            "Thalassemia"
        ],
        "answer": "Polycythemia vera",
        "difficulty": "medium",
        "topic": "Myeloproliferative Disorders",
        "explanation": "Polycythemia vera is characterized by a high red blood cell count due to JAK2-driven overproduction."
    },
    {
        "id": 534,
        "question": "Which hematologic condition is associated with painful crises in children?",
        "options": [
            "Hemophilia",
            "Sickle cell disease",
            "Thalassemia",
            "Aplastic anemia"
        ],
        "answer": "Sickle cell disease",
        "difficulty": "medium",
        "topic": "Pediatric Haematology",
        "explanation": "Sickle cell disease causes painful vaso-occlusive crises in children due to sickled red blood cells obstructing vessels."
    },
    {
        "id": 535,
        "question": "What is the primary role of CAR-T cell therapy in lymphoma treatment?",
        "options": [
            "Increase red blood cell production",
            "Target CD19 on B-cells",
            "Correct clotting factor deficiencies",
            "Promote platelet aggregation"
        ],
        "answer": "Target CD19 on B-cells",
        "difficulty": "hard",
        "topic": "Recent Advances",
        "explanation": "CAR-T cell therapy targets CD19 on malignant B-cells, effective in treating B-cell lymphomas and leukemias."
    },
    {
        "id": 536,
        "question": "Which type of anemia is associated with spherocytes on blood smear?",
        "options": [
            "Iron deficiency anemia",
            "Hereditary spherocytosis",
            "Megaloblastic anemia",
            "Aplastic anemia"
        ],
        "answer": "Hereditary spherocytosis",
        "difficulty": "hard",
        "topic": "Anaemias",
        "explanation": "Hereditary spherocytosis is characterized by spherocytes, round red blood cells with reduced membrane flexibility, leading to hemolysis."
    },
    {
        "id": 537,
        "question": "Which white blood cell type differentiates into dendritic cells?",
        "options": [
            "Neutrophils",
            "Lymphocytes",
            "Monocytes",
            "Eosinophils"
        ],
        "answer": "Monocytes",
        "difficulty": "medium",
        "topic": "White Blood Cells",
        "explanation": "Monocytes differentiate into dendritic cells, which present antigens to T-cells to initiate immune responses."
    },
    {
        "id": 538,
        "question": "Which leukemia is associated with Auer rods in myeloblasts?",
        "options": [
            "Chronic lymphocytic leukemia",
            "Acute myeloid leukemia",
            "Chronic myeloid leukemia",
            "Acute lymphoblastic leukemia"
        ],
        "answer": "Acute myeloid leukemia",
        "difficulty": "hard",
        "topic": "Leukaemias and Lymphomas",
        "explanation": "Auer rods, rod-like inclusions in myeloblasts, are a hallmark of acute myeloid leukemia, aiding in its diagnosis."
    },
    {
        "id": 539,
        "question": "What is the primary role of factor XIII in hemostasis?",
        "options": [
            "Activate thrombin",
            "Stabilize fibrin clot",
            "Stimulate platelet production",
            "Dissolve clots"
        ],
        "answer": "Stabilize fibrin clot",
        "difficulty": "hard",
        "topic": "Platelets and Hemostasis",
        "explanation": "Factor XIII cross-links fibrin, stabilizing the clot to prevent premature dissolution."
    },
    {
        "id": 540,
        "question": "Which condition is associated with a low prothrombin time (PT)?",
        "options": [
            "Vitamin K deficiency",
            "Warfarin therapy",
            "Normal coagulation",
            "Disseminated intravascular coagulation"
        ],
        "answer": "Normal coagulation",
        "difficulty": "medium",
        "topic": "Coagulation and Bleeding Disorders",
        "explanation": "A low or normal PT indicates intact extrinsic and common coagulation pathways, seen in normal coagulation."
    },
    {
        "id": 541,
        "question": "What is the primary cause of transfusion-related acute lung injury (TRALI)?",
        "options": [
            "ABO incompatibility",
            "Donor leukocyte antibodies",
            "Iron overload",
            "Cytokine release"
        ],
        "answer": "Donor leukocyte antibodies",
        "difficulty": "hard",
        "topic": "Blood Groups and Transfusion Medicine",
        "explanation": "TRALI is caused by donor leukocyte antibodies reacting with recipient leukocytes, leading to pulmonary edema."
    },
    {
        "id": 542,
        "question": "Which laboratory technique is used to detect specific enzymes in leukemia cells?",
        "options": [
            "Flow cytometry",
            "Cytochemistry",
            "Peripheral blood smear",
            "Hematocrit"
        ],
        "answer": "Cytochemistry",
        "difficulty": "hard",
        "topic": "Laboratory Techniques",
        "explanation": "Cytochemistry detects specific enzymes, like myeloperoxidase, in leukemia cells, aiding in distinguishing AML from ALL."
    },
    {
        "id": 543,
        "question": "Which infection is associated with trypomastigotes in blood smears?",
        "options": [
            "Malaria",
            "Leishmaniasis",
            "Trypanosomiasis",
            "Sepsis"
        ],
        "answer": "Trypanosomiasis",
        "difficulty": "hard",
        "topic": "Infections Affecting Blood",
        "explanation": "Trypanosomiasis is characterized by trypomastigotes, the flagellated form of Trypanosoma, in blood smears."
    },
    {
        "id": 544,
        "question": "Which condition is associated with Bence Jones proteins in urine?",
        "options": [
            "Chronic myeloid leukemia",
            "Multiple myeloma",
            "Hodgkin lymphoma",
            "Aplastic anemia"
        ],
        "answer": "Multiple myeloma",
        "difficulty": "hard",
        "topic": "Hematologic Malignancies",
        "explanation": "Bence Jones proteins, light chains of immunoglobulins, are found in the urine of multiple myeloma patients due to plasma cell overproduction."
    },
    {
        "id": 545,
        "question": "Which hematologic condition is associated with thrombocytopenia in older adults?",
        "options": [
            "Sickle cell disease",
            "Chronic lymphocytic leukemia",
            "Immune thrombocytopenia",
            "Thalassemia"
        ],
        "answer": "Immune thrombocytopenia",
        "difficulty": "medium",
        "topic": "Geriatric Haematology",
        "explanation": "Immune thrombocytopenia is common in older adults, causing low platelet counts due to autoimmune destruction."
    },
    {
        "id": 546,
        "question": "What is the primary role of tyrosine kinase inhibitors in CML treatment?",
        "options": [
            "Increase red blood cell production",
            "Inhibit BCR-ABL fusion protein",
            "Correct clotting factor deficiencies",
            "Promote platelet aggregation"
        ],
        "answer": "Inhibit BCR-ABL fusion protein",
        "difficulty": "hard",
        "topic": "Recent Advances",
        "explanation": "Tyrosine kinase inhibitors, like imatinib, inhibit the BCR-ABL fusion protein in CML, controlling leukemic cell proliferation."
    },
    {
        "id": 547,
        "question": "Which type of anemia is associated with a low mean corpuscular volume (MCV)?",
        "options": [
            "Megaloblastic anemia",
            "Iron deficiency anemia",
            "Sickle cell anemia",
            "Aplastic anemia"
        ],
        "answer": "Iron deficiency anemia",
        "difficulty": "medium",
        "topic": "Anaemias",
        "explanation": "Iron deficiency anemia causes a low MCV, indicating microcytic red blood cells due to reduced hemoglobin synthesis."
    },
    {
        "id": 548,
        "question": "Which white blood cell type is primarily involved in chronic infections?",
        "options": [
            "Neutrophils",
            "Lymphocytes",
            "Monocytes",
            "Eosinophils"
        ],
        "answer": "Monocytes",
        "difficulty": "medium",
        "topic": "White Blood Cells",
        "explanation": "Monocytes differentiate into macrophages, which are critical for combating chronic infections like tuberculosis."
    },
    {
        "id": 549,
        "question": "Which leukemia is treated with all-trans retinoic acid (ATRA)?",
        "options": [
            "Chronic lymphocytic leukemia",
            "Acute promyelocytic leukemia",
            "Chronic myeloid leukemia",
            "Acute lymphoblastic leukemia"
        ],
        "answer": "Acute promyelocytic leukemia",
        "difficulty": "hard",
        "topic": "Leukaemias and Lymphomas",
        "explanation": "Acute promyelocytic leukemia, a subtype of AML, is treated with ATRA, which induces differentiation of promyelocytes."
    },
    {
        "id": 550,
        "question": "What is the primary role of tissue factor in hemostasis?",
        "options": [
            "Stimulate platelet production",
            "Initiate extrinsic coagulation pathway",
            "Dissolve clots",
            "Stabilize fibrin"
        ],
        "answer": "Initiate extrinsic coagulation pathway",
        "difficulty": "hard",
        "topic": "Platelets and Hemostasis",
        "explanation": "Tissue factor, exposed at injury sites, initiates the extrinsic coagulation pathway by activating factor VII."
    },
    {
        "id": 551,
        "question": "Which condition is associated with a high D-dimer level in bleeding disorders?",
        "options": [
            "Hemophilia A",
            "Disseminated intravascular coagulation",
            "Von Willebrand disease",
            "Thrombocytopenia"
        ],
        "answer": "Disseminated intravascular coagulation",
        "difficulty": "medium",
        "topic": "Coagulation and Bleeding Disorders",
        "explanation": "DIC causes elevated D-dimer levels due to fibrin degradation from widespread clotting and fibrinolysis."
    },
    {
        "id": 552,
        "question": "What is the primary cause of febrile non-hemolytic transfusion reactions?",
        "options": [
            "ABO incompatibility",
            "Cytokines in stored blood",
            "Iron overload",
            "Donor lymphocyte attack"
        ],
        "answer": "Cytokines in stored blood",
        "difficulty": "hard",
        "topic": "Blood Groups and Transfusion Medicine",
        "explanation": "Febrile non-hemolytic transfusion reactions are caused by cytokines accumulated in stored blood, triggering fever and chills."
    },
    {
        "id": 553,
        "question": "Which laboratory technique is used to measure red blood cell volume?",
        "options": [
            "Flow cytometry",
            "Hematocrit",
            "Peripheral blood smear",
            "D-dimer"
        ],
        "answer": "Hematocrit",
        "difficulty": "medium",
        "topic": "Laboratory Techniques",
        "explanation": "Hematocrit measures the proportion of red blood cells in total blood volume, indicating red cell mass."
    },
    {
        "id": 554,
        "question": "Which infection is associated with hemophagocytic syndrome in severe cases?",
        "options": [
            "Malaria",
            "Epstein-Barr virus",
            "Trypanosomiasis",
            "Leishmaniasis"
        ],
        "answer": "Epstein-Barr virus",
        "difficulty": "hard",
        "topic": "Infections Affecting Blood",
        "explanation": "Epstein-Barr virus can trigger hemophagocytic lymphohistiocytosis, a severe syndrome involving excessive macrophage activation."
    },
    {
        "id": 555,
        "question": "Which condition is associated with a low platelet count in myeloproliferative disorders?",
        "options": [
            "Polycythemia vera",
            "Myelofibrosis",
            "Essential thrombocythemia",
            "Chronic myeloid leukemia"
        ],
        "answer": "Myelofibrosis",
        "difficulty": "hard",
        "topic": "Myeloproliferative Disorders",
        "explanation": "Myelofibrosis can cause thrombocytopenia due to bone marrow fibrosis and ineffective hematopoiesis."
    },
    {
        "id": 556,
        "question": "Which hematologic condition is associated with gallstones in children?",
        "options": [
            "Hemophilia",
            "Sickle cell disease",
            "Thalassemia",
            "Aplastic anemia"
        ],
        "answer": "Sickle cell disease",
        "difficulty": "medium",
        "topic": "Pediatric Haematology",
        "explanation": "Sickle cell disease causes gallstones due to chronic hemolysis and increased bilirubin production."
    },
    {
        "id": 557,
        "question": "What is the primary role of gene therapy in beta-thalassemia treatment?",
        "options": [
            "Increase platelet production",
            "Correct beta-globin gene defects",
            "Enhance immune responses",
            "Monitor clotting factors"
        ],
        "answer": "Correct beta-globin gene defects",
        "difficulty": "hard",
        "topic": "Recent Advances",
        "explanation": "Gene therapy corrects beta-globin gene defects in beta-thalassemia, reducing transfusion dependence."
    },
    {
        "id": 558,
        "question": "Which type of anemia is associated with a low reticulocyte count?",
        "options": [
            "Hemolytic anemia",
            "Iron deficiency anemia",
            "Sickle cell anemia",
            "Thalassemia"
        ],
        "answer": "Iron deficiency anemia",
        "difficulty": "medium",
        "topic": "Anaemias",
        "explanation": "Iron deficiency anemia causes a low reticulocyte count due to impaired hemoglobin synthesis and reduced red cell production."
    },
    {
        "id": 559,
        "question": "Which white blood cell type is primarily involved in humoral immunity?",
        "options": [
            "Neutrophils",
            "B lymphocytes",
            "T lymphocytes",
            "Monocytes"
        ],
        "answer": "B lymphocytes",
        "difficulty": "medium",
        "topic": "White Blood Cells",
        "explanation": "B lymphocytes produce antibodies, mediating humoral immunity against extracellular pathogens."
    },
    {
        "id": 560,
        "question": "Which leukemia is associated with a high white blood cell count at diagnosis?",
        "options": [
            "Chronic lymphocytic leukemia",
            "Acute lymphoblastic leukemia",
            "Chronic myeloid leukemia",
            "Myelodysplastic syndrome"
        ],
        "answer": "Chronic myeloid leukemia",
        "difficulty": "medium",
        "topic": "Leukaemias and Lymphomas",
        "explanation": "Chronic myeloid leukemia often presents with a high white blood cell count due to uncontrolled myeloid cell proliferation."
    },
    {
        "id": 561,
        "question": "What is the primary role of platelets in clot retraction?",
        "options": [
            "Dissolve clots",
            "Compact the fibrin clot",
            "Stimulate thrombin",
            "Initiate coagulation"
        ],
        "answer": "Compact the fibrin clot",
        "difficulty": "hard",
        "topic": "Platelets and Hemostasis",
        "explanation": "Platelets mediate clot retraction by contracting, compacting the fibrin clot to aid wound closure."
    },
    {
        "id": 562,
        "question": "Which condition is associated with a low hemoglobin in bleeding disorders?",
        "options": [
            "Polycythemia vera",
            "Chronic blood loss",
            "Sickle cell disease",
            "Thalassemia"
        ],
        "answer": "Chronic blood loss",
        "difficulty": "medium",
        "topic": "Coagulation and Bleeding Disorders",
        "explanation": "Chronic blood loss, such as from gastrointestinal bleeding, causes low hemoglobin due to ongoing red blood cell loss."
    },
    {
        "id": 563,
        "question": "What is the primary cause of transfusion-associated circulatory overload (TACO)?",
        "options": [
            "ABO incompatibility",
            "Rapid transfusion volume",
            "Cytokine release",
            "Donor lymphocyte attack"
        ],
        "answer": "Rapid transfusion volume",
        "difficulty": "hard",
        "topic": "Blood Groups and Transfusion Medicine",
        "explanation": "TACO occurs when rapid transfusion overwhelms the cardiovascular system, leading to pulmonary edema."
    },
    {
        "id": 564,
        "question": "Which laboratory technique is used to assess red blood cell morphology?",
        "options": [
            "Flow cytometry",
            "Peripheral blood smear",
            "Hematocrit",
            "D-dimer"
        ],
        "answer": "Peripheral blood smear",
        "difficulty": "medium",
        "topic": "Laboratory Techniques",
        "explanation": "Peripheral blood smear allows visualization of red blood cell morphology, aiding in diagnosing anemias and other disorders."
    },
    {
        "id": 565,
        "question": "Which infection is associated with bone marrow suppression in HIV patients?",
        "options": [
            "Malaria",
            "Cytomegalovirus",
            "Trypanosomiasis",
            "Leishmaniasis"
        ],
        "answer": "Cytomegalovirus",
        "difficulty": "hard",
        "topic": "Infections Affecting Blood",
        "explanation": "Cytomegalovirus can cause bone marrow suppression in HIV patients, leading to cytopenias, particularly anemia."
    },
    {
        "id": 566,
        "question": "Which condition is associated with a high reticulocyte count in myeloproliferative disorders?",
        "options": [
            "Aplastic anemia",
            "Polycythemia vera",
            "Iron deficiency anemia",
            "Thalassemia"
        ],
        "answer": "Polycythemia vera",
        "difficulty": "hard",
        "topic": "Myeloproliferative Disorders",
        "explanation": "Polycythemia vera causes a high reticulocyte count due to increased red blood cell production driven by JAK2 mutations."
    },
    {
        "id": 567,
        "question": "Which hematologic condition is associated with joint bleeding in children?",
        "options": [
            "Sickle cell disease",
            "Hemophilia",
            "Thalassemia",
            "Aplastic anemia"
        ],
        "answer": "Hemophilia",
        "difficulty": "medium",
        "topic": "Pediatric Haematology",
        "explanation": "Hemophilia causes joint bleeding (hemarthrosis) in children due to clotting factor deficiencies."
    },
    {
        "id": 568,
        "question": "What is the primary advantage of biologics in leukemia treatment?",
        "options": [
            "Increase red blood cell production",
            "Target specific molecular pathways",
            "Correct clotting factor deficiencies",
            "Enhance immune responses"
        ],
        "answer": "Target specific molecular pathways",
        "difficulty": "hard",
        "topic": "Recent Advances",
        "explanation": "Biologics, like monoclonal antibodies, target specific molecular pathways in leukemia cells, improving treatment precision."
    },
    {
        "id": 569,
        "question": "Which type of anemia is associated with Howell-Jolly bodies on blood smear?",
        "options": [
            "Iron deficiency anemia",
            "Sickle cell anemia",
            "Megaloblastic anemia",
            "Aplastic anemia"
        ],
        "answer": "Sickle cell anemia",
        "difficulty": "hard",
        "topic": "Anaemias",
        "explanation": "Howell-Jolly bodies, nuclear remnants in red blood cells, are seen in sickle cell anemia due to functional asplenia."
    },
    {
        "id": 570,
        "question": "Which white blood cell type is primarily involved in acute bacterial infections?",
        "options": [
            "Lymphocytes",
            "Neutrophils",
            "Eosinophils",
            "Basophils"
        ],
        "answer": "Neutrophils",
        "difficulty": "easy",
        "topic": "White Blood Cells",
        "explanation": "Neutrophils are the primary responders to acute bacterial infections, performing phagocytosis."
    },
    {
        "id": 571,
        "question": "Which leukemia is associated with the Philadelphia chromosome?",
        "options": [
            "Acute lymphoblastic leukemia",
            "Chronic myeloid leukemia",
            "Acute myeloid leukemia",
            "Chronic lymphocytic leukemia"
        ],
        "answer": "Chronic myeloid leukemia",
        "difficulty": "hard",
        "topic": "Leukaemias and Lymphomas",
        "explanation": "Chronic myeloid leukemia is characterized by the Philadelphia chromosome, a t(9;22) translocation producing the BCR-ABL fusion gene."
    },
    {
        "id": 572,
        "question": "What is the primary role of vascular spasm in hemostasis?",
        "options": [
            "Form a fibrin clot",
            "Reduce blood flow to the injury",
            "Stimulate platelet production",
            "Dissolve clots"
        ],
        "answer": "Reduce blood flow to the injury",
        "difficulty": "medium",
        "topic": "Platelets and Hemostasis",
        "explanation": "Vascular spasm constricts blood vessels at the injury site, reducing blood flow to minimize bleeding."
    },
    {
        "id": 573,
        "question": "Which condition is associated with a prolonged bleeding time?",
        "options": [
            "Hemophilia A",
            "Von Willebrand disease",
            "Factor IX deficiency",
            "Disseminated intravascular coagulation"
        ],
        "answer": "Von Willebrand disease",
        "difficulty": "hard",
        "topic": "Coagulation and Bleeding Disorders",
        "explanation": "Von Willebrand disease prolongs bleeding time due to impaired platelet adhesion from deficient von Willebrand factor."
    },
    {
        "id": 574,
        "question": "What is the primary cause of transfusion-associated graft-versus-host disease?",
        "options": [
            "ABO incompatibility",
            "Donor lymphocyte attack",
            "Iron overload",
            "Cytokine release"
        ],
        "answer": "Donor lymphocyte attack",
        "difficulty": "hard",
        "topic": "Blood Groups and Transfusion Medicine",
        "explanation": "Transfusion-associated graft-versus-host disease occurs when donor lymphocytes attack recipient tissues in immunocompromised patients."
    },
    {
        "id": 575,
        "question": "Which laboratory technique is used to assess hemoglobin levels?",
        "options": [
            "Flow cytometry",
            "Hemoglobin estimation",
            "Peripheral blood smear",
            "ESR"
        ],
        "answer": "Hemoglobin estimation",
        "difficulty": "easy",
        "topic": "Laboratory Techniques",
        "explanation": "Hemoglobin estimation measures hemoglobin concentration in blood, critical for diagnosing anemias."
    },
    {
        "id": 576,
        "question": "Which infection is associated with atypical lymphocytes in blood smears?",
        "options": [
            "Malaria",
            "Infectious mononucleosis",
            "Leishmaniasis",
            "Trypanosomiasis"
        ],
        "answer": "Infectious mononucleosis",
        "difficulty": "medium",
        "topic": "Infections Affecting Blood",
        "explanation": "Infectious mononucleosis, caused by Epstein-Barr virus, is characterized by atypical lymphocytes (reactive T-cells) on blood smear."
    },
    {
        "id": 577,
        "question": "Which condition is associated with hypercalcemia in hematologic malignancies?",
        "options": [
            "Chronic myeloid leukemia",
            "Multiple myeloma",
            "Aplastic anemia",
            "Sickle cell disease"
        ],
        "answer": "Multiple myeloma",
        "difficulty": "hard",
        "topic": "Hematologic Malignancies",
        "explanation": "Multiple myeloma causes hypercalcemia due to bone destruction from lytic lesions."
    },
    {
        "id": 578,
        "question": "Which hematologic condition is associated with renal failure in adults?",
        "options": [
            "Sickle cell disease",
            "Multiple myeloma",
            "Thalassemia",
            "Aplastic anemia"
        ],
        "answer": "Multiple myeloma",
        "difficulty": "hard",
        "topic": "Hematologic Malignancies",
        "explanation": "Multiple myeloma causes renal failure due to light chain deposition and hypercalcemia."
    },
    {
        "id": 579,
        "question": "What is the primary role of monoclonal antibodies in leukemia treatment?",
        "options": [
            "Increase red blood cell production",
            "Target specific antigens",
            "Correct clotting factor deficiencies",
            "Enhance immune responses"
        ],
        "answer": "Target specific antigens",
        "difficulty": "hard",
        "topic": "Recent Advances",
        "explanation": "Monoclonal antibodies target specific antigens on leukemia cells, improving treatment specificity and efficacy."
    },
    {
        "id": 580,
        "question": "Which type of anemia is associated with a high lactate dehydrogenase (LDH)?",
        "options": [
            "Iron deficiency anemia",
            "Hemolytic anemia",
            "Megaloblastic anemia",
            "Aplastic anemia"
        ],
        "answer": "Hemolytic anemia",
        "difficulty": "medium",
        "topic": "Anaemias",
        "explanation": "Hemolytic anemia causes elevated LDH due to red blood cell destruction and release of intracellular enzymes."
    },
    {
        "id": 581,
        "question": "Which white blood cell type is primarily involved in viral infections?",
        "options": [
            "Neutrophils",
            "Lymphocytes",
            "Eosinophils",
            "Basophils"
        ],
        "answer": "Lymphocytes",
        "difficulty": "medium",
        "topic": "White Blood Cells",
        "explanation": "Lymphocytes, particularly T-cells, are key in combating viral infections through cell-mediated immunity."
    },
    {
        "id": 582,
        "question": "Which leukemia is characterized by smudge cells on blood smear?",
        "options": [
            "Acute myeloid leukemia",
            "Chronic lymphocytic leukemia",
            "Acute lymphoblastic leukemia",
            "Chronic myeloid leukemia"
        ],
        "answer": "Chronic lymphocytic leukemia",
        "difficulty": "hard",
        "topic": "Leukaemias and Lymphomas",
        "explanation": "Chronic lymphocytic leukemia is characterized by smudge cells, fragile lymphocytes that rupture during smear preparation."
    },
    {
        "id": 583,
        "question": "What is the primary role of factor X in hemostasis?",
        "options": [
            "Stimulate platelet production",
            "Activate prothrombin",
            "Dissolve clots",
            "Stabilize fibrin"
        ],
        "answer": "Activate prothrombin",
        "difficulty": "hard",
        "topic": "Platelets and Hemostasis",
        "explanation": "Factor X, activated in both intrinsic and extrinsic pathways, converts prothrombin to thrombin in the common pathway."
    },
    {
        "id": 584,
        "question": "Which condition is associated with a low platelet count in bleeding disorders?",
        "options": [
            "Polycythemia vera",
            "Immune thrombocytopenia",
            "Sickle cell disease",
            "Thalassemia"
        ],
        "answer": "Immune thrombocytopenia",
        "difficulty": "medium",
        "topic": "Coagulation and Bleeding Disorders",
        "explanation": "Immune thrombocytopenia causes a low platelet count due to autoimmune destruction of platelets."
    },
    {
        "id": 585,
        "question": "What is the primary cause of delayed hemolytic transfusion reactions?",
        "options": [
            "ABO incompatibility",
            "Minor antigen incompatibility",
            "Cytokine release",
            "Iron overload"
        ],
        "answer": "Minor antigen incompatibility",
        "difficulty": "hard",
        "topic": "Blood Groups and Transfusion Medicine",
        "explanation": "Delayed hemolytic transfusion reactions occur due to minor antigen incompatibilities, causing gradual hemolysis days after transfusion."
    },
    {
        "id": 586,
        "question": "Which laboratory technique is used to detect malaria parasites?",
        "options": [
            "Flow cytometry",
            "Peripheral blood smear",
            "Reticulocyte count",
            "D-dimer"
        ],
        "answer": "Peripheral blood smear",
        "difficulty": "medium",
        "topic": "Laboratory Techniques",
        "explanation": "Peripheral blood smear is used to visualize malaria parasites, such as Plasmodium ring forms, in red blood cells."
    },
    {
        "id": 587,
        "question": "Which infection is associated with amastigotes in macrophages?",
        "options": [
            "Malaria",
            "Trypanosomiasis",
            "Leishmaniasis",
            "Sepsis"
        ],
        "answer": "Leishmaniasis",
        "difficulty": "hard",
        "topic": "Infections Affecting Blood",
        "explanation": "Leishmaniasis is characterized by amastigotes, the intracellular form of Leishmania, within macrophages."
    },
    {
        "id": 588,
        "question": "Which condition is associated with a high platelet count in myeloproliferative disorders?",
        "options": [
            "Aplastic anemia",
            "Essential thrombocythemia",
            "Sickle cell disease",
            "Thalassemia"
        ],
        "answer": "Essential thrombocythemia",
        "difficulty": "medium",
        "topic": "Myeloproliferative Disorders",
        "explanation": "Essential thrombocythemia causes a high platelet count due to clonal megakaryocyte proliferation."
    },
    {
        "id": 589,
        "question": "Which hematologic condition is associated with iron overload in children?",
        "options": [
            "Hemophilia",
            "Thalassemia major",
            "Sickle cell disease",
            "Aplastic anemia"
        ],
        "answer": "Thalassemia major",
        "difficulty": "medium",
        "topic": "Pediatric Haematology",
        "explanation": "Thalassemia major causes iron overload in children due to frequent blood transfusions."
    },
    {
        "id": 590,
        "question": "What is the primary role of CRISPR in sickle cell disease treatment?",
        "options": [
            "Increase platelet production",
            "Correct HBB gene mutations",
            "Enhance immune responses",
            "Monitor clotting factors"
        ],
        "answer": "Correct HBB gene mutations",
        "difficulty": "hard",
        "topic": "Recent Advances",
        "explanation": "CRISPR corrects mutations in the HBB gene, enabling normal hemoglobin production in sickle cell disease."
    },
    {
        "id": 591,
        "question": "Which type of anemia is associated with a low mean corpuscular hemoglobin (MCH)?",
        "options": [
            "Megaloblastic anemia",
            "Iron deficiency anemia",
            "Sickle cell anemia",
            "Aplastic anemia"
        ],
        "answer": "Iron deficiency anemia",
        "difficulty": "medium",
        "topic": "Anaemias",
        "explanation": "Iron deficiency anemia causes a low MCH due to reduced hemoglobin content in red blood cells."
    },
    {
        "id": 592,
        "question": "Which white blood cell type is elevated in parasitic infections?",
        "options": [
            "Neutrophils",
            "Lymphocytes",
            "Eosinophils",
            "Monocytes"
        ],
        "answer": "Eosinophils",
        "difficulty": "medium",
        "topic": "White Blood Cells",
        "explanation": "Eosinophils are elevated in parasitic infections, releasing toxic proteins to combat parasites."
    },
    {
        "id": 593,
        "question": "Which lymphoma is associated with painless lymphadenopathy?",
        "options": [
            "Chronic lymphocytic leukemia",
            "Hodgkin lymphoma",
            "Acute myeloid leukemia",
            "Myelodysplastic syndrome"
        ],
        "answer": "Hodgkin lymphoma",
        "difficulty": "medium",
        "topic": "Leukaemias and Lymphomas",
        "explanation": "Hodgkin lymphoma often presents with painless lymphadenopathy, particularly in cervical or supraclavicular nodes."
    },
    {
        "id": 594,
        "question": "What is the primary role of thrombin in hemostasis?",
        "options": [
            "Stimulate platelet production",
            "Convert fibrinogen to fibrin",
            "Reduce blood flow",
            "Dissolve clots"
        ],
        "answer": "Convert fibrinogen to fibrin",
        "difficulty": "medium",
        "topic": "Platelets and Hemostasis",
        "explanation": "Thrombin converts fibrinogen to fibrin, forming a stable clot in the coagulation cascade."
    },
    {
        "id": 595,
        "question": "Which condition is associated with a high INR in bleeding disorders?",
        "options": [
            "Hemophilia A",
            "Warfarin therapy",
            "Von Willebrand disease",
            "Thrombocytopenia"
        ],
        "answer": "Warfarin therapy",
        "difficulty": "medium",
        "topic": "Coagulation and Bleeding Disorders",
        "explanation": "Warfarin therapy increases INR by inhibiting vitamin K-dependent clotting factors, prolonging prothrombin time."
    },
    {
        "id": 596,
        "question": "What is the primary cause of iron overload in transfusion-dependent patients?",
        "options": [
            "ABO incompatibility",
            "Repeated blood transfusions",
            "Cytokine release",
            "Donor lymphocyte attack"
        ],
        "answer": "Repeated blood transfusions",
        "difficulty": "medium",
        "topic": "Blood Groups and Transfusion Medicine",
        "explanation": "Repeated blood transfusions, as in thalassemia, cause iron overload due to excessive iron accumulation."
    },
    {
        "id": 597,
        "question": "Which laboratory technique is used to assess inflammation?",
        "options": [
            "Reticulocyte count",
            "Erythrocyte sedimentation rate (ESR)",
            "Flow cytometry",
            "D-dimer"
        ],
        "answer": "Erythrocyte sedimentation rate (ESR)",
        "difficulty": "medium",
        "topic": "Laboratory Techniques",
        "explanation": "ESR measures the rate at which red blood cells settle, elevated in inflammatory conditions."
    },
    {
        "id": 598,
        "question": "Which infection is associated with pancytopenia in severe cases?",
        "options": [
            "Malaria",
            "Sepsis",
            "Trypanosomiasis",
            "Infectious mononucleosis"
        ],
        "answer": "Sepsis",
        "difficulty": "hard",
        "topic": "Infections Affecting Blood",
        "explanation": "Severe sepsis can cause pancytopenia due to bone marrow suppression and increased cell consumption."
    },
    {
        "id": 599,
        "question": "Which condition is associated with a high erythrocyte sedimentation rate (ESR)?",
        "options": [
            "Iron deficiency anemia",
            "Multiple myeloma",
            "Sickle cell disease",
            "Thalassemia"
        ],
        "answer": "Multiple myeloma",
        "difficulty": "medium",
        "topic": "Hematologic Malignancies",
        "explanation": "Multiple myeloma increases ESR due to elevated plasma proteins, causing red blood cells to settle faster."
    },
    {
        "id": 600,
        "question": "Which hematologic condition is associated with stroke risk in children?",
        "options": [
            "Hemophilia",
            "Sickle cell disease",
            "Thalassemia",
            "Aplastic anemia"
        ],
        "answer": "Sickle cell disease",
        "difficulty": "medium",
        "topic": "Pediatric Haematology",
        "explanation": "Sickle cell disease increases stroke risk in children due to vaso-occlusion in cerebral blood vessels."
    },
    {
        "id": 601,
        "question": "What is the primary role of haematology in clinical medicine?",
        "options": [
            "Studying heart diseases",
            "Diagnosing and treating blood disorders",
            "Managing kidney function",
            "Treating neurological disorders"
        ],
        "answer": "Diagnosing and treating blood disorders",
        "difficulty": "easy",
        "topic": "Introduction to Haematology",
        "explanation": "Haematology focuses on diagnosing and treating disorders of blood and blood-forming tissues, such as anemia, leukemia, and clotting disorders."
    },
    {
        "id": 602,
        "question": "Which historical figure is credited with discovering the ABO blood group system?",
        "options": [
            "William Harvey",
            "Karl Landsteiner",
            "Robert Koch",
            "Louis Pasteur"
        ],
        "answer": "Karl Landsteiner",
        "difficulty": "medium",
        "topic": "Introduction to Haematology",
        "explanation": "Karl Landsteiner discovered the ABO blood group system in 1901, revolutionizing blood transfusion safety."
    },
    {
        "id": 603,
        "question": "Which plasma protein is essential for maintaining osmotic pressure?",
        "options": [
            "Fibrinogen",
            "Albumin",
            "Globulins",
            "Prothrombin"
        ],
        "answer": "Albumin",
        "difficulty": "medium",
        "topic": "Composition and Functions of Blood",
        "explanation": "Albumin maintains osmotic pressure in plasma, preventing fluid leakage into tissues and supporting blood volume."
    },
    {
        "id": 604,
        "question": "What is the primary role of platelets in blood?",
        "options": [
            "Oxygen transport",
            "Immune defense",
            "Clot formation",
            "Nutrient transport"
        ],
        "answer": "Clot formation",
        "difficulty": "easy",
        "topic": "Composition and Functions of Blood",
        "explanation": "Platelets are critical for hemostasis, forming clots to stop bleeding at sites of vascular injury."
    },
    {
        "id": 605,
        "question": "Which growth factor stimulates neutrophil production?",
        "options": [
            "Erythropoietin",
            "Thrombopoietin",
            "Granulocyte colony-stimulating factor",
            "Interleukin-3"
        ],
        "answer": "Granulocyte colony-stimulating factor",
        "difficulty": "hard",
        "topic": "Haemopoiesis",
        "explanation": "Granulocyte colony-stimulating factor (G-CSF) stimulates the production and differentiation of neutrophils in the bone marrow."
    },
    {
        "id": 606,
        "question": "Where does hematopoiesis primarily occur in adults?",
        "options": [
            "Liver",
            "Spleen",
            "Bone marrow",
            "Lymph nodes"
        ],
        "answer": "Bone marrow",
        "difficulty": "easy",
        "topic": "Haemopoiesis",
        "explanation": "In adults, hematopoiesis primarily occurs in the bone marrow, particularly in the pelvis, sternum, and vertebrae."
    },
    {
        "id": 607,
        "question": "Which protein anchors hemoglobin to the red blood cell membrane?",
        "options": [
            "Spectrin",
            "Ankyrin",
            "Band 3",
            "Glycophorin"
        ],
        "answer": "Ankyrin",
        "difficulty": "hard",
        "topic": "Erythrocytes",
        "explanation": "Ankyrin links hemoglobin to the red blood cell membrane, maintaining structural integrity and flexibility."
    },
    {
        "id": 608,
        "question": "What is the primary source of energy for red blood cells?",
        "options": [
            "Fatty acids",
            "Glucose",
            "Amino acids",
            "Ketones"
        ],
        "answer": "Glucose",
        "difficulty": "medium",
        "topic": "Erythrocytes",
        "explanation": "Red blood cells rely on glucose metabolism via glycolysis for energy, as they lack mitochondria."
    },
    {
        "id": 609,
        "question": "Which anemia is caused by vitamin B12 deficiency?",
        "options": [
            "Iron deficiency anemia",
            "Sickle cell anemia",
            "Megaloblastic anemia",
            "Hemolytic anemia"
        ],
        "answer": "Megaloblastic anemia",
        "difficulty": "medium",
        "topic": "Anaemias",
        "explanation": "Megaloblastic anemia results from vitamin B12 or folate deficiency, impairing DNA synthesis and causing large red blood cells."
    },
    {
        "id": 610,
        "question": "What is the primary cause of paroxysmal nocturnal hemoglobinuria (PNH)?",
        "options": [
            "Hemoglobin mutations",
            "PIG-A gene mutation",
            "Autoimmune destruction",
            "Enzyme deficiencies"
        ],
        "answer": "PIG-A gene mutation",
        "difficulty": "hard",
        "topic": "Anaemias",
        "explanation": "PNH is caused by a PIG-A gene mutation, leading to deficient GPI-anchored proteins and complement-mediated hemolysis."
    },
    {
        "id": 611,
        "question": "Which white blood cell type is most abundant in healthy adults?",
        "options": [
            "Lymphocytes",
            "Neutrophils",
            "Eosinophils",
            "Basophils"
        ],
        "answer": "Neutrophils",
        "difficulty": "easy",
        "topic": "White Blood Cells",
        "explanation": "Neutrophils are the most abundant white blood cells, making up 50-70% of leukocytes in healthy adults."
    },
    {
        "id": 612,
        "question": "What is the primary cause of monocytosis in adults?",
        "options": [
            "Viral infections",
            "Chronic infections",
            "Allergic reactions",
            "Iron deficiency"
        ],
        "answer": "Chronic infections",
        "difficulty": "medium",
        "topic": "WBC Disorders",
        "explanation": "Monocytosis is often caused by chronic infections, such as tuberculosis, due to increased macrophage activity."
    },
    {
        "id": 613,
        "question": "Which leukemia is most common in children?",
        "options": [
            "Chronic lymphocytic leukemia",
            "Acute lymphoblastic leukemia",
            "Chronic myeloid leukemia",
            "Acute myeloid leukemia"
        ],
        "answer": "Acute lymphoblastic leukemia",
        "difficulty": "medium",
        "topic": "Leukaemias and Lymphomas",
        "explanation": "Acute lymphoblastic leukemia is the most common leukemia in children, characterized by lymphoblast proliferation."
    },
    {
        "id": 614,
        "question": "What is the primary role of ADP in platelet activation?",
        "options": [
            "Inhibit platelet aggregation",
            "Promote platelet aggregation",
            "Dissolve fibrin clots",
            "Stabilize fibrin"
        ],
        "answer": "Promote platelet aggregation",
        "difficulty": "hard",
        "topic": "Platelets and Hemostasis",
        "explanation": "ADP, released by activated platelets, binds to receptors to promote further platelet aggregation and amplify the hemostatic response."
    },
    {
        "id": 615,
        "question": "Which clotting factor is deficient in hemophilia A?",
        "options": [
            "Factor VII",
            "Factor VIII",
            "Factor IX",
            "Factor X"
        ],
        "answer": "Factor VIII",
        "difficulty": "medium",
        "topic": "Coagulation and Bleeding Disorders",
        "explanation": "Hemophilia A is caused by a deficiency in factor VIII, leading to impaired intrinsic coagulation and bleeding tendencies."
    },
    {
        "id": 616,
        "question": "Which blood group is considered the universal donor?",
        "options": [
            "A positive",
            "B negative",
            "AB positive",
            "O negative"
        ],
        "answer": "O negative",
        "difficulty": "easy",
        "topic": "Blood Groups and Transfusion Medicine",
        "explanation": "O negative blood lacks A, B, and Rh antigens, making it safe for transfusion to any recipient."
    },
    {
        "id": 617,
        "question": "Which laboratory test measures fibrin degradation products?",
        "options": [
            "Prothrombin time (PT)",
            "Activated partial thromboplastin time (aPTT)",
            "D-dimer",
            "Bleeding time"
        ],
        "answer": "D-dimer",
        "difficulty": "medium",
        "topic": "Laboratory Techniques",
        "explanation": "D-dimer measures fibrin degradation products, indicating active fibrinolysis, as seen in conditions like DIC."
    },
    {
        "id": 618,
        "question": "Which infection is associated with gametocytes in blood smears?",
        "options": [
            "Trypanosomiasis",
            "Leishmaniasis",
            "Malaria",
            "Sepsis"
        ],
        "answer": "Malaria",
        "difficulty": "hard",
        "topic": "Infections Affecting Blood",
        "explanation": "Malaria is characterized by gametocytes, the sexual stage of Plasmodium, in blood smears, enabling mosquito transmission."
    },
    {
        "id": 619,
        "question": "Which condition is associated with teardrop cells on blood smear in myeloproliferative disorders?",
        "options": [
            "Aplastic anemia",
            "Myelofibrosis",
            "Iron deficiency anemia",
            "Thalassemia"
        ],
        "answer": "Myelofibrosis",
        "difficulty": "hard",
        "topic": "Myeloproliferative Disorders",
        "explanation": "Teardrop cells are characteristic of myelofibrosis, resulting from bone marrow fibrosis and extramedullary hematopoiesis."
    },
    {
        "id": 620,
        "question": "Which hematologic condition is associated with frequent infections in children?",
        "options": [
            "Hemophilia",
            "Sickle cell disease",
            "Thalassemia",
            "Aplastic anemia"
        ],
        "answer": "Sickle cell disease",
        "difficulty": "medium",
        "topic": "Pediatric Haematology",
        "explanation": "Sickle cell disease causes frequent infections due to functional asplenia, impairing immune defense."
    },
    {
        "id": 621,
        "question": "What is the primary advantage of bispecific antibodies in leukemia treatment?",
        "options": [
            "Increase red blood cell production",
            "Engage T-cells with leukemic cells",
            "Correct clotting factor deficiencies",
            "Promote platelet aggregation"
        ],
        "answer": "Engage T-cells with leukemic cells",
        "difficulty": "hard",
        "topic": "Recent Advances",
        "explanation": "Bispecific antibodies, like blinatumomab, engage T-cells with leukemic cells, enhancing immune-mediated destruction."
    },
    {
        "id": 622,
        "question": "Which plasma component is critical for oxygen transport?",
        "options": [
            "Platelets",
            "White blood cells",
            "Hemoglobin",
            "Fibrinogen"
        ],
        "answer": "Hemoglobin",
        "difficulty": "easy",
        "topic": "Composition and Functions of Blood",
        "explanation": "Hemoglobin, found in red blood cells, binds and transports oxygen from the lungs to tissues."
    },
    {
        "id": 623,
        "question": "Which transcription factor regulates erythroid differentiation?",
        "options": [
            "GATA-1",
            "RUNX1",
            "PU.1",
            "SCL/TAL1"
        ],
        "answer": "GATA-1",
        "difficulty": "hard",
        "topic": "Haemopoiesis",
        "explanation": "GATA-1 is a key transcription factor regulating erythroid differentiation and hemoglobin synthesis."
    },
    {
        "id": 624,
        "question": "What is the primary role of mean corpuscular volume (MCV) in diagnosing anemia?",
        "options": [
            "Measure hemoglobin concentration",
            "Classify red blood cell size",
            "Assess platelet function",
            "Detect clotting disorders"
        ],
        "answer": "Classify red blood cell size",
        "difficulty": "medium",
        "topic": "Erythrocytes",
        "explanation": "MCV classifies anemias as microcytic, normocytic, or macrocytic based on red blood cell size."
    },
    {
        "id": 625,
        "question": "Which anemia is associated with sickle-shaped red blood cells?",
        "options": [
            "Iron deficiency anemia",
            "Sickle cell anemia",
            "Megaloblastic anemia",
            "Aplastic anemia"
        ],
        "answer": "Sickle cell anemia",
        "difficulty": "easy",
        "topic": "Anaemias",
        "explanation": "Sickle cell anemia is characterized by sickle-shaped red blood cells due to a hemoglobin S mutation."
    },
    {
        "id": 626,
        "question": "Which white blood cell type is primarily involved in antigen presentation?",
        "options": [
            "Neutrophils",
            "Lymphocytes",
            "Monocytes",
            "Basophils"
        ],
        "answer": "Monocytes",
        "difficulty": "medium",
        "topic": "White Blood Cells",
        "explanation": "Monocytes differentiate into dendritic cells and macrophages, which present antigens to T-cells."
    },
    {
        "id": 627,
        "question": "Which lymphoma is associated with Reed-Sternberg cells?",
        "options": [
            "Non-Hodgkin lymphoma",
            "Hodgkin lymphoma",
            "Chronic lymphocytic leukemia",
            "Multiple myeloma"
        ],
        "answer": "Hodgkin lymphoma",
        "difficulty": "medium",
        "topic": "Leukaemias and Lymphomas",
        "explanation": "Hodgkin lymphoma is characterized by Reed-Sternberg cells, large multinucleated cells in lymph node biopsies."
    },
    {
        "id": 628,
        "question": "What is the primary role of von Willebrand factor in hemostasis?",
        "options": [
            "Convert fibrinogen to fibrin",
            "Mediate platelet adhesion",
            "Activate thrombin",
            "Dissolve clots"
        ],
        "answer": "Mediate platelet adhesion",
        "difficulty": "medium",
        "topic": "Platelets and Hemostasis",
        "explanation": "Von Willebrand factor mediates platelet adhesion to damaged vessel walls, initiating the platelet plug."
    },
    {
        "id": 629,
        "question": "Which test is used to monitor warfarin therapy?",
        "options": [
            "Prothrombin time (PT)/INR",
            "Activated partial thromboplastin time (aPTT)",
            "Bleeding time",
            "D-dimer"
        ],
        "answer": "Prothrombin time (PT)/INR",
        "difficulty": "medium",
        "topic": "Coagulation and Bleeding Disorders",
        "explanation": "PT/INR monitors warfarin therapy, which inhibits vitamin K-dependent clotting factors, prolonging the extrinsic pathway."
    },
    {
        "id": 630,
        "question": "What is the primary cause of hemolytic transfusion reactions?",
        "options": [
            "Minor antigen incompatibility",
            "ABO incompatibility",
            "Cytokine release",
            "Iron overload"
        ],
        "answer": "ABO incompatibility",
        "difficulty": "medium",
        "topic": "Blood Groups and Transfusion Medicine",
        "explanation": "ABO incompatibility causes hemolytic transfusion reactions due to recipient antibodies attacking donor red blood cells."
    },
    {
        "id": 631,
        "question": "Which laboratory technique is used to identify leukemia subtypes?",
        "options": [
            "Peripheral blood smear",
            "Flow cytometry",
            "ESR",
            "Reticulocyte count"
        ],
        "answer": "Flow cytometry",
        "difficulty": "hard",
        "topic": "Laboratory Techniques",
        "explanation": "Flow cytometry identifies leukemia subtypes by detecting cell surface markers, aiding in immunophenotyping."
    },
    {
        "id": 632,
        "question": "Which infection is associated with schizonts in red blood cells?",
        "options": [
            "Trypanosomiasis",
            "Leishmaniasis",
            "Malaria",
            "Sepsis"
        ],
        "answer": "Malaria",
        "difficulty": "hard",
        "topic": "Infections Affecting Blood",
        "explanation": "Malaria is characterized by schizonts, a stage of Plasmodium, within red blood cells on blood smear."
    },
    {
        "id": 633,
        "question": "Which condition is associated with a high white blood cell count in myeloproliferative disorders?",
        "options": [
            "Aplastic anemia",
            "Chronic myeloid leukemia",
            "Thalassemia",
            "Iron deficiency anemia"
        ],
        "answer": "Chronic myeloid leukemia",
        "difficulty": "medium",
        "topic": "Myeloproliferative Disorders",
        "explanation": "Chronic myeloid leukemia causes a high white blood cell count due to uncontrolled myeloid cell proliferation."
    },
    {
        "id": 634,
        "question": "Which hematologic condition is associated with growth retardation in children?",
        "options": [
            "Hemophilia",
            "Thalassemia major",
            "Sickle cell disease",
            "Aplastic anemia"
        ],
        "answer": "Thalassemia major",
        "difficulty": "medium",
        "topic": "Pediatric Haematology",
        "explanation": "Thalassemia major causes growth retardation due to chronic anemia and iron overload."
    },
    {
        "id": 635,
        "question": "What is the primary role of targeted therapies in lymphoma treatment?",
        "options": [
            "Increase red blood cell production",
            "Inhibit specific cancer pathways",
            "Correct clotting factor deficiencies",
            "Enhance platelet function"
        ],
        "answer": "Inhibit specific cancer pathways",
        "difficulty": "hard",
        "topic": "Recent Advances",
        "explanation": "Targeted therapies inhibit specific cancer pathways, such as BTK in lymphomas, improving treatment outcomes."
    },
    {
        "id": 636,
        "question": "Which type of anemia is associated with target cells on blood smear?",
        "options": [
            "Iron deficiency anemia",
            "Thalassemia",
            "Megaloblastic anemia",
            "Aplastic anemia"
        ],
        "answer": "Thalassemia",
        "difficulty": "hard",
        "topic": "Anaemias",
        "explanation": "Target cells, with a bullseye appearance, are seen in thalassemia due to excess membrane relative to hemoglobin."
    },
    {
        "id": 637,
        "question": "Which white blood cell type is primarily involved in phagocytosis of fungi?",
        "options": [
            "Lymphocytes",
            "Neutrophils",
            "Eosinophils",
            "Basophils"
        ],
        "answer": "Neutrophils",
        "difficulty": "medium",
        "topic": "White Blood Cells",
        "explanation": "Neutrophils are the primary phagocytic cells for fungi, particularly in invasive fungal infections."
    },
    {
        "id": 638,
        "question": "Which leukemia is associated with a high risk of disseminated intravascular coagulation (DIC)?",
        "options": [
            "Chronic lymphocytic leukemia",
            "Acute promyelocytic leukemia",
            "Chronic myeloid leukemia",
            "Acute lymphoblastic leukemia"
        ],
        "answer": "Acute promyelocytic leukemia",
        "difficulty": "hard",
        "topic": "Leukaemias and Lymphomas",
        "explanation": "Acute promyelocytic leukemia has a high risk of DIC due to procoagulant substances released by promyelocytes."
    },
    {
        "id": 639,
        "question": "What is the primary role of fibrinogen in hemostasis?",
        "options": [
            "Stimulate platelet production",
            "Form a fibrin clot",
            "Reduce blood flow",
            "Dissolve clots"
        ],
        "answer": "Form a fibrin clot",
        "difficulty": "medium",
        "topic": "Platelets and Hemostasis",
        "explanation": "Fibrinogen is converted to fibrin by thrombin, forming a clot to stabilize the platelet plug."
    },
    {
        "id": 640,
        "question": "Which condition is associated with a prolonged activated partial thromboplastin time (aPTT)?",
        "options": [
            "Vitamin K deficiency",
            "Hemophilia A",
            "Von Willebrand disease",
            "Thrombocytopenia"
        ],
        "answer": "Hemophilia A",
        "difficulty": "medium",
        "topic": "Coagulation and Bleeding Disorders",
        "explanation": "Hemophilia A prolongs aPTT due to factor VIII deficiency, impairing the intrinsic coagulation pathway."
    },
    {
        "id": 641,
        "question": "What is the primary purpose of crossmatching in transfusion medicine?",
        "options": [
            "Measure hemoglobin levels",
            "Ensure donor-recipient compatibility",
            "Assess clotting factors",
            "Detect infections"
        ],
        "answer": "Ensure donor-recipient compatibility",
        "difficulty": "medium",
        "topic": "Blood Groups and Transfusion Medicine",
        "explanation": "Crossmatching tests donor red blood cells with recipient serum to ensure compatibility and prevent transfusion reactions."
    },
    {
        "id": 642,
        "question": "Which laboratory technique is used to detect chromosomal abnormalities in leukemia?",
        "options": [
            "Peripheral blood smear",
            "Karyotyping",
            "ESR",
            "Reticulocyte count"
        ],
        "answer": "Karyotyping",
        "difficulty": "hard",
        "topic": "Laboratory Techniques",
        "explanation": "Karyotyping detects chromosomal abnormalities, such as translocations, in leukemia cells, aiding in diagnosis and prognosis."
    },
    {
        "id": 643,
        "question": "Which infection is associated with intraerythrocytic inclusions called ring forms?",
        "options": [
            "Trypanosomiasis",
            "Leishmaniasis",
            "Malaria",
            "Epstein-Barr virus"
        ],
        "answer": "Malaria",
        "difficulty": "medium",
        "topic": "Infections Affecting Blood",
        "explanation": "Malaria, caused by Plasmodium, is characterized by ring forms (trophozoites) within red blood cells on blood smear."
    },
    {
        "id": 644,
        "question": "Which condition is associated with monoclonal protein in serum?",
        "options": [
            "Chronic myeloid leukemia",
            "Multiple myeloma",
            "Hodgkin lymphoma",
            "Aplastic anemia"
        ],
        "answer": "Multiple myeloma",
        "difficulty": "hard",
        "topic": "Hematologic Malignancies",
        "explanation": "Multiple myeloma is characterized by a monoclonal protein spike in serum due to excessive plasma cell production of immunoglobulins."
    },
    {
        "id": 645,
        "question": "Which hematologic condition is common in older adults and associated with anemia?",
        "options": [
            "Sickle cell disease",
            "Myelodysplastic syndrome",
            "Thalassemia",
            "Hemophilia"
        ],
        "answer": "Myelodysplastic syndrome",
        "difficulty": "medium",
        "topic": "Geriatric Haematology",
        "explanation": "Myelodysplastic syndrome is common in older adults, causing anemia due to ineffective hematopoiesis."
    },
    {
        "id": 646,
        "question": "What is the primary role of CAR-T cell therapy in leukemia treatment?",
        "options": [
            "Increase red blood cell production",
            "Target CD19 on B-cells",
            "Correct clotting factor deficiencies",
            "Enhance platelet function"
        ],
        "answer": "Target CD19 on B-cells",
        "difficulty": "hard",
        "topic": "Recent Advances",
        "explanation": "CAR-T cell therapy targets CD19 on malignant B-cells, effective in treating B-cell leukemias and lymphomas."
    },
    {
        "id": 647,
        "question": "Which type of anemia is associated with schistocytes on blood smear?",
        "options": [
            "Iron deficiency anemia",
            "Megaloblastic anemia",
            "Microangiopathic hemolytic anemia",
            "Aplastic anemia"
        ],
        "answer": "Microangiopathic hemolytic anemia",
        "difficulty": "hard",
        "topic": "Anaemias",
        "explanation": "Schistocytes, fragmented red blood cells, are seen in microangiopathic hemolytic anemia due to mechanical damage in small vessels."
    },
    {
        "id": 648,
        "question": "Which white blood cell type is primarily involved in chronic inflammation?",
        "options": [
            "Neutrophils",
            "Lymphocytes",
            "Monocytes",
            "Eosinophils"
        ],
        "answer": "Monocytes",
        "difficulty": "medium",
        "topic": "White Blood Cells",
        "explanation": "Monocytes differentiate into macrophages, which are critical in chronic inflammation, such as in tuberculosis."
    },
    {
        "id": 649,
        "question": "Which leukemia is treated with all-trans retinoic acid (ATRA)?",
        "options": [
            "Chronic lymphocytic leukemia",
            "Acute promyelocytic leukemia",
            "Chronic myeloid leukemia",
            "Acute lymphoblastic leukemia"
        ],
        "answer": "Acute promyelocytic leukemia",
        "difficulty": "hard",
        "topic": "Leukaemias and Lymphomas",
        "explanation": "Acute promyelocytic leukemia is treated with ATRA, which induces differentiation of promyelocytes, improving outcomes."
    },
    {
        "id": 650,
        "question": "What is the primary role of tissue factor in hemostasis?",
        "options": [
            "Stimulate platelet production",
            "Initiate extrinsic coagulation pathway",
            "Dissolve clots",
            "Stabilize fibrin"
        ],
        "answer": "Initiate extrinsic coagulation pathway",
        "difficulty": "hard",
        "topic": "Platelets and Hemostasis",
        "explanation": "Tissue factor, exposed at injury sites, initiates the extrinsic coagulation pathway by activating factor VII."
    },
    {
        "id": 651,
        "question": "Which condition is associated with a high D-dimer level in bleeding disorders?",
        "options": [
            "Hemophilia A",
            "Disseminated intravascular coagulation",
            "Von Willebrand disease",
            "Thrombocytopenia"
        ],
        "answer": "Disseminated intravascular coagulation",
        "difficulty": "medium",
        "topic": "Coagulation and Bleeding Disorders",
        "explanation": "DIC causes elevated D-dimer levels due to fibrin degradation from widespread clotting and fibrinolysis."
    },
    {
        "id": 652,
        "question": "What is the primary cause of transfusion-related acute lung injury (TRALI)?",
        "options": [
            "ABO incompatibility",
            "Donor leukocyte antibodies",
            "Iron overload",
            "Cytokine release"
        ],
        "answer": "Donor leukocyte antibodies",
        "difficulty": "hard",
        "topic": "Blood Groups and Transfusion Medicine",
        "explanation": "TRALI is caused by donor leukocyte antibodies reacting with recipient leukocytes, leading to pulmonary edema."
    },
    {
        "id": 653,
        "question": "Which laboratory technique is used to measure red blood cell volume?",
        "options": [
            "Flow cytometry",
            "Hematocrit",
            "Peripheral blood smear",
            "D-dimer"
        ],
        "answer": "Hematocrit",
        "difficulty": "medium",
        "topic": "Laboratory Techniques",
        "explanation": "Hematocrit measures the proportion of red blood cells in total blood volume, indicating red cell mass."
    },
    {
        "id": 654,
        "question": "Which infection is associated with hemophagocytic syndrome in severe cases?",
        "options": [
            "Malaria",
            "Epstein-Barr virus",
            "Trypanosomiasis",
            "Leishmaniasis"
        ],
        "answer": "Epstein-Barr virus",
        "difficulty": "hard",
        "topic": "Infections Affecting Blood",
        "explanation": "Epstein-Barr virus can trigger hemophagocytic lymphohistiocytosis, a severe syndrome involving excessive macrophage activation."
    },
    {
        "id": 655,
        "question": "Which condition is associated with a low red blood cell count in myeloproliferative disorders?",
        "options": [
            "Polycythemia vera",
            "Myelofibrosis",
            "Essential thrombocythemia",
            "Chronic myeloid leukemia"
        ],
        "answer": "Myelofibrosis",
        "difficulty": "hard",
        "topic": "Myeloproliferative Disorders",
        "explanation": "Myelofibrosis causes anemia due to bone marrow fibrosis and ineffective erythropoiesis."
    },
    {
        "id": 656,
        "question": "Which hematologic condition is associated with gallstones in children?",
        "options": [
            "Hemophilia",
            "Sickle cell disease",
            "Thalassemia",
            "Aplastic anemia"
        ],
        "answer": "Sickle cell disease",
        "difficulty": "medium",
        "topic": "Pediatric Haematology",
        "explanation": "Sickle cell disease causes gallstones due to chronic hemolysis and increased bilirubin production."
    },
    {
        "id": 657,
        "question": "What is the primary role of gene therapy in sickle cell disease treatment?",
        "options": [
            "Increase platelet production",
            "Correct HBB gene mutations",
            "Enhance immune responses",
            "Monitor clotting factors"
        ],
        "answer": "Correct HBB gene mutations",
        "difficulty": "hard",
        "topic": "Recent Advances",
        "explanation": "Gene therapy corrects mutations in the HBB gene, enabling normal hemoglobin production in sickle cell disease."
    },
    {
        "id": 658,
        "question": "Which type of anemia is associated with a low reticulocyte count?",
        "options": [
            "Hemolytic anemia",
            "Iron deficiency anemia",
            "Sickle cell anemia",
            "Thalassemia"
        ],
        "answer": "Iron deficiency anemia",
        "difficulty": "medium",
        "topic": "Anaemias",
        "explanation": "Iron deficiency anemia causes a low reticulocyte count due to impaired hemoglobin synthesis and reduced red cell production."
    },
    {
        "id": 659,
        "question": "Which white blood cell type is primarily involved in allergic responses?",
        "options": [
            "Neutrophils",
            "Lymphocytes",
            "Basophils",
            "Monocytes"
        ],
        "answer": "Basophils",
        "difficulty": "medium",
        "topic": "White Blood Cells",
        "explanation": "Basophils release histamine and other mediators, playing a key role in allergic responses."
    },
    {
        "id": 660,
        "question": "Which leukemia is associated with Auer rods in myeloblasts?",
        "options": [
            "Chronic lymphocytic leukemia",
            "Acute myeloid leukemia",
            "Chronic myeloid leukemia",
            "Acute lymphoblastic leukemia"
        ],
        "answer": "Acute myeloid leukemia",
        "difficulty": "hard",
        "topic": "Leukaemias and Lymphomas",
        "explanation": "Auer rods, rod-like inclusions in myeloblasts, are a hallmark of acute myeloid leukemia, aiding in its diagnosis."
    },
    {
        "id": 661,
        "question": "What is the primary role of platelets in clot retraction?",
        "options": [
            "Dissolve clots",
            "Compact the fibrin clot",
            "Stimulate thrombin",
            "Initiate coagulation"
        ],
        "answer": "Compact the fibrin clot",
        "difficulty": "hard",
        "topic": "Platelets and Hemostasis",
        "explanation": "Platelets mediate clot retraction by contracting, compacting the fibrin clot to aid wound closure."
    },
    {
        "id": 662,
        "question": "Which condition is associated with a low hemoglobin in bleeding disorders?",
        "options": [
            "Polycythemia vera",
            "Chronic blood loss",
            "Sickle cell disease",
            "Thalassemia"
        ],
        "answer": "Chronic blood loss",
        "difficulty": "medium",
        "topic": "Coagulation and Bleeding Disorders",
        "explanation": "Chronic blood loss, such as from gastrointestinal bleeding, causes low hemoglobin due to ongoing red blood cell loss."
    },
    {
        "id": 663,
        "question": "What is the primary cause of transfusion-associated circulatory overload (TACO)?",
        "options": [
            "ABO incompatibility",
            "Rapid transfusion volume",
            "Cytokine release",
            "Donor lymphocyte attack"
        ],
        "answer": "Rapid transfusion volume",
        "difficulty": "hard",
        "topic": "Blood Groups and Transfusion Medicine",
        "explanation": "TACO occurs when rapid transfusion overwhelms the cardiovascular system, leading to pulmonary edema."
    },
    {
        "id": 664,
        "question": "Which laboratory technique is used to assess red blood cell morphology?",
        "options": [
            "Flow cytometry",
            "Peripheral blood smear",
            "Hematocrit",
            "D-dimer"
        ],
        "answer": "Peripheral blood smear",
        "difficulty": "medium",
        "topic": "Laboratory Techniques",
        "explanation": "Peripheral blood smear allows visualization of red blood cell morphology, aiding in diagnosing anemias and other disorders."
    },
    {
        "id": 665,
        "question": "Which infection is associated with bone marrow suppression in severe cases?",
        "options": [
            "Malaria",
            "Cytomegalovirus",
            "Trypanosomiasis",
            "Leishmaniasis"
        ],
        "answer": "Cytomegalovirus",
        "difficulty": "hard",
        "topic": "Infections Affecting Blood",
        "explanation": "Cytomegalovirus can cause bone marrow suppression, particularly in immunocompromised patients, leading to cytopenias."
    },
    {
        "id": 666,
        "question": "Which condition is associated with a high reticulocyte count in myeloproliferative disorders?",
        "options": [
            "Aplastic anemia",
            "Polycythemia vera",
            "Iron deficiency anemia",
            "Thalassemia"
        ],
        "answer": "Polycythemia vera",
        "difficulty": "hard",
        "topic": "Myeloproliferative Disorders",
        "explanation": "Polycythemia vera causes a high reticulocyte count due to increased red blood cell production driven by JAK2 mutations."
    },
    {
        "id": 667,
        "question": "Which hematologic condition is associated with joint bleeding in children?",
        "options": [
            "Sickle cell disease",
            "Hemophilia",
            "Thalassemia",
            "Aplastic anemia"
        ],
        "answer": "Hemophilia",
        "difficulty": "medium",
        "topic": "Pediatric Haematology",
        "explanation": "Hemophilia causes joint bleeding (hemarthrosis) in children due to clotting factor deficiencies."
    },
    {
        "id": 668,
        "question": "What is the primary advantage of biologics in lymphoma treatment?",
        "options": [
            "Increase red blood cell production",
            "Target specific molecular pathways",
            "Correct clotting factor deficiencies",
            "Enhance platelet function"
        ],
        "answer": "Target specific molecular pathways",
        "difficulty": "hard",
        "topic": "Recent Advances",
        "explanation": "Biologics, like monoclonal antibodies, target specific molecular pathways in lymphoma cells, improving treatment efficacy."
    },
    {
        "id": 669,
        "question": "Which type of anemia is associated with spherocytes on blood smear?",
        "options": [
            "Iron deficiency anemia",
            "Hereditary spherocytosis",
            "Megaloblastic anemia",
            "Sickle cell anemia"
        ],
        "answer": "Hereditary spherocytosis",
        "difficulty": "hard",
        "topic": "Anaemias",
        "explanation": "Hereditary spherocytosis is characterized by spherocytes, round red blood cells with reduced membrane flexibility, leading to hemolysis."
    },
    {
        "id": 670,
        "question": "Which white blood cell type is primarily involved in humoral immunity?",
        "options": [
            "Neutrophils",
            "B lymphocytes",
            "T lymphocytes",
            "Monocytes"
        ],
        "answer": "B lymphocytes",
        "difficulty": "medium",
        "topic": "White Blood Cells",
        "explanation": "B lymphocytes produce antibodies, mediating humoral immunity against extracellular pathogens."
    },
    {
        "id": 671,
        "question": "Which leukemia is associated with a high risk of infection?",
        "options": [
            "Chronic lymphocytic leukemia",
            "Acute myeloid leukemia",
            "Chronic myeloid leukemia",
            "Myelodysplastic syndrome"
        ],
        "answer": "Acute myeloid leukemia",
        "difficulty": "hard",
        "topic": "Leukaemias and Lymphomas",
        "explanation": "Acute myeloid leukemia increases infection risk due to severe neutropenia from blast proliferation."
    },
    {
        "id": 672,
        "question": "What is the primary role of factor X in hemostasis?",
        "options": [
            "Stimulate platelet production",
            "Activate prothrombin",
            "Dissolve clots",
            "Stabilize fibrin"
        ],
        "answer": "Activate prothrombin",
        "difficulty": "hard",
        "topic": "Platelets and Hemostasis",
        "explanation": "Factor X, activated in both intrinsic and extrinsic pathways, converts prothrombin to thrombin in the common pathway."
    },
    {
        "id": 673,
        "question": "Which condition is associated with a low platelet count in bleeding disorders?",
        "options": [
            "Polycythemia vera",
            "Immune thrombocytopenia",
            "Sickle cell disease",
            "Thalassemia"
        ],
        "answer": "Immune thrombocytopenia",
        "difficulty": "medium",
        "topic": "Coagulation and Bleeding Disorders",
        "explanation": "Immune thrombocytopenia causes a low platelet count due to autoimmune destruction of platelets."
    },
    {
        "id": 674,
        "question": "What is the primary cause of delayed hemolytic transfusion reactions?",
        "options": [
            "ABO incompatibility",
            "Minor antigen incompatibility",
            "Cytokine release",
            "Iron overload"
        ],
        "answer": "Minor antigen incompatibility",
        "difficulty": "hard",
        "topic": "Blood Groups and Transfusion Medicine",
        "explanation": "Delayed hemolytic transfusion reactions occur due to minor antigen incompatibilities, causing gradual hemolysis days after transfusion."
    },
    {
        "id": 675,
        "question": "Which laboratory technique is used to detect specific enzymes in leukemia cells?",
        "options": [
            "Flow cytometry",
            "Cytochemistry",
            "Peripheral blood smear",
            "Hematocrit"
        ],
        "answer": "Cytochemistry",
        "difficulty": "hard",
        "topic": "Laboratory Techniques",
        "explanation": "Cytochemistry detects specific enzymes, like myeloperoxidase, in leukemia cells, aiding in distinguishing AML from ALL."
    },
    {
        "id": 676,
        "question": "Which infection is associated with trypomastigotes in blood?",
        "options": [
            "Malaria",
            "Leishmaniasis",
            "Trypanosomiasis",
            "Sepsis"
        ],
        "answer": "Trypanosomiasis",
        "difficulty": "hard",
        "topic": "Infections Affecting Blood",
        "explanation": "Trypanosomiasis is characterized by trypomastigotes, the flagellated form of Trypanosoma, in blood smears."
    },
    {
        "id": 677,
        "question": "Which condition is associated with a high lactate dehydrogenase (LDH) in hematologic malignancies?",
        "options": [
            "Aplastic anemia",
            "Multiple myeloma",
            "Iron deficiency anemia",
            "Thalassemia"
        ],
        "answer": "Multiple myeloma",
        "difficulty": "hard",
        "topic": "Hematologic Malignancies",
        "explanation": "Multiple myeloma causes elevated LDH due to increased cell turnover and hemolysis."
    },
    {
        "id": 678,
        "question": "Which hematologic condition is associated with renal failure in adults?",
        "options": [
            "Sickle cell disease",
            "Multiple myeloma",
            "Thalassemia",
            "Aplastic anemia"
        ],
        "answer": "Multiple myeloma",
        "difficulty": "hard",
        "topic": "Hematologic Malignancies",
        "explanation": "Multiple myeloma causes renal failure due to light chain deposition and hypercalcemia."
    },
    {
        "id": 679,
        "question": "What is the primary role of monoclonal antibodies in lymphoma treatment?",
        "options": [
            "Increase red blood cell production",
            "Target specific antigens",
            "Correct clotting factor deficiencies",
            "Enhance platelet function"
        ],
        "answer": "Target specific antigens",
        "difficulty": "hard",
        "topic": "Recent Advances",
        "explanation": "Monoclonal antibodies, like rituximab, target specific antigens (e.g., CD20) on lymphoma cells, enhancing treatment specificity."
    },
    {
        "id": 680,
        "question": "Which type of anemia is associated with Howell-Jolly bodies on blood smear?",
        "options": [
            "Iron deficiency anemia",
            "Sickle cell anemia",
            "Megaloblastic anemia",
            "Aplastic anemia"
        ],
        "answer": "Sickle cell anemia",
        "difficulty": "hard",
        "topic": "Anaemias",
        "explanation": "Howell-Jolly bodies, nuclear remnants in red blood cells, are seen in sickle cell anemia due to functional asplenia."
    },
    {
        "id": 681,
        "question": "Which white blood cell type is primarily involved in acute bacterial infections?",
        "options": [
            "Lymphocytes",
            "Neutrophils",
            "Eosinophils",
            "Basophils"
        ],
        "answer": "Neutrophils",
        "difficulty": "easy",
        "topic": "White Blood Cells",
        "explanation": "Neutrophils are the primary responders to acute bacterial infections, performing phagocytosis."
    },
    {
        "id": 682,
        "question": "Which leukemia is associated with the Philadelphia chromosome?",
        "options": [
            "Acute lymphoblastic leukemia",
            "Chronic myeloid leukemia",
            "Acute myeloid leukemia",
            "Chronic lymphocytic leukemia"
        ],
        "answer": "Chronic myeloid leukemia",
        "difficulty": "hard",
        "topic": "Leukaemias and Lymphomas",
        "explanation": "Chronic myeloid leukemia is characterized by the Philadelphia chromosome, a t(9;22) translocation producing the BCR-ABL fusion gene."
    },
    {
        "id": 683,
        "question": "What is the primary role of vascular spasm in hemostasis?",
        "options": [
            "Form a fibrin clot",
            "Reduce blood flow to the injury",
            "Stimulate platelet production",
            "Dissolve clots"
        ],
        "answer": "Reduce blood flow to the injury",
        "difficulty": "medium",
        "topic": "Platelets and Hemostasis",
        "explanation": "Vascular spasm constricts blood vessels at the injury site, reducing blood flow to minimize bleeding."
    },
    {
        "id": 684,
        "question": "Which condition is associated with a prolonged bleeding time?",
        "options": [
            "Hemophilia A",
            "Von Willebrand disease",
            "Factor IX deficiency",
            "Disseminated intravascular coagulation"
        ],
        "answer": "Von Willebrand disease",
        "difficulty": "hard",
        "topic": "Coagulation and Bleeding Disorders",
        "explanation": "Von Willebrand disease prolongs bleeding time due to impaired platelet adhesion from deficient von Willebrand factor."
    },
    {
        "id": 685,
        "question": "What is the primary cause of transfusion-associated graft-versus-host disease?",
        "options": [
            "ABO incompatibility",
            "Donor lymphocyte attack",
            "Iron overload",
            "Cytokine release"
        ],
        "answer": "Donor lymphocyte attack",
        "difficulty": "hard",
        "topic": "Blood Groups and Transfusion Medicine",
        "explanation": "Transfusion-associated graft-versus-host disease occurs when donor lymphocytes attack recipient tissues in immunocompromised patients."
    },
    {
        "id": 686,
        "question": "Which laboratory technique is used to assess hemoglobin levels?",
        "options": [
            "Flow cytometry",
            "Hemoglobin estimation",
            "Peripheral blood smear",
            "ESR"
        ],
        "answer": "Hemoglobin estimation",
        "difficulty": "easy",
        "topic": "Laboratory Techniques",
        "explanation": "Hemoglobin estimation measures hemoglobin concentration in blood, critical for diagnosing anemias."
    },
    {
        "id": 687,
        "question": "Which infection is associated with atypical lymphocytes in blood smears?",
        "options": [
            "Malaria",
            "Infectious mononucleosis",
            "Leishmaniasis",
            "Trypanosomiasis"
        ],
        "answer": "Infectious mononucleosis",
        "difficulty": "medium",
        "topic": "Infections Affecting Blood",
        "explanation": "Infectious mononucleosis, caused by Epstein-Barr virus, is characterized by atypical lymphocytes (reactive T-cells) on blood smear."
    },
    {
        "id": 688,
        "question": "Which condition is associated with bone marrow replacement with fibrous tissue?",
        "options": [
            "Polycythemia vera",
            "Myelofibrosis",
            "Aplastic anemia",
            "Sickle cell disease"
        ],
        "answer": "Myelofibrosis",
        "difficulty": "hard",
        "topic": "Myeloproliferative Disorders",
        "explanation": "Myelofibrosis involves bone marrow replacement with fibrous tissue, leading to ineffective hematopoiesis and splenomegaly."
    },
    {
        "id": 689,
        "question": "Which hematologic condition is associated with iron overload in children?",
        "options": [
            "Hemophilia",
            "Thalassemia major",
            "Sickle cell disease",
            "Aplastic anemia"
        ],
        "answer": "Thalassemia major",
        "difficulty": "medium",
        "topic": "Pediatric Haematology",
        "explanation": "Thalassemia major causes iron overload in children due to frequent blood transfusions."
    },
    {
        "id": 690,
        "question": "What is the primary role of CRISPR in hematologic research?",
        "options": [
            "Increase red blood cell production",
            "Edit defective genes",
            "Enhance platelet function",
            "Monitor clotting factors"
        ],
        "answer": "Edit defective genes",
        "difficulty": "hard",
        "topic": "Recent Advances",
        "explanation": "CRISPR enables precise editing of defective genes, offering potential cures for hemoglobinopathies like sickle cell disease."
    },
    {
        "id": 691,
        "question": "Which type of anemia is associated with a low mean corpuscular hemoglobin (MCH)?",
        "options": [
            "Megaloblastic anemia",
            "Iron deficiency anemia",
            "Sickle cell anemia",
            "Aplastic anemia"
        ],
        "answer": "Iron deficiency anemia",
        "difficulty": "medium",
        "topic": "Anaemias",
        "explanation": "Iron deficiency anemia causes a low MCH due to reduced hemoglobin content in red blood cells."
    },
    {
        "id": 692,
        "question": "Which white blood cell type is elevated in parasitic infections?",
        "options": [
            "Neutrophils",
            "Lymphocytes",
            "Eosinophils",
            "Monocytes"
        ],
        "answer": "Eosinophils",
        "difficulty": "medium",
        "topic": "White Blood Cells",
        "explanation": "Eosinophils are elevated in parasitic infections, releasing toxic proteins to combat parasites."
    },
    {
        "id": 693,
        "question": "Which lymphoma is associated with painless lymphadenopathy?",
        "options": [
            "Chronic lymphocytic leukemia",
            "Hodgkin lymphoma",
            "Acute myeloid leukemia",
            "Myelodysplastic syndrome"
        ],
        "answer": "Hodgkin lymphoma",
        "difficulty": "medium",
        "topic": "Leukaemias and Lymphomas",
        "explanation": "Hodgkin lymphoma often presents with painless lymphadenopathy, particularly in cervical or supraclavicular nodes."
    },
    {
        "id": 694,
        "question": "What is the primary role of thrombin in hemostasis?",
        "options": [
            "Stimulate platelet production",
            "Convert fibrinogen to fibrin",
            "Reduce blood flow",
            "Dissolve clots"
        ],
        "answer": "Convert fibrinogen to fibrin",
        "difficulty": "medium",
        "topic": "Platelets and Hemostasis",
        "explanation": "Thrombin converts fibrinogen to fibrin, forming a stable clot in the coagulation cascade."
    },
    {
        "id": 695,
        "question": "Which condition is associated with a high INR in bleeding disorders?",
        "options": [
            "Hemophilia A",
            "Warfarin therapy",
            "Von Willebrand disease",
            "Thrombocytopenia"
        ],
        "answer": "Warfarin therapy",
        "difficulty": "medium",
        "topic": "Coagulation and Bleeding Disorders",
        "explanation": "Warfarin therapy increases INR by inhibiting vitamin K-dependent clotting factors, prolonging prothrombin time."
    },
    {
        "id": 696,
        "question": "What is the primary cause of iron overload in transfusion-dependent patients?",
        "options": [
            "ABO incompatibility",
            "Repeated blood transfusions",
            "Cytokine release",
            "Donor lymphocyte attack"
        ],
        "answer": "Repeated blood transfusions",
        "difficulty": "medium",
        "topic": "Blood Groups and Transfusion Medicine",
        "explanation": "Repeated blood transfusions, as in thalassemia, cause iron overload due to excessive iron accumulation."
    },
    {
        "id": 697,
        "question": "Which laboratory technique is used to assess inflammation?",
        "options": [
            "Reticulocyte count",
            "Erythrocyte sedimentation rate (ESR)",
            "Flow cytometry",
            "D-dimer"
        ],
        "answer": "Erythrocyte sedimentation rate (ESR)",
        "difficulty": "medium",
        "topic": "Laboratory Techniques",
        "explanation": "ESR measures the rate at which red blood cells settle, elevated in inflammatory conditions."
    },
    {
        "id": 698,
        "question": "Which infection is associated with pancytopenia in severe cases?",
        "options": [
            "Malaria",
            "Sepsis",
            "Trypanosomiasis",
            "Infectious mononucleosis"
        ],
        "answer": "Sepsis",
        "difficulty": "hard",
        "topic": "Infections Affecting Blood",
        "explanation": "Severe sepsis can cause pancytopenia due to bone marrow suppression and increased cell consumption."
    },
    {
        "id": 699,
        "question": "Which condition is associated with a high erythrocyte sedimentation rate (ESR)?",
        "options": [
            "Iron deficiency anemia",
            "Multiple myeloma",
            "Sickle cell disease",
            "Thalassemia"
        ],
        "answer": "Multiple myeloma",
        "difficulty": "medium",
        "topic": "Hematologic Malignancies",
        "explanation": "Multiple myeloma increases ESR due to elevated plasma proteins, causing red blood cells to settle faster."
    },
    {
        "id": 700,
        "question": "Which hematologic condition is associated with stroke risk in children?",
        "options": [
            "Hemophilia",
            "Sickle cell disease",
            "Thalassemia",
            "Aplastic anemia"
        ],
        "answer": "Sickle cell disease",
        "difficulty": "medium",
        "topic": "Pediatric Haematology",
        "explanation": "Sickle cell disease increases stroke risk in children due to vaso-occlusion in cerebral blood vessels."
    }
]
