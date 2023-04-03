import { FC } from 'react';
import { createPortal } from 'react-dom';
import { BiX } from "react-icons/bi";

import classNames from 'classnames';

import './modal.scss';

type typeModal = 'modal' | 'modal-content';

interface IProps {
    id?: string,
    type?: typeModal,
    children: React.ReactNode,
    open?: boolean,
    onClose?: () => void;
}

const Modal: FC<IProps> = ({
		id,
    children, 
    open = false,
    onClose,
}) => {

  const modal = (
    <div
			id={id}
			className={classNames(
					'modal',
					{ active: open }
			)}
    >
        <div className='modal-content' onClick={e => e.stopPropagation()}>
            {children}
						<div className="modal-content__close" onClick={onClose}>
							<BiX  />
            </div>
        </div>
    </div>
  )

  return createPortal(modal, document.body)
}

export default Modal