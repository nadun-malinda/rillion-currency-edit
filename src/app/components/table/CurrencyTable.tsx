import Card from "@/shared/ui/card/Card";
import { CurrencyTableBody } from "./CurrencyTableBody";
import { CurrencyTableHead } from "./CurrencyTableHead";

export default function CurrencyTable() {
  return (
    <Card className="h-full w-full overflow-scroll">
      <table className="text-left w-full">
        <CurrencyTableHead />
        <CurrencyTableBody />
      </table>
    </Card>
  );
}
