import React from "react";

const Nov_2023 = (props) => {
  let { date, sale, profit } = props.data;
  return (
    <>
  <table className="table table-dark table-hover text-center">
        <tbody>
          <tr>
            <td scope="row">{date}</td>
            <td scope="row"> {sale}</td>
            <td scope="row">{profit}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Nov_2023;
