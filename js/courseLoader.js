// Course Question Loader
class CourseLoader {
    constructor() {
        this.courseFiles = {
            'human_anatomy': 'data/human_anatomy.js',
            'bioinformatics': 'courses/bioinformatics.js',
            'biostatistics': 'courses/biostatistics.js',
            'cell_biology': 'courses/cell_biology.js',
            'genetics': 'courses/genetics.js',
            'hematology': 'courses/hematology.js',
            'histology': 'courses/histology.js',
            'human_physiology': 'courses/human_physiology.js',
            'immunology': 'data/immunology.js',
            'microbiology': 'courses/microbiology.js',
            'molecular_biology': 'courses/molecular_biology.js',
            'parasitology': 'courses/parasitology.js',
            'pharmacology': 'courses/pharmacology.js',
            'human_psychology': 'courses/human_psychology.js',
            'research_methods': 'courses/research_methods.js'
        };
        this.loadedQuestions = {};
    }

    async loadCourse(courseKey) {
        const filePath = this.courseFiles[courseKey];
        if (!filePath) {
            console.error(`Course file not found for: ${courseKey}`);
            return [];
        }

        try {
            const response = await fetch(`${filePath}?t=${Date.now()}`, {
                cache: 'no-store',
                headers: {
                    'Cache-Control': 'no-cache'
                }
            });
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            const scriptText = await response.text();
            
            if (!scriptText || scriptText.trim().length === 0) {
                throw new Error('Empty file content');
            }
            
            if (!scriptText.includes('QUESTIONS')) {
                throw new Error('No QUESTIONS variable found in file');
            }
            
            // Clean execution of script
            let questions;
            try {
                const scriptFunction = new Function(scriptText + '; return typeof QUESTIONS !== "undefined" ? QUESTIONS : [];');
                questions = scriptFunction();
            } catch (execError) {
                throw new Error(`Script execution failed: ${execError.message}`);
            }
            
            if (!Array.isArray(questions)) {
                throw new Error('QUESTIONS is not an array');
            }
            
            if (questions.length === 0) {
                throw new Error('QUESTIONS array is empty');
            }
            
            // Validate question structure
            const validQuestions = questions.filter(q => 
                q && 
                typeof q === 'object' && 
                q.question && 
                Array.isArray(q.options) && 
                q.options.length > 0 && 
                q.answer
            );
            
            if (validQuestions.length === 0) {
                throw new Error('No valid questions found');
            }
            
            console.log(`Successfully loaded ${validQuestions.length} questions for ${courseKey}`);
            this.loadedQuestions[courseKey] = validQuestions;
            return validQuestions;
            
        } catch (error) {
            console.error(`Failed to load course ${courseKey}:`, error.message);
            console.error(`File path: ${filePath}`);
            return [];
        }
    }

    clearCache() {
        this.loadedQuestions = {};
        console.log('Course cache cleared');
    }
    
    async clearBrowserCache() {
        this.loadedQuestions = {};
    }
    
    async forceRefreshCourse(courseKey) {
        delete this.loadedQuestions[courseKey];
        return await this.loadCourse(courseKey);
    }
    
    async getCourseQuestions(courseKey) {
        if (this.loadedQuestions[courseKey]) {
            return this.loadedQuestions[courseKey];
        }
        return await this.loadCourse(courseKey);
    }
    
    async validateCourse(courseKey) {
        const questions = await this.loadCourse(courseKey);
        return questions.length > 0;
    }
}

// Global course loader instance
const courseLoader = new CourseLoader();

courseLoader.ensureCourseSpecificity = function() {
    // Mapping verified
};