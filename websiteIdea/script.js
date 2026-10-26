let isSurveySubmitted = false;

// Active navigation highlight
function setActiveNav(element) {
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
}

// Interactive survey selection handler
function selectSurveyOption(selectedBtn) {
    if (isSurveySubmitted) return;

    // Deselect all options
    const buttons = document.querySelectorAll('.survey-btn');
    buttons.forEach(btn => btn.classList.remove('selected'));

    // Select the clicked option
    selectedBtn.classList.add('selected');

    // Enable submit button
    const submitBtn = document.getElementById('submit-survey-btn');
    submitBtn.disabled = false;
    submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
}

// Survey submit logic
function submitSurveyAnswer() {
    const selectedOption = document.querySelector('.survey-btn.selected');
    if (!selectedOption || isSurveySubmitted) return;

    isSurveySubmitted = true;

    // Lock all survey options
    const buttons = document.querySelectorAll('.survey-btn');
    buttons.forEach(btn => {
        btn.disabled = true;
        btn.classList.add('cursor-not-allowed');
        if (!btn.classList.contains('selected')) {
            btn.classList.add('opacity-50');
        }
    });

    // Hide submit button
    const submitBtn = document.getElementById('submit-survey-btn');
    submitBtn.classList.add('hidden');

    // Show feedback box
    const feedbackBox = document.getElementById('survey-feedback');
    feedbackBox.textContent = "Thanks for sharing! We can help take that burden off your shoulders.";
    feedbackBox.classList.remove('hidden');
}

// Contact form handler
function handleFormSubmit(event) {
    event.preventDefault();
    
    const successMsg = document.getElementById('form-success-msg');
    const errorMsg = document.getElementById('form-error-msg');
    
    errorMsg.classList.add('hidden');
    successMsg.classList.remove('hidden');
    
    // Clear form inputs
    document.getElementById('booking-form').reset();
    
    // Smooth scroll to confirmation message
    successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}