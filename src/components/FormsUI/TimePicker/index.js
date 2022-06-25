/* import React from 'react';
import { TextField} from '@material-ui/core';
import { TimePicker } from "@material-ui/pickers";
import { useField, useFormikContext } from 'formik';

const TimePickerWrapper = ({ name, options, ...otherProps }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = evt => {
    const { value } = evt.target;
    setFieldValue(name, value);
  };

  const configSelect = {
    ...field,
    ...otherProps,
    select: true,
    variant: 'outlined',
    fullWidth: true,
    onChange: handleChange,
  };

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }

  return (
    <TextField {...configSelect}>
      <TimePicker
        showTodayButton
        todayLabel="now"
        views={["hours", "minutes"]}
        format="HH:mm"
        label="Step = 5"
        minutesStep={5}
        value={'20:45'}
        onChange={handleChange}
      />
    </TextField>
  );
};

export default TimePickerWrapper;
 */

import React from 'react';
import { TextField } from '@material-ui/core';
import { useField } from 'formik';

const TimePicker = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);

  const configTimePicker = {
    ...field,
    ...otherProps,
    type: 'time',
    variant: 'outlined',
    fullWidth: true,
    InputLabelProps: {
      shrink: true,
    },
  };

  if (meta && meta.touched && meta.error) {
    configTimePicker.error = true;
    configTimePicker.helperText = meta.error;
  }

  return <TextField {...configTimePicker} />;
};

export default TimePicker;
