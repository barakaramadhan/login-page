import { DropdownMenu } from 'radix-ui'
import React from 'react'

function RadixThemes() {
  return (
    <div>
        <DropdownMenu>
            <DropdownMenu.Trigger asChild>
                <button className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white shadow-md transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
                    Option
                </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Content>
                <DropdownMenu.Item className="cursor-pointer rounded-lg px-4 py-2.5 text-sm text-gray-700 outline-none transition hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50">
                    Edit
                </DropdownMenu.Item>
                <DropdownMenu.Item className="cursor-pointer rounded-lg px-4 py-2.5 text-sm text-gray-700 outline-none transition hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50">
                    Duplicate
                </DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu>
    </div>
  )
}

export default RadixThemes