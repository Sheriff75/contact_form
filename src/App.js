import React, { useState } from 'react';
import { createTheme, Alert, Snackbar, ThemeProvider, Grid2, Box, Checkbox, Typography, FormControl, TextField, Container, Button, FormControlLabel, FormHelperText, RadioGroup, Radio, typographyClasses, AlertTitle } from "@mui/material";
import MyStyle from './components/mystyles';
import TextStyle from './components/textstyles';
function App() {

  const theme = createTheme({
    typography: {
      h4: {
        fontSize: '2.5rem',
      },
      h6: {
        fontSize: '1.2rem',
      },
      subtitle2: {
        fontSize: '1rem',
      },
    },
  });                         
  theme.typography.h4[theme.breakpoints.down('md')] = { fontSize: '1.5rem' };
  theme.typography.h6[theme.breakpoints.down('md')] = { fontSize: '0.8rem' };
  theme.typography.subtitle2[theme.breakpoints.down('md')] = { fontSize: '0.7rem'}  

  const [lastName, setLastName] = useState('');
  const [lastError, setLastError] = useState('');
  const [firstName, setFirstName] = useState('');
  const [firstError, setFirstError] = useState('');
  const [email, setEmail] = useState('');
  const [regexError, setRegexError] = useState('');
  const [query, setQuery] = useState('');
  const [queryError, setQueryError] = useState('');
  const [message, setMessage] = useState('');
  const [messageError, setMessageError] = useState('');
  const [check, setCheck] = useState(false)
  const [checkError, setCheckError] = useState('')
  const [emailError, setEmailError]= useState('')
  const [open, setOpen]= useState('')
  const [alertMessage, setAlertMessage]= useState('')
  const [alertSeverity, setAlertSeverity]= useState('')
  const [status, setStatus]= useState('')

  const handleOpenSnackbar = (severity, status, message ) => {
    setOpen(true);
    setAlertMessage(message);
    setAlertSeverity(severity);
    setStatus(status)
  }

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  }  
  const handleSubmit = (e) => {
    e.preventDefault();

    if(!lastName) {
      setLastError('This field is required')
    }
    else {
      setLastError('')
    }
    if(!firstName) {
      setFirstError('This field is required')
    }
  else {
    setFirstError('')
  }
    if(!email) {
      setEmailError('This field is required')
    }
  else {
    setEmailError('')
  }
    if(!message) {
      setMessageError('This field is required')
    }
  else {
    setMessageError('')
  }
    if(!query) {
      setQueryError('Please select a query type')
    }
  else {
    setQueryError('')
  }
    
    if(!check) {
      setCheckError('To submit this form, please consent to being contacted')
    }
  else {
    setCheckError('')
  }
    
    if(regexError) {
    alert('provide a valid email address')
  }

  else if(firstName && lastName && query && email && !regexError && message && check) {
      handleOpenSnackbar('success', 'Message Sent!', "Thanks for completing the form. We'll be in touch soon!")
    }
     
    else {
      handleOpenSnackbar('error', 'Message not sent', "Please fill in all required fields and check the checkbox", )
    }
    
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  }

  const handleCheckChange = (e) => {
    setCheck(e.target.checked);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  
    const emailRegex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);
    if(!emailRegex.test(e.target.value) && e.target.value !== '') {
      setRegexError('Please enter a valid email address')  
    }
    else {
      setRegexError('')
    }
  }


  return (
    <Box sx={{ }}>
    <ThemeProvider theme={theme}>
    <Box  sx= {{display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'hsl(148, 38%, 91%)', 
    }}>
      <Grid2 container spacing={2} columns = {{xs: 5, md: 12}} sx={{ display: 'flex', flexDirection : 'column', width: '45%', backgroundColor: 'white', padding: '2rem', borderRadius: '0.8rem'}}>
        <Typography align="left"  variant='h4' sx={{fontWeight: 'bold', marginBottom: '1.8rem'}}>
        Contact Us
        </Typography>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth >
        <Grid2 container spacing={2} sx={{display: 'flex', alignItems: 'flex-start', position: 'relative' }}>
          <Grid2  size= {{xs: 12, md: 6}} >
            <Typography align="left" variant='h6'>
            First Name <span style = {{color: 'hsl(169, 82%, 27%)'}}>*</span>
            </Typography>
            <MyStyle value={firstName} onChange={handleFirstNameChange} inputProps={{ 'aria-label': 'first name'}} fullWidth/>
            <FormHelperText sx={{color: 'rgba(146, 4, 4, 0.7)'}}>{firstError}</FormHelperText>
          </Grid2>
          <Grid2 size= {{xs: 12, md: 6}} >
            <Typography align="left" variant='h6'>
            Last Name <span style = {{color: 'hsl(169, 82%, 27%)'}}>*</span>
            </Typography>
            <MyStyle value={lastName} onChange={handleLastNameChange} inputProps={{ 'aria-label': 'last name'}} fullWidth/>
            <FormHelperText sx={{color: 'rgba(146, 4, 4, 0.7)'}}>{lastError}</FormHelperText>
          </Grid2>
          <Grid2 size= {{xs: 12, md: 12}} >
            <Typography align="left" variant='h6'>
            Email Address <span style = {{color: 'hsl(169, 82%, 27%)'}}>*</span>
            </Typography>
            <MyStyle value={email} onChange={handleEmailChange} inputProps={{ 'aria-label': 'email'}} fullWidth/>
            <FormHelperText sx={{color: 'rgba(146, 4, 4, 0.7)'}}>{emailError}</FormHelperText>
            <FormHelperText sx={{color: 'rgba(146, 4, 4, 0.7)'}}>{regexError}</FormHelperText>
          </Grid2>
          <Box sx={{width : '100%', gap: '2'}}>
            <Typography align="left" variant='h6' sx={{width: '100%'}}>
                Query Type  <span style = {{color: 'hsl(169, 82%, 27%)'}}>*</span>
            </Typography>
                <RadioGroup value={query} onChange={handleQueryChange} >
                  <Grid2 container spacing={2}>
                    <Grid2 size = {{xs: 12, md: 6}}>
                <FormControlLabel value='generalEnquiry' control={<Radio sx={{
                  '& svg' : {
                    fontSize: {xs: '1.25rem',sm: '1.25rem', md: '1.5rem'}
                  }, 
                  '& .MuiSvgIcon-root' : {
                    color: 'hsl(169, 82%, 27%)'
                  }
                }}/>} label= 'General Enquiry' sx={{
                  border: '1px solid hsl(169, 82%, 27%)', borderRadius: '0.5rem', width: '100%', marginLeft: '0.07rem',
                  '& .MuiTypography-root': {
                    fontSize: {xs: '0.8rem', md: '1rem'}
                  },
                  ':focus-within': {
                    border: '0.125rem solid hsl(169, 82%, 27%)',
                    backgroundColor: 'hsl(148, 38%, 91%)'
                  }
                }}/>
                </Grid2>
                <Grid2 size = {{xs: 12, md: 6}}>
              <FormControlLabel value='supportRequest' control={<Radio sx={{
                  '& svg' : {
                    fontSize: {xs: '1.25rem', sm: '1.25rem', md: '1.5rem'}
                  }, 
                  '& .MuiSvgIcon-root' : {
                    color: 'hsl(169, 82%, 27%)'
                  }
                }}/>} label= 'Support Request' slots sx={{
                  border: '1px solid hsl(169, 82%, 27%)', borderRadius: '0.5rem', width: '100%', marginLeft: '0.07rem',
                  '& .MuiTypography-root': {
                    fontSize: {xs: '0.8rem', md: '1rem'}
                  },
                  ':focus-within': {
                    border: '0.125rem solid hsl(169, 82%, 27%)',
                    backgroundColor: 'hsl(148, 38%, 91%)'
                  }
                }}/>
              </Grid2>
              </Grid2>
            </RadioGroup>
            <FormHelperText sx={{color: 'rgba(146, 4, 4, 0.7)'}}>{queryError}</FormHelperText>
            </Box>
            <Grid2 size= {{xs: 12, md: 12}} >
              <Typography align="left" variant='h6'>
              Message <span style = {{color: 'hsl(169, 82%, 27%)'}}>*</span>
              </Typography>
              <TextStyle  value={message} onChange={handleMessageChange} />
              <FormHelperText sx={{color: 'rgba(146, 4, 4, 0.7)'}}>{messageError}</FormHelperText>
          </Grid2>
          <Grid2 sx={{display: 'flex', alignItems: 'center', marginBottom: '0'}}>
            <Checkbox  value={check} onChange = {handleCheckChange} sx={{
              '& .MuiSvgIcon-root' : {
                    color: 'hsl(169, 82%, 27%)'
                  }
            }}/>
            <Typography variant='subtitle2' > I consent to being contacted by the team <span style = {{color: 'hsl(169, 82%, 27%)'}}>*</span></Typography>
          </Grid2>
          <FormHelperText sx={{color: 'rgba(146, 4, 4, 0.7)', marginTop: '-1rem'}}>{checkError}</FormHelperText>
          <Grid2 sx={{width: '100%'}}>
            <Button variant="contained"  type="submit" sx={{textTransform: 'none',width: '100%',padding: '1rem', '&': { backgroundColor: 'hsl(169, 82%, 27%)', width: '100%'}}}>
              Submit
            </Button>
          </Grid2>
              </Grid2>
          </FormControl>
          </form>
        </Grid2>   
    </Box>
    <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'center'}} open = {open} onClose={handleCloseSnackbar} sx={{backgroundColor: 'hsl(169, 82%, 27%)'}}>
      <Alert sx={{width: '100%'}} onClose={handleCloseSnackbar} severity = {alertSeverity} >
        <AlertTitle>{status} </AlertTitle>   
        {alertMessage}
      </Alert>
    </Snackbar>
      </ThemeProvider>
      </Box>
  );
}
export default App;