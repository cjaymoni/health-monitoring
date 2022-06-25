import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Grid } from '@material-ui/core';
import GridContainer from '@jumbo/components/GridContainer';
import AppointmentCounterCard from 'components/AppointmentCounterCard';
import PatientsCounterCard from 'components/PatientsCounterCard';
import AverageCounterCard from 'components/AverageCounterCard';
import PopularAgents from 'components/PopularAgents';

const useStyles = makeStyles(theme => ({
    orderLg2: {
      [theme.breakpoints.up('lg')]: {
        order: 2,
      },
    },
    orderLg1: {
      [theme.breakpoints.up('lg')]: {
        order: 1,
      },
    },
  }));

export default function Trends() {
  const classes = useStyles();
    return (
        <Grid item xs={12} xl={8} className={classes.orderLg1}>
            <GridContainer>
            <Grid item xs={12} sm={6} md={3}>
                <AppointmentCounterCard />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <PatientsCounterCard />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <AverageCounterCard />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <PopularAgents/>
            </Grid>
            </GridContainer>
      </Grid>
    );
  }