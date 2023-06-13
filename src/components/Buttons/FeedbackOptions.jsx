import PropTypes from 'prop-types';

import { ButtonBox, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const Keys = Object.keys(options);

  return (
    <ButtonBox>
      {Keys.map(key => {
        return (
          <Button type="button" key={key} onClick={onLeaveFeedback} name={key}>
            {key}
          </Button>
        );
      })}
    </ButtonBox>
  );
};

FeedbackOptions.propTypes={
  onLeaveFeedback:PropTypes.func.isRequired,
  options:PropTypes.shape({
bad:PropTypes.number.isRequired,
good:PropTypes.number.isRequired,
neutral:PropTypes.number.isRequired,
  })
}