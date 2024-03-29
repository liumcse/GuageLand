import React from "react";
import GoodImg from "@components/GoodImg";
import graphIcon from "@common/assets/pic/graph.jpg";

const PageLanguage = () => {
  return (
    <div className="container">
      <div className="heading">
        <div className="language-name">Bisu</div>
        <div className="badge-container">
          <div className="badge yellow">Laos</div>
          <div className="badge red">Threatened</div>
        </div>
      </div>
      <div className="info">
        <div>Also known as: Mibisu, Misu, Mibisu, Mbi</div>
        <div>Classification: Sino-Tibetan, Lolo-Burmese</div>
        <div>Code Authority: ISO 639-3</div>
        <div>Language Code: bzi</div>
      </div>
      <div className="graph">
        <GoodImg width="100%" src={graphIcon} />
      </div>
      <div className="data">
        <div className="data-card yellow">1,500 years history</div>
        <div className="data-card green">{"< 2,740 people are using"}</div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          padding 3.5rem 2rem;
        }
        .language-name {
          color: white;
          font-size: 1.5rem;
        }
        .badge {
          padding: 0.35rem 0.5rem;
          border-radius: 2px;
          margin-right: 1rem;
          font-size: 0.8rem;
          color: white;
        }
        .badge-container {
          display: flex;
          margin: 0.5rem 0;
        }
        .yellow {
          background-color: #ffd966ff;
        }
        .red {
          background-color: crimson;
        }
        .info {
          display: grid;
          grid-template-columns: auto;
          grid-row-gap: 0.5rem;
          color: white;
          font-size: 0.85rem;
          margin-top: 0.5rem;
        }
        .graph {
          background-color: white;
          padding: 0.5rem;
          margin-top: 1rem;
          border: 1px solid black;
        }
        .data {
          margin-top: 1rem;
          display: flex;
          justify-content: space-between;
        }
        .green {
          margin-left: 1rem;
          background-color: #75d866ff;
        }
        .data-card {
          display: flex;
          padding: 1rem;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          width: 10rem;
          height: 6rem;
        }
      `}</style>
    </div>
  );
};

export default PageLanguage;
