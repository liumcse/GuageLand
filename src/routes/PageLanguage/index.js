import React from "react";
import GoodImg from "@components/GoodImg";
import graphIcon from "@common/assets/pic/graph.jpg";

const PageLanguage = () => {
  return (
    <div className="container">
      <div className="heading">
        <div className="language-name">Language Name</div>
        <div className="badge-container">
          <div className="badge yellow">Malaysia</div>
          <div className="badge red">Severely Endangered</div>
        </div>
      </div>
      <div className="info">
        <div>Also known as: TODO</div>
        <div>Classification: TODO</div>
        <div>Orthography: TODO</div>
        <div>Code Authority: TODO</div>
        <div>Language Code: TODO</div>
      </div>
      <div className="graph">
        <GoodImg width="100%" src={graphIcon} />
      </div>
      <div className="data">
        <div className="data-card yellow">1,500 years history</div>
        <div className="data-card green">7,000 people are using</div>
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
          background-color: #adad39;
        }
        .red {
          background-color: crimson;
        }
        .info {
          display: flex;
          flex-direction: column;
          color: white;
          font-size: 0.85rem;
          margin-top: 0.5rem;
        }
        .graph {
          background-color: white;
          padding: 0.5rem;
          margin-top: 1rem;
        }
        .data {
          margin-top: 1rem;
          display: flex;
          justify-content: space-between;
        }
        .green {
          margin-left: 1rem;
          background-color: #3b923b;
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
