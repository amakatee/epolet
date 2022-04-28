import React from 'react'
import { MdTextFields } from 'react-icons/md'

import { Grid, TextField , Button} from '@mui/material';



const Form = () => {
  return (

    <form class="contact-form">
      <Grid container direction='column' alignItems='center' spacing={3}>
        <Grid item  >
          <TextField
          variant="standard"
          sx={{width:"18rem"}}
          label="Имя"
          color='secondary'
          required
          >

          </TextField>
        </Grid>
        <Grid item>
          <TextField
          variant="standard"
          
          sx={{width:"18rem"}}
          label="Email"
          color='secondary'
          required
          >

          </TextField>
        </Grid>
        <Grid item>
          <TextField
          variant="standard"
          
          sx={{width:"18rem"}}
          label="Номер Телефона"
          color='secondary'
        
          >

          </TextField>
        </Grid>
        <Grid item >
          <TextField
          variant="outlined"
          
          sx={{width:"18rem"}}
          label="Сообщение"
          multiline
          rows={5}
          required
          color='secondary'
          >

          </TextField>
        </Grid>
        

      </Grid>
      <Button color='secondary' sx={{width:"18rem", mt:'2rem', padding:'10px'}}variant="contained"> Отправить сообщение</Button>
     

    </form>
 
  )
}

export default Form