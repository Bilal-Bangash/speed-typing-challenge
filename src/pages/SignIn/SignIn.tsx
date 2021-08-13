import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  Avatar,
  Button,
  CssBaseline,
  Typography,
  Container,
} from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
// import { getCurrentUserAuthenticationStatus } from '../../firebase/authService'
import { userLogin as userLoginAction } from '../../redux'
import { signInStyles } from './SignIn.styles'
import { SignInProps } from './SignIn.interface'
const SignIn: FC<SignInProps> = () => {
  const classes = signInStyles()
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    // getCurrentUserAuthenticationStatus() && history.push('/')
  }, [history])

  const handleSignInClick = () => {
    dispatch(userLoginAction())
    history.push('/')
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleSignInClick}
        >
          Sign In With Google
        </Button>
      </div>
    </Container>
  )
}
export default SignIn
