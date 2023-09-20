import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  feedbackPercentage,
  total,
}) {
  return (
    <div className={css.statcontainer}>
      <h2 className={css.stattitle}>Statistics</h2>
      <ul className={css.statlist}>
        <li>
          <p className={css.statitem}>Good: {good}</p>
        </li>
        <li>
          <p className={css.statitem}>Neutral: {neutral}</p>
        </li>
        <li>
          <p className={css.statitem}>Bad: {bad}</p>
        </li>
        <li>
          <p className={css.statitem}>Total: {total}</p>
        </li>
        <li>
          <p className={css.statitem}>
            Positive Feedback:
            {feedbackPercentage} %
          </p>
        </li>
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
