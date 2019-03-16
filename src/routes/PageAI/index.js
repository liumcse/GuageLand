import React from "react";

const PageAI = () => (
  <div className={styles.appContainer}>
    <div className={styles.welcomeHeader}>Hello, World!</div>
    <div className={styles.welcomeMessage}>
      This is your AI page!
    </div>
    <div className={styles.welcomeMessage.concat(" ").concat(styles.emoji)}>
      🚀
    </div>
  </div>
);

export default PageAI;
