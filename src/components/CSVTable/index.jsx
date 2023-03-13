function CSVTable({ data }) {
  return (
    <table>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {Object.keys(row).map((key, index) => (
                <td key={index}>{row[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CSVTable;