export const data = {
  labels: [
    'React', 'Javascript', 'Typescript', 'CSS',
    'Tailwind', 'Next.js', 'Astro.js', 'Redux & Zustand', 'Node.js'
  ],
  datasets: [
    {
      label: 'Experiencia',
      data: [0.9, 1.3, 1.1, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3],
      backgroundColor: [
        '#EF4444', // React - Backend
        '#111111', // Javascript - Fullstack
        '#3B82F6', // Typescript - Frontend
        '#EF4444', // CSS - Backend
        '#3B82F6', // Tailwind - Frontend
        '#EF4444', // Next.js - Backend
        '#EF4444', // Astro.js - Backend
        '#EF4444', // Redux & Zustand - Backend
        '#EF4444', // Node.js - Backend
      ]
    }
  ]
};

export const options = {
  indexAxis: 'x',
  scales: {
    y: {
      min: 0,
      max: 2,
      ticks: {
        stepSize: 1,
        callback: function(value) {
          const labels = ['Aprendiz', 'Intermedio', 'Avanzado'];
          return labels[value] || '';
        }
      }
    }
  },
  plugins: {
    legend: {
      display: true,
      labels: {
        generateLabels: function(chart) {
          return [
            { text: 'Frontend', fillStyle: '#3B82F6' },
            { text: 'Backend', fillStyle: '#EF4444' },
            { text: 'Herramientas fullstack', fillStyle: '#111111' }
          ];
        }
      }
    },
    tooltip: {
      callbacks: {
        label: function(context) {
          const levels = ['Aprendiz', 'Intermedio', 'Avanzado'];
          return `${context.label}: ${levels[Math.round(context.parsed.y)]}`;
        }
      }
    }
  }
};
