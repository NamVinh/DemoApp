import { difference } from 'lodash';
import { create } from 'zustand';

export interface ModalState {
	openCallback: any;
	closeCallback: any;

	data: Record<string, any>;
	name: string | string[];

	handleOpen: (name: string | string[], data?: any, callback?: any) => void;
	handleCancel: (callback?: any) => void;
	getData: <T = unknown>(name: string | string[]) => T;
	getOpen: (name: string | string[]) => boolean;
}

export const useModalStore = create<ModalState>((set, get) => {
	return {
		openCallback: null,
		closeCallback: null,

		data: {},
		name: '',

		handleOpen: (name, data, callback) => {
			set({
				name,
			});

			const { data: dataStore } = get();
			if (data && typeof data !== 'function') {
				if (typeof name === 'string') {
					set({
						data: {
							[name]: data,
						},
					});
				} else {
					set({
						data: {
							...dataStore,
							[name.join()]: data,
						},
					});
				}
			}
			if (typeof callback === 'function') {
				set({
					openCallback: callback,
				});
			}

			if (typeof data === 'function') {
				set({
					openCallback: data,
				});
			}
		},

		handleCancel: (callback) => {
			const { name } = get();
			if (typeof name === 'string') {
				set({
					name: '',
				});
			} else {
				name.pop();
				set({
					name: name.length === 1 ? name[0] : name,
				});
			}

			if (typeof callback === 'function') {
				set({
					closeCallback: callback,
				});
			}
		},

		getData: (name) => {
			const { data } = get();
			if (typeof name === 'string') {
				return data[name];
			}
			return data[name.join()];
		},

		getOpen: (name) => {
			const { name: nameStore } = get();

			if (typeof name === 'string') {
				if (typeof name === 'string') {
					return name === nameStore;
				}
				return nameStore.includes(name);
			}
			return !difference(name, nameStore).length;
		},
	};
});

const useModal = () => {
	const { handleOpen, handleCancel, getData, getOpen } = useModalStore();

	return {
		handleOpen,
		handleCancel,
		getData,
		getOpen,
	};
};

export default useModal;
