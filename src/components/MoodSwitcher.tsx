import React from "react";
import { Mood } from "../types";

interface MoodSwitcherProps {
  mood: Mood;
  onChange: (m: Mood) => void;
}

export const MoodSwitcher: React.FC<MoodSwitcherProps> = ({ mood, onChange }) => {
  return (
    <div className="flex flex-col items-center p-4">
      <p className="text-lg text-gray-300 text-center p-2">
        Let's set up the mood first. Who are you?
      </p>
      <div className="flex flex-wrap justify-center space-x-6">
        {[
          { label: "Hiring Manager", value: "hiring" as const },
          { label: "Geek", value: "geek" as const },
          { label: "AI", value: "ai" as const },
          { label: "Barbra Streisand", value: "barbra" as const },
        ].map((opt) => (
          <label key={opt.value} className="flex items-center space-x-1 cursor-pointer">
            <input
              type="radio"
              name="mood"
              value={opt.value}
              checked={mood === opt.value}
              onChange={() => onChange(opt.value)}
              className="h-4 w-4 accent-cyan-400"
            />
            <span className="text-gray-200">{opt.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};
