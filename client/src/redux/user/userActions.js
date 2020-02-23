import userActionsTypes from "./userActionTypes";

export const googleSignInStart = () => ({
  type: userActionsTypes.GOOGLE_SIGN_IN_START
});

export const signInSuccess = user => ({
  type: userActionsTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailed = error => ({
  type: userActionsTypes.SIGN_IN_FAILED,
  payload: error
});

export const emailSignInStart = emailAndPassword => ({
  type: userActionsTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const checkUserSession = () => ({
  type: userActionsTypes.CHECK_USER_SESSION
});

export const signOutStart = () => ({
  type: userActionsTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: userActionsTypes.SIGN_OUT_SUCCESS
});

export const signOutFailed = error => ({
  type: userActionsTypes.SIGN_OUT_FAILED,
  payload: error
});

export const signUpStart = userCredentials => ({
  type: userActionsTypes.SIGN_UP_START,
  payload: userCredentials
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: userActionsTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData }
});

export const signUpFailed = error => ({
  type: userActionsTypes.SIGN_UP_FAILED,
  payload: error
});
