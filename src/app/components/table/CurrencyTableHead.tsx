const TABLE_HEAD = ["Name", "Unit / Code", "Value", "Type"] as const;

export function CurrencyTableHead() {
  return (
    <thead>
      <tr>
        {TABLE_HEAD.map((head, index) => (
          <th
            key={index}
            className="border-b border-blue-gray-100 px-3 py-6 bg-rl-green text-rl-luminus"
          >
            <p className="leading-none font-semibold">{head}</p>
          </th>
        ))}
      </tr>
    </thead>
  );
}
