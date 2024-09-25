const TABLE_HEAD = ["Name", "Unit", "Value", "Type"] as const;

export function CurrencyTableHead() {
  return (
    <thead className="flex w-full">
      <tr className="flex w-full">
        {TABLE_HEAD.map((head, index) => (
          <th
            key={index}
            className="border-b border-blue-gray-100 p-4 w-full bg-rl-green text-rl-luminus"
          >
            <p className="leading-none font-semibold">{head}</p>
          </th>
        ))}
      </tr>
    </thead>
  );
}
