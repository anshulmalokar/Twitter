"use client"
import React, { useCallback } from 'react'
import {CredentialResponse, GoogleLogin} from "@react-oauth/google"
import toast from 'react-hot-toast'
import { client } from '@/client/api'
import { verifyuserGoogleToken } from '@/graphql/query/user'
import { VerifyUserGoogleTokenQuery } from '@/gql/graphql'
import { useQueryClient } from '@tanstack/react-query'
type Props = {}

export default function GoogleLoginComponent({}: Props) {
 
  const queryClient = useQueryClient();

  const handleLoginWithGoogle = useCallback(async (cred: CredentialResponse) => {
    const token = cred.credential;
    if(!token){
      return toast.error("Not a valid google token");
    }
    const response: VerifyUserGoogleTokenQuery = await client.request(verifyuserGoogleToken,{token: token})
    if(response.verifyToken){
      window.localStorage.setItem('__twitter_token',response.verifyToken);
    }
    // @ts-ignore
    await queryClient.invalidateQueries(['current-user'])
    toast.success("The login is a success");
  },[queryClient]);

  return (
    <div>
        <GoogleLogin onError={() => {
            console.log("Error occured")
        }} onSuccess={handleLoginWithGoogle}/>
    </div>
  )
}