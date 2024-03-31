import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'atoms';
import Dialog from 'components/Dialog';
import { InputField } from 'components/Fields/InputField';
import useModal from 'hooks/useModal';
import React from 'react';
import { useForm } from 'react-hook-form';
import { type TaskItem } from 'types/models/Task';
import * as yup from 'yup';

export interface DialogTaskProps {
	name: string;
	onSubmit: (data: any) => void;
}

const schema = yup
	.object({
		title: yup.string().required(),
		description: yup.string().required(),
	})
	.required();

const DialogTask = ({ name, onSubmit }: DialogTaskProps) => {
	const { handleCancel } = useModal();
	const {
		control,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const handleFinish = (data: TaskItem) => {
		try {
			onSubmit(data);
			reset();
			handleCancel();
		} catch (error) {}
	};

	return (
		<Dialog name={name} overlayStyle={{ height: 400 }}>
			<InputField name="title" control={control} errors={errors} label="Tiêu đề" />
			<InputField name="description" control={control} errors={errors} label="Mô tả" />

			<Button title="Thêm" onPress={handleSubmit(handleFinish)} />
		</Dialog>
	);
};

export default DialogTask;
