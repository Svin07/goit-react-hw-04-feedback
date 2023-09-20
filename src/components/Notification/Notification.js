import css from '../SectionTitle/SectionTitle.module.css';

export default function Notification({ message }) {
  return <p className={css.maintitle}>{message}</p>;
}
