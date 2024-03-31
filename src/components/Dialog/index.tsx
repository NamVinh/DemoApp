import { type DialogProps as BaseDialogProps } from '@rneui/base';
import { Dialog as BaseDialog } from '@rneui/themed';
import { useModalStore } from 'hooks/useModal';
import { difference } from 'lodash';
import React from 'react';

export interface DialogProps extends BaseDialogProps {
	name: string | string[];
	onCancel?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Dialog = ({ name: nameProp, children, onCancel, overlayStyle, ...restProps }: DialogProps) => {
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
			<BaseDialog.Title title="Dialog Title" />
			{children}
			{/* <BaseDialog.Actions>
				<BaseDialog.Button
					title="ACTION 1"
					onPress={() => {
						return console.log('Primary Action Clicked!');
					}}
				/>
				<BaseDialog.Button
					title="ACTION 2"
					onPress={() => {
						return console.log('Secondary Action Clicked!');
					}}
				/>
			</BaseDialog.Actions> */}
		</BaseDialog>
	);
};

export default Dialog;
