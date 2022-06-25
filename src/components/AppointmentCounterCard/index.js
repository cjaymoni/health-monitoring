import React from 'react';
import CounterCard from '../../@jumbo/components/Common/CounterCard';

const AppointmentCounterCard = () => {
  return (
    <CounterCard
      icon={'/images/dashboard/projectIcon.svg'}
      number="50"
      label="Total Appointments"
      labelProps={{
        fontSize: 15,
      }}
      backgroundColor={['#8E49F0 -18.96%', '#4904AB 108.17%']}
      gradientDirection="180deg"
    />
  );
};

export default AppointmentCounterCard;
