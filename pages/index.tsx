import Link from 'next/link'
import Head from 'next/head'
import {styled} from '@linaria/react'

import React from "react";

const IndexPage = () => (
    <>
        <Head>
            <title>Test</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <h1>Hello Next.js 👋</h1>
        <Test/>
    </>
)

export default IndexPage

const Test = styled.div`
  width: 100px;
  height: 50px;
  background-color: red;
`