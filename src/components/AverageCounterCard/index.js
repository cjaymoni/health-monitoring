import React from 'react';
import CounterCard from '@jumbo/components/Common/CounterCard';

const AverageCounterCard = () => {
  return (
    <CounterCard
      icon={'/images/dashboard/filesIcon.svg'}
      number="4"
      label="Average patients per doctor"
      labelProps={{
        fontSize: 15,
      }}
      backgroundColor={['#F25247 -18.96%', '#B72D23 108.17%']}
      gradientDirection="180deg"
    />
  );
};

export default AverageCounterCard;
