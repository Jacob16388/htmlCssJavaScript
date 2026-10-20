let isSurveySubmitted = false;

// Set active state for navigation links
function setActiveNav(element) {
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
}

// Survey Option Selection Handler
function selectSurveyOption(selectedBtn) {
    // Stop interaction if answer is already submitted & locked
    if (isSurveySubmitted) return;

    // Remove selected state from all options
    const buttons = document.querySelectorAll('.survey-btn');
    buttons.forEach(btn => btn.classList.remove('selected'));

    // Apply selected state to clicked button
    selectedBtn.classList.add('selected');

    // Enable the submit button
    const submitBtn = document.getElementById('submit-survey-btn');
    submitBtn.disabled = false;
    submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
}

// Submit Survey Answer & Hide Submit Button
function submitSurveyAnswer() {
    const selectedOption = document.querySelector('.survey-btn.selected');
    if (!selectedOption || isSurveySubmitted) return;

    isSurveySubmitted = true;

    // Disable all survey buttons from further clicks
    const buttons = document.querySelectorAll('.survey-btn');
    buttons.forEach(btn => {
        btn.disabled = true;
        btn.classList.add('cursor-not-allowed');
        if (!btn.classList.contains('selected')) {
            btn.classList.add('opacity-50');
        }
    });

    // Hide the submit button completely after submission
    const submitBtn = document.getElementById('submit-survey-btn');
    submitBtn.classList.add('hidden');

    // Display friendly feedback message
    const feedbackBox = document.getElementById('survey-feedback');
    feedbackBox.textContent = "Thanks for sharing! We've saved your response.";
    feedbackBox.classList.remove('hidden');
}

// Form Submit Handler (prevents reload and displays clear feedback)
function handleFormSubmit(event) {
    event.preventDefault();
    const successMsg = document.getElementById('form-success-msg');
    successMsg.classList.remove('hidden');
    
    // Clear inputs
    document.getElementById('booking-form').reset();
    
    // Auto scroll to feedback message
    successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}