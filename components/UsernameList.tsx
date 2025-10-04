import React, { useState } from 'react';
import { CopyIcon, CheckIcon } from './Icons';

interface UsernameListProps {
  usernames: string[];
  isLoading: boolean;
}

interface CopiedState {
  [key: string]: boolean;
}

const UsernameSkeleton: React.FC = () => (
  <div className="bg-slate-800/60 p-4 rounded-lg flex justify-between items-center border border-slate-700">
    <div className="h-5 w-3/4 bg-slate-700 rounded animate-pulse"></div>
    <div className="w-5 h-5 bg-slate-700 rounded-md animate-pulse"></div>
  </div>
);

export const UsernameList: React.FC<UsernameListProps> = ({ usernames, isLoading }) => {
  const [copied, setCopied] = useState<CopiedState>({});

  const handleCopy = (username: string) => {
    navigator.clipboard.writeText(username);
    setCopied({ [username]: true });
    setTimeout(() => {
      setCopied(prev => {
        const newState = { ...prev };
        delete newState[username];
        return newState;
      });
    }, 2000);
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <UsernameSkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {usernames.map((username, index) => (
        <div 
          key={index} 
          className="bg-slate-800/60 p-4 rounded-lg flex justify-between items-center border border-slate-700 hover:bg-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group"
        >
          <span className="font-mono text-slate-300 group-hover:text-white">{username}</span>
          <button
            onClick={() => handleCopy(username)}
            className="p-2 rounded-md hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
            aria-label={`Copy username ${username}`}
          >
            {copied[username] ? (
              <CheckIcon className="w-5 h-5 text-green-400" />
            ) : (
              <CopyIcon className="w-5 h-5 text-slate-400 group-hover:text-cyan-400" />
            )}
          </button>
        </div>
      ))}
    </div>
  );
};