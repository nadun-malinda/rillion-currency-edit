import Table from "@/shared/ui/table/Table";
import CurrencyTable from "./components/CurrencyTable";

export default function Home() {
  return (
    <div className="">
      <main className="w-3/4 mx-auto py-12">
        <Table />
        <CurrencyTable />
      </main>
    </div>
  );
}
