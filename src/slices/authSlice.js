import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { url, setHeaders } from "./api";

const initialState = {
  token: localStorage.getItem("token"),
  name: "",
  phone:"",
  email: "",
  _id: "",
  isAdmin: false,
  isAccept:false,
  registerStatus: "",
  registerError: "",
  loginStatus: "",
  loginError: "",
  // otpStatus:"",
  // otpError: "",
  userLoaded: false,
};

 

// export const otpGenerate = createAsyncThunk(
//   "otp/otpGenerate",
//   async (values, { rejectWithValue }) => {
//     try {
//       const tokens = await axios.post(`${url}/SendEmail`, {
//         email: values.email,
//       });
//       return tokens.data;
//     } catch (error) {
//       console.log(error.response);
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (values, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${url}/register`, {
        name: values.name,
        phone: values.phone,
        email: values.email,
        password: values.password,
      });

      localStorage.setItem("token", token.data);

      return token.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (values, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${url}/login`, {
        email: values.email,
        password: values.password,
      });

      localStorage.setItem("token", token.data);
      return token.data;
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(error.response.data);
    }
  }
);

export const getUser = createAsyncThunk(
  "auth/getUser",
  async (id, { rejectWithValue }) => {
    try {
      const token = await axios.get(`${url}/user/${id}`, setHeaders());

      localStorage.setItem("token", token.data);

      return token.data;
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadUser(state, action) {
      const token = state.token;

      if (token) {
        const user = jwtDecode(token);
        return {
          ...state,
          token,
          name: user.name,
          phone:user.phone,
          email: user.email,
          _id: user._id,
          isAdmin: user.isAdmin,
          isAccept:user.isAccept,
          userLoaded: true,
        };
      } else return { ...state, userLoaded: true };
    },
    logoutUser(state, action) {
      localStorage.removeItem("token");

      return {
        ...state,
        token: "",
        name: "",
        phone:"",
        email: "",
        _id: "",
        isAdmin: false,
        isAccept:false,
        registerStatus: "",
        registerError: "",
        loginStatus: "",
        loginError: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      return { ...state, registerStatus: "pending" };
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload);
        return {
          ...state,
          token: action.payload,
          name: user.name,
          phone:user.phone,
          email: user.email,
          _id: user._id,
          isAdmin: user.isAdmin,
          isAccept:user.isAccept,
          registerStatus: "success",
        };
      } else return state;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      return {
        ...state,
        registerStatus: "rejected",
        registerError: action.payload,
      };
    });
    // builder.addCase(otpGenerate.pending, (state, action) => {
    //   return { ...state, otpStatus: "pending" };
    // });
    // builder.addCase(otpGenerate.fulfilled, (state, action) => {
    //   if (action.payload) {
    //     const user = jwtDecode(action.payload);
    //     return {
    //       ...state,
    //       // token: action.payload,
    //       email: user.email,
    //       otpStatus: "success",
    //     };
    //   } else return state;
    // });
    // builder.addCase(otpGenerate.rejected, (state, action) => {
    //   return {
    //     ...state,
    //     otpStatus: "rejected",
    //     otpError: action.payload,
    //   };
    // });
    builder.addCase(loginUser.pending, (state, action) => {
      return { ...state, loginStatus: "pending" };
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload);
        return {
          ...state,
          token: action.payload,
          name: user.name,
          phone:user.phone,
          email: user.email,
          _id: user._id,
          isAdmin: user.isAdmin,
          isAccept:user.isAccept,
          loginStatus: "success",
        };
      } else return state;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      return {
        ...state,
        loginStatus: "rejected",
        loginError: action.payload,
      };
    });
    builder.addCase(getUser.pending, (state, action) => {
      return {
        ...state,
        getUserStatus: "pending",
      };
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload);
        return {
          ...state,
          token: action.payload,
          name: user.name,
          phone:user.phone,
          email: user.email,
          _id: user._id,
          isAdmin: user.isAdmin,
          isAccept:user.isAccept,
          getUserStatus: "success",
        };
      } else return state;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      return {
        ...state,
        getUserStatus: "rejected",
        getUserError: action.payload,
      };
    });
  },
});

export const { loadUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
