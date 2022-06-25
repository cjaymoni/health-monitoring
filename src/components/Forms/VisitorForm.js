import React from 'react';
import moment from 'moment';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import Textfield from '../FormsUI/Textfield';
import TimePicker from 'components/FormsUI/TimePicker';
import Select from '../FormsUI/Select';
import DateTimePicker from '../FormsUI/DataTimePicker';
import Button from '../FormsUI/Button';
import { doctors } from '../../@fake-db/doctors/doctors';
import SuccessAlert from 'components/AlertMessages/SuccessAlert';
import ErrorAlert from 'components/AlertMessages/ErrorAlert';
import { sendPostRequest, API_ENDPOINTS } from '../../services';
import { ConstructionOutlined } from '@mui/icons-material';
import { isSameOrBefore, convertDateAndTimeToMoment } from '../../components/utils/date-time-utils';


const useStyles = makeStyles(theme => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));

const INITIAL_FORM_STATE = {
  name: '',
  phone: '',
  doctor: '',
  patient: '',
  appointment: '',
  start_time: '',
  end_time: '',
  date: '',
};

const FORM_VALIDATION = Yup.object().shape({
  name: Yup.string()
  .required("Please enter your name.")
  .min(4, 'Last name should be at least 2 characters'),
  phone: Yup.number()
    .integer()
    .typeError('Please enter a valid phone number')
    .required('Please enter a phone number')
    .min(10, 'Phone number should be at least 10 digits for local numbers'),
  doctor: Yup.string(),
  patient: Yup.string()
    .required("Please enter the patient's name.")
    .min(2, 'Last name should be at least 2 characters'),
  appointment: Yup.string()
    .required('Please indicate if you have an appointment.'),
  date: Yup.date()
    .min(new Date(), 'Date cannot be before today.')
    .required('Please enter the a date of visit'),
  start_time: Yup.string()
    .required('Please enter the start time of visit')
    .test('startTime_currentTime_test', 'Start time cannot be before current time.', function(value) {
      const { date } = this.parent;
      if (!date) {
        return true;
      }
      const actualStartTime = convertDateAndTimeToMoment(date.toLocaleDateString(), value);
      const actualTimeNow = moment();


      return isSameOrBefore(actualTimeNow, actualStartTime);
    })
    .test('startTime_endTime_test', 'Start time must be before end time.', function(value) {
      const { date, end_time } = this.parent;
      if (!end_time || !date) {
        return true;
      }
      const actualStartTime = convertDateAndTimeToMoment(date.toLocaleDateString(), value);
      const actualEndTime = convertDateAndTimeToMoment(date.toLocaleDateString(), end_time);
      return isSameOrBefore(actualStartTime, actualEndTime);
    }),
  end_time: Yup.string()
    .required('Please enter the end time of visit')

});
const doctorsAvailable = doctors.reduce((acc, cur) => ({ ...acc, [cur.name]: cur.name }), {});

const datetimeformat = 'MM/DD/YYYY HH:mm';


const displayAlert = (alertMessageType = 0, errorState = null) => {
  if (alertMessageType === 1) {
    return <SuccessAlert message={'New visit information added successfully.'} />;
  }
  if (alertMessageType === -1) {
    return (
      <ErrorAlert
        message={'Sorry, visit information was not added for the following reasons: '.concat(JSON.stringify(errorState))}
      />
    );
  }
  return null;
};

const VisitorForm = () => {
  const classes = useStyles();
  const [alertMessageType, setAlertMessageType] = React.useState(0); //sent successfully
  const [errorState, setErrorState] = React.useState(null); //defines the problem

  const handleFormSubmission = formData => {
    console.log("point1");
    sendPostRequest(API_ENDPOINTS.VISITS, formData).then(sendResponse => {
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
                      <Typography variant="h5">The HOLIFIED Visitor's Form</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Textfield name="name" label="Name" />
                    </Grid>

                    <Grid item xs={6}>
                      <Textfield name="phone" label="Phone" />
                    </Grid>

                    <Grid item xs={12}>
                      <Select name="doctor" label="Doctor Name" options={doctorsAvailable} />
                    </Grid>

                    <Grid item xs={6}>
                      <Textfield name="patient" label="Patient's Name" />
                    </Grid>

                    <Grid item xs={6}>
                      <Select name="appointment" label="Appointment" options={['yes', 'no']} />
                    </Grid>

                    <Grid item xs={12}>
                      <DateTimePicker name="date" label="Date of Visit" />
                    </Grid>

                    <Grid item xs={6}>
                      <TimePicker name="start_time" label="Start Time" />
                    </Grid>
                    <Grid item xs={6}>
                      <TimePicker name="end_time" label="End Time" />
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

export default VisitorForm;
