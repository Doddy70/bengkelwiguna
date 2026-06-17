import ActivityCard from "@/components/dashboard/finance-1/activity-card";
import AuditCard from "@/components/dashboard/finance-1/audit-card";
import BalanceCard from "@/components/dashboard/finance-1/balance-card";
import BankCard from "@/components/dashboard/finance-1/bank-card";
import CurrencyCard from "@/components/dashboard/finance-1/currency-card";
import CustomerTransactions from "@/components/dashboard/finance-1/customer-transactions";
import InstalmentCard from "@/components/dashboard/finance-1/instalment-card";
import Investment from "@/components/dashboard/finance-1/investment";
import MySavings from "@/components/dashboard/finance-1/my-savings";
import QuickTransfer from "@/components/dashboard/finance-1/quick-transfer";
import Reports from "@/components/dashboard/finance-1/reports";
import TransactionCard from "@/components/dashboard/finance-1/transaction-card";

const Page = () => {
  return (
    <div className="grid grid-cols-12 gap-7">
      <BalanceCard className="col-span-12 lg:col-span-6" />
      <CurrencyCard className="col-span-12 lg:col-span-6" />

      <TransactionCard className="col-span-12 lg:col-span-8" />
      <BankCard className="col-span-12 lg:col-span-4" />

      <div className="col-span-12 lg:col-span-4">
        <QuickTransfer />
        <InstalmentCard className="mt-7" />
      </div>
      <CustomerTransactions className="col-span-12 lg:col-span-8" />

      <Investment className="col-span-12 lg:col-span-8" />
      <ActivityCard className="col-span-12 lg:col-span-4" />

      <MySavings className="col-span-12 lg:col-span-4" />
      <AuditCard className="col-span-12 lg:col-span-4" />
      <Reports className="col-span-12 lg:col-span-4" />
    </div>
  );
};

export default Page;
