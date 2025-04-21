const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit-btn');
const resultElement = document.getElementById('result');

const quizQuestions = [
    {
        question: "What is the IUPAC name for the following compound? A five-carbon chain with a methyl group attached to the second carbon?",
        options: ["2-Methylpentane", "2-Ethylbutane", "3-Methylpentane"],
        correctAnswer: "2-Methylpentane"
    },
    {
        question: "What is the major product formed when 1-butene reacts with HBr?",
        options: ["1-Bromobutane", "2-Bromobutane", "1-Bromo-2-methylpropane", "2-Bromo-2-methylpropane"],
        correctAnswer: "2-Bromobutane"
    },
    {
        question: "Which of the following describes cis-1,2-dichloroethene?",
        options: [
            "The two chlorine atoms are on opposite sides of the double bond.",
            "The two chlorine atoms are on the same side of the double bond.",
            "One chlorine atom is on each carbon of the double bond, and the hydrogens are on opposite sides.",
            "One chlorine atom is on each carbon of the double bond, and the hydrogens are on the same side"
        ],
        correctAnswer: "The two chlorine atoms are on the same side of the double bond."
    },
    {
        question: "What type of reaction is the following: Ethyl bromide reacts with sodium hydroxide to form ethanol and sodium bromide.",
        options: ["SN1", "SN2", "E1", "E2"],
        correctAnswer: "SN2"
    },
    {
        question: "Which of the following is a strong acid?",
        options: ["Acetic acid", "Hydrochloric acid", "Citric acid", "Carbonic acid"],
        correctAnswer: "Hydrochloric acid"
    },
    {
        question: "What is the reagent needed to convert a carboxylic acid to an amide?",
        options: ["An alcohol and acid catalyst", "An amine and heat", "A Grignard reagent", "Lithium aluminum hydride"],
        correctAnswer: "An amine and heat"
    },
    {
        question: "Which of the following carbocations is the most stable?",
        options: ["A primary carbocation", "A secondary carbocation", "A tertiary carbocation", "A methyl carbocation"],
        correctAnswer: "A tertiary carbocation"
    },
    {
        question: "What is the product of the reaction between benzene and a mixture of concentrated sulfuric acid and nitric acid?",
        options: ["Toluene", "Nitrobenzene", "Benzenesulfonic acid", "Chlorobenzene"],
        correctAnswer: "Nitrobenzene"
    },
    {
        question: "What is the name of the functional group -CHO?",
        options: ["Ketone", "Aldehyde", "Carboxylic acid", "Ester"],
        correctAnswer: "Aldehyde"
    },
    {
        question: "What are the two major classes of isomers?",
        options: ["Enantiomers and diastereomers", "Structural isomers and stereoisomers", "Cis and trans isomers", "Conformational and configurational isomers"],
        correctAnswer: "Structural isomers and stereoisomers"
    },
    {
        question: "What is the key difference between enantiomers and diastereomers?",
        options: ["Enantiomers are mirror images, diastereomers are not.", "Diastereomers are mirror images, enantiomers are not.", "Enantiomers have the same physical properties, diastereomers do not.", "Diastereomers have the same physical properties, enantiomers do not."],
        correctAnswer: "Enantiomers are mirror images, diastereomers are not."
    },
    {
        question: "What is the general formula for an alkane?",
        options: ["CnH2n", "CnH2n+2", "CnH2n-2", "CnHn"],
        correctAnswer: "CnH2n+2"
    },
    {
        question: "What is the name of the process by which long-chain alkanes are broken down into shorter, more useful hydrocarbons?",
        options: ["Hydrogenation", "Cracking", "Polymerization", "Isomerization"],
        correctAnswer: "Cracking"
    },
    {
        question: "What is the meaning of 'chiral'?",
        options: ["Achiral", "Superimposable on its mirror image", "Non-superimposable on its mirror image", "Optically inactive"],
        correctAnswer: "Non-superimposable on its mirror image"
    },
    {
        question: "What is the role of a catalyst in a chemical reaction?",
        options: ["Increases the activation energy", "Decreases the activation energy", "Is consumed in the reaction", "Shifts the equilibrium"],
        correctAnswer: "Decreases the activation energy"
    },
    {
        question: "What is the difference between a nucleophile and an electrophile?",
        options: ["Nucleophiles are positively charged, electrophiles are negatively charged.", "Nucleophiles are negatively charged, electrophiles are positively charged.", "Nucleophiles donate electrons, electrophiles accept electrons.", "Nucleophiles accept electrons, electrophiles donate electrons."],
        correctAnswer: "Nucleophiles donate electrons, electrophiles accept electrons."
    },
];

// ... (rest of your JavaScript code remains the same)

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionData = quizQuestions[currentQuestion];
    questionElement.textContent = questionData.question;

    optionsElement.innerHTML = ''; // Clear previous options
    questionData.options.forEach(option => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'answer';
        input.value = option;
        label.textContent = option;
        label.prepend(input); // Add input before the text

        optionsElement.appendChild(label);
    });
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');

    if (selectedOption) {
        const userAnswer = selectedOption.value;
        if (userAnswer === quizQuestions[currentQuestion].correctAnswer) {
            score++;
        }

        currentQuestion++;
        if (currentQuestion < quizQuestions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    } else {
        alert("Please select an answer.");
    }
}

function showResult() {
    quizContainer.innerHTML = `<h2>Quiz Finished!</h2><p>Your score: ${score} out of ${quizQuestions.length}</p>`;
}

submitButton.addEventListener('click', checkAnswer);

loadQuestion(); // Load the first question