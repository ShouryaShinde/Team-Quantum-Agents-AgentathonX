router.get('/dashboard', (req, res) => {

  const data = {
    score: 8,

    skills: ["C++", "JavaScript", "Node.js", "DSA"],

    suggestions: [
      "Add more real-world projects",
      "Improve resume formatting"
    ],

    // Graph-ready data
    chartData: {
      labels: ["Skills", "Suggestions"],
      values: [4, 2]
    },

    //Extra Data
    scoreBreakdown: {
      skills: 7,
      projects: 6,
      experience: 5
    }
  };

  res.render('dashboard', { data });
});
//Query Based Testing
router.get('/dashboard', (req, res) => {

  const score = req.query.score || 8;

  const data = {
    score: Number(score),
    skills: ["C++", "JavaScript"],
    suggestions: ["Add projects"],
    chartData: {
      labels: ["Skills", "Suggestions"],
      values: [2, 1]
    }
  };

  res.render('dashboard', { data });
});
//Landing Route
router.get('/loading', (req, res) => {
  res.send("Analyzing resume...");
});