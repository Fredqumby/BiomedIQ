const QUESTIONS = [
    {
        "id": 1,
        "question": "What is the primary advantage of a double-blind study design?",
        "options": [
            "Reduces sample size requirements",
            "Eliminates bias from both participants and researchers",
            "Increases statistical power",
            "Reduces study duration"
        ],
        "answer": "Eliminates bias from both participants and researchers",
        "difficulty": "medium",
        "topic": "Study Design",
        "explanation": "Double-blind studies prevent bias by ensuring that neither participants nor researchers know which treatment is being administered, reducing both placebo effects and observer bias."
    },
    {
        "id": 2,
        "question": "What is the term for the tendency to attribute one's own actions to external causes while attributing others' actions to internal causes?",
        "options": [
            "Fundamental attribution error",
            "Self-serving bias",
            "Confirmation bias",
            "Hindsight bias"
        ],
        "answer": "Fundamental attribution error",
        "difficulty": "medium",
        "topic": "Social Psychology",
        "explanation": "The fundamental attribution error refers to the tendency to overemphasize personal traits and underestimate situational factors when explaining others' behaviors, while attributing one's own behavior to external circumstances."
    },
    {
        "id": 3,
        "question": "Which part of the brain is primarily responsible for regulating emotions?",
        "options": [
            "Cerebellum",
            "Prefrontal cortex",
            "Amygdala",
            "Hippocampus"
        ],
        "answer": "Amygdala",
        "difficulty": "easy",
        "topic": "Neuropsychology",
        "explanation": "The amygdala plays a key role in processing emotions, particularly fear and pleasure, and is involved in emotional memory and responses."
    },
    {
        "id": 4,
        "question": "What is the name of the theory that suggests humans have a hierarchy of needs, starting with physiological needs and culminating in self-actualization?",
        "options": [
            "Erikson's stages of development",
            "Maslow's hierarchy of needs",
            "Piaget's cognitive development theory",
            "Freud's psychosexual stages"
        ],
        "answer": "Maslow's hierarchy of needs",
        "difficulty": "easy",
        "topic": "Motivation",
        "explanation": "Maslow's hierarchy of needs proposes that humans prioritize basic needs (e.g., food, safety) before higher-level needs like esteem and self-actualization."
    },
    {
        "id": 5,
        "question": "In classical conditioning, what is the term for a previously neutral stimulus that comes to elicit a conditioned response?",
        "options": [
            "Unconditioned stimulus",
            "Conditioned stimulus",
            "Unconditioned response",
            "Conditioned response"
        ],
        "answer": "Conditioned stimulus",
        "difficulty": "easy",
        "topic": "Learning",
        "explanation": "In classical conditioning, a conditioned stimulus is a neutral stimulus that, after being paired with an unconditioned stimulus, triggers a conditioned response."
    },
    {
        "id": 6,
        "question": "What is the term for the phenomenon where individuals perform better on simple tasks in the presence of others?",
        "options": [
            "Groupthink",
            "Social facilitation",
            "Bystander effect",
            "Social loafing"
        ],
        "answer": "Social facilitation",
        "difficulty": "medium",
        "topic": "Social Psychology",
        "explanation": "Social facilitation occurs when the presence of others enhances performance on simple or well-learned tasks due to increased arousal."
    },
    {
        "id": 7,
        "question": "Which psychologist is most associated with the concept of the collective unconscious?",
        "options": [
            "Sigmund Freud",
            "Carl Jung",
            "B.F. Skinner",
            "Albert Bandura"
        ],
        "answer": "Carl Jung",
        "difficulty": "medium",
        "topic": "Personality",
        "explanation": "Carl Jung proposed the concept of the collective unconscious, a shared reservoir of memories and archetypes inherited from our ancestors."
    },
    {
        "id": 8,
        "question": "What is the primary focus of cognitive psychology?",
        "options": [
            "Observable behaviors",
            "Unconscious drives",
            "Mental processes like memory and perception",
            "Social interactions"
        ],
        "answer": "Mental processes like memory and perception",
        "difficulty": "easy",
        "topic": "Cognitive Psychology",
        "explanation": "Cognitive psychology studies mental processes such as perception, memory, thinking, and problem-solving."
    },
    {
        "id": 9,
        "question": "What is the term for a memory error where a person recalls events that never happened?",
        "options": [
            "Flashbulb memory",
            "False memory",
            "Eidetic memory",
            "Repressed memory"
        ],
        "answer": "False memory",
        "difficulty": "medium",
        "topic": "Memory",
        "explanation": "False memory refers to recalling events that are distorted or entirely fabricated, often influenced by suggestion or misinformation."
    },
    {
        "id": 10,
        "question": "Which stage of Erikson's psychosocial development occurs during adolescence and focuses on identity formation?",
        "options": [
            "Trust vs. Mistrust",
            "Industry vs. Inferiority",
            "Identity vs. Role Confusion",
            "Intimacy vs. Isolation"
        ],
        "answer": "Identity vs. Role Confusion",
        "difficulty": "medium",
        "topic": "Developmental Psychology",
        "explanation": "During adolescence, Erikson's stage of Identity vs. Role Confusion involves individuals exploring their sense of self and developing a coherent identity."
    },
    {
        "id": 11,
        "question": "What is the term for the tendency to conform to the majority opinion, even when it is incorrect?",
        "options": [
            "Obedience",
            "Groupthink",
            "Conformity",
            "Social loafing"
        ],
        "answer": "Conformity",
        "difficulty": "easy",
        "topic": "Social Psychology",
        "explanation": "Conformity refers to changing one's behavior or beliefs to align with the majority, often due to social pressure."
    },
    {
        "id": 12,
        "question": "Which neurotransmitter is most associated with mood regulation and is often targeted in treatments for depression?",
        "options": [
            "Dopamine",
            "Serotonin",
            "Acetylcholine",
            "GABA"
        ],
        "answer": "Serotonin",
        "difficulty": "medium",
        "topic": "Neuropsychology",
        "explanation": "Serotonin is a neurotransmitter that regulates mood, sleep, and appetite, and its imbalance is linked to depression."
    },
    {
        "id": 13,
        "question": "What is the term for the process by which a behavior is strengthened by a reward?",
        "options": [
            "Classical conditioning",
            "Operant conditioning",
            "Observational learning",
            "Habituation"
        ],
        "answer": "Operant conditioning",
        "difficulty": "easy",
        "topic": "Learning",
        "explanation": "Operant conditioning involves strengthening a behavior through reinforcement, such as rewards, as described by B.F. Skinner."
    },
    {
        "id": 14,
        "question": "What is the primary symptom of generalized anxiety disorder?",
        "options": [
            "Intrusive thoughts",
            "Excessive worry",
            "Memory loss",
            "Hallucinations"
        ],
        "answer": "Excessive worry",
        "difficulty": "easy",
        "topic": "Clinical Psychology",
        "explanation": "Generalized anxiety disorder is characterized by excessive, uncontrollable worry about various aspects of life."
    },
    {
        "id": 15,
        "question": "Which theory suggests that aggression stems from frustration when goals are blocked?",
        "options": [
            "Social learning theory",
            "Frustration-aggression hypothesis",
            "Instinct theory",
            "Drive reduction theory"
        ],
        "answer": "Frustration-aggression hypothesis",
        "difficulty": "medium",
        "topic": "Motivation",
        "explanation": "The frustration-aggression hypothesis posits that aggression arises when an individual is prevented from achieving a goal, leading to frustration."
    },
    {
        "id": 16,
        "question": "What is the term for a cognitive bias where people overestimate their own abilities?",
        "options": [
            "Dunning-Kruger effect",
            "Confirmation bias",
            "Availability heuristic",
            "Anchoring bias"
        ],
        "answer": "Dunning-Kruger effect",
        "difficulty": "medium",
        "topic": "Cognitive Psychology",
        "explanation": "The Dunning-Kruger effect describes the tendency of individuals with low ability to overestimate their competence due to a lack of self-awareness."
    },
    {
        "id": 17,
        "question": "Which part of the brain is critical for forming new memories?",
        "options": [
            "Cerebellum",
            "Hippocampus",
            "Thalamus",
            "Medulla"
        ],
        "answer": "Hippocampus",
        "difficulty": "easy",
        "topic": "Neuropsychology",
        "explanation": "The hippocampus is essential for the formation and consolidation of new memories, particularly declarative memories."
    },
    {
        "id": 18,
        "question": "What is the term for the tendency to continue a behavior due to prior investment, even when it is no longer rational?",
        "options": [
            "Sunk cost fallacy",
            "Loss aversion",
            "Endowment effect",
            "Status quo bias"
        ],
        "answer": "Sunk cost fallacy",
        "difficulty": "medium",
        "topic": "Cognitive Psychology",
        "explanation": "The sunk cost fallacy occurs when individuals continue a behavior or endeavor due to previously invested resources, despite diminishing returns."
    },
    {
        "id": 19,
        "question": "Which stage of Piaget's cognitive development theory involves the ability to think abstractly and hypothetically?",
        "options": [
            "Sensorimotor",
            "Preoperational",
            "Concrete operational",
            "Formal operational"
        ],
        "answer": "Formal operational",
        "difficulty": "medium",
        "topic": "Developmental Psychology",
        "explanation": "The formal operational stage, typically beginning at age 12, involves the ability to engage in abstract and hypothetical thinking."
    },
    {
        "id": 20,
        "question": "What is the term for the phenomenon where individuals fail to act in an emergency due to the presence of others?",
        "options": [
            "Social facilitation",
            "Bystander effect",
            "Group polarization",
            "Deindividuation"
        ],
        "answer": "Bystander effect",
        "difficulty": "easy",
        "topic": "Social Psychology",
        "explanation": "The bystander effect occurs when individuals are less likely to help in an emergency when others are present, due to diffusion of responsibility."
    },
    {
        "id": 21,
        "question": "Which psychological disorder is characterized by persistent feelings of sadness and loss of interest?",
        "options": [
            "Bipolar disorder",
            "Major depressive disorder",
            "Schizophrenia",
            "Obsessive-compulsive disorder"
        ],
        "answer": "Major depressive disorder",
        "difficulty": "easy",
        "topic": "Clinical Psychology",
        "explanation": "Major depressive disorder is characterized by prolonged sadness, loss of interest in activities, and other symptoms like fatigue and hopelessness."
    },
    {
        "id": 22,
        "question": "What is the term for learning by observing others' behaviors and their consequences?",
        "options": [
            "Classical conditioning",
            "Operant conditioning",
            "Observational learning",
            "Insight learning"
        ],
        "answer": "Observational learning",
        "difficulty": "easy",
        "topic": "Learning",
        "explanation": "Observational learning, as described by Albert Bandura, involves learning by watching others' actions and the outcomes of those actions."
    },
    {
        "id": 23,
        "question": "Which personality trait in the Big Five model is associated with emotional stability?",
        "options": [
            "Extraversion",
            "Agreeableness",
            "Neuroticism",
            "Openness"
        ],
        "answer": "Neuroticism",
        "difficulty": "medium",
        "topic": "Personality",
        "explanation": "Neuroticism in the Big Five model reflects emotional stability or instability, with low neuroticism indicating greater emotional stability."
    },
    {
        "id": 24,
        "question": "What is the term for the mental framework that organizes and interprets information?",
        "options": [
            "Schema",
            "Heuristic",
            "Prototype",
            "Concept"
        ],
        "answer": "Schema",
        "difficulty": "medium",
        "topic": "Cognitive Psychology",
        "explanation": "A schema is a cognitive framework that helps individuals organize and interpret information based on prior knowledge."
    },
    {
        "id": 25,
        "question": "Which psychological approach emphasizes the role of unconscious conflicts in shaping behavior?",
        "options": [
            "Behavioral",
            "Cognitive",
            "Psychodynamic",
            "Humanistic"
        ],
        "answer": "Psychodynamic",
        "difficulty": "easy",
        "topic": "Theoretical Approaches",
        "explanation": "The psychodynamic approach, pioneered by Freud, focuses on unconscious conflicts and early experiences as drivers of behavior."
    },
    {
        "id": 26,
        "question": "What is the term for the tendency to overestimate the influence of personal factors when predicting others' behavior?",
        "options": [
            "Self-serving bias",
            "Fundamental attribution error",
            "Halo effect",
            "Primacy effect"
        ],
        "answer": "Fundamental attribution error",
        "difficulty": "medium",
        "topic": "Social Psychology",
        "explanation": "The fundamental attribution error involves overemphasizing personal traits over situational factors when explaining others' behavior."
    },
    {
        "id": 27,
        "question": "Which part of the brain is responsible for coordinating voluntary movements?",
        "options": [
            "Cerebellum",
            "Frontal lobe",
            "Occipital lobe",
            "Temporal lobe"
        ],
        "answer": "Cerebellum",
        "difficulty": "easy",
        "topic": "Neuropsychology",
        "explanation": "The cerebellum coordinates voluntary movements, balance, and fine motor skills."
    },
    {
        "id": 28,
        "question": "What is the term for the process of gradually reducing a behavior by withholding reinforcement?",
        "options": [
            "Extinction",
            "Punishment",
            "Shaping",
            "Generalization"
        ],
        "answer": "Extinction",
        "difficulty": "medium",
        "topic": "Learning",
        "explanation": "Extinction in operant conditioning occurs when a behavior decreases because it is no longer reinforced."
    },
    {
        "id": 29,
        "question": "Which disorder is characterized by alternating periods of mania and depression?",
        "options": [
            "Schizophrenia",
            "Bipolar disorder",
            "Generalized anxiety disorder",
            "Post-traumatic stress disorder"
        ],
        "answer": "Bipolar disorder",
        "difficulty": "easy",
        "topic": "Clinical Psychology",
        "explanation": "Bipolar disorder involves mood swings between manic episodes (elevated mood) and depressive episodes (low mood)."
    },
    {
        "id": 30,
        "question": "What is the term for the tendency to seek information that confirms existing beliefs?",
        "options": [
            "Availability heuristic",
            "Confirmation bias",
            "Anchoring bias",
            "Hindsight bias"
        ],
        "answer": "Confirmation bias",
        "difficulty": "medium",
        "topic": "Cognitive Psychology",
        "explanation": "Confirmation bias is the tendency to search for, interpret, and recall information in a way that confirms one's preexisting beliefs."
    },
    {
        "id": 31,
        "question": "Which stage of Freud's psychosexual development is associated with the Oedipus complex?",
        "options": [
            "Oral",
            "Anal",
            "Phallic",
            "Latency"
        ],
        "answer": "Phallic",
        "difficulty": "medium",
        "topic": "Developmental Psychology",
        "explanation": "The phallic stage, occurring around ages 3-6, is when Freud proposed the Oedipus complex, involving unconscious sexual desires for the opposite-sex parent."
    },
    {
        "id": 32,
        "question": "What is the term for the phenomenon where group members suppress dissenting opinions to maintain harmony?",
        "options": [
            "Groupthink",
            "Social loafing",
            "Deindividuation",
            "Group polarization"
        ],
        "answer": "Groupthink",
        "difficulty": "medium",
        "topic": "Social Psychology",
        "explanation": "Groupthink occurs when group members prioritize consensus over critical thinking, often leading to poor decision-making."
    },
    {
        "id": 33,
        "question": "Which neurotransmitter is associated with reward and pleasure in the brain?",
        "options": [
            "Serotonin",
            "Dopamine",
            "GABA",
            "Acetylcholine"
        ],
        "answer": "Dopamine",
        "difficulty": "easy",
        "topic": "Neuropsychology",
        "explanation": "Dopamine is a neurotransmitter linked to the brain's reward system, influencing motivation and pleasure."
    },
    {
        "id": 34,
        "question": "What is the term for a sudden realization or solution to a problem?",
        "options": [
            "Insight learning",
            "Operant conditioning",
            "Classical conditioning",
            "Habituation"
        ],
        "answer": "Insight learning",
        "difficulty": "medium",
        "topic": "Learning",
        "explanation": "Insight learning involves a sudden understanding or solution to a problem, often without trial-and-error, as described by Wolfgang Köhler."
    },
    {
        "id": 35,
        "question": "Which psychological disorder involves intrusive thoughts and repetitive behaviors?",
        "options": [
            "Schizophrenia",
            "Obsessive-compulsive disorder",
            "Bipolar disorder",
            "Major depressive disorder"
        ],
        "answer": "Obsessive-compulsive disorder",
        "difficulty": "easy",
        "topic": "Clinical Psychology",
        "explanation": "Obsessive-compulsive disorder is characterized by intrusive, unwanted thoughts (obsessions) and repetitive behaviors or rituals (compulsions)."
    },
    {
        "id": 36,
        "question": "What is the term for the tendency to judge an individual based on the average characteristics of their group?",
        "options": [
            "Stereotyping",
            "Prejudice",
            "Discrimination",
            "Ethnocentrism"
        ],
        "answer": "Stereotyping",
        "difficulty": "easy",
        "topic": "Social Psychology",
        "explanation": "Stereotyping involves assuming that an individual possesses the average characteristics of their group, often leading to oversimplified judgments."
    },
    {
        "id": 37,
        "question": "Which part of the brain is responsible for processing visual information?",
        "options": [
            "Frontal lobe",
            "Parietal lobe",
            "Occipital lobe",
            "Temporal lobe"
        ],
        "answer": "Occipital lobe",
        "difficulty": "easy",
        "topic": "Neuropsychology",
        "explanation": "The occipital lobe is primarily responsible for processing visual stimuli and interpreting visual information."
    },
    {
        "id": 38,
        "question": "What is the term for the process of encoding, storing, and retrieving information?",
        "options": [
            "Perception",
            "Memory",
            "Attention",
            "Learning"
        ],
        "answer": "Memory",
        "difficulty": "easy",
        "topic": "Cognitive Psychology",
        "explanation": "Memory involves the processes of encoding, storing, and retrieving information for later use."
    },
    {
        "id": 39,
        "question": "Which stage of Erikson's psychosocial development focuses on forming close relationships in early adulthood?",
        "options": [
            "Identity vs. Role Confusion",
            "Intimacy vs. Isolation",
            "Generativity vs. Stagnation",
            "Integrity vs. Despair"
        ],
        "answer": "Intimacy vs. Isolation",
        "difficulty": "medium",
        "topic": "Developmental Psychology",
        "explanation": "In early adulthood, Erikson's stage of Intimacy vs. Isolation involves forming intimate relationships or risking social isolation."
    },
    {
        "id": 40,
        "question": "What is the term for the tendency to exert less effort when working in a group compared to working alone?",
        "options": [
            "Social loafing",
            "Groupthink",
            "Social facilitation",
            "Deindividuation"
        ],
        "answer": "Social loafing",
        "difficulty": "medium",
        "topic": "Social Psychology",
        "explanation": "Social loafing occurs when individuals reduce their effort when working in a group, relying on others to contribute."
    },
    {
        "id": 41,
        "question": "Which psychological approach emphasizes personal growth and self-actualization?",
        "options": [
            "Behavioral",
            "Psychodynamic",
            "Humanistic",
            "Cognitive"
        ],
        "answer": "Humanistic",
        "difficulty": "easy",
        "topic": "Theoretical Approaches",
        "explanation": "The humanistic approach, associated with Maslow and Rogers, emphasizes personal growth, free will, and the pursuit of self-actualization."
    },
    {
        "id": 42,
        "question": "What is the term for a mental shortcut that allows quick decision-making but may lead to errors?",
        "options": [
            "Schema",
            "Heuristic",
            "Prototype",
            "Algorithm"
        ],
        "answer": "Heuristic",
        "difficulty": "medium",
        "topic": "Cognitive Psychology",
        "explanation": "Heuristics are mental shortcuts that simplify decision-making but can sometimes lead to biases or errors."
    },
    {
        "id": 43,
        "question": "Which disorder is characterized by delusions and hallucinations?",
        "options": [
            "Schizophrenia",
            "Bipolar disorder",
            "Major depressive disorder",
            "Generalized anxiety disorder"
        ],
        "answer": "Schizophrenia",
        "difficulty": "easy",
        "topic": "Clinical Psychology",
        "explanation": "Schizophrenia is a severe mental disorder characterized by delusions, hallucinations, and disorganized thinking."
    },
    {
        "id": 44,
        "question": "What is the term for the tendency to recall the first items in a list more easily?",
        "options": [
            "Recency effect",
            "Primacy effect",
            "Serial position effect",
            "Halo effect"
        ],
        "answer": "Primacy effect",
        "difficulty": "medium",
        "topic": "Memory",
        "explanation": "The primacy effect refers to the tendency to better recall items presented at the beginning of a list due to stronger memory encoding."
    },
    {
        "id": 45,
        "question": "Which psychologist is known for the concept of the zone of proximal development?",
        "options": [
            "Jean Piaget",
            "Lev Vygotsky",
            "Sigmund Freud",
            "Erik Erikson"
        ],
        "answer": "Lev Vygotsky",
        "difficulty": "medium",
        "topic": "Developmental Psychology",
        "explanation": "Lev Vygotsky introduced the zone of proximal development, which describes tasks a learner can perform with guidance but not independently."
    },
    {
        "id": 46,
        "question": "What is the term for the phenomenon where individuals lose self-awareness in a group setting?",
        "options": [
            "Groupthink",
            "Deindividuation",
            "Social loafing",
            "Group polarization"
        ],
        "answer": "Deindividuation",
        "difficulty": "medium",
        "topic": "Social Psychology",
        "explanation": "Deindividuation occurs when individuals in a group lose self-awareness and personal responsibility, often leading to impulsive behavior."
    },
    {
        "id": 47,
        "question": "Which part of the brain is responsible for language comprehension?",
        "options": [
            "Broca's area",
            "Wernicke's area",
            "Amygdala",
            "Hippocampus"
        ],
        "answer": "Wernicke's area",
        "difficulty": "medium",
        "topic": "Neuropsychology",
        "explanation": "Wernicke's area, located in the temporal lobe, is critical for understanding spoken and written language."
    },
    {
        "id": 48,
        "question": "What is the term for the tendency to overestimate the likelihood of events based on their availability in memory?",
        "options": [
            "Confirmation bias",
            "Availability heuristic",
            "Anchoring bias",
            "Hindsight bias"
        ],
        "answer": "Availability heuristic",
        "difficulty": "medium",
        "topic": "Cognitive Psychology",
        "explanation": "The availability heuristic involves judging the probability of events based on how easily examples come to mind."
    },
    {
        "id": 49,
        "question": "Which stage of Piaget's cognitive development involves egocentric thinking?",
        "options": [
            "Sensorimotor",
            "Preoperational",
            "Concrete operational",
            "Formal operational"
        ],
        "answer": "Preoperational",
        "difficulty": "medium",
        "topic": "Developmental Psychology",
        "explanation": "The preoperational stage (ages 2-7) is characterized by egocentric thinking, where children struggle to see perspectives other than their own."
    },
    {
        "id": 50,
        "question": "What is the term for the tendency to obey authority figures, even when asked to perform unethical actions?",
        "options": [
            "Conformity",
            "Obedience",
            "Compliance",
            "Groupthink"
        ],
        "answer": "Obedience",
        "difficulty": "easy",
        "topic": "Social Psychology",
        "explanation": "Obedience refers to following the orders of an authority figure, as demonstrated in Milgram's experiments."
    },
    {
        "id": 51,
        "question": "Which neurotransmitter is associated with calming the nervous system?",
        "options": [
            "Dopamine",
            "Serotonin",
            "GABA",
            "Acetylcholine"
        ],
        "answer": "GABA",
        "difficulty": "medium",
        "topic": "Neuropsychology",
        "explanation": "GABA (gamma-aminobutyric acid) is an inhibitory neurotransmitter that helps calm neural activity and reduce anxiety."
    },
    {
        "id": 52,
        "question": "What is the term for the process of reinforcing successive approximations of a desired behavior?",
        "options": [
            "Extinction",
            "Shaping",
            "Punishment",
            "Generalization"
        ],
        "answer": "Shaping",
        "difficulty": "medium",
        "topic": "Learning",
        "explanation": "Shaping involves reinforcing behaviors that gradually approximate the desired behavior, used in operant conditioning."
    },
    {
        "id": 53,
        "question": "Which disorder is characterized by intense fear of social situations?",
        "options": [
            "Agoraphobia",
            "Social anxiety disorder",
            "Generalized anxiety disorder",
            "Panic disorder"
        ],
        "answer": "Social anxiety disorder",
        "difficulty": "easy",
        "topic": "Clinical Psychology",
        "explanation": "Social anxiety disorder involves an intense fear of being judged or embarrassed in social situations."
    },
    {
        "id": 54,
        "question": "What is the term for the tendency to favor one's own group over others?",
        "options": [
            "Ethnocentrism",
            "Stereotyping",
            "Prejudice",
            "Ingroup bias"
        ],
        "answer": "Ingroup bias",
        "difficulty": "medium",
        "topic": "Social Psychology",
        "explanation": "Ingroup bias is the tendency to favor members of one's own group over those of other groups, often leading to discrimination."
    },
    {
        "id": 55,
        "question": "Which part of the brain is involved in decision-making and impulse control?",
        "options": [
            "Prefrontal cortex",
            "Amygdala",
            "Hippocampus",
            "Thalamus"
        ],
        "answer": "Prefrontal cortex",
        "difficulty": "easy",
        "topic": "Neuropsychology",
        "explanation": "The prefrontal cortex is responsible for executive functions, including decision-making, planning, and impulse control."
    },
    {
        "id": 56,
        "question": "What is the term for the tendency to recall the last items in a list more easily?",
        "options": [
            "Primacy effect",
            "Recency effect",
            "Serial position effect",
            "Halo effect"
        ],
        "answer": "Recency effect",
        "difficulty": "medium",
        "topic": "Memory",
        "explanation": "The recency effect refers to the tendency to better recall items presented at the end of a list due to their retention in short-term memory."
    },
    {
        "id": 57,
        "question": "Which psychologist is known for classical conditioning experiments with dogs?",
        "options": [
            "B.F. Skinner",
            "Ivan Pavlov",
            "John Watson",
            "Albert Bandura"
        ],
        "answer": "Ivan Pavlov",
        "difficulty": "easy",
        "topic": "Learning",
        "explanation": "Ivan Pavlov conducted experiments on classical conditioning, demonstrating how dogs could associate a bell with food to elicit salivation."
    },
    {
        "id": 58,
        "question": "What is the term for the belief that one event causes another without evidence?",
        "options": [
            "Illusory correlation",
            "Confirmation bias",
            "Hindsight bias",
            "Availability heuristic"
        ],
        "answer": "Illusory correlation",
        "difficulty": "medium",
        "topic": "Cognitive Psychology",
        "explanation": "Illusory correlation is the mistaken belief that two unrelated events are causally related, often due to coincidental associations."
    },
    {
        "id": 59,
        "question": "Which stage of Erikson's psychosocial development occurs in middle adulthood and focuses on contributing to society?",
        "options": [
            "Identity vs. Role Confusion",
            "Intimacy vs. Isolation",
            "Generativity vs. Stagnation",
            "Integrity vs. Despair"
        ],
        "answer": "Generativity vs. Stagnation",
        "difficulty": "medium",
        "topic": "Developmental Psychology",
        "explanation": "In middle adulthood, Erikson's stage of Generativity vs. Stagnation involves contributing to society or feeling unproductive."
    },
    {
        "id": 60,
        "question": "What is the term for the tendency of groups to make more extreme decisions than individuals?",
        "options": [
            "Groupthink",
            "Social loafing",
            "Group polarization",
            "Deindividuation"
        ],
        "answer": "Group polarization",
        "difficulty": "medium",
        "topic": "Social Psychology",
        "explanation": "Group polarization occurs when group discussions lead to more extreme decisions or attitudes than those held by individual members."
    },
    {
        "id": 61,
        "question": "Which psychological approach focuses on observable behaviors and their consequences?",
        "options": [
            "Psychodynamic",
            "Humanistic",
            "Behavioral",
            "Cognitive"
        ],
        "answer": "Behavioral",
        "difficulty": "easy",
        "topic": "Theoretical Approaches",
        "explanation": "The behavioral approach, associated with Skinner and Watson, focuses on observable behaviors and their modification through conditioning."
    },
    {
        "id": 62,
        "question": "What is the term for the tendency to overestimate the accuracy of one's judgments after an outcome is known?",
        "options": [
            "Confirmation bias",
            "Hindsight bias",
            "Availability heuristic",
            "Anchoring bias"
        ],
        "answer": "Hindsight bias",
        "difficulty": "medium",
        "topic": "Cognitive Psychology",
        "explanation": "Hindsight bias, or the 'I-knew-it-all-along' effect, is the tendency to see past events as more predictable after they occur."
    },
    {
        "id": 63,
        "question": "Which disorder is characterized by flashbacks and hypervigilance following a traumatic event?",
        "options": [
            "Panic disorder",
            "Post-traumatic stress disorder",
            "Social anxiety disorder",
            "Obsessive-compulsive disorder"
        ],
        "answer": "Post-traumatic stress disorder",
        "difficulty": "easy",
        "topic": "Clinical Psychology",
        "explanation": "Post-traumatic stress disorder involves symptoms like flashbacks, nightmares, and hypervigilance after experiencing or witnessing trauma."
    },
    {
        "id": 64,
        "question": "What is the term for the tendency to attribute one's successes to internal factors and failures to external factors?",
        "options": [
            "Fundamental attribution error",
            "Self-serving bias",
            "Confirmation bias",
            "Halo effect"
        ],
        "answer": "Self-serving bias",
        "difficulty": "medium",
        "topic": "Social Psychology",
        "explanation": "The self-serving bias involves attributing successes to personal abilities and failures to external circumstances to protect self-esteem."
    },
    {
        "id": 65,
        "question": "Which part of the brain relays sensory information to the cortex?",
        "options": [
            "Thalamus",
            "Hypothalamus",
            "Amygdala",
            "Cerebellum"
        ],
        "answer": "Thalamus",
        "difficulty": "medium",
        "topic": "Neuropsychology",
        "explanation": "The thalamus acts as a relay station, transmitting sensory information to the appropriate areas of the cerebral cortex."
    },
    {
        "id": 66,
        "question": "What is the term for the tendency to rely too heavily on the first piece of information encountered when making decisions?",
        "options": [
            "Confirmation bias",
            "Availability heuristic",
            "Anchoring bias",
            "Hindsight bias"
        ],
        "answer": "Anchoring bias",
        "difficulty": "medium",
        "topic": "Cognitive Psychology",
        "explanation": "Anchoring bias occurs when individuals rely too heavily on initial information (the 'anchor') when making decisions."
    },
    {
        "id": 67,
        "question": "Which stage of Piaget's cognitive development involves the ability to understand conservation?",
        "options": [
            "Sensorimotor",
            "Preoperational",
            "Concrete operational",
            "Formal operational"
        ],
        "answer": "Concrete operational",
        "difficulty": "medium",
        "topic": "Developmental Psychology",
        "explanation": "In the concrete operational stage (ages 7-11), children develop the ability to understand conservation, recognizing that quantity remains the same despite changes in appearance."
    },
    {
        "id": 68,
        "question": "What is the term for the tendency to judge others based on a single positive trait?",
        "options": [
            "Halo effect",
            "Primacy effect",
            "Recency effect",
            "Self-serving bias"
        ],
        "answer": "Halo effect",
        "difficulty": "medium",
        "topic": "Social Psychology",
        "explanation": "The halo effect occurs when a single positive trait influences the overall perception of a person, leading to biased judgments."
    },
    {
        "id": 69,
        "question": "Which psychologist is known for the concept of operant conditioning?",
        "options": [
            "Ivan Pavlov",
            "B.F. Skinner",
            "John Watson",
            "Albert Bandura"
        ],
        "answer": "B.F. Skinner",
        "difficulty": "easy",
        "topic": "Learning",
        "explanation": "B.F. Skinner developed the concept of operant conditioning, which involves learning through the consequences of behavior."
    },
    {
        "id": 70,
        "question": "What is the term for the process of retrieving information from memory without cues?",
        "options": [
            "Recall",
            "Recognition",
            "Relearning",
            "Priming"
        ],
        "answer": "Recall",
        "difficulty": "easy",
        "topic": "Memory",
        "explanation": "Recall involves retrieving information from memory without external cues, such as answering a fill-in-the-blank question."
    },
    {
        "id": 71,
        "question": "Which disorder is characterized by sudden, intense episodes of fear with physical symptoms?",
        "options": [
            "Generalized anxiety disorder",
            "Panic disorder",
            "Social anxiety disorder",
            "Phobia"
        ],
        "answer": "Panic disorder",
        "difficulty": "easy",
        "topic": "Clinical Psychology",
        "explanation": "Panic disorder involves recurrent, unexpected panic attacks with intense fear and physical symptoms like heart palpitations."
    },
    {
        "id": 72,
        "question": "What is the term for the tendency to overestimate the extent to which others share our beliefs?",
        "options": [
            "False consensus effect",
            "Illusory correlation",
            "Confirmation bias",
            "Hindsight bias"
        ],
        "answer": "False consensus effect",
        "difficulty": "medium",
        "topic": "Social Psychology",
        "explanation": "The false consensus effect is the tendency to overestimate how much others agree with our opinions or behaviors."
    },
    {
        "id": 73,
        "question": "Which part of the brain regulates basic bodily functions like breathing and heart rate?",
        "options": [
            "Cerebellum",
            "Medulla",
            "Thalamus",
            "Hypothalamus"
        ],
        "answer": "Medulla",
        "difficulty": "easy",
        "topic": "Neuropsychology",
        "explanation": "The medulla oblongata controls essential autonomic functions such as breathing, heart rate, and blood pressure."
    },
    {
        "id": 74,
        "question": "What is the term for the process of learning to associate a stimulus with a response through repeated pairings?",
        "options": [
            "Operant conditioning",
            "Classical conditioning",
            "Observational learning",
            "Insight learning"
        ],
        "answer": "Classical conditioning",
        "difficulty": "easy",
        "topic": "Learning",
        "explanation": "Classical conditioning, as studied by Pavlov, involves learning to associate a neutral stimulus with an unconditioned stimulus to elicit a response."
    },
    {
        "id": 75,
        "question": "Which stage of Erikson's psychosocial development occurs in late adulthood and focuses on reflecting on life?",
        "options": [
            "Identity vs. Role Confusion",
            "Intimacy vs. Isolation",
            "Generativity vs. Stagnation",
            "Integrity vs. Despair"
        ],
        "answer": "Integrity vs. Despair",
        "difficulty": "medium",
        "topic": "Developmental Psychology",
        "explanation": "In late adulthood, Erikson's stage of Integrity vs. Despair involves reflecting on life with a sense of fulfillment or regret."
    },
    {
        "id": 76,
        "question": "What is the term for the tendency to perform worse on complex tasks in the presence of others?",
        "options": [
            "Social facilitation",
            "Social loafing",
            "Groupthink",
            "Social inhibition"
        ],
        "answer": "Social inhibition",
        "difficulty": "medium",
        "topic": "Social Psychology",
        "explanation": "Social inhibition refers to decreased performance on complex or unfamiliar tasks when others are present, due to increased arousal."
    },
    {
        "id": 77,
        "question": "Which neurotransmitter is associated with muscle movement and memory?",
        "options": [
            "Dopamine",
            "Serotonin",
            "Acetylcholine",
            "GABA"
        ],
        "answer": "Acetylcholine",
        "difficulty": "medium",
        "topic": "Neuropsychology",
        "explanation": "Acetylcholine is involved in muscle contraction, attention, and memory formation in the nervous system."
    },
    {
        "id": 78,
        "question": "What is the term for the process of identifying a stimulus as belonging to a particular category?",
        "options": [
            "Perception",
            "Sensation",
            "Cognition",
            "Recognition"
        ],
        "answer": "Recognition",
        "difficulty": "easy",
        "topic": "Cognitive Psychology",
        "explanation": "Recognition involves identifying a stimulus as belonging to a specific category, such as recognizing a face as familiar."
    },
    {
        "id": 79,
        "question": "Which disorder is characterized by an irrational fear of a specific object or situation?",
        "options": [
            "Phobia",
            "Panic disorder",
            "Generalized anxiety disorder",
            "Social anxiety disorder"
        ],
        "answer": "Phobia",
        "difficulty": "easy",
        "topic": "Clinical Psychology",
        "explanation": "A phobia is an intense, irrational fear of a specific object or situation that leads to avoidance behavior."
    },
    {
        "id": 80,
        "question": "What is the term for the tendency to favor information that aligns with one's existing beliefs?",
        "options": [
            "Confirmation bias",
            "Availability heuristic",
            "Anchoring bias",
            "Hindsight bias"
        ],
        "answer": "Confirmation bias",
        "difficulty": "medium",
        "topic": "Cognitive Psychology",
        "explanation": "Confirmation bias is the tendency to seek, interpret, and remember information that supports one's existing beliefs."
    },
    {
        "id": 81,
        "question": "Which psychologist is known for the concept of self-efficacy?",
        "options": [
            "Sigmund Freud",
            "Albert Bandura",
            "B.F. Skinner",
            "Carl Rogers"
        ],
        "answer": "Albert Bandura",
        "difficulty": "medium",
        "topic": "Personality",
        "explanation": "Albert Bandura introduced self-efficacy, the belief in one's ability to succeed in specific situations or accomplish tasks."
    },
    {
        "id": 82,
        "question": "What is the term for the process of forgetting due to the passage of time?",
        "options": [
            "Decay",
            "Interference",
            "Repression",
            "Amnesia"
        ],
        "answer": "Decay",
        "difficulty": "medium",
        "topic": "Memory",
        "explanation": "Decay theory suggests that memories fade over time if they are not accessed or rehearsed."
    },
    {
        "id": 83,
        "question": "Which part of the brain is involved in regulating hunger and thirst?",
        "options": [
            "Hypothalamus",
            "Thalamus",
            "Amygdala",
            "Cerebellum"
        ],
        "answer": "Hypothalamus",
        "difficulty": "easy",
        "topic": "Neuropsychology",
        "explanation": "The hypothalamus regulates basic physiological needs such as hunger, thirst, and body temperature."
    },
    {
        "id": 84,
        "question": "What is the term for the tendency to conform to social norms to gain approval?",
        "options": [
            "Obedience",
            "Compliance",
            "Conformity",
            "Groupthink"
        ],
        "answer": "Compliance",
        "difficulty": "medium",
        "topic": "Social Psychology",
        "explanation": "Compliance involves changing behavior to gain approval or avoid disapproval, often without internalizing the behavior."
    },
    {
        "id": 85,
        "question": "Which stage of Freud's psychosexual development focuses on toilet training?",
        "options": [
            "Oral",
            "Anal",
            "Phallic",
            "Latency"
        ],
        "answer": "Anal",
        "difficulty": "medium",
        "topic": "Developmental Psychology",
        "explanation": "The anal stage (ages 1-3) focuses on toilet training and the development of control over bodily functions."
    },
    {
        "id": 86,
        "question": "What is the term for the tendency to recall emotionally significant events more vividly?",
        "options": [
            "Flashbulb memory",
            "False memory",
            "Eidetic memory",
            "Repressed memory"
        ],
        "answer": "Flashbulb memory",
        "difficulty": "medium",
        "topic": "Memory",
        "explanation": "Flashbulb memories are vivid, detailed memories of emotionally significant events, often recalled with high confidence."
    },
    {
        "id": 87,
        "question": "Which disorder is characterized by excessive concern with physical symptoms without a medical cause?",
        "options": [
            "Hypochondriasis",
            "Conversion disorder",
            "Somatic symptom disorder",
            "Factitious disorder"
        ],
        "answer": "Somatic symptom disorder",
        "difficulty": "medium",
        "topic": "Clinical Psychology",
        "explanation": "Somatic symptom disorder involves excessive focus on physical symptoms, causing significant distress, without a clear medical cause."
    },
    {
        "id": 88,
        "question": "What is the term for the process of transferring learned behavior to similar stimuli?",
        "options": [
            "Generalization",
            "Discrimination",
            "Extinction",
            "Shaping"
        ],
        "answer": "Generalization",
        "difficulty": "medium",
        "topic": "Learning",
        "explanation": "Generalization in conditioning occurs when a learned response is elicited by stimuli similar to the conditioned stimulus."
    },
    {
        "id": 89,
        "question": "Which psychologist is known for the concept of client-centered therapy?",
        "options": [
            "Sigmund Freud",
            "Carl Rogers",
            "B.F. Skinner",
            "Albert Bandura"
        ],
        "answer": "Carl Rogers",
        "difficulty": "easy",
        "topic": "Clinical Psychology",
        "explanation": "Carl Rogers developed client-centered (or person-centered) therapy, emphasizing empathy, unconditional positive regard, and genuineness."
    },
    {
        "id": 90,
        "question": "What is the term for the tendency to attribute one's failures to internal factors and successes to external factors?",
        "options": [
            "Self-serving bias",
            "Fundamental attribution error",
            "Actor-observer bias",
            "Halo effect"
        ],
        "answer": "Actor-observer bias",
        "difficulty": "medium",
        "topic": "Social Psychology",
        "explanation": "The actor-observer bias involves attributing one's own failures to external factors and others' failures to internal factors."
    },
    {
        "id": 91,
        "question": "Which part of the brain is involved in processing auditory information?",
        "options": [
            "Frontal lobe",
            "Parietal lobe",
            "Occipital lobe",
            "Temporal lobe"
        ],
        "answer": "Temporal lobe",
        "difficulty": "easy",
        "topic": "Neuropsychology",
        "explanation": "The temporal lobe is responsible for processing auditory information and is involved in language comprehension."
    },
    {
        "id": 92,
        "question": "What is the term for the process of forgetting due to new information interfering with old information?",
        "options": [
            "Decay",
            "Interference",
            "Repression",
            "Amnesia"
        ],
        "answer": "Interference",
        "difficulty": "medium",
        "topic": "Memory",
        "explanation": "Interference occurs when new information disrupts the recall of previously learned information (retroactive) or old information disrupts new learning (proactive)."
    },
    {
        "id": 93,
        "question": "Which stage of Piaget's cognitive development involves object permanence?",
        "options": [
            "Sensorimotor",
            "Preoperational",
            "Concrete operational",
            "Formal operational"
        ],
        "answer": "Sensorimotor",
        "difficulty": "medium",
        "topic": "Developmental Psychology",
        "explanation": "In the sensorimotor stage (birth to age 2), infants develop object permanence, understanding that objects continue to exist even when out of sight."
    },
    {
        "id": 94,
        "question": "What is the term for the tendency to follow the behavior of others in ambiguous situations?",
        "options": [
            "Conformity",
            "Compliance",
            "Obedience",
            "Social facilitation"
        ],
        "answer": "Conformity",
        "difficulty": "easy",
        "topic": "Social Psychology",
        "explanation": "Conformity involves changing one's behavior to match others, especially in unclear or ambiguous situations, as shown in Asch's experiments."
    },
    {
        "id": 95,
        "question": "Which neurotransmitter is associated with arousal and attention?",
        "options": [
            "Dopamine",
            "Serotonin",
            "Norepinephrine",
            "GABA"
        ],
        "answer": "Norepinephrine",
        "difficulty": "medium",
        "topic": "Neuropsychology",
        "explanation": "Norepinephrine is involved in regulating arousal, attention, and the body's stress response."
    },
    {
        "id": 96,
        "question": "What is the term for the process of learning to distinguish between similar stimuli?",
        "options": [
            "Generalization",
            "Discrimination",
            "Extinction",
            "Shaping"
        ],
        "answer": "Discrimination",
        "difficulty": "medium",
        "topic": "Learning",
        "explanation": "Discrimination in conditioning involves learning to distinguish between similar stimuli and responding only to the conditioned stimulus."
    },
    {
        "id": 97,
        "question": "Which disorder is characterized by a lack of emotional attachment and disregard for others' rights?",
        "options": [
            "Narcissistic personality disorder",
            "Antisocial personality disorder",
            "Borderline personality disorder",
            "Histrionic personality disorder"
        ],
        "answer": "Antisocial personality disorder",
        "difficulty": "medium",
        "topic": "Clinical Psychology",
        "explanation": "Antisocial personality disorder is characterized by a lack of empathy, disregard for societal norms, and manipulative behavior."
    },
    {
        "id": 98,
        "question": "What is the term for the tendency to overestimate the impact of an event on one's emotions?",
        "options": [
            "Impact bias",
            "Hindsight bias",
            "Confirmation bias",
            "Availability heuristic"
        ],
        "answer": "Impact bias",
        "difficulty": "medium",
        "topic": "Cognitive Psychology",
        "explanation": "Impact bias is the tendency to overestimate the intensity and duration of emotional reactions to future events."
    },
    {
        "id": 99,
        "question": "Which psychologist is known for the concept of the hierarchy of needs?",
        "options": [
            "Sigmund Freud",
            "Abraham Maslow",
            "Carl Rogers",
            "B.F. Skinner"
        ],
        "answer": "Abraham Maslow",
        "difficulty": "easy",
        "topic": "Motivation",
        "explanation": "Abraham Maslow developed the hierarchy of needs, which prioritizes human needs from physiological to self-actualization."
    },
    {
        "id": 100,
        "question": "What is the term for the phenomenon where individuals experience a loss of self-control due to anonymity?",
        "options": [
            "Groupthink",
            "Social loafing",
            "Deindividuation",
            "Group polarization"
        ],
        "answer": "Deindividuation",
        "difficulty": "medium",
        "topic": "Social Psychology",
        "explanation": "Deindividuation occurs when individuals lose self-awareness and self-control in group settings, often due to anonymity."
    },
    {
        "id": 101,
        "question": "What is the primary focus of positive psychology as an emerging field?",
        "options": [
            "Diagnosing mental disorders",
            "Studying unconscious motivations",
            "Promoting well-being and human strengths",
            "Analyzing group dynamics"
        ],
        "answer": "Promoting well-being and human strengths",
        "difficulty": "easy",
        "topic": "Positive Psychology",
        "explanation": "Positive psychology, pioneered by Martin Seligman, focuses on fostering positive emotions, strengths, and well-being, rather than solely addressing mental illness."
    },
    {
        "id": 102,
        "question": "Which brain imaging technique measures changes in blood flow to detect neural activity?",
        "options": [
            "EEG",
            "fMRI",
            "CT scan",
            "PET scan"
        ],
        "answer": "fMRI",
        "difficulty": "medium",
        "topic": "Biological Bases",
        "explanation": "Functional Magnetic Resonance Imaging (fMRI) measures blood flow changes in the brain, indicating areas of neural activity during tasks."
    },
    {
        "id": 103,
        "question": "In Vygotsky’s theory, what is the term for the difference between what a child can do alone and with assistance?",
        "options": [
            "Scaffolding",
            "Zone of proximal development",
            "Cognitive dissonance",
            "Maturation gap"
        ],
        "answer": "Zone of proximal development",
        "difficulty": "medium",
        "topic": "Developmental Psychology",
        "explanation": "The zone of proximal development describes tasks a child can perform with guidance but not independently, emphasizing the role of social interaction in learning."
    },
    {
        "id": 104,
        "question": "Which sleep disorder is characterized by sudden, uncontrollable sleep attacks during the day?",
        "options": [
            "Insomnia",
            "Sleep apnea",
            "Narcolepsy",
            "Restless legs syndrome"
        ],
        "answer": "Narcolepsy",
        "difficulty": "easy",
        "topic": "States of Consciousness",
        "explanation": "Narcolepsy involves sudden, brief episodes of sleep during waking hours, often accompanied by cataplexy or vivid hallucinations."
    },
    {
        "id": 105,
        "question": "What is the term for the tendency to perceive a stable, coherent object despite incomplete sensory input?",
        "options": [
            "Gestalt principle",
            "Perceptual constancy",
            "Figure-ground organization",
            "Depth perception"
        ],
        "answer": "Gestalt principle",
        "difficulty": "medium",
        "topic": "Sensation and Perception",
        "explanation": "Gestalt principles, such as closure, explain how we perceive whole objects by filling in missing sensory information based on patterns."
    },
    {
        "id": 106,
        "question": "Which hormone is most associated with stress response in the endocrine system?",
        "options": [
            "Insulin",
            "Cortisol",
            "Melatonin",
            "Oxytocin"
        ],
        "answer": "Cortisol",
        "difficulty": "easy",
        "topic": "Biological Bases",
        "explanation": "Cortisol, released by the adrenal glands, regulates the body’s stress response, impacting metabolism and immune function."
    },
    {
        "id": 107,
        "question": "In Kohlberg’s theory of moral development, which stage involves following rules to avoid punishment?",
        "options": [
            "Preconventional",
            "Conventional",
            "Postconventional",
            "Autonomous"
        ],
        "answer": "Preconventional",
        "difficulty": "medium",
        "topic": "Developmental Psychology",
        "explanation": "In the preconventional stage, moral decisions are based on avoiding punishment or seeking rewards, typical of young children."
    },
    {
        "id": 108,
        "question": "What is the primary goal of cognitive-behavioral therapy (CBT)?",
        "options": [
            "Exploring unconscious conflicts",
            "Modifying dysfunctional thoughts and behaviors",
            "Promoting self-actualization",
            "Analyzing dream content"
        ],
        "answer": "Modifying dysfunctional thoughts and behaviors",
        "difficulty": "easy",
        "topic": "Therapies and Treatment",
        "explanation": "CBT aims to identify and change negative thought patterns and behaviors to improve mental health outcomes."
    },
    {
        "id": 109,
        "question": "Which concept in social psychology explains why individuals may help others at a personal cost?",
        "options": [
            "Social exchange theory",
            "Altruism",
            "Reciprocity norm",
            "Diffusion of responsibility"
        ],
        "answer": "Altruism",
        "difficulty": "medium",
        "topic": "Social Psychology",
        "explanation": "Altruism refers to selfless behavior intended to benefit others, even when it involves personal sacrifice."
    },
    {
        "id": 110,
        "question": "What is the term for the psychological phenomenon where individuals overuse digital devices compulsively?",
        "options": [
            "Cyberpsychology",
            "Digital addiction",
            "Screen dependency",
            "Internet overuse syndrome"
        ],
        "answer": "Digital addiction",
        "difficulty": "easy",
        "topic": "Cyberpsychology",
        "explanation": "Digital addiction involves compulsive use of digital devices, often leading to negative impacts on mental health and productivity."
    },
    {
        "id": 111,
        "question": "Which research method involves in-depth analysis of a single individual or event?",
        "options": [
            "Experiment",
            "Survey",
            "Case study",
            "Correlation"
        ],
        "answer": "Case study",
        "difficulty": "easy",
        "topic": "Research Methods",
        "explanation": "A case study provides detailed insights into a single subject or event, often used to explore rare or complex phenomena."
    },
    {
        "id": 112,
        "question": "In operant conditioning, what is the term for a consequence that decreases the likelihood of a behavior?",
        "options": [
            "Reinforcement",
            "Punishment",
            "Extinction",
            "Shaping"
        ],
        "answer": "Punishment",
        "difficulty": "easy",
        "topic": "Learning and Conditioning",
        "explanation": "Punishment reduces the likelihood of a behavior by introducing an aversive consequence or removing a desirable stimulus."
    },
    {
        "id": 113,
        "question": "Which theory of emotion suggests that physiological arousal precedes the experience of emotion?",
        "options": [
            "James-Lange theory",
            "Cannon-Bard theory",
            "Schachter-Singer theory",
            "Lazarus theory"
        ],
        "answer": "James-Lange theory",
        "difficulty": "medium",
        "topic": "Motivation and Emotion",
        "explanation": "The James-Lange theory posits that physiological arousal (e.g., racing heart) occurs first, followed by the interpretation of that arousal as an emotion."
    },
    {
        "id": 114,
        "question": "What is the primary focus of forensic psychology?",
        "options": [
            "Improving workplace productivity",
            "Understanding criminal behavior",
            "Enhancing athletic performance",
            "Promoting environmental sustainability"
        ],
        "answer": "Understanding criminal behavior",
        "difficulty": "easy",
        "topic": "Applied Psychology",
        "explanation": "Forensic psychology applies psychological principles to understand criminal behavior, assist in legal processes, and evaluate offenders."
    },
    {
        "id": 115,
        "question": "Which type of memory stores personal experiences and events?",
        "options": [
            "Procedural memory",
            "Semantic memory",
            "Episodic memory",
            "Working memory"
        ],
        "answer": "Episodic memory",
        "difficulty": "medium",
        "topic": "Memory",
        "explanation": "Episodic memory involves the storage and recall of personal experiences and specific events, tied to time and place."
    },
    {
        "id": 116,
        "question": "In Gardner’s theory of multiple intelligences, which intelligence involves understanding social interactions?",
        "options": [
            "Logical-mathematical",
            "Interpersonal",
            "Spatial",
            "Linguistic"
        ],
        "answer": "Interpersonal",
        "difficulty": "easy",
        "topic": "Cognition and Intelligence",
        "explanation": "Interpersonal intelligence refers to the ability to understand and interact effectively with others, including empathy and social skills."
    },
    {
        "id": 117,
        "question": "What is the term for the chronic activation of the stress response system?",
        "options": [
            "Allostatic load",
            "Eustress",
            "Acute stress",
            "Homeostasis"
        ],
        "answer": "Allostatic load",
        "difficulty": "hard",
        "topic": "Health and Stress Psychology",
        "explanation": "Allostatic load refers to the cumulative wear and tear on the body due to chronic stress, impacting physical and mental health."
    },
    {
        "id": 118,
        "question": "Which personality disorder is characterized by a pattern of grandiosity and need for admiration?",
        "options": [
            "Borderline personality disorder",
            "Narcissistic personality disorder",
            "Antisocial personality disorder",
            "Avoidant personality disorder"
        ],
        "answer": "Narcissistic personality disorder",
        "difficulty": "medium",
        "topic": "Psychological Disorders",
        "explanation": "Narcissistic personality disorder involves grandiosity, a need for admiration, and a lack of empathy for others."
    },
    {
        "id": 119,
        "question": "What is the term for the process by which attitudes are changed through persuasive communication?",
        "options": [
            "Conformity",
            "Persuasion",
            "Compliance",
            "Obedience"
        ],
        "answer": "Persuasion",
        "difficulty": "easy",
        "topic": "Social Psychology",
        "explanation": "Persuasion involves changing attitudes or beliefs through communication, often using arguments or emotional appeals."
    },
    {
        "id": 120,
        "question": "Which parenting style is characterized by high demandingness and low responsiveness?",
        "options": [
            "Authoritative",
            "Authoritarian",
            "Permissive",
            "Neglectful"
        ],
        "answer": "Authoritarian",
        "difficulty": "medium",
        "topic": "Developmental Psychology",
        "explanation": "Authoritarian parenting involves strict rules and high expectations with little emotional warmth or responsiveness."
    },
    {
        "id": 121,
        "question": "What is the primary ethical principle in psychological research that ensures participants’ well-being?",
        "options": [
            "Informed consent",
            "Debriefing",
            "Beneficence",
            "Confidentiality"
        ],
        "answer": "Beneficence",
        "difficulty": "medium",
        "topic": "Research Methods",
        "explanation": "Beneficence ensures that research maximizes benefits and minimizes harm to participants, prioritizing their well-being."
    },
    {
        "id": 122,
        "question": "Which psychoactive drug category includes substances like alcohol and benzodiazepines?",
        "options": [
            "Stimulants",
            "Depressants",
            "Hallucinogens",
            "Opioids"
        ],
        "answer": "Depressants",
        "difficulty": "easy",
        "topic": "States of Consciousness",
        "explanation": "Depressants, such as alcohol and benzodiazepines, slow down central nervous system activity, inducing relaxation or sedation."
    },
    {
        "id": 123,
        "question": "In sports psychology, what is the term for an athlete’s optimal state of arousal for peak performance?",
        "options": [
            "Flow state",
            "Choking under pressure",
            "Yerkes-Dodson law",
            "Mental toughness"
        ],
        "answer": "Flow state",
        "difficulty": "medium",
        "topic": "Applied Psychology",
        "explanation": "The flow state is a mental state of complete immersion and optimal arousal, leading to peak athletic performance."
    },
    {
        "id": 124,
        "question": "Which concept in cross-cultural psychology refers to judging other cultures by one’s own standards?",
        "options": [
            "Cultural relativism",
            "Ethnocentrism",
            "Acculturation",
            "Cultural assimilation"
        ],
        "answer": "Ethnocentrism",
        "difficulty": "medium",
        "topic": "Cultural Psychology",
        "explanation": "Ethnocentrism involves evaluating other cultures based on one’s own cultural norms, often leading to bias or misunderstanding."
    },
    {
        "id": 125,
        "question": "What is the term for the memory process where new information is integrated into existing knowledge?",
        "options": [
            "Encoding",
            "Storage",
            "Retrieval",
            "Consolidation"
        ],
        "answer": "Encoding",
        "difficulty": "easy",
        "topic": "Memory",
        "explanation": "Encoding involves transforming sensory input into a form that can be integrated into existing knowledge and stored in memory."
    },
    {
        "id": 126,
        "question": "Which neurotransmitter is implicated in Alzheimer’s disease due to its reduced levels?",
        "options": [
            "Dopamine",
            "Serotonin",
            "Acetylcholine",
            "GABA"
        ],
        "answer": "Acetylcholine",
        "difficulty": "medium",
        "topic": "Biological Bases",
        "explanation": "Reduced acetylcholine levels are associated with Alzheimer’s disease, contributing to memory and cognitive deficits."
    },
    {
        "id": 127,
        "question": "In humanistic psychology, what is the term for fulfilling one’s unique potential?",
        "options": [
            "Self-efficacy",
            "Self-actualization",
            "Unconditional positive regard",
            "Congruence"
        ],
        "answer": "Self-actualization",
        "difficulty": "easy",
        "topic": "Personality Psychology",
        "explanation": "Self-actualization, central to Maslow’s and Rogers’ theories, refers to realizing one’s full potential and living authentically."
    },
    {
        "id": 128,
        "question": "Which psychological disorder is characterized by excessive fear of open or crowded spaces?",
        "options": [
            "Claustrophobia",
            "Agoraphobia",
            "Arachnophobia",
            "Social phobia"
        ],
        "answer": "Agoraphobia",
        "difficulty": "medium",
        "topic": "Psychological Disorders",
        "explanation": "Agoraphobia involves intense fear of situations like open spaces or crowds, often leading to avoidance of such environments."
    },
    {
        "id": 129,
        "question": "What is the term for the tendency to make decisions based on how options are presented?",
        "options": [
            "Framing effect",
            "Anchoring bias",
            "Availability heuristic",
            "Confirmation bias"
        ],
        "answer": "Framing effect",
        "difficulty": "medium",
        "topic": "Cognition and Intelligence",
        "explanation": "The framing effect occurs when people’s decisions are influenced by how choices are worded or presented, such as emphasizing gains versus losses."
    },
    {
        "id": 130,
        "question": "In industrial/organizational psychology, what is the term for employees’ emotional commitment to their workplace?",
        "options": [
            "Job satisfaction",
            "Organizational commitment",
            "Work engagement",
            "Motivational drive"
        ],
        "answer": "Organizational commitment",
        "difficulty": "medium",
        "topic": "Applied Psychology",
        "explanation": "Organizational commitment reflects employees’ emotional attachment and loyalty to their organization, influencing retention and performance."
    },
    {
        "id": 131,
        "question": "Which stage of sleep is associated with vivid dreaming and rapid eye movement?",
        "options": [
            "Stage 1",
            "Stage 2",
            "Stage 3",
            "REM sleep"
        ],
        "answer": "REM sleep",
        "difficulty": "easy",
        "topic": "States of Consciousness",
        "explanation": "REM (Rapid Eye Movement) sleep is characterized by vivid dreams, rapid eye movements, and high brain activity."
    },
    {
        "id": 132,
        "question": "What is the term for the study of how physical environments influence behavior?",
        "options": [
            "Environmental psychology",
            "Ecological psychology",
            "Spatial psychology",
            "Geographical psychology"
        ],
        "answer": "Environmental psychology",
        "difficulty": "easy",
        "topic": "Applied Psychology",
        "explanation": "Environmental psychology examines how physical settings, like natural or built environments, affect human behavior and well-being."
    },
    {
        "id": 133,
        "question": "Which concept in psychoneuroimmunology links stress to weakened immune function?",
        "options": [
            "Allostatic load",
            "Immunosuppression",
            "Neurogenesis",
            "HPA axis"
        ],
        "answer": "Immunosuppression",
        "difficulty": "hard",
        "topic": "Health and Stress Psychology",
        "explanation": "Immunosuppression refers to the reduction in immune system effectiveness due to chronic stress, increasing vulnerability to illness."
    },
    {
        "id": 134,
        "question": "In Freud’s psychoanalytic theory, which component of personality operates on the pleasure principle?",
        "options": [
            "Ego",
            "Id",
            "Superego",
            "Conscience"
        ],
        "answer": "Id",
        "difficulty": "medium",
        "topic": "Personality Psychology",
        "explanation": "The id operates on the pleasure principle, seeking immediate gratification of instinctual drives without regard for reality."
    },
    {
        "id": 135,
        "question": "What is the term for the process of adapting to a new culture while maintaining one’s original cultural identity?",
        "options": [
            "Assimilation",
            "Integration",
            "Acculturation",
            "Marginalization"
        ],
        "answer": "Integration",
        "difficulty": "medium",
        "topic": "Cultural Psychology",
        "explanation": "Integration involves adopting aspects of a new culture while preserving one’s original cultural identity, a form of acculturation."
    },
    {
        "id": 136,
        "question": "Which type of research design establishes a relationship between two variables without manipulating them?",
        "options": [
            "Experimental",
            "Correlational",
            "Longitudinal",
            "Cross-sectional"
        ],
        "answer": "Correlational",
        "difficulty": "easy",
        "topic": "Research Methods",
        "explanation": "Correlational research examines the relationship between variables without manipulation, but it cannot establish causation."
    },
    {
        "id": 137,
        "question": "In classical conditioning, what is the term for the reappearance of a conditioned response after extinction?",
        "options": [
            "Spontaneous recovery",
            "Generalization",
            "Discrimination",
            "Habituation"
        ],
        "answer": "Spontaneous recovery",
        "difficulty": "medium",
        "topic": "Learning and Conditioning",
        "explanation": "Spontaneous recovery occurs when a previously extinguished conditioned response reappears after a rest period."
    },
    {
        "id": 138,
        "question": "Which therapy technique involves exposing patients to anxiety-provoking stimuli in a controlled setting?",
        "options": [
            "Systematic desensitization",
            "Free association",
            "Client-centered therapy",
            "Aversion therapy"
        ],
        "answer": "Systematic desensitization",
        "difficulty": "medium",
        "topic": "Therapies and Treatment",
        "explanation": "Systematic desensitization gradually exposes patients to feared stimuli while teaching relaxation techniques to reduce anxiety."
    },
    {
        "id": 139,
        "question": "What is the term for the tendency to attribute negative stereotypes to a group based on limited information?",
        "options": [
            "Prejudice",
            "Discrimination",
            "Stereotyping",
            "Ingroup bias"
        ],
        "answer": "Stereotyping",
        "difficulty": "easy",
        "topic": "Social Psychology",
        "explanation": "Stereotyping involves applying generalized beliefs about a group to individuals, often based on limited or inaccurate information."
    },
    {
        "id": 140,
        "question": "In educational psychology, what is the term for tailoring instruction to a student’s current level of understanding?",
        "options": [
            "Differentiated instruction",
            "Standardized teaching",
            "Behavior modification",
            "Curriculum alignment"
        ],
        "answer": "Differentiated instruction",
        "difficulty": "medium",
        "topic": "Applied Psychology",
        "explanation": "Differentiated instruction adapts teaching methods and materials to meet students’ diverse learning needs and abilities."
    },
    {
        "id": 141,
        "question": "Which brain structure regulates body temperature and hunger?",
        "options": [
            "Thalamus",
            "Hypothalamus",
            "Amygdala",
            "Medulla"
        ],
        "answer": "Hypothalamus",
        "difficulty": "easy",
        "topic": "Biological Bases",
        "explanation": "The hypothalamus controls physiological functions like body temperature, hunger, and thirst, maintaining homeostasis."
    },
    {
        "id": 142,
        "question": "What is the term for the belief that one’s gender identity does not match their assigned sex at birth?",
        "options": [
            "Gender dysphoria",
            "Gender nonconformity",
            "Sexual orientation",
            "Gender role conflict"
        ],
        "answer": "Gender dysphoria",
        "difficulty": "medium",
        "topic": "Psychology of Gender",
        "explanation": "Gender dysphoria refers to distress caused by a mismatch between one’s gender identity and biological sex assigned at birth."
    },
    {
        "id": 143,
        "question": "Which concept in consumer psychology explains why scarcity increases perceived value?",
        "options": [
            "Supply-demand principle",
            "Scarcity heuristic",
            "Endowment effect",
            "Loss aversion"
        ],
        "answer": "Scarcity heuristic",
        "difficulty": "medium",
        "topic": "Applied Psychology",
        "explanation": "The scarcity heuristic suggests that items perceived as rare or limited are valued more highly, influencing purchasing decisions."
    },
    {
        "id": 144,
        "question": "In Bandura’s social learning theory, what is the term for learning through observing others?",
        "options": [
            "Modeling",
            "Reinforcement",
            "Imitation",
            "Conditioning"
        ],
        "answer": "Modeling",
        "difficulty": "easy",
        "topic": "Learning and Conditioning",
        "explanation": "Modeling involves learning behaviors by observing and imitating others, as demonstrated in Bandura’s Bobo doll experiment."
    },
    {
        "id": 145,
        "question": "Which type of intelligence in Sternberg’s triarchic theory involves practical problem-solving in everyday life?",
        "options": [
            "Analytical intelligence",
            "Creative intelligence",
            "Practical intelligence",
            "Emotional intelligence"
        ],
        "answer": "Practical intelligence",
        "difficulty": "medium",
        "topic": "Cognition and Intelligence",
        "explanation": "Practical intelligence involves adapting to and solving real-world problems, often referred to as ‘street smarts.’"
    },
    {
        "id": 146,
        "question": "What is the term for the physical and psychological symptoms experienced when discontinuing a drug?",
        "options": [
            "Tolerance",
            "Dependence",
            "Withdrawal",
            "Addiction"
        ],
        "answer": "Withdrawal",
        "difficulty": "easy",
        "topic": "States of Consciousness",
        "explanation": "Withdrawal refers to the symptoms that occur when a person stops using a substance to which they are physically or psychologically dependent."
    },
    {
        "id": 147,
        "question": "Which coping mechanism involves redirecting unacceptable impulses into socially acceptable behaviors?",
        "options": [
            "Repression",
            "Sublimation",
            "Projection",
            "Denial"
        ],
        "answer": "Sublimation",
        "difficulty": "medium",
        "topic": "Health and Stress Psychology",
        "explanation": "Sublimation channels unacceptable impulses, such as aggression, into constructive activities, like sports or art."
    },
    {
        "id": 148,
        "question": "In Jung’s theory, what is the term for universal, inherited patterns of thought?",
        "options": [
            "Archetypes",
            "Complexes",
            "Personas",
            "Anima/Animus"
        ],
        "answer": "Archetypes",
        "difficulty": "medium",
        "topic": "Personality Psychology",
        "explanation": "Archetypes are universal symbols or patterns in the collective unconscious, influencing thoughts and behaviors across cultures."
    },
    {
        "id": 149,
        "question": "Which psychological disorder involves a persistent belief in having a serious illness despite medical evidence to the contrary?",
        "options": [
            "Somatic symptom disorder",
            "Illness anxiety disorder",
            "Conversion disorder",
            "Munchausen syndrome"
        ],
        "answer": "Illness anxiety disorder",
        "difficulty": "medium",
        "topic": "Psychological Disorders",
        "explanation": "Illness anxiety disorder involves excessive preoccupation with having or developing a serious illness, despite normal medical evaluations."
    },
    {
        "id": 150,
        "question": "What is the term for the study of how artificial intelligence systems mimic human cognition?",
        "options": [
            "Cognitive robotics",
            "Computational psychology",
            "Artificial consciousness",
            "Machine learning psychology"
        ],
        "answer": "Computational psychology",
        "difficulty": "hard",
        "topic": "Contemporary Issues",
        "explanation": "Computational psychology explores how AI and computational models simulate human cognitive processes like perception and decision-making."
    },
    {
        "id": 151,
        "question": "In military psychology, what is the term for the psychological preparation of soldiers for combat stress?",
        "options": [
            "Resilience training",
            "Debriefing",
            "Desensitization",
            "Combat conditioning"
        ],
        "answer": "Resilience training",
        "difficulty": "medium",
        "topic": "Applied Psychology",
        "explanation": "Resilience training in military psychology equips soldiers with strategies to manage stress and maintain mental health under combat conditions."
    },
    {
        "id": 152,
        "question": "Which sensory receptor is responsible for detecting pain and temperature?",
        "options": [
            "Photoreceptors",
            "Mechanoreceptors",
            "Nociceptors",
            "Chemoreceptors"
        ],
        "answer": "Nociceptors",
        "difficulty": "easy",
        "topic": "Sensation and Perception",
        "explanation": "Nociceptors are sensory receptors that detect painful stimuli, temperature extremes, and tissue damage, sending signals to the brain."
    },
    {
        "id": 153,
        "question": "In Erikson’s psychosocial stages, which conflict occurs during early childhood and focuses on self-control?",
        "options": [
            "Trust vs. Mistrust",
            "Autonomy vs. Shame and Doubt",
            "Initiative vs. Guilt",
            "Industry vs. Inferiority"
        ],
        "answer": "Autonomy vs. Shame and Doubt",
        "difficulty": "medium",
        "topic": "Developmental Psychology",
        "explanation": "The Autonomy vs. Shame and Doubt stage (ages 1–3) involves developing self-control and independence, or risking feelings of shame."
    },
    {
        "id": 154,
        "question": "Which class of psychoactive drugs is associated with distorted perceptions and hallucinations?",
        "options": [
            "Stimulants",
            "Depressants",
            "Hallucinogens",
            "Opioids"
        ],
        "answer": "Hallucinogens",
        "difficulty": "easy",
        "topic": "States of Consciousness",
        "explanation": "Hallucinogens, such as LSD and psilocybin, alter perception, causing hallucinations and distorted sensory experiences."
    },
    {
        "id": 155,
        "question": "What is the term for the ability to maintain an object’s size perception despite changes in distance?",
        "options": [
            "Shape constancy",
            "Size constancy",
            "Brightness constancy",
            "Figure-ground perception"
        ],
        "answer": "Size constancy",
        "difficulty": "medium",
        "topic": "Sensation and Perception",
        "explanation": "Size constancy allows the brain to perceive an object’s size as constant, even as its retinal image changes with distance."
    },
    {
        "id": 156,
        "question": "Which brain structure is primarily responsible for relaying sensory information to the cortex?",
        "options": [
            "Hypothalamus",
            "Thalamus",
            "Pons",
            "Reticular formation"
        ],
        "answer": "Thalamus",
        "difficulty": "easy",
        "topic": "Biological Bases",
        "explanation": "The thalamus acts as a relay station, directing sensory information (except smell) to the appropriate cortical areas."
    },
    {
        "id": 157,
        "question": "In consumer psychology, what is the term for the emotional response to a product based on its branding?",
        "options": [
            "Brand loyalty",
            "Affective conditioning",
            "Purchase intention",
            "Cognitive appraisal"
        ],
        "answer": "Affective conditioning",
        "difficulty": "medium",
        "topic": "Applied Psychology",
        "explanation": "Affective conditioning occurs when emotions are associated with a brand, influencing consumer preferences through positive or negative feelings."
    },
    {
        "id": 158,
        "question": "Which therapy approach focuses on resolving past traumas through dream analysis and free association?",
        "options": [
            "Cognitive-behavioral therapy",
            "Humanistic therapy",
            "Psychoanalysis",
            "Behavioral therapy"
        ],
        "answer": "Psychoanalysis",
        "difficulty": "easy",
        "topic": "Therapies and Treatment",
        "explanation": "Psychoanalysis, developed by Freud, uses techniques like dream analysis and free association to uncover and resolve unconscious conflicts."
    },
    {
        "id": 159,
        "question": "What is the term for the tendency to form impressions of others based on their group membership?",
        "options": [
            "Prejudice",
            "Stereotyping",
            "Discrimination",
            "Social categorization"
        ],
        "answer": "Social categorization",
        "difficulty": "medium",
        "topic": "Social Psychology",
        "explanation": "Social categorization involves grouping people based on shared characteristics, which can lead to stereotyping or prejudice."
    },
    {
        "id": 160,
        "question": "Which neurodevelopmental disorder is characterized by challenges with social communication and repetitive behaviors?",
        "options": [
            "ADHD",
            "Autism spectrum disorder",
            "Dyslexia",
            "Tourette syndrome"
        ],
        "answer": "Autism spectrum disorder",
        "difficulty": "easy",
        "topic": "Psychological Disorders",
        "explanation": "Autism spectrum disorder involves difficulties in social communication and restricted, repetitive behaviors, varying in severity."
    },
    {
        "id": 161,
        "question": "What is the term for a variable that is manipulated in an experimental study?",
        "options": [
            "Dependent variable",
            "Independent variable",
            "Confounding variable",
            "Control variable"
        ],
        "answer": "Independent variable",
        "difficulty": "easy",
        "topic": "Research Methods",
        "explanation": "The independent variable is manipulated by the researcher to observe its effect on the dependent variable in an experiment."
    },
    {
        "id": 162,
        "question": "In operant conditioning, what is the term for reinforcing a behavior only sometimes?",
        "options": [
            "Continuous reinforcement",
            "Partial reinforcement",
            "Negative reinforcement",
            "Shaping"
        ],
        "answer": "Partial reinforcement",
        "difficulty": "medium",
        "topic": "Learning and Conditioning",
        "explanation": "Partial reinforcement involves rewarding a behavior intermittently, making it more resistant to extinction than continuous reinforcement."
    },
    {
        "id": 163,
        "question": "Which theory of motivation emphasizes the need for competence, autonomy, and relatedness?",
        "options": [
            "Drive reduction theory",
            "Self-determination theory",
            "Instinct theory",
            "Arousal theory"
        ],
        "answer": "Self-determination theory",
        "difficulty": "medium",
        "topic": "Motivation and Emotion",
        "explanation": "Self-determination theory posits that motivation is driven by the needs for competence, autonomy, and relatedness."
    },
    {
        "id": 164,
        "question": "In educational psychology, what is the term for the belief in one’s ability to succeed in academic tasks?",
        "options": [
            "Self-efficacy",
            "Self-esteem",
            "Intrinsic motivation",
            "Learned helplessness"
        ],
        "answer": "Self-efficacy",
        "difficulty": "easy",
        "topic": "Applied Psychology",
        "explanation": "Self-efficacy, proposed by Bandura, refers to a student’s confidence in their ability to perform academic tasks successfully."
    },
    {
        "id": 165,
        "question": "Which type of memory stores factual knowledge about the world?",
        "options": [
            "Episodic memory",
            "Procedural memory",
            "Semantic memory",
            "Implicit memory"
        ],
        "answer": "Semantic memory",
        "difficulty": "medium",
        "topic": "Memory",
        "explanation": "Semantic memory stores general knowledge and facts, such as language and concepts, independent of personal experiences."
    },
    {
        "id": 166,
        "question": "In Sternberg’s triarchic theory, which intelligence involves generating novel ideas?",
        "options": [
            "Analytical intelligence",
            "Creative intelligence",
            "Practical intelligence",
            "Emotional intelligence"
        ],
        "answer": "Creative intelligence",
        "difficulty": "medium",
        "topic": "Cognition and Intelligence",
        "explanation": "Creative intelligence involves the ability to produce novel and valuable ideas, solving problems in innovative ways."
    },
    {
        "id": 167,
        "question": "Which stress coping strategy involves actively addressing a problem to reduce its impact?",
        "options": [
            "Problem-focused coping",
            "Emotion-focused coping",
            "Avoidance coping",
            "Denial coping"
        ],
        "answer": "Problem-focused coping",
        "difficulty": "easy",
        "topic": "Health and Stress Psychology",
        "explanation": "Problem-focused coping involves taking direct actions to solve or mitigate a stressor, such as planning or seeking solutions."
    },
    {
        "id": 168,
        "question": "Which personality disorder is characterized by instability in relationships and self-image?",
        "options": [
            "Narcissistic personality disorder",
            "Borderline personality disorder",
            "Histrionic personality disorder",
            "Schizoid personality disorder"
        ],
        "answer": "Borderline personality disorder",
        "difficulty": "medium",
        "topic": "Psychological Disorders",
        "explanation": "Borderline personality disorder involves unstable relationships, self-image, and emotions, often with impulsivity and fear of abandonment."
    },
    {
        "id": 169,
        "question": "What is the term for the tendency to comply with a small request to agree to a larger one later?",
        "options": [
            "Foot-in-the-door technique",
            "Door-in-the-face technique",
            "Low-ball technique",
            "Reciprocity norm"
        ],
        "answer": "Foot-in-the-door technique",
        "difficulty": "medium",
        "topic": "Social Psychology",
        "explanation": "The foot-in-the-door technique involves gaining compliance with a small request to increase the likelihood of agreement to a larger request."
    },
    {
        "id": 170,
        "question": "In cyberpsychology, what is the term for aggressive online behavior intended to harm others?",
        "options": [
            "Cyberbullying",
            "Trolling",
            "Catfishing",
            "Digital harassment"
        ],
        "answer": "Cyberbullying",
        "difficulty": "easy",
        "topic": "Cyberpsychology",
        "explanation": "Cyberbullying involves intentional, repeated online actions to harm or intimidate others, often through social media or messaging."
    },
    {
        "id": 171,
        "question": "Which research method involves collecting data from a group of participants at one point in time?",
        "options": [
            "Longitudinal study",
            "Cross-sectional study",
            "Case study",
            "Cohort study"
        ],
        "answer": "Cross-sectional study",
        "difficulty": "easy",
        "topic": "Research Methods",
        "explanation": "A cross-sectional study collects data from different individuals at a single time point to compare variables."
    },
    {
        "id": 172,
        "question": "In classical conditioning, what is the term for a stimulus that naturally triggers a response?",
        "options": [
            "Conditioned stimulus",
            "Unconditioned stimulus",
            "Conditioned response",
            "Neutral stimulus"
        ],
        "answer": "Unconditioned stimulus",
        "difficulty": "easy",
        "topic": "Learning and Conditioning",
        "explanation": "An unconditioned stimulus naturally elicits a response without prior learning, such as food causing salivation in Pavlov’s experiments."
    },
    {
        "id": 173,
        "question": "Which theory of emotion suggests that emotions and physiological arousal occur simultaneously?",
        "options": [
            "James-Lange theory",
            "Cannon-Bard theory",
            "Schachter-Singer theory",
            "Lazarus theory"
        ],
        "answer": "Cannon-Bard theory",
        "difficulty": "medium",
        "topic": "Motivation and Emotion",
        "explanation": "The Cannon-Bard theory posits that emotional experience and physiological arousal are triggered simultaneously by a stimulus."
    },
    {
        "id": 174,
        "question": "In forensic psychology, what is the term for assessing a defendant’s mental state at the time of a crime?",
        "options": [
            "Competency evaluation",
            "Insanity defense",
            "Risk assessment",
            "Criminal profiling"
        ],
        "answer": "Insanity defense",
        "difficulty": "medium",
        "topic": "Applied Psychology",
        "explanation": "The insanity defense involves evaluating whether a defendant was mentally capable of understanding their actions during a crime."
    },
    {
        "id": 175,
        "question": "What is the term for the memory error where new information interferes with recalling older information?",
        "options": [
            "Proactive interference",
            "Retroactive interference",
            "Decay",
            "Repression"
        ],
        "answer": "Retroactive interference",
        "difficulty": "medium",
        "topic": "Memory",
        "explanation": "Retroactive interference occurs when newly learned information disrupts the recall of previously learned information."
    },
    {
        "id": 176,
        "question": "In Gardner’s theory of multiple intelligences, which intelligence involves self-awareness and emotional regulation?",
        "options": [
            "Interpersonal intelligence",
            "Intrapersonal intelligence",
            "Bodily-kinesthetic intelligence",
            "Naturalist intelligence"
        ],
        "answer": "Intrapersonal intelligence",
        "difficulty": "medium",
        "topic": "Cognition and Intelligence",
        "explanation": "Intrapersonal intelligence involves understanding one’s own emotions, motivations, and goals, facilitating self-regulation."
    },
    {
        "id": 177,
        "question": "Which physiological response is most associated with the fight-or-flight response?",
        "options": [
            "Increased insulin release",
            "Elevated heart rate",
            "Decreased pupil dilation",
            "Reduced adrenaline secretion"
        ],
        "answer": "Elevated heart rate",
        "difficulty": "easy",
        "topic": "Health and Stress Psychology",
        "explanation": "The fight-or-flight response, triggered by stress, increases heart rate to prepare the body for action, mediated by adrenaline."
    },
    {
        "id": 178,
        "question": "Which disorder is characterized by inattention, impulsivity, and/or hyperactivity inappropriate for one’s age?",
        "options": [
            "Autism spectrum disorder",
            "Attention-deficit/hyperactivity disorder",
            "Oppositional defiant disorder",
            "Conduct disorder"
        ],
        "answer": "Attention-deficit/hyperactivity disorder",
        "difficulty": "easy",
        "topic": "Psychological Disorders",
        "explanation": "ADHD involves persistent inattention, impulsivity, or hyperactivity that interferes with functioning, often diagnosed in childhood."
    },
    {
        "id": 179,
        "question": "What is the term for the tendency to overestimate others’ agreement with one’s own attitudes?",
        "options": [
            "False consensus effect",
            "Social desirability bias",
            "Projection",
            "Illusory superiority"
        ],
        "answer": "False consensus effect",
        "difficulty": "medium",
        "topic": "Social Psychology",
        "explanation": "The false consensus effect is the tendency to overestimate how much others share one’s beliefs or behaviors."
    },
    {
        "id": 180,
        "question": "In positive psychology, what is the term for a state of complete engagement in an activity?",
        "options": [
            "Eudaimonia",
            "Flow",
            "Hedonia",
            "Savoring"
        ],
        "answer": "Flow",
        "difficulty": "medium",
        "topic": "Positive Psychology",
        "explanation": "Flow, described by Csikszentmihalyi, is a state of total immersion and enjoyment in an activity, balancing challenge and skill."
    },
    {
        "id": 181,
        "question": "Which ethical principle requires researchers to obtain participants’ agreement before a study?",
        "options": [
            "Confidentiality",
            "Informed consent",
            "Debriefing",
            "Nonmaleficence"
        ],
        "answer": "Informed consent",
        "difficulty": "easy",
        "topic": "Research Methods",
        "explanation": "Informed consent ensures participants understand the study’s purpose, risks, and procedures before agreeing to participate."
    },
    {
        "id": 182,
        "question": "In operant conditioning, what is the term for removing an aversive stimulus to increase a behavior?",
        "options": [
            "Positive reinforcement",
            "Negative reinforcement",
            "Positive punishment",
            "Negative punishment"
        ],
        "answer": "Negative reinforcement",
        "difficulty": "medium",
        "topic": "Learning and Conditioning",
        "explanation": "Negative reinforcement increases a behavior by removing an unpleasant stimulus, such as turning off a loud noise when a task is completed."
    },
    {
        "id": 183,
        "question": "Which emotion theory emphasizes the role of cognitive appraisal in emotional experience?",
        "options": [
            "James-Lange theory",
            "Cannon-Bard theory",
            "Schachter-Singer theory",
            "Lazarus theory"
        ],
        "answer": "Lazarus theory",
        "difficulty": "medium",
        "topic": "Motivation and Emotion",
        "explanation": "Lazarus theory suggests that emotions arise from cognitive appraisals of a situation’s significance to one’s well-being."
    },
    {
        "id": 184,
        "question": "In sports psychology, what is the term for an athlete’s failure to perform under high-pressure situations?",
        "options": [
            "Choking",
            "Burnout",
            "Overtraining",
            "Performance anxiety"
        ],
        "answer": "Choking",
        "difficulty": "easy",
        "topic": "Applied Psychology",
        "explanation": "Choking refers to an athlete’s significant performance decline under pressure, often due to heightened anxiety or overthinking."
    },
    {
        "id": 185,
        "question": "What is the term for the memory error where older information interferes with learning new information?",
        "options": [
            "Proactive interference",
            "Retroactive interference",
            "Decay",
            "Amnesia"
        ],
        "answer": "Proactive interference",
        "difficulty": "medium",
        "topic": "Memory",
        "explanation": "Proactive interference occurs when previously learned information disrupts the ability to learn or recall new information."
    },
    {
        "id": 186,
        "question": "Which neurotransmitter is most associated with attention and arousal in the brain?",
        "options": [
            "Serotonin",
            "Norepinephrine",
            "GABA",
            "Acetylcholine"
        ],
        "answer": "Norepinephrine",
        "difficulty": "medium",
        "topic": "Biological Bases",
        "explanation": "Norepinephrine regulates attention, arousal, and the stress response, playing a key role in alertness and focus."
    },
    {
        "id": 187,
        "question": "In Rogers’ humanistic theory, what is the term for accepting a person without judgment?",
        "options": [
            "Congruence",
            "Unconditional positive regard",
            "Self-actualization",
            "Empathy"
        ],
        "answer": "Unconditional positive regard",
        "difficulty": "easy",
        "topic": "Personality Psychology",
        "explanation": "Unconditional positive regard involves accepting and valuing a person without judgment, fostering personal growth."
    },
    {
        "id": 188,
        "question": "Which disorder is characterized by sudden, uncontrollable vocal or motor tics?",
        "options": [
            "Tourette syndrome",
            "Autism spectrum disorder",
            "ADHD",
            "Obsessive-compulsive disorder"
        ],
        "answer": "Tourette syndrome",
        "difficulty": "medium",
        "topic": "Psychological Disorders",
        "explanation": "Tourette syndrome involves involuntary tics, such as vocal outbursts or motor movements, often beginning in childhood."
    },
    {
        "id": 189,
        "question": "What is the term for the tendency to make riskier decisions in a group than as an individual?",
        "options": [
            "Groupthink",
            "Risky shift",
            "Social loafing",
            "Deindividuation"
        ],
        "answer": "Risky shift",
        "difficulty": "medium",
        "topic": "Social Psychology",
        "explanation": "Risky shift refers to the tendency for groups to make riskier decisions than individuals due to shared responsibility and discussion."
    },
    {
        "id": 190,
        "question": "In the psychology of gender, what is the term for societal expectations about male and female behavior?",
        "options": [
            "Gender roles",
            "Gender identity",
            "Sexual orientation",
            "Gender schema"
        ],
        "answer": "Gender roles",
        "difficulty": "easy",
        "topic": "Psychology of Gender",
        "explanation": "Gender roles are societal norms dictating expected behaviors, attitudes, and responsibilities for males and females."
    },
    {
        "id": 191,
        "question": "Which statistical method is used to determine the strength of a relationship between two variables?",
        "options": [
            "T-test",
            "ANOVA",
            "Correlation coefficient",
            "Chi-square test"
        ],
        "answer": "Correlation coefficient",
        "difficulty": "medium",
        "topic": "Research Methods",
        "explanation": "The correlation coefficient measures the strength and direction of the relationship between two variables, ranging from -1 to +1."
    },
    {
        "id": 192,
        "question": "In Bandura’s Bobo doll experiment, what behavior did children imitate after observing adults?",
        "options": [
            "Aggression",
            "Sharing",
            "Crying",
            "Reading"
        ],
        "answer": "Aggression",
        "difficulty": "easy",
        "topic": "Learning and Conditioning",
        "explanation": "Children imitated aggressive behaviors toward the Bobo doll after observing adults, demonstrating observational learning."
    },
    {
        "id": 193,
        "question": "Which motivation theory suggests that behavior is driven by the desire to reduce internal tension?",
        "options": [
            "Drive reduction theory",
            "Arousal theory",
            "Self-determination theory",
            "Expectancy theory"
        ],
        "answer": "Drive reduction theory",
        "difficulty": "medium",
        "topic": "Motivation and Emotion",
        "explanation": "Drive reduction theory posits that behaviors are motivated by the need to reduce internal drives, such as hunger or thirst."
    },
    {
        "id": 194,
        "question": "In environmental psychology, what is the term for discomfort caused by excessive population density?",
        "options": [
            "Crowding",
            "Urban overload",
            "Territoriality",
            "Proxemics"
        ],
        "answer": "Crowding",
        "difficulty": "easy",
        "topic": "Applied Psychology",
        "explanation": "Crowding refers to the psychological stress and discomfort experienced in high-density environments, impacting behavior."
    },
    {
        "id": 195,
        "question": "What is the term for the memory process where information is transferred from short-term to long-term memory?",
        "options": [
            "Encoding",
            "Consolidation",
            "Retrieval",
            "Rehearsal"
        ],
        "answer": "Consolidation",
        "difficulty": "medium",
        "topic": "Memory",
        "explanation": "Consolidation is the process of stabilizing and transferring information from short-term to long-term memory, often during sleep."
    },
    {
        "id": 196,
        "question": "Which brain area is critical for producing spoken language?",
        "options": [
            "Wernicke’s area",
            "Broca’s area",
            "Angular gyrus",
            "Primary auditory cortex"
        ],
        "answer": "Broca’s area",
        "difficulty": "medium",
        "topic": "Biological Bases",
        "explanation": "Broca’s area, located in the frontal lobe, is essential for speech production and language articulation."
    },
    {
        "id": 197,
        "question": "In Adler’s theory, what is the term for striving to overcome feelings of inferiority?",
        "options": [
            "Compensation",
            "Individuation",
            "Superiority complex",
            "Self-actualization"
        ],
        "answer": "Compensation",
        "difficulty": "medium",
        "topic": "Personality Psychology",
        "explanation": "Compensation in Adler’s theory involves efforts to overcome perceived inferiorities by developing strengths or achieving goals."
    },
    {
        "id": 198,
        "question": "Which disorder is characterized by significant memory loss and cognitive decline in older adults?",
        "options": [
            "Alzheimer’s disease",
            "Parkinson’s disease",
            "Huntington’s disease",
            "Vascular dementia"
        ],
        "answer": "Alzheimer’s disease",
        "difficulty": "easy",
        "topic": "Psychological Disorders",
        "explanation": "Alzheimer’s disease is a neurocognitive disorder causing progressive memory loss, cognitive decline, and behavioral changes."
    },
    {
        "id": 199,
        "question": "What is the term for the tendency to reduce effort when one’s contributions are not individually identifiable?",
        "options": [
            "Social loafing",
            "Groupthink",
            "Diffusion of responsibility",
            "Social facilitation"
        ],
        "answer": "Social loafing",
        "difficulty": "medium",
        "topic": "Social Psychology",
        "explanation": "Social loafing occurs when individuals exert less effort in a group task when their contributions are not individually evaluated."
    },
    {
        "id": 200,
        "question": "In artificial intelligence research, what psychological concept is studied to mimic human decision-making?",
        "options": [
            "Heuristics",
            "Archetypes",
            "Reflexes",
            "Instincts"
        ],
        "answer": "Heuristics",
        "difficulty": "hard",
        "topic": "Contemporary Issues",
        "explanation": "Heuristics, mental shortcuts for decision-making, are studied in AI to model human-like problem-solving and reasoning."
    },
    {
        "id": 201,
        "question": "In psychoneuroimmunology, what is the term for the interaction between psychological processes and immune function?",
        "options": [
            "Neurogenesis",
            "Psychosomatic response",
            "Immunomodulation",
            "Allostasis"
        ],
        "answer": "Immunomodulation",
        "difficulty": "hard",
        "topic": "Health and Stress Psychology",
        "explanation": "Immunomodulation refers to the influence of psychological factors, such as stress, on immune system function, studied in psychoneuroimmunology."
    },
    {
        "id": 202,
        "question": "Which research method involves studying the same group of individuals over an extended period?",
        "options": [
            "Cross-sectional study",
            "Longitudinal study",
            "Case study",
            "Experimental study"
        ],
        "answer": "Longitudinal study",
        "difficulty": "easy",
        "topic": "Research Methods",
        "explanation": "Longitudinal studies track the same participants over time to observe changes or trends in behavior or traits."
    },
    {
        "id": 203,
        "question": "Which brain region is primarily responsible for processing auditory information?",
        "options": [
            "Occipital lobe",
            "Temporal lobe",
            "Parietal lobe",
            "Frontal lobe"
        ],
        "answer": "Temporal lobe",
        "difficulty": "easy",
        "topic": "Biological Bases",
        "explanation": "The temporal lobe, particularly the primary auditory cortex, processes auditory stimuli such as sound and speech."
    },
    {
        "id": 204,
        "question": "In cross-cultural psychology, what is the term for adopting a new culture while rejecting one’s original culture?",
        "options": [
            "Integration",
            "Assimilation",
            "Separation",
            "Marginalization"
        ],
        "answer": "Assimilation",
        "difficulty": "medium",
        "topic": "Cultural Psychology",
        "explanation": "Assimilation occurs when individuals adopt the dominant culture’s norms and values, often abandoning their original cultural identity."
    },
    {
        "id": 205,
        "question": "Which stage of sleep is characterized by deep, restorative sleep and delta waves?",
        "options": [
            "Stage 1",
            "Stage 2",
            "Stage 3",
            "REM sleep"
        ],
        "answer": "Stage 3",
        "difficulty": "easy",
        "topic": "States of Consciousness",
        "explanation": "Stage 3, also known as slow-wave sleep, involves delta waves and is critical for physical restoration and memory consolidation."
    },
    {
        "id": 206,
        "question": "In Piaget’s theory, which stage involves the development of symbolic thinking and egocentrism?",
        "options": [
            "Sensorimotor",
            "Preoperational",
            "Concrete operational",
            "Formal operational"
        ],
        "answer": "Preoperational",
        "difficulty": "medium",
        "topic": "Developmental Psychology",
        "explanation": "The preoperational stage (ages 2–7) is marked by symbolic thinking, such as pretend play, but also egocentrism, where children struggle with others’ perspectives."
    },
    {
        "id": 207,
        "question": "What is the term for the sensory process of detecting light wavelengths?",
        "options": [
            "Audition",
            "Olfaction",
            "Vision",
            "Gustation"
        ],
        "answer": "Vision",
        "difficulty": "easy",
        "topic": "Sensation and Perception",
        "explanation": "Vision involves detecting light wavelengths through photoreceptors in the retina, allowing perception of color and form."
    },
    {
        "id": 208,
        "question": "In military psychology, what is the term for the emotional distress caused by exposure to combat?",
        "options": [
            "Combat stress reaction",
            "Post-traumatic stress disorder",
            "Battle fatigue",
            "Operational stress"
        ],
        "answer": "Combat stress reaction",
        "difficulty": "medium",
        "topic": "Applied Psychology",
        "explanation": "Combat stress reaction refers to acute psychological distress experienced by soldiers during or immediately after combat exposure."
    },
    {
        "id": 209,
        "question": "Which therapy technique involves pairing an undesirable behavior with an aversive stimulus?",
        "options": [
            "Systematic desensitization",
            "Aversion therapy",
            "Exposure therapy",
            "Flooding"
        ],
        "answer": "Aversion therapy",
        "difficulty": "medium",
        "topic": "Therapies and Treatment",
        "explanation": "Aversion therapy pairs an unwanted behavior, like smoking, with an unpleasant stimulus to reduce the behavior’s occurrence."
    },
    {
        "id": 210,
        "question": "What is the term for the tendency to help others in expectation of future reciprocation?",
        "options": [
            "Altruism",
            "Reciprocity norm",
            "Social exchange theory",
            "Kin selection"
        ],
        "answer": "Reciprocity norm",
        "difficulty": "medium",
        "topic": "Social Psychology",
        "explanation": "The reciprocity norm is the social expectation that people will help those who help them, fostering mutual cooperation."
    },
    {
        "id": 211,
        "question": "Which neurocognitive disorder is characterized by memory loss due to reduced blood flow to the brain?",
        "options": [
            "Alzheimer’s disease",
            "Vascular dementia",
            "Lewy body dementia",
            "Frontotemporal dementia"
        ],
        "answer": "Vascular dementia",
        "difficulty": "medium",
        "topic": "Psychological Disorders",
        "explanation": "Vascular dementia results from impaired blood flow to the brain, causing cognitive decline, including memory loss and executive dysfunction."
    },
    {
        "id": 212,
        "question": "In classical conditioning, what is the term for the learned reaction to a conditioned stimulus?",
        "options": [
            "Unconditioned response",
            "Conditioned response",
            "Unconditioned stimulus",
            "Neutral response"
        ],
        "answer": "Conditioned response",
        "difficulty": "easy",
        "topic": "Learning and Conditioning",
        "explanation": "The conditioned response is the learned reaction to a previously neutral stimulus after it is paired with an unconditioned stimulus."
    },
    {
        "id": 213,
        "question": "Which hormone regulates sleep-wake cycles in the body?",
        "options": [
            "Cortisol",
            "Melatonin",
            "Adrenaline",
            "Insulin"
        ],
        "answer": "Melatonin",
        "difficulty": "easy",
        "topic": "Biological Bases",
        "explanation": "Melatonin, produced by the pineal gland, regulates circadian rhythms, promoting sleep as light levels decrease."
    },
    {
        "id": 214,
        "question": "In consumer psychology, what is the term for the tendency to prefer familiar brands over unfamiliar ones?",
        "options": [
            "Brand loyalty",
            "Mere exposure effect",
            "Cognitive dissonance",
            "Priming"
        ],
        "answer": "Mere exposure effect",
        "difficulty": "medium",
        "topic": "Applied Psychology",
        "explanation": "The mere exposure effect suggests that repeated exposure to a brand increases familiarity and preference, influencing consumer choices."
    },
    {
        "id": 215,
        "question": "Which type of memory is responsible for retaining skills and habits?",
        "options": [
            "Episodic memory",
            "Semantic memory",
            "Procedural memory",
            "Short-term memory"
        ],
        "answer": "Procedural memory",
        "difficulty": "easy",
        "topic": "Memory",
        "explanation": "Procedural memory stores knowledge of how to perform tasks, such as riding a bike, and is often implicit."
    },
    {
        "id": 216,
        "question": "In Gardner’s theory, which intelligence involves sensitivity to rhythms and sounds?",
        "options": [
            "Musical intelligence",
            "Spatial intelligence",
            "Linguistic intelligence",
            "Bodily-kinesthetic intelligence"
        ],
        "answer": "Musical intelligence",
        "difficulty": "easy",
        "topic": "Cognition and Intelligence",
        "explanation": "Musical intelligence involves the ability to perceive, create, and appreciate musical patterns and rhythms."
    },
    {
        "id": 217,
        "question": "Which stress response involves emotional withdrawal to cope with overwhelming stressors?",
        "options": [
            "Fight-or-flight",
            "Tend-and-befriend",
            "Freeze response",
            "Surrender response"
        ],
        "answer": "Freeze response",
        "difficulty": "medium",
        "topic": "Health and Stress Psychology",
        "explanation": "The freeze response is a coping mechanism where individuals become immobilized or emotionally withdrawn when faced with intense stress."
    },
    {
        "id": 218,
        "question": "Which personality disorder is characterized by a pervasive fear of social rejection?",
        "options": [
            "Avoidant personality disorder",
            "Dependent personality disorder",
            "Schizotypal personality disorder",
            "Histrionic personality disorder"
        ],
        "answer": "Avoidant personality disorder",
        "difficulty": "medium",
        "topic": "Psychological Disorders",
        "explanation": "Avoidant personality disorder involves extreme shyness, fear of rejection, and avoidance of social interactions due to low self-esteem."
    },
    {
        "id": 219,
        "question": "What is the term for the tendency to change behavior to align with a direct request?",
        "options": [
            "Conformity",
            "Compliance",
            "Obedience",
            "Persuasion"
        ],
        "answer": "Compliance",
        "difficulty": "easy",
        "topic": "Social Psychology",
        "explanation": "Compliance involves adjusting behavior in response to a direct request, often to gain approval or avoid conflict."
    },
    {
        "id": 220,
        "question": "In cyberpsychology, what is the term for creating a false online identity to deceive others?",
        "options": [
            "Trolling",
            "Catfishing",
            "Phishing",
            "Doxing"
        ],
        "answer": "Catfishing",
        "difficulty": "easy",
        "topic": "Cyberpsychology",
        "explanation": "Catfishing involves creating a fake online persona to deceive others, often in romantic or social contexts."
    },
    {
        "id": 221,
        "question": "Which ethical principle ensures that psychological research data is kept private?",
        "options": [
            "Informed consent",
            "Confidentiality",
            "Beneficence",
            "Debriefing"
        ],
        "answer": "Confidentiality",
        "difficulty": "easy",
        "topic": "Research Methods",
        "explanation": "Confidentiality protects participants’ personal information, ensuring it is not disclosed without their consent."
    },
    {
        "id": 222,
        "question": "In operant conditioning, what is the term for removing a desirable stimulus to decrease a behavior?",
        "options": [
            "Positive reinforcement",
            "Negative reinforcement",
            "Positive punishment",
            "Negative punishment"
        ],
        "answer": "Negative punishment",
        "difficulty": "medium",
        "topic": "Learning and Conditioning",
        "explanation": "Negative punishment decreases a behavior by removing a desirable stimulus, such as taking away privileges."
    },
    {
        "id": 223,
        "question": "Which theory of emotion requires both physiological arousal and cognitive interpretation?",
        "options": [
            "James-Lange theory",
            "Cannon-Bard theory",
            "Schachter-Singer theory",
            "Lazarus theory"
        ],
        "answer": "Schachter-Singer theory",
        "difficulty": "medium",
        "topic": "Motivation and Emotion",
        "explanation": "The Schachter-Singer theory, or two-factor theory, posits that emotions result from physiological arousal and cognitive labeling of that arousal."
    },
    {
        "id": 224,
        "question": "In forensic psychology, what is the term for predicting an individual’s likelihood of reoffending?",
        "options": [
            "Criminal profiling",
            "Risk assessment",
            "Competency evaluation",
            "Insanity defense"
        ],
        "answer": "Risk assessment",
        "difficulty": "medium",
        "topic": "Applied Psychology",
        "explanation": "Risk assessment evaluates an individual’s potential for future criminal behavior, aiding in sentencing and rehabilitation decisions."
    },
    {
        "id": 225,
        "question": "What is the term for the tendency to forget information that is no longer actively rehearsed?",
        "options": [
            "Interference",
            "Decay",
            "Repression",
            "Amnesia"
        ],
        "answer": "Decay",
        "difficulty": "easy",
        "topic": "Memory",
        "explanation": "Decay theory suggests that memories fade over time if they are not actively rehearsed or accessed."
    },
    {
        "id": 226,
        "question": "Which neurotransmitter is most associated with the regulation of sleep and mood?",
        "options": [
            "Dopamine",
            "Serotonin",
            "Norepinephrine",
            "Acetylcholine"
        ],
        "answer": "Serotonin",
        "difficulty": "easy",
        "topic": "Biological Bases",
        "explanation": "Serotonin regulates mood, sleep, and appetite, and its imbalance is linked to disorders like depression."
    },
    {
        "id": 227,
        "question": "In Maslow’s hierarchy, which need involves achieving personal goals and fulfillment?",
        "options": [
            "Physiological needs",
            "Safety needs",
            "Esteem needs",
            "Self-actualization"
        ],
        "answer": "Self-actualization",
        "difficulty": "easy",
        "topic": "Motivation and Emotion",
        "explanation": "Self-actualization, at the top of Maslow’s hierarchy, involves realizing one’s potential and achieving personal fulfillment."
    },
    {
        "id": 228,
        "question": "Which disorder is characterized by excessive daytime sleepiness and breathing interruptions during sleep?",
        "options": [
            "Narcolepsy",
            "Insomnia",
            "Sleep apnea",
            "Restless legs syndrome"
        ],
        "answer": "Sleep apnea",
        "difficulty": "medium",
        "topic": "States of Consciousness",
        "explanation": "Sleep apnea involves repeated breathing interruptions during sleep, leading to poor sleep quality and daytime fatigue."
    },
    {
        "id": 229,
        "question": "What is the term for the tendency to perceive ambiguous images as meaningful patterns?",
        "options": [
            "Apophenia",
            "Perceptual set",
            "Gestalt closure",
            "Illusory contour"
        ],
        "answer": "Apophenia",
        "difficulty": "hard",
        "topic": "Sensation and Perception",
        "explanation": "Apophenia is the tendency to perceive meaningful patterns or connections in random or ambiguous stimuli, such as seeing faces in clouds."
    },
    {
        "id": 230,
        "question": "In Vygotsky’s theory, what is the term for the process of guiding a learner to achieve tasks?",
        "options": [
            "Scaffolding",
            "Modeling",
            "Zone of proximal development",
            "Reciprocal teaching"
        ],
        "answer": "Scaffolding",
        "difficulty": "medium",
        "topic": "Developmental Psychology",
        "explanation": "Scaffolding involves providing temporary support to a learner to help them accomplish tasks within their zone of proximal development."
    },
    {
        "id": 231,
        "question": "Which psychological perspective emphasizes the role of cultural and social influences on behavior?",
        "options": [
            "Biological",
            "Cognitive",
            "Sociocultural",
            "Psychodynamic"
        ],
        "answer": "Sociocultural",
        "difficulty": "easy",
        "topic": "Introduction to Psychology",
        "explanation": "The sociocultural perspective examines how cultural norms and social interactions shape individual behavior and thought."
    },
    {
        "id": 232,
        "question": "In sports psychology, what is the term for excessive training leading to decreased performance?",
        "options": [
            "Burnout",
            "Overtraining",
            "Choking",
            "Plateau effect"
        ],
        "answer": "Overtraining",
        "difficulty": "medium",
        "topic": "Applied Psychology",
        "explanation": "Overtraining occurs when excessive physical or mental training leads to fatigue, reduced performance, and potential burnout."
    },
    {
        "id": 233,
        "question": "Which brain imaging technique records electrical activity on the scalp?",
        "options": [
            "fMRI",
            "EEG",
            "PET scan",
            "CT scan"
        ],
        "answer": "EEG",
        "difficulty": "easy",
        "topic": "Biological Bases",
        "explanation": "Electroencephalography (EEG) measures electrical activity in the brain via electrodes on the scalp, useful for studying sleep and seizures."
    },
    {
        "id": 234,
        "question": "In social psychology, what is the term for negative actions toward a group based on stereotypes?",
        "options": [
            "Prejudice",
            "Discrimination",
            "Stereotyping",
            "Ethnocentrism"
        ],
        "answer": "Discrimination",
        "difficulty": "easy",
        "topic": "Social Psychology",
        "explanation": "Discrimination involves negative behaviors or actions toward individuals or groups based on their membership in a particular group."
    },
    {
        "id": 235,
        "question": "Which neurodevelopmental disorder is characterized by difficulties with reading and spelling?",
        "options": [
            "Dyslexia",
            "Autism spectrum disorder",
            "ADHD",
            "Dyspraxia"
        ],
        "answer": "Dyslexia",
        "difficulty": "easy",
        "topic": "Psychological Disorders",
        "explanation": "Dyslexia is a learning disorder involving challenges with reading, spelling, and decoding words, despite normal intelligence."
    },
    {
        "id": 236,
        "question": "What is the term for a research design that manipulates one variable to observe its effect on another?",
        "options": [
            "Correlational study",
            "Experimental study",
            "Observational study",
            "Survey study"
        ],
        "answer": "Experimental study",
        "difficulty": "easy",
        "topic": "Research Methods",
        "explanation": "Experimental studies manipulate an independent variable to determine its effect on a dependent variable, allowing causal inferences."
    },
    {
        "id": 237,
        "question": "In operant conditioning, what is the term for a behavior that occurs without reinforcement?",
        "options": [
            "Spontaneous recovery",
            "Extinction",
            "Generalization",
            "Shaping"
        ],
        "answer": "Extinction",
        "difficulty": "medium",
        "topic": "Learning and Conditioning",
        "explanation": "Extinction occurs when a previously reinforced behavior decreases because reinforcement is withheld."
    },
    {
        "id": 238,
        "question": "Which motivation theory focuses on achieving an optimal level of arousal?",
        "options": [
            "Drive reduction theory",
            "Arousal theory",
            "Self-determination theory",
            "Maslow’s hierarchy"
        ],
        "answer": "Arousal theory",
        "difficulty": "medium",
        "topic": "Motivation and Emotion",
        "explanation": "Arousal theory suggests that individuals are motivated to maintain an optimal level of arousal, varying by task and preference."
    },
    {
        "id": 239,
        "question": "In educational psychology, what is the term for reinforcing desired behaviors in the classroom?",
        "options": [
            "Behavior modification",
            "Scaffolding",
            "Differentiated instruction",
            "Collaborative learning"
        ],
        "answer": "Behavior modification",
        "difficulty": "easy",
        "topic": "Applied Psychology",
        "explanation": "Behavior modification uses reinforcement and punishment to shape students’ behaviors, often applied in classroom management."
    },
    {
        "id": 240,
        "question": "Which type of memory temporarily holds information for immediate use?",
        "options": [
            "Long-term memory",
            "Short-term memory",
            "Sensory memory",
            "Procedural memory"
        ],
        "answer": "Short-term memory",
        "difficulty": "easy",
        "topic": "Memory",
        "explanation": "Short-term memory holds a limited amount of information for a brief period, typically 20–30 seconds, for immediate processing."
    },
    {
        "id": 241,
        "question": "Which intelligence in Gardner’s theory involves physical coordination and dexterity?",
        "options": [
            "Musical intelligence",
            "Spatial intelligence",
            "Bodily-kinesthetic intelligence",
            "Logical-mathematical intelligence"
        ],
        "answer": "Bodily-kinesthetic intelligence",
        "difficulty": "easy",
        "topic": "Cognition and Intelligence",
        "explanation": "Bodily-kinesthetic intelligence involves the ability to control body movements and handle objects skillfully."
    },
    {
        "id": 242,
        "question": "Which coping strategy focuses on managing emotional reactions to stress?",
        "options": [
            "Problem-focused coping",
            "Emotion-focused coping",
            "Avoidance coping",
            "Proactive coping"
        ],
        "answer": "Emotion-focused coping",
        "difficulty": "medium",
        "topic": "Health and Stress Psychology",
        "explanation": "Emotion-focused coping involves managing emotional distress through strategies like meditation or seeking social support."
    },
    {
        "id": 243,
        "question": "Which personality disorder is characterized by excessive emotionality and attention-seeking behavior?",
        "options": [
            "Narcissistic personality disorder",
            "Histrionic personality disorder",
            "Borderline personality disorder",
            "Schizoid personality disorder"
        ],
        "answer": "Histrionic personality disorder",
        "difficulty": "medium",
        "topic": "Psychological Disorders",
        "explanation": "Histrionic personality disorder involves dramatic, attention-seeking behavior and exaggerated emotional expressions."
    },
    {
        "id": 244,
        "question": "What is the term for the tendency to adopt group attitudes to maintain harmony?",
        "options": [
            "Groupthink",
            "Social loafing",
            "Group polarization",
            "Deindividuation"
        ],
        "answer": "Groupthink",
        "difficulty": "medium",
        "topic": "Social Psychology",
        "explanation": "Groupthink occurs when group members suppress dissenting opinions to preserve consensus, often leading to flawed decisions."
    },
    {
        "id": 245,
        "question": "In positive psychology, what is the term for living a meaningful and virtuous life?",
        "options": [
            "Hedonia",
            "Eudaimonia",
            "Flow",
            "Savoring"
        ],
        "answer": "Eudaimonia",
        "difficulty": "medium",
        "topic": "Positive Psychology",
        "explanation": "Eudaimonia refers to a life of meaning, purpose, and virtue, central to positive psychology’s focus on well-being."
    },
    {
        "id": 246,
        "question": "Which brain structure is critical for coordinating balance and movement?",
        "options": [
            "Cerebellum",
            "Hippocampus",
            "Thalamus",
            "Hypothalamus"
        ],
        "answer": "Cerebellum",
        "difficulty": "easy",
        "topic": "Biological Bases",
        "explanation": "The cerebellum coordinates voluntary movements, balance, and fine motor skills, ensuring smooth physical actions."
    },
    {
        "id": 247,
        "question": "In Freud’s theory, which component of personality enforces moral standards?",
        "options": [
            "Id",
            "Ego",
            "Superego",
            "Libido"
        ],
        "answer": "Superego",
        "difficulty": "easy",
        "topic": "Personality Psychology",
        "explanation": "The superego acts as the moral conscience, enforcing societal and parental standards of right and wrong."
    },
    {
        "id": 248,
        "question": "Which disorder is characterized by rapid mood swings between mania and depression?",
        "options": [
            "Major depressive disorder",
            "Bipolar disorder",
            "Cyclothymic disorder",
            "Dysthymia"
        ],
        "answer": "Bipolar disorder",
        "difficulty": "easy",
        "topic": "Psychological Disorders",
        "explanation": "Bipolar disorder involves alternating episodes of mania (elevated mood) and depression, impacting daily functioning."
    },
    {
        "id": 249,
        "question": "What is the term for the tendency to overestimate the influence of a single trait on overall perception?",
        "options": [
            "Halo effect",
            "Primacy effect",
            "Recency effect",
            "Contrast effect"
        ],
        "answer": "Halo effect",
        "difficulty": "medium",
        "topic": "Social Psychology",
        "explanation": "The halo effect occurs when a single positive or negative trait influences the overall perception of a person or object."
    },
    {
        "id": 250,
        "question": "In cyberpsychology, what is the term for the loss of self-awareness in online environments?",
        "options": [
            "Online disinhibition",
            "Digital anonymity",
            "Virtual deindividuation",
            "Cyber dissociation"
        ],
        "answer": "Online disinhibition",
        "difficulty": "medium",
        "topic": "Cyberpsychology",
        "explanation": "Online disinhibition refers to reduced self-awareness and restraint in online interactions, often due to anonymity."
    },
    {
        "id": 251,
        "question": "Which research method involves analyzing existing data to identify patterns?",
        "options": [
            "Meta-analysis",
            "Case study",
            "Survey",
            "Experiment"
        ],
        "answer": "Meta-analysis",
        "difficulty": "medium",
        "topic": "Research Methods",
        "explanation": "Meta-analysis combines and analyzes data from multiple studies to identify trends and draw robust conclusions."
    },
    {
        "id": 252,
        "question": "In classical conditioning, what is the term for responding only to a specific stimulus?",
        "options": [
            "Generalization",
            "Discrimination",
            "Extinction",
            "Spontaneous recovery"
        ],
        "answer": "Discrimination",
        "difficulty": "medium",
        "topic": "Learning and Conditioning",
        "explanation": "Discrimination involves learning to respond only to a specific conditioned stimulus and not to similar stimuli."
    },
    {
        "id": 253,
        "question": "Which motivation theory emphasizes external rewards and punishments?",
        "options": [
            "Self-determination theory",
            "Expectancy theory",
            "Behaviorist theory",
            "Instinct theory"
        ],
        "answer": "Behaviorist theory",
        "difficulty": "medium",
        "topic": "Motivation and Emotion",
        "explanation": "Behaviorist theory, associated with Skinner, emphasizes external rewards and punishments as motivators for behavior."
    },
    {
        "id": 254,
        "question": "In industrial/organizational psychology, what is the term for reduced productivity due to low morale?",
        "options": [
            "Job dissatisfaction",
            "Absenteeism",
            "Turnover",
            "Presenteeism"
        ],
        "answer": "Presenteeism",
        "difficulty": "medium",
        "topic": "Applied Psychology",
        "explanation": "Presenteeism occurs when employees are physically present but less productive due to low morale, stress, or health issues."
    },
    {
        "id": 255,
        "question": "Which type of memory briefly holds visual sensory information?",
        "options": [
            "Iconic memory",
            "Echoic memory",
            "Short-term memory",
            "Long-term memory"
        ],
        "answer": "Iconic memory",
        "difficulty": "medium",
        "topic": "Memory",
        "explanation": "Iconic memory is a type of sensory memory that briefly retains visual information for about 0.5 seconds."
    },
    {
        "id": 256,
        "question": "In Sternberg’s theory, which intelligence involves logical reasoning and problem-solving?",
        "options": [
            "Creative intelligence",
            "Practical intelligence",
            "Analytical intelligence",
            "Emotional intelligence"
        ],
        "answer": "Analytical intelligence",
        "difficulty": "easy",
        "topic": "Cognition and Intelligence",
        "explanation": "Analytical intelligence involves logical reasoning, critical thinking, and solving well-defined problems."
    },
    {
        "id": 257,
        "question": "Which physiological system is activated during chronic stress to release cortisol?",
        "options": [
            "Sympathetic nervous system",
            "Hypothalamic-pituitary-adrenal axis",
            "Parasympathetic nervous system",
            "Somatic nervous system"
        ],
        "answer": "Hypothalamic-pituitary-adrenal axis",
        "difficulty": "hard",
        "topic": "Health and Stress Psychology",
        "explanation": "The HPA axis regulates cortisol release during chronic stress, impacting immune function and metabolism."
    },
    {
        "id": 258,
        "question": "Which disorder is characterized by a lack of interest in social relationships and flat affect?",
        "options": [
            "Schizoid personality disorder",
            "Schizotypal personality disorder",
            "Avoidant personality disorder",
            "Antisocial personality disorder"
        ],
        "answer": "Schizoid personality disorder",
        "difficulty": "medium",
        "topic": "Psychological Disorders",
        "explanation": "Schizoid personality disorder involves social detachment, limited emotional expression, and preference for solitary activities."
    },
    {
        "id": 259,
        "question": "What is the term for the tendency to perform better on simple tasks when others are present?",
        "options": [
            "Social loafing",
            "Social facilitation",
            "Groupthink",
            "Bystander effect"
        ],
        "answer": "Social facilitation",
        "difficulty": "easy",
        "topic": "Social Psychology",
        "explanation": "Social facilitation enhances performance on simple or well-learned tasks due to the presence of others, increasing arousal."
    },
    {
        "id": 260,
        "question": "In the psychology of gender, what is the term for an individual’s internal sense of being male, female, or another gender?",
        "options": [
            "Gender role",
            "Gender identity",
            "Sexual orientation",
            "Gender expression"
        ],
        "answer": "Gender identity",
        "difficulty": "easy",
        "topic": "Psychology of Gender",
        "explanation": "Gender identity is a person’s internal, deeply held sense of their gender, which may or may not align with their assigned sex."
    },
    {
        "id": 261,
        "question": "Which statistical test compares means between two groups?",
        "options": [
            "T-test",
            "ANOVA",
            "Chi-square test",
            "Correlation coefficient"
        ],
        "answer": "T-test",
        "difficulty": "medium",
        "topic": "Research Methods",
        "explanation": "A t-test compares the means of two groups to determine if they are significantly different from each other."
    },
    {
        "id": 262,
        "question": "In observational learning, what is the term for the process of watching and imitating a model?",
        "options": [
            "Reinforcement",
            "Modeling",
            "Shaping",
            "Extinction"
        ],
        "answer": "Modeling",
        "difficulty": "easy",
        "topic": "Learning and Conditioning",
        "explanation": "Modeling involves observing and imitating a model’s behavior, as demonstrated in Bandura’s social learning theory."
    },
    {
        "id": 263,
        "question": "Which motivation theory suggests that behavior is influenced by expected outcomes and value of rewards?",
        "options": [
            "Expectancy theory",
            "Drive reduction theory",
            "Arousal theory",
            "Self-determination theory"
        ],
        "answer": "Expectancy theory",
        "difficulty": "medium",
        "topic": "Motivation and Emotion",
        "explanation": "Expectancy theory posits that motivation depends on the expectation of success and the value placed on the outcome."
    },
    {
        "id": 264,
        "question": "In environmental psychology, what is the term for the psychological need to control one’s personal space?",
        "options": [
            "Proxemics",
            "Territoriality",
            "Crowding",
            "Personalization"
        ],
        "answer": "Territoriality",
        "difficulty": "medium",
        "topic": "Applied Psychology",
        "explanation": "Territoriality refers to the psychological need to claim and defend personal or shared spaces, influencing behavior."
    },
    {
        "id": 265,
        "question": "Which memory error involves recalling events differently from how they occurred?",
        "options": [
            "False memory",
            "Flashbulb memory",
            "Source amnesia",
            "Repressed memory"
        ],
        "answer": "False memory",
        "difficulty": "medium",
        "topic": "Memory",
        "explanation": "False memory involves recalling events that are distorted or entirely fabricated, often influenced by suggestion."
    },
    {
        "id": 266,
        "question": "Which brain area is critical for forming new declarative memories?",
        "options": [
            "Amygdala",
            "Hippocampus",
            "Cerebellum",
            "Prefrontal cortex"
        ],
        "answer": "Hippocampus",
        "difficulty": "easy",
        "topic": "Biological Bases",
        "explanation": "The hippocampus is essential for forming and consolidating new declarative memories, such as facts and events."
    },
    {
        "id": 267,
        "question": "In Jung’s theory, what is the term for the public face an individual presents to the world?",
        "options": [
            "Persona",
            "Shadow",
            "Anima",
            "Archetype"
        ],
        "answer": "Persona",
        "difficulty": "medium",
        "topic": "Personality Psychology",
        "explanation": "The persona is the social mask or role an individual adopts to interact with others, according to Jung’s theory."
    },
    {
        "id": 268,
        "question": "Which disorder is characterized by persistent low mood for at least two years?",
        "options": [
            "Major depressive disorder",
            "Bipolar disorder",
            "Persistent depressive disorder",
            "Seasonal affective disorder"
        ],
        "answer": "Persistent depressive disorder",
        "difficulty": "medium",
        "topic": "Psychological Disorders",
        "explanation": "Persistent depressive disorder, or dysthymia, involves chronic low mood lasting at least two years, with less severe symptoms than major depression."
    },
    {
        "id": 269,
        "question": "What is the term for the tendency to overestimate the consistency of others’ behavior across situations?",
        "options": [
            "Fundamental attribution error",
            "Self-serving bias",
            "Actor-observer bias",
            "Dispositional bias"
        ],
        "answer": "Fundamental attribution error",
        "difficulty": "medium",
        "topic": "Social Psychology",
        "explanation": "The fundamental attribution error involves overemphasizing personal traits and underestimating situational factors in others’ behavior."
    },
    {
        "id": 270,
        "question": "In artificial intelligence research, what psychological concept is used to model human-like emotional responses?",
        "options": [
            "Affect",
            "Cognition",
            "Schema",
            "Heuristic"
        ],
        "answer": "Affect",
        "difficulty": "hard",
        "topic": "Contemporary Issues",
        "explanation": "Affect, the experience of emotion, is studied in AI to develop systems that simulate human-like emotional responses."
    },
    {
        "id": 271,
        "question": "Which parenting style is characterized by high responsiveness and low demandingness?",
        "options": [
            "Authoritative",
            "Authoritarian",
            "Permissive",
            "Neglectful"
        ],
        "answer": "Permissive",
        "difficulty": "easy",
        "topic": "Developmental Psychology",
        "explanation": "Permissive parenting involves high warmth and responsiveness but low discipline, often leading to lenient child-rearing."
    },
    {
        "id": 272,
        "question": "Which sensory receptor detects mechanical pressure and vibration?",
        "options": [
            "Photoreceptors",
            "Mechanoreceptors",
            "Thermoreceptors",
            "Chemoreceptors"
        ],
        "answer": "Mechanoreceptors",
        "difficulty": "easy",
        "topic": "Sensation and Perception",
        "explanation": "Mechanoreceptors detect physical stimuli like pressure, vibration, and touch, contributing to the sense of tactile perception."
    },
    {
        "id": 273,
        "question": "In Kohlberg’s theory, which stage involves moral reasoning based on universal ethical principles?",
        "options": [
            "Preconventional",
            "Conventional",
            "Postconventional",
            "Social contract"
        ],
        "answer": "Postconventional",
        "difficulty": "medium",
        "topic": "Developmental Psychology",
        "explanation": "The postconventional stage involves moral decisions based on universal principles, such as justice and human rights."
    },
    {
        "id": 274,
        "question": "Which psychoactive drug increases alertness and energy by stimulating the central nervous system?",
        "options": [
            "Depressants",
            "Stimulants",
            "Hallucinogens",
            "Opioids"
        ],
        "answer": "Stimulants",
        "difficulty": "easy",
        "topic": "States of Consciousness",
        "explanation": "Stimulants, such as caffeine and amphetamines, enhance alertness and energy by increasing central nervous system activity."
    },
    {
        "id": 275,
        "question": "What is the term for the perceptual error where objects appear closer due to atmospheric haze?",
        "options": [
            "Linear perspective",
            "Aerial perspective",
            "Monocular cue",
            "Binocular disparity"
        ],
        "answer": "Aerial perspective",
        "difficulty": "medium",
        "topic": "Sensation and Perception",
        "explanation": "Aerial perspective is a depth cue where distant objects appear hazier or bluer due to atmospheric scattering of light."
    },
    {
        "id": 276,
        "question": "Which hormone is released during social bonding and childbirth?",
        "options": [
            "Oxytocin",
            "Cortisol",
            "Adrenaline",
            "Testosterone"
        ],
        "answer": "Oxytocin",
        "difficulty": "easy",
        "topic": "Biological Bases",
        "explanation": "Oxytocin, often called the ‘love hormone,’ is released during social bonding, childbirth, and breastfeeding, promoting attachment."
    },
    {
        "id": 277,
        "question": "In consumer psychology, what is the term for discomfort from conflicting purchase decisions?",
        "options": [
            "Buyer’s remorse",
            "Cognitive dissonance",
            "Post-purchase regret",
            "Decision fatigue"
        ],
        "answer": "Cognitive dissonance",
        "difficulty": "medium",
        "topic": "Applied Psychology",
        "explanation": "Cognitive dissonance occurs when conflicting beliefs or choices, such as a costly purchase, cause psychological discomfort."
    },
    {
        "id": 278,
        "question": "Which therapy approach emphasizes non-directive, empathetic listening to foster self-discovery?",
        "options": [
            "Psychoanalysis",
            "Cognitive-behavioral therapy",
            "Humanistic therapy",
            "Behavioral therapy"
        ],
        "answer": "Humanistic therapy",
        "difficulty": "easy",
        "topic": "Therapies and Treatment",
        "explanation": "Humanistic therapy, developed by Rogers, uses empathetic, non-directive techniques to support clients’ self-discovery and growth."
    },
    {
        "id": 279,
        "question": "What is the term for the tendency to avoid helping due to the presence of others?",
        "options": [
            "Social loafing",
            "Bystander effect",
            "Group polarization",
            "Social facilitation"
        ],
        "answer": "Bystander effect",
        "difficulty": "easy",
        "topic": "Social Psychology",
        "explanation": "The bystander effect occurs when individuals are less likely to help in an emergency when others are present, due to diffusion of responsibility."
    },
    {
        "id": 280,
        "question": "In cross-cultural psychology, what is the term for maintaining one’s original culture while avoiding the dominant culture?",
        "options": [
            "Integration",
            "Assimilation",
            "Separation",
            "Marginalization"
        ],
        "answer": "Separation",
        "difficulty": "medium",
        "topic": "Cultural Psychology",
        "explanation": "Separation involves retaining one’s original cultural identity while avoiding interaction with or adoption of the dominant culture."
    },
    {
        "id": 281,
        "question": "Which research method uses open-ended questions to explore subjective experiences?",
        "options": [
            "Quantitative research",
            "Qualitative research",
            "Experimental research",
            "Correlational research"
        ],
        "answer": "Qualitative research",
        "difficulty": "easy",
        "topic": "Research Methods",
        "explanation": "Qualitative research uses open-ended methods, like interviews, to explore subjective experiences and meanings."
    },
    {
        "id": 282,
        "question": "In operant conditioning, what is the term for gradually reinforcing closer approximations of a behavior?",
        "options": [
            "Shaping",
            "Extinction",
            "Generalization",
            "Discrimination"
        ],
        "answer": "Shaping",
        "difficulty": "medium",
        "topic": "Learning and Conditioning",
        "explanation": "Shaping involves reinforcing successive approximations of a desired behavior until the target behavior is achieved."
    },
    {
        "id": 283,
        "question": "Which motivation theory suggests that humans are driven by innate biological instincts?",
        "options": [
            "Instinct theory",
            "Drive reduction theory",
            "Arousal theory",
            "Self-determination theory"
        ],
        "answer": "Instinct theory",
        "difficulty": "easy",
        "topic": "Motivation and Emotion",
        "explanation": "Instinct theory posits that behaviors are motivated by innate, biologically determined instincts, such as survival or reproduction."
    },
    {
        "id": 284,
        "question": "In military psychology, what is the term for the psychological evaluation of personnel for leadership roles?",
        "options": [
            "Fitness assessment",
            "Selection screening",
            "Performance appraisal",
            "Combat readiness"
        ],
        "answer": "Selection screening",
        "difficulty": "medium",
        "topic": "Applied Psychology",
        "explanation": "Selection screening assesses psychological traits, such as resilience and decision-making, to identify suitable candidates for leadership roles."
    },
    {
        "id": 285,
        "question": "Which memory process involves accessing stored information for use?",
        "options": [
            "Encoding",
            "Storage",
            "Retrieval",
            "Consolidation"
        ],
        "answer": "Retrieval",
        "difficulty": "easy",
        "topic": "Memory",
        "explanation": "Retrieval is the process of accessing and recalling information stored in memory for current use."
    },
    {
        "id": 286,
        "question": "Which brain area is responsible for planning and decision-making?",
        "options": [
            "Prefrontal cortex",
            "Occipital cortex",
            "Temporal cortex",
            "Parietal cortex"
        ],
        "answer": "Prefrontal cortex",
        "difficulty": "easy",
        "topic": "Biological Bases",
        "explanation": "The prefrontal cortex is critical for executive functions, including planning, decision-making, and impulse control."
    },
    {
        "id": 287,
        "question": "In Rogers’ theory, what is the term for alignment between one’s real and ideal self?",
        "options": [
            "Congruence",
            "Self-actualization",
            "Unconditional positive regard",
            "Self-efficacy"
        ],
        "answer": "Congruence",
        "difficulty": "medium",
        "topic": "Personality Psychology",
        "explanation": "Congruence occurs when an individual’s real self (how they are) aligns with their ideal self (how they want to be), fostering psychological health."
    },
    {
        "id": 288,
        "question": "Which disorder is characterized by intense fear and avoidance of specific objects or situations?",
        "options": [
            "Phobia",
            "Panic disorder",
            "Generalized anxiety disorder",
            "Social anxiety disorder"
        ],
        "answer": "Phobia",
        "difficulty": "easy",
        "topic": "Psychological Disorders",
        "explanation": "A phobia is an irrational, intense fear of a specific object or situation, leading to avoidance behavior."
    },
    {
        "id": 289,
        "question": "What is the term for the tendency to attribute one’s own negative behaviors to external factors?",
        "options": [
            "Self-serving bias",
            "Fundamental attribution error",
            "Actor-observer bias",
            "Halo effect"
        ],
        "answer": "Actor-observer bias",
        "difficulty": "medium",
        "topic": "Social Psychology",
        "explanation": "The actor-observer bias involves attributing one’s own actions to external factors while attributing others’ actions to internal traits."
    },
    {
        "id": 290,
        "question": "In artificial intelligence, what psychological concept is modeled to simulate human memory processes?",
        "options": [
            "Neural networks",
            "Schemas",
            "Reflexes",
            "Instincts"
        ],
        "answer": "Neural networks",
        "difficulty": "hard",
        "topic": "Contemporary Issues",
        "explanation": "Neural networks in AI are designed to mimic human memory processes by simulating interconnected neurons for learning and recall."
    },
    {
        "id": 291,
        "question": "Which parenting style balances high demandingness with high responsiveness?",
        "options": [
            "Authoritative",
            "Authoritarian",
            "Permissive",
            "Neglectful"
        ],
        "answer": "Authoritative",
        "difficulty": "easy",
        "topic": "Developmental Psychology",
        "explanation": "Authoritative parenting combines high expectations with warmth and support, promoting healthy development."
    },
    {
        "id": 292,
        "question": "Which sensory receptor detects chemical substances in the air?",
        "options": [
            "Photoreceptors",
            "Mechanoreceptors",
            "Chemoreceptors",
            "Nociceptors"
        ],
        "answer": "Chemoreceptors",
        "difficulty": "easy",
        "topic": "Sensation and Perception",
        "explanation": "Chemoreceptors in the olfactory system detect chemical substances, enabling the sense of smell."
    },
    {
        "id": 293,
        "question": "In Erikson’s theory, which stage involves contributing to society in middle adulthood?",
        "options": [
            "Intimacy vs. Isolation",
            "Generativity vs. Stagnation",
            "Identity vs. Role Confusion",
            "Integrity vs. Despair"
        ],
        "answer": "Generativity vs. Stagnation",
        "difficulty": "medium",
        "topic": "Developmental Psychology",
        "explanation": "The Generativity vs. Stagnation stage (middle adulthood) involves contributing to society or feeling unproductive."
    },
    {
        "id": 294,
        "question": "Which psychoactive drug reduces pain and induces euphoria by binding to opioid receptors?",
        "options": [
            "Stimulants",
            "Depressants",
            "Hallucinogens",
            "Opioids"
        ],
        "answer": "Opioids",
        "difficulty": "easy",
        "topic": "States of Consciousness",
        "explanation": "Opioids, such as morphine and heroin, relieve pain and produce euphoria by activating opioid receptors in the brain."
    },
    {
        "id": 295,
        "question": "What is the term for the perceptual tendency to group objects that are close together?",
        "options": [
            "Proximity",
            "Similarity",
            "Continuity",
            "Closure"
        ],
        "answer": "Proximity",
        "difficulty": "medium",
        "topic": "Sensation and Perception",
        "explanation": "The Gestalt principle of proximity states that objects close to each other are perceived as a group or unit."
    },
    {
        "id": 296,
        "question": "Which hormone regulates metabolism and energy balance in the body?",
        "options": [
            "Thyroxine",
            "Adrenaline",
            "Oxytocin",
            "Melatonin"
        ],
        "answer": "Thyroxine",
        "difficulty": "medium",
        "topic": "Biological Bases",
        "explanation": "Thyroxine, produced by the thyroid gland, regulates metabolism, growth, and energy balance in the body."
    },
    {
        "id": 297,
        "question": "In consumer psychology, what is the term for the tendency to continue purchasing from a brand due to past investment?",
        "options": [
            "Brand loyalty",
            "Sunk cost fallacy",
            "Cognitive dissonance",
            "Mere exposure effect"
        ],
        "answer": "Sunk cost fallacy",
        "difficulty": "medium",
        "topic": "Applied Psychology",
        "explanation": "The sunk cost fallacy leads consumers to continue investing in a brand due to prior time or money spent, despite diminishing returns."
    },
    {
        "id": 298,
        "question": "Which therapy technique involves confronting a feared stimulus all at once to reduce anxiety?",
        "options": [
            "Systematic desensitization",
            "Flooding",
            "Aversion therapy",
            "Exposure therapy"
        ],
        "answer": "Flooding",
        "difficulty": "medium",
        "topic": "Therapies and Treatment",
        "explanation": "Flooding exposes individuals to their feared stimulus intensely and immediately to extinguish the anxiety response."
    },
    {
        "id": 299,
        "question": "What is the term for the tendency to favor one’s own group over others?",
        "options": [
            "Ingroup bias",
            "Outgroup homogeneity",
            "Ethnocentrism",
            "Stereotyping"
        ],
        "answer": "Ingroup bias",
        "difficulty": "easy",
        "topic": "Social Psychology",
        "explanation": "Ingroup bias involves favoring members of one’s own group, often leading to prejudice against outgroups."
    },
    {
        "id": 300,
        "question": "In cross-cultural psychology, what is the term for having no strong connection to any culture?",
        "options": [
            "Integration",
            "Assimilation",
            "Separation",
            "Marginalization"
        ],
        "answer": "Marginalization",
        "difficulty": "medium",
        "topic": "Cultural Psychology",
        "explanation": "Marginalization occurs when individuals lack strong ties to either their original or the dominant culture, often leading to isolation."
    },
    {
        "id": 301,
        "question": "Which psychological perspective focuses on unconscious drives and early childhood experiences?",
        "options": [
            "Behavioral",
            "Psychodynamic",
            "Humanistic",
            "Cognitive"
        ],
        "answer": "Psychodynamic",
        "difficulty": "easy",
        "topic": "Introduction to Psychology",
        "explanation": "The psychodynamic perspective, rooted in Freud’s work, emphasizes unconscious motivations and early childhood experiences as drivers of behavior."
    },
    {
        "id": 302,
        "question": "What is the term for a research study that uses numerical data to test hypotheses?",
        "options": [
            "Qualitative research",
            "Quantitative research",
            "Case study",
            "Observational study"
        ],
        "answer": "Quantitative research",
        "difficulty": "easy",
        "topic": "Research Methods",
        "explanation": "Quantitative research involves collecting and analyzing numerical data to test hypotheses, often using statistical methods."
    },
    {
        "id": 303,
        "question": "Which part of the neuron transmits signals to other neurons or muscles?",
        "options": [
            "Dendrite",
            "Axon",
            "Soma",
            "Synapse"
        ],
        "answer": "Axon",
        "difficulty": "easy",
        "topic": "Biological Bases",
        "explanation": "The axon is the long, slender projection of a neuron that conducts electrical impulses away from the cell body to other neurons or muscles."
    },
    {
        "id": 304,
        "question": "What is the term for the minimum intensity required for a stimulus to be detected?",
        "options": [
            "Absolute threshold",
            "Difference threshold",
            "Sensory adaptation",
            "Signal detection"
        ],
        "answer": "Absolute threshold",
        "difficulty": "easy",
        "topic": "Sensation and Perception",
        "explanation": "The absolute threshold is the minimum stimulus intensity needed to detect a stimulus 50% of the time."
    },
    {
        "id": 305,
        "question": "Which brain wave is associated with deep, non-REM sleep?",
        "options": [
            "Alpha waves",
            "Beta waves",
            "Theta waves",
            "Delta waves"
        ],
        "answer": "Delta waves",
        "difficulty": "medium",
        "topic": "States of Consciousness",
        "explanation": "Delta waves, characterized by low frequency and high amplitude, are prevalent during deep, restorative non-REM sleep (Stage 3)."
    },
    {
        "id": 306,
        "question": "In Erikson’s theory, which stage occurs during adolescence and focuses on identity formation?",
        "options": [
            "Trust vs. Mistrust",
            "Identity vs. Role Confusion",
            "Intimacy vs. Isolation",
            "Generativity vs. Stagnation"
        ],
        "answer": "Identity vs. Role Confusion",
        "difficulty": "medium",
        "topic": "Developmental Psychology",
        "explanation": "During adolescence, the Identity vs. Role Confusion stage involves exploring personal identity or risking confusion about one’s role in society."
    },
    {
        "id": 307,
        "question": "In classical conditioning, what is the term for a stimulus that initially has no effect but later elicits a response?",
        "options": [
            "Unconditioned stimulus",
            "Conditioned stimulus",
            "Neutral stimulus",
            "Unconditioned response"
        ],
        "answer": "Neutral stimulus",
        "difficulty": "easy",
        "topic": "Learning and Conditioning",
        "explanation": "A neutral stimulus does not initially trigger a response but becomes a conditioned stimulus after pairing with an unconditioned stimulus."
    },
    {
        "id": 308,
        "question": "Which memory system holds information for a few seconds before it is processed further?",
        "options": [
            "Sensory memory",
            "Short-term memory",
            "Long-term memory",
            "Working memory"
        ],
        "answer": "Sensory memory",
        "difficulty": "easy",
        "topic": "Memory",
        "explanation": "Sensory memory briefly holds raw sensory information (e.g., iconic or echoic memory) before it is transferred or lost."
    },
    {
        "id": 309,
        "question": "In Sternberg’s triarchic theory, which intelligence involves adapting to new environments?",
        "options": [
            "Analytical intelligence",
            "Creative intelligence",
            "Practical intelligence",
            "Verbal intelligence"
        ],
        "answer": "Practical intelligence",
        "difficulty": "medium",
        "topic": "Cognition and Intelligence",
        "explanation": "Practical intelligence involves adapting to and navigating real-world environments effectively, often called ‘street smarts.’"
    },
    {
        "id": 310,
        "question": "According to Maslow’s hierarchy, which need involves belonging and social connections?",
        "options": [
            "Physiological needs",
            "Safety needs",
            "Love and belonging needs",
            "Esteem needs"
        ],
        "answer": "Love and belonging needs",
        "difficulty": "easy",
        "topic": "Motivation and Emotion",
        "explanation": "Love and belonging needs, the third level in Maslow’s hierarchy, involve forming relationships and feeling connected to others."
    },
    {
        "id": 311,
        "question": "In the Big Five personality model, which trait reflects emotional stability?",
        "options": [
            "Openness",
            "Conscientiousness",
            "Extraversion",
            "Neuroticism"
        ],
        "answer": "Neuroticism",
        "difficulty": "medium",
        "topic": "Personality Psychology",
        "explanation": "Neuroticism measures emotional stability, with low scores indicating calmness and high scores indicating anxiety or moodiness."
    },
    {
        "id": 312,
        "question": "Which anxiety disorder involves excessive worry about multiple events for at least six months?",
        "options": [
            "Phobia",
            "Panic disorder",
            "Generalized anxiety disorder",
            "Obsessive-compulsive disorder"
        ],
        "answer": "Generalized anxiety disorder",
        "difficulty": "easy",
        "topic": "Psychological Disorders",
        "explanation": "Generalized anxiety disorder is characterized by chronic, excessive worry about various aspects of life, lasting at least six months."
    },
    {
        "id": 313,
        "question": "Which therapy approach uses role-playing and homework to address maladaptive behaviors?",
        "options": [
            "Psychoanalysis",
            "Humanistic therapy",
            "Cognitive-behavioral therapy",
            "Group therapy"
        ],
        "answer": "Cognitive-behavioral therapy",
        "difficulty": "easy",
        "topic": "Therapies and Treatment",
        "explanation": "Cognitive-behavioral therapy (CBT) employs techniques like role-playing and homework to modify dysfunctional thoughts and behaviors."
    },
    {
        "id": 314,
        "question": "What is the term for the tendency to conform to group norms to avoid social rejection?",
        "options": [
            "Obedience",
            "Conformity",
            "Compliance",
            "Groupthink"
        ],
        "answer": "Conformity",
        "difficulty": "easy",
        "topic": "Social Psychology",
        "explanation": "Conformity involves adjusting one’s behavior or beliefs to align with group norms, often to gain acceptance or avoid rejection."
    },
    {
        "id": 315,
        "question": "Which stress response promotes social bonding and nurturing behaviors under threat?",
        "options": [
            "Fight-or-flight",
            "Freeze response",
            "Tend-and-befriend",
            "Surrender response"
        ],
        "answer": "Tend-and-befriend",
        "difficulty": "medium",
        "topic": "Health and Stress Psychology",
        "explanation": "Tend-and-befriend is a stress response, often observed in females, that involves nurturing and seeking social support to cope with stress."
    },
    {
        "id": 316,
        "question": "In educational psychology, what is the term for adapting teaching to diverse student needs?",
        "options": [
            "Behavior modification",
            "Differentiated instruction",
            "Collaborative learning",
            "Standardized assessment"
        ],
        "answer": "Differentiated instruction",
        "difficulty": "easy",
        "topic": "Applied Psychology",
        "explanation": "Differentiated instruction tailors teaching methods and materials to accommodate students’ diverse learning styles and abilities."
    },
    {
        "id": 317,
        "question": "In cyberpsychology, what is the term for excessive reliance on social media for validation?",
        "options": [
            "Digital addiction",
            "Social media dependency",
            "Online disinhibition",
            "Cyber narcissism"
        ],
        "answer": "Social media dependency",
        "difficulty": "medium",
        "topic": "Contemporary Issues",
        "explanation": "Social media dependency involves excessive use of platforms to seek validation, often impacting mental health and productivity."
    },
    {
        "id": 318,
        "question": "Which ethical principle requires researchers to provide a full explanation after a study?",
        "options": [
            "Informed consent",
            "Confidentiality",
            "Debriefing",
            "Beneficence"
        ],
        "answer": "Debriefing",
        "difficulty": "easy",
        "topic": "Research Methods",
        "explanation": "Debriefing involves providing participants with a full explanation of the study’s purpose and results after participation."
    },
    {
        "id": 319,
        "question": "Which neurotransmitter facilitates muscle movement and is reduced in Parkinson’s disease?",
        "options": [
            "Serotonin",
            "Dopamine",
            "GABA",
            "Acetylcholine"
        ],
        "answer": "Dopamine",
        "difficulty": "medium",
        "topic": "Biological Bases",
        "explanation": "Dopamine is critical for motor control, and its reduction in the substantia nigra leads to Parkinson’s disease symptoms like tremors."
    },
    {
        "id": 320,
        "question": "What is the term for the perceptual organization of objects into foreground and background?",
        "options": [
            "Figure-ground",
            "Closure",
            "Proximity",
            "Similarity"
        ],
        "answer": "Figure-ground",
        "difficulty": "easy",
        "topic": "Sensation and Perception",
        "explanation": "Figure-ground organization is a Gestalt principle where the brain distinguishes an object (figure) from its surroundings (ground)."
    },
    {
        "id": 321,
        "question": "Which sleep disorder involves involuntary movements during sleep preparation?",
        "options": [
            "Insomnia",
            "Narcolepsy",
            "Restless legs syndrome",
            "Sleep apnea"
        ],
        "answer": "Restless legs syndrome",
        "difficulty": "medium",
        "topic": "States of Consciousness",
        "explanation": "Restless legs syndrome causes uncomfortable sensations and an urge to move the legs, often disrupting sleep onset."
    },
    {
        "id": 322,
        "question": "In Kohlberg’s theory, which stage involves moral reasoning based on social approval?",
        "options": [
            "Preconventional",
            "Conventional",
            "Postconventional",
            "Obedience"
        ],
        "answer": "Conventional",
        "difficulty": "medium",
        "topic": "Developmental Psychology",
        "explanation": "In the conventional stage, moral decisions are based on social norms and approval from others, typical of adolescents and adults."
    },
    {
        "id": 323,
        "question": "In operant conditioning, what is the term for increasing a behavior by adding a desirable stimulus?",
        "options": [
            "Positive reinforcement",
            "Negative reinforcement",
            "Positive punishment",
            "Negative punishment"
        ],
        "answer": "Positive reinforcement",
        "difficulty": "easy",
        "topic": "Learning and Conditioning",
        "explanation": "Positive reinforcement increases a behavior by providing a rewarding stimulus, such as praise for completing a task."
    },
    {
        "id": 324,
        "question": "Which memory error involves attributing a memory to the wrong source?",
        "options": [
            "False memory",
            "Source amnesia",
            "Proactive interference",
            "Retroactive interference"
        ],
        "answer": "Source amnesia",
        "difficulty": "medium",
        "topic": "Memory",
        "explanation": "Source amnesia occurs when an individual recalls information correctly but misattributes its origin, such as confusing a dream with reality."
    },
    {
        "id": 325,
        "question": "Which cognitive process involves forming mental representations of objects or events?",
        "options": [
            "Concept formation",
            "Problem-solving",
            "Decision-making",
            "Reasoning"
        ],
        "answer": "Concept formation",
        "difficulty": "medium",
        "topic": "Cognition and Intelligence",
        "explanation": "Concept formation involves organizing sensory information into mental categories or representations, such as recognizing ‘birds’ as a group."
    },
    {
        "id": 326,
        "question": "Which emotion theory suggests that facial expressions can influence emotional experience?",
        "options": [
            "James-Lange theory",
            "Cannon-Bard theory",
            "Facial feedback hypothesis",
            "Schachter-Singer theory"
        ],
        "answer": "Facial feedback hypothesis",
        "difficulty": "medium",
        "topic": "Motivation and Emotion",
        "explanation": "The facial feedback hypothesis posits that facial expressions can amplify or initiate the emotional experience, such as smiling increasing happiness."
    },
    {
        "id": 327,
        "question": "In Adler’s theory, which concept drives individuals to strive for personal excellence?",
        "options": [
            "Inferiority complex",
            "Superiority striving",
            "Compensation",
            "Birth order"
        ],
        "answer": "Superiority striving",
        "difficulty": "medium",
        "topic": "Personality Psychology",
        "explanation": "Superiority striving is Adler’s concept where individuals are motivated to overcome challenges and achieve personal goals."
    },
    {
        "id": 328,
        "question": "Which disorder involves recurrent, intrusive thoughts and repetitive behaviors?",
        "options": [
            "Generalized anxiety disorder",
            "Obsessive-compulsive disorder",
            "Post-traumatic stress disorder",
            "Social anxiety disorder"
        ],
        "answer": "Obsessive-compulsive disorder",
        "difficulty": "easy",
        "topic": "Psychological Disorders",
        "explanation": "Obsessive-compulsive disorder (OCD) involves persistent, unwanted thoughts (obsessions) and repetitive actions (compulsions) to reduce anxiety."
    },
    {
        "id": 329,
        "question": "What is the term for following orders from an authority figure, as studied by Milgram?",
        "options": [
            "Conformity",
            "Compliance",
            "Obedience",
            "Persuasion"
        ],
        "answer": "Obedience",
        "difficulty": "easy",
        "topic": "Social Psychology",
        "explanation": "Obedience involves following direct orders from an authority figure, as demonstrated in Milgram’s shock experiments."
    },
    {
        "id": 330,
        "question": "Which immune system component is suppressed by chronic stress?",
        "options": [
            "T-cells",
            "Red blood cells",
            "Platelets",
            "Hemoglobin"
        ],
        "answer": "T-cells",
        "difficulty": "hard",
        "topic": "Health and Stress Psychology",
        "explanation": "Chronic stress suppresses T-cells, key immune system components, reducing the body’s ability to fight infections, as studied in psychoneuroimmunology."
    },
    {
        "id": 331,
        "question": "In forensic psychology, what is the term for creating a psychological profile of an unknown offender?",
        "options": [
            "Risk assessment",
            "Criminal profiling",
            "Competency evaluation",
            "Victim analysis"
        ],
        "answer": "Criminal profiling",
        "difficulty": "easy",
        "topic": "Applied Psychology",
        "explanation": "Criminal profiling involves analyzing behavioral and psychological clues to create a profile of an unknown offender, aiding investigations."
    },
    {
        "id": 332,
        "question": "In positive psychology, what is the term for focusing on and relishing positive experiences?",
        "options": [
            "Savoring",
            "Flow",
            "Eudaimonia",
            "Gratitude"
        ],
        "answer": "Savoring",
        "difficulty": "medium",
        "topic": "Contemporary Issues",
        "explanation": "Savoring involves consciously enjoying and prolonging positive experiences to enhance well-being, a key concept in positive psychology."
    },
    {
        "id": 333,
        "question": "Which statistical method tests for differences across multiple groups?",
        "options": [
            "T-test",
            "ANOVA",
            "Correlation coefficient",
            "Chi-square test"
        ],
        "answer": "ANOVA",
        "difficulty": "medium",
        "topic": "Research Methods",
        "explanation": "Analysis of Variance (ANOVA) compares means across three or more groups to determine if significant differences exist."
    },
    {
        "id": 334,
        "question": "In Bandura’s theory, which factor influences whether observational learning occurs?",
        "options": [
            "Reinforcement",
            "Attention",
            "Extinction",
            "Generalization"
        ],
        "answer": "Attention",
        "difficulty": "medium",
        "topic": "Learning and Conditioning",
        "explanation": "Attention is a critical factor in Bandura’s observational learning, where individuals must focus on the model’s behavior to learn."
    },
    {
        "id": 335,
        "question": "Which brain structure modulates fear and emotional memory?",
        "options": [
            "Hippocampus",
            "Amygdala",
            "Cerebellum",
            "Thalamus"
        ],
        "answer": "Amygdala",
        "difficulty": "easy",
        "topic": "Biological Bases",
        "explanation": "The amygdala processes emotions, particularly fear, and is crucial for forming emotional memories."
    },
    {
        "id": 336,
        "question": "Which depth cue relies on the overlap of objects in the visual field?",
        "options": [
            "Linear perspective",
            "Interposition",
            "Texture gradient",
            "Motion parallax"
        ],
        "answer": "Interposition",
        "difficulty": "medium",
        "topic": "Sensation and Perception",
        "explanation": "Interposition is a monocular depth cue where one object partially covers another, indicating the covered object is farther away."
    },
    {
        "id": 337,
        "question": "Which meditation practice focuses on non-judgmental awareness of the present moment?",
        "options": [
            "Transcendental meditation",
            "Mindfulness meditation",
            "Guided meditation",
            "Mantra meditation"
        ],
        "answer": "Mindfulness meditation",
        "difficulty": "easy",
        "topic": "States of Consciousness",
        "explanation": "Mindfulness meditation involves maintaining non-judgmental awareness of thoughts, feelings, and sensations in the present moment."
    },
    {
        "id": 338,
        "question": "In attachment theory, which style is characterized by trust and comfort with intimacy?",
        "options": [
            "Secure attachment",
            "Avoidant attachment",
            "Anxious-ambivalent attachment",
            "Disorganized attachment"
        ],
        "answer": "Secure attachment",
        "difficulty": "easy",
        "topic": "Developmental Psychology",
        "explanation": "Secure attachment, developed through consistent caregiving, results in trust and ease with close relationships."
    },
    {
        "id": 339,
        "question": "Which memory technique involves associating new information with vivid mental images?",
        "options": [
            "Chunking",
            "Method of loci",
            "Rehearsal",
            "Elaborative encoding"
        ],
        "answer": "Method of loci",
        "difficulty": "medium",
        "topic": "Memory",
        "explanation": "The method of loci uses vivid mental imagery to associate information with specific locations, enhancing recall."
    },
    {
        "id": 340,
        "question": "Which cognitive bias involves relying on the first piece of information encountered?",
        "options": [
            "Availability heuristic",
            "Anchoring bias",
            "Confirmation bias",
            "Framing effect"
        ],
        "answer": "Anchoring bias",
        "difficulty": "medium",
        "topic": "Cognition and Intelligence",
        "explanation": "Anchoring bias occurs when individuals rely heavily on the first piece of information (the ‘anchor’) when making decisions."
    },
    {
        "id": 341,
        "question": "Which motivation theory emphasizes achieving self-concordant goals?",
        "options": [
            "Self-determination theory",
            "Drive reduction theory",
            "Arousal theory",
            "Expectancy theory"
        ],
        "answer": "Self-determination theory",
        "difficulty": "medium",
        "topic": "Motivation and Emotion",
        "explanation": "Self-determination theory focuses on intrinsic motivation and achieving goals aligned with one’s values and interests."
    },
    {
        "id": 342,
        "question": "In the Big Five model, which trait is associated with curiosity and creativity?",
        "options": [
            "Agreeableness",
            "Openness",
            "Conscientiousness",
            "Extraversion"
        ],
        "answer": "Openness",
        "difficulty": "easy",
        "topic": "Personality Psychology",
        "explanation": "Openness reflects a tendency toward creativity, curiosity, and openness to new experiences in the Big Five model."
    },
    {
        "id": 343,
        "question": "Which psychotic disorder involves delusions, hallucinations, and disorganized thinking?",
        "options": [
            "Schizophrenia",
            "Bipolar disorder",
            "Major depressive disorder",
            "Delusional disorder"
        ],
        "answer": "Schizophrenia",
        "difficulty": "easy",
        "topic": "Psychological Disorders",
        "explanation": "Schizophrenia is characterized by symptoms like delusions, hallucinations, disorganized speech, and impaired functioning."
    },
    {
        "id": 344,
        "question": "Which biological treatment uses electrical currents to treat severe depression?",
        "options": [
            "Psychopharmacology",
            "Electroconvulsive therapy",
            "Deep brain stimulation",
            "Transcranial magnetic stimulation"
        ],
        "answer": "Electroconvulsive therapy",
        "difficulty": "medium",
        "topic": "Therapies and Treatment",
        "explanation": "Electroconvulsive therapy (ECT) uses controlled electrical currents to induce seizures, effectively treating severe depression."
    },
    {
        "id": 345,
        "question": "What is the term for the tendency to judge others’ actions as intentional rather than situational?",
        "options": [
            "Self-serving bias",
            "Fundamental attribution error",
            "Actor-observer bias",
            "Halo effect"
        ],
        "answer": "Fundamental attribution error",
        "difficulty": "medium",
        "topic": "Social Psychology",
        "explanation": "The fundamental attribution error involves overemphasizing dispositional factors and underestimating situational factors in others’ behaviors."
    },
    {
        "id": 346,
        "question": "Which health behavior model emphasizes perceived benefits and barriers to action?",
        "options": [
            "Transtheoretical model",
            "Health belief model",
            "Theory of planned behavior",
            "Social cognitive theory"
        ],
        "answer": "Health belief model",
        "difficulty": "medium",
        "topic": "Health and Stress Psychology",
        "explanation": "The health belief model predicts health behaviors based on perceived benefits, barriers, susceptibility, and severity of a health issue."
    },
    {
        "id": 347,
        "question": "In industrial/organizational psychology, what is the term for aligning employee goals with organizational objectives?",
        "options": [
            "Job satisfaction",
            "Goal-setting theory",
            "Organizational commitment",
            "Performance appraisal"
        ],
        "answer": "Goal-setting theory",
        "difficulty": "medium",
        "topic": "Applied Psychology",
        "explanation": "Goal-setting theory involves aligning individual employee goals with organizational objectives to enhance motivation and performance."
    },
    {
        "id": 348,
        "question": "In the psychology of sexuality, what is the term for an individual’s enduring pattern of attraction?",
        "options": [
            "Gender identity",
            "Sexual orientation",
            "Sexual behavior",
            "Gender role"
        ],
        "answer": "Sexual orientation",
        "difficulty": "easy",
        "topic": "Contemporary Issues",
        "explanation": "Sexual orientation refers to a person’s enduring pattern of emotional, romantic, or sexual attraction to others, such as heterosexual or homosexual."
    },
    {
        "id": 349,
        "question": "Which variable is measured to assess the outcome of an experimental study?",
        "options": [
            "Independent variable",
            "Dependent variable",
            "Confounding variable",
            "Control variable"
        ],
        "answer": "Dependent variable",
        "difficulty": "easy",
        "topic": "Research Methods",
        "explanation": "The dependent variable is the outcome measured in an experiment to assess the effect of the independent variable."
    },
    {
        "id": 350,
        "question": "Which neurotransmitter inhibits neural activity to promote relaxation?",
        "options": [
            "Dopamine",
            "Serotonin",
            "GABA",
            "Norepinephrine"
        ],
        "answer": "GABA",
        "difficulty": "medium",
        "topic": "Biological Bases",
        "explanation": "Gamma-aminobutyric acid (GABA) is an inhibitory neurotransmitter that reduces neural activity, promoting relaxation and reducing anxiety."
    },
    {
        "id": 351,
        "question": "Which perceptual disorder involves perceiving objects as distorted in size or shape?",
        "options": [
            "Agnosia",
            "Prosopagnosia",
            "Micropsia",
            "Synesthesia"
        ],
        "answer": "Micropsia",
        "difficulty": "hard",
        "topic": "Sensation and Perception",
        "explanation": "Micropsia is a perceptual disorder where objects appear smaller or distorted, often associated with neurological conditions."
    },
    {
        "id": 352,
        "question": "Which stage of sleep involves vivid dreams and muscle paralysis?",
        "options": [
            "Stage 1",
            "Stage 2",
            "Stage 3",
            "REM sleep"
        ],
        "answer": "REM sleep",
        "difficulty": "easy",
        "topic": "States of Consciousness",
        "explanation": "REM (Rapid Eye Movement) sleep is characterized by vivid dreaming, rapid eye movements, and muscle paralysis to prevent acting out dreams."
    },
    {
        "id": 353,
        "question": "In Piaget’s theory, which stage involves logical thinking about concrete events?",
        "options": [
            "Sensorimotor",
            "Preoperational",
            "Concrete operational",
            "Formal operational"
        ],
        "answer": "Concrete operational",
        "difficulty": "medium",
        "topic": "Developmental Psychology",
        "explanation": "The concrete operational stage (ages 7–11) involves logical reasoning about concrete objects and events, such as conservation."
    },
    {
        "id": 354,
        "question": "In operant conditioning, what is the term for a stimulus that signals the availability of reinforcement?",
        "options": [
            "Discriminative stimulus",
            "Conditioned stimulus",
            "Unconditioned stimulus",
            "Neutral stimulus"
        ],
        "answer": "Discriminative stimulus",
        "difficulty": "medium",
        "topic": "Learning and Conditioning",
        "explanation": "A discriminative stimulus signals that a specific behavior will be reinforced, guiding the organism’s actions."
    },
    {
        "id": 355,
        "question": "Which memory system is responsible for storing autobiographical events?",
        "options": [
            "Procedural memory",
            "Semantic memory",
            "Episodic memory",
            "Implicit memory"
        ],
        "answer": "Episodic memory",
        "difficulty": "easy",
        "topic": "Memory",
        "explanation": "Episodic memory stores personal experiences and specific events, such as memories of a birthday celebration."
    },
    {
        "id": 356,
        "question": "Which cognitive process involves generating multiple solutions to a problem?",
        "options": [
            "Convergent thinking",
            "Divergent thinking",
            "Deductive reasoning",
            "Inductive reasoning"
        ],
        "answer": "Divergent thinking",
        "difficulty": "medium",
        "topic": "Cognition and Intelligence",
        "explanation": "Divergent thinking involves generating multiple, creative solutions to a problem, often associated with creativity."
    },
    {
        "id": 357,
        "question": "Which motivation theory emphasizes biological drives like hunger and thirst?",
        "options": [
            "Drive reduction theory",
            "Arousal theory",
            "Self-determination theory",
            "Instinct theory"
        ],
        "answer": "Drive reduction theory",
        "difficulty": "easy",
        "topic": "Motivation and Emotion",
        "explanation": "Drive reduction theory suggests that behaviors are motivated by the need to reduce internal biological drives, such as hunger."
    },
    {
        "id": 358,
        "question": "In Freud’s theory, which defense mechanism involves refusing to acknowledge a painful reality?",
        "options": [
            "Repression",
            "Denial",
            "Projection",
            "Sublimation"
        ],
        "answer": "Denial",
        "difficulty": "easy",
        "topic": "Personality Psychology",
        "explanation": "Denial is a defense mechanism where individuals refuse to accept or acknowledge a painful or threatening reality."
    },
    {
        "id": 359,
        "question": "Which mood disorder involves a single episode of severe depression?",
        "options": [
            "Bipolar disorder",
            "Major depressive disorder",
            "Persistent depressive disorder",
            "Cyclothymic disorder"
        ],
        "answer": "Major depressive disorder",
        "difficulty": "easy",
        "topic": "Psychological Disorders",
        "explanation": "Major depressive disorder involves at least one major depressive episode, characterized by severe low mood and loss of interest."
    },
    {
        "id": 360,
        "question": "Which therapy approach involves multiple individuals addressing shared issues?",
        "options": [
            "Individual therapy",
            "Group therapy",
            "Family therapy",
            "Couples therapy"
        ],
        "answer": "Group therapy",
        "difficulty": "easy",
        "topic": "Therapies and Treatment",
        "explanation": "Group therapy involves multiple individuals with similar issues working together under a therapist’s guidance to share and address concerns."
    },
    {
        "id": 361,
        "question": "What is the term for aggressive behavior intended to harm others?",
        "options": [
            "Prosocial behavior",
            "Aggression",
            "Altruism",
            "Conformity"
        ],
        "answer": "Aggression",
        "difficulty": "easy",
        "topic": "Social Psychology",
        "explanation": "Aggression involves behaviors intended to cause physical or psychological harm to others, influenced by biological and social factors."
    },
    {
        "id": 362,
        "question": "Which mind-body connection explains how stress exacerbates physical illness?",
        "options": [
            "Psychosomatic illness",
            "Allostatic load",
            "Homeostasis",
            "Neurogenesis"
        ],
        "answer": "Psychosomatic illness",
        "difficulty": "medium",
        "topic": "Health and Stress Psychology",
        "explanation": "Psychosomatic illness refers to physical conditions worsened or caused by psychological factors, such as stress affecting ulcers."
    },
    {
        "id": 363,
        "question": "In sports psychology, what is the term for mental strategies to enhance athletic performance?",
        "options": [
            "Visualization",
            "Overtraining",
            "Choking",
            "Burnout"
        ],
        "answer": "Visualization",
        "difficulty": "easy",
        "topic": "Applied Psychology",
        "explanation": "Visualization involves mentally rehearsing successful performance to improve confidence and outcomes in sports."
    },
    {
        "id": 364,
        "question": "In the psychology of sexuality, what is the term for discomfort with one’s sexual orientation?",
        "options": [
            "Internalized homophobia",
            "Gender dysphoria",
            "Sexual dysfunction",
            "Orientation conflict"
        ],
        "answer": "Internalized homophobia",
        "difficulty": "medium",
        "topic": "Contemporary Issues",
        "explanation": "Internalized homophobia involves negative feelings or beliefs about one’s own sexual orientation, often due to societal stigma."
    },
    {
        "id": 365,
        "question": "Which research design observes behavior in natural settings without manipulation?",
        "options": [
            "Experimental study",
            "Correlational study",
            "Observational study",
            "Longitudinal study"
        ],
        "answer": "Observational study",
        "difficulty": "easy",
        "topic": "Research Methods",
        "explanation": "Observational studies involve watching and recording behavior in natural environments without intervening or manipulating variables."
    },
    {
        "id": 366,
        "question": "Which brain structure relays motor and sensory signals to the cerebral cortex?",
        "options": [
            "Thalamus",
            "Hypothalamus",
            "Medulla",
            "Pons"
        ],
        "answer": "Thalamus",
        "difficulty": "easy",
        "topic": "Biological Bases",
        "explanation": "The thalamus acts as a relay station, transmitting sensory and motor signals to the appropriate areas of the cerebral cortex."
    },
    {
        "id": 367,
        "question": "Which perceptual phenomenon involves blending sensory inputs, such as seeing sounds?",
        "options": [
            "Synesthesia",
            "Micropsia",
            "Agnosia",
            "Illusion"
        ],
        "answer": "Synesthesia",
        "difficulty": "medium",
        "topic": "Sensation and Perception",
        "explanation": "Synesthesia is a condition where one sensory input triggers another, such as perceiving colors when hearing music."
    },
    {
        "id": 368,
        "question": "Which circadian rhythm disruption causes difficulty adjusting to time zone changes?",
        "options": [
            "Jet lag",
            "Insomnia",
            "Shift work disorder",
            "Delayed sleep phase syndrome"
        ],
        "answer": "Jet lag",
        "difficulty": "easy",
        "topic": "States of Consciousness",
        "explanation": "Jet lag occurs when rapid travel across time zones disrupts the body’s circadian rhythm, causing sleep and alertness issues."
    },
    {
        "id": 369,
        "question": "In Vygotsky’s theory, which concept emphasizes the role of social interaction in learning?",
        "options": [
            "Zone of proximal development",
            "Conservation",
            "Object permanence",
            "Egocentrism"
        ],
        "answer": "Zone of proximal development",
        "difficulty": "medium",
        "topic": "Developmental Psychology",
        "explanation": "The zone of proximal development highlights the importance of social interaction in helping learners achieve tasks beyond their current abilities."
    },
    {
        "id": 370,
        "question": "Which memory technique involves grouping information into meaningful units?",
        "options": [
            "Chunking",
            "Mnemonics",
            "Rehearsal",
            "Method of loci"
        ],
        "answer": "Chunking",
        "difficulty": "easy",
        "topic": "Memory",
        "explanation": "Chunking involves organizing information into smaller, meaningful units to enhance short-term memory capacity."
    },
    {
        "id": 371,
        "question": "Which cognitive bias involves seeking information that supports existing beliefs?",
        "options": [
            "Confirmation bias",
            "Availability heuristic",
            "Anchoring bias",
            "Framing effect"
        ],
        "answer": "Confirmation bias",
        "difficulty": "easy",
        "topic": "Cognition and Intelligence",
        "explanation": "Confirmation bias is the tendency to seek, interpret, and recall information that confirms one’s preexisting beliefs."
    },
    {
        "id": 372,
        "question": "Which emotion is universally expressed through a smile across cultures?",
        "options": [
            "Anger",
            "Happiness",
            "Sadness",
            "Fear"
        ],
        "answer": "Happiness",
        "difficulty": "easy",
        "topic": "Motivation and Emotion",
        "explanation": "Happiness is universally expressed through smiling, as identified in cross-cultural studies of facial expressions."
    },
    {
        "id": 373,
        "question": "In Jung’s theory, which concept represents the hidden, unacceptable aspects of personality?",
        "options": [
            "Persona",
            "Shadow",
            "Anima",
            "Animus"
        ],
        "answer": "Shadow",
        "difficulty": "medium",
        "topic": "Personality Psychology",
        "explanation": "The shadow in Jung’s theory represents the repressed, unacceptable aspects of personality that individuals hide from themselves and others."
    },
    {
        "id": 374,
        "question": "Which disorder involves physical symptoms with no identifiable medical cause?",
        "options": [
            "Somatic symptom disorder",
            "Illness anxiety disorder",
            "Conversion disorder",
            "Factitious disorder"
        ],
        "answer": "Somatic symptom disorder",
        "difficulty": "medium",
        "topic": "Psychological Disorders",
        "explanation": "Somatic symptom disorder involves excessive distress about physical symptoms without a clear medical explanation."
    },
    {
        "id": 375,
        "question": "What is the term for the tendency to exaggerate group differences based on stereotypes?",
        "options": [
            "Outgroup homogeneity",
            "Ingroup bias",
            "Ethnocentrism",
            "Social categorization"
        ],
        "answer": "Outgroup homogeneity",
        "difficulty": "medium",
        "topic": "Social Psychology",
        "explanation": "Outgroup homogeneity is the perception that members of an outgroup are more similar to each other than they actually are."
    },
    {
        "id": 376,
        "question": "Which chronic illness is most associated with stress-induced immune suppression?",
        "options": [
            "Diabetes",
            "Hypertension",
            "Autoimmune disease",
            "Asthma"
        ],
        "answer": "Autoimmune disease",
        "difficulty": "hard",
        "topic": "Health and Stress Psychology",
        "explanation": "Stress-induced immune suppression, studied in psychoneuroimmunology, can exacerbate autoimmune diseases by dysregulating immune responses."
    },
    {
        "id": 377,
        "question": "In environmental psychology, what is the term for the psychological impact of natural settings?",
        "options": [
            "Biophilia",
            "Crowding",
            "Territoriality",
            "Proxemics"
        ],
        "answer": "Biophilia",
        "difficulty": "medium",
        "topic": "Applied Psychology",
        "explanation": "Biophilia refers to the innate human affinity for nature, which positively impacts psychological well-being in environmental psychology."
    },
    {
        "id": 378,
        "question": "In the psychology of gender, what is the term for non-traditional gender expression?",
        "options": [
            "Gender nonconformity",
            "Gender dysphoria",
            "Gender identity",
            "Sexual orientation"
        ],
        "answer": "Gender nonconformity",
        "difficulty": "easy",
        "topic": "Contemporary Issues",
        "explanation": "Gender nonconformity involves expressing gender in ways that do not align with traditional societal expectations for one’s assigned sex."
    },
    {
        "id": 379,
        "question": "Which research method involves manipulating two or more independent variables?",
        "options": [
            "Factorial experiment",
            "Correlational study",
            "Case study",
            "Survey"
        ],
        "answer": "Factorial experiment",
        "difficulty": "medium",
        "topic": "Research Methods",
        "explanation": "A factorial experiment manipulates multiple independent variables to examine their individual and combined effects on a dependent variable."
    },
    {
        "id": 380,
        "question": "Which hormone is released by the pituitary gland to regulate stress response?",
        "options": [
            "Adrenaline",
            "Cortisol",
            "ACTH",
            "Oxytocin"
        ],
        "answer": "ACTH",
        "difficulty": "medium",
        "topic": "Biological Bases",
        "explanation": "Adrenocorticotropic hormone (ACTH) is released by the pituitary gland to stimulate cortisol production in the adrenal glands during stress."
    },
    {
        "id": 381,
        "question": "Which perceptual illusion involves misjudging the length of lines due to contextual cues?",
        "options": [
            "Müller-Lyer illusion",
            "Ponzo illusion",
            "Ebbinghaus illusion",
            "Ames room illusion"
        ],
        "answer": "Müller-Lyer illusion",
        "difficulty": "medium",
        "topic": "Sensation and Perception",
        "explanation": "The Müller-Lyer illusion causes misjudgment of line length due to arrow-like contextual cues at the ends of the lines."
    },
    {
        "id": 382,
        "question": "Which hypnotic state is characterized by heightened suggestibility?",
        "options": [
            "Trance state",
            "Alpha state",
            "Beta state",
            "Theta state"
        ],
        "answer": "Trance state",
        "difficulty": "easy",
        "topic": "States of Consciousness",
        "explanation": "The trance state in hypnosis involves deep relaxation and heightened suggestibility to verbal cues or instructions."
    },
    {
        "id": 383,
        "question": "In moral development, which Kohlberg stage involves adhering to laws for social order?",
        "options": [
            "Obedience",
            "Social contract",
            "Law and order",
            "Universal principles"
        ],
        "answer": "Law and order",
        "difficulty": "medium",
        "topic": "Developmental Psychology",
        "explanation": "The law and order stage (conventional level) involves moral reasoning based on maintaining societal laws and order."
    },
    {
        "id": 384,
        "question": "In operant conditioning, what is the term for extending a behavior to similar stimuli?",
        "options": [
            "Discrimination",
            "Generalization",
            "Extinction",
            "Shaping"
        ],
        "answer": "Generalization",
        "difficulty": "medium",
        "topic": "Learning and Conditioning",
        "explanation": "Generalization occurs when a behavior learned in response to one stimulus is applied to similar stimuli."
    },
    {
        "id": 385,
        "question": "Which memory system stores general knowledge independent of personal experience?",
        "options": [
            "Episodic memory",
            "Semantic memory",
            "Procedural memory",
            "Working memory"
        ],
        "answer": "Semantic memory",
        "difficulty": "easy",
        "topic": "Memory",
        "explanation": "Semantic memory stores factual knowledge, such as vocabulary or historical facts, without reference to personal experiences."
    },
    {
        "id": 386,
        "question": "Which cognitive process involves drawing conclusions from specific observations?",
        "options": [
            "Deductive reasoning",
            "Inductive reasoning",
            "Analogical reasoning",
            "Abductive reasoning"
        ],
        "answer": "Inductive reasoning",
        "difficulty": "medium",
        "topic": "Cognition and Intelligence",
        "explanation": "Inductive reasoning involves generalizing from specific observations to form broader conclusions or hypotheses."
    },
    {
        "id": 387,
        "question": "Which cultural factor influences the expression of emotions across societies?",
        "options": [
            "Display rules",
            "Social norms",
            "Ethnocentrism",
            "Cultural relativism"
        ],
        "answer": "Display rules",
        "difficulty": "medium",
        "topic": "Motivation and Emotion",
        "explanation": "Display rules are cultural norms that dictate how and when emotions should be expressed, varying across societies."
    },
    {
        "id": 388,
        "question": "In Rogers’ theory, which condition fosters psychological growth through empathy?",
        "options": [
            "Congruence",
            "Empathic understanding",
            "Unconditional positive regard",
            "Self-actualization"
        ],
        "answer": "Empathic understanding",
        "difficulty": "medium",
        "topic": "Personality Psychology",
        "explanation": "Empathic understanding involves a therapist’s ability to deeply understand a client’s feelings, fostering psychological growth."
    },
    {
        "id": 389,
        "question": "Which disorder involves persistent fear of social situations and scrutiny?",
        "options": [
            "Agoraphobia",
            "Social anxiety disorder",
            "Specific phobia",
            "Panic disorder"
        ],
        "answer": "Social anxiety disorder",
        "difficulty": "easy",
        "topic": "Psychological Disorders",
        "explanation": "Social anxiety disorder involves intense fear of social situations where one might be judged, leading to avoidance."
    },
    {
        "id": 390,
        "question": "Which social influence strategy involves offering a large request before a smaller one?",
        "options": [
            "Foot-in-the-door",
            "Door-in-the-face",
            "Low-ball technique",
            "Reciprocity norm"
        ],
        "answer": "Door-in-the-face",
        "difficulty": "medium",
        "topic": "Social Psychology",
        "explanation": "The door-in-the-face technique involves making a large request that is refused, followed by a smaller, more acceptable request."
    },
    {
        "id": 391,
        "question": "Which health behavior is most effective in reducing stress-related cardiovascular risk?",
        "options": [
            "Smoking cessation",
            "Regular exercise",
            "Dietary restriction",
            "Alcohol moderation"
        ],
        "answer": "Regular exercise",
        "difficulty": "easy",
        "topic": "Health and Stress Psychology",
        "explanation": "Regular exercise reduces stress-related cardiovascular risk by lowering cortisol levels and improving heart health."
    },
    {
        "id": 392,
        "question": "In military psychology, what is the term for psychological debriefing after traumatic events?",
        "options": [
            "Critical incident stress debriefing",
            "Combat stress reaction",
            "Resilience training",
            "Selection screening"
        ],
        "answer": "Critical incident stress debriefing",
        "difficulty": "medium",
        "topic": "Applied Psychology",
        "explanation": "Critical incident stress debriefing helps soldiers process traumatic events to reduce the risk of post-traumatic stress disorder."
    },
    {
        "id": 393,
        "question": "In cross-cultural psychology, which concept promotes understanding cultures on their own terms?",
        "options": [
            "Ethnocentrism",
            "Cultural relativism",
            "Acculturation",
            "Cultural assimilation"
        ],
        "answer": "Cultural relativism",
        "difficulty": "medium",
        "topic": "Contemporary Issues",
        "explanation": "Cultural relativism involves understanding and evaluating cultural practices within their own context, avoiding ethnocentric bias."
    },
    {
        "id": 394,
        "question": "Which research method ensures participants are unaware of the study’s hypothesis?",
        "options": [
            "Double-blind study",
            "Single-blind study",
            "Open-label study",
            "Crossover study"
        ],
        "answer": "Double-blind study",
        "difficulty": "medium",
        "topic": "Research Methods",
        "explanation": "A double-blind study ensures neither participants nor researchers know who is in the experimental or control group, reducing bias."
    },
    {
        "id": 395,
        "question": "Which endocrine gland regulates blood sugar levels through insulin?",
        "options": [
            "Thyroid",
            "Adrenal",
            "Pancreas",
            "Pituitary"
        ],
        "answer": "Pancreas",
        "difficulty": "easy",
        "topic": "Biological Bases",
        "explanation": "The pancreas releases insulin and glucagon to regulate blood sugar levels, impacting energy and behavior."
    },
    {
        "id": 396,
        "question": "Which perceptual process reduces sensitivity to constant stimuli?",
        "options": [
            "Sensory adaptation",
            "Absolute threshold",
            "Signal detection",
            "Perceptual constancy"
        ],
        "answer": "Sensory adaptation",
        "difficulty": "easy",
        "topic": "Sensation and Perception",
        "explanation": "Sensory adaptation reduces sensitivity to unchanging stimuli, such as ignoring background noise after prolonged exposure."
    },
    {
        "id": 397,
        "question": "Which psychoactive drug is associated with dependency and withdrawal symptoms?",
        "options": [
            "Caffeine",
            "Alcohol",
            "Marijuana",
            "LSD"
        ],
        "answer": "Alcohol",
        "difficulty": "easy",
        "topic": "States of Consciousness",
        "explanation": "Alcohol, a depressant, is associated with physical and psychological dependency, leading to severe withdrawal symptoms."
    },
    {
        "id": 398,
        "question": "In moral development, which Kohlberg stage involves self-interest and reward-seeking?",
        "options": [
            "Obedience",
            "Self-interest",
            "Social contract",
            "Universal principles"
        ],
        "answer": "Self-interest",
        "difficulty": "medium",
        "topic": "Developmental Psychology",
        "explanation": "The self-interest stage (preconventional level) involves moral reasoning based on personal rewards or avoiding punishment."
    },
    {
        "id": 399,
        "question": "In operant conditioning, what is the term for reinforcing behaviors after a variable number of responses?",
        "options": [
            "Fixed-ratio schedule",
            "Variable-ratio schedule",
            "Fixed-interval schedule",
            "Variable-interval schedule"
        ],
        "answer": "Variable-ratio schedule",
        "difficulty": "medium",
        "topic": "Learning and Conditioning",
        "explanation": "A variable-ratio schedule reinforces a behavior after an unpredictable number of responses, leading to high response rates."
    },
    {
        "id": 400,
        "question": "Which memory error involves unintentionally fabricating details of an event?",
        "options": [
            "Confabulation",
            "Source amnesia",
            "Proactive interference",
            "Repression"
        ],
        "answer": "Confabulation",
        "difficulty": "hard",
        "topic": "Memory",
        "explanation": "Confabulation involves unintentionally creating false or distorted memories to fill gaps, often seen in neurological disorders."
    },
    {
        "id": 401,
        "question": "Which psychological perspective emphasizes observable behaviors over internal processes?",
        "options": [
            "Cognitive",
            "Behavioral",
            "Humanistic",
            "Psychodynamic"
        ],
        "answer": "Behavioral",
        "difficulty": "easy",
        "topic": "Introduction to Psychology",
        "explanation": "The behavioral perspective focuses on observable behaviors and their environmental determinants, as pioneered by Watson and Skinner."
    },
    {
        "id": 402,
        "question": "What is the term for the group in an experiment that does not receive the treatment?",
        "options": [
            "Experimental group",
            "Control group",
            "Independent group",
            "Dependent group"
        ],
        "answer": "Control group",
        "difficulty": "easy",
        "topic": "Research Methods",
        "explanation": "The control group serves as a baseline, not receiving the experimental treatment, allowing comparison with the experimental group."
    },
    {
        "id": 403,
        "question": "Which brain structure regulates autonomic functions like breathing and heart rate?",
        "options": [
            "Cerebellum",
            "Medulla oblongata",
            "Thalamus",
            "Hippocampus"
        ],
        "answer": "Medulla oblongata",
        "difficulty": "easy",
        "topic": "Biological Bases",
        "explanation": "The medulla oblongata, located in the brainstem, controls vital autonomic functions such as breathing and heart rate."
    },
    {
        "id": 404,
        "question": "What is the term for the smallest detectable difference between two stimuli?",
        "options": [
            "Absolute threshold",
            "Difference threshold",
            "Sensory adaptation",
            "Perceptual constancy"
        ],
        "answer": "Difference threshold",
        "difficulty": "easy",
        "topic": "Sensation and Perception",
        "explanation": "The difference threshold, or just noticeable difference, is the smallest change in stimulus intensity that can be detected 50% of the time."
    },
    {
        "id": 405,
        "question": "Which altered state of consciousness involves a loss of awareness during repetitive tasks?",
        "options": [
            "Hypnosis",
            "Meditation",
            "Highway hypnosis",
            "Daydreaming"
        ],
        "answer": "Highway hypnosis",
        "difficulty": "medium",
        "topic": "States of Consciousness",
        "explanation": "Highway hypnosis occurs when individuals perform repetitive tasks, like driving, with reduced awareness, entering an automatic state."
    },
    {
        "id": 406,
        "question": "In Erikson’s theory, which stage involves reflecting on life’s accomplishments in late adulthood?",
        "options": [
            "Generativity vs. Stagnation",
            "Intimacy vs. Isolation",
            "Integrity vs. Despair",
            "Identity vs. Role Confusion"
        ],
        "answer": "Integrity vs. Despair",
        "difficulty": "medium",
        "topic": "Developmental Psychology",
        "explanation": "In the Integrity vs. Despair stage, older adults reflect on their lives, achieving a sense of fulfillment or experiencing regret."
    },
    {
        "id": 407,
        "question": "In classical conditioning, what is the term for the reappearance of a conditioned response after extinction?",
        "options": [
            "Generalization",
            "Discrimination",
            "Spontaneous recovery",
            "Shaping"
        ],
        "answer": "Spontaneous recovery",
        "difficulty": "medium",
        "topic": "Learning and Conditioning",
        "explanation": "Spontaneous recovery is the sudden reappearance of a previously extinguished conditioned response after a rest period."
    },
    {
        "id": 408,
        "question": "Which memory process involves transforming information into a storable form?",
        "options": [
            "Retrieval",
            "Encoding",
            "Storage",
            "Consolidation"
        ],
        "answer": "Encoding",
        "difficulty": "easy",
        "topic": "Memory",
        "explanation": "Encoding is the process of converting sensory information into a form that can be stored in memory."
    },
    {
        "id": 409,
        "question": "In Gardner’s theory, which intelligence involves understanding social cues and relationships?",
        "options": [
            "Intrapersonal intelligence",
            "Interpersonal intelligence",
            "Logical-mathematical intelligence",
            "Spatial intelligence"
        ],
        "answer": "Interpersonal intelligence",
        "difficulty": "easy",
        "topic": "Cognition and Intelligence",
        "explanation": "Interpersonal intelligence involves the ability to understand and interact effectively with others, including reading social cues."
    },
    {
        "id": 410,
        "question": "Which motivation theory suggests that humans act to minimize tension and maintain homeostasis?",
        "options": [
            "Arousal theory",
            "Drive reduction theory",
            "Self-determination theory",
            "Expectancy theory"
        ],
        "answer": "Drive reduction theory",
        "difficulty": "medium",
        "topic": "Motivation and Emotion",
        "explanation": "Drive reduction theory posits that behaviors are motivated by the need to reduce internal drives, like hunger, to restore homeostasis."
    },
    {
        "id": 411,
        "question": "In Allport’s trait theory, which traits are the most dominant and defining for an individual?",
        "options": [
            "Central traits",
            "Secondary traits",
            "Cardinal traits",
            "Surface traits"
        ],
        "answer": "Cardinal traits",
        "difficulty": "medium",
        "topic": "Personality Psychology",
        "explanation": "Cardinal traits are rare, dominant traits that shape an individual’s entire personality, such as ambition in a highly driven person."
    },
    {
        "id": 412,
        "question": "Which disorder is characterized by sudden, unexpected episodes of intense fear?",
        "options": [
            "Phobia",
            "Panic disorder",
            "Generalized anxiety disorder",
            "Social anxiety disorder"
        ],
        "answer": "Panic disorder",
        "difficulty": "easy",
        "topic": "Psychological Disorders",
        "explanation": "Panic disorder involves recurrent, unpredictable panic attacks with intense fear and physical symptoms like heart palpitations."
    },
    {
        "id": 413,
        "question": "Which therapy technique involves gradual exposure to a feared stimulus while practicing relaxation?",
        "options": [
            "Flooding",
            "Systematic desensitization",
            "Aversion therapy",
            "Cognitive restructuring"
        ],
        "answer": "Systematic desensitization",
        "difficulty": "easy",
        "topic": "Therapies and Treatment",
        "explanation": "Systematic desensitization gradually exposes individuals to a feared stimulus while teaching relaxation techniques to reduce anxiety."
    },
    {
        "id": 414,
        "question": "What is the term for the tendency to reduce effort when working in a group?",
        "options": [
            "Social facilitation",
            "Social loafing",
            "Groupthink",
            "Deindividuation"
        ],
        "answer": "Social loafing",
        "difficulty": "easy",
        "topic": "Social Psychology",
        "explanation": "Social loafing occurs when individuals exert less effort in a group task, assuming others will compensate."
    },
    {
        "id": 415,
        "question": "Which coping strategy involves directly addressing the source of stress?",
        "options": [
            "Emotion-focused coping",
            "Problem-focused coping",
            "Avoidance coping",
            "Reactive coping"
        ],
        "answer": "Problem-focused coping",
        "difficulty": "easy",
        "topic": "Health and Stress Psychology",
        "explanation": "Problem-focused coping targets the source of stress through direct action, such as solving a problem or seeking resources."
    },
    {
        "id": 416,
        "question": "In ecological psychology, what is the term for the psychological impact of urban overcrowding?",
        "options": [
            "Biophilia",
            "Crowding stress",
            "Territoriality",
            "Environmental load"
        ],
        "answer": "Crowding stress",
        "difficulty": "medium",
        "topic": "Applied Psychology",
        "explanation": "Crowding stress refers to the psychological discomfort caused by high population density in urban environments, studied in ecological psychology."
    },
    {
        "id": 417,
        "question": "In the psychology of gender, what is the term for distress due to a mismatch between body and gender identity?",
        "options": [
            "Gender nonconformity",
            "Gender dysphoria",
            "Sexual orientation",
            "Gender role"
        ],
        "answer": "Gender dysphoria",
        "difficulty": "easy",
        "topic": "Contemporary Issues",
        "explanation": "Gender dysphoria involves significant distress from a discrepancy between one’s physical body and gender identity."
    },
    {
        "id": 418,
        "question": "Which research method ensures random assignment to experimental conditions?",
        "options": [
            "Quasi-experiment",
            "Randomized controlled trial",
            "Correlational study",
            "Case study"
        ],
        "answer": "Randomized controlled trial",
        "difficulty": "easy",
        "topic": "Research Methods",
        "explanation": "A randomized controlled trial uses random assignment to ensure groups are comparable, reducing bias in experimental outcomes."
    },
    {
        "id": 419,
        "question": "Which process generates new neurons in the adult brain?",
        "options": [
            "Synaptogenesis",
            "Neurogenesis",
            "Myelination",
            "Apoptosis"
        ],
        "answer": "Neurogenesis",
        "difficulty": "medium",
        "topic": "Biological Bases",
        "explanation": "Neurogenesis is the formation of new neurons, primarily in the hippocampus, supporting learning and memory in adults."
    },
    {
        "id": 420,
        "question": "Which depth cue involves the convergence of eyes to focus on nearby objects?",
        "options": [
            "Binocular disparity",
            "Convergence",
            "Interposition",
            "Linear perspective"
        ],
        "answer": "Convergence",
        "difficulty": "medium",
        "topic": "Sensation and Perception",
        "explanation": "Convergence is a binocular depth cue where the eyes turn inward to focus on closer objects, signaling proximity."
    },
    {
        "id": 421,
        "question": "Which sleep disorder causes sudden, uncontrollable sleep episodes during the day?",
        "options": [
            "Insomnia",
            "Narcolepsy",
            "Sleep apnea",
            "Restless legs syndrome"
        ],
        "answer": "Narcolepsy",
        "difficulty": "easy",
        "topic": "States of Consciousness",
        "explanation": "Narcolepsy involves sudden, uncontrollable sleep attacks during waking hours, often accompanied by cataplexy."
    },
    {
        "id": 422,
        "question": "In Kohlberg’s moral development, which stage involves reasoning based on mutual benefit?",
        "options": [
            "Obedience",
            "Self-interest",
            "Social contract",
            "Law and order"
        ],
        "answer": "Social contract",
        "difficulty": "medium",
        "topic": "Developmental Psychology",
        "explanation": "The social contract stage (postconventional level) involves moral reasoning based on mutual agreements for societal benefit."
    },
    {
        "id": 423,
        "question": "In operant conditioning, what is the term for decreasing a behavior by adding an aversive stimulus?",
        "options": [
            "Positive reinforcement",
            "Negative reinforcement",
            "Positive punishment",
            "Negative punishment"
        ],
        "answer": "Positive punishment",
        "difficulty": "medium",
        "topic": "Learning and Conditioning",
        "explanation": "Positive punishment decreases a behavior by introducing an unpleasant stimulus, such as a fine for speeding."
    },
    {
        "id": 424,
        "question": "Which memory error occurs when new information disrupts recall of older information?",
        "options": [
            "Proactive interference",
            "Retroactive interference",
            "Source amnesia",
            "Confabulation"
        ],
        "answer": "Retroactive interference",
        "difficulty": "medium",
        "topic": "Memory",
        "explanation": "Retroactive interference happens when newly learned information interferes with the recall of previously learned information."
    },
    {
        "id": 425,
        "question": "Which cognitive process involves evaluating options to make a choice?",
        "options": [
            "Concept formation",
            "Decision-making",
            "Problem-solving",
            "Reasoning"
        ],
        "answer": "Decision-making",
        "difficulty": "easy",
        "topic": "Cognition and Intelligence",
        "explanation": "Decision-making involves assessing and choosing among multiple options based on criteria and preferences."
    },
    {
        "id": 426,
        "question": "Which emotion theory suggests that emotions and physiological arousal occur simultaneously?",
        "options": [
            "James-Lange theory",
            "Cannon-Bard theory",
            "Schachter-Singer theory",
            "Lazarus theory"
        ],
        "answer": "Cannon-Bard theory",
        "difficulty": "medium",
        "topic": "Motivation and Emotion",
        "explanation": "The Cannon-Bard theory posits that emotional experience and physiological arousal occur simultaneously, triggered by a stimulus."
    },
    {
        "id": 427,
        "question": "In Eysenck’s theory, which dimension describes emotional reactivity?",
        "options": [
            "Extraversion",
            "Neuroticism",
            "Psychoticism",
            "Agreeableness"
        ],
        "answer": "Neuroticism",
        "difficulty": "medium",
        "topic": "Personality Psychology",
        "explanation": "Neuroticism in Eysenck’s theory reflects emotional reactivity, with high scores indicating mood swings and anxiety."
    },
    {
        "id": 428,
        "question": "Which disorder involves chronic, exaggerated health concerns despite minimal symptoms?",
        "options": [
            "Somatic symptom disorder",
            "Illness anxiety disorder",
            "Conversion disorder",
            "Factitious disorder"
        ],
        "answer": "Illness anxiety disorder",
        "difficulty": "medium",
        "topic": "Psychological Disorders",
        "explanation": "Illness anxiety disorder involves excessive preoccupation with having or developing a serious illness, despite few or no symptoms."
    },
    {
        "id": 429,
        "question": "What is the term for the tendency to form impressions based on recent information?",
        "options": [
            "Primacy effect",
            "Recency effect",
            "Halo effect",
            "Contrast effect"
        ],
        "answer": "Recency effect",
        "difficulty": "easy",
        "topic": "Social Psychology",
        "explanation": "The recency effect occurs when recent information has a stronger influence on impressions than earlier information."
    },
    {
        "id": 430,
        "question": "Which stress-related hormone is released by the adrenal glands?",
        "options": [
            "Melatonin",
            "Cortisol",
            "Oxytocin",
            "Thyroxine"
        ],
        "answer": "Cortisol",
        "difficulty": "easy",
        "topic": "Health and Stress Psychology",
        "explanation": "Cortisol, released by the adrenal glands, regulates the body’s response to stress, impacting metabolism and immune function."
    },
    {
        "id": 431,
        "question": "In consumer psychology, what is the term for impulsive buying driven by emotional triggers?",
        "options": [
            "Hedonic shopping",
            "Compulsive buying",
            "Utilitarian shopping",
            "Brand loyalty"
        ],
        "answer": "Compulsive buying",
        "difficulty": "medium",
        "topic": "Applied Psychology",
        "explanation": "Compulsive buying involves impulsive purchases driven by emotional triggers, often to alleviate negative feelings."
    },
    {
        "id": 432,
        "question": "In artificial intelligence, which psychological concept is used to model adaptive decision-making?",
        "options": [
            "Reinforcement learning",
            "Schemas",
            "Affect",
            "Instincts"
        ],
        "answer": "Reinforcement learning",
        "difficulty": "hard",
        "topic": "Contemporary Issues",
        "explanation": "Reinforcement learning in AI models adaptive decision-making by mimicking how humans learn through rewards and penalties."
    },
    {
        "id": 433,
        "question": "Which measure of central tendency is most affected by extreme scores?",
        "options": [
            "Mean",
            "Median",
            "Mode",
            "Midrange"
        ],
        "answer": "Mean",
        "difficulty": "easy",
        "topic": "Research Methods",
        "explanation": "The mean is sensitive to extreme scores, as it calculates the average by summing all values and dividing by the count."
    },
    {
        "id": 434,
        "question": "In Bandura’s social learning theory, which process involves retaining observed behaviors?",
        "options": [
            "Attention",
            "Retention",
            "Reproduction",
            "Motivation"
        ],
        "answer": "Retention",
        "difficulty": "medium",
        "topic": "Learning and Conditioning",
        "explanation": "Retention involves storing observed behaviors in memory for later reproduction, a key step in Bandura’s social learning theory."
    },
    {
        "id": 435,
        "question": "Which brain area is critical for language production?",
        "options": [
            "Broca’s area",
            "Wernicke’s area",
            "Angular gyrus",
            "Auditory cortex"
        ],
        "answer": "Broca’s area",
        "difficulty": "easy",
        "topic": "Biological Bases",
        "explanation": "Broca’s area, located in the frontal lobe, is essential for speech production and language articulation."
    },
    {
        "id": 436,
        "question": "Which depth cue relies on the relative size of objects in the visual field?",
        "options": [
            "Texture gradient",
            "Relative size",
            "Motion parallax",
            "Convergence"
        ],
        "answer": "Relative size",
        "difficulty": "easy",
        "topic": "Sensation and Perception",
        "explanation": "Relative size is a monocular depth cue where smaller objects appear farther away than larger ones, assuming they are similar in actual size."
    },
    {
        "id": 437,
        "question": "Which psychoactive substance is classified as a hallucinogen?",
        "options": [
            "Cocaine",
            "Alcohol",
            "LSD",
            "Nicotine"
        ],
        "answer": "LSD",
        "difficulty": "easy",
        "topic": "States of Consciousness",
        "explanation": "LSD (lysergic acid diethylamide) is a hallucinogen that alters perception, causing vivid visual and auditory hallucinations."
    },
    {
        "id": 438,
        "question": "In attachment theory, which style involves fear of rejection and clinginess?",
        "options": [
            "Secure attachment",
            "Avoidant attachment",
            "Anxious-ambivalent attachment",
            "Disorganized attachment"
        ],
        "answer": "Anxious-ambivalent attachment",
        "difficulty": "medium",
        "topic": "Developmental Psychology",
        "explanation": "Anxious-ambivalent attachment, often from inconsistent caregiving, leads to clinginess and fear of rejection in relationships."
    },
    {
        "id": 439,
        "question": "Which memory technique uses acronyms to aid recall?",
        "options": [
            "Chunking",
            "Mnemonics",
            "Method of loci",
            "Elaborative encoding"
        ],
        "answer": "Mnemonics",
        "difficulty": "easy",
        "topic": "Memory",
        "explanation": "Mnemonics, such as acronyms or rhymes, are memory aids that help organize and recall information more effectively."
    },
    {
        "id": 440,
        "question": "Which cognitive bias involves overestimating the likelihood of events based on vivid memories?",
        "options": [
            "Confirmation bias",
            "Availability heuristic",
            "Anchoring bias",
            "Framing effect"
        ],
        "answer": "Availability heuristic",
        "difficulty": "medium",
        "topic": "Cognition and Intelligence",
        "explanation": "The availability heuristic leads individuals to overestimate event likelihood based on how easily examples come to mind."
    },
    {
        "id": 441,
        "question": "Which motivation theory emphasizes the role of intrinsic and extrinsic rewards?",
        "options": [
            "Self-determination theory",
            "Drive reduction theory",
            "Arousal theory",
            "Instinct theory"
        ],
        "answer": "Self-determination theory",
        "difficulty": "medium",
        "topic": "Motivation and Emotion",
        "explanation": "Self-determination theory distinguishes between intrinsic (internal) and extrinsic (external) rewards as motivators for behavior."
    },
    {
        "id": 442,
        "question": "In Freud’s theory, which defense mechanism redirects unacceptable impulses to socially acceptable outlets?",
        "options": [
            "Repression",
            "Sublimation",
            "Projection",
            "Denial"
        ],
        "answer": "Sublimation",
        "difficulty": "medium",
        "topic": "Personality Psychology",
        "explanation": "Sublimation channels unacceptable impulses, like aggression, into socially acceptable behaviors, such as sports."
    },
    {
        "id": 443,
        "question": "Which disorder involves persistent, irrational beliefs without hallucinations?",
        "options": [
            "Schizophrenia",
            "Delusional disorder",
            "Bipolar disorder",
            "Major depressive disorder"
        ],
        "answer": "Delusional disorder",
        "difficulty": "medium",
        "topic": "Psychological Disorders",
        "explanation": "Delusional disorder involves fixed, false beliefs (delusions) without the hallucinations or disorganized thinking seen in schizophrenia."
    },
    {
        "id": 444,
        "question": "Which therapy approach emphasizes exploring unconscious conflicts through free association?",
        "options": [
            "Cognitive-behavioral therapy",
            "Humanistic therapy",
            "Psychoanalysis",
            "Behavioral therapy"
        ],
        "answer": "Psychoanalysis",
        "difficulty": "easy",
        "topic": "Therapies and Treatment",
        "explanation": "Psychoanalysis, developed by Freud, uses techniques like free association to uncover unconscious conflicts driving behavior."
    },
    {
        "id": 445,
        "question": "What is the term for the tendency to exaggerate similarities within a group?",
        "options": [
            "Ingroup bias",
            "Outgroup homogeneity",
            "Stereotyping",
            "Ethnocentrism"
        ],
        "answer": "Outgroup homogeneity",
        "difficulty": "medium",
        "topic": "Social Psychology",
        "explanation": "Outgroup homogeneity is the perception that members of an outgroup are more similar to each other than they actually are."
    },
    {
        "id": 446,
        "question": "Which stress response model describes cumulative wear and tear on the body?",
        "options": [
            "Fight-or-flight",
            "Allostatic load",
            "General adaptation syndrome",
            "Tend-and-befriend"
        ],
        "answer": "Allostatic load",
        "difficulty": "hard",
        "topic": "Health and Stress Psychology",
        "explanation": "Allostatic load refers to the cumulative physiological toll of chronic stress, leading to health issues like cardiovascular disease."
    },
    {
        "id": 447,
        "question": "In forensic psychology, what is the term for assessing a defendant’s mental state at the time of a crime?",
        "options": [
            "Competency evaluation",
            "Insanity defense",
            "Risk assessment",
            "Criminal profiling"
        ],
        "answer": "Insanity defense",
        "difficulty": "medium",
        "topic": "Applied Psychology",
        "explanation": "The insanity defense involves evaluating a defendant’s mental state during a crime to determine legal responsibility."
    },
    {
        "id": 448,
        "question": "In positive psychology, what is the term for a state of complete engagement in an activity?",
        "options": [
            "Savoring",
            "Flow",
            "Eudaimonia",
            "Gratitude"
        ],
        "answer": "Flow",
        "difficulty": "easy",
        "topic": "Contemporary Issues",
        "explanation": "Flow, described by Csikszentmihalyi, is a state of total immersion and enjoyment in an activity, enhancing well-being."
    },
    {
        "id": 449,
        "question": "Which statistical measure describes the spread of data around the mean?",
        "options": [
            "Median",
            "Standard deviation",
            "Mode",
            "Variance"
        ],
        "answer": "Standard deviation",
        "difficulty": "medium",
        "topic": "Research Methods",
        "explanation": "Standard deviation measures how much data points deviate from the mean, indicating data spread."
    },
    {
        "id": 450,
        "question": "Which neurotransmitter is associated with reward and pleasure pathways?",
        "options": [
            "Serotonin",
            "Dopamine",
            "GABA",
            "Acetylcholine"
        ],
        "answer": "Dopamine",
        "difficulty": "easy",
        "topic": "Biological Bases",
        "explanation": "Dopamine is involved in the brain’s reward system, influencing pleasure, motivation, and reinforcement learning."
    },
    {
        "id": 451,
        "question": "Which perceptual principle groups objects that share similar characteristics?",
        "options": [
            "Proximity",
            "Similarity",
            "Closure",
            "Continuity"
        ],
        "answer": "Similarity",
        "difficulty": "easy",
        "topic": "Sensation and Perception",
        "explanation": "The Gestalt principle of similarity groups objects with shared characteristics, such as color or shape, into a single perceptual unit."
    },
    {
        "id": 452,
        "question": "Which circadian rhythm disorder affects night-shift workers?",
        "options": [
            "Jet lag",
            "Shift work disorder",
            "Delayed sleep phase syndrome",
            "Narcolepsy"
        ],
        "answer": "Shift work disorder",
        "difficulty": "medium",
        "topic": "States of Consciousness",
        "explanation": "Shift work disorder disrupts circadian rhythms in night-shift workers, causing sleep difficulties and daytime fatigue."
    },
    {
        "id": 453,
        "question": "In Piaget’s theory, which stage involves abstract and hypothetical thinking?",
        "options": [
            "Sensorimotor",
            "Preoperational",
            "Concrete operational",
            "Formal operational"
        ],
        "answer": "Formal operational",
        "difficulty": "medium",
        "topic": "Developmental Psychology",
        "explanation": "The formal operational stage (ages 12+) involves abstract reasoning, hypothetical thinking, and problem-solving."
    },
    {
        "id": 454,
        "question": "In operant conditioning, what is the term for reinforcing behaviors after a fixed time interval?",
        "options": [
            "Fixed-ratio schedule",
            "Variable-ratio schedule",
            "Fixed-interval schedule",
            "Variable-interval schedule"
        ],
        "answer": "Fixed-interval schedule",
        "difficulty": "medium",
        "topic": "Learning and Conditioning",
        "explanation": "A fixed-interval schedule reinforces the first response after a set time period, leading to a scalloped response pattern."
    },
    {
        "id": 455,
        "question": "Which memory system stores unconscious knowledge of how to perform tasks?",
        "options": [
            "Episodic memory",
            "Semantic memory",
            "Procedural memory",
            "Explicit memory"
        ],
        "answer": "Procedural memory",
        "difficulty": "easy",
        "topic": "Memory",
        "explanation": "Procedural memory, a type of implicit memory, stores knowledge of skills and habits, like riding a bike."
    },
    {
        "id": 456,
        "question": "Which cognitive process involves applying past solutions to new problems?",
        "options": [
            "Analogical reasoning",
            "Deductive reasoning",
            "Inductive reasoning",
            "Heuristic reasoning"
        ],
        "answer": "Analogical reasoning",
        "difficulty": "medium",
        "topic": "Cognition and Intelligence",
        "explanation": "Analogical reasoning uses similarities between past and current problems to generate solutions, fostering creative problem-solving."
    },
    {
        "id": 457,
        "question": "Which emotion is characterized by physiological arousal and a sense of threat?",
        "options": [
            "Happiness",
            "Sadness",
            "Fear",
            "Anger"
        ],
        "answer": "Fear",
        "difficulty": "easy",
        "topic": "Motivation and Emotion",
        "explanation": "Fear is an emotion triggered by perceived threats, involving physiological arousal like increased heart rate and alertness."
    },
    {
        "id": 458,
        "question": "In Rogers’ theory, which concept involves accepting oneself without judgment?",
        "options": [
            "Self-actualization",
            "Unconditional positive regard",
            "Congruence",
            "Self-concept"
        ],
        "answer": "Unconditional positive regard",
        "difficulty": "medium",
        "topic": "Personality Psychology",
        "explanation": "Unconditional positive regard involves accepting oneself or others without judgment, fostering psychological growth."
    },
    {
        "id": 459,
        "question": "Which disorder involves manipulative behaviors and a lack of empathy?",
        "options": [
            "Narcissistic personality disorder",
            "Antisocial personality disorder",
            "Borderline personality disorder",
            "Histrionic personality disorder"
        ],
        "answer": "Antisocial personality disorder",
        "difficulty": "medium",
        "topic": "Psychological Disorders",
        "explanation": "Antisocial personality disorder is characterized by deceit, impulsivity, and a disregard for others’ rights or feelings."
    },
    {
        "id": 460,
        "question": "Which therapy technique challenges irrational beliefs to improve emotional health?",
        "options": [
            "Free association",
            "Cognitive restructuring",
            "Systematic desensitization",
            "Dream analysis"
        ],
        "answer": "Cognitive restructuring",
        "difficulty": "medium",
        "topic": "Therapies and Treatment",
        "explanation": "Cognitive restructuring, used in CBT, involves identifying and challenging irrational thoughts to promote healthier emotions."
    },
    {
        "id": 461,
        "question": "What is the term for helping others without expecting personal gain?",
        "options": [
            "Reciprocity",
            "Altruism",
            "Social exchange",
            "Compliance"
        ],
        "answer": "Altruism",
        "difficulty": "easy",
        "topic": "Social Psychology",
        "explanation": "Altruism involves selfless behaviors aimed at benefiting others without expecting rewards, driven by empathy or moral values."
    },
    {
        "id": 462,
        "question": "Which health condition is exacerbated by stress-induced inflammation?",
        "options": [
            "Hypertension",
            "Rheumatoid arthritis",
            "Type 1 diabetes",
            "Osteoporosis"
        ],
        "answer": "Rheumatoid arthritis",
        "difficulty": "hard",
        "topic": "Health and Stress Psychology",
        "explanation": "Stress-induced inflammation, studied in psychoneuroimmunology, worsens autoimmune conditions like rheumatoid arthritis."
    },
    {
        "id": 463,
        "question": "In sports psychology, what is the term for underperforming due to pressure?",
        "options": [
            "Choking",
            "Burnout",
            "Overtraining",
            "Flow"
        ],
        "answer": "Choking",
        "difficulty": "easy",
        "topic": "Applied Psychology",
        "explanation": "Choking refers to a significant decline in performance under high-pressure situations, often due to anxiety."
    },
    {
        "id": 464,
        "question": "In the psychology of sexuality, what is the term for a lack of sexual attraction?",
        "options": [
            "Asexuality",
            "Hypoactive sexual desire",
            "Sexual aversion",
            "Bisexuality"
        ],
        "answer": "Asexuality",
        "difficulty": "easy",
        "topic": "Contemporary Issues",
        "explanation": "Asexuality is characterized by a lack of sexual attraction to others, recognized as a valid sexual orientation."
    },
    {
        "id": 465,
        "question": "Which research method examines relationships between variables without manipulation?",
        "options": [
            "Experimental study",
            "Correlational study",
            "Longitudinal study",
            "Case study"
        ],
        "answer": "Correlational study",
        "difficulty": "easy",
        "topic": "Research Methods",
        "explanation": "Correlational studies assess relationships between variables without manipulating them, identifying patterns but not causation."
    },
    {
        "id": 466,
        "question": "Which brain structure regulates body temperature and hunger?",
        "options": [
            "Hypothalamus",
            "Thalamus",
            "Amygdala",
            "Cerebellum"
        ],
        "answer": "Hypothalamus",
        "difficulty": "easy",
        "topic": "Biological Bases",
        "explanation": "The hypothalamus regulates physiological processes like body temperature, hunger, and thirst, maintaining homeostasis."
    },
    {
        "id": 467,
        "question": "Which perceptual error involves seeing motion in a series of static images?",
        "options": [
            "Phi phenomenon",
            "Müller-Lyer illusion",
            "Ponzo illusion",
            "Ebbinghaus illusion"
        ],
        "answer": "Phi phenomenon",
        "difficulty": "medium",
        "topic": "Sensation and Perception",
        "explanation": "The phi phenomenon is the perception of motion created by rapidly displaying static images, as seen in movies."
    },
    {
        "id": 468,
        "question": "Which sleep stage is characterized by light sleep and theta waves?",
        "options": [
            "Stage 1",
            "Stage 2",
            "Stage 3",
            "REM sleep"
        ],
        "answer": "Stage 1",
        "difficulty": "easy",
        "topic": "States of Consciousness",
        "explanation": "Stage 1 is the lightest stage of sleep, marked by theta waves and a transition from wakefulness to sleep."
    },
    {
        "id": 469,
        "question": "In Vygotsky’s theory, which process involves internalizing cultural tools like language?",
        "options": [
            "Scaffolding",
            "Internalization",
            "Zone of proximal development",
            "Reciprocal teaching"
        ],
        "answer": "Internalization",
        "difficulty": "medium",
        "topic": "Developmental Psychology",
        "explanation": "Internalization is the process of adopting cultural tools, such as language, into one’s cognitive framework, central to Vygotsky’s theory."
    },
    {
        "id": 470,
        "question": "Which memory error involves older information disrupting recall of newer information?",
        "options": [
            "Retroactive interference",
            "Proactive interference",
            "Source amnesia",
            "False memory"
        ],
        "answer": "Proactive interference",
        "difficulty": "medium",
        "topic": "Memory",
        "explanation": "Proactive interference occurs when previously learned information interferes with the recall of newly learned information."
    },
    {
        "id": 471,
        "question": "Which cognitive bias involves presenting information to influence decisions?",
        "options": [
            "Framing effect",
            "Availability heuristic",
            "Confirmation bias",
            "Anchoring bias"
        ],
        "answer": "Framing effect",
        "difficulty": "medium",
        "topic": "Cognition and Intelligence",
        "explanation": "The framing effect influences decisions based on how information is presented, such as emphasizing gains or losses."
    },
    {
        "id": 472,
        "question": "Which emotion is associated with loss or disappointment?",
        "options": [
            "Anger",
            "Sadness",
            "Fear",
            "Joy"
        ],
        "answer": "Sadness",
        "difficulty": "easy",
        "topic": "Motivation and Emotion",
        "explanation": "Sadness is an emotion triggered by loss, failure, or disappointment, often leading to withdrawal or reflection."
    },
    {
        "id": 473,
        "question": "In Adler’s theory, which concept explains overcompensation for perceived weaknesses?",
        "options": [
            "Inferiority complex",
            "Superiority striving",
            "Compensation",
            "Birth order"
        ],
        "answer": "Compensation",
        "difficulty": "medium",
        "topic": "Personality Psychology",
        "explanation": "Compensation involves overachieving in one area to offset perceived deficiencies, as described in Adler’s individual psychology."
    },
    {
        "id": 474,
        "question": "Which disorder involves self-induced symptoms to assume a sick role?",
        "options": [
            "Somatic symptom disorder",
            "Illness anxiety disorder",
            "Factitious disorder",
            "Conversion disorder"
        ],
        "answer": "Factitious disorder",
        "difficulty": "medium",
        "topic": "Psychological Disorders",
        "explanation": "Factitious disorder involves intentionally producing or faking symptoms to gain attention or assume a sick role."
    },
    {
        "id": 475,
        "question": "Which social influence technique involves agreeing to a small request before a larger one?",
        "options": [
            "Door-in-the-face",
            "Foot-in-the-door",
            "Low-ball technique",
            "Reciprocity norm"
        ],
        "answer": "Foot-in-the-door",
        "difficulty": "medium",
        "topic": "Social Psychology",
        "explanation": "The foot-in-the-door technique involves securing agreement to a small request to increase the likelihood of agreeing to a larger one."
    },
    {
        "id": 476,
        "question": "Which stress management technique involves deep breathing and muscle relaxation?",
        "options": [
            "Progressive muscle relaxation",
            "Cognitive restructuring",
            "Time management",
            "Social support"
        ],
        "answer": "Progressive muscle relaxation",
        "difficulty": "easy",
        "topic": "Health and Stress Psychology",
        "explanation": "Progressive muscle relaxation reduces stress by tensing and relaxing muscle groups while focusing on deep breathing."
    },
    {
        "id": 477,
        "question": "In industrial/organizational psychology, what is the term for employee satisfaction with their role?",
        "options": [
            "Job satisfaction",
            "Organizational commitment",
            "Work engagement",
            "Performance appraisal"
        ],
        "answer": "Job satisfaction",
        "difficulty": "easy",
        "topic": "Applied Psychology",
        "explanation": "Job satisfaction reflects employees’ contentment with their roles, influencing productivity and retention."
    },
    {
        "id": 478,
        "question": "In cross-cultural psychology, which concept describes adopting elements of multiple cultures?",
        "options": [
            "Assimilation",
            "Integration",
            "Separation",
            "Marginalization"
        ],
        "answer": "Integration",
        "difficulty": "easy",
        "topic": "Contemporary Issues",
        "explanation": "Integration involves adopting elements of a new culture while maintaining aspects of one’s original culture, fostering bicultural identity."
    },
    {
        "id": 479,
        "question": "Which research method involves in-depth analysis of a single individual or event?",
        "options": [
            "Case study",
            "Survey",
            "Experiment",
            "Correlational study"
        ],
        "answer": "Case study",
        "difficulty": "easy",
        "topic": "Research Methods",
        "explanation": "A case study provides detailed insights into a single individual, group, or event, often used for rare or unique phenomena."
    },
    {
        "id": 480,
        "question": "Which neurotransmitter is critical for learning and memory processes?",
        "options": [
            "Dopamine",
            "Serotonin",
            "Acetylcholine",
            "Norepinephrine"
        ],
        "answer": "Acetylcholine",
        "difficulty": "medium",
        "topic": "Biological Bases",
        "explanation": "Acetylcholine plays a key role in synaptic plasticity, supporting learning and memory, particularly in the hippocampus."
    },
    {
        "id": 481,
        "question": "Which perceptual constancy maintains an object’s perceived size despite distance changes?",
        "options": [
            "Size constancy",
            "Shape constancy",
            "Color constancy",
            "Brightness constancy"
        ],
        "answer": "Size constancy",
        "difficulty": "easy",
        "topic": "Sensation and Perception",
        "explanation": "Size constancy allows perception of an object’s actual size despite changes in its retinal image size due to distance."
    },
    {
        "id": 482,
        "question": "Which psychoactive substance is a stimulant that increases alertness?",
        "options": [
            "Alcohol",
            "Caffeine",
            "Marijuana",
            "Heroin"
        ],
        "answer": "Caffeine",
        "difficulty": "easy",
        "topic": "States of Consciousness",
        "explanation": "Caffeine, a stimulant, increases alertness and reduces fatigue by blocking adenosine receptors in the brain."
    },
    {
        "id": 483,
        "question": "In Kohlberg’s moral development, which stage involves avoiding punishment?",
        "options": [
            "Obedience",
            "Self-interest",
            "Social contract",
            "Law and order"
        ],
        "answer": "Obedience",
        "difficulty": "medium",
        "topic": "Developmental Psychology",
        "explanation": "The obedience stage (preconventional level) involves moral reasoning based on avoiding punishment, typical of young children."
    },
    {
        "id": 484,
        "question": "In operant conditioning, what is the term for reinforcing behaviors after an unpredictable time interval?",
        "options": [
            "Fixed-ratio schedule",
            "Variable-ratio schedule",
            "Fixed-interval schedule",
            "Variable-interval schedule"
        ],
        "answer": "Variable-interval schedule",
        "difficulty": "medium",
        "topic": "Learning and Conditioning",
        "explanation": "A variable-interval schedule reinforces the first response after varying time intervals, producing steady response rates."
    },
    {
        "id": 485,
        "question": "Which memory system briefly holds auditory sensory information?",
        "options": [
            "Iconic memory",
            "Echoic memory",
            "Short-term memory",
            "Long-term memory"
        ],
        "answer": "Echoic memory",
        "difficulty": "easy",
        "topic": "Memory",
        "explanation": "Echoic memory retains auditory information for a few seconds, allowing processing of sounds after they occur."
    },
    {
        "id": 486,
        "question": "Which cognitive process involves simplifying complex problems using rules of thumb?",
        "options": [
            "Heuristic reasoning",
            "Deductive reasoning",
            "Inductive reasoning",
            "Analogical reasoning"
        ],
        "answer": "Heuristic reasoning",
        "difficulty": "medium",
        "topic": "Cognition and Intelligence",
        "explanation": "Heuristic reasoning uses mental shortcuts or rules of thumb to simplify complex problems, though it may lead to errors."
    },
    {
        "id": 487,
        "question": "Which emotion is associated with frustration or perceived injustice?",
        "options": [
            "Sadness",
            "Fear",
            "Anger",
            "Joy"
        ],
        "answer": "Anger",
        "difficulty": "easy",
        "topic": "Motivation and Emotion",
        "explanation": "Anger is triggered by perceived injustice, frustration, or threats, often leading to confrontational behaviors."
    },
    {
        "id": 488,
        "question": "In Jung’s theory, which archetype represents the feminine aspect in men?",
        "options": [
            "Anima",
            "Animus",
            "Shadow",
            "Persona"
        ],
        "answer": "Anima",
        "difficulty": "medium",
        "topic": "Personality Psychology",
        "explanation": "The anima is the unconscious feminine archetype in men, influencing emotions and relationships, according to Jung."
    },
    {
        "id": 489,
        "question": "Which disorder involves extreme mood swings and unstable relationships?",
        "options": [
            "Bipolar disorder",
            "Borderline personality disorder",
            "Narcissistic personality disorder",
            "Schizoid personality disorder"
        ],
        "answer": "Borderline personality disorder",
        "difficulty": "medium",
        "topic": "Psychological Disorders",
        "explanation": "Borderline personality disorder is characterized by unstable moods, relationships, and self-image, with impulsive behaviors."
    },
    {
        "id": 490,
        "question": "Which social influence occurs when individuals lose self-awareness in a crowd?",
        "options": [
            "Deindividuation",
            "Groupthink",
            "Social loafing",
            "Social facilitation"
        ],
        "answer": "Deindividuation",
        "difficulty": "medium",
        "topic": "Social Psychology",
        "explanation": "Deindividuation occurs when individuals lose self-awareness and personal identity in a group, often leading to impulsive actions."
    },
    {
        "id": 491,
        "question": "Which health behavior reduces stress by fostering social connections?",
        "options": [
            "Meditation",
            "Social support",
            "Exercise",
            "Time management"
        ],
        "answer": "Social support",
        "difficulty": "easy",
        "topic": "Health and Stress Psychology",
        "explanation": "Social support, such as strong relationships, buffers stress by providing emotional and practical assistance."
    },
    {
        "id": 492,
        "question": "In military psychology, what is the term for training to enhance psychological resilience?",
        "options": [
            "Combat stress reaction",
            "Resilience training",
            "Critical incident debriefing",
            "Selection screening"
        ],
        "answer": "Resilience training",
        "difficulty": "medium",
        "topic": "Applied Psychology",
        "explanation": "Resilience training equips soldiers with psychological skills to cope with stress and adversity, enhancing mental toughness."
    },
    {
        "id": 493,
        "question": "In cyberpsychology, what is the term for aggressive online behavior intended to harm others?",
        "options": [
            "Trolling",
            "Catfishing",
            "Phishing",
            "Doxing"
        ],
        "answer": "Trolling",
        "difficulty": "easy",
        "topic": "Contemporary Issues",
        "explanation": "Trolling involves posting provocative or harmful content online to elicit emotional reactions or disrupt interactions."
    },
    {
        "id": 494,
        "question": "Which research method involves synthesizing findings from multiple studies?",
        "options": [
            "Meta-analysis",
            "Case study",
            "Survey",
            "Experiment"
        ],
        "answer": "Meta-analysis",
        "difficulty": "medium",
        "topic": "Research Methods",
        "explanation": "Meta-analysis combines data from multiple studies to identify patterns and draw robust conclusions."
    },
    {
        "id": 495,
        "question": "Which brain structure is involved in spatial navigation and memory?",
        "options": [
            "Hippocampus",
            "Amygdala",
            "Cerebellum",
            "Prefrontal cortex"
        ],
        "answer": "Hippocampus",
        "difficulty": "easy",
        "topic": "Biological Bases",
        "explanation": "The hippocampus is critical for spatial navigation and forming episodic memories, such as remembering locations."
    },
    {
        "id": 496,
        "question": "Which perceptual principle completes incomplete figures to form a whole?",
        "options": [
            "Closure",
            "Proximity",
            "Similarity",
            "Continuity"
        ],
        "answer": "Closure",
        "difficulty": "easy",
        "topic": "Sensation and Perception",
        "explanation": "The Gestalt principle of closure allows the brain to fill in gaps in incomplete images to perceive a complete object."
    },
    {
        "id": 497,
        "question": "Which psychoactive substance is a depressant that slows neural activity?",
        "options": [
            "Caffeine",
            "Alcohol",
            "LSD",
            "Amphetamines"
        ],
        "answer": "Alcohol",
        "difficulty": "easy",
        "topic": "States of Consciousness",
        "explanation": "Alcohol, a depressant, slows central nervous system activity, impairing coordination and judgment."
    },
    {
        "id": 498,
        "question": "In moral development, which Kohlberg stage involves universal ethical principles?",
        "options": [
            "Law and order",
            "Social contract",
            "Universal principles",
            "Self-interest"
        ],
        "answer": "Universal principles",
        "difficulty": "medium",
        "topic": "Developmental Psychology",
        "explanation": "The universal principles stage (postconventional level) involves moral reasoning based on abstract, universal ethical values."
    },
    {
        "id": 499,
        "question": "In classical conditioning, what is the term for extending a response to similar stimuli?",
        "options": [
            "Discrimination",
            "Generalization",
            "Extinction",
            "Spontaneous recovery"
        ],
        "answer": "Generalization",
        "difficulty": "medium",
        "topic": "Learning and Conditioning",
        "explanation": "Generalization occurs when a conditioned response is elicited by stimuli similar to the original conditioned stimulus."
    },
    {
        "id": 500,
        "question": "Which memory error involves recalling an event that never occurred?",
        "options": [
            "False memory",
            "Source amnesia",
            "Proactive interference",
            "Confabulation"
        ],
        "answer": "False memory",
        "difficulty": "medium",
        "topic": "Memory",
        "explanation": "False memory involves recalling events that did not happen, often influenced by suggestion or imagination."
    }
]
