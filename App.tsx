import React, { useState, useCallback } from 'react';
import { generateUsernames } from './services/geminiService';
import { FormInput } from './components/FormInput';
import { UsernameList } from './components/UsernameList';
import { Spinner } from './components/Spinner';
import { GameControllerIcon, SparklesIcon, RotateCcwIcon } from './components/Icons';
import { StyleSelector } from './components/StyleSelector';
import { Button } from './components/Button';

const App: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [hobbies, setHobbies] = useState<string>('');
  const [favoriteWords, setFavoriteWords] = useState<string>('');
  const [style, setStyle] = useState<string>('Random');
  const [usernames, setUsernames] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(async () => {
    if (!hobbies && !favoriteWords) {
      setError('Please fill out at least "Hobbies" or "Favorite Words" to get inspired usernames.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setUsernames([]);

    try {
      const generated = await generateUsernames(name, hobbies, favoriteWords, style);
      setUsernames(generated);
    } catch (e) {
      setError('Failed to generate usernames. Please check your API key and try again.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }, [name, hobbies, favoriteWords, style]);

  const handleReset = useCallback(() => {
    setName('');
    setHobbies('');
    setFavoriteWords('');
    setStyle('Random');
    setUsernames([]);
    setError(null);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-slate-800 text-white flex flex-col items-center p-4 sm:p-6 font-sans">
      <main className="w-full max-w-2xl mx-auto">
        <header className="text-center my-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <GameControllerIcon className="w-12 h-12 text-cyan-400" />
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              Username Generator
            </h1>
          </div>
          <p className="text-lg text-slate-400">
            Craft the perfect identity for your gaming and social profiles.
          </p>
        </header>

        <div className="bg-slate-800/50 rounded-2xl shadow-2xl shadow-slate-900/50 p-6 sm:p-8 border border-slate-700">
          <div className="space-y-6">
            <FormInput
              id="name"
              label="Name (Optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Alex, Sam"
              tooltipText="Your real name or a nickname you go by."
            />
            <FormInput
              id="hobbies"
              label="Hobbies & Interests"
              value={hobbies}
              onChange={(e) => setHobbies(e.target.value)}
              placeholder="e.g., cyberpunk, pixel art, sci-fi movies"
              tooltipText="List things you enjoy, like 'gaming', 'anime', or 'coding'. This helps create relevant usernames."
            />
            <FormInput
              id="favoriteWords"
              label="Favorite Words"
              value={favoriteWords}
              onChange={(e) => setFavoriteWords(e.target.value)}
              placeholder="e.g., echo, glitch, shadow, nebula"
              tooltipText="Include words you find cool or meaningful, like 'arcane', 'zenith', or 'glimmer'."
            />
            <StyleSelector selectedStyle={style} onStyleChange={setStyle} />
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Button
              variant="secondary"
              onClick={handleReset}
              disabled={isLoading}
              className="sm:col-span-1"
            >
              <RotateCcwIcon className="w-5 h-5 mr-2" />
              Reset
            </Button>
            <Button
              onClick={handleGenerate}
              disabled={isLoading}
              className="sm:col-span-2"
            >
              {isLoading ? (
                <Spinner />
              ) : (
                <>
                  <SparklesIcon className="w-5 h-5 mr-2" />
                  Generate Usernames
                </>
              )}
            </Button>
          </div>
        </div>

        {error && (
          <div className="mt-8 bg-red-900/50 border border-red-700 text-red-300 p-4 rounded-lg text-center">
            {error}
          </div>
        )}

        {(isLoading || usernames.length > 0) && (
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center mb-6 text-slate-300">
              {isLoading ? "Crafting your new identity..." : "Your new identity awaits..."}
            </h2>
            <UsernameList usernames={usernames} isLoading={isLoading} />
          </div>
        )}
      </main>
      <footer className="text-center text-slate-500 text-sm mt-12 pb-4">
        <p>Powered by Gemini API</p>
      </footer>
    </div>
  );
};

export default App;
