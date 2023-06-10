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
