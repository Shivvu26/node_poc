export type LoginModel = {
  username: string,
  password: string,
}


export type RegisterModel = {
  id: number,
  name: string,
  email: string,
  phoneNo: number,
  companyName:string,
  countryName: string,
  agreement: boolean,
  password:string,
}

export type otpValidateModel = {
  userId: string,
  otp: string,
}


export type createPassword = {
  userId: string,
  password: string,
}
