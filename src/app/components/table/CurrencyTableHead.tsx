/**
 * An array representing the table headers for the currency table.
 * Each element is a string that corresponds to a column header.
 */
const TABLE_HEAD = ["Name", "Unit / Code", "Value", "Type"] as const;

/**
 * CurrencyTableHead component renders the header row for the currency table.
 * It dynamically generates table headers based on the `TABLE_HEAD` constant.
 *
 * @returns {JSX.Element} The table header row with the specified column headers.
 */
export function CurrencyTableHead() {
  return (
    <thead>
      <tr>
        {TABLE_HEAD.map((head, index) => (
          <th
            key={index}
            className="border-b border-blue-gray-100 px-3 py-6 bg-rl-green text-rl-luminus"
          >
            <p className="leading-none font-semibold text-base">{head}</p>
          </th>
        ))}
      </tr>
    </thead>
  );
}
