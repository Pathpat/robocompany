import React from "react";

const Card = ({name,id,email}) =>{
//   const {name,id,email} = props; //to dhlwnw props wste na apofugw to na grafw synexeia props.name ktl
    return (
<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
    <img alt='robotss' src={`https://robohash.org/${id}?200x200`}/>
    <div>
    <h2>{name}</h2>
    <p>{email}</p>
    </div>
</div>
    );
}

export default Card;