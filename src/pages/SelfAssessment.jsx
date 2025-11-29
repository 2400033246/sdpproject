
import React, { Component } from "react";
import "./SelfAssessment.css";

export default class SelfAssessment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        { 
          q: "1. How have you been feeling emotionally lately?", 
          options: ["Happy 🙂", "Sad 😔", "Anxious 😟", "Neutral 😐"], 
          answer: "" 
        },
        { 
          q: "2. How often do you engage in physical activity?", 
          options: ["Daily 🏃‍♂", "Few times a week 🏋", "Rarely 🛋", "Never ❌"], 
          answer: "" 
        },
        { 
          q: "3. How do you usually cope with stress?", 
          options: ["Meditation 🧘‍♀", "Talking to friends 💬", "Eating / Comfort habits 🍫", "Avoiding / Ignoring ❌"], 
          answer: "" 
        },
        { 
          q: "4. How satisfied are you with your daily routine?", 
          options: ["Very satisfied 🌟", "Somewhat satisfied 🙂", "Unsatisfied 😔", "Confused / Chaotic 😵"], 
          answer: "" 
        },
        { 
          q: "5. How often do you feel lonely or disconnected?", 
          options: ["Rarely 🙂", "Sometimes 😐", "Often 😔", "Always 😢"], 
          answer: "" 
        },
        { 
          q: "6. Which activity brings you the most joy?", 
          options: ["Reading 📚", "Music 🎶", "Sports ⚽", "Creative arts 🎨"], 
          answer: "" 
        },
        { 
          q: "7. Do you feel your sleep patterns are healthy?", 
          options: ["Yes 🌙", "Sometimes 😴", "Rarely 😕", "No ❌"], 
          answer: "" 
        },
        { 
          q: "8. Do you want professional help to improve mental wellness?", 
          options: ["Yes ✅", "Maybe 🤔", "Not now ❌", "Unsure 😐"], 
          answer: "" 
        },
        { 
          q: "9. How motivated are you to try new wellness activities?", 
          options: ["Very motivated 🌟", "Somewhat 🙂", "Not motivated 😔", "Avoiding ❌"], 
          answer: "" 
        },
        { 
          q: "10. How would you describe your current mental state?", 
          options: ["Stable 🙂", "Fluctuating 😕", "Overwhelmed 😣", "Distressed 😢"], 
          answer: "" 
        }
      ],
      showReport: false,
      report: ""
    };
  }

  handleOptionSelect(qIndex, option) {
    const questions = [...this.state.questions];
    questions[qIndex].answer = option;
    this.setState({ questions });
  }

  submitAssessment() {
    const { questions } = this.state;
    let score = 0;

    // Simple scoring logic (you can make it more sophisticated)
    questions.forEach(q => {
      if (q.answer.includes("🙂") || q.answer.includes("🌟") || q.answer.includes("✅") || q.answer.includes("🏃‍♂") || q.answer.includes("📚") || q.answer.includes("🎶") || q.answer.includes("⚽") || q.answer.includes("🎨")) {
        score += 2;
      } else if (q.answer.includes("😐") || q.answer.includes("🤔") || q.answer.includes("😴")) {
        score += 1;
      } else {
        score += 0;
      }
    });

    let report = "";
    if (score >= 16) report = "You seem to have a positive mindset and healthy habits. Keep nurturing yourself! 🌸";
    else if (score >= 10) report = "You are doing fairly well but there is room for improvement. Consider small changes for better wellness. 💖";
    else report = "You might be facing some challenges. Seeking professional guidance or joining therapy sessions can help you feel better. 🌿";

    this.setState({ showReport: true, report });
  }

  render() {
    const { questions, showReport, report } = this.state;

    return (
      <div className="assessment-page">
        <div className="hero-section">
          <h1>📝 Self Assessment</h1>
          <p>Answer these questions to understand your current mental and emotional wellness.</p>
        </div>

        <div className="questions-container">
          {questions.map((q, i) => (
            <div key={i} className="question-card">
              <h3 className="question-text">{q.q}</h3>
              <div className="options-container">
                {q.options.map((opt, j) => (
                  <div key={j} className={`option ${q.answer === opt ? "selected" : ""}`}
                       onClick={() => this.handleOptionSelect(i, opt)}>
                    {opt}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {!showReport && (
          <button className="submit-btn" onClick={() => this.submitAssessment()}>
            Submit Assessment
          </button>
        )}

        {showReport && (
          <div className="report-card">
            <h2>📝 Your Assessment Report</h2>
            <p>{report}</p>
          </div>
        )}
      </div>
    );
  }
}