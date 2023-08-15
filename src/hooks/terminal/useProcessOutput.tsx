import { useState, useEffect } from 'react';

interface TextObject {
  label: string; // Always the display text
  url?: string; // Optional URL
}

export const useProcessOutput = (text: string, input: string) => {
  const [textObjects, setTextObjects] = useState<TextObject[]>([]);

  useEffect(() => {
    const outputLines = text.split('\n');
    const result = outputLines.map((line) => {
      if (line.includes('|')) {
        const [url, label] = line.split('|');
        return { label, url };
      } else {
        return { label: line };
      }
    });

    setTextObjects(result);
  }, [input, text]); // The effect will re-run if 'input' or 'text' changes.

  return textObjects;
};
