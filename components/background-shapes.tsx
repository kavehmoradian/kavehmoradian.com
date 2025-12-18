export function BackgroundShapes() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* DevOps Pattern - Gears and Circular Arrows */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03]"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Large Gear with Circular Arrow - Top Left */}
        <g transform="translate(150, 100)">
          <circle cx="0" cy="0" r="80" fill="none" stroke="currentColor" strokeWidth="3" />
          <circle cx="0" cy="0" r="25" fill="none" stroke="currentColor" strokeWidth="3" />
          {/* Gear teeth */}
          {Array.from({ length: 8 }).map((_, i) => (
            <rect key={i} x="-8" y="-85" width="16" height="15" fill="currentColor" transform={`rotate(${i * 45})`} />
          ))}
          {/* Circular arrow */}
          <path
            d="M 0,-120 A 120,120 0 0,1 84.85,-84.85"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            markerEnd="url(#arrowhead)"
          />
        </g>

        {/* Medium Gear - Center Right */}
        <g transform="translate(900, 300)">
          <circle cx="0" cy="0" r="60" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="0" cy="0" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
          {/* Gear teeth */}
          {Array.from({ length: 6 }).map((_, i) => (
            <rect key={i} x="-6" y="-65" width="12" height="12" fill="currentColor" transform={`rotate(${i * 60})`} />
          ))}
        </g>

        {/* Small Gear with Circular Arrow - Bottom Left */}
        <g transform="translate(200, 600)">
          <circle cx="0" cy="0" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="0" cy="0" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
          {/* Gear teeth */}
          {Array.from({ length: 6 }).map((_, i) => (
            <rect key={i} x="-5" y="-50" width="10" height="10" fill="currentColor" transform={`rotate(${i * 60})`} />
          ))}
          {/* Circular arrow */}
          <path
            d="M 0,70 A 70,70 0 0,0 -49.5,49.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            markerEnd="url(#arrowhead-small)"
          />
        </g>

        {/* Large Circular Arrow - Top Right */}
        <g transform="translate(1000, 150)">
          <path
            d="M 0,-100 A 100,100 0 1,1 -70.71,70.71"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            markerEnd="url(#arrowhead)"
          />
          <circle cx="0" cy="0" r="30" fill="none" stroke="currentColor" strokeWidth="2" />
        </g>

        {/* Medium Circular Arrow - Center Left */}
        <g transform="translate(100, 400)">
          <path
            d="M 0,80 A 80,80 0 1,0 56.57,-56.57"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            markerEnd="url(#arrowhead-small)"
          />
        </g>

        {/* Pipeline/Flow Lines */}
        <g opacity="0.5">
          <path
            d="M 300,200 Q 500,150 700,200 T 1100,250"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="10,10"
          />
          <path
            d="M 150,500 Q 400,450 650,500 T 950,550"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="8,8"
          />
        </g>

        {/* Arrow markers */}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
          </marker>
          <marker id="arrowhead-small" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="currentColor" />
          </marker>
        </defs>
      </svg>

      {/* Subtle gradient overlays for depth */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-3xl transform -translate-x-32 -translate-y-32 rotate-45 rounded-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-accent/5 to-transparent backdrop-blur-3xl transform translate-x-36 translate-y-36 -rotate-12 rounded-3xl"></div>
    </div>
  )
}
