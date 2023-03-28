import * as Yup from 'yup'

export const FormSchema = Yup.object({
    firstName: Yup.string().min(3, 'Too Short').required('First Name Must Be Required')
        .matches(/[A-z]{3,}/),

    lastName: Yup.string().min(3, 'Too Short').required('Last Name Must Be Required')
        .matches(/[A-z]{3,}/),

    email: Yup.string().email().required('Emaail is Required')
        .matches(/^[a-z0-9]{2,}\@[a-z]{2,}\.com$/),

    mobileNumber: Yup.string().required('Mobile Number is Required')
        .matches(/[0-9]{10}/),

    password: Yup.string().min(8, 'Password Must contain 8 Letters').required('Password is Required'
    ).matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W)[a-zA-Z0-9!@#\$%|Z^&\*]{8,}/,"please Enter Strong Password"),

    selectPost: Yup.string().required('Please Select Position'),

    userName: Yup.string().min(5, 'Username Must Contain 5 Letters').required('UserName Is Required')
        .matches(/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/)


})