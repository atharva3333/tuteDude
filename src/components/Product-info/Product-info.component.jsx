import React from 'react'
import './Product-info.styles.scss'
import InvitePeople from '../../Assets/Invite-people.svg'
import Rupee from '../../Assets/Rupee.svg'
import Wallet from '../../Assets/Wallet.svg'
import Coupon from '../../Assets/Coupon.svg'
import Discount from '../../Assets/Discount.svg'
import { Link } from 'react-router-dom'

const ProductInfo = () => {
  return (
    <div className='hero-container'>
      <div className='product-info-container'>
        <h1>How Does it Work?</h1>
        <div className='product-info-items'>
          <div className='items'>
            <img src={InvitePeople} />
            <div className='item-text'>
              <h4>Invite People</h4>
              <p>Share the link tutedude.com with
                your friends</p>
            </div>
          </div>
          <div className='items'>
            <img src={Coupon} />
            <div className='item-text'>
              <h4>Friend purchases any course</h4>
              <p>Using your REFERRAL CODE in the payments page</p>
            </div>
          </div>
          <div className='items'>
            <img src={Rupee} />
            <div className='item-text'>
              <h4>You get ₹ 200 as referral money</h4>
              <p>On total purchase the friend makes, into your wallet</p>
            </div>
          </div>
          <div className='items'>
            <img src={Discount} />
            <div className='item-text'>
              <h4>Your Friend gets ₹ 200 Off </h4>
              <p>On his overall fee on successful purchase using your referral code </p>
            </div>
          </div>
          <div className='items'>
            <img src={Wallet} />
            <div className='item-text'>
              <h4>Transfer money from wallet</h4>
              <p>When the wallet balance reaches
                ₹200 or more, you can withdraw it</p>
            </div>
          </div>
        </div>
      </div>
      <div>
      <Link to='/referrals'>
        <h2>Friends Who Enrolled</h2>
        </Link>
        <h2>Terms & Conditions</h2>
      </div>
    </div>
  )
}

export default ProductInfo