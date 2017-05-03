'use strict';

import React, { Component } from 'react';
import { NotFoundBackground } from './NotFound404.style';

export const NotFound404 = () => (
  <div className='not-found'>
    <br />
    <hr />
    {/*<NotFoundBackground />*/}

    <h1 style={{marginTop: 200,
                color:'#f41685',
                fontSize: 100,
                fontFamily: 'Bungee Inline',
                fontStyle: 'italic',
                }}>
                Page <br /> not found</h1>



    {/*<img src={require('../pic/404.jpg')}
         style={{height: '100%', width:'100%'}}
    />*/}

  </div>
)