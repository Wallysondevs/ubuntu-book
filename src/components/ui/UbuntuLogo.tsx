interface Props {
  size?: number;
  className?: string;
  /** "roundel" = disco laranja com amigos brancos · "mark" = só os amigos em currentColor */
  variant?: "roundel" | "mark";
}

// "Circle of Friends" — o símbolo público do Ubuntu (três amigos de mãos dadas).
export function UbuntuLogo({ size = 40, className, variant = "roundel" }: Props) {
  const roundel = variant === "roundel";
  const markColor = roundel ? "#fff" : "currentColor";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Ubuntu"
      role="img"
    >
      {roundel && <circle cx="50" cy="50" r="50" fill="#E95420" />}

      <g
        fill="none"
        stroke={markColor}
        strokeWidth="6"
        strokeLinecap="round"
      >
        {/* anel quebrado (três arcos, com folgas onde ficam os amigos) */}
        <path d="M61.29 19.0 A33 33 0 0 1 82.5 55.7" />
        <path d="M71.2 75.3 A33 33 0 0 1 28.8 75.3" />
        <path d="M17.5 55.7 A33 33 0 0 1 38.7 19.0" />
        {/* braços (do centro até cada amigo) */}
        <path d="M50 50 L50 17" />
        <path d="M50 50 L78.6 66.5" />
        <path d="M50 50 L21.4 66.5" />
      </g>

      <g fill={markColor}>
        {/* hub central + três amigos */}
        <circle cx="50" cy="50" r="7" />
        <circle cx="50" cy="17" r="8" />
        <circle cx="78.6" cy="66.5" r="8" />
        <circle cx="21.4" cy="66.5" r="8" />
      </g>
    </svg>
  );
}
