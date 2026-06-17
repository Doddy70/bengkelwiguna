import BalanceCard from "@/components/dashboard/finance-2/balance-card";
import CurrencyCard from "@/components/dashboard/finance-2/currency-card";
import TransactionCard from "@/components/dashboard/finance-2/transaction-card";
import BankCard from "@/components/dashboard/finance-2/bank-card";
import WalletSummary from "@/components/dashboard/finance-2/wallet-summary";
import CustomerTransactions from "@/components/dashboard/finance-2/customer-transactions";
import Investment from "@/components/dashboard/finance-2/investment";
import ActivityCard from "@/components/dashboard/finance-2/activity-card";
import MySavings from "@/components/dashboard/finance-2/my-savings";
import ExpenseHistory from "@/components/dashboard/finance-2/expense-history";
import ComponentViewer from "@/components/component-viewer";

const Page = () => {
  return (
    <div className="max-w-2xl mx-auto grid grid-cols-1 gap-14">
      <ComponentViewer
        title="Balance Card Section"
        Component={BalanceCard}
        componentPath="src/components/dashboard/finance-2/balance-card.tsx"
      />

      <ComponentViewer
        title="Currency Card Section"
        Component={CurrencyCard}
        componentPath="src/components/dashboard/finance-2/currency-card.tsx"
      />

      <ComponentViewer
        title="Transaction Card Section"
        Component={TransactionCard}
        componentPath="src/components/dashboard/finance-2/transaction-card.tsx"
      />

      <ComponentViewer
        title="Bank Card Section"
        Component={BankCard}
        componentPath="src/components/dashboard/finance-2/bank-card.tsx"
      />

      <ComponentViewer
        title="Wallet Summary Section"
        Component={WalletSummary}
        componentPath="src/components/dashboard/finance-2/wallet-summary.tsx"
      />

      <ComponentViewer
        title="Customer Transactions Section"
        Component={CustomerTransactions}
        componentPath="src/components/dashboard/finance-2/customer-transactions.tsx"
      />

      <ComponentViewer
        title="Investment Section"
        Component={Investment}
        componentPath="src/components/dashboard/finance-2/investment.tsx"
      />

      <ComponentViewer
        title="Activity Card Section"
        Component={ActivityCard}
        componentPath="src/components/dashboard/finance-2/activity-card.tsx"
      />

      <ComponentViewer
        title="My Savings Section"
        Component={MySavings}
        componentPath="src/components/dashboard/finance-2/my-savings.tsx"
      />

      <ComponentViewer
        title="Expense History Section"
        Component={ExpenseHistory}
        componentPath="src/components/dashboard/finance-2/reports.tsx"
      />
    </div>
  );
};

export default Page;
