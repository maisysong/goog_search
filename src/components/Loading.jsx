import React from 'react'
// import Loader from 'react-loader-spinner'
import { Rings } from 'react-loader-spinner';

const Loading = () => (
  <div className="flex justify-center items-center ">
    <Rings type="Puff" color="#00BFFF" height={2000} width={300} />
  </div>
);

export default Loading