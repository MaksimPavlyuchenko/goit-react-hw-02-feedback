import PropTypes from 'prop-types';

import { ButtonBox, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonBox>
      {options.map(item => {
        return (
          <Button
            type="button"
            key={item}
            onClick={onLeaveFeedback}
            name={item}
          >
            {item}
          </Button>
        );
      })}
    </ButtonBox>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};
