'use client';

import { useMemo, useRef } from 'react';
import * as d3 from 'd3';
import styles from './donut-chart.module.css';

const MARGIN_X = 150;
const MARGIN_Y = 50;
const INFLEXION_PADDING = 20;

const colors = ['#000000', '#747474', '#9a9a9a', '#4d4d4d'];

const DonutChart = ({ width, height, data }) => {
  const ref = useRef(null);

  const radius = Math.min(width - 2 * MARGIN_X, height - 2 * MARGIN_Y) / 2;
  const innerRadius = radius / 2;

  const pie = useMemo(() => {
    const pieGenerator = d3.pie().value((d) => d.value);
    return pieGenerator(data);
  }, [data]);

  const arcGenerator = d3.arc();

  const shapes = pie.map((grp, i) => {
    const sliceInfo = {
      innerRadius,
      outerRadius: radius,
      startAngle: grp.startAngle,
      endAngle: grp.endAngle,
    };
    const centroid = arcGenerator.centroid(sliceInfo);
    const slicePath = arcGenerator(sliceInfo);

    const inflexionInfo = {
      innerRadius: radius + INFLEXION_PADDING,
      outerRadius: radius + INFLEXION_PADDING,
      startAngle: grp.startAngle,
      endAngle: grp.endAngle,
    };
    const inflexionPoint = arcGenerator.centroid(inflexionInfo);

    const isRightLabel = inflexionPoint[0] > 0;
    const labelPosX = inflexionPoint[0] + 50 * (isRightLabel ? 1 : -1);
    const textAnchor = isRightLabel ? 'start' : 'end';
    const label = `${grp.data.name} `;

    return (
      <g
        key={i}
        className={styles.slice}
        onMouseEnter={() => {
          if (ref.current) {
            ref.current.classList.add(styles.hasHighlight);
          }
        }}
        onMouseLeave={() => {
          if (ref.current) {
            ref.current.classList.remove(styles.hasHighlight);
          }
        }}
      >
        <path d={slicePath} fill={colors[i]} />
        <circle cx={centroid[0]} cy={centroid[1]} r={2} />
        <line
          x1={centroid[0]}
          y1={centroid[1]}
          x2={inflexionPoint[0]}
          y2={inflexionPoint[1]}
          stroke={'black'}
          fill={'black'}
        />
        <line
          x1={inflexionPoint[0]}
          y1={inflexionPoint[1]}
          x2={labelPosX}
          y2={inflexionPoint[1]}
          stroke={'black'}
          fill={'black'}
        />
        <text
          x={labelPosX + (isRightLabel ? 2 : -2)}
          y={inflexionPoint[1]}
          textAnchor={textAnchor}
          dominantBaseline="middle"
          fontSize={14}
        >
          {label}
        </text>
      </g>
    );
  });

  const centerTextLine1 = '292';
  const centerTextLine2 = 'personas';
  const centerTextLine3 = 'egresadas';

  return (
    <svg width={width} height={height} style={{ display: 'inline-block' }}>
      <g
        transform={`translate(${width / 2}, ${height / 2})`}
        className={styles.container}
        ref={ref}
      >
        {shapes}
        <text textAnchor="middle" dominantBaseline="central">
          <tspan x="0" dy="-20">
            {centerTextLine1}
          </tspan>
          <tspan x="0" dy="20">
            {centerTextLine2}
          </tspan>{' '}
          <tspan x="0" dy="20">
            {centerTextLine3}
          </tspan>
        </text>
      </g>
    </svg>
  );
};

export default DonutChart;
