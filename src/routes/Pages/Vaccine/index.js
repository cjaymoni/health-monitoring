import React from 'react';
import GridContainer from '../../../@jumbo/components/GridContainer';
import PageContainer from '../../../@jumbo/components/PageComponents/layouts/PageContainer';
import IntlMessages from '../../../@jumbo/utils/IntlMessages';
import Grid from '@material-ui/core/Grid';
//import Divider from '@material-ui/core/Divider';
import VaccineForm from 'components/Forms/VaccineForm';


const breadcrumbs = [
  { label: <IntlMessages id={'sidebar.main'} />, link: '/' },
  { label: <IntlMessages id={'pages.vaccine'} />, isActive: true },
];

const Vaccine = () => {
  return (
    <PageContainer heading={<IntlMessages id="pages.vaccine" />} breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={12}>
          <VaccineForm />
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default Vaccine;
