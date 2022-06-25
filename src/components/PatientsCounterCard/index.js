import React from 'react';
import CounterCard from '../../@jumbo/components/Common/CounterCard';

const PatientsCounterCard = () => {
  return (
    <CounterCard
      icon={'/images/dashboard/tasksIcon.svg'}
      number="97"
      label="Patients"
      labelProps={{
        fontSize: 15,
      }}
      backgroundColor={['#5AB9FE -18.96%', '#1372B7 108.17%']}
      gradientDirection="180deg"
    />
  );
};

export default PatientsCounterCard;
