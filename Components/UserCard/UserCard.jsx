import React, { useState } from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./UserCard.module.css";
import images from "../../assets";

const UserCard = ({ el, i, addFriends }) => {
  const [hidden, setHidden] = useState(false);

  const handleHideProfile = () => {
    setHidden(true);
  };

  return (
    <div className={Style.UserCard}>
      {!hidden && (
        <div className={Style.UserCard_box}>
          <Image
            className={Style.UserCard_box_img}
            src={images[`image${i + 1}`]}
            alt="user"
            width={100}
            height={100}
          />

          <div className={Style.UserCard_box_info}>
            <h3>{el.name}</h3>
            <p>{el.accountAddress.slice(0, 25)}..</p>
            <button
              onClick={() =>
                addFriends({
                  name: el.name,
                  userAddress: el.accountAddress,
                })
              }
            >
              Add Friend
            </button>
            <button onClick={handleHideProfile}>Hide Profile</button>
          </div>
        </div>
      )}

      {hidden && (
        <div className={Style.UserCard_hidden}>
          <p>This profile is hidden.</p>
          <button onClick={() => setHidden(false)}>Unhide Profile</button>
        </div>
      )}

      <small className={Style.number}>{i + 1}</small>
    </div>
  );
};

export default UserCard;
