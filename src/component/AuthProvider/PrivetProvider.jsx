"use client";

import { useContext, useEffect } from "react";
import { AuthContext } from "./AuthProvider";
import Loader from "../Loader";
import { useRouter } from "next/navigation";


const PrivetProvider = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login"); 
    }
  }, [user, loading, router]);

  if (loading) return <Loader />; 

  if (user) {
    return <>{children}</>; 
  }

  return null; 
};

export default PrivetProvider;