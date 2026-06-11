'use client';

import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
  useReportWebVitals((metric) => {
    // We only log the metrics in development or if explicitly needed.
    // In production, this can be wired to Google Analytics or an endpoint.
    if (process.env.NODE_ENV === 'development') {
      const { id, name, value } = metric;
      
      // Calculate a color scale based on the web vital value.
      let isGood = true;
      if (name === 'LCP') isGood = value <= 2500;
      if (name === 'INP') isGood = value <= 200;
      if (name === 'CLS') isGood = value <= 0.1;
      if (name === 'FCP') isGood = value <= 1800;
      if (name === 'TTFB') isGood = value <= 800;

      console.log(
        `%c[Web Vitals] ${name}: ${Math.round(name === 'CLS' ? value * 1000 : value)}${name === 'CLS' ? '' : 'ms'}`,
        `color: ${isGood ? 'green' : 'red'}; font-weight: bold;`,
        `(ID: ${id})`
      );
    }
  });

  return null;
}
