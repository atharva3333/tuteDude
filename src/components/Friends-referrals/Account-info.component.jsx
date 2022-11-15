import React from 'react'
import './Account-info.styles.scss'

const AccountInfo = () => {
    return (
        <div>
            <h4 className='route'>UI/UX &gt; Refer & Earn &gt; Friends Referred</h4>
            <div className='referral-info'>
                <div className='referral-code-container'>
                    <h1>Your Referal Code</h1>
                    <span className='referral-code'>EDCH54</span>
                </div>
                <div className='withdraw-balance'>
                    <span>Wallet Balance</span>
                    <p>₹ 500</p>
                </div>
            </div>
            <h2 className='friends-who-enrolled'>Friends who Enrolles(3)</h2>
            <div className='card-container'>
                <div className='card'>
                    <div className='user-info'>
                        <h3>Dhiraj Saxsena</h3>
                        <time>14 Sep, 2022</time>
                    </div>
                    <span>Courses Enrolled(6)</span>
                    <div className='course-list'>
                        <li>UI/Ux</li>
                        <li>Photoshop</li>
                        <li>Illustrator</li>
                        <li>Python</li>
                        <li>Mern</li>
                        <li>Java</li>
                    </div>
                    <h4 className='referral-amount'>Referral Amount <span className='amount'>₹185</span></h4>
                </div>
                <div className='card'>
                <div className='user-info'>
                        <h3>Dhiraj Saxsena</h3>
                        <time>14 Sep, 2022</time>
                    </div>
                    <span>Courses Enrolled(6)</span>
                    <div className='course-list'>
                        <li>UI/Ux</li>
                        <li>Photoshop</li>
                        <li>Illustrator</li>
                        <li>Python</li>
                        <li>Mern</li>
                        <li>Java</li>
                    </div>
                    <h4 className='referral-amount'>Referral Amount <span className='amount'>₹185</span></h4>
                </div>
                <div className='card'>
                <div className='user-info'>
                        <h3>Dhiraj Saxsena</h3>
                        <time>14 Sep, 2022</time>
                    </div>
                    <span>Courses Enrolled(6)</span>
                    <div className='course-list'>
                        <li>UI/Ux</li>
                        <li>Photoshop</li>
                        <li>Illustrator</li>
                        <li>Python</li>
                        <li>Mern</li>
                        <li>Java</li>
                    </div>
                    <h4 className='referral-amount'>Referral Amount <span className='amount'>₹185</span></h4>
                </div>
            </div>
            <h2 className='terms'>Terms & Conditions</h2>
        </div>
    )
}

export default AccountInfo