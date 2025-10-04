import React from 'react';

interface IconProps {
  className?: string;
}

export const GameControllerIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16.5 12h.01"/>
        <path d="M12 16.5h.01"/>
        <path d="M22 10v4"/>
        <path d="M17.5 7.5v.01"/>
        <path d="M2 10v4"/>
        <path d="M6.5 7.5v.01"/>
        <path d="M12 2v2"/>
        <path d="m4.929 4.929.001.001"/>
        <path d="M19.071 4.929v.001"/>
        <rect width="16" height="10" x="4" y="8" rx="2"/>
        <path d="M8 12h.01"/>
    </svg>
);

export const SparklesIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 3L9.27 7.03L5 8.1l3.36 2.6L7.5 15l4.5-2.7L16.5 15l-1.86-4.3L19 8.1l-4.27-.07Z"/>
        <path d="M5 3L2 5l2 2l-2 2l2 2"/>
        <path d="M19 3l3 2l-3 2l3 2l-3 2"/>
    </svg>
);


export const CopyIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </svg>
);

export const CheckIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const ChevronDownIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const InfoIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

export const RotateCcwIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
    <path d="M3 3v5h5"/>
  </svg>
);

// --- Style Icons ---
export const PaletteIcon: React.FC<IconProps> = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 0-10 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.72c0 .27.16.58.67.5A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>;
export const SwordsIcon: React.FC<IconProps> = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m14.5 12.5 7-7-7 7Zm0 0L20 4l-7.5 8.5"/><path d="M5 12s2 2 4 4"/><path d="m10 17 5-5"/><path d="M2 22s5-5 7-7"/><path d="M10 11s-2-2-4-4"/><path d="M3 3l7 7"/></svg>;
export const RulerIcon: React.FC<IconProps> = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L3 8.4a2.4 2.4 0 0 1 0-3.4l2.6-2.6a2.4 2.4 0 0 1 3.4 0L18 11.6"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/><path d="M7 13.5 3 9.5"/><path d="m14 6.5-4 4"/></svg>;
export const SunglassesIcon: React.FC<IconProps> = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><path d="M6 12s1-4 6-4 6 4 6 4"/><path d="M2 12h20"/></svg>;
export const LaughIcon: React.FC<IconProps> = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><path d="M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z"/><path d="M9 9h.01"/><path d="M15 9h.01"/></svg>;
export const BrushIcon: React.FC<IconProps> = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"/><path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"/></svg>;
export const DiceIcon: React.FC<IconProps> = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M16 8h.01"/><path d="M8 8h.01"/><path d="M8 16h.01"/><path d="M16 16h.01"/><path d="M12 12h.01"/></svg>;
export const ShieldIcon: React.FC<IconProps> = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
export const EyeOffIcon: React.FC<IconProps> = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>;
export const MinusIcon: React.FC<IconProps> = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="5" y1="12" x2="19" y2="12"/></svg>;
export const SwirlIcon: React.FC<IconProps> = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 12a9 9 0 1 1-6.22-8.66"/><path d="M15.66 3.78a2.5 2.5 0 0 1 2.5 2.5"/><path d="M12.5 9.5a2.5 2.5 0 0 1 2.5 2.5"/><path d="M9.34 15.22a2.5 2.5 0 0 1 2.5 2.5"/></svg>;
export const HeartIcon: React.FC<IconProps> = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>;
export const MoonIcon: React.FC<IconProps> = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/></svg>;
export const BombIcon: React.FC<IconProps> = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="8"/><path d="M14.5 9.5 18 6"/><path d="M15.5 13.5 19 17"/><path d="M9.5 14.5 6 18"/><path d="M13.5 15.5 17 19"/><path d="m22 2-3 3"/><path d="M15 9h.01"/></svg>;
export const DiamondIcon: React.FC<IconProps> = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2.7 10.3a2.4 2.4 0 0 0 0 3.4l7.5 7.5a2.4 2.4 0 0 0 3.4 0l7.5-7.5a2.4 2.4 0 0 0 0-3.4l-7.5-7.5a2.4 2.4 0 0 0-3.4 0Z"/></svg>;
export const ZapIcon: React.FC<IconProps> = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
export const WandIcon: React.FC<IconProps> = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 4V2"/><path d="M15 16v-2"/><path d="M8 9h2"/><path d="M20 9h-2"/><path d="M17.8 11.8 19 13"/><path d="M15 9a3 3 0 0 0-3-3"/><path d="M12 12a3 3 0 0 0-3 3"/><path d="M12 6V3"/><path d="M12 21v-3"/><path d="M4.2 6.8 3 8"/><path d="M12 15a3 3 0 0 0 3 3"/><path d="M5 13a3 3 0 0 0 3-3"/><path d="M19.2 17.2 21 16"/><path d="M5.8 17.2 7 16"/><path d="M4 4h.01"/></svg>;
export const RocketIcon: React.FC<IconProps> = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.7-2.3s-1.44.28-2.3.7a2.5 2.5 0 0 1-1.4 0Z"/><path d="m21.5 2.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.7-2.3s-1.44.28-2.3.7a2.5 2.5 0 0 1-1.4 0Z"/><path d="M9.5 12.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.7-2.3s-1.44.28-2.3.7a2.5 2.5 0 0 1-1.4 0Z"/><path d="M14.5 7.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.7-2.3s-1.44.28-2.3.7a2.5 2.5 0 0 1-1.4 0Z"/><path d="M5.5 21.5c1.5-1.26 2-5 2-5s-3.74.5-5 2c-.71.84-.7 2.3-.7 2.3s1.44-.28 2.3-.7a2.5 2.5 0 0 1 1.4 0Z"/><path d="m2.5 5.5c1.5-1.26 2-5 2-5s-3.74.5-5 2c-.71.84-.7 2.3-.7 2.3s1.44-.28 2.3-.7a2.5 2.5 0 0 1 1.4 0Z"/></svg>;
export const CastleIcon: React.FC<IconProps> = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 20v-9H2v9"/><path d="M18 11V4l-4 4-4-4v7"/><path d="M10 11V4l-4 4-4-4v7"/><path d="M6 20v-9"/><path d="M14 20v-9"/></svg>;
export const FeatherIcon: React.FC<IconProps> = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><path d="m16 8-4 4"/><path d="m21.49 13.48-5.7-5.7"/></svg>;
export const DnaIcon: React.FC<IconProps> = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 15c6.667-6 13.333 0 20-8"/><path d="M20 21c-6.667-6-13.333 0-20-8"/><path d="M5 12.5c4-4 8 0 12-5"/><path d="M19 12.5c-4-4-8 0-12-5"/></svg>;
export const BinaryIcon: React.FC<IconProps> = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M6 20h4"/><path d="M14 20h4"/><path d="M6 14h4"/><path d="M14 14h4"/><path d="M6 8h4"/><path d="M14 8h4"/><path d="m6 2-4 4 4 4"/><path d="m14 2-4 4 4 4"/></svg>;
export const BatIcon: React.FC<IconProps> = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 2a10 10 0 0 0-7.5 16.5h15A10 10 0 0 0 12 2z"/><path d="m10 12 2-2 2 2"/><path d="m9 16 3-3 3 3"/></svg>;
export const CassetteTapeIcon: React.FC<IconProps> = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="14" x="2" y="5" rx="2"/><path d="M8 12h8"/><circle cx="8" cy="10" r="2"/><circle cx="16" cy="10" r="2"/></svg>;
export const GlassesIcon: React.FC<IconProps> = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="6" cy="15" r="4"/><circle cx="18" cy="15" r="4"/><path d="M10 15h4"/><path d="M4.5 12.5L2 12"/><path d="M19.5 12.5L22 12"/></svg>;
export const LeafIcon: React.FC<IconProps> = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M11 20A7 7 0 0 1 4 13V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M15.21 14.3a5 5 0 0 1-1.21 6.17A5 5 0 0 1 8 18H4"/><path d="M15 8a5 5 0 0 0-5-5H4"/></svg>;
export const CogIcon: React.FC<IconProps> = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"/><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/><path d="M12 2v2"/><path d="M12 22v-2"/><path d="m17 20.66-1-1.73"/><path d="m7 3.34 1 1.73"/><path d="m17 3.34-1 1.73"/><path d="m7 20.66 1-1.73"/><path d="M2 12h2"/><path d="M22 12h-2"/><path d="m20.66 7-1.73-1"/><path d="m3.34 7 1.73 1"/><path d="m20.66 17-1.73-1"/><path d="m3.34 17 1.73-1"/></svg>;
export const ToriiIcon: React.FC<IconProps> = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M1 4h22"/><path d="M1 10h22"/><path d="M12 4v16"/><path d="M4 20h16"/><path d="M4 10v10"/><path d="M20 10v10"/></svg>;
export const AnchorIcon: React.FC<IconProps> = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="5" r="3"/><line x1="12" x2="12" y1="22" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/></svg>;
export const AxeIcon: React.FC<IconProps> = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9"/><path d="M15 13 9 7l4-4 6 6h3l-3 3-6-6"/><path d="m2 16 6 6"/></svg>;
export const PlanetIcon: React.FC<IconProps> = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>;
export const FootprintsIcon: React.FC<IconProps> = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 16v-2.38c0-.97.5-1.88 1.34-2.4A15.42 15.42 0 0 1 12 10a15.42 15.42 0 0 1 6.66 1.22c.83.52 1.34 1.43 1.34 2.4V16"/><path d="M12 10V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v6"/><path d="m12 10 3 3-3-3-3 3"/><path d="m7 19-3 2h16l-3-2"/></svg>;
export const TextIconS: React.FC<IconProps> = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M17 6.1H3"/><path d="M21 12.1H3"/><path d="M15.1 18.1H3"/></svg>;
// FIX: Corrected a typo in the viewBox attribute.
export const TextIconL: React.FC<IconProps> = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 6.1H3"/><path d="M21 12.1H3"/><path d="M21 18.1H3"/></svg>;
export const ImageIcon: React.FC<IconProps> = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>;