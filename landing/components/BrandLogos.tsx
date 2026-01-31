import React from 'react';

const iconClass = 'inline-block shrink-0';

interface IconProps {
  className?: string;
  size?: number;
}

/** App Store – Apple logo (bitten apple), matches official badge style */
export const AppStoreLogo: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg className={`${iconClass} ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
  </svg>
);

/** Google Play – play triangle, matches official badge */
export const GooglePlayLogo: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg className={`${iconClass} ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M4 3v18l14.5-9L4 3z" />
  </svg>
);

/** Apple Health – heart with ECG line */
export const AppleHealthLogo: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg className={`${iconClass} ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="currentColor" fillOpacity={0.2} stroke="currentColor" />
    <path d="M2 14h3l2-3 2 4 3-6 4 5h4" stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity={0.9} />
  </svg>
);

/** Google Fit / Google Health – circle with activity figure (simplified) */
export const GoogleHealthLogo: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg className={`${iconClass} ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M17,4A5,5 0 0,1 22,9C22,10.38 21.44,11.63 20.54,12.54L12,21.07L3.46,12.54C2.56,11.63 2,10.38 2,9A5,5 0 0,1 7,4C8.38,4 9.63,4.56 10.54,5.46L12,6.93L13.46,5.46C14.37,4.56 15.62,4 17,4M15.59,7.59L9.17,14L12,16.83L18.41,10.41C18.78,10.05 19,9.55 19,9A2,2 0 0,0 17,7C16.45,7 15.95,7.22 15.59,7.59M8.41,7.59C8.05,7.22 7.55,7 7,7A2,2 0 0,0 5,9C5,9.55 5.22,10.05 5.59,10.41L7.05,11.88L9.88,9.05L8.41,7.59Z" />
  </svg>
);

/** Garmin – triangular arrow / location mark */
export const GarminLogo: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg className={`${iconClass} ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2L4 6v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6l-8-4zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
  </svg>
);

/** Oura – ring / circle (Oura ring device) */
export const OuraLogo: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg className={`${iconClass} ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
    <circle cx="12" cy="12" r="9" stroke="currentColor" fill="none" />
    <circle cx="12" cy="12" r="5" stroke="currentColor" fill="none" opacity={0.6} />
  </svg>
);

/** Strava – stylized S / flame (Strava orange when colored) */
export const StravaLogo: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg className={`${iconClass} ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.599h4.172L10.463 0l-7 13.828h4.169" />
  </svg>
);

/** Whoop – lightning / energy */
export const WhoopLogo: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg className={`${iconClass} ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);
