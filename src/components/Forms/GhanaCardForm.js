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
import countryOptions from './data/countries.json';
import { sendPostRequest, API_ENDPOINTS } from '../../services';

const useStyles = makeStyles(theme => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));

const INITIAL_FORM_STATE = {
  surname: '',
  first_name: '',
  other_names: '',
  date_of_birth:'',
  sex: '',
  nationality: '',
  height: '',
  place_of_issuance: '',
  personal_id_number: '',
  document_number: '',
  date_of_issuance: '',
  date_of_expiry:'',
};

const sexOptions = {
  male: 'male',
  female: 'female',
  other: 'other',
};

const FORM_VALIDATION = Yup.object().shape({
    surname: Yup.string()
    .required('Please enter a last name.')
    .min(2, 'Last name should be at least 2 characters'),
    first_name: Yup.string()
    .required('Please enter a first name.')
    .min(2, 'First name should be at least 2 characters'),
    other_names: Yup.string(),
    date_of_birth: Yup.date().required('Please enter the date of birth.'),
    sex: Yup.string().required('Please indicate your sex.'),
    nationality: Yup.string().required('Please enter the nationality.'),
    height: Yup.number()
    .integer()
    .typeError('Please enter a valid height (Numbers only).')
    .required('Please enter a valid height'),
    place_of_issuance: Yup.string().required('Please enter the place of issuance.'),
    personal_id_number: Yup.string(),
    document_number: Yup.string(),
    date_of_issuance: Yup.date().required('Please enter the date of issuance.'),
    date_of_expiry: Yup.date().required('Please enter the date of expiry.'),

});

const displayAlert = (alertMessageType = 0, errorState = null) => {
  if (alertMessageType === 1) {
    return <SuccessAlert message={'New ghana card information added successfully.'} />;
  }
  if (alertMessageType === -1) {
    return (
      <ErrorAlert
        message={'Sorry, ghana card information was not added for the following reasons: '.concat(JSON.stringify(errorState))}
      />
    );
  }
  return null;
};

const GhanaCardForm = () => {
  const [alertMessageType, setAlertMessageType] = React.useState(0);
  const [errorState, setErrorState] = React.useState(null);
  const classes = useStyles();

  const handleFormSubmission = formData => {
    sendPostRequest(API_ENDPOINTS.GHANACARD, formData).then(sendResponse => {
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
                      <Typography variant="h5">The HOLIFIED Ghana Card Form</Typography>
                    </Grid>

                    <Grid item xs={4}>
                      <Textfield name="surname" label="Surname" />
                    </Grid>

                    <Grid item xs={4}>
                      <Textfield name="first_name" label="First Name" />
                    </Grid>

                    <Grid item xs={4}>
                      <Textfield name="other_names" label="Other Name(s)" />
                    </Grid>

                    <Grid item xs={12}>
                      <DateTimePicker name="date_of_birth" label="Date of Birth" />
                    </Grid>

                    <Grid item xs={6}>
                      <Select name="sex" label="Sex" options={sexOptions} />
                    </Grid>

                    <Grid item xs={6}>
                      <Select name="nationality" label="Nationality" options={countryOptions} />
                    </Grid>

                    <Grid item xs={6}>
                      <Textfield name="height" label="Height" />
                    </Grid>

                    <Grid item xs={6}>
                      <Textfield name="place_of_issuance" label="Place of Issuance"/>
                    </Grid>
                    
                    <Grid item xs={6}>
                      <Textfield name="personal_id_number" label="Personal ID Number" />
                    </Grid>

                    <Grid item xs={6}>
                      <Textfield name="document_number" label="Document Number" />
                    </Grid>

                    <Grid item xs={12}>
                      <DateTimePicker name="date_of_issuance" label="Date of Issuance" />
                    </Grid>

                    <Grid item xs={12}>
                      <DateTimePicker name="date_of_expiry" label="Date of Expiry" />
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

export default GhanaCardForm;
