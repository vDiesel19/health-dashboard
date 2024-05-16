import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Health Dashboard | Summary'
}

export default async function Page() {
  return (
    <main>
      <h1>Health Summary</h1>
    </main>
  );
}