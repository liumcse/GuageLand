import React from "react";

const PageHouse = () => (
  <div className={styles.appContainer}>
    <div className={styles.welcomeHeader}>Hello, World!</div>
    <div className={styles.welcomeMessage}>
      This is your house page!
    </div>
    <div className={styles.welcomeMessage.concat(" ").concat(styles.emoji)}>
      🚀
    </div>
  </div>
);

export default PageHouse;
