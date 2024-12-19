import React from "react";

// Firebase image URLs
const images = {
  background:
    "https://firebasestorage.googleapis.com/v0/b/how-to-care-for-kerry.firebasestorage.app/o/Background.png?alt=media&token=b4890964-d997-4fcc-8e85-ec8ba8b9d7e0",
  logo:
    "https://firebasestorage.googleapis.com/v0/b/how-to-care-for-kerry.firebasestorage.app/o/Logo.png?alt=media&token=9dd7609d-c33d-4c5b-baba-4fedd294d4e1",
  residentDetails:
    "https://firebasestorage.googleapis.com/v0/b/how-to-care-for-kerry.firebasestorage.app/o/Resident%20Details.jpg?alt=media&token=f9cb507d-e64f-4813-a4e5-60759116364c",
  Contacts:
    "https://firebasestorage.googleapis.com/v0/b/how-to-care-for-kerry.firebasestorage.app/o/Contacts.jpg?alt=media&token=13802a23-696f-4704-babd-2e0abca7f50e",
  messages:
    "https://firebasestorage.googleapis.com/v0/b/how-to-care-for-kerry.firebasestorage.app/o/Messages.jpg?alt=media&token=acdc1f12-3e39-436c-985b-6be4eacaed9e",
  scrapbook:
    "https://firebasestorage.googleapis.com/v0/b/how-to-care-for-kerry.firebasestorage.app/o/Scrapbook.jpg?alt=media",
  myFamily:
    "https://firebasestorage.googleapis.com/v0/b/how-to-care-for-kerry.firebasestorage.app/o/My%20Family.jpg?alt=media&token=3098f117-df99-4e2b-b64b-ee05ce89041f",
  lifeHistory:
    "https://firebasestorage.googleapis.com/v0/b/how-to-care-for-kerry.firebasestorage.app/o/Life%20History.jpg?alt=media&token=a7ab2889-3ea9-4ce3-bb35-4df4e2328db7",
  howToCareForMe:
    "https://firebasestorage.googleapis.com/v0/b/how-to-care-for-kerry.firebasestorage.app/o/How%20To%20Care%20For%20Me.jpg?alt=media&token=ce3f7525-8639-4cf7-b7ca-27f91b110c0c",
  myFavourites:
    "https://firebasestorage.googleapis.com/v0/b/how-to-care-for-kerry.firebasestorage.app/o/My%20Favourites.jpg?alt=media&token=c4b5df2c-843e-405f-a6cc-08d3287a144c",
  andInTheEnd:
    "https://firebasestorage.googleapis.com/v0/b/how-to-care-for-kerry.firebasestorage.app/o/And%20In%20The%20End.jpg?alt=media&token=d4905fd8-bffc-428a-9463-02e8e523087b",
};

export default function WelcomePage() {
  return (
    <div style={{ ...styles.container, backgroundImage: `url(${images.background})` }}>
      <img src={images.logo} alt="Logo" style={styles.logo} />
      <h1 style={styles.heading}>Welcome to How to Care for Me</h1>
      <p style={styles.text}>View your online care plan by clicking the links below.</p>
      <div style={styles.grid}>
        {data.map((item) => (
          <div key={item.title} style={styles.cardContainer}>
            <a href={item.link} style={styles.card}>
              <img src={item.image} alt={item.title} style={styles.image} />
            </a>
            <p style={styles.description}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Data for links and images
const data = [
  { title: "Resident Details", link: "/residentdetails", image: images.residentDetails, description: "View your personal details." },
  { title: "Contacts", link: "/contacts", image: images.Contacts, description: "View a list of important contacts." },
  { title: "Messages", link: "/messages", image: images.messages, description: "View your messages." },
  { title: "Scrapbook", link: "/scrapbook", image: images.scrapbook, description: "Look back at your memories, photos, and videos." },
  { title: "My Family", link: "/myfamily", image: images.myFamily, description: "About my family." },
  { title: "Life History", link: "/lifehistory", image: images.lifeHistory, description: "View your unique life story." },
  { title: "How to Care for Me", link: "/howtocareforme", image: images.howToCareForMe, description: "View your care preferences and routines." },
  { title: "My Favourites", link: "/myfavourites", image: images.myFavourites, description: "Explore your favourite things." },
  { title: "And In The End", link: "/andinthend", image: images.andInTheEnd, description: "How I want to say goodbye." },
];

// Styles
const styles = {
  container: {
    padding: "2rem",
    textAlign: "center",
    fontFamily: "'Cormorant Garamond', serif",
    backgroundImage: `url(${images.background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  },
  logo: {
    width: "280px", // Logo size remains the same
    height: "auto",
    display: "block",
    position: "absolute",
    left: "40px", // Keep the logo slightly away from the edges
    top: "40px",
  },
  heading: {
    fontSize: "3.1rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    color: "#333",
  },
  text: {
    fontSize: "2.0rem",
    color: "#555",
    marginBottom: "2rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", // Keep 3 columns for the layout
    gap: "1rem", // Slightly smaller gap between items
    marginTop: "2rem",
    justifyItems: "center",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  card: {
    width: "300px", // Adjust width for smaller boxes
    height: "300px", // Adjust height for smaller boxes
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  description: {
    marginTop: "0.5rem",
    fontSize: "1.3rem", // Slightly smaller text for descriptions
    color: "#333",
  },
};
