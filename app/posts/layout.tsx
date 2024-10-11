export default function Layout({ children, quickview }: { children: React.ReactNode, quickview: React.ReactNode }) {
  return (
    <>
      {children}
      {quickview}
    </>
  );
}
