export default function Page() {

    return (

        <div style={styles.container}>

            <h1 style={styles.heading}>Welcome to How to Care for Kerry</h1>

            <p style={styles.text}>

                Explore the different sections of the application below.

            </p>

            <div style={styles.grid}>

                <a href="/contacts" style={styles.card}>

                    <h2>Contacts &rarr;</h2>

                    <p>View and manage your contacts.</p>

                </a>

                <a href="/life-history" style={styles.card}>

                    <h2>Life History &rarr;</h2>

                    <p>Record and explore your life history.</p>

                </a>

                <a href="/how-to-care-for-me" style={styles.card}>

                    <h2>Care Details &rarr;</h2>

                    <p>Learn how to take care of your needs.</p>

                </a>

                <a href="/favourites" style={styles.card}>

                    <h2>Favourites &rarr;</h2>

                    <p>Check out your favorite things.</p>

                </a>

            </div>

        </div>

    );

}



// Basic inline styling for a clean layout

const styles = {

    container: {

        padding: "2rem",

        textAlign: "center",

        fontFamily: "Arial, sans-serif",

    },

    heading: {

        fontSize: "2.5rem",

        fontWeight: "bold",

        marginBottom: "1rem",

    },

    text: {

        fontSize: "1.2rem",

        color: "#555",

    },

    grid: {

        display: "grid",

        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",

        gap: "1rem",

        marginTop: "2rem",

    },

    card: {

        padding: "1.5rem",

        border: "1px solid #ddd",

        borderRadius: "8px",

        textDecoration: "none",

        color: "inherit",

        transition: "box-shadow 0.2s ease-in-out",

        boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",

    },

};

