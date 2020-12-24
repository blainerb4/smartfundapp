import React from 'react';
import {Container} from 'semantic-ui-react';
import Head from 'next/head';
import Header from './Header';

export default props => {
    return (
        <Container>
        <Head>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"></link>
         </Head>
        <Header />
        {props.children}
        </Container>
    );
};

//camapign list is a child of layout
//container makes sure content are constrained
//head-part of next library, everything in head tag will be moved to head tag 
//can add meta tags for seo purposes