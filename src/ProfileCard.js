import "./ProfileCard.css"; // Import CSS for styling

// ProfileCard component using props
function ProfileCard({ name, role, image, description }) {
  return (
    <div className="profile-card">
      <img src={image} alt={name} className="profile-img" />
      <h2>{name}</h2>
      <h4>{role}</h4>
      <p>{description}</p>
    </div>
  );
}

export default ProfileCard;
