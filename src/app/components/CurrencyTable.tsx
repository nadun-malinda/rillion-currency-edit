import { fetchExchangeRates } from "@/shared/data/currency/fetchExchangeRates";
import Card from "@/shared/ui/card/Card";

const TABLE_HEAD = ["Name", "Unit", "Value", "Type"] as const;

export default async function CurrencyTable() {
  const exchangeRates = await fetchExchangeRates();

  if (exchangeRates instanceof Error) {
    return <></>;
  }

  return (
    <Card className="h-full w-full overflow-scroll">
      <table className="text-left w-full">
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
        <tbody className="flex flex-col items-center justify-between overflow-y-scroll w-full h-[80vh]">
          {exchangeRates.map((rate, index) => {
            const { name, unit, value, type } = rate;

            return (
              <tr key={index} className="flex w-full">
                <td className="p-3 border-b border-blue-gray-50 w-full">
                  <p className="font-normal">{name}</p>
                </td>
                <td className="p-3 border-b border-blue-gray-50 w-full">
                  <p className="font-normal">{unit}</p>
                </td>
                <td className="p-3 border-b border-blue-gray-50 w-full">
                  <p className="font-normal">{value}</p>
                </td>
                <td className="p-3 border-b border-blue-gray-50 w-full">
                  <p className="font-medium">{type}</p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}
