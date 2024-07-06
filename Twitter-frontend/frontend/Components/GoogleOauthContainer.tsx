import React from "react";
import { GoogleOAuthProvider } from '@react-oauth/google';

type Props = {
  children: React.ReactNode;
};

export default function GoogleOauthContainer({ children }: Props) {
  return <GoogleOAuthProvider clientId="495826108201-f7b2dm2qn6jfqrkugp6np6sdb2pvlha0.apps.googleusercontent.com">{children}</GoogleOAuthProvider>;  ;
}
