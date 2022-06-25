import React from 'react';
import GridContainer from '../../../@jumbo/components/GridContainer';
import PageContainer from '../../../@jumbo/components/PageComponents/layouts/PageContainer';
import IntlMessages from '../../../@jumbo/utils/IntlMessages';
import Grid from '@material-ui/core/Grid';
//import Divider from '@material-ui/core/Divider';
import VisitorForm from 'components/Forms/VisitorForm';


const breadcrumbs = [
  { label: <IntlMessages id={'sidebar.main'} />, link: '/' },
  { label: <IntlMessages id={'pages.visits'} />, isActive: true },
];

const Visits = () => {
  return (
    <PageContainer heading={<IntlMessages id="pages.visits" />} breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={12}>
          <VisitorForm />
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default Visits;
