// Importing the React library, which is necessary to create React components
import React from "react";

// Importing the external CSS file named "ProfileCard.css" to style how this component looks
import "./ProfileCard.css";

// Creating a function called "ProfileCard" which is a React component
// It takes in some "props" — these are pieces of information (name, role, image, description)
// that will be passed into this component from another file
function ProfileCard({ name, role, image, description }) {
  // The "return" statement tells React what should appear on the screen
  return (
    // This is the main container for the profile card
    // It uses a CSS class called "profile-card" to apply specific styling
    <div className="profile-card">
      
      {/* Displaying an image of the person.
          The 'src' attribute uses the image link passed as a prop.
          The 'alt' attribute shows the person's name if the image can't load.
          'className' is used to style the image with CSS. */}
      <img src={image} alt={name} className="profile-img" />

      {/* Displaying the person's name in a large heading */}
      <h2>{name}</h2>

      {/* Displaying the person's role or job title in a smaller heading */}
      <h4>{role}</h4>

      {/* Displaying a short description about the person */}
      <p>{description}</p>
    </div>
  );
}

// Making the ProfileCard component available to be used in other files
export default ProfileCard;
