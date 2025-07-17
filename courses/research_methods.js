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
        "question": "Which sampling method ensures every member of the population has an equal chance of being selected?",
        "options": [
            "Convenience sampling",
            "Stratified sampling",
            "Simple random sampling",
            "Snowball sampling"
        ],
        "answer": "Simple random sampling",
        "difficulty": "easy",
        "topic": "Sampling",
        "explanation": "Simple random sampling assigns each member of the population an equal probability of selection, often using random number generators or lottery methods."
    },
    {
        "id": 3,
        "question": "What is the purpose of a control group in an experimental study?",
        "options": [
            "To increase sample size",
            "To provide a baseline for comparison",
            "To ensure participant compliance",
            "To reduce experimental costs"
        ],
        "answer": "To provide a baseline for comparison",
        "difficulty": "easy",
        "topic": "Experimental Design",
        "explanation": "A control group receives no treatment or a placebo, allowing researchers to compare outcomes with the experimental group to assess the treatment's effect."
    },
    {
        "id": 4,
        "question": "Which type of variable is manipulated by the researcher in an experiment?",
        "options": [
            "Dependent variable",
            "Independent variable",
            "Confounding variable",
            "Control variable"
        ],
        "answer": "Independent variable",
        "difficulty": "easy",
        "topic": "Variables",
        "explanation": "The independent variable is manipulated by the researcher to observe its effect on the dependent variable."
    },
    {
        "id": 5,
        "question": "What does a p-value of 0.05 indicate in hypothesis testing?",
        "options": [
            "The null hypothesis is true",
            "There is a 5% chance of rejecting the null hypothesis when it is true",
            "The results are 95% accurate",
            "The effect size is small"
        ],
        "answer": "There is a 5% chance of rejecting the null hypothesis when it is true",
        "difficulty": "medium",
        "topic": "Statistical Analysis",
        "explanation": "A p-value of 0.05 indicates a 5% probability of making a Type I error, rejecting a true null hypothesis."
    },
    {
        "id": 6,
        "question": "Which research method involves studying the same group of participants over an extended period?",
        "options": [
            "Cross-sectional study",
            "Case study",
            "Longitudinal study",
            "Experimental study"
        ],
        "answer": "Longitudinal study",
        "difficulty": "medium",
        "topic": "Study Design",
        "explanation": "Longitudinal studies track the same participants over time to observe changes or trends."
    },
    {
        "id": 7,
        "question": "What is the main ethical principle violated if participants are not informed about the study's purpose?",
        "options": [
            "Beneficence",
            "Justice",
            "Informed consent",
            "Confidentiality"
        ],
        "answer": "Informed consent",
        "difficulty": "medium",
        "topic": "Research Ethics",
        "explanation": "Informed consent requires participants to be fully informed about the study's purpose, procedures, and risks before agreeing to participate."
    },
    {
        "id": 8,
        "question": "Which measure of central tendency is most affected by extreme values in a dataset?",
        "options": [
            "Mean",
            "Median",
            "Mode",
            "Midrange"
        ],
        "answer": "Mean",
        "difficulty": "easy",
        "topic": "Descriptive Statistics",
        "explanation": "The mean is calculated by summing all values and dividing by the number of values, making it sensitive to extreme values."
    },
    {
        "id": 9,
        "question": "What is the purpose of random assignment in experimental research?",
        "options": [
            "To increase sample diversity",
            "To control for confounding variables",
            "To reduce participant dropout",
            "To simplify data analysis"
        ],
        "answer": "To control for confounding variables",
        "difficulty": "medium",
        "topic": "Experimental Design",
        "explanation": "Random assignment distributes confounding variables evenly across groups, reducing their impact on the results."
    },
    {
        "id": 10,
        "question": "Which type of validity assesses whether a study measures what it intends to measure?",
        "options": [
            "Internal validity",
            "External validity",
            "Construct validity",
            "Content validity"
        ],
        "answer": "Construct validity",
        "difficulty": "medium",
        "topic": "Validity",
        "explanation": "Construct validity evaluates whether a study accurately measures the theoretical construct it claims to measure."
    },
    {
        "id": 11,
        "question": "What is a Type I error in statistical hypothesis testing?",
        "options": [
            "Failing to reject a false null hypothesis",
            "Rejecting a true null hypothesis",
            "Accepting an alternative hypothesis",
            "Using an incorrect sample size"
        ],
        "answer": "Rejecting a true null hypothesis",
        "difficulty": "medium",
        "topic": "Statistical Analysis",
        "explanation": "A Type I error occurs when a researcher incorrectly rejects a true null hypothesis, also known as a false positive."
    },
    {
        "id": 12,
        "question": "Which sampling method divides the population into strata and samples from each stratum?",
        "options": [
            "Cluster sampling",
            "Stratified sampling",
            "Systematic sampling",
            "Convenience sampling"
        ],
        "answer": "Stratified sampling",
        "difficulty": "medium",
        "topic": "Sampling",
        "explanation": "Stratified sampling divides the population into subgroups (strata) based on a characteristic and samples proportionally from each stratum."
    },
    {
        "id": 13,
        "question": "What is the primary goal of a pilot study?",
        "options": [
            "To confirm the hypothesis",
            "To test the feasibility of the research design",
            "To collect final data",
            "To publish preliminary results"
        ],
        "answer": "To test the feasibility of the research design",
        "difficulty": "easy",
        "topic": "Study Design",
        "explanation": "A pilot study is conducted to assess the practicality of the research methods and identify potential issues before the main study."
    },
    {
        "id": 14,
        "question": "Which type of research design is best for establishing causality?",
        "options": [
            "Correlational study",
            "Experimental study",
            "Descriptive study",
            "Qualitative study"
        ],
        "answer": "Experimental study",
        "difficulty": "medium",
        "topic": "Study Design",
        "explanation": "Experimental studies manipulate variables and use random assignment to establish cause-and-effect relationships."
    },
    {
        "id": 15,
        "question": "What does the term 'reliability' refer to in research?",
        "options": [
            "The accuracy of the measurements",
            "The consistency of the measurements",
            "The generalizability of the findings",
            "The ethical conduct of the study"
        ],
        "answer": "The consistency of the measurements",
        "difficulty": "easy",
        "topic": "Reliability",
        "explanation": "Reliability refers to the degree to which a measurement produces consistent results under similar conditions."
    },
    {
        "id": 16,
        "question": "Which statistical test is used to compare means between two groups?",
        "options": [
            "ANOVA",
            "Chi-square test",
            "T-test",
            "Correlation coefficient"
        ],
        "answer": "T-test",
        "difficulty": "medium",
        "topic": "Statistical Analysis",
        "explanation": "The t-test is used to determine if there is a significant difference between the means of two groups."
    },
    {
        "id": 17,
        "question": "What is a confounding variable?",
        "options": [
            "A variable that is controlled in the study",
            "A variable that affects the dependent variable but is not the independent variable",
            "A variable that is the outcome of interest",
            "A variable that is randomly assigned"
        ],
        "answer": "A variable that affects the dependent variable but is not the independent variable",
        "difficulty": "medium",
        "topic": "Variables",
        "explanation": "A confounding variable influences the dependent variable, potentially skewing the relationship between the independent and dependent variables."
    },
    {
        "id": 18,
        "question": "Which type of data is categorical and has no inherent order?",
        "options": [
            "Nominal data",
            "Ordinal data",
            "Interval data",
            "Ratio data"
        ],
        "answer": "Nominal data",
        "difficulty": "easy",
        "topic": "Data Types",
        "explanation": "Nominal data consists of categories with no inherent order, such as colors or gender."
    },
    {
        "id": 19,
        "question": "What is the purpose of a literature review in a research study?",
        "options": [
            "To collect primary data",
            "To summarize existing research on a topic",
            "To analyze statistical results",
            "To recruit participants"
        ],
        "answer": "To summarize existing research on a topic",
        "difficulty": "easy",
        "topic": "Research Process",
        "explanation": "A literature review synthesizes prior research to provide context, identify gaps, and justify the current study."
    },
    {
        "id": 20,
        "question": "Which ethical principle ensures that participants' personal information is protected?",
        "options": [
            "Informed consent",
            "Confidentiality",
            "Beneficence",
            "Justice"
        ],
        "answer": "Confidentiality",
        "difficulty": "easy",
        "topic": "Research Ethics",
        "explanation": "Confidentiality involves safeguarding participants' personal information to protect their privacy."
    },
    {
        "id": 21,
        "question": "What is the main limitation of a cross-sectional study design?",
        "options": [
            "It is time-consuming",
            "It cannot establish causality",
            "It requires a large sample size",
            "It is prone to selection bias"
        ],
        "answer": "It cannot establish causality",
        "difficulty": "medium",
        "topic": "Study Design",
        "explanation": "Cross-sectional studies collect data at one point in time, making it difficult to determine cause-and-effect relationships."
    },
    {
        "id": 22,
        "question": "Which type of sampling is most likely to introduce bias?",
        "options": [
            "Simple random sampling",
            "Stratified sampling",
            "Convenience sampling",
            "Systematic sampling"
        ],
        "answer": "Convenience sampling",
        "difficulty": "medium",
        "topic": "Sampling",
        "explanation": "Convenience sampling selects participants based on accessibility, which can lead to non-representative samples and bias."
    },
    {
        "id": 23,
        "question": "What does a correlation coefficient of 0 indicate?",
        "options": [
            "A strong positive relationship",
            "A strong negative relationship",
            "No linear relationship",
            "A perfect relationship"
        ],
        "answer": "No linear relationship",
        "difficulty": "medium",
        "topic": "Statistical Analysis",
        "explanation": "A correlation coefficient of 0 indicates no linear relationship between two variables."
    },
    {
        "id": 24,
        "question": "Which type of study design is best for exploring rare outcomes?",
        "options": [
            "Cohort study",
            "Case-control study",
            "Randomized controlled trial",
            "Cross-sectional study"
        ],
        "answer": "Case-control study",
        "difficulty": "hard",
        "topic": "Study Design",
        "explanation": "Case-control studies are efficient for studying rare outcomes by comparing individuals with the outcome (cases) to those without (controls)."
    },
    {
        "id": 25,
        "question": "What is the primary purpose of an Institutional Review Board (IRB)?",
        "options": [
            "To analyze study results",
            "To ensure ethical conduct of research",
            "To fund research projects",
            "To recruit participants"
        ],
        "answer": "To ensure ethical conduct of research",
        "difficulty": "easy",
        "topic": "Research Ethics",
        "explanation": "The IRB reviews research proposals to ensure they meet ethical standards, protecting participants' rights and welfare."
    },
    {
        "id": 26,
        "question": "Which statistical test is used to analyze the difference in proportions between two groups?",
        "options": [
            "T-test",
            "ANOVA",
            "Chi-square test",
            "Mann-Whitney U test"
        ],
        "answer": "Chi-square test",
        "difficulty": "medium",
        "topic": "Statistical Analysis",
        "explanation": "The chi-square test is used to compare proportions or frequencies between two or more categorical groups."
    },
    {
        "id": 27,
        "question": "What is the main advantage of using a placebo in a clinical trial?",
        "options": [
            "It reduces costs",
            "It controls for placebo effects",
            "It increases sample size",
            "It simplifies data collection"
        ],
        "answer": "It controls for placebo effects",
        "difficulty": "medium",
        "topic": "Experimental Design",
        "explanation": "A placebo helps distinguish between the treatment's actual effects and psychological effects (placebo effects) caused by participants' expectations."
    },
    {
        "id": 28,
        "question": "Which type of data has equal intervals but no true zero point?",
        "options": [
            "Nominal data",
            "Ordinal data",
            "Interval data",
            "Ratio data"
        ],
        "answer": "Interval data",
        "difficulty": "medium",
        "topic": "Data Types",
        "explanation": "Interval data, such as temperature in Celsius, has equal intervals but lacks a true zero point."
    },
    {
        "id": 29,
        "question": "What is the purpose of triangulation in qualitative research?",
        "options": [
            "To increase sample size",
            "To validate findings using multiple methods",
            "To simplify data collection",
            "To reduce researcher involvement"
        ],
        "answer": "To validate findings using multiple methods",
        "difficulty": "hard",
        "topic": "Qualitative Methods",
        "explanation": "Triangulation uses multiple data sources or methods to cross-check findings, enhancing the credibility of qualitative research."
    },
    {
        "id": 30,
        "question": "Which type of reliability measures consistency between two different observers?",
        "options": [
            "Test-retest reliability",
            "Internal consistency",
            "Inter-rater reliability",
            "Parallel forms reliability"
        ],
        "answer": "Inter-rater reliability",
        "difficulty": "medium",
        "topic": "Reliability",
        "explanation": "Inter-rater reliability assesses the agreement between two or more observers or raters when measuring the same phenomenon."
    },
    {
        "id": 31,
        "question": "What is a Type II error in hypothesis testing?",
        "options": [
            "Rejecting a true null hypothesis",
            "Failing to reject a false null hypothesis",
            "Using an incorrect statistical test",
            "Misinterpreting the p-value"
        ],
        "answer": "Failing to reject a false null hypothesis",
        "difficulty": "medium",
        "topic": "Statistical Analysis",
        "explanation": "A Type II error occurs when a researcher fails to reject a false null hypothesis, missing a true effect."
    },
    {
        "id": 32,
        "question": "Which type of study is most appropriate for generating hypotheses?",
        "options": [
            "Experimental study",
            "Descriptive study",
            "Randomized controlled trial",
            "Cohort study"
        ],
        "answer": "Descriptive study",
        "difficulty": "easy",
        "topic": "Study Design",
        "explanation": "Descriptive studies observe and describe phenomena, often used to generate hypotheses for further research."
    },
    {
        "id": 33,
        "question": "What is the main purpose of a power analysis?",
        "options": [
            "To determine the sample size needed",
            "To calculate the p-value",
            "To select a statistical test",
            "To summarize data"
        ],
        "answer": "To determine the sample size needed",
        "difficulty": "medium",
        "topic": "Statistical Power",
        "explanation": "Power analysis determines the sample size required to detect a statistically significant effect with adequate power."
    },
    {
        "id": 34,
        "question": "Which type of validity refers to the extent to which results can be applied to other populations?",
        "options": [
            "Internal validity",
            "External validity",
            "Construct validity",
            "Content validity"
        ],
        "answer": "External validity",
        "difficulty": "medium",
        "topic": "Validity",
        "explanation": "External validity assesses how well study findings generalize to other populations or settings."
    },
    {
        "id": 35,
        "question": "What is the primary disadvantage of snowball sampling?",
        "options": [
            "It is time-consuming",
            "It may introduce selection bias",
            "It requires a large sample size",
            "It is expensive"
        ],
        "answer": "It may introduce selection bias",
        "difficulty": "medium",
        "topic": "Sampling",
        "explanation": "Snowball sampling relies on referrals, which can lead to a non-representative sample and bias."
    },
    {
        "id": 36,
        "question": "Which statistical test is used to compare means across three or more groups?",
        "options": [
            "T-test",
            "ANOVA",
            "Chi-square test",
            "Correlation analysis"
        ],
        "answer": "ANOVA",
        "difficulty": "medium",
        "topic": "Statistical Analysis",
        "explanation": "ANOVA (Analysis of Variance) is used to compare means across three or more groups to identify significant differences."
    },
    {
        "id": 37,
        "question": "What is the primary goal of qualitative research?",
        "options": [
            "To test hypotheses",
            "To quantify relationships",
            "To explore meanings and experiences",
            "To establish causality"
        ],
        "answer": "To explore meanings and experiences",
        "difficulty": "easy",
        "topic": "Qualitative Methods",
        "explanation": "Qualitative research focuses on understanding participants' perspectives, experiences, and meanings."
    },
    {
        "id": 38,
        "question": "Which measure of dispersion describes the spread of data around the mean?",
        "options": [
            "Range",
            "Standard deviation",
            "Median",
            "Mode"
        ],
        "answer": "Standard deviation",
        "difficulty": "easy",
        "topic": "Descriptive Statistics",
        "explanation": "Standard deviation measures how much data points deviate from the mean, indicating data spread."
    },
    {
        "id": 39,
        "question": "What is the main advantage of a cohort study?",
        "options": [
            "It is quick to conduct",
            "It can establish temporal relationships",
            "It eliminates all bias",
            "It requires a small sample size"
        ],
        "answer": "It can establish temporal relationships",
        "difficulty": "hard",
        "topic": "Study Design",
        "explanation": "Cohort studies follow groups over time, allowing researchers to observe the sequence of exposures and outcomes."
    },
    {
        "id": 40,
        "question": "Which type of bias occurs when participants drop out of a study?",
        "options": [
            "Selection bias",
            "Attrition bias",
            "Recall bias",
            "Publication bias"
        ],
        "answer": "Attrition bias",
        "difficulty": "medium",
        "topic": "Bias",
        "explanation": "Attrition bias occurs when participants drop out, potentially skewing results if dropouts differ systematically from those who remain."
    },
    {
        "id": 41,
        "question": "What is the purpose of a null hypothesis?",
        "options": [
            "To prove the research hypothesis",
            "To state there is no effect or difference",
            "To establish causality",
            "To summarize study findings"
        ],
        "answer": "To state there is no effect or difference",
        "difficulty": "easy",
        "topic": "Hypothesis Testing",
        "explanation": "The null hypothesis assumes no effect or difference, serving as a baseline to test against the alternative hypothesis."
    },
    {
        "id": 42,
        "question": "Which type of research is conducted without manipulating variables?",
        "options": [
            "Experimental research",
            "Quasi-experimental research",
            "Observational research",
            "Clinical trial"
        ],
        "answer": "Observational research",
        "difficulty": "easy",
        "topic": "Study Design",
        "explanation": "Observational research involves observing and measuring variables without intervention or manipulation."
    },
    {
        "id": 43,
        "question": "What is the primary purpose of a research question?",
        "options": [
            "To summarize findings",
            "To guide the study design",
            "To recruit participants",
            "To analyze data"
        ],
        "answer": "To guide the study design",
        "difficulty": "easy",
        "topic": "Research Process",
        "explanation": "A research question defines the study's focus and guides the design, methodology, and analysis."
    },
    {
        "id": 44,
        "question": "Which type of data is ordered but has unequal intervals between values?",
        "options": [
            "Nominal data",
            "Ordinal data",
            "Interval data",
            "Ratio data"
        ],
        "answer": "Ordinal data",
        "difficulty": "medium",
        "topic": "Data Types",
        "explanation": "Ordinal data has a meaningful order but unequal intervals, such as survey ratings (e.g., poor, fair, good)."
    },
    {
        "id": 45,
        "question": "What is the main limitation of a case study design?",
        "options": [
            "It is expensive",
            "It lacks generalizability",
            "It requires a large sample",
            "It is time-consuming"
        ],
        "answer": "It lacks generalizability",
        "difficulty": "medium",
        "topic": "Study Design",
        "explanation": "Case studies provide in-depth insights but are limited to specific cases, making findings difficult to generalize."
    },
    {
        "id": 46,
        "question": "Which statistical test is used for non-parametric data to compare two groups?",
        "options": [
            "T-test",
            "ANOVA",
            "Mann-Whitney U test",
            "Chi-square test"
        ],
        "answer": "Mann-Whitney U test",
        "difficulty": "hard",
        "topic": "Statistical Analysis",
        "explanation": "The Mann-Whitney U test is a non-parametric test used to compare two independent groups when data does not meet normality assumptions."
    },
    {
        "id": 47,
        "question": "What is the primary purpose of debriefing in research?",
        "options": [
            "To recruit participants",
            "To explain the study to participants after completion",
            "To analyze data",
            "To design the study"
        ],
        "answer": "To explain the study to participants after completion",
        "difficulty": "easy",
        "topic": "Research Ethics",
        "explanation": "Debriefing informs participants about the study's purpose and any deception used, ensuring ethical closure."
    },
    {
        "id": 48,
        "question": "Which type of bias occurs when participants provide inaccurate memories of past events?",
        "options": [
            "Selection bias",
            "Attrition bias",
            "Recall bias",
            "Confirmation bias"
        ],
        "answer": "Recall bias",
        "difficulty": "medium",
        "topic": "Bias",
        "explanation": "Recall bias occurs when participants' memories of past events are inaccurate, affecting data quality."
    },
    {
        "id": 49,
        "question": "What is the main advantage of using a mixed-methods research design?",
        "options": [
            "It reduces costs",
            "It combines quantitative and qualitative insights",
            "It eliminates bias",
            "It simplifies analysis"
        ],
        "answer": "It combines quantitative and qualitative insights",
        "difficulty": "medium",
        "topic": "Study Design",
        "explanation": "Mixed-methods research integrates quantitative and qualitative approaches to provide a more comprehensive understanding."
    },
    {
        "id": 50,
        "question": "Which measure of central tendency is the most frequent value in a dataset?",
        "options": [
            "Mean",
            "Median",
            "Mode",
            "Midrange"
        ],
        "answer": "Mode",
        "difficulty": "easy",
        "topic": "Descriptive Statistics",
        "explanation": "The mode is the value that appears most frequently in a dataset."
    },
    {
        "id": 51,
        "question": "What is the primary purpose of a research hypothesis?",
        "options": [
            "To summarize data",
            "To predict an expected outcome",
            "To recruit participants",
            "To ensure ethical conduct"
        ],
        "answer": "To predict an expected outcome",
        "difficulty": "easy",
        "topic": "Hypothesis Testing",
        "explanation": "A research hypothesis predicts the expected relationship or outcome to be tested in the study."
    },
    {
        "id": 52,
        "question": "Which type of study design compares individuals with and without a specific outcome?",
        "options": [
            "Cohort study",
            "Case-control study",
            "Cross-sectional study",
            "Experimental study"
        ],
        "answer": "Case-control study",
        "difficulty": "medium",
        "topic": "Study Design",
        "explanation": "Case-control studies compare individuals with an outcome (cases) to those without (controls) to identify associated factors."
    },
    {
        "id": 53,
        "question": "What is the main disadvantage of a longitudinal study?",
        "options": [
            "It is quick to conduct",
            "It is prone to participant attrition",
            "It cannot track changes over time",
            "It requires a small sample size"
        ],
        "answer": "It is prone to participant attrition",
        "difficulty": "medium",
        "topic": "Study Design",
        "explanation": "Longitudinal studies face challenges with participant dropout over time, which can introduce attrition bias."
    },
    {
        "id": 54,
        "question": "Which statistical test is used to assess the relationship between two categorical variables?",
        "options": [
            "T-test",
            "ANOVA",
            "Chi-square test",
            "Correlation coefficient"
        ],
        "answer": "Chi-square test",
        "difficulty": "medium",
        "topic": "Statistical Analysis",
        "explanation": "The chi-square test evaluates whether there is a significant association between two categorical variables."
    },
    {
        "id": 55,
        "question": "What is the primary purpose of a theoretical framework in research?",
        "options": [
            "To collect data",
            "To guide the study with established theories",
            "To analyze results",
            "To recruit participants"
        ],
        "answer": "To guide the study with established theories",
        "difficulty": "medium",
        "topic": "Research Process",
        "explanation": "A theoretical framework provides a foundation of established theories to guide the research question and methodology."
    },
    {
        "id": 56,
        "question": "Which type of validity ensures that a test covers all relevant aspects of a construct?",
        "options": [
            "Construct validity",
            "Content validity",
            "Internal validity",
            "External validity"
        ],
        "answer": "Content validity",
        "difficulty": "medium",
        "topic": "Validity",
        "explanation": "Content validity ensures that a test or measure adequately covers all relevant aspects of the construct being measured."
    },
    {
        "id": 57,
        "question": "What is the main advantage of cluster sampling?",
        "options": [
            "It ensures representativeness",
            "It reduces logistical costs",
            "It eliminates bias",
            "It increases sample size"
        ],
        "answer": "It reduces logistical costs",
        "difficulty": "medium",
        "topic": "Sampling",
        "explanation": "Cluster sampling groups the population into clusters and samples entire clusters, reducing costs and logistical challenges."
    },
    {
        "id": 58,
        "question": "Which type of research design is most susceptible to history effects?",
        "options": [
            "Experimental study",
            "Quasi-experimental study",
            "Cross-sectional study",
            "Case study"
        ],
        "answer": "Quasi-experimental study",
        "difficulty": "hard",
        "topic": "Study Design",
        "explanation": "Quasi-experimental studies lack random assignment, making them more vulnerable to external events (history effects) impacting results."
    },
    {
        "id": 59,
        "question": "What is the primary purpose of a confidence interval?",
        "options": [
            "To determine the p-value",
            "To estimate the range of a population parameter",
            "To reject the null hypothesis",
            "To calculate effect size"
        ],
        "answer": "To estimate the range of a population parameter",
        "difficulty": "medium",
        "topic": "Statistical Analysis",
        "explanation": "A confidence interval provides a range within which the true population parameter is likely to lie, typically at a 95% confidence level."
    },
    {
        "id": 60,
        "question": "Which ethical principle emphasizes maximizing benefits and minimizing harm?",
        "options": [
            "Justice",
            "Beneficence",
            "Informed consent",
            "Confidentiality"
        ],
        "answer": "Beneficence",
        "difficulty": "medium",
        "topic": "Research Ethics",
        "explanation": "Beneficence requires researchers to maximize benefits to participants and society while minimizing potential harm."
    },
    {
        "id": 61,
        "question": "What is the main limitation of a convenience sample?",
        "options": [
            "It is time-consuming",
            "It lacks representativeness",
            "It requires a large sample",
            "It is expensive"
        ],
        "answer": "It lacks representativeness",
        "difficulty": "easy",
        "topic": "Sampling",
        "explanation": "Convenience samples are based on accessibility, often failing to represent the broader population."
    },
    {
        "id": 62,
        "question": "Which type of data has a true zero point and allows for ratios?",
        "options": [
            "Nominal data",
            "Ordinal data",
            "Interval data",
            "Ratio data"
        ],
        "answer": "Ratio data",
        "difficulty": "medium",
        "topic": "Data Types",
        "explanation": "Ratio data has a true zero point, enabling meaningful ratios, such as weight or height."
    },
    {
        "id": 63,
        "question": "What is the primary purpose of a research proposal?",
        "options": [
            "To summarize findings",
            "To outline the study plan",
            "To recruit participants",
            "To analyze data"
        ],
        "answer": "To outline the study plan",
        "difficulty": "easy",
        "topic": "Research Process",
        "explanation": "A research proposal details the study's objectives, methodology, and timeline to gain approval or funding."
    },
    {
        "id": 64,
        "question": "Which type of bias occurs when researchers selectively report positive results?",
        "options": [
            "Selection bias",
            "Attrition bias",
            "Publication bias",
            "Recall bias"
        ],
        "answer": "Publication bias",
        "difficulty": "medium",
        "topic": "Bias",
        "explanation": "Publication bias occurs when studies with positive or significant results are more likely to be published than those with negative results."
    },
    {
        "id": 65,
        "question": "What is the main advantage of a randomized controlled trial (RCT)?",
        "options": [
            "It is quick to conduct",
            "It minimizes confounding variables",
            "It requires a small sample size",
            "It eliminates all bias"
        ],
        "answer": "It minimizes confounding variables",
        "difficulty": "medium",
        "topic": "Study Design",
        "explanation": "RCTs use random assignment to distribute confounding variables evenly, enhancing causal inference."
    },
    {
        "id": 66,
        "question": "Which statistical test is used to compare paired data?",
        "options": [
            "Independent t-test",
            "Paired t-test",
            "ANOVA",
            "Chi-square test"
        ],
        "answer": "Paired t-test",
        "difficulty": "medium",
        "topic": "Statistical Analysis",
        "explanation": "The paired t-test compares means from the same group under two conditions or time points."
    },
    {
        "id": 67,
        "question": "What is the primary purpose of a research design?",
        "options": [
            "To collect data",
            "To structure the study to answer the research question",
            "To recruit participants",
            "To summarize findings"
        ],
        "answer": "To structure the study to answer the research question",
        "difficulty": "easy",
        "topic": "Study Design",
        "explanation": "A research design outlines the methodology to effectively address the research question."
    },
    {
        "id": 68,
        "question": "Which type of reliability measures consistency within a single test?",
        "options": [
            "Test-retest reliability",
            "Inter-rater reliability",
            "Internal consistency",
            "Parallel forms reliability"
        ],
        "answer": "Internal consistency",
        "difficulty": "medium",
        "topic": "Reliability",
        "explanation": "Internal consistency assesses how well items in a test measure the same construct, often using Cronbach's alpha."
    },
    {
        "id": 69,
        "question": "What is the main limitation of a correlational study?",
        "options": [
            "It is expensive",
            "It cannot establish causality",
            "It requires a large sample",
            "It is time-consuming"
        ],
        "answer": "It cannot establish causality",
        "difficulty": "medium",
        "topic": "Study Design",
        "explanation": "Correlational studies identify relationships but cannot determine cause-and-effect due to lack of manipulation."
    },
    {
        "id": 70,
        "question": "Which measure of dispersion is the difference between the maximum and minimum values?",
        "options": [
            "Range",
            "Standard deviation",
            "Variance",
            "Interquartile range"
        ],
        "answer": "Range",
        "difficulty": "easy",
        "topic": "Descriptive Statistics",
        "explanation": "The range is the simplest measure of dispersion, calculated as the difference between the highest and lowest values."
    },
    {
        "id": 71,
        "question": "What is the primary purpose of a focus group in qualitative research?",
        "options": [
            "To test hypotheses",
            "To gather in-depth insights through discussion",
            "To quantify relationships",
            "To establish causality"
        ],
        "answer": "To gather in-depth insights through discussion",
        "difficulty": "medium",
        "topic": "Qualitative Methods",
        "explanation": "Focus groups facilitate group discussions to explore participants' perspectives and generate qualitative data."
    },
    {
        "id": 72,
        "question": "Which type of sampling selects every nth individual from a list?",
        "options": [
            "Simple random sampling",
            "Stratified sampling",
            "Systematic sampling",
            "Convenience sampling"
        ],
        "answer": "Systematic sampling",
        "difficulty": "medium",
        "topic": "Sampling",
        "explanation": "Systematic sampling involves selecting every nth individual from a population list, starting from a random point."
    },
    {
        "id": 73,
        "question": "What is the main advantage of a double-blind study over a single-blind study?",
        "options": [
            "It reduces costs",
            "It eliminates researcher bias",
            "It increases sample size",
            "It simplifies data collection"
        ],
        "answer": "It eliminates researcher bias",
        "difficulty": "medium",
        "topic": "Study Design",
        "explanation": "Double-blind studies prevent both participants and researchers from knowing group assignments, reducing researcher bias."
    },
    {
        "id": 74,
        "question": "Which statistical test is used to analyze ordinal data across multiple groups?",
        "options": [
            "T-test",
            "ANOVA",
            "Kruskal-Wallis test",
            "Chi-square test"
        ],
        "answer": "Kruskal-Wallis test",
        "difficulty": "hard",
        "topic": "Statistical Analysis",
        "explanation": "The Kruskal-Wallis test is a non-parametric test used to compare ordinal or non-normal data across three or more groups."
    },
    {
        "id": 75,
        "question": "What is the primary purpose of a research ethics committee?",
        "options": [
            "To analyze data",
            "To ensure participant safety and ethical conduct",
            "To recruit participants",
            "To summarize findings"
        ],
        "answer": "To ensure participant safety and ethical conduct",
        "difficulty": "easy",
        "topic": "Research Ethics",
        "explanation": "Research ethics committees review studies to protect participants and ensure ethical standards are met."
    },
    {
        "id": 76,
        "question": "Which type of study design is most appropriate for assessing prevalence?",
        "options": [
            "Cohort study",
            "Case-control study",
            "Cross-sectional study",
            "Experimental study"
        ],
        "answer": "Cross-sectional study",
        "difficulty": "medium",
        "topic": "Study Design",
        "explanation": "Cross-sectional studies collect data at one point in time, making them ideal for estimating prevalence."
    },
    {
        "id": 77,
        "question": "What is the main limitation of a quasi-experimental study?",
        "options": [
            "It is expensive",
            "It lacks random assignment",
            "It requires a large sample",
            "It is time-consuming"
        ],
        "answer": "It lacks random assignment",
        "difficulty": "medium",
        "topic": "Study Design",
        "explanation": "Quasi-experimental studies do not use random assignment, increasing the risk of confounding variables."
    },
    {
        "id": 78,
        "question": "Which measure of central tendency is the middle value in an ordered dataset?",
        "options": [
            "Mean",
            "Median",
            "Mode",
            "Midrange"
        ],
        "answer": "Median",
        "difficulty": "easy",
        "topic": "Descriptive Statistics",
        "explanation": "The median is the middle value when data is ordered, resistant to extreme values."
    },
    {
        "id": 79,
        "question": "What is the primary purpose of a meta-analysis?",
        "options": [
            "To collect primary data",
            "To combine results from multiple studies",
            "To recruit participants",
            "To design a new study"
        ],
        "answer": "To combine results from multiple studies",
        "difficulty": "medium",
        "topic": "Research Synthesis",
        "explanation": "Meta-analysis statistically combines results from multiple studies to increase precision and generalizability."
    },
    {
        "id": 80,
        "question": "Which type of bias occurs when participants are aware of being observed?",
        "options": [
            "Selection bias",
            "Hawthorne effect",
            "Recall bias",
            "Publication bias"
        ],
        "answer": "Hawthorne effect",
        "difficulty": "medium",
        "topic": "Bias",
        "explanation": "The Hawthorne effect occurs when participants alter their behavior because they know they are being observed."
    },
    {
        "id": 81,
        "question": "What is the main advantage of stratified sampling over simple random sampling?",
        "options": [
            "It is easier to implement",
            "It ensures representation of subgroups",
            "It reduces sample size",
            "It eliminates bias"
        ],
        "answer": "It ensures representation of subgroups",
        "difficulty": "medium",
        "topic": "Sampling",
        "explanation": "Stratified sampling ensures that specific subgroups are proportionally represented in the sample."
    },
    {
        "id": 82,
        "question": "Which type of reliability measures consistency over time?",
        "options": [
            "Test-retest reliability",
            "Inter-rater reliability",
            "Internal consistency",
            "Parallel forms reliability"
        ],
        "answer": "Test-retest reliability",
        "difficulty": "medium",
        "topic": "Reliability",
        "explanation": "Test-retest reliability assesses consistency of a measure when administered at different times."
    },
    {
        "id": 83,
        "question": "What is the primary purpose of a control variable?",
        "options": [
            "To manipulate the study outcome",
            "To hold constant potential confounding factors",
            "To measure the dependent variable",
            "To increase sample size"
        ],
        "answer": "To hold constant potential confounding factors",
        "difficulty": "medium",
        "topic": "Variables",
        "explanation": "Control variables are held constant to isolate the effect of the independent variable on the dependent variable."
    },
    {
        "id": 84,
        "question": "Which type of study design is most appropriate for studying risk factors over time?",
        "options": [
            "Cross-sectional study",
            "Case-control study",
            "Cohort study",
            "Experimental study"
        ],
        "answer": "Cohort study",
        "difficulty": "medium",
        "topic": "Study Design",
        "explanation": "Cohort studies follow groups with different exposures over time to assess risk factors for outcomes."
    },
    {
        "id": 85,
        "question": "What is the main limitation of a small sample size?",
        "options": [
            "It increases costs",
            "It reduces statistical power",
            "It eliminates bias",
            "It simplifies analysis"
        ],
        "answer": "It reduces statistical power",
        "difficulty": "medium",
        "topic": "Statistical Power",
        "explanation": "Small sample sizes reduce the ability to detect significant effects, lowering statistical power."
    },
    {
        "id": 86,
        "question": "Which statistical test is used to compare means within the same group over time?",
        "options": [
            "Independent t-test",
            "Paired t-test",
            "ANOVA",
            "Chi-square test"
        ],
        "answer": "Paired t-test",
        "difficulty": "medium",
        "topic": "Statistical Analysis",
        "explanation": "The paired t-test is used for comparing means within the same group under two conditions or time points."
    },
    {
        "id": 87,
        "question": "What is the primary purpose of a research abstract?",
        "options": [
            "To provide a detailed methodology",
            "To summarize the study briefly",
            "To recruit participants",
            "To analyze data"
        ],
        "answer": "To summarize the study briefly",
        "difficulty": "easy",
        "topic": "Research Communication",
        "explanation": "An abstract provides a concise overview of the study's purpose, methods, results, and conclusions."
    },
    {
        "id": 88,
        "question": "Which type of bias occurs when researchers interpret data to confirm their hypotheses?",
        "options": [
            "Selection bias",
            "Confirmation bias",
            "Recall bias",
            "Attrition bias"
        ],
        "answer": "Confirmation bias",
        "difficulty": "medium",
        "topic": "Bias",
        "explanation": "Confirmation bias occurs when researchers favor data or interpretations that align with their preconceived beliefs."
    },
    {
        "id": 89,
        "question": "What is the main advantage of a systematic review?",
        "options": [
            "It is quick to conduct",
            "It synthesizes evidence rigorously",
            "It requires a small sample size",
            "It eliminates all bias"
        ],
        "answer": "It synthesizes evidence rigorously",
        "difficulty": "medium",
        "topic": "Research Synthesis",
        "explanation": "Systematic reviews use a structured methodology to synthesize evidence from multiple studies, minimizing bias."
    },
    {
        "id": 90,
        "question": "Which type of data collection method involves structured questionnaires?",
        "options": [
            "Interviews",
            "Focus groups",
            "Surveys",
            "Observations"
        ],
        "answer": "Surveys",
        "difficulty": "easy",
        "topic": "Data Collection",
        "explanation": "Surveys use structured questionnaires to collect standardized data from participants."
    },
    {
        "id": 91,
        "question": "What is the primary purpose of a dependent variable?",
        "options": [
            "To manipulate the study outcome",
            "To measure the effect of the independent variable",
            "To control confounding factors",
            "To increase sample size"
        ],
        "answer": "To measure the effect of the independent variable",
        "difficulty": "easy",
        "topic": "Variables",
        "explanation": "The dependent variable is the outcome measured to assess the effect of the independent variable."
    },
    {
        "id": 92,
        "question": "Which type of study design is most appropriate for exploring participant experiences?",
        "options": [
            "Experimental study",
            "Qualitative study",
            "Cohort study",
            "Cross-sectional study"
        ],
        "answer": "Qualitative study",
        "difficulty": "easy",
        "topic": "Study Design",
        "explanation": "Qualitative studies focus on exploring participants' experiences, perceptions, and meanings."
    },
    {
        "id": 93,
        "question": "What is the main limitation of a retrospective study?",
        "options": [
            "It is expensive",
            "It relies on existing data",
            "It requires a large sample",
            "It is time-consuming"
        ],
        "answer": "It relies on existing data",
        "difficulty": "medium",
        "topic": "Study Design",
        "explanation": "Retrospective studies use existing data, which may be incomplete or inaccurate, limiting data quality."
    },
    {
        "id": 94,
        "question": "Which statistical test is used to assess the strength of a linear relationship?",
        "options": [
            "T-test",
            "ANOVA",
            "Correlation coefficient",
            "Chi-square test"
        ],
        "answer": "Correlation coefficient",
        "difficulty": "medium",
        "topic": "Statistical Analysis",
        "explanation": "The correlation coefficient measures the strength and direction of a linear relationship between two variables."
    },
    {
        "id": 95,
        "question": "What is the primary purpose of a research methodology section?",
        "options": [
            "To summarize findings",
            "To describe the study procedures",
            "To recruit participants",
            "To analyze data"
        ],
        "answer": "To describe the study procedures",
        "difficulty": "easy",
        "topic": "Research Communication",
        "explanation": "The methodology section details the study's design, participants, data collection, and analysis procedures."
    },
    {
        "id": 96,
        "question": "Which type of validity assesses the consistency of results across different settings?",
        "options": [
            "Internal validity",
            "External validity",
            "Construct validity",
            "Content validity"
        ],
        "answer": "External validity",
        "difficulty": "medium",
        "topic": "Validity",
        "explanation": "External validity evaluates how well study results apply to different populations, settings, or conditions."
    },
    {
        "id": 97,
        "question": "What is the main advantage of systematic sampling?",
        "options": [
            "It ensures representativeness",
            "It is simple to implement",
            "It eliminates bias",
            "It increases sample size"
        ],
        "answer": "It is simple to implement",
        "difficulty": "medium",
        "topic": "Sampling",
        "explanation": "Systematic sampling is straightforward, selecting every nth individual from a list, making it easier to implement."
    },
    {
        "id": 98,
        "question": "Which type of research design manipulates variables but lacks random assignment?",
        "options": [
            "Experimental study",
            "Quasi-experimental study",
            "Observational study",
            "Case study"
        ],
        "answer": "Quasi-experimental study",
        "difficulty": "medium",
        "topic": "Study Design",
        "explanation": "Quasi-experimental studies manipulate variables but do not use random assignment, limiting causal inference."
    },
    {
        "id": 99,
        "question": "What is the primary purpose of a research discussion section?",
        "options": [
            "To describe the methodology",
            "To interpret and contextualize findings",
            "To recruit participants",
            "To collect data"
        ],
        "answer": "To interpret and contextualize findings",
        "difficulty": "easy",
        "topic": "Research Communication",
        "explanation": "The discussion section interprets results, compares them to prior research, and discusses implications."
    },
    {
        "id": 100,
        "question": "Which type of bias occurs when participants are not randomly selected?",
        "options": [
            "Selection bias",
            "Attrition bias",
            "Recall bias",
            "Confirmation bias"
        ],
        "answer": "Selection bias",
        "difficulty": "medium",
        "topic": "Bias",
        "explanation": "Selection bias occurs when participants are not randomly selected, leading to a non-representative sample."
    },
    {
        "id": 101,
        "question": "What is the primary purpose of scientific research?",
        "options": [
            "To generate profit",
            "To advance knowledge through systematic inquiry",
            "To replicate existing studies",
            "To promote a specific agenda"
        ],
        "answer": "To advance knowledge through systematic inquiry",
        "difficulty": "easy",
        "topic": "Foundations of Research",
        "explanation": "Scientific research aims to systematically investigate phenomena to advance knowledge and understanding."
    },
    {
        "id": 102,
        "question": "Which characteristic of scientific research emphasizes objectivity?",
        "options": [
            "Subjectivity",
            "Empirical evidence",
            "Speculation",
            "Personal opinion"
        ],
        "answer": "Empirical evidence",
        "difficulty": "easy",
        "topic": "Foundations of Research",
        "explanation": "Scientific research relies on empirical evidence, ensuring findings are based on objective data rather than personal opinion."
    },
    {
        "id": 103,
        "question": "Which type of research seeks to solve practical problems?",
        "options": [
            "Basic research",
            "Applied research",
            "Exploratory research",
            "Descriptive research"
        ],
        "answer": "Applied research",
        "difficulty": "easy",
        "topic": "Foundations of Research",
        "explanation": "Applied research focuses on addressing practical issues and providing solutions to real-world problems."
    },
    {
        "id": 104,
        "question": "Which research paradigm assumes that reality is objective and measurable?",
        "options": [
            "Interpretivism",
            "Positivism",
            "Critical theory",
            "Pragmatism"
        ],
        "answer": "Positivism",
        "difficulty": "medium",
        "topic": "Foundations of Research",
        "explanation": "Positivism assumes an objective reality that can be studied and measured through scientific methods."
    },
    {
        "id": 105,
        "question": "What does ontology in research refer to?",
        "options": [
            "The study of knowledge",
            "The nature of reality",
            "Ethical principles",
            "Data collection methods"
        ],
        "answer": "The nature of reality",
        "difficulty": "medium",
        "topic": "Foundations of Research",
        "explanation": "Ontology examines the nature of reality, addressing questions about what exists and how entities are related."
    },
    {
        "id": 106,
        "question": "Which ethical consideration ensures participants can withdraw from a study at any time?",
        "options": [
            "Informed consent",
            "Voluntary participation",
            "Confidentiality",
            "Beneficence"
        ],
        "answer": "Voluntary participation",
        "difficulty": "easy",
        "topic": "Foundations of Research",
        "explanation": "Voluntary participation ensures participants can freely choose to participate and withdraw without coercion."
    },
    {
        "id": 107,
        "question": "What is a key criterion for a good research problem?",
        "options": [
            "It is broad and vague",
            "It is feasible and researchable",
            "It lacks significance",
            "It is unrelated to existing knowledge"
        ],
        "answer": "It is feasible and researchable",
        "difficulty": "easy",
        "topic": "Research Problem & Hypothesis",
        "explanation": "A good research problem must be feasible, researchable, and addressable within the study's scope and resources."
    },
    {
        "id": 108,
        "question": "What is the purpose of formulating research objectives?",
        "options": [
            "To summarize findings",
            "To guide the study's focus and scope",
            "To recruit participants",
            "To analyze data"
        ],
        "answer": "To guide the study's focus and scope",
        "difficulty": "easy",
        "topic": "Research Problem & Hypothesis",
        "explanation": "Research objectives provide specific, measurable goals to direct the study's focus and methodology."
    },
    {
        "id": 109,
        "question": "Which type of hypothesis states there is no effect or relationship?",
        "options": [
            "Alternative hypothesis",
            "Null hypothesis",
            "Directional hypothesis",
            "Non-directional hypothesis"
        ],
        "answer": "Null hypothesis",
        "difficulty": "easy",
        "topic": "Research Problem & Hypothesis",
        "explanation": "The null hypothesis posits no effect or relationship, serving as the default for statistical testing."
    },
    {
        "id": 110,
        "question": "What is an extraneous variable?",
        "options": [
            "A variable manipulated by the researcher",
            "A variable that influences the dependent variable unintentionally",
            "The outcome variable",
            "A controlled variable"
        ],
        "answer": "A variable that influences the dependent variable unintentionally",
        "difficulty": "medium",
        "topic": "Research Problem & Hypothesis",
        "explanation": "Extraneous variables are external factors that may affect the dependent variable, potentially confounding results."
    },
    {
        "id": 111,
        "question": "What is a key purpose of a literature review?",
        "options": [
            "To collect primary data",
            "To identify gaps in existing research",
            "To analyze statistical results",
            "To recruit participants"
        ],
        "answer": "To identify gaps in existing research",
        "difficulty": "easy",
        "topic": "Literature Review",
        "explanation": "A literature review synthesizes prior research to identify gaps, providing a rationale for the current study."
    },
    {
        "id": 112,
        "question": "Which type of literature review uses a rigorous, protocol-driven approach?",
        "options": [
            "Narrative review",
            "Systematic review",
            "Scoping review",
            "Integrative review"
        ],
        "answer": "Systematic review",
        "difficulty": "medium",
        "topic": "Literature Review",
        "explanation": "Systematic reviews follow a structured protocol to minimize bias and synthesize evidence comprehensively."
    },
    {
        "id": 113,
        "question": "Which source of literature is considered a primary source?",
        "options": [
            "Textbooks",
            "Review articles",
            "Original research articles",
            "Encyclopedias"
        ],
        "answer": "Original research articles",
        "difficulty": "easy",
        "topic": "Literature Review",
        "explanation": "Primary sources, like original research articles, provide firsthand data or findings from studies."
    },
    {
        "id": 114,
        "question": "Which referencing style uses parenthetical citations with author and year?",
        "options": [
            "APA",
            "MLA",
            "Chicago Notes",
            "Chicago Author-Date"
        ],
        "answer": "APA",
        "difficulty": "medium",
        "topic": "Literature Review",
        "explanation": "APA style uses parenthetical citations (e.g., Author, Year) for in-text referencing."
    },
    {
        "id": 115,
        "question": "What is a theoretical framework in a literature review?",
        "options": [
            "A summary of data collection methods",
            "A set of theories guiding the research",
            "A statistical analysis plan",
            "A list of research participants"
        ],
        "answer": "A set of theories guiding the research",
        "difficulty": "medium",
        "topic": "Literature Review",
        "explanation": "A theoretical framework provides a foundation of theories to contextualize and guide the research."
    },
    {
        "id": 116,
        "question": "What is a key component of a research design?",
        "options": [
            "Data analysis software",
            "Sampling strategy",
            "Publication plan",
            "Funding proposal"
        ],
        "answer": "Sampling strategy",
        "difficulty": "easy",
        "topic": "Research Design",
        "explanation": "A research design includes the sampling strategy to ensure the study addresses the research question effectively."
    },
    {
        "id": 117,
        "question": "Which research design lacks a control group?",
        "options": [
            "True experimental",
            "Quasi-experimental",
            "Pre-experimental",
            "Randomized controlled trial"
        ],
        "answer": "Pre-experimental",
        "difficulty": "medium",
        "topic": "Research Design",
        "explanation": "Pre-experimental designs often lack a control group, limiting their ability to establish causality."
    },
    {
        "id": 118,
        "question": "What is the main difference between longitudinal and cross-sectional studies?",
        "options": [
            "Sample size",
            "Data collection method",
            "Time of data collection",
            "Statistical analysis"
        ],
        "answer": "Time of data collection",
        "difficulty": "medium",
        "topic": "Research Design",
        "explanation": "Longitudinal studies collect data over time, while cross-sectional studies collect data at a single point."
    },
    {
        "id": 119,
        "question": "Which research design combines quantitative and qualitative methods?",
        "options": [
            "Experimental design",
            "Mixed-methods design",
            "Observational design",
            "Case study design"
        ],
        "answer": "Mixed-methods design",
        "difficulty": "easy",
        "topic": "Research Design",
        "explanation": "Mixed-methods design integrates quantitative and qualitative approaches for a comprehensive analysis."
    },
    {
        "id": 120,
        "question": "What is action research primarily focused on?",
        "options": [
            "Testing hypotheses",
            "Solving practical problems through collaboration",
            "Establishing causality",
            "Describing phenomena"
        ],
        "answer": "Solving practical problems through collaboration",
        "difficulty": "medium",
        "topic": "Research Design",
        "explanation": "Action research involves collaborative efforts to address practical issues and implement solutions."
    },
    {
        "id": 121,
        "question": "What defines a population in research?",
        "options": [
            "The group of participants in the study",
            "The entire group of interest to the researcher",
            "The statistical analysis method",
            "The data collection tool"
        ],
        "answer": "The entire group of interest to the researcher",
        "difficulty": "easy",
        "topic": "Sampling Methods",
        "explanation": "The population is the complete group the researcher aims to study, from which a sample is drawn."
    },
    {
        "id": 122,
        "question": "Which probability sampling method groups the population into clusters?",
        "options": [
            "Simple random sampling",
            "Stratified sampling",
            "Cluster sampling",
            "Systematic sampling"
        ],
        "answer": "Cluster sampling",
        "difficulty": "medium",
        "topic": "Sampling Methods",
        "explanation": "Cluster sampling divides the population into clusters and randomly selects entire clusters for study."
    },
    {
        "id": 123,
        "question": "Which non-probability sampling method is used for hard-to-reach populations?",
        "options": [
            "Convenience sampling",
            "Purposive sampling",
            "Snowball sampling",
            "Quota sampling"
        ],
        "answer": "Snowball sampling",
        "difficulty": "medium",
        "topic": "Sampling Methods",
        "explanation": "Snowball sampling relies on referrals, making it suitable for hard-to-reach or hidden populations."
    },
    {
        "id": 124,
        "question": "What is sampling error?",
        "options": [
            "The difference between sample and population characteristics",
            "The incorrect use of statistical tests",
            "The bias introduced by researchers",
            "The failure to collect data"
        ],
        "answer": "The difference between sample and population characteristics",
        "difficulty": "medium",
        "topic": "Sampling Methods",
        "explanation": "Sampling error occurs when a sample does not perfectly represent the population due to random chance."
    },
    {
        "id": 125,
        "question": "What factor influences sample size determination?",
        "options": [
            "Research budget only",
            "Expected effect size and statistical power",
            "Data collection method",
            "Publication requirements"
        ],
        "answer": "Expected effect size and statistical power",
        "difficulty": "hard",
        "topic": "Sampling Methods",
        "explanation": "Sample size is determined by factors like expected effect size, desired statistical power, and significance level."
    },
    {
        "id": 126,
        "question": "Which data collection method involves firsthand data gathered by the researcher?",
        "options": [
            "Secondary data",
            "Primary data",
            "Tertiary data",
            "Archival data"
        ],
        "answer": "Primary data",
        "difficulty": "easy",
        "topic": "Data Collection Methods",
        "explanation": "Primary data is collected directly by the researcher through methods like surveys or experiments."
    },
    {
        "id": 127,
        "question": "Which qualitative data collection method uses group discussions?",
        "options": [
            "Interviews",
            "Focus groups",
            "Observations",
            "Document analysis"
        ],
        "answer": "Focus groups",
        "difficulty": "easy",
        "topic": "Data Collection Methods",
        "explanation": "Focus groups involve moderated group discussions to gather qualitative insights."
    },
    {
        "id": 128,
        "question": "What is a key feature of a structured interview?",
        "options": [
            "Flexible, open-ended questions",
            "Standardized questions with fixed responses",
            "Unplanned discussions",
            "Narrative responses"
        ],
        "answer": "Standardized questions with fixed responses",
        "difficulty": "medium",
        "topic": "Data Collection Methods",
        "explanation": "Structured interviews use standardized questions to ensure consistency across participants."
    },
    {
        "id": 129,
        "question": "What is the purpose of pilot testing a questionnaire?",
        "options": [
            "To publish preliminary results",
            "To test the instrument's clarity and reliability",
            "To recruit participants",
            "To analyze final data"
        ],
        "answer": "To test the instrument's clarity and reliability",
        "difficulty": "medium",
        "topic": "Data Collection Methods",
        "explanation": "Pilot testing evaluates a questionnaire's clarity, reliability, and feasibility before full-scale use."
    },
    {
        "id": 130,
        "question": "Which quantitative data collection method measures variables under controlled conditions?",
        "options": [
            "Surveys",
            "Experiments",
            "Focus groups",
            "Document analysis"
        ],
        "answer": "Experiments",
        "difficulty": "easy",
        "topic": "Data Collection Methods",
        "explanation": "Experiments involve manipulating variables under controlled conditions to measure their effects."
    },
    {
        "id": 131,
        "question": "Which descriptive statistic measures the average of a dataset?",
        "options": [
            "Median",
            "Mode",
            "Mean",
            "Standard deviation"
        ],
        "answer": "Mean",
        "difficulty": "easy",
        "topic": "Data Analysis",
        "explanation": "The mean is the average, calculated by summing all values and dividing by the number of observations."
    },
    {
        "id": 132,
        "question": "Which inferential statistical test assesses differences across multiple groups?",
        "options": [
            "T-test",
            "Chi-square test",
            "ANOVA",
            "Correlation"
        ],
        "answer": "ANOVA",
        "difficulty": "medium",
        "topic": "Data Analysis",
        "explanation": "ANOVA compares means across three or more groups to identify significant differences."
    },
    {
        "id": 133,
        "question": "What does a confidence interval of 95% indicate?",
        "options": [
            "95% of the data is accurate",
            "95% chance the true parameter lies within the interval",
            "The study is 95% significant",
            "95% of participants agree"
        ],
        "answer": "95% chance the true parameter lies within the interval",
        "difficulty": "medium",
        "topic": "Data Analysis",
        "explanation": "A 95% confidence interval suggests a 95% probability that the interval contains the true population parameter."
    },
    {
        "id": 134,
        "question": "Which qualitative analysis method identifies recurring themes in data?",
        "options": [
            "Thematic analysis",
            "Content analysis",
            "Grounded theory",
            "Narrative analysis"
        ],
        "answer": "Thematic analysis",
        "difficulty": "medium",
        "topic": "Data Analysis",
        "explanation": "Thematic analysis identifies and interprets recurring themes or patterns in qualitative data."
    },
    {
        "id": 135,
        "question": "Which software is commonly used for quantitative data analysis?",
        "options": [
            "NVivo",
            "SPSS",
            "Atlas.ti",
            "MAXQDA"
        ],
        "answer": "SPSS",
        "difficulty": "easy",
        "topic": "Data Analysis",
        "explanation": "SPSS is widely used for quantitative data analysis, including statistical tests and data visualization."
    },
    {
        "id": 136,
        "question": "Which type of validity ensures a study's causal conclusions are accurate?",
        "options": [
            "External validity",
            "Internal validity",
            "Construct validity",
            "Content validity"
        ],
        "answer": "Internal validity",
        "difficulty": "medium",
        "topic": "Validity, Reliability, and Trustworthiness",
        "explanation": "Internal validity ensures that a study's causal conclusions are accurate and free from confounding factors."
    },
    {
        "id": 137,
        "question": "Which reliability measure assesses agreement between different forms of a test?",
        "options": [
            "Test-retest reliability",
            "Inter-rater reliability",
            "Internal consistency",
            "Parallel forms reliability"
        ],
        "answer": "Parallel forms reliability",
        "difficulty": "medium",
        "topic": "Validity, Reliability, and Trustworthiness",
        "explanation": "Parallel forms reliability compares different versions of a test to ensure consistent results."
    },
    {
        "id": 138,
        "question": "What is credibility in qualitative research?",
        "options": [
            "Generalizability of findings",
            "Consistency of results over time",
            "Accuracy of findings in reflecting reality",
            "Use of multiple data sources"
        ],
        "answer": "Accuracy of findings in reflecting reality",
        "difficulty": "medium",
        "topic": "Validity, Reliability, and Trustworthiness",
        "explanation": "Credibility ensures qualitative findings accurately reflect participants' perspectives and reality."
    },
    {
        "id": 139,
        "question": "Which aspect of trustworthiness is similar to reliability in quantitative research?",
        "options": [
            "Credibility",
            "Transferability",
            "Dependability",
            "Confirmability"
        ],
        "answer": "Dependability",
        "difficulty": "hard",
        "topic": "Validity, Reliability, and Trustworthiness",
        "explanation": "Dependability in qualitative research ensures consistent findings, akin to reliability in quantitative research."
    },
    {
        "id": 140,
        "question": "Which component is essential in a research proposal?",
        "options": [
            "Final results",
            "Research objectives",
            "Data analysis software",
            "Publication plan"
        ],
        "answer": "Research objectives",
        "difficulty": "easy",
        "topic": "Writing and Presenting Research",
        "explanation": "Research objectives outline the study's goals and are a critical component of a research proposal."
    },
    {
        "id": 141,
        "question": "What is the purpose of an abstract in a research report?",
        "options": [
            "To provide detailed methodology",
            "To summarize key aspects of the study",
            "To list references",
            "To recruit participants"
        ],
        "answer": "To summarize key aspects of the study",
        "difficulty": "easy",
        "topic": "Writing and Presenting Research",
        "explanation": "An abstract provides a concise summary of the study's purpose, methods, results, and conclusions."
    },
    {
        "id": 142,
        "question": "Which practice helps avoid plagiarism in research writing?",
        "options": [
            "Copying text directly",
            "Proper citation and paraphrasing",
            "Using unverified sources",
            "Omitting references"
        ],
        "answer": "Proper citation and paraphrasing",
        "difficulty": "easy",
        "topic": "Writing and Presenting Research",
        "explanation": "Proper citation and paraphrasing credit original authors, preventing plagiarism."
    },
    {
        "id": 143,
        "question": "Which visual aid is best for showing trends over time?",
        "options": [
            "Pie chart",
            "Bar graph",
            "Line graph",
            "Table"
        ],
        "answer": "Line graph",
        "difficulty": "easy",
        "topic": "Writing and Presenting Research",
        "explanation": "Line graphs effectively display trends and changes over time in research findings."
    },
    {
        "id": 144,
        "question": "What is a key consideration when submitting to a research journal?",
        "options": [
            "Ignoring journal guidelines",
            "Adhering to journal submission guidelines",
            "Using informal language",
            "Excluding references"
        ],
        "answer": "Adhering to journal submission guidelines",
        "difficulty": "medium",
        "topic": "Writing and Presenting Research",
        "explanation": "Following journal guidelines ensures the manuscript meets publication standards."
    },
    {
        "id": 145,
        "question": "What is the primary goal of a meta-analysis?",
        "options": [
            "To collect primary data",
            "To synthesize findings from multiple studies",
            "To design a new experiment",
            "To recruit participants"
        ],
        "answer": "To synthesize findings from multiple studies",
        "difficulty": "medium",
        "topic": "Advanced/Contemporary Topics",
        "explanation": "Meta-analysis combines results from multiple studies to provide a more precise estimate of an effect."
    },
    {
        "id": 146,
        "question": "What is triangulation in research?",
        "options": [
            "Using a single data source",
            "Combining multiple data sources or methods",
            "Increasing sample size",
            "Conducting a pilot study"
        ],
        "answer": "Combining multiple data sources or methods",
        "difficulty": "medium",
        "topic": "Advanced/Contemporary Topics",
        "explanation": "Triangulation enhances research validity by using multiple data sources or methods to cross-validate findings."
    },
    {
        "id": 147,
        "question": "What is the role of an Institutional Review Board (IRB)?",
        "options": [
            "To analyze data",
            "To review ethical aspects of research",
            "To fund studies",
            "To publish results"
        ],
        "answer": "To review ethical aspects of research",
        "difficulty": "easy",
        "topic": "Advanced/Contemporary Topics",
        "explanation": "The IRB ensures research complies with ethical standards, protecting participants' rights and safety."
    },
    {
        "id": 148,
        "question": "What is participatory research?",
        "options": [
            "Research conducted in a lab",
            "Research involving community collaboration",
            "Research using only surveys",
            "Research with no participant involvement"
        ],
        "answer": "Research involving community collaboration",
        "difficulty": "medium",
        "topic": "Advanced/Contemporary Topics",
        "explanation": "Participatory research involves collaboration with communities to address their needs and priorities."
    },
    {
        "id": 149,
        "question": "How does big data impact research?",
        "options": [
            "It reduces sample size needs",
            "It enables analysis of large, complex datasets",
            "It eliminates the need for hypotheses",
            "It simplifies data collection"
        ],
        "answer": "It enables analysis of large, complex datasets",
        "difficulty": "medium",
        "topic": "Advanced/Contemporary Topics",
        "explanation": "Big data allows researchers to analyze vast, complex datasets to uncover patterns and insights."
    },
    {
        "id": 150,
        "question": "What is a key principle of open science?",
        "options": [
            "Restricting data access",
            "Promoting transparency and accessibility",
            "Limiting study replication",
            "Excluding peer review"
        ],
        "answer": "Promoting transparency and accessibility",
        "difficulty": "easy",
        "topic": "Advanced/Contemporary Topics",
        "explanation": "Open science promotes transparent, accessible research to enhance reproducibility and collaboration."
    },
    {
        "id": 151,
        "question": "Which type of research seeks to generate new theories?",
        "options": [
            "Applied research",
            "Exploratory research",
            "Descriptive research",
            "Explanatory research"
        ],
        "answer": "Exploratory research",
        "difficulty": "medium",
        "topic": "Foundations of Research",
        "explanation": "Exploratory research aims to explore new areas and generate hypotheses or theories."
    },
    {
        "id": 152,
        "question": "What does epistemology in research focus on?",
        "options": [
            "The nature of reality",
            "The nature and scope of knowledge",
            "Ethical guidelines",
            "Data collection methods"
        ],
        "answer": "The nature and scope of knowledge",
        "difficulty": "medium",
        "topic": "Foundations of Research",
        "explanation": "Epistemology examines how knowledge is acquired and the scope of what can be known."
    },
    {
        "id": 153,
        "question": "Which ethical principle ensures fair selection of participants?",
        "options": [
            "Beneficence",
            "Justice",
            "Informed consent",
            "Confidentiality"
        ],
        "answer": "Justice",
        "difficulty": "medium",
        "topic": "Foundations of Research",
        "explanation": "Justice ensures fair and equitable selection of participants, avoiding exploitation."
    },
    {
        "id": 154,
        "question": "What is a characteristic of a well-defined research problem?",
        "options": [
            "It is overly complex",
            "It is significant and relevant",
            "It lacks clarity",
            "It is unrelated to prior research"
        ],
        "answer": "It is significant and relevant",
        "difficulty": "easy",
        "topic": "Research Problem & Hypothesis",
        "explanation": "A well-defined research problem is significant, relevant, and addresses a gap in knowledge."
    },
    {
        "id": 155,
        "question": "What is the role of a research question?",
        "options": [
            "To summarize results",
            "To define the study's focus",
            "To collect data",
            "To publish findings"
        ],
        "answer": "To define the study's focus",
        "difficulty": "easy",
        "topic": "Research Problem & Hypothesis",
        "explanation": "A research question provides a clear focus and direction for the study's investigation."
    },
    {
        "id": 156,
        "question": "Which variable is held constant to reduce its influence on the study?",
        "options": [
            "Independent variable",
            "Dependent variable",
            "Control variable",
            "Extraneous variable"
        ],
        "answer": "Control variable",
        "difficulty": "medium",
        "topic": "Research Problem & Hypothesis",
        "explanation": "Control variables are held constant to minimize their impact on the dependent variable."
    },
    {
        "id": 157,
        "question": "What is a narrative review in literature?",
        "options": [
            "A statistical analysis of studies",
            "A broad, qualitative synthesis of literature",
            "A protocol-driven review",
            "A meta-analysis"
        ],
        "answer": "A broad, qualitative synthesis of literature",
        "difficulty": "medium",
        "topic": "Literature Review",
        "explanation": "Narrative reviews provide a qualitative overview of literature without a strict protocol."
    },
    {
        "id": 158,
        "question": "Which source is considered a secondary source?",
        "options": [
            "Original research articles",
            "Review articles",
            "Raw data",
            "Lab notebooks"
        ],
        "answer": "Review articles",
        "difficulty": "easy",
        "topic": "Literature Review",
        "explanation": "Secondary sources, like review articles, summarize or interpret primary data."
    },
    {
        "id": 159,
        "question": "Which referencing style uses footnotes for citations?",
        "options": [
            "APA",
            "MLA",
            "Chicago Notes",
            "Harvard"
        ],
        "answer": "Chicago Notes",
        "difficulty": "medium",
        "topic": "Literature Review",
        "explanation": "Chicago Notes style uses footnotes or endnotes for citations, often in humanities."
    },
    {
        "id": 160,
        "question": "What is the purpose of identifying a research gap?",
        "options": [
            "To replicate existing studies",
            "To justify the need for new research",
            "To summarize prior findings",
            "To recruit participants"
        ],
        "answer": "To justify the need for new research",
        "difficulty": "easy",
        "topic": "Literature Review",
        "explanation": "Identifying a research gap highlights unanswered questions, justifying the study's relevance."
    },
    {
        "id": 161,
        "question": "Which research design is best for in-depth analysis of a single case?",
        "options": [
            "Experimental design",
            "Case study design",
            "Cohort design",
            "Cross-sectional design"
        ],
        "answer": "Case study design",
        "difficulty": "easy",
        "topic": "Research Design",
        "explanation": "Case study designs provide detailed, in-depth analysis of a single case or small group."
    },
    {
        "id": 162,
        "question": "What distinguishes a true experimental design?",
        "options": [
            "Lack of a control group",
            "Use of random assignment",
            "Non-manipulated variables",
            "Single time-point data"
        ],
        "answer": "Use of random assignment",
        "difficulty": "medium",
        "topic": "Research Design",
        "explanation": "True experimental designs use random assignment to control for confounding variables."
    },
    {
        "id": 163,
        "question": "Which research design observes variables without manipulation?",
        "options": [
            "Experimental design",
            "Quasi-experimental design",
            "Observational design",
            "Mixed-methods design"
        ],
        "answer": "Observational design",
        "difficulty": "easy",
        "topic": "Research Design",
        "explanation": "Observational designs study variables as they naturally occur, without manipulation."
    },
    {
        "id": 164,
        "question": "What is a key feature of a longitudinal study?",
        "options": [
            "Single time-point data",
            "Multiple time-point data collection",
            "Small sample size",
            "Non-representative sampling"
        ],
        "answer": "Multiple time-point data collection",
        "difficulty": "easy",
        "topic": "Research Design",
        "explanation": "Longitudinal studies collect data from the same participants over multiple time points."
    },
    {
        "id": 165,
        "question": "Which sampling method ensures proportional representation of subgroups?",
        "options": [
            "Simple random sampling",
            "Stratified sampling",
            "Cluster sampling",
            "Convenience sampling"
        ],
        "answer": "Stratified sampling",
        "difficulty": "medium",
        "topic": "Sampling Methods",
        "explanation": "Stratified sampling divides the population into strata and samples proportionally from each."
    },
    {
        "id": 166,
        "question": "Which non-probability sampling method selects participants based on specific criteria?",
        "options": [
            "Convenience sampling",
            "Purposive sampling",
            "Snowball sampling",
            "Quota sampling"
        ],
        "answer": "Purposive sampling",
        "difficulty": "medium",
        "topic": "Sampling Methods",
        "explanation": "Purposive sampling selects participants based on specific characteristics relevant to the study."
    },
    {
        "id": 167,
        "question": "What is quota sampling?",
        "options": [
            "Randomly selecting participants",
            "Selecting a fixed number from subgroups",
            "Using referrals for sampling",
            "Selecting based on convenience"
        ],
        "answer": "Selecting a fixed number from subgroups",
        "difficulty": "medium",
        "topic": "Sampling Methods",
        "explanation": "Quota sampling selects a predetermined number of participants from specific subgroups."
    },
    {
        "id": 168,
        "question": "What is the primary source of sampling bias?",
        "options": [
            "Random selection",
            "Non-representative sampling",
            "Large sample sizes",
            "Statistical analysis"
        ],
        "answer": "Non-representative sampling",
        "difficulty": "medium",
        "topic": "Sampling Methods",
        "explanation": "Sampling bias occurs when the sample does not accurately represent the population."
    },
    {
        "id": 169,
        "question": "Which data collection method involves watching behaviors in a natural setting?",
        "options": [
            "Surveys",
            "Interviews",
            "Observations",
            "Focus groups"
        ],
        "answer": "Observations",
        "difficulty": "easy",
        "topic": "Data Collection Methods",
        "explanation": "Observations involve systematically watching and recording behaviors in their natural context."
    },
    {
        "id": 170,
        "question": "What is a semi-structured interview?",
        "options": [
            "Fixed questions with no flexibility",
            "Open-ended questions with some structure",
            "Completely unstructured discussion",
            "Quantitative data collection"
        ],
        "answer": "Open-ended questions with some structure",
        "difficulty": "medium",
        "topic": "Data Collection Methods",
        "explanation": "Semi-structured interviews use a guide but allow flexibility for open-ended responses."
    },
    {
        "id": 171,
        "question": "Which quantitative method uses standardized questionnaires?",
        "options": [
            "Experiments",
            "Surveys",
            "Observations",
            "Document analysis"
        ],
        "answer": "Surveys",
        "difficulty": "easy",
        "topic": "Data Collection Methods",
        "explanation": "Surveys use standardized questionnaires to collect quantitative data from participants."
    },
    {
        "id": 172,
        "question": "What does validity of an instrument measure?",
        "options": [
            "Consistency of results",
            "Accuracy of measurement",
            "Sample size adequacy",
            "Data collection speed"
        ],
        "answer": "Accuracy of measurement",
        "difficulty": "easy",
        "topic": "Data Collection Methods",
        "explanation": "Validity ensures an instrument measures what it is intended to measure accurately."
    },
    {
        "id": 173,
        "question": "Which descriptive statistic measures the spread of data?",
        "options": [
            "Mean",
            "Median",
            "Standard deviation",
            "Mode"
        ],
        "answer": "Standard deviation",
        "difficulty": "easy",
        "topic": "Data Analysis",
        "explanation": "Standard deviation measures how spread out data points are from the mean."
    },
    {
        "id": 174,
        "question": "Which inferential test assesses relationships between continuous variables?",
        "options": [
            "T-test",
            "ANOVA",
            "Correlation",
            "Chi-square"
        ],
        "answer": "Correlation",
        "difficulty": "medium",
        "topic": "Data Analysis",
        "explanation": "Correlation tests assess the strength and direction of relationships between continuous variables."
    },
    {
        "id": 175,
        "question": "What does a p-value measure in hypothesis testing?",
        "options": [
            "Effect size",
            "Probability of a Type I error",
            "Sample size adequacy",
            "Data normality"
        ],
        "answer": "Probability of a Type I error",
        "difficulty": "medium",
        "topic": "Data Analysis",
        "explanation": "A p-value indicates the probability of obtaining results as extreme as observed, assuming the null hypothesis is true."
    },
    {
        "id": 176,
        "question": "Which qualitative analysis method develops theories from data?",
        "options": [
            "Thematic analysis",
            "Content analysis",
            "Grounded theory",
            "Framework analysis"
        ],
        "answer": "Grounded theory",
        "difficulty": "hard",
        "topic": "Data Analysis",
        "explanation": "Grounded theory involves coding data to develop theories grounded in the data itself."
    },
    {
        "id": 177,
        "question": "Which software is used for qualitative data analysis?",
        "options": [
            "SPSS",
            "R",
            "NVivo",
            "Excel"
        ],
        "answer": "NVivo",
        "difficulty": "easy",
        "topic": "Data Analysis",
        "explanation": "NVivo is designed for qualitative data analysis, such as coding interviews or focus groups."
    },
    {
        "id": 178,
        "question": "Which validity type assesses the generalizability of findings?",
        "options": [
            "Internal validity",
            "External validity",
            "Construct validity",
            "Content validity"
        ],
        "answer": "External validity",
        "difficulty": "medium",
        "topic": "Validity, Reliability, and Trustworthiness",
        "explanation": "External validity evaluates how well findings apply to other populations or settings."
    },
    {
        "id": 179,
        "question": "Which reliability measure assesses consistency across test items?",
        "options": [
            "Test-retest reliability",
            "Inter-rater reliability",
            "Internal consistency",
            "Parallel forms reliability"
        ],
        "answer": "Internal consistency",
        "difficulty": "medium",
        "topic": "Validity, Reliability, and Trustworthiness",
        "explanation": "Internal consistency measures how well items in a test measure the same construct."
    },
    {
        "id": 180,
        "question": "What is transferability in qualitative research?",
        "options": [
            "Consistency of results",
            "Applicability of findings to other contexts",
            "Accuracy of measurements",
            "Use of multiple methods"
        ],
        "answer": "Applicability of findings to other contexts",
        "difficulty": "medium",
        "topic": "Validity, Reliability, and Trustworthiness",
        "explanation": "Transferability assesses whether qualitative findings can apply to other similar contexts."
    },
    {
        "id": 181,
        "question": "What is the purpose of a research report's methodology section?",
        "options": [
            "To summarize results",
            "To describe study procedures",
            "To list references",
            "To recruit participants"
        ],
        "answer": "To describe study procedures",
        "difficulty": "easy",
        "topic": "Writing and Presenting Research",
        "explanation": "The methodology section details the study's design, participants, and data collection methods."
    },
    {
        "id": 182,
        "question": "Which element is critical to avoid plagiarism?",
        "options": [
            "Using direct quotes without citation",
            "Paraphrasing with proper citation",
            "Copying entire sections",
            "Omitting references"
        ],
        "answer": "Paraphrasing with proper citation",
        "difficulty": "easy",
        "topic": "Writing and Presenting Research",
        "explanation": "Paraphrasing with proper citation credits original authors, avoiding plagiarism."
    },
    {
        "id": 183,
        "question": "Which visual aid is best for comparing categorical data?",
        "options": [
            "Line graph",
            "Bar graph",
            "Pie chart",
            "Scatter plot"
        ],
        "answer": "Bar graph",
        "difficulty": "easy",
        "topic": "Writing and Presenting Research",
        "explanation": "Bar graphs effectively compare quantities across different categories."
    },
    {
        "id": 184,
        "question": "What is a key feature of a research thesis structure?",
        "options": [
            "No references",
            "Multiple chapters with clear sections",
            "Single-page summary",
            "Only raw data"
        ],
        "answer": "Multiple chapters with clear sections",
        "difficulty": "easy",
        "topic": "Writing and Presenting Research",
        "explanation": "A thesis typically includes chapters like introduction, methodology, results, and discussion."
    },
    {
        "id": 185,
        "question": "What is a systematic review's key characteristic?",
        "options": [
            "Broad narrative summary",
            "Rigorous, protocol-driven methodology",
            "Single-study focus",
            "No inclusion criteria"
        ],
        "answer": "Rigorous, protocol-driven methodology",
        "difficulty": "medium",
        "topic": "Advanced/Contemporary Topics",
        "explanation": "Systematic reviews use a structured protocol to minimize bias in synthesizing evidence."
    },
    {
        "id": 186,
        "question": "What is the role of artificial intelligence in research?",
        "options": [
            "Replacing human researchers",
            "Enhancing data analysis and pattern detection",
            "Eliminating data collection",
            "Reducing sample sizes"
        ],
        "answer": "Enhancing data analysis and pattern detection",
        "difficulty": "medium",
        "topic": "Advanced/Contemporary Topics",
        "explanation": "AI enhances research by analyzing large datasets and identifying patterns efficiently."
    },
    {
        "id": 187,
        "question": "What is a key benefit of community-based research?",
        "options": [
            "Excluding community input",
            "Addressing community-specific needs",
            "Reducing sample size",
            "Simplifying analysis"
        ],
        "answer": "Addressing community-specific needs",
        "difficulty": "medium",
        "topic": "Advanced/Contemporary Topics",
        "explanation": "Community-based research collaborates with communities to address their unique needs and priorities."
    },
    {
        "id": 188,
        "question": "Which practice supports research reproducibility?",
        "options": [
            "Hiding data",
            "Sharing data and methods openly",
            "Using small samples",
            "Avoiding peer review"
        ],
        "answer": "Sharing data and methods openly",
        "difficulty": "easy",
        "topic": "Advanced/Contemporary Topics",
        "explanation": "Openly sharing data and methods allows others to verify and replicate research findings."
    },
    {
        "id": 189,
        "question": "Which type of research aims to explain why phenomena occur?",
        "options": [
            "Descriptive research",
            "Exploratory research",
            "Explanatory research",
            "Applied research"
        ],
        "answer": "Explanatory research",
        "difficulty": "medium",
        "topic": "Foundations of Research",
        "explanation": "Explanatory research seeks to understand the causes and mechanisms behind phenomena."
    },
    {
        "id": 190,
        "question": "Which paradigm emphasizes social change and empowerment?",
        "options": [
            "Positivism",
            "Interpretivism",
            "Critical theory",
            "Pragmatism"
        ],
        "answer": "Critical theory",
        "difficulty": "medium",
        "topic": "Foundations of Research",
        "explanation": "Critical theory focuses on social change, empowerment, and addressing inequalities."
    },
    {
        "id": 191,
        "question": "What is a key feature of a good research question?",
        "options": [
            "Vague and broad",
            "Specific and focused",
            "Unrelated to theory",
            "Impossible to answer"
        ],
        "answer": "Specific and focused",
        "difficulty": "easy",
        "topic": "Research Problem & Hypothesis",
        "explanation": "A good research question is specific, focused, and guides the study's direction."
    },
    {
        "id": 192,
        "question": "Which variable is the outcome of interest in a study?",
        "options": [
            "Independent variable",
            "Dependent variable",
            "Control variable",
            "Extraneous variable"
        ],
        "answer": "Dependent variable",
        "difficulty": "easy",
        "topic": "Research Problem & Hypothesis",
        "explanation": "The dependent variable is the outcome measured to assess the effect of the independent variable."
    },
    {
        "id": 193,
        "question": "Which type of literature source provides broad overviews?",
        "options": [
            "Primary sources",
            "Secondary sources",
            "Tertiary sources",
            "Original data"
        ],
        "answer": "Tertiary sources",
        "difficulty": "medium",
        "topic": "Literature Review",
        "explanation": "Tertiary sources, like encyclopedias, provide broad overviews and summaries of topics."
    },
    {
        "id": 194,
        "question": "Which research design is most suitable for hypothesis testing?",
        "options": [
            "Descriptive design",
            "Experimental design",
            "Observational design",
            "Case study design"
        ],
        "answer": "Experimental design",
        "difficulty": "medium",
        "topic": "Research Design",
        "explanation": "Experimental designs manipulate variables and use controls to test hypotheses effectively."
    },
    {
        "id": 195,
        "question": "Which sampling method is most cost-effective for large populations?",
        "options": [
            "Simple random sampling",
            "Stratified sampling",
            "Cluster sampling",
            "Purposive sampling"
        ],
        "answer": "Cluster sampling",
        "difficulty": "medium",
        "topic": "Sampling Methods",
        "explanation": "Cluster sampling reduces costs by sampling entire groups rather than individuals."
    },
    {
        "id": 196,
        "question": "Which data collection method analyzes existing records?",
        "options": [
            "Surveys",
            "Interviews",
            "Document analysis",
            "Focus groups"
        ],
        "answer": "Document analysis",
        "difficulty": "easy",
        "topic": "Data Collection Methods",
        "explanation": "Document analysis involves examining existing records or texts to gather data."
    },
    {
        "id": 197,
        "question": "Which statistical test is used for non-parametric paired data?",
        "options": [
            "Paired t-test",
            "Wilcoxon signed-rank test",
            "Independent t-test",
            "ANOVA"
        ],
        "answer": "Wilcoxon signed-rank test",
        "difficulty": "hard",
        "topic": "Data Analysis",
        "explanation": "The Wilcoxon signed-rank test is a non-parametric test for paired data when normality is not assumed."
    },
    {
        "id": 198,
        "question": "What is confirmability in qualitative research?",
        "options": [
            "Generalizability of findings",
            "Objectivity of findings",
            "Consistency of results",
            "Accuracy of measurements"
        ],
        "answer": "Objectivity of findings",
        "difficulty": "medium",
        "topic": "Validity, Reliability, and Trustworthiness",
        "explanation": "Confirmability ensures qualitative findings are objective and not biased by the researcher."
    },
    {
        "id": 199,
        "question": "Which section of a research report interprets findings?",
        "options": [
            "Introduction",
            "Methodology",
            "Results",
            "Discussion"
        ],
        "answer": "Discussion",
        "difficulty": "easy",
        "topic": "Writing and Presenting Research",
        "explanation": "The discussion section interprets findings, compares them to prior research, and discusses implications."
    },
    {
        "id": 200,
        "question": "What is a key feature of a systematic review?",
        "options": [
            "Broad narrative approach",
            "Defined inclusion and exclusion criteria",
            "Single-study focus",
            "No data synthesis"
        ],
        "answer": "Defined inclusion and exclusion criteria",
        "difficulty": "medium",
        "topic": "Advanced/Contemporary Topics",
        "explanation": "Systematic reviews use clear inclusion and exclusion criteria to select relevant studies."
    },
    {
        "id": 201,
        "question": "What distinguishes basic research from applied research?",
        "options": [
            "Basic research solves practical problems",
            "Applied research seeks general knowledge",
            "Basic research advances theoretical understanding",
            "Applied research is always qualitative"
        ],
        "answer": "Basic research advances theoretical understanding",
        "difficulty": "easy",
        "topic": "Foundations of Research",
        "explanation": "Basic research aims to expand theoretical knowledge without immediate practical application, unlike applied research."
    },
    {
        "id": 202,
        "question": "Which feature of scientific research ensures replicability?",
        "options": [
            "Subjective interpretation",
            "Systematic methodology",
            "Small sample sizes",
            "Unstructured data collection"
        ],
        "answer": "Systematic methodology",
        "difficulty": "easy",
        "topic": "Foundations of Research",
        "explanation": "A systematic methodology allows other researchers to replicate the study, ensuring consistent results."
    },
    {
        "id": 203,
        "question": "Which research paradigm prioritizes practical solutions over theoretical purity?",
        "options": [
            "Positivism",
            "Interpretivism",
            "Pragmatism",
            "Critical theory"
        ],
        "answer": "Pragmatism",
        "difficulty": "medium",
        "topic": "Foundations of Research",
        "explanation": "Pragmatism focuses on practical outcomes, using methods that best address the research problem."
    },
    {
        "id": 204,
        "question": "What does epistemology address in research?",
        "options": [
            "The nature of reality",
            "The methods of data collection",
            "The validity of knowledge claims",
            "The ethical implications of research"
        ],
        "answer": "The validity of knowledge claims",
        "difficulty": "medium",
        "topic": "Foundations of Research",
        "explanation": "Epistemology explores how knowledge is acquired and what constitutes valid knowledge."
    },
    {
        "id": 205,
        "question": "Which ethical principle requires researchers to avoid harm to participants?",
        "options": [
            "Justice",
            "Beneficence",
            "Confidentiality",
            "Informed consent"
        ],
        "answer": "Beneficence",
        "difficulty": "easy",
        "topic": "Foundations of Research",
        "explanation": "Beneficence obligates researchers to minimize harm and maximize benefits for participants."
    },
    {
        "id": 206,
        "question": "What is a hallmark of exploratory research?",
        "options": [
            "Testing specific hypotheses",
            "Generating new ideas and hypotheses",
            "Establishing causality",
            "Describing population characteristics"
        ],
        "answer": "Generating new ideas and hypotheses",
        "difficulty": "easy",
        "topic": "Foundations of Research",
        "explanation": "Exploratory research investigates new areas to generate hypotheses for future studies."
    },
    {
        "id": 207,
        "question": "What makes a research problem significant?",
        "options": [
            "It is easy to solve",
            "It addresses a gap or need in knowledge",
            "It requires minimal resources",
            "It is overly broad"
        ],
        "answer": "It addresses a gap or need in knowledge",
        "difficulty": "easy",
        "topic": "Research Problem & Hypothesis",
        "explanation": "A significant research problem fills a knowledge gap or addresses an important issue."
    },
    {
        "id": 208,
        "question": "What is the role of a directional hypothesis?",
        "options": [
            "Predicts no relationship",
            "Specifies the direction of the relationship",
            "States a general effect",
            "Rejects the null hypothesis"
        ],
        "answer": "Specifies the direction of the relationship",
        "difficulty": "medium",
        "topic": "Research Problem & Hypothesis",
        "explanation": "A directional hypothesis predicts the specific direction (e.g., increase or decrease) of a relationship."
    },
    {
        "id": 209,
        "question": "Which variable affects the dependent variable but is not controlled?",
        "options": [
            "Independent variable",
            "Control variable",
            "Extraneous variable",
            "Mediating variable"
        ],
        "answer": "Extraneous variable",
        "difficulty": "medium",
        "topic": "Research Problem & Hypothesis",
        "explanation": "Extraneous variables can influence the dependent variable if not controlled, causing confounding."
    },
    {
        "id": 210,
        "question": "What is a research objective?",
        "options": [
            "A summary of findings",
            "A specific goal guiding the study",
            "A statistical test",
            "A literature review"
        ],
        "answer": "A specific goal guiding the study",
        "difficulty": "easy",
        "topic": "Research Problem & Hypothesis",
        "explanation": "Research objectives are specific, measurable goals that guide the study's focus and design."
    },
    {
        "id": 211,
        "question": "What is the main benefit of a systematic literature review?",
        "options": [
            "It is quick to complete",
            "It reduces bias through a structured approach",
            "It focuses on a single study",
            "It avoids primary sources"
        ],
        "answer": "It reduces bias through a structured approach",
        "difficulty": "medium",
        "topic": "Literature Review",
        "explanation": "Systematic reviews use a rigorous protocol to minimize bias and ensure comprehensive synthesis."
    },
    {
        "id": 212,
        "question": "Which type of source provides raw data or firsthand accounts?",
        "options": [
            "Tertiary sources",
            "Secondary sources",
            "Primary sources",
            "Review articles"
        ],
        "answer": "Primary sources",
        "difficulty": "easy",
        "topic": "Literature Review",
        "explanation": "Primary sources offer original data or firsthand accounts, such as research articles or interviews."
    },
    {
        "id": 213,
        "question": "Which citation style is commonly used in the humanities?",
        "options": [
            "APA",
            "MLA",
            "Chicago Author-Date",
            "IEEE"
        ],
        "answer": "MLA",
        "difficulty": "medium",
        "topic": "Literature Review",
        "explanation": "MLA style is widely used in humanities disciplines for its emphasis on author-page citations."
    },
    {
        "id": 214,
        "question": "What does a research gap represent?",
        "options": [
            "A completed study",
            "An unanswered question in the literature",
            "A statistical error",
            "A data collection method"
        ],
        "answer": "An unanswered question in the literature",
        "difficulty": "easy",
        "topic": "Literature Review",
        "explanation": "A research gap is an area where existing literature lacks answers, justifying new research."
    },
    {
        "id": 215,
        "question": "What is the role of a conceptual framework in research?",
        "options": [
            "To outline statistical methods",
            "To define key concepts and their relationships",
            "To summarize findings",
            "To recruit participants"
        ],
        "answer": "To define key concepts and their relationships",
        "difficulty": "medium",
        "topic": "Literature Review",
        "explanation": "A conceptual framework clarifies key concepts and their interconnections to guide the study."
    },
    {
        "id": 216,
        "question": "Which research design is best suited for establishing causal relationships?",
        "options": [
            "Correlational design",
            "Descriptive design",
            "Experimental design",
            "Case study design"
        ],
        "answer": "Experimental design",
        "difficulty": "easy",
        "topic": "Research Design",
        "explanation": "Experimental designs manipulate variables and use random assignment to establish causality."
    },
    {
        "id": 217,
        "question": "What is a defining feature of a quasi-experimental design?",
        "options": [
            "Random assignment",
            "Lack of a control group",
            "Non-random group assignment",
            "Single time-point data"
        ],
        "answer": "Non-random group assignment",
        "difficulty": "medium",
        "topic": "Research Design",
        "explanation": "Quasi-experimental designs lack random assignment, limiting their ability to control for confounders."
    },
    {
        "id": 218,
        "question": "Which research design focuses on solving practical problems collaboratively?",
        "options": [
            "Case study",
            "Action research",
            "Cohort study",
            "Cross-sectional study"
        ],
        "answer": "Action research",
        "difficulty": "medium",
        "topic": "Research Design",
        "explanation": "Action research involves collaboration with stakeholders to address practical issues and implement solutions."
    },
    {
        "id": 219,
        "question": "What is a key limitation of a cross-sectional design?",
        "options": [
            "It tracks changes over time",
            "It cannot assess temporality",
            "It requires large samples",
            "It is always biased"
        ],
        "answer": "It cannot assess temporality",
        "difficulty": "medium",
        "topic": "Research Design",
        "explanation": "Cross-sectional designs collect data at one point, making it hard to determine cause-and-effect timing."
    },
    {
        "id": 220,
        "question": "Which component is critical to a research design?",
        "options": [
            "Publication strategy",
            "Data collection method",
            "Funding source",
            "Journal selection"
        ],
        "answer": "Data collection method",
        "difficulty": "easy",
        "topic": "Research Design",
        "explanation": "The data collection method is essential to ensure the study addresses the research question effectively."
    },
    {
        "id": 221,
        "question": "Which sampling method uses a random starting point and fixed intervals?",
        "options": [
            "Simple random sampling",
            "Systematic sampling",
            "Stratified sampling",
            "Cluster sampling"
        ],
        "answer": "Systematic sampling",
        "difficulty": "easy",
        "topic": "Sampling Methods",
        "explanation": "Systematic sampling selects every nth individual from a list, starting at a random point."
    },
    {
        "id": 222,
        "question": "Which non-probability sampling method selects participants based on researcher judgment?",
        "options": [
            "Convenience sampling",
            "Quota sampling",
            "Purposive sampling",
            "Snowball sampling"
        ],
        "answer": "Purposive sampling",
        "difficulty": "medium",
        "topic": "Sampling Methods",
        "explanation": "Purposive sampling involves selecting participants based on specific criteria relevant to the study."
    },
    {
        "id": 223,
        "question": "What is a disadvantage of convenience sampling?",
        "options": [
            "It ensures representativeness",
            "It is prone to selection bias",
            "It is time-consuming",
            "It requires large samples"
        ],
        "answer": "It is prone to selection bias",
        "difficulty": "medium",
        "topic": "Sampling Methods",
        "explanation": "Convenience sampling selects easily accessible participants, often leading to biased, non-representative samples."
    },
    {
        "id": 224,
        "question": "What is the primary source of sampling error?",
        "options": [
            "Researcher bias",
            "Random variation in sampling",
            "Incorrect data analysis",
            "Small population size"
        ],
        "answer": "Random variation in sampling",
        "difficulty": "medium",
        "topic": "Sampling Methods",
        "explanation": "Sampling error arises from random differences between the sample and the population."
    },
    {
        "id": 225,
        "question": "What factor is critical in determining sample size?",
        "options": [
            "Publication requirements",
            "Desired statistical power",
            "Researcher experience",
            "Data collection method"
        ],
        "answer": "Desired statistical power",
        "difficulty": "medium",
        "topic": "Sampling Methods",
        "explanation": "Statistical power influences sample size to ensure the study can detect significant effects."
    },
    {
        "id": 226,
        "question": "Which data collection method uses existing records or texts?",
        "options": [
            "Surveys",
            "Interviews",
            "Document analysis",
            "Experiments"
        ],
        "answer": "Document analysis",
        "difficulty": "easy",
        "topic": "Data Collection Methods",
        "explanation": "Document analysis examines existing records or texts to extract relevant data."
    },
    {
        "id": 227,
        "question": "What is a characteristic of unstructured interviews?",
        "options": [
            "Fixed response options",
            "Flexible, open-ended questions",
            "Standardized questions",
            "Quantitative focus"
        ],
        "answer": "Flexible, open-ended questions",
        "difficulty": "medium",
        "topic": "Data Collection Methods",
        "explanation": "Unstructured interviews allow flexibility, using open-ended questions to explore participants' views."
    },
    {
        "id": 228,
        "question": "Which quantitative method manipulates variables under controlled conditions?",
        "options": [
            "Surveys",
            "Experiments",
            "Observations",
            "Focus groups"
        ],
        "answer": "Experiments",
        "difficulty": "easy",
        "topic": "Data Collection Methods",
        "explanation": "Experiments control conditions and manipulate variables to test hypotheses."
    },
    {
        "id": 229,
        "question": "What is the purpose of a pilot study in data collection?",
        "options": [
            "To publish final results",
            "To test the feasibility of methods",
            "To recruit participants",
            "To analyze large datasets"
        ],
        "answer": "To test the feasibility of methods",
        "difficulty": "easy",
        "topic": "Data Collection Methods",
        "explanation": "A pilot study tests the feasibility and clarity of data collection methods before the main study."
    },
    {
        "id": 230,
        "question": "Which data collection method is best for capturing group dynamics?",
        "options": [
            "Surveys",
            "Interviews",
            "Focus groups",
            "Observations"
        ],
        "answer": "Focus groups",
        "difficulty": "medium",
        "topic": "Data Collection Methods",
        "explanation": "Focus groups facilitate discussions to capture group dynamics and diverse perspectives."
    },
    {
        "id": 231,
        "question": "Which descriptive statistic represents the most frequent value?",
        "options": [
            "Mean",
            "Median",
            "Mode",
            "Standard deviation"
        ],
        "answer": "Mode",
        "difficulty": "easy",
        "topic": "Data Analysis",
        "explanation": "The mode is the value that appears most frequently in a dataset."
    },
    {
        "id": 232,
        "question": "Which inferential test is used for non-parametric data across two groups?",
        "options": [
            "T-test",
            "Mann-Whitney U test",
            "ANOVA",
            "Chi-square test"
        ],
        "answer": "Mann-Whitney U test",
        "difficulty": "medium",
        "topic": "Data Analysis",
        "explanation": "The Mann-Whitney U test compares two independent groups when data is non-parametric."
    },
    {
        "id": 233,
        "question": "What does a low p-value (e.g., 0.01) indicate?",
        "options": [
            "The null hypothesis is true",
            "Strong evidence against the null hypothesis",
            "The effect size is small",
            "The study is inconclusive"
        ],
        "answer": "Strong evidence against the null hypothesis",
        "difficulty": "medium",
        "topic": "Data Analysis",
        "explanation": "A low p-value suggests strong evidence to reject the null hypothesis."
    },
    {
        "id": 234,
        "question": "Which qualitative analysis method examines stories or personal accounts?",
        "options": [
            "Thematic analysis",
            "Narrative analysis",
            "Content analysis",
            "Grounded theory"
        ],
        "answer": "Narrative analysis",
        "difficulty": "medium",
        "topic": "Data Analysis",
        "explanation": "Narrative analysis focuses on interpreting stories or personal accounts to understand experiences."
    },
    {
        "id": 235,
        "question": "Which software supports qualitative coding and analysis?",
        "options": [
            "SPSS",
            "R",
            "Atlas.ti",
            "Excel"
        ],
        "answer": "Atlas.ti",
        "difficulty": "easy",
        "topic": "Data Analysis",
        "explanation": "Atlas.ti is designed for qualitative data analysis, supporting coding and theme identification."
    },
    {
        "id": 236,
        "question": "Which validity type ensures a measure aligns with a theoretical construct?",
        "options": [
            "Content validity",
            "Construct validity",
            "Internal validity",
            "External validity"
        ],
        "answer": "Construct validity",
        "difficulty": "medium",
        "topic": "Validity, Reliability, and Trustworthiness",
        "explanation": "Construct validity ensures a measure accurately reflects the theoretical construct it targets."
    },
    {
        "id": 237,
        "question": "Which reliability measure assesses consistency over repeated tests?",
        "options": [
            "Inter-rater reliability",
            "Test-retest reliability",
            "Internal consistency",
            "Parallel forms reliability"
        ],
        "answer": "Test-retest reliability",
        "difficulty": "medium",
        "topic": "Validity, Reliability, and Trustworthiness",
        "explanation": "Test-retest reliability evaluates consistency when the same test is administered over time."
    },
    {
        "id": 238,
        "question": "What is dependability in qualitative research?",
        "options": [
            "Generalizability of findings",
            "Consistency of research processes",
            "Accuracy of measurements",
            "Use of multiple methods"
        ],
        "answer": "Consistency of research processes",
        "difficulty": "medium",
        "topic": "Validity, Reliability, and Trustworthiness",
        "explanation": "Dependability ensures qualitative research processes are consistent and auditable."
    },
    {
        "id": 239,
        "question": "Which trustworthiness criterion ensures findings reflect participants’ perspectives?",
        "options": [
            "Transferability",
            "Credibility",
            "Confirmability",
            "Dependability"
        ],
        "answer": "Credibility",
        "difficulty": "medium",
        "topic": "Validity, Reliability, and Trustworthiness",
        "explanation": "Credibility ensures qualitative findings accurately reflect participants’ experiences."
    },
    {
        "id": 240,
        "question": "What is the purpose of a research proposal’s introduction?",
        "options": [
            "To present results",
            "To outline the study’s background and rationale",
            "To list references",
            "To describe data analysis"
        ],
        "answer": "To outline the study’s background and rationale",
        "difficulty": "easy",
        "topic": "Writing and Presenting Research",
        "explanation": "The introduction provides the study’s context, problem, and rationale."
    },
    {
        "id": 241,
        "question": "Which section of a research report presents raw findings?",
        "options": [
            "Introduction",
            "Methodology",
            "Results",
            "Discussion"
        ],
        "answer": "Results",
        "difficulty": "easy",
        "topic": "Writing and Presenting Research",
        "explanation": "The results section presents raw findings without interpretation."
    },
    {
        "id": 242,
        "question": "What is a key strategy to avoid plagiarism?",
        "options": [
            "Copying text without attribution",
            "Using quotation marks and citations",
            "Paraphrasing without credit",
            "Omitting references"
        ],
        "answer": "Using quotation marks and citations",
        "difficulty": "easy",
        "topic": "Writing and Presenting Research",
        "explanation": "Quotation marks and citations credit original authors, preventing plagiarism."
    },
    {
        "id": 243,
        "question": "Which visual aid is best for showing proportions of a whole?",
        "options": [
            "Bar graph",
            "Line graph",
            "Pie chart",
            "Scatter plot"
        ],
        "answer": "Pie chart",
        "difficulty": "easy",
        "topic": "Writing and Presenting Research",
        "explanation": "Pie charts display proportions of a whole, showing how parts contribute to the total."
    },
    {
        "id": 244,
        "question": "What is a critical step in preparing a conference presentation?",
        "options": [
            "Ignoring time limits",
            "Tailoring content to the audience",
            "Excluding visuals",
            "Using complex jargon"
        ],
        "answer": "Tailoring content to the audience",
        "difficulty": "medium",
        "topic": "Writing and Presenting Research",
        "explanation": "Tailoring content ensures the presentation is relevant and understandable to the audience."
    },
    {
        "id": 245,
        "question": "What is a meta-analysis designed to do?",
        "options": [
            "Conduct a single experiment",
            "Combine statistical results from multiple studies",
            "Collect qualitative data",
            "Design a new study"
        ],
        "answer": "Combine statistical results from multiple studies",
        "difficulty": "medium",
        "topic": "Advanced/Contemporary Topics",
        "explanation": "Meta-analysis synthesizes quantitative results from multiple studies to estimate overall effects."
    },
    {
        "id": 246,
        "question": "What is a key benefit of triangulation in research?",
        "options": [
            "Reducing sample size",
            "Enhancing validity through multiple methods",
            "Simplifying data collection",
            "Eliminating all bias"
        ],
        "answer": "Enhancing validity through multiple methods",
        "difficulty": "medium",
        "topic": "Advanced/Contemporary Topics",
        "explanation": "Triangulation uses multiple methods or sources to validate findings, increasing credibility."
    },
    {
        "id": 247,
        "question": "What is a primary function of a Research Ethics Committee (REC)?",
        "options": [
            "To analyze data",
            "To ensure participant protection",
            "To fund research",
            "To publish findings"
        ],
        "answer": "To ensure participant protection",
        "difficulty": "easy",
        "topic": "Advanced/Contemporary Topics",
        "explanation": "RECs review studies to protect participants’ rights and ensure ethical conduct."
    },
    {
        "id": 248,
        "question": "What characterizes community-based participatory research?",
        "options": [
            "Exclusion of community input",
            "Collaboration with community members",
            "Focus on lab experiments",
            "Use of large random samples"
        ],
        "answer": "Collaboration with community members",
        "difficulty": "medium",
        "topic": "Advanced/Contemporary Topics",
        "explanation": "Community-based participatory research involves community collaboration to address local issues."
    },
    {
        "id": 249,
        "question": "How does artificial intelligence enhance research?",
        "options": [
            "By replacing all human effort",
            "By automating complex data analysis",
            "By reducing data quality",
            "By eliminating hypotheses"
        ],
        "answer": "By automating complex data analysis",
        "difficulty": "medium",
        "topic": "Advanced/Contemporary Topics",
        "explanation": "AI automates data analysis, identifying patterns in large datasets efficiently."
    },
    {
        "id": 250,
        "question": "What is a core principle of open science?",
        "options": [
            "Restricting data access",
            "Promoting data sharing and transparency",
            "Avoiding peer review",
            "Limiting replication"
        ],
        "answer": "Promoting data sharing and transparency",
        "difficulty": "easy",
        "topic": "Advanced/Contemporary Topics",
        "explanation": "Open science encourages data sharing and transparency to enhance research reproducibility."
    },
    {
        "id": 251,
        "question": "Which type of research describes phenomena without explaining causes?",
        "options": [
            "Explanatory research",
            "Descriptive research",
            "Exploratory research",
            "Applied research"
        ],
        "answer": "Descriptive research",
        "difficulty": "easy",
        "topic": "Foundations of Research",
        "explanation": "Descriptive research observes and describes phenomena without delving into causes."
    },
    {
        "id": 252,
        "question": "Which paradigm emphasizes subjective experiences?",
        "options": [
            "Positivism",
            "Interpretivism",
            "Critical theory",
            "Pragmatism"
        ],
        "answer": "Interpretivism",
        "difficulty": "medium",
        "topic": "Foundations of Research",
        "explanation": "Interpretivism focuses on understanding subjective experiences and meanings."
    },
    {
        "id": 253,
        "question": "What ensures ethical research conduct?",
        "options": [
            "Ignoring participant rights",
            "Obtaining informed consent",
            "Using biased sampling",
            "Excluding data transparency"
        ],
        "answer": "Obtaining informed consent",
        "difficulty": "easy",
        "topic": "Foundations of Research",
        "explanation": "Informed consent ensures participants understand and agree to the study’s procedures."
    },
    {
        "id": 254,
        "question": "What makes a research problem feasible?",
        "options": [
            "It is overly complex",
            "It can be studied with available resources",
            "It lacks significance",
            "It is unrelated to theory"
        ],
        "answer": "It can be studied with available resources",
        "difficulty": "easy",
        "topic": "Research Problem & Hypothesis",
        "explanation": "A feasible research problem can be investigated within the researcher’s resources and timeframe."
    },
    {
        "id": 255,
        "question": "What is the purpose of a non-directional hypothesis?",
        "options": [
            "Predicts a specific direction",
            "States a relationship without direction",
            "Rejects the null hypothesis",
            "Describes the sample"
        ],
        "answer": "States a relationship without direction",
        "difficulty": "medium",
        "topic": "Research Problem & Hypothesis",
        "explanation": "A non-directional hypothesis predicts a relationship but does not specify its direction."
    },
    {
        "id": 256,
        "question": "Which variable mediates the relationship between independent and dependent variables?",
        "options": [
            "Control variable",
            "Extraneous variable",
            "Mediating variable",
            "Confounding variable"
        ],
        "answer": "Mediating variable",
        "difficulty": "hard",
        "topic": "Research Problem & Hypothesis",
        "explanation": "A mediating variable explains the mechanism through which the independent variable affects the dependent variable."
    },
    {
        "id": 257,
        "question": "What is a scoping review in literature?",
        "options": [
            "A statistical synthesis",
            "A broad mapping of existing research",
            "A single-study analysis",
            "A meta-analysis"
        ],
        "answer": "A broad mapping of existing research",
        "difficulty": "medium",
        "topic": "Literature Review",
        "explanation": "Scoping reviews map the extent and nature of research on a topic without detailed synthesis."
    },
    {
        "id": 258,
        "question": "Which citation style uses numbered references in text?",
        "options": [
            "APA",
            "MLA",
            "Vancouver",
            "Chicago Notes"
        ],
        "answer": "Vancouver",
        "difficulty": "medium",
        "topic": "Literature Review",
        "explanation": "Vancouver style uses numbered references in the text, common in medical research."
    },
    {
        "id": 259,
        "question": "What is the purpose of a theoretical framework?",
        "options": [
            "To collect data",
            "To provide a lens for interpreting findings",
            "To summarize results",
            "To recruit participants"
        ],
        "answer": "To provide a lens for interpreting findings",
        "difficulty": "medium",
        "topic": "Literature Review",
        "explanation": "A theoretical framework guides the study by providing a lens to interpret data."
    },
    {
        "id": 260,
        "question": "Which research design is ideal for studying a single event in depth?",
        "options": [
            "Cohort design",
            "Case study design",
            "Experimental design",
            "Cross-sectional design"
        ],
        "answer": "Case study design",
        "difficulty": "easy",
        "topic": "Research Design",
        "explanation": "Case study designs provide detailed insights into a single event, individual, or group."
    },
    {
        "id": 261,
        "question": "What is a limitation of pre-experimental designs?",
        "options": [
            "They use random assignment",
            "They lack control groups",
            "They are highly generalizable",
            "They eliminate bias"
        ],
        "answer": "They lack control groups",
        "difficulty": "medium",
        "topic": "Research Design",
        "explanation": "Pre-experimental designs often lack control groups, weakening causal inference."
    },
    {
        "id": 262,
        "question": "Which sampling method divides the population into strata based on characteristics?",
        "options": [
            "Cluster sampling",
            "Systematic sampling",
            "Stratified sampling",
            "Convenience sampling"
        ],
        "answer": "Stratified sampling",
        "difficulty": "easy",
        "topic": "Sampling Methods",
        "explanation": "Stratified sampling ensures representation by dividing the population into strata and sampling from each."
    },
    {
        "id": 263,
        "question": "Which non-probability sampling method sets quotas for subgroups?",
        "options": [
            "Purposive sampling",
            "Snowball sampling",
            "Quota sampling",
            "Convenience sampling"
        ],
        "answer": "Quota sampling",
        "difficulty": "medium",
        "topic": "Sampling Methods",
        "explanation": "Quota sampling selects a fixed number of participants from predefined subgroups."
    },
    {
        "id": 264,
        "question": "Which data collection method involves direct interaction with participants?",
        "options": [
            "Document analysis",
            "Surveys",
            "Archival research",
            "Secondary data analysis"
        ],
        "answer": "Surveys",
        "difficulty": "easy",
        "topic": "Data Collection Methods",
        "explanation": "Surveys involve direct interaction through questionnaires or interviews with participants."
    },
    {
        "id": 265,
        "question": "What is participant observation?",
        "options": [
            "Observing without involvement",
            "Participating in the group while observing",
            "Conducting surveys",
            "Analyzing documents"
        ],
        "answer": "Participating in the group while observing",
        "difficulty": "medium",
        "topic": "Data Collection Methods",
        "explanation": "Participant observation involves the researcher engaging in the group’s activities while observing."
    },
    {
        "id": 266,
        "question": "Which inferential test compares proportions across groups?",
        "options": [
            "T-test",
            "ANOVA",
            "Chi-square test",
            "Correlation"
        ],
        "answer": "Chi-square test",
        "difficulty": "medium",
        "topic": "Data Analysis",
        "explanation": "The chi-square test compares proportions or frequencies across categorical groups."
    },
    {
        "id": 267,
        "question": "Which qualitative method categorizes data into predefined codes?",
        "options": [
            "Thematic analysis",
            "Content analysis",
            "Narrative analysis",
            "Grounded theory"
        ],
        "answer": "Content analysis",
        "difficulty": "medium",
        "topic": "Data Analysis",
        "explanation": "Content analysis categorizes data into predefined codes to quantify patterns."
    },
    {
        "id": 268,
        "question": "Which validity type ensures a test measures all aspects of a concept?",
        "options": [
            "Construct validity",
            "Content validity",
            "Internal validity",
            "External validity"
        ],
        "answer": "Content validity",
        "difficulty": "medium",
        "topic": "Validity, Reliability, and Trustworthiness",
        "explanation": "Content validity ensures a test covers all relevant aspects of the concept being measured."
    },
    {
        "id": 269,
        "question": "Which section of a research report compares findings to prior studies?",
        "options": [
            "Introduction",
            "Methodology",
            "Results",
            "Discussion"
        ],
        "answer": "Discussion",
        "difficulty": "easy",
        "topic": "Writing and Presenting Research",
        "explanation": "The discussion section compares findings to prior research and interprets their implications."
    },
    {
        "id": 270,
        "question": "What is a key feature of a systematic review’s methodology?",
        "options": [
            "Broad narrative approach",
            "Clear inclusion criteria",
            "Single-study focus",
            "No data synthesis"
        ],
        "answer": "Clear inclusion criteria",
        "difficulty": "medium",
        "topic": "Advanced/Contemporary Topics",
        "explanation": "Systematic reviews use clear inclusion criteria to select relevant studies for analysis."
    },
    {
        "id": 271,
        "question": "What is a characteristic of a good research question?",
        "options": [
            "It is vague and general",
            "It is clear and researchable",
            "It is unrelated to the literature",
            "It is overly complex"
        ],
        "answer": "It is clear and researchable",
        "difficulty": "easy",
        "topic": "Research Problem & Hypothesis",
        "explanation": "A good research question is clear, focused, and can be investigated through research."
    },
    {
        "id": 272,
        "question": "Which variable is manipulated to observe its effect?",
        "options": [
            "Dependent variable",
            "Independent variable",
            "Control variable",
            "Mediating variable"
        ],
        "answer": "Independent variable",
        "difficulty": "easy",
        "topic": "Research Problem & Hypothesis",
        "explanation": "The independent variable is manipulated to assess its impact on the dependent variable."
    },
    {
        "id": 273,
        "question": "What is a tertiary source in literature?",
        "options": [
            "Original research articles",
            "Review articles",
            "Encyclopedias",
            "Raw data"
        ],
        "answer": "Encyclopedias",
        "difficulty": "easy",
        "topic": "Literature Review",
        "explanation": "Tertiary sources, like encyclopedias, provide summarized overviews of topics."
    },
    {
        "id": 274,
        "question": "Which research design tracks participants over time?",
        "options": [
            "Cross-sectional design",
            "Longitudinal design",
            "Case study design",
            "Quasi-experimental design"
        ],
        "answer": "Longitudinal design",
        "difficulty": "easy",
        "topic": "Research Design",
        "explanation": "Longitudinal designs collect data from the same participants over extended periods."
    },
    {
        "id": 275,
        "question": "Which sampling method is most likely to reduce bias?",
        "options": [
            "Convenience sampling",
            "Simple random sampling",
            "Snowball sampling",
            "Quota sampling"
        ],
        "answer": "Simple random sampling",
        "difficulty": "easy",
        "topic": "Sampling Methods",
        "explanation": "Simple random sampling gives every individual an equal chance of selection, reducing bias."
    },
    {
        "id": 276,
        "question": "Which data collection method is non-intrusive?",
        "options": [
            "Interviews",
            "Surveys",
            "Non-participant observation",
            "Focus groups"
        ],
        "answer": "Non-participant observation",
        "difficulty": "medium",
        "topic": "Data Collection Methods",
        "explanation": "Non-participant observation involves observing without interacting, minimizing intrusion."
    },
    {
        "id": 277,
        "question": "Which statistical test is used for paired non-parametric data?",
        "options": [
            "T-test",
            "Wilcoxon signed-rank test",
            "ANOVA",
            "Chi-square test"
        ],
        "answer": "Wilcoxon signed-rank test",
        "difficulty": "hard",
        "topic": "Data Analysis",
        "explanation": "The Wilcoxon signed-rank test compares paired non-parametric data."
    },
    {
        "id": 278,
        "question": "Which qualitative method uses a structured coding framework?",
        "options": [
            "Thematic analysis",
            "Framework analysis",
            "Narrative analysis",
            "Grounded theory"
        ],
        "answer": "Framework analysis",
        "difficulty": "medium",
        "topic": "Data Analysis",
        "explanation": "Framework analysis uses a structured coding framework to organize and interpret data."
    },
    {
        "id": 279,
        "question": "Which validity type compares a new measure to an established one?",
        "options": [
            "Content validity",
            "Construct validity",
            "Criterion validity",
            "Internal validity"
        ],
        "answer": "Criterion validity",
        "difficulty": "medium",
        "topic": "Validity, Reliability, and Trustworthiness",
        "explanation": "Criterion validity assesses how well a new measure correlates with an established standard."
    },
    {
        "id": 280,
        "question": "What is the purpose of a research abstract?",
        "options": [
            "To detail the methodology",
            "To provide a concise study overview",
            "To list all references",
            "To recruit participants"
        ],
        "answer": "To provide a concise study overview",
        "difficulty": "easy",
        "topic": "Writing and Presenting Research",
        "explanation": "An abstract summarizes the study’s purpose, methods, results, and conclusions."
    },
    {
        "id": 281,
        "question": "What is a key ethical consideration in research?",
        "options": [
            "Maximizing participant discomfort",
            "Ensuring voluntary participation",
            "Ignoring confidentiality",
            "Using deceptive methods without justification"
        ],
        "answer": "Ensuring voluntary participation",
        "difficulty": "easy",
        "topic": "Foundations of Research",
        "explanation": "Voluntary participation ensures participants freely choose to join without coercion."
    },
    {
        "id": 282,
        "question": "Which type of hypothesis is tested statistically?",
        "options": [
            "Research hypothesis",
            "Alternative hypothesis",
            "Null hypothesis",
            "Directional hypothesis"
        ],
        "answer": "Null hypothesis",
        "difficulty": "medium",
        "topic": "Research Problem & Hypothesis",
        "explanation": "The null hypothesis is tested statistically to determine if there is evidence to reject it."
    },
    {
        "id": 283,
        "question": "What is a secondary source in research?",
        "options": [
            "Original data",
            "Review articles",
            "Lab notebooks",
            "Primary research articles"
        ],
        "answer": "Review articles",
        "difficulty": "easy",
        "topic": "Literature Review",
        "explanation": "Secondary sources, like review articles, summarize or interpret primary data."
    },
    {
        "id": 284,
        "question": "Which research design lacks manipulation of variables?",
        "options": [
            "Experimental design",
            "Quasi-experimental design",
            "Observational design",
            "Mixed-methods design"
        ],
        "answer": "Observational design",
        "difficulty": "easy",
        "topic": "Research Design",
        "explanation": "Observational designs study variables without manipulating them."
    },
    {
        "id": 285,
        "question": "Which sampling method is best for geographically dispersed populations?",
        "options": [
            "Simple random sampling",
            "Stratified sampling",
            "Cluster sampling",
            "Convenience sampling"
        ],
        "answer": "Cluster sampling",
        "difficulty": "medium",
        "topic": "Sampling Methods",
        "explanation": "Cluster sampling is efficient for geographically dispersed populations by sampling entire clusters."
    },
    {
        "id": 286,
        "question": "Which data collection method is best for standardized data?",
        "options": [
            "Unstructured interviews",
            "Surveys",
            "Focus groups",
            "Participant observation"
        ],
        "answer": "Surveys",
        "difficulty": "easy",
        "topic": "Data Collection Methods",
        "explanation": "Surveys use standardized questions to collect consistent data across participants."
    },
    {
        "id": 287,
        "question": "Which statistical test assesses linear relationships?",
        "options": [
            "T-test",
            "ANOVA",
            "Correlation coefficient",
            "Chi-square test"
        ],
        "answer": "Correlation coefficient",
        "difficulty": "medium",
        "topic": "Data Analysis",
        "explanation": "The correlation coefficient measures the strength and direction of linear relationships."
    },
    {
        "id": 288,
        "question": "Which qualitative method builds theory from data?",
        "options": [
            "Thematic analysis",
            "Content analysis",
            "Grounded theory",
            "Framework analysis"
        ],
        "answer": "Grounded theory",
        "difficulty": "medium",
        "topic": "Data Analysis",
        "explanation": "Grounded theory develops theories through iterative data coding and analysis."
    },
    {
        "id": 289,
        "question": "Which reliability measure assesses agreement between raters?",
        "options": [
            "Test-retest reliability",
            "Inter-rater reliability",
            "Internal consistency",
            "Parallel forms reliability"
        ],
        "answer": "Inter-rater reliability",
        "difficulty": "medium",
        "topic": "Validity, Reliability, and Trustworthiness",
        "explanation": "Inter-rater reliability measures consistency between different raters’ assessments."
    },
    {
        "id": 290,
        "question": "What is a key feature of a research proposal?",
        "options": [
            "Final results",
            "Research methodology",
            "Published findings",
            "Raw data"
        ],
        "answer": "Research methodology",
        "difficulty": "easy",
        "topic": "Writing and Presenting Research",
        "explanation": "A research proposal outlines the methodology to address the research question."
    },
    {
        "id": 291,
        "question": "What is a characteristic of big data in research?",
        "options": [
            "Small sample sizes",
            "High volume and variety",
            "Manual analysis",
            "Limited complexity"
        ],
        "answer": "High volume and variety",
        "difficulty": "medium",
        "topic": "Advanced/Contemporary Topics",
        "explanation": "Big data involves large, diverse datasets requiring advanced analytical tools."
    },
    {
        "id": 292,
        "question": "Which type of research question is most appropriate for qualitative studies?",
        "options": [
            "How many participants?",
            "What is the effect size?",
            "How do participants experience a phenomenon?",
            "What is the correlation coefficient?"
        ],
        "answer": "How do participants experience a phenomenon?",
        "difficulty": "easy",
        "topic": "Research Problem & Hypothesis",
        "explanation": "Qualitative research questions explore experiences, meanings, or processes."
    },
    {
        "id": 293,
        "question": "What is a narrative review’s primary focus?",
        "options": [
            "Statistical synthesis",
            "Qualitative synthesis of literature",
            "Single-study analysis",
            "Protocol-driven approach"
        ],
        "answer": "Qualitative synthesis of literature",
        "difficulty": "medium",
        "topic": "Literature Review",
        "explanation": "Narrative reviews provide a qualitative overview of literature without a strict protocol."
    },
    {
        "id": 294,
        "question": "Which research design compares groups without intervention?",
        "options": [
            "Experimental design",
            "Quasi-experimental design",
            "Cohort design",
            "Case study design"
        ],
        "answer": "Cohort design",
        "difficulty": "medium",
        "topic": "Research Design",
        "explanation": "Cohort designs follow groups over time without manipulating variables."
    },
    {
        "id": 295,
        "question": "Which sampling method relies on participant referrals?",
        "options": [
            "Simple random sampling",
            "Stratified sampling",
            "Snowball sampling",
            "Systematic sampling"
        ],
        "answer": "Snowball sampling",
        "difficulty": "easy",
        "topic": "Sampling Methods",
        "explanation": "Snowball sampling uses referrals to recruit hard-to-reach participants."
    },
    {
        "id": 296,
        "question": "Which data collection method is best for in-depth individual insights?",
        "options": [
            "Surveys",
            "Focus groups",
            "Interviews",
            "Observations"
        ],
        "answer": "Interviews",
        "difficulty": "easy",
        "topic": "Data Collection Methods",
        "explanation": "Interviews provide in-depth, individualized insights into participants’ perspectives."
    },
    {
        "id": 297,
        "question": "Which statistical test is used for multiple group comparisons of non-parametric data?",
        "options": [
            "T-test",
            "ANOVA",
            "Kruskal-Wallis test",
            "Chi-square test"
        ],
        "answer": "Kruskal-Wallis test",
        "difficulty": "hard",
        "topic": "Data Analysis",
        "explanation": "The Kruskal-Wallis test compares non-parametric data across multiple groups."
    },
    {
        "id": 298,
        "question": "Which qualitative method focuses on interpreting texts or media?",
        "options": [
            "Thematic analysis",
            "Content analysis",
            "Narrative analysis",
            "Grounded theory"
        ],
        "answer": "Content analysis",
        "difficulty": "medium",
        "topic": "Data Analysis",
        "explanation": "Content analysis interprets and quantifies patterns in texts or media."
    },
    {
        "id": 299,
        "question": "Which reliability measure uses Cronbach’s alpha?",
        "options": [
            "Test-retest reliability",
            "Inter-rater reliability",
            "Internal consistency",
            "Parallel forms reliability"
        ],
        "answer": "Internal consistency",
        "difficulty": "medium",
        "topic": "Validity, Reliability, and Trustworthiness",
        "explanation": "Cronbach’s alpha assesses internal consistency of test items."
    },
    {
        "id": 300,
        "question": "What is a key goal of a systematic review?",
        "options": [
            "To explore a single case",
            "To synthesize evidence rigorously",
            "To collect primary data",
            "To avoid literature"
        ],
        "answer": "To synthesize evidence rigorously",
        "difficulty": "medium",
        "topic": "Advanced/Contemporary Topics",
        "explanation": "Systematic reviews synthesize evidence using a rigorous, transparent methodology."
    },
    {
        "id": 301,
        "question": "What is a primary goal of basic research?",
        "options": [
            "To solve immediate practical problems",
            "To develop new technologies",
            "To expand theoretical knowledge",
            "To replicate applied studies"
        ],
        "answer": "To expand theoretical knowledge",
        "difficulty": "easy",
        "topic": "Foundations of Research",
        "explanation": "Basic research aims to advance fundamental understanding without immediate practical applications."
    },
    {
        "id": 302,
        "question": "Which characteristic of scientific research ensures findings are based on observable data?",
        "options": [
            "Subjectivity",
            "Empirical basis",
            "Speculative reasoning",
            "Non-replicability"
        ],
        "answer": "Empirical basis",
        "difficulty": "easy",
        "topic": "Foundations of Research",
        "explanation": "Scientific research relies on empirical data derived from observations or experiments."
    },
    {
        "id": 303,
        "question": "Which research paradigm focuses on understanding subjective meanings?",
        "options": [
            "Positivism",
            "Critical theory",
            "Interpretivism",
            "Pragmatism"
        ],
        "answer": "Interpretivism",
        "difficulty": "medium",
        "topic": "Foundations of Research",
        "explanation": "Interpretivism emphasizes understanding subjective experiences and meanings in social contexts."
    },
    {
        "id": 304,
        "question": "What does ontology primarily concern in research?",
        "options": [
            "How knowledge is acquired",
            "The nature of existence",
            "Ethical research practices",
            "Statistical analysis methods"
        ],
        "answer": "The nature of existence",
        "difficulty": "medium",
        "topic": "Foundations of Research",
        "explanation": "Ontology explores the nature of reality and what entities exist within it."
    },
    {
        "id": 305,
        "question": "Which ethical principle ensures participants’ personal information is protected?",
        "options": [
            "Beneficence",
            "Justice",
            "Confidentiality",
            "Voluntary participation"
        ],
        "answer": "Confidentiality",
        "difficulty": "easy",
        "topic": "Foundations of Research",
        "explanation": "Confidentiality protects participants’ personal information from unauthorized access."
    },
    {
        "id": 306,
        "question": "What is the focus of explanatory research?",
        "options": [
            "Describing phenomena",
            "Exploring new areas",
            "Explaining causal relationships",
            "Applying solutions"
        ],
        "answer": "Explaining causal relationships",
        "difficulty": "easy",
        "topic": "Foundations of Research",
        "explanation": "Explanatory research seeks to understand why and how phenomena occur."
    },
    {
        "id": 307,
        "question": "What is a key feature of a well-formulated research problem?",
        "options": [
            "It is vague and broad",
            "It is clear and specific",
            "It lacks theoretical grounding",
            "It is unrelated to resources"
        ],
        "answer": "It is clear and specific",
        "difficulty": "easy",
        "topic": "Research Problem & Hypothesis",
        "explanation": "A well-formulated research problem is clear, specific, and guides the study’s direction."
    },
    {
        "id": 308,
        "question": "What is the purpose of a null hypothesis?",
        "options": [
            "To predict a specific effect",
            "To state no effect or relationship",
            "To confirm the research hypothesis",
            "To describe the sample"
        ],
        "answer": "To state no effect or relationship",
        "difficulty": "easy",
        "topic": "Research Problem & Hypothesis",
        "explanation": "The null hypothesis assumes no effect or relationship, serving as a baseline for testing."
    },
    {
        "id": 309,
        "question": "Which variable is manipulated by the researcher?",
        "options": [
            "Dependent variable",
            "Independent variable",
            "Control variable",
            "Confounding variable"
        ],
        "answer": "Independent variable",
        "difficulty": "easy",
        "topic": "Research Problem & Hypothesis",
        "explanation": "The independent variable is manipulated to observe its effect on the dependent variable."
    },
    {
        "id": 310,
        "question": "What is a research question designed to do?",
        "options": [
            "Summarize findings",
            "Guide the study’s focus",
            "Analyze data",
            "Publish results"
        ],
        "answer": "Guide the study’s focus",
        "difficulty": "easy",
        "topic": "Research Problem & Hypothesis",
        "explanation": "A research question provides a clear focus for the study’s investigation."
    },
    {
        "id": 311,
        "question": "What is a primary function of a literature review?",
        "options": [
            "To collect primary data",
            "To synthesize existing research",
            "To conduct statistical tests",
            "To recruit participants"
        ],
        "answer": "To synthesize existing research",
        "difficulty": "easy",
        "topic": "Literature Review",
        "explanation": "A literature review synthesizes prior research to contextualize the current study."
    },
    {
        "id": 312,
        "question": "Which type of review follows a strict protocol to minimize bias?",
        "options": [
            "Narrative review",
            "Scoping review",
            "Systematic review",
            "Integrative review"
        ],
        "answer": "Systematic review",
        "difficulty": "medium",
        "topic": "Literature Review",
        "explanation": "Systematic reviews use a rigorous protocol to ensure unbiased synthesis of evidence."
    },
    {
        "id": 313,
        "question": "Which source is considered tertiary?",
        "options": [
            "Original research articles",
            "Textbooks",
            "Lab reports",
            "Peer-reviewed studies"
        ],
        "answer": "Textbooks",
        "difficulty": "easy",
        "topic": "Literature Review",
        "explanation": "Tertiary sources, like textbooks, provide summarized overviews of primary and secondary data."
    },
    {
        "id": 314,
        "question": "Which citation style uses author-date in-text citations?",
        "options": [
            "MLA",
            "APA",
            "Chicago Notes",
            "Vancouver"
        ],
        "answer": "APA",
        "difficulty": "medium",
        "topic": "Literature Review",
        "explanation": "APA style uses author-date citations (e.g., Smith, 2020) within the text."
    },
    {
        "id": 315,
        "question": "What is the purpose of a conceptual framework?",
        "options": [
            "To outline statistical methods",
            "To define relationships between concepts",
            "To summarize results",
            "To list references"
        ],
        "answer": "To define relationships between concepts",
        "difficulty": "medium",
        "topic": "Literature Review",
        "explanation": "A conceptual framework outlines how key concepts are related to guide the study."
    },
    {
        "id": 316,
        "question": "Which research design manipulates variables to test causality?",
        "options": [
            "Descriptive design",
            "Correlational design",
            "Experimental design",
            "Observational design"
        ],
        "answer": "Experimental design",
        "difficulty": "easy",
        "topic": "Research Design",
        "explanation": "Experimental designs manipulate variables to establish causal relationships."
    },
    {
        "id": 317,
        "question": "What is a feature of a true experimental design?",
        "options": [
            "Non-random assignment",
            "Lack of a control group",
            "Random assignment",
            "Single time-point data"
        ],
        "answer": "Random assignment",
        "difficulty": "medium",
        "topic": "Research Design",
        "explanation": "True experimental designs use random assignment to minimize bias and ensure comparability."
    },
    {
        "id": 318,
        "question": "Which research design collects data at one point in time?",
        "options": [
            "Longitudinal design",
            "Cross-sectional design",
            "Cohort design",
            "Case study design"
        ],
        "answer": "Cross-sectional design",
        "difficulty": "easy",
        "topic": "Research Design",
        "explanation": "Cross-sectional designs collect data at a single time point to assess relationships."
    },
    {
        "id": 319,
        "question": "What is a key feature of mixed-methods research?",
        "options": [
            "Exclusive use of quantitative data",
            "Integration of qualitative and quantitative data",
            "Focus on a single method",
            "Avoidance of data analysis"
        ],
        "answer": "Integration of qualitative and quantitative data",
        "difficulty": "easy",
        "topic": "Research Design",
        "explanation": "Mixed-methods research combines qualitative and quantitative data for comprehensive insights."
    },
    {
        "id": 320,
        "question": "What is the focus of case study research?",
        "options": [
            "Testing hypotheses",
            "In-depth analysis of a single case",
            "Large-scale surveys",
            "Experimental manipulation"
        ],
        "answer": "In-depth analysis of a single case",
        "difficulty": "easy",
        "topic": "Research Design",
        "explanation": "Case studies provide detailed analysis of a single case or small group."
    },
    {
        "id": 321,
        "question": "What is a population in research?",
        "options": [
            "The sample studied",
            "The entire group of interest",
            "The data analysis method",
            "The research team"
        ],
        "answer": "The entire group of interest",
        "difficulty": "easy",
        "topic": "Sampling Methods",
        "explanation": "The population is the complete group the researcher aims to study."
    },
    {
        "id": 322,
        "question": "Which sampling method ensures every individual has an equal chance of selection?",
        "options": [
            "Stratified sampling",
            "Simple random sampling",
            "Cluster sampling",
            "Systematic sampling"
        ],
        "answer": "Simple random sampling",
        "difficulty": "easy",
        "topic": "Sampling Methods",
        "explanation": "Simple random sampling gives each individual an equal probability of being selected."
    },
    {
        "id": 323,
        "question": "Which non-probability sampling method relies on participant referrals?",
        "options": [
            "Quota sampling",
            "Purposive sampling",
            "Snowball sampling",
            "Convenience sampling"
        ],
        "answer": "Snowball sampling",
        "difficulty": "medium",
        "topic": "Sampling Methods",
        "explanation": "Snowball sampling uses referrals to recruit participants, often for hard-to-reach groups."
    },
    {
        "id": 324,
        "question": "What is a common source of sampling bias?",
        "options": [
            "Random selection",
            "Non-representative sampling",
            "Large sample sizes",
            "Statistical analysis"
        ],
        "answer": "Non-representative sampling",
        "difficulty": "medium",
        "topic": "Sampling Methods",
        "explanation": "Sampling bias occurs when the sample does not represent the population accurately."
    },
    {
        "id": 325,
        "question": "What influences sample size determination?",
        "options": [
            "Publication requirements",
            "Expected effect size",
            "Researcher preference",
            "Data collection method"
        ],
        "answer": "Expected effect size",
        "difficulty": "medium",
        "topic": "Sampling Methods",
        "explanation": "Expected effect size affects sample size to ensure sufficient power to detect significant effects."
    },
    {
        "id": 326,
        "question": "Which data collection method gathers firsthand information?",
        "options": [
            "Secondary data analysis",
            "Document analysis",
            "Primary data collection",
            "Archival research"
        ],
        "answer": "Primary data collection",
        "difficulty": "easy",
        "topic": "Data Collection Methods",
        "explanation": "Primary data collection involves gathering original data directly from participants or observations."
    },
    {
        "id": 327,
        "question": "Which qualitative method involves moderated group discussions?",
        "options": [
            "Interviews",
            "Focus groups",
            "Observations",
            "Document analysis"
        ],
        "answer": "Focus groups",
        "difficulty": "easy",
        "topic": "Data Collection Methods",
        "explanation": "Focus groups use moderated discussions to explore group perspectives."
    },
    {
        "id": 328,
        "question": "What is a feature of semi-structured interviews?",
        "options": [
            "Fixed response options",
            "Flexible question guide",
            "No participant interaction",
            "Quantitative focus"
        ],
        "answer": "Flexible question guide",
        "difficulty": "medium",
        "topic": "Data Collection Methods",
        "explanation": "Semi-structured interviews use a guide but allow flexibility for follow-up questions."
    },
    {
        "id": 329,
        "question": "What is the purpose of pilot testing in research?",
        "options": [
            "To publish results",
            "To refine data collection instruments",
            "To recruit participants",
            "To analyze final data"
        ],
        "answer": "To refine data collection instruments",
        "difficulty": "easy",
        "topic": "Data Collection Methods",
        "explanation": "Pilot testing refines instruments by identifying issues before full-scale data collection."
    },
    {
        "id": 330,
        "question": "Which quantitative method uses standardized questionnaires?",
        "options": [
            "Experiments",
            "Surveys",
            "Observations",
            "Focus groups"
        ],
        "answer": "Surveys",
        "difficulty": "easy",
        "topic": "Data Collection Methods",
        "explanation": "Surveys collect standardized quantitative data using questionnaires."
    },
    {
        "id": 331,
        "question": "Which descriptive statistic measures the middle value of a dataset?",
        "options": [
            "Mean",
            "Median",
            "Mode",
            "Standard deviation"
        ],
        "answer": "Median",
        "difficulty": "easy",
        "topic": "Data Analysis",
        "explanation": "The median is the middle value when data is ordered, representing the central tendency."
    },
    {
        "id": 332,
        "question": "Which inferential test compares means between two independent groups?",
        "options": [
            "Paired t-test",
            "Independent t-test",
            "ANOVA",
            "Chi-square test"
        ],
        "answer": "Independent t-test",
        "difficulty": "medium",
        "topic": "Data Analysis",
        "explanation": "The independent t-test compares means between two unrelated groups."
    },
    {
        "id": 333,
        "question": "What does a 95% confidence interval represent?",
        "options": [
            "95% of data is accurate",
            "95% chance the true parameter is in the interval",
            "95% of participants agree",
            "95% significance level"
        ],
        "answer": "95% chance the true parameter is in the interval",
        "difficulty": "medium",
        "topic": "Data Analysis",
        "explanation": "A 95% confidence interval indicates a 95% probability that the true parameter lies within the interval."
    },
    {
        "id": 334,
        "question": "Which qualitative analysis method identifies patterns across data?",
        "options": [
            "Content analysis",
            "Thematic analysis",
            "Narrative analysis",
            "Framework analysis"
        ],
        "answer": "Thematic analysis",
        "difficulty": "medium",
        "topic": "Data Analysis",
        "explanation": "Thematic analysis identifies and interprets recurring themes or patterns in qualitative data."
    },
    {
        "id": 335,
        "question": "Which software is commonly used for statistical analysis?",
        "options": [
            "NVivo",
            "R",
            "Atlas.ti",
            "MAXQDA"
        ],
        "answer": "R",
        "difficulty": "easy",
        "topic": "Data Analysis",
        "explanation": "R is a powerful open-source software for statistical analysis and data visualization."
    },
    {
        "id": 336,
        "question": "Which validity type ensures findings apply to other contexts?",
        "options": [
            "Internal validity",
            "External validity",
            "Construct validity",
            "Content validity"
        ],
        "answer": "External validity",
        "difficulty": "medium",
        "topic": "Validity, Reliability, and Trustworthiness",
        "explanation": "External validity assesses the generalizability of findings to other populations or settings."
    },
    {
        "id": 337,
        "question": "Which reliability measure assesses consistency between different raters?",
        "options": [
            "Test-retest reliability",
            "Inter-rater reliability",
            "Internal consistency",
            "Parallel forms reliability"
        ],
        "answer": "Inter-rater reliability",
        "difficulty": "medium",
        "topic": "Validity, Reliability, and Trustworthiness",
        "explanation": "Inter-rater reliability measures agreement between different raters’ assessments."
    },
    {
        "id": 338,
        "question": "What is transferability in qualitative research?",
        "options": [
            "Consistency of results",
            "Applicability to other contexts",
            "Accuracy of measurements",
            "Objectivity of findings"
        ],
        "answer": "Applicability to other contexts",
        "difficulty": "medium",
        "topic": "Validity, Reliability, and Trustworthiness",
        "explanation": "Transferability assesses whether qualitative findings can apply to similar contexts."
    },
    {
        "id": 339,
        "question": "Which trustworthiness criterion minimizes researcher bias?",
        "options": [
            "Credibility",
            "Dependability",
            "Confirmability",
            "Transferability"
        ],
        "answer": "Confirmability",
        "difficulty": "medium",
        "topic": "Validity, Reliability, and Trustworthiness",
        "explanation": "Confirmability ensures findings are objective and not influenced by researcher bias."
    },
    {
        "id": 340,
        "question": "What is included in a research proposal’s methodology section?",
        "options": [
            "Final results",
            "Study design and procedures",
            "Literature review",
            "Published findings"
        ],
        "answer": "Study design and procedures",
        "difficulty": "easy",
        "topic": "Writing and Presenting Research",
        "explanation": "The methodology section details the study’s design, participants, and data collection methods."
    },
    {
        "id": 341,
        "question": "What is the purpose of a research report’s discussion section?",
        "options": [
            "To present raw data",
            "To interpret findings",
            "To list references",
            "To describe methods"
        ],
        "answer": "To interpret findings",
        "difficulty": "easy",
        "topic": "Writing and Presenting Research",
        "explanation": "The discussion section interprets findings, compares them to prior research, and discusses implications."
    },
    {
        "id": 342,
        "question": "Which practice prevents plagiarism in research writing?",
        "options": [
            "Copying without attribution",
            "Using direct quotes with citations",
            "Paraphrasing without credit",
            "Omitting sources"
        ],
        "answer": "Using direct quotes with citations",
        "difficulty": "easy",
        "topic": "Writing and Presenting Research",
        "explanation": "Using direct quotes with proper citations credits original authors, avoiding plagiarism."
    },
    {
        "id": 343,
        "question": "Which visual aid is best for comparing quantities across categories?",
        "options": [
            "Line graph",
            "Pie chart",
            "Bar graph",
            "Scatter plot"
        ],
        "answer": "Bar graph",
        "difficulty": "easy",
        "topic": "Writing and Presenting Research",
        "explanation": "Bar graphs effectively compare quantities across different categories."
    },
    {
        "id": 344,
        "question": "What is a key consideration for journal submission?",
        "options": [
            "Ignoring guidelines",
            "Following journal formatting rules",
            "Using informal language",
            "Excluding references"
        ],
        "answer": "Following journal formatting rules",
        "difficulty": "medium",
        "topic": "Writing and Presenting Research",
        "explanation": "Adhering to journal guidelines ensures the manuscript meets publication standards."
    },
    {
        "id": 345,
        "question": "What is the primary purpose of a systematic review?",
        "options": [
            "To conduct primary research",
            "To synthesize evidence from multiple studies",
            "To explore a single case",
            "To collect qualitative data"
        ],
        "answer": "To synthesize evidence from multiple studies",
        "difficulty": "medium",
        "topic": "Advanced/Contemporary Topics",
        "explanation": "Systematic reviews synthesize findings from multiple studies using a rigorous methodology."
    },
    {
        "id": 346,
        "question": "What does triangulation enhance in research?",
        "options": [
            "Sample size",
            "Validity of findings",
            "Speed of data collection",
            "Statistical power"
        ],
        "answer": "Validity of findings",
        "difficulty": "medium",
        "topic": "Advanced/Contemporary Topics",
        "explanation": "Triangulation uses multiple methods or sources to validate findings, enhancing credibility."
    },
    {
        "id": 347,
        "question": "What is the role of an Institutional Review Board (IRB)?",
        "options": [
            "To fund research",
            "To ensure ethical conduct",
            "To analyze data",
            "To publish results"
        ],
        "answer": "To ensure ethical conduct",
        "difficulty": "easy",
        "topic": "Advanced/Contemporary Topics",
        "explanation": "IRBs review studies to ensure ethical treatment of participants."
    },
    {
        "id": 348,
        "question": "What is a feature of participatory research?",
        "options": [
            "Exclusion of stakeholders",
            "Collaboration with communities",
            "Focus on lab experiments",
            "Use of random sampling"
        ],
        "answer": "Collaboration with communities",
        "difficulty": "medium",
        "topic": "Advanced/Contemporary Topics",
        "explanation": "Participatory research involves communities in addressing their specific needs."
    },
    {
        "id": 349,
        "question": "How does big data contribute to research?",
        "options": [
            "Reduces data complexity",
            "Enables analysis of large datasets",
            "Eliminates hypotheses",
            "Simplifies sampling"
        ],
        "answer": "Enables analysis of large datasets",
        "difficulty": "medium",
        "topic": "Advanced/Contemporary Topics",
        "explanation": "Big data allows researchers to analyze vast, complex datasets for new insights."
    },
    {
        "id": 350,
        "question": "What promotes reproducibility in open science?",
        "options": [
            "Restricting data access",
            "Sharing data and methods",
            "Avoiding peer review",
            "Using small samples"
        ],
        "answer": "Sharing data and methods",
        "difficulty": "easy",
        "topic": "Advanced/Contemporary Topics",
        "explanation": "Open science promotes reproducibility by sharing data and methods publicly."
    },
    {
        "id": 351,
        "question": "Which type of research explores new phenomena without hypotheses?",
        "options": [
            "Descriptive research",
            "Exploratory research",
            "Explanatory research",
            "Applied research"
        ],
        "answer": "Exploratory research",
        "difficulty": "easy",
        "topic": "Foundations of Research",
        "explanation": "Exploratory research investigates new areas to generate ideas and hypotheses."
    },
    {
        "id": 352,
        "question": "Which paradigm seeks to address social inequalities?",
        "options": [
            "Positivism",
            "Interpretivism",
            "Critical theory",
            "Pragmatism"
        ],
        "answer": "Critical theory",
        "difficulty": "medium",
        "topic": "Foundations of Research",
        "explanation": "Critical theory aims to critique and address social inequalities and power structures."
    },
    {
        "id": 353,
        "question": "Which ethical principle ensures equitable participant selection?",
        "options": [
            "Beneficence",
            "Justice",
            "Confidentiality",
            "Informed consent"
        ],
        "answer": "Justice",
        "difficulty": "medium",
        "topic": "Foundations of Research",
        "explanation": "Justice ensures fair and equitable selection of research participants."
    },
    {
        "id": 354,
        "question": "What makes a research problem researchable?",
        "options": [
            "It is overly broad",
            "It can be investigated empirically",
            "It lacks significance",
            "It is unrelated to theory"
        ],
        "answer": "It can be investigated empirically",
        "difficulty": "easy",
        "topic": "Research Problem & Hypothesis",
        "explanation": "A researchable problem can be studied using empirical methods within available resources."
    },
    {
        "id": 355,
        "question": "What is an alternative hypothesis?",
        "options": [
            "It states no effect",
            "It predicts a relationship or effect",
            "It describes the sample",
            "It confirms the null hypothesis"
        ],
        "answer": "It predicts a relationship or effect",
        "difficulty": "easy",
        "topic": "Research Problem & Hypothesis",
        "explanation": "The alternative hypothesis predicts a relationship or effect, contrasting the null hypothesis."
    },
    {
        "id": 356,
        "question": "Which variable is held constant to minimize its influence?",
        "options": [
            "Independent variable",
            "Dependent variable",
            "Control variable",
            "Mediating variable"
        ],
        "answer": "Control variable",
        "difficulty": "medium",
        "topic": "Research Problem & Hypothesis",
        "explanation": "Control variables are kept constant to reduce their impact on the study’s results."
    },
    {
        "id": 357,
        "question": "What is a scoping review used for?",
        "options": [
            "Statistical analysis",
            "Mapping the extent of research",
            "Single-study analysis",
            "Meta-analysis"
        ],
        "answer": "Mapping the extent of research",
        "difficulty": "medium",
        "topic": "Literature Review",
        "explanation": "Scoping reviews map the breadth and depth of existing research on a topic."
    },
    {
        "id": 358,
        "question": "Which citation style uses numbered references?",
        "options": [
            "APA",
            "MLA",
            "Vancouver",
            "Chicago Author-Date"
        ],
        "answer": "Vancouver",
        "difficulty": "medium",
        "topic": "Literature Review",
        "explanation": "Vancouver style uses numbered references, often in medical and scientific fields."
    },
    {
        "id": 359,
        "question": "What is a theoretical framework’s role?",
        "options": [
            "To collect data",
            "To guide research interpretation",
            "To summarize results",
            "To recruit participants"
        ],
        "answer": "To guide research interpretation",
        "difficulty": "medium",
        "topic": "Literature Review",
        "explanation": "A theoretical framework provides a lens for interpreting research findings."
    },
    {
        "id": 360,
        "question": "Which research design is best for studying group dynamics over time?",
        "options": [
            "Cross-sectional design",
            "Longitudinal design",
            "Experimental design",
            "Case study design"
        ],
        "answer": "Longitudinal design",
        "difficulty": "easy",
        "topic": "Research Design",
        "explanation": "Longitudinal designs track the same participants over time to study changes."
    },
    {
        "id": 361,
        "question": "What is a limitation of quasi-experimental designs?",
        "options": [
            "Use of random assignment",
            "Lack of control over confounding variables",
            "High generalizability",
            "Elimination of bias"
        ],
        "answer": "Lack of control over confounding variables",
        "difficulty": "medium",
        "topic": "Research Design",
        "explanation": "Quasi-experimental designs lack random assignment, increasing the risk of confounding variables."
    },
    {
        "id": 362,
        "question": "Which sampling method selects entire groups randomly?",
        "options": [
            "Simple random sampling",
            "Stratified sampling",
            "Cluster sampling",
            "Systematic sampling"
        ],
        "answer": "Cluster sampling",
        "difficulty": "medium",
        "topic": "Sampling Methods",
        "explanation": "Cluster sampling randomly selects entire groups or clusters from the population."
    },
    {
        "id": 363,
        "question": "Which non-probability sampling method is based on researcher convenience?",
        "options": [
            "Purposive sampling",
            "Quota sampling",
            "Convenience sampling",
            "Snowball sampling"
        ],
        "answer": "Convenience sampling",
        "difficulty": "easy",
        "topic": "Sampling Methods",
        "explanation": "Convenience sampling selects participants based on ease of access."
    },
    {
        "id": 364,
        "question": "Which data collection method is ideal for observing natural behaviors?",
        "options": [
            "Surveys",
            "Interviews",
            "Non-participant observation",
            "Focus groups"
        ],
        "answer": "Non-participant observation",
        "difficulty": "medium",
        "topic": "Data Collection Methods",
        "explanation": "Non-participant observation allows researchers to study behaviors in natural settings without interference."
    },
    {
        "id": 365,
        "question": "What is participant observation in qualitative research?",
        "options": [
            "Observing without involvement",
            "Engaging in the group while observing",
            "Conducting surveys",
            "Analyzing documents"
        ],
        "answer": "Engaging in the group while observing",
        "difficulty": "medium",
        "topic": "Data Collection Methods",
        "explanation": "Participant observation involves the researcher participating in the group’s activities while observing."
    },
    {
        "id": 366,
        "question": "Which inferential test is used for categorical data associations?",
        "options": [
            "T-test",
            "ANOVA",
            "Chi-square test",
            "Correlation"
        ],
        "answer": "Chi-square test",
        "difficulty": "medium",
        "topic": "Data Analysis",
        "explanation": "The chi-square test assesses associations between categorical variables."
    },
    {
        "id": 367,
        "question": "Which qualitative method uses structured coding to analyze data?",
        "options": [
            "Thematic analysis",
            "Framework analysis",
            "Narrative analysis",
            "Grounded theory"
        ],
        "answer": "Framework analysis",
        "difficulty": "medium",
        "topic": "Data Analysis",
        "explanation": "Framework analysis uses a structured coding framework to organize qualitative data."
    },
    {
        "id": 368,
        "question": "Which validity type ensures a measure covers all relevant aspects?",
        "options": [
            "Construct validity",
            "Content validity",
            "Internal validity",
            "External validity"
        ],
        "answer": "Content validity",
        "difficulty": "medium",
        "topic": "Validity, Reliability, and Trustworthiness",
        "explanation": "Content validity ensures a measure includes all relevant aspects of the concept."
    },
    {
        "id": 369,
        "question": "Which section of a research report presents study procedures?",
        "options": [
            "Introduction",
            "Methodology",
            "Results",
            "Discussion"
        ],
        "answer": "Methodology",
        "difficulty": "easy",
        "topic": "Writing and Presenting Research",
        "explanation": "The methodology section describes the study’s procedures, design, and data collection methods."
    },
    {
        "id": 370,
        "question": "What is a key feature of a meta-analysis?",
        "options": [
            "Qualitative synthesis",
            "Statistical combination of study results",
            "Single-case focus",
            "No inclusion criteria"
        ],
        "answer": "Statistical combination of study results",
        "difficulty": "medium",
        "topic": "Advanced/Contemporary Topics",
        "explanation": "Meta-analysis statistically combines results from multiple studies to estimate overall effects."
    },
    {
        "id": 371,
        "question": "What is a characteristic of a good research objective?",
        "options": [
            "It is vague",
            "It is specific and measurable",
            "It is unrelated to the problem",
            "It is overly complex"
        ],
        "answer": "It is specific and measurable",
        "difficulty": "easy",
        "topic": "Research Problem & Hypothesis",
        "explanation": "Good research objectives are specific, measurable, and aligned with the research problem."
    },
    {
        "id": 372,
        "question": "Which variable explains the relationship between independent and dependent variables?",
        "options": [
            "Control variable",
            "Mediating variable",
            "Extraneous variable",
            "Dependent variable"
        ],
        "answer": "Mediating variable",
        "difficulty": "hard",
        "topic": "Research Problem & Hypothesis",
        "explanation": "A mediating variable explains how the independent variable affects the dependent variable."
    },
    {
        "id": 373,
        "question": "Which source provides summarized interpretations of primary data?",
        "options": [
            "Primary sources",
            "Secondary sources",
            "Tertiary sources",
            "Raw data"
        ],
        "answer": "Secondary sources",
        "difficulty": "easy",
        "topic": "Literature Review",
        "explanation": "Secondary sources, like review articles, interpret or summarize primary data."
    },
    {
        "id": 374,
        "question": "Which research design is best for hypothesis testing?",
        "options": [
            "Descriptive design",
            "Correlational design",
            "Experimental design",
            "Case study design"
        ],
        "answer": "Experimental design",
        "difficulty": "easy",
        "topic": "Research Design",
        "explanation": "Experimental designs test hypotheses by manipulating variables and controlling conditions."
    },
    {
        "id": 375,
        "question": "Which sampling method ensures proportional subgroup representation?",
        "options": [
            "Simple random sampling",
            "Stratified sampling",
            "Cluster sampling",
            "Convenience sampling"
        ],
        "answer": "Stratified sampling",
        "difficulty": "medium",
        "topic": "Sampling Methods",
        "explanation": "Stratified sampling divides the population into strata and samples proportionally from each."
    },
    {
        "id": 376,
        "question": "Which data collection method is best for exploring in-depth perspectives?",
        "options": [
            "Surveys",
            "Interviews",
            "Focus groups",
            "Observations"
        ],
        "answer": "Interviews",
        "difficulty": "easy",
        "topic": "Data Collection Methods",
        "explanation": "Interviews allow for in-depth exploration of individual perspectives."
    },
    {
        "id": 377,
        "question": "Which statistical test compares non-parametric data across multiple groups?",
        "options": [
            "T-test",
            "ANOVA",
            "Kruskal-Wallis test",
            "Chi-square test"
        ],
        "answer": "Kruskal-Wallis test",
        "difficulty": "hard",
        "topic": "Data Analysis",
        "explanation": "The Kruskal-Wallis test compares non-parametric data across three or more groups."
    },
    {
        "id": 378,
        "question": "Which qualitative method examines personal stories?",
        "options": [
            "Thematic analysis",
            "Content analysis",
            "Narrative analysis",
            "Framework analysis"
        ],
        "answer": "Narrative analysis",
        "difficulty": "medium",
        "topic": "Data Analysis",
        "explanation": "Narrative analysis interprets personal stories to understand experiences."
    },
    {
        "id": 379,
        "question": "Which reliability measure uses parallel test forms?",
        "options": [
            "Test-retest reliability",
            "Inter-rater reliability",
            "Internal consistency",
            "Parallel forms reliability"
        ],
        "answer": "Parallel forms reliability",
        "difficulty": "medium",
        "topic": "Validity, Reliability, and Trustworthiness",
        "explanation": "Parallel forms reliability compares different versions of a test to ensure consistency."
    },
    {
        "id": 380,
        "question": "What is a key component of a research thesis?",
        "options": [
            "Raw data only",
            "Structured chapters",
            "No references",
            "Single-page summary"
        ],
        "answer": "Structured chapters",
        "difficulty": "easy",
        "topic": "Writing and Presenting Research",
        "explanation": "A thesis includes structured chapters like introduction, methodology, and discussion."
    },
    {
        "id": 381,
        "question": "Which ethical consideration ensures participants understand the study?",
        "options": [
            "Confidentiality",
            "Informed consent",
            "Beneficence",
            "Justice"
        ],
        "answer": "Informed consent",
        "difficulty": "easy",
        "topic": "Foundations of Research",
        "explanation": "Informed consent ensures participants understand the study’s purpose and procedures."
    },
    {
        "id": 382,
        "question": "What is a directional hypothesis?",
        "options": [
            "It states no effect",
            "It predicts a specific direction",
            "It describes the sample",
            "It confirms the null hypothesis"
        ],
        "answer": "It predicts a specific direction",
        "difficulty": "medium",
        "topic": "Research Problem & Hypothesis",
        "explanation": "A directional hypothesis predicts the specific direction of a relationship or effect."
    },
    {
        "id": 383,
        "question": "Which source is considered primary?",
        "options": [
            "Textbooks",
            "Review articles",
            "Original research articles",
            "Encyclopedias"
        ],
        "answer": "Original research articles",
        "difficulty": "easy",
        "topic": "Literature Review",
        "explanation": "Primary sources provide original data or firsthand accounts, such as research articles."
    },
    {
        "id": 384,
        "question": "Which research design observes phenomena without intervention?",
        "options": [
            "Experimental design",
            "Quasi-experimental design",
            "Observational design",
            "Mixed-methods design"
        ],
        "answer": "Observational design",
        "difficulty": "easy",
        "topic": "Research Design",
        "explanation": "Observational designs study phenomena as they occur naturally, without manipulation."
    },
    {
        "id": 385,
        "question": "Which sampling method is most cost-effective for large populations?",
        "options": [
            "Simple random sampling",
            "Stratified sampling",
            "Cluster sampling",
            "Purposive sampling"
        ],
        "answer": "Cluster sampling",
        "difficulty": "medium",
        "topic": "Sampling Methods",
        "explanation": "Cluster sampling reduces costs by sampling entire groups rather than individuals."
    },
    {
        "id": 386,
        "question": "Which data collection method analyzes existing texts?",
        "options": [
            "Surveys",
            "Interviews",
            "Document analysis",
            "Focus groups"
        ],
        "answer": "Document analysis",
        "difficulty": "easy",
        "topic": "Data Collection Methods",
        "explanation": "Document analysis examines existing texts or records to extract data."
    },
    {
        "id": 387,
        "question": "Which statistical test assesses relationships between continuous variables?",
        "options": [
            "T-test",
            "ANOVA",
            "Correlation",
            "Chi-square test"
        ],
        "answer": "Correlation",
        "difficulty": "medium",
        "topic": "Data Analysis",
        "explanation": "Correlation tests measure the strength and direction of relationships between continuous variables."
    },
    {
        "id": 388,
        "question": "Which qualitative method develops theories from data?",
        "options": [
            "Thematic analysis",
            "Content analysis",
            "Grounded theory",
            "Framework analysis"
        ],
        "answer": "Grounded theory",
        "difficulty": "medium",
        "topic": "Data Analysis",
        "explanation": "Grounded theory builds theories through iterative coding of qualitative data."
    },
    {
        "id": 389,
        "question": "Which validity type compares a measure to a standard?",
        "options": [
            "Content validity",
            "Construct validity",
            "Criterion validity",
            "Internal validity"
        ],
        "answer": "Criterion validity",
        "difficulty": "medium",
        "topic": "Validity, Reliability, and Trustworthiness",
        "explanation": "Criterion validity assesses how well a measure correlates with an established standard."
    },
    {
        "id": 390,
        "question": "What is the purpose of a research report’s results section?",
        "options": [
            "To interpret findings",
            "To present raw data",
            "To describe methods",
            "To list references"
        ],
        "answer": "To present raw data",
        "difficulty": "easy",
        "topic": "Writing and Presenting Research",
        "explanation": "The results section presents raw findings without interpretation."
    },
    {
        "id": 391,
        "question": "What is a characteristic of artificial intelligence in research?",
        "options": [
            "Eliminating all data",
            "Enhancing data analysis",
            "Reducing sample sizes",
            "Simplifying hypotheses"
        ],
        "answer": "Enhancing data analysis",
        "difficulty": "medium",
        "topic": "Advanced/Contemporary Topics",
        "explanation": "AI enhances research by automating complex data analysis and pattern detection."
    },
    {
        "id": 392,
        "question": "What is a suitable research question for quantitative studies?",
        "options": [
            "How do participants feel?",
            "What is the relationship between variables?",
            "What are the lived experiences?",
            "How do participants interpret events?"
        ],
        "answer": "What is the relationship between variables?",
        "difficulty": "easy",
        "topic": "Research Problem & Hypothesis",
        "explanation": "Quantitative research questions focus on measurable relationships or effects."
    },
    {
        "id": 393,
        "question": "What is a narrative review’s characteristic?",
        "options": [
            "Strict protocol",
            "Qualitative literature synthesis",
            "Statistical analysis",
            "Single-study focus"
        ],
        "answer": "Qualitative literature synthesis",
        "difficulty": "medium",
        "topic": "Literature Review",
        "explanation": "Narrative reviews provide a qualitative overview of literature without a strict protocol."
    },
    {
        "id": 394,
        "question": "Which research design tracks groups without manipulation?",
        "options": [
            "Experimental design",
            "Cohort design",
            "Case study design",
            "Quasi-experimental design"
        ],
        "answer": "Cohort design",
        "difficulty": "medium",
        "topic": "Research Design",
        "explanation": "Cohort designs follow groups over time without manipulating variables."
    },
    {
        "id": 395,
        "question": "Which sampling method selects participants based on specific traits?",
        "options": [
            "Simple random sampling",
            "Stratified sampling",
            "Purposive sampling",
            "Cluster sampling"
        ],
        "answer": "Purposive sampling",
        "difficulty": "medium",
        "topic": "Sampling Methods",
        "explanation": "Purposive sampling selects participants based on specific characteristics relevant to the study."
    },
    {
        "id": 396,
        "question": "Which data collection method is best for standardized data collection?",
        "options": [
            "Unstructured interviews",
            "Surveys",
            "Focus groups",
            "Participant observation"
        ],
        "answer": "Surveys",
        "difficulty": "easy",
        "topic": "Data Collection Methods",
        "explanation": "Surveys use standardized questions to ensure consistent data collection."
    },
    {
        "id": 397,
        "question": "Which statistical test is used for paired parametric data?",
        "options": [
            "Independent t-test",
            "Paired t-test",
            "ANOVA",
            "Chi-square test"
        ],
        "answer": "Paired t-test",
        "difficulty": "medium",
        "topic": "Data Analysis",
        "explanation": "The paired t-test compares means for paired parametric data."
    },
    {
        "id": 398,
        "question": "Which qualitative method quantifies patterns in texts?",
        "options": [
            "Thematic analysis",
            "Content analysis",
            "Narrative analysis",
            "Grounded theory"
        ],
        "answer": "Content analysis",
        "difficulty": "medium",
        "topic": "Data Analysis",
        "explanation": "Content analysis quantifies patterns in texts or media using coding."
    },
    {
        "id": 399,
        "question": "Which reliability measure assesses test consistency over time?",
        "options": [
            "Inter-rater reliability",
            "Test-retest reliability",
            "Internal consistency",
            "Parallel forms reliability"
        ],
        "answer": "Test-retest reliability",
        "difficulty": "medium",
        "topic": "Validity, Reliability, and Trustworthiness",
        "explanation": "Test-retest reliability measures consistency when a test is repeated over time."
    },
    {
        "id": 400,
        "question": "What is a key benefit of community-based research?",
        "options": [
            "Excluding community input",
            "Addressing local needs",
            "Reducing data quality",
            "Simplifying analysis"
        ],
        "answer": "Addressing local needs",
        "difficulty": "medium",
        "topic": "Advanced/Contemporary Topics",
        "explanation": "Community-based research collaborates with communities to address their specific needs."
    },
    {
        "id": 401,
        "question": "What is the primary aim of applied research?",
        "options": [
            "To advance theoretical knowledge",
            "To solve practical problems",
            "To explore new phenomena",
            "To describe existing conditions"
        ],
        "answer": "To solve practical problems",
        "difficulty": "easy",
        "topic": "Foundations of Research",
        "explanation": "Applied research focuses on addressing practical issues with direct real-world applications."
    },
    {
        "id": 402,
        "question": "Which feature of scientific research ensures objectivity?",
        "options": [
            "Personal bias",
            "Systematic observation",
            "Subjective interpretation",
            "Non-replicable methods"
        ],
        "answer": "Systematic observation",
        "difficulty": "easy",
        "topic": "Foundations of Research",
        "explanation": "Systematic observation minimizes bias and ensures objective data collection."
    },
    {
        "id": 403,
        "question": "Which research paradigm combines multiple methods to achieve practical outcomes?",
        "options": [
            "Positivism",
            "Interpretivism",
            "Pragmatism",
            "Critical theory"
        ],
        "answer": "Pragmatism",
        "difficulty": "medium",
        "topic": "Foundations of Research",
        "explanation": "Pragmatism uses methods that best suit the research problem, prioritizing practical results."
    },
    {
        "id": 404,
        "question": "What does axiology address in research?",
        "options": [
            "The nature of reality",
            "The role of values",
            "The validity of knowledge",
            "The research design"
        ],
        "answer": "The role of values",
        "difficulty": "medium",
        "topic": "Foundations of Research",
        "explanation": "Axiology examines the influence of values on research processes and outcomes."
    },
    {
        "id": 405,
        "question": "Which ethical principle requires fair distribution of research benefits?",
        "options": [
            "Beneficence",
            "Justice",
            "Confidentiality",
            "Informed consent"
        ],
        "answer": "Justice",
        "difficulty": "easy",
        "topic": "Foundations of Research",
        "explanation": "Justice ensures equitable distribution of research benefits and burdens."
    },
    {
        "id": 406,
        "question": "What is a hallmark of descriptive research?",
        "options": [
            "Establishing causality",
            "Describing characteristics",
            "Generating hypotheses",
            "Testing interventions"
        ],
        "answer": "Describing characteristics",
        "difficulty": "easy",
        "topic": "Foundations of Research",
        "explanation": "Descriptive research focuses on documenting phenomena without explaining causes."
    },
    {
        "id": 407,
        "question": "What makes a research problem relevant?",
        "options": [
            "It is overly complex",
            "It addresses current needs",
            "It lacks focus",
            "It is unrelated to resources"
        ],
        "answer": "It addresses current needs",
        "difficulty": "easy",
        "topic": "Research Problem & Hypothesis",
        "explanation": "A relevant research problem addresses current issues or needs in the field."
    },
    {
        "id": 408,
        "question": "What is a non-directional hypothesis?",
        "options": [
            "Predicts a specific direction",
            "States a relationship without direction",
            "Rejects the null hypothesis",
            "Describes the population"
        ],
        "answer": "States a relationship without direction",
        "difficulty": "medium",
        "topic": "Research Problem & Hypothesis",
        "explanation": "A non-directional hypothesis predicts a relationship but does not specify its direction."
    },
    {
        "id": 409,
        "question": "Which variable influences the dependent variable unintentionally?",
        "options": [
            "Independent variable",
            "Control variable",
            "Confounding variable",
            "Mediating variable"
        ],
        "answer": "Confounding variable",
        "difficulty": "medium",
        "topic": "Research Problem & Hypothesis",
        "explanation": "Confounding variables unintentionally affect the dependent variable, complicating causal inference."
    },
    {
        "id": 410,
        "question": "What is a research hypothesis?",
        "options": [
            "A statement of no effect",
            "A testable prediction",
            "A summary of findings",
            "A data collection method"
        ],
        "answer": "A testable prediction",
        "difficulty": "easy",
        "topic": "Research Problem & Hypothesis",
        "explanation": "A research hypothesis is a testable prediction about the relationship between variables."
    },
    {
        "id": 411,
        "question": "What is a key purpose of a narrative literature review?",
        "options": [
            "To conduct statistical analysis",
            "To provide a qualitative overview",
            "To focus on a single study",
            "To avoid primary sources"
        ],
        "answer": "To provide a qualitative overview",
        "difficulty": "medium",
        "topic": "Literature Review",
        "explanation": "Narrative reviews synthesize literature qualitatively to provide an overview of a topic."
    },
    {
        "id": 412,
        "question": "Which type of source offers original data?",
        "options": [
            "Tertiary sources",
            "Secondary sources",
            "Primary sources",
            "Summaries"
        ],
        "answer": "Primary sources",
        "difficulty": "easy",
        "topic": "Literature Review",
        "explanation": "Primary sources provide original data or firsthand accounts, such as research studies."
    },
    {
        "id": 413,
        "question": "Which citation style is prevalent in social sciences?",
        "options": [
            "MLA",
            "APA",
            "Vancouver",
            "IEEE"
        ],
        "answer": "APA",
        "difficulty": "medium",
        "topic": "Literature Review",
        "explanation": "APA style is widely used in social sciences for its author-date citation format."
    },
    {
        "id": 414,
        "question": "What does a research gap indicate?",
        "options": [
            "A completed study",
            "An unexplored area in literature",
            "A statistical error",
            "A sampling method"
        ],
        "answer": "An unexplored area in literature",
        "difficulty": "easy",
        "topic": "Literature Review",
        "explanation": "A research gap is an area where existing literature lacks sufficient answers."
    },
    {
        "id": 415,
        "question": "What is a theoretical framework used for?",
        "options": [
            "To collect data",
            "To guide research interpretation",
            "To summarize findings",
            "To recruit participants"
        ],
        "answer": "To guide research interpretation",
        "difficulty": "medium",
        "topic": "Literature Review",
        "explanation": "A theoretical framework provides a lens to interpret research findings."
    },
    {
        "id": 416,
        "question": "Which research design is best for exploring relationships without manipulation?",
        "options": [
            "Experimental design",
            "Correlational design",
            "Descriptive design",
            "Case study design"
        ],
        "answer": "Correlational design",
        "difficulty": "easy",
        "topic": "Research Design",
        "explanation": "Correlational designs examine relationships between variables without manipulation."
    },
    {
        "id": 417,
        "question": "What is a defining characteristic of a longitudinal design?",
        "options": [
            "Single time-point data",
            "Data collection over time",
            "Random assignment",
            "No control group"
        ],
        "answer": "Data collection over time",
        "difficulty": "easy",
        "topic": "Research Design",
        "explanation": "Longitudinal designs collect data from the same participants over an extended period."
    },
    {
        "id": 418,
        "question": "Which research design addresses practical issues through collaboration?",
        "options": [
            "Experimental design",
            "Action research",
            "Cross-sectional design",
            "Cohort design"
        ],
        "answer": "Action research",
        "difficulty": "medium",
        "topic": "Research Design",
        "explanation": "Action research collaborates with stakeholders to solve practical problems."
    },
    {
        "id": 419,
        "question": "What is a limitation of a case study design?",
        "options": [
            "High generalizability",
            "In-depth analysis",
            "Limited generalizability",
            "Random assignment"
        ],
        "answer": "Limited generalizability",
        "difficulty": "medium",
        "topic": "Research Design",
        "explanation": "Case studies provide in-depth insights but are often not generalizable to larger populations."
    },
    {
        "id": 420,
        "question": "What is essential for a robust research design?",
        "options": [
            "Ignoring variables",
            "Clear research objectives",
            "Small sample sizes",
            "No data collection plan"
        ],
        "answer": "Clear research objectives",
        "difficulty": "easy",
        "topic": "Research Design",
        "explanation": "Clear research objectives guide the design and ensure the study addresses its goals."
    },
    {
        "id": 421,
        "question": "Which sampling method selects every nth individual from a list?",
        "options": [
            "Simple random sampling",
            "Systematic sampling",
            "Stratified sampling",
            "Cluster sampling"
        ],
        "answer": "Systematic sampling",
        "difficulty": "easy",
        "topic": "Sampling Methods",
        "explanation": "Systematic sampling selects every nth individual after a random starting point."
    },
    {
        "id": 422,
        "question": "Which non-probability sampling method targets specific participant traits?",
        "options": [
            "Convenience sampling",
            "Quota sampling",
            "Purposive sampling",
            "Snowball sampling"
        ],
        "answer": "Purposive sampling",
        "difficulty": "medium",
        "topic": "Sampling Methods",
        "explanation": "Purposive sampling selects participants based on specific characteristics relevant to the study."
    },
    {
        "id": 423,
        "question": "What is a drawback of snowball sampling?",
        "options": [
            "High representativeness",
            "Potential for bias",
            "Random selection",
            "Large sample sizes"
        ],
        "answer": "Potential for bias",
        "difficulty": "medium",
        "topic": "Sampling Methods",
        "explanation": "Snowball sampling relies on referrals, which can introduce bias and limit representativeness."
    },
    {
        "id": 424,
        "question": "What causes non-sampling error?",
        "options": [
            "Random selection",
            "Measurement inaccuracies",
            "Large sample sizes",
            "Probability sampling"
        ],
        "answer": "Measurement inaccuracies",
        "difficulty": "medium",
        "topic": "Sampling Methods",
        "explanation": "Non-sampling errors arise from issues like measurement errors or data collection flaws."
    },
    {
        "id": 425,
        "question": "What factor affects the precision of sample estimates?",
        "options": [
            "Sample size",
            "Publication goals",
            "Researcher experience",
            "Data collection method"
        ],
        "answer": "Sample size",
        "difficulty": "medium",
        "topic": "Sampling Methods",
        "explanation": "Larger sample sizes generally increase the precision of population estimates."
    },
    {
        "id": 426,
        "question": "Which data collection method examines historical records?",
        "options": [
            "Surveys",
            "Interviews",
            "Archival research",
            "Experiments"
        ],
        "answer": "Archival research",
        "difficulty": "easy",
        "topic": "Data Collection Methods",
        "explanation": "Archival research analyzes historical records or existing documents."
    },
    {
        "id": 427,
        "question": "What is a feature of structured interviews?",
        "options": [
            "Open-ended questions",
            "Standardized questions",
            "Flexible format",
            "No predetermined guide"
        ],
        "answer": "Standardized questions",
        "difficulty": "medium",
        "topic": "Data Collection Methods",
        "explanation": "Structured interviews use standardized questions to ensure consistency across participants."
    },
    {
        "id": 428,
        "question": "Which method is best for collecting quantitative data in controlled settings?",
        "options": [
            "Focus groups",
            "Observations",
            "Experiments",
            "Interviews"
        ],
        "answer": "Experiments",
        "difficulty": "easy",
        "topic": "Data Collection Methods",
        "explanation": "Experiments collect quantitative data by manipulating variables in controlled environments."
    },
    {
        "id": 429,
        "question": "What is the role of a pre-test in data collection?",
        "options": [
            "To publish results",
            "To refine instruments",
            "To recruit participants",
            "To analyze data"
        ],
        "answer": "To refine instruments",
        "difficulty": "easy",
        "topic": "Data Collection Methods",
        "explanation": "A pre-test refines data collection instruments by identifying issues before the main study."
    },
    {
        "id": 430,
        "question": "Which method is ideal for capturing real-time behaviors?",
        "options": [
            "Surveys",
            "Interviews",
            "Observations",
            "Document analysis"
        ],
        "answer": "Observations",
        "difficulty": "easy",
        "topic": "Data Collection Methods",
        "explanation": "Observations capture behaviors as they occur in real-time settings."
    },
    {
        "id": 431,
        "question": "Which descriptive statistic measures data variability?",
        "options": [
            "Mean",
            "Median",
            "Mode",
            "Standard deviation"
        ],
        "answer": "Standard deviation",
        "difficulty": "easy",
        "topic": "Data Analysis",
        "explanation": "Standard deviation measures how spread out data points are from the mean."
    },
    {
        "id": 432,
        "question": "Which inferential test compares paired non-parametric data?",
        "options": [
            "T-test",
            "Wilcoxon signed-rank test",
            "ANOVA",
            "Chi-square test"
        ],
        "answer": "Wilcoxon signed-rank test",
        "difficulty": "hard",
        "topic": "Data Analysis",
        "explanation": "The Wilcoxon signed-rank test compares paired non-parametric data."
    },
    {
        "id": 433,
        "question": "What does a high p-value (e.g., 0.3) suggest?",
        "options": [
            "Strong evidence against the null hypothesis",
            "Weak evidence against the null hypothesis",
            "The null hypothesis is true",
            "The effect size is large"
        ],
        "answer": "Weak evidence against the null hypothesis",
        "difficulty": "medium",
        "topic": "Data Analysis",
        "explanation": "A high p-value indicates insufficient evidence to reject the null hypothesis."
    },
    {
        "id": 434,
        "question": "Which qualitative analysis method builds theory iteratively?",
        "options": [
            "Thematic analysis",
            "Content analysis",
            "Grounded theory",
            "Narrative analysis"
        ],
        "answer": "Grounded theory",
        "difficulty": "medium",
        "topic": "Data Analysis",
        "explanation": "Grounded theory develops theories through iterative coding and data analysis."
    },
    {
        "id": 435,
        "question": "Which software is used for quantitative data analysis?",
        "options": [
            "NVivo",
            "SPSS",
            "MAXQDA",
            "Atlas.ti"
        ],
        "answer": "SPSS",
        "difficulty": "easy",
        "topic": "Data Analysis",
        "explanation": "SPSS is widely used for statistical analysis of quantitative data."
    },
    {
        "id": 436,
        "question": "Which validity type ensures causal relationships within a study?",
        "options": [
            "External validity",
            "Internal validity",
            "Construct validity",
            "Content validity"
        ],
        "answer": "Internal validity",
        "difficulty": "medium",
        "topic": "Validity, Reliability, and Trustworthiness",
        "explanation": "Internal validity ensures that observed effects are due to the independent variable."
    },
    {
        "id": 437,
        "question": "Which reliability measure uses Cronbach’s alpha?",
        "options": [
            "Test-retest reliability",
            "Inter-rater reliability",
            "Internal consistency",
            "Parallel forms reliability"
        ],
        "answer": "Internal consistency",
        "difficulty": "medium",
        "topic": "Validity, Reliability, and Trustworthiness",
        "explanation": "Cronbach’s alpha assesses the internal consistency of test items."
    },
    {
        "id": 438,
        "question": "What is credibility in qualitative research?",
        "options": [
            "Generalizability of findings",
            "Accuracy of participant perspectives",
            "Consistency of methods",
            "Objectivity of results"
        ],
        "answer": "Accuracy of participant perspectives",
        "difficulty": "medium",
        "topic": "Validity, Reliability, and Trustworthiness",
        "explanation": "Credibility ensures qualitative findings accurately reflect participants’ views."
    },
    {
        "id": 439,
        "question": "Which trustworthiness criterion ensures an audit trail?",
        "options": [
            "Credibility",
            "Dependability",
            "Confirmability",
            "Transferability"
        ],
        "answer": "Dependability",
        "difficulty": "medium",
        "topic": "Validity, Reliability, and Trustworthiness",
        "explanation": "Dependability ensures consistent processes, often through an audit trail."
    },
    {
        "id": 440,
        "question": "What is the purpose of a research proposal’s literature review?",
        "options": [
            "To present results",
            "To contextualize the study",
            "To analyze data",
            "To list methods"
        ],
        "answer": "To contextualize the study",
        "difficulty": "easy",
        "topic": "Writing and Presenting Research",
        "explanation": "The literature review in a proposal contextualizes the study within existing research."
    },
    {
        "id": 441,
        "question": "Which section of a research report interprets results?",
        "options": [
            "Introduction",
            "Methodology",
            "Results",
            "Discussion"
        ],
        "answer": "Discussion",
        "difficulty": "easy",
        "topic": "Writing and Presenting Research",
        "explanation": "The discussion section interprets results and relates them to prior research."
    },
    {
        "id": 442,
        "question": "What is a strategy to ensure proper attribution in research?",
        "options": [
            "Paraphrasing without citation",
            "Using citations and references",
            "Copying text directly",
            "Omitting sources"
        ],
        "answer": "Using citations and references",
        "difficulty": "easy",
        "topic": "Writing and Presenting Research",
        "explanation": "Citations and references credit original authors, ensuring proper attribution."
    },
    {
        "id": 443,
        "question": "Which visual aid is best for showing trends over time?",
        "options": [
            "Bar graph",
            "Pie chart",
            "Line graph",
            "Scatter plot"
        ],
        "answer": "Line graph",
        "difficulty": "easy",
        "topic": "Writing and Presenting Research",
        "explanation": "Line graphs effectively display trends or changes over time."
    },
    {
        "id": 444,
        "question": "What is a key step in preparing a poster presentation?",
        "options": [
            "Using complex jargon",
            "Ensuring clear visuals",
            "Excluding data",
            "Ignoring audience needs"
        ],
        "answer": "Ensuring clear visuals",
        "difficulty": "medium",
        "topic": "Writing and Presenting Research",
        "explanation": "Clear visuals enhance the effectiveness of a poster presentation."
    },
    {
        "id": 445,
        "question": "What is the goal of a meta-analysis?",
        "options": [
            "To conduct primary research",
            "To statistically combine study results",
            "To explore qualitative data",
            "To design new experiments"
        ],
        "answer": "To statistically combine study results",
        "difficulty": "medium",
        "topic": "Advanced/Contemporary Topics",
        "explanation": "Meta-analysis combines quantitative results from multiple studies to estimate overall effects."
    },
    {
        "id": 446,
        "question": "What does member checking enhance in qualitative research?",
        "options": [
            "Sample size",
            "Credibility",
            "Statistical power",
            "Data collection speed"
        ],
        "answer": "Credibility",
        "difficulty": "medium",
        "topic": "Advanced/Contemporary Topics",
        "explanation": "Member checking involves participants verifying findings to enhance credibility."
    },
    {
        "id": 447,
        "question": "What is the purpose of a Research Ethics Board (REB)?",
        "options": [
            "To analyze data",
            "To protect participant rights",
            "To fund studies",
            "To publish findings"
        ],
        "answer": "To protect participant rights",
        "difficulty": "easy",
        "topic": "Advanced/Contemporary Topics",
        "explanation": "REBs ensure studies adhere to ethical standards to protect participants."
    },
    {
        "id": 448,
        "question": "What characterizes action research?",
        "options": [
            "Exclusion of stakeholders",
            "Practical problem-solving",
            "Focus on theoretical models",
            "Use of large random samples"
        ],
        "answer": "Practical problem-solving",
        "difficulty": "medium",
        "topic": "Advanced/Contemporary Topics",
        "explanation": "Action research focuses on solving practical problems through collaborative efforts."
    },
    {
        "id": 449,
        "question": "How does machine learning benefit research?",
        "options": [
            "Eliminating data",
            "Predicting patterns in data",
            "Reducing sample sizes",
            "Simplifying hypotheses"
        ],
        "answer": "Predicting patterns in data",
        "difficulty": "medium",
        "topic": "Advanced/Contemporary Topics",
        "explanation": "Machine learning identifies and predicts patterns in large datasets."
    },
    {
        "id": 450,
        "question": "What is a principle of reproducible research?",
        "options": [
            "Hiding data",
            "Transparent methodology",
            "Avoiding documentation",
            "Limiting access"
        ],
        "answer": "Transparent methodology",
        "difficulty": "easy",
        "topic": "Advanced/Contemporary Topics",
        "explanation": "Transparent methodology allows others to replicate and verify research findings."
    },
    {
        "id": 451,
        "question": "Which type of research tests existing theories?",
        "options": [
            "Exploratory research",
            "Descriptive research",
            "Explanatory research",
            "Applied research"
        ],
        "answer": "Explanatory research",
        "difficulty": "easy",
        "topic": "Foundations of Research",
        "explanation": "Explanatory research tests theories to understand causal relationships."
    },
    {
        "id": 452,
        "question": "Which paradigm assumes a single objective reality?",
        "options": [
            "Interpretivism",
            "Positivism",
            "Critical theory",
            "Pragmatism"
        ],
        "answer": "Positivism",
        "difficulty": "medium",
        "topic": "Foundations of Research",
        "explanation": "Positivism assumes a single, objective reality that can be measured."
    },
    {
        "id": 453,
        "question": "Which ethical principle minimizes participant harm?",
        "options": [
            "Justice",
            "Beneficence",
            "Confidentiality",
            "Voluntary participation"
        ],
        "answer": "Beneficence",
        "difficulty": "easy",
        "topic": "Foundations of Research",
        "explanation": "Beneficence requires researchers to minimize harm and maximize benefits."
    },
    {
        "id": 454,
        "question": "What is a feasible research problem?",
        "options": [
            "It is overly vague",
            "It can be studied with available resources",
            "It lacks significance",
            "It is unrelated to literature"
        ],
        "answer": "It can be studied with available resources",
        "difficulty": "easy",
        "topic": "Research Problem & Hypothesis",
        "explanation": "A feasible research problem can be investigated within the researcher’s resources."
    },
    {
        "id": 455,
        "question": "What is the role of a research objective?",
        "options": [
            "To summarize results",
            "To guide the study’s focus",
            "To analyze data",
            "To recruit participants"
        ],
        "answer": "To guide the study’s focus",
        "difficulty": "easy",
        "topic": "Research Problem & Hypothesis",
        "explanation": "Research objectives provide specific goals to direct the study."
    },
    {
        "id": 456,
        "question": "Which variable explains how an effect occurs?",
        "options": [
            "Control variable",
            "Mediating variable",
            "Extraneous variable",
            "Independent variable"
        ],
        "answer": "Mediating variable",
        "difficulty": "hard",
        "topic": "Research Problem & Hypothesis",
        "explanation": "Mediating variables explain the mechanism of the relationship between variables."
    },
    {
        "id": 457,
        "question": "What is an integrative review in literature?",
        "options": [
            "A statistical synthesis",
            "A combination of diverse methodologies",
            "A single-study focus",
            "A meta-analysis"
        ],
        "answer": "A combination of diverse methodologies",
        "difficulty": "medium",
        "topic": "Literature Review",
        "explanation": "Integrative reviews synthesize diverse research methodologies to provide a comprehensive overview."
    },
    {
        "id": 458,
        "question": "Which citation style uses footnotes for references?",
        "options": [
            "APA",
            "MLA",
            "Chicago Notes",
            "Vancouver"
        ],
        "answer": "Chicago Notes",
        "difficulty": "medium",
        "topic": "Literature Review",
        "explanation": "Chicago Notes style uses footnotes or endnotes for citations."
    },
    {
        "id": 459,
        "question": "What is a conceptual framework’s role?",
        "options": [
            "To analyze data",
            "To define key concepts",
            "To publish results",
            "To recruit participants"
        ],
        "answer": "To define key concepts",
        "difficulty": "medium",
        "topic": "Literature Review",
        "explanation": "A conceptual framework defines key concepts and their relationships to guide the study."
    },
    {
        "id": 460,
        "question": "Which research design is best for a single in-depth analysis?",
        "options": [
            "Longitudinal design",
            "Case study design",
            "Experimental design",
            "Cross-sectional design"
        ],
        "answer": "Case study design",
        "difficulty": "easy",
        "topic": "Research Design",
        "explanation": "Case study designs provide detailed analysis of a single case or event."
    },
    {
        "id": 461,
        "question": "What is a limitation of pre-experimental designs?",
        "options": [
            "High control over variables",
            "Lack of a control group",
            "Random assignment",
            "Generalizable results"
        ],
        "answer": "Lack of a control group",
        "difficulty": "medium",
        "topic": "Research Design",
        "explanation": "Pre-experimental designs often lack control groups, limiting causal inference."
    },
    {
        "id": 462,
        "question": "Which sampling method divides the population into subgroups?",
        "options": [
            "Cluster sampling",
            "Systematic sampling",
            "Stratified sampling",
            "Convenience sampling"
        ],
        "answer": "Stratified sampling",
        "difficulty": "easy",
        "topic": "Sampling Methods",
        "explanation": "Stratified sampling divides the population into subgroups and samples from each."
    },
    {
        "id": 463,
        "question": "Which non-probability sampling method uses predefined quotas?",
        "options": [
            "Purposive sampling",
            "Snowball sampling",
            "Quota sampling",
            "Convenience sampling"
        ],
        "answer": "Quota sampling",
        "difficulty": "medium",
        "topic": "Sampling Methods",
        "explanation": "Quota sampling selects participants based on predefined subgroup quotas."
    },
    {
        "id": 464,
        "question": "Which data collection method involves standardized questions?",
        "options": [
            "Unstructured interviews",
            "Surveys",
            "Focus groups",
            "Observations"
        ],
        "answer": "Surveys",
        "difficulty": "easy",
        "topic": "Data Collection Methods",
        "explanation": "Surveys use standardized questions to collect consistent data."
    },
    {
        "id": 465,
        "question": "What is non-participant observation?",
        "options": [
            "Participating in the group",
            "Observing without interaction",
            "Conducting interviews",
            "Analyzing documents"
        ],
        "answer": "Observing without interaction",
        "difficulty": "medium",
        "topic": "Data Collection Methods",
        "explanation": "Non-participant observation involves observing behaviors without engaging with participants."
    },
    {
        "id": 466,
        "question": "Which inferential test compares means across multiple groups?",
        "options": [
            "T-test",
            "ANOVA",
            "Chi-square test",
            "Correlation"
        ],
        "answer": "ANOVA",
        "difficulty": "medium",
        "topic": "Data Analysis",
        "explanation": "ANOVA compares means across three or more groups."
    },
    {
        "id": 467,
        "question": "Which qualitative method uses predefined codes?",
        "options": [
            "Thematic analysis",
            "Content analysis",
            "Narrative analysis",
            "Grounded theory"
        ],
        "answer": "Content analysis",
        "difficulty": "medium",
        "topic": "Data Analysis",
        "explanation": "Content analysis uses predefined codes to quantify patterns in data."
    },
    {
        "id": 468,
        "question": "Which validity type ensures a measure aligns with its concept?",
        "options": [
            "Content validity",
            "Construct validity",
            "Internal validity",
            "External validity"
        ],
        "answer": "Construct validity",
        "difficulty": "medium",
        "topic": "Validity, Reliability, and Trustworthiness",
        "explanation": "Construct validity ensures a measure accurately reflects the intended concept."
    },
    {
        "id": 469,
        "question": "Which section of a research report outlines study limitations?",
        "options": [
            "Introduction",
            "Methodology",
            "Results",
            "Discussion"
        ],
        "answer": "Discussion",
        "difficulty": "easy",
        "topic": "Writing and Presenting Research",
        "explanation": "The discussion section often addresses study limitations and their implications."
    },
    {
        "id": 470,
        "question": "What is a key feature of a scoping review?",
        "options": [
            "Statistical synthesis",
            "Broad mapping of research",
            "Single-study focus",
            "No inclusion criteria"
        ],
        "answer": "Broad mapping of research",
        "difficulty": "medium",
        "topic": "Advanced/Contemporary Topics",
        "explanation": "Scoping reviews map the extent and nature of research on a topic."
    },
    {
        "id": 471,
        "question": "What is a good research question characterized by?",
        "options": [
            "Vague wording",
            "Clear and focused scope",
            "Irrelevance to literature",
            "Overly broad aims"
        ],
        "answer": "Clear and focused scope",
        "difficulty": "easy",
        "topic": "Research Problem & Hypothesis",
        "explanation": "A good research question is clear, focused, and researchable."
    },
    {
        "id": 472,
        "question": "Which variable is measured as the outcome?",
        "options": [
            "Independent variable",
            "Dependent variable",
            "Control variable",
            "Mediating variable"
        ],
        "answer": "Dependent variable",
        "difficulty": "easy",
        "topic": "Research Problem & Hypothesis",
        "explanation": "The dependent variable is the outcome measured in a study."
    },
    {
        "id": 473,
        "question": "Which source provides an overview of a topic?",
        "options": [
            "Primary sources",
            "Secondary sources",
            "Tertiary sources",
            "Raw data"
        ],
        "answer": "Tertiary sources",
        "difficulty": "easy",
        "topic": "Literature Review",
        "explanation": "Tertiary sources, like encyclopedias, provide summarized overviews of topics."
    },
    {
        "id": 474,
        "question": "Which research design collects data from multiple time points?",
        "options": [
            "Cross-sectional design",
            "Longitudinal design",
            "Case study design",
            "Quasi-experimental design"
        ],
        "answer": "Longitudinal design",
        "difficulty": "easy",
        "topic": "Research Design",
        "explanation": "Longitudinal designs track participants over multiple time points."
    },
    {
        "id": 475,
        "question": "Which sampling method minimizes selection bias?",
        "options": [
            "Convenience sampling",
            "Simple random sampling",
            "Snowball sampling",
            "Quota sampling"
        ],
        "answer": "Simple random sampling",
        "difficulty": "easy",
        "topic": "Sampling Methods",
        "explanation": "Simple random sampling ensures every individual has an equal chance of selection."
    },
    {
        "id": 476,
        "question": "Which data collection method is least intrusive?",
        "options": [
            "Interviews",
            "Surveys",
            "Non-participant observation",
            "Focus groups"
        ],
        "answer": "Non-participant observation",
        "difficulty": "medium",
        "topic": "Data Collection Methods",
        "explanation": "Non-participant observation minimizes intrusion by observing without interaction."
    },
    {
        "id": 477,
        "question": "Which statistical test is used for paired non-parametric data?",
        "options": [
            "T-test",
            "Wilcoxon signed-rank test",
            "ANOVA",
            "Chi-square test"
        ],
        "answer": "Wilcoxon signed-rank test",
        "difficulty": "hard",
        "topic": "Data Analysis",
        "explanation": "The Wilcoxon signed-rank test is used for paired non-parametric data comparisons."
    },
    {
        "id": 478,
        "question": "Which qualitative method organizes data into themes?",
        "options": [
            "Thematic analysis",
            "Content analysis",
            "Narrative analysis",
            "Grounded theory"
        ],
        "answer": "Thematic analysis",
        "difficulty": "medium",
        "topic": "Data Analysis",
        "explanation": "Thematic analysis identifies and organizes data into recurring themes."
    },
    {
        "id": 479,
        "question": "Which validity type correlates a measure with an external standard?",
        "options": [
            "Content validity",
            "Construct validity",
            "Criterion validity",
            "Internal validity"
        ],
        "answer": "Criterion validity",
        "difficulty": "medium",
        "topic": "Validity, Reliability, and Trustworthiness",
        "explanation": "Criterion validity compares a measure to an established external standard."
    },
    {
        "id": 480,
        "question": "What is the purpose of a research abstract?",
        "options": [
            "To detail methods",
            "To summarize the study",
            "To list references",
            "To recruit participants"
        ],
        "answer": "To summarize the study",
        "difficulty": "easy",
        "topic": "Writing and Presenting Research",
        "explanation": "An abstract provides a concise summary of the study’s purpose, methods, and findings."
    },
    {
        "id": 481,
        "question": "Which ethical principle ensures voluntary participation?",
        "options": [
            "Confidentiality",
            "Informed consent",
            "Beneficence",
            "Justice"
        ],
        "answer": "Informed consent",
        "difficulty": "easy",
        "topic": "Foundations of Research",
        "explanation": "Informed consent ensures participants voluntarily agree to participate."
    },
    {
        "id": 482,
        "question": "What is the null hypothesis tested for?",
        "options": [
            "To confirm an effect",
            "To assume no effect",
            "To describe the sample",
            "To predict a direction"
        ],
        "answer": "To assume no effect",
        "difficulty": "medium",
        "topic": "Research Problem & Hypothesis",
        "explanation": "The null hypothesis assumes no effect or relationship for statistical testing."
    },
    {
        "id": 483,
        "question": "Which source interprets primary data?",
        "options": [
            "Primary sources",
            "Secondary sources",
            "Tertiary sources",
            "Raw data"
        ],
        "answer": "Secondary sources",
        "difficulty": "easy",
        "topic": "Literature Review",
        "explanation": "Secondary sources interpret or summarize primary data, such as review articles."
    },
    {
        "id": 484,
        "question": "Which research design lacks variable manipulation?",
        "options": [
            "Experimental design",
            "Quasi-experimental design",
            "Observational design",
            "Mixed-methods design"
        ],
        "answer": "Observational design",
        "difficulty": "easy",
        "topic": "Research Design",
        "explanation": "Observational designs study variables without manipulating them."
    },
    {
        "id": 485,
        "question": "Which sampling method is ideal for geographically dispersed groups?",
        "options": [
            "Simple random sampling",
            "Stratified sampling",
            "Cluster sampling",
            "Convenience sampling"
        ],
        "answer": "Cluster sampling",
        "difficulty": "medium",
        "topic": "Sampling Methods",
        "explanation": "Cluster sampling is efficient for geographically dispersed populations."
    },
    {
        "id": 486,
        "question": "Which data collection method uses group discussions?",
        "options": [
            "Surveys",
            "Interviews",
            "Focus groups",
            "Observations"
        ],
        "answer": "Focus groups",
        "difficulty": "easy",
        "topic": "Data Collection Methods",
        "explanation": "Focus groups involve moderated discussions to gather group insights."
    },
    {
        "id": 487,
        "question": "Which statistical test assesses linear relationships?",
        "options": [
            "T-test",
            "ANOVA",
            "Correlation coefficient",
            "Chi-square test"
        ],
        "answer": "Correlation coefficient",
        "difficulty": "medium",
        "topic": "Data Analysis",
        "explanation": "The correlation coefficient measures linear relationships between variables."
    },
    {
        "id": 488,
        "question": "Which qualitative method interprets personal narratives?",
        "options": [
            "Thematic analysis",
            "Content analysis",
            "Narrative analysis",
            "Grounded theory"
        ],
        "answer": "Narrative analysis",
        "difficulty": "medium",
        "topic": "Data Analysis",
        "explanation": "Narrative analysis interprets personal stories to understand experiences."
    },
    {
        "id": 489,
        "question": "Which reliability measure assesses agreement between raters?",
        "options": [
            "Test-retest reliability",
            "Inter-rater reliability",
            "Internal consistency",
            "Parallel forms reliability"
        ],
        "answer": "Inter-rater reliability",
        "difficulty": "medium",
        "topic": "Validity, Reliability, and Trustworthiness",
        "explanation": "Inter-rater reliability measures consistency between different raters."
    },
    {
        "id": 490,
        "question": "What is a key component of a research proposal?",
        "options": [
            "Final results",
            "Study methodology",
            "Published findings",
            "Raw data"
        ],
        "answer": "Study methodology",
        "difficulty": "easy",
        "topic": "Writing and Presenting Research",
        "explanation": "A research proposal outlines the methodology to address the research question."
    },
    {
        "id": 491,
        "question": "What is a feature of big data research?",
        "options": [
            "Small datasets",
            "High volume and complexity",
            "Manual analysis",
            "Limited variety"
        ],
        "answer": "High volume and complexity",
        "difficulty": "medium",
        "topic": "Advanced/Contemporary Topics",
        "explanation": "Big data involves large, complex datasets requiring advanced analytical tools."
    },
    {
        "id": 492,
        "question": "What is a qualitative research question focused on?",
        "options": [
            "Statistical relationships",
            "Participant experiences",
            "Effect sizes",
            "Correlation coefficients"
        ],
        "answer": "Participant experiences",
        "difficulty": "easy",
        "topic": "Research Problem & Hypothesis",
        "explanation": "Qualitative research questions explore experiences, meanings, or processes."
    },
    {
        "id": 493,
        "question": "What is a systematic review’s key characteristic?",
        "options": [
            "Broad narrative approach",
            "Rigorous protocol",
            "Single-study focus",
            "No data synthesis"
        ],
        "answer": "Rigorous protocol",
        "difficulty": "medium",
        "topic": "Literature Review",
        "explanation": "Systematic reviews use a rigorous protocol to minimize bias in evidence synthesis."
    },
    {
        "id": 494,
        "question": "Which research design follows groups over time?",
        "options": [
            "Cross-sectional design",
            "Cohort design",
            "Case study design",
            "Quasi-experimental design"
        ],
        "answer": "Cohort design",
        "difficulty": "medium",
        "topic": "Research Design",
        "explanation": "Cohort designs track groups over time to observe changes."
    },
    {
        "id": 495,
        "question": "Which sampling method relies on participant referrals?",
        "options": [
            "Simple random sampling",
            "Stratified sampling",
            "Snowball sampling",
            "Systematic sampling"
        ],
        "answer": "Snowball sampling",
        "difficulty": "easy",
        "topic": "Sampling Methods",
        "explanation": "Snowball sampling uses referrals to recruit participants, often for hard-to-reach groups."
    },
    {
        "id": 496,
        "question": "Which data collection method is best for individual insights?",
        "options": [
            "Surveys",
            "Interviews",
            "Focus groups",
            "Observations"
        ],
        "answer": "Interviews",
        "difficulty": "easy",
        "topic": "Data Collection Methods",
        "explanation": "Interviews provide in-depth insights into individual perspectives."
    },
    {
        "id": 497,
        "question": "Which statistical test compares non-parametric data between two groups?",
        "options": [
            "T-test",
            "Mann-Whitney U test",
            "ANOVA",
            "Chi-square test"
        ],
        "answer": "Mann-Whitney U test",
        "difficulty": "hard",
        "topic": "Data Analysis",
        "explanation": "The Mann-Whitney U test compares non-parametric data between two independent groups."
    },
    {
        "id": 498,
        "question": "Which qualitative method uses a structured coding framework?",
        "options": [
            "Thematic analysis",
            "Framework analysis",
            "Narrative analysis",
            "Grounded theory"
        ],
        "answer": "Framework analysis",
        "difficulty": "medium",
        "topic": "Data Analysis",
        "explanation": "Framework analysis uses a structured coding framework to organize data."
    },
    {
        "id": 499,
        "question": "Which reliability measure uses parallel test forms?",
        "options": [
            "Test-retest reliability",
            "Inter-rater reliability",
            "Internal consistency",
            "Parallel forms reliability"
        ],
        "answer": "Parallel forms reliability",
        "difficulty": "medium",
        "topic": "Validity, Reliability, and Trustworthiness",
        "explanation": "Parallel forms reliability compares different versions of a test for consistency."
    },
    {
        "id": 500,
        "question": "What is a goal of community-based participatory research?",
        "options": [
            "Excluding community input",
            "Addressing community needs",
            "Reducing data quality",
            "Simplifying analysis"
        ],
        "answer": "Addressing community needs",
        "difficulty": "medium",
        "topic": "Advanced/Contemporary Topics",
        "explanation": "Community-based participatory research collaborates with communities to address their needs."
    },
    {
        "id": 501,
        "question": "What distinguishes basic research from applied research?",
        "options": [
            "Basic research solves practical problems",
            "Applied research advances theoretical knowledge",
            "Basic research seeks fundamental understanding",
            "Applied research avoids empirical data"
        ],
        "answer": "Basic research seeks fundamental understanding",
        "difficulty": "easy",
        "topic": "Foundations of Research",
        "explanation": "Basic research focuses on advancing theoretical knowledge, while applied research addresses practical issues."
    },
    {
        "id": 502,
        "question": "Which characteristic ensures research findings can be verified?",
        "options": [
            "Subjectivity",
            "Replicability",
            "Speculation",
            "Ambiguity"
        ],
        "answer": "Replicability",
        "difficulty": "easy",
        "topic": "Foundations of Research",
        "explanation": "Replicability allows other researchers to verify findings by repeating the study."
    },
    {
        "id": 503,
        "question": "Which research paradigm emphasizes transformative change?",
        "options": [
            "Positivism",
            "Interpretivism",
            "Critical theory",
            "Pragmatism"
        ],
        "answer": "Critical theory",
        "difficulty": "medium",
        "topic": "Foundations of Research",
        "explanation": "Critical theory seeks to challenge inequalities and promote social change."
    },
    {
        "id": 504,
        "question": "What does epistemology study in research?",
        "options": [
            "The nature of existence",
            "The nature of knowledge",
            "The role of values",
            "The research design"
        ],
        "answer": "The nature of knowledge",
        "difficulty": "medium",
        "topic": "Foundations of Research",
        "explanation": "Epistemology examines how knowledge is acquired and validated."
    },
    {
        "id": 505,
        "question": "Which ethical principle ensures participants can withdraw from a study?",
        "options": [
            "Beneficence",
            "Justice",
            "Voluntary participation",
            "Confidentiality"
        ],
        "answer": "Voluntary participation",
        "difficulty": "easy",
        "topic": "Foundations of Research",
        "explanation": "Voluntary participation allows participants to withdraw without penalty."
    },
    {
        "id": 506,
        "question": "What is the goal of exploratory research?",
        "options": [
            "To test hypotheses",
            "To describe phenomena",
            "To generate new ideas",
            "To establish causality"
        ],
        "answer": "To generate new ideas",
        "difficulty": "easy",
        "topic": "Foundations of Research",
        "explanation": "Exploratory research investigates new areas to generate hypotheses and insights."
    },
    {
        "id": 507,
        "question": "What is a significant research problem characterized by?",
        "options": [
            "It is trivial",
            "It addresses a critical issue",
            "It is overly vague",
            "It lacks empirical basis"
        ],
        "answer": "It addresses a critical issue",
        "difficulty": "easy",
        "topic": "Research Problem & Hypothesis",
        "explanation": "A significant research problem addresses important issues relevant to the field."
    },
    {
        "id": 508,
        "question": "What does a directional hypothesis specify?",
        "options": [
            "No relationship",
            "A specific effect direction",
            "A general relationship",
            "A null effect"
        ],
        "answer": "A specific effect direction",
        "difficulty": "medium",
        "topic": "Research Problem & Hypothesis",
        "explanation": "A directional hypothesis predicts the specific direction of a relationship or effect."
    },
    {
        "id": 509,
        "question": "Which variable moderates the relationship between independent and dependent variables?",
        "options": [
            "Confounding variable",
            "Mediating variable",
            "Moderator variable",
            "Control variable"
        ],
        "answer": "Moderator variable",
        "difficulty": "hard",
        "topic": "Research Problem & Hypothesis",
        "explanation": "A moderator variable influences the strength or direction of the relationship between variables."
    },
    {
        "id": 510,
        "question": "What is the purpose of a research objective?",
        "options": [
            "To summarize findings",
            "To define specific goals",
            "To collect data",
            "To publish results"
        ],
        "answer": "To define specific goals",
        "difficulty": "easy",
        "topic": "Research Problem & Hypothesis",
        "explanation": "Research objectives outline specific, measurable goals to guide the study."
    },
    {
        "id": 511,
        "question": "What does a systematic literature review aim to minimize?",
        "options": [
            "Data collection",
            "Researcher bias",
            "Sample size",
            "Statistical analysis"
        ],
        "answer": "Researcher bias",
        "difficulty": "medium",
        "topic": "Literature Review",
        "explanation": "Systematic reviews use rigorous protocols to reduce bias in evidence synthesis."
    },
    {
        "id": 512,
        "question": "Which source is least reliable for academic research?",
        "options": [
            "Peer-reviewed journals",
            "Government reports",
            "Personal blogs",
            "Textbooks"
        ],
        "answer": "Personal blogs",
        "difficulty": "easy",
        "topic": "Literature Review",
        "explanation": "Personal blogs often lack peer review and may contain unverified information."
    },
    {
        "id": 513,
        "question": "Which citation style is common in humanities?",
        "options": [
            "APA",
            "MLA",
            "Vancouver",
            "IEEE"
        ],
        "answer": "MLA",
        "difficulty": "medium",
        "topic": "Literature Review",
        "explanation": "MLA style is widely used in humanities for its focus on author-page citations."
    },
    {
        "id": 514,
        "question": "What is the purpose of identifying a research gap?",
        "options": [
            "To replicate studies",
            "To justify the study",
            "To summarize findings",
            "To collect data"
        ],
        "answer": "To justify the study",
        "difficulty": "easy",
        "topic": "Literature Review",
        "explanation": "Identifying a research gap justifies the need for a new study."
    },
    {
        "id": 515,
        "question": "What does a scoping review primarily explore?",
        "options": [
            "Statistical relationships",
            "Breadth of existing research",
            "Single-study findings",
            "Causal effects"
        ],
        "answer": "Breadth of existing research",
        "difficulty": "medium",
        "topic": "Literature Review",
        "explanation": "Scoping reviews map the extent and nature of research on a topic."
    },
    {
        "id": 516,
        "question": "Which research design uses random assignment to groups?",
        "options": [
            "Quasi-experimental design",
            "Observational design",
            "True experimental design",
            "Descriptive design"
        ],
        "answer": "True experimental design",
        "difficulty": "easy",
        "topic": "Research Design",
        "explanation": "True experimental designs use random assignment to ensure group comparability."
    },
    {
        "id": 517,
        "question": "What is a feature of a cohort design?",
        "options": [
            "Single time-point data",
            "Tracking groups over time",
            "Random manipulation",
            "No comparison group"
        ],
        "answer": "Tracking groups over time",
        "difficulty": "medium",
        "topic": "Research Design",
        "explanation": "Cohort designs follow groups over time to observe outcomes."
    },
    {
        "id": 518,
        "question": "Which research design integrates multiple data types?",
        "options": [
            "Experimental design",
            "Correlational design",
            "Mixed-methods design",
            "Observational design"
        ],
        "answer": "Mixed-methods design",
        "difficulty": "easy",
        "topic": "Research Design",
        "explanation": "Mixed-methods designs combine qualitative and quantitative data."
    },
    {
        "id": 519,
        "question": "What is a strength of longitudinal designs?",
        "options": [
            "Quick data collection",
            "Tracking changes over time",
            "Low cost",
            "Single time-point analysis"
        ],
        "answer": "Tracking changes over time",
        "difficulty": "easy",
        "topic": "Research Design",
        "explanation": "Longitudinal designs allow researchers to observe changes over extended periods."
    },
    {
        "id": 520,
        "question": "What is a limitation of cross-sectional designs?",
        "options": [
            "High cost",
            "Inability to assess causality",
            "Long duration",
            "Complex analysis"
        ],
        "answer": "Inability to assess causality",
        "difficulty": "medium",
        "topic": "Research Design",
        "explanation": "Cross-sectional designs cannot establish causality due to single time-point data."
    },
    {
        "id": 521,
        "question": "What is a sample in research?",
        "options": [
            "The entire population",
            "A subset of the population",
            "The research team",
            "The data analysis method"
        ],
        "answer": "A subset of the population",
        "difficulty": "easy",
        "topic": "Sampling Methods",
        "explanation": "A sample is a subset of the population selected for study."
    },
    {
        "id": 522,
        "question": "Which sampling method ensures proportional representation of subgroups?",
        "options": [
            "Simple random sampling",
            "Stratified sampling",
            "Cluster sampling",
            "Systematic sampling"
        ],
        "answer": "Stratified sampling",
        "difficulty": "medium",
        "topic": "Sampling Methods",
        "explanation": "Stratified sampling ensures proportional representation by sampling from subgroups."
    },
    {
        "id": 523,
        "question": "Which non-probability sampling method is prone to researcher bias?",
        "options": [
            "Quota sampling",
            "Purposive sampling",
            "Snowball sampling",
            "Convenience sampling"
        ],
        "answer": "Purposive sampling",
        "difficulty": "medium",
        "topic": "Sampling Methods",
        "explanation": "Purposive sampling relies on researcher judgment, increasing the risk of bias."
    },
    {
        "id": 524,
        "question": "What is a common cause of sampling error?",
        "options": [
            "Large sample sizes",
            "Random selection",
            "Non-representative samples",
            "Accurate measurements"
        ],
        "answer": "Non-representative samples",
        "difficulty": "medium",
        "topic": "Sampling Methods",
        "explanation": "Sampling error occurs when the sample does not represent the population."
    },
    {
        "id": 525,
        "question": "What determines adequate sample size?",
        "options": [
            "Researcher preference",
            "Statistical power",
            "Publication requirements",
            "Data collection method"
        ],
        "answer": "Statistical power",
        "difficulty": "medium",
        "topic": "Sampling Methods",
        "explanation": "Statistical power influences sample size to detect significant effects."
    },
    {
        "id": 526,
        "question": "Which data collection method uses existing documents?",
        "options": [
            "Surveys",
            "Interviews",
            "Document analysis",
            "Experiments"
        ],
        "answer": "Document analysis",
        "difficulty": "easy",
        "topic": "Data Collection Methods",
        "explanation": "Document analysis extracts data from existing texts or records."
    },
    {
        "id": 527,
        "question": "What is a feature of unstructured interviews?",
        "options": [
            "Standardized questions",
            "Flexible conversation",
            "Fixed response options",
            "Quantitative focus"
        ],
        "answer": "Flexible conversation",
        "difficulty": "medium",
        "topic": "Data Collection Methods",
        "explanation": "Unstructured interviews allow flexible, open-ended discussions."
    },
    {
        "id": 528,
        "question": "Which method is best for collecting group opinions?",
        "options": [
            "Surveys",
            "Focus groups",
            "Observations",
            "Experiments"
        ],
        "answer": "Focus groups",
        "difficulty": "easy",
        "topic": "Data Collection Methods",
        "explanation": "Focus groups collect diverse opinions through moderated group discussions."
    },
    {
        "id": 529,
        "question": "What is the purpose of a pilot study?",
        "options": [
            "To publish results",
            "To test procedures",
            "To recruit participants",
            "To analyze final data"
        ],
        "answer": "To test procedures",
        "difficulty": "easy",
        "topic": "Data Collection Methods",
        "explanation": "Pilot studies test procedures and instruments before full-scale research."
    },
    {
        "id": 530,
        "question": "Which method is suitable for controlled variable manipulation?",
        "options": [
            "Surveys",
            "Interviews",
            "Experiments",
            "Observations"
        ],
        "answer": "Experiments",
        "difficulty": "easy",
        "topic": "Data Collection Methods",
        "explanation": "Experiments manipulate variables in controlled settings to test causality."
    },
    {
        "id": 531,
        "question": "Which descriptive statistic represents the most frequent value?",
        "options": [
            "Mean",
            "Median",
            "Mode",
            "Standard deviation"
        ],
        "answer": "Mode",
        "difficulty": "easy",
        "topic": "Data Analysis",
        "explanation": "The mode is the value that appears most frequently in a dataset."
    },
    {
        "id": 532,
        "question": "Which inferential test is used for non-parametric data across multiple groups?",
        "options": [
            "T-test",
            "ANOVA",
            "Kruskal-Wallis test",
            "Chi-square test"
        ],
        "answer": "Kruskal-Wallis test",
        "difficulty": "hard",
        "topic": "Data Analysis",
        "explanation": "The Kruskal-Wallis test compares non-parametric data across multiple groups."
    },
    {
        "id": 533,
        "question": "What does a low p-value (e.g., 0.01) indicate?",
        "options": [
            "Weak evidence against the null hypothesis",
            "Strong evidence against the null hypothesis",
            "The null hypothesis is true",
            "No statistical significance"
        ],
        "answer": "Strong evidence against the null hypothesis",
        "difficulty": "medium",
        "topic": "Data Analysis",
        "explanation": "A low p-value suggests strong evidence to reject the null hypothesis."
    },
    {
        "id": 534,
        "question": "Which qualitative method interprets individual stories?",
        "options": [
            "Thematic analysis",
            "Content analysis",
            "Narrative analysis",
            "Framework analysis"
        ],
        "answer": "Narrative analysis",
        "difficulty": "medium",
        "topic": "Data Analysis",
        "explanation": "Narrative analysis examines individual stories to understand experiences."
    },
    {
        "id": 535,
        "question": "Which software is used for qualitative data analysis?",
        "options": [
            "SPSS",
            "R",
            "NVivo",
            "Excel"
        ],
        "answer": "NVivo",
        "difficulty": "easy",
        "topic": "Data Analysis",
        "explanation": "NVivo is designed for organizing and analyzing qualitative data."
    },
    {
        "id": 536,
        "question": "Which validity type ensures a measure’s relevance to its concept?",
        "options": [
            "Internal validity",
            "External validity",
            "Construct validity",
            "Content validity"
        ],
        "answer": "Construct validity",
        "difficulty": "medium",
        "topic": "Validity, Reliability, and Trustworthiness",
        "explanation": "Construct validity ensures a measure accurately reflects the intended concept."
    },
    {
        "id": 537,
        "question": "Which reliability measure tests consistency over time?",
        "options": [
            "Inter-rater reliability",
            "Test-retest reliability",
            "Internal consistency",
            "Parallel forms reliability"
        ],
        "answer": "Test-retest reliability",
        "difficulty": "medium",
        "topic": "Validity, Reliability, and Trustworthiness",
        "explanation": "Test-retest reliability assesses consistency when a test is repeated."
    },
    {
        "id": 538,
        "question": "What is dependability in qualitative research?",
        "options": [
            "Generalizability of findings",
            "Consistency of research processes",
            "Accuracy of measurements",
            "Participant agreement"
        ],
        "answer": "Consistency of research processes",
        "difficulty": "medium",
        "topic": "Validity, Reliability, and Trustworthiness",
        "explanation": "Dependability ensures consistent and transparent research processes."
    },
    {
        "id": 539,
        "question": "Which trustworthiness criterion ensures findings reflect data?",
        "options": [
            "Credibility",
            "Transferability",
            "Confirmability",
            "Dependability"
        ],
        "answer": "Confirmability",
        "difficulty": "medium",
        "topic": "Validity, Reliability, and Trustworthiness",
        "explanation": "Confirmability ensures findings are grounded in data, not researcher bias."
    },
    {
        "id": 540,
        "question": "What is included in a research report’s introduction?",
        "options": [
            "Data analysis results",
            "Study background and purpose",
            "Detailed procedures",
            "References"
        ],
        "answer": "Study background and purpose",
        "difficulty": "easy",
        "topic": "Writing and Presenting Research",
        "explanation": "The introduction provides the study’s background, purpose, and research questions."
    },
    {
        "id": 541,
        "question": "What is the role of a research report’s results section?",
        "options": [
            "To interpret findings",
            "To present data objectively",
            "To describe methods",
            "To summarize literature"
        ],
        "answer": "To present data objectively",
        "difficulty": "easy",
        "topic": "Writing and Presenting Research",
        "explanation": "The results section presents findings without interpretation."
    },
    {
        "id": 542,
        "question": "What prevents plagiarism in academic writing?",
        "options": [
            "Copying without attribution",
            "Paraphrasing with citations",
            "Omitting references",
            "Using unverified sources"
        ],
        "answer": "Paraphrasing with citations",
        "difficulty": "easy",
        "topic": "Writing and Presenting Research",
        "explanation": "Paraphrasing with proper citations credits original authors, avoiding plagiarism."
    },
    {
        "id": 543,
        "question": "Which visual aid is best for showing proportions?",
        "options": [
            "Line graph",
            "Bar graph",
            "Pie chart",
            "Scatter plot"
        ],
        "answer": "Pie chart",
        "difficulty": "easy",
        "topic": "Writing and Presenting Research",
        "explanation": "Pie charts effectively display proportions or percentages of a whole."
    },
    {
        "id": 544,
        "question": "What is a key consideration for oral presentations?",
        "options": [
            "Using complex jargon",
            "Engaging the audience",
            "Excluding visuals",
            "Ignoring time limits"
        ],
        "answer": "Engaging the audience",
        "difficulty": "medium",
        "topic": "Writing and Presenting Research",
        "explanation": "Engaging the audience enhances the effectiveness of oral presentations."
    },
    {
        "id": 545,
        "question": "What is the purpose of a meta-analysis?",
        "options": [
            "To collect primary data",
            "To combine study results statistically",
            "To explore qualitative themes",
            "To design experiments"
        ],
        "answer": "To combine study results statistically",
        "difficulty": "medium",
        "topic": "Advanced/Contemporary Topics",
        "explanation": "Meta-analysis statistically synthesizes results from multiple studies."
    },
    {
        "id": 546,
        "question": "What does triangulation achieve in research?",
        "options": [
            "Reduces sample size",
            "Enhances validity",
            "Speeds up analysis",
            "Eliminates data"
        ],
        "answer": "Enhances validity",
        "difficulty": "medium",
        "topic": "Advanced/Contemporary Topics",
        "explanation": "Triangulation uses multiple methods or sources to validate findings."
    },
    {
        "id": 547,
        "question": "What is the role of an ethics committee in research?",
        "options": [
            "To analyze data",
            "To ensure ethical standards",
            "To fund studies",
            "To publish results"
        ],
        "answer": "To ensure ethical standards",
        "difficulty": "easy",
        "topic": "Advanced/Contemporary Topics",
        "explanation": "Ethics committees review studies to ensure ethical conduct."
    },
    {
        "id": 548,
        "question": "What is a feature of community-based research?",
        "options": [
            "Exclusion of stakeholders",
            "Community collaboration",
            "Focus on lab experiments",
            "Randomized trials"
        ],
        "answer": "Community collaboration",
        "difficulty": "medium",
        "topic": "Advanced/Contemporary Topics",
        "explanation": "Community-based research involves collaboration with communities to address their needs."
    },
    {
        "id": 549,
        "question": "How does artificial intelligence aid research?",
        "options": [
            "Reduces data complexity",
            "Automates data analysis",
            "Eliminates hypotheses",
            "Simplifies sampling"
        ],
        "answer": "Automates data analysis",
        "difficulty": "medium",
        "topic": "Advanced/Contemporary Topics",
        "explanation": "AI automates complex data analysis, improving efficiency and accuracy."
    },
    {
        "id": 550,
        "question": "What promotes transparency in open science?",
        "options": [
            "Restricted data access",
            "Public data sharing",
            "Avoiding peer review",
            "Limited documentation"
        ],
        "answer": "Public data sharing",
        "difficulty": "easy",
        "topic": "Advanced/Contemporary Topics",
        "explanation": "Open science promotes transparency through public sharing of data and methods."
    },
    {
        "id": 551,
        "question": "Which research type describes existing conditions?",
        "options": [
            "Exploratory research",
            "Descriptive research",
            "Explanatory research",
            "Applied research"
        ],
        "answer": "Descriptive research",
        "difficulty": "easy",
        "topic": "Foundations of Research",
        "explanation": "Descriptive research documents existing conditions or characteristics."
    },
    {
        "id": 552,
        "question": "Which paradigm focuses on measurable phenomena?",
        "options": [
            "Interpretivism",
            "Critical theory",
            "Positivism",
            "Pragmatism"
        ],
        "answer": "Positivism",
        "difficulty": "medium",
        "topic": "Foundations of Research",
        "explanation": "Positivism emphasizes measurable, objective phenomena."
    },
    {
        "id": 553,
        "question": "Which ethical principle protects participant privacy?",
        "options": [
            "Beneficence",
            "Justice",
            "Confidentiality",
            "Informed consent"
        ],
        "answer": "Confidentiality",
        "difficulty": "easy",
        "topic": "Foundations of Research",
        "explanation": "Confidentiality safeguards participants’ personal information."
    },
    {
        "id": 554,
        "question": "What makes a research problem testable?",
        "options": [
            "It is overly broad",
            "It can be empirically measured",
            "It lacks significance",
            "It is unrelated to theory"
        ],
        "answer": "It can be empirically measured",
        "difficulty": "easy",
        "topic": "Research Problem & Hypothesis",
        "explanation": "A testable research problem can be investigated using empirical methods."
    },
    {
        "id": 555,
        "question": "What is an alternative hypothesis?",
        "options": [
            "It assumes no effect",
            "It predicts an effect",
            "It describes the sample",
            "It confirms the null hypothesis"
        ],
        "answer": "It predicts an effect",
        "difficulty": "easy",
        "topic": "Research Problem & Hypothesis",
        "explanation": "The alternative hypothesis predicts a relationship or effect."
    },
    {
        "id": 556,
        "question": "Which variable is controlled to reduce its impact?",
        "options": [
            "Independent variable",
            "Dependent variable",
            "Control variable",
            "Moderator variable"
        ],
        "answer": "Control variable",
        "difficulty": "medium",
        "topic": "Research Problem & Hypothesis",
        "explanation": "Control variables are held constant to minimize their influence."
    },
    {
        "id": 557,
        "question": "What is a narrative review’s primary goal?",
        "options": [
            "Statistical analysis",
            "Qualitative synthesis",
            "Single-study focus",
            "Meta-analysis"
        ],
        "answer": "Qualitative synthesis",
        "difficulty": "medium",
        "topic": "Literature Review",
        "explanation": "Narrative reviews synthesize literature qualitatively to provide an overview."
    },
    {
        "id": 558,
        "question": "Which citation style uses numbered citations?",
        "options": [
            "APA",
            "MLA",
            "Vancouver",
            "Chicago Author-Date"
        ],
        "answer": "Vancouver",
        "difficulty": "medium",
        "topic": "Literature Review",
        "explanation": "Vancouver style uses numbered citations, common in medical fields."
    },
    {
        "id": 559,
        "question": "What is a theoretical framework’s purpose?",
        "options": [
            "To collect data",
            "To guide hypothesis development",
            "To summarize results",
            "To recruit participants"
        ],
        "answer": "To guide hypothesis development",
        "difficulty": "medium",
        "topic": "Literature Review",
        "explanation": "A theoretical framework guides hypothesis development and interpretation."
    },
    {
        "id": 560,
        "question": "Which research design is best for studying causal relationships?",
        "options": [
            "Descriptive design",
            "Correlational design",
            "Experimental design",
            "Case study design"
        ],
        "answer": "Experimental design",
        "difficulty": "easy",
        "topic": "Research Design",
        "explanation": "Experimental designs manipulate variables to establish causality."
    },
    {
        "id": 561,
        "question": "What is a limitation of quasi-experimental designs?",
        "options": [
            "Random assignment",
            "Lack of control over variables",
            "High generalizability",
            "Elimination of bias"
        ],
        "answer": "Lack of control over variables",
        "difficulty": "medium",
        "topic": "Research Design",
        "explanation": "Quasi-experimental designs lack random assignment, reducing control over variables."
    },
    {
        "id": 562,
        "question": "Which sampling method selects entire groups?",
        "options": [
            "Simple random sampling",
            "Stratified sampling",
            "Cluster sampling",
            "Systematic sampling"
        ],
        "answer": "Cluster sampling",
        "difficulty": "medium",
        "topic": "Sampling Methods",
        "explanation": "Cluster sampling selects entire groups or clusters randomly."
    },
    {
        "id": 563,
        "question": "Which non-probability sampling method is most accessible?",
        "options": [
            "Purposive sampling",
            "Quota sampling",
            "Convenience sampling",
            "Snowball sampling"
        ],
        "answer": "Convenience sampling",
        "difficulty": "easy",
        "topic": "Sampling Methods",
        "explanation": "Convenience sampling selects participants based on accessibility."
    },
    {
        "id": 564,
        "question": "Which data collection method observes behaviors in natural settings?",
        "options": [
            "Surveys",
            "Interviews",
            "Non-participant observation",
            "Focus groups"
        ],
        "answer": "Non-participant observation",
        "difficulty": "medium",
        "topic": "Data Collection Methods",
        "explanation": "Non-participant observation studies behaviors in natural settings without interference."
    },
    {
        "id": 565,
        "question": "What is participant observation in qualitative research?",
        "options": [
            "Observing without involvement",
            "Engaging in group activities",
            "Conducting surveys",
            "Analyzing documents"
        ],
        "answer": "Engaging in group activities",
        "difficulty": "medium",
        "topic": "Data Collection Methods",
        "explanation": "Participant observation involves the researcher participating while observing."
    },
    {
        "id": 566,
        "question": "Which inferential test is used for categorical data?",
        "options": [
            "T-test",
            "ANOVA",
            "Chi-square test",
            "Correlation"
        ],
        "answer": "Chi-square test",
        "difficulty": "medium",
        "topic": "Data Analysis",
        "explanation": "The chi-square test analyzes associations between categorical variables."
    },
    {
        "id": 567,
        "question": "Which qualitative method uses structured coding?",
        "options": [
            "Thematic analysis",
            "Framework analysis",
            "Narrative analysis",
            "Grounded theory"
        ],
        "answer": "Framework analysis",
        "difficulty": "medium",
        "topic": "Data Analysis",
        "explanation": "Framework analysis organizes data using a structured coding framework."
    },
    {
        "id": 568,
        "question": "Which validity type ensures comprehensive measurement?",
        "options": [
            "Construct validity",
            "Content validity",
            "Internal validity",
            "External validity"
        ],
        "answer": "Content validity",
        "difficulty": "medium",
        "topic": "Validity, Reliability, and Trustworthiness",
        "explanation": "Content validity ensures a measure covers all relevant aspects of a concept."
    },
    {
        "id": 569,
        "question": "Which section of a research report describes data collection?",
        "options": [
            "Introduction",
            "Methodology",
            "Results",
            "Discussion"
        ],
        "answer": "Methodology",
        "difficulty": "easy",
        "topic": "Writing and Presenting Research",
        "explanation": "The methodology section details data collection and study procedures."
    },
    {
        "id": 570,
        "question": "What is a characteristic of big data research?",
        "options": [
            "Small datasets",
            "High volume and variety",
            "Manual analysis",
            "Simple patterns"
        ],
        "answer": "High volume and variety",
        "difficulty": "medium",
        "topic": "Advanced/Contemporary Topics",
        "explanation": "Big data research involves large, diverse datasets requiring advanced tools."
    },
    {
        "id": 571,
        "question": "What is a good research objective?",
        "options": [
            "It is vague",
            "It is specific and achievable",
            "It is unrelated to the problem",
            "It is overly complex"
        ],
        "answer": "It is specific and achievable",
        "difficulty": "easy",
        "topic": "Research Problem & Hypothesis",
        "explanation": "Good research objectives are specific, measurable, and achievable."
    },
    {
        "id": 572,
        "question": "Which variable is the outcome of interest?",
        "options": [
            "Independent variable",
            "Dependent variable",
            "Control variable",
            "Moderator variable"
        ],
        "answer": "Dependent variable",
        "difficulty": "easy",
        "topic": "Research Problem & Hypothesis",
        "explanation": "The dependent variable is the outcome measured in the study."
    },
    {
        "id": 573,
        "question": "Which source provides original research data?",
        "options": [
            "Textbooks",
            "Review articles",
            "Primary sources",
            "Encyclopedias"
        ],
        "answer": "Primary sources",
        "difficulty": "easy",
        "topic": "Literature Review",
        "explanation": "Primary sources provide original data, such as research articles."
    },
    {
        "id": 574,
        "question": "Which research design observes phenomena without intervention?",
        "options": [
            "Experimental design",
            "Observational design",
            "Quasi-experimental design",
            "Mixed-methods design"
        ],
        "answer": "Observational design",
        "difficulty": "easy",
        "topic": "Research Design",
        "explanation": "Observational designs study phenomena without manipulating variables."
    },
    {
        "id": 575,
        "question": "Which sampling method is cost-effective for large populations?",
        "options": [
            "Simple random sampling",
            "Stratified sampling",
            "Cluster sampling",
            "Purposive sampling"
        ],
        "answer": "Cluster sampling",
        "difficulty": "medium",
        "topic": "Sampling Methods",
        "explanation": "Cluster sampling reduces costs by sampling entire groups."
    },
    {
        "id": 576,
        "question": "Which data collection method is best for in-depth insights?",
        "options": [
            "Surveys",
            "Interviews",
            "Focus groups",
            "Observations"
        ],
        "answer": "Interviews",
        "difficulty": "easy",
        "topic": "Data Collection Methods",
        "explanation": "Interviews provide detailed, in-depth insights into individual perspectives."
    },
    {
        "id": 577,
        "question": "Which statistical test compares two independent groups?",
        "options": [
            "Paired t-test",
            "Independent t-test",
            "ANOVA",
            "Chi-square test"
        ],
        "answer": "Independent t-test",
        "difficulty": "medium",
        "topic": "Data Analysis",
        "explanation": "The independent t-test compares means between two independent groups."
    },
    {
        "id": 578,
        "question": "Which qualitative method quantifies text patterns?",
        "options": [
            "Thematic analysis",
            "Content analysis",
            "Narrative analysis",
            "Grounded theory"
        ],
        "answer": "Content analysis",
        "difficulty": "medium",
        "topic": "Data Analysis",
        "explanation": "Content analysis quantifies patterns in texts using coding."
    },
    {
        "id": 579,
        "question": "Which reliability measure uses equivalent test forms?",
        "options": [
            "Test-retest reliability",
            "Inter-rater reliability",
            "Internal consistency",
            "Parallel forms reliability"
        ],
        "answer": "Parallel forms reliability",
        "difficulty": "medium",
        "topic": "Validity, Reliability, and Trustworthiness",
        "explanation": "Parallel forms reliability compares different versions of a test."
    },
    {
        "id": 580,
        "question": "What is a key feature of a research thesis?",
        "options": [
            "Single-page summary",
            "Structured chapters",
            "No references",
            "Raw data only"
        ],
        "answer": "Structured chapters",
        "difficulty": "easy",
        "topic": "Writing and Presenting Research",
        "explanation": "A research thesis includes structured chapters like introduction and methodology."
    },
    {
        "id": 581,
        "question": "Which ethical principle ensures informed participation?",
        "options": [
            "Confidentiality",
            "Informed consent",
            "Beneficence",
            "Justice"
        ],
        "answer": "Informed consent",
        "difficulty": "easy",
        "topic": "Foundations of Research",
        "explanation": "Informed consent ensures participants understand the study’s purpose and risks."
    },
    {
        "id": 582,
        "question": "What is a non-directional hypothesis?",
        "options": [
            "It predicts a specific direction",
            "It states a general relationship",
            "It assumes no effect",
            "It confirms the null hypothesis"
        ],
        "answer": "It states a general relationship",
        "difficulty": "medium",
        "topic": "Research Problem & Hypothesis",
        "explanation": "A non-directional hypothesis predicts a relationship without specifying direction."
    },
    {
        "id": 583,
        "question": "Which source summarizes primary data?",
        "options": [
            "Primary sources",
            "Secondary sources",
            "Tertiary sources",
            "Raw data"
        ],
        "answer": "Secondary sources",
        "difficulty": "easy",
        "topic": "Literature Review",
        "explanation": "Secondary sources summarize or interpret primary data."
    },
    {
        "id": 584,
        "question": "Which research design collects data at one time point?",
        "options": [
            "Longitudinal design",
            "Cross-sectional design",
            "Cohort design",
            "Case study design"
        ],
        "answer": "Cross-sectional design",
        "difficulty": "easy",
        "topic": "Research Design",
        "explanation": "Cross-sectional designs collect data at a single time point."
    },
    {
        "id": 585,
        "question": "Which sampling method selects every nth individual?",
        "options": [
            "Simple random sampling",
            "Systematic sampling",
            "Stratified sampling",
            "Cluster sampling"
        ],
        "answer": "Systematic sampling",
        "difficulty": "easy",
        "topic": "Sampling Methods",
        "explanation": "Systematic sampling selects every nth individual from a list."
    },
    {
        "id": 586,
        "question": "Which data collection method analyzes historical records?",
        "options": [
            "Surveys",
            "Interviews",
            "Archival research",
            "Focus groups"
        ],
        "answer": "Archival research",
        "difficulty": "easy",
        "topic": "Data Collection Methods",
        "explanation": "Archival research examines historical records or documents."
    },
    {
        "id": 587,
        "question": "Which statistical test assesses relationships between variables?",
        "options": [
            "T-test",
            "ANOVA",
            "Correlation",
            "Chi-square test"
        ],
        "answer": "Correlation",
        "difficulty": "medium",
        "topic": "Data Analysis",
        "explanation": "Correlation measures the strength of relationships between variables."
    },
    {
        "id": 588,
        "question": "Which qualitative method develops theories from data?",
        "options": [
            "Thematic analysis",
            "Content analysis",
            "Grounded theory",
            "Narrative analysis"
        ],
        "answer": "Grounded theory",
        "difficulty": "medium",
        "topic": "Data Analysis",
        "explanation": "Grounded theory builds theories through iterative data analysis."
    },
    {
        "id": 589,
        "question": "Which validity type compares a measure to a standard?",
        "options": [
            "Content validity",
            "Construct validity",
            "Criterion validity",
            "Internal validity"
        ],
        "answer": "Criterion validity",
        "difficulty": "medium",
        "topic": "Validity, Reliability, and Trustworthiness",
        "explanation": "Criterion validity assesses a measure’s correlation with an external standard."
    },
    {
        "id": 590,
        "question": "What is the purpose of a research report’s discussion section?",
        "options": [
            "To present raw data",
            "To interpret findings",
            "To list methods",
            "To summarize literature"
        ],
        "answer": "To interpret findings",
        "difficulty": "easy",
        "topic": "Writing and Presenting Research",
        "explanation": "The discussion section interprets findings and discusses implications."
    },
    {
        "id": 591,
        "question": "What is a feature of machine learning in research?",
        "options": [
            "Manual data analysis",
            "Pattern detection",
            "Small datasets",
            "Simple computations"
        ],
        "answer": "Pattern detection",
        "difficulty": "medium",
        "topic": "Advanced/Contemporary Topics",
        "explanation": "Machine learning detects complex patterns in large datasets."
    },
    {
        "id": 592,
        "question": "What is a quantitative research question focused on?",
        "options": [
            "Participant experiences",
            "Measurable relationships",
            "Narrative interpretations",
            "Qualitative themes"
        ],
        "answer": "Measurable relationships",
        "difficulty": "easy",
        "topic": "Research Problem & Hypothesis",
        "explanation": "Quantitative research questions focus on measurable relationships or effects."
    },
    {
        "id": 593,
        "question": "What is an integrative review’s characteristic?",
        "options": [
            "Statistical synthesis",
            "Diverse methodology synthesis",
            "Single-study focus",
            "No inclusion criteria"
        ],
        "answer": "Diverse methodology synthesis",
        "difficulty": "medium",
        "topic": "Literature Review",
        "explanation": "Integrative reviews synthesize diverse research methodologies."
    },
    {
        "id": 594,
        "question": "Which research design tracks groups without manipulation?",
        "options": [
            "Experimental design",
            "Cohort design",
            "Case study design",
            "Quasi-experimental design"
        ],
        "answer": "Cohort design",
        "difficulty": "medium",
        "topic": "Research Design",
        "explanation": "Cohort designs follow groups over time without manipulating variables."
    },
    {
        "id": 595,
        "question": "Which sampling method uses predefined quotas?",
        "options": [
            "Simple random sampling",
            "Stratified sampling",
            "Quota sampling",
            "Cluster sampling"
        ],
        "answer": "Quota sampling",
        "difficulty": "medium",
        "topic": "Sampling Methods",
        "explanation": "Quota sampling selects participants based on predefined subgroup quotas."
    },
    {
        "id": 596,
        "question": "Which data collection method uses standardized questionnaires?",
        "options": [
            "Unstructured interviews",
            "Surveys",
            "Focus groups",
            "Observations"
        ],
        "answer": "Surveys",
        "difficulty": "easy",
        "topic": "Data Collection Methods",
        "explanation": "Surveys use standardized questionnaires for consistent data collection."
    },
    {
        "id": 597,
        "question": "Which statistical test compares paired data?",
        "options": [
            "Independent t-test",
            "Paired t-test",
            "ANOVA",
            "Chi-square test"
        ],
        "answer": "Paired t-test",
        "difficulty": "medium",
        "topic": "Data Analysis",
        "explanation": "The paired t-test compares means for paired data."
    },
    {
        "id": 598,
        "question": "Which qualitative method organizes data into themes?",
        "options": [
            "Thematic analysis",
            "Content analysis",
            "Narrative analysis",
            "Framework analysis"
        ],
        "answer": "Thematic analysis",
        "difficulty": "medium",
        "topic": "Data Analysis",
        "explanation": "Thematic analysis organizes data into recurring themes."
    },
    {
        "id": 599,
        "question": "Which reliability measure assesses rater agreement?",
        "options": [
            "Test-retest reliability",
            "Inter-rater reliability",
            "Internal consistency",
            "Parallel forms reliability"
        ],
        "answer": "Inter-rater reliability",
        "difficulty": "medium",
        "topic": "Validity, Reliability, and Trustworthiness",
        "explanation": "Inter-rater reliability measures agreement between different raters."
    },
    {
        "id": 600,
        "question": "What is a goal of participatory action research?",
        "options": [
            "Excluding stakeholders",
            "Empowering communities",
            "Reducing data quality",
            "Simplifying analysis"
        ],
        "answer": "Empowering communities",
        "difficulty": "medium",
        "topic": "Advanced/Contemporary Topics",
        "explanation": "Participatory action research empowers communities through collaborative problem-solving."
    }
]

