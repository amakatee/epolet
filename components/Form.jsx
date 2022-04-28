import React, { Component } from 'react'
import { MdTextFields } from 'react-icons/md'
import { useForm } from 'react-hook-form'
import {AiOutlineUser, AiOutlineMail} from 'react-icons/ai'
import {BsTelephone} from 'react-icons/bs'
import axios from 'axios'
import { Grid, TextField , Button, InputAdornment} from '@mui/material';



const Form = () => {
  const {
    register,
    formState: {
      errors
    },
    handleSubmit
  } = useForm()

 async function onSubmit(values) {
    alert(JSON.stringify(values))
    let config = {
      method: 'post',
      url:`${process.env.NEXT_PUBLIC_URL}api/contact`,
      headers: {
        'Content-type':'application/json'
      },
      data:values,

    }
    try {
       const response = await axios(config)
       if(response.data.status == 200) {
         console.log("success")
       }
      
  
    }catch(err) {
       console.error(err)
    }
  }
  
  

  return (

    <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <Grid container direction='column' alignItems='center' spacing={3}>
        <Grid item  >
          <TextField
          name="Name"
          {...register('Name')}
          variant="standard"
          sx={{width:"18rem"}}
          label="Имя"
          color='secondary'
          InputProps={{
            startAdornment: <InputAdornment position="start"><AiOutlineUser /></InputAdornment>
          }}
          helperText={errors?.Name && <p>Не меньше 5 символов!</p>}
          required
          >

          </TextField>
        </Grid>
        <Grid item>
          <TextField
          name="Email"
          {...register("Email", {
            required: "Req",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address"
            }
          })}
          variant="standard"
          InputProps={{
            startAdornment: <InputAdornment position="start"><AiOutlineMail /></InputAdornment>
          }}
          sx={{width:"18rem"}}
          helperText={errors?.Email && <p>Введите корректный E-mail!</p>}
          label="Email"
          color='secondary'
          required
          >

          </TextField>
        </Grid>
        <Grid item>
          <TextField
          name='Phone'
          {...register("Phone")}
          variant="standard"
          InputProps={{
            startAdornment: <InputAdornment position="start"><BsTelephone /></InputAdornment>
          }}
          sx={{width:"18rem"}}
          label="Номер Телефона"
          color='secondary'
        
          >

          </TextField>
        </Grid>
        <Grid item >
          <TextField
          variant="outlined"
          name="Message"
          {...register("Message")}
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
      <Button  type="submit" color='secondary' sx={{width:"18rem", mt:'2rem', padding:'10px'}}variant="contained"> Отправить сообщение</Button>
     

    </form>
 
  )
}

export default Form