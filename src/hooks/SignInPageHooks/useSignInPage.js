import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleLoginBar } from "../../Utils/toggleSlice";
import { addUserData, removeUserData } from "../../Utils/authSlice";
import { useNavigate } from "react-router-dom";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../../config/firebaceAuth";

const useSignInPage = () => {
  const userData = useSelector((state) => state.authSlice.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

      function handleLogin() {
      dispatch(toggleLoginBar())
    }

  async function handleAuth() {

    try {
      let data = await signInWithPopup(auth, provider);
      // console.log(data)
      const userData = {
        name: data.user.displayName,
        photoURL: data.user.photoURL,
      };
      dispatch(addUserData(userData));
      dispatch(toggleLoginBar())
    } catch (err) {
      console.log(err);
    }
  }

  async function handleLogOut() {
    await signOut(auth);
    dispatch(removeUserData());
    dispatch(toggleLoginBar())
  }

  return [userData, handleAuth, handleLogin,  handleLogOut];
};

export default useSignInPage;
