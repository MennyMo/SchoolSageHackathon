document.addEventListener("DOMContentLoaded", function () {
    const startGameBtn = document.getElementById("start-game-btn");
    const form = document.getElementById("quiz-form");
    const questionsContainer = document.getElementById("questions-container");
    const resultContainer = document.getElementById("result-container");
    const nextBtn = document.getElementById("next-btn");
    const submitBtn = document.getElementById("submit-btn");

    const questionsData = {
        "questions": [
          {
            "question": "Question 1: If you could invent a new gadget, what would it be?",
            "options": [
              "A. A solar-powered phone charger for sustainable energy",
              "B. A portable medical device for diagnosing illnesses",
              "C. A budgeting app to manage finances effectively",
              "D. A virtual reality storytelling platform for immersive experiences"
            ]
          
          },
          {
            "question": "Question 2: What's your favorite subject in school?",
            "options": [
              "A. Mathematics or Physics",
              "B. Biology or Chemistry",
              "C. Economics or Commerce",
              "D. Literature or Fine Arts"
            ]
          },
          {
            "question": "Question 3: What's your dream job?",
            "options": [
              "A. Engineer designing eco-friendly infrastructure",
              "B. Doctor saving lives and improving health outcomes",
              "C. Entrepreneur running a successful business venture",
              "D. Artist expressing creativity through various mediums"
            ]
          },
          {
            "question": "Question 4: Which extracurricular activity interests you the most?",
            "options": [
              "A. Robotics club or science competitions",
              "B. Volunteering at hospitals or health awareness campaigns",
              "C. Business club or financial literacy workshops",
              "D. Drama club or art exhibitions"
            ]
          },
          {
            "question": "Question 5: If you could travel to any country, where would you go?",
            "options": [
              "A. Japan",
              "B. Switzerland",
              "C. United States",
              "D. France"
            ]
          },
          {
            "question": "Question 6: What's your favorite hobby?",
            "options": [
              "A. Building model airplanes or robots",
              "B. Reading medical journals or volunteering at clinics",
              "C. Managing finances or investing in stocks",
              "D. Writing stories or creating visual art"
            ]
          },
          {
            "question": "Question 7: Which historical figure inspires you the most?",
            "options": [
              "A. Nikola Tesla",
              "B. Florence Nightingale",
              "C. Steve Jobs",
              "D. Leonardo da Vinci"
            ]
          },
          {
            "question": "Question 8: What's your favorite Nigerian food?",
            "options": [
              "A. Jollof rice and grilled plantain",
              "B. Egusi soup with pounded yam",
              "C. Moi moi and fried plantain",
              "D. Akara and pap (ogi)"
            ]
          },
          {
            "question": "Question 9: If you could choose a superpower, what would it be?",
            "options": [
              "A. Ability to manipulate technology with your mind",
              "B. Healing powers to cure any illness",
              "C. Financial intuition to make profitable investments",
              "D. Creative imagination to bring ideas to life"
            ]
          },
          {
            "question": "Question 10: What's your favorite movie genre?",
            "options": [
              "A. Action-packed blockbusters with thrilling stunts",
              "B. Emotional dramas exploring human relationships",
              "C. Inspirational stories of business success and resilience",
              "D. Artistic films showcasing culture and heritage"
            ]
          },
          {
            "question": "Question 11: If you could redesign your school, what would you add?",
            "options": [
              "A. Solar panels for renewable energy",
              "B. Fully equipped medical clinic for student health",
              "C. Entrepreneurship hub for student startups",
              "D. Art studio for creative expression"
            ]
          },
          {
            "question": "Question 12: What's your favorite Nigerian music genre?",
            "options": [
              "A. Afrobeat and hip-hop",
              "B. Highlife and juju",
              "C. Gospel and worship",
              "D. Fuji and traditional folklore"
            ]
          },
          {
            "question": "Question 13: If you could solve one social issue in Nigeria, what would it be?",
            "options": [
              "A. Infrastructure development and urban planning",
              "B. Access to quality healthcare for all Nigerians",
              "C. Youth unemployment and economic empowerment",
              "D. Preservation of Nigerian cultural heritage and arts"
            ]
          },
          {
            "question": "Question 14: What motivates you to succeed academically and professionally?",
            "options": [
              "A. Impacting the world through innovation and technology",
              "B. Saving lives and making a difference in healthcare",
              "C. Building wealth and financial security for yourself and others",
              "D. Expressing yourself creatively and leaving a legacy through art"
            ]
          }
        ]
      };


    let currentQuestionIndex = 0;
    let formData = {};

    startGameBtn.addEventListener("click", function () {
        startGameBtn.style.display = "none";
        form.style.display = "block";
        displayQuestion(currentQuestionIndex);
    });

    function displayQuestion(index) {
        questionsContainer.innerHTML = "";
        const questionData = questionsData.questions[index];
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `
            <p>${questionData.question}</p>
        `;
        questionData.options.forEach(option => {
            const label = document.createElement('label');
            label.innerHTML = `<input type="radio" name="question${index}" value="${option.charAt(0)}">${option}`;
            questionDiv.appendChild(label);
        });
        questionsContainer.appendChild(questionDiv);

        if (index < questionsData.questions.length - 1) {
            nextBtn.style.display = "block";
            submitBtn.style.display = "none";
        } else {
            nextBtn.style.display = "none";
            submitBtn.style.display = "block";
        }
    }

    nextBtn.addEventListener("click", function (e) {
        e.preventDefault();
        saveFormData(currentQuestionIndex);
        currentQuestionIndex++;
        displayQuestion(currentQuestionIndex);
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        saveFormData(currentQuestionIndex);
        showResult();
    });

    function saveFormData(index) {
        const inputs = form.querySelectorAll(`input[name='question${index}']:checked`);
        if (inputs.length > 0) {
            formData[`question${index}`] = inputs[0].value;
        }
    }

    function showResult() {
        const percentages = calculatePercentages(formData);
        let result = determineResult(percentages);
        resultContainer.innerHTML = getResultMessage(result);
        resultContainer.style.display = "block";
    }

    function calculatePercentages(formData) {
        const totalQuestions = Object.keys(formData).length;
        const percentages = {
            A: 0,
            B: 0,
            C: 0,
            D: 0
        };

        for (const [question, value] of Object.entries(formData)) {
            const option = value;
            percentages[option]++;
        }

        for (const option in percentages) {
            percentages[option] = (percentages[option] / totalQuestions) * 100;
        }

        return percentages;
    }

    function determineResult(percentages) {
        let result = "";
        Object.entries(percentages).forEach(([option, percentage]) => {
            if (percentage >= 60) {
                if (result === "") {
                    result = option;
                } else {
                    result = "mixed";
                }
            }
        });
        return result;
    }

    function getResultMessage(result) {
        switch (result) {
            case "A":
                return "You have a knack for problem-solving and innovation, making you well-suited for Engineering disciplines such as Mechanical Engineering, Electrical/Electronics Engineering, or Civil Engineering. Use our 'Explore Course' feature to find out more!";
            case "B":
                return "Your passion for helping others and interest in healthcare suggest that you would thrive in Medical Sciences fields such as Medicine, Pharmacy, or Nursing. Use our 'Explore Course' feature to find out more!";
            case "C":
                return "Your entrepreneurial spirit and interest in finance make Business related courses such as Accounting, Finance, or Business Administration a great fit for you. Use our 'Explore Course' feature to find out more!";
            case "D":
                return "Your creativity and appreciation for culture and heritage point towards Arts courses such as Fine and Applied Arts, Theatre Arts/Drama, or Mass Communication. Use our 'Explore Course' feature to find out more!";
            case "mixed":
                return "You seem to be drawn to 2 courses. We will advise you to speak to one of our counselors";
            default:
                return "Unknown result";
        }
    }
});
