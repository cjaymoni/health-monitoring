import React,{useEffect, useState} from 'react';
import GridContainer from '../../../@jumbo/components/GridContainer';
import PageContainer from '../../../@jumbo/components/PageComponents/layouts/PageContainer';
import IntlMessages from '../../../@jumbo/utils/IntlMessages';
import Grid from '@material-ui/core/Grid';
//import Divider from '@material-ui/core/Divider';
import Trends from 'components/Trends/Trends';
import AppContext from '@jumbo/components/contextProvider/AppContextProvider/AppContext';
import MaterialTableDemo from '../../../components/DataTable';
import PatientDataTable from 'components/DataTable/PatientDataTable';
import StatusPieChart from 'components/StatusPieChart';
import { Roles } from 'routes/Roles';
import { API_ENDPOINTS, sendGetRequest } from 'services';

const breadcrumbs = [
  { label: <IntlMessages id={'sidebar.main'} />, link: '/' },
  { label: <IntlMessages id={'pages.dashboard'} />, isActive: true },
];

const tableColumns =  [
  { title: 'Doctor', field: 'doctor' },
  { title: 'Date', field: 'date' },
  { title: 'Name', field: 'name' },

  {
    title: 'Phone',
    field: 'phone',
  },
  {
    title: 'Duration',
    field: 'duration',
  },
  { title: 'Status', field: 'status' },
];

const PatientColumns =  [
  { title: 'FirstName', field: 'firstname' },
  { title: 'LastName', field: 'lastname' },
  { title: 'ID', field: 'ID' },

  {
    title: 'Gender',
    field: 'gender',
  },
  {
    title: 'Phone',
    field: 'phone',
  },
];

const tableData = [
  {
    doctor: 'Dr Sowah',
    date: '12/04/2022',
    name: 'Traci Gyebi',
    phone: '0507229176',
    duration: '2 hours',
    status: 'honored',
  },
  {
    doctor: 'Dr Sowah',
    date: '12/04/2022',
    name: 'Traci Gyebi',
    phone: '0507229176',
    duration: '2 hours',
    status: 'honored',
  },
];

const PatienttData = [
  {
    firstname: 'Bill',
    lastname: 'Clinton',
    ID: '3024',
    gender: 'male',
    phone: '0507229176',
  },
  {
    firstname: 'Bill',
    lastname: 'Clinton',
    ID: '3024',
    gender: 'male',
    phone: '0507229176',
  },
];



const Dashboard = () => {
  const [fetchedData,setFetchedData]= useState([])
  const tableDataSelector = (userRole)=> { 
    if (userRole===Roles.RECEPTIONIST){
      sendGetRequest(API_ENDPOINTS.APPOINTMENTS).then(getResponse => {
          setFetchedData(getResponse.data.results)
        });
        return {
          columns:tableColumns,
          data:fetchedData,
          title: 'Appointment'
        }      
    }
    if (userRole===Roles.NURSE){
      sendGetRequest(API_ENDPOINTS.PATIENT).then(getResponse => {
        console.log(getResponse.data);
      });
      return {
        columns:PatientColumns,
        data:PatienttData,
        title: 'Patient Data'
      }
    }
   
  }
  
  const {userRole} = React.useContext(AppContext);
 const tableInfo = tableDataSelector(userRole);
  // useEffect(()=>{ 
  // },[])table
console.log(tableInfo)
  return (
    <PageContainer heading={<IntlMessages id="pages.dashboard" />} breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={12}>
          <Trends/>
        </Grid>
        <Grid item xs={8}>
          <PatientDataTable tableColumns={tableInfo.columns} tableData={tableInfo.data} tableTitle={tableInfo.title}/>
        </Grid>
        <Grid item xs={4}>
          <StatusPieChart  />
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default Dashboard;
