/* eslint-disable no-unused-vars */
import React from 'react';
import {
    HStack,
} from "@chakra-ui/react";
import  CalculaterBanner from './CalculaterBanner';
import ChargeCalculater from './ChargeCalculater';
export const Calculater = () => {
  return <HStack h='auto' display={['block','block','block','table']} >
      <CalculaterBanner/>
      <ChargeCalculater/>
  </HStack>;
};
export default Calculater;
