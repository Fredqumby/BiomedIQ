// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const newCourseBtn = document.getElementById('new-course-btn');
const questionElement = document.getElementById('question');
const questionNumberElement = document.getElementById('question-number');
const optionsContainer = document.getElementById('options');
const progressBar = document.getElementById('progress');
const progressPercentage = document.getElementById('progress-percentage');
const currentQuestionElement = document.getElementById('current-question');
const totalQuestionsElement = document.getElementById('total-questions');
const scoreElement = document.getElementById('score');
const finalScoreElement = document.getElementById('final-score');
const correctAnswersElement = document.getElementById('correct-answers');
const incorrectAnswersElement = document.getElementById('incorrect-answers');
const percentageScoreElement = document.getElementById('percentage-score');
const coursesContainer = document.getElementById('courses');
const courseNameElement = document.getElementById('course-name');
const overallProgressValue = document.getElementById('overall-progress-value');
const overallProgressBar = document.getElementById('overall-progress');
const timerElement = document.getElementById('timer');
const homeBtn = document.getElementById('home-btn');
const menuBtn = document.getElementById('menu-btn');
const courseSearchInput = document.getElementById('course-search');
const welcomeScreen = document.getElementById('welcome-screen');
const loadingScreen = document.getElementById('loading-screen');
const courseLoadingScreen = document.getElementById('course-loading-screen');
const courseLoadingTitle = document.getElementById('course-loading-title');
const mainContainer = document.getElementById('main-container');
const startQuizBtn = document.getElementById('start-quiz-btn');
const menuDropdown = document.getElementById('menu-dropdown');
const themeMenuBtn = document.getElementById('theme-menu-btn');
const statsMenuBtn = document.getElementById('stats-menu-btn');
const themeModal = document.getElementById('theme-modal');
const statsModal = document.getElementById('stats-modal');
const aboutModal = document.getElementById('about-modal');
const policyModal = document.getElementById('policy-modal');
const disclaimerModal = document.getElementById('disclaimer-modal');
const termsModal = document.getElementById('terms-modal');
const closeTheme = document.getElementById('close-theme');
const closeStats = document.getElementById('close-stats');
const closeAbout = document.getElementById('close-about');
const closePolicy = document.getElementById('close-policy');
const closeDisclaimer = document.getElementById('close-disclaimer');
const closeTerms = document.getElementById('close-terms');
const darkThemeOption = document.getElementById('dark-theme-option');
const lightThemeOption = document.getElementById('light-theme-option');
const aboutBtn = document.getElementById('about-btn');
const policyBtn = document.getElementById('policy-btn');
const disclaimerBtn = document.getElementById('disclaimer-btn');
const termsBtn = document.getElementById('terms-btn');
const statsChartCanvas = document.getElementById('stats-chart');
let statsChart = null;
let timerInterval;
let timeLeft = 10;

// Quiz State
let currentQuestionIndex = 0;
let score = 0;
let questions = [];
let userAnswers = [];
let currentCourse = '';
let courseProgress = {};
let totalAnsweredQuestions = 0;
let totalPossibleQuestions = 0;

// Biomedical Science Courses Metadata
const courses = {
    "human_anatomy": {
        name: "Human Anatomy",
        icon: "fa-bone",
        color: "text-blue-500",
        bgColor: "bg-blue-500/20"
    },
    "bioinformatics": {
        name: "Bioinformatics",
        icon: "fa-laptop-code",
        color: "text-teal-500",
        bgColor: "bg-teal-500/20"
    },
    "biostatistics": {
        name: "Biostatistics",
        icon: "fa-chart-pie",
        color: "text-amber-500",
        bgColor: "bg-amber-500/20"
    },
    "cell_biology": {
        name: "Cell Biology",
        icon: "fa-circle",
        color: "text-cyan-500",
        bgColor: "bg-cyan-500/20"
    },
    "genetics": {
        name: "Genetics",
        icon: "fa-dna",
        color: "text-indigo-500",
        bgColor: "bg-indigo-500/20"
    },
    "hematology": {
        name: "Hematology",
        icon: "fa-tint",
        color: "text-red-500",
        bgColor: "bg-red-500/20"
    },
    "histology": {
        name: "Histology",
        icon: "fa-microscope",
        color: "text-lime-500",
        bgColor: "bg-lime-500/20"
    },
    "human_physiology": {
        name: "Human Physiology",
        icon: "fa-lungs",
        color: "text-pink-500",
        bgColor: "bg-pink-500/20"
    },
    "microbiology": {
        name: "Microbiology",
        icon: "fa-bacteria",
        color: "text-green-500",
        bgColor: "bg-green-500/20"
    },
    "molecular_biology": {
        name: "Molecular Biology",
        icon: "fa-dna",
        color: "text-blue-400",
        bgColor: "bg-blue-400/20"
    },
    "parasitology": {
        name: "Parasitology",
        icon: "fa-bug",
        color: "text-orange-500",
        bgColor: "bg-orange-500/20"
    },

    "pharmacology": {
        name: "Pharmacology",
        icon: "fa-pills",
        color: "text-indigo-500",
        bgColor: "bg-indigo-500/20"
    },
    "human_psychology": {
        name: "Human Psychology",
        icon: "fa-brain",
        color: "text-purple-500",
        bgColor: "bg-purple-500/20"
    },
    "research_methods": {
        name: "Research Methods",
        icon: "fa-flask",
        color: "text-yellow-500",
        bgColor: "bg-yellow-500/20"
    },
    "immunology": {
        name: "Immunology",
        icon: "fa-shield-virus",
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/20"
    }
};



// Initialize Academy
async function initAcademy() {
    console.log('Initializing biomedIQ Academy...');
    
    // Load theme preference
    loadThemePreference();
    
    // Load course progress from localStorage
    loadCourseProgress();
    
    // Load actual question counts from course-specific files
    await loadCourseQuestionCounts();
    
    // Calculate overall progress
    calculateOverallProgress();
    
    // Render course cards
    renderCourses();
    
    // Set up event listeners
    setupEventListeners();
    
    // Update active nav button
    updateActiveNavButton();
    
    // Add space under navbar on launch
    document.body.classList.add('home-active');
    
    console.log('Academy initialization complete');
}

// Set up all event listeners
function setupEventListeners() {
    // Menu button
    if (menuBtn) menuBtn.addEventListener('click', toggleMenuDropdown);
    
    // Theme menu option
    if (themeMenuBtn) themeMenuBtn.addEventListener('click', () => {
        toggleMenuDropdown();
        openModal('theme');
    });
    
    // Stats menu option
    if (statsMenuBtn) statsMenuBtn.addEventListener('click', () => {
        toggleMenuDropdown();
        openModal('stats');
    });
    
    // Theme options
    if (darkThemeOption) darkThemeOption.addEventListener('click', () => {
        setTheme('default');
        closeModal('theme');
    });
    
    if (lightThemeOption) lightThemeOption.addEventListener('click', () => {
        setTheme('light');
        closeModal('theme');
    });
    
    // Modal close buttons
    if (closeTheme) closeTheme.addEventListener('click', () => closeModal('theme'));
    if (closeStats) closeStats.addEventListener('click', () => closeModal('stats'));
    if (closeAbout) closeAbout.addEventListener('click', () => closeModal('about'));
    if (closePolicy) closePolicy.addEventListener('click', () => closeModal('policy'));
    if (closeDisclaimer) closeDisclaimer.addEventListener('click', () => closeModal('disclaimer'));
    if (closeTerms) closeTerms.addEventListener('click', () => closeModal('terms'));
    
    // Top nav buttons
    if (aboutBtn) aboutBtn.addEventListener('click', () => window.location.href = '/pages/about.html');
    if (policyBtn) policyBtn.addEventListener('click', () => window.location.href = '/pages/policy.html');
    if (disclaimerBtn) disclaimerBtn.addEventListener('click', () => window.location.href = '/pages/disclaimer.html');
    if (termsBtn) termsBtn.addEventListener('click', () => window.location.href = '/pages/terms.html');
    
    // Quiz navigation
    if (nextBtn) nextBtn.addEventListener('click', nextQuestion);
    if (restartBtn) restartBtn.addEventListener('click', restartCourse);
    if (newCourseBtn) newCourseBtn.addEventListener('click', showStartScreen);
    if (homeBtn) homeBtn.addEventListener('click', saveProgressAndGoHome);
    
    // Course search
    if (courseSearchInput) courseSearchInput.addEventListener('input', filterCourses);
    
    // Welcome screen start button
    if (startQuizBtn) startQuizBtn.addEventListener('click', startFromWelcome);
    

    
    // Close modals when clicking outside
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal.id.replace('-modal', ''));
            }
        });
    });
}

// Toggle menu dropdown
function toggleMenuDropdown() {
    if (menuDropdown) menuDropdown.classList.toggle('hidden');
}

// Open modal
function openModal(modalName) {
    if (menuDropdown) menuDropdown.classList.add('hidden');
    
    if (modalName === 'stats') {
        renderStatsChart();
        document.body.classList.add('modal-open');
    }
    
    const modal = document.getElementById(`${modalName}-modal`);
    if (modal) modal.classList.add('active');
}

// Close modal
function closeModal(modalName) {
    const modal = document.getElementById(`${modalName}-modal`);
    if (modal) modal.classList.remove('active');
    
    if (modalName === 'stats') {
        document.body.classList.remove('modal-open');
    }
}

// Set theme
function setTheme(theme) {
    if (theme === 'light') {
        document.body.classList.add('light-theme');
    } else {
        document.body.classList.remove('light-theme');
    }
    localStorage.setItem('theme', theme);
}

// Load theme preference
function loadThemePreference() {
    const theme = localStorage.getItem('theme') || 'default';
    setTheme(theme);
}

async function loadCourseQuestionCounts() {
    await courseLoader.clearBrowserCache();
    courseLoader.ensureCourseSpecificity();
    
    // First render courses with cached data
    renderCourses();
    
    // Then load course data in the background
    Object.keys(courses).forEach(courseKey => {
        // Initialize with default values if needed
        if (!courseProgress[courseKey]) {
            courseProgress[courseKey] = {
                attempts: 0,
                highestScore: 0,
                lastScore: 0,
                completion: 0,
                correctCompletion: 0,
                answered: 0,
                total: 0
            };
        }
        
        // Load course data asynchronously
        courseLoader.loadCourse(courseKey).then(questions => {
            const questionCount = questions.length;
            courseProgress[courseKey].total = questionCount;
            saveCourseProgress();
            // Update just this course card
            updateCourseCard(courseKey);
        }).catch(error => {
            courseProgress[courseKey].total = 0;
            saveCourseProgress();
            // Update just this course card
            updateCourseCard(courseKey);
        });
    });
}

// Load course progress from localStorage
function loadCourseProgress() {
    const savedProgress = localStorage.getItem('courseProgress');
    if (savedProgress) {
        courseProgress = JSON.parse(savedProgress);
    } else {
        // Initialize empty progress
        courseProgress = {};
        Object.keys(courses).forEach(course => {
            courseProgress[course] = {
                attempts: 0,
                highestScore: 0,
                lastScore: 0,
                completion: 0,
                correctCompletion: 0,
                answered: 0,
                total: 0
            };
        });
    }
}

// Save course progress to localStorage
function saveCourseProgress() {
    localStorage.setItem('courseProgress', JSON.stringify(courseProgress));
}

// Calculate overall progress
function calculateOverallProgress() {
    totalAnsweredQuestions = 0;
    totalPossibleQuestions = 0;
    
    Object.keys(courseProgress).forEach(courseKey => {
        const course = courseProgress[courseKey];
        totalAnsweredQuestions += course.answered || 0;
        totalPossibleQuestions += course.total || 0;
    });
    
    const overallPercentage = totalAnsweredQuestions > 0 && totalPossibleQuestions > 0 ? 
        Math.round((totalAnsweredQuestions / totalPossibleQuestions) * 100) : 0;
    
    if (overallProgressValue) overallProgressValue.textContent = `${overallPercentage}%`;
    if (overallProgressBar) overallProgressBar.style.width = `${overallPercentage}%`;
}

// Render course cards
function renderCourses() {
    if (!coursesContainer) return;
    
    coursesContainer.innerHTML = '';
    
    Object.keys(courses).forEach(courseKey => {
        const course = courses[courseKey];
        const progress = courseProgress[courseKey] || {
            attempts: 0,
            highestScore: 0,
            lastScore: 0,
            completion: 0,
            answered: 0,
            total: 0
        };
        
        const hasProgress = progress.answered > 0;
        const isCompleted = progress.completion >= 100;
        
        const questionCount = progress.total || 0;
        const questionText = questionCount === 1 ? 'question' : 'questions';
        const courseStatus = questionCount > 0 ? 'Available' : 'No questions available';
        
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');
        courseCard.innerHTML = `
            <div class="course-icon ${course.bgColor} ${course.color}">
                <i class="fas ${course.icon}"></i>
            </div>
            <h3 class="font-semibold text-lg mb-2">${course.name}</h3>
            <div class="text-xs text-gray-500 mb-1">${questionCount} ${questionText}</div>
            <div class="text-xs ${questionCount > 0 ? 'text-green-400' : 'text-red-400'} mb-1">${courseStatus}</div>
            <div class="text-sm text-gray-400 mb-3">${Math.round(progress.completion)}% Complete</div>
            <div class="course-progress">
                <div class="course-progress-fill" style="width: ${progress.completion}%"></div>
                <div class="course-progress-text">${Math.round(progress.completion)}%</div>
            </div>
            <div class="course-actions">
                ${questionCount === 0 ? `
                    <button class="course-btn btn-disabled" disabled>
                        <i class="fas fa-exclamation-triangle mr-1"></i> No Questions
                    </button>
                ` : isCompleted ? `
                    <button class="course-btn btn-restart" data-action="restart">
                        <i class="fas fa-redo mr-1"></i> Restart
                    </button>
                ` : hasProgress ? `
                    <button class="course-btn btn-continue" data-action="continue">
                        <i class="fas fa-play mr-1"></i> Continue
                    </button>
                    <button class="course-btn btn-restart" data-action="restart">
                        <i class="fas fa-redo mr-1"></i> Restart
                    </button>
                ` : `
                    <button class="course-btn btn-start" data-action="start">
                        <i class="fas fa-play mr-1"></i> Start
                    </button>
                `}
            </div>
        `;
        
        courseCard.addEventListener('click', (e) => {
            if (!e.target.closest('.course-btn')) {
                if (questionCount > 0) {
                    startCourse(courseKey, 'start');
                } else {
                    alert(`${course.name} has no questions available.\nPlease check that the course file courses/${courseKey}.js exists and contains valid questions.`);
                }
            }
        });
        
        courseCard.querySelectorAll('.course-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const action = btn.dataset.action;
                
                if (action === 'restart') {
                    if (questionCount > 0) {
                        restartCourseProgress(courseKey);
                    } else {
                        alert(`Cannot restart ${course.name} - no questions available.`);
                    }
                } else {
                    if (questionCount > 0) {
                        startCourse(courseKey, action);
                    } else {
                        alert(`Cannot start ${course.name} - no questions available.\nPlease check that courses/${courseKey}.js exists and contains valid questions.`);
                    }
                }
            });
        });
        
        coursesContainer.appendChild(courseCard);
    });
}

async function startCourse(courseKey, action) {
    currentCourse = courseKey;
    
    if (!courses[courseKey]) {
        alert(`Course "${courseKey}" not found!`);
        return;
    }
    
    if (courseLoadingScreen) courseLoadingScreen.classList.remove('hidden');
    if (courseLoadingTitle) courseLoadingTitle.textContent = `Loading ${courses[courseKey].name}...`;
    if (mainContainer) mainContainer.classList.add('hidden');
    
    // Reduced timeout from default to 500ms for faster course loading
    setTimeout(async () => {
        try {
            if (courseNameElement) courseNameElement.textContent = `Course: ${courses[courseKey].name}`;
            
            questions = await courseLoader.getCourseQuestions(courseKey);
            
            if (!questions || questions.length === 0) {
                throw new Error(`No questions found`);
            }
            
            // Filter valid questions
            questions = questions.filter(q => 
                q && q.question && q.options && Array.isArray(q.options) && q.answer
            );
            
            if (questions.length === 0) {
                throw new Error(`No valid questions`);
            }
            
            questions = shuffleArray([...questions]);
            
            if (!courseProgress[courseKey]) {
                courseProgress[courseKey] = {
                    attempts: 0,
                    highestScore: 0,
                    lastScore: 0,
                    completion: 0,
                    correctCompletion: 0,
                    answered: 0,
                    total: questions.length
                };
            } else {
                courseProgress[courseKey].total = questions.length;
            }
            saveCourseProgress();
            
            if (courseLoadingScreen) courseLoadingScreen.classList.add('hidden');
            if (mainContainer) mainContainer.classList.remove('hidden');
            
            currentQuestionIndex = 0;
            score = 0;
            userAnswers = [];
            
            showScreen('quiz');
            loadQuestion();
            
        } catch (error) {
            if (courseLoadingScreen) courseLoadingScreen.classList.add('hidden');
            if (mainContainer) mainContainer.classList.remove('hidden');
            
            alert(`Failed to load ${courses[courseKey].name}: ${error.message}`);
            showStartScreen();
        }
    }, 500);
}



// Show screen
function showScreen(screenName) {
    if (startScreen) startScreen.classList.toggle('hidden', screenName !== 'start');
    if (quizScreen) quizScreen.classList.toggle('hidden', screenName !== 'quiz');
    if (resultsScreen) resultsScreen.classList.toggle('hidden', screenName !== 'results');
    
    // Show/hide navbar based on screen
    const navbar = document.querySelector('.navbar');
    if (screenName === 'quiz' || screenName === 'results') {
        if (navbar) navbar.style.display = 'none';
        document.body.classList.remove('quiz-active', 'home-active');
    } else {
        if (navbar) navbar.style.display = 'flex';
        document.body.classList.remove('quiz-active');
        document.body.classList.add('home-active');
        // Refresh course display when returning to start screen
        if (screenName === 'start') {
            renderCourses();
        }
    }
}

// Show start screen
function showStartScreen() {
    saveCourseProgress();
    calculateOverallProgress();
    renderCourses();
    showScreen('start');
    updateActiveNavButton();
}

// Update active navigation button
function updateActiveNavButton() {
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    const homeBtnNav = document.getElementById('home-btn');
    if (homeBtnNav) homeBtnNav.classList.add('active');
}

// Restart course progress
function restartCourseProgress(courseKey) {
    if (!courses[courseKey]) {
        console.error(`Course not found: ${courseKey}`);
        return;
    }
    
    // Keep the total question count but reset other progress
    const currentTotal = courseProgress[courseKey]?.total || 0;
    
    if (currentTotal === 0) {
        alert(`Cannot restart ${courses[courseKey].name} - no questions available.`);
        return;
    }
    
    courseProgress[courseKey] = {
        attempts: 0,
        highestScore: 0,
        lastScore: 0,
        completion: 0,
        correctCompletion: 0,
        answered: 0,
        total: currentTotal // Preserve the total question count
    };
    
    // Remove saved progress
    localStorage.removeItem(`quizProgress_${courseKey}`);
    
    // Save updated progress
    saveCourseProgress();
    calculateOverallProgress();
    renderCourses();
    
    // Show toast notification
    showToast(`${courses[courseKey].name} progress has been reset!`);
}

// Show toast notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fas fa-check-circle"></i>${message}`;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 100);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => document.body.removeChild(toast), 300);
    }, 3000);
}

// Load Question
function loadQuestion() {
    // Validate questions array and current index
    if (!questions || !Array.isArray(questions) || questions.length === 0) {
        console.error('No questions available to load');
        alert('No questions available for this course. Please try again or select a different course.');
        showStartScreen();
        return;
    }
    
    if (currentQuestionIndex >= questions.length) {
        console.error('Question index out of bounds');
        showResults();
        return;
    }
    
    const currentQuestion = questions[currentQuestionIndex];
    
    // Validate current question structure
    if (!currentQuestion || !currentQuestion.question || !currentQuestion.options || !currentQuestion.answer) {
        console.error('Invalid question structure:', currentQuestion);
        alert('Invalid question data. Skipping to next question.');
        nextQuestion();
        return;
    }
    
    const progressPercent = ((currentQuestionIndex) / questions.length) * 100;
    if (progressBar) progressBar.style.width = `${progressPercent}%`;
    if (progressPercentage) progressPercentage.textContent = `${Math.round(progressPercent)}%`;
    
    if (currentQuestionElement) currentQuestionElement.textContent = currentQuestionIndex + 1;
    if (questionNumberElement) questionNumberElement.textContent = currentQuestionIndex + 1;
    if (totalQuestionsElement) totalQuestionsElement.textContent = questions.length;
    if (scoreElement) scoreElement.textContent = score;
    
    if (questionElement) questionElement.innerHTML = currentQuestion.question;
    
    // Hide explanation section
    const explanationSection = document.getElementById('explanation-section');
    if (explanationSection) explanationSection.classList.add('hidden');
    
    if (optionsContainer) {
        optionsContainer.innerHTML = '';
        const labels = ['A', 'B', 'C', 'D'];
        
        // Validate options array
        if (!Array.isArray(currentQuestion.options) || currentQuestion.options.length === 0) {
            console.error('Invalid options for question:', currentQuestion);
            alert('Invalid question options. Skipping to next question.');
            nextQuestion();
            return;
        }
        
        currentQuestion.options.forEach((option, index) => {
            const optionCard = document.createElement('div');
            optionCard.classList.add('option-card');
            optionCard.innerHTML = `
                <div class="option-label">${labels[index]}. </div>
                <div class="option-text">${option}</div>
            `;
            optionCard.addEventListener('click', () => selectAnswer(option, currentQuestion.answer));
            optionsContainer.appendChild(optionCard);
        });
    }
    
    if (nextBtn) {
        nextBtn.classList.add('opacity-0', 'invisible');
    }
    
    startTimer();
}

// Start the timer
function startTimer() {
    timeLeft = 15;
    updateTimerDisplay();
    
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimeExpired();
        }
    }, 1000);
}

// Update timer display
function updateTimerDisplay() {
    if (timerElement) timerElement.textContent = timeLeft;
    
    if (timerElement) {
        timerElement.classList.remove('bg-primary/20', 'text-primary', 'bg-red-500/20', 'text-red-400');
        
        if (timeLeft <= 5) {
            timerElement.classList.add('bg-red-500/20', 'text-red-400');
        } else {
            timerElement.classList.add('bg-primary/20', 'text-primary');
        }
        
        // Light theme adjustments
        if (document.body.classList.contains('light-theme')) {
            timerElement.classList.remove('bg-primary/20', 'text-primary', 'bg-red-500/20', 'text-red-400');
            if (timeLeft <= 5) {
                timerElement.classList.add('bg-red-100', 'text-red-700');
            } else {
                timerElement.classList.add('bg-blue-100', 'text-blue-700');
            }
        }
    }
}

// Stop the timer
function stopTimer() {
    clearInterval(timerInterval);
}

// Handle time expiration
function handleTimeExpired() {
    const currentQuestion = questions[currentQuestionIndex];
    
    userAnswers.push({
        question: currentQuestion.question,
        selectedOption: null,
        correctAnswer: currentQuestion.answer,
        isCorrect: false,
        timeExpired: true
    });
    
    // Auto-save progress after time expires
    saveCurrentProgress();
    
    const optionCards = document.querySelectorAll('.option-card');
    optionCards.forEach(card => {
        card.style.pointerEvents = 'none';
        const optionText = card.textContent.trim().substring(2).trim();
        if (optionText === currentQuestion.answer) {
            card.classList.add('correct');
        }
    });
    
    // Show explanation
    const explanationSection = document.getElementById('explanation-section');
    const explanationText = document.getElementById('explanation-text');
    
    if (currentQuestion.explanation && explanationSection && explanationText) {
        explanationText.textContent = currentQuestion.explanation;
        explanationSection.classList.remove('hidden');
    }
    
    if (nextBtn) nextBtn.classList.remove('opacity-0', 'invisible');
}

// Select Answer
function selectAnswer(selectedOption, correctAnswer) {
    stopTimer();
    
    const isCorrect = selectedOption === correctAnswer;
    const optionCards = document.querySelectorAll('.option-card');
    const currentQuestion = questions[currentQuestionIndex];
    
    optionCards.forEach(card => {
        card.style.pointerEvents = 'none';
    });
    
    optionCards.forEach(card => {
        const optionText = card.textContent.trim().substring(2).trim();
        
        if (optionText === correctAnswer) {
            card.classList.add('correct');
        } else if (optionText === selectedOption && !isCorrect) {
            card.classList.add('incorrect');
        }
    });
    
    if (isCorrect) {
        score++;
        if (scoreElement) scoreElement.textContent = score;
    }
    
    userAnswers.push({
        question: questions[currentQuestionIndex].question,
        selectedOption,
        correctAnswer,
        isCorrect
    });
    
    // Auto-save progress after each answer
    saveCurrentProgress();
    
    // Show explanation
    const explanationSection = document.getElementById('explanation-section');
    const explanationText = document.getElementById('explanation-text');
    
    if (currentQuestion.explanation && explanationSection && explanationText) {
        explanationText.textContent = currentQuestion.explanation;
        explanationSection.classList.remove('hidden');
    }
    
    setTimeout(() => {
        if (nextBtn) nextBtn.classList.remove('opacity-0', 'invisible');
    }, 500);
}

// Next Question
function nextQuestion() {
    stopTimer();
    
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

// Show Results
function showResults() {
    showScreen('results');
    
    const correctCount = userAnswers.filter(answer => answer.isCorrect).length;
    const totalQuestions = questions.length;
    const percentage = Math.round((correctCount / totalQuestions) * 100);
    
    if (finalScoreElement) finalScoreElement.textContent = `${correctCount}/${totalQuestions}`;
    if (correctAnswersElement) correctAnswersElement.textContent = correctCount;
    if (incorrectAnswersElement) incorrectAnswersElement.textContent = totalQuestions - correctCount;
    if (percentageScoreElement) percentageScoreElement.textContent = `${percentage}%`;
    
    updateCourseProgress(correctCount, totalQuestions);
}

// Update course progress
function updateCourseProgress(correctCount, totalQuestions) {
    const courseKey = currentCourse;
    
    courseProgress[courseKey].attempts++;
    courseProgress[courseKey].lastScore = correctCount;
    courseProgress[courseKey].answered = totalQuestions;
    courseProgress[courseKey].completion = 100;
    courseProgress[courseKey].correctCompletion = Math.round((correctCount / totalQuestions) * 100);
    
    if (correctCount > (courseProgress[courseKey].highestScore || 0)) {
        courseProgress[courseKey].highestScore = correctCount;
    }
    
    saveCourseProgress();
    calculateOverallProgress();
}

// Restart Course
function restartCourse() {
    startCourse(currentCourse, 'restart');
}

// Save current progress (called after each question)
function saveCurrentProgress() {
    const progressData = {
        currentQuestionIndex: currentQuestionIndex + 1,
        score: score,
        userAnswers: userAnswers,
        questions: questions
    };
    
    localStorage.setItem(`quizProgress_${currentCourse}`, JSON.stringify(progressData));
    
    if (!courseProgress[currentCourse]) {
        courseProgress[currentCourse] = {
            attempts: 0,
            highestScore: 0,
            lastScore: 0,
            completion: 0,
            correctCompletion: 0,
            answered: 0,
            total: questions.length
        };
    }
    
    const answeredCount = userAnswers.length;
    courseProgress[currentCourse].answered = answeredCount;
    courseProgress[currentCourse].completion = 
        (answeredCount / questions.length) * 100;
    
    // Calculate correct completion for partial progress
    const correctAnswers = userAnswers.filter(answer => answer.isCorrect).length;
    courseProgress[currentCourse].correctCompletion = 
        answeredCount > 0 ? Math.round((correctAnswers / answeredCount) * 100) : 0;
    
    saveCourseProgress();
    calculateOverallProgress();
}

// Save progress and go home
function saveProgressAndGoHome() {
    stopTimer();
    saveCurrentProgress();
    showScreen('start');
}

// Render stats chart
function renderStatsChart() {
    updateStatsCards();
    
    if (statsChart) {
        statsChart.destroy();
    }
    
    if (!statsChartCanvas) return;
    
    const ctx = statsChartCanvas.getContext('2d');
    
    const courseNames = [];
    const generalCompletion = [];
    const correctCompletion = [];
    
    Object.keys(courseProgress).forEach(courseKey => {
        if (courses[courseKey]) {
            const course = courses[courseKey];
            const progress = courseProgress[courseKey];
            courseNames.push(course.name);
            generalCompletion.push(progress.completion || 0);
            correctCompletion.push(progress.correctCompletion || 0);
        }
    });
    
    statsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: courseNames,
            datasets: [
                {
                    label: 'Progress',
                    data: generalCompletion,
                    backgroundColor: 'rgba(59, 130, 246, 0.8)',
                    borderColor: 'rgba(59, 130, 246, 1)',
                    borderWidth: 2,
                    borderRadius: 4
                },
                {
                    label: 'Accuracy',
                    data: correctCompletion,
                    backgroundColor: 'rgba(16, 185, 129, 0.8)',
                    borderColor: 'rgba(16, 185, 129, 1)',
                    borderWidth: 2,
                    borderRadius: 4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        usePointStyle: true,
                        padding: 20
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#e2e8f0',
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                },
                y: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#e2e8f0'
                    }
                }
            }
        }
    });
}

// Update stats cards
function updateStatsCards() {
    const totalCourses = Object.keys(courses).length;
    let completedCourses = 0;
    let inProgressCourses = 0;
    let totalAccuracy = 0;
    let coursesWithProgress = 0;
    
    Object.keys(courseProgress).forEach(courseKey => {
        const progress = courseProgress[courseKey];
        if (progress.completion >= 100) {
            completedCourses++;
        } else if (progress.completion > 0) {
            inProgressCourses++;
        }
        
        if (progress.answered > 0) {
            totalAccuracy += progress.correctCompletion;
            coursesWithProgress++;
        }
    });
    
    const avgAccuracy = coursesWithProgress > 0 ? Math.round(totalAccuracy / coursesWithProgress) : 0;
    
    document.getElementById('total-courses').textContent = totalCourses;
    document.getElementById('completed-courses').textContent = completedCourses;
    document.getElementById('in-progress-courses').textContent = inProgressCourses;
    document.getElementById('overall-accuracy').textContent = avgAccuracy + '%';
}



// Filter courses based on search input
function filterCourses() {
    const searchTerm = courseSearchInput.value.toLowerCase();
    const courseCards = document.querySelectorAll('.course-card');
    
    courseCards.forEach(card => {
        const courseName = card.querySelector('h3').textContent.toLowerCase();
        if (courseName.includes(searchTerm)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Filter courses based on search input
function filterCourses() {
    const searchTerm = courseSearchInput.value.toLowerCase();
    const courseCards = document.querySelectorAll('.course-card');
    
    courseCards.forEach(card => {
        const courseName = card.querySelector('h3').textContent.toLowerCase();
        if (courseName.includes(searchTerm)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Shuffle array function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Start from welcome screen
function startFromWelcome() {
    console.log('Start button clicked');
    
    const welcomeEl = document.getElementById('welcome-screen');
    const loadingEl = document.getElementById('loading-screen');
    const mainEl = document.getElementById('main-container');
    const navbar = document.querySelector('.navbar');
    
    if (welcomeEl) {
        welcomeEl.classList.add('hidden');
        console.log('Welcome screen hidden');
    }
    
    if (loadingEl) {
        loadingEl.classList.remove('hidden');
        console.log('Loading screen shown');
    }
    
    // Reduced timeout from 2000ms to 500ms for faster transition
    setTimeout(async () => {
        if (loadingEl) {
            loadingEl.classList.add('hidden');
            console.log('Loading screen hidden');
        }
        
        if (mainEl) {
            mainEl.classList.remove('hidden');
            console.log('Main container shown');
        }
        
        if (navbar) {
            navbar.classList.remove('hidden');
            console.log('Navbar shown');
        }
        
        await initAcademy();
        console.log('Academy initialized');
    }, 500);
}

// Update a single course card
function updateCourseCard(courseKey) {
    if (!coursesContainer) return;
    
    const course = courses[courseKey];
    const progress = courseProgress[courseKey];
    
    // Find the existing card
    const existingCard = Array.from(coursesContainer.children).find(card => {
        const cardTitle = card.querySelector('h3')?.textContent;
        return cardTitle === course.name;
    });
    
    if (existingCard) {
        const questionCount = progress.total || 0;
        const questionText = questionCount === 1 ? 'question' : 'questions';
        const courseStatus = questionCount > 0 ? 'Available' : 'No questions available';
        const hasProgress = progress.answered > 0;
        const isCompleted = progress.completion >= 100;
        
        // Update question count
        const questionCountEl = existingCard.querySelector('.text-xs.text-gray-500');
        if (questionCountEl) questionCountEl.textContent = `${questionCount} ${questionText}`;
        
        // Update status
        const statusEl = existingCard.querySelector('.text-xs.text-green-400, .text-xs.text-red-400');
        if (statusEl) {
            statusEl.textContent = courseStatus;
            statusEl.className = `text-xs ${questionCount > 0 ? 'text-green-400' : 'text-red-400'} mb-1`;
        }
        
        // Update buttons
        const actionsContainer = existingCard.querySelector('.course-actions');
        if (actionsContainer) {
            actionsContainer.innerHTML = `
                ${questionCount === 0 ? `
                    <button class="course-btn btn-disabled" disabled>
                        <i class="fas fa-exclamation-triangle mr-1"></i> No Questions
                    </button>
                ` : isCompleted ? `
                    <button class="course-btn btn-restart" data-action="restart">
                        <i class="fas fa-redo mr-1"></i> Restart
                    </button>
                ` : hasProgress ? `
                    <button class="course-btn btn-continue" data-action="continue">
                        <i class="fas fa-play mr-1"></i> Continue
                    </button>
                    <button class="course-btn btn-restart" data-action="restart">
                        <i class="fas fa-redo mr-1"></i> Restart
                    </button>
                ` : `
                    <button class="course-btn btn-start" data-action="start">
                        <i class="fas fa-play mr-1"></i> Start
                    </button>
                `}
            `;
            
            // Re-attach event listeners
            actionsContainer.querySelectorAll('.course-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const action = btn.dataset.action;
                    
                    if (action === 'restart') {
                        if (questionCount > 0) {
                            restartCourseProgress(courseKey);
                        } else {
                            alert(`Cannot restart ${course.name} - no questions available.`);
                        }
                    } else {
                        if (questionCount > 0) {
                            startCourse(courseKey, action);
                        } else {
                            alert(`Cannot start ${course.name} - no questions available.\nPlease check that courses/${courseKey}.js exists and contains valid questions.`);
                        }
                    }
                });
            });
        }
    }
}

// Initialize academy on load
document.addEventListener('DOMContentLoaded', () => {
    // Check if we should skip welcome screen
    if (window.location.hash === '#skip-welcome') {
        // Skip welcome screen and go directly to main app
        if (welcomeScreen) welcomeScreen.classList.add('hidden');
        if (mainContainer) mainContainer.classList.remove('hidden');
        const navbar = document.querySelector('.navbar');
        if (navbar) navbar.classList.remove('hidden');
        initAcademy();
        // Clear the hash
        history.replaceState(null, null, ' ');
    } else {
        // Start with welcome screen visible
        if (welcomeScreen) {
            startSlideshow();
        }
    }
    
    // Ensure start button event listener is attached
    const startBtn = document.getElementById('start-quiz-btn');
    if (startBtn) {
        startBtn.addEventListener('click', startFromWelcome);
        console.log('Start button event listener attached');
    } else {
        console.error('Start button not found');
    }
});

// Slideshow functionality
function startSlideshow() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 3000);
}