import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    
  },
  form: {
    display: 'flex',
    
    justifyContent: 'end',
    padding: '6rem',
    margin: '2rem',
    flex: '3',
    flexWrap: 'nowrap',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));