import Svg, { Circle, Path } from 'react-native-svg';
import { C } from '../lib/theme';

type P = { size?: number; color?: string; filled?: boolean };

export const BackIcon = ({ size = 22, color = C.cream }: P) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path d="M15 5l-7 7 7 7" stroke={color} strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export const SearchIcon = ({ size = 22, color = C.cream }: P) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Circle cx={11} cy={11} r={6.5} stroke={color} strokeWidth={1.8} fill="none" />
    <Path d="M16 16l4.5 4.5" stroke={color} strokeWidth={1.8} strokeLinecap="round" />
  </Svg>
);

export const BookmarkIcon = ({ size = 22, color = C.cream, filled }: P) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path
      d="M6.5 3.5h11a1 1 0 0 1 1 1v16l-6.5-4.2-6.5 4.2v-16a1 1 0 0 1 1-1z"
      stroke={color}
      strokeWidth={1.8}
      fill={filled ? color : 'none'}
      strokeLinejoin="round"
    />
  </Svg>
);

export const TempleIcon = ({ size = 22, color = C.cream, filled }: P) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path d="M12 2.5l1.2 2.3M12 2.5l-1.2 2.3" stroke={color} strokeWidth={1.6} strokeLinecap="round" />
    <Path
      d="M7 10l5-5.2 5 5.2M5.5 10h13M6.5 10v9.5h11V10M10 19.5v-4a2 2 0 0 1 4 0v4M3.5 19.5h17"
      stroke={color}
      strokeWidth={1.6}
      fill={filled ? 'rgba(232,184,74,0.25)' : 'none'}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const LotusIcon = ({ size = 22, color = C.cream, filled }: P) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path
      d="M12 4c2 2.4 2.8 5 2.4 8.6-.3 2.4-1.2 4.4-2.4 5.9-1.2-1.5-2.1-3.5-2.4-5.9C9.2 9 10 6.4 12 4z"
      stroke={color}
      strokeWidth={1.5}
      fill={filled ? 'rgba(232,184,74,0.3)' : 'none'}
      strokeLinejoin="round"
    />
    <Path
      d="M12 18.5c-3.8 0-7.2-2.6-8.5-6.8 2.6-.4 5 .4 6.6 2.1M12 18.5c3.8 0 7.2-2.6 8.5-6.8-2.6-.4-5 .4-6.6 2.1"
      stroke={color}
      strokeWidth={1.5}
      fill="none"
      strokeLinecap="round"
    />
  </Svg>
);

export const MalaIcon = ({ size = 22, color = C.cream, filled }: P) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    {Array.from({ length: 12 }).map((_, i) => {
      const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
      return <Circle key={i} cx={12 + Math.cos(a) * 7.5} cy={11 + Math.sin(a) * 7.5} r={1.5} fill={filled ? color : 'none'} stroke={color} strokeWidth={1.1} />;
    })}
    <Path d="M12 18.5v3.5" stroke={color} strokeWidth={1.6} strokeLinecap="round" />
  </Svg>
);

export const CloseIcon = ({ size = 22, color = C.cream }: P) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path d="M6 6l12 12M18 6L6 18" stroke={color} strokeWidth={2} strokeLinecap="round" />
  </Svg>
);

export const FlameIcon = ({ size = 22, color = C.cream }: P) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path
      d="M12 3c1.5 3 4.5 5 4.5 9a4.5 4.5 0 0 1-9 0c0-2.4 1.3-3.6 2.2-5 .3 1.6 1 2.4 1.8 2.8C11.2 7.4 11.4 5 12 3z"
      stroke={color}
      strokeWidth={1.6}
      fill="none"
      strokeLinejoin="round"
    />
    <Path d="M5 20.5h14" stroke={color} strokeWidth={1.6} strokeLinecap="round" />
  </Svg>
);

export const ChevronIcon = ({ size = 18, color = C.faint }: P) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path d="M9 5l7 7-7 7" stroke={color} strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);
