// Import the ProfileCard component we created earlier (like importing a template)
import ProfileCard from "./ProfileCard";

// Define the main App component that will be displayed on the webpage
function App() {
  // Create a list (array) of team member profiles with their information
  // This is like creating a digital employee directory
  const profiles = [
    {
      name: "Sahul 1", // Person's name
      role: "Frontend Developer", // Job title
      image: "https://images.unsplash.com/vector-1740737650825-1ce4f5377085?ixlib=rb-4.0.3&auto=format&fit=crop&q=60&w=600", // Profile picture URL
      description: "Loves creating interactive and user-friendly web designs.", // Short bio
    },
    {
      name: "Sahul 2",
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/vector-1744109949679-9504cd8f6719?ixlib=rb-4.0.3&auto=format&fit=crop&q=60&w=600",
      description: "Designs smooth and aesthetic user interfaces.",
    },
    {
      name: "Sahul 3",
      role: "Backend Engineer",
      image: "https://plus.unsplash.com/premium_vector-1727183388420-242fb6ccbc95?ixlib=rb-4.0.3&auto=format&fit=crop&q=60&w=600",
      description: "Enjoys solving complex problems using Node.js and Express.",
    },
  ];

  // Return the visual layout that will be shown on the webpage
  return (
    // Create a main container div with inline styling
    <div
      style={{
        display: "flex", // Arrange children side by side (like items in a row)
        justifyContent: "center", // Center everything horizontally
        flexWrap: "wrap", // Allow items to wrap to next line if needed
        padding: "20px", // Add space inside the container
        backgroundColor: "#e9ecef", // Set light gray background color
        minHeight: "100vh", // Make container at least full screen height
      }}
    >
      {/* 
        Loop through each profile in our profiles list and create a ProfileCard for each one
        profiles.map() is like saying "for each person in our team list, create a business card"
      */}
      {profiles.map((profile, index) => (
        // For each profile, create a ProfileCard component
        <ProfileCard
          key={index} // Give each card a unique ID so React can track them efficiently
          name={profile.name} // Pass the person's name to the ProfileCard
          role={profile.role} // Pass the job role to the ProfileCard
          image={profile.image} // Pass the profile picture URL to the ProfileCard
          description={profile.description} // Pass the description to the ProfileCard
        />
      ))}
    </div>
  );
}

// Make this App component available to be used as the main entry point
export default App;
