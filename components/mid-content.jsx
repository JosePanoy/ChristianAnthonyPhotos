import React from 'react';
import '../src/assets/css/mid-content.css';

import pic1 from '../src/assets/img/midcontent/a.jpg';
import pic2 from '../src/assets/img/midcontent/b.jpg';
import pic3 from '../src/assets/img/midcontent/c.jpg';
import pic4 from '../src/assets/img/midcontent/d.jpg';
import pic5 from '../src/assets/img/midcontent/e.jpg';
import pic6 from '../src/assets/img/midcontent/f.jpg';

function MidContent() {
    return (
        <div className="container">
            <div className="pic1"><img src={pic1} alt="pic1" /></div>
            <div className="pic2"><img src={pic2} alt="pic2" /></div>
            <div className="pic3"><img src={pic3} alt="pic3" /></div>
            <div className="pic4"><img src={pic4} alt="pic4" /></div>
            <div className="pic5"><img src={pic5} alt="pic5" /></div>
            <div className="pic6"><img src={pic6} alt="pic6" /></div>
            <div className="caption1">
                <h2>Celebrating a milestone with friends: A beautiful 18th debut, full of joy and cherished memories.</h2>
            </div>
            <div className="caption2">
                <h2>A timeless moment captured: A couple's love story told through a stunning prenup session.</h2>
            </div>
            <div className="caption3">
                <h2>Embracing the past: Old friends reunited in a heartwarming hug, celebrating the bond of friendship.</h2>
            </div>
            <div className="caption4">
                <h2>Blessings and smiles: A baby's baptism surrounded by joy and love, with everyone sharing in the sacred moment.</h2>
            </div>
            <div className="caption5">
                <h2>Welcoming a new beginning: A house blessing ceremony, bringing warmth and positivity to a new home.</h2>
            </div>
            <div className="caption6">
                <h2>Elegance by the river: A debutante’s special moment captured against the serene beauty of a riverside backdrop.</h2>
            </div>
        </div>
    );
}

export default MidContent;
