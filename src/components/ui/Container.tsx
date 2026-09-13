export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[82rem] px-6 sm:px-10 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    // 96px of padding top and bottom is generous on a desktop but eats a
    // phone screen, so the rhythm starts tighter and opens up from sm.
    <section id={id} className={`py-16 sm:py-24 lg:py-32 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
