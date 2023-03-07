import React, { useEffect } from "react";
import "./index.css";
import { nanoid } from "nanoid";
import nfts from "./nfts";
import Card from "./card";
import cardInfo from "./cardInfo";

export default function App() {
  const [nftData, setNftData] = React.useState(nfts);
  const [cardData, setCardData] = React.useState([]);
  const [modal, setModal] = React.useState(false);
  const [copyCreator, setCreator] = React.useState(false);
  const [copyOwner, setOwner] = React.useState(false);
  const [cardInfoBtn, setCardInfoBtn] = React.useState(cardInfo);
 
 

  //add event on the ownership history & 0ffers to display
  //details  on the NFT
  function handleClickOnDescriptionBtn(id) {
    // console.log(id)
    setCardInfoBtn(
      cardInfoBtn.map((data) => {
        return {
          ...data,
          buttonActive: id === data.id ? !data.buttonActive : false,
          contentActive: id === data.id ? !data.contentActive : false,
        };
      })
    );
  }


  // ------------------------------>
  function handleClickOnCard(id) {
    // pass the id on each card as you click on the card to return
    // the corresponding card details
    // console.log(id)
    // we loop over the nft data to get the corresponding objects
    setCardData(
      nftData.find((data) => {
        return data.id === id;
      })
    );

    setModal(true);
  
  }


  // ------------------------->

  function handleClickOnCloseModal() {
    setModal(!modal);
  }
  // -------------------------->
  function handleClickOnCopyCreatorAddress() {
    setCreator(!copyCreator);
  }
  // -------------------------->
  function handleClickOnCopyOwnerAddress() {
    setOwner(!copyOwner);
  }

  // console.log(cardData);

  return (
    <div>
      <Card
        info={cardInfoBtn}
        openDescription={handleClickOnDescriptionBtn}
        data={nftData}
        openModalCard={handleClickOnCard}
        modalResult={cardData}
        openModal={modal}
        closeModal={handleClickOnCloseModal}
        creator={copyCreator}
        openCreator={handleClickOnCopyCreatorAddress}
        owner={copyOwner}
        openOwner={handleClickOnCopyOwnerAddress}
       
      />
    </div>
  );
}
