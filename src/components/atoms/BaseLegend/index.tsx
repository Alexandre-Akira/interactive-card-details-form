import { InputHTMLAttributes } from 'react';

import { Legend } from './styles';


export function BaseLegend (props: Omit<InputHTMLAttributes<HTMLLegendElement>, 'css'>) {
  return (
    <Legend {...props}/>
  );
}
