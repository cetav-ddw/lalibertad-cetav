import { FaMale, FaFemale, FaUsers } from 'react-icons/fa';

export const StatsData = {
  genderStats: [
    { icon: FaFemale, number: '124', label: 'Mujeres', percentage: '42%' },
    { icon: FaMale, number: '168', label: 'Hombres', percentage: '58%' },
    {
      icon: FaUsers,
      number: '292',
      label: 'Estudiantes de 3 generaciones.',
      percentage: 'total',
    },
  ],
  donutChartStats: [
    { name: '87% Trabajando en su área', value: 80 },
    { name: '6% Trabajando en otra área', value: 10 },
    { name: '4% Sin trabajo', value: 10 },
    { name: '3% Vendiendo servicios (freelance)', value: 10 },
  ],
};
