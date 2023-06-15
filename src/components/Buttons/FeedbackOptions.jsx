import PropTypes from 'prop-types';

import { ButtonBox, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonBox>
      {options.map(key => {
        return (
          <Button type="button" key={key} onClick={onLeaveFeedback} name={key}>
            {key}
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
