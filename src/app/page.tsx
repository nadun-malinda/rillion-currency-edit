import CurrencyTable from "./components/table/CurrencyTable";

export default function Home() {
  return (
    <div className="p-4">
      <main className="w-full lg:w-3/4 mx-auto lg:py-12">
        <CurrencyTable />
      </main>
    </div>
  );
}
