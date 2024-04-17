import React from 'react';

interface FillCheckboxProps {
  label: string;
  checked: boolean;
  onChange: (data: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string; 
}

const FillCheckbox: React.FC<FillCheckboxProps> = ({ label, checked, onChange, className }) => {
  return (
    <label className={`inline-flex items-center ${className}`}>
      <input
        type="checkbox"
        className="rounded-lg  h-6 w-6  mr-4  "
        checked={checked}
        onChange={onChange}
      />
      <span>{label}</span>
    </label>
  );
};

export default FillCheckbox;
