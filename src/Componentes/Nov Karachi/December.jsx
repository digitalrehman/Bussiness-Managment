import React from "react";

const December = (props) => {
  let { date, sale, profit, Akbar, Anwar } = props.data;
  return (
    <>
      <table className="table table-dark table-hover text-center">
        <tbody>
          <tr>
            <td>{date}</td>
            <td>{sale}</td>
            <td>{profit}</td>
            <td>{Akbar}</td>
            <td>{Anwar}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default December;
