import { type DialogProps as BaseDialogProps } from '@rneui/base';
import { Dialog as BaseDialog } from '@rneui/themed';
import { useModalStore } from 'hooks/useModal';
import { difference } from 'lodash';
import React from 'react';

export interface DialogProps extends BaseDialogProps {
	name: string | string[];
	title: string;
	onCancel?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Dialog = ({ name: nameProp, title, children, onCancel, overlayStyle, ...restProps }: DialogProps) => {
	const { name, handleCancel } = useModalStore();

	const getOpenStatus = () => {
		if (typeof nameProp === 'string') {
			if (typeof name === 'string') {
				return nameProp === name;
			}
			return name.includes(nameProp);
		}
		return !difference(nameProp, name).length;
	};

	return (
		<BaseDialog
			isVisible={getOpenStatus()}
			onBackdropPress={() => {
				handleCancel(onCancel);
			}}
			overlayStyle={overlayStyle}
		>
			<BaseDialog.Title title={title} />
			{children}
		</BaseDialog>
	);
};

export default Dialog;
