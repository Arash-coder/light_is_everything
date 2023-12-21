import React from 'react';

type Props = {
  children: any;
};

const Dashboardlayout = ({ children }: Props) => {
  return (
    <>
      <div>Dashboardlayout</div>
      {children}
    </>
  );
};

export default Dashboardlayout;
