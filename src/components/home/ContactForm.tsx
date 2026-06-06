import Button from "../button/Button";
import { contactForm } from "@/types/form";
import Label from "@/components/label/Label";
import { serviceOptions } from "@/data/home";
import { useState, ChangeEvent } from "react";
import styles from "@/styles/Home.module.css";
import InputField from "@/components/input/InputField";
import SelectField from "@/components/input/SelectField";

type Props = {
  initialValues: contactForm;
};

export default function CallbackForm({ initialValues }: Props) {
  const [form, setForm] = useState<contactForm>(initialValues);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string, name: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const message = `Name: ${form.name}%0APhone: ${form.phone}%0AService: ${form.service}`;
    window.open(`https://wa.me/message/6CC5DBYQYKNLJ1?text=${message}`);
  };

  return (
    <div className={styles.contact_form}>
      <h4 className={styles.f_title}>Schedule a Call Back</h4>
      <p className={styles.f_subtitle}>
        Fill the form to connect instantly via WhatsApp
      </p>

      <div className={styles.f_row}>
        <Label text="Your Name" required />
        <InputField
          name="name"
          value={form.name}
          onChange={handleInputChange}
          placeholder="Enter your name"
        />
      </div>
      <div className={styles.f_row}>
        <Label text="State Nmae" required />
        <InputField
          type="number"
          name="state"
          value={form.state}
          onChange={handleInputChange}
          placeholder="Enter states name"
        />
      </div>
      <div className={styles.f_row}>
        <Label text="District Name" required />
        <InputField
          type="number"
          name="district"
          value={form.district}
          onChange={handleInputChange}
          placeholder="Enter district name"
        />
      </div>
      <div className={styles.f_row}>
        <Label text="Phone Number" required />
        <InputField
          type="number"
          name="phone"
          value={form.phone}
          onChange={handleInputChange}
          placeholder="Enter phone number"
        />
      </div>
      <div className={styles.f_row}>
        <Label text="Technology Services" required />
        <SelectField
          name="service"
          value={form.service}
          onChange={handleSelectChange}
          options={serviceOptions}
          placeholder="Select Service"
        />
      </div>

      <Button action={handleSubmit} text="Send Via Whatsapp" />
    </div>
  );
}
