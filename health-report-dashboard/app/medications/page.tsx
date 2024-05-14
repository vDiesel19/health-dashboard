import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Health Dashboard | Medications'
}

export default async function Page() {
  return (
    <main>
      <h1>Medications</h1>
    </main>
  );
}