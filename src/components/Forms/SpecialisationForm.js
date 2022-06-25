import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import Textfield from '../FormsUI/Textfield';
import Select from '../FormsUI/Select';
import DateTimePicker from '../FormsUI/DataTimePicker';
import SuccessAlert from 'components/AlertMessages/SuccessAlert';
import ErrorAlert from 'components/AlertMessages/ErrorAlert';
import Button from '../FormsUI/Button';
import { sendPostRequest, API_ENDPOINTS } from '../../services';

const useStyles = makeStyles(theme => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));

const INITIAL_FORM_STATE = {
  name: '',
  description: '',
};

const FORM_VALIDATION = Yup.object().shape({
  first_name: Yup.string()
    .required('Please enter a first name.')
    .min(2, 'First name should be at least 2 characters'),
  last_name: Yup.string()
    .required('Please enter a last name.')
    .min(2, 'Last name should be at least 2 characters'),
});

const displayAlert = (alertMessageType = 0, errorState = null) => {
  if (alertMessageType === 1) {
    return <SuccessAlert message={'New specialisation information added successfully.'} />;
  }
  if (alertMessageType === -1) {
    return (
      <ErrorAlert
        message={'Sorry, specialisation information was not added for the following reasons: '.concat(JSON.stringify(errorState))}
      />
    );
  }
  return null;
};

const SpecialisationForm = () => {
  const [alertMessageType, setAlertMessageType] = React.useState(0);
  const [errorState, setErrorState] = React.useState(null);
  const classes = useStyles();

  const handleFormSubmission = formData => {
    sendPostRequest(API_ENDPOINTS.SPECIALISATION, formData).then(sendResponse => {
      if (sendResponse && sendResponse.data) {
        setAlertMessageType(1);
      } else {
        setErrorState(sendResponse.response.data);
        setAlertMessageType(-1);
      }
    });
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <Grid item xs={12}>
            {displayAlert(alertMessageType, errorState)}
          </Grid>
          <div className={classes.formWrapper}>
            <Formik
              initialValues={{
                ...INITIAL_FORM_STATE,
              }}
              validationSchema={FORM_VALIDATION}
              onSubmit={(values, { resetForm }) => {
                handleFormSubmission(values);
                resetForm();
              }}>
              {({ resetForm }) => (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="h5">The HOLIFIED Specialisation Form</Typography>
                    </Grid>

                    <Grid item xs={12}>
                      <Textfield name="name" label="Name" />
                    </Grid>

                    <Grid item xs={12}>
                      <Textfield name="description" label="Description" />
                    </Grid>

                    <Grid item xs={5}>
                      <Button type="submit" color="primary">
                        Submit Form
                      </Button>
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={5}>
                      <Button color="secondary" type="cancel">
                        Cancel
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  );
};

export default SpecialisationForm;
