interface Props {
  size: number;
  percentage: number;
  strokeWidth: number;
}

const CircleProgress = (props: Props) => {
  const { size, percentage, strokeWidth } = props;

  const radius = (size - strokeWidth) / 2;
  const viewBox = `0 0 ${size} ${size}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <div>
      <svg width={size} height={size} viewBox={viewBox}>
        <circle
          r={radius}
          cx={size / 2}
          cy={size / 2}
          className="fill-none stroke-card"
          strokeWidth={`${strokeWidth}px`}
        />
        <circle
          r={radius}
          cx={size / 2}
          cy={size / 2}
          className="circle-progress"
          strokeWidth={`${strokeWidth}px`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
        />

        <text
          x="50%"
          y="50%"
          dy=".3em"
          textAnchor="middle"
          className="text-base font-semibold fill-primary"
        >
          {`${percentage}%`}
        </text>
      </svg>
    </div>
  );
};

export default CircleProgress;
