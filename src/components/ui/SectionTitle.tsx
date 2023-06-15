import "@assets/styles/components/ui/SectionTitle.scss";

interface ISectionTitleProps {
  title: string;
}

export const SectionTitle = ({ title }: ISectionTitleProps) => {
  return <h2 className="section-title">{title}</h2>;
};
