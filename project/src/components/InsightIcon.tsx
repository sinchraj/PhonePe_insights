interface InsightIconProps {
  hasUnseen: boolean;
  onClick: () => void;
}

export function InsightIcon({ hasUnseen, onClick }: InsightIconProps) {
  return (
    <button
      onClick={onClick}
      className="relative flex items-center justify-center group"
      aria-label="View insights"
    >
      {/* Instagram-style story ring - optimal size */}
      <div className={`
        relative w-14 h-14 rounded-full p-[2px] transition-all duration-300 ease-in-out transform group-active:scale-95
        ${hasUnseen 
          ? 'bg-gradient-to-tr from-purple-500 via-purple-600 to-pink-500' 
          : 'bg-gray-300'
        }
      `}>
        {/* White inner ring */}
        <div className="w-full h-full bg-white rounded-full p-[1px]">
          {/* Icon container */}
          <div className={`
            w-full h-full rounded-full flex items-center justify-center transition-all duration-300
            ${hasUnseen ? 'bg-purple-50' : 'bg-gray-50'}
          `}>
            {/* Much Larger Magnifying Glass with Dollar Icon */}
            <svg 
              width="40" 
              height="40" 
              viewBox="0 0 100 100" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-200 group-hover:scale-110"
            >
              {/* Magnifying glass main circle - much larger */}
              <circle 
                cx="35" 
                cy="35" 
                r="30" 
                stroke={hasUnseen ? "#8B5CF6" : "#6B7280"} 
                strokeWidth="8" 
                fill="none"
              />
              
              {/* Magnifying glass handle - thicker and longer */}
              <line 
                x1="58" 
                y1="58" 
                x2="85" 
                y2="85" 
                stroke={hasUnseen ? "#8B5CF6" : "#6B7280"} 
                strokeWidth="8" 
                strokeLinecap="round"
              />
              
              {/* Dollar coin background circle - larger */}
              <circle 
                cx="35" 
                cy="35" 
                r="20" 
                fill={hasUnseen ? "#8B5CF6" : "#6B7280"} 
                opacity="0.15"
              />
              
              {/* Dollar coin border - larger */}
              <circle 
                cx="35" 
                cy="35" 
                r="20" 
                stroke={hasUnseen ? "#8B5CF6" : "#6B7280"} 
                strokeWidth="3" 
                fill="none"
                opacity="0.4"
              />
              
              {/* Dollar sign - much larger and bolder */}
              <text 
                x="35" 
                y="45" 
                fontSize="24" 
                fill={hasUnseen ? "#8B5CF6" : "#6B7280"} 
                textAnchor="middle" 
                fontWeight="800"
                fontFamily="system-ui, -apple-system, sans-serif"
              >
                $
              </text>
            </svg>
          </div>
        </div>
      </div>
    </button>
  );
}
