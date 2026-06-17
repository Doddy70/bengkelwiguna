import BalanceCard from "@/components/dashboard/finance-1/balance-card";
import CurrencyCard from "@/components/dashboard/finance-1/currency-card";
import TransactionCard from "@/components/dashboard/finance-1/transaction-card";
import BankCard from "@/components/dashboard/finance-1/bank-card";
import QuickTransfer from "@/components/dashboard/finance-1/quick-transfer";
import InstalmentCard from "@/components/dashboard/finance-1/instalment-card";
import CustomerTransactions from "@/components/dashboard/finance-1/customer-transactions";
import Investment from "@/components/dashboard/finance-1/investment";
import ActivityCard from "@/components/dashboard/finance-1/activity-card";
import MySavings from "@/components/dashboard/finance-1/my-savings";
import Reports from "@/components/dashboard/finance-1/reports";
import AuditCard from "@/components/dashboard/finance-1/audit-card";
import ComponentViewer from "@/components/component-viewer";

const Page = () => {
  return (
    <div className="max-w-2xl mx-auto grid grid-cols-1 gap-14">
      <ComponentViewer
        title="Balance Card Section"
        Component={BalanceCard}
        componentPath="src/components/dashboard/finance-1/balance-card.tsx"
      />

      <ComponentViewer
        title="Currency Card Section"
        Component={CurrencyCard}
        componentPath="src/components/dashboard/finance-1/currency-card.tsx"
      />

      <ComponentViewer
        title="Transaction Card Section"
        Component={TransactionCard}
        componentPath="src/components/dashboard/finance-1/transaction-card.tsx"
      />

      <ComponentViewer
        title="Bank Card Section"
        Component={BankCard}
        componentPath="src/components/dashboard/finance-1/bank-card.tsx"
      />

      <ComponentViewer
        title="Quick Transfer Section"
        Component={QuickTransfer}
        componentPath="src/components/dashboard/finance-1/quick-transfer.tsx"
      />

      <ComponentViewer
        title="Instalment Card Section"
        Component={InstalmentCard}
        componentPath="src/components/dashboard/finance-1/instalment-card.tsx"
      />

      <ComponentViewer
        title="Customer Transactions Section"
        Component={CustomerTransactions}
        componentPath="src/components/dashboard/finance-1/customer-transactions.tsx"
      />

      <ComponentViewer
        title="Investment Section"
        Component={Investment}
        componentPath="src/components/dashboard/finance-1/investment.tsx"
      />

      <ComponentViewer
        title="Activity Card Section"
        Component={ActivityCard}
        componentPath="src/components/dashboard/finance-1/activity-card.tsx"
      />

      <ComponentViewer
        title="My Savings Section"
        Component={MySavings}
        componentPath="src/components/dashboard/finance-1/my-savings.tsx"
      />

      <ComponentViewer
        title="Reports Section"
        Component={Reports}
        componentPath="src/components/dashboard/finance-1/reports.tsx"
      />

      <ComponentViewer
        title="Audit Card Section"
        Component={AuditCard}
        componentPath="src/components/dashboard/finance-1/audit-card.tsx"
      />
    </div>
  );
};

export default Page;
