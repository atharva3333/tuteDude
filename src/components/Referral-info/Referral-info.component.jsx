import React from 'react'
import './Referral-info.styles.scss'
const ReferralInfo = () => {
    return (
        <div className='referral-info-container'>
            <div className='referral-stats-container'>
                <div className='referral-stats'>
                    <div className='referral-earnings'>
                        <span>Referral Earning</span>
                        <p>₹ 2,500</p>
                    </div>
                    <div className='total-earnings'>
                        <span>Total Referrals</span>
                        <p>7</p>
                    </div>
                    <div className='wallet-balance'>
                        <span>Wallet Balance</span>
                        <p>₹ 500</p>
                    </div>
                    <div className='button'>
                    <button>Withdraw Balance</button>
                </div>
                </div>
                
            </div>
            <div className='referral-code-container'>
                <h1>Your Referal Code</h1>
                <span className='referral-code'>EDCH54</span>
            </div>
        </div>
    )
}

export default ReferralInfo