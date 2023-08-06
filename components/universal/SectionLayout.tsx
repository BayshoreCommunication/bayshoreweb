import { LayoutProps } from "@/types/LayoutProps";

const SectionLayout = ({ children, bg }: LayoutProps) => {
  return (
    <section className={`${bg}`}>
      <div className="container py-[4rem] ">{children}</div>
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
