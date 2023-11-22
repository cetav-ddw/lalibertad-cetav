import { FaMale, FaFemale } from 'react-icons/fa';

export const genderStatsData = [
  { number: '292', label: 'Estudiantes de 3 generaciones.' },
  { number: '101', label: 'Estudiantes de Empléate.' },
  { icon: FaFemale, number: '124', label: 'Mujeres', percentage: '42%' },
  { icon: FaMale, number: '168', label: 'Hombres', percentage: '58%' },
];

export const donutChartStats = [
  {
    number: 292,
    percentage: '100%',
    label: 'Personas egresadas',
    position: { top: '300px', left: '270px' },
  },
  {
    number: 79,
    label: 'Trabajando en su área',
    percentage: '87%',
    position: { top: '300px' },
  },
  {
    number: 5,
    label: 'Trabajando en otra área',
    percentage: '6%',
    position: { top: '360px', right: '95px' },
  },
  {
    number: 16,
    label: 'Sin trabajo',
    percentage: '4%',
    position: { top: '300px', right: '175px' },
  },
  {
    number: 5,
    label: 'Vendiendo servicios ( freelance )',
    percentage: '3%',
    position: { top: '240px', right: '35px' },
  },
];
