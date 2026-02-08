import { useState } from "react";
import AxiosInstance from "@/api/axios/axios";
// import { CONTACT_ENDPOINTS } from "@/api/endpoints/endPoints";
import toast from "react-hot-toast";

export const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    terms: false,
  });

  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors: any = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.terms) newErrors.terms = "Accept terms to continue";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitForm = async () => {
    if (!validate()) return;

    setLoading(true);
    try {
      await AxiosInstance.post(CONTACT_ENDPOINTS.CONTACT_US, {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      });

      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", terms: false });
      setErrors({});
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    errors,
    loading,
    handleChange,
    submitForm,
  };
};
