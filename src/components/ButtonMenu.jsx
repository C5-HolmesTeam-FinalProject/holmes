import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const countries = [
  {
    value: 'MX',
    label: 'México',
  },
  {
    value: 'COL',
    label: 'Colombia',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function ButtonMenu({id, label, description, dataType}) {
  const classes = useStyles();
  const [country, setCountry] = React.useState('');
  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id={id}
          select
          label={label}
          value={country}
          onChange={handleChange}
          helperText={description}
          variant="outlined"
        >
          {countries.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
}
