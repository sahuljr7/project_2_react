import ProfileCard from "./ProfileCard";

function App() {
  // Array of profiles (data)
  const profiles = [
    {
      name: "Sahul 1",
      role: "Frontend Developer",
      image: "https://images.unsplash.com/vector-1740737650825-1ce4f5377085?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWR1bHR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      description: "Loves creating interactive and user-friendly web designs.",
    },
    {
      name: "Sahul 2",
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/vector-1744109949679-9504cd8f6719?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWR1bHR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      description: "Designs smooth and aesthetic user interfaces.",
    },
    {
      name: "Sahul 3",
      role: "Backend Engineer",
      image: "https://plus.unsplash.com/premium_vector-1727183388420-242fb6ccbc95?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      description: "Enjoys solving complex problems using Node.js and Express.",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        padding: "20px",
        backgroundColor: "#e9ecef",
        minHeight: "100vh",
      }}
    >
      {profiles.map((profile, index) => (
        <ProfileCard
          key={index}
          name={profile.name}
          role={profile.role}
          image={profile.image}
          description={profile.description}
        />
      ))}
    </div>
  );
}

export default App;
