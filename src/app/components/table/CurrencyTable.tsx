import Card from "@/shared/ui/card/Card";
import { CurrencyTableBody } from "./CurrencyTableBody";
import { CurrencyTableHead } from "./CurrencyTableHead";

export default function CurrencyTable() {
  return (
    <Card className="h-full w-full overflow-hidden">
      <table className="text-left w-full relative">
        <CurrencyTableHead />
        <CurrencyTableBody />
      </table>
    </Card>
  );
}
