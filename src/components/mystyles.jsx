import { InputBase } from "@mui/material";
import { styled } from '@mui/material/styles'

const MyStyle = (styled(InputBase))( ({ theme }) => ({
    '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create(['border-color', 'box-shadow', 'width']),
    border: '1px solid hsl(169, 82%, 27%)',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    '&:focus': {
      borderColor: 'hsl(169, 82%, 27%)',
      boxShadow: `${theme.shadows[1]}`,
    },
    '&:hover':{
      borderColor: 'hsl(169, 82%, 27%)',
      boxShadow: `${theme.shadows[2]}`,
    },
    backgroundColor: theme.palette.mode ===  'light'? 'hsl(0, 0.00%, 98.80%)' : 'hsl(209, 23%, 22%)',
    
  }
}))

export default MyStyle

