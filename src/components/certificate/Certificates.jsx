import React from 'react'
import CertificateImgs from './CertificateImgs'
import CertificateHeading from './CertificateHeading';
import CertificateDetails from './CertificateDetails';


const Certificates = () => {

  return (
    <div className="w-full">
      <CertificateHeading />
      <CertificateDetails />
      <div className="h-35 w-150 absolute right-25 bottom-0 bg-[#6A5B77] my-25 p-5 rounded-l-[100px] flex items-center px-10 py-20 overflow-hidden">
        <CertificateImgs />
      </div>
    </div>
  );
}

export default Certificates