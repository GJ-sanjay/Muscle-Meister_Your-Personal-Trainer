// speechRecognition.d.ts
declare global {
    interface Window {
      SpeechRecognition: SpeechRecognition;
      webkitSpeechRecognition: SpeechRecognition;
    }
  
    interface SpeechRecognition {
      new (): SpeechRecognition;
      continuous: boolean;
      interimResults: boolean;
      start(): void;
      stop(): void;
      onresult: (event: SpeechRecognitionEvent) => void;
      onerror: (event: Event) => void;
      onend: () => void;
    }
  
    interface SpeechRecognitionEvent extends Event {
      results: SpeechRecognitionResultList;
    }
  
    interface SpeechRecognitionResultList {
      [index: number]: SpeechRecognitionResult;
    }
  
    interface SpeechRecognitionResult {
      isFinal: boolean;
      length: number;
      [index: number]: SpeechRecognitionAlternative;
    }
  
    interface SpeechRecognitionAlternative {
      transcript: string;
      confidence: number;
    }
  }
  export {};
  