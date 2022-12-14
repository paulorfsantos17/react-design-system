import { InputHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className=" flex items-center gap-3 py-4 px-3 h-12 rounded  bg-gray-800  w-full focus-within:ring-2 ring-cyan-300">
      {props.children}
    </div>
  );
}

TextInputRoot.displayName = 'TextInput.Root'

interface PropsInputInput extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: PropsInputInput) {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-200 outline-none"
      {...props}
    />
  );
}

TextInputInput.displayName = "TextInput.Input"

interface TextInputIconProps {
  children: ReactNode
}

function TextInputIcon(props: TextInputIconProps) {
  return (
    <Slot className="w-6 h-6 text-gray-700" >
      {props.children}
    </Slot>
  )
}

TextInputIcon.displayName = 'TextInput.Icon'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
};
