import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { BiEdit } from "react-icons/bi";
import { authContext } from "../provider/AuthProviders";
import Select from "react-select";

const UpdateTask = ({ task, handleUpdate }) => {
  const { user } = useContext(authContext);
  let [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, control } = useForm();
  const { _id, title, assign_to, assign_by, description } = task;

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const onSubmit = (data) => {
    // console.log(data);
    handleUpdate(data);
    closeModal();
  };

  return (
    <>
      <button onClick={openModal}>
        <BiEdit size={20} className="hover:text-slate-500 " />
      </button>
      <div className="fixed  flex items-center justify-center"></div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 text-center"
                  >
                    Update Task
                  </Dialog.Title>
                  <div className="mt-2">
                    <div className="flex justify-center items-center">
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-full mx-auto border rounded-lg"
                      >
                        <div className="w-full px-5">
                          <label className="label">
                            <span className="text-add-class">Task Title</span>
                          </label>
                          <input
                            className="input w-full capitalize"
                            {...register("title")}
                            defaultValue={title}
                            placeholder="Task Title"
                            required
                          />
                        </div>

                        <div className="w-full px-5 hidden">
                          <label className="label">
                            <span className=""></span>
                          </label>
                          <input
                            {...register("assign_by")}
                            value={user.displayName}
                            required
                          />
                        </div>

                        <div className="w-full px-5">
                          <label className="label">
                            <span className="">Assign to</span>
                          </label>
                          <input
                            className="input w-full"
                            {...register("assign_to")}
                            defaultValue={assign_to}
                            placeholder="Assign to"
                            required
                          />
                        </div>

                        <div className="w-full px-5">
                          <label className="label">
                            <span className="">Task Description</span>
                          </label>
                          <textarea
                            className="input w-full min-h-[100px]"
                            {...register("description")}
                            defaultValue={description}
                            placeholder="Task Description"
                          />
                        </div>

                        <Controller
                          name="status"
                          control={control}
                          render={({ field }) => (
                            <Select
                              value={field.value}
                              onChange={(selectedOption) => {
                                field.onChange(selectedOption.value);
                              }}
                              isClearable
                              options={[
                                { label: "Pending", value: "pending" },
                                { label: "In Progress", value: "InProgress" },
                                { label: "Completed", value: "completed" },
                              ]}
                            />
                          )}
                        />

                        <div className="w-full p-5 ">
                          <button
                            type="submit"
                            className="btn btn-block primary-btn"
                          >
                            Update
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default UpdateTask;
