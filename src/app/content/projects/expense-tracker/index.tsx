import { DocumentationPage } from '../documentation-common/DocumentationPage';
import { expenseTrackerDocs } from './expenseTrackerDocs';

export const ExpenseTracker = () => (
  <DocumentationPage
    title="Expense Tracker Project"
    documentation={expenseTrackerDocs}
  />
);
