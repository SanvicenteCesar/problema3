import React from "react";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Foundation (Full Name)</title>
        <link
          href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
      </Head>
      <div style={{ backgroundColor: "#bfcba8" }} className="pt-10 min-h-screen">
        <div className="container mx-auto">
          <main className="mt-10">{children}</main>
        </div> 
      </div>
    </>
  );
};

export default Layout;
