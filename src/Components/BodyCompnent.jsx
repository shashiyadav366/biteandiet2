import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  makeStyles,
  Paper,
  Typography,
  Card,
  CardContent,
  Button,
} from "@material-ui/core";
import { Styles } from "./style";
import { RenderInputText, RenderSelect } from "./common";
import {
  AddDataToFirebase,
  GetFirebaseData,
  GetUpdatedSnapData,
  UpdateFirebaseCollectionDataById,
} from "../databaseDriver";
import UploadedData from "./UploadedData";
import { toast } from "react-toastify";

const useStyles = makeStyles(Styles);

export default function BodyComponent() {
  const classes = useStyles();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    age:"",
    height:"",
    weight:"",
    email: "",
    number:"",
    health:"",
    diet:"",   
    address:"",
  });
  const [error, setError] = useState({});
  const [Fetched, setFetched] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  //for firebase database
  const [uploadedData, setUploadedData] = useState([]);

  //for update purpose
  const [isUpdateAction, setIsUpdateAction] = useState(false);
  const [updateId, setUpdateId] = useState(false);

  const handleChange = ({ target }) => {
    const name = target.name;
    const value = target.value;

    //setting up errors
    value.length < 2
      ? (error[name] = setError({
          ...error,
          [name]: `Please fill ${name}`,
        }))
      : (error[name] = setError({ ...error, [name]: "" }));

    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    isUpdateAction
      ? UpdateFirebaseCollectionDataById({ id: updateId, data: data })
      : AddDataToFirebase(data);

    //resetting form data.
    setData({
      firstName: "",
      lastName: "",
      gender: "",
      age:"",
      height:"",
      weight:"",
      email: "",
      number:"",
      health:"",
      diet:"",   
      address:"",
    });
    

    GetUpdatedSnapData({ Fx_RunOnUpdate: setFetched(false) });

    isUpdateAction
      ? toast.warning("Updated Successfully")
      : toast.success("Added Successfully");
      
  };

  useEffect(() => {
    if (!Fetched) {
      GetFirebaseData({ setUploadedData });
      setFetched(true);
    }
  }, [Fetched, uploadedData.length]);

  //form form validation
  // useEffect(() => {
  //   let valid = false;
  //   Object.keys(data).forEach((item) => {
  //     if (data[item] && data[item] !== 0) {
  //       valid = true;
  //     } else {
  //       valid = false;
  //     }
  //   });
  //   setIsFormValid(valid);
  // }, [data]);

  useEffect(() => {
    let valid = false;
    Object.keys(data).forEach((item) => {
      if (data[item] && data[item] !=="") {
        valid = true;
      } else {
        valid = false;
      }
    });
    setIsFormValid(valid);
  }, [data]);

  return (
    <Grid container className={classes.formContainer} style={{height:'100%'}} >
      <Grid item xs={12} sm={10}>
        {/* form container  */}
        <form onSubmit={handleSubmit}>
          <Paper component={Box} my={2} p={2} >
            <Box mb={2} mt={1}>
            <img my={2} style={{width:'150px',display:'block',margin:'0 auto'}} src='https://biteandiet.com/images/big_logo.png'/>
              <Typography  variant='h6' color='#013220' align='center'>
                Bite&Diet Customers!{" "}
              </Typography>
            </Box>
            {/* //row */}
            <Grid container>
              <Grid item xs={12} sm={7}>
                <Card>
                  <CardContent>
                    <Box mb={1}>
                      <Grid container spacing={1}>
                        <Grid item xs={6} sm={6}>
                          <RenderInputText
                            label='First Name'
                            name='firstname'
                            data={data}
                            error={error}
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={6} sm={6}>
                          <RenderInputText
                            label='Last Name'
                            name='lastName'
                            data={data}
                            error={error}
                            onChange={handleChange}
                          />
                        </Grid>
                      </Grid>
                    </Box>
                    <Box mb={1}>
                      <RenderSelect
                        label='Gender'
                        name='gender'
                        data={data}
                        error={error}
                        options={[
                          { key: "male", value: "male" },
                          { key: "female", value: "female" },
                          { key: "others", value: "others" },
                        ]}
                        onChange={handleChange}
                      />
                    </Box>
                    <Box mb={1}>
                      <Grid container spacing={1} columns={16}>
                        <Grid container item xs={4}>
                          <RenderInputText
                            label='Age'
                            name='age'
                            data={data}
                            error={error}
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <RenderInputText
                            label='Weight (kg)'
                            name='weight'
                           
                            data={data}
                            error={error}
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <RenderInputText
                            label='Height (cm)'
                            name='height'
                           
                            data={data}
                            error={error}
                            onChange={handleChange}
                          />
                        </Grid>
                      </Grid>
                    </Box>
                    <Box mb={1}>
                      <RenderInputText
                        label='Email'
                        name='email'
                        data={data}
                        error={error}
                        onChange={handleChange}
                      />
                    </Box>
                    <Box mb={1}>
                      <RenderInputText
                     
                        label='Phone Number'
                        name='number'
                        data={data}
                        error={error}
                        onChange={handleChange}
                      />
                    </Box>
                    <Box mb={1}>
                      <RenderInputText
                        label='Health Complication'
                        name='health'
                        data={data}
                        error={error}
                        onChange={handleChange}
                      />
                    </Box>
                    <Box mb={1}>
                      <RenderInputText
                        label='Diet Recommanded'
                        name='diet'
                        data={data}
                        error={error}
                        onChange={handleChange}
                      />
                    </Box>
                    <Box mb={1}>
                      <RenderInputText
                        label='Address'
                        name='address'
                        data={data}
                        error={error}
                        onChange={handleChange}
                      />
                    </Box>
                   
                  </CardContent>
                  <Box mt={1} mb={1} p={2}>
                    <Button style={{background:'#9ce27d'}}
                      type='submit'
                      variant='contained'
                      size='small'
                      color='primary'
                      fullWidth={true}
                      disabled={!isFormValid}>
                      Submit
                    </Button>
                  </Box>
                </Card>
              </Grid>
              <Grid item xs={12} sm={5}>
                <UploadedData
                  UserData={uploadedData}
                  setFetched={setFetched}
                  setData={setData}
                  setIsUpdateAction={setIsUpdateAction}
                  setUpdateId={setUpdateId}
                />
              </Grid>
            </Grid>
          </Paper>
        </form>
        {/* uploaddataDiaplay */}
      </Grid>
    </Grid>
  );
}
