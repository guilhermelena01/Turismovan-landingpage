import { FontOswald } from "@/src/utils/util";
import { ReactElement } from "react";

interface CustomButtonProps {
    backgroundColor?: string;
    color: string;
    text: string;
    icon?: ReactElement;
    handler?: any;
    hasBorder?: boolean;
    disabled?: boolean;
    classname?: string;
}

export default function CustomButton(props: CustomButtonProps) {
    return (
        <>
            <button
                style={{ backgroundColor: props.backgroundColor ?? "#FFFFFF", color: props.color ?? "#000000" }}
                onClick={props.handler}
                className={`${props.classname} flex items-center gap-2 rounded-3xl px-8 py-2 whitespace-nowrap font-semibold
                ${props.disabled ? "cursor-not-allowed" : "cursor-pointer"}
                ${FontOswald.className} ${props.hasBorder ? "border border-[#e0e0e0]" : "border-none"}`}
            >
                {props.icon ?? ""}
                {props.text}
            </button>
        </>
    )
}