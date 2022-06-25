import React from 'react';
import GridContainer from '../../../@jumbo/components/GridContainer';
import PageContainer from '../../../@jumbo/components/PageComponents/layouts/PageContainer';
import IntlMessages from '../../../@jumbo/utils/IntlMessages';
import Grid from '@material-ui/core/Grid';
//import Divider from '@material-ui/core/Divider';
import PatientForm from 'components/Forms/PatientForm';

const breadcrumbs = [
  { label: <IntlMessages id={'sidebar.main'} />, link: '/' },
  { label: <IntlMessages id={'pages.patients'} />, isActive: true },
];

const Patient = () => {
  return (
    <PageContainer heading={<IntlMessages id="pages.patients" />} breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={12}>
          <PatientForm />
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default Patient;
