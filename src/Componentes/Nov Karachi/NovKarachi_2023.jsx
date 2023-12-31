import React from "react";

const NovKarachi_2023 = (props) => {
  let { date, sale, profit, Akbar, Anwar } = props.data;
  return (
    <>
      <table className="table table-dark table-hover text-center">
        <tbody>
          <tr>
            <td scope="row">{date}</td>
            <td scope="row">{sale}</td>
            <td scope="row">{profit}</td>
            <td scope="row">{Akbar}</td>
            <td scope="row">{Anwar}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default NovKarachi_2023;
