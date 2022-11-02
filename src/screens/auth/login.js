import React, { useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup';
import { View, Text, SafeAreaView, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import LoadingModal from '../../components/LoadingModal/loadingModal';
import { useDispatch, useSelector } from 'react-redux';


const Login = (props) => {
  console.log('props', props)

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)
  const { alerts } = useSelector((state) => state.session)

  const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter valid email").required('Email is Required'),
    password: Yup.string()
      .required('Password is Required'),
  })


  return (
    <SafeAreaView style={styles.mainContainer}>
      <KeyboardAvoidingView
        style={styles.content}>
        <View style={{ alignSelf: 'center', marginBottom: 40 }}>
          <appIcons.Logo />
        </View>
        <Text style={styles.subtitle}>Sign in to your account</Text>
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          validationSchema={loginValidationSchema}
          onSubmit={values => {
            setLoading(true)
            authService.loginUser(values).then((data) => {
              AsyncStorage.setItem(`${REACT_NATIVE_SECRET_KEY}`, data?.access_token)
              dispatch(setAlert(data))
              setLoading(false)
              setTimeout(() => {
                data.error === false && navigation.navigate('MainNavigations')
              }, 1000);
            })
          }
          }>

          {({ handleChange, handleBlur, handleSubmit, errors, touched, values }) => (
            <>
              <View style={styles.form}>
                <TextInput
                  value={values.email}
                  style={styles.textInput}
                  keyboardType="email-address"
                  onBlur={handleBlur('email')}
                  placeholder='Enter Your Email'
                  onChangeText={handleChange('email')}
                  placeholderTextColor='#000000'
                />
              </View>
              {touched.email && errors.email && (
                <Text style={styles.errorTextStyle}>{errors.email}</Text>
              )}

              <View style={styles.form}>
                <TextInput
                  secureTextEntry
                  value={values.password}
                  style={styles.textInput}
                  textContentType="password"
                  onBlur={handleBlur('password')}
                  placeholder='Enter Your Password'
                  onChangeText={handleChange('password')}
                  placeholderTextColor='#000000'
                />
              </View>
              {alerts?.message ? <Text style={alerts?.error === true ? styles.errorTextStyle : styles.successTextStyle}>{alerts?.message}</Text> : touched.password && errors.password && (
                <Text style={styles.errorTextStyle}>{errors.password}</Text>
              )}
              <TouchableOpacity onPress={handleSubmit}>
                {loading == true ?
                  <View style={styles.loader}> <LoadingModal />
                  </View> : null}
                <View style={styles.button}>
                  <Text style={styles.buttonTitle}>Login</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.forgotPasswordContainer}>
                <TouchableOpacity onPress={() => { dispatch(setAlert()) && navigation.navigate('ForgotPassword') }}>
                  <Text style={styles.textButton}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </SafeAreaView >
  )
}

export default Login