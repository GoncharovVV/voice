export const formErrors:any = {
  required: 'This field is required.',
  minLength: 'Password must be at least 8 characters long.',
  validate: 'Both passwords must be the same.',
  notEmpty: 'Field should not contain only white spaces.',
  notActive : 'You are still on our wait list. We\'ll notify you once your turn is up. If you\'d list to expedite the process, send us an email to support@voicefront.ai',
  wrongCredentials: 'Wrong email / password combination. Please try again',
  typeOfImage: 'Wrong file format. Please use PNG or JPG',
  twoWords: 'Invocation name must consist of at least 2 words',
  alexaPhrases: 'Invocation names cannot contain any of the Alexa skill launch phrases such as "launch", "ask", "tell", "open", "load", "begin", and "enable". Wake words including "Alexa", "Amazon", "Echo", "Computer", or the words "skill" or "app"',
  passwordPatternMessage: 'Password must contain letters and numbers.',
  emailPatternMessage: 'Not a valid email address.',
  urlPatternMessage: 'Not a valid url address'
}

export const resInstallLinkErrors:any = {
  400: 'Wrong partner key for the user',
  401: 'User is not logged in',
  404: 'You should first create an account'
}