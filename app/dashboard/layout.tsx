export default function DashboardLayout({
  children, //will be page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {}
      <nav></nav>
      {children}
    </section>
  );
}
