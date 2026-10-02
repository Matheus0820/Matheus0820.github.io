import { useId } from 'react';

interface BlackHoleProps {
  className?: string;
  glow?: boolean;
}

/** Buraco negro em SVG: sombra, anel de fótons e disco de acreção em tons de azul. */
export function BlackHole({ className = '', glow = false }: BlackHoleProps) {
  const uid = useId().replace(/:/g, '');
  const id = (name: string) => `${uid}-${name}`;
  const url = (name: string) => `url(#${id(name)})`;

  // disco de acreção visto quase de lado: elipse externa menos elipse interna
  const disk =
    'M10 200a190 26 0 1 0 380 0a190 26 0 1 0-380 0ZM104 200a96 11 0 1 0 192 0a96 11 0 1 0-192 0Z';

  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id={id('halo')} cx="50%" cy="50%" r="50%">
          <stop offset="28%" stopColor="#0ea5e9" stopOpacity="0.38" />
          <stop offset="62%" stopColor="#0284c7" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={id('disk')} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#0369a1" stopOpacity="0" />
          <stop offset="0.2" stopColor="#0284c7" />
          <stop offset="0.45" stopColor="#38bdf8" />
          <stop offset="0.6" stopColor="#e0f2fe" />
          <stop offset="0.82" stopColor="#0ea5e9" />
          <stop offset="1" stopColor="#0369a1" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={id('ring')} x1="1" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#0284c7" stopOpacity="0.5" />
          <stop offset="0.55" stopColor="#7dd3fc" />
          <stop offset="1" stopColor="#e0f2fe" />
        </linearGradient>
        <clipPath id={id('front')}>
          <rect x="0" y="200" width="400" height="200" />
        </clipPath>
        <filter id={id('soft')} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
      </defs>

      <circle className={glow ? 'bh-glow' : undefined} cx="200" cy="200" r="198" fill={url('halo')} />

      {/* disco inteiro: o trecho de trás fica escondido pela sombra */}
      <g transform="rotate(-14 200 200)">
        <path d={disk} fill={url('disk')} fillRule="evenodd" opacity="0.95" />
      </g>

      {/* lente gravitacional: o lado de trás do disco aparece curvado por cima e por baixo da sombra */}
      <g transform="rotate(-14 200 200)">
        <path d="M96 200A104 104 0 0 1 304 200" fill="none" stroke={url('disk')} strokeWidth="22" strokeLinecap="round" opacity="0.9" />
        <path d="M110 200A90 90 0 0 0 290 200" fill="none" stroke={url('disk')} strokeWidth="6" strokeLinecap="round" opacity="0.55" />
      </g>

      {/* luz curvada ao redor do horizonte de eventos */}
      <circle cx="200" cy="200" r="84" fill="none" stroke={url('ring')} strokeWidth="14" opacity="0.7" filter={`url(#${id('soft')})`} />
      <circle cx="200" cy="200" r="78" fill="#000" />
      <circle cx="200" cy="200" r="78" fill="none" stroke={url('ring')} strokeWidth="2.5" />

      {/* parte da frente do disco, passando sobre a sombra */}
      <g transform="rotate(-14 200 200)">
        <path d={disk} fill={url('disk')} fillRule="evenodd" clipPath={url('front')} />
      </g>
    </svg>
  );
}
