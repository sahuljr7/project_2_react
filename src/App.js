// Importing the ProfileCard component that we created in another file (ProfileCard.js)
import ProfileCard from "./ProfileCard";

// Defining the main App component — this is the main part of the webpage
function App() {
  // Creating a list (array) of profile information.
  // Each profile is an object containing details about one person.
  const profiles = [
    {
      name: "Sahul 1", // Person's name
      role: "Frontend Developer", // Job title
      image:
        "https://images.unsplash.com/vector-1740737650825-1ce4f5377085?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWR1bHR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600", // Profile picture URL
      description: "Loves creating interactive and user-friendly web designs.", // Short bio
    },
    {
      name: "Sahul 2",
      role: "UI/UX Designer",
      image:
        "https://images.unsplash.com/vector-1744109949679-9504cd8f6719?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWR1bHR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      description: "Designs smooth and aesthetic user interfaces.",
    },
    {
      name: "Sahul 3",
      role: "Backend Engineer",
      image:
        "https://plus.unsplash.com/premium_vector-1727183388420-242fb6ccbc95?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      description: "Enjoys solving complex problems using Node.js and Express.",
    },
  ];

  // The return statement describes what the App component should display on the screen
  return (
    // Main container that holds all the Profile Cards
    // Inline CSS styles are applied directly to this div (using the 'style' attribute)
    <div
      style={{
        display: "flex", // Places cards side-by-side in a row
        justifyContent: "center", // Centers all cards horizontally
        flexWrap: "wrap", // Moves cards to the next line if there's not enough space
        padding: "20px", // Adds space around the cards
        backgroundColor: "#e9ecef", // Light gray background color for the page
        minHeight: "100vh", // Makes the container take up the full height of the browser window
      }}
    >
      {/* Using the .map() function to loop through each profile in the 'profiles' array.
          For every profile, we create a new ProfileCard component and pass the person's details into it. */}
      {profiles.map((profile, index) => (
        // 'key' helps React identify each card uniquely (important for performance)
        <ProfileCard
          key={index}
          name={profile.name} // Passing the name to the ProfileCard
          role={profile.role} // Passing the role
          image={profile.image} // Passing the image URL
          description={profile.description} // Passing the description
        />
      ))}
    </div>
  );
}

// Exporting the App component so it can be displayed by React in the browser
export default App;
