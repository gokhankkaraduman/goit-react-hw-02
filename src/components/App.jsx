import { useState, useEffect } from 'react'
import './App.css'
import Description from './Description/Description'
import AnimatedBackground from './BackGround/AnimatedBackground';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';
import { use } from 'react';

function App() {
  // feedback state'i ve setFeedback fonksiyonu
    const [feedback, setFeedback] = useState(() => {
        const savedFeedback = localStorage.getItem('feedback');
        return savedFeedback ? JSON.parse(savedFeedback) : {
            good: 0,
            neutral: 0,
            bad: 0
        };
    });
    
  // feedback state'ini güncelleme fonksiyonu
function updateFeedback(feedbackType) {
  setFeedback((prev) => ({
    ...prev, // Mevcut nesneyi yayarak ekle
    [feedbackType]: prev[feedbackType] + 1 // Dinamik anahtarı güncelle
  }));
}

  // feedback state'ini resetleme fonksiyonu
function resetFeedback () {
  setFeedback({
    good: 0,
    neutral: 0,
    bad: 0
  });
}

useEffect(() => {
  window.localStorage.setItem("feedback", JSON.stringify(feedback));
},[feedback]);

// Toplam feedback sayısı ve pozitif feedback yüzdesi tanımlama
const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      {/* Arka Plan */}
      <AnimatedBackground />

      {/* İçerik */}
      <div
        style={{
          position: "relative", // İçeriklerin üstte olmasını sağlar
          zIndex: 1, // Arka planın üzerinde olmasını sağlar
          textAlign: "center",
          paddingTop: "50px",
          display:"flex",
          flexDirection:"column",
          justifyItems:"center",
          alignItems:"center",
          gap:"25px"
        }}
      >
        <Description />
        <Options  
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
        />
        {
          totalFeedback > 0 ? (
            <Feedback 
            feedback={feedback}
            total={totalFeedback}
            positive={positiveFeedback}
          />
          ) : (
            <Notification />
          )
        }
      </div>
    </div>
  );
}

export default App;