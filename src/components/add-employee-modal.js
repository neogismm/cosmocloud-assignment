import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import React from "react";
import AddEmployeeInput from './add-employee-input-field';

const AddEmployeeModal = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <DialogTitle as="h3" className="mt-4 text-lg text-center font-medium leading-6 text-gray-900">
              Add a new employee
            </DialogTitle>
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <AddEmployeeInput />
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default AddEmployeeModal;