import React from 'react';
import moment from 'moment';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import Textfield from '../FormsUI/Textfield';
import Select from '../FormsUI/Select';
import DateTimePicker from '../FormsUI/DataTimePicker';
import Button from '../FormsUI/Button';
import SuccessAlert from 'components/AlertMessages/SuccessAlert';
import ErrorAlert from 'components/AlertMessages/ErrorAlert';
import { sendPostRequest, API_ENDPOINTS } from '../../services';



const useStyles = makeStyles(theme => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));

const INITIAL_FORM_STATE = {
  name:'',
  date_of_birth: '',
  sex: '',
  region: '',
  district: '',
  sub_district: '',
  community: '',
  town: '',
  place_of_vaccination: '',
  description: '',
  recommended_dosage: '',
};

const sexOptions = {
    male: 'male',
    female: 'female',
    other: 'other',
  };

const FORM_VALIDATION = Yup.object().shape({
    name: Yup.string()
    .required("Please enter the patient's name.")
    .min(2, 'Last name should be at least 2 characters'),
    date_of_birth: Yup.date().required('Please enter the date of birth.'),
    sex: Yup.string().required('Please indicate your sex.'),
    region: Yup.string().required('Please enter the region.'),
    district: Yup.string().required('Please enter the district.'),
    sub_district: Yup.string().required('Please enter the sub-district.'),
    community: Yup.string().required('Please enter the community.'),
    town: Yup.string().required('Please enter the town.'),
    place_of_vaccination: Yup.string().required('Please enter the place of vaccination.'),
    description: Yup.string().required('Please enter the vaccine description.'),
    recommended_dosage: Yup.string().required('Please enter the recommended dosage.'),
  
});



const displayAlert = (alertMessageType = 0, errorState = null) => {
  if (alertMessageType === 1) {
    return <SuccessAlert message={'New vaccine information added successfully.'} />;
  }
  if (alertMessageType === -1) {
    return (
      <ErrorAlert
        message={'Sorry, vaccine information was not added for the following reasons: '.concat(JSON.stringify(errorState))}
      />
    );
  }
  return null;
};

const VaccineForm = () => {
  const classes = useStyles();
  const [alertMessageType, setAlertMessageType] = React.useState(0); //sent successfully
  const [errorState, setErrorState] = React.useState(null); //defines the problem

  const handleFormSubmission = formData => {
    console.log("point1");
    sendPostRequest(API_ENDPOINTS.VACCINE, formData).then(sendResponse => {
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
                console.log(values);
                handleFormSubmission(values);
                resetForm();
              }}>
              {({ resetForm }) => (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="h5">The HOLIFIED Vaccine Form</Typography>
                    </Grid>

                    <Grid item xs={12}>
                      <Textfield name="name" label="Name"/>
                    </Grid>
                    <Grid item xs={12}>
                      <DateTimePicker name="date_of_birth" label="Date of Birth" />
                    </Grid>
                    <Grid item xs={6}>
                      <Select name="sex" label="Sex" options={sexOptions} />
                    </Grid>
                    <Grid item xs={6}>
                      <Textfield name="district" label="District" />
                    </Grid>
                    <Grid item xs={6}>
                      <Textfield name="sub-district" label="Sub-District"/>
                    </Grid>
                    <Grid item xs={6}>
                      <Textfield name="community" label="Community"/>
                    </Grid>
                    <Grid item xs={6}>
                      <Textfield name="town" label="Town"/>
                    </Grid>
                    <Grid item xs={6}>
                      <Textfield name="place of vaccination" label="Place of Vaccination"/>
                    </Grid>
                    <Grid item xs={6}>
                      <Textfield name="Description" label="Description"/>
                    </Grid>
                    <Grid item xs={6}>
                      <Textfield name="recommended dosage" label="Recommended Dosage"/>
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

export default VaccineForm;
