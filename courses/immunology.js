const QUESTIONS = [
    {
        "id": 1,
        "question": "Which type of white blood cell is primarily responsible for phagocytosis of pathogens?",
        "options": [
            "Lymphocytes",
            "Neutrophils",
            "Eosinophils",
            "Basophils"
        ],
        "answer": "Neutrophils",
        "difficulty": "easy",
        "topic": "White Blood Cells",
        "explanation": "Neutrophils are the most abundant type of white blood cell and are key phagocytes, engulfing and destroying pathogens like bacteria."
    },
    {
        "id": 2,
        "question": "What is the primary role of antibodies in the immune response?",
        "options": [
            "Directly kill pathogens",
            "Neutralize pathogens and mark them for destruction",
            "Produce cytokines",
            "Activate complement proteins only"
        ],
        "answer": "Neutralize pathogens and mark them for destruction",
        "difficulty": "medium",
        "topic": "Antibodies",
        "explanation": "Antibodies bind to pathogens, neutralizing them by preventing their entry into cells and marking them for phagocytosis or complement-mediated destruction."
    },
    {
        "id": 3,
        "question": "Which of the following is a characteristic of innate immunity?",
        "options": [
            "Highly specific to particular pathogens",
            "Has immunological memory",
            "Responds rapidly to infection",
            "Requires prior exposure to a pathogen"
        ],
        "answer": "Responds rapidly to infection",
        "difficulty": "easy",
        "topic": "Innate Immunity",
        "explanation": "Innate immunity provides a rapid, non-specific response to pathogens, unlike adaptive immunity, which is specific and has memory."
    },
    {
        "id": 4,
        "question": "What is the main function of T-helper cells?",
        "options": [
            "Kill infected cells",
            "Produce antibodies",
            "Coordinate immune responses",
            "Engulf pathogens"
        ],
        "answer": "Coordinate immune responses",
        "difficulty": "medium",
        "topic": "T Cells",
        "explanation": "T-helper cells release cytokines to activate and coordinate other immune cells, such as B cells and cytotoxic T cells."
    },
    {
        "id": 5,
        "question": "Which molecule presents antigens to T cells?",
        "options": [
            "Major Histocompatibility Complex (MHC)",
            "Immunoglobulin",
            "Complement protein",
            "Cytokine"
        ],
        "answer": "Major Histocompatibility Complex (MHC)",
        "difficulty": "medium",
        "topic": "Antigen Presentation",
        "explanation": "MHC molecules display antigen fragments on cell surfaces for recognition by T cells, enabling immune activation."
    },
    {
        "id": 6,
        "question": "What is the role of the complement system in immunity?",
        "options": [
            "Produces antibodies",
            "Enhances pathogen destruction",
            "Directly kills viruses",
            "Suppresses immune responses"
        ],
        "answer": "Enhances pathogen destruction",
        "difficulty": "medium",
        "topic": "Complement System",
        "explanation": "The complement system enhances immunity by promoting phagocytosis, lysing pathogens, and amplifying inflammation."
    },
    {
        "id": 7,
        "question": "Which type of immunity is conferred by vaccination?",
        "options": [
            "Innate immunity",
            "Passive immunity",
            "Active immunity",
            "Non-specific immunity"
        ],
        "answer": "Active immunity",
        "difficulty": "easy",
        "topic": "Vaccination",
        "explanation": "Vaccination induces active immunity by stimulating the body to produce its own antibodies and memory cells."
    },
    {
        "id": 8,
        "question": "What is an autoimmune disease?",
        "options": [
            "A condition where the immune system attacks pathogens",
            "A condition where the immune system attacks self-tissues",
            "A condition caused by excessive antibody production",
            "A condition due to lack of immune response"
        ],
        "answer": "A condition where the immune system attacks self-tissues",
        "difficulty": "easy",
        "topic": "Autoimmune Diseases",
        "explanation": "Autoimmune diseases occur when the immune system mistakenly targets and damages the body's own tissues."
    },
    {
        "id": 9,
        "question": "Which cell type is responsible for producing antibodies?",
        "options": [
            "B cells",
            "T cells",
            "Macrophages",
            "Dendritic cells"
        ],
        "answer": "B cells",
        "difficulty": "easy",
        "topic": "B Cells",
        "explanation": "B cells differentiate into plasma cells, which produce antibodies specific to antigens."
    },
    {
        "id": 10,
        "question": "What is the function of cytotoxic T cells?",
        "options": [
            "Produce antibodies",
            "Kill infected cells",
            "Phagocytose pathogens",
            "Present antigens"
        ],
        "answer": "Kill infected cells",
        "difficulty": "medium",
        "topic": "T Cells",
        "explanation": "Cytotoxic T cells recognize and destroy infected or cancerous cells by inducing apoptosis."
    },
    {
        "id": 11,
        "question": "Which of the following is NOT a primary lymphoid organ?",
        "options": [
            "Bone marrow",
            "Thymus",
            "Spleen",
            "Fetal liver"
        ],
        "answer": "Spleen",
        "difficulty": "medium",
        "topic": "Lymphoid Organs",
        "explanation": "The spleen is a secondary lymphoid organ where immune responses occur, while bone marrow, thymus, and fetal liver are primary sites of lymphocyte development."
    },
    {
        "id": 12,
        "question": "What is the role of dendritic cells in the immune system?",
        "options": [
            "Produce antibodies",
            "Present antigens to T cells",
            "Kill infected cells",
            "Phagocytose pathogens only"
        ],
        "answer": "Present antigens to T cells",
        "difficulty": "medium",
        "topic": "Dendritic Cells",
        "explanation": "Dendritic cells are antigen-presenting cells that capture antigens and present them to T cells to initiate adaptive immune responses."
    },
    {
        "id": 13,
        "question": "Which immunoglobulin is most abundant in blood?",
        "options": [
            "IgA",
            "IgD",
            "IgG",
            "IgM"
        ],
        "answer": "IgG",
        "difficulty": "easy",
        "topic": "Immunoglobulins",
        "explanation": "IgG is the most abundant antibody in blood, playing a key role in neutralizing pathogens and opsonization."
    },
    {
        "id": 14,
        "question": "What triggers the release of histamine in allergic reactions?",
        "options": [
            "IgE binding to mast cells",
            "IgG binding to macrophages",
            "T cell activation",
            "Complement activation"
        ],
        "answer": "IgE binding to mast cells",
        "difficulty": "medium",
        "topic": "Allergic Reactions",
        "explanation": "IgE antibodies bind to mast cells, and upon allergen exposure, trigger histamine release, causing allergic symptoms."
    },
    {
        "id": 15,
        "question": "Which of the following is a secondary lymphoid organ?",
        "options": [
            "Bone marrow",
            "Thymus",
            "Lymph nodes",
            "Fetal liver"
        ],
        "answer": "Lymph nodes",
        "difficulty": "easy",
        "topic": "Lymphoid Organs",
        "explanation": "Lymph nodes are secondary lymphoid organs where immune cells interact to mount adaptive immune responses."
    },
    {
        "id": 16,
        "question": "What is the primary source of antibodies in breast milk?",
        "options": [
            "IgE",
            "IgA",
            "IgG",
            "IgM"
        ],
        "answer": "IgA",
        "difficulty": "medium",
        "topic": "Immunoglobulins",
        "explanation": "Secretory IgA is abundant in breast milk, providing passive immunity to infants by protecting mucosal surfaces."
    },
    {
        "id": 17,
        "question": "Which cytokine is primarily involved in T cell proliferation?",
        "options": [
            "IL-1",
            "IL-2",
            "IL-4",
            "TNF-alpha"
        ],
        "answer": "IL-2",
        "difficulty": "hard",
        "topic": "Cytokines",
        "explanation": "IL-2, produced by activated T cells, promotes T cell proliferation and differentiation, amplifying immune responses."
    },
    {
        "id": 18,
        "question": "What is the role of natural killer (NK) cells?",
        "options": [
            "Produce antibodies",
            "Kill virus-infected and cancerous cells",
            "Present antigens",
            "Coordinate immune responses"
        ],
        "answer": "Kill virus-infected and cancerous cells",
        "difficulty": "medium",
        "topic": "NK Cells",
        "explanation": "NK cells are innate immune cells that target and destroy virus-infected and cancerous cells without prior sensitization."
    },
    {
        "id": 19,
        "question": "Which of the following is a hallmark of adaptive immunity?",
        "options": [
            "Rapid response",
            "Non-specific defense",
            "Immunological memory",
            "Physical barriers"
        ],
        "answer": "Immunological memory",
        "difficulty": "easy",
        "topic": "Adaptive Immunity",
        "explanation": "Adaptive immunity is characterized by specificity and immunological memory, allowing faster responses upon re-exposure to pathogens."
    },
    {
        "id": 20,
        "question": "What is the function of MHC class I molecules?",
        "options": [
            "Present antigens to B cells",
            "Present antigens to cytotoxic T cells",
            "Present antigens to helper T cells",
            "Produce cytokines"
        ],
        "answer": "Present antigens to cytotoxic T cells",
        "difficulty": "medium",
        "topic": "MHC Molecules",
        "explanation": "MHC class I molecules present intracellular antigens to cytotoxic T cells, which then destroy infected cells."
    },
    {
        "id": 21,
        "question": "Which type of hypersensitivity involves IgE-mediated reactions?",
        "options": [
            "Type I",
            "Type II",
            "Type III",
            "Type IV"
        ],
        "answer": "Type I",
        "difficulty": "medium",
        "topic": "Hypersensitivity",
        "explanation": "Type I hypersensitivity, such as allergies, is mediated by IgE antibodies triggering mast cell degranulation."
    },
    {
        "id": 22,
        "question": "What is the primary function of regulatory T cells?",
        "options": [
            "Kill infected cells",
            "Suppress immune responses",
            "Produce antibodies",
            "Phagocytose pathogens"
        ],
        "answer": "Suppress immune responses",
        "difficulty": "medium",
        "topic": "T Cells",
        "explanation": "Regulatory T cells maintain immune tolerance and prevent autoimmunity by suppressing excessive immune responses."
    },
    {
        "id": 23,
        "question": "Which immunoglobulin is the first to be produced in an immune response?",
        "options": [
            "IgA",
            "IgD",
            "IgG",
            "IgM"
        ],
        "answer": "IgM",
        "difficulty": "medium",
        "topic": "Immunoglobulins",
        "explanation": "IgM is the first antibody produced during a primary immune response, effective in agglutination and complement activation."
    },
    {
        "id": 24,
        "question": "What is the role of the thymus in immunity?",
        "options": [
            "Antibody production",
            "T cell maturation",
            "Phagocytosis",
            "Antigen presentation"
        ],
        "answer": "T cell maturation",
        "difficulty": "easy",
        "topic": "Thymus",
        "explanation": "The thymus is a primary lymphoid organ where T cells mature and develop the ability to recognize antigens."
    },
    {
        "id": 25,
        "question": "Which of the following is an example of passive immunity?",
        "options": [
            "Vaccination",
            "Recovery from infection",
            "Transfer of maternal antibodies",
            "T cell activation"
        ],
        "answer": "Transfer of maternal antibodies",
        "difficulty": "easy",
        "topic": "Passive Immunity",
        "explanation": "Passive immunity involves the transfer of pre-formed antibodies, such as from mother to infant via breast milk or placenta."
    },
    {
        "id": 26,
        "question": "What is the function of opsonization in the immune system?",
        "options": [
            "Directly kill pathogens",
            "Enhance phagocytosis",
            "Suppress T cell activity",
            "Produce cytokines"
        ],
        "answer": "Enhance phagocytosis",
        "difficulty": "medium",
        "topic": "Opsonization",
        "explanation": "Opsonization involves coating pathogens with antibodies or complement proteins to enhance their recognition and phagocytosis by immune cells."
    },
    {
        "id": 27,
        "question": "Which pathogen is primarily targeted by eosinophils?",
        "options": [
            "Bacteria",
            "Viruses",
            "Parasitic worms",
            "Fungi"
        ],
        "answer": "Parasitic worms",
        "difficulty": "medium",
        "topic": "Eosinophils",
        "explanation": "Eosinophils are specialized for combating multicellular parasites, such as worms, by releasing cytotoxic granules."
    },
    {
        "id": 28,
        "question": "What is the role of interferons in the immune system?",
        "options": [
            "Enhance phagocytosis",
            "Inhibit viral replication",
            "Produce antibodies",
            "Activate complement"
        ],
        "answer": "Inhibit viral replication",
        "difficulty": "medium",
        "topic": "Interferons",
        "explanation": "Interferons are cytokines that interfere with viral replication and enhance immune responses against viral infections."
    },
    {
        "id": 29,
        "question": "Which of the following is a feature of MHC class II molecules?",
        "options": [
            "Found on all nucleated cells",
            "Present antigens to cytotoxic T cells",
            "Found on antigen-presenting cells",
            "Recognize viral antigens only"
        ],
        "answer": "Found on antigen-presenting cells",
        "difficulty": "medium",
        "topic": "MHC Molecules",
        "explanation": "MHC class II molecules are expressed on antigen-presenting cells like dendritic cells and macrophages, presenting antigens to helper T cells."
    },
    {
        "id": 30,
        "question": "What is the main function of inflammation in the immune response?",
        "options": [
            "Produce antibodies",
            "Recruit immune cells to infection sites",
            "Kill infected cells",
            "Suppress immune activity"
        ],
        "answer": "Recruit immune cells to infection sites",
        "difficulty": "easy",
        "topic": "Inflammation",
        "explanation": "Inflammation recruits immune cells, increases blood flow, and delivers immune mediators to sites of infection or injury."
    },
    {
        "id": 31,
        "question": "Which type of T cell is involved in delayed-type hypersensitivity?",
        "options": [
            "Cytotoxic T cells",
            "Helper T cells",
            "Regulatory T cells",
            "Memory T cells"
        ],
        "answer": "Helper T cells",
        "difficulty": "hard",
        "topic": "Hypersensitivity",
        "explanation": "Delayed-type hypersensitivity (Type IV) is mediated by helper T cells, particularly Th1 cells, which activate macrophages."
    },
    {
        "id": 32,
        "question": "What is the primary function of the lymphatic system in immunity?",
        "options": [
            "Produce red blood cells",
            "Transport immune cells and antigens",
            "Digest pathogens",
            "Synthesize cytokines"
        ],
        "answer": "Transport immune cells and antigens",
        "difficulty": "easy",
        "topic": "Lymphatic System",
        "explanation": "The lymphatic system transports immune cells and antigens to lymphoid organs, facilitating immune surveillance."
    },
    {
        "id": 33,
        "question": "Which of the following is an example of an autoimmune disease?",
        "options": [
            "Tuberculosis",
            "Rheumatoid arthritis",
            "Influenza",
            "Malaria"
        ],
        "answer": "Rheumatoid arthritis",
        "difficulty": "easy",
        "topic": "Autoimmune Diseases",
        "explanation": "Autoimmune diseases like rheumatoid arthritis occur when the immune system attacks the body's own tissues, such as joints."
    },
    {
        "id": 34,
        "question": "What is the role of memory B cells in adaptive immunity?",
        "options": [
            "Kill infected cells",
            "Produce cytokines",
            "Provide long-term immunity",
            "Phagocytose pathogens"
        ],
        "answer": "Provide long-term immunity",
        "difficulty": "medium",
        "topic": "Memory B Cells",
        "explanation": "Mem B B cells provide long-term immunity by rapidly producing antibodies upon re-exposure to a specific antigen."
    },
    {
    "id": 35,
        "question": "Which of the following is NOT a function of the spleen?",
        "options": [
            "Filter blood",
            "Store lymphocytes",
            "Produce T cells",
            "Remove old red blood cells"
        ],
        "answer": "Produce T cells",
        "difficulty": "medium",
        "topic": "Spleen",
        "explanation": "The spleen filters blood, stores lymphocytes, removes and removes old red blood cells, but T cell production occurs in the thymus."
    },
    {
        "id": 36,
        "question": "What is the role of macrophages in the immune system?",
        "options": [
            "Produce antibodies",
            "Phagocytose and pathogens and present antigens",
            "Kill infected cells directly",
            "Suppress immune responses"
        ],
        "answer": "Phagocytize pathogens and present antigens",
        "difficulty": "medium",
        "topic": "Macrophages",
        "explanation": "Macrophages engulf pathogens and present their antigens to T cells, bridging innate and adaptive immunity."
    },
    {
        "id": 37,
        "question": "Which immunoglobulin is primarily found on the mucosal surfaces?",
        "options": [
            "IgE",
            "IgG",
            "IgA",
            "IgM"
        ],
        "answer": "IgA",
        "difficulty": "medium",
        "topic": "Immunoglobulins",
        "explanation": "IgA is the primary antibody in mucosal immunity, protecting surfaces like the gut and respiratory tract."
    },
    {
        "id": 38,
        "question": "What is the primary role of the innate immune system?",
        "options": [
            "Develop immunological memory",
            "Provide immediate, non-specific defense",
            "Produce specific antibodies",
            "Coordinate adaptive immunity"
        ],
        "answer": "Provide immediate, non-specific defense",
        "difficulty": "easy",
        "topic": "Innate Immunity",
        "explanation": "The innate immune system provides rapid, non-specific protection against pathogens using barriers and effector cells."
    },
    {
        "id": 39,
        "question": "Which of the following is a function of the complement system?",
        "options": [
            "Produce T cells",
            "Enhance phagocytosis",
            "Suppress inflammation",
            "Develop memory cells"
        ],
        "answer": "Enhance phagocytosis",
        "difficulty": "medium",
        "topic": "Complement System",
        "explanation": "The complement system enhances phagocytosis through opsonization, lyses pathogens, and promotes inflammation."
    },
    {
        "id": 40,
        "question": "What is the primary function of the thymus in the immune system?",
        "options": [
            "Antibody production",
            "T cell maturation",
            "Phagocytosis",
            "Antigen presentation"
        ],
        "answer": "T cell maturation",
        "difficulty": "easy",
        "topic": "Thymus",
        "explanation": "The thymus is where T cells mature and learn to recognize antigens, critical for adaptive immunity."
    },
    {
        "id": 41,
        "question": "Which type of hypersensitivity is associated with immune complex deposition?",
        "options": [
            "Type I",
            "Type II",
            "Type III",
            "Type IV"
        ],
        "answer": "Type III",
        "difficulty": "hard",
        "topic": "Hypersensitivity",
        "explanation": "Type III hypersensitivity results from immune complexes depositing in tissues, causing inflammation, as seen in diseases like systemic lupus erythematosus."
    },
    {
        "id": 42,
        "question": "What is the role of cytokines in the immune system?",
        "options": [
            "Directly kill pathogens",
            "Signal between immune cells",
            "Produce antibodies",
            "Phagocytose pathogens"
        ],
        "answer": "Signal between immune cells",
        "difficulty": "medium",
        "topic": "Cytokines",
        "explanation": "Cytokines are signaling molecules that mediate communication between immune cells, regulating immune responses."
    },
    {
        "id": 43,
        "question": "Which of the following is NOT a function of T cells?",
        "options": [
            "Kill infected cells",
            "Coordinate immune responses",
            "Produce antibodies",
            "Suppress immune activity"
        ],
        "answer": "Produce antibodies",
        "difficulty": "easy",
        "topic": "T Cells",
        "explanation": "The T cells do not produce antibodies; this is the role of B cells. T cells perform other immune functions."
    },
    {
        "id": 44,
        "question": "What is the primary function of IgD in the immune system?",
        "options": [
            "Neutralize pathogens",
            "Activate B cells",
            "Enhance phagocytosis",
            "Promote allergic reactions"
        ],
        "answer": "Activate B cells",
        "difficulty": "hard",
        "topic": "Immunoglobulins",
        "explanation": "IgD is primarily as a surface receptor on the B cells, playing a role in B cell activation."
    },
    {
        "id": 45,
        "question": "Which of the following cells is NOT involved in innate immunity?",
        "options": [
            "Microphages",
            "Natural killer (NK) cells",
            "B cells",
            "Dendritic cells"
        ],
        "answer": "B cells",
        "difficulty": "medium",
        "topic": "Innate Immunity",
        "explanation": "B cells are part of adaptive immunity, while macrophages, NK cells, and dendritic cells are involved in innate immunity."
    },
    {
    "id": 46,
        "question": "What is the primary source of passive immunity in newborns?",
        "options": [
            "Vaccination",
            "Maternal antibodies",
            "Infection recovery",
            "T cell activation"
        ],
        "answer": "Maternal antibodies",
        "difficulty": "easy",
        "topic": "Passive Immunity",
        "explanation": "Newborns receive passive immunity through maternal antibodies transferred via the placenta or breast milk."
    },
    {
        "id": 47,
        "question": "Which of the following is a characteristic of MHC class I molecules?",
        "options": [
            "Present antigens to helper T cells",
            "Found only on antigen-presenting cells",
            "Present antigens to cytotoxic T cells",
            "Recognize extracellular antigens"
        ],
        "answer": "Present antigens to cytotoxic T cells",
        "difficulty": "medium",
        "topic": "MHC Molecules",
        "planation": "MHC class I molecules present intracellular antigens to cytotoxic T cells, enabling the detection of infected cells."
    },
    {
        "id": 48,
        "question": "What is the role of the immune system in transplant rejection?",
        "options": [
            "Promote tissue regeneration",
            "Recognize foreign antigens",
            "Suppress immune responses",
            "Produce new blood cells"
        ],
        "answer": "Recognize foreign antigens",
        "difficulty": "medium",
        "topic": "Transplant Rejection",
        "explanation": "The immune system recognizes foreign antigens on transplanted tissues, leading to rejection if not suppressed."
    },
    {
        "id": 49,
        "question": "Which of the following is a function of IgE in the immune system?",
        "options": [
            "Neutralize bacterial toxins",
            "Mediate allergic reactions",
            "Activate complement",
            "Enhance phagocytosis"
        ],
        "answer": "Mediate allergic reactions",
        "difficulty": "medium",
        "topic": "Immunoglobulins",
        "explanation": "IgE is involved in allergic reactions by binding to mast cells and triggering histamine release upon allergen exposure."
    },
    {
        "id": 50,
        "question": "What is the primary function of the bone marrow in the immune system?",
        "options": [
            "T cell maturation",
            "B cell production",
            "Antigen presentation",
            "Antibody secretion"
        ],
        "answer": "B cell production",
        "difficulty": "easy",
        "topic": "Bone Marrow",
        "explanation": "Bone marrow is a primary lymphoid organ where B cells are produced and mature."
    },
    {
        "id": 51,
        "question": "Which type of immunity is provided by physical barriers like skin?",
        "options": [
            "Innate immunity",
            "Adaptive immunity",
            "Passive immunity",
            "Active immunity"
        ],
        "answer": "Innate immunity",
        "difficulty": "easy",
        "topic": "Innate Immunity",
        "explanation": "Physical barriers like skin are part of innate immunity, providing non-specific defense against pathogens."
    },
    {
        "id": 52,
        "question": "What is the role of Toll-like receptors (TLRs) in immunity?",
        "options": [
            "Produce antibodies",
            "Recognize pathogen-associated molecular patterns",
            "Kill infected cells",
            "Present antigens"
        ],
        "answer": "Recognize pathogen-associated molecular patterns",
        "difficulty": "hard",
        "topic": "Toll-like Receptors",
        "explanation": "TLRs on immune cells recognize pathogen-associated molecular patterns, triggering innate immune responses."
    },
    {
        "id": 53,
        "question": "Which of the following is a function of helper T cells?",
        "options": [
            "Directly kill pathogens",
            "Activate B cells and cytotoxic T cells",
            "Phagocytose pathogens",
            "Produce complement proteins"
        ],
        "answer": "Activate B cells and cytotoxic T cells",
        "difficulty": "medium",
        "topic": "T Cells",
        "explanation": "Helper T cells release cytokines to activate B cells for antibody production and cytotoxic T cells for killing infected cells."
    },
    {
        "id": 54,
        "question": "What is the primary function of IgM in the immune system?",
        "options": [
            "Mediate allergic reactions",
            "Neutralize pathogens in blood",
            "Activate B cells",
            "Protect mucosal surfaces"
        ],
        "answer": "Neutralize pathogens in blood",
        "difficulty": "medium",
        "topic": "Immunoglobulins",
        "explanation": "IgM is effective in neutralizing pathogens in blood through agglutination and complement activation."
    },
    {
        "id": 55,
        "question": "Which of the following is NOT a component of the innate immune system?",
        "options": [
            "Skin",
            "Macrophages",
            "B cells",
            "Complement proteins"
        ],
        "answer": "B cells",
        "difficulty": "medium",
        "topic": "Innate Immunity",
        "explanation": "B cells are part of adaptive immunity, while skin, macrophages, and complement proteins are innate immune components."
    },
    {
        "id": 56,
        "question": "What is the role of memory T cells in immunity?",
        "options": [
            "Produce antibodies",
            "Provide rapid response to re-infection",
            "Phagocytose pathogens",
            "Suppress immune responses"
        ],
        "answer": "Provide rapid response to re-infection",
        "difficulty": "medium",
        "topic": "Memory T Cells",
        "explanation": "Memory T cells enable a faster and stronger immune response upon re-exposure to a specific pathogen."
    },
    {
        "id": 57,
        "question": "Which of the following is a characteristic of Type II hypersensitivity?",
        "options": [
            "Mediated by IgE",
            "Involves immune complexes",
            "Targets cell surface antigens",
            "Delayed response"
        ],
        "answer": "Targets cell surface antigens",
        "difficulty": "hard",
        "topic": "Hypersensitivity",
        "explanation": "Type II hypersensitivity involves IgG or IgM antibodies targeting antigens on cell surfaces, leading to cell destruction."
    },
    {
        "id": 58,
        "question": "What is the primary function of the spleen in the immune system?",
        "options": [
            "T cell maturation",
            "Filter blood and store lymphocytes",
            "Produce B cells",
            "Present antigens"
        ],
        "answer": "Filter blood and store lymphocytes",
        "difficulty": "medium",
        "topic": "Spleen",
        "explanation": "The spleen filters blood, removes pathogens, and stores lymphocytes for immune responses."
    },
    {
        "id": 59,
        "question": "Which of the following is a function of natural killer (NK) cells?",
        "options": [
            "Produce antibodies",
            "Recognize and kill virus-infected cells",
            "Present antigens to T cells",
            "Activate B cells"
        ],
        "answer": "Recognize and kill virus-infected cells",
        "difficulty": "medium",
        "topic": "NK Cells",
        "explanation": "NK cells target and destroy virus-infected and cancerous cells without prior sensitization."
    },
    {
        "id": 60,
        "question": "What is the role of the lymphatic system in immunity?",
        "options": [
            "Produce antibodies",
            "Transport immune cells and antigens",
            "Kill infected cells",
            "Synthesize complement proteins"
        ],
        "answer": "Transport immune cells and antigens",
        "difficulty": "easy",
        "topic": "Lymphatic System",
        "explanation": "The lymphatic system transports immune cells and antigens to lymphoid organs for immune activation."
    },
    {
        "id": 61,
        "question": "Which of the following is an example of an innate immune response?",
        "options": [
            "Antibody production",
            "Inflammation",
            "T cell activation",
            "Memory cell formation"
        ],
        "answer": "Inflammation",
        "difficulty": "easy",
        "topic": "Innate Immunity",
        "explanation": "Inflammation is a rapid, non-specific innate immune response to injury or infection."
    },
    {
        "id": 62,
        "question": "What is the primary function of MHC molecules?",
        "options": [
            "Produce cytokines",
            "Present antigens to T cells",
            "Kill pathogens",
            "Activate complement"
        ],
        "answer": "Present antigens to T cells",
        "difficulty": "medium",
        "topic": "MHC Molecules",
        "explanation": "MHC molecules display antigens on cell surfaces for recognition by T cells, initiating immune responses."
    },
    {
        "id": 63,
        "question": "Which immunoglobulin is involved in complement activation?",
        "options": [
            "IgA",
            "IgE",
            "IgG",
            "IgD"
        ],
        "answer": "IgG",
        "difficulty": "medium",
        "topic": "Immunoglobulins",
        "explanation": "IgG, along with IgM, effectively activates the complement system to enhance pathogen destruction."
    },
    {
        "id": 64,
        "question": "What is the role of antigen-presenting cells (APCs)?",
        "options": [
            "Produce antibodies",
            "Present antigens to T cells",
            "Kill infected cells",
            "Suppress immune responses"
        ],
        "answer": "Present antigens to T cells",
        "difficulty": "medium",
        "topic": "Antigen-Presenting Cells",
        "explanation": "APCs, such as dendritic cells and macrophages, process and present antigens to T cells to initiate adaptive immunity."
    },
    {
        "id": 65,
        "question": "Which of the following is a function of the adaptive immune system?",
        "options": [
            "Provide immediate defense",
            "Develop immunological memory",
            "Produce physical barriers",
            "Enhance phagocytosis"
        ],
        "answer": "Develop immunological memory",
        "difficulty": "easy",
        "topic": "Adaptive Immunity",
        "explanation": "The adaptive immune system develops immunological memory, enabling faster responses to previously encountered pathogens."
    },
    {
        "id": 66,
        "question": "What is the primary function of IgA in the immune system?",
        "options": [
            "Activate complement",
            "Protect mucosal surfaces",
            "Mediate allergic reactions",
            "Neutralize pathogens in blood"
        ],
        "answer": "Protect mucosal surfaces",
        "difficulty": "medium",
        "topic": "Immunoglobulins",
        "explanation": "IgA is the primary antibody protecting mucosal surfaces, such as the gut and respiratory tract."
    },
    {
        "id": 67,
        "question": "Which of the following is a characteristic of Type IV hypersensitivity?",
        "options": [
            "Mediated by IgE",
            "Involves immune complexes",
            "Delayed response",
            "Targets cell surface antigens"
        ],
        "answer": "Delayed response",
        "difficulty": "hard",
        "topic": "Hypersensitivity",
        "explanation": "Type IV hypersensitivity is T cell-mediated and characterized by a delayed response, as seen in contact dermatitis."
    },
    {
        "id": 68,
        "question": "What is the role of B cells in the immune system?",
        "options": [
            "Kill infected cells",
            "Produce antibodies",
            "Phagocytose pathogens",
            "Suppress immune responses"
        ],
        "answer": "Produce antibodies",
        "difficulty": "easy",
        "topic": "B Cells",
        "explanation": "B cells differentiate into plasma cells that produce antibodies to neutralize pathogens."
    },
    {
        "id": 69,
        "question": "Which of the following is a function of the complement system?",
        "options": [
            "Produce T cells",
            "Lyse pathogens",
            "Suppress inflammation",
            "Develop memory cells"
        ],
        "answer": "Lyse pathogens",
        "difficulty": "medium",
        "topic": "Complement System",
        "explanation": "The complement system can directly lyse pathogens through the formation of the membrane attack complex."
    },
    {
        "id": 70,
        "question": "What is the primary function of cytotoxic T cells?",
        "options": [
            "Produce antibodies",
            "Kill infected cells",
            "Phagocytose pathogens",
            "Present antigens"
        ],
        "answer": "Kill infected cells",
        "difficulty": "medium",
        "topic": "T Cells",
        "explanation": "Cytotoxic T cells destroy infected or cancerous cells by inducing apoptosis."
    },
    {
        "id": 71,
        "question": "Which of the following is a characteristic of innate immunity?",
        "options": [
            "Highly specific",
            "Has immunological memory",
            "Non-specific defense",
            "Slow response"
        ],
        "answer": "Non-specific defense",
        "difficulty": "easy",
        "topic": "Innate Immunity",
        "explanation": "Innate immunity provides non-specific defense mechanisms that act rapidly against a wide range of pathogens."
    },
    {
        "id": 72,
        "question": "What is the role of the thymus in T cell development?",
        "options": [
            "Antibody production",
            "T cell maturation",
            "Phagocytosis",
            "Antigen presentation"
        ],
        "answer": "T cell maturation",
        "difficulty": "easy",
        "topic": "Thymus",
        "explanation": "The thymus is where T cells mature and develop the ability to recognize antigens."
    },
    {
        "id": 73,
        "question": "Which of the following is an example of active immunity?",
        "options": [
            "Maternal antibodies",
            "Vaccination",
            "Antibody transfusion",
            "Breast milk antibodies"
        ],
        "answer": "Vaccination",
        "difficulty": "easy",
        "topic": "Active Immunity",
        "explanation": "Active immunity is induced by vaccination or infection, stimulating the body to produce its own immune response."
    },
    {
        "id": 74,
        "question": "What is the role of dendritic cells in immunity?",
        "options": [
            "Produce antibodies",
            "Present antigens to T cells",
            "Kill infected cells",
            "Phagocytose pathogens only"
        ],
        "answer": "Present antigens to T cells",
        "difficulty": "medium",
        "topic": "Dendritic Cells",
        "explanation": "Dendritic cells are antigen-presenting cells that initiate adaptive immune responses by presenting antigens to T cells."
    },
    {
        "id": 75,
        "question": "Which immunoglobulin is most effective at neutralizing toxins?",
        "options": [
            "IgA",
            "IgE",
            "IgG",
            "IgM"
        ],
        "answer": "IgG",
        "difficulty": "medium",
        "topic": "Immunoglobulins",
        "explanation": "IgG is highly effective at neutralizing toxins and pathogens in the bloodstream."
    },
    {
        "id": 76,
        "question": "What is the primary function of regulatory T cells?",
        "options": [
            "Kill infected cells",
            "Suppress immune responses",
            "Produce antibodies",
            "Phagocytose pathogens"
        ],
        "answer": "Suppress immune responses",
        "difficulty": "medium",
        "topic": "T Cells",
        "explanation": "Regulatory T cells prevent excessive immune responses and maintain tolerance to self-antigens."
    },
    {
        "id": 77,
        "question": "Which of the following is a function of macrophages?",
        "options": [
            "Produce antibodies",
            "Phagocytose pathogens",
            "Kill infected cells directly",
            "Suppress T cell activity"
        ],
        "answer": "Phagocytose pathogens",
        "difficulty": "medium",
        "topic": "Macrophages",
        "explanation": "Macrophages engulf and digest pathogens, also presenting antigens to T cells."
    },
    {
        "id": 78,
        "question": "What is the role of IgE in allergic reactions?",
        "options": [
            "Neutralize bacterial toxins",
            "Trigger histamine release",
            "Activate complement",
            "Enhance phagocytosis"
        ],
        "answer": "Trigger histamine release",
        "difficulty": "medium",
        "topic": "Immunoglobulins",
        "explanation": "IgE binds to mast cells, and allergen exposure triggers histamine release, causing allergic symptoms."
    },
    {
        "id": 79,
        "question": "Which of the following is a secondary lymphoid organ?",
        "options": [
            "Bone marrow",
            "Thymus",
            "Spleen",
            "Fetal liver"
        ],
        "answer": "Spleen",
        "difficulty": "easy",
        "topic": "Lymphoid Organs",
        "explanation": "The spleen is a secondary lymphoid organ where immune responses are initiated."
    },
    {
        "id": 80,
        "question": "What is the primary function of natural killer (NK) cells?",
        "options": [
            "Produce antibodies",
            "Kill virus-infected cells",
            "Present antigens",
            "Activate B cells"
        ],
        "answer": "Kill virus-infected cells",
        "difficulty": "medium",
        "topic": "NK Cells",
        "explanation": "NK cells target and destroy virus-infected and cancerous cells as part of innate immunity."
    },
    {
        "id": 81,
        "question": "Which of the following is a characteristic of adaptive immunity?",
        "options": [
            "Rapid response",
            "Non-specific defense",
            "Specificity",
            "Physical barriers"
        ],
        "answer": "Specificity",
        "difficulty": "easy",
        "topic": "Adaptive Immunity",
        "explanation": "Adaptive immunity is highly specific to particular pathogens and develops memory."
    },
    {
        "id": 82,
        "question": "What is the role of MHC class II molecules?",
        "options": [
            "Present antigens to cytotoxic T cells",
            "Present antigens to helper T cells",
            "Produce cytokines",
            "Kill infected cells"
        ],
        "answer": "Present antigens to helper T cells",
        "difficulty": "medium",
        "topic": "MHC Molecules",
        "explanation": "MHC class II molecules present extracellular antigens to helper T cells, activating immune responses."
    },
    {
        "id": 83,
        "question": "Which of the following is a function of the complement system?",
        "options": [
            "Produce T cells",
            "Promote inflammation",
            "Suppress immune responses",
            "Develop memory cells"
        ],
        "answer": "Promote inflammation",
        "difficulty": "medium",
        "topic": "Complement System",
        "explanation": "The complement system promotes inflammation to recruit immune cells to infection sites."
    },
    {
        "id": 84,
        "question": "What is the primary function of B cells?",
        "options": [
            "Kill infected cells",
            "Produce antibodies",
            "Phagocytose pathogens",
            "Suppress immune responses"
        ],
        "answer": "Produce antibodies",
        "difficulty": "easy",
        "topic": "B Cells",
        "explanation": "B cells differentiate into plasma cells that secrete antibodies to combat pathogens."
    },
    {
        "id": 85,
        "question": "Which type of hypersensitivity is mediated by T cells?",
        "options": [
            "Type I",
            "Type II",
            "Type III",
            "Type IV"
        ],
        "answer": "Type IV",
        "difficulty": "hard",
        "topic": "Hypersensitivity",
        "explanation": "Type IV hypersensitivity is T cell-mediated and involves delayed responses, such as in contact dermatitis."
    },
    {
        "id": 86,
        "question": "What is the role of cytokines in immunity?",
        "options": [
            "Directly kill pathogens",
            "Signal between immune cells",
            "Produce antibodies",
            "Phagocytose pathogens"
        ],
        "answer": "Signal between immune cells",
        "difficulty": "medium",
        "topic": "Cytokines",
        "explanation": "Cytokines are signaling molecules that coordinate immune cell activity."
    },
    {
        "id": 87,
        "question": "Which of the following is a primary lymphoid organ?",
        "options": [
            "Spleen",
            "Lymph nodes",
            "Bone marrow",
            "Tonsils"
        ],
        "answer": "Bone marrow",
        "difficulty": "easy",
        "topic": "Lymphoid Organs",
        "explanation": "Bone marrow is a primary lymphoid organ where B cells are produced and mature."
    },
    {
        "id": 88,
        "question": "What is the role of IgG in the immune system?",
        "options": [
            "Mediate allergic reactions",
            "Neutralize pathogens in blood",
            "Protect mucosal surfaces",
            "Activate B cells"
        ],
        "answer": "Neutralize pathogens in blood",
        "difficulty": "medium",
        "topic": "Immunoglobulins",
        "explanation": "IgG is the most abundant antibody in blood, neutralizing pathogens and toxins."
    },
    {
        "id": 89,
        "question": "Which of the following is a function of the innate immune system?",
        "options": [
            "Develop memory cells",
            "Provide physical barriers",
            "Produce specific antibodies",
            "Activate T cells"
        ],
        "answer": "Provide physical barriers",
        "difficulty": "easy",
        "topic": "Innate Immunity",
        "explanation": "The innate immune system includes physical barriers like skin and mucous membranes for non-specific defense."
    },
    {
        "id": 90,
        "question": "What is the primary function of helper T cells?",
        "options": [
            "Kill infected cells",
            "Activate other immune cells",
            "Phagocytose pathogens",
            "Produce antibodies"
        ],
        "answer": "Activate other immune cells",
        "difficulty": "medium",
        "topic": "T Cells",
        "explanation": "Helper T cells release cytokines to activate B cells, cytotoxic T cells, and macrophages."
    },
    {
        "id": 91,
        "question": "Which of the following is a function of the lymphatic system?",
        "options": [
            "Produce red blood cells",
            "Transport immune cells",
            "Synthesize antibodies",
            "Kill pathogens directly"
        ],
        "answer": "Transport immune cells",
        "difficulty": "easy",
        "topic": "Lymphatic System",
        "explanation": "The lymphatic system transports immune cells and antigens to lymphoid organs for immune responses."
    },
    {
        "id": 92,
        "question": "What is the role of MHC class I molecules in immunity?",
        "options": [
            "Present antigens to helper T cells",
            "Present antigens to cytotoxic T cells",
            "Produce antibodies",
            "Activate complement"
        ],
        "answer": "Present antigens to cytotoxic T cells",
        "difficulty": "medium",
        "topic": "MHC Molecules",
        "explanation": "MHC class I molecules present intracellular antigens to cytotoxic T cells for destruction of infected cells."
    },
    {
        "id": 93,
        "question": "Which of the following is a characteristic of Type I hypersensitivity?",
        "options": [
            "Mediated by T cells",
            "Involves immune complexes",
            "IgE-mediated",
            "Delayed response"
        ],
        "answer": "IgE-mediated",
        "difficulty": "medium",
        "topic": "Hypersensitivity",
        "explanation": "Type I hypersensitivity is IgE-mediated, leading to immediate allergic reactions."
    },
    {
        "id": 94,
        "question": "What is the primary function of memory B cells?",
        "options": [
            "Kill infected cells",
            "Produce antibodies rapidly upon re-exposure",
            "Phagocytose pathogens",
            "Suppress immune responses"
        ],
        "answer": "Produce antibodies rapidly upon re-exposure",
        "difficulty": "medium",
        "topic": "Memory B Cells",
        "explanation": "Memory B cells enable a faster antibody response upon re-exposure to a specific antigen."
    },
    {
        "id": 95,
        "question": "Which of the following is a function of the spleen?",
        "options": [
            "T cell maturation",
            "Filter blood",
            "Produce B cells",
            "Present antigens"
        ],
        "answer": "Filter blood",
        "difficulty": "easy",
        "topic": "Spleen",
        "explanation": "The spleen filters blood, removes pathogens, and stores lymphocytes."
    },
    {
        "id": 96,
        "question": "What is the role of Toll-like receptors (TLRs)?",
        "options": [
            "Produce antibodies",
            "Recognize pathogen patterns",
            "Kill infected cells",
            "Present antigens"
        ],
        "answer": "Recognize pathogen patterns",
        "difficulty": "hard",
        "topic": "Toll-like Receptors",
        "explanation": "TLRs recognize pathogen-associated molecular patterns to initiate innate immune responses."
    },
    {
        "id": 97,
        "question": "Which immunoglobulin is most effective in agglutination?",
        "options": [
            "IgA",
            "IgE",
            "IgG",
            "IgM"
        ],
        "answer": "IgM",
        "difficulty": "medium",
        "topic": "Immunoglobulins",
        "explanation": "IgM, due to its pentameric structure, is highly effective at agglutinating pathogens."
    },
    {
        "id": 98,
        "question": "What is the primary function of cytotoxic T cells?",
        "options": [
            "Produce antibodies",
            "Kill infected cells",
            "Phagocytose pathogens",
            "Activate B cells"
        ],
        "answer": "Kill infected cells",
        "difficulty": "medium",
        "topic": "T Cells",
        "explanation": "Cytotoxic T cells destroy infected or cancerous cells by inducing apoptosis."
    },
    {
        "id": 99,
        "question": "Which of the following is a characteristic of innate immunity?",
        "options": [
            "Specificity",
            "Immunological memory",
            "Rapid response",
            "Antibody production"
        ],
        "answer": "Rapid response",
        "difficulty": "easy",
        "topic": "Innate Immunity",
        "explanation": "Innate immunity provides a rapid, non-specific response to pathogens."
    },
    {
        "id": 100,
        "question": "What is the role of the complement system in immunity?",
        "options": [
            "Produce T cells",
            "Enhance pathogen destruction",
            "Suppress inflammation",
            "Develop memory cells"
        ],
        "answer": "Enhance pathogen destruction",
        "difficulty": "medium",
        "topic": "Complement System",
        "explanation": "The complement system enhances pathogen destruction through opsonization, lysis, and inflammation."
    },
    {
        "id": 101,
        "question": "Which immune cell is primarily responsible for coordinating the adaptive immune response?",
        "options": [
            "Neutrophils",
            "Helper T cells",
            "Natural killer cells",
            "Macrophages"
        ],
        "answer": "Helper T cells",
        "difficulty": "medium",
        "topic": "T Cells",
        "explanation": "Helper T cells coordinate the adaptive immune response by releasing cytokines that activate B cells, cytotoxic T cells, and other immune cells."
    },
    {
        "id": 102,
        "question": "What is the primary function of the membrane attack complex (MAC) in the complement system?",
        "options": [
            "Activate B cells",
            "Lyse pathogens",
            "Produce cytokines",
            "Present antigens"
        ],
        "answer": "Lyse pathogens",
        "difficulty": "medium",
        "topic": "Complement System",
        "explanation": "The membrane attack complex forms pores in pathogen membranes, leading to their lysis and destruction."
    },
    {
        "id": 103,
        "question": "Which of the following is a physical barrier of the innate immune system?",
        "options": [
            "Antibodies",
            "Mucous membranes",
            "T cells",
            "Cytokines"
        ],
        "answer": "Mucous membranes",
        "difficulty": "easy",
        "topic": "Innate Immunity",
        "explanation": "Mucous membranes trap pathogens and prevent their entry, serving as a physical barrier in innate immunity."
    },
    {
        "id": 104,
        "question": "What is the role of plasma cells in the immune system?",
        "options": [
            "Phagocytose pathogens",
            "Produce antibodies",
            "Kill infected cells",
            "Present antigens"
        ],
        "answer": "Produce antibodies",
        "difficulty": "easy",
        "topic": "B Cells",
        "explanation": "Plasma cells are differentiated B cells that secrete large amounts of antibodies to combat pathogens."
    },
    {
        "id": 105,
        "question": "Which type of hypersensitivity is associated with contact dermatitis?",
        "options": [
            "Type I",
            "Type II",
            "Type III",
            "Type IV"
        ],
        "answer": "Type IV",
        "difficulty": "hard",
        "topic": "Hypersensitivity",
        "explanation": "Type IV hypersensitivity is T cell-mediated and causes delayed reactions, such as contact dermatitis."
    },
    {
        "id": 106,
        "question": "What is the primary function of interleukin-1 (IL-1) in immunity?",
        "options": [
            "Promote inflammation",
            "Neutralize pathogens",
            "Kill infected cells",
            "Produce antibodies"
        ],
        "answer": "Promote inflammation",
        "difficulty": "hard",
        "topic": "Cytokines",
        "explanation": "IL-1 is a pro-inflammatory cytokine that promotes inflammation and recruits immune cells to infection sites."
    },
    {
        "id": 107,
        "question": "Which of the following is a function of the tonsils in the immune system?",
        "options": [
            "Produce T cells",
            "Filter blood",
            "Trap pathogens",
            "Synthesize cytokines"
        ],
        "answer": "Trap pathogens",
        "difficulty": "medium",
        "topic": "Lymphoid Organs",
        "explanation": "Tonsils are secondary lymphoid organs that trap pathogens entering through the mouth or nose."
    },
    {
        "id": 108,
        "question": "What is the role of IgM in the primary immune response?",
        "options": [
            "Protect mucosal surfaces",
            "Neutralize pathogens in blood",
            "Mediate allergic reactions",
            "Activate T cells"
        ],
        "answer": "Neutralize pathogens in blood",
        "difficulty": "medium",
        "topic": "Immunoglobulins",
        "explanation": "IgM is the first antibody produced in a primary immune response, effective in agglutination and complement activation."
    },
    {
        "id": 109,
        "question": "Which immune cells are primarily involved in combating viral infections?",
        "options": [
            "B cells",
            "Cytotoxic T cells",
            "Neutrophils",
            "Eosinophils"
        ],
        "answer": "Cytotoxic T cells",
        "difficulty": "medium",
        "topic": "T Cells",
        "explanation": "Cytotoxic T cells recognize and destroy virus-infected cells to prevent viral replication."
    },
    {
        "id": 110,
        "question": "What is the role of the lymph nodes in the immune system?",
        "options": [
            "Produce T cells",
            "Filter lymph and initiate immune responses",
            "Synthesize antibodies",
            "Store red blood cells"
        ],
        "answer": "Filter lymph and initiate immune responses",
        "difficulty": "easy",
        "topic": "Lymphoid Organs",
        "explanation": "Lymph nodes filter lymph and provide a site for immune cells to interact and initiate adaptive immune responses."
    },
    {
        "id": 111,
        "question": "Which of the following is a characteristic of passive immunity?",
        "options": [
            "Long-lasting",
            "Requires antigen exposure",
            "Involves memory cells",
            "Temporary protection"
        ],
        "answer": "Temporary protection",
        "difficulty": "easy",
        "topic": "Passive Immunity",
        "explanation": "Passive immunity provides temporary protection through the transfer of pre-formed antibodies."
    },
    {
        "id": 112,
        "question": "What is the primary function of chemokines in the immune system?",
        "options": [
            "Neutralize pathogens",
            "Direct immune cell migration",
            "Produce antibodies",
            "Kill infected cells"
        ],
        "answer": "Direct immune cell migration",
        "difficulty": "hard",
        "topic": "Cytokines",
        "explanation": "Chemokines are signaling molecules that guide immune cells to sites of infection or inflammation."
    },
    {
        "id": 113,
        "question": "Which immunoglobulin is primarily involved in allergic reactions?",
        "options": [
            "IgA",
            "IgD",
            "IgE",
            "IgG"
        ],
        "answer": "IgE",
        "difficulty": "medium",
        "topic": "Immunoglobulins",
        "explanation": "IgE binds to mast cells and basophils, triggering allergic reactions upon allergen exposure."
    },
    {
        "id": 114,
        "question": "What is the primary function of the innate immune system?",
        "options": [
            "Develop immunological memory",
            "Provide immediate defense",
            "Produce specific antibodies",
            "Activate T cells"
        ],
        "answer": "Provide immediate defense",
        "difficulty": "easy",
        "topic": "Innate Immunity",
        "explanation": "The innate immune system provides rapid, non-specific defense against pathogens."
    },
    {
        "id": 115,
        "question": "Which of the following is a function of macrophages?",
        "options": [
            "Produce antibodies",
            "Phagocytose pathogens",
            "Suppress immune responses",
            "Activate complement"
        ],
        "answer": "Phagocytose pathogens",
        "difficulty": "medium",
        "topic": "Macrophages",
        "explanation": "Macrophages engulf pathogens and present antigens to T cells, linking innate and adaptive immunity."
    },
    {
        "id": 116,
        "question": "What is the role of MHC class II molecules in the immune system?",
        "options": [
            "Present antigens to cytotoxic T cells",
            "Present antigens to helper T cells",
            "Produce antibodies",
            "Kill infected cells"
        ],
        "answer": "Present antigens to helper T cells",
        "difficulty": "medium",
        "topic": "MHC Molecules",
        "explanation": "MHC class II molecules present extracellular antigens to helper T cells to initiate adaptive immune responses."
    },
    {
        "id": 117,
        "question": "Which of the following is an example of an autoimmune disease?",
        "options": [
            "Influenza",
            "Type 1 diabetes",
            "Tuberculosis",
            "Malaria"
        ],
        "answer": "Type 1 diabetes",
        "difficulty": "easy",
        "topic": "Autoimmune Diseases",
        "explanation": "Type 1 diabetes is an autoimmune disease where the immune system attacks insulin-producing pancreatic cells."
    },
    {
        "id": 118,
        "question": "What is the primary function of natural killer (NK) cells?",
        "options": [
            "Produce antibodies",
            "Kill virus-infected cells",
            "Present antigens",
            "Activate B cells"
        ],
        "answer": "Kill virus-infected cells",
        "difficulty": "medium",
        "topic": "NK Cells",
        "explanation": "NK cells target and destroy virus-infected and cancerous cells as part of innate immunity."
    },
    {
        "id": 119,
        "question": "Which of the following is a function of the complement system?",
        "options": [
            "Produce T cells",
            "Enhance phagocytosis",
            "Suppress inflammation",
            "Develop memory cells"
        ],
        "answer": "Enhance phagocytosis",
        "difficulty": "medium",
        "topic": "Complement System",
        "explanation": "The complement system enhances phagocytosis through opsonization and promotes pathogen destruction."
    },
    {
        "id": 120,
        "question": "What is the role of the thymus in the immune system?",
        "options": [
            "Antibody production",
            "T cell maturation",
            "Phagocytosis",
            "Antigen presentation"
        ],
        "answer": "T cell maturation",
        "difficulty": "easy",
        "topic": "Thymus",
        "explanation": "The thymus is a primary lymphoid organ where T cells mature and develop antigen recognition."
    },
    {
        "id": 121,
        "question": "Which type of hypersensitivity involves immune complex deposition?",
        "options": [
            "Type I",
            "Type II",
            "Type III",
            "Type IV"
        ],
        "answer": "Type III",
        "difficulty": "hard",
        "topic": "Hypersensitivity",
        "explanation": "Type III hypersensitivity results from immune complex deposition in tissues, causing inflammation."
    },
    {
        "id": 122,
        "question": "What is the primary function of regulatory T cells?",
        "options": [
            "Kill infected cells",
            "Suppress immune responses",
            "Produce antibodies",
            "Phagocytose pathogens"
        ],
        "answer": "Suppress immune responses",
        "difficulty": "medium",
        "topic": "T Cells",
        "explanation": "Regulatory T cells maintain immune tolerance and prevent excessive immune responses."
    },
    {
        "id": 123,
        "question": "Which immunoglobulin is most abundant in mucosal secretions?",
        "options": [
            "IgA",
            "IgD",
            "IgG",
            "IgM"
        ],
        "answer": "IgA",
        "difficulty": "medium",
        "topic": "Immunoglobulins",
        "explanation": "IgA is the primary antibody in mucosal secretions, protecting surfaces like the gut and respiratory tract."
    },
    {
        "id": 124,
        "question": "What is the role of interferons in the immune system?",
        "options": [
            "Enhance phagocytosis",
            "Inhibit viral replication",
            "Produce antibodies",
            "Activate complement"
        ],
        "answer": "Inhibit viral replication",
        "difficulty": "medium",
        "topic": "Interferons",
        "explanation": "Interferons are cytokines that inhibit viral replication and enhance immune responses against viruses."
    },
    {
        "id": 125,
        "question": "Which of the following is a secondary lymphoid organ?",
        "options": [
            "Bone marrow",
            "Thymus",
            "Lymph nodes",
            "Fetal liver"
        ],
        "answer": "Lymph nodes",
        "difficulty": "easy",
        "topic": "Lymphoid Organs",
        "explanation": "Lymph nodes are secondary lymphoid organs where immune cells interact to initiate immune responses."
    },
    {
        "id": 126,
        "question": "What is the primary function of cytotoxic T cells?",
        "options": [
            "Produce antibodies",
            "Kill infected cells",
            "Phagocytose pathogens",
            "Present antigens"
        ],
        "answer": "Kill infected cells",
        "difficulty": "medium",
        "topic": "T Cells",
        "explanation": "Cytotoxic T cells destroy infected or cancerous cells by inducing apoptosis."
    },
    {
        "id": 127,
        "question": "Which of the following is a characteristic of adaptive immunity?",
        "options": [
            "Rapid response",
            "Non-specific defense",
            "Immunological memory",
            "Physical barriers"
        ],
        "answer": "Immunological memory",
        "difficulty": "easy",
        "topic": "Adaptive Immunity",
        "explanation": "Adaptive immunity develops immunological memory for faster responses to previously encountered pathogens."
    },
    {
        "id": 128,
        "question": "What is the role of Toll-like receptors (TLRs) in immunity?",
        "options": [
            "Produce antibodies",
            "Recognize pathogen patterns",
            "Kill infected cells",
            "Present antigens"
        ],
        "answer": "Recognize pathogen patterns",
        "difficulty": "hard",
        "topic": "Toll-like Receptors",
        "explanation": "TLRs recognize pathogen-associated molecular patterns to trigger innate immune responses."
    },
    {
        "id": 129,
        "question": "Which immunoglobulin is most effective at complement activation?",
        "options": [
            "IgA",
            "IgE",
            "IgG",
            "IgD"
        ],
        "answer": "IgG",
        "difficulty": "medium",
        "topic": "Immunoglobulins",
        "explanation": "IgG, along with IgM, effectively activates the complement system to enhance pathogen destruction."
    },
    {
        "id": 130,
        "question": "What is the primary function of memory B cells?",
        "options": [
            "Kill infected cells",
            "Produce antibodies rapidly upon re-exposure",
            "Phagocytose pathogens",
            "Suppress immune responses"
        ],
        "answer": "Produce antibodies rapidly upon re-exposure",
        "difficulty": "medium",
        "topic": "Memory B Cells",
        "explanation": "Memory B cells enable a faster antibody response upon re-exposure to a specific antigen."
    },
    {
        "id": 131,
        "question": "Which of the following is a function of the spleen?",
        "options": [
            "T cell maturation",
            "Filter blood",
            "Produce B cells",
            "Present antigens"
        ],
        "answer": "Filter blood",
        "difficulty": "easy",
        "topic": "Spleen",
        "explanation": "The spleen filters blood, removes pathogens, and stores lymphocytes."
    },
    {
        "id": 132,
        "question": "What is the primary function of dendritic cells?",
        "options": [
            "Produce antibodies",
            "Present antigens to T cells",
            "Kill infected cells",
            "Phagocytose pathogens only"
        ],
        "answer": "Present antigens to T cells",
        "difficulty": "medium",
        "topic": "Dendritic Cells",
        "explanation": "Dendritic cells are antigen-presenting cells that initiate adaptive immune responses by presenting antigens to T cells."
    },
    {
        "id": 133,
        "question": "Which of the following is a characteristic of Type I hypersensitivity?",
        "options": [
            "Mediated by T cells",
            "Involves immune complexes",
            "IgE-mediated",
            "Delayed response"
        ],
        "answer": "IgE-mediated",
        "difficulty": "medium",
        "topic": "Hypersensitivity",
        "explanation": "Type I hypersensitivity is IgE-mediated, leading to immediate allergic reactions."
    },
    {
        "id": 134,
        "question": "What is the role of IgA in the immune system?",
        "options": [
            "Activate complement",
            "Protect mucosal surfaces",
            "Mediate allergic reactions",
            "Neutralize pathogens in blood"
        ],
        "answer": "Protect mucosal surfaces",
        "difficulty": "medium",
        "topic": "Immunoglobulins",
        "explanation": "IgA is the primary antibody protecting mucosal surfaces, such as the gut and respiratory tract."
    },
    {
        "id": 135,
        "question": "Which of the following is a function of the innate immune system?",
        "options": [
            "Develop memory cells",
            "Provide physical barriers",
            "Produce specific antibodies",
            "Activate T cells"
        ],
        "answer": "Provide physical barriers",
        "difficulty": "easy",
        "topic": "Innate Immunity",
        "explanation": "The innate immune system includes physical barriers like skin and mucous membranes for non-specific defense."
    },
    {
        "id": 136,
        "question": "What is the primary function of helper T cells?",
        "options": [
            "Kill infected cells",
            "Activate other immune cells",
            "Phagocytose pathogens",
            "Produce antibodies"
        ],
        "answer": "Activate other immune cells",
        "difficulty": "medium",
        "topic": "T Cells",
        "explanation": "Helper T cells release cytokines to activate B cells, cytotoxic T cells, and macrophages."
    },
    {
        "id": 137,
        "question": "Which of the following is a primary lymphoid organ?",
        "options": [
            "Spleen",
            "Lymph nodes",
            "Bone marrow",
            "Tonsils"
        ],
        "answer": "Bone marrow",
        "difficulty": "easy",
        "topic": "Lymphoid Organs",
        "explanation": "Bone marrow is a primary lymphoid organ where B cells are produced and mature."
    },
    {
        "id": 138,
        "question": "What is the role of cytokines in immunity?",
        "options": [
            "Directly kill pathogens",
            "Signal between immune cells",
            "Produce antibodies",
            "Phagocytose pathogens"
        ],
        "answer": "Signal between immune cells",
        "difficulty": "medium",
        "topic": "Cytokines",
        "explanation": "Cytokines are signaling molecules that coordinate immune cell activity."
    },
    {
        "id": 139,
        "question": "Which immunoglobulin is most effective in agglutination?",
        "options": [
            "IgA",
            "IgE",
            "IgG",
            "IgM"
        ],
        "answer": "IgM",
        "difficulty": "medium",
        "topic": "Immunoglobulins",
        "explanation": "IgM, due to its pentameric structure, is highly effective at agglutinating pathogens."
    },
    {
        "id": 140,
        "question": "What is the primary function of the lymphatic system in immunity?",
        "options": [
            "Produce red blood cells",
            "Transport immune cells",
            "Synthesize antibodies",
            "Kill pathogens directly"
        ],
        "answer": "Transport immune cells",
        "difficulty": "easy",
        "topic": "Lymphatic System",
        "explanation": "The lymphatic system transports immune cells and antigens to lymphoid organs for immune responses."
    },
    {
        "id": 141,
        "question": "Which of the following is a characteristic of Type II hypersensitivity?",
        "options": [
            "Mediated by IgE",
            "Involves immune complexes",
            "Targets cell surface antigens",
            "Delayed response"
        ],
        "answer": "Targets cell surface antigens",
        "difficulty": "hard",
        "topic": "Hypersensitivity",
        "explanation": "Type II hypersensitivity involves IgG or IgM antibodies targeting antigens on cell surfaces, leading to cell destruction."
    },
    {
        "id": 142,
        "question": "What is the role of MHC class I molecules in immunity?",
        "options": [
            "Present antigens to helper T cells",
            "Present antigens to cytotoxic T cells",
            "Produce antibodies",
            "Activate complement"
        ],
        "answer": "Present antigens to cytotoxic T cells",
        "difficulty": "medium",
        "topic": "MHC Molecules",
        "explanation": "MHC class I molecules present intracellular antigens to cytotoxic T cells for destruction of infected cells."
    },
    {
        "id": 143,
        "question": "Which of the following is a function of the complement system?",
        "options": [
            "Produce T cells",
            "Promote inflammation",
            "Suppress immune responses",
            "Develop memory cells"
        ],
        "answer": "Promote inflammation",
        "difficulty": "medium",
        "topic": "Complement System",
        "explanation": "The complement system promotes inflammation to recruit immune cells to infection sites."
    },
    {
        "id": 144,
        "question": "What is the primary function of B cells?",
        "options": [
            "Kill infected cells",
            "Produce antibodies",
            "Phagocytose pathogens",
            "Suppress immune responses"
        ],
        "answer": "Produce antibodies",
        "difficulty": "easy",
        "topic": "B Cells",
        "explanation": "B cells differentiate into plasma cells that secrete antibodies to combat pathogens."
    },
    {
        "id": 145,
        "question": "Which of the following is a characteristic of innate immunity?",
        "options": [
            "Specificity",
            "Immunological memory",
            "Rapid response",
            "Antibody production"
        ],
        "answer": "Rapid response",
        "difficulty": "easy",
        "topic": "Innate Immunity",
        "explanation": "Innate immunity provides a rapid, non-specific response to pathogens."
    },
    {
        "id": 146,
        "question": "What is the role of natural killer (NK) cells in immunity?",
        "options": [
            "Produce antibodies",
            "Kill virus-infected cells",
            "Present antigens",
            "Activate B cells"
        ],
        "answer": "Kill virus-infected cells",
        "difficulty": "medium",
        "topic": "NK Cells",
        "explanation": "NK cells target and destroy virus-infected and cancerous cells as part of innate immunity."
    },
    {
        "id": 147,
        "question": "Which of the following is a function of IgE in the immune system?",
        "options": [
            "Neutralize bacterial toxins",
            "Mediate allergic reactions",
            "Activate complement",
            "Enhance phagocytosis"
        ],
        "answer": "Mediate allergic reactions",
        "difficulty": "medium",
        "topic": "Immunoglobulins",
        "explanation": "IgE binds to mast cells and triggers histamine release, causing allergic reactions."
    },
    {
        "id": 148,
        "question": "What is the primary function of the bone marrow in the immune system?",
        "options": [
            "T cell maturation",
            "B cell production",
            "Antigen presentation",
            "Antibody secretion"
        ],
        "answer": "B cell production",
        "difficulty": "easy",
        "topic": "Bone Marrow",
        "explanation": "Bone marrow is a primary lymphoid organ where B cells are produced and mature."
    },
    {
        "id": 149,
        "question": "Which of the following is an example of active immunity?",
        "options": [
            "Maternal antibodies",
            "Vaccination",
            "Antibody transfusion",
            "Breast milk antibodies"
        ],
        "answer": "Vaccination",
        "difficulty": "easy",
        "topic": "Active Immunity",
        "explanation": "Active immunity is induced by vaccination or infection, stimulating the body to produce its own immune response."
    },
    {
        "id": 150,
        "question": "What is the role of dendritic cells in immunity?",
        "options": [
            "Produce antibodies",
            "Present antigens to T cells",
            "Kill infected cells",
            "Phagocytose pathogens only"
        ],
        "answer": "Present antigens to T cells",
        "difficulty": "medium",
        "topic": "Dendritic Cells",
        "explanation": "Dendritic cells are antigen-presenting cells that initiate adaptive immune responses by presenting antigens to T cells."
    },
    {
        "id": 151,
        "question": "Which of the following is a characteristic of Type IV hypersensitivity?",
        "options": [
            "Mediated by IgE",
            "Involves immune complexes",
            "Delayed response",
            "Targets cell surface antigens"
        ],
        "answer": "Delayed response",
        "difficulty": "hard",
        "topic": "Hypersensitivity",
        "explanation": "Type IV hypersensitivity is T cell-mediated and characterized by a delayed response, as seen in contact dermatitis."
    },
    {
        "id": 152,
        "question": "What is the primary function of IgG in the immune system?",
        "options": [
            "Mediate allergic reactions",
            "Neutralize pathogens in blood",
            "Protect mucosal surfaces",
            "Activate B cells"
        ],
        "answer": "Neutralize pathogens in blood",
        "difficulty": "medium",
        "topic": "Immunoglobulins",
        "explanation": "IgG is the most abundant antibody in blood, neutralizing pathogens and toxins."
    },
    {
        "id": 153,
        "question": "Which of the following is a function of the innate immune system?",
        "options": [
            "Develop memory cells",
            "Provide physical barriers",
            "Produce specific antibodies",
            "Activate T cells"
        ],
        "answer": "Provide physical barriers",
        "difficulty": "easy",
        "topic": "Innate Immunity",
        "explanation": "The innate immune system includes physical barriers like skin and mucous membranes for non-specific defense."
    },
    {
        "id": 154,
        "question": "What is the role of helper T cells in immunity?",
        "options": [
            "Kill infected cells",
            "Activate other immune cells",
            "Phagocytose pathogens",
            "Produce antibodies"
        ],
        "answer": "Activate other immune cells",
        "difficulty": "medium",
        "topic": "T Cells",
        "explanation": "Helper T cells release cytokines to activate B cells, cytotoxic T cells, and macrophages."
    },
    {
        "id": 155,
        "question": "Which of the following is a primary lymphoid organ?",
        "options": [
            "Spleen",
            "Lymph nodes",
            "Thymus",
            "Tonsils"
        ],
        "answer": "Thymus",
        "difficulty": "easy",
        "topic": "Lymphoid Organs",
        "explanation": "The thymus is a primary lymphoid organ where T cells mature."
    },
    {
        "id": 156,
        "question": "What is the role of cytokines in the immune system?",
        "options": [
            "Directly kill pathogens",
            "Signal between immune cells",
            "Produce antibodies",
            "Phagocytose pathogens"
        ],
        "answer": "Signal between immune cells",
        "difficulty": "medium",
        "topic": "Cytokines",
        "explanation": "Cytokines are signaling molecules that coordinate immune cell activity."
    },
    {
        "id": 157,
        "question": "Which immunoglobulin is most effective in neutralizing toxins?",
        "options": [
            "IgA",
            "IgE",
            "IgG",
            "IgM"
        ],
        "answer": "IgG",
        "difficulty": "medium",
        "topic": "Immunoglobulins",
        "explanation": "IgG is highly effective at neutralizing toxins and pathogens in the bloodstream."
    },
    {
        "id": 158,
        "question": "What is the primary function of regulatory T cells?",
        "options": [
            "Kill infected cells",
            "Suppress immune responses",
            "Produce antibodies",
            "Phagocytose pathogens"
        ],
        "answer": "Suppress immune responses",
        "difficulty": "medium",
        "topic": "T Cells",
        "explanation": "Regulatory T cells prevent excessive immune responses and maintain tolerance to self-antigens."
    },
    {
        "id": 159,
        "question": "Which of the following is a function of macrophages?",
        "options": [
            "Produce antibodies",
            "Phagocytose pathogens",
            "Suppress T cell activity",
            "Activate complement"
        ],
        "answer": "Phagocytose pathogens",
        "difficulty": "medium",
        "topic": "Macrophages",
        "explanation": "Macrophages engulf and digest pathogens, also presenting antigens to T cells."
    },
    {
        "id": 160,
        "question": "What is the role of IgE in allergic reactions?",
        "options": [
            "Neutralize bacterial toxins",
            "Trigger histamine release",
            "Activate complement",
            "Enhance phagocytosis"
        ],
        "answer": "Trigger histamine release",
        "difficulty": "medium",
        "topic": "Immunoglobulins",
        "explanation": "IgE binds to mast cells and triggers histamine release, causing allergic symptoms."
    },
    {
        "id": 161,
        "question": "Which of the following is a secondary lymphoid organ?",
        "options": [
            "Bone marrow",
            "Thymus",
            "Spleen",
            "Fetal liver"
        ],
        "answer": "Spleen",
        "difficulty": "easy",
        "topic": "Lymphoid Organs",
        "explanation": "The spleen is a secondary lymphoid organ where immune responses are initiated."
    },
    {
        "id": 162,
        "question": "What is the primary function of natural killer (NK) cells?",
        "options": [
            "Produce antibodies",
            "Kill virus-infected cells",
            "Present antigens",
            "Activate B cells"
        ],
        "answer": "Kill virus-infected cells",
        "difficulty": "medium",
        "topic": "NK Cells",
        "explanation": "NK cells target and destroy virus-infected and cancerous cells as part of innate immunity."
    },
    {
        "id": 163,
        "question": "Which of the following is a characteristic of adaptive immunity?",
        "options": [
            "Rapid response",
            "Non-specific defense",
            "Specificity",
            "Physical barriers"
        ],
        "answer": "Specificity",
        "difficulty": "easy",
        "topic": "Adaptive Immunity",
        "explanation": "Adaptive immunity is highly specific to particular pathogens and develops memory."
    },
    {
        "id": 164,
        "question": "What is the role of MHC class II molecules?",
        "options": [
            "Present antigens to cytotoxic T cells",
            "Present antigens to helper T cells",
            "Produce cytokines",
            "Kill infected cells"
        ],
        "answer": "Present antigens to helper T cells",
        "difficulty": "medium",
        "topic": "MHC Molecules",
        "explanation": "MHC class II molecules present extracellular antigens to helper T cells, activating immune responses."
    },
    {
        "id": 165,
        "question": "Which of the following is a function of the complement system?",
        "options": [
            "Produce T cells",
            "Promote inflammation",
            "Suppress immune responses",
            "Develop memory cells"
        ],
        "answer": "Promote inflammation",
        "difficulty": "medium",
        "topic": "Complement System",
        "explanation": "The complement system promotes inflammation to recruit immune cells to infection sites."
    },
    {
        "id": 166,
        "question": "What is the primary function of B cells?",
        "options": [
            "Kill infected cells",
            "Produce antibodies",
            "Phagocytose pathogens",
            "Suppress immune responses"
        ],
        "answer": "Produce antibodies",
        "difficulty": "easy",
        "topic": "B Cells",
        "explanation": "B cells differentiate into plasma cells that secrete antibodies to combat pathogens."
    },
    {
        "id": 167,
        "question": "Which type of hypersensitivity is mediated by T cells?",
        "options": [
            "Type I",
            "Type II",
            "Type III",
            "Type IV"
        ],
        "answer": "Type IV",
        "difficulty": "hard",
        "topic": "Hypersensitivity",
        "explanation": "Type IV hypersensitivity is T cell-mediated and involves delayed responses, such as in contact dermatitis."
    },
    {
        "id": 168,
        "question": "What is the role of cytokines in immunity?",
        "options": [
            "Directly kill pathogens",
            "Signal between immune cells",
            "Produce antibodies",
            "Phagocytose pathogens"
        ],
        "answer": "Signal between immune cells",
        "difficulty": "medium",
        "topic": "Cytokines",
        "explanation": "Cytokines are signaling molecules that coordinate immune cell activity."
    },
    {
        "id": 169,
        "question": "Which of the following is a primary lymphoid organ?",
        "options": [
            "Spleen",
            "Lymph nodes",
            "Bone marrow",
            "Tonsils"
        ],
        "answer": "Bone marrow",
        "difficulty": "easy",
        "topic": "Lymphoid Organs",
        "explanation": "Bone marrow is a primary lymphoid organ where B cells are produced and mature."
    },
    {
        "id": 170,
        "question": "What is the role of IgG in the immune system?",
        "options": [
            "Mediate allergic reactions",
            "Neutralize pathogens in blood",
            "Protect mucosal surfaces",
            "Activate B cells"
        ],
        "answer": "Neutralize pathogens in blood",
        "difficulty": "medium",
        "topic": "Immunoglobulins",
        "explanation": "IgG is the most abundant antibody in blood, neutralizing pathogens and toxins."
    },
    {
        "id": 171,
        "question": "Which of the following is a function of the innate immune system?",
        "options": [
            "Develop memory cells",
            "Provide physical barriers",
            "Produce specific antibodies",
            "Activate T cells"
        ],
        "answer": "Provide physical barriers",
        "difficulty": "easy",
        "topic": "Innate Immunity",
        "explanation": "The innate immune system includes physical barriers like skin and mucous membranes for non-specific defense."
    },
    {
        "id": 172,
        "question": "What is the primary function of helper T cells?",
        "options": [
            "Kill infected cells",
            "Activate other immune cells",
            "Phagocytose pathogens",
            "Produce antibodies"
        ],
        "answer": "Activate other immune cells",
        "difficulty": "medium",
        "topic": "T Cells",
        "explanation": "Helper T cells release cytokines to activate B cells, cytotoxic T cells, and macrophages."
    },
    {
        "id": 173,
        "question": "Which of the following is a secondary lymphoid organ?",
        "options": [
            "Bone marrow",
            "Thymus",
            "Lymph nodes",
            "Fetal liver"
        ],
        "answer": "Lymph nodes",
        "difficulty": "easy",
        "topic": "Lymphoid Organs",
        "explanation": "Lymph nodes are secondary lymphoid organs where immune cells interact to initiate immune responses."
    },
    {
        "id": 174,
        "question": "What is the role of interferons in the immune system?",
        "options": [
            "Enhance phagocytosis",
            "Inhibit viral replication",
            "Produce antibodies",
            "Activate complement"
        ],
        "answer": "Inhibit viral replication",
        "difficulty": "medium",
        "topic": "Interferons",
        "explanation": "Interferons are cytokines that inhibit viral replication and enhance immune responses against viruses."
    },
    {
        "id": 175,
        "question": "Which immunoglobulin is most effective at complement activation?",
        "options": [
            "IgA",
            "IgE",
            "IgG",
            "IgD"
        ],
        "answer": "IgG",
        "difficulty": "medium",
        "topic": "Immunoglobulins",
        "explanation": "IgG, along with IgM, effectively activates the complement system to enhance pathogen destruction."
    },
    {
        "id": 176,
        "question": "What is the primary function of memory B cells?",
        "options": [
            "Kill infected cells",
            "Produce antibodies rapidly upon re-exposure",
            "Phagocytose pathogens",
            "Suppress immune responses"
        ],
        "answer": "Produce antibodies rapidly upon re-exposure",
        "difficulty": "medium",
        "topic": "Memory B Cells",
        "explanation": "Memory B cells enable a faster antibody response upon re-exposure to a specific antigen."
    },
    {
        "id": 177,
        'question': "Which of the following is a function of the spleen?",
        "options": [
            "T cell maturation",
            "Filter blood",
            "Produce B cells",
            "Present antigens"
        ],
        "answer": "Filter blood",
        "difficulty": "easy",
        "topic": "Spleen",
        "explanation": "The spleen filters blood, removes pathogens, and stores lymphocytes."
    },
    {
        "id": 178,
        "question": "What is the role of Toll-like receptors (TLRs)?",
        "options": [
            "Produce antibodies",
            "Recognize pathogen patterns",
            "Kill infected cells",
            "Present antigens"
        ],
        "answer": "Recognize pathogen patterns",
        "difficulty": "hard",
        "topic": "Toll-like Receptors",
        "explanation": "TLRs recognize pathogen-associated molecular patterns to initiate innate immune responses."
    },
    {
        "id": 179,
        "question": "Which of the following is a characteristic of Type I hypersensitivity?",
        "options": [
            "Mediated by T cells",
            "Involves immune complexes",
            "IgE-mediated",
            "Delayed response"
        ],
        "answer": "IgE-mediated",
        "difficulty": "medium",
        "topic": "Hypersensitivity",
        "explanation": "Type I hypersensitivity is IgE-mediated, leading to immediate allergic reactions."
    },
    {
        "id": 180,
        "question": "What is the primary function of IgA in the immune system?",
        "options": [
            "Activate complement",
            "Protect mucosal surfaces",
            "Mediate allergic reactions",
            "Neutralize pathogens in blood"
        ],
        "answer": "Protect mucosal surfaces",
        "difficulty": "medium",
        "topic": "Immunoglobulins",
        "explanation": "IgA is the primary antibody protecting mucosal surfaces, such as the gut and respiratory tract."
    },
    {
        "id": 181,
        "question": "Which of the following is a function of the innate immune system?",
        "options": [
            "Develop memory cells",
            "Provide physical barriers",
            "Produce specific antibodies",
            "Activate T cells"
        ],
        "answer": "Provide physical barriers",
        "difficulty": "easy",
        "topic": "Innate Immunity",
        "explanation": "The innate immune system includes physical barriers like skin and mucous membranes for non-specific defense."
    },
    {
        "id": 182,
        "question": "What is the primary function of helper T cells?",
        "options": [
            "Kill infected cells",
            "Activate other immune cells",
            "Phagocytose pathogens",
            "Produce antibodies"
        ],
        "answer": "Activate other immune cells",
        "difficulty": "medium",
        "topic": "T Cells",
        "explanation": "Helper T cells release cytokines to activate B cells, cytotoxic T cells, and macrophages."
    },
    {
        "id": 183,
        "question": "Which of the following is a primary lymphoid organ?",
        "options": [
            "Spleen",
            "Lymph nodes",
            "Thymus",
            "Tonsils"
        ],
        "answer": "Thymus",
        "difficulty": "easy",
        "topic": "Lymphoid Organs",
        "explanation": "The thymus is a primary lymphoid organ where T cells mature."
    },
    {
        "id": 184,
        "question": "What is the role of cytokines in immunity?",
        "options": [
            "Directly kill pathogens",
            "Signal between immune cells",
            "Produce antibodies",
            "Phagocytose pathogens"
        ],
        "answer": "Signal between immune cells",
        "difficulty": "medium",
        "topic": "Cytokines",
        "explanation": "Cytokines are signaling molecules that coordinate immune cell activity."
    },
    {
        "id": 185,
        "question": "Which immunoglobulin is most effective at neutralizing toxins?",
        "options": [
            "IgA",
            "IgE",
            "IgG",
            "IgM"
        ],
        "answer": "IgG",
        "difficulty": "medium",
        "topic": "Immunoglobulins",
        "explanation": "IgG is highly effective at neutralizing toxins and pathogens in the bloodstream."
    },
    {
        "id": 186,
        "question": "What is the primary function of regulatory T cells?",
        "options": [
            "Kill infected cells",
            "Suppress immune responses",
            "Produce antibodies",
            "Phagocytose pathogens"
        ],
        "answer": "Suppress immune responses",
        "difficulty": "medium",
        "topic": "T Cells",
        "explanation": "Regulatory T cells prevent excessive immune responses and maintain tolerance to self-antigens."
    },
    {
        "id": 187,
        "question": "Which of the following is a function of macrophages?",
        "options": [
            "Produce antibodies",
            "Phagocytose pathogens",
            "Suppress T cell activity",
            "Activate complement"
        ],
        "answer": "Phagocytose pathogens",
        "difficulty": "medium",
        "topic": "Macrophages",
        "explanation": "Macrophages engulf and digest pathogens, also presenting antigens to T cells."
    },
    {
        "id": 188,
        "question": "What is the role of IgE in allergic reactions?",
        "options": [
            "Neutralize bacterial toxins",
            "Trigger histamine release",
            "Activate complement",
            "Enhance phagocytosis"
        ],
        "answer": "Trigger histamine release",
        "difficulty": "medium",
        "topic": "Immunoglobulins",
        "explanation": "IgE binds to mast cells and triggers histamine release, causing allergic symptoms."
    },
    {
        "id": 189,
        "question": "Which of the following is a secondary lymphoid organ?",
        "options": [
            "Bone marrow",
            "Thymus",
            "Spleen",
            "Fetal liver"
        ],
        "answer": "Spleen",
        "difficulty": "easy",
        "topic": "Lymphoid Organs",
        "explanation": "The spleen is a secondary lymphoid organ where immune responses are initiated."
    },
    {
        "id": 190,
        "question": "What is the primary function of natural killer (NK) cells?",
        "options": [
            "Produce antibodies",
            "Kill virus-infected cells",
            "Present antigens",
            "Activate B cells"
        ],
        "answer": "Kill virus-infected cells",
        "difficulty": "medium",
        "topic": "NK Cells",
        "explanation": "NK cells target and destroy virus-infected and cancerous cells as part of innate immunity."
    },
    {
        "id": 191,
        "question": "Which of the following is a characteristic of adaptive immunity?",
        "options": [
            "Rapid response",
            "Non-specific defense",
            "Specificity",
            "Physical barriers"
        ],
        "answer": "Specificity",
        "difficulty": "easy",
        "topic": "Adaptive Immunity",
        "explanation": "Adaptive immunity is highly specific to particular pathogens and develops memory."
    },
    {
        "id": 192,
        "question": "What is the role of MHC class II molecules?",
        "options": [
            "Present antigens to cytotoxic T cells",
            "Present antigens to helper T cells",
            "Produce cytokines",
            "Kill infected cells"
        ],
        "answer": "Present antigens to helper T cells",
        "difficulty": "medium",
        "topic": "MHC Molecules",
        "explanation": "MHC class II molecules present extracellular antigens to helper T cells, activating immune responses."
    },
    {
        "id": 193,
        "question": "Which of the following is a function of the complement system?",
        "options": [
            "Produce T cells",
            "Promote inflammation",
            "Suppress immune responses",
            "Develop memory cells"
        ],
        "answer": "Promote inflammation",
        "difficulty": "medium",
        "topic": "Complement System",
        "explanation": "The complement system promotes inflammation to recruit immune cells to infection sites."
    },
    {
        "id": 194,
        "question": "What is the primary function of B cells?",
        "options": [
            "Kill infected cells",
            "Produce antibodies",
            "Phagocytose pathogens",
            "Suppress immune responses"
        ],
        "answer": "Produce antibodies",
        "difficulty": "easy",
        "topic": "B Cells",
        "explanation": "B cells differentiate into plasma cells that secrete antibodies to combat pathogens."
    },
    {
        "id": 195,
        "question": "Which type of hypersensitivity is mediated by T cells?",
        "options": [
            "Type I",
            "Type II",
            "Type III",
            "Type IV"
        ],
        "answer": "Type IV",
        "difficulty": "hard",
        "topic": "Hypersensitivity",
        "explanation": "Type IV hypersensitivity is T cell-mediated and involves delayed responses, such as in contact dermatitis."
    },
    {
        "id": 196,
        "question": "What is the role of cytokines in immunity?",
        "options": [
            "Directly kill pathogens",
            "Signal between immune cells",
            "Produce antibodies",
            "Phagocytose pathogens"
        ],
        "answer": "Signal between immune cells",
        "difficulty": "medium",
        "topic": "Cytokines",
        "explanation": "Cytokines are signaling molecules that coordinate immune cell activity."
    },
    {
        "id": 197,
        "question": "Which of the following is a primary lymphoid organ?",
        "options": [
            "Spleen",
            "Lymph nodes",
            "Bone marrow",
            "Tonsils"
        ],
        "answer": "Bone marrow",
        "difficulty": "easy",
        "topic": "Lymphoid Organs",
        "explanation": "Bone marrow is a primary lymphoid organ where B cells are produced and mature."
    },
    {
        "id": 198,
        "question": "What is the role of IgG in the immune system?",
        "options": [
            "Mediate allergic reactions",
            "Neutralize pathogens in blood",
            "Protect mucosal surfaces",
            "Activate B cells"
        ],
        "answer": "Neutralize pathogens in blood",
        "difficulty": "medium",
        "topic": "Immunoglobulins",
        "explanation": "IgG is the most abundant antibody in blood, neutralizing pathogens and toxins."
    },
    {
        "id": 199,
        "question": "Which of the following is a function of the innate immune system?",
        "options": [
            "Develop memory cells",
            "Provide physical barriers",
            "Produce specific antibodies",
            "Activate T cells"
        ],
        "answer": "Provide physical barriers",
        "difficulty": "easy",
        "topic": "Innate Immunity",
        "explanation": "The innate immune system includes physical barriers like skin and mucous membranes for non-specific defense."
    },
    {
        "id": 200,
        "question": "What is the primary function of helper T cells?",
        "options": [
            "Kill infected cells",
            "Activate other immune cells",
            "Phagocytose pathogens",
            "Produce antibodies"
        ],
        "answer": "Activate other immune cells",
        "difficulty": "medium",
        "topic": "T Cells",
        "explanation": "Helper T cells release cytokines to activate B cells, cytotoxic T cells, and macrophages."
    },
    {
        "id": 201,
        "question": "Which immune cell type is primarily responsible for producing cytokines to amplify immune responses?",
        "options": [
            "Neutrophils",
            "Helper T cells",
            "B cells",
            "Natural killer cells"
        ],
        "answer": "Helper T cells",
        "difficulty": "medium",
        "topic": "T Cells",
        "explanation": "Helper T cells produce cytokines that amplify immune responses by activating B cells, cytotoxic T cells, and other immune cells."
    },
    {
        "id": 202,
        "question": "What is the primary function of the alternative pathway in the complement system?",
        "options": [
            "Produce antibodies",
            "Activate B cells",
            "Spontaneous pathogen destruction",
            "Present antigens"
        ],
        "answer": "Spontaneous pathogen destruction",
        "difficulty": "hard",
        "topic": "Complement System",
        "explanation": "The alternative pathway of the complement system is spontaneously activated on pathogen surfaces, leading to their destruction."
    },
    {
        "id": 203,
        "question": "Which of the following is a chemical barrier of the innate immune system?",
        "options": [
            "Lysozyme in tears",
            "T cells",
            "Antibodies",
            "Memory cells"
        ],
        "answer": "Lysozyme in tears",
        "difficulty": "easy",
        "topic": "Innate Immunity",
        "explanation": "Lysozyme in tears is a chemical barrier that degrades bacterial cell walls, contributing to innate immunity."
    },
    {
        "id": 204,
        "question": "What is the role of memory T cells in the immune system?",
        "options": [
            "Produce antibodies",
            "Provide rapid response to re-infection",
            "Phagocytose pathogens",
            "Suppress immune responses"
        ],
        "answer": "Provide rapid response to re-infection",
        "difficulty": "medium",
        "topic": "Memory T Cells",
        "explanation": "Memory T cells enable a faster and stronger immune response upon re-exposure to a specific pathogen."
    },
    {
        "id": 205,
        "question": "Which type of hypersensitivity is associated with hemolytic anemia?",
        "options": [
            "Type I",
            "Type II",
            "Type III",
            "Type IV"
        ],
        "answer": "Type II",
        "difficulty": "hard",
        "topic": "Hypersensitivity",
        "explanation": "Type II hypersensitivity involves antibodies targeting cell surface antigens, as seen in hemolytic anemia."
    },
    {
        "id": 206,
        "question": "What is the primary function of interleukin-4 (IL-4) in immunity?",
        "options": [
            "Promote B cell differentiation",
            "Kill infected cells",
            "Suppress inflammation",
            "Activate cytotoxic T cells"
        ],
        "answer": "Promote B cell differentiation",
        "difficulty": "hard",
        "topic": "Cytokines",
        "explanation": "IL-4 promotes B cell differentiation into plasma cells and supports antibody production, especially IgE."
    },
    {
        "id": 207,
        "question": "Which of the following is a function of Peyer’s patches in the immune system?",
        "options": [
            "Produce T cells",
            "Monitor gut pathogens",
            "Filter blood",
            "Synthesize cytokines"
        ],
        "answer": "Monitor gut pathogens",
        "difficulty": "medium",
        "topic": "Lymphoid Organs",
        "explanation": "Peyer’s patches are secondary lymphoid tissues in the gut that monitor and respond to intestinal pathogens."
    },
    {
        "id": 208,
        "question": "What is the role of IgD in the immune system?",
        "options": [
            "Neutralize pathogens",
            "Activate B cells",
            "Enhance phagocytosis",
            "Promote allergic reactions"
        ],
        "answer": "Activate B cells",
        "difficulty": "hard",
        "topic": "Immunoglobulins",
        "explanation": "IgD primarily functions as a surface receptor on B cells, playing a role in their activation."
    },
    {
        "id": 209,
        "question": "Which immune cells are primarily involved in combating fungal infections?",
        "options": [
            "Neutrophils",
            "Eosinophils",
            "B cells",
            "Natural killer cells"
        ],
        "answer": "Neutrophils",
        "difficulty": "medium",
        "topic": "Innate Immunity",
        "explanation": "Neutrophils are key phagocytes that combat fungal infections through phagocytosis and release of antimicrobial substances."
    },
    {
        "id": 210,
        "question": "What is the role of the appendix in the immune system?",
        "options": [
            "Produce B cells",
            "Store gut bacteria",
            "Filter lymph",
            "Synthesize antibodies"
        ],
        "answer": "Store gut bacteria",
        "difficulty": "medium",
        "topic": "Lymphoid Organs",
        "explanation": "The appendix is thought to store beneficial gut bacteria and may contribute to immune responses in the gut."
    },
    {
        "id": 211,
        "question": "Which of the following is a characteristic of active immunity?",
        "options": [
            "Temporary protection",
            "Involves memory cells",
            "No antigen exposure",
            "Immediate response"
        ],
        "answer": "Involves memory cells",
        "difficulty": "easy",
        "topic": "Active Immunity",
        "explanation": "Active immunity involves the production of memory cells for long-term protection after antigen exposure."
    },
    {
        "id": 212,
        "question": "What is the primary function of tumor necrosis factor-alpha (TNF-alpha) in immunity?",
        "options": [
            "Promote inflammation",
            "Neutralize pathogens",
            "Kill infected cells",
            "Produce antibodies"
        ],
        "answer": "Promote inflammation",
        "difficulty": "hard",
        "topic": "Cytokines",
        "explanation": "TNF-alpha is a pro-inflammatory cytokine that promotes inflammation and immune cell recruitment."
    },
    {
        "id": 213,
        "question": "Which immunoglobulin is primarily found in breast milk?",
        "options": [
            "IgE",
            "IgA",
            "IgG",
            "IgM"
        ],
        "answer": "IgA",
        "difficulty": "medium",
        "topic": "Immunoglobulins",
        "explanation": "Secretory IgA in breast milk provides passive immunity to infants by protecting mucosal surfaces."
    },
    {
        "id": 214,
        "question": "What is the primary function of the classical pathway in the complement system?",
        "options": [
            "Antibody-mediated pathogen destruction",
            "Spontaneous activation",
            "Suppress immune responses",
            "Produce cytokines"
        ],
        "answer": "Antibody-mediated pathogen destruction",
        "difficulty": "hard",
        "topic": "Complement System",
        "explanation": "The classical pathway is activated by antibodies bound to pathogens, leading to their destruction."
    },
    {
        "id": 215,
        "question": "Which of the following is a function of basophils in the immune system?",
        "options": [
            "Phagocytose pathogens",
            "Release histamine",
            "Produce antibodies",
            "Kill infected cells"
        ],
        "answer": "Release histamine",
        "difficulty": "medium",
        "topic": "Basophils",
        "explanation": "Basophils release histamine and other mediators, contributing to allergic responses and inflammation."
    },
    {
        "id": 216,
        "question": "What is the role of MHC class I molecules in the immune system?",
        "options": [
            "Present antigens to helper T cells",
            "Present antigens to cytotoxic T cells",
            "Produce antibodies",
            "Activate complement"
        ],
        "answer": "Present antigens to cytotoxic T cells",
        "difficulty": "medium",
        "topic": "MHC Molecules",
        "explanation": "MHC class I molecules present intracellular antigens to cytotoxic T cells to target infected cells."
    },
    {
        "id": 217,
        "question": "Which of the following is an example of an autoimmune disease?",
        "options": [
            "Multiple sclerosis",
            "Influenza",
            "Tuberculosis",
            "Malaria"
        ],
        "answer": "Multiple sclerosis",
        "difficulty": "easy",
        "topic": "Autoimmune Diseases",
        "explanation": "Multiple sclerosis is an autoimmune disease where the immune system attacks the myelin sheath of nerves."
    },
    {
        "id": 218,
        "question": "What is the role of mast cells in the immune system?",
        "options": [
            "Produce antibodies",
            "Release histamine in allergic reactions",
            "Kill virus-infected cells",
            "Present antigens"
        ],
        "answer": "Release histamine in allergic reactions",
        "difficulty": "medium",
        "topic": "Mast Cells",
        "explanation": "Mast cells release histamine and other mediators in response to IgE binding, driving allergic reactions."
    },
    {
        "id": 219,
        "question": "Which of the following is a function of the lectin pathway in the complement system?",
        "options": [
            "Produce T cells",
            "Bind to pathogen carbohydrates",
            "Suppress inflammation",
            "Develop memory cells"
        ],
        "answer": "Bind to pathogen carbohydrates",
        "difficulty": "hard",
        "topic": "Complement System",
        "explanation": "The lectin pathway is activated by mannose-binding lectin binding to pathogen carbohydrates, triggering complement activation."
    },
    {
        "id": 220,
        "question": "What is the role of the bone marrow in the immune system?",
        "options": [
            "T cell maturation",
            "B cell production",
            "Antigen presentation",
            "Antibody secretion"
        ],
        "answer": "B cell production",
        "difficulty": "easy",
        "topic": "Bone Marrow",
        "explanation": "Bone marrow is a primary lymphoid organ where B cells are produced and mature."
    },
    {
        "id": 221,
        "question": "Which type of hypersensitivity is associated with serum sickness?",
        "options": [
            "Type I",
            "Type II",
            "Type III",
            "Type IV"
        ],
        "answer": "Type III",
        "difficulty": "hard",
        "topic": "Hypersensitivity",
        "explanation": "Type III hypersensitivity involves immune complex deposition, as seen in serum sickness."
    },
    {
        "id": 222,
        "question": "What is the primary function of regulatory T cells?",
        "options": [
            "Kill infected cells",
            "Suppress immune responses",
            "Produce antibodies",
            "Phagocytose pathogens"
        ],
        "answer": "Suppress immune responses",
        "difficulty": "medium",
        "topic": "T Cells",
        "explanation": "Regulatory T cells maintain immune tolerance and prevent excessive immune responses."
    },
    {
        "id": 223,
        "question": "Which immunoglobulin is most abundant in blood?",
        "options": [
            "IgA",
            "IgD",
            "IgG",
            "IgM"
        ],
        "answer": "IgG",
        "difficulty": "easy",
        "topic": "Immunoglobulins",
        "explanation": "IgG is the most abundant antibody in blood, playing a key role in neutralizing pathogens."
    },
    {
        "id": 224,
        "question": "What is the role of chemokines in the immune system?",
        "options": [
            "Neutralize pathogens",
            "Direct immune cell migration",
            "Produce antibodies",
            "Kill infected cells"
        ],
        "answer": "Direct immune cell migration",
        "difficulty": "hard",
        "topic": "Cytokines",
        "explanation": "Chemokines guide immune cells to sites of infection or inflammation."
    },
    {
        "id": 225,
        "question": "Which of the following is a secondary lymphoid organ?",
        "options": [
            "Bone marrow",
            "Thymus",
            "Tonsils",
            "Fetal liver"
        ],
        "answer": "Tonsils",
        "difficulty": "easy",
        "topic": "Lymphoid Organs",
        "explanation": "Tonsils are secondary lymphoid organs that trap pathogens entering through the mouth or nose."
    },
    {
        "id": 226,
        "question": "What is the primary function of cytotoxic T cells?",
        "options": [
            "Produce antibodies",
            "Kill infected cells",
            "Phagocytose pathogens",
            "Present antigens"
        ],
        "answer": "Kill infected cells",
        "difficulty": "medium",
        "topic": "T Cells",
        "explanation": "Cytotoxic T cells destroy infected or cancerous cells by inducing apoptosis."
    },
    {
        "id": 227,
        "question": "Which of the following is a characteristic of adaptive immunity?",
        "options": [
            "Rapid response",
            "Non-specific defense",
            "Immunological memory",
            "Physical barriers"
        ],
        "answer": "Immunological memory",
        "difficulty": "easy",
        "topic": "Adaptive Immunity",
        "explanation": "Adaptive immunity develops immunological memory for faster responses to previously encountered pathogens."
    },
    {
        "id": 228,
        "question": "What is the role of pattern recognition receptors (PRRs) in immunity?",
        "options": [
            "Produce antibodies",
            "Recognize pathogen patterns",
            "Kill infected cells",
            "Present antigens"
        ],
        "answer": "Recognize pathogen patterns",
        "difficulty": "hard",
        "topic": "Innate Immunity",
        "explanation": "PRRs, such as Toll-like receptors, recognize pathogen-associated molecular patterns to initiate innate immune responses."
    },
    {
        "id": 229,
        "question": "Which immunoglobulin is most effective at opsonization?",
        "options": [
            "IgA",
            "IgE",
            "IgG",
            "IgD"
        ],
        "answer": "IgG",
        "difficulty": "medium",
        "topic": "Immunoglobulins",
        "explanation": "IgG is highly effective at opsonizing pathogens, enhancing their phagocytosis by immune cells."
    },
    {
        "id": 230,
        "question": "What is the primary function of memory B cells?",
        "options": [
            "Kill infected cells",
            "Produce antibodies rapidly upon re-exposure",
            "Phagocytose pathogens",
            "Suppress immune responses"
        ],
        "answer": "Produce antibodies rapidly upon re-exposure",
        "difficulty": "medium",
        "topic": "Memory B Cells",
        "explanation": "Memory B cells enable a faster antibody response upon re-exposure to a specific antigen."
    },
    {
        "id": 231,
        "question": "Which of the following is a function of the spleen?",
        "options": [
            "T cell maturation",
            "Remove old red blood cells",
            "Produce B cells",
            "Present antigens"
        ],
        "answer": "Remove old red blood cells",
        "difficulty": "easy",
        "topic": "Spleen",
        "explanation": "The spleen removes old or damaged red blood cells and filters pathogens from the blood."
    },
    {
        "id": 232,
        "question": "What is the primary function of dendritic cells?",
        "options": [
            "Produce antibodies",
            "Present antigens to T cells",
            "Kill infected cells",
            "Phagocytose pathogens only"
        ],
        "answer": "Present antigens to T cells",
        "difficulty": "medium",
        "topic": "Dendritic Cells",
        "explanation": "Dendritic cells are antigen-presenting cells that initiate adaptive immune responses by presenting antigens to T cells."
    },
    {
        "id": 233,
        "question": "Which of the following is a characteristic of Type I hypersensitivity?",
        "options": [
            "Mediated by T cells",
            "Involves immune complexes",
            "IgE-mediated",
            "Delayed response"
        ],
        "answer": "IgE-mediated",
        "difficulty": "medium",
        "topic": "Hypersensitivity",
        "explanation": "Type I hypersensitivity is IgE-mediated, leading to immediate allergic reactions."
    },
    {
        "id": 234,
        "question": "What is the role of IgA in the immune system?",
        "options": [
            "Activate complement",
            "Protect mucosal surfaces",
            "Mediate allergic reactions",
            "Neutralize pathogens in blood"
        ],
        "answer": "Protect mucosal surfaces",
        "difficulty": "medium",
        "topic": "Immunoglobulins",
        "explanation": "IgA is the primary antibody protecting mucosal surfaces, such as the gut and respiratory tract."
    },
    {
        "id": 235,
        "question": "Which of the following is a function of the innate immune system?",
        "options": [
            "Develop memory cells",
            "Produce antimicrobial peptides",
            "Produce specific antibodies",
            "Activate T cells"
        ],
        "answer": "Produce antimicrobial peptides",
        "difficulty": "medium",
        "topic": "Innate Immunity",
        "explanation": "The innate immune system produces antimicrobial peptides, such as defensins, to combat pathogens."
    },
    {
        "id": 236,
        "question": "What is the primary function of Th1 cells?",
        "options": [
            "Promote antibody production",
            "Activate macrophages",
            "Suppress immune responses",
            "Produce antibodies"
        ],
        "answer": "Activate macrophages",
        "difficulty": "hard",
        "topic": "T Cells",
        "explanation": "Th1 cells release cytokines like IFN-gamma to activate macrophages for intracellular pathogen destruction."
    },
    {
        "id": 237,
        "question": "Which of the following is a primary lymphoid organ?",
        "options": [
            "Spleen",
            "Lymph nodes",
            "Bone marrow",
            "Tonsils"
        ],
        "answer": "Bone marrow",
        "difficulty": "easy",
        "topic": "Lymphoid Organs",
        "explanation": "Bone marrow is a primary lymphoid organ where B cells are produced and mature."
    },
    {
        "id": 238,
        "question": "What is the role of interleukin-10 (IL-10) in immunity?",
        "options": [
            "Promote inflammation",
            "Suppress immune responses",
            "Activate cytotoxic T cells",
            "Produce antibodies"
        ],
        "answer": "Suppress immune responses",
        "difficulty": "hard",
        "topic": "Cytokines",
        "explanation": "IL-10 is an anti-inflammatory cytokine that suppresses immune responses to maintain homeostasis."
    },
    {
        "id": 239,
        "question": "Which immunoglobulin is most effective in agglutination?",
        "options": [
            "IgA",
            "IgE",
            "IgG",
            "IgM"
        ],
        "answer": "IgM",
        "difficulty": "medium",
        "topic": "Immunoglobulins",
        "explanation": "IgM, due to its pentameric structure, is highly effective at agglutinating pathogens."
    },
    {
        "id": 240,
        "question": "What is the primary function of the lymphatic system in immunity?",
        "options": [
            "Produce red blood cells",
            "Transport immune cells",
            "Synthesize antibodies",
            "Kill pathogens directly"
        ],
        "answer": "Transport immune cells",
        "difficulty": "easy",
        "topic": "Lymphatic System",
        "explanation": "The lymphatic system transports immune cells and antigens to lymphoid organs for immune responses."
    },
    {
        "id": 241,
        "question": "Which of the following is a characteristic of Type II hypersensitivity?",
        "options": [
            "Mediated by IgE",
            "Involves immune complexes",
            "Targets cell surface antigens",
            "Delayed response"
        ],
        "answer": "Targets cell surface antigens",
        "difficulty": "hard",
        "topic": "Hypersensitivity",
        "explanation": "Type II hypersensitivity involves IgG or IgM antibodies targeting antigens on cell surfaces, leading to cell destruction."
    },
    {
        "id": 242,
        "question": "What is the role of MHC class I molecules in immunity?",
        "options": [
            "Present antigens to helper T cells",
            "Present antigens to cytotoxic T cells",
            "Produce antibodies",
            "Activate complement"
        ],
        "answer": "Present antigens to cytotoxic T cells",
        "difficulty": "medium",
        "topic": "MHC Molecules",
        "explanation": "MHC class I molecules present intracellular antigens to cytotoxic T cells for destruction of infected cells."
    },
    {
        "id": 243,
        "question": "Which of the following is a function of the complement system?",
        "options": [
            "Produce T cells",
            "Promote inflammation",
            "Suppress immune responses",
            "Develop memory cells"
        ],
        "answer": "Promote inflammation",
        "difficulty": "medium",
        "topic": "Complement System",
        "explanation": "The complement system promotes inflammation to recruit immune cells to infection sites."
    },
    {
        "id": 244,
        "question": "What is the primary function of B cells?",
        "options": [
            "Kill infected cells",
            "Produce antibodies",
            "Phagocytose pathogens",
            "Suppress immune responses"
        ],
        "answer": "Produce antibodies",
        "difficulty": "easy",
        "topic": "B Cells",
        "explanation": "B cells differentiate into plasma cells that secrete antibodies to combat pathogens."
    },
    {
        "id": 245,
        "question": "Which of the following is a characteristic of innate immunity?",
        "options": [
            "Specificity",
            "Immunological memory",
            "Rapid response",
            "Antibody production"
        ],
        "answer": "Rapid response",
        "difficulty": "easy",
        "topic": "Innate Immunity",
        "explanation": "Innate immunity provides a rapid, non-specific response to pathogens."
    },
    {
        "id": 246,
        "question": "What is the role of natural killer (NK) cells in immunity?",
        "options": [
            "Produce antibodies",
            "Kill virus-infected cells",
            "Present antigens",
            "Activate B cells"
        ],
        "answer": "Kill virus-infected cells",
        "difficulty": "medium",
        "topic": "NK Cells",
        "explanation": "NK cells target and destroy virus-infected and cancerous cells as part of innate immunity."
    },
    {
        "id": 247,
        "question": "Which of the following is a function of IgE in the immune system?",
        "options": [
            "Neutralize bacterial toxins",
            "Mediate allergic reactions",
            "Activate complement",
            "Enhance phagocytosis"
        ],
        "answer": "Mediate allergic reactions",
        "difficulty": "medium",
        "topic": "Immunoglobulins",
        "explanation": "IgE binds to mast cells and triggers histamine release, causing allergic reactions."
    },
    {
        "id": 248,
        "question": "What is the primary function of the bone marrow in the immune system?",
        "options": [
            "T cell maturation",
            "B cell production",
            "Antigen presentation",
            "Antibody secretion"
        ],
        "answer": "B cell production",
        "difficulty": "easy",
        "topic": "Bone Marrow",
        "explanation": "Bone marrow is a primary lymphoid organ where B cells are produced and mature."
    },
    {
        "id": 249,
        "question": "Which of the following is an example of active immunity?",
        "options": [
            "Maternal antibodies",
            "Vaccination",
            "Antibody transfusion",
            "Breast milk antibodies"
        ],
        "answer": "Vaccination",
        "difficulty": "easy",
        "topic": "Active Immunity",
        "explanation": "Active immunity is induced by vaccination or infection, stimulating the body to produce its own immune response."
    },
    {
        "id": 250,
        "question": "What is the role of dendritic cells in immunity?",
        "options": [
            "Produce antibodies",
            "Present antigens to T cells",
            "Kill infected cells",
            "Phagocytose pathogens only"
        ],
        "answer": "Present antigens to T cells",
        "difficulty": "medium",
        "topic": "Dendritic Cells",
        "explanation": "Dendritic cells are antigen-presenting cells that initiate adaptive immune responses by presenting antigens to T cells."
    },
    {
        "id": 251,
        "question": "Which of the following is a characteristic of Type IV hypersensitivity?",
        "options": [
            "Mediated by IgE",
            "Involves immune complexes",
            "Delayed response",
            "Targets cell surface antigens"
        ],
        "answer": "Delayed response",
        "difficulty": "hard",
        "topic": "Hypersensitivity",
        "explanation": "Type IV hypersensitivity is T cell-mediated and characterized by a delayed response, as seen in contact dermatitis."
    },
    {
        "id": 252,
        "question": "What is the primary function of IgG in the immune system?",
        "options": [
            "Mediate allergic reactions",
            "Neutralize pathogens in blood",
            "Protect mucosal surfaces",
            "Activate B cells"
        ],
        "answer": "Neutralize pathogens in blood",
        "difficulty": "medium",
        "topic": "Immunoglobulins",
        "explanation": "IgG is the most abundant antibody in blood, neutralizing pathogens and toxins."
    },
    {
        "id": 253,
        "question": "Which of the following is a function of the innate immune system?",
        "options": [
            "Develop memory cells",
            "Provide physical barriers",
            "Produce specific antibodies",
            "Activate T cells"
        ],
        "answer": "Provide physical barriers",
        "difficulty": "easy",
        "topic": "Innate Immunity",
        "explanation": "The innate immune system includes physical barriers like skin and mucous membranes for non-specific defense."
    },
    {
        "id": 254,
        "question": "What is the primary function of Th2 cells?",
        "options": [
            "Activate macrophages",
            "Promote antibody production",
            "Kill infected cells",
            "Suppress immune responses"
        ],
        "answer": "Promote antibody production",
        "difficulty": "hard",
        "topic": "T Cells",
        "explanation": "Th2 cells release cytokines like IL-4 to promote B cell differentiation and antibody production, especially IgE."
    },
    {
        "id": 255,
        "question": "Which of the following is a primary lymphoid organ?",
        "options": [
            "Spleen",
            "Lymph nodes",
            "Thymus",
            "Tonsils"
        ],
        "answer": "Thymus",
        "difficulty": "easy",
        "topic": "Lymphoid Organs",
        "explanation": "The thymus is a primary lymphoid organ where T cells mature."
    },
    {
        "id": 256,
        "question": "What is the role of interleukin-6 (IL-6) in immunity?",
        "options": [
            "Suppress immune responses",
            "Promote inflammation",
            "Kill infected cells",
            "Produce antibodies"
        ],
        "answer": "Promote inflammation",
        "difficulty": "hard",
        "topic": "Cytokines",
        "explanation": "IL-6 is a pro-inflammatory cytokine that promotes inflammation and supports immune cell activation."
    },
    {
        "id": 257,
        "question": "Which immunoglobulin is most effective at neutralizing toxins?",
        "options": [
            "IgA",
            "IgE",
            "IgG",
            "IgM"
        ],
        "answer": "IgG",
        "difficulty": "medium",
        "topic": "Immunoglobulins",
        "explanation": "IgG is highly effective at neutralizing toxins and pathogens in the bloodstream."
    },
    {
        "id": 258,
        "question": "What is the primary function of regulatory T cells?",
        "options": [
            "Kill infected cells",
            "Suppress immune responses",
            "Produce antibodies",
            "Phagocytose pathogens"
        ],
        "answer": "Suppress immune responses",
        "difficulty": "medium",
        "topic": "T Cells",
        "explanation": "Regulatory T cells prevent excessive immune responses and maintain tolerance to self-antigens."
    },
    {
        "id": 259,
        "question": "Which of the following is a function of macrophages?",
        "options": [
            "Produce antibodies",
            "Phagocytose pathogens",
            "Suppress T cell activity",
            "Activate complement"
        ],
        "answer": "Phagocytose pathogens",
        "difficulty": "medium",
        "topic": "Macrophages",
        "explanation": "Macrophages engulf and digest pathogens, also presenting antigens to T cells."
    },
    {
        "id": 260,
        "question": "What is the role of IgE in allergic reactions?",
        "options": [
            "Neutralize bacterial toxins",
            "Trigger histamine release",
            "Activate complement",
            "Enhance phagocytosis"
        ],
        "answer": "Trigger histamine release",
        "difficulty": "medium",
        "topic": "Immunoglobulins",
        "explanation": "IgE binds to mast cells and triggers histamine release, causing allergic symptoms."
    },
    {
        "id": 261,
        "question": "Which of the following is a secondary lymphoid organ?",
        "options": [
            "Bone marrow",
            "Thymus",
            "Spleen",
            "Fetal liver"
        ],
        "answer": "Spleen",
        "difficulty": "easy",
        "topic": "Lymphoid Organs",
        "explanation": "The spleen is a secondary lymphoid organ where immune responses are initiated."
    },
    {
        "id": 262,
        "question": "What is the primary function of natural killer (NK) cells?",
        "options": [
            "Produce antibodies",
            "Kill virus-infected cells",
            "Present antigens",
            "Activate B cells"
        ],
        "answer": "Kill virus-infected cells",
        "difficulty": "medium",
        "topic": "NK Cells",
        "explanation": "NK cells target and destroy virus-infected and cancerous cells as part of innate immunity."
    },
    {
        "id": 263,
        "question": "Which of the following is a characteristic of adaptive immunity?",
        "options": [
            "Rapid response",
            "Non-specific defense",
            "Specificity",
            "Physical barriers"
        ],
        "answer": "Specificity",
        "difficulty": "easy",
        "topic": "Adaptive Immunity",
        "explanation": "Adaptive immunity is highly specific to particular pathogens and develops memory."
    },
    {
        "id": 264,
        "question": "What is the role of MHC class II molecules?",
        "options": [
            "Present antigens to cytotoxic T cells",
            "Present antigens to helper T cells",
            "Produce cytokines",
            "Kill infected cells"
        ],
        "answer": "Present antigens to helper T cells",
        "difficulty": "medium",
        "topic": "MHC Molecules",
        "explanation": "MHC class II molecules present extracellular antigens to helper T cells, activating immune responses."
    },
    {
        "id": 265,
        "question": "Which of the following is a function of the complement system?",
        "options": [
            "Produce T cells",
            "Promote inflammation",
            "Suppress immune responses",
            "Develop memory cells"
        ],
        "answer": "Promote inflammation",
        "difficulty": "medium",
        "topic": "Complement System",
        "explanation": "The complement system promotes inflammation to recruit immune cells to infection sites."
    },
    {
        "id": 266,
        "question": "What is the primary function of B cells?",
        "options": [
            "Kill infected cells",
            "Produce antibodies",
            "Phagocytose pathogens",
            "Suppress immune responses"
        ],
        "answer": "Produce antibodies",
        "difficulty": "easy",
        "topic": "B Cells",
        "explanation": "B cells differentiate into plasma cells that secrete antibodies to combat pathogens."
    },
    {
        "id": 267,
        "question": "Which type of hypersensitivity is mediated by T cells?",
        "options": [
            "Type I",
            "Type II",
            "Type III",
            "Type IV"
        ],
        "answer": "Type IV",
        "difficulty": "hard",
        "topic": "Hypersensitivity",
        "explanation": "Type IV hypersensitivity is T cell-mediated and involves delayed responses, such as in contact dermatitis."
    },
    {
        "id": 268,
        "question": "What is the role of cytokines in immunity?",
        "options": [
            "Directly kill pathogens",
            "Signal between immune cells",
            "Produce antibodies",
            "Phagocytose pathogens"
        ],
        "answer": "Signal between immune cells",
        "difficulty": "medium",
        "topic": "Cytokines",
        "explanation": "Cytokines are signaling molecules that coordinate immune cell activity."
    },
    {
        "id": 269,
        "question": "Which of the following is a primary lymphoid organ?",
        "options": [
            "Spleen",
            "Lymph nodes",
            "Bone marrow",
            "Tonsils"
        ],
        "answer": "Bone marrow",
        "difficulty": "easy",
        "topic": "Lymphoid Organs",
        "explanation": "Bone marrow is a primary lymphoid organ where B cells are produced and mature."
    },
    {
        "id": 270,
        "question": "What is the role of IgG in the immune system?",
        "options": [
            "Mediate allergic reactions",
            "Neutralize pathogens in blood",
            "Protect mucosal surfaces",
            "Activate B cells"
        ],
        "answer": "Neutralize pathogens in blood",
        "difficulty": "medium",
        "topic": "Immunoglobulins",
        "explanation": "IgG is the most abundant antibody in blood, neutralizing pathogens and toxins."
    },
    {
        "id": 271,
        "question": "Which of the following is a function of the innate immune system?",
        "options": [
            "Develop memory cells",
            "Provide physical barriers",
            "Produce specific antibodies",
            "Activate T cells"
        ],
        "answer": "Provide physical barriers",
        "difficulty": "easy",
        "topic": "Innate Immunity",
        "explanation": "The innate immune system includes physical barriers like skin and mucous membranes for non-specific defense."
    },
    {
        "id": 272,
        "question": "What is the primary function of helper T cells?",
        "options": [
            "Kill infected cells",
            "Activate other immune cells",
            "Phagocytose pathogens",
            "Produce antibodies"
        ],
        "answer": "Activate other immune cells",
        "difficulty": "medium",
        "topic": "T Cells",
        "explanation": "Helper T cells release cytokines to activate B cells, cytotoxic T cells, and macrophages."
    },
    {
        "id": 273,
        "question": "Which of the following is a secondary lymphoid organ?",
        "options": [
            "Bone marrow",
            "Thymus",
            "Lymph nodes",
            "Fetal liver"
        ],
        "answer": "Lymph nodes",
        "difficulty": "easy",
        "topic": "Lymphoid Organs",
        "explanation": "Lymph nodes are secondary lymphoid organs where immune cells interact to initiate immune responses."
    },
    {
        "id": 274,
        "question": "What is the role of interferons in the immune system?",
        "options": [
            "Enhance phagocytosis",
            "Inhibit viral replication",
            "Produce antibodies",
            "Activate complement"
        ],
        "answer": "Inhibit viral replication",
        "difficulty": "medium",
        "topic": "Interferons",
        "explanation": "Interferons are cytokines that inhibit viral replication and enhance immune responses against viruses."
    },
    {
        "id": 275,
        "question": "Which immunoglobulin is most effective at complement activation?",
        "options": [
            "IgA",
            "IgE",
            "IgG",
            "IgD"
        ],
        "answer": "IgG",
        "difficulty": "medium",
        "topic": "Immunoglobulins",
        "explanation": "IgG, along with IgM, effectively activates the complement system to enhance pathogen destruction."
    },
    {
        "id": 276,
        "question": "What is the primary function of memory B cells?",
        "options": [
            "Kill infected cells",
            "Produce antibodies rapidly upon re-exposure",
            "Phagocytose pathogens",
            "Suppress immune responses"
        ],
        "answer": "Produce antibodies rapidly upon re-exposure",
        "difficulty": "medium",
        "topic": "Memory B Cells",
        "explanation": "Memory B cells enable a faster antibody response upon re-exposure to a specific antigen."
    },
    {
        "id": 277,
        "question": "Which of the following is a function of the spleen?",
        "options": [
            "T cell maturation",
            "Filter blood",
            "Produce B cells",
            "Present antigens"
        ],
        "answer": "Filter blood",
        "difficulty": "easy",
        "topic": "Spleen",
        "explanation": "The spleen filters blood, removes pathogens, and stores lymphocytes."
    },
    {
        "id": 278,
        "question": "What is the role of Toll-like receptors (TLRs)?",
        "options": [
            "Produce antibodies",
            "Recognize pathogen patterns",
            "Kill infected cells",
            "Present antigens"
        ],
        "answer": "Recognize pathogen patterns",
        "difficulty": "hard",
        "topic": "Toll-like Receptors",
        "explanation": "TLRs recognize pathogen-associated molecular patterns to initiate innate immune responses."
    },
    {
        "id": 279,
        "question": "Which of the following is a characteristic of Type I hypersensitivity?",
        "options": [
            "Mediated by T cells",
            "Involves immune complexes",
            "IgE-mediated",
            "Delayed response"
        ],
        "answer": "IgE-mediated",
        "difficulty": "medium",
        "topic": "Hypersensitivity",
        "explanation": "Type I hypersensitivity is IgE-mediated, leading to immediate allergic reactions."
    },
    {
        "id": 280,
        "question": "What is the primary function of IgA in the immune system?",
        "options": [
            "Activate complement",
            "Protect mucosal surfaces",
            "Mediate allergic reactions",
            "Neutralize pathogens in blood"
        ],
        "answer": "Protect mucosal surfaces",
        "difficulty": "medium",
        "topic": "Immunoglobulins",
        "explanation": "IgA is the primary antibody protecting mucosal surfaces, such as the gut and respiratory tract."
    },
    {
        "id": 281,
        "question": "Which of the following is a function of the innate immune system?",
        "options": [
            "Develop memory cells",
            "Provide physical barriers",
            "Produce specific antibodies",
            "Activate T cells"
        ],
        "answer": "Provide physical barriers",
        "difficulty": "easy",
        "topic": "Innate Immunity",
        "explanation": "The innate immune system includes physical barriers like skin and mucous membranes for non-specific defense."
    },
    {
        "id": 282,
        "question": "What is the primary function of helper T cells?",
        "options": [
            "Kill infected cells",
            "Activate other immune cells",
            "Phagocytose pathogens",
            "Produce antibodies"
        ],
        "answer": "Activate other immune cells",
        "difficulty": "medium",
        "topic": "T Cells",
        "explanation": "Helper T cells release cytokines to activate B cells, cytotoxic T cells, and macrophages."
    },
    {
        "id": 283,
        "question": "Which of the following is a primary lymphoid organ?",
        "options": [
            "Spleen",
            "Lymph nodes",
            "Thymus",
            "Tonsils"
        ],
        "answer": "Thymus",
        "difficulty": "easy",
        "topic": "Lymphoid Organs",
        "explanation": "The thymus is a primary lymphoid organ where T cells mature."
    },
    {
        "id": 284,
        "question": "What is the role of cytokines in immunity?",
        "options": [
            "Directly kill pathogens",
            "Signal between immune cells",
            "Produce antibodies",
            "Phagocytose pathogens"
        ],
        "answer": "Signal between immune cells",
        "difficulty": "medium",
        "topic": "Cytokines",
        "explanation": "Cytokines are signaling molecules that coordinate immune cell activity."
    },
    {
        "id": 285,
        "question": "Which immunoglobulin is most effective at neutralizing toxins?",
        "options": [
            "IgA",
            "IgE",
            "IgG",
            "IgM"
        ],
        "answer": "IgG",
        "difficulty": "medium",
        "topic": "Immunoglobulins",
        "explanation": "IgG is highly effective at neutralizing toxins and pathogens in the bloodstream."
    },
    {
        "id": 286,
        "question": "What is the primary function of regulatory T cells?",
        "options": [
            "Kill infected cells",
            "Suppress immune responses",
            "Produce antibodies",
            "Phagocytose pathogens"
        ],
        "answer": "Suppress immune responses",
        "difficulty": "medium",
        "topic": "T Cells",
        "explanation": "Regulatory T cells prevent excessive immune responses and maintain tolerance to self-antigens."
    },
    {
        "id": 287,
        "question": "Which of the following is a function of macrophages?",
        "options": [
            "Produce antibodies",
            "Phagocytose pathogens",
            "Suppress T cell activity",
            "Activate complement"
        ],
        "answer": "Phagocytose pathogens",
        "difficulty": "medium",
        "topic": "Macrophages",
        "explanation": "Macrophages engulf and digest pathogens, also presenting antigens to T cells."
    },
    {
        "id": 288,
        "question": "What is the role of IgE in allergic reactions?",
        "options": [
            "Neutralize bacterial toxins",
            "Trigger histamine release",
            "Activate complement",
            "Enhance phagocytosis"
        ],
        "answer": "Trigger histamine release",
        "difficulty": "medium",
        "topic": "Immunoglobulins",
        "explanation": "IgE binds to mast cells and triggers histamine release, causing allergic symptoms."
    },
    {
        "id": 289,
        "question": "Which of the following is a secondary lymphoid organ?",
        "options": [
            "Bone marrow",
            "Thymus",
            "Spleen",
            "Fetal liver"
        ],
        "answer": "Spleen",
        "difficulty": "easy",
        "topic": "Lymphoid Organs",
        "explanation": "The spleen is a secondary lymphoid organ where immune responses are initiated."
    },
    {
        "id": 290,
        "question": "What is the primary function of natural killer (NK) cells?",
        "options": [
            "Produce antibodies",
            "Kill virus-infected cells",
            "Present antigens",
            "Activate B cells"
        ],
        "answer": "Kill virus-infected cells",
        "difficulty": "medium",
        "topic": "NK Cells",
        "explanation": "NK cells target and destroy virus-infected and cancerous cells as part of innate immunity."
    },
    {
        "id": 291,
        "question": "Which of the following is a characteristic of adaptive immunity?",
        "options": [
            "Rapid response",
            "Non-specific defense",
            "Specificity",
            "Physical barriers"
        ],
        "answer": "Specificity",
        "difficulty": "easy",
        "topic": "Adaptive Immunity",
        "explanation": "Adaptive immunity is highly specific to particular pathogens and develops memory."
    },
    {
        "id": 292,
        "question": "What is the role of MHC class II molecules?",
        "options": [
            "Present antigens to cytotoxic T cells",
            "Present antigens to helper T cells",
            "Produce cytokines",
            "Kill infected cells"
        ],
        "answer": "Present antigens to helper T cells",
        "difficulty": "medium",
        "topic": "MHC Molecules",
        "explanation": "MHC class II molecules present extracellular antigens to helper T cells, activating immune responses."
    },
    {
        "id": 293,
        "question": "Which of the following is a function of the complement system?",
        "options": [
            "Produce T cells",
            "Promote inflammation",
            "Suppress immune responses",
            "Develop memory cells"
        ],
        "answer": "Promote inflammation",
        "difficulty": "medium",
        "topic": "Complement System",
        "explanation": "The complement system promotes inflammation to recruit immune cells to infection sites."
    },
    {
        "id": 294,
        "question": "What is the primary function of B cells?",
        "options": [
            "Kill infected cells",
            "Produce antibodies",
            "Phagocytose pathogens",
            "Suppress immune responses"
        ],
        "answer": "Produce antibodies",
        "difficulty": "easy",
        "topic": "B Cells",
        "explanation": "B cells differentiate into plasma cells that secrete antibodies to combat pathogens."
    },
    {
        "id": 295,
        "question": "Which type of hypersensitivity is mediated by T cells?",
        "options": [
            "Type I",
            "Type II",
            "Type III",
            "Type IV"
        ],
        "answer": "Type IV",
        "difficulty": "hard",
        "topic": "Hypersensitivity",
        "explanation": "Type IV hypersensitivity is T cell-mediated and involves delayed responses, such as in contact dermatitis."
    },
    {
        "id": 296,
        "question": "What is the role of cytokines in immunity?",
        "options": [
            "Directly kill pathogens",
            "Signal between immune cells",
            "Produce antibodies",
            "Phagocytose pathogens"
        ],
        "answer": "Signal between immune cells",
        "difficulty": "medium",
        "topic": "Cytokines",
        "explanation": "Cytokines are signaling molecules that coordinate immune cell activity."
    },
    {
        "id": 297,
        "question": "Which of the following is a primary lymphoid organ?",
        "options": [
            "Spleen",
            "Lymph nodes",
            "Bone marrow",
            "Tonsils"
        ],
        "answer": "Bone marrow",
        "difficulty": "easy",
        "topic": "Lymphoid Organs",
        "explanation": "Bone marrow is a primary lymphoid organ where B cells are produced and mature."
    },
    {
        "id": 298,
        "question": "What is the role of IgG in the immune system?",
        "options": [
            "Mediate allergic reactions",
            "Neutralize pathogens in blood",
            "Protect mucosal surfaces",
            "Activate B cells"
        ],
        "answer": "Neutralize pathogens in blood",
        "difficulty": "medium",
        "topic": "Immunoglobulins",
        "explanation": "IgG is the most abundant antibody in blood, neutralizing pathogens and toxins."
    },
    {
        "id": 299,
        "question": "Which of the following is a function of the innate immune system?",
        "options": [
            "Develop memory cells",
            "Provide physical barriers",
            "Produce specific antibodies",
            "Activate T cells"
        ],
        "answer": "Provide physical barriers",
        "difficulty": "easy",
        "topic": "Innate Immunity",
        "explanation": "The innate immune system includes physical barriers like skin and mucous membranes for non-specific defense."
    },
    {
        "id": 300,
        "question": "What is the primary function of helper T cells?",
        "options": [
            "Kill infected cells",
            "Activate other immune cells",
            "Phagocytose pathogens",
            "Produce antibodies"
        ],
        "answer": "Activate other immune cells",
        "difficulty": "medium",
        "topic": "T Cells",
        "explanation": "Helper T cells release cytokines to activate B cells, cytotoxic T cells, and macrophages."
    },
    {
        "id": 301,
        "question": "What is the primary focus of immunology as a scientific discipline?",
        "options": [
            "Study of infectious diseases",
            "Study of immune system functions",
            "Study of genetic mutations",
            "Study of cellular metabolism"
        ],
        "answer": "Study of immune system functions",
        "difficulty": "easy",
        "topic": "Introduction to Immunology",
        "explanation": "Immunology focuses on understanding the immune system's structure, function, and responses to pathogens and diseases."
    },
    {
        "id": 302,
        "question": "Who is considered a pioneer in immunology for developing the smallpox vaccine?",
        "options": [
            "Louis Pasteur",
            "Edward Jenner",
            "Robert Koch",
            "Paul Ehrlich"
        ],
        "answer": "Edward Jenner",
        "difficulty": "easy",
        "topic": "History of Immunology",
        "explanation": "Edward Jenner developed the smallpox vaccine in 1796, laying the foundation for modern vaccinology."
    },
    {
        "id": 303,
        "question": "Which application of immunology involves the use of antibodies to detect specific proteins in diagnostic tests?",
        "options": [
            "Vaccination",
            "Immunotherapy",
            "ELISA",
            "Gene therapy"
        ],
        "answer": "ELISA",
        "difficulty": "medium",
        "topic": "Applications of Immunology",
        "explanation": "ELISA (Enzyme-Linked Immunosorbent Assay) uses antibodies to detect specific proteins or pathogens in diagnostics."
    },
    {
        "id": 304,
        "question": "Which organ is responsible for the production of all immune cells in adults?",
        "options": [
            "Thymus",
            "Bone marrow",
            "Spleen",
            "Lymph nodes"
        ],
        "answer": "Bone marrow",
        "difficulty": "easy",
        "topic": "Primary Lymphoid Organs",
        "explanation": "Bone marrow is the primary lymphoid organ where all immune cells, including B cells and precursors of T cells, are produced."
    },
    {
        "id": 305,
        "question": "Which secondary lymphoid organ is primarily involved in filtering blood?",
        "options": [
            "Lymph nodes",
            "Spleen",
            "Tonsils",
            "Peyer’s patches"
        ],
        "answer": "Spleen",
        "difficulty": "medium",
        "topic": "Secondary Lymphoid Organs",
        "explanation": "The spleen filters blood, removes pathogens, and facilitates immune responses by housing lymphocytes."
    },
    {
        "id": 306,
        "question": "Which immune cell type is most effective against parasitic infections?",
        "options": [
            "Neutrophils",
            "Eosinophils",
            "Macrophages",
            "Dendritic cells"
        ],
        "answer": "Eosinophils",
        "difficulty": "medium",
        "topic": "Myeloid Lineage",
        "explanation": "Eosinophils are specialized for combating parasitic infections by releasing cytotoxic granules."
    },
    {
        "id": 307,
        "question": "Which lymphoid lineage cell is critical for killing virus-infected cells?",
        "options": [
            "B cells",
            "Helper T cells",
            "Cytotoxic T cells",
            "Regulatory T cells"
        ],
        "answer": "Cytotoxic T cells",
        "difficulty": "medium",
        "topic": "Lymphoid Lineage",
        "explanation": "Cytotoxic T cells recognize and destroy virus-infected cells through MHC class I presentation."
    },
    {
        "id": 308,
        "question": "Which physical barrier of the innate immune system traps pathogens in the respiratory tract?",
        "options": [
            "Skin",
            "Mucous membranes",
            "Lysozymes",
            "Complement proteins"
        ],
        "answer": "Mucous membranes",
        "difficulty": "easy",
        "topic": "Innate Immunity",
        "explanation": "Mucous membranes in the respiratory tract trap pathogens and prevent their entry."
    },
    {
        "id": 309,
        "question": "What is the role of Toll-like receptors (TLRs) in innate immunity?",
        "options": [
            "Produce antibodies",
            "Recognize pathogen-associated molecular patterns",
            "Activate B cells",
            "Present antigens to T cells"
        ],
        "answer": "Recognize pathogen-associated molecular patterns",
        "difficulty": "hard",
        "topic": "Pattern Recognition Receptors",
        "explanation": "TLRs recognize pathogen-associated molecular patterns (PAMPs) to initiate innate immune responses."
    },
    {
        "id": 310,
        "question": "Which process in innate immunity involves the engulfment of pathogens by immune cells?",
        "options": [
            "Opsonization",
            "Phagocytosis",
            "Cytokine release",
            "Antigen presentation"
        ],
        "answer": "Phagocytosis",
        "difficulty": "easy",
        "topic": "Phagocytosis",
        "explanation": "Phagocytosis is the process by which immune cells, like macrophages, engulf and digest pathogens."
    },
    {
        "id": 311,
        "question": "Which complement pathway is activated by antibodies bound to pathogens?",
        "options": [
            "Alternative pathway",
            "Lectin pathway",
            "Classical pathway",
            "Intrinsic pathway"
        ],
        "answer": "Classical pathway",
        "difficulty": "medium",
        "topic": "Complement System",
        "explanation": "The classical pathway is triggered by antibodies (IgG or IgM) bound to pathogen surfaces."
    },
    {
        "id": 312,
        "question": "Which cytokine is critical for inducing fever during an immune response?",
        "options": [
            "Interleukin-2",
            "Interleukin-1",
            "Interferon-gamma",
            "Tumor necrosis factor-alpha"
        ],
        "answer": "Interleukin-1",
        "difficulty": "hard",
        "topic": "Cytokines",
        "explanation": "Interleukin-1 induces fever by acting on the hypothalamus, aiding in immune defense."
    },
    {
        "id": 313,
        "question": "Which characteristic of adaptive immunity allows it to respond more effectively to previously encountered pathogens?",
        "options": [
            "Specificity",
            "Diversity",
            "Immunological memory",
            "Self vs. non-self recognition"
        ],
        "answer": "Immunological memory",
        "difficulty": "easy",
        "topic": "Adaptive Immunity",
        "explanation": "Immunological memory enables a faster and stronger response to previously encountered pathogens."
    },
    {
        "id": 314,
        "question": "What is the primary effector mechanism of humoral immunity?",
        "options": [
            "Cytotoxic T cells",
            "Antibody production",
            "Phagocytosis",
            "Cytokine release"
        ],
        "answer": "Antibody production",
        "difficulty": "medium",
        "topic": "Humoral Immunity",
        "explanation": "Humoral immunity involves B cells producing antibodies to neutralize pathogens and toxins."
    },
    {
        "id": 315,
        "question": "Which cells are primarily responsible for cell-mediated immunity?",
        "options": [
            "B cells",
            "Helper T cells",
            "Cytotoxic T cells",
            "Plasma cells"
        ],
        "answer": "Cytotoxic T cells",
        "difficulty": "medium",
        "topic": "Cell-mediated Immunity",
        "explanation": "Cytotoxic T cells are the main effectors of cell-mediated immunity, targeting infected or cancerous cells."
    },
    {
        "id": 316,
        "question": "What is an epitope in the context of antigens?",
        "options": [
            "The entire antigen molecule",
            "A specific region recognized by the immune system",
            "A type of antibody",
            "A pathogen surface protein"
        ],
        "answer": "A specific region recognized by the immune system",
        "difficulty": "medium",
        "topic": "Antigens",
        "explanation": "An epitope is the specific part of an antigen recognized by antibodies or T cell receptors."
    },
    {
        "id": 317,
        "question": "Which immunoglobulin class is primarily responsible for allergic reactions?",
        "options": [
            "IgA",
            "IgE",
            "IgG",
            "IgM"
        ],
        "answer": "IgE",
        "difficulty": "medium",
        "topic": "Immunoglobulins",
        "explanation": "IgE binds to mast cells and basophils, triggering allergic reactions upon allergen exposure."
    },
    {
        "id": 318,
        "question": "What is the term for the strength of binding between an antigen and an antibody?",
        "options": [
            "Affinity",
            "Avidity",
            "Cross-reactivity",
            "Specificity"
        ],
        "answer": "Affinity",
        "difficulty": "hard",
        "topic": "Antigen-Antibody Interactions",
        "explanation": "Affinity refers to the strength of the interaction between a single antigen-binding site and an epitope."
    },
    {
        "id": 319,
        "question": "Which MHC class presents antigens to cytotoxic T cells?",
        "options": [
            "MHC Class I",
            "MHC Class II",
            "MHC Class III",
            "MHC Class IV"
        ],
        "answer": "MHC Class I",
        "difficulty": "medium",
        "topic": "MHC Molecules",
        "explanation": "MHC Class I molecules present intracellular antigens to cytotoxic T cells for immune surveillance."
    },
    {
        "id": 320,
        "question": "What is the primary site of antigen processing for MHC Class II molecules?",
        "options": [
            "Cytoplasm",
            "Endoplasmic reticulum",
            "Phagolysosome",
            "Nucleus"
        ],
        "answer": "Phagolysosome",
        "difficulty": "hard",
        "topic": "Antigen Processing",
        "explanation": "MHC Class II molecules present antigens processed in the phagolysosome of antigen-presenting cells."
    },
    {
        "id": 321,
        "question": "What is MHC restriction in the context of T cell activation?",
        "options": [
            "T cells only recognize antigens presented by MHC molecules",
            "T cells produce antibodies",
            "T cells directly kill pathogens",
            "T cells suppress immune responses"
        ],
        "answer": "T cells only recognize antigens presented by MHC molecules",
        "difficulty": "hard",
        "topic": "MHC Restriction",
        "explanation": "MHC restriction ensures T cells only recognize antigens when presented by specific MHC molecules."
    },
    {
        "id": 322,
        "question": "Where does B cell maturation primarily occur?",
        "options": [
            "Thymus",
            "Bone marrow",
            "Spleen",
            "Lymph nodes"
        ],
        "answer": "Bone marrow",
        "difficulty": "easy",
        "topic": "B Cell Maturation",
        "explanation": "B cells mature in the bone marrow, where they develop functional B cell receptors."
    },
    {
        "id": 323,
        "question": "What process in the thymus ensures T cells do not react to self-antigens?",
        "options": [
            "Positive selection",
            "Negative selection",
            "Clonal expansion",
            "Costimulation"
        ],
        "answer": "Negative selection",
        "difficulty": "hard",
        "topic": "T Cell Development",
        "explanation": "Negative selection in the thymus eliminates T cells that strongly recognize self-antigens, preventing autoimmunity."
    },
    {
        "id": 324,
        "question": "What is the role of costimulatory signals in lymphocyte activation?",
        "options": [
            "Directly kill pathogens",
            "Enhance antigen recognition",
            "Prevent T cell apoptosis",
            "Ensure full activation of lymphocytes"
        ],
        "answer": "Ensure full activation of lymphocytes",
        "difficulty": "medium",
        "topic": "Costimulatory Signals",
        "explanation": "Costimulatory signals, such as CD28-B7 interactions, are required for full T cell activation."
    },
    {
        "id": 325,
        "question": "Which cytokine is critical for promoting T cell proliferation?",
        "options": [
            "Interleukin-1",
            "Interleukin-2",
            "Interferon-alpha",
            "Tumor necrosis factor-beta"
        ],
        "answer": "Interleukin-2",
        "difficulty": "medium",
        "topic": "Cytokine Networks",
        "explanation": "Interleukin-2 promotes T cell proliferation and differentiation during immune responses."
    },
    {
        "id": 326,
        "question": "What is the primary function of T regulatory cells?",
        "options": [
            "Kill infected cells",
            "Suppress immune responses",
            "Produce antibodies",
            "Phagocytose pathogens"
        ],
        "answer": "Suppress immune responses",
        "difficulty": "medium",
        "topic": "T Regulatory Cells",
        "explanation": "T regulatory cells suppress excessive immune responses to maintain tolerance and prevent autoimmunity."
    },
    {
        "id": 327,
        "question": "What is central tolerance in the immune system?",
        "options": [
            "Suppression of immune responses in peripheral tissues",
            "Elimination of self-reactive lymphocytes in primary lymphoid organs",
            "Production of memory cells",
            "Activation of B cells"
        ],
        "answer": "Elimination of self-reactive lymphocytes in primary lymphoid organs",
        "difficulty": "hard",
        "topic": "Immune Tolerance",
        "explanation": "Central tolerance involves the elimination of self-reactive lymphocytes in the bone marrow and thymus."
    },
    {
        "id": 328,
        "question": "Which cells are responsible for immunological memory in humoral immunity?",
        "options": [
            "Memory B cells",
            "Plasma cells",
            "Cytotoxic T cells",
            "Neutrophils"
        ],
        "answer": "Memory B cells",
        "difficulty": "medium",
        "topic": "Immunological Memory",
        "explanation": "Memory B cells provide long-term immunity by producing antibodies rapidly upon re-exposure to antigens."
    },
    {
        "id": 329,
        "question": "Which type of hypersensitivity is associated with asthma?",
        "options": [
            "Type I",
            "Type II",
            "Type III",
            "Type IV"
        ],
        "answer": "Type I",
        "difficulty": "medium",
        "topic": "Hypersensitivity Reactions",
        "explanation": "Type I hypersensitivity, mediated by IgE, is associated with allergic conditions like asthma."
    },
    {
        "id": 330,
        "question": "Which hypersensitivity reaction involves cytotoxic antibodies targeting cell surface antigens?",
        "options": [
            "Type I",
            "Type II",
            "Type III",
            "Type IV"
        ],
        "answer": "Type II",
        "difficulty": "hard",
        "topic": "Hypersensitivity Reactions",
        "explanation": "Type II hypersensitivity involves IgG or IgM antibodies targeting cell surface antigens, leading to cell destruction."
    },
    {
        "id": 331,
        "question": "Which autoimmune disease is characterized by autoantibodies against nuclear components?",
        "options": [
            "Rheumatoid arthritis",
            "Systemic lupus erythematosus",
            "Type 1 diabetes",
            "Multiple sclerosis"
        ],
        "answer": "Systemic lupus erythematosus",
        "difficulty": "medium",
        "topic": "Autoimmune Diseases",
        "explanation": "Systemic lupus erythematosus is characterized by autoantibodies against nuclear components, leading to tissue damage."
    },
    {
        "id": 332,
        "question": "What is a common diagnostic marker for rheumatoid arthritis?",
        "options": [
            "Anti-nuclear antibodies",
            "Rheumatoid factor",
            "Anti-insulin antibodies",
            "Anti-myelin antibodies"
        ],
        "answer": "Rheumatoid factor",
        "difficulty": "medium",
        "topic": "Autoimmune Diseases",
        "explanation": "Rheumatoid factor is an autoantibody commonly used as a diagnostic marker for rheumatoid arthritis."
    },
    {
        "id": 333,
        "question": "Which primary immunodeficiency is characterized by a lack of functional T and B cells?",
        "options": [
            "SCID",
            "DiGeorge syndrome",
            "Chronic granulomatous disease",
            "Common variable immunodeficiency"
        ],
        "answer": "SCID",
        "difficulty": "medium",
        "topic": "Immunodeficiency Disorders",
        "explanation": "Severe Combined Immunodeficiency (SCID) results in a lack of functional T and B cells, leading to severe immune defects."
    },
    {
        "id": 334,
        "question": "What is the primary cause of secondary immunodeficiency in HIV/AIDS?",
        "options": [
            "Genetic mutations",
            "Viral destruction of CD4+ T cells",
            "Autoantibody production",
            "Thymic aplasia"
        ],
        "answer": "Viral destruction of CD4+ T cells",
        "difficulty": "medium",
        "topic": "Immunodeficiency Disorders",
        "explanation": "HIV targets and destroys CD4+ T cells, leading to secondary immunodeficiency in AIDS."
    },
    {
        "id": 335,
        "question": "Which type of graft is taken from an identical twin?",
        "options": [
            "Autograft",
            "Allograft",
            "Isograft",
            "Xenograft"
        ],
        "answer": "Isograft",
        "difficulty": "medium",
        "topic": "Transplantation Immunology",
        "explanation": "An isograft is a transplant between genetically identical individuals, such as identical twins."
    },
    {
        "id": 336,
        "question": "What is the primary mechanism of hyperacute graft rejection?",
        "options": [
            "T cell-mediated cytotoxicity",
            "Pre-existing antibodies against graft antigens",
            "Immune complex deposition",
            "Delayed hypersensitivity"
        ],
        "answer": "Pre-existing antibodies against graft antigens",
        "difficulty": "hard",
        "topic": "Transplantation Immunology",
        "explanation": "Hyperacute rejection occurs due to pre-existing antibodies that rapidly attack the graft, causing immediate failure."
    },
    {
        "id": 337,
        "question": "What is graft-versus-host disease (GVHD)?",
        "options": [
            "Rejection of the graft by the host immune system",
            "Attack of host tissues by donor immune cells",
            "Infection of the graft",
            "Autoimmune reaction in the graft"
        ],
        "answer": "Attack of host tissues by donor immune cells",
        "difficulty": "hard",
        "topic": "Transplantation Immunology",
        "explanation": "GVHD occurs when donor immune cells, particularly T cells, attack the recipient’s tissues."
    },
    {
        "id": 338,
        "question": "What is the concept of immune surveillance in tumor immunology?",
        "options": [
            "Immune system monitoring for cancerous cells",
            "Tumor cells evading immune detection",
            "Production of tumor-specific antibodies",
            "Activation of macrophages in tumors"
        ],
        "answer": "Immune system monitoring for cancerous cells",
        "difficulty": "medium",
        "topic": "Tumor Immunology",
        "explanation": "Immune surveillance involves the immune system detecting and eliminating cancerous cells before they form tumors."
    },
    {
        "id": 339,
        "question": "What are tumor antigens?",
        "options": [
            "Antigens unique to immune cells",
            "Antigens expressed by cancer cells",
            "Antigens on bacteria",
            "Antigens on MHC molecules"
        ],
        "answer": "Antigens expressed by cancer cells",
        "difficulty": "medium",
        "topic": "Tumor Immunology",
        "explanation": "Tumor antigens are molecules expressed by cancer cells that can be recognized by the immune system."
    },
    {
        "id": 340,
        "question": "What is the goal of cancer immunotherapy using checkpoint inhibitors?",
        "options": [
            "Suppress immune responses",
            "Enhance T cell activity against tumors",
            "Produce antibodies",
            "Activate complement"
        ],
        "answer": "Enhance T cell activity against tumors",
        "difficulty": "hard",
        "topic": "Tumor Immunology",
        "explanation": "Checkpoint inhibitors block inhibitory signals on T cells, enhancing their activity against tumor cells."
    },
    {
        "id": 341,
        "question": "Which type of vaccine uses a weakened form of the pathogen?",
        "options": [
            "Inactivated vaccine",
            "Subunit vaccine",
            "Attenuated vaccine",
            "mRNA vaccine"
        ],
        "answer": "Attenuated vaccine",
        "difficulty": "easy",
        "topic": "Vaccines",
        "explanation": "Attenuated vaccines use a weakened, live pathogen to stimulate a strong immune response."
    },
    {
        "id": 342,
        "question": "What is the role of adjuvants in vaccine design?",
        "options": [
            "Neutralize pathogens",
            "Enhance immune response",
            "Produce antibodies",
            "Suppress inflammation"
        ],
        "answer": "Enhance immune response",
        "difficulty": "medium",
        "topic": "Vaccines",
        "explanation": "Adjuvants are substances added to vaccines to enhance the immune response to the antigen."
    },
    {
        "id": 343,
        "question": "What is herd immunity?",
        "options": [
            "Individual immunity to a pathogen",
            "Population-level resistance to disease spread",
            "Antibody production in response to vaccines",
            "Activation of T cells"
        ],
        "answer": "Population-level resistance to disease spread",
        "difficulty": "easy",
        "topic": "Vaccines",
        "explanation": "Herd immunity occurs when a significant portion of a population is immune, reducing disease spread."
    },
    {
        "id": 344,
        "question": "Which diagnostic technique uses fluorescently labeled antibodies to detect antigens?",
        "options": [
            "ELISA",
            "Immunofluorescence",
            "Western blot",
            "Flow cytometry"
        ],
        "answer": "Immunofluorescence",
        "difficulty": "medium",
        "topic": "Diagnostic Immunology",
        "explanation": "Immunofluorescence uses fluorescently labeled antibodies to visualize antigens in cells or tissues."
    },
    {
        "id": 345,
        "question": "Which diagnostic method separates proteins by size before antibody detection?",
        "options": [
            "ELISA",
            "Western blot",
            "Flow cytometry",
            "Immunochromatography"
        ],
        "answer": "Western blot",
        "difficulty": "medium",
        "topic": "Diagnostic Immunology",
        "explanation": "Western blot separates proteins by size using gel electrophoresis before antibody-based detection."
    },
    {
        "id": 346,
        "question": "What is the primary immunoglobulin found in mucosal secretions?",
        "options": [
            "IgG",
            "IgA",
            "IgM",
            "IgE"
        ],
        "answer": "IgA",
        "difficulty": "easy",
        "topic": "Mucosal Immunity",
        "explanation": "IgA is the primary antibody in mucosal secretions, protecting surfaces like the gut and respiratory tract."
    },
    {
        "id": 347,
        "question": "Which immune component in breast milk provides passive immunity to newborns?",
        "options": [
            "IgG",
            "IgA",
            "IgE",
            "Cytokines"
        ],
        "answer": "IgA",
        "difficulty": "medium",
        "topic": "Neonatal Immunity",
        "explanation": "Secretory IgA in breast milk provides passive immunity to newborns by protecting mucosal surfaces."
    },
    {
        "id": 348,
        "question": "What is the primary role of monoclonal antibodies in immunotherapy?",
        "options": [
            "Neutralize pathogens",
            "Target specific antigens",
            "Activate complement",
            "Suppress inflammation"
        ],
        "answer": "Target specific antigens",
        "difficulty": "medium",
        "topic": "Recent Advances in Immunology",
        "explanation": "Monoclonal antibodies are designed to target specific antigens, such as those on cancer cells, for therapeutic purposes."
    },
    {
        "id": 349,
        "question": "How does CRISPR contribute to immunology research?",
        "options": [
            "Producing vaccines",
            "Editing immune cell genes",
            "Diagnosing infections",
            "Activating T cells"
        ],
        "answer": "Editing immune cell genes",
        "difficulty": "hard",
        "topic": "Recent Advances in Immunology",
        "explanation": "CRISPR is used to edit genes in immune cells, such as T cells, to enhance their function in therapies like CAR-T."
    },
    {
        "id": 350,
        "question": "What is the role of the microbiome in immune system development?",
        "options": [
            "Suppress immune responses",
            "Promote immune tolerance",
            "Produce antibodies",
            "Activate complement"
        ],
        "answer": "Promote immune tolerance",
        "difficulty": "hard",
        "topic": "Recent Advances in Immunology",
        "explanation": "The microbiome helps shape immune responses and promotes tolerance to commensal bacteria."
    },
    {
        "id": 351,
        "question": "What is the primary goal of immunology in medical research?",
        "options": [
            "Develop new antibiotics",
            "Understand immune responses to diseases",
            "Study cellular respiration",
            "Analyze genetic mutations"
        ],
        "answer": "Understand immune responses to diseases",
        "difficulty": "easy",
        "topic": "Introduction to Immunology",
        "explanation": "Immunology aims to understand how the immune system responds to pathogens and diseases to develop treatments and preventive measures."
    },
    {
        "id": 352,
        "question": "Which scientist developed the concept of 'side-chain theory' in immunology?",
        "options": [
            "Edward Jenner",
            "Louis Pasteur",
            "Paul Ehrlich",
            "Robert Koch"
        ],
        "answer": "Paul Ehrlich",
        "difficulty": "medium",
        "topic": "History of Immunology",
        "explanation": "Paul Ehrlich proposed the side-chain theory, which laid the groundwork for understanding antigen-antibody interactions."
    },
    {
        "id": 353,
        "question": "Which immunological application is used to treat cancer by enhancing T cell activity?",
        "options": [
            "Vaccination",
            "Immunotherapy",
            "Antibiotic therapy",
            "Gene editing"
        ],
        "answer": "Immunotherapy",
        "difficulty": "medium",
        "topic": "Applications of Immunology",
        "explanation": "Immunotherapy, such as checkpoint inhibitors, enhances T cell activity to target cancer cells."
    },
    {
        "id": 354,
        "question": "Which primary lymphoid organ is critical for T cell maturation?",
        "options": [
            "Bone marrow",
            "Spleen",
            "Thymus",
            "Lymph nodes"
        ],
        "answer": "Thymus",
        "difficulty": "easy",
        "topic": "Primary Lymphoid Organs",
        "explanation": "The thymus is where T cells mature and undergo selection to recognize antigens."
    },
    {
        "id": 355,
        "question": "Which secondary lymphoid organ is specialized for immune responses in the gut?",
        "options": [
            "Spleen",
            "Lymph nodes",
            "Peyer’s patches",
            "Tonsils"
        ],
        "answer": "Peyer’s patches",
        "difficulty": "medium",
        "topic": "Secondary Lymphoid Organs",
        "explanation": "Peyer’s patches, part of gut-associated lymphoid tissue (GALT), monitor and respond to gut pathogens."
    },
    {
        "id": 356,
        "question": "Which myeloid lineage cell is primarily involved in antigen presentation to T cells?",
        "options": [
            "Neutrophils",
            "Eosinophils",
            "Dendritic cells",
            "Basophils"
        ],
        "answer": "Dendritic cells",
        "difficulty": "medium",
        "topic": "Myeloid Lineage",
        "explanation": "Dendritic cells are professional antigen-presenting cells that initiate T cell responses."
    },
    {
        "id": 357,
        "question": "Which lymphoid lineage cell is responsible for antibody production?",
        "options": [
            "Natural killer cells",
            "Helper T cells",
            "B cells",
            "Cytotoxic T cells"
        ],
        "answer": "B cells",
        "difficulty": "easy",
        "topic": "Lymphoid Lineage",
        "explanation": "B cells differentiate into plasma cells that produce antibodies to combat pathogens."
    },
    {
        "id": 358,
        "question": "Which chemical barrier in innate immunity degrades bacterial cell walls?",
        "options": [
            "Mucous membranes",
            "Lysozyme",
            "Complement proteins",
            "Cytokines"
        ],
        "answer": "Lysozyme",
        "difficulty": "easy",
        "topic": "Innate Immunity",
        "explanation": "Lysozyme, found in tears and saliva, degrades bacterial cell walls as a chemical barrier."
    },
    {
        "id": 359,
        "question": "Which pattern recognition receptor recognizes bacterial lipopolysaccharides (LPS)?",
        "options": [
            "Toll-like receptor 4",
            "NOD-like receptor",
            "RIG-I-like receptor",
            "C-type lectin receptor"
        ],
        "answer": "Toll-like receptor 4",
        "difficulty": "hard",
        "topic": "Pattern Recognition Receptors",
        "explanation": "Toll-like receptor 4 (TLR4) specifically recognizes LPS on gram-negative bacteria to trigger innate responses."
    },
    {
        "id": 360,
        "question": "What is the primary outcome of inflammation in innate immunity?",
        "options": [
            "Antibody production",
            "Recruitment of immune cells",
            "T cell maturation",
            "MHC presentation"
        ],
        "answer": "Recruitment of immune cells",
        "difficulty": "medium",
        "topic": "Inflammation",
        "explanation": "Inflammation recruits immune cells to infection sites to eliminate pathogens."
    },
    {
        "id": 361,
        "question": "Which complement protein forms the membrane attack complex (MAC)?",
        "options": [
            "C3",
            "C5b-C9",
            "C1",
            "C4"
        ],
        "answer": "C5b-C9",
        "difficulty": "hard",
        "topic": "Complement System",
        "explanation": "The membrane attack complex is formed by complement proteins C5b, C6, C7, C8, and C9, lysing pathogens."
    },
    {
        "id": 362,
        "question": "Which acute phase protein increases during inflammation to bind pathogens?",
        "options": [
            "C-reactive protein",
            "Interleukin-2",
            "Interferon-alpha",
            "Hemoglobin"
        ],
        "answer": "C-reactive protein",
        "difficulty": "medium",
        "topic": "Acute Phase Proteins",
        "explanation": "C-reactive protein binds pathogens and enhances phagocytosis during inflammation."
    },
    {
        "id": 363,
        "question": "Which characteristic of adaptive immunity ensures it targets specific pathogens?",
        "options": [
            "Memory",
            "Specificity",
            "Diversity",
            "Rapid response"
        ],
        "answer": "Specificity",
        "difficulty": "easy",
        "topic": "Adaptive Immunity",
        "explanation": "Specificity allows adaptive immunity to target unique antigens on specific pathogens."
    },
    {
        "id": 364,
        "question": "Which cells produce antibodies in humoral immunity?",
        "options": [
            "Cytotoxic T cells",
            "Helper T cells",
            "Plasma cells",
            "Natural killer cells"
        ],
        "answer": "Plasma cells",
        "difficulty": "medium",
        "topic": "Humoral Immunity",
        "explanation": "Plasma cells, derived from B cells, secrete antibodies in humoral immunity."
    },
    {
        "id": 365,
        "question": "What is the main function of helper T cells in cell-mediated immunity?",
        "options": [
            "Directly kill infected cells",
            "Activate other immune cells",
            "Produce antibodies",
            "Phagocytose pathogens"
        ],
        "answer": "Activate other immune cells",
        "difficulty": "medium",
        "topic": "Cell-mediated Immunity",
        "explanation": "Helper T cells release cytokines to activate cytotoxic T cells, B cells, and macrophages."
    },
    {
        "id": 366,
        "question": "What is a hapten in the context of antigens?",
        "options": [
            "A large protein antigen",
            "A small molecule that becomes immunogenic when bound to a carrier",
            "A type of antibody",
            "A pathogen surface marker"
        ],
        "answer": "A small molecule that becomes immunogenic when bound to a carrier",
        "difficulty": "hard",
        "topic": "Antigens",
        "explanation": "Haptens are small molecules that elicit an immune response only when attached to a larger carrier protein."
    },
    {
        "id": 367,
        "question": "Which immunoglobulin is the first produced during a primary immune response?",
        "options": [
            "IgG",
            "IgA",
            "IgM",
            "IgE"
        ],
        "answer": "IgM",
        "difficulty": "medium",
        "topic": "Immunoglobulins",
        "explanation": "IgM is the first antibody produced during a primary immune response due to its pentameric structure."
    },
    {
        "id": 368,
        "question": "What is cross-reactivity in antigen-antibody interactions?",
        "options": [
            "Binding of multiple antibodies to one antigen",
            "Antibody binding to similar but non-identical antigens",
            "Activation of complement",
            "Phagocytosis of antigens"
        ],
        "answer": "Antibody binding to similar but non-identical antigens",
        "difficulty": "hard",
        "topic": "Antigen-Antibody Interactions",
        "explanation": "Cross-reactivity occurs when an antibody binds to antigens with similar epitopes, potentially causing unintended reactions."
    },
    {
        "id": 369,
        "question": "Which cells express MHC Class II molecules?",
        "options": [
            "All nucleated cells",
            "Antigen-presenting cells",
            "Red blood cells",
            "Neurons"
        ],
        "answer": "Antigen-presenting cells",
        "difficulty": "medium",
        "topic": "MHC Molecules",
        "explanation": "MHC Class II molecules are expressed by antigen-presenting cells like dendritic cells, macrophages, and B cells."
    },
    {
        "id": 370,
        "question": "Where does antigen processing for MHC Class I molecules primarily occur?",
        "options": [
            "Phagolysosome",
            "Cytoplasm",
            "Endoplasmic reticulum",
            "Nucleus"
        ],
        "answer": "Cytoplasm",
        "difficulty": "hard",
        "topic": "Antigen Processing",
        "explanation": "MHC Class I molecules present antigens processed in the cytoplasm, typically from intracellular pathogens."
    },
    {
        "id": 371,
        "question": "What does MHC restriction ensure during T cell activation?",
        "options": [
            "T cells produce cytokines",
            "T cells recognize antigens only with MHC molecules",
            "T cells kill pathogens directly",
            "T cells suppress B cells"
        ],
        "answer": "T cells recognize antigens only with MHC molecules",
        "difficulty": "hard",
        "topic": "MHC Restriction",
        "explanation": "MHC restriction ensures T cells only recognize antigens presented by specific MHC molecules."
    },
    {
        "id": 372,
        "question": "What is the role of the B cell receptor (BCR) during B cell maturation?",
        "options": [
            "Phagocytose pathogens",
            "Recognize antigens",
            "Produce cytokines",
            "Present antigens to T cells"
        ],
        "answer": "Recognize antigens",
        "difficulty": "medium",
        "topic": "B Cell Maturation",
        "explanation": "The B cell receptor recognizes antigens, triggering B cell activation and maturation."
    },
    {
        "id": 373,
        "question": "Which process in the thymus selects T cells capable of recognizing MHC molecules?",
        "options": [
            "Negative selection",
            "Clonal expansion",
            "Positive selection",
            "Costimulation"
        ],
        "answer": "Positive selection",
        "difficulty": "hard",
        "topic": "T Cell Development",
        "explanation": "Positive selection ensures T cells can recognize MHC molecules, allowing them to survive and mature."
    },
    {
        "id": 374,
        "question": "What is clonal selection in lymphocyte activation?",
        "options": [
            "Elimination of self-reactive lymphocytes",
            "Expansion of lymphocytes specific to an antigen",
            "Production of cytokines",
            "Phagocytosis of pathogens"
        ],
        "answer": "Expansion of lymphocytes specific to an antigen",
        "difficulty": "medium",
        "topic": "Clonal Selection",
        "explanation": "Clonal selection involves the proliferation of lymphocytes that recognize a specific antigen."
    },
    {
        "id": 375,
        "question": "Which cytokine is primarily involved in antiviral immune responses?",
        "options": [
            "Interleukin-4",
            "Interferon-alpha",
            "Tumor necrosis factor-alpha",
            "Interleukin-10"
        ],
        "answer": "Interferon-alpha",
        "difficulty": "medium",
        "topic": "Cytokine Networks",
        "explanation": "Interferon-alpha inhibits viral replication and enhances antiviral immune responses."
    },
    {
        "id": 376,
        "question": "What is the role of T regulatory cells in preventing autoimmunity?",
        "options": [
            "Produce antibodies",
            "Suppress self-reactive immune responses",
            "Kill infected cells",
            "Present antigens"
        ],
        "answer": "Suppress self-reactive immune responses",
        "difficulty": "medium",
        "topic": "T Regulatory Cells",
        "explanation": "T regulatory cells suppress self-reactive immune responses to maintain immune tolerance."
    },
    {
        "id": 377,
        "question": "What is peripheral tolerance in the immune system?",
        "options": [
            "Elimination of lymphocytes in lymphoid organs",
            "Suppression of self-reactive cells in tissues",
            "Activation of memory cells",
            "Production of antibodies"
        ],
        "answer": "Suppression of self-reactive cells in tissues",
        "difficulty": "hard",
        "topic": "Immune Tolerance",
        "explanation": "Peripheral tolerance prevents autoimmunity by suppressing self-reactive lymphocytes in peripheral tissues."
    },
    {
        "id": 378,
        "question": "Which cells are critical for long-term immunological memory in cell-mediated immunity?",
        "options": [
            "Memory T cells",
            "Plasma cells",
            "Neutrophils",
            "Macrophages"
        ],
        "answer": "Memory T cells",
        "difficulty": "medium",
        "topic": "Immunological Memory",
        "explanation": "Memory T cells provide rapid responses to previously encountered antigens in cell-mediated immunity."
    },
    {
        "id": 379,
        "question": "Which hypersensitivity reaction is associated with poison ivy contact dermatitis?",
        "options": [
            "Type I",
            "Type II",
            "Type III",
            "Type IV"
        ],
        "answer": "Type IV",
        "difficulty": "medium",
        "topic": "Hypersensitivity Reactions",
        "explanation": "Type IV hypersensitivity, a delayed T cell-mediated reaction, causes contact dermatitis like poison ivy."
    },
    {
        "id": 380,
        "question": "Which hypersensitivity reaction involves immune complex deposition in tissues?",
        "options": [
            "Type I",
            "Type II",
            "Type III",
            "Type IV"
        ],
        "answer": "Type III",
        "difficulty": "hard",
        "topic": "Hypersensitivity Reactions",
        "explanation": "Type III hypersensitivity results from immune complex deposition, leading to tissue inflammation."
    },
    {
        "id": 381,
        "question": "What is a hallmark feature of systemic lupus erythematosus (SLE)?",
        "options": [
            "Joint inflammation",
            "Insulin resistance",
            "Myelin sheath damage",
            "Skin rash and autoantibodies"
        ],
        "answer": "Skin rash and autoantibodies",
        "difficulty": "medium",
        "topic": "Autoimmune Diseases",
        "explanation": "SLE is characterized by a butterfly-shaped skin rash and autoantibodies against nuclear antigens."
    },
    {
        "id": 382,
        "question": "Which diagnostic marker is used to confirm type 1 diabetes?",
        "options": [
            "Rheumatoid factor",
            "Anti-islet cell antibodies",
            "Anti-nuclear antibodies",
            "C-reactive protein"
        ],
        "answer": "Anti-islet cell antibodies",
        "difficulty": "medium",
        "topic": "Autoimmune Diseases",
        "explanation": "Anti-islet cell antibodies target pancreatic beta cells and are diagnostic for type 1 diabetes."
    },
    {
        "id": 383,
        "question": "Which primary immunodeficiency is caused by a defect in thymic development?",
        "options": [
            "SCID",
            "DiGeorge syndrome",
            "X-linked agammaglobulinemia",
            "Chronic granulomatous disease"
        ],
        "answer": "DiGeorge syndrome",
        "difficulty": "medium",
        "topic": "Immunodeficiency Disorders",
        "explanation": "DiGeorge syndrome results from thymic hypoplasia, leading to impaired T cell development."
    },
    {
        "id": 384,
        "question": "Which secondary immunodeficiency is commonly caused by chemotherapy?",
        "options": [
            "HIV/AIDS",
            "Malnutrition",
            "Drug-induced immunosuppression",
            "Genetic mutations"
        ],
        "answer": "Drug-induced immunosuppression",
        "difficulty": "medium",
        "topic": "Immunodeficiency Disorders",
        "explanation": "Chemotherapy suppresses immune function, leading to secondary immunodeficiency."
    },
    {
        "id": 385,
        "question": "Which type of graft is taken from the same individual?",
        "options": [
            "Allograft",
            "Autograft",
            "Xenograft",
            "Isograft"
        ],
        "answer": "Autograft",
        "difficulty": "easy",
        "topic": "Transplantation Immunology",
        "explanation": "An autograft is a transplant from one part of an individual’s body to another, avoiding rejection."
    },
    {
        "id": 386,
        "question": "What is the primary mechanism of acute graft rejection?",
        "options": [
            "Pre-existing antibodies",
            "T cell-mediated cytotoxicity",
            "Immune complex deposition",
            "Complement activation"
        ],
        "answer": "T cell-mediated cytotoxicity",
        "difficulty": "hard",
        "topic": "Transplantation Immunology",
        "explanation": "Acute graft rejection is primarily driven by T cells recognizing foreign MHC molecules on the graft."
    },
    {
        "id": 387,
        "question": "Which immunosuppressive drug is commonly used to prevent graft rejection?",
        "options": [
            "Aspirin",
            "Cyclosporine",
            "Penicillin",
            "Insulin"
        ],
        "answer": "Cyclosporine",
        "difficulty": "medium",
        "topic": "Transplantation Immunology",
        "explanation": "Cyclosporine inhibits T cell activation, preventing graft rejection in transplant patients."
    },
    {
        "id": 388,
        "question": "What is immunoediting in tumor immunology?",
        "options": [
            "Tumor evasion of immune detection",
            "Immune system shaping tumor development",
            "Antibody production against tumors",
            "Phagocytosis of tumor cells"
        ],
        "answer": "Immune system shaping tumor development",
        "difficulty": "hard",
        "topic": "Tumor Immunology",
        "explanation": "Immunoediting describes how the immune system influences tumor development through elimination, equilibrium, and escape phases."
    },
    {
        "id": 389,
        "question": "What is a tumor-specific antigen?",
        "options": [
            "An antigen found on all cells",
            "An antigen unique to cancer cells",
            "An antigen on bacteria",
            "An antigen on MHC molecules"
        ],
        "answer": "An antigen unique to cancer cells",
        "difficulty": "medium",
        "topic": "Tumor Immunology",
        "explanation": "Tumor-specific antigens are unique to cancer cells and can be targeted by the immune system."
    },
    {
        "id": 390,
        "question": "What is the function of CAR-T cells in cancer immunotherapy?",
        "options": [
            "Suppress immune responses",
            "Target tumor cells with engineered T cells",
            "Produce antibodies",
            "Activate complement"
        ],
        "answer": "Target tumor cells with engineered T cells",
        "difficulty": "hard",
        "topic": "Tumor Immunology",
        "explanation": "CAR-T cells are genetically engineered T cells designed to recognize and attack tumor cells."
    },
    {
        "id": 391,
        "question": "Which type of vaccine uses only a portion of the pathogen?",
        "options": [
            "Attenuated vaccine",
            "Inactivated vaccine",
            "Subunit vaccine",
            "mRNA vaccine"
        ],
        "answer": "Subunit vaccine",
        "difficulty": "easy",
        "topic": "Vaccines",
        "explanation": "Subunit vaccines use specific pathogen components, like proteins, to stimulate immunity."
    },
    {
        "id": 392,
        "question": "What is the purpose of vaccine schedules?",
        "options": [
            "Reduce side effects",
            "Ensure long-term immunity",
            "Activate complement",
            "Suppress inflammation"
        ],
        "answer": "Ensure long-term immunity",
        "difficulty": "medium",
        "topic": "Vaccines",
        "explanation": "Vaccine schedules are designed to provide timely doses for optimal and long-term immunity."
    },
    {
        "id": 393,
        "question": "What is the minimum percentage of a population typically needed for herd immunity?",
        "options": [
            "10-20%",
            "30-40%",
            "70-90%",
            "50-60%"
        ],
        "answer": "70-90%",
        "difficulty": "medium",
        "topic": "Vaccines",
        "explanation": "Herd immunity typically requires 70-90% of a population to be immune, depending on the disease."
    },
    {
        "id": 394,
        "question": "Which diagnostic technique measures cell surface markers using lasers?",
        "options": [
            "ELISA",
            "Flow cytometry",
            "Western blot",
            "Immunofluorescence"
        ],
        "answer": "Flow cytometry",
        "difficulty": "medium",
        "topic": "Diagnostic Immunology",
        "explanation": "Flow cytometry uses lasers to analyze cell surface markers, aiding in immune cell identification."
    },
    {
        "id": 395,
        "question": "Which diagnostic method is commonly used in rapid pregnancy tests?",
        "options": [
            "Western blot",
            "ELISA",
            "Immunochromatography",
            "Flow cytometry"
        ],
        "answer": "Immunochromatography",
        "difficulty": "medium",
        "topic": "Diagnostic Immunology",
        "explanation": "Immunochromatography is used in rapid tests, like pregnancy tests, for quick antigen detection."
    },
    {
        "id": 396,
        "question": "What is the primary function of IgA in mucosal immunity?",
        "options": [
            "Activate complement",
            "Neutralize pathogens in blood",
            "Protect mucosal surfaces",
            "Mediate allergic reactions"
        ],
        "answer": "Protect mucosal surfaces",
        "difficulty": "easy",
        "topic": "Mucosal Immunity",
        "explanation": "IgA protects mucosal surfaces by neutralizing pathogens in areas like the gut and respiratory tract."
    },
    {
        "id": 397,
        "question": "Which immune component in breast milk supports neonatal gut immunity?",
        "options": [
            "IgG",
            "IgM",
            "Lactoferrin",
            "Cytokines"
        ],
        "answer": "Lactoferrin",
        "difficulty": "medium",
        "topic": "Neonatal Immunity",
        "explanation": "Lactoferrin in breast milk inhibits bacterial growth and supports neonatal gut immunity."
    },
    {
        "id": 398,
        "question": "What is a key advantage of monoclonal antibodies in therapy?",
        "options": [
            "Broad-spectrum activity",
            "High specificity for target antigens",
            "Low production cost",
            "Non-specific immune activation"
        ],
        "answer": "High specificity for target antigens",
        "difficulty": "medium",
        "topic": "Recent Advances in Immunology",
        "explanation": "Monoclonal antibodies are highly specific, targeting precise antigens for effective therapy."
    },
    {
        "id": 399,
        "question": "How does the microbiome influence immune system development?",
        "options": [
            "Suppresses T cell activation",
            "Promotes immune tolerance",
            "Produces antibodies",
            "Activates complement"
        ],
        "answer": "Promotes immune tolerance",
        "difficulty": "hard",
        "topic": "Recent Advances in Immunology",
        "explanation": "The microbiome promotes immune tolerance to commensal bacteria, shaping immune development."
    },
    {
        "id": 400,
        "question": "What is the role of immunoinformatics in immunology?",
        "options": [
            "Diagnosing infections",
            "Analyzing immune data with computational tools",
            "Producing vaccines",
            "Activating T cells"
        ],
        "answer": "Analyzing immune data with computational tools",
        "difficulty": "hard",
        "topic": "Recent Advances in Immunology",
        "explanation": "Immunoinformatics uses computational tools to analyze immune data, aiding in vaccine and therapy design."
    },
    {
        "id": 401,
        "question": "Which immunologist discovered the role of antibodies in immunity?",
        "options": [
            "Emil von Behring",
            "Edward Jenner",
            "Louis Pasteur",
            "Robert Koch"
        ],
        "answer": "Emil von Behring",
        "difficulty": "medium",
        "topic": "History of Immunology",
        "explanation": "Emil von Behring discovered the role of antibodies in immunity, earning the first Nobel Prize in Medicine."
    },
    {
        "id": 402,
        "question": "Which secondary lymphoid organ traps pathogens entering via the oral or nasal routes?",
        "options": [
            "Spleen",
            "Lymph nodes",
            "Tonsils",
            "Peyer’s patches"
        ],
        "answer": "Tonsils",
        "difficulty": "medium",
        "topic": "Secondary Lymphoid Organs",
        "explanation": "Tonsils, part of mucosa-associated lymphoid tissue (MALT), trap pathogens entering through the mouth or nose."
    },
    {
        "id": 403,
        "question": "Which myeloid lineage cell releases histamine during allergic reactions?",
        "options": [
            "Neutrophils",
            "Macrophages",
            "Basophils",
            "Dendritic cells"
        ],
        "answer": "Basophils",
        "difficulty": "medium",
        "topic": "Myeloid Lineage",
        "explanation": "Basophils release histamine and other mediators during allergic reactions."
    },
    {
        "id": 404,
        "question": "Which complement pathway is activated by mannose-binding lectin?",
        "options": [
            "Classical pathway",
            "Alternative pathway",
            "Lectin pathway",
            "Intrinsic pathway"
        ],
        "answer": "Lectin pathway",
        "difficulty": "hard",
        "topic": "Complement System",
        "explanation": "The lectin pathway is activated when mannose-binding lectin binds to pathogen carbohydrates."
    },
    {
        "id": 405,
        "question": "Which cytokine promotes macrophage activation against intracellular pathogens?",
        "options": [
            "Interleukin-4",
            "Interferon-gamma",
            "Interleukin-10",
            "Tumor necrosis factor-beta"
        ],
        "answer": "Interferon-gamma",
        "difficulty": "hard",
        "topic": "Cytokine Networks",
        "explanation": "Interferon-gamma activates macrophages to destroy intracellular pathogens like bacteria and viruses."
    },
    {
        "id": 406,
        "question": "Which immunoglobulin is primarily involved in mucosal immunity?",
        "options": [
            "IgG",
            "IgA",
            "IgE",
            "IgD"
        ],
        "answer": "IgA",
        "difficulty": "easy",
        "topic": "Immunoglobulins",
        "explanation": "IgA is the primary antibody in mucosal secretions, protecting surfaces like the gut and lungs."
    },
    {
        "id": 407,
        "question": "What is the role of Th17 cells in adaptive immunity?",
        "options": [
            "Promote antibody production",
            "Defend against extracellular pathogens",
            "Kill infected cells",
            "Suppress immune responses"
        ],
        "answer": "Defend against extracellular pathogens",
        "difficulty": "hard",
        "topic": "Cell-mediated Immunity",
        "explanation": "Th17 cells produce IL-17 to defend against extracellular bacteria and fungi."
    },
    {
        "id": 408,
        "question": "Which diagnostic technique uses radioactively labeled antibodies?",
        "options": [
            "ELISA",
            "Radioimmunoassay (RIA)",
            "Flow cytometry",
            "Western blot"
        ],
        "answer": "Radioimmunoassay (RIA)",
        "difficulty": "medium",
        "topic": "Diagnostic Immunology",
        "explanation": "RIA uses radioactively labeled antibodies to detect antigens with high sensitivity."
    },
    {
        "id": 409,
        "question": "What is the role of mRNA vaccines in inducing immunity?",
        "options": [
            "Directly kill pathogens",
            "Encode pathogen proteins for immune recognition",
            "Suppress T cell activity",
            "Activate complement"
        ],
        "answer": "Encode pathogen proteins for immune recognition",
        "difficulty": "medium",
        "topic": "Recent Advances in Immunology",
        "explanation": "mRNA vaccines encode pathogen proteins, triggering immune responses without using live pathogens."
    },
    {
        "id": 410,
        "question": "Which type of graft is taken from a different species?",
        "options": [
            "Autograft",
            "Allograft",
            "Xenograft",
            "Isograft"
        ],
        "answer": "Xenograft",
        "difficulty": "medium",
        "topic": "Transplantation Immunology",
        "explanation": "A xenograft is a transplant from a different species, such as pig to human."
    },
    {
        "id": 411,
        "question": "Which autoimmune disease is associated with joint inflammation and cartilage destruction?",
        "options": [
            "Type 1 diabetes",
            "Rheumatoid arthritis",
            "Systemic lupus erythematosus",
            "Multiple sclerosis"
        ],
        "answer": "Rheumatoid arthritis",
        "difficulty": "medium",
        "topic": "Autoimmune Diseases",
        "explanation": "Rheumatoid arthritis involves autoantibodies causing joint inflammation and cartilage destruction."
    },
    {
        "id": 412,
        "question": "What is the primary function of natural killer (NK) cells in innate immunity?",
        "options": [
            "Produce antibodies",
            "Kill virus-infected cells",
            "Present antigens",
            "Activate B cells"
        ],
        "answer": "Kill virus-infected cells",
        "difficulty": "medium",
        "topic": "Lymphoid Lineage",
        "explanation": "NK cells target and destroy virus-infected and cancerous cells without prior sensitization."
    },
    {
        "id": 413,
        "question": "Which physical barrier prevents pathogen entry through the skin?",
        "options": [
            "Mucous membranes",
            "Keratinized epithelium",
            "Lysozyme",
            "Complement proteins"
        ],
        "answer": "Keratinized epithelium",
        "difficulty": "easy",
        "topic": "Innate Immunity",
        "explanation": "The keratinized epithelium of the skin forms a tough barrier against pathogen entry."
    },
    {
        "id": 414,
        "question": "What is the role of avidity in antigen-antibody interactions?",
        "options": [
            "Strength of single-site binding",
            "Overall strength of multiple binding sites",
            "Cross-reactivity with antigens",
            "Activation of complement"
        ],
        "answer": "Overall strength of multiple binding sites",
        "difficulty": "hard",
        "topic": "Antigen-Antibody Interactions",
        "explanation": "Avidity describes the combined strength of multiple antigen-antibody binding sites."
    },
    {
        "id": 415,
        "question": "Which MHC class is expressed on all nucleated cells?",
        "options": [
            "MHC Class I",
            "MHC Class II",
            "MHC Class III",
            "MHC Class IV"
        ],
        "answer": "MHC Class I",
        "difficulty": "medium",
        "topic": "MHC Molecules",
        "explanation": "MHC Class I molecules are expressed on all nucleated cells to present intracellular antigens."
    },
    {
        "id": 416,
        "question": "What is the role of IL-4 in immune responses?",
        "options": [
            "Promote inflammation",
            "Enhance B cell differentiation",
            "Inhibit viral replication",
            "Activate macrophages"
        ],
        "answer": "Enhance B cell differentiation",
        "difficulty": "hard",
        "topic": "Cytokine Networks",
        "explanation": "IL-4 promotes B cell differentiation into plasma cells, particularly for IgE production."
    },
    {
        "id": 417,
        "question": "Which hypersensitivity reaction is associated with blood transfusion reactions?",
        "options": [
            "Type I",
            "Type II",
            "Type III",
            "Type IV"
        ],
        "answer": "Type II",
        "difficulty": "hard",
        "topic": "Hypersensitivity Reactions",
        "explanation": "Type II hypersensitivity involves antibodies targeting antigens on red blood cells, causing transfusion reactions."
    },
    {
        "id": 418,
        "question": "What is the primary mechanism of autoimmunity?",
        "options": [
            "Loss of immune tolerance",
            "Overproduction of antibodies",
            "Viral infection",
            "Phagocytosis of pathogens"
        ],
        "answer": "Loss of immune tolerance",
        "difficulty": "medium",
        "topic": "Autoimmunity",
        "explanation": "Autoimmunity results from a loss of immune tolerance, leading to attacks on self-tissues."
    },
    {
        "id": 419,
        "question": "Which vaccine type uses genetic material to instruct cells to produce antigens?",
        "options": [
            "Attenuated vaccine",
            "Subunit vaccine",
            "mRNA vaccine",
            "Inactivated vaccine"
        ],
        "answer": "mRNA vaccine",
        "difficulty": "easy",
        "topic": "Vaccines",
        "explanation": "mRNA vaccines deliver genetic instructions for cells to produce pathogen antigens, triggering immunity."
    },
    {
        "id": 420,
        "question": "What is the role of fetal immune responses in neonatal immunity?",
        "options": [
            "Produce antibodies",
            "Develop immune tolerance",
            "Activate complement",
            "Phagocytose pathogens"
        ],
        "answer": "Develop immune tolerance",
        "difficulty": "hard",
        "topic": "Neonatal Immunity",
        "explanation": "Fetal immune responses focus on developing tolerance to self-antigens and maternal antigens."
    },
    {
        "id": 421,
        "question": "Which primary lymphoid organ produces hematopoietic stem cells?",
        "options": [
            "Thymus",
            "Spleen",
            "Bone marrow",
            "Lymph nodes"
        ],
        "answer": "Bone marrow",
        "difficulty": "easy",
        "topic": "Primary Lymphoid Organs",
        "explanation": "Bone marrow produces hematopoietic stem cells that give rise to all immune cells."
    },
    {
        "id": 422,
        "question": "Which secondary lymphoid organ filters lymph fluid?",
        "options": [
            "Spleen",
            "Lymph nodes",
            "Tonsils",
            "Peyer’s patches"
        ],
        "answer": "Lymph nodes",
        "difficulty": "medium",
        "topic": "Secondary Lymphoid Organs",
        "explanation": "Lymph nodes filter lymph fluid and facilitate immune cell interactions."
    },
    {
        "id": 423,
        "question": "Which myeloid lineage cell is most abundant in blood?",
        "options": [
            "Neutrophils",
            "Macrophages",
            "Dendritic cells",
            "Eosinophils"
        ],
        "answer": "Neutrophils",
        "difficulty": "medium",
        "topic": "Myeloid Lineage",
        "explanation": "Neutrophils are the most abundant white blood cells, critical for fighting bacterial infections."
    },
    {
        "id": 424,
        "question": "Which lymphoid lineage cell lacks antigen-specific receptors?",
        "options": [
            "B cells",
            "T cells",
            "Natural killer cells",
            "Helper T cells"
        ],
        "answer": "Natural killer cells",
        "difficulty": "medium",
        "topic": "Lymphoid Lineage",
        "explanation": "NK cells lack antigen-specific receptors, relying on other mechanisms to detect stressed cells."
    },
    {
        "id": 425,
        "question": "Which innate immune barrier is found in saliva?",
        "options": [
            "Keratinized skin",
            "Mucous membranes",
            "Lysozyme",
            "Complement proteins"
        ],
        "answer": "Lysozyme",
        "difficulty": "easy",
        "topic": "Innate Immunity",
        "explanation": "Lysozyme in saliva degrades bacterial cell walls, acting as a chemical barrier."
    },
    {
        "id": 426,
        "question": "Which pattern recognition receptor detects viral RNA in the cytoplasm?",
        "options": [
            "Toll-like receptor 3",
            "RIG-I-like receptor",
            "NOD-like receptor",
            "C-type lectin receptor"
        ],
        "answer": "RIG-I-like receptor",
        "difficulty": "hard",
        "topic": "Pattern Recognition Receptors",
        "explanation": "RIG-I-like receptors detect viral RNA in the cytoplasm, triggering antiviral responses."
    },
    {
        "id": 427,
        "question": "What is opsonization in innate immunity?",
        "options": [
            "Direct killing of pathogens",
            "Enhancing phagocytosis by coating pathogens",
            "Cytokine production",
            "Antigen presentation"
        ],
        "answer": "Enhancing phagocytosis by coating pathogens",
        "difficulty": "medium",
        "topic": "Phagocytosis",
        "explanation": "Opsonization involves coating pathogens with antibodies or complement to enhance phagocytosis."
    },
    {
        "id": 428,
        "question": "Which complement pathway is spontaneously activated on pathogen surfaces?",
        "options": [
            "Classical pathway",
            "Lectin pathway",
            "Alternative pathway",
            "Extrinsic pathway"
        ],
        "answer": "Alternative pathway",
        "difficulty": "hard",
        "topic": "Complement System",
        "explanation": "The alternative pathway is spontaneously activated on pathogen surfaces without antibodies."
    },
    {
        "id": 429,
        "question": "Which acute phase protein binds to iron to limit bacterial growth?",
        "options": [
            "C-reactive protein",
            "Ferritin",
            "Haptoglobin",
            "Transferrin"
        ],
        "answer": "Transferrin",
        "difficulty": "hard",
        "topic": "Acute Phase Proteins",
        "explanation": "Transferrin binds iron, limiting its availability for bacterial growth during inflammation."
    },
    {
        "id": 430,
        "question": "Which characteristic of adaptive immunity allows it to recognize a wide range of antigens?",
        "options": [
            "Specificity",
            "Memory",
            "Diversity",
            "Self vs. non-self recognition"
        ],
        "answer": "Diversity",
        "difficulty": "medium",
        "topic": "Adaptive Immunity",
        "explanation": "Diversity in adaptive immunity arises from receptor gene rearrangement, enabling recognition of numerous antigens."
    },
    {
        "id": 431,
        "question": "What is the primary role of antibodies in humoral immunity?",
        "options": [
            "Kill infected cells",
            "Neutralize pathogens",
            "Present antigens",
            "Suppress T cells"
        ],
        "answer": "Neutralize pathogens",
        "difficulty": "easy",
        "topic": "Humoral Immunity",
        "explanation": "Antibodies neutralize pathogens by binding to them, preventing infection or enhancing clearance."
    },
    {
        "id": 432,
        "question": "Which T cell subset is critical for coordinating immune responses?",
        "options": [
            "Cytotoxic T cells",
            "Helper T cells",
            "Regulatory T cells",
            "Memory T cells"
        ],
        "answer": "Helper T cells",
        "difficulty": "medium",
        "topic": "Cell-mediated Immunity",
        "explanation": "Helper T cells coordinate immune responses by activating other cells through cytokine release."
    },
    {
        "id": "433",
        "question": "What is an antigenic determinant?",
        "options": [
            "A type of antibody",
            "The specific part of an antigen recognized by immune receptors",
            "A pathogen surface protein",
            "A complement protein"
        ],
        "answer": "The specific part of an antigen recognized by immune receptors",
        "difficulty": "medium",
        "topic": "Antigens",
        "explanation": "An antigenic determinant, or epitope, is the specific region of an antigen recognized by antibodies or T cell receptors."
    },
    {
        "id": "434",
        "question": "Which immunoglobulin is found on the surface of mature B cells?",
        "options": [
            "IgG",
            "IgA",
            "IgD",
            "IgE"
        ],
        "answer": "IgD",
        "difficulty": "hard",
        "topic": "Immunoglobulins",
        "explanation": "IgD is expressed on the surface of mature B cells, playing a role in B cell activation."
    },
    {
        "id": 435,
        "question": "What is the primary site of antigen processing for MHC Class II molecules?",
        "options": [
            "Cytoplasm",
            "Endoplasmic reticulum",
            "Phagolysosome",
            "Nucleus"
        ],
        "answer": "Phagolysosome",
        "difficulty": "hard",
        "topic": "Antigen Processing",
        "explanation": "Antigens for MHC Class II are processed in the phagolysosome of antigen-presenting cells."
    },
    {
        "id": 436,
        "question": "What is the role of the B cell co-receptor in activation?",
        "options": [
            "Enhance antigen signaling",
            "Produce antibodies",
            "Kill pathogens",
            "Present antigens"
        ],
        "answer": "Enhance antigen signaling",
        "difficulty": "hard",
        "topic": "B Cell Activation",
        "explanation": "The B cell co-receptor amplifies antigen signaling, aiding in full B cell activation."
    },
    {
        "id": 437,
        "question": "What is the costimulatory molecule on antigen-presenting cells?",
        "options": [
            "CD28",
            "B7",
            "CD40",
            "MHC Class I"
        ],
        "answer": "B7",
        "difficulty": "hard",
        "topic": "Costimulatory Signals",
        "explanation": "B7 on antigen-presenting cells interacts with CD28 on T cells to provide co-stimulatory signals."
    },
    {
        "id": 438,
        "question": "Which cytokine suppresses inflammation to maintain immune balance?",
        "options": [
            "Interleukin-6",
            "Interleukin-10",
            "Tumor necrosis factor-alpha",
            "Interferon-gamma"
        ],
        "answer": "Interleukin-10",
        "difficulty": "hard",
        "topic": "Cytokine Networks",
        "explanation": "Interleukin-10 is an anti-inflammatory cytokine that suppresses immune responses to maintain balance."
    },
    {
        "id": 439,
        "question": "Which hypersensitivity is associated with serum sickness?",
        "options": [
            "Type I",
            "Type II",
            "Type III",
            "Type IV"
        ],
        "answer": "Type III",
        "difficulty": "hard",
        "topic": "Hypersensitivity Reactions",
        "explanation": "Type III hypersensitivity involves immune complex deposition, as seen in serum sickness."
    },
    {
        "id": 440,
        "question": "Which diagnostic marker is used for multiple sclerosis?",
        "options": [
            "Anti-myelin antibodies",
            "Rheumatoid factor",
            "Anti-islet cell antibodies",
            "Anti-nuclear antibodies"
        ],
        "answer": "Anti-myelin antibodies",
        "difficulty": "medium",
        "topic": "Autoimmune Diseases",
        "explanation": "Anti-myelin antibodies are associated with multiple sclerosis, targeting the myelin sheath."
    },
    {
        "id": 441,
        "question": "Which primary immunodeficiency affects phagocyte function?",
        "options": [
            "SCID",
            "Chronic granulomatous disease",
            "DiGeorge syndrome",
            "X-linked agammaglobulinemia"
        ],
        "answer": "Chronic granulomatous disease",
        "difficulty": "medium",
        "topic": "Immunodeficiency Disorders",
        "explanation": "Chronic granulomatous disease affects phagocyte function, leading to recurrent infections."
    },
    {
        "id": "442",
        "question": "Which secondary immunodeficiency is caused by a viral infection that targets T cells?",
        "options": [
            "Chemotherapy-induced",
            "HIV/AIDS",
            "Malnutrition",
            "Aging"
        ],
        "answer": "HIV/AIDS",
        "difficulty": "easy",
        "topic": "Immunodeficiency Disorders",
        "explanation": "HIV/AIDS is a secondary immunodeficiency caused by the destruction of CD4+ T cells."
    },
    {
        "id": 443,
        "question": "What is the primary mechanism of chronic graft rejection?",
        "options": [
            "Pre-existing antibodies",
            "T cell-mediated fibrosis",
            "Immune complex deposition",
            "Complement activation"
        ],
        "answer": "T cell-mediated fibrosis",
        "difficulty": "hard",
        "topic": "Transplantation Immunology",
        "explanation": "Chronic graft rejection involves T cell-mediated inflammation and fibrosis, leading to gradual graft failure."
    },
    {
        "id": 444,
        "question": "What is the role of tumor necrosis factor-alpha (TNF-alpha) in tumor immunology?",
        "options": [
            "Promote tumor growth",
            "Induce tumor cell apoptosis",
            "Suppress T cell activity",
            "Activate complement"
        ],
        "answer": "Induce tumor cell apoptosis",
        "difficulty": "hard",
        "topic": "Tumor Immunology",
        "explanation": "TNF-alpha can induce apoptosis in tumor cells, contributing to immune control of cancer."
    },
    {
        "id": 445,
        "question": "Which vaccine type is associated with polio immunization (Salk)?",
        "options": [
            "Attenuated vaccine",
            "Inactivated vaccine",
            "Subunit vaccine",
            "mRNA vaccine"
        ],
        "answer": "Inactivated vaccine",
        "difficulty": "medium",
        "topic": "Vaccines",
        "explanation": "The Salk polio vaccine is an inactivated vaccine, using killed virus to induce immunity."
    },
    {
        "id": 446,
        "question": "Which diagnostic technique is used to detect specific immune cell populations?",
        "options": [
            "ELISA",
            "Flow cytometry",
            "Western blot",
            "Immunochromatography"
        ],
        "answer": "Flow cytometry",
        "difficulty": "medium",
        "topic": "Diagnostic Immunology",
        "explanation": "Flow cytometry is used to identify and quantify specific immune cell populations based on surface markers."
    },
    {
        "id": 447,
        "question": "What is the primary role of IgA in neonatal immunity?",
        "options": [
            "Activate complement",
            "Protect mucosal surfaces",
            "Mediate allergic reactions",
            "Neutralize pathogens in blood"
        ],
        "answer": "Protect mucosal surfaces",
        "difficulty": "easy",
        "topic": "Neonatal Immunity",
        "explanation": "IgA in breast milk protects neonatal mucosal surfaces, providing passive immunity."
    },
    {
        "id": 448,
        "question": "How do mRNA vaccines differ from traditional vaccines?",
        "options": [
            "Use live pathogens",
            "Encode pathogen proteins",
            "Contain inactivated pathogens",
            "Suppress immune responses"
        ],
        "answer": "Encode pathogen proteins",
        "difficulty": "medium",
        "topic": "Recent Advances in Immunology",
        "explanation": "mRNA vaccines encode pathogen proteins, instructing cells to produce antigens for immune recognition."
    },
    {
        "id": 449,
        "question": "What is the role of CRISPR in cancer immunotherapy?",
        "options": [
            "Diagnosing cancer",
            "Editing T cell genes",
            "Producing antibodies",
            "Activating complement"
        ],
        "answer": "Editing T cell genes",
        "difficulty": "hard",
        "topic": "Recent Advances in Immunology",
        "explanation": "CRISPR is used to edit T cell genes, enhancing their ability to target cancer cells in therapies like CAR-T."
    },
    {
        "id": 450,
        "question": "What is the impact of AI in immunoinformatics?",
        "options": [
            "Directly killing pathogens",
            "Predicting immune responses",
            "Producing vaccines",
            "Suppressing inflammation"
        ],
        "answer": "Predicting immune responses",
        "difficulty": "hard",
        "topic": "Recent Advances in Immunology",
        "explanation": "AI in immunoinformatics predicts immune responses, aiding in vaccine and therapy development."
    },
    {
        "id": 451,
        "question": "What is the scope of immunology in relation to disease prevention?",
        "options": [
            "Developing surgical techniques",
            "Studying immune responses for vaccine development",
            "Analyzing metabolic pathways",
            "Engineering prosthetics"
        ],
        "answer": "Studying immune responses for vaccine development",
        "difficulty": "easy",
        "topic": "Introduction to Immunology",
        "explanation": "Immunology studies immune responses to develop vaccines and other preventive measures against diseases."
    },
    {
        "id": 452,
        "question": "Which scientist is credited with discovering phagocytosis?",
        "options": [
            "Elie Metchnikoff",
            "Paul Ehrlich",
            "Edward Jenner",
            "Louis Pasteur"
        ],
        "answer": "Elie Metchnikoff",
        "difficulty": "medium",
        "topic": "History of Immunology",
        "explanation": "Elie Metchnikoff discovered phagocytosis, earning a Nobel Prize for his contributions to immunology."
    },
    {
        "id": 453,
        "question": "Which immunological application uses monoclonal antibodies to treat autoimmune diseases?",
        "options": [
            "Vaccination",
            "Immunotherapy",
            "Diagnostic imaging",
            "Antibiotic therapy"
        ],
        "answer": "Immunotherapy",
        "difficulty": "medium",
        "topic": "Applications of Immunology",
        "explanation": "Monoclonal antibodies are used in immunotherapy to target specific immune components in autoimmune diseases."
    },
    {
        "id": 454,
        "question": "Which primary lymphoid organ is responsible for B cell maturation in mammals?",
        "options": [
            "Thymus",
            "Bone marrow",
            "Spleen",
            "Lymph nodes"
        ],
        "answer": "Bone marrow",
        "difficulty": "easy",
        "topic": "Primary Lymphoid Organs",
        "explanation": "Bone marrow is the primary site for B cell maturation in mammals."
    },
    {
        "id": 455,
        "question": "Which secondary lymphoid organ is part of mucosa-associated lymphoid tissue (MALT)?",
        "options": [
            "Spleen",
            "Lymph nodes",
            "Tonsils",
            "Bone marrow"
        ],
        "answer": "Tonsils",
        "difficulty": "medium",
        "topic": "Secondary Lymphoid Organs",
        "explanation": "Tonsils are part of MALT, protecting mucosal surfaces from pathogens."
    },
    {
        "id": 456,
        "question": "Which myeloid lineage cell is critical for tissue repair and chronic inflammation?",
        "options": [
            "Neutrophils",
            "Macrophages",
            "Eosinophils",
            "Basophils"
        ],
        "answer": "Macrophages",
        "difficulty": "medium",
        "topic": "Myeloid Lineage",
        "explanation": "Macrophages contribute to tissue repair and sustain chronic inflammation by releasing cytokines."
    },
    {
        "id": 457,
        "question": "Which lymphoid lineage cell modulates immune responses to prevent autoimmunity?",
        "options": [
            "B cells",
            "Cytotoxic T cells",
            "Regulatory T cells",
            "Natural killer cells"
        ],
        "answer": "Regulatory T cells",
        "difficulty": "medium",
        "topic": "Lymphoid Lineage",
        "explanation": "Regulatory T cells suppress excessive immune responses to maintain tolerance and prevent autoimmunity."
    },
    {
        "id": 458,
        "question": "Which innate immune barrier is found in the stomach to kill pathogens?",
        "options": [
            "Lysozyme",
            "Gastric acid",
            "Mucous membranes",
            "Keratinized skin"
        ],
        "answer": "Gastric acid",
        "difficulty": "easy",
        "topic": "Innate Immunity",
        "explanation": "Gastric acid in the stomach kills ingested pathogens, acting as a chemical barrier."
    },
    {
        "id": 459,
        "question": "Which pattern recognition receptor is involved in detecting fungal cell walls?",
        "options": [
            "Toll-like receptor 2",
            "RIG-I-like receptor",
            "C-type lectin receptor",
            "NOD-like receptor"
        ],
        "answer": "C-type lectin receptor",
        "difficulty": "hard",
        "topic": "Pattern Recognition Receptors",
        "explanation": "C-type lectin receptors recognize fungal cell wall components, initiating antifungal responses."
    },
    {
        "id": 460,
        "question": "What is the role of chemokines in innate immunity?",
        "options": [
            "Neutralize pathogens",
            "Direct immune cell migration",
            "Produce antibodies",
            "Activate complement"
        ],
        "answer": "Direct immune cell migration",
        "difficulty": "medium",
        "topic": "Inflammation",
        "explanation": "Chemokines guide immune cells to infection sites during inflammation."
    },
    {
        "id": 461,
        "question": "Which complement protein is central to all three complement pathways?",
        "options": [
            "C1",
            "C3",
            "C5",
            "C9"
        ],
        "answer": "C3",
        "difficulty": "hard",
        "topic": "Complement System",
        "explanation": "C3 is a central component in the classical, lectin, and alternative complement pathways."
    },
    {
        "id": 462,
        "question": "Which acute phase protein enhances opsonization during inflammation?",
        "options": [
            "Fibrinogen",
            "C-reactive protein",
            "Serum amyloid A",
            "Haptoglobin"
        ],
        "answer": "C-reactive protein",
        "difficulty": "medium",
        "topic": "Acute Phase Proteins",
        "explanation": "C-reactive protein binds pathogens, enhancing opsonization and phagocytosis."
    },
    {
        "id": 463,
        "question": "Which feature of adaptive immunity distinguishes it from innate immunity?",
        "options": [
            "Rapid response",
            "Non-specific defense",
            "Antigen-specific response",
            "Physical barriers"
        ],
        "answer": "Antigen-specific response",
        "difficulty": "easy",
        "topic": "Adaptive Immunity",
        "explanation": "Adaptive immunity targets specific antigens, unlike the non-specific innate immune response."
    },
    {
        "id": 464,
        "question": "What is the primary role of memory B cells in humoral immunity?",
        "options": [
            "Phagocytose pathogens",
            "Rapid antibody production upon re-exposure",
            "Kill infected cells",
            "Present antigens"
        ],
        "answer": "Rapid antibody production upon re-exposure",
        "difficulty": "medium",
        "topic": "Humoral Immunity",
        "explanation": "Memory B cells enable rapid antibody production upon re-exposure to a specific antigen."
    },
    {
        "id": 465,
        "question": "Which T cell subset is critical for eliminating intracellular pathogens?",
        "options": [
            "Helper T cells",
            "Regulatory T cells",
            "Cytotoxic T cells",
            "Memory T cells"
        ],
        "answer": "Cytotoxic T cells",
        "difficulty": "medium",
        "topic": "Cell-mediated Immunity",
        "explanation": "Cytotoxic T cells eliminate cells infected with intracellular pathogens, such as viruses."
    },
    {
        "id": 466,
        "question": "What is a characteristic of T-dependent antigens?",
        "options": [
            "Elicit B cell responses without T cell help",
            "Stimulate IgM production only",
            "Require T cell assistance for B cell activation",
            "Are always haptens"
        ],
        "answer": "Require T cell assistance for B cell activation",
        "difficulty": "hard",
        "topic": "Antigens",
        "explanation": "T-dependent antigens require helper T cells to activate B cells for antibody production."
    },
    {
        "id": 467,
        "question": "Which immunoglobulin is most effective at agglutinating pathogens?",
        "options": [
            "IgG",
            "IgA",
            "IgM",
            "IgE"
        ],
        "answer": "IgM",
        "difficulty": "medium",
        "topic": "Immunoglobulins",
        "explanation": "IgM’s pentameric structure makes it highly effective at agglutinating pathogens."
    },
    {
        "id": 468,
        "question": "What is the significance of antibody affinity maturation?",
        "options": [
            "Increased antibody production",
            "Improved binding strength to antigens",
            "Activation of complement",
            "Suppression of T cells"
        ],
        "answer": "Improved binding strength to antigens",
        "difficulty": "hard",
        "topic": "Antigen-Antibody Interactions",
        "explanation": "Affinity maturation enhances the binding strength of antibodies to antigens through somatic hypermutation."
    },
    {
        "id": 469,
        "question": "Which MHC class is involved in presenting extracellular antigens?",
        "options": [
            "MHC Class I",
            "MHC Class II",
            "MHC Class III",
            "MHC Class IV"
        ],
        "answer": "MHC Class II",
        "difficulty": "medium",
        "topic": "MHC Molecules",
        "explanation": "MHC Class II presents extracellular antigens to helper T cells."
    },
    {
        "id": 470,
        "question": "Which cellular compartment loads antigens onto MHC Class I molecules?",
        "options": [
            "Phagolysosome",
            "Cytoplasm",
            "Endoplasmic reticulum",
            "Golgi apparatus"
        ],
        "answer": "Endoplasmic reticulum",
        "difficulty": "hard",
        "topic": "Antigen Processing",
        "explanation": "Antigens are loaded onto MHC Class I molecules in the endoplasmic reticulum after cytoplasmic processing."
    },
    {
        "id": 471,
        "question": "What is the role of MHC restriction in immune responses?",
        "options": [
            "Antibody production",
            "T cell recognition of antigens with MHC",
            "Phagocytosis",
            "Cytokine release"
        ],
        "answer": "T cell recognition of antigens with MHC",
        "difficulty": "hard",
        "topic": "MHC Restriction",
        "explanation": "MHC restriction ensures T cells recognize antigens only when presented by MHC molecules."
    },
    {
        "id": 472,
        "question": "What is the role of somatic hypermutation in B cell development?",
        "options": [
            "Increase antibody diversity",
            "Eliminate self-reactive B cells",
            "Activate T cells",
            "Produce cytokines"
        ],
        "answer": "Increase antibody diversity",
        "difficulty": "hard",
        "topic": "B Cell Maturation",
        "explanation": "Somatic hypermutation introduces mutations in B cell receptor genes, increasing antibody diversity and affinity."
    },
    {
        "id": 473,
        "question": "Which thymic process ensures T cells recognize MHC molecules?",
        "options": [
            "Negative selection",
            "Positive selection",
            "Clonal deletion",
            "Costimulation"
        ],
        "answer": "Positive selection",
        "difficulty": "hard",
        "topic": "T Cell Development",
        "explanation": "Positive selection in the thymus ensures T cells can recognize MHC molecules, allowing survival."
    },
    {
        "id": 474,
        "question": "What is the role of CD40-CD40L interaction in lymphocyte activation?",
        "options": [
            "Direct pathogen killing",
            "Costimulatory signal for B cell activation",
            "Phagocytosis",
            "Antigen presentation"
        ],
        "answer": "Costimulatory signal for B cell activation",
        "difficulty": "hard",
        "topic": "Costimulatory Signals",
        "explanation": "CD40-CD40L interaction provides a costimulatory signal for B cell activation and antibody production."
    },
    {
        "id": 475,
        "question": "Which cytokine is critical for Th1 cell differentiation?",
        "options": [
            "Interleukin-4",
            "Interleukin-12",
            "Interleukin-10",
            "Tumor necrosis factor-alpha"
        ],
        "answer": "Interleukin-12",
        "difficulty": "hard",
        "topic": "Cytokine Networks",
        "explanation": "Interleukin-12 promotes Th1 cell differentiation, enhancing responses against intracellular pathogens."
    },
    {
        "id": 476,
        "question": "What is the role of Foxp3 in T regulatory cells?",
        "options": [
            "Promote inflammation",
            "Regulate suppressive function",
            "Produce antibodies",
            "Activate cytotoxic T cells"
        ],
        "answer": "Regulate suppressive function",
        "difficulty": "hard",
        "topic": "T Regulatory Cells",
        "explanation": "Foxp3 is a transcription factor that regulates the suppressive function of T regulatory cells."
    },
    {
        "id": 477,
        "question": "What is anergy in the context of immune tolerance?",
        "options": [
            "Activation of lymphocytes",
            "Functional unresponsiveness of lymphocytes",
            "Production of memory cells",
            "Phagocytosis of pathogens"
        ],
        "answer": "Functional unresponsiveness of lymphocytes",
        "difficulty": "hard",
        "topic": "Immune Tolerance",
        "explanation": "Anergy is a state of functional unresponsiveness in lymphocytes to prevent autoimmune responses."
    },
    {
        "id": 478,
        "question": "Which cells maintain immunological memory for rapid secondary responses?",
        "options": [
            "Neutrophils",
            "Memory B and T cells",
            "Macrophages",
            "Plasma cells"
        ],
        "answer": "Memory B and T cells",
        "difficulty": "medium",
        "topic": "Immunological Memory",
        "explanation": "Memory B and T cells enable rapid and robust responses upon re-exposure to antigens."
    },
    {
        "id": 479,
        "question": "Which hypersensitivity reaction is associated with hay fever?",
        "options": [
            "Type I",
            "Type II",
            "Type III",
            "Type IV"
        ],
        "answer": "Type I",
        "difficulty": "medium",
        "topic": "Hypersensitivity Reactions",
        "explanation": "Type I hypersensitivity, mediated by IgE, causes allergic reactions like hay fever."
    },
    {
        "id": 480,
        "question": "Which hypersensitivity reaction is caused by Rh incompatibility in newborns?",
        "options": [
            "Type I",
            "Type II",
            "Type III",
            "Type IV"
        ],
        "answer": "Type II",
        "difficulty": "hard",
        "topic": "Hypersensitivity Reactions",
        "explanation": "Type II hypersensitivity occurs in Rh incompatibility, where maternal antibodies attack fetal red blood cells."
    },
    {
        "id": 481,
        "question": "Which autoimmune disease targets insulin-producing pancreatic cells?",
        "options": [
            "Rheumatoid arthritis",
            "Type 1 diabetes",
            "Systemic lupus erythematosus",
            "Multiple sclerosis"
        ],
        "answer": "Type 1 diabetes",
        "difficulty": "medium",
        "topic": "Autoimmune Diseases",
        "explanation": "Type 1 diabetes is caused by autoimmune destruction of insulin-producing pancreatic beta cells."
    },
    {
        "id": 482,
        "question": "What is a common diagnostic marker for systemic lupus erythematosus?",
        "options": [
            "Anti-nuclear antibodies",
            "Rheumatoid factor",
            "Anti-islet cell antibodies",
            "C-reactive protein"
        ],
        "answer": "Anti-nuclear antibodies",
        "difficulty": "medium",
        "topic": "Autoimmune Diseases",
        "explanation": "Anti-nuclear antibodies are a hallmark diagnostic marker for systemic lupus erythematosus."
    },
    {
        "id": 483,
        "question": "Which primary immunodeficiency is characterized by absent B cells?",
        "options": [
            "SCID",
            "X-linked agammaglobulinemia",
            "DiGeorge syndrome",
            "Chronic granulomatous disease"
        ],
        "answer": "X-linked agammaglobulinemia",
        "difficulty": "medium",
        "topic": "Immunodeficiency Disorders",
        "explanation": "X-linked agammaglobulinemia results in absent B cells, leading to severe antibody deficiency."
    },
    {
        "id": 484,
        "question": "Which secondary immunodeficiency is associated with protein malnutrition?",
        "options": [
            "HIV/AIDS",
            "Chemotherapy-induced",
            "Malnutrition",
            "Aging"
        ],
        "answer": "Malnutrition",
        "difficulty": "medium",
        "topic": "Immunodeficiency Disorders",
        "explanation": "Protein malnutrition impairs immune function, causing secondary immunodeficiency."
    },
    {
        "id": 485,
        "question": "Which type of graft is most likely to cause immune rejection?",
        "options": [
            "Autograft",
            "Isograft",
            "Allograft",
            "Xenograft"
        ],
        "answer": "Xenograft",
        "difficulty": "medium",
        "topic": "Transplantation Immunology",
        "explanation": "Xenografts, from different species, are most likely to cause immune rejection due to significant antigenic differences."
    },
    {
        "id": 486,
        "question": "What is the primary cause of graft-versus-host disease (GVHD)?",
        "options": [
            "Host immune attack on graft",
            "Donor immune cells attacking host tissues",
            "Infection of the graft",
            "Autoimmune reaction"
        ],
        "answer": "Donor immune cells attacking host tissues",
        "difficulty": "hard",
        "topic": "Transplantation Immunology",
        "explanation": "GVHD occurs when donor immune cells, particularly T cells, attack the recipient’s tissues."
    },
    {
        "id": 487,
        "question": "Which immunosuppressive therapy targets T cell proliferation?",
        "options": [
            "Corticosteroids",
            "Cyclosporine",
            "Methotrexate",
            "Aspirin"
        ],
        "answer": "Methotrexate",
        "difficulty": "hard",
        "topic": "Transplantation Immunology",
        "explanation": "Methotrexate inhibits T cell proliferation, used in immunosuppressive therapy to prevent graft rejection."
    },
    {
        "id": 488,
        "question": "What is the role of immune surveillance in tumor immunology?",
        "options": [
            "Promote tumor growth",
            "Detect and eliminate cancerous cells",
            "Produce antibodies",
            "Activate complement"
        ],
        "answer": "Detect and eliminate cancerous cells",
        "difficulty": "medium",
        "topic": "Tumor Immunology",
        "explanation": "Immune surveillance involves the immune system detecting and eliminating cancerous cells."
    },
    {
        "id": 489,
        "question": "What is a tumor-associated antigen?",
        "options": [
            "An antigen unique to tumors",
            "An antigen overexpressed on tumor cells",
            "An antigen on bacteria",
            "An antigen on MHC molecules"
        ],
        "answer": "An antigen overexpressed on tumor cells",
        "difficulty": "medium",
        "topic": "Tumor Immunology",
        "explanation": "Tumor-associated antigens are overexpressed on tumor cells but may also be present on normal cells."
    },
    {
        "id": 490,
        "question": "Which immunotherapy targets PD-1/PD-L1 interactions?",
        "options": [
            "Monoclonal antibodies",
            "Checkpoint inhibitors",
            "CAR-T therapy",
            "Cytokine therapy"
        ],
        "answer": "Checkpoint inhibitors",
        "difficulty": "hard",
        "topic": "Tumor Immunology",
        "explanation": "Checkpoint inhibitors block PD-1/PD-L1 interactions, enhancing T cell activity against tumors."
    },
    {
        "id": 491,
        "question": "Which vaccine type is used for measles immunization?",
        "options": [
            "Inactivated vaccine",
            "Subunit vaccine",
            "Attenuated vaccine",
            "mRNA vaccine"
        ],
        "answer": "Attenuated vaccine",
        "difficulty": "medium",
        "topic": "Vaccines",
        "explanation": "The measles vaccine is an attenuated vaccine, using a weakened live virus."
    },
    {
        "id": 492,
        "question": "What is the role of adjuvants in vaccines?",
        "options": [
            "Neutralize pathogens",
            "Enhance immune response",
            "Produce antibodies",
            "Suppress T cells"
        ],
        "answer": "Enhance immune response",
        "difficulty": "medium",
        "topic": "Vaccines",
        "explanation": "Adjuvants enhance the immune response to vaccine antigens, improving efficacy."
    },
    {
        "id": 493,
        "question": "Which diagnostic technique visualizes antigens in tissue sections?",
        "options": [
            "ELISA",
            "Immunofluorescence",
            "Western blot",
            "Flow cytometry"
        ],
        "answer": "Immunofluorescence",
        "difficulty": "medium",
        "topic": "Diagnostic Immunology",
        "explanation": "Immunofluorescence uses fluorescent antibodies to visualize antigens in tissue sections."
    },
    {
        "id": 494,
        "question": "Which immune component in breast milk inhibits bacterial growth?",
        "options": [
            "IgG",
            "Lactoferrin",
            "IgE",
            "Cytokines"
        ],
        "answer": "Lactoferrin",
        "difficulty": "medium",
        "topic": "Neonatal Immunity",
        "explanation": "Lactoferrin in breast milk binds iron, inhibiting bacterial growth and supporting neonatal immunity."
    },
    {
        "id": 495,
        "question": "What is the primary advantage of mRNA vaccines?",
        "options": [
            "Long-term storage",
            "Rapid development and production",
            "Use of live pathogens",
            "Low cost"
        ],
        "answer": "Rapid development and production",
        "difficulty": "medium",
        "topic": "Recent Advances in Immunology",
        "explanation": "mRNA vaccines can be developed and produced rapidly, as seen in COVID-19 vaccine development."
    },
    {
        "id": 496,
        "question": "How does CRISPR enhance immunotherapy?",
        "options": [
            "Producing antibodies",
            "Editing immune cell genes",
            "Diagnosing infections",
            "Activating complement"
        ],
        "answer": "Editing immune cell genes",
        "difficulty": "hard",
        "topic": "Recent Advances in Immunology",
        "explanation": "CRISPR edits immune cell genes to improve their effectiveness in immunotherapy, such as CAR-T therapy."
    },
    {
        "id": 497,
        "question": "What is the role of the microbiome in immune regulation?",
        "options": [
            "Produce antibodies",
            "Promote immune tolerance",
            "Activate complement",
            "Suppress T cells"
        ],
        "answer": "Promote immune tolerance",
        "difficulty": "hard",
        "topic": "Recent Advances in Immunology",
        "explanation": "The microbiome promotes immune tolerance to prevent overreactions to harmless antigens."
    },
    {
        "id": 498,
        "question": "What is immunoinformatics used for in vaccine design?",
        "options": [
            "Producing live vaccines",
            "Predicting antigenic epitopes",
            "Activating T cells",
            "Suppressing inflammation"
        ],
        "answer": "Predicting antigenic epitopes",
        "difficulty": "hard",
        "topic": "Recent Advances in Immunology",
        "explanation": "Immunoinformatics predicts antigenic epitopes to design effective vaccines."
    },
    {
        "id": 499,
        "question": "Which scientist pioneered the use of attenuated vaccines?",
        "options": [
            "Edward Jenner",
            "Louis Pasteur",
            "Paul Ehrlich",
            "Elie Metchnikoff"
        ],
        "answer": "Louis Pasteur",
        "difficulty": "medium",
        "topic": "History of Immunology",
        "explanation": "Louis Pasteur developed attenuated vaccines, such as those for rabies and anthrax."
    },
    {
        "id": 500,
        "question": "Which immunological application detects pathogens in blood samples?",
        "options": [
            "Vaccination",
            "ELISA",
            "Gene therapy",
            "Immunotherapy"
        ],
        "answer": "ELISA",
        "difficulty": "medium",
        "topic": "Applications of Immunology",
        "explanation": "ELISA is widely used to detect pathogens or their antigens in blood samples."
    }
]
