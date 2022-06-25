import React from 'react';
import GridContainer from '../../../@jumbo/components/GridContainer';
import PageContainer from '../../../@jumbo/components/PageComponents/layouts/PageContainer';
import IntlMessages from '../../../@jumbo/utils/IntlMessages';
import Grid from '@material-ui/core/Grid';
//import Divider from '@material-ui/core/Divider';
import GhanaCardForm from 'components/Forms/GhanaCardForm';

const breadcrumbs = [
  { label: <IntlMessages id={'sidebar.main'} />, link: '/' },
  { label: <IntlMessages id={'pages.ghanacard'} />, isActive: true },
];

const GhanaCard = () => {
  return (
    <PageContainer heading={<IntlMessages id="pages.ghanacard" />} breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={12}>
          <GhanaCardForm />
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default GhanaCard;
