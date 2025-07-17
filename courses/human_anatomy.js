const QUESTIONS = [
    {
        "id": 1,
        "question": "Which bone forms the upper arm?",
        "options": [
            "Radius",
            "Humerus",
            "Ulna",
            "Scapula"
        ],
        "answer": "Humerus",
        "difficulty": "easy",
        "topic": "Skeletal System",
        "explanation": "The humerus is the single bone of the upper arm, connecting the shoulder to the elbow."
    },
    {
        "id": 2,
        "question": "How many vertebrae are in the human cervical spine?",
        "options": [
            "5",
            "7",
            "12",
            "33"
        ],
        "answer": "7",
        "difficulty": "medium",
        "topic": "Skeletal System",
        "explanation": "The cervical spine consists of 7 vertebrae, supporting the neck and head."
    },
    {
        "id": 3,
        "question": "Which type of joint allows the greatest range of motion?",
        "options": [
            "Hinge joint",
            "Pivot joint",
            "Ball-and-socket joint",
            "Suture joint"
        ],
        "answer": "Ball-and-socket joint",
        "difficulty": "medium",
        "topic": "Skeletal System",
        "explanation": "Ball-and-socket joints, like the hip and shoulder, allow multi-directional movement."
    },
    {
        "id": 4,
        "question": "Which bone is commonly known as the collarbone?",
        "options": [
            "Clavicle",
            "Sternum",
            "Scapula",
            "Ribs"
        ],
        "answer": "Clavicle",
        "difficulty": "easy",
        "topic": "Skeletal System",
        "explanation": "The clavicle connects the arm to the body and is located near the shoulder."
    },
    {
        "id": 5,
        "question": "What is the primary function of the axial skeleton?",
        "options": [
            "Facilitate movement",
            "Protect internal organs",
            "Produce blood cells",
            "Store minerals"
        ],
        "answer": "Protect internal organs",
        "difficulty": "medium",
        "topic": "Skeletal System",
        "explanation": "The axial skeleton, including the skull and vertebral column, primarily protects vital organs."
    },
    {
        "id": 6,
        "question": "Which muscle is responsible for flexing the elbow?",
        "options": [
            "Triceps brachii",
            "Biceps brachii",
            "Deltoid",
            "Pectoralis major"
        ],
        "answer": "Biceps brachii",
        "difficulty": "easy",
        "topic": "Muscular System",
        "explanation": "The biceps brachii contracts to flex the elbow joint."
    },
    {
        "id": 7,
        "question": "What type of muscle is found in the walls of the heart?",
        "options": [
            "Skeletal muscle",
            "Smooth muscle",
            "Cardiac muscle",
            "Voluntary muscle"
        ],
        "answer": "Cardiac muscle",
        "difficulty": "easy",
        "topic": "Muscular System",
        "explanation": "Cardiac muscle is involuntary and found exclusively in the heart."
    },
    {
        "id": 8,
        "question": "Which muscle group extends the knee joint?",
        "options": [
            "Hamstrings",
            "Quadriceps femoris",
            "Gastrocnemius",
            "Gluteus maximus"
        ],
        "answer": "Quadriceps femoris",
        "difficulty": "medium",
        "topic": "Muscular System",
        "explanation": "The quadriceps femoris, located on the anterior thigh, extends the knee."
    },
    {
        "id": 9,
        "question": "Which muscle is primarily responsible for breathing?",
        "options": [
            "Diaphragm",
            "Pectoralis minor",
            "Rectus abdominis",
            "Trapezius"
        ],
        "answer": "Diaphragm",
        "difficulty": "medium",
        "topic": "Muscular System",
        "explanation": "The diaphragm contracts to increase thoracic volume, facilitating inhalation."
    },
    {
        "id": 10,
        "question": "What is the primary source of energy for muscle contraction?",
        "options": [
            "Glucose",
            "ATP",
            "Oxygen",
            "Fatty acids"
        ],
        "answer": "ATP",
        "difficulty": "hard",
        "topic": "Muscular System",
        "explanation": "ATP provides the immediate energy required for muscle contraction."
    },
    {
        "id": 11,
        "question": "Which part of the brain controls voluntary movement?",
        "options": [
            "Cerebellum",
            "Medulla oblongata",
            "Cerebrum",
            "Hypothalamus"
        ],
        "answer": "Cerebrum",
        "difficulty": "easy",
        "topic": "Nervous System",
        "explanation": "The cerebrum’s motor cortex controls voluntary movements."
    },
    {
        "id": 12,
        "question": "What is the functional unit of the nervous system?",
        "options": [
            "Neuron",
            "Glial cell",
            "Synapse",
            "Axon"
        ],
        "answer": "Neuron",
        "difficulty": "easy",
        "topic": "Nervous System",
        "explanation": "Neurons are the cells responsible for transmitting nerve impulses."
    },
    {
        "id": 13,
        "question": "Which cranial nerve controls facial expressions?",
        "options": [
            "Trigeminal nerve",
            "Facial nerve",
            "Vagus nerve",
            "Optic nerve"
        ],
        "answer": "Facial nerve",
        "difficulty": "medium",
        "topic": "Nervous System",
        "explanation": "The facial nerve (cranial nerve VII) innervates muscles of facial expression."
    },
    {
        "id": 14,
        "question": "What structure protects the spinal cord?",
        "options": [
            "Cranium",
            "Vertebral column",
            "Ribs",
            "Meninges"
        ],
        "answer": "Vertebral column",
        "difficulty": "easy",
        "topic": "Nervous System",
        "explanation": "The vertebral column encases and protects the spinal cord."
    },
    {
        "id": 15,
        "question": "Which part of the neuron receives incoming signals?",
        "options": [
            "Axon",
            "Dendrite",
            "Soma",
            "Myelin sheath"
        ],
        "answer": "Dendrite",
        "difficulty": "medium",
        "topic": "Nervous System",
        "explanation": "Dendrites receive synaptic inputs from other neurons."
    },
    {
        "id": 16,
        "question": "Which chamber of the heart pumps blood into the aorta?",
        "options": [
            "Left atrium",
            "Right ventricle",
            "Left ventricle",
            "Right atrium"
        ],
        "answer": "Left ventricle",
        "difficulty": "easy",
        "topic": "Circulatory System",
        "explanation": "The left ventricle pumps oxygenated blood into the aorta for systemic circulation."
    },
    {
        "id": 17,
        "question": "What is the primary function of red blood cells?",
        "options": [
            "Fight infection",
            "Transport oxygen",
            "Clot blood",
            "Produce antibodies"
        ],
        "answer": "Transport oxygen",
        "difficulty": "easy",
        "topic": "Circulatory System",
        "explanation": "Red blood cells carry oxygen from the lungs to tissues via hemoglobin."
    },
    {
        "id": 18,
        "question": "Which blood vessel carries deoxygenated blood to the lungs?",
        "options": [
            "Aorta",
            "Pulmonary artery",
            "Pulmonary vein",
            "Coronary artery"
        ],
        "answer": "Pulmonary artery",
        "difficulty": "medium",
        "topic": "Circulatory System",
        "explanation": "The pulmonary artery carries deoxygenated blood from the right ventricle to the lungs."
    },
    {
        "id": 19,
        "question": "What structure prevents backflow of blood in the heart?",
        "options": [
            "Arteries",
            "Valves",
            "Veins",
            "Capillaries"
        ],
        "answer": "Valves",
        "difficulty": "easy",
        "topic": "Circulatory System",
        "explanation": "Heart valves, like the mitral and tricuspid, prevent blood backflow."
    },
    {
        "id": 20,
        "question": "Which layer of the heart wall is responsible for contraction?",
        "options": [
            "Epicardium",
            "Myocardium",
            "Endocardium",
            "Pericardium"
        ],
        "answer": "Myocardium",
        "difficulty": "medium",
        "topic": "Circulatory System",
        "explanation": "The myocardium is the muscular layer of the heart responsible for its contraction."
    },
    {
        "id": 21,
        "question": "Which structure in the respiratory system is the site of gas exchange?",
        "options": [
            "Trachea",
            "Bronchi",
            "Alveoli",
            "Larynx"
        ],
        "answer": "Alveoli",
        "difficulty": "easy",
        "topic": "Respiratory System",
        "explanation": "Alveoli are tiny air sacs where oxygen and carbon dioxide are exchanged with blood."
    },
    {
        "id": 22,
        "question": "What is the role of the epiglottis in the respiratory system?",
        "options": [
            "Filter air",
            "Prevent food from entering the trachea",
            "Produce mucus",
            "Facilitate gas exchange"
        ],
        "answer": "Prevent food from entering the trachea",
        "difficulty": "medium",
        "topic": "Respiratory System",
        "explanation": "The epiglottis closes off the trachea during swallowing to prevent aspiration."
    },
    {
        "id": 23,
        "question": "Which muscle assists the diaphragm in expanding the thoracic cavity?",
        "options": [
            "Internal intercostals",
            "External intercostals",
            "Pectoralis major",
            "Latissimus dorsi"
        ],
        "answer": "External intercostals",
        "difficulty": "hard",
        "topic": "Respiratory System",
        "explanation": "External intercostal muscles elevate the ribs, aiding in thoracic expansion during inhalation."
    },
    {
        "id": 24,
        "question": "What is the primary function of the nasal cavity in respiration?",
        "options": [
            "Gas exchange",
            "Filter and humidify air",
            "Produce surfactant",
            "Regulate airflow"
        ],
        "answer": "Filter and humidify air",
        "difficulty": "medium",
        "topic": "Respiratory System",
        "explanation": "The nasal cavity filters, warms, and humidifies air before it reaches the lungs."
    },
    {
        "id": 25,
        "question": "Which structure connects the larynx to the bronchi?",
        "options": [
            "Pharynx",
            "Trachea",
            "Esophagus",
            "Bronchiole"
        ],
        "answer": "Trachea",
        "difficulty": "easy",
        "topic": "Respiratory System",
        "explanation": "The trachea, or windpipe, conducts air from the larynx to the bronchi."
    },
    {
        "id": 26,
        "question": "Which organ is primarily responsible for chemical digestion of proteins?",
        "options": [
            "Stomach",
            "Small intestine",
            "Liver",
            "Pancreas"
        ],
        "answer": "Stomach",
        "difficulty": "easy",
        "topic": "Digestive System",
        "explanation": "The stomach secretes pepsin and hydrochloric acid to break down proteins."
    },
    {
        "id": 27,
        "question": "What is the primary function of the large intestine?",
        "options": [
            "Nutrient absorption",
            "Protein digestion",
            "Water absorption",
            "Bile production"
        ],
        "answer": "Water absorption",
        "difficulty": "easy",
        "topic": "Digestive System",
        "explanation": "The large intestine absorbs water and forms feces."
    },
    {
        "id": 28,
        "question": "Which structure increases the surface area for nutrient absorption in the small intestine?",
        "options": [
            "Villi",
            "Peyer’s patches",
            "Rugae",
            "Haustra"
        ],
        "answer": "Villi",
        "difficulty": "medium",
        "topic": "Digestive System",
        "explanation": "Villi are finger-like projections in the small intestine that increase absorptive surface area."
    },
    {
        "id": 29,
        "question": "Which organ produces bile to aid in fat digestion?",
        "options": [
            "Pancreas",
            "Liver",
            "Gallbladder",
            "Stomach"
        ],
        "answer": "Liver",
        "difficulty": "medium",
        "topic": "Digestive System",
        "explanation": "The liver produces bile, which emulsifies fats for digestion."
    },
    {
        "id": 30,
        "question": "What enzyme in saliva begins carbohydrate digestion?",
        "options": [
            "Lipase",
            "Amylase",
            "Pepsin",
            "Trypsin"
        ],
        "answer": "Amylase",
        "difficulty": "medium",
        "topic": "Digestive System",
        "explanation": "Salivary amylase (ptyalin) initiates the breakdown of starches in the mouth."
    },
    {
        "id": 31,
        "question": "Which organ filters blood and removes waste products?",
        "options": [
            "Liver",
            "Kidney",
            "Spleen",
            "Pancreas"
        ],
        "answer": "Kidney",
        "difficulty": "easy",
        "topic": "Urinary System",
        "explanation": "The kidneys filter blood to remove waste and form urine."
    },
    {
        "id": 32,
        "question": "What is the functional unit of the kidney?",
        "options": [
            "Nephron",
            "Glomerulus",
            "Ureter",
            "Collecting duct"
        ],
        "answer": "Nephron",
        "difficulty": "medium",
        "topic": "Urinary System",
        "explanation": "The nephron is the structural unit responsible for filtration and urine formation."
    },
    {
        "id": 33,
        "question": "Which structure transports urine from the kidney to the bladder?",
        "options": [
            "Urethra",
            "Ureter",
            "Renal artery",
            "Renal pelvis"
        ],
        "answer": "Ureter",
        "difficulty": "easy",
        "topic": "Urinary System",
        "explanation": "The ureter carries urine from the kidney to the urinary bladder."
    },
    {
        "id": 34,
        "question": "Which hormone regulates water reabsorption in the kidneys?",
        "options": [
            "Insulin",
            "Adrenaline",
            "Antidiuretic hormone",
            "Cortisol"
        ],
        "answer": "Antidiuretic hormone",
        "difficulty": "hard",
        "topic": "Urinary System",
        "explanation": "Antidiuretic hormone (ADH) promotes water reabsorption in the collecting ducts."
    },
    {
        "id": 35,
        "question": "What is the primary role of the urinary bladder?",
        "options": [
            "Filter blood",
            "Store urine",
            "Produce urine",
            "Regulate pH"
        ],
        "answer": "Store urine",
        "difficulty": "easy",
        "topic": "Urinary System",
        "explanation": "The urinary bladder stores urine until it is excreted."
    },
    {
        "id": 36,
        "question": "Which gland produces insulin to regulate blood sugar?",
        "options": [
            "Thyroid",
            "Adrenal",
            "Pancreas",
            "Pituitary"
        ],
        "answer": "Pancreas",
        "difficulty": "easy",
        "topic": "Endocrine System",
        "explanation": "The pancreas secretes insulin to regulate blood glucose levels."
    },
    {
        "id": 37,
        "question": "What hormone is produced by the anterior pituitary to stimulate growth?",
        "options": [
            "Thyroxine",
            "Growth hormone",
            "Cortisol",
            "Oxytocin"
        ],
        "answer": "Growth hormone",
        "difficulty": "medium",
        "topic": "Endocrine System",
        "explanation": "Growth hormone promotes growth and development of tissues."
    },
    {
        "id": 38,
        "question": "Which gland regulates metabolism through thyroid hormone production?",
        "options": [
            "Parathyroid",
            "Thyroid",
            "Adrenal",
            "Pineal"
        ],
        "answer": "Thyroid",
        "difficulty": "easy",
        "topic": "Endocrine System",
        "explanation": "The thyroid gland produces thyroid hormones that regulate metabolism."
    },
    {
        "id": 39,
        "question": "What is the primary function of the adrenal medulla?",
        "options": [
            "Regulate calcium levels",
            "Produce catecholamines",
            "Control blood sugar",
            "Synthesize thyroid hormones"
        ],
        "answer": "Produce catecholamines",
        "difficulty": "hard",
        "topic": "Endocrine System",
        "explanation": "The adrenal medulla produces catecholamines like epinephrine for stress responses."
    },
    {
        "id": 40,
        "question": "Which hormone is secreted by the posterior pituitary to induce labor?",
        "options": [
            "Oxytocin",
            "Prolactin",
            "ACTH",
            "TSH"
        ],
        "answer": "Oxytocin",
        "difficulty": "medium",
        "topic": "Endocrine System",
        "explanation": "Oxytocin stimulates uterine contractions during labor."
    },
    {
        "id": 41,
        "question": "Which layer of the skin contains melanin-producing cells?",
        "options": [
            "Epidermis",
            "Dermis",
            "Hypodermis",
            "Stratum corneum"
        ],
        "answer": "Epidermis",
        "difficulty": "easy",
        "topic": "Integumentary System",
        "explanation": "The epidermis contains melanocytes that produce melanin for skin pigmentation."
    },
    {
        "id": 42,
        "question": "What is the primary function of the dermis?",
        "options": [
            "Protect against UV radiation",
            "Provide structural support",
            "Store fat",
            "Produce keratin"
        ],
        "answer": "Provide structural support",
        "difficulty": "medium",
        "topic": "Integumentary System",
        "explanation": "The dermis contains collagen and elastin, providing strength and elasticity."
    },
    {
        "id": 43,
        "question": "Which structure in the skin produces sebum?",
        "options": [
            "Sweat gland",
            "Sebaceous gland",
            "Hair follicle",
            "Merkel cell"
        ],
        "answer": "Sebaceous gland",
        "difficulty": "medium",
        "topic": "Integumentary System",
        "explanation": "Sebaceous glands produce sebum, an oily substance that lubricates skin and hair."
    },
    {
        "id": 44,
        "question": "What is the role of the hypodermis?",
        "options": [
            "Protect against pathogens",
            "Store fat and insulate",
            "Produce melanin",
            "Regulate body temperature"
        ],
        "answer": "Store fat and insulate",
        "difficulty": "medium",
        "topic": "Integumentary System",
        "explanation": "The hypodermis stores fat, provides insulation, and cushions underlying structures."
    },
    {
        "id": 45,
        "question": "Which skin layer is primarily composed of dead keratinocytes?",
        "options": [
            "Stratum basale",
            "Stratum corneum",
            "Stratum granulosum",
            "Stratum spinosum"
        ],
        "answer": "Stratum corneum",
        "difficulty": "hard",
        "topic": "Integumentary System",
        "explanation": "The stratum corneum is the outermost layer of the epidermis, composed of dead keratinocytes."
    },
    {
        "id": 46,
        "question": "Which organ produces sperm in the male reproductive system?",
        "options": [
            "Prostate gland",
            "Testes",
            "Seminal vesicles",
            "Epididymis"
        ],
        "answer": "Testes",
        "difficulty": "easy",
        "topic": "Reproductive System",
        "explanation": "The testes produce sperm and testosterone in males."
    },
    {
        "id": 47,
        "question": "What is the primary function of the ovaries in the female reproductive system?",
        "options": [
            "Produce mucus",
            "Produce eggs and hormones",
            "Transport sperm",
            "Facilitate implantation"
        ],
        "answer": "Produce eggs and hormones",
        "difficulty": "easy",
        "topic": "Reproductive System",
        "explanation": "The ovaries produce ova (eggs) and hormones like estrogen and progesterone."
    },
    {
        "id": 48,
        "question": "Which structure in the female reproductive system is the site of fertilization?",
        "options": [
            "Uterus",
            "Vagina",
            "Fallopian tube",
            "Cervix"
        ],
        "answer": "Fallopian tube",
        "difficulty": "medium",
        "topic": "Reproductive System",
        "explanation": "Fertilization typically occurs in the fallopian tube when sperm meets the egg."
    },
    {
        "id": 49,
        "question": "What is the role of the epididymis in the male reproductive system?",
        "options": [
            "Produce testosterone",
            "Store and mature sperm",
            "Secrete seminal fluid",
            "Transport urine"
        ],
        "answer": "Store and mature sperm",
        "difficulty": "medium",
        "topic": "Reproductive System",
        "explanation": "The epididymis stores and allows sperm to mature before ejaculation."
    },
    {
        "id": 50,
        "question": "Which hormone stimulates ovulation in females?",
        "options": [
            "Progesterone",
            "Luteinizing hormone",
            "Estrogen",
            "Follicle-stimulating hormone"
        ],
        "answer": "Luteinizing hormone",
        "difficulty": "hard",
        "topic": "Reproductive System",
        "explanation": "Luteinizing hormone triggers ovulation by causing the release of a mature egg from the ovary."
    },
    {
        "id": 51,
        "question": "Which of the following is NOT a branch of human anatomy?",
        "options": [
            "Gross anatomy",
            "Microscopic anatomy",
            "Developmental anatomy",
            "Biochemical anatomy"
        ],
        "answer": "Biochemical anatomy",
        "difficulty": "easy",
        "topic": "Introduction to Human Anatomy",
        "explanation": "Human anatomy includes gross, microscopic, developmental, and clinical branches. Biochemical anatomy is not a recognized branch, as it pertains to biochemistry."
    },
    {
        "id": 52,
        "question": "Which anatomical plane divides the body into superior and inferior parts?",
        "options": [
            "Sagittal plane",
            "Frontal plane",
            "Transverse plane",
            "Oblique plane"
        ],
        "answer": "Transverse plane",
        "difficulty": "easy",
        "topic": "Anatomical Terminology",
        "explanation": "The transverse plane divides the body into superior (upper) and inferior (lower) parts."
    },
    {
        "id": 53,
        "question": "What is the highest level of structural organization in the human body?",
        "options": [
            "Organ",
            "Tissue",
            "System",
            "Cell"
        ],
        "answer": "System",
        "difficulty": "easy",
        "topic": "Levels of Structural Organization",
        "explanation": "The levels of organization progress from cells to tissues, organs, and systems, with systems being the highest level."
    },
    {
        "id": 54,
        "question": "Which body cavity contains the heart and lungs?",
        "options": [
            "Abdominopelvic cavity",
            "Thoracic cavity",
            "Cranial cavity",
            "Spinal cavity"
        ],
        "answer": "Thoracic cavity",
        "difficulty": "easy",
        "topic": "Body Cavities and Membranes",
        "explanation": "The thoracic cavity houses the heart and lungs, protected by the rib cage."
    },
    {
        "id": 55,
        "question": "Which membrane lines the thoracic cavity and covers the lungs?",
        "options": [
            "Pericardium",
            "Peritoneum",
            "Pleura",
            "Meninges"
        ],
        "answer": "Pleura",
        "difficulty": "medium",
        "topic": "Body Cavities and Membranes",
        "explanation": "The pleura is a serous membrane that lines the thoracic cavity (parietal pleura) and covers the lungs (visceral pleura)."
    },
    {
        "id": 56,
        "question": "Which type of bone is the femur classified as?",
        "options": [
            "Short bone",
            "Flat bone",
            "Long bone",
            "Irregular bone"
        ],
        "answer": "Long bone",
        "difficulty": "easy",
        "topic": "Skeletal System",
        "explanation": "The femur, the thigh bone, is classified as a long bone due to its length being greater than its width."
    },
    {
        "id": 57,
        "question": "What is the primary function of compact bone?",
        "options": [
            "Blood cell production",
            "Provide structural strength",
            "Store fat",
            "Facilitate bone growth"
        ],
        "answer": "Provide structural strength",
        "difficulty": "medium",
        "topic": "Bone Structure",
        "explanation": "Compact bone forms the dense outer layer of bones, providing strength and support."
    },
    {
        "id": 58,
        "question": "Which bone forms the forehead?",
        "options": [
            "Parietal bone",
            "Occipital bone",
            "Frontal bone",
            "Temporal bone"
        ],
        "answer": "Frontal bone",
        "difficulty": "easy",
        "topic": "Axial Skeleton",
        "explanation": "The frontal bone forms the forehead and the upper part of the eye sockets."
    },
    {
        "id": 59,
        "question": "Which bone of the appendicular skeleton articulates with the glenoid cavity?",
        "options": [
            "Humerus",
            "Clavicle",
            "Radius",
            "Scapula"
        ],
        "answer": "Humerus",
        "difficulty": "medium",
        "topic": "Appendicular Skeleton",
        "explanation": "The head of the humerus articulates with the glenoid cavity of the scapula to form the shoulder joint."
    },
    {
        "id": 60,
        "question": "Which type of joint is found between the atlas and axis vertebrae?",
        "options": [
            "Hinge joint",
            "Pivot joint",
            "Saddle joint",
            "Ball-and-socket joint"
        ],
        "answer": "Pivot joint",
        "difficulty": "hard",
        "topic": "Joints",
        "explanation": "The atlas and axis form a pivot joint, allowing rotational movement of the head."
    },
    {
        "id": 61,
        "question": "What is the primary site of bone growth in length during childhood?",
        "options": [
            "Diaphysis",
            "Epiphysis",
            "Epiphyseal plate",
            "Periosteum"
        ],
        "answer": "Epiphyseal plate",
        "difficulty": "medium",
        "topic": "Bone Growth and Development",
        "explanation": "The epiphyseal plate, or growth plate, is where longitudinal bone growth occurs in children."
    },
    {
        "id": 62,
        "question": "Which type of muscle is under voluntary control?",
        "options": [
            "Cardiac muscle",
            "Smooth muscle",
            "Skeletal muscle",
            "Visceral muscle"
        ],
        "answer": "Skeletal muscle",
        "difficulty": "easy",
        "topic": "Muscular System",
        "explanation": "Skeletal muscle is striated and under voluntary control, unlike cardiac and smooth muscle."
    },
    {
        "id": 63,
        "question": "What is the functional unit of a skeletal muscle fiber?",
        "options": [
            "Myofibril",
            "Sarcomere",
            "Actin",
            "Myosin"
        ],
        "answer": "Sarcomere",
        "difficulty": "medium",
        "topic": "Structure of Skeletal Muscle",
        "explanation": "The sarcomere is the repeating unit of a myofibril responsible for muscle contraction."
    },
    {
        "id": 64,
        "question": "Which protein is primarily responsible for muscle contraction?",
        "options": [
            "Collagen",
            "Actin",
            "Keratin",
            "Elastin"
        ],
        "answer": "Actin",
        "difficulty": "medium",
        "topic": "Muscle Contraction Mechanism",
        "explanation": "Actin, along with myosin, forms the contractile apparatus of muscles via the sliding filament theory."
    },
    {
        "id": 65,
        "question": "Which muscle is responsible for closing the jaw?",
        "options": [
            "Buccinator",
            "Masseter",
            "Orbicularis oris",
            "Platysma"
        ],
        "answer": "Masseter",
        "difficulty": "medium",
        "topic": "Head and Neck Muscles",
        "explanation": "The masseter is a powerful muscle that elevates the mandible to close the jaw."
    },
    {
        "id": 66,
        "question": "Which muscle group is primarily responsible for hip extension?",
        "options": [
            "Quadriceps",
            "Hamstrings",
            "Gluteus maximus",
            "Adductors"
        ],
        "answer": "Gluteus maximus",
        "difficulty": "medium",
        "topic": "Lower Limb Muscles",
        "explanation": "The gluteus maximus is the primary muscle for hip extension, as in standing up or climbing stairs."
    },
    {
        "id": 67,
        "question": "Which layer of the skin contains blood vessels and nerves?",
        "options": [
            "Epidermis",
            "Dermis",
            "Hypodermis",
            "Stratum corneum"
        ],
        "answer": "Dermis",
        "difficulty": "easy",
        "topic": "Integumentary System",
        "explanation": "The dermis contains blood vessels, nerves, and connective tissue, supporting the epidermis."
    },
    {
        "id": 68,
        "question": "Which skin appendage produces an oily secretion to lubricate hair and skin?",
        "options": [
            "Sweat gland",
            "Sebaceous gland",
            "Ceruminous gland",
            "Mammary gland"
        ],
        "answer": "Sebaceous gland",
        "difficulty": "medium",
        "topic": "Skin Appendages",
        "explanation": "Sebaceous glands produce sebum, which lubricates hair and skin."
    },
    {
        "id": 69,
        "question": "What is the primary function of the skin in thermoregulation?",
        "options": [
            "Produce vitamin D",
            "Regulate body temperature",
            "Protect against pathogens",
            "Sensory perception"
        ],
        "answer": "Regulate body temperature",
        "difficulty": "easy",
        "topic": "Functions of the Skin",
        "explanation": "The skin regulates body temperature through sweating and blood vessel dilation or constriction."
    },
    {
        "id": 70,
        "question": "Which skin layer is most affected in a third-degree burn?",
        "options": [
            "Epidermis only",
            "Dermis only",
            "Epidermis and dermis",
            "Hypodermis only"
        ],
        "answer": "Epidermis and dermis",
        "difficulty": "medium",
        "topic": "Skin Layers and Clinical Relevance",
        "explanation": "Third-degree burns destroy both the epidermis and dermis, often requiring skin grafts."
    },
    {
        "id": 71,
        "question": "Which part of the brain is responsible for coordinating balance and movement?",
        "options": [
            "Cerebrum",
            "Cerebellum",
            "Medulla oblongata",
            "Thalamus"
        ],
        "answer": "Cerebellum",
        "difficulty": "easy",
        "topic": "Nervous System",
        "explanation": "The cerebellum coordinates balance, posture, and voluntary movements."
    },
    {
        "id": 72,
        "question": "Which cranial nerve is responsible for vision?",
        "options": [
            "Optic nerve",
            "Trigeminal nerve",
            "Vagus nerve",
            "Facial nerve"
        ],
        "answer": "Optic nerve",
        "difficulty": "easy",
        "topic": "Peripheral Nervous System",
        "explanation": "The optic nerve (cranial nerve II) transmits visual information from the retina to the brain."
    },
    {
        "id": 73,
        "question": "Which division of the autonomic nervous system promotes 'rest and digest' functions?",
        "options": [
            "Sympathetic",
            "Parasympathetic",
            "Somatic",
            "Enteric"
        ],
        "answer": "Parasympathetic",
        "difficulty": "medium",
        "topic": "Autonomic Nervous System",
        "explanation": "The parasympathetic nervous system promotes restful activities like digestion and energy conservation."
    },
    {
        "id": 74,
        "question": "Which ventricle of the brain contains cerebrospinal fluid?",
        "options": [
            "Third ventricle",
            "Cerebral cortex",
            "Medulla oblongata",
            "Corpus callosum"
        ],
        "answer": "Third ventricle",
        "difficulty": "medium",
        "topic": "Brain Anatomy",
        "explanation": "The third ventricle is one of four ventricles that contain cerebrospinal fluid, cushioning the brain."
    },
    {
        "id": 75,
        "question": "Which pathway transmits sensory information to the brain?",
        "options": [
            "Corticospinal tract",
            "Spinothalamic tract",
            "Pyramidal tract",
            "Extrapyramidal tract"
        ],
        "answer": "Spinothalamic tract",
        "difficulty": "hard",
        "topic": "Sensory and Motor Pathways",
        "explanation": "The spinothalamic tract carries pain and temperature sensations to the brain."
    },
    {
        "id": 76,
        "question": "Which heart valve separates the left atrium from the left ventricle?",
        "options": [
            "Tricuspid valve",
            "Mitral valve",
            "Aortic valve",
            "Pulmonary valve"
        ],
        "answer": "Mitral valve",
        "difficulty": "easy",
        "topic": "Cardiovascular System",
        "explanation": "The mitral valve (bicuspid valve) prevents backflow from the left ventricle to the left atrium."
    },
    {
        "id": 77,
        "question": "Which blood vessel type has the thickest muscular wall?",
        "options": [
            "Artery",
            "Vein",
            "Capillary",
            "Venule"
        ],
        "answer": "Artery",
        "difficulty": "medium",
        "topic": "Blood Vessels",
        "explanation": "Arteries have thick muscular walls to withstand high pressure from blood pumped by the heart."
    },
    {
        "id": 78,
        "question": "Which circulatory pathway carries blood from the heart to the lungs?",
        "options": [
            "Systemic circulation",
            "Pulmonary circulation",
            "Coronary circulation",
            "Portal circulation"
        ],
        "answer": "Pulmonary circulation",
        "difficulty": "easy",
        "topic": "Circulatory Pathways",
        "explanation": "Pulmonary circulation transports deoxygenated blood from the heart to the lungs for oxygenation."
    },
    {
        "id": 79,
        "question": "Which artery supplies blood to the heart muscle?",
        "options": [
            "Aorta",
            "Coronary artery",
            "Carotid artery",
            "Pulmonary artery"
        ],
        "answer": "Coronary artery",
        "difficulty": "medium",
        "topic": "Coronary Circulation",
        "explanation": "Coronary arteries supply oxygenated blood to the myocardium."
    },
    {
        "id": 80,
        "question": "Which lymphatic organ filters blood and removes old red blood cells?",
        "options": [
            "Thymus",
            "Spleen",
            "Lymph node",
            "Tonsils"
        ],
        "answer": "Spleen",
        "difficulty": "medium",
        "topic": "Lymphatic System",
        "explanation": "The spleen filters blood, removes old red blood cells, and contributes to immune function."
    },
    {
        "id": 81,
        "question": "Which structure in the respiratory system produces sound?",
        "options": [
            "Trachea",
            "Larynx",
            "Bronchi",
            "Alveoli"
        ],
        "answer": "Larynx",
        "difficulty": "easy",
        "topic": "Respiratory System",
        "explanation": "The larynx, or voice box, contains vocal cords that produce sound."
    },
    {
        "id": 82,
        "question": "Which structure forms the smallest branches of the bronchial tree?",
        "options": [
            "Bronchi",
            "Bronchioles",
            "Alveoli",
            "Trachea"
        ],
        "answer": "Bronchioles",
        "difficulty": "medium",
        "topic": "Bronchial Tree",
        "explanation": "Bronchioles are the smallest branches of the bronchial tree, leading to alveoli."
    },
    {
        "id": 83,
        "question": "Which muscle is primarily responsible for inhalation?",
        "options": [
            "Diaphragm",
            "Rectus abdominis",
            "Pectoralis major",
            "Trapezius"
        ],
        "answer": "Diaphragm",
        "difficulty": "easy",
        "topic": "Respiratory Muscles",
        "explanation": "The diaphragm contracts to expand the thoracic cavity, facilitating inhalation."
    },
    {
        "id": 84,
        "question": "What is the primary site of gas exchange in the lungs?",
        "options": [
            "Bronchioles",
            "Alveoli",
            "Bronchi",
            "Trachea"
        ],
        "answer": "Alveoli",
        "difficulty": "easy",
        "topic": "Gas Exchange Structures",
        "explanation": "Alveoli are thin-walled sacs where oxygen and carbon dioxide are exchanged with blood."
    },
    {
        "id": 85,
        "question": "Which part of the alimentary canal is responsible for nutrient absorption?",
        "options": [
            "Stomach",
            "Small intestine",
            "Large intestine",
            "Esophagus"
        ],
        "answer": "Small intestine",
        "difficulty": "easy",
        "topic": "Digestive System",
        "explanation": "The small intestine is the primary site for nutrient absorption due to its large surface area."
    },
    {
        "id": 86,
        "question": "Which accessory organ stores bile?",
        "options": [
            "Liver",
            "Pancreas",
            "Gallbladder",
            "Salivary glands"
        ],
        "answer": "Gallbladder",
        "difficulty": "easy",
        "topic": "Accessory Organs",
        "explanation": "The gallbladder stores and concentrates bile produced by the liver."
    },
    {
        "id": 87,
        "question": "Which structure anchors the intestines to the posterior abdominal wall?",
        "options": [
            "Peritoneum",
            "Mesentery",
            "Omentum",
            "Falciform ligament"
        ],
        "answer": "Mesentery",
        "difficulty": "medium",
        "topic": "Peritoneum and Mesenteries",
        "explanation": "The mesentery is a double fold of peritoneum that anchors the intestines."
    },
    {
        "id": 88,
        "question": "Which artery supplies blood to the stomach and liver?",
        "options": [
            "Celiac trunk",
            "Superior mesenteric artery",
            "Inferior mesenteric artery",
            "Renal artery"
        ],
        "answer": "Celiac trunk",
        "difficulty": "hard",
        "topic": "Blood Supply to GI Tract",
        "explanation": "The celiac trunk supplies blood to the stomach, liver, and spleen."
    },
    {
        "id": 89,
        "question": "What is the functional unit of the kidney?",
        "options": [
            "Glomerulus",
            "Nephron",
            "Ureter",
            "Renal pelvis"
        ],
        "answer": "Nephron",
        "difficulty": "easy",
        "topic": "Urinary System",
        "explanation": "The nephron is the structural and functional unit of the kidney, responsible for filtration and urine formation."
    },
    {
        "id": 90,
        "question": "Which structure in the nephron filters blood?",
        "options": [
            "Loop of Henle",
            "Proximal tubule",
            "Glomerulus",
            "Collecting duct"
        ],
        "answer": "Glomerulus",
        "difficulty": "medium",
        "topic": "Kidney Structure",
        "explanation": "The glomerulus is a network of capillaries that filters blood to form filtrate."
    },
    {
        "id": 91,
        "question": "Which structure controls urine release from the bladder?",
        "options": [
            "Ureter",
            "Urethra",
            "Internal urethral sphincter",
            "Renal artery"
        ],
        "answer": "Internal urethral sphincter",
        "difficulty": "medium",
        "topic": "Micturition and Urinary Control",
        "explanation": "The internal urethral sphincter regulates urine flow from the bladder to the urethra."
    },
    {
        "id": 92,
        "question": "Which structure in the male reproductive system stores sperm?",
        "options": [
            "Testes",
            "Epididymis",
            "Vas deferens",
            "Prostate gland"
        ],
        "answer": "Epididymis",
        "difficulty": "easy",
        "topic": "Male Reproductive System",
        "explanation": "The epididymis stores and matures sperm produced by the testes."
    },
    {
        "id": 93,
        "question": "Which accessory gland in the male reproductive system produces seminal fluid?",
        "options": [
            "Testes",
            "Seminal vesicles",
            "Epididymis",
            "Bulbourethral gland"
        ],
        "answer": "Seminal vesicles",
        "difficulty": "medium",
        "topic": "Male Reproductive System",
        "explanation": "Seminal vesicles produce a significant portion of seminal fluid, nourishing sperm."
    },
    {
        "id": 94,
        "question": "Which structure in the female reproductive system is the site of embryo implantation?",
        "options": [
            "Ovary",
            "Uterus",
            "Fallopian tube",
            "Vagina"
        ],
        "answer": "Uterus",
        "difficulty": "easy",
        "topic": "Female Reproductive System",
        "explanation": "The uterus is where the embryo implants and develops during pregnancy."
    },
    {
        "id": 95,
        "question": "Which part of the female external genitalia protects the vaginal opening?",
        "options": [
            "Clitoris",
            "Labia minora",
            "Labia majora",
            "Mons pubis"
        ],
        "answer": "Labia majora",
        "difficulty": "medium",
        "topic": "Female Reproductive System",
        "explanation": "The labia majora are the outer folds of skin that protect the vaginal opening."
    },
    {
        "id": 96,
        "question": "Which endocrine gland regulates blood calcium levels?",
        "options": [
            "Thyroid",
            "Parathyroid",
            "Adrenal",
            "Pituitary"
        ],
        "answer": "Parathyroid",
        "difficulty": "medium",
        "topic": "Endocrine System",
        "explanation": "The parathyroid glands secrete parathyroid hormone to regulate blood calcium levels."
    },
    {
        "id": 97,
        "question": "Which structure connects the hypothalamus to the pituitary gland?",
        "options": [
            "Hypophyseal portal system",
            "Cerebral aqueduct",
            "Corpus callosum",
            "Thalamus"
        ],
        "answer": "Hypophyseal portal system",
        "difficulty": "hard",
        "topic": "Hypothalamic-Pituitary Axis",
        "explanation": "The hypophyseal portal system carries hormones from the hypothalamus to the anterior pituitary."
    },
    {
        "id": 98,
        "question": "Which lymphatic organ is critical for T cell maturation?",
        "options": [
            "Spleen",
            "Thymus",
            "Lymph nodes",
            "Tonsils"
        ],
        "answer": "Thymus",
        "difficulty": "easy",
        "topic": "Lymphatic and Immune System",
        "explanation": "The thymus is where T cells mature and develop immune competence."
    },
    {
        "id": 99,
        "question": "Which structure in the eye focuses light onto the retina?",
        "options": [
            "Cornea",
            "Lens",
            "Iris",
            "Sclera"
        ],
        "answer": "Lens",
        "difficulty": "easy",
        "topic": "Sensory Organs",
        "explanation": "The lens adjusts its shape to focus light onto the retina for clear vision."
    },
    {
        "id": 100,
        "question": "Which anatomical landmark is used to locate the heart for CPR?",
        "options": [
            "Xiphoid process",
            "Clavicle",
            "Sternal angle",
            "Umbilicus"
        ],
        "answer": "Sternal angle",
        "difficulty": "medium",
        "topic": "Surface Anatomy and Imaging",
        "explanation": "The sternal angle is a key landmark for locating the heart during CPR."
    },
    {
        "id": 101,
        "question": "Which anatomical term describes a structure closer to the midline of the body?",
        "options": [
            "Lateral",
            "Proximal",
            "Medial",
            "Distal"
        ],
        "answer": "Medial",
        "difficulty": "easy",
        "topic": "Anatomical Terminology",
        "explanation": "Medial refers to a structure closer to the body’s midline, as opposed to lateral."
    },
    {
        "id": 102,
        "question": "Which level of structural organization includes epithelial and connective tissues?",
        "options": [
            "Cell",
            "Tissue",
            "Organ",
            "System"
        ],
        "answer": "Tissue",
        "difficulty": "easy",
        "topic": "Levels of Structural Organization",
        "explanation": "Tissues, such as epithelial and connective, are groups of similar cells with a common function."
    },
    {
        "id": 103,
        "question": "Which bone is classified as a flat bone?",
        "options": [
            "Femur",
            "Scapula",
            "Carpal",
            "Vertebra"
        ],
        "answer": "Scapula",
        "difficulty": "medium",
        "topic": "Skeletal System",
        "explanation": "The scapula is a flat bone, providing a broad surface for muscle attachment."
    },
    {
        "id": 104,
        "question": "Which part of a long bone contains red bone marrow in adults?",
        "options": [
            "Diaphysis",
            "Epiphysis",
            "Periosteum",
            "Medullary cavity"
        ],
        "answer": "Epiphysis",
        "difficulty": "medium",
        "topic": "Bone Structure",
        "explanation": "In adults, red bone marrow, responsible for blood cell production, is found in the epiphysis."
    },
    {
        "id": 105,
        "question": "Which joint allows for flexion and extension only?",
        "options": [
            "Ball-and-socket joint",
            "Hinge joint",
            "Pivot joint",
            "Condyloid joint"
        ],
        "answer": "Hinge joint",
        "difficulty": "medium",
        "topic": "Joints",
        "explanation": "Hinge joints, like the elbow, permit movement in one plane, allowing flexion and extension."
    },
    {
        "id": 106,
        "question": "Which muscle is responsible for abducting the arm at the shoulder?",
        "options": [
            "Pectoralis major",
            "Deltoid",
            "Latissimus dorsi",
            "Trapezius"
        ],
        "answer": "Deltoid",
        "difficulty": "medium",
        "topic": "Upper Limb Muscles",
        "explanation": "The deltoid muscle abducts the arm at the shoulder joint."
    },
    {
        "id": 107,
        "question": "Which skin appendage is responsible for thermoregulation?",
        "options": [
            "Hair",
            "Nail",
            "Sweat gland",
            "Sebaceous gland"
        ],
        "answer": "Sweat gland",
        "difficulty": "easy",
        "topic": "Skin Appendages",
        "explanation": "Sweat glands produce sweat, which evaporates to cool the body."
    },
    {
        "id": 108,
        "question": "Which part of the brain regulates heart rate and breathing?",
        "options": [
            "Cerebellum",
            "Hypothalamus",
            "Medulla oblongata",
            "Thalamus"
        ],
        "answer": "Medulla oblongata",
        "difficulty": "medium",
        "topic": "Brain Anatomy",
        "explanation": "The medulla oblongata controls vital functions like heart rate and breathing."
    },
    {
        "id": 109,
        "question": "Which blood vessel returns oxygenated blood from the lungs to the heart?",
        "options": [
            "Pulmonary artery",
            "Pulmonary vein",
            "Aorta",
            "Superior vena cava"
        ],
        "answer": "Pulmonary vein",
        "difficulty": "easy",
        "topic": "Circulatory Pathways",
        "explanation": "The pulmonary vein carries oxygenated blood from the lungs to the left atrium."
    },
    {
        "id": 110,
        "question": "Which structure in the digestive system begins mechanical digestion?",
        "options": [
            "Mouth",
            "Esophagus",
            "Stomach",
            "Small intestine"
        ],
        "answer": "Mouth",
        "difficulty": "easy",
        "topic": "Digestive System",
        "explanation": "Mechanical digestion begins in the mouth through chewing."
    },
    {
        "id": 111,
        "question": "Which structure in the urinary system transports urine to the outside of the body?",
        "options": [
            "Ureter",
            "Urethra",
            "Bladder",
            "Renal vein"
        ],
        "answer": "Urethra",
        "difficulty": "easy",
        "topic": "Urinary System",
        "explanation": "The urethra carries urine from the bladder to the exterior."
    },
    {
        "id": 112,
        "question": "Which hormone is produced by the adrenal cortex to regulate metabolism?",
        "options": [
            "Epinephrine",
            "Cortisol",
            "Aldosterone",
            "Adrenaline"
        ],
        "answer": "Cortisol",
        "difficulty": "medium",
        "topic": "Endocrine System",
        "explanation": "Cortisol, produced by the adrenal cortex, regulates metabolism and stress responses."
    },
    {
        "id": 113,
        "question": "Which part of the ear is responsible for sound amplification?",
        "options": [
            "Cochlea",
            "Tympanic membrane",
            "Ossicles",
            "Semicircular canals"
        ],
        "answer": "Ossicles",
        "difficulty": "medium",
        "topic": "Sensory Organs",
        "explanation": "The ossicles (malleus, incus, stapes) amplify sound vibrations in the middle ear."
    },
    {
        "id": 114,
        "question": "Which imaging technique uses magnetic fields to visualize internal structures?",
        "options": [
            "X-ray",
            "CT scan",
            "MRI",
            "Ultrasound"
        ],
        "answer": "MRI",
        "difficulty": "easy",
        "topic": "Surface Anatomy and Imaging",
        "explanation": "MRI uses magnetic fields and radio waves to produce detailed images of internal structures."
    },
    {
        "id": 115,
        "question": "Which bone forms the cheekbone?",
        "options": [
            "Maxilla",
            "Zygomatic bone",
            "Mandible",
            "Nasal bone"
        ],
        "answer": "Zygomatic bone",
        "difficulty": "medium",
        "topic": "Axial Skeleton",
        "explanation": "The zygomatic bone forms the cheekbone and part of the eye socket."
    },
    {
        "id": 116,
        "question": "Which muscle is responsible for plantar flexion of the foot?",
        "options": [
            "Tibialis anterior",
            "Gastrocnemius",
            "Quadriceps",
            "Peroneus longus"
        ],
        "answer": "Gastrocnemius",
        "difficulty": "medium",
        "topic": "Lower Limb Muscles",
        "explanation": "The gastrocnemius muscle causes plantar flexion, as in pointing the toes."
    },
    {
        "id": 117,
        "question": "Which layer of the skin is primarily composed of dead cells?",
        "options": [
            "Stratum basale",
            "Stratum corneum",
            "Dermis",
            "Hypodermis"
        ],
        "answer": "Stratum corneum",
        "difficulty": "medium",
        "topic": "Integumentary System",
        "explanation": "The stratum corneum is the outermost layer of the epidermis, composed of dead keratinocytes."
    },
    {
        "id": 118,
        "question": "Which cranial nerve controls tongue movement?",
        "options": [
            "Hypoglossal nerve",
            "Glossopharyngeal nerve",
            "Vagus nerve",
            "Trigeminal nerve"
        ],
        "answer": "Hypoglossal nerve",
        "difficulty": "hard",
        "topic": "Peripheral Nervous System",
        "explanation": "The hypoglossal nerve (cranial nerve XII) innervates muscles for tongue movement."
    },
    {
        "id": 119,
        "question": "Which part of the respiratory system filters incoming air?",
        "options": [
            "Nasal cavity",
            "Larynx",
            "Bronchi",
            "Alveoli"
        ],
        "answer": "Nasal cavity",
        "difficulty": "easy",
        "topic": "Respiratory System",
        "explanation": "The nasal cavity filters, warms, and humidifies air entering the respiratory system."
    },
    {
        "id": 120,
        "question": "Which artery supplies blood to the small intestine?",
        "options": [
            "Celiac trunk",
            "Superior mesenteric artery",
            "Inferior mesenteric artery",
            "Hepatic artery"
        ],
        "answer": "Superior mesenteric artery",
        "difficulty": "hard",
        "topic": "Blood Supply to GI Tract",
        "explanation": "The superior mesenteric artery supplies blood to the small intestine and parts of the colon."
    },
    {
        "id": 121,
        "question": "Which structure in the female reproductive system produces progesterone?",
        "options": [
            "Ovary",
            "Uterus",
            "Fallopian tube",
            "Cervix"
        ],
        "answer": "Ovary",
        "difficulty": "easy",
        "topic": "Female Reproductive System",
        "explanation": "The ovaries produce progesterone, which supports pregnancy."
    },
    {
        "id": 122,
        "question": "Which lymphatic structure is located in the oropharynx?",
        "options": [
            "Thymus",
            "Spleen",
            "Palatine tonsils",
            "Lymph nodes"
        ],
        "answer": "Palatine tonsils",
        "difficulty": "medium",
        "topic": "Lymphatic and Immune System",
        "explanation": "The palatine tonsils are located in the oropharynx, contributing to immune defense."
    },
    {
        "id": 123,
        "question": "Which structure in the eye controls the amount of light entering?",
        "options": [
            "Cornea",
            "Iris",
            "Lens",
            "Retina"
        ],
        "answer": "Iris",
        "difficulty": "easy",
        "topic": "Sensory Organs",
        "explanation": "The iris adjusts the pupil size to regulate light entry."
    },
    {
        "id": 124,
        "question": "Which imaging technique is best for visualizing soft tissues like muscles?",
        "options": [
            "X-ray",
            "CT scan",
            "MRI",
            "Ultrasound"
        ],
        "answer": "MRI",
        "difficulty": "medium",
        "topic": "Surface Anatomy and Imaging",
        "explanation": "MRI provides high-resolution images of soft tissues like muscles and organs."
    },
    {
        "id": 125,
        "question": "Which bone articulates with the acetabulum to form the hip joint?",
        "options": [
            "Femur",
            "Ilium",
            "Tibia",
            "Sacrum"
        ],
        "answer": "Femur",
        "difficulty": "medium",
        "topic": "Appendicular Skeleton",
        "explanation": "The head of the femur articulates with the acetabulum of the pelvis to form the hip joint."
    },
    {
        "id": 126,
        "question": "Which muscle stabilizes the scapula during arm movement?",
        "options": [
            "Pectoralis major",
            "Trapezius",
            "Deltoid",
            "Biceps brachii"
        ],
        "answer": "Trapezius",
        "difficulty": "medium",
        "topic": "Upper Limb Muscles",
        "explanation": "The trapezius stabilizes and moves the scapula during arm actions."
    },
    {
        "id": 127,
        "question": "Which part of the brain processes auditory information?",
        "options": [
            "Occipital lobe",
            "Temporal lobe",
            "Parietal lobe",
            "Frontal lobe"
        ],
        "answer": "Temporal lobe",
        "difficulty": "medium",
        "topic": "Brain Anatomy",
        "explanation": "The temporal lobe contains the auditory cortex, responsible for processing sound."
    },
    {
        "id": 128,
        "question": "Which structure in the digestive system stores feces before elimination?",
        "options": [
            "Rectum",
            "Sigmoid colon",
            "Cecum",
            "Ileum"
        ],
        "answer": "Rectum",
        "difficulty": "easy",
        "topic": "Digestive System",
        "explanation": "The rectum stores feces prior to their elimination through the anus."
    },
    {
        "id": 129,
        "question": "Which hormone regulates blood pressure by acting on the kidneys?",
        "options": [
            "Aldosterone",
            "Insulin",
            "Thyroxine",
            "Growth hormone"
        ],
        "answer": "Aldosterone",
        "difficulty": "hard",
        "topic": "Endocrine System",
        "explanation": "Aldosterone, produced by the adrenal cortex, regulates blood pressure by promoting sodium and water retention."
    },
    {
        "id": 130,
        "question": "Which part of the ear maintains equilibrium?",
        "options": [
            "Cochlea",
            "Tympanic membrane",
            "Semicircular canals",
            "Auditory nerve"
        ],
        "answer": "Semicircular canals",
        "difficulty": "medium",
        "topic": "Sensory Organs",
        "explanation": "The semicircular canals detect rotational movements, aiding balance."
    },
    {
        "id": 131,
        "question": "Which bone protects the brain?",
        "options": [
            "Sternum",
            "Cranium",
            "Clavicle",
            "Pelvis"
        ],
        "answer": "Cranium",
        "difficulty": "easy",
        "topic": "Axial Skeleton",
        "explanation": "The cranium, part of the skull, encases and protects the brain."
    },
    {
        "id": 132,
        "question": "Which muscle is involved in chewing?",
        "options": [
            "Temporalis",
            "Orbicularis oculi",
            "Zygomaticus",
            "Sternocleidomastoid"
        ],
        "answer": "Temporalis",
        "difficulty": "medium",
        "topic": "Head and Neck Muscles",
        "explanation": "The temporalis muscle elevates the mandible for chewing."
    },
    {
        "id": 133,
        "question": "Which skin layer contains melanocytes?",
        "options": [
            "Stratum corneum",
            "Stratum basale",
            "Dermis",
            "Hypodermis"
        ],
        "answer": "Stratum basale",
        "difficulty": "hard",
        "topic": "Integumentary System",
        "explanation": "Melanocytes, which produce melanin, are located in the stratum basale of the epidermis."
    },
    {
        "id": 134,
        "question": "Which nerve innervates the diaphragm for breathing?",
        "options": [
            "Vagus nerve",
            "Phrenic nerve",
            "Sciatic nerve",
            "Trigeminal nerve"
        ],
        "answer": "Phrenic nerve",
        "difficulty": "medium",
        "topic": "Peripheral Nervous System",
        "explanation": "The phrenic nerve innervates the diaphragm, controlling breathing."
    },
    {
        "id": 135,
        "question": "Which structure in the respiratory system contains vocal cords?",
        "options": [
            "Trachea",
            "Larynx",
            "Pharynx",
            "Bronchi"
        ],
        "answer": "Larynx",
        "difficulty": "easy",
        "topic": "Respiratory System",
        "explanation": "The larynx houses the vocal cords, responsible for sound production."
    },
    {
        "id": 136,
        "question": "Which structure in the male reproductive system transports sperm to the urethra?",
        "options": [
            "Epididymis",
            "Vas deferens",
            "Seminal vesicles",
            "Prostate gland"
        ],
        "answer": "Vas deferens",
        "difficulty": "medium",
        "topic": "Male Reproductive System",
        "explanation": "The vas deferens transports mature sperm from the epididymis to the urethra."
    },
    {
        "id": 137,
        "question": "Which lymphatic structure is involved in immune surveillance in the throat?",
        "options": [
            "Spleen",
            "Thymus",
            "Pharyngeal tonsils",
            "Lymph nodes"
        ],
        "answer": "Pharyngeal tonsils",
        "difficulty": "medium",
        "topic": "Lymphatic and Immune System",
        "explanation": "Pharyngeal tonsils (adenoids) monitor and respond to pathogens in the throat."
    },
    {
        "id": 138,
        "question": "Which structure in the eye contains photoreceptors?",
        "options": [
            "Cornea",
            "Lens",
            "Retina",
            "Iris"
        ],
        "answer": "Retina",
        "difficulty": "easy",
        "topic": "Sensory Organs",
        "explanation": "The retina contains photoreceptors (rods and cones) for detecting light."
    },
    {
        "id": 139,
        "question": "Which imaging technique uses sound waves to visualize a fetus?",
        "options": [
            "X-ray",
            "CT scan",
            "MRI",
            "Ultrasound"
        ],
        "answer": "Ultrasound",
        "difficulty": "easy",
        "topic": "Surface Anatomy and Imaging",
        "explanation": "Ultrasound uses sound waves to create images, commonly used for fetal visualization."
    },
    {
        "id": 140,
        "question": "Which bone forms the heel of the foot?",
        "options": [
            "Talus",
            "Calcaneus",
            "Navicular",
            "Cuboid"
        ],
        "answer": "Calcaneus",
        "difficulty": "medium",
        "topic": "Appendicular Skeleton",
        "explanation": "The calcaneus is the largest tarsal bone, forming the heel."
    },
    {
        "id": 141,
        "question": "Which muscle group flexes the spine?",
        "options": [
            "Erector spinae",
            "Rectus abdominis",
            "Latissimus dorsi",
            "Trapezius"
        ],
        "answer": "Rectus abdominis",
        "difficulty": "medium",
        "topic": "Thorax and Abdomen Muscles",
        "explanation": "The rectus abdominis flexes the spine, as in performing a sit-up."
    },
    {
        "id": 142,
        "question": "Which part of the brain relays sensory and motor signals?",
        "options": [
            "Cerebellum",
            "Thalamus",
            "Hypothalamus",
            "Medulla oblongata"
        ],
        "answer": "Thalamus",
        "difficulty": "medium",
        "topic": "Brain Anatomy",
        "explanation": "The thalamus acts as a relay station for sensory and motor signals to the cerebral cortex."
    },
    {
        "id": 143,
        "question": "Which structure in the digestive system produces digestive enzymes?",
        "options": [
            "Liver",
            "Pancreas",
            "Gallbladder",
            "Stomach"
        ],
        "answer": "Pancreas",
        "difficulty": "easy",
        "topic": "Accessory Organs",
        "explanation": "The pancreas produces digestive enzymes for carbohydrate, protein, and fat digestion."
    },
    {
        "id": 144,
        "question": "Which hormone is secreted by the anterior pituitary to stimulate the thyroid?",
        "options": [
            "ACTH",
            "TSH",
            "FSH",
            "LH"
        ],
        "answer": "TSH",
        "difficulty": "medium",
        "topic": "Endocrine System",
        "explanation": "Thyroid-stimulating hormone (TSH) stimulates the thyroid gland to produce thyroid hormones."
    },
    {
        "id": 145,
        "question": "Which structure in the ear detects sound vibrations?",
        "options": [
            "Tympanic membrane",
            "Semicircular canals",
            "Cochlea",
            "Auditory nerve"
        ],
        "answer": "Tympanic membrane",
        "difficulty": "easy",
        "topic": "Sensory Organs",
        "explanation": "The tympanic membrane (eardrum) vibrates in response to sound waves."
    },
    {
        "id": 146,
        "question": "Which bone forms the bridge of the nose?",
        "options": [
            "Zygomatic bone",
            "Nasal bone",
            "Maxilla",
            "Frontal bone"
        ],
        "answer": "Nasal bone",
        "difficulty": "medium",
        "topic": "Axial Skeleton",
        "explanation": "The nasal bones form the bridge of the nose."
    },
    {
        "id": 147,
        "question": "Which muscle rotates the head to the opposite side?",
        "options": [
            "Trapezius",
            "Sternocleidomastoid",
            "Platysma",
            "Masseter"
        ],
        "answer": "Sternocleidomastoid",
        "difficulty": "medium",
        "topic": "Head and Neck Muscles",
        "explanation": "The sternocleidomastoid rotates the head to the opposite side when acting unilaterally."
    },
    {
        "id": 148,
        "question": "Which skin appendage protects the fingertips?",
        "options": [
            "Hair",
            "Nail",
            "Sweat gland",
            "Sebaceous gland"
        ],
        "answer": "Nail",
        "difficulty": "easy",
        "topic": "Skin Appendages",
        "explanation": "Nails protect the fingertips and enhance sensory perception."
    },
    {
        "id": 149,
        "question": "Which part of the brain controls voluntary movement?",
        "options": [
            "Cerebellum",
            "Frontal lobe",
            "Occipital lobe",
            "Parietal lobe"
        ],
        "answer": "Frontal lobe",
        "difficulty": "easy",
        "topic": "Brain Anatomy",
        "explanation": "The frontal lobe, specifically the motor cortex, controls voluntary movements."
    },
    {
        "id": 150,
        "question": "Which structure in the female reproductive system supports lactation?",
        "options": [
            "Uterus",
            "Ovaries",
            "Mammary glands",
            "Fallopian tubes"
        ],
        "answer": "Mammary glands",
        "difficulty": "easy",
        "topic": "Female Reproductive System",
        "explanation": "Mammary glands produce milk for lactation."
    },
    {
        "id": 151,
        "question": "Which anatomical term describes a structure farther from the point of attachment to the trunk?",
        "options": [
            "Proximal",
            "Distal",
            "Medial",
            "Lateral"
        ],
        "answer": "Distal",
        "difficulty": "easy",
        "topic": "Anatomical Terminology",
        "explanation": "Distal refers to a structure farther from the point of attachment to the trunk, as opposed to proximal."
    },
    {
        "id": 152,
        "question": "Which level of structural organization consists of two or more tissue types working together?",
        "options": [
            "Cell",
            "Tissue",
            "Organ",
            "System"
        ],
        "answer": "Organ",
        "difficulty": "easy",
        "topic": "Levels of Structural Organization",
        "explanation": "An organ, such as the heart, is composed of multiple tissue types (e.g., muscle, connective) performing a specific function."
    },
    {
        "id": 153,
        "question": "Which body cavity is located inferior to the diaphragm?",
        "options": [
            "Thoracic cavity",
            "Cranial cavity",
            "Abdominopelvic cavity",
            "Spinal cavity"
        ],
        "answer": "Abdominopelvic cavity",
        "difficulty": "medium",
        "topic": "Body Cavities and Membranes",
        "explanation": "The abdominopelvic cavity, containing the abdominal and pelvic organs, lies below the diaphragm."
    },
    {
        "id": 154,
        "question": "Which membrane covers the organs within the abdominal cavity?",
        "options": [
            "Parietal peritoneum",
            "Visceral peritoneum",
            "Pleura",
            "Pericardium"
        ],
        "answer": "Visceral peritoneum",
        "difficulty": "medium",
        "topic": "Body Cavities and Membranes",
        "explanation": "The visceral peritoneum covers the surfaces of abdominal organs, while the parietal peritoneum lines the cavity wall."
    },
    {
        "id": 155,
        "question": "Which bone is classified as an irregular bone?",
        "options": [
            "Humerus",
            "Scapula",
            "Vertebra",
            "Carpal"
        ],
        "answer": "Vertebra",
        "difficulty": "medium",
        "topic": "Skeletal System",
        "explanation": "Vertebrae are irregular bones due to their complex, non-uniform shape."
    },
    {
        "id": 156,
        "question": "Which structure in a long bone is primarily composed of spongy bone?",
        "options": [
            "Diaphysis",
            "Epiphysis",
            "Periosteum",
            "Medullary cavity"
        ],
        "answer": "Epiphysis",
        "difficulty": "medium",
        "topic": "Bone Structure",
        "explanation": "The epiphysis, located at the ends of long bones, is primarily composed of spongy bone."
    },
    {
        "id": 157,
        "question": "Which bone forms the lower jaw?",
        "options": [
            "Maxilla",
            "Mandible",
            "Zygomatic bone",
            "Frontal bone"
        ],
        "answer": "Mandible",
        "difficulty": "easy",
        "topic": "Axial Skeleton",
        "explanation": "The mandible is the only movable bone of the skull, forming the lower jaw."
    },
    {
        "id": 158,
        "question": "Which bone of the appendicular skeleton forms the knee cap?",
        "options": [
            "Patella",
            "Tibia",
            "Fibula",
            "Femur"
        ],
        "answer": "Patella",
        "difficulty": "easy",
        "topic": "Appendicular Skeleton",
        "explanation": "The patella, a sesamoid bone, protects the knee joint and enhances leverage."
    },
    {
        "id": 159,
        "question": "Which type of joint is found in the sutures of the skull?",
        "options": [
            "Synovial joint",
            "Cartilaginous joint",
            "Fibrous joint",
            "Hinge joint"
        ],
        "answer": "Fibrous joint",
        "difficulty": "medium",
        "topic": "Joints",
        "explanation": "Sutures are immovable fibrous joints that tightly interlock the bones of the skull."
    },
    {
        "id": 160,
        "question": "Which process replaces cartilage with bone during development?",
        "options": [
            "Endochondral ossification",
            "Intramembranous ossification",
            "Bone remodeling",
            "Appositional growth"
        ],
        "answer": "Endochondral ossification",
        "difficulty": "hard",
        "topic": "Bone Growth and Development",
        "explanation": "Endochondral ossification forms most bones by replacing a cartilage model with bone tissue."
    },
    {
        "id": 161,
        "question": "Which type of muscle is found in the walls of blood vessels?",
        "options": [
            "Skeletal muscle",
            "Cardiac muscle",
            "Smooth muscle",
            "Striated muscle"
        ],
        "answer": "Smooth muscle",
        "difficulty": "easy",
        "topic": "Muscular System",
        "explanation": "Smooth muscle, which is involuntary and non-striated, forms the walls of blood vessels."
    },
    {
        "id": 162,
        "question": "Which structure anchors skeletal muscle to bone?",
        "options": [
            "Ligament",
            "Tendon",
            "Fascia",
            "Cartilage"
        ],
        "answer": "Tendon",
        "difficulty": "easy",
        "topic": "Structure of Skeletal Muscle",
        "explanation": "Tendons are connective tissues that attach skeletal muscles to bones."
    },
    {
        "id": 163,
        "question": "Which molecule triggers muscle contraction by binding to troponin?",
        "options": [
            "Calcium",
            "Sodium",
            "ATP",
            "Potassium"
        ],
        "answer": "Calcium",
        "difficulty": "hard",
        "topic": "Muscle Contraction Mechanism",
        "explanation": "Calcium binds to troponin, exposing myosin-binding sites on actin to initiate muscle contraction."
    },
    {
        "id": 164,
        "question": "Which muscle closes the eye?",
        "options": [
            "Orbicularis oculi",
            "Zygomaticus major",
            "Buccinator",
            "Frontalis"
        ],
        "answer": "Orbicularis oculi",
        "difficulty": "medium",
        "topic": "Head and Neck Muscles",
        "explanation": "The orbicularis oculi is a circular muscle that closes the eyelid."
    },
    {
        "id": 165,
        "question": "Which muscle group adducts the thigh?",
        "options": [
            "Quadriceps femoris",
            "Hamstrings",
            "Adductors",
            "Gluteus medius"
        ],
        "answer": "Adductors",
        "difficulty": "medium",
        "topic": "Lower Limb Muscles",
        "explanation": "The adductor muscles, located on the medial thigh, bring the thigh toward the midline."
    },
    {
        "id": 166,
        "question": "Which layer of the skin is avascular?",
        "options": [
            "Epidermis",
            "Dermis",
            "Hypodermis",
            "Stratum corneum"
        ],
        "answer": "Epidermis",
        "difficulty": "medium",
        "topic": "Integumentary System",
        "explanation": "The epidermis lacks blood vessels and relies on diffusion from the dermis for nutrients."
    },
    {
        "id": 167,
        "question": "Which skin appendage produces cerumen?",
        "options": [
            "Sebaceous gland",
            "Sweat gland",
            "Ceruminous gland",
            "Mammary gland"
        ],
        "answer": "Ceruminous gland",
        "difficulty": "medium",
        "topic": "Skin Appendages",
        "explanation": "Ceruminous glands in the ear canal produce cerumen (earwax) to protect the ear."
    },
    {
        "id": 168,
        "question": "Which function of the skin involves the production of a vitamin?",
        "options": [
            "Protection",
            "Thermoregulation",
            "Vitamin D synthesis",
            "Sensory perception"
        ],
        "answer": "Vitamin D synthesis",
        "difficulty": "easy",
        "topic": "Functions of the Skin",
        "explanation": "The skin synthesizes vitamin D when exposed to UV light."
    },
    {
        "id": 169,
        "question": "Which type of injection delivers medication into the dermis?",
        "options": [
            "Intramuscular",
            "Subcutaneous",
            "Intradermal",
            "Intravenous"
        ],
        "answer": "Intradermal",
        "difficulty": "medium",
        "topic": "Skin Layers and Clinical Relevance",
        "explanation": "Intradermal injections, such as for TB tests, deliver medication into the dermis."
    },
    {
        "id": 170,
        "question": "Which part of the brain integrates sensory information for spatial awareness?",
        "options": [
            "Frontal lobe",
            "Parietal lobe",
            "Temporal lobe",
            "Occipital lobe"
        ],
        "answer": "Parietal lobe",
        "difficulty": "medium",
        "topic": "Brain Anatomy",
        "explanation": "The parietal lobe processes sensory information for spatial orientation and body awareness."
    },
    {
        "id": 171,
        "question": "Which cranial nerve is responsible for smell?",
        "options": [
            "Olfactory nerve",
            "Optic nerve",
            "Trigeminal nerve",
            "Vagus nerve"
        ],
        "answer": "Olfactory nerve",
        "difficulty": "easy",
        "topic": "Peripheral Nervous System",
        "explanation": "The olfactory nerve (cranial nerve I) transmits smell signals to the brain."
    },
    {
        "id": 172,
        "question": "Which division of the autonomic nervous system prepares the body for 'fight or flight'?",
        "options": [
            "Parasympathetic",
            "Sympathetic",
            "Somatic",
            "Enteric"
        ],
        "answer": "Sympathetic",
        "difficulty": "easy",
        "topic": "Autonomic Nervous System",
        "explanation": "The sympathetic nervous system activates the body’s stress response, increasing heart rate and alertness."
    },
    {
        "id": 173,
        "question": "Which structure protects the brain and spinal cord from trauma?",
        "options": [
            "Cerebrospinal fluid",
            "Blood-brain barrier",
            "Meninges",
            "Ventricles"
        ],
        "answer": "Meninges",
        "difficulty": "easy",
        "topic": "Brain Anatomy",
        "explanation": "The meninges (dura, arachnoid, pia mater) are protective layers surrounding the brain and spinal cord."
    },
    {
        "id": 174,
        "question": "Which pathway controls voluntary movement?",
        "options": [
            "Spinothalamic tract",
            "Corticospinal tract",
            "Reticulospinal tract",
            "Vestibulospinal tract"
        ],
        "answer": "Corticospinal tract",
        "difficulty": "hard",
        "topic": "Sensory and Motor Pathways",
        "explanation": "The corticospinal tract transmits motor signals from the brain to muscles for voluntary movement."
    },
    {
        "id": 175,
        "question": "Which heart chamber receives deoxygenated blood from the body?",
        "options": [
            "Left atrium",
            "Right atrium",
            "Left ventricle",
            "Right ventricle"
        ],
        "answer": "Right atrium",
        "difficulty": "easy",
        "topic": "Cardiovascular System",
        "explanation": "The right atrium receives deoxygenated blood from the body via the superior and inferior vena cava."
    },
    {
        "id": 176,
        "question": "Which blood vessel type facilitates gas exchange?",
        "options": [
            "Artery",
            "Vein",
            "Capillary",
            "Arteriole"
        ],
        "answer": "Capillary",
        "difficulty": "easy",
        "topic": "Blood Vessels",
        "explanation": "Capillaries have thin walls that allow gas and nutrient exchange between blood and tissues."
    },
    {
        "id": 177,
        "question": "Which circulatory pathway supplies blood to the liver from the intestines?",
        "options": [
            "Systemic circulation",
            "Pulmonary circulation",
            "Portal circulation",
            "Coronary circulation"
        ],
        "answer": "Portal circulation",
        "difficulty": "medium",
        "topic": "Circulatory Pathways",
        "explanation": "The hepatic portal system carries nutrient-rich blood from the intestines to the liver."
    },
    {
        "id": 178,
        "question": "Which vein drains blood from the heart muscle?",
        "options": [
            "Coronary sinus",
            "Superior vena cava",
            "Pulmonary vein",
            "Inferior vena cava"
        ],
        "answer": "Coronary sinus",
        "difficulty": "hard",
        "topic": "Coronary Circulation",
        "explanation": "The coronary sinus collects deoxygenated blood from the heart and drains it into the right atrium."
    },
    {
        "id": 179,
        "question": "Which lymphatic structure drains lymph from the lower body?",
        "options": [
            "Thoracic duct",
            "Right lymphatic duct",
            "Cisterna chyli",
            "Spleen"
        ],
        "answer": "Thoracic duct",
        "difficulty": "hard",
        "topic": "Lymphatic System",
        "explanation": "The thoracic duct drains lymph from the lower body and left upper body into the venous system."
    },
    {
        "id": 180,
        "question": "Which structure in the respiratory system connects the nasal cavity to the larynx?",
        "options": [
            "Pharynx",
            "Trachea",
            "Bronchi",
            "Esophagus"
        ],
        "answer": "Pharynx",
        "difficulty": "easy",
        "topic": "Respiratory System",
        "explanation": "The pharynx serves as a passageway for air from the nasal cavity to the larynx."
    },
    {
        "id": 181,
        "question": "Which structure surrounds the lungs to reduce friction during breathing?",
        "options": [
            "Pericardium",
            "Pleura",
            "Peritoneum",
            "Meninges"
        ],
        "answer": "Pleura",
        "difficulty": "medium",
        "topic": "Structure of Lungs and Pleura",
        "explanation": "The pleura, a double-layered membrane, reduces friction between the lungs and chest wall."
    },
    {
        "id": 182,
        "question": "Which muscle assists in forced exhalation?",
        "options": [
            "External intercostals",
            "Internal intercostals",
            "Diaphragm",
            "Pectoralis minor"
        ],
        "answer": "Internal intercostals",
        "difficulty": "hard",
        "topic": "Respiratory Muscles",
        "explanation": "Internal intercostal muscles depress the ribs during forced exhalation."
    },
    {
        "id": 183,
        "question": "Which part of the alimentary canal is responsible for water absorption?",
        "options": [
            "Stomach",
            "Small intestine",
            "Large intestine",
            "Esophagus"
        ],
        "answer": "Large intestine",
        "difficulty": "easy",
        "topic": "Digestive System",
        "explanation": "The large intestine absorbs water from indigestible food, forming feces."
    },
    {
        "id": 184,
        "question": "Which accessory organ secretes saliva to begin digestion?",
        "options": [
            "Liver",
            "Pancreas",
            "Salivary glands",
            "Gallbladder"
        ],
        "answer": "Salivary glands",
        "difficulty": "easy",
        "topic": "Accessory Organs",
        "explanation": "Salivary glands secrete saliva, which contains enzymes to initiate carbohydrate digestion."
    },
    {
        "id": 185,
        "question": "Which structure suspends the stomach in the abdominal cavity?",
        "options": [
            "Greater omentum",
            "Mesentery",
            "Falciform ligament",
            "Lesser omentum"
        ],
        "answer": "Lesser omentum",
        "difficulty": "hard",
        "topic": "Peritoneum and Mesenteries",
        "explanation": "The lesser omentum connects the stomach and duodenum to the liver."
    },
    {
        "id": 186,
        "question": "Which artery supplies blood to the descending colon?",
        "options": [
            "Celiac trunk",
            "Superior mesenteric artery",
            "Inferior mesenteric artery",
            "Renal artery"
        ],
        "answer": "Inferior mesenteric artery",
        "difficulty": "hard",
        "topic": "Blood Supply to GI Tract",
        "explanation": "The inferior mesenteric artery supplies the descending colon, sigmoid colon, and rectum."
    },
    {
        "id": 187,
        "question": "Which part of the nephron reabsorbs most of the filtered water?",
        "options": [
            "Glomerulus",
            "Proximal tubule",
            "Loop of Henle",
            "Distal tubule"
        ],
        "answer": "Proximal tubule",
        "difficulty": "hard",
        "topic": "Kidney Structure",
        "explanation": "The proximal tubule reabsorbs about 65% of filtered water and solutes."
    },
    {
        "id": 188,
        "question": "Which structure stores urine before it is excreted?",
        "options": [
            "Kidney",
            "Ureter",
            "Bladder",
            "Urethra"
        ],
        "answer": "Bladder",
        "difficulty": "easy",
        "topic": "Urinary System",
        "explanation": "The urinary bladder stores urine until it is released during micturition."
    },
    {
        "id": 189,
        "question": "Which structure in the male reproductive system produces testosterone?",
        "options": [
            "Epididymis",
            "Testes",
            "Prostate gland",
            "Seminal vesicles"
        ],
        "answer": "Testes",
        "difficulty": "easy",
        "topic": "Male Reproductive System",
        "explanation": "The testes produce testosterone and sperm in the seminiferous tubules."
    },
    {
        "id": 190,
        "question": "Which gland in the male reproductive system contributes fluid to neutralize vaginal acidity?",
        "options": [
            "Seminal vesicles",
            "Prostate gland",
            "Bulbourethral gland",
            "Testes"
        ],
        "answer": "Bulbourethral gland",
        "difficulty": "hard",
        "topic": "Male Reproductive System",
        "explanation": "The bulbourethral gland secretes a fluid that neutralizes the acidic environment of the vagina."
    },
    {
        "id": 191,
        "question": "Which structure in the female reproductive system transports the egg to the uterus?",
        "options": [
            "Ovary",
            "Uterus",
            "Fallopian tube",
            "Vagina"
        ],
        "answer": "Fallopian tube",
        "difficulty": "easy",
        "topic": "Female Reproductive System",
        "explanation": "The fallopian tube transports the egg from the ovary to the uterus and is the site of fertilization."
    },
    {
        "id": 192,
        "question": "Which part of the female reproductive system connects the uterus to the vagina?",
        "options": [
            "Cervix",
            "Fallopian tube",
            "Ovary",
            "Endometrium"
        ],
        "answer": "Cervix",
        "difficulty": "easy",
        "topic": "Female Reproductive System",
        "explanation": "The cervix is the lower part of the uterus that opens into the vagina."
    },
    {
        "id": 193,
        "question": "Which endocrine gland is located in the neck and regulates metabolism?",
        "options": [
            "Pituitary",
            "Thyroid",
            "Adrenal",
            "Pancreas"
        ],
        "answer": "Thyroid",
        "difficulty": "easy",
        "topic": "Endocrine System",
        "explanation": "The thyroid gland, located in the neck, produces hormones that regulate metabolism."
    },
    {
        "id": 194,
        "question": "Which hormone is released by the posterior pituitary to regulate water balance?",
        "options": [
            "Oxytocin",
            "Antidiuretic hormone",
            "Growth hormone",
            "Prolactin"
        ],
        "answer": "Antidiuretic hormone",
        "difficulty": "medium",
        "topic": "Endocrine System",
        "explanation": "Antidiuretic hormone (ADH) promotes water reabsorption in the kidneys."
    },
    {
        "id": 195,
        "question": "Which lymphatic structure is located in the upper left abdomen?",
        "options": [
            "Thymus",
            "Spleen",
            "Tonsils",
            "Lymph nodes"
        ],
        "answer": "Spleen",
        "difficulty": "easy",
        "topic": "Lymphatic and Immune System",
        "explanation": "The spleen, located in the upper left abdomen, filters blood and supports immune function."
    },
    {
        "id": 196,
        "question": "Which structure in the eye bends light to focus it on the retina?",
        "options": [
            "Cornea",
            "Iris",
            "Sclera",
            "Pupil"
        ],
        "answer": "Cornea",
        "difficulty": "medium",
        "topic": "Sensory Organs",
        "explanation": "The cornea is the transparent outer layer that bends light to focus it on the retina."
    },
    {
        "id": 197,
        "question": "Which part of the tongue contains taste buds?",
        "options": [
            "Papillae",
            "Sulcus terminalis",
            "Lingual tonsils",
            "Frenulum"
        ],
        "answer": "Papillae",
        "difficulty": "medium",
        "topic": "Sensory Organs",
        "explanation": "Papillae on the tongue surface contain taste buds for detecting flavors."
    },
    {
        "id": 198,
        "question": "Which anatomical landmark is used to locate the appendix?",
        "options": [
            "Umbilicus",
            "McBurney’s point",
            "Sternal angle",
            "Xiphoid process"
        ],
        "answer": "McBurney’s point",
        "difficulty": "hard",
        "topic": "Surface Anatomy and Imaging",
        "explanation": "McBurney’s point, located in the right lower quadrant, is used to diagnose appendicitis."
    },
    {
        "id": 199,
        "question": "Which bone forms the lateral part of the ankle?",
        "options": [
            "Tibia",
            "Fibula",
            "Talus",
            "Calcaneus"
        ],
        "answer": "Fibula",
        "difficulty": "medium",
        "topic": "Appendicular Skeleton",
        "explanation": "The fibula forms the lateral malleolus, the bony prominence on the outer ankle."
    },
    {
        "id": 200,
        "question": "Which muscle extends the spine?",
        "options": [
            "Rectus abdominis",
            "Erector spinae",
            "Obliques",
            "Transversus abdominis"
        ],
        "answer": "Erector spinae",
        "difficulty": "medium",
        "topic": "Back Muscles",
        "explanation": "The erector spinae group extends the spine, maintaining posture."
    },
    {
        "id": 201,
        "question": "Which clinical anatomy branch studies structures through imaging techniques?",
        "options": [
            "Gross anatomy",
            "Microscopic anatomy",
            "Radiological anatomy",
            "Developmental anatomy"
        ],
        "answer": "Radiological anatomy",
        "difficulty": "medium",
        "topic": "Introduction to Human Anatomy",
        "explanation": "Radiological anatomy uses imaging techniques like X-rays and MRIs to study structures."
    },
    {
        "id": 202,
        "question": "Which bone forms the medial part of the eye socket?",
        "options": [
            "Zygomatic bone",
            "Lacrimal bone",
            "Nasal bone",
            "Maxilla"
        ],
        "answer": "Lacrimal bone",
        "difficulty": "hard",
        "topic": "Axial Skeleton",
        "explanation": "The lacrimal bone forms part of the medial wall of the orbit, housing the lacrimal sac."
    },
    {
        "id": 203,
        "question": "Which muscle rotates the forearm to face the palm upward?",
        "options": [
            "Pronator teres",
            "Supinator",
            "Brachioradialis",
            "Biceps brachii"
        ],
        "answer": "Supinator",
        "difficulty": "hard",
        "topic": "Upper Limb Muscles",
        "explanation": "The supinator muscle rotates the forearm into supination, turning the palm upward."
    },
    {
        "id": 204,
        "question": "Which skin receptor detects pressure?",
        "options": [
            "Meissner’s corpuscle",
            "Pacinian corpuscle",
            "Merkel disc",
            "Free nerve ending"
        ],
        "answer": "Pacinian corpuscle",
        "difficulty": "hard",
        "topic": "Sensory Organs",
        "explanation": "Pacinian corpuscles are deep in the skin and detect pressure and vibration."
    },
    {
        "id": 205,
        "question": "Which cranial nerve innervates the muscles of mastication?",
        "options": [
            "Facial nerve",
            "Trigeminal nerve",
            "Glossopharyngeal nerve",
            "Hypoglossal nerve"
        ],
        "answer": "Trigeminal nerve",
        "difficulty": "medium",
        "topic": "Peripheral Nervous System",
        "explanation": "The trigeminal nerve (cranial nerve V) innervates muscles involved in chewing."
    },
    {
        "id": 206,
        "question": "Which structure in the heart generates electrical impulses for contraction?",
        "options": [
            "Sinoatrial node",
            "Atrioventricular node",
            "Bundle of His",
            "Purkinje fibers"
        ],
        "answer": "Sinoatrial node",
        "difficulty": "medium",
        "topic": "Cardiovascular System",
        "explanation": "The sinoatrial node, located in the right atrium, acts as the heart’s pacemaker."
    },
    {
        "id": 207,
        "question": "Which part of the respiratory system prevents food from entering the airway?",
        "options": [
            "Epiglottis",
            "Larynx",
            "Pharynx",
            "Trachea"
        ],
        "answer": "Epiglottis",
        "difficulty": "easy",
        "topic": "Respiratory System",
        "explanation": "The epiglottis closes over the larynx during swallowing to prevent food from entering the airway."
    },
    {
        "id": 208,
        "question": "Which structure in the digestive system is the first part of the small intestine?",
        "options": [
            "Jejunum",
            "Ileum",
            "Duodenum",
            "Cecum"
        ],
        "answer": "Duodenum",
        "difficulty": "medium",
        "topic": "Digestive System",
        "explanation": "The duodenum is the first segment of the small intestine, receiving chyme from the stomach."
    },
    {
        "id": 209,
        "question": "Which artery supplies blood to the kidneys?",
        "options": [
            "Renal artery",
            "Hepatic artery",
            "Mesenteric artery",
            "Coronary artery"
        ],
        "answer": "Renal artery",
        "difficulty": "medium",
        "topic": "Urinary System",
        "explanation": "The renal artery supplies oxygenated blood to the kidneys for filtration."
    },
    {
        "id": 210,
        "question": "Which hormone stimulates milk production in the mammary glands?",
        "options": [
            "Oxytocin",
            "Prolactin",
            "Estrogen",
            "Progesterone"
        ],
        "answer": "Prolactin",
        "difficulty": "medium",
        "topic": "Endocrine System",
        "explanation": "Prolactin, secreted by the anterior pituitary, stimulates milk production in the mammary glands."
    },
    {
        "id": 211,
        "question": "Which lymphatic structure traps pathogens in the respiratory tract?",
        "options": [
            "Spleen",
            "Thymus",
            "Lymph nodes",
            "Pharyngeal tonsils"
        ],
        "answer": "Pharyngeal tonsils",
        "difficulty": "medium",
        "topic": "Lymphatic and Immune System",
        "explanation": "Pharyngeal tonsils (adenoids) trap pathogens entering through the respiratory tract."
    },
    {
        "id": 212,
        "question": "Which structure in the eye protects the anterior surface?",
        "options": [
            "Sclera",
            "Cornea",
            "Retina",
            "Choroid"
        ],
        "answer": "Cornea",
        "difficulty": "easy",
        "topic": "Sensory Organs",
        "explanation": "The cornea is the transparent anterior covering that protects the eye and refracts light."
    },
    {
        "id": 213,
        "question": "Which bone forms the posterior part of the skull?",
        "options": [
            "Frontal bone",
            "Parietal bone",
            "Occipital bone",
            "Temporal bone"
        ],
        "answer": "Occipital bone",
        "difficulty": "medium",
        "topic": "Axial Skeleton",
        "explanation": "The occipital bone forms the back and base of the skull, including the foramen magnum."
    },
    {
        "id": 214,
        "question": "Which muscle is responsible for smiling?",
        "options": [
            "Zygomaticus major",
            "Orbicularis oris",
            "Buccinator",
            "Masseter"
        ],
        "answer": "Zygomaticus major",
        "difficulty": "medium",
        "topic": "Head and Neck Muscles",
        "explanation": "The zygomaticus major pulls the corners of the mouth upward, producing a smile."
    },
    {
        "id": 215,
        "question": "Which skin layer contains collagen fibers for strength?",
        "options": [
            "Epidermis",
            "Dermis",
            "Hypodermis",
            "Stratum corneum"
        ],
        "answer": "Dermis",
        "difficulty": "easy",
        "topic": "Integumentary System",
        "explanation": "The dermis contains collagen fibers that provide strength and elasticity to the skin."
    },
    {
        "id": 216,
        "question": "Which part of the brain regulates body temperature?",
        "options": [
            "Cerebellum",
            "Hypothalamus",
            "Thalamus",
            "Medulla oblongata"
        ],
        "answer": "Hypothalamus",
        "difficulty": "medium",
        "topic": "Brain Anatomy",
        "explanation": "The hypothalamus regulates body temperature, hunger, and other homeostatic functions."
    },
    {
        "id": 217,
        "question": "Which structure in the respiratory system divides into the bronchi?",
        "options": [
            "Larynx",
            "Pharynx",
            "Trachea",
            "Epiglottis"
        ],
        "answer": "Trachea",
        "difficulty": "easy",
        "topic": "Respiratory System",
        "explanation": "The trachea bifurcates into the right and left bronchi, which enter the lungs."
    },
    {
        "id": 218,
        "question": "Which structure in the digestive system connects the mouth to the stomach?",
        "options": [
            "Pharynx",
            "Esophagus",
            "Duodenum",
            "Pylorus"
        ],
        "answer": "Esophagus",
        "difficulty": "easy",
        "topic": "Digestive System",
        "explanation": "The esophagus is a muscular tube that transports food from the mouth to the stomach."
    },
    {
        "id": 219,
        "question": "Which structure in the urinary system is lined with transitional epithelium?",
        "options": [
            "Kidney",
            "Ureter",
            "Bladder",
            "Renal artery"
        ],
        "answer": "Bladder",
        "difficulty": "hard",
        "topic": "Urinary System",
        "explanation": "The bladder is lined with transitional epithelium, which stretches to accommodate urine."
    },
    {
        "id": 220,
        "question": "Which hormone regulates blood glucose levels?",
        "options": [
            "Insulin",
            "Cortisol",
            "Aldosterone",
            "Thyroxine"
        ],
        "answer": "Insulin",
        "difficulty": "easy",
        "topic": "Endocrine System",
        "explanation": "Insulin, produced by the pancreas, lowers blood glucose by promoting cellular uptake."
    },
    {
        "id": 221,
        "question": "Which lymphatic structure is most prominent in children?",
        "options": [
            "Spleen",
            "Thymus",
            "Lymph nodes",
            "Tonsils"
        ],
        "answer": "Thymus",
        "difficulty": "medium",
        "topic": "Lymphatic and Immune System",
        "explanation": "The thymus is largest in children, where it supports T cell maturation, and shrinks with age."
    },
    {
        "id": 222,
        "question": "Which structure in the ear converts sound vibrations into nerve impulses?",
        "options": [
            "Tympanic membrane",
            "Ossicles",
            "Cochlea",
            "Semicircular canals"
        ],
        "answer": "Cochlea",
        "difficulty": "medium",
        "topic": "Sensory Organs",
        "explanation": "The cochlea contains hair cells that convert sound vibrations into nerve impulses."
    },
    {
        "id": 223,
        "question": "Which anatomical landmark is used to locate the trachea for intubation?",
        "options": [
            "Cricoid cartilage",
            "Xiphoid process",
            "Sternal angle",
            "Clavicle"
        ],
        "answer": "Cricoid cartilage",
        "difficulty": "hard",
        "topic": "Surface Anatomy and Imaging",
        "explanation": "The cricoid cartilage is a landmark for tracheal intubation and emergency airway procedures."
    },
    {
        "id": 224,
        "question": "Which bone forms the medial part of the ankle?",
        "options": [
            "Tibia",
            "Fibula",
            "Talus",
            "Calcaneus"
        ],
        "answer": "Tibia",
        "difficulty": "medium",
        "topic": "Appendicular Skeleton",
        "explanation": "The tibia forms the medial malleolus, the inner bony prominence of the ankle."
    },
    {
        "id": 225,
        "question": "Which muscle compresses the abdominal contents?",
        "options": [
            "Rectus abdominis",
            "Transversus abdominis",
            "Erector spinae",
            "Latissimus dorsi"
        ],
        "answer": "Transversus abdominis",
        "difficulty": "hard",
        "topic": "Thorax and Abdomen Muscles",
        "explanation": "The transversus abdominis compresses the abdominal contents, aiding in core stability."
    },
    {
        "id": 226,
        "question": "Which part of the brain connects the two cerebral hemispheres?",
        "options": [
            "Cerebellum",
            "Thalamus",
            "Corpus callosum",
            "Hypothalamus"
        ],
        "answer": "Corpus callosum",
        "difficulty": "easy",
        "topic": "Brain Anatomy",
        "explanation": "The corpus callosum is a band of nerve fibers connecting the left and right cerebral hemispheres."
    },
    {
        "id": 227,
        "question": "Which structure in the digestive system is a blind pouch at the start of the large intestine?",
        "options": [
            "Appendix",
            "Cecum",
            "Sigmoid colon",
            "Rectum"
        ],
        "answer": "Cecum",
        "difficulty": "medium",
        "topic": "Digestive System",
        "explanation": "The cecum is a pouch at the junction of the small and large intestines, with the appendix attached."
    },
    {
        "id": 228,
        "question": "Which structure in the male reproductive system protects the testes?",
        "options": [
            "Scrotum",
            "Epididymis",
            "Vas deferens",
            "Prostate gland"
        ],
        "answer": "Scrotum",
        "difficulty": "easy",
        "topic": "Male Reproductive System",
        "explanation": "The scrotum is an external sac that houses and protects the testes."
    },
    {
        "id": 229,
        "question": "Which structure in the eye contains blood vessels to nourish the retina?",
        "options": [
            "Sclera",
            "Cornea",
            "Choroid",
            "Iris"
        ],
        "answer": "Choroid",
        "difficulty": "hard",
        "topic": "Sensory Organs",
        "explanation": "The choroid is a vascular layer that supplies blood to the retina."
    },
    {
        "id": 230,
        "question": "Which imaging technique is best for detecting bone fractures?",
        "options": [
            "MRI",
            "Ultrasound",
            "X-ray",
            "CT scan"
        ],
        "answer": "X-ray",
        "difficulty": "easy",
        "topic": "Surface Anatomy and Imaging",
        "explanation": "X-rays are the most effective imaging technique for visualizing bone fractures."
    },
    {
        "id": 231,
        "question": "Which bone forms the upper part of the nasal septum?",
        "options": [
            "Ethmoid bone",
            "Nasal bone",
            "Vomer",
            "Maxilla"
        ],
        "answer": "Ethmoid bone",
        "difficulty": "hard",
        "topic": "Axial Skeleton",
        "explanation": "The perpendicular plate of the ethmoid bone forms the upper nasal septum."
    },
    {
        "id": 232,
        "question": "Which muscle is responsible for shoulder adduction?",
        "options": [
            "Deltoid",
            "Pectoralis major",
            "Trapezius",
            "Supraspinatus"
        ],
        "answer": "Pectoralis major",
        "difficulty": "medium",
        "topic": "Upper Limb Muscles",
        "explanation": "The pectoralis major adducts and medially rotates the shoulder."
    },
    {
        "id": 233,
        "question": "Which skin receptor detects light touch?",
        "options": [
            "Pacinian corpuscle",
            "Meissner’s corpuscle",
            "Ruffini ending",
            "Free nerve ending"
        ],
        "answer": "Meissner’s corpuscle",
        "difficulty": "hard",
        "topic": "Sensory Organs",
        "explanation": "Meissner’s corpuscles, located in the skin’s upper dermis, detect light touch and low-frequency vibration."
    },
    {
        "id": 234,
        "question": "Which part of the spinal cord contains motor neurons?",
        "options": [
            "Dorsal horn",
            "Ventral horn",
            "Lateral horn",
            "Central canal"
        ],
        "answer": "Ventral horn",
        "difficulty": "hard",
        "topic": "Spinal Cord Structure",
        "explanation": "The ventral horn of the spinal cord contains motor neurons."
    },
    {
        "id": 235,
        "question": "Which structure in the heart prevents backflow from the pulmonary artery?",
        "options": [
            "Mitral valve",
            "Tricuspid valve",
            "Pulmonary valve",
            "Aortic valve"
        ],
        "answer": "Pulmonary valve",
        "difficulty": "medium",
        "topic": "Cardiovascular System",
        "explanation": "The pulmonary valve prevents backflow from the pulmonary artery into the right ventricle."
    },
    {
        "id": 236,
        "question": "Which structure in the respiratory system is lined with cilia to trap debris?",
        "options": [
            "Alveoli",
            "Bronchi",
            "Larynx",
            "Pharynx"
        ],
        "answer": "Bronchi",
        "difficulty": "medium",
        "topic": "Bronchial Tree",
        "explanation": "The bronchi are lined with cilia that trap and move it upward to clear debris."
    },
    {
        "id": 237,
        "question": "Which part of the digestive system contains Peyer’s patches for immune function?",
        "options": [
            "Duodenum",
            "Jejunum",
            "Ileum",
            "Colon"
        ],
        "answer": "Ileum",
        "difficulty": "hard",
        "topic": "Digestive System",
        "explanation": "Peyer’s patches, lymphoid tissues in the ileum, monitor intestinal bacteria for immune responses."
    },
    {
        "id": 238,
        "question": "Which structure in the female reproductive system is homologous to the penis?",
        "options": [
            "Clitoris",
            "Labia majora",
            "Vagina",
            "Uterus"
        ],
        "answer": "Clitoris",
        "difficulty": "medium",
        "topic": "Female Reproductive System",
        "explanation": "The clitoris is homologous to the penis, sharing similar embryonic origins."
    },
    {
        "id": 239,
        "question": "Which hormone is secreted by the pineal gland to regulate sleep?",
        "options": [
            "Melatonin",
            "Cortisol",
            "Insulin",
            "Thyroxine"
        ],
        "answer": "Melatonin",
        "difficulty": "medium",
        "topic": "Endocrine System",
        "explanation": "The pineal gland secretes melatonin, which regulates sleep-wake cycles."
    },
    {
        "id": 240,
        "question": "Which structure in the lymphatic system filters lymph?",
        "options": [
            "Thymus",
            "Spleen",
            "Lymph nodes",
            "Tonsils"
        ],
        "answer": "Lymph nodes",
        "difficulty": "easy",
        "topic": "Lymphatic and Immune System",
        "explanation": "Lymph nodes filter lymph and trap pathogens for immune responses."
    },
    {
        "id": 241,
        "question": "Which structure in the nose contains olfactory receptors?",
        "options": [
            "Nasal septum",
            "Turbinates",
            "Olfactory epithelium",
            "Nasal vestibule"
        ],
        "answer": "Olfactory epithelium",
        "difficulty": "medium",
        "topic": "Sensory Organs",
        "explanation": "The olfactory epithelium in the nasal cavity contains receptors for smell."
    },
    {
        "id": 242,
        "question": "Which bone forms the anterior part of the pelvic girdle?",
        "options": [
            "Ilium",
            "Ischium",
            "Pubis",
            "Sacrum"
        ],
        "answer": "Pubis",
        "difficulty": "medium",
        "topic": "Appendicular Skeleton",
        "explanation": "The pubis forms the anterior portion of the pelvic girdle, meeting at the pubic symphysis."
    },
    {
        "id": 243,
        "question": "Which muscle stabilizes the pelvis during walking?",
        "options": [
            "Gluteus maximus",
            "Gluteus medius",
            "Quadriceps",
            "Hamstrings"
        ],
        "answer": "Gluteus medius",
        "difficulty": "hard",
        "topic": "Lower Limb Muscles",
        "explanation": "The gluteus medius stabilizes the pelvis by preventing it from dropping during walking."
    },
    {
        "id": 244,
        "question": "Which part of the brain processes visual information?",
        "options": [
            "Frontal lobe",
            "Parietal lobe",
            "Temporal lobe",
            "Occipital lobe"
        ],
        "answer": "Occipital lobe",
        "difficulty": "easy",
        "topic": "Brain Anatomy",
        "explanation": "The occipital lobe contains the visual cortex for processing visual information."
    },
    {
        "id": 245,
        "question": "Which structure in the digestive system regulates the release of chyme into the duodenum?",
        "options": [
            "Cardiac sphincter",
            "Pyloric sphincter",
            "Ileocecal valve",
            "Anal sphincter"
        ],
        "answer": "Pyloric sphincter",
        "difficulty": "medium",
        "topic": "Digestive System",
        "explanation": "The pyloric sphincter controls the release of chyme from the stomach to the duodenum."
    },
    {
        "id": 246,
        "question": "Which structure in the urinary system connects the bladder to the outside?",
        "options": [
            "Ureter",
            "Urethra",
            "Renal pelvis",
            "Nephron"
        ],
        "answer": "Urethra",
        "difficulty": "easy",
        "topic": "Urinary System",
        "explanation": "The urethra transports urine from the bladder to the exterior."
    },
    {
        "id": 247,
        "question": "Which structure in the male reproductive system is located at the base of the penis?",
        "options": [
            "Scrotum",
            "Prostate gland",
            "Bulbourethral gland",
            "Testes"
        ],
        "answer": "Prostate gland",
        "difficulty": "medium",
        "topic": "Male Reproductive System",
        "explanation": "The prostate gland surrounds the urethra at the base of the penis, contributing to seminal fluid."
    },
    {
        "id": 248,
        "question": "Which structure in the eye adjusts pupil size?",
        "options": [
            "Lens",
            "Iris",
            "Retina",
            "Cornea"
        ],
        "answer": "Iris",
        "difficulty": "easy",
        "topic": "Sensory Organs",
        "explanation": "The iris controls pupil size to regulate the amount of light entering the eye."
    },
    {
        "id": 249,
        "question": "Which bone forms the lateral wall of the orbit?",
        "options": [
            "Frontal bone",
            "Zygomatic bone",
            "Sphenoid bone",
            "Ethmoid bone"
        ],
        "answer": "Zygomatic bone",
        "difficulty": "hard",
        "topic": "Axial Skeleton",
        "explanation": "The zygomatic bone forms the lateral wall and floor of the orbit."
    },
    {
        "id": 250,
        "question": "Which muscle supports the pelvic floor?",
        "options": [
            "Levator ani",
            "Rectus abdominis",
            "Gluteus maximus",
            "Quadratus lumborum"
        ],
        "answer": "Levator ani",
        "difficulty": "hard",
        "topic": "Pelvic Floor Muscles",
        "explanation": "The levator ani is a key muscle of the pelvic floor, supporting pelvic organs."
    },
    {
        "id": 251,
        "question": "Which anatomical term describes a position above another structure?",
        "options": [
            "Inferior",
            "Superior",
            "Anterior",
            "Posterior"
        ],
        "answer": "Superior",
        "difficulty": "easy",
        "topic": "Anatomical Terminology",
        "explanation": "Superior refers to a structure located above another, as opposed to inferior."
    },
    {
        "id": 252,
        "question": "Which level of structural organization includes the heart and blood vessels?",
        "options": [
            "Tissue",
            "Organ",
            "System",
            "Cell"
        ],
        "answer": "System",
        "difficulty": "easy",
        "topic": "Levels of Structural Organization",
        "explanation": "The cardiovascular system includes organs like the heart and blood vessels working together."
    },
    {
        "id": 253,
        "question": "Which body cavity contains the brain?",
        "options": [
            "Thoracic cavity",
            "Abdominopelvic cavity",
            "Cranial cavity",
            "Pelvic cavity"
        ],
        "answer": "Cranial cavity",
        "difficulty": "easy",
        "topic": "Body Cavities and Membranes",
        "explanation": "The cranial cavity, formed by the skull, encases and protects the brain."
    },
    {
        "id": 254,
        "question": "Which membrane surrounds the heart?",
        "options": [
            "Pleura",
            "Peritoneum",
            "Pericardium",
            "Meninges"
        ],
        "answer": "Pericardium",
        "difficulty": "medium",
        "topic": "Body Cavities and Membranes",
        "explanation": "The pericardium is a double-layered membrane that encloses the heart, reducing friction."
    },
    {
        "id": 255,
        "question": "Which bone is classified as a short bone?",
        "options": [
            "Femur",
            "Scapula",
            "Carpal",
            "Vertebra"
        ],
        "answer": "Carpal",
        "difficulty": "medium",
        "topic": "Skeletal System",
        "explanation": "Carpal bones in the wrist are short bones, roughly equal in length and width."
    },
    {
        "id": 256,
        "question": "Which structure covers the outer surface of a bone?",
        "options": [
            "Endosteum",
            "Periosteum",
            "Medullary cavity",
            "Epiphyseal plate"
        ],
        "answer": "Periosteum",
        "difficulty": "medium",
        "topic": "Bone Structure",
        "explanation": "The periosteum is a fibrous membrane covering the outer surface of bones, aiding in growth and repair."
    },
    {
        "id": 257,
        "question": "Which bone forms the base of the skull?",
        "options": [
            "Frontal bone",
            "Parietal bone",
            "Occipital bone",
            "Sphenoid bone"
        ],
        "answer": "Occipital bone",
        "difficulty": "medium",
        "topic": "Axial Skeleton",
        "explanation": "The occipital bone forms the base of the skull and contains the foramen magnum."
    },
    {
        "id": 258,
        "question": "Which bone of the appendicular skeleton articulates with the clavicle?",
        "options": [
            "Humerus",
            "Scapula",
            "Radius",
            "Ulna"
        ],
        "answer": "Scapula",
        "difficulty": "medium",
        "topic": "Appendicular Skeleton",
        "explanation": "The scapula articulates with the clavicle at the acromioclavicular joint."
    },
    {
        "id": 259,
        "question": "Which type of joint allows for rotational movement?",
        "options": [
            "Hinge joint",
            "Ball-and-socket joint",
            "Pivot joint",
            "Saddle joint"
        ],
        "answer": "Pivot joint",
        "difficulty": "medium",
        "topic": "Joints",
        "explanation": "Pivot joints, like the radioulnar joint, allow rotational movement around a single axis."
    },
    {
        "id": 260,
        "question": "Which process forms flat bones like the skull?",
        "options": [
            "Endochondral ossification",
            "Intramembranous ossification",
            "Bone remodeling",
            "Longitudinal growth"
        ],
        "answer": "Intramembranous ossification",
        "difficulty": "hard",
        "topic": "Bone Growth and Development",
        "explanation": "Intramembranous ossification forms flat bones directly from mesenchymal tissue."
    },
    {
        "id": 261,
        "question": "Which type of muscle has intercalated discs?",
        "options": [
            "Skeletal muscle",
            "Smooth muscle",
            "Cardiac muscle",
            "Visceral muscle"
        ],
        "answer": "Cardiac muscle",
        "difficulty": "medium",
        "topic": "Muscular System",
        "explanation": "Cardiac muscle has intercalated discs, which connect cells for synchronized contraction."
    },
    {
        "id": 262,
        "question": "Which structure in skeletal muscle contains actin and myosin filaments?",
        "options": [
            "Sarcolemma",
            "Sarcoplasmic reticulum",
            "Sarcomere",
            "T-tubule"
        ],
        "answer": "Sarcomere",
        "difficulty": "medium",
        "topic": "Structure of Skeletal Muscle",
        "explanation": "The sarcomere is the contractile unit of skeletal muscle, containing actin and myosin."
    },
    {
        "id": 263,
        "question": "Which ion is stored in the sarcoplasmic reticulum for muscle contraction?",
        "options": [
            "Sodium",
            "Potassium",
            "Calcium",
            "Magnesium"
        ],
        "answer": "Calcium",
        "difficulty": "hard",
        "topic": "Muscle Contraction Mechanism",
        "explanation": "The sarcoplasmic reticulum stores calcium, which is released to trigger muscle contraction."
    },
    {
        "id": 264,
        "question": "Which muscle purses the lips, as in whistling?",
        "options": [
            "Zygomaticus major",
            "Orbicularis oris",
            "Buccinator",
            "Risorius"
        ],
        "answer": "Orbicularis oris",
        "difficulty": "medium",
        "topic": "Head and Neck Muscles",
        "explanation": "The orbicularis oris surrounds the mouth and purses the lips."
    },
    {
        "id": 265,
        "question": "Which muscle flexes the hip joint?",
        "options": [
            "Gluteus maximus",
            "Iliopsoas",
            "Sartorius",
            "Adductor longus"
        ],
        "answer": "Iliopsoas",
        "difficulty": "medium",
        "topic": "Lower Limb Muscles",
        "explanation": "The iliopsoas is the primary muscle for hip flexion, as in lifting the thigh."
    },
    {
        "id": 266,
        "question": "Which layer of the skin contains sweat glands?",
        "options": [
            "Epidermis",
            "Dermis",
            "Hypodermis",
            "Stratum basale"
        ],
        "answer": "Dermis",
        "difficulty": "medium",
        "topic": "Integumentary System",
        "explanation": "The dermis contains sweat glands, sebaceous glands, and other structures."
    },
    {
        "id": 267,
        "question": "Which skin appendage grows from a follicle?",
        "options": [
            "Nail",
            "Hair",
            "Sweat gland",
            "Sebaceous gland"
        ],
        "answer": "Hair",
        "difficulty": "easy",
        "topic": "Skin Appendages",
        "explanation": "Hair grows from hair follicles located in the dermis."
    },
    {
        "id": 268,
        "question": "Which function of the skin protects against UV radiation?",
        "options": [
            "Thermoregulation",
            "Melanin production",
            "Sensory perception",
            "Vitamin D synthesis"
        ],
        "answer": "Melanin production",
        "difficulty": "medium",
        "topic": "Functions of the Skin",
        "explanation": "Melanin, produced by melanocytes, absorbs UV radiation to protect skin cells."
    },
    {
        "id": 269,
        "question": "Which type of burn affects only the epidermis?",
        "options": [
            "First-degree burn",
            "Second-degree burn",
            "Third-degree burn",
            "Fourth-degree burn"
        ],
        "answer": "First-degree burn",
        "difficulty": "medium",
        "topic": "Skin Layers and Clinical Relevance",
        "explanation": "First-degree burns affect only the epidermis, causing redness and pain."
    },
    {
        "id": 270,
        "question": "Which part of the brain maintains posture and balance?",
        "options": [
            "Cerebrum",
            "Cerebellum",
            "Thalamus",
            "Hypothalamus"
        ],
        "answer": "Cerebellum",
        "difficulty": "easy",
        "topic": "Brain Anatomy",
        "explanation": "The cerebellum coordinates muscle movements for posture and balance."
    },
    {
        "id": 271,
        "question": "Which cranial nerve controls eye movement?",
        "options": [
            "Optic nerve",
            "Oculomotor nerve",
            "Trigeminal nerve",
            "Vagus nerve"
        ],
        "answer": "Oculomotor nerve",
        "difficulty": "medium",
        "topic": "Peripheral Nervous System",
        "explanation": "The oculomotor nerve (cranial nerve III) innervates most extraocular muscles."
    },
    {
        "id": 272,
        "question": "Which part of the autonomic nervous system slows heart rate?",
        "options": [
            "Sympathetic",
            "Parasympathetic",
            "Somatic",
            "Enteric"
        ],
        "answer": "Parasympathetic",
        "difficulty": "medium",
        "topic": "Autonomic Nervous System",
        "explanation": "The parasympathetic nervous system, via the vagus nerve, slows heart rate."
    },
    {
        "id": 273,
        "question": "Which structure in the brain produces cerebrospinal fluid?",
        "options": [
            "Meninges",
            "Choroid plexus",
            "Ventricles",
            "Blood-brain barrier"
        ],
        "answer": "Choroid plexus",
        "difficulty": "hard",
        "topic": "Brain Anatomy",
        "explanation": "The choroid plexus in the ventricles produces cerebrospinal fluid."
    },
    {
        "id": 274,
        "question": "Which pathway transmits touch and pressure sensations?",
        "options": [
            "Spinothalamic tract",
            "Dorsal column-medial lemniscus",
            "Corticospinal tract",
            "Reticulospinal tract"
        ],
        "answer": "Dorsal column-medial lemniscus",
        "difficulty": "hard",
        "topic": "Sensory and Motor Pathways",
        "explanation": "The dorsal column-medial lemniscus pathway carries touch and pressure sensations to the brain."
    },
    {
        "id": 275,
        "question": "Which heart valve separates the right atrium from the right ventricle?",
        "options": [
            "Mitral valve",
            "Tricuspid valve",
            "Aortic valve",
            "Pulmonary valve"
        ],
        "answer": "Tricuspid valve",
        "difficulty": "easy",
        "topic": "Cardiovascular System",
        "explanation": "The tricuspid valve prevents backflow from the right ventricle to the right atrium."
    },
    {
        "id": 276,
        "question": "Which blood vessel has valves to prevent backflow?",
        "options": [
            "Artery",
            "Capillary",
            "Vein",
            "Arteriole"
        ],
        "answer": "Vein",
        "difficulty": "medium",
        "topic": "Blood Vessels",
        "explanation": "Veins have valves to prevent backflow of blood toward the heart."
    },
    {
        "id": 277,
        "question": "Which circulatory pathway supplies blood to the heart itself?",
        "options": [
            "Systemic circulation",
            "Pulmonary circulation",
            "Coronary circulation",
            "Portal circulation"
        ],
        "answer": "Coronary circulation",
        "difficulty": "medium",
        "topic": "Circulatory Pathways",
        "explanation": "Coronary circulation supplies blood to the myocardium via coronary arteries."
    },
    {
        "id": 278,
        "question": "Which artery branches off the aorta to supply the brain?",
        "options": [
            "Coronary artery",
            "Carotid artery",
            "Renal artery",
            "Mesenteric artery"
        ],
        "answer": "Carotid artery",
        "difficulty": "medium",
        "topic": "Circulatory Pathways",
        "explanation": "The carotid arteries supply oxygenated blood to the brain and head."
    },
    {
        "id": 279,
        "question": "Which lymphatic vessel drains lymph from the upper right body?",
        "options": [
            "Thoracic duct",
            "Right lymphatic duct",
            "Cisterna chyli",
            "Lymphatic capillaries"
        ],
        "answer": "Right lymphatic duct",
        "difficulty": "hard",
        "topic": "Lymphatic System",
        "explanation": "The right lymphatic duct drains lymph from the upper right quadrant into the venous system."
    },
    {
        "id": 280,
        "question": "Which structure in the respiratory system is supported by C-shaped cartilage rings?",
        "options": [
            "Larynx",
            "Trachea",
            "Bronchi",
            "Pharynx"
        ],
        "answer": "Trachea",
        "difficulty": "easy",
        "topic": "Respiratory System",
        "explanation": "The trachea is supported by C-shaped cartilage rings to maintain an open airway."
    },
    {
        "id": 281,
        "question": "Which structure covers the lungs’ outer surface?",
        "options": [
            "Visceral pleura",
            "Parietal pleura",
            "Pericardium",
            "Diaphragm"
        ],
        "answer": "Visceral pleura",
        "difficulty": "medium",
        "topic": "Structure of Lungs and Pleura",
        "explanation": "The visceral pleura adheres to the lungs’ surface, while the parietal pleura lines the chest wall."
    },
    {
        "id": 282,
        "question": "Which muscle elevates the ribs during inhalation?",
        "options": [
            "Internal intercostals",
            "External intercostals",
            "Rectus abdominis",
            "Latissimus dorsi"
        ],
        "answer": "External intercostals",
        "difficulty": "medium",
        "topic": "Respiratory Muscles",
        "explanation": "External intercostal muscles elevate the ribs, expanding the thoracic cavity during inhalation."
    },
    {
        "id": 283,
        "question": "Which part of the alimentary canal churns food into chyme?",
        "options": [
            "Esophagus",
            "Stomach",
            "Small intestine",
            "Large intestine"
        ],
        "answer": "Stomach",
        "difficulty": "easy",
        "topic": "Digestive System",
        "explanation": "The stomach mechanically churns food and mixes it with gastric juices to form chyme."
    },
    {
        "id": 284,
        "question": "Which accessory organ detoxifies blood?",
        "options": [
            "Pancreas",
            "Liver",
            "Gallbladder",
            "Salivary glands"
        ],
        "answer": "Liver",
        "difficulty": "easy",
        "topic": "Accessory Organs",
        "explanation": "The liver detoxifies blood, metabolizes nutrients, and produces bile."
    },
    {
        "id": 285,
        "question": "Which structure connects the liver to the anterior abdominal wall?",
        "options": [
            "Mesentery",
            "Greater omentum",
            "Falciform ligament",
            "Lesser omentum"
        ],
        "answer": "Falciform ligament",
        "difficulty": "hard",
        "topic": "Peritoneum and Mesenteries",
        "explanation": "The falciform ligament anchors the liver to the anterior abdominal wall."
    },
    {
        "id": 286,
        "question": "Which artery supplies blood to the pancreas and duodenum?",
        "options": [
            "Celiac trunk",
            "Superior mesenteric artery",
            "Inferior mesenteric artery",
            "Renal artery"
        ],
        "answer": "Celiac trunk",
        "difficulty": "hard",
        "topic": "Blood Supply to GI Tract",
        "explanation": "The celiac trunk branches to supply the pancreas, duodenum, and other upper abdominal organs."
    },
    {
        "id": 287,
        "question": "Which part of the nephron concentrates urine?",
        "options": [
            "Proximal tubule",
            "Loop of Henle",
            "Distal tubule",
            "Glomerulus"
        ],
        "answer": "Loop of Henle",
        "difficulty": "hard",
        "topic": "Kidney Structure",
        "explanation": "The loop of Henle creates a concentration gradient to concentrate urine."
    },
    {
        "id": 288,
        "question": "Which structure in the urinary system is controlled voluntarily during micturition?",
        "options": [
            "Internal urethral sphincter",
            "External urethral sphincter",
            "Ureter",
            "Bladder wall"
        ],
        "answer": "External urethral sphincter",
        "difficulty": "medium",
        "topic": "Micturition and Urinary Control",
        "explanation": "The external urethral sphincter is under voluntary control during urination."
    },
    {
        "id": 289,
        "question": "Which structure in the male reproductive system transports sperm to the ejaculatory duct?",
        "options": [
            "Epididymis",
            "Vas deferens",
            "Seminal vesicles",
            "Urethra"
        ],
        "answer": "Vas deferens",
        "difficulty": "medium",
        "topic": "Male Reproductive System",
        "explanation": "The vas deferens transports sperm from the epididymis to the ejaculatory duct."
    },
    {
        "id": 290,
        "question": "Which gland in the male reproductive system surrounds the urethra?",
        "options": [
            "Seminal vesicles",
            "Prostate gland",
            "Bulbourethral gland",
            "Testes"
        ],
        "answer": "Prostate gland",
        "difficulty": "medium",
        "topic": "Male Reproductive System",
        "explanation": "The prostate gland surrounds the urethra and contributes fluid to semen."
    },
    {
        "id": 291,
        "question": "Which structure in the female reproductive system sheds its lining during menstruation?",
        "options": [
            "Ovary",
            "Uterus",
            "Fallopian tube",
            "Cervix"
        ],
        "answer": "Uterus",
        "difficulty": "easy",
        "topic": "Female Reproductive System",
        "explanation": "The uterus sheds its endometrial lining during menstruation if no pregnancy occurs."
    },
    {
        "id": 292,
        "question": "Which part of the female external genitalia is homologous to the scrotum?",
        "options": [
            "Clitoris",
            "Labia majora",
            "Labia minora",
            "Mons pubis"
        ],
        "answer": "Labia majora",
        "difficulty": "hard",
        "topic": "Female Reproductive System",
        "explanation": "The labia majora are homologous to the scrotum, sharing a common embryonic origin."
    },
    {
        "id": 293,
        "question": "Which endocrine gland produces epinephrine?",
        "options": [
            "Thyroid",
            "Adrenal medulla",
            "Pancreas",
            "Pituitary"
        ],
        "answer": "Adrenal medulla",
        "difficulty": "medium",
        "topic": "Endocrine System",
        "explanation": "The adrenal medulla produces epinephrine for the body’s stress response."
    },
    {
        "id": 294,
        "question": "Which hormone regulates the release of cortisol?",
        "options": [
            "TSH",
            "ACTH",
            "FSH",
            "LH"
        ],
        "answer": "ACTH",
        "difficulty": "medium",
        "topic": "Hypothalamic-Pituitary Axis",
        "explanation": "Adrenocorticotropic hormone (ACTH) from the pituitary stimulates cortisol release."
    },
    {
        "id": 295,
        "question": "Which lymphatic structure is located in the throat to trap pathogens?",
        "options": [
            "Spleen",
            "Thymus",
            "Palatine tonsils",
            "Lymph nodes"
        ],
        "answer": "Palatine tonsils",
        "difficulty": "medium",
        "topic": "Lymphatic and Immune System",
        "explanation": "Palatine tonsils in the throat trap pathogens entering through the mouth or nose."
    },
    {
        "id": 296,
        "question": "Which structure in the eye contains the optic disc?",
        "options": [
            "Cornea",
            "Lens",
            "Retina",
            "Iris"
        ],
        "answer": "Retina",
        "difficulty": "medium",
        "topic": "Sensory Organs",
        "explanation": "The retina contains the optic disc, where the optic nerve exits, creating a blind spot."
    },
    {
        "id": 297,
        "question": "Which structure in the ear contains the organ of Corti?",
        "options": [
            "Tympanic membrane",
            "Cochlea",
            "Semicircular canals",
            "Ossicles"
        ],
        "answer": "Cochlea",
        "difficulty": "hard",
        "topic": "Sensory Organs",
        "explanation": "The organ of Corti in the cochlea contains hair cells for hearing."
    },
    {
        "id": 298,
        "question": "Which anatomical landmark is used to locate the femoral artery?",
        "options": [
            "Umbilicus",
            "Inguinal ligament",
            "Sternal angle",
            "Xiphoid process"
        ],
        "answer": "Inguinal ligament",
        "difficulty": "hard",
        "topic": "Surface Anatomy and Imaging",
        "explanation": "The femoral artery is located just below the inguinal ligament in the groin."
    },
    {
        "id": 299,
        "question": "Which bone forms the posterior part of the pelvic girdle?",
        "options": [
            "Ilium",
            "Pubis",
            "Ischium",
            "Sacrum"
        ],
        "answer": "Ischium",
        "difficulty": "medium",
        "topic": "Appendicular Skeleton",
        "explanation": "The ischium forms the posterior and inferior part of the pelvic girdle."
    },
    {
        "id": 300,
        "question": "Which muscle laterally rotates the hip?",
        "options": [
            "Gluteus maximus",
            "Piriformis",
            "Iliopsoas",
            "Adductor magnus"
        ],
        "answer": "Piriformis",
        "difficulty": "hard",
        "topic": "Lower Limb Muscles",
        "explanation": "The piriformis muscle laterally rotates the hip joint."
    },
    {
        "id": 301,
        "question": "Which branch of anatomy examines structures visible to the naked eye?",
        "options": [
            "Microscopic anatomy",
            "Gross anatomy",
            "Developmental anatomy",
            "Radiological anatomy"
        ],
        "answer": "Gross anatomy",
        "difficulty": "easy",
        "topic": "Introduction to Human Anatomy",
        "explanation": "Gross anatomy studies structures visible without a microscope."
    },
    {
        "id": 302,
        "question": "Which bone contains the sella turcica for the pituitary gland?",
        "options": [
            "Ethmoid bone",
            "Sphenoid bone",
            "Occipital bone",
            "Temporal bone"
        ],
        "answer": "Sphenoid bone",
        "difficulty": "hard",
        "topic": "Axial Skeleton",
        "explanation": "The sphenoid bone’s sella turcica houses the pituitary gland."
    },
    {
        "id": 303,
        "question": "Which muscle pronates the forearm?",
        "options": [
            "Supinator",
            "Pronator teres",
            "Brachialis",
            "Triceps brachii"
        ],
        "answer": "Pronator teres",
        "difficulty": "medium",
        "topic": "Upper Limb Muscles",
        "explanation": "The pronator teres rotates the forearm to turn the palm downward."
    },
    {
        "id": 304,
        "question": "Which skin layer is responsible for fingerprint patterns?",
        "options": [
            "Stratum corneum",
            "Stratum basale",
            "Dermis",
            "Hypodermis"
        ],
        "answer": "Dermis",
        "difficulty": "hard",
        "topic": "Integumentary System",
        "explanation": "The dermis forms ridges that create fingerprint patterns visible in the epidermis."
    },
    {
        "id": 305,
        "question": "Which cranial nerve is responsible for swallowing?",
        "options": [
            "Vagus nerve",
            "Trigeminal nerve",
            "Facial nerve",
            "Glossopharyngeal nerve"
        ],
        "answer": "Vagus nerve",
        "difficulty": "hard",
        "topic": "Peripheral Nervous System",
        "explanation": "The vagus nerve (cranial nerve X) innervates muscles involved in swallowing."
    },
    {
        "id": 306,
        "question": "Which structure in the heart conducts impulses to the ventricles?",
        "options": [
            "Sinoatrial node",
            "Atrioventricular node",
            "Purkinje fibers",
            "Bundle of His"
        ],
        "answer": "Bundle of His",
        "difficulty": "medium",
        "topic": "Cardiovascular System",
        "explanation": "The bundle of His conducts electrical impulses from the AV node to the ventricles."
    },
    {
        "id": 307,
        "question": "Which structure in the respiratory system warms incoming air?",
        "options": [
            "Nasal cavity",
            "Larynx",
            "Bronchi",
            "Alveoli"
        ],
        "answer": "Nasal cavity",
        "difficulty": "easy",
        "topic": "Respiratory System",
        "explanation": "The nasal cavity warms, humidifies, and filters air before it reaches the lungs."
    },
    {
        "id": 308,
        "question": "Which part of the digestive system absorbs vitamin B12?",
        "options": [
            "Stomach",
            "Duodenum",
            "Jejunum",
            "Ileum"
        ],
        "answer": "Ileum",
        "difficulty": "hard",
        "topic": "Digestive System",
        "explanation": "The ileum absorbs vitamin B12 with the help of intrinsic factor."
    },
    {
        "id": 309,
        "question": "Which vein drains blood from the kidneys?",
        "options": [
            "Renal vein",
            "Hepatic vein",
            "Mesenteric vein",
            "Coronary vein"
        ],
        "answer": "Renal vein",
        "difficulty": "medium",
        "topic": "Urinary System",
        "explanation": "The renal vein drains deoxygenated blood from the kidneys to the inferior vena cava."
    },
    {
        "id": 310,
        "question": "Which hormone stimulates egg development in the ovaries?",
        "options": [
            "Progesterone",
            "Estrogen",
            "Follicle-stimulating hormone",
            "Luteinizing hormone"
        ],
        "answer": "Follicle-stimulating hormone",
        "difficulty": "medium",
        "topic": "Endocrine System",
        "explanation": "FSH stimulates follicular development in the ovaries."
    },
    {
        "id": 311,
        "question": "Which lymphatic structure is involved in B cell activation?",
        "options": [
            "Thymus",
            "Spleen",
            "Lymph nodes",
            "Tonsils"
        ],
        "answer": "Lymph nodes",
        "difficulty": "medium",
        "topic": "Lymphatic and Immune System",
        "explanation": "Lymph nodes are sites where B cells are activated to produce antibodies."
    },
    {
        "id": 312,
        "question": "Which structure in the eye is responsible for color vision?",
        "options": [
            "Rods",
            "Cones",
            "Optic disc",
            "Fovea"
        ],
        "answer": "Cones",
        "difficulty": "medium",
        "topic": "Sensory Organs",
        "explanation": "Cones in the retina are photoreceptors responsible for color vision."
    },
    {
        "id": 313,
        "question": "Which anatomical landmark is used to locate the liver?",
        "options": [
            "Umbilicus",
            "Right costal margin",
            "Sternal angle",
            "Inguinal ligament"
        ],
        "answer": "Right costal margin",
        "difficulty": "hard",
        "topic": "Surface Anatomy and Imaging",
        "explanation": "The liver is located under the right costal margin, palpable in some cases."
    },
    {
        "id": 314,
        "question": "Which bone articulates with the radius at the elbow?",
        "options": [
            "Humerus",
            "Ulna",
            "Scapula",
            "Clavicle"
        ],
        "answer": "Humerus",
        "difficulty": "medium",
        "topic": "Appendicular Skeleton",
        "explanation": "The humerus articulates with the radius and ulna at the elbow joint."
    },
    {
        "id": 315,
        "question": "Which muscle depresses the scapula?",
        "options": [
            "Trapezius",
            "Pectoralis minor",
            "Deltoid",
            "Rhomboid major"
        ],
        "answer": "Pectoralis minor",
        "difficulty": "hard",
        "topic": "Upper Limb Muscles",
        "explanation": "The pectoralis minor depresses and stabilizes the scapula."
    },
    {
        "id": 316,
        "question": "Which part of the skin contains sensory nerve endings?",
        "options": [
            "Stratum corneum",
            "Dermis",
            "Hypodermis",
            "Stratum basale"
        ],
        "answer": "Dermis",
        "difficulty": "medium",
        "topic": "Integumentary System",
        "explanation": "The dermis contains sensory nerve endings for touch, pain, and temperature."
    },
    {
        "id": 317,
        "question": "Which part of the spinal cord contains sensory neurons?",
        "options": [
            "Ventral horn",
            "Dorsal horn",
            "Lateral horn",
            "Central canal"
        ],
        "answer": "Dorsal horn",
        "difficulty": "hard",
        "topic": "Spinal Cord Structure",
        "explanation": "The dorsal horn of the spinal cord contains sensory neurons receiving input from the body."
    },
    {
        "id": 318,
        "question": "Which structure in the heart prevents backflow from the aorta?",
        "options": [
            "Mitral valve",
            "Tricuspid valve",
            "Aortic valve",
            "Pulmonary valve"
        ],
        "answer": "Aortic valve",
        "difficulty": "medium",
        "topic": "Cardiovascular System",
        "explanation": "The aortic valve prevents backflow from the aorta into the left ventricle."
    },
    {
        "id": 319,
        "question": "Which structure in the respiratory system is the smallest airway?",
        "options": [
            "Bronchi",
            "Bronchioles",
            "Alveoli",
            "Trachea"
        ],
        "answer": "Bronchioles",
        "difficulty": "medium",
        "topic": "Bronchial Tree",
        "explanation": "Bronchioles are the smallest airways, branching into alveolar ducts."
    },
    {
        "id": 320,
        "question": "Which part of the digestive system contains rugae for expansion?",
        "options": [
            "Esophagus",
            "Stomach",
            "Small intestine",
            "Large intestine"
        ],
        "answer": "Stomach",
        "difficulty": "medium",
        "topic": "Digestive System",
        "explanation": "Rugae are folds in the stomach lining that allow it to expand."
    },
    {
        "id": 321,
        "question": "Which structure in the female reproductive system produces estrogen?",
        "options": [
            "Uterus",
            "Fallopian tube",
            "Ovary",
            "Cervix"
        ],
        "answer": "Ovary",
        "difficulty": "easy",
        "topic": "Female Reproductive System",
        "explanation": "The ovaries produce estrogen, which regulates the menstrual cycle."
    },
    {
        "id": 322,
        "question": "Which hormone is secreted by the pancreas to raise blood sugar?",
        "options": [
            "Insulin",
            "Glucagon",
            "Cortisol",
            "Thyroxine"
        ],
        "answer": "Glucagon",
        "difficulty": "medium",
        "topic": "Endocrine System",
        "explanation": "Glucagon, produced by the pancreas, raises blood sugar by stimulating glycogen breakdown."
    },
    {
        "id": 323,
        "question": "Which lymphatic structure is located in the small intestine?",
        "options": [
            "Peyer’s patches",
            "Palatine tonsils",
            "Thymus",
            "Spleen"
        ],
        "answer": "Peyer’s patches",
        "difficulty": "hard",
        "topic": "Lymphatic and Immune System",
        "explanation": "Peyer’s patches are lymphoid tissues in the small intestine for immune surveillance."
    },
    {
        "id": 324,
        "question": "Which structure in the eye is avascular?",
        "options": [
            "Retina",
            "Cornea",
            "Choroid",
            "Sclera"
        ],
        "answer": "Cornea",
        "difficulty": "hard",
        "topic": "Sensory Organs",
        "explanation": "The cornea is avascular, relying on diffusion for nutrients."
    },
    {
        "id": 325,
        "question": "Which bone forms the roof of the orbit?",
        "options": [
            "Zygomatic bone",
            "Frontal bone",
            "Sphenoid bone",
            "Ethmoid bone"
        ],
        "answer": "Frontal bone",
        "difficulty": "hard",
        "topic": "Axial Skeleton",
        "explanation": "The frontal bone forms the roof of the orbit and part of the cranial cavity."
    },
    {
        "id": 326,
        "question": "Which muscle extends the elbow?",
        "options": [
            "Biceps brachii",
            "Triceps brachii",
            "Brachialis",
            "Pronator teres"
        ],
        "answer": "Triceps brachii",
        "difficulty": "easy",
        "topic": "Upper Limb Muscles",
        "explanation": "The triceps brachii extends the elbow joint."
    },
    {
        "id": 327,
        "question": "Which part of the skin produces keratin?",
        "options": [
            "Stratum corneum",
            "Stratum basale",
            "Dermis",
            "Hypodermis"
        ],
        "answer": "Stratum basale",
        "difficulty": "hard",
        "topic": "Integumentary System",
        "explanation": "Keratinocytes in the stratum basale produce keratin for skin protection."
    },
    {
        "id": 328,
        "question": "Which part of the spinal cord relays autonomic signals?",
        "options": [
            "Dorsal horn",
            "Ventral horn",
            "Lateral horn",
            "Central canal"
        ],
        "answer": "Lateral horn",
        "difficulty": "hard",
        "topic": "Spinal Cord Structure",
        "explanation": "The lateral horn contains autonomic neurons in the thoracic and lumbar spinal cord."
    },
    {
        "id": 329,
        "question": "Which structure in the heart receives oxygenated blood from the lungs?",
        "options": [
            "Right atrium",
            "Left atrium",
            "Right ventricle",
            "Left ventricle"
        ],
        "answer": "Left atrium",
        "difficulty": "easy",
        "topic": "Cardiovascular System",
        "explanation": "The left atrium receives oxygenated blood from the lungs via the pulmonary veins."
    },
    {
        "id": 330,
        "question": "Which structure in the respiratory system is surrounded by alveoli?",
        "options": [
            "Bronchi",
            "Bronchioles",
            "Alveolar ducts",
            "Trachea"
        ],
        "answer": "Alveolar ducts",
        "difficulty": "hard",
        "topic": "Gas Exchange Structures",
        "explanation": "Alveolar ducts are lined with alveoli, the sites of gas exchange."
    },
    {
        "id": 331,
        "question": "Which part of the digestive system is the longest?",
        "options": [
            "Esophagus",
            "Stomach",
            "Small intestine",
            "Large intestine"
        ],
        "answer": "Small intestine",
        "difficulty": "medium",
        "topic": "Digestive System",
        "explanation": "The small intestine is the longest part of the alimentary canal, about 20 feet long."
    },
    {
        "id": 332,
        "question": "Which structure in the male reproductive system is the site of sperm maturation?",
        "options": [
            "Testes",
            "Epididymis",
            "Vas deferens",
            "Prostate gland"
        ],
        "answer": "Epididymis",
        "difficulty": "medium",
        "topic": "Male Reproductive System",
        "explanation": "The epididymis is where sperm mature and gain motility."
    },
    {
        "id": 333,
        "question": "Which hormone regulates calcium absorption in the intestines?",
        "options": [
            "Parathyroid hormone",
            "Calcitonin",
            "Vitamin D",
            "Thyroxine"
        ],
        "answer": "Vitamin D",
        "difficulty": "medium",
        "topic": "Endocrine System",
        "explanation": "Vitamin D, activated by the kidneys, promotes calcium absorption in the intestines."
    },
    {
        "id": 334,
        "question": "Which lymphatic structure is located in the mediastinum?",
        "options": [
            "Spleen",
            "Thymus",
            "Tonsils",
            "Peyer’s patches"
        ],
        "answer": "Thymus",
        "difficulty": "medium",
        "topic": "Lymphatic and Immune System",
        "explanation": "The thymus, located in the mediastinum, is critical for T cell maturation."
    },
    {
        "id": 335,
        "question": "Which structure in the eye is responsible for sharp central vision?",
        "options": [
            "Fovea",
            "Optic disc",
            "Peripheral retina",
            "Iris"
        ],
        "answer": "Fovea",
        "difficulty": "medium",
        "topic": "Sensory Organs",
        "explanation": "The fovea, in the center of the retina, contains a high density of cones for sharp vision."
    },
    {
        "id": 336,
        "question": "Which bone forms the anterior fontanelle in infants?",
        "options": [
            "Parietal bone",
            "Occipital bone",
            "Frontal bone",
            "Temporal bone"
        ],
        "answer": "Frontal bone",
        "difficulty": "hard",
        "topic": "Axial Skeleton",
        "explanation": "The frontal bone contributes to the anterior fontanelle, a soft spot in infants."
    },
    {
        "id": 337,
        "question": "Which muscle abducts the vocal cords?",
        "options": [
            "Thyroarytenoid",
            "Cricothyroid",
            "Posterior cricoarytenoid",
            "Lateral cricoarytenoid"
        ],
        "answer": "Posterior cricoarytenoid",
        "difficulty": "hard",
        "topic": "Head and Neck Muscles",
        "explanation": "The posterior cricoarytenoid muscle abducts the vocal cords, opening the glottis."
    },
    {
        "id": 338,
        "question": "Which part of the skin contains adipose tissue?",
        "options": [
            "Epidermis",
            "Dermis",
            "Hypodermis",
            "Stratum corneum"
        ],
        "answer": "Hypodermis",
        "difficulty": "medium",
        "topic": "Integumentary System",
        "explanation": "The hypodermis contains adipose tissue for insulation and energy storage."
    },
    {
        "id": 339,
        "question": "Which part of the brain connects to the spinal cord?",
        "options": [
            "Cerebellum",
            "Medulla oblongata",
            "Thalamus",
            "Hypothalamus"
        ],
        "answer": "Medulla oblongata",
        "difficulty": "medium",
        "topic": "Brain Anatomy",
        "explanation": "The medulla oblongata connects the brain to the spinal cord, controlling vital functions."
    },
    {
        "id": 340,
        "question": "Which structure in the respiratory system contains goblet cells for mucus production?",
        "options": [
            "Alveoli",
            "Bronchi",
            "Larynx",
            "Pharynx"
        ],
        "answer": "Bronchi",
        "difficulty": "hard",
        "topic": "Bronchial Tree",
        "explanation": "Goblet cells in the bronchi produce mucus to trap debris."
    },
    {
        "id": 341,
        "question": "Which part of the digestive system is retroperitoneal?",
        "options": [
            "Stomach",
            "Duodenum",
            "Jejunum",
            "Sigmoid colon"
        ],
        "answer": "Duodenum",
        "difficulty": "hard",
        "topic": "Digestive System",
        "explanation": "The duodenum is mostly retroperitoneal, lying behind the peritoneal cavity."
    },
    {
        "id": 342,
        "question": "Which structure in the female reproductive system is the birth canal?",
        "options": [
            "Uterus",
            "Vagina",
            "Fallopian tube",
            "Cervix"
        ],
        "answer": "Vagina",
        "difficulty": "easy",
        "topic": "Female Reproductive System",
        "explanation": "The vagina serves as the birth canal during childbirth."
    },
    {
        "id": 343,
        "question": "Which hormone lowers blood calcium levels?",
        "options": [
            "Parathyroid hormone",
            "Calcitonin",
            "Vitamin D",
            "Cortisol"
        ],
        "answer": "Calcitonin",
        "difficulty": "medium",
        "topic": "Endocrine System",
        "explanation": "Calcitonin, produced by the thyroid, lowers blood calcium by inhibiting bone resorption."
    },
    {
        "id": 344,
        "question": "Which lymphatic structure drains lymph from the intestines?",
        "options": [
            "Cisterna chyli",
            "Right lymphatic duct",
            "Spleen",
            "Thymus"
        ],
        "answer": "Cisterna chyli",
        "difficulty": "hard",
        "topic": "Lymphatic System",
        "explanation": "The cisterna chyli collects lymph from the intestines before it enters the thoracic duct."
    },
    {
        "id": 345,
        "question": "Which structure in the ear protects the tympanic membrane?",
        "options": [
            "Pinna",
            "External auditory canal",
            "Cochlea",
            "Semicircular canals"
        ],
        "answer": "External auditory canal",
        "difficulty": "medium",
        "topic": "Sensory Organs",
        "explanation": "The external auditory canal protects the tympanic membrane by channeling sound."
    },
    {
        "id": 346,
        "question": "Which bone forms the floor of the nasal cavity?",
        "options": [
            "Nasal bone",
            "Maxilla",
            "Ethmoid bone",
            "Vomer"
        ],
        "answer": "Maxilla",
        "difficulty": "hard",
        "topic": "Axial Skeleton",
        "explanation": "The maxilla forms the floor of the nasal cavity and part of the hard palate."
    },
    {
        "id": 347,
        "question": "Which muscle adducts the vocal cords?",
        "options": [
            "Posterior cricoarytenoid",
            "Lateral cricoarytenoid",
            "Cricothyroid",
            "Thyroarytenoid"
        ],
        "answer": "Lateral cricoarytenoid",
        "difficulty": "hard",
        "topic": "Head and Neck Muscles",
        "explanation": "The lateral cricoarytenoid muscle adducts the vocal cords, closing the glottis."
    },
    {
        "id": 348,
        "question": "Which part of the skin contains hair follicles?",
        "options": [
            "Epidermis",
            "Dermis",
            "Hypodermis",
            "Stratum corneum"
        ],
        "answer": "Dermis",
        "difficulty": "medium",
        "topic": "Integumentary System",
        "explanation": "Hair follicles are embedded in the dermis, with roots extending into the hypodermis."
    },
    {
        "id": 349,
        "question": "Which part of the brain regulates thirst?",
        "options": [
            "Cerebellum",
            "Hypothalamus",
            "Thalamus",
            "Medulla oblongata"
        ],
        "answer": "Hypothalamus",
        "difficulty": "medium",
        "topic": "Brain Anatomy",
        "explanation": "The hypothalamus regulates thirst, hunger, and other homeostatic functions."
    },
    {
        "id": 350,
        "question": "Which structure in the heart pumps blood into the pulmonary artery?",
        "options": [
            "Left atrium",
            "Right atrium",
            "Left ventricle",
            "Right ventricle"
        ],
        "answer": "Right ventricle",
        "difficulty": "easy",
        "topic": "Cardiovascular System",
        "explanation": "The right ventricle pumps deoxygenated blood into the pulmonary artery."
    },
    {
        "id": 351,
        "question": "Which anatomical term describes a structure closer to the midline of the body?",
        "options": [
            "Lateral",
            "Medial",
            "Proximal",
            "Distal"
        ],
        "answer": "Medial",
        "difficulty": "easy",
        "topic": "Anatomical Terminology",
        "explanation": "Medial refers to a structure closer to the body’s midline, as opposed to lateral."
    },
    {
        "id": 352,
        "question": "Which level of structural organization is composed of similar cells working together?",
        "options": [
            "Cell",
            "Tissue",
            "Organ",
            "System"
        ],
        "answer": "Tissue",
        "difficulty": "easy",
        "topic": "Levels of Structural Organization",
        "explanation": "Tissues are groups of similar cells, such as muscle tissue, that perform a specific function."
    },
    {
        "id": 353,
        "question": "Which body cavity is lined by the parietal pleura?",
        "options": [
            "Cranial cavity",
            "Thoracic cavity",
            "Abdominal cavity",
            "Pelvic cavity"
        ],
        "answer": "Thoracic cavity",
        "difficulty": "medium",
        "topic": "Body Cavities and Membranes",
        "explanation": "The thoracic cavity is lined by the parietal pleura, which covers the inner surface of the chest wall."
    },
    {
        "id": 354,
        "question": "Which membrane is directly adjacent to the lung tissue?",
        "options": [
            "Parietal pleura",
            "Visceral pleura",
            "Pericardium",
            "Peritoneum"
        ],
        "answer": "Visceral pleura",
        "difficulty": "medium",
        "topic": "Body Cavities and Membranes",
        "explanation": "The visceral pleura adheres to the surface of the lungs, while the parietal pleura lines the thoracic cavity."
    },
    {
        "id": 355,
        "question": "Which bone is classified as a flat bone?",
        "options": [
            "Femur",
            "Scapula",
            "Phalanx",
            "Vertebra"
        ],
        "answer": "Scapula",
        "difficulty": "medium",
        "topic": "Skeletal System",
        "explanation": "The scapula is a flat bone, providing a broad surface for muscle attachment."
    },
    {
        "id": 356,
        "question": "Which structure in a long bone contains yellow bone marrow in adults?",
        "options": [
            "Epiphysis",
            "Diaphysis",
            "Periosteum",
            "Endosteum"
        ],
        "answer": "Diaphysis",
        "difficulty": "medium",
        "topic": "Bone Structure",
        "explanation": "The diaphysis, or shaft, of a long bone contains yellow bone marrow in adults for fat storage."
    },
    {
        "id": 357,
        "question": "Which bone forms the upper jaw?",
        "options": [
            "Mandible",
            "Maxilla",
            "Zygomatic bone",
            "Nasal bone"
        ],
        "answer": "Maxilla",
        "difficulty": "easy",
        "topic": "Axial Skeleton",
        "explanation": "The maxilla forms the upper jaw and part of the hard palate."
    },
    {
        "id": 358,
        "question": "Which bone of the appendicular skeleton forms the hip joint socket?",
        "options": [
            "Ilium",
            "Ischium",
            "Pubis",
            "Acetabulum"
        ],
        "answer": "Acetabulum",
        "difficulty": "medium",
        "topic": "Appendicular Skeleton",
        "explanation": "The acetabulum, formed by the ilium, ischium, and pubis, is the socket for the femoral head."
    },
    {
        "id": 359,
        "question": "Which type of joint is found between the atlas and axis vertebrae?",
        "options": [
            "Synovial joint",
            "Fibrous joint",
            "Cartilaginous joint",
            "Suture joint"
        ],
        "answer": "Synovial joint",
        "difficulty": "medium",
        "topic": "Joints",
        "explanation": "The atlas and axis form a pivot-type synovial joint, allowing head rotation."
    },
    {
        "id": 360,
        "question": "Which cells are responsible for bone resorption during remodeling?",
        "options": [
            "Osteoblasts",
            "Osteoclasts",
            "Osteocytes",
            "Chondrocytes"
        ],
        "answer": "Osteoclasts",
        "difficulty": "hard",
        "topic": "Bone Growth and Development",
        "explanation": "Osteoclasts break down bone tissue during remodeling to maintain bone health."
    },
    {
        "id": 361,
        "question": "Which type of muscle is voluntary and striated?",
        "options": [
            "Smooth muscle",
            "Cardiac muscle",
            "Skeletal muscle",
            "Visceral muscle"
        ],
        "answer": "Skeletal muscle",
        "difficulty": "easy",
        "topic": "Muscular System",
        "explanation": "Skeletal muscle is under voluntary control and has a striated appearance."
    },
    {
        "id": 362,
        "question": "Which structure surrounds a muscle fiber?",
        "options": [
            "Endomysium",
            "Perimysium",
            "Epimysium",
            "Fascia"
        ],
        "answer": "Endomysium",
        "difficulty": "medium",
        "topic": "Structure of Skeletal Muscle",
        "explanation": "The endomysium is a connective tissue layer surrounding individual muscle fibers."
    },
    {
        "id": 363,
        "question": "Which protein covers actin’s binding sites in a relaxed muscle?",
        "options": [
            "Myosin",
            "Troponin",
            "Tropomyosin",
            "Actin"
        ],
        "answer": "Tropomyosin",
        "difficulty": "hard",
        "topic": "Muscle Contraction Mechanism",
        "explanation": "Tropomyosin covers actin’s myosin-binding sites in a relaxed muscle, preventing contraction."
    },
    {
        "id": 364,
        "question": "Which muscle elevates the mandible during chewing?",
        "options": [
            "Masseter",
            "Buccinator",
            "Orbicularis oris",
            "Platysma"
        ],
        "answer": "Masseter",
        "difficulty": "medium",
        "topic": "Head and Neck Muscles",
        "explanation": "The masseter is a powerful muscle that elevates the mandible for chewing."
    },
    {
        "id": 365,
        "question": "Which muscle extends the knee joint?",
        "options": [
            "Hamstrings",
            "Quadriceps femoris",
            "Gastrocnemius",
            "Adductor magnus"
        ],
        "answer": "Quadriceps femoris",
        "difficulty": "medium",
        "topic": "Lower Limb Muscles",
        "explanation": "The quadriceps femoris group extends the knee, as in kicking a ball."
    },
    {
        "id": 366,
        "question": "Which layer of the skin contains melanocytes?",
        "options": [
            "Stratum corneum",
            "Stratum basale",
            "Dermis",
            "Hypodermis"
        ],
        "answer": "Stratum basale",
        "difficulty": "medium",
        "topic": "Integumentary System",
        "explanation": "Melanocytes in the stratum basale produce melanin for skin pigmentation."
    },
    {
        "id": 367,
        "question": "Which skin appendage produces sebum?",
        "options": [
            "Sweat gland",
            "Sebaceous gland",
            "Ceruminous gland",
            "Mammary gland"
        ],
        "answer": "Sebaceous gland",
        "difficulty": "easy",
        "topic": "Skin Appendages",
        "explanation": "Sebaceous glands produce sebum, an oily substance that lubricates skin and hair."
    },
    {
        "id": 368,
        "question": "Which function of the skin involves detecting touch and pressure?",
        "options": [
            "Thermoregulation",
            "Sensory perception",
            "Vitamin D synthesis",
            "Protection"
        ],
        "answer": "Sensory perception",
        "difficulty": "easy",
        "topic": "Functions of the Skin",
        "explanation": "The skin contains receptors for touch, pressure, pain, and temperature."
    },
    {
        "id": 369,
        "question": "Which type of injection delivers medication into fatty tissue?",
        "options": [
            "Intradermal",
            "Subcutaneous",
            "Intramuscular",
            "Intravenous"
        ],
        "answer": "Subcutaneous",
        "difficulty": "medium",
        "topic": "Skin Layers and Clinical Relevance",
        "explanation": "Subcutaneous injections deliver medication into the hypodermis, or fatty tissue."
    },
    {
        "id": 370,
        "question": "Which part of the brain controls voluntary movement?",
        "options": [
            "Cerebellum",
            "Frontal lobe",
            "Parietal lobe",
            "Occipital lobe"
        ],
        "answer": "Frontal lobe",
        "difficulty": "medium",
        "topic": "Brain Anatomy",
        "explanation": "The frontal lobe contains the motor cortex, responsible for voluntary movement."
    },
    {
        "id": 371,
        "question": "Which cranial nerve is responsible for vision?",
        "options": [
            "Olfactory nerve",
            "Optic nerve",
            "Trigeminal nerve",
            "Facial nerve"
        ],
        "answer": "Optic nerve",
        "difficulty": "easy",
        "topic": "Peripheral Nervous System",
        "explanation": "The optic nerve (cranial nerve II) transmits visual information from the retina."
    },
    {
        "id": 372,
        "question": "Which division of the autonomic nervous system promotes digestion?",
        "options": [
            "Sympathetic",
            "Parasympathetic",
            "Somatic",
            "Enteric"
        ],
        "answer": "Parasympathetic",
        "difficulty": "medium",
        "topic": "Autonomic Nervous System",
        "explanation": "The parasympathetic nervous system stimulates digestion and other ‘rest and digest’ functions."
    },
    {
        "id": 373,
        "question": "Which structure acts as a barrier to protect the brain from toxins?",
        "options": [
            "Meninges",
            "Cerebrospinal fluid",
            "Blood-brain barrier",
            "Choroid plexus"
        ],
        "answer": "Blood-brain barrier",
        "difficulty": "medium",
        "topic": "Brain Anatomy",
        "explanation": "The blood-brain barrier restricts harmful substances from entering the brain."
    },
    {
        "id": 374,
        "question": "Which pathway transmits pain and temperature sensations?",
        "options": [
            "Spinothalamic tract",
            "Corticospinal tract",
            "Dorsal column-medial lemniscus",
            "Reticulospinal tract"
        ],
        "answer": "Spinothalamic tract",
        "difficulty": "hard",
        "topic": "Sensory and Motor Pathways",
        "explanation": "The spinothalamic tract carries pain and temperature sensations to the brain."
    },
    {
        "id": 375,
        "question": "Which heart chamber pumps blood into the aorta?",
        "options": [
            "Right atrium",
            "Left atrium",
            "Right ventricle",
            "Left ventricle"
        ],
        "answer": "Left ventricle",
        "difficulty": "easy",
        "topic": "Cardiovascular System",
        "explanation": "The left ventricle pumps oxygenated blood into the aorta for systemic circulation."
    },
    {
        "id": 376,
        "question": "Which blood vessel has the thickest muscular wall?",
        "options": [
            "Artery",
            "Vein",
            "Capillary",
            "Venule"
        ],
        "answer": "Artery",
        "difficulty": "medium",
        "topic": "Blood Vessels",
        "explanation": "Arteries have thick muscular walls to withstand high pressure from the heart."
    },
    {
        "id": 377,
        "question": "Which circulatory pathway carries blood to the lungs?",
        "options": [
            "Systemic circulation",
            "Pulmonary circulation",
            "Coronary circulation",
            "Portal circulation"
        ],
        "answer": "Pulmonary circulation",
        "difficulty": "easy",
        "topic": "Circulatory Pathways",
        "explanation": "Pulmonary circulation transports deoxygenated blood to the lungs for oxygenation."
    },
    {
        "id": 378,
        "question": "Which artery supplies blood to the stomach?",
        "options": [
            "Celiac trunk",
            "Renal artery",
            "Coronary artery",
            "Femoral artery"
        ],
        "answer": "Celiac trunk",
        "difficulty": "medium",
        "topic": "Circulatory Pathways",
        "explanation": "The celiac trunk supplies blood to the stomach, liver, and spleen."
    },
    {
        "id": 379,
        "question": "Which lymphatic organ filters blood?",
        "options": [
            "Thymus",
            "Spleen",
            "Lymph nodes",
            "Tonsils"
        ],
        "answer": "Spleen",
        "difficulty": "medium",
        "topic": "Lymphatic System",
        "explanation": "The spleen filters blood, removing old red blood cells and pathogens."
    },
    {
        "id": 380,
        "question": "Which structure in the respiratory system produces sound?",
        "options": [
            "Pharynx",
            "Larynx",
            "Trachea",
            "Bronchi"
        ],
        "answer": "Larynx",
        "difficulty": "easy",
        "topic": "Respiratory System",
        "explanation": "The larynx, or voice box, produces sound through vocal cord vibration."
    },
    {
        "id": 381,
        "question": "Which structure separates the thoracic cavity from the abdominal cavity?",
        "options": [
            "Pleura",
            "Diaphragm",
            "Pericardium",
            "Peritoneum"
        ],
        "answer": "Diaphragm",
        "difficulty": "easy",
        "topic": "Structure of Lungs and Pleura",
        "explanation": "The diaphragm is a muscular partition separating the thoracic and abdominal cavities."
    },
    {
        "id": 382,
        "question": "Which muscle flattens during inhalation to increase thoracic volume?",
        "options": [
            "External intercostals",
            "Internal intercostals",
            "Diaphragm",
            "Rectus abdominis"
        ],
        "answer": "Diaphragm",
        "difficulty": "medium",
        "topic": "Respiratory Muscles",
        "explanation": "The diaphragm contracts and flattens during inhalation, expanding the thoracic cavity."
    },
    {
        "id": 383,
        "question": "Which part of the alimentary canal absorbs nutrients into the bloodstream?",
        "options": [
            "Stomach",
            "Small intestine",
            "Large intestine",
            "Esophagus"
        ],
        "answer": "Small intestine",
        "difficulty": "easy",
        "topic": "Digestive System",
        "explanation": "The small intestine, with its villi, is the primary site for nutrient absorption."
    },
    {
        "id": 384,
        "question": "Which accessory organ stores bile?",
        "options": [
            "Liver",
            "Pancreas",
            "Gallbladder",
            "Salivary glands"
        ],
        "answer": "Gallbladder",
        "difficulty": "easy",
        "topic": "Accessory Organs",
        "explanation": "The gallbladder stores and concentrates bile produced by the liver."
    },
    {
        "id": 385,
        "question": "Which structure anchors the small intestine to the posterior abdominal wall?",
        "options": [
            "Mesentery",
            "Greater omentum",
            "Falciform ligament",
            "Lesser omentum"
        ],
        "answer": "Mesentery",
        "difficulty": "medium",
        "topic": "Peritoneum and Mesenteries",
        "explanation": "The mesentery suspends the small intestine, allowing movement and blood supply."
    },
    {
        "id": 386,
        "question": "Which artery supplies blood to the small intestine?",
        "options": [
            "Celiac trunk",
            "Superior mesenteric artery",
            "Inferior mesenteric artery",
            "Hepatic artery"
        ],
        "answer": "Superior mesenteric artery",
        "difficulty": "hard",
        "topic": "Blood Supply to GI Tract",
        "explanation": "The superior mesenteric artery supplies the small intestine and part of the colon."
    },
    {
        "id": 387,
        "question": "Which part of the nephron filters blood plasma?",
        "options": [
            "Proximal tubule",
            "Loop of Henle",
            "Glomerulus",
            "Distal tubule"
        ],
        "answer": "Glomerulus",
        "difficulty": "medium",
        "topic": "Kidney Structure",
        "explanation": "The glomerulus filters blood plasma to form filtrate in the nephron."
    },
    {
        "id": 388,
        "question": "Which structure in the urinary system transports urine to the bladder?",
        "options": [
            "Urethra",
            "Ureter",
            "Renal pelvis",
            "Nephron"
        ],
        "answer": "Ureter",
        "difficulty": "easy",
        "topic": "Urinary System",
        "explanation": "The ureter transports urine from the kidneys to the bladder."
    },
    {
        "id": 389,
        "question": "Which structure in the male reproductive system produces fructose for sperm energy?",
        "options": [
            "Testes",
            "Seminal vesicles",
            "Prostate gland",
            "Bulbourethral gland"
        ],
        "answer": "Seminal vesicles",
        "difficulty": "hard",
        "topic": "Male Reproductive System",
        "explanation": "The seminal vesicles secrete fructose-rich fluid to nourish sperm."
    },
    {
        "id": 390,
        "question": "Which gland in the male reproductive system adds fluid to semen during ejaculation?",
        "options": [
            "Testes",
            "Prostate gland",
            "Epididymis",
            "Bulbourethral gland"
        ],
        "answer": "Prostate gland",
        "difficulty": "medium",
        "topic": "Male Reproductive System",
        "explanation": "The prostate gland contributes alkaline fluid to semen to protect sperm."
    },
    {
        "id": 391,
        "question": "Which structure in the female reproductive system releases an egg during ovulation?",
        "options": [
            "Uterus",
            "Ovary",
            "Fallopian tube",
            "Vagina"
        ],
        "answer": "Ovary",
        "difficulty": "easy",
        "topic": "Female Reproductive System",
        "explanation": "The ovary releases an egg during ovulation into the fallopian tube."
    },
    {
        "id": 392,
        "question": "Which part of the female reproductive system supports fetal development?",
        "options": [
            "Fallopian tube",
            "Cervix",
            "Uterus",
            "Ovary"
        ],
        "answer": "Uterus",
        "difficulty": "easy",
        "topic": "Female Reproductive System",
        "explanation": "The uterus provides the environment for fetal development during pregnancy."
    },
    {
        "id": "393",
        "question": "Which endocrine gland regulates blood calcium levels?",
        "options": [
            "Thyroid",
            "Parathyroid",
            "Adrenal glands",
            "Pancreas"
        ],
        "answer": "Parathyroid",
        "difficulty": "medium",
        "topic": "Endocrine System",
        "explanation": "The parathyroid glands secrete parathyroid hormone to increase blood calcium levels."
    },
    {
        "id": 394,
        "question": "Which hormone triggers ovulation in females",
        "options": [
            "Follicle-stimulating hormone",
            "Luteinizing hormone",
            "Progesterone",
            "Estrogen"
        ],
        "answer": "Luteinizing hormone",
        "difficulty": "medium",
        "topic": "Endocrine System",
        "explanation": "Luteinizing hormone (LH) surges to trigger ovulation in the ovarian cycle."
    },
    {
        "id": 395,
        "question": "Which lymphatic structure monitors lymph for antigens in the armpit region?",
        "options": [
            "Spleen",
            "Thymus",
            "Axillary lymph nodes",
            "Tonsils"
        ],
        "answer": "Axillary lymph nodes",
        "difficulty": "hard",
        "topic": "Lymphatic and Immune System",
        "explanation": "Axillary lymph nodes in the armpit filter lymph from the upper limb and breast."
    },
    {
        "id": 396,
        "question": "Which structure in the eye adjusts the shape of the lens for focusing?",
        "options": [
            "Iris",
            "Ciliary body",
            "Retina",
            "Cornea"
        ],
        "answer": "Ciliary body",
        "difficulty": "medium",
        "topic": "Sensory Organs",
        "explanation": "The ciliary body adjusts the lens shape for near or far vision."
    },
    {
        "id": 397,
        "question": "Which structure in the ear maintains balance?",
        "options": [
            "Cochlea",
            "Tympanic membrane",
            "Semicircular canals",
            "Ossicles"
        ],
        "answer": "Semicircular canals",
        "difficulty": "medium",
        "topic": "Sensory Organs",
        "explanation": "The semicircular canals detect head movement to maintain balance."
    },
    {
        "id": 398,
        "question": "Which anatomical landmark is used to locate the heart for CPR?",
        "options": [
            "Xiphoid process",
            "Sternal angle",
            "Umbilicus",
            "Clavicle"
        ],
        "answer": "Sternal angle",
        "difficulty": "hard",
        "topic": "Surface Anatomy and Imaging",
        "explanation": "The sternal angle guides hand placement for chest compression during CPR."
    },
    {
        "id": 399,
        "question": "Which bone forms the heel of the foot?",
        "options": [
            "Talus",
            "Calcaneus",
            "Navicular",
            "Cuboid"
        ],
        "answer": "Calcaneus",
        "difficulty": "medium",
        "topic": "Appendicular Skeleton",
        "explanation": "The calcaneus is the largest tarsal bone, forming the heel."
    },
    {
        "id": 400,
        "question": "Which muscle flexes the spine?",
        "options": [
            "Erector spinae",
            "Rectus abdominis",
            "Latissimus dorsi",
            "Trapezius"
        ],
        "answer": "Rectus abdominis",
        "difficulty": "medium",
        "topic": "Thorax and Abdomen Muscles",
        "explanation": "The rectus abdominis flexes the spine, as in a sit-up."
    },
    {
        "id": 401,
        "question": "Which branch of anatomy studies embryonic development?",
        "options": [
            "Gross anatomy",
            "Microscopic anatomy",
            "Developmental anatomy",
            "Radiological anatomy"
        ],
        "answer": "Developmental anatomy",
        "difficulty": "easy",
        "topic": "Introduction to Human Anatomy",
        "explanation": "Developmental anatomy focuses on the structural changes from conception to birth."
    },
    {
        "id": 402,
        "question": "Which bone forms the lower part of the nasal septum?",
        "options": [
            "Ethmoid bone",
            "Nasal bone",
            "Vomer",
            "Maxilla"
        ],
        "answer": "Vomer",
        "difficulty": "hard",
        "topic": "Axial Skeleton",
        "explanation": "The vomer forms the inferior portion of the nasal septum."
    },
    {
        "id": 403,
        "question": "Which muscle flexes the elbow?",
        "options": [
            "Triceps brachii",
            "Biceps brachii",
            "Deltoid",
            "Pectoralis major"
        ],
        "answer": "Biceps brachii",
        "difficulty": "easy",
        "topic": "Upper Limb Muscles",
        "explanation": "The biceps brachii is the primary muscle for elbow flexion."
    },
    {
        "id": 404,
        "question": "Which skin receptor detects temperature changes?",
        "options": [
            "Meissner’s corpuscle",
            "Pacinian corpuscle",
            "Free nerve ending",
            "Merkel disc"
        ],
        "answer": "Free nerve ending",
        "difficulty": "hard",
        "topic": "Sensory Organs",
        "explanation": "Free nerve endings in the skin detect temperature and pain."
    },
    {
        "id": 405,
        "question": "Which cranial nerve controls tongue movement?",
        "options": [
            "Facial nerve",
            "Trigeminal nerve",
            "Hypoglossal nerve",
            "Vagus nerve"
        ],
        "answer": "Hypoglossal nerve",
        "difficulty": "medium",
        "topic": "Peripheral Nervous System",
        "explanation": "The hypoglossal nerve (cranial nerve XII) innervates tongue muscles."
    },
    {
        "id": 406,
        "question": "Which structure in the heart delays the electrical impulse?",
        "options": [
            "Sinoatrial node",
            "Atrioventricular node",
            "Bundle of His",
            "Purkinje fibers"
        ],
        "answer": "Atrioventricular node",
        "difficulty": "medium",
        "topic": "Cardiovascular System",
        "explanation": "The AV node delays the impulse to allow atrial contraction before ventricular contraction."
    },
    {
        "id": 407,
        "question": "Which structure in the respiratory system filters incoming air?",
        "options": [
            "Pharynx",
            "Nasal cavity",
            "Larynx",
            "Bronchi"
        ],
        "answer": "Nasal cavity",
        "difficulty": "easy",
        "topic": "Respiratory System",
        "explanation": "The nasal cavity filters air with hairs and mucus."
    },
    {
        "id": 408,
        "question": "Which part of the digestive system stores feces before elimination?",
        "options": [
            "Sigmoid colon",
            "Rectum",
            "Cecum",
            "Ileum"
        ],
        "answer": "Rectum",
        "difficulty": "easy",
        "topic": "Digestive System",
        "explanation": "The rectum stores feces until they are expelled through the anus."
    },
    {
        "id": 409,
        "question": "Which structure in the urinary system contains the renal pyramids?",
        "options": [
            "Renal cortex",
            "Renal medulla",
            "Renal pelvis",
            "Ureter"
        ],
        "answer": "Renal medulla",
        "difficulty": "hard",
        "topic": "Kidney Structure",
        "explanation": "The renal medulla contains renal pyramids, where urine is concentrated."
    },
    {
        "id": 410,
        "question": "Which hormone stimulates uterine contractions during childbirth?",
        "options": [
            "Prolactin",
            "Oxytocin",
            "Estrogen",
            "Progesterone"
        ],
        "answer": "Oxytocin",
        "difficulty": "medium",
        "topic": "Endocrine System",
        "explanation": "Oxytocin, released by the posterior pituitary, stimulates uterine contractions."
    },
    {
        "id": 411,
        "question": "Which lymphatic structure is located in the nasopharynx?",
        "options": [
            "Palatine tonsils",
            "Pharyngeal tonsils",
            "Spleen",
            "Thymus"
        ],
        "answer": "Pharyngeal tonsils",
        "difficulty": "medium",
        "topic": "Lymphatic and Immune System",
        "explanation": "Pharyngeal tonsils (adenoids) are located in the nasopharynx to trap pathogens."
    },
    {
        "id": 412,
        "question": "Which structure in the eye contains rods for low-light vision?",
        "options": [
            "Fovea",
            "Retina",
            "Iris",
            "Cornea"
        ],
        "answer": "Retina",
        "difficulty": "medium",
        "topic": "Sensory Organs",
        "explanation": "The retina contains rods for low-light vision and cones for color vision."
    },
    {
        "id": 413,
        "question": "Which anatomical landmark is used to locate the spleen?",
        "options": [
            "Left costal margin",
            "Umbilicus",
            "Sternal angle",
            "Inguinal ligament"
        ],
        "answer": "Left costal margin",
        "difficulty": "hard",
        "topic": "Surface Anatomy and Imaging",
        "explanation": "The spleen is located under the left costal margin, palpable in some conditions."
    },
    {
        "id": 414,
        "question": "Which bone articulates with the ulna at the elbow?",
        "options": [
            "Radius",
            "Humerus",
            "Scapula",
            "Clavicle"
        ],
        "answer": "Humerus",
        "difficulty": "medium",
        "topic": "Appendicular Skeleton",
        "explanation": "The humerus articulates with the ulna and radius at the elbow joint."
    },
    {
        "id": 415,
        "question": "Which muscle retracts the scapula?",
        "options": [
            "Pectoralis minor",
            "Rhomboid major",
            "Deltoid",
            "Trapezius"
        ],
        "answer": "Rhomboid major",
        "difficulty": "hard",
        "topic": "Upper Limb Muscles",
        "explanation": "The rhomboid major retracts the scapula toward the spine."
    },
    {
        "id": 416,
        "question": "Which part of the skin contains blood vessels for nourishment?",
        "options": [
            "Epidermis",
            "Dermis",
            "Stratum corneum",
            "Stratum basale"
        ],
        "answer": "Dermis",
        "difficulty": "medium",
        "topic": "Integumentary System",
        "explanation": "The dermis contains blood vessels that supply nutrients to the skin."
    },
    {
        "id": 417,
        "question": "Which part of the brain relays sensory information to the cortex?",
        "options": [
            "Hypothalamus",
            "Thalamus",
            "Cerebellum",
            "Medulla oblongata"
        ],
        "answer": "Thalamus",
        "difficulty": "medium",
        "topic": "Brain Anatomy",
        "explanation": "The thalamus acts as a relay station for sensory information to the cerebral cortex."
    },
    {
        "id": 418,
        "question": "Which structure in the heart separates the left and right sides?",
        "options": [
            "Atrioventricular node",
            "Septum",
            "Chordae tendineae",
            "Pulmonary valve"
        ],
        "answer": "Septum",
        "difficulty": "easy",
        "topic": "Cardiovascular System",
        "explanation": "The septum divides the heart into left and right sides, preventing blood mixing."
    },
    {
        "id": 419,
        "question": "Which structure in the respiratory system is the site of gas exchange?",
        "options": [
            "Bronchi",
            "Alveoli",
            "Trachea",
            "Larynx"
        ],
        "answer": "Alveoli",
        "difficulty": "easy",
        "topic": "Gas Exchange Structures",
        "explanation": "Alveoli are tiny sacs where oxygen and carbon dioxide are exchanged."
    },
    {
        "id": 420,
        "question": "Which part of the digestive system secretes hydrochloric acid?",
        "options": [
            "Stomach",
            "Small intestine",
            "Esophagus",
            "Large intestine"
        ],
        "answer": "Stomach",
        "difficulty": "easy",
        "topic": "Digestive System",
        "explanation": "The stomach secretes hydrochloric acid to aid in digestion and kill pathogens."
    },
    {
        "id": 421,
        "question": "Which structure in the female reproductive system is lined with ciliated epithelium?",
        "options": [
            "Uterus",
            "Vagina",
            "Fallopian tube",
            "Cervix"
        ],
        "answer": "Fallopian tube",
        "difficulty": "hard",
        "topic": "Female Reproductive System",
        "explanation": "The fallopian tube is lined with ciliated epithelium to move the egg toward the uterus."
    },
    {
        "id": 422,
        "question": "Which hormone is secreted by the adrenal cortex to regulate sodium?",
        "options": [
            "Cortisol",
            "Aldosterone",
            "Epinephrine",
            "Testosterone"
        ],
        "answer": "Aldosterone",
        "difficulty": "medium",
        "topic": "Endocrine System",
        "explanation": "Aldosterone promotes sodium reabsorption in the kidneys."
    },
    {
        "id": 423,
        "question": "Which lymphatic structure is located in the oropharynx?",
        "options": [
            "Pharyngeal tonsils",
            "Palatine tonsils",
            "Spleen",
            "Thymus"
        ],
        "answer": "Palatine tonsils",
        "difficulty": "medium",
        "topic": "Lymphatic and Immune System",
        "explanation": "Palatine tonsils are located in the oropharynx to trap pathogens."
    },
    {
        "id": 424,
        "question": "Which structure in the ear amplifies sound vibrations?",
        "options": [
            "Cochlea",
            "Ossicles",
            "Semicircular canals",
            "Tympanic membrane"
        ],
        "answer": "Ossicles",
        "difficulty": "medium",
        "topic": "Sensory Organs",
        "explanation": "The ossicles (malleus, incus, stapes) amplify sound vibrations in the middle ear."
    },
    {
        "id": 425,
        "question": "Which bone contains the cribriform plate for olfactory nerves?",
        "options": [
            "Sphenoid bone",
            "Ethmoid bone",
            "Frontal bone",
            "Temporal bone"
        ],
        "answer": "Ethmoid bone",
        "difficulty": "hard",
        "topic": "Axial Skeleton",
        "explanation": "The ethmoid bone’s cribriform plate allows olfactory nerves to pass to the nasal cavity."
    },
    {
        "id": 426,
        "question": "Which muscle compresses the cheeks, as in blowing air?",
        "options": [
            "Orbicularis oris",
            "Buccinator",
            "Zygomaticus major",
            "Masseter"
        ],
        "answer": "Buccinator",
        "difficulty": "medium",
        "topic": "Head and Neck Muscles",
        "explanation": "The buccinator compresses the cheeks, aiding in actions like blowing air."
    },
    {
        "id": 427,
        "question": "Which part of the skin is replaced every few weeks?",
        "options": [
            "Stratum corneum",
            "Dermis",
            "Hypodermis",
            "Stratum basale"
        ],
        "answer": "Stratum corneum",
        "difficulty": "medium",
        "topic": "Integumentary System",
        "explanation": "The stratum corneum, the outermost epidermal layer, is shed and replaced regularly."
    },
    {
        "id": 428,
        "question": "Which part of the brain controls breathing and heart rate?",
        "options": [
            "Cerebellum",
            "Medulla oblongata",
            "Thalamus",
            "Hypothalamus"
        ],
        "answer": "Medulla oblongata",
        "difficulty": "medium",
        "topic": "Brain Anatomy",
        "explanation": "The medulla oblongata regulates vital functions like breathing and heart rate."
    },
    {
        "id": 429,
        "question": "Which structure in the respiratory system contains cartilage plates instead of rings?",
        "options": [
            "Trachea",
            "Bronchi",
            "Bronchioles",
            "Larynx"
        ],
        "answer": "Bronchi",
        "difficulty": "hard",
        "topic": "Bronchial Tree",
        "explanation": "The bronchi have cartilage plates, unlike the trachea’s C-shaped rings."
    },
    {
        "id": 430,
        "question": "Which part of the digestive system has a sphincter at both ends?",
        "options": [
            "Esophagus",
            "Stomach",
            "Small intestine",
            "Large intestine"
        ],
        "answer": "Stomach",
        "difficulty": "medium",
        "topic": "Digestive System",
        "explanation": "The stomach has the cardiac and pyloric sphincters at its ends."
    },
    {
        "id": 431,
        "question": "Which structure in the male reproductive system is cut during a vasectomy?",
        "options": [
            "Epididymis",
            "Vas deferens",
            "Urethra",
            "Seminal vesicles"
        ],
        "answer": "Vas deferens",
        "difficulty": "medium",
        "topic": "Male Reproductive System",
        "explanation": "The vas deferens is severed during a vasectomy to prevent sperm transport."
    },
    {
        "id": 432,
        "question": "Which structure in the eye is opaque and forms the white of the eye?",
        "options": [
            "Cornea",
            "Sclera",
            "Retina",
            "Choroid"
        ],
        "answer": "Sclera",
        "difficulty": "easy",
        "topic": "Sensory Organs",
        "explanation": "The sclera is the tough, opaque layer forming the white of the eye."
    },
    {
        "id": 433,
        "question": "Which bone forms the lateral part of the skull?",
        "options": [
            "Frontal bone",
            "Parietal bone",
            "Occipital bone",
            "Temporal bone"
        ],
        "answer": "Temporal bone",
        "difficulty": "medium",
        "topic": "Axial Skeleton",
        "explanation": "The temporal bone forms the lateral sides of the skull, housing ear structures."
    },
    {
        "id": 434,
        "question": "Which muscle elevates the shoulders, as in shrugging?",
        "options": [
            "Latissimus dorsi",
            "Trapezius",
            "Pectoralis major",
            "Deltoid"
        ],
        "answer": "Trapezius",
        "difficulty": "medium",
        "topic": "Upper Limb Muscles",
        "explanation": "The trapezius elevates the shoulders and stabilizes the scapula."
    },
    {
        "id": 435,
        "question": "Which part of the skin contains elastic fibers for flexibility?",
        "options": [
            "Epidermis",
            "Dermis",
            "Hypodermis",
            "Stratum corneum"
        ],
        "answer": "Dermis",
        "difficulty": "medium",
        "topic": "Integumentary System",
        "explanation": "The dermis contains elastic fibers that provide skin flexibility and resilience."
    },
    {
        "id": 436,
        "question": "Which part of the brain processes auditory information?",
        "options": [
            "Frontal lobe",
            "Parietal lobe",
            "Temporal lobe",
            "Occipital lobe"
        ],
        "answer": "Temporal lobe",
        "difficulty": "medium",
        "topic": "Brain Anatomy",
        "explanation": "The temporal lobe contains the auditory cortex for processing sound."
    },
    {
        "id": 437,
        "question": "Which structure in the respiratory system is lined with pseudostratified epithelium?",
        "options": [
            "Alveoli",
            "Bronchioles",
            "Trachea",
            "Pharynx"
        ],
        "answer": "Trachea",
        "difficulty": "hard",
        "topic": "Respiratory System",
        "explanation": "The trachea is lined with pseudostratified ciliated columnar epithelium."
    },
    {
        "id": 438,
        "question": "Which part of the digestive system contains villi for absorption?",
        "options": [
            "Stomach",
            "Small intestine",
            "Large intestine",
            "Esophagus"
        ],
        "answer": "Small intestine",
        "difficulty": "medium",
        "topic": "Digestive System",
        "explanation": "Villi in the small intestine increase surface area for nutrient absorption."
    },
    {
        "id": 439,
        "question": "Which structure in the urinary system is embedded in the renal cortex?",
        "options": [
            "Renal pyramids",
            "Glomerulus",
            "Renal pelvis",
            "Ureter"
        ],
        "answer": "Glomerulus",
        "difficulty": "hard",
        "topic": "Kidney Structure",
        "explanation": "The glomerulus, located in the renal cortex, filters blood in the nephron."
    },
    {
        "id": 440,
        "question": "Which hormone prepares the uterus for pregnancy?",
        "options": [
            "Estrogen",
            "Progesterone",
            "FSH",
            "LH"
        ],
        "answer": "Progesterone",
        "difficulty": "medium",
        "topic": "Endocrine System",
        "explanation": "Progesterone maintains the uterine lining for potential pregnancy."
    },
    {
        "id": 441,
        "question": "Which lymphatic structure supports T cell maturation?",
        "options": [
            "Spleen",
            "Thymus",
            "Lymph nodes",
            "Tonsils"
        ],
        "answer": "Thymus",
        "difficulty": "medium",
        "topic": "Lymphatic and Immune System",
        "explanation": "The thymus is where T cells mature for immune function."
    },
    {
        "id": 442,
        "question": "Which structure in the nose warms and humidifies air?",
        "options": [
            "Nasal septum",
            "Turbinates",
            "Olfactory epithelium",
            "Nasal vestibule"
        ],
        "answer": "Turbinates",
        "difficulty": "medium",
        "topic": "Sensory Organs",
        "explanation": "Turbinates increase surface area to warm and humidify inhaled air."
    },
    {
        "id": 443,
        "question": "Which bone forms the upper arm?",
        "options": [
            "Radius",
            "Ulna",
            "Humerus",
            "Scapula"
        ],
        "answer": "Humerus",
        "difficulty": "easy",
        "topic": "Appendicular Skeleton",
        "explanation": "The humerus is the single bone of the upper arm, articulating with the shoulder and elbow."
    },
    {
        "id": 444,
        "question": "Which muscle plantarflexes the foot?",
        "options": [
            "Tibialis anterior",
            "Gastrocnemius",
            "Quadriceps",
            "Adductor longus"
        ],
        "answer": "Gastrocnemius",
        "difficulty": "medium",
        "topic": "Lower Limb Muscles",
        "explanation": "The gastrocnemius plantarflexes the foot, as in pointing the toes."
    },
    {
        "id": 445,
        "question": "Which part of the brain contains the pineal gland?",
        "options": [
            "Cerebrum",
            "Cerebellum",
            "Diencephalon",
            "Brainstem"
        ],
        "answer": "Diencephalon",
        "difficulty": "hard",
        "topic": "Brain Anatomy",
        "explanation": "The diencephalon houses the pineal gland, which secretes melatonin."
    },
    {
        "id": 446,
        "question": "Which structure in the digestive system prevents backflow from the stomach?",
        "options": [
            "Pyloric sphincter",
            "Cardiac sphincter",
            "Ileocecal valve",
            "Anal sphincter"
        ],
        "answer": "Cardiac sphincter",
        "difficulty": "medium",
        "topic": "Digestive System",
        "explanation": "The cardiac sphincter prevents backflow of stomach contents into the esophagus."
    },
    {
        "id": 447,
        "question": "Which structure in the male reproductive system produces fluid?",
        "options": [
            "Testes",
            "Epididymis",
            "Seminal vesicles",
            "Vas deferens"
        ],
        "answer": "Seminal vesicles",
        "difficulty": "medium",
        "topic": "Male Reproductive System",
        "explanation": "Seminal vesicles produce a fluid that nourishes sperm and forms part of semen."
    },
    {
        "id": 448,
        "question": "Which structure in the eye contains the pupil?",
        "options": [
            "Cornea",
            "Sclera",
            "Iris",
            "Retina"
        ],
        "answer": "Iris",
        "difficulty": "easy",
        "topic": "Sensory Organs",
        "explanation": "The iris contains the pupil, which regulates light entering the eye."
    },
    {
        "id": 449,
        "question": "Which bone forms the cheekbone?",
        "options": [
            "Maxilla",
            "Zygomatic bone",
            "Nasal bone",
            "Mandible"
        ],
        "answer": "Zygomatic bone",
        "difficulty": "medium",
        "topic": "Axial Skeleton",
        "explanation": "The zygomatic bone forms the prominence of the cheek and part of the orbit."
    },
    {
        "id": 450,
        "question": "Which muscle rotates the head to the opposite side?",
        "options": [
            "Sternocleidomastoid",
            "Trapezius",
            "Splenius capitis",
            "Levator scapulae"
        ],
        "answer": "Sternocleidomastoid",
        "difficulty": "hard",
        "topic": "Head and Neck Muscles",
        "explanation": "The sternocleidomastoid rotates the head to the opposite side when acting unilaterally."
    },
    {
        "id": 451,
        "question": "Which anatomical term describes a structure farther from the point of attachment to the trunk?",
        "options": [
            "Proximal",
            "Distal",
            "Medial",
            "Lateral"
        ],
        "answer": "Distal",
        "difficulty": "easy",
        "topic": "Anatomical Terminology",
        "explanation": "Distal refers to a structure farther from the point of attachment, as opposed to proximal."
    },
    {
        "id": 452,
        "question": "Which level of structural organization includes the smallest unit of life?",
        "options": [
            "Tissue",
            "Organ",
            "Cell",
            "System"
        ],
        "answer": "Cell",
        "difficulty": "easy",
        "topic": "Levels of Structural Organization",
        "explanation": "The cell is the smallest unit of life, forming the basis of all living organisms."
    },
    {
        "id": 453,
        "question": "Which body cavity contains the stomach and liver?",
        "options": [
            "Thoracic cavity",
            "Cranial cavity",
            "Abdominal cavity",
            "Pelvic cavity"
        ],
        "answer": "Abdominal cavity",
        "difficulty": "easy",
        "topic": "Body Cavities and Membranes",
        "explanation": "The abdominal cavity houses organs like the stomach, liver, and intestines."
    },
    {
        "id": 454,
        "question": "Which membrane lines the abdominopelvic cavity?",
        "options": [
            "Pericardium",
            "Pleura",
            "Peritoneum",
            "Meninges"
        ],
        "answer": "Peritoneum",
        "difficulty": "medium",
        "topic": "Body Cavities and Membranes",
        "explanation": "The peritoneum is a serous membrane lining the abdominopelvic cavity and covering its organs."
    },
    {
        "id": 455,
        "question": "Which bone is classified as a long bone?",
        "options": [
            "Tarsal",
            "Humerus",
            "Scapula",
            "Sternum"
        ],
        "answer": "Humerus",
        "difficulty": "easy",
        "topic": "Skeletal System",
        "explanation": "The humerus is a long bone, characterized by a shaft longer than its width."
    },
    {
        "id": 456,
        "question": "Which structure in a bone contains red bone marrow for blood cell production?",
        "options": [
            "Diaphysis",
            "Epiphysis",
            "Periosteum",
            "Medullary cavity"
        ],
        "answer": "Epiphysis",
        "difficulty": "medium",
        "topic": "Bone Structure",
        "explanation": "The epiphysis at the ends of long bones contains red bone marrow for hematopoiesis."
    },
    {
        "id": 457,
        "question": "Which bone forms the forehead?",
        "options": [
            "Parietal bone",
            "Occipital bone",
            "Frontal bone",
            "Temporal bone"
        ],
        "answer": "Frontal bone",
        "difficulty": "easy",
        "topic": "Axial Skeleton",
        "explanation": "The frontal bone forms the forehead and the upper part of the eye sockets."
    },
    {
        "id": 458,
        "question": "Which bone of the appendicular skeleton articulates with the tibia?",
        "options": [
            "Femur",
            "Fibula",
            "Patella",
            "Talus"
        ],
        "answer": "Femur",
        "difficulty": "medium",
        "topic": "Appendicular Skeleton",
        "explanation": "The femur articulates with the tibia at the knee joint."
    },
    {
        "id": 459,
        "question": "Which type of joint allows for the greatest range of motion?",
        "options": [
            "Hinge joint",
            "Pivot joint",
            "Ball-and-socket joint",
            "Gliding joint"
        ],
        "answer": "Ball-and-socket joint",
        "difficulty": "easy",
        "topic": "Joints",
        "explanation": "Ball-and-socket joints, like the hip, allow movement in multiple planes."
    },
    {
        "id": 460,
        "question": "Which hormone is essential for bone growth during childhood?",
        "options": [
            "Calcitonin",
            "Parathyroid hormone",
            "Growth hormone",
            "Thyroxine"
        ],
        "answer": "Growth hormone",
        "difficulty": "hard",
        "topic": "Bone Growth and Development",
        "explanation": "Growth hormone stimulates bone growth by promoting cartilage formation at growth plates."
    },
    {
        "id": 461,
        "question": "Which type of muscle lacks striations?",
        "options": [
            "Skeletal muscle",
            "Cardiac muscle",
            "Smooth muscle",
            "Striated muscle"
        ],
        "answer": "Smooth muscle",
        "difficulty": "medium",
        "topic": "Muscular System",
        "explanation": "Smooth muscle, found in organs like the intestines, lacks striations and is involuntary."
    },
    {
        "id": 462,
        "question": "Which structure connects a muscle to a bone?",
        "options": [
            "Ligament",
            "Tendon",
            "Fascia",
            "Aponeurosis"
        ],
        "answer": "Tendon",
        "difficulty": "easy",
        "topic": "Structure of Skeletal Muscle",
        "explanation": "Tendons are tough connective tissues that attach muscles to bones."
    },
    {
        "id": 463,
        "question": "Which molecule provides energy for muscle contraction?",
        "options": [
            "Glucose",
            "ATP",
            "Glycogen",
            "Creatine"
        ],
        "answer": "ATP",
        "difficulty": "medium",
        "topic": "Muscle Contraction Mechanism",
        "explanation": "ATP provides the energy for myosin to bind actin during muscle contraction."
    },
    {
        "id": 464,
        "question": "Which muscle closes the eye, as in blinking?",
        "options": [
            "Orbicularis oculi",
            "Zygomaticus major",
            "Frontalis",
            "Levator palpebrae"
        ],
        "answer": "Orbicularis oculi",
        "difficulty": "medium",
        "topic": "Head and Neck Muscles",
        "explanation": "The orbicularis oculi surrounds the eye and closes the eyelids."
    },
    {
        "id": 465,
        "question": "Which muscle adducts the thigh?",
        "options": [
            "Gluteus medius",
            "Adductor longus",
            "Sartorius",
            "Tensor fasciae latae"
        ],
        "answer": "Adductor longus",
        "difficulty": "medium",
        "topic": "Lower Limb Muscles",
        "explanation": "The adductor longus brings the thigh toward the midline of the body."
    },
    {
        "id": 466,
        "question": "Which layer of the skin is avascular?",
        "options": [
            "Dermis",
            "Hypodermis",
            "Epidermis",
            "Subcutaneous layer"
        ],
        "answer": "Epidermis",
        "difficulty": "medium",
        "topic": "Integumentary System",
        "explanation": "The epidermis lacks blood vessels and relies on diffusion from the dermis."
    },
    {
        "id": 467,
        "question": "Which skin appendage is involved in thermoregulation?",
        "options": [
            "Hair",
            "Nail",
            "Sweat gland",
            "Sebaceous gland"
        ],
        "answer": "Sweat gland",
        "difficulty": "easy",
        "topic": "Skin Appendages",
        "explanation": "Sweat glands produce sweat to cool the body through evaporation."
    },
    {
        "id": 468,
        "question": "Which function of the skin synthesizes a precursor to vitamin D?",
        "options": [
            "Protection",
            "Sensory perception",
            "Vitamin D synthesis",
            "Thermoregulation"
        ],
        "answer": "Vitamin D synthesis",
        "difficulty": "medium",
        "topic": "Functions of the Skin",
        "explanation": "The skin produces a vitamin D precursor when exposed to UV light."
    },
    {
        "id": 469,
        "question": "Which type of burn damages both the epidermis and dermis?",
        "options": [
            "First-degree burn",
            "Second-degree burn",
            "Third-degree burn",
            "Fourth-degree burn"
        ],
        "answer": "Second-degree burn",
        "difficulty": "medium",
        "topic": "Skin Layers and Clinical Relevance",
        "explanation": "Second-degree burns affect the epidermis and dermis, causing blisters."
    },
    {
        "id": 470,
        "question": "Which part of the brain processes visual information?",
        "options": [
            "Frontal lobe",
            "Parietal lobe",
            "Temporal lobe",
            "Occipital lobe"
        ],
        "answer": "Occipital lobe",
        "difficulty": "medium",
        "topic": "Brain Anatomy",
        "explanation": "The occipital lobe contains the visual cortex for processing visual stimuli."
    },
    {
        "id": 471,
        "question": "Which cranial nerve is responsible for smell?",
        "options": [
            "Optic nerve",
            "Olfactory nerve",
            "Trigeminal nerve",
            "Vagus nerve"
        ],
        "answer": "Olfactory nerve",
        "difficulty": "easy",
        "topic": "Peripheral Nervous System",
        "explanation": "The olfactory nerve (cranial nerve I) transmits smell information to the brain."
    },
    {
        "id": 472,
        "question": "Which division of the nervous system controls skeletal muscles?",
        "options": [
            "Autonomic",
            "Somatic",
            "Sympathetic",
            "Parasympathetic"
        ],
        "answer": "Somatic",
        "difficulty": "medium",
        "topic": "Autonomic Nervous System",
        "explanation": "The somatic nervous system controls voluntary movements of skeletal muscles."
    },
    {
        "id": 473,
        "question": "Which structure protects the spinal cord?",
        "options": [
            "Meninges",
            "Cerebrospinal fluid",
            "Vertebral column",
            "Blood-brain barrier"
        ],
        "answer": "Vertebral column",
        "difficulty": "easy",
        "topic": "Spinal Cord Structure",
        "explanation": "The vertebral column provides bony protection for the spinal cord."
    },
    {
        "id": 474,
        "question": "Which tract controls voluntary motor movements?",
        "options": [
            "Spinothalamic tract",
            "Corticospinal tract",
            "Dorsal column-medial lemniscus",
            "Reticulospinal tract"
        ],
        "answer": "Corticospinal tract",
        "difficulty": "hard",
        "topic": "Sensory and Motor Pathways",
        "explanation": "The corticospinal tract transmits motor signals from the brain to skeletal muscles."
    },
    {
        "id": 475,
        "question": "Which heart valve separates the left atrium from the left ventricle?",
        "options": [
            "Tricuspid valve",
            "Mitral valve",
            "Aortic valve",
            "Pulmonary valve"
        ],
        "answer": "Mitral valve",
        "difficulty": "medium",
        "topic": "Cardiovascular System",
        "explanation": "The mitral valve prevents backflow from the left ventricle to the left atrium."
    },
    {
        "id": 476,
        "question": "Which blood vessel allows nutrient exchange with tissues?",
        "options": [
            "Artery",
            "Vein",
            "Capillary",
            "Arteriole"
        ],
        "answer": "Capillary",
        "difficulty": "easy",
        "topic": "Blood Vessels",
        "explanation": "Capillaries have thin walls that allow nutrient and gas exchange with tissues."
    },
    {
        "id": 477,
        "question": "Which circulatory pathway delivers blood to the liver from the intestines?",
        "options": [
            "Pulmonary circulation",
            "Coronary circulation",
            "Portal circulation",
            "Systemic circulation"
        ],
        "answer": "Portal circulation",
        "difficulty": "hard",
        "topic": "Circulatory Pathways",
        "explanation": "The hepatic portal system delivers nutrient-rich blood from the intestines to the liver."
    },
    {
        "id": 478,
        "question": "Which artery supplies blood to the kidneys?",
        "options": [
            "Renal artery",
            "Coronary artery",
            "Carotid artery",
            "Mesenteric artery"
        ],
        "answer": "Renal artery",
        "difficulty": "medium",
        "topic": "Circulatory Pathways",
        "explanation": "The renal artery branches from the aorta to supply blood to the kidneys."
    },
    {
        "id": 479,
        "question": "Which lymphatic structure stores lymphocytes?",
        "options": [
            "Lymphatic capillaries",
            "Lymph nodes",
            "Thoracic duct",
            "Cisterna chyli"
        ],
        "answer": "Lymph nodes",
        "difficulty": "medium",
        "topic": "Lymphatic System",
        "explanation": "Lymph nodes store lymphocytes and filter lymph to detect pathogens."
    },
    {
        "id": 480,
        "question": "Which structure in the respiratory system connects the pharynx to the trachea?",
        "options": [
            "Larynx",
            "Bronchi",
            "Nasal cavity",
            "Alveoli"
        ],
        "answer": "Larynx",
        "difficulty": "easy",
        "topic": "Respiratory System",
        "explanation": "The larynx connects the pharynx to the trachea and houses the vocal cords."
    },
    {
        "id": 481,
        "question": "Which structure surrounds the pleural cavity?",
        "options": [
            "Visceral pleura",
            "Parietal pleura",
            "Pericardium",
            "Diaphragm"
        ],
        "answer": "Parietal pleura",
        "difficulty": "medium",
        "topic": "Structure of Lungs and Pleura",
        "explanation": "The parietal pleura lines the pleural cavity, surrounding the lungs."
    },
    {
        "id": 482,
        "question": "Which muscle depresses the ribs during forced exhalation?",
        "options": [
            "External intercostals",
            "Internal intercostals",
            "Diaphragm",
            "Pectoralis major"
        ],
        "answer": "Internal intercostals",
        "difficulty": "hard",
        "topic": "Respiratory Muscles",
        "explanation": "Internal intercostal muscles depress the ribs during forced exhalation."
    },
    {
        "id": 483,
        "question": "Which part of the alimentary canal transports food to the stomach?",
        "options": [
            "Pharynx",
            "Esophagus",
            "Small intestine",
            "Large intestine"
        ],
        "answer": "Esophagus",
        "difficulty": "easy",
        "topic": "Digestive System",
        "explanation": "The esophagus transports food from the pharynx to the stomach via peristalsis."
    },
    {
        "id": 484,
        "question": "Which accessory organ produces digestive enzymes for carbohydrates?",
        "options": [
            "Liver",
            "Gallbladder",
            "Pancreas",
            "Salivary glands"
        ],
        "answer": "Salivary glands",
        "difficulty": "medium",
        "topic": "Accessory Organs",
        "explanation": "Salivary glands produce amylase to begin carbohydrate digestion in the mouth."
    },
    {
        "id": 485,
        "question": "Which structure suspends the stomach to the liver?",
        "options": [
            "Mesentery",
            "Greater omentum",
            "Lesser omentum",
            "Falciform ligament"
        ],
        "answer": "Lesser omentum",
        "difficulty": "hard",
        "topic": "Peritoneum and Mesenteries",
        "explanation": "The lesser omentum connects the stomach and duodenum to the liver."
    },
    {
        "id": 486,
        "question": "Which artery supplies blood to the descending colon?",
        "options": [
            "Celiac trunk",
            "Superior mesenteric artery",
            "Inferior mesenteric artery",
            "Renal artery"
        ],
        "answer": "Inferior mesenteric artery",
        "difficulty": "hard",
        "topic": "Blood Supply to GI Tract",
        "explanation": "The inferior mesenteric artery supplies the descending colon and rectum."
    },
    {
        "id": 487,
        "question": "Which part of the nephron reabsorbs most of the filtered water?",
        "options": [
            "Proximal tubule",
            "Loop of Henle",
            "Distal tubule",
            "Collecting duct"
        ],
        "answer": "Proximal tubule",
        "difficulty": "hard",
        "topic": "Kidney Structure",
        "explanation": "The proximal tubule reabsorbs about 65% of filtered water and solutes."
    },
    {
        "id": 488,
        "question": "Which structure in the urinary system stores urine before excretion?",
        "options": [
            "Ureter",
            "Bladder",
            "Urethra",
            "Renal pelvis"
        ],
        "answer": "Bladder",
        "difficulty": "easy",
        "topic": "Urinary System",
        "explanation": "The bladder stores urine until it is excreted through the urethra."
    },
    {
        "id": 489,
        "question": "Which structure in the male reproductive system produces testosterone?",
        "options": [
            "Epididymis",
            "Vas deferens",
            "Testes",
            "Prostate gland"
        ],
        "answer": "Testes",
        "difficulty": "easy",
        "topic": "Male Reproductive System",
        "explanation": "The testes produce testosterone and sperm in the seminiferous tubules."
    },
    {
        "id": 490,
        "question": "Which gland in the male reproductive system produces a lubricating fluid?",
        "options": [
            "Prostate gland",
            "Seminal vesicles",
            "Bulbourethral gland",
            "Testes"
        ],
        "answer": "Bulbourethral gland",
        "difficulty": "medium",
        "topic": "Male Reproductive System",
        "explanation": "The bulbourethral gland produces a lubricating fluid during ejaculation."
    },
    {
        "id": 491,
        "question": "Which structure in the female reproductive system connects the uterus to the vagina?",
        "options": [
            "Ovary",
            "Fallopian tube",
            "Cervix",
            "Clitoris"
        ],
        "answer": "Cervix",
        "difficulty": "easy",
        "topic": "Female Reproductive System",
        "explanation": "The cervix is the lower part of the uterus that opens into the vagina."
    },
    {
        "id": 492,
        "question": "Which part of the female external genitalia is homologous to the penis?",
        "options": [
            "Labia majora",
            "Labia minora",
            "Clitoris",
            "Mons pubis"
        ],
        "answer": "Clitoris",
        "difficulty": "hard",
        "topic": "Female Reproductive System",
        "explanation": "The clitoris is homologous to the penis, sharing a common embryonic origin."
    },
    {
        "id": 493,
        "question": "Which endocrine gland produces thyroid hormone?",
        "options": [
            "Adrenal glands",
            "Thyroid gland",
            "Pituitary gland",
            "Pancreas"
        ],
        "answer": "Thyroid gland",
        "difficulty": "easy",
        "topic": "Endocrine System",
        "explanation": "The thyroid gland produces thyroid hormone, which regulates metabolism."
    },
    {
        "id": 494,
        "question": "Which hormone stimulates milk production in the mammary glands?",
        "options": [
            "Oxytocin",
            "Prolactin",
            "Estrogen",
            "Progesterone"
        ],
        "answer": "Prolactin",
        "difficulty": "medium",
        "topic": "Endocrine System",
        "explanation": "Prolactin, secreted by the anterior pituitary, stimulates milk production."
    },
    {
        "id": 495,
        "question": "Which lymphatic structure removes damaged red blood cells?",
        "options": [
            "Thymus",
            "Spleen",
            "Lymph nodes",
            "Tonsils"
        ],
        "answer": "Spleen",
        "difficulty": "medium",
        "topic": "Lymphatic and Immune System",
        "explanation": "The spleen filters blood and removes damaged red blood cells."
    },
    {
        "id": 496,
        "question": "Which structure in the eye refracts light to focus it on the retina?",
        "options": [
            "Iris",
            "Cornea",
            "Sclera",
            "Choroid"
        ],
        "answer": "Cornea",
        "difficulty": "medium",
        "topic": "Sensory Organs",
        "explanation": "The cornea is the primary structure that refracts light to focus it on the retina."
    },
    {
        "id": 497,
        "question": "Which structure in the ear converts sound waves into vibrations?",
        "options": [
            "Tympanic membrane",
            "Cochlea",
            "Semicircular canals",
            "Ossicles"
        ],
        "answer": "Tympanic membrane",
        "difficulty": "easy",
        "topic": "Sensory Organs",
        "explanation": "The tympanic membrane vibrates in response to sound waves, transmitting them to the ossicles."
    },
    {
        "id": 498,
        "question": "Which anatomical landmark is used to locate the appendix?",
        "options": [
            "Umbilicus",
            "McBurney’s point",
            "Sternal angle",
            "Inguinal ligament"
        ],
        "answer": "McBurney’s point",
        "difficulty": "hard",
        "topic": "Surface Anatomy and Imaging",
        "explanation": "McBurney’s point, in the right lower quadrant, is used to locate the appendix."
    },
    {
        "id": 499,
        "question": "Which bone forms the medial part of the ankle?",
        "options": [
            "Talus",
            "Calcaneus",
            "Tibia",
            "Fibula"
        ],
        "answer": "Tibia",
        "difficulty": "medium",
        "topic": "Appendicular Skeleton",
        "explanation": "The tibia forms the medial malleolus, the inner part of the ankle."
    },
    {
        "id": 500,
        "question": "Which muscle extends the spine?",
        "options": [
            "Rectus abdominis",
            "Erector spinae",
            "Quadratus lumborum",
            "Obliques"
        ],
        "answer": "Erector spinae",
        "difficulty": "medium",
        "topic": "Thorax and Abdomen Muscles",
        "explanation": "The erector spinae group extends the spine, maintaining posture."
    },
    {
        "id": 501,
        "question": "Which branch of anatomy uses imaging techniques like X-rays?",
        "options": [
            "Gross anatomy",
            "Microscopic anatomy",
            "Radiological anatomy",
            "Developmental anatomy"
        ],
        "answer": "Radiological anatomy",
        "difficulty": "easy",
        "topic": "Introduction to Human Anatomy",
        "explanation": "Radiological anatomy studies internal structures using imaging techniques."
    },
    {
        "id": 502,
        "question": "Which bone forms the bridge of the nose?",
        "options": [
            "Maxilla",
            "Nasal bone",
            "Zygomatic bone",
            "Vomer"
        ],
        "answer": "Nasal bone",
        "difficulty": "easy",
        "topic": "Axial Skeleton",
        "explanation": "The nasal bones form the bony bridge of the nose."
    },
    {
        "id": 503,
        "question": "Which muscle supinates the forearm?",
        "options": [
            "Pronator teres",
            "Supinator",
            "Biceps brachii",
            "Triceps brachii"
        ],
        "answer": "Supinator",
        "difficulty": "medium",
        "topic": "Upper Limb Muscles",
        "explanation": "The supinator muscle rotates the forearm to turn the palm upward."
    },
    {
        "id": 504,
        "question": "Which skin receptor detects deep pressure?",
        "options": [
            "Meissner’s corpuscle",
            "Pacinian corpuscle",
            "Free nerve ending",
            "Merkel disc"
        ],
        "answer": "Pacinian corpuscle",
        "difficulty": "hard",
        "topic": "Sensory Organs",
        "explanation": "Pacinian corpuscles detect deep pressure and vibration in the skin."
    },
    {
        "id": 505,
        "question": "Which cranial nerve controls facial expressions?",
        "options": [
            "Trigeminal nerve",
            "Facial nerve",
            "Vagus nerve",
            "Hypoglossal nerve"
        ],
        "answer": "Facial nerve",
        "difficulty": "medium",
        "topic": "Peripheral Nervous System",
        "explanation": "The facial nerve (cranial nerve VII) innervates muscles of facial expression."
    },
    {
        "id": 506,
        "question": "Which structure in the heart initiates the heartbeat?",
        "options": [
            "Atrioventricular node",
            "Sinoatrial node",
            "Bundle of His",
            "Purkinje fibers"
        ],
        "answer": "Sinoatrial node",
        "difficulty": "medium",
        "topic": "Cardiovascular System",
        "explanation": "The sinoatrial node acts as the heart’s pacemaker, initiating each heartbeat."
    },
    {
        "id": 507,
        "question": "Which structure in the respiratory system humidifies incoming air?",
        "options": [
            "Larynx",
            "Trachea",
            "Nasal cavity",
            "Bronchi"
        ],
        "answer": "Nasal cavity",
        "difficulty": "easy",
        "topic": "Respiratory System",
        "explanation": "The nasal cavity humidifies air with mucus to protect the respiratory tract."
    },
    {
        "id": 508,
        "question": "Which part of the digestive system absorbs water and forms feces?",
        "options": [
            "Small intestine",
            "Large intestine",
            "Stomach",
            "Esophagus"
        ],
        "answer": "Large intestine",
        "difficulty": "easy",
        "topic": "Digestive System",
        "explanation": "The large intestine absorbs water and compacts waste into feces."
    },
    {
        "id": 509,
        "question": "Which structure in the urinary system funnels urine into the ureter?",
        "options": [
            "Renal cortex",
            "Renal medulla",
            "Renal pelvis",
            "Glomerulus"
        ],
        "answer": "Renal pelvis",
        "difficulty": "medium",
        "topic": "Kidney Structure",
        "explanation": "The renal pelvis collects urine from the nephrons and funnels it into the ureter."
    },
    {
        "id": 510,
        "question": "Which hormone regulates blood glucose levels by promoting uptake?",
        "options": [
            "Glucagon",
            "Insulin",
            "Cortisol",
            "Epinephrine"
        ],
        "answer": "Insulin",
        "difficulty": "medium",
        "topic": "Endocrine System",
        "explanation": "Insulin, produced by the pancreas, lowers blood glucose by promoting cellular uptake."
    },
    {
        "id": 511,
        "question": "Which lymphatic structure produces antibodies?",
        "options": [
            "Thymus",
            "Spleen",
            "Lymph nodes",
            "Tonsils"
        ],
        "answer": "Lymph nodes",
        "difficulty": "medium",
        "topic": "Lymphatic and Immune System",
        "explanation": "Lymph nodes house B cells that produce antibodies to fight infections."
    },
    {
        "id": 512,
        "question": "Which structure in the eye regulates the amount of light entering?",
        "options": [
            "Cornea",
            "Lens",
            "Iris",
            "Retina"
        ],
        "answer": "Iris",
        "difficulty": "easy",
        "topic": "Sensory Organs",
        "explanation": "The iris adjusts the pupil size to control light entry into the eye."
    },
    {
        "id": 513,
        "question": "Which anatomical landmark is used to locate the pancreas?",
        "options": [
            "Umbilicus",
            "Left costal margin",
            "Epigastric region",
            "Inguinal ligament"
        ],
        "answer": "Epigastric region",
        "difficulty": "hard",
        "topic": "Surface Anatomy and Imaging",
        "explanation": "The pancreas is located in the epigastric region, behind the stomach."
    },
    {
        "id": 514,
        "question": "Which bone forms the lateral part of the ankle?",
        "options": [
            "Tibia",
            "Fibula",
            "Talus",
            "Calcaneus"
        ],
        "answer": "Fibula",
        "difficulty": "medium",
        "topic": "Appendicular Skeleton",
        "explanation": "The fibula forms the lateral malleolus, the outer part of the ankle."
    },
    {
        "id": 515,
        "question": "Which muscle rotates the trunk to the opposite side?",
        "options": [
            "Rectus abdominis",
            "External oblique",
            "Erector spinae",
            "Quadratus lumborum"
        ],
        "answer": "External oblique",
        "difficulty": "hard",
        "topic": "Thorax and Abdomen Muscles",
        "explanation": "The external oblique rotates the trunk to the opposite side when contracting unilaterally."
    },
    {
        "id": 516,
        "question": "Which part of the skin contains collagen fibers for strength?",
        "options": [
            "Epidermis",
            "Dermis",
            "Hypodermis",
            "Stratum corneum"
        ],
        "answer": "Dermis",
        "difficulty": "medium",
        "topic": "Integumentary System",
        "explanation": "The dermis contains collagen fibers that provide strength and support to the skin."
    },
    {
        "id": 517,
        "question": "Which part of the spinal cord contains motor neurons?",
        "options": [
            "Dorsal horn",
            "Ventral horn",
            "Lateral horn",
            "Central canal"
        ],
        "answer": "Ventral horn",
        "difficulty": "hard",
        "topic": "Spinal Cord Structure",
        "explanation": "The ventral horn contains motor neurons that innervate skeletal muscles."
    },
    {
        "id": 518,
        "question": "Which structure in the heart pumps blood into the aorta?",
        "options": [
            "Right atrium",
            "Left atrium",
            "Right ventricle",
            "Left ventricle"
        ],
        "answer": "Left ventricle",
        "difficulty": "easy",
        "topic": "Cardiovascular System",
        "explanation": "The left ventricle pumps oxygenated blood into the aorta for systemic circulation."
    },
    {
        "id": 519,
        "question": "Which structure in the respiratory system lacks cartilage support?",
        "options": [
            "Trachea",
            "Bronchi",
            "Bronchioles",
            "Larynx"
        ],
        "answer": "Bronchioles",
        "difficulty": "hard",
        "topic": "Bronchial Tree",
        "explanation": "Bronchioles lack cartilage and rely on smooth muscle for support."
    },
    {
        "id": 520,
        "question": "Which part of the digestive system begins protein digestion?",
        "options": [
            "Mouth",
            "Stomach",
            "Small intestine",
            "Large intestine"
        ],
        "answer": "Stomach",
        "difficulty": "medium",
        "topic": "Digestive System",
        "explanation": "The stomach secretes pepsin to begin protein digestion."
    },
    {
        "id": 521,
        "question": "Which structure in the female reproductive system produces progesterone?",
        "options": [
            "Uterus",
            "Ovary",
            "Fallopian tube",
            "Cervix"
        ],
        "answer": "Ovary",
        "difficulty": "medium",
        "topic": "Female Reproductive System",
        "explanation": "The corpus luteum in the ovary produces progesterone to maintain pregnancy."
    },
    {
        "id": 522,
        "question": "Which hormone is secreted by the anterior pituitary to stimulate growth?",
        "options": [
            "Thyroid-stimulating hormone",
            "Adrenocorticotropic hormone",
            "Growth hormone",
            "Prolactin"
        ],
        "answer": "Growth hormone",
        "difficulty": "medium",
        "topic": "Endocrine System",
        "explanation": "Growth hormone promotes growth of tissues, especially bones and muscles."
    },
    {
        "id": 523,
        "question": "Which lymphatic structure is located in the ileum?",
        "options": [
            "Palatine tonsils",
            "Peyer’s patches",
            "Thymus",
            "Spleen"
        ],
        "answer": "Peyer’s patches",
        "difficulty": "hard",
        "topic": "Lymphatic and Immune System",
        "explanation": "Peyer’s patches in the ileum monitor gut pathogens and initiate immune responses."
    },
    {
        "id": 524,
        "question": "Which structure in the eye is transparent and covers the iris?",
        "options": [
            "Sclera",
            "Cornea",
            "Retina",
            "Choroid"
        ],
        "answer": "Cornea",
        "difficulty": "easy",
        "topic": "Sensory Organs",
        "explanation": "The cornea is a transparent layer covering the iris and pupil."
    },
    {
        "id": 525,
        "question": "Which bone contains the mastoid process?",
        "options": [
            "Frontal bone",
            "Parietal bone",
            "Temporal bone",
            "Occipital bone"
        ],
        "answer": "Temporal bone",
        "difficulty": "medium",
        "topic": "Axial Skeleton",
        "explanation": "The temporal bone contains the mastoid process, a bony projection behind the ear."
    },
    {
        "id": 526,
        "question": "Which muscle depresses the mandible to open the mouth?",
        "options": [
            "Masseter",
            "Temporalis",
            "Lateral pterygoid",
            "Medial pterygoid"
        ],
        "answer": "Lateral pterygoid",
        "difficulty": "hard",
        "topic": "Head and Neck Muscles",
        "explanation": "The lateral pterygoid depresses the mandible to open the mouth."
    },
    {
        "id": 527,
        "question": "Which part of the skin is shed during desquamation?",
        "options": [
            "Stratum basale",
            "Stratum corneum",
            "Dermis",
            "Hypodermis"
        ],
        "answer": "Stratum corneum",
        "difficulty": "medium",
        "topic": "Integumentary System",
        "explanation": "The stratum corneum consists of dead cells that are shed during desquamation."
    },
    {
        "id": 528,
        "question": "Which part of the brain regulates body temperature?",
        "options": [
            "Cerebellum",
            "Hypothalamus",
            "Thalamus",
            "Medulla oblongata"
        ],
        "answer": "Hypothalamus",
        "difficulty": "medium",
        "topic": "Brain Anatomy",
        "explanation": "The hypothalamus regulates body temperature, hunger, and other homeostatic functions."
    },
    {
        "id": 529,
        "question": "Which structure in the heart receives deoxygenated blood from the body?",
        "options": [
            "Left atrium",
            "Right atrium",
            "Left ventricle",
            "Right ventricle"
        ],
        "answer": "Right atrium",
        "difficulty": "easy",
        "topic": "Cardiovascular System",
        "explanation": "The right atrium receives deoxygenated blood from the body via the venae cavae."
    },
    {
        "id": 530,
        "question": "Which structure in the respiratory system contains surfactant-producing cells?",
        "options": [
            "Bronchi",
            "Bronchioles",
            "Alveoli",
            "Trachea"
        ],
        "answer": "Alveoli",
        "difficulty": "hard",
        "topic": "Gas Exchange Structures",
        "explanation": "Type II alveolar cells produce surfactant to reduce surface tension in alveoli."
    },
    {
        "id": 531,
        "question": "Which part of the digestive system contains the appendix?",
        "options": [
            "Small intestine",
            "Large intestine",
            "Stomach",
            "Esophagus"
        ],
        "answer": "Large intestine",
        "difficulty": "easy",
        "topic": "Digestive System",
        "explanation": "The appendix is a small pouch attached to the cecum of the large intestine."
    },
    {
        "id": 532,
        "question": "Which structure in the male reproductive system stores sperm before ejaculation?",
        "options": [
            "Testes",
            "Epididymis",
            "Vas deferens",
            "Urethra"
        ],
        "answer": "Epididymis",
        "difficulty": "medium",
        "topic": "Male Reproductive System",
        "explanation": "The epididymis stores and matures sperm before they are transported via the vas deferens."
    },
    {
        "id": 533,
        "question": "Which hormone increases blood calcium levels?",
        "options": [
            "Calcitonin",
            "Parathyroid hormone",
            "Thyroxine",
            "Insulin"
        ],
        "answer": "Parathyroid hormone",
        "difficulty": "medium",
        "topic": "Endocrine System",
        "explanation": "Parathyroid hormone increases blood calcium by stimulating bone resorption."
    },
    {
        "id": 534,
        "question": "Which lymphatic structure drains lymph from the lower body?",
        "options": [
            "Right lymphatic duct",
            "Thoracic duct",
            "Spleen",
            "Thymus"
        ],
        "answer": "Thoracic duct",
        "difficulty": "hard",
        "topic": "Lymphatic System",
        "explanation": "The thoracic duct drains lymph from the lower body and left upper body into the venous system."
    },
    {
        "id": 535,
        "question": "Which structure in the ear contains fluid for balance?",
        "options": [
            "Cochlea",
            "Tympanic membrane",
            "Semicircular canals",
            "Ossicles"
        ],
        "answer": "Semicircular canals",
        "difficulty": "medium",
        "topic": "Sensory Organs",
        "explanation": "The semicircular canals contain fluid that detects head movement for balance."
    },
    {
        "id": 536,
        "question": "Which bone forms the hard palate?",
        "options": [
            "Nasal bone",
            "Maxilla",
            "Vomer",
            "Zygomatic bone"
        ],
        "answer": "Maxilla",
        "difficulty": "medium",
        "topic": "Axial Skeleton",
        "explanation": "The maxilla, along with the palatine bones, forms the hard palate of the mouth."
    },
    {
        "id": 537,
        "question": "Which muscle tenses the vocal cords?",
        "options": [
            "Thyroarytenoid",
            "Cricothyroid",
            "Lateral cricoarytenoid",
            "Posterior cricoarytenoid"
        ],
        "answer": "Cricothyroid",
        "difficulty": "hard",
        "topic": "Head and Neck Muscles",
        "explanation": "The cricothyroid muscle tenses the vocal cords to adjust pitch."
    },
    {
        "id": 538,
        "question": "Which part of the skin contains arrector pili muscles?",
        "options": [
            "Epidermis",
            "Dermis",
            "Hypodermis",
            "Stratum corneum"
        ],
        "answer": "Dermis",
        "difficulty": "medium",
        "topic": "Integumentary System",
        "explanation": "Arrector pili muscles in the dermis cause hair to stand upright, producing goosebumps."
    },
    {
        "id": 539,
        "question": "Which part of the brain integrates sensory and motor functions?",
        "options": [
            "Cerebellum",
            "Thalamus",
            "Parietal lobe",
            "Hypothalamus"
        ],
        "answer": "Parietal lobe",
        "difficulty": "medium",
        "topic": "Brain Anatomy",
        "explanation": "The parietal lobe integrates sensory input with motor functions for spatial awareness."
    },
    {
        "id": 540,
        "question": "Which structure in the heart prevents backflow from the pulmonary artery?",
        "options": [
            "Mitral valve",
            "Tricuspid valve",
            "Aortic valve",
            "Pulmonary valve"
        ],
        "answer": "Pulmonary valve",
        "difficulty": "medium",
        "topic": "Cardiovascular System",
        "explanation": "The pulmonary valve prevents backflow from the pulmonary artery into the right ventricle."
    },
    {
        "id": 541,
        "question": "Which part of the digestive system is the shortest segment of the small intestine?",
        "options": [
            "Duodenum",
            "Jejunum",
            "Ileum",
            "Cecum"
        ],
        "answer": "Duodenum",
        "difficulty": "medium",
        "topic": "Digestive System",
        "explanation": "The duodenum is the shortest part of the small intestine, receiving chyme from the stomach."
    },
    {
        "id": 542,
        "question": "Which structure in the female reproductive system is the site of fertilization?",
        "options": [
            "Uterus",
            "Ovary",
            "Fallopian tube",
            "Vagina"
        ],
        "answer": "Fallopian tube",
        "difficulty": "medium",
        "topic": "Female Reproductive System",
        "explanation": "Fertilization typically occurs in the fallopian tube, where sperm meets the egg."
    },
    {
        "id": 543,
        "question": "Which hormone is secreted by the pineal gland?",
        "options": [
            "Melatonin",
            "Cortisol",
            "Thyroxine",
            "Insulin"
        ],
        "answer": "Melatonin",
        "difficulty": "medium",
        "topic": "Endocrine System",
        "explanation": "Melatonin regulates sleep-wake cycles and is produced by the pineal gland."
    },
    {
        "id": 544,
        "question": "Which lymphatic structure is located in the groin?",
        "options": [
            "Axillary lymph nodes",
            "Inguinal lymph nodes",
            "Cervical lymph nodes",
            "Spleen"
        ],
        "answer": "Inguinal lymph nodes",
        "difficulty": "medium",
        "topic": "Lymphatic and Immune System",
        "explanation": "Inguinal lymph nodes in the groin filter lymph from the lower limbs."
    },
    {
        "id": 545,
        "question": "Which structure in the ear protects the middle ear from pathogens?",
        "options": [
            "Tympanic membrane",
            "Eustachian tube",
            "Cochlea",
            "Semicircular canals"
        ],
        "answer": "Eustachian tube",
        "difficulty": "hard",
        "topic": "Sensory Organs",
        "explanation": "The Eustachian tube equalizes pressure and drains mucus to protect the middle ear."
    },
    {
        "id": 546,
        "question": "Which bone forms the posterior part of the hard palate?",
        "options": [
            "Maxilla",
            "Palatine bone",
            "Vomer",
            "Nasal bone"
        ],
        "answer": "Palatine bone",
        "difficulty": "hard",
        "topic": "Axial Skeleton",
        "explanation": "The palatine bone forms the posterior portion of the hard palate."
    },
    {
        "id": 547,
        "question": "Which muscle elevates the hyoid bone during swallowing?",
        "options": [
            "Sternocleidomastoid",
            "Mylohyoid",
            "Platysma",
            "Masseter"
        ],
        "answer": "Mylohyoid",
        "difficulty": "hard",
        "topic": "Head and Neck Muscles",
        "explanation": "The mylohyoid elevates the hyoid bone and floor of the mouth during swallowing."
    },
    {
        "id": 548,
        "question": "Which part of the skin contains sebaceous glands?",
        "options": [
            "Epidermis",
            "Dermis",
            "Stratum corneum",
            "Stratum basale"
        ],
        "answer": "Dermis",
        "difficulty": "medium",
        "topic": "Integumentary System",
        "explanation": "Sebaceous glands in the dermis secrete sebum to lubricate skin and hair."
    },
    {
        "id": 549,
        "question": "Which part of the brain connects the cerebral hemispheres?",
        "options": [
            "Cerebellum",
            "Corpus callosum",
            "Thalamus",
            "Medulla oblongata"
        ],
        "answer": "Corpus callosum",
        "difficulty": "medium",
        "topic": "Brain Anatomy",
        "explanation": "The corpus callosum is a bundle of fibers connecting the left and right cerebral hemispheres."
    },
    {
        "id": 550,
        "question": "Which structure in the heart anchors the heart valves?",
        "options": [
            "Chordae tendineae",
            "Septum",
            "Purkinje fibers",
            "Sinoatrial node"
        ],
        "answer": "Chordae tendineae",
        "difficulty": "hard",
        "topic": "Cardiovascular System",
        "explanation": "Chordae tendineae anchor the atrioventricular valves to prevent prolapse."
    }
]
