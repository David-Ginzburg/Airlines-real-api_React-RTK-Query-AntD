import { Pie } from '@ant-design/plots';
import { Result } from 'antd';

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

  if (!pieCountryData.length) {
    return <Result
      status="500"
      title="500"
      subTitle="No data"
    />
  }

  return <Pie {...config} />;
}

export default PieCountryAirlines