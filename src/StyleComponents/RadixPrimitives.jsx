import React from "react";
import { DropdownMenu } from "radix-ui";

function RadixPrimitives() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white shadow-md transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Click
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            sideOffset={8}
            className="w-48 rounded-xl border border-gray-200 bg-white p-2 shadow-xl"
          >
            <DropdownMenu.Item
              className="cursor-pointer rounded-lg px-4 py-2.5 text-sm text-gray-700 outline-none transition hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50"
            >
              Profile
            </DropdownMenu.Item>

            <DropdownMenu.Item
              className="cursor-pointer rounded-lg px-4 py-2.5 text-sm text-gray-700 outline-none transition hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50"
            >
              Contact
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
}

export default RadixPrimitives;