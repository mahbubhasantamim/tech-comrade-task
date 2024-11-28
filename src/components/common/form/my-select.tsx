import { Control, Controller, FieldValues, Path } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

import { RuleType } from "@/types/form.type";
import ErrorInfo from "../error-info";
import MySpacer from "../my-spacer";

interface IMySelect {
  options: {
    value: string;
    label: string;
  }[];
  placeholder: string;
  value?: string;
  onChange: (value: string) => void;
  mRef?: React.LegacyRef<HTMLInputElement>;
  error?: string;
  disabled?: boolean;
}

export default function MySelect({
  value,
  placeholder,
  onChange,
  options,
  mRef,
  error,
  disabled,
}: IMySelect) {
  return (
    <div ref={mRef}>
      <Select value={value} onValueChange={onChange} disabled={disabled}>
        <SelectTrigger
          className={`${
            error ? `ring-2  ring-danger ring-offset-2` : ""
          } bg-black border-themePrimary`}
        >
          <SelectValue
            className="text-slate-950 dark:text-slate-50"
            placeholder={placeholder}
          />
        </SelectTrigger>
        <SelectContent className="max-h-48 bg-black text-white">
          {options.map((item) => {
            return (
              <SelectItem
                key={item.value}
                value={item.value}
                className="hover:cursor-pointer"
              >
                {item.label}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
      {error && <ErrorInfo message={error} />}
    </div>
  );
}

interface IMySelectWithRHF<T extends FieldValues>
  extends Omit<IMySelect, "mRef" | "value" | "onChange"> {
  name: Path<T>;
  control: Control<T>;
  rules?: RuleType;
}

export function MySelectWithRHF<T extends FieldValues>({
  name,
  placeholder,
  options,
  control,
  rules,
  disabled,
}: IMySelectWithRHF<T>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { value, onChange, ref }, fieldState: { error } }) => {
        return (
          <div>
            <label className="cursor-pointer text-sm text-slate-600 dark:text-slate-400">
              {placeholder}
            </label>
            <MySpacer className="h-1" />
            <MySelect
              options={options}
              placeholder={placeholder}
              mRef={ref}
              value={value || undefined}
              onChange={onChange}
              error={error?.message}
              disabled={disabled}
            />
          </div>
        );
      }}
    />
  );
}
