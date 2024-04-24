import React from 'react';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (data: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string; 
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange, className }) => {
  return (
    <label className={`inline-flex items-center ${className}`}>
      <input
        type="radio"
        className="border  rounded-lg  h-6 w-6 text-indigo-600 mr-4"
        checked={checked}
        onChange={onChange}
      />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
