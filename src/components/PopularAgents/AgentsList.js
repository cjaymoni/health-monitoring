import React from 'react';
import AgentItem from './AgentItem';
import CmtList from '@coremat/CmtList';
import PerfectScrollbar from 'react-perfect-scrollbar';


const profileForTheMonth = [{
  id: 1,
    name: 'Dr. Traci Gyebi',
    deals: 23,
    profilePic: 'https://media-exp1.licdn.com/dms/image/C4D03AQHkgkf9QKpOzw/profile-displayphoto-shrink_800_800/0/1640605975403?e=1655942400&v=beta&t=FUEx4wH6zhwOcfJNPZbH6WH-z0Un1JSIZot_AweKSfM',
    rating: 4.8,
    profileCompleted: 10,
}]

const AgentsList = () => {
  return (
    <PerfectScrollbar style={{ width: '100%' }}>
      <CmtList
        data={profileForTheMonth}
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginLeft: -10,
          marginRight: -10,
        }}
        renderRow={(item, index) => <AgentItem key={index} item={item} />}
      />
    </PerfectScrollbar>
  );
};

export default AgentsList;
