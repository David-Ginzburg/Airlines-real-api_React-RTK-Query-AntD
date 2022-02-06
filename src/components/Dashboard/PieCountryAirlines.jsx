import { Pie } from '@ant-design/plots';

const PieCountryAirlines = ({pieCountryData}) => {
  const config = {
    appendPadding: 10,
    data: pieCountryData,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  }

  return <Pie {...config} />;
}

export default PieCountryAirlines