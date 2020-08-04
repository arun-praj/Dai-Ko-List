import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

class Login extends Component {
   // responseGoogle = async (res) => {
   //    //store user in data base and get Token
   //    const config = {
   //       headers: {
   //          "Content-Type": "application/json",
   //       },
   //    };
   //    console.log(res.Ot);
   //    //cd =name  ,ou = googleid, PK = photo, yu = email
   //    const { Cd, OU, PK, yu } = res.Ot;
   //    const body = {
   //       fullName: Cd,
   //       googleId: OU,
   //       profilePic: PK,
   //       email: yu,
   //    };
   //    const bodyJson = JSON.stringify(body);
   //    console.log(body);
   //    const resData = await axios.post("/api/auth", bodyJson, config);
   //    console.log(resData);
   //    //change state

   //    // this.props.isAuthenticateHandler(resData.data);

   //    localStorage.setItem("token", resData.data.token);
   //    // console.log(res);
   // };
   // failureResponse = (res) => {
   //    this.props.isAuthenticateHandler(false);
   //    localStorage.removeItem("token");
   //    // console.log(res);
   // };

   render() {
      const Caption = styled.h1`
         font-size: 13px;
         text-align: center;
         color: palevioletred;
      `;
      const Wrapper = styled.div`
         height: 100vh;
         max-width: 1000px;
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         margin: auto;
      `;
      const GoogleBtn = styled.button`
         /* width: 280px; */
         padding: 10px 20px;
         font-size: 12px;
         box-shadow: 0 0 1px 1px rgba(20, 23, 28, 0.1), 0 3px 1px 0 rgba(20, 23, 28, 0.1);
         border: none;
         background-color: #fff;
         display: flex;
         align-items: center;
         &:hover {
            cursor: pointer;
         }
      `;
      const Text = styled.h4`
         font-size: 12px;
         color: #777777;
      `;
      const img = styled.button``;
      if (this.props.isAuthenticate) {
         console.log(this.props.isAuthenticate);
         return <Redirect to="/home" />;
      }
      return (
         <Wrapper>
            <Caption>I am lazy, so i didnot make login form. Just signup with google</Caption>
            <div style={{ marginTop: "20px" }}>
               <GoogleLogin
                  clientId="796317557299-6qekcgm9mdudfudt0accng26ngpv6jic.apps.googleusercontent.com"
                  buttonText="Login"
                  render={(renderProps) => (
                     <GoogleBtn onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        <img
                           style={{ height: "30px", width: "30px", marginRight: "10px" }}
                           src="/assets/google-icon.svg"
                           alt="is this the real life"
                        />
                        <Text>Connect With Google</Text>
                     </GoogleBtn>
                  )}
                  // onClick={this.responseGoogle}
                  onSuccess={this.responseGoogle}
                  onFailure={this.failureResponse}
                  cookiePolicy={"single_host_origin"}
               />
            </div>
         </Wrapper>
      );
   }
}

export default Login;
