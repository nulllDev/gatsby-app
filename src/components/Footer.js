import React from "react"

import styles from "../components/footer.module.css"

const Footer = () => {
  return (
    <div className={styles.main}>
      <span className={styles.links}>
        <a
          href="https://unsplash.com/photos/AtQoiUN_w1s"
          rel="noreferrer"
          target="_blank"
        >
          Clouds
        </a>
        <a
          href="https://unsplash.com/photos/hHvEQSOrj3E"
          rel="noreferrer"
          target="_blank"
        >
          Subway Station
        </a>
        <a
          href="https://unsplash.com/photos/RarQDC4DpNE"
          rel="noreferrer"
          target="_blank"
        >
          Snowy Trees
        </a>
      </span>
      <p>Footer | Copyright 2021</p>
    </div>
  )
}

export default Footer
