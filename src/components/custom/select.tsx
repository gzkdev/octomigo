import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

type CustomSelectProps<T extends { value: string; label: string }> = {
  options: T[];
  value: string;
  onChange: (value: string) => void;
};

export default function CustomSelect<
  T extends { value: string; label: string },
>({ options, value, onChange }: CustomSelectProps<T>) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
