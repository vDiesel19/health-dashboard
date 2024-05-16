import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Health Dashboard | Test Results'
}

export default async function Page() {
  return (
    <main>
      <h1>Test Results</h1>
    </main>
  );
}