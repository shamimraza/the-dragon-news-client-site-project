import React from 'react';
import Qzone1 from '../../../assets/qZone1.png'
import Qzone2 from '../../../assets/qZone2.png'
import Qzone3 from '../../../assets/qZone3.png'

const Qzone = () => {
    return (
        <div>
            <h4 className='text-primary text-center my-4 py-2'>Q-Zone</h4>
            <img src={Qzone1} alt="" />
            <img src={Qzone2} alt="" />
            <img src={Qzone3} alt="" />
        </div>
    );
};

export default Qzone;