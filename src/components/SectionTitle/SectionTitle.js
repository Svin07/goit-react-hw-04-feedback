import css from './SectionTitle.module.css';

export default function SectionTitle({ maintitle, children }) {
  return (
    <section>
      <h2 className={css.maintitle}>{maintitle}</h2>
      {children}
    </section>
  );
}
