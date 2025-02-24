import React, { useState, useEffect } from 'react';
import { Mic, MicOff } from 'lucide-react';
import { motion } from 'framer-motion';

interface Props {
  onResult: (transcript: string) => void;
}

const VoiceRecognition: React.FC<Props> = ({ onResult }) => {
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = true;
      recognitionInstance.interimResults = true;

      recognitionInstance.onresult = (event: SpeechRecognitionEvent) => {
        const transcript = Array.from(event.results)
          .map((result: SpeechRecognitionResult) => result[0].transcript)  // Assert correct types
          .join('');
        
        onResult(transcript);
      };

      // Optional: Handle errors and other events
      recognitionInstance.onerror = (event) => {
        console.error('Speech recognition error', event);
      };
      recognitionInstance.onend = () => {
        setIsListening(false);
      };

      setRecognition(recognitionInstance);
    } else {
      console.warn("Speech Recognition is not supported in this browser.");
    }
  }, [onResult]);

  const toggleListening = () => {
    if (recognition) {
      if (isListening) {
        recognition.stop();
      } else {
        recognition.start();
      }
      setIsListening(!isListening);
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8"
    >
      <button
        onClick={toggleListening}
        className={`p-4 rounded-full shadow-lg ${isListening ? 'bg-red-500' : 'bg-blue-500'} text-white`}
      >
        {isListening ? <Mic size={24} /> : <MicOff size={24} />}
      </button>
    </motion.div>
  );
};

export default VoiceRecognition;
