import { Button, Table } from "flowbite-react";

export function FinancialTradingCTASection() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center px-4 py-8 text-center sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Buy crypto at true cost
          </h2>
          <p className="mb-6 text-gray-500 dark:text-gray-400 md:text-lg lg:mb-16">
            Buy and sell 250+ cryptocurrencies with 20+ fiat currencies using
            bank transfers or your credit/debit card.
          </p>
        </div>
        <div className="relative mb-8 w-full overflow-x-auto">
          <Table>
            <Table.Body className="divide-y">
              <Table.Row>
                <Table.Cell
                  scope="row"
                  className="bg-transparent text-xl font-bold text-gray-900 dark:bg-transparent dark:text-white"
                >
                  Bitcoin&nbsp;
                  <span className="text-gray-500 dark:text-gray-400">BTC</span>
                </Table.Cell>
                <Table.Cell className="text-xl font-bold text-gray-900 dark:text-white">
                  $38,716.43
                </Table.Cell>
                <Table.Cell className="text-sm font-semibold text-red-500">
                  -10.82%
                </Table.Cell>
                <Table.Cell className="font-semibold text-gray-900 dark:text-white">
                  $729,729,745,340.82
                </Table.Cell>
                <Table.Cell className="flex justify-end">
                  <Button color="info">Trade</Button>
                </Table.Cell>
              </Table.Row>
              <Table.Row className="border-b dark:border-gray-700">
                <Table.Cell
                  scope="row"
                  className="bg-transparent text-xl font-bold text-gray-900 dark:bg-transparent dark:text-white"
                >
                  Ethereum&nbsp;
                  <span className="text-gray-500 dark:text-gray-400">ETH</span>
                </Table.Cell>
                <Table.Cell className="text-xl font-bold text-gray-900 dark:text-white">
                  $2,818.15
                </Table.Cell>
                <Table.Cell className="text-sm font-semibold text-red-500">
                  -13.88%
                </Table.Cell>
                <Table.Cell className="font-semibold text-gray-900 dark:text-white">
                  $333,396,739,452.23
                </Table.Cell>
                <Table.Cell className="flex justify-end">
                  <Button color="info">Trade</Button>
                </Table.Cell>
              </Table.Row>
              <Table.Row className="border-b dark:border-gray-700">
                <Table.Cell
                  scope="row"
                  className="bg-transparent text-xl font-bold text-gray-900 dark:bg-transparent dark:text-white"
                >
                  Cardano&nbsp;
                  <span className="text-gray-500 dark:text-gray-400">ADA</span>
                </Table.Cell>
                <Table.Cell className="text-xl font-bold text-gray-900 dark:text-white">
                  $1.22
                </Table.Cell>
                <Table.Cell className="text-sm font-semibold text-green-500">
                  +3.76%
                </Table.Cell>
                <Table.Cell className="font-semibold text-gray-900 dark:text-white">
                  $40,465,663,783.16
                </Table.Cell>
                <Table.Cell className="flex justify-end">
                  <Button color="info">Trade</Button>
                </Table.Cell>
              </Table.Row>
              <Table.Row className="border-b dark:border-gray-700">
                <Table.Cell
                  scope="row"
                  className="bg-transparent text-xl font-bold text-gray-900 dark:bg-transparent dark:text-white"
                >
                  Dogecoin&nbsp;
                  <span className="text-gray-500 dark:text-gray-400">DOGE</span>
                </Table.Cell>
                <Table.Cell className="text-xl font-bold text-gray-900 dark:text-white">
                  $0.153765
                </Table.Cell>
                <Table.Cell className="text-sm font-semibold text-green-500">
                  +8.39%
                </Table.Cell>
                <Table.Cell className="font-semibold text-gray-900 dark:text-white">
                  $729,729,745,340.82
                </Table.Cell>
                <Table.Cell className="flex justify-end">
                  <Button color="info">Trade</Button>
                </Table.Cell>
              </Table.Row>
              <Table.Row className="border-b bg-white dark:border-gray-700 dark:bg-gray-900">
                <Table.Cell
                  scope="row"
                  className="bg-transparent text-xl font-bold text-gray-900 dark:bg-transparent dark:text-white"
                >
                  Polkadot&nbsp;
                  <span className="text-gray-500 dark:text-gray-400">DOT</span>
                </Table.Cell>
                <Table.Cell className="text-xl font-bold text-gray-900 dark:text-white">
                  $22.24
                </Table.Cell>
                <Table.Cell className="font-semibold text-red-500">
                  -13.17%
                </Table.Cell>
                <Table.Cell className="font-semibold text-gray-900 dark:text-white">
                  $21,710,483,995.43
                </Table.Cell>
                <Table.Cell className="flex justify-end">
                  <Button color="info">Trade</Button>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
        <p className="mb-5 text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Sign up now to build your own portfolio for free!
        </p>
        <Button color="info" href="#" className="w-fit">
          Sign Up Now
        </Button>
      </div>
    </section>
  );
}
