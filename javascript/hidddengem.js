// ============================
// Hidden Gems Data with 360° images
// ============================
const hiddenGemsData = {
  Delhi: [
    { name: "Sunset at Hauz Khas Fort", img: "../assets/videos/Hauz-Khas.webp" },
    {
      name: "Street art walk in Lodhi Colony",
      img: "../assets/images/lodhi-garden.jpg",
    },
    { name: "Visit Khari Baoli", img: "../assets/images/spice.jpg" },
  ],
  Jaipur: [
    {
      name: "Stepwell photography at Panna Meena ka Kund",
      img: "../assets/images/kund.jpg",
    },
    { name: "Explore Chand Pol Bazaar", img: "../assets/360/chand_pol.jpg" },
    { name: "Cycling tour through old city lanes", img: "" },
  ],
  Kerala: [
    { name: "Kayaking in Alleppey backwaters", img: "" },
    { name: "Visit local spice plantations", img: "" },
    { name: "Explore village life in Wayanad", img: "" },
  ],
  Agra: [
    { name: "Sunrise at Mehtab Bagh", img: "" },
    { name: "Explore old bazaars near Agra Fort", img: "" },
    { name: "Visit quiet Mughal gardens", img: "" },
  ],
  Varanasi: [
    { name: "Boat ride at dawn on the Ganges", img: "" },
    { name: "Hidden alley street food tour", img: "" },
    { name: "Visit lesser-known temples", img: "" },
  ],
  Amritsar: [
    { name: "Golden Temple at sunrise", img: "" },
    { name: "Try Amritsari kulcha street tour", img: "" },
    { name: "Explore Wagah border ceremonies", img: "" },
  ],
  Leh: [
    { name: "Hemis monastery visit", img: "" },
    { name: "Pangong lake sunset", img: "" },
    { name: "Nubra valley camel ride", img: "" },
  ],
  Manali: [
    { name: "Solang Valley adventure sports", img: "" },
    { name: "Hidimba temple walk", img: "" },
    { name: "Rohtang pass sightseeing", img: "" },
  ],
  Shimla: [
    { name: "Mall Road shopping", img: "" },
    { name: "Jakhoo temple hike", img: "" },
    { name: "Christ church visit", img: "" },
  ],
  Chandigarh: [
    { name: "Rock Garden exploration", img: "" },
    { name: "Sukhna Lake boating", img: "" },
    { name: "Secret gardens in the city", img: "" },
  ],
  Bengaluru: [
    { name: "Lalbagh botanical garden", img: "" },
    { name: "Bangalore Palace tour", img: "" },
    { name: "Local street art spots", img: "" },
  ],
  Chennai: [
    { name: "Marina Beach sunrise", img: "" },
    { name: "Kapaleeshwarar temple visit", img: "" },
    { name: "Try Chettinad cuisine in alleys", img: "" },
  ],
  Mysore: [
    { name: "Mysore Palace evening view", img: "" },
    { name: "Chamundi hill trek", img: "" },
    { name: "Explore local markets", img: "" },
  ],
  Kochi: [
    { name: "Fort Kochi heritage walk", img: "" },
    { name: "Chinese fishing nets visit", img: "" },
    { name: "Spice market exploration", img: "" },
  ],
  Thiruvananthapuram: [
    { name: "Kovalam beach sunrise", img: "" },
    { name: "Padmanabhaswamy temple visit", img: "" },
    { name: "Try local seafood dishes", img: "" },
  ],
  Munnar: [
    { name: "Tea garden trek", img: "" },
    { name: "Eravikulam National Park visit", img: "" },
    { name: "Hilltop viewpoints", img: "" },
  ],
  Wayanad: [
    { name: "Edakkal Caves exploration", img: "" },
    { name: "Wildlife sanctuary visit", img: "" },
    { name: "Local tribal village tour", img: "" },
  ],
};

// ============================
// Form submission
// ============================
document
  .getElementById("hiddenGemsForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const cityInput = document.getElementById("cityInput").value.trim();
    const displayDiv = document.getElementById("hiddenGemsDisplay");
    const gemsList = document.getElementById("hiddenGemsList");

    // Case-insensitive match
    const matchedCity = Object.keys(hiddenGemsData).find(
      (c) => c.toLowerCase() === cityInput.toLowerCase()
    );

    gemsList.innerHTML = "";

    if (matchedCity) {
      hiddenGemsData[matchedCity].forEach((gem) => {
        const li = document.createElement("li");
        li.className = "gem-item";
        li.textContent = gem.name;
        if (gem.img) li.setAttribute("data-img", gem.img);
        gemsList.appendChild(li);
      });
    } else {
      gemsList.innerHTML = `<li>No hidden gems found for "${cityInput}"</li>`;
    }

    displayDiv.style.display = "block";
  });
// ============================
// Quiz Data
// ============================
const quizQuestions = {
  "Sunset at Hauz Khas Fort": [
    {
      q: 'What does the name "Hauz Khas" literally mean in Persian?',
      a: "Royal Tank",
      options: ["Royal Garden", "Royal Tank", "Sacred Lake", "Ancient Fort"],
    },
    {
      q: "Which ruler built the original water reservoir (Hauz-e-Alai) in Hauz Khas?",
      a: "Alauddin Khilji",
      options: ["Firoz Shah Tughlaq", "Akbar", "Alauddin Khilji", "Shah Jahan"],
    },
    {
      q: "What was the primary purpose of the Hauz Khas reservoir during the medieval period?",
      a: "Supplying water to Siri Fort",
      options: [
        "Religious ceremonies",
        "Supplying water to Siri Fort",
        "Hosting royal feasts",
        "Military training",
      ],
    },
    {
      q: "Which educational institution was established by Firoz Shah Tughlaq in the Hauz Khas complex?",
      a: "Islamic Seminary (Madrasa)",
      options: [
        "Hindu College",
        "Islamic Seminary (Madrasa)",
        "Buddhist Monastery",
        "Christian Mission School",
      ],
    },
    {
      q: "Which of the following is a unique cultural feature of Hauz Khas Village today?",
      a: "Art galleries and boutiques",
      options: [
        "Traditional silk weaving workshops",
        "Ancient Sanskrit libraries",
        "Art galleries and boutiques",
        "Buddhist meditation centers",
      ],
    },
  ],

  "Street art walk in Lodhi Colony": [
    {
      q: "What is the Lodhi Art District best known for?",
      a: "India’s first open-air public art gallery with murals",
      options: [
        "Colonial bungalows",
        "India’s first open-air public art gallery with murals",
        "Food markets",
        "Ancient temples",
      ],
    },
    {
      q: "Which organization played a major role in initiating and curating the Lodhi Art District murals?",
      a: "St+Art India Foundation",
      options: [
        "National Gallery of Modern Art",
        "St+Art India Foundation",
        "Archaeological Survey of India",
        "Delhi Street Photographers’ Guild",
      ],
    },
    {
      q: "Which of these themes is most commonly explored by artists in the murals of Lodhi Art District?",
      a: "Social, cultural, and environmental issues",
      options: [
        "Bollywood cinema",
        "Cricket and sports",
        "Social, cultural, and environmental issues",
        "Ancient Indian scriptures",
      ],
    },
    {
      q: "A unique interactive mural in the Lodhi Art District, recognized for using Augmented Reality (AR), is called:",
      a: "Mere Rang Mein",
      options: [
        "The Wall of Wishes",
        "Mere Rang Mein",
        "Rhythm of Delhi",
        "The Green Canopy",
      ],
    },
    {
      q: "How does visiting the Lodhi Art District typically differ from traditional gallery experiences?",
      a: "Murals are painted outdoors on residential buildings, free for public viewing",
      options: [
        "Requires a ticket purchase",
        "Artworks are displayed in a museum",
        "Murals are painted outdoors on residential buildings, free for public viewing",
        "Only local artists contribute works",
      ],
    },
  ],

  "Visit Khari Baoli": [
    {
      q: "What is Khari Baoli most famous for?",
      a: "Asia’s largest wholesale spice market",
      options: [
        "Textile trading",
        "Asia’s largest wholesale spice market",
        "Gold and jewelry shops",
        "Book bazaars",
      ],
    },
    {
      q: "The name “Khari Baoli” refers originally to what kind of structure?",
      a: "Salty stepwell (baoli)",
      options: [
        "Watchtower",
        "Ornamental gateway",
        "Salty stepwell (baoli)",
        "Private garden",
      ],
    },
    {
      q: "Which landmark is located near the main Khari Baoli market?",
      a: "Fatehpuri Masjid",
      options: [
        "India Gate",
        "Lotus Temple",
        "Fatehpuri Masjid",
        "Qutub Minar",
      ],
    },
    {
      q: "Many shops in Khari Baoli have been run by:",
      a: "Centuries-old family businesses",
      options: [
        "Only recent entrepreneurs",
        "Centuries-old family businesses",
        "Foreign companies",
        "Government-owned chains",
      ],
    },
    {
      q: "Which sensory experience is NOT commonly associated with a visit to Khari Baoli?",
      a: "Listening to live street jazz bands",
      options: [
        "Smelling strong aromas of spices",
        "Seeing vibrant color displays",
        "Listening to live street jazz bands",
        "Experiencing the hustle of a crowded bazaar",
      ],
    },
  ],
};

// ============================
// Form Submission
// ============================
const displayDiv = document.getElementById("hiddenGemsDisplay");
const gemsList = document.getElementById("hiddenGemsList");

document
  .getElementById("hiddenGemsForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const cityInput = document.getElementById("cityInput").value.trim();

    const matchedCity = Object.keys(hiddenGemsData).find(
      (c) => c.toLowerCase() === cityInput.toLowerCase()
    );

    gemsList.innerHTML = "";

    if (matchedCity) {
      hiddenGemsData[matchedCity].forEach((gem) => {
        const li = document.createElement("li");
        li.className = "gem-item";
        li.textContent = gem.name;
        if (gem.img) li.setAttribute("data-img", gem.img);

        // Add Quiz Button
        const quizBtn = document.createElement("button");
        quizBtn.textContent = "Take Quiz";
        quizBtn.className = "quiz-btn-inline";
        quizBtn.onclick = (e) => {
          e.stopPropagation();
          startQuiz(gem.name);
        };
        li.appendChild(quizBtn);

        gemsList.appendChild(li);
      });
    } else {
      gemsList.innerHTML = `<li>No hidden gems found for "${cityInput}"</li>`;
    }

    displayDiv.style.display = "block";
  });

// ============================
// 360° Viewer functionality
// ============================
const viewerContainer = document.getElementById("viewerContainer");
const sky = document.getElementById("sky");
const closeBtn = document.getElementById("closeViewer");

document.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("gem-item") &&
    e.target.getAttribute("data-img")
  ) {
    const imgSrc = e.target.getAttribute("data-img");
    sky.setAttribute("src", imgSrc);
    viewerContainer.style.display = "block";
  }
});

closeBtn.addEventListener("click", () => {
  viewerContainer.style.display = "none";
  sky.setAttribute("src", "");
});

// ============================
// Quiz Logic
// ============================
const quizModal = document.getElementById("quizModal");
const quizForm = document.getElementById("quizForm");
const quizFeedback = document.getElementById("quizFeedback");
const submitQuizBtn = document.getElementById("submitQuiz");
const closeQuizBtn = document.getElementById("closeQuiz");

let currentQuiz = null;

// ============================
// Start Quiz Function
// ============================
function startQuiz(gemName) {
  const modal = document.getElementById("quizModal");
  const quizForm = document.getElementById("quizForm");
  const quizFeedback = document.getElementById("quizFeedback");
  const submitBtn = document.getElementById("submitQuiz");

  // Clear old content
  quizForm.innerHTML = "";
  quizFeedback.textContent = "";

  const questions = quizQuestions[gemName];
  if (!questions) {
    quizForm.innerHTML = "<p>No quiz found for this location.</p>";
    modal.style.display = "block";
    return;
  }

  // Display questions
  questions.forEach((item, index) => {
    const qDiv = document.createElement("div");
    qDiv.className = "quiz-question";
    qDiv.innerHTML = `
      <p><strong>Q${index + 1}:</strong> ${item.q}</p>
      ${item.options
        .map(
          (opt) =>
            `<label><input type="radio" name="q${index}" value="${opt}"> ${opt}</label><br>`
        )
        .join("")}
    `;
    quizForm.appendChild(qDiv);
  });

  modal.style.display = "block";

  // Handle Submit
  submitBtn.onclick = function () {
    let score = 0;
    questions.forEach((item, index) => {
      const selected = document.querySelector(
        `input[name="q${index}"]:checked`
      );
      if (selected && selected.value === item.a) {
        score++;
      }
    });

    const total = questions.length;
    const percentage = (score / total) * 100;

    // Feedback message based on score
    let feedbackMsg = "";
    if (percentage === 100) {
      feedbackMsg = `🌟 Perfect! You scored ${score}/${total}. You're a true explorer!`;
    } else if (percentage >= 80) {
      feedbackMsg = `👏 Great job! You scored ${score}/${total}. You really know this place.`;
    } else if (percentage >= 50) {
      feedbackMsg = `🙂 Nice try! You scored ${score}/${total}. Keep exploring and learning.`;
    } else {
      feedbackMsg = `😅 You scored ${score}/${total}. Maybe visit again and observe more carefully!`;
    }

    quizFeedback.textContent = feedbackMsg;
  };

  // Close modal
  document.getElementById("closeQuiz").onclick = () => {
    modal.style.display = "none";
  };
}
