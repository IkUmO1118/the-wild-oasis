import styled from 'styled-components';
import Button from './Button';
import Heading from './Heading';

const StyledConfirmDelete = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  // 本来はButton variation='danger'をクリック時、onConfirmを起動するのだが、BookingRow,jsxでのdelete Bookingの際、Modalが閉じないため、以下の酔うんあ記述をすることで、onSuccessでもonErrorでも強制的にModal.WindowからcloneElementを通じて受け取っているonCloseModalを起動させる。
  function handleClick() {
    onConfirm();
    onCloseModal?.();
  }

  return (
    <StyledConfirmDelete>
      <Heading as='h3'>Delete {resourceName}</Heading>
      <p>
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div>
        <Button
          variation='secondary'
          disabled={disabled}
          onClick={onCloseModal}
        >
          Cancel
        </Button>
        {/* <Button variation='danger' disabled={disabled} onClick={onConfirm}> */}
        <Button variation='danger' disabled={disabled} onClick={handleClick}>
          Delete
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
