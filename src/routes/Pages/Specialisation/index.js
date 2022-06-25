import React from 'react';
import GridContainer from '../../../@jumbo/components/GridContainer';
import PageContainer from '../../../@jumbo/components/PageComponents/layouts/PageContainer';
import IntlMessages from '../../../@jumbo/utils/IntlMessages';
import Grid from '@material-ui/core/Grid';
//import Divider from '@material-ui/core/Divider';
import SpecialisationForm from 'components/Forms/SpecialisationForm';

const breadcrumbs = [
  { label: <IntlMessages id={'sidebar.main'} />, link: '/' },
  { label: <IntlMessages id={'pages.specialisation'} />, isActive: true },
];

const Specialisation = () => {
  return (
    <PageContainer heading={<IntlMessages id="pages.specialisation" />} breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={12}>
          <SpecialisationForm />
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default Specialisation;
