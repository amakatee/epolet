import React, { Component } from 'react'
import { MdTextFields } from 'react-icons/md'
import { useForm } from 'react-hook-form'
import {AiOutlineUser, AiOutlineMail} from 'react-icons/ai'
import {BsTelephone} from 'react-icons/bs'
import axios from 'axios'
import {  Grid, TextField , Button, InputAdornment, Typography} from '@mui/material';
import {Checkbox, FormGroup, FormLabel} from '@mui/material'
import { FormControlLabel } from '@mui/material'
import Link from 'next/link'
import { useState } from 'react'



const Form = () => {
  const [show, setShow] = useState(false)
  const [overlay, setOverlay] = useState(false)


  const {
    register,
    formState: {
      errors
    },
    handleSubmit
  } = useForm()

 async function onSubmit(values) {
    setShow(true)
    setOverlay(true)
    
    let config = {
      method: 'post',
      url:`http://localhost:3000//api/contact/`,
      headers: {
        'Content-type':'application/json'
      },
      data:values,

    }
    try {
       const response = await axios(config)
       if(response.data.status == 200) {
  
       
       }
      
  
    }catch(err) {
       console.error(err)
    }
  }
  
  const closingOnClick = () => {
    setShow(false)
    setOverlay(false)

}
  

  return (
  <>
  <div id='form' className='form-item'>
    <h1>Напишите нам</h1>

    <form  className="contact-form" onSubmit={handleSubmit(onSubmit)}>
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
        <Grid item>
        <FormControlLabel
        label={
            <div className='labelConf'>
                <span>Согласен с </span><Link href="confidential"><a className='linktoCong' target="">условиями</a></Link>  <span>обработки персональных данных</span>
            </div>
        }
        control={<Checkbox  
            color="secondary"
            name="Agreement"
           
            {...register("Agreement", {
              required: "Обязательно для заполнения*"

            }) }
            
            />}
         
 >

        </FormControlLabel>
        <div>{errors.Agreement && <span className='req-form'>{errors.Agreement.message}</span>} </div>
        </Grid>
        

      </Grid>
      <Button  type="submit" color='secondary' sx={{width:"18rem", mt:'2rem', padding:'10px'}}variant="contained"> Отправить сообщение</Button>
      <Link href='sout'>
      <Button color='secondary' sx={{width:"18rem", mt:'2rem', fontSize:'1rem'}}>СОУТ</Button>
      </Link>
     

    </form>
    </div>

   {show &&  <div className='success-mes'>Спасибо за обращение! <br /> Мы скоро с вами свяжемся!</div>}
  {overlay && <div onClick={() => closingOnClick()} className='form-overlay'></div>} 
    </>
 
  )
}

export default Form