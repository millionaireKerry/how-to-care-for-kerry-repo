import React from 'react';

const Layout = ({ children }) => {
  return (
    <div style={styles.container}>
      {children}
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    minHeight: '100vh',
    backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/how-to-care-for-kerry.firebasestorage.app/o/Background.png?alt=media&token=c9bb4be0-d572-4ce8-8f47-d2cc9d44ce98')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
};

export default Layout;
