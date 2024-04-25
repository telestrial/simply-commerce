import { LegacyRef } from 'react';

interface CheckoutModalProps {
  modalRef: LegacyRef<HTMLDialogElement>;
}

export default function CheckoutModal(props: CheckoutModalProps) {
  const { modalRef } = props;
  return (
    <dialog ref={modalRef} id='checkout_modal' className='modal'>
      <div className='modal-box'>
        <h3 className='font-bold text-lg text-center'>Shopping Cart</h3>
        <p className='py-4'>Press ESC key or click the button below to close</p>
        <div className='modal-action'>
          <form method='dialog'>
            <button className='btn'>Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
