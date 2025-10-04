import React, { useState, ReactElement } from 'react';
import * as Icons from './Icons';

interface StyleSelectorProps {
  selectedStyle: string;
  onStyleChange: (style: string) => void;
}

const styleCategories = {
  'Vibe': [
    'Cool', 'Funny', 'Aesthetic', 'Random', 'Epic', 'Mysterious', 
    'Minimalist', 'Abstract', 'Cute', 'Dark', 'Chaotic', 'Elegant', 'Edgy', 'Whimsical',
  ],
  'Theme': [
    'Gamer', 'Sci-Fi', 'Fantasy', 'Mythical', 'Futuristic', 'Cyber', 
    'Gothic', 'Retro', 'Vintage', 'Nature', 'Steampunk', 'Anime',
    'Pirate', 'Viking', 'Cosmic', 'Stealth',
  ],
  'Structure': [
    'Short', 'Long',
  ],
};

const styleDescriptions: Record<string, string> = {
  'Cool': 'Sleek, modern, and edgy names.',
  'Funny': 'Humorous and witty usernames.',
  'Aesthetic': 'Visually pleasing and artistic names.',
  'Random': 'A diverse mix of unpredictable styles.',
  'Epic': 'Grand and heroic-sounding names.',
  'Mysterious': 'Enigmatic and intriguing usernames.',
  'Minimalist': 'Simple, clean, and understated.',
  'Abstract': 'Conceptual and non-literal names.',
  'Cute': 'Charming, sweet, and adorable styles.',
  'Dark': 'Brooding, grim, and edgy names.',
  'Chaotic': 'Unpredictable and wild usernames.',
  'Elegant': 'Sophisticated and graceful names.',
  'Edgy': 'Provocative, dark, and sharp names.',
  'Whimsical': 'Playful, fantastical, and lighthearted.',
  'Gamer': 'Classic gaming-inspired usernames.',
  'Sci-Fi': 'Futuristic and technology-themed names.',
  'Fantasy': 'Mythical and magical usernames.',
  'Mythical': 'Inspired by legends and folklore.',
  'Futuristic': 'Names that sound ahead of their time.',
  'Cyber': 'Cyberpunk and tech-noir inspired.',
  'Gothic': 'Dark, elegant, and macabre names.',
  'Retro': 'Nostalgic, 80s/90s inspired names.',
  'Vintage': 'Classic and old-fashioned charm.',
  'Nature': 'Earthy and organic-inspired names.',
  'Steampunk': 'Victorian-era industrial-inspired names.',
  'Anime': 'Inspired by Japanese animation styles.',
  'Pirate': 'Swashbuckling and nautical themes.',
  'Viking': 'Norse-inspired, powerful names.',
  'Cosmic': 'Inspired by space, stars, and galaxies.',
  'Stealth': 'For the silent and deadly.',
  'Short': 'Concise names, typically 3-6 characters.',
  'Long': 'More descriptive and elaborate usernames.',
};

const styleSamples: Record<string, string> = {
  'Cool': 'EchoRider_John',
  'Funny': 'SirJohnGiggles',
  'Aesthetic': 'echo_waves',
  'Random': 'J0hnnyC0d3',
  'Epic': 'JohnTheConqueror',
  'Mysterious': 'SilentEcho',
  'Minimalist': 'JGE',
  'Abstract': 'EchoSphere',
  'Cute': 'JohnnyPuff',
  'Dark': 'GrimEcho_John',
  'Chaotic': 'R4ndomJ0hnGE',
  'Elegant': 'SirEchoJohn',
  'Edgy': 'Sh4dow_John',
  'Whimsical': 'EchoWispJohn',
  'Gamer': 'ProGamerJohn',
  'Sci-Fi': 'CyberJohn_77',
  'Fantasy': 'JohnTheMage',
  'Mythical': 'MythicEcho',
  'Futuristic': 'NeoEcho',
  'Cyber': 'Gl1tch_John',
  'Gothic': 'RavenEcho',
  'Retro': 'PixelJohn',
  'Vintage': 'OldSchoolEcho',
  'Nature': 'ForestGamer',
  'Steampunk': 'Cogsworth_J',
  'Anime': 'JohnSenpai',
  'Pirate': 'CaptainJohnEcho',
  'Viking': 'JohnTheSkald',
  'Cosmic': 'CosmicEcho_J',
  'Stealth': 'SilentJohnX',
  'Short': 'JoGa',
  'Long': 'JohnTheGamingEcho',
};

const iconProps = { className: "w-4 h-4 mr-2" };
const categoryIconProps = { className: "w-5 h-5 text-cyan-400 mr-3" };
const previewIconProps = { className: "w-5 h-5 mr-3 transition-colors duration-300" };

const categoryIcons: Record<string, React.ReactNode> = {
  'Vibe': <Icons.PaletteIcon {...categoryIconProps} />,
  'Theme': <Icons.SwordsIcon {...categoryIconProps} />,
  'Structure': <Icons.RulerIcon {...categoryIconProps} />,
};

const styleIcons: Record<string, React.ReactNode> = {
  'Cool': <Icons.SunglassesIcon {...iconProps} />,
  'Funny': <Icons.LaughIcon {...iconProps} />,
  'Aesthetic': <Icons.BrushIcon {...iconProps} />,
  'Random': <Icons.DiceIcon {...iconProps} />,
  'Epic': <Icons.ShieldIcon {...iconProps} />,
  'Mysterious': <Icons.EyeOffIcon {...iconProps} />,
  'Minimalist': <Icons.MinusIcon {...iconProps} />,
  'Abstract': <Icons.SwirlIcon {...iconProps} />,
  'Cute': <Icons.HeartIcon {...iconProps} />,
  'Dark': <Icons.MoonIcon {...iconProps} />,
  'Chaotic': <Icons.BombIcon {...iconProps} />,
  'Elegant': <Icons.DiamondIcon {...iconProps} />,
  'Edgy': <Icons.ZapIcon {...iconProps} />,
  'Whimsical': <Icons.WandIcon {...iconProps} />,
  'Gamer': <Icons.GameControllerIcon {...iconProps} />,
  'Sci-Fi': <Icons.RocketIcon {...iconProps} />,
  'Fantasy': <Icons.CastleIcon {...iconProps} />,
  'Mythical': <Icons.FeatherIcon {...iconProps} />,
  'Futuristic': <Icons.DnaIcon {...iconProps} />,
  'Cyber': <Icons.BinaryIcon {...iconProps} />,
  'Gothic': <Icons.BatIcon {...iconProps} />,
  'Retro': <Icons.CassetteTapeIcon {...iconProps} />,
  'Vintage': <Icons.GlassesIcon {...iconProps} />,
  'Nature': <Icons.LeafIcon {...iconProps} />,
  'Steampunk': <Icons.CogIcon {...iconProps} />,
  'Anime': <Icons.ToriiIcon {...iconProps} />,
  'Pirate': <Icons.AnchorIcon {...iconProps} />,
  'Viking': <Icons.AxeIcon {...iconProps} />,
  'Cosmic': <Icons.PlanetIcon {...iconProps} />,
  'Stealth': <Icons.FootprintsIcon {...iconProps} />,
  'Short': <Icons.TextIconS {...iconProps} />,
  'Long': <Icons.TextIconL {...iconProps} />,
};


export const StyleSelector: React.FC<StyleSelectorProps> = ({ selectedStyle, onStyleChange }) => {
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
    'Vibe': true,
  });
  
  const defaultPreviewText = 'Hover over a style to see a preview.';
  const defaultPreviewIcon = <Icons.ImageIcon {...previewIconProps} className={`${previewIconProps.className} text-slate-500`} />;

  const [preview, setPreview] = useState<string>(defaultPreviewText);
  // FIX: Changed the state type from React.ReactNode to React.ReactElement for better type safety with React.cloneElement.
  const [previewIcon, setPreviewIcon] = useState<ReactElement>(defaultPreviewIcon);

  const toggleCategory = (category: string) => {
    setOpenCategories(prev => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleMouseEnter = (style: string) => {
    setPreview(styleSamples[style] || 'No preview available.');
    const Icon = styleIcons[style] ? React.cloneElement(styleIcons[style] as React.ReactElement, previewIconProps) : defaultPreviewIcon;
    setPreviewIcon(Icon);
  }

  const handleMouseLeave = () => {
    setPreview(defaultPreviewText);
    setPreviewIcon(defaultPreviewIcon);
  }

  return (
    <div>
      <label className="block text-sm font-medium text-slate-300 mb-2">
        Username Style
      </label>
      <div className="space-y-2">
        {Object.entries(styleCategories).map(([category, styles]) => (
          <div key={category} className="bg-slate-900/70 border border-slate-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleCategory(category)}
              className="w-full flex justify-between items-center p-3 text-left font-medium text-slate-200 hover:bg-slate-800/50 transition-colors"
              aria-expanded={!!openCategories[category]}
              aria-controls={`category-panel-${category}`}
            >
              <div className="flex items-center">
                {categoryIcons[category]}
                <span>{category}</span>
              </div>
              <Icons.ChevronDownIcon
                className={`w-5 h-5 transition-transform duration-300 ${openCategories[category] ? 'rotate-180' : ''}`}
              />
            </button>
            <div
              id={`category-panel-${category}`}
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openCategories[category] ? 'max-h-[30rem]' : 'max-h-0'
              }`}
            >
              <div 
                className="p-3 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3"
                onMouseLeave={handleMouseLeave}
              >
                {styles.map((style) => (
                  <div key={style} className="relative group">
                    <input
                      type="radio"
                      id={`style-${style}`}
                      name="style"
                      value={style}
                      checked={selectedStyle === style}
                      onChange={() => onStyleChange(style)}
                      className="sr-only peer"
                    />
                    <label
                      htmlFor={`style-${style}`}
                      onMouseEnter={() => handleMouseEnter(style)}
                      className={`flex items-center justify-center w-full text-center py-2 px-1 rounded-md cursor-pointer transition-all duration-200 border-2 text-sm
                        ${ selectedStyle === style
                          ? 'bg-cyan-900/50 border-cyan-500 text-cyan-300'
                          : 'bg-slate-800 border-slate-600 text-slate-300 hover:border-slate-500 peer-focus:ring-2 peer-focus:ring-cyan-500'
                        }`}
                    >
                      {styleIcons[style]}
                      {style}
                    </label>
                     <span className="absolute bottom-full left-1/2 z-10 w-max max-w-xs -translate-x-1/2 mb-2 rounded-md bg-slate-700 px-3 py-2 text-center text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                      {styleDescriptions[style] || ''}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <p className="text-sm font-medium text-slate-300 mb-2">Style Preview</p>
        <div className="bg-slate-900/70 border border-slate-700 rounded-md p-3 text-center min-h-[48px] flex items-center justify-center">
            {/* FIX: Removed the unnecessary type assertion `as React.ReactElement` after strengthening the state type. */}
            {React.cloneElement(previewIcon, {
              className: `${previewIconProps.className} ${preview === defaultPreviewText ? 'text-slate-500' : 'text-cyan-400'}`
            })}
          <p className={`font-mono transition-opacity duration-300 ${preview === defaultPreviewText ? 'text-slate-400' : 'text-cyan-400'}`}>
            {preview}
          </p>
        </div>
      </div>
    </div>
  );
};