import { useState } from "react";
import formStyle from "../CSS/form.module.css";
import emailjs from '@emailjs/browser';
function Form(){
    const [formValue, setFormValue] = useState(
        {
            name: "",
            email: "",
            phone: "",
            message: ""
        }
    );
    const [errors, setErrors] = useState({});
    const [submitStatus, setSubmitStatus] = useState("");

    const validateName = (name) => {
        if (name.length <= 3) return "Name must be more than 3 characters.";
        if (!name.includes(" ")) return "Name must include a space for first and last name.";
        return "";
    };

    const validateEmail = (email) => {
        if (!email.includes("@") || !email.includes(".")) return "Email must contain '@' and '.'.";
        return "";
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^\+?[\d\s\-()]{10,}$/;
        if (!phoneRegex.test(phone)) return "Phone number must be valid (at least 10 digits, can include spaces, dashes, parentheses).";
        return "";
    };

    const validateMessage = (message) => {
        if (message.length <= 30) return "Message must be more than 30 characters.";
        return "";
    };

    const handleChange = (e) =>{
        const { name, value } = e.target;
        setFormValue((prev) => ({...prev,
            [name]: value,
        }));
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitStatus("");
        
        const nameError = validateName(formValue.name);
        const emailError = validateEmail(formValue.email);
        const phoneError = validatePhone(formValue.phone);
        const messageError = validateMessage(formValue.message);
        
        const newErrors = {
            name: nameError,
            email: emailError,
            phone: phoneError,
            message: messageError,
        };
        
        setErrors(newErrors);
        
        // Check if any errors
        if (nameError || emailError || phoneError || messageError) {
            return; // Don't submit
        }
        
        // Send email via EmailJS
        emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, formValue, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
            .then(() => {
                setSubmitStatus('Email sent successfully!');
                setFormValue({
                    name: "",
                    email: "",
                    phone: "",
                    message: ""
                });
                setErrors({});
            })
            .catch(() => {
                setSubmitStatus('Failed to send email. Please try again.');
            });
    };
    return (
        <div className={formStyle.formContainer}>
            <form className={formStyle.form} onSubmit={handleSubmit}>
                <h2 className={formStyle.title}>Contáctanos</h2>
                <div className={formStyle.fieldGroup}>
                    <label htmlFor="name" className={formStyle.label}>Nombre completo</label>
                    <input 
                    id="name"
                    className={formStyle.input}
                    type="text"
                    name="name" 
                    value={formValue.name} 
                    onChange={handleChange}
                    placeholder="Ingresa tu nombre completo"
                    autoComplete="name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    required
                    />
                    {errors.name && <p id="name-error" className={formStyle.error}>{errors.name}</p>}
                </div>
                <div className={formStyle.fieldGroup}>
                    <label htmlFor="email" className={formStyle.label}>Correo electrónico</label>
                    <input 
                    id="email"
                    className={formStyle.input}
                    type="email"
                    name="email" 
                    value={formValue.email} 
                    onChange={handleChange}
                    placeholder="Ingresa tu correo electrónico"
                    autoComplete="email"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    required
                    />
                    {errors.email && <p id="email-error" className={formStyle.error}>{errors.email}</p>}
                </div>
                <div className={formStyle.fieldGroup}>
                    <label htmlFor="phone" className={formStyle.label}>Número telefónico</label>
                    <input 
                    id="phone"
                    className={formStyle.input}
                    type="tel"
                    name="phone" 
                    value={formValue.phone} 
                    onChange={handleChange}
                    placeholder="Ingresa tu número telefónico"
                    autoComplete="tel"
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    required
                    />
                    {errors.phone && <p id="phone-error" className={formStyle.error}>{errors.phone}</p>}
                </div>
                <div className={formStyle.fieldGroup}>
                    <label htmlFor="message" className={formStyle.label}>Mensaje</label>
                    <textarea 
                    id="message"
                    className={formStyle.textarea}
                    name="message" 
                    value={formValue.message} 
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu evento"
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    required
                    />
                    {errors.message && <p id="message-error" className={formStyle.error}>{errors.message}</p>}
                </div>
                <button type="submit" className={formStyle.button} aria-label="Enviar formulario de contacto">
                    Enviar Mensaje
                </button>
                {submitStatus && <p className={formStyle.status} role="status">{submitStatus}</p>}
            </form>
        </div>
    )
}
export default Form;
