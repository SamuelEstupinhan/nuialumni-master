import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import image1 from 'C:/Users/Usuario/Downloads/nuialumni-master/nuialumni-master/src/components/voz/1.png';
import image2 from 'C:/Users/Usuario/Downloads/nuialumni-master/nuialumni-master/src/components/voz/2.png';
import image3 from 'C:/Users/Usuario/Downloads/nuialumni-master/nuialumni-master/src/components/voz/3.png';
import image4 from 'C:/Users/Usuario/Downloads/nuialumni-master/nuialumni-master/src/components/voz/4.png';
import image5 from 'C:/Users/Usuario/Downloads/nuialumni-master/nuialumni-master/src/components/voz/5.png';

const VozOrdenes = () => {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
   
    loadRandomImage();
  }, []);

  const imageUrls = [image1, image2, image3, image5];

  const loadRandomImage = () => {

    const randomImage = getRandomElement(imageUrls);
    setCurrentImage(randomImage);
  };

  const getRandomElement = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  const handleCorrectAnswer = () => {
    setScore(score + 1);
  
    
    if (Math.random() < 0.25) {
      setCurrentImage(image4);
    } else {
     
      setCurrentImage(null); 
      setGameOver(false);
      setTimeout(() => {
        loadRandomImage(); 
      }, 2000); 
    }
  };

  const handleIncorrectAnswer = () => {
    setGameOver(true);
    setScore(0);
    loadRandomImage();
  };

  const handleUserSpeech = (command) => {
    switch (currentImage) {
      case image1:
        command === 'right' ? handleCorrectAnswer() : handleIncorrectAnswer();
        break;
      case image2:
        command === 'left' ? handleCorrectAnswer() : handleIncorrectAnswer();
        break;
      case image3:
        command === 'straight' ? handleCorrectAnswer() : handleIncorrectAnswer();
        break;
      case image5:
        command === 'stop' ? handleCorrectAnswer() : handleIncorrectAnswer();
        break;
      default:
        handleIncorrectAnswer();
        break;
    }
  };

  const commands = [
    {
      command: 'right',
      callback: () => handleUserSpeech('right'),
    },
    {
      command: 'left',
      callback: () => handleUserSpeech('left'),
    },
    {
      command: 'straight',
      callback: () => handleUserSpeech('straight'),
    },
    {
      command: 'stop',
      callback: () => handleUserSpeech('stop'),
    },
    {
      command: 'refuel',
      callback: () => {
        setGameOver(false);
        loadRandomImage();
      },
    },
  ];

  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition({ commands });

  if (!browserSupportsSpeechRecognition) {
    return <div>El reconocimiento de voz no está soportado en tu navegador.</div>;
  }

  return (
    <div>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      {gameOver ? (
        <p>
          ¡Game Over! Puntuación: {score}. Di "Refuel" para continuar o reinicia el juego.
        </p>
      ) : (
        <div>
          <p>{transcript}</p>
          <p>Giro a la derecha: right</p>
          <p>Giro a la derecha: izquierda</p>
          <p>Recto: recto</p>
          <p>Cuando hay pollitos: Stop</p>
          <p>Gasolinera: refuel</p>
          <p>Puntuación: {score}</p>
          {currentImage && (
            <img
              src={currentImage}
              alt={`Imagen actual`}
              style={{ width: '800px', height: '600px', margin: '10px' }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default VozOrdenes;