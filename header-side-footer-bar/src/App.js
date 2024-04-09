import React from 'react';
import Header from './header';
import Sidebar from './sidebar';
import Footer from './footer';

function App() {
  return (
      <div className="App" style={styles.container}>
          <Header />
          <div className="content" style={styles.content}>
              <Sidebar />
              <main className="main-content" style={styles.mainContent}>
                  <h2>Main Content Area</h2>
                  <p>Technology is advancing at a rapid pace, revolutionizing every aspect of our lives. From artificial intelligence and machine learning to blockchain and virtual reality, new technologies are shaping the future.</p>
                  <p>Software development is at the forefront of innovation, with programming languages like JavaScript, Python, and Java powering web applications, mobile apps, and enterprise software.</p>
                  <p>Cloud computing platforms such as AWS, Azure, and Google Cloud are enabling businesses to scale their operations and deploy applications globally with ease.</p>
                  <p>The Internet of Things (IoT) is connecting devices and creating smart homes, smart cities, and smart industries, leading to increased efficiency and automation.</p>
                  <p>Cybersecurity remains a critical concern as cyber threats continue to evolve, highlighting the importance of robust security measures and protocols.</p>
                  <p>As technology continues to evolve, staying updated with the latest trends and advancements is essential for businesses and individuals alike.</p>
              </main>
          </div>
          <Footer />
      </div>
  );
}

const styles = {
  container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '20px',
  },
  content: {
      display: 'flex',
      alignItems: 'flex-start',
      maxWidth: '1200px',
      width: '100%',
  },
  mainContent: {
      flex: 1,
      textAlign: 'left',
      padding: '20px',
  }
};

export default App;