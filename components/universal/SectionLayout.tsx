import { LayoutProps } from "@/types/LayoutProps";

const SectionLayout = ({ children, bg }: LayoutProps) => {
  return (
    <section className={`w-full max-w-full overflow-hidden ${bg || ""}`}>
      <div className="container py-[2rem] sm:py-[3.5rem] w-full max-w-full overflow-hidden">{children}</div>
    </section>
  );
};
// export const SectionLayout2 = ({ children, bg }: LayoutProps) => {
//   return (
//     <section className={`${bg}`}>
//       <div className="container py-[0.5rem] ">{children}</div>
//     </section>
//   );
// };

export default SectionLayout;
