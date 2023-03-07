import React, { useEffect } from "react";
import "./index.css";
import { nanoid } from "nanoid";



export default function Card(props) {
  // console.log(props.modalResult)
  const overlay = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    backdropFilter: 'blur(3px)',
    zIndex: 50,
  }

  const notOverlay = {
    margin: '0 auto',
    width: '130rem',
    height: '100vh',
    background: '#fdf8f8',
    padding: '1.6rem 3.2rem',
    position: 'relative',

  }

 const activeBtn =  {
    borderBottom: '2px solid #00a8e8',
  }
 const notActive =  {
    borderBottom: 'none',
  }

return (
  <section style={props.openModal ? overlay : notOverlay}>
    <ul className="nft-navigation">
      <li>
      <svg
    fill="currentColor"
    viewBox="0 0 16 16"
    height="2.4rem"
    width="2.4rem"
   
  >
    <path d="M6 10.5a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zm-2-3a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm-2-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z" />
  </svg>
  <p>Filters</p>
      </li>

<div className="search-nft--list">
<svg
    viewBox="0 0 1024 1024"
    fill="currentColor"
    height="2.4rem"
    width="2.4rem"
   
  >
    <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
  </svg>
<input type='text' placeholder='search by name or description' />
</div>
     
      <li>
      <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    height="1.8rem"
    width="1.8rem"
   
  >
    <path d="M7 20h2V8h3L8 4 4 8h3zm13-4h-3V4h-2v12h-3l4 4z" />
  </svg>

  <p>Sort By</p>
  <svg
    viewBox="0 0 1024 1024"
    fill="currentColor"
    height="1.4rem"
    width="1.4rem"
   
  >
    <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" />
  </svg>
      </li>

      <li>

      <svg fill="none" viewBox="0 0 24 24" height="2.4rem" width="2.4rem">
    <path
      fill="currentColor"
      d="M8 6a2 2 0 11-4 0 2 2 0 014 0zM8 12a2 2 0 11-4 0 2 2 0 014 0zM6 20a2 2 0 100-4 2 2 0 000 4zM14 6a2 2 0 11-4 0 2 2 0 014 0zM12 14a2 2 0 100-4 2 2 0 000 4zM14 18a2 2 0 11-4 0 2 2 0 014 0zM18 8a2 2 0 100-4 2 2 0 000 4zM20 12a2 2 0 11-4 0 2 2 0 014 0zM18 20a2 2 0 100-4 2 2 0 000 4z"
    />
  </svg>
      <svg fill="none" viewBox="0 0 24 24" height="2.4rem" width="2.4rem">
    <path
      fill="currentColor"
      d="M4 4h4v4H4V4zM4 10h4v4H4v-4zM8 16H4v4h4v-4zM10 4h4v4h-4V4zM14 10h-4v4h4v-4zM10 16h4v4h-4v-4zM20 4h-4v4h4V4zM16 10h4v4h-4v-4zM20 16h-4v4h4v-4z"
    />
  </svg>
      </li>

    </ul>

<div className="cart--container">
<p className="collectibles-header">{props.data.length} Collectibles</p>
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="2.4rem"
      width="2.4rem"
      
      
    >
      <path d="M0 2.5A.5.5 0 01.5 2H2a.5.5 0 01.485.379L2.89 4H14.5a.5.5 0 01.485.621l-1.5 6A.5.5 0 0113 11H4a.5.5 0 01-.485-.379L1.61 3H.5a.5.5 0 01-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 100 2 1 1 0 000-2zm-2 1a2 2 0 114 0 2 2 0 01-4 0zm9-1a1 1 0 100 2 1 1 0 000-2zm-2 1a2 2 0 114 0 2 2 0 01-4 0z" />
    </svg>
      <p className="items"></p> 
</div>
    

    <figure className="card-section">
      {props.data.map(card=>{
return (
  <main onClick={()=>props.openModalCard(card.id)} id="card" key={card.id}>
  <img className="card-image" src={require(`../src/img/${card.img}`)} alt="" />
  <div className="card-top">
  <div className="card-top--header">
  <p>Art Blocks</p>
  <svg xmlns="http://www.w3.org/2000/svg" fill="#4895ef" viewBox="0 0 24 24" strokeWidth={1.5} stroke="" className="verified">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
  </svg>
  </div>
  <div className="card-name">
  <p>{card.name}</p>
  <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="2.4rem"
      width="2.4rem"
    
    >
      <path d="M14.24 10.56c-.31 1.24-2.24.61-2.84.44l.55-2.18c.62.18 2.61.44 2.29 1.74m-3.11 1.56l-.6 2.41c.74.19 3.03.92 3.37-.44.36-1.42-2.03-1.79-2.77-1.97m10.57 2.3c-1.34 5.36-6.76 8.62-12.12 7.28C4.22 20.36.963 14.94 2.3 9.58A9.996 9.996 0 0114.42 2.3c5.35 1.34 8.61 6.76 7.28 12.12m-7.49-6.37l.45-1.8-1.1-.25-.44 1.73c-.29-.07-.58-.14-.88-.2l.44-1.77-1.09-.26-.45 1.79c-.24-.06-.48-.11-.7-.17l-1.51-.38-.3 1.17s.82.19.8.2c.45.11.53.39.51.64l-1.23 4.93c-.05.14-.21.32-.5.27.01.01-.8-.2-.8-.2L6.87 15l1.42.36c.27.07.53.14.79.2l-.46 1.82 1.1.28.45-1.81c.3.08.59.15.87.23l-.45 1.79 1.1.28.46-1.82c1.85.35 3.27.21 3.85-1.48.5-1.35 0-2.15-1-2.66.72-.19 1.26-.64 1.41-1.62.2-1.33-.82-2.04-2.2-2.52z" />
    </svg>
  </div>
  
  
  
  <p className="total-minted--text">1 minted</p>
  
  <div className="card-price--label">
  <div>
    <p className="card-price--text">Price</p>
    <p>$<span className="card-price">{card.price}</span></p>
    </div>
    <button>Add</button>
    {/* <h6 className="remove-card">Remove</h6> */}
  
  </div>
  </div>
        </main>
)
      })}
     
    </figure>

   
<figure className="modal" style={props.openModal ? {display: 'block'} : {display: 'none'}}>
<main>
  <p onClick={props.closeModal} className="close-modal">x</p>
<div className="card-modal--grid">
  <main className="card-modal--image">
  
     <img className="card-modal--img" src={require(`./img/nft.jpg`)}  />
   
  <ul className="view-chain--list">
    <li>
      <p>View Chains details</p>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="card-modal--icons">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>

    </li>
    <li>
      <p>View Chains detals</p>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="card-modal--icons">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>

    </li>
  </ul>
  </main>
  
  <main className="card-modal--details">

    <ul className="card-modal--details___iconNav">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="card-modal--icons">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>    
<p>3</p>
      </li>

  
<li>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="card-modal--icons">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
<p>110</p>
</li>
  
<li>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="card-modal--icons">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
</svg>
<p>Share</p>
</li>

</ul>

<div className="chain-text">Chain:
  <p className="chain-btc">Bitcoin  <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1.4rem"
      width="1.4rem"
    
    >
      <path d="M14.24 10.56c-.31 1.24-2.24.61-2.84.44l.55-2.18c.62.18 2.61.44 2.29 1.74m-3.11 1.56l-.6 2.41c.74.19 3.03.92 3.37-.44.36-1.42-2.03-1.79-2.77-1.97m10.57 2.3c-1.34 5.36-6.76 8.62-12.12 7.28C4.22 20.36.963 14.94 2.3 9.58A9.996 9.996 0 0114.42 2.3c5.35 1.34 8.61 6.76 7.28 12.12m-7.49-6.37l.45-1.8-1.1-.25-.44 1.73c-.29-.07-.58-.14-.88-.2l.44-1.77-1.09-.26-.45 1.79c-.24-.06-.48-.11-.7-.17l-1.51-.38-.3 1.17s.82.19.8.2c.45.11.53.39.51.64l-1.23 4.93c-.05.14-.21.32-.5.27.01.01-.8-.2-.8-.2L6.87 15l1.42.36c.27.07.53.14.79.2l-.46 1.82 1.1.28.45-1.81c.3.08.59.15.87.23l-.45 1.79 1.1.28.46-1.82c1.85.35 3.27.21 3.85-1.48.5-1.35 0-2.15-1-2.66.72-.19 1.26-.64 1.41-1.62.2-1.33-.82-2.04-2.2-2.52z" />
    </svg>
    </p>
    </div>

    <aside className="card-creator-collections">

    <div className="card-creator">
      {/* <img className="card-creator--image" src={require(`../src/img/${props.modalResult.creatorPhoto}`)} alt="" /> */}
     
      <div className="card-creator--image"><svg viewBox="0 0 940 1000" fill="currentColor" height="2.4rem" width="2.4rem"> <path d="M736 722c136 48 204 88.667 204 122v106H470 0V844c0-33.333 68-74 204-122 62.667-22.667 105.333-45.667 128-69s34-55 34-95c0-14.667-7.333-31-22-49s-25.333-42.333-32-73c-1.333-8-4.333-14-9-18s-9.333-6.667-14-8c-4.667-1.333-9.333-7-14-17s-7.667-24.333-9-43c0-10.667 1.667-19.333 5-26 3.333-6.667 6.333-10.667 9-12l4-4c-5.333-33.333-9.333-62.667-12-88-2.667-36 11-73.333 41-112s82.333-58 157-58 127.333 19.333 158 58 44 76 40 112l-12 88c12 5.333 18 19.333 18 42-1.333 18.667-4.333 33-9 43s-9.333 15.667-14 17c-4.667 1.333-9.333 4-14 8s-7.667 10-9 18c-5.333 32-15.667 56.667-31 74s-23 33.333-23 48c0 40 11.667 71.667 35 95s65.667 46.333 127 69" /> </svg></div>



      <div>
        <p className="card-creator-text">Creator</p>

        <div className="card-copy--address">
        <p className="card-address">{props.modalResult.creatorAddress}</p>
        <div onClick={props.openCreator}> {props.creator ? <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="copy-etherum--address">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="copy-etherum--address">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
</svg>}

</div>
</div>
      </div>
    </div>

    <div className="card-collection">
      <p>collection</p>
      <div className="card-collection--block">
  <svg xmlns="http://www.w3.org/2000/svg" fill="#4895ef" viewBox="0 0 24 24" strokeWidth={1.5} stroke="" className="verified">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
  </svg>
  <p>Art Blocks</p>
  </div>
    </div>

    </aside>

<div className="modal-card--marketplace">
  <p className="modal-card--name">{props.modalResult.name}</p>
  <p className="marketplace-text">Marketplace</p>
  </div>

  <div className="modal-card--price__notification">
    <p>$<span className="modal-card--price"> {props.modalResult.price}</span></p>
    
    <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="copy-etherum--address">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
</svg>

</div>

<p className="description">{props.modalResult.description}</p>


<div className="fixed-bottom--card">

<div className="art-cross--chain">
  <p>Art</p>
  <p>Cross Chain</p>
</div>

<main>

<div className="fixed-bottom--card__btns">
 
 <div className="addtocart-btn">Add to Cart</div>

    <a href="https://opensea.io/" rel="noopener" target="_blank" className="buyNow-btn">Buy Now</a>

  </div>
  {/* <p className="offernft">You can also <a className="makeoffer-link" href="#">make an offer</a> on this NFT </p> */}
</main>

</div>

<figure className="ownership-details">
  <ul>
    {props.info.map(data=>{
      return  <li onClick={()=>props.openDescription(data.id)} style={data.buttonActive ? activeBtn : notActive} key={data.id}>{data.text}</li>
    })}
  </ul>

  <div>
  {props.info.map(data=>{
      return    <p key={data.id} style={data.contentActive ? {display: 'block'} : {display: 'none'}} className="description">{data.content}</p>
    })}

  </div>
</figure>

<figure className="modal-card--owner__info">

<div className="modal-card--owner">
{/* <img className="card-creator--image" src={require('../src/img/nft14.jpg')} alt="" /> */}
<div className="card-creator--image"><svg viewBox="0 0 24 24" fill="currentColor" height="2.4rem" width="2.4rem" > <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z" /> </svg></div>
    <div>
      <p className="card-creator-text">Owner</p>
      <p className="card-owner--name">{props.modalResult.ownerName}</p>
</div>
   </div> 

   <div className="modal-card--owner-copy--address">
      <p className="card-address">{props.modalResult.ownerAddress}</p>
      <div onClick={props.openOwner}>{props.owner ? <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="copy-etherum--address">
<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="copy-etherum--address">
<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
</svg>}


</div>
</div>
    
</figure>

  </main>
</div>
</main>

</figure>





  </section>
)

}