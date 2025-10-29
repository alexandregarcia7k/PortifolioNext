"use client";

import { Toast, Toaster, createToaster } from "@ark-ui/react/toast";
import { Portal } from "@ark-ui/react/portal";
import { X, CheckCircle, AlertCircle, Info } from "lucide-react";

export const toaster = createToaster({
  placement: "bottom-end",
  gap: 16,
  overlap: true,
  duration: 5000,
});

export type ToastType = 'success' | 'error' | 'info';

export const showToast = ({
  title,
  description,
  type = 'info',
}: {
  title: string;
  description?: string;
  type?: ToastType;
}) => {
  toaster.create({ title, description, type });
};

export function ToastProvider() {
  return (
    <Portal>
      <Toaster toaster={toaster}>
        {(toast) => {
          const isSuccess = toast.type === 'success';
          const isError = toast.type === 'error';
          const isInfo = toast.type === 'info';

          return (
            <Toast.Root className="bg-zinc-900 border border-zinc-800 rounded-lg shadow-lg min-w-80 p-4 relative overflow-anywhere transition-all duration-300 ease-default will-change-transform h-(--height) opacity-(--opacity) translate-x-(--x) translate-y-(--y) scale-(--scale) z-(--z-index)">
              <div className="flex items-start gap-3">
                {isSuccess && <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />}
                {isError && <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />}
                {isInfo && <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />}
                <div className="flex-1">
                  <Toast.Title className="text-white font-semibold text-sm">
                    {toast.title}
                  </Toast.Title>
                  {toast.description && (
                    <Toast.Description className="text-zinc-400 text-sm mt-1">
                      {toast.description}
                    </Toast.Description>
                  )}
                </div>
                <Toast.CloseTrigger className="p-1 hover:bg-zinc-800 rounded transition-colors text-zinc-400 hover:text-white flex-shrink-0">
                  <X className="w-4 h-4" />
                </Toast.CloseTrigger>
              </div>
            </Toast.Root>
          );
        }}
      </Toaster>
    </Portal>
  );
}
